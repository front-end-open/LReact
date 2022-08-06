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

####
