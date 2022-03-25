/*
 * @LastEditTime: 2022-03-26 00:04:52
 * @Description: 高阶组件封装应用-Context
 * @Date: 2022-03-25 01:05:02
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { CaculatorContext } from "@/context/Caculator";

export default function withComponent(Component) {
  return class extends React.Component {
    render() {
      return (
        <CaculatorContext.Consumer>
          {(centext) => <Component context={centext} />}
        </CaculatorContext.Consumer>
      );
    }
  };
}
