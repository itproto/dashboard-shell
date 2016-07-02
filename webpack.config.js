var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var mod =  {
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
};


module.exports =[
{
  name: 'apps',
  entry: {
    'hello-world' : path.join(__dirname, 'src/apps/hello-world/index.js'),
    'd3-charts': path.join(__dirname, 'src/apps/d3-charts/index.js'),
  },

  output: {
    path: path.join(__dirname, 'build/apps'),
    filename: '[name].js',
    libraryTarget: 'amd'
  },

  module: mod,

  postcss: [
    require('autoprefixer')
  ]
},

{
  name: 'shell',

  entry: path.join(__dirname, 'src/index.js'),

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: mod,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.tmpl.html')
    })
  ],

  watchOptions: {
    aggregateTimeout: 100
  }
}
]
