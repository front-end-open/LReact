/*
 * @LastEditTime: 2022-05-11 00:37:02
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
        </div>
    )
}
