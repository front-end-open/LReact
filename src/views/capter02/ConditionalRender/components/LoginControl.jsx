/*
 * @LastEditTime: 2022-03-20 02:02:44
 * @Description: 登陆控制组件
 * @Date: 2022-03-20 01:21:29
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Greeting from "./Greeting";
import Button from "@/components/Button";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleClickLogin = () => {
    // public class fields
    this.setState({
      isLogin: false,
    });
    console.log("login out");
  };

  handleClickLogout = () => {
    this.setState({
      isLogin: true,
    });
    console.log("sign in");
  };

  render() {
    let button = null;

    if (this.state.isLogin) {
      button = <Button onClick={this.handleClickLogin} innerText="Login out" />;
    } else {
      button = <Button onClick={this.handleClickLogout} innerText="Sign in" />;
    }

    return (
      <div>
        <Greeting isLogin={this.state.isLogin} />
        {button}
      </div>
    );
  }
}
