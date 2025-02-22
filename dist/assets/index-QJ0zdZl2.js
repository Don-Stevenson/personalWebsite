;(function () {
  const o = document.createElement("link").relList
  if (o && o.supports && o.supports("modulepreload")) return
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c)
  new MutationObserver(c => {
    for (const f of c)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p)
  }).observe(document, { childList: !0, subtree: !0 })
  function l(c) {
    const f = {}
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    )
  }
  function a(c) {
    if (c.ep) return
    c.ep = !0
    const f = l(c)
    fetch(c.href, f)
  }
})()
function mg(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r
}
var Ea = { exports: {} },
  So = {},
  Ca = { exports: {} },
  ae = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd
function gg() {
  if (fd) return ae
  fd = 1
  var r = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    x = Symbol.iterator
  function _(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (x && k[x]) || k["@@iterator"]),
        typeof k == "function" ? k : null)
  }
  var L = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    O = {}
  function R(k, I, re) {
    ;(this.props = k),
      (this.context = I),
      (this.refs = O),
      (this.updater = re || L)
  }
  ;(R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (k, I) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        )
      this.updater.enqueueSetState(this, k, I, "setState")
    }),
    (R.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate")
    })
  function j() {}
  j.prototype = R.prototype
  function U(k, I, re) {
    ;(this.props = k),
      (this.context = I),
      (this.refs = O),
      (this.updater = re || L)
  }
  var D = (U.prototype = new j())
  ;(D.constructor = U), E(D, R.prototype), (D.isPureReactComponent = !0)
  var V = Array.isArray,
    Y = Object.prototype.hasOwnProperty,
    X = { current: null },
    K = { key: !0, ref: !0, __self: !0, __source: !0 }
  function de(k, I, re) {
    var ie,
      ue = {},
      se = null,
      me = null
    if (I != null)
      for (ie in (I.ref !== void 0 && (me = I.ref),
      I.key !== void 0 && (se = "" + I.key),
      I))
        Y.call(I, ie) && !K.hasOwnProperty(ie) && (ue[ie] = I[ie])
    var ce = arguments.length - 2
    if (ce === 1) ue.children = re
    else if (1 < ce) {
      for (var pe = Array(ce), He = 0; He < ce; He++) pe[He] = arguments[He + 2]
      ue.children = pe
    }
    if (k && k.defaultProps)
      for (ie in ((ce = k.defaultProps), ce))
        ue[ie] === void 0 && (ue[ie] = ce[ie])
    return {
      $$typeof: r,
      type: k,
      key: se,
      ref: me,
      props: ue,
      _owner: X.current,
    }
  }
  function ge(k, I) {
    return {
      $$typeof: r,
      type: k.type,
      key: I,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    }
  }
  function je(k) {
    return typeof k == "object" && k !== null && k.$$typeof === r
  }
  function yt(k) {
    var I = { "=": "=0", ":": "=2" }
    return (
      "$" +
      k.replace(/[=:]/g, function (re) {
        return I[re]
      })
    )
  }
  var vt = /\/+/g
  function Xe(k, I) {
    return typeof k == "object" && k !== null && k.key != null
      ? yt("" + k.key)
      : I.toString(36)
  }
  function ct(k, I, re, ie, ue) {
    var se = typeof k
    ;(se === "undefined" || se === "boolean") && (k = null)
    var me = !1
    if (k === null) me = !0
    else
      switch (se) {
        case "string":
        case "number":
          me = !0
          break
        case "object":
          switch (k.$$typeof) {
            case r:
            case o:
              me = !0
          }
      }
    if (me)
      return (
        (me = k),
        (ue = ue(me)),
        (k = ie === "" ? "." + Xe(me, 0) : ie),
        V(ue)
          ? ((re = ""),
            k != null && (re = k.replace(vt, "$&/") + "/"),
            ct(ue, I, re, "", function (He) {
              return He
            }))
          : ue != null &&
            (je(ue) &&
              (ue = ge(
                ue,
                re +
                  (!ue.key || (me && me.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(vt, "$&/") + "/") +
                  k
              )),
            I.push(ue)),
        1
      )
    if (((me = 0), (ie = ie === "" ? "." : ie + ":"), V(k)))
      for (var ce = 0; ce < k.length; ce++) {
        se = k[ce]
        var pe = ie + Xe(se, ce)
        me += ct(se, I, re, pe, ue)
      }
    else if (((pe = _(k)), typeof pe == "function"))
      for (k = pe.call(k), ce = 0; !(se = k.next()).done; )
        (se = se.value), (pe = ie + Xe(se, ce++)), (me += ct(se, I, re, pe, ue))
    else if (se === "object")
      throw (
        ((I = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (I === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : I) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      )
    return me
  }
  function wt(k, I, re) {
    if (k == null) return k
    var ie = [],
      ue = 0
    return (
      ct(k, ie, "", "", function (se) {
        return I.call(re, se, ue++)
      }),
      ie
    )
  }
  function Ve(k) {
    if (k._status === -1) {
      var I = k._result
      ;(I = I()),
        I.then(
          function (re) {
            ;(k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = re))
          },
          function (re) {
            ;(k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = re))
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = I))
    }
    if (k._status === 1) return k._result.default
    throw k._result
  }
  var we = { current: null },
    H = { transition: null },
    Z = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: X,
    }
  function W() {
    throw Error("act(...) is not supported in production builds of React.")
  }
  return (
    (ae.Children = {
      map: wt,
      forEach: function (k, I, re) {
        wt(
          k,
          function () {
            I.apply(this, arguments)
          },
          re
        )
      },
      count: function (k) {
        var I = 0
        return (
          wt(k, function () {
            I++
          }),
          I
        )
      },
      toArray: function (k) {
        return (
          wt(k, function (I) {
            return I
          }) || []
        )
      },
      only: function (k) {
        if (!je(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          )
        return k
      },
    }),
    (ae.Component = R),
    (ae.Fragment = l),
    (ae.Profiler = c),
    (ae.PureComponent = U),
    (ae.StrictMode = a),
    (ae.Suspense = m),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (ae.act = W),
    (ae.cloneElement = function (k, I, re) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        )
      var ie = E({}, k.props),
        ue = k.key,
        se = k.ref,
        me = k._owner
      if (I != null) {
        if (
          (I.ref !== void 0 && ((se = I.ref), (me = X.current)),
          I.key !== void 0 && (ue = "" + I.key),
          k.type && k.type.defaultProps)
        )
          var ce = k.type.defaultProps
        for (pe in I)
          Y.call(I, pe) &&
            !K.hasOwnProperty(pe) &&
            (ie[pe] = I[pe] === void 0 && ce !== void 0 ? ce[pe] : I[pe])
      }
      var pe = arguments.length - 2
      if (pe === 1) ie.children = re
      else if (1 < pe) {
        ce = Array(pe)
        for (var He = 0; He < pe; He++) ce[He] = arguments[He + 2]
        ie.children = ce
      }
      return {
        $$typeof: r,
        type: k.type,
        key: ue,
        ref: se,
        props: ie,
        _owner: me,
      }
    }),
    (ae.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      )
    }),
    (ae.createElement = de),
    (ae.createFactory = function (k) {
      var I = de.bind(null, k)
      return (I.type = k), I
    }),
    (ae.createRef = function () {
      return { current: null }
    }),
    (ae.forwardRef = function (k) {
      return { $$typeof: h, render: k }
    }),
    (ae.isValidElement = je),
    (ae.lazy = function (k) {
      return { $$typeof: w, _payload: { _status: -1, _result: k }, _init: Ve }
    }),
    (ae.memo = function (k, I) {
      return { $$typeof: y, type: k, compare: I === void 0 ? null : I }
    }),
    (ae.startTransition = function (k) {
      var I = H.transition
      H.transition = {}
      try {
        k()
      } finally {
        H.transition = I
      }
    }),
    (ae.unstable_act = W),
    (ae.useCallback = function (k, I) {
      return we.current.useCallback(k, I)
    }),
    (ae.useContext = function (k) {
      return we.current.useContext(k)
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (k) {
      return we.current.useDeferredValue(k)
    }),
    (ae.useEffect = function (k, I) {
      return we.current.useEffect(k, I)
    }),
    (ae.useId = function () {
      return we.current.useId()
    }),
    (ae.useImperativeHandle = function (k, I, re) {
      return we.current.useImperativeHandle(k, I, re)
    }),
    (ae.useInsertionEffect = function (k, I) {
      return we.current.useInsertionEffect(k, I)
    }),
    (ae.useLayoutEffect = function (k, I) {
      return we.current.useLayoutEffect(k, I)
    }),
    (ae.useMemo = function (k, I) {
      return we.current.useMemo(k, I)
    }),
    (ae.useReducer = function (k, I, re) {
      return we.current.useReducer(k, I, re)
    }),
    (ae.useRef = function (k) {
      return we.current.useRef(k)
    }),
    (ae.useState = function (k) {
      return we.current.useState(k)
    }),
    (ae.useSyncExternalStore = function (k, I, re) {
      return we.current.useSyncExternalStore(k, I, re)
    }),
    (ae.useTransition = function () {
      return we.current.useTransition()
    }),
    (ae.version = "18.3.1"),
    ae
  )
}
var dd
function tu() {
  return dd || ((dd = 1), (Ca.exports = gg())), Ca.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd
function yg() {
  if (pd) return So
  pd = 1
  var r = tu(),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 }
  function p(h, m, y) {
    var w,
      x = {},
      _ = null,
      L = null
    y !== void 0 && (_ = "" + y),
      m.key !== void 0 && (_ = "" + m.key),
      m.ref !== void 0 && (L = m.ref)
    for (w in m) a.call(m, w) && !f.hasOwnProperty(w) && (x[w] = m[w])
    if (h && h.defaultProps)
      for (w in ((m = h.defaultProps), m)) x[w] === void 0 && (x[w] = m[w])
    return { $$typeof: o, type: h, key: _, ref: L, props: x, _owner: c.current }
  }
  return (So.Fragment = l), (So.jsx = p), (So.jsxs = p), So
}
var hd
function vg() {
  return hd || ((hd = 1), (Ea.exports = yg())), Ea.exports
}
var z = vg(),
  A = tu()
const tt = mg(A)
var Ki = {},
  _a = { exports: {} },
  st = {},
  Ra = { exports: {} },
  Pa = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md
