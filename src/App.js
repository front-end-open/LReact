/*
 * @LastEditTime: 2022-03-16 01:21:09
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
            <Route path="/" element={<JSX />} />
            <Route path="/renderDom" element={<RenderDom />} />
          </Routes>
        </div>
      </div>
    );
  }
}
