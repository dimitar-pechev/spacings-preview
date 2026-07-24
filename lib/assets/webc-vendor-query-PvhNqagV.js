import { r as n, j as x, a2 as m, a3 as R, a4 as f, a5 as E, a6 as Q, a7 as d } from "./webc-vendor-BjE1NNvQ.js";
var g = n.createContext(
  void 0
), p = (e) => {
  const s = n.useContext(g);
  if (!s)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return s;
}, j = ({
  client: e,
  children: s
}) => (n.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ x.jsx(g.Provider, { value: e, children: s })), v = n.createContext(!1), w = () => n.useContext(v);
v.Provider;
function O() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var S = n.createContext(O()), q = () => n.useContext(S), T = (e, s) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (s.isReset() || (e.retryOnMount = !1));
}, P = (e) => {
  n.useEffect(() => {
    e.clearReset();
  }, [e]);
}, _ = ({
  result: e,
  errorResetBoundary: s,
  throwOnError: o,
  query: t,
  suspense: u
}) => e.isError && !s.isReset() && !e.isFetching && t && (u && e.data === void 0 || m(o, [e.error, t])), M = (e) => {
  if (e.suspense) {
    const s = (t) => t === "static" ? t : Math.max(t ?? 1e3, 1e3), o = e.staleTime;
    e.staleTime = typeof o == "function" ? (...t) => s(o(...t)) : s(o), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3));
  }
}, B = (e, s) => e.isLoading && e.isFetching && !s, k = (e, s) => e?.suspense && s.isPending, C = (e, s, o) => s.fetchOptimistic(e).catch(() => {
  o.clearReset();
});
function H(e, s, o) {
  const t = w(), u = q(), i = p(), r = i.defaultQueryOptions(e);
  i.getDefaultOptions().queries?._experimental_beforeQuery?.(
    r
  ), r._optimisticResults = t ? "isRestoring" : "optimistic", M(r), T(r, u), P(u);
  const l = !i.getQueryCache().get(r.queryHash), [a] = n.useState(
    () => new s(
      i,
      r
    )
  ), c = a.getOptimisticResult(r), y = !t && e.subscribed !== !1;
  if (n.useSyncExternalStore(
    n.useCallback(
      (h) => {
        const b = y ? a.subscribe(R.batchCalls(h)) : f;
        return a.updateResult(), b;
      },
      [a, y]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), n.useEffect(() => {
    a.setOptions(r);
  }, [r, a]), k(r, c))
    throw C(r, a, u);
  if (_({
    result: c,
    errorResetBoundary: u,
    throwOnError: r.throwOnError,
    query: i.getQueryCache().get(r.queryHash),
    suspense: r.suspense
  }))
    throw c.error;
  return i.getDefaultOptions().queries?._experimental_afterQuery?.(
    r,
    c
  ), r.experimental_prefetchInRender && !E && B(c, t) && (l ? (
    // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
    C(r, a, u)
  ) : (
    // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
    i.getQueryCache().get(r.queryHash)?.promise
  ))?.catch(f).finally(() => {
    a.updateResult();
  }), r.notifyOnChangeProps ? c : a.trackResult(c);
}
function D(e, s) {
  return H(e, Q);
}
function F(e, s) {
  const o = p(), [t] = n.useState(
    () => new d(
      o,
      e
    )
  );
  n.useEffect(() => {
    t.setOptions(e);
  }, [t, e]);
  const u = n.useSyncExternalStore(
    n.useCallback(
      (r) => t.subscribe(R.batchCalls(r)),
      [t]
    ),
    () => t.getCurrentResult(),
    () => t.getCurrentResult()
  ), i = n.useCallback(
    (r, l) => {
      t.mutate(r, l).catch(f);
    },
    [t]
  );
  if (u.error && m(t.options.throwOnError, [u.error]))
    throw u.error;
  return { ...u, mutate: i, mutateAsync: u.mutate };
}
var N = function() {
  return null;
};
export {
  j as Q,
  N as R,
  F as a,
  p as b,
  D as u
};
