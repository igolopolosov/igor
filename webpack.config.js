const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.styl']
  },
  devtool: 'eval',
  devServer: {
    contentBase: '/',
    port: process.env.PORT || 1337,
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
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'scripts')
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.join(__dirname, 'scripts')
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              }
            }
          },
          { loader: 'less-loader' },
        ]
      }
    ]
  }
}
