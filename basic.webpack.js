/* eslint prefer-template: 'off' */

const path = require('path');

function getConfig(entryDirectory, destDirectory, fileName) {
  const entry = path.resolve(__dirname, entryDirectory);
  const dest = path.resolve(__dirname, destDirectory);
  return {
    name: fileName,
    devtool: 'source-map',
    entry: entry + '/' + fileName,
    output: {
      path: dest,
      filename: fileName
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          include: entry,
          test: /\.js$/,
          query: {
            // array-includes for old Chrome browsers (f.e.: v.43.0.2357.134)
            plugins: ['array-includes'],
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  };
}

module.exports = getConfig;
