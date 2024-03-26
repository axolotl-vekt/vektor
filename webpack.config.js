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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
	devServer: {
    static: {
      publicPath: '/dist', 
      directory: path.join(__dirname, 'dist')
    }, 
	  proxy: {'/api': 'http://localhost:3000'},
    //allows us to go directly to the homepage or wahtever we type --> redirect all server requests to your root HTML file, allowing React Router to handle the routing 
    historyApiFallback: true,
  }
};

module.exports = config;