/* eslint-disable */

const path = require('path')

module.exports = {
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
        include: [path.resolve(__dirname, '../libs'), path.resolve(__dirname, '../docs')],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(__dirname, '../libs'),
          path.resolve(__dirname, '../docs'),
          path.resolve(__dirname, '../node_modules/assembly-css/lib'),
        ],
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
        test: /\.svg$/,
        include: path.resolve(__dirname, '../libs/assets/icons'),
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
    ],
  },
}
