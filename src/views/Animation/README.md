## 动画

两种动画类型:

> 根据缓动函数的实现方式来定义

1. css 动画
2. js 动画

### React-transition 设计与用法

> 界面的变化无疑是组件节点的增加，删除，修改和属性的变化。而 react-transition 可更好的识别节点的添加和删除。

> React-transition 关联工具： React-css-transition

**React-transition 监听节点变化方式**

> 监听子组件的生命周期函数，当 React-transition 监听到子组件的添加和删除时,然后调用对应生命周期函数即可

**相关生命周期**

1. componentWillAppear
2. componentDidAppear
3. componentWillEnter
4. componentDitEnter
5. componentWillLeave
6. componentDidLeave

### Transtion API 使用

> 使用状态: `entering`, `entered`, `exiting`, `exited`

**prop**

-   `in` [type boolean], 用来开启 Transition 组件的过渡状态. 组件的过渡状态切换通过 in 来进行切换。
    > 当 `in == true`，组件进入`Enter`阶段，在这个状态期间，组件将从当前的过渡状态转移到过渡期间的`entering`阶段，然后在完成后转移到`entered`阶段。
-   `children` [type func | element]: 可以使用`function child` 代替 React 元素。 使用当前转换状态（'entering'，'entered'，'exiting'，'exited'）调用此函数(此函数接收当前组件的过渡状态)，可用于将上下文特定的道具应用于组件。

-   `mountOnEnter`: [type bool] 默认情况下子组件和父组件`transition`是一同挂载的。如果想延迟挂载组件可以在第一次进入过渡状态，即`in={true}`时，设置`mountOnEnter`。在第一次进入转换之后，组件将保持挂载，即使在“退出”时，除非您还指定 unmountOnExit。

-   `unmountOnExit`: [type bool] 默认情况下，子组件在达到“退出”状态后保持挂载。 如果您希望在组件退出后卸载组件，请设置 `unmountOnExit`
-   `appear`: [type bool] 默认情况下，无论 in 的值如何，子组件在首次挂载时都不会执行 enter 转换。如果您想要这种行为，请将两者都设置为 true。

> 注意： 没有`appearing`,`appeared`这样的 props，这个道具只增加了一个额外的进入过渡。 但是，在 <CSSTransition> 组件中，第一次进入过渡确实会产生额外的 .appear-\* 类，这样就可以选择不同的样式。

-   `enter` [type bool]: 启用或禁用进入过渡状态

-   `exit` [type bool]: 启用或禁用退出过渡状态

-   `timeout` [type number | {enter?: number, exit?: number, appear?: number}]: 过渡的持续时间，以毫秒为单位。 除非提供了 addEndListener，否则是必需的。

-   `addEndListener` [type func]: 添加自定义转换结束触发器。 使用过渡 DOM 节点和完成回调调用。 允许更细粒度的转换结束逻辑。 如果提供`timeout`仍用作后备。

```js
addEndListener={(node, done) => {
  // use the css transitionend event to mark the finish of a transition
  node.addEventListener('transitionend', done, false);
}}
```

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onEnter` [type Function(node: HtmlElement, isAppearing: bool) -> void]: 在应用`entering`状态之前触发回调。 提供了一个额外的参数 `isAppearing` 来指示`enter`阶段是否发生在初始挂载上

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onEntering` [type Function(node: HtmlElement, isAppearing: bool)]: 在应用`entering`状态之后触发回调。 提供了一个额外的参数 `isAppearing` 来指示`enter`阶段是否发生在初始挂载上

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onEntered` [type Function(node: HtmlElement, isAppearing: bool) -> void]: 应用`entered`状态后触发的回调。 提供了一个额外的参数 isAppearing 来指示进入阶段是否发生在初始挂载上

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onExit` [type Function(node: HtmlElement) -> void]: 在应用`exiting`状态之前触发回调。

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onExiting`:[type Function(node: HtmlElement) -> void]: 在应用`exiting`状态之后触发回调

> 注意： 传递 nodeRef 属性时，不传递 node。

-   `onExited` [type Function(node: HtmlElement) -> void] :应用`exited`状态后触发的回调。

> 注意： 传递 nodeRef 属性时，不传递 node。

### Css Transition

> React Css Transition 为子组件每个生命周期添加了不同的`className`。这样用户可以很方便的根据 className 变化实现动画.

> React-transition 对 css 动画专门做了封装处理. CSSTransition 在过渡的`appear`、`enter`和`exit`状态期间应用一对类名。 应用第一个类，然后应用第二个 `_-active` 类以激活 CSS 过渡。 转换之后，匹配的 `\_-done` 类名被应用以保持转换状态。

> 当 in 属性设置为 true 时，子组件将首先接收类 example-enter，然后在下一个 tick 中添加 example-enter-active。 CSSTransition 在添加 example-enter-active 之前强制进行重排。 这是一个重要的技巧，因为它允许我们在 example-enter 和 example-enter-active 之间转换，即使它们是一个接一个地立即添加的。 最值得注意的是，这使我们可以为外观设置动画。

> _-active 类表示您想要动画到哪些样式，因此仅向它们添加转换声明很重要，否则转换可能不会按预期运行！ 当转换是对称的时，这可能并不明显，即当 _-enter-active 与 \*-exit 相同时，如上面的示例（减去转换），但在更复杂的转换中变得明显。

> 注意: 如果使用`appear`道具，确保为 `.appear-\*` 类定义样式。

**Props**

-   `classNames` [type: string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }]

> 使用 string 时: 组件会自动为每个阶段添加相应后缀(appear, enter, exit)

```js
// classNames={'fade'}

// 应用结果
fade - appear, fade - appear - active, fade - appear - done
fade - enter, fade - enter - active, fade - enter - done
fade - exit, fade - exit - active, fade - exit - done
```

> 关于如何应用这些类的一些细节需要注意

1. 它们与子组件上已经定义的样式连接在一起，所以如果你想添加一些基本样式，你可以使用 className 而不必担心它会被覆盖。
2. 如果转换组件以 in={false} 挂载，则尚未应用任何类。 您可能期待 \*-exit-done，但如果您考虑一下，如果组件尚未进入，它就无法完成退出。
3. fade-appear-done 和 fade-enter-done 都将被应用。 这允许您使用 .fade-enter-done:not(.fade-appear-done) 之类的选择器定义出现完成时和常规输入完成时的不同行为。 例如，您可以使用 Animate.css 在元素首次出现在 DOM 时应用史诗般的入口动画。 否则，您可以简单地使用 fade-enter-done 来定义这两种情况。
4. 每个单独的 classNames 也可以独立指定

```js
classNames={{
 appear: 'my-appear',
 appearActive: 'my-active-appear',
 appearDone: 'my-done-appear',
 enter: 'my-enter',
 enterActive: 'my-active-enter',
 enterDone: 'my-done-enter',
 exit: 'my-exit',
 exitActive: 'my-active-exit',
 exitDone: 'my-done-exit',
}}
```

-   `onEnter`: 在应用 'enter' 或 'appear' 类后立即触发 <Transition> 回调。
-   `onEntering`: 在应用 'enter-active' 或 'appear-active' 类后立即触发 <Transition> 回调。
-   `onEntered`: <Transition> 回调在 'enter' 或 'appear' 类被移除并将 done 类添加到 DOM 节点后立即触发。
-   `onExit`: 在应用 'exit' 类后立即触发 <Transition> 回调。
-   `onExiting`: 在应用 'exit-active' 后立即触发 <Transition> 回调。
-   `onExited`: 在移除 'exit' 类并将 exit-done 类添加到 DOM 节点后立即触发 <Transition> 回调。
