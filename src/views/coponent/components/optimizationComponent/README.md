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

#### 使用 PureRender

> react v18 提出 PureCompoent 基础组件类，在声明类组件的时候，可以直接继承此基础类，来实习那 Pure 组件。
