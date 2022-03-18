/*
 * @LastEditTime: 2022-03-19 02:42:57
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "@/style/global/App.scss";
import Capter from "@/components/Capter/index.js";
import { Outlet } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="sider-wrap">
          <h1>Reactjs基础</h1>
          <Capter list={this.props.children} />
        </div>

        <div className="right-content">
          <Outlet />
        </div>
      </div>
    );
  }
}
