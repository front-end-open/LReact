/*
 * @LastEditTime: 2022-05-13 23:07:35
 * @Description:
 * @Date: 2022-05-13 22:36:48
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'

import Capter from '@/components/Capter/index.js'
import router from '@/router'

import '@/style/global/App.scss'

export default function Layout() {
    return (
        <div id="app">
            <div className="sider-wrap">
                <h1>React高级</h1>
                <Capter list={router} />
            </div>

            <div className="right-content">
                <Outlet />
            </div>
        </div>
    )
}
