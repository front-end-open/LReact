/*
 * @LastEditTime: 2022-08-07 20:25:09
 * @Description: 事件系统
 * @Date: 2022-08-06 16:43:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import ScanQrModal from './components/CompositionNative'
import ShowModalQR2 from './components/CompositionNativeT'
import BubbleOrCapture from './components/EventProcess'
import Native from './components/NativeEvent'
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

                <div>
                    <h3>原生事件调用</h3>

                    <Native />
                </div>

                <div>
                    <h3>原生合成事件结合</h3>

                    {/* <ScanQrModal /> */}
                </div>

                <div>
                    <h3>原生事件实现扫码</h3>

                    <ShowModalQR2 />
                </div>
            </div>
        )
    }
}
