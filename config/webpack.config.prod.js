/* eslint-disable */

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const base = require('./webpack.config')
const NODE_ENV = 'production'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: './libs/index.js',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  plugins: [new CleanWebpackPlugin()],
})
