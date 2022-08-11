/*
 * @LastEditTime: 2022-08-11 00:36:19
 * @Description: 组件通信
 * @Date: 2022-08-10 01:05:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function Communication() {
    return (
        <div className="tip-content">
            <h3 className="primary">组件通信</h3>

            <ul>
                <li>父子通信-props</li>
                <li>
                    子父通信:
                    回调函数方式，即通过props传递回调，在指定方法中触发回到即可;
                    自定义事件
                </li>
                <li>
                    跨级组件通信-context: 通常用于不太会变更的全局变量(theme,
                    用户信息展示相关)，如果是需要改变的量，那么尽可能通过HOC组件来实现。
                </li>
                <li>
                    同级非嵌套关系组件间通信:
                    自定义事件，利用Nodejs-Events模块浏览器版本，采用发布订阅模式，实现自定义事件的同时，订阅和广播事件达到不同级别组件间的通信
                </li>
            </ul>

            <p className="primary">
                需要注意：
                props单向数据流的通信模式，或者说，context的方式也是逻辑组织点比较明细的组件通信方式，相比
                自定义事件，自定义事件的方式很容易导致逻辑混乱.
            </p>

            <p className="tip-content">关于高阶组件: 组件逻辑复用；组件通信</p>
        </div>
    )
}
