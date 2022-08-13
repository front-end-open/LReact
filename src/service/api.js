/*
 * @LastEditTime: 2022-08-14 00:43:01
 * @Description:
 * @Date: 2022-08-14 00:36:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import config from './pathPrefix'
import server from '@/service/request'

// 获取评论信息
export const queryComment = (params) => {
    return server.get(config.comment, {
        ...params
    })
}
