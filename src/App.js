/*
 * @LastEditTime: 2022-05-13 23:14:38
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import routers from '@/router/index.js'

import '@/style/global/App.scss'

export default class App extends React.Component {
    render() {
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
}
