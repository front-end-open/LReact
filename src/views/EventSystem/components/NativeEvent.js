/*
 * @LastEditTime: 2022-08-06 23:03:10
 * @Description: 原生事件使用
 * @Date: 2022-08-06 22:48:04
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Component, createRef } from 'react'

export default class Native extends Component {
    refBox = createRef()

    constructor(props) {
        super(props)
    }

    handleClick(e) {
        console.log('原生事件绑定触发', e)
    }

    componentDidMount() {
        console.log(this.refBox)
        this.refBox.current.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        this.refBox.current.removeEventListener('click', this.handleClick)
    }

    render() {
        return (
            <div>
                <h3>原生事件</h3>

                <div
                    ref={this.refBox}
                    style={{
                        background: 'green',
                        width: '400px',
                        height: '200px'
                    }}
                >
                    <span>请狠狠点击我</span>
                </div>
            </div>
        )
    }
}
