/*
 * @LastEditTime: 2022-05-13 23:20:57
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useEffect } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from './layout/Layout'
import routers from '@/router/index.js'

export default function App() {
    const location = useLocation()
    useEffect(() => {
        document.title = location.pathname.split('/')[1]
    }, [location])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {routers.map((v) => {
                    return (
                        <Route
                            key={v.name}
                            path={v.path}
                            element={<v.component />}
                        ></Route>
                    )
                })}
            </Route>
        </Routes>
    )
}
