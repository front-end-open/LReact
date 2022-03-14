/*
 * @LastEditTime: 2022-03-15 01:20:56
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import ReactDOM from "react-dom";
import "@src/style.scss";
import npm from "@public/assets/imgs/npm.png";

const App = () => {
  return <div> App入口 </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
