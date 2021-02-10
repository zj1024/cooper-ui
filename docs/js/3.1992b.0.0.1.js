;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
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
        i = t.n(a),
        d = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        l = t.n(d),
        m = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        c = t.n(m),
        u = t('react-dom'),
        g = t('babel-standalone'),
        p = t('./components/index.ts'),
        b =
          (t('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              o = n.id,
              r = e.desc,
              a = e.code,
              d = e.source,
              m = Object(s.useState)(!1),
              b = c()(m, 2),
              B = b[0],
              y = b[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(t.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var t = ['context', 'React', 'ReactDOM'],
                      o = [e, s, u]
                    for (var r in n) t.push(r), o.push(n[r])
                    return { args: t, argv: o }
                  })
                  .then(function(e) {
                    var t = e.args,
                      s = e.argv,
                      r = Object(g.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    t.push(r), i()(Function, l()(t)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(d),
              s.createElement(
                p.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(o, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: r },
                }),
                s.createElement(
                  p.Divider,
                  {
                    onClick: function() {
                      return y(!B)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    B ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: B ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: a },
                }),
              )
            )
          }),
        B = function(n) {
          var e = n.codes,
            t = function(n) {
              if (e.hasOwnProperty(n)) {
                var t = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  u.render(s.createElement(b, { element: t, id: n }), e)
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
              i = a.match(/```(.*)\n?([^]+)```/) || [],
              d = o(r),
              l = o(a),
              m = i.length ? i[2] : '',
              c = e.toString(16)
            return (
              (t[c] = { desc: d, code: l, source: m }),
              '<div id="'.concat(c, '" class="codebox"></div>')
            )
          })
        B({ codes: t })
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
    './site/src/pages/badge/index.md': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default =
          '# Badge 徽标\n\n在元素边缘位置显示一个小徽章。\n\n## 基本用法\n\n:::demo 使用`<Badge />`标签声明组件，通过`badgeContent`属性设置内容，`type`设置主题类型\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Badge badgeContent={9} style={styles.item}>\n        <Button>回复</Button>\n      </Badge>\n\n      <Badge badgeContent={9} type="success" style={styles.item}>\n        <Button>评论</Button>\n      </Badge>\n\n      <Badge badgeContent={9} type="warning" style={styles.item}>\n        <Button>消息</Button>\n      </Badge>\n\n      <Badge badgeContent={9} type="danger" style={styles.item}>\n        <Button>通知</Button>\n      </Badge>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: \'20px\',\n  },\n}\n```\n\n:::\n\n## 设置位置\n\n:::demo 使用`<Badge />`标签声明组件，通过`placement`属性设置徽标的位置\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Badge placement="left-top" badgeContent={9} style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n\n      <Badge placement="left-bottom" badgeContent={9} type="success" style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n\n      <Badge placement="right-top" badgeContent={9} type="warning" style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n\n      <Badge placement="right-bottom" badgeContent={9} type="danger" style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: \'20px\',\n  },\n}\n```\n\n:::\n\n## 自定义颜色\n\n:::demo 使用`<Badge />`标签声明组件，通过`bgColor`属性设置徽标的背景颜色，`color`设置徽标的内容颜色\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Badge bgColor="#188eee" color="#fff" badgeContent={9} style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n\n      <Badge\n        bgColor="linear-gradient(to right, #ff668c, blue)"\n        color="#fff"\n        badgeContent={9}\n        style={styles.item}>\n        <Button>Badge</Button>\n      </Badge>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: \'20px\',\n  },\n}\n```\n\n:::\n\n## 状态点\n\n:::demo 使用`<Badge />`标签声明组件，通过`dot`属性设置为状态点\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Badge dot={true} badgeContent={9} style={styles.item}>\n        <Button>动态</Button>\n      </Badge>\n\n      <Badge dot={true} type="danger" badgeContent={9} style={styles.item}>\n        <Button>新闻</Button>\n      </Badge>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    marginRight: \'20px\',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数         | 说明           | 类型            | 可选值                                         | 默认值    |\n| ------------ | -------------- | --------------- | ---------------------------------------------- | --------- |\n| className    | 容器 className | string          | -                                              | -         |\n| style        | 指定样式       | object          | -                                              | -         |\n| type         | 图标名称       | string          | default，success，warning，danger              | default   |\n| placement    | 位置           | string          | left-top，left-bottom，right-top，right-bottom | right-top |\n| badgeContent | 徽标内容       | React.ReactNode | -                                              | -         |\n| bgColor      | 背景颜色       | string          | -                                              | -         |\n| color        | 内容颜色       | string          | -                                              | -         |\n| dot          | 状态点         | boolean         | -                                              | -         |\n')
    },
    './site/src/pages/badge/index.tsx': function(n, e, t) {
      'use strict'
      t.r(e)
      var s = t('react'),
        o = t('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return s.createElement(o.a, { mdString: t('./site/src/pages/badge/index.md').default })
      }
    },
  },
])
