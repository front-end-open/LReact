/*
 * @LastEditTime: 2022-03-18 01:34:55
 * @Description: 组件State-生命周期
 * @Date: 2022-03-18 00:05:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import Clock from "./components/Clock/index.jsx";
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
          <p>Clock的class组件</p>
          <code className="tag">{`export default class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}</code>
        </div>
      </div>
      <div>
        <h3 className="tag">class组件添加局部state</h3>
        <code>{`constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }`}</code>
      </div>
      <div>
        <h3 className="tag">将生命周期方法添加到 Class 中</h3>
        <p>
          {" "}
          在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。
        </p>
        <p>Clock，在第一次渲染称之为挂载</p>
        <p>
          当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React
          中被称为“卸载（unmount）”。
        </p>

        <p>
          为 class
          组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：
        </p>
        <code className="tag">
          {`class Clock extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {date: new Date()};
                }

                componentDidMount() {
                }

                componentWillUnmount() {
                }

                render() {
                    return (
                    <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                );
            }
        }`}
        </code>
        <p>完整实例</p>
        <code className="tag">
          {`export default class Clock extends React.Component {
  // 为组件添加state
  // 组件应使用在构造中，使用props作为父类构造的调用
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // 添加生命周期
  // 在组件挂载时设置tick， 卸载时释放tick-id
  // componentDidMount 组件挂载触发
  componentDidMount() {
    // 在class组件中，一些不需要参与数据流的状态，可以直接绑定到组件实例this上。
    // 向这里直接在this上记录了timer
    this.timer = setInterval(() => this.tick(), 1000);
  }

  //componentWillUnmount 组件卸载

  componentWillUnmount() {
    // 组件卸载时清除定时器
    clearInterval(this.timer);
  }

  // tick
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
`}
        </code>
      </div>
      <br />
      <div>
        <h3 className="tag">调用Clock</h3>
        <div>
          <Clock />
        </div>
      </div>

      <div>
        <h3 className="tag">正确使用State</h3>
      </div>
      <div>
        <h3 className="tag">数据是向下流动的</h3>
      </div>
    </div>
  );
}
