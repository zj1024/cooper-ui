!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], e)
    : 'object' == typeof exports
    ? (exports.cui = e(require('react')))
    : (t.cui = e(t.React))
})(window, function(t) {
  return (function(t) {
    var e = {}
    function r(o) {
      if (e[o]) return e[o].exports
      var n = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function(t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (r.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (r.t = function(t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if (
          (r.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var n in t)
            r.d(
              o,
              n,
              function(e) {
                return t[e]
              }.bind(null, n),
            )
        return o
      }),
      (r.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return r.d(e, 'a', e), e
      }),
      (r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (r.p = ''),
      r((r.s = 8))
    )
  })([
    function(e, r) {
      e.exports = t
    },
    function(t, e, r) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                return t
              }).apply(this, arguments)
          },
        n =
          (this && this.__rest) ||
          function(t, e) {
            var r = {}
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o])
            if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
              var n = 0
              for (o = Object.getOwnPropertySymbols(t); n < o.length; n++)
                e.indexOf(o[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
                  (r[o[n]] = t[o[n]])
            }
            return r
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var c = r(0),
        a = r(2)
      r(9)
      e.default = function(t) {
        var e = t.name,
          i = t.className,
          u = n(t, ['name', 'className'])
        return e
          ? c.createElement(
              'span',
              o(
                {
                  dangerouslySetInnerHTML: { __html: r(11)('./' + e + '.svg').default },
                  className: a.default('c-icon', i),
                },
                u,
              ),
            )
          : (console.warn('Did you forget to assign a value to the name attribute?'), null)
      }
    },
    function(t, e, r) {
      var o
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var r = {}.hasOwnProperty
        function n() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var o = arguments[e]
            if (o) {
              var c = typeof o
              if ('string' === c || 'number' === c) t.push(o)
              else if (Array.isArray(o) && o.length) {
                var a = n.apply(null, o)
                a && t.push(a)
              } else if ('object' === c) for (var i in o) r.call(o, i) && o[i] && t.push(i)
            }
          }
          return t.join(' ')
        }
        t.exports
          ? ((n.default = n), (t.exports = n))
          : void 0 ===
              (o = function() {
                return n
              }.apply(e, [])) || (t.exports = o)
      })()
    },
    function(t, e, r) {
      'use strict'
      t.exports = function(t) {
        var e = []
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var r = (function(t, e) {
                var r = t[1] || '',
                  o = t[3]
                if (!o) return r
                if (e && 'function' == typeof btoa) {
                  var n =
                      ((a = o),
                      (i = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                      (u = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        i,
                      )),
                      '/*# '.concat(u, ' */')),
                    c = o.sources.map(function(t) {
                      return '/*# sourceURL='.concat(o.sourceRoot).concat(t, ' */')
                    })
                  return [r]
                    .concat(c)
                    .concat([n])
                    .join('\n')
                }
                var a, i, u
                return [r].join('\n')
              })(e, t)
              return e[2] ? '@media '.concat(e[2], '{').concat(r, '}') : r
            }).join('')
          }),
          (e.i = function(t, r) {
            'string' == typeof t && (t = [[null, t, '']])
            for (var o = {}, n = 0; n < this.length; n++) {
              var c = this[n][0]
              null != c && (o[c] = !0)
            }
            for (var a = 0; a < t.length; a++) {
              var i = t[a]
              ;(null != i[0] && o[i[0]]) ||
                (r && !i[2] ? (i[2] = r) : r && (i[2] = '('.concat(i[2], ') and (').concat(r, ')')),
                e.push(i))
            }
          }),
          e
        )
      }
    },
    function(t, e, r) {
      'use strict'
      var o,
        n = {},
        c = function() {
          return (
            void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
          )
        },
        a = (function() {
          var t = {}
          return function(e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e)
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                  r = r.contentDocument.head
                } catch (t) {
                  r = null
                }
              t[e] = r
            }
            return t[e]
          }
        })()
      function i(t, e) {
        for (var r = [], o = {}, n = 0; n < t.length; n++) {
          var c = t[n],
            a = e.base ? c[0] + e.base : c[0],
            i = { css: c[1], media: c[2], sourceMap: c[3] }
          o[a] ? o[a].parts.push(i) : r.push((o[a] = { id: a, parts: [i] }))
        }
        return r
      }
      function u(t, e) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r],
            c = n[o.id],
            a = 0
          if (c) {
            for (c.refs++; a < c.parts.length; a++) c.parts[a](o.parts[a])
            for (; a < o.parts.length; a++) c.parts.push(g(o.parts[a], e))
          } else {
            for (var i = []; a < o.parts.length; a++) i.push(g(o.parts[a], e))
            n[o.id] = { id: o.id, refs: 1, parts: i }
          }
        }
      }
      function s(t) {
        var e = document.createElement('style')
        if (void 0 === t.attributes.nonce) {
          var o = r.nc
          o && (t.attributes.nonce = o)
        }
        if (
          (Object.keys(t.attributes).forEach(function(r) {
            e.setAttribute(r, t.attributes[r])
          }),
          'function' == typeof t.insert)
        )
          t.insert(e)
        else {
          var n = a(t.insert || 'head')
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          n.appendChild(e)
        }
        return e
      }
      var d,
        l =
          ((d = []),
          function(t, e) {
            return (d[t] = e), d.filter(Boolean).join('\n')
          })
      function f(t, e, r, o) {
        var n = r ? '' : o.css
        if (t.styleSheet) t.styleSheet.cssText = l(e, n)
        else {
          var c = document.createTextNode(n),
            a = t.childNodes
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(c, a[e]) : t.appendChild(c)
        }
      }
      function b(t, e, r) {
        var o = r.css,
          n = r.media,
          c = r.sourceMap
        if (
          (n && t.setAttribute('media', n),
          c &&
            btoa &&
            (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
              ' */',
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = o
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild)
          t.appendChild(document.createTextNode(o))
        }
      }
      var p = null,
        v = 0
      function g(t, e) {
        var r, o, n
        if (e.singleton) {
          var c = v++
          ;(r = p || (p = s(e))), (o = f.bind(null, r, c, !1)), (n = f.bind(null, r, c, !0))
        } else
          (r = s(e)),
            (o = b.bind(null, r, e)),
            (n = function() {
              !(function(t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(r)
            })
        return (
          o(t),
          function(e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return
              o((t = e))
            } else n()
          }
        )
      }
      t.exports = function(t, e) {
        ;((e = e || {}).attributes = 'object' == typeof e.attributes ? e.attributes : {}),
          e.singleton || 'boolean' == typeof e.singleton || (e.singleton = c())
        var r = i(t, e)
        return (
          u(r, e),
          function(t) {
            for (var o = [], c = 0; c < r.length; c++) {
              var a = r[c],
                s = n[a.id]
              s && (s.refs--, o.push(s))
            }
            t && u(i(t, e), e)
            for (var d = 0; d < o.length; d++) {
              var l = o[d]
              if (0 === l.refs) {
                for (var f = 0; f < l.parts.length; f++) l.parts[f]()
                delete n[l.id]
              }
            }
          }
        )
      }
    },
    function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = r(0)
      e.default = function(t) {
        return o.createElement('div', null, t.children)
      }
    },
    function(t, e, r) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, r = 1, o = arguments.length; r < o; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                return t
              }).apply(this, arguments)
          },
        n =
          (this && this.__rest) ||
          function(t, e) {
            var r = {}
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o])
            if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
              var n = 0
              for (o = Object.getOwnPropertySymbols(t); n < o.length; n++)
                e.indexOf(o[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
                  (r[o[n]] = t[o[n]])
            }
            return r
          }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var c = r(0),
        a = r(2)
      r(17)
      e.default = function(t) {
        var e = t.type,
          r = void 0 === e ? 'default' : e,
          i = t.children,
          u = void 0 === i ? null : i,
          s = t.className,
          d = void 0 === s ? '' : s,
          l = (t.plain, t.round),
          f = void 0 !== l && l,
          b = t.circle,
          p = void 0 !== b && b,
          v = (t.loading, t.disabled),
          g = void 0 !== v && v,
          h = n(t, [
            'type',
            'children',
            'className',
            'plain',
            'round',
            'circle',
            'loading',
            'disabled',
          ]),
          y = function(t, e) {
            return t ? e : ''
          }
        return c.createElement(
          'button',
          o(
            {
              className: a.default(
                'c-button',
                'c-button-' + (r || 'default'),
                y(f, 'is-round'),
                y(p, 'is-circle'),
                d,
              ),
              disabled: g,
            },
            h,
          ),
          u,
        )
      }
    },
    function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var o = r(0)
      e.default = function(t) {
        return o.createElement(
          'div',
          { className: 'c-dialog-mask' },
          o.createElement('div', { className: 'c-dialog' }, t.children),
        )
      }
    },
    function(t, e, r) {
      'use strict'
      r.r(e)
      var o = r(1),
        n = r.n(o)
      r.d(e, 'Icon', function() {
        return n.a
      })
      var c = r(5),
        a = r.n(c)
      r.d(e, 'Input', function() {
        return a.a
      })
      var i = r(6),
        u = r.n(i)
      r.d(e, 'Button', function() {
        return u.a
      })
      var s = r(7),
        d = r.n(s)
      r.d(e, 'Dialog', function() {
        return d.a
      })
    },
    function(t, e, r) {
      var o = r(10)
      'string' == typeof o && (o = [[t.i, o, '']])
      var n = { insert: 'head', singleton: !1 }
      r(4)(o, n)
      o.locals && (t.exports = o.locals)
    },
    function(t, e, r) {
      ;(t.exports = r(3)(!1)).push([
        t.i,
        '.c-icon>svg{fill:currentColor;width:1.2em;height:1.2em;vertical-align:-0.2em;overflow:hidden}\n',
        '',
      ])
    },
    function(t, e, r) {
      var o = {
        './correct.svg': 12,
        './eyes.svg': 13,
        './hint.svg': 14,
        './message.svg': 15,
        './share.svg': 16,
      }
      function n(t) {
        var e = c(t)
        return r(e)
      }
      function c(t) {
        if (!r.o(o, t)) {
          var e = new Error("Cannot find module '" + t + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return o[t]
      }
      ;(n.keys = function() {
        return Object.keys(o)
      }),
        (n.resolve = c),
        (t.exports = n),
        (n.id = 11)
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M889.05 261.512c-7.91-7.91-21.093-7.91-29.003 0L440.809 704.48c-15.82 15.82-39.551 15.82-58.008 2.637l-218.848-208.3c-7.91-7.91-21.094-7.91-29.004 0s-7.91 21.093 0 29.003l218.848 208.301c31.64 31.64 84.375 29.004 113.379-2.637l419.238-442.968c10.547-7.91 10.547-21.094 2.637-29.004z"/></svg>')
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M514.472 289.527c-237.305 0-380.676 242.248-380.676 242.248s165.619 234.833 380.676 234.833 380.676-234.833 380.676-234.833-143.371-242.248-380.676-242.248zm244.72 331.238C680.091 687.507 596.045 729.529 512 729.529s-168.09-39.55-247.192-108.764c-27.192-24.72-54.383-49.439-76.63-76.63-4.944-4.944-7.416-9.888-12.36-14.832 2.472-4.943 7.416-9.887 9.888-14.831 19.775-27.191 44.495-54.382 71.686-79.102C334.022 366.156 418.067 324.134 512 324.134s177.979 42.022 254.608 111.236c27.191 24.72 49.439 51.91 71.686 79.102 2.472 4.944 7.416 9.888 9.888 14.831-2.472 4.944-7.416 9.888-12.36 14.832-22.247 24.72-46.967 51.91-76.63 76.63z"/><path d="M512 383.46c-74.158 0-131.012 59.326-131.012 131.012 0 74.158 59.326 131.012 131.012 131.012 74.158 0 131.012-59.326 131.012-131.012S583.686 383.46 512 383.46zm0 227.417c-51.91 0-93.933-42.023-93.933-93.933 0-51.91 42.023-93.933 93.933-93.933 51.91 0 93.933 42.022 93.933 93.933 0 49.438-42.023 93.933-93.933 93.933z"/></svg>')
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M457.603 346.283a55.24 55.24 0 10110.478 0 55.24 55.24 0 10-110.478 0zM476.017 475.173h73.651v257.781h-73.651z"/><path d="M512.842 143.741c-203.383 0-368.258 164.875-368.258 368.258S309.46 880.257 512.842 880.257 881.1 715.382 881.1 512 716.226 143.741 512.842 143.741zm0 699.69C329.798 843.431 181.41 695.044 181.41 512s148.388-331.432 331.432-331.432 331.433 148.387 331.433 331.432-148.387 331.432-331.433 331.432z"/></svg>')
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M572.645 836.316c21.093-26.367 31.64-36.914 34.277-36.914 171.387-31.64 284.765-163.476 284.765-326.953C894.324 285.242 722.938 137.586 512 137.586S129.676 285.242 129.676 472.449c0 163.477 116.015 295.313 284.765 326.953 2.637 0 13.184 10.547 34.278 36.914 26.367 34.278 42.187 52.735 60.644 52.735s34.278-18.457 63.282-52.735m29.003-84.375c-15.82 2.637-26.367 15.82-55.37 52.735C527.82 825.77 512 841.59 512 841.59l-7.91-7.91c-5.274-5.274-13.184-15.82-21.094-26.367-31.64-39.551-42.187-52.735-58.008-55.372-152.93-26.367-253.125-142.382-253.125-284.765 0-158.203 152.93-290.04 342.774-290.04S857.41 308.974 857.41 467.177c-2.637 145.02-102.832 258.398-255.762 284.765z"/><path d="M322.156 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM475.086 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM628.016 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0z"/></svg>')
    },
    function(t, e, r) {
      'use strict'
      r.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M675.607 471.097H818.91c11.213 0 20.303 9.1 20.303 20.316v327.485c0 11.22-9.25 20.316-20.303 20.316H205.089c-11.213 0-20.303-9.1-20.303-20.316V491.414c0-11.22 9.251-20.316 20.303-20.316h143.304c11.294 0 20.451-9.156 20.451-20.451 0-11.294-9.157-20.451-20.45-20.451H184.778c-22.696 0-40.895 18.23-40.895 40.721v368.478c0 22.527 18.31 40.721 40.895 40.721h654.44c22.697 0 40.897-18.23 40.897-40.72V470.916c0-22.526-18.31-40.721-40.896-40.721H675.607c-11.294 0-20.451 9.157-20.451 20.451s9.157 20.45 20.45 20.45zM515.836 144.243a20.774 20.774 0 00-8.124.085c-6.511-1.383-13.53.462-18.567 5.5L342.327 296.644c-7.91 7.91-7.891 20.84.096 28.826 8.042 8.043 20.893 8.03 28.827.096l120.3-120.3v531.73c0 11.264 9.156 20.413 20.452 20.413 11.372 0 20.451-9.139 20.451-20.413V206.294l119.272 119.273c7.91 7.91 20.84 7.892 28.827-.096 8.042-8.042 8.03-20.893.095-28.826L533.828 149.827c-4.87-4.87-11.642-6.734-17.992-5.584z"/></svg>')
    },
    function(t, e, r) {
      var o = r(18)
      'string' == typeof o && (o = [[t.i, o, '']])
      var n = { insert: 'head', singleton: !1 }
      r(4)(o, n)
      o.locals && (t.exports = o.locals)
    },
    function(t, e, r) {
      ;(t.exports = r(3)(!1)).push([
        t.i,
        '.c-button{padding:8px 20px;border:1px solid;border-radius:5px;outline:none;cursor:pointer;transition:all 0.2s}.c-button.is-round{border-radius:50px}.c-button.is-circle{padding:12px;border-radius:50%}.c-button-default{color:#515a6e;background:#fff;border-color:#dcdfe6}.c-button-default:hover,.c-button-default:focus,.c-button-default:visited{background:#f2f2f2;border-color:#cdd1db}.c-button-default:active{background:#d9d9d9;border-color:#afb6c6}.c-button-default.is-plain{color:#fff;background:#fff;border-color:#dcdfe6}.c-button-default.is-plain:hover,.c-button-default.is-plain:focus{background:#b3b3b3;border-color:#bec4d1}.c-button-default.is-plain:active{background:#999;border-color:#a1a9bc}.c-button-default:disabled{background:#fcfcfc;border:#bebfbf;background:#cfcfcf;cursor:not-allowed}.c-button-default:disabled:hover,.c-button-default:disabled:focus,.c-button-default:disabled:visited{background:#fcfcfc;border:#bebfbf;background:#cfcfcf}.c-button-default:disabled:active{background:#fcfcfc;border:#bebfbf;background:#cfcfcf}.c-button-primary{color:#fff;background:#409eff;border-color:#409eff}.c-button-primary:hover,.c-button-primary:focus,.c-button-primary:visited{background:#2791ff;border-color:#2791ff}.c-button-primary:active{background:#0077f3;border-color:#0077f3}.c-button-primary.is-plain{color:#409eff;background:#fff;border-color:#409eff}.c-button-primary.is-plain:hover,.c-button-primary.is-plain:focus{background:#0052a6;border-color:#0d84ff}.c-button-primary.is-plain:active{background:#003973;border-color:#006bd9}.c-button-primary:disabled{background:#b3d7fc;border:#afb8c2;cursor:not-allowed}.c-button-primary:disabled:hover,.c-button-primary:disabled:focus,.c-button-primary:disabled:visited{background:#b3d7fc;border:#afb8c2}.c-button-primary:disabled:active{background:#b3d7fc;border:#afb8c2}.c-button-success{color:#fff;background:#19be6b;border-color:#19be6b}.c-button-success:hover,.c-button-success:focus,.c-button-success:visited{background:#16a75e;border-color:#16a75e}.c-button-success:active{background:#107a45;border-color:#107a45}.c-button-success.is-plain{color:#19be6b;background:#fff;border-color:#19be6b}.c-button-success.is-plain:hover,.c-button-success.is-plain:focus{background:#07371f;border-color:#139152}.c-button-success.is-plain:active{background:#010a05;border-color:#0d6438}.c-button-success:disabled{background:#a4e3c4;border:#abbbb3;cursor:not-allowed}.c-button-success:disabled:hover,.c-button-success:disabled:focus,.c-button-success:disabled:visited{background:#a4e3c4;border:#abbbb3}.c-button-success:disabled:active{background:#a4e3c4;border:#abbbb3}.c-button-warning{color:#fff;background:#f90;border-color:#f90}.c-button-warning:hover,.c-button-warning:focus,.c-button-warning:visited{background:#e68a00;border-color:#e68a00}.c-button-warning:active{background:#b36b00;border-color:#b36b00}.c-button-warning.is-plain{color:#f90;background:#fff;border-color:#f90}.c-button-warning.is-plain:hover,.c-button-warning.is-plain:focus{background:#663d00;border-color:#cc7a00}.c-button-warning.is-plain:active{background:#331f00;border-color:#995c00}.c-button-warning:disabled{background:#fcd59b;border:#c2b8a8;cursor:not-allowed}.c-button-warning:disabled:hover,.c-button-warning:disabled:focus,.c-button-warning:disabled:visited{background:#fcd59b;border:#c2b8a8}.c-button-warning:disabled:active{background:#fcd59b;border:#c2b8a8}.c-button-danger{color:#fff;background:#f35958;border-color:#f35958}.c-button-danger:hover,.c-button-danger:focus,.c-button-danger:visited{background:#f14140;border-color:#f14140}.c-button-danger:active{background:#ed1211;border-color:#ed1211}.c-button-danger.is-plain{color:#f35958;background:#fff;border-color:#f35958}.c-button-danger.is-plain:hover,.c-button-danger.is-plain:focus{background:#a60d0c;border-color:#f02a28}.c-button-danger.is-plain:active{background:#760909;border-color:#d6110f}.c-button-danger:disabled{background:#f7bdbc;border:#c1b1b1;cursor:not-allowed}.c-button-danger:disabled:hover,.c-button-danger:disabled:focus,.c-button-danger:disabled:visited{background:#f7bdbc;border:#c1b1b1}.c-button-danger:disabled:active{background:#f7bdbc;border:#c1b1b1}\n',
        '',
      ])
    },
  ])
})
