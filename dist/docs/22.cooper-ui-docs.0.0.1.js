;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22],
  {
    /***/ './docs/src/pages/layout/index.md':
      /*!****************************************!*\
  !*** ./docs/src/pages/layout/index.md ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# Layout 布局\\n\\n快速创建页面常用布局\\n\\n## 基础布局\\n\\n:::demo 上中下布局\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <Layout>\\n      <Layout.Header style={styles.header}>LOGO</Layout.Header>\\n      <Layout.Content style={styles.content}>内容</Layout.Content>\\n      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\\n    </Layout>\\n  )\\n}\\n\\nconst styles = {\\n  header: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  content: {\\n    background: '#108ee9',\\n    padding: '50px 20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  footer: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n}\\n```\\n\\n:::\\n\\n:::demo 上 左右 下布局\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <Layout>\\n      <Layout.Header style={styles.header}>LOGO</Layout.Header>\\n      <Layout>\\n        <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\\n        <Layout.Content style={styles.content}>内容</Layout.Content>\\n      </Layout>\\n      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\\n    </Layout>\\n  )\\n}\\n\\nconst styles = {\\n  header: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  content: {\\n    background: '#108ee9',\\n    padding: '50px 20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  footer: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  aside: {\\n    background: '#3ba0e9',\\n    padding: '10px',\\n    color: '#fff',\\n    display: 'flex',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n}\\n```\\n\\n:::\\n\\n:::demo 左 上中下 布局\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <Layout>\\n      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\\n      <Layout>\\n        <Layout.Header style={styles.header}>LOGO</Layout.Header>\\n        <Layout.Content style={styles.content}>内容</Layout.Content>\\n        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\\n      </Layout>\\n    </Layout>\\n  )\\n}\\n\\nconst styles = {\\n  header: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  content: {\\n    background: '#108ee9',\\n    padding: '50px 20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  footer: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  aside: {\\n    background: '#3ba0e9',\\n    padding: '10px',\\n    color: '#fff',\\n    display: 'flex',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n}\\n```\\n\\n:::\\n\\n:::demo 左 上左右下 布局\\n\\n```jsx\\nconst App = () => {\\n  return (\\n    <Layout>\\n      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\\n      <Layout>\\n        <Layout.Header style={styles.header}>LOGO</Layout.Header>\\n        <Layout>\\n          <Layout.Content style={styles.content}>内容</Layout.Content>\\n          <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\\n        </Layout>\\n        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\\n      </Layout>\\n    </Layout>\\n  )\\n}\\n\\nconst styles = {\\n  header: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  content: {\\n    background: '#108ee9',\\n    padding: '50px 20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  footer: {\\n    background: '#7dbcea',\\n    padding: '20px',\\n    color: '#fff',\\n    textAlign: 'center',\\n  },\\n  aside: {\\n    background: '#3ba0e9',\\n    padding: '10px',\\n    color: '#fff',\\n    display: 'flex',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n}\\n```\\n\\n:::\\n\\n## Attributes\\n\\n### Layout 布局容器\\n\\n| 参数      | 说明           | 类型   | 可选值 | 默认值 |\\n| --------- | -------------- | ------ | ------ | ------ |\\n| className | 容器 className | string | —      | —      |\\n| style     | 指定样式       | object | —      | —      |\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL3NyYy9wYWdlcy9sYXlvdXQvaW5kZXgubWQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL3NyYy9wYWdlcy9sYXlvdXQvaW5kZXgubWQ/ZTM5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiMgTGF5b3V0IOW4g+WxgFxcblxcbuW/q+mAn+WIm+W7uumhtemdouW4uOeUqOW4g+WxgFxcblxcbiMjIOWfuuehgOW4g+WxgFxcblxcbjo6OmRlbW8g5LiK5Lit5LiL5biD5bGAXFxuXFxuYGBganN4XFxuY29uc3QgQXBwID0gKCkgPT4ge1xcbiAgcmV0dXJuIChcXG4gICAgPExheW91dD5cXG4gICAgICA8TGF5b3V0LkhlYWRlciBzdHlsZT17c3R5bGVzLmhlYWRlcn0+TE9HTzwvTGF5b3V0LkhlYWRlcj5cXG4gICAgICA8TGF5b3V0LkNvbnRlbnQgc3R5bGU9e3N0eWxlcy5jb250ZW50fT7lhoXlrrk8L0xheW91dC5Db250ZW50PlxcbiAgICAgIDxMYXlvdXQuRm9vdGVyIHN0eWxlPXtzdHlsZXMuZm9vdGVyfT7lsL7pg6g8L0xheW91dC5Gb290ZXI+XFxuICAgIDwvTGF5b3V0PlxcbiAgKVxcbn1cXG5cXG5jb25zdCBzdHlsZXMgPSB7XFxuICBoZWFkZXI6IHtcXG4gICAgYmFja2dyb3VuZDogJyM3ZGJjZWEnLFxcbiAgICBwYWRkaW5nOiAnMjBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXFxuICB9LFxcbiAgY29udGVudDoge1xcbiAgICBiYWNrZ3JvdW5kOiAnIzEwOGVlOScsXFxuICAgIHBhZGRpbmc6ICc1MHB4IDIwcHgnLFxcbiAgICBjb2xvcjogJyNmZmYnLFxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxcbiAgfSxcXG4gIGZvb3Rlcjoge1xcbiAgICBiYWNrZ3JvdW5kOiAnIzdkYmNlYScsXFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcXG4gICAgY29sb3I6ICcjZmZmJyxcXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcXG4gIH0sXFxufVxcbmBgYFxcblxcbjo6Olxcblxcbjo6OmRlbW8g5LiKIOW3puWPsyDkuIvluIPlsYBcXG5cXG5gYGBqc3hcXG5jb25zdCBBcHAgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8TGF5b3V0PlxcbiAgICAgIDxMYXlvdXQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5MT0dPPC9MYXlvdXQuSGVhZGVyPlxcbiAgICAgIDxMYXlvdXQ+XFxuICAgICAgICA8TGF5b3V0LkFzaWRlIHN0eWxlPXtzdHlsZXMuYXNpZGV9PuS+p+i+ueagjzwvTGF5b3V0LkFzaWRlPlxcbiAgICAgICAgPExheW91dC5Db250ZW50IHN0eWxlPXtzdHlsZXMuY29udGVudH0+5YaF5a65PC9MYXlvdXQuQ29udGVudD5cXG4gICAgICA8L0xheW91dD5cXG4gICAgICA8TGF5b3V0LkZvb3RlciBzdHlsZT17c3R5bGVzLmZvb3Rlcn0+5bC+6YOoPC9MYXlvdXQuRm9vdGVyPlxcbiAgICA8L0xheW91dD5cXG4gIClcXG59XFxuXFxuY29uc3Qgc3R5bGVzID0ge1xcbiAgaGVhZGVyOiB7XFxuICAgIGJhY2tncm91bmQ6ICcjN2RiY2VhJyxcXG4gICAgcGFkZGluZzogJzIwcHgnLFxcbiAgICBjb2xvcjogJyNmZmYnLFxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxcbiAgfSxcXG4gIGNvbnRlbnQ6IHtcXG4gICAgYmFja2dyb3VuZDogJyMxMDhlZTknLFxcbiAgICBwYWRkaW5nOiAnNTBweCAyMHB4JyxcXG4gICAgY29sb3I6ICcjZmZmJyxcXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcXG4gIH0sXFxuICBmb290ZXI6IHtcXG4gICAgYmFja2dyb3VuZDogJyM3ZGJjZWEnLFxcbiAgICBwYWRkaW5nOiAnMjBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXFxuICB9LFxcbiAgYXNpZGU6IHtcXG4gICAgYmFja2dyb3VuZDogJyMzYmEwZTknLFxcbiAgICBwYWRkaW5nOiAnMTBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcXG4gIH0sXFxufVxcbmBgYFxcblxcbjo6Olxcblxcbjo6OmRlbW8g5bemIOS4iuS4reS4iyDluIPlsYBcXG5cXG5gYGBqc3hcXG5jb25zdCBBcHAgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8TGF5b3V0PlxcbiAgICAgIDxMYXlvdXQuQXNpZGUgc3R5bGU9e3N0eWxlcy5hc2lkZX0+5L6n6L655qCPPC9MYXlvdXQuQXNpZGU+XFxuICAgICAgPExheW91dD5cXG4gICAgICAgIDxMYXlvdXQuSGVhZGVyIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5MT0dPPC9MYXlvdXQuSGVhZGVyPlxcbiAgICAgICAgPExheW91dC5Db250ZW50IHN0eWxlPXtzdHlsZXMuY29udGVudH0+5YaF5a65PC9MYXlvdXQuQ29udGVudD5cXG4gICAgICAgIDxMYXlvdXQuRm9vdGVyIHN0eWxlPXtzdHlsZXMuZm9vdGVyfT7lsL7pg6g8L0xheW91dC5Gb290ZXI+XFxuICAgICAgPC9MYXlvdXQ+XFxuICAgIDwvTGF5b3V0PlxcbiAgKVxcbn1cXG5cXG5jb25zdCBzdHlsZXMgPSB7XFxuICBoZWFkZXI6IHtcXG4gICAgYmFja2dyb3VuZDogJyM3ZGJjZWEnLFxcbiAgICBwYWRkaW5nOiAnMjBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXFxuICB9LFxcbiAgY29udGVudDoge1xcbiAgICBiYWNrZ3JvdW5kOiAnIzEwOGVlOScsXFxuICAgIHBhZGRpbmc6ICc1MHB4IDIwcHgnLFxcbiAgICBjb2xvcjogJyNmZmYnLFxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxcbiAgfSxcXG4gIGZvb3Rlcjoge1xcbiAgICBiYWNrZ3JvdW5kOiAnIzdkYmNlYScsXFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcXG4gICAgY29sb3I6ICcjZmZmJyxcXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcXG4gIH0sXFxuICBhc2lkZToge1xcbiAgICBiYWNrZ3JvdW5kOiAnIzNiYTBlOScsXFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcXG4gICAgY29sb3I6ICcjZmZmJyxcXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxcbiAgfSxcXG59XFxuYGBgXFxuXFxuOjo6XFxuXFxuOjo6ZGVtbyDlt6Yg5LiK5bem5Y+z5LiLIOW4g+WxgFxcblxcbmBgYGpzeFxcbmNvbnN0IEFwcCA9ICgpID0+IHtcXG4gIHJldHVybiAoXFxuICAgIDxMYXlvdXQ+XFxuICAgICAgPExheW91dC5Bc2lkZSBzdHlsZT17c3R5bGVzLmFzaWRlfT7kvqfovrnmoI88L0xheW91dC5Bc2lkZT5cXG4gICAgICA8TGF5b3V0PlxcbiAgICAgICAgPExheW91dC5IZWFkZXIgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9PkxPR088L0xheW91dC5IZWFkZXI+XFxuICAgICAgICA8TGF5b3V0PlxcbiAgICAgICAgICA8TGF5b3V0LkNvbnRlbnQgc3R5bGU9e3N0eWxlcy5jb250ZW50fT7lhoXlrrk8L0xheW91dC5Db250ZW50PlxcbiAgICAgICAgICA8TGF5b3V0LkFzaWRlIHN0eWxlPXtzdHlsZXMuYXNpZGV9PuS+p+i+ueagjzwvTGF5b3V0LkFzaWRlPlxcbiAgICAgICAgPC9MYXlvdXQ+XFxuICAgICAgICA8TGF5b3V0LkZvb3RlciBzdHlsZT17c3R5bGVzLmZvb3Rlcn0+5bC+6YOoPC9MYXlvdXQuRm9vdGVyPlxcbiAgICAgIDwvTGF5b3V0PlxcbiAgICA8L0xheW91dD5cXG4gIClcXG59XFxuXFxuY29uc3Qgc3R5bGVzID0ge1xcbiAgaGVhZGVyOiB7XFxuICAgIGJhY2tncm91bmQ6ICcjN2RiY2VhJyxcXG4gICAgcGFkZGluZzogJzIwcHgnLFxcbiAgICBjb2xvcjogJyNmZmYnLFxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxcbiAgfSxcXG4gIGNvbnRlbnQ6IHtcXG4gICAgYmFja2dyb3VuZDogJyMxMDhlZTknLFxcbiAgICBwYWRkaW5nOiAnNTBweCAyMHB4JyxcXG4gICAgY29sb3I6ICcjZmZmJyxcXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcXG4gIH0sXFxuICBmb290ZXI6IHtcXG4gICAgYmFja2dyb3VuZDogJyM3ZGJjZWEnLFxcbiAgICBwYWRkaW5nOiAnMjBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXFxuICB9LFxcbiAgYXNpZGU6IHtcXG4gICAgYmFja2dyb3VuZDogJyMzYmEwZTknLFxcbiAgICBwYWRkaW5nOiAnMTBweCcsXFxuICAgIGNvbG9yOiAnI2ZmZicsXFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcXG4gIH0sXFxufVxcbmBgYFxcblxcbjo6OlxcblxcbiMjIEF0dHJpYnV0ZXNcXG5cXG4jIyMgTGF5b3V0IOW4g+WxgOWuueWZqFxcblxcbnwg5Y+C5pWwICAgICAgfCDor7TmmI4gICAgICAgICAgIHwg57G75Z6LICAgfCDlj6/pgInlgLwgfCDpu5jorqTlgLwgfFxcbnwgLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0gfCAtLS0tLS0gfCAtLS0tLS0gfFxcbnwgY2xhc3NOYW1lIHwg5a655ZmoIGNsYXNzTmFtZSB8IHN0cmluZyB8IOKAlCAgICAgIHwg4oCUICAgICAgfFxcbnwgc3R5bGUgICAgIHwg5oyH5a6a5qC35byPICAgICAgIHwgb2JqZWN0IHwg4oCUICAgICAgfCDigJQgICAgICB8XFxuXCIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/src/pages/layout/index.md\n",
        )

        /***/
      },

    /***/ './docs/src/pages/layout/index.tsx':
      /*!*****************************************!*\
  !*** ./docs/src/pages/layout/index.tsx ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/markdown */ "./docs/src/components/markdown/index.tsx");\n\n\n/* harmony default export */ __webpack_exports__["default"] = (() => {\n    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], { mdString: __webpack_require__(/*! ./index.md */ "./docs/src/pages/layout/index.md").default });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kb2NzL3NyYy9wYWdlcy9sYXlvdXQvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZG9jcy9zcmMvcGFnZXMvbGF5b3V0L2luZGV4LnRzeD8xOWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFya2Rvd24nXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIDxNYXJrZG93biBtZFN0cmluZz17cmVxdWlyZSgnLi9pbmRleC5tZCcpLmRlZmF1bHR9IC8+XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/src/pages/layout/index.tsx\n',
        )

        /***/
      },
  },
])
