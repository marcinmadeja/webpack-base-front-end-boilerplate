const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distName = 'dist';
const srcName = 'src';

const PATHS = {
  distName: distName,
  srcName: srcName,
  dist: path.join(__dirname, distName),
  src: path.join(__dirname, srcName),
};

const commonConfig = merge([
  {
    devtool: 'inline-source-map',

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: `${PATHS.src}/index.html`,
      }),
    ],

    output: {
      filename: './scripts/[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },      
  },
]);

exports.commonConfig = () => commonConfig;

exports.PATHS = () => PATHS;
