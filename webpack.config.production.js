const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './scripts/index',
	output: {
		path: path.join(__dirname, '../usehotkey.github.io'),
		filename: 'bundle.[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['*', '.js', '.styl']
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new ExtractTextPlugin('style.[hash].css'),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			}
		}),
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			inject: 'body'
		})
	],
	module: {
		loaders: [
			{ test: /\.jsx?$/, loaders: 'babel-loader', include: path.join(__dirname, 'scripts') },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader?resolve url' }
		]
	}
}
