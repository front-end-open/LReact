/*
 * @LastEditTime: 2022-08-29 00:41:48
 * @Description: 动画
 * @Date: 2022-08-24 23:32:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { v4 as uuid } from 'uuid'

import Fade from './base/Fade'
import ReactCssTransition from './CSSTransition'
import EasyingFunc from './EasyingFunc'
import { TodoList, TodoItem } from './TransitionGroup/todo'

import './TransitionGroup/itemainimation.scss'

function Animation() {
    const [state, setState] = useState(false)
    const [cstate, setCState] = useState(false)

    const [list, setList] = useState([
        { id: uuid(), text: 'Buy eggs' },
        { id: uuid(), text: 'Pay bills' },
        { id: uuid(), text: 'Invite friends over' },
        { id: uuid(), text: 'Fix the TV' }
    ])

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

            <div>
                <h2>TransitionGrounp</h2>

                <TodoList>
                    {/* component 作为子组件外层包裹元素，默认是 div; 指定null,可取消使用div包裹 */}
                    <TransitionGroup component={null}>
                        {list.map(({ id, text }) => {
                            return (
                                <CSSTransition
                                    key={id}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <TodoItem>
                                        <button
                                            onClick={() =>
                                                setList(
                                                    list.filter(
                                                        (v) => v.id !== id
                                                    )
                                                )
                                            }
                                        >
                                            X
                                        </button>
                                        <span style={{ marginLeft: '24px' }}>
                                            {text}
                                        </span>
                                    </TodoItem>
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </TodoList>
                <button
                    onClick={() => {
                        const text = prompt('Enter some text')
                        if (text) {
                            setList((items) => [...items, { id: uuid(), text }])
                        } else {
                            alert('请输入合法值')
                        }
                    }}
                >
                    AddItem
                </button>
            </div>

            <div>
                <EasyingFunc />
            </div>
        </div>
    )
}

export default Animation
