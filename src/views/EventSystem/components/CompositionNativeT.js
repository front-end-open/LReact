/*
 * @LastEditTime: 2022-08-08 01:48:37
 * @Description: 合称事件第二版
 * @Date: 2022-08-07 19:27:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Component } from 'react'

class ShowModalQR2 extends Component {
    state = {
        active: false
    }

    handleClick = (e) => {
        console.log('委派事件触发')
        e.preventDefault()
        e.stopPropagation()
        this.setState({
            active: !this.state.active
        })
    }

    handleClickQr(e) {
        console.log('qr-btn')
        e.stopPropagation() // 阻止冒泡, 避免点击modal关闭二维码区域
        e.preventDefault()
    }

    handleActive = () => {
        console.log('body', this)
        this.setState({
            active: false
        })
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleActive)
        document
            .querySelector('.qr')
            .addEventListener('click', this.handleClick)
        document
            .querySelector('.code')
            .addEventListener('click', this.handleClickQr)
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleActive)
        document
            .querySelector('.qr')
            .removeEventListener('click', this.handleClick)
        document
            .querySelector('.code')
            .removeEventListener('click', this.hnadleClickQr)
    }

    render() {
        return (
            <div>
                <h2>合称事件第二版-原生事件</h2>
                <p>
                    合称事件与原神事件基本是不能混用的，主要是在于原生和合称事件两种事件机制不一样。
                </p>

                <button className="qr">二维码</button>
                <div
                    className="code"
                    style={{
                        display: this.state.active ? 'block' : 'none',
                        width: 'fit-content'
                    }}
                >
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                    />
                </div>
            </div>
        )
    }
}

export default ShowModalQR2
