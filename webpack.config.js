const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    app: PATHS.src + '/index.js',
    sass: PATHS.src + '/main.scss',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: PATHS.dist,
    hot: true,
  },  

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },  

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: `${PATHS.src}/index.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },  
};