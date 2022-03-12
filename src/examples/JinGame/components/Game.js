/*
 * @LastEditTime: 2022-03-13 03:49:49
 * @Description: 逻辑
 * @Date: 2022-03-12 04:07:20
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Board from "./Board.js";
import { caculateWinner } from "../libs/hlper.js";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        // 游戏数据
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0, // 设置查看历史记录的序号
      xIsNext: true, // 先手
    };
  }

  // 添加落子状态
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (caculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  // 跳转指定历史记录
  // 如果我们点击游戏历史记录的任何一步，井字棋的棋盘就会立即更新为刚走那一步棋时候的样子
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = caculateWinner(current.squares);
    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    // 展现时间历史
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return React.createElement(
        "li",
        {
          key: move, // 为时间序列列表项，添加key
        },
        React.createElement(
          "button",
          {
            onClick: () => this.jumpTo(move),
          },
          desc
        )
      );
    });

    return React.createElement(
      // 需要创建的元素/组件
      "div",
      {
        // props
        className: "game",
      },
      // 子元素list
      React.createElement(
        "div",
        {
          className: "game-board",
        },
        React.createElement(
          Board,
          {
            squares: current.squares,
            onClick: (i) => this.handleClick(i),
          },
          null
        )
      ),
      React.createElement(
        "div",
        {
          className: "game-info",
        },

        React.createElement("div", null, status),
        React.createElement("ol", null, moves)
      )
    );
  }
}
