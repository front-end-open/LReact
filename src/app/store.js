/*
 * @LastEditTime: 2022-04-17 23:59:28
 * @Description: 应用状态store
 * @Date: 2022-03-28 00:51:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux'

import counterReducer, { Counter } from '@/reducers/counterReducer'
console.log(counterReducer)
/**
 * redux状态机：默认包含一个根级别的reducer
 * 然后根级别的rootReducer在组合其他的切片子级reducer
 *
 */
// 手动调用所有reducer, 来组织store中的state
function rootReducer(store = {}, action) {
    return {
        counter: counterReducer(store.counter, action)
    }
}

export default configureStore({
    // 组织state
    // 方法一:
    // reducer: {
    //     // 传递切片对象，默认redux会将切片reducers传递给combineReducers.
    //     counter: counterReducer
    // }
    // 方法二
    // redux/tookit自动调用处理所有reducer
    reducer: rootReducer

    // 方法三
    // reducer: combineReducers({
    //     // 组织所有reducer
    //     counter: counterReducer
    // })
})

export const BaseCounter = createStore(Counter)
