/*
 * @LastEditTime: 2022-08-06 22:28:22
 * @Description: 事件系统
 * @Date: 2022-08-06 16:43:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import BubbleOrCapture from './components/EventProcess'
// import Toggle from './components/Toggle'

export default class EventSystem extends Component {
    render() {
        return (
            <div className="tip-content">
                <h2 className="primary">事件系统</h2>
                <p className="primary">开关组件</p>

                <div>{/* <Toggle title="开关" /> */}</div>

                <div>
                    <h2>事件执行阶段</h2>

                    <BubbleOrCapture />
                </div>
            </div>
        )
    }
}
