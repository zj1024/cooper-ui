;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    './site/src/components/markdown/index.tsx': function(e, n, s) {
      'use strict'
      var r = s('react'),
        t = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
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
        a = s.n(o),
        d = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        c = s.n(d),
        m = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        l = s.n(m),
        p = s('react-dom'),
        u = s('babel-standalone'),
        v = s('./components/index.ts'),
        g =
          (s('./site/src/components/markdown/style.scss'),
          function(e) {
            var n = e.element,
              t = e.id,
              i = n.desc,
              o = n.code,
              d = n.source,
              m = Object(r.useState)(!1),
              g = l()(m, 2),
              h = g[0],
              j = g[1]
            return (
              (function(e) {
                var n = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(e) {
                    var s = ['context', 'React', 'ReactDOM'],
                      t = [n, r, p]
                    for (var i in e) s.push(i), t.push(e[i])
                    return { args: s, argv: t }
                  })
                  .then(function(n) {
                    var s = n.args,
                      r = n.argv,
                      i = Object(u.transform)(
                        ''
                          .concat(e, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(t, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(i), a()(Function, c()(s)).apply(null, r)
                  })
                  .catch(function(e) {
                    0
                  })
              })(d),
              r.createElement(
                v.Card,
                { shadow: 'always' },
                r.createElement('div', { id: ''.concat(t, '-code'), className: 'p-20' }),
                r.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: i },
                }),
                r.createElement(
                  v.Divider,
                  {
                    onClick: function() {
                      return j(!h)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  r.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    h ? '收起' : '展开',
                    ' ',
                  ),
                ),
                r.createElement('div', {
                  className: 'code',
                  style: { display: h ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: o },
                }),
              )
            )
          }),
        h = function(e) {
          var n = e.codes,
            s = function(e) {
              if (n.hasOwnProperty(e)) {
                var s = n[e]
                setTimeout(function() {
                  var n = document.getElementById(e)
                  p.render(r.createElement(g, { element: s, id: e }), n)
                })
              }
            }
          for (var t in n) s(t)
        }
      setTimeout(function() {
        return i.highlightAll()
      }, 20),
        t.setOptions({
          renderer: new t.Renderer(),
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
              r = e.match(/([^]*)\n?(```[^]+```)/) || [],
              i = r.length ? r[1] : '',
              o = r.length ? r[2] : '',
              a = o.match(/```(.*)\n?([^]+)```/) || [],
              d = t(i),
              c = t(o),
              m = a.length ? a[2] : '',
              l = n.toString(16)
            return (
              (s[l] = { desc: d, code: c, source: m }),
              '<div id="'.concat(l, '" class="codebox"></div>')
            )
          })
        h({ codes: s })
        var o = t(i).replace(/<table>([^]+)<\/table>/, function() {
          var e = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(e, '</div>')
        })
        return r.createElement(
          r.Fragment,
          null,
          r.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: o } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(e, n) {},
    './site/src/pages/divider/index.md': function(e, n, s) {
      'use strict'
      s.r(n),
        (n.default =
          '# Divider 分割线\n\n用于内容之间区分\n\n## 基本用法\n\n:::demo 使用`<Divider />`标签声明组件，`dashed`属性为 true 时虚线显示\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <p>美丽的分割线 Cooper UI</p>\n      <Divider />\n      <p>美丽的分割线 Cooper UI</p>\n      <Divider dashed={true} />\n    </div>\n  )\n}\n```\n\n:::\n\n## 附加文字\n\n:::demo 使用`<Divider />`标签声明组件，`children`放置分割线上的提示文字，`orientation`属性配置文字的位置，提供了`left`、`center`、`right`，默认是 center\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <p>美丽的分割线 Cooper UI</p>\n      <Divider orientation="left">我是有底线的</Divider>\n      <p>美丽的分割线 Cooper UI</p>\n      <Divider>我是有底线的</Divider>\n      <p>美丽的分割线 Cooper UI</p>\n      <Divider orientation="right">我是有底线的</Divider>\n    </div>\n  )\n}\n```\n\n:::\n\n## 纵向分割线\n\n常用于文字之间的分割\n\n:::demo 使用`<Divider />`标签声明组件，`type`属性设置为`vertical`\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <p>\n        美丽的分割线 Cooper UI\n        <Divider type="vertical" />\n        美丽的分割线 Cooper UI\n        <Divider type="vertical" />\n        美丽的分割线 Cooper UI\n      </p>\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n| 参数        | 说明           | 类型    | 可选值                | 默认值     |\n| ----------- | -------------- | ------- | --------------------- | ---------- |\n| className   | 容器 className | string  | -                     | -          |\n| style       | 指定样式       | object  | -                     | -          |\n| dashed      | 图标名称       | boolean | -                     | -          |\n| orientation | 文字方向       | string  | left，center，right   | center     |\n| type        | 类型           | string  | horizontal， vertical | horizontal |\n')
    },
    './site/src/pages/divider/index.tsx': function(e, n, s) {
      'use strict'
      s.r(n)
      var r = s('react'),
        t = s('./site/src/components/markdown/index.tsx')
      n.default = function() {
        return r.createElement(t.a, { mdString: s('./site/src/pages/divider/index.md').default })
      }
    },
  },
])
