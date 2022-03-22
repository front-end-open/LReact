/*
 * @LastEditTime: 2022-03-23 00:48:17
 * @Description:
 * @Date: 2022-03-23 00:48:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
export default function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}-{props.color}
    </div>
  );
}
