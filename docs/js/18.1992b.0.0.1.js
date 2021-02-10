;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    './site/src/components/markdown/index.tsx': function(e, n, t) {
      'use strict'
      var s = t('react'),
        o = t('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        i =
          (t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-markup.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-clike.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-javascript.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-css.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-jsx.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.css'),
          t('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.css'),
          t('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/plugins/show-language/prism-show-language.js'),
          t('./node_modules/_prismjs@1.23.0@prismjs/themes/prism-okaidia.css'),
          t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-tsx.js'),
          t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/construct.js')),
        c = t.n(i),
        p = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        m = t.n(p),
        l = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        a = t.n(l),
        d = t('react-dom'),
        u = t('babel-standalone'),
        v = t('./components/index.ts'),
        g =
          (t('./site/src/components/markdown/style.scss'),
          function(e) {
            var n = e.element,
              o = e.id,
              r = n.desc,
              i = n.code,
              p = n.source,
              l = Object(s.useState)(!1),
              g = a()(l, 2),
              h = g[0],
              j = g[1]
            return (
              (function(e) {
                var n = this
                Promise.resolve()
                  .then(t.bind(null, './components/index.ts'))
                  .then(function(e) {
                    var t = ['context', 'React', 'ReactDOM'],
                      o = [n, s, d]
                    for (var r in e) t.push(r), o.push(e[r])
                    return { args: t, argv: o }
                  })
                  .then(function(n) {
                    var t = n.args,
                      s = n.argv,
                      r = Object(u.transform)(
                        ''
                          .concat(e, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    t.push(r), c()(Function, m()(t)).apply(null, s)
                  })
                  .catch(function(e) {
                    0
                  })
              })(p),
              s.createElement(
                v.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(o, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                s.createElement(
                  v.Divider,
                  {
                    onClick: function() {
                      return j(!h)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    h ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: h ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: i },
                }),
              )
            )
          }),
        h = function(e) {
          var n = e.codes,
            t = function(e) {
              if (n.hasOwnProperty(e)) {
                var t = n[e]
                setTimeout(function() {
                  var n = document.getElementById(e)
                  d.render(s.createElement(g, { element: t, id: e }), n)
                })
              }
            }
          for (var o in n) t(o)
        }
      setTimeout(function() {
        return r.highlightAll()
      }, 20),
        o.setOptions({
          renderer: new o.Renderer(),
          breaks: !0,
          highlight: function(e, n) {
            return r.highlight(e, r.languages[n], n)
          },
        })
      n.a = function(e) {
        var n = e.mdString,
          t = {},
          r = n.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var e = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              n = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = e.match(/([^]*)\n?(```[^]+```)/) || [],
              r = s.length ? s[1] : '',
              i = s.length ? s[2] : '',
              c = i.match(/```(.*)\n?([^]+)```/) || [],
              p = o(r),
              m = o(i),
              l = c.length ? c[2] : '',
              a = n.toString(16)
            return (
              (t[a] = { desc: p, code: m, source: l }),
              '<div id="'.concat(a, '" class="codebox"></div>')
            )
          })
        h({ codes: t })
        var i = o(r).replace(/<table>([^]+)<\/table>/, function() {
          var e = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(e, '</div>')
        })
        return s.createElement(
          s.Fragment,
          null,
          s.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: i } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(e, n) {},
    './site/src/pages/popover/index.md': function(e, n, t) {
      'use strict'
      t.r(n),
        (n.default =
          '# Popover 弹出框\n\n用于在元素边缘显示某些内容。支持 鼠标移入 / 点击 / 右键 触发方式。\n\n## 基本用法\n\n:::demo 使用`<Popover></Popover>`标签声明组件，在标签内写作用到的元素，在`content`属性上设置 popover 上的内容，通过`placement`属性设置 popover 内容的展示位置\n\n```jsx\nconst App = () => {\n  return (\n    <div style={styles.ph100}>\n      <div style={styles.item}>\n        <Popover style={styles.mr10} placement="top" content="这是一段文本">\n          <Button>上</Button>\n        </Popover>\n      </div>\n      <div style={styles.center}>\n        <Popover style={styles.mr10} placement="left" content="这是一段文本">\n          <Button type="info">左</Button>\n        </Popover>\n        <Popover style={styles.right} placement="right" content="这是一段文本">\n          <Button type="success">右</Button>\n        </Popover>\n      </div>\n      <div style={styles.item}>\n        <Popover style={styles.mr10} placement="bottom" content="这是一段文本">\n          <Button type="primary">下</Button>\n        </Popover>\n      </div>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    display: \'flex\',\n    justifyContent: \'center\',\n    margin: \'30px 0\',\n  },\n  center: {\n    display: \'flex\',\n    justifyContent: \'space-between\',\n    margin: \'20px 0\',\n  },\n  ph100: {\n    paddingLeft: \'20%\',\n    paddingRight: \'20%\',\n  },\n}\n```\n\n:::\n\n## 嵌套 dom\n\n:::demo 使用`<Popover></Popover>`标签声明组件，在`content`属性直接使用 jsx\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Popover placement="right" content={<Button>按钮</Button>}>\n        <Button type="info">嵌套一个button</Button>\n      </Popover>\n    </div>\n  )\n}\n```\n\n:::\n\n## 触发方式\n\n:::demo 使用`<Popover></Popover>`标签声明组件，`trigger`属性声明触发方式，支持 hover | click | contextMenu\n\n```jsx\nconst App = () => {\n  return (\n    <div style={styles.wrapper} trigger="hover">\n      <Popover trigger="hover" style={styles.mr10} placement="top" content={\'文本内容\'}>\n        <Button>hover</Button>\n      </Popover>\n\n      <Popover trigger="click" style={styles.mr10} placement="top" content={\'文本内容\'}>\n        <Button type="success">click</Button>\n      </Popover>\n\n      <Popover trigger="contextMenu" placement="top" content={\'文本内容\'}>\n        <Button type="info">右键</Button>\n      </Popover>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    marginTop: \'40px\',\n  },\n  mr10: {\n    marginRight: \'10px\',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明           | 类型            | 可选值                    | 默认值 |\n| --------- | -------------- | --------------- | ------------------------- | ------ |\n| className | 容器 className | string          | -                         | -      |\n| style     | 指定样式       | object          | -                         | -      |\n| placement | 显示位置       | string          | top, bottom, left, right  | top    |\n| trigger   | 触发方式       | string          | hover, click, contextMenu | hover  |\n| content   | 内容           | React.ReactNode | -                         | -      |\n')
    },
    './site/src/pages/popover/index.tsx': function(e, n, t) {
      'use strict'
      t.r(n)
      var s = t('react'),
        o = t('./site/src/components/markdown/index.tsx')
      n.default = function() {
        return s.createElement(o.a, { mdString: t('./site/src/pages/popover/index.md').default })
      }
    },
  },
])
