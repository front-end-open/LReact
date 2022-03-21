/*
 * @LastEditTime: 2022-03-22 01:24:26
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import App from "@/App.js";
let router = [
  {
    path: "/",
    name: "home",
    component: App,
    children: [],
  },
  {
    path: "*",
    name: "404",
    component: NotFund,
  },
];

export default router;
