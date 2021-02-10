;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './site/src/components/markdown/index.tsx': function(n, t, e) {
      'use strict'
      var s = e('react'),
        o = e('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        r = e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        i =
          (e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-markup.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-clike.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-javascript.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-css.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-jsx.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.css'),
          e('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.css'),
          e('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/plugins/show-language/prism-show-language.js'),
          e('./node_modules/_prismjs@1.23.0@prismjs/themes/prism-okaidia.css'),
          e('./node_modules/_prismjs@1.23.0@prismjs/components/prism-tsx.js'),
          e('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/construct.js')),
        u = e.n(i),
        l = e('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        a = e.n(l),
        d = e('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        p = e.n(d),
        c = e('react-dom'),
        m = e('babel-standalone'),
        y = e('./components/index.ts'),
        B =
          (e('./site/src/components/markdown/style.scss'),
          function(n) {
            var t = n.element,
              o = n.id,
              r = t.desc,
              i = t.code,
              l = t.source,
              d = Object(s.useState)(!1),
              B = p()(d, 2),
              g = B[0],
              b = B[1]
            return (
              (function(n) {
                var t = this
                Promise.resolve()
                  .then(e.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var e = ['context', 'React', 'ReactDOM'],
                      o = [t, s, c]
                    for (var r in n) e.push(r), o.push(n[r])
                    return { args: e, argv: o }
                  })
                  .then(function(t) {
                    var e = t.args,
                      s = t.argv,
                      r = Object(m.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(o, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    e.push(r), u()(Function, a()(e)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(l),
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
                      return b(!g)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    g ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: g ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: i },
                }),
              )
            )
          }),
        g = function(n) {
          var t = n.codes,
            e = function(n) {
              if (t.hasOwnProperty(n)) {
                var e = t[n]
                setTimeout(function() {
                  var t = document.getElementById(n)
                  c.render(s.createElement(B, { element: e, id: n }), t)
                })
              }
            }
          for (var o in t) e(o)
        }
      setTimeout(function() {
        return r.highlightAll()
      }, 20),
        o.setOptions({
          renderer: new o.Renderer(),
          breaks: !0,
          highlight: function(n, t) {
            return r.highlight(n, r.languages[t], t)
          },
        })
      t.a = function(n) {
        var t = n.mdString,
          e = {},
          r = t.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              t = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = n.match(/([^]*)\n?(```[^]+```)/) || [],
              r = s.length ? s[1] : '',
              i = s.length ? s[2] : '',
              u = i.match(/```(.*)\n?([^]+)```/) || [],
              l = o(r),
              a = o(i),
              d = u.length ? u[2] : '',
              p = t.toString(16)
            return (
              (e[p] = { desc: l, code: a, source: d }),
              '<div id="'.concat(p, '" class="codebox"></div>')
            )
          })
        g({ codes: e })
        var i = o(r).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return s.createElement(
          s.Fragment,
          null,
          s.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: i } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, t) {},
    './site/src/pages/button/index.md': function(n, t, e) {
      'use strict'
      e.r(t),
        (t.default =
          "# Button 按钮\n\n常用按钮，用户操作交互组件\n\n基于`button`标签，通过 css 属性`padding`来控制大小\n\n## 基本用法\n\n实心按钮表示高度的强调, 根据颜色来区分不同逻辑。\n\n:::demo 使用`<Button />`标签声明组件，通过`type`属性设置对应的颜色\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button>按钮</Button>\n      <Button type=\"primary\" style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"warning\" style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"success\" style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"danger\" style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"info\" style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n}\n```\n\n:::\n\n## 圆形按钮\n\n:::demo 使用`<Button />`标签声明组件，设置`circle`属性为 true\n\n```jsx\nconst App = () => {\n  const buttonContent = <Icon style={styles.icon} name=\"close\" />\n  return (\n    <div>\n      <Button circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n      <Button type=\"primary\" circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n      <Button type=\"warning\" circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n      <Button type=\"success\" circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n      <Button type=\"danger\" circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n      <Button type=\"info\" circle={true} style={styles.btn}>\n        {buttonContent}\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 缕空按钮\n\n中强调按钮。它们包含重要的操作，但不是应用程序中的主要操作\n\n:::demo 使用`<Button />`标签声明组件，设置`plain`属性为 true\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button plain={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"primary\" plain={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"warning\" plain={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"success\" plain={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"danger\" plain={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"info\" plain={true} style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 圆角按钮\n\n:::demo 使用`<Button />`标签声明组件，设置`round`属性为 true\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button round={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"primary\" round={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"warning\" round={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"success\" round={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"danger\" round={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"info\" round={true} style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 取消阴影\n\n:::demo 使用`<Button />`标签声明组件，设置`shadow`属性为 false\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"primary\" shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"warning\" shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"success\" shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"danger\" shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"info\" shadow={false} style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 加载中状态\n\n:::demo 使用`<Button />`标签声明组件，通过`loading`属性控制加载状态，可以结合`disabled`使用（第一个按钮）\n\n```jsx\nconst App = () => {\n  const [isLoading, setIsLoading] = React.useState(true)\n\n  return (\n    <div>\n      <Button\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}\n        disabled={isLoading}>\n        按钮\n      </Button>\n      <Button\n        type=\"primary\"\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}>\n        按钮\n      </Button>\n      <Button\n        type=\"warning\"\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}>\n        按钮\n      </Button>\n      <Button\n        type=\"success\"\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}>\n        按钮\n      </Button>\n      <Button\n        type=\"danger\"\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}>\n        按钮\n      </Button>\n      <Button\n        type=\"info\"\n        loading={isLoading}\n        onClick={() => setIsLoading(!isLoading)}\n        style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 禁用状态\n\n:::demo 使用`<Button />`标签声明组件，设置`disabled`属性为 true\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <Button disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"primary\" disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"warning\" disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"success\" disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"danger\" disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n      <Button type=\"info\" disabled={true} style={styles.btn}>\n        按钮\n      </Button>\n    </div>\n  )\n}\n\nconst styles = {\n  btn: {\n    marginLeft: '10px',\n    marginBottom: '5px',\n  },\n  icon: {\n    width: '16px',\n    height: '16px',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItem: 'center',\n  },\n}\n```\n\n:::\n\n## 按钮组\n\n:::demo 使用`<ButtonGroup />`标签声明按钮组\n\n```jsx\nconst App = () => {\n  return (\n    <div>\n      <ButtonGroup>\n        <Button type=\"primary\">按钮</Button>\n        <Button type=\"primary\">\n          <Icon name=\"arrow-right\" />\n        </Button>\n      </ButtonGroup>\n\n      <ButtonGroup style={{ marginTop: '20px' }}>\n        <Button type=\"primary\">按钮</Button>\n        <Button type=\"primary\">按钮</Button>\n        <Button type=\"primary\">按钮</Button>\n      </ButtonGroup>\n\n      <div>\n        <ButtonGroup vertical={true} style={{ marginTop: '20px' }}>\n          <Button type=\"primary\">按钮</Button>\n          <Button type=\"primary\">按钮</Button>\n        </ButtonGroup>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明           | 类型    | 可选值                                           | 默认值  |\n| --------- | -------------- | ------- | ------------------------------------------------ | ------- |\n| className | 容器 className | string  | -                                                | -       |\n| style     | 指定样式       | object  | -                                                | -       |\n| type      | 按钮类型       | string  | default, primary, success, warning, danger, info | default |\n| plain     | 缕空样式       | boolean | -                                                | false   |\n| round     | 圆角按钮       | boolean | -                                                | false   |\n| circle    | 圆形按钮       | boolean | -                                                | false   |\n| loading   | 加载中状态     | boolean | -                                                | false   |\n| disabled  | 禁用状态       | boolean | -                                                | false   |\n| shadow    | 阴影           | boolean | -                                                | true    |\n")
    },
    './site/src/pages/button/index.tsx': function(n, t, e) {
      'use strict'
      e.r(t)
      var s = e('react'),
        o = e('./site/src/components/markdown/index.tsx')
      t.default = function() {
        return s.createElement(o.a, { mdString: e('./site/src/pages/button/index.md').default })
      }
    },
  },
])
