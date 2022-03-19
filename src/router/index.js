/*
 * @LastEditTime: 2022-03-20 02:58:04
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
import ListRender from "@/views/ListRender/index.jsx";
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
      {
        path: "/listrender",
        name: "ListRender",
        menuname: "列表渲染",
        component: ListRender,
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
