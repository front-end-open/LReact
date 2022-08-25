/*
 * @LastEditTime: 2022-08-26 01:15:22
 * @Description:
 * @Date: 2022-08-25 00:47:56
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
}

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {(state) => (
            <div
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
            >
                I'm a fade Transition!--{state}
            </div>
        )}
    </Transition>
)

Fade.propTypes = {
    in: PropTypes.bool
}

export default Fade
