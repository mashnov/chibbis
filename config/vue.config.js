const isProd = process.env.NODE_ENV !== 'development';

module.exports = {
  config: {
    productionTip: true,
    devtools: !isProd,
    silent: isProd,
    performance: !isProd,
  },
};
