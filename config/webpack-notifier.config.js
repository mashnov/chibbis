const path = require('path');
const pkg = require('../package.json');

const contentImage = path.resolve(__dirname, './project.png');
const alwaysNotify = true;

module.exports = {
  title: pkg.name,
  alwaysNotify,
  contentImage,
};
