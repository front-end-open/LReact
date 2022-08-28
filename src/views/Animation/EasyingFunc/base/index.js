/*
 * @LastEditTime: 2022-08-29 00:52:39
 * @Description:
 * @Date: 2022-08-29 00:37:40
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useEffect } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import './ball.scss'

function Ball({ start }) {
    useEffect(() => {}, [start])
    return <div className={classNames('box', start ? 'box-ani' : '')}></div>
}

Ball.propTypes = {
    start: PropTypes.bool
}

export default Ball
