/*
 * @LastEditTime: 2022-03-17 00:22:38
 * @Description:
 * @Date: 2022-03-17 00:14:04
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 更过创建元素，来实习更新ui
/**
 * 实例每一秒，新建一个描述整个 UI 树的元素，React DOM 只会更新实际改变了的内容，也就是例子中的文本节点。
 *
 *
 */
function main() {
  let element = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, World!"),
    React.createElement("h2", null, `It is ${new Date().toLocaleTimeString()}`)
  );
  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(main, 1000);
