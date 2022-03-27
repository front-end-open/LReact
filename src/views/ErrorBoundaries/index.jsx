/*
 * @LastEditTime: 2022-03-27 20:36:24
 * @Description: 错误边界
 * @Date: 2022-03-27 19:11:07
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ErrorBoundary from '@/components/ErrorBoundary'
import PrintError from './PrintError'
export default function (props) {
    return (
        <div>
            <h3>错误边界</h3>
            <div>
                <h3 className="tip-success">错误边界划分粒度</h3>
                <ul className="tip-content">
                    <li>以路由作为顶层部分捕获节点，向用户展示错误日志</li>
                    <li>以单独的部件作为粒度，避免应用因错误崩溃</li>
                </ul>
            </div>
            <div>
                <h3 className="tip-success">错误边界捕获尝试</h3>
                <div>
                    <ErrorBoundary>
                        <PrintError />
                    </ErrorBoundary>
                </div>
            </div>
            <div>
                <h3 className="tip-success">未捕获行为</h3>
                <p className="tip-content">
                    在开发环境下，React 16
                    会把渲染期间发生的所有错误打印到控制台，即使该应用意外的将这些错误掩盖。除了错误信息和
                    JavaScript 栈外，React 16
                    还提供了组件栈追踪。现在你可以准确地查看发生在组件树内的错误信息：
                </p>
                <p className="tip-error">cr</p>
            </div>
        </div>
    )
}
