'use strict'
exports.__esModule = true
var React = require('react')
var react_transition_group_1 = require('react-transition-group')
var css_transition_1 = require('./css-transition')
exports.CSSTransition = css_transition_1['default']
var collapse_transition_1 = require('./collapse-transition')
exports.CollapseTransition = collapse_transition_1['default']
require('./style.scss')
exports['default'] = function(props) {
  var visible = props.visible,
    _a = props.duration,
    duration = _a === void 0 ? 300 : _a,
    _b = props.name,
    name = _b === void 0 ? 'coo-fade' : _b,
    children = props.children
  return React.createElement(
    react_transition_group_1.CSSTransition,
    { in: visible, timeout: duration, classNames: name, unmountOnExit: true },
    children,
  )
}
