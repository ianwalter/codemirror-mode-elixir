const { join } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const src = join(__dirname, 'src')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: join(__dirname, 'src/main.js'),
  output: {
    path: join(__dirname, 'site'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': src
    }
  },
  module: {
    rules: [
      { test: /\.js$/, include: src, loader: 'babel-loader' },
      { test: /\.vue$/, include: src, loader: 'vue-loader' },
      {
        test: /\.s?css$/,
        include: src,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    ...(isProduction ? [new MiniCssExtractPlugin()] : [])
  ]
}
