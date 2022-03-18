/*
 * @LastEditTime: 2022-03-19 03:33:32
 * @Description: 事件处理
 * @Date: 2022-03-19 02:01:20
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Toggle from "@/components/Toggle/index.jsx";
export default function EventHandle() {
  // 声明事件处理函数
  function handleClick(e) {
    // 在react中，使用preventDefault阻止默认事件
    e.preventDefault();
    alert("clicked");

    return false; // 阻止锚点跳转无效,此方式应用到传统html页面标记可以
  }

  return (
    <div>
      <h1>事件处理</h1>
      <div>
        <h3>基本</h3>
        <p>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：</p>
        <p>
          1. React 事件的命名采用小驼峰式（camelCase），而不是纯小写。 使用 JSX
          <br />
          2.语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。
        </p>
        <div>
          <h3>实践</h3>
          <button onClick={handleClick}>click me</button>
          <p>事件对象</p>
          <p>传统阻止a标记跳转页面，可以在事件绑定上，返回false</p>
          <a href="fine" onClick={handleClick}>
            click me
          </a>
          <p className="tag">{`在react中返回false阻止a标记跳转新页面无效，必须使用preventDeault方法`}</p>
          <p className="tag">
            react中事件对象是合成的事件对象，兼容所有浏览器，并拥有原生事件对象一样特性.参考
            <a href="https://react.docschina.org/docs/events.html">
              {" "}
              SyntheticEvent 包装器
            </a>
          </p>
          <p className="tag">
            react中，不需要使用 addEventListener 为已创建的 DOM
            元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。
          </p>
          <p>使用class声明组件时，事件处理函数通常声明为组件的方法</p>
          <span>声明一个Toggle开关组件</span>
          <p>注册Toggle</p>
          <Toggle />
        </div>
      </div>
    </div>
  );
}
