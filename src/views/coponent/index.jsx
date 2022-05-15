/*
 * @LastEditTime: 2022-05-14 16:43:30
 * @Description: 组件深入
 * @Date: 2022-05-10 23:45:19
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function Copnent() {
    return (
        <div>
            <h3>组件深入</h3>
            <div>
                <div>
                    <h4 className="primary">1. 狭义上的组件，又称之为UI组件</h4>
                    <p className="tip-content">
                        狭义上的组件称之为交互类相关的组件，主要处理用户交互相关
                    </p>
                    <h4>2. 广义上的是包含业务和UI渲染两部分的组件统称</h4>
                    <p className="tip-content">
                        这类组价包含业务逻辑和数据的UI组合，不仅处理界面交互，还涉及数据和界面的交互。管理这类组件采用分层思想。
                    </p>
                </div>

                <div>
                    <h4 className="primary">组件的解耦</h4>
                    <p className="tip-content">
                        传统组件包括三部分：结构，行为，样式.在富应用出现之前，这种组件一直是一个弊端。即三者没有很好结合，导致结构和行为高度耦合，这类表现在对dom操作的高度依赖，对表层层的class各种字符拼接。
                        导致后期维护和扩展成本变得很高。而后富客户端出现，出现了MVC架构，即各种模板引擎的实现。这类模板也很好切合了传统组件，并在结构层中承担了一定的逻辑，将DOM的操作和数据关联一定程度的解耦，但这种实现还仅仅是在字符拼接界别的组件化。
                    </p>
                </div>

                <div>
                    <h4>Web Component</h4>
                    <ul>
                        <li>HMLT-template</li>
                        <li>Custom-Elements</li>
                        <li>Shadow-DOM</li>
                        <li>HTML-Imports</li>
                    </ul>
                </div>

                <div>
                    <h3>React组件的构建与Web-component</h3>
                    <ul>
                        <li>
                            1. React自定义元素是库自己构建的,
                            与web-Component标准不通用(Custom-element)
                        </li>
                        <li>2. react渲染过程包含模板:JSX(HMTML-template)</li>
                        <li>
                            3.react组件的实现在方法和类中，可以做到相互隔离，不包括样式
                        </li>
                        <li>4. React应用方式遵循ES6模块方案</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="primary">组件创建和拆分原则</h3>
                <ul className="tip-content">
                    <li>早期版本构建组件实例使用-React.createClass</li>
                    <li>Es6 class 继承Compoent创建组件</li>
                    <li>Es6 class继承React.Compoent</li>
                </ul>
                <p className="tip-error">
                    React所有组件继承自顶层组件React.Component
                    。该组件内部定义了组件基本的props，context,refs等。
                    并在原型上定义了setState,和forceUpdate方法。内部的声明周期与createClass使用同一个方法创建.
                </p>
            </div>
            <div>
                <h3>React数据流</h3>
                <p className="tip-content">
                    react通过组件作为应用划分粒度。数据自顶向下单向流动。 ji
                    即父组件到子组件。state和props作为数据使用的标志，其中state作为组件内部的状态，不作为外部使用。把组件作为一个函数看待，其中state作为函数内部状态，其中的props作为函数参数传递。最终函数jsx作为virtual-Dom.
                </p>

                <h4>* state</h4>

                <p>
                    在react之前，一些MVC框架也容易实现界面交互的状态管理。鲜明特点就是这写MVC架构很好的将
                    View与界面交互的状态解耦，一般将状态放在Model中管理。而react组件可以使用state,作为组件内部状态是没有将交互数据和view解耦的，这是在没有结合flux和redux之前的情况，把这类状态统称为state.
                </p>
                <p className="tip-error">
                    组件内部使用setState方法，最大表现就是组件会尝试从新渲染组件。
                </p>
            </div>
        </div>
    )
}
