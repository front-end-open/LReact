/*
 * @LastEditTime: 2022-04-03 01:27:39
 * @Description: 获取鼠标坐标
 * @Date: 2022-04-03 01:05:56
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useEffect, useState } from 'react'

export default function useMouse() {
    const [MouseX, setMouseX] = useState(0)
    const [MouseY, setMouseY] = useState(0)
    useEffect(() => {
        document.addEventListener('mousemove', function (e) {
            let { clientX, clientY } = e
            setMouseX(clientX)
            setMouseY(clientY)
        })

        return () => {
            removeEventListener('mousemove', document)
        }
    })

    return { MouseX, MouseY }
}
