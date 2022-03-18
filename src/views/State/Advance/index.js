/*
 * @LastEditTime: 2022-03-19 01:55:11
 * @Description: 理解setState原理
 * @Date: 2022-03-18 23:31:48
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default class Advance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      // 多次调用setState对同一状态更新，显然不能达到预期目的。原因是react的setState更新采用异步更新策略,
      // 每一次调用setState更新当前得counter,并不会及时返回counter更新后的值，而是会合并所有更新，最终一并更新。
      //   this.setState({
      //     counter: this.state.counter + i, // 99， 显然从1-100的求和值是5050
      //   });
      //   console.log(this.state.counter); // 0
      // 解决
      this.setState((state, props) => {
        // 4950
        return {
          counter: state.counter + i,
        };
      });
    }
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
