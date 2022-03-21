/*
 * @LastEditTime: 2022-03-22 00:57:16
 * @Description: 给定温度反馈水的状态
 * @Date: 2022-03-22 00:53:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default function BoilingVerticte(props) {
  return (
    (props.celsius >= 100 && <p> water hased boiling</p>) || (
      <p>water is not boiling</p>
    )
  );
}
