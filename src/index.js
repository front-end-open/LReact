/*
 * @LastEditTime: 2022-05-13 22:55:03
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './app/store'
import ErrorBoundary from './components/ErrorBoundary'

import '@/style/global/index.scss'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <Provider store={store}>
                    <App />
                </Provider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)

// BaseCounter.subscribe(render) // redux基础库实现状态管理，并订阅视图更新
