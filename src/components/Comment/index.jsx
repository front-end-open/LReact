/*
 * @LastEditTime: 2022-03-17 23:46:52
 * @Description: 评论组件
 * @Date: 2022-03-17 23:16:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import UserInfo from "../UserInfo";
import "./index.scss";
export default function Comment(props) {
  return (
    <div className="comment-container">
      <div className="userinfo">
        <UserInfo user={props.user} />
      </div>
      <div className="comment-content">
        <div className="comment-content-text">{props.commentt.content}</div>
        <div className="comment-content-date">{props.commentt.date}</div>
      </div>
    </div>
  );
}
