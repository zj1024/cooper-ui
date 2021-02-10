;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    './site/src/components/markdown/index.tsx': function(n, e, t) {
      'use strict'
      var s = t('react'),
        c = t('./node_modules/_marked@0.8.2@marked/src/marked.js'),
        i = t('./node_modules/_prismjs@1.23.0@prismjs/components/prism-core.js'),
        r =
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
        o = t.n(r),
        l = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/toConsumableArray.js'),
        a = t.n(l),
        d = t('./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/slicedToArray.js'),
        m = t.n(d),
        p = t('react-dom'),
        u = t('babel-standalone'),
        h = t('./components/index.ts'),
        v =
          (t('./site/src/components/markdown/style.scss'),
          function(n) {
            var e = n.element,
              c = n.id,
              i = e.desc,
              r = e.code,
              l = e.source,
              d = Object(s.useState)(!1),
              v = m()(d, 2),
              g = v[0],
              f = v[1]
            return (
              (function(n) {
                var e = this
                Promise.resolve()
                  .then(t.bind(null, './components/index.ts'))
                  .then(function(n) {
                    var t = ['context', 'React', 'ReactDOM'],
                      c = [e, s, p]
                    for (var i in n) t.push(i), c.push(n[i])
                    return { args: t, argv: c }
                  })
                  .then(function(e) {
                    var t = e.args,
                      s = e.argv,
                      i = Object(u.transform)(
                        ''
                          .concat(n, "\n        ReactDOM.render(<App />, document.getElementById('")
                          .concat(c, "-code'))\n      "),
                        { presets: ['es2015', 'react'] },
                      ).code
                    t.push(i), o()(Function, a()(t)).apply(null, s)
                  })
                  .catch(function(n) {
                    0
                  })
              })(l),
              s.createElement(
                h.Card,
                { shadow: 'always' },
                s.createElement('div', { id: ''.concat(c, '-code'), className: 'p-20' }),
                s.createElement('div', {
                  className: 'desc language- p-h-20 p-b-10',
                  dangerouslySetInnerHTML: { __html: i },
                }),
                s.createElement(
                  h.Divider,
                  {
                    onClick: function() {
                      return f(!g)
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
                  dangerouslySetInnerHTML: { __html: r },
                }),
              )
            )
          }),
        g = function(n) {
          var e = n.codes,
            t = function(n) {
              if (e.hasOwnProperty(n)) {
                var t = e[n]
                setTimeout(function() {
                  var e = document.getElementById(n)
                  p.render(s.createElement(v, { element: t, id: n }), e)
                })
              }
            }
          for (var c in e) t(c)
        }
      setTimeout(function() {
        return i.highlightAll()
      }, 20),
        c.setOptions({
          renderer: new c.Renderer(),
          breaks: !0,
          highlight: function(n, e) {
            return i.highlight(n, i.languages[e], e)
          },
        })
      e.a = function(n) {
        var e = n.mdString,
          t = {},
          i = e.replace(/:::\s?demo\s([^]+?):::/g, function() {
            var n = (arguments.length <= 1 ? void 0 : arguments[1]) || '',
              e = (arguments.length <= 2 ? void 0 : arguments[2]) || '',
              s = n.match(/([^]*)\n?(```[^]+```)/) || [],
              i = s.length ? s[1] : '',
              r = s.length ? s[2] : '',
              o = r.match(/```(.*)\n?([^]+)```/) || [],
              l = c(i),
              a = c(r),
              d = o.length ? o[2] : '',
              m = e.toString(16)
            return (
              (t[m] = { desc: l, code: a, source: d }),
              '<div id="'.concat(m, '" class="codebox"></div>')
            )
          })
        g({ codes: t })
        var r = c(i).replace(/<table>([^]+)<\/table>/, function() {
          var n = (arguments.length <= 0 ? void 0 : arguments[0]) || ''
          return '<div class="table-wrapper">'.concat(n, '</div>')
        })
        return s.createElement(
          s.Fragment,
          null,
          s.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: r } }),
        )
      }
    },
    './site/src/components/markdown/style.scss': function(n, e) {},
    './site/src/pages/result/index.md': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default =
          '# Result 结果\n\n状态结果\n\n## 基本用法\n\n组件内部包含了 6 个状态，包括 404，成功，失败等状态\n\n:::demo 使用`<Result />`标签声明组件，通过`status`属性设置类型，`title`设置标题，`content`设置内容\n\n```jsx\nconst App = () => {\n  return (\n    <div style={styles.wrapper}>\n      <div style={styles.item}>\n        <Result\n          status="success"\n          title={\'成功购买了一件商品！！\'}\n          content={<Button type="primary">返回</Button>}\n        />\n      </div>\n      <div style={styles.item}>\n        <Result\n          status="error"\n          title={\'请求参数有误，请稍后再试～\'}\n          content={<Button>返回</Button>}\n        />\n      </div>\n      <div style={styles.item}>\n        <Result status="info" title={\'提示！这是一段超级长的文本，这里用来测试换行后的文本宽度\'} />\n      </div>\n      <div style={styles.item}>\n        <Result status="warning" title={\'警告！您当前的操作有风险\'} content={null} />\n      </div>\n      <div style={styles.item}>\n        <Result status="404" content={<Button type="primary">回到首页</Button>} />\n      </div>\n      <div style={styles.item}>\n        <Result status="warning" title={\'warning\'} />\n      </div>\n    </div>\n  )\n}\n\nconst styles = {\n  wrapper: {\n    display: \'flex\',\n    flexDirection: \'column\',\n  },\n  item: {\n    padding: \'20px\',\n    borderBottom: \'1px solid #f2f2f2\',\n  },\n}\n```\n\n:::\n\n## 自定义 Icon\n\n:::demo 使用`<Result />`标签声明组件，通过`icon`属性设置自定义 icon，会覆盖`status`属性上的默认 icon，无需设置 status\n\n```jsx\n// 这是一个非常长的svg文本字符串\n// 充当svg文件\nconst LiveIcon =\n  \'<svg t="1575815579293" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3762" width="200" height="200"><path d="M878.8 300.2l-105.5 93.9c-11.6 10.3-30 2.1-30-13.5V277.3c0-30-24.3-54.3-54.3-54.3H178.6c-30 0-54.3 24.3-54.3 54.3v451.8c0 30 24.3 54.3 54.3 54.3H689c30 0 54.3-24.3 54.3-54.3V625.8c0-15.5 18.4-23.8 30-13.5l105.5 93.9c18.1 16.1 46.7 3.2 46.7-21v-364c0-24.2-28.6-37.1-46.7-21z" fill="#FEAC33" p-id="3763"></path><path d="M124.3 649.4v79.8c0 30 24.3 54.3 54.3 54.3h44.5c-41.6-37.2-75.4-82.8-98.8-134.1zM178.6 223c-30 0-54.3 24.3-54.3 54.3v36.4c15-32.8 34.2-63.3 57-90.7h-2.7zM925.5 685.3V321.2c0-24.2-28.6-37.1-46.7-21l-16.9 15c22.9 50.7 35.6 107 35.6 166.3 0 71.2-18.4 138.1-50.7 196.3l32 28.4c18.1 16.1 46.7 3.3 46.7-20.9z" fill="#FEAC33" p-id="3764"></path><path d="M612.5 783.4H689c30 0 54.3-24.3 54.3-54.3v-43.3c-35.1 42.1-79.8 75.8-130.8 97.6zM861.9 315.3L809.4 362c9.6 31.8 14.7 65.6 14.7 100.5 0 57.9-14.1 112.4-39 160.5l61.7 54.9c32.3-58.1 50.7-125 50.7-196.3 0-59.3-12.7-115.6-35.6-166.3zM125.9 462.4c0-92.7 36.1-176.9 95-239.4h-39.7c-22.8 27.4-42 57.9-57 90.7v335.6c23.4 51.3 57.3 96.9 98.8 134.1h114.4c-124.4-53.3-211.5-177-211.5-321z" fill="#FEB133" p-id="3765"></path><path d="M809.4 361.9l-36.2 32.2c-9 8-22 4.9-27.4-4.1 3.2 17.3 4.9 35.1 4.9 53.4 0 162.1-131.4 293.4-293.4 293.4S163.8 605.4 163.8 443.3c0-87.8 38.5-166.5 99.6-220.3h-42.5c-58.9 62.5-95 146.7-95 239.4 0 144 87.2 267.6 211.6 321h275c51-21.9 95.7-55.6 130.8-97.6v-60c0-15.5 18.4-23.8 30-13.5l11.9 10.5c24.9-48 39-102.6 39-160.5-0.1-34.8-5.2-68.5-14.8-100.4z" fill="#FEB633" p-id="3766"></path><path d="M743.3 377.5V277.3c0-30-24.3-54.3-54.3-54.3h-37.9c45.3 39.9 78.2 93.6 92.2 154.5z" fill="#FEB633" p-id="3767"></path><path d="M163.8 443.3c0 162.1 131.4 293.4 293.4 293.4s293.4-131.4 293.4-293.4c0-18.2-1.7-36.1-4.9-53.4-1.6-2.6-2.6-5.8-2.6-9.3v-3.1c-14-60.9-46.9-114.6-92.2-154.5h-84.8c66.7 42.1 111 116.5 111 201.2 0 131.3-106.5 237.8-237.8 237.8S201.8 555.5 201.8 424.2c0-84.7 44.3-159.1 111-201.2h-49.4c-61 53.8-99.6 132.6-99.6 220.3z" fill="#FFBC34" p-id="3768"></path><path d="M201.8 424.2c0 131.3 106.5 237.8 237.8 237.8s237.8-106.5 237.8-237.8c0-84.7-44.3-159.1-111-201.2H312.8c-66.7 42.1-111 116.5-111 201.2z m220-201.2c100.6 0 182.1 81.5 182.1 182.1s-81.5 182.1-182.1 182.1-182.1-81.5-182.1-182.1S321.2 223 421.8 223z" fill="#FFC134" p-id="3769"></path><path d="M421.8 587.2c100.6 0 182.1-81.5 182.1-182.1S522.4 223 421.8 223s-182.1 81.5-182.1 182.1 81.5 182.1 182.1 182.1z m-17.7-327.6c69.8 0 126.4 56.6 126.4 126.4s-56.6 126.4-126.4 126.4S277.7 455.8 277.7 386s56.6-126.4 126.4-126.4z" fill="#FFC634" p-id="3770"></path><path d="M404.1 386m-126.4 0a126.4 126.4 0 1 0 252.8 0 126.4 126.4 0 1 0-252.8 0Z" fill="#FFCB34" p-id="3771"></path><path d="M379 613.2V384.7c0-25.6 29.4-40 49.6-24.3L576 474.6c15.9 12.3 15.9 36.3 0 48.7L428.7 637.5c-20.2 15.7-49.7 1.3-49.7-24.3z" fill="#FFE3B4" p-id="3772"></path><path d="M689 792.4H178.6c-34.9 0-63.3-28.4-63.3-63.3V277.3c0-34.9 28.4-63.3 63.3-63.3H689c34.9 0 63.3 28.4 63.3 63.3v103.3c0 5.4 4.1 7.7 5.3 8.2 1.3 0.6 5.7 2.1 9.7-1.5l105.5-93.9c11-9.8 26.3-12.2 39.8-6.1 13.5 6.1 21.9 19 21.9 33.8v364c0 14.8-8.4 27.8-21.9 33.8-13.5 6.1-28.7 3.7-39.8-6.1L767.3 619c-4-3.6-8.4-2-9.7-1.4-1.3 0.6-5.4 2.8-5.4 8.2v103.3c0.1 34.9-28.3 63.3-63.2 63.3zM178.6 232c-25 0-45.3 20.3-45.3 45.3v451.8c0 25 20.3 45.3 45.3 45.3H689c25 0 45.3-20.3 45.3-45.3V625.8c0-10.8 6.1-20.2 16-24.6 9.8-4.4 21-2.7 29 4.4l105.5 93.9c5.8 5.1 13.4 6.3 20.4 3.1 7.1-3.2 11.3-9.7 11.3-17.4v-364c0-7.7-4.2-14.2-11.3-17.4-7-3.2-14.7-2-20.4 3.1l-105.5 93.9c-8.1 7.2-19.2 8.9-29 4.4-9.8-4.4-15.9-13.9-15.9-24.7V277.3c0-25-20.3-45.3-45.3-45.3H178.6z" fill="#FFA820" p-id="3773"></path><path d="M188.7 344.2c-9.9 0-18-8.1-18-18V314c0-26.3 21.4-47.7 47.7-47.7h93.1c9.9 0 18 8.1 18 18s-8.1 18-18 18h-93.1c-6.5 0-11.7 5.3-11.7 11.7v12.2c0 10-8.1 18-18 18zM188.7 413.8c-9.9 0-18-8.1-18-18v-10.5c0-9.9 8.1-18 18-18s18 8.1 18 18v10.5c0 10-8.1 18-18 18z" fill="#FFFFFF" p-id="3774"></path></svg>\'\n\nconst App = () => {\n  return (\n    <div>\n      <Result\n        icon={<Icon component={LiveIcon} />}\n        title={\'已获取黄金视频标志！\'}\n        content={<Button type="warning">Go on !</Button>}\n      />\n    </div>\n  )\n}\n```\n\n:::\n\n## Attributes\n\n| 参数      | 说明                                   | 类型            | 可选值                                      | 默认值 |\n| --------- | -------------------------------------- | --------------- | ------------------------------------------- | ------ |\n| className | 容器 className                         | string          | -                                           | -      |\n| style     | 指定样式                               | object          | -                                           | -      |\n| status    | 状态                                   | string          | success，error，info，warning，404，warning | info   |\n| icon      | 自定义 icon，会覆盖 status 默认的 icon | React.ReactNode | -                                           | -      |\n| title     | 标题                                   | React.ReactNode | -                                           | -      |\n| content   | content                                | React.ReactNode | -                                           | -      |\n')
    },
    './site/src/pages/result/index.tsx': function(n, e, t) {
      'use strict'
      t.r(e)
      var s = t('react'),
        c = t('./site/src/components/markdown/index.tsx')
      e.default = function() {
        return s.createElement(c.a, { mdString: t('./site/src/pages/result/index.md').default })
      }
    },
  },
])
