const { NODE_ENV = 'production' } = process.env

let externals = {}
if (NODE_ENV === 'production') {
  externals = {
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
  }
}

module.exports = externals
