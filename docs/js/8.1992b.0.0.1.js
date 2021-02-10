;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    './site/src/components/markdown/index.tsx': function(n, e, o) {
      'use strict'
      var s = o('react'),
        t = o('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        i = o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        l =
          (o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-markup.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-clike.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-javascript.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-css.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-jsx.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.css'),
          o('./node_modules/_prismjs@1.23.0@prismjs/plugins/line-numbers/prism-line-numbers.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.css'),
          o('./node_modules/_prismjs@1.23.0@prismjs/plugins/toolbar/prism-toolbar.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/plugins/show-language/prism-show-language.js'),
          o('./node_modules/_prismjs@1.23.0@prismjs/themes/prism-okaidia.css'),
          o('./node_modules/_prismjs@1.23.0@prismjs/components/prism-tsx.js'),
          o('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/construct.js')),
        a = o.n(l),
        r = o('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        c = o.n(r),
        d = o('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        m = o.n(d),
        p = o('react-dom'),
        u = o('babel-standalone'),
        g = o('./components/index.ts'),
        b =
          (o('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              t = n.id,
              i = e.desc,
              l = e.code,
              r = e.source,
              d = Object(s.useState)(!1),
              b = m()(d, 2),
              v = b[0],
              j = b[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(o.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var o = ['context', 'React', 'ReactDOM'],
                      t = [e, s, p]
                    for (var i in n) o.push(i), t.push(n[i])
                    return { args: o, argv: t }
                  })
                  .then(function(e) {
                    var o = e.args,
                      s = e.argv,
                      i = Object(u.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(t, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    o.push(i), a()(Function, c()(o)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(r),
              s.createElement(
                g.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(t, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: i },
                }),
                s.createElement(
                  g.Divider,
                  {
                    onClick: function() {
                      return j(!v)
                    },
                    orientation: 'left',
                    className: 'p-h-10',
                  },
                  s.createElement(
                    'span',
                    { className: 'cursor-pointer text-primary' },
                    v ? '收起' : '展开',
                    ' ',
                  ),
                ),
                s.createElement('div', {
                  className: 'code',
                  style: { display: v ? 'block' : 'none' },
                  dangerouslySetInnerHTML: { __html: l },
                }),
              )
            )
          }),
        v = function(n) {
          var e = n.codes,
            o = function(n) {
              if (e.hasOwnProperty(n)) {
                var o = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  p.render(s.createElement(b, { element: o, id: n }), e)
                })
              }
            }
          for (var t in e) o(t)
        }
      setTimeout(function() {
        return i.highlightAll()
      }, 20),
        t.setOptions({
          renderer: new t.Renderer(),
          breaks: !0,
          highlight: function(n, e) {
            return i.highlight(n, i.languages[e], e)
          },
        })
      e.a = function(n) {
        var e = n.mdString,
          o = {},
          i = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = n.match(/([^]*)\n?(```[^]+```)/) || [],
              i = s.length ? s[1] : '',
              l = s.length ? s[2] : '',
              a = l.match(/```(.*)\n?([^]+)```/) || [],
              r = t(i),
              c = t(l),
              d = a.length ? a[2] : '',
              m = e.toString(16)
            return (
              (o[m] = { desc: r, code: c, source: d }),
              '<div id="'.concat(m, '" class="codebox"></div>')
            )
          })
        v({ codes: o })
        var l = t(i).replace(/<table>([^]+)<\/table>/, function() {
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
    './site/src/pages/dialog/index.md': function(n, e, o) {
      'use strict'
      o.r(e),
        (e.default =
          "# Dialog 对话框\n\n传递 message 给用户，包含了一些关键信息，需要用户进行确认。\n\n## 基础用法\n\n对话框中包含头部、message 区域、底部，可以通过点击蒙层、头部关闭按钮、底部关闭按钮关闭\n\n:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 将 visible 为 false 的函数，`onOk`上传递函数接收`done`回调函数\n\n```jsx\nconst App = () => {\n  const [visible, setVisible] = React.useState(false)\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        打开Dialog\n      </Button>\n      <Dialog visible={visible} onCancel={() => setVisible(false)} onOk={done => done()}>\n        <p>文本信息</p>\n      </Dialog>\n    </div>\n  )\n}\n```\n\n:::\n\n## 自定义属性\n\n在基础用法的基础上，支持自定义 dialog 的`宽度`，`头部`，`尾部`，`尾部确认按钮文案`，`尾部取消按钮文案`，`显示隐藏动画`，`蒙层`\n\n:::demo 使用`<Dialog />`标签声明组件，自定义属性在下方`Attributes`具体查看。\n\n```jsx\nconst App = () => {\n  const [visible, setVisible] = React.useState(false)\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => setVisible(true)}>\n        打开Dialog\n      </Button>\n      <Dialog\n        wdith=\"500px\"\n        header={<div>通知</div>}\n        footer={\n          <div style={styles.footer}>\n            <Icon name=\"info\" /> 这是一条尾部通知\n          </div>\n        }\n        closable={false}\n        visible={visible}\n        onCancel={() => setVisible(false)}\n        onOk={done => done()}>\n        <p>文本信息</p>\n      </Dialog>\n    </div>\n  )\n}\n\nconst styles = {\n  footer: {\n    width: '100%',\n    color: '#888',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n}\n```\n\n:::\n\n## Dialog API\n\n通过函数方式调用 Dialog，提供了`Alert`、`Confirm`、`Modal`接口。\n\n### Dialog.Alert\n\n通过函数方式触发，默认蒙层点击不关闭，取消显示头部按钮 以及 尾部取消按钮\n\n:::demo `Dialog.Alert(option)`方法触发，\n\n```jsx\nconst App = () => {\n  const openDialog = () => {\n    Dialog.Alert({\n      message: 'test',\n      width: '300px',\n      onCancel: () => {\n        console.log('Dialog.Alert onCancel called')\n      },\n      onOk: (done: any) => {\n        console.log('Dialog.Alert onOk called')\n        done()\n      },\n    })\n  }\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={openDialog}>\n        函数调用 Alert\n      </Button>\n    </div>\n  )\n}\n```\n\n:::\n\n### Dialog.Confirm\n\n通过函数方式触发，默认蒙层点击不关闭，取消显示头部按钮\n\n:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 visible 为 false 的函数，`onOk`上传递函数接收`done回调函数`\n\n```jsx\nconst App = () => {\n  const openDialog = () => {\n    Dialog.Confirm({\n      message: '确认删除吗？',\n      onCancel: () => {\n        console.log('Dialog.Confirm onCancel called')\n      },\n      onOk: (done: any) => {\n        console.log('Dialog.Confirm onOk called')\n        done()\n      },\n    })\n  }\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={openDialog}>\n        函数调用 Confirm\n      </Button>\n    </div>\n  )\n}\n```\n\n:::\n\n### Dialog.Modal\n\n通过函数方式触发，同基础方式一样\n\n:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 visible 为 false 的函数，`onOk`上传递函数接收`done回调函数`\n\n```jsx\nconst App = () => {\n  const openDialog = () => {\n    Dialog.Modal({\n      width: '350px',\n      message: '宽度设置了350px',\n      okText: '是的',\n      cancelText: '不是的',\n      onCancel: () => {\n        console.log('Dialog.Modal onCancel called')\n      },\n      onOk: (done: any) => {\n        console.log('Dialog.Modal onOk called')\n        done()\n      },\n    })\n  }\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={openDialog}>\n        函数调用 Modal\n      </Button>\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n### Dialog\n\n| 参数         | 说明             | 类型            | 可选值 | 默认值                                 |\n| ------------ | ---------------- | --------------- | ------ | -------------------------------------- |\n| className    | 容器 className   | string          | -      | -                                      |\n| style        | 指定样式         | object          | -      | -                                      |\n| visible      | 对话框是否可见   | boolean         | -      | -                                      |\n| width        | 宽度             | string          | -      | 700px, 屏幕宽度小于 768px 按照 90%显示 |\n| header       | 自定义头部       | React.ReactNode | -      | -                                      |\n| footer       | 自定义尾部       | React.ReactNode | -      | -                                      |\n| okText       | 确认按钮文字     | string          | -      | 确认                                   |\n| cancelText   | 取消按钮文字     | string          | -      | 取消                                   |\n| cancelable   | 展示尾部取消按钮 | boolean         | -      | true                                   |\n| closable     | 头部关闭按钮     | boolean         | -      | true                                   |\n| animat       | 显示隐藏动画     | boolean         | -      | true                                   |\n| mask         | 蒙层             | boolean         | -      | true                                   |\n| maskClosable | 点击蒙层关闭     | boolean         | -      | true                                   |\n| lockScroll   | 背景不可滚动     | boolean         | -      | true                                   |\n| onOk         | 确认按钮点击回调 | (done) => any   | -      | -                                      |\n| onCancel     | 取消按钮点击回调 | () => any       | -      | -                                      |\n\n## API Options\n\n### Dialog.Alert、Dialog.Confirm、Dialog.Modal\n\n| 参数       | 说明             | 类型            | 可选值 | 默认值                                 |\n| ---------- | ---------------- | --------------- | ------ | -------------------------------------- |\n| title      | 自定义头部       | React.ReactNode | -      | -                                      |\n| message    | 自定义信息       | React.ReactNode | -      | -                                      |\n| width      | 宽度             | string          | -      | 700px, 屏幕宽度小于 768px 按照 90%显示 |\n| okText     | 确认按钮文字     | string          | -      | 确认                                   |\n| cancelText | 取消按钮文字     | string          | -      | 取消                                   |\n| onOk       | 确认按钮点击回调 | (done) => any   | -      | -                                      |\n| onCancel   | 取消按钮点击回调 | () => any       | -      | -                                      |\n\n以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。\n\n```javascript\nconst dialog = Dialog.Alert({})\n\ndialog.update({\n  title: '修改的标题',\n  content: '修改的内容',\n})\n\nmodal.destroy()\n```\n")
    },
    './site/src/pages/dialog/index.tsx': function(n, e, o) {
      'use strict'
      o.r(e)
      var s = o('react'),
        t = o('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return s.createElement(t.a, { mdString: o('./site/src/pages/dialog/index.md').default })
      }
    },
  },
])
