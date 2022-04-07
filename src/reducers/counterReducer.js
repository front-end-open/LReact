/*
 * @LastEditTime: 2022-04-07 16:51:19
 * @Description:
 * @Date: 2022-03-28 01:05:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// Reduxjs/tookit 版本
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

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
