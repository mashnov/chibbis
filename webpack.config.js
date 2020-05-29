// For IDEs usage only
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
    },
    extensions: ['.js', '.vue'],
  },
};
