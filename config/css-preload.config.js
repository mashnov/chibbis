module.exports = {
  preload: {
    scss: [
      '~/assets/styles/index.scss',
    ],
  },
  postLoad: [
    {
      src: '~/assets/styles/base-style.scss',
      lang: 'scss',
    },
  ],
};