function wg() {
  return (
    md ||
      ((md = 1),
      (function (r) {
        function o(H, Z) {
          var W = H.length
          H.push(Z)
          e: for (; 0 < W; ) {
            var k = (W - 1) >>> 1,
              I = H[k]
            if (0 < c(I, Z)) (H[k] = Z), (H[W] = I), (W = k)
            else break e
          }
        }
        function l(H) {
          return H.length === 0 ? null : H[0]
        }
        function a(H) {
          if (H.length === 0) return null
          var Z = H[0],
            W = H.pop()
          if (W !== Z) {
            H[0] = W
            e: for (var k = 0, I = H.length, re = I >>> 1; k < re; ) {
              var ie = 2 * (k + 1) - 1,
                ue = H[ie],
                se = ie + 1,
                me = H[se]
              if (0 > c(ue, W))
                se < I && 0 > c(me, ue)
                  ? ((H[k] = me), (H[se] = W), (k = se))
                  : ((H[k] = ue), (H[ie] = W), (k = ie))
              else if (se < I && 0 > c(me, W))
                (H[k] = me), (H[se] = W), (k = se)
              else break e
            }
          }
          return Z
        }
        function c(H, Z) {
          var W = H.sortIndex - Z.sortIndex
          return W !== 0 ? W : H.id - Z.id
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance
          r.unstable_now = function () {
            return f.now()
          }
        } else {
          var p = Date,
            h = p.now()
          r.unstable_now = function () {
            return p.now() - h
          }
        }
        var m = [],
          y = [],
          w = 1,
          x = null,
          _ = 3,
          L = !1,
          E = !1,
          O = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function D(H) {
          for (var Z = l(y); Z !== null; ) {
            if (Z.callback === null) a(y)
            else if (Z.startTime <= H)
              a(y), (Z.sortIndex = Z.expirationTime), o(m, Z)
            else break
            Z = l(y)
          }
        }
        function V(H) {
          if (((O = !1), D(H), !E))
            if (l(m) !== null) (E = !0), Ve(Y)
            else {
              var Z = l(y)
              Z !== null && we(V, Z.startTime - H)
            }
        }
        function Y(H, Z) {
          ;(E = !1), O && ((O = !1), j(de), (de = -1)), (L = !0)
          var W = _
          try {
            for (
              D(Z), x = l(m);
              x !== null && (!(x.expirationTime > Z) || (H && !yt()));

            ) {
              var k = x.callback
              if (typeof k == "function") {
                ;(x.callback = null), (_ = x.priorityLevel)
                var I = k(x.expirationTime <= Z)
                ;(Z = r.unstable_now()),
                  typeof I == "function"
                    ? (x.callback = I)
                    : x === l(m) && a(m),
                  D(Z)
              } else a(m)
              x = l(m)
            }
            if (x !== null) var re = !0
            else {
              var ie = l(y)
              ie !== null && we(V, ie.startTime - Z), (re = !1)
            }
            return re
          } finally {
            ;(x = null), (_ = W), (L = !1)
          }
        }
        var X = !1,
          K = null,
          de = -1,
          ge = 5,
          je = -1
        function yt() {
          return !(r.unstable_now() - je < ge)
        }
        function vt() {
          if (K !== null) {
            var H = r.unstable_now()
            je = H
            var Z = !0
            try {
              Z = K(!0, H)
            } finally {
              Z ? Xe() : ((X = !1), (K = null))
            }
          } else X = !1
        }
        var Xe
        if (typeof U == "function")
          Xe = function () {
            U(vt)
          }
        else if (typeof MessageChannel < "u") {
          var ct = new MessageChannel(),
            wt = ct.port2
          ;(ct.port1.onmessage = vt),
            (Xe = function () {
              wt.postMessage(null)
            })
        } else
          Xe = function () {
            R(vt, 0)
          }
        function Ve(H) {
          ;(K = H), X || ((X = !0), Xe())
        }
        function we(H, Z) {
          de = R(function () {
            H(r.unstable_now())
          }, Z)
        }
        ;(r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (H) {
            H.callback = null
          }),
          (r.unstable_continueExecution = function () {
            E || L || ((E = !0), Ve(Y))
          }),
          (r.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < H ? Math.floor(1e3 / H) : 5)
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return _
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return l(m)
          }),
          (r.unstable_next = function (H) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var Z = 3
                break
              default:
                Z = _
            }
            var W = _
            _ = Z
            try {
              return H()
            } finally {
              _ = W
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (H, Z) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                H = 3
            }
            var W = _
            _ = H
            try {
              return Z()
            } finally {
              _ = W
            }
          }),
          (r.unstable_scheduleCallback = function (H, Z, W) {
            var k = r.unstable_now()
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? k + W : k))
                : (W = k),
              H)
            ) {
              case 1:
                var I = -1
                break
              case 2:
                I = 250
                break
              case 5:
                I = 1073741823
                break
              case 4:
                I = 1e4
                break
              default:
                I = 5e3
            }
            return (
              (I = W + I),
              (H = {
                id: w++,
                callback: Z,
                priorityLevel: H,
                startTime: W,
                expirationTime: I,
                sortIndex: -1,
              }),
              W > k
                ? ((H.sortIndex = W),
                  o(y, H),
                  l(m) === null &&
                    H === l(y) &&
                    (O ? (j(de), (de = -1)) : (O = !0), we(V, W - k)))
                : ((H.sortIndex = I), o(m, H), E || L || ((E = !0), Ve(Y))),
              H
            )
          }),
          (r.unstable_shouldYield = yt),
          (r.unstable_wrapCallback = function (H) {
            var Z = _
            return function () {
              var W = _
              _ = Z
              try {
                return H.apply(this, arguments)
              } finally {
                _ = W
              }
            }
          })
      })(Pa)),
    Pa
  )
}
var gd
function Sg() {
  return gd || ((gd = 1), (Ra.exports = wg())), Ra.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd
function xg() {
  if (yd) return st
  yd = 1
  var r = tu(),
    o = Sg()
  function l(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n])
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
  }
  var a = new Set(),
    c = {}
  function f(e, t) {
    p(e, t), p(e + "Capture", t)
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e])
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    x = {}
  function _(e) {
    return m.call(x, e)
      ? !0
      : m.call(w, e)
      ? !1
      : y.test(e)
      ? (x[e] = !0)
      : ((w[e] = !0), !1)
  }
  function L(e, t, n, i) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0
      case "boolean":
        return i
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-")
      default:
        return !1
    }
  }
  function E(e, t, n, i) {
    if (t === null || typeof t > "u" || L(e, t, n, i)) return !0
    if (i) return !1
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function O(e, t, n, i, s, u, d) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = d)
  }
  var R = {}
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new O(e, 0, !1, e, null, !1, !1)
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0]
      R[t] = new O(t, 1, !1, e[1], null, !1, !1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      R[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      R[e] = new O(e, 2, !1, e, null, !1, !1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new O(e, 3, !0, e, null, !1, !1)
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new O(e, 4, !1, e, null, !1, !1)
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new O(e, 6, !1, e, null, !1, !1)
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var j = /[\-:]([a-z])/g
  function U(e) {
    return e[1].toUpperCase()
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(j, U)
      R[t] = new O(t, 1, !1, e, null, !1, !1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(j, U)
        R[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(j, U)
      R[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (R.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function D(e, t, n, i) {
    var s = R.hasOwnProperty(t) ? R[t] : null
    ;(s !== null
      ? s.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (E(t, n, s, i) && (n = null),
      i || s === null
        ? _(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (i = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
  }
  var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Y = Symbol.for("react.element"),
    X = Symbol.for("react.portal"),
    K = Symbol.for("react.fragment"),
    de = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    je = Symbol.for("react.provider"),
    yt = Symbol.for("react.context"),
    vt = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Ve = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    H = Symbol.iterator
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null)
  }
  var W = Object.assign,
    k
  function I(e) {
    if (k === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        k = (t && t[1]) || ""
      }
    return (
      `
` +
      k +
      e
    )
  }
  var re = !1
  function ie(e, t) {
    if (!e || re) return ""
    re = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (N) {
            var i = N
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (N) {
            i = N
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (N) {
          i = N
        }
        e()
      }
    } catch (N) {
      if (N && i && typeof N.stack == "string") {
        for (
          var s = N.stack.split(`
`),
            u = i.stack.split(`
`),
            d = s.length - 1,
            g = u.length - 1;
          1 <= d && 0 <= g && s[d] !== u[g];

        )
          g--
        for (; 1 <= d && 0 <= g; d--, g--)
          if (s[d] !== u[g]) {
            if (d !== 1 || g !== 1)
              do
                if ((d--, g--, 0 > g || s[d] !== u[g])) {
                  var v =
                    `
` + s[d].replace(" at new ", " at ")
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  )
                }
              while (1 <= d && 0 <= g)
            break
          }
      }
    } finally {
      ;(re = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : ""
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return I(e.type)
      case 16:
        return I("Lazy")
      case 13:
        return I("Suspense")
      case 19:
        return I("SuspenseList")
      case 0:
      case 2:
      case 15:
        return (e = ie(e.type, !1)), e
      case 11:
        return (e = ie(e.type.render, !1)), e
      case 1:
        return (e = ie(e.type, !0)), e
      default:
        return ""
    }
  }
  function se(e) {
    if (e == null) return null
    if (typeof e == "function") return e.displayName || e.name || null
    if (typeof e == "string") return e
    switch (e) {
      case K:
        return "Fragment"
      case X:
        return "Portal"
      case ge:
        return "Profiler"
      case de:
        return "StrictMode"
      case Xe:
        return "Suspense"
      case ct:
        return "SuspenseList"
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yt:
          return (e.displayName || "Context") + ".Consumer"
        case je:
          return (e._context.displayName || "Context") + ".Provider"
        case vt:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          )
        case wt:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || "Memo"
          )
        case Ve:
          ;(t = e._payload), (e = e._init)
          try {
            return se(e(t))
          } catch {}
      }
    return null
  }
  function me(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return "Cache"
      case 9:
        return (t.displayName || "Context") + ".Consumer"
      case 10:
        return (t._context.displayName || "Context") + ".Provider"
      case 18:
        return "DehydratedFragment"
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        )
      case 7:
        return "Fragment"
      case 5:
        return t
      case 4:
        return "Portal"
      case 3:
        return "Root"
      case 6:
        return "Text"
      case 16:
        return se(t)
      case 8:
        return t === de ? "StrictMode" : "Mode"
      case 22:
        return "Offscreen"
      case 12:
        return "Profiler"
      case 21:
        return "Scope"
      case 13:
        return "Suspense"
      case 19:
        return "SuspenseList"
      case 25:
        return "TracingMarker"
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null
        if (typeof t == "string") return t
    }
    return null
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e
      case "object":
        return e
      default:
        return ""
    }
  }
  function pe(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    )
  }
  function He(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        u = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this)
          },
          set: function (d) {
            ;(i = "" + d), u.call(this, d)
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i
          },
          setValue: function (d) {
            i = "" + d
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function Qt(e) {
    e._valueTracker || (e._valueTracker = He(e))
  }
  function Pt(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      i = ""
    return (
      e && (i = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    )
  }
  function Fo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function Ol(e, t) {
    var n = t.checked
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    })
  }
  function yu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked
    ;(n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      })
  }
  function vu(e, t) {
    ;(t = t.checked), t != null && D(e, "checked", t, !1)
  }
  function Ll(e, t) {
    vu(e, t)
    var n = ce(t.value),
      i = t.type
    if (n != null)
      i === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n)
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value")
      return
    }
    t.hasOwnProperty("value")
      ? jl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && jl(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked)
  }
  function wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return
      ;(t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n)
  }
  function jl(e, t, n) {
    ;(t !== "number" || Fo(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
  }
  var Ir = Array.isArray
  function Yn(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {}
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && i && (e[n].defaultSelected = !0)
    } else {
      for (n = "" + ce(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ;(e[s].selected = !0), i && (e[s].defaultSelected = !0)
          return
        }
        t !== null || e[s].disabled || (t = e[s])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Al(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91))
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    })
  }
  function Su(e, t) {
    var n = t.value
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(l(92))
        if (Ir(n)) {
          if (1 < n.length) throw Error(l(93))
          n = n[0]
        }
        t = n
      }
      t == null && (t = ""), (n = t)
    }
    e._wrapperState = { initialValue: ce(n) }
  }
  function xu(e, t) {
    var n = ce(t.value),
      i = ce(t.defaultValue)
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      i != null && (e.defaultValue = "" + i)
  }
  function ku(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t)
  }
  function Eu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg"
      case "math":
        return "http://www.w3.org/1998/Math/MathML"
      default:
        return "http://www.w3.org/1999/xhtml"
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Eu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e
  }
  var Mo,
    Cu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, s)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t
      else {
        for (
          Mo = Mo || document.createElement("div"),
            Mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Mo.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function zr(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Dr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    wh = ["Webkit", "ms", "Moz", "O"]
  Object.keys(Dr).forEach(function (e) {
    wh.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e])
    })
  })
  function _u(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
      ? ("" + t).trim()
      : t + "px"
  }
  function Ru(e, t) {
    e = e.style
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var i = n.indexOf("--") === 0,
          s = _u(n, t[n], i)
        n === "float" && (n = "cssFloat"), i ? e.setProperty(n, s) : (e[n] = s)
      }
  }
  var Sh = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function zl(e, t) {
    if (t) {
      if (Sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60))
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61))
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62))
    }
  }
  function Dl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string"
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1
      default:
        return !0
    }
  }
  var Fl = null
  function Ml(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var $l = null,
    Jn = null,
    Xn = null
  function Pu(e) {
    if ((e = oo(e))) {
      if (typeof $l != "function") throw Error(l(280))
      var t = e.stateNode
      t && ((t = si(t)), $l(e.stateNode, e.type, t))
    }
  }
  function Nu(e) {
    Jn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Jn = e)
  }
  function Tu() {
    if (Jn) {
      var e = Jn,
        t = Xn
      if (((Xn = Jn = null), Pu(e), t)) for (e = 0; e < t.length; e++) Pu(t[e])
    }
  }
  function Ou(e, t) {
    return e(t)
  }
  function Lu() {}
  var Ul = !1
  function ju(e, t, n) {
    if (Ul) return e(t, n)
    Ul = !0
    try {
      return Ou(e, t, n)
    } finally {
      ;(Ul = !1), (Jn !== null || Xn !== null) && (Lu(), Tu())
    }
  }
  function Fr(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var i = si(n)
    if (i === null) return null
    n = i[t]
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ;(i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != "function") throw Error(l(231, t, typeof n))
    return n
  }
  var Bl = !1
  if (h)
    try {
      var Mr = {}
      Object.defineProperty(Mr, "passive", {
        get: function () {
          Bl = !0
        },
      }),
        window.addEventListener("test", Mr, Mr),
        window.removeEventListener("test", Mr, Mr)
    } catch {
      Bl = !1
    }
  function xh(e, t, n, i, s, u, d, g, v) {
    var N = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, N)
    } catch (M) {
      this.onError(M)
    }
  }
  var $r = !1,
    $o = null,
    Uo = !1,
    Hl = null,
    kh = {
      onError: function (e) {
        ;($r = !0), ($o = e)
      },
    }
  function Eh(e, t, n, i, s, u, d, g, v) {
    ;($r = !1), ($o = null), xh.apply(kh, arguments)
  }
  function Ch(e, t, n, i, s, u, d, g, v) {
    if ((Eh.apply(this, arguments), $r)) {
      if ($r) {
        var N = $o
        ;($r = !1), ($o = null)
      } else throw Error(l(198))
      Uo || ((Uo = !0), (Hl = N))
    }
  }
  function Pn(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function Au(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function Iu(e) {
    if (Pn(e) !== e) throw Error(l(188))
  }
  function _h(e) {
    var t = e.alternate
    if (!t) {
      if (((t = Pn(e)), t === null)) throw Error(l(188))
      return t !== e ? null : e
    }
    for (var n = e, i = t; ; ) {
      var s = n.return
      if (s === null) break
      var u = s.alternate
      if (u === null) {
        if (((i = s.return), i !== null)) {
          n = i
          continue
        }
        break
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return Iu(s), e
          if (u === i) return Iu(s), t
          u = u.sibling
        }
        throw Error(l(188))
      }
      if (n.return !== i.return) (n = s), (i = u)
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            ;(d = !0), (n = s), (i = u)
            break
          }
          if (g === i) {
            ;(d = !0), (i = s), (n = u)
            break
          }
          g = g.sibling
        }
        if (!d) {
          for (g = u.child; g; ) {
            if (g === n) {
              ;(d = !0), (n = u), (i = s)
              break
            }
            if (g === i) {
              ;(d = !0), (i = u), (n = s)
              break
            }
            g = g.sibling
          }
          if (!d) throw Error(l(189))
        }
      }
      if (n.alternate !== i) throw Error(l(190))
    }
    if (n.tag !== 3) throw Error(l(188))
    return n.stateNode.current === n ? e : t
  }
  function zu(e) {
    return (e = _h(e)), e !== null ? Du(e) : null
  }
  function Du(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = Du(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var Fu = o.unstable_scheduleCallback,
    Mu = o.unstable_cancelCallback,
    Rh = o.unstable_shouldYield,
    Ph = o.unstable_requestPaint,
    Te = o.unstable_now,
    Nh = o.unstable_getCurrentPriorityLevel,
    Wl = o.unstable_ImmediatePriority,
    $u = o.unstable_UserBlockingPriority,
    Bo = o.unstable_NormalPriority,
    Th = o.unstable_LowPriority,
    Uu = o.unstable_IdlePriority,
    Ho = null,
    Mt = null
  function Oh(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function")
      try {
        Mt.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : Ah,
    Lh = Math.log,
    jh = Math.LN2
  function Ah(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Lh(e) / jh) | 0)) | 0
  }
  var Wo = 64,
    bo = 4194304
  function Ur(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Vo(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var i = 0,
      s = e.suspendedLanes,
      u = e.pingedLanes,
      d = n & 268435455
    if (d !== 0) {
      var g = d & ~s
      g !== 0 ? (i = Ur(g)) : ((u &= d), u !== 0 && (i = Ur(u)))
    } else (d = n & ~s), d !== 0 ? (i = Ur(d)) : u !== 0 && (i = Ur(u))
    if (i === 0) return 0
    if (
      t !== 0 &&
      t !== i &&
      !(t & s) &&
      ((s = i & -i), (u = t & -t), s >= u || (s === 16 && (u & 4194240) !== 0))
    )
      return t
    if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (n = 31 - Nt(t)), (s = 1 << n), (i |= e[n]), (t &= ~s)
    return i
  }
  function Ih(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function zh(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        s = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var d = 31 - Nt(u),
        g = 1 << d,
        v = s[d]
      v === -1
        ? (!(g & n) || g & i) && (s[d] = Ih(g, t))
        : v <= t && (e.expiredLanes |= g),
        (u &= ~g)
    }
  }
  function bl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function Bu() {
    var e = Wo
    return (Wo <<= 1), !(Wo & 4194240) && (Wo = 64), e
  }
  function Vl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function Br(e, t, n) {
    ;(e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = n)
  }
  function Dh(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements)
    var i = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Nt(n),
        u = 1 << s
      ;(t[s] = 0), (i[s] = -1), (e[s] = -1), (n &= ~u)
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var i = 31 - Nt(n),
        s = 1 << i
      ;(s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s)
    }
  }
  var ve = 0
  function Hu(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var Wu,
    Ql,
    bu,
    Vu,
    Ku,
    ql = !1,
    Ko = [],
    ln = null,
    sn = null,
    an = null,
    Hr = new Map(),
    Wr = new Map(),
    un = [],
    Fh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      )
  function Qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ln = null
        break
      case "dragenter":
      case "dragleave":
        sn = null
        break
      case "mouseover":
      case "mouseout":
        an = null
        break
      case "pointerover":
      case "pointerout":
        Hr.delete(t.pointerId)
        break
      case "gotpointercapture":
      case "lostpointercapture":
        Wr.delete(t.pointerId)
    }
  }
  function br(e, t, n, i, s, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [s],
        }),
        t !== null && ((t = oo(t)), t !== null && Ql(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e)
  }
  function Mh(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return (ln = br(ln, e, t, n, i, s)), !0
      case "dragenter":
        return (sn = br(sn, e, t, n, i, s)), !0
      case "mouseover":
        return (an = br(an, e, t, n, i, s)), !0
      case "pointerover":
        var u = s.pointerId
        return Hr.set(u, br(Hr.get(u) || null, e, t, n, i, s)), !0
      case "gotpointercapture":
        return (
          (u = s.pointerId), Wr.set(u, br(Wr.get(u) || null, e, t, n, i, s)), !0
        )
    }
    return !1
  }
  function qu(e) {
    var t = Nn(e.target)
    if (t !== null) {
      var n = Pn(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Au(n)), t !== null)) {
            ;(e.blockedOn = t),
              Ku(e.priority, function () {
                bu(n)
              })
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Qo(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var i = new n.constructor(n.type, n)
        ;(Fl = i), n.target.dispatchEvent(i), (Fl = null)
      } else return (t = oo(n)), t !== null && Ql(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function Gu(e, t, n) {
    Qo(e) && n.delete(t)
  }
  function $h() {
    ;(ql = !1),
      ln !== null && Qo(ln) && (ln = null),
      sn !== null && Qo(sn) && (sn = null),
      an !== null && Qo(an) && (an = null),
      Hr.forEach(Gu),
      Wr.forEach(Gu)
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ql ||
        ((ql = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, $h)))
  }
  function Kr(e) {
    function t(s) {
      return Vr(s, e)
    }
    if (0 < Ko.length) {
      Vr(Ko[0], e)
      for (var n = 1; n < Ko.length; n++) {
        var i = Ko[n]
        i.blockedOn === e && (i.blockedOn = null)
      }
    }
    for (
      ln !== null && Vr(ln, e),
        sn !== null && Vr(sn, e),
        an !== null && Vr(an, e),
        Hr.forEach(t),
        Wr.forEach(t),
        n = 0;
      n < un.length;
      n++
    )
      (i = un[n]), i.blockedOn === e && (i.blockedOn = null)
    for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
      qu(n), n.blockedOn === null && un.shift()
  }
  var Zn = V.ReactCurrentBatchConfig,
    qo = !0
  function Uh(e, t, n, i) {
    var s = ve,
      u = Zn.transition
    Zn.transition = null
    try {
      ;(ve = 1), Gl(e, t, n, i)
    } finally {
      ;(ve = s), (Zn.transition = u)
    }
  }
  function Bh(e, t, n, i) {
    var s = ve,
      u = Zn.transition
    Zn.transition = null
    try {
      ;(ve = 4), Gl(e, t, n, i)
    } finally {
      ;(ve = s), (Zn.transition = u)
    }
  }
  function Gl(e, t, n, i) {
    if (qo) {
      var s = Yl(e, t, n, i)
      if (s === null) ps(e, t, i, Go, n), Qu(e, i)
      else if (Mh(s, e, t, n, i)) i.stopPropagation()
      else if ((Qu(e, i), t & 4 && -1 < Fh.indexOf(e))) {
        for (; s !== null; ) {
          var u = oo(s)
          if (
            (u !== null && Wu(u),
            (u = Yl(e, t, n, i)),
            u === null && ps(e, t, i, Go, n),
            u === s)
          )
            break
          s = u
        }
        s !== null && i.stopPropagation()
      } else ps(e, t, i, null, n)
    }
  }
  var Go = null
  function Yl(e, t, n, i) {
    if (((Go = null), (e = Ml(i)), (e = Nn(e)), e !== null))
      if (((t = Pn(e)), t === null)) e = null
      else if (((n = t.tag), n === 13)) {
        if (((e = Au(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (Go = e), null
  }
  function Yu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4
      case "message":
        switch (Nh()) {
          case Wl:
            return 1
          case $u:
            return 4
          case Bo:
          case Th:
            return 16
          case Uu:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var cn = null,
    Jl = null,
    Yo = null
  function Ju() {
    if (Yo) return Yo
    var e,
      t = Jl,
      n = t.length,
      i,
      s = "value" in cn ? cn.value : cn.textContent,
      u = s.length
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e
    for (i = 1; i <= d && t[n - i] === s[u - i]; i++);
    return (Yo = s.slice(e, 1 < i ? 1 - i : void 0))
  }
  function Jo(e) {
    var t = e.keyCode
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Xo() {
    return !0
  }
  function Xu() {
    return !1
  }
  function ft(e) {
    function t(n, i, s, u, d) {
      ;(this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = d),
        (this.currentTarget = null)
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(u) : u[g]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Xo
          : Xu),
        (this.isPropagationStopped = Xu),
        this
      )
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xo))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xo))
        },
        persist: function () {},
        isPersistent: Xo,
      }),
      t
    )
  }
  var er = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xl = ft(er),
    Qr = W({}, er, { view: 0, detail: 0 }),
    Hh = ft(Qr),
    Zl,
    es,
    qr,
    Zo = W({}, Qr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ns,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== qr &&
              (qr && e.type === "mousemove"
                ? ((Zl = e.screenX - qr.screenX), (es = e.screenY - qr.screenY))
                : (es = Zl = 0),
              (qr = e)),
            Zl)
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : es
      },
    }),
    Zu = ft(Zo),
    Wh = W({}, Zo, { dataTransfer: 0 }),
    bh = ft(Wh),
    Vh = W({}, Qr, { relatedTarget: 0 }),
    ts = ft(Vh),
    Kh = W({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qh = ft(Kh),
    qh = W({}, er, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      },
    }),
    Gh = ft(qh),
    Yh = W({}, er, { data: 0 }),
    ec = ft(Yh),
    Jh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Zh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    }
  function em(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Zh[e])
      ? !!t[e]
      : !1
  }
  function ns() {
    return em
  }
  var tm = W({}, Qr, {
      key: function (e) {
        if (e.key) {
          var t = Jh[e.key] || e.key
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress"
          ? ((e = Jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Xh[e.keyCode] || "Unidentified"
          : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ns,
      charCode: function (e) {
        return e.type === "keypress" ? Jo(e) : 0
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === "keypress"
          ? Jo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0
      },
    }),
    nm = ft(tm),
    rm = W({}, Zo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tc = ft(rm),
    om = W({}, Qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ns,
    }),
    im = ft(om),
    lm = W({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sm = ft(lm),
    am = W({}, Zo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    um = ft(am),
    cm = [9, 13, 27, 32],
    rs = h && "CompositionEvent" in window,
    Gr = null
  h && "documentMode" in document && (Gr = document.documentMode)
  var fm = h && "TextEvent" in window && !Gr,
    nc = h && (!rs || (Gr && 8 < Gr && 11 >= Gr)),
    rc = " ",
    oc = !1
  function ic(e, t) {
    switch (e) {
      case "keyup":
        return cm.indexOf(t.keyCode) !== -1
      case "keydown":
        return t.keyCode !== 229
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0
      default:
        return !1
    }
  }
  function lc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
  }
  var tr = !1
  function dm(e, t) {
    switch (e) {
      case "compositionend":
        return lc(t)
      case "keypress":
        return t.which !== 32 ? null : ((oc = !0), rc)
      case "textInput":
        return (e = t.data), e === rc && oc ? null : e
      default:
        return null
    }
  }
  function pm(e, t) {
    if (tr)
      return e === "compositionend" || (!rs && ic(e, t))
        ? ((e = Ju()), (Yo = Jl = cn = null), (tr = !1), e)
        : null
    switch (e) {
      case "paste":
        return null
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case "compositionend":
        return nc && t.locale !== "ko" ? null : t.data
      default:
        return null
    }
  }
  var hm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === "input" ? !!hm[e.type] : t === "textarea"
  }
  function ac(e, t, n, i) {
    Nu(i),
      (t = oi(t, "onChange")),
      0 < t.length &&
        ((n = new Xl("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }))
  }
  var Yr = null,
    Jr = null
  function mm(e) {
    Rc(e, 0)
  }
  function ei(e) {
    var t = lr(e)
    if (Pt(t)) return e
  }
  function gm(e, t) {
    if (e === "change") return t
  }
  var uc = !1
  if (h) {
    var os
    if (h) {
      var is = "oninput" in document
      if (!is) {
        var cc = document.createElement("div")
        cc.setAttribute("oninput", "return;"),
          (is = typeof cc.oninput == "function")
      }
      os = is
    } else os = !1
    uc = os && (!document.documentMode || 9 < document.documentMode)
  }
  function fc() {
    Yr && (Yr.detachEvent("onpropertychange", dc), (Jr = Yr = null))
  }
  function dc(e) {
    if (e.propertyName === "value" && ei(Jr)) {
      var t = []
      ac(t, Jr, e, Ml(e)), ju(mm, t)
    }
  }
  function ym(e, t, n) {
    e === "focusin"
      ? (fc(), (Yr = t), (Jr = n), Yr.attachEvent("onpropertychange", dc))
      : e === "focusout" && fc()
  }
  function vm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ei(Jr)
  }
  function wm(e, t) {
    if (e === "click") return ei(t)
  }
  function Sm(e, t) {
    if (e === "input" || e === "change") return ei(t)
  }
  function xm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Tt = typeof Object.is == "function" ? Object.is : xm
  function Xr(e, t) {
    if (Tt(e, t)) return !0
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1
    var n = Object.keys(e),
      i = Object.keys(t)
    if (n.length !== i.length) return !1
    for (i = 0; i < n.length; i++) {
      var s = n[i]
      if (!m.call(t, s) || !Tt(e[s], t[s])) return !1
    }
    return !0
  }
  function pc(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function hc(e, t) {
    var n = pc(e)
    e = 0
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e }
        e = i
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = pc(n)
    }
  }
  function mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? mc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function gc() {
    for (var e = window, t = Fo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string"
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = Fo(e.document)
    }
    return t
  }
  function ls(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    )
  }
  function km(e) {
    var t = gc(),
      n = e.focusedElem,
      i = e.selectionRange
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      mc(n.ownerDocument.documentElement, n)
    ) {
      if (i !== null && ls(n)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var s = n.textContent.length,
            u = Math.min(i.start, s)
          ;(i = i.end === void 0 ? u : Math.min(i.end, s)),
            !e.extend && u > i && ((s = i), (i = u), (u = s)),
            (s = hc(n, u))
          var d = hc(n, i)
          s &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            u > i
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top)
    }
  }
  var Em = h && "documentMode" in document && 11 >= document.documentMode,
    nr = null,
    ss = null,
    Zr = null,
    as = !1
  function yc(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    as ||
      nr == null ||
      nr !== Fo(i) ||
      ((i = nr),
      "selectionStart" in i && ls(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Zr && Xr(Zr, i)) ||
        ((Zr = i),
        (i = oi(ss, "onSelect")),
        0 < i.length &&
          ((t = new Xl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = nr))))
  }
  function ti(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    )
  }
  var rr = {
      animationend: ti("Animation", "AnimationEnd"),
      animationiteration: ti("Animation", "AnimationIteration"),
      animationstart: ti("Animation", "AnimationStart"),
      transitionend: ti("Transition", "TransitionEnd"),
    },
    us = {},
    vc = {}
  h &&
    ((vc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete rr.animationend.animation,
      delete rr.animationiteration.animation,
      delete rr.animationstart.animation),
    "TransitionEvent" in window || delete rr.transitionend.transition)
  function ni(e) {
    if (us[e]) return us[e]
    if (!rr[e]) return e
    var t = rr[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in vc) return (us[e] = t[n])
    return e
  }
  var wc = ni("animationend"),
    Sc = ni("animationiteration"),
    xc = ni("animationstart"),
    kc = ni("transitionend"),
    Ec = new Map(),
    Cc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      )
  function fn(e, t) {
    Ec.set(e, t), f(t, [e])
  }
  for (var cs = 0; cs < Cc.length; cs++) {
    var fs = Cc[cs],
      Cm = fs.toLowerCase(),
      _m = fs[0].toUpperCase() + fs.slice(1)
    fn(Cm, "on" + _m)
  }
  fn(wc, "onAnimationEnd"),
    fn(Sc, "onAnimationIteration"),
    fn(xc, "onAnimationStart"),
    fn("dblclick", "onDoubleClick"),
    fn("focusin", "onFocus"),
    fn("focusout", "onBlur"),
    fn(kc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    )
  var eo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Rm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(eo)
    )
  function _c(e, t, n) {
    var i = e.type || "unknown-event"
    ;(e.currentTarget = n), Ch(i, t, void 0, e), (e.currentTarget = null)
  }
  function Rc(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        s = i.event
      i = i.listeners
      e: {
        var u = void 0
        if (t)
          for (var d = i.length - 1; 0 <= d; d--) {
            var g = i[d],
              v = g.instance,
              N = g.currentTarget
            if (((g = g.listener), v !== u && s.isPropagationStopped())) break e
            _c(s, g, N), (u = v)
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((g = i[d]),
              (v = g.instance),
              (N = g.currentTarget),
              (g = g.listener),
              v !== u && s.isPropagationStopped())
            )
              break e
            _c(s, g, N), (u = v)
          }
      }
    }
    if (Uo) throw ((e = Hl), (Uo = !1), (Hl = null), e)
  }
  function xe(e, t) {
    var n = t[ws]
    n === void 0 && (n = t[ws] = new Set())
    var i = e + "__bubble"
    n.has(i) || (Pc(t, e, 2, !1), n.add(i))
  }
  function ds(e, t, n) {
    var i = 0
    t && (i |= 4), Pc(n, e, i, t)
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2)
  function to(e) {
    if (!e[ri]) {
      ;(e[ri] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Rm.has(n) || ds(n, !1, e), ds(n, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[ri] || ((t[ri] = !0), ds("selectionchange", !1, t))
    }
  }
  function Pc(e, t, n, i) {
    switch (Yu(t)) {
      case 1:
        var s = Uh
        break
      case 4:
        s = Bh
        break
      default:
        s = Gl
    }
    ;(n = s.bind(null, t, n, e)),
      (s = void 0),
      !Bl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1)
  }
  function ps(e, t, n, i, s) {
    var u = i
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return
        var d = i.tag
        if (d === 3 || d === 4) {
          var g = i.stateNode.containerInfo
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var v = d.tag
              if (
                (v === 3 || v === 4) &&
                ((v = d.stateNode.containerInfo),
                v === s || (v.nodeType === 8 && v.parentNode === s))
              )
                return
              d = d.return
            }
          for (; g !== null; ) {
            if (((d = Nn(g)), d === null)) return
            if (((v = d.tag), v === 5 || v === 6)) {
              i = u = d
              continue e
            }
            g = g.parentNode
          }
        }
        i = i.return
      }
    ju(function () {
      var N = u,
        M = Ml(n),
        $ = []
      e: {
        var F = Ec.get(e)
        if (F !== void 0) {
          var b = Xl,
            q = e
          switch (e) {
            case "keypress":
              if (Jo(n) === 0) break e
            case "keydown":
            case "keyup":
              b = nm
              break
            case "focusin":
              ;(q = "focus"), (b = ts)
              break
            case "focusout":
              ;(q = "blur"), (b = ts)
              break
            case "beforeblur":
            case "afterblur":
              b = ts
              break
            case "click":
              if (n.button === 2) break e
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Zu
              break
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = bh
              break
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = im
              break
            case wc:
            case Sc:
            case xc:
              b = Qh
              break
            case kc:
              b = sm
              break
            case "scroll":
              b = Hh
              break
            case "wheel":
              b = um
              break
            case "copy":
            case "cut":
            case "paste":
              b = Gh
              break
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = tc
          }
          var G = (t & 4) !== 0,
            Oe = !G && e === "scroll",
            C = G ? (F !== null ? F + "Capture" : null) : F
          G = []
          for (var S = N, P; S !== null; ) {
            P = S
            var B = P.stateNode
            if (
              (P.tag === 5 &&
                B !== null &&
                ((P = B),
                C !== null &&
                  ((B = Fr(S, C)), B != null && G.push(no(S, B, P)))),
              Oe)
            )
              break
            S = S.return
          }
          0 < G.length &&
            ((F = new b(F, q, null, n, M)), $.push({ event: F, listeners: G }))
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (b = e === "mouseout" || e === "pointerout"),
            F &&
              n !== Fl &&
              (q = n.relatedTarget || n.fromElement) &&
              (Nn(q) || q[qt]))
          )
            break e
          if (
            (b || F) &&
            ((F =
              M.window === M
                ? M
                : (F = M.ownerDocument)
                ? F.defaultView || F.parentWindow
                : window),
            b
              ? ((q = n.relatedTarget || n.toElement),
                (b = N),
                (q = q ? Nn(q) : null),
                q !== null &&
                  ((Oe = Pn(q)), q !== Oe || (q.tag !== 5 && q.tag !== 6)) &&
                  (q = null))
              : ((b = null), (q = N)),
            b !== q)
          ) {
            if (
              ((G = Zu),
              (B = "onMouseLeave"),
              (C = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = tc),
                (B = "onPointerLeave"),
                (C = "onPointerEnter"),
                (S = "pointer")),
              (Oe = b == null ? F : lr(b)),
              (P = q == null ? F : lr(q)),
              (F = new G(B, S + "leave", b, n, M)),
              (F.target = Oe),
              (F.relatedTarget = P),
              (B = null),
              Nn(M) === N &&
                ((G = new G(C, S + "enter", q, n, M)),
                (G.target = P),
                (G.relatedTarget = Oe),
                (B = G)),
              (Oe = B),
              b && q)
            )
              t: {
                for (G = b, C = q, S = 0, P = G; P; P = or(P)) S++
                for (P = 0, B = C; B; B = or(B)) P++
                for (; 0 < S - P; ) (G = or(G)), S--
                for (; 0 < P - S; ) (C = or(C)), P--
                for (; S--; ) {
                  if (G === C || (C !== null && G === C.alternate)) break t
                  ;(G = or(G)), (C = or(C))
                }
                G = null
              }
            else G = null
            b !== null && Nc($, F, b, G, !1),
              q !== null && Oe !== null && Nc($, Oe, q, G, !0)
          }
        }
        e: {
          if (
            ((F = N ? lr(N) : window),
            (b = F.nodeName && F.nodeName.toLowerCase()),
            b === "select" || (b === "input" && F.type === "file"))
          )
            var J = gm
          else if (sc(F))
            if (uc) J = Sm
            else {
              J = vm
              var ee = ym
            }
          else
            (b = F.nodeName) &&
              b.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (J = wm)
          if (J && (J = J(e, N))) {
            ac($, J, n, M)
            break e
          }
          ee && ee(e, F, N),
            e === "focusout" &&
              (ee = F._wrapperState) &&
              ee.controlled &&
              F.type === "number" &&
              jl(F, "number", F.value)
        }
        switch (((ee = N ? lr(N) : window), e)) {
          case "focusin":
            ;(sc(ee) || ee.contentEditable === "true") &&
              ((nr = ee), (ss = N), (Zr = null))
            break
          case "focusout":
            Zr = ss = nr = null
            break
          case "mousedown":
            as = !0
            break
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ;(as = !1), yc($, n, M)
            break
          case "selectionchange":
            if (Em) break
          case "keydown":
          case "keyup":
            yc($, n, M)
        }
        var te
        if (rs)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart"
                break e
              case "compositionend":
                ne = "onCompositionEnd"
                break e
              case "compositionupdate":
                ne = "onCompositionUpdate"
                break e
            }
            ne = void 0
          }
        else
          tr
            ? ic(e, n) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ne = "onCompositionStart")
        ne &&
          (nc &&
            n.locale !== "ko" &&
            (tr || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && tr && (te = Ju())
              : ((cn = M),
                (Jl = "value" in cn ? cn.value : cn.textContent),
                (tr = !0))),
          (ee = oi(N, ne)),
          0 < ee.length &&
            ((ne = new ec(ne, e, null, n, M)),
            $.push({ event: ne, listeners: ee }),
            te
              ? (ne.data = te)
              : ((te = lc(n)), te !== null && (ne.data = te)))),
          (te = fm ? dm(e, n) : pm(e, n)) &&
            ((N = oi(N, "onBeforeInput")),
            0 < N.length &&
              ((M = new ec("onBeforeInput", "beforeinput", null, n, M)),
              $.push({ event: M, listeners: N }),
              (M.data = te)))
      }
      Rc($, t)
    })
  }
  function no(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function oi(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var s = e,
        u = s.stateNode
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        (u = Fr(e, n)),
        u != null && i.unshift(no(e, u, s)),
        (u = Fr(e, t)),
        u != null && i.push(no(e, u, s))),
        (e = e.return)
    }
    return i
  }
  function or(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Nc(e, t, n, i, s) {
    for (var u = t._reactName, d = []; n !== null && n !== i; ) {
      var g = n,
        v = g.alternate,
        N = g.stateNode
      if (v !== null && v === i) break
      g.tag === 5 &&
        N !== null &&
        ((g = N),
        s
          ? ((v = Fr(n, u)), v != null && d.unshift(no(n, v, g)))
          : s || ((v = Fr(n, u)), v != null && d.push(no(n, v, g)))),
        (n = n.return)
    }
    d.length !== 0 && e.push({ event: t, listeners: d })
  }
  var Pm = /\r\n?/g,
    Nm = /\u0000|\uFFFD/g
  function Tc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Pm,
        `
`
      )
      .replace(Nm, "")
  }
  function ii(e, t, n) {
    if (((t = Tc(t)), Tc(e) !== t && n)) throw Error(l(425))
  }
  function li() {}
  var hs = null,
    ms = null
  function gs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var ys = typeof setTimeout == "function" ? setTimeout : void 0,
    Tm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Oc = typeof Promise == "function" ? Promise : void 0,
    Om =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Oc < "u"
        ? function (e) {
            return Oc.resolve(null).then(e).catch(Lm)
          }
        : ys
  function Lm(e) {
    setTimeout(function () {
      throw e
    })
  }
  function vs(e, t) {
    var n = t,
      i = 0
    do {
      var s = n.nextSibling
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (i === 0) {
            e.removeChild(s), Kr(t)
            return
          }
          i--
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++
      n = s
    } while (n)
    Kr(t)
  }
  function dn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
        if (t === "/$") return null
      }
    }
    return e
  }
  function Lc(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e
          t--
        } else n === "/$" && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var ir = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + ir,
    ro = "__reactProps$" + ir,
    qt = "__reactContainer$" + ir,
    ws = "__reactEvents$" + ir,
    jm = "__reactListeners$" + ir,
    Am = "__reactHandles$" + ir
  function Nn(e) {
    var t = e[$t]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[qt] || n[$t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Lc(e); e !== null; ) {
            if ((n = e[$t])) return n
            e = Lc(e)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function oo(e) {
    return (
      (e = e[$t] || e[qt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(l(33))
  }
  function si(e) {
    return e[ro] || null
  }
  var Ss = [],
    sr = -1
  function pn(e) {
    return { current: e }
  }
  function ke(e) {
    0 > sr || ((e.current = Ss[sr]), (Ss[sr] = null), sr--)
  }
  function Se(e, t) {
    sr++, (Ss[sr] = e.current), (e.current = t)
  }
  var hn = {},
    Ke = pn(hn),
    nt = pn(!1),
    Tn = hn
  function ar(e, t) {
    var n = e.type.contextTypes
    if (!n) return hn
    var i = e.stateNode
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext
    var s = {},
      u
    for (u in n) s[u] = t[u]
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    )
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null
  }
  function ai() {
    ke(nt), ke(Ke)
  }
  function jc(e, t, n) {
    if (Ke.current !== hn) throw Error(l(168))
    Se(Ke, t), Se(nt, n)
  }
  function Ac(e, t, n) {
    var i = e.stateNode
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return n
    i = i.getChildContext()
    for (var s in i) if (!(s in t)) throw Error(l(108, me(e) || "Unknown", s))
    return W({}, n, i)
  }
  function ui(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        hn),
      (Tn = Ke.current),
      Se(Ke, e),
      Se(nt, nt.current),
      !0
    )
  }
  function Ic(e, t, n) {
    var i = e.stateNode
    if (!i) throw Error(l(169))
    n
      ? ((e = Ac(e, t, Tn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        ke(nt),
        ke(Ke),
        Se(Ke, e))
      : ke(nt),
      Se(nt, n)
  }
  var Gt = null,
    ci = !1,
    xs = !1
  function zc(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e)
  }
  function Im(e) {
    ;(ci = !0), zc(e)
  }
  function mn() {
    if (!xs && Gt !== null) {
      xs = !0
      var e = 0,
        t = ve
      try {
        var n = Gt
        for (ve = 1; e < n.length; e++) {
          var i = n[e]
          do i = i(!0)
          while (i !== null)
        }
        ;(Gt = null), (ci = !1)
      } catch (s) {
        throw (Gt !== null && (Gt = Gt.slice(e + 1)), Fu(Wl, mn), s)
      } finally {
        ;(ve = t), (xs = !1)
      }
    }
    return null
  }
  var ur = [],
    cr = 0,
    fi = null,
    di = 0,
    St = [],
    xt = 0,
    On = null,
    Yt = 1,
    Jt = ""
  function Ln(e, t) {
    ;(ur[cr++] = di), (ur[cr++] = fi), (fi = e), (di = t)
  }
  function Dc(e, t, n) {
    ;(St[xt++] = Yt), (St[xt++] = Jt), (St[xt++] = On), (On = e)
    var i = Yt
    e = Jt
    var s = 32 - Nt(i) - 1
    ;(i &= ~(1 << s)), (n += 1)
    var u = 32 - Nt(t) + s
    if (30 < u) {
      var d = s - (s % 5)
      ;(u = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (s -= d),
        (Yt = (1 << (32 - Nt(t) + s)) | (n << s) | i),
        (Jt = u + e)
    } else (Yt = (1 << u) | (n << s) | i), (Jt = e)
  }
  function ks(e) {
    e.return !== null && (Ln(e, 1), Dc(e, 1, 0))
  }
  function Es(e) {
    for (; e === fi; )
      (fi = ur[--cr]), (ur[cr] = null), (di = ur[--cr]), (ur[cr] = null)
    for (; e === On; )
      (On = St[--xt]),
        (St[xt] = null),
        (Jt = St[--xt]),
        (St[xt] = null),
        (Yt = St[--xt]),
        (St[xt] = null)
  }
  var dt = null,
    pt = null,
    Ce = !1,
    Ot = null
  function Fc(e, t) {
    var n = _t(5, null, null, 0)
    ;(n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
  }
  function Mc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (dt = e), (pt = dn(t.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (pt = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = On !== null ? { id: Yt, overflow: Jt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = _t(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (dt = e),
              (pt = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Cs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function _s(e) {
    if (Ce) {
      var t = pt
      if (t) {
        var n = t
        if (!Mc(e, t)) {
          if (Cs(e)) throw Error(l(418))
          t = dn(n.nextSibling)
          var i = dt
          t && Mc(e, t)
            ? Fc(i, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (dt = e))
        }
      } else {
        if (Cs(e)) throw Error(l(418))
        ;(e.flags = (e.flags & -4097) | 2), (Ce = !1), (dt = e)
      }
    }
  }
  function $c(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return
    dt = e
  }
  function pi(e) {
    if (e !== dt) return !1
    if (!Ce) return $c(e), (Ce = !0), !1
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (Cs(e)) throw (Uc(), Error(l(418)))
      for (; t; ) Fc(e, t), (t = dn(t.nextSibling))
    }
    if (($c(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data
            if (n === "/$") {
              if (t === 0) {
                pt = dn(e.nextSibling)
                break e
              }
              t--
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++
          }
          e = e.nextSibling
        }
        pt = null
      }
    } else pt = dt ? dn(e.stateNode.nextSibling) : null
    return !0
  }
  function Uc() {
    for (var e = pt; e; ) e = dn(e.nextSibling)
  }
  function fr() {
    ;(pt = dt = null), (Ce = !1)
  }
  function Rs(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e)
  }
  var zm = V.ReactCurrentBatchConfig
  function io(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(l(309))
          var i = n.stateNode
        }
        if (!i) throw Error(l(147, e))
        var s = i,
          u = "" + e
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (d) {
              var g = s.refs
              d === null ? delete g[u] : (g[u] = d)
            }),
            (t._stringRef = u),
            t)
      }
      if (typeof e != "string") throw Error(l(284))
      if (!n._owner) throw Error(l(290, e))
    }
    return e
  }
  function hi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    )
  }
  function Bc(e) {
    var t = e._init
    return t(e._payload)
  }
  function Hc(e) {
    function t(C, S) {
      if (e) {
        var P = C.deletions
        P === null ? ((C.deletions = [S]), (C.flags |= 16)) : P.push(S)
      }
    }
    function n(C, S) {
      if (!e) return null
      for (; S !== null; ) t(C, S), (S = S.sibling)
      return null
    }
    function i(C, S) {
      for (C = new Map(); S !== null; )
        S.key !== null ? C.set(S.key, S) : C.set(S.index, S), (S = S.sibling)
      return C
    }
    function s(C, S) {
      return (C = En(C, S)), (C.index = 0), (C.sibling = null), C
    }
    function u(C, S, P) {
      return (
        (C.index = P),
        e
          ? ((P = C.alternate),
            P !== null
              ? ((P = P.index), P < S ? ((C.flags |= 2), S) : P)
              : ((C.flags |= 2), S))
          : ((C.flags |= 1048576), S)
      )
    }
    function d(C) {
      return e && C.alternate === null && (C.flags |= 2), C
    }
    function g(C, S, P, B) {
      return S === null || S.tag !== 6
        ? ((S = ya(P, C.mode, B)), (S.return = C), S)
        : ((S = s(S, P)), (S.return = C), S)
    }
    function v(C, S, P, B) {
      var J = P.type
      return J === K
        ? M(C, S, P.props.children, B, P.key)
        : S !== null &&
          (S.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === Ve &&
              Bc(J) === S.type))
        ? ((B = s(S, P.props)), (B.ref = io(C, S, P)), (B.return = C), B)
        : ((B = Mi(P.type, P.key, P.props, null, C.mode, B)),
          (B.ref = io(C, S, P)),
          (B.return = C),
          B)
    }
    function N(C, S, P, B) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== P.containerInfo ||
        S.stateNode.implementation !== P.implementation
        ? ((S = va(P, C.mode, B)), (S.return = C), S)
        : ((S = s(S, P.children || [])), (S.return = C), S)
    }
    function M(C, S, P, B, J) {
      return S === null || S.tag !== 7
        ? ((S = $n(P, C.mode, B, J)), (S.return = C), S)
        : ((S = s(S, P)), (S.return = C), S)
    }
    function $(C, S, P) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = ya("" + S, C.mode, P)), (S.return = C), S
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Y:
            return (
              (P = Mi(S.type, S.key, S.props, null, C.mode, P)),
              (P.ref = io(C, null, S)),
              (P.return = C),
              P
            )
          case X:
            return (S = va(S, C.mode, P)), (S.return = C), S
          case Ve:
            var B = S._init
            return $(C, B(S._payload), P)
        }
        if (Ir(S) || Z(S))
          return (S = $n(S, C.mode, P, null)), (S.return = C), S
        hi(C, S)
      }
      return null
    }
    function F(C, S, P, B) {
      var J = S !== null ? S.key : null
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return J !== null ? null : g(C, S, "" + P, B)
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Y:
            return P.key === J ? v(C, S, P, B) : null
          case X:
            return P.key === J ? N(C, S, P, B) : null
          case Ve:
            return (J = P._init), F(C, S, J(P._payload), B)
        }
        if (Ir(P) || Z(P)) return J !== null ? null : M(C, S, P, B, null)
        hi(C, P)
      }
      return null
    }
    function b(C, S, P, B, J) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (C = C.get(P) || null), g(S, C, "" + B, J)
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            return (
              (C = C.get(B.key === null ? P : B.key) || null), v(S, C, B, J)
            )
          case X:
            return (
              (C = C.get(B.key === null ? P : B.key) || null), N(S, C, B, J)
            )
          case Ve:
            var ee = B._init
            return b(C, S, P, ee(B._payload), J)
        }
        if (Ir(B) || Z(B)) return (C = C.get(P) || null), M(S, C, B, J, null)
        hi(S, B)
      }
      return null
    }
    function q(C, S, P, B) {
      for (
        var J = null, ee = null, te = S, ne = (S = 0), $e = null;
        te !== null && ne < P.length;
        ne++
      ) {
        te.index > ne ? (($e = te), (te = null)) : ($e = te.sibling)
        var he = F(C, te, P[ne], B)
        if (he === null) {
          te === null && (te = $e)
          break
        }
        e && te && he.alternate === null && t(C, te),
          (S = u(he, S, ne)),
          ee === null ? (J = he) : (ee.sibling = he),
          (ee = he),
          (te = $e)
      }
      if (ne === P.length) return n(C, te), Ce && Ln(C, ne), J
      if (te === null) {
        for (; ne < P.length; ne++)
          (te = $(C, P[ne], B)),
            te !== null &&
              ((S = u(te, S, ne)),
              ee === null ? (J = te) : (ee.sibling = te),
              (ee = te))
        return Ce && Ln(C, ne), J
      }
      for (te = i(C, te); ne < P.length; ne++)
        ($e = b(te, C, ne, P[ne], B)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              te.delete($e.key === null ? ne : $e.key),
            (S = u($e, S, ne)),
            ee === null ? (J = $e) : (ee.sibling = $e),
            (ee = $e))
      return (
        e &&
          te.forEach(function (Cn) {
            return t(C, Cn)
          }),
        Ce && Ln(C, ne),
        J
      )
    }
    function G(C, S, P, B) {
      var J = Z(P)
      if (typeof J != "function") throw Error(l(150))
      if (((P = J.call(P)), P == null)) throw Error(l(151))
      for (
        var ee = (J = null), te = S, ne = (S = 0), $e = null, he = P.next();
        te !== null && !he.done;
        ne++, he = P.next()
      ) {
        te.index > ne ? (($e = te), (te = null)) : ($e = te.sibling)
        var Cn = F(C, te, he.value, B)
        if (Cn === null) {
          te === null && (te = $e)
          break
        }
        e && te && Cn.alternate === null && t(C, te),
          (S = u(Cn, S, ne)),
          ee === null ? (J = Cn) : (ee.sibling = Cn),
          (ee = Cn),
          (te = $e)
      }
      if (he.done) return n(C, te), Ce && Ln(C, ne), J
      if (te === null) {
        for (; !he.done; ne++, he = P.next())
          (he = $(C, he.value, B)),
            he !== null &&
              ((S = u(he, S, ne)),
              ee === null ? (J = he) : (ee.sibling = he),
              (ee = he))
        return Ce && Ln(C, ne), J
      }
      for (te = i(C, te); !he.done; ne++, he = P.next())
        (he = b(te, C, ne, he.value, B)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              te.delete(he.key === null ? ne : he.key),
            (S = u(he, S, ne)),
            ee === null ? (J = he) : (ee.sibling = he),
            (ee = he))
      return (
        e &&
          te.forEach(function (hg) {
            return t(C, hg)
          }),
        Ce && Ln(C, ne),
        J
      )
    }
    function Oe(C, S, P, B) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === K &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case Y:
            e: {
              for (var J = P.key, ee = S; ee !== null; ) {
                if (ee.key === J) {
                  if (((J = P.type), J === K)) {
                    if (ee.tag === 7) {
                      n(C, ee.sibling),
                        (S = s(ee, P.props.children)),
                        (S.return = C),
                        (C = S)
                      break e
                    }
                  } else if (
                    ee.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === Ve &&
                      Bc(J) === ee.type)
                  ) {
                    n(C, ee.sibling),
                      (S = s(ee, P.props)),
                      (S.ref = io(C, ee, P)),
                      (S.return = C),
                      (C = S)
                    break e
                  }
                  n(C, ee)
                  break
                } else t(C, ee)
                ee = ee.sibling
              }
              P.type === K
                ? ((S = $n(P.props.children, C.mode, B, P.key)),
                  (S.return = C),
                  (C = S))
                : ((B = Mi(P.type, P.key, P.props, null, C.mode, B)),
                  (B.ref = io(C, S, P)),
                  (B.return = C),
                  (C = B))
            }
            return d(C)
          case X:
            e: {
              for (ee = P.key; S !== null; ) {
                if (S.key === ee)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === P.containerInfo &&
                    S.stateNode.implementation === P.implementation
                  ) {
                    n(C, S.sibling),
                      (S = s(S, P.children || [])),
                      (S.return = C),
                      (C = S)
                    break e
                  } else {
                    n(C, S)
                    break
                  }
                else t(C, S)
                S = S.sibling
              }
              ;(S = va(P, C.mode, B)), (S.return = C), (C = S)
            }
            return d(C)
          case Ve:
            return (ee = P._init), Oe(C, S, ee(P._payload), B)
        }
        if (Ir(P)) return q(C, S, P, B)
        if (Z(P)) return G(C, S, P, B)
        hi(C, P)
      }
      return (typeof P == "string" && P !== "") || typeof P == "number"
        ? ((P = "" + P),
          S !== null && S.tag === 6
            ? (n(C, S.sibling), (S = s(S, P)), (S.return = C), (C = S))
            : (n(C, S), (S = ya(P, C.mode, B)), (S.return = C), (C = S)),
          d(C))
        : n(C, S)
    }
    return Oe
  }
  var dr = Hc(!0),
    Wc = Hc(!1),
    mi = pn(null),
    gi = null,
    pr = null,
    Ps = null
  function Ns() {
    Ps = pr = gi = null
  }
  function Ts(e) {
    var t = mi.current
    ke(mi), (e._currentValue = t)
  }
  function Os(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break
      e = e.return
    }
  }
  function hr(e, t) {
    ;(gi = e),
      (Ps = pr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ot = !0), (e.firstContext = null))
  }
  function kt(e) {
    var t = e._currentValue
    if (Ps !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
        if (gi === null) throw Error(l(308))
        ;(pr = e), (gi.dependencies = { lanes: 0, firstContext: e })
      } else pr = pr.next = e
    return t
  }
  var jn = null
  function Ls(e) {
    jn === null ? (jn = [e]) : jn.push(e)
  }
  function bc(e, t, n, i) {
    var s = t.interleaved
    return (
      s === null ? ((n.next = n), Ls(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      Xt(e, i)
    )
  }
  function Xt(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return)
    return n.tag === 3 ? n.stateNode : null
  }
  var gn = !1
  function js(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function Vc(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function Zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function yn(e, t, n) {
    var i = e.updateQueue
    if (i === null) return null
    if (((i = i.shared), fe & 2)) {
      var s = i.pending
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (i.pending = t),
        Xt(e, n)
      )
    }
    return (
      (s = i.interleaved),
      s === null ? ((t.next = t), Ls(i)) : ((t.next = s.next), (s.next = t)),
      (i.interleaved = t),
      Xt(e, n)
    )
  }
  function yi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var i = t.lanes
      ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Kl(e, n)
    }
  }
  function Kc(e, t) {
    var n = e.updateQueue,
      i = e.alternate
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        u = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          }
          u === null ? (s = u = d) : (u = u.next = d), (n = n.next)
        } while (n !== null)
        u === null ? (s = u = t) : (u = u.next = t)
      } else s = u = t
      ;(n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = n)
      return
    }
    ;(e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t)
  }
  function vi(e, t, n, i) {
    var s = e.updateQueue
    gn = !1
    var u = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending
    if (g !== null) {
      s.shared.pending = null
      var v = g,
        N = v.next
      ;(v.next = null), d === null ? (u = N) : (d.next = N), (d = v)
      var M = e.alternate
      M !== null &&
        ((M = M.updateQueue),
        (g = M.lastBaseUpdate),
        g !== d &&
          (g === null ? (M.firstBaseUpdate = N) : (g.next = N),
          (M.lastBaseUpdate = v)))
    }
    if (u !== null) {
      var $ = s.baseState
      ;(d = 0), (M = N = v = null), (g = u)
      do {
        var F = g.lane,
          b = g.eventTime
        if ((i & F) === F) {
          M !== null &&
            (M = M.next =
              {
                eventTime: b,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              })
          e: {
            var q = e,
              G = g
            switch (((F = t), (b = n), G.tag)) {
              case 1:
                if (((q = G.payload), typeof q == "function")) {
                  $ = q.call(b, $, F)
                  break e
                }
                $ = q
                break e
              case 3:
                q.flags = (q.flags & -65537) | 128
              case 0:
                if (
                  ((q = G.payload),
                  (F = typeof q == "function" ? q.call(b, $, F) : q),
                  F == null)
                )
                  break e
                $ = W({}, $, F)
                break e
              case 2:
                gn = !0
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64),
            (F = s.effects),
            F === null ? (s.effects = [g]) : F.push(g))
        } else
          (b = {
            eventTime: b,
            lane: F,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            M === null ? ((N = M = b), (v = $)) : (M = M.next = b),
            (d |= F)
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break
          ;(F = g),
            (g = F.next),
            (F.next = null),
            (s.lastBaseUpdate = F),
            (s.shared.pending = null)
        }
      } while (!0)
      if (
        (M === null && (v = $),
        (s.baseState = v),
        (s.firstBaseUpdate = N),
        (s.lastBaseUpdate = M),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t
        do (d |= s.lane), (s = s.next)
        while (s !== t)
      } else u === null && (s.shared.lanes = 0)
      ;(zn |= d), (e.lanes = d), (e.memoizedState = $)
    }
  }
  function Qc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          s = i.callback
        if (s !== null) {
          if (((i.callback = null), (i = n), typeof s != "function"))
            throw Error(l(191, s))
          s.call(i)
        }
      }
  }
  var lo = {},
    Ut = pn(lo),
    so = pn(lo),
    ao = pn(lo)
  function An(e) {
    if (e === lo) throw Error(l(174))
    return e
  }
  function As(e, t) {
    switch ((Se(ao, t), Se(so, e), Se(Ut, lo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "")
        break
      default:
        ;(e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e))
    }
    ke(Ut), Se(Ut, t)
  }
  function mr() {
    ke(Ut), ke(so), ke(ao)
  }
  function qc(e) {
    An(ao.current)
    var t = An(Ut.current),
      n = Il(t, e.type)
    t !== n && (Se(so, e), Se(Ut, n))
  }
  function Is(e) {
    so.current === e && (ke(Ut), ke(so))
  }
  var _e = pn(0)
  function wi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var zs = []
  function Ds() {
    for (var e = 0; e < zs.length; e++)
      zs[e]._workInProgressVersionPrimary = null
    zs.length = 0
  }
  var Si = V.ReactCurrentDispatcher,
    Fs = V.ReactCurrentBatchConfig,
    In = 0,
    Re = null,
    ze = null,
    Fe = null,
    xi = !1,
    uo = !1,
    co = 0,
    Dm = 0
  function Qe() {
    throw Error(l(321))
  }
  function Ms(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n])) return !1
    return !0
  }
  function $s(e, t, n, i, s, u) {
    if (
      ((In = u),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Si.current = e === null || e.memoizedState === null ? Um : Bm),
      (e = n(i, s)),
      uo)
    ) {
      u = 0
      do {
        if (((uo = !1), (co = 0), 25 <= u)) throw Error(l(301))
        ;(u += 1),
          (Fe = ze = null),
          (t.updateQueue = null),
          (Si.current = Hm),
          (e = n(i, s))
      } while (uo)
    }
    if (
      ((Si.current = Ci),
      (t = ze !== null && ze.next !== null),
      (In = 0),
      (Fe = ze = Re = null),
      (xi = !1),
      t)
    )
      throw Error(l(300))
    return e
  }
  function Us() {
    var e = co !== 0
    return (co = 0), e
  }
  function Bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return Fe === null ? (Re.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe
  }
  function Et() {
    if (ze === null) {
      var e = Re.alternate
      e = e !== null ? e.memoizedState : null
    } else e = ze.next
    var t = Fe === null ? Re.memoizedState : Fe.next
    if (t !== null) (Fe = t), (ze = e)
    else {
      if (e === null) throw Error(l(310))
      ;(ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Fe === null ? (Re.memoizedState = Fe = e) : (Fe = Fe.next = e)
    }
    return Fe
  }
  function fo(e, t) {
    return typeof t == "function" ? t(e) : t
  }
  function Bs(e) {
    var t = Et(),
      n = t.queue
    if (n === null) throw Error(l(311))
    n.lastRenderedReducer = e
    var i = ze,
      s = i.baseQueue,
      u = n.pending
    if (u !== null) {
      if (s !== null) {
        var d = s.next
        ;(s.next = u.next), (u.next = d)
      }
      ;(i.baseQueue = s = u), (n.pending = null)
    }
    if (s !== null) {
      ;(u = s.next), (i = i.baseState)
      var g = (d = null),
        v = null,
        N = u
      do {
        var M = N.lane
        if ((In & M) === M)
          v !== null &&
            (v = v.next =
              {
                lane: 0,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null,
              }),
            (i = N.hasEagerState ? N.eagerState : e(i, N.action))
        else {
          var $ = {
            lane: M,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }
          v === null ? ((g = v = $), (d = i)) : (v = v.next = $),
            (Re.lanes |= M),
            (zn |= M)
        }
        N = N.next
      } while (N !== null && N !== u)
      v === null ? (d = i) : (v.next = g),
        Tt(i, t.memoizedState) || (ot = !0),
        (t.memoizedState = i),
        (t.baseState = d),
        (t.baseQueue = v),
        (n.lastRenderedState = i)
    }
    if (((e = n.interleaved), e !== null)) {
      s = e
      do (u = s.lane), (Re.lanes |= u), (zn |= u), (s = s.next)
      while (s !== e)
    } else s === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
  }
  function Hs(e) {
    var t = Et(),
      n = t.queue
    if (n === null) throw Error(l(311))
    n.lastRenderedReducer = e
    var i = n.dispatch,
      s = n.pending,
      u = t.memoizedState
    if (s !== null) {
      n.pending = null
      var d = (s = s.next)
      do (u = e(u, d.action)), (d = d.next)
      while (d !== s)
      Tt(u, t.memoizedState) || (ot = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u)
    }
    return [u, i]
  }
  function Gc() {}
  function Yc(e, t) {
    var n = Re,
      i = Et(),
      s = t(),
      u = !Tt(i.memoizedState, s)
    if (
      (u && ((i.memoizedState = s), (ot = !0)),
      (i = i.queue),
      Ws(Zc.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || u || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        po(9, Xc.bind(null, n, i, s, t), void 0, null),
        Me === null)
      )
        throw Error(l(349))
      In & 30 || Jc(n, t, s)
    }
    return s
  }
  function Jc(e, t, n) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
  }
  function Xc(e, t, n, i) {
    ;(t.value = n), (t.getSnapshot = i), ef(t) && tf(e)
  }
  function Zc(e, t, n) {
    return n(function () {
      ef(t) && tf(e)
    })
  }
  function ef(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !Tt(e, n)
    } catch {
      return !0
    }
  }
  function tf(e) {
    var t = Xt(e, 1)
    t !== null && It(t, e, 1, -1)
  }
  function nf(e) {
    var t = Bt()
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = $m.bind(null, Re, e)),
      [t.memoizedState, e]
    )
  }
  function po(e, t, n, i) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
      e
    )
  }
  function rf() {
    return Et().memoizedState
  }
  function ki(e, t, n, i) {
    var s = Bt()
    ;(Re.flags |= e),
      (s.memoizedState = po(1 | t, n, void 0, i === void 0 ? null : i))
  }
  function Ei(e, t, n, i) {
    var s = Et()
    i = i === void 0 ? null : i
    var u = void 0
    if (ze !== null) {
      var d = ze.memoizedState
      if (((u = d.destroy), i !== null && Ms(i, d.deps))) {
        s.memoizedState = po(t, n, u, i)
        return
      }
    }
    ;(Re.flags |= e), (s.memoizedState = po(1 | t, n, u, i))
  }
  function of(e, t) {
    return ki(8390656, 8, e, t)
  }
  function Ws(e, t) {
    return Ei(2048, 8, e, t)
  }
  function lf(e, t) {
    return Ei(4, 2, e, t)
  }
  function sf(e, t) {
    return Ei(4, 4, e, t)
  }
  function af(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function uf(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ei(4, 4, af.bind(null, t, e), n)
    )
  }
  function bs() {}
  function cf(e, t) {
    var n = Et()
    t = t === void 0 ? null : t
    var i = n.memoizedState
    return i !== null && t !== null && Ms(t, i[1])
      ? i[0]
      : ((n.memoizedState = [e, t]), e)
  }
  function ff(e, t) {
    var n = Et()
    t = t === void 0 ? null : t
    var i = n.memoizedState
    return i !== null && t !== null && Ms(t, i[1])
      ? i[0]
      : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function df(e, t, n) {
    return In & 21
      ? (Tt(n, t) ||
          ((n = Bu()), (Re.lanes |= n), (zn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ot = !0)), (e.memoizedState = n))
  }
  function Fm(e, t) {
    var n = ve
    ;(ve = n !== 0 && 4 > n ? n : 4), e(!0)
    var i = Fs.transition
    Fs.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(ve = n), (Fs.transition = i)
    }
  }
  function pf() {
    return Et().memoizedState
  }
  function Mm(e, t, n) {
    var i = xn(e)
    if (
      ((n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hf(e))
    )
      mf(t, n)
    else if (((n = bc(e, t, n, i)), n !== null)) {
      var s = et()
      It(n, e, i, s), gf(n, t, i)
    }
  }
  function $m(e, t, n) {
    var i = xn(e),
      s = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (hf(e)) mf(t, s)
    else {
      var u = e.alternate
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = u(d, n)
          if (((s.hasEagerState = !0), (s.eagerState = g), Tt(g, d))) {
            var v = t.interleaved
            v === null
              ? ((s.next = s), Ls(t))
              : ((s.next = v.next), (v.next = s)),
              (t.interleaved = s)
            return
          }
        } catch {
        } finally {
        }
      ;(n = bc(e, t, s, i)),
        n !== null && ((s = et()), It(n, e, i, s), gf(n, t, i))
    }
  }
  function hf(e) {
    var t = e.alternate
    return e === Re || (t !== null && t === Re)
  }
  function mf(e, t) {
    uo = xi = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
  function gf(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes
      ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Kl(e, n)
    }
  }
  var Ci = {
      readContext: kt,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    Um = {
      readContext: kt,
      useCallback: function (e, t) {
        return (Bt().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: kt,
      useEffect: of,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ki(4194308, 4, af.bind(null, t, e), n)
        )
      },
      useLayoutEffect: function (e, t) {
        return ki(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return ki(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = Bt()
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        )
      },
      useReducer: function (e, t, n) {
        var i = Bt()
        return (
          (t = n !== void 0 ? n(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = Mm.bind(null, Re, e)),
          [i.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = Bt()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: nf,
      useDebugValue: bs,
      useDeferredValue: function (e) {
        return (Bt().memoizedState = e)
      },
      useTransition: function () {
        var e = nf(!1),
          t = e[0]
        return (e = Fm.bind(null, e[1])), (Bt().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var i = Re,
          s = Bt()
        if (Ce) {
          if (n === void 0) throw Error(l(407))
          n = n()
        } else {
          if (((n = t()), Me === null)) throw Error(l(349))
          In & 30 || Jc(i, t, n)
        }
        s.memoizedState = n
        var u = { value: n, getSnapshot: t }
        return (
          (s.queue = u),
          of(Zc.bind(null, i, u, e), [e]),
          (i.flags |= 2048),
          po(9, Xc.bind(null, i, u, n, t), void 0, null),
          n
        )
      },
      useId: function () {
        var e = Bt(),
          t = Me.identifierPrefix
        if (Ce) {
          var n = Jt,
            i = Yt
          ;(n = (i & ~(1 << (32 - Nt(i) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = co++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":")
        } else (n = Dm++), (t = ":" + t + "r" + n.toString(32) + ":")
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    Bm = {
      readContext: kt,
      useCallback: cf,
      useContext: kt,
      useEffect: Ws,
      useImperativeHandle: uf,
      useInsertionEffect: lf,
      useLayoutEffect: sf,
      useMemo: ff,
      useReducer: Bs,
      useRef: rf,
      useState: function () {
        return Bs(fo)
      },
      useDebugValue: bs,
      useDeferredValue: function (e) {
        var t = Et()
        return df(t, ze.memoizedState, e)
      },
      useTransition: function () {
        var e = Bs(fo)[0],
          t = Et().memoizedState
        return [e, t]
      },
      useMutableSource: Gc,
      useSyncExternalStore: Yc,
      useId: pf,
      unstable_isNewReconciler: !1,
    },
    Hm = {
      readContext: kt,
      useCallback: cf,
      useContext: kt,
      useEffect: Ws,
      useImperativeHandle: uf,
      useInsertionEffect: lf,
      useLayoutEffect: sf,
      useMemo: ff,
      useReducer: Hs,
      useRef: rf,
      useState: function () {
        return Hs(fo)
      },
      useDebugValue: bs,
      useDeferredValue: function (e) {
        var t = Et()
        return ze === null ? (t.memoizedState = e) : df(t, ze.memoizedState, e)
      },
      useTransition: function () {
        var e = Hs(fo)[0],
          t = Et().memoizedState
        return [e, t]
      },
      useMutableSource: Gc,
      useSyncExternalStore: Yc,
      useId: pf,
      unstable_isNewReconciler: !1,
    }
  function Lt(e, t) {
    if (e && e.defaultProps) {
      ;(t = W({}, t)), (e = e.defaultProps)
      for (var n in e) t[n] === void 0 && (t[n] = e[n])
      return t
    }
    return t
  }
  function Vs(e, t, n, i) {
    ;(t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var _i = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Pn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var i = et(),
        s = xn(e),
        u = Zt(i, s)
      ;(u.payload = t),
        n != null && (u.callback = n),
        (t = yn(e, u, s)),
        t !== null && (It(t, e, s, i), yi(t, e, s))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var i = et(),
        s = xn(e),
        u = Zt(i, s)
      ;(u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = yn(e, u, s)),
        t !== null && (It(t, e, s, i), yi(t, e, s))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = et(),
        i = xn(e),
        s = Zt(n, i)
      ;(s.tag = 2),
        t != null && (s.callback = t),
        (t = yn(e, s, i)),
        t !== null && (It(t, e, i, n), yi(t, e, i))
    },
  }
  function yf(e, t, n, i, s, u, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, u, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(n, i) || !Xr(s, u)
        : !0
    )
  }
  function vf(e, t, n) {
    var i = !1,
      s = hn,
      u = t.contextType
    return (
      typeof u == "object" && u !== null
        ? (u = kt(u))
        : ((s = rt(t) ? Tn : Ke.current),
          (i = t.contextTypes),
          (u = (i = i != null) ? ar(e, s) : hn)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = _i),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    )
  }
  function wf(e, t, n, i) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && _i.enqueueReplaceState(t, t.state, null)
  }
  function Ks(e, t, n, i) {
    var s = e.stateNode
    ;(s.props = n), (s.state = e.memoizedState), (s.refs = {}), js(e)
    var u = t.contextType
    typeof u == "object" && u !== null
      ? (s.context = kt(u))
      : ((u = rt(t) ? Tn : Ke.current), (s.context = ar(e, u))),
      (s.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Vs(e, t, u, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && _i.enqueueReplaceState(s, s.state, null),
        vi(e, n, s, i),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308)
  }
  function gr(e, t) {
    try {
      var n = "",
        i = t
      do (n += ue(i)), (i = i.return)
      while (i)
      var s = n
    } catch (u) {
      s =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
    }
    return { value: e, source: t, stack: s, digest: null }
  }
  function Qs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
  }
  function qs(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  var Wm = typeof WeakMap == "function" ? WeakMap : Map
  function Sf(e, t, n) {
    ;(n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var i = t.value
    return (
      (n.callback = function () {
        ji || ((ji = !0), (ua = i)), qs(e, t)
      }),
      n
    )
  }
  function xf(e, t, n) {
    ;(n = Zt(-1, n)), (n.tag = 3)
    var i = e.type.getDerivedStateFromError
    if (typeof i == "function") {
      var s = t.value
      ;(n.payload = function () {
        return i(s)
      }),
        (n.callback = function () {
          qs(e, t)
        })
    }
    var u = e.stateNode
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          qs(e, t),
            typeof i != "function" &&
              (wn === null ? (wn = new Set([this])) : wn.add(this))
          var d = t.stack
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          })
        }),
      n
    )
  }
  function kf(e, t, n) {
    var i = e.pingCache
    if (i === null) {
      i = e.pingCache = new Wm()
      var s = new Set()
      i.set(t, s)
    } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s))
    s.has(n) || (s.add(n), (e = rg.bind(null, e, t, n)), t.then(e, e))
  }
  function Ef(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Cf(e, t, n, i, s) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = s), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Zt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
            (n.lanes |= 1)),
        e)
  }
  var bm = V.ReactCurrentOwner,
    ot = !1
  function Ze(e, t, n, i) {
    t.child = e === null ? Wc(t, null, n, i) : dr(t, e.child, n, i)
  }
  function _f(e, t, n, i, s) {
    n = n.render
    var u = t.ref
    return (
      hr(t, s),
      (i = $s(e, t, n, i, u, s)),
      (n = Us()),
      e !== null && !ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          en(e, t, s))
        : (Ce && n && ks(t), (t.flags |= 1), Ze(e, t, i, s), t.child)
    )
  }
  function Rf(e, t, n, i, s) {
    if (e === null) {
      var u = n.type
      return typeof u == "function" &&
        !ga(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Pf(e, t, u, i, s))
        : ((e = Mi(n.type, null, i, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((u = e.child), !(e.lanes & s))) {
      var d = u.memoizedProps
      if (
        ((n = n.compare), (n = n !== null ? n : Xr), n(d, i) && e.ref === t.ref)
      )
        return en(e, t, s)
    }
    return (
      (t.flags |= 1),
      (e = En(u, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Pf(e, t, n, i, s) {
    if (e !== null) {
      var u = e.memoizedProps
      if (Xr(u, i) && e.ref === t.ref)
        if (((ot = !1), (t.pendingProps = i = u), (e.lanes & s) !== 0))
          e.flags & 131072 && (ot = !0)
        else return (t.lanes = e.lanes), en(e, t, s)
    }
    return Gs(e, t, n, i, s)
  }
  function Nf(e, t, n) {
    var i = t.pendingProps,
      s = i.children,
      u = e !== null ? e.memoizedState : null
    if (i.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Se(vr, ht),
          (ht |= n)
      else {
        if (!(n & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Se(vr, ht),
            (ht |= e),
            null
          )
        ;(t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = u !== null ? u.baseLanes : n),
          Se(vr, ht),
          (ht |= i)
      }
    else
      u !== null ? ((i = u.baseLanes | n), (t.memoizedState = null)) : (i = n),
        Se(vr, ht),
        (ht |= i)
    return Ze(e, t, s, n), t.child
  }
  function Tf(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function Gs(e, t, n, i, s) {
    var u = rt(n) ? Tn : Ke.current
    return (
      (u = ar(t, u)),
      hr(t, s),
      (n = $s(e, t, n, i, u, s)),
      (i = Us()),
      e !== null && !ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          en(e, t, s))
        : (Ce && i && ks(t), (t.flags |= 1), Ze(e, t, n, s), t.child)
    )
  }
  function Of(e, t, n, i, s) {
    if (rt(n)) {
      var u = !0
      ui(t)
    } else u = !1
    if ((hr(t, s), t.stateNode === null))
      Pi(e, t), vf(t, n, i), Ks(t, n, i, s), (i = !0)
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps
      d.props = g
      var v = d.context,
        N = n.contextType
      typeof N == "object" && N !== null
        ? (N = kt(N))
        : ((N = rt(n) ? Tn : Ke.current), (N = ar(t, N)))
      var M = n.getDerivedStateFromProps,
        $ =
          typeof M == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function"
      $ ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== i || v !== N) && wf(t, d, i, N)),
        (gn = !1)
      var F = t.memoizedState
      ;(d.state = F),
        vi(t, i, d, s),
        (v = t.memoizedState),
        g !== i || F !== v || nt.current || gn
          ? (typeof M == "function" && (Vs(t, n, M, i), (v = t.memoizedState)),
            (g = gn || yf(t, n, g, i, F, v, N))
              ? ($ ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = v)),
            (d.props = i),
            (d.state = v),
            (d.context = N),
            (i = g))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1))
    } else {
      ;(d = t.stateNode),
        Vc(e, t),
        (g = t.memoizedProps),
        (N = t.type === t.elementType ? g : Lt(t.type, g)),
        (d.props = N),
        ($ = t.pendingProps),
        (F = d.context),
        (v = n.contextType),
        typeof v == "object" && v !== null
          ? (v = kt(v))
          : ((v = rt(n) ? Tn : Ke.current), (v = ar(t, v)))
      var b = n.getDerivedStateFromProps
      ;(M =
        typeof b == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== $ || F !== v) && wf(t, d, i, v)),
        (gn = !1),
        (F = t.memoizedState),
        (d.state = F),
        vi(t, i, d, s)
      var q = t.memoizedState
      g !== $ || F !== q || nt.current || gn
        ? (typeof b == "function" && (Vs(t, n, b, i), (q = t.memoizedState)),
          (N = gn || yf(t, n, N, i, F, q, v) || !1)
            ? (M ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(i, q, v),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(i, q, v)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = q)),
          (d.props = i),
          (d.state = q),
          (d.context = v),
          (i = N))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1))
    }
    return Ys(e, t, n, i, u, s)
  }
  function Ys(e, t, n, i, s, u) {
    Tf(e, t)
    var d = (t.flags & 128) !== 0
    if (!i && !d) return s && Ic(t, n, !1), en(e, t, u)
    ;(i = t.stateNode), (bm.current = t)
    var g =
      d && typeof n.getDerivedStateFromError != "function" ? null : i.render()
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = dr(t, e.child, null, u)), (t.child = dr(t, null, g, u)))
        : Ze(e, t, g, u),
      (t.memoizedState = i.state),
      s && Ic(t, n, !0),
      t.child
    )
  }
  function Lf(e) {
    var t = e.stateNode
    t.pendingContext
      ? jc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && jc(e, t.context, !1),
      As(e, t.containerInfo)
  }
  function jf(e, t, n, i, s) {
    return fr(), Rs(s), (t.flags |= 256), Ze(e, t, n, i), t.child
  }
  var Js = { dehydrated: null, treeContext: null, retryLane: 0 }
  function Xs(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Af(e, t, n) {
    var i = t.pendingProps,
      s = _e.current,
      u = !1,
      d = (t.flags & 128) !== 0,
      g
    if (
      ((g = d) ||
        (g = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      g
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      Se(_e, s & 1),
      e === null)
    )
      return (
        _s(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((d = i.children),
            (e = i.fallback),
            u
              ? ((i = t.mode),
                (u = t.child),
                (d = { mode: "hidden", children: d }),
                !(i & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = d))
                  : (u = $i(d, i, 0, null)),
                (e = $n(e, i, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Xs(n)),
                (t.memoizedState = Js),
                e)
              : Zs(t, d))
      )
    if (((s = e.memoizedState), s !== null && ((g = s.dehydrated), g !== null)))
      return Vm(e, t, d, i, g, s, n)
    if (u) {
      ;(u = i.fallback), (d = t.mode), (s = e.child), (g = s.sibling)
      var v = { mode: "hidden", children: i.children }
      return (
        !(d & 1) && t.child !== s
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = v),
            (t.deletions = null))
          : ((i = En(s, v)), (i.subtreeFlags = s.subtreeFlags & 14680064)),
        g !== null ? (u = En(g, u)) : ((u = $n(u, d, n, null)), (u.flags |= 2)),
        (u.return = t),
        (i.return = t),
        (i.sibling = u),
        (t.child = i),
        (i = u),
        (u = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? Xs(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (u.memoizedState = d),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Js),
        i
      )
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (i = En(u, { mode: "visible", children: i.children })),
      !(t.mode & 1) && (i.lanes = n),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    )
  }
  function Zs(e, t) {
    return (
      (t = $i({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    )
  }
  function Ri(e, t, n, i) {
    return (
      i !== null && Rs(i),
      dr(t, e.child, null, n),
      (e = Zs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function Vm(e, t, n, i, s, u, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (i = Qs(Error(l(422)))), Ri(e, t, d, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = i.fallback),
          (s = t.mode),
          (i = $i({ mode: "visible", children: i.children }, s, 0, null)),
          (u = $n(u, s, d, null)),
          (u.flags |= 2),
          (i.return = t),
          (u.return = t),
          (i.sibling = u),
          (t.child = i),
          t.mode & 1 && dr(t, e.child, null, d),
          (t.child.memoizedState = Xs(d)),
          (t.memoizedState = Js),
          u)
    if (!(t.mode & 1)) return Ri(e, t, d, null)
    if (s.data === "$!") {
      if (((i = s.nextSibling && s.nextSibling.dataset), i)) var g = i.dgst
      return (
        (i = g), (u = Error(l(419))), (i = Qs(u, i, void 0)), Ri(e, t, d, i)
      )
    }
    if (((g = (d & e.childLanes) !== 0), ot || g)) {
      if (((i = Me), i !== null)) {
        switch (d & -d) {
          case 4:
            s = 2
            break
          case 16:
            s = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32
            break
          case 536870912:
            s = 268435456
            break
          default:
            s = 0
        }
        ;(s = s & (i.suspendedLanes | d) ? 0 : s),
          s !== 0 &&
            s !== u.retryLane &&
            ((u.retryLane = s), Xt(e, s), It(i, e, s, -1))
      }
      return ma(), (i = Qs(Error(l(421)))), Ri(e, t, d, i)
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = og.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (pt = dn(s.nextSibling)),
        (dt = t),
        (Ce = !0),
        (Ot = null),
        e !== null &&
          ((St[xt++] = Yt),
          (St[xt++] = Jt),
          (St[xt++] = On),
          (Yt = e.id),
          (Jt = e.overflow),
          (On = t)),
        (t = Zs(t, i.children)),
        (t.flags |= 4096),
        t)
  }
  function If(e, t, n) {
    e.lanes |= t
    var i = e.alternate
    i !== null && (i.lanes |= t), Os(e.return, t, n)
  }
  function ea(e, t, n, i, s) {
    var u = e.memoizedState
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = n),
        (u.tailMode = s))
  }
  function zf(e, t, n) {
    var i = t.pendingProps,
      s = i.revealOrder,
      u = i.tail
    if ((Ze(e, t, i.children, n), (i = _e.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && If(e, n, t)
          else if (e.tag === 19) If(e, n, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      i &= 1
    }
    if ((Se(_e, i), !(t.mode & 1))) t.memoizedState = null
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate),
              e !== null && wi(e) === null && (s = n),
              (n = n.sibling)
          ;(n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            ea(t, !1, s, n, u)
          break
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && wi(e) === null)) {
              t.child = s
              break
            }
            ;(e = s.sibling), (s.sibling = n), (n = s), (s = e)
          }
          ea(t, !0, n, null, u)
          break
        case "together":
          ea(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function Pi(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function en(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (zn |= t.lanes),
      !(n & t.childLanes))
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(l(153))
    if (t.child !== null) {
      for (
        e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (n = n.sibling = En(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  function Km(e, t, n) {
    switch (t.tag) {
      case 3:
        Lf(t), fr()
        break
      case 5:
        qc(t)
        break
      case 1:
        rt(t.type) && ui(t)
        break
      case 4:
        As(t, t.stateNode.containerInfo)
        break
      case 10:
        var i = t.type._context,
          s = t.memoizedProps.value
        Se(mi, i._currentValue), (i._currentValue = s)
        break
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Se(_e, _e.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Af(e, t, n)
            : (Se(_e, _e.current & 1),
              (e = en(e, t, n)),
              e !== null ? e.sibling : null)
        Se(_e, _e.current & 1)
        break
      case 19:
        if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return zf(e, t, n)
          t.flags |= 128
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Se(_e, _e.current),
          i)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), Nf(e, t, n)
    }
    return en(e, t, n)
  }
  var Df, ta, Ff, Mf
  ;(Df = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
      else if (n.tag !== 4 && n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
  }),
    (ta = function () {}),
    (Ff = function (e, t, n, i) {
      var s = e.memoizedProps
      if (s !== i) {
        ;(e = t.stateNode), An(Ut.current)
        var u = null
        switch (n) {
          case "input":
            ;(s = Ol(e, s)), (i = Ol(e, i)), (u = [])
            break
          case "select":
            ;(s = W({}, s, { value: void 0 })),
              (i = W({}, i, { value: void 0 })),
              (u = [])
            break
          case "textarea":
            ;(s = Al(e, s)), (i = Al(e, i)), (u = [])
            break
          default:
            typeof s.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = li)
        }
        zl(n, i)
        var d
        n = null
        for (N in s)
          if (!i.hasOwnProperty(N) && s.hasOwnProperty(N) && s[N] != null)
            if (N === "style") {
              var g = s[N]
              for (d in g) g.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""))
            } else
              N !== "dangerouslySetInnerHTML" &&
                N !== "children" &&
                N !== "suppressContentEditableWarning" &&
                N !== "suppressHydrationWarning" &&
                N !== "autoFocus" &&
                (c.hasOwnProperty(N)
                  ? u || (u = [])
                  : (u = u || []).push(N, null))
        for (N in i) {
          var v = i[N]
          if (
            ((g = s != null ? s[N] : void 0),
            i.hasOwnProperty(N) && v !== g && (v != null || g != null))
          )
            if (N === "style")
              if (g) {
                for (d in g)
                  !g.hasOwnProperty(d) ||
                    (v && v.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""))
                for (d in v)
                  v.hasOwnProperty(d) &&
                    g[d] !== v[d] &&
                    (n || (n = {}), (n[d] = v[d]))
              } else n || (u || (u = []), u.push(N, n)), (n = v)
            else
              N === "dangerouslySetInnerHTML"
                ? ((v = v ? v.__html : void 0),
                  (g = g ? g.__html : void 0),
                  v != null && g !== v && (u = u || []).push(N, v))
                : N === "children"
                ? (typeof v != "string" && typeof v != "number") ||
                  (u = u || []).push(N, "" + v)
                : N !== "suppressContentEditableWarning" &&
                  N !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(N)
                    ? (v != null && N === "onScroll" && xe("scroll", e),
                      u || g === v || (u = []))
                    : (u = u || []).push(N, v))
        }
        n && (u = u || []).push("style", n)
        var N = u
        ;(t.updateQueue = N) && (t.flags |= 4)
      }
    }),
    (Mf = function (e, t, n, i) {
      n !== i && (t.flags |= 4)
    })
  function ho(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling)
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case "collapsed":
          n = e.tail
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling)
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null)
      }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 14680064),
          (i |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling)
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = e),
          (s = s.sibling)
    return (e.subtreeFlags |= i), (e.childLanes = n), t
  }
  function Qm(e, t, n) {
    var i = t.pendingProps
    switch ((Es(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(t), null
      case 1:
        return rt(t.type) && ai(), qe(t), null
      case 3:
        return (
          (i = t.stateNode),
          mr(),
          ke(nt),
          ke(Ke),
          Ds(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (pi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ot !== null && (da(Ot), (Ot = null)))),
          ta(e, t),
          qe(t),
          null
        )
      case 5:
        Is(t)
        var s = An(ao.current)
        if (((n = t.type), e !== null && t.stateNode != null))
          Ff(e, t, n, i, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166))
            return qe(t), null
          }
          if (((e = An(Ut.current)), pi(t))) {
            ;(i = t.stateNode), (n = t.type)
            var u = t.memoizedProps
            switch (((i[$t] = t), (i[ro] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                xe("cancel", i), xe("close", i)
                break
              case "iframe":
              case "object":
              case "embed":
                xe("load", i)
                break
              case "video":
              case "audio":
                for (s = 0; s < eo.length; s++) xe(eo[s], i)
                break
              case "source":
                xe("error", i)
                break
              case "img":
              case "image":
              case "link":
                xe("error", i), xe("load", i)
                break
              case "details":
                xe("toggle", i)
                break
              case "input":
                yu(i, u), xe("invalid", i)
                break
              case "select":
                ;(i._wrapperState = { wasMultiple: !!u.multiple }),
                  xe("invalid", i)
                break
              case "textarea":
                Su(i, u), xe("invalid", i)
            }
            zl(n, u), (s = null)
            for (var d in u)
              if (u.hasOwnProperty(d)) {
                var g = u[d]
                d === "children"
                  ? typeof g == "string"
                    ? i.textContent !== g &&
                      (u.suppressHydrationWarning !== !0 &&
                        ii(i.textContent, g, e),
                      (s = ["children", g]))
                    : typeof g == "number" &&
                      i.textContent !== "" + g &&
                      (u.suppressHydrationWarning !== !0 &&
                        ii(i.textContent, g, e),
                      (s = ["children", "" + g]))
                  : c.hasOwnProperty(d) &&
                    g != null &&
                    d === "onScroll" &&
                    xe("scroll", i)
              }
            switch (n) {
              case "input":
                Qt(i), wu(i, u, !0)
                break
              case "textarea":
                Qt(i), ku(i)
                break
              case "select":
              case "option":
                break
              default:
                typeof u.onClick == "function" && (i.onclick = li)
            }
            ;(i = s), (t.updateQueue = i), i !== null && (t.flags |= 4)
          } else {
            ;(d = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Eu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = d.createElement(n, { is: i.is }))
                  : ((e = d.createElement(n)),
                    n === "select" &&
                      ((d = e),
                      i.multiple
                        ? (d.multiple = !0)
                        : i.size && (d.size = i.size)))
                : (e = d.createElementNS(e, n)),
              (e[$t] = t),
              (e[ro] = i),
              Df(e, t, !1, !1),
              (t.stateNode = e)
            e: {
              switch (((d = Dl(n, i)), n)) {
                case "dialog":
                  xe("cancel", e), xe("close", e), (s = i)
                  break
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), (s = i)
                  break
                case "video":
                case "audio":
                  for (s = 0; s < eo.length; s++) xe(eo[s], e)
                  s = i
                  break
                case "source":
                  xe("error", e), (s = i)
                  break
                case "img":
                case "image":
                case "link":
                  xe("error", e), xe("load", e), (s = i)
                  break
                case "details":
                  xe("toggle", e), (s = i)
                  break
                case "input":
                  yu(e, i), (s = Ol(e, i)), xe("invalid", e)
                  break
                case "option":
                  s = i
                  break
                case "select":
                  ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                    (s = W({}, i, { value: void 0 })),
                    xe("invalid", e)
                  break
                case "textarea":
                  Su(e, i), (s = Al(e, i)), xe("invalid", e)
                  break
                default:
                  s = i
              }
              zl(n, s), (g = s)
              for (u in g)
                if (g.hasOwnProperty(u)) {
                  var v = g[u]
                  u === "style"
                    ? Ru(e, v)
                    : u === "dangerouslySetInnerHTML"
                    ? ((v = v ? v.__html : void 0), v != null && Cu(e, v))
                    : u === "children"
                    ? typeof v == "string"
                      ? (n !== "textarea" || v !== "") && zr(e, v)
                      : typeof v == "number" && zr(e, "" + v)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? v != null && u === "onScroll" && xe("scroll", e)
                        : v != null && D(e, u, v, d))
                }
              switch (n) {
                case "input":
                  Qt(e), wu(e, i, !1)
                  break
                case "textarea":
                  Qt(e), ku(e)
                  break
                case "option":
                  i.value != null && e.setAttribute("value", "" + ce(i.value))
                  break
                case "select":
                  ;(e.multiple = !!i.multiple),
                    (u = i.value),
                    u != null
                      ? Yn(e, !!i.multiple, u, !1)
                      : i.defaultValue != null &&
                        Yn(e, !!i.multiple, i.defaultValue, !0)
                  break
                default:
                  typeof s.onClick == "function" && (e.onclick = li)
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus
                  break e
                case "img":
                  i = !0
                  break e
                default:
                  i = !1
              }
            }
            i && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return qe(t), null
      case 6:
        if (e && t.stateNode != null) Mf(e, t, e.memoizedProps, i)
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166))
          if (((n = An(ao.current)), An(Ut.current), pi(t))) {
            if (
              ((i = t.stateNode),
              (n = t.memoizedProps),
              (i[$t] = t),
              (u = i.nodeValue !== n) && ((e = dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ii(i.nodeValue, n, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ii(i.nodeValue, n, (e.mode & 1) !== 0)
              }
            u && (t.flags |= 4)
          } else
            (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
              (i[$t] = t),
              (t.stateNode = i)
        }
        return qe(t), null
      case 13:
        if (
          (ke(_e),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ce && pt !== null && t.mode & 1 && !(t.flags & 128))
            Uc(), fr(), (t.flags |= 98560), (u = !1)
          else if (((u = pi(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(l(318))
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(l(317))
              u[$t] = t
            } else
              fr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
            qe(t), (u = !1)
          } else Ot !== null && (da(Ot), (Ot = null)), (u = !0)
          if (!u) return t.flags & 65536 ? t : null
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || _e.current & 1 ? De === 0 && (De = 3) : ma())),
            t.updateQueue !== null && (t.flags |= 4),
            qe(t),
            null)
      case 4:
        return (
          mr(),
          ta(e, t),
          e === null && to(t.stateNode.containerInfo),
          qe(t),
          null
        )
      case 10:
        return Ts(t.type._context), qe(t), null
      case 17:
        return rt(t.type) && ai(), qe(t), null
      case 19:
        if ((ke(_e), (u = t.memoizedState), u === null)) return qe(t), null
        if (((i = (t.flags & 128) !== 0), (d = u.rendering), d === null))
          if (i) ho(u, !1)
          else {
            if (De !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((d = wi(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      ho(u, !1),
                      i = d.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = n,
                      n = t.child;
                    n !== null;

                  )
                    (u = n),
                      (e = i),
                      (u.flags &= 14680066),
                      (d = u.alternate),
                      d === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = d.childLanes),
                          (u.lanes = d.lanes),
                          (u.child = d.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = d.memoizedProps),
                          (u.memoizedState = d.memoizedState),
                          (u.updateQueue = d.updateQueue),
                          (u.type = d.type),
                          (e = d.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling)
                  return Se(_e, (_e.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            u.tail !== null &&
              Te() > wr &&
              ((t.flags |= 128), (i = !0), ho(u, !1), (t.lanes = 4194304))
          }
        else {
          if (!i)
            if (((e = wi(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ho(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ce)
              )
                return qe(t), null
            } else
              2 * Te() - u.renderingStartTime > wr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (i = !0), ho(u, !1), (t.lanes = 4194304))
          u.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = u.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (u.last = d))
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Te()),
            (t.sibling = null),
            (n = _e.current),
            Se(_e, i ? (n & 1) | 2 : n & 1),
            t)
          : (qe(t), null)
      case 22:
      case 23:
        return (
          ha(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && t.mode & 1
            ? ht & 1073741824 &&
              (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : qe(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(l(156, t.tag))
  }
  function qm(e, t) {
    switch ((Es(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && ai(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          mr(),
          ke(nt),
          ke(Ke),
          Ds(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 5:
        return Is(t), null
      case 13:
        if (
          (ke(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340))
          fr()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return ke(_e), null
      case 4:
        return mr(), null
      case 10:
        return Ts(t.type._context), null
      case 22:
      case 23:
        return ha(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var Ni = !1,
    Ge = !1,
    Gm = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null
  function yr(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null)
        } catch (i) {
          Ne(e, t, i)
        }
      else n.current = null
  }
  function na(e, t, n) {
    try {
      n()
    } catch (i) {
      Ne(e, t, i)
    }
  }
  var $f = !1
  function Ym(e, t) {
    if (((hs = qo), (e = gc()), ls(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var i = n.getSelection && n.getSelection()
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode
            var s = i.anchorOffset,
              u = i.focusNode
            i = i.focusOffset
            try {
              n.nodeType, u.nodeType
            } catch {
              n = null
              break e
            }
            var d = 0,
              g = -1,
              v = -1,
              N = 0,
              M = 0,
              $ = e,
              F = null
            t: for (;;) {
              for (
                var b;
                $ !== n || (s !== 0 && $.nodeType !== 3) || (g = d + s),
                  $ !== u || (i !== 0 && $.nodeType !== 3) || (v = d + i),
                  $.nodeType === 3 && (d += $.nodeValue.length),
                  (b = $.firstChild) !== null;

              )
                (F = $), ($ = b)
              for (;;) {
                if ($ === e) break t
                if (
                  (F === n && ++N === s && (g = d),
                  F === u && ++M === i && (v = d),
                  (b = $.nextSibling) !== null)
                )
                  break
                ;($ = F), (F = $.parentNode)
              }
              $ = b
            }
            n = g === -1 || v === -1 ? null : { start: g, end: v }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (
      ms = { focusedElem: e, selectionRange: n }, qo = !1, Q = t;
      Q !== null;

    )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Q = e)
      else
        for (; Q !== null; ) {
          t = Q
          try {
            var q = t.alternate
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (q !== null) {
                    var G = q.memoizedProps,
                      Oe = q.memoizedState,
                      C = t.stateNode,
                      S = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : Lt(t.type, G),
                        Oe
                      )
                    C.__reactInternalSnapshotBeforeUpdate = S
                  }
                  break
                case 3:
                  var P = t.stateNode.containerInfo
                  P.nodeType === 1
                    ? (P.textContent = "")
                    : P.nodeType === 9 &&
                      P.documentElement &&
                      P.removeChild(P.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(l(163))
              }
          } catch (B) {
            Ne(t, t.return, B)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (Q = e)
            break
          }
          Q = t.return
        }
    return (q = $f), ($f = !1), q
  }
  function mo(e, t, n) {
    var i = t.updateQueue
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var s = (i = i.next)
      do {
        if ((s.tag & e) === e) {
          var u = s.destroy
          ;(s.destroy = void 0), u !== void 0 && na(t, n, u)
        }
        s = s.next
      } while (s !== i)
    }
  }
  function Ti(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next)
      do {
        if ((n.tag & e) === e) {
          var i = n.create
          n.destroy = i()
        }
        n = n.next
      } while (n !== t)
    }
  }
  function ra(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode
      switch (e.tag) {
        case 5:
          e = n
          break
        default:
          e = n
      }
      typeof t == "function" ? t(e) : (t.current = e)
    }
  }
  function Uf(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Uf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[$t],
          delete t[ro],
          delete t[ws],
          delete t[jm],
          delete t[Am])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function Hf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bf(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function oa(e, t, n) {
    var i = e.tag
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = li))
    else if (i !== 4 && ((e = e.child), e !== null))
      for (oa(e, t, n), e = e.sibling; e !== null; )
        oa(e, t, n), (e = e.sibling)
  }
  function ia(e, t, n) {
    var i = e.tag
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (i !== 4 && ((e = e.child), e !== null))
      for (ia(e, t, n), e = e.sibling; e !== null; )
        ia(e, t, n), (e = e.sibling)
  }
  var We = null,
    jt = !1
  function vn(e, t, n) {
    for (n = n.child; n !== null; ) Wf(e, t, n), (n = n.sibling)
  }
  function Wf(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
      try {
        Mt.onCommitFiberUnmount(Ho, n)
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || yr(n, t)
      case 6:
        var i = We,
          s = jt
        ;(We = null),
          vn(e, t, n),
          (We = i),
          (jt = s),
          We !== null &&
            (jt
              ? ((e = We),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : We.removeChild(n.stateNode))
        break
      case 18:
        We !== null &&
          (jt
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8
                ? vs(e.parentNode, n)
                : e.nodeType === 1 && vs(e, n),
              Kr(e))
            : vs(We, n.stateNode))
        break
      case 4:
        ;(i = We),
          (s = jt),
          (We = n.stateNode.containerInfo),
          (jt = !0),
          vn(e, t, n),
          (We = i),
          (jt = s)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ge &&
          ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          s = i = i.next
          do {
            var u = s,
              d = u.destroy
            ;(u = u.tag),
              d !== void 0 && (u & 2 || u & 4) && na(n, t, d),
              (s = s.next)
          } while (s !== i)
        }
        vn(e, t, n)
        break
      case 1:
        if (
          !Ge &&
          (yr(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            ;(i.props = n.memoizedProps),
              (i.state = n.memoizedState),
              i.componentWillUnmount()
          } catch (g) {
            Ne(n, t, g)
          }
        vn(e, t, n)
        break
      case 21:
        vn(e, t, n)
        break
      case 22:
        n.mode & 1
          ? ((Ge = (i = Ge) || n.memoizedState !== null), vn(e, t, n), (Ge = i))
          : vn(e, t, n)
        break
      default:
        vn(e, t, n)
    }
  }
  function bf(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new Gm()),
        t.forEach(function (i) {
          var s = ig.bind(null, e, i)
          n.has(i) || (n.add(i), i.then(s, s))
        })
    }
  }
  function At(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i]
        try {
          var u = e,
            d = t,
            g = d
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                ;(We = g.stateNode), (jt = !1)
                break e
              case 3:
                ;(We = g.stateNode.containerInfo), (jt = !0)
                break e
              case 4:
                ;(We = g.stateNode.containerInfo), (jt = !0)
                break e
            }
            g = g.return
          }
          if (We === null) throw Error(l(160))
          Wf(u, d, s), (We = null), (jt = !1)
          var v = s.alternate
          v !== null && (v.return = null), (s.return = null)
        } catch (N) {
          Ne(s, t, N)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Vf(t, e), (t = t.sibling)
  }
  function Vf(e, t) {
    var n = e.alternate,
      i = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((At(t, e), Ht(e), i & 4)) {
          try {
            mo(3, e, e.return), Ti(3, e)
          } catch (G) {
            Ne(e, e.return, G)
          }
          try {
            mo(5, e, e.return)
          } catch (G) {
            Ne(e, e.return, G)
          }
        }
        break
      case 1:
        At(t, e), Ht(e), i & 512 && n !== null && yr(n, n.return)
        break
      case 5:
        if (
          (At(t, e),
          Ht(e),
          i & 512 && n !== null && yr(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode
          try {
            zr(s, "")
          } catch (G) {
            Ne(e, e.return, G)
          }
        }
        if (i & 4 && ((s = e.stateNode), s != null)) {
          var u = e.memoizedProps,
            d = n !== null ? n.memoizedProps : u,
            g = e.type,
            v = e.updateQueue
          if (((e.updateQueue = null), v !== null))
            try {
              g === "input" && u.type === "radio" && u.name != null && vu(s, u),
                Dl(g, d)
              var N = Dl(g, u)
              for (d = 0; d < v.length; d += 2) {
                var M = v[d],
                  $ = v[d + 1]
                M === "style"
                  ? Ru(s, $)
                  : M === "dangerouslySetInnerHTML"
                  ? Cu(s, $)
                  : M === "children"
                  ? zr(s, $)
                  : D(s, M, $, N)
              }
              switch (g) {
                case "input":
                  Ll(s, u)
                  break
                case "textarea":
                  xu(s, u)
                  break
                case "select":
                  var F = s._wrapperState.wasMultiple
                  s._wrapperState.wasMultiple = !!u.multiple
                  var b = u.value
                  b != null
                    ? Yn(s, !!u.multiple, b, !1)
                    : F !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Yn(s, !!u.multiple, u.defaultValue, !0)
                        : Yn(s, !!u.multiple, u.multiple ? [] : "", !1))
              }
              s[ro] = u
            } catch (G) {
              Ne(e, e.return, G)
            }
        }
        break
      case 6:
        if ((At(t, e), Ht(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162))
          ;(s = e.stateNode), (u = e.memoizedProps)
          try {
            s.nodeValue = u
          } catch (G) {
            Ne(e, e.return, G)
          }
        }
        break
      case 3:
        if (
          (At(t, e), Ht(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kr(t.containerInfo)
          } catch (G) {
            Ne(e, e.return, G)
          }
        break
      case 4:
        At(t, e), Ht(e)
        break
      case 13:
        At(t, e),
          Ht(e),
          (s = e.child),
          s.flags & 8192 &&
            ((u = s.memoizedState !== null),
            (s.stateNode.isHidden = u),
            !u ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (aa = Te())),
          i & 4 && bf(e)
        break
      case 22:
        if (
          ((M = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ge = (N = Ge) || M), At(t, e), (Ge = N)) : At(t, e),
          Ht(e),
          i & 8192)
        ) {
          if (
            ((N = e.memoizedState !== null),
            (e.stateNode.isHidden = N) && !M && e.mode & 1)
          )
            for (Q = e, M = e.child; M !== null; ) {
              for ($ = Q = M; Q !== null; ) {
                switch (((F = Q), (b = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mo(4, F, F.return)
                    break
                  case 1:
                    yr(F, F.return)
                    var q = F.stateNode
                    if (typeof q.componentWillUnmount == "function") {
                      ;(i = F), (n = F.return)
                      try {
                        ;(t = i),
                          (q.props = t.memoizedProps),
                          (q.state = t.memoizedState),
                          q.componentWillUnmount()
                      } catch (G) {
                        Ne(i, n, G)
                      }
                    }
                    break
                  case 5:
                    yr(F, F.return)
                    break
                  case 22:
                    if (F.memoizedState !== null) {
                      qf($)
                      continue
                    }
                }
                b !== null ? ((b.return = F), (Q = b)) : qf($)
              }
              M = M.sibling
            }
          e: for (M = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (M === null) {
                M = $
                try {
                  ;(s = $.stateNode),
                    N
                      ? ((u = s.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((g = $.stateNode),
                        (v = $.memoizedProps.style),
                        (d =
                          v != null && v.hasOwnProperty("display")
                            ? v.display
                            : null),
                        (g.style.display = _u("display", d)))
                } catch (G) {
                  Ne(e, e.return, G)
                }
              }
            } else if ($.tag === 6) {
              if (M === null)
                try {
                  $.stateNode.nodeValue = N ? "" : $.memoizedProps
                } catch (G) {
                  Ne(e, e.return, G)
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              ;($.child.return = $), ($ = $.child)
              continue
            }
            if ($ === e) break e
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e
              M === $ && (M = null), ($ = $.return)
            }
            M === $ && (M = null),
              ($.sibling.return = $.return),
              ($ = $.sibling)
          }
        }
        break
      case 19:
        At(t, e), Ht(e), i & 4 && bf(e)
        break
      case 21:
        break
      default:
        At(t, e), Ht(e)
    }
  }
  function Ht(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bf(n)) {
              var i = n
              break e
            }
            n = n.return
          }
          throw Error(l(160))
        }
        switch (i.tag) {
          case 5:
            var s = i.stateNode
            i.flags & 32 && (zr(s, ""), (i.flags &= -33))
            var u = Hf(e)
            ia(e, u, s)
            break
          case 3:
          case 4:
            var d = i.stateNode.containerInfo,
              g = Hf(e)
            oa(e, g, d)
            break
          default:
            throw Error(l(161))
        }
      } catch (v) {
        Ne(e, e.return, v)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Jm(e, t, n) {
    ;(Q = e), Kf(e)
  }
  function Kf(e, t, n) {
    for (var i = (e.mode & 1) !== 0; Q !== null; ) {
      var s = Q,
        u = s.child
      if (s.tag === 22 && i) {
        var d = s.memoizedState !== null || Ni
        if (!d) {
          var g = s.alternate,
            v = (g !== null && g.memoizedState !== null) || Ge
          g = Ni
          var N = Ge
          if (((Ni = d), (Ge = v) && !N))
            for (Q = s; Q !== null; )
              (d = Q),
                (v = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? Gf(s)
                  : v !== null
                  ? ((v.return = d), (Q = v))
                  : Gf(s)
          for (; u !== null; ) (Q = u), Kf(u), (u = u.sibling)
          ;(Q = s), (Ni = g), (Ge = N)
        }
        Qf(e)
      } else
        s.subtreeFlags & 8772 && u !== null ? ((u.return = s), (Q = u)) : Qf(e)
    }
  }
  function Qf(e) {
    for (; Q !== null; ) {
      var t = Q
      if (t.flags & 8772) {
        var n = t.alternate
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Ti(5, t)
                break
              case 1:
                var i = t.stateNode
                if (t.flags & 4 && !Ge)
                  if (n === null) i.componentDidMount()
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Lt(t.type, n.memoizedProps)
                    i.componentDidUpdate(
                      s,
                      n.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var u = t.updateQueue
                u !== null && Qc(t, u, i)
                break
              case 3:
                var d = t.updateQueue
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode
                        break
                      case 1:
                        n = t.child.stateNode
                    }
                  Qc(t, d, n)
                }
                break
              case 5:
                var g = t.stateNode
                if (n === null && t.flags & 4) {
                  n = g
                  var v = t.memoizedProps
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      v.autoFocus && n.focus()
                      break
                    case "img":
                      v.src && (n.src = v.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var N = t.alternate
                  if (N !== null) {
                    var M = N.memoizedState
                    if (M !== null) {
                      var $ = M.dehydrated
                      $ !== null && Kr($)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(l(163))
            }
          Ge || (t.flags & 512 && ra(t))
        } catch (F) {
          Ne(t, t.return, F)
        }
      }
      if (t === e) {
        Q = null
        break
      }
      if (((n = t.sibling), n !== null)) {
        ;(n.return = t.return), (Q = n)
        break
      }
      Q = t.return
    }
  }
  function qf(e) {
    for (; Q !== null; ) {
      var t = Q
      if (t === e) {
        Q = null
        break
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (Q = n)
        break
      }
      Q = t.return
    }
  }
  function Gf(e) {
    for (; Q !== null; ) {
      var t = Q
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return
            try {
              Ti(4, t)
            } catch (v) {
              Ne(t, n, v)
            }
            break
          case 1:
            var i = t.stateNode
            if (typeof i.componentDidMount == "function") {
              var s = t.return
              try {
                i.componentDidMount()
              } catch (v) {
                Ne(t, s, v)
              }
            }
            var u = t.return
            try {
              ra(t)
            } catch (v) {
              Ne(t, u, v)
            }
            break
          case 5:
            var d = t.return
            try {
              ra(t)
            } catch (v) {
              Ne(t, d, v)
            }
        }
      } catch (v) {
        Ne(t, t.return, v)
      }
      if (t === e) {
        Q = null
        break
      }
      var g = t.sibling
      if (g !== null) {
        ;(g.return = t.return), (Q = g)
        break
      }
      Q = t.return
    }
  }
  var Xm = Math.ceil,
    Oi = V.ReactCurrentDispatcher,
    la = V.ReactCurrentOwner,
    Ct = V.ReactCurrentBatchConfig,
    fe = 0,
    Me = null,
    Ae = null,
    be = 0,
    ht = 0,
    vr = pn(0),
    De = 0,
    go = null,
    zn = 0,
    Li = 0,
    sa = 0,
    yo = null,
    it = null,
    aa = 0,
    wr = 1 / 0,
    tn = null,
    ji = !1,
    ua = null,
    wn = null,
    Ai = !1,
    Sn = null,
    Ii = 0,
    vo = 0,
    ca = null,
    zi = -1,
    Di = 0
  function et() {
    return fe & 6 ? Te() : zi !== -1 ? zi : (zi = Te())
  }
  function xn(e) {
    return e.mode & 1
      ? fe & 2 && be !== 0
        ? be & -be
        : zm.transition !== null
        ? (Di === 0 && (Di = Bu()), Di)
        : ((e = ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yu(e.type))),
          e)
      : 1
  }
  function It(e, t, n, i) {
    if (50 < vo) throw ((vo = 0), (ca = null), Error(l(185)))
    Br(e, n, i),
      (!(fe & 2) || e !== Me) &&
        (e === Me && (!(fe & 2) && (Li |= n), De === 4 && kn(e, be)),
        lt(e, i),
        n === 1 && fe === 0 && !(t.mode & 1) && ((wr = Te() + 500), ci && mn()))
  }
  function lt(e, t) {
    var n = e.callbackNode
    zh(e, t)
    var i = Vo(e, e === Me ? be : 0)
    if (i === 0)
      n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((n != null && Mu(n), t === 1))
        e.tag === 0 ? Im(Jf.bind(null, e)) : zc(Jf.bind(null, e)),
          Om(function () {
            !(fe & 6) && mn()
          }),
          (n = null)
      else {
        switch (Hu(i)) {
          case 1:
            n = Wl
            break
          case 4:
            n = $u
            break
          case 16:
            n = Bo
            break
          case 536870912:
            n = Uu
            break
          default:
            n = Bo
        }
        n = id(n, Yf.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = n)
    }
  }
  function Yf(e, t) {
    if (((zi = -1), (Di = 0), fe & 6)) throw Error(l(327))
    var n = e.callbackNode
    if (Sr() && e.callbackNode !== n) return null
    var i = Vo(e, e === Me ? be : 0)
    if (i === 0) return null
    if (i & 30 || i & e.expiredLanes || t) t = Fi(e, i)
    else {
      t = i
      var s = fe
      fe |= 2
      var u = Zf()
      ;(Me !== e || be !== t) && ((tn = null), (wr = Te() + 500), Fn(e, t))
      do
        try {
          tg()
          break
        } catch (g) {
          Xf(e, g)
        }
      while (!0)
      Ns(),
        (Oi.current = u),
        (fe = s),
        Ae !== null ? (t = 0) : ((Me = null), (be = 0), (t = De))
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = bl(e)), s !== 0 && ((i = s), (t = fa(e, s)))),
        t === 1)
      )
        throw ((n = go), Fn(e, 0), kn(e, i), lt(e, Te()), n)
      if (t === 6) kn(e, i)
      else {
        if (
          ((s = e.current.alternate),
          !(i & 30) &&
            !Zm(s) &&
            ((t = Fi(e, i)),
            t === 2 && ((u = bl(e)), u !== 0 && ((i = u), (t = fa(e, u)))),
            t === 1))
        )
          throw ((n = go), Fn(e, 0), kn(e, i), lt(e, Te()), n)
        switch (((e.finishedWork = s), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(l(345))
          case 2:
            Mn(e, it, tn)
            break
          case 3:
            if (
              (kn(e, i),
              (i & 130023424) === i && ((t = aa + 500 - Te()), 10 < t))
            ) {
              if (Vo(e, 0) !== 0) break
              if (((s = e.suspendedLanes), (s & i) !== i)) {
                et(), (e.pingedLanes |= e.suspendedLanes & s)
                break
              }
              e.timeoutHandle = ys(Mn.bind(null, e, it, tn), t)
              break
            }
            Mn(e, it, tn)
            break
          case 4:
            if ((kn(e, i), (i & 4194240) === i)) break
            for (t = e.eventTimes, s = -1; 0 < i; ) {
              var d = 31 - Nt(i)
              ;(u = 1 << d), (d = t[d]), d > s && (s = d), (i &= ~u)
            }
            if (
              ((i = s),
              (i = Te() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * Xm(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = ys(Mn.bind(null, e, it, tn), i)
              break
            }
            Mn(e, it, tn)
            break
          case 5:
            Mn(e, it, tn)
            break
          default:
            throw Error(l(329))
        }
      }
    }
    return lt(e, Te()), e.callbackNode === n ? Yf.bind(null, e) : null
  }
  function fa(e, t) {
    var n = yo
    return (
      e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256),
      (e = Fi(e, t)),
      e !== 2 && ((t = it), (it = n), t !== null && da(t)),
      e
    )
  }
  function da(e) {
    it === null ? (it = e) : it.push.apply(it, e)
  }
  function Zm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue
        if (n !== null && ((n = n.stores), n !== null))
          for (var i = 0; i < n.length; i++) {
            var s = n[i],
              u = s.getSnapshot
            s = s.value
            try {
              if (!Tt(u(), s)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function kn(e, t) {
    for (
      t &= ~sa,
        t &= ~Li,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Nt(t),
        i = 1 << n
      ;(e[n] = -1), (t &= ~i)
    }
  }
  function Jf(e) {
    if (fe & 6) throw Error(l(327))
    Sr()
    var t = Vo(e, 0)
    if (!(t & 1)) return lt(e, Te()), null
    var n = Fi(e, t)
    if (e.tag !== 0 && n === 2) {
      var i = bl(e)
      i !== 0 && ((t = i), (n = fa(e, i)))
    }
    if (n === 1) throw ((n = go), Fn(e, 0), kn(e, t), lt(e, Te()), n)
    if (n === 6) throw Error(l(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, it, tn),
      lt(e, Te()),
      null
    )
  }
  function pa(e, t) {
    var n = fe
    fe |= 1
    try {
      return e(t)
    } finally {
      ;(fe = n), fe === 0 && ((wr = Te() + 500), ci && mn())
    }
  }
  function Dn(e) {
    Sn !== null && Sn.tag === 0 && !(fe & 6) && Sr()
    var t = fe
    fe |= 1
    var n = Ct.transition,
      i = ve
    try {
      if (((Ct.transition = null), (ve = 1), e)) return e()
    } finally {
      ;(ve = i), (Ct.transition = n), (fe = t), !(fe & 6) && mn()
    }
  }
  function ha() {
    ;(ht = vr.current), ke(vr)
  }
  function Fn(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), Tm(n)), Ae !== null))
      for (n = Ae.return; n !== null; ) {
        var i = n
        switch ((Es(i), i.tag)) {
          case 1:
            ;(i = i.type.childContextTypes), i != null && ai()
            break
          case 3:
            mr(), ke(nt), ke(Ke), Ds()
            break
          case 5:
            Is(i)
            break
          case 4:
            mr()
            break
          case 13:
            ke(_e)
            break
          case 19:
            ke(_e)
            break
          case 10:
            Ts(i.type._context)
            break
          case 22:
          case 23:
            ha()
        }
        n = n.return
      }
    if (
      ((Me = e),
      (Ae = e = En(e.current, null)),
      (be = ht = t),
      (De = 0),
      (go = null),
      (sa = Li = zn = 0),
      (it = yo = null),
      jn !== null)
    ) {
      for (t = 0; t < jn.length; t++)
        if (((n = jn[t]), (i = n.interleaved), i !== null)) {
          n.interleaved = null
          var s = i.next,
            u = n.pending
          if (u !== null) {
            var d = u.next
            ;(u.next = s), (i.next = d)
          }
          n.pending = i
        }
      jn = null
    }
    return e
  }
  function Xf(e, t) {
    do {
      var n = Ae
      try {
        if ((Ns(), (Si.current = Ci), xi)) {
          for (var i = Re.memoizedState; i !== null; ) {
            var s = i.queue
            s !== null && (s.pending = null), (i = i.next)
          }
          xi = !1
        }
        if (
          ((In = 0),
          (Fe = ze = Re = null),
          (uo = !1),
          (co = 0),
          (la.current = null),
          n === null || n.return === null)
        ) {
          ;(De = 1), (go = t), (Ae = null)
          break
        }
        e: {
          var u = e,
            d = n.return,
            g = n,
            v = t
          if (
            ((t = be),
            (g.flags |= 32768),
            v !== null && typeof v == "object" && typeof v.then == "function")
          ) {
            var N = v,
              M = g,
              $ = M.tag
            if (!(M.mode & 1) && ($ === 0 || $ === 11 || $ === 15)) {
              var F = M.alternate
              F
                ? ((M.updateQueue = F.updateQueue),
                  (M.memoizedState = F.memoizedState),
                  (M.lanes = F.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null))
            }
            var b = Ef(d)
            if (b !== null) {
              ;(b.flags &= -257),
                Cf(b, d, g, u, t),
                b.mode & 1 && kf(u, N, t),
                (t = b),
                (v = N)
              var q = t.updateQueue
              if (q === null) {
                var G = new Set()
                G.add(v), (t.updateQueue = G)
              } else q.add(v)
              break e
            } else {
              if (!(t & 1)) {
                kf(u, N, t), ma()
                break e
              }
              v = Error(l(426))
            }
          } else if (Ce && g.mode & 1) {
            var Oe = Ef(d)
            if (Oe !== null) {
              !(Oe.flags & 65536) && (Oe.flags |= 256),
                Cf(Oe, d, g, u, t),
                Rs(gr(v, g))
              break e
            }
          }
          ;(u = v = gr(v, g)),
            De !== 4 && (De = 2),
            yo === null ? (yo = [u]) : yo.push(u),
            (u = d)
          do {
            switch (u.tag) {
              case 3:
                ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                var C = Sf(u, v, t)
                Kc(u, C)
                break e
              case 1:
                g = v
                var S = u.type,
                  P = u.stateNode
                if (
                  !(u.flags & 128) &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (P !== null &&
                      typeof P.componentDidCatch == "function" &&
                      (wn === null || !wn.has(P))))
                ) {
                  ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                  var B = xf(u, g, t)
                  Kc(u, B)
                  break e
                }
            }
            u = u.return
          } while (u !== null)
        }
        td(n)
      } catch (J) {
        ;(t = J), Ae === n && n !== null && (Ae = n = n.return)
        continue
      }
      break
    } while (!0)
  }
  function Zf() {
    var e = Oi.current
    return (Oi.current = Ci), e === null ? Ci : e
  }
  function ma() {
    ;(De === 0 || De === 3 || De === 2) && (De = 4),
      Me === null || (!(zn & 268435455) && !(Li & 268435455)) || kn(Me, be)
  }
  function Fi(e, t) {
    var n = fe
    fe |= 2
    var i = Zf()
    ;(Me !== e || be !== t) && ((tn = null), Fn(e, t))
    do
      try {
        eg()
        break
      } catch (s) {
        Xf(e, s)
      }
    while (!0)
    if ((Ns(), (fe = n), (Oi.current = i), Ae !== null)) throw Error(l(261))
    return (Me = null), (be = 0), De
  }
  function eg() {
    for (; Ae !== null; ) ed(Ae)
  }
  function tg() {
    for (; Ae !== null && !Rh(); ) ed(Ae)
  }
  function ed(e) {
    var t = od(e.alternate, e, ht)
    ;(e.memoizedProps = e.pendingProps),
      t === null ? td(e) : (Ae = t),
      (la.current = null)
  }
  function td(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), t.flags & 32768)) {
        if (((n = qm(n, t)), n !== null)) {
          ;(n.flags &= 32767), (Ae = n)
          return
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(De = 6), (Ae = null)
          return
        }
      } else if (((n = Qm(n, t, ht)), n !== null)) {
        Ae = n
        return
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t
        return
      }
      Ae = t = e
    } while (t !== null)
    De === 0 && (De = 5)
  }
  function Mn(e, t, n) {
    var i = ve,
      s = Ct.transition
    try {
      ;(Ct.transition = null), (ve = 1), ng(e, t, n, i)
    } finally {
      ;(Ct.transition = s), (ve = i)
    }
    return null
  }
  function ng(e, t, n, i) {
    do Sr()
    while (Sn !== null)
    if (fe & 6) throw Error(l(327))
    n = e.finishedWork
    var s = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var u = n.lanes | n.childLanes
    if (
      (Dh(e, u),
      e === Me && ((Ae = Me = null), (be = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ai ||
        ((Ai = !0),
        id(Bo, function () {
          return Sr(), null
        })),
      (u = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || u)
    ) {
      ;(u = Ct.transition), (Ct.transition = null)
      var d = ve
      ve = 1
      var g = fe
      ;(fe |= 4),
        (la.current = null),
        Ym(e, n),
        Vf(n, e),
        km(ms),
        (qo = !!hs),
        (ms = hs = null),
        (e.current = n),
        Jm(n),
        Ph(),
        (fe = g),
        (ve = d),
        (Ct.transition = u)
    } else e.current = n
    if (
      (Ai && ((Ai = !1), (Sn = e), (Ii = s)),
      (u = e.pendingLanes),
      u === 0 && (wn = null),
      Oh(n.stateNode),
      lt(e, Te()),
      t !== null)
    )
      for (i = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), i(s.value, { componentStack: s.stack, digest: s.digest })
    if (ji) throw ((ji = !1), (e = ua), (ua = null), e)
    return (
      Ii & 1 && e.tag !== 0 && Sr(),
      (u = e.pendingLanes),
      u & 1 ? (e === ca ? vo++ : ((vo = 0), (ca = e))) : (vo = 0),
      mn(),
      null
    )
  }
  function Sr() {
    if (Sn !== null) {
      var e = Hu(Ii),
        t = Ct.transition,
        n = ve
      try {
        if (((Ct.transition = null), (ve = 16 > e ? 16 : e), Sn === null))
          var i = !1
        else {
          if (((e = Sn), (Sn = null), (Ii = 0), fe & 6)) throw Error(l(331))
          var s = fe
          for (fe |= 4, Q = e.current; Q !== null; ) {
            var u = Q,
              d = u.child
            if (Q.flags & 16) {
              var g = u.deletions
              if (g !== null) {
                for (var v = 0; v < g.length; v++) {
                  var N = g[v]
                  for (Q = N; Q !== null; ) {
                    var M = Q
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, M, u)
                    }
                    var $ = M.child
                    if ($ !== null) ($.return = M), (Q = $)
                    else
                      for (; Q !== null; ) {
                        M = Q
                        var F = M.sibling,
                          b = M.return
                        if ((Uf(M), M === N)) {
                          Q = null
                          break
                        }
                        if (F !== null) {
                          ;(F.return = b), (Q = F)
                          break
                        }
                        Q = b
                      }
                  }
                }
                var q = u.alternate
                if (q !== null) {
                  var G = q.child
                  if (G !== null) {
                    q.child = null
                    do {
                      var Oe = G.sibling
                      ;(G.sibling = null), (G = Oe)
                    } while (G !== null)
                  }
                }
                Q = u
              }
            }
            if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (Q = d)
            else
              e: for (; Q !== null; ) {
                if (((u = Q), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(9, u, u.return)
                  }
                var C = u.sibling
                if (C !== null) {
                  ;(C.return = u.return), (Q = C)
                  break e
                }
                Q = u.return
              }
          }
          var S = e.current
          for (Q = S; Q !== null; ) {
            d = Q
            var P = d.child
            if (d.subtreeFlags & 2064 && P !== null) (P.return = d), (Q = P)
            else
              e: for (d = S; Q !== null; ) {
                if (((g = Q), g.flags & 2048))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ti(9, g)
                    }
                  } catch (J) {
                    Ne(g, g.return, J)
                  }
                if (g === d) {
                  Q = null
                  break e
                }
                var B = g.sibling
                if (B !== null) {
                  ;(B.return = g.return), (Q = B)
                  break e
                }
                Q = g.return
              }
          }
          if (
            ((fe = s),
            mn(),
            Mt && typeof Mt.onPostCommitFiberRoot == "function")
          )
            try {
              Mt.onPostCommitFiberRoot(Ho, e)
            } catch {}
          i = !0
        }
        return i
      } finally {
        ;(ve = n), (Ct.transition = t)
      }
    }
    return !1
  }
  function nd(e, t, n) {
    ;(t = gr(n, t)),
      (t = Sf(e, t, 1)),
      (e = yn(e, t, 1)),
      (t = et()),
      e !== null && (Br(e, 1, t), lt(e, t))
  }
  function Ne(e, t, n) {
    if (e.tag === 3) nd(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nd(t, e, n)
          break
        } else if (t.tag === 1) {
          var i = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (wn === null || !wn.has(i)))
          ) {
            ;(e = gr(n, e)),
              (e = xf(t, e, 1)),
              (t = yn(t, e, 1)),
              (e = et()),
              t !== null && (Br(t, 1, e), lt(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function rg(e, t, n) {
    var i = e.pingCache
    i !== null && i.delete(t),
      (t = et()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Me === e &&
        (be & n) === n &&
        (De === 4 || (De === 3 && (be & 130023424) === be && 500 > Te() - aa)
          ? Fn(e, 0)
          : (sa |= n)),
      lt(e, t)
  }
  function rd(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = bo), (bo <<= 1), !(bo & 130023424) && (bo = 4194304))
        : (t = 1))
    var n = et()
    ;(e = Xt(e, t)), e !== null && (Br(e, t, n), lt(e, n))
  }
  function og(e) {
    var t = e.memoizedState,
      n = 0
    t !== null && (n = t.retryLane), rd(e, n)
  }
  function ig(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          s = e.memoizedState
        s !== null && (n = s.retryLane)
        break
      case 19:
        i = e.stateNode
        break
      default:
        throw Error(l(314))
    }
    i !== null && i.delete(t), rd(e, n)
  }
  var od
  od = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) ot = !0
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (ot = !1), Km(e, t, n)
        ot = !!(e.flags & 131072)
      }
    else (ot = !1), Ce && t.flags & 1048576 && Dc(t, di, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type
        Pi(e, t), (e = t.pendingProps)
        var s = ar(t, Ke.current)
        hr(t, n), (s = $s(null, t, i, e, s, n))
        var u = Us()
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(i) ? ((u = !0), ui(t)) : (u = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              js(t),
              (s.updater = _i),
              (t.stateNode = s),
              (s._reactInternals = t),
              Ks(t, i, e, n),
              (t = Ys(null, t, i, !0, u, n)))
            : ((t.tag = 0), Ce && u && ks(t), Ze(null, t, s, n), (t = t.child)),
          t
        )
      case 16:
        i = t.elementType
        e: {
          switch (
            (Pi(e, t),
            (e = t.pendingProps),
            (s = i._init),
            (i = s(i._payload)),
            (t.type = i),
            (s = t.tag = sg(i)),
            (e = Lt(i, e)),
            s)
          ) {
            case 0:
              t = Gs(null, t, i, e, n)
              break e
            case 1:
              t = Of(null, t, i, e, n)
              break e
            case 11:
              t = _f(null, t, i, e, n)
              break e
            case 14:
              t = Rf(null, t, i, Lt(i.type, e), n)
              break e
          }
          throw Error(l(306, i, ""))
        }
        return t
      case 0:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : Lt(i, s)),
          Gs(e, t, i, s, n)
        )
      case 1:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : Lt(i, s)),
          Of(e, t, i, s, n)
        )
      case 3:
        e: {
          if ((Lf(t), e === null)) throw Error(l(387))
          ;(i = t.pendingProps),
            (u = t.memoizedState),
            (s = u.element),
            Vc(e, t),
            vi(t, i, null, n)
          var d = t.memoizedState
          if (((i = d.element), u.isDehydrated))
            if (
              ((u = {
                element: i,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ;(s = gr(Error(l(423)), t)), (t = jf(e, t, i, n, s))
              break e
            } else if (i !== s) {
              ;(s = gr(Error(l(424)), t)), (t = jf(e, t, i, n, s))
              break e
            } else
              for (
                pt = dn(t.stateNode.containerInfo.firstChild),
                  dt = t,
                  Ce = !0,
                  Ot = null,
                  n = Wc(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
          else {
            if ((fr(), i === s)) {
              t = en(e, t, n)
              break e
            }
            Ze(e, t, i, n)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          qc(t),
          e === null && _s(t),
          (i = t.type),
          (s = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (d = s.children),
          gs(i, s) ? (d = null) : u !== null && gs(i, u) && (t.flags |= 32),
          Tf(e, t),
          Ze(e, t, d, n),
          t.child
        )
      case 6:
        return e === null && _s(t), null
      case 13:
        return Af(e, t, n)
      case 4:
        return (
          As(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = dr(t, null, i, n)) : Ze(e, t, i, n),
          t.child
        )
      case 11:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : Lt(i, s)),
          _f(e, t, i, s, n)
        )
      case 7:
        return Ze(e, t, t.pendingProps, n), t.child
      case 8:
        return Ze(e, t, t.pendingProps.children, n), t.child
      case 12:
        return Ze(e, t, t.pendingProps.children, n), t.child
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (s = t.pendingProps),
            (u = t.memoizedProps),
            (d = s.value),
            Se(mi, i._currentValue),
            (i._currentValue = d),
            u !== null)
          )
            if (Tt(u.value, d)) {
              if (u.children === s.children && !nt.current) {
                t = en(e, t, n)
                break e
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var g = u.dependencies
                if (g !== null) {
                  d = u.child
                  for (var v = g.firstContext; v !== null; ) {
                    if (v.context === i) {
                      if (u.tag === 1) {
                        ;(v = Zt(-1, n & -n)), (v.tag = 2)
                        var N = u.updateQueue
                        if (N !== null) {
                          N = N.shared
                          var M = N.pending
                          M === null
                            ? (v.next = v)
                            : ((v.next = M.next), (M.next = v)),
                            (N.pending = v)
                        }
                      }
                      ;(u.lanes |= n),
                        (v = u.alternate),
                        v !== null && (v.lanes |= n),
                        Os(u.return, n, t),
                        (g.lanes |= n)
                      break
                    }
                    v = v.next
                  }
                } else if (u.tag === 10) d = u.type === t.type ? null : u.child
                else if (u.tag === 18) {
                  if (((d = u.return), d === null)) throw Error(l(341))
                  ;(d.lanes |= n),
                    (g = d.alternate),
                    g !== null && (g.lanes |= n),
                    Os(d, n, t),
                    (d = u.sibling)
                } else d = u.child
                if (d !== null) d.return = u
                else
                  for (d = u; d !== null; ) {
                    if (d === t) {
                      d = null
                      break
                    }
                    if (((u = d.sibling), u !== null)) {
                      ;(u.return = d.return), (d = u)
                      break
                    }
                    d = d.return
                  }
                u = d
              }
          Ze(e, t, s.children, n), (t = t.child)
        }
        return t
      case 9:
        return (
          (s = t.type),
          (i = t.pendingProps.children),
          hr(t, n),
          (s = kt(s)),
          (i = i(s)),
          (t.flags |= 1),
          Ze(e, t, i, n),
          t.child
        )
      case 14:
        return (
          (i = t.type),
          (s = Lt(i, t.pendingProps)),
          (s = Lt(i.type, s)),
          Rf(e, t, i, s, n)
        )
      case 15:
        return Pf(e, t, t.type, t.pendingProps, n)
      case 17:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : Lt(i, s)),
          Pi(e, t),
          (t.tag = 1),
          rt(i) ? ((e = !0), ui(t)) : (e = !1),
          hr(t, n),
          vf(t, i, s),
          Ks(t, i, s, n),
          Ys(null, t, i, !0, e, n)
        )
      case 19:
        return zf(e, t, n)
      case 22:
        return Nf(e, t, n)
    }
    throw Error(l(156, t.tag))
  }
  function id(e, t) {
    return Fu(e, t)
  }
  function lg(e, t, n, i) {
    ;(this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function _t(e, t, n, i) {
    return new lg(e, t, n, i)
  }
  function ga(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function sg(e) {
    if (typeof e == "function") return ga(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === vt)) return 11
      if (e === wt) return 14
    }
    return 2
  }
  function En(e, t) {
    var n = e.alternate
    return (
      n === null
        ? ((n = _t(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    )
  }
  function Mi(e, t, n, i, s, u) {
    var d = 2
    if (((i = e), typeof e == "function")) ga(e) && (d = 1)
    else if (typeof e == "string") d = 5
    else
      e: switch (e) {
        case K:
          return $n(n.children, s, u, t)
        case de:
          ;(d = 8), (s |= 8)
          break
        case ge:
          return (
            (e = _t(12, n, t, s | 2)), (e.elementType = ge), (e.lanes = u), e
          )
        case Xe:
          return (e = _t(13, n, t, s)), (e.elementType = Xe), (e.lanes = u), e
        case ct:
          return (e = _t(19, n, t, s)), (e.elementType = ct), (e.lanes = u), e
        case we:
          return $i(n, s, u, t)
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case je:
                d = 10
                break e
              case yt:
                d = 9
                break e
              case vt:
                d = 11
                break e
              case wt:
                d = 14
                break e
              case Ve:
                ;(d = 16), (i = null)
                break e
            }
          throw Error(l(130, e == null ? e : typeof e, ""))
      }
    return (
      (t = _t(d, n, t, s)), (t.elementType = e), (t.type = i), (t.lanes = u), t
    )
  }
  function $n(e, t, n, i) {
    return (e = _t(7, e, i, t)), (e.lanes = n), e
  }
  function $i(e, t, n, i) {
    return (
      (e = _t(22, e, i, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function ya(e, t, n) {
    return (e = _t(6, e, null, t)), (e.lanes = n), e
  }
  function va(e, t, n) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function ag(e, t, n, i, s) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Vl(0)),
      (this.expirationTimes = Vl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Vl(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null)
  }
  function wa(e, t, n, i, s, u, d, g, v) {
    return (
      (e = new ag(e, t, n, g, v)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = _t(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      js(u),
      e
    )
  }
  function ug(e, t, n) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: X,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: n,
    }
  }
  function ld(e) {
    if (!e) return hn
    e = e._reactInternals
    e: {
      if (Pn(e) !== e || e.tag !== 1) throw Error(l(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(l(171))
    }
    if (e.tag === 1) {
      var n = e.type
      if (rt(n)) return Ac(e, n, t)
    }
    return t
  }
  function sd(e, t, n, i, s, u, d, g, v) {
    return (
      (e = wa(n, i, !0, e, s, u, d, g, v)),
      (e.context = ld(null)),
      (n = e.current),
      (i = et()),
      (s = xn(n)),
      (u = Zt(i, s)),
      (u.callback = t ?? null),
      yn(n, u, s),
      (e.current.lanes = s),
      Br(e, s, i),
      lt(e, i),
      e
    )
  }
  function Ui(e, t, n, i) {
    var s = t.current,
      u = et(),
      d = xn(s)
    return (
      (n = ld(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Zt(u, d)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = yn(s, t, d)),
      e !== null && (It(e, s, d, u), yi(e, s, d)),
      d
    )
  }
  function Bi(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function Sa(e, t) {
    ad(e, t), (e = e.alternate) && ad(e, t)
  }
  function cg() {
    return null
  }
  var ud =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e)
        }
  function xa(e) {
    this._internalRoot = e
  }
  ;(Hi.prototype.render = xa.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(l(409))
      Ui(e, t, null, null)
    }),
    (Hi.prototype.unmount = xa.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          Dn(function () {
            Ui(null, e, null, null)
          }),
            (t[qt] = null)
        }
      })
  function Hi(e) {
    this._internalRoot = e
  }
  Hi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vu()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
      un.splice(n, 0, e), n === 0 && qu(e)
    }
  }
  function ka(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function Wi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    )
  }
  function cd() {}
  function fg(e, t, n, i, s) {
    if (s) {
      if (typeof i == "function") {
        var u = i
        i = function () {
          var N = Bi(d)
          u.call(N)
        }
      }
      var d = sd(t, i, e, 0, null, !1, !1, "", cd)
      return (
        (e._reactRootContainer = d),
        (e[qt] = d.current),
        to(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        d
      )
    }
    for (; (s = e.lastChild); ) e.removeChild(s)
    if (typeof i == "function") {
      var g = i
      i = function () {
        var N = Bi(v)
        g.call(N)
      }
    }
    var v = wa(e, 0, !1, null, null, !1, !1, "", cd)
    return (
      (e._reactRootContainer = v),
      (e[qt] = v.current),
      to(e.nodeType === 8 ? e.parentNode : e),
      Dn(function () {
        Ui(t, v, n, i)
      }),
      v
    )
  }
  function bi(e, t, n, i, s) {
    var u = n._reactRootContainer
    if (u) {
      var d = u
      if (typeof s == "function") {
        var g = s
        s = function () {
          var v = Bi(d)
          g.call(v)
        }
      }
      Ui(t, d, e, s)
    } else d = fg(n, t, e, s, i)
    return Bi(d)
  }
  ;(Wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var n = Ur(t.pendingLanes)
          n !== 0 &&
            (Kl(t, n | 1), lt(t, Te()), !(fe & 6) && ((wr = Te() + 500), mn()))
        }
        break
      case 13:
        Dn(function () {
          var i = Xt(e, 1)
          if (i !== null) {
            var s = et()
            It(i, e, 1, s)
          }
        }),
          Sa(e, 1)
    }
  }),
    (Ql = function (e) {
      if (e.tag === 13) {
        var t = Xt(e, 134217728)
        if (t !== null) {
          var n = et()
          It(t, e, 134217728, n)
        }
        Sa(e, 134217728)
      }
    }),
    (bu = function (e) {
      if (e.tag === 13) {
        var t = xn(e),
          n = Xt(e, t)
        if (n !== null) {
          var i = et()
          It(n, e, t, i)
        }
        Sa(e, t)
      }
    }),
    (Vu = function () {
      return ve
    }),
    (Ku = function (e, t) {
      var n = ve
      try {
        return (ve = e), t()
      } finally {
        ve = n
      }
    }),
    ($l = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t]
              if (i !== e && i.form === e.form) {
                var s = si(i)
                if (!s) throw Error(l(90))
                Pt(i), Ll(i, s)
              }
            }
          }
          break
        case "textarea":
          xu(e, n)
          break
        case "select":
          ;(t = n.value), t != null && Yn(e, !!n.multiple, t, !1)
      }
    }),
    (Ou = pa),
    (Lu = Dn)
  var dg = { usingClientEntryPoint: !1, Events: [oo, lr, si, Nu, Tu, pa] },
    wo = {
      findFiberByHostInstance: Nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    pg = {
      bundleType: wo.bundleType,
      version: wo.version,
      rendererPackageName: wo.rendererPackageName,
      rendererConfig: wo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zu(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: wo.findFiberByHostInstance || cg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Vi.isDisabled && Vi.supportsFiber)
      try {
        ;(Ho = Vi.inject(pg)), (Mt = Vi)
      } catch {}
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dg),
    (st.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!ka(t)) throw Error(l(200))
      return ug(e, t, null, n)
    }),
    (st.createRoot = function (e, t) {
      if (!ka(e)) throw Error(l(299))
      var n = !1,
        i = "",
        s = ud
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = wa(e, 1, !1, null, null, n, !1, i, s)),
        (e[qt] = t.current),
        to(e.nodeType === 8 ? e.parentNode : e),
        new xa(t)
      )
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)))
      return (e = zu(t)), (e = e === null ? null : e.stateNode), e
    }),
    (st.flushSync = function (e) {
      return Dn(e)
    }),
    (st.hydrate = function (e, t, n) {
      if (!Wi(t)) throw Error(l(200))
      return bi(null, e, t, !0, n)
    }),
    (st.hydrateRoot = function (e, t, n) {
      if (!ka(e)) throw Error(l(405))
      var i = (n != null && n.hydratedSources) || null,
        s = !1,
        u = "",
        d = ud
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = sd(t, null, e, 1, n ?? null, s, !1, u, d)),
        (e[qt] = t.current),
        to(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (n = i[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s)
      return new Hi(t)
    }),
    (st.render = function (e, t, n) {
      if (!Wi(t)) throw Error(l(200))
      return bi(null, e, t, !1, n)
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!Wi(e)) throw Error(l(40))
      return e._reactRootContainer
        ? (Dn(function () {
            bi(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[qt] = null)
            })
          }),
          !0)
        : !1
    }),
    (st.unstable_batchedUpdates = pa),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
      if (!Wi(n)) throw Error(l(200))
      if (e == null || e._reactInternals === void 0) throw Error(l(38))
      return bi(e, t, n, !1, i)
    }),
    (st.version = "18.3.1-next-f1338f8080-20240426"),
    st
  )
}
var vd
function kg() {
  if (vd) return _a.exports
  vd = 1
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
      } catch (o) {
        console.error(o)
      }
  }
  return r(), (_a.exports = xg()), _a.exports
}
var wd
function Eg() {
  if (wd) return Ki
  wd = 1
  var r = kg()
  return (Ki.createRoot = r.createRoot), (Ki.hydrateRoot = r.hydrateRoot), Ki
}
var Cg = Eg(),
  xo = {},
  Sd
