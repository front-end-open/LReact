/*
 * @LastEditTime: 2022-03-20 02:01:56
 * @Description: 按钮组件
 * @Date: 2022-03-20 01:22:26
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.innerText}</button>
    </div>
  );
}
