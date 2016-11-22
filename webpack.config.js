/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:1488',
    'webpack/hot/dev-server',
    './scripts/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'scripts') },
      { test: /\.styl$/, loader: 'style!css!stylus?resolve url' }
    ]
  }
};
