/*
 * @LastEditTime: 2022-03-25 01:28:27
 * @Description:
 * @Date: 2022-03-25 00:01:44
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { CaculatorContext } from "@/context/Caculator";
import Caculator from "./Caculator";
import CommonCaculator from "./commonCaculator";
import withComponent from "./withCaculator";
let CommonCaculators = withComponent(CommonCaculator);
export default class CaculatorControl extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        a: 1,
        b: 5,
      },
      counter: 0,
    };
  }
  handleChangeLeft = () => {
    this.setState((state) => {
      return {
        data: {
          ...state.data,
          a: state.data.a + 1,
        },
      };
    });
  };
  handleChangeRight = () => {
    this.setState((state) => {
      console.log(state);
      return {
        data: {
          ...state.data,
          b: state.data.b + 1,
        },
      };
    });
  };

  handleAnother = () => {
    this.setState((state) => {
      console.log(state);
      return {
        counter: state.counter + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleChangeLeft}>left</button>
          <button onClick={this.handleChangeRight}>right</button>
        </div>
        <CaculatorContext.Provider value={this.state.data}>
          <Caculator />
        </CaculatorContext.Provider>
        {/* 测试父组件局部数据更新，所导致子组件的更新情况 */}
        {/* Caculator组件仍然更新 */}
        <div>
          <h3>计数</h3>
          <button onClick={this.handleAnother}>计数</button>
          <p>{this.state.counter}</p>
        </div>
        {/* 高阶组件render-props */}
        <CaculatorContext.Provider value={this.state.data}>
          <CommonCaculators />
        </CaculatorContext.Provider>
      </div>
    );
  }
}
