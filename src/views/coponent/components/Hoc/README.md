## 高阶组件

> 出自于函数式编程，高阶函数概念。高阶组件，意在接收一个组件作为输入，然后数组组件。
> 高阶函数的有点在于: 可复用性，逻辑性，抽象特性

#### 特性

1. render 劫持
2. 控制 state 和 props

#### 实现方式

1. 属性代理(props proxy)

    > 高阶组件通过被包裹的 `react` 组件来操作 `props` 和 `state`

2. 反向继承(inheritance inversion)

    > 高阶组件继承来自被包裹的 `React` 组件

**属性代理**

1. 通过包裹组件来向原始组件传递 props 和 state 等手段

伪代码: 高阶组件`HOCComponent` 封装

```js
const HOCComponent = (WrappedComponent) => {
    return class extends Component {
        render() {
            // 劫持外层高阶组件传入的props，再次传入到原始组件
            return <WrappedComponent {...this.props} />
        }
    }
}
```

伪代码: 高阶组件`HOCComponent` 使用

```react
// 原始组件
class myComponent extend React.Component {
    render() {
        // ...
    }
}

// 使用 myComponent 组件
export default HOCComponent(myComponent)
```
