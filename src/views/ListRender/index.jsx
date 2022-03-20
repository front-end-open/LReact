/*
 * @LastEditTime: 2022-03-20 18:54:30
 * @Description: 列表渲染
 * @Date: 2022-03-20 02:55:12
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import TodoControl from "./components/EasyTodo";

export default function ListRender() {
  return (
    <div>
      {" "}
      <h3 className="tip-success">列表渲染 && key</h3>
      <p className="tip-error">react中的列表渲染，实际接收的是一个元素列表</p>
      <div>
        <h3 className="tip-success">Key</h3>
        <p className="tip-error">列表渲染必须提供key</p>
        <code className="tag">{`[1, 2, 3, 4].map(v => <li key={v}>{v}</li> )`}</code>
        <ul>
          {[1, 2, 3, 4].map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="tip-success">列表渲染的-key使用的误区测验</h3>
        <ul>
          <li>避免使用序列索引作为key</li>
          <li>使使用uuid作为key</li>
        </ul>
        <div>
          <h3>注册TODOcontrol</h3>
          <div>
            <TodoControl />
          </div>
        </div>
        <p className="tip-error">
          如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key
          值，因为这样做会导致性能变差，还可能引起组件状态的问题
        </p>
      </div>
      <div>
        <h3 className="tip-success">
          元素的 key
          只有放在就近的数组上下文中才有意义。简单来说，在哪里map列表，再返回列表时候，就为每一项指定key.
        </h3>
      </div>
      <div>
        <h3 className="tip-success">key 值在兄弟节点之间必须唯一</h3>
        <p>列表key必须在列表兄弟节点之间保证一致，不一定全局唯一</p>
      </div>
      <div>
        <h3 className="tip-success">JSX中使用map</h3>
        <p>
          jsx中可以嵌入任何js表达式，所以在列表渲染时，完全可以将列表作为表达式，嵌入到大括号中。
        </p>
        <p className="tip-error">
          如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机。
        </p>
      </div>
    </div>
  );
}
