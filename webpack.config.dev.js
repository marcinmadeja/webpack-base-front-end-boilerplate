const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const Main = require('./webpack.config.common');
const PATHS = Main.PATHS();

const commonConfig = merge([Main.commonConfig()]); 
const productionConfig = merge([
  parts.devServer(),
  parts.loadCSS(),
  parts.lintCSS({ include: PATHS.src }),
  parts.loadFonts({
    options: {
      name: './fonts/[name].[hash:8].[ext]',
    },
  }),
  parts.loadImages(),
]);

module.exports = () => {
  return merge(commonConfig, productionConfig);
};