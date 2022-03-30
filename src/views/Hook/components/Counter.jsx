/*
 * @LastEditTime: 2022-03-30 23:23:40
 * @Description: 计数器-class版
 * @Date: 2022-03-29 23:24:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    /**
     * 在每次组件渲染时，更新title：
     *  提议：更新操作发生在两处，一个是在组件挂载时；另一个是在组件渲染时。
     *  期望：在每次组件渲染时，在同一处更新title，class组件未提供这样的方法。仍然需要在componentDitmount
     * 和componentDidupdate方法两处更新title。使用Effect可以在一个方法中更新title
     *
     *
     *
     */
    shouldComponentUpdate() {
        console.log('之前count:', this.state.count)
        return true
    }

    componentDidMount() {
        document.title = 'you click ' + this.state.count + ' times'
    }

    componentDidUpdate() {
        console.log('当前count更新值:', this.state.count)
        document.title = 'you click ' + this.state.count + ' times'
    }

    handleUpteCount = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h3>curent count: {this.state.count}</h3>
                <button onClick={this.handleUpteCount}>Click me</button>
            </div>
        )
    }
}
