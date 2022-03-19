/*
 * @LastEditTime: 2022-03-20 02:28:31
 * @Description: 消息提示
 * @Date: 2022-03-20 02:17:55
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export default function MailBox(props) {
  return (
    <div>
      <div>
        {" "}
        {props.unreadmessage.length > 0 && (
          <h3>you haved {props.unreadmessage.length} unread</h3>
        )}
      </div>
      <div className="content">
        <ul>
          {props.unreadmessage.map((v, i) => {
            return (
              <li key={i}>
                <h5>{v.title}</h5>
                <p>{v.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
