/*
 * @LastEditTime: 2022-03-22 00:18:09
 * @Description: 非受控组件-值接收
 * @Date: 2022-03-21 23:47:32
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class NameForm extends React.Component {
  constructor() {
    super();
    // 声明指向input元素的ref，用来获取DOM对象的value
    this.input = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input);
    alert("你的名字是" + this.input.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input defaultValue="Blob" type="text" ref={this.input} />
        </label>
        {/* 指定默认值 */}
        <input type="submit" value="提交" />
      </form>
    );
  }
}
