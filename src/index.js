/*
 * @LastEditTime: 2022-03-16 00:33:35
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "@/App.js";
import { BrowserRouter } from "react-router-dom";
import "@/style/global/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
