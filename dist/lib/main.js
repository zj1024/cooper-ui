!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('react-dom')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'react-dom'], t)
    : 'object' == typeof exports
    ? (exports.cui = t(require('react'), require('react-dom')))
    : (e.cui = t(e.React, e.ReactDOM))
})(window, function(e, t) {
  return (function(e) {
    var t = {}
    function o(n) {
      if (t[n]) return t[n].exports
      var r = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (o.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (o.t = function(e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (o.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            o.d(
              n,
              r,
              function(t) {
                return e[t]
              }.bind(null, r),
            )
        return n
      }),
      (o.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return o.d(t, 'a', t), t
      }),
      (o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (o.p = ''),
      o((o.s = 6))
    )
  })([
    function(t, o) {
      t.exports = e
    },
    function(e, t, o) {
      'use strict'
      e.exports = function(e) {
        var t = []
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var o = (function(e, t) {
                var o = e[1] || '',
                  n = e[3]
                if (!n) return o
                if (t && 'function' == typeof btoa) {
                  var r =
                      ((i = n),
                      (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                      (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        c,
                      )),
                      '/*# '.concat(l, ' */')),
                    a = n.sources.map(function(e) {
                      return '/*# sourceURL='.concat(n.sourceRoot).concat(e, ' */')
                    })
                  return [o]
                    .concat(a)
                    .concat([r])
                    .join('\n')
                }
                var i, c, l
                return [o].join('\n')
              })(t, e)
              return t[2] ? '@media '.concat(t[2], '{').concat(o, '}') : o
            }).join('')
          }),
          (t.i = function(e, o) {
            'string' == typeof e && (e = [[null, e, '']])
            for (var n = {}, r = 0; r < this.length; r++) {
              var a = this[r][0]
              null != a && (n[a] = !0)
            }
            for (var i = 0; i < e.length; i++) {
              var c = e[i]
              ;(null != c[0] && n[c[0]]) ||
                (o && !c[2] ? (c[2] = o) : o && (c[2] = '('.concat(c[2], ') and (').concat(o, ')')),
                t.push(c))
            }
          }),
          t
        )
      }
    },
    function(e, t, o) {
      'use strict'
      var n,
        r = {},
        a = function() {
          return (
            void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
          )
        },
        i = (function() {
          var e = {}
          return function(t) {
            if (void 0 === e[t]) {
              var o = document.querySelector(t)
              if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                try {
                  o = o.contentDocument.head
                } catch (e) {
                  o = null
                }
              e[t] = o
            }
            return e[t]
          }
        })()
      function c(e, t) {
        for (var o = [], n = {}, r = 0; r < e.length; r++) {
          var a = e[r],
            i = t.base ? a[0] + t.base : a[0],
            c = { css: a[1], media: a[2], sourceMap: a[3] }
          n[i] ? n[i].parts.push(c) : o.push((n[i] = { id: i, parts: [c] }))
        }
        return o
      }
      function l(e, t) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o],
            a = r[n.id],
            i = 0
          if (a) {
            for (a.refs++; i < a.parts.length; i++) a.parts[i](n.parts[i])
            for (; i < n.parts.length; i++) a.parts.push(v(n.parts[i], t))
          } else {
            for (var c = []; i < n.parts.length; i++) c.push(v(n.parts[i], t))
            r[n.id] = { id: n.id, refs: 1, parts: c }
          }
        }
      }
      function s(e) {
        var t = document.createElement('style')
        if (void 0 === e.attributes.nonce) {
          var n = o.nc
          n && (e.attributes.nonce = n)
        }
        if (
          (Object.keys(e.attributes).forEach(function(o) {
            t.setAttribute(o, e.attributes[o])
          }),
          'function' == typeof e.insert)
        )
          e.insert(t)
        else {
          var r = i(e.insert || 'head')
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          r.appendChild(t)
        }
        return t
      }
      var u,
        d =
          ((u = []),
          function(e, t) {
            return (u[e] = t), u.filter(Boolean).join('\n')
          })
      function f(e, t, o, n) {
        var r = o ? '' : n.css
        if (e.styleSheet) e.styleSheet.cssText = d(t, r)
        else {
          var a = document.createTextNode(r),
            i = e.childNodes
          i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
        }
      }
      function p(e, t, o) {
        var n = o.css,
          r = o.media,
          a = o.sourceMap
        if (
          (r && e.setAttribute('media', r),
          a &&
            btoa &&
            (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              ' */',
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = n
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild)
          e.appendChild(document.createTextNode(n))
        }
      }
      var b = null,
        g = 0
      function v(e, t) {
        var o, n, r
        if (t.singleton) {
          var a = g++
          ;(o = b || (b = s(t))), (n = f.bind(null, o, a, !1)), (r = f.bind(null, o, a, !0))
        } else
          (o = s(t)),
            (n = p.bind(null, o, t)),
            (r = function() {
              !(function(e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(o)
            })
        return (
          n(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return
              n((e = t))
            } else r()
          }
        )
      }
      e.exports = function(e, t) {
        ;((t = t || {}).attributes = 'object' == typeof t.attributes ? t.attributes : {}),
          t.singleton || 'boolean' == typeof t.singleton || (t.singleton = a())
        var o = c(e, t)
        return (
          l(o, t),
          function(e) {
            for (var n = [], a = 0; a < o.length; a++) {
              var i = o[a],
                s = r[i.id]
              s && (s.refs--, n.push(s))
            }
            e && l(c(e, t), t)
            for (var u = 0; u < n.length; u++) {
              var d = n[u]
              if (0 === d.refs) {
                for (var f = 0; f < d.parts.length; f++) d.parts[f]()
                delete r[d.id]
              }
            }
          }
        )
      }
    },
    function(e, t, o) {
      var n
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var o = {}.hasOwnProperty
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t]
            if (n) {
              var a = typeof n
              if ('string' === a || 'number' === a) e.push(n)
              else if (Array.isArray(n) && n.length) {
                var i = r.apply(null, n)
                i && e.push(i)
              } else if ('object' === a) for (var c in n) o.call(n, c) && n[c] && e.push(c)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (n = function() {
                return r
              }.apply(t, [])) || (e.exports = n)
      })()
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = o(33)
      t.isString = n.isString
      var r = o(34)
      t.setPrefixClassName = r.default
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(3)
      o(18)
      t.default = function(e) {
        var t = e.name,
          c = e.className,
          l = r(e, ['name', 'className'])
        return t
          ? a.createElement(
              'span',
              n(
                {
                  dangerouslySetInnerHTML: { __html: o(20)('./' + t + '.svg').default },
                  className: i.default('coo-icon', c),
                },
                l,
              ),
            )
          : (console.warn('Did you forget to assign a value to the name attribute?'), null)
      }
    },
    function(e, t, o) {
      'use strict'
      o.r(t)
      o(16)
      var n = o(5),
        r = o.n(n)
      o.d(t, 'Icon', function() {
        return r.a
      })
      var a = o(7),
        i = o.n(a)
      o.d(t, 'Input', function() {
        return i.a
      })
      var c = o(8),
        l = o.n(c)
      o.d(t, 'Button', function() {
        return l.a
      })
      var s = o(9),
        u = o.n(s)
      o.d(t, 'Dialog', function() {
        return u.a
      })
      var d = o(11),
        f = o.n(d)
      o.d(t, 'Layout', function() {
        return f.a
      })
      var p = o(13),
        b = o.n(p)
      o.d(t, 'Popover', function() {
        return b.a
      })
      var g = o(14),
        v = o.n(g)
      o.d(t, 'Tooltip', function() {
        return v.a
      })
      var h = o(15),
        m = o.n(h)
      o.d(t, 'Foldcard', function() {
        return m.a
      })
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(0),
        c = o(3),
        l = o(4),
        s = o(6)
      o(35)
      var u = l.setPrefixClassName('coo-input')
      t.default = function(e) {
        var t = e.className,
          o = e.value,
          l = e.onChange,
          d = e.placeholder,
          f = e.allowClear,
          p = void 0 !== f && f,
          b = e.autoFocus,
          g = void 0 !== b && b,
          v = r(e, ['className', 'value', 'onChange', 'placeholder', 'allowClear', 'autoFocus']),
          h = i.useState(o),
          m = h[0],
          y = h[1]
        return a.createElement(
          'div',
          n({ className: c.default(u()) }, v),
          a.createElement('input', {
            className: c.default(u('field'), t, p && u('field-allow-clear')),
            type: 'text',
            value: m,
            onChange: function(e) {
              var t = e.target.value
              try {
                l(t), y(t)
              } catch (e) {
                console.error(
                  'value set error, please check your onChange method, errorMessage:' + e,
                )
              }
            },
            placeholder: d,
            autoFocus: g,
          }),
          p && m
            ? a.createElement(
                s.Button,
                {
                  onClick: function() {
                    y(''), l('')
                  },
                  className: c.default(u('allow-clear')),
                },
                a.createElement(s.Icon, { name: 'close' }),
              )
            : null,
        )
      }
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(3),
        c = o(5),
        l = o(4)
      o(37)
      var s = l.setPrefixClassName('coo-button')
      t.default = function(e) {
        var t = e.type,
          o = void 0 === t ? 'default' : t,
          l = e.children,
          u = void 0 === l ? null : l,
          d = e.className,
          f = void 0 === d ? '' : d,
          p = (e.plain, e.round),
          b = void 0 !== p && p,
          g = e.circle,
          v = void 0 !== g && g,
          h = e.loading,
          m = void 0 !== h && h,
          y = e.disabled,
          w = void 0 !== y && y,
          x = r(e, [
            'type',
            'children',
            'className',
            'plain',
            'round',
            'circle',
            'loading',
            'disabled',
          ]),
          O = function(e, t) {
            return e ? t : ''
          }
        return a.createElement(
          'button',
          n(
            {
              className: i.default(s(), s(o || 'default'), O(b, 'is-round'), O(v, 'is-circle'), f),
              disabled: w,
            },
            x,
          ),
          m
            ? a.createElement(
                'div',
                { className: s('loading-wrapper') },
                a.createElement(c.default, { name: 'loading', className: s('loading') }),
                u,
              )
            : a.createElement(a.Fragment, null, u),
        )
      }
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(10),
        c = o(39),
        l = function(e) {
          var t = {
              visible: !0,
              closable: !0,
              mask: !0,
              maskClosable: !0,
              animat: !0,
              title: e.title,
              message: e.message,
              okText: e.okText,
              cancelText: e.cancelText,
              width: e.width,
              onOk: e.onOk,
              onCancel: e.onCancel,
            },
            o = Object.assign(t, e),
            l = function() {
              e.onCancel ? e.onCancel(s) : s()
            },
            s = function() {
              i.unmountComponentAtNode(u) && u.parentNode && u.parentNode.removeChild(u)
            },
            u = document.createElement('div')
          return (
            document.body.appendChild(u),
            (function(e) {
              var t = e.title,
                o = e.message,
                s = r(e, ['title', 'message'])
              i.render(a.createElement(c.default, n({}, s, { onCancel: l, header: t }), o), u)
            })(o),
            { close: s }
          )
        }
      ;(c.default.Alert = function(e) {
        return l(Object.assign(e, { visible: !0, closable: !1, maskClosable: !1, cancelable: !1 }))
      }),
        (c.default.Confirm = function(e) {
          return l(Object.assign({ visible: !0, closable: !1, maskClosable: !1 }, e))
        }),
        (c.default.Modal = function(e) {
          return l(Object.assign(e, {}))
        })
      var s = c.default.Alert
      t.Alert = s
      var u = c.default.Confirm
      t.Confirm = u
      var d = c.default.Modal
      ;(t.Modal = d), (t.default = c.default)
    },
    function(e, o) {
      e.exports = t
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(3),
        c = o(4),
        l = o(42)
      o(12)
      var s = c.setPrefixClassName('coo-layout')
      ;(l.default.Header = function(e) {
        var t = e.children,
          o = e.className,
          c = r(e, ['children', 'className'])
        return a.createElement('header', n({ className: i.default(s('header'), o) }, c), t)
      }),
        (l.default.Content = function(e) {
          e.children
          var t = e.className,
            o = r(e, ['children', 'className'])
          return a.createElement(
            'main',
            n({ className: i.default(s('content'), t) }, o),
            e.children,
          )
        }),
        (l.default.Footer = function(e) {
          e.children
          var t = e.className,
            o = r(e, ['children', 'className'])
          return a.createElement(
            'footer',
            n({ className: i.default(s('footer'), t) }, o),
            e.children,
          )
        }),
        (l.default.Aside = function(e) {
          e.children
          var t = e.className,
            o = r(e, ['children', 'className'])
          return a.createElement('aside', n({ className: i.default(s('aside'), t) }, o), e.children)
        })
      var u = l.default.Header
      t.Header = u
      var d = l.default.Content
      t.Content = d
      var f = l.default.Footer
      ;(t.Footer = f), (t.default = l.default)
    },
    function(e, t, o) {
      var n = o(43)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(3),
        c = o(4)
      o(44)
      var l = c.setPrefixClassName('coo-popover')
      t.default = function(e) {
        var t = e.children,
          o = e.className,
          c = r(e, ['children', 'className'])
        return a.createElement('div', n({ className: i.default(l(), o) }, c), t)
      }
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(0),
        c = o(3),
        l = o(4)
      o(46)
      var s = l.setPrefixClassName('coo-tooltip')
      t.default = function(e) {
        var t = e.children,
          o = e.className,
          l = e.content,
          u = e.placement,
          d = void 0 === u ? 'top' : u,
          f = r(e, ['children', 'className', 'content', 'placement']),
          p = i.useState(!1),
          b = p[0],
          g = p[1],
          v = function(e) {
            g(e)
          }
        return a.createElement(
          'div',
          n({ className: c.default(s(), o) }, f, {
            onMouseEnter: function() {
              return v(!0)
            },
            onMouseLeave: function() {
              return v(!1)
            },
          }),
          a.createElement('div', { className: s('children') }, t),
          a.createElement(
            'div',
            {
              className: c.default(
                s('content'),
                s(b ? 'content-show' : 'content-hidden'),
                s('content-' + d),
              ),
            },
            a.createElement('i', { className: c.default(s('content-icon')) }),
            a.createElement('span', null, l),
          ),
        )
      }
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(0),
        c = o(3),
        l = o(4),
        s = o(5)
      o(48)
      var u = l.setPrefixClassName('coo-foldcard')
      t.default = function(e) {
        var t = i.useRef(null),
          o = i.useState(!1),
          l = o[0],
          d = o[1],
          f = i.useState({}),
          p = f[0],
          b = f[1]
        i.useEffect(function() {
          if ('[object HTMLDivElement]' === Object.prototype.toString.call(t.current)) {
            var e = window.getComputedStyle(t.current).height
            b({ height: e })
          }
        }, [])
        var g = e.children,
          v = e.className,
          h = e.fold,
          m = e.foldName,
          y = r(e, ['children', 'className', 'fold', 'foldName'])
        return a.createElement(
          'section',
          n({ className: c.default(u(), v) }, y),
          a.createElement('div', { className: u('content') }, g),
          a.createElement(
            'footer',
            { className: u('footer') },
            a.createElement(
              'div',
              { className: u('footer-main') },
              a.createElement(
                'p',
                {
                  className: u('footer-spread'),
                  onClick: function() {
                    return d(!l)
                  },
                },
                a.createElement(s.default, {
                  name: l ? 'arrow-up' : 'arrow-down',
                  className: u('footer-icon'),
                }),
                a.createElement('span', null, m || '展开'),
              ),
            ),
          ),
          a.createElement(
            'div',
            { style: l ? p : {}, className: c.default(u('card'), !l && u('card-hidden')) },
            a.createElement('div', { ref: t }, h),
          ),
        )
      }
    },
    function(e, t, o) {
      var n = o(17)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body,div,ul,ol,li,h1,h2,h3,h4,h5,h6,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}input::-ms-clear,input::-ms-reveal{display:none}h1{font-size:2em}article,aside,footer,header,nav,section{display:block}figcaption,figure,main{display:block}figure{margin:1em 40px}li{list-style-type:none}li:focus{outline-width:0}a{background-color:transparent;-webkit-text-decoration-skip:objects;color:inherit}a:active{color:inherit}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bold}pre,code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none;vertical-align:middle}svg:not(:root){overflow:hidden}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[class^=\'fui\']{box-sizing:border-box}[class^=\'fui\']:before,[class^=\'fui\']:after{box-sizing:border-box}\n',
        '',
      ])
    },
    function(e, t, o) {
      var n = o(19)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-icon{width:1em;height:1em;display:inline-block;overflow:hidden}.coo-icon>svg{width:1em;height:1em;fill:currentColor;overflow:hidden}\n',
        '',
      ])
    },
    function(e, t, o) {
      var n = {
        './arrow-down.svg': 21,
        './arrow-left.svg': 22,
        './arrow-right.svg': 23,
        './arrow-up.svg': 24,
        './close.svg': 25,
        './correct.svg': 26,
        './down.svg': 27,
        './eyes.svg': 28,
        './hint.svg': 29,
        './loading.svg': 30,
        './message.svg': 31,
        './share.svg': 32,
      }
      function r(e) {
        var t = a(e)
        return o(t)
      }
      function a(e) {
        if (!o.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return n[e]
      }
      ;(r.keys = function() {
        return Object.keys(n)
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 20)
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M517.868 618.78L195.45 296.51 133 359.02l384.897 384.72 384.544-384.72-62.48-62.481z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M690.515 189.73l-62.45-62.45-384.75 384.926 384.72 384.544 62.48-62.51-322.24-322.063z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M624.47 512.177L302.2 189.73l62.54-62.45 384.72 384.926-384.75 384.515-62.45-62.51z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M517.868 400.166L195.45 722.436 133 659.926l384.897-384.72 384.544 384.72-62.48 62.451z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M864.715 813.309l.026-.025-654.816-654.772c-6.586-6.59-15.686-10.666-25.738-10.666-20.096 0-36.386 16.291-36.386 36.386 0 10.052 4.075 19.151 10.664 25.737L812.501 863.96c6.644 7.143 16.119 11.617 26.643 11.617 20.096 0 36.386-16.29 36.386-36.386 0-10.128-4.139-19.284-10.815-25.881z"/><path d="M813.265 158.66l-.026-.024L158.467 813.45c-6.59 6.585-10.665 15.685-10.665 25.737 0 20.097 16.29 36.387 36.386 36.387 10.051 0 19.151-4.076 25.737-10.665l653.99-654.034c7.144-6.644 11.618-16.118 11.618-26.642 0-20.096-16.291-36.387-36.387-36.387-10.128 0-19.285 4.138-25.88 10.815z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M889.05 261.512c-7.91-7.91-21.093-7.91-29.003 0L440.809 704.48c-15.82 15.82-39.551 15.82-58.008 2.637l-218.848-208.3c-7.91-7.91-21.094-7.91-29.004 0s-7.91 21.093 0 29.003l218.848 208.301c31.64 31.64 84.375 29.004 113.379-2.637l419.238-442.968c10.547-7.91 10.547-21.094 2.637-29.004z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t), (t.default = '')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M514.472 289.527c-237.305 0-380.676 242.248-380.676 242.248s165.619 234.833 380.676 234.833 380.676-234.833 380.676-234.833-143.371-242.248-380.676-242.248zm244.72 331.238C680.091 687.507 596.045 729.529 512 729.529s-168.09-39.55-247.192-108.764c-27.192-24.72-54.383-49.439-76.63-76.63-4.944-4.944-7.416-9.888-12.36-14.832 2.472-4.943 7.416-9.887 9.888-14.831 19.775-27.191 44.495-54.382 71.686-79.102C334.022 366.156 418.067 324.134 512 324.134s177.979 42.022 254.608 111.236c27.191 24.72 49.439 51.91 71.686 79.102 2.472 4.944 7.416 9.888 9.888 14.831-2.472 4.944-7.416 9.888-12.36 14.832-22.247 24.72-46.967 51.91-76.63 76.63z"/><path d="M512 383.46c-74.158 0-131.012 59.326-131.012 131.012 0 74.158 59.326 131.012 131.012 131.012 74.158 0 131.012-59.326 131.012-131.012S583.686 383.46 512 383.46zm0 227.417c-51.91 0-93.933-42.023-93.933-93.933 0-51.91 42.023-93.933 93.933-93.933 51.91 0 93.933 42.022 93.933 93.933 0 49.438-42.023 93.933-93.933 93.933z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M457.603 346.283a55.24 55.24 0 10110.478 0 55.24 55.24 0 10-110.478 0zM476.017 475.173h73.651v257.781h-73.651z"/><path d="M512.842 143.741c-203.383 0-368.258 164.875-368.258 368.258S309.46 880.257 512.842 880.257 881.1 715.382 881.1 512 716.226 143.741 512.842 143.741zm0 699.69C329.798 843.431 181.41 695.044 181.41 512s148.388-331.432 331.432-331.432 331.433 148.387 331.433 331.432-148.387 331.432-331.433 331.432z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M519.14 143.324a24.097 24.097 0 00-5.827-.737c-13.357 0-24.183 10.828-24.183 24.184 0 13.043 10.33 23.645 23.255 24.137v.06c.31 0 .619-.012.928-.012 178.385 0 321.045 143.324 321.045 321.707 0 178.387-142.66 320.384-321.045 320.384S192.267 691.049 192.267 512.662c0-.223.008-.442.008-.663h-.008c0-13.356-10.828-24.183-24.184-24.183S143.9 498.642 143.9 511.999c0 .045.006.09.006.136-.001.175-.006.35-.006.527 0 204.023 165.39 369.413 369.413 369.413 204.022 0 369.412-165.39 369.412-369.413-.002-202.072-162.255-366.22-363.585-369.338z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M572.645 836.316c21.093-26.367 31.64-36.914 34.277-36.914 171.387-31.64 284.765-163.476 284.765-326.953C894.324 285.242 722.938 137.586 512 137.586S129.676 285.242 129.676 472.449c0 163.477 116.015 295.313 284.765 326.953 2.637 0 13.184 10.547 34.278 36.914 26.367 34.278 42.187 52.735 60.644 52.735s34.278-18.457 63.282-52.735m29.003-84.375c-15.82 2.637-26.367 15.82-55.37 52.735C527.82 825.77 512 841.59 512 841.59l-7.91-7.91c-5.274-5.274-13.184-15.82-21.094-26.367-31.64-39.551-42.187-52.735-58.008-55.372-152.93-26.367-253.125-142.382-253.125-284.765 0-158.203 152.93-290.04 342.774-290.04S857.41 308.974 857.41 467.177c-2.637 145.02-102.832 258.398-255.762 284.765z"/><path d="M322.156 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM475.086 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM628.016 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      o.r(t),
        (t.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M675.607 471.097H818.91c11.213 0 20.303 9.1 20.303 20.316v327.485c0 11.22-9.25 20.316-20.303 20.316H205.089c-11.213 0-20.303-9.1-20.303-20.316V491.414c0-11.22 9.251-20.316 20.303-20.316h143.304c11.294 0 20.451-9.156 20.451-20.451 0-11.294-9.157-20.451-20.45-20.451H184.778c-22.696 0-40.895 18.23-40.895 40.721v368.478c0 22.527 18.31 40.721 40.895 40.721h654.44c22.697 0 40.897-18.23 40.897-40.72V470.916c0-22.526-18.31-40.721-40.896-40.721H675.607c-11.294 0-20.451 9.157-20.451 20.451s9.157 20.45 20.45 20.45zM515.836 144.243a20.774 20.774 0 00-8.124.085c-6.511-1.383-13.53.462-18.567 5.5L342.327 296.644c-7.91 7.91-7.891 20.84.096 28.826 8.042 8.043 20.893 8.03 28.827.096l120.3-120.3v531.73c0 11.264 9.156 20.413 20.452 20.413 11.372 0 20.451-9.139 20.451-20.413V206.294l119.272 119.273c7.91 7.91 20.84 7.892 28.827-.096 8.042-8.042 8.03-20.893.095-28.826L533.828 149.827c-4.87-4.87-11.642-6.734-17.992-5.584z"/></svg>')
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isString = function(e) {
          return '[object String]' === Object.prototype.toString.call(e)
        })
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return function(t) {
            return e + (t ? '-' + t : '')
          }
        })
    },
    function(e, t, o) {
      var n = o(36)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-input{position:relative;display:inline-block}.coo-input-field{color:#33353b;padding:9px 15px;border:none;border-radius:3px;background:#f2f2f2;transition:background 0.3s}.coo-input-field:hover{background:#ededed}.coo-input-field:active,.coo-input-field:focus{outline:none}.coo-input-field.coo-input-field-allow-clear{padding-right:32px}.coo-input .coo-input-allow-clear{position:absolute;right:10px;top:50%;transform:translateY(-50%);padding:2px;font-size:12px;border:none;border-radius:50%;color:#fff;background:#828ca3;display:flex;justify-content:center;align-items:center}.coo-input .coo-input-allow-clear:hover{background:#67728b}.coo-input .coo-input-allow-clear:focus,.coo-input .coo-input-allow-clear:active{background:#828ca3}\n',
        '',
      ])
    },
    function(e, t, o) {
      var n = o(38)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-button{padding:8px 20px;border:1px solid;border-radius:5px;outline:none;cursor:pointer;transition:all 0.2s}.coo-button.is-round{border-radius:50px}.coo-button.is-circle{padding:12px;border-radius:50%}.coo-button-loading-wrapper{display:flex;justify-content:center;align-items:center}.coo-button-loading{margin-right:5px}.coo-button-loading>svg{animation:loadingMove 1s linear infinite}@keyframes loadingMove{from{transform:rotate(0)}to{transform:rotate(360deg)}}.coo-button-default{color:#515a6e;background:#fff;border-color:#dcdfe6}.coo-button-default:hover,.coo-button-default:focus,.coo-button-default:visited{background:#f2f2f2;border-color:#cdd1db}.coo-button-default:active{background:#d9d9d9;border-color:#afb6c6}.coo-button-default.is-plain{color:#fff;background:#fff;border-color:#dcdfe6}.coo-button-default.is-plain:hover,.coo-button-default.is-plain:focus{background:#b3b3b3;border-color:#bec4d1}.coo-button-default.is-plain:active{background:#999;border-color:#a1a9bc}.coo-button-default:disabled{background:#fcfcfc;border:#bebfbf;background:#cfcfcf;cursor:not-allowed}.coo-button-default:disabled:hover,.coo-button-default:disabled:focus,.coo-button-default:disabled:visited{background:#fcfcfc;border:#bebfbf;background:#cfcfcf}.coo-button-default:disabled:active{background:#fcfcfc;border:#bebfbf;background:#cfcfcf}.coo-button-primary{color:#fff;background:#409eff;border-color:#409eff}.coo-button-primary:hover,.coo-button-primary:focus,.coo-button-primary:visited{background:#2791ff;border-color:#2791ff}.coo-button-primary:active{background:#0077f3;border-color:#0077f3}.coo-button-primary.is-plain{color:#409eff;background:#fff;border-color:#409eff}.coo-button-primary.is-plain:hover,.coo-button-primary.is-plain:focus{background:#0052a6;border-color:#0d84ff}.coo-button-primary.is-plain:active{background:#003973;border-color:#006bd9}.coo-button-primary:disabled{background:#b3d7fc;border:#afb8c2;cursor:not-allowed}.coo-button-primary:disabled:hover,.coo-button-primary:disabled:focus,.coo-button-primary:disabled:visited{background:#b3d7fc;border:#afb8c2}.coo-button-primary:disabled:active{background:#b3d7fc;border:#afb8c2}.coo-button-success{color:#fff;background:#19be6b;border-color:#19be6b}.coo-button-success:hover,.coo-button-success:focus,.coo-button-success:visited{background:#16a75e;border-color:#16a75e}.coo-button-success:active{background:#107a45;border-color:#107a45}.coo-button-success.is-plain{color:#19be6b;background:#fff;border-color:#19be6b}.coo-button-success.is-plain:hover,.coo-button-success.is-plain:focus{background:#07371f;border-color:#139152}.coo-button-success.is-plain:active{background:#010a05;border-color:#0d6438}.coo-button-success:disabled{background:#a4e3c4;border:#abbbb3;cursor:not-allowed}.coo-button-success:disabled:hover,.coo-button-success:disabled:focus,.coo-button-success:disabled:visited{background:#a4e3c4;border:#abbbb3}.coo-button-success:disabled:active{background:#a4e3c4;border:#abbbb3}.coo-button-warning{color:#fff;background:#f90;border-color:#f90}.coo-button-warning:hover,.coo-button-warning:focus,.coo-button-warning:visited{background:#e68a00;border-color:#e68a00}.coo-button-warning:active{background:#b36b00;border-color:#b36b00}.coo-button-warning.is-plain{color:#f90;background:#fff;border-color:#f90}.coo-button-warning.is-plain:hover,.coo-button-warning.is-plain:focus{background:#663d00;border-color:#cc7a00}.coo-button-warning.is-plain:active{background:#331f00;border-color:#995c00}.coo-button-warning:disabled{background:#fcd59b;border:#c2b8a8;cursor:not-allowed}.coo-button-warning:disabled:hover,.coo-button-warning:disabled:focus,.coo-button-warning:disabled:visited{background:#fcd59b;border:#c2b8a8}.coo-button-warning:disabled:active{background:#fcd59b;border:#c2b8a8}.coo-button-danger{color:#fff;background:#f35958;border-color:#f35958}.coo-button-danger:hover,.coo-button-danger:focus,.coo-button-danger:visited{background:#f14140;border-color:#f14140}.coo-button-danger:active{background:#ed1211;border-color:#ed1211}.coo-button-danger.is-plain{color:#f35958;background:#fff;border-color:#f35958}.coo-button-danger.is-plain:hover,.coo-button-danger.is-plain:focus{background:#a60d0c;border-color:#f02a28}.coo-button-danger.is-plain:active{background:#760909;border-color:#d6110f}.coo-button-danger:disabled{background:#f7bdbc;border:#c1b1b1;cursor:not-allowed}.coo-button-danger:disabled:hover,.coo-button-danger:disabled:focus,.coo-button-danger:disabled:visited{background:#f7bdbc;border:#c1b1b1}.coo-button-danger:disabled:active{background:#f7bdbc;border:#c1b1b1}\n',
        '',
      ])
    },
    function(e, t, o) {
      'use strict'
      var n =
        (this && this.__assign) ||
        function() {
          return (n =
            Object.assign ||
            function(e) {
              for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              return e
            }).apply(this, arguments)
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = o(0),
        a = o(0),
        i = o(10),
        c = o(3),
        l = o(6),
        s = o(4)
      o(40)
      var u = s.setPrefixClassName('coo-dialog'),
        d = function(e) {
          var t = e.className,
            o = void 0 === t ? '' : t,
            s = e.style,
            d = void 0 === s ? {} : s,
            f = e.visible,
            p = void 0 !== f && f,
            b = e.width,
            g = e.header,
            v = e.footer,
            h = e.onCancel,
            m = void 0 === h ? function() {} : h,
            y = e.onOk,
            w = e.closable,
            x = void 0 === w || w,
            O = e.mask,
            k = void 0 === O || O,
            j = e.maskClosable,
            N = void 0 === j || j,
            _ = e.lockScroll,
            P = void 0 === _ || _,
            C = e.animat,
            E = void 0 === C || C,
            M = e.okText,
            S = void 0 === M ? '确认' : M,
            z = e.cancelText,
            T = void 0 === z ? '取消' : z,
            B = e.cancelable,
            I = void 0 === B || B,
            L = ''
          !0 === E && (L = 'cooperDialogShow 0.3s ease')
          var H = ''
          return (
            a.useEffect(function() {
              if (p && !0 === P) {
                var e = window.getComputedStyle(document.body, null).overflow
                'hidden' !== e && ((H = e), (document.body.style.overflow = 'hidden'))
              }
              return function() {
                var e = window.getComputedStyle(document.body, null).overflow
                p && 'hidden' === e && (document.body.style.overflow = H)
              }
            }),
            p
              ? r.createElement(
                  'div',
                  { className: c.default(u(), o), style: n({ width: b, animation: L }, d) },
                  !0 !== x
                    ? null
                    : r.createElement(l.Icon, { name: 'close', className: u('close'), onClick: m }),
                  null !== g
                    ? r.createElement('header', { className: u('header') }, g || '提示')
                    : null,
                  r.createElement('main', { className: u('main') }, e.children),
                  v
                    ? r.createElement('footer', { className: u('footer') }, v)
                    : null !== v
                    ? r.createElement(
                        'footer',
                        { className: u('footer') },
                        r.createElement(
                          'div',
                          { className: u('footer-button-wrapper') },
                          !0 === I &&
                            r.createElement(
                              l.Button,
                              {
                                className: u('footer-button-cancel'),
                                onClick: function() {
                                  m && m()
                                },
                              },
                              T,
                            ),
                          r.createElement(
                            l.Button,
                            {
                              className: u('footer-button-ok'),
                              type: 'primary',
                              onClick: function() {
                                y ? y(m) : m()
                              },
                            },
                            S,
                          ),
                        ),
                      )
                    : null,
                  !0 === k &&
                    i.createPortal(
                      r.createElement('div', {
                        onClick: function() {
                          !0 === N && m()
                        },
                        className: u('mask'),
                        style: { animation: L },
                      }),
                      document.body,
                    ),
                )
              : null
          )
        }
      ;(d.Alert = function() {}),
        (d.Confirm = function() {}),
        (d.Modal = function() {}),
        (t.default = d)
    },
    function(e, t, o) {
      var n = o(41)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-dialog{position:fixed;left:50%;top:50%;z-index:1001;width:800px;border-radius:5px;margin:0 auto;background:#fff;transform:translate(-50%, -50%)}.coo-dialog-mask{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.3);z-index:1000}.coo-dialog-close{position:absolute;right:10px;top:10px;color:#888;cursor:pointer}.coo-dialog-close:hover{color:#409eff}.coo-dialog-header{color:#333;padding:20px;border-bottom:1px solid #f2f2f2}.coo-dialog-main{color:#494949;padding:20px}.coo-dialog-footer{padding:10px 20px;border-top:1px solid #f2f2f2}.coo-dialog-footer .coo-dialog-footer-button-wrapper{display:flex;justify-content:flex-end}.coo-dialog-footer .coo-dialog-footer-button-wrapper .coo-dialog-footer-button-cancel,.coo-dialog-footer .coo-dialog-footer-button-wrapper .coo-dialog-footer-button-ok{padding:5px 15px;font-size:14px}.coo-dialog-footer .coo-dialog-footer-button-wrapper .coo-dialog-footer-button-cancel{margin-right:10px}@keyframes cooperDialogShow{from{opacity:0}to{opacity:1}}@keyframes cooperDialogHidden{from{opacity:1}to{opacity:0}}\n',
        '',
      ])
    },
    function(e, t, o) {
      'use strict'
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          },
        r =
          (this && this.__rest) ||
          function(e, t) {
            var o = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n])
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var r = 0
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]])
            }
            return o
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = o(0),
        i = o(3),
        c = o(4)
      o(12)
      var l = c.setPrefixClassName('coo-layout'),
        s = function(e) {
          var t = e.children,
            o = e.className,
            c = r(e, ['children', 'className']),
            u = a.Children.map(t, function(e) {
              return e.type
            }).some(function(e) {
              return e === s.Aside
            })
          return a.createElement(
            'section',
            n({ className: i.default(l(), o, u ? l('has-aside') : '') }, c),
            t,
          )
        }
      ;(s.Header = function() {}),
        (s.Content = function() {}),
        (s.Footer = function() {}),
        (s.Aside = function() {}),
        (t.default = s)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-layout{min-height:100px;display:flex;flex-direction:column;flex-grow:1}.coo-layout-content{flex-grow:1}.coo-layout-has-aside{flex-direction:row}\n',
        '',
      ])
    },
    function(e, t, o) {
      var n = o(45)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([e.i, '', ''])
    },
    function(e, t, o) {
      var n = o(47)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-tooltip{position:relative;display:inline-block;vertical-align:top}.coo-tooltip-children{position:relative;z-index:2}.coo-tooltip-content{position:absolute;height:24px;color:#fff;font-size:0.8em;white-space:nowrap;line-height:24px;padding-left:20px;padding-right:20px;border-radius:4px;background:rgba(0,0,0,0.75);visibility:visible;transition:opacity 0.2s}.coo-tooltip-content-icon{position:absolute;z-index:1;left:50%;bottom:0;border:6px solid transparent;border-color:transparent;border-top-color:rgba(0,0,0,0.75);margin-bottom:-12px;transform:translateX(-50%)}.coo-tooltip-content-show{opacity:1;transform:scale(1);visibility:visible}.coo-tooltip-content-hidden{opacity:0;transform:scale(0);visibility:hidden}.coo-tooltip .coo-tooltip-content-top{left:50%;top:-32px;transform:translateX(-50%)}.coo-tooltip .coo-tooltip-content-bottom{left:50%;bottom:-32px;transform:translateX(-50%)}.coo-tooltip .coo-tooltip-content-bottom .coo-tooltip-content-icon{transform:translateX(-50%) rotateX(180deg);transform-origin:top;top:0}.coo-tooltip .coo-tooltip-content-left{left:0;top:50%;transform:translateX(calc(-100% - 12px)) translateY(-50%)}.coo-tooltip .coo-tooltip-content-left .coo-tooltip-content-icon{left:unset;bottom:unset;right:0;top:50%;transform:translateY(-50%) rotate(270deg);margin-right:-12px}.coo-tooltip .coo-tooltip-content-right{right:0;top:50%;transform:translateX(calc(100% + 12px)) translateY(-50%)}.coo-tooltip .coo-tooltip-content-right .coo-tooltip-content-icon{bottom:unset;left:0;top:50%;transform:translateY(-50%) rotate(90deg);margin-left:-12px}\n',
        '',
      ])
    },
    function(e, t, o) {
      var n = o(49)
      'string' == typeof n && (n = [[e.i, n, '']])
      var r = { insert: 'head', singleton: !1 }
      o(2)(n, r)
      n.locals && (e.exports = n.locals)
    },
    function(e, t, o) {
      ;(e.exports = o(1)(!1)).push([
        e.i,
        '.coo-foldcard{background:#fff;box-shadow:0 10px 10px 1px #dcdfe6}.coo-foldcard-content{padding:15px}.coo-foldcard-footer{padding:10px 15px;color:#515a6e;background:#f2f2f2}.coo-foldcard-footer-main{display:flex;align-items:center;justify-content:flex-end;font-size:14px;opacity:0.5;transition:opacity 0.3s;user-select:none}.coo-foldcard-footer-main:hover{opacity:1}.coo-foldcard-footer-spread{display:flex;align-items:center;cursor:pointer}.coo-foldcard-footer-icon{margin-left:5px;margin-right:5px}.coo-foldcard-card{height:0;background:#f2f2f2;transition:height 0.3s ease-out;overflow:hidden}.coo-foldcard-card-hidden{height:0}\n',
        '',
      ])
    },
  ])
})
