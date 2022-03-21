/*
 * @LastEditTime: 2022-03-17 23:42:52
 * @Description: 用户头像
 * @Date: 2022-03-17 22:59:27
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import "./index.scss";
export default function Avater(props) {
  return (
    <div className="avater-container">
      <img src={props.user.url} alt={props.user.name} />
    </div>
  );
}
