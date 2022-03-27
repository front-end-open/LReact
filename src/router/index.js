/*
 * @LastEditTime: 2022-03-28 01:18:05
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
            },
            {
                path: '/Assets',
                name: 'AssetPro',
                menuname: '资源文件处理',
                component: AsyncComponent(
                    import(
                        /*webpackChunkName: "AssetPro"*/ '@/views/AssetPro/index'
                    )
                )
            },
            {
                path: '/Redux',
                name: 'Redux',
                menuname: 'Redux使用',
                component: AsyncComponent(
                    import(/*webpackChunkName: "Redux"*/ '@/views/Redux/index')
                )
            },
            {
                path: '/reacthook',
                name: 'Hook',
                menuname: 'Hook使用',
                component: AsyncComponent(
                    import(/*webpackChunkName: "Hook"*/ '@/views/Hook/index')
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
