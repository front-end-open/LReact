/*
 * @LastEditTime: 2022-08-20 19:49:09
 * @Description:
 * @Date: 2022-08-18 22:56:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Count from './Count'
import Equal from './Equal'

export function Optimization() {
    return (
        <div className="tip-content">
            <h3 className="primary">PureRender使用</h3>

            <Count />

            {/* PureComponent组件的优化策略是，仅对object类型做引用类型比较。如果引用不变，那么将不会更新. 如下案列 */}
            {/* PureComponent组件：当list追加数据时，list其子组件将不会渲染列表 */}
            <Equal />
            {/* 使用Component组件 */}
            {/* <Equal /> */}
        </div>
    )
}
