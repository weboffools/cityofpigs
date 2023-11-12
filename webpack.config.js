const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    header: './src/header.js',
    home: './src/home.js',
    menu: './src/menu.js',
    contact: './src/contact.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'City of Pigs',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
