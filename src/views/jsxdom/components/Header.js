/*
 * @LastEditTime: 2022-07-30 00:23:34
 * @Description:
 * @Date: 2022-07-30 00:21:18
 * @Author: wangshan
 * @LastEditors: wangshan
 */

/**
 *  Header组件传递自定义属性title
 *  h3 的dom元素传递title属性
 *  两个元素同有title属性，但是存在差别.
 *
 *
 */
// eslint-disable-next-line react/prop-types
export const Header = ({ title, children }) => {
    return <h1 title={title}>{children}</h1>
}
