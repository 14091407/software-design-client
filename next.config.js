const withFonts = require('next-fonts');
const { parsed: localEnv } = require('dotenv').config()
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')

module.exports = withFonts({
  enableSvg: true,
  webpack: (config, { dev, isServer }) => {
    config.node = {
      fs: 'empty'
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    if(!dev && !isServer) {
      config.plugins.push(new TerserPlugin({
          cache: 'node_modules/.cache/terser-webpack-plugin/',
          parallel: true
      }))
      config.plugins.push(new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
      }))
    }
    return config
  }
})