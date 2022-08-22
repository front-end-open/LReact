## 组件性能优化

> 影响网页性能最大的因素之一有，重绘(repaint)和重排(reflow)。react 和兴的 virtual DOM 就是为了避免网页的重绘和重排.

> 提高 react vritual 的效率。从 react 渲染过程来看，如何方式不必要的渲染可能是最需要去结局的问题。针对这个问题，react 也提出了，PureRender。

### 纯函数

> 理解`PureRender`中的`Pure`，还是要从函数式编程的基本概念“纯函数”说起。

> 纯函数三大原则

1. 给定相同输入，返回相同结果。
2. 函数执行过程中，没有副作用。
3. 除了函数内部状态，没有额外状态依赖。

### PureRender

> PureRender 是组件开发中的重要概念,其中的 Pure 就是满足纯函数的条件，即组件的渲染是被相同的`props`和`state`得到相同的渲染结果。（原则：相同输入得到相同输出结果）.

> PureRender 实现原理：参考`react-addons-props-render`，该 mxin 插件为官方早期对`pureRender`实现的一个插件。 其原理是在生命周期`shouldComponentUpdate`中，对传入的`props`和`state`做浅比较, 如果返回 false，就执行 render 更新。

> 通常对于组件的性能的优化在 shouldComponent 中，这里边主要是对`props`和`state`做浅比较。不建议做深比较，耗费资源。

> PureRender 对 object 类型只做了引用比较，并没有做值比较.其源码中也只对 pureRender 做了浅层比较，并没有深比较。关于这一点相关 demo 测试在: Equal 组件中。

> 通过测试发现，如果 props 中包含引用类型，那么在父子组中，向下传入引用。如果更新引用类型的值（引用地址不变的情况），子组件是不会更新的。相反，如果子组件时通过`Compoent`声明的，在不手动比较的情况下，组件是默认一直更新的。

关于纯组件更新原理：引用比较，而非值比较。

```js
// 伪代码
handleChange(e) {
    console.log(e)
    this.setState((pre) => {
        let control = pre.control
        control = {
            // 这里从新变更引用地址
            ...control,
            value: e.target.value
        }

        return {
            control
        }
    })
}

handleClick() {
    console.log('add', this.state.list)
    this.setState((preState) => {
        const list = [...preState.list] // 这里从新变更引用地址
        list.push({ label: this.state.control.value })

        return {
            list
        }
    })
}

```

#### 使用 PureRender

> react v18 提出 PureCompoent 基础组件类，在声明类组件的时候，可以直接继承此基础类，来实习那 Pure 组件。

### PureRender 优化

> PureRender 作为最常见的组件性能优化方法之一。但是再数据可变，比如存在引用类型的`props`和`state`时，也会存在更新的问题，浅比较已不能作为更新方式需求，而深比较又会造成性能浪费。而且浅比较可覆盖的范围有限。

**触发 PureRender 更新的集中情况**

1. 直接为 props 赋值字面量对象和数组
    > 说明： 由于每次调用组件都会重新创建组件。就算传入组件的对象和数组值没有改变，他们的引用地址也会发生变化。比如

```js
<Account style={{ color: 'black' }} />
```

> 以字面量形式赋值每次都会触发组件的更新，因此。需要对于这种情况，需要将组价的 props 以变量形式传入，即可避免此情况。自比如如果需要为`prop`传入默认值，也可以以变量形式保存。

> 同样如果为 props 传入表达式计算值也会造成 PureRender 更新无效。

> 通过保存变量可以保证引用的不变。但是不合符函数式编程规则，这为函数带来副作用。

2. 设置 props 方法并通过事件绑定在元素上。

    > 通常是通过 bind 直接在元素上进行 this 绑定。但是这种每次调用 bind 都会更新 props-方法更新，因此也会无效触发 pureComponent 更新。

    > 考虑通过抽象子组件或改变原有数据结构解决。

3. 设置子组件

> 对于包含子组件的 react 组件，如果`shouldComponentUpdate`一直返回 true,那么将会导致子组件一直更新。

> 解决方法： 在父组件中，做 props 比较，决定是否需要调用`shouldComponentUpdate`返回 true 来更新。

### Immutable

> 在传递数据时，使用 Immutable 来提升组件渲染性能.js 的对象一般是可变的，因为使用引用赋值后，原来的对象也会发生修改。

```js
let foo = { a: 1 }
let bar = foo // 引用赋值foo
// 修改bar.a = 2。此时,foo.a 同样被修改为 2
bar.a = 2
```

> 对于这种可变行为，确实可以节约内存，但是会在应用内部造成安全隐患，导致数据的不明确性，造成数据污染。当然解决办法是可以通过深浅拷贝，来避免数据被污染。但拷贝也会造成 cpu 的内存浪费。
