import { m as Dr, n as jl, o as Wl, p as Vl, v as Hl, K as Ul, w as Go, x as Ue, D as _l, y as Gl, z as po, W as ze, M as vt, A as zs, B as Fs, E as Br, F as Kl, G as Yl, H as ql, I as Xl, J as Ql, L as ii, N as li, O as Zl, Q as Bn, U as Jl, V as ec, X as ci, t as Or, r as c, Y as tc, j as b, Z as di, $ as V, T as ns, a0 as ss, a as oc, C as rc, a1 as nc } from "./webc-vendor-BjE1NNvQ.js";
import { D as Ko, I as sc } from "./webc-vendor-luxon-BX-Cdsu9.js";
function Se() {
  return Se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, Se.apply(null, arguments);
}
function gt(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function to(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const At = "$$material";
function ac(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ic(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var lc = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(n) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(n, s), r.tags.push(n);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ic(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = ac(n);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var n;
      return (n = r.parentNode) == null ? void 0 : n.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}();
function ui(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var cc = function(t, o, r) {
  for (var n = 0, s = 0; n = s, s = Bn(), n === 38 && s === 12 && (o[r] = 1), !li(s); )
    ii();
  return ec(t, ci);
}, dc = function(t, o) {
  var r = -1, n = 44;
  do
    switch (li(n)) {
      case 0:
        n === 38 && Bn() === 12 && (o[r] = 1), t[r] += cc(ci - 1, o, r);
        break;
      case 2:
        t[r] += Jl(n);
        break;
      case 4:
        if (n === 44) {
          t[++r] = Bn() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      default:
        t[r] += Zl(n);
    }
  while (n = ii());
  return t;
}, uc = function(t, o) {
  return Xl(dc(Ql(t), o));
}, js = /* @__PURE__ */ new WeakMap(), pc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, n = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !js.get(r)) && !n) {
      js.set(t, !0);
      for (var s = [], a = uc(o, s), i = r.props, l = 0, d = 0; l < a.length; l++)
        for (var u = 0; u < i.length; u++, d++)
          t.props[d] = s[l] ? a[l].replace(/&\f/g, i[u]) : i[u] + " " + a[l];
    }
  }
}, fc = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function pi(e, t) {
  switch (Gl(e, t)) {
    case 5103:
      return ze + "print-" + e + e;
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
      return ze + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ze + e + Br + e + vt + e + e;
    case 6828:
    case 4268:
      return ze + e + vt + e + e;
    case 6165:
      return ze + e + vt + "flex-" + e + e;
    case 5187:
      return ze + e + Ue(e, /(\w+).+(:[^]+)/, ze + "box-$1$2" + vt + "flex-$1$2") + e;
    case 5443:
      return ze + e + vt + "flex-item-" + Ue(e, /flex-|-self/, "") + e;
    case 4675:
      return ze + e + vt + "flex-line-pack" + Ue(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ze + e + vt + Ue(e, "shrink", "negative") + e;
    case 5292:
      return ze + e + vt + Ue(e, "basis", "preferred-size") + e;
    case 6060:
      return ze + "box-" + Ue(e, "-grow", "") + ze + e + vt + Ue(e, "grow", "positive") + e;
    case 4554:
      return ze + Ue(e, /([^-])(transform)/g, "$1" + ze + "$2") + e;
    case 6187:
      return Ue(Ue(Ue(e, /(zoom-|grab)/, ze + "$1"), /(image-set)/, ze + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ue(e, /(image-set\([^]*)/, ze + "$1$`$1");
    case 4968:
      return Ue(Ue(e, /(.+:)(flex-)?(.*)/, ze + "box-pack:$3" + vt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ze + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(e, /(.+)-inline(.+)/, ze + "$1$2") + e;
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
      if (zs(e) - 1 - t > 6) switch (po(e, t + 1)) {
        case 109:
          if (po(e, t + 4) !== 45) break;
        case 102:
          return Ue(e, /(.+:)(.+)-([^]+)/, "$1" + ze + "$2-$3$1" + Br + (po(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Fs(e, "stretch") ? pi(Ue(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (po(e, t + 1) !== 115) break;
    case 6444:
      switch (po(e, zs(e) - 3 - (~Fs(e, "!important") && 10))) {
        case 107:
          return Ue(e, ":", ":" + ze) + e;
        case 101:
          return Ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ze + (po(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ze + "$2$3$1" + vt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (po(e, t + 11)) {
        case 114:
          return ze + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ze + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ze + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ze + e + vt + e + e;
  }
  return e;
}
var mc = function(t, o, r, n) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case _l:
      t.return = pi(t.value, t.length);
      break;
    case Ul:
      return Dr([Go(t, {
        value: Ue(t.value, "@", "@" + ze)
      })], n);
    case Vl:
      if (t.length) return Hl(t.props, function(s) {
        switch (Kl(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Dr([Go(t, {
              props: [Ue(s, /:(read-\w+)/, ":" + Br + "$1")]
            })], n);
          case "::placeholder":
            return Dr([Go(t, {
              props: [Ue(s, /:(plac\w+)/, ":" + ze + "input-$1")]
            }), Go(t, {
              props: [Ue(s, /:(plac\w+)/, ":" + Br + "$1")]
            }), Go(t, {
              props: [Ue(s, /:(plac\w+)/, vt + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, hc = [mc], gc = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var y = v.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var n = t.stylisPlugins || hc, s = {}, a, i = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(v) {
      for (var y = v.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        s[y[S]] = !0;
      i.push(v);
    }
  );
  var l, d = [pc, fc];
  {
    var u, m = [Yl, ql(function(v) {
      u.insert(v);
    })], h = Wl(d.concat(n, m)), f = function(y) {
      return Dr(jl(y), h);
    };
    l = function(y, S, w, C) {
      u = w, f(y ? y + "{" + S.styles + "}" : S.styles), C && (g.inserted[S.name] = !0);
    };
  }
  var g = {
    key: o,
    sheet: new lc({
      key: o,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(i), g;
}, yc = !0;
function fi(e, t, o) {
  var r = "";
  return o.split(" ").forEach(function(n) {
    e[n] !== void 0 ? t.push(e[n] + ";") : n && (r += n + " ");
  }), r;
}
var as = function(t, o, r) {
  var n = t.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  yc === !1) && t.registered[n] === void 0 && (t.registered[n] = o.styles);
}, is = function(t, o, r) {
  as(t, o, r);
  var n = t.key + "-" + o.name;
  if (t.inserted[o.name] === void 0) {
    var s = o;
    do
      t.insert(o === s ? "." + n : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function bc(e) {
  for (var t = 0, o, r = 0, n = e.length; n >= 4; ++r, n -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var vc = {
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
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xc = /[A-Z]|^ms/g, Cc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mi = function(t) {
  return t.charCodeAt(1) === 45;
}, Ws = function(t) {
  return t != null && typeof t != "boolean";
}, bn = /* @__PURE__ */ ui(function(e) {
  return mi(e) ? e : e.replace(xc, "-$&").toLowerCase();
}), Vs = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(Cc, function(r, n, s) {
          return _t = {
            name: n,
            styles: s,
            next: _t
          }, n;
        });
  }
  return vc[t] !== 1 && !mi(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function dr(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var n = o;
      if (n.anim === 1)
        return _t = {
          name: n.name,
          styles: n.styles,
          next: _t
        }, n.name;
      var s = o;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            _t = {
              name: a.name,
              styles: a.styles,
              next: _t
            }, a = a.next;
        var i = s.styles + ";";
        return i;
      }
      return Sc(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var l = _t, d = o(e);
        return _t = l, dr(e, t, d);
      }
      break;
    }
  }
  var u = o;
  if (t == null)
    return u;
  var m = t[u];
  return m !== void 0 ? m : u;
}
function Sc(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var n = 0; n < o.length; n++)
      r += dr(e, t, o[n]) + ";";
  else
    for (var s in o) {
      var a = o[s];
      if (typeof a != "object") {
        var i = a;
        t != null && t[i] !== void 0 ? r += s + "{" + t[i] + "}" : Ws(i) && (r += bn(s) + ":" + Vs(s, i) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var l = 0; l < a.length; l++)
          Ws(a[l]) && (r += bn(s) + ":" + Vs(s, a[l]) + ";");
      else {
        var d = dr(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            r += bn(s) + ":" + d + ";";
            break;
          }
          default:
            r += s + "{" + d + "}";
        }
      }
    }
  return r;
}
var Hs = /label:\s*([^\s;{]+)\s*(;|$)/g, _t;
function fr(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, n = "";
  _t = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, n += dr(o, t, s);
  else {
    var a = s;
    n += a[0];
  }
  for (var i = 1; i < e.length; i++)
    if (n += dr(o, t, e[i]), r) {
      var l = s;
      n += l[i];
    }
  Hs.lastIndex = 0;
  for (var d = "", u; (u = Hs.exec(n)) !== null; )
    d += "-" + u[1];
  var m = bc(n) + d;
  return {
    name: m,
    styles: n,
    next: _t
  };
}
var wc = function(t) {
  return t();
}, hi = Or.useInsertionEffect ? Or.useInsertionEffect : !1, gi = hi || wc, Us = hi || c.useLayoutEffect, yi = /* @__PURE__ */ c.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ gc({
    key: "css"
  }) : null
), sC = yi.Provider, ls = function(t) {
  return /* @__PURE__ */ c.forwardRef(function(o, r) {
    var n = c.useContext(yi);
    return t(o, n, r);
  });
}, mr = /* @__PURE__ */ c.createContext({}), cs = {}.hasOwnProperty, On = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kc = function(t, o) {
  var r = {};
  for (var n in o)
    cs.call(o, n) && (r[n] = o[n]);
  return r[On] = t, r;
}, Pc = function(t) {
  var o = t.cache, r = t.serialized, n = t.isStringTag;
  return as(o, r, n), gi(function() {
    return is(o, r, n);
  }), null;
}, Mc = /* @__PURE__ */ ls(function(e, t, o) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var n = e[On], s = [r], a = "";
  typeof e.className == "string" ? a = fi(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var i = fr(s, void 0, c.useContext(mr));
  a += t.key + "-" + i.name;
  var l = {};
  for (var d in e)
    cs.call(e, d) && d !== "css" && d !== On && (l[d] = e[d]);
  return l.className = a, o && (l.ref = o), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(Pc, {
    cache: t,
    serialized: i,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ c.createElement(n, l));
}), Tc = Mc, _s = function(t, o) {
  var r = arguments;
  if (o == null || !cs.call(o, "css"))
    return c.createElement.apply(void 0, r);
  var n = r.length, s = new Array(n);
  s[0] = Tc, s[1] = kc(t, o);
  for (var a = 2; a < n; a++)
    s[a] = r[a];
  return c.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(_s || (_s = {}));
var Rc = /* @__PURE__ */ ls(function(e, t) {
  var o = e.styles, r = fr([o], void 0, c.useContext(mr)), n = c.useRef();
  return Us(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), i = !1, l = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (i = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), n.current = [a, i], function() {
      a.flush();
    };
  }, [t]), Us(function() {
    var s = n.current, a = s[0], i = s[1];
    if (i) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && is(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function lo() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return fr(t);
}
function Yt() {
  var e = lo.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var $c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ic = /* @__PURE__ */ ui(
  function(e) {
    return $c.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Dc = Ic, Ac = function(t) {
  return t !== "theme";
}, Gs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Dc : Ac;
}, Ks = function(t, o, r) {
  var n;
  if (o) {
    var s = o.shouldForwardProp;
    n = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof n != "function" && r && (n = t.__emotion_forwardProp), n;
}, Ec = function(t) {
  var o = t.cache, r = t.serialized, n = t.isStringTag;
  return as(o, r, n), gi(function() {
    return is(o, r, n);
  }), null;
}, Bc = function e(t, o) {
  var r = t.__emotion_real === t, n = r && t.__emotion_base || t, s, a;
  o !== void 0 && (s = o.label, a = o.target);
  var i = Ks(t, o, r), l = i || Gs(n), d = !l("as");
  return function() {
    var u = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && m.push("label:" + s + ";"), u[0] == null || u[0].raw === void 0)
      m.push.apply(m, u);
    else {
      var h = u[0];
      m.push(h[0]);
      for (var f = u.length, g = 1; g < f; g++)
        m.push(u[g], h[g]);
    }
    var v = ls(function(y, S, w) {
      var C = d && y.as || n, x = "", P = [], k = y;
      if (y.theme == null) {
        k = {};
        for (var E in y)
          k[E] = y[E];
        k.theme = c.useContext(mr);
      }
      typeof y.className == "string" ? x = fi(S.registered, P, y.className) : y.className != null && (x = y.className + " ");
      var M = fr(m.concat(P), S.registered, k);
      x += S.key + "-" + M.name, a !== void 0 && (x += " " + a);
      var R = d && i === void 0 ? Gs(C) : l, $ = {};
      for (var B in y)
        d && B === "as" || R(B) && ($[B] = y[B]);
      return $.className = x, w && ($.ref = w), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(Ec, {
        cache: S,
        serialized: M,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ c.createElement(C, $));
    });
    return v.displayName = s !== void 0 ? s : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = n, v.__emotion_styles = m, v.__emotion_forwardProp = i, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + a;
      }
    }), v.withComponent = function(y, S) {
      var w = e(y, tc({}, o, S, {
        shouldForwardProp: Ks(v, S, !0)
      }));
      return w.apply(void 0, m);
    }, v;
  };
}, Oc = [
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
  "head",
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
  "marquee",
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
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
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
  "tspan"
], Ln = Bc.bind(null);
Oc.forEach(function(e) {
  Ln[e] = Ln(e);
});
function Lc(e) {
  return e == null || Object.keys(e).length === 0;
}
function bi(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (n) => t(Lc(n) ? o : n) : t;
  return /* @__PURE__ */ b.jsx(Rc, {
    styles: r
  });
}
function vi(e, t) {
  return Ln(e, t);
}
function Nc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ys = [];
function no(e) {
  return Ys[0] = e, fr(Ys);
}
function Kt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xi(e) {
  if (/* @__PURE__ */ c.isValidElement(e) || di.isValidElementType(e) || !Kt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = xi(e[o]);
  }), t;
}
function ft(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return Kt(e) && Kt(t) && Object.keys(t).forEach((n) => {
    /* @__PURE__ */ c.isValidElement(t[n]) || di.isValidElementType(t[n]) ? r[n] = t[n] : Kt(t[n]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, n) && Kt(e[n]) ? r[n] = ft(e[n], t[n], o) : o.clone ? r[n] = Kt(t[n]) ? xi(t[n]) : t[n] : r[n] = t[n];
  }), r;
}
const zc = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function Fc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5,
    ...n
  } = e, s = zc(t), a = Object.keys(s);
  function i(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function d(h, f) {
    const g = a.indexOf(f);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : f) - r / 100}${o})`;
  }
  function u(h) {
    return a.indexOf(h) + 1 < a.length ? d(h, a[a.indexOf(h) + 1]) : i(h);
  }
  function m(h) {
    const f = a.indexOf(h);
    return f === 0 ? i(a[1]) : f === a.length - 1 ? l(a[f]) : d(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: i,
    down: l,
    between: d,
    only: u,
    not: m,
    unit: o,
    ...n
  };
}
function qs(e, t) {
  if (!e.containerQueries)
    return t;
  const o = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, n) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(r.match(s)?.[1] || 0) - +(n.match(s)?.[1] || 0);
  });
  return o.length ? o.reduce((r, n) => {
    const s = t[n];
    return delete r[n], r[n] = s, r;
  }, {
    ...t
  }) : t;
}
function jc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function Wc(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, r, n] = o, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(n).up(s);
}
function Vc(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function o(s, a) {
    s.up = (...i) => t(e.breakpoints.up(...i), a), s.down = (...i) => t(e.breakpoints.down(...i), a), s.between = (...i) => t(e.breakpoints.between(...i), a), s.only = (...i) => t(e.breakpoints.only(...i), a), s.not = (...i) => {
      const l = t(e.breakpoints.not(...i), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {}, n = (s) => (o(r, s), r);
  return o(n), {
    ...e,
    containerQueries: n
  };
}
const Hc = {
  borderRadius: 4
};
function sr(e, t) {
  return t ? ft(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Kr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Xs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Kr[e]}px)`
}, Uc = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : Kr[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Nt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Xs;
    return t.reduce((a, i, l) => (a[s.up(s.keys[l])] = o(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Xs;
    return Object.keys(t).reduce((a, i) => {
      if (jc(s.keys, i)) {
        const l = Wc(r.containerQueries ? r : Uc, i);
        l && (a[l] = o(t[i], i));
      } else if (Object.keys(s.values || Kr).includes(i)) {
        const l = s.up(i);
        a[l] = o(t[i], i);
      } else {
        const l = i;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return o(t);
}
function Ci(e = {}) {
  return e.keys?.reduce((o, r) => {
    const n = e.up(r);
    return o[n] = {}, o;
  }, {}) || {};
}
function Nn(e, t) {
  return e.reduce((o, r) => {
    const n = o[r];
    return (!n || Object.keys(n).length === 0) && delete o[r], o;
  }, t);
}
function _c(e, ...t) {
  const o = Ci(e), r = [o, ...t].reduce((n, s) => ft(n, s), {});
  return Nn(Object.keys(o), r);
}
function Gc(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((n, s) => {
    s < e.length && (o[n] = !0);
  }) : r.forEach((n) => {
    e[n] != null && (o[n] = !0);
  }), o;
}
function vn({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Gc(e, t), n = Object.keys(r);
  if (n.length === 0)
    return e;
  let s;
  return n.reduce((a, i, l) => (Array.isArray(e) ? (a[i] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[i] = e[i] != null ? e[i] : e[s], s = i) : a[i] = e, a), {});
}
function L(e) {
  if (typeof e != "string")
    throw new Error(to(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gt(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((n, s) => n && n[s] ? n[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, e);
}
function Lr(e, t, o, r = o) {
  let n;
  return typeof e == "function" ? n = e(o) : Array.isArray(e) ? n = e[o] || r : n = Gt(e, o) || r, t && (n = t(n, r, e)), n;
}
function at(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: n
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const i = a[t], l = a.theme, d = Gt(l, r) || {};
    return Nt(a, i, (m) => {
      let h = Lr(d, n, m);
      return m === h && typeof m == "string" && (h = Lr(d, n, `${t}${m === "default" ? "" : L(m)}`, m)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return s.propTypes = {}, s.filterProps = [t], s;
}
function Kc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Yc = {
  m: "margin",
  p: "padding"
}, qc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xc = Kc((e) => {
  if (e.length > 2)
    if (Qs[e])
      e = Qs[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Yc[t], n = qc[o] || "";
  return Array.isArray(n) ? n.map((s) => r + s) : [r + n];
}), ds = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], us = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ds, ...us];
function hr(e, t, o, r) {
  const n = Gt(e, t, !0) ?? o;
  return typeof n == "number" || typeof n == "string" ? (s) => typeof s == "string" ? s : typeof n == "string" ? n.startsWith("var(") && s === 0 ? 0 : n.startsWith("var(") && s === 1 ? n : `calc(${s} * ${n})` : n * s : Array.isArray(n) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s), i = n[a];
    return s >= 0 ? i : typeof i == "number" ? -i : typeof i == "string" && i.startsWith("var(") ? `calc(-1 * ${i})` : `-${i}`;
  } : typeof n == "function" ? n : () => {
  };
}
function Yr(e) {
  return hr(e, "spacing", 8);
}
function xo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Qc(e, t) {
  return (o) => e.reduce((r, n) => (r[n] = xo(t, o), r), {});
}
function Zc(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const n = Xc(o), s = Qc(n, r), a = e[o];
  return Nt(e, a, s);
}
function Si(e, t) {
  const o = Yr(e.theme);
  return Object.keys(e).map((r) => Zc(e, t, r, o)).reduce(sr, {});
}
function tt(e) {
  return Si(e, ds);
}
tt.propTypes = {};
tt.filterProps = ds;
function ot(e) {
  return Si(e, us);
}
ot.propTypes = {};
ot.filterProps = us;
function wi(e = 8, t = Yr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...r) => (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return o.mui = !0, o;
}
function qr(...e) {
  const t = e.reduce((r, n) => (n.filterProps.forEach((s) => {
    r[s] = n;
  }), r), {}), o = (r) => Object.keys(r).reduce((n, s) => t[s] ? sr(n, t[s](r)) : n, {});
  return o.propTypes = {}, o.filterProps = e.reduce((r, n) => r.concat(n.filterProps), []), o;
}
function Dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Bt(e, t) {
  return at({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Jc = Bt("border", Dt), ed = Bt("borderTop", Dt), td = Bt("borderRight", Dt), od = Bt("borderBottom", Dt), rd = Bt("borderLeft", Dt), nd = Bt("borderColor"), sd = Bt("borderTopColor"), ad = Bt("borderRightColor"), id = Bt("borderBottomColor"), ld = Bt("borderLeftColor"), cd = Bt("outline", Dt), dd = Bt("outlineColor"), Xr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = hr(e.theme, "shape.borderRadius", 4), o = (r) => ({
      borderRadius: xo(t, r)
    });
    return Nt(e, e.borderRadius, o);
  }
  return null;
};
Xr.propTypes = {};
Xr.filterProps = ["borderRadius"];
qr(Jc, ed, td, od, rd, nd, sd, ad, id, ld, Xr, cd, dd);
const Qr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = hr(e.theme, "spacing", 8), o = (r) => ({
      gap: xo(t, r)
    });
    return Nt(e, e.gap, o);
  }
  return null;
};
Qr.propTypes = {};
Qr.filterProps = ["gap"];
const Zr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = hr(e.theme, "spacing", 8), o = (r) => ({
      columnGap: xo(t, r)
    });
    return Nt(e, e.columnGap, o);
  }
  return null;
};
Zr.propTypes = {};
Zr.filterProps = ["columnGap"];
const Jr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = hr(e.theme, "spacing", 8), o = (r) => ({
      rowGap: xo(t, r)
    });
    return Nt(e, e.rowGap, o);
  }
  return null;
};
Jr.propTypes = {};
Jr.filterProps = ["rowGap"];
const ud = at({
  prop: "gridColumn"
}), pd = at({
  prop: "gridRow"
}), fd = at({
  prop: "gridAutoFlow"
}), md = at({
  prop: "gridAutoColumns"
}), hd = at({
  prop: "gridAutoRows"
}), gd = at({
  prop: "gridTemplateColumns"
}), yd = at({
  prop: "gridTemplateRows"
}), bd = at({
  prop: "gridTemplateAreas"
}), vd = at({
  prop: "gridArea"
});
qr(Qr, Zr, Jr, ud, pd, fd, md, hd, gd, yd, bd, vd);
function Ao(e, t) {
  return t === "grey" ? t : e;
}
const xd = at({
  prop: "color",
  themeKey: "palette",
  transform: Ao
}), Cd = at({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ao
}), Sd = at({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ao
});
qr(xd, Cd, Sd);
function Pt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wd = at({
  prop: "width",
  transform: Pt
}), ps = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      const r = e.theme?.breakpoints?.values?.[o] || Kr[o];
      return r ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Pt(o)
      };
    };
    return Nt(e, e.maxWidth, t);
  }
  return null;
};
ps.filterProps = ["maxWidth"];
const kd = at({
  prop: "minWidth",
  transform: Pt
}), Pd = at({
  prop: "height",
  transform: Pt
}), Md = at({
  prop: "maxHeight",
  transform: Pt
}), Td = at({
  prop: "minHeight",
  transform: Pt
});
at({
  prop: "size",
  cssProperty: "width",
  transform: Pt
});
at({
  prop: "size",
  cssProperty: "height",
  transform: Pt
});
const Rd = at({
  prop: "boxSizing"
});
qr(wd, ps, kd, Pd, Md, Td, Rd);
const gr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Dt
  },
  borderTop: {
    themeKey: "borders",
    transform: Dt
  },
  borderRight: {
    themeKey: "borders",
    transform: Dt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Dt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Dt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Dt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Xr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ao
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ao
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ao
  },
  // spacing
  p: {
    style: ot
  },
  pt: {
    style: ot
  },
  pr: {
    style: ot
  },
  pb: {
    style: ot
  },
  pl: {
    style: ot
  },
  px: {
    style: ot
  },
  py: {
    style: ot
  },
  padding: {
    style: ot
  },
  paddingTop: {
    style: ot
  },
  paddingRight: {
    style: ot
  },
  paddingBottom: {
    style: ot
  },
  paddingLeft: {
    style: ot
  },
  paddingX: {
    style: ot
  },
  paddingY: {
    style: ot
  },
  paddingInline: {
    style: ot
  },
  paddingInlineStart: {
    style: ot
  },
  paddingInlineEnd: {
    style: ot
  },
  paddingBlock: {
    style: ot
  },
  paddingBlockStart: {
    style: ot
  },
  paddingBlockEnd: {
    style: ot
  },
  m: {
    style: tt
  },
  mt: {
    style: tt
  },
  mr: {
    style: tt
  },
  mb: {
    style: tt
  },
  ml: {
    style: tt
  },
  mx: {
    style: tt
  },
  my: {
    style: tt
  },
  margin: {
    style: tt
  },
  marginTop: {
    style: tt
  },
  marginRight: {
    style: tt
  },
  marginBottom: {
    style: tt
  },
  marginLeft: {
    style: tt
  },
  marginX: {
    style: tt
  },
  marginY: {
    style: tt
  },
  marginInline: {
    style: tt
  },
  marginInlineStart: {
    style: tt
  },
  marginInlineEnd: {
    style: tt
  },
  marginBlock: {
    style: tt
  },
  marginBlockStart: {
    style: tt
  },
  marginBlockEnd: {
    style: tt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qr
  },
  rowGap: {
    style: Jr
  },
  columnGap: {
    style: Zr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Pt
  },
  maxWidth: {
    style: ps
  },
  minWidth: {
    transform: Pt
  },
  height: {
    transform: Pt
  },
  maxHeight: {
    transform: Pt
  },
  minHeight: {
    transform: Pt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function $d(...e) {
  const t = e.reduce((r, n) => r.concat(Object.keys(n)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Id(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dd() {
  function e(o, r, n, s) {
    const a = {
      [o]: r,
      theme: n
    }, i = s[o];
    if (!i)
      return {
        [o]: r
      };
    const {
      cssProperty: l = o,
      themeKey: d,
      transform: u,
      style: m
    } = i;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = Gt(n, d) || {};
    return m ? m(a) : Nt(a, r, (g) => {
      let v = Lr(h, u, g);
      return g === v && typeof g == "string" && (v = Lr(h, u, `${o}${g === "default" ? "" : L(g)}`, g)), l === !1 ? v : {
        [l]: v
      };
    });
  }
  function t(o) {
    const {
      sx: r,
      theme: n = {},
      nested: s
    } = o || {};
    if (!r)
      return null;
    const a = n.unstable_sxConfig ?? gr;
    function i(l) {
      let d = l;
      if (typeof l == "function")
        d = l(n);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const u = Ci(n.breakpoints), m = Object.keys(u);
      let h = u;
      return Object.keys(d).forEach((f) => {
        const g = Id(d[f], n);
        if (g != null)
          if (typeof g == "object")
            if (a[f])
              h = sr(h, e(f, g, n, a));
            else {
              const v = Nt({
                theme: n
              }, g, (y) => ({
                [f]: y
              }));
              $d(v, g) ? h[f] = t({
                sx: g,
                theme: n,
                nested: !0
              }) : h = sr(h, v);
            }
          else
            h = sr(h, e(f, g, n, a));
      }), !s && n.modularCssLayers ? {
        "@layer sx": qs(n, Nn(m, h))
      } : qs(n, Nn(m, h));
    }
    return Array.isArray(r) ? r.map(i) : i(r);
  }
  return t;
}
const so = Dd();
so.filterProps = ["sx"];
function Ad(e, t) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[e] || typeof o.getColorSchemeSelector != "function")
      return {};
    let r = o.getColorSchemeSelector(e);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
      [r]: t
    });
  }
  return o.palette.mode === e ? t : {};
}
function yr(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: n,
    shape: s = {},
    ...a
  } = e, i = Fc(o), l = wi(n);
  let d = ft({
    breakpoints: i,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...Hc,
      ...s
    }
  }, a);
  return d = Vc(d), d.applyStyles = Ad, d = t.reduce((u, m) => ft(u, m), d), d.unstable_sxConfig = {
    ...gr,
    ...a?.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return so({
      sx: m,
      theme: this
    });
  }, d;
}
function Ed(e) {
  return Object.keys(e).length === 0;
}
function en(e = null) {
  const t = c.useContext(mr);
  return !t || Ed(t) ? e : t;
}
const Bd = yr();
function br(e = Bd) {
  return en(e);
}
function xn(e) {
  const t = no(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ki({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = br(o), n = t && r[t] || r;
  let s = typeof e == "function" ? e(n) : e;
  return n.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => xn(typeof a == "function" ? a(n) : a)) : s = xn(s)), /* @__PURE__ */ b.jsx(bi, {
    styles: s
  });
}
const Od = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = e?.theme?.unstable_sxConfig ?? gr;
  return Object.keys(e).forEach((r) => {
    o[r] ? t.systemProps[r] = e[r] : t.otherProps[r] = e[r];
  }), t;
};
function tn(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: n
  } = Od(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const i = t(...a);
    return Kt(i) ? {
      ...r,
      ...i
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...n,
    sx: s
  };
}
const Zs = (e) => e, Ld = () => {
  let e = Zs;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zs;
    }
  };
}, Pi = Ld();
function Nd(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: n
  } = e, s = vi("div", {
    shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as"
  })(so);
  return /* @__PURE__ */ c.forwardRef(function(l, d) {
    const u = br(o), {
      className: m,
      component: h = "div",
      ...f
    } = tn(l);
    return /* @__PURE__ */ b.jsx(s, {
      as: h,
      ref: d,
      className: V(m, n ? n(r) : r),
      theme: t && u[t] || u,
      ...f
    });
  });
}
const zd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ee(e, t, o = "Mui") {
  const r = zd[t];
  return r ? `${o}-${r}` : `${Pi.generate(e)}-${t}`;
}
function J(e, t, o = "Mui") {
  const r = {};
  return t.forEach((n) => {
    r[n] = ee(e, n, o);
  }), r;
}
function Mi(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: no(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((n) => {
    typeof n.style != "function" && (n.style = no(n.style));
  }), r;
}
const Fd = yr();
function Cn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function yo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function jd(e) {
  return e ? (t, o) => o[e] : null;
}
function Wd(e, t, o) {
  e.theme = Hd(e.theme) ? o : e.theme[t] || e.theme;
}
function Ar(e, t, o) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Ar(e, n, o));
  if (Array.isArray(r?.variants)) {
    let n;
    if (r.isProcessed)
      n = o ? yo(r.style, o) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      n = o ? yo(no(a), o) : a;
    }
    return Ti(e, r.variants, [n], o);
  }
  return r?.isProcessed ? o ? yo(no(r.style), o) : r.style : o ? yo(no(r), o) : r;
}
function Ti(e, t, o = [], r = void 0) {
  let n;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (n ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(n))
        continue;
    } else
      for (const i in a.props)
        if (e[i] !== a.props[i] && e.ownerState?.[i] !== a.props[i])
          continue e;
    typeof a.style == "function" ? (n ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, o.push(r ? yo(no(a.style(n)), r) : a.style(n))) : o.push(r ? yo(no(a.style), r) : a.style);
  }
  return o;
}
function Ri(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Fd,
    rootShouldForwardProp: r = Cn,
    slotShouldForwardProp: n = Cn
  } = e;
  function s(i) {
    Wd(i, t, o);
  }
  return (i, l = {}) => {
    Nc(i, (k) => k.filter((E) => E !== so));
    const {
      name: d,
      slot: u,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = jd(_d(u)),
      ...g
    } = l, v = d && d.startsWith("Mui") || u ? "components" : "custom", y = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), S = h || !1;
    let w = Cn;
    u === "Root" || u === "root" ? w = r : u ? w = n : Ud(i) && (w = void 0);
    const C = vi(i, {
      shouldForwardProp: w,
      label: Vd(),
      ...g
    }), x = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(M) {
          return Ar(M, k, M.theme.modularCssLayers ? v : void 0);
        };
      if (Kt(k)) {
        const E = Mi(k);
        return function(R) {
          return E.variants ? Ar(R, E, R.theme.modularCssLayers ? v : void 0) : R.theme.modularCssLayers ? yo(E.style, v) : E.style;
        };
      }
      return k;
    }, P = (...k) => {
      const E = [], M = k.map(x), R = [];
      if (E.push(s), d && f && R.push(function(T) {
        const A = T.theme.components?.[d]?.styleOverrides;
        if (!A)
          return null;
        const D = {};
        for (const W in A)
          D[W] = Ar(T, A[W], T.theme.modularCssLayers ? "theme" : void 0);
        return f(T, D);
      }), d && !y && R.push(function(T) {
        const A = T.theme?.components?.[d]?.variants;
        return A ? Ti(T, A, [], T.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || R.push(so), Array.isArray(M[0])) {
        const p = M.shift(), T = new Array(E.length).fill(""), I = new Array(R.length).fill("");
        let A;
        A = [...T, ...p, ...I], A.raw = [...T, ...p.raw, ...I], E.unshift(A);
      }
      const $ = [...E, ...M, ...R], B = C(...$);
      return i.muiName && (B.muiName = i.muiName), B;
    };
    return C.withConfig && (P.withConfig = C.withConfig), P;
  };
}
function Vd(e, t) {
  return void 0;
}
function Hd(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ud(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function _d(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const $i = Ri();
function Lo(e, t, o = !1) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const s = n;
      if (s === "components" || s === "slots")
        r[s] = {
          ...e[s],
          ...r[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], i = t[s];
        if (!i)
          r[s] = a || {};
        else if (!a)
          r[s] = i;
        else {
          r[s] = {
            ...i
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const d = l;
              r[s][d] = Lo(a[d], i[d], o);
            }
        }
      } else s === "className" && o && t.className ? r.className = V(e?.className, t?.className) : s === "style" && o && t.style ? r.style = {
        ...e?.style,
        ...t?.style
      } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function Ii(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Lo(t.components[o].defaultProps, r);
}
function fs({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let n = br(o);
  return r && (n = n[r] || n), Ii({
    theme: n,
    name: t,
    props: e
  });
}
const bt = typeof window < "u" ? c.useLayoutEffect : c.useEffect;
function Gd(e, t, o, r, n) {
  const [s, a] = c.useState(() => n && o ? o(e).matches : r ? r(e).matches : t);
  return bt(() => {
    if (!o)
      return;
    const i = o(e), l = () => {
      a(i.matches);
    };
    return l(), i.addEventListener("change", l), () => {
      i.removeEventListener("change", l);
    };
  }, [e, o]), s;
}
const Kd = {
  ...Or
}, Di = Kd.useSyncExternalStore;
function Yd(e, t, o, r, n) {
  const s = c.useCallback(() => t, [t]), a = c.useMemo(() => {
    if (n && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: u
      } = r(e);
      return () => u;
    }
    return s;
  }, [s, e, r, n, o]), [i, l] = c.useMemo(() => {
    if (o === null)
      return [s, () => () => {
      }];
    const u = o(e);
    return [() => u.matches, (m) => (u.addEventListener("change", m), () => {
      u.removeEventListener("change", m);
    })];
  }, [s, o, e]);
  return Di(l, i, a);
}
function Ai(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, n = {}) {
    let s = en();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: i = !1,
      matchMedia: l = a ? window.matchMedia : null,
      ssrMatchMedia: d = null,
      noSsr: u = !1
    } = Ii({
      name: "MuiUseMediaQuery",
      props: n,
      theme: s
    });
    let m = typeof r == "function" ? r(s) : r;
    return m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Di !== void 0 ? Yd : Gd)(m, i, l, d, u);
  };
}
Ai();
function qd(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function ms(e, t = 0, o = 1) {
  return qd(e, t, o);
}
function Xd(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ao(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ao(Xd(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(to(9, e));
  let r = e.substring(t + 1, e.length - 1), n;
  if (o === "color") {
    if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(n))
      throw new Error(to(10, n));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: n
  };
}
const Qd = (e) => {
  const t = ao(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, or = (e, t) => {
  try {
    return Qd(e);
  } catch {
    return e;
  }
};
function on(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((n, s) => s < 3 ? parseInt(n, 10) : n) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ei(e) {
  e = ao(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, n = t[2] / 100, s = r * Math.min(n, 1 - n), a = (d, u = (d + o / 30) % 12) => n - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let i = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (i += "a", l.push(t[3])), on({
    type: i,
    values: l
  });
}
function zn(e) {
  e = ao(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ao(Ei(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Zd(e, t) {
  const o = zn(e), r = zn(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function zt(e, t) {
  return e = ao(e), t = ms(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, on(e);
}
function fo(e, t, o) {
  try {
    return zt(e, t);
  } catch {
    return e;
  }
}
function rn(e, t) {
  if (e = ao(e), t = ms(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return on(e);
}
function We(e, t, o) {
  try {
    return rn(e, t);
  } catch {
    return e;
  }
}
function nn(e, t) {
  if (e = ao(e), t = ms(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return on(e);
}
function Ve(e, t, o) {
  try {
    return nn(e, t);
  } catch {
    return e;
  }
}
function Jd(e, t = 0.15) {
  return zn(e) > 0.5 ? rn(e, t) : nn(e, t);
}
function xr(e, t, o) {
  try {
    return Jd(e, t);
  } catch {
    return e;
  }
}
const Bi = /* @__PURE__ */ c.createContext(null);
function hs() {
  return c.useContext(Bi);
}
const eu = typeof Symbol == "function" && Symbol.for, tu = eu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ou(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function ru(e) {
  const {
    children: t,
    theme: o
  } = e, r = hs(), n = c.useMemo(() => {
    const s = r === null ? {
      ...o
    } : ou(r, o);
    return s != null && (s[tu] = r !== null), s;
  }, [o, r]);
  return /* @__PURE__ */ b.jsx(Bi.Provider, {
    value: n,
    children: t
  });
}
const Oi = /* @__PURE__ */ c.createContext();
function nu({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ b.jsx(Oi.Provider, {
    value: e ?? !0,
    ...t
  });
}
const qt = () => c.useContext(Oi) ?? !1, Li = /* @__PURE__ */ c.createContext(void 0);
function su({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ b.jsx(Li.Provider, {
    value: e,
    children: t
  });
}
function au(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const n = t.components[o];
  return n.defaultProps ? Lo(n.defaultProps, r, t.components.mergeClassNameAndStyle) : !n.styleOverrides && !n.variants ? Lo(n, r, t.components.mergeClassNameAndStyle) : r;
}
function iu({
  props: e,
  name: t
}) {
  const o = c.useContext(Li);
  return au({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
let Js = 0;
function lu(e) {
  const [t, o] = c.useState(e), r = e || t;
  return c.useEffect(() => {
    t == null && (Js += 1, o(`mui-${Js}`));
  }, [t]), r;
}
const cu = {
  ...Or
}, ea = cu.useId;
function Xt(e) {
  if (ea !== void 0) {
    const t = ea();
    return e ?? t;
  }
  return lu(e);
}
function du(e) {
  const t = en(), o = Xt() || "", {
    modularCssLayers: r
  } = e;
  let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, bt(() => {
    const s = document.querySelector("head");
    if (!s)
      return;
    const a = s.firstChild;
    if (n) {
      if (a && a.hasAttribute?.("data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === o)
        return;
      const i = document.createElement("style");
      i.setAttribute("data-mui-layer-order", o), i.textContent = n, s.prepend(i);
    } else
      s.querySelector(`style[data-mui-layer-order="${o}"]`)?.remove();
  }, [n, o]), n ? /* @__PURE__ */ b.jsx(ki, {
    styles: n
  }) : null;
}
const ta = {};
function oa(e, t, o, r = !1) {
  return c.useMemo(() => {
    const n = e && t[e] || t;
    if (typeof o == "function") {
      const s = o(n), a = e ? {
        ...t,
        [e]: s
      } : s;
      return r ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: o
    } : {
      ...t,
      ...o
    };
  }, [e, t, o, r]);
}
function Ni(e) {
  const {
    children: t,
    theme: o,
    themeId: r
  } = e, n = en(ta), s = hs() || ta, a = oa(r, n, o), i = oa(r, s, o, !0), l = (r ? a[r] : a).direction === "rtl", d = du(a);
  return /* @__PURE__ */ b.jsx(ru, {
    theme: i,
    children: /* @__PURE__ */ b.jsx(mr.Provider, {
      value: a,
      children: /* @__PURE__ */ b.jsx(nu, {
        value: l,
        children: /* @__PURE__ */ b.jsxs(su, {
          value: r ? a[r].components : a.components,
          children: [d, t]
        })
      })
    })
  });
}
const ra = {
  theme: void 0
};
function uu(e) {
  let t, o;
  return function(n) {
    let s = t;
    return (s === void 0 || n.theme !== o) && (ra.theme = n.theme, s = Mi(e(ra)), t = s, o = n.theme), s;
  };
}
const gs = "mode", ys = "color-scheme", pu = "data-color-scheme";
function fu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: n = gs,
    colorSchemeStorageKey: s = ys,
    attribute: a = pu,
    colorSchemeNode: i = "document.documentElement",
    nonce: l
  } = e || {};
  let d = "", u = a;
  if (a === "class" && (u = ".%s"), a === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const h = u.substring(1);
    d += `${i}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${i}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const m = u.match(/\[([^[\]]+)\]/);
  if (m) {
    const [h, f] = m[1].split("=");
    f || (d += `${i}.removeAttribute('${h}'.replace('%s', light));
      ${i}.removeAttribute('${h}'.replace('%s', dark));`), d += `
      ${i}.setAttribute('${h}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else u !== ".%s" && (d += `${i}.setAttribute('${u}', colorScheme);`);
  return /* @__PURE__ */ b.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${r}';
  const light = localStorage.getItem('${s}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function mu() {
}
const hu = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(o) {
    if (typeof window > "u")
      return;
    if (!t)
      return o;
    let r;
    try {
      r = t.localStorage.getItem(e);
    } catch {
    }
    return r || o;
  },
  set: (o) => {
    if (t)
      try {
        t.localStorage.setItem(e, o);
      } catch {
      }
  },
  subscribe: (o) => {
    if (!t)
      return mu;
    const r = (n) => {
      const s = n.newValue;
      n.key === e && o(s);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Sn() {
}
function na(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function zi(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function gu(e) {
  return zi(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function yu(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: r,
    supportedColorSchemes: n = [],
    modeStorageKey: s = gs,
    colorSchemeStorageKey: a = ys,
    storageWindow: i = typeof window > "u" ? void 0 : window,
    storageManager: l = hu,
    noSsr: d = !1
  } = e, u = n.join(","), m = n.length > 1, h = c.useMemo(() => l?.({
    key: s,
    storageWindow: i
  }), [l, s, i]), f = c.useMemo(() => l?.({
    key: `${a}-light`,
    storageWindow: i
  }), [l, a, i]), g = c.useMemo(() => l?.({
    key: `${a}-dark`,
    storageWindow: i
  }), [l, a, i]), [v, y] = c.useState(() => {
    const M = h?.get(t) || t, R = f?.get(o) || o, $ = g?.get(r) || r;
    return {
      mode: M,
      systemMode: na(M),
      lightColorScheme: R,
      darkColorScheme: $
    };
  }), [S, w] = c.useState(d || !m);
  c.useEffect(() => {
    w(!0);
  }, []);
  const C = gu(v), x = c.useCallback((M) => {
    y((R) => {
      if (M === R.mode)
        return R;
      const $ = M ?? t;
      return h?.set($), {
        ...R,
        mode: $,
        systemMode: na($)
      };
    });
  }, [h, t]), P = c.useCallback((M) => {
    M ? typeof M == "string" ? M && !u.includes(M) ? console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`) : y((R) => {
      const $ = {
        ...R
      };
      return zi(R, (B) => {
        B === "light" && (f?.set(M), $.lightColorScheme = M), B === "dark" && (g?.set(M), $.darkColorScheme = M);
      }), $;
    }) : y((R) => {
      const $ = {
        ...R
      }, B = M.light === null ? o : M.light, p = M.dark === null ? r : M.dark;
      return B && (u.includes(B) ? ($.lightColorScheme = B, f?.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), p && (u.includes(p) ? ($.darkColorScheme = p, g?.set(p)) : console.error(`\`${p}\` does not exist in \`theme.colorSchemes\`.`)), $;
    }) : y((R) => (f?.set(o), g?.set(r), {
      ...R,
      lightColorScheme: o,
      darkColorScheme: r
    }));
  }, [u, f, g, o, r]), k = c.useCallback((M) => {
    v.mode === "system" && y((R) => {
      const $ = M?.matches ? "dark" : "light";
      return R.systemMode === $ ? R : {
        ...R,
        systemMode: $
      };
    });
  }, [v.mode]), E = c.useRef(k);
  return E.current = k, c.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const M = (...$) => E.current(...$), R = window.matchMedia("(prefers-color-scheme: dark)");
    return R.addListener(M), M(R), () => {
      R.removeListener(M);
    };
  }, [m]), c.useEffect(() => {
    if (m) {
      const M = h?.subscribe((B) => {
        (!B || ["light", "dark", "system"].includes(B)) && x(B || t);
      }) || Sn, R = f?.subscribe((B) => {
        (!B || u.match(B)) && P({
          light: B
        });
      }) || Sn, $ = g?.subscribe((B) => {
        (!B || u.match(B)) && P({
          dark: B
        });
      }) || Sn;
      return () => {
        M(), R(), $();
      };
    }
  }, [P, x, u, t, i, m, h, f, g]), {
    ...v,
    mode: S ? v.mode : void 0,
    systemMode: S ? v.systemMode : void 0,
    colorScheme: S ? C : void 0,
    setMode: x,
    setColorScheme: P
  };
}
const bu = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function vu(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    modeStorageKey: r = gs,
    colorSchemeStorageKey: n = ys,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: a,
    resolveTheme: i
  } = e, l = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, d = /* @__PURE__ */ c.createContext(void 0), u = () => c.useContext(d) || l, m = {}, h = {};
  function f(S) {
    const {
      children: w,
      theme: C,
      modeStorageKey: x = r,
      colorSchemeStorageKey: P = n,
      disableTransitionOnChange: k = s,
      storageManager: E,
      storageWindow: M = typeof window > "u" ? void 0 : window,
      documentNode: R = typeof document > "u" ? void 0 : document,
      colorSchemeNode: $ = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: p = !1,
      defaultMode: T = "system",
      forceThemeRerender: I = !1,
      noSsr: A
    } = S, D = c.useRef(!1), W = hs(), q = c.useContext(d), U = !!q && !B, se = c.useMemo(() => C || (typeof o == "function" ? o() : o), [C]), _ = se[t], re = _ || se, {
      colorSchemes: ge = m,
      components: Pe = h,
      cssVarPrefix: oe
    } = re, Y = Object.keys(ge).filter((Ie) => !!ge[Ie]).join(","), ye = c.useMemo(() => Y.split(","), [Y]), Ce = typeof a == "string" ? a : a.light, le = typeof a == "string" ? a : a.dark, ne = ge[Ce] && ge[le] ? T : ge[re.defaultColorScheme]?.palette?.mode || re.palette?.mode, {
      mode: fe,
      setMode: Q,
      systemMode: xe,
      lightColorScheme: H,
      darkColorScheme: ue,
      colorScheme: X,
      setColorScheme: G
    } = yu({
      supportedColorSchemes: ye,
      defaultLightColorScheme: Ce,
      defaultDarkColorScheme: le,
      modeStorageKey: x,
      colorSchemeStorageKey: P,
      defaultMode: ne,
      storageManager: E,
      storageWindow: M,
      noSsr: A
    });
    let K = fe, j = X;
    U && (K = q.mode, j = q.colorScheme);
    let Te = j || re.defaultColorScheme;
    re.vars && !I && (Te = re.defaultColorScheme);
    const ce = c.useMemo(() => {
      const Ie = re.generateThemeVars?.() || re.vars, Re = {
        ...re,
        components: Pe,
        colorSchemes: ge,
        cssVarPrefix: oe,
        vars: Ie
      };
      if (typeof Re.generateSpacing == "function" && (Re.spacing = Re.generateSpacing()), Te) {
        const Fe = ge[Te];
        Fe && typeof Fe == "object" && Object.keys(Fe).forEach((Le) => {
          Fe[Le] && typeof Fe[Le] == "object" ? Re[Le] = {
            ...Re[Le],
            ...Fe[Le]
          } : Re[Le] = Fe[Le];
        });
      }
      return i ? i(Re) : Re;
    }, [re, Te, Pe, ge, oe]), ae = re.colorSchemeSelector;
    bt(() => {
      if (j && $ && ae && ae !== "media") {
        const Ie = ae;
        let Re = ae;
        if (Ie === "class" && (Re = ".%s"), Ie === "data" && (Re = "[data-%s]"), Ie?.startsWith("data-") && !Ie.includes("%s") && (Re = `[${Ie}="%s"]`), Re.startsWith("."))
          $.classList.remove(...ye.map((Fe) => Re.substring(1).replace("%s", Fe))), $.classList.add(Re.substring(1).replace("%s", j));
        else {
          const Fe = Re.replace("%s", j).match(/\[([^\]]+)\]/);
          if (Fe) {
            const [Le, lt] = Fe[1].split("=");
            lt || ye.forEach((be) => {
              $.removeAttribute(Le.replace(j, be));
            }), $.setAttribute(Le, lt ? lt.replace(/"|'/g, "") : "");
          } else
            $.setAttribute(Re, j);
        }
      }
    }, [j, ae, $, ye]), c.useEffect(() => {
      let Ie;
      if (k && D.current && R) {
        const Re = R.createElement("style");
        Re.appendChild(R.createTextNode(bu)), R.head.appendChild(Re), window.getComputedStyle(R.body), Ie = setTimeout(() => {
          R.head.removeChild(Re);
        }, 1);
      }
      return () => {
        clearTimeout(Ie);
      };
    }, [j, k, R]), c.useEffect(() => (D.current = !0, () => {
      D.current = !1;
    }), []);
    const Ke = c.useMemo(() => ({
      allColorSchemes: ye,
      colorScheme: j,
      darkColorScheme: ue,
      lightColorScheme: H,
      mode: K,
      setColorScheme: G,
      setMode: Q,
      systemMode: xe
    }), [ye, j, ue, H, K, G, Q, xe, ce.colorSchemeSelector]);
    let He = !0;
    (p || re.cssVariables === !1 || U && W?.cssVarPrefix === oe) && (He = !1);
    const mt = /* @__PURE__ */ b.jsxs(c.Fragment, {
      children: [/* @__PURE__ */ b.jsx(Ni, {
        themeId: _ ? t : void 0,
        theme: ce,
        children: w
      }), He && /* @__PURE__ */ b.jsx(bi, {
        styles: ce.generateStyleSheets?.() || []
      })]
    });
    return U ? mt : /* @__PURE__ */ b.jsx(d.Provider, {
      value: Ke,
      children: mt
    });
  }
  const g = typeof a == "string" ? a : a.light, v = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: u,
    getInitColorSchemeScript: (S) => fu({
      colorSchemeStorageKey: n,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: v,
      modeStorageKey: r,
      ...S
    })
  };
}
function xu(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const n = r[0];
    return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${n}${t(...r.slice(1))})` : `, ${n}`;
  }
  return (r, ...n) => `var(--${e ? `${e}-` : ""}${r}${t(...n)})`;
}
const sa = (e, t, o, r = []) => {
  let n = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(n) ? n[Number(s)] = o : n && typeof n == "object" && (n[s] = o) : n && typeof n == "object" && (n[s] || (n[s] = r.includes(s) ? [] : {}), n = n[s]);
  });
}, Cu = (e, t, o) => {
  function r(n, s = [], a = []) {
    Object.entries(n).forEach(([i, l]) => {
      (!o || o && !o([...s, i])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...s, i], Array.isArray(l) ? [...a, i] : a) : t([...s, i], l, a));
    });
  }
  r(e);
}, Su = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function wn(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, n = {}, s = {}, a = {};
  return Cu(
    e,
    (i, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(i, l))) {
        const u = `--${o ? `${o}-` : ""}${i.join("-")}`, m = Su(i, l);
        Object.assign(n, {
          [u]: m
        }), sa(s, i, `var(${u})`, d), sa(a, i, `var(${u}, ${m})`, d);
      }
    },
    (i) => i[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: n,
    vars: s,
    varsWithDefaults: a
  };
}
function wu(e, t = {}) {
  const {
    getSelector: o = S,
    disableCssColorScheme: r,
    colorSchemeSelector: n,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: i,
    defaultColorScheme: l = "light",
    ...d
  } = e, {
    vars: u,
    css: m,
    varsWithDefaults: h
  } = wn(d, t);
  let f = h;
  const g = {}, {
    [l]: v,
    ...y
  } = a;
  if (Object.entries(y || {}).forEach(([x, P]) => {
    const {
      vars: k,
      css: E,
      varsWithDefaults: M
    } = wn(P, t);
    f = ft(f, M), g[x] = {
      css: E,
      vars: k
    };
  }), v) {
    const {
      css: x,
      vars: P,
      varsWithDefaults: k
    } = wn(v, t);
    f = ft(f, k), g[l] = {
      css: x,
      vars: P
    };
  }
  function S(x, P) {
    let k = n;
    if (n === "class" && (k = ".%s"), n === "data" && (k = "[data-%s]"), n?.startsWith("data-") && !n.includes("%s") && (k = `[${n}="%s"]`), x) {
      if (k === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${a[x]?.palette?.mode || x})`]: {
            ":root": P
          }
        };
      if (k)
        return e.defaultColorScheme === x ? `:root, ${k.replace("%s", String(x))}` : k.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let x = {
        ...u
      };
      return Object.entries(g).forEach(([, {
        vars: P
      }]) => {
        x = ft(x, P);
      }), x;
    },
    generateStyleSheets: () => {
      const x = [], P = e.defaultColorScheme || "light";
      function k(R, $) {
        Object.keys($).length && x.push(typeof R == "string" ? {
          [R]: {
            ...$
          }
        } : R);
      }
      k(o(void 0, {
        ...m
      }), m);
      const {
        [P]: E,
        ...M
      } = g;
      if (E) {
        const {
          css: R
        } = E, $ = a[P]?.palette?.mode, B = !r && $ ? {
          colorScheme: $,
          ...R
        } : {
          ...R
        };
        k(o(P, {
          ...B
        }), B);
      }
      return Object.entries(M).forEach(([R, {
        css: $
      }]) => {
        const B = a[R]?.palette?.mode, p = !r && B ? {
          colorScheme: B,
          ...$
        } : {
          ...$
        };
        k(o(R, {
          ...p
        }), p);
      }), s && x.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), x;
    }
  };
}
function ku(e) {
  return function(o) {
    return e === "media" ? `@media (prefers-color-scheme: ${o})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function te(e, t, o = void 0) {
  const r = {};
  for (const n in e) {
    const s = e[n];
    let a = "", i = !0;
    for (let l = 0; l < s.length; l += 1) {
      const d = s[l];
      d && (a += (i === !0 ? "" : " ") + t(d), i = !1, o && o[d] && (a += " " + o[d]));
    }
    r[n] = a;
  }
  return r;
}
function Eo(e, t) {
  return /* @__PURE__ */ c.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
const Pu = (e, t) => e.filter((o) => t.includes(o)), jo = (e, t, o) => {
  const r = e.keys[0];
  Array.isArray(t) ? t.forEach((n, s) => {
    o((a, i) => {
      s <= e.keys.length - 1 && (s === 0 ? Object.assign(a, i) : a[e.up(e.keys[s])] = i);
    }, n);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : Pu(e.keys, Object.keys(t))).forEach((s) => {
    if (e.keys.includes(s)) {
      const a = t[s];
      a !== void 0 && o((i, l) => {
        r === s ? Object.assign(i, l) : i[e.up(s)] = l;
      }, a);
    }
  }) : (typeof t == "number" || typeof t == "string") && o((n, s) => {
    Object.assign(n, s);
  }, t);
};
function Nr(e) {
  return `--Grid-${e}Spacing`;
}
function sn(e) {
  return `--Grid-parent-${e}Spacing`;
}
const aa = "--Grid-columns", Bo = "--Grid-parent-columns", Mu = ({
  theme: e,
  ownerState: t
}) => {
  const o = {};
  return jo(e.breakpoints, t.size, (r, n) => {
    let s = {};
    n === "grow" && (s = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), n === "auto" && (s = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof n == "number" && (s = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${n} / var(${Bo}) - (var(${Bo}) - ${n}) * (var(${sn("column")}) / var(${Bo})))`
    }), r(o, s);
  }), o;
}, Tu = ({
  theme: e,
  ownerState: t
}) => {
  const o = {};
  return jo(e.breakpoints, t.offset, (r, n) => {
    let s = {};
    n === "auto" && (s = {
      marginLeft: "auto"
    }), typeof n == "number" && (s = {
      marginLeft: n === 0 ? "0px" : `calc(100% * ${n} / var(${Bo}) + var(${sn("column")}) * ${n} / var(${Bo}))`
    }), r(o, s);
  }), o;
}, Ru = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const o = {
    [aa]: 12
  };
  return jo(e.breakpoints, t.columns, (r, n) => {
    const s = n ?? 12;
    r(o, {
      [aa]: s,
      "> *": {
        [Bo]: s
      }
    });
  }), o;
}, $u = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const o = {};
  return jo(e.breakpoints, t.rowSpacing, (r, n) => {
    const s = typeof n == "string" ? n : e.spacing?.(n);
    r(o, {
      [Nr("row")]: s,
      "> *": {
        [sn("row")]: s
      }
    });
  }), o;
}, Iu = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const o = {};
  return jo(e.breakpoints, t.columnSpacing, (r, n) => {
    const s = typeof n == "string" ? n : e.spacing?.(n);
    r(o, {
      [Nr("column")]: s,
      "> *": {
        [sn("column")]: s
      }
    });
  }), o;
}, Du = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const o = {};
  return jo(e.breakpoints, t.direction, (r, n) => {
    r(o, {
      flexDirection: n
    });
  }), o;
}, Au = ({
  ownerState: e
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...e.container && {
    display: "flex",
    flexWrap: "wrap",
    ...e.wrap && e.wrap !== "wrap" && {
      flexWrap: e.wrap
    },
    gap: `var(${Nr("row")}) var(${Nr("column")})`
  }
}), Eu = (e) => {
  const t = [];
  return Object.entries(e).forEach(([o, r]) => {
    r !== !1 && r !== void 0 && t.push(`grid-${o}-${String(r)}`);
  }), t;
}, Bu = (e, t = "xs") => {
  function o(r) {
    return r === void 0 ? !1 : typeof r == "string" && !Number.isNaN(Number(r)) || typeof r == "number" && r > 0;
  }
  if (o(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const r = [];
    return Object.entries(e).forEach(([n, s]) => {
      o(s) && r.push(`spacing-${n}-${String(s)}`);
    }), r;
  }
  return [];
}, Ou = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, o]) => `direction-${t}-${o}`) : [`direction-xs-${String(e)}`];
function Lu(e, t) {
  e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((o) => {
    e[o] !== void 0 && delete e[o];
  });
}
const Nu = yr(), zu = $i("div", {
  name: "MuiGrid",
  slot: "Root"
});
function Fu(e) {
  return fs({
    props: e,
    name: "MuiGrid",
    defaultTheme: Nu
  });
}
function ju(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = zu,
    useThemeProps: o = Fu,
    useTheme: r = br,
    componentName: n = "MuiGrid"
  } = e, s = (d, u) => {
    const {
      container: m,
      direction: h,
      spacing: f,
      wrap: g,
      size: v
    } = d, y = {
      root: ["root", m && "container", g !== "wrap" && `wrap-xs-${String(g)}`, ...Ou(h), ...Eu(v), ...m ? Bu(f, u.breakpoints.keys[0]) : []]
    };
    return te(y, (S) => ee(n, S), {});
  };
  function a(d, u, m = () => !0) {
    const h = {};
    return d === null || (Array.isArray(d) ? d.forEach((f, g) => {
      f !== null && m(f) && u.keys[g] && (h[u.keys[g]] = f);
    }) : typeof d == "object" ? Object.keys(d).forEach((f) => {
      const g = d[f];
      g != null && m(g) && (h[f] = g);
    }) : h[u.keys[0]] = d), h;
  }
  const i = t(Ru, Iu, $u, Mu, Du, Au, Tu), l = /* @__PURE__ */ c.forwardRef(function(u, m) {
    const h = r(), f = o(u), g = tn(f);
    Lu(g, h.breakpoints);
    const {
      className: v,
      children: y,
      columns: S = 12,
      container: w = !1,
      component: C = "div",
      direction: x = "row",
      wrap: P = "wrap",
      size: k = {},
      offset: E = {},
      spacing: M = 0,
      rowSpacing: R = M,
      columnSpacing: $ = M,
      unstable_level: B = 0,
      ...p
    } = g, T = a(k, h.breakpoints, (_) => _ !== !1), I = a(E, h.breakpoints), A = u.columns ?? (B ? void 0 : S), D = u.spacing ?? (B ? void 0 : M), W = u.rowSpacing ?? u.spacing ?? (B ? void 0 : R), q = u.columnSpacing ?? u.spacing ?? (B ? void 0 : $), U = {
      ...g,
      level: B,
      columns: A,
      container: w,
      direction: x,
      wrap: P,
      spacing: D,
      rowSpacing: W,
      columnSpacing: q,
      size: T,
      offset: I
    }, se = s(U, h);
    return /* @__PURE__ */ b.jsx(i, {
      ref: m,
      as: C,
      ownerState: U,
      className: V(se.root, v),
      ...p,
      children: c.Children.map(y, (_) => /* @__PURE__ */ c.isValidElement(_) && Eo(_, ["Grid"]) && w && _.props.container ? /* @__PURE__ */ c.cloneElement(_, {
        unstable_level: _.props?.unstable_level ?? B + 1
      }) : _)
    });
  });
  return l.muiName = "Grid", l;
}
const Wu = yr(), Vu = $i("div", {
  name: "MuiStack",
  slot: "Root"
});
function Hu(e) {
  return fs({
    props: e,
    name: "MuiStack",
    defaultTheme: Wu
  });
}
function Uu(e, t) {
  const o = c.Children.toArray(e).filter(Boolean);
  return o.reduce((r, n, s) => (r.push(n), s < o.length - 1 && r.push(/* @__PURE__ */ c.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const _u = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Gu = ({
  ownerState: e,
  theme: t
}) => {
  let o = {
    display: "flex",
    flexDirection: "column",
    ...Nt({
      theme: t
    }, vn({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Yr(t), n = Object.keys(t.breakpoints.values).reduce((l, d) => ((typeof e.spacing == "object" && e.spacing[d] != null || typeof e.direction == "object" && e.direction[d] != null) && (l[d] = !0), l), {}), s = vn({
      values: e.direction,
      base: n
    }), a = vn({
      values: e.spacing,
      base: n
    });
    typeof s == "object" && Object.keys(s).forEach((l, d, u) => {
      if (!s[l]) {
        const h = d > 0 ? s[u[d - 1]] : "column";
        s[l] = h;
      }
    }), o = ft(o, Nt({
      theme: t
    }, a, (l, d) => e.useFlexGap ? {
      gap: xo(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${_u(d ? s[d] : e.direction)}`]: xo(r, l)
      }
    }));
  }
  return o = _c(t.breakpoints, o), o;
};
function Ku(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Vu,
    useThemeProps: o = Hu,
    componentName: r = "MuiStack"
  } = e, n = () => te({
    root: ["root"]
  }, (l) => ee(r, l), {}), s = t(Gu);
  return /* @__PURE__ */ c.forwardRef(function(l, d) {
    const u = o(l), m = tn(u), {
      component: h = "div",
      direction: f = "column",
      spacing: g = 0,
      divider: v,
      children: y,
      className: S,
      useFlexGap: w = !1,
      ...C
    } = m, x = {
      direction: f,
      spacing: g,
      useFlexGap: w
    }, P = n();
    return /* @__PURE__ */ b.jsx(s, {
      as: h,
      ownerState: x,
      ref: d,
      className: V(P.root, S),
      ...C,
      children: v ? Uu(y, v) : y
    });
  });
}
const ur = {
  black: "#000",
  white: "#fff"
}, Yu = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ko = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Po = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Yo = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Mo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, To = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ro = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Fi() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ur.white,
      default: ur.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ji = Fi();
function Wi() {
  return {
    text: {
      primary: ur.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ur.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Fn = Wi();
function ia(e, t, o, r) {
  const n = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = nn(e.main, n) : t === "dark" && (e.dark = rn(e.main, s)));
}
function la(e, t, o, r, n) {
  const s = n.light || n, a = n.dark || n * 1.5;
  t[o] || (t.hasOwnProperty(r) ? t[o] = t[r] : o === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : o === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function qu(e = "light") {
  return e === "dark" ? {
    main: Mo[200],
    light: Mo[50],
    dark: Mo[400]
  } : {
    main: Mo[700],
    light: Mo[400],
    dark: Mo[800]
  };
}
function Xu(e = "light") {
  return e === "dark" ? {
    main: ko[200],
    light: ko[50],
    dark: ko[400]
  } : {
    main: ko[500],
    light: ko[300],
    dark: ko[700]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: Po[500],
    light: Po[300],
    dark: Po[700]
  } : {
    main: Po[700],
    light: Po[400],
    dark: Po[800]
  };
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: To[400],
    light: To[300],
    dark: To[700]
  } : {
    main: To[700],
    light: To[500],
    dark: To[900]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: Ro[400],
    light: Ro[300],
    dark: Ro[700]
  } : {
    main: Ro[800],
    light: Ro[500],
    dark: Ro[900]
  };
}
function ep(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Yo[500],
    dark: Yo[900]
  };
}
function tp(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function bs(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    colorSpace: n,
    ...s
  } = e, a = e.primary || qu(t), i = e.secondary || Xu(t), l = e.error || Qu(t), d = e.info || Zu(t), u = e.success || Ju(t), m = e.warning || ep(t);
  function h(y) {
    return n ? tp(y) : Zd(y, Fn.text.primary) >= o ? Fn.text.primary : ji.text.primary;
  }
  const f = ({
    color: y,
    name: S,
    mainShade: w = 500,
    lightShade: C = 300,
    darkShade: x = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[w] && (y.main = y[w]), !y.hasOwnProperty("main"))
      throw new Error(to(11, S ? ` (${S})` : "", w));
    if (typeof y.main != "string")
      throw new Error(to(12, S ? ` (${S})` : "", JSON.stringify(y.main)));
    return n ? (la(n, y, "light", C, r), la(n, y, "dark", x, r)) : (ia(y, "light", C, r), ia(y, "dark", x, r)), y.contrastText || (y.contrastText = h(y.main)), y;
  };
  let g;
  return t === "light" ? g = Fi() : t === "dark" && (g = Wi()), ft({
    // A collection of common colors.
    common: {
      ...ur
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Yu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, s);
}
function op(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [n, s] = r;
    typeof s == "object" && (t[n] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function rp(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function np(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ca = {
  textTransform: "uppercase"
}, da = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vi(e, t) {
  const {
    fontFamily: o = da,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: n = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: i = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: u,
    ...m
  } = typeof t == "function" ? t(e) : t, h = r / 14, f = u || ((y) => `${y / l * h}rem`), g = (y, S, w, C, x) => ({
    fontFamily: o,
    fontWeight: y,
    fontSize: f(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === da ? {
      letterSpacing: `${np(C / S)}em`
    } : {},
    ...x,
    ...d
  }), v = {
    h1: g(n, 96, 1.167, -1.5),
    h2: g(n, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, ca),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, ca),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ft({
    htmlFontSize: l,
    pxToRem: f,
    fontFamily: o,
    fontSize: r,
    fontWeightLight: n,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: i,
    ...v
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const sp = 0.2, ap = 0.14, ip = 0.12;
function qe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ap})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ip})`].join(",");
}
const lp = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], cp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Hi = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ua(e) {
  return `${Math.round(e)}ms`;
}
function dp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function up(e) {
  const t = {
    ...cp,
    ...e.easing
  }, o = {
    ...Hi,
    ...e.duration
  };
  return {
    getAutoHeightDuration: dp,
    create: (n = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: i = t.easeInOut,
        delay: l = 0,
        ...d
      } = s;
      return (Array.isArray(n) ? n : [n]).map((u) => `${u} ${typeof a == "string" ? a : ua(a)} ${i} ${typeof l == "string" ? l : ua(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const pp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fp(e) {
  return Kt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ui(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const n = Object.entries(r);
    for (let s = 0; s < n.length; s++) {
      const [a, i] = n[s];
      !fp(i) || a.startsWith("unstable_") ? delete r[a] : Kt(i) && (r[a] = {
        ...i
      }, o(r[a]));
    }
  }
  return o(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function pa(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const mp = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let o = 0;
  for (let r = 0; r < t.length; r += 1)
    o += +t[r];
  return o;
};
function hp(e) {
  Object.assign(e, {
    alpha(t, o) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : zt(t, mp(o));
    },
    lighten(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${pa(o)})` : nn(t, o);
    },
    darken(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${pa(o)})` : rn(t, o);
    }
  });
}
function jn(e = {}, ...t) {
  const {
    breakpoints: o,
    mixins: r = {},
    spacing: n,
    palette: s = {},
    transitions: a = {},
    typography: i = {},
    shape: l,
    colorSpace: d,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(to(20));
  const m = bs({
    ...s,
    colorSpace: d
  }), h = yr(e);
  let f = ft(h, {
    mixins: rp(h.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: lp.slice(),
    typography: Vi(m, i),
    transitions: up(a),
    zIndex: {
      ...pp
    }
  });
  return f = ft(f, u), f = t.reduce((g, v) => ft(g, v), f), f.unstable_sxConfig = {
    ...gr,
    ...u?.unstable_sxConfig
  }, f.unstable_sx = function(v) {
    return so({
      sx: v,
      theme: this
    });
  }, f.toRuntimeSource = Ui, hp(f), f;
}
function Wn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = Wn(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function _i(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Gi(e) {
  return e === "dark" ? gp : [];
}
function yp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    colorSpace: n,
    ...s
  } = e, a = bs({
    ...t,
    colorSpace: n
  });
  return {
    palette: a,
    opacity: {
      ..._i(a.mode),
      ...o
    },
    overlays: r || Gi(a.mode),
    ...s
  };
}
function bp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const vp = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xp = (e) => (t, o) => {
  const r = e.rootSelector || ":root", n = e.colorSchemeSelector;
  let s = n;
  if (n === "class" && (s = ".%s"), n === "data" && (s = "[data-%s]"), n?.startsWith("data-") && !n.includes("%s") && (s = `[${n}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return vp(e.cssVarPrefix).forEach((i) => {
        a[i] = o[i], delete o[i];
      }), s === "media" ? {
        [r]: o,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${r}, ${s.replace("%s", t)}`]: o
      } : {
        [r]: {
          ...o,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: o
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function Cp(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function z(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function rr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ei(e);
}
function Zt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = or(rr(e[t])));
}
function Sp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ht = (e) => {
  try {
    return e();
  } catch {
  }
}, wp = (e = "mui") => xu(e);
function kn(e, t, o, r, n) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const s = n === "dark" ? "dark" : "light";
  if (!r) {
    t[n] = yp({
      ...o,
      palette: {
        mode: s,
        ...o?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...i
  } = jn({
    ...r,
    palette: {
      mode: s,
      ...o?.palette
    },
    colorSpace: e
  });
  return t[n] = {
    ...o,
    palette: a,
    opacity: {
      ..._i(s),
      ...o?.opacity
    },
    overlays: o?.overlays || Gi(s)
  }, i;
}
function kp(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: n = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: i = bp,
    colorSchemeSelector: l = o.light && o.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...u
  } = e, m = Object.keys(o)[0], h = r || (o.light && m !== "light" ? "light" : m), f = wp(s), {
    [h]: g,
    light: v,
    dark: y,
    ...S
  } = o, w = {
    ...S
  };
  let C = g;
  if ((h === "dark" && !("dark" in o) || h === "light" && !("light" in o)) && (C = !0), !C)
    throw new Error(to(21, h));
  let x;
  a && (x = "oklch");
  const P = kn(x, w, C, u, h);
  v && !w.light && kn(x, w, v, void 0, "light"), y && !w.dark && kn(x, w, y, void 0, "dark");
  let k = {
    defaultColorScheme: h,
    ...P,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: d,
    getCssVar: f,
    colorSchemes: w,
    font: {
      ...op(P.typography),
      ...P.font
    },
    spacing: Sp(u.spacing)
  };
  Object.keys(k.colorSchemes).forEach((B) => {
    const p = k.colorSchemes[B].palette, T = (A) => {
      const D = A.split("-"), W = D[1], q = D[2];
      return f(A, p[W][q]);
    };
    p.mode === "light" && (z(p.common, "background", "#fff"), z(p.common, "onBackground", "#000")), p.mode === "dark" && (z(p.common, "background", "#000"), z(p.common, "onBackground", "#fff"));
    function I(A, D, W) {
      if (x) {
        let q;
        return A === fo && (q = `transparent ${((1 - W) * 100).toFixed(0)}%`), A === We && (q = `#000 ${(W * 100).toFixed(0)}%`), A === Ve && (q = `#fff ${(W * 100).toFixed(0)}%`), `color-mix(in ${x}, ${D}, ${q})`;
      }
      return A(D, W);
    }
    if (Cp(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      z(p.Alert, "errorColor", I(We, a ? f("palette-error-light") : p.error.light, 0.6)), z(p.Alert, "infoColor", I(We, a ? f("palette-info-light") : p.info.light, 0.6)), z(p.Alert, "successColor", I(We, a ? f("palette-success-light") : p.success.light, 0.6)), z(p.Alert, "warningColor", I(We, a ? f("palette-warning-light") : p.warning.light, 0.6)), z(p.Alert, "errorFilledBg", T("palette-error-main")), z(p.Alert, "infoFilledBg", T("palette-info-main")), z(p.Alert, "successFilledBg", T("palette-success-main")), z(p.Alert, "warningFilledBg", T("palette-warning-main")), z(p.Alert, "errorFilledColor", Ht(() => p.getContrastText(p.error.main))), z(p.Alert, "infoFilledColor", Ht(() => p.getContrastText(p.info.main))), z(p.Alert, "successFilledColor", Ht(() => p.getContrastText(p.success.main))), z(p.Alert, "warningFilledColor", Ht(() => p.getContrastText(p.warning.main))), z(p.Alert, "errorStandardBg", I(Ve, a ? f("palette-error-light") : p.error.light, 0.9)), z(p.Alert, "infoStandardBg", I(Ve, a ? f("palette-info-light") : p.info.light, 0.9)), z(p.Alert, "successStandardBg", I(Ve, a ? f("palette-success-light") : p.success.light, 0.9)), z(p.Alert, "warningStandardBg", I(Ve, a ? f("palette-warning-light") : p.warning.light, 0.9)), z(p.Alert, "errorIconColor", T("palette-error-main")), z(p.Alert, "infoIconColor", T("palette-info-main")), z(p.Alert, "successIconColor", T("palette-success-main")), z(p.Alert, "warningIconColor", T("palette-warning-main")), z(p.AppBar, "defaultBg", T("palette-grey-100")), z(p.Avatar, "defaultBg", T("palette-grey-400")), z(p.Button, "inheritContainedBg", T("palette-grey-300")), z(p.Button, "inheritContainedHoverBg", T("palette-grey-A100")), z(p.Chip, "defaultBorder", T("palette-grey-400")), z(p.Chip, "defaultAvatarColor", T("palette-grey-700")), z(p.Chip, "defaultIconColor", T("palette-grey-700")), z(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), z(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), z(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), z(p.LinearProgress, "primaryBg", I(Ve, a ? f("palette-primary-main") : p.primary.main, 0.62)), z(p.LinearProgress, "secondaryBg", I(Ve, a ? f("palette-secondary-main") : p.secondary.main, 0.62)), z(p.LinearProgress, "errorBg", I(Ve, a ? f("palette-error-main") : p.error.main, 0.62)), z(p.LinearProgress, "infoBg", I(Ve, a ? f("palette-info-main") : p.info.main, 0.62)), z(p.LinearProgress, "successBg", I(Ve, a ? f("palette-success-main") : p.success.main, 0.62)), z(p.LinearProgress, "warningBg", I(Ve, a ? f("palette-warning-light") : p.warning.main, 0.62)), z(p.Skeleton, "bg", x ? I(fo, a ? f("palette-text-primary") : p.text.primary, 0.11) : `rgba(${T("palette-text-primaryChannel")} / 0.11)`), z(p.Slider, "primaryTrack", I(Ve, a ? f("palette-primary-main") : p.primary.main, 0.62)), z(p.Slider, "secondaryTrack", I(Ve, a ? f("palette-secondary-main") : p.secondary.main, 0.62)), z(p.Slider, "errorTrack", I(Ve, a ? f("palette-error-main") : p.error.main, 0.62)), z(p.Slider, "infoTrack", I(Ve, a ? f("palette-info-main") : p.info.main, 0.62)), z(p.Slider, "successTrack", I(Ve, a ? f("palette-success-main") : p.success.main, 0.62)), z(p.Slider, "warningTrack", I(Ve, a ? f("palette-warning-main") : p.warning.main, 0.62));
      const A = x ? I(We, a ? f("palette-background-default") : p.background.default, 0.6825) : xr(p.background.default, 0.8);
      z(p.SnackbarContent, "bg", A), z(p.SnackbarContent, "color", Ht(() => x ? Fn.text.primary : p.getContrastText(A))), z(p.SpeedDialAction, "fabHoverBg", xr(p.background.paper, 0.15)), z(p.StepConnector, "border", T("palette-grey-400")), z(p.StepContent, "border", T("palette-grey-400")), z(p.Switch, "defaultColor", T("palette-common-white")), z(p.Switch, "defaultDisabledColor", T("palette-grey-100")), z(p.Switch, "primaryDisabledColor", I(Ve, a ? f("palette-primary-main") : p.primary.main, 0.62)), z(p.Switch, "secondaryDisabledColor", I(Ve, a ? f("palette-secondary-main") : p.secondary.main, 0.62)), z(p.Switch, "errorDisabledColor", I(Ve, a ? f("palette-error-main") : p.error.main, 0.62)), z(p.Switch, "infoDisabledColor", I(Ve, a ? f("palette-info-main") : p.info.main, 0.62)), z(p.Switch, "successDisabledColor", I(Ve, a ? f("palette-success-main") : p.success.main, 0.62)), z(p.Switch, "warningDisabledColor", I(Ve, a ? f("palette-warning-main") : p.warning.main, 0.62)), z(p.TableCell, "border", I(Ve, fo(a ? f("palette-divider") : p.divider, 1), 0.88)), z(p.Tooltip, "bg", I(fo, a ? f("palette-grey-700") : p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      z(p.Alert, "errorColor", I(Ve, a ? f("palette-error-light") : p.error.light, 0.6)), z(p.Alert, "infoColor", I(Ve, a ? f("palette-info-light") : p.info.light, 0.6)), z(p.Alert, "successColor", I(Ve, a ? f("palette-success-light") : p.success.light, 0.6)), z(p.Alert, "warningColor", I(Ve, a ? f("palette-warning-light") : p.warning.light, 0.6)), z(p.Alert, "errorFilledBg", T("palette-error-dark")), z(p.Alert, "infoFilledBg", T("palette-info-dark")), z(p.Alert, "successFilledBg", T("palette-success-dark")), z(p.Alert, "warningFilledBg", T("palette-warning-dark")), z(p.Alert, "errorFilledColor", Ht(() => p.getContrastText(p.error.dark))), z(p.Alert, "infoFilledColor", Ht(() => p.getContrastText(p.info.dark))), z(p.Alert, "successFilledColor", Ht(() => p.getContrastText(p.success.dark))), z(p.Alert, "warningFilledColor", Ht(() => p.getContrastText(p.warning.dark))), z(p.Alert, "errorStandardBg", I(We, a ? f("palette-error-light") : p.error.light, 0.9)), z(p.Alert, "infoStandardBg", I(We, a ? f("palette-info-light") : p.info.light, 0.9)), z(p.Alert, "successStandardBg", I(We, a ? f("palette-success-light") : p.success.light, 0.9)), z(p.Alert, "warningStandardBg", I(We, a ? f("palette-warning-light") : p.warning.light, 0.9)), z(p.Alert, "errorIconColor", T("palette-error-main")), z(p.Alert, "infoIconColor", T("palette-info-main")), z(p.Alert, "successIconColor", T("palette-success-main")), z(p.Alert, "warningIconColor", T("palette-warning-main")), z(p.AppBar, "defaultBg", T("palette-grey-900")), z(p.AppBar, "darkBg", T("palette-background-paper")), z(p.AppBar, "darkColor", T("palette-text-primary")), z(p.Avatar, "defaultBg", T("palette-grey-600")), z(p.Button, "inheritContainedBg", T("palette-grey-800")), z(p.Button, "inheritContainedHoverBg", T("palette-grey-700")), z(p.Chip, "defaultBorder", T("palette-grey-700")), z(p.Chip, "defaultAvatarColor", T("palette-grey-300")), z(p.Chip, "defaultIconColor", T("palette-grey-300")), z(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), z(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), z(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), z(p.LinearProgress, "primaryBg", I(We, a ? f("palette-primary-main") : p.primary.main, 0.5)), z(p.LinearProgress, "secondaryBg", I(We, a ? f("palette-secondary-main") : p.secondary.main, 0.5)), z(p.LinearProgress, "errorBg", I(We, a ? f("palette-error-main") : p.error.main, 0.5)), z(p.LinearProgress, "infoBg", I(We, a ? f("palette-info-main") : p.info.main, 0.5)), z(p.LinearProgress, "successBg", I(We, a ? f("palette-success-main") : p.success.main, 0.5)), z(p.LinearProgress, "warningBg", I(We, a ? f("palette-warning-main") : p.warning.main, 0.5)), z(p.Skeleton, "bg", x ? I(fo, a ? f("palette-text-primary") : p.text.primary, 0.13) : `rgba(${T("palette-text-primaryChannel")} / 0.13)`), z(p.Slider, "primaryTrack", I(We, a ? f("palette-primary-main") : p.primary.main, 0.5)), z(p.Slider, "secondaryTrack", I(We, a ? f("palette-secondary-main") : p.secondary.main, 0.5)), z(p.Slider, "errorTrack", I(We, a ? f("palette-error-main") : p.error.main, 0.5)), z(p.Slider, "infoTrack", I(We, a ? f("palette-info-main") : p.info.main, 0.5)), z(p.Slider, "successTrack", I(We, a ? f("palette-success-main") : p.success.main, 0.5)), z(p.Slider, "warningTrack", I(We, a ? f("palette-warning-light") : p.warning.main, 0.5));
      const A = x ? I(Ve, a ? f("palette-background-default") : p.background.default, 0.985) : xr(p.background.default, 0.98);
      z(p.SnackbarContent, "bg", A), z(p.SnackbarContent, "color", Ht(() => x ? ji.text.primary : p.getContrastText(A))), z(p.SpeedDialAction, "fabHoverBg", xr(p.background.paper, 0.15)), z(p.StepConnector, "border", T("palette-grey-600")), z(p.StepContent, "border", T("palette-grey-600")), z(p.Switch, "defaultColor", T("palette-grey-300")), z(p.Switch, "defaultDisabledColor", T("palette-grey-600")), z(p.Switch, "primaryDisabledColor", I(We, a ? f("palette-primary-main") : p.primary.main, 0.55)), z(p.Switch, "secondaryDisabledColor", I(We, a ? f("palette-secondary-main") : p.secondary.main, 0.55)), z(p.Switch, "errorDisabledColor", I(We, a ? f("palette-error-main") : p.error.main, 0.55)), z(p.Switch, "infoDisabledColor", I(We, a ? f("palette-info-main") : p.info.main, 0.55)), z(p.Switch, "successDisabledColor", I(We, a ? f("palette-success-main") : p.success.main, 0.55)), z(p.Switch, "warningDisabledColor", I(We, a ? f("palette-warning-light") : p.warning.main, 0.55)), z(p.TableCell, "border", I(We, fo(a ? f("palette-divider") : p.divider, 1), 0.68)), z(p.Tooltip, "bg", I(fo, a ? f("palette-grey-700") : p.grey[700], 0.92));
    }
    a || (Zt(p.background, "default"), Zt(p.background, "paper"), Zt(p.common, "background"), Zt(p.common, "onBackground"), Zt(p, "divider")), Object.keys(p).forEach((A) => {
      const D = p[A];
      A !== "tonalOffset" && !a && D && typeof D == "object" && (D.main && z(p[A], "mainChannel", or(rr(D.main))), D.light && z(p[A], "lightChannel", or(rr(D.light))), D.dark && z(p[A], "darkChannel", or(rr(D.dark))), D.contrastText && z(p[A], "contrastTextChannel", or(rr(D.contrastText))), A === "text" && (Zt(p[A], "primary"), Zt(p[A], "secondary")), A === "action" && (D.active && Zt(p[A], "active"), D.selected && Zt(p[A], "selected")));
    });
  }), k = t.reduce((B, p) => ft(B, p), k);
  const E = {
    prefix: s,
    disableCssColorScheme: n,
    shouldSkipGeneratingVar: i,
    getSelector: xp(k),
    enableContrastVars: a
  }, {
    vars: M,
    generateThemeVars: R,
    generateStyleSheets: $
  } = wu(k, E);
  return k.vars = M, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([B, p]) => {
    k[B] = p;
  }), k.generateThemeVars = R, k.generateStyleSheets = $, k.generateSpacing = function() {
    return wi(u.spacing, Yr(this));
  }, k.getColorSchemeSelector = ku(l), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = i, k.unstable_sxConfig = {
    ...gr,
    ...u?.unstable_sxConfig
  }, k.unstable_sx = function(p) {
    return so({
      sx: p,
      theme: this
    });
  }, k.toRuntimeSource = Ui, k;
}
function fa(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: bs({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function vs(e = {}, ...t) {
  const {
    palette: o,
    cssVariables: r = !1,
    colorSchemes: n = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = o?.mode,
    ...a
  } = e, i = s || "light", l = n?.[i], d = {
    ...n,
    ...o ? {
      [i]: {
        ...typeof l != "boolean" && l,
        palette: o
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return jn(e, ...t);
    let u = o;
    "palette" in e || d[i] && (d[i] !== !0 ? u = d[i].palette : i === "dark" && (u = {
      mode: "dark"
    }));
    const m = jn({
      ...e,
      palette: u
    }, ...t);
    return m.defaultColorScheme = i, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, fa(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, fa(m, "light", d.light)), m;
  }
  return !o && !("light" in d) && i === "light" && (d.light = !0), kp({
    ...a,
    colorSchemes: d,
    defaultColorScheme: i,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Pp(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Mp(e) {
  return parseFloat(e);
}
const an = vs();
function jt() {
  const e = br(an);
  return e[At] || e;
}
function dt({
  props: e,
  name: t
}) {
  return fs({
    props: e,
    name: t,
    defaultTheme: an,
    themeId: At
  });
}
function Ki(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ct = (e) => Ki(e) && e !== "classes", O = Ri({
  themeId: At,
  defaultTheme: an,
  rootShouldForwardProp: Ct
});
function Tp({
  theme: e,
  ...t
}) {
  const o = At in e ? e[At] : void 0;
  return /* @__PURE__ */ b.jsx(Ni, {
    ...t,
    themeId: o ? At : void 0,
    theme: o || e
  });
}
const Cr = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Rp
} = vu({
  themeId: At,
  // @ts-ignore ignore module augmentation tests
  theme: () => vs({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Cr.colorSchemeStorageKey,
  modeStorageKey: Cr.modeStorageKey,
  defaultColorScheme: {
    light: Cr.defaultLightColorScheme,
    dark: Cr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Vi(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return so({
        sx: r,
        theme: this
      });
    }, t;
  }
}), $p = Rp;
function aC({
  theme: e,
  ...t
}) {
  const o = c.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = At in e ? e[At] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return o ? /* @__PURE__ */ b.jsx(Tp, {
    theme: o,
    ...t
  }) : /* @__PURE__ */ b.jsx($p, {
    theme: e,
    ...t
  });
}
function $o(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Vn(...e) {
  return e.reduce((t, o) => o == null ? t : function(...n) {
    t.apply(this, n), o.apply(this, n);
  }, () => {
  });
}
function ln(e, t = 166) {
  let o;
  function r(...n) {
    const s = () => {
      e.apply(this, n);
    };
    clearTimeout(o), o = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function yt(e) {
  return e && e.ownerDocument || document;
}
function Ft(e) {
  return yt(e).defaultView || window;
}
function Hn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function wt(e) {
  const {
    controlled: t,
    default: o,
    name: r,
    state: n = "value"
  } = e, {
    current: s
  } = c.useRef(t !== void 0), [a, i] = c.useState(o), l = s ? t : a, d = c.useCallback((u) => {
    s || i(u);
  }, []);
  return [l, d];
}
function Me(e) {
  const t = c.useRef(e);
  return bt(() => {
    t.current = e;
  }), c.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Xe(...e) {
  const t = c.useRef(void 0), o = c.useCallback((r) => {
    const n = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, i = a(r);
        return typeof i == "function" ? i : () => {
          a(null);
        };
      }
      return s.current = r, () => {
        s.current = null;
      };
    });
    return () => {
      n.forEach((s) => s?.());
    };
  }, e);
  return c.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
const ma = {};
function Yi(e, t) {
  const o = c.useRef(ma);
  return o.current === ma && (o.current = e(t)), o;
}
const Ip = [];
function Dp(e) {
  c.useEffect(e, Ip);
}
class cn {
  static create() {
    return new cn();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function bo() {
  const e = Yi(cn.create).current;
  return Dp(e.disposeEffect), e;
}
function No(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function qi(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function xs(e) {
  const t = c.useRef({});
  return c.useEffect(() => {
    t.current = e;
  }), t.current;
}
function Ap(e) {
  return c.Children.toArray(e).filter((t) => /* @__PURE__ */ c.isValidElement(t));
}
function zr(e) {
  return typeof e == "string";
}
function Xi(e, t, o) {
  return e === void 0 || zr(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function Qi(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function ha(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Zi(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: n,
    className: s
  } = e;
  if (!t) {
    const f = V(o?.className, s, n?.className, r?.className), g = {
      ...o?.style,
      ...n?.style,
      ...r?.style
    }, v = {
      ...o,
      ...n,
      ...r
    };
    return f.length > 0 && (v.className = f), Object.keys(g).length > 0 && (v.style = g), {
      props: v,
      internalRef: void 0
    };
  }
  const a = Qi({
    ...n,
    ...r
  }), i = ha(r), l = ha(n), d = t(a), u = V(d?.className, o?.className, s, n?.className, r?.className), m = {
    ...d?.style,
    ...o?.style,
    ...n?.style,
    ...r?.style
  }, h = {
    ...d,
    ...o,
    ...l,
    ...i
  };
  return u.length > 0 && (h.className = u), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: d.ref
  };
}
function Ji(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function xt(e) {
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: n = !1,
    ...s
  } = e, a = n ? {} : Ji(o, r), {
    props: i,
    internalRef: l
  } = Zi({
    ...s,
    externalSlotProps: a
  }), d = Xe(l, a?.ref, e.additionalProps?.ref);
  return Xi(t, {
    ...i,
    ref: d
  }, r);
}
function wo(e) {
  return parseInt(c.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const Ep = ["localeText"], Un = /* @__PURE__ */ c.createContext(null), iC = function(t) {
  const {
    localeText: o
  } = t, r = gt(t, Ep), {
    utils: n,
    localeText: s
  } = c.useContext(Un) ?? {
    utils: void 0,
    localeText: void 0
  }, a = dt({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiLocalizationProvider"
  }), {
    children: i,
    dateAdapter: l,
    dateFormats: d,
    dateLibInstance: u,
    adapterLocale: m,
    localeText: h
  } = a, f = c.useMemo(() => Se({}, h, s, o), [h, s, o]), g = c.useMemo(() => {
    if (!l)
      return n || null;
    const S = new l({
      locale: m,
      formats: d,
      instance: u
    });
    if (!S.isMUIAdapter)
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return S;
  }, [l, m, d, u, n]), v = c.useMemo(() => g ? {
    minDate: g.date("1900-01-01T00:00:00.000"),
    maxDate: g.date("2099-12-31T00:00:00.000")
  } : null, [g]), y = c.useMemo(() => ({
    utils: g,
    defaultDates: v,
    localeText: f
  }), [v, g, f]);
  return /* @__PURE__ */ b.jsx(Un.Provider, {
    value: y,
    children: i
  });
}, Bp = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: Se({}, e)
      }
    }
  }
}), el = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (e) => e === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (e, t, o, r) => `Select ${e}. ${!r && (t === null || !o.isValid(t)) ? "No time selected" : `Selected time is ${r ?? o.format(t, "fullTime")}`}`,
  hoursClockNumberText: (e) => `${e} hours`,
  minutesClockNumberText: (e) => `${e} minutes`,
  secondsClockNumberText: (e) => `${e} seconds`,
  // Digital clock labels
  selectViewText: (e) => `Select ${e}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (e) => `Week ${e}`,
  calendarWeekNumberText: (e) => `${e}`,
  // Open picker labels
  openDatePickerDialogue: (e, t, o) => o || e !== null && t.isValid(e) ? `Choose date, selected date is ${o ?? t.format(e, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (e, t, o) => o || e !== null && t.isValid(e) ? `Choose time, selected time is ${o ?? t.format(e, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (e) => "Y".repeat(e.digitAmount),
  fieldMonthPlaceholder: (e) => e.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (e) => e.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
}, Op = el;
Bp(el);
const dn = () => {
  const e = c.useContext(Un);
  if (e === null)
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.utils === null)
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = c.useMemo(() => Se({}, Op, e.localeText), [e.localeText]);
  return c.useMemo(() => Se({}, e, {
    localeText: t
  }), [e, t]);
}, kt = () => dn().utils, Cs = () => dn().defaultDates, un = (e) => {
  const t = kt(), o = c.useRef(void 0);
  return o.current === void 0 && (o.current = t.date(void 0, e)), o.current;
}, tl = () => dn().localeText;
function Lp(e) {
  return /* @__PURE__ */ b.jsx(ki, {
    ...e,
    defaultTheme: an,
    themeId: At
  });
}
function Ss(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ b.jsx(Lp, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...o
        }) : e
      })
    );
  };
}
function Np() {
  return tn;
}
const me = uu;
function he(e) {
  return iu(e);
}
function zp(e) {
  return typeof e.main == "string";
}
function Fp(e, t = []) {
  if (!zp(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function je(e = []) {
  return ([, t]) => t && Fp(t, e);
}
function jp(e) {
  return ee("MuiTypography", e);
}
const Fr = J("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Wp = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Vp = Np(), Hp = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: n,
    variant: s,
    classes: a
  } = e, i = {
    root: ["root", s, e.align !== "inherit" && `align${L(t)}`, o && "gutterBottom", r && "noWrap", n && "paragraph"]
  };
  return te(i, jp, a);
}, Up = O("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${L(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(me(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, o]) => t !== "inherit" && o && typeof o == "object").map(([t, o]) => ({
    props: {
      variant: t
    },
    style: o
  })), ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${L(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), ga = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, pt = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    color: r,
    ...n
  } = he({
    props: t,
    name: "MuiTypography"
  }), s = !Wp[r], a = Vp({
    ...n,
    ...s && {
      color: r
    }
  }), {
    align: i = "inherit",
    className: l,
    component: d,
    gutterBottom: u = !1,
    noWrap: m = !1,
    paragraph: h = !1,
    variant: f = "body1",
    variantMapping: g = ga,
    ...v
  } = a, y = {
    ...a,
    align: i,
    color: r,
    className: l,
    component: d,
    gutterBottom: u,
    noWrap: m,
    paragraph: h,
    variant: f,
    variantMapping: g
  }, S = d || (h ? "p" : g[f] || ga[f]) || "span", w = Hp(y);
  return /* @__PURE__ */ b.jsx(Up, {
    as: S,
    ref: o,
    className: V(w.root, l),
    ...v,
    ownerState: y,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...v.style
    }
  });
});
function _p(e) {
  return ee("MuiSvgIcon", e);
}
J("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Gp = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, n = {
    root: ["root", t !== "inherit" && `color${L(t)}`, `fontSize${L(o)}`]
  };
  return te(n, _p, r);
}, Kp = O("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${L(o.color)}`], t[`fontSize${L(o.fontSize)}`]];
  }
})(me(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), _n = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: n,
    className: s,
    color: a = "inherit",
    component: i = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: u = !1,
    titleAccess: m,
    viewBox: h = "0 0 24 24",
    ...f
  } = r, g = /* @__PURE__ */ c.isValidElement(n) && n.type === "svg", v = {
    ...r,
    color: a,
    component: i,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: h,
    hasSvgAsChild: g
  }, y = {};
  u || (y.viewBox = h);
  const S = Gp(v);
  return /* @__PURE__ */ b.jsxs(Kp, {
    as: i,
    className: V(S.root, s),
    focusable: "false",
    color: d,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: o,
    ...y,
    ...f,
    ...g && n.props,
    ownerState: v,
    children: [g ? n.props.children : n, m ? /* @__PURE__ */ b.jsx("title", {
      children: m
    }) : null]
  });
});
_n.muiName = "SvgIcon";
function nt(e, t) {
  function o(r, n) {
    return /* @__PURE__ */ b.jsx(_n, {
      "data-testid": void 0,
      ref: n,
      ...r,
      children: e
    });
  }
  return o.muiName = _n.muiName, /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(o));
}
function Yp(e, t) {
  const o = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && o >= 65 && o <= 90 && typeof t == "function";
}
function ol(e, t) {
  if (!e)
    return t;
  function o(a, i) {
    const l = {};
    return Object.keys(i).forEach((d) => {
      Yp(d, i[d]) && typeof a[d] == "function" && (l[d] = (...u) => {
        a[d](...u), i[d](...u);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const i = typeof t == "function" ? t(a) : t, l = typeof e == "function" ? e({
        ...a,
        ...i
      }) : e, d = V(a?.className, i?.className, l?.className), u = o(l, i);
      return {
        ...i,
        ...l,
        ...u,
        ...!!d && {
          className: d
        },
        ...i?.style && l?.style && {
          style: {
            ...i.style,
            ...l.style
          }
        },
        ...i?.sx && l?.sx && {
          sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
        }
      };
    };
  const r = t, n = o(e, r), s = V(r?.className, e?.className);
  return {
    ...t,
    ...e,
    ...n,
    ...!!s && {
      className: s
    },
    ...r?.style && e?.style && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...r?.sx && e?.sx && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
class jr {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new jr();
  }
  static use() {
    const t = Yi(jr.create).current, [o, r] = c.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, c.useEffect(t.mountEffect, [o]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Xp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function qp() {
  return jr.use();
}
function Xp() {
  let e, t;
  const o = new Promise((r, n) => {
    e = r, t = n;
  });
  return o.resolve = e, o.reject = t, o;
}
function Qp(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: n,
    rippleY: s,
    rippleSize: a,
    in: i,
    onExited: l,
    timeout: d
  } = e, [u, m] = c.useState(!1), h = V(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), f = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + n
  }, g = V(o.child, u && o.childLeaving, r && o.childPulsate);
  return !i && !u && m(!0), c.useEffect(() => {
    if (!i && l != null) {
      const v = setTimeout(l, d);
      return () => {
        clearTimeout(v);
      };
    }
  }, [l, i, d]), /* @__PURE__ */ b.jsx("span", {
    className: h,
    style: f,
    children: /* @__PURE__ */ b.jsx("span", {
      className: g
    })
  });
}
const It = J("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Gn = 550, Zp = 80, Jp = Yt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ef = Yt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, tf = Yt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, of = O("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), rf = O(Qp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${It.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jp};
    animation-duration: ${Gn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${It.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${It.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${It.childLeaving} {
    opacity: 0;
    animation-name: ${ef};
    animation-duration: ${Gn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${It.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${tf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, nf = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: n = !1,
    classes: s = {},
    className: a,
    ...i
  } = r, [l, d] = c.useState([]), u = c.useRef(0), m = c.useRef(null);
  c.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const h = c.useRef(!1), f = bo(), g = c.useRef(null), v = c.useRef(null), y = c.useCallback((x) => {
    const {
      pulsate: P,
      rippleX: k,
      rippleY: E,
      rippleSize: M,
      cb: R
    } = x;
    d(($) => [...$, /* @__PURE__ */ b.jsx(rf, {
      classes: {
        ripple: V(s.ripple, It.ripple),
        rippleVisible: V(s.rippleVisible, It.rippleVisible),
        ripplePulsate: V(s.ripplePulsate, It.ripplePulsate),
        child: V(s.child, It.child),
        childLeaving: V(s.childLeaving, It.childLeaving),
        childPulsate: V(s.childPulsate, It.childPulsate)
      },
      timeout: Gn,
      pulsate: P,
      rippleX: k,
      rippleY: E,
      rippleSize: M
    }, u.current)]), u.current += 1, m.current = R;
  }, [s]), S = c.useCallback((x = {}, P = {}, k = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: M = n || P.pulsate,
      fakeElement: R = !1
      // For test purposes
    } = P;
    if (x?.type === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    x?.type === "touchstart" && (h.current = !0);
    const $ = R ? null : v.current, B = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let p, T, I;
    if (M || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      p = Math.round(B.width / 2), T = Math.round(B.height / 2);
    else {
      const {
        clientX: A,
        clientY: D
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      p = Math.round(A - B.left), T = Math.round(D - B.top);
    }
    if (M)
      I = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const A = Math.max(Math.abs(($ ? $.clientWidth : 0) - p), p) * 2 + 2, D = Math.max(Math.abs(($ ? $.clientHeight : 0) - T), T) * 2 + 2;
      I = Math.sqrt(A ** 2 + D ** 2);
    }
    x?.touches ? g.current === null && (g.current = () => {
      y({
        pulsate: E,
        rippleX: p,
        rippleY: T,
        rippleSize: I,
        cb: k
      });
    }, f.start(Zp, () => {
      g.current && (g.current(), g.current = null);
    })) : y({
      pulsate: E,
      rippleX: p,
      rippleY: T,
      rippleSize: I,
      cb: k
    });
  }, [n, y, f]), w = c.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = c.useCallback((x, P) => {
    if (f.clear(), x?.type === "touchend" && g.current) {
      g.current(), g.current = null, f.start(0, () => {
        C(x, P);
      });
      return;
    }
    g.current = null, d((k) => k.length > 0 ? k.slice(1) : k), m.current = P;
  }, [f]);
  return c.useImperativeHandle(o, () => ({
    pulsate: w,
    start: S,
    stop: C
  }), [w, S, C]), /* @__PURE__ */ b.jsx(of, {
    className: V(It.root, s.root, a),
    ref: v,
    ...i,
    children: /* @__PURE__ */ b.jsx(ns, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
function sf(e) {
  return ee("MuiButtonBase", e);
}
const af = J("MuiButtonBase", ["root", "disabled", "focusVisible"]), lf = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: n
  } = e, a = te({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, sf, n);
  return o && r && (a.root += ` ${r}`), a;
}, cf = O("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${af.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Et = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: n,
    centerRipple: s = !1,
    children: a,
    className: i,
    component: l = "button",
    disabled: d = !1,
    disableRipple: u = !1,
    disableTouchRipple: m = !1,
    focusRipple: h = !1,
    focusVisibleClassName: f,
    LinkComponent: g = "a",
    onBlur: v,
    onClick: y,
    onContextMenu: S,
    onDragLeave: w,
    onFocus: C,
    onFocusVisible: x,
    onKeyDown: P,
    onKeyUp: k,
    onMouseDown: E,
    onMouseLeave: M,
    onMouseUp: R,
    onTouchEnd: $,
    onTouchMove: B,
    onTouchStart: p,
    tabIndex: T = 0,
    TouchRippleProps: I,
    touchRippleRef: A,
    type: D,
    ...W
  } = r, q = c.useRef(null), U = qp(), se = Xe(U.ref, A), [_, re] = c.useState(!1);
  d && _ && re(!1), c.useImperativeHandle(n, () => ({
    focusVisible: () => {
      re(!0), q.current.focus();
    }
  }), []);
  const ge = U.shouldMount && !u && !d;
  c.useEffect(() => {
    _ && h && !u && U.pulsate();
  }, [u, h, _, U]);
  const Pe = Jt(U, "start", E, m), oe = Jt(U, "stop", S, m), Y = Jt(U, "stop", w, m), ye = Jt(U, "stop", R, m), Ce = Jt(U, "stop", (ae) => {
    _ && ae.preventDefault(), M && M(ae);
  }, m), le = Jt(U, "start", p, m), ne = Jt(U, "stop", $, m), fe = Jt(U, "stop", B, m), Q = Jt(U, "stop", (ae) => {
    No(ae.target) || re(!1), v && v(ae);
  }, !1), xe = Me((ae) => {
    q.current || (q.current = ae.currentTarget), No(ae.target) && (re(!0), x && x(ae)), C && C(ae);
  }), H = () => {
    const ae = q.current;
    return ae ? ae.tagName === "BUTTON" ? !1 : !(ae.tagName === "A" && ae.href) : l && l !== "button";
  }, ue = Me((ae) => {
    h && !ae.repeat && _ && ae.key === " " && U.stop(ae, () => {
      U.start(ae);
    }), ae.target === ae.currentTarget && H() && ae.key === " " && ae.preventDefault(), P && P(ae), ae.target === ae.currentTarget && H() && ae.key === "Enter" && !d && (ae.preventDefault(), y && y(ae));
  }), X = Me((ae) => {
    h && ae.key === " " && _ && !ae.defaultPrevented && U.stop(ae, () => {
      U.pulsate(ae);
    }), k && k(ae), y && ae.target === ae.currentTarget && H() && ae.key === " " && !ae.defaultPrevented && !d && y(ae);
  });
  let G = l;
  G === "button" && (W.href || W.to) && (G = g);
  const K = {};
  if (G === "button") {
    const ae = !!W.formAction;
    K.type = D === void 0 && !ae ? "button" : D, K.disabled = d;
  } else
    !W.href && !W.to && (K.role = "button"), d && (K["aria-disabled"] = d);
  const j = Xe(o, q), Te = {
    ...r,
    centerRipple: s,
    component: l,
    disabled: d,
    disableRipple: u,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: T,
    focusVisible: _
  }, ce = lf(Te);
  return /* @__PURE__ */ b.jsxs(cf, {
    as: G,
    className: V(ce.root, i),
    ownerState: Te,
    onBlur: Q,
    onClick: y,
    onContextMenu: oe,
    onFocus: xe,
    onKeyDown: ue,
    onKeyUp: X,
    onMouseDown: Pe,
    onMouseLeave: Ce,
    onMouseUp: ye,
    onDragLeave: Y,
    onTouchEnd: ne,
    onTouchMove: fe,
    onTouchStart: le,
    ref: j,
    tabIndex: d ? -1 : T,
    type: D,
    ...K,
    ...W,
    children: [a, ge ? /* @__PURE__ */ b.jsx(nf, {
      ref: se,
      center: s,
      ...I
    }) : null]
  });
});
function Jt(e, t, o, r = !1) {
  return Me((n) => (o && o(n), r || e[t](n), !0));
}
function df(e) {
  return ee("MuiCircularProgress", e);
}
J("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Lt = 44, Kn = Yt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Yn = Yt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, uf = typeof Kn != "string" ? lo`
        animation: ${Kn} 1.4s linear infinite;
      ` : null, pf = typeof Yn != "string" ? lo`
        animation: ${Yn} 1.4s ease-in-out infinite;
      ` : null, ff = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: n
  } = e, s = {
    root: ["root", o, `color${L(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${L(o)}`, n && "circleDisableShrink"]
  };
  return te(s, df, t);
}, mf = O("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${L(o.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: uf || {
      animation: `${Kn} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), hf = O("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), gf = O("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${L(o.variant)}`], o.disableShrink && t.circleDisableShrink];
  }
})(me(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: pf || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Yn} 1.4s ease-in-out infinite`
    }
  }]
}))), yf = O("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(me(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), rl = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: n,
    color: s = "primary",
    disableShrink: a = !1,
    enableTrackSlot: i = !1,
    size: l = 40,
    style: d,
    thickness: u = 3.6,
    value: m = 0,
    variant: h = "indeterminate",
    ...f
  } = r, g = {
    ...r,
    color: s,
    disableShrink: a,
    size: l,
    thickness: u,
    value: m,
    variant: h,
    enableTrackSlot: i
  }, v = ff(g), y = {}, S = {}, w = {};
  if (h === "determinate") {
    const C = 2 * Math.PI * ((Lt - u) / 2);
    y.strokeDasharray = C.toFixed(3), w["aria-valuenow"] = Math.round(m), y.strokeDashoffset = `${((100 - m) / 100 * C).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ b.jsx(mf, {
    className: V(v.root, n),
    style: {
      width: l,
      height: l,
      ...S,
      ...d
    },
    ownerState: g,
    ref: o,
    role: "progressbar",
    ...w,
    ...f,
    children: /* @__PURE__ */ b.jsxs(hf, {
      className: v.svg,
      ownerState: g,
      viewBox: `${Lt / 2} ${Lt / 2} ${Lt} ${Lt}`,
      children: [i ? /* @__PURE__ */ b.jsx(yf, {
        className: v.track,
        ownerState: g,
        cx: Lt,
        cy: Lt,
        r: (Lt - u) / 2,
        fill: "none",
        strokeWidth: u,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ b.jsx(gf, {
        className: v.circle,
        style: y,
        ownerState: g,
        cx: Lt,
        cy: Lt,
        r: (Lt - u) / 2,
        fill: "none",
        strokeWidth: u
      })]
    })
  });
});
function bf(e) {
  return ee("MuiIconButton", e);
}
const ya = J("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), vf = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: n,
    size: s,
    loading: a
  } = e, i = {
    root: ["root", a && "loading", o && "disabled", r !== "default" && `color${L(r)}`, n && `edge${L(n)}`, `size${L(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return te(i, bf, t);
}, xf = O(Et, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${L(o.color)}`], o.edge && t[`edge${L(o.edge)}`], t[`size${L(o.size)}`]];
  }
})(me(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), me(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${ya.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ya.loading}`]: {
    color: "transparent"
  }
}))), Cf = O("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), ws = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: n = !1,
    children: s,
    className: a,
    color: i = "default",
    disabled: l = !1,
    disableFocusRipple: d = !1,
    size: u = "medium",
    id: m,
    loading: h = null,
    loadingIndicator: f,
    ...g
  } = r, v = Xt(m), y = f ?? /* @__PURE__ */ b.jsx(rl, {
    "aria-labelledby": v,
    color: "inherit",
    size: 16
  }), S = {
    ...r,
    edge: n,
    color: i,
    disabled: l,
    disableFocusRipple: d,
    loading: h,
    loadingIndicator: y,
    size: u
  }, w = vf(S);
  return /* @__PURE__ */ b.jsxs(xf, {
    id: h ? v : m,
    className: V(w.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: l || h,
    ref: o,
    ...g,
    ownerState: S,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ b.jsx("span", {
      className: w.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ b.jsx(Cf, {
        className: w.loadingIndicator,
        ownerState: S,
        children: h && y
      })
    }), s]
  });
}), Sf = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), wf = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
})), kf = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}));
nt(/* @__PURE__ */ b.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}));
nt(/* @__PURE__ */ b.jsxs(c.Fragment, {
  children: [/* @__PURE__ */ b.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ b.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}));
nt(/* @__PURE__ */ b.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}));
nt(/* @__PURE__ */ b.jsxs(c.Fragment, {
  children: [/* @__PURE__ */ b.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ b.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}));
nt(/* @__PURE__ */ b.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));
function Pf(e) {
  return ee("MuiPickersArrowSwitcher", e);
}
J("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);
const Mf = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId"], Tf = ["ownerState"], Rf = ["ownerState"], $f = O("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex"
}), If = O("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), ba = O(ws, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})({
  variants: [{
    props: {
      hidden: !0
    },
    style: {
      visibility: "hidden"
    }
  }]
}), Df = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"],
    previousIconButton: ["previousIconButton"],
    nextIconButton: ["nextIconButton"],
    leftArrowIcon: ["leftArrowIcon"],
    rightArrowIcon: ["rightArrowIcon"]
  }, Pf, t);
}, Af = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = qt(), n = dt({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: s,
    className: a,
    slots: i,
    slotProps: l,
    isNextDisabled: d,
    isNextHidden: u,
    onGoToNext: m,
    nextLabel: h,
    isPreviousDisabled: f,
    isPreviousHidden: g,
    onGoToPrevious: v,
    previousLabel: y,
    labelId: S
  } = n, w = gt(n, Mf), C = n, x = Df(C), P = {
    isDisabled: d,
    isHidden: u,
    goTo: m,
    label: h
  }, k = {
    isDisabled: f,
    isHidden: g,
    goTo: v,
    label: y
  }, E = i?.previousIconButton ?? ba, M = xt({
    elementType: E,
    externalSlotProps: l?.previousIconButton,
    additionalProps: {
      size: "medium",
      title: k.label,
      "aria-label": k.label,
      disabled: k.isDisabled,
      edge: "end",
      onClick: k.goTo
    },
    ownerState: Se({}, C, {
      hidden: k.isHidden
    }),
    className: V(x.button, x.previousIconButton)
  }), R = i?.nextIconButton ?? ba, $ = xt({
    elementType: R,
    externalSlotProps: l?.nextIconButton,
    additionalProps: {
      size: "medium",
      title: P.label,
      "aria-label": P.label,
      disabled: P.isDisabled,
      edge: "start",
      onClick: P.goTo
    },
    ownerState: Se({}, C, {
      hidden: P.isHidden
    }),
    className: V(x.button, x.nextIconButton)
  }), B = i?.leftArrowIcon ?? wf, p = xt({
    elementType: B,
    externalSlotProps: l?.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: C,
    className: x.leftArrowIcon
  }), T = gt(p, Tf), I = i?.rightArrowIcon ?? kf, A = xt({
    elementType: I,
    externalSlotProps: l?.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: C,
    className: x.rightArrowIcon
  }), D = gt(A, Rf);
  return /* @__PURE__ */ b.jsxs($f, Se({
    ref: o,
    className: V(x.root, a),
    ownerState: C
  }, w, {
    children: [/* @__PURE__ */ b.jsx(E, Se({}, M, {
      children: r ? /* @__PURE__ */ b.jsx(I, Se({}, D)) : /* @__PURE__ */ b.jsx(B, Se({}, T))
    })), s ? /* @__PURE__ */ b.jsx(pt, {
      variant: "subtitle1",
      component: "span",
      id: S,
      children: s
    }) : /* @__PURE__ */ b.jsx(If, {
      className: x.spacer,
      ownerState: C
    }), /* @__PURE__ */ b.jsx(R, Se({}, $, {
      children: r ? /* @__PURE__ */ b.jsx(B, Se({}, T)) : /* @__PURE__ */ b.jsx(I, Se({}, D))
    }))]
  }));
}), va = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), Ef = (e, t) => (o, r) => e ? t.isAfter(o, r) : va(o, t) > va(r, t);
function Bf({
  onChange: e,
  onViewChange: t,
  openTo: o,
  view: r,
  views: n,
  autoFocus: s,
  focusedView: a,
  onFocusedViewChange: i
}) {
  const l = c.useRef(o), d = c.useRef(n), u = c.useRef(n.includes(o) ? o : n[0]), [m, h] = wt({
    name: "useViews",
    state: "view",
    controlled: r,
    default: u.current
  }), f = c.useRef(s ? m : null), [g, v] = wt({
    name: "useViews",
    state: "focusedView",
    controlled: a,
    default: f.current
  });
  c.useEffect(() => {
    (l.current && l.current !== o || d.current && d.current.some((E) => !n.includes(E))) && (h(n.includes(o) ? o : n[0]), d.current = n, l.current = o);
  }, [o, h, m, n]);
  const y = n.indexOf(m), S = n[y - 1] ?? null, w = n[y + 1] ?? null, C = Me((E, M) => {
    v(M ? E : (R) => E === R ? null : R), i?.(E, M);
  }), x = Me((E) => {
    C(E, !0), E !== m && (h(E), t && t(E));
  }), P = Me(() => {
    w && x(w);
  }), k = Me((E, M, R) => {
    const $ = M === "finish", B = R ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      n.indexOf(R) < n.length - 1
    ) : !!w;
    if (e(E, $ && B ? "partial" : M, R), R && R !== m) {
      const T = n[n.indexOf(R) + 1];
      T && x(T);
    } else $ && P();
  });
  return {
    view: m,
    setView: x,
    focusedView: g,
    setFocusedView: C,
    nextView: w,
    previousView: S,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: n.includes(o) ? o : n[0],
    goToNextView: P,
    setValueAndGoToNextView: k
  };
}
function Of(e, {
  disableFuture: t,
  maxDate: o,
  timezone: r
}) {
  const n = kt();
  return c.useMemo(() => {
    const s = n.date(void 0, r), a = n.startOfMonth(t && n.isBefore(s, o) ? s : o);
    return !n.isAfter(a, e);
  }, [t, o, e, n, r]);
}
function Lf(e, {
  disablePast: t,
  minDate: o,
  timezone: r
}) {
  const n = kt();
  return c.useMemo(() => {
    const s = n.date(void 0, r), a = n.startOfMonth(t && n.isAfter(s, o) ? s : o);
    return !n.isBefore(a, e);
  }, [t, o, e, n, r]);
}
const Co = 36, Wo = 2, ks = 320, Nf = 280, nl = 336, zf = O("div")({
  overflow: "hidden",
  width: ks,
  maxHeight: nl,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), Wr = (e, t, o) => {
  let r = t;
  return r = e.setHours(r, e.getHours(o)), r = e.setMinutes(r, e.getMinutes(o)), r = e.setSeconds(r, e.getSeconds(o)), r = e.setMilliseconds(r, e.getMilliseconds(o)), r;
}, ar = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: r,
  minDate: n,
  isDateDisabled: s,
  utils: a,
  timezone: i
}) => {
  const l = Wr(a, a.date(void 0, i), e);
  o && a.isBefore(n, l) && (n = l), t && a.isAfter(r, l) && (r = l);
  let d = e, u = e;
  for (a.isBefore(e, n) && (d = n, u = null), a.isAfter(e, r) && (u && (u = r), d = null); d || u; ) {
    if (d && a.isAfter(d, r) && (d = null), u && a.isBefore(u, n) && (u = null), d) {
      if (!s(d))
        return d;
      d = a.addDays(d, 1);
    }
    if (u) {
      if (!s(u))
        return u;
      u = a.addDays(u, -1);
    }
  }
  return null;
}, Ff = (e, t) => t == null || !e.isValid(t) ? null : t, io = (e, t, o) => t == null || !e.isValid(t) ? o : t, jf = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), Wf = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const n = r[r.length - 1];
    r.push(e.addMonths(n, 1));
  }
  return r;
}, sl = (e, t, o) => o === "date" ? e.startOfDay(e.date(void 0, t)) : e.date(void 0, t), Vf = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(o, r));
}, Hf = ({
  timezone: e,
  value: t,
  defaultValue: o,
  referenceDate: r,
  onChange: n,
  valueManager: s
}) => {
  const a = kt(), i = c.useRef(o), l = t ?? i.current ?? s.emptyValue, d = c.useMemo(() => s.getTimezone(a, l), [a, s, l]), u = Me((g) => d == null ? g : s.setTimezone(a, d, g));
  let m;
  e ? m = e : d ? m = d : r ? m = a.getTimezone(r) : m = "default";
  const h = c.useMemo(() => s.setTimezone(a, m, l), [s, a, m, l]), f = Me((g, ...v) => {
    const y = u(g);
    n?.(y, ...v);
  });
  return {
    value: h,
    handleValueChange: f,
    timezone: m
  };
}, Ps = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: r,
  referenceDate: n,
  onChange: s,
  valueManager: a
}) => {
  const [i, l] = wt({
    name: e,
    state: "value",
    controlled: o,
    default: r ?? a.emptyValue
  }), d = Me((u, ...m) => {
    l(u), s?.(u, ...m);
  });
  return Hf({
    timezone: t,
    value: i,
    defaultValue: void 0,
    referenceDate: n,
    onChange: d,
    valueManager: a
  });
}, eo = {
  year: 1,
  month: 2,
  day: 3,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, qo = (e, t, o) => {
  if (t === eo.year)
    return e.startOfYear(o);
  if (t === eo.month)
    return e.startOfMonth(o);
  if (t === eo.day)
    return e.startOfDay(o);
  let r = o;
  return t < eo.minutes && (r = e.setMinutes(r, 0)), t < eo.seconds && (r = e.setSeconds(r, 0)), t < eo.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, Uf = ({
  props: e,
  utils: t,
  granularity: o,
  timezone: r,
  getTodayDate: n
}) => {
  let s = n ? n() : qo(t, o, sl(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, s) && (s = qo(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, s) && (s = qo(t, o, e.maxDate));
  const a = Ef(e.disableIgnoringDatePartForTimeValidation ?? !1, t);
  return e.minTime != null && a(e.minTime, s) && (s = qo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Wr(t, s, e.minTime))), e.maxTime != null && a(s, e.maxTime) && (s = qo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Wr(t, s, e.maxTime))), s;
}, _f = ["value", "referenceDate"], So = {
  emptyValue: null,
  getTodayValue: sl,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, r = gt(e, _f);
    return t != null && r.utils.isValid(t) ? t : o ?? Uf(r);
  },
  cleanValue: Ff,
  areValuesEqual: jf,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => t == null || !e.isValid(t) ? null : e.getTimezone(t),
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, Vr = /* @__PURE__ */ c.createContext({});
function Gf(e) {
  return ee("MuiDivider", e);
}
const xa = J("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Kf = (e) => {
  const {
    absolute: t,
    children: o,
    classes: r,
    flexItem: n,
    light: s,
    orientation: a,
    textAlign: i,
    variant: l
  } = e;
  return te({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", n && "flexItem", o && "withChildren", o && a === "vertical" && "withChildrenVertical", i === "right" && a !== "vertical" && "textAlignRight", i === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Gf, r);
}, Yf = O("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.absolute && t.absolute, t[o.variant], o.light && t.light, o.orientation === "vertical" && t.vertical, o.flexItem && t.flexItem, o.children && t.withChildren, o.children && o.orientation === "vertical" && t.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && t.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && t.textAlignLeft];
  }
})(me(({
  theme: e
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: e.alpha((e.vars || e).palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: e.spacing(2),
      marginRight: e.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.children && t.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(e.vars || e).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.orientation === "vertical" && t.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "right" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "left" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), qf = O("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.wrapper, o.orientation === "vertical" && t.wrapperVertical];
  }
})(me(({
  theme: e
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${e.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    }
  }]
}))), Ca = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: n = !1,
    children: s,
    className: a,
    orientation: i = "horizontal",
    component: l = s || i === "vertical" ? "div" : "hr",
    flexItem: d = !1,
    light: u = !1,
    role: m = l !== "hr" ? "separator" : void 0,
    textAlign: h = "center",
    variant: f = "fullWidth",
    ...g
  } = r, v = {
    ...r,
    absolute: n,
    component: l,
    flexItem: d,
    light: u,
    orientation: i,
    role: m,
    textAlign: h,
    variant: f
  }, y = Kf(v);
  return /* @__PURE__ */ b.jsx(Yf, {
    as: l,
    className: V(y.root, a),
    role: m,
    ref: o,
    ownerState: v,
    "aria-orientation": m === "separator" && (l !== "hr" || i === "vertical") ? i : void 0,
    ...g,
    children: s ? /* @__PURE__ */ b.jsx(qf, {
      className: y.wrapper,
      ownerState: v,
      children: s
    }) : null
  });
});
Ca && (Ca.muiSkipListHighlight = !0);
const Sa = J("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function Xf(e) {
  return ee("MuiListItemText", e);
}
const Io = J("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function de(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: n,
    externalForwardedProps: s,
    internalForwardedProps: a,
    shouldForwardComponentProp: i = !1,
    ...l
  } = t, {
    component: d,
    slots: u = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...h
  } = s, f = u[e] || r, g = Ji(m[e], n), {
    props: {
      component: v,
      ...y
    },
    internalRef: S
  } = Zi({
    className: o,
    ...l,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: g
  }), w = Xe(S, g?.ref, t.ref), C = e === "root" ? v || d : v, x = Xi(f, {
    ...e === "root" && !d && !u[e] && a,
    ...e !== "root" && !u[e] && a,
    ...y,
    ...C && !i && {
      as: C
    },
    ...C && i && {
      component: C
    },
    ref: w
  }, n);
  return [f, x];
}
const Qf = (e) => {
  const {
    classes: t,
    inset: o,
    primary: r,
    secondary: n,
    dense: s
  } = e;
  return te({
    root: ["root", o && "inset", s && "dense", r && n && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Xf, t);
}, Zf = O("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Io.primary}`]: t.primary
    }, {
      [`& .${Io.secondary}`]: t.secondary
    }, t.root, o.inset && t.inset, o.primary && o.secondary && t.multiline, o.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  // Combine this and the below selector once https://github.com/emotion-js/emotion/issues/3366 is solved
  [`.${Fr.root}:where(& .${Io.primary})`]: {
    display: "block"
  },
  [`.${Fr.root}:where(& .${Io.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), lC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiListItemText"
  }), {
    children: n,
    className: s,
    disableTypography: a = !1,
    inset: i = !1,
    primary: l,
    primaryTypographyProps: d,
    secondary: u,
    secondaryTypographyProps: m,
    slots: h = {},
    slotProps: f = {},
    ...g
  } = r, {
    dense: v
  } = c.useContext(Vr);
  let y = l ?? n, S = u;
  const w = {
    ...r,
    disableTypography: a,
    inset: i,
    primary: !!y,
    secondary: !!S,
    dense: v
  }, C = Qf(w), x = {
    slots: h,
    slotProps: {
      primary: d,
      secondary: m,
      ...f
    }
  }, [P, k] = de("root", {
    className: V(C.root, s),
    elementType: Zf,
    externalForwardedProps: {
      ...x,
      ...g
    },
    ownerState: w,
    ref: o
  }), [E, M] = de("primary", {
    className: C.primary,
    elementType: pt,
    externalForwardedProps: x,
    ownerState: w
  }), [R, $] = de("secondary", {
    className: C.secondary,
    elementType: pt,
    externalForwardedProps: x,
    ownerState: w
  });
  return y != null && y.type !== pt && !a && (y = /* @__PURE__ */ b.jsx(E, {
    variant: v ? "body2" : "body1",
    component: M?.variant ? void 0 : "span",
    ...M,
    children: y
  })), S != null && S.type !== pt && !a && (S = /* @__PURE__ */ b.jsx(R, {
    variant: "body2",
    color: "textSecondary",
    ...$,
    children: S
  })), /* @__PURE__ */ b.jsxs(P, {
    ...k,
    children: [y, S]
  });
});
function Jf(e) {
  return ee("MuiMenuItem", e);
}
const Xo = J("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function em(e) {
  return ee("MuiList", e);
}
J("MuiList", ["root", "padding", "dense", "subheader"]);
const tm = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: n
  } = e;
  return te({
    root: ["root", !o && "padding", r && "dense", n && "subheader"]
  }, em, t);
}, om = O("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), rm = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiList"
  }), {
    children: n,
    className: s,
    component: a = "ul",
    dense: i = !1,
    disablePadding: l = !1,
    subheader: d,
    ...u
  } = r, m = c.useMemo(() => ({
    dense: i
  }), [i]), h = {
    ...r,
    component: a,
    dense: i,
    disablePadding: l
  }, f = tm(h);
  return /* @__PURE__ */ b.jsx(Vr.Provider, {
    value: m,
    children: /* @__PURE__ */ b.jsxs(om, {
      as: a,
      className: V(f.root, s),
      ref: o,
      ownerState: h,
      ...u,
      children: [d, n]
    })
  });
});
function Pn(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function wa(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function al(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function Qo(e, t, o, r, n, s) {
  let a = !1, i = n(e, t, t ? o : !1);
  for (; i; ) {
    if (i === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || !al(i, s) || l)
      i = n(e, i, o);
    else
      return i.focus(), !0;
  }
  return !1;
}
const nm = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: n = !1,
    autoFocusItem: s = !1,
    children: a,
    className: i,
    disabledItemsFocusable: l = !1,
    disableListWrap: d = !1,
    onKeyDown: u,
    variant: m = "selectedMenu",
    ...h
  } = t, f = c.useRef(null), g = c.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  bt(() => {
    n && f.current.focus();
  }, [n]), c.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, {
      direction: x
    }) => {
      const P = !f.current.style.width;
      if (C.clientHeight < f.current.clientHeight && P) {
        const k = `${qi(Ft(C))}px`;
        f.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = k, f.current.style.width = `calc(100% + ${k})`;
      }
      return f.current;
    }
  }), []);
  const v = (C) => {
    const x = f.current, P = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      u && u(C);
      return;
    }
    const E = $o(yt(x));
    if (P === "ArrowDown")
      C.preventDefault(), Qo(x, E, d, l, Pn);
    else if (P === "ArrowUp")
      C.preventDefault(), Qo(x, E, d, l, wa);
    else if (P === "Home")
      C.preventDefault(), Qo(x, null, d, l, Pn);
    else if (P === "End")
      C.preventDefault(), Qo(x, null, d, l, wa);
    else if (P.length === 1) {
      const M = g.current, R = P.toLowerCase(), $ = performance.now();
      M.keys.length > 0 && ($ - M.lastTime > 500 ? (M.keys = [], M.repeating = !0, M.previousKeyMatched = !0) : M.repeating && R !== M.keys[0] && (M.repeating = !1)), M.lastTime = $, M.keys.push(R);
      const B = E && !M.repeating && al(E, M);
      M.previousKeyMatched && (B || Qo(x, E, !1, l, Pn, M)) ? C.preventDefault() : M.previousKeyMatched = !1;
    }
    u && u(C);
  }, y = Xe(f, o);
  let S = -1;
  c.Children.forEach(a, (C, x) => {
    if (!/* @__PURE__ */ c.isValidElement(C)) {
      S === x && (S += 1, S >= a.length && (S = -1));
      return;
    }
    C.props.disabled || (m === "selectedMenu" && C.props.selected || S === -1) && (S = x), S === x && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= a.length && (S = -1));
  });
  const w = c.Children.map(a, (C, x) => {
    if (x === S) {
      const P = {};
      return s && (P.autoFocus = !0), C.props.tabIndex === void 0 && m === "selectedMenu" && (P.tabIndex = 0), /* @__PURE__ */ c.cloneElement(C, P);
    }
    return C;
  });
  return /* @__PURE__ */ b.jsx(rm, {
    role: "menu",
    ref: y,
    className: i,
    onKeyDown: v,
    tabIndex: n ? 0 : -1,
    ...h,
    children: w
  });
}), il = (e) => e.scrollTop;
function ut(e, t) {
  return (o) => {
    if (t) {
      const r = e.current;
      o === void 0 ? t(r) : t(r, o);
    }
  };
}
function ll(e, t, o, r, n, s) {
  const a = e === "exited" && !t ? r : o[e] || o.exited;
  return n || s ? {
    ...a,
    ...n,
    ...s
  } : a;
}
function zo(e, t) {
  const {
    timeout: o,
    easing: r,
    style: n = {}
  } = e;
  return {
    duration: n.transitionDuration ?? (typeof o == "number" ? o : o[t.mode] || 0),
    easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: n.transitionDelay
  };
}
function ir(e) {
  return `scale(${e}, ${e ** 2})`;
}
const sm = {
  entering: {
    opacity: 1,
    transform: ir(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: ir(0.75)
  },
  exited: {
    opacity: 0,
    transform: ir(0.75)
  }
}, am = {
  opacity: 0,
  transform: ir(0.75),
  visibility: "hidden"
}, Hr = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: n = !0,
    children: s,
    easing: a,
    in: i,
    onEnter: l,
    onEntered: d,
    onEntering: u,
    onExit: m,
    onExited: h,
    onExiting: f,
    style: g,
    timeout: v = "auto",
    ...y
  } = t, S = bo(), w = c.useRef(), C = jt(), x = c.useRef(null), P = Xe(x, wo(s), o), k = ut(x, u), E = ut(x, (T, I) => {
    il(T);
    const {
      duration: A,
      delay: D,
      easing: W
    } = zo({
      style: g,
      timeout: v,
      easing: a
    }, {
      mode: "enter"
    });
    let q;
    v === "auto" ? (q = C.transitions.getAutoHeightDuration(T.clientHeight), w.current = q) : q = A, T.style.transition = [C.transitions.create("opacity", {
      duration: q,
      delay: D
    }), C.transitions.create("transform", {
      duration: q * 0.666,
      delay: D,
      easing: W
    })].join(","), l && l(T, I);
  }), M = ut(x, d), R = ut(x, f), $ = ut(x, (T) => {
    const {
      duration: I,
      delay: A,
      easing: D
    } = zo({
      style: g,
      timeout: v,
      easing: a
    }, {
      mode: "exit"
    });
    let W;
    v === "auto" ? (W = C.transitions.getAutoHeightDuration(T.clientHeight), w.current = W) : W = I, T.style.transition = [C.transitions.create("opacity", {
      duration: W,
      delay: A
    }), C.transitions.create("transform", {
      duration: W * 0.666,
      delay: A || W * 0.333,
      easing: D
    })].join(","), T.style.opacity = 0, T.style.transform = ir(0.75), m && m(T);
  }), B = ut(x, (T) => {
    T.style.transition = "", h && h(T);
  }), p = (T) => {
    v === "auto" && S.start(w.current || 0, T), r && r(x.current, T);
  };
  return /* @__PURE__ */ b.jsx(ss, {
    appear: n,
    in: i,
    nodeRef: x,
    onEnter: E,
    onEntered: M,
    onEntering: k,
    onExit: $,
    onExited: B,
    onExiting: R,
    addEndListener: p,
    timeout: v === "auto" ? null : v,
    ...y,
    children: (T, {
      ownerState: I,
      ...A
    }) => {
      const D = ll(T, i, sm, am, g, s.props.style);
      return /* @__PURE__ */ c.cloneElement(s, {
        style: D,
        ref: P,
        ...A
      });
    }
  });
});
Hr && (Hr.muiSupportAuto = !0);
function im(e) {
  const t = yt(e);
  return t.body === e ? Ft(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function lr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ka(e) {
  return parseFloat(Ft(e).getComputedStyle(e).paddingRight) || 0;
}
function lm(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function Pa(e, t, o, r, n) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const i = !s.includes(a), l = !lm(a);
    i && l && lr(a, n);
  });
}
function Mn(e, t) {
  let o = -1;
  return e.some((r, n) => t(r) ? (o = n, !0) : !1), o;
}
function cm(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (im(r)) {
      const a = qi(Ft(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ka(r) + a}px`;
      const i = yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(i, (l) => {
        o.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ka(l) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = yt(r).body;
    else {
      const a = r.parentElement, i = Ft(r);
      s = a?.nodeName === "HTML" && i.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: s,
      el: a,
      property: i
    }) => {
      s ? a.style.setProperty(i, s) : a.style.removeProperty(i);
    });
  };
}
function dm(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class um {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && lr(t.modalRef, !1);
    const n = dm(o);
    Pa(o, t.mount, t.modalRef, n, !0);
    const s = Mn(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: n
    }), r);
  }
  mount(t, o) {
    const r = Mn(this.containers, (s) => s.modals.includes(t)), n = this.containers[r];
    n.restore || (n.restore = cm(n, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const n = Mn(this.containers, (a) => a.modals.includes(t)), s = this.containers[n];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && lr(t.modalRef, o), Pa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(n, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && lr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const pm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function fm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function mm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function hm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || mm(e));
}
function gm(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(pm)).forEach((r, n) => {
    const s = fm(r);
    s === -1 || !hm(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: n,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(t);
}
function ym() {
  return !0;
}
function bm(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: n = !1,
    getTabbable: s = gm,
    isEnabled: a = ym,
    open: i
  } = e, l = c.useRef(!1), d = c.useRef(null), u = c.useRef(null), m = c.useRef(null), h = c.useRef(null), f = c.useRef(!1), g = c.useRef(null), v = Xe(wo(t), g), y = c.useRef(null);
  c.useEffect(() => {
    !i || !g.current || (f.current = !o);
  }, [o, i]), c.useEffect(() => {
    if (!i || !g.current)
      return;
    const C = yt(g.current), x = $o(C);
    return g.current.contains(x) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), f.current && g.current.focus()), () => {
      n || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [i]), c.useEffect(() => {
    if (!i || !g.current)
      return;
    const C = yt(g.current), x = (E) => {
      if (y.current = E, r || !a() || E.key !== "Tab")
        return;
      $o(C) === g.current && E.shiftKey && (l.current = !0, u.current && u.current.focus());
    }, P = () => {
      const E = g.current;
      if (E === null)
        return;
      const M = $o(C);
      if (!C.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (E.contains(M) || r && M !== d.current && M !== u.current)
        return;
      if (M !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!f.current)
        return;
      let R = [];
      if ((M === d.current || M === u.current) && (R = s(g.current)), R.length > 0) {
        const $ = !!(y.current?.shiftKey && y.current?.key === "Tab"), B = R[0], p = R[R.length - 1];
        typeof B != "string" && typeof p != "string" && ($ ? p.focus() : B.focus());
      } else
        E.focus();
    };
    C.addEventListener("focusin", P), C.addEventListener("keydown", x, !0);
    const k = setInterval(() => {
      const E = $o(C);
      E && E.tagName === "BODY" && P();
    }, 50);
    return () => {
      clearInterval(k), C.removeEventListener("focusin", P), C.removeEventListener("keydown", x, !0);
    };
  }, [o, r, n, a, i, s]);
  const S = (C) => {
    m.current === null && (m.current = C.relatedTarget), f.current = !0, h.current = C.target;
    const x = t.props.onFocus;
    x && x(C);
  }, w = (C) => {
    m.current === null && (m.current = C.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [/* @__PURE__ */ b.jsx("div", {
      tabIndex: i ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ c.cloneElement(t, {
      ref: v,
      onFocus: S
    }), /* @__PURE__ */ b.jsx("div", {
      tabIndex: i ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
function vm(e) {
  return typeof e == "function" ? e() : e;
}
const cl = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    children: r,
    container: n,
    disablePortal: s = !1
  } = t, [a, i] = c.useState(null), l = Xe(/* @__PURE__ */ c.isValidElement(r) ? wo(r) : null, o);
  if (bt(() => {
    s || i(vm(n) || document.body);
  }, [n, s]), bt(() => {
    if (a && !s)
      return Hn(o, a), () => {
        Hn(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ c.isValidElement(r)) {
      const d = {
        ref: l
      };
      return /* @__PURE__ */ c.cloneElement(r, d);
    }
    return r;
  }
  return a && /* @__PURE__ */ oc.createPortal(r, a);
}), xm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
}, Cm = {
  opacity: 0,
  visibility: "hidden"
}, pr = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = jt(), n = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: i,
    easing: l,
    in: d,
    onEnter: u,
    onEntered: m,
    onEntering: h,
    onExit: f,
    onExited: g,
    onExiting: v,
    style: y,
    timeout: S = n,
    ...w
  } = t, C = c.useRef(null), x = Xe(C, wo(i), o), P = ut(C, h), k = ut(C, (p, T) => {
    il(p);
    const I = zo({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    p.style.transition = r.transitions.create("opacity", I), u && u(p, T);
  }), E = ut(C, m), M = ut(C, v), R = ut(C, (p) => {
    const T = zo({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    p.style.transition = r.transitions.create("opacity", T), f && f(p);
  }), $ = ut(C, (p) => {
    p.style.transition = "", g && g(p);
  }), B = (p) => {
    s && s(C.current, p);
  };
  return /* @__PURE__ */ b.jsx(ss, {
    appear: a,
    in: d,
    nodeRef: C,
    onEnter: k,
    onEntered: E,
    onEntering: P,
    onExit: R,
    onExited: $,
    onExiting: M,
    addEndListener: B,
    timeout: S,
    ...w,
    children: (p, {
      ownerState: T,
      ...I
    }) => {
      const A = ll(p, d, xm, Cm, y, i.props.style);
      return /* @__PURE__ */ c.cloneElement(i, {
        style: A,
        ref: x,
        ...I
      });
    }
  });
});
function Sm(e) {
  return ee("MuiBackdrop", e);
}
J("MuiBackdrop", ["root", "invisible"]);
const wm = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return te({
    root: ["root", o && "invisible"]
  }, Sm, t);
}, km = O("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), dl = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: n,
    className: s,
    component: a = "div",
    invisible: i = !1,
    open: l,
    components: d = {},
    componentsProps: u = {},
    slotProps: m = {},
    slots: h = {},
    TransitionComponent: f,
    transitionDuration: g,
    ...v
  } = r, y = {
    ...r,
    component: a,
    invisible: i
  }, S = wm(y), w = {
    transition: f,
    root: d.Root,
    ...h
  }, C = {
    ...u,
    ...m
  }, x = {
    component: a,
    slots: w,
    slotProps: C
  }, [P, k] = de("root", {
    elementType: km,
    externalForwardedProps: x,
    className: V(S.root, s),
    ownerState: y
  }), [E, M] = de("transition", {
    elementType: pr,
    externalForwardedProps: x,
    ownerState: y
  });
  return /* @__PURE__ */ b.jsx(E, {
    in: l,
    timeout: g,
    ...v,
    ...M,
    children: /* @__PURE__ */ b.jsx(P, {
      "aria-hidden": !0,
      ...k,
      ref: o,
      children: n
    })
  });
});
function Pm(e) {
  return typeof e == "function" ? e() : e;
}
function Mm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ma = () => {
}, Sr = new um();
function Tm(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: n = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: i,
    onClose: l,
    open: d,
    rootRef: u
  } = e, m = c.useRef({}), h = c.useRef(null), f = c.useRef(null), g = Xe(f, u), [v, y] = c.useState(!d), S = Mm(i);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const C = () => yt(h.current), x = () => (m.current.modalRef = f.current, m.current.mount = h.current, m.current), P = () => {
    Sr.mount(x(), {
      disableScrollLock: r
    }), f.current && (f.current.scrollTop = 0);
  }, k = Me(() => {
    const A = Pm(t) || C().body;
    Sr.add(x(), A), f.current && P();
  }), E = () => Sr.isTopModal(x()), M = Me((A) => {
    h.current = A, A && (d && E() ? P() : f.current && lr(f.current, w));
  }), R = c.useCallback(() => {
    Sr.remove(x(), w);
  }, [w]);
  c.useEffect(() => () => {
    R();
  }, [R]), c.useEffect(() => {
    d ? k() : (!S || !n) && R();
  }, [d, R, S, n, k]);
  const $ = (A) => (D) => {
    A.onKeyDown?.(D), !(D.key !== "Escape" || D.which === 229 || // Wait until IME is settled.
    !E()) && (o || (D.stopPropagation(), l && l(D, "escapeKeyDown")));
  }, B = (A) => (D) => {
    A.onClick?.(D), D.target === D.currentTarget && l && l(D, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const D = Qi(e);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const W = {
        ...D,
        ...A
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...W,
        onKeyDown: $(W),
        ref: g
      };
    },
    getBackdropProps: (A = {}) => {
      const D = A;
      return {
        "aria-hidden": !0,
        ...D,
        onClick: B(D),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        y(!1), s && s();
      }, D = () => {
        y(!0), a && a(), n && R();
      };
      return {
        onEnter: Vn(A, i?.props.onEnter ?? Ma),
        onExited: Vn(D, i?.props.onExited ?? Ma)
      };
    },
    rootRef: g,
    portalRef: M,
    isTopModal: E,
    exited: v,
    hasTransition: S
  };
}
function Rm(e) {
  return ee("MuiModal", e);
}
J("MuiModal", ["root", "hidden", "backdrop"]);
const $m = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return te({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Rm, r);
}, Im = O("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(me(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Dm = O(dl, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), ul = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: n = Dm,
    BackdropProps: s,
    classes: a,
    className: i,
    closeAfterTransition: l = !1,
    children: d,
    container: u,
    component: m,
    components: h = {},
    componentsProps: f = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: S = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: C = !1,
    hideBackdrop: x = !1,
    keepMounted: P = !1,
    onClose: k,
    onTransitionEnter: E,
    onTransitionExited: M,
    open: R,
    slotProps: $ = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: p,
    ...T
  } = r, I = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: g,
    disableEnforceFocus: v,
    disableEscapeKeyDown: y,
    disablePortal: S,
    disableRestoreFocus: w,
    disableScrollLock: C,
    hideBackdrop: x,
    keepMounted: P
  }, {
    getRootProps: A,
    getBackdropProps: D,
    getTransitionProps: W,
    portalRef: q,
    isTopModal: U,
    exited: se,
    hasTransition: _
  } = Tm({
    ...I,
    rootRef: o
  }), re = {
    ...I,
    exited: se
  }, ge = $m(re), Pe = {};
  if (d.props.tabIndex === void 0 && (Pe.tabIndex = "-1"), _) {
    const {
      onEnter: ne,
      onExited: fe
    } = W();
    Pe.onEnter = ne, Pe.onExited = fe;
  }
  const oe = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...B
    },
    slotProps: {
      ...f,
      ...$
    }
  }, [Y, ye] = de("root", {
    ref: o,
    elementType: Im,
    externalForwardedProps: {
      ...oe,
      ...T,
      component: m
    },
    getSlotProps: A,
    ownerState: re,
    className: V(i, ge?.root, !re.open && re.exited && ge?.hidden)
  }), [Ce, le] = de("backdrop", {
    ref: s?.ref,
    elementType: n,
    externalForwardedProps: oe,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (ne) => D({
      ...ne,
      onClick: (fe) => {
        ne?.onClick && ne.onClick(fe);
      }
    }),
    className: V(s?.className, ge?.backdrop),
    ownerState: re
  });
  return !P && !R && (!_ || se) ? null : /* @__PURE__ */ b.jsx(cl, {
    ref: q,
    container: u,
    disablePortal: S,
    children: /* @__PURE__ */ b.jsxs(Y, {
      ...ye,
      children: [!x && n ? /* @__PURE__ */ b.jsx(Ce, {
        ...le
      }) : null, /* @__PURE__ */ b.jsx(bm, {
        disableEnforceFocus: v,
        disableAutoFocus: g,
        disableRestoreFocus: w,
        isEnabled: U,
        open: R,
        children: /* @__PURE__ */ c.cloneElement(d, Pe)
      })]
    })
  });
});
function Am(e) {
  return ee("MuiPaper", e);
}
const cC = J("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]), Em = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: n
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return te(s, Am, n);
}, Bm = O("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(me(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Vo = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiPaper"
  }), n = jt(), {
    className: s,
    component: a = "div",
    elevation: i = 1,
    square: l = !1,
    variant: d = "elevation",
    ...u
  } = r, m = {
    ...r,
    component: a,
    elevation: i,
    square: l,
    variant: d
  }, h = Em(m);
  return /* @__PURE__ */ b.jsx(Bm, {
    as: a,
    ownerState: m,
    className: V(h.root, s),
    ref: o,
    ...u,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (n.vars || n).shadows[i],
        ...n.vars && {
          "--Paper-overlay": n.vars.overlays?.[i]
        },
        ...!n.vars && n.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${zt("#fff", Wn(i))}, ${zt("#fff", Wn(i))})`
        }
      },
      ...u.style
    }
  });
});
function Om(e) {
  return ee("MuiPopover", e);
}
J("MuiPopover", ["root", "paper"]);
function Ta(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Ra(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function $a(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function wr(e) {
  return typeof e == "function" ? e() : e;
}
const Lm = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    paper: ["paper"]
  }, Om, t);
}, Nm = O(ul, {
  name: "MuiPopover",
  slot: "Root"
})({}), pl = O(Vo, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), zm = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiPopover"
  }), {
    action: n,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: i,
    anchorReference: l = "anchorEl",
    children: d,
    className: u,
    container: m,
    elevation: h = 8,
    marginThreshold: f = 16,
    open: g,
    PaperProps: v = {},
    // TODO: remove in v7
    slots: y = {},
    slotProps: S = {},
    transformOrigin: w = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C,
    // TODO: remove in v7
    transitionDuration: x = "auto",
    TransitionProps: P = {},
    // TODO: remove in v7
    disableScrollLock: k = !1,
    ...E
  } = r, M = c.useRef(), R = {
    ...r,
    anchorOrigin: a,
    anchorReference: l,
    elevation: h,
    marginThreshold: f,
    transformOrigin: w,
    TransitionComponent: C,
    transitionDuration: x,
    TransitionProps: P
  }, $ = Lm(R), B = c.useCallback(() => {
    if (l === "anchorPosition")
      return i;
    const ne = wr(s), Q = (ne && ne.nodeType === 1 ? ne : yt(M.current).body).getBoundingClientRect();
    return {
      top: Q.top + Ta(Q, a.vertical),
      left: Q.left + Ra(Q, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, i, l]), p = c.useCallback((ne) => ({
    vertical: Ta(ne, w.vertical),
    horizontal: Ra(ne, w.horizontal)
  }), [w.horizontal, w.vertical]), T = c.useCallback((ne) => {
    const fe = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, Q = p(fe);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $a(Q)
      };
    const xe = B();
    let H = xe.top - Q.vertical, ue = xe.left - Q.horizontal;
    const X = H + fe.height, G = ue + fe.width, K = Ft(wr(s)), j = K.innerHeight - f, Te = K.innerWidth - f;
    if (f !== null && H < f) {
      const ce = H - f;
      H -= ce, Q.vertical += ce;
    } else if (f !== null && X > j) {
      const ce = X - j;
      H -= ce, Q.vertical += ce;
    }
    if (f !== null && ue < f) {
      const ce = ue - f;
      ue -= ce, Q.horizontal += ce;
    } else if (G > Te) {
      const ce = G - Te;
      ue -= ce, Q.horizontal += ce;
    }
    return {
      top: `${Math.round(H)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: $a(Q)
    };
  }, [s, l, B, p, f]), [I, A] = c.useState(g), D = c.useCallback(() => {
    const ne = M.current;
    if (!ne)
      return;
    const fe = T(ne);
    fe.top !== null && ne.style.setProperty("top", fe.top), fe.left !== null && (ne.style.left = fe.left), ne.style.transformOrigin = fe.transformOrigin, A(!0);
  }, [T]);
  c.useEffect(() => (k && window.addEventListener("scroll", D), () => window.removeEventListener("scroll", D)), [s, k, D]);
  const W = () => {
    D();
  }, q = () => {
    A(!1);
  };
  c.useEffect(() => {
    g && D();
  }), c.useImperativeHandle(n, () => g ? {
    updatePosition: () => {
      D();
    }
  } : null, [g, D]), c.useEffect(() => {
    if (!g)
      return;
    const ne = ln(() => {
      D();
    }), fe = Ft(wr(s));
    return fe.addEventListener("resize", ne), () => {
      ne.clear(), fe.removeEventListener("resize", ne);
    };
  }, [s, g, D]);
  let U = x;
  const se = {
    slots: {
      transition: C,
      ...y
    },
    slotProps: {
      transition: P,
      paper: v,
      ...S
    }
  }, [_, re] = de("transition", {
    elementType: Hr,
    externalForwardedProps: se,
    ownerState: R,
    getSlotProps: (ne) => ({
      ...ne,
      onEntering: (fe, Q) => {
        ne.onEntering?.(fe, Q), W();
      },
      onExited: (fe) => {
        ne.onExited?.(fe), q();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  x === "auto" && !_.muiSupportAuto && (U = void 0);
  const ge = m || (s ? yt(wr(s)).body : void 0), [Pe, {
    slots: oe,
    slotProps: Y,
    ...ye
  }] = de("root", {
    ref: o,
    elementType: Nm,
    externalForwardedProps: {
      ...se,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: y.backdrop
      },
      slotProps: {
        backdrop: ol(typeof S.backdrop == "function" ? S.backdrop(R) : S.backdrop, {
          invisible: !0
        })
      },
      container: ge,
      open: g
    },
    ownerState: R,
    className: V($.root, u)
  }), [Ce, le] = de("paper", {
    ref: M,
    className: $.paper,
    elementType: pl,
    externalForwardedProps: se,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: I ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ b.jsx(Pe, {
    ...ye,
    ...!zr(Pe) && {
      slots: oe,
      slotProps: Y,
      disableScrollLock: k
    },
    children: /* @__PURE__ */ b.jsx(_, {
      ...re,
      timeout: U,
      children: /* @__PURE__ */ b.jsx(Ce, {
        ...le,
        children: d
      })
    })
  });
});
function Fm(e) {
  return ee("MuiMenu", e);
}
J("MuiMenu", ["root", "paper", "list"]);
const jm = {
  vertical: "top",
  horizontal: "right"
}, Wm = {
  vertical: "top",
  horizontal: "left"
}, Vm = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Fm, t);
}, Hm = O(zm, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Um = O(pl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), _m = O(nm, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Gm = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: n = !0,
    children: s,
    className: a,
    disableAutoFocusItem: i = !1,
    MenuListProps: l = {},
    onClose: d,
    open: u,
    PaperProps: m = {},
    PopoverClasses: h,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: g,
      ...v
    } = {},
    variant: y = "selectedMenu",
    slots: S = {},
    slotProps: w = {},
    ...C
  } = r, x = qt(), P = {
    ...r,
    autoFocus: n,
    disableAutoFocusItem: i,
    MenuListProps: l,
    onEntering: g,
    PaperProps: m,
    transitionDuration: f,
    TransitionProps: v,
    variant: y
  }, k = Vm(P), E = n && !i && u, M = c.useRef(null), R = (U, se) => {
    M.current && M.current.adjustStyleForScrollbar(U, {
      direction: x ? "rtl" : "ltr"
    }), g && g(U, se);
  }, $ = (U) => {
    U.key === "Tab" && (U.preventDefault(), d && d(U, "tabKeyDown"));
  };
  let B = -1;
  c.Children.map(s, (U, se) => {
    /* @__PURE__ */ c.isValidElement(U) && (U.props.disabled || (y === "selectedMenu" && U.props.selected || B === -1) && (B = se));
  });
  const p = {
    slots: S,
    slotProps: {
      list: l,
      transition: v,
      paper: m,
      ...w
    }
  }, T = xt({
    elementType: S.root,
    externalSlotProps: w.root,
    ownerState: P,
    className: [k.root, a]
  }), [I, A] = de("paper", {
    className: k.paper,
    elementType: Um,
    externalForwardedProps: p,
    shouldForwardComponentProp: !0,
    ownerState: P
  }), [D, W] = de("list", {
    className: V(k.list, l.className),
    elementType: _m,
    shouldForwardComponentProp: !0,
    externalForwardedProps: p,
    getSlotProps: (U) => ({
      ...U,
      onKeyDown: (se) => {
        $(se), U.onKeyDown?.(se);
      }
    }),
    ownerState: P
  }), q = typeof p.slotProps.transition == "function" ? p.slotProps.transition(P) : p.slotProps.transition;
  return /* @__PURE__ */ b.jsx(Hm, {
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? jm : Wm,
    slots: {
      root: S.root,
      paper: I,
      backdrop: S.backdrop,
      ...S.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: S.transition
      }
    },
    slotProps: {
      root: T,
      paper: A,
      backdrop: typeof w.backdrop == "function" ? w.backdrop(P) : w.backdrop,
      transition: {
        ...q,
        onEntering: (...U) => {
          R(...U), q?.onEntering?.(...U);
        }
      }
    },
    open: u,
    ref: o,
    transitionDuration: f,
    ownerState: P,
    ...C,
    classes: h,
    children: /* @__PURE__ */ b.jsx(D, {
      actions: M,
      autoFocus: n && (B === -1 || i),
      autoFocusItem: E,
      variant: y,
      ...W,
      children: s
    })
  });
});
function Km(e) {
  return ee("MuiNativeSelect", e);
}
const Ms = J("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ym = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: n,
    open: s,
    error: a
  } = e, i = {
    select: ["select", o, r && "disabled", n && "multiple", a && "error"],
    icon: ["icon", `icon${L(o)}`, s && "iconOpen", r && "disabled"]
  };
  return te(i, Km, t);
}, fl = O("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Ms.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), qm = O(fl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ct,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${Ms.multiple}`]: t.multiple
    }];
  }
})({}), ml = O("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Ms.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Xm = O(ml, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${L(o.variant)}`], o.open && t.iconOpen];
  }
})({}), Qm = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: n,
    error: s,
    IconComponent: a,
    inputRef: i,
    variant: l = "standard",
    ...d
  } = t, u = {
    ...t,
    disabled: n,
    variant: l,
    error: s
  }, m = Ym(u);
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [/* @__PURE__ */ b.jsx(qm, {
      ownerState: u,
      className: V(m.select, r),
      disabled: n,
      ref: i || o,
      ...d
    }), t.multiple ? null : /* @__PURE__ */ b.jsx(Xm, {
      as: a,
      ownerState: u,
      className: m.icon
    })]
  });
});
function Ia(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ur(e, t = !1) {
  return e && (Ia(e.value) && e.value !== "" || t && Ia(e.defaultValue) && e.defaultValue !== "");
}
function Zm(e) {
  return e.startAdornment;
}
function hl(e) {
  return ee("MuiSelect", e);
}
const Zo = J("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Jm(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function eh(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Da(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const gl = /* @__PURE__ */ c.createContext(null);
function th() {
  return c.useContext(gl);
}
const oh = gl.Provider;
var Aa;
const rh = O(fl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Zo.select}`]: t.select
      },
      {
        [`&.${Zo.select}`]: t[o.variant]
      },
      {
        [`&.${Zo.error}`]: t.error
      },
      {
        [`&.${Zo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Zo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), nh = O(ml, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${L(o.variant)}`], o.open && t.iconOpen];
  }
})({}), sh = O("input", {
  shouldForwardProp: (e) => Ki(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
}), ah = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: n,
    open: s,
    error: a
  } = e, i = {
    select: ["select", o, r && "disabled", n && "multiple", a && "error"],
    icon: ["icon", `icon${L(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return te(i, hl, t);
}, ih = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    "aria-describedby": r,
    "aria-label": n,
    autoFocus: s,
    autoWidth: a,
    children: i,
    className: l,
    defaultOpen: d,
    defaultValue: u,
    disabled: m,
    displayEmpty: h,
    error: f = !1,
    IconComponent: g,
    inputRef: v,
    labelId: y,
    MenuProps: S = {},
    multiple: w,
    name: C,
    onBlur: x,
    onChange: P,
    onClose: k,
    onFocus: E,
    // eslint-disable-next-line react/prop-types
    onKeyDown: M,
    // eslint-disable-next-line react/prop-types
    onMouseDown: R,
    onOpen: $,
    open: B,
    readOnly: p,
    renderValue: T,
    required: I,
    SelectDisplayProps: A = {},
    tabIndex: D,
    // catching `type` from Input which makes no sense for SelectInput
    type: W,
    value: q,
    variant: U = "standard",
    ...se
  } = t, [_, re] = wt({
    controlled: q,
    default: u,
    name: "Select"
  }), [ge, Pe] = wt({
    controlled: B,
    default: d,
    name: "Select"
  }), oe = c.useRef(null), Y = c.useRef(null), [ye, Ce] = c.useState(null), {
    current: le
  } = c.useRef(B != null), [ne, fe] = c.useState(), [Q, xe] = c.useState(null), H = Xe(o, v), ue = c.useCallback((Z) => {
    Y.current = Z, Z && Ce(Z);
  }, []), X = ye?.parentNode;
  c.useImperativeHandle(H, () => ({
    focus: () => {
      Y.current.focus();
    },
    node: oe.current,
    value: _
  }), [_]);
  const G = ye !== null && ge;
  c.useEffect(() => {
    if (!G || !X || a || typeof ResizeObserver > "u")
      return;
    const Z = new ResizeObserver(() => {
      fe(X.clientWidth);
    });
    return Z.observe(X), () => {
      Z.disconnect();
    };
  }, [G, X, a]), c.useEffect(() => {
    d && ge && ye && !le && (fe(a ? null : X.clientWidth), Y.current.focus());
  }, [ye, a]), c.useEffect(() => {
    s && Y.current.focus();
  }, [s]), c.useEffect(() => {
    if (!y)
      return;
    const Z = yt(Y.current).getElementById(y);
    if (Z) {
      const we = () => {
        getSelection().isCollapsed && Y.current.focus();
      };
      return Z.addEventListener("click", we), () => {
        Z.removeEventListener("click", we);
      };
    }
  }, [y]);
  const K = (Z, we) => {
    Z ? (xe(Jm(we)), $ && $(we)) : (xe(null), k && k(we)), le || (fe(a ? null : X.clientWidth), Pe(Z));
  }, j = (Z) => {
    R?.(Z), Z.button === 0 && (Z.preventDefault(), Y.current.focus(), K(!0, Z));
  }, Te = (Z) => {
    K(!1, Z);
  }, ce = c.Children.toArray(i), ae = (Z) => {
    const we = ce.find((De) => De.props.value === Z.target.value);
    we !== void 0 && (re(we.props.value), P && P(Z, we));
  }, Ke = (Z) => (we) => {
    let De;
    if (we.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        De = Array.isArray(_) ? _.slice() : [];
        const Ye = _.indexOf(Z.props.value);
        Ye === -1 ? De.push(Z.props.value) : De.splice(Ye, 1);
      } else
        De = Z.props.value;
      if (Z.props.onClick && Z.props.onClick(we), _ !== De && (re(De), P)) {
        const Ye = we.nativeEvent || we, oo = new Ye.constructor(Ye.type, Ye);
        Object.defineProperty(oo, "target", {
          writable: !0,
          value: {
            value: De,
            name: C
          }
        }), P(oo, Z);
      }
      w || K(!1, we);
    }
  }, He = (Z) => {
    p || ([
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(Z.key) && (Z.preventDefault(), K(!0, Z)), M?.(Z));
  }, mt = (Z) => {
    !G && x && (Object.defineProperty(Z, "target", {
      writable: !0,
      value: {
        value: _,
        name: C
      }
    }), x(Z));
  };
  delete se["aria-invalid"];
  let Ie, Re;
  const Fe = [];
  let Le = !1;
  (Ur({
    value: _
  }) || h) && (T ? Ie = T(_) : Le = !0);
  const lt = ce.map((Z) => {
    if (!/* @__PURE__ */ c.isValidElement(Z))
      return null;
    let we;
    if (w) {
      if (!Array.isArray(_))
        throw new Error(to(2));
      we = _.some((De) => Da(De, Z.props.value)), we && Le && Fe.push(Z.props.children);
    } else
      we = Da(_, Z.props.value), we && Le && (Re = Z.props.children);
    return /* @__PURE__ */ c.cloneElement(Z, {
      "aria-selected": we ? "true" : "false",
      onClick: Ke(Z),
      onKeyUp: (De) => {
        De.key === " " && De.preventDefault(), Z.props.onKeyUp && Z.props.onKeyUp(De);
      },
      role: "option",
      selected: we,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Z.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Le && (w ? Fe.length === 0 ? Ie = null : Ie = Fe.reduce((Z, we, De) => (Z.push(we), De < Fe.length - 1 && Z.push(", "), Z), []) : Ie = Re);
  let be = ne;
  !a && le && ye && (be = X.clientWidth);
  let Qe;
  typeof D < "u" ? Qe = D : Qe = m ? null : 0;
  const Ze = A.id || (C ? `mui-component-select-${C}` : void 0), st = {
    ...t,
    variant: U,
    value: _,
    open: G,
    error: f
  }, $e = ah(st), Je = {
    ...S.PaperProps,
    ...typeof S.slotProps?.paper == "function" ? S.slotProps.paper(st) : S.slotProps?.paper
  }, Mt = {
    ...S.MenuListProps,
    ...typeof S.slotProps?.list == "function" ? S.slotProps.list(st) : S.slotProps?.list
  }, it = Xt();
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [/* @__PURE__ */ b.jsx(rh, {
      as: "div",
      ref: ue,
      tabIndex: Qe,
      role: "combobox",
      "aria-controls": G ? it : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": G ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": n,
      "aria-labelledby": [y, Ze].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": I ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: He,
      onMouseDown: m || p ? null : j,
      onBlur: mt,
      onFocus: E,
      ...A,
      ownerState: st,
      className: V(A.className, $e.select, l),
      id: Ze,
      children: eh(Ie) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Aa || (Aa = /* @__PURE__ */ b.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ie
    }), /* @__PURE__ */ b.jsx(sh, {
      "aria-invalid": f,
      value: Array.isArray(_) ? _.join(",") : _,
      name: C,
      ref: oe,
      "aria-hidden": !0,
      onChange: ae,
      tabIndex: -1,
      disabled: m,
      className: $e.nativeInput,
      autoFocus: s,
      required: I,
      ...se,
      ownerState: st
    }), /* @__PURE__ */ b.jsx(nh, {
      as: g,
      className: $e.icon,
      ownerState: st
    }), /* @__PURE__ */ b.jsx(oh, {
      value: Q,
      children: /* @__PURE__ */ b.jsx(Gm, {
        id: `menu-${C || ""}`,
        anchorEl: X,
        open: G,
        onClose: Te,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...S,
        slotProps: {
          ...S.slotProps,
          list: {
            "aria-labelledby": y,
            role: "listbox",
            "aria-multiselectable": w ? "true" : void 0,
            disableListWrap: !0,
            id: it,
            ...Mt
          },
          paper: {
            ...Je,
            style: {
              minWidth: be,
              ...Je != null ? Je.style : null
            }
          }
        },
        children: lt
      })
    })]
  });
});
function co({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, n) => (r[n] = e[n], o && typeof e[n] > "u" && (r[n] = o[n]), r), {});
}
const pn = /* @__PURE__ */ c.createContext(void 0);
function Wt() {
  return c.useContext(pn);
}
const lh = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M7 10l5 5 5-5z"
}));
function kr(e) {
  return parseInt(e, 10) || 0;
}
const ch = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function dh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ea(e) {
  return dh(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const uh = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: n,
    minRows: s = 1,
    style: a,
    value: i,
    ...l
  } = t, {
    current: d
  } = c.useRef(i != null), u = c.useRef(null), m = Xe(o, u), h = c.useRef(null), f = c.useRef(null), g = c.useCallback(() => {
    const C = u.current, x = f.current;
    if (!C || !x)
      return;
    const k = Ft(C).getComputedStyle(C);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    x.style.width = k.width, x.value = C.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const E = k.boxSizing, M = kr(k.paddingBottom) + kr(k.paddingTop), R = kr(k.borderBottomWidth) + kr(k.borderTopWidth), $ = x.scrollHeight;
    x.value = "x";
    const B = x.scrollHeight;
    let p = $;
    s && (p = Math.max(Number(s) * B, p)), n && (p = Math.min(Number(n) * B, p)), p = Math.max(p, B);
    const T = p + (E === "border-box" ? M + R : 0), I = Math.abs(p - $) <= 1;
    return {
      outerHeightStyle: T,
      overflowing: I
    };
  }, [n, s, t.placeholder]), v = Me(() => {
    const C = u.current, x = g();
    if (!C || !x || Ea(x))
      return !1;
    const P = x.outerHeightStyle;
    return h.current != null && h.current !== P;
  }), y = c.useCallback(() => {
    const C = u.current, x = g();
    if (!C || !x || Ea(x))
      return;
    const P = x.outerHeightStyle;
    h.current !== P && (h.current = P, C.style.height = `${P}px`), C.style.overflow = x.overflowing ? "hidden" : "";
  }, [g]), S = c.useRef(-1);
  bt(() => {
    const C = ln(y), x = u?.current;
    if (!x)
      return;
    const P = Ft(x);
    P.addEventListener("resize", C);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      v() && (k.unobserve(x), cancelAnimationFrame(S.current), y(), S.current = requestAnimationFrame(() => {
        k.observe(x);
      }));
    }), k.observe(x)), () => {
      C.clear(), cancelAnimationFrame(S.current), P.removeEventListener("resize", C), k && k.disconnect();
    };
  }, [g, y, v]), bt(() => {
    y();
  });
  const w = (C) => {
    d || y();
    const x = C.target, P = x.value.length, k = x.value.endsWith(`
`), E = x.selectionStart === P;
    k && E && x.setSelectionRange(P, P), r && r(C);
  };
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [/* @__PURE__ */ b.jsx("textarea", {
      value: i,
      onChange: w,
      ref: m,
      rows: s,
      style: a,
      ...l
    }), /* @__PURE__ */ b.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...ch.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function ph(e) {
  return ee("MuiInputBase", e);
}
const Fo = J("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Ba;
const fn = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${L(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, mn = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, fh = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: n,
    endAdornment: s,
    focused: a,
    formControl: i,
    fullWidth: l,
    hiddenLabel: d,
    multiline: u,
    readOnly: m,
    size: h,
    startAdornment: f,
    type: g
  } = e, v = {
    root: ["root", `color${L(o)}`, r && "disabled", n && "error", l && "fullWidth", a && "focused", i && "formControl", h && h !== "medium" && `size${L(h)}`, u && "multiline", f && "adornedStart", s && "adornedEnd", d && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", u && "inputMultiline", h === "small" && "inputSizeSmall", d && "inputHiddenLabel", f && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return te(v, ph, t);
}, hn = O("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: fn
})(me(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Fo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: o
    }) => t.multiline && o === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), gn = O("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: mn
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, n = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&::-ms-input-placeholder": o,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Fo.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": n,
      "&:focus::-moz-placeholder": n,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": n
      // Edge
    },
    [`&.${Fo.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Oa = Ss({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Ts = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": n,
    autoComplete: s,
    autoFocus: a,
    className: i,
    color: l,
    components: d = {},
    componentsProps: u = {},
    defaultValue: m,
    disabled: h,
    disableInjectingGlobalStyles: f,
    endAdornment: g,
    error: v,
    fullWidth: y = !1,
    id: S,
    inputComponent: w = "input",
    inputProps: C = {},
    inputRef: x,
    margin: P,
    maxRows: k,
    minRows: E,
    multiline: M = !1,
    name: R,
    onBlur: $,
    onChange: B,
    onClick: p,
    onFocus: T,
    onKeyDown: I,
    onKeyUp: A,
    placeholder: D,
    readOnly: W,
    renderSuffix: q,
    rows: U,
    size: se,
    slotProps: _ = {},
    slots: re = {},
    startAdornment: ge,
    type: Pe = "text",
    value: oe,
    ...Y
  } = r, ye = C.value != null ? C.value : oe, {
    current: Ce
  } = c.useRef(ye != null), le = c.useRef(), ne = c.useCallback((be) => {
  }, []), fe = Xe(le, x, C.ref, ne), [Q, xe] = c.useState(!1), H = Wt(), ue = co({
    props: r,
    muiFormControl: H,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = H ? H.focused : Q, c.useEffect(() => {
    !H && h && Q && (xe(!1), $ && $());
  }, [H, h, Q, $]);
  const X = H && H.onFilled, G = H && H.onEmpty, K = c.useCallback((be) => {
    Ur(be) ? X && X() : G && G();
  }, [X, G]);
  bt(() => {
    Ce && K({
      value: ye
    });
  }, [ye, K, Ce]);
  const j = (be) => {
    T && T(be), C.onFocus && C.onFocus(be), H && H.onFocus ? H.onFocus(be) : xe(!0);
  }, Te = (be) => {
    $ && $(be), C.onBlur && C.onBlur(be), H && H.onBlur ? H.onBlur(be) : xe(!1);
  }, ce = (be, ...Qe) => {
    if (!Ce) {
      const Ze = be.target || le.current;
      if (Ze == null)
        throw new Error(to(1));
      K({
        value: Ze.value
      });
    }
    C.onChange && C.onChange(be, ...Qe), B && B(be, ...Qe);
  };
  c.useEffect(() => {
    K(le.current);
  }, []);
  const ae = (be) => {
    le.current && be.currentTarget === be.target && le.current.focus(), p && p(be);
  };
  let Ke = w, He = C;
  M && Ke === "input" && (U ? He = {
    type: void 0,
    minRows: U,
    maxRows: U,
    ...He
  } : He = {
    type: void 0,
    maxRows: k,
    minRows: E,
    ...He
  }, Ke = uh);
  const mt = (be) => {
    K(be.animationName === "mui-auto-fill-cancel" ? le.current : {
      value: "x"
    });
  };
  c.useEffect(() => {
    H && H.setAdornedStart(!!ge);
  }, [H, ge]);
  const Ie = {
    ...r,
    color: ue.color || "primary",
    disabled: ue.disabled,
    endAdornment: g,
    error: ue.error,
    focused: ue.focused,
    formControl: H,
    fullWidth: y,
    hiddenLabel: ue.hiddenLabel,
    multiline: M,
    size: ue.size,
    startAdornment: ge,
    type: Pe
  }, Re = fh(Ie), Fe = re.root || d.Root || hn, Le = _.root || u.root || {}, lt = re.input || d.Input || gn;
  return He = {
    ...He,
    ..._.input ?? u.input
  }, /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [!f && typeof Oa == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ba || (Ba = /* @__PURE__ */ b.jsx(Oa, {}))), /* @__PURE__ */ b.jsxs(Fe, {
      ...Le,
      ref: o,
      onClick: ae,
      ...Y,
      ...!zr(Fe) && {
        ownerState: {
          ...Ie,
          ...Le.ownerState
        }
      },
      className: V(Re.root, Le.className, i, W && "MuiInputBase-readOnly"),
      children: [ge, /* @__PURE__ */ b.jsx(pn.Provider, {
        value: null,
        children: /* @__PURE__ */ b.jsx(lt, {
          "aria-invalid": ue.error,
          "aria-describedby": n,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: ue.disabled,
          id: S,
          onAnimationStart: mt,
          name: R,
          placeholder: D,
          readOnly: W,
          required: ue.required,
          rows: U,
          value: ye,
          onKeyDown: I,
          onKeyUp: A,
          type: Pe,
          ...He,
          ...!zr(lt) && {
            as: Ke,
            ownerState: {
              ...Ie,
              ...He.ownerState
            }
          },
          ref: fe,
          className: V(Re.input, He.className, W && "MuiInputBase-readOnly"),
          onBlur: Te,
          onChange: ce,
          onFocus: j
        })
      }), g, q ? q({
        ...ue,
        startAdornment: ge
      }) : null]
    })]
  });
});
function mh(e) {
  return ee("MuiInput", e);
}
const Jo = {
  ...Fo,
  ...J("MuiInput", ["root", "underline", "input"])
}, hh = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, n = te({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, mh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...n
  };
}, gh = O(hn, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fn(e, t), !o.disableUnderline && t.underline];
  }
})(me(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Jo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Jo.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Jo.disabled}, .${Jo.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${Jo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(je()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), yh = O(gn, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: mn
})({}), Rs = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: n = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: i = !1,
    inputComponent: l = "input",
    multiline: d = !1,
    slotProps: u,
    slots: m = {},
    type: h = "text",
    ...f
  } = r, g = hh(r), y = {
    root: {
      ownerState: {
        disableUnderline: n
      }
    }
  }, S = u ?? a ? ft(u ?? a, y) : y, w = m.root ?? s.Root ?? gh, C = m.input ?? s.Input ?? yh;
  return /* @__PURE__ */ b.jsx(Ts, {
    slots: {
      root: w,
      input: C
    },
    slotProps: S,
    fullWidth: i,
    inputComponent: l,
    multiline: d,
    ref: o,
    type: h,
    ...f,
    classes: g
  });
});
Rs.muiName = "Input";
function bh(e) {
  return ee("MuiFilledInput", e);
}
const mo = {
  ...Fo,
  ...J("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, vh = (e) => {
  const {
    classes: t,
    disableUnderline: o,
    startAdornment: r,
    endAdornment: n,
    size: s,
    hiddenLabel: a,
    multiline: i
  } = e, l = {
    root: ["root", !o && "underline", r && "adornedStart", n && "adornedEnd", s === "small" && `size${L(s)}`, a && "hiddenLabel", i && "multiline"],
    input: ["input"]
  }, d = te(l, bh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...d
  };
}, xh = O(hn, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fn(e, t), !o.disableUnderline && t.underline];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", n = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : n,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${mo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${mo.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${mo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${mo.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : o}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${mo.disabled}, .${mo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${mo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(je()).map(([a]) => ({
      props: {
        disableUnderline: !1,
        color: a
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[a]?.main}`
        }
      }
    })), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: i
      }) => a.multiline && i === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Ch = O(gn, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: mn
})(me(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), $s = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: n = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: i = !1,
    hiddenLabel: l,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: u = !1,
    slotProps: m,
    slots: h = {},
    type: f = "text",
    ...g
  } = r, v = {
    ...r,
    disableUnderline: n,
    fullWidth: i,
    inputComponent: d,
    multiline: u,
    type: f
  }, y = vh(r), S = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, w = m ?? a ? ft(S, m ?? a) : S, C = h.root ?? s.Root ?? xh, x = h.input ?? s.Input ?? Ch;
  return /* @__PURE__ */ b.jsx(Ts, {
    slots: {
      root: C,
      input: x
    },
    slotProps: w,
    fullWidth: i,
    inputComponent: d,
    multiline: u,
    ref: o,
    type: f,
    ...g,
    classes: y
  });
});
$s.muiName = "Input";
var La;
const Sh = O("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ct
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), wh = O("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ct
})(me(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function kh(e) {
  const {
    children: t,
    classes: o,
    className: r,
    label: n,
    notched: s,
    ...a
  } = e, i = n != null && n !== "", l = {
    ...e,
    notched: s,
    withLabel: i
  };
  return /* @__PURE__ */ b.jsx(Sh, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...a,
    children: /* @__PURE__ */ b.jsx(wh, {
      ownerState: l,
      children: i ? /* @__PURE__ */ b.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        La || (La = /* @__PURE__ */ b.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
function Ph(e) {
  return ee("MuiOutlinedInput", e);
}
const Ut = {
  ...Fo,
  ...J("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, Mh = (e) => {
  const {
    classes: t
  } = e, r = te({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Ph, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Th = O(hn, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: fn
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Ut.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Ut.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Ut.focused} .${Ut.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(je()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${Ut.focused} .${Ut.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[o].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Ut.error} .${Ut.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Ut.disabled} .${Ut.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: o,
        size: r
      }) => o.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Rh = O(kh, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), $h = O(gn, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: mn
})(me(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), Is = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: n = {},
    fullWidth: s = !1,
    inputComponent: a = "input",
    label: i,
    multiline: l = !1,
    notched: d,
    slots: u = {},
    slotProps: m = {},
    type: h = "text",
    ...f
  } = r, g = Mh(r), v = Wt(), y = co({
    props: r,
    muiFormControl: v,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), S = {
    ...r,
    color: y.color || "primary",
    disabled: y.disabled,
    error: y.error,
    focused: y.focused,
    formControl: v,
    fullWidth: s,
    hiddenLabel: y.hiddenLabel,
    multiline: l,
    size: y.size,
    type: h
  }, w = u.root ?? n.Root ?? Th, C = u.input ?? n.Input ?? $h, [x, P] = de("notchedOutline", {
    elementType: Rh,
    className: g.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: S,
    externalForwardedProps: {
      slots: u,
      slotProps: m
    },
    additionalProps: {
      label: i != null && i !== "" && y.required ? /* @__PURE__ */ b.jsxs(c.Fragment, {
        children: [i, " ", "*"]
      }) : i
    }
  });
  return /* @__PURE__ */ b.jsx(Ts, {
    slots: {
      root: w,
      input: C
    },
    slotProps: m,
    renderSuffix: (k) => /* @__PURE__ */ b.jsx(x, {
      ...P,
      notched: typeof d < "u" ? d : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: l,
    ref: o,
    type: h,
    ...f,
    classes: {
      ...g,
      notchedOutline: null
    }
  });
});
Is.muiName = "Input";
const Ih = (e) => {
  const {
    classes: t
  } = e, r = te({
    root: ["root"]
  }, hl, t);
  return {
    ...t,
    ...r
  };
}, Ds = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Ct(e) && e !== "variant"
}, Dh = O(Rs, Ds)(""), Ah = O(Is, Ds)(""), Eh = O($s, Ds)(""), yl = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: n = !1,
    children: s,
    classes: a = {},
    className: i,
    defaultOpen: l = !1,
    displayEmpty: d = !1,
    IconComponent: u = lh,
    id: m,
    input: h,
    inputProps: f,
    label: g,
    labelId: v,
    MenuProps: y,
    multiple: S = !1,
    native: w = !1,
    onClose: C,
    onOpen: x,
    open: P,
    renderValue: k,
    SelectDisplayProps: E,
    variant: M = "outlined",
    ...R
  } = r, $ = w ? Qm : ih, B = Wt(), p = co({
    props: r,
    muiFormControl: B,
    states: ["variant", "error"]
  }), T = p.variant || M, I = {
    ...r,
    variant: T,
    classes: a
  }, A = Ih(I), {
    root: D,
    ...W
  } = A, q = h || {
    standard: /* @__PURE__ */ b.jsx(Dh, {
      ownerState: I
    }),
    outlined: /* @__PURE__ */ b.jsx(Ah, {
      label: g,
      ownerState: I
    }),
    filled: /* @__PURE__ */ b.jsx(Eh, {
      ownerState: I
    })
  }[T], U = Xe(o, wo(q));
  return /* @__PURE__ */ b.jsx(c.Fragment, {
    children: /* @__PURE__ */ c.cloneElement(q, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: $,
      inputProps: {
        children: s,
        error: p.error,
        IconComponent: u,
        variant: T,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: S,
        ...w ? {
          id: m
        } : {
          autoWidth: n,
          defaultOpen: l,
          displayEmpty: d,
          labelId: v,
          MenuProps: y,
          onClose: C,
          onOpen: x,
          open: P,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...E
          }
        },
        ...f,
        classes: f ? ft(W, f.classes) : W,
        ...h ? h.props.inputProps : {}
      },
      ...(S && w || d) && T === "outlined" ? {
        notched: !0
      } : {},
      ref: U,
      className: V(q.props.className, i, A.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: T
      },
      ...R
    })
  });
});
yl.muiName = "Select";
function Bh(e, t) {
  if (t == null) {
    e.focus();
    return;
  }
  try {
    e.focus({
      focusVisible: t === "keyboard"
    });
  } catch {
    e.focus();
  }
}
const Oh = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, Lh = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: n,
    selected: s,
    classes: a
  } = e, l = te({
    root: ["root", o && "dense", t && "disabled", !n && "gutters", r && "divider", s && "selected"]
  }, Jf, a);
  return {
    ...a,
    ...l
  };
}, Nh = O(Et, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Oh
})(me(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Xo.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Xo.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Xo.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Xo.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Xo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${xa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${xa.inset}`]: {
    marginLeft: 52
  },
  [`& .${Io.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Io.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Sa.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Sa.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), dC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: n = !1,
    component: s = "li",
    dense: a = !1,
    divider: i = !1,
    disableGutters: l = !1,
    focusVisibleClassName: d,
    role: u = "menuitem",
    tabIndex: m,
    className: h,
    ...f
  } = r, g = th(), v = c.useContext(Vr), y = c.useMemo(() => ({
    dense: a || v.dense || !1,
    disableGutters: l
  }), [v.dense, a, l]), S = c.useRef(null);
  bt(() => {
    n && S.current && Bh(S.current, g);
  }, [n]);
  const w = {
    ...r,
    dense: y.dense,
    divider: i,
    disableGutters: l
  }, C = Lh(r), x = Xe(S, o);
  let P;
  return r.disabled || (P = m !== void 0 ? m : -1), /* @__PURE__ */ b.jsx(Vr.Provider, {
    value: y,
    children: /* @__PURE__ */ b.jsx(Nh, {
      ref: x,
      role: u,
      tabIndex: P,
      component: s,
      focusVisibleClassName: V(C.focusVisible, d),
      className: V(C.root, h),
      ...f,
      ownerState: w,
      classes: C
    })
  });
});
function zh(e) {
  return ee("MuiPickersDay", e);
}
const ho = J("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), Fh = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], jh = (e) => {
  const {
    selected: t,
    disableMargin: o,
    disableHighlightToday: r,
    today: n,
    disabled: s,
    outsideCurrentMonth: a,
    showDaysOutsideCurrentMonth: i,
    classes: l
  } = e, d = a && !i;
  return te({
    root: ["root", t && !d && "selected", s && "disabled", !o && "dayWithMargin", !r && n && "today", a && i && "dayOutsideMonth", d && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, zh, l);
}, bl = ({
  theme: e
}) => Se({}, e.typography.caption, {
  width: Co,
  height: Co,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: (e.vars || e).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : zt(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${ho.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${ho.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${ho.disabled}:not(.${ho.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ho.disabled}&.${ho.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: !1
    },
    style: {
      margin: `0 ${Wo}px`
    }
  }, {
    props: {
      outsideCurrentMonth: !0,
      showDaysOutsideCurrentMonth: !0
    },
    style: {
      color: (e.vars || e).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: !1,
      today: !0
    },
    style: {
      [`&:not(.${ho.selected})`]: {
        border: `1px solid ${(e.vars || e).palette.text.secondary}`
      }
    }
  }]
}), vl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.today && t.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, Wh = O(Et, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: vl
})(bl), Vh = O("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: vl
})(({
  theme: e
}) => Se({}, bl({
  theme: e
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), er = () => {
}, Hh = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: n = !1,
    className: s,
    day: a,
    disabled: i = !1,
    disableHighlightToday: l = !1,
    disableMargin: d = !1,
    isAnimating: u,
    onClick: m,
    onDaySelect: h,
    onFocus: f = er,
    onBlur: g = er,
    onKeyDown: v = er,
    onMouseDown: y = er,
    onMouseEnter: S = er,
    outsideCurrentMonth: w,
    selected: C = !1,
    showDaysOutsideCurrentMonth: x = !1,
    children: P,
    today: k = !1
  } = r, E = gt(r, Fh), M = Se({}, r, {
    autoFocus: n,
    disabled: i,
    disableHighlightToday: l,
    disableMargin: d,
    selected: C,
    showDaysOutsideCurrentMonth: x,
    today: k
  }), R = jh(M), $ = kt(), B = c.useRef(null), p = Xe(B, o);
  bt(() => {
    n && !i && !u && !w && B.current.focus();
  }, [n, i, u, w]);
  const T = (A) => {
    y(A), w && A.preventDefault();
  }, I = (A) => {
    i || h(a), w && A.currentTarget.focus(), m && m(A);
  };
  return w && !x ? /* @__PURE__ */ b.jsx(Vh, {
    className: V(R.root, R.hiddenDaySpacingFiller, s),
    ownerState: M,
    role: E.role
  }) : /* @__PURE__ */ b.jsx(Wh, Se({
    className: V(R.root, s),
    ref: p,
    centerRipple: !0,
    disabled: i,
    tabIndex: C ? 0 : -1,
    onKeyDown: (A) => v(A, a),
    onFocus: (A) => f(A, a),
    onBlur: (A) => g(A, a),
    onMouseEnter: (A) => S(A, a),
    onClick: I,
    onMouseDown: T
  }, E, {
    ownerState: M,
    children: P || $.format(a, "dayOfMonth")
  }));
}), Uh = /* @__PURE__ */ c.memo(Hh);
function _h(e) {
  return ee("MuiFormLabel", e);
}
const cr = J("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Gh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: n,
    error: s,
    filled: a,
    required: i
  } = e, l = {
    root: ["root", `color${L(o)}`, n && "disabled", s && "error", a && "filled", r && "focused", i && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return te(l, _h, t);
}, Kh = O("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${cr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${cr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${cr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Yh = O("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(me(({
  theme: e
}) => ({
  [`&.${cr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), qh = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: n,
    className: s,
    color: a,
    component: i = "label",
    disabled: l,
    error: d,
    filled: u,
    focused: m,
    required: h,
    ...f
  } = r, g = Wt(), v = co({
    props: r,
    muiFormControl: g,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), y = {
    ...r,
    color: v.color || "primary",
    component: i,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, S = Gh(y);
  return /* @__PURE__ */ b.jsxs(Kh, {
    as: i,
    ownerState: y,
    className: V(S.root, s),
    ref: o,
    ...f,
    children: [n, v.required && /* @__PURE__ */ b.jsxs(Yh, {
      ownerState: y,
      "aria-hidden": !0,
      className: S.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Xh(e) {
  return ee("MuiInputLabel", e);
}
const uC = J("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), Qh = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: n,
    disableAnimation: s,
    variant: a,
    required: i
  } = e, l = {
    root: ["root", o && "formControl", !s && "animated", n && "shrink", r && r !== "medium" && `size${L(r)}`, a],
    asterisk: [i && "asterisk"]
  }, d = te(l, Xh, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...d
  };
}, Zh = O(qh, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${cr.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(me(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o
    }) => t === "filled" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o,
      size: r
    }) => t === "filled" && o.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o
    }) => t === "outlined" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Jh = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: n = !1,
    margin: s,
    shrink: a,
    variant: i,
    className: l,
    ...d
  } = r, u = Wt();
  let m = a;
  typeof m > "u" && u && (m = u.filled || u.focused || u.adornedStart);
  const h = co({
    props: r,
    muiFormControl: u,
    states: ["size", "variant", "required", "focused"]
  }), f = {
    ...r,
    disableAnimation: n,
    formControl: u,
    shrink: m,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, g = Qh(f);
  return /* @__PURE__ */ b.jsx(Zh, {
    "data-shrink": m,
    ref: o,
    className: V(g.root, l),
    ...d,
    ownerState: f,
    classes: g
  });
});
function eg(e) {
  return ee("MuiFormControl", e);
}
J("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const tg = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, n = {
    root: ["root", o !== "none" && `margin${L(o)}`, r && "fullWidth"]
  };
  return te(n, eg, t);
}, og = O("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${L(o.margin)}`], o.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), rg = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormControl"
  }), {
    children: n,
    className: s,
    color: a = "primary",
    component: i = "div",
    disabled: l = !1,
    error: d = !1,
    focused: u,
    fullWidth: m = !1,
    hiddenLabel: h = !1,
    margin: f = "none",
    required: g = !1,
    size: v = "medium",
    variant: y = "outlined",
    ...S
  } = r, w = {
    ...r,
    color: a,
    component: i,
    disabled: l,
    error: d,
    fullWidth: m,
    hiddenLabel: h,
    margin: f,
    required: g,
    size: v,
    variant: y
  }, C = tg(w), [x, P] = c.useState(() => {
    let A = !1;
    return n && c.Children.forEach(n, (D) => {
      if (!Eo(D, ["Input", "Select"]))
        return;
      const W = Eo(D, ["Select"]) ? D.props.input : D;
      W && Zm(W.props) && (A = !0);
    }), A;
  }), [k, E] = c.useState(() => {
    let A = !1;
    return n && c.Children.forEach(n, (D) => {
      Eo(D, ["Input", "Select"]) && (Ur(D.props, !0) || Ur(D.props.inputProps, !0)) && (A = !0);
    }), A;
  }), [M, R] = c.useState(!1);
  l && M && R(!1);
  const $ = u !== void 0 && !l ? u : M;
  let B;
  c.useRef(!1);
  const p = c.useCallback(() => {
    E(!0);
  }, []), T = c.useCallback(() => {
    E(!1);
  }, []), I = c.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: P,
    color: a,
    disabled: l,
    error: d,
    filled: k,
    focused: $,
    fullWidth: m,
    hiddenLabel: h,
    size: v,
    onBlur: () => {
      R(!1);
    },
    onFocus: () => {
      R(!0);
    },
    onEmpty: T,
    onFilled: p,
    registerEffect: B,
    required: g,
    variant: y
  }), [x, a, l, d, k, $, m, h, B, T, p, g, v, y]);
  return /* @__PURE__ */ b.jsx(pn.Provider, {
    value: I,
    children: /* @__PURE__ */ b.jsx(og, {
      as: i,
      ownerState: w,
      className: V(C.root, s),
      ref: o,
      ...S,
      children: n
    })
  });
});
function ng(e) {
  return ee("MuiFormHelperText", e);
}
const Na = J("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var za;
const sg = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: n,
    error: s,
    filled: a,
    focused: i,
    required: l
  } = e, d = {
    root: ["root", n && "disabled", s && "error", r && `size${L(r)}`, o && "contained", i && "focused", a && "filled", l && "required"]
  };
  return te(d, ng, t);
}, ag = O("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${L(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Na.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Na.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), ig = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: n,
    className: s,
    component: a = "p",
    disabled: i,
    error: l,
    filled: d,
    focused: u,
    margin: m,
    required: h,
    variant: f,
    ...g
  } = r, v = Wt(), y = co({
    props: r,
    muiFormControl: v,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), S = {
    ...r,
    component: a,
    contained: y.variant === "filled" || y.variant === "outlined",
    variant: y.variant,
    size: y.size,
    disabled: y.disabled,
    error: y.error,
    filled: y.filled,
    focused: y.focused,
    required: y.required
  };
  delete S.ownerState;
  const w = sg(S);
  return /* @__PURE__ */ b.jsx(ag, {
    as: a,
    className: V(w.root, s),
    ref: o,
    ...g,
    ownerState: S,
    children: n === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      za || (za = /* @__PURE__ */ b.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : n
  });
});
function lg(e) {
  return ee("MuiTextField", e);
}
J("MuiTextField", ["root"]);
const cg = {
  standard: Rs,
  filled: $s,
  outlined: Is
}, dg = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, lg, t);
}, ug = O(rg, {
  name: "MuiTextField",
  slot: "Root"
})({}), pC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: n,
    autoFocus: s = !1,
    children: a,
    className: i,
    color: l = "primary",
    defaultValue: d,
    disabled: u = !1,
    error: m = !1,
    FormHelperTextProps: h,
    fullWidth: f = !1,
    helperText: g,
    id: v,
    InputLabelProps: y,
    inputProps: S,
    InputProps: w,
    inputRef: C,
    label: x,
    maxRows: P,
    minRows: k,
    multiline: E = !1,
    name: M,
    onBlur: R,
    onChange: $,
    onFocus: B,
    placeholder: p,
    required: T = !1,
    rows: I,
    select: A = !1,
    SelectProps: D,
    slots: W = {},
    slotProps: q = {},
    type: U,
    value: se,
    variant: _ = "outlined",
    ...re
  } = r, ge = {
    ...r,
    autoFocus: s,
    color: l,
    disabled: u,
    error: m,
    fullWidth: f,
    multiline: E,
    required: T,
    select: A,
    variant: _
  }, Pe = dg(ge), oe = Xt(v), Y = g && oe ? `${oe}-helper-text` : void 0, ye = x && oe ? `${oe}-label` : void 0, Ce = cg[_], le = {
    slots: W,
    slotProps: {
      input: w,
      inputLabel: y,
      htmlInput: S,
      formHelperText: h,
      select: D,
      ...q
    }
  }, ne = {}, fe = le.slotProps.inputLabel;
  _ === "outlined" && (fe && typeof fe.shrink < "u" && (ne.notched = fe.shrink), ne.label = x), A && ((!D || !D.native) && (ne.id = void 0), ne["aria-describedby"] = void 0);
  const [Q, xe] = de("root", {
    elementType: ug,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...le,
      ...re
    },
    ownerState: ge,
    className: V(Pe.root, i),
    ref: o,
    additionalProps: {
      disabled: u,
      error: m,
      fullWidth: f,
      required: T,
      color: l,
      variant: _
    }
  }), [H, ue] = de("input", {
    elementType: Ce,
    externalForwardedProps: le,
    additionalProps: ne,
    ownerState: ge
  }), [X, G] = de("inputLabel", {
    elementType: Jh,
    externalForwardedProps: le,
    ownerState: ge
  }), [K, j] = de("htmlInput", {
    elementType: "input",
    externalForwardedProps: le,
    ownerState: ge
  }), [Te, ce] = de("formHelperText", {
    elementType: ig,
    externalForwardedProps: le,
    ownerState: ge
  }), [ae, Ke] = de("select", {
    elementType: yl,
    externalForwardedProps: le,
    ownerState: ge
  }), He = /* @__PURE__ */ b.jsx(H, {
    "aria-describedby": Y,
    autoComplete: n,
    autoFocus: s,
    defaultValue: d,
    fullWidth: f,
    multiline: E,
    name: M,
    rows: I,
    maxRows: P,
    minRows: k,
    type: U,
    value: se,
    id: oe,
    inputRef: C,
    onBlur: R,
    onChange: $,
    onFocus: B,
    placeholder: p,
    inputProps: j,
    slots: {
      input: W.htmlInput ? K : void 0
    },
    ...ue
  });
  return /* @__PURE__ */ b.jsxs(Q, {
    ...xe,
    children: [x != null && x !== "" && /* @__PURE__ */ b.jsx(X, {
      htmlFor: oe,
      id: ye,
      ...G,
      children: x
    }), A ? /* @__PURE__ */ b.jsx(ae, {
      "aria-describedby": Y,
      id: oe,
      labelId: ye,
      value: se,
      input: He,
      ...Ke,
      children: a
    }) : He, g && /* @__PURE__ */ b.jsx(Te, {
      id: Y,
      ...ce,
      children: g
    })]
  });
}), xl = ({
  props: e,
  value: t,
  timezone: o,
  adapter: r
}) => {
  if (t === null)
    return null;
  const {
    shouldDisableDate: n,
    shouldDisableMonth: s,
    shouldDisableYear: a,
    disablePast: i,
    disableFuture: l
  } = e, d = r.utils.date(void 0, o), u = io(r.utils, e.minDate, r.defaultDates.minDate), m = io(r.utils, e.maxDate, r.defaultDates.maxDate);
  switch (!0) {
    case !r.utils.isValid(t):
      return "invalidDate";
    case !!(n && n(t)):
      return "shouldDisableDate";
    case !!(s && s(t)):
      return "shouldDisableMonth";
    case !!(a && a(t)):
      return "shouldDisableYear";
    case !!(l && r.utils.isAfterDay(t, d)):
      return "disableFuture";
    case !!(i && r.utils.isBeforeDay(t, d)):
      return "disablePast";
    case !!(u && r.utils.isBeforeDay(t, u)):
      return "minDate";
    case !!(m && r.utils.isAfterDay(t, m)):
      return "maxDate";
    default:
      return null;
  }
};
xl.valueManager = So;
function pg(e) {
  return ee("MuiInputAdornment", e);
}
const Fa = J("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var ja;
const fg = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${L(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, mg = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: n,
    size: s,
    variant: a
  } = e, i = {
    root: ["root", o && "disablePointerEvents", n && `position${L(n)}`, a, r && "hiddenLabel", s && `size${L(s)}`]
  };
  return te(i, pg, t);
}, hg = O("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: fg
})(me(({
  theme: e
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${Fa.positionStart}&:not(.${Fa.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: !0
    },
    style: {
      pointerEvents: "none"
    }
  }]
}))), fC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: n,
    className: s,
    component: a = "div",
    disablePointerEvents: i = !1,
    disableTypography: l = !1,
    position: d,
    variant: u,
    ...m
  } = r, h = Wt() || {};
  let f = u;
  u && h.variant, h && !f && (f = h.variant);
  const g = {
    ...r,
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: i,
    position: d,
    variant: f
  }, v = mg(g);
  return /* @__PURE__ */ b.jsx(pn.Provider, {
    value: null,
    children: /* @__PURE__ */ b.jsx(hg, {
      as: a,
      ownerState: g,
      className: V(v.root, s),
      ref: o,
      ...m,
      children: typeof n == "string" && !l ? /* @__PURE__ */ b.jsx(pt, {
        color: "textSecondary",
        children: n
      }) : /* @__PURE__ */ b.jsxs(c.Fragment, {
        children: [d === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ja || (ja = /* @__PURE__ */ b.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, n]
      })
    })
  });
}), Cl = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: r,
  maxDate: n,
  disableFuture: s,
  disablePast: a,
  timezone: i
}) => {
  const l = dn();
  return c.useCallback((d) => xl({
    adapter: l,
    value: d,
    timezone: i,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: o,
      minDate: r,
      maxDate: n,
      disableFuture: s,
      disablePast: a
    }
  }) !== null, [l, e, t, o, r, n, s, a, i]);
}, gg = (e, t, o) => (r, n) => {
  switch (n.type) {
    case "changeMonth":
      return Se({}, r, {
        slideDirection: n.direction,
        currentMonth: n.newMonth,
        isMonthSwitchingAnimating: !e
      });
    case "changeMonthTimezone": {
      const s = n.newTimezone;
      if (o.getTimezone(r.currentMonth) === s)
        return r;
      let a = o.setTimezone(r.currentMonth, s);
      return o.getMonth(a) !== o.getMonth(r.currentMonth) && (a = o.setMonth(a, o.getMonth(r.currentMonth))), Se({}, r, {
        currentMonth: a
      });
    }
    case "finishMonthSwitchingAnimation":
      return Se({}, r, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (r.focusedDay != null && n.focusedDay != null && o.isSameDay(n.focusedDay, r.focusedDay))
        return r;
      const s = n.focusedDay != null && !t && !o.isSameMonth(r.currentMonth, n.focusedDay);
      return Se({}, r, {
        focusedDay: n.focusedDay,
        isMonthSwitchingAnimating: s && !e && !n.withoutMonthSwitchingAnimation,
        currentMonth: s ? o.startOfMonth(n.focusedDay) : r.currentMonth,
        slideDirection: n.focusedDay != null && o.isAfterDay(n.focusedDay, r.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, yg = (e) => {
  const {
    value: t,
    referenceDate: o,
    disableFuture: r,
    disablePast: n,
    disableSwitchToMonthOnDayFocus: s = !1,
    maxDate: a,
    minDate: i,
    onMonthChange: l,
    reduceAnimations: d,
    shouldDisableDate: u,
    timezone: m
  } = e, h = kt(), f = c.useRef(gg(!!d, s, h)).current, g = c.useMemo(
    () => So.getInitialReferenceValue({
      value: t,
      utils: h,
      timezone: m,
      props: e,
      referenceDate: o,
      granularity: eo.day
    }),
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, m]
  ), [v, y] = c.useReducer(f, {
    isMonthSwitchingAnimating: !1,
    focusedDay: g,
    currentMonth: h.startOfMonth(g),
    slideDirection: "left"
  });
  c.useEffect(() => {
    y({
      type: "changeMonthTimezone",
      newTimezone: h.getTimezone(g)
    });
  }, [g, h]);
  const S = c.useCallback((k) => {
    y(Se({
      type: "changeMonth"
    }, k)), l && l(k.newMonth);
  }, [l]), w = c.useCallback((k) => {
    const E = k;
    h.isSameMonth(E, v.currentMonth) || S({
      newMonth: h.startOfMonth(E),
      direction: h.isAfterDay(E, v.currentMonth) ? "left" : "right"
    });
  }, [v.currentMonth, S, h]), C = Cl({
    shouldDisableDate: u,
    minDate: i,
    maxDate: a,
    disableFuture: r,
    disablePast: n,
    timezone: m
  }), x = c.useCallback(() => {
    y({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), P = Me((k, E) => {
    C(k) || y({
      type: "changeFocusedDay",
      focusedDay: k,
      withoutMonthSwitchingAnimation: E
    });
  });
  return {
    referenceDate: g,
    calendarState: v,
    changeMonth: w,
    changeFocusedDay: P,
    isDateDisabled: C,
    onMonthSwitchingAnimationEnd: x,
    handleChangeMonth: S
  };
}, bg = (e) => ee("MuiPickersFadeTransitionGroup", e);
J("MuiPickersFadeTransitionGroup", ["root"]);
const vg = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, bg, t);
}, xg = O(ns, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "block",
  position: "relative"
});
function Sl(e) {
  const t = dt({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: r,
    reduceAnimations: n,
    transKey: s
  } = t, a = vg(t), i = jt();
  return n ? o : /* @__PURE__ */ b.jsx(xg, {
    className: V(a.root, r),
    children: /* @__PURE__ */ b.jsx(pr, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: i.transitions.duration.enteringScreen,
        enter: i.transitions.duration.enteringScreen,
        exit: 0
      },
      children: o
    }, s)
  });
}
const Cg = (e) => ee("MuiPickersSlideTransition", e), Rt = J("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), Sg = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], wg = (e) => {
  const {
    classes: t,
    slideDirection: o
  } = e, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return te(r, Cg, t);
}, kg = O(ns, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${Rt["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${Rt["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${Rt.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${Rt.slideExit}`]: t.slideExit
  }, {
    [`.${Rt["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${Rt["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
  }]
})(({
  theme: e
}) => {
  const t = e.transitions.create("transform", {
    duration: e.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${Rt["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${Rt["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${Rt.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${Rt.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${Rt["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${Rt["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function Pg(e) {
  const t = dt({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: n,
    transKey: s
    // extracting `classes` from `other`
  } = t, a = gt(t, Sg), i = wg(t), l = jt();
  if (n)
    return /* @__PURE__ */ b.jsx("div", {
      className: V(i.root, r),
      children: o
    });
  const d = {
    exit: i.exit,
    enterActive: i.enterActive,
    enter: i.enter,
    exitActive: i.exitActive
  };
  return /* @__PURE__ */ b.jsx(kg, {
    className: V(i.root, r),
    childFactory: (u) => /* @__PURE__ */ c.cloneElement(u, {
      classNames: d
    }),
    role: "presentation",
    children: /* @__PURE__ */ b.jsx(rc, Se({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: l.transitions.duration.complex,
      classNames: d
    }, a, {
      children: o
    }), s)
  });
}
const Mg = (e) => ee("MuiDayCalendar", e);
J("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const Tg = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], Rg = ["ownerState"], $g = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  }, Mg, t);
}, wl = (Co + Wo * 2) * 6, Ig = O("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Dg = O("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (e, t) => t.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), Ag = O(pt, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (e, t) => t.weekDayLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.secondary
})), Eg = O(pt, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (e, t) => t.weekNumberLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: e.palette.text.disabled
})), Bg = O(pt, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (e, t) => t.weekNumber
})(({
  theme: e
}) => Se({}, e.typography.caption, {
  width: Co,
  height: Co,
  padding: 0,
  margin: `0 ${Wo}px`,
  color: e.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), Og = O("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (e, t) => t.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: wl
}), Lg = O(Pg, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (e, t) => t.slideTransition
})({
  minHeight: wl
}), Ng = O("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (e, t) => t.monthContainer
})({
  overflow: "hidden"
}), zg = O("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (e, t) => t.weekContainer
})({
  margin: `${Wo}px 0`,
  display: "flex",
  justifyContent: "center"
});
function Fg(e) {
  let {
    parentProps: t,
    day: o,
    focusableDay: r,
    selectedDays: n,
    isDateDisabled: s,
    currentMonthNumber: a,
    isViewFocused: i
  } = e, l = gt(e, Tg);
  const {
    disabled: d,
    disableHighlightToday: u,
    isMonthSwitchingAnimating: m,
    showDaysOutsideCurrentMonth: h,
    slots: f,
    slotProps: g,
    timezone: v
  } = t, y = kt(), S = un(v), w = r !== null && y.isSameDay(o, r), C = n.some((p) => y.isSameDay(p, o)), x = y.isSameDay(o, S), P = f?.day ?? Uh, k = xt({
    elementType: P,
    externalSlotProps: g?.day,
    additionalProps: Se({
      disableHighlightToday: u,
      showDaysOutsideCurrentMonth: h,
      role: "gridcell",
      isAnimating: m,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": y.toJsDate(o).valueOf()
    }, l),
    ownerState: Se({}, t, {
      day: o,
      selected: C
    })
  }), E = gt(k, Rg), M = c.useMemo(() => d || s(o), [d, s, o]), R = c.useMemo(() => y.getMonth(o) !== a, [y, o, a]), $ = c.useMemo(() => {
    const p = y.startOfMonth(y.setMonth(o, a));
    return h ? y.isSameDay(o, y.startOfWeek(p)) : y.isSameDay(o, p);
  }, [a, o, h, y]), B = c.useMemo(() => {
    const p = y.endOfMonth(y.setMonth(o, a));
    return h ? y.isSameDay(o, y.endOfWeek(p)) : y.isSameDay(o, p);
  }, [a, o, h, y]);
  return /* @__PURE__ */ b.jsx(P, Se({}, E, {
    day: o,
    disabled: M,
    autoFocus: i && w,
    today: x,
    outsideCurrentMonth: R,
    isFirstVisibleCell: $,
    isLastVisibleCell: B,
    selected: C,
    tabIndex: w ? 0 : -1,
    "aria-selected": C,
    "aria-current": x ? "date" : void 0
  }));
}
function jg(e) {
  const t = dt({
    props: e,
    name: "MuiDayCalendar"
  }), o = kt(), {
    onFocusedDayChange: r,
    className: n,
    currentMonth: s,
    selectedDays: a,
    focusedDay: i,
    loading: l,
    onSelectedDaysChange: d,
    onMonthSwitchingAnimationEnd: u,
    readOnly: m,
    reduceAnimations: h,
    renderLoading: f = () => /* @__PURE__ */ b.jsx("span", {
      children: "..."
    }),
    slideDirection: g,
    TransitionProps: v,
    disablePast: y,
    disableFuture: S,
    minDate: w,
    maxDate: C,
    shouldDisableDate: x,
    shouldDisableMonth: P,
    shouldDisableYear: k,
    dayOfWeekFormatter: E = (X) => o.format(X, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus: M,
    onFocusedViewChange: R,
    gridLabelId: $,
    displayWeekNumber: B,
    fixedWeekNumber: p,
    autoFocus: T,
    timezone: I
  } = t, A = un(I), D = $g(t), W = qt(), q = Cl({
    shouldDisableDate: x,
    shouldDisableMonth: P,
    shouldDisableYear: k,
    minDate: w,
    maxDate: C,
    disablePast: y,
    disableFuture: S,
    timezone: I
  }), U = tl(), [se, _] = wt({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: M,
    default: T ?? !1
  }), [re, ge] = c.useState(() => i || A), Pe = Me((X) => {
    m || d(X);
  }), oe = (X) => {
    q(X) || (r(X), ge(X), R?.(!0), _(!0));
  }, Y = Me((X, G) => {
    switch (X.key) {
      case "ArrowUp":
        oe(o.addDays(G, -7)), X.preventDefault();
        break;
      case "ArrowDown":
        oe(o.addDays(G, 7)), X.preventDefault();
        break;
      case "ArrowLeft": {
        const K = o.addDays(G, W ? 1 : -1), j = o.addMonths(G, W ? 1 : -1), Te = ar({
          utils: o,
          date: K,
          minDate: W ? K : o.startOfMonth(j),
          maxDate: W ? o.endOfMonth(j) : K,
          isDateDisabled: q,
          timezone: I
        });
        oe(Te || K), X.preventDefault();
        break;
      }
      case "ArrowRight": {
        const K = o.addDays(G, W ? -1 : 1), j = o.addMonths(G, W ? -1 : 1), Te = ar({
          utils: o,
          date: K,
          minDate: W ? o.startOfMonth(j) : K,
          maxDate: W ? K : o.endOfMonth(j),
          isDateDisabled: q,
          timezone: I
        });
        oe(Te || K), X.preventDefault();
        break;
      }
      case "Home":
        oe(o.startOfWeek(G)), X.preventDefault();
        break;
      case "End":
        oe(o.endOfWeek(G)), X.preventDefault();
        break;
      case "PageUp":
        oe(o.addMonths(G, 1)), X.preventDefault();
        break;
      case "PageDown":
        oe(o.addMonths(G, -1)), X.preventDefault();
        break;
    }
  }), ye = Me((X, G) => oe(G)), Ce = Me((X, G) => {
    se && o.isSameDay(re, G) && R?.(!1);
  }), le = o.getMonth(s), ne = o.getYear(s), fe = c.useMemo(() => a.filter((X) => !!X).map((X) => o.startOfDay(X)), [o, a]), Q = `${ne}-${le}`, xe = c.useMemo(() => /* @__PURE__ */ c.createRef(), [Q]), H = c.useMemo(() => {
    const X = o.startOfMonth(s), G = o.endOfMonth(s);
    return q(re) || o.isAfterDay(re, G) || o.isBeforeDay(re, X) ? ar({
      utils: o,
      date: re,
      minDate: X,
      maxDate: G,
      disablePast: y,
      disableFuture: S,
      isDateDisabled: q,
      timezone: I
    }) : re;
  }, [s, S, y, re, q, o, I]), ue = c.useMemo(() => {
    const X = o.getWeekArray(s);
    let G = o.addMonths(s, 1);
    for (; p && X.length < p; ) {
      const K = o.getWeekArray(G), j = o.isSameDay(X[X.length - 1][0], K[0][0]);
      K.slice(j ? 1 : 0).forEach((Te) => {
        X.length < p && X.push(Te);
      }), G = o.addMonths(G, 1);
    }
    return X;
  }, [s, p, o]);
  return /* @__PURE__ */ b.jsxs(Ig, {
    role: "grid",
    "aria-labelledby": $,
    className: D.root,
    children: [/* @__PURE__ */ b.jsxs(Dg, {
      role: "row",
      className: D.header,
      children: [B && /* @__PURE__ */ b.jsx(Eg, {
        variant: "caption",
        role: "columnheader",
        "aria-label": U.calendarWeekNumberHeaderLabel,
        className: D.weekNumberLabel,
        children: U.calendarWeekNumberHeaderText
      }), Vf(o, A).map((X, G) => /* @__PURE__ */ b.jsx(Ag, {
        variant: "caption",
        role: "columnheader",
        "aria-label": o.format(X, "weekday"),
        className: D.weekDayLabel,
        children: E(X)
      }, G.toString()))]
    }), l ? /* @__PURE__ */ b.jsx(Og, {
      className: D.loadingContainer,
      children: f()
    }) : /* @__PURE__ */ b.jsx(Lg, Se({
      transKey: Q,
      onExited: u,
      reduceAnimations: h,
      slideDirection: g,
      className: V(n, D.slideTransition)
    }, v, {
      nodeRef: xe,
      children: /* @__PURE__ */ b.jsx(Ng, {
        ref: xe,
        role: "rowgroup",
        className: D.monthContainer,
        children: ue.map((X, G) => /* @__PURE__ */ b.jsxs(zg, {
          role: "row",
          className: D.weekContainer,
          "aria-rowindex": G + 1,
          children: [B && /* @__PURE__ */ b.jsx(Bg, {
            className: D.weekNumber,
            role: "rowheader",
            "aria-label": U.calendarWeekNumberAriaLabelText(o.getWeekNumber(X[0])),
            children: U.calendarWeekNumberText(o.getWeekNumber(X[0]))
          }), X.map((K, j) => /* @__PURE__ */ b.jsx(Fg, {
            parentProps: t,
            day: K,
            selectedDays: fe,
            focusableDay: H,
            onKeyDown: Y,
            onFocus: ye,
            onBlur: Ce,
            onDaySelect: Pe,
            isDateDisabled: q,
            currentMonthNumber: le,
            isViewFocused: se,
            "aria-colindex": j + 1
          }, K.toString()))]
        }, `week-${X[0]}`))
      })
    }))]
  });
}
function Wg(e) {
  return ee("MuiPickersMonth", e);
}
const Pr = J("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), Vg = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow", "slots", "slotProps"], Hg = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return te({
    root: ["root"],
    monthButton: ["monthButton", t && "disabled", o && "selected"]
  }, Wg, r);
}, Ug = O("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      monthsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
}), _g = O("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (e, t) => [t.monthButton, {
    [`&.${Pr.disabled}`]: t.disabled
  }, {
    [`&.${Pr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => Se({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${Pr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${Pr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), Gg = /* @__PURE__ */ c.memo(function(t) {
  const o = dt({
    props: t,
    name: "MuiPickersMonth"
  }), {
    autoFocus: r,
    className: n,
    children: s,
    disabled: a,
    selected: i,
    value: l,
    tabIndex: d,
    onClick: u,
    onKeyDown: m,
    onFocus: h,
    onBlur: f,
    "aria-current": g,
    "aria-label": v,
    slots: y,
    slotProps: S
  } = o, w = gt(o, Vg), C = c.useRef(null), x = Hg(o);
  bt(() => {
    r && C.current?.focus();
  }, [r]);
  const P = y?.monthButton ?? _g, k = xt({
    elementType: P,
    externalSlotProps: S?.monthButton,
    additionalProps: {
      children: s,
      disabled: a,
      tabIndex: d,
      ref: C,
      type: "button",
      role: "radio",
      "aria-current": g,
      "aria-checked": i,
      "aria-label": v,
      onClick: (E) => u(E, l),
      onKeyDown: (E) => m(E, l),
      onFocus: (E) => h(E, l),
      onBlur: (E) => f(E, l)
    },
    ownerState: o,
    className: x.monthButton
  });
  return /* @__PURE__ */ b.jsx(Ug, Se({
    className: V(x.root, n),
    ownerState: o
  }, w, {
    children: /* @__PURE__ */ b.jsx(P, Se({}, k))
  }));
});
function Kg(e) {
  return ee("MuiMonthCalendar", e);
}
J("MuiMonthCalendar", ["root"]);
const Yg = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], qg = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, Kg, t);
};
function Xg(e, t) {
  const o = kt(), r = Cs(), n = dt({
    props: e,
    name: t
  });
  return Se({
    disableFuture: !1,
    disablePast: !1
  }, n, {
    minDate: io(o, n.minDate, r.minDate),
    maxDate: io(o, n.maxDate, r.maxDate)
  });
}
const Qg = O("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: ks,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), Zg = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = Xg(t, "MuiMonthCalendar"), {
    className: n,
    value: s,
    defaultValue: a,
    referenceDate: i,
    disabled: l,
    disableFuture: d,
    disablePast: u,
    maxDate: m,
    minDate: h,
    onChange: f,
    shouldDisableMonth: g,
    readOnly: v,
    autoFocus: y = !1,
    onMonthFocus: S,
    hasFocus: w,
    onFocusedViewChange: C,
    monthsPerRow: x = 3,
    timezone: P,
    gridLabelId: k,
    slots: E,
    slotProps: M
  } = r, R = gt(r, Yg), {
    value: $,
    handleValueChange: B,
    timezone: p
  } = Ps({
    name: "MonthCalendar",
    timezone: P,
    value: s,
    defaultValue: a,
    referenceDate: i,
    onChange: f,
    valueManager: So
  }), T = un(p), I = qt(), A = kt(), D = c.useMemo(
    () => So.getInitialReferenceValue({
      value: $,
      utils: A,
      props: r,
      timezone: p,
      referenceDate: i,
      granularity: eo.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), W = r, q = qg(W), U = c.useMemo(() => A.getMonth(T), [A, T]), se = c.useMemo(() => $ != null ? A.getMonth($) : null, [$, A]), [_, re] = c.useState(() => se || A.getMonth(D)), [ge, Pe] = wt({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: w,
    default: y ?? !1
  }), oe = Me((Q) => {
    Pe(Q), C && C(Q);
  }), Y = c.useCallback((Q) => {
    const xe = A.startOfMonth(u && A.isAfter(T, h) ? T : h), H = A.startOfMonth(d && A.isBefore(T, m) ? T : m), ue = A.startOfMonth(Q);
    return A.isBefore(ue, xe) || A.isAfter(ue, H) ? !0 : g ? g(ue) : !1;
  }, [d, u, m, h, T, g, A]), ye = Me((Q, xe) => {
    if (v)
      return;
    const H = A.setMonth($ ?? D, xe);
    B(H);
  }), Ce = Me((Q) => {
    Y(A.setMonth($ ?? D, Q)) || (re(Q), oe(!0), S && S(Q));
  });
  c.useEffect(() => {
    re((Q) => se !== null && Q !== se ? se : Q);
  }, [se]);
  const le = Me((Q, xe) => {
    switch (Q.key) {
      case "ArrowUp":
        Ce((12 + xe - 3) % 12), Q.preventDefault();
        break;
      case "ArrowDown":
        Ce((12 + xe + 3) % 12), Q.preventDefault();
        break;
      case "ArrowLeft":
        Ce((12 + xe + (I ? 1 : -1)) % 12), Q.preventDefault();
        break;
      case "ArrowRight":
        Ce((12 + xe + (I ? -1 : 1)) % 12), Q.preventDefault();
        break;
    }
  }), ne = Me((Q, xe) => {
    Ce(xe);
  }), fe = Me((Q, xe) => {
    _ === xe && oe(!1);
  });
  return /* @__PURE__ */ b.jsx(Qg, Se({
    ref: o,
    className: V(q.root, n),
    ownerState: W,
    role: "radiogroup",
    "aria-labelledby": k
  }, R, {
    children: Wf(A, $ ?? D).map((Q) => {
      const xe = A.getMonth(Q), H = A.format(Q, "monthShort"), ue = A.format(Q, "month"), X = xe === se, G = l || Y(Q);
      return /* @__PURE__ */ b.jsx(Gg, {
        selected: X,
        value: xe,
        onClick: ye,
        onKeyDown: le,
        autoFocus: ge && xe === _,
        disabled: G,
        tabIndex: xe === _ && !G ? 0 : -1,
        onFocus: ne,
        onBlur: fe,
        "aria-current": U === xe ? "date" : void 0,
        "aria-label": ue,
        monthsPerRow: x,
        slots: E,
        slotProps: M,
        children: H
      }, H);
    })
  }));
});
function Jg(e) {
  return ee("MuiPickersYear", e);
}
const Mr = J("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), ey = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow", "slots", "slotProps"], ty = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return te({
    root: ["root"],
    yearButton: ["yearButton", t && "disabled", o && "selected"]
  }, Jg, r);
}, oy = O("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      yearsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
}), ry = O("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (e, t) => [t.yearButton, {
    [`&.${Mr.disabled}`]: t.disabled
  }, {
    [`&.${Mr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => Se({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : zt(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : zt(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${Mr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${Mr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), ny = /* @__PURE__ */ c.memo(function(t) {
  const o = dt({
    props: t,
    name: "MuiPickersYear"
  }), {
    autoFocus: r,
    className: n,
    children: s,
    disabled: a,
    selected: i,
    value: l,
    tabIndex: d,
    onClick: u,
    onKeyDown: m,
    onFocus: h,
    onBlur: f,
    "aria-current": g,
    slots: v,
    slotProps: y
  } = o, S = gt(o, ey), w = c.useRef(null), C = ty(o);
  bt(() => {
    r && w.current?.focus();
  }, [r]);
  const x = v?.yearButton ?? ry, P = xt({
    elementType: x,
    externalSlotProps: y?.yearButton,
    additionalProps: {
      children: s,
      disabled: a,
      tabIndex: d,
      ref: w,
      type: "button",
      role: "radio",
      "aria-current": g,
      "aria-checked": i,
      onClick: (k) => u(k, l),
      onKeyDown: (k) => m(k, l),
      onFocus: (k) => h(k, l),
      onBlur: (k) => f(k, l)
    },
    ownerState: o,
    className: C.yearButton
  });
  return /* @__PURE__ */ b.jsx(oy, Se({
    className: V(C.root, n),
    ownerState: o
  }, S, {
    children: /* @__PURE__ */ b.jsx(x, Se({}, P))
  }));
});
function sy(e) {
  return ee("MuiYearCalendar", e);
}
J("MuiYearCalendar", ["root"]);
const ay = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"], iy = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, sy, t);
};
function ly(e, t) {
  const o = kt(), r = Cs(), n = dt({
    props: e,
    name: t
  });
  return Se({
    disablePast: !1,
    disableFuture: !1
  }, n, {
    yearsPerRow: n.yearsPerRow ?? 3,
    minDate: io(o, n.minDate, r.minDate),
    maxDate: io(o, n.maxDate, r.maxDate)
  });
}
const cy = O("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: ks,
  maxHeight: Nf,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), dy = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = ly(t, "MuiYearCalendar"), {
    autoFocus: n,
    className: s,
    value: a,
    defaultValue: i,
    referenceDate: l,
    disabled: d,
    disableFuture: u,
    disablePast: m,
    maxDate: h,
    minDate: f,
    onChange: g,
    readOnly: v,
    shouldDisableYear: y,
    onYearFocus: S,
    hasFocus: w,
    onFocusedViewChange: C,
    yearsOrder: x = "asc",
    yearsPerRow: P,
    timezone: k,
    gridLabelId: E,
    slots: M,
    slotProps: R
  } = r, $ = gt(r, ay), {
    value: B,
    handleValueChange: p,
    timezone: T
  } = Ps({
    name: "YearCalendar",
    timezone: k,
    value: a,
    defaultValue: i,
    referenceDate: l,
    onChange: g,
    valueManager: So
  }), I = un(T), A = qt(), D = kt(), W = c.useMemo(
    () => So.getInitialReferenceValue({
      value: B,
      utils: D,
      props: r,
      timezone: T,
      referenceDate: l,
      granularity: eo.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), q = r, U = iy(q), se = c.useMemo(() => D.getYear(I), [D, I]), _ = c.useMemo(() => B != null ? D.getYear(B) : null, [B, D]), [re, ge] = c.useState(() => _ || D.getYear(W)), [Pe, oe] = wt({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: w,
    default: n ?? !1
  }), Y = Me((K) => {
    oe(K), C && C(K);
  }), ye = c.useCallback((K) => {
    if (m && D.isBeforeYear(K, I) || u && D.isAfterYear(K, I) || f && D.isBeforeYear(K, f) || h && D.isAfterYear(K, h))
      return !0;
    if (!y)
      return !1;
    const j = D.startOfYear(K);
    return y(j);
  }, [u, m, h, f, I, y, D]), Ce = Me((K, j) => {
    if (v)
      return;
    const Te = D.setYear(B ?? W, j);
    p(Te);
  }), le = Me((K) => {
    ye(D.setYear(B ?? W, K)) || (ge(K), Y(!0), S?.(K));
  });
  c.useEffect(() => {
    ge((K) => _ !== null && K !== _ ? _ : K);
  }, [_]);
  const ne = x !== "desc" ? P * 1 : P * -1, fe = A && x === "asc" || !A && x === "desc" ? -1 : 1, Q = Me((K, j) => {
    switch (K.key) {
      case "ArrowUp":
        le(j - ne), K.preventDefault();
        break;
      case "ArrowDown":
        le(j + ne), K.preventDefault();
        break;
      case "ArrowLeft":
        le(j - fe), K.preventDefault();
        break;
      case "ArrowRight":
        le(j + fe), K.preventDefault();
        break;
    }
  }), xe = Me((K, j) => {
    le(j);
  }), H = Me((K, j) => {
    re === j && Y(!1);
  }), ue = c.useRef(null), X = Xe(o, ue);
  c.useEffect(() => {
    if (n || ue.current === null)
      return;
    const K = ue.current.querySelector('[tabindex="0"]');
    if (!K)
      return;
    const j = K.offsetHeight, Te = K.offsetTop, ce = ue.current.clientHeight, ae = ue.current.scrollTop, Ke = Te + j;
    j > ce || Te < ae || (ue.current.scrollTop = Ke - ce / 2 - j / 2);
  }, [n]);
  const G = D.getYearRange([f, h]);
  return x === "desc" && G.reverse(), /* @__PURE__ */ b.jsx(cy, Se({
    ref: X,
    className: V(U.root, s),
    ownerState: q,
    role: "radiogroup",
    "aria-labelledby": E
  }, $, {
    children: G.map((K) => {
      const j = D.getYear(K), Te = j === _, ce = d || ye(K);
      return /* @__PURE__ */ b.jsx(ny, {
        selected: Te,
        value: j,
        onClick: Ce,
        onKeyDown: Q,
        autoFocus: Pe && j === re,
        disabled: ce,
        tabIndex: j === re && !ce ? 0 : -1,
        onFocus: xe,
        onBlur: H,
        "aria-current": se === j ? "date" : void 0,
        yearsPerRow: P,
        slots: M,
        slotProps: R,
        children: D.format(K, "year")
      }, D.format(K, "year"));
    })
  }));
}), uy = (e) => ee("MuiPickersCalendarHeader", e), py = J("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), fy = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone", "format"], my = ["ownerState"], hy = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, uy, t);
}, gy = O("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
}), yy = O("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (e, t) => t.labelContainer
})(({
  theme: e
}) => Se({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), by = O("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})({
  marginRight: 6
}), vy = O(ws, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (e, t) => t.switchViewButton
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${py.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
}), xy = O(Sf, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (e, t) => t.switchViewIcon
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), Cy = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = tl(), n = kt(), s = dt({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: a,
    slotProps: i,
    currentMonth: l,
    disabled: d,
    disableFuture: u,
    disablePast: m,
    maxDate: h,
    minDate: f,
    onMonthChange: g,
    onViewChange: v,
    view: y,
    reduceAnimations: S,
    views: w,
    labelId: C,
    className: x,
    timezone: P,
    format: k = `${n.formats.month} ${n.formats.year}`
  } = s, E = gt(s, fy), M = s, R = hy(s), $ = a?.switchViewButton ?? vy, B = xt({
    elementType: $,
    externalSlotProps: i?.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": r.calendarViewSwitchingButtonAriaLabel(y)
    },
    ownerState: M,
    className: R.switchViewButton
  }), p = a?.switchViewIcon ?? xy, T = xt({
    elementType: p,
    externalSlotProps: i?.switchViewIcon,
    ownerState: M,
    className: R.switchViewIcon
  }), I = gt(T, my), A = () => g(n.addMonths(l, 1), "left"), D = () => g(n.addMonths(l, -1), "right"), W = Of(l, {
    disableFuture: u,
    maxDate: h,
    timezone: P
  }), q = Lf(l, {
    disablePast: m,
    minDate: f,
    timezone: P
  }), U = () => {
    if (!(w.length === 1 || !v || d))
      if (w.length === 2)
        v(w.find((_) => _ !== y) || w[0]);
      else {
        const _ = w.indexOf(y) !== 0 ? 0 : 1;
        v(w[_]);
      }
  };
  if (w.length === 1 && w[0] === "year")
    return null;
  const se = n.formatByString(l, k);
  return /* @__PURE__ */ b.jsxs(gy, Se({}, E, {
    ownerState: M,
    className: V(R.root, x),
    ref: o,
    children: [/* @__PURE__ */ b.jsxs(yy, {
      role: "presentation",
      onClick: U,
      ownerState: M,
      "aria-live": "polite",
      className: R.labelContainer,
      children: [/* @__PURE__ */ b.jsx(Sl, {
        reduceAnimations: S,
        transKey: se,
        children: /* @__PURE__ */ b.jsx(by, {
          id: C,
          ownerState: M,
          className: R.label,
          children: se
        })
      }), w.length > 1 && !d && /* @__PURE__ */ b.jsx($, Se({}, B, {
        children: /* @__PURE__ */ b.jsx(p, Se({}, I))
      }))]
    }), /* @__PURE__ */ b.jsx(pr, {
      in: y === "day",
      appear: !S,
      enter: !S,
      children: /* @__PURE__ */ b.jsx(Af, {
        slots: a,
        slotProps: i,
        onGoToPrevious: D,
        isPreviousDisabled: q,
        previousLabel: r.previousMonth,
        onGoToNext: A,
        isNextDisabled: W,
        nextLabel: r.nextMonth
      })
    })]
  }));
}), Sy = Ai({
  themeId: At
}), wy = "@media (prefers-reduced-motion: reduce)", Oo = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Wa = Oo && Oo[1] ? parseInt(Oo[1], 10) : null, Va = Oo && Oo[2] ? parseInt(Oo[2], 10) : null, ky = Wa && Wa < 10 || Va && Va < 13 || !1, Py = () => Sy(wy, {
  defaultMatches: !1
}) || ky, My = (e) => ee("MuiDateCalendar", e);
J("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const Ty = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"], Ry = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, My, t);
};
function $y(e, t) {
  const o = kt(), r = Cs(), n = Py(), s = dt({
    props: e,
    name: t
  });
  return Se({}, s, {
    loading: s.loading ?? !1,
    disablePast: s.disablePast ?? !1,
    disableFuture: s.disableFuture ?? !1,
    openTo: s.openTo ?? "day",
    views: s.views ?? ["year", "day"],
    reduceAnimations: s.reduceAnimations ?? n,
    renderLoading: s.renderLoading ?? (() => /* @__PURE__ */ b.jsx("span", {
      children: "..."
    })),
    minDate: io(o, s.minDate, r.minDate),
    maxDate: io(o, s.maxDate, r.maxDate)
  });
}
const Iy = O(zf, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  height: nl
}), Dy = O(Sl, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (e, t) => t.viewTransitionContainer
})({}), mC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = kt(), n = Xt(), s = $y(t, "MuiDateCalendar"), {
    autoFocus: a,
    onViewChange: i,
    value: l,
    defaultValue: d,
    referenceDate: u,
    disableFuture: m,
    disablePast: h,
    onChange: f,
    onYearChange: g,
    onMonthChange: v,
    reduceAnimations: y,
    shouldDisableDate: S,
    shouldDisableMonth: w,
    shouldDisableYear: C,
    view: x,
    views: P,
    openTo: k,
    className: E,
    disabled: M,
    readOnly: R,
    minDate: $,
    maxDate: B,
    disableHighlightToday: p,
    focusedView: T,
    onFocusedViewChange: I,
    showDaysOutsideCurrentMonth: A,
    fixedWeekNumber: D,
    dayOfWeekFormatter: W,
    slots: q,
    slotProps: U,
    loading: se,
    renderLoading: _,
    displayWeekNumber: re,
    yearsOrder: ge,
    yearsPerRow: Pe,
    monthsPerRow: oe,
    timezone: Y
  } = s, ye = gt(s, Ty), {
    value: Ce,
    handleValueChange: le,
    timezone: ne
  } = Ps({
    name: "DateCalendar",
    timezone: Y,
    value: l,
    defaultValue: d,
    referenceDate: u,
    onChange: f,
    valueManager: So
  }), {
    view: fe,
    setView: Q,
    focusedView: xe,
    setFocusedView: H,
    goToNextView: ue,
    setValueAndGoToNextView: X
  } = Bf({
    view: x,
    views: P,
    openTo: k,
    onChange: le,
    onViewChange: i,
    autoFocus: a,
    focusedView: T,
    onFocusedViewChange: I
  }), {
    referenceDate: G,
    calendarState: K,
    changeFocusedDay: j,
    changeMonth: Te,
    handleChangeMonth: ce,
    isDateDisabled: ae,
    onMonthSwitchingAnimationEnd: Ke
  } = yg({
    value: Ce,
    referenceDate: u,
    reduceAnimations: y,
    onMonthChange: v,
    minDate: $,
    maxDate: B,
    shouldDisableDate: S,
    disablePast: h,
    disableFuture: m,
    timezone: ne
  }), He = M && Ce || $, mt = M && Ce || B, Ie = `${n}-grid-label`, Re = xe !== null, Fe = q?.calendarHeader ?? Cy, Le = xt({
    elementType: Fe,
    externalSlotProps: U?.calendarHeader,
    additionalProps: {
      views: P,
      view: fe,
      currentMonth: K.currentMonth,
      onViewChange: Q,
      onMonthChange: (Z, we) => ce({
        newMonth: Z,
        direction: we
      }),
      minDate: He,
      maxDate: mt,
      disabled: M,
      disablePast: h,
      disableFuture: m,
      reduceAnimations: y,
      timezone: ne,
      labelId: Ie
    },
    ownerState: s
  }), lt = Me((Z) => {
    const we = r.startOfMonth(Z), De = r.endOfMonth(Z), Ye = ae(Z) ? ar({
      utils: r,
      date: Z,
      minDate: r.isBefore($, we) ? we : $,
      maxDate: r.isAfter(B, De) ? De : B,
      disablePast: h,
      disableFuture: m,
      isDateDisabled: ae,
      timezone: ne
    }) : Z;
    Ye ? (X(Ye, "finish"), v?.(we)) : (ue(), Te(we)), j(Ye, !0);
  }), be = Me((Z) => {
    const we = r.startOfYear(Z), De = r.endOfYear(Z), Ye = ae(Z) ? ar({
      utils: r,
      date: Z,
      minDate: r.isBefore($, we) ? we : $,
      maxDate: r.isAfter(B, De) ? De : B,
      disablePast: h,
      disableFuture: m,
      isDateDisabled: ae,
      timezone: ne
    }) : Z;
    Ye ? (X(Ye, "finish"), g?.(Ye)) : (ue(), Te(we)), j(Ye, !0);
  }), Qe = Me((Z) => le(Z && Wr(r, Z, Ce ?? G), "finish", fe));
  c.useEffect(() => {
    Ce != null && r.isValid(Ce) && Te(Ce);
  }, [Ce]);
  const Ze = s, st = Ry(Ze), $e = {
    disablePast: h,
    disableFuture: m,
    maxDate: B,
    minDate: $
  }, Je = {
    disableHighlightToday: p,
    readOnly: R,
    disabled: M,
    timezone: ne,
    gridLabelId: Ie,
    slots: q,
    slotProps: U
  }, Mt = c.useRef(fe);
  c.useEffect(() => {
    Mt.current !== fe && (xe === Mt.current && H(fe, !0), Mt.current = fe);
  }, [xe, H, fe]);
  const it = c.useMemo(() => [Ce], [Ce]);
  return /* @__PURE__ */ b.jsxs(Iy, Se({
    ref: o,
    className: V(st.root, E),
    ownerState: Ze
  }, ye, {
    children: [/* @__PURE__ */ b.jsx(Fe, Se({}, Le, {
      slots: q,
      slotProps: U
    })), /* @__PURE__ */ b.jsx(Dy, {
      reduceAnimations: y,
      className: st.viewTransitionContainer,
      transKey: fe,
      ownerState: Ze,
      children: /* @__PURE__ */ b.jsxs("div", {
        children: [fe === "year" && /* @__PURE__ */ b.jsx(dy, Se({}, $e, Je, {
          value: Ce,
          onChange: be,
          shouldDisableYear: C,
          hasFocus: Re,
          onFocusedViewChange: (Z) => H("year", Z),
          yearsOrder: ge,
          yearsPerRow: Pe,
          referenceDate: G
        })), fe === "month" && /* @__PURE__ */ b.jsx(Zg, Se({}, $e, Je, {
          hasFocus: Re,
          className: E,
          value: Ce,
          onChange: lt,
          shouldDisableMonth: w,
          onFocusedViewChange: (Z) => H("month", Z),
          monthsPerRow: oe,
          referenceDate: G
        })), fe === "day" && /* @__PURE__ */ b.jsx(jg, Se({}, K, $e, Je, {
          onMonthSwitchingAnimationEnd: Ke,
          onFocusedDayChange: j,
          reduceAnimations: y,
          selectedDays: it,
          onSelectedDaysChange: Qe,
          shouldDisableDate: S,
          shouldDisableMonth: w,
          shouldDisableYear: C,
          hasFocus: Re,
          onFocusedViewChange: (Z) => H("day", Z),
          showDaysOutsideCurrentMonth: A,
          fixedWeekNumber: D,
          dayOfWeekFormatter: W,
          displayWeekNumber: re,
          loading: se,
          renderLoading: _
        }))]
      })
    })]
  }));
});
function Ay(e) {
  return ee("MuiSkeleton", e);
}
J("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const Ey = (e) => {
  const {
    classes: t,
    variant: o,
    animation: r,
    hasChildren: n,
    width: s,
    height: a
  } = e;
  return te({
    root: ["root", o, r, n && "withChildren", n && !s && "fitContent", n && !a && "heightAuto"]
  }, Ay, t);
}, qn = Yt`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Xn = Yt`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, By = typeof qn != "string" ? lo`
        animation: ${qn} 2s ease-in-out 0.5s infinite;
      ` : null, Oy = typeof Xn != "string" ? lo`
        &::after {
          animation: ${Xn} 2s linear 0.5s infinite;
        }
      ` : null, Ly = O("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.animation !== !1 && t[o.animation], o.hasChildren && t.withChildren, o.hasChildren && !o.width && t.fitContent, o.hasChildren && !o.height && t.heightAuto];
  }
})(me(({
  theme: e
}) => {
  const t = Pp(e.shape.borderRadius) || "px", o = Mp(e.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : e.alpha(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${o}${t}/${Math.round(o / 0.6 * 10) / 10}${t}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (e.vars || e).shape.borderRadius
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren && !r.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren && !r.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: By || {
        animation: `${qn} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: Oy || {
        "&::after": {
          animation: `${Xn} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), Ny = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: n = "pulse",
    className: s,
    component: a = "span",
    height: i,
    style: l,
    variant: d = "text",
    width: u,
    ...m
  } = r, h = {
    ...r,
    animation: n,
    component: a,
    variant: d,
    hasChildren: !!m.children
  }, f = Ey(h);
  return /* @__PURE__ */ b.jsx(Ly, {
    as: a,
    ref: o,
    className: V(f.root, s),
    ownerState: h,
    ...m,
    style: {
      width: u,
      height: i,
      ...l
    }
  });
}), zy = (e) => ee("MuiDayCalendarSkeleton", e);
J("MuiDayCalendarSkeleton", ["root", "week", "daySkeleton"]);
const Fy = ["className"], jy = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    week: ["week"],
    daySkeleton: ["daySkeleton"]
  }, zy, t);
}, Wy = O("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  alignSelf: "start"
}), Vy = O("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Week",
  overridesResolver: (e, t) => t.week
})({
  margin: `${Wo}px 0`,
  display: "flex",
  justifyContent: "center"
}), Hy = O(Ny, {
  name: "MuiDayCalendarSkeleton",
  slot: "DaySkeleton",
  overridesResolver: (e, t) => t.daySkeleton
})({
  margin: `0 ${Wo}px`,
  variants: [{
    props: {
      day: 0
    },
    style: {
      visibility: "hidden"
    }
  }]
}), Uy = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
function hC(e) {
  const t = dt({
    props: e,
    name: "MuiDayCalendarSkeleton"
  }), {
    className: o
  } = t, r = gt(t, Fy), n = jy(r);
  return /* @__PURE__ */ b.jsx(Wy, Se({
    className: V(n.root, o)
  }, r, {
    children: Uy.map((s, a) => /* @__PURE__ */ b.jsx(Vy, {
      className: n.week,
      children: s.map((i, l) => /* @__PURE__ */ b.jsx(Hy, {
        variant: "circular",
        width: Co,
        height: Co,
        className: n.daySkeleton,
        ownerState: {
          day: i
        }
      }, l))
    }, a))
  }));
}
function _y(e) {
  return ee("MuiPopper", e);
}
J("MuiPopper", ["root"]);
function Gy(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Qn(e) {
  return typeof e == "function" ? e() : e;
}
function Ky(e) {
  return e.nodeType !== void 0;
}
const Yy = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, _y, t);
}, qy = {}, Xy = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: n,
    direction: s,
    disablePortal: a,
    modifiers: i,
    open: l,
    placement: d,
    popperOptions: u,
    popperRef: m,
    slotProps: h = {},
    slots: f = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: v,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, S = c.useRef(null), w = Xe(S, o), C = c.useRef(null), x = Xe(C, m), P = c.useRef(x);
  bt(() => {
    P.current = x;
  }, [x]), c.useImperativeHandle(m, () => C.current, []);
  const k = Gy(d, s), [E, M] = c.useState(k), [R, $] = c.useState(Qn(r));
  c.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), c.useEffect(() => {
    r && $(Qn(r));
  }, [r]), bt(() => {
    if (!R || !l)
      return;
    const A = (q) => {
      M(q.placement);
    };
    let D = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: q
      }) => {
        A(q);
      }
    }];
    i != null && (D = D.concat(i)), u && u.modifiers != null && (D = D.concat(u.modifiers));
    const W = nc(R, S.current, {
      placement: k,
      ...u,
      modifiers: D
    });
    return P.current(W), () => {
      W.destroy(), P.current(null);
    };
  }, [R, a, i, l, u, k]);
  const B = {
    placement: E
  };
  g !== null && (B.TransitionProps = g);
  const p = Yy(t), T = f.root ?? "div", I = xt({
    elementType: T,
    externalSlotProps: h.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: p.root
  });
  return /* @__PURE__ */ b.jsx(T, {
    ...I,
    children: typeof n == "function" ? n(B) : n
  });
}), Qy = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: n,
    container: s,
    direction: a = "ltr",
    disablePortal: i = !1,
    keepMounted: l = !1,
    modifiers: d,
    open: u,
    placement: m = "bottom",
    popperOptions: h = qy,
    popperRef: f,
    style: g,
    transition: v = !1,
    slotProps: y = {},
    slots: S = {},
    ...w
  } = t, [C, x] = c.useState(!0), P = () => {
    x(!1);
  }, k = () => {
    x(!0);
  };
  if (!l && !u && (!v || C))
    return null;
  let E;
  if (s)
    E = s;
  else if (r) {
    const $ = Qn(r);
    E = $ && Ky($) ? yt($).body : yt(null).body;
  }
  const M = !u && l && (!v || C) ? "none" : void 0, R = v ? {
    in: u,
    onEnter: P,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ b.jsx(cl, {
    disablePortal: i,
    container: E,
    children: /* @__PURE__ */ b.jsx(Xy, {
      anchorEl: r,
      direction: a,
      disablePortal: i,
      modifiers: d,
      ref: o,
      open: v ? !C : u,
      placement: m,
      popperOptions: h,
      popperRef: f,
      slotProps: y,
      slots: S,
      ...w,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: M,
        ...g
      },
      TransitionProps: R,
      children: n
    })
  });
}), Zy = O(Qy, {
  name: "MuiPopper",
  slot: "Root"
})({}), kl = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = qt(), n = he({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: i,
    componentsProps: l,
    container: d,
    disablePortal: u,
    keepMounted: m,
    modifiers: h,
    open: f,
    placement: g,
    popperOptions: v,
    popperRef: y,
    transition: S,
    slots: w,
    slotProps: C,
    ...x
  } = n, P = w?.root ?? i?.Root, k = {
    anchorEl: s,
    container: d,
    disablePortal: u,
    keepMounted: m,
    modifiers: h,
    open: f,
    placement: g,
    popperOptions: v,
    popperRef: y,
    transition: S,
    ...x
  };
  return /* @__PURE__ */ b.jsx(Zy, {
    as: a,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: P
    },
    slotProps: C ?? l,
    ...k,
    ref: o
  });
});
function Jy(e) {
  return ee("MuiButton", e);
}
const go = J("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), eb = /* @__PURE__ */ c.createContext({}), tb = /* @__PURE__ */ c.createContext(void 0), ob = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: n,
    variant: s,
    loading: a,
    loadingPosition: i,
    classes: l
  } = e, d = {
    root: ["root", a && "loading", s, `${s}${L(t)}`, `size${L(n)}`, `${s}Size${L(n)}`, `color${L(t)}`, o && "disableElevation", r && "fullWidth", a && `loadingPosition${L(i)}`],
    startIcon: ["icon", "startIcon", `iconSize${L(n)}`],
    endIcon: ["icon", "endIcon", `iconSize${L(n)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, u = te(d, Jy, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, Pl = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], rb = O(Et, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${L(o.color)}`], t[`size${L(o.size)}`], t[`${o.variant}Size${L(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${go.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${go.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${go.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${go.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(je()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${go.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${go.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${go.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), nb = O("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${L(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Pl]
})), sb = O("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${L(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Pl]
})), ab = O("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Ha = O("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), gC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = c.useContext(eb), n = c.useContext(tb), s = Lo(r, t), a = he({
    props: s,
    name: "MuiButton"
  }), {
    children: i,
    color: l = "primary",
    component: d = "button",
    className: u,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: f = !1,
    endIcon: g,
    focusVisibleClassName: v,
    fullWidth: y = !1,
    id: S,
    loading: w = null,
    loadingIndicator: C,
    loadingPosition: x = "center",
    size: P = "medium",
    startIcon: k,
    type: E,
    variant: M = "text",
    ...R
  } = a, $ = Xt(S), B = C ?? /* @__PURE__ */ b.jsx(rl, {
    "aria-labelledby": $,
    color: "inherit",
    size: 16
  }), p = {
    ...a,
    color: l,
    component: d,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: f,
    fullWidth: y,
    loading: w,
    loadingIndicator: B,
    loadingPosition: x,
    size: P,
    type: E,
    variant: M
  }, T = ob(p), I = (k || w && x === "start") && /* @__PURE__ */ b.jsx(nb, {
    className: T.startIcon,
    ownerState: p,
    children: k || /* @__PURE__ */ b.jsx(Ha, {
      className: T.loadingIconPlaceholder,
      ownerState: p
    })
  }), A = (g || w && x === "end") && /* @__PURE__ */ b.jsx(sb, {
    className: T.endIcon,
    ownerState: p,
    children: g || /* @__PURE__ */ b.jsx(Ha, {
      className: T.loadingIconPlaceholder,
      ownerState: p
    })
  }), D = n || "", W = typeof w == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ b.jsx("span", {
      className: T.loadingWrapper,
      style: {
        display: "contents"
      },
      children: w && /* @__PURE__ */ b.jsx(ab, {
        className: T.loadingIndicator,
        ownerState: p,
        children: B
      })
    })
  ) : null;
  return /* @__PURE__ */ b.jsxs(rb, {
    ownerState: p,
    className: V(r.className, T.root, u, D),
    component: d,
    disabled: m || w,
    focusRipple: !f,
    focusVisibleClassName: V(T.focusVisible, v),
    ref: o,
    type: E,
    id: w ? $ : S,
    ...R,
    classes: T,
    children: [I, x !== "end" && W, i, x === "end" && W, A]
  });
});
function ib(e) {
  return ee("MuiDialogActions", e);
}
J("MuiDialogActions", ["root", "spacing"]);
const lb = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return te({
    root: ["root", !o && "spacing"]
  }, ib, t);
}, cb = O("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), yC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: n,
    disableSpacing: s = !1,
    ...a
  } = r, i = {
    ...r,
    disableSpacing: s
  }, l = lb(i);
  return /* @__PURE__ */ b.jsx(cb, {
    className: V(l.root, n),
    ownerState: i,
    ref: o,
    ...a
  });
}), db = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function ub(e) {
  return ee("MuiChip", e);
}
const Ee = J("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), pb = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: n,
    iconColor: s,
    onDelete: a,
    clickable: i,
    variant: l
  } = e, d = {
    root: ["root", l, o && "disabled", `size${L(r)}`, `color${L(n)}`, i && "clickable", i && `clickableColor${L(n)}`, a && "deletable", a && `deletableColor${L(n)}`, `${l}${L(n)}`],
    label: ["label", `label${L(r)}`],
    avatar: ["avatar", `avatar${L(r)}`, `avatarColor${L(n)}`],
    icon: ["icon", `icon${L(r)}`, `iconColor${L(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${L(r)}`, `deleteIconColor${L(n)}`, `deleteIcon${L(l)}Color${L(n)}`]
  };
  return te(d, ub, t);
}, fb = O("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: n,
      clickable: s,
      onDelete: a,
      size: i,
      variant: l
    } = o;
    return [{
      [`& .${Ee.avatar}`]: t.avatar
    }, {
      [`& .${Ee.avatar}`]: t[`avatar${L(i)}`]
    }, {
      [`& .${Ee.avatar}`]: t[`avatarColor${L(r)}`]
    }, {
      [`& .${Ee.icon}`]: t.icon
    }, {
      [`& .${Ee.icon}`]: t[`icon${L(i)}`]
    }, {
      [`& .${Ee.icon}`]: t[`iconColor${L(n)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIcon${L(i)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIconColor${L(r)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIcon${L(l)}Color${L(r)}`]
    }, t.root, t[`size${L(i)}`], t[`color${L(r)}`], s && t.clickable, s && r !== "default" && t[`clickableColor${L(r)}`], a && t.deletable, a && r !== "default" && t[`deletableColor${L(r)}`], t[l], t[`${l}${L(r)}`]];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ee.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ee.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ee.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ee.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ee.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ee.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Ee.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.alpha((e.vars || e).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.alpha((e.vars || e).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Ee.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Ee.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(je(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (e.vars || e).palette[o].main,
        color: (e.vars || e).palette[o].contrastText,
        [`& .${Ee.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${Ee.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${Ee.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Ee.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(je(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${Ee.focusVisible}`]: {
          background: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
        },
        [`&.${Ee.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(je(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Ee.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[o].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Ee.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Ee.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Ee.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Ee.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ee.icon}`]: {
          marginLeft: 4
        },
        [`& .${Ee.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Ee.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Ee.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(je()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[o].main, 0.7)}`,
        [`&.${Ee.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Ee.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Ee.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[o].main
          }
        }
      }
    }))]
  };
})), mb = O("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${L(r)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Ua(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const bC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiChip"
  }), {
    avatar: n,
    className: s,
    clickable: a,
    color: i = "default",
    component: l,
    deleteIcon: d,
    disabled: u = !1,
    icon: m,
    label: h,
    onClick: f,
    onDelete: g,
    onKeyDown: v,
    onKeyUp: y,
    size: S = "medium",
    variant: w = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: x = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: P = {},
    slotProps: k = {},
    ...E
  } = r, M = c.useRef(null), R = Xe(M, o), $ = (Y) => {
    Y.stopPropagation(), g(Y);
  }, B = (Y) => {
    Y.currentTarget === Y.target && Ua(Y) && Y.preventDefault(), v && v(Y);
  }, p = (Y) => {
    Y.currentTarget === Y.target && g && Ua(Y) && g(Y), y && y(Y);
  }, T = a !== !1 && f ? !0 : a, I = T || g ? Et : l || "div", A = {
    ...r,
    component: I,
    disabled: u,
    size: S,
    color: i,
    iconColor: /* @__PURE__ */ c.isValidElement(m) && m.props.color || i,
    onDelete: !!g,
    clickable: T,
    variant: w
  }, D = pb(A), W = I === Et ? {
    component: l || "div",
    focusVisibleClassName: D.focusVisible,
    ...g && {
      disableRipple: !0
    }
  } : {};
  let q = null;
  g && (q = d && /* @__PURE__ */ c.isValidElement(d) ? /* @__PURE__ */ c.cloneElement(d, {
    className: V(d.props.className, D.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ b.jsx(db, {
    className: D.deleteIcon,
    onClick: $
  }));
  let U = null;
  n && /* @__PURE__ */ c.isValidElement(n) && (U = /* @__PURE__ */ c.cloneElement(n, {
    className: V(D.avatar, n.props.className)
  }));
  let se = null;
  m && /* @__PURE__ */ c.isValidElement(m) && (se = /* @__PURE__ */ c.cloneElement(m, {
    className: V(D.icon, m.props.className)
  }));
  const _ = {
    slots: P,
    slotProps: k
  }, [re, ge] = de("root", {
    elementType: fb,
    externalForwardedProps: {
      ..._,
      ...E
    },
    ownerState: A,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: R,
    className: V(D.root, s),
    additionalProps: {
      disabled: T && u ? !0 : void 0,
      tabIndex: x && u ? -1 : C,
      ...W
    },
    getSlotProps: (Y) => ({
      ...Y,
      onClick: (ye) => {
        Y.onClick?.(ye), f?.(ye);
      },
      onKeyDown: (ye) => {
        Y.onKeyDown?.(ye), B(ye);
      },
      onKeyUp: (ye) => {
        Y.onKeyUp?.(ye), p(ye);
      }
    })
  }), [Pe, oe] = de("label", {
    elementType: mb,
    externalForwardedProps: _,
    ownerState: A,
    className: D.label
  });
  return /* @__PURE__ */ b.jsxs(re, {
    as: I,
    ...ge,
    children: [U || se, /* @__PURE__ */ b.jsx(Pe, {
      ...oe,
      children: h
    }), q]
  });
});
function hb(e) {
  return ee("MuiDialogContent", e);
}
J("MuiDialogContent", ["root", "dividers"]);
function gb(e) {
  return ee("MuiDialogTitle", e);
}
const yb = J("MuiDialogTitle", ["root"]), bb = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return te({
    root: ["root", o && "dividers"]
  }, hb, t);
}, vb = O("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(me(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${yb.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), vC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: n,
    dividers: s = !1,
    ...a
  } = r, i = {
    ...r,
    dividers: s
  }, l = bb(i);
  return /* @__PURE__ */ b.jsx(vb, {
    className: V(l.root, n),
    ownerState: i,
    ref: o,
    ...a
  });
});
function xb(e) {
  return ee("MuiDialog", e);
}
const Tn = J("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ml = /* @__PURE__ */ c.createContext({}), Cb = O(dl, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Sb = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: n,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${L(o)}`],
    paper: ["paper", `paperScroll${L(o)}`, `paperWidth${L(String(r))}`, n && "paperFullWidth", s && "paperFullScreen"]
  };
  return te(a, xb, t);
}, wb = O(ul, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), kb = O("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${L(o.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), Pb = O(Vo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${L(o.scroll)}`], t[`paperWidth${L(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(me(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${Tn.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${Tn.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${Tn.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), xC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialog"
  }), n = jt(), s = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": i,
    "aria-modal": l = !0,
    BackdropComponent: d,
    BackdropProps: u,
    children: m,
    className: h,
    disableEscapeKeyDown: f = !1,
    fullScreen: g = !1,
    fullWidth: v = !1,
    maxWidth: y = "sm",
    onClick: S,
    onClose: w,
    open: C,
    PaperComponent: x = Vo,
    PaperProps: P = {},
    role: k = "dialog",
    scroll: E = "paper",
    slots: M = {},
    slotProps: R = {},
    TransitionComponent: $ = pr,
    transitionDuration: B = s,
    TransitionProps: p,
    ...T
  } = r, I = {
    ...r,
    disableEscapeKeyDown: f,
    fullScreen: g,
    fullWidth: v,
    maxWidth: y,
    scroll: E
  }, A = Sb(I), D = c.useRef(), W = (H) => {
    D.current = H.target === H.currentTarget;
  }, q = (H) => {
    S && S(H), D.current && (D.current = null, w && w(H, "backdropClick"));
  }, U = Xt(i), se = c.useMemo(() => ({
    titleId: U
  }), [U]), _ = {
    transition: $,
    ...M
  }, re = {
    transition: p,
    paper: P,
    backdrop: u,
    ...R
  }, ge = {
    slots: _,
    slotProps: re
  }, [Pe, oe] = de("root", {
    elementType: wb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ge,
    ownerState: I,
    className: V(A.root, h),
    ref: o
  }), [Y, ye] = de("backdrop", {
    elementType: Cb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ge,
    ownerState: I,
    className: A.backdrop
  }), [Ce, le] = de("paper", {
    elementType: Pb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ge,
    ownerState: I,
    className: V(A.paper, P.className)
  }), [ne, fe] = de("container", {
    elementType: kb,
    externalForwardedProps: ge,
    ownerState: I,
    className: A.container
  }), [Q, xe] = de("transition", {
    elementType: pr,
    externalForwardedProps: ge,
    ownerState: I,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: B,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ b.jsx(Pe, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Y
    },
    slotProps: {
      backdrop: {
        transitionDuration: B,
        as: d,
        ...ye
      }
    },
    disableEscapeKeyDown: f,
    onClose: w,
    open: C,
    onClick: q,
    ...oe,
    ...T,
    children: /* @__PURE__ */ b.jsx(Q, {
      ...xe,
      children: /* @__PURE__ */ b.jsx(ne, {
        onMouseDown: W,
        ...fe,
        children: /* @__PURE__ */ b.jsx(Ce, {
          as: x,
          elevation: 24,
          role: k,
          "aria-describedby": a,
          "aria-labelledby": U,
          "aria-modal": l,
          ...le,
          children: /* @__PURE__ */ b.jsx(Ml.Provider, {
            value: se,
            children: m
          })
        })
      })
    })
  });
});
function Mb(e) {
  return ee("MuiTab", e);
}
const $t = J("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), Tb = (e) => {
  const {
    classes: t,
    textColor: o,
    fullWidth: r,
    wrapped: n,
    icon: s,
    label: a,
    selected: i,
    disabled: l
  } = e, d = {
    root: ["root", s && a && "labelIcon", `textColor${L(o)}`, r && "fullWidth", n && "wrapped", i && "selected", l && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return te(d, Mb, t);
}, Rb = O(Et, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.label && o.icon && t.labelIcon, t[`textColor${L(o.textColor)}`], o.fullWidth && t.fullWidth, o.wrapped && t.wrapped, {
      [`& .${$t.iconWrapper}`]: t.iconWrapper
    }, {
      [`& .${$t.icon}`]: t.icon
    }];
  }
})(me(({
  theme: e
}) => ({
  ...e.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState: t
    }) => t.label && (t.iconPosition === "top" || t.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.label && t.iconPosition !== "top" && t.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.icon && t.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "top",
    style: {
      [`& > .${$t.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "bottom",
    style: {
      [`& > .${$t.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "start",
    style: {
      [`& > .${$t.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: o
    }) => t.icon && t.label && o === "end",
    style: {
      [`& > .${$t.icon}`]: {
        marginLeft: e.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${$t.selected}`]: {
        opacity: 1
      },
      [`&.${$t.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${$t.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${$t.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${$t.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${$t.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.wrapped,
    style: {
      fontSize: e.typography.pxToRem(12)
    }
  }]
}))), CC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTab"
  }), {
    className: n,
    disabled: s = !1,
    disableFocusRipple: a = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: i,
    icon: l,
    iconPosition: d = "top",
    // eslint-disable-next-line react/prop-types
    indicator: u,
    label: m,
    onChange: h,
    onClick: f,
    onFocus: g,
    // eslint-disable-next-line react/prop-types
    selected: v,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: y,
    // eslint-disable-next-line react/prop-types
    textColor: S = "inherit",
    value: w,
    wrapped: C = !1,
    ...x
  } = r, P = {
    ...r,
    disabled: s,
    disableFocusRipple: a,
    selected: v,
    icon: !!l,
    iconPosition: d,
    label: !!m,
    fullWidth: i,
    textColor: S,
    wrapped: C
  }, k = Tb(P), E = l && m && /* @__PURE__ */ c.isValidElement(l) ? /* @__PURE__ */ c.cloneElement(l, {
    className: V(k.icon, l.props.className)
  }) : l, M = ($) => {
    !v && h && h($, w), f && f($);
  }, R = ($) => {
    y && !v && h && h($, w), g && g($);
  };
  return /* @__PURE__ */ b.jsxs(Rb, {
    focusRipple: !a,
    className: V(k.root, n),
    ref: o,
    role: "tab",
    "aria-selected": v,
    disabled: s,
    onClick: M,
    onFocus: R,
    ownerState: P,
    tabIndex: v ? 0 : -1,
    ...x,
    children: [d === "top" || d === "start" ? /* @__PURE__ */ b.jsxs(c.Fragment, {
      children: [E, m]
    }) : /* @__PURE__ */ b.jsxs(c.Fragment, {
      children: [m, E]
    }), u]
  });
});
function $b(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function Ib(e, t, o, r = {}, n = () => {
}) {
  const {
    ease: s = $b,
    duration: a = 300
    // standard
  } = r;
  let i = null;
  const l = t[e];
  let d = !1;
  const u = () => {
    d = !0;
  }, m = (h) => {
    if (d) {
      n(new Error("Animation cancelled"));
      return;
    }
    i === null && (i = h);
    const f = Math.min(1, (h - i) / a);
    if (t[e] = s(f) * (o - l) + l, f >= 1) {
      requestAnimationFrame(() => {
        n(null);
      });
      return;
    }
    requestAnimationFrame(m);
  };
  return l === o ? (n(new Error("Element already at target position")), u) : (requestAnimationFrame(m), u);
}
const Db = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function Ab(e) {
  const {
    onChange: t,
    ...o
  } = e, r = c.useRef(), n = c.useRef(null), s = () => {
    r.current = n.current.offsetHeight - n.current.clientHeight;
  };
  return bt(() => {
    const a = ln(() => {
      const l = r.current;
      s(), l !== r.current && t(r.current);
    }), i = Ft(n.current);
    return i.addEventListener("resize", a), () => {
      a.clear(), i.removeEventListener("resize", a);
    };
  }, [t]), c.useEffect(() => {
    s(), t(r.current);
  }, [t]), /* @__PURE__ */ b.jsx("div", {
    style: Db,
    ...o,
    ref: n
  });
}
const Eb = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), Bb = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function Ob(e) {
  return ee("MuiTabScrollButton", e);
}
const Lb = J("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), Nb = (e) => {
  const {
    classes: t,
    orientation: o,
    disabled: r
  } = e;
  return te({
    root: ["root", o, r && "disabled"]
  }, Ob, t);
}, zb = O(Et, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.orientation && t[o.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${Lb.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
}), Fb = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: n,
    slots: s = {},
    slotProps: a = {},
    direction: i,
    orientation: l,
    disabled: d,
    ...u
  } = r, m = qt(), h = {
    isRtl: m,
    ...r
  }, f = Nb(h), g = s.StartScrollButtonIcon ?? Eb, v = s.EndScrollButtonIcon ?? Bb, y = xt({
    elementType: g,
    externalSlotProps: a.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  }), S = xt({
    elementType: v,
    externalSlotProps: a.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: h
  });
  return /* @__PURE__ */ b.jsx(zb, {
    component: "div",
    className: V(f.root, n),
    ref: o,
    role: null,
    ownerState: h,
    tabIndex: null,
    ...u,
    style: {
      ...u.style,
      ...l === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${m ? -90 : 90}deg)`
      }
    },
    children: i === "left" ? /* @__PURE__ */ b.jsx(g, {
      ...y
    }) : /* @__PURE__ */ b.jsx(v, {
      ...S
    })
  });
});
function jb(e) {
  return ee("MuiTabs", e);
}
const Rn = J("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), _a = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Ga = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Tr = (e, t, o) => {
  let r = !1, n = o(e, t);
  for (; n; ) {
    if (n === e.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const s = n.disabled || n.getAttribute("aria-disabled") === "true";
    if (!n.hasAttribute("tabindex") || s)
      n = o(e, n);
    else {
      n.focus();
      return;
    }
  }
}, Wb = (e) => {
  const {
    vertical: t,
    fixed: o,
    hideScrollbar: r,
    scrollableX: n,
    scrollableY: s,
    centered: a,
    scrollButtonsHideMobile: i,
    classes: l
  } = e;
  return te({
    root: ["root", t && "vertical"],
    scroller: ["scroller", o && "fixed", r && "hideScrollbar", n && "scrollableX", s && "scrollableY"],
    list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", a && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", i && "scrollButtonsHideMobile"],
    scrollableX: [n && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, jb, l);
}, Vb = O("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Rn.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Rn.scrollButtons}`]: o.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, o.vertical && t.vertical];
  }
})(me(({
  theme: e
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.scrollButtonsHideMobile,
    style: {
      [`& .${Rn.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), Hb = O("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.scroller, o.fixed && t.fixed, o.hideScrollbar && t.hideScrollbar, o.scrollableX && t.scrollableX, o.scrollableY && t.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState: e
    }) => e.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
}), Ub = O("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.list, t.flexContainer, o.vertical && t.flexContainerVertical, o.centered && t.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState: e
    }) => e.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.centered,
    style: {
      justifyContent: "center"
    }
  }]
}), _b = O("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(me(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: e.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (e.vars || e).palette.secondary.main
    }
  }, {
    props: ({
      ownerState: t
    }) => t.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
}))), Gb = O(Ab)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Ka = {}, SC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTabs"
  }), n = jt(), s = qt(), {
    "aria-label": a,
    "aria-labelledby": i,
    action: l,
    centered: d = !1,
    children: u,
    className: m,
    component: h = "div",
    allowScrollButtonsMobile: f = !1,
    indicatorColor: g = "primary",
    onChange: v,
    orientation: y = "horizontal",
    ScrollButtonComponent: S,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons: w = "auto",
    selectionFollowsFocus: C,
    slots: x = {},
    slotProps: P = {},
    TabIndicatorProps: k = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps: E = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor: M = "primary",
    value: R,
    variant: $ = "standard",
    visibleScrollbar: B = !1,
    ...p
  } = r, T = $ === "scrollable", I = y === "vertical", A = I ? "scrollTop" : "scrollLeft", D = I ? "top" : "left", W = I ? "bottom" : "right", q = I ? "clientHeight" : "clientWidth", U = I ? "height" : "width", se = {
    ...r,
    component: h,
    allowScrollButtonsMobile: f,
    indicatorColor: g,
    orientation: y,
    vertical: I,
    scrollButtons: w,
    textColor: M,
    variant: $,
    visibleScrollbar: B,
    fixed: !T,
    hideScrollbar: T && !B,
    scrollableX: T && !I,
    scrollableY: T && I,
    centered: d && !T,
    scrollButtonsHideMobile: !f
  }, _ = Wb(se), re = xt({
    elementType: x.StartScrollButtonIcon,
    externalSlotProps: P.startScrollButtonIcon,
    ownerState: se
  }), ge = xt({
    elementType: x.EndScrollButtonIcon,
    externalSlotProps: P.endScrollButtonIcon,
    ownerState: se
  }), [Pe, oe] = c.useState(!1), [Y, ye] = c.useState(Ka), [Ce, le] = c.useState(!1), [ne, fe] = c.useState(!1), [Q, xe] = c.useState(!1), [H, ue] = c.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), X = /* @__PURE__ */ new Map(), G = c.useRef(null), K = c.useRef(null), j = {
    slots: x,
    slotProps: {
      indicator: k,
      scrollButtons: E,
      ...P
    }
  }, Te = () => {
    const ie = G.current;
    let ve;
    if (ie) {
      const Oe = ie.getBoundingClientRect();
      ve = {
        clientWidth: ie.clientWidth,
        scrollLeft: ie.scrollLeft,
        scrollTop: ie.scrollTop,
        scrollWidth: ie.scrollWidth,
        top: Oe.top,
        bottom: Oe.bottom,
        left: Oe.left,
        right: Oe.right
      };
    }
    let Ne;
    if (ie && R !== !1) {
      const Oe = K.current.children;
      if (Oe.length > 0) {
        const et = Oe[X.get(R)];
        Ne = et ? et.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: ve,
      tabMeta: Ne
    };
  }, ce = Me(() => {
    const {
      tabsMeta: ie,
      tabMeta: ve
    } = Te();
    let Ne = 0, Oe;
    I ? (Oe = "top", ve && ie && (Ne = ve.top - ie.top + ie.scrollTop)) : (Oe = s ? "right" : "left", ve && ie && (Ne = (s ? -1 : 1) * (ve[Oe] - ie[Oe] + ie.scrollLeft)));
    const et = {
      [Oe]: Ne,
      // May be wrong until the font is loaded.
      [U]: ve ? ve[U] : 0
    };
    if (typeof Y[Oe] != "number" || typeof Y[U] != "number")
      ye(et);
    else {
      const Tt = Math.abs(Y[Oe] - et[Oe]), Qt = Math.abs(Y[U] - et[U]);
      (Tt >= 1 || Qt >= 1) && ye(et);
    }
  }), ae = (ie, {
    animation: ve = !0
  } = {}) => {
    ve ? Ib(A, G.current, ie, {
      duration: n.transitions.duration.standard
    }) : G.current[A] = ie;
  }, Ke = (ie) => {
    let ve = G.current[A];
    I ? ve += ie : ve += ie * (s ? -1 : 1), ae(ve);
  }, He = () => {
    const ie = G.current[q];
    let ve = 0;
    const Ne = Array.from(K.current.children);
    for (let Oe = 0; Oe < Ne.length; Oe += 1) {
      const et = Ne[Oe];
      if (ve + et[q] > ie) {
        Oe === 0 && (ve = ie);
        break;
      }
      ve += et[q];
    }
    return ve;
  }, mt = () => {
    Ke(-1 * He());
  }, Ie = () => {
    Ke(He());
  }, [Re, {
    onChange: Fe,
    ...Le
  }] = de("scrollbar", {
    className: V(_.scrollableX, _.hideScrollbar),
    elementType: Gb,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: se
  }), lt = c.useCallback((ie) => {
    Fe?.(ie), ue({
      overflow: null,
      scrollbarWidth: ie
    });
  }, [Fe]), [be, Qe] = de("scrollButtons", {
    className: V(_.scrollButtons, E.className),
    elementType: Fb,
    externalForwardedProps: j,
    ownerState: se,
    additionalProps: {
      orientation: y,
      slots: {
        StartScrollButtonIcon: x.startScrollButtonIcon || x.StartScrollButtonIcon,
        EndScrollButtonIcon: x.endScrollButtonIcon || x.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: re,
        endScrollButtonIcon: ge
      }
    }
  }), Ze = () => {
    const ie = {};
    ie.scrollbarSizeListener = T ? /* @__PURE__ */ b.jsx(Re, {
      ...Le,
      onChange: lt
    }) : null;
    const Ne = T && (w === "auto" && (Ce || ne) || w === !0);
    return ie.scrollButtonStart = Ne ? /* @__PURE__ */ b.jsx(be, {
      direction: s ? "right" : "left",
      onClick: mt,
      disabled: !Ce,
      ...Qe
    }) : null, ie.scrollButtonEnd = Ne ? /* @__PURE__ */ b.jsx(be, {
      direction: s ? "left" : "right",
      onClick: Ie,
      disabled: !ne,
      ...Qe
    }) : null, ie;
  }, st = Me((ie) => {
    const {
      tabsMeta: ve,
      tabMeta: Ne
    } = Te();
    if (!(!Ne || !ve)) {
      if (Ne[D] < ve[D]) {
        const Oe = ve[A] + (Ne[D] - ve[D]);
        ae(Oe, {
          animation: ie
        });
      } else if (Ne[W] > ve[W]) {
        const Oe = ve[A] + (Ne[W] - ve[W]);
        ae(Oe, {
          animation: ie
        });
      }
    }
  }), $e = Me(() => {
    T && w !== !1 && xe(!Q);
  });
  c.useEffect(() => {
    const ie = ln(() => {
      G.current && ce();
    });
    let ve;
    const Ne = (Tt) => {
      Tt.forEach((Qt) => {
        Qt.removedNodes.forEach((ro) => {
          ve?.unobserve(ro);
        }), Qt.addedNodes.forEach((ro) => {
          ve?.observe(ro);
        });
      }), ie(), $e();
    }, Oe = Ft(G.current);
    Oe.addEventListener("resize", ie);
    let et;
    return typeof ResizeObserver < "u" && (ve = new ResizeObserver(ie), Array.from(K.current.children).forEach((Tt) => {
      ve.observe(Tt);
    })), typeof MutationObserver < "u" && (et = new MutationObserver(Ne), et.observe(K.current, {
      childList: !0
    })), () => {
      ie.clear(), Oe.removeEventListener("resize", ie), et?.disconnect(), ve?.disconnect();
    };
  }, [ce, $e]), c.useEffect(() => {
    const ie = Array.from(K.current.children), ve = ie.length;
    if (typeof IntersectionObserver < "u" && ve > 0 && T && w !== !1) {
      const Ne = ie[0], Oe = ie[ve - 1], et = {
        root: G.current,
        threshold: 0.99
      }, Tt = (_o) => {
        le(!_o[0].isIntersecting);
      }, Qt = new IntersectionObserver(Tt, et);
      Qt.observe(Ne);
      const ro = (_o) => {
        fe(!_o[0].isIntersecting);
      }, vr = new IntersectionObserver(ro, et);
      return vr.observe(Oe), () => {
        Qt.disconnect(), vr.disconnect();
      };
    }
  }, [T, w, Q, u?.length]), c.useEffect(() => {
    oe(!0);
  }, []), c.useEffect(() => {
    ce();
  }), c.useEffect(() => {
    st(Ka !== Y);
  }, [st, Y]), c.useImperativeHandle(l, () => ({
    updateIndicator: ce,
    updateScrollButtons: $e
  }), [ce, $e]);
  const [Je, Mt] = de("indicator", {
    className: V(_.indicator, k.className),
    elementType: _b,
    externalForwardedProps: j,
    ownerState: se,
    additionalProps: {
      style: Y
    }
  }), it = /* @__PURE__ */ b.jsx(Je, {
    ...Mt
  });
  let Z = 0;
  const we = c.Children.map(u, (ie) => {
    if (!/* @__PURE__ */ c.isValidElement(ie))
      return null;
    const ve = ie.props.value === void 0 ? Z : ie.props.value;
    X.set(ve, Z);
    const Ne = ve === R;
    return Z += 1, /* @__PURE__ */ c.cloneElement(ie, {
      fullWidth: $ === "fullWidth",
      indicator: Ne && !Pe && it,
      selected: Ne,
      selectionFollowsFocus: C,
      onChange: v,
      textColor: M,
      value: ve,
      ...Z === 1 && R === !1 && !ie.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  }), De = (ie) => {
    if (ie.altKey || ie.shiftKey || ie.ctrlKey || ie.metaKey)
      return;
    const ve = K.current, Ne = $o(yt(ve));
    if (Ne?.getAttribute("role") !== "tab")
      return;
    let et = y === "horizontal" ? "ArrowLeft" : "ArrowUp", Tt = y === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (y === "horizontal" && s && (et = "ArrowRight", Tt = "ArrowLeft"), ie.key) {
      case et:
        ie.preventDefault(), Tr(ve, Ne, Ga);
        break;
      case Tt:
        ie.preventDefault(), Tr(ve, Ne, _a);
        break;
      case "Home":
        ie.preventDefault(), Tr(ve, null, _a);
        break;
      case "End":
        ie.preventDefault(), Tr(ve, null, Ga);
        break;
    }
  }, Ye = Ze(), [oo, uo] = de("root", {
    ref: o,
    className: V(_.root, m),
    elementType: Vb,
    externalForwardedProps: {
      ...j,
      ...p,
      component: h
    },
    ownerState: se
  }), [Uo, Ot] = de("scroller", {
    ref: G,
    className: _.scroller,
    elementType: Hb,
    externalForwardedProps: j,
    ownerState: se,
    additionalProps: {
      style: {
        overflow: H.overflow,
        [I ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: B ? void 0 : -H.scrollbarWidth
      }
    }
  }), [ke, _e] = de("list", {
    ref: K,
    className: V(_.list, _.flexContainer),
    elementType: Ub,
    externalForwardedProps: j,
    ownerState: se,
    getSlotProps: (ie) => ({
      ...ie,
      onKeyDown: (ve) => {
        De(ve), ie.onKeyDown?.(ve);
      }
    })
  });
  return /* @__PURE__ */ b.jsxs(oo, {
    ...uo,
    children: [Ye.scrollButtonStart, Ye.scrollbarSizeListener, /* @__PURE__ */ b.jsxs(Uo, {
      ...Ot,
      children: [/* @__PURE__ */ b.jsx(ke, {
        "aria-label": a,
        "aria-labelledby": i,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ..._e,
        children: we
      }), Pe && it]
    }), Ye.scrollButtonEnd]
  });
}), Kb = {
  // Year
  y: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  yy: "year",
  yyyy: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  L: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  LL: "month",
  LLL: {
    sectionType: "month",
    contentType: "letter"
  },
  LLLL: {
    sectionType: "month",
    contentType: "letter"
  },
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  d: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  dd: "day",
  // Day of the week
  c: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 1
  },
  ccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  cccc: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  E: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  EEE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  EEEE: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, Yb = {
  year: "yyyy",
  month: "LLLL",
  monthShort: "MMM",
  dayOfMonth: "d",
  // Full day of the month format (i.e. 3rd) is not supported
  // Falling back to regular format
  dayOfMonthFull: "d",
  weekday: "cccc",
  weekdayShort: "ccccc",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "a",
  minutes: "mm",
  seconds: "ss",
  fullDate: "DD",
  keyboardDate: "D",
  shortDate: "MMM d",
  normalDate: "d MMMM",
  normalDateWithWeekday: "EEE, MMM d",
  fullTime: "t",
  fullTime12h: "hh:mm a",
  fullTime24h: "HH:mm",
  keyboardDateTime: "D t",
  keyboardDateTime12h: "D hh:mm a",
  keyboardDateTime24h: "D T"
};
class wC {
  constructor({
    locale: t,
    formats: o
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "luxon", this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "'",
      end: "'"
    }, this.formatTokenMap = Kb, this.setLocaleToValue = (r) => {
      const n = this.getCurrentLocaleCode();
      return n === r.locale ? r : r.setLocale(n);
    }, this.date = (r, n = "default") => r === null ? null : typeof r > "u" ? Ko.fromJSDate(/* @__PURE__ */ new Date(), {
      locale: this.locale,
      zone: n
    }) : Ko.fromISO(r, {
      locale: this.locale,
      zone: n
    }), this.getInvalidDate = () => Ko.fromJSDate(/* @__PURE__ */ new Date("Invalid Date")), this.getTimezone = (r) => r.zone.type === "system" ? "system" : r.zoneName, this.setTimezone = (r, n) => r.zone.equals(sc.normalizeZone(n)) ? r : r.setZone(n), this.toJsDate = (r) => r.toJSDate(), this.parse = (r, n) => r === "" ? null : Ko.fromFormat(r, n, {
      locale: this.locale
    }), this.getCurrentLocaleCode = () => this.locale, this.is12HourCycleInCurrentLocale = () => typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? !0 : !!new Intl.DateTimeFormat(this.locale, {
      hour: "numeric"
    })?.resolvedOptions()?.hour12, this.expandFormat = (r) => {
      const n = /''|'(''|[^'])+('|$)|[^']*/g, s = [...Object.keys(this.formatTokenMap), "yyyyy"], a = new RegExp(`^(${s.join("|")})+$`), i = /(?:^|[^a-z])([a-z]+)(?:[^a-z]|$)|([a-z]+)/gi;
      return r.match(n).map((l) => l[0] === "'" ? l : Ko.expandFormat(l, {
        locale: this.locale
      }).replace(i, (m, h, f) => {
        const g = h || f;
        return a.test(g) ? m : `'${m}'`;
      })).join("").replace("yyyyy", "yyyy");
    }, this.isValid = (r) => r === null ? !1 : r.isValid, this.format = (r, n) => this.formatByString(r, this.formats[n]), this.formatByString = (r, n) => r.setLocale(this.locale).toFormat(n), this.formatNumber = (r) => r, this.isEqual = (r, n) => r === null && n === null ? !0 : r === null || n === null ? !1 : +r == +n, this.isSameYear = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.hasSame(s, "year");
    }, this.isSameMonth = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.hasSame(s, "month");
    }, this.isSameDay = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.hasSame(s, "day");
    }, this.isSameHour = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.hasSame(s, "hour");
    }, this.isAfter = (r, n) => r > n, this.isAfterYear = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.diff(this.endOfYear(s), "years").toObject().years > 0;
    }, this.isAfterDay = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.diff(this.endOfDay(s), "days").toObject().days > 0;
    }, this.isBefore = (r, n) => r < n, this.isBeforeYear = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.diff(this.startOfYear(s), "years").toObject().years < 0;
    }, this.isBeforeDay = (r, n) => {
      const s = this.setTimezone(n, this.getTimezone(r));
      return r.diff(this.startOfDay(s), "days").toObject().days < 0;
    }, this.isWithinRange = (r, [n, s]) => this.isEqual(r, n) || this.isEqual(r, s) || this.isAfter(r, n) && this.isBefore(r, s), this.startOfYear = (r) => r.startOf("year"), this.startOfMonth = (r) => r.startOf("month"), this.startOfWeek = (r) => this.setLocaleToValue(r).startOf("week", {
      useLocaleWeeks: !0
    }), this.startOfDay = (r) => r.startOf("day"), this.endOfYear = (r) => r.endOf("year"), this.endOfMonth = (r) => r.endOf("month"), this.endOfWeek = (r) => this.setLocaleToValue(r).endOf("week", {
      useLocaleWeeks: !0
    }), this.endOfDay = (r) => r.endOf("day"), this.addYears = (r, n) => r.plus({
      years: n
    }), this.addMonths = (r, n) => r.plus({
      months: n
    }), this.addWeeks = (r, n) => r.plus({
      weeks: n
    }), this.addDays = (r, n) => r.plus({
      days: n
    }), this.addHours = (r, n) => r.plus({
      hours: n
    }), this.addMinutes = (r, n) => r.plus({
      minutes: n
    }), this.addSeconds = (r, n) => r.plus({
      seconds: n
    }), this.getYear = (r) => r.get("year"), this.getMonth = (r) => r.get("month") - 1, this.getDate = (r) => r.get("day"), this.getHours = (r) => r.get("hour"), this.getMinutes = (r) => r.get("minute"), this.getSeconds = (r) => r.get("second"), this.getMilliseconds = (r) => r.get("millisecond"), this.setYear = (r, n) => r.set({
      year: n
    }), this.setMonth = (r, n) => r.set({
      month: n + 1
    }), this.setDate = (r, n) => r.set({
      day: n
    }), this.setHours = (r, n) => r.set({
      hour: n
    }), this.setMinutes = (r, n) => r.set({
      minute: n
    }), this.setSeconds = (r, n) => r.set({
      second: n
    }), this.setMilliseconds = (r, n) => r.set({
      millisecond: n
    }), this.getDaysInMonth = (r) => r.daysInMonth, this.getWeekArray = (r) => {
      const n = this.startOfWeek(this.startOfMonth(r)), s = this.endOfWeek(this.endOfMonth(r)), {
        days: a
      } = s.diff(n, "days").toObject(), i = [];
      return new Array(Math.round(a)).fill(0).map((l, d) => d).map((l) => n.plus({
        days: l
      })).forEach((l, d) => {
        if (d === 0 || d % 7 === 0 && d > 6) {
          i.push([l]);
          return;
        }
        i[i.length - 1].push(l);
      }), i;
    }, this.getWeekNumber = (r) => r.localWeekNumber ?? r.weekNumber, this.getDayOfWeek = (r) => r.weekday, this.getYearRange = ([r, n]) => {
      const s = this.startOfYear(r), a = this.endOfYear(n), i = [];
      let l = s;
      for (; this.isBefore(l, a); )
        i.push(l), l = this.addYears(l, 1);
      return i;
    }, this.locale = t || "en-US", this.formats = Se({}, Yb, o);
  }
}
function qb(e) {
  return ee("MuiCollapse", e);
}
J("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Xb = (e) => {
  const {
    orientation: t,
    classes: o
  } = e;
  return te({
    root: ["root", t],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", t],
    wrapperInner: ["wrapperInner", t]
  }, qb, o);
}, Qb = O("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.orientation], o.state === "entered" && t.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && t.hidden];
  }
})(me(({
  theme: e
}) => ({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: e.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), Zb = O("div", {
  name: "MuiCollapse",
  slot: "Wrapper"
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), Jb = O("div", {
  name: "MuiCollapse",
  slot: "WrapperInner"
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), Zn = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: n,
    children: s,
    className: a,
    collapsedSize: i = "0px",
    component: l,
    easing: d,
    in: u,
    onEnter: m,
    onEntered: h,
    onEntering: f,
    onExit: g,
    onExited: v,
    onExiting: y,
    orientation: S = "vertical",
    slots: w = {},
    slotProps: C = {},
    style: x,
    timeout: P = Hi.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = ss,
    ...E
  } = r, M = {
    ...r,
    orientation: S,
    collapsedSize: i
  }, R = Xb(M), $ = jt(), B = bo(), p = c.useRef(null), T = c.useRef(), I = typeof i == "number" ? `${i}px` : i, A = S === "horizontal", D = A ? "width" : "height", W = c.useRef(null), q = Xe(o, W), U = () => p.current ? p.current[A ? "clientWidth" : "clientHeight"] : 0, se = ut(W, (H, ue) => {
    p.current && A && (p.current.style.position = "absolute"), H.style[D] = I, m && m(H, ue);
  }), _ = ut(W, (H, ue) => {
    const X = U();
    p.current && A && (p.current.style.position = "");
    const {
      duration: G,
      easing: K
    } = zo({
      style: x,
      timeout: P,
      easing: d
    }, {
      mode: "enter"
    });
    if (P === "auto") {
      const j = $.transitions.getAutoHeightDuration(X);
      H.style.transitionDuration = `${j}ms`, T.current = j;
    } else
      H.style.transitionDuration = typeof G == "string" ? G : `${G}ms`;
    H.style[D] = `${X}px`, H.style.transitionTimingFunction = K, f && f(H, ue);
  }), re = ut(W, (H, ue) => {
    H.style[D] = "auto", h && h(H, ue);
  }), ge = ut(W, (H) => {
    H.style[D] = `${U()}px`, g && g(H);
  }), Pe = ut(W, v), oe = ut(W, (H) => {
    const ue = U(), {
      duration: X,
      easing: G
    } = zo({
      style: x,
      timeout: P,
      easing: d
    }, {
      mode: "exit"
    });
    if (P === "auto") {
      const K = $.transitions.getAutoHeightDuration(ue);
      H.style.transitionDuration = `${K}ms`, T.current = K;
    } else
      H.style.transitionDuration = typeof X == "string" ? X : `${X}ms`;
    H.style[D] = I, H.style.transitionTimingFunction = G, y && y(H);
  }), Y = (H) => {
    P === "auto" && B.start(T.current || 0, H), n && n(W.current, H);
  }, ye = {
    slots: w,
    slotProps: C,
    component: l
  }, [Ce, le] = de("root", {
    ref: q,
    className: V(R.root, a),
    elementType: Qb,
    externalForwardedProps: ye,
    ownerState: M,
    additionalProps: {
      style: {
        [A ? "minWidth" : "minHeight"]: I,
        ...x
      }
    }
  }), [ne, fe] = de("wrapper", {
    ref: p,
    className: R.wrapper,
    elementType: Zb,
    externalForwardedProps: ye,
    ownerState: M
  }), [Q, xe] = de("wrapperInner", {
    className: R.wrapperInner,
    elementType: Jb,
    externalForwardedProps: ye,
    ownerState: M
  });
  return /* @__PURE__ */ b.jsx(k, {
    in: u,
    onEnter: se,
    onEntered: re,
    onEntering: _,
    onExit: ge,
    onExited: Pe,
    onExiting: oe,
    addEndListener: Y,
    nodeRef: W,
    timeout: P === "auto" ? null : P,
    ...E,
    children: (H, {
      ownerState: ue,
      ...X
    }) => {
      const G = {
        ...M,
        state: H
      };
      return /* @__PURE__ */ b.jsx(Ce, {
        ...le,
        className: V(le.className, {
          entered: R.entered,
          exited: !u && I === "0px" && R.hidden
        }[H]),
        ownerState: G,
        ...X,
        children: /* @__PURE__ */ b.jsx(ne, {
          ...fe,
          ownerState: G,
          children: /* @__PURE__ */ b.jsx(Q, {
            ...xe,
            ownerState: G,
            children: s
          })
        })
      });
    }
  });
});
Zn && (Zn.muiSupportAuto = !0);
const Tl = /* @__PURE__ */ c.createContext({});
function ev(e) {
  return ee("MuiAccordion", e);
}
const Rr = J("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]), tv = (e) => {
  const {
    classes: t,
    square: o,
    expanded: r,
    disabled: n,
    disableGutters: s
  } = e;
  return te({
    root: ["root", !o && "rounded", r && "expanded", n && "disabled", !s && "gutters"],
    heading: ["heading"],
    region: ["region"]
  }, ev, t);
}, ov = O(Vo, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Rr.region}`]: t.region
    }, t.root, !o.square && t.rounded, !o.disableGutters && t.gutters];
  }
})(me(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: e.transitions.create(["margin"], t),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (e.vars || e).palette.divider,
      transition: e.transitions.create(["opacity", "background-color"], t)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${Rr.expanded}`]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    [`&.${Rr.disabled}`]: {
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    }
  };
}), me(({
  theme: e
}) => ({
  variants: [{
    props: (t) => !t.square,
    style: {
      borderRadius: 0,
      "&:first-of-type": {
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius
      },
      "&:last-of-type": {
        borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
        borderBottomRightRadius: (e.vars || e).shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: (t) => !t.disableGutters,
    style: {
      [`&.${Rr.expanded}`]: {
        margin: "16px 0"
      }
    }
  }]
}))), rv = O("h3", {
  name: "MuiAccordion",
  slot: "Heading"
})({
  all: "unset"
}), nv = O("div", {
  name: "MuiAccordion",
  slot: "Region"
})({}), kC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAccordion"
  }), {
    children: n,
    className: s,
    defaultExpanded: a = !1,
    disabled: i = !1,
    disableGutters: l = !1,
    expanded: d,
    onChange: u,
    slots: m = {},
    slotProps: h = {},
    TransitionComponent: f,
    TransitionProps: g,
    ...v
  } = r, [y, S] = wt({
    controlled: d,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), w = c.useCallback((U) => {
    S(!y), u && u(U, !y);
  }, [y, u, S]), [C, ...x] = c.Children.toArray(n), P = c.useMemo(() => ({
    expanded: y,
    disabled: i,
    disableGutters: l,
    toggle: w
  }), [y, i, l, w]), k = {
    ...r,
    disabled: i,
    disableGutters: l,
    expanded: y
  }, E = tv(k), M = {
    transition: f,
    ...m
  }, R = {
    transition: g,
    ...h
  }, $ = {
    slots: M,
    slotProps: R
  }, [B, p] = de("root", {
    elementType: ov,
    externalForwardedProps: {
      ...$,
      ...v
    },
    className: V(E.root, s),
    shouldForwardComponentProp: !0,
    ownerState: k,
    ref: o
  }), [T, I] = de("heading", {
    elementType: rv,
    externalForwardedProps: $,
    className: E.heading,
    ownerState: k
  }), [A, D] = de("transition", {
    elementType: Zn,
    externalForwardedProps: $,
    ownerState: k
  }), [W, q] = de("region", {
    elementType: nv,
    externalForwardedProps: $,
    ownerState: k,
    className: E.region,
    additionalProps: {
      "aria-labelledby": C.props.id,
      id: C.props["aria-controls"],
      role: "region"
    }
  });
  return /* @__PURE__ */ b.jsxs(B, {
    ...p,
    children: [/* @__PURE__ */ b.jsx(T, {
      ...I,
      children: /* @__PURE__ */ b.jsx(Tl.Provider, {
        value: P,
        children: C
      })
    }), /* @__PURE__ */ b.jsx(A, {
      in: y,
      timeout: "auto",
      ...D,
      children: /* @__PURE__ */ b.jsx(W, {
        ...q,
        children: x
      })
    })]
  });
});
function sv(e) {
  return ee("MuiAccordionDetails", e);
}
J("MuiAccordionDetails", ["root"]);
const av = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, sv, t);
}, iv = O("div", {
  name: "MuiAccordionDetails",
  slot: "Root"
})(me(({
  theme: e
}) => ({
  padding: e.spacing(1, 2, 2)
}))), PC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAccordionDetails"
  }), {
    className: n,
    ...s
  } = r, a = r, i = av(a);
  return /* @__PURE__ */ b.jsx(iv, {
    className: V(i.root, n),
    ref: o,
    ownerState: a,
    ...s
  });
});
function lv(e) {
  return ee("MuiAccordionSummary", e);
}
const Do = J("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), cv = (e) => {
  const {
    classes: t,
    expanded: o,
    disabled: r,
    disableGutters: n
  } = e;
  return te({
    root: ["root", o && "expanded", r && "disabled", !n && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", o && "expanded", !n && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", o && "expanded"]
  }, lv, t);
}, dv = O(Et, {
  name: "MuiAccordionSummary",
  slot: "Root"
})(me(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    display: "flex",
    width: "100%",
    minHeight: 48,
    padding: e.spacing(0, 2),
    transition: e.transitions.create(["min-height", "background-color"], t),
    [`&.${Do.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${Do.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`&:hover:not(.${Do.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (o) => !o.disableGutters,
      style: {
        [`&.${Do.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
})), uv = O("span", {
  name: "MuiAccordionSummary",
  slot: "Content"
})(me(({
  theme: e
}) => ({
  display: "flex",
  textAlign: "start",
  flexGrow: 1,
  margin: "12px 0",
  variants: [{
    props: (t) => !t.disableGutters,
    style: {
      transition: e.transitions.create(["margin"], {
        duration: e.transitions.duration.shortest
      }),
      [`&.${Do.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
}))), pv = O("span", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper"
})(me(({
  theme: e
}) => ({
  display: "flex",
  color: (e.vars || e).palette.action.active,
  transform: "rotate(0deg)",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Do.expanded}`]: {
    transform: "rotate(180deg)"
  }
}))), MC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAccordionSummary"
  }), {
    children: n,
    className: s,
    expandIcon: a,
    focusVisibleClassName: i,
    onClick: l,
    slots: d,
    slotProps: u,
    ...m
  } = r, {
    disabled: h = !1,
    disableGutters: f,
    expanded: g,
    toggle: v
  } = c.useContext(Tl), y = ($) => {
    v && v($), l && l($);
  }, S = {
    ...r,
    expanded: g,
    disabled: h,
    disableGutters: f
  }, w = cv(S), C = {
    slots: d,
    slotProps: u
  }, [x, P] = de("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: V(w.root, s),
    elementType: dv,
    externalForwardedProps: {
      ...C,
      ...m
    },
    ownerState: S,
    additionalProps: {
      focusRipple: !1,
      disableRipple: !0,
      disabled: h,
      "aria-expanded": g,
      focusVisibleClassName: V(w.focusVisible, i)
    },
    getSlotProps: ($) => ({
      ...$,
      onClick: (B) => {
        $.onClick?.(B), y(B);
      }
    })
  }), [k, E] = de("content", {
    className: w.content,
    elementType: uv,
    externalForwardedProps: C,
    ownerState: S
  }), [M, R] = de("expandIconWrapper", {
    className: w.expandIconWrapper,
    elementType: pv,
    externalForwardedProps: C,
    ownerState: S
  });
  return /* @__PURE__ */ b.jsxs(x, {
    ...P,
    children: [/* @__PURE__ */ b.jsx(k, {
      ...E,
      children: n
    }), a && /* @__PURE__ */ b.jsx(M, {
      ...R,
      children: a
    })]
  });
});
function fv(e) {
  return ee("MuiAlert", e);
}
const Ya = J("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), mv = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), hv = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), gv = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), yv = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), bv = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), vv = (e) => {
  const {
    variant: t,
    color: o,
    severity: r,
    classes: n
  } = e, s = {
    root: ["root", `color${L(o || r)}`, `${t}${L(o || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return te(s, fv, n);
}, xv = O(Vo, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${L(o.color || o.severity)}`]];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, o = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(je(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
        [`& .${Ya.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(je(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Ya.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(je(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${r}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
          color: e.palette.getContrastText(e.palette[r].main)
        }
      }
    }))]
  };
})), Cv = O("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Sv = O("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), wv = O("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), qa = {
  success: /* @__PURE__ */ b.jsx(mv, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ b.jsx(hv, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ b.jsx(gv, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ b.jsx(yv, {
    fontSize: "inherit"
  })
}, TC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiAlert"
  }), {
    action: n,
    children: s,
    className: a,
    closeText: i = "Close",
    color: l,
    components: d = {},
    componentsProps: u = {},
    icon: m,
    iconMapping: h = qa,
    onClose: f,
    role: g = "alert",
    severity: v = "success",
    slotProps: y = {},
    slots: S = {},
    variant: w = "standard",
    ...C
  } = r, x = {
    ...r,
    color: l,
    severity: v,
    variant: w,
    colorSeverity: l || v
  }, P = vv(x), k = {
    slots: {
      closeButton: d.CloseButton,
      closeIcon: d.CloseIcon,
      ...S
    },
    slotProps: {
      ...u,
      ...y
    }
  }, [E, M] = de("root", {
    ref: o,
    shouldForwardComponentProp: !0,
    className: V(P.root, a),
    elementType: xv,
    externalForwardedProps: {
      ...k,
      ...C
    },
    ownerState: x,
    additionalProps: {
      role: g,
      elevation: 0
    }
  }), [R, $] = de("icon", {
    className: P.icon,
    elementType: Cv,
    externalForwardedProps: k,
    ownerState: x
  }), [B, p] = de("message", {
    className: P.message,
    elementType: Sv,
    externalForwardedProps: k,
    ownerState: x
  }), [T, I] = de("action", {
    className: P.action,
    elementType: wv,
    externalForwardedProps: k,
    ownerState: x
  }), [A, D] = de("closeButton", {
    elementType: ws,
    externalForwardedProps: k,
    ownerState: x
  }), [W, q] = de("closeIcon", {
    elementType: bv,
    externalForwardedProps: k,
    ownerState: x
  });
  return /* @__PURE__ */ b.jsxs(E, {
    ...M,
    children: [m !== !1 ? /* @__PURE__ */ b.jsx(R, {
      ...$,
      children: m || h[v] || qa[v]
    }) : null, /* @__PURE__ */ b.jsx(B, {
      ...p,
      children: s
    }), n != null ? /* @__PURE__ */ b.jsx(T, {
      ...I,
      children: n
    }) : null, n == null && f ? /* @__PURE__ */ b.jsx(T, {
      ...I,
      children: /* @__PURE__ */ b.jsx(A, {
        size: "small",
        "aria-label": i,
        title: i,
        color: "inherit",
        onClick: f,
        ...D,
        children: /* @__PURE__ */ b.jsx(W, {
          fontSize: "small",
          ...q
        })
      })
    }) : null]
  });
});
function Xa({
  array1: e,
  array2: t,
  parser: o = (r) => r
}) {
  return e && t && e.length === t.length && e.every((r, n) => o(r) === o(t[n]));
}
function Qa(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function kv(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: o = !0,
    limit: r,
    matchFrom: n = "any",
    stringify: s,
    trim: a = !1
  } = e;
  return (i, {
    inputValue: l,
    getOptionLabel: d
  }) => {
    let u = a ? l.trim() : l;
    o && (u = u.toLowerCase()), t && (u = Qa(u));
    const m = u ? i.filter((h) => {
      let f = (s || d)(h);
      return o && (f = f.toLowerCase()), t && (f = Qa(f)), n === "start" ? f.startsWith(u) : f.includes(u);
    }) : i;
    return typeof r == "number" ? m.slice(0, r) : m;
  };
}
const Pv = kv(), Za = 5, Mv = (e) => e.current !== null && e.current.parentElement?.contains(document.activeElement), Ja = (e, t) => e === t, Tv = [];
function ei(e, t, o, r) {
  if (t || e == null || r)
    return "";
  const n = o(e);
  return typeof n == "string" ? n : "";
}
function RC(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Mv,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: r = !1,
    autoHighlight: n = !1,
    autoSelect: s = !1,
    blurOnSelect: a = !1,
    clearOnBlur: i = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: d = "useAutocomplete",
    defaultValue: u = e.multiple ? Tv : null,
    disableClearable: m = !1,
    disableCloseOnSelect: h = !1,
    disabled: f,
    disabledItemsFocusable: g = !1,
    disableListWrap: v = !1,
    filterOptions: y = Pv,
    filterSelectedOptions: S = !1,
    freeSolo: w = !1,
    getOptionDisabled: C,
    getOptionKey: x,
    getOptionLabel: P = (N) => N.label ?? N,
    groupBy: k,
    handleHomeEndKeys: E = !e.freeSolo,
    id: M,
    includeInputInList: R = !1,
    inputValue: $,
    isOptionEqualToValue: B = Ja,
    multiple: p = !1,
    onChange: T,
    onClose: I,
    onHighlightChange: A,
    onInputChange: D,
    onOpen: W,
    open: q,
    openOnFocus: U = !1,
    options: se,
    readOnly: _ = !1,
    renderValue: re,
    selectOnFocus: ge = !e.freeSolo,
    value: Pe
  } = e, oe = Xt(M);
  let Y = P;
  Y = (N) => {
    const F = P(N);
    return typeof F != "string" ? String(F) : F;
  };
  const ye = c.useRef(!1), Ce = c.useRef(!0), le = c.useRef(null), ne = c.useRef(null), fe = c.useRef(!1), [Q, xe] = c.useState(null), [H, ue] = c.useState(-1), X = n ? 0 : -1, G = c.useRef(X), K = c.useRef(ei(u ?? Pe, p, Y)).current, [j, Te] = wt({
    controlled: Pe,
    default: u,
    name: d
  }), [ce, ae] = wt({
    controlled: $,
    default: K,
    name: d,
    state: "inputValue"
  }), [Ke, He] = c.useState(!1), mt = c.useCallback((N, F, pe) => {
    if (!(p ? j.length < F.length : F !== null) && !i)
      return;
    const Be = ei(F, p, Y, re);
    ce !== Be && (ae(Be), D && D(N, Be, pe));
  }, [Y, ce, p, D, ae, i, j, re]), [Ie, Re] = wt({
    controlled: q,
    default: !1,
    name: d,
    state: "open"
  }), [Fe, Le] = c.useState(!0), lt = !p && j != null && ce === Y(j), be = Ie && !_, Qe = c.useMemo(() => p ? j : j != null ? [j] : [], [p, j]), Ze = c.useMemo(() => B !== Ja || Qe.length === 0 ? null : new Set(Qe), [B, Qe]), st = c.useCallback((N) => Ze ? Ze.has(N) : Qe.some((F) => F != null && B(N, F)), [B, Qe, Ze]), $e = be ? y(
    se.filter((N) => !(S && st(N))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: lt && Fe ? "" : ce,
      getOptionLabel: Y
    }
  ) : [], Je = xs({
    filteredOptions: $e,
    value: j,
    inputValue: ce
  });
  c.useEffect(() => {
    const N = j !== Je.value;
    Ke && !N || w && !N || mt(null, j, "reset");
  }, [j, mt, Ke, Je.value, w]);
  const Mt = Ie && $e.length > 0 && !_, it = Me((N) => {
    if (N === -1)
      le.current.focus();
    else {
      const F = re ? "data-item-index" : "data-tag-index";
      Q.querySelector(`[${F}="${N}"]`).focus();
    }
  });
  c.useEffect(() => {
    p && H > j.length - 1 && (ue(-1), it(-1));
  }, [j, p, H, it]);
  function Z(N, F) {
    if (!ne.current || N < 0 || N >= $e.length)
      return -1;
    let pe = N;
    for (; ; ) {
      const Ae = ne.current.querySelector(`[data-option-index="${pe}"]`), Be = g ? !1 : !Ae || Ae.disabled || Ae.getAttribute("aria-disabled") === "true";
      if (Ae && Ae.hasAttribute("tabindex") && !Be)
        return pe;
      if (F === "next" ? pe = (pe + 1) % $e.length : pe = (pe - 1 + $e.length) % $e.length, pe === N)
        return -1;
    }
  }
  const we = Me(({
    event: N,
    index: F,
    reason: pe
  }) => {
    if (G.current = F, F === -1 ? le.current.removeAttribute("aria-activedescendant") : le.current.setAttribute("aria-activedescendant", `${oe}-option-${F}`), A && ["mouse", "keyboard", "touch"].includes(pe) && A(N, F === -1 ? null : $e[F], pe), !ne.current)
      return;
    const Ae = ne.current.querySelector(`[role="option"].${o}-focused`);
    Ae && (Ae.classList.remove(`${o}-focused`), Ae.classList.remove(`${o}-focusVisible`));
    let Be = ne.current;
    if (ne.current.getAttribute("role") !== "listbox" && (Be = ne.current.parentElement.querySelector('[role="listbox"]')), !Be)
      return;
    if (F === -1) {
      Be.scrollTop = 0;
      return;
    }
    const ht = ne.current.querySelector(`[data-option-index="${F}"]`);
    if (ht && (ht.classList.add(`${o}-focused`), pe === "keyboard" && ht.classList.add(`${o}-focusVisible`), Be.scrollHeight > Be.clientHeight && pe !== "mouse" && pe !== "touch")) {
      const ct = ht, Vt = Be.clientHeight + Be.scrollTop, Ns = ct.offsetTop + ct.offsetHeight;
      Ns > Vt ? Be.scrollTop = Ns - Be.clientHeight : ct.offsetTop - ct.offsetHeight * (k ? 1.3 : 0) < Be.scrollTop && (Be.scrollTop = ct.offsetTop - ct.offsetHeight * (k ? 1.3 : 0));
    }
  }), De = Me(({
    event: N,
    diff: F,
    direction: pe = "next",
    reason: Ae
  }) => {
    if (!be)
      return;
    const ht = Z((() => {
      const ct = $e.length - 1;
      if (F === "reset")
        return X;
      if (F === "start")
        return 0;
      if (F === "end")
        return ct;
      const Vt = G.current + F;
      return Vt < 0 ? Vt === -1 && R ? -1 : v && G.current !== -1 || Math.abs(F) > 1 ? 0 : ct : Vt > ct ? Vt === ct + 1 && R ? -1 : v || Math.abs(F) > 1 ? ct : 0 : Vt;
    })(), pe);
    if (we({
      index: ht,
      reason: Ae,
      event: N
    }), r && F !== "reset")
      if (ht === -1)
        le.current.value = ce;
      else {
        const ct = Y($e[ht]);
        le.current.value = ct, ct.toLowerCase().indexOf(ce.toLowerCase()) === 0 && ce.length > 0 && le.current.setSelectionRange(ce.length, ct.length);
      }
  }), Ye = !Xa({
    array1: Je.filteredOptions,
    array2: $e,
    parser: Y
  }), oo = () => {
    const N = (F, pe) => {
      const Ae = F ? Y(F) : "", Be = pe ? Y(pe) : "";
      return Ae === Be;
    };
    if (G.current !== -1 && !Xa({
      array1: Je.filteredOptions,
      array2: $e,
      parser: Y
    }) && Je.inputValue === ce && (p ? j.length === Je.value.length && Je.value.every((F, pe) => Y(j[pe]) === Y(F)) : N(Je.value, j))) {
      const F = Je.filteredOptions[G.current];
      if (F)
        return $e.findIndex((pe) => Y(pe) === Y(F));
    }
    return -1;
  }, uo = c.useCallback(() => {
    if (!be)
      return;
    const N = oo();
    if (N !== -1) {
      G.current = N;
      return;
    }
    const F = p ? j[0] : j;
    if ($e.length === 0 || F == null) {
      De({
        diff: "reset"
      });
      return;
    }
    if (ne.current) {
      if (F != null) {
        const pe = $e[G.current];
        if (p && pe && j.findIndex((Be) => B(pe, Be)) !== -1)
          return;
        const Ae = $e.findIndex((Be) => B(Be, F));
        Ae === -1 ? De({
          diff: "reset"
        }) : we({
          index: Ae
        });
        return;
      }
      if (G.current >= $e.length - 1) {
        we({
          index: $e.length - 1
        });
        return;
      }
      we({
        index: G.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    $e.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    p ? !1 : j,
    De,
    we,
    be,
    ce,
    p
  ]), Uo = Me((N) => {
    Hn(ne, N), N && uo();
  });
  c.useEffect(() => {
    (Ye || be && !h) && uo();
  }, [uo, Ye, be, h]), c.useEffect(() => {
    if (typeof window > "u")
      return;
    const N = () => {
      fe.current = !0;
    };
    return window.addEventListener("blur", N), () => {
      window.removeEventListener("blur", N);
    };
  }, []);
  const Ot = (N) => {
    Ie || (Re(!0), Le(!0), W && W(N));
  }, ke = (N, F) => {
    Ie && (Re(!1), I && I(N, F));
  }, _e = (N, F, pe, Ae) => {
    if (p) {
      if (j.length === F.length && j.every((Be, ht) => Be === F[ht]))
        return;
    } else if (j === F)
      return;
    T && T(N, F, pe, Ae), Te(F);
  }, ie = c.useRef(!1), ve = (N, F, pe = "selectOption", Ae = "options") => {
    let Be = pe, ht = F;
    if (p) {
      ht = Array.isArray(j) ? j.slice() : [];
      const ct = ht.findIndex((Vt) => B(F, Vt));
      ct === -1 ? ht.push(F) : Ae !== "freeSolo" && (ht.splice(ct, 1), Be = "removeOption");
    }
    mt(N, ht, Be), _e(N, ht, Be, {
      option: F
    }), !h && (!N || !N.ctrlKey && !N.metaKey) && ke(N, Be), (a === !0 || a === "touch" && ie.current || a === "mouse" && !ie.current) && le.current.blur();
  };
  function Ne(N, F) {
    if (N === -1)
      return -1;
    let pe = N;
    for (; ; ) {
      if (F === "next" && pe === j.length || F === "previous" && pe === -1)
        return -1;
      const Ae = re ? "data-item-index" : "data-tag-index", Be = Q.querySelector(`[${Ae}="${pe}"]`);
      if (!Be || !Be.hasAttribute("tabindex") || Be.disabled || Be.getAttribute("aria-disabled") === "true")
        pe += F === "next" ? 1 : -1;
      else
        return pe;
    }
  }
  const Oe = (N, F) => {
    if (!p)
      return;
    ce === "" && ke(N, "toggleInput");
    let pe = H;
    H === -1 && F === "previous" ? (pe = j.length - 1, w && ce !== "" && (ae(""), D && D(N, "", "reset"))) : (pe += F === "next" ? 1 : -1, pe < 0 && (pe = 0), pe === j.length && (pe = -1)), pe = Ne(pe, F), ue(pe), it(pe);
  }, et = (N) => {
    ye.current = !0, ae(""), D && D(N, "", "clear"), _e(N, p ? [] : null, "clear");
  }, Tt = (N) => (F) => {
    if (N.onKeyDown && N.onKeyDown(F), !F.defaultMuiPrevented && (H !== -1 && !["ArrowLeft", "ArrowRight"].includes(F.key) && (ue(-1), it(-1)), F.which !== 229))
      switch (F.key) {
        case "Home":
          be && E && (F.preventDefault(), De({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: F
          }));
          break;
        case "End":
          be && E && (F.preventDefault(), De({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: F
          }));
          break;
        case "PageUp":
          F.preventDefault(), De({
            diff: -Za,
            direction: "previous",
            reason: "keyboard",
            event: F
          }), Ot(F);
          break;
        case "PageDown":
          F.preventDefault(), De({
            diff: Za,
            direction: "next",
            reason: "keyboard",
            event: F
          }), Ot(F);
          break;
        case "ArrowDown":
          F.preventDefault(), De({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: F
          }), Ot(F);
          break;
        case "ArrowUp":
          F.preventDefault(), De({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: F
          }), Ot(F);
          break;
        case "ArrowLeft": {
          const pe = le.current;
          if (!(pe && pe.selectionStart === 0 && pe.selectionEnd === 0))
            return;
          !p && re && j != null ? (w && ce !== "" && (ae(""), D && D(F, "", "reset")), ue(0), it(0)) : Oe(F, "previous");
          break;
        }
        case "ArrowRight":
          !p && re ? (ue(-1), it(-1)) : Oe(F, "next");
          break;
        case "Enter":
          if (G.current !== -1 && be) {
            const pe = $e[G.current], Ae = C ? C(pe) : !1;
            if (F.preventDefault(), Ae)
              return;
            ve(F, pe, "selectOption"), r && le.current.setSelectionRange(le.current.value.length, le.current.value.length);
          } else w && ce !== "" && lt === !1 && (p && F.preventDefault(), ve(F, ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          be ? (F.preventDefault(), F.stopPropagation(), ke(F, "escape")) : l && (ce !== "" || p && j.length > 0 || re) && (F.preventDefault(), F.stopPropagation(), et(F));
          break;
        case "Backspace":
          if (p && !_ && ce === "" && j.length > 0) {
            const pe = H === -1 ? j.length - 1 : H, Ae = j.slice();
            Ae.splice(pe, 1), _e(F, Ae, "removeOption", {
              option: j[pe]
            });
          }
          !p && re && !_ && ce === "" && _e(F, null, "removeOption", {
            option: j
          });
          break;
        case "Delete":
          if (p && !_ && ce === "" && j.length > 0 && H !== -1) {
            const pe = H, Ae = j.slice();
            Ae.splice(pe, 1), _e(F, Ae, "removeOption", {
              option: j[pe]
            });
          }
          !p && re && !_ && ce === "" && _e(F, null, "removeOption", {
            option: j
          });
          break;
      }
  }, Qt = (N) => {
    if (He(!0), H !== -1 && (ue(-1), it(-1)), fe.current) {
      fe.current = !1;
      return;
    }
    U && !ye.current && Ot(N);
  }, ro = (N) => {
    if (t(ne)) {
      le.current.focus();
      return;
    }
    He(!1), Ce.current = !0, ye.current = !1, s && G.current !== -1 && be ? ve(N, $e[G.current], "blur") : s && w && ce !== "" ? ve(N, ce, "blur", "freeSolo") : i && mt(N, j, "blur"), ke(N, "blur");
  }, vr = (N) => {
    const F = N.target.value;
    ce !== F && (ae(F), Le(!1), D && D(N, F, "input")), F === "" ? !m && !p && !re && _e(N, null, "clear") : Ot(N);
  }, _o = (N) => {
    const F = Number(N.currentTarget.getAttribute("data-option-index"));
    G.current !== F && we({
      event: N,
      index: F,
      reason: "mouse"
    });
  }, Bl = (N) => {
    we({
      event: N,
      index: Number(N.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), ie.current = !0;
  }, Ol = (N) => {
    const F = Number(N.currentTarget.getAttribute("data-option-index"));
    ve(N, $e[F], "selectOption"), ie.current = !1;
  }, Bs = (N) => (F) => {
    const pe = j.slice();
    pe.splice(N, 1), _e(F, pe, "removeOption", {
      option: j[N]
    });
  }, Ll = (N) => {
    _e(N, null, "removeOption", {
      option: j
    });
  }, Os = (N) => {
    Ie ? ke(N, "toggleInput") : Ot(N);
  }, Nl = (N) => {
    N.currentTarget.contains(N.target) && (Q && !Q.contains(N.target) || N.target.getAttribute("id") !== oe && N.preventDefault());
  }, zl = (N) => {
    N.currentTarget.contains(N.target) && (Q && !Q.contains(N.target) || (le.current.focus(), ge && Ce.current && le.current.selectionEnd - le.current.selectionStart === 0 && le.current.select(), Ce.current = !1));
  }, Fl = (N) => {
    !f && (ce === "" || !Ie) && Os(N);
  };
  let yn = w && ce.length > 0;
  yn = yn || (p ? j.length > 0 : j !== null);
  let Ls = $e;
  return k && (Ls = $e.reduce((N, F, pe) => {
    const Ae = k(F);
    return N.length > 0 && N[N.length - 1].group === Ae ? N[N.length - 1].options.push(F) : N.push({
      key: pe,
      index: pe,
      group: Ae,
      options: [F]
    }), N;
  }, [])), f && Ke && ro(), {
    getRootProps: (N = {}) => ({
      ...N,
      onKeyDown: Tt(N),
      onMouseDown: Nl,
      onClick: zl
    }),
    getInputLabelProps: () => ({
      id: `${oe}-label`,
      htmlFor: oe
    }),
    getInputProps: () => ({
      id: oe,
      value: ce,
      onBlur: ro,
      onFocus: Qt,
      onChange: vr,
      onMouseDown: Fl,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": be ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Mt ? `${oe}-listbox` : void 0,
      "aria-expanded": Mt,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: le,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: f
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: et
    }),
    getItemProps: ({
      index: N = 0
    } = {}) => ({
      ...p && {
        key: N
      },
      ...re ? {
        "data-item-index": N
      } : {
        "data-tag-index": N
      },
      tabIndex: -1,
      ...!_ && {
        onDelete: p ? Bs(N) : Ll
      }
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Os
    }),
    // deprecated
    getTagProps: ({
      index: N
    }) => ({
      key: N,
      "data-tag-index": N,
      tabIndex: -1,
      ...!_ && {
        onDelete: Bs(N)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${oe}-listbox`,
      "aria-labelledby": `${oe}-label`,
      "aria-multiselectable": p || void 0,
      ref: Uo,
      onMouseDown: (N) => {
        N.preventDefault();
      }
    }),
    getOptionProps: ({
      index: N,
      option: F
    }) => {
      const pe = st(F), Ae = C ? C(F) : !1;
      return {
        key: x?.(F) ?? Y(F),
        tabIndex: -1,
        role: "option",
        id: `${oe}-option-${N}`,
        onMouseMove: _o,
        onClick: Ol,
        onTouchStart: Bl,
        "data-option-index": N,
        "aria-disabled": Ae,
        "aria-selected": pe
      };
    },
    id: oe,
    inputValue: ce,
    value: j,
    dirty: yn,
    expanded: be && Q,
    popupOpen: be,
    focused: Ke || H !== -1,
    anchorEl: Q,
    setAnchorEl: xe,
    focusedItem: H,
    // deprecated
    focusedTag: H,
    groupedOptions: Ls
  };
}
function Rv(e) {
  return ee("MuiListSubheader", e);
}
J("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const $v = (e) => {
  const {
    classes: t,
    color: o,
    disableGutters: r,
    inset: n,
    disableSticky: s
  } = e, a = {
    root: ["root", o !== "default" && `color${L(o)}`, !r && "gutters", n && "inset", !s && "sticky"]
  };
  return te(a, Rv, t);
}, Iv = O("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${L(o.color)}`], !o.disableGutters && t.gutters, o.inset && t.inset, !o.disableSticky && t.sticky];
  }
})(me(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), ti = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: n,
    color: s = "default",
    component: a = "li",
    disableGutters: i = !1,
    disableSticky: l = !1,
    inset: d = !1,
    ...u
  } = r, m = {
    ...r,
    color: s,
    component: a,
    disableGutters: i,
    disableSticky: l,
    inset: d
  }, h = $v(m);
  return /* @__PURE__ */ b.jsx(Iv, {
    as: a,
    className: V(h.root, n),
    ref: o,
    ownerState: m,
    ...u
  });
});
ti && (ti.muiSkipListHighlight = !0);
function Dv(e) {
  const {
    badgeContent: t,
    invisible: o = !1,
    max: r = 99,
    showZero: n = !1
  } = e, s = xs({
    badgeContent: t,
    max: r
  });
  let a = o;
  o === !1 && t === 0 && !n && (a = !0);
  const {
    badgeContent: i,
    max: l = r
  } = a ? s : e, d = i && Number(i) > l ? `${l}+` : i;
  return {
    badgeContent: i,
    invisible: a,
    max: l,
    displayValue: d
  };
}
function Av(e) {
  return ee("MuiBadge", e);
}
const Ev = J("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), $n = 10, In = 4, Bv = (e) => {
  const {
    color: t,
    anchorOrigin: o,
    invisible: r,
    overlap: n,
    variant: s,
    classes: a = {}
  } = e, i = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${L(o.vertical)}${L(o.horizontal)}`, `anchorOrigin${L(o.vertical)}${L(o.horizontal)}${L(n)}`, `overlap${L(n)}`, t !== "default" && `color${L(t)}`]
  };
  return te(i, Av, a);
}, Ov = O("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), Lv = O("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.badge, t[o.variant], t[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}${L(o.overlap)}`], o.color !== "default" && t[`color${L(o.color)}`], o.invisible && t.invisible];
  }
})(me(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: $n * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: $n * 2,
  borderRadius: $n,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(je(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main,
      color: (e.vars || e).palette[t].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: In,
      height: In * 2,
      minWidth: In * 2,
      padding: 0
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.leavingScreen
      })
    }
  }, {
    style: ({
      ownerState: t
    }) => {
      const {
        vertical: o,
        horizontal: r
      } = t.anchorOrigin, n = t.overlap === "circular" ? "14%" : 0;
      return {
        "--Badge-translateX": r === "right" ? "50%" : "-50%",
        "--Badge-translateY": o === "top" ? "-50%" : "50%",
        top: o === "top" ? n : "initial",
        bottom: o === "bottom" ? n : "initial",
        right: r === "right" ? n : "initial",
        left: r === "left" ? n : "initial",
        transform: "scale(1) translate(var(--Badge-translateX), var(--Badge-translateY))",
        transformOrigin: `${r === "right" ? "100%" : "0%"} ${o === "top" ? "0%" : "100%"}`,
        [`&.${Ev.invisible}`]: {
          transform: "scale(0) translate(var(--Badge-translateX), var(--Badge-translateY))"
        }
      };
    }
  }]
})));
function oi(e) {
  return {
    vertical: e?.vertical ?? "top",
    horizontal: e?.horizontal ?? "right"
  };
}
const $C = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: n,
    className: s,
    classes: a,
    component: i,
    components: l = {},
    componentsProps: d = {},
    children: u,
    overlap: m = "rectangular",
    color: h = "default",
    invisible: f = !1,
    max: g = 99,
    badgeContent: v,
    slots: y,
    slotProps: S,
    showZero: w = !1,
    variant: C = "standard",
    ...x
  } = r, {
    badgeContent: P,
    invisible: k,
    max: E,
    displayValue: M
  } = Dv({
    max: g,
    invisible: f,
    badgeContent: v,
    showZero: w
  }), R = xs({
    anchorOrigin: oi(n),
    color: h,
    overlap: m,
    variant: C,
    badgeContent: v
  }), $ = k || P == null && C !== "dot", {
    color: B = h,
    overlap: p = m,
    anchorOrigin: T,
    variant: I = C
  } = $ ? R : r, A = oi(T), D = I !== "dot" ? M : void 0, W = {
    ...r,
    badgeContent: P,
    invisible: $,
    max: E,
    displayValue: D,
    showZero: w,
    anchorOrigin: A,
    color: B,
    overlap: p,
    variant: I
  }, q = Bv(W), U = {
    slots: {
      root: y?.root ?? l.Root,
      badge: y?.badge ?? l.Badge
    },
    slotProps: {
      root: S?.root ?? d.root,
      badge: S?.badge ?? d.badge
    }
  }, [se, _] = de("root", {
    elementType: Ov,
    externalForwardedProps: {
      ...U,
      ...x
    },
    ownerState: W,
    className: V(q.root, s),
    ref: o,
    additionalProps: {
      as: i
    }
  }), [re, ge] = de("badge", {
    elementType: Lv,
    externalForwardedProps: U,
    ownerState: W,
    className: q.badge
  });
  return /* @__PURE__ */ b.jsxs(se, {
    ..._,
    children: [u, /* @__PURE__ */ b.jsx(re, {
      ...ge,
      children: D
    })]
  });
}), Nv = J("MuiBox", ["root"]), zv = vs(), IC = Nd({
  themeId: At,
  defaultTheme: zv,
  defaultClassName: Nv.root,
  generateClassName: Pi.generate
});
function Fv(e) {
  return ee("MuiCard", e);
}
J("MuiCard", ["root"]);
const jv = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, Fv, t);
}, Wv = O(Vo, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), DC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCard"
  }), {
    className: n,
    raised: s = !1,
    ...a
  } = r, i = {
    ...r,
    raised: s
  }, l = jv(i);
  return /* @__PURE__ */ b.jsx(Wv, {
    className: V(l.root, n),
    elevation: s ? 8 : void 0,
    ref: o,
    ownerState: i,
    ...a
  });
});
function Vv(e) {
  return ee("MuiCardActionArea", e);
}
const Dn = J("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]), Hv = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    focusHighlight: ["focusHighlight"]
  }, Vv, t);
}, Uv = O(Et, {
  name: "MuiCardActionArea",
  slot: "Root"
})(me(({
  theme: e
}) => ({
  display: "block",
  textAlign: "inherit",
  borderRadius: "inherit",
  // for Safari to work https://github.com/mui/material-ui/issues/36285.
  width: "100%",
  [`&:hover .${Dn.focusHighlight}`]: {
    opacity: (e.vars || e).palette.action.hoverOpacity,
    "@media (hover: none)": {
      opacity: 0
    }
  },
  [`&.${Dn.focusVisible} .${Dn.focusHighlight}`]: {
    opacity: (e.vars || e).palette.action.focusOpacity
  }
}))), _v = O("span", {
  name: "MuiCardActionArea",
  slot: "FocusHighlight"
})(me(({
  theme: e
}) => ({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
  opacity: 0,
  backgroundColor: "currentcolor",
  transition: e.transitions.create("opacity", {
    duration: e.transitions.duration.short
  })
}))), AC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCardActionArea"
  }), {
    children: n,
    className: s,
    focusVisibleClassName: a,
    slots: i = {},
    slotProps: l = {},
    ...d
  } = r, u = r, m = Hv(u), h = {
    slots: i,
    slotProps: l
  }, [f, g] = de("root", {
    elementType: Uv,
    externalForwardedProps: {
      ...h,
      ...d
    },
    shouldForwardComponentProp: !0,
    ownerState: u,
    ref: o,
    className: V(m.root, s),
    additionalProps: {
      focusVisibleClassName: V(a, m.focusVisible)
    }
  }), [v, y] = de("focusHighlight", {
    elementType: _v,
    externalForwardedProps: h,
    ownerState: u,
    className: m.focusHighlight
  });
  return /* @__PURE__ */ b.jsxs(f, {
    ...g,
    children: [n, /* @__PURE__ */ b.jsx(v, {
      ...y
    })]
  });
});
function Gv(e) {
  return ee("MuiCardContent", e);
}
J("MuiCardContent", ["root"]);
const Kv = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, Gv, t);
}, Yv = O("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), EC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCardContent"
  }), {
    className: n,
    component: s = "div",
    ...a
  } = r, i = {
    ...r,
    component: s
  }, l = Kv(i);
  return /* @__PURE__ */ b.jsx(Yv, {
    as: s,
    className: V(l.root, n),
    ownerState: i,
    ref: o,
    ...a
  });
});
function qv(e) {
  return ee("MuiCardHeader", e);
}
const _r = J("MuiCardHeader", ["root", "avatar", "action", "content", "title", "subheader"]), Xv = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"]
  }, qv, t);
}, Qv = O("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${_r.title}`]: t.title
  }, {
    [`& .${_r.subheader}`]: t.subheader
  }, t.root]
})({
  display: "flex",
  alignItems: "center",
  padding: 16
}), Zv = O("div", {
  name: "MuiCardHeader",
  slot: "Avatar"
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16
}), Jv = O("div", {
  name: "MuiCardHeader",
  slot: "Action"
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
}), e0 = O("div", {
  name: "MuiCardHeader",
  slot: "Content"
})({
  flex: "1 1 auto",
  // Combine this and the below selector once https://github.com/emotion-js/emotion/issues/3366 is solved
  [`.${Fr.root}:where(& .${_r.title})`]: {
    display: "block"
  },
  [`.${Fr.root}:where(& .${_r.subheader})`]: {
    display: "block"
  }
}), BC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCardHeader"
  }), {
    action: n,
    avatar: s,
    component: a = "div",
    disableTypography: i = !1,
    subheader: l,
    subheaderTypographyProps: d,
    title: u,
    titleTypographyProps: m,
    slots: h = {},
    slotProps: f = {},
    ...g
  } = r, v = {
    ...r,
    component: a,
    disableTypography: i
  }, y = Xv(v), S = {
    slots: h,
    slotProps: {
      title: m,
      subheader: d,
      ...f
    }
  };
  let w = u;
  const [C, x] = de("title", {
    className: y.title,
    elementType: pt,
    externalForwardedProps: S,
    ownerState: v,
    additionalProps: {
      variant: s ? "body2" : "h5",
      component: "span"
    }
  });
  w != null && w.type !== pt && !i && (w = /* @__PURE__ */ b.jsx(C, {
    ...x,
    children: w
  }));
  let P = l;
  const [k, E] = de("subheader", {
    className: y.subheader,
    elementType: pt,
    externalForwardedProps: S,
    ownerState: v,
    additionalProps: {
      variant: s ? "body2" : "body1",
      color: "textSecondary",
      component: "span"
    }
  });
  P != null && P.type !== pt && !i && (P = /* @__PURE__ */ b.jsx(k, {
    ...E,
    children: P
  }));
  const [M, R] = de("root", {
    ref: o,
    className: y.root,
    elementType: Qv,
    externalForwardedProps: {
      ...S,
      ...g,
      component: a
    },
    ownerState: v
  }), [$, B] = de("avatar", {
    className: y.avatar,
    elementType: Zv,
    externalForwardedProps: S,
    ownerState: v
  }), [p, T] = de("content", {
    className: y.content,
    elementType: e0,
    externalForwardedProps: S,
    ownerState: v
  }), [I, A] = de("action", {
    className: y.action,
    elementType: Jv,
    externalForwardedProps: S,
    ownerState: v
  });
  return /* @__PURE__ */ b.jsxs(M, {
    ...R,
    children: [s && /* @__PURE__ */ b.jsx($, {
      ...B,
      children: s
    }), /* @__PURE__ */ b.jsxs(p, {
      ...T,
      children: [w, P]
    }), n && /* @__PURE__ */ b.jsx(I, {
      ...A,
      children: n
    })]
  });
});
function t0(e) {
  return ee("MuiCardMedia", e);
}
J("MuiCardMedia", ["root", "media", "img"]);
const o0 = (e) => {
  const {
    classes: t,
    isMediaComponent: o,
    isImageComponent: r
  } = e;
  return te({
    root: ["root", o && "media", r && "img"]
  }, t0, t);
}, r0 = O("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      isMediaComponent: r,
      isImageComponent: n
    } = o;
    return [t.root, r && t.media, n && t.img];
  }
})({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  variants: [{
    props: {
      isMediaComponent: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      isImageComponent: !0
    },
    style: {
      objectFit: "cover"
    }
  }]
}), n0 = ["video", "audio", "picture", "iframe", "img"], s0 = ["picture", "img"], OC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCardMedia"
  }), {
    children: n,
    className: s,
    component: a = "div",
    image: i,
    src: l,
    style: d,
    ...u
  } = r, m = n0.includes(a), h = !m && i ? {
    backgroundImage: `url("${i}")`,
    ...d
  } : d, f = {
    ...r,
    component: a,
    isMediaComponent: m,
    isImageComponent: s0.includes(a)
  }, g = o0(f);
  return /* @__PURE__ */ b.jsx(r0, {
    className: V(g.root, s),
    as: a,
    role: !m && i ? "img" : void 0,
    ref: o,
    style: h,
    ownerState: f,
    src: m ? i || l : void 0,
    ...u,
    children: n
  });
});
function a0(e) {
  return ee("PrivateSwitchBase", e);
}
J("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const i0 = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: n
  } = e, s = {
    root: ["root", o && "checked", r && "disabled", n && `edge${L(n)}`],
    input: ["input"]
  };
  return te(s, a0, t);
}, l0 = O(Et, {
  name: "MuiSwitchBase"
})({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), c0 = O("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Ct
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), As = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: n,
    checkedIcon: s,
    defaultChecked: a,
    disabled: i,
    disableFocusRipple: l = !1,
    edge: d = !1,
    icon: u,
    id: m,
    inputProps: h,
    inputRef: f,
    name: g,
    onBlur: v,
    onChange: y,
    onFocus: S,
    readOnly: w,
    required: C = !1,
    tabIndex: x,
    type: P,
    value: k,
    slots: E = {},
    slotProps: M = {},
    ...R
  } = t, [$, B] = wt({
    controlled: n,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), p = Wt(), T = (oe) => {
    S && S(oe), p && p.onFocus && p.onFocus(oe);
  }, I = (oe) => {
    v && v(oe), p && p.onBlur && p.onBlur(oe);
  }, A = (oe) => {
    if (oe.nativeEvent.defaultPrevented || w)
      return;
    const Y = oe.target.checked;
    B(Y), y && y(oe, Y);
  };
  let D = i;
  p && typeof D > "u" && (D = p.disabled);
  const W = P === "checkbox" || P === "radio", q = {
    ...t,
    checked: $,
    disabled: D,
    disableFocusRipple: l,
    edge: d
  }, U = i0(q), se = {
    slots: E,
    slotProps: {
      input: h,
      ...M
    }
  }, [_, re] = de("root", {
    ref: o,
    elementType: l0,
    className: U.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...se,
      component: "span",
      ...R
    },
    getSlotProps: (oe) => ({
      ...oe,
      onFocus: (Y) => {
        oe.onFocus?.(Y), T(Y);
      },
      onBlur: (Y) => {
        oe.onBlur?.(Y), I(Y);
      }
    }),
    ownerState: q,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !l,
      role: void 0,
      tabIndex: null
    }
  }), [ge, Pe] = de("input", {
    ref: f,
    elementType: c0,
    className: U.input,
    externalForwardedProps: se,
    getSlotProps: (oe) => ({
      ...oe,
      onChange: (Y) => {
        oe.onChange?.(Y), A(Y);
      }
    }),
    ownerState: q,
    additionalProps: {
      autoFocus: r,
      checked: n,
      defaultChecked: a,
      disabled: D,
      id: W ? m : void 0,
      name: g,
      readOnly: w,
      required: C,
      tabIndex: x,
      type: P,
      ...P === "checkbox" && k === void 0 ? {} : {
        value: k
      }
    }
  });
  return /* @__PURE__ */ b.jsxs(_, {
    ...re,
    children: [/* @__PURE__ */ b.jsx(ge, {
      ...Pe
    }), $ ? s : u]
  });
}), d0 = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
})), u0 = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
})), p0 = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}));
function f0(e) {
  return ee("MuiCheckbox", e);
}
const An = J("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), m0 = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: n
  } = e, s = {
    root: ["root", o && "indeterminate", `color${L(r)}`, `size${L(n)}`]
  }, a = te(s, f0, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, h0 = O(As, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.indeterminate && t.indeterminate, t[`size${L(o.size)}`], o.color !== "default" && t[`color${L(o.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${An.checked}, &.${An.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${An.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), g0 = /* @__PURE__ */ b.jsx(u0, {}), y0 = /* @__PURE__ */ b.jsx(d0, {}), b0 = /* @__PURE__ */ b.jsx(p0, {}), LC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: n = g0,
    color: s = "primary",
    icon: a = y0,
    indeterminate: i = !1,
    indeterminateIcon: l = b0,
    inputProps: d,
    size: u = "medium",
    disableRipple: m = !1,
    className: h,
    slots: f = {},
    slotProps: g = {},
    ...v
  } = r, y = i ? l : a, S = i ? l : n, w = {
    ...r,
    disableRipple: m,
    color: s,
    indeterminate: i,
    size: u
  }, C = m0(w), x = g.input ?? d, [P, k] = de("root", {
    ref: o,
    elementType: h0,
    className: V(C.root, h),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: f,
      slotProps: g,
      ...v
    },
    ownerState: w,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ c.cloneElement(y, {
        fontSize: y.props.fontSize ?? u
      }),
      checkedIcon: /* @__PURE__ */ c.cloneElement(S, {
        fontSize: S.props.fontSize ?? u
      }),
      disableRipple: m,
      slots: f,
      slotProps: {
        input: ol(typeof x == "function" ? x(w) : x, {
          "data-indeterminate": i
        })
      }
    }
  });
  return /* @__PURE__ */ b.jsx(P, {
    ...k,
    classes: C
  });
});
function ri(e) {
  return e.substring(2).toLowerCase();
}
function v0(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function NC(e) {
  const {
    children: t,
    disableReactTree: o = !1,
    mouseEvent: r = "onClick",
    onClickAway: n,
    touchEvent: s = "onTouchEnd"
  } = e, a = c.useRef(!1), i = c.useRef(null), l = c.useRef(!1), d = c.useRef(!1);
  c.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = Xe(wo(t), i), m = Me((g) => {
    const v = d.current;
    d.current = !1;
    const y = yt(i.current);
    if (!l.current || !i.current || "clientX" in g && v0(g, y))
      return;
    if (a.current) {
      a.current = !1;
      return;
    }
    let S;
    g.composedPath ? S = g.composedPath().includes(i.current) : S = !y.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ) || i.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ), !S && (o || !v) && n(g);
  }), h = (g) => (v) => {
    d.current = !0;
    const y = t.props[g];
    y && y(v);
  }, f = {
    ref: u
  };
  return s !== !1 && (f[s] = h(s)), c.useEffect(() => {
    if (s !== !1) {
      const g = ri(s), v = yt(i.current), y = () => {
        a.current = !0;
      };
      return v.addEventListener(g, m), v.addEventListener("touchmove", y), () => {
        v.removeEventListener(g, m), v.removeEventListener("touchmove", y);
      };
    }
  }, [m, s]), r !== !1 && (f[r] = h(r)), c.useEffect(() => {
    if (r !== !1) {
      const g = ri(r), v = yt(i.current);
      return v.addEventListener(g, m), () => {
        v.removeEventListener(g, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ c.cloneElement(t, f);
}
const Jn = typeof Ss({}) == "function", x0 = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), C0 = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Rl = (e, t = !1) => {
  const o = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, a]) => {
    const i = e.getColorSchemeSelector(s);
    i.startsWith("@") ? o[i] = {
      ":root": {
        colorScheme: a.palette?.mode
      }
    } : o[i.replace(/\s*&/, "")] = {
      colorScheme: a.palette?.mode
    };
  });
  let r = {
    html: x0(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...C0(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...o
  };
  const n = e.components?.MuiCssBaseline?.styleOverrides;
  return n && (r = [r, n]), r;
}, Er = "mui-ecs", S0 = (e) => {
  const t = Rl(e, !1), o = Array.isArray(t) ? t[0] : t;
  return !e.vars && o && (o.html[`:root:has(${Er})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, n]) => {
    const s = e.getColorSchemeSelector(r);
    s.startsWith("@") ? o[s] = {
      [`:root:not(:has(.${Er}))`]: {
        colorScheme: n.palette?.mode
      }
    } : o[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Er}))`]: {
        colorScheme: n.palette?.mode
      }
    };
  }), t;
}, w0 = Ss(Jn ? ({
  theme: e,
  enableColorScheme: t
}) => Rl(e, t) : ({
  theme: e
}) => S0(e));
function zC(e) {
  const t = he({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [Jn && /* @__PURE__ */ b.jsx(w0, {
      enableColorScheme: r
    }), !Jn && !r && /* @__PURE__ */ b.jsx("span", {
      className: Er,
      style: {
        display: "none"
      }
    }), o]
  });
}
const k0 = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, gb, t);
}, P0 = O(pt, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), FC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: n,
    id: s,
    ...a
  } = r, i = r, l = k0(i), {
    titleId: d = s
  } = c.useContext(Ml);
  return /* @__PURE__ */ b.jsx(P0, {
    component: "h2",
    className: V(l.root, n),
    ownerState: i,
    ref: o,
    variant: "h6",
    id: s ?? d,
    ...a
  });
});
function M0(e) {
  return ee("MuiFormControlLabel", e);
}
const nr = J("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), T0 = (e) => {
  const {
    classes: t,
    disabled: o,
    labelPlacement: r,
    error: n,
    required: s
  } = e, a = {
    root: ["root", o && "disabled", `labelPlacement${L(r)}`, n && "error", s && "required"],
    label: ["label", o && "disabled"],
    asterisk: ["asterisk", n && "error"]
  };
  return te(a, M0, t);
}, R0 = O("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${nr.label}`]: t.label
    }, t.root, t[`labelPlacement${L(o.labelPlacement)}`]];
  }
})(me(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${nr.disabled}`]: {
    cursor: "default"
  },
  [`& .${nr.label}`]: {
    [`&.${nr.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), $0 = O("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(me(({
  theme: e
}) => ({
  [`&.${nr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), jC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: n,
    className: s,
    componentsProps: a = {},
    control: i,
    disabled: l,
    disableTypography: d,
    inputRef: u,
    label: m,
    labelPlacement: h = "end",
    name: f,
    onChange: g,
    required: v,
    slots: y = {},
    slotProps: S = {},
    value: w,
    ...C
  } = r, x = Wt(), P = l ?? i.props.disabled ?? x?.disabled, k = v ?? i.props.required, E = {
    disabled: P,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((A) => {
    typeof i.props[A] > "u" && typeof r[A] < "u" && (E[A] = r[A]);
  });
  const M = co({
    props: r,
    muiFormControl: x,
    states: ["error"]
  }), R = {
    ...r,
    disabled: P,
    labelPlacement: h,
    required: k,
    error: M.error
  }, $ = T0(R), B = {
    slots: y,
    slotProps: {
      ...a,
      ...S
    }
  }, [p, T] = de("typography", {
    elementType: pt,
    externalForwardedProps: B,
    ownerState: R
  });
  let I = m;
  return I != null && I.type !== pt && !d && (I = /* @__PURE__ */ b.jsx(p, {
    component: "span",
    ...T,
    className: V($.label, T?.className),
    children: I
  })), /* @__PURE__ */ b.jsxs(R0, {
    className: V($.root, s),
    ownerState: R,
    ref: o,
    ...C,
    children: [/* @__PURE__ */ c.cloneElement(i, E), k ? /* @__PURE__ */ b.jsxs("div", {
      children: [I, /* @__PURE__ */ b.jsxs($0, {
        ownerState: R,
        "aria-hidden": !0,
        className: $.asterisk,
        children: [" ", "*"]
      })]
    }) : I]
  });
});
function I0(e) {
  return ee("MuiFormGroup", e);
}
J("MuiFormGroup", ["root", "row", "error"]);
const D0 = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return te({
    root: ["root", o && "row", r && "error"]
  }, I0, t);
}, A0 = O("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), E0 = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: n,
    row: s = !1,
    ...a
  } = r, i = Wt(), l = co({
    props: r,
    muiFormControl: i,
    states: ["error"]
  }), d = {
    ...r,
    row: s,
    error: l.error
  }, u = D0(d);
  return /* @__PURE__ */ b.jsx(A0, {
    className: V(u.root, n),
    ownerState: d,
    ref: o,
    ...a
  });
}), WC = ju({
  createStyledComponent: O("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: o
      } = e;
      return [t.root, o.container && t.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (e) => he({
    props: e,
    name: "MuiGrid"
  }),
  useTheme: jt
});
function B0(e) {
  return ee("MuiIcon", e);
}
const VC = J("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]), O0 = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, n = {
    root: ["root", t !== "inherit" && `color${L(t)}`, `fontSize${L(o)}`]
  };
  return te(n, B0, r);
}, L0 = O("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${L(o.color)}`], t[`fontSize${L(o.fontSize)}`]];
  }
})(me(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://issues.chromium.org/issues/41375697
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  variants: [{
    props: {
      fontSize: "inherit"
    },
    style: {
      fontSize: "inherit"
    }
  }, {
    props: {
      fontSize: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(20)
    }
  }, {
    props: {
      fontSize: "medium"
    },
    style: {
      fontSize: e.typography.pxToRem(24)
    }
  }, {
    props: {
      fontSize: "large"
    },
    style: {
      fontSize: e.typography.pxToRem(36)
    }
  }, {
    props: {
      color: "action"
    },
    style: {
      color: (e.vars || e).palette.action.active
    }
  }, {
    props: {
      color: "disabled"
    },
    style: {
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: void 0
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), N0 = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiIcon"
  }), {
    baseClassName: n = "material-icons",
    className: s,
    color: a = "inherit",
    component: i = "span",
    fontSize: l = "medium",
    ...d
  } = r, u = {
    ...r,
    baseClassName: n,
    color: a,
    component: i,
    fontSize: l
  }, m = O0(u);
  return /* @__PURE__ */ b.jsx(L0, {
    as: i,
    className: V(
      n,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      m.root,
      s
    ),
    ownerState: u,
    "aria-hidden": !0,
    ref: o,
    ...d
  });
});
N0.muiName = "Icon";
function z0(e) {
  return ee("MuiImageList", e);
}
J("MuiImageList", ["root", "masonry", "quilted", "standard", "woven"]);
const $l = /* @__PURE__ */ c.createContext({}), F0 = (e) => {
  const {
    classes: t,
    variant: o
  } = e;
  return te({
    root: ["root", o]
  }, z0, t);
}, j0 = O("ul", {
  name: "MuiImageList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant]];
  }
})({
  display: "grid",
  overflowY: "auto",
  listStyle: "none",
  padding: 0,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  variants: [{
    props: {
      variant: "masonry"
    },
    style: {
      display: "block"
    }
  }]
}), HC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiImageList"
  }), {
    children: n,
    className: s,
    cols: a = 2,
    component: i = "ul",
    rowHeight: l = "auto",
    gap: d = 4,
    style: u,
    variant: m = "standard",
    ...h
  } = r, f = c.useMemo(() => ({
    rowHeight: l,
    gap: d,
    variant: m
  }), [l, d, m]), g = m === "masonry" ? {
    columnCount: a,
    columnGap: d,
    ...u
  } : {
    gridTemplateColumns: `repeat(${a}, 1fr)`,
    gap: d,
    ...u
  }, v = {
    ...r,
    component: i,
    gap: d,
    rowHeight: l,
    variant: m
  }, y = F0(v);
  return /* @__PURE__ */ b.jsx(j0, {
    as: i,
    className: V(y.root, y[m], s),
    ref: o,
    style: g,
    ownerState: v,
    ...h,
    children: /* @__PURE__ */ b.jsx($l.Provider, {
      value: f,
      children: n
    })
  });
});
function W0(e) {
  return ee("MuiImageListItem", e);
}
const En = J("MuiImageListItem", ["root", "img", "standard", "woven", "masonry", "quilted"]), V0 = (e) => {
  const {
    classes: t,
    variant: o
  } = e;
  return te({
    root: ["root", o],
    img: ["img"]
  }, W0, t);
}, H0 = O("li", {
  name: "MuiImageListItem",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${En.img}`]: t.img
    }, t.root, t[o.variant]];
  }
})({
  display: "block",
  position: "relative",
  [`& .${En.img}`]: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    display: "block"
  },
  variants: [{
    props: {
      variant: "standard"
    },
    style: {
      // For titlebar under list item
      display: "flex",
      flexDirection: "column"
    }
  }, {
    props: {
      variant: "woven"
    },
    style: {
      height: "100%",
      alignSelf: "center",
      "&:nth-of-type(even)": {
        height: "70%"
      }
    }
  }, {
    props: {
      variant: "standard"
    },
    style: {
      [`& .${En.img}`]: {
        height: "auto",
        flexGrow: 1
      }
    }
  }]
}), UC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiImageListItem"
  }), {
    children: n,
    className: s,
    cols: a = 1,
    component: i = "li",
    rows: l = 1,
    style: d,
    ...u
  } = r, {
    rowHeight: m = "auto",
    gap: h,
    variant: f
  } = c.useContext($l);
  let g = "auto";
  f === "woven" ? g = void 0 : m !== "auto" && (g = m * l + h * (l - 1));
  const v = {
    ...r,
    cols: a,
    component: i,
    gap: h,
    rowHeight: m,
    rows: l,
    variant: f
  }, y = V0(v);
  return /* @__PURE__ */ b.jsx(H0, {
    as: i,
    className: V(y.root, y[f], s),
    ref: o,
    style: {
      height: g,
      gridColumnEnd: f !== "masonry" ? `span ${a}` : void 0,
      gridRowEnd: f !== "masonry" ? `span ${l}` : void 0,
      marginBottom: f === "masonry" ? h : void 0,
      breakInside: f === "masonry" ? "avoid" : void 0,
      ...d
    },
    ownerState: v,
    ...u,
    children: c.Children.map(n, (S) => /* @__PURE__ */ c.isValidElement(S) ? S.type === "img" || Eo(S, ["Image"]) ? /* @__PURE__ */ c.cloneElement(S, {
      className: V(y.img, S.props.className)
    }) : S : null)
  });
});
function U0(e) {
  return ee("MuiLinearProgress", e);
}
J("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "bar1", "bar2", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const es = 4, ts = Yt`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, _0 = typeof ts != "string" ? lo`
        animation: ${ts} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, os = Yt`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, G0 = typeof os != "string" ? lo`
        animation: ${os} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, rs = Yt`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, K0 = typeof rs != "string" ? lo`
        animation: ${rs} 3s infinite linear;
      ` : null, Y0 = (e) => {
  const {
    classes: t,
    variant: o,
    color: r
  } = e, n = {
    root: ["root", `color${L(r)}`, o],
    dashed: ["dashed", `dashedColor${L(r)}`],
    bar1: ["bar", "bar1", `barColor${L(r)}`, (o === "indeterminate" || o === "query") && "bar1Indeterminate", o === "determinate" && "bar1Determinate", o === "buffer" && "bar1Buffer"],
    bar2: ["bar", "bar2", o !== "buffer" && `barColor${L(r)}`, o === "buffer" && `color${L(r)}`, (o === "indeterminate" || o === "query") && "bar2Indeterminate", o === "buffer" && "bar2Buffer"]
  };
  return te(n, U0, t);
}, Es = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.5), q0 = O("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`color${L(o.color)}`], t[o.variant]];
  }
})(me(({
  theme: e
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Es(e, t)
    }
  })), {
    props: ({
      ownerState: t
    }) => t.color === "inherit" && t.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}))), X0 = O("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.dashed, t[`dashedColor${L(o.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => {
    const o = Es(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${o} 0%, ${o} 16%, transparent 42%)`
      }
    };
  })]
})), K0 || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${rs} 3s infinite linear`
}), Q0 = O("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.bar, t.bar1, t[`barColor${L(o.color)}`], (o.variant === "indeterminate" || o.variant === "query") && t.bar1Indeterminate, o.variant === "determinate" && t.bar1Determinate, o.variant === "buffer" && t.bar1Buffer];
  }
})(me(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      backgroundColor: "currentColor"
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main
    }
  })), {
    props: {
      variant: "determinate"
    },
    style: {
      transition: `transform .${es}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${es}s linear`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: _0 || {
      animation: `${ts} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), Z0 = O("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.bar, t.bar2, t[`barColor${L(o.color)}`], (o.variant === "indeterminate" || o.variant === "query") && t.bar2Indeterminate, o.variant === "buffer" && t.bar2Buffer];
  }
})(me(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
    }
  })), {
    props: ({
      ownerState: t
    }) => t.variant !== "buffer" && t.color !== "inherit",
    style: {
      backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant !== "buffer" && t.color === "inherit",
    style: {
      backgroundColor: "currentColor"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t,
      variant: "buffer"
    },
    style: {
      backgroundColor: Es(e, t),
      transition: `transform .${es}s linear`
    }
  })), {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" || t.variant === "query",
    style: G0 || {
      animation: `${os} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), _C = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: n,
    color: s = "primary",
    value: a,
    valueBuffer: i,
    variant: l = "indeterminate",
    ...d
  } = r, u = {
    ...r,
    color: s,
    variant: l
  }, m = Y0(u), h = qt(), f = {}, g = {
    bar1: {},
    bar2: {}
  };
  if ((l === "determinate" || l === "buffer") && a !== void 0) {
    f["aria-valuenow"] = Math.round(a), f["aria-valuemin"] = 0, f["aria-valuemax"] = 100;
    let v = a - 100;
    h && (v = -v), g.bar1.transform = `translateX(${v}%)`;
  }
  if (l === "buffer" && i !== void 0) {
    let v = (i || 0) - 100;
    h && (v = -v), g.bar2.transform = `translateX(${v}%)`;
  }
  return /* @__PURE__ */ b.jsxs(q0, {
    className: V(m.root, n),
    ownerState: u,
    role: "progressbar",
    ...f,
    ref: o,
    ...d,
    children: [l === "buffer" ? /* @__PURE__ */ b.jsx(X0, {
      className: m.dashed,
      ownerState: u
    }) : null, /* @__PURE__ */ b.jsx(Q0, {
      className: m.bar1,
      ownerState: u,
      style: g.bar1
    }), l === "determinate" ? null : /* @__PURE__ */ b.jsx(Z0, {
      className: m.bar2,
      ownerState: u,
      style: g.bar2
    })]
  });
});
function J0(e) {
  return ee("MuiLink", e);
}
const ex = J("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), tx = ({
  theme: e,
  ownerState: t
}) => {
  const o = t.color;
  if ("colorSpace" in e && e.colorSpace) {
    const s = Gt(e, `palette.${o}.main`) || Gt(e, `palette.${o}`) || t.color;
    return e.alpha(s, 0.4);
  }
  const r = Gt(e, `palette.${o}.main`, !1) || Gt(e, `palette.${o}`, !1) || t.color, n = Gt(e, `palette.${o}.mainChannel`) || Gt(e, `palette.${o}Channel`);
  return "vars" in e && n ? `rgba(${n} / 0.4)` : zt(r, 0.4);
}, ni = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, ox = (e) => {
  const {
    classes: t,
    component: o,
    focusVisible: r,
    underline: n
  } = e, s = {
    root: ["root", `underline${L(n)}`, o === "button" && "button", r && "focusVisible"]
  };
  return te(s, J0, t);
}, rx = O(pt, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`underline${L(o.underline)}`], o.component === "button" && t.button];
  }
})(me(({
  theme: e
}) => ({
  variants: [{
    props: {
      underline: "none"
    },
    style: {
      textDecoration: "none"
    }
  }, {
    props: {
      underline: "hover"
    },
    style: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }, {
    props: {
      underline: "always"
    },
    style: {
      textDecoration: "underline",
      "&:hover": {
        textDecorationColor: "inherit"
      }
    }
  }, {
    props: ({
      underline: t,
      ownerState: o
    }) => t === "always" && o.color !== "inherit",
    style: {
      textDecorationColor: "var(--Link-underlineColor)"
    }
  }, {
    props: ({
      underline: t,
      ownerState: o
    }) => t === "always" && o.color === "inherit",
    style: e.colorSpace ? {
      textDecorationColor: e.alpha("currentColor", 0.4)
    } : null
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      underline: "always",
      color: t
    },
    style: {
      "--Link-underlineColor": e.alpha((e.vars || e).palette[t].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": e.alpha((e.vars || e).palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": e.alpha((e.vars || e).palette.text.secondary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textDisabled"
    },
    style: {
      "--Link-underlineColor": (e.vars || e).palette.text.disabled
    }
  }, {
    props: {
      component: "button"
    },
    style: {
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      // Reset
      WebkitAppearance: "none",
      // Reset
      "&::-moz-focus-inner": {
        borderStyle: "none"
        // Remove Firefox dotted outline.
      },
      [`&.${ex.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), GC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiLink"
  }), n = jt(), {
    className: s,
    color: a = "primary",
    component: i = "a",
    onBlur: l,
    onFocus: d,
    TypographyClasses: u,
    underline: m = "always",
    variant: h = "inherit",
    sx: f,
    ...g
  } = r, [v, y] = c.useState(!1), S = (P) => {
    No(P.target) || y(!1), l && l(P);
  }, w = (P) => {
    No(P.target) && y(!0), d && d(P);
  }, C = {
    ...r,
    color: a,
    component: i,
    focusVisible: v,
    underline: m,
    variant: h
  }, x = ox(C);
  return /* @__PURE__ */ b.jsx(rx, {
    color: a,
    className: V(x.root, s),
    classes: u,
    component: i,
    onBlur: S,
    onFocus: w,
    ref: o,
    ownerState: C,
    variant: h,
    ...g,
    sx: [...ni[a] === void 0 ? [{
      color: a
    }] : [], ...Array.isArray(f) ? f : [f]],
    style: {
      ...g.style,
      ...m === "always" && a !== "inherit" && !ni[a] && {
        "--Link-underlineColor": tx({
          theme: n,
          ownerState: C
        })
      }
    }
  });
}), nx = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), sx = nt(/* @__PURE__ */ b.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
})), ax = O("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: Ct
})({
  position: "relative",
  display: "flex"
}), ix = O(nx, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), lx = O(sx, {
  name: "MuiRadioButtonIcon"
})(me(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function Il(e) {
  const {
    checked: t = !1,
    classes: o = {},
    fontSize: r
  } = e, n = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ b.jsxs(ax, {
    className: o.root,
    ownerState: n,
    children: [/* @__PURE__ */ b.jsx(ix, {
      fontSize: r,
      className: o.background,
      ownerState: n
    }), /* @__PURE__ */ b.jsx(lx, {
      fontSize: r,
      className: o.dot,
      ownerState: n
    })]
  });
}
const Dl = /* @__PURE__ */ c.createContext(void 0);
function cx() {
  return c.useContext(Dl);
}
function dx(e) {
  return ee("MuiRadio", e);
}
const si = J("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), ux = (e) => {
  const {
    classes: t,
    color: o,
    size: r
  } = e, n = {
    root: ["root", `color${L(o)}`, r !== "medium" && `size${L(r)}`]
  };
  return {
    ...t,
    ...te(n, dx, t)
  };
}, px = O(As, {
  shouldForwardProp: (e) => Ct(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size !== "medium" && t[`size${L(o.size)}`], t[`color${L(o.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${si.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${si.checked}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function fx(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const mx = /* @__PURE__ */ b.jsx(Il, {
  checked: !0
}), hx = /* @__PURE__ */ b.jsx(Il, {}), KC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiRadio"
  }), {
    checked: n,
    checkedIcon: s = mx,
    color: a = "primary",
    icon: i = hx,
    name: l,
    onChange: d,
    size: u = "medium",
    className: m,
    disabled: h,
    disableRipple: f = !1,
    slots: g = {},
    slotProps: v = {},
    inputProps: y,
    ...S
  } = r, w = Wt();
  let C = h;
  w && typeof C > "u" && (C = w.disabled), C ??= !1;
  const x = {
    ...r,
    disabled: C,
    disableRipple: f,
    color: a,
    size: u
  }, P = ux(x), k = cx();
  let E = n;
  const M = Vn(d, k && k.onChange);
  let R = l;
  k && (typeof E > "u" && (E = fx(k.value, r.value)), typeof R > "u" && (R = k.name));
  const $ = v.input ?? y, [B, p] = de("root", {
    ref: o,
    elementType: px,
    className: V(P.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: g,
      slotProps: v,
      ...S
    },
    getSlotProps: (T) => ({
      ...T,
      onChange: (I, ...A) => {
        T.onChange?.(I, ...A), M(I, ...A);
      }
    }),
    ownerState: x,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ c.cloneElement(i, {
        fontSize: i.props.fontSize ?? u
      }),
      checkedIcon: /* @__PURE__ */ c.cloneElement(s, {
        fontSize: s.props.fontSize ?? u
      }),
      disabled: C,
      name: R,
      checked: E,
      slots: g,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof $ == "function" ? $(x) : $
      }
    }
  });
  return /* @__PURE__ */ b.jsx(B, {
    ...p,
    classes: P
  });
});
function gx(e) {
  return ee("MuiRadioGroup", e);
}
J("MuiRadioGroup", ["root", "row", "error"]);
const yx = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return te({
    root: ["root", o && "row", r && "error"]
  }, gx, t);
}, YC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    children: n,
    className: s,
    defaultValue: a,
    name: i,
    onChange: l,
    value: d,
    ...u
  } = t, m = c.useRef(null), h = yx(t), [f, g] = wt({
    controlled: d,
    default: a,
    name: "RadioGroup"
  });
  c.useImperativeHandle(r, () => ({
    focus: () => {
      let w = m.current.querySelector("input:not(:disabled):checked");
      w || (w = m.current.querySelector("input:not(:disabled)")), w && w.focus();
    }
  }), []);
  const v = Xe(o, m), y = Xt(i), S = c.useMemo(() => ({
    name: y,
    onChange(w) {
      g(w.target.value), l && l(w, w.target.value);
    },
    value: f
  }), [y, l, g, f]);
  return /* @__PURE__ */ b.jsx(Dl.Provider, {
    value: S,
    children: /* @__PURE__ */ b.jsx(E0, {
      role: "radiogroup",
      ref: v,
      className: V(h.root, s),
      ...u,
      children: n
    })
  });
});
function bx(e) {
  return ee("MuiTooltip", e);
}
const rt = J("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function vx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const xx = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: n,
    placement: s
  } = e, a = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", n && "touch", `tooltipPlacement${L(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return te(a, bx, t);
}, Cx = O(kl, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose];
  }
})(me(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${rt.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${rt.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Sx = O("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${L(o.placement.split("-")[0])}`]];
  }
})(me(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${rt.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${rt.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${rt.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${rt.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${vx(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${rt.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${rt.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${rt.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${rt.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${rt.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${rt.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${rt.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${rt.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${rt.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${rt.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), wx = O("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(me(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let $r = !1;
const ai = new cn();
let tr = {
  x: 0,
  y: 0
};
function Ir(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const qC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: n = !1,
    children: s,
    classes: a,
    components: i = {},
    componentsProps: l = {},
    describeChild: d = !1,
    disableFocusListener: u = !1,
    disableHoverListener: m = !1,
    disableInteractive: h = !1,
    disableTouchListener: f = !1,
    enterDelay: g = 100,
    enterNextDelay: v = 0,
    enterTouchDelay: y = 700,
    followCursor: S = !1,
    id: w,
    leaveDelay: C = 0,
    leaveTouchDelay: x = 1500,
    onClose: P,
    onOpen: k,
    open: E,
    placement: M = "bottom",
    PopperComponent: R,
    PopperProps: $ = {},
    slotProps: B = {},
    slots: p = {},
    title: T,
    TransitionComponent: I,
    TransitionProps: A,
    ...D
  } = r, W = /* @__PURE__ */ c.isValidElement(s) ? s : /* @__PURE__ */ b.jsx("span", {
    children: s
  }), q = jt(), U = qt(), [se, _] = c.useState(), [re, ge] = c.useState(null), Pe = c.useRef(!1), oe = h || S, Y = bo(), ye = bo(), Ce = bo(), le = bo(), [ne, fe] = wt({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Q = ne;
  const xe = Xt(w), H = c.useRef(), ue = Me(() => {
    H.current !== void 0 && (document.body.style.WebkitUserSelect = H.current, H.current = void 0), le.clear();
  });
  c.useEffect(() => ue, [ue]);
  const X = (ke) => {
    ai.clear(), $r = !0, fe(!0), k && !Q && k(ke);
  }, G = Me(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ke) => {
      ai.start(800 + C, () => {
        $r = !1;
      }), fe(!1), P && Q && P(ke), Y.start(q.transitions.duration.shortest, () => {
        Pe.current = !1;
      });
    }
  ), K = (ke) => {
    Pe.current && ke.type !== "touchstart" || (se && se.removeAttribute("title"), ye.clear(), Ce.clear(), g || $r && v ? ye.start($r ? v : g, () => {
      X(ke);
    }) : X(ke));
  }, j = (ke) => {
    ye.clear(), Ce.start(C, () => {
      G(ke);
    });
  }, [, Te] = c.useState(!1), ce = (ke) => {
    const _e = ke?.target ?? se;
    if (!_e || !No(_e)) {
      Te(!1);
      const ie = ke ?? new Event("blur");
      !ke && _e && (Object.defineProperty(ie, "target", {
        value: _e
      }), Object.defineProperty(ie, "currentTarget", {
        value: _e
      })), j(ie);
    }
  }, ae = (ke) => {
    se || _(ke.currentTarget), No(ke.target) && (Te(!0), K(ke));
  }, Ke = (ke) => {
    Pe.current = !0;
    const _e = W.props;
    _e.onTouchStart && _e.onTouchStart(ke);
  }, He = (ke) => {
    Ke(ke), Ce.clear(), Y.clear(), ue(), H.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", le.start(y, () => {
      document.body.style.WebkitUserSelect = H.current, K(ke);
    });
  }, mt = (ke) => {
    W.props.onTouchEnd && W.props.onTouchEnd(ke), ue(), Ce.start(x, () => {
      G(ke);
    });
  };
  c.useEffect(() => {
    if (!Q)
      return;
    function ke(_e) {
      _e.key === "Escape" && G(_e);
    }
    return document.addEventListener("keydown", ke), () => {
      document.removeEventListener("keydown", ke);
    };
  }, [G, Q]);
  const Ie = Xe(wo(W), _, o);
  !T && T !== 0 && (Q = !1);
  const Re = c.useRef(), Fe = (ke) => {
    const _e = W.props;
    _e.onMouseMove && _e.onMouseMove(ke), tr = {
      x: ke.clientX,
      y: ke.clientY
    }, Re.current && Re.current.update();
  }, Le = {}, lt = typeof T == "string";
  d ? (Le.title = !Q && lt && !m ? T : null, Le["aria-describedby"] = Q ? xe : null) : (Le["aria-label"] = lt ? T : null, Le["aria-labelledby"] = Q && !lt ? xe : null);
  const be = {
    ...Le,
    ...D,
    ...W.props,
    className: V(D.className, W.props.className),
    onTouchStart: Ke,
    ref: Ie,
    ...S ? {
      onMouseMove: Fe
    } : {}
  }, Qe = {};
  f || (be.onTouchStart = He, be.onTouchEnd = mt), m || (be.onMouseOver = Ir(K, be.onMouseOver), be.onMouseLeave = Ir(j, be.onMouseLeave), oe || (Qe.onMouseOver = K, Qe.onMouseLeave = j)), u || (be.onFocus = Ir(ae, be.onFocus), be.onBlur = Ir(ce, be.onBlur), oe || (Qe.onFocus = ae, Qe.onBlur = ce));
  const Ze = {
    ...r,
    isRtl: U,
    arrow: n,
    disableInteractive: oe,
    placement: M,
    PopperComponentProp: R,
    touch: Pe.current
  }, st = typeof B.popper == "function" ? B.popper(Ze) : B.popper, $e = c.useMemo(() => {
    let ke = [{
      name: "arrow",
      enabled: !!re,
      options: {
        element: re,
        padding: 4
      }
    }];
    return $.popperOptions?.modifiers && (ke = ke.concat($.popperOptions.modifiers)), st?.popperOptions?.modifiers && (ke = ke.concat(st.popperOptions.modifiers)), {
      ...$.popperOptions,
      ...st?.popperOptions,
      modifiers: ke
    };
  }, [re, $.popperOptions, st?.popperOptions]), Je = xx(Ze), Mt = typeof B.transition == "function" ? B.transition(Ze) : B.transition, it = {
    slots: {
      popper: i.Popper,
      transition: i.Transition ?? I,
      tooltip: i.Tooltip,
      arrow: i.Arrow,
      ...p
    },
    slotProps: {
      arrow: B.arrow ?? l.arrow,
      popper: {
        ...$,
        ...st ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: B.tooltip ?? l.tooltip,
      transition: {
        ...A,
        ...Mt ?? l.transition
      }
    }
  }, [Z, we] = de("popper", {
    elementType: Cx,
    externalForwardedProps: it,
    ownerState: Ze,
    className: V(Je.popper, $?.className)
  }), [De, Ye] = de("transition", {
    elementType: Hr,
    externalForwardedProps: it,
    ownerState: Ze
  }), [oo, uo] = de("tooltip", {
    elementType: Sx,
    className: Je.tooltip,
    externalForwardedProps: it,
    ownerState: Ze
  }), [Uo, Ot] = de("arrow", {
    elementType: wx,
    className: Je.arrow,
    externalForwardedProps: it,
    ownerState: Ze,
    ref: ge
  });
  return /* @__PURE__ */ b.jsxs(c.Fragment, {
    children: [/* @__PURE__ */ c.cloneElement(W, be), /* @__PURE__ */ b.jsx(Z, {
      as: R ?? kl,
      placement: M,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: tr.y,
          left: tr.x,
          right: tr.x,
          bottom: tr.y,
          width: 0,
          height: 0
        })
      } : se,
      popperRef: Re,
      open: se ? Q : !1,
      id: xe,
      transition: !0,
      ...Qe,
      ...we,
      popperOptions: $e,
      children: ({
        TransitionProps: ke
      }) => /* @__PURE__ */ b.jsx(De, {
        timeout: q.transitions.duration.shorter,
        ...ke,
        ...Ye,
        children: /* @__PURE__ */ b.jsxs(oo, {
          ...uo,
          children: [T, n ? /* @__PURE__ */ b.jsx(Uo, {
            ...Ot
          }) : null]
        })
      })
    })]
  });
}), XC = Ku({
  createStyledComponent: O("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => he({
    props: e,
    name: "MuiStack"
  })
});
function kx(e) {
  return ee("MuiSwitch", e);
}
const St = J("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), Px = (e) => {
  const {
    classes: t,
    edge: o,
    size: r,
    color: n,
    checked: s,
    disabled: a
  } = e, i = {
    root: ["root", o && `edge${L(o)}`, `size${L(r)}`],
    switchBase: ["switchBase", `color${L(n)}`, s && "checked", a && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, l = te(i, kx, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...l
  };
}, Mx = O("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.edge && t[`edge${L(o.edge)}`], t[`size${L(o.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${St.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${St.switchBase}`]: {
        padding: 4,
        [`&.${St.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), Tx = O(As, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.switchBase, {
      [`& .${St.input}`]: t.input
    }, o.color !== "default" && t[`color${L(o.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${St.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${St.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${St.checked} + .${St.track}`]: {
    opacity: 0.5
  },
  [`&.${St.disabled} + .${St.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${St.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), me(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(je(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${St.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${St.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${St.checked} + .${St.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), Rx = O("span", {
  name: "MuiSwitch",
  slot: "Track"
})(me(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  boxSizing: "border-box",
  border: "1px solid transparent",
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
}))), $x = O("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(me(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), QC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiSwitch"
  }), {
    className: n,
    color: s = "primary",
    edge: a = !1,
    size: i = "medium",
    sx: l,
    slots: d = {},
    slotProps: u = {},
    ...m
  } = r, h = {
    ...r,
    color: s,
    edge: a,
    size: i
  }, f = Px(h), g = {
    slots: d,
    slotProps: u
  }, [v, y] = de("root", {
    className: V(f.root, n),
    elementType: Mx,
    externalForwardedProps: g,
    ownerState: h,
    additionalProps: {
      sx: l
    }
  }), [S, w] = de("thumb", {
    className: f.thumb,
    elementType: $x,
    externalForwardedProps: g,
    ownerState: h
  }), C = /* @__PURE__ */ b.jsx(S, {
    ...w
  }), [x, P] = de("track", {
    className: f.track,
    elementType: Rx,
    externalForwardedProps: g,
    ownerState: h
  });
  return /* @__PURE__ */ b.jsxs(v, {
    ...y,
    children: [/* @__PURE__ */ b.jsx(Tx, {
      type: "checkbox",
      icon: C,
      checkedIcon: C,
      ref: o,
      ownerState: h,
      ...m,
      classes: {
        ...f,
        root: f.switchBase
      },
      slots: {
        ...d.switchBase && {
          root: d.switchBase
        },
        ...d.input && {
          input: d.input
        }
      },
      slotProps: {
        ...u.switchBase && {
          root: typeof u.switchBase == "function" ? u.switchBase(h) : u.switchBase
        },
        input: {
          role: "switch"
        },
        ...u.input && {
          input: typeof u.input == "function" ? u.input(h) : u.input
        }
      }
    }), /* @__PURE__ */ b.jsx(x, {
      ...P
    })]
  });
});
function Ix(e) {
  return ee("MuiToggleButton", e);
}
const vo = J("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), Al = /* @__PURE__ */ c.createContext({}), El = /* @__PURE__ */ c.createContext(void 0);
function Dx(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const Ax = (e) => {
  const {
    classes: t,
    fullWidth: o,
    selected: r,
    disabled: n,
    size: s,
    color: a
  } = e, i = {
    root: ["root", r && "selected", n && "disabled", o && "fullWidth", `size${L(s)}`, a]
  };
  return te(i, Ix, t);
}, Ex = O(Et, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`size${L(o.size)}`]];
  }
})(me(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${vo.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${vo.selected}`]: {
        color: (e.vars || e).palette.text.primary,
        backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.text.primary, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(e.palette).filter(je()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${vo.selected}`]: {
        color: (e.vars || e).palette[t].main,
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: e.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: e.typography.pxToRem(15)
    }
  }]
}))), ZC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const {
    value: r,
    ...n
  } = c.useContext(Al), s = c.useContext(El), a = Lo({
    ...n,
    selected: Dx(t.value, r)
  }, t), i = he({
    props: a,
    name: "MuiToggleButton"
  }), {
    children: l,
    className: d,
    color: u = "standard",
    disabled: m = !1,
    disableFocusRipple: h = !1,
    fullWidth: f = !1,
    onChange: g,
    onClick: v,
    selected: y,
    size: S = "medium",
    value: w,
    ...C
  } = i, x = {
    ...i,
    color: u,
    disabled: m,
    disableFocusRipple: h,
    fullWidth: f,
    size: S
  }, P = Ax(x), k = (M) => {
    v && (v(M, w), M.defaultPrevented) || g && g(M, w);
  }, E = s || "";
  return /* @__PURE__ */ b.jsx(Ex, {
    className: V(n.className, P.root, d, E),
    disabled: m,
    focusRipple: !h,
    ref: o,
    onClick: k,
    onChange: g,
    value: w,
    ownerState: x,
    "aria-pressed": y,
    ...C,
    children: l
  });
});
function Bx(e) {
  return ee("MuiToggleButtonGroup", e);
}
const Ge = J("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), Ox = (e) => {
  const {
    classes: t,
    orientation: o,
    fullWidth: r,
    disabled: n
  } = e, s = {
    root: ["root", o, r && "fullWidth"],
    grouped: ["grouped", `grouped${L(o)}`, n && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return te(s, Bx, t);
}, Lx = O("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Ge.grouped}`]: t.grouped
    }, {
      [`& .${Ge.grouped}`]: t[`grouped${L(o.orientation)}`]
    }, {
      [`& .${Ge.firstButton}`]: t.firstButton
    }, {
      [`& .${Ge.lastButton}`]: t.lastButton
    }, {
      [`& .${Ge.middleButton}`]: t.middleButton
    }, t.root, o.orientation === "vertical" && t.vertical, o.fullWidth && t.fullWidth];
  }
})(me(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${Ge.grouped}`]: {
        [`&.${Ge.selected} + .${Ge.grouped}.${Ge.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${Ge.firstButton},& .${Ge.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Ge.lastButton},& .${Ge.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${Ge.lastButton}.${vo.disabled},& .${Ge.middleButton}.${vo.disabled}`]: {
        borderTop: "1px solid transparent"
      }
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${Ge.grouped}`]: {
        [`&.${Ge.selected} + .${Ge.grouped}.${Ge.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${Ge.firstButton},& .${Ge.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Ge.lastButton},& .${Ge.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${Ge.lastButton}.${vo.disabled},& .${Ge.middleButton}.${vo.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
}))), JC = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = he({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: n,
    className: s,
    color: a = "standard",
    disabled: i = !1,
    exclusive: l = !1,
    fullWidth: d = !1,
    onChange: u,
    orientation: m = "horizontal",
    size: h = "medium",
    value: f,
    ...g
  } = r, v = {
    ...r,
    disabled: i,
    fullWidth: d,
    orientation: m,
    size: h
  }, y = Ox(v), S = c.useCallback((E, M) => {
    if (!u)
      return;
    const R = f && f.indexOf(M);
    let $;
    f && R >= 0 ? ($ = f.slice(), $.splice(R, 1)) : $ = f ? f.concat(M) : [M], u(E, $);
  }, [u, f]), w = c.useCallback((E, M) => {
    u && u(E, f === M ? null : M);
  }, [u, f]), C = c.useMemo(() => ({
    className: y.grouped,
    onChange: l ? w : S,
    value: f,
    size: h,
    fullWidth: d,
    color: a,
    disabled: i
  }), [y.grouped, l, w, S, f, h, d, a, i]), x = Ap(n), P = x.length, k = (E) => {
    const M = E === 0, R = E === P - 1;
    return M && R ? "" : M ? y.firstButton : R ? y.lastButton : y.middleButton;
  };
  return /* @__PURE__ */ b.jsx(Lx, {
    role: "group",
    className: V(y.root, s),
    ref: o,
    ownerState: v,
    ...g,
    children: /* @__PURE__ */ b.jsx(Al.Provider, {
      value: C,
      children: x.map((E, M) => /* @__PURE__ */ b.jsx(El.Provider, {
        value: k(M),
        children: E
      }, M))
    })
  });
}), Gr = /* @__PURE__ */ c.createContext({});
function Nx(e) {
  return ee("MuiTimeline", e);
}
J("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
function Ho(e) {
  return e === "alternate-reverse" ? "positionAlternateReverse" : `position${L(e)}`;
}
const zx = (e) => {
  const {
    position: t,
    classes: o
  } = e, r = {
    root: ["root", t && Ho(t)]
  };
  return te(r, Nx, o);
}, Fx = O("ul", {
  name: "MuiTimeline",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.position && t[Ho(o.position)]];
  }
})({
  display: "flex",
  flexDirection: "column",
  padding: "6px 16px",
  flexGrow: 1
}), eS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimeline"
  }), {
    position: n = "right",
    className: s,
    ...a
  } = r, i = {
    ...r,
    position: n
  }, l = zx(i), d = c.useMemo(() => ({
    position: n
  }), [n]);
  return /* @__PURE__ */ b.jsx(Gr.Provider, {
    value: d,
    children: /* @__PURE__ */ b.jsx(Fx, {
      className: V(l.root, s),
      ownerState: i,
      ref: o,
      ...a
    })
  });
});
function jx(e) {
  return ee("MuiTimelineConnector", e);
}
J("MuiTimelineConnector", ["root"]);
const Wx = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, jx, t);
}, Vx = O("span", {
  name: "MuiTimelineConnector",
  slot: "Root"
})(({
  theme: e
}) => ({
  width: 2,
  backgroundColor: (e.vars || e).palette.grey[400],
  flexGrow: 1
})), tS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimelineConnector"
  }), {
    className: n,
    ...s
  } = r, a = r, i = Wx(a);
  return /* @__PURE__ */ b.jsx(Vx, {
    className: V(i.root, n),
    ownerState: a,
    ref: o,
    ...s
  });
});
function Hx(e) {
  return ee("MuiTimelineContent", e);
}
const Ux = J("MuiTimelineContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]), _x = (e) => {
  const {
    position: t,
    classes: o
  } = e, r = {
    root: ["root", Ho(t)]
  };
  return te(r, Hx, o);
}, Gx = O(pt, {
  name: "MuiTimelineContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[Ho(o.position)]];
  }
})(({
  ownerState: e
}) => ({
  flex: 1,
  padding: "6px 16px",
  textAlign: "left",
  ...e.position === "left" && {
    textAlign: "right"
  }
})), oS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimelineContent"
  }), {
    className: n,
    ...s
  } = r, {
    position: a
  } = c.useContext(Gr), i = {
    ...r,
    position: a || "right"
  }, l = _x(i);
  return /* @__PURE__ */ b.jsx(Gx, {
    component: "div",
    className: V(l.root, n),
    ownerState: i,
    ref: o,
    ...s
  });
});
function Kx(e) {
  return ee("MuiTimelineDot", e);
}
J("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
const Yx = (e) => {
  const {
    color: t,
    variant: o,
    classes: r
  } = e, n = {
    root: ["root", o, t !== "inherit" && `${o}${L(t)}`]
  };
  return te(n, Kx, r);
}, qx = O("span", {
  name: "MuiTimelineDot",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.color !== "inherit" && `${o.variant}${L(o.color)}`], t[o.variant]];
  }
})(({
  ownerState: e,
  theme: t
}) => ({
  display: "flex",
  alignSelf: "baseline",
  borderStyle: "solid",
  borderWidth: 2,
  padding: 4,
  borderRadius: "50%",
  boxShadow: (t.vars || t).shadows[1],
  margin: "11.5px 0",
  ...e.variant === "filled" && {
    borderColor: "transparent",
    ...e.color !== "inherit" && {
      ...e.color === "grey" ? {
        color: (t.vars || t).palette.grey[50],
        backgroundColor: (t.vars || t).palette.grey[400]
      } : {
        color: (t.vars || t).palette[e.color].contrastText,
        backgroundColor: (t.vars || t).palette[e.color].main
      }
    }
  },
  ...e.variant === "outlined" && {
    boxShadow: "none",
    backgroundColor: "transparent",
    ...e.color !== "inherit" && {
      ...e.color === "grey" ? {
        borderColor: (t.vars || t).palette.grey[400]
      } : {
        borderColor: (t.vars || t).palette[e.color].main
      }
    }
  }
})), rS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimelineDot"
  }), {
    className: n,
    color: s = "grey",
    variant: a = "filled",
    ...i
  } = r, l = {
    ...r,
    color: s,
    variant: a
  }, d = Yx(l);
  return /* @__PURE__ */ b.jsx(qx, {
    className: V(d.root, n),
    ownerState: l,
    ref: o,
    ...i
  });
}), Xx = J("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
function Qx(e) {
  return ee("MuiTimelineItem", e);
}
const nS = J("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse", "missingOppositeContent"]), Zx = (e) => {
  const {
    position: t,
    classes: o,
    hasOppositeContent: r
  } = e, n = {
    root: ["root", Ho(t), !r && "missingOppositeContent"]
  };
  return te(n, Qx, o);
}, Jx = O("li", {
  name: "MuiTimelineItem",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[Ho(o.position)]];
  }
})(({
  ownerState: e
}) => ({
  listStyle: "none",
  display: "flex",
  position: "relative",
  minHeight: 70,
  ...e.position === "left" && {
    flexDirection: "row-reverse"
  },
  ...(e.position === "alternate" || e.position === "alternate-reverse") && {
    [`&:nth-of-type(${e.position === "alternate" ? "even" : "odd"})`]: {
      flexDirection: "row-reverse",
      [`& .${Ux.root}`]: {
        textAlign: "right"
      },
      [`& .${Xx.root}`]: {
        textAlign: "left"
      }
    }
  },
  ...!e.hasOppositeContent && {
    "&::before": {
      content: '""',
      flex: 1,
      padding: "6px 16px"
    }
  }
})), sS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimelineItem"
  }), {
    position: n,
    className: s,
    ...a
  } = r, {
    position: i
  } = c.useContext(Gr);
  let l = !1;
  c.Children.forEach(r.children, (h) => {
    Eo(h, ["TimelineOppositeContent"]) && (l = !0);
  });
  const d = {
    ...r,
    position: n || i || "right",
    hasOppositeContent: l
  }, u = Zx(d), m = c.useMemo(() => ({
    position: d.position
  }), [d.position]);
  return /* @__PURE__ */ b.jsx(Gr.Provider, {
    value: m,
    children: /* @__PURE__ */ b.jsx(Jx, {
      className: V(u.root, s),
      ownerState: d,
      ref: o,
      ...a
    })
  });
});
function eC(e) {
  return ee("MuiTimelineSeparator", e);
}
J("MuiTimelineSeparator", ["root"]);
const tC = (e) => {
  const {
    classes: t
  } = e;
  return te({
    root: ["root"]
  }, eC, t);
}, oC = O("div", {
  name: "MuiTimelineSeparator",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  flex: 0,
  alignItems: "center"
}), aS = /* @__PURE__ */ c.forwardRef(function(t, o) {
  const r = dt({
    props: t,
    name: "MuiTimelineSeparator"
  }), {
    className: n,
    ...s
  } = r, a = r, i = tC(a);
  return /* @__PURE__ */ b.jsx(oC, {
    className: V(i.root, n),
    ownerState: a,
    ref: o,
    ...s
  });
});
export {
  aS as $,
  kC as A,
  IC as B,
  Zn as C,
  Ca as D,
  qh as E,
  rg as F,
  YC as G,
  WC as H,
  N0 as I,
  qC as J,
  _C as K,
  GC as L,
  dC as M,
  lC as N,
  JC as O,
  Vo as P,
  ZC as Q,
  KC as R,
  XC as S,
  pt as T,
  Ny as U,
  QC as V,
  eS as W,
  tS as X,
  oS as Y,
  rS as Z,
  sS as _,
  PC as a,
  Fc as a0,
  wi as a1,
  vs as a2,
  zt as a3,
  Ya as a4,
  Jd as a5,
  VC as a6,
  ft as a7,
  rn as a8,
  cr as a9,
  HC as aA,
  UC as aB,
  zn as aa,
  Zd as ab,
  sC as ac,
  aC as ad,
  zC as ae,
  gc as af,
  go as ag,
  Jo as ah,
  uC as ai,
  Xo as aj,
  Fo as ak,
  Ut as al,
  cC as am,
  nn as an,
  Sy as ao,
  yl as ap,
  Ge as aq,
  vo as ar,
  RC as as,
  ti as at,
  iC as au,
  wC as av,
  mC as aw,
  hC as ax,
  Uh as ay,
  nS as az,
  MC as b,
  gC as c,
  TC as d,
  CC as e,
  SC as f,
  $C as g,
  DC as h,
  AC as i,
  EC as j,
  BC as k,
  OC as l,
  jC as m,
  LC as n,
  ig as o,
  rl as p,
  NC as q,
  Jh as r,
  fC as s,
  pC as t,
  jt as u,
  bC as v,
  xC as w,
  yC as x,
  vC as y,
  FC as z
};
