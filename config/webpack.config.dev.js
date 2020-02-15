/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 自定义控制台提示
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const base = require('./webpack.config')

const PORT = 9527
const NODE_ENV = 'development'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../docs/src/index'),
  ],
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    quiet: true,
    port: PORT,
    compress: true,
    hot: true,
    open: false,
    overlay: true,
    progress: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/public/index.html'),
      NODE_ENV,
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`- Local: http://localhost:${PORT}`],
        notes: ['Some additional notes to be displayed upon successful compilation'],
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
