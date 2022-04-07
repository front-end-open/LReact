/*
 * @LastEditTime: 2022-04-07 11:12:26
 * @Description: 评论列表
 * @Date: 2022-04-06 23:37:35
 * @Author: wangshan
 * @LastEditors: wangshan
 */
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
