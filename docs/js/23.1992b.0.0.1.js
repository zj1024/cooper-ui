;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    './site/src/components/markdown/index.tsx': function(e, n, s) {
      'use strict'
      var t = s('react'),
        r = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        a = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
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
        i = s.n(o),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        m = s.n(l),
        c = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        d = s.n(c),
        u = s('react-dom'),
        p = s('babel-standalone'),
        g = s('./components/index.ts'),
        j =
          (s('./site/src/components/markdown/style.scss'),
          function(e) {
            var n = e.element,
              r = e.id,
              a = n.desc,
              o = n.code,
              l = n.source,
              c = Object(t.useState)(!1),
              j = d()(c, 2),
              v = j[0],
              b = j[1]
            return (
              (function(e) {
                var n = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(e) {
                    var s = ['context', 'React', 'ReactDOM'],
                      r = [n, t, u]
                    for (var a in e) s.push(a), r.push(e[a])
                    return { args: s, argv: r }
                  })
                  .then(function(n) {
                    var s = n.args,
                      t = n.argv,
                      a = Object(p.transform)(
                        ''
                          .concat(e, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(r, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(a), i()(Function, m()(s)).apply(null, t)
                  })
                  .catch(function(e) {
                    0
                  })
              })(l),
              t.createElement(
                g.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(r, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: a },
                }),
                t.createElement(
                  g.Divider,
                  {
                    onClick: function() {
                      return b(!v)
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
                  dangerouslySetInnerHTML: { __html: o },
                }),
              )
            )
          }),
        v = function(e) {
          var n = e.codes,
            s = function(e) {
              if (n.hasOwnProperty(e)) {
                var s = n[e]
                setTimeout(function() {
                  var n = document.getElementById(e)
                  u.render(t.createElement(j, { element: s, id: e }), n)
                })
              }
            }
          for (var r in n) s(r)
        }
      setTimeout(function() {
        return a.highlightAll()
      }, 20),
        r.setOptions({
          renderer: new r.Renderer(),
          breaks: !0,
          highlight: function(e, n) {
            return a.highlight(e, a.languages[n], n)
          },
        })
      n.a = function(e) {
        var n = e.mdString,
          s = {},
          a = n.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var e = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              n = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = e.match(/([^]*)\n?(```[^]+```)/) || [],
              a = t.length ? t[1] : '',
              o = t.length ? t[2] : '',
              i = o.match(/```(.*)\n?([^]+)```/) || [],
              l = r(a),
              m = r(o),
              c = i.length ? i[2] : '',
              d = n.toString(16)
            return (
              (s[d] = { desc: l, code: m, source: c }),
              '<div id="'.concat(d, '" class="codebox"></div>')
            )
          })
        v({ codes: s })
        var o = r(a).replace(/<table>([^]+)<\/table>/, function() {
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
    './site/src/pages/skeleton/index.md': function(e, n, s) {
      'use strict'
      s.r(n),
        (n.default =
          '# Skeleton 骨架屏\n\n组件需要的数据或许无法立即获取时显示的占位，使用骨架屏来提升用户观感上的表现。\n\n## 基本用法\n\n使用 Skeleton 来包裹你要加载的内容\n\n:::demo 使用`<Skeleton />`标签声明组件，通过`loading`属性设置显示或隐藏\n\n```jsx\nconst App = () => {\n  return <Skeleton loading={true}>内容</Skeleton>\n}\n```\n\n:::\n\n## 自定义配置项\n\n:::demo 使用`<Skeleton />`标签声明组件，通过`avatar`、`avatarShape`、`avatarSize`设置头像占位。通过`title`控制较高的占位。`row`控制显示占位行数。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Skeleton\n        loading={true}\n        avatar={true}\n        avatarShape="square"\n        avatarSize="50px"\n        title={true}\n        row={1}>\n        内容\n      </Skeleton>\n\n      <Skeleton\n        loading={true}\n        avatar={true}\n        title={false}\n        row={3}\n        animat={false}\n        style={{ marginTop: \'50px\' }}>\n        内容\n      </Skeleton>\n\n      <Skeleton\n        loading={true}\n        avatar={true}\n        avatarShape="square"\n        avatarSize="50px"\n        title={true}\n        row={1}\n        style={{ marginTop: \'50px\' }}>\n        内容\n      </Skeleton>\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n| 参数        | 说明           | 类型    | 可选值       | 默认值 |\n| ----------- | -------------- | ------- | ------------ | ------ |\n| className   | 容器 className | string  | -            | -      |\n| style       | 指定样式       | object  | -            | -      |\n| loading     | 显示/隐藏      | boolean | -            | -      |\n| row         | 占位行数       | number  | -            | 4      |\n| avatar      | 头像占位       | boolean | -            | false  |\n| avatarShape | 头像占位形状   | number  | round/square | round  |\n| avatarSize  | 头像占位大小   | string  | -            | 32px   |\n| title       | 标题占位       | boolean | -            | true   |\n| animat      | 动画           | boolean | -            | true   |\n')
    },
    './site/src/pages/skeleton/index.tsx': function(e, n, s) {
      'use strict'
      s.r(n)
      var t = s('react'),
        r = s('./site/src/components/markdown/index.tsx')
      n.default = function() {
        return t.createElement(r.a, { mdString: s('./site/src/pages/skeleton/index.md').default })
      }
    },
  },
])
