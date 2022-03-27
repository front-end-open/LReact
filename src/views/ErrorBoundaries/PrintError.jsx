/*
 * @LastEditTime: 2022-03-27 23:02:02
 * @Description: 模拟错误输出
 * @Date: 2022-03-27 19:43:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default class PrintError extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleChange = () => {
            this.setState((state) => {
                return {
                    counter: state.counter + 1
                }
            })
        }
    }
    componentDidMount() {
        // 生命周期抛出错误
        // throw new Error('生命周期抛出的错误')
    }

    render() {
        // throw new Error('渲染期间抛出的错误')
        return (
            <div>
                <div>
                    <button onClick={this.handleChange}>
                        {this.state.counter}
                    </button>
                </div>
            </div>
        )
    }
}
