/*
 * @LastEditTime: 2022-04-07 10:37:04
 * @Description:服务入口
 * @Date: 2022-03-15 00:48:47
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const path = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// webpack开发 配置文件
const webpackConfig = require('../config/webpack.dev')
// 自定义日志输出
const logger = require('./logger')
// 服务配置
const appConfig = require('./appConfig')

const { port, host } = appConfig // 监听的端口号
//编译器
const compiler = Webpack(webpackConfig)
//  devServer 参数
const devServerOptions = Object.assign({}, webpackConfig.devServer)
console.log(devServerOptions)
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(port, host, async (err) => {
    if (err) {
        return logger.error(err.message)
    }
    logger.appStarted(port, 'localhost')
})
