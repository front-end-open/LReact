/*
 * @LastEditTime: 2022-03-26 00:43:51
 * @Description: 一般组件-工具主题按钮
 * @Date: 2022-03-23 23:42:28
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import Button from "./index";
import ThemeButton from "./ThemeButton";
export default function Toolbar(props) {
  return (
    <div>
      <ThemeButton>
        <Button innerText="切换主题" onClick={props.checkoutTheme}></Button>
      </ThemeButton>
    </div>
  );
}

/**
 *   这里的theme完全是通过props传递
 *   通过props传递实现toolbar方式
 *   class App extends React.Component {
 *       render() {
 *           return <Toolbar theme="dark" />;
 *       }
 *   }
 *
 *   function Toolbar(props) {
 *   Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
 *   如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
 *   因为必须将这个值层层传递所有组件。
 *   return (
 *       <div>
 *         <ThemedButton theme={props.theme} />
 *       </div>
 *   );
 *   }
 *
 *   class ThemedButton extends React.Component {
 *       render() {
 *           return <Button theme={this.props.theme} />;
 *       }
 *   }
 */
