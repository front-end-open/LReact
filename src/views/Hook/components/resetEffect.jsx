/*
 * @LastEditTime: 2022-03-31 00:11:30
 * @Description: 掉过对effect调用
 * @Date: 2022-03-30 23:52:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// class组件

export default class UpEffect extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = 'you have click' + this.state.count + 'times'
    }

    componentDidUpdate(preProps, preState) {
        console.log(preProps)
        // 检测props, state是否更新跳过对effect调用
        if (preState.count === this.state.count) {
            document.title = 'you have click' + this.state.count + 'times' // 跳过对effect调用
        }
        if (preProps.count > this.state.count)
            console.log('未检测到更新跳过更新effect')
    }

    handleChange = () => {
        if (this.state.count <= 5) {
            this.setState((prestate) => {
                return {
                    count: prestate.count + 1
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h3>have clicked {this.state.count} times</h3>
                <div>
                    <button onClick={this.handleChange}>Click me</button>
                </div>
            </div>
        )
    }
}
