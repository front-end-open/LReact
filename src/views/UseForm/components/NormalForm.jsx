/*
 * @LastEditTime: 2022-03-21 00:13:11
 * @Description: 控制组件form
 * @Date: 2022-03-20 23:43:15
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class NormalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    alert("你的名字是:" + this.state.value);

    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span>{this.state.value}</span>
          <input type="submit" value="提交" />
        </label>
      </form>
    );
  }
}
