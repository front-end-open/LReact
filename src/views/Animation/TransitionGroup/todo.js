/*
 * @LastEditTime: 2022-08-27 19:45:44
 * @Description: todoList
 * @Date: 2022-08-27 18:55:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import PropTypes from 'prop-types'

function TodoList({ children }) {
    return <div className="tip-content">{children}</div>
}

TodoList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

function TodoItem({ children }) {
    return (
        <div className="tip-success" style={{ marginBottom: '8px' }}>
            {children}
        </div>
    )
}

TodoItem.propTypes = {
    children: PropTypes.array
}

export { TodoItem, TodoList }
