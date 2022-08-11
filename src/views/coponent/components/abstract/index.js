/*
 * @LastEditTime: 2022-08-11 00:40:23
 * @Description: 组件抽象
 * @Date: 2022-08-11 00:37:55
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

class Abscract extends Component {
    rnder() {
        return (
            <div className="tip-content">
                <h3 className="primary">组件抽象</h3>

                <p>
                    react组件设计过程中，常存在需要逻辑公用的地方。采用HOC/mixin方式来实现复用
                </p>
            </div>
        )
    }
}

export default Abscract
