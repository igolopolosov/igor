const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './scripts/index'
   ],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.styl']
	},
	devtool: 'eval',
	devServer: {
		contentBase: '/',
		port: process.env.PORT || 1488,
		host: process.env.IP || 'localhost',
		historyApiFallback: true,
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			},
            PRODUCTION: JSON.stringify(false)
		}),
		new ExtractTextPlugin('style.[hash].css'),
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			inject: 'body'
		})
	],
	module: {
		loaders: [
            {
                test: /\.(png|jpg)/,
                loader: 'file-loader?name=[name].[ext]'
            },
			{
				test: /\.jsx?$/,
				loader: ['react-hot-loader/webpack', 'babel-loader'],
				include: path.join(__dirname, 'scripts')
			},
            {
                test: /\.tsx?$/,
                loader: ['react-hot-loader/webpack', 'ts-loader'],
                include: path.join(__dirname, 'scripts')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:6]!postcss-loader'
            }
		]
	}
}
