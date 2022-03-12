/*
 * @LastEditTime: 2022-03-13 03:52:38
 * @Description: Squre函数式组件创建
 * @Date: 2022-03-13 02:07:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
/**
 * @param {props} props
 */
export default function Square(props) {
  let isAdd = false;

  return React.createElement(
    "button",
    {
      className: "square",
      onClick: () => {
        if (!isAdd) {
          isAdd = true;
          props.onClick();
        } else {
          console.log("棋子以落下");
        }
      }, // 调用父级落子方法，更新Square格子内的值
    },
    props.value
  );
}
