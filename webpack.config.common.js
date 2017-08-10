const path = require('path');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.src + '/index.js',
      sass: PATHS.src + '/main.scss',
    },

    devtool: 'inline-source-map',

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
    ],

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },      
  },
]);

exports.commonConfig = () => commonConfig;

exports.PATHS = () => PATHS;
