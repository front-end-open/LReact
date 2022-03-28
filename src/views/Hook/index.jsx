/*
 * @LastEditTime: 2022-03-28 23:39:36
 * @Description: React-hook
 * @Date: 2022-03-28 01:19:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import UseStates from './components/useStateUse'

export default function Hooks() {
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
                    <UseStates />
                </div>
            </div>
        </div>
    )
}