function _g() {
  if (Sd) return xo
  ;(Sd = 1),
    Object.defineProperty(xo, "__esModule", { value: !0 }),
    (xo.parse = p),
    (xo.serialize = y)
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    a = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    f = (() => {
      const _ = function () {}
      return (_.prototype = Object.create(null)), _
    })()
  function p(_, L) {
    const E = new f(),
      O = _.length
    if (O < 2) return E
    const R = (L == null ? void 0 : L.decode) || w
    let j = 0
    do {
      const U = _.indexOf("=", j)
      if (U === -1) break
      const D = _.indexOf(";", j),
        V = D === -1 ? O : D
      if (U > V) {
        j = _.lastIndexOf(";", U - 1) + 1
        continue
      }
      const Y = h(_, j, U),
        X = m(_, U, Y),
        K = _.slice(Y, X)
      if (E[K] === void 0) {
        let de = h(_, U + 1, V),
          ge = m(_, V, de)
        const je = R(_.slice(de, ge))
        E[K] = je
      }
      j = V + 1
    } while (j < O)
    return E
  }
  function h(_, L, E) {
    do {
      const O = _.charCodeAt(L)
      if (O !== 32 && O !== 9) return L
    } while (++L < E)
    return E
  }
  function m(_, L, E) {
    for (; L > E; ) {
      const O = _.charCodeAt(--L)
      if (O !== 32 && O !== 9) return L + 1
    }
    return E
  }
  function y(_, L, E) {
    const O = (E == null ? void 0 : E.encode) || encodeURIComponent
    if (!r.test(_)) throw new TypeError(`argument name is invalid: ${_}`)
    const R = O(L)
    if (!o.test(R)) throw new TypeError(`argument val is invalid: ${L}`)
    let j = _ + "=" + R
    if (!E) return j
    if (E.maxAge !== void 0) {
      if (!Number.isInteger(E.maxAge))
        throw new TypeError(`option maxAge is invalid: ${E.maxAge}`)
      j += "; Max-Age=" + E.maxAge
    }
    if (E.domain) {
      if (!l.test(E.domain))
        throw new TypeError(`option domain is invalid: ${E.domain}`)
      j += "; Domain=" + E.domain
    }
    if (E.path) {
      if (!a.test(E.path))
        throw new TypeError(`option path is invalid: ${E.path}`)
      j += "; Path=" + E.path
    }
    if (E.expires) {
      if (!x(E.expires) || !Number.isFinite(E.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${E.expires}`)
      j += "; Expires=" + E.expires.toUTCString()
    }
    if (
      (E.httpOnly && (j += "; HttpOnly"),
      E.secure && (j += "; Secure"),
      E.partitioned && (j += "; Partitioned"),
      E.priority)
    )
      switch (
        typeof E.priority == "string" ? E.priority.toLowerCase() : void 0
      ) {
        case "low":
          j += "; Priority=Low"
          break
        case "medium":
          j += "; Priority=Medium"
          break
        case "high":
          j += "; Priority=High"
          break
        default:
          throw new TypeError(`option priority is invalid: ${E.priority}`)
      }
    if (E.sameSite)
      switch (
        typeof E.sameSite == "string" ? E.sameSite.toLowerCase() : E.sameSite
      ) {
        case !0:
        case "strict":
          j += "; SameSite=Strict"
          break
        case "lax":
          j += "; SameSite=Lax"
          break
        case "none":
          j += "; SameSite=None"
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)
      }
    return j
  }
  function w(_) {
    if (_.indexOf("%") === -1) return _
    try {
      return decodeURIComponent(_)
    } catch {
      return _
    }
  }
  function x(_) {
    return c.call(_) === "[object Date]"
  }
  return xo
}
_g()
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var xd = "popstate"
function Rg(r = {}) {
  function o(a, c) {
    let { pathname: f, search: p, hash: h } = a.location
    return $a(
      "",
      { pathname: f, search: p, hash: h },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    )
  }
  function l(a, c) {
    return typeof c == "string" ? c : Po(c)
  }
  return Ng(o, l, null, r)
}
function Pe(r, o) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(o)
}
function Vt(r, o) {
  if (!r) {
    typeof console < "u" && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function Pg() {
  return Math.random().toString(36).substring(2, 10)
}
function kd(r, o) {
  return { usr: r.state, key: r.key, idx: o }
}
function $a(r, o, l = null, a) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? Tr(o) : o),
    state: l,
    key: (o && o.key) || a || Pg(),
  }
}
function Po({ pathname: r = "/", search: o = "", hash: l = "" }) {
  return (
    o && o !== "?" && (r += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l),
    r
  )
}
function Tr(r) {
  let o = {}
  if (r) {
    let l = r.indexOf("#")
    l >= 0 && ((o.hash = r.substring(l)), (r = r.substring(0, l)))
    let a = r.indexOf("?")
    a >= 0 && ((o.search = r.substring(a)), (r = r.substring(0, a))),
      r && (o.pathname = r)
  }
  return o
}
function Ng(r, o, l, a = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = a,
    p = c.history,
    h = "POP",
    m = null,
    y = w()
  y == null && ((y = 0), p.replaceState({ ...p.state, idx: y }, ""))
  function w() {
    return (p.state || { idx: null }).idx
  }
  function x() {
    h = "POP"
    let R = w(),
      j = R == null ? null : R - y
    ;(y = R), m && m({ action: h, location: O.location, delta: j })
  }
  function _(R, j) {
    h = "PUSH"
    let U = $a(O.location, R, j)
    y = w() + 1
    let D = kd(U, y),
      V = O.createHref(U)
    try {
      p.pushState(D, "", V)
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y
      c.location.assign(V)
    }
    f && m && m({ action: h, location: O.location, delta: 1 })
  }
  function L(R, j) {
    h = "REPLACE"
    let U = $a(O.location, R, j)
    y = w()
    let D = kd(U, y),
      V = O.createHref(U)
    p.replaceState(D, "", V),
      f && m && m({ action: h, location: O.location, delta: 0 })
  }
  function E(R) {
    let j = c.location.origin !== "null" ? c.location.origin : c.location.href,
      U = typeof R == "string" ? R : Po(R)
    return (
      (U = U.replace(/ $/, "%20")),
      Pe(
        j,
        `No window.location.(origin|href) available to create URL for href: ${U}`
      ),
      new URL(U, j)
    )
  }
  let O = {
    get action() {
      return h
    },
    get location() {
      return r(c, p)
    },
    listen(R) {
      if (m) throw new Error("A history only accepts one active listener")
      return (
        c.addEventListener(xd, x),
        (m = R),
        () => {
          c.removeEventListener(xd, x), (m = null)
        }
      )
    },
    createHref(R) {
      return o(c, R)
    },
    createURL: E,
    encodeLocation(R) {
      let j = E(R)
      return { pathname: j.pathname, search: j.search, hash: j.hash }
    },
    push: _,
    replace: L,
    go(R) {
      return p.go(R)
    },
  }
  return O
}
function np(r, o, l = "/") {
  return Tg(r, o, l, !1)
}
function Tg(r, o, l, a) {
  let c = typeof o == "string" ? Tr(o) : o,
    f = Rn(c.pathname || "/", l)
  if (f == null) return null
  let p = rp(r)
  Og(p)
  let h = null
  for (let m = 0; h == null && m < p.length; ++m) {
    let y = Bg(f)
    h = $g(p[m], y, a)
  }
  return h
}
function rp(r, o = [], l = [], a = "") {
  let c = (f, p, h) => {
    let m = {
      relativePath: h === void 0 ? f.path || "" : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: p,
      route: f,
    }
    m.relativePath.startsWith("/") &&
      (Pe(
        m.relativePath.startsWith(a),
        `Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(a.length)))
    let y = rn([a, m.relativePath]),
      w = l.concat(m)
    f.children &&
      f.children.length > 0 &&
      (Pe(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      rp(f.children, o, w, y)),
      !(f.path == null && !f.index) &&
        o.push({ path: y, score: Fg(y, f.index), routesMeta: w })
  }
  return (
    r.forEach((f, p) => {
      var h
      if (f.path === "" || !((h = f.path) != null && h.includes("?"))) c(f, p)
      else for (let m of op(f.path)) c(f, p, m)
    }),
    o
  )
}
function op(r) {
  let o = r.split("/")
  if (o.length === 0) return []
  let [l, ...a] = o,
    c = l.endsWith("?"),
    f = l.replace(/\?$/, "")
  if (a.length === 0) return c ? [f, ""] : [f]
  let p = op(a.join("/")),
    h = []
  return (
    h.push(...p.map(m => (m === "" ? f : [f, m].join("/")))),
    c && h.push(...p),
    h.map(m => (r.startsWith("/") && m === "" ? "/" : m))
  )
}
function Og(r) {
  r.sort((o, l) =>
    o.score !== l.score
      ? l.score - o.score
      : Mg(
          o.routesMeta.map(a => a.childrenIndex),
          l.routesMeta.map(a => a.childrenIndex)
        )
  )
}
var Lg = /^:[\w-]+$/,
  jg = 3,
  Ag = 2,
  Ig = 1,
  zg = 10,
  Dg = -2,
  Ed = r => r === "*"
function Fg(r, o) {
  let l = r.split("/"),
    a = l.length
  return (
    l.some(Ed) && (a += Dg),
    o && (a += Ag),
    l
      .filter(c => !Ed(c))
      .reduce((c, f) => c + (Lg.test(f) ? jg : f === "" ? Ig : zg), a)
  )
}
function Mg(r, o) {
  return r.length === o.length && r.slice(0, -1).every((a, c) => a === o[c])
    ? r[r.length - 1] - o[o.length - 1]
    : 0
}
function $g(r, o, l = !1) {
  let { routesMeta: a } = r,
    c = {},
    f = "/",
    p = []
  for (let h = 0; h < a.length; ++h) {
    let m = a[h],
      y = h === a.length - 1,
      w = f === "/" ? o : o.slice(f.length) || "/",
      x = al(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: y },
        w
      ),
      _ = m.route
    if (
      (!x &&
        y &&
        l &&
        !a[a.length - 1].route.index &&
        (x = al(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          w
        )),
      !x)
    )
      return null
    Object.assign(c, x.params),
      p.push({
        params: c,
        pathname: rn([f, x.pathname]),
        pathnameBase: Vg(rn([f, x.pathnameBase])),
        route: _,
      }),
      x.pathnameBase !== "/" && (f = rn([f, x.pathnameBase]))
  }
  return p
}
function al(r, o) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 })
  let [l, a] = Ug(r.path, r.caseSensitive, r.end),
    c = o.match(l)
  if (!c) return null
  let f = c[0],
    p = f.replace(/(.)\/+$/, "$1"),
    h = c.slice(1)
  return {
    params: a.reduce((y, { paramName: w, isOptional: x }, _) => {
      if (w === "*") {
        let E = h[_] || ""
        p = f.slice(0, f.length - E.length).replace(/(.)\/+$/, "$1")
      }
      const L = h[_]
      return (
        x && !L ? (y[w] = void 0) : (y[w] = (L || "").replace(/%2F/g, "/")), y
      )
    }, {}),
    pathname: f,
    pathnameBase: p,
    pattern: r,
  }
}
function Ug(r, o = !1, l = !0) {
  Vt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(
      /\*$/,
      "/*"
    )}".`
  )
  let a = [],
    c =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, h, m) => (
            a.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
  return (
    r.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (c += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
      ? (c += "\\/*$")
      : r !== "" && r !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, o ? void 0 : "i"), a]
  )
}
function Bg(r) {
  try {
    return r
      .split("/")
      .map(o => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/")
  } catch (o) {
    return (
      Vt(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      r
    )
  }
}
function Rn(r, o) {
  if (o === "/") return r
  if (!r.toLowerCase().startsWith(o.toLowerCase())) return null
  let l = o.endsWith("/") ? o.length - 1 : o.length,
    a = r.charAt(l)
  return a && a !== "/" ? null : r.slice(l) || "/"
}
function Hg(r, o = "/") {
  let {
    pathname: l,
    search: a = "",
    hash: c = "",
  } = typeof r == "string" ? Tr(r) : r
  return {
    pathname: l ? (l.startsWith("/") ? l : Wg(l, o)) : o,
    search: Kg(a),
    hash: Qg(c),
  }
}
function Wg(r, o) {
  let l = o.replace(/\/+$/, "").split("/")
  return (
    r.split("/").forEach(c => {
      c === ".." ? l.length > 1 && l.pop() : c !== "." && l.push(c)
    }),
    l.length > 1 ? l.join("/") : "/"
  )
}
function Na(r, o, l, a) {
  return `Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function bg(r) {
  return r.filter(
    (o, l) => l === 0 || (o.route.path && o.route.path.length > 0)
  )
}
function ip(r) {
  let o = bg(r)
  return o.map((l, a) => (a === o.length - 1 ? l.pathname : l.pathnameBase))
}
function lp(r, o, l, a = !1) {
  let c
  typeof r == "string"
    ? (c = Tr(r))
    : ((c = { ...r }),
      Pe(
        !c.pathname || !c.pathname.includes("?"),
        Na("?", "pathname", "search", c)
      ),
      Pe(
        !c.pathname || !c.pathname.includes("#"),
        Na("#", "pathname", "hash", c)
      ),
      Pe(!c.search || !c.search.includes("#"), Na("#", "search", "hash", c)))
  let f = r === "" || c.pathname === "",
    p = f ? "/" : c.pathname,
    h
  if (p == null) h = l
  else {
    let x = o.length - 1
    if (!a && p.startsWith("..")) {
      let _ = p.split("/")
      for (; _[0] === ".."; ) _.shift(), (x -= 1)
      c.pathname = _.join("/")
    }
    h = x >= 0 ? o[x] : "/"
  }
  let m = Hg(c, h),
    y = p && p !== "/" && p.endsWith("/"),
    w = (f || p === ".") && l.endsWith("/")
  return !m.pathname.endsWith("/") && (y || w) && (m.pathname += "/"), m
}
var rn = r => r.join("/").replace(/\/\/+/g, "/"),
  Vg = r => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Kg = r => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Qg = r => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r)
function qg(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  )
}
var sp = ["POST", "PUT", "PATCH", "DELETE"]
new Set(sp)
var Gg = ["GET", ...sp]
new Set(Gg)
var Or = A.createContext(null)
Or.displayName = "DataRouter"
var gl = A.createContext(null)
gl.displayName = "DataRouterState"
var ap = A.createContext({ isTransitioning: !1 })
ap.displayName = "ViewTransition"
var Yg = A.createContext(new Map())
Yg.displayName = "Fetchers"
var Jg = A.createContext(null)
Jg.displayName = "Await"
var Kt = A.createContext(null)
Kt.displayName = "Navigation"
var Lo = A.createContext(null)
Lo.displayName = "Location"
var on = A.createContext({ outlet: null, matches: [], isDataRoute: !1 })
on.displayName = "Route"
var nu = A.createContext(null)
nu.displayName = "RouteError"
function Xg(r, { relative: o } = {}) {
  Pe(jo(), "useHref() may be used only in the context of a <Router> component.")
  let { basename: l, navigator: a } = A.useContext(Kt),
    { hash: c, pathname: f, search: p } = Ao(r, { relative: o }),
    h = f
  return (
    l !== "/" && (h = f === "/" ? l : rn([l, f])),
    a.createHref({ pathname: h, search: p, hash: c })
  )
}
function jo() {
  return A.useContext(Lo) != null
}
function qn() {
  return (
    Pe(
      jo(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    A.useContext(Lo).location
  )
}
var up =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered."
function cp(r) {
  A.useContext(Kt).static || A.useLayoutEffect(r)
}
function Zg() {
  let { isDataRoute: r } = A.useContext(on)
  return r ? dy() : ey()
}
function ey() {
  Pe(
    jo(),
    "useNavigate() may be used only in the context of a <Router> component."
  )
  let r = A.useContext(Or),
    { basename: o, navigator: l } = A.useContext(Kt),
    { matches: a } = A.useContext(on),
    { pathname: c } = qn(),
    f = JSON.stringify(ip(a)),
    p = A.useRef(!1)
  return (
    cp(() => {
      p.current = !0
    }),
    A.useCallback(
      (m, y = {}) => {
        if ((Vt(p.current, up), !p.current)) return
        if (typeof m == "number") {
          l.go(m)
          return
        }
        let w = lp(m, JSON.parse(f), c, y.relative === "path")
        r == null &&
          o !== "/" &&
          (w.pathname = w.pathname === "/" ? o : rn([o, w.pathname])),
          (y.replace ? l.replace : l.push)(w, y.state, y)
      },
      [o, l, f, c, r]
    )
  )
}
A.createContext(null)
function Ao(r, { relative: o } = {}) {
  let { matches: l } = A.useContext(on),
    { pathname: a } = qn(),
    c = JSON.stringify(ip(l))
  return A.useMemo(() => lp(r, JSON.parse(c), a, o === "path"), [r, c, a, o])
}
function ty(r, o) {
  return fp(r, o)
}
function fp(r, o, l, a) {
  var U
  Pe(
    jo(),
    "useRoutes() may be used only in the context of a <Router> component."
  )
  let { navigator: c, static: f } = A.useContext(Kt),
    { matches: p } = A.useContext(on),
    h = p[p.length - 1],
    m = h ? h.params : {},
    y = h ? h.pathname : "/",
    w = h ? h.pathnameBase : "/",
    x = h && h.route
  {
    let D = (x && x.path) || ""
    dp(
      y,
      !x || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${
        D === "/" ? "*" : `${D}/*`
      }">.`
    )
  }
  let _ = qn(),
    L
  if (o) {
    let D = typeof o == "string" ? Tr(o) : o
    Pe(
      w === "/" || ((U = D.pathname) == null ? void 0 : U.startsWith(w)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${D.pathname}" was given in the \`location\` prop.`
    ),
      (L = D)
  } else L = _
  let E = L.pathname || "/",
    O = E
  if (w !== "/") {
    let D = w.replace(/^\//, "").split("/")
    O = "/" + E.replace(/^\//, "").split("/").slice(D.length).join("/")
  }
  let R =
    !f && l && l.matches && l.matches.length > 0
      ? l.matches
      : np(r, { pathname: O })
  Vt(
    x || R != null,
    `No routes matched location "${L.pathname}${L.search}${L.hash}" `
  ),
    Vt(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    )
  let j = ly(
    R &&
      R.map(D =>
        Object.assign({}, D, {
          params: Object.assign({}, m, D.params),
          pathname: rn([
            w,
            c.encodeLocation
              ? c.encodeLocation(D.pathname).pathname
              : D.pathname,
          ]),
          pathnameBase:
            D.pathnameBase === "/"
              ? w
              : rn([
                  w,
                  c.encodeLocation
                    ? c.encodeLocation(D.pathnameBase).pathname
                    : D.pathnameBase,
                ]),
        })
      ),
    p,
    l,
    a
  )
  return o && j
    ? A.createElement(
        Lo.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...L,
            },
            navigationType: "POP",
          },
        },
        j
      )
    : j
}
function ny() {
  let r = fy(),
    o = qg(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
      ? r.message
      : JSON.stringify(r),
    l = r instanceof Error ? r.stack : null,
    a = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: a },
    f = { padding: "2px 4px", backgroundColor: a },
    p = null
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (p = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, o),
      l ? A.createElement("pre", { style: c }, l) : null,
      p
    )
  )
}
var ry = A.createElement(ny, null),
  oy = class extends A.Component {
    constructor(r) {
      super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        })
    }
    static getDerivedStateFromError(r) {
      return { error: r }
    }
    static getDerivedStateFromProps(r, o) {
      return o.location !== r.location ||
        (o.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : o.error,
            location: o.location,
            revalidation: r.revalidation || o.revalidation,
          }
    }
    componentDidCatch(r, o) {
      console.error(
        "React Router caught the following error during render",
        r,
        o
      )
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            on.Provider,
            { value: this.props.routeContext },
            A.createElement(nu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children
    }
  }
function iy({ routeContext: r, match: o, children: l }) {
  let a = A.useContext(Or)
  return (
    a &&
      a.static &&
      a.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = o.route.id),
    A.createElement(on.Provider, { value: r }, l)
  )
}
function ly(r, o = [], l = null, a = null) {
  if (r == null) {
    if (!l) return null
    if (l.errors) r = l.matches
    else if (o.length === 0 && !l.initialized && l.matches.length > 0)
      r = l.matches
    else return null
  }
  let c = r,
    f = l == null ? void 0 : l.errors
  if (f != null) {
    let m = c.findIndex(
      y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0
    )
    Pe(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, m + 1)))
  }
  let p = !1,
    h = -1
  if (l)
    for (let m = 0; m < c.length; m++) {
      let y = c[m]
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = m),
        y.route.id)
      ) {
        let { loaderData: w, errors: x } = l,
          _ =
            y.route.loader &&
            !w.hasOwnProperty(y.route.id) &&
            (!x || x[y.route.id] === void 0)
        if (y.route.lazy || _) {
          ;(p = !0), h >= 0 ? (c = c.slice(0, h + 1)) : (c = [c[0]])
          break
        }
      }
    }
  return c.reduceRight((m, y, w) => {
    let x,
      _ = !1,
      L = null,
      E = null
    l &&
      ((x = f && y.route.id ? f[y.route.id] : void 0),
      (L = y.route.errorElement || ry),
      p &&
        (h < 0 && w === 0
          ? (dp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (_ = !0),
            (E = null))
          : h === w &&
            ((_ = !0), (E = y.route.hydrateFallbackElement || null))))
    let O = o.concat(c.slice(0, w + 1)),
      R = () => {
        let j
        return (
          x
            ? (j = L)
            : _
            ? (j = E)
            : y.route.Component
            ? (j = A.createElement(y.route.Component, null))
            : y.route.element
            ? (j = y.route.element)
            : (j = m),
          A.createElement(iy, {
            match: y,
            routeContext: { outlet: m, matches: O, isDataRoute: l != null },
            children: j,
          })
        )
      }
    return l && (y.route.ErrorBoundary || y.route.errorElement || w === 0)
      ? A.createElement(oy, {
          location: l.location,
          revalidation: l.revalidation,
          component: L,
          error: x,
          children: R(),
          routeContext: { outlet: null, matches: O, isDataRoute: !0 },
        })
      : R()
  }, null)
}
function ru(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function sy(r) {
  let o = A.useContext(Or)
  return Pe(o, ru(r)), o
}
function ay(r) {
  let o = A.useContext(gl)
  return Pe(o, ru(r)), o
}
function uy(r) {
  let o = A.useContext(on)
  return Pe(o, ru(r)), o
}
function ou(r) {
  let o = uy(r),
    l = o.matches[o.matches.length - 1]
  return (
    Pe(
      l.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    l.route.id
  )
}
function cy() {
  return ou("useRouteId")
}
function fy() {
  var a
  let r = A.useContext(nu),
    o = ay("useRouteError"),
    l = ou("useRouteError")
  return r !== void 0 ? r : (a = o.errors) == null ? void 0 : a[l]
}
function dy() {
  let { router: r } = sy("useNavigate"),
    o = ou("useNavigate"),
    l = A.useRef(!1)
  return (
    cp(() => {
      l.current = !0
    }),
    A.useCallback(
      async (c, f = {}) => {
        Vt(l.current, up),
          l.current &&
            (typeof c == "number"
              ? r.navigate(c)
              : await r.navigate(c, { fromRouteId: o, ...f }))
      },
      [r, o]
    )
  )
}
var Cd = {}
function dp(r, o, l) {
  !o && !Cd[r] && ((Cd[r] = !0), Vt(!1, l))
}
A.memo(py)
function py({ routes: r, future: o, state: l }) {
  return fp(r, void 0, l, o)
}
function Ji(r) {
  Pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  )
}
function hy({
  basename: r = "/",
  children: o = null,
  location: l,
  navigationType: a = "POP",
  navigator: c,
  static: f = !1,
}) {
  Pe(
    !jo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  )
  let p = r.replace(/^\/*/, "/"),
    h = A.useMemo(
      () => ({ basename: p, navigator: c, static: f, future: {} }),
      [p, c, f]
    )
  typeof l == "string" && (l = Tr(l))
  let {
      pathname: m = "/",
      search: y = "",
      hash: w = "",
      state: x = null,
      key: _ = "default",
    } = l,
    L = A.useMemo(() => {
      let E = Rn(m, p)
      return E == null
        ? null
        : {
            location: { pathname: E, search: y, hash: w, state: x, key: _ },
            navigationType: a,
          }
    }, [p, m, y, w, x, _, a])
  return (
    Vt(
      L != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    L == null
      ? null
      : A.createElement(
          Kt.Provider,
          { value: h },
          A.createElement(Lo.Provider, { children: o, value: L })
        )
  )
}
function my({ children: r, location: o }) {
  return ty(Ua(r), o)
}
function Ua(r, o = []) {
  let l = []
  return (
    A.Children.forEach(r, (a, c) => {
      if (!A.isValidElement(a)) return
      let f = [...o, c]
      if (a.type === A.Fragment) {
        l.push.apply(l, Ua(a.props.children, f))
        return
      }
      Pe(
        a.type === Ji,
        `[${
          typeof a.type == "string" ? a.type : a.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Pe(
          !a.props.index || !a.props.children,
          "An index route cannot have child routes."
        )
      let p = {
        id: a.props.id || f.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        hydrateFallbackElement: a.props.hydrateFallbackElement,
        HydrateFallback: a.props.HydrateFallback,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.hasErrorBoundary === !0 ||
          a.props.ErrorBoundary != null ||
          a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      }
      a.props.children && (p.children = Ua(a.props.children, f)), l.push(p)
    }),
    l
  )
}
var Xi = "get",
  Zi = "application/x-www-form-urlencoded"
function yl(r) {
  return r != null && typeof r.tagName == "string"
}
function gy(r) {
  return yl(r) && r.tagName.toLowerCase() === "button"
}
function yy(r) {
  return yl(r) && r.tagName.toLowerCase() === "form"
}
function vy(r) {
  return yl(r) && r.tagName.toLowerCase() === "input"
}
function wy(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}
function Sy(r, o) {
  return r.button === 0 && (!o || o === "_self") && !wy(r)
}
var Qi = null
function xy() {
  if (Qi === null)
    try {
      new FormData(document.createElement("form"), 0), (Qi = !1)
    } catch {
      Qi = !0
    }
  return Qi
}
var ky = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
])
function Ta(r) {
  return r != null && !ky.has(r)
    ? (Vt(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zi}"`
      ),
      null)
    : r
}
function Ey(r, o) {
  let l, a, c, f, p
  if (yy(r)) {
    let h = r.getAttribute("action")
    ;(a = h ? Rn(h, o) : null),
      (l = r.getAttribute("method") || Xi),
      (c = Ta(r.getAttribute("enctype")) || Zi),
      (f = new FormData(r))
  } else if (gy(r) || (vy(r) && (r.type === "submit" || r.type === "image"))) {
    let h = r.form
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      )
    let m = r.getAttribute("formaction") || h.getAttribute("action")
    if (
      ((a = m ? Rn(m, o) : null),
      (l = r.getAttribute("formmethod") || h.getAttribute("method") || Xi),
      (c =
        Ta(r.getAttribute("formenctype")) ||
        Ta(h.getAttribute("enctype")) ||
        Zi),
      (f = new FormData(h, r)),
      !xy())
    ) {
      let { name: y, type: w, value: x } = r
      if (w === "image") {
        let _ = y ? `${y}.` : ""
        f.append(`${_}x`, "0"), f.append(`${_}y`, "0")
      } else y && f.append(y, x)
    }
  } else {
    if (yl(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;(l = Xi), (a = null), (c = Zi), (p = r)
  }
  return (
    f && c === "text/plain" && ((p = f), (f = void 0)),
    { action: a, method: l.toLowerCase(), encType: c, formData: f, body: p }
  )
}
function iu(r, o) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(o)
}
async function Cy(r, o) {
  if (r.id in o) return o[r.id]
  try {
    let l = await import(r.module)
    return (o[r.id] = l), l
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function _y(r) {
  return r == null
    ? !1
    : r.href == null
    ? r.rel === "preload" &&
      typeof r.imageSrcSet == "string" &&
      typeof r.imageSizes == "string"
    : typeof r.rel == "string" && typeof r.href == "string"
}
async function Ry(r, o, l) {
  let a = await Promise.all(
    r.map(async c => {
      let f = o.routes[c.route.id]
      if (f) {
        let p = await Cy(f, l)
        return p.links ? p.links() : []
      }
      return []
    })
  )
  return Oy(
    a
      .flat(1)
      .filter(_y)
      .filter(c => c.rel === "stylesheet" || c.rel === "preload")
      .map(c =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  )
}
function _d(r, o, l, a, c, f) {
  let p = (m, y) => (l[y] ? m.route.id !== l[y].route.id : !0),
    h = (m, y) => {
      var w
      return (
        l[y].pathname !== m.pathname ||
        (((w = l[y].route.path) == null ? void 0 : w.endsWith("*")) &&
          l[y].params["*"] !== m.params["*"])
      )
    }
  return f === "assets"
    ? o.filter((m, y) => p(m, y) || h(m, y))
    : f === "data"
    ? o.filter((m, y) => {
        var x
        let w = a.routes[m.route.id]
        if (!w || !w.hasLoader) return !1
        if (p(m, y) || h(m, y)) return !0
        if (m.route.shouldRevalidate) {
          let _ = m.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: ((x = l[0]) == null ? void 0 : x.params) || {},
            nextUrl: new URL(r, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          })
          if (typeof _ == "boolean") return _
        }
        return !0
      })
    : []
}
function Py(r, o, { includeHydrateFallback: l } = {}) {
  return Ny(
    r
      .map(a => {
        let c = o.routes[a.route.id]
        if (!c) return []
        let f = [c.module]
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          l &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        )
      })
      .flat(1)
  )
}
function Ny(r) {
  return [...new Set(r)]
}
function Ty(r) {
  let o = {},
    l = Object.keys(r).sort()
  for (let a of l) o[a] = r[a]
  return o
}
function Oy(r, o) {
  let l = new Set()
  return (
    new Set(o),
    r.reduce((a, c) => {
      let f = JSON.stringify(Ty(c))
      return l.has(f) || (l.add(f), a.push({ key: f, link: c })), a
    }, [])
  )
}
function Ly(r) {
  let o =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : r
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  )
}
function jy() {
  let r = A.useContext(Or)
  return (
    iu(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  )
}
function Ay() {
  let r = A.useContext(gl)
  return (
    iu(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  )
}
var lu = A.createContext(void 0)
lu.displayName = "FrameworkContext"
function pp() {
  let r = A.useContext(lu)
  return (
    iu(r, "You must render this element inside a <HydratedRouter> element"), r
  )
}
function Iy(r, o) {
  let l = A.useContext(lu),
    [a, c] = A.useState(!1),
    [f, p] = A.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: y,
      onMouseLeave: w,
      onTouchStart: x,
    } = o,
    _ = A.useRef(null)
  A.useEffect(() => {
    if ((r === "render" && p(!0), r === "viewport")) {
      let O = j => {
          j.forEach(U => {
            p(U.isIntersecting)
          })
        },
        R = new IntersectionObserver(O, { threshold: 0.5 })
      return (
        _.current && R.observe(_.current),
        () => {
          R.disconnect()
        }
      )
    }
  }, [r]),
    A.useEffect(() => {
      if (a) {
        let O = setTimeout(() => {
          p(!0)
        }, 100)
        return () => {
          clearTimeout(O)
        }
      }
    }, [a])
  let L = () => {
      c(!0)
    },
    E = () => {
      c(!1), p(!1)
    }
  return l
    ? r !== "intent"
      ? [f, _, {}]
      : [
          f,
          _,
          {
            onFocus: ko(h, L),
            onBlur: ko(m, E),
            onMouseEnter: ko(y, L),
            onMouseLeave: ko(w, E),
            onTouchStart: ko(x, L),
          },
        ]
    : [!1, _, {}]
}
function ko(r, o) {
  return l => {
    r && r(l), l.defaultPrevented || o(l)
  }
}
function zy({ page: r, ...o }) {
  let { router: l } = jy(),
    a = A.useMemo(() => np(l.routes, r, l.basename), [l.routes, r, l.basename])
  return a ? A.createElement(Fy, { page: r, matches: a, ...o }) : null
}
function Dy(r) {
  let { manifest: o, routeModules: l } = pp(),
    [a, c] = A.useState([])
  return (
    A.useEffect(() => {
      let f = !1
      return (
        Ry(r, o, l).then(p => {
          f || c(p)
        }),
        () => {
          f = !0
        }
      )
    }, [r, o, l]),
    a
  )
}
function Fy({ page: r, matches: o, ...l }) {
  let a = qn(),
    { manifest: c, routeModules: f } = pp(),
    { loaderData: p, matches: h } = Ay(),
    m = A.useMemo(() => _d(r, o, h, c, a, "data"), [r, o, h, c, a]),
    y = A.useMemo(() => _d(r, o, h, c, a, "assets"), [r, o, h, c, a]),
    w = A.useMemo(() => {
      if (r === a.pathname + a.search + a.hash) return []
      let L = new Set(),
        E = !1
      if (
        (o.forEach(R => {
          var U
          let j = c.routes[R.route.id]
          !j ||
            !j.hasLoader ||
            ((!m.some(D => D.route.id === R.route.id) &&
              R.route.id in p &&
              (U = f[R.route.id]) != null &&
              U.shouldRevalidate) ||
            j.hasClientLoader
              ? (E = !0)
              : L.add(R.route.id))
        }),
        L.size === 0)
      )
        return []
      let O = Ly(r)
      return (
        E &&
          L.size > 0 &&
          O.searchParams.set(
            "_routes",
            o
              .filter(R => L.has(R.route.id))
              .map(R => R.route.id)
              .join(",")
          ),
        [O.pathname + O.search]
      )
    }, [p, a, c, m, o, r, f]),
    x = A.useMemo(() => Py(y, c), [y, c]),
    _ = Dy(y)
  return A.createElement(
    A.Fragment,
    null,
    w.map(L =>
      A.createElement("link", {
        key: L,
        rel: "prefetch",
        as: "fetch",
        href: L,
        ...l,
      })
    ),
    x.map(L =>
      A.createElement("link", { key: L, rel: "modulepreload", href: L, ...l })
    ),
    _.map(({ key: L, link: E }) => A.createElement("link", { key: L, ...E }))
  )
}
function My(...r) {
  return o => {
    r.forEach(l => {
      typeof l == "function" ? l(o) : l != null && (l.current = o)
    })
  }
}
var hp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
try {
  hp && (window.__reactRouterVersion = "7.2.0")
} catch {}
function $y({ basename: r, children: o, window: l }) {
  let a = A.useRef()
  a.current == null && (a.current = Rg({ window: l, v5Compat: !0 }))
  let c = a.current,
    [f, p] = A.useState({ action: c.action, location: c.location }),
    h = A.useCallback(
      m => {
        A.startTransition(() => p(m))
      },
      [p]
    )
  return (
    A.useLayoutEffect(() => c.listen(h), [c, h]),
    A.createElement(hy, {
      basename: r,
      children: o,
      location: f.location,
      navigationType: f.action,
      navigator: c,
    })
  )
}
var mp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gp = A.forwardRef(function (
    {
      onClick: o,
      discover: l = "render",
      prefetch: a = "none",
      relative: c,
      reloadDocument: f,
      replace: p,
      state: h,
      target: m,
      to: y,
      preventScrollReset: w,
      viewTransition: x,
      ..._
    },
    L
  ) {
    let { basename: E } = A.useContext(Kt),
      O = typeof y == "string" && mp.test(y),
      R,
      j = !1
    if (typeof y == "string" && O && ((R = y), hp))
      try {
        let ge = new URL(window.location.href),
          je = y.startsWith("//") ? new URL(ge.protocol + y) : new URL(y),
          yt = Rn(je.pathname, E)
        je.origin === ge.origin && yt != null
          ? (y = yt + je.search + je.hash)
          : (j = !0)
      } catch {
        Vt(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        )
      }
    let U = Xg(y, { relative: c }),
      [D, V, Y] = Iy(a, _),
      X = Wy(y, {
        replace: p,
        state: h,
        target: m,
        preventScrollReset: w,
        relative: c,
        viewTransition: x,
      })
    function K(ge) {
      o && o(ge), ge.defaultPrevented || X(ge)
    }
    let de = A.createElement("a", {
      ..._,
      ...Y,
      href: R || U,
      onClick: j || f ? o : K,
      ref: My(L, V),
      target: m,
      "data-discover": !O && l === "render" ? "true" : void 0,
    })
    return D && !O
      ? A.createElement(A.Fragment, null, de, A.createElement(zy, { page: U }))
      : de
  })
gp.displayName = "Link"
var Uy = A.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: l = !1,
    className: a = "",
    end: c = !1,
    style: f,
    to: p,
    viewTransition: h,
    children: m,
    ...y
  },
  w
) {
  let x = Ao(p, { relative: y.relative }),
    _ = qn(),
    L = A.useContext(gl),
    { navigator: E, basename: O } = A.useContext(Kt),
    R = L != null && qy(x) && h === !0,
    j = E.encodeLocation ? E.encodeLocation(x).pathname : x.pathname,
    U = _.pathname,
    D =
      L && L.navigation && L.navigation.location
        ? L.navigation.location.pathname
        : null
  l ||
    ((U = U.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (j = j.toLowerCase())),
    D && O && (D = Rn(D, O) || D)
  const V = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length
  let Y = U === j || (!c && U.startsWith(j) && U.charAt(V) === "/"),
    X =
      D != null &&
      (D === j || (!c && D.startsWith(j) && D.charAt(j.length) === "/")),
    K = { isActive: Y, isPending: X, isTransitioning: R },
    de = Y ? o : void 0,
    ge
  typeof a == "function"
    ? (ge = a(K))
    : (ge = [
        a,
        Y ? "active" : null,
        X ? "pending" : null,
        R ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "))
  let je = typeof f == "function" ? f(K) : f
  return A.createElement(
    gp,
    {
      ...y,
      "aria-current": de,
      className: ge,
      ref: w,
      style: je,
      to: p,
      viewTransition: h,
    },
    typeof m == "function" ? m(K) : m
  )
})
Uy.displayName = "NavLink"
var By = A.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: o,
      navigate: l,
      reloadDocument: a,
      replace: c,
      state: f,
      method: p = Xi,
      action: h,
      onSubmit: m,
      relative: y,
      preventScrollReset: w,
      viewTransition: x,
      ..._
    },
    L
  ) => {
    let E = Ky(),
      O = Qy(h, { relative: y }),
      R = p.toLowerCase() === "get" ? "get" : "post",
      j = typeof h == "string" && mp.test(h),
      U = D => {
        if ((m && m(D), D.defaultPrevented)) return
        D.preventDefault()
        let V = D.nativeEvent.submitter,
          Y = (V == null ? void 0 : V.getAttribute("formmethod")) || p
        E(V || D.currentTarget, {
          fetcherKey: o,
          method: Y,
          navigate: l,
          replace: c,
          state: f,
          relative: y,
          preventScrollReset: w,
          viewTransition: x,
        })
      }
    return A.createElement("form", {
      ref: L,
      method: R,
      action: O,
      onSubmit: a ? m : U,
      ..._,
      "data-discover": !j && r === "render" ? "true" : void 0,
    })
  }
)
By.displayName = "Form"
function Hy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function yp(r) {
  let o = A.useContext(Or)
  return Pe(o, Hy(r)), o
}
function Wy(
  r,
  {
    target: o,
    replace: l,
    state: a,
    preventScrollReset: c,
    relative: f,
    viewTransition: p,
  } = {}
) {
  let h = Zg(),
    m = qn(),
    y = Ao(r, { relative: f })
  return A.useCallback(
    w => {
      if (Sy(w, o)) {
        w.preventDefault()
        let x = l !== void 0 ? l : Po(m) === Po(y)
        h(r, {
          replace: x,
          state: a,
          preventScrollReset: c,
          relative: f,
          viewTransition: p,
        })
      }
    },
    [m, h, y, l, a, o, r, c, f, p]
  )
}
var by = 0,
  Vy = () => `__${String(++by)}__`
function Ky() {
  let { router: r } = yp("useSubmit"),
    { basename: o } = A.useContext(Kt),
    l = cy()
  return A.useCallback(
    async (a, c = {}) => {
      let { action: f, method: p, encType: h, formData: m, body: y } = Ey(a, o)
      if (c.navigate === !1) {
        let w = c.fetcherKey || Vy()
        await r.fetch(w, l, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: y,
          formMethod: c.method || p,
          formEncType: c.encType || h,
          flushSync: c.flushSync,
        })
      } else
        await r.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: y,
          formMethod: c.method || p,
          formEncType: c.encType || h,
          replace: c.replace,
          state: c.state,
          fromRouteId: l,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        })
    },
    [r, o, l]
  )
}
function Qy(r, { relative: o } = {}) {
  let { basename: l } = A.useContext(Kt),
    a = A.useContext(on)
  Pe(a, "useFormAction must be used inside a RouteContext")
  let [c] = a.matches.slice(-1),
    f = { ...Ao(r || ".", { relative: o }) },
    p = qn()
  if (r == null) {
    f.search = p.search
    let h = new URLSearchParams(f.search),
      m = h.getAll("index")
    if (m.some(w => w === "")) {
      h.delete("index"), m.filter(x => x).forEach(x => h.append("index", x))
      let w = h.toString()
      f.search = w ? `?${w}` : ""
    }
  }
  return (
    (!r || r === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (f.pathname = f.pathname === "/" ? l : rn([l, f.pathname])),
    Po(f)
  )
}
function qy(r, o = {}) {
  let l = A.useContext(ap)
  Pe(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: a } = yp("useViewTransitionState"),
    c = Ao(r, { relative: o.relative })
  if (!l.isTransitioning) return !1
  let f = Rn(l.currentLocation.pathname, a) || l.currentLocation.pathname,
    p = Rn(l.nextLocation.pathname, a) || l.nextLocation.pathname
  return al(c.pathname, p) != null || al(c.pathname, f) != null
}
new TextEncoder()
const Gy = "_container_13w9b_1",
  Yy = "_copyrightContainer_13w9b_15",
  Jy = "_hrLine_13w9b_22",
  Oa = { container: Gy, copyrightContainer: Yy, hrLine: Jy },
  Xy = new Date().toLocaleDateString("en-US", { year: "numeric" })
function Zy() {
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx("hr", { className: Oa.hrLine }),
      z.jsx("div", {
        className: Oa.container,
        children: z.jsx("div", {
          className: Oa.copyrightContainer,
          children: `Custom site by Don Stevenson ©${Xy}`,
        }),
      }),
    ],
  })
}
const ev = "_container_tu9we_7",
  tv = "_title_tu9we_14",
  nv = "_subtitle1_tu9we_22",
  rv = "_subtitle2_tu9we_31",
  qi = { container: ev, title: tv, subtitle1: nv, subtitle2: rv }
