/*
 * @LastEditTime: 2022-03-18 01:16:35
 * @Description: 时钟类组件
 * @Date: 2022-03-18 00:32:28
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";

export default class Clock extends React.Component {
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
