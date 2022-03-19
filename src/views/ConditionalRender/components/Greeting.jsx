/*
 * @LastEditTime: 2022-03-20 02:04:20
 * @Description: 问候
 * @Date: 2022-03-20 01:06:14
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import GuesTing from "./GuesTing.jsx";
import UserGreeting from "./UseGretting.jsx";

export default function Greeting(props) {
  if (props.isLogin) {
    // 登陆
    return <UserGreeting />;
  }
  // 未登陆
  return <GuesTing />;
}
