/*
 * @LastEditTime: 2022-03-24 23:50:59
 * @Description:
 * @Date: 2022-03-24 23:05:05
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { MessageContext } from "@/context/MessageContext";
import { useContext } from "react/cjs/react.development";

export default class SayHello extends React.Component {
  // 生命周期Hooks，调用时期在props和state更新之后，render再次调用之前.注意在组件首次渲染和forceUpdate调用时，不会调用此api.
  shouldComponentUpdate(nextState, nextProps) {
    console.log("组件props和state更新", nextProps, nextState);
  }

  render() {
    return (
      <div>
        <h3>man/man: {this.context.forMan}</h3>
        <p>msg: {this.context.content}</p>
        <span> time: {this.context.date} </span>
      </div>
    );
  }
}

SayHello.contextType = MessageContext;
