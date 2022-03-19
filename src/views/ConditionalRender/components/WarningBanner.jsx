/*
 * @LastEditTime: 2022-03-20 02:39:04
 * @Description:
 * @Date: 2022-03-20 02:39:04
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}
