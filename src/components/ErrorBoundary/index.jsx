/*
 * @LastEditTime: 2022-03-27 19:38:32
 * @Description: 错误边界捕获
 * @Date: 2022-03-27 19:37:23
 * @Author: wangshan
 * @LastEditors: wangshan
 */

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        // 错误信息记录
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path 备用UI渲染，并显示日志
            return (
                <div>
                    <h2>错误:</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        // Normally, just render children
        return this.props.children
    }
}
