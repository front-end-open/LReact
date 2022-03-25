/*
 * @LastEditTime: 2022-03-26 01:11:52
 * @Description: 主题切换应用
 * @Date: 2022-03-26 00:45:58
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { ThemeContextFull, theme as themes } from "@/context/theme.context";
import ThemedButton from "./Theme.button";

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

export default class ThemeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContextFull.Provider value={this.state.theme}>
          {/* 这里的Toolbar内部的themeButton订阅了Provider所指向的Themecontext */}
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContextFull.Provider>
        <div>
          {/* 由于这里的ThemeButton没有订阅所以状态没有变更 */}
          <ThemedButton />
        </div>
      </div>
    );
  }
}
