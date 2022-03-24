/*
 * @LastEditTime: 2022-03-25 01:21:53
 * @Description: 通用计算器
 * @Date: 2022-03-25 01:20:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function CommonCaculator(props) {
  return (
    <div>
      <p>
        a + b: {props.a + ""} + {props.b + ""}{" "}
      </p>
      <p>result: props.a + props.b</p>
    </div>
  );
}
