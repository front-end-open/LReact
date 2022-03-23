/*
 * @LastEditTime: 2022-03-24 01:10:58
 * @Description: Context-组件间公共状态
 * @Date: 2022-03-23 22:45:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
import { ThemeContext } from "@/context";
import Toolbar from "@/components/Button/Toolbar";
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

      <div>
        <h3 className="tip-success">
          实现一个设置按钮主题逐渐,并取代props传值方式
        </h3>
        <div>
          <h3 className="tip-success">注册Context-toolbar组件</h3>
          <p className="primary">这里主要涉及api-createContext,useContext</p>
          <div>
            <ThemeContext.Provider value={"dark"}>
              <Toolbar />
            </ThemeContext.Provider>

            <ThemeContext.Provider value={"light"}>
              <Toolbar />
            </ThemeContext.Provider>

            <p>代码示范:</p>
            <div className="tip-content">
              <code>{`<ThemeContext.Provider value={"dark"}>
              <Toolbar />
            </ThemeContext.Provider>

            <ThemeContext.Provider value={"light"}>
              <Toolbar />
            </ThemeContext.Provider>`}</code>
            </div>
          </div>
        </div>

        <p className="tip-content">
          Context主要应用场景在于不同层级的组件之间需要共享使用相同的数据，但是这会是组件的复用性
          变差
        </p>
        <p className="tip-error">
          如果你只是想避免层层传递一些属性，组件组合（component
          composition）有时候是一个比 context 更好的解决方案。
        </p>

        <div>
          <h2 className="tip-success">现在考虑一个场景</h2>
          <p>
            比如，考虑这样一个 Page 组件，它层层向下传递 user 和 avatarSize
            属性，从而深度嵌套的 Link 和 Avatar 组件可以读取到这些属性：
          </p>
          <div className="tip-content">
            <code>{`<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>`}</code>
          </div>
          <div className="tip-error">
            如果在最后只有 Avatar 组件真的需要 user 和
            avatarSize，那么层层传递这两个 props 就显得非常冗余。而且一旦 Avatar
            组件需要更多从来自顶层组件的
            props，你还得在中间层级一个一个加上去，这将会变得非常麻烦。
            <h5>
              一种无需 context 的解决方案是将 Avatar
              组件自身传递下去，因而中间组件无需知道 user 或者 avatarSize 等
              props：
            </h5>
          </div>
          <div className="tip-content">
            <code>{`function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// 现在，我们有这样的组件：
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout userLink={...} />
// ... 渲染出 ...
<NavigationBar userLink={...} />
// ... 渲染出 ...
{props.userLink}`}</code>
          </div>
          <p className="tip-success">
            这里使用组合实现解决了属性的层层传递问题。但是高层Page组件由于聚合了很多业务逻辑，使其本身变得复杂。这种情况就是子组件和父组件直接耦合在一起了。需要通过render-props解决。
            进行解耦
          </p>
          <p className="tip-success">
            有的时候在组件树中很多不同层级的组件需要访问同样的一批数据。Context
            能让你将这些数据向组件树下所有的组件进行“广播”，所有的组件都能访问到这些数据，也能访问到后续的数据更新。使用
            context 的通用的场景包括管理当前的
            locale，theme，或者一些缓存数据，这比替代方案要简单的多。
          </p>
        </div>
      </div>
      <div>
        <h3 className="primary">Context-Api</h3>
      </div>
      <div>
        <h3 className="tip-success">Render-props</h3>
      </div>
    </div>
  );
}