function su({ title: r, subTitle: o, text: l }) {
  return z.jsxs("div", {
    className: qi.container,
    children: [
      z.jsx("div", { className: qi.title, children: r }),
      z.jsx("div", { className: qi.subtitle1, children: o }),
      z.jsx("div", { className: qi.subtitle2, children: l }),
    ],
  })
}
const ov = "_fadeIn_1u1ez_10",
  iv = "_carouselContainer_1u1ez_14",
  lv = "_card_1u1ez_24",
  sv = "_cardContent_1u1ez_38",
  av = "_cardSubtitle_1u1ez_48",
  uv = "_cardImage_1u1ez_55",
  cv = "_viewLink_1u1ez_60",
  Un = {
    fadeIn: ov,
    carouselContainer: iv,
    card: lv,
    cardContent: sv,
    cardSubtitle: av,
    cardImage: uv,
    viewLink: cv,
  },
  fv = "/assets/FTPsychStatic-DjqqkzHq.webp",
  dv = "/assets/FTPsychGif-gBs7RkVc.gif",
  pv = "/assets/SebastianKnoxStatic-BjDNhMX0.webp",
  hv = "/assets/SebastianKnoxGif-PyJbTsh8.gif",
  mv = "/assets/SchedulerStatic-DZiEZHCh.webp",
  gv = "/assets/SchedulerGIF-DUtEbauP.gif",
  yv = "/assets/TeamCreatorStatic-D0RMVFeK.webp",
  vv = "/assets/TeamCreatorGif-DeRs1kAi.gif",
  wv = "/assets/NagMe-static-BmXNuMAS.webp",
  Sv = "/assets/NagMe-BuctlHOj.gif",
  xv = "/assets/WeatherAppStatic-DPWC1CAW.webp",
  kv = "/assets/WeatherAppGif-DqK60FOT.gif",
  Ev = [
    {
      id: 0,
      title: "Soccer Team Creator",
      subTitle: "An app that creates balanced teams for soccer",
      imgSrc: yv,
      gifSrc: vv,
      link: "https://create-teams.vercel.app/login",
      selected: !1,
    },
    {
      id: 1,
      title: "Forward Thinking Psychology",
      subTitle: "I worked as a Front-End Dev for this site",
      imgSrc: fv,
      gifSrc: dv,
      link: "https://www.ftpsych.ca/",
      selected: !1,
    },
    {
      id: 2,
      title: "Sebastian Knox Woodwinds Services",
      subTitle: `I worked Front-End Dev for this 
 Saxophone
       Service & E-commerce Site.`,
      imgSrc: pv,
      gifSrc: hv,
      link: "https://www.sebastianknox.com/",
      selected: !1,
    },
    {
      id: 3,
      title: "Scheduler",
      subTitle: "An app for managing work appointments ",
      imgSrc: mv,
      gifSrc: gv,
      link: "https://github.com/Don-Stevenson/scheduler",
      selected: !1,
    },
    {
      id: 4,
      title: "Nag-me",
      subTitle: "A nudge-theory goal attainment app",
      imgSrc: wv,
      gifSrc: Sv,
      link: "https://github.com/Don-Stevenson/nag-me",
      selected: !1,
    },
    {
      id: 5,
      title: "The Weather App",
      subTitle: "An app that returns weather results.",
      imgSrc: xv,
      gifSrc: kv,
      link: "https://github.com/Don-Stevenson/weather-app",
      selected: !1,
    },
  ]
