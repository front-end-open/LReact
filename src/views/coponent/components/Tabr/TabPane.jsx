/*
 * @LastEditTime: 2022-08-01 01:23:39
 * @Description: TabPane
 * @Date: 2022-08-01 01:16:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React, { Component } from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        order: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        isActive: PropTypes.bool,
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.node
    }

    render() {
        const { classPrefix, className, isActive, children } = this.props

        const classes = classnames({
            [`${className}`]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive
        })

        return (
            <div role={`tabpanel`} className={classes} aria-hidden={!isActive}>
                {children}
            </div>
        )
    }
}
