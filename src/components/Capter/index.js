/*
 * @LastEditTime: 2022-05-13 23:10:30
 * @Description:
 * @Date: 2022-03-16 00:03:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Link } from 'react-router-dom'

export default function Capter({ list }) {
    return (
        <ul className="menu">
            {list.map((v, i) => {
                if (v.name.indexOf('home') == -1) {
                    return (
                        <li key={i} className="more-line">
                            <Link to={v.path}>{v.menuname}</Link>
                        </li>
                    )
                } else {
                    return null
                }
            })}
        </ul>
    )
}