function Cv(r) {
  const [o, l] = A.useState(r.map(c => ({ ...c, selected: !1 })))
  return {
    activeItems: o,
    handleCardClick: c => {
      l(f =>
        f.map(p =>
          p.id === c ? { ...p, selected: !0 } : { ...p, selected: !1 }
        )
      )
    },
  }
}
function _v() {
  const { activeItems: r, handleCardClick: o } = Cv(Ev)
  return z.jsx("div", {
    className: Un.carouselContainer,
    children: r.map(
      ({
        id: l,
        title: a,
        subTitle: c,
        imgSrc: f,
        gifSrc: p,
        link: h,
        selected: m,
      }) =>
        z.jsxs(
          "div",
          {
            className: Un.card,
            onClick: () => o(l),
            children: [
              z.jsx("img", { className: Un.cardImage, src: m ? p : f, alt: a }),
              z.jsx("div", {
                className: Un.cardContent,
                children:
                  m &&
                  z.jsxs("div", {
                    className: Un.fadeIn,
                    children: [
                      z.jsx("p", { className: Un.cardSubtitle, children: c }),
                      z.jsx("a", {
                        className: Un.viewLink,
                        href: h,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "View Site / Source Code",
                      }),
                    ],
                  }),
              }),
            ],
          },
          l
        )
    ),
  })
}
function Rv({ title: r, subTitle: o, text: l }) {
  return z.jsxs(z.Fragment, {
    children: [z.jsx(su, { title: r, subTitle: o, text: l }), z.jsx(_v, {})],
  })
}
var vp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Rd = tt.createContext && tt.createContext(vp),
  Pv = ["attr", "size", "title"]
