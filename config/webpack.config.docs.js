/* eslint-disable */

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')

const NODE_ENV = 'production'

module.exports = merge(base, {
  mode: NODE_ENV,
  entry: './docs/src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/public/index.html'),
      NODE_ENV,
    }),
  ],
})
