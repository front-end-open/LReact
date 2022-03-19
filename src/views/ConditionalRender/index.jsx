/*
 * @LastEditTime: 2022-03-20 01:58:55
 * @Description: 条件渲染
 * @Date: 2022-03-19 22:37:33
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Greeting from "./components/Greeting.jsx";
import LoginControl from "./components/LoginControl.jsx";
export default class ConditionRender extends React.Component {
  render() {
    return (
      <div>
        <h1 className="tip-success">条件渲染</h1>
        <div>
          <h3 className="tag"></h3>
          <p className="tip-error">
            React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if
            或者条件运算符去创建元素来表现当前的状态，然后让 React
            根据它们来更新 UI。
          </p>
        </div>
        <div>
          <h3 className="tip-success">创建根据登陆态判断用户是否登陆</h3>
          <div>
            <Greeting isLogin={false} />
          </div>
        </div>
        <div>
          <h3 className="tip-success">元素变量</h3>
          <p className="tip-error">
            元素的切换通过变量存储，简化jsx直接return的写法。并且显示隐藏切换时，并不会影响其他组件渲染
          </p>
          <h4> 注册组件-LoginControl</h4>
          <div>
            <LoginControl />
          </div>
        </div>
      </div>
    );
  }
}
