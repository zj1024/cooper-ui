/* eslint-disable */

const base = require('./webpack.config')
const NODE_ENV = 'production'

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
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
})
