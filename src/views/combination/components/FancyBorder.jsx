/*
 * @LastEditTime: 2022-03-23 00:02:42
 * @Description: Fancyborder
 * @Date: 2022-03-22 23:55:02
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
