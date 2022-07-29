/*
 * @LastEditTime: 2022-07-30 00:49:14
 * @Description: Card组件
 * @Date: 2022-07-30 00:44:57
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 多个属性，展开运算传入所有prop
const cardWrap = {
    width: '30%',
    minHeight: '300px',
    background: '#fff',
    padding: '12px',
    borderRadius: '20px'
}
// eslint-disable-next-line react/prop-types
export const Card = ({ title, desc }) => {
    return (
        <div className="Card-wrap" style={cardWrap}>
            <h3 title={title} style={{ marginBottom: 20 + 'px' }}>
                {title}
            </h3>
            <div className="content">{desc}</div>
        </div>
    )
}
