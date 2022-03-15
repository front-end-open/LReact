/*
 * @LastEditTime: 2022-03-16 01:17:04
 * @Description:
 * @Date: 2022-03-16 00:03:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import { Link } from "react-router-dom";
export default function Capter(props) {
  return (
    <ul>
      {props.list.map((v, i) => (
        <li key={i}>
          <Link to={v.path}>{v.name}</Link>
        </li>
      ))}
    </ul>
  );
}
