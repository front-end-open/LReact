/*
 * @LastEditTime: 2022-03-20 01:23:28
 * @Description: 按钮组件
 * @Date: 2022-03-20 01:22:26
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} innerText={props.inner}></button>
    </div>
  );
}
