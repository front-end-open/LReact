/*
 * @LastEditTime: 2022-03-26 01:37:32
 * @Description: Context-组件间公共状态
 * @Date: 2022-03-23 22:45:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
import { ThemeContext } from "@/context";
import Toolbar from "@/components/Button/Toolbar";
import SayHello from "./components/SayHello";
import { MessageContext } from "@/context/MessageContext";
import CaculatorControl from "./components/CaculatorControl";

import CommonCaculator from "./components/commonCaculator";
import { CaculatorContext } from "@/context/Caculator";
import withComponent from "./components/withCaculator";
import ThemeApp from "./example/themControl";
import { ThemeInnerApp } from "./example/Main";
let CommonCaculators = withComponent(CommonCaculator);

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
        <div>
          <h4 className="tip-content">React.createContext</h4>
          <div>
            <p className="tip-error">
              const MyContext = React.createContext(defaultValue); // 默认值
            </p>
            <p className="tip-content">
              创建一个 Context 对象。当 React 渲染一个订阅了这个 Context
              对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider
              中读取到当前的 context 值。只有当组件所处的树中没有匹配到 Provider
              时，其 defaultValue 参数才会生效。这有助于在不使用 Provider
              包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider
              的 value 时，消费组件的 defaultValue 不会生效。
            </p>
          </div>

          <div className="tip-success">
            <h3>createContenxt-api使用</h3>

            <div>
              <h3>注册SayHello组件</h3>
              <div>
                <SayHello />
              </div>
              <p className="tip-error">
                由于SayHello不包含Provider,最终的结果就是SayHello组件对Context状态引用的就是默认值。即创建Context时，指定的默认值参。
              </p>
              <div>
                <h3>现在使用为SayHello提供Provider，并提供vlaue</h3>
                <div>
                  {/* 传递undefined不生效 */}
                  <MessageContext.Provider value={{}}>
                    <SayHello></SayHello>
                  </MessageContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="primary">Context.Provider</h3>
        <div>
          <p className="tip-error">{`<MyContext.Provider value={/* 某个值 */}>`}</p>

          <p className="tip-content">
            {" "}
            每个 Context 对象都会返回一个 Provider React
            组件，它允许消费组件订阅 context 的变化。
          </p>
          <p className="tip-content">
            Provider 接收一个 value 属性，传递给消费组件。一个 Provider
            可以和多个消费组件有对应关系。多个 Provider
            也可以嵌套使用，里层的会覆盖外层的数据。{" "}
          </p>
          <p className="tip-content">
            {" "}
            当 Provider 的 value
            值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部
            consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer
            组件在其祖先组件退出更新的情况下也能更新。
          </p>
          <p className="tip-error">
            通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。
          </p>
          <p className="tip-error">
            当传递对象给 value 时，检测变化的方式会导致一些问题：详见注意事项。{" "}
          </p>

          <div>
            <h3 className="tip-success">使用Provider</h3>

            <div>
              <MessageContext.Provider value={{ content: "outContext" }}>
                <MessageContext.Provider
                  value={{
                    forMan: "test",
                    content: "多个Provider嵌套使用-innerContext",
                    date: new Date().toLocaleDateString(),
                  }}
                >
                  <SayHello />
                </MessageContext.Provider>
              </MessageContext.Provider>
            </div>
          </div>

          <div className="primary">
            <p className="tip-error">
              因为 context 会使用参考标识（reference
              identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider
              的父组件进行重渲染时，可能会在 consumers
              组件中触发意外的渲染。举个例子，当每一次 Provider
              重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 value
              属性总是被赋值为新的对象
            </p>
            <div className="tip-content">
              <code>
                {" "}
                {`class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}`}
              </code>
            </div>

            <p className="tip-success">
              为了防止这种情况，将 value 状态提升到父节点的 state 里：
            </p>

            <div className="tip-content">
              <code>{`class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}`}</code>
            </div>

            <div>
              <h3 className="测试上面的Context变化所导致的视图变化情况"></h3>
              <div>
                <h3 className="tip-success"> 注册Caculator</h3>
                <div>
                  <CaculatorControl />
                </div>
              </div>
            </div>
            <p>
              经过测试如果为Provider的value提供对象字面量，即是将字面量保存provider父组件，仍然会重新渲染
            </p>
          </div>
        </div>

        <h3 className="tip-success">Class.contextType</h3>
        <div>
          <div className="tip-content">
            <code>{`class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;`}</code>
          </div>
          <p className="tip-error">
            {" "}
            挂载在 class 上的 contextType 属性可以赋值为由 React.createContext()
            创建的 Context 对象。此属性可以让你使用 this.context 来获取最近
            Context 上的值。你可以在任何生命周期中访问到它，包括 render 函数中。
          </p>
          <p className="tip-success">
            只通过该 API 订阅单一 context。订阅多个，阅读使用多个 Context 章节
            使用实验性的 public class fields 语法，你可以使用 static
            这个类属性来初始化你的 contextType。
          </p>
          <div className="tip-content">
            <code>{`class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
`}</code>
          </div>

          <h3 className="tip-success">Context.Consumer</h3>
          <div className="tip-content">
            <code>{`<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>`}</code>
          </div>
          <p className="tip-error">
            一个 React 组件可以订阅 context
            的变更，此组件可以让你在函数式组件中可以订阅 context。
          </p>
          <p className="tip-success">
            这种方法需要一个函数作为子元素（function as a
            child）。这个函数接收当前的 context 值，并返回一个 React
            节点。传递给函数的 value 值等价于组件树上方离这个 context 最近的
            Provider 提供的 value 值。如果没有对应的 Provider，value
            参数等同于传递给 createContext() 的 defaultValue。
          </p>

          <div>
            <h3 className="tip-success">
              这里使用render-props,适用于函数式组件作为订阅context的方式
            </h3>
          </div>

          <h3>注册CommonCaculator</h3>
          <div>
            {/* 高阶组件render-props */}
            <CaculatorContext.Provider value={{ a: 1, b: 1 }}>
              <CommonCaculators />
            </CaculatorContext.Provider>
          </div>
        </div>

        <h3 className="tip-success">Context.displayName</h3>
        <p className="primary">
          context 对象接受一个名为 displayName 的 property，类型为字符串。React
          DevTools 使用该字符串来确定 context 要显示的内容。
        </p>

        <p>下述组件在 DevTools 中将显示为 MyDisplayName：</p>
        <div className="tip-content">
          <code>
            {`const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中`}
          </code>
        </div>
      </div>
      <div>
        <h3 className="tip-success">Render props-函数作为子元素</h3>{" "}
      </div>
      <div>
        <h3 className="tip-success">Render-props</h3>
        <p className="primary">
          主要用于复用组件代码，对于需要共同state的一批组件；区别组合，组合式避免需要层层传递props的情况
        </p>
      </div>

      <div>
        <h3 className="tip-success">Context使用案列-实现主题切换</h3>
        <div>
          <h3 className="primary">注册使用主题切换控件</h3>
          <div>
            <ThemeApp />
          </div>
        </div>

        <div>
          <h3 className="tip-success">内部更新Context</h3>
          <div>
            <ThemeInnerApp />
          </div>
        </div>
      </div>
    </div>
  );
}
