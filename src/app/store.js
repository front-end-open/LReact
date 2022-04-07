/*
 * @LastEditTime: 2022-04-07 17:28:56
 * @Description: 应用状态store
 * @Date: 2022-03-28 00:51:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import counterReducer, { Counter } from '@/reducers/counterReducer'
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const BaseCounter = createStore(Counter)
