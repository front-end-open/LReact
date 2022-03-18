/*
 * @LastEditTime: 2022-03-19 02:26:38
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@/style/global/index.scss";
import { Routes, Route } from "react-router-dom";
import routers from "@/router/index.js";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routers.map((v) => {
          if (v.name.indexOf("home") != -1) {
            return (
              <Route
                key={v.name}
                path={v.path}
                element={<v.component children={v.children} />}
              >
                {v.children.map((vc) => (
                  <Route
                    path={vc.path}
                    key={vc.name}
                    element={<vc.component />}
                  ></Route>
                ))}
              </Route>
            );
          } else {
            return (
              <Route
                key={v.name}
                path={v.path}
                element={<v.component />}
              ></Route>
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
