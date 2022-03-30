/*
 * @LastEditTime: 2022-03-31 00:06:04
 * @Description: React-hook
 * @Date: 2022-03-28 01:19:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import React, { useState } from 'react'
import UseStates from './components/useStateUse'
import UseEffects from './components/useEffectUse'
import Counter from '@/views/Hook/components/Counter'
import ResetEffect from './components/resetEffect'
export default function Hooks() {
    const [counts, setCount] = useState(0)
    return (
        <div>
            <h3 className="tip-success">hook使用</h3>
            <div>
                <h3 className="tip-success">Hook初次使用：useState</h3>
                <div>
                    <ul className="primary">
                        <h3 className="tip-error">useState返回值说明:</h3>
                        <li>返回一个state</li>
                        <li>返回更新state的dispathAction-func</li>
                    </ul>
                    {/* <UseStates /> */}
                </div>
            </div>
            <div>
                <h3 className="tip-error">使用副作用</h3>
                <div>{/* <UseEffects /> */}</div>
            </div>

            <div>
                <h3 className="tip-success">
                    UseEffect使用---注册class版对比函数版计数器
                </h3>
                <div>
                    <h1 className="tip-content">注册Counter</h1>
                    <div>{/* <Counter /> */}</div>
                </div>
            </div>

            <div>
                <h3 className="tip-success">跳过对effect调用-性能优化</h3>

                <p className="tip-content">
                    每次渲染前后，对两次渲染状态并没有发生变化，可以跳过对effect调用
                </p>

                <div>
                    <h1 className="tip-content">关于class中跳过effect的方案</h1>
                    <div>
                        <h3 className="primary">注册resetEffect</h3>{' '}
                        <ResetEffect count={counts} />
                        <br />
                        <button onClick={() => setCount(counts + 1)}>
                            Change props
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
