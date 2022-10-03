'use strict'

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const publicPath = '/'
const path = require('path')

module.exports = webpackMerge.smart(baseConfig, {
  entry: [
    'regenerator-runtime/runtime',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: publicPath
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 5000,
    historyApiFallback: true,
    stats: 'minimal'
  },
  watchOptions: {
    poll: 1000,
    ignored: ['node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_API_URL: JSON.stringify(
          'https://api-staging.bid2max.com/api/v1/graphql'
        ),
        NODE_ENV: JSON.stringify('development'),
        ENCRYPTION_KEY: JSON.stringify(
          'cmsaZWC38bsPL9aHp+PXXfrHIKEhBqgNL5KwcKY74Qw='
        ),
        LOCAL_STORAGE_KEY: JSON.stringify('bidma-staging'),
        SECRET_TOKEN_KEY: JSON.stringify('staging/SECRET_TOKEN_KEY'),
        SECRET_USER_KEY: JSON.stringify('staging/SECRET_USER_KEY'),
        RESET_PASSWORD_TOKEN_KEY: JSON.stringify(
          'staging/RESET_PASSWORD_TOKEN_KEY'
        )
      }
    })
  ]
})
