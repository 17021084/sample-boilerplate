const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const publicPath = '/'

module.exports = webpackMerge.smart(baseConfig, {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: publicPath
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'vi']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BASE_API_URL: JSON.stringify('https://api.bidma.vn/api/v1/graphql'),
        NODE_ENV: JSON.stringify('production'),
        ENCRYPTION_KEY: JSON.stringify(
          'cmsaZWC38bsPL9aHp+PXXfrHIKEhBqgNL5KwcKY74Qw='
        ),
        LOCAL_STORAGE_KEY: JSON.stringify('bidma-production'),
        SECRET_TOKEN_KEY: JSON.stringify('production/SECRET_TOKEN_KEY'),
        SECRET_USER_KEY: JSON.stringify('production/SECRET_USER_KEY'),
        RESET_PASSWORD_TOKEN_KEY: JSON.stringify(
          'production/RESET_PASSWORD_TOKEN_KEY'
        )
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        configuration: {
          minimize: {
            compress: { warnings: false }
          }
        }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
})
