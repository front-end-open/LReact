/*
 * @LastEditTime: 2022-03-28 01:06:00
 * @Description: 应用状态store
 * @Date: 2022-03-28 00:51:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/reducer/counterReducer'
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})
