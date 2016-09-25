const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
};
