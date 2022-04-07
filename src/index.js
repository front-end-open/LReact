/*
 * @LastEditTime: 2022-04-07 18:01:31
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import '@/style/global/index.scss'
import { Routes, Route } from 'react-router-dom'
import routers from '@/router/index.js'

import store, { BaseCounter } from './app/store'
import { Provider } from 'react-redux'

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    {routers.map((v) => {
                        if (v.name.indexOf('home') != -1) {
                            return (
                                <Route
                                    key={v.name}
                                    path={v.path}
                                    element={
                                        <Provider store={store}>
                                            <v.component
                                                children={v.children}
                                            />
                                        </Provider>
                                        // <v.component children={v.children} />
                                    }
                                >
                                    {v.children.map((vc) => (
                                        <Route
                                            {...(vc.meta.isIndex
                                                ? { index: 'index' }
                                                : {})}
                                            path={vc.path}
                                            key={vc.name}
                                            element={<vc.component />}
                                        ></Route>
                                    ))}
                                </Route>
                            )
                        } else {
                            return (
                                <Route
                                    key={v.name}
                                    path={v.path}
                                    element={<v.component />}
                                ></Route>
                            )
                        }
                    })}
                </Routes>
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector('#root')
    )
render()
// BaseCounter.subscribe(render)
