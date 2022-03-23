/*
 * @LastEditTime: 2022-03-23 23:23:47
 * @Description: Context-组件间公共状态
 * @Date: 2022-03-23 22:45:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
export default function GlobalContext() {
  return (
    <div>
      <h3>Context</h3>
      <p className="tip-error">
        在React应用中，数据都是通过props自上而下逐层传递的，
        对于某些属性，在组件逐层互传递是比较麻烦的。如果自上而上存在子父关系还好，可以通过状态提升去维护状态；而如果不存在这一层关系，而这些状态又是在程序间，组件中都需要用的，就无法应用状态提升了。这个时候，就必须要一种维护公共状态的地方。
      </p>
      <div>
        <h3 className="tip-success">应用时机</h3>
        <p className="tag">
          Context的设计目的是为了解决在组件树中共享全局状态，比如用户的登陆状态或应用主题theme,在或者是首选语言
        </p>
      </div>
    </div>
  );
}
