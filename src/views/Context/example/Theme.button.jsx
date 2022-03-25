/*
 * @LastEditTime: 2022-03-26 01:02:20
 * @Description:
 * @Date: 2022-03-26 01:02:20
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { ThemeContextFull } from "@/context/theme.context";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}
ThemedButton.contextType = ThemeContextFull;

export default ThemedButton;
