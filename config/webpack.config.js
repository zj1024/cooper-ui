const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const pkg = require('../package.json')
const base = require('./webpack.config')
const { getExternals, getIPv4AddressList } = require('./utils')

const { NODE_ENV = 'production' } = process.env
const PORT = 9527

module.exports = Object.assign({}, base, {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../docs/src/index'),
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: `[name].cooper-ui-docs.${pkg.version}.js`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, '../docs/src'),
      'cooper-ui': path.resolve(__dirname, '../libs'),
      'cooper-theme': path.resolve(__dirname, '../theme'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, '../libs'), path.resolve(__dirname, '../docs')],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2,
            },
          },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          'raw-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeViewBox: false }],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  devServer: {
    quiet: true,
    port: PORT,
    compress: true,
    hot: true,
    open: false,
    overlay: true,
    progress: true,
    host: '0.0.0.0',
  },
  externals: getExternals(),
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/public/index.html'),
      NODE_ENV,
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: getIPv4AddressList().map(d => `> http://${d}:${PORT}`),
        notes: ['Some additional notes to be displayed upon successful compilation'],
      },
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
})
