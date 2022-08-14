/* eslint-disable react/display-name */
const { Component } = require('react')

/*
 * @LastEditTime: 2022-08-15 01:29:13
 * @Description: 高阶组件-反向继承-渲染劫持
 * @Date: 2022-08-15 01:17:14
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 条件控制渲染输出
const Author = (wrappedComponent) => {
    return class extends wrappedComponent {
        render() {
            if (this.props.isLogin) {
                return super.render()
            } else {
                return (
                    <div>
                        <p>this page be proteced</p>
                        <button onClick={this.props.handleLogin}>登录</button>
                    </div>
                )
            }
        }
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <h3 className="tip-content"> webcome back</h3>
            </div>
        )
    }
}

export default Author(Home)

// 修改渲染输出结果
