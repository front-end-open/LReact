import { TestEffectLoop } from './TestEffectLoop'

/*
 * @LastEditTime: 2022-04-01 23:43:41
 * @Description: hook使用规则
 * @Date: 2022-04-01 22:40:54
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function HookRule() {
    return (
        <div>
            <h3 className="tip-success">hook规则</h3>
            <ul className="tip-error">
                <li>不要在普通的 JavaScript 函数中调用 Hook</li>
                <li>
                    不要在循环，条件或嵌套函数中调用
                    Hook。总是在函数组件顶层使用 Hook
                </li>
                <li>在自定义 Hook 中调用其他 Hook</li>
            </ul>

            <div>
                <h3 className="tip-success">hook调用顺序</h3>
                <div>
                    函数组件每次渲染时，state和effect更新调用顺序，是以Hook声明顺序来建立对应关系的。
                </div>
            </div>

            <div>
                <h3 className="primary">测试hook调用顺序</h3>
                <div>
                    <TestEffectLoop />
                </div>
            </div>
            <h3 className="tip-error">
                Crash!, hook需要放到函数顶层使用，否则会导致运行时异常.
            </h3>
        </div>
    )
}
