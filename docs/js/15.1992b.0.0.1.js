;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    './site/src/components/markdown/index.tsx': function(n, e, s) {
      'use strict'
      var t = s('react'),
        r = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        o = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        i =
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
        a = s.n(i),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        d = s.n(l),
        c = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        m = s.n(c),
        p = s('react-dom'),
        u = s('babel-standalone'),
        g = s('./components/index.ts'),
        b =
          (s('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              r = n.id,
              o = e.desc,
              i = e.code,
              l = e.source,
              c = Object(t.useState)(!1),
              b = m()(c, 2),
              h = b[0],
              j = b[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var s = ['context', 'React', 'ReactDOM'],
                      r = [e, t, p]
                    for (var o in n) s.push(o), r.push(n[o])
                    return { args: s, argv: r }
                  })
                  .then(function(e) {
                    var s = e.args,
                      t = e.argv,
                      o = Object(u.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(r, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(o), a()(Function, d()(s)).apply(null, t)
                  })
                  .catch(function(n) {
                    0
                  })
              })(l),
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
                      return j(!h)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  t.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    h ? '收起' : '展开',
                    ' ',
                  ),
                ),
                t.createElement('div', {
                  className: 'code',
                  style: { display: h ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: i },
                }),
              )
            )
          }),
        h = function(n) {
          var e = n.codes,
            s = function(n) {
              if (e.hasOwnProperty(n)) {
                var s = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  p.render(t.createElement(b, { element: s, id: n }), e)
                })
              }
            }
          for (var r in e) s(r)
        }
      setTimeout(function() {
        return o.highlightAll()
      }, 20),
        r.setOptions({
          renderer: new r.Renderer(),
          breaks: !0,
          highlight: function(n, e) {
            return o.highlight(n, o.languages[e], e)
          },
        })
      e.a = function(n) {
        var e = n.mdString,
          s = {},
          o = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = n.match(/([^]*)\n?(```[^]+```)/) || [],
              o = t.length ? t[1] : '',
              i = t.length ? t[2] : '',
              a = i.match(/```(.*)\n?([^]+)```/) || [],
              l = r(o),
              d = r(i),
              c = a.length ? a[2] : '',
              m = e.toString(16)
            return (
              (s[m] = { desc: l, code: d, source: c }),
              '<div id="'.concat(m, '" class="codebox"></div>')
            )
          })
        h({ codes: s })
        var i = r(o).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: i } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/loading/index.md': function(n, e, s) {
      'use strict'
      s.r(e),
        (e.default =
          "# Loading 加载\n\n加载数据时给用户反馈。\n\n## 基本用法\n\n提供两种加载类型，light 和 dark 类型\n\n:::demo 使用`<Loading />`标签声明组件，通过`type`属性设置对应的类型\n\n```jsx\nconst App = () => {\n  return (\n    <div style={styles.wrapper}>\n      <Loading visible={true}>\n        <div style={styles.box}>数据加载中......</div>\n      </Loading>\n      <Loading visible={true} type=\"dark\">\n        <div style={styles.box}>数据加载中......</div>\n      </Loading>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: 'flex',\n    justifyContent: 'space-around',\n    margin: '20px 0',\n  },\n  box: {\n    width: '200px',\n    height: '200px',\n    boxShadow: '0 5px 15px 0 rgba(27, 27, 78, 0.1)',\n  },\n}\n```\n\n:::\n\n## 自定义文本和 icon 的颜色\n\n支持在 icon 下显示加载文案，支持自定义 icon 的颜色\n\n:::demo 使用`<Loading />`标签声明组件，通过`text`属性设置加载文案，通过`color`属性设置 icon 颜色\n\n```jsx\nconst App = () => {\n  return (\n    <div style={styles.wrapper}>\n      <Loading visible={true} type=\"light\" text=\"加载中...\" color=\"pink\">\n        <div style={styles.box}>数据加载中......</div>\n      </Loading>\n      <Loading visible={true} type=\"dark\" text=\"数据正在努力赶来\" color=\"orange\">\n        <div style={styles.box}>数据加载中......</div>\n      </Loading>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: 'flex',\n    justifyContent: 'space-around',\n    margin: '20px 0',\n  },\n  box: {\n    width: '300px',\n    height: '200px',\n    boxShadow: '0 5px 15px 0 rgba(27, 27, 78, 0.1)',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明                 | 类型    | 可选值          | 默认值 |\n| --------- | -------------------- | ------- | --------------- | ------ |\n| className | 容器 className       | string  | -               | -      |\n| style     | 指定样式             | object  | -               | -      |\n| visible   | 显示或隐藏           | boolean | -               | false  |\n| type      | 加载类型             | string  | light, dark     | light  |\n| color     | 加载中 icon 颜色     | string  | -               | -      |\n| text      | 加载 icon 下面的文案 | string  | React.ReactNode | light  |\n")
    },
    './site/src/pages/loading/index.tsx': function(n, e, s) {
      'use strict'
      s.r(e)
      var t = s('react'),
        r = s('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return t.createElement(r.a, { mdString: s('./site/src/pages/loading/index.md').default })
      }
    },
  },
])
