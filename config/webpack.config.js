/* eslint-disable */

const path = require('path')

module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/lib'),
    chunkFilename: '[name].bundle.js',
    library: 'cui',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
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
