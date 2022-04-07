/*
 * @LastEditTime: 2022-04-08 00:19:47
 * @Description: 评论列表组件-抽象展示组件
 * @Date: 2022-04-07 23:34:29
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 不含数据请求处理, 仅做数据展示
import PropTypes from 'prop-types'
// checkprops
const CommentProps = {
    comments: PropTypes.array
}
export default function CommentList(props) {
    const comments = props.comments

    PropTypes.checkPropTypes(CommentProps, props, 'prop', 'CommentList')

    return (
        <ul className="comment-box">
            {comments.map((entry, i) => {
                return (
                    <li key={`response-${i}`} className="comment-item">
                        <p className="comment-item-name"> {entry.name}</p>
                        <p className="comment-item-content">{entry.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}
