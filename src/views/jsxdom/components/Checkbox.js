/*
 * @LastEditTime: 2022-07-30 00:34:30
 * @Description: 含bool值的dom元素使用
 * @Date: 2022-07-30 00:32:25
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 * bool值的默认和省略时的情况
 * 1. 如果使用默认值true时，则可以在使用组件时，不需要传入值；而如果需要使用false值，则可以省略属性props值
 *  上面情况均是在jsx语法时的表现
 *
 *
 */
// eslint-disable-next-line react/prop-types
export const CheckBox = ({ checked }) => {
    return <input type="checkbox" checked={checked} />
}
