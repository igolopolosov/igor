const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config');

config.mode = 'production';
config.entry = [
    'babel-polyfill',
    './scripts/index'
];
config.output = {
    path: path.join(__dirname, './dist'),
	filename: 'bundle.[hash].js',
	publicPath: '/'
};
config.devtool = 'source-map';
config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        },
        PRODUCTION: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
        template: 'index.ejs',
        inject: 'body'
    })
];

module.exports = config;
