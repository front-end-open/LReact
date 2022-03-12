/*
 * @LastEditTime: 2022-03-13 01:44:20
 * @Description: 边缘
 * @Date: 2022-03-12 04:04:44
 * @Author: wangshan
 * @LastEditors: wangshan
 */
console.log(React);

export default class Square extends React.Component {
  // 添加状态，记录当前格子的落子状态
  constructor(props) {
    super(props);

    // 状态提升后，子组件不需要再维护状态，所以可以关闭state
    this.state = {
      isAdd: false, // 落子状态
    };
  }

  // 由于Board接手游戏state后，现在关闭addPieceX
  //   addPieceX() {
  //     // console.log("add X");
  //     // 更新棋子内容
  //     // let isAdd = false;   // 高阶函数，记录格子点击状态，第二次检查无效。
  //     return () => {
  //       if (!this.isAdd) {
  //         this.isAdd = true;
  //         this.setState({ value: "X" }, (e) => {});
  //       } else {
  //         console.log("棋子已经添加");
  //       }
  //     };
  //   }

  render() {
    // todo: add jsx:--> return <button className="square">{/* TODO */}</button>;
    return React.createElement(
      "button",
      {
        className: "square",
        onClick: () => {
          if (!this.state.isAdd) {
            this.setState({ isAdd: true });
            this.props.onClick();
          } else {
            console.log("棋子以落下");
          }
        }, // 调用父级落子方法，更新Square格子内的值
      },
      // 访问父组件Board传递的prop-value
      this.props.value
      // 替换prop-value，使用状态更新squqre内容
      //   this.state.value
    );
  }
}
