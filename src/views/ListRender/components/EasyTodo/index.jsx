/*
 * @LastEditTime: 2022-03-20 18:42:58
 * @Description: TODOControl
 * @Date: 2022-03-20 14:29:30
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Item from "./Item";
export default class TodoControl extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: "1647770095002",
          name: "find a new girlfried",
        },
        {
          id: "1647770095003",
          name: "find a new manfriend",
        },
      ],
    };
  }

  handleRemoveClick = (id) => {
    console.log(id);
    let todos = this.state.todos;
    let resttodos = todos.filter((v) => {
      if (v.id != id) {
        return true;
      }
    });
    console.log(resttodos);
    this.setState({
      todos: resttodos,
    });
  };

  handleAddTodo = () => {
    let ipt = document.getElementById("ipt");
    let id = +new Date();
    this.setState({
      todos: [{ name: ipt.value, id }, ...this.state.todos],
    });
  };

  handleRedset = () => {
    console.log("reset");
    this.setState({
      todos: [
        {
          id: +new Date() + 1,
          name: "find a new girlfried",
        },
        {
          id: +new Date() + 2,
          name: "find a new manfriend",
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <div>
          <input id="ipt" type="add some todo things" />
          <button onClick={this.handleAddTodo}>add todo</button>
          <button onClick={this.handleRedset}>reset</button>
        </div>
        <ul className="item-container">
          {this.state.todos.map((v, i) => {
            return (
              <Item
                key={v.id}
                todo={v}
                idx={i}
                onClick={() => this.handleRemoveClick(v.id)}
              ></Item>
            );
          })}
        </ul>
      </div>
    );
  }
}
