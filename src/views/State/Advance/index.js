/*
 * @LastEditTime: 2022-03-18 23:33:57
 * @Description: 理解setState原理
 * @Date: 2022-03-18 23:31:48
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default class Advance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>setState原理</h1>
        <p>开始计数</p>
        <h3>状态: {this.state.counter}</h3>
      </div>
    );
  }
}
