/*
 * @LastEditTime: 2022-08-09 23:17:19
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { AsyncComponent } from '@/core/asyncComponent.js'
import Layout from '@/layout/Layout'
import NotFund from '@/views/common/404'
import GlobalContext from '@/views/Context'

let router = [
    {
        path: '/globalcontext',
        name: 'GlobalContext',
        menuname: '公共状态管理-Context',
        component: GlobalContext,
        meta: {
            isIndex: true
        }
    },
    {
        path: '/csplit',
        name: 'CodeSplit',
        menuname: '代码分割',
        component: AsyncComponent(
            import(
                /* webpackChunkName: "CodeSplit" */ '@/views/codeSplit/index'
            )
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/errorboundary',
        name: 'ErrorBoundary',
        menuname: '错误边界',
        component: AsyncComponent(
            import(
                /*webpackChunkName: "ErrorBoundary"*/ '@/views/ErrorBoundaries/index'
            )
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/Assets',
        name: 'AssetPro',
        menuname: '资源文件处理',
        component: AsyncComponent(
            import(/*webpackChunkName: "AssetPro"*/ '@/views/AssetPro/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/Redux',
        name: 'Redux',
        menuname: 'Redux使用',
        component: AsyncComponent(
            import(/*webpackChunkName: "Redux"*/ '@/views/Redux/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/reacthook',
        name: 'Hook',
        menuname: 'Hook使用',
        component: AsyncComponent(
            import(/*webpackChunkName: "Hook"*/ '@/views/Hook/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/hookrule',
        name: 'HookRules',
        menuname: 'hook使用规则',
        component: AsyncComponent(
            import(/*webpackChunkName: "HookRules"*/ '@/views/HookRules/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/customhook',
        name: 'CustomHook',
        menuname: '自定义Hook',
        component: AsyncComponent(
            import(
                /*webpackChunkName: "CustomHook"*/ '@/views/CostomHook/index'
            )
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/flux',
        name: 'Flux',
        menuname: 'Flux认识',
        component: AsyncComponent(
            import(/*webpackChunkName: "Flux"*/ '@/views/Flux/inidex')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/copnent',
        name: 'Coponent',
        menuname: '组件深入',
        component: AsyncComponent(
            import(/*webpackChunkName: "coponent"*/ '@/views/coponent/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/jsxdom',
        name: 'JSXCOM',
        menuname: 'JSX/DOM相关',
        component: AsyncComponent(
            import(/*webpackChunkName: "jsxdom"*/ '@/views/jsxdom/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '/cssmodule',
        name: 'CssModule',
        menuname: 'CssModule',
        component: AsyncComponent(
            import(/*webpackChunkName: "CssModule"*/ '@/views/CssModule/index')
        ),
        meta: {
            isIndex: false
        }
    },
    {
        path: '*',
        name: '404',
        component: NotFund
    }
]

export default router
