/*
 * @LastEditTime: 2022-03-26 23:56:36
 * @Description: 开发环境配置
 * @Date: 2022-03-15 00:33:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = require("./webpack.common")({
  mode: "development",
  devtool: "inline-source-map",
  performance: {
    // 开启性能提示
    hints: "warning",
    maxAssetSize: 100000, // 100kb 输出单个资源文件的体积阈值提示
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
    }),
  ],
  stats: "errors-only", //只在发生错误或有新的编译时输出
});
