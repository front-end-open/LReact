/*
 * @LastEditTime: 2022-03-25 23:41:59
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import App from "@/App.js";
import NotFund from "@/views/common/404";
import GlobalContext from "@/views/Context";
let router = [
  {
    path: "/",
    name: "home",
    component: App,
    children: [
      {
        path: "/globalcontext",
        name: "GlobalContext",
        menuname: "公共状态管理-Context",
        component: GlobalContext,
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: NotFund,
  },
];

export default router;