function Nv(r, o) {
  if (r == null) return {}
  var l = Tv(r, o),
    a,
    c
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r)
    for (c = 0; c < f.length; c++)
      (a = f[c]),
        !(o.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, a) &&
          (l[a] = r[a])
  }
  return l
}
function Tv(r, o) {
  if (r == null) return {}
  var l = {}
  for (var a in r)
    if (Object.prototype.hasOwnProperty.call(r, a)) {
      if (o.indexOf(a) >= 0) continue
      l[a] = r[a]
    }
  return l
}
function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o]
            for (var a in l)
              Object.prototype.hasOwnProperty.call(l, a) && (r[a] = l[a])
          }
          return r
        }),
    ul.apply(this, arguments)
  )
}
function Pd(r, o) {
  var l = Object.keys(r)
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r)
    o &&
      (a = a.filter(function (c) {
        return Object.getOwnPropertyDescriptor(r, c).enumerable
      })),
      l.push.apply(l, a)
  }
  return l
}
function cl(r) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {}
    o % 2
      ? Pd(Object(l), !0).forEach(function (a) {
          Ov(r, a, l[a])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
      : Pd(Object(l)).forEach(function (a) {
          Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(l, a))
        })
  }
  return r
}
function Ov(r, o, l) {
  return (
    (o = Lv(o)),
    o in r
      ? Object.defineProperty(r, o, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[o] = l),
    r
  )
}
function Lv(r) {
  var o = jv(r, "string")
  return typeof o == "symbol" ? o : o + ""
}
function jv(r, o) {
  if (typeof r != "object" || !r) return r
  var l = r[Symbol.toPrimitive]
  if (l !== void 0) {
    var a = l.call(r, o)
    if (typeof a != "object") return a
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (o === "string" ? String : Number)(r)
}
function wp(r) {
  return (
    r &&
    r.map((o, l) =>
      tt.createElement(o.tag, cl({ key: l }, o.attr), wp(o.child))
    )
  )
}
function Sp(r) {
  return o => tt.createElement(Av, ul({ attr: cl({}, r.attr) }, o), wp(r.child))
}
function Av(r) {
  var o = l => {
    var { attr: a, size: c, title: f } = r,
      p = Nv(r, Pv),
      h = c || l.size || "1em",
      m
    return (
      l.className && (m = l.className),
      r.className && (m = (m ? m + " " : "") + r.className),
      tt.createElement(
        "svg",
        ul(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          l.attr,
          a,
          p,
          {
            className: m,
            style: cl(cl({ color: r.color || l.color }, l.style), r.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        f && tt.createElement("title", null, f),
        r.children
      )
    )
  }
  return Rd !== void 0 ? tt.createElement(Rd.Consumer, null, l => o(l)) : o(vp)
}
function Iv(r) {
  return Sp({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
        },
        child: [],
      },
    ],
  })(r)
}
function zv(r) {
  return Sp({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z",
        },
        child: [],
      },
    ],
  })(r)
}
const Dv = "/assets/profile%20pic%202024-Dz8ZJNAg.webp",
  Fv = "/assets/DS%20Resume-DMwJhHrc.pdf",
  Mv = "_pageContainer_6gmih_1",
  $v = "_contentWrapper_6gmih_7",
  Uv = "_imageSection_6gmih_21",
  Bv = "_profileImage_6gmih_27",
  Hv = "_contentSection_6gmih_35",
  Wv = "_paragraph_6gmih_39",
  bv = "_socialLinksRow_6gmih_54",
  Vv = "_iconLink_6gmih_65",
  Kv = "_githubIcon_6gmih_70",
  Qv = "_linkedinIcon_6gmih_81",
  Ye = {
    pageContainer: Mv,
    contentWrapper: $v,
    imageSection: Uv,
    profileImage: Bv,
    contentSection: Hv,
    paragraph: Wv,
    socialLinksRow: bv,
    iconLink: Vv,
    githubIcon: Kv,
    linkedinIcon: Qv,
  }
function qv({ title: r }) {
  return z.jsxs("div", {
    className: Ye.pageContainer,
    children: [
      z.jsx(su, { title: r, children: r }),
      z.jsxs("div", {
        className: Ye.contentWrapper,
        children: [
          z.jsx("div", {
            className: Ye.imageSection,
            children: z.jsx("img", {
              className: Ye.profileImage,
              src: Dv,
              alt: "profile portrait",
            }),
          }),
          z.jsxs("div", {
            className: Ye.contentSection,
            children: [
              z.jsx("p", {
                className: Ye.paragraph,
                children:
                  "Hi, I'm Don - passionate full-stack software developer, mentor, and lifelong learner based in Toronto, Ontario. With expertise spanning a wide array of technologies, including React, JavaScript, TypeScript, Laravel, PHP, Node.js, GraphQL, and MongoDB, I specialize in building scalable, high-performing web applications that solve real-world problems.",
              }),
              z.jsx("p", {
                className: Ye.paragraph,
                children:
                  "Over the years, I've worked with notable clients like Ford and Manulife, contributing to impactful projects such as fleet repair management tools and fintech platforms. My journey has also taken me through mentorship roles at Lighthouse Labs, where I helped aspiring developers build their skills and launch successful careers in tech.",
              }),
              z.jsx("p", {
                className: Ye.paragraph,
                children:
                  "Beyond coding, I thrive on creativity and craftsmanship. Whether it's playing guitar, DIY projects, or roasting coffee, I bring curiosity and a multidisciplinary perspective to everything I do. My diverse background in music, education, and web development fuels my ability to think outside the box, fostering innovative solutions and seamless user experiences.",
              }),
              z.jsx("p", {
                className: Ye.paragraph,
                children:
                  "When I'm not writing code, you'll find me practicing guitar, keeping aquariums, or engaging in team sports. I'm always eager to connect with like-minded individuals and organizations driven to make a difference through technology. Let's create something incredible together!",
              }),
              z.jsxs("p", {
                className: Ye.paragraph,
                children: [
                  "Here is my",
                  " ",
                  z.jsx("a", {
                    href: Fv,
                    target: "blank",
                    rel: "noopener noreferrrer",
                    children: "resume",
                  }),
                ],
              }),
              z.jsx("p", {
                className: Ye.paragraph,
                children: "You can also find me here: ",
              }),
              z.jsxs("div", {
                className: Ye.socialLinksRow,
                children: [
                  z.jsx("a", {
                    className: Ye.iconLink,
                    href: "https://github.com/Don-Stevenson",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: z.jsx(Iv, { className: Ye.githubIcon }),
                  }),
                  z.jsx("a", {
                    className: Ye.iconLink,
                    href: "https://www.linkedin.com/in/don-stevenson-5b31aa128/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: z.jsx(zv, { className: Ye.linkedinIcon }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function xp(r, o) {
  return function () {
    return r.apply(o, arguments)
  }
}
const { toString: Gv } = Object.prototype,
  { getPrototypeOf: au } = Object,
  vl = (r => o => {
    const l = Gv.call(o)
    return r[l] || (r[l] = l.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Ft = r => ((r = r.toLowerCase()), o => vl(o) === r),
  wl = r => o => typeof o === r,
  { isArray: Lr } = Array,
  No = wl("undefined")
function Yv(r) {
  return (
    r !== null &&
    !No(r) &&
    r.constructor !== null &&
    !No(r.constructor) &&
    gt(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  )
}
const kp = Ft("ArrayBuffer")
function Jv(r) {
  let o
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(r))
      : (o = r && r.buffer && kp(r.buffer)),
    o
  )
}
const Xv = wl("string"),
  gt = wl("function"),
  Ep = wl("number"),
  Sl = r => r !== null && typeof r == "object",
  Zv = r => r === !0 || r === !1,
  el = r => {
    if (vl(r) !== "object") return !1
    const o = au(r)
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    )
  },
  e0 = Ft("Date"),
  t0 = Ft("File"),
  n0 = Ft("Blob"),
  r0 = Ft("FileList"),
  o0 = r => Sl(r) && gt(r.pipe),
  i0 = r => {
    let o
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (gt(r.append) &&
          ((o = vl(r)) === "formdata" ||
            (o === "object" &&
              gt(r.toString) &&
              r.toString() === "[object FormData]"))))
    )
  },
  l0 = Ft("URLSearchParams"),
  [s0, a0, u0, c0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ft
  ),
  f0 = r =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
function Io(r, o, { allOwnKeys: l = !1 } = {}) {
  if (r === null || typeof r > "u") return
  let a, c
  if ((typeof r != "object" && (r = [r]), Lr(r)))
    for (a = 0, c = r.length; a < c; a++) o.call(null, r[a], a, r)
  else {
    const f = l ? Object.getOwnPropertyNames(r) : Object.keys(r),
      p = f.length
    let h
    for (a = 0; a < p; a++) (h = f[a]), o.call(null, r[h], h, r)
  }
}
function Cp(r, o) {
  o = o.toLowerCase()
  const l = Object.keys(r)
  let a = l.length,
    c
  for (; a-- > 0; ) if (((c = l[a]), o === c.toLowerCase())) return c
  return null
}
const Hn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  _p = r => !No(r) && r !== Hn
function Ba() {
  const { caseless: r } = (_p(this) && this) || {},
    o = {},
    l = (a, c) => {
      const f = (r && Cp(o, c)) || c
      el(o[f]) && el(a)
        ? (o[f] = Ba(o[f], a))
        : el(a)
        ? (o[f] = Ba({}, a))
        : Lr(a)
        ? (o[f] = a.slice())
        : (o[f] = a)
    }
  for (let a = 0, c = arguments.length; a < c; a++)
    arguments[a] && Io(arguments[a], l)
  return o
}
const d0 = (r, o, l, { allOwnKeys: a } = {}) => (
    Io(
      o,
      (c, f) => {
        l && gt(c) ? (r[f] = xp(c, l)) : (r[f] = c)
      },
      { allOwnKeys: a }
    ),
    r
  ),
  p0 = r => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  h0 = (r, o, l, a) => {
    ;(r.prototype = Object.create(o.prototype, a)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: o.prototype }),
      l && Object.assign(r.prototype, l)
  },
  m0 = (r, o, l, a) => {
    let c, f, p
    const h = {}
    if (((o = o || {}), r == null)) return o
    do {
      for (c = Object.getOwnPropertyNames(r), f = c.length; f-- > 0; )
        (p = c[f]), (!a || a(p, r, o)) && !h[p] && ((o[p] = r[p]), (h[p] = !0))
      r = l !== !1 && au(r)
    } while (r && (!l || l(r, o)) && r !== Object.prototype)
    return o
  },
  g0 = (r, o, l) => {
    ;(r = String(r)),
      (l === void 0 || l > r.length) && (l = r.length),
      (l -= o.length)
    const a = r.indexOf(o, l)
    return a !== -1 && a === l
  },
  y0 = r => {
    if (!r) return null
    if (Lr(r)) return r
    let o = r.length
    if (!Ep(o)) return null
    const l = new Array(o)
    for (; o-- > 0; ) l[o] = r[o]
    return l
  },
  v0 = (
    r => o =>
      r && o instanceof r
  )(typeof Uint8Array < "u" && au(Uint8Array)),
  w0 = (r, o) => {
    const a = (r && r[Symbol.iterator]).call(r)
    let c
    for (; (c = a.next()) && !c.done; ) {
      const f = c.value
      o.call(r, f[0], f[1])
    }
  },
  S0 = (r, o) => {
    let l
    const a = []
    for (; (l = r.exec(o)) !== null; ) a.push(l)
    return a
  },
  x0 = Ft("HTMLFormElement"),
  k0 = r =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, a, c) {
      return a.toUpperCase() + c
    }),
  Nd = (
    ({ hasOwnProperty: r }) =>
    (o, l) =>
      r.call(o, l)
  )(Object.prototype),
  E0 = Ft("RegExp"),
  Rp = (r, o) => {
    const l = Object.getOwnPropertyDescriptors(r),
      a = {}
    Io(l, (c, f) => {
      let p
      ;(p = o(c, f, r)) !== !1 && (a[f] = p || c)
    }),
      Object.defineProperties(r, a)
  },
  C0 = r => {
    Rp(r, (o, l) => {
      if (gt(r) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1
      const a = r[l]
      if (gt(a)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1
          return
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'")
          })
      }
    })
  },
  _0 = (r, o) => {
    const l = {},
      a = c => {
        c.forEach(f => {
          l[f] = !0
        })
      }
    return Lr(r) ? a(r) : a(String(r).split(o)), l
  },
  R0 = () => {},
  P0 = (r, o) => (r != null && Number.isFinite((r = +r)) ? r : o),
  La = "abcdefghijklmnopqrstuvwxyz",
  Td = "0123456789",
  Pp = { DIGIT: Td, ALPHA: La, ALPHA_DIGIT: La + La.toUpperCase() + Td },
  N0 = (r = 16, o = Pp.ALPHA_DIGIT) => {
    let l = ""
    const { length: a } = o
    for (; r--; ) l += o[(Math.random() * a) | 0]
    return l
  }
function T0(r) {
  return !!(
    r &&
    gt(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  )
}
const O0 = r => {
    const o = new Array(10),
      l = (a, c) => {
        if (Sl(a)) {
          if (o.indexOf(a) >= 0) return
          if (!("toJSON" in a)) {
            o[c] = a
            const f = Lr(a) ? [] : {}
            return (
              Io(a, (p, h) => {
                const m = l(p, c + 1)
                !No(m) && (f[h] = m)
              }),
              (o[c] = void 0),
              f
            )
          }
        }
        return a
      }
    return l(r, 0)
  },
  L0 = Ft("AsyncFunction"),
  j0 = r => r && (Sl(r) || gt(r)) && gt(r.then) && gt(r.catch),
  Np = ((r, o) =>
    r
      ? setImmediate
      : o
      ? ((l, a) => (
          Hn.addEventListener(
            "message",
            ({ source: c, data: f }) => {
              c === Hn && f === l && a.length && a.shift()()
            },
            !1
          ),
          c => {
            a.push(c), Hn.postMessage(l, "*")
          }
        ))(`axios@${Math.random()}`, [])
      : l => setTimeout(l))(
    typeof setImmediate == "function",
    gt(Hn.postMessage)
  ),
  A0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Hn)
      : (typeof process < "u" && process.nextTick) || Np,
  T = {
    isArray: Lr,
    isArrayBuffer: kp,
    isBuffer: Yv,
    isFormData: i0,
    isArrayBufferView: Jv,
    isString: Xv,
    isNumber: Ep,
    isBoolean: Zv,
    isObject: Sl,
    isPlainObject: el,
    isReadableStream: s0,
    isRequest: a0,
    isResponse: u0,
    isHeaders: c0,
    isUndefined: No,
    isDate: e0,
    isFile: t0,
    isBlob: n0,
    isRegExp: E0,
    isFunction: gt,
    isStream: o0,
    isURLSearchParams: l0,
    isTypedArray: v0,
    isFileList: r0,
    forEach: Io,
    merge: Ba,
    extend: d0,
    trim: f0,
    stripBOM: p0,
    inherits: h0,
    toFlatObject: m0,
    kindOf: vl,
    kindOfTest: Ft,
    endsWith: g0,
    toArray: y0,
    forEachEntry: w0,
    matchAll: S0,
    isHTMLForm: x0,
    hasOwnProperty: Nd,
    hasOwnProp: Nd,
    reduceDescriptors: Rp,
    freezeMethods: C0,
    toObjectSet: _0,
    toCamelCase: k0,
    noop: R0,
    toFiniteNumber: P0,
    findKey: Cp,
    global: Hn,
    isContextDefined: _p,
    ALPHABET: Pp,
    generateString: N0,
    isSpecCompliantForm: T0,
    toJSONObject: O0,
    isAsyncFn: L0,
    isThenable: j0,
    setImmediate: Np,
    asap: A0,
  }
function oe(r, o, l, a, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = r),
    (this.name = "AxiosError"),
    o && (this.code = o),
    l && (this.config = l),
    a && (this.request = a),
    c && ((this.response = c), (this.status = c.status ? c.status : null))
}
T.inherits(oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    }
  },
})
const Tp = oe.prototype,
  Op = {}
;[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach(r => {
  Op[r] = { value: r }
})
Object.defineProperties(oe, Op)
Object.defineProperty(Tp, "isAxiosError", { value: !0 })
oe.from = (r, o, l, a, c, f) => {
  const p = Object.create(Tp)
  return (
    T.toFlatObject(
      r,
      p,
      function (m) {
        return m !== Error.prototype
      },
      h => h !== "isAxiosError"
    ),
    oe.call(p, r.message, o, l, a, c),
    (p.cause = r),
    (p.name = r.name),
    f && Object.assign(p, f),
    p
  )
}
const I0 = null
function Ha(r) {
  return T.isPlainObject(r) || T.isArray(r)
}
function Lp(r) {
  return T.endsWith(r, "[]") ? r.slice(0, -2) : r
}
function Od(r, o, l) {
  return r
    ? r
        .concat(o)
        .map(function (c, f) {
          return (c = Lp(c)), !l && f ? "[" + c + "]" : c
        })
        .join(l ? "." : "")
    : o
}
function z0(r) {
  return T.isArray(r) && !r.some(Ha)
}
const D0 = T.toFlatObject(T, {}, null, function (o) {
  return /^is[A-Z]/.test(o)
})
function xl(r, o, l) {
  if (!T.isObject(r)) throw new TypeError("target must be an object")
  ;(o = o || new FormData()),
    (l = T.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (O, R) {
        return !T.isUndefined(R[O])
      }
    ))
  const a = l.metaTokens,
    c = l.visitor || w,
    f = l.dots,
    p = l.indexes,
    m = (l.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(o)
  if (!T.isFunction(c)) throw new TypeError("visitor must be a function")
  function y(E) {
    if (E === null) return ""
    if (T.isDate(E)) return E.toISOString()
    if (!m && T.isBlob(E))
      throw new oe("Blob is not supported. Use a Buffer instead.")
    return T.isArrayBuffer(E) || T.isTypedArray(E)
      ? m && typeof Blob == "function"
        ? new Blob([E])
        : Buffer.from(E)
      : E
  }
  function w(E, O, R) {
    let j = E
    if (E && !R && typeof E == "object") {
      if (T.endsWith(O, "{}"))
        (O = a ? O : O.slice(0, -2)), (E = JSON.stringify(E))
      else if (
        (T.isArray(E) && z0(E)) ||
        ((T.isFileList(E) || T.endsWith(O, "[]")) && (j = T.toArray(E)))
      )
        return (
          (O = Lp(O)),
          j.forEach(function (D, V) {
            !(T.isUndefined(D) || D === null) &&
              o.append(
                p === !0 ? Od([O], V, f) : p === null ? O : O + "[]",
                y(D)
              )
          }),
          !1
        )
    }
    return Ha(E) ? !0 : (o.append(Od(R, O, f), y(E)), !1)
  }
  const x = [],
    _ = Object.assign(D0, {
      defaultVisitor: w,
      convertValue: y,
      isVisitable: Ha,
    })
  function L(E, O) {
    if (!T.isUndefined(E)) {
      if (x.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + O.join("."))
      x.push(E),
        T.forEach(E, function (j, U) {
          ;(!(T.isUndefined(j) || j === null) &&
            c.call(o, j, T.isString(U) ? U.trim() : U, O, _)) === !0 &&
            L(j, O ? O.concat(U) : [U])
        }),
        x.pop()
    }
  }
  if (!T.isObject(r)) throw new TypeError("data must be an object")
  return L(r), o
}
function Ld(r) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  }
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function (a) {
    return o[a]
  })
}
function uu(r, o) {
  ;(this._pairs = []), r && xl(r, this, o)
}
const jp = uu.prototype
jp.append = function (o, l) {
  this._pairs.push([o, l])
}
jp.toString = function (o) {
  const l = o
    ? function (a) {
        return o.call(this, a, Ld)
      }
    : Ld
  return this._pairs
    .map(function (c) {
      return l(c[0]) + "=" + l(c[1])
    }, "")
    .join("&")
}
function F0(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]")
}
function Ap(r, o, l) {
  if (!o) return r
  const a = (l && l.encode) || F0
  T.isFunction(l) && (l = { serialize: l })
  const c = l && l.serialize
  let f
  if (
    (c
      ? (f = c(o, l))
      : (f = T.isURLSearchParams(o) ? o.toString() : new uu(o, l).toString(a)),
    f)
  ) {
    const p = r.indexOf("#")
    p !== -1 && (r = r.slice(0, p)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + f)
  }
  return r
}
class jd {
  constructor() {
    this.handlers = []
  }
  use(o, l, a) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: l,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(o) {
    T.forEach(this.handlers, function (a) {
      a !== null && o(a)
    })
  }
}
const Ip = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  M0 = typeof URLSearchParams < "u" ? URLSearchParams : uu,
  $0 = typeof FormData < "u" ? FormData : null,
  U0 = typeof Blob < "u" ? Blob : null,
  B0 = {
    isBrowser: !0,
    classes: { URLSearchParams: M0, FormData: $0, Blob: U0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  cu = typeof window < "u" && typeof document < "u",
  Wa = (typeof navigator == "object" && navigator) || void 0,
  H0 =
    cu &&
    (!Wa || ["ReactNative", "NativeScript", "NS"].indexOf(Wa.product) < 0),
  W0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  b0 = (cu && window.location.href) || "http://localhost",
  V0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: cu,
        hasStandardBrowserEnv: H0,
        hasStandardBrowserWebWorkerEnv: W0,
        navigator: Wa,
        origin: b0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Je = { ...V0, ...B0 }
function K0(r, o) {
  return xl(
    r,
    new Je.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, a, c, f) {
          return Je.isNode && T.isBuffer(l)
            ? (this.append(a, l.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments)
        },
      },
      o
    )
  )
}
function Q0(r) {
  return T.matchAll(/\w+|\[(\w*)]/g, r).map(o =>
    o[0] === "[]" ? "" : o[1] || o[0]
  )
}
function q0(r) {
  const o = {},
    l = Object.keys(r)
  let a
  const c = l.length
  let f
  for (a = 0; a < c; a++) (f = l[a]), (o[f] = r[f])
  return o
}
function zp(r) {
  function o(l, a, c, f) {
    let p = l[f++]
    if (p === "__proto__") return !0
    const h = Number.isFinite(+p),
      m = f >= l.length
    return (
      (p = !p && T.isArray(c) ? c.length : p),
      m
        ? (T.hasOwnProp(c, p) ? (c[p] = [c[p], a]) : (c[p] = a), !h)
        : ((!c[p] || !T.isObject(c[p])) && (c[p] = []),
          o(l, a, c[p], f) && T.isArray(c[p]) && (c[p] = q0(c[p])),
          !h)
    )
  }
  if (T.isFormData(r) && T.isFunction(r.entries)) {
    const l = {}
    return (
      T.forEachEntry(r, (a, c) => {
        o(Q0(a), c, l, 0)
      }),
      l
    )
  }
  return null
}
function G0(r, o, l) {
  if (T.isString(r))
    try {
      return (o || JSON.parse)(r), T.trim(r)
    } catch (a) {
      if (a.name !== "SyntaxError") throw a
    }
  return (l || JSON.stringify)(r)
}
const zo = {
  transitional: Ip,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, l) {
      const a = l.getContentType() || "",
        c = a.indexOf("application/json") > -1,
        f = T.isObject(o)
      if ((f && T.isHTMLForm(o) && (o = new FormData(o)), T.isFormData(o)))
        return c ? JSON.stringify(zp(o)) : o
      if (
        T.isArrayBuffer(o) ||
        T.isBuffer(o) ||
        T.isStream(o) ||
        T.isFile(o) ||
        T.isBlob(o) ||
        T.isReadableStream(o)
      )
        return o
      if (T.isArrayBufferView(o)) return o.buffer
      if (T.isURLSearchParams(o))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          o.toString()
        )
      let h
      if (f) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return K0(o, this.formSerializer).toString()
        if ((h = T.isFileList(o)) || a.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData
          return xl(h ? { "files[]": o } : o, m && new m(), this.formSerializer)
        }
      }
      return f || c ? (l.setContentType("application/json", !1), G0(o)) : o
    },
  ],
  transformResponse: [
    function (o) {
      const l = this.transitional || zo.transitional,
        a = l && l.forcedJSONParsing,
        c = this.responseType === "json"
      if (T.isResponse(o) || T.isReadableStream(o)) return o
      if (o && T.isString(o) && ((a && !this.responseType) || c)) {
        const p = !(l && l.silentJSONParsing) && c
        try {
          return JSON.parse(o)
        } catch (h) {
          if (p)
            throw h.name === "SyntaxError"
              ? oe.from(h, oe.ERR_BAD_RESPONSE, this, null, this.response)
              : h
        }
      }
      return o
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Je.classes.FormData, Blob: Je.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
}
T.forEach(["delete", "get", "head", "post", "put", "patch"], r => {
  zo.headers[r] = {}
})
const Y0 = T.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  J0 = r => {
    const o = {}
    let l, a, c
    return (
      r &&
        r
          .split(
            `
`
          )
          .forEach(function (p) {
            ;(c = p.indexOf(":")),
              (l = p.substring(0, c).trim().toLowerCase()),
              (a = p.substring(c + 1).trim()),
              !(!l || (o[l] && Y0[l])) &&
                (l === "set-cookie"
                  ? o[l]
                    ? o[l].push(a)
                    : (o[l] = [a])
                  : (o[l] = o[l] ? o[l] + ", " + a : a))
          }),
      o
    )
  },
  Ad = Symbol("internals")
function Eo(r) {
  return r && String(r).trim().toLowerCase()
}
function tl(r) {
  return r === !1 || r == null ? r : T.isArray(r) ? r.map(tl) : String(r)
}
function X0(r) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let a
  for (; (a = l.exec(r)); ) o[a[1]] = a[2]
  return o
}
const Z0 = r => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim())
function ja(r, o, l, a, c) {
  if (T.isFunction(a)) return a.call(this, o, l)
  if ((c && (o = l), !!T.isString(o))) {
    if (T.isString(a)) return o.indexOf(a) !== -1
    if (T.isRegExp(a)) return a.test(o)
  }
}
function e1(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, a) => l.toUpperCase() + a)
}
function t1(r, o) {
  const l = T.toCamelCase(" " + o)
  ;["get", "set", "has"].forEach(a => {
    Object.defineProperty(r, a + l, {
      value: function (c, f, p) {
        return this[a].call(this, o, c, f, p)
      },
      configurable: !0,
    })
  })
}
let ut = class {
  constructor(o) {
    o && this.set(o)
  }
  set(o, l, a) {
    const c = this
    function f(h, m, y) {
      const w = Eo(m)
      if (!w) throw new Error("header name must be a non-empty string")
      const x = T.findKey(c, w)
      ;(!x || c[x] === void 0 || y === !0 || (y === void 0 && c[x] !== !1)) &&
        (c[x || m] = tl(h))
    }
    const p = (h, m) => T.forEach(h, (y, w) => f(y, w, m))
    if (T.isPlainObject(o) || o instanceof this.constructor) p(o, l)
    else if (T.isString(o) && (o = o.trim()) && !Z0(o)) p(J0(o), l)
    else if (T.isHeaders(o)) for (const [h, m] of o.entries()) f(m, h, a)
    else o != null && f(l, o, a)
    return this
  }
  get(o, l) {
    if (((o = Eo(o)), o)) {
      const a = T.findKey(this, o)
      if (a) {
        const c = this[a]
        if (!l) return c
        if (l === !0) return X0(c)
        if (T.isFunction(l)) return l.call(this, c, a)
        if (T.isRegExp(l)) return l.exec(c)
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(o, l) {
    if (((o = Eo(o)), o)) {
      const a = T.findKey(this, o)
      return !!(a && this[a] !== void 0 && (!l || ja(this, this[a], a, l)))
    }
    return !1
  }
  delete(o, l) {
    const a = this
    let c = !1
    function f(p) {
      if (((p = Eo(p)), p)) {
        const h = T.findKey(a, p)
        h && (!l || ja(a, a[h], h, l)) && (delete a[h], (c = !0))
      }
    }
    return T.isArray(o) ? o.forEach(f) : f(o), c
  }
  clear(o) {
    const l = Object.keys(this)
    let a = l.length,
      c = !1
    for (; a--; ) {
      const f = l[a]
      ;(!o || ja(this, this[f], f, o, !0)) && (delete this[f], (c = !0))
    }
    return c
  }
  normalize(o) {
    const l = this,
      a = {}
    return (
      T.forEach(this, (c, f) => {
        const p = T.findKey(a, f)
        if (p) {
          ;(l[p] = tl(c)), delete l[f]
          return
        }
        const h = o ? e1(f) : String(f).trim()
        h !== f && delete l[f], (l[h] = tl(c)), (a[h] = !0)
      }),
      this
    )
  }
  concat(...o) {
    return this.constructor.concat(this, ...o)
  }
  toJSON(o) {
    const l = Object.create(null)
    return (
      T.forEach(this, (a, c) => {
        a != null && a !== !1 && (l[c] = o && T.isArray(a) ? a.join(", ") : a)
      }),
      l
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, l]) => o + ": " + l).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(o) {
    return o instanceof this ? o : new this(o)
  }
  static concat(o, ...l) {
    const a = new this(o)
    return l.forEach(c => a.set(c)), a
  }
  static accessor(o) {
    const a = (this[Ad] = this[Ad] = { accessors: {} }).accessors,
      c = this.prototype
    function f(p) {
      const h = Eo(p)
      a[h] || (t1(c, p), (a[h] = !0))
    }
    return T.isArray(o) ? o.forEach(f) : f(o), this
  }
}
ut.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
])
T.reduceDescriptors(ut.prototype, ({ value: r }, o) => {
  let l = o[0].toUpperCase() + o.slice(1)
  return {
    get: () => r,
    set(a) {
      this[l] = a
    },
  }
})
T.freezeMethods(ut)
function Aa(r, o) {
  const l = this || zo,
    a = o || l,
    c = ut.from(a.headers)
  let f = a.data
  return (
    T.forEach(r, function (h) {
      f = h.call(l, f, c.normalize(), o ? o.status : void 0)
    }),
    c.normalize(),
    f
  )
}
function Dp(r) {
  return !!(r && r.__CANCEL__)
}
function jr(r, o, l) {
  oe.call(this, r ?? "canceled", oe.ERR_CANCELED, o, l),
    (this.name = "CanceledError")
}
T.inherits(jr, oe, { __CANCEL__: !0 })
function Fp(r, o, l) {
  const a = l.config.validateStatus
  !l.status || !a || a(l.status)
    ? r(l)
    : o(
        new oe(
          "Request failed with status code " + l.status,
          [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l
        )
      )
}
function n1(r) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r)
  return (o && o[1]) || ""
}
function r1(r, o) {
  r = r || 10
  const l = new Array(r),
    a = new Array(r)
  let c = 0,
    f = 0,
    p
  return (
    (o = o !== void 0 ? o : 1e3),
    function (m) {
      const y = Date.now(),
        w = a[f]
      p || (p = y), (l[c] = m), (a[c] = y)
      let x = f,
        _ = 0
      for (; x !== c; ) (_ += l[x++]), (x = x % r)
      if (((c = (c + 1) % r), c === f && (f = (f + 1) % r), y - p < o)) return
      const L = w && y - w
      return L ? Math.round((_ * 1e3) / L) : void 0
    }
  )
}
function o1(r, o) {
  let l = 0,
    a = 1e3 / o,
    c,
    f
  const p = (y, w = Date.now()) => {
    ;(l = w), (c = null), f && (clearTimeout(f), (f = null)), r.apply(null, y)
  }
  return [
    (...y) => {
      const w = Date.now(),
        x = w - l
      x >= a
        ? p(y, w)
        : ((c = y),
          f ||
            (f = setTimeout(() => {
              ;(f = null), p(c)
            }, a - x)))
    },
    () => c && p(c),
  ]
}
const fl = (r, o, l = 3) => {
    let a = 0
    const c = r1(50, 250)
    return o1(f => {
      const p = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        m = p - a,
        y = c(m),
        w = p <= h
      a = p
      const x = {
        loaded: p,
        total: h,
        progress: h ? p / h : void 0,
        bytes: m,
        rate: y || void 0,
        estimated: y && h && w ? (h - p) / y : void 0,
        event: f,
        lengthComputable: h != null,
        [o ? "download" : "upload"]: !0,
      }
      r(x)
    }, l)
  },
  Id = (r, o) => {
    const l = r != null
    return [a => o[0]({ lengthComputable: l, total: r, loaded: a }), o[1]]
  },
  zd =
    r =>
    (...o) =>
      T.asap(() => r(...o)),
  i1 = Je.hasStandardBrowserEnv
    ? ((r, o) => l => (
        (l = new URL(l, Je.origin)),
        r.protocol === l.protocol &&
          r.host === l.host &&
          (o || r.port === l.port)
      ))(
        new URL(Je.origin),
        Je.navigator && /(msie|trident)/i.test(Je.navigator.userAgent)
      )
    : () => !0,
  l1 = Je.hasStandardBrowserEnv
    ? {
        write(r, o, l, a, c, f) {
          const p = [r + "=" + encodeURIComponent(o)]
          T.isNumber(l) && p.push("expires=" + new Date(l).toGMTString()),
            T.isString(a) && p.push("path=" + a),
            T.isString(c) && p.push("domain=" + c),
            f === !0 && p.push("secure"),
            (document.cookie = p.join("; "))
        },
        read(r) {
          const o = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          )
          return o ? decodeURIComponent(o[3]) : null
        },
        remove(r) {
          this.write(r, "", Date.now() - 864e5)
        },
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
function s1(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}
function a1(r, o) {
  return o ? r.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : r
}
function Mp(r, o) {
  return r && !s1(o) ? a1(r, o) : o
}
const Dd = r => (r instanceof ut ? { ...r } : r)
function Qn(r, o) {
  o = o || {}
  const l = {}
  function a(y, w, x, _) {
    return T.isPlainObject(y) && T.isPlainObject(w)
      ? T.merge.call({ caseless: _ }, y, w)
      : T.isPlainObject(w)
      ? T.merge({}, w)
      : T.isArray(w)
      ? w.slice()
      : w
  }
  function c(y, w, x, _) {
    if (T.isUndefined(w)) {
      if (!T.isUndefined(y)) return a(void 0, y, x, _)
    } else return a(y, w, x, _)
  }
  function f(y, w) {
    if (!T.isUndefined(w)) return a(void 0, w)
  }
  function p(y, w) {
    if (T.isUndefined(w)) {
      if (!T.isUndefined(y)) return a(void 0, y)
    } else return a(void 0, w)
  }
  function h(y, w, x) {
    if (x in o) return a(y, w)
    if (x in r) return a(void 0, y)
  }
  const m = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: h,
    headers: (y, w, x) => c(Dd(y), Dd(w), x, !0),
  }
  return (
    T.forEach(Object.keys(Object.assign({}, r, o)), function (w) {
      const x = m[w] || c,
        _ = x(r[w], o[w], w)
      ;(T.isUndefined(_) && x !== h) || (l[w] = _)
    }),
    l
  )
}
const $p = r => {
    const o = Qn({}, r)
    let {
      data: l,
      withXSRFToken: a,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: p,
      auth: h,
    } = o
    ;(o.headers = p = ut.from(p)),
      (o.url = Ap(Mp(o.baseURL, o.url), r.params, r.paramsSerializer)),
      h &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        )
    let m
    if (T.isFormData(l)) {
      if (Je.hasStandardBrowserEnv || Je.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0)
      else if ((m = p.getContentType()) !== !1) {
        const [y, ...w] = m
          ? m
              .split(";")
              .map(x => x.trim())
              .filter(Boolean)
          : []
        p.setContentType([y || "multipart/form-data", ...w].join("; "))
      }
    }
    if (
      Je.hasStandardBrowserEnv &&
      (a && T.isFunction(a) && (a = a(o)), a || (a !== !1 && i1(o.url)))
    ) {
      const y = c && f && l1.read(f)
      y && p.set(c, y)
    }
    return o
  },
  u1 = typeof XMLHttpRequest < "u",
  c1 =
    u1 &&
    function (r) {
      return new Promise(function (l, a) {
        const c = $p(r)
        let f = c.data
        const p = ut.from(c.headers).normalize()
        let { responseType: h, onUploadProgress: m, onDownloadProgress: y } = c,
          w,
          x,
          _,
          L,
          E
        function O() {
          L && L(),
            E && E(),
            c.cancelToken && c.cancelToken.unsubscribe(w),
            c.signal && c.signal.removeEventListener("abort", w)
        }
        let R = new XMLHttpRequest()
        R.open(c.method.toUpperCase(), c.url, !0), (R.timeout = c.timeout)
        function j() {
          if (!R) return
          const D = ut.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders()
            ),
            Y = {
              data:
                !h || h === "text" || h === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: D,
              config: r,
              request: R,
            }
          Fp(
            function (K) {
              l(K), O()
            },
            function (K) {
              a(K), O()
            },
            Y
          ),
            (R = null)
        }
        "onloadend" in R
          ? (R.onloadend = j)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(j)
            }),
          (R.onabort = function () {
            R &&
              (a(new oe("Request aborted", oe.ECONNABORTED, r, R)), (R = null))
          }),
          (R.onerror = function () {
            a(new oe("Network Error", oe.ERR_NETWORK, r, R)), (R = null)
          }),
          (R.ontimeout = function () {
            let V = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded"
            const Y = c.transitional || Ip
            c.timeoutErrorMessage && (V = c.timeoutErrorMessage),
              a(
                new oe(
                  V,
                  Y.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
                  r,
                  R
                )
              ),
              (R = null)
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in R &&
            T.forEach(p.toJSON(), function (V, Y) {
              R.setRequestHeader(Y, V)
            }),
          T.isUndefined(c.withCredentials) ||
            (R.withCredentials = !!c.withCredentials),
          h && h !== "json" && (R.responseType = c.responseType),
          y && (([_, E] = fl(y, !0)), R.addEventListener("progress", _)),
          m &&
            R.upload &&
            (([x, L] = fl(m)),
            R.upload.addEventListener("progress", x),
            R.upload.addEventListener("loadend", L)),
          (c.cancelToken || c.signal) &&
            ((w = D => {
              R &&
                (a(!D || D.type ? new jr(null, r, R) : D),
                R.abort(),
                (R = null))
            }),
            c.cancelToken && c.cancelToken.subscribe(w),
            c.signal &&
              (c.signal.aborted ? w() : c.signal.addEventListener("abort", w)))
        const U = n1(c.url)
        if (U && Je.protocols.indexOf(U) === -1) {
          a(new oe("Unsupported protocol " + U + ":", oe.ERR_BAD_REQUEST, r))
          return
        }
        R.send(f || null)
      })
    },
  f1 = (r, o) => {
    const { length: l } = (r = r ? r.filter(Boolean) : [])
    if (o || l) {
      let a = new AbortController(),
        c
      const f = function (y) {
        if (!c) {
          ;(c = !0), h()
          const w = y instanceof Error ? y : this.reason
          a.abort(
            w instanceof oe ? w : new jr(w instanceof Error ? w.message : w)
          )
        }
      }
      let p =
        o &&
        setTimeout(() => {
          ;(p = null), f(new oe(`timeout ${o} of ms exceeded`, oe.ETIMEDOUT))
        }, o)
      const h = () => {
        r &&
          (p && clearTimeout(p),
          (p = null),
          r.forEach(y => {
            y.unsubscribe ? y.unsubscribe(f) : y.removeEventListener("abort", f)
          }),
          (r = null))
      }
      r.forEach(y => y.addEventListener("abort", f))
      const { signal: m } = a
      return (m.unsubscribe = () => T.asap(h)), m
    }
  },
  d1 = function* (r, o) {
    let l = r.byteLength
    if (l < o) {
      yield r
      return
    }
    let a = 0,
      c
    for (; a < l; ) (c = a + o), yield r.slice(a, c), (a = c)
  },
  p1 = async function* (r, o) {
    for await (const l of h1(r)) yield* d1(l, o)
  },
  h1 = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r
      return
    }
    const o = r.getReader()
    try {
      for (;;) {
        const { done: l, value: a } = await o.read()
        if (l) break
        yield a
      }
    } finally {
      await o.cancel()
    }
  },
  Fd = (r, o, l, a) => {
    const c = p1(r, o)
    let f = 0,
      p,
      h = m => {
        p || ((p = !0), a && a(m))
      }
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: y, value: w } = await c.next()
            if (y) {
              h(), m.close()
              return
            }
            let x = w.byteLength
            if (l) {
              let _ = (f += x)
              l(_)
            }
            m.enqueue(new Uint8Array(w))
          } catch (y) {
            throw (h(y), y)
          }
        },
        cancel(m) {
          return h(m), c.return()
        },
      },
      { highWaterMark: 2 }
    )
  },
  kl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Up = kl && typeof ReadableStream == "function",
  m1 =
    kl &&
    (typeof TextEncoder == "function"
      ? (
          r => o =>
            r.encode(o)
        )(new TextEncoder())
      : async r => new Uint8Array(await new Response(r).arrayBuffer())),
  Bp = (r, ...o) => {
    try {
      return !!r(...o)
    } catch {
      return !1
    }
  },
  g1 =
    Up &&
    Bp(() => {
      let r = !1
      const o = new Request(Je.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half"
        },
      }).headers.has("Content-Type")
      return r && !o
    }),
  Md = 64 * 1024,
  ba = Up && Bp(() => T.isReadableStream(new Response("").body)),
  dl = { stream: ba && (r => r.body) }
