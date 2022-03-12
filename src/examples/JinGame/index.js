/*
 * @LastEditTime: 2022-03-12 23:04:03
 * @Description:
 * @Date: 2022-03-12 04:13:18
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Game from "./components/Game.js";

export function GameApp() {
  ReactDOM.render(
    React.createElement(Game, null, null),
    document.getElementById("root")
  );
}
GameApp();
