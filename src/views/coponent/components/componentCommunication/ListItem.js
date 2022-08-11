/* eslint-disable react/prop-types */
/*
 * @LastEditTime: 2022-08-11 23:37:14
 * @Description: listitem组件
 * @Date: 2022-08-11 23:06:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React, { Component } from 'react'

import PropTypes from 'prop-types'

class ListItem extends Component {
    static defaultProps = {
        text: PropTypes.string,
        checked: PropTypes.bool,
        value: PropTypes.string
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <span>{this.props.value}</span>
            </li>
        )
    }
}

export default ListItem
