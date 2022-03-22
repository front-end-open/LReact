import FancyBorder from "./components/FancyBorder";

/*
 * @LastEditTime: 2022-03-23 00:00:03
 * @Description: 组合
 * @Date: 2022-03-22 23:40:00
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class Combination extends React.Component {
  render() {
    return (
      <div>
        <h3 className="tag">组合-代码复用</h3>
        <p className="tip-success">
          {" "}
          React推荐使用组合方式来实习代码复用而非继承
        </p>

        <div>
          <h3 className="tip-success">包含关系</h3>
          <p className="tag">
            一些组件无法提前预知其内部状态和内容，比如Modal组件。可以通过特殊props
            -children将内容作为子组件传递
          </p>
          <p className="tip-error">
            少数情况下，可能需要在一个组件中预留出几个“洞”。这种情况下，可以不使用
            children，而是自行约定：将所需内容传入 props，并使用相应的 prop。
            {` <Contacts /> 和 <Chat /> `}之类的 React
            元素本质就是对象（object），所以你可以把它们当作
            props，像其他数据一样传递。这种方法可能使你想起别的库中“槽”（slot）的概念，但在
            React 中没有“槽”这一概念的限制，你可以将任何东西作为 props
            进行传递。
          </p>

          <div>
            <h3 className="tip-success">包换关系应用-子组件</h3>
            <div>
              <h4 className="tag">FancyBoarder</h4>
              <div>
                <FancyBorder color="red">
                  <p>Register Fanycyborder</p>
                </FancyBorder>

                <FancyBorder color="green">
                  <p>Register Fanycyborder</p>
                </FancyBorder>

                <FancyBorder color="blue">
                  <p>Register Fanycyborder</p>
                </FancyBorder>

                <FancyBorder color="pink">
                  <p>Register Fanycyborder</p>
                </FancyBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
