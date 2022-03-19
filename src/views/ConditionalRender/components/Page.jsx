/*
 * @LastEditTime: 2022-03-20 02:38:32
 * @Description:
 * @Date: 2022-03-20 02:38:31
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import WarningnBanner from "./WarningBanner.jsx";
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningnBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
