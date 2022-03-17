/*
 * @LastEditTime: 2022-03-18 00:26:21
 * @Description: 组件State-生命周期
 * @Date: 2022-03-18 00:05:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";

export default function CState() {
  return (
    <div>
      <div>
        <h3 className="tag">组件state使用</h3>
        <p>
          从Clock组件开始，该组件是一个时钟组件，最先通过自身状态来实习那，实时更新视图。现在开始封装为一个class组件，来维护自身state
        </p>
        <p>先来看看Clock函数组件</p>
        <code className="tag">
          {`function Clock(props) {
                return <h3>{props.date.toLocalString()}</h3>
            }`}
        </code>
        <p>
          这是一个纯组件，组件的时间状态，通过props外部传入的。但是这个时间是不定的，需要外部调用定时器，定时更新UI.
          在这种情况下，又得依靠React.render来重复渲染Clock.理想情况下，只需要调用一次Clock，并且Clock随状态更新视图。
        </p>
        <p>State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件</p>
      </div>
      <div>
        <h3 className="tag">函数组件转化为class组件</h3>
        <div>
          <span>创建步骤:</span>
          <ul>
            <li>创建一个同名的 ES6 class，并且继承于 React.Component。 。</li>
            <li>添加一个空的 render() 方法。</li>
            <li>将函数体移动到 render() 方法之中。</li>
            <li>
              在 render() 方法中使用 this.props 替换 props。
              删除剩余的空函数声明
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
