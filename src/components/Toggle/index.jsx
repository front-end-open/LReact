/*
 * @LastEditTime: 2022-03-19 03:59:21
 * @Description: 开关组件
 * @Date: 2022-03-19 03:27:39
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Cbind } from "@/utils/helper";
export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOff: false,
    };

    // 绑定this
    this.handleSwitchP = this.handleSwitchP.bind(this);
  }

  // 为button注册handler

  // 解决this丢失
  // bind
  handleSwitchP(e) {
    console.log(e);
    this.setState((state) => {
      return {
        isOff: !state.isOff,
      };
    });
  }

  // public class fields
  handleSwitch = (e) => {
    console.log(e);
    this.setState((state) => {
      return {
        isOff: !state.isOff,
      };
    });
  };

  // 或者为事件绑定箭头函数
  // 注意如果将回调函数作为prop往下传递，在每次组件渲染时，会创建不同回调函数，导致性能问题.

  render() {
    return (
      <div className="toggle-wrap">
        <button onClick={this.handleSwitch}>
          {this.state.isOff ? "Off" : "On"}
        </button>
      </div>
    );
  }
}
