/*
 * @LastEditTime: 2022-03-26 23:12:43
 * @Description: 开发环境配置
 * @Date: 2022-03-15 00:33:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = require("./webpack.common")({
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
    }),
  ],
  stats: "errors-only", //只在发生错误或有新的编译时输出
});
