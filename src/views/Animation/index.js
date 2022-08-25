/*
 * @LastEditTime: 2022-08-26 01:36:00
 * @Description: 动画
 * @Date: 2022-08-24 23:32:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'

import Fade from './base/Fade'
import ReactCssTransition from './CSSTransition'

function Animation() {
    const [state, setState] = useState(false)
    const [cstate, setCState] = useState(false)

    return (
        <div className="tip-content">
            <h3 className="primary">动画</h3>

            <Fade in={state} />

            <button onClick={() => (!state ? setState(true) : setState(false))}>
                start
            </button>

            <div className="tip-content">
                <h3>Css-transiton--API实现过渡动画</h3>
                <ReactCssTransition in={cstate} />

                <button
                    onClick={() =>
                        cstate ? setCState(false) : setCState(true)
                    }
                >
                    start-{`${cstate}`}
                </button>
            </div>
        </div>
    )
}

export default Animation
