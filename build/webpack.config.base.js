const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    resolve: {
        alias: {
          '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader',
                options: {
                limit: 100000,
                name: '[name].[ext]',
                outputPath: '/assets/fonts'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd(),
            dry: false,
            verbose: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets',
                toType: 'dir'
            }
        ])
    ]
}