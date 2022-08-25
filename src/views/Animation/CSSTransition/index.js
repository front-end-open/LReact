/*
 * @LastEditTime: 2022-08-26 01:41:09
 * @Description:css-transition
 * @Date: 2022-08-26 01:06:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import './transition.scss'

function ReactCssTransition({ in: inProp }) {
    return (
        <div>
            <CSSTransition
                appear={false}
                in={inProp}
                timeout={200}
                unmountOnExit
                classNames="fade"
            >
                <div>{"I'll receive fade-* classes"}</div>
            </CSSTransition>
        </div>
    )
}

ReactCssTransition.propTypes = {
    in: PropTypes.bool
}

export default ReactCssTransition
