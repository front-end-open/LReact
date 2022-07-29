/*
 * @LastEditTime: 2022-07-30 01:15:31
 * @Description: 属性相关
 * @Date: 2022-07-30 00:18:55
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 *  自定义属性在声明时，需要有标准写法改为小驼峰写法
 *
 *
 */
/**
 *  1. 特别属性说明: 含boolean值的属性
 *  2. 展开属性，如果实现不知道组件所包含的属性，最好不要传入全部props（react不能对组件做proptype检测）。相反，如果事先知道组件的props, 可以实现使用js对象申明所有props，
 * 然后利用展开运算，传入所有props, 而不是利用 . 运算符引用依次传入.
 *  3. 自定义html属性: jsx中，dom元素传入自定义属性，React不会渲染. 如果需要在html中，使用自定义属性，需要在属性名字前加上 `data-` 前缀, 同html标准一样.
 *  自定义标签中，任意属性支持，不存在需要data-前缀一说；以aria-开头的网络无障碍属性同样支持.
 *  4. 属性表达式: jsx中，属性要使用表达式，使用{}替换即可. 而如果在js中，则可以使用Raect.createElement方法，创建组件，然后使用条件表达式节课.
 *  5. html转义, 在jsx中，所有需要显示的页面的字符串，在挂载页面之前，都会经过react转义处理，以防止XSS. 因此jsx中如果有需要转义后的实体字符，比如 &copy（代表 @c）, DOM不会正常显示。react会把&copy中的特殊字符转义了
 *  解决方法是：
 *   （1）： 使用UTF-8字符
 *    (2): 查询对应字符的unicode编码，查询编码
 *   （3）：使用数组组装字符串拼接
 *    (4): 直接插入原始的 html, 直接在元素上使用内置的dangerouslySetInnerHtml属性, 防止react转义
 * /


/**
 * 组件无论使用什么方法来写，最终都是输出虚拟元素，也就界面上渲染的元素。也称之为组件的输出，组件的输出方法，也就是render方法，该方法属于组件声明周期一部分，作为react组件最核心函数之一。
 */

import { Card } from './components/Card'
import { CheckBox } from './components/Checkbox'
import { Header } from './components/Header'

// card-props
const CardP = {
    title: 'Card-title',
    desc: 'react is very powerful, so you can do anything!'
}

export default class Property extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Header title={'hello world'}>hello world</Header>

                <br></br>

                <div>
                    <h2>传入默认属性，不带值</h2>
                    <CheckBox checked />
                </div>

                <div>
                    <h2>不传入属性</h2>
                    <CheckBox />
                </div>

                <div>
                    <h2>展开属性</h2>

                    <Card {...CardP} />
                </div>

                <div>
                    <h2>转义字符使用</h2>
                    {/* 直接使用 */}
                    <p>&copy;</p>

                    {/* dangerouslySetInnerHTML */}
                    <p dangerouslySetInnerHTML={{ __html: '&copy;' }}></p>

                    {/* 数组组装 */}
                    <p>{['cc', <span>&copy;</span>, '2015']}</p>
                </div>
            </>
        )
    }
}
