/*
 * @LastEditTime: 2022-04-08 16:30:18
 * @Description: redux切片
 * @Date: 2022-03-28 01:05:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// Reduxjs/tookit 版本
// 切片”是应用中单个功能的 Redux reducer 逻辑和 action 的集合, 用来切分根状态对象
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counters', // 命名此state;同时也用于标记reduce
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            // type: counters/increment
            state.value += 1
        },
        decrement: (state) => {
            // type: counters/decrement
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            // type: counters/incrementByAmount
            state.value += action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
console.log(counterSlice)

// redux版本
export const Counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
