const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin')

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
		extensions: ['*', '.js', '.styl']
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
			}
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
				test: /\.jsx?$/,
				loader: ['react-hot-loader/webpack', 'babel-loader'],
				include: path.join(__dirname, 'scripts')
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader?resolve url'
			}
		]
	}
}
