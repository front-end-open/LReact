/*
 * @LastEditTime: 2022-03-19 02:58:29
 * @Description:
 * @Date: 2022-03-17 00:35:02
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./common.scss";
export default function () {
  return (
    <div className="container">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to <a href="#1">go back</a> or{" "}
          <a href="#2">return to the homepage</a>.
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  );
}
