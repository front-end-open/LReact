/*
 * @LastEditTime: 2022-04-08 16:47:17
 * @Description: 应用状态store
 * @Date: 2022-03-28 00:51:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createStore } from 'redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import counterReducer, { Counter } from '@/reducers/counterReducer'
/**
 * redux状态机：默认包含一个根级别的reducer
 * 然后根级别的rootReducer在组合其他的切片子级reducer
 *
 */
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const BaseCounter = createStore(Counter)