kl &&
  (r => {
    ;["text", "arrayBuffer", "blob", "formData", "stream"].forEach(o => {
      !dl[o] &&
        (dl[o] = T.isFunction(r[o])
          ? l => l[o]()
          : (l, a) => {
              throw new oe(
                `Response type '${o}' is not supported`,
                oe.ERR_NOT_SUPPORT,
                a
              )
            })
    })
  })(new Response())
const y1 = async r => {
    if (r == null) return 0
    if (T.isBlob(r)) return r.size
    if (T.isSpecCompliantForm(r))
      return (
        await new Request(Je.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength
    if (T.isArrayBufferView(r) || T.isArrayBuffer(r)) return r.byteLength
    if ((T.isURLSearchParams(r) && (r = r + ""), T.isString(r)))
      return (await m1(r)).byteLength
  },
  v1 = async (r, o) => {
    const l = T.toFiniteNumber(r.getContentLength())
    return l ?? y1(o)
  },
  w1 =
    kl &&
    (async r => {
      let {
        url: o,
        method: l,
        data: a,
        signal: c,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: h,
        onUploadProgress: m,
        responseType: y,
        headers: w,
        withCredentials: x = "same-origin",
        fetchOptions: _,
      } = $p(r)
      y = y ? (y + "").toLowerCase() : "text"
      let L = f1([c, f && f.toAbortSignal()], p),
        E
      const O =
        L &&
        L.unsubscribe &&
        (() => {
          L.unsubscribe()
        })
      let R
      try {
        if (
          m &&
          g1 &&
          l !== "get" &&
          l !== "head" &&
          (R = await v1(w, a)) !== 0
        ) {
          let Y = new Request(o, { method: "POST", body: a, duplex: "half" }),
            X
          if (
            (T.isFormData(a) &&
              (X = Y.headers.get("content-type")) &&
              w.setContentType(X),
            Y.body)
          ) {
            const [K, de] = Id(R, fl(zd(m)))
            a = Fd(Y.body, Md, K, de)
          }
        }
        T.isString(x) || (x = x ? "include" : "omit")
        const j = "credentials" in Request.prototype
        E = new Request(o, {
          ..._,
          signal: L,
          method: l.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: a,
          duplex: "half",
          credentials: j ? x : void 0,
        })
        let U = await fetch(E)
        const D = ba && (y === "stream" || y === "response")
        if (ba && (h || (D && O))) {
          const Y = {}
          ;["status", "statusText", "headers"].forEach(ge => {
            Y[ge] = U[ge]
          })
          const X = T.toFiniteNumber(U.headers.get("content-length")),
            [K, de] = (h && Id(X, fl(zd(h), !0))) || []
          U = new Response(
            Fd(U.body, Md, K, () => {
              de && de(), O && O()
            }),
            Y
          )
        }
        y = y || "text"
        let V = await dl[T.findKey(dl, y) || "text"](U, r)
        return (
          !D && O && O(),
          await new Promise((Y, X) => {
            Fp(Y, X, {
              data: V,
              headers: ut.from(U.headers),
              status: U.status,
              statusText: U.statusText,
              config: r,
              request: E,
            })
          })
        )
      } catch (j) {
        throw (
          (O && O(),
          j && j.name === "TypeError" && /fetch/i.test(j.message)
            ? Object.assign(new oe("Network Error", oe.ERR_NETWORK, r, E), {
                cause: j.cause || j,
              })
            : oe.from(j, j && j.code, r, E))
        )
      }
    }),
  Va = { http: I0, xhr: c1, fetch: w1 }
T.forEach(Va, (r, o) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: o })
    } catch {}
    Object.defineProperty(r, "adapterName", { value: o })
  }
})
const $d = r => `- ${r}`,
  S1 = r => T.isFunction(r) || r === null || r === !1,
  Hp = {
    getAdapter: r => {
      r = T.isArray(r) ? r : [r]
      const { length: o } = r
      let l, a
      const c = {}
      for (let f = 0; f < o; f++) {
        l = r[f]
        let p
        if (
          ((a = l),
          !S1(l) && ((a = Va[(p = String(l)).toLowerCase()]), a === void 0))
        )
          throw new oe(`Unknown adapter '${p}'`)
        if (a) break
        c[p || "#" + f] = a
      }
      if (!a) {
        const f = Object.entries(c).map(
          ([h, m]) =>
            `adapter ${h} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        )
        let p = o
          ? f.length > 1
            ? `since :
` +
              f.map($d).join(`
`)
            : " " + $d(f[0])
          : "as no adapter specified"
        throw new oe(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        )
      }
      return a
    },
    adapters: Va,
  }
function Ia(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new jr(null, r)
}
function Ud(r) {
  return (
    Ia(r),
    (r.headers = ut.from(r.headers)),
    (r.data = Aa.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hp.getAdapter(r.adapter || zo.adapter)(r).then(
      function (a) {
        return (
          Ia(r),
          (a.data = Aa.call(r, r.transformResponse, a)),
          (a.headers = ut.from(a.headers)),
          a
        )
      },
      function (a) {
        return (
          Dp(a) ||
            (Ia(r),
            a &&
              a.response &&
              ((a.response.data = Aa.call(r, r.transformResponse, a.response)),
              (a.response.headers = ut.from(a.response.headers)))),
          Promise.reject(a)
        )
      }
    )
  )
}
const Wp = "1.7.9",
  El = {}
;["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, o) => {
    El[r] = function (a) {
      return typeof a === r || "a" + (o < 1 ? "n " : " ") + r
    }
  }
)
const Bd = {}
El.transitional = function (o, l, a) {
  function c(f, p) {
    return (
      "[Axios v" +
      Wp +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (a ? ". " + a : "")
    )
  }
  return (f, p, h) => {
    if (o === !1)
      throw new oe(
        c(p, " has been removed" + (l ? " in " + l : "")),
        oe.ERR_DEPRECATED
      )
    return (
      l &&
        !Bd[p] &&
        ((Bd[p] = !0),
        console.warn(
          c(
            p,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future"
          )
        )),
      o ? o(f, p, h) : !0
    )
  }
}
El.spelling = function (o) {
  return (l, a) => (console.warn(`${a} is likely a misspelling of ${o}`), !0)
}
function x1(r, o, l) {
  if (typeof r != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE)
  const a = Object.keys(r)
  let c = a.length
  for (; c-- > 0; ) {
    const f = a[c],
      p = o[f]
    if (p) {
      const h = r[f],
        m = h === void 0 || p(h, f, r)
      if (m !== !0)
        throw new oe("option " + f + " must be " + m, oe.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (l !== !0) throw new oe("Unknown option " + f, oe.ERR_BAD_OPTION)
  }
}
const nl = { assertOptions: x1, validators: El },
  Wt = nl.validators
let bn = class {
  constructor(o) {
    ;(this.defaults = o),
      (this.interceptors = { request: new jd(), response: new jd() })
  }
  async request(o, l) {
    try {
      return await this._request(o, l)
    } catch (a) {
      if (a instanceof Error) {
        let c = {}
        Error.captureStackTrace ? Error.captureStackTrace(c) : (c = new Error())
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : ""
        try {
          a.stack
            ? f &&
              !String(a.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (a.stack +=
                `
` + f)
            : (a.stack = f)
        } catch {}
      }
      throw a
    }
  }
  _request(o, l) {
    typeof o == "string" ? ((l = l || {}), (l.url = o)) : (l = o || {}),
      (l = Qn(this.defaults, l))
    const { transitional: a, paramsSerializer: c, headers: f } = l
    a !== void 0 &&
      nl.assertOptions(
        a,
        {
          silentJSONParsing: Wt.transitional(Wt.boolean),
          forcedJSONParsing: Wt.transitional(Wt.boolean),
          clarifyTimeoutError: Wt.transitional(Wt.boolean),
        },
        !1
      ),
      c != null &&
        (T.isFunction(c)
          ? (l.paramsSerializer = { serialize: c })
          : nl.assertOptions(
              c,
              { encode: Wt.function, serialize: Wt.function },
              !0
            )),
      nl.assertOptions(
        l,
        {
          baseUrl: Wt.spelling("baseURL"),
          withXsrfToken: Wt.spelling("withXSRFToken"),
        },
        !0
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase())
    let p = f && T.merge(f.common, f[l.method])
    f &&
      T.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        E => {
          delete f[E]
        }
      ),
      (l.headers = ut.concat(p, f))
    const h = []
    let m = !0
    this.interceptors.request.forEach(function (O) {
      ;(typeof O.runWhen == "function" && O.runWhen(l) === !1) ||
        ((m = m && O.synchronous), h.unshift(O.fulfilled, O.rejected))
    })
    const y = []
    this.interceptors.response.forEach(function (O) {
      y.push(O.fulfilled, O.rejected)
    })
    let w,
      x = 0,
      _
    if (!m) {
      const E = [Ud.bind(this), void 0]
      for (
        E.unshift.apply(E, h),
          E.push.apply(E, y),
          _ = E.length,
          w = Promise.resolve(l);
        x < _;

      )
        w = w.then(E[x++], E[x++])
      return w
    }
    _ = h.length
    let L = l
    for (x = 0; x < _; ) {
      const E = h[x++],
        O = h[x++]
      try {
        L = E(L)
      } catch (R) {
        O.call(this, R)
        break
      }
    }
    try {
      w = Ud.call(this, L)
    } catch (E) {
      return Promise.reject(E)
    }
    for (x = 0, _ = y.length; x < _; ) w = w.then(y[x++], y[x++])
    return w
  }
  getUri(o) {
    o = Qn(this.defaults, o)
    const l = Mp(o.baseURL, o.url)
    return Ap(l, o.params, o.paramsSerializer)
  }
}
T.forEach(["delete", "get", "head", "options"], function (o) {
  bn.prototype[o] = function (l, a) {
    return this.request(
      Qn(a || {}, { method: o, url: l, data: (a || {}).data })
    )
  }
})
T.forEach(["post", "put", "patch"], function (o) {
  function l(a) {
    return function (f, p, h) {
      return this.request(
        Qn(h || {}, {
          method: o,
          headers: a ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: p,
        })
      )
    }
  }
  ;(bn.prototype[o] = l()), (bn.prototype[o + "Form"] = l(!0))
})
let k1 = class bp {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.")
    let l
    this.promise = new Promise(function (f) {
      l = f
    })
    const a = this
    this.promise.then(c => {
      if (!a._listeners) return
      let f = a._listeners.length
      for (; f-- > 0; ) a._listeners[f](c)
      a._listeners = null
    }),
      (this.promise.then = c => {
        let f
        const p = new Promise(h => {
          a.subscribe(h), (f = h)
        }).then(c)
        return (
          (p.cancel = function () {
            a.unsubscribe(f)
          }),
          p
        )
      }),
      o(function (f, p, h) {
        a.reason || ((a.reason = new jr(f, p, h)), l(a.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason)
      return
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o])
  }
  unsubscribe(o) {
    if (!this._listeners) return
    const l = this._listeners.indexOf(o)
    l !== -1 && this._listeners.splice(l, 1)
  }
  toAbortSignal() {
    const o = new AbortController(),
      l = a => {
        o.abort(a)
      }
    return (
      this.subscribe(l),
      (o.signal.unsubscribe = () => this.unsubscribe(l)),
      o.signal
    )
  }
  static source() {
    let o
    return {
      token: new bp(function (c) {
        o = c
      }),
      cancel: o,
    }
  }
}
function E1(r) {
  return function (l) {
    return r.apply(null, l)
  }
}
function C1(r) {
  return T.isObject(r) && r.isAxiosError === !0
}
const Ka = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(Ka).forEach(([r, o]) => {
  Ka[o] = r
})
function Vp(r) {
  const o = new bn(r),
    l = xp(bn.prototype.request, o)
  return (
    T.extend(l, bn.prototype, o, { allOwnKeys: !0 }),
    T.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (c) {
      return Vp(Qn(r, c))
    }),
    l
  )
}
const Le = Vp(zo)
Le.Axios = bn
Le.CanceledError = jr
Le.CancelToken = k1
Le.isCancel = Dp
Le.VERSION = Wp
Le.toFormData = xl
Le.AxiosError = oe
Le.Cancel = Le.CanceledError
Le.all = function (o) {
  return Promise.all(o)
}
Le.spread = E1
Le.isAxiosError = C1
Le.mergeConfig = Qn
Le.AxiosHeaders = ut
Le.formToJSON = r => zp(T.isHTMLForm(r) ? new FormData(r) : r)
Le.getAdapter = Hp.getAdapter
Le.HttpStatusCode = Ka
Le.default = Le
const {
    Axios: pS,
    AxiosError: hS,
    CanceledError: mS,
    isCancel: gS,
    CancelToken: yS,
    VERSION: vS,
    all: wS,
    Cancel: SS,
    isAxiosError: xS,
    spread: kS,
    toFormData: ES,
    AxiosHeaders: CS,
    HttpStatusCode: _S,
    formToJSON: RS,
    getAdapter: PS,
    mergeConfig: NS,
  } = Le,
  _1 = () => {
    const [r, o] = A.useState({ email: "", name: "", message: "" }),
      [l, a] = A.useState(!1),
      [c, f] = A.useState({
        name: "",
        email: "",
        message: "",
        disabled: !1,
        emailSent: null,
      }),
      p = w => {
        const { name: x, value: _ } = w.target
        f({ ...c, [x]: _ }), r[x] && o({ ...r, [x]: "" })
      },
      h = w => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(w),
      m = () => {
        const w = {
          name: c.name.trim() ? "" : "Name is required",
          message: c.message.trim() ? "" : "Message is required",
          email: "",
        }
        return (
          c.email.trim()
            ? h(c.email) ||
              ((w.email = "Please enter a valid email address"),
              f(x => ({ ...x, disabled: !1, emailSent: !1 })),
              a(!1))
            : ((w.email = "Email is required"),
              (w.email = "Please enter a valid email address"),
              f(x => ({ ...x, disabled: !1, emailSent: !1 })),
              a(!1)),
          o(w),
          !Object.values(w).some(x => x !== "")
        )
      }
    return {
      handleChange: p,
      handleSubmit: async w => {
        if ((w.preventDefault(), a(!0), !!m())) {
          f(x => ({ ...x, disabled: !0 }))
          try {
            ;(
              await Le.post(
                "https://personalwebsite-api.onrender.com/api/email",
                c
              )
            ).data.success
              ? (f(_ => ({
                  name: "",
                  email: "",
                  message: "",
                  disabled: !1,
                  emailSent: !0,
                })),
                a(!1))
              : f(_ => ({ ..._, disabled: !1, emailSent: !1 }))
          } catch (x) {
            console.error("Failed to send message:", x),
              f(_ => ({ ..._, disabled: !1, emailSent: !1 })),
              a(!1)
          }
        }
      },
      state: c,
      errors: r,
      isSubmitting: l,
    }
  }
var at = function () {
  return (
    (at =
      Object.assign ||
      function (o) {
        for (var l, a = 1, c = arguments.length; a < c; a++) {
          l = arguments[a]
          for (var f in l)
            Object.prototype.hasOwnProperty.call(l, f) && (o[f] = l[f])
        }
        return o
      }),
    at.apply(this, arguments)
  )
}
function To(r, o, l) {
  if (l || arguments.length === 2)
    for (var a = 0, c = o.length, f; a < c; a++)
      (f || !(a in o)) &&
        (f || (f = Array.prototype.slice.call(o, 0, a)), (f[a] = o[a]))
  return r.concat(f || Array.prototype.slice.call(o))
}
var Ee = "-ms-",
  Ro = "-moz-",
  ye = "-webkit-",
  Kp = "comm",
  Cl = "rule",
  fu = "decl",
  R1 = "@import",
  Qp = "@keyframes",
  P1 = "@layer",
  qp = Math.abs,
  du = String.fromCharCode,
  Qa = Object.assign
function N1(r, o) {
  return Be(r, 0) ^ 45
    ? (((((((o << 2) ^ Be(r, 0)) << 2) ^ Be(r, 1)) << 2) ^ Be(r, 2)) << 2) ^
        Be(r, 3)
    : 0
}
function Gp(r) {
  return r.trim()
}
function nn(r, o) {
  return (r = o.exec(r)) ? r[0] : r
}
function le(r, o, l) {
  return r.replace(o, l)
}
function rl(r, o, l) {
  return r.indexOf(o, l)
}
function Be(r, o) {
  return r.charCodeAt(o) | 0
}
function Cr(r, o, l) {
  return r.slice(o, l)
}
function bt(r) {
  return r.length
}
function Yp(r) {
  return r.length
}
function _o(r, o) {
  return o.push(r), r
}
function T1(r, o) {
  return r.map(o).join("")
}
function Hd(r, o) {
  return r.filter(function (l) {
    return !nn(l, o)
  })
}
var _l = 1,
  _r = 1,
  Jp = 0,
  Rt = 0,
  Ie = 0,
  Ar = ""
function Rl(r, o, l, a, c, f, p, h) {
  return {
    value: r,
    root: o,
    parent: l,
    type: a,
    props: c,
    children: f,
    line: _l,
    column: _r,
    length: p,
    return: "",
    siblings: h,
  }
}
function _n(r, o) {
  return Qa(
    Rl("", null, null, "", null, null, 0, r.siblings),
    r,
    { length: -r.length },
    o
  )
}
function xr(r) {
  for (; r.root; ) r = _n(r.root, { children: [r] })
  _o(r, r.siblings)
}
function O1() {
  return Ie
}
function L1() {
  return (
    (Ie = Rt > 0 ? Be(Ar, --Rt) : 0), _r--, Ie === 10 && ((_r = 1), _l--), Ie
  )
}
function Dt() {
  return (
    (Ie = Rt < Jp ? Be(Ar, Rt++) : 0), _r++, Ie === 10 && ((_r = 1), _l++), Ie
  )
}
function Vn() {
  return Be(Ar, Rt)
}
function ol() {
  return Rt
}
function Pl(r, o) {
  return Cr(Ar, r, o)
}
function qa(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function j1(r) {
  return (_l = _r = 1), (Jp = bt((Ar = r))), (Rt = 0), []
}
function A1(r) {
  return (Ar = ""), r
}
function za(r) {
  return Gp(Pl(Rt - 1, Ga(r === 91 ? r + 2 : r === 40 ? r + 1 : r)))
}
function I1(r) {
  for (; (Ie = Vn()) && Ie < 33; ) Dt()
  return qa(r) > 2 || qa(Ie) > 3 ? "" : " "
}
function z1(r, o) {
  for (
    ;
    --o &&
    Dt() &&
    !(Ie < 48 || Ie > 102 || (Ie > 57 && Ie < 65) || (Ie > 70 && Ie < 97));

  );
  return Pl(r, ol() + (o < 6 && Vn() == 32 && Dt() == 32))
}
function Ga(r) {
  for (; Dt(); )
    switch (Ie) {
      case r:
        return Rt
      case 34:
      case 39:
        r !== 34 && r !== 39 && Ga(Ie)
        break
      case 40:
        r === 41 && Ga(r)
        break
      case 92:
        Dt()
        break
    }
  return Rt
}
function D1(r, o) {
  for (; Dt() && r + Ie !== 57; ) if (r + Ie === 84 && Vn() === 47) break
  return "/*" + Pl(o, Rt - 1) + "*" + du(r === 47 ? r : Dt())
}
function F1(r) {
  for (; !qa(Vn()); ) Dt()
  return Pl(r, Rt)
}
function M1(r) {
  return A1(il("", null, null, null, [""], (r = j1(r)), 0, [0], r))
}
function il(r, o, l, a, c, f, p, h, m) {
  for (
    var y = 0,
      w = 0,
      x = p,
      _ = 0,
      L = 0,
      E = 0,
      O = 1,
      R = 1,
      j = 1,
      U = 0,
      D = "",
      V = c,
      Y = f,
      X = a,
      K = D;
    R;

  )
    switch (((E = U), (U = Dt()))) {
      case 40:
        if (E != 108 && Be(K, x - 1) == 58) {
          rl((K += le(za(U), "&", "&\f")), "&\f", qp(y ? h[y - 1] : 0)) != -1 &&
            (j = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        K += za(U)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        K += I1(E)
        break
      case 92:
        K += z1(ol() - 1, 7)
        continue
      case 47:
        switch (Vn()) {
          case 42:
          case 47:
            _o($1(D1(Dt(), ol()), o, l, m), m)
            break
          default:
            K += "/"
        }
        break
      case 123 * O:
        h[y++] = bt(K) * j
      case 125 * O:
      case 59:
      case 0:
        switch (U) {
          case 0:
          case 125:
            R = 0
          case 59 + w:
            j == -1 && (K = le(K, /\f/g, "")),
              L > 0 &&
                bt(K) - x &&
                _o(
                  L > 32
                    ? bd(K + ";", a, l, x - 1, m)
                    : bd(le(K, " ", "") + ";", a, l, x - 2, m),
                  m
                )
            break
          case 59:
            K += ";"
          default:
            if (
              (_o(
                (X = Wd(K, o, l, y, w, c, h, D, (V = []), (Y = []), x, f)),
                f
              ),
              U === 123)
            )
              if (w === 0) il(K, o, X, X, V, f, x, h, Y)
              else
                switch (_ === 99 && Be(K, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    il(
                      r,
                      X,
                      X,
                      a && _o(Wd(r, X, X, 0, 0, c, h, D, c, (V = []), x, Y), Y),
                      c,
                      Y,
                      x,
                      h,
                      a ? V : Y
                    )
                    break
                  default:
                    il(K, X, X, X, [""], Y, 0, h, Y)
                }
        }
        ;(y = w = L = 0), (O = j = 1), (D = K = ""), (x = p)
        break
      case 58:
        ;(x = 1 + bt(K)), (L = E)
      default:
        if (O < 1) {
          if (U == 123) --O
          else if (U == 125 && O++ == 0 && L1() == 125) continue
        }
        switch (((K += du(U)), U * O)) {
          case 38:
            j = w > 0 ? 1 : ((K += "\f"), -1)
            break
          case 44:
            ;(h[y++] = (bt(K) - 1) * j), (j = 1)
            break
          case 64:
            Vn() === 45 && (K += za(Dt())),
              (_ = Vn()),
              (w = x = bt((D = K += F1(ol())))),
              U++
            break
          case 45:
            E === 45 && bt(K) == 2 && (O = 0)
        }
    }
  return f
}
function Wd(r, o, l, a, c, f, p, h, m, y, w, x) {
  for (
    var _ = c - 1, L = c === 0 ? f : [""], E = Yp(L), O = 0, R = 0, j = 0;
    O < a;
    ++O
  )
    for (var U = 0, D = Cr(r, _ + 1, (_ = qp((R = p[O])))), V = r; U < E; ++U)
      (V = Gp(R > 0 ? L[U] + " " + D : le(D, /&\f/g, L[U]))) && (m[j++] = V)
  return Rl(r, o, l, c === 0 ? Cl : h, m, y, w, x)
}
function $1(r, o, l, a) {
  return Rl(r, o, l, Kp, du(O1()), Cr(r, 2, -2), 0, a)
}
function bd(r, o, l, a, c) {
  return Rl(r, o, l, fu, Cr(r, 0, a), Cr(r, a + 1, -1), a, c)
}
function Xp(r, o, l) {
  switch (N1(r, o)) {
    case 5103:
      return ye + "print-" + r + r
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + r + r
    case 4789:
      return Ro + r + r
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + r + Ro + r + Ee + r + r
    case 5936:
      switch (Be(r, o + 11)) {
        case 114:
          return ye + r + Ee + le(r, /[svh]\w+-[tblr]{2}/, "tb") + r
        case 108:
          return ye + r + Ee + le(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r
        case 45:
          return ye + r + Ee + le(r, /[svh]\w+-[tblr]{2}/, "lr") + r
      }
    case 6828:
    case 4268:
    case 2903:
      return ye + r + Ee + r + r
    case 6165:
      return ye + r + Ee + "flex-" + r + r
    case 5187:
      return (
        ye + r + le(r, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Ee + "flex-$1$2") + r
      )
    case 5443:
      return (
        ye +
        r +
        Ee +
        "flex-item-" +
        le(r, /flex-|-self/g, "") +
        (nn(r, /flex-|baseline/)
          ? ""
          : Ee + "grid-row-" + le(r, /flex-|-self/g, "")) +
        r
      )
    case 4675:
      return (
        ye +
        r +
        Ee +
        "flex-line-pack" +
        le(r, /align-content|flex-|-self/g, "") +
        r
      )
    case 5548:
      return ye + r + Ee + le(r, "shrink", "negative") + r
    case 5292:
      return ye + r + Ee + le(r, "basis", "preferred-size") + r
    case 6060:
      return (
        ye +
        "box-" +
        le(r, "-grow", "") +
        ye +
        r +
        Ee +
        le(r, "grow", "positive") +
        r
      )
    case 4554:
      return ye + le(r, /([^-])(transform)/g, "$1" + ye + "$2") + r
    case 6187:
      return (
        le(
          le(le(r, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"),
          r,
          ""
        ) + r
      )
    case 5495:
    case 3959:
      return le(r, /(image-set\([^]*)/, ye + "$1$`$1")
    case 4968:
      return (
        le(
          le(r, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Ee + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ye +
        r +
        r
      )
    case 4200:
      if (!nn(r, /flex-|baseline/))
        return Ee + "grid-column-align" + Cr(r, o) + r
      break
    case 2592:
    case 3360:
      return Ee + le(r, "template-", "") + r
    case 4384:
    case 3616:
      return l &&
        l.some(function (a, c) {
          return (o = c), nn(a.props, /grid-\w+-end/)
        })
        ? ~rl(r + (l = l[o].value), "span", 0)
          ? r
          : Ee +
            le(r, "-start", "") +
            r +
            Ee +
            "grid-row-span:" +
            (~rl(l, "span", 0) ? nn(l, /\d+/) : +nn(l, /\d+/) - +nn(r, /\d+/)) +
            ";"
        : Ee + le(r, "-start", "") + r
    case 4896:
    case 4128:
      return l &&
        l.some(function (a) {
          return nn(a.props, /grid-\w+-start/)
        })
        ? r
        : Ee + le(le(r, "-end", "-span"), "span ", "") + r
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return le(r, /(.+)-inline(.+)/, ye + "$1$2") + r
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (bt(r) - 1 - o > 6)
        switch (Be(r, o + 1)) {
          case 109:
            if (Be(r, o + 4) !== 45) break
          case 102:
            return (
              le(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ye +
                  "$2-$3$1" +
                  Ro +
                  (Be(r, o + 3) == 108 ? "$3" : "$2-$3")
              ) + r
            )
          case 115:
            return ~rl(r, "stretch", 0)
              ? Xp(le(r, "stretch", "fill-available"), o, l) + r
              : r
        }
      break
    case 5152:
    case 5920:
      return le(
        r,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (a, c, f, p, h, m, y) {
          return (
            Ee +
            c +
            ":" +
            f +
            y +
            (p ? Ee + c + "-span:" + (h ? m : +m - +f) + y : "") +
            r
          )
        }
      )
    case 4949:
      if (Be(r, o + 6) === 121) return le(r, ":", ":" + ye) + r
      break
    case 6444:
      switch (Be(r, Be(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            le(
              r,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ye +
                (Be(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ye +
                "$2$3$1" +
                Ee +
                "$2box$3"
            ) + r
          )
        case 100:
          return le(r, ":", ":" + Ee) + r
      }
      break
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return le(r, "scroll-", "scroll-snap-") + r
  }
  return r
}
function pl(r, o) {
  for (var l = "", a = 0; a < r.length; a++) l += o(r[a], a, r, o) || ""
  return l
}
function U1(r, o, l, a) {
  switch (r.type) {
    case P1:
      if (r.children.length) break
    case R1:
    case fu:
      return (r.return = r.return || r.value)
    case Kp:
      return ""
    case Qp:
      return (r.return = r.value + "{" + pl(r.children, a) + "}")
    case Cl:
      if (!bt((r.value = r.props.join(",")))) return ""
  }
  return bt((l = pl(r.children, a))) ? (r.return = r.value + "{" + l + "}") : ""
}
function B1(r) {
  var o = Yp(r)
  return function (l, a, c, f) {
    for (var p = "", h = 0; h < o; h++) p += r[h](l, a, c, f) || ""
    return p
  }
}
function H1(r) {
  return function (o) {
    o.root || ((o = o.return) && r(o))
  }
}
function W1(r, o, l, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case fu:
        r.return = Xp(r.value, r.length, l)
        return
      case Qp:
        return pl([_n(r, { value: le(r.value, "@", "@" + ye) })], a)
      case Cl:
        if (r.length)
          return T1((l = r.props), function (c) {
            switch (nn(c, (a = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                xr(_n(r, { props: [le(c, /:(read-\w+)/, ":" + Ro + "$1")] })),
                  xr(_n(r, { props: [c] })),
                  Qa(r, { props: Hd(l, a) })
                break
              case "::placeholder":
                xr(
                  _n(r, { props: [le(c, /:(plac\w+)/, ":" + ye + "input-$1")] })
                ),
                  xr(_n(r, { props: [le(c, /:(plac\w+)/, ":" + Ro + "$1")] })),
                  xr(_n(r, { props: [le(c, /:(plac\w+)/, Ee + "input-$1")] })),
                  xr(_n(r, { props: [c] })),
                  Qa(r, { props: Hd(l, a) })
                break
            }
            return ""
          })
    }
}
var b1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  mt = {},
  Rr =
    (typeof process < "u" &&
      mt !== void 0 &&
      (mt.REACT_APP_SC_ATTR || mt.SC_ATTR)) ||
    "data-styled",
  Zp = "active",
  eh = "data-styled-version",
  Nl = "6.1.15",
  pu = `/*!sc*/
`,
  hl = typeof window < "u" && "HTMLElement" in window,
  V1 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      mt !== void 0 &&
      mt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      mt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? mt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      mt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      mt !== void 0 &&
      mt.SC_DISABLE_SPEEDY !== void 0 &&
      mt.SC_DISABLE_SPEEDY !== "" &&
      mt.SC_DISABLE_SPEEDY !== "false" &&
      mt.SC_DISABLE_SPEEDY),
  Tl = Object.freeze([]),
  Pr = Object.freeze({})
function K1(r, o, l) {
  return (
    l === void 0 && (l = Pr), (r.theme !== l.theme && r.theme) || o || l.theme
  )
}
var th = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Q1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  q1 = /(^-|-$)/g
function Vd(r) {
  return r.replace(Q1, "-").replace(q1, "")
}
var G1 = /(a)(d)/gi,
  Gi = 52,
  Kd = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97))
  }
function Ya(r) {
  var o,
    l = ""
  for (o = Math.abs(r); o > Gi; o = (o / Gi) | 0) l = Kd(o % Gi) + l
  return (Kd(o % Gi) + l).replace(G1, "$1-$2")
}
var Da,
  nh = 5381,
  Er = function (r, o) {
    for (var l = o.length; l; ) r = (33 * r) ^ o.charCodeAt(--l)
    return r
  },
  rh = function (r) {
    return Er(nh, r)
  }
function oh(r) {
  return Ya(rh(r) >>> 0)
}
function Y1(r) {
  return r.displayName || r.name || "Component"
}
function Fa(r) {
  return typeof r == "string" && !0
}
var ih = typeof Symbol == "function" && Symbol.for,
  lh = ih ? Symbol.for("react.memo") : 60115,
  J1 = ih ? Symbol.for("react.forward_ref") : 60112,
  X1 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Z1 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  sh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ew =
    (((Da = {})[J1] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Da[lh] = sh),
    Da)
function Qd(r) {
  return ("type" in (o = r) && o.type.$$typeof) === lh
    ? sh
    : "$$typeof" in r
    ? ew[r.$$typeof]
    : X1
  var o
}
var tw = Object.defineProperty,
  nw = Object.getOwnPropertyNames,
  qd = Object.getOwnPropertySymbols,
  rw = Object.getOwnPropertyDescriptor,
  ow = Object.getPrototypeOf,
  Gd = Object.prototype
function ah(r, o, l) {
  if (typeof o != "string") {
    if (Gd) {
      var a = ow(o)
      a && a !== Gd && ah(r, a, l)
    }
    var c = nw(o)
    qd && (c = c.concat(qd(o)))
    for (var f = Qd(r), p = Qd(o), h = 0; h < c.length; ++h) {
      var m = c[h]
      if (!(m in Z1 || (l && l[m]) || (p && m in p) || (f && m in f))) {
        var y = rw(o, m)
        try {
          tw(r, m, y)
        } catch {}
      }
    }
  }
  return r
}
function Nr(r) {
  return typeof r == "function"
}
function hu(r) {
  return typeof r == "object" && "styledComponentId" in r
}
function Wn(r, o) {
  return r && o ? "".concat(r, " ").concat(o) : r || o || ""
}
function Ja(r, o) {
  if (r.length === 0) return ""
  for (var l = r[0], a = 1; a < r.length; a++) l += r[a]
  return l
}
function Oo(r) {
  return (
    r !== null &&
    typeof r == "object" &&
    r.constructor.name === Object.name &&
    !("props" in r && r.$$typeof)
  )
}
function Xa(r, o, l) {
  if ((l === void 0 && (l = !1), !l && !Oo(r) && !Array.isArray(r))) return o
  if (Array.isArray(o)) for (var a = 0; a < o.length; a++) r[a] = Xa(r[a], o[a])
  else if (Oo(o)) for (var a in o) r[a] = Xa(r[a], o[a])
  return r
}
function mu(r, o) {
  Object.defineProperty(r, "toString", { value: o })
}
function Do(r) {
  for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l]
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(r, " for more information.")
      .concat(o.length > 0 ? " Args: ".concat(o.join(", ")) : "")
  )
}
var iw = (function () {
    function r(o) {
      ;(this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = o)
    }
    return (
      (r.prototype.indexOfGroup = function (o) {
        for (var l = 0, a = 0; a < o; a++) l += this.groupSizes[a]
        return l
      }),
      (r.prototype.insertRules = function (o, l) {
        if (o >= this.groupSizes.length) {
          for (var a = this.groupSizes, c = a.length, f = c; o >= f; )
            if ((f <<= 1) < 0) throw Do(16, "".concat(o))
          ;(this.groupSizes = new Uint32Array(f)),
            this.groupSizes.set(a),
            (this.length = f)
          for (var p = c; p < f; p++) this.groupSizes[p] = 0
        }
        for (
          var h = this.indexOfGroup(o + 1), m = ((p = 0), l.length);
          p < m;
          p++
        )
          this.tag.insertRule(h, l[p]) && (this.groupSizes[o]++, h++)
      }),
      (r.prototype.clearGroup = function (o) {
        if (o < this.length) {
          var l = this.groupSizes[o],
            a = this.indexOfGroup(o),
            c = a + l
          this.groupSizes[o] = 0
          for (var f = a; f < c; f++) this.tag.deleteRule(a)
        }
      }),
      (r.prototype.getGroup = function (o) {
        var l = ""
        if (o >= this.length || this.groupSizes[o] === 0) return l
        for (
          var a = this.groupSizes[o],
            c = this.indexOfGroup(o),
            f = c + a,
            p = c;
          p < f;
          p++
        )
          l += "".concat(this.tag.getRule(p)).concat(pu)
        return l
      }),
      r
    )
  })(),
  ll = new Map(),
  ml = new Map(),
  sl = 1,
  Yi = function (r) {
    if (ll.has(r)) return ll.get(r)
    for (; ml.has(sl); ) sl++
    var o = sl++
    return ll.set(r, o), ml.set(o, r), o
  },
  lw = function (r, o) {
    ;(sl = o + 1), ll.set(r, o), ml.set(o, r)
  },
  sw = "style[".concat(Rr, "][").concat(eh, '="').concat(Nl, '"]'),
  aw = new RegExp(
    "^".concat(Rr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  uw = function (r, o, l) {
    for (var a, c = l.split(","), f = 0, p = c.length; f < p; f++)
      (a = c[f]) && r.registerName(o, a)
  },
  cw = function (r, o) {
    for (
      var l,
        a = ((l = o.textContent) !== null && l !== void 0 ? l : "").split(pu),
        c = [],
        f = 0,
        p = a.length;
      f < p;
      f++
    ) {
      var h = a[f].trim()
      if (h) {
        var m = h.match(aw)
        if (m) {
          var y = 0 | parseInt(m[1], 10),
            w = m[2]
          y !== 0 && (lw(w, y), uw(r, w, m[3]), r.getTag().insertRules(y, c)),
            (c.length = 0)
        } else c.push(h)
      }
    }
  },
  Yd = function (r) {
    for (
      var o = document.querySelectorAll(sw), l = 0, a = o.length;
      l < a;
      l++
    ) {
      var c = o[l]
      c &&
        c.getAttribute(Rr) !== Zp &&
        (cw(r, c), c.parentNode && c.parentNode.removeChild(c))
    }
  }
function fw() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var uh = function (r) {
    var o = document.head,
      l = r || o,
      a = document.createElement("style"),
      c = (function (h) {
        var m = Array.from(h.querySelectorAll("style[".concat(Rr, "]")))
        return m[m.length - 1]
      })(l),
      f = c !== void 0 ? c.nextSibling : null
    a.setAttribute(Rr, Zp), a.setAttribute(eh, Nl)
    var p = fw()
    return p && a.setAttribute("nonce", p), l.insertBefore(a, f), a
  },
  dw = (function () {
    function r(o) {
      ;(this.element = uh(o)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (l) {
          if (l.sheet) return l.sheet
          for (var a = document.styleSheets, c = 0, f = a.length; c < f; c++) {
            var p = a[c]
            if (p.ownerNode === l) return p
          }
          throw Do(17)
        })(this.element)),
        (this.length = 0)
    }
    return (
      (r.prototype.insertRule = function (o, l) {
        try {
          return this.sheet.insertRule(l, o), this.length++, !0
        } catch {
          return !1
        }
      }),
      (r.prototype.deleteRule = function (o) {
        this.sheet.deleteRule(o), this.length--
      }),
      (r.prototype.getRule = function (o) {
        var l = this.sheet.cssRules[o]
        return l && l.cssText ? l.cssText : ""
      }),
      r
    )
  })(),
  pw = (function () {
    function r(o) {
      ;(this.element = uh(o)),
        (this.nodes = this.element.childNodes),
        (this.length = 0)
    }
    return (
      (r.prototype.insertRule = function (o, l) {
        if (o <= this.length && o >= 0) {
          var a = document.createTextNode(l)
          return (
            this.element.insertBefore(a, this.nodes[o] || null),
            this.length++,
            !0
          )
        }
        return !1
      }),
      (r.prototype.deleteRule = function (o) {
        this.element.removeChild(this.nodes[o]), this.length--
      }),
      (r.prototype.getRule = function (o) {
        return o < this.length ? this.nodes[o].textContent : ""
      }),
      r
    )
  })(),
  hw = (function () {
    function r(o) {
      ;(this.rules = []), (this.length = 0)
    }
    return (
      (r.prototype.insertRule = function (o, l) {
        return (
          o <= this.length && (this.rules.splice(o, 0, l), this.length++, !0)
        )
      }),
      (r.prototype.deleteRule = function (o) {
        this.rules.splice(o, 1), this.length--
      }),
      (r.prototype.getRule = function (o) {
        return o < this.length ? this.rules[o] : ""
      }),
      r
    )
  })(),
  Jd = hl,
  mw = { isServer: !hl, useCSSOMInjection: !V1 },
  ch = (function () {
    function r(o, l, a) {
      o === void 0 && (o = Pr), l === void 0 && (l = {})
      var c = this
      ;(this.options = at(at({}, mw), o)),
        (this.gs = l),
        (this.names = new Map(a)),
        (this.server = !!o.isServer),
        !this.server && hl && Jd && ((Jd = !1), Yd(this)),
        mu(this, function () {
          return (function (f) {
            for (
              var p = f.getTag(),
                h = p.length,
                m = "",
                y = function (x) {
                  var _ = (function (j) {
                    return ml.get(j)
                  })(x)
                  if (_ === void 0) return "continue"
                  var L = f.names.get(_),
                    E = p.getGroup(x)
                  if (L === void 0 || !L.size || E.length === 0)
                    return "continue"
                  var O = ""
                      .concat(Rr, ".g")
                      .concat(x, '[id="')
                      .concat(_, '"]'),
                    R = ""
                  L !== void 0 &&
                    L.forEach(function (j) {
                      j.length > 0 && (R += "".concat(j, ","))
                    }),
                    (m += ""
                      .concat(E)
                      .concat(O, '{content:"')
                      .concat(R, '"}')
                      .concat(pu))
                },
                w = 0;
              w < h;
              w++
            )
              y(w)
            return m
          })(c)
        })
    }
    return (
      (r.registerId = function (o) {
        return Yi(o)
      }),
      (r.prototype.rehydrate = function () {
        !this.server && hl && Yd(this)
      }),
      (r.prototype.reconstructWithOptions = function (o, l) {
        return (
          l === void 0 && (l = !0),
          new r(
            at(at({}, this.options), o),
            this.gs,
            (l && this.names) || void 0
          )
        )
      }),
      (r.prototype.allocateGSInstance = function (o) {
        return (this.gs[o] = (this.gs[o] || 0) + 1)
      }),
      (r.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (function (l) {
              var a = l.useCSSOMInjection,
                c = l.target
              return l.isServer ? new hw(c) : a ? new dw(c) : new pw(c)
            })(this.options)),
            new iw(o)))
        )
        var o
      }),
      (r.prototype.hasNameForId = function (o, l) {
        return this.names.has(o) && this.names.get(o).has(l)
      }),
      (r.prototype.registerName = function (o, l) {
        if ((Yi(o), this.names.has(o))) this.names.get(o).add(l)
        else {
          var a = new Set()
          a.add(l), this.names.set(o, a)
        }
      }),
      (r.prototype.insertRules = function (o, l, a) {
        this.registerName(o, l), this.getTag().insertRules(Yi(o), a)
      }),
      (r.prototype.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear()
      }),
      (r.prototype.clearRules = function (o) {
        this.getTag().clearGroup(Yi(o)), this.clearNames(o)
      }),
      (r.prototype.clearTag = function () {
        this.tag = void 0
      }),
      r
    )
  })(),
  gw = /&/g,
  yw = /^\s*\/\/.*$/gm
