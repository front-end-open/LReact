/*
 * @LastEditTime: 2022-03-21 22:54:27
 * @Description: 多输入处理
 * @Date: 2022-03-21 22:33:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }
  handleChange = (event) => {
    console.log(event);
    let name = event.target.name; // 表单name
    let value = name == "isGoing" ? event.target.checked : event.target.value;

    // 更新form
    // 同时这里也应用了react的setState多次调用合并更新原则。
    this.setState({
      [name]: value, // es6计算属性，可以很方便更新state。
    });
  };

  render() {
    return (
      <form>
        <label>
          <span>参与:</span>
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>人数:</span>
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
