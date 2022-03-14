/*
 * @LastEditTime: 2022-03-15 01:31:46
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import ReactDOM from "react-dom";
import "@src/style.scss";
import npm from "@public/images/pic.jpeg";

const App = () => {
  return (
    <div>
      <h1>Webpack CLI</h1>
      <img src={npm}></img>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
