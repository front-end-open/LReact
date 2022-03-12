/*
 * @LastEditTime: 2022-03-13 02:50:44
 * @Description:
 * @Date: 2022-03-13 02:46:10
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 * @description 计算胜出玩家
 * @param {Array} squares 游戏数据
 */
export function caculateWinner(squares) {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
