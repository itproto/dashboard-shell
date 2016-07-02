var path = require('path');

var webpack = require('webpack');

var appName = 'hello-world';
module.exports = {
  entry: path.join(__dirname, 'src/apps/' + appName + '/index.js'),
             
  output: {
    path: path.join(__dirname, 'build/apps'),
    filename: appName + '.js',
    libraryTarget: 'amd',
    library: appName
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ]
}
