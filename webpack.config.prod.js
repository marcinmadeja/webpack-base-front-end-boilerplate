const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const Main = require('./webpack.config.common');

const commonConfig = merge([Main.commonConfig()]); 
const productionConfig = merge([
  parts.devServer(),
]);

module.exports = () => {
  return merge(commonConfig, productionConfig);
};