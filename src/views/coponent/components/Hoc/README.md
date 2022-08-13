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

> 高阶组件生命周期调用顺序桶，堆栈调用。
> 从功能上讲，高阶组件的桶`mixin`作用一样，可以做到控制，`props`, 通过 `refs`使用引用， 抽象`state`和使用其他元素包裹被原始元素(React Element)

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

2. 控制`props`

    > 对于被包裹组件接收的`props`， 可以在其内部做增加，删除，编辑。但是需要注意，需要小心编辑和删除。使用高阶组件的 props 应尽可能避免重名。

3. 通过`refs`使用引用
    > 在高阶组件内部，使用被包裹组件实例引用

```js
const HOCComponent = (WrappedComponent) => {
    proc(wraped) { // 传递被包裹组件实例
        // 使用被包裹组件ref引用
        wraped.method()
    }
    return class extends Component {

        render() {
            const props = Object.assign({}, this.props, {
                ref: this.proc.bind(this)
            })
            // 劫持外层高阶组件传入的props，再次传入到原始组件
            // 想被包裹传递ref引用回调
            return <WrappedComponent {...props} />
        }
    }
}
```

3. `state`抽象
    > 通过使用高阶组件，将原始组件的内部业务状态`state`和`props`抽离到外部高阶组件上，有效把被包裹组件抽离为展示型组件，或者可以称之为受控组件.

```js
import React, { Component } from 'react'

const myContainer = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ''
            }

            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange(event) {
            this.setState({
                name: event.target.value
            })
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }

            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}

export default myContainer
```

使用受控的`input`

```js
import React, { Component } from 'react'

class myComponent extend Component {
    render() {
        return <input name="name" {...this.props.name} />
    }
}

export default myContainer(myComponent);
```

4. 使用其他元素包裹`WrappedComponent`
    > 这既是添加样式；也是为了布局

