/*
 * @LastEditTime: 2022-08-06 23:04:47
 * @Description: jsx
 * @Date: 2022-08-06 17:36:41
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'

import PropTypes from 'prop-types'

function Toggle(props) {
    const [toggle, setToggle] = useState(false)

    function checkoutToggle(e) {
        console.log(e)

        setToggle(!toggle)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <button onClick={checkoutToggle}>{toggle ? 'off' : 'on'}</button>
        </div>
    )
}

Toggle.propTypes = {
    title: PropTypes.string.isRequired
}

export default Toggle
