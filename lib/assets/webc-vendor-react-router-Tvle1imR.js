import { a8 as b, r as a, a9 as se, aa as ue, ab as A, ac as Ee, ad as Ce, ae as U, af as xe, ag as be, ah as we, ai as Re, aj as Se, t as Pe, ak as Le, al as Te, am as ne, an as Q } from "./webc-vendor-CvrN3tmw.js";
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, K.apply(this, arguments);
}
const I = /* @__PURE__ */ a.createContext(null), ee = /* @__PURE__ */ a.createContext(null), S = /* @__PURE__ */ a.createContext(null), $ = /* @__PURE__ */ a.createContext(null), P = /* @__PURE__ */ a.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), ce = /* @__PURE__ */ a.createContext(null);
function _e(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  M() || b(!1);
  let {
    basename: r,
    navigator: o
  } = a.useContext(S), {
    hash: l,
    pathname: i,
    search: f
  } = B(e, {
    relative: n
  }), d = i;
  return r !== "/" && (d = i === "/" ? r : A([r, i])), o.createHref({
    pathname: d,
    search: f,
    hash: l
  });
}
function M() {
  return a.useContext($) != null;
}
function D() {
  return M() || b(!1), a.useContext($).location;
}
function Tt() {
  return a.useContext($).navigationType;
}
function fe(e) {
  a.useContext(S).static || a.useLayoutEffect(e);
}
function de() {
  let {
    isDataRoute: e
  } = a.useContext(P);
  return e ? We() : Ne();
}
function Ne() {
  M() || b(!1);
  let e = a.useContext(I), {
    basename: t,
    future: n,
    navigator: r
  } = a.useContext(S), {
    matches: o
  } = a.useContext(P), {
    pathname: l
  } = D(), i = JSON.stringify(se(o, n.v7_relativeSplatPath)), f = a.useRef(!1);
  return fe(() => {
    f.current = !0;
  }), a.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), !f.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let s = ue(u, JSON.parse(i), l, c.relative === "path");
    e == null && t !== "/" && (s.pathname = s.pathname === "/" ? t : A([t, s.pathname])), (c.replace ? r.replace : r.push)(s, c.state, c);
  }, [t, r, i, l, e]);
}
const ke = /* @__PURE__ */ a.createContext(null);
function Ue(e) {
  let t = a.useContext(P).outlet;
  return t && /* @__PURE__ */ a.createElement(ke.Provider, {
    value: e
  }, t);
}
function _t() {
  let {
    matches: e
  } = a.useContext(P), t = e[e.length - 1];
  return t ? t.params : {};
}
function B(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = a.useContext(S), {
    matches: o
  } = a.useContext(P), {
    pathname: l
  } = D(), i = JSON.stringify(se(o, r.v7_relativeSplatPath));
  return a.useMemo(() => ue(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function De(e, t, n, r) {
  M() || b(!1);
  let {
    navigator: o
  } = a.useContext(S), {
    matches: l
  } = a.useContext(P), i = l[l.length - 1], f = i ? i.params : {};
  i && i.pathname;
  let d = i ? i.pathnameBase : "/";
  i && i.route;
  let u = D(), c;
  c = u;
  let s = c.pathname || "/", h = s;
  if (d !== "/") {
    let m = d.replace(/^\//, "").split("/");
    h = "/" + s.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let y = xe(e, {
    pathname: h
  });
  return Me(y && y.map((m) => Object.assign({}, m, {
    params: Object.assign({}, f, m.params),
    pathname: A([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(m.pathname).pathname : m.pathname
    ]),
    pathnameBase: m.pathnameBase === "/" ? d : A([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(m.pathnameBase).pathname : m.pathnameBase
    ])
  })), l, n, r);
}
function Oe() {
  let e = ze(), t = we(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ a.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ a.createElement("pre", {
    style: o
  }, n) : null, null);
}
const Fe = /* @__PURE__ */ a.createElement(Oe, null);
class Ae extends a.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ a.createElement(P.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ a.createElement(ce.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Ie(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = a.useContext(I);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ a.createElement(P.Provider, {
    value: t
  }, r);
}
function Me(e, t, n, r) {
  var o;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var l;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((l = r) != null && l.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let i = e, f = (o = n) == null ? void 0 : o.errors;
  if (f != null) {
    let c = i.findIndex((s) => s.route.id && f?.[s.route.id] !== void 0);
    c >= 0 || b(!1), i = i.slice(0, Math.min(i.length, c + 1));
  }
  let d = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let s = i[c];
      if ((s.route.HydrateFallback || s.route.hydrateFallbackElement) && (u = c), s.route.id) {
        let {
          loaderData: h,
          errors: y
        } = n, g = s.route.loader && h[s.route.id] === void 0 && (!y || y[s.route.id] === void 0);
        if (s.route.lazy || g) {
          d = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
          break;
        }
      }
    }
  return i.reduceRight((c, s, h) => {
    let y, g = !1, m = null, x = null;
    n && (y = f && s.route.id ? f[s.route.id] : void 0, m = s.route.errorElement || Fe, d && (u < 0 && h === 0 ? (He("route-fallback"), g = !0, x = null) : u === h && (g = !0, x = s.route.hydrateFallbackElement || null)));
    let R = t.concat(i.slice(0, h + 1)), p = () => {
      let v;
      return y ? v = m : g ? v = x : s.route.Component ? v = /* @__PURE__ */ a.createElement(s.route.Component, null) : s.route.element ? v = s.route.element : v = c, /* @__PURE__ */ a.createElement(Ie, {
        match: s,
        routeContext: {
          outlet: c,
          matches: R,
          isDataRoute: n != null
        },
        children: v
      });
    };
    return n && (s.route.ErrorBoundary || s.route.errorElement || h === 0) ? /* @__PURE__ */ a.createElement(Ae, {
      location: n.location,
      revalidation: n.revalidation,
      component: m,
      error: y,
      children: p(),
      routeContext: {
        outlet: null,
        matches: R,
        isDataRoute: !0
      }
    }) : p();
  }, null);
}
var he = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(he || {}), me = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(me || {});
function Be(e) {
  let t = a.useContext(I);
  return t || b(!1), t;
}
function j(e) {
  let t = a.useContext(ee);
  return t || b(!1), t;
}
function je(e) {
  let t = a.useContext(P);
  return t || b(!1), t;
}
function Y(e) {
  let t = je(), n = t.matches[t.matches.length - 1];
  return n.route.id || b(!1), n.route.id;
}
function Ve() {
  return Y();
}
function Nt() {
  return j().navigation;
}
function kt() {
  let {
    matches: e,
    loaderData: t
  } = j();
  return a.useMemo(() => e.map((n) => be(n, t)), [e, t]);
}
function Ut() {
  let e = j(), t = Y();
  if (e.errors && e.errors[t] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
    return;
  }
  return e.loaderData[t];
}
function Dt(e) {
  return j(me.UseRouteLoaderData).loaderData[e];
}
function ze() {
  var e;
  let t = a.useContext(ce), n = j(), r = Y();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function We() {
  let {
    router: e
  } = Be(he.UseNavigateStable), t = Y(), n = a.useRef(!1);
  return fe(() => {
    n.current = !0;
  }), a.useCallback(function(o, l) {
    l === void 0 && (l = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, K({
      fromRouteId: t
    }, l)));
  }, [e, t]);
}
const re = {};
function He(e, t, n) {
  re[e] || (re[e] = !0);
}
function Ke(e, t) {
  e?.v7_startTransition, e?.v7_relativeSplatPath === void 0 && (!t || t.v7_relativeSplatPath), t && (t.v7_fetcherPersist, t.v7_normalizeFormMethod, t.v7_partialHydration, t.v7_skipActionErrorRevalidation);
}
function Ot(e) {
  return Ue(e.context);
}
function Je(e) {
  b(!1);
}
function $e(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ee.Pop,
    navigator: l,
    static: i = !1,
    future: f
  } = e;
  M() && b(!1);
  let d = t.replace(/^\/*/, "/"), u = a.useMemo(() => ({
    basename: d,
    navigator: l,
    static: i,
    future: K({
      v7_relativeSplatPath: !1
    }, f)
  }), [d, f, l, i]);
  typeof r == "string" && (r = Ce(r));
  let {
    pathname: c = "/",
    search: s = "",
    hash: h = "",
    state: y = null,
    key: g = "default"
  } = r, m = a.useMemo(() => {
    let x = U(c, d);
    return x == null ? null : {
      location: {
        pathname: x,
        search: s,
        hash: h,
        state: y,
        key: g
      },
      navigationType: o
    };
  }, [d, c, s, h, y, g, o]);
  return m == null ? null : /* @__PURE__ */ a.createElement(S.Provider, {
    value: u
  }, /* @__PURE__ */ a.createElement($.Provider, {
    children: n,
    value: m
  }));
}
new Promise(() => {
});
function ae(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return a.Children.forEach(e, (r, o) => {
    if (!/* @__PURE__ */ a.isValidElement(r))
      return;
    let l = [...t, o];
    if (r.type === a.Fragment) {
      n.push.apply(n, ae(r.props.children, l));
      return;
    }
    r.type !== Je && b(!1), !r.props.index || !r.props.children || b(!1);
    let i = {
      id: r.props.id || l.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = ae(r.props.children, l)), n.push(i);
  }), n;
}
function Ye(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && Object.assign(t, {
    element: /* @__PURE__ */ a.createElement(e.Component),
    Component: void 0
  }), e.HydrateFallback && Object.assign(t, {
    hydrateFallbackElement: /* @__PURE__ */ a.createElement(e.HydrateFallback),
    HydrateFallback: void 0
  }), e.ErrorBoundary && Object.assign(t, {
    errorElement: /* @__PURE__ */ a.createElement(e.ErrorBoundary),
    ErrorBoundary: void 0
  }), t;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _.apply(this, arguments);
}
function te(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, l;
  for (l = 0; l < r.length; l++)
    o = r[l], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const H = "get", G = "application/x-www-form-urlencoded";
function q(e) {
  return e != null && typeof e.tagName == "string";
}
function qe(e) {
  return q(e) && e.tagName.toLowerCase() === "button";
}
function Ge(e) {
  return q(e) && e.tagName.toLowerCase() === "form";
}
function Xe(e) {
  return q(e) && e.tagName.toLowerCase() === "input";
}
function Qe(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ze(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Qe(e);
}
function Z(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
  }, []));
}
function et(e, t) {
  let n = Z(e);
  return t && t.forEach((r, o) => {
    n.has(o) || t.getAll(o).forEach((l) => {
      n.append(o, l);
    });
  }), n;
}
let W = null;
function tt() {
  if (W === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), W = !1;
    } catch {
      W = !0;
    }
  return W;
}
const nt = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function X(e) {
  return e != null && !nt.has(e) ? null : e;
}
function rt(e, t) {
  let n, r, o, l, i;
  if (Ge(e)) {
    let f = e.getAttribute("action");
    r = f ? U(f, t) : null, n = e.getAttribute("method") || H, o = X(e.getAttribute("enctype")) || G, l = new FormData(e);
  } else if (qe(e) || Xe(e) && (e.type === "submit" || e.type === "image")) {
    let f = e.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let d = e.getAttribute("formaction") || f.getAttribute("action");
    if (r = d ? U(d, t) : null, n = e.getAttribute("formmethod") || f.getAttribute("method") || H, o = X(e.getAttribute("formenctype")) || X(f.getAttribute("enctype")) || G, l = new FormData(f, e), !tt()) {
      let {
        name: u,
        type: c,
        value: s
      } = e;
      if (c === "image") {
        let h = u ? u + "." : "";
        l.append(h + "x", "0"), l.append(h + "y", "0");
      } else u && l.append(u, s);
    }
  } else {
    if (q(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = H, r = null, o = G, i = e;
  }
  return l && o === "text/plain" && (i = l, l = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: o,
    formData: l,
    body: i
  };
}
const at = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], ot = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], it = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], lt = "6";
try {
  window.__reactRouterVersion = lt;
} catch {
}
function Ft(e, t) {
  return Re({
    basename: void 0,
    future: _({}, void 0, {
      v7_prependBasename: !0
    }),
    history: Se({
      window: void 0
    }),
    hydrationData: st(),
    routes: e,
    mapRouteProperties: Ye,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0
  }).initialize();
}
function st() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = _({}, t, {
    errors: ut(t.errors)
  })), t;
}
function ut(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Te(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let i = new l(o.message);
            i.stack = "", n[r] = i;
          } catch {
          }
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        l.stack = "", n[r] = l;
      }
    } else
      n[r] = o;
  return n;
}
const pe = /* @__PURE__ */ a.createContext({
  isTransitioning: !1
}), ct = /* @__PURE__ */ a.createContext(/* @__PURE__ */ new Map()), ft = "startTransition", oe = Pe[ft], dt = "flushSync", ie = Le[dt];
function ht(e) {
  oe ? oe(e) : e();
}
function F(e) {
  ie ? ie(e) : e();
}
class mt {
  constructor() {
    this.status = "pending", this.promise = new Promise((t, n) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", t(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", n(r));
      };
    });
  }
}
function At(e) {
  let {
    fallbackElement: t,
    router: n,
    future: r
  } = e, [o, l] = a.useState(n.state), [i, f] = a.useState(), [d, u] = a.useState({
    isTransitioning: !1
  }), [c, s] = a.useState(), [h, y] = a.useState(), [g, m] = a.useState(), x = a.useRef(/* @__PURE__ */ new Map()), {
    v7_startTransition: R
  } = r || {}, p = a.useCallback((C) => {
    R ? ht(C) : C();
  }, [R]), v = a.useCallback((C, L) => {
    let {
      deletedFetchers: w,
      flushSync: z,
      viewTransitionOpts: N
    } = L;
    C.fetchers.forEach((k, ye) => {
      k.data !== void 0 && x.current.set(ye, k.data);
    }), w.forEach((k) => x.current.delete(k));
    let ge = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
    if (!N || ge) {
      z ? F(() => l(C)) : p(() => l(C));
      return;
    }
    if (z) {
      F(() => {
        h && (c && c.resolve(), h.skipTransition()), u({
          isTransitioning: !0,
          flushSync: !0,
          currentLocation: N.currentLocation,
          nextLocation: N.nextLocation
        });
      });
      let k = n.window.document.startViewTransition(() => {
        F(() => l(C));
      });
      k.finished.finally(() => {
        F(() => {
          s(void 0), y(void 0), f(void 0), u({
            isTransitioning: !1
          });
        });
      }), F(() => y(k));
      return;
    }
    h ? (c && c.resolve(), h.skipTransition(), m({
      state: C,
      currentLocation: N.currentLocation,
      nextLocation: N.nextLocation
    })) : (f(C), u({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: N.currentLocation,
      nextLocation: N.nextLocation
    }));
  }, [n.window, h, c, x, p]);
  a.useLayoutEffect(() => n.subscribe(v), [n, v]), a.useEffect(() => {
    d.isTransitioning && !d.flushSync && s(new mt());
  }, [d]), a.useEffect(() => {
    if (c && i && n.window) {
      let C = i, L = c.promise, w = n.window.document.startViewTransition(async () => {
        p(() => l(C)), await L;
      });
      w.finished.finally(() => {
        s(void 0), y(void 0), f(void 0), u({
          isTransitioning: !1
        });
      }), y(w);
    }
  }, [p, i, c, n.window]), a.useEffect(() => {
    c && i && o.location.key === i.location.key && c.resolve();
  }, [c, h, o.location, i]), a.useEffect(() => {
    !d.isTransitioning && g && (f(g.state), u({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: g.currentLocation,
      nextLocation: g.nextLocation
    }), m(void 0));
  }, [d.isTransitioning, g]), a.useEffect(() => {
  }, []);
  let E = a.useMemo(() => ({
    createHref: n.createHref,
    encodeLocation: n.encodeLocation,
    go: (C) => n.navigate(C),
    push: (C, L, w) => n.navigate(C, {
      state: L,
      preventScrollReset: w?.preventScrollReset
    }),
    replace: (C, L, w) => n.navigate(C, {
      replace: !0,
      state: L,
      preventScrollReset: w?.preventScrollReset
    })
  }), [n]), T = n.basename || "/", O = a.useMemo(() => ({
    router: n,
    navigator: E,
    static: !1,
    basename: T
  }), [n, E, T]), V = a.useMemo(() => ({
    v7_relativeSplatPath: n.future.v7_relativeSplatPath
  }), [n.future.v7_relativeSplatPath]);
  return a.useEffect(() => Ke(r, n.future), [r, n.future]), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(I.Provider, {
    value: O
  }, /* @__PURE__ */ a.createElement(ee.Provider, {
    value: o
  }, /* @__PURE__ */ a.createElement(ct.Provider, {
    value: x.current
  }, /* @__PURE__ */ a.createElement(pe.Provider, {
    value: d
  }, /* @__PURE__ */ a.createElement($e, {
    basename: T,
    location: o.location,
    navigationType: o.historyAction,
    navigator: E,
    future: V
  }, o.initialized || n.future.v7_partialHydration ? /* @__PURE__ */ a.createElement(pt, {
    routes: n.routes,
    future: n.future,
    state: o
  }) : t))))), null);
}
const pt = /* @__PURE__ */ a.memo(vt);
function vt(e) {
  let {
    routes: t,
    future: n,
    state: r
  } = e;
  return De(t, void 0, r, n);
}
const gt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Et = /* @__PURE__ */ a.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: o,
    reloadDocument: l,
    replace: i,
    state: f,
    target: d,
    to: u,
    preventScrollReset: c,
    viewTransition: s
  } = t, h = te(t, at), {
    basename: y
  } = a.useContext(S), g, m = !1;
  if (typeof u == "string" && yt.test(u) && (g = u, gt))
    try {
      let v = new URL(window.location.href), E = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u), T = U(E.pathname, y);
      E.origin === v.origin && T != null ? u = T + E.search + E.hash : m = !0;
    } catch {
    }
  let x = _e(u, {
    relative: o
  }), R = Ct(u, {
    replace: i,
    state: f,
    target: d,
    preventScrollReset: c,
    relative: o,
    viewTransition: s
  });
  function p(v) {
    r && r(v), v.defaultPrevented || R(v);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ a.createElement("a", _({}, h, {
      href: g || x,
      onClick: m || l ? r : p,
      ref: n,
      target: d
    }))
  );
}), It = /* @__PURE__ */ a.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: l = "",
    end: i = !1,
    style: f,
    to: d,
    viewTransition: u,
    children: c
  } = t, s = te(t, ot), h = B(d, {
    relative: s.relative
  }), y = D(), g = a.useContext(ee), {
    navigator: m,
    basename: x
  } = a.useContext(S), R = g != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Pt(h) && u === !0, p = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname, v = y.pathname, E = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
  o || (v = v.toLowerCase(), E = E ? E.toLowerCase() : null, p = p.toLowerCase()), E && x && (E = U(E, x) || E);
  const T = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let O = v === p || !i && v.startsWith(p) && v.charAt(T) === "/", V = E != null && (E === p || !i && E.startsWith(p) && E.charAt(p.length) === "/"), C = {
    isActive: O,
    isPending: V,
    isTransitioning: R
  }, L = O ? r : void 0, w;
  typeof l == "function" ? w = l(C) : w = [l, O ? "active" : null, V ? "pending" : null, R ? "transitioning" : null].filter(Boolean).join(" ");
  let z = typeof f == "function" ? f(C) : f;
  return /* @__PURE__ */ a.createElement(Et, _({}, s, {
    "aria-current": L,
    className: w,
    ref: n,
    style: z,
    to: d,
    viewTransition: u
  }), typeof c == "function" ? c(C) : c);
}), Mt = /* @__PURE__ */ a.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: o,
    replace: l,
    state: i,
    method: f = H,
    action: d,
    onSubmit: u,
    relative: c,
    preventScrollReset: s,
    viewTransition: h
  } = e, y = te(e, it), g = Rt(), m = St(d, {
    relative: c
  }), x = f.toLowerCase() === "get" ? "get" : "post", R = (p) => {
    if (u && u(p), p.defaultPrevented) return;
    p.preventDefault();
    let v = p.nativeEvent.submitter, E = v?.getAttribute("formmethod") || f;
    g(v || p.currentTarget, {
      fetcherKey: n,
      method: E,
      navigate: r,
      replace: l,
      state: i,
      relative: c,
      preventScrollReset: s,
      viewTransition: h
    });
  };
  return /* @__PURE__ */ a.createElement("form", _({
    ref: t,
    method: x,
    action: m,
    onSubmit: o ? u : R
  }, y));
});
var J;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(J || (J = {}));
var le;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(le || (le = {}));
function ve(e) {
  let t = a.useContext(I);
  return t || b(!1), t;
}
function Ct(e, t) {
  let {
    target: n,
    replace: r,
    state: o,
    preventScrollReset: l,
    relative: i,
    viewTransition: f
  } = t === void 0 ? {} : t, d = de(), u = D(), c = B(e, {
    relative: i
  });
  return a.useCallback((s) => {
    if (Ze(s, n)) {
      s.preventDefault();
      let h = r !== void 0 ? r : Q(u) === Q(c);
      d(e, {
        replace: h,
        state: o,
        preventScrollReset: l,
        relative: i,
        viewTransition: f
      });
    }
  }, [u, d, c, r, o, n, e, l, i, f]);
}
function Bt(e) {
  let t = a.useRef(Z(e)), n = a.useRef(!1), r = D(), o = a.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    et(r.search, n.current ? null : t.current)
  ), [r.search]), l = de(), i = a.useCallback((f, d) => {
    const u = Z(typeof f == "function" ? f(o) : f);
    n.current = !0, l("?" + u, d);
  }, [l, o]);
  return [o, i];
}
function xt() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let bt = 0, wt = () => "__" + String(++bt) + "__";
function Rt() {
  let {
    router: e
  } = ve(J.UseSubmit), {
    basename: t
  } = a.useContext(S), n = Ve();
  return a.useCallback(function(r, o) {
    o === void 0 && (o = {}), xt();
    let {
      action: l,
      method: i,
      encType: f,
      formData: d,
      body: u
    } = rt(r, t);
    if (o.navigate === !1) {
      let c = o.fetcherKey || wt();
      e.fetch(c, n, o.action || l, {
        preventScrollReset: o.preventScrollReset,
        formData: d,
        body: u,
        formMethod: o.method || i,
        formEncType: o.encType || f,
        flushSync: o.flushSync
      });
    } else
      e.navigate(o.action || l, {
        preventScrollReset: o.preventScrollReset,
        formData: d,
        body: u,
        formMethod: o.method || i,
        formEncType: o.encType || f,
        replace: o.replace,
        state: o.state,
        fromRouteId: n,
        flushSync: o.flushSync,
        viewTransition: o.viewTransition
      });
  }, [e, t, n]);
}
function St(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = a.useContext(S), o = a.useContext(P);
  o || b(!1);
  let [l] = o.matches.slice(-1), i = _({}, B(e || ".", {
    relative: n
  })), f = D();
  if (e == null) {
    i.search = f.search;
    let d = new URLSearchParams(i.search), u = d.getAll("index");
    if (u.some((s) => s === "")) {
      d.delete("index"), u.filter((h) => h).forEach((h) => d.append("index", h));
      let s = d.toString();
      i.search = s ? "?" + s : "";
    }
  }
  return (!e || e === ".") && l.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : A([r, i.pathname])), Q(i);
}
function Pt(e, t) {
  t === void 0 && (t = {});
  let n = a.useContext(pe);
  n == null && b(!1);
  let {
    basename: r
  } = ve(J.useViewTransitionState), o = B(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let l = U(n.currentLocation.pathname, r) || n.currentLocation.pathname, i = U(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ne(o.pathname, i) != null || ne(o.pathname, l) != null;
}
export {
  Mt as F,
  It as N,
  Ot as O,
  Je as R,
  de as a,
  ze as b,
  Bt as c,
  _t as d,
  Dt as e,
  Ut as f,
  kt as g,
  Nt as h,
  ae as i,
  Ft as j,
  At as k,
  Tt as l,
  D as u
};
