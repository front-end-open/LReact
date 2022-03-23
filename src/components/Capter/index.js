/*
 * @LastEditTime: 2022-03-23 23:11:41
 * @Description:
 * @Date: 2022-03-16 00:03:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Link } from "react-router-dom";
export default function Capter(props) {
  return (
    <ul className="menu">
      {props.list.map((v, i) => (
        <li key={i} className="more-line">
          <Link to={v.path}>{v.menuname}</Link>
        </li>
      ))}
    </ul>
  );
}
