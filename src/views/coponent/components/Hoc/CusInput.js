/* eslint-disable react/prop-types */
/*
 * @LastEditTime: 2022-08-14 01:53:34
 * @Description: 自定义输入框
 * @Date: 2022-08-14 01:29:09
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Component } from 'react'

import { GetFocus } from './GetFocusHoc'

class CusInput extends Component {
    render() {
        return (
            <>
                <label htmlFor="name">
                    <span>姓名</span>
                    <input type="text" ref={this.props.refs} />
                </label>
            </>
        )
    }
}

export default GetFocus(CusInput)
