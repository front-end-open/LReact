## 组件的变化

> 在 MV\*模型之前那，组件分两种。分别是：狭义上的组件，广义上的组件

-   狭义上的组件仅带有交互效果，不含业务逻辑。主要实现是通过 js 操作 dom 和样式表来实现交互效果。
-   广义上的组件除了带有 UI 交互，同时还包含组件内部的业务逻辑和数据

#### 两种类别组件实现

1. UI 组件
    > 以 table 组件为列

> 传统的 UI 组件实现，其行为，结构，样式没有很好的结合，都是通过结构与 style 样式的拼装。通过改变 style 来控制元素的表现。这样的组织逻辑，后期应用的复杂，会导致难以维护的代码。

> 基于上述的 Tab 组件的实现的几点总结， 关于传统组件的标准组件特性

-   基本的封装性: OOP 模式
-   简单的生命周期呈现: constructor, destory
-   明确的数据流动: 初始化传入数据-->解析传入数据-->根据不同参数做出不同响应。

> 组件分层思想: MVC, MV\*\*

1. 广义上的组件[React 组件 | WebComponent]
    > React 组件包含： 组件的构建方式, 组件参数和状态(prop/state), 组件生命周期

##### 组件构建方式

1. React.createClass【react v0.14 已被遗弃】
2. ES6 class
3. 无状态组件
    > 该类型组件不包含 state，也无生命周期方法。_并且在组件调用时，无状态组件始终保持一个实例，保证了不必要的检查和内存分配。_

#### React 组件细节

##### React 组件数据流

> React 中，数据是自顶向下单向流动的，即父组件到子组件。其中 state 和 props 是两个重要概念。如果顶层组件初始化 props,那么 React 会向下遍历整棵组件树，尝试从新渲染所有相关子组件。而 state 只关心每个组件的内部状态，这写状态只能在组件内部改变。把组件看成一颗函数，那么他接受 props 作为参数，内部 state 作为函数的内部参数，返回一个虚拟 dom。

###### state

> 分层架构思想之前，组件的内部的状态没有集中管理的地方，都是和 view 层耦合在一起。直到 MVC 分层思想的出现，改变了这一局面，将组件内部交互状态和 View 层解耦。一般将放置在 Model 中管理。

###### prop 类别

> 组件间有内部 state,相互之间又通过 prop 来控制交互。并且 props 是不可修改的，如果需要修改需要在内部以变量存储，或者在 render 方法，中计算处理。

###### 子组件 prop【子组件集合】

> React 内置重要的 children-props,代表子组件集合，根据传入子组件的数量来决定是否是数组类型。

###### 组件 props【component 元素】

> 组件的 props 除了可以使用基本值，还可以传入组件元素，作为参数使用。

###### 组件通信【父子组件通信】--- function Prop

> 通过为子组件传入 prop 为 function 类型，然后再子组件原生事件中，去调用 functtion-prop 方式，实现父子组件通信

#### React 生命周期

> 组件的生命周期分两类： 组件的挂载或卸载；组件的接收数据时，组件的更新。

##### 组件的挂载和卸载。

-   组件生命周期`hook` \*

## 挂载卸载[初始化]

> 此方法在整个生命周期中，只调用一次

1. componentDidMount [4]

    > 组件渲染,并插入 DOM 树后调用，如果此时存在 state 更新，会导致两次初始化渲染。

    > 应用场景：副作用调用和订阅操作，和 dom 相关的操作都可以在这里处理，同时也可以做数据接口的请求. 这里触发的`state`更新会触发`render`重新调用.

2. componentWillMount [已经被遗弃]
    > 组件渲染之前调用，即是存在 state 更新，组件更新 state， 但只渲染一次.
3. componentWillUnmount
    > componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作.无需在方法中，再做副作用或订阅操作，因为后续组件并不会渲染和挂载。
