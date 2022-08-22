/*
 * @LastEditTime: 2022-08-21 03:02:27
 * @Description:
 * @Date: 2022-08-18 22:56:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Profiler } from 'react'

import Count from './Count'
import Equal from './Equal'

function onequalRnder(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) {
    console.log(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    )
}
export function Optimization() {
    return (
        <div className="tip-content">
            <h3 className="primary">PureRender使用</h3>

            <Count />

            {/* PureComponent组件的优化策略是，仅对object类型做引用类型比较。如果引用不变，那么将不会更新. 如下案列 */}
            {/* PureComponent组件：当list追加数据时，list其子组件将不会渲染列表 */}
            <Profiler id="equal" onRender={onequalRnder}>
                <Equal />
            </Profiler>

            {/* 使用Component组件 */}
            {/* <Equal /> */}
        </div>
    )
}
