/* eslint-disable react/display-name */
/*
 * @LastEditTime: 2022-08-15 00:31:10
 * @Description: 获取焦点
 * @Date: 2022-08-14 01:20:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Component } from 'react'

import PropsType from 'prop-types'

export const GetFocus = (WrappedComponent) => {
    return class extends Component {
        static propTypes = {
            isFocus: PropsType.bool
        }

        static defaultProps = {
            isFocus: false
        }

        // get focus magic
        getFocus(el) {
            console.log(el, 111)
            if (this.props.isFocus) {
                el.focus()
            }
        }

        componentDidMount() {
            console.log('HOC didmount')
        }

        componentWillUnmount() {
            console.log('HOC unmount')
        }

        render() {
            const props = Object.assign({}, this.props, {
                refs: this.getFocus.bind(this)
            })

            return <WrappedComponent {...props} />
        }
    }
}
