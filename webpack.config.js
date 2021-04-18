
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', ".css"],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html' //relative to root of the application
  })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
  devtool : 'source-map'
}