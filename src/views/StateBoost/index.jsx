/*
 * @LastEditTime: 2022-03-22 00:59:18
 * @Description: 状态提升
 * @Date: 2022-03-22 00:37:58
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import BoilingVerticte from "./components/BoilingVertict";
export default function StateBoost() {
  return (
    <div>
      <h3 className="tip-success">状态提升</h3>
      <p className="tag">
        多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。
      </p>

      <div>
        <h3 className="tip-success">
          设计一个温度计，并在给定维度下反馈是否达到水的沸点.
        </h3>
        <div>
          <h3 className="tip-success">测试</h3>
          <div>
            <BoilingVerticte celsius={100} />
            <BoilingVerticte celsius={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
