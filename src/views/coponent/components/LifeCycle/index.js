/*
 * @LastEditTime: 2022-08-02 00:07:39
 * @Description: 生命周期模板
 * @Date: 2022-08-01 23:28:33
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React, { Component } from 'react'

import PropsType from 'prop-types'

export default class LifeCycleTemplate extends Component {
    // props类型校验
    static propsType = {
        msg: PropsType.string
    }
    // 默认props
    static defaultProps = {
        msg: 'hello'
    }

    constructor(props) {
        super(props)
        this.state = {
            date: 'no'
        }
    }
    // 组件渲染之前
    // 该方法已经被遗弃, 使用constructor/componentDidMount代替
    // 此方法在render方法之前调用，同时也是在componentDidMount之前调用。一般做数据初始化使用。现在改用替换方法，constructor
    // componentWillMount() {}
    UNSAFE_componentWillMount() {
        this.setState({
            date: 'Evening'
        })
        console.log('组件渲染之前调度')
    }
    // 组件挂载
    componentDidMount() {
        console.log('LifeCycleTemplate组件已挂载')
        this.setState({
            date: this.state.date + ' Moring'
        }) // 再次触发render渲染
    }

    render() {
        console.log('组件渲染-render')
        return (
            // React.Fragment 等价 <></>
            <React.Fragment>
                <h2>组件模板</h2>
                <p>{this.props.msg}</p>

                {/* DidMount 触发更新 */}
                <p>{this.state.date}</p>
            </React.Fragment>
        )
    }
}
