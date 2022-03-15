/*
 * @LastEditTime: 2022-03-16 01:15:17
 * @Description: jsx基础
 * @Date: 2022-03-15 23:43:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import "./capter.scss";
import npm from "@public/images/pic.jpeg";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

// 作为表达式，用于循环for/if判断等
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

let strGreet = (
  <code>{`
function getGreeting(user) {
  \x0a if (user) {
    \x0a return <h1>Hello, {formatName(user)}!</h1>;
  \x0at}
  \x0a return <h1>Hello, Stranger.</h1>;
`}</code>
);
// JSX特属性
/**
 * html标记/组件jsx写法，在传入属性时，使用引号传入字面量，大括号引用变量
 * */
let propstr = (
  <code>{'<div tabIndex="0"></div>/<img src="{src.url}"></img>'}</code>
);

// 防止跨站脚本攻击

// jsx元素表示一个对象.
/**
 * 在reactjs运行时环境使用jsx所表示的元素，不管是组件还是内置html元素，在渲染页面之前，都会经过babel编译转换
 *
 *
 *
 */

let code1 = (
  <code>{`const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);`}</code>
);

export default function JSX() {
  let tempstr = "输入模板<div>{name}</div>";
  let user = {
    firstName: "PachVerb",
    lastName: "Wang",
  };
  let temp = (
    <div>
      {tempstr}-{formatName(user)}
    </div>
  );
  return (
    <div>
      <div className="jx-variable">
        <div>
          <h3 className="tag">
            jsx标记作为变量使用，并且标记内部之间通过{}传入变量，供页面渲染
          </h3>
          <div>{temp}</div>
        </div>
      </div>
      <div>
        <h3 className="tag">作为表达式使用, 作为普通函数调用</h3>
        <p className="tag">代码: {strGreet} </p>
        <div>{getGreeting()}</div>
      </div>
      <div>
        <h3 className="tag">属性: 字符串/引用</h3>
        <p className="tag">代码:{propstr}</p>
        <div>
          <p>属性-字符串</p>
          <div tabIndex="0"></div>
        </div>
        <div>
          <p>属性-变量</p>
          <img width="400" height="200" src={npm}></img>
        </div>
        <div className="warning">
          因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用
          camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML
          属性名称的命名约定。
        </div>
      </div>

      <div>
        <h3 className="tag">jsx元素表示一个对象</h3>
        <p>
          代码: {code1} 等价于
          {`const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`}
        </p>
        <p>
          React.createElement创建的最终对象
          {`const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};`}
          实际就是一个React元素.这些对象被称为 “React
          元素”。它们描述了你希望在屏幕上看到的内容。React
          通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。
        </p>
      </div>
    </div>
  );
}
