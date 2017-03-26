const webpack = require('webpack')
const path = require('path')

const config = {

  context:  path.resolve(__dirname, 'src'),

  entry: './app/app.ts',

  watch: true,

  output: {
    path: path.resolve(__dirname, 'src/dist/js'),
    publicPath: '/dist/js',
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',              
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        },
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }
    ]
  },

   devServer: {
        contentBase: './src/',
        publicPath: '/dist/js',
        port: 8080,
        open: true
    }
}

module.exports = config;