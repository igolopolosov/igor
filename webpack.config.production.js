/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './scripts/index',
  output: {
    path: path.join(__dirname, '../usehotkey.github.io/static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.styl']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        drop_console: true
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'scripts') },
      { test: /\.styl$/, loader: 'style!css!stylus?resolve url' }
    ]
  }
};