function fh(r, o) {
  return r.map(function (l) {
    return (
      l.type === "rule" &&
        ((l.value = "".concat(o, " ").concat(l.value)),
        (l.value = l.value.replaceAll(",", ",".concat(o, " "))),
        (l.props = l.props.map(function (a) {
          return "".concat(o, " ").concat(a)
        }))),
      Array.isArray(l.children) &&
        l.type !== "@keyframes" &&
        (l.children = fh(l.children, o)),
      l
    )
  })
}
function vw(r) {
  var o,
    l,
    a,
    c = Pr,
    f = c.options,
    p = f === void 0 ? Pr : f,
    h = c.plugins,
    m = h === void 0 ? Tl : h,
    y = function (_, L, E) {
      return E.startsWith(l) && E.endsWith(l) && E.replaceAll(l, "").length > 0
        ? ".".concat(o)
        : _
    },
    w = m.slice()
  w.push(function (_) {
    _.type === Cl &&
      _.value.includes("&") &&
      (_.props[0] = _.props[0].replace(gw, l).replace(a, y))
  }),
    p.prefix && w.push(W1),
    w.push(U1)
  var x = function (_, L, E, O) {
    L === void 0 && (L = ""),
      E === void 0 && (E = ""),
      O === void 0 && (O = "&"),
      (o = O),
      (l = L),
      (a = new RegExp("\\".concat(l, "\\b"), "g"))
    var R = _.replace(yw, ""),
      j = M1(E || L ? "".concat(E, " ").concat(L, " { ").concat(R, " }") : R)
    p.namespace && (j = fh(j, p.namespace))
    var U = []
    return (
      pl(
        j,
        B1(
          w.concat(
            H1(function (D) {
              return U.push(D)
            })
          )
        )
      ),
      U
    )
  }
  return (
    (x.hash = m.length
      ? m
          .reduce(function (_, L) {
            return L.name || Do(15), Er(_, L.name)
          }, nh)
          .toString()
      : ""),
    x
  )
}
var ww = new ch(),
  Za = vw(),
  dh = tt.createContext({
    shouldForwardProp: void 0,
    styleSheet: ww,
    stylis: Za,
  })
dh.Consumer
tt.createContext(void 0)
function Xd() {
  return A.useContext(dh)
}
var ph = (function () {
    function r(o, l) {
      var a = this
      ;(this.inject = function (c, f) {
        f === void 0 && (f = Za)
        var p = a.name + f.hash
        c.hasNameForId(a.id, p) ||
          c.insertRules(a.id, p, f(a.rules, p, "@keyframes"))
      }),
        (this.name = o),
        (this.id = "sc-keyframes-".concat(o)),
        (this.rules = l),
        mu(this, function () {
          throw Do(12, String(a.name))
        })
    }
    return (
      (r.prototype.getName = function (o) {
        return o === void 0 && (o = Za), this.name + o.hash
      }),
      r
    )
  })(),
  Sw = function (r) {
    return r >= "A" && r <= "Z"
  }
function Zd(r) {
  for (var o = "", l = 0; l < r.length; l++) {
    var a = r[l]
    if (l === 1 && a === "-" && r[0] === "-") return r
    Sw(a) ? (o += "-" + a.toLowerCase()) : (o += a)
  }
  return o.startsWith("ms-") ? "-" + o : o
}
var hh = function (r) {
    return r == null || r === !1 || r === ""
  },
  mh = function (r) {
    var o,
      l,
      a = []
    for (var c in r) {
      var f = r[c]
      r.hasOwnProperty(c) &&
        !hh(f) &&
        ((Array.isArray(f) && f.isCss) || Nr(f)
          ? a.push("".concat(Zd(c), ":"), f, ";")
          : Oo(f)
          ? a.push.apply(a, To(To(["".concat(c, " {")], mh(f), !1), ["}"], !1))
          : a.push(
              ""
                .concat(Zd(c), ": ")
                .concat(
                  ((o = c),
                  (l = f) == null || typeof l == "boolean" || l === ""
                    ? ""
                    : typeof l != "number" ||
                      l === 0 ||
                      o in b1 ||
                      o.startsWith("--")
                    ? String(l).trim()
                    : "".concat(l, "px")),
                  ";"
                )
            ))
    }
    return a
  }
function Kn(r, o, l, a) {
  if (hh(r)) return []
  if (hu(r)) return [".".concat(r.styledComponentId)]
  if (Nr(r)) {
    if (!Nr((f = r)) || (f.prototype && f.prototype.isReactComponent) || !o)
      return [r]
    var c = r(o)
    return Kn(c, o, l, a)
  }
  var f
  return r instanceof ph
    ? l
      ? (r.inject(l, a), [r.getName(a)])
      : [r]
    : Oo(r)
    ? mh(r)
    : Array.isArray(r)
    ? Array.prototype.concat.apply(
        Tl,
        r.map(function (p) {
          return Kn(p, o, l, a)
        })
      )
    : [r.toString()]
}
function xw(r) {
  for (var o = 0; o < r.length; o += 1) {
    var l = r[o]
    if (Nr(l) && !hu(l)) return !1
  }
  return !0
}
var kw = rh(Nl),
  Ew = (function () {
    function r(o, l, a) {
      ;(this.rules = o),
        (this.staticRulesId = ""),
        (this.isStatic = (a === void 0 || a.isStatic) && xw(o)),
        (this.componentId = l),
        (this.baseHash = Er(kw, l)),
        (this.baseStyle = a),
        ch.registerId(l)
    }
    return (
      (r.prototype.generateAndInjectStyles = function (o, l, a) {
        var c = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(o, l, a)
          : ""
        if (this.isStatic && !a.hash)
          if (
            this.staticRulesId &&
            l.hasNameForId(this.componentId, this.staticRulesId)
          )
            c = Wn(c, this.staticRulesId)
          else {
            var f = Ja(Kn(this.rules, o, l, a)),
              p = Ya(Er(this.baseHash, f) >>> 0)
            if (!l.hasNameForId(this.componentId, p)) {
              var h = a(f, ".".concat(p), void 0, this.componentId)
              l.insertRules(this.componentId, p, h)
            }
            ;(c = Wn(c, p)), (this.staticRulesId = p)
          }
        else {
          for (
            var m = Er(this.baseHash, a.hash), y = "", w = 0;
            w < this.rules.length;
            w++
          ) {
            var x = this.rules[w]
            if (typeof x == "string") y += x
            else if (x) {
              var _ = Ja(Kn(x, o, l, a))
              ;(m = Er(m, _ + w)), (y += _)
            }
          }
          if (y) {
            var L = Ya(m >>> 0)
            l.hasNameForId(this.componentId, L) ||
              l.insertRules(
                this.componentId,
                L,
                a(y, ".".concat(L), void 0, this.componentId)
              ),
              (c = Wn(c, L))
          }
        }
        return c
      }),
      r
    )
  })(),
  gh = tt.createContext(void 0)
gh.Consumer
var Ma = {}
function Cw(r, o, l) {
  var a = hu(r),
    c = r,
    f = !Fa(r),
    p = o.attrs,
    h = p === void 0 ? Tl : p,
    m = o.componentId,
    y =
      m === void 0
        ? (function (V, Y) {
            var X = typeof V != "string" ? "sc" : Vd(V)
            Ma[X] = (Ma[X] || 0) + 1
            var K = "".concat(X, "-").concat(oh(Nl + X + Ma[X]))
            return Y ? "".concat(Y, "-").concat(K) : K
          })(o.displayName, o.parentComponentId)
        : m,
    w = o.displayName,
    x =
      w === void 0
        ? (function (V) {
            return Fa(V) ? "styled.".concat(V) : "Styled(".concat(Y1(V), ")")
          })(r)
        : w,
    _ =
      o.displayName && o.componentId
        ? "".concat(Vd(o.displayName), "-").concat(o.componentId)
        : o.componentId || y,
    L = a && c.attrs ? c.attrs.concat(h).filter(Boolean) : h,
    E = o.shouldForwardProp
  if (a && c.shouldForwardProp) {
    var O = c.shouldForwardProp
    if (o.shouldForwardProp) {
      var R = o.shouldForwardProp
      E = function (V, Y) {
        return O(V, Y) && R(V, Y)
      }
    } else E = O
  }
  var j = new Ew(l, _, a ? c.componentStyle : void 0)
  function U(V, Y) {
    return (function (X, K, de) {
      var ge = X.attrs,
        je = X.componentStyle,
        yt = X.defaultProps,
        vt = X.foldedComponentIds,
        Xe = X.styledComponentId,
        ct = X.target,
        wt = tt.useContext(gh),
        Ve = Xd(),
        we = X.shouldForwardProp || Ve.shouldForwardProp,
        H = K1(K, wt, yt) || Pr,
        Z = (function (ue, se, me) {
          for (
            var ce,
              pe = at(at({}, se), { className: void 0, theme: me }),
              He = 0;
            He < ue.length;
            He += 1
          ) {
            var Qt = Nr((ce = ue[He])) ? ce(pe) : ce
            for (var Pt in Qt)
              pe[Pt] =
                Pt === "className"
                  ? Wn(pe[Pt], Qt[Pt])
                  : Pt === "style"
                  ? at(at({}, pe[Pt]), Qt[Pt])
                  : Qt[Pt]
          }
          return (
            se.className && (pe.className = Wn(pe.className, se.className)), pe
          )
        })(ge, K, H),
        W = Z.as || ct,
        k = {}
      for (var I in Z)
        Z[I] === void 0 ||
          I[0] === "$" ||
          I === "as" ||
          (I === "theme" && Z.theme === H) ||
          (I === "forwardedAs"
            ? (k.as = Z.forwardedAs)
            : (we && !we(I, W)) || (k[I] = Z[I]))
      var re = (function (ue, se) {
          var me = Xd(),
            ce = ue.generateAndInjectStyles(se, me.styleSheet, me.stylis)
          return ce
        })(je, Z),
        ie = Wn(vt, Xe)
      return (
        re && (ie += " " + re),
        Z.className && (ie += " " + Z.className),
        (k[Fa(W) && !th.has(W) ? "class" : "className"] = ie),
        de && (k.ref = de),
        A.createElement(W, k)
      )
    })(D, V, Y)
  }
  U.displayName = x
  var D = tt.forwardRef(U)
  return (
    (D.attrs = L),
    (D.componentStyle = j),
    (D.displayName = x),
    (D.shouldForwardProp = E),
    (D.foldedComponentIds = a
      ? Wn(c.foldedComponentIds, c.styledComponentId)
      : ""),
    (D.styledComponentId = _),
    (D.target = a ? c.target : r),
    Object.defineProperty(D, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps
      },
      set: function (V) {
        this._foldedDefaultProps = a
          ? (function (Y) {
              for (var X = [], K = 1; K < arguments.length; K++)
                X[K - 1] = arguments[K]
              for (var de = 0, ge = X; de < ge.length; de++) Xa(Y, ge[de], !0)
              return Y
            })({}, c.defaultProps, V)
          : V
      },
    }),
    mu(D, function () {
      return ".".concat(D.styledComponentId)
    }),
    f &&
      ah(D, r, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    D
  )
}
function ep(r, o) {
  for (var l = [r[0]], a = 0, c = o.length; a < c; a += 1)
    l.push(o[a], r[a + 1])
  return l
}
var tp = function (r) {
  return Object.assign(r, { isCss: !0 })
}
function yh(r) {
  for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l]
  if (Nr(r) || Oo(r)) return tp(Kn(ep(Tl, To([r], o, !0))))
  var a = r
  return o.length === 0 && a.length === 1 && typeof a[0] == "string"
    ? Kn(a)
    : tp(Kn(ep(a, o)))
}
function eu(r, o, l) {
  if ((l === void 0 && (l = Pr), !o)) throw Do(1, o)
  var a = function (c) {
    for (var f = [], p = 1; p < arguments.length; p++) f[p - 1] = arguments[p]
    return r(o, l, yh.apply(void 0, To([c], f, !1)))
  }
  return (
    (a.attrs = function (c) {
      return eu(
        r,
        o,
        at(at({}, l), {
          attrs: Array.prototype.concat(l.attrs, c).filter(Boolean),
        })
      )
    }),
    (a.withConfig = function (c) {
      return eu(r, o, at(at({}, l), c))
    }),
    a
  )
}
var vh = function (r) {
    return eu(Cw, r)
  },
  Gn = vh
th.forEach(function (r) {
  Gn[r] = vh(r)
})
function gu(r) {
  for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l]
  var a = Ja(yh.apply(void 0, To([r], o, !1))),
    c = oh(a)
  return new ph(c, a)
}
const _w = { "aria-busy": !0, role: "progressbar" }
Gn.div`
  display: ${r => (r.$visible ? "flex" : "none")};
`
const Rw = "http://www.w3.org/2000/svg",
  zt = 242.776657104492,
  Pw = 1.6,
  Nw = gu`
12.5% {
  stroke-dasharray: ${zt * 0.14}px, ${zt}px;
  stroke-dashoffset: -${zt * 0.11}px;
}
43.75% {
  stroke-dasharray: ${zt * 0.35}px, ${zt}px;
  stroke-dashoffset: -${zt * 0.35}px;
}
100% {
  stroke-dasharray: ${zt * 0.01}px, ${zt}px;
  stroke-dashoffset: -${zt * 0.99}px;
}
`
Gn.path`
  stroke-dasharray: ${zt * 0.01}px, ${zt};
  stroke-dashoffset: 0;
  animation: ${Nw} ${Pw}s linear infinite;
`
const Tw = gu`
to {
   transform: rotate(360deg);
 }
`
Gn.svg`
  animation: ${Tw} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`
Gn.polyline`
  stroke-width: ${r => r.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`
const Ow = gu`
to {
   stroke-dashoffset: 136;
 }
`
Gn.polygon`
  stroke-dasharray: 17;
  animation: ${Ow} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`
Gn.svg`
  transform-origin: 50% 65%;
`
const Lw = ({
    visible: r = !0,
    width: o = "80",
    height: l = "80",
    wrapperClass: a = "",
    wrapperStyle: c = {},
    ariaLabel: f = "blocks-loading",
  }) =>
    r
      ? z.jsxs("svg", {
          width: o,
          height: l,
          className: a,
          style: c,
          xmlns: Rw,
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          "aria-label": f,
          "data-testid": "blocks-svg",
          ..._w,
          children: [
            z.jsx("title", { children: "Blocks" }),
            z.jsx("desc", { children: "Animated representation of blocks" }),
            z.jsx("rect", {
              x: "17",
              y: "17",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "40",
              y: "17",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.125s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "63",
              y: "17",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.25s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "17",
              y: "40",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.875s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "63",
              y: "40",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.375s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "17",
              y: "63",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.75s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "40",
              y: "63",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.625s",
                calcMode: "discrete",
              }),
            }),
            z.jsx("rect", {
              x: "63",
              y: "63",
              width: "20",
              height: "20",
              fill: "#577c9b",
              children: z.jsx("animate", {
                attributeName: "fill",
                values: "#0dceff;#577c9b;#577c9b",
                keyTimes: "0;0.125;1",
                dur: "1s",
                repeatCount: "indefinite",
                begin: "0.5s",
                calcMode: "discrete",
              }),
            }),
          ],
        })
      : null,
  jw = "_pageContainer_g2l3s_7",
  Aw = "_contentWrapper_g2l3s_13",
  Iw = "_formInput_g2l3s_33",
  zw = "_textLightGrey_g2l3s_48",
  Dw = "_label_g2l3s_68",
  Fw = "_successMessage_g2l3s_74",
  Mw = "_errorText_g2l3s_95",
  $w = "_placeholderText_g2l3s_109",
  Uw = "_formWrapper_g2l3s_123",
  Bw = "_submitButton_g2l3s_145",
  Hw = "_submittingWrapper_g2l3s_162",
  Ww = "_loadingContainer_g2l3s_169",
  Ue = {
    pageContainer: jw,
    contentWrapper: Aw,
    formInput: Iw,
    textLightGrey: zw,
    label: Dw,
    successMessage: Fw,
    errorText: Mw,
    placeholderText: $w,
    formWrapper: Uw,
    submitButton: Bw,
    submittingWrapper: Hw,
    loadingContainer: Ww,
  },
  bw = ({ title: r }) => {
    const {
        handleSubmit: o,
        handleChange: l,
        state: a,
        errors: c,
        isSubmitting: f,
      } = _1(),
      [p, h] = tt.useState(!1)
    return (
      tt.useEffect(() => {
        let m
        return (
          a.emailSent &&
            (h(!0),
            (m = setTimeout(() => {
              h(!1)
            }, 2e3))),
          () => clearTimeout(m)
        )
      }, [a.emailSent]),
      z.jsxs("div", {
        className: Ue.pageContainer,
        children: [
          z.jsx(su, { title: r }),
          z.jsx("div", {
            className: Ue.contentWrapper,
            children: z.jsxs("form", {
              onSubmit: o,
              children: [
                z.jsxs("div", {
                  className: Ue.formWrapper,
                  children: [
                    z.jsx("label", {
                      className: Ue.label,
                      htmlFor: "full-name",
                      children: "Name",
                    }),
                    z.jsx("input", {
                      className: Ue.formInput,
                      id: "full-name",
                      name: "name",
                      type: "text",
                      value: a.name,
                      onChange: l,
                      required: !0,
                    }),
                  ],
                }),
                z.jsxs("div", {
                  className: Ue.formWrapper,
                  children: [
                    z.jsx("label", {
                      className: Ue.label,
                      htmlFor: "email",
                      children: "Email",
                    }),
                    z.jsx("input", {
                      className: Ue.formInput,
                      id: "email",
                      name: "email",
                      type: "email",
                      value: a.email,
                      onChange: l,
                      required: !0,
                    }),
                  ],
                }),
                z.jsxs("div", {
                  className: Ue.formWrapper,
                  children: [
                    z.jsx("label", {
                      className: Ue.label,
                      htmlFor: "message",
                      children: "Message",
                    }),
                    z.jsx("input", {
                      className: Ue.formInput,
                      id: "message",
                      name: "message",
                      rows: "3",
                      value: a.message,
                      onChange: l,
                      required: !0,
                    }),
                  ],
                }),
                c.email
                  ? z.jsx("p", { className: Ue.errorText, children: c.email })
                  : !c.email &&
                    z.jsx("p", {
                      className: Ue.placeholderText,
                      children: "placeholderText placeholderText",
                    }),
                z.jsxs("div", {
                  className: Ue.submittingWrapper,
                  children: [
                    z.jsx("button", {
                      className: Ue.submitButton,
                      type: "submit",
                      disabled: a.disabled,
                      children: "Send",
                    }),
                    f &&
                      z.jsxs("div", {
                        className: Ue.loadingContainer,
                        children: [
                          z.jsx(Lw, {
                            height: "35",
                            width: "35",
                            color: "#007bff",
                            ariaLabel: "blocks-loading",
                            wrapperStyle: {},
                            wrapperClass: "blocks-wrapper",
                            visible: !0,
                          }),
                          z.jsx("p", {
                            className: Ue.textLightGrey,
                            children:
                              "Please allow up to 30 seconds for the message to send",
                          }),
                        ],
                      }),
                  ],
                }),
                p &&
                  z.jsx("p", {
                    className: Ue.successMessage,
                    children: "Message Sent!",
                  }),
              ],
            }),
          }),
        ],
      })
    )
  },
  Vw = (r, o) => {
    A.useEffect(() => {
      const l = a => {
        !r.current || r.current.contains(a.target) || o(a)
      }
      return (
        document.addEventListener("mousedown", l),
        () => {
          document.removeEventListener("mousedown", l)
        }
      )
    }, [r, o])
  },
  Kw = "_burger_ap8pl_1",
  Qw = "_burgerLine_ap8pl_18",
  qw = "_open_ap8pl_28",
  Co = { burger: Kw, burgerLine: Qw, open: qw },
  Gw = ({ open: r, setOpen: o }) =>
    z.jsxs("button", {
      className: `${Co.burger} ${r ? Co.open : ""}`,
      onClick: () => o(!r),
      children: [
        z.jsx("div", { className: Co.burgerLine }),
        z.jsx("div", { className: Co.burgerLine }),
        z.jsx("div", { className: Co.burgerLine }),
      ],
    }),
  Yw = "_link_1b074_1",
  Jw = "_menu_1b074_13",
  Xw = "_menuOpen_1b074_31",
  Zw = "_menuClosed_1b074_35",
  kr = { link: Yw, menu: Jw, menuOpen: Xw, menuClosed: Zw },
  eS = ({ open: r }) =>
    z.jsxs("nav", {
      className: `${kr.menu} ${r ? kr.menuOpen : kr.menuClosed}`,
      children: [
        z.jsx("a", { className: kr.link, href: "/", children: "Home" }),
        z.jsx("a", { className: kr.link, href: "/about", children: "About" }),
        z.jsx("a", {
          className: kr.link,
          href: "/contact",
          children: "Contact",
        }),
      ],
    }),
  tS = "_nameAndMenuContainer_9p6zy_1",
  nS = "_hrLine_9p6zy_7",
  rS = "_navBarWrapper_9p6zy_11",
  oS = "_link_9p6zy_16",
  iS = "_linksWrapper_9p6zy_26",
  Bn = {
    nameAndMenuContainer: tS,
    hrLine: nS,
    navBarWrapper: rS,
    link: oS,
    linksWrapper: iS,
  },
  lS = () => {
    const r = A.useRef()
    Vw(r, () => l(!1))
    const [o, l] = A.useState(!1)
    return z.jsxs("div", {
      className: Bn.navBarWrapper,
      children: [
        z.jsxs("div", {
          className: Bn.nameAndMenuContainer,
          ref: r,
          children: [
            z.jsx(eS, { open: o, setOpen: l }),
            z.jsx(Gw, { open: o, setOpen: l }),
            z.jsxs("div", {
              className: Bn.linksWrapper,
              children: [
                z.jsx("a", { className: Bn.link, href: "/", children: "Home" }),
                z.jsx("a", {
                  className: Bn.link,
                  href: "/about",
                  children: "About",
                }),
                z.jsx("a", {
                  className: Bn.link,
                  href: "/contact",
                  children: "Contact",
                }),
              ],
            }),
          ],
        }),
        z.jsx("hr", { className: Bn.hrLine }),
      ],
    })
  },
  sS = () => {
    const r = {
        title: "Keep Learning.",
        subTitle: "Projects that make a difference",
        text: "Checkout my work below",
      },
      o = { title: "About Me." },
      l = { title: "Talk to Me." }
    return z.jsxs($y, {
      children: [
        z.jsx(lS, {}),
        z.jsxs(my, {
          children: [
            z.jsx(Ji, {
              path: "/",
              exact: !0,
              element: z.jsx(Rv, {
                title: r.title,
                subTitle: r.subTitle,
                text: r.text,
              }),
            }),
            z.jsx(Ji, {
              path: "/about",
              element: z.jsx(qv, { title: o.title }),
            }),
            z.jsx(Ji, {
              path: "/contact",
              element: z.jsx(bw, { title: l.title }),
            }),
          ],
        }),
        z.jsx(Zy, {}),
      ],
    })
  }
window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
function aS() {
  "serviceWorker" in navigator &&
    navigator.serviceWorker.ready
      .then(r => {
        r.unregister()
      })
      .catch(r => {
        console.error(r.message)
      })
}
const uS = document.getElementById("root"),
  cS = Cg.createRoot(uS)
cS.render(z.jsx(tt.StrictMode, { children: z.jsx(sS, {}) }))
aS()
