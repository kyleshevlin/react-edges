const webpack = require('webpack')
const { join } = require('path')

const context = join(__dirname, 'src')

module.exports = {
  context,
  entry: './index.js',
  output: {
    path: join(__dirname, 'dist'),
    library: 'mdx-deck-edges',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: context
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
}
