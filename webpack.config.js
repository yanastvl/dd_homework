const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: "[name][ext]",
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "img/banner_images"},
            ],
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: { sourceMap: true }
                    }, {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions: {
                              plugins: [
                                  'autoprefixer',
                                  'css-mqpacker', 
                                  'cssnano'
                                ]
                            }
                        }
                    }, {
                      loader: 'sass-loader',
                      options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '/[name].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },

        ]
    }
};