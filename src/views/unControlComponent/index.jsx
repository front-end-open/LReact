/*
 * @LastEditTime: 2022-03-22 00:32:02
 * @Description: 非受控组件
 * @Date: 2022-03-21 23:26:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import NameForm from "./components/NameForm";
import FileInput from "./components/FileInput";
export default class UnControlComponent extends React.Component {
  constructor() {
    super();
    this.formref = React.createRef();
  }

  componentDidMount() {
    console.log(this.formref);
  }

  render() {
    return (
      <div>
        <h3 className="tip-success">非受控组件</h3>
        <p className="tag">
          非受控组件其状态由DDM管理；受控组件有React管理。编写非受控组件，使用ref来获取表单的数据
        </p>

        <div>
          <h3 className="tip-success">注册非受控组件-NameForm</h3>
          <div>
            <NameForm ref={this.formref} />
          </div>
          <p className="tip-error">
            因为非受控组件将真实数据储存在 DOM
            节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非
            React
            代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。
          </p>
          <p className="tip-error">
            业务代码中：关于受控组件form与非受控组件form的选择参考：
            <a
              href="https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/"
              target="_blank"
            >
              受控与非受控组件form 实践选择
            </a>
          </p>
        </div>
        <div>
          <h3 className="tip-success">非受控组件默认值指定</h3>
          <p>
            由于非受控组件的value是和DOM绑定的，在React组件生命周期渲染时，表单元素上的value将会覆盖DOM节点中的值。在非受控组件中，你经常希望
            React
            能赋予组件一个初始值，但是不去控制后续的更新。可以使用表单元素的defaultValue,
            defaultChecked等默认属性值指定表单元素的默认值。
          </p>
          <div>
            <NameForm />
            <p>使用defaultValue: 指定受控组件默认值</p>
          </div>
        </div>
        <div>
          <h3 className="tip-success">文件传输-非受控组件使用</h3>
          <p className="tag">
            在 React 中，
            {` <input type="file" />`}
            始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制
          </p>
          <div>
            <h3 className="tip-success">file-非受控组件使用</h3>
            <p className="tag">
              文件数据通过ref设置获取，后续的文件交互，使用File Api
            </p>
            <div>
              <h3 className="primary">注册文件file表单</h3>
              <div>
                <FileInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
