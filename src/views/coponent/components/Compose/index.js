/*
 * @LastEditTime: 2022-08-18 01:39:03
 * @Description: 输入搜索框
 * @Date: 2022-08-16 23:20:07
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Component } from 'react'

import PropTypes from 'prop-types'

import List from '../componentCommunication/List'

class SelectInput extends Component {
    static displayName = 'SelectInput'

    static propTypes = {
        selectedItem: PropTypes.object,
        isActive: PropTypes.bool,
        onClickHeader: PropTypes.func,
        placeholder: PropTypes.string
    }

    render() {
        const { selectedItem, isActive, onClickHeader, placeholder } =
            this.props
        const { text } = selectedItem

        return (
            <div>
                <div onClick={onClickHeader}>
                    <input
                        type="text"
                        disabled
                        value={text}
                        placeholder={placeholder}
                    />
                    <Icon className={isActive} name="angle-down" />
                </div>
            </div>
        )
    }
}

class SearchInput extends Component {
    static displayName = 'SearchInput'

    render() {
        const { keyword, onSearch } = this.props
        return (
            <div>
                <input
                    type={'text'}
                    value={keyword}
                    onChange={onSearch}
                    placeholder={placeholder}
                ></input>
            </div>
        )
    }
}

// 逻辑抽象
// 完成对 SearchInput 与 List 的交互

const searchDecorator = (WrappedComponent) => {
    class SearchDecorator extends Component {
        static propTypes = {
            onSearch: PropTypes.bool,
            data: PropTypes.object
        }
        constructor(props) {
            super(props)

            this.handleSearch = this.handleSearch.bind(this)
        }
        handleSearch(keyword) {
            this.setState({
                data: this.props.data,
                keyword
            })

            this.props.onSearch(keyword)
        }

        render() {
            const { data, keyword } = this.state
            return (
                <WrappedComponent
                    {...this.props}
                    data={data}
                    keyword={keyword}
                    onSearch={this.ha}
                />
            )
        }
    }

    return SearchDecorator
}

// 完成List数据请求
const asyncSelectDecorator = (WrappedComponent) => {
    class AsyncSelectDecorator extends Component {
        static propTypes = {
            url: PropTypes.string,
            params: PropTypes.object
        }
        componentDidMount() {
            const { url, params } = this.props

            fetch(url, { params }).then((data) => {
                this.setState({
                    data
                })
            })
        }

        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />
        }
    }
    return AsyncSelectDecorator
}

//最终组合界面和逻辑
// 利用compose,完成界面和逻辑的组合

const FinalSelector = compose(
    asyncSelectDecorator,
    searchDecorator,
    selectedItemDecorator
)

class SearchSelect extends Component {
    render() {
        return (
            <FinalSelector {...this.props}>
                <SelectInput />
                <SelectInput />
                <List />
            </FinalSelector>
        )
    }
}

export default SearchSelect
