/*
 * @LastEditTime: 2022-03-20 18:42:38
 * @Description: 列表项
 * @Date: 2022-03-20 14:41:29
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./item.scss";
export default function Item(props) {
  return (
    <li>
      <h4>{props.todo.id}</h4>
      <h1>key-index{props.idx}</h1>
      <p>{props.todo.name}</p>
      <button onClick={props.onClick}>finish</button>
    </li>
  );
}
