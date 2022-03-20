/*
 * @LastEditTime: 2022-03-21 00:51:53
 * @Description: textarea-受控组件
 * @Date: 2022-03-21 00:47:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "请撰写一篇关于你喜欢的 DOM 元素的文章.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("提交的文章: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
