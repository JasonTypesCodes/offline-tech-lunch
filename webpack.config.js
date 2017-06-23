const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './presentation/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/build/'),
    filename: 'presentation.js'
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'presentation'),
      path.join(__dirname, 'node_modules/reveal.js/')
    ]
  },
  module: {
    rules: [ 
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules/reveal.js/css/theme/template']
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'application/font-woff',
              limit: '10000',
              name: './fonts/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './fonts/[hash].[ext]'
            }
          }
        ]
      },
      { 
        test: /\.png$/, 
        use: [ 
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};