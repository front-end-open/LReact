## API 部分

-   flushAsync
    > 此 API 接收一个回调参数，内部应用在数据更新时，强制刷新同步视图 DOM 渲染

代码片段:

```js
flushAsync(() => {
    setState({
        count: state.count + 1
    })
})
```
