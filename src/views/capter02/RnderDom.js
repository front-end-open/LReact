/*
 * @LastEditTime: 2022-03-17 00:27:35
 * @Description: jsx元素渲染
 * @Date: 2022-03-16 01:17:38
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import ReactDOM from "react-dom";

// 页面以创建的ui元素，是特定时刻的存在。更新的方式可以通过React.render方式, 创建新的节点并渲染
/**
 * 定时创建一个Tick，并更新插入到timeClock下
 *
 */
// function clock() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// 有状态的组件，通过prop，state更新页面元素

export default function RnderDom(props) {
  let temp = <div>hello</div>;
  console.log(temp);
  return (
    <div>
      <div>
        <h1>jsx标记元素渲染为真实dom过程</h1>
        <p>声明一个jsx变量，打印其结果</p>
        <code className="tag">{`let temp = <div>hello</div>`}</code>
        <p>输出结果为对象</p>
        <code className="tag">{`{$$typeof: Symbol(react.element)
key: null
props: {children: 'hello'}
ref: null
type: "div"
_owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
_store: {validated: false}}`}</code>
      </div>
      <div>
        <h1 className="tag">元素渲染-渲染应用的根节点</h1>
        <p>
          每一个react应用应该至少包含一个根节点, 以为后面react元素的渲染提供容器
        </p>
      </div>
      <div>
        <h3 className="tag">更新已渲染元素</h3>
        <p>更新已渲染的元素，可以单独创建新的元素并从新加入到视图</p>
        <div id="timeClock">react采用局部更新的方式，来更新视图</div>
      </div>
    </div>
  );
}
