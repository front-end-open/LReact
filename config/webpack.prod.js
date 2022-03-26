/*
 * @LastEditTime: 2022-03-27 01:09:40
 * @Description: 生产环境配置
 * @Date: 2022-03-15 00:33:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //打包前清空build目录文件
const ProgressBarPlugin = require("progress-bar-webpack-plugin"); // 打包进度条美化
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离bundle的css文件为单独输出文件
const chalk = require("chalk");

module.exports = require("./webpack.common")({
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(), // 清除打包目录
    new ProgressBarPlugin({
      // webpack构建打包进度
      format:
        `${chalk.green.bold("build[:bar]")} ` +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
      width: 60,
    }),
    new MiniCssExtractPlugin({
      // 分离样式文件,
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  stats: "normal", //标准输出
});
