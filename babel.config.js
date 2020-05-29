module.exports = {
  babelrc: false,
  presets: [
    ['@nuxt/babel-preset-app'],
    ['@babel/preset-env'],
  ],
  plugins: [
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
    }],
  ],
};
