/*
 * @LastEditTime: 2022-03-23 01:00:41
 * @Description: 组合
 * @Date: 2022-03-22 23:40:00
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { SignUpDialog } from "@/components";
import Modal from "@/components/Modal";
import FancyBorder from "./components/FancyBorder";
export default class Combination extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  handleOpen = () => {
    this.setState({
      visible: true,
    });
  };

  handleClose = () => {
    this.setState({
      visible: false,
    });
  };

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

            <div>
              <h3 className="tip-succeess">Modal</h3>
              <div>
                <Modal
                  title="welcome Pachverb"
                  visible={this.state.visible}
                  onClick={this.handleClose}
                >
                  <h3>那么继承呢？</h3>
                  <p>
                    在 Facebook，我们在成百上千个组件中使用
                    React。我们并没有发现需要使用继承来构建组件层次的情况。
                    Props
                    和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意
                    props，包括基本数据类型，React 元素以及函数。
                    如果你想要在组件间复用非 UI
                    的功能，我们建议将其提取为一个单独的 JavaScript
                    模块，如函数、对象或者类。组件可以直接引入（import）而无需通过
                    extend 继承它们。
                  </p>
                </Modal>
                <button onClick={this.handleOpen}>open</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="tip-success">特殊关系</h3>
          <p className="tag">
            一些公用组件，比如Dialog就是webComeDialog一般组件的上层，可以通过组合实现这些一般组件{" "}
          </p>

          <div>
            <h3 className="tip-success">注册SignDialog组件</h3>
            <p className="tag">组合组件实现一般组件</p>
            <div>
              <SignUpDialog />
            </div>
          </div>
        </div>

        <div>
          <h3 className="tip-error">继承复用</h3>
          <p className="tag">
            组件间复用非 UI 的功能，将其提取为一个单独的 JavaScript
            模块，如函数、对象或者类。组件可以直接引入（import）而无需通过
            extend 继承它们
          </p>
        </div>
      </div>
    );
  }
}
