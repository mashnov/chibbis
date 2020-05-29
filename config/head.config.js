const get = require('lodash/get');

const appShortName = '';
const appDescription = '';

const defaultImageWidth = '1200';
const defaultImageHeight = '630';
const defaultPageTitle = 'Заказ еды с доставкой';
const defaultDescription = 'Chibbis - Заказ еды с доставкой';
const defaultCanonical = 'https://chibbis.ru';
const defaultDomain = 'chibbis.ru/';
const defaultShareImage = 'https://static.chibbis.ru/Content/img/optimized/bird-icon-3.jpg';

const noscript = [
  { innerHTML: 'Чтобы открыть эту страницу должен быть включен JavaScript.' },
];
const htmlAttrs = {
  lang: 'ru-RU',
  prefix: 'og: http://ogp.me/ns#',
};

const generateMeta = (params) => {
  const title = get(params, 'title', defaultPageTitle);
  const description = get(params, 'description', defaultDescription);
  const image = get(params, 'image', defaultShareImage);
  const canonical = get(params, 'canonical', defaultCanonical);
  const imageWidth = get(params, 'imageWidth', defaultImageWidth);
  const imageHeight = get(params, 'imageHeight', defaultImageHeight);
  const videoUrl = get(params, 'videoUrl', null);
  const videoType = 'video/mp4';
  return {
    title,
    link: [
      {
        rel: 'canonical',
        href: canonical,
      },
    ],
    meta: [
      {
        hid: 'charset',
        charset: 'utf-8',
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: videoUrl ? 'video.other' : 'website',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ru_RU',
      },
      {
        hid: 'edge-compatible',
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        hid: 'canonical',
        itemprop: 'url',
        content: canonical,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: canonical,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: canonical,
      },
      {
        hid: 'image',
        itemprop: 'image',
        content: image,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: image,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: image,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: imageWidth,
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: imageHeight,
      },
      {
        hid: 'og:video',
        name: 'og:video',
        content: videoUrl,
      },
      {
        hid: 'og:video:secure_url',
        name: 'og:video:secure_url',
        content: videoUrl,
      },
      {
        hid: 'og:video:type',
        name: 'og:video:type',
        content: videoType,
      },
      {
        hid: 'og:video:width',
        name: 'og:video:width',
        content: '1206',
      },
      {
        hid: 'og:video:height',
        name: 'og:video:height',
        content: '678',
      },
      {
        hid: 'name',
        itemprop: 'name',
        content: title,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: title,
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:domain',
        name: 'twitter:domain',
        content: defaultDomain,
      },
    ],
  };
};

module.exports = {
  generateMeta,
  htmlAttrs,
  noscript,
  appName: defaultDescription,
  appShortName,
  appDescription,
};
