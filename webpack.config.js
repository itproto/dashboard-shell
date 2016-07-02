var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  devtool: 'source-map',
             
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
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

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.tmpl.html')
    })
  ],

  watchOptions: {
    aggregateTimeout: 100
  }
}
