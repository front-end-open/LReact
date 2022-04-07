/*
 * @LastEditTime: 2022-04-08 00:05:13
 * @Description:
 * @Date: 2022-04-06 23:31:08
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import CommentList from './Comment/CommentList'
import CommentListContainer from './Comment/CommentVersion2/CommentListContainer'
export default function Flux() {
    return (
        <div>
            <h3 className="tip-success">flux认识</h3>
            <div>
                <h3 className="tip-error">渲染评论组件</h3>
                <CommentList promise={() => fetch('/api/comment.json')} />
            </div>

            <div>
                <h3 className="tip-success"> 抽离数据请求和业务逻辑</h3>
                <CommentListContainer
                    promise={() => fetch('/api/comment.json')}
                />
            </div>
        </div>
    )
}
