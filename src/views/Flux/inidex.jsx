/*
 * @LastEditTime: 2022-04-07 10:52:14
 * @Description:
 * @Date: 2022-04-06 23:31:08
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import CommentList from './Comment/CommentList'
export default function Flux() {
    return (
        <div>
            <h3 className="tip-success">flux认识</h3>
            <div>
                <h3 className="tip-error">渲染评论组件</h3>
                <CommentList promise={() => fetch('/api/comment.json')} />
            </div>
        </div>
    )
}
