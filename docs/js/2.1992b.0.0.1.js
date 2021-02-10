;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './site/src/components/markdown/index.tsx': function(e, n, s) {
      'use strict'
      var t = s('react'),
        r = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        o = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
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
        i = s.n(a),
        c = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        m = s.n(c),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        d = s.n(l),
        p = s('react-dom'),
        u = s('babel-standalone'),
        g = s('./components/index.ts'),
        h =
          (s('./site/src/components/markdown/style.scss'),
          function(e) {
            var n = e.element,
              r = e.id,
              o = n.desc,
              a = n.code,
              c = n.source,
              l = Object(t.useState)(!1),
              h = d()(l, 2),
              j = h[0],
              b = h[1]
            return (
              (function(e) {
                var n = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(e) {
                    var s = ['context', 'React', 'ReactDOM'],
                      r = [n, t, p]
                    for (var o in e) s.push(o), r.push(e[o])
                    return { args: s, argv: r }
                  })
                  .then(function(n) {
                    var s = n.args,
                      t = n.argv,
                      o = Object(u.transform)(
                        ''
                          .concat(e, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(r, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(o), i()(Function, m()(s)).apply(null, t)
                  })
                  .catch(function(e) {
                    0
                  })
              })(c),
              t.createElement(
                g.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(r, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: o },
                }),
                t.createElement(
                  g.Divider,
                  {
                    onClick: function() {
                      return b(!j)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  t.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    j ? '收起' : '展开',
                    ' ',
                  ),
                ),
                t.createElement('div', {
                  className: 'code',
                  style: { display: j ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: a },
                }),
              )
            )
          }),
        j = function(e) {
          var n = e.codes,
            s = function(e) {
              if (n.hasOwnProperty(e)) {
                var s = n[e]
                setTimeout(function() {
                  var n = document.getElementById(e)
                  p.render(t.createElement(h, { element: s, id: e }), n)
                })
              }
            }
          for (var r in n) s(r)
        }
      setTimeout(function() {
        return o.highlightAll()
      }, 20),
        r.setOptions({
          renderer: new r.Renderer(),
          breaks: !0,
          highlight: function(e, n) {
            return o.highlight(e, o.languages[n], n)
          },
        })
      n.a = function(e) {
        var n = e.mdString,
          s = {},
          o = n.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var e = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              n = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = e.match(/([^]*)\n?(```[^]+```)/) || [],
              o = t.length ? t[1] : '',
              a = t.length ? t[2] : '',
              i = a.match(/```(.*)\n?([^]+)```/) || [],
              c = r(o),
              m = r(a),
              l = i.length ? i[2] : '',
              d = n.toString(16)
            return (
              (s[d] = { desc: c, code: m, source: l }),
              '<div id="'.concat(d, '" class="codebox"></div>')
            )
          })
        j({ codes: s })
        var a = r(o).replace(/<table>([^]+)<\/table>/, function() {
          var e = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(e, '</div>')
        })
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: a } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(e, n) {},
    './site/src/pages/back-top/index.md': function(e, n, s) {
      'use strict'
      s.r(n),
        (n.default =
          "# BackTop 回到顶部\n\n页面高度过高可以一键回到顶部\n\n## 基本用法\n\n:::demo 使用`<BackTop />`标签声明组件，通过`target`属性设置滚动容器对应的 DOM，`animat`属性控制显示/隐藏时的动画\n\n```jsx\nconst App = () => {\n  const handleTarget = () => document.querySelector('.main')\n\n  return (\n    <div>\n      <p>向下滚动</p>\n      <BackTop target={handleTarget} />\n      <BackTop style={{ bottom: '100px' }} animat={false} target={handleTarget} />\n    </div>\n  )\n}\n```\n\n:::\n\n## 自定义内容\n\n:::demo 使用`<BackTop />`标签声明组件，通过`children`设置自定义内容\n\n```jsx\nconst App = () => {\n  const handleTarget = () => document.querySelector('.main')\n\n  return (\n    <div>\n      <p>向下滚动</p>\n      <BackTop style={{ bottom: '150px' }} target={handleTarget}>\n        <Icon name=\"arrow-up\" />\n      </BackTop>\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n| 参数             | 说明                                   | 类型            | 可选值       | 默认值       |\n| ---------------- | -------------------------------------- | --------------- | ------------ | ------------ |\n| className        | 容器 className                         | string          | -            | -            |\n| style            | 指定样式                               | object          | -            | -            |\n| children         | 自定义内容                             | React.ReactNode | -            | -            |\n| behavior         | 回到顶部行为                           | string          | smooth，auto | smooth       |\n| visibilityHeight | 距离底部多少高度显示                   | number          | -            | 400          |\n| animat           | 显示/隐藏动画                          | boolean         | -            | true         |\n| target           | 需要监听滚动容器的 DOM，函数，返回 DOM | () => targetDOM | -            | () => window |\n")
    },
    './site/src/pages/back-top/index.tsx': function(e, n, s) {
      'use strict'
      s.r(n)
      var t = s('react'),
        r = s('./site/src/components/markdown/index.tsx')
      n.default = function() {
        return t.createElement(r.a, { mdString: s('./site/src/pages/back-top/index.md').default })
      }
    },
  },
])
