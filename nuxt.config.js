const WebpackNotifierPlugin = require('webpack-notifier');
const headOptions = require('./config/head.config');
const fontsOptions = require('./config/fonts.config');
const polyfillOptions = require('./config/polyfill.config');
const vueOptions = require('./config/vue.config');
const cookieUniversalOptions = require('./config/cookie-universal.config');
const componentCacheOptions = require('./config/component-cache.config');
const WebpackNotifierOptions = require('./config/webpack-notifier.config');
const faviconOptions = require('./config/favicon.config');
const styleResourcesOptions = require('./config/css-preload.config');
const generateOptions = require('./config/generate.config');
const routerOptions = require('./config/router.config');
const babelOptions = require('./babel.config');

const generatedMeta = headOptions.generateMeta();

module.exports = {
  mode: 'universal',
  parallel: true,
  styleResources: styleResourcesOptions.preload,
  css: styleResourcesOptions.postLoad,
  webfontloader: fontsOptions,
  vue: vueOptions,
  head: {
    htmlAttrs: headOptions.htmlAttrs,
    script: polyfillOptions.script,
    noscript: headOptions.noscript,
    title: generatedMeta.title,
    link: generatedMeta.link,
    meta: generatedMeta.meta,
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  modules: [
    ['@nuxtjs/style-resources'],
    ['@nuxtjs/axios'],
    ['nuxt-svg-loader'],
    ['nuxt-user-agent'],
    ['nuxt-webfontloader'],
    ['cookie-universal-nuxt', cookieUniversalOptions],
    ['@nuxtjs/component-cache', componentCacheOptions],
    ['nuxt-rfg-icon', faviconOptions],
    ['@nuxtjs/manifest'],
  ],
  loading: {
    color: '#f7a83f',
    height: '3px',
  },
  plugins: [
    {
      src: '~/plugins/logger.server',
      mode: 'server',
    },
    {
      src: '~/plugins/logger.client',
      mode: 'client',
    },
    {
      src: '~/plugins/viewport.client',
      mode: 'client',
    },
  ],
  build: {
    babel: {
      configFile: false,
      ...babelOptions,
    },
    plugins: [
      new WebpackNotifierPlugin(WebpackNotifierOptions),
    ],
  },
  generate: generateOptions,
  router: routerOptions,
};
