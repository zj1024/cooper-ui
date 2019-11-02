/* eslint-disable */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = 'development'

const externals =
  NODE_ENV === 'production'
    ? {
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
    : {}

module.exports = {
  mode: NODE_ENV,
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist/lib'),
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      NODE_ENV,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals,
}
