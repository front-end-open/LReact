/*
 * @LastEditTime: 2022-03-17 01:03:26
 * @Description: 消息日志-类组件
 * @Date: 2022-03-17 01:01:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
// 这种方法等价函数PrintMsg
export default class PrintMsg extends React.Component {
  render() {
    return <h1>{this.props.msg}</h1>;
  }
}
