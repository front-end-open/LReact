/*
 * @LastEditTime: 2022-08-14 00:35:01
 * @Description:
 * @Date: 2022-08-14 00:26:08
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:9000/copnent',
    timeout: 30000
})

export default server
