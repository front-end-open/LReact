/*
 * @LastEditTime: 2022-08-15 01:26:24
 * @Description: 高阶组件
 * @Date: 2022-08-14 01:17:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useState } from 'react'

import CusInput from './CusInput'
import AuthPage from './InheritanceInversion'

export default function HocComponent() {
    const [isLogin, setLogin] = useState(false)
    return (
        <div className="tip-content">
            <h2 className="primary">高阶组件</h2>

            <div>
                <h3>初始焦点获取</h3>

                {/* <CusInput isFocus={true} /> */}
            </div>

            <div>
                <h2 className="primary">反向继承--渲染劫持</h2>

                <AuthPage
                    handleLogin={() => setLogin(true)}
                    isLogin={isLogin}
                />
            </div>
        </div>
    )
}
