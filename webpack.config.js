const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    })
  ],
<<<<<<< HEAD
	devServer: {
    static: {
      publicPath: '/dist', 
      directory: path.join(__dirname, 'dist')}, 
	proxy: {'/': 'http://localhost:3000'}}
=======
	devServer: {static: {publicPath: '/dist', directory: path.join(__dirname, 'dist')}, 
	proxy: {'/': 'http://localhost:3000'}},
>>>>>>> 1d0ac2534c0f4cbbbf41234e92df6386d455abf8
};

module.exports = config;