## 总览

> react 事件定义方式，是基于合成事件来定义的。事件对象本身就是一个包装后的合成事件对象，会作为事件处理器对个参数传入进来。而 Virtual-Dom 又是在内存中又是以对象的形式存在的，所以定义事件的非常简单。

> 合成事件完全根据 W3C 标准来制定，因此无需考虑浏览器兼容性.

> SyntheticEvent 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。

#### 合成事件对象[SyntheticEvent]

> 公共属性/方法

| 属性/方法名            |  类型/可选值   | 描述                                                                              | 应用                   |
| ---------------------- | :------------: | --------------------------------------------------------------------------------- | ---------------------- |
| bubbles                |    boolean/    | zzzz                                                                              | xxxx                   |
| cancelable             |    boolean     | xxxx                                                                              | xxxx                   |
| currentTarget          | DOMEventTarget | 事件触发对象                                                                      | 获取当前触发事件的节点 |
| defaultPrevented       |    boolean     | xxxx                                                                              | xxxx                   |
| eventPhase             |     number     | xxxx                                                                              | xxxx                   |
| isTrusted              |    boolean     | xxxx                                                                              | xxxx                   |
| nativeEvent            |    DOMEvent    | 由于 react 将所有事件都自定绑定到了合成事件对象上, 可用此属性用于获取原生事件对象 | xxxx                   |
| preventDefault()       |      void      | xxxx                                                                              | xxxx                   |
| isDefaultPrevented()   |    boolean     | xxxx                                                                              | xxxx                   |
| stopPropagation()      |      void      | xxxx                                                                              | xxxx                   |
| isPropagationStopped() |    boolean     | xxxx                                                                              | xxxx                   |
| persist()              |      void      | xxxx                                                                              | xxxx                   |
| target                 | DOMEventTarget | xxxx                                                                              | xxxx                   |
| timeStamp              |     number     | xxxx                                                                              | xxxx                   |
| type                   |     string     | xxxx                                                                              | xxxx                   |

#### 合成事件绑定方式

1. 驼峰命名方式，传入 DOM 属性方式，传入事件名字
2. js 表达式形式传入属性值. DOM 原生事件绑定方式中，需要传入字符串.

#### 合成事件的实现机制

> reat 中，对象合成事件是实现：事件委派和自动绑定

**事件委派**

> react 不会把事件处理器函数直接绑定到真是节点上，而是把所有事件绑定到结构的最外层。使用统一的事件监听器，来调度最终的真实的事件监听器。

#### 事件机制原理

参考：
[合成事件机制](https://segmentfault.com/a/1190000039108951###)

#### react 原生事件的使用

> 在 react 指定生命周期内，可以直接操作 DOM 阶段，使用`addEventListener`API 即可完成原生事件的绑定。注意需要在组件卸载阶段完成事件移除。否则会导致内存溢出.

## 合称事件与原生事件

> 合称事件对象基于 w3c 标准`DOM level 的接口实现

#### 事件传播与阻止

> 浏览器原生事件传播分三个阶段

1. 事件捕获

2. 目标对象本身的事件处理程序调用

3. 事件冒泡

流程描述: 当 dom 事件触发时，进入事件捕获阶段，该阶段优先调用结构树外层 handler, 然后一次向内调用，直到找到目标元素上的事件 handler. 可以显示为`addEventListener`API 传入第三个事件触发阶段参数，为元素注册捕获事件处理程序，并在事件传播的第一阶段调用。事件冒泡程序则相反，他是从目标元素处，向外传播事件。

> 阻止事件传播可以通过， `e.stopPropagation()`

#### 事件类型

> React 合称事件类型只是原生事件类型的子集,并且合称事件处理了浏览器兼容问题

#### 事件绑定

1. 直接在 html 中，通过元素属性的方式绑定
2. 通过 document 的 api，来操作元素属性赋值方式
3. 通过事件监听函数来是实现