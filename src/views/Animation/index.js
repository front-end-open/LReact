/*
 * @LastEditTime: 2022-08-25 00:58:05
 * @Description: 动画
 * @Date: 2022-08-24 23:32:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'

import Fade from './base/Fade'

function Animation() {
    const [state, setState] = useState(false)

    return (
        <div className="tip-content">
            <h3 className="primary">动画</h3>

            <Fade in={state} />

            <button onClick={() => (!state ? setState(true) : setState(false))}>
                start
            </button>
        </div>
    )
}

export default Animation
