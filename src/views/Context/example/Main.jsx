/*
 * @LastEditTime: 2022-03-26 01:53:55
 * @Description: 渲染版本，订阅Context
 * @Date: 2022-03-26 01:21:11
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { ThemerInner, theme } from "@/context/theme.context";
function TogglerThemeButton(props) {
  return (
    <ThemerInner.Consumer>
      {({ theme, togglertheme }) => {
        return <button onClick={togglertheme}> 切换主题</button>;
      }}
    </ThemerInner.Consumer>
  );
}

export class ThemeInnerApp extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: theme.dark,
      togglertheme: this.togglertheme,
    };
  }
  togglertheme = () => {
    console.log(this.state);
    this.setState((state) => {
      return {
        theme: state.theme === theme.dark ? theme.light : theme.dark,
      };
    });
  };

  render() {
    return (
      <div>
        <ThemerInner.Provider value={this.state}>
          <TogglerThemeButton></TogglerThemeButton>
        </ThemerInner.Provider>
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid red",
            background: this.state.theme.background,
          }}
        ></div>
      </div>
    );
  }
}

ThemeInnerApp.contextType = ThemerInner;
