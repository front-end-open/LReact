/*
 * @LastEditTime: 2022-03-19 03:37:11
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
