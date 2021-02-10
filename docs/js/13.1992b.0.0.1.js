;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    './site/src/components/markdown/index.tsx': function(n, e, t) {
      'use strict'
      var s = t('react'),
        r = t('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        o = t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        l =
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
        i = t.n(l),
        p = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        a = t.n(p),
        d = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        u = t.n(d),
        m = t('react-dom'),
        c = t('babel-standalone'),
        g = t('./components/index.ts'),
        y =
          (t('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              r = n.id,
              o = e.desc,
              l = e.code,
              p = e.source,
              d = Object(s.useState)(!1),
              y = u()(d, 2),
              I = y[0],
              h = y[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(t.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var t = ['context', 'React', 'ReactDOM'],
                      r = [e, s, m]
                    for (var o in n) t.push(o), r.push(n[o])
                    return { args: t, argv: r }
                  })
                  .then(function(e) {
                    var t = e.args,
                      s = e.argv,
                      o = Object(c.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(r, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    t.push(o), i()(Function, a()(t)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(p),
              s.createElement(
                g.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(r, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: o },
                }),
                s.createElement(
                  g.Divider,
                  {
                    onClick: function() {
                      return h(!I)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    I ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: I ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: l },
                }),
              )
            )
          }),
        I = function(n) {
          var e = n.codes,
            t = function(n) {
              if (e.hasOwnProperty(n)) {
                var t = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  m.render(s.createElement(y, { element: t, id: n }), e)
                })
              }
            }
          for (var r in e) t(r)
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
          t = {},
          o = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = n.match(/([^]*)\n?(```[^]+```)/) || [],
              o = s.length ? s[1] : '',
              l = s.length ? s[2] : '',
              i = l.match(/```(.*)\n?([^]+)```/) || [],
              p = r(o),
              a = r(l),
              d = i.length ? i[2] : '',
              u = e.toString(16)
            return (
              (t[u] = { desc: p, code: a, source: d }),
              '<div id="'.concat(u, '" class="codebox"></div>')
            )
          })
        I({ codes: t })
        var l = r(o).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return s.createElement(
          s.Fragment,
          null,
          s.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: l } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/input/index.md': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default =
          '# Input 输入框\n\n原生 input 标签改造，在原生 api 基础上添加样式和扩展。\n\n## 基本用法\n\n:::demo 使用`<Input />`标签声明组件，通过`size`属性设置大小。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Input style={styles.item} size="large" placeholder="大号输入框" />\n      <Input style={styles.item} size="middle" placeholder="中号输入框" />\n      <Input style={styles.item} size="small" placeholder="小号输入框" />\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    margin: \'10px 0\',\n  },\n}\n```\n\n:::\n\n## 自动获取焦点\n\n完美支持 ref 引用\n\n:::demo 使用`<Input />`标签声明组件，通过`focus`方法获取焦点\n\n```jsx\nconst App = () => {\n  const ref = React.useRef(null)\n\n  React.useEffect(() => {\n    ref.current.focus()\n  })\n\n  return <Input ref={ref} placeholder="自动获取焦点" />\n}\n```\n\n:::\n\n## 状态提示\n\n:::demo 使用`<Input />`标签声明组件，通过`vaild`属性设置状态，支持成功/失败态，值类型为 boolean 或 string\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Input style={styles.item} vaild="false" />\n      <Input style={styles.item} vaild={true} />\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    margin: \'10px 0\',\n  },\n}\n```\n\n:::\n\n## 使用 label\n\n:::demo 使用`InputGroup`标签声明包裹组件，使用`<Input />`标签声明组件。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <InputGroup>\n        <label htmlFor="name1">label</label>\n        <Input id="name1" />\n      </InputGroup>\n      <InputGroup row={false} style={styles.item}>\n        <label htmlFor="name2">label</label>\n        <Input id="name2" />\n      </InputGroup>\n    </div>\n  )\n}\n\nconst styles = {\n  item: {\n    margin: \'10px 0\',\n  },\n}\n```\n\n:::\n\n## 使用插件\n\n:::demo 使用`InputGroup`标签声明包裹组件，使用`<Input />`标签声明组件，使用`InputAddon`标签声明插件。\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <div style={styles.wrapper}>\n        <InputGroup style={styles.item}>\n          <InputAddon>Addon</InputAddon>\n          <Input type="text" size="large" placeholder="默认样式" />\n        </InputGroup>\n        <InputGroup style={styles.item}>\n          <InputAddon>Addon</InputAddon>\n          <Input type="text" size="middle" placeholder="默认样式" />\n        </InputGroup>\n        <InputGroup style={styles.item}>\n          <InputAddon>Addon</InputAddon>\n          <Input type="text" size="small" placeholder="默认样式" />\n        </InputGroup>\n      </div>\n\n      <InputGroup style={styles.item}>\n        <Input type="text" placeholder="按钮插件" />\n        <InputAddon>\n          <Button type="primary">\n            <Icon name="arrow-right" />\n          </Button>\n        </InputAddon>\n      </InputGroup>\n\n      <InputGroup style={styles.item}>\n        <Input type="text" placeholder="这里是智能的，是ReactElement清除默认样式" />\n        <InputAddon>\n          <div style={styles.addon}>1</div>\n        </InputAddon>\n      </InputGroup>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: \'flex\',\n  },\n  item: {\n    margin: \'10px\',\n  },\n  addon: {\n    width: \'100px\',\n    height: \'100%\',\n    display: \'flex\',\n    alignItems: \'center\',\n    justifyContent: \'center\',\n    background: \'#f2f2f2\',\n  },\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明           | 类型              | 可选值               | 默认值 |\n| --------- | -------------- | ----------------- | -------------------- | ------ |\n| className | 容器 className | string            | -                    | -      |\n| style     | 指定样式       | object            | -                    | -      |\n| size      | 大小           | string            | large, middle, small | middle |\n| disabled  | 禁用状态       | boolean           | -                    | false  |\n| vaild     | 状态           | string 或 boolean | -                    | \'\'     |\n\n### InputGroup API\n\n| 参数 | 说明           | 类型    | 可选值 | 默认值 |\n| ---- | -------------- | ------- | ------ | ------ |\n| row  | 是否行内 label | boolean | -      | true   |\n')
    },
    './site/src/pages/input/index.tsx': function(n, e, t) {
      'use strict'
      t.r(e)
      var s = t('react'),
        r = t('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return s.createElement(r.a, { mdString: t('./site/src/pages/input/index.md').default })
      }
    },
  },
])
