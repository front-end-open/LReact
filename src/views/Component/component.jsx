/*
 * @LastEditTime: 2022-03-17 01:21:48
 * @Description:
 * @Date: 2022-03-17 00:36:16
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import PrintMsg from "./components/PrintMsg.jsx";
import ClassPrintMsg from "./components/ClassPrintMsg.jsx";
export default function Component() {
  return (
    <div>
      <h1>组件-props</h1>
      <div>
        <h3 className="tag">创建组件</h3>
        <p>函数组件</p>
        <p>{`export default function logMsg(props) {
  return <h1>{props.msg}</h1>;
}`}</p>
        <p>
          使用函数组件:FuncComponent === PrintMsg, 传入props属性: msg - hello
        </p>
        <PrintMsg msg="hello" />

        <p>
          使用类组件:ClassFuncComponent === ClassPrintMsg, 传入props属性: msg -
          hello
        </p>
        <ClassPrintMsg msg="hello" />

        <div>
          <h3 className="tag">组件渲染</h3>
          <p>
            react元素除了DOM标记，还可以是自定义组件:{" "}
            {`const element = <div />; <ClassPrintMsg msg='hello' />
`}
          </p>
        </div>
      </div>

      <div>
        <h3 className="tag">组合组件</h3>
        <p>本质就是：组件的多场景复用</p>
        <p> 使用上面的日志组件，输出不同的日志</p>

        <div>
          <PrintMsg msg="fitst1" />
          <PrintMsg msg="second" />
          <PrintMsg msg="third" />
        </div>
        <p>
          {" "}
          每个新的 React 应用程序的顶层组件都是 App 组件。但是，如果你将 React
          集成到现有的应用程序中，你可能需要使用像 Button
          这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。
        </p>
      </div>
      <div>
        <h3 className="tag"> 组件提取</h3>
        <p> 将组件拆分为更小的组件。</p>
        <p>
          {" "}
          提取组件可能是一件繁重的工作，但是，在大型应用中，构建可复用组件库是完全值得的。根据经验来看，如果
          UI
          中有一部分被多次使用（Button，Panel，Avatar），或者组件本身就足够复杂（App，FeedStory，Comment），那么它就是一个可复用组件的候选项。
        </p>
      </div>
      <div>
        <h3 className="tag">props的只读性</h3>
        <p>
          {" "}
          组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。
          <h5>所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。</h5>
          <p>
            但是UI是实时变化的组件也需要维护自身的状态去更新视图，需要使用state
          </p>
        </p>
      </div>
    </div>
  );
}
