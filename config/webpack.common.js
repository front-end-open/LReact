/*
 * @LastEditTime: 2022-07-27 22:29:42
 * @Description: 公共配置文件
 * @Date: 2022-03-15 00:33:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// eslint-disable-next-line import/order
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
const imageInlineSizeLimit = 4 * 1024

// eslint-disable-next-line import/order
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取bundle文件的css文件
const webpack = require('webpack')

const paths = require('./paths')

module.exports = function (options) {
    return {
        mode: options.mode,
        entry: [paths.appSrc],
        output: {
            path: paths.appBuild,
            chunkFilename: 'static/js/[name].[chunkhash].js', // 设置路由分拆后的chunk名
            publicPath: '/',
            assetModuleFilename: 'static/assets/[hash][ext][query]' // 图片资源输出目录, 适用于Asset-Modules Type: (assets | assets/resource)
        },
        cache: {
            // 使用持久化缓存
            type: 'filesystem' //memory:使用内容缓存 filesystem：使用文件缓存
        },
        devtool: false,
        module: {
            rules: [
                {
                    // 优先使用rules列表第一个匹配的loader，提高loader解析效率
                    oneOf: [
                        {
                            test: [/\.js$/, /\.jsx$/],
                            exclude: /node_modules/,
                            use: [
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        presets: [
                                            '@babel/preset-env',
                                            '@babel/preset-react'
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            // .css文件处理,loader解析原则从右向左
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: [
                                options.mode === 'development'
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                                    }
                                },
                                'postcss-loader'
                            ]
                        },
                        {
                            // .scss/sass文件处理
                            test: sassRegex,
                            exclude: sassModuleRegex,
                            use: [
                                options.mode === 'development'
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1 // 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader
                                    }
                                },
                                'postcss-loader',
                                'sass-loader', //
                                {
                                    loader: 'sass-resources-loader', // 配置scss全局模块注入
                                    options: {
                                        resources: [
                                            // 配置全局注入文件
                                            path.resolve(
                                                paths.appSrc,
                                                'style/varibale.scss'
                                            )
                                        ]
                                    }
                                }
                            ]
                        },
                        // webpack v5无需单独配置资源模块的打包处理loader.内置资源处理规则
                        // 图片处理
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            type: 'asset',
                            parser: {
                                // 配置图片文件的处理，按限制进行输出bundle或者导出到打包目录
                                dataUrlCondition: {
                                    maxSize: imageInlineSizeLimit // 4kb
                                }
                            }
                        },
                        // 字体文件.矢量图像文件处理
                        {
                            test: /\.(eot|svg|ttf|woff|woff2?)$/,
                            type: 'asset/resource'
                        }
                    ]
                }
            ]
        },
        resolve: {
            modules: [paths.appNodeModules],
            extensions: ['.js', '.jsx', '.css'],
            alias: {
                moment$: 'moment/moment.js',
                '@': paths.appSrc,
                '@public': paths.appPublic
            }
        },
        devServer: {
            ...options.devServer
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.ProvidePlugin({
                React: 'react' // ['react']    // 全局注入React标识符
            }), // 注入全局变量插件
            ...options.plugins
        ],
        stats: options.stats // 打包日志发生错误和新的编译时输出
    }
}
