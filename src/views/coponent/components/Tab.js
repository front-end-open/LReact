/*
 * @LastEditTime: 2022-07-31 00:44:53
 * @Description: Tabs组件（UI组件）
 * @Date: 2022-07-31 00:11:54
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import EventnEmitter from 'events'

import $ from 'jquery'

const Selector = (classPrefix) => ({
    PREFIX: classPrefix,
    NAV: `${classPrefix}-nav`,
    CONTENT: `${classPrefix}-content`,
    TAB: `${classPrefix}-tab`,
    PANEL: `${classPrefix}-panel`,
    ACTIVE: `${classPrefix}-active`,
    DISABLE: `${classPrefix}-disable`
})

export class Tab {
    static defaultOptions = {
        classPrefix: 'tabs',
        activeIndex: 0
    }

    constructor(options) {
        this.options = $.extend({}, Tabs.defaultOptions, options)
        this.element = $(this.options.element)
        this.fromIndex = this.options.activeIndex

        this.events = new EventnEmitter()
        this.selector = Selector(this.options.classPrefix)

        this._initElement()
        this._initTabs()
        this._initPanel()
        this._bindTabs()

        if (this.options.activeIndex !== undefined) {
            this.switchTo(this.options.activeIndex)
        }
    }

    _initElement() {
        this.element.addClass(this.selector.PREFIX)
        this.tabs = $(this.options.tabs)
        this.panels = $(this.options.panels)
        this.nav = $(this.options.nav)
        this.content = $(this.options.content)

        this.length = this.tabs.length
    }

    _initTabs() {
        this.nav && this.nav.addClass(this.selector.NAV)
        this.tabs.addClass(this.selector.TAB).each((index, tab) => {
            $(tab).data('value', index)
        })
    }

    _initPanel() {
        this.tabs.on('click', (e) => {
            const $el = $(e.target)
            if (!$el.hasClass(this.selector.DISABLE)) {
                this.switchTo($el.data('value'))
            }
        })
    }

    events() {
        return this.events
    }

    switchTo(toIndex) {
        this._switchTo(toIndex)
    }

    _switchTo(toIndex) {
        const fromIndex = this.fromIndex
        const panelInfo = this._getPanelInfo(toIndex)

        this._switchTo(toIndex)
        this._switchPanel(panelInfo)
        this.events.emit('change', { toIndex, fromIndex })

        this.fromIndex = toIndex
    }

    _switchTabs(toIndex) {
        const tabs = this.tabs
        const fromIndex = this.fromIndex

        if (tabs.length < 1) return

        tabs.eq(fromIndex)
            .removeClass(this.selector.ACTIVE)
            .attr('aria-selected', false)

        tabs.eq(toIndex)
            .addClass(this.selector.ACTIVE)
            .attr('aria-selected', true)
    }

    _switchPanel(panelInfo) {
        panelInfo.fromIndex.attr('aria-hidden', true).hide()

        panelInfo.toPanels.attr('aria-hidden', false).show()
    }

    _getPanelInfo(toIndex) {
        // eslint-disable-next-line no-unused-vars
        const panels = this.panels
        const fromIndex = this.fromIndex

        let fromPanels, toPanels

        if (fromIndex > -1) {
            fromPanels = this.panels.slice(fromIndex, fromIndex + 1)
        }

        toPanels = this.panels.slice(toIndex, toIndex + 1)

        return {
            toIndex,
            fromIndex,
            fromPanels: $(fromPanels),
            toPanels: $(toPanels)
        }
    }

    destory() {
        this.events.removeAllListeners()
    }
}
