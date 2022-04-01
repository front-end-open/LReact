/*
 * @LastEditTime: 2022-04-01 23:42:31
 * @Description: 验证Hook调用顺序
 * @Date: 2022-04-01 23:14:04
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useEffect, useState } from 'react'

export function TestEffectLoop() {
    // 初始化state-effect
    // 设置条件，更改hook的调用顺序，测试运行结果
    const [name, setName] = useState('Mary')
    if (name != '') {
        useEffect(() => {
            localStorage.setItem('formName', name)
        })
    }

    const [surname, setSurname] = useState('Poppins')
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname
    })
    function handleChange(e, type) {
        if (type === 'set') {
            setName(e.target.value)
        } else {
            setSurname(e.target.value)
        }
    }
    // 设置条件更改hook的调用顺序，导致运行错误。应用崩溃。
    // 总结hook需要放到函数顶层使用，否则会导致运行时异常.
    return (
        <form>
            <h3>
                {name}-{surname}
            </h3>
            <label>
                name:{' '}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => handleChange(e, 'set')}
                />
            </label>
            <label>
                surename:{' '}
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => handleChange(e, 'seto')}
                />
            </label>
        </form>
    )
}
