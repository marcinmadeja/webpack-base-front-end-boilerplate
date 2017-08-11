const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const Main = require('./webpack.config.common');
const PATHS = Main.PATHS();



const commonConfig = merge([Main.commonConfig()]); 
const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },    
    output: {
      chunkFilename: 'scripts/[name].[hash:8].js',
      filename: 'scripts/[name].[hash:8].js',
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    recordsPath: path.join(__dirname, 'records.json'),
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],    
  },  
  parts.clean(PATHS.distName),
  parts.devServer(),
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),  
  parts.extractCSS(),
  parts.lintCSS({ include: PATHS.src }),
  parts.loadFonts({
    options: {
      name: 'fonts/[name].[hash:8].[ext]',
    },
  }),
  parts.loadImages( {
    use: [ 
      { 
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: '[name].[ext]',
        },        
      },
    ],
  }),
  parts.extractBundles([
    {
      name: 'vendor',

      minChunk: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunk: Infinity,
    },
  ]),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      safe: true,
    },
  }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),    
]);

module.exports = () => {
  return merge(commonConfig, productionConfig);
};