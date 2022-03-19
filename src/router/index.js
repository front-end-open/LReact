/*
 * @LastEditTime: 2022-03-19 23:59:38
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import App from "@/App.js";
import JSX from "@/views/capter01/JSXBase.js";
import RenderDom from "@/views/capter02/RnderDom.js";
import Componet from "@/views/Component/component.jsx";
import State from "@/views/State/index.js";
import NotFund from "@/views//common/404.jsx";
import EventHandle from "@/views/Event/index.jsx";
import ConditionRender from "@/views/ConditionalRender/index.jsx";

let router = [
  {
    path: "/",
    name: "home",
    component: App,
    children: [
      {
        path: "/base",
        name: "base",
        menuname: "jSX基础",
        component: JSX,
      },
      {
        path: "/renderDom",
        name: "renderDom",
        menuname: "元素渲染",
        component: RenderDom,
      },
      {
        path: "/components",
        name: "components",
        menuname: "组件-props",
        component: Componet,
      },
      {
        path: "/state",
        name: "state",
        menuname: "组件-state",
        component: State,
      },
      {
        path: "/event",
        name: "EventHandle",
        menuname: "事件处理",
        component: EventHandle,
      },
      {
        path: "/conditionrender",
        name: "ConditionRender",
        menuname: "条件渲染",
        component: ConditionRender,
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
