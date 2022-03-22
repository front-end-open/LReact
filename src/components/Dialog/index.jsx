/*
 * @LastEditTime: 2022-03-23 00:50:07
 * @Description: 注册组件
 * @Date: 2022-03-23 00:41:49
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import FancyBorder from "../FancyBorder";
export default function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
