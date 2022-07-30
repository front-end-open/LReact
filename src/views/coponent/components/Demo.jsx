/*
 * @LastEditTime: 2022-07-31 01:02:42
 * @Description: tab组件使用
 * @Date: 2022-07-31 00:46:19
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import { Tabs } from './Tab'
import './Tab.scss'
export default class DemoTab extends Component {
    componentDidMount() {
        const tab = new Tabs({
            element: '#tab-demo',
            tabs: '#tab-demo .tabs-nav li',
            panels: '#tab-demo .tabs-content div',
            activeIndex: 1
        })

        tab.events.on('change', (o) => {
            console.log('当前激活tab', o)
        })
    }

    render() {
        return (
            <div>
                <h2>tab组件使用</h2>
                <div id="tab-demo">
                    <div className="tabs-bar" role={'tablist'}>
                        <ul className="tabs-nav">
                            <li className="tabs-tab" role={'tab'}>
                                1
                            </li>
                            <li className="tabs-tab" role={'tab'}>
                                2
                            </li>
                            <li className="tabs-tab" role={'tab'}>
                                3
                            </li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div role={'tabpanel'} className="tabs-panel">
                            {' 第一个Tab内容'}
                        </div>
                        <div role={'tabpanel'} className="tabs-panel">
                            {' 第二个Tab内容'}
                        </div>
                        <div role={'tabpanel'} className="tabs-panel">
                            {' 第三个Tab内容'}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
