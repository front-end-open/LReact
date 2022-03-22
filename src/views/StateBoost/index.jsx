/*
 * @LastEditTime: 2022-03-22 23:34:50
 * @Description: 状态提升
 * @Date: 2022-03-22 00:37:58
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import BoilingVerticte from "./components/BoilingVertict";
import Caculator from "./components/Caculator";
export default function StateBoost() {
  return (
    <div>
      <h3 className="tip-success">状态提升</h3>
      <p className="tag">
        多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。
      </p>

      <div>
        <h3 className="tip-success">
          设计一个温度计，并在给定维度下反馈是否达到水的沸点.
        </h3>
        <div>
          <h3 className="tip-success">测试</h3>
          <div>
            <BoilingVerticte celsius={100} />
            <BoilingVerticte celsius={90} />
          </div>
        </div>

        <div>
          <h3 className="tip-success">同步Temprature数据</h3>
          <ul>
            <li>同步两种温度的数据输入</li>
            <li>完成华氏温度和摄氏温度的转换</li>
          </ul>
        </div>

        <div>
          <div className="tag">
            在 React 中，将多个组件中需要共享的 state
            向上移动到它们的最近共同父组件中，便可实现共享
            state。这就是所谓的“状态提升”
          </div>
        </div>

        <div>
          <h3 className="tip-success">注册Caculator</h3>
          <div>
            <Caculator />
            <p>这里采用</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="tip-success">组件设计和状态管理</h3>
        <ul>
          <li>
            任何可变数据应当只有一个相对应的唯一“数据源”。通常，state
            都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个
            state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠[自上而下的数据流](https://react.docschina.org/docs/state-and-lifecycle.html#the-data-flows-down)，而不是尝试在不同组件间同步
            state。
          </li>
          <li>
            虽然提升 state
            方式比双向绑定方式需要编写更多的“样板”代码，但带来的好处是，排查和隔离
            bug 所需的工作量将会变少。由于“存在”于组件中的任何
            state，仅有组件自己能够修改它，因此 bug
            的排查范围被大大缩减了。此外，你也可以使用自定义逻辑来拒绝或转换用户的输入。
          </li>
          <li>
            如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于
            state 中
          </li>
          <li>
            当你在 UI 中发现错误时，可以使用 [React
            开发者工具](https://github.com/facebook/react/tree/master/packages/react-devtools)
            来检查问题组件的
            props，并且按照组件树结构逐级向上搜寻，直到定位到负责更新 state
            的那个组件。这使得你能够追踪到产生 bug 的源头
          </li>
        </ul>
      </div>
    </div>
  );
}
