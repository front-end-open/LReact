/*
 * @LastEditTime: 2022-03-21 22:51:03
 * @Description: 表单
 * @Date: 2022-03-20 18:57:27
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import NormalForm from "./components/NormalForm";
import EassayForm from "./components/EassyForm";
import FlavorForm from "./components/FlavorForm";
import Reservation from "./components/Reservation";
export default function () {
  return (
    <div>
      <h3 className="tip-success">表单</h3>
      <div>
        <p className="tag">
          React中表单有自己的工作方式，区别于DOM的表单。这是因为表单有自己的内部state.
        </p>
        <p className="tag">
          对于浏览器的DOM表单默认有自己的行为，提交叫属性页面，请求数据。
          现在改用javascript函数来实现表单提交，同样可以提交表单数据，同时还能拿到form表单的提交数据
          实现这种效果的标准方式"受控组件”
        </p>
      </div>
      <div>
        <h3 className="tip-success">受控组件</h3>
        <p className="tag">
          在 HTML 中，表单元素（如{`<input>、 <textarea> 和 <select>`}
          ）通常自己维护 state，并根据用户输入进行更新。而在 React
          中，可变状态（mutable state）通常保存在组件的 state
          属性中，并且只能通过使用 setState()来更新。
        </p>
        <p className="tip-success">
          受控组件：相对React来说，将组件取值和更新的控制权完全交由React来处理。并且以state作为唯一数据源
        </p>
      </div>
      <div>
        <p className="tip-success">表单NormaForm受控组件注册</p>
        <h3 className="tag-success">Input</h3>
        <div>
          <NormalForm />
        </div>
        <p className="tag">
          由于在表单元素上设置了 value 属性，因此显示的值将始终为
          this.state.value，这使得 React 的 state 成为唯一数据源。由于
          handlechange 在每次按键时都会执行并更新 React 的
          state，因此显示的值将随着用户输入而更新。
        </p>
        <p className="tip-error">
          对于受控组件来说，输入的值始终由 React 的 state 驱动
        </p>
      </div>
      <div>
        <h3 className="tip-success">textarea</h3>
        <p className="tag">
          在html中，textarea通过子元素指定内部值; 而在React中通过value设置
        </p>
        {/* <textarea id="" cols="30" rows="10">
          hell
        </textarea> */}
        <p className="tag">注册React受控textarea组件</p>
        <div>
          <EassayForm />
        </div>
      </div>
      <div>
        <h3 className="tip-success">Select下拉列表-受控组件</h3>
        <p className="tip-error">
          {" "}
          请注意，由于 selected 属性的缘故，椰子选项默认被选中。React 并不会使用
          selected 属性，而是在根 select 标签上使用 value
          属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：
        </p>
        <div>
          <h3 className="tip-success">注册FlavorForm</h3>
          <div>
            <FlavorForm />
          </div>
        </div>
        <p className="tag">
          {`总的来说，这使得 <input type="text">, <textarea> 和 <select> 之类的标签都非常相似—它们都接受一个 value 属性，你可以使用它来实现受控组件。

`}{" "}
        </p>
        <p className="tip-error">
          可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：
        </p>
      </div>
      <div>
        <h3 className="tip-success">
          非受控组件文件
          Input-type-file类型，其value值，无法通过react-state设置和获取。因为其value是只读的，所以作为非受控组件
        </h3>
      </div>
      <div>
        <h3 className="tip-success">处理多个输入</h3>
        <p>
          存在form表单的多个input的数据存取时，需要通过事件函数的event.target.name来获取
        </p>
        <div>
          <h3 className="tip-error">绑定Reservation组件</h3>
          <div>
            <Reservation />
          </div>
        </div>
      </div>
    </div>
  );
}
