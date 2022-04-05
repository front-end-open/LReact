/*
 * @LastEditTime: 2022-04-06 00:26:07
 * @Description: 获取鼠标坐标
 * @Date: 2022-04-03 01:05:56
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useEffect, useState, useCallback } from 'react'
// isRemove用于控制设置监听器
export default function useMouse(isRemove = false) {
    const [MouseX, setMouseX] = useState(0)
    const [MouseY, setMouseY] = useState(0)
    const getMouse = useCallback((e) => {
        // 解决重新渲染
        let { clientX, clientY } = e
        setMouseX(clientX)
        setMouseY(clientY)
    }, [])

    useEffect(() => {
        if (!isRemove) {
            console.log('添加mouse-move', isRemove)
            document.addEventListener('mousemove', getMouse)
        } else {
            console.log('移除mouse-move', isRemove)
            document.removeEventListener('mousemove', getMouse)
        }
    })

    return { MouseX, MouseY }
}
