const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const CompressionPlugin = require('compression-webpack-plugin');
const getBasicWebpackConfig = require('./basic.webpack');

function getConfig(entryDirectory, destDirectory, fileName) {
  const basicWebpackConfig = getBasicWebpackConfig(entryDirectory, destDirectory, fileName);

  basicWebpackConfig.devtool = 'cheap-module-source-map';

  if (typeof basicWebpackConfig.plugins === 'undefined') {
    basicWebpackConfig.plugins = [];
  }

  basicWebpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT5',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'
      },
      concurrency: 10
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CompressionPlugin({
      asset: '{file}.gz',
      algorithm: 'gzip',
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );

  return basicWebpackConfig;
}

module.exports = getConfig;
