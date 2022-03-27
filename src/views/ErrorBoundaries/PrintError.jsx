/*
 * @LastEditTime: 2022-03-27 19:54:47
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
            setTimeout(() => {
                if (this.state.counter >= 5)
                    throw new Error('children: PrintError: sorry print Error')
            }, 0)
        }
    }

    render() {
        // if (this.state.counter === 5)
        //     throw new Error('children: PrintError: sorry print Error')
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
