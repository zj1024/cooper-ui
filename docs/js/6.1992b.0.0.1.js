;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    './site/src/components/markdown/index.tsx': function(n, e, s) {
      'use strict'
      var t = s('react'),
        o = s('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = s('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        l =
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
        i = s.n(l),
        a = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        c = s.n(a),
        m = s('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        d = s.n(m),
        p = s('react-dom'),
        u = s('babel-standalone'),
        y = s('./components/index.ts'),
        v =
          (s('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              o = n.id,
              r = e.desc,
              l = e.code,
              a = e.source,
              m = Object(t.useState)(!1),
              v = d()(m, 2),
              h = v[0],
              g = v[1]
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
                      r = Object(u.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    s.push(r), i()(Function, c()(s)).apply(null, t)
                  })
                  .catch(function(n) {
                    0
                  })
              })(a),
              t.createElement(
                y.Card,
                { shadow: 'always' },
                t.createElement('div', { id: ''.concat(o, '-code'), className: 'p-20' }),
                t.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                t.createElement(
                  y.Divider,
                  {
                    onClick: function() {
                      return g(!h)
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
                  dangerouslySetInnerHTML: { __html: l },
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
                  p.render(t.createElement(v, { element: s, id: n }), e)
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
              l = t.length ? t[2] : '',
              i = l.match(/```(.*)\n?([^]+)```/) || [],
              a = o(r),
              c = o(l),
              m = i.length ? i[2] : '',
              d = e.toString(16)
            return (
              (s[d] = { desc: a, code: c, source: m }),
              '<div id="'.concat(d, '" class="codebox"></div>')
            )
          })
        h({ codes: s })
        var l = o(r).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: l } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/carousel/index.md': function(n, e, s) {
      'use strict'
      s.r(e),
        (e.default =
          "# Carousel 走马灯\n\n在指定的区域，承载更多的内容，分屏输出更多的内容。\n\n## 优势\n\n- 提供了指示器控制，左右箭头按钮显示控制，自动轮播控制，轮播时间控制。\n- 使用`CSS Transition`动画开启 GPU 来获得更高的流畅度。\n- 最后一页翻到第一页与第一页回退到最后一页的平滑滚动。\n- 简单 API，仅使用`<Carousel>你的内容...</Carousel>`就可以创建一个走马灯。\n\n## 基本用法\n\n简单示例，不需要传任何参数，默认就展示了指示器，鼠标移上去显示的箭头控制和每隔五秒钟的自动播放。\n\n:::demo 使用`<Carousel />`标签声明组件，直接在`children`中放内容即可\n\n```jsx\nconst App = () => {\n  return (\n    <Carousel>\n      <div style={styles.item}>\n        <span style={styles.white}>1</span>\n      </div>\n      <div style={styles.item}>\n        <span style={styles.pink}>2</span>\n      </div>\n      <div style={styles.item}>\n        <span style={styles.yellow}>3</span>\n      </div>\n    </Carousel>\n  )\n}\n\nconst styles = {\n  // 这个样式仅声明内容的样式，并不需要用在组件上\n  item: {\n    width: '100%',\n    height: '200px',\n    background: '#64a5f5',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    fontSize: '40px',\n    fontWeight: '500',\n  },\n  white: {\n    color: '#fff',\n  },\n  pink: {\n    color: 'pink',\n  },\n  yellow: {\n    color: 'yellow',\n  },\n}\n```\n\n:::\n\n## 默认显示第二个轮播内容\n\n:::demo 使用`<Carousel />`标签声明组件，通过`defaultActive`属性控制显示哪个轮播内容。\n\n```jsx\nconst App = () => {\n  return (\n    <Carousel defaultActive={1}>\n      <div style={styles.item}>\n        <span style={styles.white}>1</span>\n      </div>\n      <div style={styles.item}>\n        <span style={styles.pink}>2</span>\n      </div>\n      <div style={styles.item}>\n        <span style={styles.yellow}>3</span>\n      </div>\n    </Carousel>\n  )\n}\n\nconst styles = {\n  // 这个样式仅声明内容的样式，并不需要用在组件上\n  item: {\n    width: '100%',\n    height: '200px',\n    background: '#64a5f5',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    fontSize: '40px',\n    fontWeight: '500',\n  },\n  white: {\n    color: '#fff',\n  },\n  pink: {\n    color: 'pink',\n  },\n  yellow: {\n    color: 'yellow',\n  },\n}\n```\n\n:::\n\n## 控制自动播放与间隔\n\n默认开启了自动播放且间隔为 5s。\n\n:::demo 使用`<Carousel />`标签声明组件，通过`autoplay`属性控制自动播放，`duration`属性控制自动播放间隔。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Carousel autoplay={false}>\n        <div style={styles.item}>\n          <span style={styles.white}>1</span>\n        </div>\n        <div style={styles.item}>\n          <span style={styles.pink}>2</span>\n        </div>\n        <div style={styles.item}>\n          <span style={styles.yellow}>3</span>\n        </div>\n      </Carousel>\n\n      <Carousel style={{ marginTop: '30px' }} duration={3000}>\n        <div style={styles.item}>\n          <span style={styles.white}>1</span>\n        </div>\n        <div style={styles.item}>\n          <span style={styles.pink}>2</span>\n        </div>\n        <div style={styles.item}>\n          <span style={styles.yellow}>3</span>\n        </div>\n      </Carousel>\n    </div>\n  )\n}\n\nconst styles = {\n  // 这个样式仅声明内容的样式，并不需要用在组件上\n  item: {\n    width: '100%',\n    height: '200px',\n    background: '#64a5f5',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    fontSize: '40px',\n    fontWeight: '500',\n  },\n  white: {\n    color: '#fff',\n  },\n  pink: {\n    color: 'pink',\n  },\n  yellow: {\n    color: 'yellow',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明           | 类型    | 可选值               | 默认值 |\n| --------- | -------------- | ------- | -------------------- | ------ |\n| className | 容器 className | string  | -                    | -      |\n| style     | 指定样式       | object  | -                    | -      |\n| dots      | 指示器         | boolean | -                    | true   |\n| arrow     | 控制箭头       | string  | always, hover, never | hover  |\n| autoplay  | 自动播放       | boolean | -                    | hover  |\n| duration  | 间隔           | number  | -                    | 5000   |\n")
    },
    './site/src/pages/carousel/index.tsx': function(n, e, s) {
      'use strict'
      s.r(e)
      var t = s('react'),
        o = s('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return t.createElement(o.a, { mdString: s('./site/src/pages/carousel/index.md').default })
      }
    },
  },
])
