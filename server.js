/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const LOCALHOST_PORT = 1488;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(LOCALHOST_PORT, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + LOCALHOST_PORT);
});
