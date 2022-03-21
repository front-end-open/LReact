/*
 * @LastEditTime: 2022-03-22 00:35:00
 * @Description: 文件file非受控组件
 * @Date: 2022-03-22 00:27:09
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class FileInput extends React.Component {
  constructor() {
    super();
    this.fileinput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.fileinput);
    alert("upload file is " + this.fileinput.current.files[0].name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload File:
          <input type="file" ref={this.fileinput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
