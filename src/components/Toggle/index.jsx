/*
 * @LastEditTime: 2022-03-19 03:41:07
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
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(e) {
    console.log(e);
    this.setState((state) => {
      return {
        isOff: !state.isOff,
      };
    });
  }
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
