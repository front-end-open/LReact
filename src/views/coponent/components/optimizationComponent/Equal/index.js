/*
 * @LastEditTime: 2022-08-20 19:49:30
 * @Description:
 * @Date: 2022-08-20 19:13:31
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component, PureComponent } from 'react'

import PropTypes from 'prop-types'
class List extends PureComponent {
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
    return class extends Component {
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
                const list = preState.list
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
                </div>
            )
        }
    }
}

export default withList(List)
