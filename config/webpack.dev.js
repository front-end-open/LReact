/*
 * @LastEditTime: 2022-03-15 01:10:15
 * @Description: 开发环境配置
 * @Date: 2022-03-15 00:33:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
module.exports = require("./webpack.common")({
  mode: "development",
  modules: [paths.appNodeModules],
  extensions: [".js", ".jsx", ".css"],
  alias: {
    "@src": paths.appSrc,
    "@public": paths.appPublic,
  },
  plugins: [],
  stats: "errors-only", //只在发生错误或有新的编译时输出
});
