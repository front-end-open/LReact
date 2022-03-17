/*
 * @LastEditTime: 2022-03-18 00:28:16
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import "@/style/global/App.scss";
import Capter from "@/components/Capter/index.js";
import { Routes, Route } from "react-router-dom";
import JSX from "@/views/capter01/JSXBase.js";
import RenderDom from "@/views/capter02/RnderDom.js";
import routers from "@/router/index.js";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { path: "/", name: '"JSX基础"' },
        {
          path: "/renderDom",
          name: ' "元素渲染"',
        },
        {
          path: "/components",
          name: "组件-props",
        },
        {
          path: "/state",
          name: "组件-state",
        },
      ],
    };
  }
  render() {
    return (
      <div id="app">
        <div className="sider-wrap">
          <h1>Reactjs基础</h1>
          <Capter list={this.state.list} />
        </div>

        <div className="right-content">
          <Routes>
            {routers.map((v, i) => (
              <Route path={v.path} key={i} element={<v.component />}></Route>
            ))}
          </Routes>
        </div>
      </div>
    );
  }
}
