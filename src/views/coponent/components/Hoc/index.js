/*
 * @LastEditTime: 2022-08-14 01:44:03
 * @Description: 高阶组件
 * @Date: 2022-08-14 01:17:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import CusInput from './CusInput'
export default function HocComponent() {
    return (
        <div className="tip-content">
            <h2 className="primary">高阶组件</h2>

            <div>
                <h3>初始焦点获取</h3>

                <CusInput isFocus={true} />
            </div>
        </div>
    )
}
