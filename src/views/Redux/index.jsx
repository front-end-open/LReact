import { Counter } from './Counter'

/*
 * @LastEditTime: 2022-04-07 17:58:39
 * @Description: Redux使用
 * @Date: 2022-03-28 01:07:07
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { BaseCounter as store } from '@/app/store'
import RCounter from '@/components/Counter/index'
export default function Redux() {
    return (
        <div>
            <h3 className="tip-success">Redux使用</h3>
            <div>
                <h3 className="primary">注册Counter</h3>
                <div>{/* <Counter /> */}</div>
            </div>
            <div>
                <h3 className="tip-success">采用Redux重构Counter</h3>
                <div className="tip-content">
                    {/* 暂时无法追踪action日志 */}
                    <RCounter
                        value={store.getState()}
                        onIncrement={() =>
                            store.dispatch({ type: 'INCREMENT' })
                        }
                        onDecrement={() =>
                            store.dispatch({ type: 'DECREMENT' })
                        }
                    />
                </div>
            </div>
        </div>
    )
}
