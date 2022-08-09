/*
 * @LastEditTime: 2022-08-10 00:53:12
 * @Description: CSS-module
 * @Date: 2022-08-09 23:15:18
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import style from './index.css'

console.log(style, 111)

export default function CssModule() {
    return (
        <div className={style.wrap}>
            <h2 className={style.title}>css-module方案</h2>
        </div>
    )
}
