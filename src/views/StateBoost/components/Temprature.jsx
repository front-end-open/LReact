/*
 * @LastEditTime: 2022-03-22 22:49:49
 * @Description:温度类别
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
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature; // 提升状态temprature到Caculator的state管理，用于同步两个输入框的数据.
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
