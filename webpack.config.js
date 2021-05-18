const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './bundle.js',
    },
    mode:'development',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins:['@babel/plugin-proposal-class-properties'],
              }
            }
          },
          {
            
                test: /\.html$/i,
                loader: 'html-loader',
              
          }
        ]
      },
      plugins:[new HtmlWebpackPlugin({
        template: './src/index.html',
        })
    ],
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000,
    },
  };
  
  
  