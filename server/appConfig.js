/*
 * @LastEditTime: 2022-03-15 00:52:44
 * @Description:基础服务配置 自定义服务端口，ip, 代理地址
 * @Date: 2022-03-15 00:48:27
 * @Author: wangshan
 * @LastEditors: wangshan
 */
module.exports = {
  deployUrl: "127.0.0.0:8080", // 本地代码推推送到指定服务器
  proxyUrlMap: {
    "/api": "localtion:3000", // 代理的接口
    "/api2": "localtion:4000", // 代理的接口
  },
  port: 9000, //端口号,
  host: "localhost", //主机号
};
