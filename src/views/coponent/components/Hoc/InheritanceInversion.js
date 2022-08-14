/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const { Component, cloneElement } = require('react')

/*
 * @LastEditTime: 2022-08-15 01:59:34
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
                const element = super.render()
                console.log(element, 'home-insca')
                // 必须是input类型才可以传递value
                const props = Object.assign({}, element.props, {
                    value: 'may the force be with you'
                })
                console.log(props, 'home-props')
                const elementTree = cloneElement(
                    element,
                    props,
                    element.props.children
                )

                return elementTree
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
function CusInput({ value }) {
    // console.log('value', vlaue)
    return <input type="text" value={value} />
}

class Home extends Component {
    render() {
        console.log(this.props, 'Home')
        return (
            <div>
                <h3>welcome back</h3>
                <CusInput value={this.props.value} />
            </div>
        )
    }
}

export default Author(Home)

// 修改渲染输出结果
