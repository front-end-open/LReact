/*
 * @LastEditTime: 2022-03-29 00:47:19
 * @Description: useEffect使用
 * @Date: 2022-03-29 00:03:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */
let dtitle = document.title
export default function UseEffect() {
    const [count, setCount] = React.useState(0)
    // 使用Effect在DOM渲染后更新页面表体
    /** 
       调用useEffect明确通知react在DOM更改过后调用‘副作用’函数
       由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。
       默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。
    */

    React.useEffect(() => {
        document.title = '当前得count:' + count // 访问state
        // 副作用函数还可以通过返回一个函数来指定如何“清除”副作用
        // 重置title
        // 理解state更新机制, 在useState更新state,采用异步更新策略
        if (count === 5) {
            return () => {
                console.log('count已经到达条件')
                setTimeout(() => (document.title = dtitle)) // state更新过后更新title
                // document.title = dtitle // 无效
            }
        }
    })

    // 再次注册Effect
    React.useEffect(() => {
        console.log('click count ' + count + ' times')
    })

    return (
        <div>
            <h3>UseEffect-Hook</h3>

            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        </div>
    )
}
