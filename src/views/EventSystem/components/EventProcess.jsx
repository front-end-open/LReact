/*
 * @LastEditTime: 2022-08-06 22:26:15
 * @Description:事件执行阶段过程
 * @Date: 2022-08-06 19:39:09
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import PropTypes from 'prop-types'

const pastyle = {
    padding: '12px',
    backgroundColor: 'red',
    width: '400px'
}

const chstyle = {
    padding: '12px',
    backgroundColor: 'orange'
}

function parentClick(e) {
    console.log('父级触发了', e)
}

function childClick(e) {
    console.log('子集触发了', e)
}

// eslint-disable-next-line no-unused-vars
function BubbleOrCapture(props) {
    return (
        <div>
            <h3>事件执行阶段-冒泡/捕获</h3>

            <div className="parent" onClick={parentClick} style={pastyle}>
                <div onClick={childClick} className="child" style={chstyle}>
                    child
                </div>
            </div>
        </div>
    )
}

BubbleOrCapture.protoTypes = {
    isBubble: PropTypes.bool
}

export default BubbleOrCapture
