/*
 * @LastEditTime: 2022-03-27 19:14:40
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import App from '@/App.js'
import NotFund from '@/views/common/404'
import GlobalContext from '@/views/Context'
import { AsyncComponent } from '@/core/asyncComponent.js'
let router = [
    {
        path: '/',
        name: 'home',
        component: App,
        children: [
            {
                path: '/globalcontext',
                name: 'GlobalContext',
                menuname: '公共状态管理-Context',
                component: GlobalContext
            },
            {
                path: '/csplit',
                name: 'CodeSplit',
                menuname: '代码分割',
                component: AsyncComponent(
                    import(
                        /* webpackChunkName: "CodeSplit" */ '@/views/codeSplit/index'
                    )
                )
            },
            {
                path: '/errorboundary',
                name: 'ErrorBoundary',
                menuname: '错误边界',
                component: AsyncComponent(
                    import(
                        /*webpackChunkName: "ErrorBoundary"*/ '@/views/ErrorBoundaries/index'
                    )
                )
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: NotFund
    }
]

export default router
