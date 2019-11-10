/* eslint-disable */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const base = require('./webpack.config')

const PORT = 8080
const NODE_ENV = 'development'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: './docs/index.tsx',
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
})
