/*
 * @LastEditTime: 2022-08-01 01:15:17
 * @Description: TabContent
 * @Date: 2022-08-01 01:06:35
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React, { Component } from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class TabContent extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    }
    getTabPanes() {
        const { classPrefix, activeIndex, panels } = this.props

        return React.Children.map(panels, (child) => {
            if (!child) return

            const order = parseInt(child.props.order, 10)
            const isActive = activeIndex === order

            return React.cloneElement(child, {
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`
            })
        })
    }

    render() {
        const { classPrefix } = this.props

        const classes = classnames({
            [`${classPrefix}-content`]: true
        })

        return <div className={classes}>{this.getTabPanes()}</div>
    }
}
