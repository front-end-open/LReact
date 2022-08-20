/*
 * @LastEditTime: 2022-08-21 02:35:26
 * @Description:
 * @Date: 2022-08-20 19:13:31
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component, PureComponent } from 'react'

import PropTypes from 'prop-types'

import { debounce } from '@/utils/helper'
class List extends Component {
    static propTypes = {
        list: PropTypes.array,
        control: PropTypes.object
    }

    render() {
        const { control, list } = this.props
        return (
            <div>
                <div className="add-item" style={{ marginBottom: '12px' }}>
                    <input
                        type="text"
                        value={control.value}
                        onChange={control.onChange}
                    />
                    <button onClick={control.onClick}>Done</button>
                </div>
                <ul>
                    {list.map((v, idx) => {
                        return <li key={idx}>{v.label}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const withList = (WrappedComponent) => {
    return class extends PureComponent {
        static displayName =
            WrappedComponent.displayName || WrappedComponent.name || 'Component'

        constructor(props) {
            super(props)

            this.handleClick = this.handleClick.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                list: [],
                control: {
                    value: '',
                    onClick: this.handleClick,
                    onChange: this.handleChange
                }
            }
        }
        handleChange(e) {
            console.log(e)
            this.setState((pre) => {
                let control = pre.control
                control = {
                    // 这里从新变更引用地址
                    ...control,
                    value: e.target.value
                }

                return {
                    control
                }
            })
        }

        handleClick() {
            console.log('add', this.state.list)
            this.setState((preState) => {
                const list = [...preState.list] // 这里从新变更引用地址
                list.push({ label: this.state.control.value })

                return {
                    list
                }
            })
        }

        render() {
            return (
                <div
                    className="input-box tip-success"
                    style={{
                        width: '500px',
                        height: '400px',
                        marginTop: '12px'
                    }}
                >
                    <WrappedComponent
                        control={this.state.control}
                        list={this.state.list}
                        {...this.props}
                    />

                    <Test />
                </div>
            )
        }
    }
}

export default withList(List)

// 次组价不依赖任何外部状态，如果不做比较更新，将会在父组件更新时，一直触发更新。这里优化的手段时，采用PureComponent类声明。
class Test extends PureComponent {
    render() {
        return (
            <div className="tip-error">
                <h1>测试更新</h1>
            </div>
        )
    }
}
