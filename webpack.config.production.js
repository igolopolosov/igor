const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');

config.entry = [
    'babel-polyfill',
    './scripts/index'
];
config.output = {
    path: path.join(__dirname, '../usehotkey.github.io'),
	filename: 'bundle.[hash].js',
	publicPath: '/'
};
config.devtool = 'source-map';
config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('style.[hash].css'),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        },
        PRODUCTION: JSON.stringify(true)
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        }
    }),
    new HtmlWebpackPlugin({
        template: 'index.ejs',
        inject: 'body',
        favicon: 'assets/favicon.ico'
    })
];

module.exports = config;