4. constructor [1]

    > 组件初始化构造, 一般在里边做 state 的赋值, 注意不能做更新 setState

    > 应用场景：（1）初始化内部 state; (2)为事件处理函数绑定实例

    > 注意：避免在此方法中，引入副作用和订阅。比如，手动调用 setState 更新 state 操作。涉及副作用和订阅操作，将放置到其他生命周期方法中处理；

    > state 的派生问题【派生于 props】, 如果组件内部 state 依赖父组件的 props, 一般不需要使用 props 重置 state。因为，state 派生 props,只在初始化时有效，如果 props 更新，则 props 并不会影响 state，换句话说，state 不会更新。如果 state 依赖 props 的更新，可以在自定义 react 组件元素上，绑定唯一`key`来强制重置 state. 或者在子组件实例方法上，重置 state。具体操作是为子组件绑定 ref，然后再父组件上调用实例方法，来更新`state`;

5. static getDerivedStateFromProps [2]
    > 初始化和更新 state， props 调用，用户获取当前得 state 和 prop
6. render [3]
    > 组件渲染时调用，用于返回渲染内容.在组件 state, props 更新时调用，触发从新渲染

## 数据流 [组件更新]

> 在组件 props 和 state 更新时调用,相关 `Hook`

1.  static getDerivedStateFromProps

    > getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。不支持实例`this`的访问. 因此也无法调用 setState 方法进行状态更新

    > 对于老的 api 是可以访问 this 进行 setState 更新的，但是不建议，因为会导致内存泄露

    > 此 api 中更新 state 是无法，触发 re-render 的。而是会进行 state 合并。并且此阶段的 state 更新，无法在 shouldComponentUpdate，getSnapshotBeforeUpdate(componentWillUpdate)，中无法获取更新后的值。只能在 render 和 componentDitUpdate 中访问更新后的值。

    > 应用场景： state 派生问题

2.  showComponentUpdate

    > 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染. 即该`hook`返回 true。

    > 当 prop 或 state 发生变化时且在渲染之前(render 之前), 该 Hook 会被立即调用。**首次渲染或使用 forceUpdate() 时不会调用该方法。**

    > 注意: 不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。

    > 应用场景： state 更新，注意在此方法中调用 setState 会导致内存溢出，如果需要做副作用和订阅操作，需要做条件判断，浅比较 prop 和 state.

    > 此 API 返回值所决定的相关 hook-api。 componentWill

3.  render
4.  getSnapshotBeforeUpdate
    > getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。
5.  componentDidUpdate

    > commit 阶段`state`或`props`更新后立即调用，此阶段也可以做`DOM`操作。

    > 应用场景: commit 阶段，props 或 state 更新后调用，此阶段也可以做 prop 或 state 比较后，做数据请求。否则如果不比较，则会导致内存溢出，或者副作用或订阅为发起。

    > 注意：如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。在此方法中更新 state，会导致组件重新渲染.

## 错误

> 当渲染过程，生命周期，或子组件构造函数抛出错误时，调用方法

1. static getDerivedStateFromError
2. componentDitCatch

## 组件实例属性

1. props
2. state

## class 属性

1. defaultProps
2. displayName

## 组件实例 APi

1. setState
2. forceUpdate

## FAQ

### state 派生

    > state 可从 props 取得数据（可理解为派生）. 这种派生也是 react 单向数据流所引发的应用场景。所以也就涉及到受控组件和非受控组件。

**应用规则**

> 常在 `getDerviedStateFromProps`[遗弃 componentWillReceiveProps 该方法只在父组件更新时调用] 中，当 props 或者 state 更新时，做数据同步。

**派生所引发的问题**

> (1)直接复制 props 到 state; props (2)和 state 不一致更新就 state

**场景复现**

> 保守使用派生 state 规则: (1) 如果只是缓存基于 props 计算的结果，可考虑使用 memoization。（2）不要频繁更新组件 state.

#### 派生所引发的 bug

> 涉及派生，就关联到 prop。而这个恰恰又和 react 组件的设计模式挂钩。即受控组件和非受控组件
