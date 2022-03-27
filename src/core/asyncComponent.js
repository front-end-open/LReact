/*
 * @LastEditTime: 2022-03-27 04:42:49
 * @Description: 异步组件
 * @Date: 2022-03-27 03:26:09
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Loadable from 'react-loadable'
export const AsyncComponent = (asyncCom) =>
    Loadable({
        loader: () => asyncCom, // 加载promise来加载组件
        loading: () => <div>加载中...</div> // 当加载进行中或者错误时加载的组件
        // delay: 500 // 加载loading组件之前的延迟，防止闪屏
    })
