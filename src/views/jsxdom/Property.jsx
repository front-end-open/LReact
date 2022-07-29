/*
 * @LastEditTime: 2022-07-30 00:51:03
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
 *
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
            </>
        )
    }
}
