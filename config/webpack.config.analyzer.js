const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    chunkFilename: `js/[name].[hash:5].${pkg.version}.js`,
  },
  optimization: {
    minimize: true,
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader'],
        }),
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
  // devtool: '(none)',
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
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin(),
    new ExtractTextPlugin({
      filename: `style/[name].[hash:5].${pkg.version}.css`,
      allChunks: false,
    }),
    new UglifyJsPlugin({
      sourceMap: false,
    }),
  ],
})
