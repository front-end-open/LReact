/*
 * @LastEditTime: 2022-03-23 00:32:47
 * @Description: modal对话框
 * @Date: 2022-03-23 00:07:56
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
export default function Modal(props) {
  let visible = props.visible;
  return visible ? (
    <div className="window">
      <div className="modal">
        <div className="modal-title">{props.title}</div>
        <div className="modal-content">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClick}>取消</button>
          <button onClick={props.onClick}>确认</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
