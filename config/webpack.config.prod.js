/* eslint-disable */
const merge = require('webpack-merge')
const base = require('./webpack.config')
const NODE_ENV = 'production'

module.exports = merge(base, {
  mode: NODE_ENV,
  entry: './libs/index.js',
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
})
