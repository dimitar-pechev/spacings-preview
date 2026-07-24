function tx(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var nm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s$(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var rx = { exports: {} }, Of = {}, nx = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Al = Symbol.for("react.element"), l$ = Symbol.for("react.portal"), u$ = Symbol.for("react.fragment"), c$ = Symbol.for("react.strict_mode"), f$ = Symbol.for("react.profiler"), d$ = Symbol.for("react.provider"), p$ = Symbol.for("react.context"), h$ = Symbol.for("react.forward_ref"), y$ = Symbol.for("react.suspense"), m$ = Symbol.for("react.memo"), v$ = Symbol.for("react.lazy"), xg = Symbol.iterator;
function g$(e) {
  return e === null || typeof e != "object" ? null : (e = xg && e[xg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ix = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ox = Object.assign, ax = {};
function Ba(e, t, r) {
  this.props = e, this.context = t, this.refs = ax, this.updater = r || ix;
}
Ba.prototype.isReactComponent = {};
Ba.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ba.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sx() {
}
sx.prototype = Ba.prototype;
function im(e, t, r) {
  this.props = e, this.context = t, this.refs = ax, this.updater = r || ix;
}
var om = im.prototype = new sx();
om.constructor = im;
ox(om, Ba.prototype);
om.isPureReactComponent = !0;
var Eg = Array.isArray, lx = Object.prototype.hasOwnProperty, am = { current: null }, ux = { key: !0, ref: !0, __self: !0, __source: !0 };
function cx(e, t, r) {
  var n, i = {}, o = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) lx.call(t, n) && !ux.hasOwnProperty(n) && (i[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) i.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in s = e.defaultProps, s) i[n] === void 0 && (i[n] = s[n]);
  return { $$typeof: Al, type: e, key: o, ref: a, props: i, _owner: am.current };
}
function w$(e, t) {
  return { $$typeof: Al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function sm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Al;
}
function S$(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Cg = /\/+/g;
function Ad(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? S$("" + e.key) : t.toString(36);
}
function ju(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (o) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Al:
        case l$:
          a = !0;
      }
  }
  if (a) return a = e, i = i(a), e = n === "" ? "." + Ad(a, 0) : n, Eg(i) ? (r = "", e != null && (r = e.replace(Cg, "$&/") + "/"), ju(i, t, r, "", function(u) {
    return u;
  })) : i != null && (sm(i) && (i = w$(i, r + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Cg, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Eg(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var l = n + Ad(o, s);
    a += ju(o, t, r, l, i);
  }
  else if (l = g$(e), typeof l == "function") for (e = l.call(e), s = 0; !(o = e.next()).done; ) o = o.value, l = n + Ad(o, s++), a += ju(o, t, r, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function tu(e, t, r) {
  if (e == null) return e;
  var n = [], i = 0;
  return ju(e, n, "", "", function(o) {
    return t.call(r, o, i++);
  }), n;
}
function x$(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ut = { current: null }, zu = { transition: null }, E$ = { ReactCurrentDispatcher: Ut, ReactCurrentBatchConfig: zu, ReactCurrentOwner: am };
function fx() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = { map: tu, forEach: function(e, t, r) {
  tu(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return tu(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return tu(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!sm(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ee.Component = Ba;
Ee.Fragment = u$;
Ee.Profiler = f$;
Ee.PureComponent = im;
Ee.StrictMode = c$;
Ee.Suspense = y$;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E$;
Ee.act = fx;
Ee.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = ox({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = am.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (l in t) lx.call(t, l) && !ux.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Al, type: e.type, key: i, ref: o, props: n, _owner: a };
};
Ee.createContext = function(e) {
  return e = { $$typeof: p$, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: d$, _context: e }, e.Consumer = e;
};
Ee.createElement = cx;
Ee.createFactory = function(e) {
  var t = cx.bind(null, e);
  return t.type = e, t;
};
Ee.createRef = function() {
  return { current: null };
};
Ee.forwardRef = function(e) {
  return { $$typeof: h$, render: e };
};
Ee.isValidElement = sm;
Ee.lazy = function(e) {
  return { $$typeof: v$, _payload: { _status: -1, _result: e }, _init: x$ };
};
Ee.memo = function(e, t) {
  return { $$typeof: m$, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function(e) {
  var t = zu.transition;
  zu.transition = {};
  try {
    e();
  } finally {
    zu.transition = t;
  }
};
Ee.unstable_act = fx;
Ee.useCallback = function(e, t) {
  return Ut.current.useCallback(e, t);
};
Ee.useContext = function(e) {
  return Ut.current.useContext(e);
};
Ee.useDebugValue = function() {
};
Ee.useDeferredValue = function(e) {
  return Ut.current.useDeferredValue(e);
};
Ee.useEffect = function(e, t) {
  return Ut.current.useEffect(e, t);
};
Ee.useId = function() {
  return Ut.current.useId();
};
Ee.useImperativeHandle = function(e, t, r) {
  return Ut.current.useImperativeHandle(e, t, r);
};
Ee.useInsertionEffect = function(e, t) {
  return Ut.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function(e, t) {
  return Ut.current.useLayoutEffect(e, t);
};
Ee.useMemo = function(e, t) {
  return Ut.current.useMemo(e, t);
};
Ee.useReducer = function(e, t, r) {
  return Ut.current.useReducer(e, t, r);
};
Ee.useRef = function(e) {
  return Ut.current.useRef(e);
};
Ee.useState = function(e) {
  return Ut.current.useState(e);
};
Ee.useSyncExternalStore = function(e, t, r) {
  return Ut.current.useSyncExternalStore(e, t, r);
};
Ee.useTransition = function() {
  return Ut.current.useTransition();
};
Ee.version = "18.3.1";
nx.exports = Ee;
var Q = nx.exports;
const V = /* @__PURE__ */ Ri(Q), oU = /* @__PURE__ */ tx({
  __proto__: null,
  default: V
}, [Q]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C$ = Q, k$ = Symbol.for("react.element"), b$ = Symbol.for("react.fragment"), _$ = Object.prototype.hasOwnProperty, $$ = C$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O$ = { key: !0, ref: !0, __self: !0, __source: !0 };
function dx(e, t, r) {
  var n, i = {}, o = null, a = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t) _$.call(t, n) && !O$.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: k$, type: e, key: o, ref: a, props: i, _owner: $$.current };
}
Of.Fragment = b$;
Of.jsx = dx;
Of.jsxs = dx;
rx.exports = Of;
var aU = rx.exports, px = { exports: {} }, kr = {}, hx = { exports: {} }, yx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(M, q) {
    var G = M.length;
    M.push(q);
    e: for (; 0 < G; ) {
      var ae = G - 1 >>> 1, ue = M[ae];
      if (0 < i(ue, q)) M[ae] = q, M[G] = ue, G = ae;
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function n(M) {
    if (M.length === 0) return null;
    var q = M[0], G = M.pop();
    if (G !== q) {
      M[0] = G;
      e: for (var ae = 0, ue = M.length, be = ue >>> 1; ae < be; ) {
        var Se = 2 * (ae + 1) - 1, ce = M[Se], Ce = Se + 1, Oe = M[Ce];
        if (0 > i(ce, G)) Ce < ue && 0 > i(Oe, ce) ? (M[ae] = Oe, M[Ce] = G, ae = Ce) : (M[ae] = ce, M[Se] = G, ae = Se);
        else if (Ce < ue && 0 > i(Oe, G)) M[ae] = Oe, M[Ce] = G, ae = Ce;
        else break e;
      }
    }
    return q;
  }
  function i(M, q) {
    var G = M.sortIndex - q.sortIndex;
    return G !== 0 ? G : M.id - q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], c = 1, f = null, d = 3, w = !1, h = !1, y = !1, m = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var q = r(u); q !== null; ) {
      if (q.callback === null) n(u);
      else if (q.startTime <= M) n(u), q.sortIndex = q.expirationTime, t(l, q);
      else break;
      q = r(u);
    }
  }
  function x(M) {
    if (y = !1, g(M), !h) if (r(l) !== null) h = !0, z(E);
    else {
      var q = r(u);
      q !== null && B(x, q.startTime - M);
    }
  }
  function E(M, q) {
    h = !1, y && (y = !1, v(b), b = -1), w = !0;
    var G = d;
    try {
      for (g(q), f = r(l); f !== null && (!(f.expirationTime > q) || M && !_()); ) {
        var ae = f.callback;
        if (typeof ae == "function") {
          f.callback = null, d = f.priorityLevel;
          var ue = ae(f.expirationTime <= q);
          q = e.unstable_now(), typeof ue == "function" ? f.callback = ue : f === r(l) && n(l), g(q);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var be = !0;
      else {
        var Se = r(u);
        Se !== null && B(x, Se.startTime - q), be = !1;
      }
      return be;
    } finally {
      f = null, d = G, w = !1;
    }
  }
  var C = !1, S = null, b = -1, $ = 5, k = -1;
  function _() {
    return !(e.unstable_now() - k < $);
  }
  function P() {
    if (S !== null) {
      var M = e.unstable_now();
      k = M;
      var q = !0;
      try {
        q = S(!0, M);
      } finally {
        q ? D() : (C = !1, S = null);
      }
    } else C = !1;
  }
  var D;
  if (typeof p == "function") D = function() {
    p(P);
  };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), j = L.port2;
    L.port1.onmessage = P, D = function() {
      j.postMessage(null);
    };
  } else D = function() {
    m(P, 0);
  };
  function z(M) {
    S = M, C || (C = !0, D());
  }
  function B(M, q) {
    b = m(function() {
      M(e.unstable_now());
    }, q);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    h || w || (h = !0, z(E));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(M) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var q = 3;
        break;
      default:
        q = d;
    }
    var G = d;
    d = q;
    try {
      return M();
    } finally {
      d = G;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, q) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var G = d;
    d = M;
    try {
      return q();
    } finally {
      d = G;
    }
  }, e.unstable_scheduleCallback = function(M, q, G) {
    var ae = e.unstable_now();
    switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ae + G : ae) : G = ae, M) {
      case 1:
        var ue = -1;
        break;
      case 2:
        ue = 250;
        break;
      case 5:
        ue = 1073741823;
        break;
      case 4:
        ue = 1e4;
        break;
      default:
        ue = 5e3;
    }
    return ue = G + ue, M = { id: c++, callback: q, priorityLevel: M, startTime: G, expirationTime: ue, sortIndex: -1 }, G > ae ? (M.sortIndex = G, t(u, M), r(l) === null && M === r(u) && (y ? (v(b), b = -1) : y = !0, B(x, G - ae))) : (M.sortIndex = ue, t(l, M), h || w || (h = !0, z(E))), M;
  }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(M) {
    var q = d;
    return function() {
      var G = d;
      d = q;
      try {
        return M.apply(this, arguments);
      } finally {
        d = G;
      }
    };
  };
})(yx);
hx.exports = yx;
var R$ = hx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P$ = Q, Sr = R$;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mx = /* @__PURE__ */ new Set(), il = {};
function Ro(e, t) {
  ba(e, t), ba(e + "Capture", t);
}
function ba(e, t) {
  for (il[e] = t, e = 0; e < t.length; e++) mx.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sh = Object.prototype.hasOwnProperty, T$ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kg = {}, bg = {};
function D$(e) {
  return sh.call(bg, e) ? !0 : sh.call(kg, e) ? !1 : T$.test(e) ? bg[e] = !0 : (kg[e] = !0, !1);
}
function A$(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function F$(e, t, r, n) {
  if (t === null || typeof t > "u" || A$(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null) switch (r.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Vt(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  bt[e] = new Vt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  bt[t] = new Vt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  bt[e] = new Vt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  bt[e] = new Vt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  bt[e] = new Vt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  bt[e] = new Vt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  bt[e] = new Vt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  bt[e] = new Vt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  bt[e] = new Vt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lm = /[\-:]([a-z])/g;
function um(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    lm,
    um
  );
  bt[t] = new Vt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(lm, um);
  bt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(lm, um);
  bt[t] = new Vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  bt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
bt.xlinkHref = new Vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  bt[e] = new Vt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cm(e, t, r, n) {
  var i = bt.hasOwnProperty(t) ? bt[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (F$(t, r, i, n) && (r = null), n || i === null ? D$(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var qn = P$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ru = Symbol.for("react.element"), na = Symbol.for("react.portal"), ia = Symbol.for("react.fragment"), fm = Symbol.for("react.strict_mode"), lh = Symbol.for("react.profiler"), vx = Symbol.for("react.provider"), gx = Symbol.for("react.context"), dm = Symbol.for("react.forward_ref"), uh = Symbol.for("react.suspense"), ch = Symbol.for("react.suspense_list"), pm = Symbol.for("react.memo"), ii = Symbol.for("react.lazy"), wx = Symbol.for("react.offscreen"), _g = Symbol.iterator;
function as(e) {
  return e === null || typeof e != "object" ? null : (e = _g && e[_g] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ge = Object.assign, Fd;
function bs(e) {
  if (Fd === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    Fd = t && t[1] || "";
  }
  return `
` + Fd + e;
}
var Md = !1;
function Nd(e, t) {
  if (!e || Md) return "";
  Md = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var n = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        n = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = n.stack.split(`
`), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s]; ) s--;
      for (; 1 <= a && 0 <= s; a--, s--) if (i[a] !== o[s]) {
        if (a !== 1 || s !== 1)
          do
            if (a--, s--, 0 > s || i[a] !== o[s]) {
              var l = `
` + i[a].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= a && 0 <= s);
        break;
      }
    }
  } finally {
    Md = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? bs(e) : "";
}
function M$(e) {
  switch (e.tag) {
    case 5:
      return bs(e.type);
    case 16:
      return bs("Lazy");
    case 13:
      return bs("Suspense");
    case 19:
      return bs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Nd(e.type, !1), e;
    case 11:
      return e = Nd(e.type.render, !1), e;
    case 1:
      return e = Nd(e.type, !0), e;
    default:
      return "";
  }
}
function fh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ia:
      return "Fragment";
    case na:
      return "Portal";
    case lh:
      return "Profiler";
    case fm:
      return "StrictMode";
    case uh:
      return "Suspense";
    case ch:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gx:
      return (e.displayName || "Context") + ".Consumer";
    case vx:
      return (e._context.displayName || "Context") + ".Provider";
    case dm:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pm:
      return t = e.displayName || null, t !== null ? t : fh(e.type) || "Memo";
    case ii:
      t = e._payload, e = e._init;
      try {
        return fh(e(t));
      } catch {
      }
  }
  return null;
}
function N$(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fh(t);
    case 8:
      return t === fm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $i(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function L$(e) {
  var t = Sx(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, o = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      n = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(a) {
      n = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function nu(e) {
  e._valueTracker || (e._valueTracker = L$(e));
}
function xx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(), n = "";
  return e && (n = Sx(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Cc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function dh(e, t) {
  var r = t.checked;
  return Ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function $g(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = $i(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ex(e, t) {
  t = t.checked, t != null && cm(e, "checked", t, !1);
}
function ph(e, t) {
  Ex(e, t);
  var r = $i(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? hh(e, t.type, r) : t.hasOwnProperty("defaultValue") && hh(e, t.type, $i(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Og(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function hh(e, t, r) {
  (t !== "number" || Cc(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var _s = Array.isArray;
function ga(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + $i(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        e[i].selected = !0, n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function yh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Rg(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(W(92));
      if (_s(r)) {
        if (1 < r.length) throw Error(W(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: $i(r) };
}
function Cx(e, t) {
  var r = $i(t.value), n = $i(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Pg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? kx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var iu, bx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (iu = iu || document.createElement("div"), iu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = iu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ol(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ls = {
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
  strokeWidth: !0
}, I$ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ls).forEach(function(e) {
  I$.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ls[t] = Ls[e];
  });
});
function _x(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ls.hasOwnProperty(e) && Ls[e] ? ("" + t).trim() : t + "px";
}
function $x(e, t) {
  e = e.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = _x(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i;
  }
}
var j$ = Ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vh(e, t) {
  if (t) {
    if (j$[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function gh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wh = null;
function hm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Sh = null, wa = null, Sa = null;
function Tg(e) {
  if (e = Nl(e)) {
    if (typeof Sh != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = Af(t), Sh(e.stateNode, e.type, t));
  }
}
function Ox(e) {
  wa ? Sa ? Sa.push(e) : Sa = [e] : wa = e;
}
function Rx() {
  if (wa) {
    var e = wa, t = Sa;
    if (Sa = wa = null, Tg(e), t) for (e = 0; e < t.length; e++) Tg(t[e]);
  }
}
function Px(e, t) {
  return e(t);
}
function Tx() {
}
var Ld = !1;
function Dx(e, t, r) {
  if (Ld) return e(t, r);
  Ld = !0;
  try {
    return Px(e, t, r);
  } finally {
    Ld = !1, (wa !== null || Sa !== null) && (Tx(), Rx());
  }
}
function al(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Af(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(W(231, t, typeof r));
  return r;
}
var xh = !1;
if (jn) try {
  var ss = {};
  Object.defineProperty(ss, "passive", { get: function() {
    xh = !0;
  } }), window.addEventListener("test", ss, ss), window.removeEventListener("test", ss, ss);
} catch {
  xh = !1;
}
function z$(e, t, r, n, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Is = !1, kc = null, bc = !1, Eh = null, U$ = { onError: function(e) {
  Is = !0, kc = e;
} };
function V$(e, t, r, n, i, o, a, s, l) {
  Is = !1, kc = null, z$.apply(U$, arguments);
}
function B$(e, t, r, n, i, o, a, s, l) {
  if (V$.apply(this, arguments), Is) {
    if (Is) {
      var u = kc;
      Is = !1, kc = null;
    } else throw Error(W(198));
    bc || (bc = !0, Eh = u);
  }
}
function Po(e) {
  var t = e, r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Ax(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Dg(e) {
  if (Po(e) !== e) throw Error(W(188));
}
function H$(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Po(e), t === null) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Dg(i), e;
        if (o === n) return Dg(i), t;
        o = o.sibling;
      }
      throw Error(W(188));
    }
    if (r.return !== n.return) r = i, n = o;
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === r) {
          a = !0, r = i, n = o;
          break;
        }
        if (s === n) {
          a = !0, n = i, r = o;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === r) {
            a = !0, r = o, n = i;
            break;
          }
          if (s === n) {
            a = !0, n = o, r = i;
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(W(189));
      }
    }
    if (r.alternate !== n) throw Error(W(190));
  }
  if (r.tag !== 3) throw Error(W(188));
  return r.stateNode.current === r ? e : t;
}
function Fx(e) {
  return e = H$(e), e !== null ? Mx(e) : null;
}
function Mx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nx = Sr.unstable_scheduleCallback, Ag = Sr.unstable_cancelCallback, W$ = Sr.unstable_shouldYield, q$ = Sr.unstable_requestPaint, nt = Sr.unstable_now, Q$ = Sr.unstable_getCurrentPriorityLevel, ym = Sr.unstable_ImmediatePriority, Lx = Sr.unstable_UserBlockingPriority, _c = Sr.unstable_NormalPriority, K$ = Sr.unstable_LowPriority, Ix = Sr.unstable_IdlePriority, Rf = null, gn = null;
function G$(e) {
  if (gn && typeof gn.onCommitFiberRoot == "function") try {
    gn.onCommitFiberRoot(Rf, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Yr = Math.clz32 ? Math.clz32 : J$, Y$ = Math.log, X$ = Math.LN2;
function J$(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Y$(e) / X$ | 0) | 0;
}
var ou = 64, au = 4194304;
function $s(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $c(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e.suspendedLanes, o = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? n = $s(s) : (o &= a, o !== 0 && (n = $s(o)));
  } else a = r & ~i, a !== 0 ? n = $s(a) : o !== 0 && (n = $s(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - Yr(t), i = 1 << r, n |= e[r], t &= ~i;
  return n;
}
function Z$(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function e2(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - Yr(o), s = 1 << a, l = i[a];
    l === -1 ? (!(s & r) || s & n) && (i[a] = Z$(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function Ch(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function jx() {
  var e = ou;
  return ou <<= 1, !(ou & 4194240) && (ou = 64), e;
}
function Id(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Fl(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Yr(t), e[t] = r;
}
function t2(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - Yr(r), o = 1 << i;
    t[i] = 0, n[i] = -1, e[i] = -1, r &= ~o;
  }
}
function mm(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - Yr(r), i = 1 << n;
    i & t | e[n] & t && (e[n] |= t), r &= ~i;
  }
}
var De = 0;
function zx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ux, vm, Vx, Bx, Hx, kh = !1, su = [], vi = null, gi = null, wi = null, sl = /* @__PURE__ */ new Map(), ll = /* @__PURE__ */ new Map(), li = [], r2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vi = null;
      break;
    case "dragenter":
    case "dragleave":
      gi = null;
      break;
    case "mouseover":
    case "mouseout":
      wi = null;
      break;
    case "pointerover":
    case "pointerout":
      sl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ll.delete(t.pointerId);
  }
}
function ls(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Nl(t), t !== null && vm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function n2(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return vi = ls(vi, e, t, r, n, i), !0;
    case "dragenter":
      return gi = ls(gi, e, t, r, n, i), !0;
    case "mouseover":
      return wi = ls(wi, e, t, r, n, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return sl.set(o, ls(sl.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, ll.set(o, ls(ll.get(o) || null, e, t, r, n, i)), !0;
  }
  return !1;
}
function Wx(e) {
  var t = Ji(e.target);
  if (t !== null) {
    var r = Po(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Ax(r), t !== null) {
          e.blockedOn = t, Hx(e.priority, function() {
            Vx(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Uu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = bh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      wh = n, r.target.dispatchEvent(n), wh = null;
    } else return t = Nl(r), t !== null && vm(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Mg(e, t, r) {
  Uu(e) && r.delete(t);
}
function i2() {
  kh = !1, vi !== null && Uu(vi) && (vi = null), gi !== null && Uu(gi) && (gi = null), wi !== null && Uu(wi) && (wi = null), sl.forEach(Mg), ll.forEach(Mg);
}
function us(e, t) {
  e.blockedOn === t && (e.blockedOn = null, kh || (kh = !0, Sr.unstable_scheduleCallback(Sr.unstable_NormalPriority, i2)));
}
function ul(e) {
  function t(i) {
    return us(i, e);
  }
  if (0 < su.length) {
    us(su[0], e);
    for (var r = 1; r < su.length; r++) {
      var n = su[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (vi !== null && us(vi, e), gi !== null && us(gi, e), wi !== null && us(wi, e), sl.forEach(t), ll.forEach(t), r = 0; r < li.length; r++) n = li[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < li.length && (r = li[0], r.blockedOn === null); ) Wx(r), r.blockedOn === null && li.shift();
}
var xa = qn.ReactCurrentBatchConfig, Oc = !0;
function o2(e, t, r, n) {
  var i = De, o = xa.transition;
  xa.transition = null;
  try {
    De = 1, gm(e, t, r, n);
  } finally {
    De = i, xa.transition = o;
  }
}
function a2(e, t, r, n) {
  var i = De, o = xa.transition;
  xa.transition = null;
  try {
    De = 4, gm(e, t, r, n);
  } finally {
    De = i, xa.transition = o;
  }
}
function gm(e, t, r, n) {
  if (Oc) {
    var i = bh(e, t, r, n);
    if (i === null) Kd(e, t, n, Rc, r), Fg(e, n);
    else if (n2(i, e, t, r, n)) n.stopPropagation();
    else if (Fg(e, n), t & 4 && -1 < r2.indexOf(e)) {
      for (; i !== null; ) {
        var o = Nl(i);
        if (o !== null && Ux(o), o = bh(e, t, r, n), o === null && Kd(e, t, n, Rc, r), o === i) break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else Kd(e, t, n, null, r);
  }
}
var Rc = null;
function bh(e, t, r, n) {
  if (Rc = null, e = hm(n), e = Ji(e), e !== null) if (t = Po(e), t === null) e = null;
  else if (r = t.tag, r === 13) {
    if (e = Ax(t), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Rc = e, null;
}
function qx(e) {
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
      return 1;
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
      return 4;
    case "message":
      switch (Q$()) {
        case ym:
          return 1;
        case Lx:
          return 4;
        case _c:
        case K$:
          return 16;
        case Ix:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fi = null, wm = null, Vu = null;
function Qx() {
  if (Vu) return Vu;
  var e, t = wm, r = t.length, n, i = "value" in fi ? fi.value : fi.textContent, o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++) ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++) ;
  return Vu = i.slice(e, 1 < n ? 1 - n : void 0);
}
function Bu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function lu() {
  return !0;
}
function Ng() {
  return !1;
}
function br(e) {
  function t(r, n, i, o, a) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? lu : Ng, this.isPropagationStopped = Ng, this;
  }
  return Ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = lu);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = lu);
  }, persist: function() {
  }, isPersistent: lu }), t;
}
var Ha = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Sm = br(Ha), Ml = Ge({}, Ha, { view: 0, detail: 0 }), s2 = br(Ml), jd, zd, cs, Pf = Ge({}, Ml, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== cs && (cs && e.type === "mousemove" ? (jd = e.screenX - cs.screenX, zd = e.screenY - cs.screenY) : zd = jd = 0, cs = e), jd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zd;
} }), Lg = br(Pf), l2 = Ge({}, Pf, { dataTransfer: 0 }), u2 = br(l2), c2 = Ge({}, Ml, { relatedTarget: 0 }), Ud = br(c2), f2 = Ge({}, Ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), d2 = br(f2), p2 = Ge({}, Ha, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), h2 = br(p2), y2 = Ge({}, Ha, { data: 0 }), Ig = br(y2), m2 = {
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
  MozPrintableKey: "Unidentified"
}, v2 = {
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
  224: "Meta"
}, g2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function w2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = g2[e]) ? !!t[e] : !1;
}
function xm() {
  return w2;
}
var S2 = Ge({}, Ml, { key: function(e) {
  if (e.key) {
    var t = m2[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Bu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? v2[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xm, charCode: function(e) {
  return e.type === "keypress" ? Bu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), x2 = br(S2), E2 = Ge({}, Pf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jg = br(E2), C2 = Ge({}, Ml, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xm }), k2 = br(C2), b2 = Ge({}, Ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _2 = br(b2), $2 = Ge({}, Pf, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), O2 = br($2), R2 = [9, 13, 27, 32], Em = jn && "CompositionEvent" in window, js = null;
jn && "documentMode" in document && (js = document.documentMode);
var P2 = jn && "TextEvent" in window && !js, Kx = jn && (!Em || js && 8 < js && 11 >= js), zg = " ", Ug = !1;
function Gx(e, t) {
  switch (e) {
    case "keyup":
      return R2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var oa = !1;
function T2(e, t) {
  switch (e) {
    case "compositionend":
      return Yx(t);
    case "keypress":
      return t.which !== 32 ? null : (Ug = !0, zg);
    case "textInput":
      return e = t.data, e === zg && Ug ? null : e;
    default:
      return null;
  }
}
function D2(e, t) {
  if (oa) return e === "compositionend" || !Em && Gx(e, t) ? (e = Qx(), Vu = wm = fi = null, oa = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var A2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Vg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A2[e.type] : t === "textarea";
}
function Xx(e, t, r, n) {
  Ox(n), t = Pc(t, "onChange"), 0 < t.length && (r = new Sm("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var zs = null, cl = null;
function F2(e) {
  lE(e, 0);
}
function Tf(e) {
  var t = la(e);
  if (xx(t)) return e;
}
function M2(e, t) {
  if (e === "change") return t;
}
var Jx = !1;
if (jn) {
  var Vd;
  if (jn) {
    var Bd = "oninput" in document;
    if (!Bd) {
      var Bg = document.createElement("div");
      Bg.setAttribute("oninput", "return;"), Bd = typeof Bg.oninput == "function";
    }
    Vd = Bd;
  } else Vd = !1;
  Jx = Vd && (!document.documentMode || 9 < document.documentMode);
}
function Hg() {
  zs && (zs.detachEvent("onpropertychange", Zx), cl = zs = null);
}
function Zx(e) {
  if (e.propertyName === "value" && Tf(cl)) {
    var t = [];
    Xx(t, cl, e, hm(e)), Dx(F2, t);
  }
}
function N2(e, t, r) {
  e === "focusin" ? (Hg(), zs = t, cl = r, zs.attachEvent("onpropertychange", Zx)) : e === "focusout" && Hg();
}
function L2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tf(cl);
}
function I2(e, t) {
  if (e === "click") return Tf(t);
}
function j2(e, t) {
  if (e === "input" || e === "change") return Tf(t);
}
function z2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Zr = typeof Object.is == "function" ? Object.is : z2;
function fl(e, t) {
  if (Zr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!sh.call(t, i) || !Zr(e[i], t[i])) return !1;
  }
  return !0;
}
function Wg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qg(e, t) {
  var r = Wg(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Wg(r);
  }
}
function eE(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function tE() {
  for (var e = window, t = Cc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Cc(e.document);
  }
  return t;
}
function Cm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function U2(e) {
  var t = tE(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && eE(r.ownerDocument.documentElement, r)) {
    if (n !== null && Cm(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = r.textContent.length, o = Math.min(n.start, i);
        n = n.end === void 0 ? o : Math.min(n.end, i), !e.extend && o > n && (i = n, n = o, o = i), i = qg(r, o);
        var a = qg(
          r,
          n
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var V2 = jn && "documentMode" in document && 11 >= document.documentMode, aa = null, _h = null, Us = null, $h = !1;
function Qg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  $h || aa == null || aa !== Cc(n) || (n = aa, "selectionStart" in n && Cm(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Us && fl(Us, n) || (Us = n, n = Pc(_h, "onSelect"), 0 < n.length && (t = new Sm("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = aa)));
}
function uu(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var sa = { animationend: uu("Animation", "AnimationEnd"), animationiteration: uu("Animation", "AnimationIteration"), animationstart: uu("Animation", "AnimationStart"), transitionend: uu("Transition", "TransitionEnd") }, Hd = {}, rE = {};
jn && (rE = document.createElement("div").style, "AnimationEvent" in window || (delete sa.animationend.animation, delete sa.animationiteration.animation, delete sa.animationstart.animation), "TransitionEvent" in window || delete sa.transitionend.transition);
function Df(e) {
  if (Hd[e]) return Hd[e];
  if (!sa[e]) return e;
  var t = sa[e], r;
  for (r in t) if (t.hasOwnProperty(r) && r in rE) return Hd[e] = t[r];
  return e;
}
var nE = Df("animationend"), iE = Df("animationiteration"), oE = Df("animationstart"), aE = Df("transitionend"), sE = /* @__PURE__ */ new Map(), Kg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Pi(e, t) {
  sE.set(e, t), Ro(t, [e]);
}
for (var Wd = 0; Wd < Kg.length; Wd++) {
  var qd = Kg[Wd], B2 = qd.toLowerCase(), H2 = qd[0].toUpperCase() + qd.slice(1);
  Pi(B2, "on" + H2);
}
Pi(nE, "onAnimationEnd");
Pi(iE, "onAnimationIteration");
Pi(oE, "onAnimationStart");
Pi("dblclick", "onDoubleClick");
Pi("focusin", "onFocus");
Pi("focusout", "onBlur");
Pi(aE, "onTransitionEnd");
ba("onMouseEnter", ["mouseout", "mouseover"]);
ba("onMouseLeave", ["mouseout", "mouseover"]);
ba("onPointerEnter", ["pointerout", "pointerover"]);
ba("onPointerLeave", ["pointerout", "pointerover"]);
Ro("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ro("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ro("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ro("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ro("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ro("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Os = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), W2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));
function Gg(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, B$(n, t, void 0, e), e.currentTarget = null;
}
function lE(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t) for (var a = n.length - 1; 0 <= a; a--) {
        var s = n[a], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== o && i.isPropagationStopped()) break e;
        Gg(i, s, u), o = l;
      }
      else for (a = 0; a < n.length; a++) {
        if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== o && i.isPropagationStopped()) break e;
        Gg(i, s, u), o = l;
      }
    }
  }
  if (bc) throw e = Eh, bc = !1, Eh = null, e;
}
function Ue(e, t) {
  var r = t[Dh];
  r === void 0 && (r = t[Dh] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (uE(t, e, 2, !1), r.add(n));
}
function Qd(e, t, r) {
  var n = 0;
  t && (n |= 4), uE(r, e, n, t);
}
var cu = "_reactListening" + Math.random().toString(36).slice(2);
function dl(e) {
  if (!e[cu]) {
    e[cu] = !0, mx.forEach(function(r) {
      r !== "selectionchange" && (W2.has(r) || Qd(r, !1, e), Qd(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cu] || (t[cu] = !0, Qd("selectionchange", !1, t));
  }
}
function uE(e, t, r, n) {
  switch (qx(t)) {
    case 1:
      var i = o2;
      break;
    case 4:
      i = a2;
      break;
    default:
      i = gm;
  }
  r = i.bind(null, t, r, e), i = void 0, !xh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: i }) : e.addEventListener(t, r, !0) : i !== void 0 ? e.addEventListener(t, r, { passive: i }) : e.addEventListener(t, r, !1);
}
function Kd(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var a = n.tag;
    if (a === 3 || a === 4) {
      var s = n.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (a === 4) for (a = n.return; a !== null; ) {
        var l = a.tag;
        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        a = a.return;
      }
      for (; s !== null; ) {
        if (a = Ji(s), a === null) return;
        if (l = a.tag, l === 5 || l === 6) {
          n = o = a;
          continue e;
        }
        s = s.parentNode;
      }
    }
    n = n.return;
  }
  Dx(function() {
    var u = o, c = hm(r), f = [];
    e: {
      var d = sE.get(e);
      if (d !== void 0) {
        var w = Sm, h = e;
        switch (e) {
          case "keypress":
            if (Bu(r) === 0) break e;
          case "keydown":
          case "keyup":
            w = x2;
            break;
          case "focusin":
            h = "focus", w = Ud;
            break;
          case "focusout":
            h = "blur", w = Ud;
            break;
          case "beforeblur":
          case "afterblur":
            w = Ud;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Lg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = u2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = k2;
            break;
          case nE:
          case iE:
          case oE:
            w = d2;
            break;
          case aE:
            w = _2;
            break;
          case "scroll":
            w = s2;
            break;
          case "wheel":
            w = O2;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = h2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = jg;
        }
        var y = (t & 4) !== 0, m = !y && e === "scroll", v = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (g.tag === 5 && x !== null && (g = x, v !== null && (x = al(p, v), x != null && y.push(pl(p, x, g)))), m) break;
          p = p.return;
        }
        0 < y.length && (d = new w(d, h, null, r, c), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", d && r !== wh && (h = r.relatedTarget || r.fromElement) && (Ji(h) || h[zn])) break e;
        if ((w || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, w ? (h = r.relatedTarget || r.toElement, w = u, h = h ? Ji(h) : null, h !== null && (m = Po(h), h !== m || h.tag !== 5 && h.tag !== 6) && (h = null)) : (w = null, h = u), w !== h)) {
          if (y = Lg, x = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = jg, x = "onPointerLeave", v = "onPointerEnter", p = "pointer"), m = w == null ? d : la(w), g = h == null ? d : la(h), d = new y(x, p + "leave", w, r, c), d.target = m, d.relatedTarget = g, x = null, Ji(c) === u && (y = new y(v, p + "enter", h, r, c), y.target = g, y.relatedTarget = m, x = y), m = x, w && h) t: {
            for (y = w, v = h, p = 0, g = y; g; g = Vo(g)) p++;
            for (g = 0, x = v; x; x = Vo(x)) g++;
            for (; 0 < p - g; ) y = Vo(y), p--;
            for (; 0 < g - p; ) v = Vo(v), g--;
            for (; p--; ) {
              if (y === v || v !== null && y === v.alternate) break t;
              y = Vo(y), v = Vo(v);
            }
            y = null;
          }
          else y = null;
          w !== null && Yg(f, d, w, y, !1), h !== null && m !== null && Yg(f, m, h, y, !0);
        }
      }
      e: {
        if (d = u ? la(u) : window, w = d.nodeName && d.nodeName.toLowerCase(), w === "select" || w === "input" && d.type === "file") var E = M2;
        else if (Vg(d)) if (Jx) E = j2;
        else {
          E = L2;
          var C = N2;
        }
        else (w = d.nodeName) && w.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = I2);
        if (E && (E = E(e, u))) {
          Xx(f, E, r, c);
          break e;
        }
        C && C(e, d, u), e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && hh(d, "number", d.value);
      }
      switch (C = u ? la(u) : window, e) {
        case "focusin":
          (Vg(C) || C.contentEditable === "true") && (aa = C, _h = u, Us = null);
          break;
        case "focusout":
          Us = _h = aa = null;
          break;
        case "mousedown":
          $h = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $h = !1, Qg(f, r, c);
          break;
        case "selectionchange":
          if (V2) break;
        case "keydown":
        case "keyup":
          Qg(f, r, c);
      }
      var S;
      if (Em) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else oa ? Gx(e, r) && (b = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (b = "onCompositionStart");
      b && (Kx && r.locale !== "ko" && (oa || b !== "onCompositionStart" ? b === "onCompositionEnd" && oa && (S = Qx()) : (fi = c, wm = "value" in fi ? fi.value : fi.textContent, oa = !0)), C = Pc(u, b), 0 < C.length && (b = new Ig(b, e, null, r, c), f.push({ event: b, listeners: C }), S ? b.data = S : (S = Yx(r), S !== null && (b.data = S)))), (S = P2 ? T2(e, r) : D2(e, r)) && (u = Pc(u, "onBeforeInput"), 0 < u.length && (c = new Ig("onBeforeInput", "beforeinput", null, r, c), f.push({ event: c, listeners: u }), c.data = S));
    }
    lE(f, t);
  });
}
function pl(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Pc(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = al(e, r), o != null && n.unshift(pl(e, o, i)), o = al(e, t), o != null && n.push(pl(e, o, i))), e = e.return;
  }
  return n;
}
function Vo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yg(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = al(r, o), l != null && a.unshift(pl(r, l, s))) : i || (l = al(r, o), l != null && a.push(pl(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var q2 = /\r\n?/g, Q2 = /\u0000|\uFFFD/g;
function Xg(e) {
  return (typeof e == "string" ? e : "" + e).replace(q2, `
`).replace(Q2, "");
}
function fu(e, t, r) {
  if (t = Xg(t), Xg(e) !== t && r) throw Error(W(425));
}
function Tc() {
}
var Oh = null, Rh = null;
function Ph(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Th = typeof setTimeout == "function" ? setTimeout : void 0, K2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Jg = typeof Promise == "function" ? Promise : void 0, G2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jg < "u" ? function(e) {
  return Jg.resolve(null).then(e).catch(Y2);
} : Th;
function Y2(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gd(e, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e.removeChild(i), ul(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  ul(t);
}
function Si(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wa = Math.random().toString(36).slice(2), yn = "__reactFiber$" + Wa, hl = "__reactProps$" + Wa, zn = "__reactContainer$" + Wa, Dh = "__reactEvents$" + Wa, X2 = "__reactListeners$" + Wa, J2 = "__reactHandles$" + Wa;
function Ji(e) {
  var t = e[yn];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[zn] || r[yn]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Zg(e); e !== null; ) {
        if (r = e[yn]) return r;
        e = Zg(e);
      }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Nl(e) {
  return e = e[yn] || e[zn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function la(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function Af(e) {
  return e[hl] || null;
}
var Ah = [], ua = -1;
function Ti(e) {
  return { current: e };
}
function He(e) {
  0 > ua || (e.current = Ah[ua], Ah[ua] = null, ua--);
}
function je(e, t) {
  ua++, Ah[ua] = e.current, e.current = t;
}
var Oi = {}, At = Ti(Oi), tr = Ti(!1), vo = Oi;
function _a(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Oi;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in r) i[o] = t[o];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function rr(e) {
  return e = e.childContextTypes, e != null;
}
function Dc() {
  He(tr), He(At);
}
function e0(e, t, r) {
  if (At.current !== Oi) throw Error(W(168));
  je(At, t), je(tr, r);
}
function cE(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(W(108, N$(e) || "Unknown", i));
  return Ge({}, r, n);
}
function Ac(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Oi, vo = At.current, je(At, e), je(tr, tr.current), !0;
}
function t0(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(W(169));
  r ? (e = cE(e, t, vo), n.__reactInternalMemoizedMergedChildContext = e, He(tr), He(At), je(At, e)) : He(tr), je(tr, r);
}
var Fn = null, Ff = !1, Yd = !1;
function fE(e) {
  Fn === null ? Fn = [e] : Fn.push(e);
}
function Z2(e) {
  Ff = !0, fE(e);
}
function Di() {
  if (!Yd && Fn !== null) {
    Yd = !0;
    var e = 0, t = De;
    try {
      var r = Fn;
      for (De = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Fn = null, Ff = !1;
    } catch (i) {
      throw Fn !== null && (Fn = Fn.slice(e + 1)), Nx(ym, Di), i;
    } finally {
      De = t, Yd = !1;
    }
  }
  return null;
}
var ca = [], fa = 0, Fc = null, Mc = 0, Rr = [], Pr = 0, go = null, Mn = 1, Nn = "";
function zi(e, t) {
  ca[fa++] = Mc, ca[fa++] = Fc, Fc = e, Mc = t;
}
function dE(e, t, r) {
  Rr[Pr++] = Mn, Rr[Pr++] = Nn, Rr[Pr++] = go, go = e;
  var n = Mn;
  e = Nn;
  var i = 32 - Yr(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - Yr(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, Mn = 1 << 32 - Yr(t) + i | r << i | n, Nn = o + e;
  } else Mn = 1 << o | r << i | n, Nn = e;
}
function km(e) {
  e.return !== null && (zi(e, 1), dE(e, 1, 0));
}
function bm(e) {
  for (; e === Fc; ) Fc = ca[--fa], ca[fa] = null, Mc = ca[--fa], ca[fa] = null;
  for (; e === go; ) go = Rr[--Pr], Rr[Pr] = null, Nn = Rr[--Pr], Rr[Pr] = null, Mn = Rr[--Pr], Rr[Pr] = null;
}
var wr = null, gr = null, qe = !1, Wr = null;
function pE(e, t) {
  var r = Tr(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function r0(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wr = e, gr = Si(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wr = e, gr = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = go !== null ? { id: Mn, overflow: Nn } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Tr(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, wr = e, gr = null, !0) : !1;
    default:
      return !1;
  }
}
function Fh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mh(e) {
  if (qe) {
    var t = gr;
    if (t) {
      var r = t;
      if (!r0(e, t)) {
        if (Fh(e)) throw Error(W(418));
        t = Si(r.nextSibling);
        var n = wr;
        t && r0(e, t) ? pE(n, r) : (e.flags = e.flags & -4097 | 2, qe = !1, wr = e);
      }
    } else {
      if (Fh(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, qe = !1, wr = e;
    }
  }
}
function n0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  wr = e;
}
function du(e) {
  if (e !== wr) return !1;
  if (!qe) return n0(e), qe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ph(e.type, e.memoizedProps)), t && (t = gr)) {
    if (Fh(e)) throw hE(), Error(W(418));
    for (; t; ) pE(e, t), t = Si(t.nextSibling);
  }
  if (n0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              gr = Si(e.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      gr = null;
    }
  } else gr = wr ? Si(e.stateNode.nextSibling) : null;
  return !0;
}
function hE() {
  for (var e = gr; e; ) e = Si(e.nextSibling);
}
function $a() {
  gr = wr = null, qe = !1;
}
function _m(e) {
  Wr === null ? Wr = [e] : Wr.push(e);
}
var eO = qn.ReactCurrentBatchConfig;
function fs(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(W(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(W(147, e));
      var i = n, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var s = i.refs;
        a === null ? delete s[o] : s[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!r._owner) throw Error(W(290, e));
  }
  return e;
}
function pu(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function i0(e) {
  var t = e._init;
  return t(e._payload);
}
function yE(e) {
  function t(v, p) {
    if (e) {
      var g = v.deletions;
      g === null ? (v.deletions = [p], v.flags |= 16) : g.push(p);
    }
  }
  function r(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), p = p.sibling;
    return null;
  }
  function n(v, p) {
    for (v = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
    return v;
  }
  function i(v, p) {
    return v = ki(v, p), v.index = 0, v.sibling = null, v;
  }
  function o(v, p, g) {
    return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < p ? (v.flags |= 2, p) : g) : (v.flags |= 2, p)) : (v.flags |= 1048576, p);
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, p, g, x) {
    return p === null || p.tag !== 6 ? (p = np(g, v.mode, x), p.return = v, p) : (p = i(p, g), p.return = v, p);
  }
  function l(v, p, g, x) {
    var E = g.type;
    return E === ia ? c(v, p, g.props.children, x, g.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ii && i0(E) === p.type) ? (x = i(p, g.props), x.ref = fs(v, p, g), x.return = v, x) : (x = Yu(g.type, g.key, g.props, null, v.mode, x), x.ref = fs(v, p, g), x.return = v, x);
  }
  function u(v, p, g, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = ip(g, v.mode, x), p.return = v, p) : (p = i(p, g.children || []), p.return = v, p);
  }
  function c(v, p, g, x, E) {
    return p === null || p.tag !== 7 ? (p = uo(g, v.mode, x, E), p.return = v, p) : (p = i(p, g), p.return = v, p);
  }
  function f(v, p, g) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = np("" + p, v.mode, g), p.return = v, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ru:
          return g = Yu(p.type, p.key, p.props, null, v.mode, g), g.ref = fs(v, null, p), g.return = v, g;
        case na:
          return p = ip(p, v.mode, g), p.return = v, p;
        case ii:
          var x = p._init;
          return f(v, x(p._payload), g);
      }
      if (_s(p) || as(p)) return p = uo(p, v.mode, g, null), p.return = v, p;
      pu(v, p);
    }
    return null;
  }
  function d(v, p, g, x) {
    var E = p !== null ? p.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return E !== null ? null : s(v, p, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ru:
          return g.key === E ? l(v, p, g, x) : null;
        case na:
          return g.key === E ? u(v, p, g, x) : null;
        case ii:
          return E = g._init, d(
            v,
            p,
            E(g._payload),
            x
          );
      }
      if (_s(g) || as(g)) return E !== null ? null : c(v, p, g, x, null);
      pu(v, g);
    }
    return null;
  }
  function w(v, p, g, x, E) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return v = v.get(g) || null, s(p, v, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ru:
          return v = v.get(x.key === null ? g : x.key) || null, l(p, v, x, E);
        case na:
          return v = v.get(x.key === null ? g : x.key) || null, u(p, v, x, E);
        case ii:
          var C = x._init;
          return w(v, p, g, C(x._payload), E);
      }
      if (_s(x) || as(x)) return v = v.get(g) || null, c(p, v, x, E, null);
      pu(p, x);
    }
    return null;
  }
  function h(v, p, g, x) {
    for (var E = null, C = null, S = p, b = p = 0, $ = null; S !== null && b < g.length; b++) {
      S.index > b ? ($ = S, S = null) : $ = S.sibling;
      var k = d(v, S, g[b], x);
      if (k === null) {
        S === null && (S = $);
        break;
      }
      e && S && k.alternate === null && t(v, S), p = o(k, p, b), C === null ? E = k : C.sibling = k, C = k, S = $;
    }
    if (b === g.length) return r(v, S), qe && zi(v, b), E;
    if (S === null) {
      for (; b < g.length; b++) S = f(v, g[b], x), S !== null && (p = o(S, p, b), C === null ? E = S : C.sibling = S, C = S);
      return qe && zi(v, b), E;
    }
    for (S = n(v, S); b < g.length; b++) $ = w(S, v, b, g[b], x), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? b : $.key), p = o($, p, b), C === null ? E = $ : C.sibling = $, C = $);
    return e && S.forEach(function(_) {
      return t(v, _);
    }), qe && zi(v, b), E;
  }
  function y(v, p, g, x) {
    var E = as(g);
    if (typeof E != "function") throw Error(W(150));
    if (g = E.call(g), g == null) throw Error(W(151));
    for (var C = E = null, S = p, b = p = 0, $ = null, k = g.next(); S !== null && !k.done; b++, k = g.next()) {
      S.index > b ? ($ = S, S = null) : $ = S.sibling;
      var _ = d(v, S, k.value, x);
      if (_ === null) {
        S === null && (S = $);
        break;
      }
      e && S && _.alternate === null && t(v, S), p = o(_, p, b), C === null ? E = _ : C.sibling = _, C = _, S = $;
    }
    if (k.done) return r(
      v,
      S
    ), qe && zi(v, b), E;
    if (S === null) {
      for (; !k.done; b++, k = g.next()) k = f(v, k.value, x), k !== null && (p = o(k, p, b), C === null ? E = k : C.sibling = k, C = k);
      return qe && zi(v, b), E;
    }
    for (S = n(v, S); !k.done; b++, k = g.next()) k = w(S, v, b, k.value, x), k !== null && (e && k.alternate !== null && S.delete(k.key === null ? b : k.key), p = o(k, p, b), C === null ? E = k : C.sibling = k, C = k);
    return e && S.forEach(function(P) {
      return t(v, P);
    }), qe && zi(v, b), E;
  }
  function m(v, p, g, x) {
    if (typeof g == "object" && g !== null && g.type === ia && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ru:
          e: {
            for (var E = g.key, C = p; C !== null; ) {
              if (C.key === E) {
                if (E = g.type, E === ia) {
                  if (C.tag === 7) {
                    r(v, C.sibling), p = i(C, g.props.children), p.return = v, v = p;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ii && i0(E) === C.type) {
                  r(v, C.sibling), p = i(C, g.props), p.ref = fs(v, C, g), p.return = v, v = p;
                  break e;
                }
                r(v, C);
                break;
              } else t(v, C);
              C = C.sibling;
            }
            g.type === ia ? (p = uo(g.props.children, v.mode, x, g.key), p.return = v, v = p) : (x = Yu(g.type, g.key, g.props, null, v.mode, x), x.ref = fs(v, p, g), x.return = v, v = x);
          }
          return a(v);
        case na:
          e: {
            for (C = g.key; p !== null; ) {
              if (p.key === C) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                r(v, p.sibling), p = i(p, g.children || []), p.return = v, v = p;
                break e;
              } else {
                r(v, p);
                break;
              }
              else t(v, p);
              p = p.sibling;
            }
            p = ip(g, v.mode, x), p.return = v, v = p;
          }
          return a(v);
        case ii:
          return C = g._init, m(v, p, C(g._payload), x);
      }
      if (_s(g)) return h(v, p, g, x);
      if (as(g)) return y(v, p, g, x);
      pu(v, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (r(v, p.sibling), p = i(p, g), p.return = v, v = p) : (r(v, p), p = np(g, v.mode, x), p.return = v, v = p), a(v)) : r(v, p);
  }
  return m;
}
var Oa = yE(!0), mE = yE(!1), Nc = Ti(null), Lc = null, da = null, $m = null;
function Om() {
  $m = da = Lc = null;
}
function Rm(e) {
  var t = Nc.current;
  He(Nc), e._currentValue = t;
}
function Nh(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
    e = e.return;
  }
}
function Ea(e, t) {
  Lc = e, $m = da = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (er = !0), e.firstContext = null);
}
function Fr(e) {
  var t = e._currentValue;
  if ($m !== e) if (e = { context: e, memoizedValue: t, next: null }, da === null) {
    if (Lc === null) throw Error(W(308));
    da = e, Lc.dependencies = { lanes: 0, firstContext: e };
  } else da = da.next = e;
  return t;
}
var Zi = null;
function Pm(e) {
  Zi === null ? Zi = [e] : Zi.push(e);
}
function vE(e, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, Pm(t)) : (r.next = i.next, i.next = r), t.interleaved = r, Un(e, n);
}
function Un(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var oi = !1;
function Tm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gE(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function In(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xi(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (n = n.shared, _e & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, Un(e, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, Pm(n)) : (t.next = i.next, i.next = t), n.interleaved = t, Un(e, r);
}
function Hu(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, mm(e, r);
  }
}
function o0(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, o = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        o === null ? i = o = a : o = o.next = a, r = r.next;
      } while (r !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Ic(e, t, r, n) {
  var i = e.updateQueue;
  oi = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? o = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = i.baseState;
    a = 0, c = u = l = null, s = o;
    do {
      var d = s.lane, w = s.eventTime;
      if ((n & d) === d) {
        c !== null && (c = c.next = {
          eventTime: w,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var h = e, y = s;
          switch (d = t, w = r, y.tag) {
            case 1:
              if (h = y.payload, typeof h == "function") {
                f = h.call(w, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = y.payload, d = typeof h == "function" ? h.call(w, f, d) : h, d == null) break e;
              f = Ge({}, f, d);
              break e;
            case 2:
              oi = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [s] : d.push(s));
      } else w = { eventTime: w, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = w, l = f) : c = c.next = w, a |= d;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        d = s, s = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    So |= a, e.lanes = a, e.memoizedState = f;
  }
}
function a0(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var n = e[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(W(191, i));
      i.call(n);
    }
  }
}
var Ll = {}, wn = Ti(Ll), yl = Ti(Ll), ml = Ti(Ll);
function eo(e) {
  if (e === Ll) throw Error(W(174));
  return e;
}
function Dm(e, t) {
  switch (je(ml, t), je(yl, e), je(wn, Ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mh(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = mh(t, e);
  }
  He(wn), je(wn, t);
}
function Ra() {
  He(wn), He(yl), He(ml);
}
function wE(e) {
  eo(ml.current);
  var t = eo(wn.current), r = mh(t, e.type);
  t !== r && (je(yl, e), je(wn, r));
}
function Am(e) {
  yl.current === e && (He(wn), He(yl));
}
var Qe = Ti(0);
function jc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Xd = [];
function Fm() {
  for (var e = 0; e < Xd.length; e++) Xd[e]._workInProgressVersionPrimary = null;
  Xd.length = 0;
}
var Wu = qn.ReactCurrentDispatcher, Jd = qn.ReactCurrentBatchConfig, wo = 0, Ke = null, dt = null, yt = null, zc = !1, Vs = !1, vl = 0, tO = 0;
function Ot() {
  throw Error(W(321));
}
function Mm(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!Zr(e[r], t[r])) return !1;
  return !0;
}
function Nm(e, t, r, n, i, o) {
  if (wo = o, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wu.current = e === null || e.memoizedState === null ? oO : aO, e = r(n, i), Vs) {
    o = 0;
    do {
      if (Vs = !1, vl = 0, 25 <= o) throw Error(W(301));
      o += 1, yt = dt = null, t.updateQueue = null, Wu.current = sO, e = r(n, i);
    } while (Vs);
  }
  if (Wu.current = Uc, t = dt !== null && dt.next !== null, wo = 0, yt = dt = Ke = null, zc = !1, t) throw Error(W(300));
  return e;
}
function Lm() {
  var e = vl !== 0;
  return vl = 0, e;
}
function cn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return yt === null ? Ke.memoizedState = yt = e : yt = yt.next = e, yt;
}
function Mr() {
  if (dt === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = yt === null ? Ke.memoizedState : yt.next;
  if (t !== null) yt = t, dt = e;
  else {
    if (e === null) throw Error(W(310));
    dt = e, e = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }, yt === null ? Ke.memoizedState = yt = e : yt = yt.next = e;
  }
  return yt;
}
function gl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zd(e) {
  var t = Mr(), r = t.queue;
  if (r === null) throw Error(W(311));
  r.lastRenderedReducer = e;
  var n = dt, i = n.baseQueue, o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    n.baseQueue = i = o, r.pending = null;
  }
  if (i !== null) {
    o = i.next, n = n.baseState;
    var s = a = null, l = null, u = o;
    do {
      var c = u.lane;
      if ((wo & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = f, a = n) : l = l.next = f, Ke.lanes |= c, So |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? a = n : l.next = s, Zr(n, t.memoizedState) || (er = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Ke.lanes |= o, So |= o, i = i.next;
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ep(e) {
  var t = Mr(), r = t.queue;
  if (r === null) throw Error(W(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, i = r.pending, o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    Zr(o, t.memoizedState) || (er = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), r.lastRenderedState = o;
  }
  return [o, n];
}
function SE() {
}
function xE(e, t) {
  var r = Ke, n = Mr(), i = t(), o = !Zr(n.memoizedState, i);
  if (o && (n.memoizedState = i, er = !0), n = n.queue, Im(kE.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || yt !== null && yt.memoizedState.tag & 1) {
    if (r.flags |= 2048, wl(9, CE.bind(null, r, n, i, t), void 0, null), mt === null) throw Error(W(349));
    wo & 30 || EE(r, t, i);
  }
  return i;
}
function EE(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function CE(e, t, r, n) {
  t.value = r, t.getSnapshot = n, bE(t) && _E(e);
}
function kE(e, t, r) {
  return r(function() {
    bE(t) && _E(e);
  });
}
function bE(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Zr(e, r);
  } catch {
    return !0;
  }
}
function _E(e) {
  var t = Un(e, 1);
  t !== null && Xr(t, e, 1, -1);
}
function s0(e) {
  var t = cn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gl, lastRenderedState: e }, t.queue = e, e = e.dispatch = iO.bind(null, Ke, e), [t.memoizedState, e];
}
function wl(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function $E() {
  return Mr().memoizedState;
}
function qu(e, t, r, n) {
  var i = cn();
  Ke.flags |= e, i.memoizedState = wl(1 | t, r, void 0, n === void 0 ? null : n);
}
function Mf(e, t, r, n) {
  var i = Mr();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (dt !== null) {
    var a = dt.memoizedState;
    if (o = a.destroy, n !== null && Mm(n, a.deps)) {
      i.memoizedState = wl(t, r, o, n);
      return;
    }
  }
  Ke.flags |= e, i.memoizedState = wl(1 | t, r, o, n);
}
function l0(e, t) {
  return qu(8390656, 8, e, t);
}
function Im(e, t) {
  return Mf(2048, 8, e, t);
}
function OE(e, t) {
  return Mf(4, 2, e, t);
}
function RE(e, t) {
  return Mf(4, 4, e, t);
}
function PE(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function TE(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Mf(4, 4, PE.bind(null, t, e), r);
}
function jm() {
}
function DE(e, t) {
  var r = Mr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Mm(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function AE(e, t) {
  var r = Mr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Mm(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function FE(e, t, r) {
  return wo & 21 ? (Zr(r, t) || (r = jx(), Ke.lanes |= r, So |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, er = !0), e.memoizedState = r);
}
function rO(e, t) {
  var r = De;
  De = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Jd.transition;
  Jd.transition = {};
  try {
    e(!1), t();
  } finally {
    De = r, Jd.transition = n;
  }
}
function ME() {
  return Mr().memoizedState;
}
function nO(e, t, r) {
  var n = Ci(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, NE(e)) LE(t, r);
  else if (r = vE(e, t, r, n), r !== null) {
    var i = zt();
    Xr(r, e, n, i), IE(r, t, n);
  }
}
function iO(e, t, r) {
  var n = Ci(e), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (NE(e)) LE(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var a = t.lastRenderedState, s = o(a, r);
      if (i.hasEagerState = !0, i.eagerState = s, Zr(s, a)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Pm(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = vE(e, t, i, n), r !== null && (i = zt(), Xr(r, e, n, i), IE(r, t, n));
  }
}
function NE(e) {
  var t = e.alternate;
  return e === Ke || t !== null && t === Ke;
}
function LE(e, t) {
  Vs = zc = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function IE(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, mm(e, r);
  }
}
var Uc = { readContext: Fr, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useInsertionEffect: Ot, useLayoutEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useMutableSource: Ot, useSyncExternalStore: Ot, useId: Ot, unstable_isNewReconciler: !1 }, oO = { readContext: Fr, useCallback: function(e, t) {
  return cn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fr, useEffect: l0, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, qu(
    4194308,
    4,
    PE.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return qu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return qu(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = cn();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = cn();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = nO.bind(null, Ke, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = cn();
  return e = { current: e }, t.memoizedState = e;
}, useState: s0, useDebugValue: jm, useDeferredValue: function(e) {
  return cn().memoizedState = e;
}, useTransition: function() {
  var e = s0(!1), t = e[0];
  return e = rO.bind(null, e[1]), cn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Ke, i = cn();
  if (qe) {
    if (r === void 0) throw Error(W(407));
    r = r();
  } else {
    if (r = t(), mt === null) throw Error(W(349));
    wo & 30 || EE(n, t, r);
  }
  i.memoizedState = r;
  var o = { value: r, getSnapshot: t };
  return i.queue = o, l0(kE.bind(
    null,
    n,
    o,
    e
  ), [e]), n.flags |= 2048, wl(9, CE.bind(null, n, o, r, t), void 0, null), r;
}, useId: function() {
  var e = cn(), t = mt.identifierPrefix;
  if (qe) {
    var r = Nn, n = Mn;
    r = (n & ~(1 << 32 - Yr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = vl++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = tO++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aO = {
  readContext: Fr,
  useCallback: DE,
  useContext: Fr,
  useEffect: Im,
  useImperativeHandle: TE,
  useInsertionEffect: OE,
  useLayoutEffect: RE,
  useMemo: AE,
  useReducer: Zd,
  useRef: $E,
  useState: function() {
    return Zd(gl);
  },
  useDebugValue: jm,
  useDeferredValue: function(e) {
    var t = Mr();
    return FE(t, dt.memoizedState, e);
  },
  useTransition: function() {
    var e = Zd(gl)[0], t = Mr().memoizedState;
    return [e, t];
  },
  useMutableSource: SE,
  useSyncExternalStore: xE,
  useId: ME,
  unstable_isNewReconciler: !1
}, sO = { readContext: Fr, useCallback: DE, useContext: Fr, useEffect: Im, useImperativeHandle: TE, useInsertionEffect: OE, useLayoutEffect: RE, useMemo: AE, useReducer: ep, useRef: $E, useState: function() {
  return ep(gl);
}, useDebugValue: jm, useDeferredValue: function(e) {
  var t = Mr();
  return dt === null ? t.memoizedState = e : FE(t, dt.memoizedState, e);
}, useTransition: function() {
  var e = ep(gl)[0], t = Mr().memoizedState;
  return [e, t];
}, useMutableSource: SE, useSyncExternalStore: xE, useId: ME, unstable_isNewReconciler: !1 };
function Vr(e, t) {
  if (e && e.defaultProps) {
    t = Ge({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Lh(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Ge({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Nf = { isMounted: function(e) {
  return (e = e._reactInternals) ? Po(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = zt(), i = Ci(e), o = In(n, i);
  o.payload = t, r != null && (o.callback = r), t = xi(e, o, i), t !== null && (Xr(t, e, i, n), Hu(t, e, i));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = zt(), i = Ci(e), o = In(n, i);
  o.tag = 1, o.payload = t, r != null && (o.callback = r), t = xi(e, o, i), t !== null && (Xr(t, e, i, n), Hu(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = zt(), n = Ci(e), i = In(r, n);
  i.tag = 2, t != null && (i.callback = t), t = xi(e, i, n), t !== null && (Xr(t, e, n, r), Hu(t, e, n));
} };
function u0(e, t, r, n, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, a) : t.prototype && t.prototype.isPureReactComponent ? !fl(r, n) || !fl(i, o) : !0;
}
function jE(e, t, r) {
  var n = !1, i = Oi, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fr(o) : (i = rr(t) ? vo : At.current, n = t.contextTypes, o = (n = n != null) ? _a(e, i) : Oi), t = new t(r, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nf, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function c0(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Nf.enqueueReplaceState(t, t.state, null);
}
function Ih(e, t, r, n) {
  var i = e.stateNode;
  i.props = r, i.state = e.memoizedState, i.refs = {}, Tm(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Fr(o) : (o = rr(t) ? vo : At.current, i.context = _a(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Lh(e, t, o, r), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Nf.enqueueReplaceState(i, i.state, null), Ic(e, r, i, n), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pa(e, t) {
  try {
    var r = "", n = t;
    do
      r += M$(n), n = n.return;
    while (n);
    var i = r;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function tp(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function jh(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var lO = typeof WeakMap == "function" ? WeakMap : Map;
function zE(e, t, r) {
  r = In(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Bc || (Bc = !0, Gh = n), jh(e, t);
  }, r;
}
function UE(e, t, r) {
  r = In(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      jh(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (r.callback = function() {
    jh(e, t), typeof n != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function f0(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new lO();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e = EO.bind(null, e, t, r), t.then(e, e));
}
function d0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function p0(e, t, r, n, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = In(-1, 1), t.tag = 2, xi(r, t, 1))), r.lanes |= 1), e);
}
var uO = qn.ReactCurrentOwner, er = !1;
function Lt(e, t, r, n) {
  t.child = e === null ? mE(t, null, r, n) : Oa(t, e.child, r, n);
}
function h0(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return Ea(t, i), n = Nm(e, t, r, n, o, i), r = Lm(), e !== null && !er ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Vn(e, t, i)) : (qe && r && km(t), t.flags |= 1, Lt(e, t, n, i), t.child);
}
function y0(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !Qm(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = o, VE(e, t, o, n, i)) : (e = Yu(r.type, null, n, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (r = r.compare, r = r !== null ? r : fl, r(a, n) && e.ref === t.ref) return Vn(e, t, i);
  }
  return t.flags |= 1, e = ki(o, n), e.ref = t.ref, e.return = t, t.child = e;
}
function VE(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (fl(o, n) && e.ref === t.ref) if (er = !1, t.pendingProps = n = o, (e.lanes & i) !== 0) e.flags & 131072 && (er = !0);
    else return t.lanes = e.lanes, Vn(e, t, i);
  }
  return zh(e, t, r, n, i);
}
function BE(e, t, r) {
  var n = t.pendingProps, i = n.children, o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(ha, fr), fr |= r;
  else {
    if (!(r & 1073741824)) return e = o !== null ? o.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, je(ha, fr), fr |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : r, je(ha, fr), fr |= n;
  }
  else o !== null ? (n = o.baseLanes | r, t.memoizedState = null) : n = r, je(ha, fr), fr |= n;
  return Lt(e, t, i, r), t.child;
}
function HE(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function zh(e, t, r, n, i) {
  var o = rr(r) ? vo : At.current;
  return o = _a(t, o), Ea(t, i), r = Nm(e, t, r, n, o, i), n = Lm(), e !== null && !er ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Vn(e, t, i)) : (qe && n && km(t), t.flags |= 1, Lt(e, t, r, i), t.child);
}
function m0(e, t, r, n, i) {
  if (rr(r)) {
    var o = !0;
    Ac(t);
  } else o = !1;
  if (Ea(t, i), t.stateNode === null) Qu(e, t), jE(t, r, n), Ih(t, r, n, i), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Fr(u) : (u = rr(r) ? vo : At.current, u = _a(t, u));
    var c = r.getDerivedStateFromProps, f = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && c0(t, a, n, u), oi = !1;
    var d = t.memoizedState;
    a.state = d, Ic(t, n, a, i), l = t.memoizedState, s !== n || d !== l || tr.current || oi ? (typeof c == "function" && (Lh(t, r, c, n), l = t.memoizedState), (s = oi || u0(t, r, s, n, d, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, gE(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Vr(t.type, s), a.props = u, f = t.pendingProps, d = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Fr(l) : (l = rr(r) ? vo : At.current, l = _a(t, l));
    var w = r.getDerivedStateFromProps;
    (c = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || d !== l) && c0(t, a, n, l), oi = !1, d = t.memoizedState, a.state = d, Ic(t, n, a, i);
    var h = t.memoizedState;
    s !== f || d !== h || tr.current || oi ? (typeof w == "function" && (Lh(t, r, w, n), h = t.memoizedState), (u = oi || u0(t, r, u, n, d, h, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, h, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, h, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = h), a.props = n, a.state = h, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return Uh(e, t, r, n, o, i);
}
function Uh(e, t, r, n, i, o) {
  HE(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && t0(t, r, !1), Vn(e, t, o);
  n = t.stateNode, uO.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Oa(t, e.child, null, o), t.child = Oa(t, null, s, o)) : Lt(e, t, s, o), t.memoizedState = n.state, i && t0(t, r, !0), t.child;
}
function WE(e) {
  var t = e.stateNode;
  t.pendingContext ? e0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && e0(e, t.context, !1), Dm(e, t.containerInfo);
}
function v0(e, t, r, n, i) {
  return $a(), _m(i), t.flags |= 256, Lt(e, t, r, n), t.child;
}
var Vh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qE(e, t, r) {
  var n = t.pendingProps, i = Qe.current, o = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), je(Qe, i & 1), e === null)
    return Mh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, o ? (n = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = jf(a, n, 0, null), e = uo(e, n, r, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Bh(r), t.memoizedState = Vh, e) : zm(t, a));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return cO(e, t, a, n, s, i, r);
  if (o) {
    o = n.fallback, a = t.mode, i = e.child, s = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = ki(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = ki(s, o) : (o = uo(o, a, r, null), o.flags |= 2), o.return = t, n.return = t, n.sibling = o, t.child = n, n = o, o = t.child, a = e.child.memoizedState, a = a === null ? Bh(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~r, t.memoizedState = Vh, n;
  }
  return o = e.child, e = o.sibling, n = ki(o, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function zm(e, t) {
  return t = jf({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function hu(e, t, r, n) {
  return n !== null && _m(n), Oa(t, e.child, null, r), e = zm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function cO(e, t, r, n, i, o, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = tp(Error(W(422))), hu(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = n.fallback, i = t.mode, n = jf({ mode: "visible", children: n.children }, i, 0, null), o = uo(o, i, a, null), o.flags |= 2, n.return = t, o.return = t, n.sibling = o, t.child = n, t.mode & 1 && Oa(t, e.child, null, a), t.child.memoizedState = Bh(a), t.memoizedState = Vh, o);
  if (!(t.mode & 1)) return hu(e, t, a, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var s = n.dgst;
    return n = s, o = Error(W(419)), n = tp(o, n, void 0), hu(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, er || s) {
    if (n = mt, n !== null) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Un(e, i), Xr(n, e, i, -1));
    }
    return qm(), n = tp(Error(W(421))), hu(e, t, a, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = CO.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, gr = Si(i.nextSibling), wr = t, qe = !0, Wr = null, e !== null && (Rr[Pr++] = Mn, Rr[Pr++] = Nn, Rr[Pr++] = go, Mn = e.id, Nn = e.overflow, go = t), t = zm(t, n.children), t.flags |= 4096, t);
}
function g0(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Nh(e.return, t, r);
}
function rp(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = r, o.tailMode = i);
}
function QE(e, t, r) {
  var n = t.pendingProps, i = n.revealOrder, o = n.tail;
  if (Lt(e, t, n.children, r), n = Qe.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && g0(e, r, t);
      else if (e.tag === 19) g0(e, r, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    n &= 1;
  }
  if (je(Qe, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e = r.alternate, e !== null && jc(e) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), rp(t, !1, i, r, o);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && jc(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = r, r = i, i = e;
      }
      rp(t, !0, r, null, o);
      break;
    case "together":
      rp(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Vn(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), So |= t.lanes, !(r & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, r = ki(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = ki(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function fO(e, t, r) {
  switch (t.tag) {
    case 3:
      WE(t), $a();
      break;
    case 5:
      wE(t);
      break;
    case 1:
      rr(t.type) && Ac(t);
      break;
    case 4:
      Dm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      je(Nc, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (je(Qe, Qe.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? qE(e, t, r) : (je(Qe, Qe.current & 1), e = Vn(e, t, r), e !== null ? e.sibling : null);
      je(Qe, Qe.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n) return QE(e, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), je(Qe, Qe.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, BE(e, t, r);
  }
  return Vn(e, t, r);
}
var KE, Hh, GE, YE;
KE = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Hh = function() {
};
GE = function(e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    e = t.stateNode, eo(wn.current);
    var o = null;
    switch (r) {
      case "input":
        i = dh(e, i), n = dh(e, n), o = [];
        break;
      case "select":
        i = Ge({}, i, { value: void 0 }), n = Ge({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = yh(e, i), n = yh(e, n), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Tc);
    }
    vh(r, n);
    var a;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (a in s) s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (il.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = i?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (a in s) !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
        for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a]);
      } else r || (o || (o = []), o.push(
        u,
        r
      )), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (il.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ue("scroll", e), o || s === l || (o = [])) : (o = o || []).push(u, l));
    }
    r && (o = o || []).push("style", r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
YE = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ds(e, t) {
  if (!qe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
  }
}
function Rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t) for (var i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function dO(e, t, r) {
  var n = t.pendingProps;
  switch (bm(t), t.tag) {
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
      return Rt(t), null;
    case 1:
      return rr(t.type) && Dc(), Rt(t), null;
    case 3:
      return n = t.stateNode, Ra(), He(tr), He(At), Fm(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (du(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Wr !== null && (Jh(Wr), Wr = null))), Hh(e, t), Rt(t), null;
    case 5:
      Am(t);
      var i = eo(ml.current);
      if (r = t.type, e !== null && t.stateNode != null) GE(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(W(166));
          return Rt(t), null;
        }
        if (e = eo(wn.current), du(t)) {
          n = t.stateNode, r = t.type;
          var o = t.memoizedProps;
          switch (n[yn] = t, n[hl] = o, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Ue("cancel", n), Ue("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Os.length; i++) Ue(Os[i], n);
              break;
            case "source":
              Ue("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ue(
                "error",
                n
              ), Ue("load", n);
              break;
            case "details":
              Ue("toggle", n);
              break;
            case "input":
              $g(n, o), Ue("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, Ue("invalid", n);
              break;
            case "textarea":
              Rg(n, o), Ue("invalid", n);
          }
          vh(r, o), i = null;
          for (var a in o) if (o.hasOwnProperty(a)) {
            var s = o[a];
            a === "children" ? typeof s == "string" ? n.textContent !== s && (o.suppressHydrationWarning !== !0 && fu(n.textContent, s, e), i = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && fu(
              n.textContent,
              s,
              e
            ), i = ["children", "" + s]) : il.hasOwnProperty(a) && s != null && a === "onScroll" && Ue("scroll", n);
          }
          switch (r) {
            case "input":
              nu(n), Og(n, o, !0);
              break;
            case "textarea":
              nu(n), Pg(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Tc);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kx(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[yn] = t, e[hl] = n, KE(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = gh(r, n), r) {
              case "dialog":
                Ue("cancel", e), Ue("close", e), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", e), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Os.length; i++) Ue(Os[i], e);
                i = n;
                break;
              case "source":
                Ue("error", e), i = n;
                break;
              case "img":
              case "image":
              case "link":
                Ue(
                  "error",
                  e
                ), Ue("load", e), i = n;
                break;
              case "details":
                Ue("toggle", e), i = n;
                break;
              case "input":
                $g(e, n), i = dh(e, n), Ue("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, i = Ge({}, n, { value: void 0 }), Ue("invalid", e);
                break;
              case "textarea":
                Rg(e, n), i = yh(e, n), Ue("invalid", e);
                break;
              default:
                i = n;
            }
            vh(r, i), s = i;
            for (o in s) if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "style" ? $x(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && bx(e, l)) : o === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && ol(e, l) : typeof l == "number" && ol(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (il.hasOwnProperty(o) ? l != null && o === "onScroll" && Ue("scroll", e) : l != null && cm(e, o, l, a));
            }
            switch (r) {
              case "input":
                nu(e), Og(e, n, !1);
                break;
              case "textarea":
                nu(e), Pg(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + $i(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, o = n.value, o != null ? ga(e, !!n.multiple, o, !1) : n.defaultValue != null && ga(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Tc);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Rt(t), null;
    case 6:
      if (e && t.stateNode != null) YE(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(W(166));
        if (r = eo(ml.current), eo(wn.current), du(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[yn] = t, (o = n.nodeValue !== r) && (e = wr, e !== null)) switch (e.tag) {
            case 3:
              fu(n.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && fu(n.nodeValue, r, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[yn] = t, t.stateNode = n;
      }
      return Rt(t), null;
    case 13:
      if (He(Qe), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (qe && gr !== null && t.mode & 1 && !(t.flags & 128)) hE(), $a(), t.flags |= 98560, o = !1;
        else if (o = du(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(W(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(W(317));
            o[yn] = t;
          } else $a(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Rt(t), o = !1;
        } else Wr !== null && (Jh(Wr), Wr = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Qe.current & 1 ? pt === 0 && (pt = 3) : qm())), t.updateQueue !== null && (t.flags |= 4), Rt(t), null);
    case 4:
      return Ra(), Hh(e, t), e === null && dl(t.stateNode.containerInfo), Rt(t), null;
    case 10:
      return Rm(t.type._context), Rt(t), null;
    case 17:
      return rr(t.type) && Dc(), Rt(t), null;
    case 19:
      if (He(Qe), o = t.memoizedState, o === null) return Rt(t), null;
      if (n = (t.flags & 128) !== 0, a = o.rendering, a === null) if (n) ds(o, !1);
      else {
        if (pt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = jc(e), a !== null) {
            for (t.flags |= 128, ds(o, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) o = r, e = n, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return je(Qe, Qe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && nt() > Ta && (t.flags |= 128, n = !0, ds(o, !1), t.lanes = 4194304);
      }
      else {
        if (!n) if (e = jc(a), e !== null) {
          if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), ds(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !qe) return Rt(t), null;
        } else 2 * nt() - o.renderingStartTime > Ta && r !== 1073741824 && (t.flags |= 128, n = !0, ds(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (r = o.last, r !== null ? r.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = nt(), t.sibling = null, r = Qe.current, je(Qe, n ? r & 1 | 2 : r & 1), t) : (Rt(t), null);
    case 22:
    case 23:
      return Wm(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? fr & 1073741824 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function pO(e, t) {
  switch (bm(t), t.tag) {
    case 1:
      return rr(t.type) && Dc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ra(), He(tr), He(At), Fm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Am(t), null;
    case 13:
      if (He(Qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        $a();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return He(Qe), null;
    case 4:
      return Ra(), null;
    case 10:
      return Rm(t.type._context), null;
    case 22:
    case 23:
      return Wm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yu = !1, Pt = !1, hO = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
function pa(e, t) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    tt(e, t, n);
  }
  else r.current = null;
}
function Wh(e, t, r) {
  try {
    r();
  } catch (n) {
    tt(e, t, n);
  }
}
var w0 = !1;
function yO(e, t) {
  if (Oh = Oc, e = tE(), Cm(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, o.nodeType;
        } catch {
          r = null;
          break e;
        }
        var a = 0, s = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var w; f !== r || i !== 0 && f.nodeType !== 3 || (s = a + i), f !== o || n !== 0 && f.nodeType !== 3 || (l = a + n), f.nodeType === 3 && (a += f.nodeValue.length), (w = f.firstChild) !== null; )
            d = f, f = w;
          for (; ; ) {
            if (f === e) break t;
            if (d === r && ++u === i && (s = a), d === o && ++c === n && (l = a), (w = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = w;
        }
        r = s === -1 || l === -1 ? null : { start: s, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Rh = { focusedElem: e, selectionRange: r }, Oc = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
  else for (; ee !== null; ) {
    t = ee;
    try {
      var h = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var y = h.memoizedProps, m = h.memoizedState, v = t.stateNode, p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Vr(t.type, y), m);
            v.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(W(163));
      }
    } catch (x) {
      tt(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, ee = e;
      break;
    }
    ee = t.return;
  }
  return h = w0, w0 = !1, h;
}
function Bs(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Wh(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Lf(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function qh(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function XE(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, XE(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yn], delete t[hl], delete t[Dh], delete t[X2], delete t[J2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function JE(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function S0(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || JE(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qh(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Tc));
  else if (n !== 4 && (e = e.child, e !== null)) for (Qh(e, t, r), e = e.sibling; e !== null; ) Qh(e, t, r), e = e.sibling;
}
function Kh(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null)) for (Kh(e, t, r), e = e.sibling; e !== null; ) Kh(e, t, r), e = e.sibling;
}
var xt = null, Br = !1;
function ei(e, t, r) {
  for (r = r.child; r !== null; ) ZE(e, t, r), r = r.sibling;
}
function ZE(e, t, r) {
  if (gn && typeof gn.onCommitFiberUnmount == "function") try {
    gn.onCommitFiberUnmount(Rf, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Pt || pa(r, t);
    case 6:
      var n = xt, i = Br;
      xt = null, ei(e, t, r), xt = n, Br = i, xt !== null && (Br ? (e = xt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : xt.removeChild(r.stateNode));
      break;
    case 18:
      xt !== null && (Br ? (e = xt, r = r.stateNode, e.nodeType === 8 ? Gd(e.parentNode, r) : e.nodeType === 1 && Gd(e, r), ul(e)) : Gd(xt, r.stateNode));
      break;
    case 4:
      n = xt, i = Br, xt = r.stateNode.containerInfo, Br = !0, ei(e, t, r), xt = n, Br = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Pt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Wh(r, t, a), i = i.next;
        } while (i !== n);
      }
      ei(e, t, r);
      break;
    case 1:
      if (!Pt && (pa(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (s) {
        tt(r, t, s);
      }
      ei(e, t, r);
      break;
    case 21:
      ei(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (Pt = (n = Pt) || r.memoizedState !== null, ei(e, t, r), Pt = n) : ei(e, t, r);
      break;
    default:
      ei(e, t, r);
  }
}
function x0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new hO()), t.forEach(function(n) {
      var i = kO.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function Ur(e, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var o = e, a = t, s = a;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            xt = s.stateNode, Br = !1;
            break e;
          case 3:
            xt = s.stateNode.containerInfo, Br = !0;
            break e;
          case 4:
            xt = s.stateNode.containerInfo, Br = !0;
            break e;
        }
        s = s.return;
      }
      if (xt === null) throw Error(W(160));
      ZE(o, a, i), xt = null, Br = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      tt(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) eC(t, e), t = t.sibling;
}
function eC(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ur(t, e), nn(e), n & 4) {
        try {
          Bs(3, e, e.return), Lf(3, e);
        } catch (y) {
          tt(e, e.return, y);
        }
        try {
          Bs(5, e, e.return);
        } catch (y) {
          tt(e, e.return, y);
        }
      }
      break;
    case 1:
      Ur(t, e), nn(e), n & 512 && r !== null && pa(r, r.return);
      break;
    case 5:
      if (Ur(t, e), nn(e), n & 512 && r !== null && pa(r, r.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          ol(i, "");
        } catch (y) {
          tt(e, e.return, y);
        }
      }
      if (n & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = r !== null ? r.memoizedProps : o, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          s === "input" && o.type === "radio" && o.name != null && Ex(i, o), gh(s, a);
          var u = gh(s, o);
          for (a = 0; a < l.length; a += 2) {
            var c = l[a], f = l[a + 1];
            c === "style" ? $x(i, f) : c === "dangerouslySetInnerHTML" ? bx(i, f) : c === "children" ? ol(i, f) : cm(i, c, f, u);
          }
          switch (s) {
            case "input":
              ph(i, o);
              break;
            case "textarea":
              Cx(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? ga(i, !!o.multiple, w, !1) : d !== !!o.multiple && (o.defaultValue != null ? ga(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ga(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[hl] = o;
        } catch (y) {
          tt(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ur(t, e), nn(e), n & 4) {
        if (e.stateNode === null) throw Error(W(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          tt(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ur(t, e), nn(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        ul(t.containerInfo);
      } catch (y) {
        tt(e, e.return, y);
      }
      break;
    case 4:
      Ur(t, e), nn(e);
      break;
    case 13:
      Ur(t, e), nn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Bm = nt())), n & 4 && x0(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (Pt = (u = Pt) || c, Ur(t, e), Pt = u) : Ur(t, e), nn(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (ee = e, c = e.child; c !== null; ) {
          for (f = ee = c; ee !== null; ) {
            switch (d = ee, w = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bs(4, d, d.return);
                break;
              case 1:
                pa(d, d.return);
                var h = d.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  n = d, r = d.return;
                  try {
                    t = n, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                  } catch (y) {
                    tt(n, r, y);
                  }
                }
                break;
              case 5:
                pa(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  C0(f);
                  continue;
                }
            }
            w !== null ? (w.return = d, ee = w) : C0(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = _x("display", a));
              } catch (y) {
                tt(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (y) {
              tt(e, e.return, y);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Ur(t, e), nn(e), n & 4 && x0(e);
      break;
    case 21:
      break;
    default:
      Ur(
        t,
        e
      ), nn(e);
  }
}
function nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (JE(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(W(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (ol(i, ""), n.flags &= -33);
          var o = S0(e);
          Kh(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = S0(e);
          Qh(e, s, a);
          break;
        default:
          throw Error(W(161));
      }
    } catch (l) {
      tt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mO(e, t, r) {
  ee = e, tC(e);
}
function tC(e, t, r) {
  for (var n = (e.mode & 1) !== 0; ee !== null; ) {
    var i = ee, o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || yu;
      if (!a) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || Pt;
        s = yu;
        var u = Pt;
        if (yu = a, (Pt = l) && !u) for (ee = i; ee !== null; ) a = ee, l = a.child, a.tag === 22 && a.memoizedState !== null ? k0(i) : l !== null ? (l.return = a, ee = l) : k0(i);
        for (; o !== null; ) ee = o, tC(o), o = o.sibling;
        ee = i, yu = s, Pt = u;
      }
      E0(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, ee = o) : E0(e);
  }
}
function E0(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Pt || Lf(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !Pt) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : Vr(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && a0(t, o, n);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              a0(t, a, r);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (r === null && t.flags & 4) {
              r = s;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && ul(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(W(163));
        }
        Pt || t.flags & 512 && qh(t);
      } catch (d) {
        tt(t, t.return, d);
      }
    }
    if (t === e) {
      ee = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, ee = r;
      break;
    }
    ee = t.return;
  }
}
function C0(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t === e) {
      ee = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, ee = r;
      break;
    }
    ee = t.return;
  }
}
function k0(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Lf(4, t);
          } catch (l) {
            tt(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              tt(t, i, l);
            }
          }
          var o = t.return;
          try {
            qh(t);
          } catch (l) {
            tt(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            qh(t);
          } catch (l) {
            tt(t, a, l);
          }
      }
    } catch (l) {
      tt(t, t.return, l);
    }
    if (t === e) {
      ee = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, ee = s;
      break;
    }
    ee = t.return;
  }
}
var vO = Math.ceil, Vc = qn.ReactCurrentDispatcher, Um = qn.ReactCurrentOwner, Dr = qn.ReactCurrentBatchConfig, _e = 0, mt = null, st = null, kt = 0, fr = 0, ha = Ti(0), pt = 0, Sl = null, So = 0, If = 0, Vm = 0, Hs = null, Jt = null, Bm = 0, Ta = 1 / 0, Dn = null, Bc = !1, Gh = null, Ei = null, mu = !1, di = null, Hc = 0, Ws = 0, Yh = null, Ku = -1, Gu = 0;
function zt() {
  return _e & 6 ? nt() : Ku !== -1 ? Ku : Ku = nt();
}
function Ci(e) {
  return e.mode & 1 ? _e & 2 && kt !== 0 ? kt & -kt : eO.transition !== null ? (Gu === 0 && (Gu = jx()), Gu) : (e = De, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qx(e.type)), e) : 1;
}
function Xr(e, t, r, n) {
  if (50 < Ws) throw Ws = 0, Yh = null, Error(W(185));
  Fl(e, r, n), (!(_e & 2) || e !== mt) && (e === mt && (!(_e & 2) && (If |= r), pt === 4 && ui(e, kt)), nr(e, n), r === 1 && _e === 0 && !(t.mode & 1) && (Ta = nt() + 500, Ff && Di()));
}
function nr(e, t) {
  var r = e.callbackNode;
  e2(e, t);
  var n = $c(e, e === mt ? kt : 0);
  if (n === 0) r !== null && Ag(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Ag(r), t === 1) e.tag === 0 ? Z2(b0.bind(null, e)) : fE(b0.bind(null, e)), G2(function() {
      !(_e & 6) && Di();
    }), r = null;
    else {
      switch (zx(n)) {
        case 1:
          r = ym;
          break;
        case 4:
          r = Lx;
          break;
        case 16:
          r = _c;
          break;
        case 536870912:
          r = Ix;
          break;
        default:
          r = _c;
      }
      r = uC(r, rC.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function rC(e, t) {
  if (Ku = -1, Gu = 0, _e & 6) throw Error(W(327));
  var r = e.callbackNode;
  if (Ca() && e.callbackNode !== r) return null;
  var n = $c(e, e === mt ? kt : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Wc(e, n);
  else {
    t = n;
    var i = _e;
    _e |= 2;
    var o = iC();
    (mt !== e || kt !== t) && (Dn = null, Ta = nt() + 500, lo(e, t));
    do
      try {
        SO();
        break;
      } catch (s) {
        nC(e, s);
      }
    while (!0);
    Om(), Vc.current = o, _e = i, st !== null ? t = 0 : (mt = null, kt = 0, t = pt);
  }
  if (t !== 0) {
    if (t === 2 && (i = Ch(e), i !== 0 && (n = i, t = Xh(e, i))), t === 1) throw r = Sl, lo(e, 0), ui(e, n), nr(e, nt()), r;
    if (t === 6) ui(e, n);
    else {
      if (i = e.current.alternate, !(n & 30) && !gO(i) && (t = Wc(e, n), t === 2 && (o = Ch(e), o !== 0 && (n = o, t = Xh(e, o))), t === 1)) throw r = Sl, lo(e, 0), ui(e, n), nr(e, nt()), r;
      switch (e.finishedWork = i, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          Ui(e, Jt, Dn);
          break;
        case 3:
          if (ui(e, n), (n & 130023424) === n && (t = Bm + 500 - nt(), 10 < t)) {
            if ($c(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & n) !== n) {
              zt(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Th(Ui.bind(null, e, Jt, Dn), t);
            break;
          }
          Ui(e, Jt, Dn);
          break;
        case 4:
          if (ui(e, n), (n & 4194240) === n) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - Yr(n);
            o = 1 << a, a = t[a], a > i && (i = a), n &= ~o;
          }
          if (n = i, n = nt() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * vO(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Th(Ui.bind(null, e, Jt, Dn), n);
            break;
          }
          Ui(e, Jt, Dn);
          break;
        case 5:
          Ui(e, Jt, Dn);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return nr(e, nt()), e.callbackNode === r ? rC.bind(null, e) : null;
}
function Xh(e, t) {
  var r = Hs;
  return e.current.memoizedState.isDehydrated && (lo(e, t).flags |= 256), e = Wc(e, t), e !== 2 && (t = Jt, Jt = r, t !== null && Jh(t)), e;
}
function Jh(e) {
  Jt === null ? Jt = e : Jt.push.apply(Jt, e);
}
function gO(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Zr(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function ui(e, t) {
  for (t &= ~Vm, t &= ~If, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - Yr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function b0(e) {
  if (_e & 6) throw Error(W(327));
  Ca();
  var t = $c(e, 0);
  if (!(t & 1)) return nr(e, nt()), null;
  var r = Wc(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Ch(e);
    n !== 0 && (t = n, r = Xh(e, n));
  }
  if (r === 1) throw r = Sl, lo(e, 0), ui(e, t), nr(e, nt()), r;
  if (r === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ui(e, Jt, Dn), nr(e, nt()), null;
}
function Hm(e, t) {
  var r = _e;
  _e |= 1;
  try {
    return e(t);
  } finally {
    _e = r, _e === 0 && (Ta = nt() + 500, Ff && Di());
  }
}
function xo(e) {
  di !== null && di.tag === 0 && !(_e & 6) && Ca();
  var t = _e;
  _e |= 1;
  var r = Dr.transition, n = De;
  try {
    if (Dr.transition = null, De = 1, e) return e();
  } finally {
    De = n, Dr.transition = r, _e = t, !(_e & 6) && Di();
  }
}
function Wm() {
  fr = ha.current, He(ha);
}
function lo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, K2(r)), st !== null) for (r = st.return; r !== null; ) {
    var n = r;
    switch (bm(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Dc();
        break;
      case 3:
        Ra(), He(tr), He(At), Fm();
        break;
      case 5:
        Am(n);
        break;
      case 4:
        Ra();
        break;
      case 13:
        He(Qe);
        break;
      case 19:
        He(Qe);
        break;
      case 10:
        Rm(n.type._context);
        break;
      case 22:
      case 23:
        Wm();
    }
    r = r.return;
  }
  if (mt = e, st = e = ki(e.current, null), kt = fr = t, pt = 0, Sl = null, Vm = If = So = 0, Jt = Hs = null, Zi !== null) {
    for (t = 0; t < Zi.length; t++) if (r = Zi[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, o = r.pending;
      if (o !== null) {
        var a = o.next;
        o.next = i, n.next = a;
      }
      r.pending = n;
    }
    Zi = null;
  }
  return e;
}
function nC(e, t) {
  do {
    var r = st;
    try {
      if (Om(), Wu.current = Uc, zc) {
        for (var n = Ke.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        zc = !1;
      }
      if (wo = 0, yt = dt = Ke = null, Vs = !1, vl = 0, Um.current = null, r === null || r.return === null) {
        pt = 1, Sl = t, st = null;
        break;
      }
      e: {
        var o = e, a = r.return, s = r, l = t;
        if (t = kt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var w = d0(a);
          if (w !== null) {
            w.flags &= -257, p0(w, a, s, o, t), w.mode & 1 && f0(o, u, t), t = w, l = u;
            var h = t.updateQueue;
            if (h === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              f0(o, u, t), qm();
              break e;
            }
            l = Error(W(426));
          }
        } else if (qe && s.mode & 1) {
          var m = d0(a);
          if (m !== null) {
            !(m.flags & 65536) && (m.flags |= 256), p0(m, a, s, o, t), _m(Pa(l, s));
            break e;
          }
        }
        o = l = Pa(l, s), pt !== 4 && (pt = 2), Hs === null ? Hs = [o] : Hs.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var v = zE(o, l, t);
              o0(o, v);
              break e;
            case 1:
              s = l;
              var p = o.type, g = o.stateNode;
              if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ei === null || !Ei.has(g)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var x = UE(o, s, t);
                o0(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      aC(r);
    } catch (E) {
      t = E, st === r && r !== null && (st = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function iC() {
  var e = Vc.current;
  return Vc.current = Uc, e === null ? Uc : e;
}
function qm() {
  (pt === 0 || pt === 3 || pt === 2) && (pt = 4), mt === null || !(So & 268435455) && !(If & 268435455) || ui(mt, kt);
}
function Wc(e, t) {
  var r = _e;
  _e |= 2;
  var n = iC();
  (mt !== e || kt !== t) && (Dn = null, lo(e, t));
  do
    try {
      wO();
      break;
    } catch (i) {
      nC(e, i);
    }
  while (!0);
  if (Om(), _e = r, Vc.current = n, st !== null) throw Error(W(261));
  return mt = null, kt = 0, pt;
}
function wO() {
  for (; st !== null; ) oC(st);
}
function SO() {
  for (; st !== null && !W$(); ) oC(st);
}
function oC(e) {
  var t = lC(e.alternate, e, fr);
  e.memoizedProps = e.pendingProps, t === null ? aC(e) : st = t, Um.current = null;
}
function aC(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = pO(r, t), r !== null) {
        r.flags &= 32767, st = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pt = 6, st = null;
        return;
      }
    } else if (r = dO(r, t, fr), r !== null) {
      st = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      st = t;
      return;
    }
    st = t = e;
  } while (t !== null);
  pt === 0 && (pt = 5);
}
function Ui(e, t, r) {
  var n = De, i = Dr.transition;
  try {
    Dr.transition = null, De = 1, xO(e, t, r, n);
  } finally {
    Dr.transition = i, De = n;
  }
  return null;
}
function xO(e, t, r, n) {
  do
    Ca();
  while (di !== null);
  if (_e & 6) throw Error(W(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = r.lanes | r.childLanes;
  if (t2(e, o), e === mt && (st = mt = null, kt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || mu || (mu = !0, uC(_c, function() {
    return Ca(), null;
  })), o = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || o) {
    o = Dr.transition, Dr.transition = null;
    var a = De;
    De = 1;
    var s = _e;
    _e |= 4, Um.current = null, yO(e, r), eC(r, e), U2(Rh), Oc = !!Oh, Rh = Oh = null, e.current = r, mO(r), q$(), _e = s, De = a, Dr.transition = o;
  } else e.current = r;
  if (mu && (mu = !1, di = e, Hc = i), o = e.pendingLanes, o === 0 && (Ei = null), G$(r.stateNode), nr(e, nt()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Bc) throw Bc = !1, e = Gh, Gh = null, e;
  return Hc & 1 && e.tag !== 0 && Ca(), o = e.pendingLanes, o & 1 ? e === Yh ? Ws++ : (Ws = 0, Yh = e) : Ws = 0, Di(), null;
}
function Ca() {
  if (di !== null) {
    var e = zx(Hc), t = Dr.transition, r = De;
    try {
      if (Dr.transition = null, De = 16 > e ? 16 : e, di === null) var n = !1;
      else {
        if (e = di, di = null, Hc = 0, _e & 6) throw Error(W(331));
        var i = _e;
        for (_e |= 4, ee = e.current; ee !== null; ) {
          var o = ee, a = o.child;
          if (ee.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (ee = u; ee !== null; ) {
                  var c = ee;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, ee = f;
                  else for (; ee !== null; ) {
                    c = ee;
                    var d = c.sibling, w = c.return;
                    if (XE(c), c === u) {
                      ee = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = w, ee = d;
                      break;
                    }
                    ee = w;
                  }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var m = y.sibling;
                    y.sibling = null, y = m;
                  } while (y !== null);
                }
              }
              ee = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) a.return = o, ee = a;
          else e: for (; ee !== null; ) {
            if (o = ee, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Bs(9, o, o.return);
            }
            var v = o.sibling;
            if (v !== null) {
              v.return = o.return, ee = v;
              break e;
            }
            ee = o.return;
          }
        }
        var p = e.current;
        for (ee = p; ee !== null; ) {
          a = ee;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) g.return = a, ee = g;
          else e: for (a = p; ee !== null; ) {
            if (s = ee, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Lf(9, s);
              }
            } catch (E) {
              tt(s, s.return, E);
            }
            if (s === a) {
              ee = null;
              break e;
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, ee = x;
              break e;
            }
            ee = s.return;
          }
        }
        if (_e = i, Di(), gn && typeof gn.onPostCommitFiberRoot == "function") try {
          gn.onPostCommitFiberRoot(Rf, e);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      De = r, Dr.transition = t;
    }
  }
  return !1;
}
function _0(e, t, r) {
  t = Pa(r, t), t = zE(e, t, 1), e = xi(e, t, 1), t = zt(), e !== null && (Fl(e, 1, t), nr(e, t));
}
function tt(e, t, r) {
  if (e.tag === 3) _0(e, e, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _0(t, e, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ei === null || !Ei.has(n))) {
        e = Pa(r, e), e = UE(t, e, 1), t = xi(t, e, 1), e = zt(), t !== null && (Fl(t, 1, e), nr(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function EO(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = zt(), e.pingedLanes |= e.suspendedLanes & r, mt === e && (kt & r) === r && (pt === 4 || pt === 3 && (kt & 130023424) === kt && 500 > nt() - Bm ? lo(e, 0) : Vm |= r), nr(e, t);
}
function sC(e, t) {
  t === 0 && (e.mode & 1 ? (t = au, au <<= 1, !(au & 130023424) && (au = 4194304)) : t = 1);
  var r = zt();
  e = Un(e, t), e !== null && (Fl(e, t, r), nr(e, r));
}
function CO(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), sC(e, r);
}
function kO(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  n !== null && n.delete(t), sC(e, r);
}
var lC;
lC = function(e, t, r) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tr.current) er = !0;
  else {
    if (!(e.lanes & r) && !(t.flags & 128)) return er = !1, fO(e, t, r);
    er = !!(e.flags & 131072);
  }
  else er = !1, qe && t.flags & 1048576 && dE(t, Mc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Qu(e, t), e = t.pendingProps;
      var i = _a(t, At.current);
      Ea(t, r), i = Nm(null, t, n, e, i, r);
      var o = Lm();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rr(n) ? (o = !0, Ac(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Tm(t), i.updater = Nf, t.stateNode = i, i._reactInternals = t, Ih(t, n, e, r), t = Uh(null, t, n, !0, o, r)) : (t.tag = 0, qe && o && km(t), Lt(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Qu(e, t), e = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = _O(n), e = Vr(n, e), i) {
          case 0:
            t = zh(null, t, n, e, r);
            break e;
          case 1:
            t = m0(null, t, n, e, r);
            break e;
          case 11:
            t = h0(null, t, n, e, r);
            break e;
          case 14:
            t = y0(null, t, n, Vr(n.type, e), r);
            break e;
        }
        throw Error(W(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vr(n, i), zh(e, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vr(n, i), m0(e, t, n, i, r);
    case 3:
      e: {
        if (WE(t), e === null) throw Error(W(387));
        n = t.pendingProps, o = t.memoizedState, i = o.element, gE(e, t), Ic(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Pa(Error(W(423)), t), t = v0(e, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = Pa(Error(W(424)), t), t = v0(e, t, n, r, i);
          break e;
        } else for (gr = Si(t.stateNode.containerInfo.firstChild), wr = t, qe = !0, Wr = null, r = mE(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if ($a(), n === i) {
            t = Vn(e, t, r);
            break e;
          }
          Lt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wE(t), e === null && Mh(t), n = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, Ph(n, i) ? a = null : o !== null && Ph(n, o) && (t.flags |= 32), HE(e, t), Lt(e, t, a, r), t.child;
    case 6:
      return e === null && Mh(t), null;
    case 13:
      return qE(e, t, r);
    case 4:
      return Dm(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Oa(t, null, n, r) : Lt(e, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vr(n, i), h0(e, t, n, i, r);
    case 7:
      return Lt(e, t, t.pendingProps, r), t.child;
    case 8:
      return Lt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Lt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, je(Nc, n._currentValue), n._currentValue = a, o !== null) if (Zr(o.value, a)) {
          if (o.children === i.children && !tr.current) {
            t = Vn(e, t, r);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            a = o.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === n) {
                if (o.tag === 1) {
                  l = In(-1, r & -r), l.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), Nh(
                  o.return,
                  r,
                  t
                ), s.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (a = o.return, a === null) throw Error(W(341));
            a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), Nh(a, r, t), a = o.sibling;
          } else a = o.child;
          if (a !== null) a.return = o;
          else for (a = o; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (o = a.sibling, o !== null) {
              o.return = a.return, a = o;
              break;
            }
            a = a.return;
          }
          o = a;
        }
        Lt(e, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, Ea(t, r), i = Fr(i), n = n(i), t.flags |= 1, Lt(e, t, n, r), t.child;
    case 14:
      return n = t.type, i = Vr(n, t.pendingProps), i = Vr(n.type, i), y0(e, t, n, i, r);
    case 15:
      return VE(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : Vr(n, i), Qu(e, t), t.tag = 1, rr(n) ? (e = !0, Ac(t)) : e = !1, Ea(t, r), jE(t, n, i), Ih(t, n, i, r), Uh(null, t, n, !0, e, r);
    case 19:
      return QE(e, t, r);
    case 22:
      return BE(e, t, r);
  }
  throw Error(W(156, t.tag));
};
function uC(e, t) {
  return Nx(e, t);
}
function bO(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Tr(e, t, r, n) {
  return new bO(e, t, r, n);
}
function Qm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _O(e) {
  if (typeof e == "function") return Qm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === dm) return 11;
    if (e === pm) return 14;
  }
  return 2;
}
function ki(e, t) {
  var r = e.alternate;
  return r === null ? (r = Tr(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Yu(e, t, r, n, i, o) {
  var a = 2;
  if (n = e, typeof e == "function") Qm(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case ia:
      return uo(r.children, i, o, t);
    case fm:
      a = 8, i |= 8;
      break;
    case lh:
      return e = Tr(12, r, t, i | 2), e.elementType = lh, e.lanes = o, e;
    case uh:
      return e = Tr(13, r, t, i), e.elementType = uh, e.lanes = o, e;
    case ch:
      return e = Tr(19, r, t, i), e.elementType = ch, e.lanes = o, e;
    case wx:
      return jf(r, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vx:
          a = 10;
          break e;
        case gx:
          a = 9;
          break e;
        case dm:
          a = 11;
          break e;
        case pm:
          a = 14;
          break e;
        case ii:
          a = 16, n = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = Tr(a, r, t, i), t.elementType = e, t.type = n, t.lanes = o, t;
}
function uo(e, t, r, n) {
  return e = Tr(7, e, n, t), e.lanes = r, e;
}
function jf(e, t, r, n) {
  return e = Tr(22, e, n, t), e.elementType = wx, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function np(e, t, r) {
  return e = Tr(6, e, null, t), e.lanes = r, e;
}
function ip(e, t, r) {
  return t = Tr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $O(e, t, r, n, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Id(0), this.expirationTimes = Id(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Id(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Km(e, t, r, n, i, o, a, s, l) {
  return e = new $O(e, t, r, s, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Tr(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tm(o), e;
}
function OO(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: na, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function cC(e) {
  if (!e) return Oi;
  e = e._reactInternals;
  e: {
    if (Po(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rr(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (rr(r)) return cE(e, r, t);
  }
  return t;
}
function fC(e, t, r, n, i, o, a, s, l) {
  return e = Km(r, n, !0, e, i, o, a, s, l), e.context = cC(null), r = e.current, n = zt(), i = Ci(r), o = In(n, i), o.callback = t ?? null, xi(r, o, i), e.current.lanes = i, Fl(e, i, n), nr(e, n), e;
}
function zf(e, t, r, n) {
  var i = t.current, o = zt(), a = Ci(i);
  return r = cC(r), t.context === null ? t.context = r : t.pendingContext = r, t = In(o, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = xi(i, t, a), e !== null && (Xr(e, i, a, o), Hu(e, i, a)), a;
}
function qc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Gm(e, t) {
  $0(e, t), (e = e.alternate) && $0(e, t);
}
function RO() {
  return null;
}
var dC = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ym(e) {
  this._internalRoot = e;
}
Uf.prototype.render = Ym.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  zf(e, t, null, null);
};
Uf.prototype.unmount = Ym.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xo(function() {
      zf(null, e, null, null);
    }), t[zn] = null;
  }
};
function Uf(e) {
  this._internalRoot = e;
}
Uf.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Bx();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < li.length && t !== 0 && t < li[r].priority; r++) ;
    li.splice(r, 0, e), r === 0 && Wx(e);
  }
};
function Xm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Vf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function O0() {
}
function PO(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var u = qc(a);
        o.call(u);
      };
    }
    var a = fC(t, n, e, 0, null, !1, !1, "", O0);
    return e._reactRootContainer = a, e[zn] = a.current, dl(e.nodeType === 8 ? e.parentNode : e), xo(), a;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = qc(l);
      s.call(u);
    };
  }
  var l = Km(e, 0, !1, null, null, !1, !1, "", O0);
  return e._reactRootContainer = l, e[zn] = l.current, dl(e.nodeType === 8 ? e.parentNode : e), xo(function() {
    zf(t, l, r, n);
  }), l;
}
function Bf(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = qc(a);
        s.call(l);
      };
    }
    zf(t, a, e, i);
  } else a = PO(r, t, e, i, n);
  return qc(a);
}
Ux = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = $s(t.pendingLanes);
        r !== 0 && (mm(t, r | 1), nr(t, nt()), !(_e & 6) && (Ta = nt() + 500, Di()));
      }
      break;
    case 13:
      xo(function() {
        var n = Un(e, 1);
        if (n !== null) {
          var i = zt();
          Xr(n, e, 1, i);
        }
      }), Gm(e, 1);
  }
};
vm = function(e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var r = zt();
      Xr(t, e, 134217728, r);
    }
    Gm(e, 134217728);
  }
};
Vx = function(e) {
  if (e.tag === 13) {
    var t = Ci(e), r = Un(e, t);
    if (r !== null) {
      var n = zt();
      Xr(r, e, t, n);
    }
    Gm(e, t);
  }
};
Bx = function() {
  return De;
};
Hx = function(e, t) {
  var r = De;
  try {
    return De = e, t();
  } finally {
    De = r;
  }
};
Sh = function(e, t, r) {
  switch (t) {
    case "input":
      if (ph(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Af(n);
            if (!i) throw Error(W(90));
            xx(n), ph(n, i);
          }
        }
      }
      break;
    case "textarea":
      Cx(e, r);
      break;
    case "select":
      t = r.value, t != null && ga(e, !!r.multiple, t, !1);
  }
};
Px = Hm;
Tx = xo;
var TO = { usingClientEntryPoint: !1, Events: [Nl, la, Af, Ox, Rx, Hm] }, ps = { findFiberByHostInstance: Ji, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, DO = { bundleType: ps.bundleType, version: ps.version, rendererPackageName: ps.rendererPackageName, rendererConfig: ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ps.findFiberByHostInstance || RO, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vu.isDisabled && vu.supportsFiber) try {
    Rf = vu.inject(DO), gn = vu;
  } catch {
  }
}
kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TO;
kr.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xm(t)) throw Error(W(200));
  return OO(e, t, null, r);
};
kr.createRoot = function(e, t) {
  if (!Xm(e)) throw Error(W(299));
  var r = !1, n = "", i = dC;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Km(e, 1, !1, null, null, r, !1, n, i), e[zn] = t.current, dl(e.nodeType === 8 ? e.parentNode : e), new Ym(t);
};
kr.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = Fx(t), e = e === null ? null : e.stateNode, e;
};
kr.flushSync = function(e) {
  return xo(e);
};
kr.hydrate = function(e, t, r) {
  if (!Vf(t)) throw Error(W(200));
  return Bf(null, e, t, !0, r);
};
kr.hydrateRoot = function(e, t, r) {
  if (!Xm(e)) throw Error(W(405));
  var n = r != null && r.hydratedSources || null, i = !1, o = "", a = dC;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = fC(t, null, e, 1, r ?? null, i, !1, o, a), e[zn] = t.current, dl(e), n) for (e = 0; e < n.length; e++) r = n[e], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(
    r,
    i
  );
  return new Uf(t);
};
kr.render = function(e, t, r) {
  if (!Vf(t)) throw Error(W(200));
  return Bf(null, e, t, !1, r);
};
kr.unmountComponentAtNode = function(e) {
  if (!Vf(e)) throw Error(W(40));
  return e._reactRootContainer ? (xo(function() {
    Bf(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zn] = null;
    });
  }), !0) : !1;
};
kr.unstable_batchedUpdates = Hm;
kr.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Vf(r)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Bf(e, t, r, !1, n);
};
kr.version = "18.3.1-next-f1338f8080-20240426";
function pC() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pC);
    } catch (e) {
      console.error(e);
    }
}
pC(), px.exports = kr;
var Il = px.exports;
const Rs = /* @__PURE__ */ Ri(Il), sU = /* @__PURE__ */ tx({
  __proto__: null,
  default: Rs
}, [Il]);
var AO, R0 = Il;
AO = R0.createRoot, R0.hydrateRoot;
var hC = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm = Symbol.for("react.element"), Zm = Symbol.for("react.portal"), Hf = Symbol.for("react.fragment"), Wf = Symbol.for("react.strict_mode"), qf = Symbol.for("react.profiler"), Qf = Symbol.for("react.provider"), Kf = Symbol.for("react.context"), FO = Symbol.for("react.server_context"), Gf = Symbol.for("react.forward_ref"), Yf = Symbol.for("react.suspense"), Xf = Symbol.for("react.suspense_list"), Jf = Symbol.for("react.memo"), Zf = Symbol.for("react.lazy"), MO = Symbol.for("react.offscreen"), yC;
yC = Symbol.for("react.module.reference");
function jr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jm:
        switch (e = e.type, e) {
          case Hf:
          case qf:
          case Wf:
          case Yf:
          case Xf:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case FO:
              case Kf:
              case Gf:
              case Zf:
              case Jf:
              case Qf:
                return e;
              default:
                return t;
            }
        }
      case Zm:
        return t;
    }
  }
}
Ae.ContextConsumer = Kf;
Ae.ContextProvider = Qf;
Ae.Element = Jm;
Ae.ForwardRef = Gf;
Ae.Fragment = Hf;
Ae.Lazy = Zf;
Ae.Memo = Jf;
Ae.Portal = Zm;
Ae.Profiler = qf;
Ae.StrictMode = Wf;
Ae.Suspense = Yf;
Ae.SuspenseList = Xf;
Ae.isAsyncMode = function() {
  return !1;
};
Ae.isConcurrentMode = function() {
  return !1;
};
Ae.isContextConsumer = function(e) {
  return jr(e) === Kf;
};
Ae.isContextProvider = function(e) {
  return jr(e) === Qf;
};
Ae.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jm;
};
Ae.isForwardRef = function(e) {
  return jr(e) === Gf;
};
Ae.isFragment = function(e) {
  return jr(e) === Hf;
};
Ae.isLazy = function(e) {
  return jr(e) === Zf;
};
Ae.isMemo = function(e) {
  return jr(e) === Jf;
};
Ae.isPortal = function(e) {
  return jr(e) === Zm;
};
Ae.isProfiler = function(e) {
  return jr(e) === qf;
};
Ae.isStrictMode = function(e) {
  return jr(e) === Wf;
};
Ae.isSuspense = function(e) {
  return jr(e) === Yf;
};
Ae.isSuspenseList = function(e) {
  return jr(e) === Xf;
};
Ae.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Hf || e === qf || e === Wf || e === Yf || e === Xf || e === MO || typeof e == "object" && e !== null && (e.$$typeof === Zf || e.$$typeof === Jf || e.$$typeof === Qf || e.$$typeof === Kf || e.$$typeof === Gf || e.$$typeof === yC || e.getModuleId !== void 0);
};
Ae.typeOf = jr;
hC.exports = Ae;
var NO = hC.exports, mC = NO, LO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, IO = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vC = {};
vC[mC.ForwardRef] = LO;
vC[mC.Memo] = IO;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ve() {
  return Ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ve.apply(this, arguments);
}
var ft;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ft || (ft = {}));
const P0 = "popstate";
function lU(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: a = "/",
      search: s = "",
      hash: l = ""
    } = Ai(i.location.hash.substr(1));
    return !a.startsWith("/") && !a.startsWith(".") && (a = "/" + a), xl(
      "",
      {
        pathname: a,
        search: s,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(i, o) {
    let a = i.document.querySelector("base"), s = "";
    if (a && a.getAttribute("href")) {
      let l = i.location.href, u = l.indexOf("#");
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + "#" + (typeof o == "string" ? o : jl(o));
  }
  function n(i, o) {
    Eo(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")");
  }
  return zO(t, r, n, e);
}
function Ie(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Eo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function jO() {
  return Math.random().toString(36).substr(2, 8);
}
function T0(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function xl(e, t, r, n) {
  return r === void 0 && (r = null), Ve({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Ai(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || jO()
  });
}
function jl(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Ai(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function zO(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = n, a = i.history, s = ft.Pop, l = null, u = c();
  u == null && (u = 0, a.replaceState(Ve({}, a.state, {
    idx: u
  }), ""));
  function c() {
    return (a.state || {
      idx: null
    }).idx;
  }
  function f() {
    s = ft.Pop;
    let m = c(), v = m == null ? null : m - u;
    u = m, l && l({
      action: s,
      location: y.location,
      delta: v
    });
  }
  function d(m, v) {
    s = ft.Push;
    let p = xl(y.location, m, v);
    r && r(p, m), u = c() + 1;
    let g = T0(p, u), x = y.createHref(p);
    try {
      a.pushState(g, "", x);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError")
        throw E;
      i.location.assign(x);
    }
    o && l && l({
      action: s,
      location: y.location,
      delta: 1
    });
  }
  function w(m, v) {
    s = ft.Replace;
    let p = xl(y.location, m, v);
    r && r(p, m), u = c();
    let g = T0(p, u), x = y.createHref(p);
    a.replaceState(g, "", x), o && l && l({
      action: s,
      location: y.location,
      delta: 0
    });
  }
  function h(m) {
    let v = i.location.origin !== "null" ? i.location.origin : i.location.href, p = typeof m == "string" ? m : jl(m);
    return p = p.replace(/ $/, "%20"), Ie(v, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, v);
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(m) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(P0, f), l = m, () => {
        i.removeEventListener(P0, f), l = null;
      };
    },
    createHref(m) {
      return t(i, m);
    },
    createURL: h,
    encodeLocation(m) {
      let v = h(m);
      return {
        pathname: v.pathname,
        search: v.search,
        hash: v.hash
      };
    },
    push: d,
    replace: w,
    go(m) {
      return a.go(m);
    }
  };
  return y;
}
var Te;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Te || (Te = {}));
const UO = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function VO(e) {
  return e.index === !0;
}
function Qc(e, t, r, n) {
  return r === void 0 && (r = []), n === void 0 && (n = {}), e.map((i, o) => {
    let a = [...r, String(o)], s = typeof i.id == "string" ? i.id : a.join("-");
    if (Ie(i.index !== !0 || !i.children, "Cannot specify children on an index route"), Ie(!n[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`), VO(i)) {
      let l = Ve({}, i, t(i), {
        id: s
      });
      return n[s] = l, l;
    } else {
      let l = Ve({}, i, t(i), {
        id: s,
        children: void 0
      });
      return n[s] = l, i.children && (l.children = Qc(i.children, t, a, n)), l;
    }
  });
}
function Jo(e, t, r) {
  return r === void 0 && (r = "/"), Xu(e, t, r, !1);
}
function Xu(e, t, r, n) {
  let i = typeof t == "string" ? Ai(t) : t, o = ed(i.pathname || "/", r);
  if (o == null)
    return null;
  let a = gC(e);
  HO(a);
  let s = null;
  for (let l = 0; s == null && l < a.length; ++l) {
    let u = tR(o);
    s = ZO(a[l], u, n);
  }
  return s;
}
function BO(e, t) {
  let {
    route: r,
    pathname: n,
    params: i
  } = e;
  return {
    id: r.id,
    pathname: n,
    params: i,
    data: t[r.id],
    handle: r.handle
  };
}
function gC(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (o, a, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o
    };
    l.relativePath.startsWith("/") && (Ie(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(n.length));
    let u = qs([n, l.relativePath]), c = r.concat(l);
    o.children && o.children.length > 0 && (Ie(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), gC(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: XO(u, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, a) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      i(o, a);
    else
      for (let l of wC(o.path))
        i(o, a, l);
  }), t;
}
function wC(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, i = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0)
    return i ? [o, ""] : [o];
  let a = wC(n.join("/")), s = [];
  return s.push(...a.map((l) => l === "" ? o : [o, l].join("/"))), i && s.push(...a), s.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function HO(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : JO(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const WO = /^:[\w-]+$/, qO = 3, QO = 2, KO = 1, GO = 10, YO = -2, D0 = (e) => e === "*";
function XO(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(D0) && (n += YO), t && (n += QO), r.filter((i) => !D0(i)).reduce((i, o) => i + (WO.test(o) ? qO : o === "" ? KO : GO), n);
}
function JO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ZO(e, t, r) {
  r === void 0 && (r = !1);
  let {
    routesMeta: n
  } = e, i = {}, o = "/", a = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s], u = s === n.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", f = A0({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), d = l.route;
    if (!f && u && r && !n[n.length - 1].route.index && (f = A0({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: !1
    }, c)), !f)
      return null;
    Object.assign(i, f.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: qs([o, f.pathname]),
      pathnameBase: aR(qs([o, f.pathnameBase])),
      route: d
    }), f.pathnameBase !== "/" && (o = qs([o, f.pathnameBase]));
  }
  return a;
}
function A0(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = eR(e.path, e.caseSensitive, e.end), i = t.match(r);
  if (!i) return null;
  let o = i[0], a = o.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return {
    params: n.reduce((u, c, f) => {
      let {
        paramName: d,
        isOptional: w
      } = c;
      if (d === "*") {
        let y = s[f] || "";
        a = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const h = s[f];
      return w && !h ? u[d] = void 0 : u[d] = (h || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e
  };
}
function eR(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Eo(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (n.push({
    paramName: s,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), n];
}
function tR(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Eo(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ed(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function rR(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = ""
  } = typeof e == "string" ? Ai(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : nR(r, t) : t,
    search: sR(n),
    hash: lR(i)
  };
}
function nR(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
  }), r.length > 1 ? r.join("/") : "/";
}
function op(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function SC(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function iR(e, t) {
  let r = SC(e);
  return t ? r.map((n, i) => i === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function oR(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string" ? i = Ai(e) : (i = Ve({}, e), Ie(!i.pathname || !i.pathname.includes("?"), op("?", "pathname", "search", i)), Ie(!i.pathname || !i.pathname.includes("#"), op("#", "pathname", "hash", i)), Ie(!i.search || !i.search.includes("#"), op("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", a = o ? "/" : i.pathname, s;
  if (a == null)
    s = r;
  else {
    let f = t.length - 1;
    if (!n && a.startsWith("..")) {
      let d = a.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let l = rR(i, s), u = a && a !== "/" && a.endsWith("/"), c = (o || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const qs = (e) => e.join("/").replace(/\/\/+/g, "/"), aR = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), sR = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, lR = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, uU = function(t, r) {
  r === void 0 && (r = 302);
  let n = r;
  typeof n == "number" ? n = {
    status: n
  } : typeof n.status > "u" && (n.status = 302);
  let i = new Headers(n.headers);
  return i.set("Location", t), new Response(null, Ve({}, n, {
    headers: i
  }));
};
class Zh {
  constructor(t, r, n, i) {
    i === void 0 && (i = !1), this.status = t, this.statusText = r || "", this.internal = i, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
}
function Kc(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const xC = ["post", "put", "patch", "delete"], uR = new Set(xC), cR = ["get", ...xC], fR = new Set(cR), dR = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), pR = /* @__PURE__ */ new Set([307, 308]), ap = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, hR = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, hs = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, ev = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, yR = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), EC = "remix-router-transitions";
function cU(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u", n = !r;
  Ie(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i;
  if (e.mapRouteProperties)
    i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let R = e.detectErrorBoundary;
    i = (T) => ({
      hasErrorBoundary: R(T)
    });
  } else
    i = yR;
  let o = {}, a = Qc(e.routes, i, void 0, o), s, l = e.basename || "/", u = e.dataStrategy || wR, c = e.patchRoutesOnNavigation, f = Ve({
    v7_fetcherPersist: !1,
    v7_normalizeFormMethod: !1,
    v7_partialHydration: !1,
    v7_prependBasename: !1,
    v7_relativeSplatPath: !1,
    v7_skipActionErrorRevalidation: !1
  }, e.future), d = null, w = /* @__PURE__ */ new Set(), h = null, y = null, m = null, v = e.hydrationData != null, p = Jo(a, e.history.location, l), g = !1, x = null;
  if (p == null && !c) {
    let R = Kt(404, {
      pathname: e.history.location.pathname
    }), {
      matches: T,
      route: N
    } = H0(a);
    p = T, x = {
      [N.id]: R
    };
  }
  p && !e.hydrationData && gt(p, a, e.history.location.pathname).active && (p = null);
  let E;
  if (p)
    if (p.some((R) => R.route.lazy))
      E = !1;
    else if (!p.some((R) => R.route.loader))
      E = !0;
    else if (f.v7_partialHydration) {
      let R = e.hydrationData ? e.hydrationData.loaderData : null, T = e.hydrationData ? e.hydrationData.errors : null;
      if (T) {
        let N = p.findIndex((U) => T[U.route.id] !== void 0);
        E = p.slice(0, N + 1).every((U) => !ty(U.route, R, T));
      } else
        E = p.every((N) => !ty(N.route, R, T));
    } else
      E = e.hydrationData != null;
  else if (E = !1, p = [], f.v7_partialHydration) {
    let R = gt(null, a, e.history.location.pathname);
    R.active && R.matches && (g = !0, p = R.matches);
  }
  let C, S = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: p,
    initialized: E,
    navigation: ap,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || x,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, b = ft.Pop, $ = !1, k, _ = !1, P = /* @__PURE__ */ new Map(), D = null, L = !1, j = !1, z = [], B = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), q = 0, G = -1, ae = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Ye;
  function zr() {
    if (d = e.history.listen((R) => {
      let {
        action: T,
        location: N,
        delta: U
      } = R;
      if (Ye) {
        Ye(), Ye = void 0;
        return;
      }
      Eo(Oe.size === 0 || U != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let J = ts({
        currentLocation: S.location,
        nextLocation: N,
        historyAction: T
      });
      if (J && U != null) {
        let le = new Promise((fe) => {
          Ye = fe;
        });
        e.history.go(U * -1), Zn(J, {
          state: "blocked",
          location: N,
          proceed() {
            Zn(J, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: N
            }), le.then(() => e.history.go(U));
          },
          reset() {
            let fe = new Map(S.blockers);
            fe.set(J, hs), Xe({
              blockers: fe
            });
          }
        });
        return;
      }
      return Wt(T, N);
    }), r) {
      AR(t, P);
      let R = () => FR(t, P);
      t.addEventListener("pagehide", R), D = () => t.removeEventListener("pagehide", R);
    }
    return S.initialized || Wt(ft.Pop, S.location, {
      initialHydration: !0
    }), C;
  }
  function Kn() {
    d && d(), D && D(), w.clear(), k && k.abort(), S.fetchers.forEach((R, T) => Ft(T)), S.blockers.forEach((R, T) => Li(T));
  }
  function En(R) {
    return w.add(R), () => w.delete(R);
  }
  function Xe(R, T) {
    T === void 0 && (T = {}), S = Ve({}, S, R);
    let N = [], U = [];
    f.v7_fetcherPersist && S.fetchers.forEach((J, le) => {
      J.state === "idle" && (ce.has(le) ? U.push(le) : N.push(le));
    }), ce.forEach((J) => {
      !S.fetchers.has(J) && !M.has(J) && U.push(J);
    }), [...w].forEach((J) => J(S, {
      deletedFetchers: U,
      viewTransitionOpts: T.viewTransitionOpts,
      flushSync: T.flushSync === !0
    })), f.v7_fetcherPersist ? (N.forEach((J) => S.fetchers.delete(J)), U.forEach((J) => Ft(J))) : U.forEach((J) => ce.delete(J));
  }
  function lr(R, T, N) {
    var U, J;
    let {
      flushSync: le
    } = N === void 0 ? {} : N, fe = S.actionData != null && S.navigation.formMethod != null && Hr(S.navigation.formMethod) && S.navigation.state === "loading" && ((U = R.state) == null ? void 0 : U._isRedirect) !== !0, ne;
    T.actionData ? Object.keys(T.actionData).length > 0 ? ne = T.actionData : ne = null : fe ? ne = S.actionData : ne = null;
    let ie = T.loaderData ? V0(S.loaderData, T.loaderData, T.matches || [], T.errors) : S.loaderData, te = S.blockers;
    te.size > 0 && (te = new Map(te), te.forEach((ke, wt) => te.set(wt, hs)));
    let se = $ === !0 || S.navigation.formMethod != null && Hr(S.navigation.formMethod) && ((J = R.state) == null ? void 0 : J._isRedirect) !== !0;
    s && (a = s, s = void 0), L || b === ft.Pop || (b === ft.Push ? e.history.push(R, R.state) : b === ft.Replace && e.history.replace(R, R.state));
    let ye;
    if (b === ft.Pop) {
      let ke = P.get(S.location.pathname);
      ke && ke.has(R.pathname) ? ye = {
        currentLocation: S.location,
        nextLocation: R
      } : P.has(R.pathname) && (ye = {
        currentLocation: R,
        nextLocation: S.location
      });
    } else if (_) {
      let ke = P.get(S.location.pathname);
      ke ? ke.add(R.pathname) : (ke = /* @__PURE__ */ new Set([R.pathname]), P.set(S.location.pathname, ke)), ye = {
        currentLocation: S.location,
        nextLocation: R
      };
    }
    Xe(Ve({}, T, {
      actionData: ne,
      loaderData: ie,
      historyAction: b,
      location: R,
      initialized: !0,
      navigation: ap,
      revalidation: "idle",
      restoreScrollPosition: vt(R, T.matches || S.matches),
      preventScrollReset: se,
      blockers: te
    }), {
      viewTransitionOpts: ye,
      flushSync: le === !0
    }), b = ft.Pop, $ = !1, _ = !1, L = !1, j = !1, z = [];
  }
  async function Cn(R, T) {
    if (typeof R == "number") {
      e.history.go(R);
      return;
    }
    let N = ey(S.location, S.matches, l, f.v7_prependBasename, R, f.v7_relativeSplatPath, T?.fromRouteId, T?.relative), {
      path: U,
      submission: J,
      error: le
    } = F0(f.v7_normalizeFormMethod, !1, N, T), fe = S.location, ne = xl(S.location, U, T && T.state);
    ne = Ve({}, ne, e.history.encodeLocation(ne));
    let ie = T && T.replace != null ? T.replace : void 0, te = ft.Push;
    ie === !0 ? te = ft.Replace : ie === !1 || J != null && Hr(J.formMethod) && J.formAction === S.location.pathname + S.location.search && (te = ft.Replace);
    let se = T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0, ye = (T && T.flushSync) === !0, ke = ts({
      currentLocation: fe,
      nextLocation: ne,
      historyAction: te
    });
    if (ke) {
      Zn(ke, {
        state: "blocked",
        location: ne,
        proceed() {
          Zn(ke, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ne
          }), Cn(R, T);
        },
        reset() {
          let wt = new Map(S.blockers);
          wt.set(ke, hs), Xe({
            blockers: wt
          });
        }
      });
      return;
    }
    return await Wt(te, ne, {
      submission: J,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: le,
      preventScrollReset: se,
      replace: T && T.replace,
      enableViewTransition: T && T.viewTransition,
      flushSync: ye
    });
  }
  function Gn() {
    if (ge(), Xe({
      revalidation: "loading"
    }), S.navigation.state !== "submitting") {
      if (S.navigation.state === "idle") {
        Wt(S.historyAction, S.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      Wt(b || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
        // Proxy through any rending view transition
        enableViewTransition: _ === !0
      });
    }
  }
  async function Wt(R, T, N) {
    k && k.abort(), k = null, b = R, L = (N && N.startUninterruptedRevalidation) === !0, ze(S.location, S.matches), $ = (N && N.preventScrollReset) === !0, _ = (N && N.enableViewTransition) === !0;
    let U = s || a, J = N && N.overrideNavigation, le = N != null && N.initialHydration && S.matches && S.matches.length > 0 && !g ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      S.matches
    ) : Jo(U, T, l), fe = (N && N.flushSync) === !0;
    if (le && S.initialized && !j && bR(S.location, T) && !(N && N.submission && Hr(N.submission.formMethod))) {
      lr(T, {
        matches: le
      }, {
        flushSync: fe
      });
      return;
    }
    let ne = gt(le, U, T.pathname);
    if (ne.active && ne.matches && (le = ne.matches), !le) {
      let {
        error: Me,
        notFoundMatches: Re,
        route: Je
      } = Lo(T.pathname);
      lr(T, {
        matches: Re,
        loaderData: {},
        errors: {
          [Je.id]: Me
        }
      }, {
        flushSync: fe
      });
      return;
    }
    k = new AbortController();
    let ie = Bo(e.history, T, k.signal, N && N.submission), te;
    if (N && N.pendingError)
      te = [qi(le).route.id, {
        type: Te.error,
        error: N.pendingError
      }];
    else if (N && N.submission && Hr(N.submission.formMethod)) {
      let Me = await Yn(ie, T, N.submission, le, ne.active, {
        replace: N.replace,
        flushSync: fe
      });
      if (Me.shortCircuited)
        return;
      if (Me.pendingActionResult) {
        let [Re, Je] = Me.pendingActionResult;
        if (mr(Je) && Kc(Je.error) && Je.error.status === 404) {
          k = null, lr(T, {
            matches: Me.matches,
            loaderData: {},
            errors: {
              [Re]: Je.error
            }
          });
          return;
        }
      }
      le = Me.matches || le, te = Me.pendingActionResult, J = sp(T, N.submission), fe = !1, ne.active = !1, ie = Bo(e.history, ie.url, ie.signal);
    }
    let {
      shortCircuited: se,
      matches: ye,
      loaderData: ke,
      errors: wt
    } = await Mo(ie, T, le, ne.active, J, N && N.submission, N && N.fetcherSubmission, N && N.replace, N && N.initialHydration === !0, fe, te);
    se || (k = null, lr(T, Ve({
      matches: ye || le
    }, B0(te), {
      loaderData: ke,
      errors: wt
    })));
  }
  async function Yn(R, T, N, U, J, le) {
    le === void 0 && (le = {}), ge();
    let fe = TR(T, N);
    if (Xe({
      navigation: fe
    }, {
      flushSync: le.flushSync === !0
    }), J) {
      let te = await Ii(U, T.pathname, R.signal);
      if (te.type === "aborted")
        return {
          shortCircuited: !0
        };
      if (te.type === "error") {
        let se = qi(te.partialMatches).route.id;
        return {
          matches: te.partialMatches,
          pendingActionResult: [se, {
            type: Te.error,
            error: te.error
          }]
        };
      } else if (te.matches)
        U = te.matches;
      else {
        let {
          notFoundMatches: se,
          error: ye,
          route: ke
        } = Lo(T.pathname);
        return {
          matches: se,
          pendingActionResult: [ke.id, {
            type: Te.error,
            error: ye
          }]
        };
      }
    }
    let ne, ie = Ps(U, T);
    if (!ie.route.action && !ie.route.lazy)
      ne = {
        type: Te.error,
        error: Kt(405, {
          method: R.method,
          pathname: T.pathname,
          routeId: ie.route.id
        })
      };
    else if (ne = (await H("action", S, R, [ie], U, null))[ie.route.id], R.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (to(ne)) {
      let te;
      return le && le.replace != null ? te = le.replace : te = j0(ne.response.headers.get("Location"), new URL(R.url), l) === S.location.pathname + S.location.search, await K(R, ne, !0, {
        submission: N,
        replace: te
      }), {
        shortCircuited: !0
      };
    }
    if (pi(ne))
      throw Kt(400, {
        type: "defer-action"
      });
    if (mr(ne)) {
      let te = qi(U, ie.route.id);
      return (le && le.replace) !== !0 && (b = ft.Push), {
        matches: U,
        pendingActionResult: [te.route.id, ne]
      };
    }
    return {
      matches: U,
      pendingActionResult: [ie.route.id, ne]
    };
  }
  async function Mo(R, T, N, U, J, le, fe, ne, ie, te, se) {
    let ye = J || sp(T, le), ke = le || fe || q0(ye), wt = !L && (!f.v7_partialHydration || !ie);
    if (U) {
      if (wt) {
        let Ze = kn(se);
        Xe(Ve({
          navigation: ye
        }, Ze !== void 0 ? {
          actionData: Ze
        } : {}), {
          flushSync: te
        });
      }
      let $e = await Ii(N, T.pathname, R.signal);
      if ($e.type === "aborted")
        return {
          shortCircuited: !0
        };
      if ($e.type === "error") {
        let Ze = qi($e.partialMatches).route.id;
        return {
          matches: $e.partialMatches,
          loaderData: {},
          errors: {
            [Ze]: $e.error
          }
        };
      } else if ($e.matches)
        N = $e.matches;
      else {
        let {
          error: Ze,
          notFoundMatches: zo,
          route: os
        } = Lo(T.pathname);
        return {
          matches: zo,
          loaderData: {},
          errors: {
            [os.id]: Ze
          }
        };
      }
    }
    let Me = s || a, [Re, Je] = N0(e.history, S, N, ke, T, f.v7_partialHydration && ie === !0, f.v7_skipActionErrorRevalidation, j, z, B, ce, be, ue, Me, l, se);
    if (Io(($e) => !(N && N.some((Ze) => Ze.route.id === $e)) || Re && Re.some((Ze) => Ze.route.id === $e)), G = ++q, Re.length === 0 && Je.length === 0) {
      let $e = No();
      return lr(T, Ve({
        matches: N,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: se && mr(se[1]) ? {
          [se[0]]: se[1].error
        } : null
      }, B0(se), $e ? {
        fetchers: new Map(S.fetchers)
      } : {}), {
        flushSync: te
      }), {
        shortCircuited: !0
      };
    }
    if (wt) {
      let $e = {};
      if (!U) {
        $e.navigation = ye;
        let Ze = kn(se);
        Ze !== void 0 && ($e.actionData = Ze);
      }
      Je.length > 0 && ($e.fetchers = O(Je)), Xe($e, {
        flushSync: te
      });
    }
    Je.forEach(($e) => {
      qt($e.key), $e.controller && M.set($e.key, $e.controller);
    });
    let jo = () => Je.forEach(($e) => qt($e.key));
    k && k.signal.addEventListener("abort", jo);
    let {
      loaderResults: ns,
      fetcherResults: _n
    } = await re(S, N, Re, Je, R);
    if (R.signal.aborted)
      return {
        shortCircuited: !0
      };
    k && k.signal.removeEventListener("abort", jo), Je.forEach(($e) => M.delete($e.key));
    let rn = gu(ns);
    if (rn)
      return await K(R, rn.result, !0, {
        replace: ne
      }), {
        shortCircuited: !0
      };
    if (rn = gu(_n), rn)
      return ue.add(rn.key), await K(R, rn.result, !0, {
        replace: ne
      }), {
        shortCircuited: !0
      };
    let {
      loaderData: Dd,
      errors: is
    } = U0(S, N, ns, se, Je, _n, Ce);
    Ce.forEach(($e, Ze) => {
      $e.subscribe((zo) => {
        (zo || $e.done) && Ce.delete(Ze);
      });
    }), f.v7_partialHydration && ie && S.errors && (is = Ve({}, S.errors, is));
    let ji = No(), Zl = Jn(G), eu = ji || Zl || Je.length > 0;
    return Ve({
      matches: N,
      loaderData: Dd,
      errors: is
    }, eu ? {
      fetchers: new Map(S.fetchers)
    } : {});
  }
  function kn(R) {
    if (R && !mr(R[1]))
      return {
        [R[0]]: R[1].data
      };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function O(R) {
    return R.forEach((T) => {
      let N = S.fetchers.get(T.key), U = ys(void 0, N ? N.data : void 0);
      S.fetchers.set(T.key, U);
    }), new Map(S.fetchers);
  }
  function A(R, T, N, U) {
    if (n)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    qt(R);
    let J = (U && U.flushSync) === !0, le = s || a, fe = ey(S.location, S.matches, l, f.v7_prependBasename, N, f.v7_relativeSplatPath, T, U?.relative), ne = Jo(le, fe, l), ie = gt(ne, le, fe);
    if (ie.active && ie.matches && (ne = ie.matches), !ne) {
      We(R, T, Kt(404, {
        pathname: fe
      }), {
        flushSync: J
      });
      return;
    }
    let {
      path: te,
      submission: se,
      error: ye
    } = F0(f.v7_normalizeFormMethod, !0, fe, U);
    if (ye) {
      We(R, T, ye, {
        flushSync: J
      });
      return;
    }
    let ke = Ps(ne, te), wt = (U && U.preventScrollReset) === !0;
    if (se && Hr(se.formMethod)) {
      I(R, T, te, ke, ne, ie.active, J, wt, se);
      return;
    }
    be.set(R, {
      routeId: T,
      path: te
    }), Y(R, T, te, ke, ne, ie.active, J, wt, se);
  }
  async function I(R, T, N, U, J, le, fe, ne, ie) {
    ge(), be.delete(R);
    function te(ot) {
      if (!ot.route.action && !ot.route.lazy) {
        let Uo = Kt(405, {
          method: ie.formMethod,
          pathname: N,
          routeId: T
        });
        return We(R, T, Uo, {
          flushSync: fe
        }), !0;
      }
      return !1;
    }
    if (!le && te(U))
      return;
    let se = S.fetchers.get(R);
    me(R, DR(ie, se), {
      flushSync: fe
    });
    let ye = new AbortController(), ke = Bo(e.history, N, ye.signal, ie);
    if (le) {
      let ot = await Ii(J, new URL(ke.url).pathname, ke.signal, R);
      if (ot.type === "aborted")
        return;
      if (ot.type === "error") {
        We(R, T, ot.error, {
          flushSync: fe
        });
        return;
      } else if (ot.matches) {
        if (J = ot.matches, U = Ps(J, N), te(U))
          return;
      } else {
        We(R, T, Kt(404, {
          pathname: N
        }), {
          flushSync: fe
        });
        return;
      }
    }
    M.set(R, ye);
    let wt = q, Re = (await H("action", S, ke, [U], J, R))[U.route.id];
    if (ke.signal.aborted) {
      M.get(R) === ye && M.delete(R);
      return;
    }
    if (f.v7_fetcherPersist && ce.has(R)) {
      if (to(Re) || mr(Re)) {
        me(R, ti(void 0));
        return;
      }
    } else {
      if (to(Re))
        if (M.delete(R), G > wt) {
          me(R, ti(void 0));
          return;
        } else
          return ue.add(R), me(R, ys(ie)), K(ke, Re, !1, {
            fetcherSubmission: ie,
            preventScrollReset: ne
          });
      if (mr(Re)) {
        We(R, T, Re.error);
        return;
      }
    }
    if (pi(Re))
      throw Kt(400, {
        type: "defer-action"
      });
    let Je = S.navigation.location || S.location, jo = Bo(e.history, Je, ye.signal), ns = s || a, _n = S.navigation.state !== "idle" ? Jo(ns, S.navigation.location, l) : S.matches;
    Ie(_n, "Didn't find any matches after fetcher action");
    let rn = ++q;
    ae.set(R, rn);
    let Dd = ys(ie, Re.data);
    S.fetchers.set(R, Dd);
    let [is, ji] = N0(e.history, S, _n, ie, Je, !1, f.v7_skipActionErrorRevalidation, j, z, B, ce, be, ue, ns, l, [U.route.id, Re]);
    ji.filter((ot) => ot.key !== R).forEach((ot) => {
      let Uo = ot.key, Sg = S.fetchers.get(Uo), a$ = ys(void 0, Sg ? Sg.data : void 0);
      S.fetchers.set(Uo, a$), qt(Uo), ot.controller && M.set(Uo, ot.controller);
    }), Xe({
      fetchers: new Map(S.fetchers)
    });
    let Zl = () => ji.forEach((ot) => qt(ot.key));
    ye.signal.addEventListener("abort", Zl);
    let {
      loaderResults: eu,
      fetcherResults: $e
    } = await re(S, _n, is, ji, jo);
    if (ye.signal.aborted)
      return;
    ye.signal.removeEventListener("abort", Zl), ae.delete(R), M.delete(R), ji.forEach((ot) => M.delete(ot.key));
    let Ze = gu(eu);
    if (Ze)
      return K(jo, Ze.result, !1, {
        preventScrollReset: ne
      });
    if (Ze = gu($e), Ze)
      return ue.add(Ze.key), K(jo, Ze.result, !1, {
        preventScrollReset: ne
      });
    let {
      loaderData: zo,
      errors: os
    } = U0(S, _n, eu, void 0, ji, $e, Ce);
    if (S.fetchers.has(R)) {
      let ot = ti(Re.data);
      S.fetchers.set(R, ot);
    }
    Jn(rn), S.navigation.state === "loading" && rn > G ? (Ie(b, "Expected pending action"), k && k.abort(), lr(S.navigation.location, {
      matches: _n,
      loaderData: zo,
      errors: os,
      fetchers: new Map(S.fetchers)
    })) : (Xe({
      errors: os,
      loaderData: V0(S.loaderData, zo, _n, os),
      fetchers: new Map(S.fetchers)
    }), j = !1);
  }
  async function Y(R, T, N, U, J, le, fe, ne, ie) {
    let te = S.fetchers.get(R);
    me(R, ys(ie, te ? te.data : void 0), {
      flushSync: fe
    });
    let se = new AbortController(), ye = Bo(e.history, N, se.signal);
    if (le) {
      let Re = await Ii(J, new URL(ye.url).pathname, ye.signal, R);
      if (Re.type === "aborted")
        return;
      if (Re.type === "error") {
        We(R, T, Re.error, {
          flushSync: fe
        });
        return;
      } else if (Re.matches)
        J = Re.matches, U = Ps(J, N);
      else {
        We(R, T, Kt(404, {
          pathname: N
        }), {
          flushSync: fe
        });
        return;
      }
    }
    M.set(R, se);
    let ke = q, Me = (await H("loader", S, ye, [U], J, R))[U.route.id];
    if (pi(Me) && (Me = await tv(Me, ye.signal, !0) || Me), M.get(R) === se && M.delete(R), !ye.signal.aborted) {
      if (ce.has(R)) {
        me(R, ti(void 0));
        return;
      }
      if (to(Me))
        if (G > ke) {
          me(R, ti(void 0));
          return;
        } else {
          ue.add(R), await K(ye, Me, !1, {
            preventScrollReset: ne
          });
          return;
        }
      if (mr(Me)) {
        We(R, T, Me.error);
        return;
      }
      Ie(!pi(Me), "Unhandled fetcher deferred data"), me(R, ti(Me.data));
    }
  }
  async function K(R, T, N, U) {
    let {
      submission: J,
      fetcherSubmission: le,
      preventScrollReset: fe,
      replace: ne
    } = U === void 0 ? {} : U;
    T.response.headers.has("X-Remix-Revalidate") && (j = !0);
    let ie = T.response.headers.get("Location");
    Ie(ie, "Expected a Location header on the redirect Response"), ie = j0(ie, new URL(R.url), l);
    let te = xl(S.location, ie, {
      _isRedirect: !0
    });
    if (r) {
      let Re = !1;
      if (T.response.headers.has("X-Remix-Reload-Document"))
        Re = !0;
      else if (ev.test(ie)) {
        const Je = e.history.createURL(ie);
        Re = // Hard reload if it's an absolute URL to a new origin
        Je.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        ed(Je.pathname, l) == null;
      }
      if (Re) {
        ne ? t.location.replace(ie) : t.location.assign(ie);
        return;
      }
    }
    k = null;
    let se = ne === !0 || T.response.headers.has("X-Remix-Replace") ? ft.Replace : ft.Push, {
      formMethod: ye,
      formAction: ke,
      formEncType: wt
    } = S.navigation;
    !J && !le && ye && ke && wt && (J = q0(S.navigation));
    let Me = J || le;
    if (pR.has(T.response.status) && Me && Hr(Me.formMethod))
      await Wt(se, te, {
        submission: Ve({}, Me, {
          formAction: ie
        }),
        // Preserve these flags across redirects
        preventScrollReset: fe || $,
        enableViewTransition: N ? _ : void 0
      });
    else {
      let Re = sp(te, J);
      await Wt(se, te, {
        overrideNavigation: Re,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: le,
        // Preserve these flags across redirects
        preventScrollReset: fe || $,
        enableViewTransition: N ? _ : void 0
      });
    }
  }
  async function H(R, T, N, U, J, le) {
    let fe, ne = {};
    try {
      fe = await SR(u, R, T, N, U, J, le, o, i);
    } catch (ie) {
      return U.forEach((te) => {
        ne[te.route.id] = {
          type: Te.error,
          error: ie
        };
      }), ne;
    }
    for (let [ie, te] of Object.entries(fe))
      if (_R(te)) {
        let se = te.result;
        ne[ie] = {
          type: Te.redirect,
          response: CR(se, N, ie, J, l, f.v7_relativeSplatPath)
        };
      } else
        ne[ie] = await ER(te);
    return ne;
  }
  async function re(R, T, N, U, J) {
    let le = R.matches, fe = H("loader", R, J, N, T, null), ne = Promise.all(U.map(async (se) => {
      if (se.matches && se.match && se.controller) {
        let ke = (await H("loader", R, Bo(e.history, se.path, se.controller.signal), [se.match], se.matches, se.key))[se.match.route.id];
        return {
          [se.key]: ke
        };
      } else
        return Promise.resolve({
          [se.key]: {
            type: Te.error,
            error: Kt(404, {
              pathname: se.path
            })
          }
        });
    })), ie = await fe, te = (await ne).reduce((se, ye) => Object.assign(se, ye), {});
    return await Promise.all([RR(T, ie, J.signal, le, R.loaderData), PR(T, te, U)]), {
      loaderResults: ie,
      fetcherResults: te
    };
  }
  function ge() {
    j = !0, z.push(...Io()), be.forEach((R, T) => {
      M.has(T) && B.add(T), qt(T);
    });
  }
  function me(R, T, N) {
    N === void 0 && (N = {}), S.fetchers.set(R, T), Xe({
      fetchers: new Map(S.fetchers)
    }, {
      flushSync: (N && N.flushSync) === !0
    });
  }
  function We(R, T, N, U) {
    U === void 0 && (U = {});
    let J = qi(S.matches, T);
    Ft(R), Xe({
      errors: {
        [J.route.id]: N
      },
      fetchers: new Map(S.fetchers)
    }, {
      flushSync: (U && U.flushSync) === !0
    });
  }
  function bn(R) {
    return Se.set(R, (Se.get(R) || 0) + 1), ce.has(R) && ce.delete(R), S.fetchers.get(R) || hR;
  }
  function Ft(R) {
    let T = S.fetchers.get(R);
    M.has(R) && !(T && T.state === "loading" && ae.has(R)) && qt(R), be.delete(R), ae.delete(R), ue.delete(R), f.v7_fetcherPersist && ce.delete(R), B.delete(R), S.fetchers.delete(R);
  }
  function es(R) {
    let T = (Se.get(R) || 0) - 1;
    T <= 0 ? (Se.delete(R), ce.add(R), f.v7_fetcherPersist || Ft(R)) : Se.set(R, T), Xe({
      fetchers: new Map(S.fetchers)
    });
  }
  function qt(R) {
    let T = M.get(R);
    T && (T.abort(), M.delete(R));
  }
  function Xn(R) {
    for (let T of R) {
      let N = bn(T), U = ti(N.data);
      S.fetchers.set(T, U);
    }
  }
  function No() {
    let R = [], T = !1;
    for (let N of ue) {
      let U = S.fetchers.get(N);
      Ie(U, "Expected fetcher: " + N), U.state === "loading" && (ue.delete(N), R.push(N), T = !0);
    }
    return Xn(R), T;
  }
  function Jn(R) {
    let T = [];
    for (let [N, U] of ae)
      if (U < R) {
        let J = S.fetchers.get(N);
        Ie(J, "Expected fetcher: " + N), J.state === "loading" && (qt(N), ae.delete(N), T.push(N));
      }
    return Xn(T), T.length > 0;
  }
  function Ni(R, T) {
    let N = S.blockers.get(R) || hs;
    return Oe.get(R) !== T && Oe.set(R, T), N;
  }
  function Li(R) {
    S.blockers.delete(R), Oe.delete(R);
  }
  function Zn(R, T) {
    let N = S.blockers.get(R) || hs;
    Ie(N.state === "unblocked" && T.state === "blocked" || N.state === "blocked" && T.state === "blocked" || N.state === "blocked" && T.state === "proceeding" || N.state === "blocked" && T.state === "unblocked" || N.state === "proceeding" && T.state === "unblocked", "Invalid blocker state transition: " + N.state + " -> " + T.state);
    let U = new Map(S.blockers);
    U.set(R, T), Xe({
      blockers: U
    });
  }
  function ts(R) {
    let {
      currentLocation: T,
      nextLocation: N,
      historyAction: U
    } = R;
    if (Oe.size === 0)
      return;
    Oe.size > 1 && Eo(!1, "A router only supports one blocker at a time");
    let J = Array.from(Oe.entries()), [le, fe] = J[J.length - 1], ne = S.blockers.get(le);
    if (!(ne && ne.state === "proceeding") && fe({
      currentLocation: T,
      nextLocation: N,
      historyAction: U
    }))
      return le;
  }
  function Lo(R) {
    let T = Kt(404, {
      pathname: R
    }), N = s || a, {
      matches: U,
      route: J
    } = H0(N);
    return Io(), {
      notFoundMatches: U,
      route: J,
      error: T
    };
  }
  function Io(R) {
    let T = [];
    return Ce.forEach((N, U) => {
      (!R || R(U)) && (N.cancel(), T.push(U), Ce.delete(U));
    }), T;
  }
  function de(R, T, N) {
    if (h = R, m = T, y = N || null, !v && S.navigation === ap) {
      v = !0;
      let U = vt(S.location, S.matches);
      U != null && Xe({
        restoreScrollPosition: U
      });
    }
    return () => {
      h = null, m = null, y = null;
    };
  }
  function Mt(R, T) {
    return y && y(R, T.map((U) => BO(U, S.loaderData))) || R.key;
  }
  function ze(R, T) {
    if (h && m) {
      let N = Mt(R, T);
      h[N] = m();
    }
  }
  function vt(R, T) {
    if (h) {
      let N = Mt(R, T), U = h[N];
      if (typeof U == "number")
        return U;
    }
    return null;
  }
  function gt(R, T, N) {
    if (c)
      if (R) {
        if (Object.keys(R[0].params).length > 0)
          return {
            active: !0,
            matches: Xu(T, N, l, !0)
          };
      } else
        return {
          active: !0,
          matches: Xu(T, N, l, !0) || []
        };
    return {
      active: !1,
      matches: null
    };
  }
  async function Ii(R, T, N, U) {
    if (!c)
      return {
        type: "success",
        matches: R
      };
    let J = R;
    for (; ; ) {
      let le = s == null, fe = s || a, ne = o;
      try {
        await c({
          signal: N,
          path: T,
          matches: J,
          fetcherKey: U,
          patch: (se, ye) => {
            N.aborted || I0(se, ye, fe, ne, i);
          }
        });
      } catch (se) {
        return {
          type: "error",
          error: se,
          partialMatches: J
        };
      } finally {
        le && !N.aborted && (a = [...a]);
      }
      if (N.aborted)
        return {
          type: "aborted"
        };
      let ie = Jo(fe, T, l);
      if (ie)
        return {
          type: "success",
          matches: ie
        };
      let te = Xu(fe, T, l, !0);
      if (!te || J.length === te.length && J.every((se, ye) => se.route.id === te[ye].route.id))
        return {
          type: "success",
          matches: null
        };
      J = te;
    }
  }
  function Td(R) {
    o = {}, s = Qc(R, i, void 0, o);
  }
  function rs(R, T) {
    let N = s == null;
    I0(R, T, s || a, o, i), N && (a = [...a], Xe({}));
  }
  return C = {
    get basename() {
      return l;
    },
    get future() {
      return f;
    },
    get state() {
      return S;
    },
    get routes() {
      return a;
    },
    get window() {
      return t;
    },
    initialize: zr,
    subscribe: En,
    enableScrollRestoration: de,
    navigate: Cn,
    fetch: A,
    revalidate: Gn,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (R) => e.history.createHref(R),
    encodeLocation: (R) => e.history.encodeLocation(R),
    getFetcher: bn,
    deleteFetcher: es,
    dispose: Kn,
    getBlocker: Ni,
    deleteBlocker: Li,
    patchRoutes: rs,
    _internalFetchControllers: M,
    _internalActiveDeferreds: Ce,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Td
  }, C;
}
function mR(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function ey(e, t, r, n, i, o, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let f of t)
      if (l.push(f), f.route.id === a) {
        u = f;
        break;
      }
  } else
    l = t, u = t[t.length - 1];
  let c = oR(i || ".", iR(l, o), ed(e.pathname, r) || e.pathname, s === "path");
  if (i == null && (c.search = e.search, c.hash = e.hash), (i == null || i === "" || i === ".") && u) {
    let f = rv(c.search);
    if (u.route.index && !f)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && f) {
      let d = new URLSearchParams(c.search), w = d.getAll("index");
      d.delete("index"), w.filter((y) => y).forEach((y) => d.append("index", y));
      let h = d.toString();
      c.search = h ? "?" + h : "";
    }
  }
  return n && r !== "/" && (c.pathname = c.pathname === "/" ? r : qs([r, c.pathname])), jl(c);
}
function F0(e, t, r, n) {
  if (!n || !mR(n))
    return {
      path: r
    };
  if (n.formMethod && !OR(n.formMethod))
    return {
      path: r,
      error: Kt(405, {
        method: n.formMethod
      })
    };
  let i = () => ({
    path: r,
    error: Kt(400, {
      type: "invalid-body"
    })
  }), o = n.formMethod || "get", a = e ? o.toUpperCase() : o.toLowerCase(), s = bC(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!Hr(a))
        return i();
      let d = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce((w, h) => {
          let [y, m] = h;
          return "" + w + y + "=" + m + `
`;
        }, "")
      ) : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: d
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!Hr(a))
        return i();
      try {
        let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: d,
            text: void 0
          }
        };
      } catch {
        return i();
      }
    }
  }
  Ie(typeof FormData == "function", "FormData is not available in this environment");
  let l, u;
  if (n.formData)
    l = ry(n.formData), u = n.formData;
  else if (n.body instanceof FormData)
    l = ry(n.body), u = n.body;
  else if (n.body instanceof URLSearchParams)
    l = n.body, u = z0(l);
  else if (n.body == null)
    l = new URLSearchParams(), u = new FormData();
  else
    try {
      l = new URLSearchParams(n.body), u = z0(l);
    } catch {
      return i();
    }
  let c = {
    formMethod: a,
    formAction: s,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0
  };
  if (Hr(c.formMethod))
    return {
      path: r,
      submission: c
    };
  let f = Ai(r);
  return t && f.search && rv(f.search) && l.append("index", ""), f.search = "?" + l, {
    path: jl(f),
    submission: c
  };
}
function M0(e, t, r) {
  r === void 0 && (r = !1);
  let n = e.findIndex((i) => i.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function N0(e, t, r, n, i, o, a, s, l, u, c, f, d, w, h, y) {
  let m = y ? mr(y[1]) ? y[1].error : y[1].data : void 0, v = e.createURL(t.location), p = e.createURL(i), g = r;
  o && t.errors ? g = M0(r, Object.keys(t.errors)[0], !0) : y && mr(y[1]) && (g = M0(r, y[0]));
  let x = y ? y[1].statusCode : void 0, E = a && x && x >= 400, C = g.filter((b, $) => {
    let {
      route: k
    } = b;
    if (k.lazy)
      return !0;
    if (k.loader == null)
      return !1;
    if (o)
      return ty(k, t.loaderData, t.errors);
    if (vR(t.loaderData, t.matches[$], b) || l.some((D) => D === b.route.id))
      return !0;
    let _ = t.matches[$], P = b;
    return L0(b, Ve({
      currentUrl: v,
      currentParams: _.params,
      nextUrl: p,
      nextParams: P.params
    }, n, {
      actionResult: m,
      actionStatus: x,
      defaultShouldRevalidate: E ? !1 : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        s || v.pathname + v.search === p.pathname + p.search || // Search params affect all loaders
        v.search !== p.search || CC(_, P)
      )
    }));
  }), S = [];
  return f.forEach((b, $) => {
    if (o || !r.some((L) => L.route.id === b.routeId) || c.has($))
      return;
    let k = Jo(w, b.path, h);
    if (!k) {
      S.push({
        key: $,
        routeId: b.routeId,
        path: b.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let _ = t.fetchers.get($), P = Ps(k, b.path), D = !1;
    d.has($) ? D = !1 : u.has($) ? (u.delete($), D = !0) : _ && _.state !== "idle" && _.data === void 0 ? D = s : D = L0(P, Ve({
      currentUrl: v,
      currentParams: t.matches[t.matches.length - 1].params,
      nextUrl: p,
      nextParams: r[r.length - 1].params
    }, n, {
      actionResult: m,
      actionStatus: x,
      defaultShouldRevalidate: E ? !1 : s
    })), D && S.push({
      key: $,
      routeId: b.routeId,
      path: b.path,
      matches: k,
      match: P,
      controller: new AbortController()
    });
  }), [C, S];
}
function ty(e, t, r) {
  if (e.lazy)
    return !0;
  if (!e.loader)
    return !1;
  let n = t != null && t[e.id] !== void 0, i = r != null && r[e.id] !== void 0;
  return !n && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !n && !i;
}
function vR(e, t, r) {
  let n = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    r.route.id !== t.route.id
  ), i = e[r.route.id] === void 0;
  return n || i;
}
function CC(e, t) {
  let r = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function L0(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean")
      return r;
  }
  return t.defaultShouldRevalidate;
}
function I0(e, t, r, n, i) {
  var o;
  let a;
  if (e) {
    let u = n[e];
    Ie(u, "No route found to patch children into: routeId = " + e), u.children || (u.children = []), a = u.children;
  } else
    a = r;
  let s = t.filter((u) => !a.some((c) => kC(u, c))), l = Qc(s, i, [e || "_", "patch", String(((o = a) == null ? void 0 : o.length) || "0")], n);
  a.push(...l);
}
function kC(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every((r, n) => {
    var i;
    return (i = t.children) == null ? void 0 : i.some((o) => kC(r, o));
  }) : !1;
}
async function gR(e, t, r) {
  if (!e.lazy)
    return;
  let n = await e.lazy();
  if (!e.lazy)
    return;
  let i = r[e.id];
  Ie(i, "No route found in manifest");
  let o = {};
  for (let a in n) {
    let l = i[a] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    a !== "hasErrorBoundary";
    Eo(!l, 'Route "' + i.id + '" has a static property "' + a + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + a + '" will be ignored.')), !l && !UO.has(a) && (o[a] = n[a]);
  }
  Object.assign(i, o), Object.assign(i, Ve({}, t(i), {
    lazy: void 0
  }));
}
async function wR(e) {
  let {
    matches: t
  } = e, r = t.filter((i) => i.shouldLoad);
  return (await Promise.all(r.map((i) => i.resolve()))).reduce((i, o, a) => Object.assign(i, {
    [r[a].route.id]: o
  }), {});
}
async function SR(e, t, r, n, i, o, a, s, l, u) {
  let c = o.map((w) => w.route.lazy ? gR(w.route, l, s) : void 0), f = o.map((w, h) => {
    let y = c[h], m = i.some((p) => p.route.id === w.route.id);
    return Ve({}, w, {
      shouldLoad: m,
      resolve: async (p) => (p && n.method === "GET" && (w.route.lazy || w.route.loader) && (m = !0), m ? xR(t, n, w, y, p, u) : Promise.resolve({
        type: Te.data,
        result: void 0
      }))
    });
  }), d = await e({
    matches: f,
    request: n,
    params: o[0].params,
    fetcherKey: a,
    context: u
  });
  try {
    await Promise.all(c);
  } catch {
  }
  return d;
}
async function xR(e, t, r, n, i, o) {
  let a, s, l = (u) => {
    let c, f = new Promise((h, y) => c = y);
    s = () => c(), t.signal.addEventListener("abort", s);
    let d = (h) => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + r.route.id + "]"))) : u({
      request: t,
      params: r.params,
      context: o
    }, ...h !== void 0 ? [h] : []), w = (async () => {
      try {
        return {
          type: "data",
          result: await (i ? i((y) => d(y)) : d())
        };
      } catch (h) {
        return {
          type: "error",
          result: h
        };
      }
    })();
    return Promise.race([w, f]);
  };
  try {
    let u = r.route[e];
    if (n)
      if (u) {
        let c, [f] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          l(u).catch((d) => {
            c = d;
          }),
          n
        ]);
        if (c !== void 0)
          throw c;
        a = f;
      } else if (await n, u = r.route[e], u)
        a = await l(u);
      else if (e === "action") {
        let c = new URL(t.url), f = c.pathname + c.search;
        throw Kt(405, {
          method: t.method,
          pathname: f,
          routeId: r.route.id
        });
      } else
        return {
          type: Te.data,
          result: void 0
        };
    else if (u)
      a = await l(u);
    else {
      let c = new URL(t.url), f = c.pathname + c.search;
      throw Kt(404, {
        pathname: f
      });
    }
    Ie(a.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (u) {
    return {
      type: Te.error,
      result: u
    };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function ER(e) {
  let {
    result: t,
    type: r
  } = e;
  if (_C(t)) {
    let f;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d) ? t.body == null ? f = null : f = await t.json() : f = await t.text();
    } catch (d) {
      return {
        type: Te.error,
        error: d
      };
    }
    return r === Te.error ? {
      type: Te.error,
      error: new Zh(t.status, t.statusText, f),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: Te.data,
      data: f,
      statusCode: t.status,
      headers: t.headers
    };
  }
  if (r === Te.error) {
    if (W0(t)) {
      var n, i;
      if (t.data instanceof Error) {
        var o, a;
        return {
          type: Te.error,
          error: t.data,
          statusCode: (o = t.init) == null ? void 0 : o.status,
          headers: (a = t.init) != null && a.headers ? new Headers(t.init.headers) : void 0
        };
      }
      return {
        type: Te.error,
        error: new Zh(((n = t.init) == null ? void 0 : n.status) || 500, void 0, t.data),
        statusCode: Kc(t) ? t.status : void 0,
        headers: (i = t.init) != null && i.headers ? new Headers(t.init.headers) : void 0
      };
    }
    return {
      type: Te.error,
      error: t,
      statusCode: Kc(t) ? t.status : void 0
    };
  }
  if ($R(t)) {
    var s, l;
    return {
      type: Te.deferred,
      deferredData: t,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers: ((l = t.init) == null ? void 0 : l.headers) && new Headers(t.init.headers)
    };
  }
  if (W0(t)) {
    var u, c;
    return {
      type: Te.data,
      data: t.data,
      statusCode: (u = t.init) == null ? void 0 : u.status,
      headers: (c = t.init) != null && c.headers ? new Headers(t.init.headers) : void 0
    };
  }
  return {
    type: Te.data,
    data: t
  };
}
function CR(e, t, r, n, i, o) {
  let a = e.headers.get("Location");
  if (Ie(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !ev.test(a)) {
    let s = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    a = ey(new URL(t.url), s, i, !0, a, o), e.headers.set("Location", a);
  }
  return e;
}
function j0(e, t, r) {
  if (ev.test(e)) {
    let n = e, i = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n), o = ed(i.pathname, r) != null;
    if (i.origin === t.origin && o)
      return i.pathname + i.search + i.hash;
  }
  return e;
}
function Bo(e, t, r, n) {
  let i = e.createURL(bC(t)).toString(), o = {
    signal: r
  };
  if (n && Hr(n.formMethod)) {
    let {
      formMethod: a,
      formEncType: s
    } = n;
    o.method = a.toUpperCase(), s === "application/json" ? (o.headers = new Headers({
      "Content-Type": s
    }), o.body = JSON.stringify(n.json)) : s === "text/plain" ? o.body = n.text : s === "application/x-www-form-urlencoded" && n.formData ? o.body = ry(n.formData) : o.body = n.formData;
  }
  return new Request(i, o);
}
function ry(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function z0(e) {
  let t = new FormData();
  for (let [r, n] of e.entries())
    t.append(r, n);
  return t;
}
function kR(e, t, r, n, i) {
  let o = {}, a = null, s, l = !1, u = {}, c = r && mr(r[1]) ? r[1].error : void 0;
  return e.forEach((f) => {
    if (!(f.route.id in t))
      return;
    let d = f.route.id, w = t[d];
    if (Ie(!to(w), "Cannot handle redirect results in processLoaderData"), mr(w)) {
      let h = w.error;
      c !== void 0 && (h = c, c = void 0), a = a || {};
      {
        let y = qi(e, d);
        a[y.route.id] == null && (a[y.route.id] = h);
      }
      o[d] = void 0, l || (l = !0, s = Kc(w.error) ? w.error.status : 500), w.headers && (u[d] = w.headers);
    } else
      pi(w) ? (n.set(d, w.deferredData), o[d] = w.deferredData.data, w.statusCode != null && w.statusCode !== 200 && !l && (s = w.statusCode), w.headers && (u[d] = w.headers)) : (o[d] = w.data, w.statusCode && w.statusCode !== 200 && !l && (s = w.statusCode), w.headers && (u[d] = w.headers));
  }), c !== void 0 && r && (a = {
    [r[0]]: c
  }, o[r[0]] = void 0), {
    loaderData: o,
    errors: a,
    statusCode: s || 200,
    loaderHeaders: u
  };
}
function U0(e, t, r, n, i, o, a) {
  let {
    loaderData: s,
    errors: l
  } = kR(
    t,
    r,
    n,
    a
  );
  return i.forEach((u) => {
    let {
      key: c,
      match: f,
      controller: d
    } = u, w = o[c];
    if (Ie(w, "Did not find corresponding fetcher result"), !(d && d.signal.aborted))
      if (mr(w)) {
        let h = qi(e.matches, f?.route.id);
        l && l[h.route.id] || (l = Ve({}, l, {
          [h.route.id]: w.error
        })), e.fetchers.delete(c);
      } else if (to(w))
        Ie(!1, "Unhandled fetcher revalidation redirect");
      else if (pi(w))
        Ie(!1, "Unhandled fetcher deferred data");
      else {
        let h = ti(w.data);
        e.fetchers.set(c, h);
      }
  }), {
    loaderData: s,
    errors: l
  };
}
function V0(e, t, r, n) {
  let i = Ve({}, t);
  for (let o of r) {
    let a = o.route.id;
    if (t.hasOwnProperty(a) ? t[a] !== void 0 && (i[a] = t[a]) : e[a] !== void 0 && o.route.loader && (i[a] = e[a]), n && n.hasOwnProperty(a))
      break;
  }
  return i;
}
function B0(e) {
  return e ? mr(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function qi(e, t) {
  return (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0];
}
function H0(e) {
  let t = e.length === 1 ? e[0] : e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function Kt(e, t) {
  let {
    pathname: r,
    routeId: n,
    method: i,
    type: o,
    message: a
  } = t === void 0 ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", i && r && n ? l = "You made a " + i + ' request to "' + r + '" but ' + ('did not provide a `loader` for route "' + n + '", ') + "so there is no way to handle the request." : o === "defer-action" ? l = "defer() is not supported in actions" : o === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", l = 'Route "' + n + '" does not match URL "' + r + '"') : e === 404 ? (s = "Not Found", l = 'No route matches URL "' + r + '"') : e === 405 && (s = "Method Not Allowed", i && r && n ? l = "You made a " + i.toUpperCase() + ' request to "' + r + '" but ' + ('did not provide an `action` for route "' + n + '", ') + "so there is no way to handle the request." : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')), new Zh(e || 500, s, new Error(l), !0);
}
function gu(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, i] = t[r];
    if (to(i))
      return {
        key: n,
        result: i
      };
  }
}
function bC(e) {
  let t = typeof e == "string" ? Ai(e) : e;
  return jl(Ve({}, t, {
    hash: ""
  }));
}
function bR(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function _R(e) {
  return _C(e.result) && dR.has(e.result.status);
}
function pi(e) {
  return e.type === Te.deferred;
}
function mr(e) {
  return e.type === Te.error;
}
function to(e) {
  return (e && e.type) === Te.redirect;
}
function W0(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function $R(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function _C(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function OR(e) {
  return fR.has(e.toLowerCase());
}
function Hr(e) {
  return uR.has(e.toLowerCase());
}
async function RR(e, t, r, n, i) {
  let o = Object.entries(t);
  for (let a = 0; a < o.length; a++) {
    let [s, l] = o[a], u = e.find((d) => d?.route.id === s);
    if (!u)
      continue;
    let c = n.find((d) => d.route.id === u.route.id), f = c != null && !CC(c, u) && (i && i[u.route.id]) !== void 0;
    pi(l) && f && await tv(l, r, !1).then((d) => {
      d && (t[s] = d);
    });
  }
}
async function PR(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let {
      key: i,
      routeId: o,
      controller: a
    } = r[n], s = t[i];
    e.find((u) => u?.route.id === o) && pi(s) && (Ie(a, "Expected an AbortController for revalidating fetcher deferred result"), await tv(s, a.signal, !0).then((u) => {
      u && (t[i] = u);
    }));
  }
}
async function tv(e, t, r) {
  if (r === void 0 && (r = !1), !await e.deferredData.resolveData(t)) {
    if (r)
      try {
        return {
          type: Te.data,
          data: e.deferredData.unwrappedData
        };
      } catch (i) {
        return {
          type: Te.error,
          error: i
        };
      }
    return {
      type: Te.data,
      data: e.deferredData.data
    };
  }
}
function rv(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ps(e, t) {
  let r = typeof t == "string" ? Ai(t).search : t.search;
  if (e[e.length - 1].route.index && rv(r || ""))
    return e[e.length - 1];
  let n = SC(e);
  return n[n.length - 1];
}
function q0(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: i,
    formData: o,
    json: a
  } = e;
  if (!(!t || !r || !n)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: a,
        text: void 0
      };
  }
}
function sp(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function TR(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function ys(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function DR(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function ti(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function AR(e, t) {
  try {
    let r = e.sessionStorage.getItem(EC);
    if (r) {
      let n = JSON.parse(r);
      for (let [i, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {
  }
}
function FR(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, i] of t)
      r[n] = [...i];
    try {
      e.sessionStorage.setItem(EC, JSON.stringify(r));
    } catch (n) {
      Eo(!1, "Failed to save applied view transitions in sessionStorage (" + n + ").");
    }
  }
}
function $C(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = $C(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function fU() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = $C(e)) && (n && (n += " "), n += t);
  return n;
}
var OC = { exports: {} }, MR = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", NR = MR, LR = NR;
function RC() {
}
function PC() {
}
PC.resetWarningCache = RC;
var IR = function() {
  function e(n, i, o, a, s, l) {
    if (l !== LR) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: PC,
    resetWarningCache: RC
  };
  return r.PropTypes = r, r;
};
OC.exports = IR();
var TC = OC.exports;
const qr = /* @__PURE__ */ Ri(TC);
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gc.apply(null, arguments);
}
var dU = "-ms-", pU = "-moz-", hU = "-webkit-", DC = "comm", AC = "rule", FC = "decl", jR = "@import", zR = "@keyframes", UR = "@layer", VR = Math.abs, nv = String.fromCharCode, BR = Object.assign;
function yU(e, t) {
  return mn(e, 0) ^ 45 ? (((t << 2 ^ mn(e, 0)) << 2 ^ mn(e, 1)) << 2 ^ mn(e, 2)) << 2 ^ mn(e, 3) : 0;
}
function MC(e) {
  return e.trim();
}
function mU(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ju(e, t, r) {
  return e.replace(t, r);
}
function HR(e, t) {
  return e.indexOf(t);
}
function mn(e, t) {
  return e.charCodeAt(t) | 0;
}
function El(e, t, r) {
  return e.slice(t, r);
}
function ai(e) {
  return e.length;
}
function iv(e) {
  return e.length;
}
function wu(e, t) {
  return t.push(e), e;
}
function vU(e, t) {
  return e.map(t).join("");
}
var td = 1, Da = 1, NC = 0, Nr = 0, at = 0, qa = "";
function rd(e, t, r, n, i, o, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: td, column: Da, length: a, return: "" };
}
function gU(e, t) {
  return BR(rd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function WR() {
  return at;
}
function qR() {
  return at = Nr > 0 ? mn(qa, --Nr) : 0, Da--, at === 10 && (Da = 1, td--), at;
}
function Jr() {
  return at = Nr < NC ? mn(qa, Nr++) : 0, Da++, at === 10 && (Da = 1, td++), at;
}
function co() {
  return mn(qa, Nr);
}
function Zu() {
  return Nr;
}
function nd(e, t) {
  return El(qa, e, t);
}
function ny(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
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
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function QR(e) {
  return td = Da = 1, NC = ai(qa = e), Nr = 0, [];
}
function KR(e) {
  return qa = "", e;
}
function lp(e) {
  return MC(nd(Nr - 1, iy(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function GR(e) {
  for (; (at = co()) && at < 33; )
    Jr();
  return ny(e) > 2 || ny(at) > 3 ? "" : " ";
}
function YR(e, t) {
  for (; --t && Jr() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return nd(e, Zu() + (t < 6 && co() == 32 && Jr() == 32));
}
function iy(e) {
  for (; Jr(); )
    switch (at) {
      case e:
        return Nr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && iy(at);
        break;
      case 40:
        e === 41 && iy(e);
        break;
      case 92:
        Jr();
        break;
    }
  return Nr;
}
function XR(e, t) {
  for (; Jr() && e + at !== 57; )
    if (e + at === 84 && co() === 47)
      break;
  return "/*" + nd(t, Nr - 1) + "*" + nv(e === 47 ? e : Jr());
}
function JR(e) {
  for (; !ny(co()); )
    Jr();
  return nd(e, Nr);
}
function wU(e) {
  return KR(ec("", null, null, null, [""], e = QR(e), 0, [0], e));
}
function ec(e, t, r, n, i, o, a, s, l) {
  for (var u = 0, c = 0, f = a, d = 0, w = 0, h = 0, y = 1, m = 1, v = 1, p = 0, g = "", x = i, E = o, C = n, S = g; m; )
    switch (h = p, p = Jr()) {
      case 40:
        if (h != 108 && mn(S, f - 1) == 58) {
          HR(S += Ju(lp(p), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += lp(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += GR(h);
        break;
      case 92:
        S += YR(Zu() - 1, 7);
        continue;
      case 47:
        switch (co()) {
          case 42:
          case 47:
            wu(ZR(XR(Jr(), Zu()), t, r), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * y:
        s[u++] = ai(S) * v;
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            m = 0;
          case 59 + c:
            v == -1 && (S = Ju(S, /\f/g, "")), w > 0 && ai(S) - f && wu(w > 32 ? K0(S + ";", n, r, f - 1) : K0(Ju(S, " ", "") + ";", n, r, f - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (wu(C = Q0(S, t, r, u, c, i, s, g, x = [], E = [], f), o), p === 123)
              if (c === 0)
                ec(S, t, C, C, x, o, f, s, E);
              else
                switch (d === 99 && mn(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ec(e, C, C, n && wu(Q0(e, C, C, 0, 0, i, s, g, i, x = [], f), E), i, E, f, s, n ? x : E);
                    break;
                  default:
                    ec(S, C, C, C, [""], E, 0, s, E);
                }
        }
        u = c = w = 0, y = v = 1, g = S = "", f = a;
        break;
      case 58:
        f = 1 + ai(S), w = h;
      default:
        if (y < 1) {
          if (p == 123)
            --y;
          else if (p == 125 && y++ == 0 && qR() == 125)
            continue;
        }
        switch (S += nv(p), p * y) {
          case 38:
            v = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[u++] = (ai(S) - 1) * v, v = 1;
            break;
          case 64:
            co() === 45 && (S += lp(Jr())), d = co(), c = f = ai(g = S += JR(Zu())), p++;
            break;
          case 45:
            h === 45 && ai(S) == 2 && (y = 0);
        }
    }
  return o;
}
function Q0(e, t, r, n, i, o, a, s, l, u, c) {
  for (var f = i - 1, d = i === 0 ? o : [""], w = iv(d), h = 0, y = 0, m = 0; h < n; ++h)
    for (var v = 0, p = El(e, f + 1, f = VR(y = a[h])), g = e; v < w; ++v)
      (g = MC(y > 0 ? d[v] + " " + p : Ju(p, /&\f/g, d[v]))) && (l[m++] = g);
  return rd(e, t, r, i === 0 ? AC : s, l, u, c);
}
function ZR(e, t, r) {
  return rd(e, t, r, DC, nv(WR()), El(e, 2, -2), 0);
}
function K0(e, t, r, n) {
  return rd(e, t, r, FC, El(e, 0, n), El(e, n + 1, -1), n);
}
function G0(e, t) {
  for (var r = "", n = iv(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function SU(e, t, r, n) {
  switch (e.type) {
    case UR:
      if (e.children.length) break;
    case jR:
    case FC:
      return e.return = e.return || e.value;
    case DC:
      return "";
    case zR:
      return e.return = e.value + "{" + G0(e.children, n) + "}";
    case AC:
      e.value = e.props.join(",");
  }
  return ai(r = G0(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function xU(e) {
  var t = iv(e);
  return function(r, n, i, o) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, i, o) || "";
    return a;
  };
}
function EU(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ov(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function oy(e, t) {
  return oy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, oy(e, t);
}
function av(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oy(e, t);
}
function eP(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function tP(e, t) {
  e.classList ? e.classList.add(t) : eP(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Y0(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function rP(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Y0(e.className, t) : e.setAttribute("class", Y0(e.className && e.className.baseVal || "", t));
}
const X0 = {
  disabled: !1
}, Yc = V.createContext(null);
var LC = function(t) {
  return t.scrollTop;
}, Ts = "unmounted", Vi = "exited", Bi = "entering", Zo = "entered", ay = "exiting", Qn = /* @__PURE__ */ function(e) {
  av(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = i, s = a && !a.isMounting ? n.enter : n.appear, l;
    return o.appearStatus = null, n.in ? s ? (l = Vi, o.appearStatus = Bi) : l = Zo : n.unmountOnExit || n.mountOnEnter ? l = Ts : l = Vi, o.state = {
      status: l
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === Ts ? {
      status: Vi
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Bi && a !== Zo && (o = Bi) : (a === Bi || a === Zo) && (o = ay);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, a, s;
    return o = a = s = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, s = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: s
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Bi) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Rs.findDOMNode(this);
          a && LC(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Vi && this.setState({
      status: Ts
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, s = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [s] : [Rs.findDOMNode(this), s], u = l[0], c = l[1], f = this.getTimeouts(), d = s ? f.appear : f.enter;
    if (!i && !a || X0.disabled) {
      this.safeSetState({
        status: Zo
      }, function() {
        o.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Bi
    }, function() {
      o.props.onEntering(u, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Zo
        }, function() {
          o.props.onEntered(u, c);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Rs.findDOMNode(this);
    if (!o || X0.disabled) {
      this.safeSetState({
        status: Vi
      }, function() {
        i.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: ay
    }, function() {
      i.props.onExiting(s), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vi
        }, function() {
          i.props.onExited(s);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, o.nextCallback = null, i(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Rs.findDOMNode(this), s = i == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === Ts)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var s = ov(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ V.createElement(Yc.Provider, {
        value: null
      }, typeof a == "function" ? a(i, s) : V.cloneElement(V.Children.only(a), s))
    );
  }, t;
}(V.Component);
Qn.contextType = Yc;
Qn.propTypes = {};
function Ho() {
}
Qn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ho,
  onEntering: Ho,
  onEntered: Ho,
  onExit: Ho,
  onExiting: Ho,
  onExited: Ho
};
Qn.UNMOUNTED = Ts;
Qn.EXITED = Vi;
Qn.ENTERING = Bi;
Qn.ENTERED = Zo;
Qn.EXITING = ay;
var nP = function(t, r) {
  return t && r && r.split(" ").forEach(function(n) {
    return tP(t, n);
  });
}, up = function(t, r) {
  return t && r && r.split(" ").forEach(function(n) {
    return rP(t, n);
  });
}, IC = /* @__PURE__ */ function(e) {
  av(t, e);
  function t() {
    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return n = e.call.apply(e, [this].concat(o)) || this, n.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, n.onEnter = function(s, l) {
      var u = n.resolveArguments(s, l), c = u[0], f = u[1];
      n.removeClasses(c, "exit"), n.addClass(c, f ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(s, l);
    }, n.onEntering = function(s, l) {
      var u = n.resolveArguments(s, l), c = u[0], f = u[1], d = f ? "appear" : "enter";
      n.addClass(c, d, "active"), n.props.onEntering && n.props.onEntering(s, l);
    }, n.onEntered = function(s, l) {
      var u = n.resolveArguments(s, l), c = u[0], f = u[1], d = f ? "appear" : "enter";
      n.removeClasses(c, d), n.addClass(c, d, "done"), n.props.onEntered && n.props.onEntered(s, l);
    }, n.onExit = function(s) {
      var l = n.resolveArguments(s), u = l[0];
      n.removeClasses(u, "appear"), n.removeClasses(u, "enter"), n.addClass(u, "exit", "base"), n.props.onExit && n.props.onExit(s);
    }, n.onExiting = function(s) {
      var l = n.resolveArguments(s), u = l[0];
      n.addClass(u, "exit", "active"), n.props.onExiting && n.props.onExiting(s);
    }, n.onExited = function(s) {
      var l = n.resolveArguments(s), u = l[0];
      n.removeClasses(u, "exit"), n.addClass(u, "exit", "done"), n.props.onExited && n.props.onExited(s);
    }, n.resolveArguments = function(s, l) {
      return n.props.nodeRef ? [n.props.nodeRef.current, s] : [s, l];
    }, n.getClassNames = function(s) {
      var l = n.props.classNames, u = typeof l == "string", c = u && l ? l + "-" : "", f = u ? "" + c + s : l[s], d = u ? f + "-active" : l[s + "Active"], w = u ? f + "-done" : l[s + "Done"];
      return {
        baseClassName: f,
        activeClassName: d,
        doneClassName: w
      };
    }, n;
  }
  var r = t.prototype;
  return r.addClass = function(i, o, a) {
    var s = this.getClassNames(o)[a + "ClassName"], l = this.getClassNames("enter"), u = l.doneClassName;
    o === "appear" && a === "done" && u && (s += " " + u), a === "active" && i && LC(i), s && (this.appliedClasses[o][a] = s, nP(i, s));
  }, r.removeClasses = function(i, o) {
    var a = this.appliedClasses[o], s = a.base, l = a.active, u = a.done;
    this.appliedClasses[o] = {}, s && up(i, s), l && up(i, l), u && up(i, u);
  }, r.render = function() {
    var i = this.props;
    i.classNames;
    var o = ov(i, ["classNames"]);
    return /* @__PURE__ */ V.createElement(Qn, Gc({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(V.Component);
IC.defaultProps = {
  classNames: ""
};
IC.propTypes = {};
function iP(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sv(e, t) {
  var r = function(o) {
    return t && Q.isValidElement(o) ? t(o) : o;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Q.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function oP(e, t) {
  e = e || {}, t = t || {};
  function r(c) {
    return c in t ? t[c] : e[c];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var o in e)
    o in t ? i.length && (n[o] = i, i = []) : i.push(o);
  var a, s = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var u = n[l][a];
        s[n[l][a]] = r(u);
      }
    s[l] = r(l);
  }
  for (a = 0; a < i.length; a++)
    s[i[a]] = r(i[a]);
  return s;
}
function ro(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function aP(e, t) {
  return sv(e.children, function(r) {
    return Q.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ro(r, "appear", e),
      enter: ro(r, "enter", e),
      exit: ro(r, "exit", e)
    });
  });
}
function sP(e, t, r) {
  var n = sv(e.children), i = oP(t, n);
  return Object.keys(i).forEach(function(o) {
    var a = i[o];
    if (Q.isValidElement(a)) {
      var s = o in t, l = o in n, u = t[o], c = Q.isValidElement(u) && !u.props.in;
      l && (!s || c) ? i[o] = Q.cloneElement(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ro(a, "exit", e),
        enter: ro(a, "enter", e)
      }) : !l && s && !c ? i[o] = Q.cloneElement(a, {
        in: !1
      }) : l && s && Q.isValidElement(u) && (i[o] = Q.cloneElement(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: ro(a, "exit", e),
        enter: ro(a, "enter", e)
      }));
    }
  }), i;
}
var lP = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, uP = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, jC = /* @__PURE__ */ function(e) {
  av(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var a = o.handleExited.bind(iP(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, o;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, o) {
    var a = o.children, s = o.handleExited, l = o.firstRender;
    return {
      children: l ? aP(i, s) : sP(i, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(i, o) {
    var a = sv(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(s) {
      var l = Gc({}, s.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var i = this.props, o = i.component, a = i.childFactory, s = ov(i, ["component", "childFactory"]), l = this.state.contextValue, u = lP(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, o === null ? /* @__PURE__ */ V.createElement(Yc.Provider, {
      value: l
    }, u) : /* @__PURE__ */ V.createElement(Yc.Provider, {
      value: l
    }, /* @__PURE__ */ V.createElement(o, s, u));
  }, t;
}(V.Component);
jC.propTypes = {};
jC.defaultProps = uP;
var ir = "top", Lr = "bottom", Ir = "right", or = "left", lv = "auto", zl = [ir, Lr, Ir, or], Aa = "start", Cl = "end", cP = "clippingParents", zC = "viewport", ms = "popper", fP = "reference", J0 = /* @__PURE__ */ zl.reduce(function(e, t) {
  return e.concat([t + "-" + Aa, t + "-" + Cl]);
}, []), UC = /* @__PURE__ */ [].concat(zl, [lv]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Aa, t + "-" + Cl]);
}, []), dP = "beforeRead", pP = "read", hP = "afterRead", yP = "beforeMain", mP = "main", vP = "afterMain", gP = "beforeWrite", wP = "write", SP = "afterWrite", xP = [dP, pP, hP, yP, mP, vP, gP, wP, SP];
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Co(e) {
  var t = xr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ar(e) {
  var t = xr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function uv(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function EP(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !Ar(o) || !xn(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function CP(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], o = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Ar(i) || !xn(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const kP = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: EP,
  effect: CP,
  requires: ["computeStyles"]
};
function Sn(e) {
  return e.split("-")[0];
}
var fo = Math.max, Xc = Math.min, Fa = Math.round;
function sy() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function VC() {
  return !/^((?!chrome|android).)*safari/i.test(sy());
}
function Ma(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && Ar(e) && (i = e.offsetWidth > 0 && Fa(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fa(n.height) / e.offsetHeight || 1);
  var a = Co(e) ? xr(e) : window, s = a.visualViewport, l = !VC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, d = n.height / o;
  return {
    width: f,
    height: d,
    top: c,
    right: u + f,
    bottom: c + d,
    left: u,
    x: u,
    y: c
  };
}
function cv(e) {
  var t = Ma(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function BC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && uv(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Bn(e) {
  return xr(e).getComputedStyle(e);
}
function bP(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function Fi(e) {
  return ((Co(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function id(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (uv(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Fi(e)
  );
}
function Z0(e) {
  return !Ar(e) || // https://github.com/popperjs/popper-core/issues/837
  Bn(e).position === "fixed" ? null : e.offsetParent;
}
function _P(e) {
  var t = /firefox/i.test(sy()), r = /Trident/i.test(sy());
  if (r && Ar(e)) {
    var n = Bn(e);
    if (n.position === "fixed")
      return null;
  }
  var i = id(e);
  for (uv(i) && (i = i.host); Ar(i) && ["html", "body"].indexOf(xn(i)) < 0; ) {
    var o = Bn(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ul(e) {
  for (var t = xr(e), r = Z0(e); r && bP(r) && Bn(r).position === "static"; )
    r = Z0(r);
  return r && (xn(r) === "html" || xn(r) === "body" && Bn(r).position === "static") ? t : r || _P(e) || t;
}
function fv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qs(e, t, r) {
  return fo(e, Xc(t, r));
}
function $P(e, t, r) {
  var n = Qs(e, t, r);
  return n > r ? r : n;
}
function HC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function WC(e) {
  return Object.assign({}, HC(), e);
}
function qC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var OP = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, WC(typeof t != "number" ? t : qC(t, zl));
};
function RP(e) {
  var t, r = e.state, n = e.name, i = e.options, o = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Sn(r.placement), l = fv(s), u = [or, Ir].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!o || !a)) {
    var f = OP(i.padding, r), d = cv(o), w = l === "y" ? ir : or, h = l === "y" ? Lr : Ir, y = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], m = a[l] - r.rects.reference[l], v = Ul(o), p = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, g = y / 2 - m / 2, x = f[w], E = p - d[c] - f[h], C = p / 2 - d[c] / 2 + g, S = Qs(x, C, E), b = l;
    r.modifiersData[n] = (t = {}, t[b] = S, t.centerOffset = S - C, t);
  }
}
function PP(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || BC(t.elements.popper, i) && (t.elements.arrow = i));
}
const TP = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: RP,
  effect: PP,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Na(e) {
  return e.split("-")[1];
}
var DP = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function AP(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Fa(r * i) / i || 0,
    y: Fa(n * i) / i || 0
  };
}
function ew(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, d = a.x, w = d === void 0 ? 0 : d, h = a.y, y = h === void 0 ? 0 : h, m = typeof c == "function" ? c({
    x: w,
    y
  }) : {
    x: w,
    y
  };
  w = m.x, y = m.y;
  var v = a.hasOwnProperty("x"), p = a.hasOwnProperty("y"), g = or, x = ir, E = window;
  if (u) {
    var C = Ul(r), S = "clientHeight", b = "clientWidth";
    if (C === xr(r) && (C = Fi(r), Bn(C).position !== "static" && s === "absolute" && (S = "scrollHeight", b = "scrollWidth")), C = C, i === ir || (i === or || i === Ir) && o === Cl) {
      x = Lr;
      var $ = f && C === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[S]
      );
      y -= $ - n.height, y *= l ? 1 : -1;
    }
    if (i === or || (i === ir || i === Lr) && o === Cl) {
      g = Ir;
      var k = f && C === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[b]
      );
      w -= k - n.width, w *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: s
  }, u && DP), P = c === !0 ? AP({
    x: w,
    y
  }, xr(r)) : {
    x: w,
    y
  };
  if (w = P.x, y = P.y, l) {
    var D;
    return Object.assign({}, _, (D = {}, D[x] = p ? "0" : "", D[g] = v ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + y + "px)" : "translate3d(" + w + "px, " + y + "px, 0)", D));
  }
  return Object.assign({}, _, (t = {}, t[x] = p ? y + "px" : "", t[g] = v ? w + "px" : "", t.transform = "", t));
}
function FP(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Sn(t.placement),
    variation: Na(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ew(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ew(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const MP = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: FP,
  data: {}
};
var Su = {
  passive: !0
};
function NP(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = xr(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Su);
  }), s && l.addEventListener("resize", r.update, Su), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Su);
    }), s && l.removeEventListener("resize", r.update, Su);
  };
}
const LP = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: NP,
  data: {}
};
var IP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function tc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return IP[t];
  });
}
var jP = {
  start: "end",
  end: "start"
};
function tw(e) {
  return e.replace(/start|end/g, function(t) {
    return jP[t];
  });
}
function dv(e) {
  var t = xr(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function pv(e) {
  return Ma(Fi(e)).left + dv(e).scrollLeft;
}
function zP(e, t) {
  var r = xr(e), n = Fi(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = VC();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + pv(e),
    y: l
  };
}
function UP(e) {
  var t, r = Fi(e), n = dv(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = fo(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = fo(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + pv(e), l = -n.scrollTop;
  return Bn(i || r).direction === "rtl" && (s += fo(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function hv(e) {
  var t = Bn(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function QC(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Ar(e) && hv(e) ? e : QC(id(e));
}
function Ks(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = QC(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = xr(n), a = i ? [o].concat(o.visualViewport || [], hv(n) ? n : []) : n, s = t.concat(a);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ks(id(a)))
  );
}
function ly(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function VP(e, t) {
  var r = Ma(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function rw(e, t, r) {
  return t === zC ? ly(zP(e, r)) : Co(t) ? VP(t, r) : ly(UP(Fi(e)));
}
function BP(e) {
  var t = Ks(id(e)), r = ["absolute", "fixed"].indexOf(Bn(e).position) >= 0, n = r && Ar(e) ? Ul(e) : e;
  return Co(n) ? t.filter(function(i) {
    return Co(i) && BC(i, n) && xn(i) !== "body";
  }) : [];
}
function HP(e, t, r, n) {
  var i = t === "clippingParents" ? BP(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = rw(e, u, n);
    return l.top = fo(c.top, l.top), l.right = Xc(c.right, l.right), l.bottom = Xc(c.bottom, l.bottom), l.left = fo(c.left, l.left), l;
  }, rw(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function KC(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? Sn(n) : null, o = n ? Na(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ir:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case Lr:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ir:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case or:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? fv(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case Aa:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Cl:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function kl(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? cP : s, u = r.rootBoundary, c = u === void 0 ? zC : u, f = r.elementContext, d = f === void 0 ? ms : f, w = r.altBoundary, h = w === void 0 ? !1 : w, y = r.padding, m = y === void 0 ? 0 : y, v = WC(typeof m != "number" ? m : qC(m, zl)), p = d === ms ? fP : ms, g = e.rects.popper, x = e.elements[h ? p : d], E = HP(Co(x) ? x : x.contextElement || Fi(e.elements.popper), l, c, a), C = Ma(e.elements.reference), S = KC({
    reference: C,
    element: g,
    placement: i
  }), b = ly(Object.assign({}, g, S)), $ = d === ms ? b : C, k = {
    top: E.top - $.top + v.top,
    bottom: $.bottom - E.bottom + v.bottom,
    left: E.left - $.left + v.left,
    right: $.right - E.right + v.right
  }, _ = e.modifiersData.offset;
  if (d === ms && _) {
    var P = _[i];
    Object.keys(k).forEach(function(D) {
      var L = [Ir, Lr].indexOf(D) >= 0 ? 1 : -1, j = [ir, Lr].indexOf(D) >= 0 ? "y" : "x";
      k[D] += P[j] * L;
    });
  }
  return k;
}
function WP(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? UC : l, c = Na(n), f = c ? s ? J0 : J0.filter(function(h) {
    return Na(h) === c;
  }) : zl, d = f.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  d.length === 0 && (d = f);
  var w = d.reduce(function(h, y) {
    return h[y] = kl(e, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[Sn(y)], h;
  }, {});
  return Object.keys(w).sort(function(h, y) {
    return w[h] - w[y];
  });
}
function qP(e) {
  if (Sn(e) === lv)
    return [];
  var t = tc(e);
  return [tw(e), t, tw(t)];
}
function QP(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, d = r.altBoundary, w = r.flipVariations, h = w === void 0 ? !0 : w, y = r.allowedAutoPlacements, m = t.options.placement, v = Sn(m), p = v === m, g = l || (p || !h ? [tc(m)] : qP(m)), x = [m].concat(g).reduce(function(Se, ce) {
      return Se.concat(Sn(ce) === lv ? WP(t, {
        placement: ce,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : ce);
    }, []), E = t.rects.reference, C = t.rects.popper, S = /* @__PURE__ */ new Map(), b = !0, $ = x[0], k = 0; k < x.length; k++) {
      var _ = x[k], P = Sn(_), D = Na(_) === Aa, L = [ir, Lr].indexOf(P) >= 0, j = L ? "width" : "height", z = kl(t, {
        placement: _,
        boundary: c,
        rootBoundary: f,
        altBoundary: d,
        padding: u
      }), B = L ? D ? Ir : or : D ? Lr : ir;
      E[j] > C[j] && (B = tc(B));
      var M = tc(B), q = [];
      if (o && q.push(z[P] <= 0), s && q.push(z[B] <= 0, z[M] <= 0), q.every(function(Se) {
        return Se;
      })) {
        $ = _, b = !1;
        break;
      }
      S.set(_, q);
    }
    if (b)
      for (var G = h ? 3 : 1, ae = function(ce) {
        var Ce = x.find(function(Oe) {
          var Ye = S.get(Oe);
          if (Ye)
            return Ye.slice(0, ce).every(function(zr) {
              return zr;
            });
        });
        if (Ce)
          return $ = Ce, "break";
      }, ue = G; ue > 0; ue--) {
        var be = ae(ue);
        if (be === "break") break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const KP = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: QP,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function nw(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function iw(e) {
  return [ir, Ir, Lr, or].some(function(t) {
    return e[t] >= 0;
  });
}
function GP(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, a = kl(t, {
    elementContext: "reference"
  }), s = kl(t, {
    altBoundary: !0
  }), l = nw(a, n), u = nw(s, i, o), c = iw(l), f = iw(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const YP = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GP
};
function XP(e, t, r) {
  var n = Sn(e), i = [or, ir].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = o[0], s = o[1];
  return a = a || 0, s = (s || 0) * i, [or, Ir].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function JP(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, o = i === void 0 ? [0, 0] : i, a = UC.reduce(function(c, f) {
    return c[f] = XP(f, t.rects, o), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const ZP = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: JP
};
function eT(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = KC({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const tT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eT,
  data: {}
};
function rT(e) {
  return e === "x" ? "y" : "x";
}
function nT(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, d = r.tether, w = d === void 0 ? !0 : d, h = r.tetherOffset, y = h === void 0 ? 0 : h, m = kl(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), v = Sn(t.placement), p = Na(t.placement), g = !p, x = fv(v), E = rT(x), C = t.modifiersData.popperOffsets, S = t.rects.reference, b = t.rects.popper, $ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, k = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = {
    x: 0,
    y: 0
  };
  if (C) {
    if (o) {
      var D, L = x === "y" ? ir : or, j = x === "y" ? Lr : Ir, z = x === "y" ? "height" : "width", B = C[x], M = B + m[L], q = B - m[j], G = w ? -b[z] / 2 : 0, ae = p === Aa ? S[z] : b[z], ue = p === Aa ? -b[z] : -S[z], be = t.elements.arrow, Se = w && be ? cv(be) : {
        width: 0,
        height: 0
      }, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : HC(), Ce = ce[L], Oe = ce[j], Ye = Qs(0, S[z], Se[z]), zr = g ? S[z] / 2 - G - Ye - Ce - k.mainAxis : ae - Ye - Ce - k.mainAxis, Kn = g ? -S[z] / 2 + G + Ye + Oe + k.mainAxis : ue + Ye + Oe + k.mainAxis, En = t.elements.arrow && Ul(t.elements.arrow), Xe = En ? x === "y" ? En.clientTop || 0 : En.clientLeft || 0 : 0, lr = (D = _?.[x]) != null ? D : 0, Cn = B + zr - lr - Xe, Gn = B + Kn - lr, Wt = Qs(w ? Xc(M, Cn) : M, B, w ? fo(q, Gn) : q);
      C[x] = Wt, P[x] = Wt - B;
    }
    if (s) {
      var Yn, Mo = x === "x" ? ir : or, kn = x === "x" ? Lr : Ir, O = C[E], A = E === "y" ? "height" : "width", I = O + m[Mo], Y = O - m[kn], K = [ir, or].indexOf(v) !== -1, H = (Yn = _?.[E]) != null ? Yn : 0, re = K ? I : O - S[A] - b[A] - H + k.altAxis, ge = K ? O + S[A] + b[A] - H - k.altAxis : Y, me = w && K ? $P(re, O, ge) : Qs(w ? re : I, O, w ? ge : Y);
      C[E] = me, P[E] = me - O;
    }
    t.modifiersData[n] = P;
  }
}
const iT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nT,
  requiresIfExists: ["offset"]
};
function oT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function aT(e) {
  return e === xr(e) || !Ar(e) ? dv(e) : oT(e);
}
function sT(e) {
  var t = e.getBoundingClientRect(), r = Fa(t.width) / e.offsetWidth || 1, n = Fa(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function lT(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ar(t), i = Ar(t) && sT(t), o = Fi(t), a = Ma(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  hv(o)) && (s = aT(t)), Ar(t) ? (l = Ma(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = pv(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function uT(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function cT(e) {
  var t = uT(e);
  return xP.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function fT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function dT(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ow = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function aw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function pT(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? ow : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ow, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, w = {
      state: c,
      setOptions: function(v) {
        var p = typeof v == "function" ? v(c.options) : v;
        y(), c.options = Object.assign({}, o, c.options, p), c.scrollParents = {
          reference: Co(s) ? Ks(s) : s.contextElement ? Ks(s.contextElement) : [],
          popper: Ks(l)
        };
        var g = cT(dT([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function(x) {
          return x.enabled;
        }), h(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var v = c.elements, p = v.reference, g = v.popper;
          if (aw(p, g)) {
            c.rects = {
              reference: lT(p, Ul(g), c.options.strategy === "fixed"),
              popper: cv(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(k) {
              return c.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var E = c.orderedModifiers[x], C = E.fn, S = E.options, b = S === void 0 ? {} : S, $ = E.name;
              typeof C == "function" && (c = C({
                state: c,
                options: b,
                name: $,
                instance: w
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: fT(function() {
        return new Promise(function(m) {
          w.forceUpdate(), m(c);
        });
      }),
      destroy: function() {
        y(), d = !0;
      }
    };
    if (!aw(s, l))
      return w;
    w.setOptions(u).then(function(m) {
      !d && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function h() {
      c.orderedModifiers.forEach(function(m) {
        var v = m.name, p = m.options, g = p === void 0 ? {} : p, x = m.effect;
        if (typeof x == "function") {
          var E = x({
            state: c,
            name: v,
            instance: w,
            options: g
          }), C = function() {
          };
          f.push(E || C);
        }
      });
    }
    function y() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return w;
  };
}
var hT = [LP, tT, MP, kP, ZP, KP, iT, TP, YP], CU = /* @__PURE__ */ pT({
  defaultModifiers: hT
}), Qa = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, La = typeof window > "u" || "Deno" in globalThis;
function $r() {
}
function yT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uy(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function GC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function bi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Or(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sw(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: o,
    queryKey: a,
    stale: s
  } = e;
  if (a) {
    if (n) {
      if (t.queryHash !== yv(a, t.options))
        return !1;
    } else if (!bl(t.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || o && !o(t));
}
function lw(e, t) {
  const { exact: r, status: n, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (ko(t.options.mutationKey) !== ko(o))
        return !1;
    } else if (!bl(t.options.mutationKey, o))
      return !1;
  }
  return !(n && t.state.status !== n || i && !i(t));
}
function yv(e, t) {
  return (t?.queryKeyHashFn || ko)(e);
}
function ko(e) {
  return JSON.stringify(
    e,
    (t, r) => cy(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function bl(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => bl(e[r], t[r])) : !1;
}
function YC(e, t) {
  if (e === t)
    return e;
  const r = uw(e) && uw(t);
  if (r || cy(e) && cy(t)) {
    const n = r ? e : Object.keys(e), i = n.length, o = r ? t : Object.keys(t), a = o.length, s = r ? [] : {}, l = new Set(n);
    let u = 0;
    for (let c = 0; c < a; c++) {
      const f = r ? c : o[c];
      (!r && l.has(f) || r) && e[f] === void 0 && t[f] === void 0 ? (s[f] = void 0, u++) : (s[f] = YC(e[f], t[f]), s[f] === e[f] && e[f] !== void 0 && u++);
    }
    return i === a && u === i ? e : s;
  }
  return t;
}
function Jc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function uw(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function cy(e) {
  if (!cw(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!cw(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function cw(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function mT(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function fy(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? YC(e, t) : t;
}
function vT(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function gT(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var mv = Symbol();
function XC(e, t) {
  return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === mv ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function kU(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var wT = class extends Qa {
  #t;
  #e;
  #r;
  constructor() {
    super(), this.#r = (e) => {
      if (!La && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    };
  }
  onSubscribe() {
    this.#e || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#e?.(), this.#e = void 0);
  }
  setEventListener(e) {
    this.#r = e, this.#e?.(), this.#e = e((t) => {
      typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
    });
  }
  setFocused(e) {
    this.#t !== e && (this.#t = e, this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden";
  }
}, vv = new wT(), ST = class extends Qa {
  #t = !0;
  #e;
  #r;
  constructor() {
    super(), this.#r = (e) => {
      if (!La && window.addEventListener) {
        const t = () => e(!0), r = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", r);
        };
      }
    };
  }
  onSubscribe() {
    this.#e || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#e?.(), this.#e = void 0);
  }
  setEventListener(e) {
    this.#r = e, this.#e?.(), this.#e = e(this.setOnline.bind(this));
  }
  setOnline(e) {
    this.#t !== e && (this.#t = e, this.listeners.forEach((r) => {
      r(e);
    }));
  }
  isOnline() {
    return this.#t;
  }
}, Zc = new ST();
function dy() {
  let e, t;
  const r = new Promise((i, o) => {
    e = i, t = o;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(i) {
    Object.assign(r, i), delete r.resolve, delete r.reject;
  }
  return r.resolve = (i) => {
    n({
      status: "fulfilled",
      value: i
    }), e(i);
  }, r.reject = (i) => {
    n({
      status: "rejected",
      reason: i
    }), t(i);
  }, r;
}
function xT(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function JC(e) {
  return (e ?? "online") === "online" ? Zc.isOnline() : !0;
}
var ZC = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
  }
};
function cp(e) {
  return e instanceof ZC;
}
function ek(e) {
  let t = !1, r = 0, n = !1, i;
  const o = dy(), a = (y) => {
    n || (d(new ZC(y)), e.abort?.());
  }, s = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, u = () => vv.isFocused() && (e.networkMode === "always" || Zc.isOnline()) && e.canRun(), c = () => JC(e.networkMode) && e.canRun(), f = (y) => {
    n || (n = !0, e.onSuccess?.(y), i?.(), o.resolve(y));
  }, d = (y) => {
    n || (n = !0, e.onError?.(y), i?.(), o.reject(y));
  }, w = () => new Promise((y) => {
    i = (m) => {
      (n || u()) && y(m);
    }, e.onPause?.();
  }).then(() => {
    i = void 0, n || e.onContinue?.();
  }), h = () => {
    if (n)
      return;
    let y;
    const m = r === 0 ? e.initialPromise : void 0;
    try {
      y = m ?? e.fn();
    } catch (v) {
      y = Promise.reject(v);
    }
    Promise.resolve(y).then(f).catch((v) => {
      if (n)
        return;
      const p = e.retry ?? (La ? 0 : 3), g = e.retryDelay ?? xT, x = typeof g == "function" ? g(r, v) : g, E = p === !0 || typeof p == "number" && r < p || typeof p == "function" && p(r, v);
      if (t || !E) {
        d(v);
        return;
      }
      r++, e.onFail?.(r, v), mT(x).then(() => u() ? void 0 : w()).then(() => {
        t ? d(v) : h();
      });
    });
  };
  return {
    promise: o,
    cancel: a,
    continue: () => (i?.(), o),
    cancelRetry: s,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? h() : w().then(h), o)
  };
}
var ET = (e) => setTimeout(e, 0);
function CT() {
  let e = [], t = 0, r = (s) => {
    s();
  }, n = (s) => {
    s();
  }, i = ET;
  const o = (s) => {
    t ? e.push(s) : i(() => {
      r(s);
    });
  }, a = () => {
    const s = e;
    e = [], s.length && i(() => {
      n(() => {
        s.forEach((l) => {
          r(l);
        });
      });
    });
  };
  return {
    batch: (s) => {
      let l;
      t++;
      try {
        l = s();
      } finally {
        t--, t || a();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (s) => (...l) => {
      o(() => {
        s(...l);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (s) => {
      r = s;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (s) => {
      n = s;
    },
    setScheduler: (s) => {
      i = s;
    }
  };
}
var Et = CT(), tk = class {
  #t;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), uy(this.gcTime) && (this.#t = setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (La ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#t && (clearTimeout(this.#t), this.#t = void 0);
  }
}, kT = class extends tk {
  #t;
  #e;
  #r;
  #n;
  #i;
  #a;
  #s;
  constructor(e) {
    super(), this.#s = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.client, this.#r = this.#n.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = bT(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#i?.promise;
  }
  setOptions(e) {
    this.options = { ...this.#a, ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
  }
  setData(e, t) {
    const r = fy(this.state.data, e, this.options);
    return this.#o({
      data: r,
      type: "success",
      dataUpdatedAt: t?.updatedAt,
      manual: t?.manual
    }), r;
  }
  setState(e, t) {
    this.#o({ type: "setState", state: e, setStateOptions: t });
  }
  cancel(e) {
    const t = this.#i?.promise;
    return this.#i?.cancel(e), t ? t.then($r).catch($r) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.#t);
  }
  isActive() {
    return this.observers.some(
      (e) => Or(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === mv || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => bi(e.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !GC(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    this.observers.find((t) => t.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
  }
  onOnline() {
    this.observers.find((t) => t.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#i && (this.#s ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()), this.scheduleGc()), this.#r.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#o({ type: "invalidate" });
  }
  fetch(e, t) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#i)
        return this.#i.continueRetry(), this.#i.promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const l = this.observers.find((u) => u.options.queryFn);
      l && this.setOptions(l.options);
    }
    const r = new AbortController(), n = (l) => {
      Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (this.#s = !0, r.signal)
      });
    }, i = () => {
      const l = XC(this.options, t), c = (() => {
        const f = {
          client: this.#n,
          queryKey: this.queryKey,
          meta: this.meta
        };
        return n(f), f;
      })();
      return this.#s = !1, this.options.persister ? this.options.persister(
        l,
        c,
        this
      ) : l(c);
    }, a = (() => {
      const l = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#n,
        state: this.state,
        fetchFn: i
      };
      return n(l), l;
    })();
    this.options.behavior?.onFetch(a, this), this.#e = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#o({ type: "fetch", meta: a.fetchOptions?.meta });
    const s = (l) => {
      cp(l) && l.silent || this.#o({
        type: "error",
        error: l
      }), cp(l) || (this.#r.config.onError?.(
        l,
        this
      ), this.#r.config.onSettled?.(
        this.state.data,
        l,
        this
      )), this.scheduleGc();
    };
    return this.#i = ek({
      initialPromise: t?.initialPromise,
      fn: a.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (l) => {
        if (l === void 0) {
          s(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(l);
        } catch (u) {
          s(u);
          return;
        }
        this.#r.config.onSuccess?.(l, this), this.#r.config.onSettled?.(
          l,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: s,
      onFail: (l, u) => {
        this.#o({ type: "failed", failureCount: l, error: u });
      },
      onPause: () => {
        this.#o({ type: "pause" });
      },
      onContinue: () => {
        this.#o({ type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0
    }), this.#i.start();
  }
  #o(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r,
            ...rk(r.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          return this.#e = void 0, {
            ...r,
            data: e.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const n = e.error;
          return cp(n) && n.revert && this.#e ? { ...this.#e, fetchStatus: "idle" } : {
            ...r,
            error: n,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: n,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...r,
            ...e.state
          };
      }
    };
    this.state = t(this.state), Et.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate();
      }), this.#r.notify({ query: this, type: "updated", action: e });
    });
  }
};
function rk(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: JC(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function bT(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var _T = class extends Qa {
  constructor(e = {}) {
    super(), this.config = e, this.#t = /* @__PURE__ */ new Map();
  }
  #t;
  build(e, t, r) {
    const n = t.queryKey, i = t.queryHash ?? yv(n, t);
    let o = this.get(i);
    return o || (o = new kT({
      client: e,
      queryKey: n,
      queryHash: i,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(n)
    }), this.add(o)), o;
  }
  add(e) {
    this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const t = this.#t.get(e.queryHash);
    t && (e.destroy(), t === e && this.#t.delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    Et.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.#t.get(e);
  }
  getAll() {
    return [...this.#t.values()];
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find(
      (r) => sw(t, r)
    );
  }
  findAll(e = {}) {
    const t = this.getAll();
    return Object.keys(e).length > 0 ? t.filter((r) => sw(e, r)) : t;
  }
  notify(e) {
    Et.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  onFocus() {
    Et.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Et.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, $T = class extends tk {
  #t;
  #e;
  #r;
  constructor(e) {
    super(), this.mutationId = e.mutationId, this.#e = e.mutationCache, this.#t = [], this.state = e.state || nk(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#e.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#e.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    const t = () => {
      this.#n({ type: "continue" });
    };
    this.#r = ek({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (i, o) => {
        this.#n({ type: "failed", failureCount: i, error: o });
      },
      onPause: () => {
        this.#n({ type: "pause" });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this)
    });
    const r = this.state.status === "pending", n = !this.#r.canStart();
    try {
      if (r)
        t();
      else {
        this.#n({ type: "pending", variables: e, isPaused: n }), await this.#e.config.onMutate?.(
          e,
          this
        );
        const o = await this.options.onMutate?.(e);
        o !== this.state.context && this.#n({
          type: "pending",
          context: o,
          variables: e,
          isPaused: n
        });
      }
      const i = await this.#r.start();
      return await this.#e.config.onSuccess?.(
        i,
        e,
        this.state.context,
        this
      ), await this.options.onSuccess?.(i, e, this.state.context), await this.#e.config.onSettled?.(
        i,
        null,
        this.state.variables,
        this.state.context,
        this
      ), await this.options.onSettled?.(i, null, e, this.state.context), this.#n({ type: "success", data: i }), i;
    } catch (i) {
      try {
        throw await this.#e.config.onError?.(
          i,
          e,
          this.state.context,
          this
        ), await this.options.onError?.(
          i,
          e,
          this.state.context
        ), await this.#e.config.onSettled?.(
          void 0,
          i,
          this.state.variables,
          this.state.context,
          this
        ), await this.options.onSettled?.(
          void 0,
          i,
          e,
          this.state.context
        ), i;
      } finally {
        this.#n({ type: "error", error: i });
      }
    } finally {
      this.#e.runNext(this);
    }
  }
  #n(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...r,
            isPaused: !0
          };
        case "continue":
          return {
            ...r,
            isPaused: !1
          };
        case "pending":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
      }
    };
    this.state = t(this.state), Et.batch(() => {
      this.#t.forEach((r) => {
        r.onMutationUpdate(e);
      }), this.#e.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
};
function nk() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var OT = class extends Qa {
  constructor(e = {}) {
    super(), this.config = e, this.#t = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Map(), this.#r = 0;
  }
  #t;
  #e;
  #r;
  build(e, t, r) {
    const n = new $T({
      mutationCache: this,
      mutationId: ++this.#r,
      options: e.defaultMutationOptions(t),
      state: r
    });
    return this.add(n), n;
  }
  add(e) {
    this.#t.add(e);
    const t = xu(e);
    if (typeof t == "string") {
      const r = this.#e.get(t);
      r ? r.push(e) : this.#e.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#t.delete(e)) {
      const t = xu(e);
      if (typeof t == "string") {
        const r = this.#e.get(t);
        if (r)
          if (r.length > 1) {
            const n = r.indexOf(e);
            n !== -1 && r.splice(n, 1);
          } else r[0] === e && this.#e.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = xu(e);
    if (typeof t == "string") {
      const n = this.#e.get(t)?.find(
        (i) => i.state.status === "pending"
      );
      return !n || n === e;
    } else
      return !0;
  }
  runNext(e) {
    const t = xu(e);
    return typeof t == "string" ? this.#e.get(t)?.find((n) => n !== e && n.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    Et.batch(() => {
      this.#t.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }), this.#t.clear(), this.#e.clear();
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find(
      (r) => lw(t, r)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => lw(e, t));
  }
  notify(e) {
    Et.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return Et.batch(
      () => Promise.all(
        e.map((t) => t.continue().catch($r))
      )
    );
  }
};
function xu(e) {
  return e.options.scope?.id;
}
function fw(e) {
  return {
    onFetch: (t, r) => {
      const n = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, o = t.state.data?.pages || [], a = t.state.data?.pageParams || [];
      let s = { pages: [], pageParams: [] }, l = 0;
      const u = async () => {
        let c = !1;
        const f = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
              c = !0;
            }), t.signal)
          });
        }, d = XC(t.options, t.fetchOptions), w = async (h, y, m) => {
          if (c)
            return Promise.reject();
          if (y == null && h.pages.length)
            return Promise.resolve(h);
          const p = (() => {
            const C = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: y,
              direction: m ? "backward" : "forward",
              meta: t.options.meta
            };
            return f(C), C;
          })(), g = await d(p), { maxPages: x } = t.options, E = m ? gT : vT;
          return {
            pages: E(h.pages, g, x),
            pageParams: E(h.pageParams, y, x)
          };
        };
        if (i && o.length) {
          const h = i === "backward", y = h ? RT : dw, m = {
            pages: o,
            pageParams: a
          }, v = y(n, m);
          s = await w(m, v, h);
        } else {
          const h = e ?? o.length;
          do {
            const y = l === 0 ? a[0] ?? n.initialPageParam : dw(n, s);
            if (l > 0 && y == null)
              break;
            s = await w(s, y), l++;
          } while (l < h);
        }
        return s;
      };
      t.options.persister ? t.fetchFn = () => t.options.persister?.(
        u,
        {
          client: t.client,
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        },
        r
      ) : t.fetchFn = u;
    }
  };
}
function dw(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  ) : void 0;
}
function RT(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var bU = class {
  #t;
  #e;
  #r;
  #n;
  #i;
  #a;
  #s;
  #o;
  constructor(e = {}) {
    this.#t = e.queryCache || new _T(), this.#e = e.mutationCache || new OT(), this.#r = e.defaultOptions || {}, this.#n = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
  }
  mount() {
    this.#a++, this.#a === 1 && (this.#s = vv.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), this.#t.onFocus());
    }), this.#o = Zc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), this.#t.onOnline());
    }));
  }
  unmount() {
    this.#a--, this.#a === 0 && (this.#s?.(), this.#s = void 0, this.#o?.(), this.#o = void 0);
  }
  isFetching(e) {
    return this.#t.findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return this.#e.findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    const t = this.defaultQueryOptions({ queryKey: e });
    return this.#t.get(t.queryHash)?.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = this.#t.build(this, t), n = r.state.data;
    return n === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(bi(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(n));
  }
  getQueriesData(e) {
    return this.#t.findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = this.defaultQueryOptions({ queryKey: e }), o = this.#t.get(
      n.queryHash
    )?.state.data, a = yT(t, o);
    if (a !== void 0)
      return this.#t.build(this, n).setData(a, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Et.batch(
      () => this.#t.findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    const t = this.defaultQueryOptions({ queryKey: e });
    return this.#t.get(
      t.queryHash
    )?.state;
  }
  removeQueries(e) {
    const t = this.#t;
    Et.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = this.#t;
    return Et.batch(() => (r.findAll(e).forEach((n) => {
      n.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const r = { revert: !0, ...t }, n = Et.batch(
      () => this.#t.findAll(e).map((i) => i.cancel(r))
    );
    return Promise.all(n).then($r).catch($r);
  }
  invalidateQueries(e, t = {}) {
    return Et.batch(() => (this.#t.findAll(e).forEach((r) => {
      r.invalidate();
    }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: e?.refetchType ?? e?.type ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, n = Et.batch(
      () => this.#t.findAll(e).filter((i) => !i.isDisabled() && !i.isStatic()).map((i) => {
        let o = i.fetch(void 0, r);
        return r.throwOnError || (o = o.catch($r)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(n).then($r);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = this.#t.build(this, t);
    return r.isStaleByTime(
      bi(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then($r).catch($r);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = fw(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then($r).catch($r);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = fw(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Zc.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return this.#t;
  }
  getMutationCache() {
    return this.#e;
  }
  getDefaultOptions() {
    return this.#r;
  }
  setDefaultOptions(e) {
    this.#r = e;
  }
  setQueryDefaults(e, t) {
    this.#n.set(ko(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...this.#n.values()], r = {};
    return t.forEach((n) => {
      bl(e, n.queryKey) && Object.assign(r, n.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    this.#i.set(ko(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...this.#i.values()], r = {};
    return t.forEach((n) => {
      bl(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...this.#r.queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = yv(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === mv && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e?._defaulted ? e : {
      ...this.#r.mutations,
      ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.#t.clear(), this.#e.clear();
  }
}, _U = class extends Qa {
  constructor(e, t) {
    super(), this.options = t, this.#t = e, this.#o = null, this.#s = dy(), this.options.experimental_prefetchInRender || this.#s.reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(t);
  }
  #t;
  #e = void 0;
  #r = void 0;
  #n = void 0;
  #i;
  #a;
  #s;
  #o;
  #y;
  #d;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #p;
  #u;
  #c;
  #l;
  #h = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.#e.addObserver(this), pw(this.#e, this.options) ? this.#f() : this.updateResult(), this.#w());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return py(
      this.#e,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return py(
      this.#e,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.#S(), this.#x(), this.#e.removeObserver(this);
  }
  setOptions(e) {
    const t = this.options, r = this.#e;
    if (this.options = this.#t.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Or(this.options.enabled, this.#e) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#E(), this.#e.setOptions(this.options), t._defaulted && !Jc(this.options, t) && this.#t.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.#e,
      observer: this
    });
    const n = this.hasListeners();
    n && hw(
      this.#e,
      r,
      this.options,
      t
    ) && this.#f(), this.updateResult(), n && (this.#e !== r || Or(this.options.enabled, this.#e) !== Or(t.enabled, this.#e) || bi(this.options.staleTime, this.#e) !== bi(t.staleTime, this.#e)) && this.#m();
    const i = this.#v();
    n && (this.#e !== r || Or(this.options.enabled, this.#e) !== Or(t.enabled, this.#e) || i !== this.#l) && this.#g(i);
  }
  getOptimisticResult(e) {
    const t = this.#t.getQueryCache().build(this.#t, e), r = this.createResult(t, e);
    return TT(this, r) && (this.#n = r, this.#a = this.options, this.#i = this.#e.state), r;
  }
  getCurrentResult() {
    return this.#n;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (r, n) => (this.trackProp(n), t?.(n), Reflect.get(r, n))
    });
  }
  trackProp(e) {
    this.#h.add(e);
  }
  getCurrentQuery() {
    return this.#e;
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = this.#t.defaultQueryOptions(e), r = this.#t.getQueryCache().build(this.#t, t);
    return r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    return this.#f({
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), this.#n));
  }
  #f(e) {
    this.#E();
    let t = this.#e.fetch(
      this.options,
      e
    );
    return e?.throwOnError || (t = t.catch($r)), t;
  }
  #m() {
    this.#S();
    const e = bi(
      this.options.staleTime,
      this.#e
    );
    if (La || this.#n.isStale || !uy(e))
      return;
    const r = GC(this.#n.dataUpdatedAt, e) + 1;
    this.#u = setTimeout(() => {
      this.#n.isStale || this.updateResult();
    }, r);
  }
  #v() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ?? !1;
  }
  #g(e) {
    this.#x(), this.#l = e, !(La || Or(this.options.enabled, this.#e) === !1 || !uy(this.#l) || this.#l === 0) && (this.#c = setInterval(() => {
      (this.options.refetchIntervalInBackground || vv.isFocused()) && this.#f();
    }, this.#l));
  }
  #w() {
    this.#m(), this.#g(this.#v());
  }
  #S() {
    this.#u && (clearTimeout(this.#u), this.#u = void 0);
  }
  #x() {
    this.#c && (clearInterval(this.#c), this.#c = void 0);
  }
  createResult(e, t) {
    const r = this.#e, n = this.options, i = this.#n, o = this.#i, a = this.#a, l = e !== r ? e.state : this.#r, { state: u } = e;
    let c = { ...u }, f = !1, d;
    if (t._optimisticResults) {
      const b = this.hasListeners(), $ = !b && pw(e, t), k = b && hw(e, r, t, n);
      ($ || k) && (c = {
        ...c,
        ...rk(u.data, e.options)
      }), t._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: h, status: y } = c;
    d = c.data;
    let m = !1;
    if (t.placeholderData !== void 0 && d === void 0 && y === "pending") {
      let b;
      i?.isPlaceholderData && t.placeholderData === a?.placeholderData ? (b = i.data, m = !0) : b = typeof t.placeholderData == "function" ? t.placeholderData(
        this.#p?.state.data,
        this.#p
      ) : t.placeholderData, b !== void 0 && (y = "success", d = fy(
        i?.data,
        b,
        t
      ), f = !0);
    }
    if (t.select && d !== void 0 && !m)
      if (i && d === o?.data && t.select === this.#y)
        d = this.#d;
      else
        try {
          this.#y = t.select, d = t.select(d), d = fy(i?.data, d, t), this.#d = d, this.#o = null;
        } catch (b) {
          this.#o = b;
        }
    this.#o && (w = this.#o, d = this.#d, h = Date.now(), y = "error");
    const v = c.fetchStatus === "fetching", p = y === "pending", g = y === "error", x = p && v, E = d !== void 0, S = {
      status: y,
      fetchStatus: c.fetchStatus,
      isPending: p,
      isSuccess: y === "success",
      isError: g,
      isInitialLoading: x,
      isLoading: x,
      data: d,
      dataUpdatedAt: c.dataUpdatedAt,
      error: w,
      errorUpdatedAt: h,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > l.dataUpdateCount || c.errorUpdateCount > l.errorUpdateCount,
      isFetching: v,
      isRefetching: v && !p,
      isLoadingError: g && !E,
      isPaused: c.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: g && E,
      isStale: gv(e, t),
      refetch: this.refetch,
      promise: this.#s,
      isEnabled: Or(t.enabled, e) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const b = (_) => {
        S.status === "error" ? _.reject(S.error) : S.data !== void 0 && _.resolve(S.data);
      }, $ = () => {
        const _ = this.#s = S.promise = dy();
        b(_);
      }, k = this.#s;
      switch (k.status) {
        case "pending":
          e.queryHash === r.queryHash && b(k);
          break;
        case "fulfilled":
          (S.status === "error" || S.data !== k.value) && $();
          break;
        case "rejected":
          (S.status !== "error" || S.error !== k.reason) && $();
          break;
      }
    }
    return S;
  }
  updateResult() {
    const e = this.#n, t = this.createResult(this.#e, this.options);
    if (this.#i = this.#e.state, this.#a = this.options, this.#i.data !== void 0 && (this.#p = this.#e), Jc(t, e))
      return;
    this.#n = t;
    const r = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: n } = this.options, i = typeof n == "function" ? n() : n;
      if (i === "all" || !i && !this.#h.size)
        return !0;
      const o = new Set(
        i ?? this.#h
      );
      return this.options.throwOnError && o.add("error"), Object.keys(this.#n).some((a) => {
        const s = a;
        return this.#n[s] !== e[s] && o.has(s);
      });
    };
    this.#C({ listeners: r() });
  }
  #E() {
    const e = this.#t.getQueryCache().build(this.#t, this.options);
    if (e === this.#e)
      return;
    const t = this.#e;
    this.#e = e, this.#r = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#w();
  }
  #C(e) {
    Et.batch(() => {
      e.listeners && this.listeners.forEach((t) => {
        t(this.#n);
      }), this.#t.getQueryCache().notify({
        query: this.#e,
        type: "observerResultsUpdated"
      });
    });
  }
};
function PT(e, t) {
  return Or(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function pw(e, t) {
  return PT(e, t) || e.state.data !== void 0 && py(e, t, t.refetchOnMount);
}
function py(e, t, r) {
  if (Or(t.enabled, e) !== !1 && bi(t.staleTime, e) !== "static") {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && gv(e, t);
  }
  return !1;
}
function hw(e, t, r, n) {
  return (e !== t || Or(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && gv(e, r);
}
function gv(e, t) {
  return Or(t.enabled, e) !== !1 && e.isStaleByTime(bi(t.staleTime, e));
}
function TT(e, t) {
  return !Jc(e.getCurrentResult(), t);
}
var $U = class extends Qa {
  #t;
  #e = void 0;
  #r;
  #n;
  constructor(t, r) {
    super(), this.#t = t, this.setOptions(r), this.bindMethods(), this.#i();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    const r = this.options;
    this.options = this.#t.defaultMutationOptions(t), Jc(this.options, r) || this.#t.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.#r,
      observer: this
    }), r?.mutationKey && this.options.mutationKey && ko(r.mutationKey) !== ko(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#r?.removeObserver(this);
  }
  onMutationUpdate(t) {
    this.#i(), this.#a(t);
  }
  getCurrentResult() {
    return this.#e;
  }
  reset() {
    this.#r?.removeObserver(this), this.#r = void 0, this.#i(), this.#a();
  }
  mutate(t, r) {
    return this.#n = r, this.#r?.removeObserver(this), this.#r = this.#t.getMutationCache().build(this.#t, this.options), this.#r.addObserver(this), this.#r.execute(t);
  }
  #i() {
    const t = this.#r?.state ?? nk();
    this.#e = {
      ...t,
      isPending: t.status === "pending",
      isSuccess: t.status === "success",
      isError: t.status === "error",
      isIdle: t.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #a(t) {
    Et.batch(() => {
      if (this.#n && this.hasListeners()) {
        const r = this.#e.variables, n = this.#e.context;
        t?.type === "success" ? (this.#n.onSuccess?.(t.data, r, n), this.#n.onSettled?.(t.data, null, r, n)) : t?.type === "error" && (this.#n.onError?.(t.error, r, n), this.#n.onSettled?.(
          void 0,
          t.error,
          r,
          n
        ));
      }
      this.listeners.forEach((r) => {
        r(this.#e);
      });
    });
  }
}, Ka = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54", "(..) ........", 0], ["Armenia", "am", "374", ".. ......"], ["Aruba", "aw", "297"], ["Australia", "au", "61", { default: ". .... ....", "/^4/": "... ... ...", "/^5(?!50)/": "... ... ...", "/^1(3|8)00/": ".... ... ...", "/^13/": ".. .. ..", "/^180/": "... ...." }, 0, []], ["Austria", "at", "43"], ["Azerbaijan", "az", "994", "(..) ... .. .."], ["Bahamas", "bs", "1242"], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus", "by", "375", "(..) ... .. .."], ["Belgium", "be", "32", "... .. .. .."], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55", "(..) .....-...."], ["British Indian Ocean Territory", "io", "246"], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", "", 1], ["Cayman Islands", "ky", "1", "... ... ....", 4, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86", "... .... ...."], ["Colombia", "co", "57", "... ... ...."], ["Comoros", "km", "269"], ["Congo", "cd", "243"], ["Congo", "cg", "242"], ["Costa Rica", "cr", "506", "....-...."], ["Côte d'Ivoire", "ci", "225", ".. .. .. .. .."], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", "", 0], ["Cyprus", "cy", "357", ".. ......"], ["Czech Republic", "cz", "420", "... ... ..."], ["Denmark", "dk", "45", ".. .. .. .."], ["Djibouti", "dj", "253", ".. .. ...."], ["Dominica", "dm", "1767"], ["Dominican Republic", "do", "1", "(...) ...-....", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503", "....-...."], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372", ".... ......"], ["Ethiopia", "et", "251", ".. ... ...."], ["Faroe Islands", "fo", "298", ".. .. .."], ["Fiji", "fj", "679"], ["Finland", "fi", "358", ".. ... .. .."], ["France", "fr", "33", ". .. .. .. .."], ["French Guiana", "gf", "594", "... .. .. .."], ["French Polynesia", "pf", "689", { "/^44/": ".. .. ..", "/^80[0-5]/": "... .. .. ..", default: ".. .. .. .." }], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49", "... ........."], ["Ghana", "gh", "233"], ["Greece", "gr", "30"], ["Greenland", "gl", "299", ".. .. .."], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", "... .. .. ..", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502", "....-...."], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509", "....-...."], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852", ".... ...."], ["Hungary", "hu", "36"], ["Iceland", "is", "354", "... ...."], ["India", "in", "91", ".....-....."], ["Indonesia", "id", "62"], ["Iran", "ir", "98", "... ... ...."], ["Iraq", "iq", "964"], ["Ireland", "ie", "353", ".. ......."], ["Israel", "il", "972", "... ... ...."], ["Italy", "it", "39", "... .......", 0], ["Jamaica", "jm", "1876"], ["Japan", "jp", "81", ".. .... ...."], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", "... ...-..-..", 0], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996", "... ... ..."], ["Laos", "la", "856"], ["Latvia", "lv", "371", ".. ... ..."], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Macedonia", "mk", "389"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60", "..-....-...."], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596", "... .. .. .."], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", "... .. .. ..", 1, ["269", "639"]], ["Mexico", "mx", "52", "... ... ....", 0], ["Micronesia", "fm", "691"], ["Moldova", "md", "373", "(..) ..-..-.."], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Morocco", "ma", "212"], ["Mozambique", "mz", "258"], ["Myanmar", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31", { "/^06/": "(.). .........", "/^6/": ". .........", "/^0(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/": "(.).. ........", "/^(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/": ".. ........", "/^0/": "(.)... .......", default: "... ......." }], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64", "...-...-...."], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["North Korea", "kp", "850"], ["Norway", "no", "47", "... .. ..."], ["Oman", "om", "968"], ["Pakistan", "pk", "92", "...-......."], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63", "... ... ...."], ["Poland", "pl", "48", "...-...-..."], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", "(...) ...-....", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Réunion", "re", "262", "... .. .. ..", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", "(...) ...-..-..", 1], ["Rwanda", "rw", "250"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Pierre & Miquelon", "pm", "508", { "/^708/": "... ... ...", "/^8/": "... .. .. ..", default: ".. .. .." }], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65", "....-...."], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82", "... .... ...."], ["South Sudan", "ss", "211"], ["Spain", "es", "34", "... ... ..."], ["Sri Lanka", "lk", "94"], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Swaziland", "sz", "268"], ["Sweden", "se", "46", "... ... ..."], ["Switzerland", "ch", "41", ".. ... .. .."], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90", "... ... .. .."], ["Turkmenistan", "tm", "993"], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380", "(..) ... .. .."], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", ".... ......"], ["United States", "us", "1", "(...) ...-....", 0], ["Uruguay", "uy", "598"], ["Uzbekistan", "uz", "998", ".. ... .. .."], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", ".. .... ....", 1], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis & Futuna", "wf", "681", ".. .. .."], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"]], DT = "react-international-phone-", ik = (...e) => e.filter((t) => !!t).join(" ").trim(), AT = (...e) => ik(...e).split(" ").map((t) => `${DT}${t}`).join(" "), Tt = ({ addPrefix: e, rawClassNames: t }) => ik(AT(...e), ...t), FT = ({ value: e, mask: t, maskSymbol: r, offset: n = 0, trimNonMaskCharsLeftover: i = !1 }) => {
  if (e.length < n) return e;
  let o = e.slice(0, n), a = e.slice(n), s = o, l = 0;
  for (let u of t.split("")) {
    if (l >= a.length) {
      if (!i && u !== r) {
        s += u;
        continue;
      }
      break;
    }
    u === r ? (s += a[l], l += 1) : s += u;
  }
  return s;
}, ea = (e) => e ? /^\d+$/.test(e) : !1, od = (e) => e.replace(/\D/g, ""), MT = (e, t) => {
  let r = e.style.display;
  r !== "block" && (e.style.display = "block");
  let n = e.getBoundingClientRect(), i = t.getBoundingClientRect(), o = i.top - n.top, a = n.bottom - i.bottom;
  o >= 0 && a >= 0 || (Math.abs(o) < Math.abs(a) ? e.scrollTop += o : e.scrollTop -= a), e.style.display = r;
}, NT = () => typeof window > "u" ? !1 : window.navigator.userAgent.toLowerCase().includes("macintosh"), LT = (e, t) => {
  let r = t.disableDialCodeAndPrefix ? !1 : t.forceDialCode, n = t.disableDialCodeAndPrefix ? !1 : t.insertDialCodeOnEmpty, i = e, o = (u) => t.trimNonDigitsEnd ? u.trim() : u;
  if (!i) return n && !i.length || r ? o(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`) : o(i);
  if (i = od(i), i === t.dialCode && !t.disableDialCodeAndPrefix) return o(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`);
  if (t.dialCode.startsWith(i) && !t.disableDialCodeAndPrefix) return o(r ? `${t.prefix}${t.dialCode}${t.charAfterDialCode}` : `${t.prefix}${i}`);
  if (!i.startsWith(t.dialCode) && !t.disableDialCodeAndPrefix) {
    if (r) return o(`${t.prefix}${t.dialCode}${t.charAfterDialCode}`);
    if (i.length < t.dialCode.length) return o(`${t.prefix}${i}`);
  }
  let a = () => {
    let u = t.dialCode.length, c = i.slice(0, u), f = i.slice(u);
    return { phoneLeftSide: c, phoneRightSide: f };
  }, { phoneLeftSide: s, phoneRightSide: l } = a();
  return s = `${t.prefix}${s}${t.charAfterDialCode}`, l = FT({ value: l, mask: t.mask, maskSymbol: t.maskChar, trimNonMaskCharsLeftover: t.trimNonDigitsEnd || t.disableDialCodeAndPrefix && l.length === 0 }), t.disableDialCodeAndPrefix && (s = ""), o(`${s}${l}`);
}, IT = ({ phoneBeforeInput: e, phoneAfterInput: t, phoneAfterFormatted: r, cursorPositionAfterInput: n, leftOffset: i = 0, deletion: o }) => {
  if (n < i) return i;
  if (!e) return r.length;
  let a = null;
  for (let c = n - 1; c >= 0; c -= 1) if (ea(t[c])) {
    a = c;
    break;
  }
  if (a === null) {
    for (let c = 0; c < t.length; c += 1) if (ea(r[c])) return c;
    return t.length;
  }
  let s = 0;
  for (let c = 0; c < a; c += 1) ea(t[c]) && (s += 1);
  let l = 0, u = 0;
  for (let c = 0; c < r.length && (l += 1, ea(r[c]) && (u += 1), !(u >= s + 1)); c += 1) ;
  if (o !== "backward") for (; !ea(r[l]) && l < r.length; ) l += 1;
  return l;
}, rc = ({ phone: e, prefix: t }) => e ? `${t}${od(e)}` : "";
function hy({ value: e, country: t, insertDialCodeOnEmpty: r, trimNonDigitsEnd: n, countries: i, prefix: o, charAfterDialCode: a, forceDialCode: s, disableDialCodeAndPrefix: l, defaultMask: u, countryGuessingEnabled: c, disableFormatting: f }) {
  let d = e;
  l && (d = d.startsWith(`${o}`) ? d : `${o}${t.dialCode}${d}`);
  let w = c ? KT({ phone: d, countries: i, currentCountryIso2: t?.iso2 }) : void 0, h = w?.country ?? t, y = LT(d, { prefix: o, mask: qT({ phone: d, country: h, defaultMask: u, disableFormatting: f }), maskChar: ok, dialCode: h.dialCode, trimNonDigitsEnd: n, charAfterDialCode: a, forceDialCode: s, insertDialCodeOnEmpty: r, disableDialCodeAndPrefix: l }), m = c && !w?.fullDialCodeMatch ? t : h;
  return { phone: rc({ phone: l ? `${m.dialCode}${y}` : y, prefix: o }), inputValue: y, country: m };
}
var jT = (e) => {
  if (e?.toLocaleLowerCase().includes("delete") ?? !1) return e?.toLocaleLowerCase().includes("forward") ? "forward" : "backward";
}, zT = (e, { country: t, insertDialCodeOnEmpty: r, phoneBeforeInput: n, prefix: i, charAfterDialCode: o, forceDialCode: a, disableDialCodeAndPrefix: s, countryGuessingEnabled: l, defaultMask: u, disableFormatting: c, countries: f }) => {
  let d = e.nativeEvent, w = d.inputType, h = jT(w), y = !!w?.startsWith("insertFrom"), m = w === "insertText", v = d?.data || void 0, p = e.target.value, g = e.target.selectionStart ?? 0;
  if (w?.includes("history")) return { inputValue: n, phone: rc({ phone: n, prefix: i }), cursorPosition: n.length, country: t };
  if (m && !ea(v) && p !== i) return { inputValue: n, phone: rc({ phone: s ? `${t.dialCode}${n}` : n, prefix: i }), cursorPosition: g - (v?.length ?? 0), country: t };
  if (a && !p.startsWith(`${i}${t.dialCode}`) && !y) {
    let b = p ? n : `${i}${t.dialCode}${o}`;
    return { inputValue: b, phone: rc({ phone: b, prefix: i }), cursorPosition: i.length + t.dialCode.length + o.length, country: t };
  }
  let { phone: x, inputValue: E, country: C } = hy({ value: p, country: t, trimNonDigitsEnd: h === "backward", insertDialCodeOnEmpty: r, countryGuessingEnabled: l, countries: f, prefix: i, charAfterDialCode: o, forceDialCode: a, disableDialCodeAndPrefix: s, disableFormatting: c, defaultMask: u }), S = IT({ cursorPositionAfterInput: g, phoneBeforeInput: n, phoneAfterInput: p, phoneAfterFormatted: E, leftOffset: a ? i.length + t.dialCode.length + o.length : 0, deletion: h });
  return { phone: x, inputValue: E, cursorPosition: S, country: C };
}, UT = (e, t) => {
  let r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i of r) if (e[i] !== t[i]) return !1;
  return !0;
}, VT = () => {
  let e = Q.useRef(), t = Q.useRef(Date.now());
  return { check: () => {
    let r = Date.now(), n = e.current ? r - t.current : void 0;
    return e.current = t.current, t.current = r, n;
  } };
}, BT = { size: 20, overrideLastItemDebounceMS: -1 };
function HT(e, t) {
  let { size: r, overrideLastItemDebounceMS: n, onChange: i } = { ...BT, ...t }, [o, a] = Q.useState(e), [s, l] = Q.useState([o]), [u, c] = Q.useState(0), f = VT();
  return [o, (d, w) => {
    if (typeof d == "object" && typeof o == "object" && UT(d, o) || d === o) return;
    let h = n > 0, y = f.check(), m = h && y !== void 0 ? y > n : !0;
    if (w?.overrideLastItem !== void 0 ? w.overrideLastItem : !m) l((v) => [...v.slice(0, u), d]);
    else {
      let v = s.length >= r;
      l((p) => [...p.slice(v ? 1 : 0, u + 1), d]), v || c((p) => p + 1);
    }
    a(d), i?.(d);
  }, () => {
    if (u <= 0) return { success: !1 };
    let d = s[u - 1];
    return a(d), c((w) => w - 1), i?.(d), { success: !0, value: d };
  }, () => {
    if (u + 1 >= s.length) return { success: !1 };
    let d = s[u + 1];
    return a(d), c((w) => w + 1), i?.(d), { success: !0, value: d };
  }];
}
var ok = ".", _r = { defaultCountry: "us", value: "", prefix: "+", defaultMask: "............", charAfterDialCode: " ", historySaveDebounceMS: 200, disableCountryGuess: !1, disableDialCodePrefill: !1, forceDialCode: !1, disableDialCodeAndPrefix: !1, disableFormatting: !1, countries: Ka }, WT = ({ defaultCountry: e = _r.defaultCountry, value: t = _r.value, countries: r = _r.countries, prefix: n = _r.prefix, defaultMask: i = _r.defaultMask, charAfterDialCode: o = _r.charAfterDialCode, historySaveDebounceMS: a = _r.historySaveDebounceMS, disableCountryGuess: s = _r.disableCountryGuess, disableDialCodePrefill: l = _r.disableDialCodePrefill, forceDialCode: u = _r.forceDialCode, disableDialCodeAndPrefix: c = _r.disableDialCodeAndPrefix, disableFormatting: f = _r.disableFormatting, onChange: d, inputRef: w }) => {
  let h = { countries: r, prefix: n, charAfterDialCode: o, forceDialCode: c ? !1 : u, disableDialCodeAndPrefix: c, defaultMask: i, countryGuessingEnabled: !s, disableFormatting: f }, y = Q.useRef(null), m = w || y, v = (L) => {
    Promise.resolve().then(() => {
      typeof window > "u" || m.current !== document?.activeElement || m.current?.setSelectionRange(L, L);
    });
  }, [{ phone: p, inputValue: g, country: x }, E, C, S] = HT(() => {
    let L = ya({ value: e, field: "iso2", countries: r });
    L || console.error(`[react-international-phone]: can not find a country with "${e}" iso2 code`);
    let j = L || ya({ value: "us", field: "iso2", countries: r }), { phone: z, inputValue: B, country: M } = hy({ value: t, country: j, insertDialCodeOnEmpty: !l, ...h });
    return v(B.length), { phone: z, inputValue: B, country: M.iso2 };
  }, { overrideLastItemDebounceMS: a, onChange: ({ inputValue: L, phone: j, country: z }) => {
    if (!d) return;
    let B = b(z);
    d({ phone: j, inputValue: L, country: B });
  } }), b = Q.useCallback((L) => ya({ value: L, field: "iso2", countries: r }), [r]), $ = Q.useMemo(() => b(x), [x, b]);
  Q.useEffect(() => {
    let L = m.current;
    if (!L) return;
    let j = (z) => {
      if (!z.key) return;
      let B = z.ctrlKey, M = z.metaKey, q = z.shiftKey;
      if (z.key.toLowerCase() === "z") {
        if (NT()) {
          if (!M) return;
        } else if (!B) return;
        q ? S() : C();
      }
    };
    return L.addEventListener("keydown", j), () => {
      L.removeEventListener("keydown", j);
    };
  }, [m, C, S]);
  let k = (L) => {
    L.preventDefault();
    let { phone: j, inputValue: z, country: B, cursorPosition: M } = zT(L, { country: $, phoneBeforeInput: g, insertDialCodeOnEmpty: !1, ...h });
    return E({ inputValue: z, phone: j, country: B.iso2 }), v(M), t;
  }, _ = (L, j = { focusOnInput: !1 }) => {
    let z = ya({ value: L, field: "iso2", countries: r });
    if (!z) {
      console.error(`[react-international-phone]: can not find a country with "${L}" iso2 code`);
      return;
    }
    let B = c ? "" : `${n}${z.dialCode}${o}`;
    E({ inputValue: B, phone: `${n}${z.dialCode}`, country: z.iso2 }), j.focusOnInput && Promise.resolve().then(() => {
      m.current?.focus();
    });
  }, [P, D] = Q.useState(!1);
  return Q.useEffect(() => {
    if (!P) {
      D(!0), t !== p && d?.({ inputValue: g, phone: p, country: $ });
      return;
    }
    if (t === p) return;
    let { phone: L, inputValue: j, country: z } = hy({ value: t, country: $, insertDialCodeOnEmpty: !l, ...h });
    E({ phone: L, inputValue: j, country: z.iso2 });
  }, [t]), { phone: p, inputValue: g, country: $, setCountry: _, handlePhoneValueChange: k, inputRef: m };
}, qT = ({ phone: e, country: t, defaultMask: r = "............", disableFormatting: n = !1 }) => {
  let i = t.format, o = (s) => n ? s.replace(new RegExp(`[^${ok}]`, "g"), "") : s;
  if (!i) return o(r);
  if (typeof i == "string") return o(i);
  if (!i.default) return console.error(`[react-international-phone]: default mask for ${t.iso2} is not provided`), o(r);
  let a = Object.keys(i).find((s) => {
    if (s === "default") return !1;
    if (!(s.charAt(0) === "/" && s.charAt(s.length - 1) === "/")) return console.error(`[react-international-phone]: format regex "${s}" for ${t.iso2} is not valid`), !1;
    let l = new RegExp(s.substring(1, s.length - 1)), u = e.replace(t.dialCode, "");
    return l.test(od(u));
  });
  return o(a ? i[a] : i.default);
}, fn = (e) => {
  let [t, r, n, i, o, a] = e;
  return { name: t, iso2: r, dialCode: n, format: i, priority: o, areaCodes: a };
}, QT = (e) => `Field "${e}" is not supported`, ya = ({ field: e, value: t, countries: r = Ka }) => {
  if (["priority"].includes(e)) throw new Error(QT(e));
  let n = r.find((i) => {
    let o = fn(i);
    return t === o[e];
  });
  if (n) return fn(n);
}, KT = ({ phone: e, countries: t = Ka, currentCountryIso2: r }) => {
  let n = { country: void 0, fullDialCodeMatch: !1 };
  if (!e) return n;
  let i = od(e);
  if (!i) return n;
  let o = n, a = ({ country: s, fullDialCodeMatch: l }) => {
    let u = s.dialCode === o.country?.dialCode, c = (s.priority ?? 0) < (o.country?.priority ?? 0);
    (!u || c) && (o = { country: s, fullDialCodeMatch: l });
  };
  for (let s of t) {
    let l = fn(s), { dialCode: u, areaCodes: c } = l;
    if (i.startsWith(u)) {
      let f = o.country ? Number(u) >= Number(o.country.dialCode) : !0;
      if (c) {
        let d = i.substring(u.length);
        for (let w of c) if (d.startsWith(w)) return { country: l, fullDialCodeMatch: !0 };
      }
      (f || u === i || !o.fullDialCodeMatch) && a({ country: l, fullDialCodeMatch: !0 });
    }
    o.fullDialCodeMatch || i.length < u.length && u.startsWith(i) && (!o.country || Number(u) <= Number(o.country.dialCode)) && a({ country: l, fullDialCodeMatch: !1 });
  }
  if (r) {
    let s = ya({ value: r, field: "iso2", countries: t });
    if (!s) return o;
    let l = s ? ((u) => {
      if (!u?.areaCodes) return !1;
      let c = i.substring(u.dialCode.length);
      return u.areaCodes.some((f) => f.startsWith(c));
    })(s) : !1;
    o && o.country?.dialCode === s.dialCode && o.country !== s && o.fullDialCodeMatch && (!s.areaCodes || l) && (o = { country: s, fullDialCodeMatch: !0 });
  }
  return o;
}, GT = (e, t) => {
  let r = parseInt(e, 16);
  return Number(r + t).toString(16);
}, YT = "abcdefghijklmnopqrstuvwxyz", XT = "1f1e6", yw = YT.split("").reduce((e, t, r) => ({ ...e, [t]: GT(XT, r) }), {}), JT = (e) => [yw[e[0]], yw[e[1]]].join("-"), ak = ({ iso2: e, size: t, src: r, protocol: n = "https", disableLazyLoading: i, className: o, style: a, ...s }) => {
  if (!e) return V.createElement("img", { className: Tt({ addPrefix: ["flag-emoji"], rawClassNames: [o] }), width: t, height: t, ...s });
  let l = () => {
    if (r) return r;
    let u = JT(e);
    return `${n}://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${u}.svg`;
  };
  return V.createElement("img", { className: Tt({ addPrefix: ["flag-emoji"], rawClassNames: [o] }), src: l(), width: t, height: t, draggable: !1, "data-country": e, loading: i ? void 0 : "lazy", style: { width: t, height: t, ...a }, alt: "", ...s });
}, ZT = 1e3, eD = ({ show: e, dialCodePrefix: t = "+", selectedCountry: r, countries: n = Ka, preferredCountries: i = [], flags: o, onSelect: a, onClose: s, ...l }) => {
  let u = Q.useRef(null), c = Q.useRef(), f = Q.useMemo(() => {
    if (!i || !i.length) return n;
    let C = [], S = [...n];
    for (let b of i) {
      let $ = S.findIndex((k) => fn(k).iso2 === b);
      if ($ !== -1) {
        let k = S.splice($, 1)[0];
        C.push(k);
      }
    }
    return C.concat(S);
  }, [n, i]), d = Q.useRef({ updatedAt: void 0, value: "" }), w = (C) => {
    let S = d.current.updatedAt && (/* @__PURE__ */ new Date()).getTime() - d.current.updatedAt.getTime() > ZT;
    d.current = { value: S ? C : `${d.current.value}${C}`, updatedAt: /* @__PURE__ */ new Date() };
    let b = f.findIndex(($) => fn($).name.toLowerCase().startsWith(d.current.value));
    b !== -1 && m(b);
  }, h = Q.useCallback((C) => f.findIndex((S) => fn(S).iso2 === C), [f]), [y, m] = Q.useState(h(r)), v = () => {
    c.current !== r && m(h(r));
  }, p = Q.useCallback((C) => {
    m(h(C.iso2)), a?.(C);
  }, [a, h]), g = (C) => {
    let S = f.length - 1, b = ($) => C === "prev" ? $ - 1 : C === "next" ? $ + 1 : C === "last" ? S : 0;
    m(($) => {
      let k = b($);
      return k < 0 ? 0 : k > S ? S : k;
    });
  }, x = (C) => {
    if (C.stopPropagation(), C.key === "Enter") {
      C.preventDefault();
      let S = fn(f[y]);
      p(S);
      return;
    }
    if (C.key === "Escape") {
      s?.();
      return;
    }
    if (C.key === "ArrowUp") {
      C.preventDefault(), g("prev");
      return;
    }
    if (C.key === "ArrowDown") {
      C.preventDefault(), g("next");
      return;
    }
    if (C.key === "PageUp") {
      C.preventDefault(), g("first");
      return;
    }
    if (C.key === "PageDown") {
      C.preventDefault(), g("last");
      return;
    }
    C.key === " " && C.preventDefault(), C.key.length === 1 && !C.altKey && !C.ctrlKey && !C.metaKey && w(C.key.toLocaleLowerCase());
  }, E = Q.useCallback(() => {
    if (!u.current || y === void 0) return;
    let C = fn(f[y]).iso2;
    if (C === c.current) return;
    let S = u.current.querySelector(`[data-country="${C}"]`);
    S && (MT(u.current, S), c.current = C);
  }, [y, f]);
  return Q.useEffect(() => {
    E();
  }, [y, E]), Q.useEffect(() => {
    u.current && (e ? u.current.focus() : v());
  }, [e]), Q.useEffect(() => {
    v();
  }, [r]), V.createElement("ul", { ref: u, role: "listbox", className: Tt({ addPrefix: ["country-selector-dropdown"], rawClassNames: [l.className] }), style: { display: e ? "block" : "none", ...l.style }, onKeyDown: x, onBlur: s, tabIndex: -1, "aria-activedescendant": `react-international-phone__${fn(f[y]).iso2}-option` }, f.map((C, S) => {
    let b = fn(C), $ = b.iso2 === r, k = S === y, _ = i.includes(b.iso2), P = S === i.length - 1, D = o?.find((L) => L.iso2 === b.iso2);
    return V.createElement(V.Fragment, { key: b.iso2 }, V.createElement("li", { "data-country": b.iso2, role: "option", "aria-selected": $, "aria-label": `${b.name} ${t}${b.dialCode}`, id: `react-international-phone__${b.iso2}-option`, className: Tt({ addPrefix: ["country-selector-dropdown__list-item", _ && "country-selector-dropdown__list-item--preferred", $ && "country-selector-dropdown__list-item--selected", k && "country-selector-dropdown__list-item--focused"], rawClassNames: [l.listItemClassName, _ && l.listItemPreferredClassName, $ && l.listItemSelectedClassName, k && l.listItemFocusedClassName] }), onClick: () => p(b), style: l.listItemStyle, title: b.name }, V.createElement(ak, { iso2: b.iso2, src: D?.src, className: Tt({ addPrefix: ["country-selector-dropdown__list-item-flag-emoji"], rawClassNames: [l.listItemFlagClassName] }), style: l.listItemFlagStyle }), V.createElement("span", { className: Tt({ addPrefix: ["country-selector-dropdown__list-item-country-name"], rawClassNames: [l.listItemCountryNameClassName] }), style: l.listItemCountryNameStyle }, b.name), V.createElement("span", { className: Tt({ addPrefix: ["country-selector-dropdown__list-item-dial-code"], rawClassNames: [l.listItemDialCodeClassName] }), style: l.listItemDialCodeStyle }, t, b.dialCode)), P ? V.createElement("hr", { className: Tt({ addPrefix: ["country-selector-dropdown__preferred-list-divider"], rawClassNames: [l.preferredListDividerClassName] }), style: l.preferredListDividerStyle }) : null);
  }));
}, tD = ({ selectedCountry: e, onSelect: t, disabled: r, hideDropdown: n, countries: i = Ka, preferredCountries: o = [], flags: a, renderButtonWrapper: s, ...l }) => {
  let [u, c] = Q.useState(!1), f = Q.useMemo(() => {
    if (e) return ya({ value: e, field: "iso2", countries: i });
  }, [i, e]), d = Q.useRef(null), w = (y) => {
    y.key && ["ArrowUp", "ArrowDown"].includes(y.key) && (y.preventDefault(), c(!0));
  }, h = () => {
    let y = { title: f?.name, onClick: () => c((v) => !v), onMouseDown: (v) => v.preventDefault(), onKeyDown: w, disabled: n || r, role: "combobox", "aria-label": "Country selector", "aria-haspopup": "listbox", "aria-expanded": u }, m = V.createElement("div", { className: Tt({ addPrefix: ["country-selector-button__button-content"], rawClassNames: [l.buttonContentWrapperClassName] }), style: l.buttonContentWrapperStyle }, V.createElement(ak, { iso2: e, src: a?.find((v) => v.iso2 === e)?.src, className: Tt({ addPrefix: ["country-selector-button__flag-emoji", r && "country-selector-button__flag-emoji--disabled"], rawClassNames: [l.flagClassName] }), style: { visibility: e ? "visible" : "hidden", ...l.flagStyle } }), !n && V.createElement("div", { className: Tt({ addPrefix: ["country-selector-button__dropdown-arrow", r && "country-selector-button__dropdown-arrow--disabled", u && "country-selector-button__dropdown-arrow--active"], rawClassNames: [l.dropdownArrowClassName] }), style: l.dropdownArrowStyle }));
    return s ? s({ children: m, rootProps: y }) : V.createElement("button", { ...y, type: "button", className: Tt({ addPrefix: ["country-selector-button", u && "country-selector-button--active", r && "country-selector-button--disabled", n && "country-selector-button--hide-dropdown"], rawClassNames: [l.buttonClassName] }), "data-country": e, style: l.buttonStyle }, m);
  };
  return V.createElement("div", { className: Tt({ addPrefix: ["country-selector"], rawClassNames: [l.className] }), style: l.style, ref: d }, h(), V.createElement(eD, { show: u, countries: i, preferredCountries: o, flags: a, onSelect: (y) => {
    c(!1), t?.(y);
  }, selectedCountry: e, onClose: () => {
    c(!1);
  }, ...l.dropdownStyleProps }));
}, rD = ({ dialCode: e, prefix: t, disabled: r, style: n, className: i }) => V.createElement("div", { className: Tt({ addPrefix: ["dial-code-preview", r && "dial-code-preview--disabled"], rawClassNames: [i] }), style: n }, `${t}${e}`);
Q.forwardRef(({ value: e, onChange: t, countries: r = Ka, preferredCountries: n = [], hideDropdown: i, showDisabledDialCodeAndPrefix: o, disableFocusAfterCountrySelect: a, flags: s, style: l, className: u, inputStyle: c, inputClassName: f, countrySelectorStyleProps: d, dialCodePreviewStyleProps: w, inputProps: h, placeholder: y, disabled: m, name: v, onFocus: p, onBlur: g, required: x, autoFocus: E, ...C }, S) => {
  let { phone: b, inputValue: $, inputRef: k, country: _, setCountry: P, handlePhoneValueChange: D } = WT({ value: e, countries: r, ...C, onChange: (j) => {
    t?.(j.phone, { country: j.country, inputValue: j.inputValue });
  } }), L = C.disableDialCodeAndPrefix && o && _?.dialCode;
  return Q.useImperativeHandle(S, () => k.current ? Object.assign(k.current, { setCountry: P, state: { phone: b, inputValue: $, country: _ } }) : null, [k, P, b, $, _]), V.createElement("div", { ref: S, className: Tt({ addPrefix: ["input-container"], rawClassNames: [u] }), style: l }, V.createElement(tD, { onSelect: (j) => P(j.iso2, { focusOnInput: !a }), flags: s, selectedCountry: _.iso2, countries: r, preferredCountries: n, disabled: m, hideDropdown: i, ...d }), L && V.createElement(rD, { dialCode: _.dialCode, prefix: C.prefix ?? "+", disabled: m, ...w }), V.createElement("input", { onChange: D, value: $, type: "tel", ref: k, className: Tt({ addPrefix: ["input", m && "input--disabled"], rawClassNames: [f] }), placeholder: y, disabled: m, style: c, name: v, onFocus: p, onBlur: g, autoFocus: E, required: x, ...h }));
});
var sk = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = r.apply(null, o);
              s && n.push(s);
            }
          } else if (a === "object")
            if (o.toString === Object.prototype.toString)
              for (var l in o)
                t.call(o, l) && o[l] && n.push(l);
            else
              n.push(o.toString());
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(sk);
var nD = sk.exports;
const RU = /* @__PURE__ */ Ri(nD);
var Vl = (e) => e.type === "checkbox", no = (e) => e instanceof Date, It = (e) => e == null;
const lk = (e) => typeof e == "object";
var it = (e) => !It(e) && !Array.isArray(e) && lk(e) && !no(e), uk = (e) => it(e) && e.target ? Vl(e.target) ? e.target.checked : e.target.value : e, iD = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ck = (e, t) => e.has(iD(t)), oD = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return it(t) && t.hasOwnProperty("isPrototypeOf");
}, wv = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function St(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(wv && (e instanceof Blob || n)) && (r || it(e)))
    if (t = r ? [] : {}, !r && !oD(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = St(e[i]));
  else
    return e;
  return t;
}
var ad = (e) => Array.isArray(e) ? e.filter(Boolean) : [], rt = (e) => e === void 0, X = (e, t, r) => {
  if (!t || !it(e))
    return r;
  const n = ad(t.split(/[,[\].]+?/)).reduce((i, o) => It(i) ? i : i[o], e);
  return rt(n) || n === e ? rt(e[t]) ? r : e[t] : n;
}, vr = (e) => typeof e == "boolean", Sv = (e) => /^\w*$/.test(e), fk = (e) => ad(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Pe = (e, t, r) => {
  let n = -1;
  const i = Sv(t) ? [t] : fk(t), o = i.length, a = o - 1;
  for (; ++n < o; ) {
    const s = i[n];
    let l = r;
    if (n !== a) {
      const u = e[s];
      l = it(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const ef = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Qr = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, $n = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, dk = V.createContext(null), xv = () => V.useContext(dk), PU = (e) => {
  const { children: t, ...r } = e;
  return V.createElement(dk.Provider, { value: r }, t);
};
var pk = (e, t, r, n = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== Qr.all && (t._proxyFormState[a] = !n || Qr.all), r && (r[a] = !0), e[a];
      }
    });
  return i;
};
const Ev = typeof window < "u" ? Q.useLayoutEffect : Q.useEffect;
function aD(e) {
  const t = xv(), { control: r = t.control, disabled: n, name: i, exact: o } = e || {}, [a, s] = V.useState(r._formState), l = V.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Ev(() => r._subscribe({
    name: i,
    formState: l.current,
    exact: o,
    callback: (u) => {
      !n && s({
        ...r._formState,
        ...u
      });
    }
  }), [i, n, o]), V.useEffect(() => {
    l.current.isValid && r._setValid(!0);
  }, [r]), V.useMemo(() => pk(a, r, l.current, !1), [a, r]);
}
var vn = (e) => typeof e == "string", hk = (e, t, r, n, i) => vn(e) ? (n && t.watch.add(e), X(r, e, i)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), X(r, o))) : (n && (t.watchAll = !0), r);
function sD(e) {
  const t = xv(), { control: r = t.control, name: n, defaultValue: i, disabled: o, exact: a } = e || {}, s = V.useRef(i), [l, u] = V.useState(r._getWatch(n, s.current));
  return Ev(() => r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (c) => !o && u(hk(n, r._names, c.values || r._formValues, !1, s.current))
  }), [n, r, o, a]), V.useEffect(() => r._removeUnmounted()), l;
}
function TU(e) {
  const t = xv(), { name: r, disabled: n, control: i = t.control, shouldUnregister: o } = e, a = ck(i._names.array, r), s = sD({
    control: i,
    name: r,
    defaultValue: X(i._formValues, r, X(i._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = aD({
    control: i,
    name: r,
    exact: !0
  }), u = V.useRef(e), c = V.useRef(i.register(r, {
    ...e.rules,
    value: s,
    ...vr(e.disabled) ? { disabled: e.disabled } : {}
  })), f = V.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!X(l.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!X(l.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!X(l.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!X(l.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => X(l.errors, r)
    }
  }), [l, r]), d = V.useCallback((m) => c.current.onChange({
    target: {
      value: uk(m),
      name: r
    },
    type: ef.CHANGE
  }), [r]), w = V.useCallback(() => c.current.onBlur({
    target: {
      value: X(i._formValues, r),
      name: r
    },
    type: ef.BLUR
  }), [r, i._formValues]), h = V.useCallback((m) => {
    const v = X(i._fields, r);
    v && m && (v._f.ref = {
      focus: () => m.focus(),
      select: () => m.select(),
      setCustomValidity: (p) => m.setCustomValidity(p),
      reportValidity: () => m.reportValidity()
    });
  }, [i._fields, r]), y = V.useMemo(() => ({
    name: r,
    value: s,
    ...vr(n) || l.disabled ? { disabled: l.disabled || n } : {},
    onChange: d,
    onBlur: w,
    ref: h
  }), [r, n, l.disabled, d, w, h, s]);
  return V.useEffect(() => {
    const m = i._options.shouldUnregister || o;
    i.register(r, {
      ...u.current.rules,
      ...vr(u.current.disabled) ? { disabled: u.current.disabled } : {}
    });
    const v = (p, g) => {
      const x = X(i._fields, p);
      x && x._f && (x._f.mount = g);
    };
    if (v(r, !0), m) {
      const p = St(X(i._options.defaultValues, r));
      Pe(i._defaultValues, r, p), rt(X(i._formValues, r)) && Pe(i._formValues, r, p);
    }
    return !a && i.register(r), () => {
      (a ? m && !i._state.action : m) ? i.unregister(r) : v(r, !1);
    };
  }, [r, i, a, o]), V.useEffect(() => {
    i._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, i]), V.useMemo(() => ({
    field: y,
    formState: l,
    fieldState: f
  }), [y, l, f]);
}
var yk = (e, t, r, n, i) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: i || !0
  }
} : {}, Gs = (e) => Array.isArray(e) ? e : [e], mw = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const o of e)
        o.next && o.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((o) => o !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, yy = (e) => It(e) || !lk(e);
function ci(e, t) {
  if (yy(e) || yy(t))
    return e === t;
  if (no(e) && no(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const i of r) {
    const o = e[i];
    if (!n.includes(i))
      return !1;
    if (i !== "ref") {
      const a = t[i];
      if (no(o) && no(a) || it(o) && it(a) || Array.isArray(o) && Array.isArray(a) ? !ci(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var Nt = (e) => it(e) && !Object.keys(e).length, Cv = (e) => e.type === "file", Kr = (e) => typeof e == "function", tf = (e) => {
  if (!wv)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, mk = (e) => e.type === "select-multiple", kv = (e) => e.type === "radio", lD = (e) => kv(e) || Vl(e), fp = (e) => tf(e) && e.isConnected;
function uD(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = rt(e) ? n++ : e[t[n++]];
  return e;
}
function cD(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !rt(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const r = Array.isArray(t) ? t : Sv(t) ? [t] : fk(t), n = r.length === 1 ? e : uD(e, r), i = r.length - 1, o = r[i];
  return n && delete n[o], i !== 0 && (it(n) && Nt(n) || Array.isArray(n) && cD(n)) && ut(e, r.slice(0, -1)), e;
}
var vk = (e) => {
  for (const t in e)
    if (Kr(e[t]))
      return !0;
  return !1;
};
function rf(e, t = {}) {
  const r = Array.isArray(e);
  if (it(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || it(e[n]) && !vk(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, rf(e[n], t[n])) : It(e[n]) || (t[n] = !0);
  return t;
}
function gk(e, t, r) {
  const n = Array.isArray(e);
  if (it(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || it(e[i]) && !vk(e[i]) ? rt(t) || yy(r[i]) ? r[i] = Array.isArray(e[i]) ? rf(e[i], []) : { ...rf(e[i]) } : gk(e[i], It(t) ? {} : t[i], r[i]) : r[i] = !ci(e[i], t[i]);
  return r;
}
var vs = (e, t) => gk(e, t, rf(t));
const vw = {
  value: !1,
  isValid: !1
}, gw = { value: !0, isValid: !0 };
var wk = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !rt(e[0].attributes.value) ? rt(e[0].value) || e[0].value === "" ? gw : { value: e[0].value, isValid: !0 } : gw
    ) : vw;
  }
  return vw;
}, Sk = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => rt(e) ? e : t ? e === "" ? NaN : e && +e : r && vn(e) ? new Date(e) : n ? n(e) : e;
const ww = {
  isValid: !1,
  value: null
};
var xk = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, ww) : ww;
function Sw(e) {
  const t = e.ref;
  return Cv(t) ? t.files : kv(t) ? xk(e.refs).value : mk(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Vl(t) ? wk(e.refs).value : Sk(rt(t.value) ? e.ref.value : t.value, e);
}
var fD = (e, t, r, n) => {
  const i = {};
  for (const o of e) {
    const a = X(t, o);
    a && Pe(i, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: n
  };
}, nf = (e) => e instanceof RegExp, gs = (e) => rt(e) ? e : nf(e) ? e.source : it(e) ? nf(e.value) ? e.value.source : e.value : e, xw = (e) => ({
  isOnSubmit: !e || e === Qr.onSubmit,
  isOnBlur: e === Qr.onBlur,
  isOnChange: e === Qr.onChange,
  isOnAll: e === Qr.all,
  isOnTouch: e === Qr.onTouched
});
const Ew = "AsyncFunction";
var dD = (e) => !!e && !!e.validate && !!(Kr(e.validate) && e.validate.constructor.name === Ew || it(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ew)), pD = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), Cw = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Ys = (e, t, r, n) => {
  for (const i of r || Object.keys(e)) {
    const o = X(e, i);
    if (o) {
      const { _f: a, ...s } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !n)
          return !0;
        if (a.ref && t(a.ref, a.name) && !n)
          return !0;
        if (Ys(s, t))
          break;
      } else if (it(s) && Ys(s, t))
        break;
    }
  }
};
function kw(e, t, r) {
  const n = X(e, r);
  if (n || Sv(r))
    return {
      error: n,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = X(t, o), s = X(e, o);
    if (a && !Array.isArray(a) && r !== o)
      return { name: r };
    if (s && s.type)
      return {
        name: o,
        error: s
      };
    i.pop();
  }
  return {
    name: r
  };
}
var hD = (e, t, r, n) => {
  r(e);
  const { name: i, ...o } = e;
  return Nt(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!n || Qr.all));
}, yD = (e, t, r) => !e || !t || e === t || Gs(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))), mD = (e, t, r, n, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(t || e) : (r ? n.isOnBlur : i.isOnBlur) ? !e : (r ? n.isOnChange : i.isOnChange) ? e : !0, vD = (e, t) => !ad(X(e, t)).length && ut(e, t), gD = (e, t, r) => {
  const n = Gs(X(e, r));
  return Pe(n, "root", t[r]), Pe(e, r, n), e;
}, nc = (e) => vn(e);
function bw(e, t, r = "validate") {
  if (nc(e) || Array.isArray(e) && e.every(nc) || vr(e) && !e)
    return {
      type: r,
      message: nc(e) ? e : "",
      ref: t
    };
}
var Wo = (e) => it(e) && !nf(e) ? e : {
  value: e,
  message: ""
}, _w = async (e, t, r, n, i, o) => {
  const { ref: a, refs: s, required: l, maxLength: u, minLength: c, min: f, max: d, pattern: w, validate: h, name: y, valueAsNumber: m, mount: v } = e._f, p = X(r, y);
  if (!v || t.has(y))
    return {};
  const g = s ? s[0] : a, x = (P) => {
    i && g.reportValidity && (g.setCustomValidity(vr(P) ? "" : P || ""), g.reportValidity());
  }, E = {}, C = kv(a), S = Vl(a), b = C || S, $ = (m || Cv(a)) && rt(a.value) && rt(p) || tf(a) && a.value === "" || p === "" || Array.isArray(p) && !p.length, k = yk.bind(null, y, n, E), _ = (P, D, L, j = $n.maxLength, z = $n.minLength) => {
    const B = P ? D : L;
    E[y] = {
      type: P ? j : z,
      message: B,
      ref: a,
      ...k(P ? j : z, B)
    };
  };
  if (o ? !Array.isArray(p) || !p.length : l && (!b && ($ || It(p)) || vr(p) && !p || S && !wk(s).isValid || C && !xk(s).isValid)) {
    const { value: P, message: D } = nc(l) ? { value: !!l, message: l } : Wo(l);
    if (P && (E[y] = {
      type: $n.required,
      message: D,
      ref: g,
      ...k($n.required, D)
    }, !n))
      return x(D), E;
  }
  if (!$ && (!It(f) || !It(d))) {
    let P, D;
    const L = Wo(d), j = Wo(f);
    if (!It(p) && !isNaN(p)) {
      const z = a.valueAsNumber || p && +p;
      It(L.value) || (P = z > L.value), It(j.value) || (D = z < j.value);
    } else {
      const z = a.valueAsDate || new Date(p), B = (G) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + G), M = a.type == "time", q = a.type == "week";
      vn(L.value) && p && (P = M ? B(p) > B(L.value) : q ? p > L.value : z > new Date(L.value)), vn(j.value) && p && (D = M ? B(p) < B(j.value) : q ? p < j.value : z < new Date(j.value));
    }
    if ((P || D) && (_(!!P, L.message, j.message, $n.max, $n.min), !n))
      return x(E[y].message), E;
  }
  if ((u || c) && !$ && (vn(p) || o && Array.isArray(p))) {
    const P = Wo(u), D = Wo(c), L = !It(P.value) && p.length > +P.value, j = !It(D.value) && p.length < +D.value;
    if ((L || j) && (_(L, P.message, D.message), !n))
      return x(E[y].message), E;
  }
  if (w && !$ && vn(p)) {
    const { value: P, message: D } = Wo(w);
    if (nf(P) && !p.match(P) && (E[y] = {
      type: $n.pattern,
      message: D,
      ref: a,
      ...k($n.pattern, D)
    }, !n))
      return x(D), E;
  }
  if (h) {
    if (Kr(h)) {
      const P = await h(p, r), D = bw(P, g);
      if (D && (E[y] = {
        ...D,
        ...k($n.validate, D.message)
      }, !n))
        return x(D.message), E;
    } else if (it(h)) {
      let P = {};
      for (const D in h) {
        if (!Nt(P) && !n)
          break;
        const L = bw(await h[D](p, r), g, D);
        L && (P = {
          ...L,
          ...k(D, L.message)
        }, x(L.message), n && (E[y] = P));
      }
      if (!Nt(P) && (E[y] = {
        ref: g,
        ...P
      }, !n))
        return E;
    }
  }
  return x(!0), E;
};
const wD = {
  mode: Qr.onSubmit,
  reValidateMode: Qr.onChange,
  shouldFocusError: !0
};
function SD(e = {}) {
  let t = {
    ...wD,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Kr(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  };
  const n = {};
  let i = it(t.defaultValues) || it(t.values) ? St(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : St(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, s = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const c = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let f = {
    ...c
  };
  const d = {
    array: mw(),
    state: mw()
  }, w = t.criteriaMode === Qr.all, h = (O) => (A) => {
    clearTimeout(u), u = setTimeout(O, A);
  }, y = async (O) => {
    if (!t.disabled && (c.isValid || f.isValid || O)) {
      const A = t.resolver ? Nt((await S()).errors) : await $(n, !0);
      A !== r.isValid && d.state.next({
        isValid: A
      });
    }
  }, m = (O, A) => {
    !t.disabled && (c.isValidating || c.validatingFields || f.isValidating || f.validatingFields) && ((O || Array.from(s.mount)).forEach((I) => {
      I && (A ? Pe(r.validatingFields, I, A) : ut(r.validatingFields, I));
    }), d.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Nt(r.validatingFields)
    }));
  }, v = (O, A = [], I, Y, K = !0, H = !0) => {
    if (Y && I && !t.disabled) {
      if (a.action = !0, H && Array.isArray(X(n, O))) {
        const re = I(X(n, O), Y.argA, Y.argB);
        K && Pe(n, O, re);
      }
      if (H && Array.isArray(X(r.errors, O))) {
        const re = I(X(r.errors, O), Y.argA, Y.argB);
        K && Pe(r.errors, O, re), vD(r.errors, O);
      }
      if ((c.touchedFields || f.touchedFields) && H && Array.isArray(X(r.touchedFields, O))) {
        const re = I(X(r.touchedFields, O), Y.argA, Y.argB);
        K && Pe(r.touchedFields, O, re);
      }
      (c.dirtyFields || f.dirtyFields) && (r.dirtyFields = vs(i, o)), d.state.next({
        name: O,
        isDirty: _(O, A),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Pe(o, O, A);
  }, p = (O, A) => {
    Pe(r.errors, O, A), d.state.next({
      errors: r.errors
    });
  }, g = (O) => {
    r.errors = O, d.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, x = (O, A, I, Y) => {
    const K = X(n, O);
    if (K) {
      const H = X(o, O, rt(I) ? X(i, O) : I);
      rt(H) || Y && Y.defaultChecked || A ? Pe(o, O, A ? H : Sw(K._f)) : L(O, H), a.mount && y();
    }
  }, E = (O, A, I, Y, K) => {
    let H = !1, re = !1;
    const ge = {
      name: O
    };
    if (!t.disabled) {
      if (!I || Y) {
        (c.isDirty || f.isDirty) && (re = r.isDirty, r.isDirty = ge.isDirty = _(), H = re !== ge.isDirty);
        const me = ci(X(i, O), A);
        re = !!X(r.dirtyFields, O), me ? ut(r.dirtyFields, O) : Pe(r.dirtyFields, O, !0), ge.dirtyFields = r.dirtyFields, H = H || (c.dirtyFields || f.dirtyFields) && re !== !me;
      }
      if (I) {
        const me = X(r.touchedFields, O);
        me || (Pe(r.touchedFields, O, I), ge.touchedFields = r.touchedFields, H = H || (c.touchedFields || f.touchedFields) && me !== I);
      }
      H && K && d.state.next(ge);
    }
    return H ? ge : {};
  }, C = (O, A, I, Y) => {
    const K = X(r.errors, O), H = (c.isValid || f.isValid) && vr(A) && r.isValid !== A;
    if (t.delayError && I ? (l = h(() => p(O, I)), l(t.delayError)) : (clearTimeout(u), l = null, I ? Pe(r.errors, O, I) : ut(r.errors, O)), (I ? !ci(K, I) : K) || !Nt(Y) || H) {
      const re = {
        ...Y,
        ...H && vr(A) ? { isValid: A } : {},
        errors: r.errors,
        name: O
      };
      r = {
        ...r,
        ...re
      }, d.state.next(re);
    }
  }, S = async (O) => {
    m(O, !0);
    const A = await t.resolver(o, t.context, fD(O || s.mount, n, t.criteriaMode, t.shouldUseNativeValidation));
    return m(O), A;
  }, b = async (O) => {
    const { errors: A } = await S(O);
    if (O)
      for (const I of O) {
        const Y = X(A, I);
        Y ? Pe(r.errors, I, Y) : ut(r.errors, I);
      }
    else
      r.errors = A;
    return A;
  }, $ = async (O, A, I = {
    valid: !0
  }) => {
    for (const Y in O) {
      const K = O[Y];
      if (K) {
        const { _f: H, ...re } = K;
        if (H) {
          const ge = s.array.has(H.name), me = K._f && dD(K._f);
          me && c.validatingFields && m([Y], !0);
          const We = await _w(K, s.disabled, o, w, t.shouldUseNativeValidation && !A, ge);
          if (me && c.validatingFields && m([Y]), We[H.name] && (I.valid = !1, A))
            break;
          !A && (X(We, H.name) ? ge ? gD(r.errors, We, H.name) : Pe(r.errors, H.name, We[H.name]) : ut(r.errors, H.name));
        }
        !Nt(re) && await $(re, A, I);
      }
    }
    return I.valid;
  }, k = () => {
    for (const O of s.unMount) {
      const A = X(n, O);
      A && (A._f.refs ? A._f.refs.every((I) => !fp(I)) : !fp(A._f.ref)) && Oe(O);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, _ = (O, A) => !t.disabled && (O && A && Pe(o, O, A), !ci(G(), i)), P = (O, A, I) => hk(O, s, {
    ...a.mount ? o : rt(A) ? i : vn(O) ? { [O]: A } : A
  }, I, A), D = (O) => ad(X(a.mount ? o : i, O, t.shouldUnregister ? X(i, O, []) : [])), L = (O, A, I = {}) => {
    const Y = X(n, O);
    let K = A;
    if (Y) {
      const H = Y._f;
      H && (!H.disabled && Pe(o, O, Sk(A, H)), K = tf(H.ref) && It(A) ? "" : A, mk(H.ref) ? [...H.ref.options].forEach((re) => re.selected = K.includes(re.value)) : H.refs ? Vl(H.ref) ? H.refs.forEach((re) => {
        (!re.defaultChecked || !re.disabled) && (Array.isArray(K) ? re.checked = !!K.find((ge) => ge === re.value) : re.checked = K === re.value || !!K);
      }) : H.refs.forEach((re) => re.checked = re.value === K) : Cv(H.ref) ? H.ref.value = "" : (H.ref.value = K, H.ref.type || d.state.next({
        name: O,
        values: St(o)
      })));
    }
    (I.shouldDirty || I.shouldTouch) && E(O, K, I.shouldTouch, I.shouldDirty, !0), I.shouldValidate && q(O);
  }, j = (O, A, I) => {
    for (const Y in A) {
      if (!A.hasOwnProperty(Y))
        return;
      const K = A[Y], H = `${O}.${Y}`, re = X(n, H);
      (s.array.has(O) || it(K) || re && !re._f) && !no(K) ? j(H, K, I) : L(H, K, I);
    }
  }, z = (O, A, I = {}) => {
    const Y = X(n, O), K = s.array.has(O), H = St(A);
    Pe(o, O, H), K ? (d.array.next({
      name: O,
      values: St(o)
    }), (c.isDirty || c.dirtyFields || f.isDirty || f.dirtyFields) && I.shouldDirty && d.state.next({
      name: O,
      dirtyFields: vs(i, o),
      isDirty: _(O, H)
    })) : Y && !Y._f && !It(H) ? j(O, H, I) : L(O, H, I), Cw(O, s) && d.state.next({ ...r }), d.state.next({
      name: a.mount ? O : void 0,
      values: St(o)
    });
  }, B = async (O) => {
    a.mount = !0;
    const A = O.target;
    let I = A.name, Y = !0;
    const K = X(n, I), H = (me) => {
      Y = Number.isNaN(me) || no(me) && isNaN(me.getTime()) || ci(me, X(o, I, me));
    }, re = xw(t.mode), ge = xw(t.reValidateMode);
    if (K) {
      let me, We;
      const bn = A.type ? Sw(K._f) : uk(O), Ft = O.type === ef.BLUR || O.type === ef.FOCUS_OUT, es = !pD(K._f) && !t.resolver && !X(r.errors, I) && !K._f.deps || mD(Ft, X(r.touchedFields, I), r.isSubmitted, ge, re), qt = Cw(I, s, Ft);
      Pe(o, I, bn), Ft ? (K._f.onBlur && K._f.onBlur(O), l && l(0)) : K._f.onChange && K._f.onChange(O);
      const Xn = E(I, bn, Ft), No = !Nt(Xn) || qt;
      if (!Ft && d.state.next({
        name: I,
        type: O.type,
        values: St(o)
      }), es)
        return (c.isValid || f.isValid) && (t.mode === "onBlur" ? Ft && y() : Ft || y()), No && d.state.next({ name: I, ...qt ? {} : Xn });
      if (!Ft && qt && d.state.next({ ...r }), t.resolver) {
        const { errors: Jn } = await S([I]);
        if (H(bn), Y) {
          const Ni = kw(r.errors, n, I), Li = kw(Jn, n, Ni.name || I);
          me = Li.error, I = Li.name, We = Nt(Jn);
        }
      } else
        m([I], !0), me = (await _w(K, s.disabled, o, w, t.shouldUseNativeValidation))[I], m([I]), H(bn), Y && (me ? We = !1 : (c.isValid || f.isValid) && (We = await $(n, !0)));
      Y && (K._f.deps && q(K._f.deps), C(I, We, me, Xn));
    }
  }, M = (O, A) => {
    if (X(r.errors, A) && O.focus)
      return O.focus(), 1;
  }, q = async (O, A = {}) => {
    let I, Y;
    const K = Gs(O);
    if (t.resolver) {
      const H = await b(rt(O) ? O : K);
      I = Nt(H), Y = O ? !K.some((re) => X(H, re)) : I;
    } else O ? (Y = (await Promise.all(K.map(async (H) => {
      const re = X(n, H);
      return await $(re && re._f ? { [H]: re } : re);
    }))).every(Boolean), !(!Y && !r.isValid) && y()) : Y = I = await $(n);
    return d.state.next({
      ...!vn(O) || (c.isValid || f.isValid) && I !== r.isValid ? {} : { name: O },
      ...t.resolver || !O ? { isValid: I } : {},
      errors: r.errors
    }), A.shouldFocus && !Y && Ys(n, M, O ? K : s.mount), Y;
  }, G = (O) => {
    const A = {
      ...a.mount ? o : i
    };
    return rt(O) ? A : vn(O) ? X(A, O) : O.map((I) => X(A, I));
  }, ae = (O, A) => ({
    invalid: !!X((A || r).errors, O),
    isDirty: !!X((A || r).dirtyFields, O),
    error: X((A || r).errors, O),
    isValidating: !!X(r.validatingFields, O),
    isTouched: !!X((A || r).touchedFields, O)
  }), ue = (O) => {
    O && Gs(O).forEach((A) => ut(r.errors, A)), d.state.next({
      errors: O ? r.errors : {}
    });
  }, be = (O, A, I) => {
    const Y = (X(n, O, { _f: {} })._f || {}).ref, K = X(r.errors, O) || {}, { ref: H, message: re, type: ge, ...me } = K;
    Pe(r.errors, O, {
      ...me,
      ...A,
      ref: Y
    }), d.state.next({
      name: O,
      errors: r.errors,
      isValid: !1
    }), I && I.shouldFocus && Y && Y.focus && Y.focus();
  }, Se = (O, A) => Kr(O) ? d.state.subscribe({
    next: (I) => O(P(void 0, A), I)
  }) : P(O, A, !0), ce = (O) => d.state.subscribe({
    next: (A) => {
      yD(O.name, A.name, O.exact) && hD(A, O.formState || c, Yn, O.reRenderRoot) && O.callback({
        values: { ...o },
        ...r,
        ...A
      });
    }
  }).unsubscribe, Ce = (O) => (a.mount = !0, f = {
    ...f,
    ...O.formState
  }, ce({
    ...O,
    formState: f
  })), Oe = (O, A = {}) => {
    for (const I of O ? Gs(O) : s.mount)
      s.mount.delete(I), s.array.delete(I), A.keepValue || (ut(n, I), ut(o, I)), !A.keepError && ut(r.errors, I), !A.keepDirty && ut(r.dirtyFields, I), !A.keepTouched && ut(r.touchedFields, I), !A.keepIsValidating && ut(r.validatingFields, I), !t.shouldUnregister && !A.keepDefaultValue && ut(i, I);
    d.state.next({
      values: St(o)
    }), d.state.next({
      ...r,
      ...A.keepDirty ? { isDirty: _() } : {}
    }), !A.keepIsValid && y();
  }, Ye = ({ disabled: O, name: A }) => {
    (vr(O) && a.mount || O || s.disabled.has(A)) && (O ? s.disabled.add(A) : s.disabled.delete(A));
  }, zr = (O, A = {}) => {
    let I = X(n, O);
    const Y = vr(A.disabled) || vr(t.disabled);
    return Pe(n, O, {
      ...I || {},
      _f: {
        ...I && I._f ? I._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...A
      }
    }), s.mount.add(O), I ? Ye({
      disabled: vr(A.disabled) ? A.disabled : t.disabled,
      name: O
    }) : x(O, !0, A.value), {
      ...Y ? { disabled: A.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!A.required,
        min: gs(A.min),
        max: gs(A.max),
        minLength: gs(A.minLength),
        maxLength: gs(A.maxLength),
        pattern: gs(A.pattern)
      } : {},
      name: O,
      onChange: B,
      onBlur: B,
      ref: (K) => {
        if (K) {
          zr(O, A), I = X(n, O);
          const H = rt(K.value) && K.querySelectorAll && K.querySelectorAll("input,select,textarea")[0] || K, re = lD(H), ge = I._f.refs || [];
          if (re ? ge.find((me) => me === H) : H === I._f.ref)
            return;
          Pe(n, O, {
            _f: {
              ...I._f,
              ...re ? {
                refs: [
                  ...ge.filter(fp),
                  H,
                  ...Array.isArray(X(i, O)) ? [{}] : []
                ],
                ref: { type: H.type, name: O }
              } : { ref: H }
            }
          }), x(O, !1, void 0, H);
        } else
          I = X(n, O, {}), I._f && (I._f.mount = !1), (t.shouldUnregister || A.shouldUnregister) && !(ck(s.array, O) && a.action) && s.unMount.add(O);
      }
    };
  }, Kn = () => t.shouldFocusError && Ys(n, M, s.mount), En = (O) => {
    vr(O) && (d.state.next({ disabled: O }), Ys(n, (A, I) => {
      const Y = X(n, I);
      Y && (A.disabled = Y._f.disabled || O, Array.isArray(Y._f.refs) && Y._f.refs.forEach((K) => {
        K.disabled = Y._f.disabled || O;
      }));
    }, 0, !1));
  }, Xe = (O, A) => async (I) => {
    let Y;
    I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
    let K = St(o);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: H, values: re } = await S();
      r.errors = H, K = re;
    } else
      await $(n);
    if (s.disabled.size)
      for (const H of s.disabled)
        Pe(K, H, void 0);
    if (ut(r.errors, "root"), Nt(r.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await O(K, I);
      } catch (H) {
        Y = H;
      }
    } else
      A && await A({ ...r.errors }, I), Kn(), setTimeout(Kn);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Nt(r.errors) && !Y,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), Y)
      throw Y;
  }, lr = (O, A = {}) => {
    X(n, O) && (rt(A.defaultValue) ? z(O, St(X(i, O))) : (z(O, A.defaultValue), Pe(i, O, St(A.defaultValue))), A.keepTouched || ut(r.touchedFields, O), A.keepDirty || (ut(r.dirtyFields, O), r.isDirty = A.defaultValue ? _(O, St(X(i, O))) : _()), A.keepError || (ut(r.errors, O), c.isValid && y()), d.state.next({ ...r }));
  }, Cn = (O, A = {}) => {
    const I = O ? St(O) : i, Y = St(I), K = Nt(O), H = K ? i : Y;
    if (A.keepDefaultValues || (i = I), !A.keepValues) {
      if (A.keepDirtyValues) {
        const re = /* @__PURE__ */ new Set([
          ...s.mount,
          ...Object.keys(vs(i, o))
        ]);
        for (const ge of Array.from(re))
          X(r.dirtyFields, ge) ? Pe(H, ge, X(o, ge)) : z(ge, X(H, ge));
      } else {
        if (wv && rt(O))
          for (const re of s.mount) {
            const ge = X(n, re);
            if (ge && ge._f) {
              const me = Array.isArray(ge._f.refs) ? ge._f.refs[0] : ge._f.ref;
              if (tf(me)) {
                const We = me.closest("form");
                if (We) {
                  We.reset();
                  break;
                }
              }
            }
          }
        for (const re of s.mount)
          z(re, X(H, re));
      }
      o = St(H), d.array.next({
        values: { ...H }
      }), d.state.next({
        values: { ...H }
      });
    }
    s = {
      mount: A.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !c.isValid || !!A.keepIsValid || !!A.keepDirtyValues, a.watch = !!t.shouldUnregister, d.state.next({
      submitCount: A.keepSubmitCount ? r.submitCount : 0,
      isDirty: K ? !1 : A.keepDirty ? r.isDirty : !!(A.keepDefaultValues && !ci(O, i)),
      isSubmitted: A.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: K ? {} : A.keepDirtyValues ? A.keepDefaultValues && o ? vs(i, o) : r.dirtyFields : A.keepDefaultValues && O ? vs(i, O) : A.keepDirty ? r.dirtyFields : {},
      touchedFields: A.keepTouched ? r.touchedFields : {},
      errors: A.keepErrors ? r.errors : {},
      isSubmitSuccessful: A.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Gn = (O, A) => Cn(Kr(O) ? O(o) : O, A), Wt = (O, A = {}) => {
    const I = X(n, O), Y = I && I._f;
    if (Y) {
      const K = Y.refs ? Y.refs[0] : Y.ref;
      K.focus && (K.focus(), A.shouldSelect && Kr(K.select) && K.select());
    }
  }, Yn = (O) => {
    r = {
      ...r,
      ...O
    };
  }, kn = {
    control: {
      register: zr,
      unregister: Oe,
      getFieldState: ae,
      handleSubmit: Xe,
      setError: be,
      _subscribe: ce,
      _runSchema: S,
      _getWatch: P,
      _getDirty: _,
      _setValid: y,
      _setFieldArray: v,
      _setDisabledField: Ye,
      _setErrors: g,
      _getFieldArray: D,
      _reset: Cn,
      _resetDefaultValues: () => Kr(t.defaultValues) && t.defaultValues().then((O) => {
        Gn(O, t.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: k,
      _disableForm: En,
      _subjects: d,
      _proxyFormState: c,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(O) {
        a = O;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return s;
      },
      set _names(O) {
        s = O;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(O) {
        t = {
          ...t,
          ...O
        };
      }
    },
    subscribe: Ce,
    trigger: q,
    register: zr,
    handleSubmit: Xe,
    watch: Se,
    setValue: z,
    getValues: G,
    reset: Gn,
    resetField: lr,
    clearErrors: ue,
    unregister: Oe,
    setError: be,
    setFocus: Wt,
    getFieldState: ae
  };
  return {
    ...kn,
    formControl: kn
  };
}
function DU(e = {}) {
  const t = V.useRef(void 0), r = V.useRef(void 0), [n, i] = V.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Kr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: Kr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...e.formControl ? e.formControl : SD(e),
    formState: n
  }, e.formControl && e.defaultValues && !Kr(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions));
  const o = t.current.control;
  return o._options = e, Ev(() => {
    const a = o._subscribe({
      formState: o._proxyFormState,
      callback: () => i({ ...o._formState }),
      reRenderRoot: !0
    });
    return i((s) => ({
      ...s,
      isReady: !0
    })), o._formState.isReady = !0, a;
  }, [o]), V.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), V.useEffect(() => {
    e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode), e.errors && !Nt(e.errors) && o._setErrors(e.errors);
  }, [o, e.errors, e.mode, e.reValidateMode]), V.useEffect(() => {
    e.shouldUnregister && o._subjects.state.next({
      values: o._getWatch()
    });
  }, [o, e.shouldUnregister]), V.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), V.useEffect(() => {
    e.values && !ci(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, i((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [o, e.values]), V.useEffect(() => {
    o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = pk(n, o), t.current;
}
var my = function(e, t) {
  return my = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, my(e, t);
};
function AU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  my(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var $w = function() {
  return $w = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, $w.apply(this, arguments);
};
function FU(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function MU(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(c) {
      try {
        u(n.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(s, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function NU(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = s(0), a.throw = s(1), a.return = s(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
      switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < o[1]) {
            r.label = o[1], o = u;
            break;
          }
          if (o && r.label < o[2]) {
            r.label = o[2], r.ops.push(u);
            break;
          }
          o[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function LU(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Ga = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ek = Q;
function pe(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gt = Object.prototype.hasOwnProperty, xD = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ow = {}, Rw = {};
function Ck(e) {
  return Gt.call(Rw, e) ? !0 : Gt.call(Ow, e) ? !1 : xD.test(e) ? Rw[e] = !0 : (Ow[e] = !0, !1);
}
function Bt(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var _t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _t[e] = new Bt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _t[t] = new Bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _t[e] = new Bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _t[e] = new Bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _t[e] = new Bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _t[e] = new Bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _t[e] = new Bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _t[e] = new Bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _t[e] = new Bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bv = /[\-:]([a-z])/g;
function _v(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bv,
    _v
  );
  _t[t] = new Bt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bv, _v);
  _t[t] = new Bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bv, _v);
  _t[t] = new Bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _t[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_t.xlinkHref = new Bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _t[e] = new Bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ic = {
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
  strokeWidth: !0
}, ED = ["Webkit", "ms", "Moz", "O"];
Object.keys(ic).forEach(function(e) {
  ED.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ic[t] = ic[e];
  });
});
var CD = /["'&<>]/;
function jt(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = CD.exec(e);
  if (t) {
    var r = "", n, i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      i !== n && (r += e.substring(i, n)), i = n + 1, r += t;
    }
    e = i !== n ? r + e.substring(i, n) : r;
  }
  return e;
}
var kD = /([A-Z])/g, bD = /^ms-/, vy = Array.isArray;
function On(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function _D(e, t, r) {
  switch (t) {
    case "select":
      return On(1, r.value != null ? r.value : r.defaultValue);
    case "svg":
      return On(2, null);
    case "math":
      return On(3, null);
    case "foreignObject":
      return On(1, null);
    case "table":
      return On(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return On(5, null);
    case "colgroup":
      return On(7, null);
    case "tr":
      return On(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? On(1, null) : e;
}
var Pw = /* @__PURE__ */ new Map();
function kk(e, t, r) {
  if (typeof r != "object") throw Error(pe(62));
  t = !0;
  for (var n in r) if (Gt.call(r, n)) {
    var i = r[n];
    if (i != null && typeof i != "boolean" && i !== "") {
      if (n.indexOf("--") === 0) {
        var o = jt(n);
        i = jt(("" + i).trim());
      } else {
        o = n;
        var a = Pw.get(o);
        a !== void 0 || (a = jt(o.replace(kD, "-$1").toLowerCase().replace(bD, "-ms-")), Pw.set(o, a)), o = a, i = typeof i == "number" ? i === 0 || Gt.call(ic, n) ? "" + i : i + "px" : jt(("" + i).trim());
      }
      t ? (t = !1, e.push(' style="', o, ":", i)) : e.push(";", o, ":", i);
    }
  }
  t || e.push('"');
}
function ur(e, t, r, n) {
  switch (r) {
    case "style":
      kk(e, t, n);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") {
    if (t = _t.hasOwnProperty(r) ? _t[r] : null, t !== null) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (r = t.attributeName, t.type) {
        case 3:
          n && e.push(" ", r, '=""');
          break;
        case 4:
          n === !0 ? e.push(" ", r, '=""') : n !== !1 && e.push(" ", r, '="', jt(n), '"');
          break;
        case 5:
          isNaN(n) || e.push(" ", r, '="', jt(n), '"');
          break;
        case 6:
          !isNaN(n) && 1 <= n && e.push(" ", r, '="', jt(n), '"');
          break;
        default:
          t.sanitizeURL && (n = "" + n), e.push(" ", r, '="', jt(n), '"');
      }
    } else if (Ck(r)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = r.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", r, '="', jt(n), '"');
    }
  }
}
function oc(e, t, r) {
  if (t != null) {
    if (r != null) throw Error(pe(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(pe(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function $D(e) {
  var t = "";
  return Ek.Children.forEach(e, function(r) {
    r != null && (t += r);
  }), t;
}
function dp(e, t, r, n) {
  e.push(sn(r));
  var i = r = null, o;
  for (o in t) if (Gt.call(t, o)) {
    var a = t[o];
    if (a != null) switch (o) {
      case "children":
        r = a;
        break;
      case "dangerouslySetInnerHTML":
        i = a;
        break;
      default:
        ur(e, n, o, a);
    }
  }
  return e.push(">"), oc(e, i, r), typeof r == "string" ? (e.push(jt(r)), null) : r;
}
var OD = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Tw = /* @__PURE__ */ new Map();
function sn(e) {
  var t = Tw.get(e);
  if (t === void 0) {
    if (!OD.test(e)) throw Error(pe(65, e));
    t = "<" + e, Tw.set(e, t);
  }
  return t;
}
function RD(e, t, r, n, i) {
  switch (t) {
    case "select":
      e.push(sn("select"));
      var o = null, a = null;
      for (c in r) if (Gt.call(r, c)) {
        var s = r[c];
        if (s != null) switch (c) {
          case "children":
            o = s;
            break;
          case "dangerouslySetInnerHTML":
            a = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            ur(e, n, c, s);
        }
      }
      return e.push(">"), oc(e, a, o), o;
    case "option":
      a = i.selectedValue, e.push(sn("option"));
      var l = s = null, u = null, c = null;
      for (o in r) if (Gt.call(r, o)) {
        var f = r[o];
        if (f != null) switch (o) {
          case "children":
            s = f;
            break;
          case "selected":
            u = f;
            break;
          case "dangerouslySetInnerHTML":
            c = f;
            break;
          case "value":
            l = f;
          default:
            ur(e, n, o, f);
        }
      }
      if (a != null) if (r = l !== null ? "" + l : $D(s), vy(a)) {
        for (n = 0; n < a.length; n++)
          if ("" + a[n] === r) {
            e.push(' selected=""');
            break;
          }
      } else "" + a === r && e.push(' selected=""');
      else u && e.push(' selected=""');
      return e.push(">"), oc(e, c, s), s;
    case "textarea":
      e.push(sn("textarea")), c = a = o = null;
      for (s in r) if (Gt.call(r, s) && (l = r[s], l != null)) switch (s) {
        case "children":
          c = l;
          break;
        case "value":
          o = l;
          break;
        case "defaultValue":
          a = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(pe(91));
        default:
          ur(
            e,
            n,
            s,
            l
          );
      }
      if (o === null && a !== null && (o = a), e.push(">"), c != null) {
        if (o != null) throw Error(pe(92));
        if (vy(c) && 1 < c.length) throw Error(pe(93));
        o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o !== null && e.push(jt("" + o)), null;
    case "input":
      e.push(sn("input")), l = c = s = o = null;
      for (a in r) if (Gt.call(r, a) && (u = r[a], u != null)) switch (a) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(pe(399, "input"));
        case "defaultChecked":
          l = u;
          break;
        case "defaultValue":
          s = u;
          break;
        case "checked":
          c = u;
          break;
        case "value":
          o = u;
          break;
        default:
          ur(e, n, a, u);
      }
      return c !== null ? ur(e, n, "checked", c) : l !== null && ur(e, n, "checked", l), o !== null ? ur(e, n, "value", o) : s !== null && ur(e, n, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(sn("menuitem"));
      for (var d in r) if (Gt.call(r, d) && (o = r[d], o != null)) switch (d) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(pe(400));
        default:
          ur(e, n, d, o);
      }
      return e.push(">"), null;
    case "title":
      e.push(sn("title")), o = null;
      for (f in r) if (Gt.call(r, f) && (a = r[f], a != null)) switch (f) {
        case "children":
          o = a;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(pe(434));
        default:
          ur(e, n, f, a);
      }
      return e.push(">"), o;
    case "listing":
    case "pre":
      e.push(sn(t)), a = o = null;
      for (l in r) if (Gt.call(r, l) && (s = r[l], s != null)) switch (l) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          a = s;
          break;
        default:
          ur(e, n, l, s);
      }
      if (e.push(">"), a != null) {
        if (o != null) throw Error(pe(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(pe(61));
        r = a.__html, r != null && (typeof r == "string" && 0 < r.length && r[0] === `
` ? e.push(`
`, r) : e.push("" + r));
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(sn(t));
      for (var w in r) if (Gt.call(r, w) && (o = r[w], o != null)) switch (w) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(pe(399, t));
        default:
          ur(e, n, w, o);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return dp(
        e,
        r,
        t,
        n
      );
    case "html":
      return i.insertionMode === 0 && e.push("<!DOCTYPE html>"), dp(e, r, t, n);
    default:
      if (t.indexOf("-") === -1 && typeof r.is != "string") return dp(e, r, t, n);
      e.push(sn(t)), a = o = null;
      for (u in r) if (Gt.call(r, u) && (s = r[u], s != null)) switch (u) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          a = s;
          break;
        case "style":
          kk(e, n, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Ck(u) && typeof s != "function" && typeof s != "symbol" && e.push(" ", u, '="', jt(s), '"');
      }
      return e.push(">"), oc(e, a, o), o;
  }
}
function Dw(e, t, r) {
  if (e.push('<!--$?--><template id="'), r === null) throw Error(pe(395));
  return e.push(r), e.push('"></template>');
}
function PD(e, t, r, n) {
  switch (r.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
    default:
      throw Error(pe(397));
  }
}
function TD(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(pe(397));
  }
}
var DD = /[<\u2028\u2029]/g;
function pp(e) {
  return JSON.stringify(e).replace(DD, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function AD(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Aw(e, t, r, n) {
  return r.generateStaticMarkup ? (e.push(jt(t)), !1) : (t === "" ? e = n : (n && e.push("<!-- -->"), e.push(jt(t)), e = !0), e);
}
var Xs = Object.assign, FD = Symbol.for("react.element"), bk = Symbol.for("react.portal"), _k = Symbol.for("react.fragment"), $k = Symbol.for("react.strict_mode"), Ok = Symbol.for("react.profiler"), Rk = Symbol.for("react.provider"), Pk = Symbol.for("react.context"), Tk = Symbol.for("react.forward_ref"), Dk = Symbol.for("react.suspense"), Ak = Symbol.for("react.suspense_list"), Fk = Symbol.for("react.memo"), $v = Symbol.for("react.lazy"), MD = Symbol.for("react.scope"), ND = Symbol.for("react.debug_trace_mode"), LD = Symbol.for("react.legacy_hidden"), ID = Symbol.for("react.default_value"), Fw = Symbol.iterator;
function gy(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _k:
      return "Fragment";
    case bk:
      return "Portal";
    case Ok:
      return "Profiler";
    case $k:
      return "StrictMode";
    case Dk:
      return "Suspense";
    case Ak:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Pk:
      return (e.displayName || "Context") + ".Consumer";
    case Rk:
      return (e._context.displayName || "Context") + ".Provider";
    case Tk:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Fk:
      return t = e.displayName || null, t !== null ? t : gy(e.type) || "Memo";
    case $v:
      t = e._payload, e = e._init;
      try {
        return gy(e(t));
      } catch {
      }
  }
  return null;
}
var Mk = {};
function Mw(e, t) {
  if (e = e.contextTypes, !e) return Mk;
  var r = {}, n;
  for (n in e) r[n] = t[n];
  return r;
}
var io = null;
function sd(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var r = t.parent;
    if (e === null) {
      if (r !== null) throw Error(pe(401));
    } else {
      if (r === null) throw Error(pe(401));
      sd(e, r);
    }
    t.context._currentValue2 = t.value;
  }
}
function Nk(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Nk(e);
}
function Lk(e) {
  var t = e.parent;
  t !== null && Lk(t), e.context._currentValue2 = e.value;
}
function Ik(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(pe(402));
  e.depth === t.depth ? sd(e, t) : Ik(e, t);
}
function jk(e, t) {
  var r = t.parent;
  if (r === null) throw Error(pe(402));
  e.depth === r.depth ? sd(e, r) : jk(e, r), t.context._currentValue2 = t.value;
}
function of(e) {
  var t = io;
  t !== e && (t === null ? Lk(e) : e === null ? Nk(t) : t.depth === e.depth ? sd(t, e) : t.depth > e.depth ? Ik(t, e) : jk(t, e), io = e);
}
var Nw = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Lw(e, t, r, n) {
  var i = e.state !== void 0 ? e.state : null;
  e.updater = Nw, e.props = r, e.state = i;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var a = t.contextType;
  if (e.context = typeof a == "object" && a !== null ? a._currentValue2 : n, a = t.getDerivedStateFromProps, typeof a == "function" && (a = a(r, i), i = a == null ? i : Xs({}, i, a), e.state = i), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Nw.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length) if (t = o.queue, a = o.replace, o.queue = null, o.replace = !1, a && t.length === 1) e.state = t[0];
  else {
    for (o = a ? t[0] : e.state, i = !0, a = a ? 1 : 0; a < t.length; a++) {
      var s = t[a];
      s = typeof s == "function" ? s.call(e, o, r, n) : s, s != null && (i ? (i = !1, o = Xs({}, o, s)) : Xs(o, s));
    }
    e.state = o;
  }
  else o.queue = null;
}
var jD = { id: 1, overflow: "" };
function wy(e, t, r) {
  var n = e.id;
  e = e.overflow;
  var i = 32 - ac(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - ac(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    return o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, { id: 1 << 32 - ac(t) + i | r << i | n, overflow: o + e };
  }
  return { id: 1 << o | r << i | n, overflow: e };
}
var ac = Math.clz32 ? Math.clz32 : VD, zD = Math.log, UD = Math.LN2;
function VD(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zD(e) / UD | 0) | 0;
}
function BD(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var HD = typeof Object.is == "function" ? Object.is : BD, Hn = null, Ov = null, sc = null, Ne = null, Ds = !1, af = !1, _l = 0, hi = null, ld = 0;
function Qi() {
  if (Hn === null) throw Error(pe(321));
  return Hn;
}
function Iw() {
  if (0 < ld) throw Error(pe(312));
  return { memoizedState: null, queue: null, next: null };
}
function Rv() {
  return Ne === null ? sc === null ? (Ds = !1, sc = Ne = Iw()) : (Ds = !0, Ne = sc) : Ne.next === null ? (Ds = !1, Ne = Ne.next = Iw()) : (Ds = !0, Ne = Ne.next), Ne;
}
function Pv() {
  Ov = Hn = null, af = !1, sc = null, ld = 0, Ne = hi = null;
}
function zk(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jw(e, t, r) {
  if (Hn = Qi(), Ne = Rv(), Ds) {
    var n = Ne.queue;
    if (t = n.dispatch, hi !== null && (r = hi.get(n), r !== void 0)) {
      hi.delete(n), n = Ne.memoizedState;
      do
        n = e(n, r.action), r = r.next;
      while (r !== null);
      return Ne.memoizedState = n, [n, t];
    }
    return [Ne.memoizedState, t];
  }
  return e = e === zk ? typeof t == "function" ? t() : t : r !== void 0 ? r(t) : t, Ne.memoizedState = e, e = Ne.queue = { last: null, dispatch: null }, e = e.dispatch = WD.bind(null, Hn, e), [Ne.memoizedState, e];
}
function zw(e, t) {
  if (Hn = Qi(), Ne = Rv(), t = t === void 0 ? null : t, Ne !== null) {
    var r = Ne.memoizedState;
    if (r !== null && t !== null) {
      var n = r[1];
      e: if (n === null) n = !1;
      else {
        for (var i = 0; i < n.length && i < t.length; i++) if (!HD(t[i], n[i])) {
          n = !1;
          break e;
        }
        n = !0;
      }
      if (n) return r[0];
    }
  }
  return e = e(), Ne.memoizedState = [e, t], e;
}
function WD(e, t, r) {
  if (25 <= ld) throw Error(pe(301));
  if (e === Hn) if (af = !0, e = { action: r, next: null }, hi === null && (hi = /* @__PURE__ */ new Map()), r = hi.get(t), r === void 0) hi.set(t, e);
  else {
    for (t = r; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function qD() {
  throw Error(pe(394));
}
function Eu() {
}
var Uw = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return Qi(), e._currentValue2;
}, useMemo: zw, useReducer: jw, useRef: function(e) {
  Hn = Qi(), Ne = Rv();
  var t = Ne.memoizedState;
  return t === null ? (e = { current: e }, Ne.memoizedState = e) : t;
}, useState: function(e) {
  return jw(zk, e);
}, useInsertionEffect: Eu, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return zw(function() {
    return e;
  }, t);
}, useImperativeHandle: Eu, useEffect: Eu, useDebugValue: Eu, useDeferredValue: function(e) {
  return Qi(), e;
}, useTransition: function() {
  return Qi(), [
    !1,
    qD
  ];
}, useId: function() {
  var e = Ov.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ac(e) - 1)).toString(32) + t;
  var r = lc;
  if (r === null) throw Error(pe(404));
  return t = _l++, e = ":" + r.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return Qi(), t(e._source);
}, useSyncExternalStore: function(e, t, r) {
  if (r === void 0) throw Error(pe(407));
  return r();
} }, lc = null, hp = Ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function QD(e) {
  return console.error(e), null;
}
function As() {
}
function KD(e, t, r, n, i, o, a, s, l) {
  var u = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: n === void 0 ? 12800 : n, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: u, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: i === void 0 ? QD : i, onAllReady: As, onShellReady: a === void 0 ? As : a, onShellError: As, onFatalError: As }, r = sf(t, 0, null, r, !1, !1), r.parentFlushed = !0, e = Tv(t, e, null, r, c, Mk, null, jD), u.push(e), t;
}
function Tv(e, t, r, n, i, o, a, s) {
  e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
  var l = { node: t, ping: function() {
    var u = e.pingedTasks;
    u.push(l), u.length === 1 && Bk(e);
  }, blockedBoundary: r, blockedSegment: n, abortSet: i, legacyContext: o, context: a, treeContext: s };
  return i.add(l), l;
}
function sf(e, t, r, n, i, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: n, boundary: r, lastPushedText: i, textEmbedded: o };
}
function $l(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function lf(e, t) {
  var r = e.onShellError;
  r(t), r = e.onFatalError, r(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Vw(e, t, r, n, i) {
  for (Hn = {}, Ov = t, _l = 0, e = r(n, i); af; ) af = !1, _l = 0, ld += 1, Ne = null, e = r(n, i);
  return Pv(), e;
}
function Bw(e, t, r, n) {
  var i = r.render(), o = n.childContextTypes;
  if (o != null) {
    var a = t.legacyContext;
    if (typeof r.getChildContext != "function") n = a;
    else {
      r = r.getChildContext();
      for (var s in r) if (!(s in o)) throw Error(pe(108, gy(n) || "Unknown", s));
      n = Xs({}, a, r);
    }
    t.legacyContext = n, dr(e, t, i), t.legacyContext = a;
  } else dr(e, t, i);
}
function Hw(e, t) {
  if (e && e.defaultProps) {
    t = Xs({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Sy(e, t, r, n, i) {
  if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
    i = Mw(r, t.legacyContext);
    var o = r.contextType;
    o = new r(n, typeof o == "object" && o !== null ? o._currentValue2 : i), Lw(o, r, n, i), Bw(e, t, o, r);
  } else {
    o = Mw(r, t.legacyContext), i = Vw(e, t, r, n, o);
    var a = _l !== 0;
    if (typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) Lw(i, r, n, o), Bw(e, t, i, r);
    else if (a) {
      n = t.treeContext, t.treeContext = wy(n, 1, 0);
      try {
        dr(e, t, i);
      } finally {
        t.treeContext = n;
      }
    } else dr(e, t, i);
  }
  else if (typeof r == "string") {
    switch (i = t.blockedSegment, o = RD(i.chunks, r, n, e.responseState, i.formatContext), i.lastPushedText = !1, a = i.formatContext, i.formatContext = _D(a, r, n), xy(e, t, o), i.formatContext = a, r) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        i.chunks.push("</", r, ">");
    }
    i.lastPushedText = !1;
  } else {
    switch (r) {
      case LD:
      case ND:
      case $k:
      case Ok:
      case _k:
        dr(e, t, n.children);
        return;
      case Ak:
        dr(e, t, n.children);
        return;
      case MD:
        throw Error(pe(343));
      case Dk:
        e: {
          r = t.blockedBoundary, i = t.blockedSegment, o = n.fallback, n = n.children, a = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: a, errorDigest: null }, l = sf(e, i.chunks.length, s, i.formatContext, !1, !1);
          i.children.push(l), i.lastPushedText = !1;
          var u = sf(e, 0, null, i.formatContext, !1, !1);
          u.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = u;
          try {
            if (xy(
              e,
              t,
              n
            ), e.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), u.status = 1, uf(s, u), s.pendingTasks === 0) break e;
          } catch (c) {
            u.status = 4, s.forceClientRender = !0, s.errorDigest = $l(e, c);
          } finally {
            t.blockedBoundary = r, t.blockedSegment = i;
          }
          t = Tv(e, o, r, l, a, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof r == "object" && r !== null) switch (r.$$typeof) {
      case Tk:
        if (n = Vw(e, t, r.render, n, i), _l !== 0) {
          r = t.treeContext, t.treeContext = wy(r, 1, 0);
          try {
            dr(e, t, n);
          } finally {
            t.treeContext = r;
          }
        } else dr(e, t, n);
        return;
      case Fk:
        r = r.type, n = Hw(r, n), Sy(e, t, r, n, i);
        return;
      case Rk:
        if (i = n.children, r = r._context, n = n.value, o = r._currentValue2, r._currentValue2 = n, a = io, io = n = { parent: a, depth: a === null ? 0 : a.depth + 1, context: r, parentValue: o, value: n }, t.context = n, dr(e, t, i), e = io, e === null) throw Error(pe(403));
        n = e.parentValue, e.context._currentValue2 = n === ID ? e.context._defaultValue : n, e = io = e.parent, t.context = e;
        return;
      case Pk:
        n = n.children, n = n(r._currentValue2), dr(e, t, n);
        return;
      case $v:
        i = r._init, r = i(r._payload), n = Hw(r, n), Sy(
          e,
          t,
          r,
          n,
          void 0
        );
        return;
    }
    throw Error(pe(130, r == null ? r : typeof r, ""));
  }
}
function dr(e, t, r) {
  if (t.node = r, typeof r == "object" && r !== null) {
    switch (r.$$typeof) {
      case FD:
        Sy(e, t, r.type, r.props, r.ref);
        return;
      case bk:
        throw Error(pe(257));
      case $v:
        var n = r._init;
        r = n(r._payload), dr(e, t, r);
        return;
    }
    if (vy(r)) {
      Ww(e, t, r);
      return;
    }
    if (r === null || typeof r != "object" ? n = null : (n = Fw && r[Fw] || r["@@iterator"], n = typeof n == "function" ? n : null), n && (n = n.call(r))) {
      if (r = n.next(), !r.done) {
        var i = [];
        do
          i.push(r.value), r = n.next();
        while (!r.done);
        Ww(e, t, i);
      }
      return;
    }
    throw e = Object.prototype.toString.call(r), Error(pe(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e));
  }
  typeof r == "string" ? (n = t.blockedSegment, n.lastPushedText = Aw(t.blockedSegment.chunks, r, e.responseState, n.lastPushedText)) : typeof r == "number" && (n = t.blockedSegment, n.lastPushedText = Aw(t.blockedSegment.chunks, "" + r, e.responseState, n.lastPushedText));
}
function Ww(e, t, r) {
  for (var n = r.length, i = 0; i < n; i++) {
    var o = t.treeContext;
    t.treeContext = wy(o, n, i);
    try {
      xy(e, t, r[i]);
    } finally {
      t.treeContext = o;
    }
  }
}
function xy(e, t, r) {
  var n = t.blockedSegment.formatContext, i = t.legacyContext, o = t.context;
  try {
    return dr(e, t, r);
  } catch (l) {
    if (Pv(), typeof l == "object" && l !== null && typeof l.then == "function") {
      r = l;
      var a = t.blockedSegment, s = sf(e, a.chunks.length, null, a.formatContext, a.lastPushedText, !0);
      a.children.push(s), a.lastPushedText = !1, e = Tv(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, r.then(e, e), t.blockedSegment.formatContext = n, t.legacyContext = i, t.context = o, of(o);
    } else throw t.blockedSegment.formatContext = n, t.legacyContext = i, t.context = o, of(o), l;
  }
}
function GD(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Vk(this, t, e);
}
function Uk(e, t, r) {
  var n = e.blockedBoundary;
  e.blockedSegment.status = 3, n === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, e = r === void 0 ? Error(pe(432)) : r, n.errorDigest = t.onError(e), n.parentFlushed && t.clientRenderedBoundaries.push(n)), n.fallbackAbortableTasks.forEach(function(i) {
    return Uk(i, t, r);
  }), n.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (n = t.onAllReady, n()));
}
function uf(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var r = t.children[0];
    r.id = t.id, r.parentFlushed = !0, r.status === 1 && uf(e, r);
  } else e.completedSegments.push(t);
}
function Vk(e, t, r) {
  if (t === null) {
    if (r.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(pe(389));
      e.completedRootSegment = r;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = As, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && uf(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(GD, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (uf(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Bk(e) {
  if (e.status !== 2) {
    var t = io, r = hp.current;
    hp.current = Uw;
    var n = lc;
    lc = e.responseState;
    try {
      var i = e.pingedTasks, o;
      for (o = 0; o < i.length; o++) {
        var a = i[o], s = e, l = a.blockedSegment;
        if (l.status === 0) {
          of(a.context);
          try {
            dr(s, a, a.node), s.responseState.generateStaticMarkup || l.lastPushedText && l.textEmbedded && l.chunks.push("<!-- -->"), a.abortSet.delete(a), l.status = 1, Vk(s, a.blockedBoundary, l);
          } catch (h) {
            if (Pv(), typeof h == "object" && h !== null && typeof h.then == "function") {
              var u = a.ping;
              h.then(u, u);
            } else {
              a.abortSet.delete(a), l.status = 4;
              var c = a.blockedBoundary, f = h, d = $l(s, f);
              if (c === null ? lf(s, f) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = d, c.parentFlushed && s.clientRenderedBoundaries.push(c))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var w = s.onAllReady;
                w();
              }
            }
          } finally {
          }
        }
      }
      i.splice(0, o), e.destination !== null && Dv(e, e.destination);
    } catch (h) {
      $l(e, h), lf(e, h);
    } finally {
      lc = n, hp.current = r, r === Uw && of(t);
    }
  }
}
function Cu(e, t, r) {
  switch (r.parentFlushed = !0, r.status) {
    case 0:
      var n = r.id = e.nextSegmentId++;
      return r.lastPushedText = !1, r.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = n.toString(16), t.push(e), t.push('"></template>');
    case 1:
      r.status = 2;
      var i = !0;
      n = r.chunks;
      var o = 0;
      r = r.children;
      for (var a = 0; a < r.length; a++) {
        for (i = r[a]; o < i.index; o++) t.push(n[o]);
        i = ud(e, t, i);
      }
      for (; o < n.length - 1; o++) t.push(n[o]);
      return o < n.length && (i = t.push(n[o])), i;
    default:
      throw Error(pe(390));
  }
}
function ud(e, t, r) {
  var n = r.boundary;
  if (n === null) return Cu(e, t, r);
  if (n.parentFlushed = !0, n.forceClientRender) return e.responseState.generateStaticMarkup || (n = n.errorDigest, t.push("<!--$!-->"), t.push("<template"), n && (t.push(' data-dgst="'), n = jt(n), t.push(n), t.push('"')), t.push("></template>")), Cu(e, t, r), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < n.pendingTasks) {
    n.rootSegmentID = e.nextSegmentId++, 0 < n.completedSegments.length && e.partialBoundaries.push(n);
    var i = e.responseState, o = i.nextSuspenseID++;
    return i = i.boundaryPrefix + o.toString(16), n = n.id = i, Dw(t, e.responseState, n), Cu(e, t, r), t.push("<!--/$-->");
  }
  if (n.byteSize > e.progressiveChunkSize) return n.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(n), Dw(t, e.responseState, n.id), Cu(e, t, r), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), r = n.completedSegments, r.length !== 1) throw Error(pe(391));
  return ud(e, t, r[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function qw(e, t, r) {
  return PD(t, e.responseState, r.formatContext, r.id), ud(e, t, r), TD(t, r.formatContext);
}
function Qw(e, t, r) {
  for (var n = r.completedSegments, i = 0; i < n.length; i++) Hk(e, t, r, n[i]);
  if (n.length = 0, e = e.responseState, n = r.id, r = r.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), n === null) throw Error(pe(395));
  return r = r.toString(16), t.push(n), t.push('","'), t.push(e.segmentPrefix), t.push(r), t.push('")<\/script>');
}
function Hk(e, t, r, n) {
  if (n.status === 2) return !0;
  var i = n.id;
  if (i === -1) {
    if ((n.id = r.rootSegmentID) === -1) throw Error(pe(392));
    return qw(e, t, n);
  }
  return qw(e, t, n), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), i = i.toString(16), t.push(i), t.push('","'), t.push(e.placeholderPrefix), t.push(i), t.push('")<\/script>');
}
function Dv(e, t) {
  try {
    var r = e.completedRootSegment;
    if (r !== null && e.pendingRootTasks === 0) {
      ud(e, t, r), e.completedRootSegment = null;
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) t.push(n[r]);
      r < n.length && t.push(n[r]);
    }
    var i = e.clientRenderedBoundaries, o;
    for (o = 0; o < i.length; o++) {
      var a = i[o];
      n = t;
      var s = e.responseState, l = a.id, u = a.errorDigest, c = a.errorMessage, f = a.errorComponentStack;
      if (n.push(s.startInlineScript), s.sentClientRenderFunction ? n.push('$RX("') : (s.sentClientRenderFunction = !0, n.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), l === null) throw Error(pe(395));
      if (n.push(l), n.push('"'), u || c || f) {
        n.push(",");
        var d = pp(u || "");
        n.push(d);
      }
      if (c || f) {
        n.push(",");
        var w = pp(c || "");
        n.push(w);
      }
      if (f) {
        n.push(",");
        var h = pp(f);
        n.push(h);
      }
      if (!n.push(")<\/script>")) {
        e.destination = null, o++, i.splice(0, o);
        return;
      }
    }
    i.splice(0, o);
    var y = e.completedBoundaries;
    for (o = 0; o < y.length; o++) if (!Qw(e, t, y[o])) {
      e.destination = null, o++, y.splice(0, o);
      return;
    }
    y.splice(0, o);
    var m = e.partialBoundaries;
    for (o = 0; o < m.length; o++) {
      var v = m[o];
      e: {
        i = e, a = t;
        var p = v.completedSegments;
        for (s = 0; s < p.length; s++) if (!Hk(i, a, v, p[s])) {
          s++, p.splice(0, s);
          var g = !1;
          break e;
        }
        p.splice(0, s), g = !0;
      }
      if (!g) {
        e.destination = null, o++, m.splice(0, o);
        return;
      }
    }
    m.splice(0, o);
    var x = e.completedBoundaries;
    for (o = 0; o < x.length; o++) if (!Qw(e, t, x[o])) {
      e.destination = null, o++, x.splice(0, o);
      return;
    }
    x.splice(0, o);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function YD(e, t) {
  try {
    var r = e.abortableTasks;
    r.forEach(function(n) {
      return Uk(n, e, t);
    }), r.clear(), e.destination !== null && Dv(e, e.destination);
  } catch (n) {
    $l(e, n), lf(e, n);
  }
}
function XD() {
}
function Wk(e, t, r, n) {
  var i = !1, o = null, a = "", s = { push: function(u) {
    return u !== null && (a += u), !0;
  }, destroy: function(u) {
    i = !0, o = u;
  } }, l = !1;
  if (e = KD(e, AD(r, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, XD, void 0, function() {
    l = !0;
  }), Bk(e), YD(e, n), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Dv(e, s);
    } catch (u) {
      $l(e, u), lf(e, u);
    }
  }
  if (i) throw o;
  if (!l) throw Error(pe(426));
  return a;
}
Ga.renderToNodeStream = function() {
  throw Error(pe(207));
};
Ga.renderToStaticMarkup = function(e, t) {
  return Wk(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
Ga.renderToStaticNodeStream = function() {
  throw Error(pe(208));
};
Ga.renderToString = function(e, t) {
  return Wk(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
Ga.version = "18.3.1";
var Av = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qk = Q;
function ve(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pr = null, hr = 0;
function oe(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < hr && (e.enqueue(new Uint8Array(pr.buffer, 0, hr)), pr = new Uint8Array(512), hr = 0), e.enqueue(t);
  else {
    var r = pr.length - hr;
    r < t.length && (r === 0 ? e.enqueue(pr) : (pr.set(t.subarray(0, r), hr), e.enqueue(pr), t = t.subarray(r)), pr = new Uint8Array(512), hr = 0), pr.set(t, hr), hr += t.length;
  }
}
function Be(e, t) {
  return oe(e, t), !0;
}
function Kw(e) {
  pr && 0 < hr && (e.enqueue(new Uint8Array(pr.buffer, 0, hr)), pr = null, hr = 0);
}
var Qk = new TextEncoder();
function we(e) {
  return Qk.encode(e);
}
function Z(e) {
  return Qk.encode(e);
}
function Kk(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Yt = Object.prototype.hasOwnProperty, JD = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Gw = {}, Yw = {};
function Gk(e) {
  return Yt.call(Yw, e) ? !0 : Yt.call(Gw, e) ? !1 : JD.test(e) ? Yw[e] = !0 : (Gw[e] = !0, !1);
}
function Ht(e, t, r, n, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var $t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $t[e] = new Ht(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $t[t] = new Ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $t[e] = new Ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $t[e] = new Ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $t[e] = new Ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $t[e] = new Ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $t[e] = new Ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $t[e] = new Ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $t[e] = new Ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fv = /[\-:]([a-z])/g;
function Mv(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fv,
    Mv
  );
  $t[t] = new Ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fv, Mv);
  $t[t] = new Ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fv, Mv);
  $t[t] = new Ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $t[e] = new Ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$t.xlinkHref = new Ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $t[e] = new Ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var uc = {
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
  strokeWidth: !0
}, ZD = ["Webkit", "ms", "Moz", "O"];
Object.keys(uc).forEach(function(e) {
  ZD.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), uc[t] = uc[e];
  });
});
var eA = /["'&<>]/;
function Ct(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = eA.exec(e);
  if (t) {
    var r = "", n, i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      i !== n && (r += e.substring(i, n)), i = n + 1, r += t;
    }
    e = i !== n ? r + e.substring(i, n) : r;
  }
  return e;
}
var tA = /([A-Z])/g, rA = /^ms-/, Ey = Array.isArray, nA = Z("<script>"), iA = Z("<\/script>"), oA = Z('<script src="'), aA = Z('<script type="module" src="'), Xw = Z('" async=""><\/script>'), sA = /(<\/|<)(s)(cript)/gi;
function lA(e, t, r, n) {
  return "" + t + (r === "s" ? "\\u0073" : "\\u0053") + n;
}
function uA(e, t, r, n, i) {
  e = e === void 0 ? "" : e, t = t === void 0 ? nA : Z('<script nonce="' + Ct(t) + '">');
  var o = [];
  if (r !== void 0 && o.push(t, we(("" + r).replace(sA, lA)), iA), n !== void 0) for (r = 0; r < n.length; r++) o.push(oA, we(Ct(n[r])), Xw);
  if (i !== void 0) for (n = 0; n < i.length; n++) o.push(aA, we(Ct(i[n])), Xw);
  return { bootstrapChunks: o, startInlineScript: t, placeholderPrefix: Z(e + "P:"), segmentPrefix: Z(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function ln(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function cA(e) {
  return ln(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function fA(e, t, r) {
  switch (t) {
    case "select":
      return ln(1, r.value != null ? r.value : r.defaultValue);
    case "svg":
      return ln(2, null);
    case "math":
      return ln(3, null);
    case "foreignObject":
      return ln(1, null);
    case "table":
      return ln(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return ln(5, null);
    case "colgroup":
      return ln(7, null);
    case "tr":
      return ln(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? ln(1, null) : e;
}
var Nv = Z("<!-- -->");
function Jw(e, t, r, n) {
  return t === "" ? n : (n && e.push(Nv), e.push(we(Ct(t))), !0);
}
var Zw = /* @__PURE__ */ new Map(), dA = Z(' style="'), eS = Z(":"), pA = Z(";");
function Yk(e, t, r) {
  if (typeof r != "object") throw Error(ve(62));
  t = !0;
  for (var n in r) if (Yt.call(r, n)) {
    var i = r[n];
    if (i != null && typeof i != "boolean" && i !== "") {
      if (n.indexOf("--") === 0) {
        var o = we(Ct(n));
        i = we(Ct(("" + i).trim()));
      } else {
        o = n;
        var a = Zw.get(o);
        a !== void 0 || (a = Z(Ct(o.replace(tA, "-$1").toLowerCase().replace(rA, "-ms-"))), Zw.set(o, a)), o = a, i = typeof i == "number" ? i === 0 || Yt.call(uc, n) ? we("" + i) : we(i + "px") : we(Ct(("" + i).trim()));
      }
      t ? (t = !1, e.push(dA, o, eS, i)) : e.push(pA, o, eS, i);
    }
  }
  t || e.push(Ki);
}
var ri = Z(" "), ta = Z('="'), Ki = Z('"'), tS = Z('=""');
function cr(e, t, r, n) {
  switch (r) {
    case "style":
      Yk(e, t, n);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") {
    if (t = $t.hasOwnProperty(r) ? $t[r] : null, t !== null) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (r = we(t.attributeName), t.type) {
        case 3:
          n && e.push(ri, r, tS);
          break;
        case 4:
          n === !0 ? e.push(ri, r, tS) : n !== !1 && e.push(ri, r, ta, we(Ct(n)), Ki);
          break;
        case 5:
          isNaN(n) || e.push(ri, r, ta, we(Ct(n)), Ki);
          break;
        case 6:
          !isNaN(n) && 1 <= n && e.push(ri, r, ta, we(Ct(n)), Ki);
          break;
        default:
          t.sanitizeURL && (n = "" + n), e.push(ri, r, ta, we(Ct(n)), Ki);
      }
    } else if (Gk(r)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = r.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(ri, we(r), ta, we(Ct(n)), Ki);
    }
  }
}
var ni = Z(">"), rS = Z("/>");
function cc(e, t, r) {
  if (t != null) {
    if (r != null) throw Error(ve(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(ve(61));
    t = t.__html, t != null && e.push(we("" + t));
  }
}
function hA(e) {
  var t = "";
  return qk.Children.forEach(e, function(r) {
    r != null && (t += r);
  }), t;
}
var yp = Z(' selected=""');
function mp(e, t, r, n) {
  e.push(un(r));
  var i = r = null, o;
  for (o in t) if (Yt.call(t, o)) {
    var a = t[o];
    if (a != null) switch (o) {
      case "children":
        r = a;
        break;
      case "dangerouslySetInnerHTML":
        i = a;
        break;
      default:
        cr(e, n, o, a);
    }
  }
  return e.push(ni), cc(e, i, r), typeof r == "string" ? (e.push(we(Ct(r))), null) : r;
}
var vp = Z(`
`), yA = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, nS = /* @__PURE__ */ new Map();
function un(e) {
  var t = nS.get(e);
  if (t === void 0) {
    if (!yA.test(e)) throw Error(ve(65, e));
    t = Z("<" + e), nS.set(e, t);
  }
  return t;
}
var mA = Z("<!DOCTYPE html>");
function vA(e, t, r, n, i) {
  switch (t) {
    case "select":
      e.push(un("select"));
      var o = null, a = null;
      for (c in r) if (Yt.call(r, c)) {
        var s = r[c];
        if (s != null) switch (c) {
          case "children":
            o = s;
            break;
          case "dangerouslySetInnerHTML":
            a = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            cr(e, n, c, s);
        }
      }
      return e.push(ni), cc(e, a, o), o;
    case "option":
      a = i.selectedValue, e.push(un("option"));
      var l = s = null, u = null, c = null;
      for (o in r) if (Yt.call(r, o)) {
        var f = r[o];
        if (f != null) switch (o) {
          case "children":
            s = f;
            break;
          case "selected":
            u = f;
            break;
          case "dangerouslySetInnerHTML":
            c = f;
            break;
          case "value":
            l = f;
          default:
            cr(e, n, o, f);
        }
      }
      if (a != null) if (r = l !== null ? "" + l : hA(s), Ey(a)) {
        for (n = 0; n < a.length; n++)
          if ("" + a[n] === r) {
            e.push(yp);
            break;
          }
      } else "" + a === r && e.push(yp);
      else u && e.push(yp);
      return e.push(ni), cc(e, c, s), s;
    case "textarea":
      e.push(un("textarea")), c = a = o = null;
      for (s in r) if (Yt.call(r, s) && (l = r[s], l != null)) switch (s) {
        case "children":
          c = l;
          break;
        case "value":
          o = l;
          break;
        case "defaultValue":
          a = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(ve(91));
        default:
          cr(e, n, s, l);
      }
      if (o === null && a !== null && (o = a), e.push(ni), c != null) {
        if (o != null) throw Error(ve(92));
        if (Ey(c) && 1 < c.length) throw Error(ve(93));
        o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(vp), o !== null && e.push(we(Ct("" + o))), null;
    case "input":
      e.push(un("input")), l = c = s = o = null;
      for (a in r) if (Yt.call(r, a) && (u = r[a], u != null)) switch (a) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(ve(399, "input"));
        case "defaultChecked":
          l = u;
          break;
        case "defaultValue":
          s = u;
          break;
        case "checked":
          c = u;
          break;
        case "value":
          o = u;
          break;
        default:
          cr(e, n, a, u);
      }
      return c !== null ? cr(
        e,
        n,
        "checked",
        c
      ) : l !== null && cr(e, n, "checked", l), o !== null ? cr(e, n, "value", o) : s !== null && cr(e, n, "value", s), e.push(rS), null;
    case "menuitem":
      e.push(un("menuitem"));
      for (var d in r) if (Yt.call(r, d) && (o = r[d], o != null)) switch (d) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(ve(400));
        default:
          cr(e, n, d, o);
      }
      return e.push(ni), null;
    case "title":
      e.push(un("title")), o = null;
      for (f in r) if (Yt.call(r, f) && (a = r[f], a != null)) switch (f) {
        case "children":
          o = a;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(ve(434));
        default:
          cr(e, n, f, a);
      }
      return e.push(ni), o;
    case "listing":
    case "pre":
      e.push(un(t)), a = o = null;
      for (l in r) if (Yt.call(r, l) && (s = r[l], s != null)) switch (l) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          a = s;
          break;
        default:
          cr(e, n, l, s);
      }
      if (e.push(ni), a != null) {
        if (o != null) throw Error(ve(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(ve(61));
        r = a.__html, r != null && (typeof r == "string" && 0 < r.length && r[0] === `
` ? e.push(vp, we(r)) : e.push(we("" + r)));
      }
      return typeof o == "string" && o[0] === `
` && e.push(vp), o;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(un(t));
      for (var w in r) if (Yt.call(r, w) && (o = r[w], o != null)) switch (w) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(ve(399, t));
        default:
          cr(e, n, w, o);
      }
      return e.push(rS), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return mp(e, r, t, n);
    case "html":
      return i.insertionMode === 0 && e.push(mA), mp(e, r, t, n);
    default:
      if (t.indexOf("-") === -1 && typeof r.is != "string") return mp(e, r, t, n);
      e.push(un(t)), a = o = null;
      for (u in r) if (Yt.call(r, u) && (s = r[u], s != null)) switch (u) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          a = s;
          break;
        case "style":
          Yk(e, n, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Gk(u) && typeof s != "function" && typeof s != "symbol" && e.push(ri, we(u), ta, we(Ct(s)), Ki);
      }
      return e.push(ni), cc(e, a, o), o;
  }
}
var gA = Z("</"), wA = Z(">"), SA = Z('<template id="'), xA = Z('"></template>'), EA = Z("<!--$-->"), CA = Z('<!--$?--><template id="'), kA = Z('"></template>'), bA = Z("<!--$!-->"), _A = Z("<!--/$-->"), $A = Z("<template"), OA = Z('"'), RA = Z(' data-dgst="');
Z(' data-msg="');
Z(' data-stck="');
var PA = Z("></template>");
function iS(e, t, r) {
  if (oe(e, CA), r === null) throw Error(ve(395));
  return oe(e, r), Be(e, kA);
}
var TA = Z('<div hidden id="'), DA = Z('">'), AA = Z("</div>"), FA = Z('<svg aria-hidden="true" style="display:none" id="'), MA = Z('">'), NA = Z("</svg>"), LA = Z('<math aria-hidden="true" style="display:none" id="'), IA = Z('">'), jA = Z("</math>"), zA = Z('<table hidden id="'), UA = Z('">'), VA = Z("</table>"), BA = Z('<table hidden><tbody id="'), HA = Z('">'), WA = Z("</tbody></table>"), qA = Z('<table hidden><tr id="'), QA = Z('">'), KA = Z("</tr></table>"), GA = Z('<table hidden><colgroup id="'), YA = Z('">'), XA = Z("</colgroup></table>");
function JA(e, t, r, n) {
  switch (r.insertionMode) {
    case 0:
    case 1:
      return oe(e, TA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, DA);
    case 2:
      return oe(e, FA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, MA);
    case 3:
      return oe(e, LA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, IA);
    case 4:
      return oe(e, zA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, UA);
    case 5:
      return oe(e, BA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, HA);
    case 6:
      return oe(e, qA), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, QA);
    case 7:
      return oe(
        e,
        GA
      ), oe(e, t.segmentPrefix), oe(e, we(n.toString(16))), Be(e, YA);
    default:
      throw Error(ve(397));
  }
}
function ZA(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return Be(e, AA);
    case 2:
      return Be(e, NA);
    case 3:
      return Be(e, jA);
    case 4:
      return Be(e, VA);
    case 5:
      return Be(e, WA);
    case 6:
      return Be(e, KA);
    case 7:
      return Be(e, XA);
    default:
      throw Error(ve(397));
  }
}
var eF = Z('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), tF = Z('$RS("'), rF = Z('","'), nF = Z('")<\/script>'), iF = Z('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), oF = Z('$RC("'), aF = Z('","'), sF = Z('")<\/script>'), lF = Z('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), uF = Z('$RX("'), cF = Z('"'), fF = Z(")<\/script>"), gp = Z(","), dF = /[<\u2028\u2029]/g;
function wp(e) {
  return JSON.stringify(e).replace(dF, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var Js = Object.assign, pF = Symbol.for("react.element"), Xk = Symbol.for("react.portal"), Jk = Symbol.for("react.fragment"), Zk = Symbol.for("react.strict_mode"), eb = Symbol.for("react.profiler"), tb = Symbol.for("react.provider"), rb = Symbol.for("react.context"), nb = Symbol.for("react.forward_ref"), ib = Symbol.for("react.suspense"), ob = Symbol.for("react.suspense_list"), ab = Symbol.for("react.memo"), Lv = Symbol.for("react.lazy"), hF = Symbol.for("react.scope"), yF = Symbol.for("react.debug_trace_mode"), mF = Symbol.for("react.legacy_hidden"), vF = Symbol.for("react.default_value"), oS = Symbol.iterator;
function Cy(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jk:
      return "Fragment";
    case Xk:
      return "Portal";
    case eb:
      return "Profiler";
    case Zk:
      return "StrictMode";
    case ib:
      return "Suspense";
    case ob:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case rb:
      return (e.displayName || "Context") + ".Consumer";
    case tb:
      return (e._context.displayName || "Context") + ".Provider";
    case nb:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ab:
      return t = e.displayName || null, t !== null ? t : Cy(e.type) || "Memo";
    case Lv:
      t = e._payload, e = e._init;
      try {
        return Cy(e(t));
      } catch {
      }
  }
  return null;
}
var sb = {};
function aS(e, t) {
  if (e = e.contextTypes, !e) return sb;
  var r = {}, n;
  for (n in e) r[n] = t[n];
  return r;
}
var oo = null;
function cd(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var r = t.parent;
    if (e === null) {
      if (r !== null) throw Error(ve(401));
    } else {
      if (r === null) throw Error(ve(401));
      cd(e, r);
    }
    t.context._currentValue = t.value;
  }
}
function lb(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && lb(e);
}
function ub(e) {
  var t = e.parent;
  t !== null && ub(t), e.context._currentValue = e.value;
}
function cb(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(ve(402));
  e.depth === t.depth ? cd(e, t) : cb(e, t);
}
function fb(e, t) {
  var r = t.parent;
  if (r === null) throw Error(ve(402));
  e.depth === r.depth ? cd(e, r) : fb(e, r), t.context._currentValue = t.value;
}
function cf(e) {
  var t = oo;
  t !== e && (t === null ? ub(e) : e === null ? lb(t) : t.depth === e.depth ? cd(t, e) : t.depth > e.depth ? cb(t, e) : fb(t, e), oo = e);
}
var sS = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function lS(e, t, r, n) {
  var i = e.state !== void 0 ? e.state : null;
  e.updater = sS, e.props = r, e.state = i;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var a = t.contextType;
  if (e.context = typeof a == "object" && a !== null ? a._currentValue : n, a = t.getDerivedStateFromProps, typeof a == "function" && (a = a(r, i), i = a == null ? i : Js({}, i, a), e.state = i), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && sS.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length) if (t = o.queue, a = o.replace, o.queue = null, o.replace = !1, a && t.length === 1) e.state = t[0];
  else {
    for (o = a ? t[0] : e.state, i = !0, a = a ? 1 : 0; a < t.length; a++) {
      var s = t[a];
      s = typeof s == "function" ? s.call(e, o, r, n) : s, s != null && (i ? (i = !1, o = Js({}, o, s)) : Js(o, s));
    }
    e.state = o;
  }
  else o.queue = null;
}
var gF = { id: 1, overflow: "" };
function ky(e, t, r) {
  var n = e.id;
  e = e.overflow;
  var i = 32 - fc(n) - 1;
  n &= ~(1 << i), r += 1;
  var o = 32 - fc(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    return o = (n & (1 << a) - 1).toString(32), n >>= a, i -= a, { id: 1 << 32 - fc(t) + i | r << i | n, overflow: o + e };
  }
  return { id: 1 << o | r << i | n, overflow: e };
}
var fc = Math.clz32 ? Math.clz32 : xF, wF = Math.log, SF = Math.LN2;
function xF(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (wF(e) / SF | 0) | 0;
}
function EF(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var CF = typeof Object.is == "function" ? Object.is : EF, Wn = null, Iv = null, dc = null, Le = null, Fs = !1, ff = !1, Ol = 0, yi = null, fd = 0;
function Gi() {
  if (Wn === null) throw Error(ve(321));
  return Wn;
}
function uS() {
  if (0 < fd) throw Error(ve(312));
  return { memoizedState: null, queue: null, next: null };
}
function jv() {
  return Le === null ? dc === null ? (Fs = !1, dc = Le = uS()) : (Fs = !0, Le = dc) : Le.next === null ? (Fs = !1, Le = Le.next = uS()) : (Fs = !0, Le = Le.next), Le;
}
function zv() {
  Iv = Wn = null, ff = !1, dc = null, fd = 0, Le = yi = null;
}
function db(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cS(e, t, r) {
  if (Wn = Gi(), Le = jv(), Fs) {
    var n = Le.queue;
    if (t = n.dispatch, yi !== null && (r = yi.get(n), r !== void 0)) {
      yi.delete(n), n = Le.memoizedState;
      do
        n = e(n, r.action), r = r.next;
      while (r !== null);
      return Le.memoizedState = n, [n, t];
    }
    return [Le.memoizedState, t];
  }
  return e = e === db ? typeof t == "function" ? t() : t : r !== void 0 ? r(t) : t, Le.memoizedState = e, e = Le.queue = { last: null, dispatch: null }, e = e.dispatch = kF.bind(null, Wn, e), [Le.memoizedState, e];
}
function fS(e, t) {
  if (Wn = Gi(), Le = jv(), t = t === void 0 ? null : t, Le !== null) {
    var r = Le.memoizedState;
    if (r !== null && t !== null) {
      var n = r[1];
      e: if (n === null) n = !1;
      else {
        for (var i = 0; i < n.length && i < t.length; i++) if (!CF(t[i], n[i])) {
          n = !1;
          break e;
        }
        n = !0;
      }
      if (n) return r[0];
    }
  }
  return e = e(), Le.memoizedState = [e, t], e;
}
function kF(e, t, r) {
  if (25 <= fd) throw Error(ve(301));
  if (e === Wn) if (ff = !0, e = { action: r, next: null }, yi === null && (yi = /* @__PURE__ */ new Map()), r = yi.get(t), r === void 0) yi.set(t, e);
  else {
    for (t = r; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function bF() {
  throw Error(ve(394));
}
function ku() {
}
var dS = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return Gi(), e._currentValue;
}, useMemo: fS, useReducer: cS, useRef: function(e) {
  Wn = Gi(), Le = jv();
  var t = Le.memoizedState;
  return t === null ? (e = { current: e }, Le.memoizedState = e) : t;
}, useState: function(e) {
  return cS(db, e);
}, useInsertionEffect: ku, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return fS(function() {
    return e;
  }, t);
}, useImperativeHandle: ku, useEffect: ku, useDebugValue: ku, useDeferredValue: function(e) {
  return Gi(), e;
}, useTransition: function() {
  return Gi(), [!1, bF];
}, useId: function() {
  var e = Iv.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - fc(e) - 1)).toString(32) + t;
  var r = pc;
  if (r === null) throw Error(ve(404));
  return t = Ol++, e = ":" + r.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return Gi(), t(e._source);
}, useSyncExternalStore: function(e, t, r) {
  if (r === void 0) throw Error(ve(407));
  return r();
} }, pc = null, Sp = qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function _F(e) {
  return console.error(e), null;
}
function Ms() {
}
function $F(e, t, r, n, i, o, a, s, l) {
  var u = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: n === void 0 ? 12800 : n, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: u, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: i === void 0 ? _F : i, onAllReady: o === void 0 ? Ms : o, onShellReady: a === void 0 ? Ms : a, onShellError: s === void 0 ? Ms : s, onFatalError: l === void 0 ? Ms : l }, r = df(t, 0, null, r, !1, !1), r.parentFlushed = !0, e = Uv(t, e, null, r, c, sb, null, gF), u.push(e), t;
}
function Uv(e, t, r, n, i, o, a, s) {
  e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
  var l = { node: t, ping: function() {
    var u = e.pingedTasks;
    u.push(l), u.length === 1 && yb(e);
  }, blockedBoundary: r, blockedSegment: n, abortSet: i, legacyContext: o, context: a, treeContext: s };
  return i.add(l), l;
}
function df(e, t, r, n, i, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: n, boundary: r, lastPushedText: i, textEmbedded: o };
}
function Rl(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function pf(e, t) {
  var r = e.onShellError;
  r(t), r = e.onFatalError, r(t), e.destination !== null ? (e.status = 2, Kk(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function pS(e, t, r, n, i) {
  for (Wn = {}, Iv = t, Ol = 0, e = r(n, i); ff; ) ff = !1, Ol = 0, fd += 1, Le = null, e = r(n, i);
  return zv(), e;
}
function hS(e, t, r, n) {
  var i = r.render(), o = n.childContextTypes;
  if (o != null) {
    var a = t.legacyContext;
    if (typeof r.getChildContext != "function") n = a;
    else {
      r = r.getChildContext();
      for (var s in r) if (!(s in o)) throw Error(ve(108, Cy(n) || "Unknown", s));
      n = Js({}, a, r);
    }
    t.legacyContext = n, yr(e, t, i), t.legacyContext = a;
  } else yr(e, t, i);
}
function yS(e, t) {
  if (e && e.defaultProps) {
    t = Js({}, t), e = e.defaultProps;
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function by(e, t, r, n, i) {
  if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
    i = aS(r, t.legacyContext);
    var o = r.contextType;
    o = new r(n, typeof o == "object" && o !== null ? o._currentValue : i), lS(o, r, n, i), hS(e, t, o, r);
  } else {
    o = aS(r, t.legacyContext), i = pS(e, t, r, n, o);
    var a = Ol !== 0;
    if (typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) lS(i, r, n, o), hS(e, t, i, r);
    else if (a) {
      n = t.treeContext, t.treeContext = ky(n, 1, 0);
      try {
        yr(e, t, i);
      } finally {
        t.treeContext = n;
      }
    } else yr(e, t, i);
  }
  else if (typeof r == "string") {
    switch (i = t.blockedSegment, o = vA(i.chunks, r, n, e.responseState, i.formatContext), i.lastPushedText = !1, a = i.formatContext, i.formatContext = fA(a, r, n), _y(e, t, o), i.formatContext = a, r) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        i.chunks.push(gA, we(r), wA);
    }
    i.lastPushedText = !1;
  } else {
    switch (r) {
      case mF:
      case yF:
      case Zk:
      case eb:
      case Jk:
        yr(e, t, n.children);
        return;
      case ob:
        yr(e, t, n.children);
        return;
      case hF:
        throw Error(ve(343));
      case ib:
        e: {
          r = t.blockedBoundary, i = t.blockedSegment, o = n.fallback, n = n.children, a = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: a, errorDigest: null }, l = df(e, i.chunks.length, s, i.formatContext, !1, !1);
          i.children.push(l), i.lastPushedText = !1;
          var u = df(e, 0, null, i.formatContext, !1, !1);
          u.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = u;
          try {
            if (_y(
              e,
              t,
              n
            ), u.lastPushedText && u.textEmbedded && u.chunks.push(Nv), u.status = 1, hf(s, u), s.pendingTasks === 0) break e;
          } catch (c) {
            u.status = 4, s.forceClientRender = !0, s.errorDigest = Rl(e, c);
          } finally {
            t.blockedBoundary = r, t.blockedSegment = i;
          }
          t = Uv(e, o, r, l, a, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof r == "object" && r !== null) switch (r.$$typeof) {
      case nb:
        if (n = pS(e, t, r.render, n, i), Ol !== 0) {
          r = t.treeContext, t.treeContext = ky(r, 1, 0);
          try {
            yr(e, t, n);
          } finally {
            t.treeContext = r;
          }
        } else yr(e, t, n);
        return;
      case ab:
        r = r.type, n = yS(r, n), by(e, t, r, n, i);
        return;
      case tb:
        if (i = n.children, r = r._context, n = n.value, o = r._currentValue, r._currentValue = n, a = oo, oo = n = { parent: a, depth: a === null ? 0 : a.depth + 1, context: r, parentValue: o, value: n }, t.context = n, yr(e, t, i), e = oo, e === null) throw Error(ve(403));
        n = e.parentValue, e.context._currentValue = n === vF ? e.context._defaultValue : n, e = oo = e.parent, t.context = e;
        return;
      case rb:
        n = n.children, n = n(r._currentValue), yr(e, t, n);
        return;
      case Lv:
        i = r._init, r = i(r._payload), n = yS(r, n), by(e, t, r, n, void 0);
        return;
    }
    throw Error(ve(
      130,
      r == null ? r : typeof r,
      ""
    ));
  }
}
function yr(e, t, r) {
  if (t.node = r, typeof r == "object" && r !== null) {
    switch (r.$$typeof) {
      case pF:
        by(e, t, r.type, r.props, r.ref);
        return;
      case Xk:
        throw Error(ve(257));
      case Lv:
        var n = r._init;
        r = n(r._payload), yr(e, t, r);
        return;
    }
    if (Ey(r)) {
      mS(e, t, r);
      return;
    }
    if (r === null || typeof r != "object" ? n = null : (n = oS && r[oS] || r["@@iterator"], n = typeof n == "function" ? n : null), n && (n = n.call(r))) {
      if (r = n.next(), !r.done) {
        var i = [];
        do
          i.push(r.value), r = n.next();
        while (!r.done);
        mS(e, t, i);
      }
      return;
    }
    throw e = Object.prototype.toString.call(r), Error(ve(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e));
  }
  typeof r == "string" ? (n = t.blockedSegment, n.lastPushedText = Jw(t.blockedSegment.chunks, r, e.responseState, n.lastPushedText)) : typeof r == "number" && (n = t.blockedSegment, n.lastPushedText = Jw(t.blockedSegment.chunks, "" + r, e.responseState, n.lastPushedText));
}
function mS(e, t, r) {
  for (var n = r.length, i = 0; i < n; i++) {
    var o = t.treeContext;
    t.treeContext = ky(o, n, i);
    try {
      _y(e, t, r[i]);
    } finally {
      t.treeContext = o;
    }
  }
}
function _y(e, t, r) {
  var n = t.blockedSegment.formatContext, i = t.legacyContext, o = t.context;
  try {
    return yr(e, t, r);
  } catch (l) {
    if (zv(), typeof l == "object" && l !== null && typeof l.then == "function") {
      r = l;
      var a = t.blockedSegment, s = df(e, a.chunks.length, null, a.formatContext, a.lastPushedText, !0);
      a.children.push(s), a.lastPushedText = !1, e = Uv(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, r.then(e, e), t.blockedSegment.formatContext = n, t.legacyContext = i, t.context = o, cf(o);
    } else throw t.blockedSegment.formatContext = n, t.legacyContext = i, t.context = o, cf(o), l;
  }
}
function OF(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, hb(this, t, e);
}
function pb(e, t, r) {
  var n = e.blockedBoundary;
  e.blockedSegment.status = 3, n === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, e = r === void 0 ? Error(ve(432)) : r, n.errorDigest = t.onError(e), n.parentFlushed && t.clientRenderedBoundaries.push(n)), n.fallbackAbortableTasks.forEach(function(i) {
    return pb(i, t, r);
  }), n.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (n = t.onAllReady, n()));
}
function hf(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var r = t.children[0];
    r.id = t.id, r.parentFlushed = !0, r.status === 1 && hf(e, r);
  } else e.completedSegments.push(t);
}
function hb(e, t, r) {
  if (t === null) {
    if (r.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(ve(389));
      e.completedRootSegment = r;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Ms, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (r.parentFlushed && r.status === 1 && hf(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(OF, e), t.fallbackAbortableTasks.clear()) : r.parentFlushed && r.status === 1 && (hf(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function yb(e) {
  if (e.status !== 2) {
    var t = oo, r = Sp.current;
    Sp.current = dS;
    var n = pc;
    pc = e.responseState;
    try {
      var i = e.pingedTasks, o;
      for (o = 0; o < i.length; o++) {
        var a = i[o], s = e, l = a.blockedSegment;
        if (l.status === 0) {
          cf(a.context);
          try {
            yr(s, a, a.node), l.lastPushedText && l.textEmbedded && l.chunks.push(Nv), a.abortSet.delete(a), l.status = 1, hb(s, a.blockedBoundary, l);
          } catch (h) {
            if (zv(), typeof h == "object" && h !== null && typeof h.then == "function") {
              var u = a.ping;
              h.then(u, u);
            } else {
              a.abortSet.delete(a), l.status = 4;
              var c = a.blockedBoundary, f = h, d = Rl(s, f);
              if (c === null ? pf(s, f) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = d, c.parentFlushed && s.clientRenderedBoundaries.push(c))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var w = s.onAllReady;
                w();
              }
            }
          } finally {
          }
        }
      }
      i.splice(0, o), e.destination !== null && Vv(e, e.destination);
    } catch (h) {
      Rl(e, h), pf(e, h);
    } finally {
      pc = n, Sp.current = r, r === dS && cf(t);
    }
  }
}
function bu(e, t, r) {
  switch (r.parentFlushed = !0, r.status) {
    case 0:
      var n = r.id = e.nextSegmentId++;
      return r.lastPushedText = !1, r.textEmbedded = !1, e = e.responseState, oe(t, SA), oe(t, e.placeholderPrefix), e = we(n.toString(16)), oe(t, e), Be(t, xA);
    case 1:
      r.status = 2;
      var i = !0;
      n = r.chunks;
      var o = 0;
      r = r.children;
      for (var a = 0; a < r.length; a++) {
        for (i = r[a]; o < i.index; o++) oe(t, n[o]);
        i = dd(e, t, i);
      }
      for (; o < n.length - 1; o++) oe(t, n[o]);
      return o < n.length && (i = Be(t, n[o])), i;
    default:
      throw Error(ve(390));
  }
}
function dd(e, t, r) {
  var n = r.boundary;
  if (n === null) return bu(e, t, r);
  if (n.parentFlushed = !0, n.forceClientRender) n = n.errorDigest, Be(t, bA), oe(t, $A), n && (oe(t, RA), oe(t, we(Ct(n))), oe(t, OA)), Be(t, PA), bu(e, t, r);
  else if (0 < n.pendingTasks) {
    n.rootSegmentID = e.nextSegmentId++, 0 < n.completedSegments.length && e.partialBoundaries.push(n);
    var i = e.responseState, o = i.nextSuspenseID++;
    i = Z(i.boundaryPrefix + o.toString(16)), n = n.id = i, iS(t, e.responseState, n), bu(e, t, r);
  } else if (n.byteSize > e.progressiveChunkSize) n.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(n), iS(t, e.responseState, n.id), bu(e, t, r);
  else {
    if (Be(t, EA), r = n.completedSegments, r.length !== 1) throw Error(ve(391));
    dd(e, t, r[0]);
  }
  return Be(t, _A);
}
function vS(e, t, r) {
  return JA(t, e.responseState, r.formatContext, r.id), dd(e, t, r), ZA(t, r.formatContext);
}
function gS(e, t, r) {
  for (var n = r.completedSegments, i = 0; i < n.length; i++) mb(e, t, r, n[i]);
  if (n.length = 0, e = e.responseState, n = r.id, r = r.rootSegmentID, oe(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? oe(t, oF) : (e.sentCompleteBoundaryFunction = !0, oe(t, iF)), n === null) throw Error(ve(395));
  return r = we(r.toString(16)), oe(t, n), oe(t, aF), oe(t, e.segmentPrefix), oe(t, r), Be(t, sF);
}
function mb(e, t, r, n) {
  if (n.status === 2) return !0;
  var i = n.id;
  if (i === -1) {
    if ((n.id = r.rootSegmentID) === -1) throw Error(ve(392));
    return vS(e, t, n);
  }
  return vS(e, t, n), e = e.responseState, oe(t, e.startInlineScript), e.sentCompleteSegmentFunction ? oe(t, tF) : (e.sentCompleteSegmentFunction = !0, oe(t, eF)), oe(t, e.segmentPrefix), i = we(i.toString(16)), oe(t, i), oe(t, rF), oe(t, e.placeholderPrefix), oe(t, i), Be(t, nF);
}
function Vv(e, t) {
  pr = new Uint8Array(512), hr = 0;
  try {
    var r = e.completedRootSegment;
    if (r !== null && e.pendingRootTasks === 0) {
      dd(e, t, r), e.completedRootSegment = null;
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) oe(t, n[r]);
      r < n.length && Be(t, n[r]);
    }
    var i = e.clientRenderedBoundaries, o;
    for (o = 0; o < i.length; o++) {
      var a = i[o];
      n = t;
      var s = e.responseState, l = a.id, u = a.errorDigest, c = a.errorMessage, f = a.errorComponentStack;
      if (oe(n, s.startInlineScript), s.sentClientRenderFunction ? oe(n, uF) : (s.sentClientRenderFunction = !0, oe(
        n,
        lF
      )), l === null) throw Error(ve(395));
      oe(n, l), oe(n, cF), (u || c || f) && (oe(n, gp), oe(n, we(wp(u || "")))), (c || f) && (oe(n, gp), oe(n, we(wp(c || "")))), f && (oe(n, gp), oe(n, we(wp(f)))), Be(n, fF);
    }
    i.splice(0, o);
    var d = e.completedBoundaries;
    for (o = 0; o < d.length; o++) gS(e, t, d[o]);
    d.splice(0, o), Kw(t), pr = new Uint8Array(512), hr = 0;
    var w = e.partialBoundaries;
    for (o = 0; o < w.length; o++) {
      var h = w[o];
      e: {
        i = e, a = t;
        var y = h.completedSegments;
        for (s = 0; s < y.length; s++) if (!mb(
          i,
          a,
          h,
          y[s]
        )) {
          s++, y.splice(0, s);
          var m = !1;
          break e;
        }
        y.splice(0, s), m = !0;
      }
      if (!m) {
        e.destination = null, o++, w.splice(0, o);
        return;
      }
    }
    w.splice(0, o);
    var v = e.completedBoundaries;
    for (o = 0; o < v.length; o++) gS(e, t, v[o]);
    v.splice(0, o);
  } finally {
    Kw(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function wS(e, t) {
  try {
    var r = e.abortableTasks;
    r.forEach(function(n) {
      return pb(n, e, t);
    }), r.clear(), e.destination !== null && Vv(e, e.destination);
  } catch (n) {
    Rl(e, n), pf(e, n);
  }
}
Av.renderToReadableStream = function(e, t) {
  return new Promise(function(r, n) {
    var i, o, a = new Promise(function(c, f) {
      o = c, i = f;
    }), s = $F(e, uA(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), cA(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, o, function() {
      var c = new ReadableStream({ type: "bytes", pull: function(f) {
        if (s.status === 1) s.status = 2, Kk(f, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = f;
          try {
            Vv(s, f);
          } catch (d) {
            Rl(s, d), pf(s, d);
          }
        }
      }, cancel: function() {
        wS(s);
      } }, { highWaterMark: 0 });
      c.allReady = a, r(c);
    }, function(c) {
      a.catch(function() {
      }), n(c);
    }, i);
    if (t && t.signal) {
      var l = t.signal, u = function() {
        wS(s, l.reason), l.removeEventListener("abort", u);
      };
      l.addEventListener("abort", u);
    }
    yb(s);
  });
};
Av.version = "18.3.1";
var Ya, vb;
Ya = Ga, vb = Av;
Ya.version;
var RF = Ya.renderToString;
Ya.renderToStaticMarkup;
Ya.renderToNodeStream;
Ya.renderToStaticNodeStream;
vb.renderToReadableStream;
function gb(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = gb(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function To() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = gb(e)) && (n && (n += " "), n += t);
  return n;
}
let PF = { data: "" }, TF = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || PF, DF = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, AF = /\/\*[^]*?\*\/|  +/g, SS = /\n+/g, Yi = (e, t) => {
  let r = "", n = "", i = "";
  for (let o in e) {
    let a = e[o];
    o[0] == "@" ? o[1] == "i" ? r = o + " " + a + ";" : n += o[1] == "f" ? Yi(a, o) : o + "{" + Yi(a, o[1] == "k" ? "" : t) + "}" : typeof a == "object" ? n += Yi(a, t ? t.replace(/([^,])+/g, (s) => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) => /&/.test(l) ? l.replace(/&/g, s) : s ? s + " " + l : l)) : o) : a != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += Yi.p ? Yi.p(o, a) : o + ":" + a + ";");
  }
  return r + (t && i ? t + "{" + i + "}" : i) + n;
}, Rn = {}, wb = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + wb(e[r]);
    return t;
  }
  return e;
}, FF = (e, t, r, n, i) => {
  let o = wb(e), a = Rn[o] || (Rn[o] = ((l) => {
    let u = 0, c = 11;
    for (; u < l.length; ) c = 101 * c + l.charCodeAt(u++) >>> 0;
    return "go" + c;
  })(o));
  if (!Rn[a]) {
    let l = o !== e ? e : ((u) => {
      let c, f, d = [{}];
      for (; c = DF.exec(u.replace(AF, "")); ) c[4] ? d.shift() : c[3] ? (f = c[3].replace(SS, " ").trim(), d.unshift(d[0][f] = d[0][f] || {})) : d[0][c[1]] = c[2].replace(SS, " ").trim();
      return d[0];
    })(e);
    Rn[a] = Yi(i ? { ["@keyframes " + a]: l } : l, r ? "" : "." + a);
  }
  let s = r && Rn.g ? Rn.g : null;
  return r && (Rn.g = Rn[a]), ((l, u, c, f) => {
    f ? u.data = u.data.replace(f, l) : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
  })(Rn[a], t, n, s), a;
}, MF = (e, t, r) => e.reduce((n, i, o) => {
  let a = t[o];
  if (a && a.call) {
    let s = a(r), l = s && s.props && s.props.className || /^go/.test(s) && s;
    a = l ? "." + l : s && typeof s == "object" ? s.props ? "" : Yi(s, "") : s === !1 ? "" : s;
  }
  return n + i + (a ?? "");
}, "");
function Bv(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return FF(r.unshift ? r.raw ? MF(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, i) => Object.assign(n, i && i.call ? i(t.p) : i), {}) : r, TF(t.target), t.g, t.o, t.k);
}
Bv.bind({ g: 1 });
Bv.bind({ k: 1 });
function NF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Sb(e, t, r) {
  return t && NF(e.prototype, t), e;
}
function Fe() {
  return Fe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fe.apply(this, arguments);
}
function xb(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Bl(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var xS = function() {
  return "";
}, LF = /* @__PURE__ */ V.createContext({
  enqueueSnackbar: xS,
  closeSnackbar: xS
}), Hi = {
  downXs: "@media (max-width:599.95px)",
  upSm: "@media (min-width:600px)"
}, ES = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Hv = function(t) {
  return "" + ES(t.vertical) + ES(t.horizontal);
}, _u = function(t) {
  return !!t || t === 0;
}, $u = "unmounted", qo = "exited", Qo = "entering", ws = "entered", CS = "exiting", Wv = /* @__PURE__ */ function(e) {
  xb(t, e);
  function t(n) {
    var i;
    i = e.call(this, n) || this;
    var o = n.appear, a;
    return i.appearStatus = null, n.in ? o ? (a = qo, i.appearStatus = Qo) : a = ws : n.unmountOnExit || n.mountOnEnter ? a = $u : a = qo, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === $u ? {
      status: qo
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Qo && a !== ws && (o = Qo) : (a === Qo || a === ws) && (o = CS);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o = i, a = i;
    return i != null && typeof i != "number" && typeof i != "string" && (a = i.exit, o = i.enter), {
      exit: a,
      enter: o
    };
  }, r.updateStatus = function(i, o) {
    i === void 0 && (i = !1), o !== null ? (this.cancelNextCallback(), o === Qo ? this.performEnter(i) : this.performExit()) : this.props.unmountOnExit && this.state.status === qo && this.setState({
      status: $u
    });
  }, r.performEnter = function(i) {
    var o = this, a = this.props.enter, s = i, l = this.getTimeouts();
    if (!i && !a) {
      this.safeSetState({
        status: ws
      }, function() {
        o.props.onEntered && o.props.onEntered(o.node, s);
      });
      return;
    }
    this.props.onEnter && this.props.onEnter(this.node, s), this.safeSetState({
      status: Qo
    }, function() {
      o.props.onEntering && o.props.onEntering(o.node, s), o.onTransitionEnd(l.enter, function() {
        o.safeSetState({
          status: ws
        }, function() {
          o.props.onEntered && o.props.onEntered(o.node, s);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts();
    if (!o) {
      this.safeSetState({
        status: qo
      }, function() {
        i.props.onExited && i.props.onExited(i.node);
      });
      return;
    }
    this.props.onExit && this.props.onExit(this.node), this.safeSetState({
      status: CS
    }, function() {
      i.props.onExiting && i.props.onExiting(i.node), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: qo
        }, function() {
          i.props.onExited && i.props.onExited(i.node);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && this.nextCallback.cancel && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function() {
      a && (a = !1, o.nextCallback = null, i());
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = i == null && !this.props.addEndListener;
    if (!this.node || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    this.props.addEndListener && this.props.addEndListener(this.node, this.nextCallback), i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === $u)
      return null;
    var o = this.props, a = o.children, s = Bl(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return a(i, s);
  }, Sb(t, [{
    key: "node",
    get: function() {
      var i, o = (i = this.props.nodeRef) === null || i === void 0 ? void 0 : i.current;
      if (!o)
        throw new Error("notistack - Custom snackbar is not refForwarding");
      return o;
    }
  }]), t;
}(V.Component);
function Ko() {
}
Wv.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ko,
  onEntering: Ko,
  onEntered: Ko,
  onExit: Ko,
  onExiting: Ko,
  onExited: Ko
};
function kS(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function $y(e, t) {
  return Q.useMemo(function() {
    return e == null && t == null ? null : function(r) {
      kS(e, r), kS(t, r);
    };
  }, [e, t]);
}
function yf(e) {
  var t = e.timeout, r = e.style, n = r === void 0 ? {} : r, i = e.mode;
  return {
    duration: typeof t == "object" ? t[i] || 0 : t,
    easing: n.transitionTimingFunction,
    delay: n.transitionDelay
  };
}
var Oy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Eb = function(t) {
  t.scrollTop = t.scrollTop;
}, bS = function(t) {
  return Math.round(t) + "ms";
};
function ma(e, t) {
  e === void 0 && (e = ["all"]);
  var r = t || {}, n = r.duration, i = n === void 0 ? 300 : n, o = r.easing, a = o === void 0 ? Oy.easeInOut : o, s = r.delay, l = s === void 0 ? 0 : s, u = Array.isArray(e) ? e : [e];
  return u.map(function(c) {
    var f = typeof i == "string" ? i : bS(i), d = typeof l == "string" ? l : bS(l);
    return c + " " + f + " " + a + " " + d;
  }).join(",");
}
function IF(e) {
  return e && e.ownerDocument || document;
}
function Cb(e) {
  var t = IF(e);
  return t.defaultView || window;
}
function jF(e, t) {
  t === void 0 && (t = 166);
  var r;
  function n() {
    for (var i = this, o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    var l = function() {
      e.apply(i, a);
    };
    clearTimeout(r), r = setTimeout(l, t);
  }
  return n.clear = function() {
    clearTimeout(r);
  }, n;
}
function zF(e, t) {
  var r = t.getBoundingClientRect(), n = Cb(t), i;
  if (t.fakeTransform)
    i = t.fakeTransform;
  else {
    var o = n.getComputedStyle(t);
    i = o.getPropertyValue("-webkit-transform") || o.getPropertyValue("transform");
  }
  var a = 0, s = 0;
  if (i && i !== "none" && typeof i == "string") {
    var l = i.split("(")[1].split(")")[0].split(",");
    a = parseInt(l[4], 10), s = parseInt(l[5], 10);
  }
  switch (e) {
    case "left":
      return "translateX(" + (n.innerWidth + a - r.left) + "px)";
    case "right":
      return "translateX(-" + (r.left + r.width - a) + "px)";
    case "up":
      return "translateY(" + (n.innerHeight + s - r.top) + "px)";
    default:
      return "translateY(-" + (r.top + r.height - s) + "px)";
  }
}
function Ou(e, t) {
  if (t) {
    var r = zF(e, t);
    r && (t.style.webkitTransform = r, t.style.transform = r);
  }
}
var kb = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r = e.children, n = e.direction, i = n === void 0 ? "down" : n, o = e.in, a = e.style, s = e.timeout, l = s === void 0 ? 0 : s, u = e.onEnter, c = e.onEntered, f = e.onExit, d = e.onExited, w = Bl(e, ["children", "direction", "in", "style", "timeout", "onEnter", "onEntered", "onExit", "onExited"]), h = Q.useRef(null), y = $y(r.ref, h), m = $y(y, t), v = function(S, b) {
    Ou(i, S), Eb(S), u && u(S, b);
  }, p = function(S) {
    var b = a?.transitionTimingFunction || Oy.easeOut, $ = yf({
      timeout: l,
      mode: "enter",
      style: Fe({}, a, {
        transitionTimingFunction: b
      })
    });
    S.style.webkitTransition = ma("-webkit-transform", $), S.style.transition = ma("transform", $), S.style.webkitTransform = "none", S.style.transform = "none";
  }, g = function(S) {
    var b = a?.transitionTimingFunction || Oy.sharp, $ = yf({
      timeout: l,
      mode: "exit",
      style: Fe({}, a, {
        transitionTimingFunction: b
      })
    });
    S.style.webkitTransition = ma("-webkit-transform", $), S.style.transition = ma("transform", $), Ou(i, S), f && f(S);
  }, x = function(S) {
    S.style.webkitTransition = "", S.style.transition = "", d && d(S);
  }, E = Q.useCallback(function() {
    h.current && Ou(i, h.current);
  }, [i]);
  return Q.useEffect(function() {
    if (!(o || i === "down" || i === "right")) {
      var C = jF(function() {
        h.current && Ou(i, h.current);
      }), S = Cb(h.current);
      return S.addEventListener("resize", C), function() {
        C.clear(), S.removeEventListener("resize", C);
      };
    }
  }, [i, o]), Q.useEffect(function() {
    o || E();
  }, [o, E]), Q.createElement(Wv, Object.assign({
    appear: !0,
    nodeRef: h,
    onEnter: v,
    onEntered: c,
    onEntering: p,
    onExit: g,
    onExited: x,
    in: o,
    timeout: l
  }, w), function(C, S) {
    return Q.cloneElement(r, Fe({
      ref: m,
      style: Fe({
        visibility: C === "exited" && !o ? "hidden" : void 0
      }, a, {}, r.props.style)
    }, S));
  });
});
kb.displayName = "Slide";
var pd = function(t) {
  return V.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    focusable: "false",
    style: {
      fontSize: 20,
      marginInlineEnd: 8,
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0
    }
  }, t));
}, UF = function() {
  return V.createElement(pd, null, V.createElement("path", {
    d: `M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`
  }));
}, VF = function() {
  return V.createElement(pd, null, V.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
}, BF = function() {
  return V.createElement(pd, null, V.createElement("path", {
    d: `M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`
  }));
}, HF = function() {
  return V.createElement(pd, null, V.createElement("path", {
    d: `M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`
  }));
}, WF = {
  default: void 0,
  success: /* @__PURE__ */ V.createElement(UF, null),
  warning: /* @__PURE__ */ V.createElement(VF, null),
  error: /* @__PURE__ */ V.createElement(BF, null),
  info: /* @__PURE__ */ V.createElement(HF, null)
}, po = {
  maxSnack: 3,
  persist: !1,
  hideIconVariant: !1,
  disableWindowBlurListener: !1,
  variant: "default",
  autoHideDuration: 5e3,
  iconVariant: WF,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  TransitionComponent: kb,
  transitionDuration: {
    enter: 225,
    exit: 195
  }
}, qF = function(t, r) {
  var n = function(o) {
    return typeof o == "number" || o === null;
  };
  return n(t) ? t : n(r) ? r : po.autoHideDuration;
}, QF = function(t, r) {
  var n = function(o, a) {
    return a.some(function(s) {
      return typeof o === s;
    });
  };
  return n(t, ["string", "number"]) ? t : n(t, ["object"]) ? Fe({}, po.transitionDuration, {}, n(r, ["object"]) && r, {}, t) : n(r, ["string", "number"]) ? r : n(r, ["object"]) ? Fe({}, po.transitionDuration, {}, r) : po.transitionDuration;
}, KF = function(t, r) {
  return function(n, i) {
    return i === void 0 && (i = !1), i ? Fe({}, po[n], {}, r[n], {}, t[n]) : n === "autoHideDuration" ? qF(t.autoHideDuration, r.autoHideDuration) : n === "transitionDuration" ? QF(t.transitionDuration, r.transitionDuration) : t[n] || r[n] || po[n];
  };
};
function Hl(e) {
  return Object.entries(e).reduce(function(t, r) {
    var n, i = r[0], o = r[1];
    return Fe({}, t, (n = {}, n[i] = Bv(o), n));
  }, {});
}
var Wl = {
  SnackbarContainer: "notistack-SnackbarContainer",
  Snackbar: "notistack-Snackbar",
  CollapseWrapper: "notistack-CollapseWrapper",
  MuiContent: "notistack-MuiContent"
}, _S = /* @__PURE__ */ Hl({
  root: {
    height: 0
  },
  entered: {
    height: "auto"
  }
}), xp = "0px", Ep = 175, bb = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r = e.children, n = e.in, i = e.onExited, o = Q.useRef(null), a = Q.useRef(null), s = $y(t, a), l = function() {
    return o.current ? o.current.clientHeight : 0;
  }, u = function(y) {
    y.style.height = xp;
  }, c = function(y) {
    var m = l(), v = yf({
      timeout: Ep,
      mode: "enter"
    }), p = v.duration, g = v.easing;
    y.style.transitionDuration = typeof p == "string" ? p : p + "ms", y.style.height = m + "px", y.style.transitionTimingFunction = g || "";
  }, f = function(y) {
    y.style.height = "auto";
  }, d = function(y) {
    y.style.height = l() + "px";
  }, w = function(y) {
    Eb(y);
    var m = yf({
      timeout: Ep,
      mode: "exit"
    }), v = m.duration, p = m.easing;
    y.style.transitionDuration = typeof v == "string" ? v : v + "ms", y.style.height = xp, y.style.transitionTimingFunction = p || "";
  };
  return Q.createElement(Wv, {
    in: n,
    unmountOnExit: !0,
    onEnter: u,
    onEntered: f,
    onEntering: c,
    onExit: d,
    onExited: i,
    onExiting: w,
    nodeRef: a,
    timeout: Ep
  }, function(h, y) {
    return Q.createElement("div", Object.assign({
      ref: s,
      className: To(_S.root, h === "entered" && _S.entered),
      style: Fe({
        pointerEvents: "all",
        overflow: "hidden",
        minHeight: xp,
        transition: ma("height")
      }, h === "entered" && {
        overflow: "visible"
      }, {}, h === "exited" && !n && {
        visibility: "hidden"
      })
    }, y), Q.createElement("div", {
      ref: o,
      className: Wl.CollapseWrapper,
      // Hack to get children with a negative margin to not falsify the height computation.
      style: {
        display: "flex",
        width: "100%"
      }
    }, r));
  });
});
bb.displayName = "Collapse";
var $S = {
  right: "left",
  left: "right",
  bottom: "up",
  top: "down"
}, GF = function(t) {
  return t.horizontal !== "center" ? $S[t.horizontal] : $S[t.vertical];
}, YF = function(t) {
  return "anchorOrigin" + Hv(t);
}, XF = function(t) {
  t === void 0 && (t = {});
  var r = {
    containerRoot: !0,
    containerAnchorOriginTopCenter: !0,
    containerAnchorOriginBottomCenter: !0,
    containerAnchorOriginTopRight: !0,
    containerAnchorOriginBottomRight: !0,
    containerAnchorOriginTopLeft: !0,
    containerAnchorOriginBottomLeft: !0
  };
  return Object.keys(t).filter(function(n) {
    return !r[n];
  }).reduce(function(n, i) {
    var o;
    return Fe({}, n, (o = {}, o[i] = t[i], o));
  }, {});
}, JF = function() {
};
function Zs(e, t) {
  return e.reduce(function(r, n) {
    return n == null ? r : function() {
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      var l = [].concat(a);
      t && l.indexOf(t) === -1 && l.push(t), r.apply(this, l), n.apply(this, l);
    };
  }, JF);
}
var ZF = typeof window < "u" ? Q.useLayoutEffect : Q.useEffect;
function OS(e) {
  var t = Q.useRef(e);
  return ZF(function() {
    t.current = e;
  }), Q.useCallback(function() {
    return (
      // @ts-expect-error hide `this`
      t.current.apply(void 0, arguments)
    );
  }, []);
}
var _b = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = e.autoHideDuration, o = e.disableWindowBlurListener, a = o === void 0 ? !1 : o, s = e.onClose, l = e.id, u = e.open, c = e.SnackbarProps, f = c === void 0 ? {} : c, d = Q.useRef(), w = OS(function() {
    s && s.apply(void 0, arguments);
  }), h = OS(function(g) {
    !s || g == null || (d.current && clearTimeout(d.current), d.current = setTimeout(function() {
      w(null, "timeout", l);
    }, g));
  });
  Q.useEffect(function() {
    return u && h(i), function() {
      d.current && clearTimeout(d.current);
    };
  }, [u, i, h]);
  var y = function() {
    d.current && clearTimeout(d.current);
  }, m = Q.useCallback(function() {
    i != null && h(i * 0.5);
  }, [i, h]), v = function(x) {
    f.onMouseEnter && f.onMouseEnter(x), y();
  }, p = function(x) {
    f.onMouseLeave && f.onMouseLeave(x), m();
  };
  return Q.useEffect(function() {
    if (!a && u)
      return window.addEventListener("focus", m), window.addEventListener("blur", y), function() {
        window.removeEventListener("focus", m), window.removeEventListener("blur", y);
      };
  }, [a, m, u]), Q.createElement("div", Object.assign({
    ref: t
  }, f, {
    className: To(Wl.Snackbar, n),
    onMouseEnter: v,
    onMouseLeave: p
  }), r);
});
_b.displayName = "Snackbar";
var Cp, eM = /* @__PURE__ */ Hl({
  root: (Cp = {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  }, Cp[Hi.upSm] = {
    flexGrow: "initial",
    minWidth: "288px"
  }, Cp)
}), $b = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r = e.className, n = Bl(e, ["className"]);
  return V.createElement("div", Object.assign({
    ref: t,
    className: To(eM.root, r)
  }, n));
});
$b.displayName = "SnackbarContent";
var Ss = /* @__PURE__ */ Hl({
  root: {
    backgroundColor: "#313131",
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
    color: "#fff",
    alignItems: "center",
    padding: "6px 16px",
    borderRadius: "4px",
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
  },
  lessPadding: {
    paddingLeft: 8 * 2.5 + "px"
  },
  default: {
    backgroundColor: "#313131"
  },
  success: {
    backgroundColor: "#43a047"
  },
  error: {
    backgroundColor: "#d32f2f"
  },
  warning: {
    backgroundColor: "#ff9800"
  },
  info: {
    backgroundColor: "#2196f3"
  },
  message: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0"
  },
  action: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: "16px",
    marginRight: "-8px"
  }
}), Ob = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var r = e.id, n = e.message, i = e.action, o = e.iconVariant, a = e.variant, s = e.hideIconVariant, l = e.style, u = o[a], c = i;
  return typeof c == "function" && (c = c(r)), V.createElement($b, {
    ref: t,
    role: "alert",
    style: l,
    className: To(Wl.MuiContent, Ss.root, Ss[a], !s && u && Ss.lessPadding)
  }, V.createElement("div", {
    id: "notistack-snackbar",
    className: Ss.message
  }, s ? null : u, n), c && V.createElement("div", {
    className: Ss.action
  }, c));
});
Ob.displayName = "MaterialDesignContent";
var tM = /* @__PURE__ */ Q.memo(Ob), rM = /* @__PURE__ */ Hl({
  wrappedRoot: {
    width: "100%",
    position: "relative",
    transform: "translateX(0)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    minWidth: "288px"
  }
}), nM = function(t) {
  var r = Q.useRef(), n = Q.useState(!0), i = n[0], o = n[1], a = Zs([t.snack.onClose, t.onClose]), s = function() {
    t.snack.requestClose && a(null, "instructed", t.snack.id);
  }, l = Q.useCallback(function() {
    r.current = setTimeout(function() {
      o(function($) {
        return !$;
      });
    }, 125);
  }, []);
  Q.useEffect(function() {
    return function() {
      r.current && clearTimeout(r.current);
    };
  }, []);
  var u = t.snack, c = t.classes, f = t.Component, d = f === void 0 ? tM : f, w = Q.useMemo(function() {
    return XF(c);
  }, [c]), h = u.open, y = u.SnackbarProps, m = u.TransitionComponent, v = u.TransitionProps, p = u.transitionDuration, g = u.disableWindowBlurListener, x = u.content, E = Bl(u, ["open", "SnackbarProps", "TransitionComponent", "TransitionProps", "transitionDuration", "disableWindowBlurListener", "content", "entered", "requestClose", "onEnter", "onEntered", "onExit", "onExited"]), C = Fe({
    direction: GF(E.anchorOrigin),
    timeout: p
  }, v), S = x;
  typeof S == "function" && (S = S(E.id, E.message));
  var b = ["onEnter", "onEntered", "onExit", "onExited"].reduce(function($, k) {
    var _;
    return Fe({}, $, (_ = {}, _[k] = Zs([t.snack[k], t[k]], E.id), _));
  }, {});
  return V.createElement(bb, {
    in: i,
    onExited: b.onExited
  }, V.createElement(_b, {
    open: h,
    id: E.id,
    disableWindowBlurListener: g,
    autoHideDuration: E.autoHideDuration,
    className: To(rM.wrappedRoot, w.root, w[YF(E.anchorOrigin)]),
    SnackbarProps: y,
    onClose: a
  }, V.createElement(m, Object.assign({}, C, {
    appear: !0,
    in: h,
    onExit: b.onExit,
    onExited: l,
    onEnter: b.onEnter,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: Zs([b.onEntered, s], E.id)
  }), S || V.createElement(d, Object.assign({}, E)))));
}, xs, kp, Ru, Pu, bp, Pn = {
  view: {
    default: 20
  },
  snackbar: {
    default: 6,
    dense: 2
  }
}, RS = "." + Wl.CollapseWrapper, _p = 16, Tu = /* @__PURE__ */ Hl({
  root: (xs = {
    boxSizing: "border-box",
    display: "flex",
    maxHeight: "100%",
    position: "fixed",
    zIndex: 1400,
    height: "auto",
    width: "auto",
    transition: /* @__PURE__ */ ma(["top", "right", "bottom", "left", "max-width"], {
      duration: 300,
      easing: "ease"
    }),
    // container itself is invisible and should not block clicks, clicks should be passed to its children
    // a pointerEvents: all is applied in the collapse component
    pointerEvents: "none"
  }, xs[RS] = {
    padding: Pn.snackbar.default + "px 0px",
    transition: "padding 300ms ease 0ms"
  }, xs.maxWidth = "calc(100% - " + Pn.view.default * 2 + "px)", xs[Hi.downXs] = {
    width: "100%",
    maxWidth: "calc(100% - " + _p * 2 + "px)"
  }, xs),
  rootDense: (kp = {}, kp[RS] = {
    padding: Pn.snackbar.dense + "px 0px"
  }, kp),
  top: {
    top: Pn.view.default - Pn.snackbar.default + "px",
    flexDirection: "column"
  },
  bottom: {
    bottom: Pn.view.default - Pn.snackbar.default + "px",
    flexDirection: "column-reverse"
  },
  left: (Ru = {
    left: Pn.view.default + "px"
  }, Ru[Hi.upSm] = {
    alignItems: "flex-start"
  }, Ru[Hi.downXs] = {
    left: _p + "px"
  }, Ru),
  right: (Pu = {
    right: Pn.view.default + "px"
  }, Pu[Hi.upSm] = {
    alignItems: "flex-end"
  }, Pu[Hi.downXs] = {
    right: _p + "px"
  }, Pu),
  center: (bp = {
    left: "50%",
    transform: "translateX(-50%)"
  }, bp[Hi.upSm] = {
    alignItems: "center"
  }, bp)
}), iM = function(t) {
  var r = t.classes, n = r === void 0 ? {} : r, i = t.anchorOrigin, o = t.dense, a = t.children, s = To(
    Wl.SnackbarContainer,
    Tu[i.vertical],
    Tu[i.horizontal],
    Tu.root,
    // root should come after others to override maxWidth
    n.containerRoot,
    n["containerAnchorOrigin" + Hv(i)],
    o && Tu.rootDense
  );
  return V.createElement("div", {
    className: s
  }, a);
}, oM = /* @__PURE__ */ Q.memo(iM), PS = function(t) {
  return typeof t != "string";
}, aM, IU = /* @__PURE__ */ function(e) {
  xb(t, e);
  function t(n) {
    var i;
    return i = e.call(this, n) || this, i.enqueueSnackbar = function(o, a) {
      a === void 0 && (a = {});
      var s = PS(o) ? o : a, l = o;
      PS(o) && (l = o.message);
      var u = s.key, c = s.preventDuplicate, f = Bl(s, ["key", "preventDuplicate"]), d = _u(u), w = d ? u : (/* @__PURE__ */ new Date()).getTime() + Math.random(), h = KF(f, i.props), y = Fe({
        id: w
      }, f, {
        message: l,
        open: !0,
        entered: !1,
        requestClose: !1,
        persist: h("persist"),
        action: h("action"),
        content: h("content"),
        variant: h("variant"),
        anchorOrigin: h("anchorOrigin"),
        disableWindowBlurListener: h("disableWindowBlurListener"),
        autoHideDuration: h("autoHideDuration"),
        hideIconVariant: h("hideIconVariant"),
        TransitionComponent: h("TransitionComponent"),
        transitionDuration: h("transitionDuration"),
        TransitionProps: h("TransitionProps", !0),
        iconVariant: h("iconVariant", !0),
        style: h("style", !0),
        SnackbarProps: h("SnackbarProps", !0),
        className: To(i.props.className, f.className)
      });
      return y.persist && (y.autoHideDuration = void 0), i.setState(function(m) {
        if (c === void 0 && i.props.preventDuplicate || c) {
          var v = function(E) {
            return d ? E.id === w : E.message === l;
          }, p = m.queue.findIndex(v) > -1, g = m.snacks.findIndex(v) > -1;
          if (p || g)
            return m;
        }
        return i.handleDisplaySnack(Fe({}, m, {
          queue: [].concat(m.queue, [y])
        }));
      }), w;
    }, i.handleDisplaySnack = function(o) {
      var a = o.snacks;
      return a.length >= i.maxSnack ? i.handleDismissOldest(o) : i.processQueue(o);
    }, i.processQueue = function(o) {
      var a = o.queue, s = o.snacks;
      return a.length > 0 ? Fe({}, o, {
        snacks: [].concat(s, [a[0]]),
        queue: a.slice(1, a.length)
      }) : o;
    }, i.handleDismissOldest = function(o) {
      if (o.snacks.some(function(c) {
        return !c.open || c.requestClose;
      }))
        return o;
      var a = !1, s = !1, l = o.snacks.reduce(function(c, f) {
        return c + (f.open && f.persist ? 1 : 0);
      }, 0);
      l === i.maxSnack && (s = !0);
      var u = o.snacks.map(function(c) {
        return !a && (!c.persist || s) ? (a = !0, c.entered ? (c.onClose && c.onClose(null, "maxsnack", c.id), i.props.onClose && i.props.onClose(null, "maxsnack", c.id), Fe({}, c, {
          open: !1
        })) : Fe({}, c, {
          requestClose: !0
        })) : Fe({}, c);
      });
      return Fe({}, o, {
        snacks: u
      });
    }, i.handleEnteredSnack = function(o, a, s) {
      if (!_u(s))
        throw new Error("handleEnteredSnack Cannot be called with undefined key");
      i.setState(function(l) {
        var u = l.snacks;
        return {
          snacks: u.map(function(c) {
            return c.id === s ? Fe({}, c, {
              entered: !0
            }) : Fe({}, c);
          })
        };
      });
    }, i.handleCloseSnack = function(o, a, s) {
      i.props.onClose && i.props.onClose(o, a, s);
      var l = s === void 0;
      i.setState(function(u) {
        var c = u.snacks, f = u.queue;
        return {
          snacks: c.map(function(d) {
            return !l && d.id !== s ? Fe({}, d) : d.entered ? Fe({}, d, {
              open: !1
            }) : Fe({}, d, {
              requestClose: !0
            });
          }),
          queue: f.filter(function(d) {
            return d.id !== s;
          })
        };
      });
    }, i.closeSnackbar = function(o) {
      var a = i.state.snacks.find(function(s) {
        return s.id === o;
      });
      _u(o) && a && a.onClose && a.onClose(null, "instructed", o), i.handleCloseSnack(null, "instructed", o);
    }, i.handleExitedSnack = function(o, a) {
      if (!_u(a))
        throw new Error("handleExitedSnack Cannot be called with undefined key");
      i.setState(function(s) {
        var l = i.processQueue(Fe({}, s, {
          snacks: s.snacks.filter(function(u) {
            return u.id !== a;
          })
        }));
        return l.queue.length === 0 ? l : i.handleDismissOldest(l);
      });
    }, aM = i.enqueueSnackbar, i.closeSnackbar, i.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: i.enqueueSnackbar,
        closeSnackbar: i.closeSnackbar
      }
    }, i;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, o = this.state.contextValue, a = this.props, s = a.domRoot, l = a.children, u = a.dense, c = u === void 0 ? !1 : u, f = a.Components, d = f === void 0 ? {} : f, w = a.classes, h = this.state.snacks.reduce(function(m, v) {
      var p, g = Hv(v.anchorOrigin), x = m[g] || [];
      return Fe({}, m, (p = {}, p[g] = [].concat(x, [v]), p));
    }, {}), y = Object.keys(h).map(function(m) {
      var v = h[m], p = v[0];
      return V.createElement(oM, {
        key: m,
        dense: c,
        anchorOrigin: p.anchorOrigin,
        classes: w
      }, v.map(function(g) {
        return V.createElement(nM, {
          key: g.id,
          snack: g,
          classes: w,
          Component: d[g.variant],
          onClose: i.handleCloseSnack,
          onEnter: i.props.onEnter,
          onExit: i.props.onExit,
          onExited: Zs([i.handleExitedSnack, i.props.onExited], g.id),
          onEntered: Zs([i.handleEnteredSnack, i.props.onEntered], g.id)
        });
      }));
    });
    return V.createElement(LF.Provider, {
      value: o
    }, l, s ? Il.createPortal(y, s) : y);
  }, Sb(t, [{
    key: "maxSnack",
    get: function() {
      return this.props.maxSnack || po.maxSnack;
    }
  }]), t;
}(Q.Component), sM = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Rb(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var lM = Rb(function(e) {
  (function(t) {
    var r = function(m, v, p) {
      if (!l(v) || c(v) || f(v) || d(v) || s(v)) return v;
      var g, x = 0, E = 0;
      if (u(v)) for (g = [], E = v.length; x < E; x++) g.push(r(m, v[x], p));
      else for (var C in g = {}, v) Object.prototype.hasOwnProperty.call(v, C) && (g[m(C, p)] = r(m, v[C], p));
      return g;
    }, n = function(m) {
      return w(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(v, p) {
        return p ? p.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + m.substr(1);
    }, i = function(m) {
      var v = n(m);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, o = function(m, v) {
      return function(p, g) {
        var x = (g = g || {}).separator || "_", E = g.split || /(?=[A-Z])/;
        return p.split(E).join(x);
      }(m, v).toLowerCase();
    }, a = Object.prototype.toString, s = function(m) {
      return typeof m == "function";
    }, l = function(m) {
      return m === Object(m);
    }, u = function(m) {
      return a.call(m) == "[object Array]";
    }, c = function(m) {
      return a.call(m) == "[object Date]";
    }, f = function(m) {
      return a.call(m) == "[object RegExp]";
    }, d = function(m) {
      return a.call(m) == "[object Boolean]";
    }, w = function(m) {
      return (m -= 0) == m;
    }, h = function(m, v) {
      var p = v && "process" in v ? v.process : v;
      return typeof p != "function" ? m : function(g, x) {
        return p(g, m, x);
      };
    }, y = { camelize: n, decamelize: o, pascalize: i, depascalize: o, camelizeKeys: function(m, v) {
      return r(h(n, v), m);
    }, decamelizeKeys: function(m, v) {
      return r(h(o, v), m, v);
    }, pascalizeKeys: function(m, v) {
      return r(h(i, v), m);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = y : t.humps = y;
  })(sM);
}).decamelize, uM = function(e) {
  if (Array.isArray(e)) return e;
}, cM = function(e, t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
    var r = [], n = !0, i = !1, o = void 0;
    try {
      for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        n || s.return == null || s.return();
      } finally {
        if (i) throw o;
      }
    }
    return r;
  }
}, TS = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}, fM = function(e, t) {
  if (e) {
    if (typeof e == "string") return TS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? TS(e, t) : void 0;
  }
}, dM = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, pM = function(e, t) {
  return uM(e) || cM(e, t) || fM(e, t) || dM();
}, Pb = Rb(function(e) {
  function t() {
    return e.exports = t = Object.assign || function(r) {
      for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
      }
      return r;
    }, t.apply(this, arguments);
  }
  e.exports = t;
}), hM = function(e, t) {
  if (e == null) return {};
  var r, n, i = {}, o = Object.keys(e);
  for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
  return i;
}, Tb = function(e, t) {
  if (e == null) return {};
  var r, n, i = hM(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}, yM = Q.createContext(null);
function Db(e) {
  var t = e.children, r = t === void 0 ? "" : t, n = Tb(e, ["children"]);
  return typeof r != "string" && (r = RF(r)), V.createElement("template", Pb({}, n, { dangerouslySetInnerHTML: { __html: r } }));
}
function Ab(e) {
  var t = e.root, r = e.children;
  return Il.createPortal(r === void 0 ? null : r, t);
}
function mM(e) {
  var t = Q.forwardRef(function(r, n) {
    var i, o, a = r.mode, s = a === void 0 ? "open" : a, l = r.delegatesFocus, u = l !== void 0 && l, c = r.styleSheets, f = c === void 0 ? [] : c, d = r.ssr, w = d !== void 0 && d, h = r.children, y = Tb(r, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), m = (o = Q.useRef((i = n) && i.current), Q.useEffect(function() {
      i && (i.current = o.current);
    }, [i]), o), v = Q.useState(null), p = pM(v, 2), g = p[0], x = p[1], E = "node_".concat(s).concat(u);
    return Q.useLayoutEffect(function() {
      if (m.current) try {
        if (typeof n == "function" && n(m.current), w) {
          var C = m.current.shadowRoot;
          return void x(C);
        }
        var S = m.current.attachShadow({ mode: s, delegatesFocus: u });
        f.length > 0 && (S.adoptedStyleSheets = f), x(S);
      } catch (b) {
        (function($) {
          var k = $.error, _ = $.styleSheets, P = $.root;
          switch (k.name) {
            case "NotSupportedError":
              _.length > 0 && (P.adoptedStyleSheets = _);
              break;
            default:
              throw k;
          }
        })({ error: b, styleSheets: f, root: g });
      }
    }, [n, m, f]), V.createElement(V.Fragment, null, V.createElement(e.tag, Pb({ key: E, ref: m }, y), (g || w) && V.createElement(yM.Provider, { value: g }, w ? V.createElement(Db, { shadowroot: s, shadowrootmode: s }, e.render({ root: g, ssr: w, children: h })) : V.createElement(Ab, { root: g }, e.render({ root: g, ssr: w, children: h })))));
  });
  return t.propTypes = { mode: qr.oneOf(["open", "closed"]), delegatesFocus: qr.bool, styleSheets: qr.arrayOf(qr.instanceOf(globalThis.CSSStyleSheet)), ssr: qr.bool, children: qr.node }, t;
}
Db.propTypes = { children: qr.oneOfType([qr.string, qr.node]) }, Ab.propTypes = { root: qr.object.isRequired, children: qr.node };
var $p = /* @__PURE__ */ new Map();
function vM() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(n) {
    return n.children;
  };
  return new Proxy(e, { get: function(n, i) {
    var o = lM(i, { separator: "-" }), a = "".concat(t, "-").concat(o);
    return $p.has(a) || $p.set(a, mM({ tag: o, render: r })), $p.get(a);
  } });
}
var jU = vM(), Ry = { exports: {} };
/*!
 * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(e, t) {
  var r;
  function n(o, a) {
    var s = [], l = 0;
    function u(f) {
      return s.push(f), a;
    }
    function c() {
      return s[l++];
    }
    return {
      /**
       * Replace matching strings with tokens.
       *
       * @param {string} str String to tokenize
       * @return {string} Tokenized string
       */
      tokenize: function(f) {
        return f.replace(o, u);
      },
      /**
       * Restores tokens to their original values.
       *
       * @param {string} str String previously run through tokenize()
       * @return {string} Original string
       */
      detokenize: function(f) {
        return f.replace(new RegExp("(" + a + ")", "g"), c);
      }
    };
  }
  function i() {
    var o = "`TMP`", a = "`TMPLTR`", s = "`TMPRTL`", l = "`NOFLIP_SINGLE`", u = "`NOFLIP_CLASS`", c = "`COMMENT`", f = "[^\\u0020-\\u007e]", d = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", w = "(?:[0-9]*\\.[0-9]+|[0-9]+)", h = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", y = "direction\\s*:\\s*", m = "[!#$%&*-~]", v = `['"]?\\s*`, p = "(^|[^a-zA-Z])", g = "[^\\}]*?", x = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", E = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", C = "(?:" + d + "|\\\\[^\\r\\n\\f0-9a-f])", S = "(?:[_a-z]|" + f + "|" + C + ")", b = "(?:[_a-z0-9-]|" + f + "|" + C + ")", $ = "-?" + S + b + "*", k = w + "(?:\\s*" + h + "|" + $ + ")?", _ = "((?:-?" + k + ")|(?:inherit|auto))", P = "(?:-?" + w + "(?:\\s*" + h + ")?)", D = "(?:\\+|\\-|\\*|\\/)", L = "(?:\\(|\\)|\\t| )", j = "(?:" + L + "|" + P + "|" + D + "){3,}", z = "(?:calc\\((?:" + j + ")\\))", B = "((?:-?" + k + ")|(?:inherit|auto)|" + z + ")", M = "((?:margin|padding|border-width)\\s*:\\s*)", q = "((?:-color|border-style)\\s*:\\s*)", G = "(#?" + b + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", ae = "(?:" + m + "|" + f + "|" + C + ")*?", ue = "(?![a-zA-Z])", be = "(?!(" + b + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + c + ")*?{)", Se = "(?!" + ae + v + "\\))", ce = "(?=" + ae + v + "\\))", Ce = "(\\s*(?:!important\\s*)?[;}])", Oe = /`TMP`/g, Ye = /`TMPLTR`/g, zr = /`TMPRTL`/g, Kn = new RegExp(E, "gi"), En = new RegExp("(" + x + be + "[^;}]+;?)", "gi"), Xe = new RegExp("(" + x + g + "})", "gi"), lr = new RegExp("(" + y + ")ltr", "gi"), Cn = new RegExp("(" + y + ")rtl", "gi"), Gn = new RegExp(p + "(left)" + ue + Se + be, "gi"), Wt = new RegExp(p + "(right)" + ue + Se + be, "gi"), Yn = new RegExp(p + "(left)" + ce, "gi"), Mo = new RegExp(p + "(right)" + ce, "gi"), kn = /(:dir\( *)ltr( *\))/g, O = /(:dir\( *)rtl( *\))/g, A = new RegExp(p + "(ltr)" + ce, "gi"), I = new RegExp(p + "(rtl)" + ce, "gi"), Y = new RegExp(p + "([ns]?)e-resize", "gi"), K = new RegExp(p + "([ns]?)w-resize", "gi"), H = new RegExp(M + B + "(\\s+)" + B + "(\\s+)" + B + "(\\s+)" + B + Ce, "gi"), re = new RegExp(q + G + "(\\s+)" + G + "(\\s+)" + G + "(\\s+)" + G + Ce, "gi"), ge = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + k + ")", "gi"), me = new RegExp("(background-position-x\\s*:\\s*)(-?" + w + "%)", "gi"), We = new RegExp("(border-radius\\s*:\\s*)" + _ + "(?:(?:\\s+" + _ + ")(?:\\s+" + _ + ")?(?:\\s+" + _ + ")?)?(?:(?:(?:\\s*\\/\\s*)" + _ + ")(?:\\s+" + _ + ")?(?:\\s+" + _ + ")?(?:\\s+" + _ + ")?)?" + Ce, "gi"), bn = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + _, "gi"), Ft = new RegExp("(text-shadow\\s*:\\s*)" + _ + "(\\s*)" + G, "gi"), es = new RegExp("(text-shadow\\s*:\\s*)" + G + "(\\s*)" + _, "gi"), qt = new RegExp("(text-shadow\\s*:\\s*)" + _, "gi"), Xn = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + _ + "(\\s*\\))", "gi"), No = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + _ + "((?:\\s*,\\s*" + _ + "){0,2}\\s*\\))", "gi");
    function Jn(de, Mt, ze) {
      var vt, gt;
      return ze.slice(-1) === "%" && (vt = ze.indexOf("."), vt !== -1 ? (gt = ze.length - vt - 2, ze = 100 - parseFloat(ze), ze = ze.toFixed(gt) + "%") : ze = 100 - parseFloat(ze) + "%"), Mt + ze;
    }
    function Ni(de) {
      switch (de.length) {
        case 4:
          de = [de[1], de[0], de[3], de[2]];
          break;
        case 3:
          de = [de[1], de[0], de[1], de[2]];
          break;
        case 2:
          de = [de[1], de[0]];
          break;
        case 1:
          de = [de[0]];
          break;
      }
      return de.join(" ");
    }
    function Li(de, Mt) {
      var ze, vt = [].slice.call(arguments), gt = vt.slice(2, 6).filter(function(rs) {
        return rs;
      }), Ii = vt.slice(6, 10).filter(function(rs) {
        return rs;
      }), Td = vt[10] || "";
      return Ii.length ? ze = Ni(gt) + " / " + Ni(Ii) : ze = Ni(gt), Mt + ze + Td;
    }
    function Zn(de) {
      return parseFloat(de) === 0 ? de : de[0] === "-" ? de.slice(1) : "-" + de;
    }
    function ts(de, Mt, ze) {
      return Mt + Zn(ze);
    }
    function Lo(de, Mt, ze, vt, gt) {
      return Mt + ze + Zn(vt) + gt;
    }
    function Io(de, Mt, ze, vt, gt) {
      return Mt + ze + vt + Zn(gt);
    }
    return {
      /**
       * Transform a left-to-right stylesheet to right-to-left.
       *
       * @param {string} css Stylesheet to transform
       * @param {Object} options Options
       * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
       * (e.g. 'ltr', 'rtl')
       * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
       * (e.g. 'left', 'right')
       * @return {string} Transformed stylesheet
       */
      transform: function(de, Mt) {
        var ze = new n(En, l), vt = new n(Xe, u), gt = new n(Kn, c);
        return de = gt.tokenize(
          vt.tokenize(
            ze.tokenize(
              // We wrap tokens in ` , not ~ like the original implementation does.
              // This was done because ` is not a legal character in CSS and can only
              // occur in URLs, where we escape it to %60 before inserting our tokens.
              de.replace("`", "%60")
            )
          )
        ), Mt.transformDirInUrl && (de = de.replace(kn, "$1" + a + "$2").replace(O, "$1" + s + "$2").replace(A, "$1" + o).replace(I, "$1ltr").replace(Oe, "rtl").replace(Ye, "ltr").replace(zr, "rtl")), Mt.transformEdgeInUrl && (de = de.replace(Yn, "$1" + o).replace(Mo, "$1left").replace(Oe, "right")), de = de.replace(lr, "$1" + o).replace(Cn, "$1ltr").replace(Oe, "rtl").replace(Gn, "$1" + o).replace(Wt, "$1left").replace(Oe, "right").replace(Y, "$1$2" + o).replace(K, "$1$2e-resize").replace(Oe, "w-resize").replace(We, Li).replace(bn, ts).replace(Ft, Io).replace(es, Io).replace(qt, ts).replace(Xn, Lo).replace(No, Lo).replace(H, "$1$2$3$8$5$6$7$4$9").replace(re, "$1$2$3$8$5$6$7$4$9").replace(ge, Jn).replace(me, Jn), de = ze.detokenize(
          vt.detokenize(
            gt.detokenize(de)
          )
        ), de;
      }
    };
  }
  r = new i(), e.exports ? t.transform = function(o, a, s) {
    var l;
    return typeof a == "object" ? l = a : (l = {}, typeof a == "boolean" && (l.transformDirInUrl = a), typeof s == "boolean" && (l.transformEdgeInUrl = s)), r.transform(o, l);
  } : typeof window < "u" && (window.cssjanus = r);
})(Ry, Ry.exports);
var gM = Ry.exports;
const zU = /* @__PURE__ */ Ri(gM);
function Fb(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wM } = Object.prototype, { getPrototypeOf: qv } = Object, { iterator: hd, toStringTag: Mb } = Symbol, yd = /* @__PURE__ */ ((e) => (t) => {
  const r = wM.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (e) => (e = e.toLowerCase(), (t) => yd(t) === e), md = (e) => (t) => typeof t === e, { isArray: Xa } = Array, Ia = md("undefined");
function ql(e) {
  return e !== null && !Ia(e) && e.constructor !== null && !Ia(e.constructor) && ar(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Nb = tn("ArrayBuffer");
function SM(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Nb(e.buffer), t;
}
const xM = md("string"), ar = md("function"), Lb = md("number"), Ql = (e) => e !== null && typeof e == "object", EM = (e) => e === !0 || e === !1, hc = (e) => {
  if (yd(e) !== "object")
    return !1;
  const t = qv(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Mb in e) && !(hd in e);
}, CM = (e) => {
  if (!Ql(e) || ql(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, kM = tn("Date"), bM = tn("File"), _M = tn("Blob"), $M = tn("FileList"), OM = (e) => Ql(e) && ar(e.pipe), RM = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ar(e.append) && ((t = yd(e)) === "formdata" || // detect form-data instance
  t === "object" && ar(e.toString) && e.toString() === "[object FormData]"));
}, PM = tn("URLSearchParams"), [TM, DM, AM, FM] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), MM = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kl(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Xa(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    if (ql(e))
      return;
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function Ib(e, t) {
  if (ql(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : globalThis, jb = (e) => !Ia(e) && e !== ao;
function Py() {
  const { caseless: e, skipUndefined: t } = jb(this) && this || {}, r = {}, n = (i, o) => {
    const a = e && Ib(r, o) || o;
    hc(r[a]) && hc(i) ? r[a] = Py(r[a], i) : hc(i) ? r[a] = Py({}, i) : Xa(i) ? r[a] = i.slice() : (!t || !Ia(i)) && (r[a] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Kl(arguments[i], n);
  return r;
}
const NM = (e, t, r, { allOwnKeys: n } = {}) => (Kl(t, (i, o) => {
  r && ar(i) ? e[o] = Fb(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), LM = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), IM = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, jM = (e, t, r, n) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && qv(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, zM = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, UM = (e) => {
  if (!e) return null;
  if (Xa(e)) return e;
  let t = e.length;
  if (!Lb(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, VM = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qv(Uint8Array)), BM = (e, t) => {
  const n = (e && e[hd]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, HM = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, WM = tn("HTMLFormElement"), qM = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), DS = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), QM = tn("RegExp"), zb = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Kl(r, (i, o) => {
    let a;
    (a = t(i, o, e)) !== !1 && (n[o] = a || i);
  }), Object.defineProperties(e, n);
}, KM = (e) => {
  zb(e, (t, r) => {
    if (ar(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ar(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, GM = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return Xa(e) ? n(e) : n(String(e).split(t)), r;
}, YM = () => {
}, XM = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function JM(e) {
  return !!(e && ar(e.append) && e[Mb] === "FormData" && e[hd]);
}
const ZM = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Ql(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (ql(n))
        return n;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = Xa(n) ? [] : {};
        return Kl(n, (a, s) => {
          const l = r(a, i + 1);
          !Ia(l) && (o[s] = l);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, eN = tn("AsyncFunction"), tN = (e) => e && (Ql(e) || ar(e)) && ar(e.then) && ar(e.catch), Ub = ((e, t) => e ? setImmediate : t ? ((r, n) => (ao.addEventListener("message", ({ source: i, data: o }) => {
  i === ao && o === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), ao.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ar(ao.postMessage)
), rN = typeof queueMicrotask < "u" ? queueMicrotask.bind(ao) : typeof process < "u" && process.nextTick || Ub, nN = (e) => e != null && ar(e[hd]), F = {
  isArray: Xa,
  isArrayBuffer: Nb,
  isBuffer: ql,
  isFormData: RM,
  isArrayBufferView: SM,
  isString: xM,
  isNumber: Lb,
  isBoolean: EM,
  isObject: Ql,
  isPlainObject: hc,
  isEmptyObject: CM,
  isReadableStream: TM,
  isRequest: DM,
  isResponse: AM,
  isHeaders: FM,
  isUndefined: Ia,
  isDate: kM,
  isFile: bM,
  isBlob: _M,
  isRegExp: QM,
  isFunction: ar,
  isStream: OM,
  isURLSearchParams: PM,
  isTypedArray: VM,
  isFileList: $M,
  forEach: Kl,
  merge: Py,
  extend: NM,
  trim: MM,
  stripBOM: LM,
  inherits: IM,
  toFlatObject: jM,
  kindOf: yd,
  kindOfTest: tn,
  endsWith: zM,
  toArray: UM,
  forEachEntry: BM,
  matchAll: HM,
  isHTMLForm: WM,
  hasOwnProperty: DS,
  hasOwnProp: DS,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zb,
  freezeMethods: KM,
  toObjectSet: GM,
  toCamelCase: qM,
  noop: YM,
  toFiniteNumber: XM,
  findKey: Ib,
  global: ao,
  isContextDefined: jb,
  isSpecCompliantForm: JM,
  toJSONObject: ZM,
  isAsyncFn: eN,
  isThenable: tN,
  setImmediate: Ub,
  asap: rN,
  isIterable: nN
};
function he(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
F.inherits(he, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vb = he.prototype, Bb = {};
[
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Bb[e] = { value: e };
});
Object.defineProperties(he, Bb);
Object.defineProperty(Vb, "isAxiosError", { value: !0 });
he.from = (e, t, r, n, i, o) => {
  const a = Object.create(Vb);
  F.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", l = t == null && e ? e.code : t;
  return he.call(a, s, l, r, n, i), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", o && Object.assign(a, o), a;
};
const iN = null;
function Ty(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function Hb(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function AS(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = Hb(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function oN(e) {
  return F.isArray(e) && !e.some(Ty);
}
const aN = F.toFlatObject(F, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vd(e, t, r) {
  if (!F.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = F.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !F.isUndefined(m[y]);
  });
  const n = r.metaTokens, i = r.visitor || c, o = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(t);
  if (!F.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (F.isDate(h))
      return h.toISOString();
    if (F.isBoolean(h))
      return h.toString();
    if (!l && F.isBlob(h))
      throw new he("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(h) || F.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, y, m) {
    let v = h;
    if (h && !m && typeof h == "object") {
      if (F.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (F.isArray(h) && oN(h) || (F.isFileList(h) || F.endsWith(y, "[]")) && (v = F.toArray(h)))
        return y = Hb(y), v.forEach(function(g, x) {
          !(F.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? AS([y], x, o) : a === null ? y : y + "[]",
            u(g)
          );
        }), !1;
    }
    return Ty(h) ? !0 : (t.append(AS(m, y, o), u(h)), !1);
  }
  const f = [], d = Object.assign(aN, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ty
  });
  function w(h, y) {
    if (!F.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(h), F.forEach(h, function(v, p) {
        (!(F.isUndefined(v) || v === null) && i.call(
          t,
          v,
          F.isString(p) ? p.trim() : p,
          y,
          d
        )) === !0 && w(v, y ? y.concat(p) : [p]);
      }), f.pop();
    }
  }
  if (!F.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function FS(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Qv(e, t) {
  this._pairs = [], e && vd(e, this, t);
}
const Wb = Qv.prototype;
Wb.append = function(t, r) {
  this._pairs.push([t, r]);
};
Wb.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, FS);
  } : FS;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function sN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function qb(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || sN;
  F.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = F.isURLSearchParams(t) ? t.toString() : new Qv(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class MS {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    F.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Qb = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, lN = typeof URLSearchParams < "u" ? URLSearchParams : Qv, uN = typeof FormData < "u" ? FormData : null, cN = typeof Blob < "u" ? Blob : null, fN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: lN,
    FormData: uN,
    Blob: cN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Kv = typeof window < "u" && typeof document < "u", Dy = typeof navigator == "object" && navigator || void 0, dN = Kv && (!Dy || ["ReactNative", "NativeScript", "NS"].indexOf(Dy.product) < 0), pN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hN = Kv && window.location.href || "http://localhost", yN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Kv,
  hasStandardBrowserEnv: dN,
  hasStandardBrowserWebWorkerEnv: pN,
  navigator: Dy,
  origin: hN
}, Symbol.toStringTag, { value: "Module" })), Dt = {
  ...yN,
  ...fN
};
function mN(e, t) {
  return vd(e, new Dt.classes.URLSearchParams(), {
    visitor: function(r, n, i, o) {
      return Dt.isNode && F.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function vN(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gN(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Kb(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), l = o >= r.length;
    return a = !a && F.isArray(i) ? i.length : a, l ? (F.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !F.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && F.isArray(i[a]) && (i[a] = gN(i[a])), !s);
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const r = {};
    return F.forEachEntry(e, (n, i) => {
      t(vN(n), i, r, 0);
    }), r;
  }
  return null;
}
function wN(e, t, r) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Gl = {
  transitional: Qb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = F.isObject(t);
    if (o && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t))
      return i ? JSON.stringify(Kb(t)) : t;
    if (F.isArrayBuffer(t) || F.isBuffer(t) || F.isStream(t) || F.isFile(t) || F.isBlob(t) || F.isReadableStream(t))
      return t;
    if (F.isArrayBufferView(t))
      return t.buffer;
    if (F.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mN(t, this.formSerializer).toString();
      if ((s = F.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return vd(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), wN(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Gl.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (F.isResponse(t) || F.isReadableStream(t))
      return t;
    if (t && F.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? he.from(s, he.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Dt.classes.FormData,
    Blob: Dt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gl.headers[e] = {};
});
const SN = F.toObjectSet([
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
  "user-agent"
]), xN = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && SN[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, NS = Symbol("internals");
function Es(e) {
  return e && String(e).trim().toLowerCase();
}
function yc(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(yc) : String(e);
}
function EN(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const CN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Op(e, t, r, n, i) {
  if (F.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!F.isString(t)) {
    if (F.isString(n))
      return t.indexOf(n) !== -1;
    if (F.isRegExp(n))
      return n.test(t);
  }
}
function kN(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function bN(e, t) {
  const r = F.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
let sr = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(s, l, u) {
      const c = Es(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = F.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = yc(s));
    }
    const a = (s, l) => F.forEach(s, (u, c) => o(u, c, l));
    if (F.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (F.isString(t) && (t = t.trim()) && !CN(t))
      a(xN(t), r);
    else if (F.isObject(t) && F.isIterable(t)) {
      let s = {}, l, u;
      for (const c of t) {
        if (!F.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = c[0]] = (l = s[u]) ? F.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1];
      }
      a(s, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Es(t), t) {
      const n = F.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return EN(i);
        if (F.isFunction(r))
          return r.call(this, i, n);
        if (F.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Es(t), t) {
      const n = F.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Op(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = Es(a), a) {
        const s = F.findKey(n, a);
        s && (!r || Op(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return F.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Op(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return F.forEach(this, (i, o) => {
      const a = F.findKey(n, o);
      if (a) {
        r[a] = yc(i), delete r[o];
        return;
      }
      const s = t ? kN(o) : String(o).trim();
      s !== o && delete r[o], r[s] = yc(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return F.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && F.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[NS] = this[NS] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = Es(a);
      n[s] || (bN(i, a), n[s] = !0);
    }
    return F.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
sr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(sr.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
F.freezeMethods(sr);
function Rp(e, t) {
  const r = this || Gl, n = t || r, i = sr.from(n.headers);
  let o = n.data;
  return F.forEach(e, function(s) {
    o = s.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Gb(e) {
  return !!(e && e.__CANCEL__);
}
function Ja(e, t, r) {
  he.call(this, e ?? "canceled", he.ERR_CANCELED, t, r), this.name = "CanceledError";
}
F.inherits(Ja, he, {
  __CANCEL__: !0
});
function Yb(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new he(
    "Request failed with status code " + r.status,
    [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function _N(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function $N(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = n[o];
    a || (a = u), r[i] = l, n[i] = u;
    let f = o, d = 0;
    for (; f !== i; )
      d += r[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - a < t)
      return;
    const w = c && u - c;
    return w ? Math.round(d * 1e3 / w) : void 0;
  };
}
function ON(e, t) {
  let r = 0, n = 1e3 / t, i, o;
  const a = (u, c = Date.now()) => {
    r = c, i = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - r;
    f >= n ? a(u, c) : (i = u, o || (o = setTimeout(() => {
      o = null, a(i);
    }, n - f)));
  }, () => i && a(i)];
}
const mf = (e, t, r = 3) => {
  let n = 0;
  const i = $N(50, 250);
  return ON((o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, l = a - n, u = i(l), c = a <= s;
    n = a;
    const f = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && c ? (s - a) / u : void 0,
      event: o,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, LS = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, IS = (e) => (...t) => F.asap(() => e(...t)), RN = Dt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Dt.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Dt.origin),
  Dt.navigator && /(msie|trident)/i.test(Dt.navigator.userAgent)
) : () => !0, PN = Dt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, o, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      F.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), F.isString(n) && s.push(`path=${n}`), F.isString(i) && s.push(`domain=${i}`), o === !0 && s.push("secure"), F.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function TN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function DN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xb(e, t, r) {
  let n = !TN(t);
  return e && (n || r == !1) ? DN(e, t) : t;
}
const jS = (e) => e instanceof sr ? { ...e } : e;
function bo(e, t) {
  t = t || {};
  const r = {};
  function n(u, c, f, d) {
    return F.isPlainObject(u) && F.isPlainObject(c) ? F.merge.call({ caseless: d }, u, c) : F.isPlainObject(c) ? F.merge({}, c) : F.isArray(c) ? c.slice() : c;
  }
  function i(u, c, f, d) {
    if (F.isUndefined(c)) {
      if (!F.isUndefined(u))
        return n(void 0, u, f, d);
    } else return n(u, c, f, d);
  }
  function o(u, c) {
    if (!F.isUndefined(c))
      return n(void 0, c);
  }
  function a(u, c) {
    if (F.isUndefined(c)) {
      if (!F.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, c);
  }
  function s(u, c, f) {
    if (f in t)
      return n(u, c);
    if (f in e)
      return n(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, c, f) => i(jS(u), jS(c), f, !0)
  };
  return F.forEach(Object.keys({ ...e, ...t }), function(c) {
    const f = l[c] || i, d = f(e[c], t[c], c);
    F.isUndefined(d) && f !== s || (r[c] = d);
  }), r;
}
const Jb = (e) => {
  const t = bo({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: s } = t;
  if (t.headers = a = sr.from(a), t.url = qb(Xb(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), F.isFormData(r)) {
    if (Dt.hasStandardBrowserEnv || Dt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (F.isFunction(r.getHeaders)) {
      const l = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([c, f]) => {
        u.includes(c.toLowerCase()) && a.set(c, f);
      });
    }
  }
  if (Dt.hasStandardBrowserEnv && (n && F.isFunction(n) && (n = n(t)), n || n !== !1 && RN(t.url))) {
    const l = i && o && PN.read(o);
    l && a.set(i, l);
  }
  return t;
}, AN = typeof XMLHttpRequest < "u", FN = AN && function(e) {
  return new Promise(function(r, n) {
    const i = Jb(e);
    let o = i.data;
    const a = sr.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: u } = i, c, f, d, w, h;
    function y() {
      w && w(), h && h(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function v() {
      if (!m)
        return;
      const g = sr.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), E = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: g,
        config: e,
        request: m
      };
      Yb(function(S) {
        r(S), y();
      }, function(S) {
        n(S), y();
      }, E), m = null;
    }
    "onloadend" in m ? m.onloadend = v : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, m.onabort = function() {
      m && (n(new he("Request aborted", he.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(x) {
      const E = x && x.message ? x.message : "Network Error", C = new he(E, he.ERR_NETWORK, e, m);
      C.event = x || null, n(C), m = null;
    }, m.ontimeout = function() {
      let x = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const E = i.transitional || Qb;
      i.timeoutErrorMessage && (x = i.timeoutErrorMessage), n(new he(
        x,
        E.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in m && F.forEach(a.toJSON(), function(x, E) {
      m.setRequestHeader(E, x);
    }), F.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), s && s !== "json" && (m.responseType = i.responseType), u && ([d, h] = mf(u, !0), m.addEventListener("progress", d)), l && m.upload && ([f, w] = mf(l), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", w)), (i.cancelToken || i.signal) && (c = (g) => {
      m && (n(!g || g.type ? new Ja(null, e, m) : g), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const p = _N(i.url);
    if (p && Dt.protocols.indexOf(p) === -1) {
      n(new he("Unsupported protocol " + p + ":", he.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, MN = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const o = function(u) {
      if (!i) {
        i = !0, s();
        const c = u instanceof Error ? u : this.reason;
        n.abort(c instanceof he ? c : new Ja(c instanceof Error ? c.message : c));
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new he(`timeout ${t} of ms exceeded`, he.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: l } = n;
    return l.unsubscribe = () => F.asap(s), l;
  }
}, NN = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, LN = async function* (e, t) {
  for await (const r of IN(e))
    yield* NN(r, t);
}, IN = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, zS = (e, t, r, n) => {
  const i = LN(e, t);
  let o = 0, a, s = (l) => {
    a || (a = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await i.next();
        if (u) {
          s(), l.close();
          return;
        }
        let f = c.byteLength;
        if (r) {
          let d = o += f;
          r(d);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw s(u), u;
      }
    },
    cancel(l) {
      return s(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, US = 64 * 1024, { isFunction: Du } = F, jN = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(F.global), {
  ReadableStream: VS,
  TextEncoder: BS
} = F.global, HS = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, zN = (e) => {
  e = F.merge.call({
    skipUndefined: !0
  }, jN, e);
  const { fetch: t, Request: r, Response: n } = e, i = t ? Du(t) : typeof fetch == "function", o = Du(r), a = Du(n);
  if (!i)
    return !1;
  const s = i && Du(VS), l = i && (typeof BS == "function" ? /* @__PURE__ */ ((h) => (y) => h.encode(y))(new BS()) : async (h) => new Uint8Array(await new r(h).arrayBuffer())), u = o && s && HS(() => {
    let h = !1;
    const y = new r(Dt.origin, {
      body: new VS(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !y;
  }), c = a && s && HS(() => F.isReadableStream(new n("").body)), f = {
    stream: c && ((h) => h.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !f[h] && (f[h] = (y, m) => {
      let v = y && y[h];
      if (v)
        return v.call(y);
      throw new he(`Response type '${h}' is not supported`, he.ERR_NOT_SUPPORT, m);
    });
  });
  const d = async (h) => {
    if (h == null)
      return 0;
    if (F.isBlob(h))
      return h.size;
    if (F.isSpecCompliantForm(h))
      return (await new r(Dt.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (F.isArrayBufferView(h) || F.isArrayBuffer(h))
      return h.byteLength;
    if (F.isURLSearchParams(h) && (h = h + ""), F.isString(h))
      return (await l(h)).byteLength;
  }, w = async (h, y) => {
    const m = F.toFiniteNumber(h.getContentLength());
    return m ?? d(y);
  };
  return async (h) => {
    let {
      url: y,
      method: m,
      data: v,
      signal: p,
      cancelToken: g,
      timeout: x,
      onDownloadProgress: E,
      onUploadProgress: C,
      responseType: S,
      headers: b,
      withCredentials: $ = "same-origin",
      fetchOptions: k
    } = Jb(h), _ = t || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let P = MN([p, g && g.toAbortSignal()], x), D = null;
    const L = P && P.unsubscribe && (() => {
      P.unsubscribe();
    });
    let j;
    try {
      if (C && u && m !== "get" && m !== "head" && (j = await w(b, v)) !== 0) {
        let ae = new r(y, {
          method: "POST",
          body: v,
          duplex: "half"
        }), ue;
        if (F.isFormData(v) && (ue = ae.headers.get("content-type")) && b.setContentType(ue), ae.body) {
          const [be, Se] = LS(
            j,
            mf(IS(C))
          );
          v = zS(ae.body, US, be, Se);
        }
      }
      F.isString($) || ($ = $ ? "include" : "omit");
      const z = o && "credentials" in r.prototype, B = {
        ...k,
        signal: P,
        method: m.toUpperCase(),
        headers: b.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: z ? $ : void 0
      };
      D = o && new r(y, B);
      let M = await (o ? _(D, k) : _(y, B));
      const q = c && (S === "stream" || S === "response");
      if (c && (E || q && L)) {
        const ae = {};
        ["status", "statusText", "headers"].forEach((ce) => {
          ae[ce] = M[ce];
        });
        const ue = F.toFiniteNumber(M.headers.get("content-length")), [be, Se] = E && LS(
          ue,
          mf(IS(E), !0)
        ) || [];
        M = new n(
          zS(M.body, US, be, () => {
            Se && Se(), L && L();
          }),
          ae
        );
      }
      S = S || "text";
      let G = await f[F.findKey(f, S) || "text"](M, h);
      return !q && L && L(), await new Promise((ae, ue) => {
        Yb(ae, ue, {
          data: G,
          headers: sr.from(M.headers),
          status: M.status,
          statusText: M.statusText,
          config: h,
          request: D
        });
      });
    } catch (z) {
      throw L && L(), z && z.name === "TypeError" && /Load failed|fetch/i.test(z.message) ? Object.assign(
        new he("Network Error", he.ERR_NETWORK, h, D),
        {
          cause: z.cause || z
        }
      ) : he.from(z, z && z.code, h, D);
    }
  };
}, UN = /* @__PURE__ */ new Map(), Zb = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: i } = t, o = [
    n,
    i,
    r
  ];
  let a = o.length, s = a, l, u, c = UN;
  for (; s--; )
    l = o[s], u = c.get(l), u === void 0 && c.set(l, u = s ? /* @__PURE__ */ new Map() : zN(t)), c = u;
  return u;
};
Zb();
const Gv = {
  http: iN,
  xhr: FN,
  fetch: {
    get: Zb
  }
};
F.forEach(Gv, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const WS = (e) => `- ${e}`, VN = (e) => F.isFunction(e) || e === null || e === !1;
function BN(e, t) {
  e = F.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, i;
  const o = {};
  for (let a = 0; a < r; a++) {
    n = e[a];
    let s;
    if (i = n, !VN(n) && (i = Gv[(s = String(n)).toLowerCase()], i === void 0))
      throw new he(`Unknown adapter '${s}'`);
    if (i && (F.isFunction(i) || (i = i.get(t))))
      break;
    o[s || "#" + a] = i;
  }
  if (!i) {
    const a = Object.entries(o).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = r ? a.length > 1 ? `since :
` + a.map(WS).join(`
`) : " " + WS(a[0]) : "as no adapter specified";
    throw new he(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const e_ = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: BN,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Gv
};
function Pp(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ja(null, e);
}
function qS(e) {
  return Pp(e), e.headers = sr.from(e.headers), e.data = Rp.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), e_.getAdapter(e.adapter || Gl.adapter, e)(e).then(function(n) {
    return Pp(e), n.data = Rp.call(
      e,
      e.transformResponse,
      n
    ), n.headers = sr.from(n.headers), n;
  }, function(n) {
    return Gb(n) || (Pp(e), n && n.response && (n.response.data = Rp.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = sr.from(n.response.headers))), Promise.reject(n);
  });
}
const t_ = "1.13.2", gd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const QS = {};
gd.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + t_ + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new he(
        i(a, " has been removed" + (r ? " in " + r : "")),
        he.ERR_DEPRECATED
      );
    return r && !QS[a] && (QS[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
gd.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function HN(e, t, r) {
  if (typeof e != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const s = e[o], l = s === void 0 || a(s, o, e);
      if (l !== !0)
        throw new he("option " + o + " must be " + l, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new he("Unknown option " + o, he.ERR_BAD_OPTION);
  }
}
const mc = {
  assertOptions: HN,
  validators: gd
}, on = mc.validators;
let ho = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new MS(),
      response: new MS()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = bo(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && mc.assertOptions(n, {
      silentJSONParsing: on.transitional(on.boolean),
      forcedJSONParsing: on.transitional(on.boolean),
      clarifyTimeoutError: on.transitional(on.boolean)
    }, !1), i != null && (F.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : mc.assertOptions(i, {
      encode: on.function,
      serialize: on.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), mc.assertOptions(r, {
      baseUrl: on.spelling("baseURL"),
      withXsrfToken: on.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && F.merge(
      o.common,
      o[r.method]
    );
    o && F.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), r.headers = sr.concat(a, o);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (l = l && y.synchronous, s.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c, f = 0, d;
    if (!l) {
      const h = [qS.bind(this), void 0];
      for (h.unshift(...s), h.push(...u), d = h.length, c = Promise.resolve(r); f < d; )
        c = c.then(h[f++], h[f++]);
      return c;
    }
    d = s.length;
    let w = r;
    for (; f < d; ) {
      const h = s[f++], y = s[f++];
      try {
        w = h(w);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      c = qS.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, d = u.length; f < d; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = bo(this.defaults, t);
    const r = Xb(t.baseURL, t.url, t.allowAbsoluteUrls);
    return qb(r, t.params, t.paramsSerializer);
  }
};
F.forEach(["delete", "get", "head", "options"], function(t) {
  ho.prototype[t] = function(r, n) {
    return this.request(bo(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
F.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, s) {
      return this.request(bo(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  ho.prototype[t] = r(), ho.prototype[t + "Form"] = r(!0);
});
let WN = class r_ {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(i);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, s) {
      n.reason || (n.reason = new Ja(o, a, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new r_(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function qN(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function QN(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const Ay = {
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
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ay).forEach(([e, t]) => {
  Ay[t] = e;
});
function n_(e) {
  const t = new ho(e), r = Fb(ho.prototype.request, t);
  return F.extend(r, ho.prototype, t, { allOwnKeys: !0 }), F.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return n_(bo(e, i));
  }, r;
}
const lt = n_(Gl);
lt.Axios = ho;
lt.CanceledError = Ja;
lt.CancelToken = WN;
lt.isCancel = Gb;
lt.VERSION = t_;
lt.toFormData = vd;
lt.AxiosError = he;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = qN;
lt.isAxiosError = QN;
lt.mergeConfig = bo;
lt.AxiosHeaders = sr;
lt.formToJSON = (e) => Kb(F.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = e_.getAdapter;
lt.HttpStatusCode = Ay;
lt.default = lt;
const {
  Axios: BU,
  AxiosError: HU,
  CanceledError: WU,
  isCancel: qU,
  CancelToken: QU,
  VERSION: KU,
  all: GU,
  Cancel: YU,
  isAxiosError: XU,
  spread: JU,
  toFormData: ZU,
  AxiosHeaders: e4,
  HttpStatusCode: t4,
  formToJSON: r4,
  getAdapter: n4,
  mergeConfig: i4
} = lt;
function KN(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var GN = { exports: {} };
(function(e, t) {
  (function(r, n) {
    typeof KN == "function" ? e.exports = n() : r.pluralize = n();
  })(nm, function() {
    var r = [], n = [], i = {}, o = {}, a = {};
    function s(y) {
      return typeof y == "string" ? new RegExp("^" + y + "$", "i") : y;
    }
    function l(y, m) {
      return y === m ? m : y === y.toLowerCase() ? m.toLowerCase() : y === y.toUpperCase() ? m.toUpperCase() : y[0] === y[0].toUpperCase() ? m.charAt(0).toUpperCase() + m.substr(1).toLowerCase() : m.toLowerCase();
    }
    function u(y, m) {
      return y.replace(/\$(\d{1,2})/g, function(v, p) {
        return m[p] || "";
      });
    }
    function c(y, m) {
      return y.replace(m[0], function(v, p) {
        var g = u(m[1], arguments);
        return l(v === "" ? y[p - 1] : v, g);
      });
    }
    function f(y, m, v) {
      if (!y.length || i.hasOwnProperty(y))
        return m;
      for (var p = v.length; p--; ) {
        var g = v[p];
        if (g[0].test(m)) return c(m, g);
      }
      return m;
    }
    function d(y, m, v) {
      return function(p) {
        var g = p.toLowerCase();
        return m.hasOwnProperty(g) ? l(p, g) : y.hasOwnProperty(g) ? l(p, y[g]) : f(g, p, v);
      };
    }
    function w(y, m, v, p) {
      return function(g) {
        var x = g.toLowerCase();
        return m.hasOwnProperty(x) ? !0 : y.hasOwnProperty(x) ? !1 : f(x, x, v) === x;
      };
    }
    function h(y, m, v) {
      var p = m === 1 ? h.singular(y) : h.plural(y);
      return (v ? m + " " : "") + p;
    }
    return h.plural = d(
      a,
      o,
      r
    ), h.isPlural = w(
      a,
      o,
      r
    ), h.singular = d(
      o,
      a,
      n
    ), h.isSingular = w(
      o,
      a,
      n
    ), h.addPluralRule = function(y, m) {
      r.push([s(y), m]);
    }, h.addSingularRule = function(y, m) {
      n.push([s(y), m]);
    }, h.addUncountableRule = function(y) {
      if (typeof y == "string") {
        i[y.toLowerCase()] = !0;
        return;
      }
      h.addPluralRule(y, "$0"), h.addSingularRule(y, "$0");
    }, h.addIrregularRule = function(y, m) {
      m = m.toLowerCase(), y = y.toLowerCase(), a[y] = m, o[m] = y;
    }, [
      // Pronouns.
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      // Words ending in with a consonant and `o`.
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      // Ends with `us`.
      ["genus", "genera"],
      ["viscus", "viscera"],
      // Ends with `ma`.
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      // Other irregular rules.
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(y) {
      return h.addIrregularRule(y[0], y[1]);
    }), [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(y) {
      return h.addPluralRule(y[0], y[1]);
    }), [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(y) {
      return h.addSingularRule(y[0], y[1]);
    }), [
      // Singular words with no plurals.
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      // Regexes.
      /[^aeiou]ese$/i,
      // "chinese", "japanese"
      /deer$/i,
      // "deer", "reindeer"
      /fish$/i,
      // "fish", "blowfish", "angelfish"
      /measles$/i,
      /o[iu]s$/i,
      // "carnivorous"
      /pox$/i,
      // "chickpox", "smallpox"
      /sheep$/i
    ].forEach(h.addUncountableRule), h;
  });
})(GN);
var Za = TypeError;
const YN = {}, XN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YN
}, Symbol.toStringTag, { value: "Module" })), JN = /* @__PURE__ */ s$(XN);
var Yv = typeof Map == "function" && Map.prototype, Tp = Object.getOwnPropertyDescriptor && Yv ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, vf = Yv && Tp && typeof Tp.get == "function" ? Tp.get : null, KS = Yv && Map.prototype.forEach, Xv = typeof Set == "function" && Set.prototype, Dp = Object.getOwnPropertyDescriptor && Xv ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, gf = Xv && Dp && typeof Dp.get == "function" ? Dp.get : null, GS = Xv && Set.prototype.forEach, ZN = typeof WeakMap == "function" && WeakMap.prototype, el = ZN ? WeakMap.prototype.has : null, eL = typeof WeakSet == "function" && WeakSet.prototype, tl = eL ? WeakSet.prototype.has : null, tL = typeof WeakRef == "function" && WeakRef.prototype, YS = tL ? WeakRef.prototype.deref : null, rL = Boolean.prototype.valueOf, nL = Object.prototype.toString, iL = Function.prototype.toString, oL = String.prototype.match, Jv = String.prototype.slice, mi = String.prototype.replace, aL = String.prototype.toUpperCase, XS = String.prototype.toLowerCase, i_ = RegExp.prototype.test, JS = Array.prototype.concat, hn = Array.prototype.join, sL = Array.prototype.slice, ZS = Math.floor, Fy = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ap = Object.getOwnPropertySymbols, My = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ja = typeof Symbol == "function" && typeof Symbol.iterator == "object", rl = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ja || !0) ? Symbol.toStringTag : null, o_ = Object.prototype.propertyIsEnumerable, e1 = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function t1(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || i_.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -ZS(-e) : ZS(e);
    if (n !== e) {
      var i = String(n), o = Jv.call(t, i.length + 1);
      return mi.call(i, r, "$&_") + "." + mi.call(mi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return mi.call(t, r, "$&_");
}
var Ny = JN, r1 = Ny.custom, n1 = l_(r1) ? r1 : null, a_ = {
  __proto__: null,
  double: '"',
  single: "'"
}, lL = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, wd = function e(t, r, n, i) {
  var o = r || {};
  if (An(o, "quoteStyle") && !An(a_, o.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (An(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a = An(o, "customInspect") ? o.customInspect : !0;
  if (typeof a != "boolean" && a !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (An(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (An(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return c_(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? t1(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? t1(t, u) : u;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return Ly(t) ? "[Array]" : "[Object]";
  var f = _L(o, n);
  if (typeof i > "u")
    i = [];
  else if (u_(i, t) >= 0)
    return "[Circular]";
  function d(D, L, j) {
    if (L && (i = sL.call(i), i.push(L)), j) {
      var z = {
        depth: o.depth
      };
      return An(o, "quoteStyle") && (z.quoteStyle = o.quoteStyle), e(D, z, n + 1, i);
    }
    return e(D, o, n + 1, i);
  }
  if (typeof t == "function" && !i1(t)) {
    var w = vL(t), h = Au(t, d);
    return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (h.length > 0 ? " { " + hn.call(h, ", ") + " }" : "");
  }
  if (l_(t)) {
    var y = ja ? mi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : My.call(t);
    return typeof t == "object" && !ja ? Cs(y) : y;
  }
  if (CL(t)) {
    for (var m = "<" + XS.call(String(t.nodeName)), v = t.attributes || [], p = 0; p < v.length; p++)
      m += " " + v[p].name + "=" + s_(uL(v[p].value), "double", o);
    return m += ">", t.childNodes && t.childNodes.length && (m += "..."), m += "</" + XS.call(String(t.nodeName)) + ">", m;
  }
  if (Ly(t)) {
    if (t.length === 0)
      return "[]";
    var g = Au(t, d);
    return f && !bL(g) ? "[" + Iy(g, f) + "]" : "[ " + hn.call(g, ", ") + " ]";
  }
  if (fL(t)) {
    var x = Au(t, d);
    return !("cause" in Error.prototype) && "cause" in t && !o_.call(t, "cause") ? "{ [" + String(t) + "] " + hn.call(JS.call("[cause]: " + d(t.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + hn.call(x, ", ") + " }";
  }
  if (typeof t == "object" && a) {
    if (n1 && typeof t[n1] == "function" && Ny)
      return Ny(t, { depth: c - n });
    if (a !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (gL(t)) {
    var E = [];
    return KS && KS.call(t, function(D, L) {
      E.push(d(L, t, !0) + " => " + d(D, t));
    }), o1("Map", vf.call(t), E, f);
  }
  if (xL(t)) {
    var C = [];
    return GS && GS.call(t, function(D) {
      C.push(d(D, t));
    }), o1("Set", gf.call(t), C, f);
  }
  if (wL(t))
    return Fp("WeakMap");
  if (EL(t))
    return Fp("WeakSet");
  if (SL(t))
    return Fp("WeakRef");
  if (pL(t))
    return Cs(d(Number(t)));
  if (yL(t))
    return Cs(d(Fy.call(t)));
  if (hL(t))
    return Cs(rL.call(t));
  if (dL(t))
    return Cs(d(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof globalThis < "u" && t === globalThis)
    return "{ [object globalThis] }";
  if (!cL(t) && !i1(t)) {
    var S = Au(t, d), b = e1 ? e1(t) === Object.prototype : t instanceof Object || t.constructor === Object, $ = t instanceof Object ? "" : "null prototype", k = !b && rl && Object(t) === t && rl in t ? Jv.call(Mi(t), 8, -1) : $ ? "Object" : "", _ = b || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", P = _ + (k || $ ? "[" + hn.call(JS.call([], k || [], $ || []), ": ") + "] " : "");
    return S.length === 0 ? P + "{}" : f ? P + "{" + Iy(S, f) + "}" : P + "{ " + hn.call(S, ", ") + " }";
  }
  return String(t);
};
function s_(e, t, r) {
  var n = r.quoteStyle || t, i = a_[n];
  return i + e + i;
}
function uL(e) {
  return mi.call(String(e), /"/g, "&quot;");
}
function Do(e) {
  return !rl || !(typeof e == "object" && (rl in e || typeof e[rl] < "u"));
}
function Ly(e) {
  return Mi(e) === "[object Array]" && Do(e);
}
function cL(e) {
  return Mi(e) === "[object Date]" && Do(e);
}
function i1(e) {
  return Mi(e) === "[object RegExp]" && Do(e);
}
function fL(e) {
  return Mi(e) === "[object Error]" && Do(e);
}
function dL(e) {
  return Mi(e) === "[object String]" && Do(e);
}
function pL(e) {
  return Mi(e) === "[object Number]" && Do(e);
}
function hL(e) {
  return Mi(e) === "[object Boolean]" && Do(e);
}
function l_(e) {
  if (ja)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !My)
    return !1;
  try {
    return My.call(e), !0;
  } catch {
  }
  return !1;
}
function yL(e) {
  if (!e || typeof e != "object" || !Fy)
    return !1;
  try {
    return Fy.call(e), !0;
  } catch {
  }
  return !1;
}
var mL = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function An(e, t) {
  return mL.call(e, t);
}
function Mi(e) {
  return nL.call(e);
}
function vL(e) {
  if (e.name)
    return e.name;
  var t = oL.call(iL.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function u_(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function gL(e) {
  if (!vf || !e || typeof e != "object")
    return !1;
  try {
    vf.call(e);
    try {
      gf.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function wL(e) {
  if (!el || !e || typeof e != "object")
    return !1;
  try {
    el.call(e, el);
    try {
      tl.call(e, tl);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function SL(e) {
  if (!YS || !e || typeof e != "object")
    return !1;
  try {
    return YS.call(e), !0;
  } catch {
  }
  return !1;
}
function xL(e) {
  if (!gf || !e || typeof e != "object")
    return !1;
  try {
    gf.call(e);
    try {
      vf.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function EL(e) {
  if (!tl || !e || typeof e != "object")
    return !1;
  try {
    tl.call(e, tl);
    try {
      el.call(e, el);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function CL(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function c_(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return c_(Jv.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = lL[t.quoteStyle || "single"];
  i.lastIndex = 0;
  var o = mi.call(mi.call(e, i, "\\$1"), /[\x00-\x1f]/g, kL);
  return s_(o, "single", t);
}
function kL(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + aL.call(t.toString(16));
}
function Cs(e) {
  return "Object(" + e + ")";
}
function Fp(e) {
  return e + " { ? }";
}
function o1(e, t, r, n) {
  var i = n ? Iy(r, n) : hn.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function bL(e) {
  for (var t = 0; t < e.length; t++)
    if (u_(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function _L(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = hn.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: hn.call(Array(t + 1), r)
  };
}
function Iy(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + hn.call(e, "," + r) + `
` + t.prev;
}
function Au(e, t) {
  var r = Ly(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = An(e, i) ? t(e[i], e) : "";
  }
  var o = typeof Ap == "function" ? Ap(e) : [], a;
  if (ja) {
    a = {};
    for (var s = 0; s < o.length; s++)
      a["$" + o[s]] = o[s];
  }
  for (var l in e)
    An(e, l) && (r && String(Number(l)) === l && l < e.length || ja && a["$" + l] instanceof Symbol || (i_.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Ap == "function")
    for (var u = 0; u < o.length; u++)
      o_.call(e, o[u]) && n.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
  return n;
}
var $L = wd, OL = Za, Sd = function(e, t, r) {
  for (var n = e, i; (i = n.next) != null; n = i)
    if (i.key === t)
      return n.next = i.next, r || (i.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = i), i;
}, RL = function(e, t) {
  if (e) {
    var r = Sd(e, t);
    return r && r.value;
  }
}, PL = function(e, t, r) {
  var n = Sd(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, TL = function(e, t) {
  return e ? !!Sd(e, t) : !1;
}, DL = function(e, t) {
  if (e)
    return Sd(e, t, !0);
}, AL = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new OL("Side channel does not contain " + $L(n));
    },
    delete: function(n) {
      var i = t && t.next, o = DL(t, n);
      return o && i && i === o && (t = void 0), !!o;
    },
    get: function(n) {
      return RL(t, n);
    },
    has: function(n) {
      return TL(t, n);
    },
    set: function(n, i) {
      t || (t = {
        next: void 0
      }), PL(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        i
      );
    }
  };
  return r;
}, f_ = Object, FL = Error, ML = EvalError, NL = RangeError, LL = ReferenceError, IL = SyntaxError, jL = URIError, zL = Math.abs, UL = Math.floor, VL = Math.max, BL = Math.min, HL = Math.pow, WL = Math.round, qL = Number.isNaN || function(t) {
  return t !== t;
}, QL = qL, KL = function(t) {
  return QL(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, GL = Object.getOwnPropertyDescriptor, vc = GL;
if (vc)
  try {
    vc([], "length");
  } catch {
    vc = null;
  }
var d_ = vc, gc = Object.defineProperty || !1;
if (gc)
  try {
    gc({}, "a", { value: 1 });
  } catch {
    gc = !1;
  }
var YL = gc, Mp, a1;
function XL() {
  return a1 || (a1 = 1, Mp = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Mp;
}
var Np, s1;
function JL() {
  if (s1) return Np;
  s1 = 1;
  var e = typeof Symbol < "u" && Symbol, t = XL();
  return Np = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Np;
}
var Lp, l1;
function p_() {
  return l1 || (l1 = 1, Lp = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Lp;
}
var Ip, u1;
function h_() {
  if (u1) return Ip;
  u1 = 1;
  var e = f_;
  return Ip = e.getPrototypeOf || null, Ip;
}
var jp, c1;
function ZL() {
  if (c1) return jp;
  c1 = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(l, u) {
    for (var c = [], f = 0; f < l.length; f += 1)
      c[f] = l[f];
    for (var d = 0; d < u.length; d += 1)
      c[d + l.length] = u[d];
    return c;
  }, o = function(l, u) {
    for (var c = [], f = u, d = 0; f < l.length; f += 1, d += 1)
      c[d] = l[f];
    return c;
  }, a = function(s, l) {
    for (var u = "", c = 0; c < s.length; c += 1)
      u += s[c], c + 1 < s.length && (u += l);
    return u;
  };
  return jp = function(l) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var c = o(arguments, 1), f, d = function() {
      if (this instanceof f) {
        var v = u.apply(
          this,
          i(c, arguments)
        );
        return Object(v) === v ? v : this;
      }
      return u.apply(
        l,
        i(c, arguments)
      );
    }, w = r(0, u.length - c.length), h = [], y = 0; y < w; y++)
      h[y] = "$" + y;
    if (f = Function("binder", "return function (" + a(h, ",") + "){ return binder.apply(this,arguments); }")(d), u.prototype) {
      var m = function() {
      };
      m.prototype = u.prototype, f.prototype = new m(), m.prototype = null;
    }
    return f;
  }, jp;
}
var zp, f1;
function xd() {
  if (f1) return zp;
  f1 = 1;
  var e = ZL();
  return zp = Function.prototype.bind || e, zp;
}
var Up, d1;
function Zv() {
  return d1 || (d1 = 1, Up = Function.prototype.call), Up;
}
var Vp, p1;
function y_() {
  return p1 || (p1 = 1, Vp = Function.prototype.apply), Vp;
}
var eI = typeof Reflect < "u" && Reflect && Reflect.apply, tI = xd(), rI = y_(), nI = Zv(), iI = eI, oI = iI || tI.call(nI, rI), aI = xd(), sI = Za, lI = Zv(), uI = oI, m_ = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new sI("a function is required");
  return uI(aI, lI, t);
}, Bp, h1;
function cI() {
  if (h1) return Bp;
  h1 = 1;
  var e = m_, t = d_, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return Bp = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, Bp;
}
var Hp, y1;
function fI() {
  if (y1) return Hp;
  y1 = 1;
  var e = p_(), t = h_(), r = cI();
  return Hp = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Hp;
}
var Wp, m1;
function dI() {
  if (m1) return Wp;
  m1 = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = xd();
  return Wp = r.call(e, t), Wp;
}
var xe, pI = f_, hI = FL, yI = ML, mI = NL, vI = LL, za = IL, ka = Za, gI = jL, wI = zL, SI = UL, xI = VL, EI = BL, CI = HL, kI = WL, bI = KL, v_ = Function, qp = function(e) {
  try {
    return v_('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Pl = d_, _I = YL, Qp = function() {
  throw new ka();
}, $I = Pl ? function() {
  try {
    return arguments.callee, Qp;
  } catch {
    try {
      return Pl(arguments, "callee").get;
    } catch {
      return Qp;
    }
  }
}() : Qp, Go = JL()(), ht = fI(), OI = h_(), RI = p_(), g_ = y_(), Yl = Zv(), ra = {}, PI = typeof Uint8Array > "u" || !ht ? xe : ht(Uint8Array), yo = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? xe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? xe : ArrayBuffer,
  "%ArrayIteratorPrototype%": Go && ht ? ht([][Symbol.iterator]()) : xe,
  "%AsyncFromSyncIteratorPrototype%": xe,
  "%AsyncFunction%": ra,
  "%AsyncGenerator%": ra,
  "%AsyncGeneratorFunction%": ra,
  "%AsyncIteratorPrototype%": ra,
  "%Atomics%": typeof Atomics > "u" ? xe : Atomics,
  "%BigInt%": typeof BigInt > "u" ? xe : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? xe : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? xe : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? xe : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": hI,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": yI,
  "%Float16Array%": typeof Float16Array > "u" ? xe : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? xe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? xe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? xe : FinalizationRegistry,
  "%Function%": v_,
  "%GeneratorFunction%": ra,
  "%Int8Array%": typeof Int8Array > "u" ? xe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? xe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? xe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Go && ht ? ht(ht([][Symbol.iterator]())) : xe,
  "%JSON%": typeof JSON == "object" ? JSON : xe,
  "%Map%": typeof Map > "u" ? xe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Go || !ht ? xe : ht((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": pI,
  "%Object.getOwnPropertyDescriptor%": Pl,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? xe : Promise,
  "%Proxy%": typeof Proxy > "u" ? xe : Proxy,
  "%RangeError%": mI,
  "%ReferenceError%": vI,
  "%Reflect%": typeof Reflect > "u" ? xe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? xe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Go || !ht ? xe : ht((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? xe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Go && ht ? ht(""[Symbol.iterator]()) : xe,
  "%Symbol%": Go ? Symbol : xe,
  "%SyntaxError%": za,
  "%ThrowTypeError%": $I,
  "%TypedArray%": PI,
  "%TypeError%": ka,
  "%Uint8Array%": typeof Uint8Array > "u" ? xe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? xe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? xe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? xe : Uint32Array,
  "%URIError%": gI,
  "%WeakMap%": typeof WeakMap > "u" ? xe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? xe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? xe : WeakSet,
  "%Function.prototype.call%": Yl,
  "%Function.prototype.apply%": g_,
  "%Object.defineProperty%": _I,
  "%Object.getPrototypeOf%": OI,
  "%Math.abs%": wI,
  "%Math.floor%": SI,
  "%Math.max%": xI,
  "%Math.min%": EI,
  "%Math.pow%": CI,
  "%Math.round%": kI,
  "%Math.sign%": bI,
  "%Reflect.getPrototypeOf%": RI
};
if (ht)
  try {
    null.error;
  } catch (e) {
    var TI = ht(ht(e));
    yo["%Error.prototype%"] = TI;
  }
var DI = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = qp("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = qp("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = qp("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && ht && (r = ht(i.prototype));
  }
  return yo[t] = r, r;
}, v1 = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Xl = xd(), wf = dI(), AI = Xl.call(Yl, Array.prototype.concat), FI = Xl.call(g_, Array.prototype.splice), g1 = Xl.call(Yl, String.prototype.replace), Sf = Xl.call(Yl, String.prototype.slice), MI = Xl.call(Yl, RegExp.prototype.exec), NI = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, LI = /\\(\\)?/g, II = function(t) {
  var r = Sf(t, 0, 1), n = Sf(t, -1);
  if (r === "%" && n !== "%")
    throw new za("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new za("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return g1(t, NI, function(o, a, s, l) {
    i[i.length] = s ? g1(l, LI, "$1") : a || o;
  }), i;
}, jI = function(t, r) {
  var n = t, i;
  if (wf(v1, n) && (i = v1[n], n = "%" + i[0] + "%"), wf(yo, n)) {
    var o = yo[n];
    if (o === ra && (o = DI(n)), typeof o > "u" && !r)
      throw new ka("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: o
    };
  }
  throw new za("intrinsic " + t + " does not exist!");
}, eg = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new ka("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ka('"allowMissing" argument must be a boolean');
  if (MI(/^%?[^%]*%?$/, t) === null)
    throw new za("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = II(t), i = n.length > 0 ? n[0] : "", o = jI("%" + i + "%", r), a = o.name, s = o.value, l = !1, u = o.alias;
  u && (i = u[0], FI(n, AI([0, 1], u)));
  for (var c = 1, f = !0; c < n.length; c += 1) {
    var d = n[c], w = Sf(d, 0, 1), h = Sf(d, -1);
    if ((w === '"' || w === "'" || w === "`" || h === '"' || h === "'" || h === "`") && w !== h)
      throw new za("property names with quotes must have matching quotes");
    if ((d === "constructor" || !f) && (l = !0), i += "." + d, a = "%" + i + "%", wf(yo, a))
      s = yo[a];
    else if (s != null) {
      if (!(d in s)) {
        if (!r)
          throw new ka("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Pl && c + 1 >= n.length) {
        var y = Pl(s, d);
        f = !!y, f && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[d];
      } else
        f = wf(s, d), s = s[d];
      f && !l && (yo[a] = s);
    }
  }
  return s;
}, w_ = eg, S_ = m_, zI = S_([w_("%String.prototype.indexOf%")]), x_ = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    w_(t, !!r)
  );
  return typeof n == "function" && zI(t, ".prototype.") > -1 ? S_(
    /** @type {const} */
    [n]
  ) : n;
}, UI = eg, Jl = x_, VI = wd, BI = Za, w1 = UI("%Map%", !0), HI = Jl("Map.prototype.get", !0), WI = Jl("Map.prototype.set", !0), qI = Jl("Map.prototype.has", !0), QI = Jl("Map.prototype.delete", !0), KI = Jl("Map.prototype.size", !0), E_ = !!w1 && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new BI("Side channel does not contain " + VI(n));
    },
    delete: function(n) {
      if (t) {
        var i = QI(t, n);
        return KI(t) === 0 && (t = void 0), i;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return HI(t, n);
    },
    has: function(n) {
      return t ? qI(t, n) : !1;
    },
    set: function(n, i) {
      t || (t = new w1()), WI(t, n, i);
    }
  };
  return r;
}, GI = eg, Ed = x_, YI = wd, Fu = E_, XI = Za, Yo = GI("%WeakMap%", !0), JI = Ed("WeakMap.prototype.get", !0), ZI = Ed("WeakMap.prototype.set", !0), e3 = Ed("WeakMap.prototype.has", !0), t3 = Ed("WeakMap.prototype.delete", !0), r3 = Yo ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(i) {
        if (!n.has(i))
          throw new XI("Side channel does not contain " + YI(i));
      },
      delete: function(i) {
        if (Yo && i && (typeof i == "object" || typeof i == "function")) {
          if (t)
            return t3(t, i);
        } else if (Fu && r)
          return r.delete(i);
        return !1;
      },
      get: function(i) {
        return Yo && i && (typeof i == "object" || typeof i == "function") && t ? JI(t, i) : r && r.get(i);
      },
      has: function(i) {
        return Yo && i && (typeof i == "object" || typeof i == "function") && t ? e3(t, i) : !!r && r.has(i);
      },
      set: function(i, o) {
        Yo && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new Yo()), ZI(t, i, o)) : Fu && (r || (r = Fu()), r.set(i, o));
      }
    };
    return n;
  }
) : Fu, n3 = Za, i3 = wd, o3 = AL, a3 = E_, s3 = r3, l3 = s3 || a3 || o3, u3 = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new n3("Side channel does not contain " + i3(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, i) {
      t || (t = l3()), t.set(n, i);
    }
  };
  return r;
}, c3 = String.prototype.replace, f3 = /%20/g, Kp = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, tg = {
  default: Kp.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return c3.call(e, f3, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Kp.RFC1738,
  RFC3986: Kp.RFC3986
}, d3 = tg, Gp = Object.prototype.hasOwnProperty, Xi = Array.isArray, an = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), p3 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Xi(n)) {
      for (var i = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && i.push(n[o]);
      r.obj[r.prop] = i;
    }
  }
}, C_ = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, h3 = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if (Xi(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Gp.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Xi(t) && !Xi(r) && (i = C_(t, n)), Xi(t) && Xi(r) ? (r.forEach(function(o, a) {
    if (Gp.call(t, a)) {
      var s = t[a];
      s && typeof s == "object" && o && typeof o == "object" ? t[a] = e(s, o, n) : t.push(o);
    } else
      t[a] = o;
  }), t) : Object.keys(r).reduce(function(o, a) {
    var s = r[a];
    return Gp.call(o, a) ? o[a] = e(o[a], s, n) : o[a] = s, o;
  }, i);
}, y3 = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, m3 = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Yp = 1024, v3 = function(t, r, n, i, o) {
  if (t.length === 0)
    return t;
  var a = t;
  if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)), n === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(w) {
      return "%26%23" + parseInt(w.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < a.length; l += Yp) {
    for (var u = a.length >= Yp ? a.slice(l, l + Yp) : a, c = [], f = 0; f < u.length; ++f) {
      var d = u.charCodeAt(f);
      if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || o === d3.RFC1738 && (d === 40 || d === 41)) {
        c[c.length] = u.charAt(f);
        continue;
      }
      if (d < 128) {
        c[c.length] = an[d];
        continue;
      }
      if (d < 2048) {
        c[c.length] = an[192 | d >> 6] + an[128 | d & 63];
        continue;
      }
      if (d < 55296 || d >= 57344) {
        c[c.length] = an[224 | d >> 12] + an[128 | d >> 6 & 63] + an[128 | d & 63];
        continue;
      }
      f += 1, d = 65536 + ((d & 1023) << 10 | u.charCodeAt(f) & 1023), c[c.length] = an[240 | d >> 18] + an[128 | d >> 12 & 63] + an[128 | d >> 6 & 63] + an[128 | d & 63];
    }
    s += c.join("");
  }
  return s;
}, g3 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var o = r[i], a = o.obj[o.prop], s = Object.keys(a), l = 0; l < s.length; ++l) {
      var u = s[l], c = a[u];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (r.push({ obj: a, prop: u }), n.push(c));
    }
  return p3(r), t;
}, w3 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, S3 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, x3 = function(t, r) {
  return [].concat(t, r);
}, E3 = function(t, r) {
  if (Xi(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, k_ = {
  arrayToObject: C_,
  assign: y3,
  combine: x3,
  compact: g3,
  decode: m3,
  encode: v3,
  isBuffer: S3,
  isRegExp: w3,
  maybeMap: E3,
  merge: h3
}, b_ = u3, wc = k_, nl = tg, C3 = Object.prototype.hasOwnProperty, __ = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, dn = Array.isArray, k3 = Array.prototype.push, $_ = function(e, t) {
  k3.apply(e, dn(t) ? t : [t]);
}, b3 = Date.prototype.toISOString, S1 = nl.default, ct = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  commaRoundTrip: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: wc.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: S1,
  formatter: nl.formatters[S1],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return b3.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, _3 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Xp = {}, $3 = function e(t, r, n, i, o, a, s, l, u, c, f, d, w, h, y, m, v, p) {
  for (var g = t, x = p, E = 0, C = !1; (x = x.get(Xp)) !== void 0 && !C; ) {
    var S = x.get(t);
    if (E += 1, typeof S < "u") {
      if (S === E)
        throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof x.get(Xp) > "u" && (E = 0);
  }
  if (typeof c == "function" ? g = c(r, g) : g instanceof Date ? g = w(g) : n === "comma" && dn(g) && (g = wc.maybeMap(g, function(G) {
    return G instanceof Date ? w(G) : G;
  })), g === null) {
    if (a)
      return u && !m ? u(r, ct.encoder, v, "key", h) : r;
    g = "";
  }
  if (_3(g) || wc.isBuffer(g)) {
    if (u) {
      var b = m ? r : u(r, ct.encoder, v, "key", h);
      return [y(b) + "=" + y(u(g, ct.encoder, v, "value", h))];
    }
    return [y(r) + "=" + y(String(g))];
  }
  var $ = [];
  if (typeof g > "u")
    return $;
  var k;
  if (n === "comma" && dn(g))
    m && u && (g = wc.maybeMap(g, u)), k = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (dn(c))
    k = c;
  else {
    var _ = Object.keys(g);
    k = f ? _.sort(f) : _;
  }
  var P = l ? String(r).replace(/\./g, "%2E") : String(r), D = i && dn(g) && g.length === 1 ? P + "[]" : P;
  if (o && dn(g) && g.length === 0)
    return D + "[]";
  for (var L = 0; L < k.length; ++L) {
    var j = k[L], z = typeof j == "object" && j && typeof j.value < "u" ? j.value : g[j];
    if (!(s && z === null)) {
      var B = d && l ? String(j).replace(/\./g, "%2E") : String(j), M = dn(g) ? typeof n == "function" ? n(D, B) : D : D + (d ? "." + B : "[" + B + "]");
      p.set(t, E);
      var q = b_();
      q.set(Xp, p), $_($, e(
        z,
        M,
        n,
        i,
        o,
        a,
        s,
        l,
        n === "comma" && m && dn(g) ? null : u,
        c,
        f,
        d,
        w,
        h,
        y,
        m,
        v,
        q
      ));
    }
  }
  return $;
}, O3 = function(t) {
  if (!t)
    return ct;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || ct.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = nl.default;
  if (typeof t.format < "u") {
    if (!C3.call(nl.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = nl.formatters[n], o = ct.filter;
  (typeof t.filter == "function" || dn(t.filter)) && (o = t.filter);
  var a;
  if (t.arrayFormat in __ ? a = t.arrayFormat : "indices" in t ? a = t.indices ? "indices" : "repeat" : a = ct.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : ct.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ct.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : ct.allowEmptyArrays,
    arrayFormat: a,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ct.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? ct.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ct.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : ct.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : ct.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ct.encodeValuesOnly,
    filter: o,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ct.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ct.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ct.strictNullHandling
  };
}, R3 = function(e, t) {
  var r = e, n = O3(t), i, o;
  typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : dn(n.filter) && (o = n.filter, i = o);
  var a = [];
  if (typeof r != "object" || r === null)
    return "";
  var s = __[n.arrayFormat], l = s === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = b_(), c = 0; c < i.length; ++c) {
    var f = i[c], d = r[f];
    n.skipNulls && d === null || $_(a, $3(
      d,
      f,
      s,
      l,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      u
    ));
  }
  var w = a.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), w.length > 0 ? h + w : "";
}, _o = k_, jy = Object.prototype.hasOwnProperty, x1 = Array.isArray, et = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: _o.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1,
  throwOnLimitExceeded: !1
}, P3 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, O_ = function(e, t, r) {
  if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1)
    return e.split(",");
  if (t.throwOnLimitExceeded && r >= t.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return e;
}, T3 = "utf8=%26%2310003%3B", D3 = "utf8=%E2%9C%93", A3 = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = i.split(
    r.delimiter,
    r.throwOnLimitExceeded ? o + 1 : o
  );
  if (r.throwOnLimitExceeded && a.length > o)
    throw new RangeError("Parameter limit exceeded. Only " + o + " parameter" + (o === 1 ? "" : "s") + " allowed.");
  var s = -1, l, u = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < a.length; ++l)
      a[l].indexOf("utf8=") === 0 && (a[l] === D3 ? u = "utf-8" : a[l] === T3 && (u = "iso-8859-1"), s = l, l = a.length);
  for (l = 0; l < a.length; ++l)
    if (l !== s) {
      var c = a[l], f = c.indexOf("]="), d = f === -1 ? c.indexOf("=") : f + 1, w, h;
      d === -1 ? (w = r.decoder(c, et.decoder, u, "key"), h = r.strictNullHandling ? null : "") : (w = r.decoder(c.slice(0, d), et.decoder, u, "key"), h = _o.maybeMap(
        O_(
          c.slice(d + 1),
          r,
          x1(n[w]) ? n[w].length : 0
        ),
        function(m) {
          return r.decoder(m, et.decoder, u, "value");
        }
      )), h && r.interpretNumericEntities && u === "iso-8859-1" && (h = P3(String(h))), c.indexOf("[]=") > -1 && (h = x1(h) ? [h] : h);
      var y = jy.call(n, w);
      y && r.duplicates === "combine" ? n[w] = _o.combine(n[w], h) : (!y || r.duplicates === "last") && (n[w] = h);
    }
  return n;
}, F3 = function(e, t, r, n) {
  var i = 0;
  if (e.length > 0 && e[e.length - 1] === "[]") {
    var o = e.slice(0, -1).join("");
    i = Array.isArray(t) && t[o] ? t[o].length : 0;
  }
  for (var a = n ? t : O_(t, r, i), s = e.length - 1; s >= 0; --s) {
    var l, u = e[s];
    if (u === "[]" && r.parseArrays)
      l = r.allowEmptyArrays && (a === "" || r.strictNullHandling && a === null) ? [] : _o.combine([], a);
    else {
      l = r.plainObjects ? { __proto__: null } : {};
      var c = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, f = r.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, d = parseInt(f, 10);
      !r.parseArrays && f === "" ? l = { 0: a } : !isNaN(d) && u !== f && String(d) === f && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (l = [], l[d] = a) : f !== "__proto__" && (l[f] = a);
    }
    a = l;
  }
  return a;
}, M3 = function(t, r, n, i) {
  if (t) {
    var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, a = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = n.depth > 0 && a.exec(o), u = l ? o.slice(0, l.index) : o, c = [];
    if (u) {
      if (!n.plainObjects && jy.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      c.push(u);
    }
    for (var f = 0; n.depth > 0 && (l = s.exec(o)) !== null && f < n.depth; ) {
      if (f += 1, !n.plainObjects && jy.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(l[1]);
    }
    if (l) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      c.push("[" + o.slice(l.index) + "]");
    }
    return F3(c, r, n, i);
  }
}, N3 = function(t) {
  if (!t)
    return et;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof t.throwOnLimitExceeded < "u" && typeof t.throwOnLimitExceeded != "boolean")
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var r = typeof t.charset > "u" ? et.charset : t.charset, n = typeof t.duplicates > "u" ? et.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : et.allowDots : !!t.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : et.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : et.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : et.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : et.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : et.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : et.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : et.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : et.decoder,
    delimiter: typeof t.delimiter == "string" || _o.isRegExp(t.delimiter) ? t.delimiter : et.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : et.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : et.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : et.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : et.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : et.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : et.strictNullHandling,
    throwOnLimitExceeded: typeof t.throwOnLimitExceeded == "boolean" ? t.throwOnLimitExceeded : !1
  };
}, L3 = function(e, t) {
  var r = N3(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? A3(e, r) : e, i = r.plainObjects ? { __proto__: null } : {}, o = Object.keys(n), a = 0; a < o.length; ++a) {
    var s = o[a], l = M3(s, n[s], r, typeof e == "string");
    i = _o.merge(i, l, r);
  }
  return r.allowSparse === !0 ? i : _o.compact(i);
}, I3 = R3, j3 = L3, z3 = tg, o4 = {
  formats: z3,
  parse: j3,
  stringify: I3
}, Cd = { exports: {} }, R_ = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ả: "A",
  Ạ: "A",
  Ẩ: "A",
  Ẫ: "A",
  Ậ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ẻ: "E",
  Ẽ: "E",
  Ẹ: "E",
  Ể: "E",
  Ễ: "E",
  Ệ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ỉ: "I",
  Ị: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ỏ: "O",
  Ọ: "O",
  Ổ: "O",
  Ỗ: "O",
  Ộ: "O",
  Ờ: "O",
  Ở: "O",
  Ỡ: "O",
  Ớ: "O",
  Ợ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ủ: "U",
  Ụ: "U",
  Ử: "U",
  Ữ: "U",
  Ự: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ả: "a",
  ạ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ỉ: "i",
  ị: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ỏ: "o",
  ọ: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ờ: "o",
  ở: "o",
  ỡ: "o",
  ớ: "o",
  ợ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ủ: "u",
  ụ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z",
  й: "и",
  Й: "И",
  ё: "е",
  Ё: "Е"
}, P_ = Object.keys(R_).join("|"), U3 = new RegExp(P_, "g"), V3 = new RegExp(P_, "");
function B3(e) {
  return R_[e];
}
var T_ = function(e) {
  return e.replace(U3, B3);
}, H3 = function(e) {
  return !!e.match(V3);
};
Cd.exports = T_;
Cd.exports.has = H3;
Cd.exports.remove = T_;
var W3 = Cd.exports;
const q3 = /* @__PURE__ */ Ri(W3);
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const Xt = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
}, Q3 = (e, t) => String(e.rankedValue).localeCompare(String(t.rankedValue));
function K3(e, t, r) {
  r === void 0 && (r = {});
  const {
    keys: n,
    threshold: i = Xt.MATCHES,
    baseSort: o = Q3,
    sorter: a = (u) => u.sort((c, f) => J3(c, f, o))
  } = r, s = e.reduce(l, []);
  return a(s).map((u) => {
    let {
      item: c
    } = u;
    return c;
  });
  function l(u, c, f) {
    const d = G3(c, n, t, r), {
      rank: w,
      keyThreshold: h = i
    } = d;
    return w >= h && u.push({
      ...d,
      item: c,
      index: f
    }), u;
  }
}
K3.rankings = Xt;
function G3(e, t, r, n) {
  if (!t) {
    const o = e;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: o,
      rank: E1(o, r, n),
      keyIndex: -1,
      keyThreshold: n.threshold
    };
  }
  return tj(e, t).reduce((o, a, s) => {
    let {
      rank: l,
      rankedValue: u,
      keyIndex: c,
      keyThreshold: f
    } = o, {
      itemValue: d,
      attributes: w
    } = a, h = E1(d, r, n), y = u;
    const {
      minRanking: m,
      maxRanking: v,
      threshold: p
    } = w;
    return h < m && h >= Xt.MATCHES ? h = m : h > v && (h = v), h > l && (l = h, c = s, f = p, y = d), {
      rankedValue: y,
      rank: l,
      keyIndex: c,
      keyThreshold: f
    };
  }, {
    rankedValue: e,
    rank: Xt.NO_MATCH,
    keyIndex: -1,
    keyThreshold: n.threshold
  });
}
function E1(e, t, r) {
  return e = C1(e, r), t = C1(t, r), t.length > e.length ? Xt.NO_MATCH : e === t ? Xt.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? Xt.EQUAL : e.startsWith(t) ? Xt.STARTS_WITH : e.includes(` ${t}`) ? Xt.WORD_STARTS_WITH : e.includes(t) ? Xt.CONTAINS : t.length === 1 ? Xt.NO_MATCH : Y3(e).includes(t) ? Xt.ACRONYM : X3(e, t));
}
function Y3(e) {
  let t = "";
  return e.split(" ").forEach((n) => {
    n.split("-").forEach((o) => {
      t += o.substr(0, 1);
    });
  }), t;
}
function X3(e, t) {
  let r = 0;
  function n(c, f, d) {
    for (let w = d, h = f.length; w < h; w++)
      if (f[w] === c)
        return r += 1, w + 1;
    return -1;
  }
  let i = 0;
  function o(c) {
    const f = 1 / c, d = r / t.length, w = (t.length - i) / t.length;
    return Xt.MATCHES + d * f * w;
  }
  let a = 0, s = 0, l = 0;
  for (let c = 0, f = t.length; c < f; c++) {
    const d = t[c];
    if (l = n(d, e, s), l > -1)
      s = l, c === 0 && (a = s);
    else {
      if (i > 0 || t.length <= 3)
        return Xt.NO_MATCH;
      i += 1;
    }
  }
  const u = s - a;
  return o(u);
}
function J3(e, t, r) {
  const {
    rank: o,
    keyIndex: a
  } = e, {
    rank: s,
    keyIndex: l
  } = t;
  return o === s ? a === l ? r(e, t) : a < l ? -1 : 1 : o > s ? -1 : 1;
}
function C1(e, t) {
  let {
    keepDiacritics: r
  } = t;
  return e = `${e}`, r || (e = q3(e)), e;
}
function Z3(e, t) {
  typeof t == "object" && (t = t.key);
  let r;
  if (typeof t == "function")
    r = t(e);
  else if (e == null)
    r = null;
  else if (Object.hasOwnProperty.call(e, t))
    r = e[t];
  else {
    if (t.includes("."))
      return ej(t, e);
    r = null;
  }
  return r == null ? [] : Array.isArray(r) ? r : [String(r)];
}
function ej(e, t) {
  const r = e.split(".");
  let n = [t];
  for (let i = 0, o = r.length; i < o; i++) {
    const a = r[i];
    let s = [];
    for (let l = 0, u = n.length; l < u; l++) {
      const c = n[l];
      if (c != null)
        if (Object.hasOwnProperty.call(c, a)) {
          const f = c[a];
          f != null && s.push(f);
        } else a === "*" && (s = s.concat(c));
    }
    n = s;
  }
  return Array.isArray(n[0]) ? [].concat(...n) : n;
}
function tj(e, t) {
  const r = [];
  for (let n = 0, i = t.length; n < i; n++) {
    const o = t[n], a = rj(o), s = Z3(e, o);
    for (let l = 0, u = s.length; l < u; l++)
      r.push({
        itemValue: s[l],
        attributes: a
      });
  }
  return r;
}
const k1 = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function rj(e) {
  return typeof e == "string" ? k1 : {
    ...k1,
    ...e
  };
}
const Ns = {}, b1 = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e, _1 = (e) => "init" in e, Jp = (e) => !!e.write, $1 = (e) => "v" in e || "e" in e, Mu = (e) => {
  if ("e" in e)
    throw e.e;
  if ((Ns ? "production" : void 0) !== "production" && !("v" in e))
    throw new Error("[Bug] atom state is not initialized");
  return e.v;
}, xf = /* @__PURE__ */ new WeakMap(), O1 = (e) => {
  var t;
  return Ef(e) && !!((t = xf.get(e)) != null && t[0]);
}, nj = (e) => {
  const t = xf.get(e);
  t?.[0] && (t[0] = !1, t[1].forEach((r) => r()));
}, D_ = (e, t) => {
  let r = xf.get(e);
  if (!r) {
    r = [!0, /* @__PURE__ */ new Set()], xf.set(e, r);
    const n = () => {
      r[0] = !1;
    };
    e.then(n, n);
  }
  r[1].add(t);
}, Ef = (e) => typeof e?.then == "function", A_ = (e, t, r) => {
  r.p.has(e) || (r.p.add(e), t.then(
    () => {
      r.p.delete(e);
    },
    () => {
      r.p.delete(e);
    }
  ));
}, Zp = (e, t, r) => {
  const n = r(e), i = "v" in n, o = n.v;
  if (Ef(t))
    for (const a of n.d.keys())
      A_(e, t, r(a));
  n.v = t, delete n.e, (!i || !Object.is(o, n.v)) && (++n.n, Ef(o) && nj(o));
}, R1 = (e, t, r) => {
  var n;
  const i = /* @__PURE__ */ new Set();
  for (const o of ((n = r.get(e)) == null ? void 0 : n.t) || [])
    r.has(o) && i.add(o);
  for (const o of t.p)
    i.add(o);
  return i;
}, ij = () => {
  const e = /* @__PURE__ */ new Set(), t = () => {
    e.forEach((r) => r());
  };
  return t.add = (r) => (e.add(r), () => {
    e.delete(r);
  }), t;
}, eh = () => {
  const e = {}, t = /* @__PURE__ */ new WeakMap(), r = (n) => {
    var i, o;
    (i = t.get(e)) == null || i.forEach((a) => a(n)), (o = t.get(n)) == null || o.forEach((a) => a());
  };
  return r.add = (n, i) => {
    const o = n || e, a = (t.has(o) ? t : t.set(o, /* @__PURE__ */ new Set())).get(o);
    return a.add(i), () => {
      a?.delete(i), a.size || t.delete(o);
    };
  }, r;
}, oj = (e) => (e.c || (e.c = eh()), e.m || (e.m = eh()), e.u || (e.u = eh()), e.f || (e.f = ij()), e), aj = Symbol(), sj = (e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), a = {}, s = (d, ...w) => d.read(...w), l = (d, ...w) => d.write(...w), u = (d, w) => {
  var h;
  return (h = d.unstable_onInit) == null ? void 0 : h.call(d, w);
}, c = (d, w) => {
  var h;
  return (h = d.onMount) == null ? void 0 : h.call(d, w);
}, ...f) => {
  const d = f[0] || ((S) => {
    if ((Ns ? "production" : void 0) !== "production" && !S)
      throw new Error("Atom is undefined or null");
    let b = e.get(S);
    return b || (b = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 }, e.set(S, b), u?.(S, C)), b;
  }), w = f[1] || (() => {
    const S = [], b = ($) => {
      try {
        $();
      } catch (k) {
        S.push(k);
      }
    };
    do {
      a.f && b(a.f);
      const $ = /* @__PURE__ */ new Set(), k = $.add.bind($);
      n.forEach((_) => {
        var P;
        return (P = t.get(_)) == null ? void 0 : P.l.forEach(k);
      }), n.clear(), o.forEach(k), o.clear(), i.forEach(k), i.clear(), $.forEach(b), n.size && h();
    } while (n.size || o.size || i.size);
    if (S.length)
      throw new AggregateError(S);
  }), h = f[2] || (() => {
    const S = [], b = /* @__PURE__ */ new WeakSet(), $ = /* @__PURE__ */ new WeakSet(), k = Array.from(n);
    for (; k.length; ) {
      const _ = k[k.length - 1], P = d(_);
      if ($.has(_)) {
        k.pop();
        continue;
      }
      if (b.has(_)) {
        if (r.get(_) === P.n)
          S.push([_, P]);
        else if ((Ns ? "production" : void 0) !== "production" && r.has(_))
          throw new Error("[Bug] invalidated atom exists");
        $.add(_), k.pop();
        continue;
      }
      b.add(_);
      for (const D of R1(_, P, t))
        b.has(D) || k.push(D);
    }
    for (let _ = S.length - 1; _ >= 0; --_) {
      const [P, D] = S[_];
      let L = !1;
      for (const j of D.d.keys())
        if (j !== P && n.has(j)) {
          L = !0;
          break;
        }
      L && (y(P), p(P)), r.delete(P);
    }
  }), y = f[3] || ((S) => {
    var b;
    const $ = d(S);
    if ($1($) && (t.has(S) && r.get(S) !== $.n || Array.from($.d).every(
      ([B, M]) => (
        // Recursively, read the atom state of the dependency, and
        // check if the atom epoch number is unchanged
        y(B).n === M
      )
    )))
      return $;
    $.d.clear();
    let k = !0;
    const _ = () => {
      t.has(S) && (p(S), h(), w());
    }, P = (B) => {
      var M;
      if (b1(S, B)) {
        const G = d(B);
        if (!$1(G))
          if (_1(B))
            Zp(B, B.init, d);
          else
            throw new Error("no atom init");
        return Mu(G);
      }
      const q = y(B);
      try {
        return Mu(q);
      } finally {
        $.d.set(B, q.n), O1($.v) && A_(S, $.v, q), (M = t.get(B)) == null || M.t.add(S), k || _();
      }
    };
    let D, L;
    const j = {
      get signal() {
        return D || (D = new AbortController()), D.signal;
      },
      get setSelf() {
        return (Ns ? "production" : void 0) !== "production" && !Jp(S) && console.warn("setSelf function cannot be used with read-only atom"), !L && Jp(S) && (L = (...B) => {
          if ((Ns ? "production" : void 0) !== "production" && k && console.warn("setSelf function cannot be called in sync"), !k)
            try {
              return v(S, ...B);
            } finally {
              h(), w();
            }
        }), L;
      }
    }, z = $.n;
    try {
      const B = s(S, P, j);
      return Zp(S, B, d), Ef(B) && (D_(B, () => D?.abort()), B.then(
        _,
        _
      )), $;
    } catch (B) {
      return delete $.v, $.e = B, ++$.n, $;
    } finally {
      k = !1, z !== $.n && r.get(S) === z && (r.set(S, $.n), n.add(S), (b = a.c) == null || b.call(a, S));
    }
  }), m = f[4] || ((S) => {
    const b = [S];
    for (; b.length; ) {
      const $ = b.pop(), k = d($);
      for (const _ of R1($, k, t)) {
        const P = d(_);
        r.set(_, P.n), b.push(_);
      }
    }
  }), v = f[5] || ((S, ...b) => {
    let $ = !0;
    const k = (P) => Mu(y(P)), _ = (P, ...D) => {
      var L;
      const j = d(P);
      try {
        if (b1(S, P)) {
          if (!_1(P))
            throw new Error("atom not writable");
          const z = j.n, B = D[0];
          Zp(P, B, d), p(P), z !== j.n && (n.add(P), (L = a.c) == null || L.call(a, P), m(P));
          return;
        } else
          return v(P, ...D);
      } finally {
        $ || (h(), w());
      }
    };
    try {
      return l(S, k, _, ...b);
    } finally {
      $ = !1;
    }
  }), p = f[6] || ((S) => {
    var b;
    const $ = d(S), k = t.get(S);
    if (k && !O1($.v)) {
      for (const [_, P] of $.d)
        if (!k.d.has(_)) {
          const D = d(_);
          g(_).t.add(S), k.d.add(_), P !== D.n && (n.add(_), (b = a.c) == null || b.call(a, _), m(_));
        }
      for (const _ of k.d || [])
        if (!$.d.has(_)) {
          k.d.delete(_);
          const P = x(_);
          P?.t.delete(S);
        }
    }
  }), g = f[7] || ((S) => {
    var b;
    const $ = d(S);
    let k = t.get(S);
    if (!k) {
      y(S);
      for (const _ of $.d.keys())
        g(_).t.add(S);
      if (k = {
        l: /* @__PURE__ */ new Set(),
        d: new Set($.d.keys()),
        t: /* @__PURE__ */ new Set()
      }, t.set(S, k), (b = a.m) == null || b.call(a, S), Jp(S)) {
        const _ = () => {
          let P = !0;
          const D = (...L) => {
            try {
              return v(S, ...L);
            } finally {
              P || (h(), w());
            }
          };
          try {
            const L = c(S, D);
            L && (k.u = () => {
              P = !0;
              try {
                L();
              } finally {
                P = !1;
              }
            });
          } finally {
            P = !1;
          }
        };
        i.add(_);
      }
    }
    return k;
  }), x = f[8] || ((S) => {
    var b;
    const $ = d(S);
    let k = t.get(S);
    if (k && !k.l.size && !Array.from(k.t).some((_) => {
      var P;
      return (P = t.get(_)) == null ? void 0 : P.d.has(S);
    })) {
      k.u && o.add(k.u), k = void 0, t.delete(S), (b = a.u) == null || b.call(a, S);
      for (const _ of $.d.keys()) {
        const P = x(_);
        P?.t.delete(S);
      }
      return;
    }
    return k;
  }), E = [
    // store state
    e,
    t,
    r,
    n,
    i,
    o,
    a,
    // atom interceptors
    s,
    l,
    u,
    c,
    // building-block functions
    d,
    w,
    h,
    y,
    m,
    v,
    p,
    g,
    x
  ], C = {
    get: (S) => Mu(y(S)),
    set: (S, ...b) => {
      try {
        return v(S, ...b);
      } finally {
        h(), w();
      }
    },
    sub: (S, b) => {
      const k = g(S).l;
      return k.add(b), w(), () => {
        k.delete(b), x(S), w();
      };
    }
  };
  return Object.defineProperty(C, aj, { value: E }), C;
}, F_ = sj, lj = oj, P1 = D_, rg = {};
let uj = 0;
function zy(e, t) {
  const r = `atom${++uj}`, n = {
    toString() {
      return (rg ? "production" : void 0) !== "production" && this.debugLabel ? r + ":" + this.debugLabel : r;
    }
  };
  return typeof e == "function" ? n.read = e : (n.init = e, n.read = cj, n.write = fj), t && (n.write = t), n;
}
function cj(e) {
  return e(this);
}
function fj(e, t, r) {
  return t(
    this,
    typeof r == "function" ? r(e(this)) : r
  );
}
const dj = () => {
  let e = 0;
  const t = lj({}), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = F_(
    r,
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    (s, l, u, ...c) => e ? u(s, ...c) : s.write(l, u, ...c)
  ), o = /* @__PURE__ */ new Set();
  return t.m.add(void 0, (s) => {
    o.add(s);
    const l = r.get(s);
    l.m = n.get(s);
  }), t.u.add(void 0, (s) => {
    o.delete(s);
    const l = r.get(s);
    delete l.m;
  }), Object.assign(i, {
    // store dev methods (these are tentative and subject to change without notice)
    dev4_get_internal_weak_map: () => (console.log("Deprecated: Use devstore from the devtools library"), r),
    dev4_get_mounted_atoms: () => o,
    dev4_restore_atoms: (s) => {
      const l = {
        read: () => null,
        write: (u, c) => {
          ++e;
          try {
            for (const [f, d] of s)
              "init" in f && c(f, d);
          } finally {
            --e;
          }
        }
      };
      i.set(l);
    }
  });
};
function pj() {
  return (rg ? "production" : void 0) !== "production" ? dj() : F_();
}
let ks;
function hj() {
  return ks || (ks = pj(), (rg ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = ks), globalThis.__JOTAI_DEFAULT_STORE__ !== ks && console.warn(
    "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
  ))), ks;
}
const yj = {}, mj = Q.createContext(
  void 0
);
function M_(e) {
  return Q.useContext(mj) || hj();
}
const Uy = (e) => typeof e?.then == "function", Vy = (e) => {
  e.status || (e.status = "pending", e.then(
    (t) => {
      e.status = "fulfilled", e.value = t;
    },
    (t) => {
      e.status = "rejected", e.reason = t;
    }
  ));
}, vj = V.use || // A shim for older React versions
((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (Vy(e), e);
}), th = /* @__PURE__ */ new WeakMap(), T1 = (e, t) => {
  let r = th.get(e);
  return r || (r = new Promise((n, i) => {
    let o = e;
    const a = (u) => (c) => {
      o === u && n(c);
    }, s = (u) => (c) => {
      o === u && i(c);
    }, l = () => {
      try {
        const u = t();
        Uy(u) ? (th.set(u, r), o = u, u.then(a(u), s(u)), P1(u, l)) : n(u);
      } catch (u) {
        i(u);
      }
    };
    e.then(a(e), s(e)), P1(e, l);
  }), th.set(e, r)), r;
};
function gj(e, t) {
  const { delay: r, unstable_promiseStatus: n = !V.use } = {}, i = M_(), [[o, a, s], l] = Q.useReducer(
    (c) => {
      const f = i.get(e);
      return Object.is(c[0], f) && c[1] === i && c[2] === e ? c : [f, i, e];
    },
    void 0,
    () => [i.get(e), i, e]
  );
  let u = o;
  if ((a !== i || s !== e) && (l(), u = i.get(e)), Q.useEffect(() => {
    const c = i.sub(e, () => {
      if (n)
        try {
          const f = i.get(e);
          Uy(f) && Vy(
            T1(f, () => i.get(e))
          );
        } catch {
        }
      if (typeof r == "number") {
        setTimeout(l, r);
        return;
      }
      l();
    });
    return l(), c;
  }, [i, e, r, n]), Q.useDebugValue(u), Uy(u)) {
    const c = T1(u, () => i.get(e));
    return n && Vy(c), vj(c);
  }
  return u;
}
function N_(e, t) {
  const r = M_();
  return Q.useCallback(
    (...i) => {
      if ((yj ? "production" : void 0) !== "production" && !("write" in e))
        throw new Error("not writable atom");
      return r.set(e, ...i);
    },
    [r, e]
  );
}
function a4(e, t) {
  return [
    gj(e),
    // We do wrong type assertion here, which results in throwing an error.
    N_(e)
  ];
}
const ng = {}, ig = Symbol(
  (ng ? "production" : void 0) !== "production" ? "RESET" : ""
);
function s4(e) {
  const t = zy(
    e,
    (r, n, i) => {
      const o = typeof i == "function" ? i(r(t)) : i;
      n(t, o === ig ? e : o);
    }
  );
  return t;
}
function l4(e) {
  const t = Symbol(), r = zy(t);
  (ng ? "production" : void 0) !== "production" && (r.debugPrivate = !0);
  const n = zy(
    (i, o) => {
      const a = i(r);
      return a !== t ? a : e(i, o);
    },
    (i, o, a) => {
      if (a === ig)
        o(r, t);
      else if (typeof a == "function") {
        const s = i(n);
        o(r, a(s));
      } else
        o(r, a);
    }
  );
  return n;
}
const wj = (e) => typeof e?.then == "function";
function Sj(e = () => {
  try {
    return window.localStorage;
  } catch (r) {
    (ng ? "production" : void 0) !== "production" && typeof window < "u" && console.warn(r);
    return;
  }
}, t) {
  var r;
  let n, i;
  const o = {
    getItem: (l, u) => {
      var c, f;
      const d = (h) => {
        if (h = h || "", n !== h) {
          try {
            i = JSON.parse(h, t?.reviver);
          } catch {
            return u;
          }
          n = h;
        }
        return i;
      }, w = (f = (c = e()) == null ? void 0 : c.getItem(l)) != null ? f : null;
      return wj(w) ? w.then(d) : d(w);
    },
    setItem: (l, u) => {
      var c;
      return (c = e()) == null ? void 0 : c.setItem(
        l,
        JSON.stringify(u, void 0)
      );
    },
    removeItem: (l) => {
      var u;
      return (u = e()) == null ? void 0 : u.removeItem(l);
    }
  }, a = (l) => (u, c, f) => l(u, (d) => {
    let w;
    try {
      w = JSON.parse(d || "");
    } catch {
      w = f;
    }
    c(w);
  });
  let s;
  try {
    s = (r = e()) == null ? void 0 : r.subscribe;
  } catch {
  }
  return !s && typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (s = (l, u) => {
    if (!(e() instanceof window.Storage))
      return () => {
      };
    const c = (f) => {
      f.storageArea === e() && f.key === l && u(f.newValue);
    };
    return window.addEventListener("storage", c), () => {
      window.removeEventListener("storage", c);
    };
  }), s && (o.subscribe = a(s)), o;
}
Sj();
function u4(e, t) {
  const r = N_(e);
  return Q.useCallback(() => r(ig), [r]);
}
var L_ = Symbol.for("immer-nothing"), D1 = Symbol.for("immer-draftable"), Er = Symbol.for("immer-state");
function Gr(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ua = Object.getPrototypeOf;
function Va(e) {
  return !!e && !!e[Er];
}
function $o(e) {
  return e ? I_(e) || Array.isArray(e) || !!e[D1] || !!e.constructor?.[D1] || bd(e) || _d(e) : !1;
}
var xj = Object.prototype.constructor.toString();
function I_(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ua(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === xj;
}
function Cf(e, t) {
  kd(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function kd(e) {
  const t = e[Er];
  return t ? t.type_ : Array.isArray(e) ? 1 : bd(e) ? 2 : _d(e) ? 3 : 0;
}
function By(e, t) {
  return kd(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function j_(e, t, r) {
  const n = kd(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Ej(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function bd(e) {
  return e instanceof Map;
}
function _d(e) {
  return e instanceof Set;
}
function Wi(e) {
  return e.copy_ || e.base_;
}
function Hy(e, t) {
  if (bd(e))
    return new Map(e);
  if (_d(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = I_(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Er];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], s = n[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[a]
      });
    }
    return Object.create(Ua(e), n);
  } else {
    const n = Ua(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function og(e, t = !1) {
  return $d(e) || Va(e) || !$o(e) || (kd(e) > 1 && (e.set = e.add = e.clear = e.delete = Cj), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => og(n, !0))), e;
}
function Cj() {
  Gr(2);
}
function $d(e) {
  return Object.isFrozen(e);
}
var kj = {};
function Oo(e) {
  const t = kj[e];
  return t || Gr(0, e), t;
}
var Tl;
function z_() {
  return Tl;
}
function bj(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function A1(e, t) {
  t && (Oo("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Wy(e) {
  qy(e), e.drafts_.forEach(_j), e.drafts_ = null;
}
function qy(e) {
  e === Tl && (Tl = e.parent_);
}
function F1(e) {
  return Tl = bj(Tl, e);
}
function _j(e) {
  const t = e[Er];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function M1(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Er].modified_ && (Wy(t), Gr(4)), $o(e) && (e = kf(t, e), t.parent_ || bf(t, e)), t.patches_ && Oo("Patches").generateReplacementPatches_(
    r[Er].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = kf(t, r, []), Wy(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== L_ ? e : void 0;
}
function kf(e, t, r) {
  if ($d(t))
    return t;
  const n = t[Er];
  if (!n)
    return Cf(
      t,
      (i, o) => N1(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return bf(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, a = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), a = !0), Cf(
      o,
      (s, l) => N1(e, n, i, s, l, r, a)
    ), bf(e, i, !1), r && e.patches_ && Oo("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function N1(e, t, r, n, i, o, a) {
  if (Va(i)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !By(t.assigned_, n) ? o.concat(n) : void 0, l = kf(e, i, s);
    if (j_(r, n, l), Va(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && r.add(i);
  if ($o(i) && !$d(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    kf(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && bf(e, i);
  }
}
function bf(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && og(t, r);
}
function $j(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : z_(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = ag;
  r && (i = [n], o = Dl);
  const { revoke: a, proxy: s } = Proxy.revocable(i, o);
  return n.draft_ = s, n.revoke_ = a, s;
}
var ag = {
  get(e, t) {
    if (t === Er)
      return e;
    const r = Wi(e);
    if (!By(r, t))
      return Oj(e, r, t);
    const n = r[t];
    return e.finalized_ || !$o(n) ? n : n === rh(e.base_, t) ? (nh(e), e.copy_[t] = Ky(n, e)) : n;
  },
  has(e, t) {
    return t in Wi(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Wi(e));
  },
  set(e, t, r) {
    const n = U_(Wi(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = rh(Wi(e), t), o = i?.[Er];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Ej(r, i) && (r !== void 0 || By(e.base_, t)))
        return !0;
      nh(e), Qy(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return rh(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, nh(e), Qy(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Wi(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Gr(11);
  },
  getPrototypeOf(e) {
    return Ua(e.base_);
  },
  setPrototypeOf() {
    Gr(12);
  }
}, Dl = {};
Cf(ag, (e, t) => {
  Dl[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Dl.deleteProperty = function(e, t) {
  return Dl.set.call(this, e, t, void 0);
};
Dl.set = function(e, t, r) {
  return ag.set.call(this, e[0], t, r, e[0]);
};
function rh(e, t) {
  const r = e[Er];
  return (r ? Wi(r) : e)[t];
}
function Oj(e, t, r) {
  const n = U_(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function U_(e, t) {
  if (!(t in e))
    return;
  let r = Ua(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ua(r);
  }
}
function Qy(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Qy(e.parent_));
}
function nh(e) {
  e.copy_ || (e.copy_ = Hy(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Rj = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const a = this;
        return function(l = o, ...u) {
          return a.produce(l, (c) => r.call(this, c, ...u));
        };
      }
      typeof r != "function" && Gr(6), n !== void 0 && typeof n != "function" && Gr(7);
      let i;
      if ($o(t)) {
        const o = F1(this), a = Ky(t, void 0);
        let s = !0;
        try {
          i = r(a), s = !1;
        } finally {
          s ? Wy(o) : qy(o);
        }
        return A1(o, n), M1(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === L_ && (i = void 0), this.autoFreeze_ && og(i, !0), n) {
          const o = [], a = [];
          Oo("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
        }
        return i;
      } else
        Gr(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (l) => t(l, ...s));
      let n, i;
      return [this.produce(t, r, (a, s) => {
        n = a, i = s;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    $o(e) || Gr(8), Va(e) && (e = Pj(e));
    const t = F1(this), r = Ky(e, void 0);
    return r[Er].isManual_ = !0, qy(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Er];
    (!r || !r.isManual_) && Gr(9);
    const { scope_: n } = r;
    return A1(n, t), M1(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Oo("Patches").applyPatches_;
    return Va(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Ky(e, t) {
  const r = bd(e) ? Oo("MapSet").proxyMap_(e, t) : _d(e) ? Oo("MapSet").proxySet_(e, t) : $j(e, t);
  return (t ? t.scope_ : z_()).drafts_.push(r), r;
}
function Pj(e) {
  return Va(e) || Gr(10, e), V_(e);
}
function V_(e) {
  if (!$o(e) || $d(e))
    return e;
  const t = e[Er];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Hy(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Hy(e, !0);
  return Cf(r, (n, i) => {
    j_(r, n, V_(i));
  }), t && (t.finalized_ = !1), r;
}
var Cr = new Rj(), c4 = Cr.produce;
Cr.produceWithPatches.bind(
  Cr
);
Cr.setAutoFreeze.bind(Cr);
Cr.setUseStrictShallowCopy.bind(Cr);
Cr.applyPatches.bind(Cr);
Cr.createDraft.bind(Cr);
Cr.finishDraft.bind(Cr);
var sg = {};
Object.defineProperty(sg, "__esModule", {
  value: !0
});
var Tj = function(t) {
  console.warn("[react-gtm]", t);
};
sg.default = Tj;
var Dj = sg, Aj = Fj(Dj);
function Fj(e) {
  return e && e.__esModule ? e : { default: e };
}
var Mj = {
  tags: function(t) {
    var r = t.id, n = t.events, i = t.dataLayer, o = t.dataLayerName, a = t.preview, s = t.auth, l = "&gtm_auth=" + s, u = "&gtm_preview=" + a;
    r || (0, Aj.default)("GTM Id is required");
    var c = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=` + r + l + u + `&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`, f = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ` + JSON.stringify(n).slice(1, -1) + `});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'` + l + u + `&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','` + o + "','" + r + "');", d = this.dataLayer(i, o);
    return {
      iframe: c,
      script: f,
      dataLayerVar: d
    };
  },
  dataLayer: function(t, r) {
    return `
      window.` + r + " = window." + r + ` || [];
      window.` + r + ".push(" + JSON.stringify(t) + ")";
  }
}, Nj = Mj, Lj = Nj, L1 = Ij(Lj);
function Ij(e) {
  return e && e.__esModule ? e : { default: e };
}
var jj = {
  dataScript: function(t) {
    var r = document.createElement("script");
    return r.innerHTML = t, r;
  },
  gtm: function(t) {
    var r = L1.default.tags(t), n = function() {
      var s = document.createElement("noscript");
      return s.innerHTML = r.iframe, s;
    }, i = function() {
      var s = document.createElement("script");
      return s.innerHTML = r.script, s;
    }, o = this.dataScript(r.dataLayerVar);
    return {
      noScript: n,
      script: i,
      dataScript: o
    };
  },
  initialize: function(t) {
    var r = t.gtmId, n = t.events, i = n === void 0 ? {} : n, o = t.dataLayer, a = t.dataLayerName, s = a === void 0 ? "dataLayer" : a, l = t.auth, u = l === void 0 ? "" : l, c = t.preview, f = c === void 0 ? "" : c, d = this.gtm({
      id: r,
      events: i,
      dataLayer: o || void 0,
      dataLayerName: s,
      auth: u,
      preview: f
    });
    o && document.head.appendChild(d.dataScript), document.head.insertBefore(d.script(), document.head.childNodes[0]), document.body.insertBefore(d.noScript(), document.body.childNodes[0]);
  },
  dataLayer: function(t) {
    var r = t.dataLayer, n = t.dataLayerName, i = n === void 0 ? "dataLayer" : n;
    if (window[i]) return window[i].push(r);
    var o = L1.default.dataLayer(r, i), a = this.dataScript(o);
    document.head.insertBefore(a, document.head.childNodes[0]);
  }
}, zj = jj, Uj = zj, Vj = Bj(Uj);
function Bj(e) {
  return e && e.__esModule ? e : { default: e };
}
var Hj = Vj.default;
const Wj = /* @__PURE__ */ Ri(Hj), f4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wj
}, Symbol.toStringTag, { value: "Module" }));
function d4(e, t, r) {
  t.split && (t = t.split("."));
  for (var n = 0, i = t.length, o = e, a, s; n < i && (s = "" + t[n++], !(s === "__proto__" || s === "constructor" || s === "prototype")); )
    o = o[s] = n === i ? r : typeof (a = o[s]) == typeof t ? a : t[n] * 0 !== 0 || ~("" + t[n]).indexOf(".") ? {} : [];
}
var so = 256, Sc = [], Nu;
for (; so--; ) Sc[so] = (so + 256).toString(16).substring(1);
function p4() {
  var e = 0, t, r = "";
  if (!Nu || so + 16 > 256) {
    for (Nu = Array(e = 256); e--; ) Nu[e] = 256 * Math.random() | 0;
    e = so = 0;
  }
  for (; e < 16; e++)
    t = Nu[so + e], e == 6 ? r += Sc[t & 15 | 64] : e == 8 ? r += Sc[t & 63 | 128] : r += Sc[t], e & 1 && e > 1 && e < 11 && (r += "-");
  return so++, r;
}
/*! js-cookie v3.0.1 | MIT */
function Lu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var qj = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Gy(e, t) {
  function r(i, o, a) {
    if (!(typeof document > "u")) {
      a = Lu({}, t, a), typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)), a.expires && (a.expires = a.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var l in a)
        a[l] && (s += "; " + l, a[l] !== !0 && (s += "=" + a[l].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + s;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], a = {}, s = 0; s < o.length; s++) {
        var l = o[s].split("="), u = l.slice(1).join("=");
        try {
          var c = decodeURIComponent(l[0]);
          if (a[c] = e.read(u, c), i === c)
            break;
        } catch {
        }
      }
      return i ? a[i] : a;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, o) {
        r(
          i,
          "",
          Lu({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Gy(this.converter, Lu({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Gy(Lu({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var h4 = Gy(qj, { path: "/" }), B_ = { exports: {} };
(function(e) {
  e.exports = t(r), e.exports.find = e.exports, e.exports.replace = function(s, l, u, c) {
    return t(i).call(this, s, l, u, c), s;
  }, e.exports.del = function(s, l, u) {
    return t(n).call(this, s, l, null, u), s;
  };
  function t(s) {
    return function(l, u, c, f) {
      var d = f && a(f.normalizer) ? f.normalizer : o;
      u = d(u);
      for (var w, h = !1; !h; ) y();
      function y() {
        for (w in l) {
          var m = d(w);
          if (u.indexOf(m) === 0) {
            var v = u.substr(m.length);
            if (v.charAt(0) === "." || v.length === 0) {
              u = v.substr(1);
              var p = l[w];
              if (p == null) {
                h = !0;
                return;
              }
              if (!u.length) {
                h = !0;
                return;
              }
              l = p;
              return;
            }
          }
        }
        w = void 0, h = !0;
      }
      if (w)
        return l == null ? l : s(l, w, c);
    };
  }
  function r(s, l) {
    if (s.hasOwnProperty(l)) return s[l];
  }
  function n(s, l) {
    return s.hasOwnProperty(l) && delete s[l], s;
  }
  function i(s, l, u) {
    return s.hasOwnProperty(l) && (s[l] = u), s;
  }
  function o(s) {
    return s.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase();
  }
  function a(s) {
    return typeof s == "function";
  }
})(B_);
var y4 = B_.exports, Od = {}, H_ = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
Od.parse = function(e) {
  var t = [1, 5, 6, 7, 11, 12], r = H_.exec(e), n = 0;
  if (!r)
    return new Date(e);
  for (var i = 0, o; o = t[i]; i++)
    r[o] = parseInt(r[o], 10) || 0;
  r[2] = parseInt(r[2], 10) || 1, r[3] = parseInt(r[3], 10) || 1, r[2]--, r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0, r[4] === " " ? n = (/* @__PURE__ */ new Date()).getTimezoneOffset() : r[9] !== "Z" && r[10] && (n = r[11] * 60 + r[12], r[10] === "+" && (n = 0 - n));
  var a = Date.UTC(r[1], r[2], r[3], r[5], r[6] + n, r[7], r[8]);
  return new Date(a);
};
Od.is = function(e, t) {
  return typeof e != "string" || t && /^\d{4}-\d{2}-\d{2}/.test(e) === !1 ? !1 : H_.test(e);
};
var lg = {}, Qj = /\d{13}/;
lg.is = function(e) {
  return Qj.test(e);
};
lg.parse = function(e) {
  return e = parseInt(e, 10), new Date(e);
};
var ug = {}, Kj = /\d{10}/;
ug.is = function(e) {
  return Kj.test(e);
};
ug.parse = function(e) {
  var t = parseInt(e, 10) * 1e3;
  return new Date(t);
};
var I1 = Od, j1 = lg, z1 = ug, Gj = Object.prototype, W_ = Gj.toString;
function Yj(e) {
  return W_.call(e) === "[object Date]";
}
function Xj(e) {
  return W_.call(e) === "[object Number]";
}
var m4 = function(t) {
  return Yj(t) ? t : Xj(t) ? new Date(Jj(t)) : I1.is(t) ? I1.parse(t) : j1.is(t) ? j1.parse(t) : z1.is(t) ? z1.parse(t) : new Date(t);
};
function Jj(e) {
  return e < 315576e5 ? e * 1e3 : e;
}
var U1 = Od, v4 = cg;
function cg(e, t) {
  return t === void 0 && (t = !0), e && typeof e == "object" ? Zj(e, t) : Array.isArray(e) ? ez(e, t) : U1.is(e, t) ? U1.parse(e) : e;
}
function Zj(e, t) {
  return Object.keys(e).forEach(function(r) {
    e[r] = cg(e[r], t);
  }), e;
}
function ez(e, t) {
  return e.forEach(function(r, n) {
    e[n] = cg(r, t);
  }), e;
}
var Yy = { exports: {} };
typeof Object.create == "function" ? Yy.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Yy.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
  }
};
var g4 = Yy.exports, tz = {}, ih = {}, V1;
function rz() {
  return V1 || (V1 = 1, function(e) {
    (function(t, r) {
      r(e, Q, TC);
    })(nm, function(t, r, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setHasSupportToCaptureOption = h;
      var i = a(r), o = a(n);
      function a(p) {
        return p && p.__esModule ? p : {
          default: p
        };
      }
      var s = Object.assign || function(p) {
        for (var g = 1; g < arguments.length; g++) {
          var x = arguments[g];
          for (var E in x)
            Object.prototype.hasOwnProperty.call(x, E) && (p[E] = x[E]);
        }
        return p;
      };
      function l(p, g) {
        var x = {};
        for (var E in p)
          g.indexOf(E) >= 0 || Object.prototype.hasOwnProperty.call(p, E) && (x[E] = p[E]);
        return x;
      }
      function u(p, g) {
        if (!(p instanceof g))
          throw new TypeError("Cannot call a class as a function");
      }
      var c = /* @__PURE__ */ function() {
        function p(g, x) {
          for (var E = 0; E < x.length; E++) {
            var C = x[E];
            C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(g, C.key, C);
          }
        }
        return function(g, x, E) {
          return x && p(g.prototype, x), E && p(g, E), g;
        };
      }();
      function f(p, g) {
        if (!p)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return g && (typeof g == "object" || typeof g == "function") ? g : p;
      }
      function d(p, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof g);
        p.prototype = Object.create(g && g.prototype, {
          constructor: {
            value: p,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g);
      }
      var w = !1;
      function h(p) {
        w = p;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          h(!0);
        } }));
      } catch {
      }
      function y() {
        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: !0 };
        return w ? p : p.capture;
      }
      function m(p) {
        if ("touches" in p) {
          var g = p.touches[0], x = g.pageX, E = g.pageY;
          return { x, y: E };
        }
        var C = p.screenX, S = p.screenY;
        return { x: C, y: S };
      }
      var v = function(p) {
        d(g, p);
        function g() {
          var x;
          u(this, g);
          for (var E = arguments.length, C = Array(E), S = 0; S < E; S++)
            C[S] = arguments[S];
          var b = f(this, (x = g.__proto__ || Object.getPrototypeOf(g)).call.apply(x, [this].concat(C)));
          return b._handleSwipeStart = b._handleSwipeStart.bind(b), b._handleSwipeMove = b._handleSwipeMove.bind(b), b._handleSwipeEnd = b._handleSwipeEnd.bind(b), b._onMouseDown = b._onMouseDown.bind(b), b._onMouseMove = b._onMouseMove.bind(b), b._onMouseUp = b._onMouseUp.bind(b), b._setSwiperRef = b._setSwiperRef.bind(b), b;
        }
        return c(g, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, y({
              capture: !0,
              passive: !1
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, y({
              capture: !0,
              passive: !1
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(E) {
            this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(E));
          }
        }, {
          key: "_onMouseMove",
          value: function(E) {
            this.mouseDown && this._handleSwipeMove(E);
          }
        }, {
          key: "_onMouseUp",
          value: function(E) {
            this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(E);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(E) {
            var C = m(E), S = C.x, b = C.y;
            this.moveStart = { x: S, y: b }, this.props.onSwipeStart(E);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(E) {
            if (this.moveStart) {
              var C = m(E), S = C.x, b = C.y, $ = S - this.moveStart.x, k = b - this.moveStart.y;
              this.moving = !0;
              var _ = this.props.onSwipeMove({
                x: $,
                y: k
              }, E);
              _ && E.cancelable && E.preventDefault(), this.movePosition = { deltaX: $, deltaY: k };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(E) {
            this.props.onSwipeEnd(E);
            var C = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -C ? this.props.onSwipeLeft(1, E) : this.movePosition.deltaX > C && this.props.onSwipeRight(1, E), this.movePosition.deltaY < -C ? this.props.onSwipeUp(1, E) : this.movePosition.deltaY > C && this.props.onSwipeDown(1, E)), this.moveStart = null, this.moving = !1, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(E) {
            this.swiper = E, this.props.innerRef(E);
          }
        }, {
          key: "render",
          value: function() {
            var E = this.props;
            E.tagName;
            var C = E.className, S = E.style, b = E.children;
            E.allowMouseEvents, E.onSwipeUp, E.onSwipeDown, E.onSwipeLeft, E.onSwipeRight, E.onSwipeStart, E.onSwipeMove, E.onSwipeEnd, E.innerRef, E.tolerance;
            var $ = l(E, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return i.default.createElement(
              this.props.tagName,
              s({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: C,
                style: S
              }, $),
              b
            );
          }
        }]), g;
      }(r.Component);
      v.displayName = "ReactSwipe", v.propTypes = {
        tagName: o.default.string,
        className: o.default.string,
        style: o.default.object,
        children: o.default.node,
        allowMouseEvents: o.default.bool,
        onSwipeUp: o.default.func,
        onSwipeDown: o.default.func,
        onSwipeLeft: o.default.func,
        onSwipeRight: o.default.func,
        onSwipeStart: o.default.func,
        onSwipeMove: o.default.func,
        onSwipeEnd: o.default.func,
        innerRef: o.default.func,
        tolerance: o.default.number.isRequired
      }, v.defaultProps = {
        tagName: "div",
        allowMouseEvents: !1,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, t.default = v;
    });
  }(ih)), ih;
}
(function(e) {
  (function(t, r) {
    r(e, rz());
  })(nm, function(t, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r);
    function i(o) {
      return o && o.__esModule ? o : {
        default: o
      };
    }
    t.default = n.default;
  });
})(tz);
const B1 = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const n = X(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, q_ = (e, t) => {
  for (const r in t.fields) {
    const n = t.fields[r];
    n && n.ref && "reportValidity" in n.ref ? B1(n.ref, r, e) : n.refs && n.refs.forEach((i) => B1(i, r, e));
  }
}, nz = (e, t) => {
  t.shouldUseNativeValidation && q_(e, t);
  const r = {};
  for (const n in e) {
    const i = X(t.fields, n), o = Object.assign(e[n] || {}, { ref: i && i.ref });
    if (iz(t.names || Object.keys(e), n)) {
      const a = Object.assign({}, X(r, n));
      Pe(a, "root", o), Pe(r, n, a);
    } else Pe(r, n, o);
  }
  return r;
}, iz = (e, t) => e.some((r) => r.startsWith(t + "."));
function w4(e, t, r) {
  return t === void 0 && (t = {}), r === void 0 && (r = {}), function(n, i, o) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var l = (t.context, Promise.resolve(e[r.mode === "sync" ? "validateSync" : "validate"](n, Object.assign({ abortEarly: !1 }, t, { context: i }))).then(function(u) {
            return o.shouldUseNativeValidation && q_({}, o), { values: r.raw ? n : u, errors: {} };
          }));
        } catch (u) {
          return s(u);
        }
        return l && l.then ? l.then(void 0, s) : l;
      }(0, function(a) {
        if (!a.inner) throw a;
        return { values: {}, errors: nz((s = a, l = !o.shouldUseNativeValidation && o.criteriaMode === "all", (s.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), l) {
            var f = u[c.path].types, d = f && f[c.type];
            u[c.path] = yk(c.path, l, u, c.type, d ? [].concat(d, c.message) : c.message);
          }
          return u;
        }, {})), o) };
        var s, l;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}
function Ao(e) {
  this._maxSize = e, this.clear();
}
Ao.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
Ao.prototype.get = function(e) {
  return this._values[e];
};
Ao.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var oz = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Q_ = /^\d+$/, az = /^\d/, sz = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, lz = /^\s*(['"]?)(.*?)(\1)\s*$/, fg = 512, H1 = new Ao(fg), W1 = new Ao(fg), q1 = new Ao(fg), mo = {
  Cache: Ao,
  split: Xy,
  normalizePath: oh,
  setter: function(e) {
    var t = oh(e);
    return W1.get(e) || W1.set(e, function(n, i) {
      for (var o = 0, a = t.length, s = n; o < a - 1; ) {
        var l = t[o];
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return n;
        s = s[t[o++]];
      }
      s[t[o]] = i;
    });
  },
  getter: function(e, t) {
    var r = oh(e);
    return q1.get(e) || q1.set(e, function(i) {
      for (var o = 0, a = r.length; o < a; )
        if (i != null || !t) i = i[r[o++]];
        else return;
      return i;
    });
  },
  join: function(e) {
    return e.reduce(function(t, r) {
      return t + (dg(r) || Q_.test(r) ? "[" + r + "]" : (t ? "." : "") + r);
    }, "");
  },
  forEach: function(e, t, r) {
    uz(Array.isArray(e) ? e : Xy(e), t, r);
  }
};
function oh(e) {
  return H1.get(e) || H1.set(
    e,
    Xy(e).map(function(t) {
      return t.replace(lz, "$2");
    })
  );
}
function Xy(e) {
  return e.match(oz) || [""];
}
function uz(e, t, r) {
  var n = e.length, i, o, a, s;
  for (o = 0; o < n; o++)
    i = e[o], i && (dz(i) && (i = '"' + i + '"'), s = dg(i), a = !s && /^\d+$/.test(i), t.call(r, i, s, a, o, e));
}
function dg(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function cz(e) {
  return e.match(az) && !e.match(Q_);
}
function fz(e) {
  return sz.test(e);
}
function dz(e) {
  return !dg(e) && (cz(e) || fz(e));
}
const pz = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Rd = (e) => e.match(pz) || [], Pd = (e) => e[0].toUpperCase() + e.slice(1), pg = (e, t) => Rd(e).join(t).toLowerCase(), K_ = (e) => Rd(e).reduce(
  (t, r) => `${t}${t ? r[0].toUpperCase() + r.slice(1).toLowerCase() : r.toLowerCase()}`,
  ""
), hz = (e) => Pd(K_(e)), yz = (e) => pg(e, "_"), mz = (e) => pg(e, "-"), vz = (e) => Pd(pg(e, " ")), gz = (e) => Rd(e).map(Pd).join(" ");
var ah = {
  words: Rd,
  upperFirst: Pd,
  camelCase: K_,
  pascalCase: hz,
  snakeCase: yz,
  kebabCase: mz,
  sentenceCase: vz,
  titleCase: gz
}, hg = { exports: {} };
hg.exports = function(e) {
  return G_(wz(e), e);
};
hg.exports.array = G_;
function G_(e, t) {
  var r = e.length, n = new Array(r), i = {}, o = r, a = Sz(t), s = xz(e);
  for (t.forEach(function(u) {
    if (!s.has(u[0]) || !s.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); o--; )
    i[o] || l(e[o], o, /* @__PURE__ */ new Set());
  return n;
  function l(u, c, f) {
    if (f.has(u)) {
      var d;
      try {
        d = ", node was:" + JSON.stringify(u);
      } catch {
        d = "";
      }
      throw new Error("Cyclic dependency" + d);
    }
    if (!s.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!i[c]) {
      i[c] = !0;
      var w = a.get(u) || /* @__PURE__ */ new Set();
      if (w = Array.from(w), c = w.length) {
        f.add(u);
        do {
          var h = w[--c];
          l(h, s.get(h), f);
        } while (c);
        f.delete(u);
      }
      n[--r] = u;
    }
  }
}
function wz(e) {
  for (var t = /* @__PURE__ */ new Set(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function Sz(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
  }
  return t;
}
function xz(e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0, n = e.length; r < n; r++)
    t.set(e[r], r);
  return t;
}
var Ez = hg.exports;
const Cz = /* @__PURE__ */ Ri(Ez), kz = Object.prototype.toString, bz = Error.prototype.toString, _z = RegExp.prototype.toString, $z = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Oz = /^Symbol\((.*)\)(.*)$/;
function Rz(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Q1(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return Rz(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return $z.call(e).replace(Oz, "Symbol($1)");
  const n = kz.call(e).slice(8, -1);
  return n === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : n === "Error" || e instanceof Error ? "[" + bz.call(e) + "]" : n === "RegExp" ? _z.call(e) : null;
}
function _i(e, t) {
  let r = Q1(e, t);
  return r !== null ? r : JSON.stringify(e, function(n, i) {
    let o = Q1(this[n], t);
    return o !== null ? o : i;
  }, 2);
}
function Y_(e) {
  return e == null ? [] : [].concat(e);
}
let X_, J_, Z_, Pz = /\$\{\s*(\w+)\s*\}/g;
X_ = Symbol.toStringTag;
class K1 {
  constructor(t, r, n, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[X_] = "Error", this.name = "ValidationError", this.value = r, this.path = n, this.type = i, this.errors = [], this.inner = [], Y_(t).forEach((o) => {
      if (Zt.isError(o)) {
        this.errors.push(...o.errors);
        const a = o.inner.length ? o.inner : [o];
        this.inner.push(...a);
      } else
        this.errors.push(o);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
J_ = Symbol.hasInstance;
Z_ = Symbol.toStringTag;
class Zt extends Error {
  static formatError(t, r) {
    const n = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: n,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(Pz, (i, o) => _i(r[o])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, n, i, o) {
    const a = new K1(t, r, n, i);
    if (o)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Z_] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, Zt);
  }
  static [J_](t) {
    return K1[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let pn = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: n
  }) => {
    const i = n != null && n !== r ? ` (cast from the value \`${_i(n, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${_i(r, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${_i(r, !0)}\`` + i;
  }
}, Qt = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Tz = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Jy = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Zy = {
  isValue: "${path} field must be ${value}"
}, xc = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Dz = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Az = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: n
    } = e, i = n.types.length;
    if (Array.isArray(r)) {
      if (r.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${_i(r, !0)}\``;
      if (r.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${_i(r, !0)}\``;
    }
    return Zt.formatError(pn.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: pn,
  string: Qt,
  number: Tz,
  date: Jy,
  object: xc,
  array: Dz,
  boolean: Zy,
  tuple: Az
});
const yg = (e) => e && e.__isYupSchema__;
class _f {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: i,
      otherwise: o
    } = r, a = typeof n == "function" ? n : (...s) => s.every((l) => l === n);
    return new _f(t, (s, l) => {
      var u;
      let c = a(...s) ? i : o;
      return (u = c?.(l)) != null ? u : l;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let n = this.refs.map((o) => (
      // TODO: ? operator here?
      o.getValue(r?.value, r?.parent, r?.context)
    )), i = this.fn(n, t, r);
    if (i === void 0 || // @ts-ignore this can be base
    i === t)
      return t;
    if (!yg(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(r);
  }
}
const Iu = {
  context: "$",
  value: "."
};
class Fo {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Iu.context, this.isValue = this.key[0] === Iu.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Iu.context : this.isValue ? Iu.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && mo.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, n) {
    let i = this.isContext ? n : this.isValue ? t : r;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Fo.prototype.__isYupRef = !0;
const Ln = (e) => e == null;
function Xo(e) {
  function t({
    value: r,
    path: n = "",
    options: i,
    originalValue: o,
    schema: a
  }, s, l) {
    const {
      name: u,
      test: c,
      params: f,
      message: d,
      skipAbsent: w
    } = e;
    let {
      parent: h,
      context: y,
      abortEarly: m = a.spec.abortEarly,
      disableStackTrace: v = a.spec.disableStackTrace
    } = i;
    function p(_) {
      return Fo.isRef(_) ? _.getValue(r, h, y) : _;
    }
    function g(_ = {}) {
      const P = Object.assign({
        value: r,
        originalValue: o,
        label: a.spec.label,
        path: _.path || n,
        spec: a.spec,
        disableStackTrace: _.disableStackTrace || v
      }, f, _.params);
      for (const L of Object.keys(P)) P[L] = p(P[L]);
      const D = new Zt(Zt.formatError(_.message || d, P), r, P.path, _.type || u, P.disableStackTrace);
      return D.params = P, D;
    }
    const x = m ? s : l;
    let E = {
      path: n,
      parent: h,
      type: u,
      from: i.from,
      createError: g,
      resolve: p,
      options: i,
      originalValue: o,
      schema: a
    };
    const C = (_) => {
      Zt.isError(_) ? x(_) : _ ? l(null) : x(g());
    }, S = (_) => {
      Zt.isError(_) ? x(_) : s(_);
    };
    if (w && Ln(r))
      return C(!0);
    let $;
    try {
      var k;
      if ($ = c.call(E, r, E), typeof ((k = $) == null ? void 0 : k.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve($).then(C, S);
      }
    } catch (_) {
      S(_);
      return;
    }
    C($);
  }
  return t.OPTIONS = e, t;
}
function Fz(e, t, r, n = r) {
  let i, o, a;
  return t ? (mo.forEach(t, (s, l, u) => {
    let c = l ? s.slice(1, s.length - 1) : s;
    e = e.resolve({
      context: n,
      parent: i,
      value: r
    });
    let f = e.type === "tuple", d = u ? parseInt(c, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (r && d >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);
      i = r, r = r && r[d], e = f ? e.spec.types[d] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[c]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
      i = r, r = r && r[c], e = e.fields[c];
    }
    o = c, a = l ? "[" + s + "]" : "." + s;
  }), {
    schema: e,
    parent: i,
    parentPath: o
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
class $f extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(Fo.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const n of this.values())
      r.push(t(n));
    return r;
  }
  clone() {
    return new $f(this.values());
  }
  merge(t, r) {
    const n = this.clone();
    return t.forEach((i) => n.add(i)), r.forEach((i) => n.delete(i)), n;
  }
}
function va(e, t = /* @__PURE__ */ new Map()) {
  if (yg(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let n = 0; n < e.length; n++) r[n] = va(e[n], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [n, i] of e.entries()) r.set(n, va(i, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const n of e) r.add(va(n, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [n, i] of Object.entries(e)) r[n] = va(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
class en {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new $f(), this._blacklist = new $f(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(pn.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = va(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let n = t(this);
    return this._mutate = r, n;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, n = t.clone();
    const i = Object.assign({}, r.spec, n.spec);
    return n.spec = i, n.internalTests = Object.assign({}, r.internalTests, n.internalTests), n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), n.tests = r.tests, n.exclusiveTests = r.exclusiveTests, n.withMutation((o) => {
      t.tests.forEach((a) => {
        o.test(a.OPTIONS);
      });
    }), n.transforms = [...r.transforms, ...n.transforms], n;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let n = r.conditions;
      r = r.clone(), r.conditions = [], r = n.reduce((i, o) => o.resolve(i, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, n, i, o;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (n = t.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (o = t.disableStackTrace) != null ? o : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let n = this.resolve(Object.assign({
      value: t
    }, r)), i = r.assert === "ignore-optionality", o = n._cast(t, r);
    if (r.assert !== !1 && !n.isType(o)) {
      if (i && Ln(o))
        return o;
      let a = _i(t), s = _i(o);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
` + (s !== a ? `result of cast: ${s}` : ""));
    }
    return o;
  }
  _cast(t, r) {
    let n = t === void 0 ? t : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
    return n === void 0 && (n = this.getDefault(r)), n;
  }
  _validate(t, r = {}, n, i) {
    let {
      path: o,
      originalValue: a = t,
      strict: s = this.spec.strict
    } = r, l = t;
    s || (l = this._cast(l, Object.assign({
      assert: !1
    }, r)));
    let u = [];
    for (let c of Object.values(this.internalTests))
      c && u.push(c);
    this.runTests({
      path: o,
      value: l,
      originalValue: a,
      options: r,
      tests: u
    }, n, (c) => {
      if (c.length)
        return i(c, l);
      this.runTests({
        path: o,
        value: l,
        originalValue: a,
        options: r,
        tests: this.tests
      }, n, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, n) {
    let i = !1, {
      tests: o,
      value: a,
      originalValue: s,
      path: l,
      options: u
    } = t, c = (y) => {
      i || (i = !0, r(y, a));
    }, f = (y) => {
      i || (i = !0, n(y, a));
    }, d = o.length, w = [];
    if (!d) return f([]);
    let h = {
      value: a,
      originalValue: s,
      path: l,
      options: u,
      schema: this
    };
    for (let y = 0; y < o.length; y++) {
      const m = o[y];
      m(h, c, function(p) {
        p && (Array.isArray(p) ? w.push(...p) : w.push(p)), --d <= 0 && f(w);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: n,
    parentPath: i,
    originalParent: o,
    options: a
  }) {
    const s = t ?? r;
    if (s == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof s == "number";
    let u = n[s];
    const c = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: u,
      originalValue: o[s],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: s,
      path: l || s.includes(".") ? `${i || ""}[${l ? s : `"${s}"`}]` : (i ? `${i}.` : "") + t
    });
    return (f, d, w) => this.resolve(c)._validate(u, c, d, w);
  }
  validate(t, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: t
    })), o = (n = r?.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return new Promise((a, s) => i._validate(t, r, (l, u) => {
      Zt.isError(l) && (l.value = u), s(l);
    }, (l, u) => {
      l.length ? s(new Zt(l, u, void 0, void 0, o)) : a(u);
    }));
  }
  validateSync(t, r) {
    var n;
    let i = this.resolve(Object.assign({}, r, {
      value: t
    })), o, a = (n = r?.disableStackTrace) != null ? n : i.spec.disableStackTrace;
    return i._validate(t, Object.assign({}, r, {
      sync: !0
    }), (s, l) => {
      throw Zt.isError(s) && (s.value = l), s;
    }, (s, l) => {
      if (s.length) throw new Zt(s, t, void 0, void 0, a);
      o = l;
    }), o;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (n) => {
      if (Zt.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (n) {
      if (Zt.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : va(r);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, r) {
    const n = this.clone({
      nullable: t
    });
    return n.internalTests.nullable = Xo({
      message: r,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(t, r) {
    const n = this.clone({
      optional: t
    });
    return n.internalTests.optionality = Xo({
      message: r,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = pn.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = pn.notNull) {
    return this.nullability(!1, t);
  }
  required(t = pn.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = pn.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), i = Xo(r), o = r.exclusive || r.name && n.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (n.exclusiveTests[r.name] = !!r.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === r.name && (o || a.OPTIONS.test === i.OPTIONS.test))), n.tests.push(i), n;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let n = this.clone(), i = Y_(t).map((o) => new Fo(o));
    return i.forEach((o) => {
      o.isSibling && n.deps.push(o.key);
    }), n.conditions.push(typeof r == "function" ? new _f(i, r) : _f.fromOptions(i, r)), n;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Xo({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = pn.oneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._whitelist.add(i), n._blacklist.delete(i);
    }), n.internalTests.whiteList = Xo({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let o = this.schema._whitelist, a = o.resolveAll(this.resolve);
        return a.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(o).join(", "),
            resolved: a
          }
        });
      }
    }), n;
  }
  notOneOf(t, r = pn.notOneOf) {
    let n = this.clone();
    return t.forEach((i) => {
      n._blacklist.add(i), n._whitelist.delete(i);
    }), n.internalTests.blacklist = Xo({
      message: r,
      name: "notOneOf",
      test(i) {
        let o = this.schema._blacklist, a = o.resolveAll(this.resolve);
        return a.includes(i) ? this.createError({
          params: {
            values: Array.from(o).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), n;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: n,
      meta: i,
      optional: o,
      nullable: a
    } = r.spec;
    return {
      meta: i,
      label: n,
      optional: o,
      nullable: a,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, u, c) => c.findIndex((f) => f.name === l.name) === u)
    };
  }
}
en.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) en.prototype[`${e}At`] = function(t, r, n = {}) {
  const {
    parent: i,
    parentPath: o,
    schema: a
  } = Fz(this, t, r, n.context);
  return a[e](i && i[o], Object.assign({}, n, {
    parent: i,
    path: t
  }));
};
for (const e of ["equals", "is"]) en.prototype[e] = en.prototype.oneOf;
for (const e of ["not", "nope"]) en.prototype[e] = en.prototype.notOneOf;
function Mz() {
  return new e$();
}
class e$ extends en {
  constructor() {
    super({
      type: "boolean",
      check(t) {
        return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (n.spec.coerce && !n.isType(t)) {
          if (/^(true|1)$/i.test(String(t))) return !0;
          if (/^(false|0)$/i.test(String(t))) return !1;
        }
        return t;
      });
    });
  }
  isTrue(t = Zy.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "true"
      },
      test(r) {
        return Ln(r) || r === !0;
      }
    });
  }
  isFalse(t = Zy.isValue) {
    return this.test({
      message: t,
      name: "is-value",
      exclusive: !0,
      params: {
        value: "false"
      },
      test(r) {
        return Ln(r) || r === !1;
      }
    });
  }
  default(t) {
    return super.default(t);
  }
  defined(t) {
    return super.defined(t);
  }
  optional() {
    return super.optional();
  }
  required(t) {
    return super.required(t);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(t) {
    return super.nonNullable(t);
  }
  strip(t) {
    return super.strip(t);
  }
}
Mz.prototype = e$.prototype;
const Nz = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Lz(e) {
  const t = em(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function em(e) {
  var t, r;
  const n = Nz.exec(e);
  return n ? {
    year: Tn(n[1]),
    month: Tn(n[2], 1) - 1,
    day: Tn(n[3], 1),
    hour: Tn(n[4]),
    minute: Tn(n[5]),
    second: Tn(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Tn(n[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = n[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: Tn(n[10]),
    minuteOffset: Tn(n[11])
  } : null;
}
function Tn(e, t = 0) {
  return Number(e) || t;
}
let Iz = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), jz = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), zz = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Uz = "^\\d{4}-\\d{2}-\\d{2}", Vz = "\\d{2}:\\d{2}:\\d{2}", Bz = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Hz = new RegExp(`${Uz}T${Vz}(\\.\\d+)?${Bz}$`), Wz = (e) => Ln(e) || e === e.trim(), qz = {}.toString();
function Qz() {
  return new t$();
}
class t$ extends en {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => {
        if (!n.spec.coerce || n.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === qz ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || pn.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = Qt.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(t);
      }
    });
  }
  min(t, r = Qt.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(t);
      }
    });
  }
  max(t, r = Qt.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let n = !1, i, o;
    return r && (typeof r == "object" ? {
      excludeEmptyString: n = !1,
      message: i,
      name: o
    } = r : i = r), this.test({
      name: o || "matches",
      message: i || Qt.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(t) !== -1
    });
  }
  email(t = Qt.email) {
    return this.matches(Iz, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = Qt.url) {
    return this.matches(jz, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = Qt.uuid) {
    return this.matches(zz, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", n, i;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: n = !1,
      precision: i = void 0
    } = t : r = t), this.matches(Hz, {
      name: "datetime",
      message: r || Qt.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || Qt.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (o) => {
        if (!o || n) return !0;
        const a = em(o);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || Qt.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (o) => {
        if (!o || i == null) return !0;
        const a = em(o);
        return a ? a.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = Qt.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: Wz
    });
  }
  lowercase(t = Qt.lowercase) {
    return this.transform((r) => Ln(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ln(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = Qt.uppercase) {
    return this.transform((r) => Ln(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Ln(r) || r === r.toUpperCase()
    });
  }
}
Qz.prototype = t$.prototype;
let Kz = /* @__PURE__ */ new Date(""), Gz = (e) => Object.prototype.toString.call(e) === "[object Date]";
class mg extends en {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Gz(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r, n) => !n.spec.coerce || n.isType(t) || t === null ? t : (t = Lz(t), isNaN(t) ? mg.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let n;
    if (Fo.isRef(t))
      n = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = i;
    }
    return n;
  }
  min(t, r = Jy.min) {
    let n = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(n);
      }
    });
  }
  max(t, r = Jy.max) {
    let n = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(n);
      }
    });
  }
}
mg.INVALID_DATE = Kz;
function Yz(e, t = []) {
  let r = [], n = /* @__PURE__ */ new Set(), i = new Set(t.map(([a, s]) => `${a}-${s}`));
  function o(a, s) {
    let l = mo.split(a)[0];
    n.add(l), i.has(`${s}-${l}`) || r.push([s, l]);
  }
  for (const a of Object.keys(e)) {
    let s = e[a];
    n.add(a), Fo.isRef(s) && s.isSibling ? o(s.path, a) : yg(s) && "deps" in s && s.deps.forEach((l) => o(l, a));
  }
  return Cz.array(Array.from(n), r).reverse();
}
function G1(e, t) {
  let r = 1 / 0;
  return e.some((n, i) => {
    var o;
    if ((o = t.path) != null && o.includes(n))
      return r = i, !0;
  }), r;
}
function r$(e) {
  return (t, r) => G1(e, t) - G1(e, r);
}
const Xz = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let n = e;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return r.isType(n) ? n : e;
};
function Ec(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, n] of Object.entries(e.fields))
      t[r] = Ec(n);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Ec(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Ec)
  }) : "optional" in e ? e.optional() : e;
}
const Jz = (e, t) => {
  const r = [...mo.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let n = r.pop(), i = mo.getter(mo.join(r), !0)(e);
  return !!(i && n in i);
};
let Y1 = (e) => Object.prototype.toString.call(e) === "[object Object]";
function X1(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((n) => r.indexOf(n) === -1);
}
const Zz = r$([]);
function eU(e) {
  return new n$(e);
}
class n$ extends en {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return Y1(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Zz, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var n;
    let i = super._cast(t, r);
    if (i === void 0) return this.getDefault(r);
    if (!this._typeCheck(i)) return i;
    let o = this.fields, a = (n = r.stripUnknown) != null ? n : this.spec.noUnknown, s = [].concat(this._nodes, Object.keys(i).filter((f) => !this._nodes.includes(f))), l = {}, u = Object.assign({}, r, {
      parent: l,
      __validating: r.__validating || !1
    }), c = !1;
    for (const f of s) {
      let d = o[f], w = f in i;
      if (d) {
        let h, y = i[f];
        u.path = (r.path ? `${r.path}.` : "") + f, d = d.resolve({
          value: y,
          context: r.context,
          parent: l
        });
        let m = d instanceof en ? d.spec : void 0, v = m?.strict;
        if (m != null && m.strip) {
          c = c || f in i;
          continue;
        }
        h = !r.__validating || !v ? (
          // TODO: use _cast, this is double resolving
          d.cast(i[f], u)
        ) : i[f], h !== void 0 && (l[f] = h);
      } else w && !a && (l[f] = i[f]);
      (w !== f in l || l[f] !== i[f]) && (c = !0);
    }
    return c ? l : i;
  }
  _validate(t, r = {}, n, i) {
    let {
      from: o = [],
      originalValue: a = t,
      recursive: s = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: a
    }, ...o], r.__validating = !0, r.originalValue = a, super._validate(t, r, n, (l, u) => {
      if (!s || !Y1(u)) {
        i(l, u);
        return;
      }
      a = a || u;
      let c = [];
      for (let f of this._nodes) {
        let d = this.fields[f];
        !d || Fo.isRef(d) || c.push(d.asNestedTest({
          options: r,
          key: f,
          parent: u,
          parentPath: r.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: c,
        value: u,
        originalValue: a,
        options: r
      }, n, (f) => {
        i(f.sort(this._sortErrors).concat(l), u);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), n = r.fields;
    for (let [i, o] of Object.entries(this.fields)) {
      const a = n[i];
      n[i] = a === void 0 ? o : a;
    }
    return r.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(n, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((n) => {
      var i;
      const o = this.fields[n];
      let a = t;
      (i = a) != null && i.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[n]
      })), r[n] = o && "getDefault" in o ? o.getDefault(a) : void 0;
    }), r;
  }
  setFields(t, r) {
    let n = this.clone();
    return n.fields = t, n._nodes = Yz(t, r), n._sortErrors = r$(Object.keys(t)), r && (n._excludedEdges = r), n;
  }
  shape(t, r = []) {
    return this.clone().withMutation((n) => {
      let i = n._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), i = [...n._excludedEdges, ...r]), n.setFields(Object.assign(n.fields, t), i);
    });
  }
  partial() {
    const t = {};
    for (const [r, n] of Object.entries(this.fields))
      t[r] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(t);
  }
  deepPartial() {
    return Ec(this);
  }
  pick(t) {
    const r = {};
    for (const n of t)
      this.fields[n] && (r[n] = this.fields[n]);
    return this.setFields(r, this._excludedEdges.filter(([n, i]) => t.includes(n) && t.includes(i)));
  }
  omit(t) {
    const r = [];
    for (const n of Object.keys(this.fields))
      t.includes(n) || r.push(n);
    return this.pick(r);
  }
  from(t, r, n) {
    let i = mo.getter(t, !0);
    return this.transform((o) => {
      if (!o) return o;
      let a = o;
      return Jz(o, t) && (a = Object.assign({}, o), n || delete a[t], a[r] = i(o)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Xz);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || xc.exact,
      test(r) {
        if (r == null) return !0;
        const n = X1(this.schema, r);
        return n.length === 0 || this.createError({
          params: {
            properties: n.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, r = xc.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(i) {
        if (i == null) return !0;
        const o = X1(this.schema, i);
        return !t || o.length === 0 || this.createError({
          params: {
            unknown: o.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = t, n;
  }
  unknown(t = !0, r = xc.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const n = {};
      for (const i of Object.keys(r)) n[t(i)] = r[i];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(ah.camelCase);
  }
  snakeCase() {
    return this.transformKeys(ah.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => ah.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), n = super.describe(t);
    n.fields = {};
    for (const [o, a] of Object.entries(r.fields)) {
      var i;
      let s = t;
      (i = s) != null && i.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[o]
      })), n.fields[o] = a.describe(s);
    }
    return n;
  }
}
eU.prototype = n$.prototype;
function tm() {
  return tm = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tm.apply(this, arguments);
}
function vg(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var si = vg(function(e, t) {
  e.exports = function() {
    var r = "millisecond", n = "second", i = "minute", o = "hour", a = "day", s = "week", l = "month", u = "quarter", c = "year", f = "date", d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, y = function($, k, _) {
      var P = String($);
      return !P || P.length >= k ? $ : "" + Array(k + 1 - P.length).join(_) + $;
    }, m = { s: y, z: function($) {
      var k = -$.utcOffset(), _ = Math.abs(k), P = Math.floor(_ / 60), D = _ % 60;
      return (k <= 0 ? "+" : "-") + y(P, 2, "0") + ":" + y(D, 2, "0");
    }, m: function $(k, _) {
      if (k.date() < _.date()) return -$(_, k);
      var P = 12 * (_.year() - k.year()) + (_.month() - k.month()), D = k.clone().add(P, l), L = _ - D < 0, j = k.clone().add(P + (L ? -1 : 1), l);
      return +(-(P + (_ - D) / (L ? D - j : j - D)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: l, y: c, w: s, d: a, D: f, h: o, m: i, s: n, ms: r, Q: u }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, v = "en", p = {};
    p[v] = h;
    var g = function($) {
      return $ instanceof S;
    }, x = function($, k, _) {
      var P;
      if (!$) return v;
      if (typeof $ == "string") p[$] && (P = $), k && (p[$] = k, P = $);
      else {
        var D = $.name;
        p[D] = $, P = D;
      }
      return !_ && P && (v = P), P || !_ && v;
    }, E = function($, k) {
      if (g($)) return $.clone();
      var _ = typeof k == "object" ? k : {};
      return _.date = $, _.args = arguments, new S(_);
    }, C = m;
    C.l = x, C.i = g, C.w = function($, k) {
      return E($, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var S = function() {
      function $(_) {
        this.$L = x(_.locale, null, !0), this.parse(_);
      }
      var k = $.prototype;
      return k.parse = function(_) {
        this.$d = function(P) {
          var D = P.date, L = P.utc;
          if (D === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(D)) return /* @__PURE__ */ new Date();
          if (D instanceof Date) return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var j = D.match(d);
            if (j) {
              var z = j[2] - 1 || 0, B = (j[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(j[1], z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, B)) : new Date(j[1], z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, B);
            }
          }
          return new Date(D);
        }(_), this.$x = _.x || {}, this.init();
      }, k.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, k.$utils = function() {
        return C;
      }, k.isValid = function() {
        return this.$d.toString() !== "Invalid Date";
      }, k.isSame = function(_, P) {
        var D = E(_);
        return this.startOf(P) <= D && D <= this.endOf(P);
      }, k.isAfter = function(_, P) {
        return E(_) < this.startOf(P);
      }, k.isBefore = function(_, P) {
        return this.endOf(P) < E(_);
      }, k.$g = function(_, P, D) {
        return C.u(_) ? this[P] : this.set(D, _);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(_, P) {
        var D = this, L = !!C.u(P) || P, j = C.p(_), z = function(Se, ce) {
          var Ce = C.w(D.$u ? Date.UTC(D.$y, ce, Se) : new Date(D.$y, ce, Se), D);
          return L ? Ce : Ce.endOf(a);
        }, B = function(Se, ce) {
          return C.w(D.toDate()[Se].apply(D.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ce)), D);
        }, M = this.$W, q = this.$M, G = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case c:
            return L ? z(1, 0) : z(31, 11);
          case l:
            return L ? z(1, q) : z(0, q + 1);
          case s:
            var ue = this.$locale().weekStart || 0, be = (M < ue ? M + 7 : M) - ue;
            return z(L ? G - be : G + (6 - be), q);
          case a:
          case f:
            return B(ae + "Hours", 0);
          case o:
            return B(ae + "Minutes", 1);
          case i:
            return B(ae + "Seconds", 2);
          case n:
            return B(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(_) {
        return this.startOf(_, !1);
      }, k.$set = function(_, P) {
        var D, L = C.p(_), j = "set" + (this.$u ? "UTC" : ""), z = (D = {}, D[a] = j + "Date", D[f] = j + "Date", D[l] = j + "Month", D[c] = j + "FullYear", D[o] = j + "Hours", D[i] = j + "Minutes", D[n] = j + "Seconds", D[r] = j + "Milliseconds", D)[L], B = L === a ? this.$D + (P - this.$W) : P;
        if (L === l || L === c) {
          var M = this.clone().set(f, 1);
          M.$d[z](B), M.init(), this.$d = M.set(f, Math.min(this.$D, M.daysInMonth())).$d;
        } else z && this.$d[z](B);
        return this.init(), this;
      }, k.set = function(_, P) {
        return this.clone().$set(_, P);
      }, k.get = function(_) {
        return this[C.p(_)]();
      }, k.add = function(_, P) {
        var D, L = this;
        _ = Number(_);
        var j = C.p(P), z = function(q) {
          var G = E(L);
          return C.w(G.date(G.date() + Math.round(q * _)), L);
        };
        if (j === l) return this.set(l, this.$M + _);
        if (j === c) return this.set(c, this.$y + _);
        if (j === a) return z(1);
        if (j === s) return z(7);
        var B = (D = {}, D[i] = 6e4, D[o] = 36e5, D[n] = 1e3, D)[j] || 1, M = this.$d.getTime() + _ * B;
        return C.w(M, this);
      }, k.subtract = function(_, P) {
        return this.add(-1 * _, P);
      }, k.format = function(_) {
        var P = this;
        if (!this.isValid()) return "Invalid Date";
        var D = _ || "YYYY-MM-DDTHH:mm:ssZ", L = C.z(this), j = this.$locale(), z = this.$H, B = this.$m, M = this.$M, q = j.weekdays, G = j.months, ae = function(ce, Ce, Oe, Ye) {
          return ce && (ce[Ce] || ce(P, D)) || Oe[Ce].substr(0, Ye);
        }, ue = function(ce) {
          return C.s(z % 12 || 12, ce, "0");
        }, be = j.meridiem || function(ce, Ce, Oe) {
          var Ye = ce < 12 ? "AM" : "PM";
          return Oe ? Ye.toLowerCase() : Ye;
        }, Se = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: M + 1, MM: C.s(M + 1, 2, "0"), MMM: ae(j.monthsShort, M, G, 3), MMMM: ae(G, M), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: ae(j.weekdaysMin, this.$W, q, 2), ddd: ae(j.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(z), HH: C.s(z, 2, "0"), h: ue(1), hh: ue(2), a: be(z, B, !0), A: be(z, B, !1), m: String(B), mm: C.s(B, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: L };
        return D.replace(w, function(ce, Ce) {
          return Ce || Se[ce] || L.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(_, P, D) {
        var L, j = C.p(P), z = E(_), B = 6e4 * (z.utcOffset() - this.utcOffset()), M = this - z, q = C.m(this, z);
        return q = (L = {}, L[c] = q / 12, L[l] = q, L[u] = q / 3, L[s] = (M - B) / 6048e5, L[a] = (M - B) / 864e5, L[o] = M / 36e5, L[i] = M / 6e4, L[n] = M / 1e3, L)[j] || M, D ? q : C.a(q);
      }, k.daysInMonth = function() {
        return this.endOf(l).$D;
      }, k.$locale = function() {
        return p[this.$L];
      }, k.locale = function(_, P) {
        if (!_) return this.$L;
        var D = this.clone(), L = x(_, P, !0);
        return L && (D.$L = L), D;
      }, k.clone = function() {
        return C.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), b = S.prototype;
    return E.prototype = b, [["$ms", r], ["$s", n], ["$m", i], ["$H", o], ["$W", a], ["$M", l], ["$y", c], ["$D", f]].forEach(function($) {
      b[$[1]] = function(k) {
        return this.$g(k, $[0], $[1]);
      };
    }), E.extend = function($, k) {
      return $.$i || ($(k, S, E), $.$i = !0), E;
    }, E.locale = x, E.isDayjs = g, E.unix = function($) {
      return E(1e3 * $);
    }, E.en = p[v], E.Ls = p, E.p = {}, E;
  }();
}), tU = vg(function(e, t) {
  e.exports = function(r, n, i) {
    var o = n.prototype;
    i.utc = function(d) {
      return new n({ date: d, utc: !0, args: arguments });
    }, o.utc = function(d) {
      var w = i(this.toDate(), { locale: this.$L, utc: !0 });
      return d ? w.add(this.utcOffset(), "minute") : w;
    }, o.local = function() {
      return i(this.toDate(), { locale: this.$L, utc: !1 });
    };
    var a = o.parse;
    o.parse = function(d) {
      d.utc && (this.$u = !0), this.$utils().u(d.$offset) || (this.$offset = d.$offset), a.call(this, d);
    };
    var s = o.init;
    o.init = function() {
      if (this.$u) {
        var d = this.$d;
        this.$y = d.getUTCFullYear(), this.$M = d.getUTCMonth(), this.$D = d.getUTCDate(), this.$W = d.getUTCDay(), this.$H = d.getUTCHours(), this.$m = d.getUTCMinutes(), this.$s = d.getUTCSeconds(), this.$ms = d.getUTCMilliseconds();
      } else s.call(this);
    };
    var l = o.utcOffset;
    o.utcOffset = function(d, w) {
      var h = this.$utils().u;
      if (h(d)) return this.$u ? 0 : h(this.$offset) ? l.call(this) : this.$offset;
      var y = Math.abs(d) <= 16 ? 60 * d : d, m = this;
      if (w) return m.$offset = y, m.$u = d === 0, m;
      if (d !== 0) {
        var v = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (m = this.local().add(y + v, "minute")).$offset = y, m.$x.$localOffset = v;
      } else m = this.utc();
      return m;
    };
    var u = o.format;
    o.format = function(d) {
      return u.call(this, d || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : ""));
    }, o.valueOf = function() {
      var d = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (/* @__PURE__ */ new Date()).getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * d;
    }, o.isUTC = function() {
      return !!this.$u;
    }, o.toISOString = function() {
      return this.toDate().toISOString();
    }, o.toString = function() {
      return this.toDate().toUTCString();
    };
    var c = o.toDate;
    o.toDate = function(d) {
      return d === "s" && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : c.call(this);
    };
    var f = o.diff;
    o.diff = function(d, w, h) {
      if (d && this.$u === d.$u) return f.call(this, d, w, h);
      var y = this.local(), m = i(d).local();
      return f.call(y, m, w, h);
    };
  };
}), J1 = new RegExp("%[a-f0-9]{2}", "gi"), Z1 = new RegExp("(%[a-f0-9]{2})+", "gi");
function rm(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1) return e;
  var r = e.slice(0, t = t || 1), n = e.slice(t);
  return Array.prototype.concat.call([], rm(r), rm(n));
}
function rU(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(J1), r = 1; r < t.length; r++) t = (e = rm(t, r).join("")).match(J1);
    return e;
  }
}
var nU = function(e) {
  if (typeof e != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return function(r) {
      for (var n = { "%FE%FF": "��", "%FF%FE": "��" }, i = Z1.exec(r); i; ) {
        try {
          n[i[0]] = decodeURIComponent(i[0]);
        } catch {
          var o = rU(i[0]);
          o !== i[0] && (n[i[0]] = o);
        }
        i = Z1.exec(r);
      }
      n["%C2"] = "�";
      for (var a = Object.keys(n), s = 0; s < a.length; s++) {
        var l = a[s];
        r = r.replace(new RegExp(l, "g"), n[l]);
      }
      return r;
    }(e);
  }
}, ex = (e, t) => {
  if (typeof e != "string" || typeof t != "string") throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "") return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [e.slice(0, r), e.slice(r + t.length)];
}, iU = function(e, t) {
  for (var r = {}, n = Object.keys(e), i = Array.isArray(t), o = 0; o < n.length; o++) {
    var a = n[o], s = e[a];
    (i ? t.indexOf(a) !== -1 : t(a, s, e)) && (r[a] = s);
  }
  return r;
}, i$ = vg(function(e, t) {
  function r(c) {
    if (typeof c != "string" || c.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function n(c, f) {
    return f.encode ? f.strict ? encodeURIComponent(c).replace(/[!'()*]/g, (d) => `%${d.charCodeAt(0).toString(16).toUpperCase()}`) : encodeURIComponent(c) : c;
  }
  function i(c, f) {
    return f.decode ? nU(c) : c;
  }
  function o(c) {
    return Array.isArray(c) ? c.sort() : typeof c == "object" ? o(Object.keys(c)).sort((f, d) => Number(f) - Number(d)).map((f) => c[f]) : c;
  }
  function a(c) {
    const f = c.indexOf("#");
    return f !== -1 && (c = c.slice(0, f)), c;
  }
  function s(c) {
    const f = (c = a(c)).indexOf("?");
    return f === -1 ? "" : c.slice(f + 1);
  }
  function l(c, f) {
    return f.parseNumbers && !Number.isNaN(Number(c)) && typeof c == "string" && c.trim() !== "" ? c = Number(c) : !f.parseBooleans || c === null || c.toLowerCase() !== "true" && c.toLowerCase() !== "false" || (c = c.toLowerCase() === "true"), c;
  }
  function u(c, f) {
    r((f = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, f)).arrayFormatSeparator);
    const d = function(h) {
      let y;
      switch (h.arrayFormat) {
        case "index":
          return (m, v, p) => {
            y = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), y ? (p[m] === void 0 && (p[m] = {}), p[m][y[1]] = v) : p[m] = v;
          };
        case "bracket":
          return (m, v, p) => {
            y = /(\[\])$/.exec(m), p[m = m.replace(/\[\]$/, "")] = y ? p[m] !== void 0 ? [].concat(p[m], v) : [v] : v;
          };
        case "comma":
        case "separator":
          return (m, v, p) => {
            const g = typeof v == "string" && v.includes(h.arrayFormatSeparator), x = typeof v == "string" && !g && i(v, h).includes(h.arrayFormatSeparator);
            v = x ? i(v, h) : v;
            const E = g || x ? v.split(h.arrayFormatSeparator).map((C) => i(C, h)) : v === null ? v : i(v, h);
            p[m] = E;
          };
        default:
          return (m, v, p) => {
            p[m] = p[m] !== void 0 ? [].concat(p[m], v) : v;
          };
      }
    }(f), w = /* @__PURE__ */ Object.create(null);
    if (typeof c != "string" || !(c = c.trim().replace(/^[?#&]/, ""))) return w;
    for (const h of c.split("&")) {
      if (h === "") continue;
      let [y, m] = ex(f.decode ? h.replace(/\+/g, " ") : h, "=");
      m = m === void 0 ? null : ["comma", "separator"].includes(f.arrayFormat) ? m : i(m, f), d(i(y, f), m, w);
    }
    for (const h of Object.keys(w)) {
      const y = w[h];
      if (typeof y == "object" && y !== null) for (const m of Object.keys(y)) y[m] = l(y[m], f);
      else w[h] = l(y, f);
    }
    return f.sort === !1 ? w : (f.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(f.sort)).reduce((h, y) => {
      const m = w[y];
      return h[y] = m && typeof m == "object" && !Array.isArray(m) ? o(m) : m, h;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = s, t.parse = u, t.stringify = (c, f) => {
    if (!c) return "";
    r((f = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, f)).arrayFormatSeparator);
    const d = (m) => f.skipNull && c[m] == null || f.skipEmptyString && c[m] === "", w = function(m) {
      switch (m.arrayFormat) {
        case "index":
          return (v) => (p, g) => {
            const x = p.length;
            return g === void 0 || m.skipNull && g === null || m.skipEmptyString && g === "" ? p : g === null ? [...p, [n(v, m), "[", x, "]"].join("")] : [...p, [n(v, m), "[", n(x, m), "]=", n(g, m)].join("")];
          };
        case "bracket":
          return (v) => (p, g) => g === void 0 || m.skipNull && g === null || m.skipEmptyString && g === "" ? p : g === null ? [...p, [n(v, m), "[]"].join("")] : [...p, [n(v, m), "[]=", n(g, m)].join("")];
        case "comma":
        case "separator":
          return (v) => (p, g) => g == null || g.length === 0 ? p : p.length === 0 ? [[n(v, m), "=", n(g, m)].join("")] : [[p, n(g, m)].join(m.arrayFormatSeparator)];
        default:
          return (v) => (p, g) => g === void 0 || m.skipNull && g === null || m.skipEmptyString && g === "" ? p : g === null ? [...p, n(v, m)] : [...p, [n(v, m), "=", n(g, m)].join("")];
      }
    }(f), h = {};
    for (const m of Object.keys(c)) d(m) || (h[m] = c[m]);
    const y = Object.keys(h);
    return f.sort !== !1 && y.sort(f.sort), y.map((m) => {
      const v = c[m];
      return v === void 0 ? "" : v === null ? n(m, f) : Array.isArray(v) ? v.reduce(w(m), []).join("&") : n(m, f) + "=" + n(v, f);
    }).filter((m) => m.length > 0).join("&");
  }, t.parseUrl = (c, f) => {
    f = Object.assign({ decode: !0 }, f);
    const [d, w] = ex(c, "#");
    return Object.assign({ url: d.split("?")[0] || "", query: u(s(c), f) }, f && f.parseFragmentIdentifier && w ? { fragmentIdentifier: i(w, f) } : {});
  }, t.stringifyUrl = (c, f) => {
    f = Object.assign({ encode: !0, strict: !0 }, f);
    const d = a(c.url).split("?")[0] || "", w = t.extract(c.url), h = t.parse(w, { sort: !1 }), y = Object.assign(h, c.query);
    let m = t.stringify(y, f);
    m && (m = `?${m}`);
    let v = function(p) {
      let g = "";
      const x = p.indexOf("#");
      return x !== -1 && (g = p.slice(x)), g;
    }(c.url);
    return c.fragmentIdentifier && (v = `#${n(c.fragmentIdentifier, f)}`), `${d}${m}${v}`;
  }, t.pick = (c, f, d) => {
    d = Object.assign({ parseFragmentIdentifier: !0 }, d);
    const { url: w, query: h, fragmentIdentifier: y } = t.parseUrl(c, d);
    return t.stringifyUrl({ url: w, query: iU(h, f), fragmentIdentifier: y }, d);
  }, t.exclude = (c, f, d) => {
    const w = Array.isArray(f) ? (h) => !f.includes(h) : (h, y) => !f(h, y);
    return t.pick(c, w, d);
  };
});
const o$ = { dateTimeLocal: "YYYY-MM-DD[T]HH:mm:ss", dateTimeUTC: "YYYYMMDD[T]HHmmss[Z]", allDay: "YYYYMMDD" };
function gg({ startTime: e, endTime: t }, r) {
  const n = o$[r];
  return { start: e.format(n), end: t.format(n) };
}
si.extend(tU);
const wg = (e, t = !0) => {
  const { start: r, end: n, duration: i } = e, o = function(l, u) {
    if (l == null) return {};
    var c, f, d = {}, w = Object.keys(l);
    for (f = 0; f < w.length; f++) u.indexOf(c = w[f]) >= 0 || (d[c] = l[c]);
    return d;
  }(e, ["start", "end", "duration"]), a = t ? si(r).utc() : si(r), s = n ? t ? si(n).utc() : si(n) : (() => {
    if (e.allDay) return a.add(1, "day");
    if (i && i.length == 2) {
      const l = Number(i[0]);
      return a.add(l, i[1]);
    }
    return t ? si().utc() : si();
  })();
  return tm({}, o, { startTime: a, endTime: s });
}, S4 = (e) => {
  const t = wg(e), { start: r, end: n } = gg(t, t.allDay ? "allDay" : "dateTimeUTC"), i = { action: "TEMPLATE", text: t.title, details: t.description, location: t.location, trp: t.busy, dates: r + "/" + n, recur: t.rRule ? "RRULE:" + t.rRule : void 0 };
  return t.guests && t.guests.length && (i.add = t.guests.join()), `https://calendar.google.com/calendar/render?${i$.stringify(i)}`;
}, x4 = (e) => {
  const t = wg(e, !1), { start: r, end: n } = gg(t, "dateTimeLocal");
  return `https://outlook.live.com/calendar/0/action/compose?${i$.stringify({ path: "/calendar/action/compose", rru: "addevent", startdt: r, enddt: n, subject: t.title, body: t.description, location: t.location, allday: t.allDay || !1 })}`;
}, E4 = (e) => {
  const t = wg(e), r = (t.description || "").replace(/,/gm, ",").replace(/;/gm, ";").replace(/\r\n/gm, `
`).replace(/\n/gm, "\\n").replace(/(\\n)[\s\t]+/gm, "\\n"), n = (t.location || "").replace(/,/gm, ",").replace(/;/gm, ";").replace(/\r\n/gm, `
`).replace(/\n/gm, "\\n").replace(/(\\n)[\s\t]+/gm, "\\n"), { start: i, end: o } = gg(t, t.allDay ? "allDay" : "dateTimeUTC"), a = si(/* @__PURE__ */ new Date()).utc().format(o$.dateTimeUTC), s = [{ key: "BEGIN", value: "VCALENDAR" }, { key: "VERSION", value: "2.0" }, { key: "PRODID", value: t.title }, { key: "BEGIN", value: "VEVENT" }, { key: "URL", value: t.url }, { key: "DTSTART", value: i }, { key: "DTEND", value: o }, { key: "DTSTAMP", value: a }, { key: "RRULE", value: t.rRule }, { key: "SUMMARY", value: t.title }, { key: "DESCRIPTION", value: r }, { key: "LOCATION", value: n }, { key: "ORGANIZER", value: t.organizer }, { key: "UID", value: Math.floor(1e5 * Math.random()).toString().replace(".", "") }, { key: "END", value: "VEVENT" }, { key: "END", value: "VCALENDAR" }];
  let l = "";
  return s.forEach((u) => {
    if (u.value) if (u.key == "ORGANIZER") {
      const c = u.value;
      l += `${u.key};${encodeURIComponent(`CN=${c.name}:MAILTO:${c.email}\r
`)}`;
    } else l += `${u.key}:${encodeURIComponent(`${u.value}\r
`)}`;
  }), `data:text/calendar;charset=utf8,${l}`;
};
export {
  fU as $,
  ai as A,
  HR as B,
  IC as C,
  FC as D,
  pU as E,
  mU as F,
  SU as G,
  EU as H,
  KR as I,
  QR as J,
  zR as K,
  Jr as L,
  dU as M,
  ny as N,
  nv as O,
  qr as P,
  co as Q,
  V as R,
  $b as S,
  jC as T,
  lp as U,
  nd as V,
  hU as W,
  Nr as X,
  Gc as Y,
  NO as Z,
  Ka as _,
  Il as a,
  sD as a$,
  Qn as a0,
  CU as a1,
  kU as a2,
  Et as a3,
  $r as a4,
  La as a5,
  _U as a6,
  $U as a7,
  Ie as a8,
  iR as a9,
  lt as aA,
  o4 as aB,
  K3 as aC,
  bU as aD,
  _T as aE,
  zy as aF,
  l4 as aG,
  c4 as aH,
  gj as aI,
  hj as aJ,
  Wj as aK,
  N_ as aL,
  DU as aM,
  PU as aN,
  uU as aO,
  AO as aP,
  a4 as aQ,
  E4 as aR,
  S4 as aS,
  x4 as aT,
  s4 as aU,
  u4 as aV,
  Qz as aW,
  Mz as aX,
  eU as aY,
  xv as aZ,
  w4 as a_,
  oR as aa,
  qs as ab,
  ft as ac,
  Ai as ad,
  ed as ae,
  Jo as af,
  BO as ag,
  Kc as ah,
  cU as ai,
  lU as aj,
  sU as ak,
  Zh as al,
  A0 as am,
  jl as an,
  tz as ao,
  d4 as ap,
  FU as aq,
  p4 as ar,
  LU as as,
  MU as at,
  NU as au,
  h4 as av,
  y4 as aw,
  m4 as ax,
  v4 as ay,
  g4 as az,
  AU as b,
  $w as c,
  aM as d,
  WT as e,
  IU as f,
  zU as g,
  jU as h,
  f4 as i,
  aU as j,
  Ri as k,
  nm as l,
  G0 as m,
  wU as n,
  xU as o,
  AC as p,
  ak as q,
  Q as r,
  RU as s,
  oU as t,
  TU as u,
  vU as v,
  gU as w,
  Ju as x,
  yU as y,
  mn as z
};
