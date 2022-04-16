/*
 * @LastEditTime: 2022-04-16 20:39:23
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
export default configureStore({
    // reducer: {
    //     // 传递切片对象，默认redux会将切片reducers传递给combineReducers.
    //     counter: counterReducer
    // }
    reducer: combineReducers({
        counter: counterReducer
    })
})

export const BaseCounter = createStore(Counter)
