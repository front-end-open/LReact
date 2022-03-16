/*
 * @LastEditTime: 2022-03-17 00:56:58
 * @Description: 输入消息模板
 * @Date: 2022-03-17 00:54:49
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import React from "react";
/**
 *
 * @param {any} props 唯一参数props
 * @returns ReactElement 返回react元素
 */
// 函数组件本质就是一个js函数
export default function logMsg(props) {
  return <h1>{props.msg}</h1>;
}
