/* eslint-disable */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 自定义控制台提示
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const base = require('./webpack.config')

const PORT = 8080
const NODE_ENV = 'development'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: './docs/src/index.tsx',
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
  ],
  devServer: {
    quiet: true,
    port: PORT,
  },
  devtool: 'cheap-module-eval-source-map',
})
