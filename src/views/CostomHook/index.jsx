/*
 * @LastEditTime: 2022-04-06 00:24:09
 * @Description:自定义hook
 * @Date: 2022-04-02 00:25:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useEffect, useState } from 'react'

import useMouse from '@/hook/Mouse'

export default function CustomHook() {
    // 使用自定义hook
    const [isRemove, setRemove] = useState(false)
    const { MouseX, MouseY } = useMouse(isRemove)

    // useEffect(() => {
    //     if (!isRemove) console.log('组件挂载', isRemove)
    //     else console.log('组件重绘', isRemove)
    // }, [isRemove])
    return (
        <>
            <h3 className="tip-success">自定义hook</h3>
            <div>
                <h3 className="tip-success">自定义hook-Mouse获取鼠标坐标</h3>
            </div>
            <div>
                <h3 className="tip-success">使用自定义hook-mouse</h3>
                <div>
                    当前鼠标坐标是: {MouseX}-{MouseY}
                </div>
            </div>
            <div>
                <h3 className="tip-success">hook使用规则明细</h3>
                <ul>
                    <li>自定义hook需要以use开头，需要符合自定义Hook规则</li>
                    <li>
                        一个组件中多次使用自定义hook，不会造成state从冲突。自定义hook的机制是复用状态逻辑。所以每次调用自定义hook时，内部state是完全隔离的。
                    </li>
                    <li>
                        每次调用自定义hook，在组件角度来说就是调用了自定义
                        的hook内部的内置hook。由于内置hook可以在一个组件中多次调用，并且相互独立。所以每次调用自定义hook时，也等于是单独获取了state.
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="tip-success">自定义hooks之间通信</h3>
                <div>
                    <h3 className="primary">
                        useMouse-hook获取窗口鼠标坐标，现在通过控制tag，以移除handler
                    </h3>
                    <button onClick={() => setRemove(true)}>移除handler</button>
                </div>
            </div>
        </>
    )
}
