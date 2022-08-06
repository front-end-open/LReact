/*
 * @LastEditTime: 2022-08-06 17:43:00
 * @Description: 事件系统
 * @Date: 2022-08-06 16:43:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import Toggle from './components/Toggle'

export default class EventSystem extends Component {
    render() {
        return (
            <div className="tip-content">
                <h2 className="primary">事件系统</h2>
                <p className="primary">开关组件</p>

                <div>
                    <Toggle title="开关" />
                </div>
            </div>
        )
    }
}
