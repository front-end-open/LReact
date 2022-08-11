/*
 * @LastEditTime: 2022-08-12 00:43:06
 * @Description: 单列模式-构建event实例
 * @Date: 2022-08-12 00:41:59
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 基于Nodejs-events浏览器模块
import EventEmmiter from 'events'

// 单列模式维护全局event实例
// 单例模式的意思是，
// 保证一个类只有一个实例，并且有一个接口供全局访问。它的作用就是防止频繁创建实例，浪费不必要的内存空间和资源消耗
export default new EventEmmiter()
