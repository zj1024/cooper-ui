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
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-pagination')
var Pagination = function(props) {
  var className = props.className,
    _a = props.size,
    size = _a === void 0 ? 'normal' : _a,
    _b = props.defaultCurrent,
    defaultCurrent = _b === void 0 ? 1 : _b,
    _c = props.pagerCount,
    pagerCount = _c === void 0 ? 5 : _c,
    _d = props.pageCount,
    pageCount = _d === void 0 ? 0 : _d,
    _e = props.disabled,
    disabled = _e === void 0 ? false : _e,
    _f = props.hideOnSinglePage,
    hideOnSinglePage = _f === void 0 ? false : _f,
    _g = props.showQuickJumper,
    showQuickJumper = _g === void 0 ? false : _g,
    _h = props.onChange,
    onChange = _h === void 0 ? function() {} : _h,
    leftProps = __rest(props, [
      'className',
      'size',
      'defaultCurrent',
      'pagerCount',
      'pageCount',
      'disabled',
      'hideOnSinglePage',
      'showQuickJumper',
      'onChange',
    ])
  if (hideOnSinglePage && pageCount === 1) {
    return null
  }
  // 页码中位数指针
  var pivotIndex = Math.floor(pagerCount / 2)
  // 页码按钮的数量，当总页数超过该值时会折叠
  var initPagers = Array.from(Array(pageCount <= pagerCount ? pageCount : pagerCount), function(
    pager,
    index,
  ) {
    return pager ? pager : index + 1
  })
  var _j = react_1.useState(initPagers),
    pagers = _j[0],
    setPagers = _j[1]
  var _k = react_1.useState(defaultCurrent),
    current = _k[0],
    setCurrent = _k[1]
  // 快速翻页按钮
  var _l = react_1.useState('ellipsis'),
    prevEllipsisIcon = _l[0],
    setPrevEllipsisIcon = _l[1]
  var _m = react_1.useState('ellipsis'),
    nextEllipsisIcon = _m[0],
    setNextEllipsisIcon = _m[1]
  var onMouseEnter = function(type) {
    if (!disabled) {
      type === 'prev' ? setPrevEllipsisIcon('double-left') : setNextEllipsisIcon('double-right')
    }
  }
  var onMouseLeave = function(type) {
    if (!disabled) {
      type === 'prev' ? setPrevEllipsisIcon('ellipsis') : setNextEllipsisIcon('ellipsis')
    }
  }
  var onItemClick = function(current) {
    if (!disabled) {
      pageCount > pagerCount && setPagers(getNewPagers(current))
      if (current > pageCount) {
        Promise.resolve().then(function() {
          setCurrent(pageCount)
        })
        return
      }
      if (current < 1) {
        Promise.resolve().then(function() {
          setCurrent(1)
        })
        return
      }
      Promise.resolve().then(function() {
        setCurrent(current)
      })
    }
  }
  var onMenuClick = function(type) {
    if (!disabled) {
      if (type === 'prev') {
        pageCount > pagerCount && setPagers(getNewPagers(current - 1))
        Promise.resolve().then(function() {
          current > 1 && setCurrent(current - 1)
        })
      }
      if (type === 'next') {
        pageCount > pagerCount && setPagers(getNewPagers(current + 1))
        Promise.resolve().then(function() {
          current < pageCount && setCurrent(current + 1)
        })
      }
    }
  }
  // 换页核心方法
  var getNewPagers = function(current) {
    var pointerPager = current
    if (pointerPager < pivotIndex + 1) {
      pointerPager = pivotIndex + 1
    }
    if (current > pageCount - pivotIndex) {
      pointerPager = pageCount - pivotIndex
    }
    var newPagers = []
    for (var i = 0; i < pagerCount; i++) {
      newPagers.push(pointerPager - pivotIndex + i)
    }
    return newPagers
  }
  var _o = react_1.useState(''),
    quickJumperValue = _o[0],
    setQuickJumperValue = _o[1]
  var onQuickJumperChange = function(e) {
    setQuickJumperValue(e.target.value)
  }
  var onQuickJumperKeyDown = function(e) {
    if (e.keyCode === 13) {
      var value = parseInt(e.target.value, 10)
      if (utils_1.isNumber(value)) {
        onItemClick(value)
      }
      setQuickJumperValue('')
    }
  }
  // defaultCurrent 大于 页码坑位，重新计算页码值
  react_1.useEffect(function() {
    if (defaultCurrent > pagerCount) {
      setPagers(getNewPagers(current))
    }
  }, [])
  // 监听current触发回调
  react_1.useEffect(
    function() {
      // 解决快速翻页页码点击状态临界值图标回到省略状态
      if (current >= pageCount - pivotIndex) {
        setNextEllipsisIcon('ellipsis')
      }
      if (current <= pagerCount) {
        setPrevEllipsisIcon('ellipsis')
      }
      onChange(current)
    },
    [current],
  )
  return React.createElement(
    'ul',
    __assign(
      {
        className: classnames_1['default'](
          setClass(),
          size === 'normal' && setClass('normal'),
          size === 'small' && setClass('small'),
          size === 'large' && setClass('large'),
          className,
        ),
      },
      leftProps,
    ),
    React.createElement(
      'li',
      {
        className: classnames_1['default'](
          setClass('prev'),
          (current === 1 || disabled) && setClass('disabled'),
        ),
        onClick: function() {
          return onMenuClick('prev')
        },
        title: '\u4E0A\u4E00\u9875',
      },
      React.createElement(icon_1['default'], { name: 'arrow-left' }),
    ),
    current > pagerCount &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'li',
          {
            className: classnames_1['default'](setClass('item'), disabled && setClass('disabled')),
            onClick: function() {
              return onItemClick(1)
            },
            title: '1',
          },
          1,
        ),
        React.createElement(
          'li',
          {
            className: classnames_1['default'](setClass('item'), disabled && setClass('disabled')),
            onMouseEnter: function() {
              return onMouseEnter('prev')
            },
            onMouseLeave: function() {
              return onMouseLeave('prev')
            },
            onClick: function() {
              return onItemClick(current - pagerCount)
            },
            title: '\u5411\u524D' + pagerCount + '\u9875',
          },
          React.createElement(icon_1['default'], { name: prevEllipsisIcon }),
        ),
      ),
    pagers.map(function(d) {
      return React.createElement(
        'li',
        {
          key: d,
          className: classnames_1['default'](
            setClass('item'),
            d === current && setClass('item-active'),
            disabled && setClass('disabled'),
          ),
          onClick: function() {
            return onItemClick(d)
          },
          title: '' + d,
        },
        d,
      )
    }),
    pageCount > pagerCount &&
      current < pageCount - pivotIndex &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'li',
          {
            className: classnames_1['default'](setClass('item'), disabled && setClass('disabled')),
            onMouseEnter: function() {
              return onMouseEnter('next')
            },
            onMouseLeave: function() {
              return onMouseLeave('next')
            },
            onClick: function() {
              return onItemClick(current + pagerCount)
            },
            title: '\u5411\u540E' + pagerCount + '\u9875',
          },
          React.createElement(icon_1['default'], { name: nextEllipsisIcon }),
        ),
        React.createElement(
          'li',
          {
            className: classnames_1['default'](setClass('item'), disabled && setClass('disabled')),
            onClick: function() {
              return onItemClick(pageCount)
            },
            title: '' + pageCount,
          },
          pageCount,
        ),
      ),
    React.createElement(
      'li',
      {
        className: classnames_1['default'](
          setClass('next'),
          (current === pageCount || disabled) && setClass('disabled'),
        ),
        onClick: function() {
          return onMenuClick('next')
        },
        title: '\u4E0B\u4E00\u9875',
      },
      React.createElement(icon_1['default'], { name: 'arrow-right' }),
    ),
    showQuickJumper &&
      React.createElement(
        'li',
        {
          className: classnames_1['default'](
            setClass('quick-jumper'),
            disabled && setClass('disabled'),
          ),
        },
        React.createElement('span', null, '\u8DF3\u81F3'),
        React.createElement('input', {
          className: setClass('quick-jumper-input'),
          value: quickJumperValue,
          onChange: onQuickJumperChange,
          onKeyDown: onQuickJumperKeyDown,
        }),
        React.createElement('span', null, '\u9875'),
      ),
  )
}
exports['default'] = Pagination
