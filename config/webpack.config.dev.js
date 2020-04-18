/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const pkg = require('../package.json')

const base = require('./webpack.config')

const PORT = 9527
const NODE_ENV = 'development'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../docs/src/index'),
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: `[name].cooper-ui-docs.${pkg.version}.js`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, '../docs/src'),
      'cooper-ui': path.resolve(__dirname, '../libs'),
      'cooper-theme': path.resolve(__dirname, '../cooper-theme'),
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
