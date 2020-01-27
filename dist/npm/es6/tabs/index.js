'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
    return t
  }
exports.__esModule = true
var React = require('react')
var react_1 = require('react')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
var tab_pane_1 = require('./tab-pane')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-tabs')
var Tabs = function(props) {
  var children = props.children,
    className = props.className,
    defaultActiveKey = props.defaultActiveKey,
    _a = props.destoryOnChange,
    destoryOnChange = _a === void 0 ? false : _a,
    _b = props.animat,
    animat = _b === void 0 ? true : _b,
    leftProps = __rest(
      props,
      // TODO:
      // console.log(animat)
      // 初始化所有的tab，{key, tab}
      ['children', 'className', 'defaultActiveKey', 'destoryOnChange', 'animat'],
    )
  // TODO:
  // console.log(animat)
  // 初始化所有的tab，{key, tab}
  var tabsValue = React.Children.map(children, function(tab) {
    var currentTab = tab
    return { key: currentTab.key, tab: currentTab.props.tab }
  })
  // 所有的tab标题宽度
  var _c = react_1.useState(),
    tabsWidthList = _c[0],
    setTabsWidthList = _c[1]
  // tab-bar移动的位置
  var _d = react_1.useState(0),
    tabBarTranslateX = _d[0],
    setTabBarTranslateX = _d[1]
  // 当前tab
  var _e = react_1.useState({
      key: defaultActiveKey || children[0].key || '',
      tab: '',
    }),
    active = _e[0],
    setActive = _e[1]
  // tab包裹层的ref
  var tabsRef = react_1.useRef(null)
  // 获取当前tab的下标
  var getCurrentTabActiveIndex = function() {
    return tabsValue.findIndex(function(d) {
      return d.key === active.key
    })
  }
  // 点击设置tabActive和tab-tab index
  var onTabClick = function(key, tab) {
    var currentActiveIndex = tabsValue.findIndex(function(d) {
      return d.key === key
    })
    var translateX = tabsWidthList.slice(0, currentActiveIndex).reduce(function(sum, current) {
      return sum + parseInt(current, 10) + 16
    }, 0)
    setTabBarTranslateX(translateX)
    setActive({ key: key, tab: tab })
  }
  react_1.useEffect(
    function() {
      // 获取所有tabs的宽度，用来设置tab-bar的transform
      var tabsElement = tabsRef.current
      if (tabsElement !== null && tabsElement.children.length > 0) {
        var widthList = Array.prototype.map
          .call(tabsElement.children, function(tab) {
            return tab.className.includes('coo-tabs-tab-item')
              ? getComputedStyle(tab)['width']
              : null
          })
          .filter(function(d) {
            return d !== null
          })
        setTabsWidthList(widthList)
        var currentActiveIndex = tabsValue.findIndex(function(d) {
          return d.key === defaultActiveKey
        })
        var translateX = widthList.slice(0, currentActiveIndex).reduce(function(sum, current) {
          return sum + parseInt(current, 10) + 16
        }, 0)
        setTabBarTranslateX(translateX)
      }
    },
    [tabsRef],
  )
  return React.createElement(
    'div',
    __assign({ className: classnames_1['default'](setClass(), className) }, leftProps),
    React.createElement(
      'ul',
      { ref: tabsRef, className: setClass('tab') },
      React.Children.map(children, function(child) {
        var currentChild = child
        if (currentChild.type === tab_pane_1['default']) {
          var key_1 = currentChild.key || ''
          var tab_1 = currentChild.props.tab
          return React.createElement(
            'li',
            {
              key: key_1,
              className: classnames_1['default'](
                setClass('tab-item'),
                active.key === key_1 && setClass('tab-item-active'),
              ),
              onClick: function() {
                return onTabClick(key_1, tab_1)
              },
            },
            tab_1,
          )
        }
        return null
      }),
      React.createElement('div', {
        className: setClass('tab-bar'),
        style: {
          width: tabsWidthList && tabsWidthList[getCurrentTabActiveIndex()],
          transform: 'translateX(' + tabBarTranslateX + 'px)',
        },
      }),
    ),
    React.createElement(
      'div',
      { className: setClass('pane') },
      React.Children.map(children, function(tab) {
        var currentChild = tab
        if (currentChild.type === tab_pane_1['default']) {
          var key = currentChild.key || ''
          // 销毁dom
          if (destoryOnChange) {
            if (active.key === key) {
              return React.createElement('div', { className: setClass('pane-content') }, tab)
            } else {
              return null
            }
          } else {
            // 不会销毁dom
            return React.createElement(
              'div',
              {
                className: setClass('pane-content'),
                style: { display: active.key === key ? 'block' : 'none' },
              },
              tab,
            )
          }
        }
        return null
      }),
    ),
  )
}
Tabs.TabPane = tab_pane_1['default']
exports['default'] = Tabs
