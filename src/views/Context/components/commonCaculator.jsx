/*
 * @LastEditTime: 2022-03-26 00:12:02
 * @Description: 通用计算器
 * @Date: 2022-03-25 01:20:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function CommonCaculato(props) {
  return (
    <div>
      <p>
        a + b: {props.context.a + ""} + {props.context.b + ""}{" "}
      </p>
      <p>
        result: {props.context.a} + {props.context.b}
      </p>
    </div>
  );
}
