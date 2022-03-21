/*
 * @LastEditTime: 2022-03-22 01:06:25
 * @Description: 输入温度
 * @Date: 2022-03-22 01:00:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class Caculator extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
    };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
