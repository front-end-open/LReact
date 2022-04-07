/*
 * @LastEditTime: 2022-04-08 00:14:21
 * @Description: 评论组件数据控制层
 * @Date: 2022-04-07 23:17:32
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import CommentList from './CommentList'
import PropTypes from 'prop-types'
export default class CommentListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadding: true,
            error: null,
            value: null
        }
    }

    componentDidMount() {
        // 组件完成挂载
        this.props
            .promise()
            .then((res) => res.json())
            .then((val) => this.setState({ loadding: false, value: val }))
            .catch((e) => this.setState({ loadding: false, error: e }))
    }

    render() {
        if (this.state.loadding) {
            return <span>Loadding...</span>
        } else if (this.state.error != null) {
            return <span>Error: {this.state.error.message}</span>
        } else {
            const list = this.state.value.commentList

            return <CommentList comments={list} />
        }
    }
}
CommentListContainer.propTypes = {
    promise: PropTypes.instanceOf(Function)
}
