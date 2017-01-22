const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const context = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  context,

  entry: './index.js',
  output: {
    path: outputPath,
    filename: '[hash].js',
  },

  module: {
    loaders: [
      // transpiles es6
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      // compiles sass
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass']),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlPlugin({
      template: './index.html',
    }),
  ],
};
