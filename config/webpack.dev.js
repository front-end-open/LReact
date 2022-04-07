/*
 * @LastEditTime: 2022-04-07 10:46:51
 * @Description: 开发环境配置
 * @Date: 2022-03-15 00:33:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
module.exports = require('./webpack.common')({
    mode: 'development',
    devtool: 'inline-source-map',
    performance: {
        // 开启性能提示
        hints: 'warning',
        maxAssetSize: 100000 // 100kb 输出单个资源文件的体积阈值提示
    },
    devServer: {
        // static: { // webpack dev server v4支持
        //     directory: path.join(__dirname, '../public'),
        //     publicPath: '/api'
        // },
        // 配置静态服务目录
        contentBase: path.join(__dirname, '../public'), // webpack-dev-server v3支持
        open: true,
        compress: true, // gzip 压缩
        stats: 'minimal',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
            generateStatsFile: true // 是否生成stats.json文件
        })
    ],
    stats: 'errors-only' //只在发生错误或有新的编译时输出
})
