/*
 * @LastEditTime: 2022-04-16 21:38:37
 * @Description: 状态获取
 * @Date: 2022-04-16 21:00:42
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import store from '@/app/store.js'

const state = store.getState()
const selectState = (key) => state[key]

export default selectState
