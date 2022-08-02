/*
 * @LastEditTime: 2022-08-03 01:41:25
 * @Description: 生命周期中的数据过程
 * @Date: 2022-08-02 00:19:52
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class LifeCycleData extends Component {
    static propTypes = {
        desc: PropTypes.string
    }

    constructor(prop) {
        super(prop)
        this.state = {
            msg: 'hello'
        }
    }
    // 此处屏蔽生命周期初始化方法，只做关于数据变化时，所相关的几个生命周期hook
    // 该方法已被遗弃，使用getDerivedStateFromProps替换
    // componentWillReceiveProps() {}

    //  会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    // 目标: 让组件在 props 变化时更新 state。
    // 触发时机： 每次组件渲染都会触发此方法。和UNSAFE_componentWillReceiveProps不同，该方法仅在父组件更新渲染时调用
    static getDerivedStateFromProps(prop, state) {
        console.log('更新', prop, state)
        // this.setState({
        //     msg: 'hello world'
        // })
        return { good: 222 }
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('更新', nextProp, nextState)
        // 返回 false 并不会阻止子组件在 state 更改时重新渲染。
        // if (nextProp.desc != this.props.desc) {
        //     this.setState({
        //         msg: 'hello world'
        //     })
        // }

        return true
    }

    // 该方法已被启用，采用getSnapshotBeforeUpdate替换
    // componentWillUpdate() {}
    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('渲染挂载之前', prevProp, prevState)
        return null
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('更新后调用', prevProp, prevState, snapshot)

        // componentDidUpdate调用setState会触发state内存溢出
        // componentDidUpdate内的state更新，需要使用条件语句包裹。否则循环调度更新会导致内存溢出
        if (prevProp.desc !== this.props.desc) {
            this.setState({
                msg: 'hello world'
            })
        }
    }

    componentDidMount() {
        console.log('组件挂载')
        // this.setState({
        //     msg: 'hello world'
        // })
        // this.forceUpdate()
    }

    render() {
        console.log('render渲染')
        return (
            <React.Fragment>
                <h2>hello world</h2>
                <p>{this.state.msg}</p>
                <p>{this.state.good}</p>
            </React.Fragment>
        )
    }
}
