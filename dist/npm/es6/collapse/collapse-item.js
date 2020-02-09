'use strict'
exports.__esModule = true
var React = require('react')
var react_1 = require('react')
var classnames_1 = require('classnames')
var utils_1 = require('../utils')
var icon_1 = require('../icon')
require('./style.scss')
var setClass = utils_1.setPrefixClassName('coo-collapse-item')
var CollapseItem = function(props) {
  var children = props.children,
    className = props.className,
    _a = props.name,
    name = _a === void 0 ? '0' : _a,
    contentvisible = props.contentvisible,
    title = props.title,
    _b = props.iconPlacement,
    iconPlacement = _b === void 0 ? 'left' : _b,
    _c = props.onClick,
    onClick = _c === void 0 ? function() {} : _c
  // Initialize
  var visible = utils_1.stringEqual(contentvisible, true)
  // Expanded item style
  var callbackContentStyle = { display: 'block', height: '0' }
  // Initialize done
  // Set init style by visible
  var _d = react_1.useState(visible ? { display: 'block' } : {}),
    contentStyle = _d[0],
    setContentStyle = _d[1]
  var contentRef = react_1.useRef(null)
  // Gets the height of the element to animate with height
  react_1.useEffect(function() {
    Promise.resolve().then(function() {
      var contentHeight = getComputedStyle(contentRef.current)['height']
      if (visible) {
        setContentStyle({ display: 'block', height: contentHeight })
      }
    })
  }, [])
  // Set animat by props contentvisible
  React.useEffect(
    function() {
      if (utils_1.stringEqual(contentvisible, true) === false) {
        setContentStyle(callbackContentStyle)
        setTimeout(function() {
          setContentStyle({ display: 'none' })
        }, 290)
      }
    },
    [contentvisible],
  )
  // if animat not done, then clean funciton
  var closeTimer
  var openTimer
  var onTitleClick = function() {
    openTimer && clearTimeout(openTimer)
    closeTimer && clearTimeout(closeTimer)
    // parent onCick callback
    onClick(name, utils_1.stringEqual(contentvisible, true))
    /**
     * @param {string} contentvisible
     * judge animat state by props contentvisible
     * contentvisible === false is expanded animat, there 'false' is last time state
     */
    if (!utils_1.stringEqual(contentvisible, true)) {
      setContentStyle({ display: 'block' })
      // setContentStyle is async function, use Promise for wait display = block and animat
      Promise.resolve().then(function() {
        var contentHeight = getComputedStyle(contentRef.current)['height']
        // init animat state
        setContentStyle(callbackContentStyle)
        openTimer = setTimeout(function() {
          // 20ms to ensure that the animation occurs
          setContentStyle({ display: 'block', height: contentHeight })
        }, 20)
      })
    } else {
      // close animat
      setContentStyle(callbackContentStyle)
      closeTimer = setTimeout(function() {
        setContentStyle({ display: 'none' })
      }, 290)
    }
  }
  return React.createElement(
    'div',
    { className: classnames_1['default'](setClass(''), className) },
    React.createElement(
      'div',
      {
        className: classnames_1['default'](
          setClass('title'),
          visible && setClass('title-visible'),
          iconPlacement === 'right' && setClass('title-icon-right'),
        ),
        onClick: onTitleClick,
      },
      iconPlacement === 'left' &&
        React.createElement(icon_1['default'], {
          className: setClass('title-icon'),
          name: 'arrow-right',
        }),
      React.createElement('p', null, title),
      iconPlacement === 'right' &&
        React.createElement(icon_1['default'], {
          className: setClass('title-icon'),
          name: 'arrow-right',
        }),
    ),
    React.createElement(
      'div',
      { ref: contentRef, className: setClass('content'), style: contentStyle },
      children,
    ),
  )
}
exports['default'] = CollapseItem
