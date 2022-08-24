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
6. component
