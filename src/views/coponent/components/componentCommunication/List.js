/* eslint-disable react/prop-types */
/*
 * @LastEditTime: 2022-08-12 00:55:00
 * @Description: list组件-回调函数方式，实现组件通信
 * @Date: 2022-08-11 23:06:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import PropTypes from 'prop-types'

import ListItem from './ListItem'
import emmiter from '@/utils/Event'

class List extends Component {
    static propTypes = {
        list: PropTypes.array,
        handleItemChange: PropTypes.func
    }

    static defaultProps = {
        list: [],
        handleItemChange: () => {}
    }

    constructor(props) {
        super(props)

        this.state = {
            list: this.props.list.map((entry) => {
                return {
                    text: entry.text,
                    checked: entry.checked
                }
            })
        }

        // this.onItemChange.bind(this)
    }

    onItemChange(entry) {
        const { list } = this.state

        this.setState(
            {
                list: list.map((preEntry) => {
                    return {
                        text: preEntry.text,
                        checked:
                            preEntry.text === entry.text
                                ? !preEntry.checked
                                : preEntry.checked
                    }
                })
            },
            () => {
                // 状态已经更新
                // this.props.handleItemChange(entry, this.state.list)

                // 订阅itemchange事件触发更新通知
                emmiter.emit('ItemChange', { entry, list: this.state.list })
            }
        )
        // 状态未更新
        // this.props.handleItemChange(entry, this.state.list)
        // emmiter.emit('ItemChange', entry)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((entry, idx) => {
                        return (
                            <ListItem
                                key={idx}
                                value={entry.text}
                                checked={entry.checked}
                                onChange={() => this.onItemChange(entry)}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List
