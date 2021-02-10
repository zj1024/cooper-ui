;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    './site/src/components/markdown/index.tsx': function(n, e, s) {
      'use strict'
      var t = s('react'),
        i = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        a =
          (s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-markup.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-clike.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-javascript.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-css.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-jsx.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.css'),
          s('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.css'),
          s('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/plugins/show-language/prism-show-language.js'),
          s('./node_modules/_prismjs@1.23.0@prismjs/themes/prism-okaidia.css'),
          s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-tsx.js'),
          s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/construct.js')),
        o = s.n(a),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        c = s.n(l),
        m = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        d = s.n(m),
        p = s('react-dom'),
        u = s('babel-standalone'),
        b = s('./components/index.ts'),
        g =
          (s('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              i = n.id,
              r = e.desc,
              a = e.code,
              l = e.source,
              m = Object(t.useState)(!1),
              g = d()(m, 2),
              v = g[0],
              y = g[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var s = ['context', 'React', 'ReactDOM'],
                      i = [e, t, p]
                    for (var r in n) s.push(r), i.push(n[r])
                    return { args: s, argv: i }
                  })
                  .then(function(e) {
                    var s = e.args,
                      t = e.argv,
                      r = Object(u.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(i, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(r), o()(Function, c()(s)).apply(null, t)
                  })
                  .catch(function(n) {
                    0
                  })
              })(l),
              t.createElement(
                b.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(i, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                t.createElement(
                  b.Divider,
                  {
                    onClick: function() {
                      return y(!v)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  t.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    v ? '收起' : '展开',
                    ' ',
                  ),
                ),
                t.createElement('div', {
                  className: 'code',
                  style: { display: v ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: a },
                }),
              )
            )
          }),
        v = function(n) {
          var e = n.codes,
            s = function(n) {
              if (e.hasOwnProperty(n)) {
                var s = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  p.render(t.createElement(g, { element: s, id: n }), e)
                })
              }
            }
          for (var i in e) s(i)
        }
      setTimeout(function() {
        return r.highlightAll()
      }, 20),
        i.setOptions({
          renderer: new i.Renderer(),
          breaks: !0,
          highlight: function(n, e) {
            return r.highlight(n, r.languages[e], e)
          },
        })
      e.a = function(n) {
        var e = n.mdString,
          s = {},
          r = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = n.match(/([^]*)\n?(```[^]+```)/) || [],
              r = t.length ? t[1] : '',
              a = t.length ? t[2] : '',
              o = a.match(/```(.*)\n?([^]+)```/) || [],
              l = i(r),
              c = i(a),
              m = o.length ? o[2] : '',
              d = e.toString(16)
            return (
              (s[d] = { desc: l, code: c, source: m }),
              '<div id="'.concat(d, '" class="codebox"></div>')
            )
          })
        v({ codes: s })
        var a = i(r).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: a } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/drawer/index.md': function(n, e, s) {
      'use strict'
      s.r(e),
        (e.default =
          "# Drawer 抽屉\n\n从屏幕边缘打开的侧边栏，包含了补充的内容。\n\n## 基本用法\n\n默认从左侧打开，请注意！`Drawer`组件必须要传递`onCancel`属性，功能为关闭 visible，所以你也可以在关闭时做一些逻辑操作，比如弹框确认是否关闭。\n\n:::demo 使用`<Drawer />`标签声明组件，通过`children`设置抽屉内容，`visible`属性控制显示/隐藏，`onCancel`属性控制关闭\n\n```jsx\nconst App = () => {\n  const [visible, setVisible] = React.useState(false)\n\n  // Drawer内的展示内容，无需关注\n  const content = (\n    <div>\n      {[0, 1].map((d, i) => (\n        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>\n          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {\n            return (\n              <div key={`${item}-${index}`} style={styles.item}>\n                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />\n                <span>{item}</span>\n              </div>\n            )\n          })}\n        </section>\n      ))}\n    </div>\n  )\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        open\n      </Button>\n      <Drawer visible={visible} onCancel={() => setVisible(false)}>\n        {content}\n      </Drawer>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: '20px',\n    padding: '20px',\n  },\n}\n```\n\n:::\n\n## 自定义位置\n\n支持上右下左四个方向打开。\n\n:::demo 使用`<Drawer />`标签声明组件，`direction`属性自定义方向，可选值：`left`，`right`，`top`，`bottom`\n\n```jsx\nconst App = () => {\n  {\n    /* 核心逻辑 */\n  }\n  const [visible, setVisible] = React.useState(false)\n\n  // 这部分属于非核心逻辑，无需关注\n  const [direction, setDirection] = React.useState('left')\n  const radioOptions = [\n    { label: 'left', value: 'left' },\n    { label: 'right', value: 'right' },\n    { label: 'top', value: 'top' },\n    { label: 'bottom', value: 'bottom' },\n  ]\n  const handleRadioChange = e => {\n    setDirection(e.target.value)\n  }\n  // Drawer内的展示内容，无需关注\n  const content = (\n    <div>\n      {[0, 1].map((d, i) => (\n        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>\n          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {\n            return (\n              <div key={`${item}-${index}`} style={styles.item}>\n                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />\n                <span>{item}</span>\n              </div>\n            )\n          })}\n        </section>\n      ))}\n    </div>\n  )\n  // 上面属于非核心逻辑，无需关注\n\n  return (\n    <div style={styles.wrapper}>\n      <Radio options={radioOptions} onChange={handleRadioChange} defaultValue=\"left\" />\n      <Button style={styles.ml20} type=\"primary\" onClick={() => setVisible(true)}>\n        open\n      </Button>\n\n      {/* 核心逻辑 */}\n      <Drawer visible={visible} direction={direction} onCancel={() => setVisible(false)}>\n        {content}\n      </Drawer>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: 'flex',\n  },\n  ml20: {\n    marginLeft: '20px',\n  },\n  item: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: '20px',\n    padding: '20px',\n  },\n}\n```\n\n:::\n\n## 自定义蒙层、内容背景颜色\n\n可以取消蒙层，修改内容背景颜色用来淡化 UI 效果\n\n:::demo 使用`<Drawer />`标签声明组件，通过`mask`控制蒙层展示，`maskClosable`蒙层是否可点击关闭。通过`contentBackground`修改内容的背景色。\n\n```jsx\nconst App = () => {\n  const [visible, setVisible] = React.useState(false)\n\n  // Drawer内的展示内容，无需关注\n  const content = (\n    <div>\n      {[0, 1].map((d, i) => (\n        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>\n          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {\n            return (\n              <div key={`${item}-${index}`} style={styles.item}>\n                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />\n                <span>{item}</span>\n              </div>\n            )\n          })}\n        </section>\n      ))}\n      <Button style={{ margin: '10px' }} round type=\"danger\" onClick={() => setVisible(false)}>\n        关闭\n      </Button>\n    </div>\n  )\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        黑色背景，蒙层点击不可关闭\n      </Button>\n      <Drawer\n        visible={visible}\n        onCancel={() => setVisible(false)}\n        maskClosable={false}\n        contentBackground=\"#000\">\n        {content}\n      </Drawer>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: '20px',\n    padding: '20px',\n  },\n}\n```\n\n:::\n\n## 嵌套 Drawer\n\n遇到一些复杂人机交互，则可以嵌套 Drawer 操作。\n\n:::demo 使用`<Drawer />`标签声明组件，`zIndex`属性控制 Drawer 的层级，默认为 1001。嵌套越深，层级数值要越大。如果在 DOM 的结构上按照下面写，层级越深的 Drawer，DOM 越在下，则无需设置 zIndex\n\n```jsx\nconst App = () => {\n  const [visible, setVisible] = React.useState(false)\n  const [insideVisible, setInsideVisible] = React.useState(false)\n\n  // Drawer内的展示内容，无需关注\n  const content = (\n    <div>\n      {[0, 1].map((d, i) => (\n        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>\n          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {\n            return (\n              <div key={`${item}-${index}`} style={styles.item}>\n                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />\n                <span>{item}</span>\n              </div>\n            )\n          })}\n        </section>\n      ))}\n\n      <Button\n        style={{ margin: '10px' }}\n        round\n        type=\"success\"\n        onClick={() => setInsideVisible(true)}>\n        Open Inside Drawer\n      </Button>\n    </div>\n  )\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        嵌套两层的Drawer\n      </Button>\n      <Drawer visible={visible} onCancel={() => setVisible(false)}>\n        {content}\n      </Drawer>\n      <Drawer visible={insideVisible} onCancel={() => setInsideVisible(false)}>\n        Wow! inside Drawer.\n      </Drawer>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: '20px',\n    padding: '20px',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数              | 说明              | 类型            | 可选值                      | 默认值 |\n| ----------------- | ----------------- | --------------- | --------------------------- | ------ |\n| className         | 容器 className    | string          | -                           | -      |\n| style             | 指定样式          | object          | -                           | -      |\n| children          | 内容              | React.ReactNode | -                           | -      |\n| visible           | Drawer 是否可见   | boolean         | -                           | false  |\n| onCancel          | 关闭 Drawer，必填 | () => any       | -                           | -      |\n| mask              | 是否含有蒙层      | boolean         | -                           | true   |\n| maskClosable      | 点击蒙层是否关闭  | boolean         | -                           | true   |\n| destroyOnClose    | 关闭销毁 DOM      | boolean         | -                           | false  |\n| direction         | 打开的位置        | string          | left， right， top， bottom | left   |\n| contentBackground | 内容背景色        | string          | -                           | #fff   |\n| zIndex            | Drawer 层级       | number          | -                           | 1001   |\n")
    },
    './site/src/pages/drawer/index.tsx': function(n, e, s) {
      'use strict'
      s.r(e)
      var t = s('react'),
        i = s('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return t.createElement(i.a, { mdString: s('./site/src/pages/drawer/index.md').default })
      }
    },
  },
])
