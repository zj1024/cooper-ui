;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [28],
  {
    /***/ './docs/src/pages/tooltip/index.md':
      /*!*****************************************!*\
  !*** ./docs/src/pages/tooltip/index.md ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ("# Tooltip 文字提示\\n\\n用户鼠标悬浮，会显示简单的文字提示气泡框。\\n\\n## 基本用法\\n\\n提供了`top / bottom / left / right`四种方向。气泡浮层支持长文本和简单文本，不承载复杂操作。\\n\\n:::demo 使用`<Tooltip />`标签声明组件，`children`为触发元素，`content`属性为气泡内容，`placement`属性为气泡方向\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <div style={styles.ph100}>\\n      <div style={styles.item}>\\n        <Tooltip content=\\"666\\">\\n          <Button>上</Button>\\n        </Tooltip>\\n      </div>\\n      <div style={styles.center}>\\n        <Tooltip content=\\"666\\" placement=\\"left\\">\\n          <Button type=\\"info\\">左</Button>\\n        </Tooltip>\\n        <Tooltip content=\\"666\\" placement=\\"right\\">\\n          <Button type=\\"success\\">右</Button>\\n        </Tooltip>\\n      </div>\\n      <div style={styles.item}>\\n        <Tooltip content=\\"666\\" placement=\\"bottom\\">\\n          <Button type=\\"primary\\">下</Button>\\n        </Tooltip>\\n      </div>\\n    </div>\\n  )\\n}\\n\\nconst styles = {\\n  item: {\\n    display: \'flex\',\\n    justifyContent: \'center\',\\n    margin: \'20px 0\',\\n  },\\n  center: {\\n    display: \'flex\',\\n    justifyContent: \'space-between\',\\n    margin: \'20px 0\',\\n  },\\n  ph100: {\\n    paddingLeft: \'100px\',\\n    paddingRight: \'100px\',\\n  },\\n}\\n```\\n\\n:::\\n\\n## 长文本\\n\\n在基本用法上属性一致，同时也支持长文本\\n\\n:::demo 使用`<Tooltip />`标签声明组件，`content`属性为气泡内容，放置一段长文本\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <Tooltip content=\\"这是一段长文本，文本内容可以很好的显示出来\\" placement=\\"right\\">\\n      <Button>长文本</Button>\\n    </Tooltip>\\n  )\\n}\\n```\\n\\n:::\\n\\n## Attributes\\n\\n| 参数      | 说明           | 类型   | 可选值                   | 默认值 |\\n| --------- | -------------- | ------ | ------------------------ | ------ |\\n| className | 容器 className | string | —                        | —      |\\n| style     | 指定样式       | object | —                        | —      |\\n| content   | 文字内容       | string | -                        | -      |\\n| placement | 方向           | string | top，bottom，left，right | -      |\\n");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL3NyYy9wYWdlcy90b29sdGlwL2luZGV4Lm1kLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvcGFnZXMvdG9vbHRpcC9pbmRleC5tZD83MmJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiIyBUb29sdGlwIOaWh+Wtl+aPkOekulxcblxcbueUqOaIt+m8oOagh+aCrOa1ru+8jOS8muaYvuekuueugOWNleeahOaWh+Wtl+aPkOekuuawlOazoeahhuOAglxcblxcbiMjIOWfuuacrOeUqOazlVxcblxcbuaPkOS+m+S6hmB0b3AgLyBib3R0b20gLyBsZWZ0IC8gcmlnaHRg5Zub56eN5pa55ZCR44CC5rCU5rOh5rWu5bGC5pSv5oyB6ZW/5paH5pys5ZKM566A5Y2V5paH5pys77yM5LiN5om/6L295aSN5p2C5pON5L2c44CCXFxuXFxuOjo6ZGVtbyDkvb/nlKhgPFRvb2x0aXAgLz5g5qCH562+5aOw5piO57uE5Lu277yMYGNoaWxkcmVuYOS4uuinpuWPkeWFg+e0oO+8jGBjb250ZW50YOWxnuaAp+S4uuawlOazoeWGheWuue+8jGBwbGFjZW1lbnRg5bGe5oCn5Li65rCU5rOh5pa55ZCRXFxuXFxuYGBganN4XFxuY29uc3QgQXBwID0gKCkgPT4ge1xcbiAgcmV0dXJuIChcXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLnBoMTAwfT5cXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XFxuICAgICAgICA8VG9vbHRpcCBjb250ZW50PVxcXCI2NjZcXFwiPlxcbiAgICAgICAgICA8QnV0dG9uPuS4ijwvQnV0dG9uPlxcbiAgICAgICAgPC9Ub29sdGlwPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jZW50ZXJ9PlxcbiAgICAgICAgPFRvb2x0aXAgY29udGVudD1cXFwiNjY2XFxcIiBwbGFjZW1lbnQ9XFxcImxlZnRcXFwiPlxcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XFxcImluZm9cXFwiPuW3pjwvQnV0dG9uPlxcbiAgICAgICAgPC9Ub29sdGlwPlxcbiAgICAgICAgPFRvb2x0aXAgY29udGVudD1cXFwiNjY2XFxcIiBwbGFjZW1lbnQ9XFxcInJpZ2h0XFxcIj5cXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJzdWNjZXNzXFxcIj7lj7M8L0J1dHRvbj5cXG4gICAgICAgIDwvVG9vbHRpcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XFxuICAgICAgICA8VG9vbHRpcCBjb250ZW50PVxcXCI2NjZcXFwiIHBsYWNlbWVudD1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj7kuIs8L0J1dHRvbj5cXG4gICAgICAgIDwvVG9vbHRpcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICApXFxufVxcblxcbmNvbnN0IHN0eWxlcyA9IHtcXG4gIGl0ZW06IHtcXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXFxuICAgIG1hcmdpbjogJzIwcHggMCcsXFxuICB9LFxcbiAgY2VudGVyOiB7XFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcXG4gICAgbWFyZ2luOiAnMjBweCAwJyxcXG4gIH0sXFxuICBwaDEwMDoge1xcbiAgICBwYWRkaW5nTGVmdDogJzEwMHB4JyxcXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTAwcHgnLFxcbiAgfSxcXG59XFxuYGBgXFxuXFxuOjo6XFxuXFxuIyMg6ZW/5paH5pysXFxuXFxu5Zyo5Z+65pys55So5rOV5LiK5bGe5oCn5LiA6Ie077yM5ZCM5pe25Lmf5pSv5oyB6ZW/5paH5pysXFxuXFxuOjo6ZGVtbyDkvb/nlKhgPFRvb2x0aXAgLz5g5qCH562+5aOw5piO57uE5Lu277yMYGNvbnRlbnRg5bGe5oCn5Li65rCU5rOh5YaF5a6577yM5pS+572u5LiA5q616ZW/5paH5pysXFxuXFxuYGBganN4XFxuY29uc3QgQXBwID0gKCkgPT4ge1xcbiAgcmV0dXJuIChcXG4gICAgPFRvb2x0aXAgY29udGVudD1cXFwi6L+Z5piv5LiA5q616ZW/5paH5pys77yM5paH5pys5YaF5a655Y+v5Lul5b6I5aW955qE5pi+56S65Ye65p2lXFxcIiBwbGFjZW1lbnQ9XFxcInJpZ2h0XFxcIj5cXG4gICAgICA8QnV0dG9uPumVv+aWh+acrDwvQnV0dG9uPlxcbiAgICA8L1Rvb2x0aXA+XFxuICApXFxufVxcbmBgYFxcblxcbjo6OlxcblxcbiMjIEF0dHJpYnV0ZXNcXG5cXG58IOWPguaVsCAgICAgIHwg6K+05piOICAgICAgICAgICB8IOexu+WeiyAgIHwg5Y+v6YCJ5YC8ICAgICAgICAgICAgICAgICAgIHwg6buY6K6k5YC8IHxcXG58IC0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tIHxcXG58IGNsYXNzTmFtZSB8IOWuueWZqCBjbGFzc05hbWUgfCBzdHJpbmcgfCDigJQgICAgICAgICAgICAgICAgICAgICAgICB8IOKAlCAgICAgIHxcXG58IHN0eWxlICAgICB8IOaMh+Wumuagt+W8jyAgICAgICB8IG9iamVjdCB8IOKAlCAgICAgICAgICAgICAgICAgICAgICAgIHwg4oCUICAgICAgfFxcbnwgY29udGVudCAgIHwg5paH5a2X5YaF5a65ICAgICAgIHwgc3RyaW5nIHwgLSAgICAgICAgICAgICAgICAgICAgICAgIHwgLSAgICAgIHxcXG58IHBsYWNlbWVudCB8IOaWueWQkSAgICAgICAgICAgfCBzdHJpbmcgfCB0b3DvvIxib3R0b23vvIxsZWZ077yMcmlnaHQgfCAtICAgICAgfFxcblwiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/src/pages/tooltip/index.md\n',
        )

        /***/
      },

    /***/ './docs/src/pages/tooltip/index.tsx':
      /*!******************************************!*\
  !*** ./docs/src/pages/tooltip/index.tsx ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/markdown */ "./docs/src/components/markdown/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (() => {\n    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], { mdString: __webpack_require__(/*! ./index.md */ "./docs/src/pages/tooltip/index.md").default });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL3NyYy9wYWdlcy90b29sdGlwL2luZGV4LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RvY3Mvc3JjL3BhZ2VzL3Rvb2x0aXAvaW5kZXgudHN4PzBhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYXJrZG93bidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gPE1hcmtkb3duIG1kU3RyaW5nPXtyZXF1aXJlKCcuL2luZGV4Lm1kJykuZGVmYXVsdH0gLz5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/src/pages/tooltip/index.tsx\n',
        )

        /***/
      },
  },
])
