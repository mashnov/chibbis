const updateFavicon = !!process.env.npm_config_favicon;

module.exports = {
  masterPicture: 'config/project.png',
  static: true,
  force: updateFavicon,
  staticPath: '/',
  rfg: {
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: 0,
        assets: {
          ios6AndPriorIcons: true,
          ios7AndLaterIcons: true,
          precomposedIcons: true,
          declareOnlyDefaultIcon: false,
        },
      },
      windows: {
        pictureAspect: 'whiteSilhouette',
        backgroundColor: '#ffffff',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: true,
            medium: true,
            big: true,
            rectangle: true,
          },
        },
      },
      androidChrome: {
        pictureAspect: 'shadow',
        themeColor: '#ffffff',
        manifest: {
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true,
        },
        assets: {
          legacyIcon: true,
          lowResolutionIcons: true,
        },
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 60,
        themeColor: '#ffffff',
      },
      coast: {
        pictureAspect: 'backgroundAndMargin',
        threshold: 60,
        margin: 0,
      },
    },
    settings: {
      compression: 0,
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
    },
  },
};
