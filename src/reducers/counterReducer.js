/*
 * @LastEditTime: 2022-04-08 18:00:46
 * @Description: redux切片
 * @Date: 2022-03-28 01:05:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// Reduxjs/tookit 版本
// 切片”是应用中单个功能的 Redux reducer 逻辑和 action 的集合, 用来切分根状态对象
import { createSlice } from '@reduxjs/toolkit'
//  createSlice 的函数，它负责生成 action 类型字符串、action creator 函数和 action 对象的工作
export const counterSlice = createSlice({
    name: 'counters', // name用作action的type
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            // type: counters/increment
            return {
                ...state,
                value: state.value + 1
            }
            // state.value += 1 // error: 不允许直接修改state对象
        },
        decrement: (state) => {
            // type: counters/decrement

            return {
                ...state,
                value: state.value - 1
            }
            // state.value -= 1 // error: 不允许直接修改state对象
        },
        incrementByAmount: (state, action) => {
            // type: counters/incrementByAmount
            return {
                ...state,
                value: state.value + action.payload
            }
            // state.value += action.payload  // error: 不允许直接修改state对象
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions // action-creator

export default counterSlice.reducer
// 测试获取action-type: increment
console.log(counterSlice, '\b', increment())

// createSlice生成了响应aciton的reducer,尝试更新state
const newState = counterSlice.reducer({ value: 10 }, increment())
console.log(newState) // {value: 11}

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
