/*
 * @LastEditTime: 2022-04-18 00:38:20
 * @Description: redux计数器
 * @Date: 2022-03-28 01:10:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync
} from '@/reducers/counterReducer'

export function Counter() {
    const count = useSelector((state) => state.counter.value + 2)
    const dispatch = useDispatch()
    const [icount, setIcount] = useState(2)

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={icount}
                    onChange={(e) => setIcount(e.target.value)}
                />
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    +
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(Number(icount)))}
                >
                    Add Mount
                </button>
                <button
                    onClick={() => dispatch(incrementAsync(Number(icount)))}
                >
                    Add Mount-BY-Async
                </button>
            </div>
        </div>
    )
}
