/*
 * @LastEditTime: 2022-03-23 00:19:44
 * @Description: modal对话框
 * @Date: 2022-03-23 00:07:56
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
export default class Modal extends React.Component {
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
      <div className="window">
        <div className="modal">
          <div className="modal-title">{this.props.title}</div>
          <div className="modal-content">{this.props.children}</div>
          <div className="modal-footer">
            <button onClick={this.handleClose}>取消</button>
            <button onClick={this.handleClose}>确认</button>
          </div>
        </div>
      </div>
    );
  }
}
