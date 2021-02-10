;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    './site/src/components/markdown/index.tsx': function(n, e, s) {
      'use strict'
      var t = s('react'),
        o = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
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
        m = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        c = s.n(m),
        l = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        u = s.n(l),
        p = s('react-dom'),
        d = s('babel-standalone'),
        g = s('./components/index.ts'),
        j =
          (s('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              o = n.id,
              r = e.desc,
              i = e.code,
              m = e.source,
              l = Object(t.useState)(!1),
              j = u()(l, 2),
              y = j[0],
              h = j[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(s.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var s = ['context', 'React', 'ReactDOM'],
                      o = [e, t, p]
                    for (var r in n) s.push(r), o.push(n[r])
                    return { args: s, argv: o }
                  })
                  .then(function(e) {
                    var s = e.args,
                      t = e.argv,
                      r = Object(d.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(r), a()(Function, c()(s)).apply(null, t)
                  })
                  .catch(function(n) {
                    0
                  })
              })(m),
              t.createElement(
                g.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(o, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                t.createElement(
                  g.Divider,
                  {
                    onClick: function() {
                      return h(!y)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  t.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    y ? '收起' : '展开',
                    ' ',
                  ),
                ),
                t.createElement('div', {
                  className: 'code',
                  style: { display: y ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: i },
                }),
              )
            )
          }),
        y = function(n) {
          var e = n.codes,
            s = function(n) {
              if (e.hasOwnProperty(n)) {
                var s = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  p.render(t.createElement(j, { element: s, id: n }), e)
                })
              }
            }
          for (var o in e) s(o)
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
          s = {},
          r = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              t = n.match(/([^]*)\n?(```[^]+```)/) || [],
              r = t.length ? t[1] : '',
              i = t.length ? t[2] : '',
              a = i.match(/```(.*)\n?([^]+)```/) || [],
              m = o(r),
              c = o(i),
              l = a.length ? a[2] : '',
              u = e.toString(16)
            return (
              (s[u] = { desc: m, code: c, source: l }),
              '<div id="'.concat(u, '" class="codebox"></div>')
            )
          })
        y({ codes: s })
        var i = o(r).replace(/<table>([^]+)<\/table>/, function() {
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
    './site/src/pages/message/index.md': function(n, e, s) {
      'use strict'
      s.r(e),
        (e.default =
          "# Message 消息提示\n\n全局展示操作反馈信息，包括成功、失败、警告等类型信息。顶部或底部居中显示，是一种不打断用户操作的轻量级提示方式。\n\n该组件为 Function API 用法。\n\n## 基础用法\n\nMessage 函数直接调用，通过参数配置。\n\n:::demo 通过 Function API`Message`函数调用。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button\n        style={styles.item}\n        type=\"primary\"\n        onClick={() => {\n          Message({\n            message: '消息提示',\n          })\n        }}>\n        默认Message\n      </Button>\n\n      <Button\n        style={styles.item}\n        type=\"primary\"\n        onClick={() => {\n          Message({\n            message: '消息提示',\n            placement: 'bottom',\n          })\n        }}>\n        底部展示\n      </Button>\n\n      <Button\n        style={styles.item}\n        type=\"success\"\n        onClick={() => {\n          Message({\n            message: '消息提示',\n            type: 'success',\n          })\n        }}>\n        底部展示\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: '15px',\n  },\n}\n```\n\n:::\n\n## 常驻展示与可取消\n\n消息可以停留在页面上直到用户点击取消\n\n:::demo 通过 Function API`Message`函数调用。`duration`参数配置为 0 则为常驻，从用户体验角度，请设置`showClose`为 true 让用户可关闭\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          Message({\n            message: '消息提示',\n            duration: 0,\n            showClose: true,\n          })\n        }}>\n        常驻可关闭\n      </Button>\n    </div>\n  )\n}\n```\n\n:::\n\n## Message API\n\n通过函数方式调用 Message， 提供了`success`、`info`、`error`、`warning`接口。\n\n### API 调用\n\n:::demo `Message[type](options)`方法触发，其中 type 为上述接口。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button\n        style={styles.item}\n        type=\"info\"\n        onClick={() => {\n          Message.info({ message: '消息提示' })\n        }}>\n        info\n      </Button>\n\n      <Button\n        style={styles.item}\n        type=\"success\"\n        onClick={() => {\n          Message.success({ message: '消息提示' })\n        }}>\n        success\n      </Button>\n\n      <Button\n        style={styles.item}\n        type=\"warning\"\n        onClick={() => {\n          Message.warning({ message: '消息提示' })\n        }}>\n        warning\n      </Button>\n\n      <Button\n        style={styles.item}\n        type=\"danger\"\n        onClick={() => {\n          Message.error({ message: '消息提示' })\n        }}>\n        error\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: '15px',\n  },\n}\n```\n\n:::\n\n## Options\n\n### Message\n\n| 参数      | 说明             | 类型            | 可选值                        | 默认值 |\n| --------- | ---------------- | --------------- | ----------------------------- | ------ |\n| className | 容器 className   | string          | -                             | -      |\n| style     | 指定样式         | object          | -                             | -      |\n| type      | 组件主题         | string          | success，info，error，warning | info   |\n| message   | 信息内容         | React.ReactNode | -                             | -      |\n| showClose | 显示可关闭按钮   | boolean         | -                             | false  |\n| placement | 组件位置         | string          | top，bottom                   | top    |\n| duration  | 显示多少时间关闭 | number          | -                             | 3000   |\n\n### Message API\n\n| 参数      | 说明             | 类型            | 可选值      | 默认值 |\n| --------- | ---------------- | --------------- | ----------- | ------ |\n| className | 容器 className   | string          | -           | -      |\n| style     | 指定样式         | object          | -           | -      |\n| message   | 信息内容         | React.ReactNode | -           | -      |\n| showClose | 显示可关闭按钮   | boolean         | -           | false  |\n| placement | 组件位置         | string          | top，bottom | top    |\n| duration  | 显示多少时间关闭 | number          | -           | 3000   |\n")
    },
    './site/src/pages/message/index.tsx': function(n, e, s) {
      'use strict'
      s.r(e)
      var t = s('react'),
        o = s('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return t.createElement(o.a, { mdString: s('./site/src/pages/message/index.md').default })
      }
    },
  },
])
