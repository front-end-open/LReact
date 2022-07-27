/*
 * @LastEditTime: 2022-07-28 00:19:26
 * @Description: jsx-dom
 * @Date: 2022-07-27 22:38:32
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// react使用virtual-dom做页面绘制，开发环境下采用jsx更放标做标记描述.
// react也很方便和其他平台集成，react组件可以映射出对应的原生控件, 由于基于virtual-dom。在输出的时候，是输出web-dom，还是控件，或者IOS控件完全取决于平台本身。
/**
 *  1. 为方便view层的组件化, react承载了构建html结构化页面职责. react和其他模板引擎是异曲同工之妙。不同的是，react是通过创建和更新虚拟元素(vritual-element)来管理整个virtual-DOM的
 *  2. 虚拟元素（virtual-element）可以理解为真是元素的对应，其构建和更新都是再内存中完成，并不会渲染到真是的dom中去。
 *  3. react中虚拟元素分： DOM元素和组件元素, 分别对应原生DOM元素和自定义元素, jsx与创建元素过程存在直接关联。
 *
 */
export default function JSXDom() {
    return (
        <>
            <div className="primary">
                <h1>jsx中的基本语法</h1>
            </div>
            <div className="tip-content">
                <h2># 注释</h2>
                <p className="tip-success">
                    jsx中注释，由于本省任然作用js环境，在注释使用上还是桶js中一样。需要注意的是，如果实在jsx结构中，
                    如果在子元素位置使用注释需要使用{}包括起来
                </p>
            </div>
        </>
    )
}
