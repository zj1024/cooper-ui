;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    './site/src/components/markdown/index.tsx': function(n, e, t) {
      'use strict'
      var s = t('react'),
        o = t('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        a =
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
        c = t.n(a),
        d = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        i = t.n(d),
        l = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        u = t.n(l),
        m = t('react-dom'),
        p = t('babel-standalone'),
        y = t('./components/index.ts'),
        g =
          (t('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              o = n.id,
              r = e.desc,
              a = e.code,
              d = e.source,
              l = Object(s.useState)(!1),
              g = u()(l, 2),
              f = g[0],
              b = g[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(t.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var t = ['context', 'React', 'ReactDOM'],
                      o = [e, s, m]
                    for (var r in n) t.push(r), o.push(n[r])
                    return { args: t, argv: o }
                  })
                  .then(function(e) {
                    var t = e.args,
                      s = e.argv,
                      r = Object(p.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    t.push(r), c()(Function, i()(t)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(d),
              s.createElement(
                y.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(o, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                s.createElement(
                  y.Divider,
                  {
                    onClick: function() {
                      return b(!f)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    f ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: f ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: a },
                }),
              )
            )
          }),
        f = function(n) {
          var e = n.codes,
            t = function(n) {
              if (e.hasOwnProperty(n)) {
                var t = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  m.render(s.createElement(g, { element: t, id: n }), e)
                })
              }
            }
          for (var o in e) t(o)
        }
      setTimeout(function() {
        return r.highlightAll()
      }, 20),
        o.setOptions({
          renderer: new o.Renderer(),
          breaks: !0,
          highlight: function(n, e) {
            return r.highlight(n, r.languages[e], e)
          },
        })
      e.a = function(n) {
        var e = n.mdString,
          t = {},
          r = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = n.match(/([^]*)\n?(```[^]+```)/) || [],
              r = s.length ? s[1] : '',
              a = s.length ? s[2] : '',
              c = a.match(/```(.*)\n?([^]+)```/) || [],
              d = o(r),
              i = o(a),
              l = c.length ? c[2] : '',
              u = e.toString(16)
            return (
              (t[u] = { desc: d, code: i, source: l }),
              '<div id="'.concat(u, '" class="codebox"></div>')
            )
          })
        f({ codes: t })
        var a = o(r).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return s.createElement(
          s.Fragment,
          null,
          s.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: a } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/layout/index.md': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default =
          "# Layout 布局\n\n快速创建页面常用布局\n\n## 基础布局\n\n:::demo 上中下布局\n\n```jsx\nconst App = () => {\n  return (\n    <Layout>\n      <Layout.Header style={styles.header}>LOGO</Layout.Header>\n      <Layout.Content style={styles.content}>内容</Layout.Content>\n      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\n    </Layout>\n  )\n}\n\nconst styles = {\n  header: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  content: {\n    background: '#108ee9',\n    padding: '50px 20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  footer: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n}\n```\n\n:::\n\n:::demo 上 左右 下布局\n\n```jsx\nconst App = () => {\n  return (\n    <Layout>\n      <Layout.Header style={styles.header}>LOGO</Layout.Header>\n      <Layout>\n        <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\n        <Layout.Content style={styles.content}>内容</Layout.Content>\n      </Layout>\n      <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\n    </Layout>\n  )\n}\n\nconst styles = {\n  header: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  content: {\n    background: '#108ee9',\n    padding: '50px 20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  footer: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  aside: {\n    background: '#3ba0e9',\n    padding: '10px',\n    color: '#fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n}\n```\n\n:::\n\n:::demo 左 上中下 布局\n\n```jsx\nconst App = () => {\n  return (\n    <Layout>\n      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\n      <Layout>\n        <Layout.Header style={styles.header}>LOGO</Layout.Header>\n        <Layout.Content style={styles.content}>内容</Layout.Content>\n        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\n      </Layout>\n    </Layout>\n  )\n}\n\nconst styles = {\n  header: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  content: {\n    background: '#108ee9',\n    padding: '50px 20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  footer: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  aside: {\n    background: '#3ba0e9',\n    padding: '10px',\n    color: '#fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n}\n```\n\n:::\n\n:::demo 左 上左右下 布局\n\n```jsx\nconst App = () => {\n  return (\n    <Layout>\n      <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\n      <Layout>\n        <Layout.Header style={styles.header}>LOGO</Layout.Header>\n        <Layout>\n          <Layout.Content style={styles.content}>内容</Layout.Content>\n          <Layout.Aside style={styles.aside}>侧边栏</Layout.Aside>\n        </Layout>\n        <Layout.Footer style={styles.footer}>尾部</Layout.Footer>\n      </Layout>\n    </Layout>\n  )\n}\n\nconst styles = {\n  header: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  content: {\n    background: '#108ee9',\n    padding: '50px 20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  footer: {\n    background: '#7dbcea',\n    padding: '20px',\n    color: '#fff',\n    textAlign: 'center',\n  },\n  aside: {\n    background: '#3ba0e9',\n    padding: '10px',\n    color: '#fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n### Layout 布局容器\n\n| 参数      | 说明           | 类型   | 可选值 | 默认值 |\n| --------- | -------------- | ------ | ------ | ------ |\n| className | 容器 className | string | -      | -      |\n| style     | 指定样式       | object | -      | -      |\n")
    },
    './site/src/pages/layout/index.tsx': function(n, e, t) {
      'use strict'
      t.r(e)
      var s = t('react'),
        o = t('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return s.createElement(o.a, { mdString: t('./site/src/pages/layout/index.md').default })
      }
    },
  },
])
