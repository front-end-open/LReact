/*
 * @LastEditTime: 2022-08-29 00:43:23
 * @Description:
 * @Date: 2022-08-29 00:36:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useState } from 'react'

import Ball from './base'

function EasyingFunc() {
    const [start, setStart] = useState(false)
    return (
        <div>
            <h2>缓动函数</h2>

            <button onClick={() => (!start ? setStart(true) : setStart(false))}>
                start
            </button>

            <Ball start={start} />
        </div>
    )
}

export default EasyingFunc
