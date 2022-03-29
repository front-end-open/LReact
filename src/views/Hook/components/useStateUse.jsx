/*
 * @LastEditTime: 2022-03-29 22:59:24
 * @Description: useState使用示列
 * @Date: 2022-03-28 22:21:50
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// useState

// console.log(a)
export default function UseState(props) {
    //经测试声明在函数组价外部的Hook无效。组件不会渲染
    // 使用useState声明count
    const [count, setCount] = React.useState(0)
    // 等价
    // let countState = React.useState(0)
    // let count = countState[0]
    // let setCount = countState[1]
    // 声明多个 state 变量！
    const [age, setAge] = React.useState(42)
    const [fruit, setFruit] = React.useState('banana')
    const [todos, setTodos] = React.useState([{ text: 'Learn Hooks' }])
    return (
        <div>
            <h3>count: {count}</h3>
            <div>
                <span>点击更新count:</span>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
            <div>
                <span>声明多state</span>
                <ul>
                    <li>age: {age}</li>
                    <li>fruit: {fruit}</li>
                    <li>todos: {todos[0].text}</li>
                </ul>
            </div>
        </div>
    )
}
