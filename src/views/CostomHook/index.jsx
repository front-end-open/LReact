/*
 * @LastEditTime: 2022-04-03 01:21:08
 * @Description:自定义hook
 * @Date: 2022-04-02 00:25:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import useMouse from '@/hook/Mouse'
export default function CustomHook() {
    // 使用自定义hook
    const { MouseX, MouseY } = useMouse()
    return (
        <>
            <h3 className="tip-success">自定义hook</h3>
            <div>
                <h3 className="tip-success">自定义hook-Mouse获取鼠标坐标</h3>
            </div>
            <div>
                <h3 className="tip-success">使用自定义hook-mouse</h3>
                <div>
                    当前鼠标坐标是: {MouseX}-{MouseY}
                </div>
            </div>
        </>
    )
}
