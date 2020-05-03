const os = require('os')
const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const pkg = require('../package.json')

const PORT = 9527
const { NODE_ENV = 'development' } = process.env
const { getIPv4AddressList } = require('./utils')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../docs/src/index'),
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: `js/cooper-ui-docs.[name].[hash:5].${pkg.version}.js`,
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
        test: /\.(jsx?|tsx?)$/,
        include: [path.resolve(__dirname, '../libs'), path.resolve(__dirname, '../docs')],
        exclude: /node_modules/,
        use: ['happypack/loader?id=babel'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader'],
        }),
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
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: `css/cooper-ui-docs.[name].[hash:5].${pkg.version}.css`,
      allChunks: true,
    }),
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
      threadPool: happyThreadPool,
    }),
  ],
}
