/*
 * @LastEditTime: 2022-04-07 23:16:09
 * @Description: 评论列表
 * @Date: 2022-04-06 23:37:35
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 此时的评论列表组件耦合了数据请求和业务逻辑
// 抽离数据请求到父级容器组件，剩下业务逻辑组件作为内容展示。
export default class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadding: true,
            error: null,
            value: null
        }
    }

    componentDidMount() {
        this.props
            .promise()
            .then((res) => res.json())
            .then((val) => this.setState({ loadding: false, value: val }))
            .catch((e) => this.setState({ loadding: false, error: e }))
    }

    render() {
        if (this.state.loadding) {
            return <span>Loading...</span>
        } else if (this.state.error != null) {
            return <span>Error: {this.state.error.message}</span>
        } else {
            const list = this.state.value.commentList
            return (
                <ul>
                    {list.map((v, i) => {
                        return (
                            <li key={`response-${i}`} className="comment-list">
                                <p className="item-name">{v.name}</p>
                                <p className="item-content">{v.content}</p>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }
}
