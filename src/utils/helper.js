/*
 * @LastEditTime: 2022-03-22 22:36:51
 * @Description:
 * @Date: 2022-03-19 03:36:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export function Cbind(context, fn) {
  return (...args) => {
    fn(...args);
  };
}

// 摄氏温度转华氏温度
export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
// 华氏温度转摄氏温度
export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 温度转换
export function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
