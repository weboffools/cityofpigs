const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist'),
        },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'City of Pigs',
      }),
    ],
};