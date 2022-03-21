/*
 * @LastEditTime: 2022-03-21 22:23:45
 * @Description: select-下拉列表
 * @Date: 2022-03-21 00:55:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ["coconut"] }; // DOM使用selected作为默认值，现在可以通过state设置初始值，作为默认值

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    // this.setState({ value: event.target.value });
    // 多选
    let res = this.state.value;

    if (res.find((v) => v == event.target.value)) {
      return;
    } else {
      res.push(event.target.value);
      this.setState({
        value: res,
      });
    }
  }

  handleSubmit(event) {
    alert("你喜欢的风味是: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select
            multiple={true}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
