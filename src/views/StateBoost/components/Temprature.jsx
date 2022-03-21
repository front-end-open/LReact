/*
 * @LastEditTime: 2022-03-22 01:04:47
 * @Description: 输入华氏温度
 * @Date: 2022-03-22 01:04:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
