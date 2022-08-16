## 组合式组件开发实践

#### 背景

> 现有的组件设计中，最常见的涉及方法时，通过`props`参数来增强组件的功能，并且随后后期组件的变化，props 也会组件泛滥，只增不减。而且扩展过程中又必须保证组件的向下兼容，就必须维护组件的`props`, props 的数量也多了起来，是的组件的维护成本变高。

> 解决方法： 为了提高组件的可维护，降低参数泛滥的结果。可以考虑组件的组合模式, 解决配置 props 式的所带来的一些问题。

1. 组件再分离
    > 现在考虑一个场景，实现一个`select`下拉搜索输入框组件。这个组件目前包含三个主要功能，提供用户输入的输入框，提供输入搜索的功能，提供下拉列表展示选择功能。

**缺陷：** 所有的功能全部考虑在一个组件内部去实现。

**优化方案：** 所有的功能，通过单个颗粒度的组件去实现。比如 selectInput 输入框提供输入，searchInput,提供搜索功能，List 提供列表展示。

> 交互抽离

```js
import { Component } from 'react'

class SelectInput extends Component {
    static displayName = 'SelectInput'

    render() {
        const { selectedItem, isActive, onClickHeader, placeholder } =
            this.props
        const { text } = selectedItem

        return (
            <div>
                <div onClick={onClickHeader}>
                    <input
                        type="text"
                        disabled
                        value={text}
                        placeholder={placeholder}
                    />
                    <Icon className={isActive} name="angle-down" />
                </div>
            </div>
        )
    }
}
```

2. 逻辑抽离

    > 组件抽离，不应该只停留在界面上，组件中的相互交互逻辑和业务逻辑也应该进行抽离。使用高阶组件完成对组件的逻辑进行抽离。

    > 使用组合模式，完成对组件的交互和展示进行抽离；使用高阶组件对组件的逻辑进行抽离。
