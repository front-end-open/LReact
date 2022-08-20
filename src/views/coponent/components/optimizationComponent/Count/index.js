/* eslint-disable react/display-name */
/*
 * @LastEditTime: 2022-08-20 19:13:04
 * @Description: PureRender使用
 * @Date: 2022-08-19 01:13:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 对props和state做浅比较实现一个计数器
// 浅比较可以使用官方的`React.PureCompoent`
// 该基础类内部实现了对`props`和`state`的浅比较
// 但是对于复杂的数据类型需要注意，这可能导致数据更新不及时
import { Component, PureComponent } from 'react'

import PropTypes from 'prop-types'

class Count extends PureComponent {
    static propTypes = {
        count: PropTypes.number,
        add: PropTypes.func,
        curry: PropTypes.func
    }
    componentDidUpdate() {
        console.log(this.props, 1111111111111)
    }

    render() {
        const { count, curry, add } = this.props
        return (
            <div style={{ dispaly: 'flex' }}>
                <button onClick={curry}>Curry</button>
                <span style={{ margin: '0 12px' }}>{count}</span>
                <button onClick={add}>Add</button>
            </div>
        )
    }
}

const withCount = (WrappedComponent) => {
    class doneCount extends Component {
        static dispalyName =
            WrappedComponent.dispalyName || WrappedComponent.name || 'Component'

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
            this.handleAdd = this.handleAdd.bind(this)
            this.handleCurry = this.handleCurry.bind(this)
        }
        handleCurry() {
            if (this.state.count <= 0) return

            this.setState((preState) => {
                let pcount = preState.count
                return {
                    count: pcount - 1
                }
            })
        }
        handleAdd() {
            console.log(this)
            this.setState((preState) => {
                let pcount = preState.count
                return {
                    count: pcount + 1
                }
            })
        }

        render() {
            return (
                <div
                    style={{ width: '500px', height: '400px' }}
                    className="tip-success"
                >
                    <WrappedComponent
                        {...this.props}
                        add={this.handleAdd}
                        count={this.state.count}
                        curry={this.handleCurry}
                    />
                </div>
            )
        }
    }
    return doneCount
}

export default withCount(Count)

// refrence isEqual




