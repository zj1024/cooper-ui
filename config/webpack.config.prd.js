const os = require('os')
const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const pkg = require('../package.json')

const { externals, getPluginExternals } = require('./utils')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const { NODE_ENV = 'production', ANALYZER = 'false' } = process.env

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../docs/src/index'),
  output: {
    path: path.resolve(__dirname, '../dist/docs'),
    chunkFilename: `js/cooper-ui-docs.[name].[hash:5].${pkg.version}.js`,
  },
  externals,
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
  plugins: [
    ANALYZER === 'true' ? new BundleAnalyzerPlugin() : () => {},
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/public/index.html'),
      NODE_ENV,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new HtmlWebpackExternalsPlugin({
      externals: getPluginExternals(),
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: `style/cooper-ui-docs.[name].[hash:5].${pkg.version}.css`,
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
