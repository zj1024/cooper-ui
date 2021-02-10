;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    './site/src/components/markdown/index.tsx': function(e, n, s) {
      'use strict'
      var t = s('react'),
        c = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        i = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        o =
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
        r = s.n(o),
        a = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        d = s.n(a),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        m = s.n(l),
        u = s('react-dom'),
        h = s('babel-standalone'),
        p = s('./components/index.ts'),
        k =
          (s('./site/src/components/markdown/style.scss'),
          function(e) {
            var n = e.element,
              c = e.id,
              i = n.desc,
              o = n.code,
              a = n.source,
              l = Object(t.useState)(!1),
              k = m()(l, 2),
              g = k[0],
              j = k[1]
            return (
              (function(e) {
                var n = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(e) {
                    var s = ['context', 'React', 'ReactDOM'],
                      c = [n, t, u]
                    for (var i in e) s.push(i), c.push(e[i])
                    return { args: s, argv: c }
                  })
                  .then(function(n) {
                    var s = n.args,
                      t = n.argv,
                      i = Object(h.transform)(
                        ''
                          .concat(e, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(c, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(i), r()(Function, d()(s)).apply(null, t)
                  })
                  .catch(function(e) {
                    0
                  })
              })(a),
              t.createElement(
                p.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(c, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: i },
                }),
                t.createElement(
                  p.Divider,
                  {
                    onClick: function() {
                      return j(!g)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  t.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    g ? '收起' : '展开',
                    ' ',
                  ),
                ),
                t.createElement('div', {
                  className: 'code',
                  style: { display: g ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: o },
                }),
              )
            )
          }),
        g = function(e) {
          var n = e.codes,
            s = function(e) {
              if (n.hasOwnProperty(e)) {
                var s = n[e]
                setTimeout(function() {
                  var n = document.getElementById(e)
                  u.render(t.createElement(k, { element: s, id: e }), n)
                })
              }
            }
          for (var c in n) s(c)
        }
      setTimeout(function() {
        return i.highlightAll()
      }, 20),
        c.setOptions({
          renderer: new c.Renderer(),
          breaks: !0,
          highlight: function(e, n) {
            return i.highlight(e, i.languages[n], n)
          },
        })
      n.a = function(e) {
        var n = e.mdString,
          s = {},
          i = n.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var e = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              n = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = e.match(/([^]*)\n?(```[^]+```)/) || [],
              i = t.length ? t[1] : '',
              o = t.length ? t[2] : '',
              r = o.match(/```(.*)\n?([^]+)```/) || [],
              a = c(i),
              d = c(o),
              l = r.length ? r[2] : '',
              m = n.toString(16)
            return (
              (s[m] = { desc: a, code: d, source: l }),
              '<div id="'.concat(m, '" class="codebox"></div>')
            )
          })
        g({ codes: s })
        var o = c(i).replace(/<table>([^]+)<\/table>/, function() {
          var e = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(e, '</div>')
        })
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: o } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(e, n) {},
    './site/src/pages/switch/index.md': function(e, n, s) {
      'use strict'
      s.r(n),
        (n.default =
          '# Switch 开关\n\n## 基本用法\n\n:::demo 使用`<Switch />`标签声明组件，通过`checked`属性设置开关的状态，`onClick`属性设置状态改变函数\n\n```jsx\nconst App = () => {\n  const [checked, setChecked] = React.useState(false)\n  return <Switch checked={checked} onClick={() => setChecked(!checked)}></Switch>\n}\n```\n\n:::\n\n## 自定义内容和大小\n\n可以自定义开关状态显示的内容和开关的大小\n\n:::demo 使用`<Switch />`标签声明组件，通过`size`属性设置开关的大小，`checkedChildren`属性设置开关打开时的内容，`unCheckedChildren`属性设置开关关闭时显示的内容\n\n```jsx\nconst App = () => {\n  const [checked, setChecked] = React.useState(false)\n  return (\n    <div style={styles.wrapper}>\n      <div>\n        <Switch checked={checked} onClick={() => setChecked(!checked)} size="small" />\n      </div>\n      <div>\n        <Switch checked={checked} onClick={() => setChecked(!checked)} />\n      </div>\n      <div>\n        <Switch\n          checked={checked}\n          onClick={() => setChecked(!checked)}\n          checkedChildren={<Icon name="close" />}\n          unCheckedChildren={<Icon name="eyes" style={{ color: \'black\' }} />}\n        />\n      </div>\n      <div>\n        <Switch\n          checked={checked}\n          onClick={() => setChecked(!checked)}\n          size="small"\n          checkedChildren="开"\n          unCheckedChildren="关"></Switch>\n      </div>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: \'flex\',\n    justifyContent: \'space-between\',\n  },\n}\n```\n\n:::\n\n## 加载和禁用状态\n\n:::demo 使用`<Switch />`标签声明组件，通过`loading`属性设置加载状态，`disabled`属性设置禁用\n\n```jsx\nconst App = () => {\n  const [statusWithLoading, setStatusWithLoading] = React.useState(false)\n  const [loading, setLoading] = React.useState(false)\n\n  const onClick = () => {\n    setLoading(true)\n    setTimeout(() => {\n      setStatusWithLoading(!statusWithLoading)\n      setLoading(false)\n    }, 500)\n  }\n  return (\n    <div>\n      <Switch checked={false} disabled={true}></Switch>\n      <Switch\n        style={styles.item}\n        onClick={onClick}\n        checked={statusWithLoading}\n        loading={loading}></Switch>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginLeft: \'20px\',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数              | 说明           | 类型            | 可选值 | 默认值 |\n| ----------------- | -------------- | --------------- | ------ | ------ |\n| className         | 容器 className | string          | -      | -      |\n| style             | 指定样式       | object          | -      | -      |\n| checked           | 开关状态       | boolean         | -      | false  |\n| checkedChildren   | 开启状态内容   | React.ReactNode | -      | -      |\n| unCheckedChildren | 关闭状态内容   | React.ReactNode | -      | -      |\n| size              | 开关大小       | string          | -      | -      |\n| loading           | 加载状态       | boolean         | -      | false  |\n| disabled          | svg 字符串     | boolean         | -      | false  |\n| onClick           | 点击函数       | () => any       | -      | -      |\n')
    },
    './site/src/pages/switch/index.tsx': function(e, n, s) {
      'use strict'
      s.r(n)
      var t = s('react'),
        c = s('./site/src/components/markdown/index.tsx')
      n.default = function() {
        return t.createElement(c.a, { mdString: s('./site/src/pages/switch/index.md').default })
      }
    },
  },
])
