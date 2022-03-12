/*
 * @LastEditTime: 2022-03-13 03:24:27
 * @Description: 棋盘
 * @Date: 2022-03-12 04:04:50
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// import Square from "./Square.js";
import Square from "./SquareFuncComponent.js";
// import { caculateWinner } from "../libs/hlper.js";

export default class Board extends React.Component {
  // squares结构
  // [
  // "O", null, "X",
  // "X", "X", "O",
  // "O", null, null
  // ];
  // 游戏拥有历史步骤功能，将数据保存到Game,关闭构造
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       squares: Array(9).fill(null),
  //       xIsNext: true, // 设置先手， 轮流落子状态
  //     };
  //   }

  // 添加落子逻辑
  // 受控Game，关闭handleClick
  //   handleClick(i) {
  //     let squares = this.state.squares.slice(); // 浅拷贝创建副本，因为数组中的值是PRIMITIVE-Value，所以不需要使用深拷贝了。
  //     // 当游戏结束，或者格子被填充跳过事件程序
  //     if (this.state.squares[i] && caculateWinner(squares)) return;

  //     squares[i] = this.state.xIsNext ? "X" : "O"; // 轮流落子
  //     this.setState({ squares, xIsNext: !this.state.xIsNext });
  //   }

  // 渲染Squqre
  //   renderSquare(i) {
  //     // 向棋盘格子Square传递prop-value
  //     return React.createElement(
  //       Square,
  //       {
  //         // value: i,
  //         // 向Square传递每一个游戏数据
  //         value: this.state.squares[i],
  //         onClick: () => this.handleClick(i), // on[Event]---handle[Event]
  //       },
  //       null
  //     );
  //   }
  // 受控与Game
  renderSquare(i) {
    // 向棋盘格子Square传递prop-value
    return React.createElement(
      Square,
      {
        // value: i,
        // 向Square传递每一个游戏数据
        // value: this.state.squares[i],
        value: this.props.squares[i],
        onClick: () => this.props.onClick(i), // on[Event]---handle[Event]
      },
      null
    );
  }

  render() {
    // 受控Game，关闭staus
    // let status; // 当前游戏进度信息
    // const winner = caculateWinner(this.state.squares);
    // if (winner) {
    //   status = "Winner:" + winner;
    // } else {
    //   status = "Next player:" + (this.state.xIsNext ? "X" : "O"); // 当前落子玩家
    // }
    console.log(status);
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      //   /*#__PURE__*/ React.createElement(   // 受控与Game,关闭info
      //     "div",
      //     {
      //       className: "status",
      //     },
      //     status
      //   ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "board-row",
        },
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "board-row",
        },
        this.renderSquare(3),
        this.renderSquare(4),
        this.renderSquare(5)
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "board-row",
        },
        this.renderSquare(6),
        this.renderSquare(7),
        this.renderSquare(8)
      )
    );
  }
}
