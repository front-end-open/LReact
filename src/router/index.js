/*
 * @LastEditTime: 2022-03-17 00:47:14
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import JSX from "@/views/capter01/JSXBase.js";
import RenderDom from "@/views/capter02/RnderDom.js";
import Componet from "@/views/Component/component.jsx";
import NotFund from "@/views//common/404.jsx";
let router = [
  {
    path: "/",
    name: "base",
    component: JSX,
  },
  {
    path: "/renderDom",
    name: "renderDom",
    component: RenderDom,
  },
  {
    path: "/components",
    name: "components",
    component: Componet,
  },
  {
    path: "*",
    name: "404",
    component: NotFund,
  },
];

export default router;
