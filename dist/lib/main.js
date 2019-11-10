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
    function n(r) {
      if (e[r]) return e[r].exports
      var o = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function(e) {
                return t[e]
              }.bind(null, o),
            )
        return r
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 12))
    )
  })([
    function(e, n) {
      e.exports = t
    },
    function(t, e, n) {
      var r
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) t.push(r)
              else if (Array.isArray(r) && r.length) {
                var s = o.apply(null, r)
                s && t.push(s)
              } else if ('object' === i) for (var a in r) n.call(r, a) && r[a] && t.push(a)
            }
          }
          return t.join(' ')
        }
        t.exports
          ? ((o.default = o), (t.exports = o))
          : void 0 ===
              (r = function() {
                return o
              }.apply(e, [])) || (t.exports = r)
      })()
    },
    function(t, e, n) {
      var r = n(3)
      'string' == typeof r && (r = [[t.i, r, '']])
      var o = { insert: 'head', singleton: !1 }
      n(5)(r, o)
      r.locals && (t.exports = r.locals)
    },
    function(t, e, n) {
      ;(t.exports = n(4)(!1)).push([
        t.i,
        '.c-icon>svg{fill:currentColor;width:1.2em;height:1.2em;vertical-align:-0.2em;overflow:hidden}\n',
        '',
      ])
    },
    function(t, e, n) {
      'use strict'
      t.exports = function(t) {
        var e = []
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = (function(t, e) {
                var n = t[1] || '',
                  r = t[3]
                if (!r) return n
                if (e && 'function' == typeof btoa) {
                  var o =
                      ((s = r),
                      (a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
                      (c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        a,
                      )),
                      '/*# '.concat(c, ' */')),
                    i = r.sources.map(function(t) {
                      return '/*# sourceURL='.concat(r.sourceRoot).concat(t, ' */')
                    })
                  return [n]
                    .concat(i)
                    .concat([o])
                    .join('\n')
                }
                var s, a, c
                return [n].join('\n')
              })(e, t)
              return e[2] ? '@media '.concat(e[2], '{').concat(n, '}') : n
            }).join('')
          }),
          (e.i = function(t, n) {
            'string' == typeof t && (t = [[null, t, '']])
            for (var r = {}, o = 0; o < this.length; o++) {
              var i = this[o][0]
              null != i && (r[i] = !0)
            }
            for (var s = 0; s < t.length; s++) {
              var a = t[s]
              ;(null != a[0] && r[a[0]]) ||
                (n && !a[2] ? (a[2] = n) : n && (a[2] = '('.concat(a[2], ') and (').concat(n, ')')),
                e.push(a))
            }
          }),
          e
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var r,
        o = {},
        i = function() {
          return (
            void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
          )
        },
        s = (function() {
          var t = {}
          return function(e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e)
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head
                } catch (t) {
                  n = null
                }
              t[e] = n
            }
            return t[e]
          }
        })()
      function a(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var i = t[o],
            s = e.base ? i[0] + e.base : i[0],
            a = { css: i[1], media: i[2], sourceMap: i[3] }
          r[s] ? r[s].parts.push(a) : n.push((r[s] = { id: s, parts: [a] }))
        }
        return n
      }
      function c(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = o[r.id],
            s = 0
          if (i) {
            for (i.refs++; s < i.parts.length; s++) i.parts[s](r.parts[s])
            for (; s < r.parts.length; s++) i.parts.push(g(r.parts[s], e))
          } else {
            for (var a = []; s < r.parts.length; s++) a.push(g(r.parts[s], e))
            o[r.id] = { id: r.id, refs: 1, parts: a }
          }
        }
      }
      function u(t) {
        var e = document.createElement('style')
        if (void 0 === t.attributes.nonce) {
          var r = n.nc
          r && (t.attributes.nonce = r)
        }
        if (
          (Object.keys(t.attributes).forEach(function(n) {
            e.setAttribute(n, t.attributes[n])
          }),
          'function' == typeof t.insert)
        )
          t.insert(e)
        else {
          var o = s(t.insert || 'head')
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          o.appendChild(e)
        }
        return e
      }
      var l,
        f =
          ((l = []),
          function(t, e) {
            return (l[t] = e), l.filter(Boolean).join('\n')
          })
      function d(t, e, n, r) {
        var o = n ? '' : r.css
        if (t.styleSheet) t.styleSheet.cssText = f(e, o)
        else {
          var i = document.createTextNode(o),
            s = t.childNodes
          s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i)
        }
      }
      function p(t, e, n) {
        var r = n.css,
          o = n.media,
          i = n.sourceMap
        if (
          (o && t.setAttribute('media', o),
          i &&
            btoa &&
            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              ' */',
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = r
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild)
          t.appendChild(document.createTextNode(r))
        }
      }
      var v = null,
        h = 0
      function g(t, e) {
        var n, r, o
        if (e.singleton) {
          var i = h++
          ;(n = v || (v = u(e))), (r = d.bind(null, n, i, !1)), (o = d.bind(null, n, i, !0))
        } else
          (n = u(e)),
            (r = p.bind(null, n, e)),
            (o = function() {
              !(function(t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(n)
            })
        return (
          r(t),
          function(e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return
              r((t = e))
            } else o()
          }
        )
      }
      t.exports = function(t, e) {
        ;((e = e || {}).attributes = 'object' == typeof e.attributes ? e.attributes : {}),
          e.singleton || 'boolean' == typeof e.singleton || (e.singleton = i())
        var n = a(t, e)
        return (
          c(n, e),
          function(t) {
            for (var r = [], i = 0; i < n.length; i++) {
              var s = n[i],
                u = o[s.id]
              u && (u.refs--, r.push(u))
            }
            t && c(a(t, e), e)
            for (var l = 0; l < r.length; l++) {
              var f = r[l]
              if (0 === f.refs) {
                for (var d = 0; d < f.parts.length; d++) f.parts[d]()
                delete o[f.id]
              }
            }
          }
        )
      }
    },
    function(t, e, n) {
      var r = {
        './correct.svg': 7,
        './eyes.svg': 8,
        './hint.svg': 9,
        './message.svg': 10,
        './share.svg': 11,
      }
      function o(t) {
        var e = i(t)
        return n(e)
      }
      function i(t) {
        if (!n.o(r, t)) {
          var e = new Error("Cannot find module '" + t + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return r[t]
      }
      ;(o.keys = function() {
        return Object.keys(r)
      }),
        (o.resolve = i),
        (t.exports = o),
        (o.id = 6)
    },
    function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M889.05 261.512c-7.91-7.91-21.093-7.91-29.003 0L440.809 704.48c-15.82 15.82-39.551 15.82-58.008 2.637l-218.848-208.3c-7.91-7.91-21.094-7.91-29.004 0s-7.91 21.093 0 29.003l218.848 208.301c31.64 31.64 84.375 29.004 113.379-2.637l419.238-442.968c10.547-7.91 10.547-21.094 2.637-29.004z"/></svg>')
    },
    function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M514.472 289.527c-237.305 0-380.676 242.248-380.676 242.248s165.619 234.833 380.676 234.833 380.676-234.833 380.676-234.833-143.371-242.248-380.676-242.248zm244.72 331.238C680.091 687.507 596.045 729.529 512 729.529s-168.09-39.55-247.192-108.764c-27.192-24.72-54.383-49.439-76.63-76.63-4.944-4.944-7.416-9.888-12.36-14.832 2.472-4.943 7.416-9.887 9.888-14.831 19.775-27.191 44.495-54.382 71.686-79.102C334.022 366.156 418.067 324.134 512 324.134s177.979 42.022 254.608 111.236c27.191 24.72 49.439 51.91 71.686 79.102 2.472 4.944 7.416 9.888 9.888 14.831-2.472 4.944-7.416 9.888-12.36 14.832-22.247 24.72-46.967 51.91-76.63 76.63z"/><path d="M512 383.46c-74.158 0-131.012 59.326-131.012 131.012 0 74.158 59.326 131.012 131.012 131.012 74.158 0 131.012-59.326 131.012-131.012S583.686 383.46 512 383.46zm0 227.417c-51.91 0-93.933-42.023-93.933-93.933 0-51.91 42.023-93.933 93.933-93.933 51.91 0 93.933 42.022 93.933 93.933 0 49.438-42.023 93.933-93.933 93.933z"/></svg>')
    },
    function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M457.603 346.283a55.24 55.24 0 10110.478 0 55.24 55.24 0 10-110.478 0zM476.017 475.173h73.651v257.781h-73.651z"/><path d="M512.842 143.741c-203.383 0-368.258 164.875-368.258 368.258S309.46 880.257 512.842 880.257 881.1 715.382 881.1 512 716.226 143.741 512.842 143.741zm0 699.69C329.798 843.431 181.41 695.044 181.41 512s148.388-331.432 331.432-331.432 331.433 148.387 331.433 331.432-148.387 331.432-331.433 331.432z"/></svg>')
    },
    function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M572.645 836.316c21.093-26.367 31.64-36.914 34.277-36.914 171.387-31.64 284.765-163.476 284.765-326.953C894.324 285.242 722.938 137.586 512 137.586S129.676 285.242 129.676 472.449c0 163.477 116.015 295.313 284.765 326.953 2.637 0 13.184 10.547 34.278 36.914 26.367 34.278 42.187 52.735 60.644 52.735s34.278-18.457 63.282-52.735m29.003-84.375c-15.82 2.637-26.367 15.82-55.37 52.735C527.82 825.77 512 841.59 512 841.59l-7.91-7.91c-5.274-5.274-13.184-15.82-21.094-26.367-31.64-39.551-42.187-52.735-58.008-55.372-152.93-26.367-253.125-142.382-253.125-284.765 0-158.203 152.93-290.04 342.774-290.04S857.41 308.974 857.41 467.177c-2.637 145.02-102.832 258.398-255.762 284.765z"/><path d="M322.156 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM475.086 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0zM628.016 477.723a1.236 1.154 90 1073.828 0 1.236 1.154 90 10-73.828 0z"/></svg>')
    },
    function(t, e, n) {
      'use strict'
      n.r(e),
        (e.default =
          '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M675.607 471.097H818.91c11.213 0 20.303 9.1 20.303 20.316v327.485c0 11.22-9.25 20.316-20.303 20.316H205.089c-11.213 0-20.303-9.1-20.303-20.316V491.414c0-11.22 9.251-20.316 20.303-20.316h143.304c11.294 0 20.451-9.156 20.451-20.451 0-11.294-9.157-20.451-20.45-20.451H184.778c-22.696 0-40.895 18.23-40.895 40.721v368.478c0 22.527 18.31 40.721 40.895 40.721h654.44c22.697 0 40.897-18.23 40.897-40.72V470.916c0-22.526-18.31-40.721-40.896-40.721H675.607c-11.294 0-20.451 9.157-20.451 20.451s9.157 20.45 20.45 20.45zM515.836 144.243a20.774 20.774 0 00-8.124.085c-6.511-1.383-13.53.462-18.567 5.5L342.327 296.644c-7.91 7.91-7.891 20.84.096 28.826 8.042 8.043 20.893 8.03 28.827.096l120.3-120.3v531.73c0 11.264 9.156 20.413 20.452 20.413 11.372 0 20.451-9.139 20.451-20.413V206.294l119.272 119.273c7.91 7.91 20.84 7.892 28.827-.096 8.042-8.042 8.03-20.893.095-28.826L533.828 149.827c-4.87-4.87-11.642-6.734-17.992-5.584z"/></svg>')
    },
    function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(0),
        o = n(1),
        i = n.n(o)
      n(2)
      var s = ({ name: t, className: e, ...o }) =>
          t
            ? r.createElement(
                'span',
                Object.assign(
                  {
                    dangerouslySetInnerHTML: { __html: n(6)(`./${t}.svg`).default },
                    className: i()('c-icon', e),
                  },
                  o,
                ),
              )
            : (console.warn('Did you forget to assign a value to the name attribute?'), null),
        a = t => r.createElement('div', null, t.children)
      var c = function(t) {
        return r.createElement('div', null, t.children)
      }
      n.d(e, 'Icon', function() {
        return s
      }),
        n.d(e, 'Input', function() {
          return a
        }),
        n.d(e, 'Button', function() {
          return c
        })
    },
  ])
})
