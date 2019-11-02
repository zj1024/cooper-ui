const path = require('path')

module.exports = {
  mode: 'development',
  entry: './lib/index.tsx',
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, './dist'),
    library: 'cui',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}
