/*
 * @LastEditTime: 2022-03-17 23:16:01
 * @Description:
 * @Date: 2022-03-17 23:10:04
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import "./index.scss";
import Avater from "../Avater";
export default function UserInfo(props) {
  return (
    <div className="user-container">
      <Avater user={props.user} />
      <span className="name-style">{props.user.name}</span>
    </div>
  );
}
