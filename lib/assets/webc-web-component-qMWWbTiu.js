import { aA as Wo, aB as Vo, aC as fn, r as c, aD as Ko, aE as Yo, aF as is, aG as mt, j as o, aH as Ue, aI as F, aJ as ls, aK as zo, aL as ke, u as qo, aM as Xo, aN as Qo, aO as Jo, aP as Zo } from "./webc-vendor-CvrN3tmw.js";
import { b as ea, c as cs, d as le, e as Ft, f as Gt, O as ie, g as ta, u as Ce, h as na, a as sa, R as N, i as oa, j as aa, k as ra } from "./webc-vendor-react-router-Tvle1imR.js";
import { u as V, a as Pt, b as ia, Q as la, R as ca } from "./webc-vendor-query-ByFZOUhz.js";
import { v as ua, j as De, M as L, d as C, p as O, g as us, W as da, m as pa, s as ne, c as Q, i as wt, a as ha, B as fa, b as mn, l as Ht, e as He, f as ma, n as Je, h as ds, z as ps, k as hs, w as ga, o as it, q as lt, r as gn, t as _n, u as _a, E as ya, X as yn, x as xa, y as Ta, P as Sa, A as oe, C as Ea, O as ba, L as Aa, V as Ra, K as xn, D as Tt, F as Ca, Z as Tn, G as fs, H as Lt, I as Da, Q as Ia, J as Oa, N as Na, R as Pa, S as ms, T as gs, U as wa, Y as _s, _ as ys, $ as xs, a0 as La } from "./webc-vendor-core-BCd2u07H.js";
import { l as f } from "./webc-vendor-lodash-BJv5POtF.js";
import { w as va, c as Sn, E as ja } from "./webc-vendor-sentry-CBfDr87K.js";
import { D as j, a as ve } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { u as W, ao as me, ap as $t, aq as En, ar as Ba, as as Ma, F as Ts, at as bn, au as Ua, av as ka } from "./webc-vendor-mui-C8wQ-7jG.js";
import { u as z, i as St, a as Fa } from "./webc-vendor-i18n-BICogURo.js";
Array.prototype.toSorted || Object.defineProperty(Array.prototype, "toSorted", {
  value: function(t) {
    return [...this].sort(t);
  },
  writable: !0,
  configurable: !0,
  enumerable: !1
});
Array.prototype.toReversed || Object.defineProperty(Array.prototype, "toReversed", {
  value: function() {
    return [...this].reverse();
  },
  writable: !0,
  configurable: !0,
  enumerable: !1
});
const Et = "UTC", Ga = () => {
  try {
    const e = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone;
    if (f.isString(e) && e && e.toUpperCase() !== Et)
      return e;
  } catch (e) {
    console.warn("Unable to resolve timezone:", e);
  }
  try {
    const e = (/* @__PURE__ */ new Date()).getTimezoneOffset(), t = e <= 0 ? "+" : "-", n = Math.abs(e), s = String(Math.floor(n / 60)).padStart(2, "0"), a = String(n % 60).padStart(2, "0");
    return `${Et}${t}${s}:${a}`;
  } catch {
    return Et;
  }
}, Ha = "RND-Timezone", An = Ga(), $a = "__API_BASE_URL__", Wa = () => globalThis.window === void 0 ? void 0 : globalThis.window[$a] || void 0, Va = () => "https://e-commerce.officernd.com" || void 0, Ka = () => Wa() ?? Va(), M = Wo.create({
  baseURL: Ka()
});
M.interceptors.request.use((e) => (An && (e.headers[Ha] = An), e));
M.interceptors.response.use(
  (e) => e,
  (e) => {
    throw e.response ? e.response.data : new Error(e.message || "Network error");
  }
);
const Wt = Symbol.for("@officernd/segment-analytics"), Vt = globalThis, Ya = (e) => {
  Vt[Wt] = e;
}, at = () => Vt[Wt] ?? null, za = () => {
  delete Vt[Wt];
}, Ss = (e) => !e || typeof e != "string" ? !1 : e.includes("fonts.googleapis.com"), qa = (e) => {
  if (!e || typeof e != "string")
    return e;
  const t = e.trim();
  if (!t)
    return e;
  if (Ss(t) && !/[?&]display=/i.test(t)) {
    const n = t.includes("?") ? "&" : "?";
    return `${t}${n}display=swap`;
  }
  return e;
}, Xa = (e) => {
  if (!e || typeof e != "object") return;
  const t = e, { message: n, error: s, error_description: a } = t;
  return f.find(
    [n, s, a],
    (r) => typeof r == "string" && r.trim() !== ""
  );
}, Qa = (e) => {
  if (e instanceof Error)
    return e;
  let t = "Unknown error", n = "NormalizedError";
  if (typeof e == "string")
    t = e;
  else if (typeof e == "object" && e) {
    const a = e, r = Xa(a);
    r && (t = r), typeof a.statusCode == "number" && (n = `HttpError ${a.statusCode}`);
  }
  const s = new Error(t);
  return s.name = n, s;
}, Kt = (e, t) => {
  if (!e || e?.__sentry_captured__)
    return;
  const n = Qa(e);
  e !== n ? va((s) => {
    s.setExtra("originalError", e), Sn(n, t);
  }) : Sn(n, t);
}, Ja = (e, t) => {
  const { openTime: n, closeTime: s, forBookings: a, forNonActiveMembers: r } = t, i = a && r;
  let l = e.startOf("day"), d = e.endOf("day");
  return i && (n !== null && n > 0 && (l = e.set({
    hour: Math.floor(n),
    minute: Math.floor(n % 1 * 60)
  })), s !== null && s < 24 && (d = e.set({
    hour: Math.floor(s),
    minute: Math.floor(s % 1 * 60)
  }))), { startOfDay: l, endOfDay: d };
}, Za = (e, t, n) => {
  const { startOfDay: s, endOfDay: a } = Ja(t, n), r = e.toSorted(
    (d, u) => d.start.toMillis() - u.start.toMillis()
  );
  let i = s, l = !1;
  return r.some((d) => {
    if (d.start <= i) {
      if (i = d.end > i ? d.end : i, i >= a)
        return l = !0, !0;
    } else
      return !0;
    return !1;
  }), l || i >= a;
}, Yt = ({
  cellDate: e,
  businessHours: t,
  closedDaysIntervals: n,
  occupiedDaysIntervals: s,
  occurrencesIntervals: a,
  selectedDaysInterval: r,
  timezone: i,
  bookingMode: l
}) => {
  const { days: d } = t, u = j.now().setZone(i), p = e.setZone(i, { keepLocalTime: !0 }), h = p.endOf("day"), m = h < u, _ = h > u.plus({ months: _t }), T = p.hasSame(u, "day"), y = d.includes(e.weekday % 7), x = f.some(
    n,
    (E) => (
      // NOTE: Luxon intervals are half-open (inclusive of the start but not the end).
      E.contains(e) || E.end?.hasSame(e, "day")
    )
  ), A = f.some(
    s ?? [],
    (E) => (
      // NOTE: Luxon intervals are half-open (inclusive of the start but not the end).
      E.contains(e) || E.end?.hasSame(e, "day")
    )
  ), R = l === ye.Date ? f.some(
    a,
    (E) => (
      // NOTE: Luxon intervals are half-open (inclusive of the start but not the end).
      E.contains(p) || E.end?.hasSame(p, "day")
    )
  ) : Za(a ?? [], p, t), b = !!(r && // 1) Normal interval containment (works for date ranges)
  (r.contains(e) || // 2) Date-based bookings: treat [startOfDay, nextDayStart) as selecting the final calendar day
  l === ye.Date && r.end?.hasSame(e, "day") || // 3) Time-based bookings: select the business day of the START,
  // even when the time range crosses midnight (e.g. 23:00–00:00)
  l === ye.Time && r.start?.hasSame(e, "day")));
  return {
    isPast: m,
    isFutureLimited: _,
    isToday: T,
    isWorkday: y,
    isClosedDay: x,
    isBooked: R,
    isSelected: b,
    isFullyOccupied: A
  };
}, Es = (e, t) => e.filter((n) => {
  const s = f.some(n.locations);
  return t ? !s || f.intersection(n.locations, t).length > 0 : !s;
}), Hu = (e, t, n, s) => Es(e, [t]).reduce((r, { from: i, to: l, occurrence: d }) => {
  let u = _e(i).setZone(s, { keepLocalTime: !0 }), p = _e(l).setZone(s, { keepLocalTime: !0 });
  d === "yearly" && (u = u.set({ year: n.year }), p = p.set({ year: n.year }), p < u && (p = p.plus({ years: 1 })));
  const h = ve.fromDateTimes(u, p);
  return (h.contains(n) || n.hasSame(u, "month") && n.hasSame(u, "day") || n.hasSame(p, "month") && n.hasSame(p, "day")) && r.push(h), r;
}, []), er = (e, t) => {
  if (!e.start || !e.end)
    return !1;
  const n = t.startOf("day"), s = t.endOf("day");
  return e.start <= n && e.end >= s;
}, bs = (e, t, n) => !t || t.length === 0 ? !1 : n ? t.some((s) => er(s, e)) : t.some(
  (s) => s.contains(e) || s.end?.hasSame(e, "day")
), ct = ({
  workDays: e,
  closedDaysIntervals: t,
  skipOnlyFullyClosed: n,
  startingFrom: s
}) => {
  const a = s ?? j.now();
  if (f.isEmpty(e))
    return a.startOf("day");
  const r = e.slice().sort((_, T) => _ - T), i = a.weekday % 7, l = r.indexOf(i), d = l !== -1;
  let u;
  if (d) {
    const _ = (l + 1) % r.length;
    u = r[_];
  } else
    u = r.find((_) => _ > i) ?? r[0];
  const h = u > i ? u - i : 7 - (i - u);
  let m = a.plus({ days: h }).startOf("day");
  if (t && t.length > 0) {
    const _ = _t * 31;
    let T = 0;
    for (; bs(m, t, n) && T < _; ) {
      m = m.plus({ days: 1 }).startOf("day"), T += 1;
      const y = m.weekday % 7;
      if (!r.includes(y)) {
        const A = r.find((E) => E > y) ?? r[0], b = A > y ? A - y : 7 - (y - A);
        m = m.plus({ days: b }).startOf("day"), T += b;
      }
    }
  }
  return m;
}, tr = (e, t, n, s) => {
  const a = e.setZone(s, { keepLocalTime: !0 }), r = a.set({
    hour: t ? Math.floor(t) : 0,
    minute: t ? Math.floor(t % 1 * 60) : 0,
    second: 0,
    millisecond: 0
  }), i = a.set({
    hour: n ? Math.floor(n) : 23,
    minute: n ? Math.floor(n % 1 * 60) : 30,
    second: 0,
    millisecond: 0
  });
  return {
    start: r.setZone("local"),
    end: i.setZone("local")
  };
}, nr = (e, t, n, s, a, r) => {
  const i = n.startOf("day"), l = n.endOf("day");
  if (e <= i && t >= l)
    return !0;
  const { start: d, end: u } = tr(
    n,
    s,
    a,
    r
  ), p = j.max(d, i), h = j.min(u, l);
  return e <= p && t >= h;
}, $u = (e) => e.map((t) => ve.fromDateTimes(t.start.startOf("day"), t.end.endOf("day"))), As = (e, t, n) => {
  const { openTime: s, closeTime: a } = t;
  return f.compact(
    e.map((r) => {
      const i = r.start, l = r.end, d = i.startOf("day"), u = l.startOf("day");
      let p = null, h = null;
      for (let m = d; m <= u; m = m.plus({ days: 1 }))
        if (nr(
          i,
          l,
          m,
          s,
          a,
          n
        ))
          p = p || m, h = m;
        else if (p)
          break;
      return p && h ? ve.fromDateTimes(p.startOf("day"), h.endOf("day")) : null;
    })
  );
}, Wu = (e, t, n, s) => {
  if (f.isEmpty(e))
    return [];
  const a = Object.keys(e).filter(
    (r) => t - e[r] < n
  );
  return f.compact(
    a.map((r) => {
      const i = j.fromISO(r, { zone: s ?? "utc" });
      return i.isValid ? ve.fromDateTimes(i, i.endOf("day")) : null;
    })
  );
}, Rs = /\/[^/]+(?<transferablePath>\/.+)?/, sr = /(^|\s|[-.,!?;:"()[\]{}])(\S)/g, $e = (e) => Vo.stringify(e, {
  arrayFormat: "comma",
  skipNulls: !0
}), je = () => {
  try {
    const e = window.self !== window.top, t = window.frameElement != null;
    return e || t;
  } catch {
    return !0;
  }
}, Rn = (e) => e.setZone("utc", { keepLocalTime: !0 }).toISO(), _e = (e) => j.fromISO(e, { zone: "UTC" }).setZone("local", { keepLocalTime: !0 }), Vu = (e) => e.replace(
  sr,
  (t, n, s) => n + s.toUpperCase()
), Ku = (e, t, n = 1, s = 1) => ({
  src: `${e}?w=${t * s}&h=${t * n}&fit=cover&auto=format`,
  srcSet: `${e}?w=${t * s}&h=${t * n}&fit=cover&auto=format&dpr=2 2x`
}), Yu = (e, t) => {
  const n = "MMMM dd, yyyy", { periodStart: s, periodEnd: a } = e, r = f.upperFirst(
    j.fromISO(s, { zone: "utc" }).setLocale(t).toFormat(n)
  ), i = f.upperFirst(
    j.fromISO(a, { zone: "utc" }).setLocale(t).toFormat(n)
  );
  return `${r} - ${i}`;
}, zu = (e, t) => {
  const n = Math.floor(t), s = t % 1 * 60;
  return e.set({ hour: n, minute: s });
}, or = (e, t) => {
  const n = window.location.hash.slice(1), [s, a = ""] = n.split("?", 2), r = s.replace(Rs, `/${e}$<transferablePath>`), i = new URLSearchParams(a);
  i.delete("office"), i.delete("amenities"), t && i.set("office", t);
  const l = i.toString(), d = `${r}?${l}`, p = `${window.location.href.split("#")[0]}#${d}`;
  window.location.replace(p), window.location.reload();
}, ar = (e, t) => {
  const n = new URLSearchParams(window.location.search), s = {
    ...f.omit(Object.fromEntries(n), ["amenities", "office"]),
    ...t && { office: t }
  }, a = window.location.pathname.replace(
    Rs,
    `/${e}$<transferablePath>`
  );
  window.location.replace(`${a}?${$e(s)}`);
}, vt = ({ orgSlug: e, office: t, isWebComponent: n }) => {
  if (!e)
    throw new Error("Org slug not found.");
  const s = f.isArray(t) ? f.filter(
    f.map(t, (a) => f.trim(a)),
    Boolean
  ).join(",") : f.trim(t) || "";
  n ? or(e, s) : ar(e, s);
}, Cs = (e, t) => {
  const n = async () => {
    try {
      await e();
    } catch (s) {
      console.error("Error in idle task callback:", s);
    }
  };
  typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(n, { timeout: t }) : setTimeout(n, t);
}, qu = (e) => e?.price ? e.price * (1 + (e.markUp ?? 0) / 100) : 0, Xu = (e, t) => {
  if (!e || !t)
    return { minimumFractionDigits: 0 };
  const n = e.toFixed(t);
  return {
    // we want to display decimal digits when having fractional number prices (e.g. 7.50, 8.66, 9.01),
    // but for integers we don't want to render the zeros (desired is 7, 8, 9 and not 7.00, 8.00, 9.00)
    minimumFractionDigits: parseFloat(n) % 1 !== 0 ? t : 0
  };
}, rr = () => {
  const { hash: e } = window.location, t = e.indexOf("?");
  return t >= 0 ? e.slice(t + 1) : "";
}, Qu = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia("(max-width: 768px)").matches, ir = (e, t, n) => {
  if (!n?.length)
    return e;
  const s = n.toLowerCase().trim().split(/\s+/).filter((a) => a.length >= 2);
  return s.length ? s.reduceRight(
    (a, r) => fn(a, r, {
      keys: t,
      threshold: fn.rankings.CONTAINS,
      // Require the term to be contained within the text
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      baseSort: (i, l) => 0
      // Disable distance-based sorting
    }),
    e
  ) : e;
}, lr = (e, t = () => "") => (n, s) => {
  const a = e(n), r = e(s);
  if (!a && r)
    return 1;
  if (a && !r)
    return -1;
  if (a && r) {
    const i = a.localeCompare(r);
    if (i !== 0)
      return i;
  } else {
    if (a)
      return -1;
    if (r)
      return 1;
  }
  return t(n).localeCompare(t(s));
}, cr = () => parseFloat(getComputedStyle(document.documentElement).fontSize), ur = (e) => {
  if (!e || typeof e != "string")
    throw new Error("value must be a non-empty string");
  const t = parseFloat(e);
  if (Number.isNaN(t))
    throw new Error("value must contain a valid number");
  if (e.endsWith("px"))
    return t;
  if (e.endsWith("rem")) {
    const n = cr();
    return t * n;
  }
  throw new Error("value must include units (px or rem)");
}, Cn = "direct", Dn = "direct", In = "organic", dr = "referral", pr = "search", hr = "gh_", fr = "_first_touch_utms", Ds = (e) => `${hr}${e}${fr}`, mr = [
  "e-commerce-staging.officernd.com",
  "e-commerce.officernd.com"
], ee = (e) => {
  const t = f.toLower(e);
  return (n) => n === t || f.endsWith(n, `.${t}`);
}, gr = (e) => ee("google.com")(e) ? !0 : /^([a-z0-9-]+\.)?google(\.[a-z]{2,3}){1,2}$/.test(e), _r = (e) => ee("yandex.com")(e) || ee("yandex.ru")(e) || f.includes(e, ".yandex."), yr = (e) => e === "search.brave.com" || e === "brave.com", xr = [
  { slug: "google", matches: gr },
  { slug: "bing", matches: ee("bing.com") },
  { slug: "yahoo", matches: ee("yahoo.com") },
  { slug: "duckduckgo", matches: ee("duckduckgo.com") },
  { slug: "baidu", matches: ee("baidu.com") },
  { slug: "yandex", matches: _r },
  { slug: "ecosia", matches: ee("ecosia.org") },
  { slug: "ask", matches: ee("ask.com") },
  { slug: "aol", matches: ee("aol.com") },
  { slug: "naver", matches: ee("naver.com") },
  { slug: "seznam", matches: ee("seznam.cz") },
  { slug: "qwant", matches: ee("qwant.com") },
  { slug: "startpage", matches: ee("startpage.com") },
  { slug: "brave", matches: yr }
], Tr = [
  "co.uk",
  "org.uk",
  "com.au",
  "net.au",
  "co.nz",
  "co.jp",
  "com.br",
  "co.za"
], Sr = (e) => f.startsWith(e, "www.") ? e.slice(4) : e, On = (e) => {
  const t = f.toLower(Sr(e)), n = t.split(".");
  if (n.length <= 2)
    return t;
  const s = n.slice(-2).join(".");
  return f.includes(Tr, s) ? n.slice(-3).join(".") : s;
}, Er = (e, t) => On(e) === On(t), br = (e) => !!(f.trim(e.utm_source) || f.trim(e.utm_medium)), Ar = (e) => {
  const t = f.trim(e);
  if (!t)
    return null;
  try {
    return f.toLower(new URL(t).hostname);
  } catch {
    return null;
  }
}, Rr = (e) => f.includes(mr, e), Cr = (e) => {
  const t = f.toLower(e);
  return f.find(xr, ({ matches: s }) => s(t))?.slug ?? null;
}, Dr = (e) => f.startsWith(e, "www.") ? e.slice(4) : e, Ir = (e, {
  pageHostname: t = globalThis.location?.hostname ?? "",
  isWebComponent: n = !1
} = {}) => {
  const s = Ar(e ?? "");
  if (!s)
    return { utm_source: Cn, utm_medium: Dn };
  if (Rr(s))
    return { utm_source: Cn, utm_medium: Dn };
  const a = Cr(s);
  return a ? { utm_source: a, utm_medium: In } : n && Er(s, t) ? { utm_source: In, utm_medium: pr } : {
    utm_source: Dr(s),
    utm_medium: dr
  };
}, Is = {
  getItem: (e) => {
    try {
      return globalThis.sessionStorage?.getItem(e) ?? null;
    } catch {
      return null;
    }
  },
  setItem: (e, t) => {
    try {
      globalThis.sessionStorage?.setItem(e, t);
    } catch {
    }
  }
}, Or = (e) => {
  if (!e)
    return null;
  try {
    const t = JSON.parse(e);
    return !f.trim(t.utm_source) && !f.trim(t.utm_medium) ? null : t;
  } catch {
    return null;
  }
}, Os = (e) => Or(Is.getItem(Ds(e))), Ns = (e, t) => {
  Is.setItem(Ds(e), JSON.stringify(t));
}, Nr = (e, t, n) => e?.origin === "url" && e.utm_source === t && e.utm_medium === n, Pr = (e, t) => {
  const n = t.utm_source ?? "", s = t.utm_medium ?? "", a = Os(e);
  Nr(a, n, s) || Ns(e, {
    utm_source: n,
    utm_medium: s,
    origin: "url"
  });
}, wr = (e, t) => ({
  ...e,
  ...f.trim(t.utm_source) && { utm_source: t.utm_source },
  ...f.trim(t.utm_medium) && { utm_medium: t.utm_medium }
}), Lr = (e, t, n, s, a) => {
  const r = Ir(n, {
    pageHostname: s,
    isWebComponent: a
  });
  return t && Ns(t, { ...r, origin: "referrer" }), {
    ...e,
    utm_source: r.utm_source,
    utm_medium: r.utm_medium
  };
}, vr = ({
  urlParams: e,
  orgSlug: t,
  documentReferrer: n = globalThis.document?.referrer ?? "",
  pageHostname: s = globalThis.location?.hostname ?? "",
  isWebComponent: a = !1
}) => {
  if (br(e))
    return t && Pr(t, e), e;
  const r = t ? Os(t) : null;
  return r ? wr(e, r) : Lr(
    e,
    t,
    n,
    s,
    a
  );
}, jr = (e) => f.pickBy(e), Ju = (e) => {
  if (!f.isEmpty(f.pickBy(e)))
    return {
      ...e.utm_source && { utmSource: e.utm_source },
      ...e.utm_medium && { utmMedium: e.utm_medium },
      ...e.utm_campaign && { utmCampaign: e.utm_campaign },
      ...e.utm_term && { utmTerm: e.utm_term },
      ...e.utm_content && { utmContent: e.utm_content }
    };
}, Ze = "gh-lazy-load-reload-attempted", Br = [
  "Failed to fetch dynamically imported module",
  "Importing a module script failed",
  "error loading dynamically imported module",
  "Failed to load module script"
], Mr = (e) => {
  try {
    return sessionStorage.getItem(e);
  } catch {
    return null;
  }
}, Ur = (e, t) => {
  try {
    sessionStorage.setItem(e, t);
  } catch {
  }
}, Nn = (e) => {
  try {
    sessionStorage.removeItem(e);
  } catch {
  }
}, kr = (e) => {
  if (!e)
    return !1;
  const t = e instanceof Error ? e.message : String(e);
  return Br.some(
    (n) => t.toLowerCase().includes(n.toLowerCase())
  );
}, se = (e) => c.lazy(
  () => e().then((t) => (Nn(Ze), t)).catch((t) => {
    if (!kr(t))
      throw t;
    if (!Mr(Ze))
      return Ur(Ze, "true"), window.location.reload(), new Promise(() => {
      });
    throw Nn(Ze), t;
  })
), Pn = new Ko({
  // https://officernd.atlassian.net/browse/GH-369
  // LOGGED TODO: Consider whether we need a global override for the queries staleTime default value 0.
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 10,
  //   },
  // },
  queryCache: new Yo({
    onError: (e, t) => {
      Kt(e, {
        tags: {
          source: "tanstack-query",
          queryKeyHash: t.queryHash,
          queryKeyType: Array.isArray(t.queryKey) ? String(t.queryKey[0]) : "unknown"
        }
      }), t.state.data !== void 0 && ua({
        severity: "error",
        message: `Something went wrong: ${e.message}`,
        alertProps: { role: "status", "aria-live": "polite" }
      });
    }
  })
});
var ce = /* @__PURE__ */ ((e) => (e[e.VolatileData = 1e4] = "VolatileData", e[e.DurableData = 6e4] = "DurableData", e[e.Infinite = 1 / 0] = "Infinite", e))(ce || {});
const Ae = is(null), Z = mt(() => !1), Ps = ({
  children: e,
  icon: t,
  rtlIcon: n,
  iconProps: s,
  fontSize: a,
  alignItems: r,
  direction: i = "row",
  gap: l = 1,
  ellipsis: d,
  sx: u,
  /**
   * NOTE: due to gap + wrapping issues with long text the icon needs to attach to the text to maintain the proper gap
   * TODO: potentially make the 'compact' mode a default - this seems to be the best way to handle right aligned text with icons
   */
  compact: p,
  textProps: h,
  ...m
}) => {
  const _ = W(), T = /* @__PURE__ */ o.jsx(
    De,
    {
      ...f.omit(s, "icon", "rtlIcon", "sx"),
      icon: t,
      rtlIcon: n,
      sx: {
        ...s?.sx,
        overflow: "unset",
        fontSize: a,
        marginInlineEnd: p ? l : void 0
      }
    }
  );
  return /* @__PURE__ */ o.jsx(
    L,
    {
      component: "span",
      variant: "caption",
      sx: {
        display: "block",
        margin: `${_.spacing(1)} 0`,
        fontSize: a,
        ...u
      },
      ...m,
      children: /* @__PURE__ */ o.jsxs(
        C,
        {
          gap: l,
          direction: i,
          alignItems: r ?? "inherit",
          sx: {
            // NOTE: Ensure flex children can shrink below content size for text truncation in Safari
            minWidth: 0
          },
          children: [
            !p && T,
            /* @__PURE__ */ o.jsxs(
              L,
              {
                ellipsis: d,
                ...h,
                sx: {
                  // NOTE: Critical for Safari - flex child must have minWidth: 0 to allow text truncation
                  minWidth: 0,
                  // NOTE: Ensure single-line text with ellipsis (prevents wrapping)
                  whiteSpace: d ? "nowrap" : void 0,
                  overflow: d ? "hidden" : void 0,
                  textOverflow: d ? "ellipsis" : void 0,
                  ...h?.sx
                },
                children: [
                  p && T,
                  e
                ]
              }
            )
          ]
        }
      )
    }
  );
}, zt = ({ sx: e, ...t }) => /* @__PURE__ */ o.jsx(
  De,
  {
    ...t,
    sx: { paddingInline: 2, paddingBlock: 1, cursor: "pointer", ...e },
    icon: "fas fa-chevron-down"
  }
), Fr = O, wn = () => {
  const e = ea();
  return c.useEffect(() => {
    Kt(e);
  }, [e]), console.error(e), /* @__PURE__ */ o.jsx(us, { theme: da("ltr"), children: /* @__PURE__ */ o.jsx(
    pa,
    {
      container: !0,
      justifyContent: "center",
      children: /* @__PURE__ */ o.jsxs(
        C,
        {
          padding: { xs: 6, sm: 10 },
          spacing: 4,
          children: [
            /* @__PURE__ */ o.jsx(ne, {}),
            /* @__PURE__ */ o.jsx(
              De,
              {
                icon: "far fa-exclamation-circle",
                sx: {
                  fontSize: (t) => t.typography.pxToRem(50),
                  color: "error.main"
                }
              }
            ),
            /* @__PURE__ */ o.jsx(
              L,
              {
                variant: "h2",
                textAlign: "center",
                children: "Oops! Sorry, an unexpected error has occurred."
              }
            ),
            /* @__PURE__ */ o.jsx(
              L,
              {
                "data-test": "error-message",
                variant: "body",
                textAlign: "center",
                children: e.statusText || e.message
              }
            ),
            /* @__PURE__ */ o.jsx(ne, {})
          ]
        }
      )
    }
  ) });
}, ws = ({
  placeholderText: e,
  iconWithText: t,
  ...n
}) => /* @__PURE__ */ o.jsx(
  O,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #364059b8",
    borderRadius: 3,
    ...n,
    children: /* @__PURE__ */ o.jsx(
      Ps,
      {
        alignItems: "center",
        fontSize: (s) => s.typography.pxToRem(36),
        ...t,
        children: e
      }
    )
  }
), Ls = ({
  onClick: e,
  title: t,
  size: n = "small",
  sx: s
}) => /* @__PURE__ */ o.jsx(
  Q,
  {
    "data-test": "reset-filter-button",
    variant: "text",
    size: n,
    color: "primary",
    disableRipple: !0,
    onClick: e,
    sx: {
      border: 0,
      padding: 0,
      "&:hover": {
        background: "none"
      },
      height: "auto",
      ...s
    },
    children: t
  }
), Ln = {
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  wordBreak: "break-word"
}, jt = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block"
}, Be = {
  height: (e) => e.typography.pxToRem(36)
}, Re = {
  border: 0,
  paddingInline: 4,
  paddingBlock: 2.5,
  ...Be
}, Gr = {
  paddingInline: 4,
  paddingBlock: 2.5,
  ...Be
}, Zu = {
  borderRadius: 3
}, We = {
  "& .MuiFormHelperText-root": { minHeight: "min-content", marginBlockStart: 0 }
};
({
  [`&.${wt} .k-datepicker`]: {
    ...Be
  },
  ...We
});
const Hr = (e) => ({
  [`&.${wt} .k-datepicker`]: {
    width: e ? "100%" : (t) => ({ xs: t.typography.pxToRem(130), md: t.typography.pxToRem(172) }),
    minWidth: e ? "100%" : void 0,
    ...Be
  },
  // NOTE: Re-apply the padding and margin to the icon button for the web component where it's not applied by default.
  [`&.${wt} .k-datepicker .k-icon-button`]: {
    padding: (t) => `${t.typography.pxToRem(4)} ${t.typography.pxToRem(8)}`,
    margin: (t) => `-${t.typography.pxToRem(1)}`
  },
  ...We
}), ed = (e) => ({
  position: "relative",
  alignSelf: "unset",
  width: e.typography.pxToRem(75)
}), td = (e) => ({
  objectFit: "cover",
  width: "100%",
  maxHeight: e.typography.pxToRem(320),
  borderRadius: 3,
  pointerEvents: "auto"
}), vs = {
  "& .MuiOutlinedInput-notchedOutline": {
    top: -5,
    height: (e) => e.typography.pxToRem(40)
  }
}, qt = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left"
  },
  sx: {
    "& .MuiMenu-list": {
      paddingTop: 0
    }
  }
}, nd = {
  "& .MuiFormHelperText-root": {
    lineHeight: 1.2,
    textAlign: "start",
    marginInlineStart: 0,
    height: "auto"
  }
}, sd = {
  "& .MuiTypography-root": {
    color: "inherit"
  }
}, od = (e) => ({
  color: (t) => t.palette.mode === "dark" ? t.palette[e].light : t.palette[e].main
}), $r = 6, Wr = 6, Vr = 20, Kr = "opacity(0.4)", vn = 0.1, jn = 0.9, Yr = [0, 1, 2], zr = ({
  containerRef: e,
  sx: t,
  dotBackgroundColor: n
}) => {
  const [s, a] = c.useState(
    0
    /* Start */
  ), r = W(), i = r.direction === "rtl";
  return c.useEffect(() => {
    const l = e?.current;
    if (!l)
      return;
    const d = () => {
      const { scrollLeft: u, scrollWidth: p, offsetWidth: h } = l;
      if (i) {
        const m = Math.abs(u), _ = p - h;
        m < _ * vn ? a(
          0
          /* Start */
        ) : m < _ * jn ? a(
          1
          /* Middle */
        ) : a(
          2
          /* End */
        );
        return;
      }
      u < p * vn ? a(
        0
        /* Start */
      ) : u + h < p * jn ? a(
        1
        /* Middle */
      ) : a(
        2
        /* End */
      );
    };
    return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
  }, [e, i]), /* @__PURE__ */ o.jsx(
    C,
    {
      direction: "row",
      spacing: r.spacing(r.spacingVariants.XXS),
      justifyContent: "center",
      sx: t,
      children: f.map(Yr, (l) => /* @__PURE__ */ o.jsx(
        O,
        {
          sx: {
            width: s === l ? r.typography.pxToRem(Vr) : r.typography.pxToRem(Wr),
            height: r.typography.pxToRem($r),
            borderRadius: r.borderRadiusVariants.XL,
            backgroundColor: n,
            filter: s === l ? void 0 : Kr
          }
        },
        l
      ))
    }
  );
};
var Ge = /* @__PURE__ */ ((e) => (e[e.SELECT = 14] = "SELECT", e[e.BUTTON = 19] = "BUTTON", e[e.SMALL = 27] = "SMALL", e[e.LARGE = 48] = "LARGE", e))(Ge || {});
const X = ({
  size: e = Ge.SMALL,
  circularProgressProps: t,
  ...n
}) => {
  const s = W();
  return /* @__PURE__ */ o.jsx(
    O,
    {
      "data-test": "loading-spinner",
      justifyContent: "center",
      alignItems: "center",
      ...n,
      children: /* @__PURE__ */ o.jsx(
        ha,
        {
          size: s.typography.pxToRem(e),
          ...t
        }
      )
    }
  );
}, qr = ({
  sx: e,
  tabs: t,
  pageContainerId: n,
  value: s,
  tabVariant: a,
  onChange: r
}) => /* @__PURE__ */ o.jsx(
  fa,
  {
    sx: e,
    tabs: t,
    value: s,
    tabVariant: a,
    pageContainerId: n,
    onChange: r
  }
), Ne = "dd/MM/yyyy HH:mm", Xr = "HH:mm", Qr = [
  {
    value: "en-gb",
    text: "English GB",
    format: Ne
  },
  {
    value: "en-au",
    text: "English AU",
    format: "dd/MM/yyyy h:mm a"
  },
  {
    value: "en-us",
    text: "English US",
    format: "MM/dd/yyyy h:mm a"
  },
  {
    value: "es-es",
    text: "Spanish",
    format: Ne
  },
  {
    value: "de-de",
    text: "Deutsch",
    format: "dd.MM.yyyy HH:mm"
  },
  {
    value: "fr-fr",
    text: "French",
    format: Ne
  },
  {
    value: "nl-nl",
    text: "Dutch",
    format: "dd-MM-yyyy HH:mm"
  },
  {
    value: "pl-pl",
    text: "Polish",
    format: "yyyy-MM-dd HH:mm"
  },
  {
    value: "it-it",
    text: "Italian",
    format: Ne
  },
  {
    value: "da-dk",
    text: "Danish",
    format: "dd-MM-yyyy HH:mm"
  },
  {
    value: "nb-no",
    text: "Norwegian",
    format: "dd.MM.yyyy HH:mm"
  },
  {
    value: "pt-pt",
    text: "Portuguese",
    format: Ne
  }
], Jr = f.keyBy(Qr, "value"), Zr = (e) => {
  const { currency: t } = e.settings.billing, { culture: n } = e.settings.calendar, a = Jr[f.toLower(n)]?.format || Ne, r = c.useCallback(
    (u, p = !1) => {
      const h = a.split(" ");
      if (p) {
        const m = h[1], _ = h[2];
        return u.toFormat(_ ? `${m} ${_}` : m);
      }
      return u.toFormat(a);
    },
    [a]
  ), i = c.useCallback(
    (u) => u.toFormat(a.split(" ")[0]),
    [a]
  ), l = c.useCallback(
    (u = 0, p) => u.toLocaleString(n, {
      style: "currency",
      currency: t,
      // NOTE: Preset default currency display, can be overridden by passing the option.
      currencyDisplay: "narrowSymbol",
      ...p
    }),
    [n, t]
  ), d = c.useCallback(
    (u = 0) => new Intl.NumberFormat(n, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(u / 100),
    [n]
  );
  return { formatCurrency: l, formatPercentage: d, formatDateTime: r, formatDate: i, localeFormat: a };
};
var ye = /* @__PURE__ */ ((e) => (e.Time = "time", e.Date = "date", e))(ye || {});
const be = 1, ut = 0.25, Bn = ut * 60;
var ei = /* @__PURE__ */ ((e) => (e.Past = "past", e.Future = "future", e))(ei || {});
const ti = (e) => {
  const t = e.length("hours") < 1 ? "minutes" : "hours";
  return e.toDuration(t).toHuman({ listStyle: "short", unitDisplay: "short" });
}, ni = (e) => e.equals(e.endOf("day")), Bt = (e) => j.now().startOf("day").set({ hour: e.hour, minute: e.minute }), et = (e, t) => e.set({ hour: t.hour, minute: t.minute }), Se = ({
  utcDateTime: e,
  openTime: t,
  closeTime: n,
  isStart: s,
  referenceDate: a
}) => {
  const r = Bt(e);
  return !s && a && !e.hasSame(a, "day") && e.hour === 0 && e.minute === 0 ? e : t && r < t ? s ? et(e, t) : et(e, t.plus({ hours: be })) : n && r > n ? s ? et(e, n.minus({ hours: be })) : et(e, n) : e;
}, si = (e, t) => t <= e ? e.plus({ hours: be }) : t, oi = ({
  dateTime: e,
  closedDaysIntervals: t
}) => {
  if (!t || t.length === 0)
    return e;
  const n = t.filter((s) => s.contains(e)).sort((s, a) => (s.end?.toMillis() ?? 0) - (a.end?.toMillis() ?? 0))[0];
  return n && n.end ? n.end : e;
}, ai = ({
  searchStart: e,
  workDays: t,
  closedDaysIntervals: n,
  searchStartTime: s
}) => {
  if (e) {
    const a = _e(e), r = a.startOf("day");
    return n && n.length > 0 && bs(r, n, !0) ? ct({
      workDays: t,
      closedDaysIntervals: n,
      skipOnlyFullyClosed: !0,
      startingFrom: a
    }).set({
      hour: s?.hour,
      minute: s?.minute
    }) : a;
  }
  return ct({
    workDays: t,
    closedDaysIntervals: n,
    skipOnlyFullyClosed: !0
  }).set({
    hour: s?.hour,
    minute: s?.minute
  });
}, fe = ({
  slotStart: e,
  slotEnd: t,
  localeFormat: n,
  calculateDurationHint: s = !1
}) => {
  const a = n.indexOf(" "), r = a !== -1 ? n.substring(a + 1) : Xr;
  let i = t;
  ni(t) && (i = t.plus({ days: 1 }).startOf("day"));
  const l = [];
  let d = e, u;
  do
    s && (u = ve.fromDateTimes(e, d)), l.push({
      value: d.toMillis(),
      text: `${d.toFormat(r)}${u ? ` (${ti(u)})` : ""}`
    }), d = d.plus({ hours: ut });
  while (d <= i);
  return l;
}, Mn = (e, t) => {
  const n = t === "past" ? Math.floor : Math.ceil, s = e.hour * 60 + e.minute, a = n(s / Bn) * Bn, r = Math.floor(a / 60), i = a % 60;
  return e.set({
    hour: r,
    minute: i,
    second: 0,
    millisecond: 0
  });
}, Un = ({
  localeFormat: e,
  searchStart: t,
  searchEnd: n,
  workDays: s,
  openTime: a,
  closeTime: r,
  bookingMode: i,
  searchStartTime: l,
  closedDaysIntervals: d
}) => {
  let u, p, h = [], m = [];
  i === ye.Date ? (u = t ? _e(t) : ct({ workDays: s, closedDaysIntervals: d }).startOf("day"), p = n ? _e(n) : ct({ workDays: s, closedDaysIntervals: d }).endOf("day")) : (u = ai({
    searchStart: t,
    workDays: s,
    closedDaysIntervals: d,
    searchStartTime: l
  }), u = oi({ dateTime: u, closedDaysIntervals: d }), u = Se({ utcDateTime: u, openTime: a, closeTime: r, isStart: !0 }), u = Mn(
    u,
    "past"
    /* Past */
  ), p = n ? _e(n) : u.plus({ hours: be }), p = si(u, p), p = Se({
    utcDateTime: p,
    openTime: a,
    closeTime: r,
    isStart: !1,
    referenceDate: u
  }), p = Mn(
    p,
    "future"
    /* Future */
  ));
  const _ = u, T = p;
  return h = fe({
    localeFormat: e,
    slotStart: a ? _.set({ hour: a.hour, minute: a.minute }) : _.startOf("day"),
    slotEnd: r ? T.set({ hour: r.hour, minute: r.minute }) : T.endOf("day")
  }).slice(0, -1), m = fe({
    slotStart: _,
    slotEnd: r ? T.set({ hour: r.hour, minute: r.minute }) : T.endOf("day"),
    localeFormat: e,
    calculateDurationHint: !0
  }).slice(1), { start: u, end: p, startSlots: h, endSlots: m };
}, ri = ({
  businessHours: e
}) => {
  const {
    openTime: t,
    closeTime: n,
    forBookings: s,
    forNonActiveMembers: a
  } = e;
  let r, i;
  if (s && a) {
    const d = j.now().startOf("day");
    t !== null && t > 0 && (r = d.set({
      hour: Math.floor(t),
      minute: Math.floor(t % 1 * 60)
    })), n !== null && n < 24 && (i = d.set({
      hour: Math.floor(n),
      minute: Math.floor(n % 1 * 60)
    }));
  }
  return { openTime: r, closeTime: i };
}, ii = ({
  localeFormat: e,
  searchStart: t,
  searchEnd: n,
  businessHours: s,
  bookingMode: a,
  closedDaysIntervals: r
}) => {
  const { openTime: i, closeTime: l } = ri({ businessHours: s }), d = s.openTime ?? 0, u = j.now().set({
    hour: Math.floor(d),
    minute: Math.floor(d % 1 * 60)
  }), { days: p } = s, h = c.useRef(a), m = c.useCallback(
    // eslint-disable-next-line sonarjs/cognitive-complexity
    (R, b) => {
      const E = (g) => i ? g.set({ hour: i.hour, minute: i.minute }) : g.startOf("day"), D = (g) => l ? g.set({ hour: l.hour, minute: l.minute }) : g.endOf("day");
      switch (b.type) {
        case "SET_PERIOD_DATE":
          return Ue(R, (g) => {
            const S = g.start;
            if (g.start = b.payload, !g.start)
              return;
            let P = be;
            g.end && S && (P = g.end.diff(S, "hours").hours), g.end = g.start.plus({ hours: P }), g.end = Se({
              utcDateTime: g.end,
              openTime: i,
              closeTime: l,
              isStart: !1,
              referenceDate: g.start
            }), g.startSlots = fe({
              slotStart: E(g.start),
              slotEnd: D(g.start),
              localeFormat: e
            }).slice(0, -1), g.endSlots = fe({
              slotStart: g.start,
              slotEnd: D(g.start),
              localeFormat: e,
              calculateDurationHint: !0
            }).slice(1);
          });
        case "SET_PERIOD_START":
          return Ue(R, (g) => {
            if (g.start = b.payload, !g.start)
              return;
            g.start = Se({
              utcDateTime: g.start,
              openTime: i,
              closeTime: l,
              isStart: !0
            });
            let S = !1;
            if (!g.end)
              S = !0;
            else if (g.end.diff(g.start, "hours").hours < ut || // https://officernd.atlassian.net/browse/GH-373
            // LOGGED TODO: Respect booking policy "Max Duration" setting (default is 24 hours but as large as 1464 hours).
            g.end.diff(g.start, "hours").hours > 24)
              S = !0;
            else if (i && l) {
              const P = Bt(g.end);
              (P < i || P > l) && (S = !0);
            }
            S && (g.end = g.start.plus({ hours: be }), g.end = Se({
              utcDateTime: g.end,
              openTime: i,
              closeTime: l,
              isStart: !1,
              referenceDate: g.start
            })), g.endSlots = fe({
              slotStart: g.start,
              slotEnd: D(g.start),
              localeFormat: e,
              calculateDurationHint: !0
            }).slice(1);
          });
        case "SET_PERIOD_END":
          return Ue(R, (g) => {
            if (g.end = b.payload, !g.end)
              return;
            g.end = Se({
              utcDateTime: g.end,
              openTime: i,
              closeTime: l,
              isStart: !1,
              referenceDate: g.start ?? void 0
            });
            let S = !1;
            if (!g.start)
              S = !0;
            else if (g.end.diff(g.start, "hours").hours < ut)
              S = !0;
            else if (i && l) {
              const P = Bt(g.start);
              (P < i || P > l) && (S = !0);
            }
            S && (g.start = g.end.minus({ hours: be }), g.start = Se({
              utcDateTime: g.start,
              openTime: i,
              closeTime: l,
              isStart: !0
            }));
          });
        case "SET_DATE_START":
          return Ue(R, (g) => {
            if (g.start = b.payload, !g.start)
              return;
            let S = !1;
            (!g.end || g.end.diff(g.start, "days").days < 0) && (S = !0), g.start = g.start.startOf("day"), S && (g.end = g.start.endOf("day")), g.startSlots = fe({
              slotStart: E(g.start),
              slotEnd: D(g.start),
              localeFormat: e
            }).slice(0, -1), g.endSlots = fe({
              slotStart: E(g.start),
              slotEnd: D(g.start),
              localeFormat: e,
              calculateDurationHint: !0
            }).slice(1);
          });
        case "SET_DATE_END":
          return Ue(R, (g) => {
            if (g.end = b.payload, !g.end)
              return;
            let S = !1;
            (!g.start || g.start.diff(g.end, "days").days > 0) && (S = !0), g.end = g.end.endOf("day"), S && (g.start = g.end.startOf("day"), g.startSlots = fe({
              slotStart: E(g.start),
              slotEnd: D(g.start),
              localeFormat: e
            }).slice(0, -1), g.endSlots = fe({
              slotStart: E(g.start),
              slotEnd: D(g.start),
              localeFormat: e,
              calculateDurationHint: !0
            }).slice(1));
          });
        case "REINITIALIZE_SEARCH_RANGE":
        case "RESET_SEARCH_RANGE":
          return b.payload;
        default:
          return R;
      }
    },
    [i, l, e]
  ), [_, T] = c.useReducer(
    m,
    {
      openTime: i,
      closeTime: l,
      searchStart: t,
      searchEnd: n,
      localeFormat: e,
      bookingMode: a,
      workDays: p,
      searchStartTime: u,
      closedDaysIntervals: r
    },
    Un
  ), y = c.useCallback(
    (R) => Un({
      localeFormat: e,
      searchStart: R ? null : t,
      searchEnd: R ? null : n,
      workDays: p,
      openTime: i,
      closeTime: l,
      bookingMode: a,
      searchStartTime: u,
      closedDaysIntervals: r
    }),
    [
      e,
      t,
      n,
      p,
      i,
      l,
      a,
      u,
      r
    ]
  ), x = c.useCallback(() => {
    T({
      type: "RESET_SEARCH_RANGE",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: y(!0)
    });
  }, [T, y]), A = c.useCallback(() => {
    T({
      type: "REINITIALIZE_SEARCH_RANGE",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: y(!1)
    });
  }, [T, y]);
  return c.useEffect(() => {
    h.current && h.current !== a && x(), !h.current && a && A(), h.current = a;
  }, [a, x, A]), [_, T, x];
}, js = () => F(Ae);
var Bs = /* @__PURE__ */ ((e) => (e.GO_TO_LOCALIZATION = "go_to_localization", e.PROMO_CODE_CREATED = "promo_code_created", e.PROMO_CODE_EDITED = "promo_code_edited", e.RESOURCES_LISTED = "resources_listed", e.PLANS_LISTED = "plans_listed", e.BRANDING_DOCUMENTATION_LINK_CLICKED = "branding_typography_documentation_link_clicked", e.DYNAMIC_PRICING_EMPTY_STATE_VIEW_SETUP_GUIDE_CLICKED = "dynamic_pricing_empty_state_view_setup_guide_clicked", e.DYNAMIC_PRICING_EMPTY_STATE_CREATE_RULESET_CLICKED = "dynamic_pricing_empty_state_create_ruleset_clicked", e.DYNAMIC_PRICING_DATAGRID_CREATE_RULESET_CLICKED = "dynamic_pricing_datagrid_create_ruleset_clicked", e.DYNAMIC_PRICING_DATAGRID_SORT_CHANGE = "dynamic_pricing_datagrid_sort_change", e.DYNAMIC_PRICING_DATAGRID_FILTER_CHANGE = "dynamic_pricing_datagrid_filter_change", e.DYNAMIC_PRICING_DATAGRID_FILTER_RESET = "dynamic_pricing_datagrid_filter_reset", e.DYNAMIC_PRICING_DATAGRID_ACTIONS_ACTIVATED = "dynamic_pricing_datagrid_actions_activated", e.DYNAMIC_PRICING_DATAGRID_ACTIONS_DEACTIVATED = "dynamic_pricing_datagrid_actions_deactivated", e.DYNAMIC_PRICING_DATAGRID_ACTIONS_EDITED = "dynamic_pricing_datagrid_actions_edited", e.DYNAMIC_PRICING_DATAGRID_ACTIONS_DELETED = "dynamic_pricing_datagrid_actions_deleted", e.DYNAMIC_PRICING_DATAGRID_DOCUMENTATION_LINK_CLICKED = "dynamic_pricing_datagrid_documentation_link_clicked", e.DYNAMIC_PRICING_RULESET_CREATE_CLICKED = "dynamic_pricing_ruleset_create_clicked", e.DYNAMIC_PRICING_RULESET_CREATE_AND_ACTIVATE_CLICKED = "dynamic_pricing_ruleset_create_and_activate_clicked", e.DYNAMIC_PRICING_RULESET_RESOURCE_TYPE_SELECTED = "dynamic_pricing_ruleset_resource_type_selected", e.DYNAMIC_PRICING_RULESET_RESOURCE_SELECTED = "dynamic_pricing_ruleset_resource_selected", e.DYNAMIC_PRICING_RULESET_START_DATE_CHANGED = "dynamic_pricing_ruleset_start_date_changed", e.DYNAMIC_PRICING_RULESET_END_DATE_CHANGED = "dynamic_pricing_ruleset_end_date_changed", e.DYNAMIC_PRICING_RULESET_ADD_TIME_AND_DAY_RULE_CLICKED = "dynamic_pricing_ruleset_add_time_and_day_rule_clicked", e.DYNAMIC_PRICING_RULESET_EDIT_RULES_CLICKED = "dynamic_pricing_ruleset_edit_rules_clicked", e.DYNAMIC_PRICING_RULESET_DELETE_RULES_CLICKED = "dynamic_pricing_ruleset_delete_rules_clicked", e.DYNAMIC_PRICING_RULES_DISCARD_CLICKED = "dynamic_pricing_rules_discard_clicked", e.DYNAMIC_PRICING_RULES_SAVE_CLICKED = "dynamic_pricing_rules_save_clicked", e.DYNAMIC_PRICING_RULESET_OVERRIDES_SHOWN = "dynamic_pricing_ruleset_overrides_shown", e.DYNAMIC_PRICING_RULESET_ERROR_MESSAGE_SHOWN = "dynamic_pricing_ruleset_error_message_shown", e.ABANDONED_CHECKOUTS_EMPTY_STATE_VIEW_SETUP_GUIDE_CLICKED = "abandoned_checkouts_empty_state_view_setup_guide_clicked", e.ABANDONED_CHECKOUTS_EMPTY_STATE_CONFIGURE_RECOVERY_EMAILS_CLICKED = "abandoned_checkouts_empty_state_configure_recovery_emails_clicked", e.ABANDONED_CHECKOUTS_DATAGRID_SORT_CHANGE = "abandoned_checkouts_datagrid_sort_change", e.ABANDONED_CHECKOUTS_DATAGRID_FILTER_CHANGE = "abandoned_checkouts_datagrid_filter_change", e.ABANDONED_CHECKOUTS_DATAGRID_FILTER_RESET = "abandoned_checkouts_datagrid_filter_reset", e.ABANDONED_CHECKOUTS_SET_REMINDER_EMAILS_CLICKED = "abandoned_checkouts_set_reminder_emails_clicked", e.ABANDONED_CHECKOUTS_ACTIVATE_REMINDERS_CLICKED = "abandoned_checkouts_activate_reminders_clicked", e.ABANDONED_CHECKOUTS_PAUSE_REMINDERS_CLICKED = "abandoned_checkouts_pause_reminders_clicked", e.ABANDONED_CHECKOUTS_TOGGLE_DIALOG_CONFIRM_CLICKED = "abandoned_checkouts_toggle_dialog_confirm_clicked", e.ABANDONED_CHECKOUTS_DISABLE_ALL_DIALOG_CONFIRM_CLICKED = "abandoned_checkouts_disable_all_dialog_confirm_clicked", e.ABANDONED_CHECKOUTS_SETTINGS_SAVE_CLICKED = "abandoned_checkouts_settings_save_clicked", e.ABANDONED_CHECKOUTS_SETTINGS_SAVE_AND_ACTIVATE_CLICKED = "abandoned_checkouts_settings_save_and_activate_clicked", e.ABANDONED_CHECKOUTS_SETTINGS_SNACKBAR_ACTIVATE_CLICKED = "abandoned_checkouts_settings_snackbar_activate_clicked", e.ABANDONED_CHECKOUTS_REMINDER_EMAIL_TOGGLED = "abandoned_checkouts_reminder_email_toggled", e.ABANDONED_CHECKOUTS_REMINDER_EMAIL_RESET_CONTENT_CLICKED = "abandoned_checkouts_reminder_email_reset_content_clicked", e.DASHBOARD_SEARCH = "dashboard_search", e.SEARCH_RESULT_FILTER_CHANGE = "search_results_filter_change", e.SEARCH_RESULT_REQUEST_TO_BUY_BUTTON = "search_results_request_to_buy_button", e.SEARCH_RESULT_BUY_NOW_BUTTON = "search_results_buy_now_button", e.SEARCH_RESULT_REQUEST_TO_BOOK_BUTTON = "search_results_request_to_book_button", e.SEARCH_RESULT_BOOK_NOW_BUTTON = "search_results_book_now_button", e.SEARCH_RESULT_SEE_AVAILABILITY_BUTTON = "search_results_see_availability_button", e.DETAILS_REQUEST_TO_BUY_BUTTON = "detailed_page_request_to_buy_button", e.DETAILS_BUY_NOW_BUTTON = "detailed_page_buy_now_button", e.DETAILS_DAY_PERIOD_BUTTON = "detailed_page_day_period_button", e.DETAILS_BOOK_NOW_BUTTON = "detailed_page_book_now_button", e.DETAILS_REQUEST_TO_BOOK_BUTTON = "detailed_page_request_to_book_button", e.EXTRAS_SELECTED_QUANTITY_CHANGE = "extras_selected_quantity_change", e))(Bs || {}), B = /* @__PURE__ */ ((e) => (e.DYNAMIC_PRICING_DATAGRID_CREATE_RULE_BUTTON = "dynamic-pricing-resource-price-rules-page-header-action-button-create-rule", e.DYNAMIC_PRICING_RULESET_CREATION_CREATE_BUTTON = "dynamic-pricing-ruleset-creation-page-header-action-button-create", e.DYNAMIC_PRICING_RULESET_CREATION_CREATE_AND_ACTIVATE_BUTTON = "dynamic-pricing-ruleset-creation-page-header-action-button-create-and-activate", e.BRANDING_DOCUMENTATION_LINK = "branding-documentationLink", e.LANDING_PAGE_SMART_EMBEDDING_DOCUMENTATION_LINK = "landing-page-smart-embedding-documentationLink", e.DYNAMIC_PRICING_EMPTY_STATE_VIEW_SETUP_GUIDE_BUTTON = "dynamic-pricing-emptyState-viewSetupGuideButton", e.DYNAMIC_PRICING_EMPTY_STATE_CREATE_RULESET_BUTTON = "dynamic-pricing-emptyState-createRulesetButton", e.DYNAMIC_PRICING_DATAGRID_NAME = "dynamic-pricing-dataGrid-name", e.DYNAMIC_PRICING_DATAGRID_SCOPE = "dynamic-pricing-dataGrid-scope", e.DYNAMIC_PRICING_DATAGRID_PERIOD = "dynamic-pricing-dataGrid-period", e.DYNAMIC_PRICING_DATAGRID_RULE_TYPE = "dynamic-pricing-dataGrid-rule-type", e.DYNAMIC_PRICING_DATAGRID_STATUS = "dynamic-pricing-dataGrid-status", e.DYNAMIC_PRICING_DATAGRID_ACTIONS = "dynamic-pricing-dataGrid-actions", e.DYNAMIC_PRICING_DATAGRID_SCOPE_FILTER = "dynamic-pricing-dataGrid-scope-filter", e.DYNAMIC_PRICING_DATAGRID_STATUS_FILTER = "dynamic-pricing-dataGrid-status-filter", e.DYNAMIC_PRICING_DATAGRID_DOCUMENTATION_LINK = "dynamic-pricing-dataGrid-documentationLink", e.DYNAMIC_PRICING_DATAGRID_PERIOD_FILTER_START_DATE = "dynamic-pricing-dataGrid-period-filter-startDate", e.DYNAMIC_PRICING_DATAGRID_PERIOD_FILTER_END_DATE = "dynamic-pricing-dataGrid-period-filter-endDate", e.DYNAMIC_PRICING_RULESET_CREATION_RESOURCE_TYPE_SELECT = "dynamic-pricing-ruleset-creation-resourceTypeSelect", e.DYNAMIC_PRICING_RULESET_CREATION_START_DATE_INPUT = "dynamic-pricing-ruleset-creation-startDateInput", e.DYNAMIC_PRICING_RULESET_CREATION_END_DATE_INPUT = "dynamic-pricing-ruleset-creation-endDateInput", e.DYNAMIC_PRICING_RULESET_CREATION_ADD_TIME_DAY_RULE_BUTTON = "dynamic-pricing-ruleset-creation-addTimeDayRuleButton", e.DYNAMIC_PRICING_RULESET_CREATION_EDIT_RULES_BUTTON = "dynamic-pricing-ruleset-creation-editRulesButton", e.DYNAMIC_PRICING_RULESET_CREATION_DELETE_RULES_BUTTON = "dynamic-pricing-ruleset-creation-deleteRulesButton", e.DYNAMIC_PRICING_RULES_DISCARD_BUTTON = "dynamic-pricing-rules-discardButton", e.DYNAMIC_PRICING_RULES_SAVE_BUTTON = "dynamic-pricing-timeDay-saveButton", e.DYNAMIC_PRICING_RULES_ADJUST_TIME_TOGGLE = "dynamic-pricing-timeDay-adjustTimeToggle", e.DYNAMIC_PRICING_RULES_AND_BUTTON = "dynamic-pricing-timeDay-andButton", e.DYNAMIC_PRICING_RULES_DELETE_BUTTON = "dynamic-pricing-timeDay-deleteButton", e.DYNAMIC_PRICING_RULES_ADJUST_PRICE_INPUT = "dynamic-pricing-timeDay-adjustPriceInput", e.DYNAMIC_PRICING_RULESET_CREATION_OVERLAP_ERROR_MESSAGE = "dynamic-pricing-overlap-errorMessage", e.DYNAMIC_PRICING_RULESET_CREATION_PRIORITY_INFO_MESSAGE = "dynamic-pricing-priority-infoMessage", e.DYNAMIC_PRICING_RULESET_OVERRIDES_WARNING_MESSAGE = "dynamic-pricing-overrides-warningMessage", e.ABANDONED_CHECKOUTS_EMPTY_STATE_VIEW_SETUP_GUIDE_BUTTON = "abandoned-checkouts-emptyState-viewSetupGuideButton", e.ABANDONED_CHECKOUTS_EMPTY_STATE_CONFIGURE_RECOVERY_EMAILS_BUTTON = "abandoned-checkouts-emptyState-configureRecoveryEmailsButton", e.ABANDONED_CHECKOUTS_DATAGRID_EMAIL = "abandoned-checkouts-dataGrid-email", e.ABANDONED_CHECKOUTS_DATAGRID_PRODUCT = "abandoned-checkouts-dataGrid-product", e.ABANDONED_CHECKOUTS_DATAGRID_AMOUNT = "abandoned-checkouts-dataGrid-amount", e.ABANDONED_CHECKOUTS_DATAGRID_ABANDONED_AT = "abandoned-checkouts-dataGrid-abandonedAt", e.ABANDONED_CHECKOUTS_DATAGRID_EMAILS_SENT = "abandoned-checkouts-dataGrid-emailsSent", e.ABANDONED_CHECKOUTS_DATAGRID_STATUS = "abandoned-checkouts-dataGrid-status", e.ABANDONED_CHECKOUTS_DATAGRID_EMAIL_FILTER = "abandoned-checkouts-dataGrid-email-filter", e.ABANDONED_CHECKOUTS_DATAGRID_PRODUCT_FILTER = "abandoned-checkouts-dataGrid-product-filter", e.ABANDONED_CHECKOUTS_DATAGRID_STATUS_FILTER = "abandoned-checkouts-dataGrid-status-filter", e.ABANDONED_CHECKOUTS_DATAGRID_EMAILS_SENT_FILTER = "abandoned-checkouts-dataGrid-emailsSent-filter", e.ABANDONED_CHECKOUTS_DATAGRID_ABANDONED_AT_FILTER_FROM = "abandoned-checkouts-dataGrid-abandonedAt-filter-from", e.ABANDONED_CHECKOUTS_DATAGRID_ABANDONED_AT_FILTER_TO = "abandoned-checkouts-dataGrid-abandonedAt-filter-to", e.ABANDONED_CHECKOUTS_SET_REMINDER_EMAILS_BUTTON = "abandoned-checkouts-setReminderEmailsButton", e.ABANDONED_CHECKOUTS_ACTIVATE_REMINDERS_BUTTON = "abandoned-checkouts-activateRemindersButton", e.ABANDONED_CHECKOUTS_TOGGLE_DIALOG_CONFIRM_BUTTON = "abandoned-checkouts-toggleDialog-confirmButton", e.ABANDONED_CHECKOUTS_DISABLE_ALL_DIALOG_CONFIRM_BUTTON = "abandoned-checkouts-disableAllDialog-confirmButton", e.ABANDONED_CHECKOUTS_REMINDER_EMAIL_RESET_CONTENT_LINK = "abandoned-checkouts-reminderEmail-resetContentLink", e.ABANDONED_CHECKOUTS_SNACKBAR_ACTIVATE_REMINDERS_BUTTON = "abandoned-checkouts-snackbar-activateRemindersButton", e.HEADER_HOME_BUTTON = "header-homeButton", e.MARKETING_PAGE_CTA_BUTTON = "marketingPage-mainCTA", e.DASHBOARD_SHOW_FILTER_BUTTON = "landingPage-showFilterButton", e.DASHBOARD_SEARCH_BUTTON = "landingPage-searchButton", e.DASHBOARD_EXPAND_FILTER_BUTTON = "landingPage-expandSearchButton", e.DASHBOARD_LOCATION_DROPDOWN = "landingPage-locationInput", e.DASHBOARD_RESOURCE_TYPE_BUTTON = "landingPage-resourceTypeButton", e.DASHBOARD_PUBLIC_FEEDBACK_BUTTON = "landingPage-publicFeedbackButton", e.SEARCH_DATE_PICKER = "searchFilter-dateInput", e.SEARCH_START_TIME_DROPDOWN = "searchFilter-startTimeInput", e.SEARCH_END_TIME_DROPDOWN = "searchFilter-endTimeInput", e.SEARCH_START_DATE_PICKER = "searchFilter-startDateInput", e.SEARCH_END_DATE_PICKER = "searchFilter-endDateInput", e.SEARCH_MAP_FILTER = "searchFilter-mapFilter", e.SEARCH_RESULT_BOOK_NOW_BUTTON = "searchResults-bookNowButton", e.SEARCH_RESULT_CARD_BUTTON = "searchResults-cardButton", e.SEARCH_RESULT_PUBLIC_FEEDBACK_BUTTON = "searchResults-publicFeedbackButton", e.DETAILS_BOOK_NOW_BUTTON = "detailedPage-bookNowButton", e.DETAILS_TIME_CALENDAR_START_DROPDOWN = "detailedPage-startCalendarInput", e.DETAILS_TIME_CALENDAR_END_DROPDOWN = "detailedPage-endCalendarInput", e.DETAILS_ALSO_AVAILABLE_CARD = "detailedPage-alsoAvailableCardButton", e.DETAILS_MORE_FILTER_BUTTON = "detailedPage-moreFilterButton", e.DETAILS_MORNING_BOOKING_BUTTON = "detailedPage-morningBookingButton", e.DETAILS_AFTERNOON_BOOKING_BUTTON = "detailedPage-afternoonBookingButton", e.DETAILS_FULL_DAY_BOOKING_BUTTON = "detailedPage-fullDayBookingButton", e.DETAILS_AVAILABILITY_TIMELINE_COMPONENT = "detailedPage-availabilityTimelineComponent", e.DETAILS_PUBLIC_FEEDBACK_BUTTON = "detailedPage-publicFeedbackButton", e.DETAILS_MAP_COMPONENT = "detailedPage-mapComponent", e.DETAILS_NEXT_BUTTON = "detailedPage-nextButton", e.DETAILS_BROWSE_EXTRAS_BUTTON = "detailedPage-browseExtrasButton", e.EXTRAS_BACK_BUTTON = "extrasPage-backButton", e.EXTRAS_CONFIRM_CHECKOUT_BUTTON = "extrasPage-confirmCheckoutButton", e.CHECKOUT_APPLY_DISCOUNT_BUTTON = "checkoutPage-applyDiscountButton", e.CHECKOUT_AUTOFILL_BUTTON = "checkoutPage-autofillButton", e.CHECKOUT_PAY_AND_BOOK_BUTTON = "checkoutPage-payAndBookButton", e.CHECKOUT_CONTINUE_BUTTON = "checkoutPage-continueButton", e.CHECKOUT_BOOK_BUTTON = "checkoutPage-bookButton", e.CHECKOUT_PHONE_NUMBER_INPUT = "checkoutPage-phoneNumberInput", e.CHECKOUT_PUBLIC_FEEDBACK_BUTTON = "checkoutPage-publicFeedbackButton", e.CHECKOUT_LOG_IN_BUTTON = "checkoutPage-logInButton", e.CHECKOUT_SEND_ACCESS_LINK_BUTTON = "checkoutPage-sendAccessLinkButton", e.SUCCESS_APPLE_CALENDAR_BUTTON = "successPage-appleCalendarButton", e.SUCCESS_GOOGLE_CALENDAR_BUTTON = "successPage-googleCalendarButton", e.SUCCESS_OUTLOOK_CALENDAR_BUTTON = "successPage-outlookCalendarButton", e.SUCCESS_PUBLIC_FEEDBACK_BUTTON = "successPage-publicFeedbackButton", e.FAILED_PUBLIC_FEEDBACK_BUTTON = "failedPage-publicFeedbackButton", e.PLANS_DATAGRID_NAME = "plans-dataGrid-name", e.PLANS_DATAGRID_OFFICE = "plans-dataGrid-office", e.PLANS_DATAGRID_PRICE = "plans-dataGrid-price", e.PLANS_DATAGRID_ALLOWANCE = "plans-dataGrid-allowance", e.PLANS_DATAGRID_PREVIEW = "plans-dataGrid-preview", e.RESOURCES_DATAGRID_NAME = "resources-dataGrid-name", e.RESOURCES_DATAGRID_OFFICE = "resources-dataGrid-office", e.RESOURCES_DATAGRID_PRICE = "resources-dataGrid-price", e.RESOURCES_DATAGRID_PREVIEW = "resources-dataGrid-preview", e.PROMO_CODES_DATAGRID_CODE = "promo-codes-dataGrid-code", e.PROMO_CODES_DATAGRID_VALUE = "promo-codes-dataGrid-value", e.PROMO_CODES_DATAGRID_TYPE = "promo-codes-dataGrid-type", e.PROMO_CODES_DATAGRID_STATUS = "promo-codes-dataGrid-status", e.PROMO_CODES_DATAGRID_USAGE = "promo-codes-dataGrid-usage", e.PROMO_CODES_DATAGRID_VALIDITY = "promo-codes-dataGrid-validity", e))(B || {}), $ = /* @__PURE__ */ ((e) => (e.PUBLIC = "public", e.ADMIN = "admin", e))($ || {});
const li = () => {
  const e = js(), t = c.useCallback(() => e?.analytics === !0, [e]), n = c.useCallback(
    (l, d = {}) => {
      const u = at();
      if (typeof u?.track != "function")
        return;
      const { prefix: p, properties: h = {} } = d;
      if (p === $.PUBLIC && !t())
        return;
      const _ = p ? `${p}_${l}` : l;
      u.track(_, h);
    },
    [t]
  ), s = c.useCallback(
    (l, d) => {
      n(l, {
        prefix: $.ADMIN,
        properties: d
      });
    },
    [n]
  ), a = c.useCallback(
    (l, d) => {
      n(l, {
        prefix: $.PUBLIC,
        properties: d
      });
    },
    [n]
  ), r = c.useCallback(
    (l, d) => {
      const u = at();
      typeof u?.identify != "function" || !t() || u.identify(l, d);
    },
    [t]
  ), i = c.useCallback(
    (l, d) => {
      const u = at();
      typeof u?.group != "function" || !t() || u.group(l, d);
    },
    [t]
  );
  return {
    shouldTrack: t,
    trackAdminEvent: s,
    trackPublicEvent: a,
    identifyUser: r,
    groupUser: i
  };
}, Ms = () => {
  const e = c.useRef(null), [t, n] = c.useState(0), [s, a] = c.useState(0);
  return c.useEffect(() => {
    e.current && (n(mn(e.current).width ?? 0), a(mn(e.current).height ?? 0));
  }, []), { elementWidth: t, elementHeight: s, getElementProps: () => ({ ref: e }) };
}, Us = (e) => {
  const t = c.useRef(e), n = c.useRef(null);
  return c.useLayoutEffect(() => {
    t.current = e;
  }), n.current || (n.current = (...s) => t.current(...s)), n.current;
}, gt = () => {
  const [e] = cs();
  return e;
}, ci = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content"
], ui = (e, t) => {
  const n = new URLSearchParams(e);
  return Object.fromEntries(
    f.flatMap(ci, (s) => {
      const a = n.get(s) ?? t.get(s);
      return a ? [[s, a]] : [];
    })
  );
}, Xt = () => {
  const e = gt(), t = globalThis.location?.search ?? "", n = globalThis.location?.hostname ?? "", { orgSlug: s } = le(), a = F(Z), r = c.useMemo(
    () => ui(t, e),
    [t, e]
  );
  return c.useMemo(
    () => vr({
      urlParams: r,
      orgSlug: s,
      pageHostname: n,
      isWebComponent: a
    }),
    [r, s, n, a]
  );
};
var Pe = /* @__PURE__ */ ((e) => (e.Resource = "resource", e.Subscription = "subscription", e))(Pe || {}), ks = /* @__PURE__ */ ((e) => (e.OneOff = "once", e.Month = "month", e.None = "", e))(ks || {}), v = /* @__PURE__ */ ((e) => (e.RoundTable = "round_table", e.Boardroom = "boardroom", e.Cabaret = "cabaret", e.Classroom = "classroom", e.Cocktail = "cocktail", e.HollowSquare = "hollow_square", e.Theatre = "theatre", e.UShape = "u_shape", e))(v || {});
const _t = 6, di = `
        body > *:not(#root):not(script):not(style):not(link):not(meta):not(noscript) {
          position: fixed !important;
          pointer-events: auto !important;
        }
        
        /* Common third-party widget patterns */
        body > div[class*="widget"],
        body > div[id*="widget"],
        body > div[class*="consent"],
        body > div[class*="cookie"],
        body > div[class*="chat"],
        body > div[class*="iubenda"],
        body > div[class*="intercom"],
        body > div[class*="drift"],
        body > button[class*="widget"],
        body > button[class*="iubenda"] {
          position: fixed !important;
          pointer-events: auto !important;
        }
      `, bt = "ignore-external-height-styles-container";
v.Boardroom, v.Cabaret, v.Cocktail, v.Classroom, v.HollowSquare, v.RoundTable, v.Theatre, v.UShape;
const pi = {
  [v.Boardroom]: "Boardroom",
  [v.Cabaret]: "Cabaret",
  [v.Cocktail]: "Cocktail",
  [v.Classroom]: "Classroom",
  [v.HollowSquare]: "Hollow Square",
  [v.RoundTable]: "Round Table",
  [v.Theatre]: "Theatre",
  [v.UShape]: "U-Shape"
};
var Qt = /* @__PURE__ */ ((e) => (e.IGNORE_EXTERNAL_HEIGHT = "ignoreExternalHeight", e.USER_CONSENT = "userConsent", e))(Qt || {});
const At = (e) => f.isUndefined(e) || f.isBoolean(e), Fs = (e) => {
  if (!f.isPlainObject(e))
    return !1;
  const { functional: t, analytics: n, marketing: s } = e;
  return At(t) && At(n) && At(s);
}, Gs = (e) => {
  if (!e || typeof e != "string")
    return null;
  try {
    const t = JSON.parse(e);
    return Fs(t) ? t : (console.warn(
      "[Consent] Invalid consent attribute format. Expected shape: { functional?: boolean, analytics?: boolean, marketing?: boolean }"
    ), null);
  } catch {
    return console.warn("[Consent] Failed to parse consent attribute. Expected valid JSON string."), null;
  }
}, Hs = mt(() => {
}), $s = (e) => f.isPlainObject(e) && f.has(e, "type") && f.isString(e.type), hi = (e) => $s(e) && e.type === Qt.IGNORE_EXTERNAL_HEIGHT && f.isPlainObject(e.payload), fi = (e) => $s(e) && e.type === Qt.USER_CONSENT && Fs(e.payload), mi = (e) => {
  if (!e.payload.enabled || document.getElementById(bt))
    return;
  const t = document.createElement("style");
  return t.id = bt, t.textContent = di, document.head.appendChild(t), () => {
    const n = document.getElementById(bt);
    n && n.remove();
  };
}, Jt = (e, t) => ({
  functional: e.functional ?? t?.functional ?? !1,
  analytics: e.analytics ?? t?.analytics ?? !1,
  marketing: e.marketing ?? t?.marketing ?? !1
}), Zt = (e) => {
  const t = ls(), n = t.get(Ae), s = Jt(e, n);
  t.set(Ae, s);
}, gi = (e, t) => {
  if (!(ls().get(Z) && e.origin !== globalThis.location.origin))
    if (hi(e.data)) {
      const a = mi(e.data);
      a && t.add(a);
    } else fi(e.data) && Zt(e.data.payload);
}, _i = (e) => {
  f.forEach(Array.from(e), (t) => t()), e.clear();
}, yi = () => {
  const e = c.useRef(!1), t = c.useRef(/* @__PURE__ */ new Set()), n = je(), s = F(Z), a = n || s;
  c.useEffect(() => {
    if (!a || e.current)
      return;
    const r = t.current;
    e.current = !0;
    const i = (l) => {
      gi(l, r);
    };
    return window.addEventListener("message", i), () => {
      window.removeEventListener("message", i), e.current = !1, _i(r);
    };
  }, [a]);
}, xi = ({ children: e }) => (yi(), e), Ee = {
  all: (e) => [e, "resources"],
  list: (e, t) => [...Ee.all(e), "list", f.omitBy(t, f.isNull)],
  detail: (e, t) => [...Ee.all(e), "detail", t],
  occurrences: (e, t, n) => [...Ee.all(e), "occurrences", t, f.omitBy(n, f.isNull)],
  extras: (e, t) => [...Ee.all(e), "extras", t]
}, Fe = {
  all: (e) => [e, "plans"],
  list: (e, t) => [...Fe.all(e), "list", f.omitBy(t, f.isNull)],
  detail: (e, t) => [...Fe.all(e), "detail", t],
  flexibleAreaOccupancy: (e, t, n) => [...Fe.all(e), "flexibleAreaOccupancy", t, n]
}, Ti = {
  detail: (e) => [e]
}, en = {
  all: (e) => [e, "translations"],
  detail: (e, t) => [...en.all(e), t]
}, Ws = {
  all: (e) => [e, "locations"],
  list: (e, t = !1) => [...Ws.all(e), "list", { allAccounts: t }]
}, Si = {
  all: (e) => [e, "amenities"]
}, Ei = {
  all: (e) => [e, "subcategories"]
}, bi = {
  all: (e) => [e, "categories"]
}, ad = {
  detail: (e, t) => [e, t]
}, rd = {
  detail: (e, t) => [e, "billingFlow", t]
}, Ai = {
  detail: () => ["appSettings"]
}, Ri = {
  detail: (e) => [e, "checkoutFormSettings"]
}, Ci = {
  countryCode: (e) => [e, "geolocation", "countryCode"]
}, Di = {
  detail: (e, t) => [e, "member", t]
}, id = {
  byEmail: (e, t) => [e, "memberLookup", t]
}, Ii = {
  detail: (e) => [e, "settings"]
}, ld = {
  detail: (e, t) => [e, "checkoutRules", t]
}, Vs = "root", tn = "orgData", rt = 800, cd = 2, Oi = 16, kn = 10, Ni = 1e5, ud = 14, Pi = ["mindspace-", "mdonev"], wi = ["re-defined", "1edcity"], Li = (e) => {
  const t = (e ?? "").toLowerCase();
  return Pi.some((n) => t.startsWith(n)) || wi.includes(t);
}, Fn = (e) => (Kt(e), null), Ks = (e, t) => ({
  queryKey: en.detail(e, t ?? ""),
  queryFn: ({ signal: n }) => M.get(`/i/${e}/localization/translations/${t}`, { signal: n }).then((s) => s.data),
  enabled: !!t
}), Ys = (e) => ({
  queryKey: en.all(e),
  queryFn: ({ signal: t }) => M.get(`/i/${e}/localization/translations`, { signal: t }).then((n) => n.data)
}), zs = (e) => ({
  queryKey: Ti.detail(e),
  queryFn: ({ signal: t }) => M.get(`/i/${e}`, { signal: t }).then((n) => n.data)
}), qs = ({ orgSlug: e, allAccounts: t }) => {
  const n = $e({ allAccounts: t }), s = ({ signal: a }) => M.get(`/i/${e}/locations?${n}`, { signal: a }).then((r) => r.data);
  return {
    queryKey: Ws.list(e, t),
    queryFn: s
  };
}, vi = (e) => ({
  queryKey: Si.all(e),
  queryFn: ({ signal: t }) => M.get(`/i/${e}/amenities`, { signal: t }).then((n) => n.data)
}), Xs = (e) => ({
  queryKey: Ii.detail(e ?? ""),
  queryFn: ({ signal: t }) => M.get(`/i/${e}/settings`, {
    signal: t
  }).then((n) => n.data),
  enabled: !!e
}), ji = (e) => async ({
  params: t,
  request: n
}) => {
  const s = new URL(n.url), a = new URLSearchParams(s.search), r = a.has("language"), i = zs(t.orgSlug), l = Xs(t.orgSlug), d = r ? Ys(t.orgSlug) : null, u = r ? Ks(t.orgSlug, a.get("language")) : null, [p, h, m, _] = await Promise.all([
    e.ensureQueryData(i),
    e.ensureQueryData(l),
    d ? e.ensureQueryData(d).catch(Fn) : null,
    u ? e.ensureQueryData(u).catch(Fn) : null
  ]);
  return { organization: p, settings: h, translations: m, translation: _ };
}, J = () => {
  const e = Ft(tn), t = le(), { data: n } = V({
    ...zs(t.orgSlug),
    initialData: e?.organization,
    staleTime: ce.DurableData
  });
  return c.useMemo(() => n && { ...n, slug: t.orgSlug }, [n, t.orgSlug]);
}, Bi = (e) => V({
  ...vi(e)
}), Mi = (e) => async ({
  params: t,
  request: n
}) => {
  if (!Li(t.orgSlug))
    return null;
  const s = new URL(n.url), r = new URLSearchParams(s.search).has("office"), i = qs({ orgSlug: t.orgSlug, allAccounts: !0 }), l = await e.ensureQueryData(i);
  if (!r) {
    const u = l.find((h) => h.default)?.accountSlug, p = typeof globalThis < "u" && globalThis.location.hash.startsWith("#/");
    u && t.orgSlug !== u && vt({
      orgSlug: u,
      office: [],
      isWebComponent: p
    });
  }
  return l;
}, nn = ({
  orgSlug: e,
  allAccounts: t = !1
}) => {
  const n = Ft(Vs);
  return V({
    ...qs({ orgSlug: e, allAccounts: t }),
    // Only use initialData if it matches the current query (allAccounts: true)
    // The loader always fetches with allAccounts: true, so only use initialData when allAccounts is true
    // Otherwise, React Query will fetch with the correct allAccounts value
    ...n && t ? { initialData: n } : {},
    staleTime: ce.DurableData
  });
}, Me = (e) => {
  const t = Ft(tn);
  return V({
    ...Xs(e),
    initialData: t?.settings,
    staleTime: ce.DurableData
  });
}, Qs = () => {
  const e = le();
  return V({
    ...Ys(e.orgSlug),
    staleTime: ce.Infinite
  });
}, Ui = (e) => {
  const t = le();
  return V({
    ...Ks(t.orgSlug, e),
    staleTime: ce.Infinite
  });
}, Js = (e) => ({
  queryKey: Ri.detail(e),
  queryFn: () => M.get(`/i/${e}/settings/checkout-page`).then((t) => t.data)
}), ki = (e) => ({
  queryKey: Ci.countryCode(e),
  queryFn: () => M.get(`/i/${e}/geolocation/country-code`).then((t) => t.data)
}), dd = (e, t) => Pt({
  mutationFn: () => M.post(`/i/${e}/members/invite`, { token: t }).then(() => ({
    success: !0
  }))
}), pd = (e, t, n) => V({
  queryKey: Di.detail(e, n),
  queryFn: () => M.get(`/i/${e}/members/details`, {
    params: { token: n }
  }).then((s) => s.data),
  enabled: t
}), hd = async (e, t) => M.post(`/i/${e}/checkout/summary`, t).then((n) => n.data), Fi = (e) => ({
  queryKey: Ei.all(e),
  queryFn: ({ signal: t }) => M.get(`/i/${e}/subcategories`, { signal: t }).then((n) => n.data)
}), Gi = (e) => ({
  queryKey: bi.all(e),
  queryFn: ({ signal: t }) => M.get(`/i/${e}/categories`, { signal: t }).then((n) => n.data)
}), Hi = () => {
  const e = le();
  return V({
    ...Fi(e.orgSlug),
    staleTime: ce.DurableData
  });
}, $i = () => {
  const e = le();
  return V({
    ...Gi(e.orgSlug),
    staleTime: ce.DurableData
  });
}, Gn = (e) => async ({
  params: t
}) => {
  const n = Js(t.orgSlug);
  return e.ensureQueryData(n);
}, fd = (e) => {
  const t = Gt();
  return V({
    ...Js(e),
    initialData: t?.checkoutPageSettings
  });
}, md = (e) => V({
  ...ki(e),
  staleTime: ce.Infinite
}), gd = async (e, t) => M.post(`/i/${e}/checkout/booking-summary`, t).then((n) => n.data), Zs = (e, t) => ({
  queryKey: Ee.detail(e, t),
  queryFn: () => M.get(`/i/${e}/resources/${t}`).then((n) => n.data)
}), Wi = (e) => async ({
  params: t
}) => {
  const n = Zs(t.orgSlug, t.resourceId);
  return e.ensureQueryData(n);
}, _d = (e, t) => {
  const n = Gt();
  return V({
    ...Zs(e, t),
    initialData: n?.resource
  });
}, Vi = (e, t, n, s) => {
  const a = { start: n, end: s };
  return {
    queryKey: Ee.occurrences(e, t, a),
    queryFn: ({ signal: r }) => M.get(`/i/${e}/resources/${t}/occurrences?${$e(a)}`, {
      signal: r
    }).then((i) => i.data),
    enabled: n !== null && s !== null
  };
}, yd = (e, t) => {
  const n = le(), s = e ? e.minus({ month: 1 }).startOf("month").toISO() : null, a = t ? t.plus({ month: 1 }).endOf("month").toISO() : null;
  return V({
    ...Vi(n.orgSlug, n.resourceId, s, a)
  });
}, Ki = (e, t) => ({
  queryKey: Ee.extras(e, t),
  queryFn: () => M.get(`/i/${e}/resources/${t}/extras`).then((n) => n.data)
}), Yi = { enabled: !0 }, xd = ({ orgSlug: e, resourceId: t }, { enabled: n } = Yi) => V({
  ...Ki(e, t),
  staleTime: ce.VolatileData,
  enabled: !!e && !!t && n
}), sn = mt(() => !1), zi = 5e3, qi = (e, t) => {
  const n = F(sn), [s, a] = c.useState(!1), r = c.useRef(!1), i = c.useRef(t);
  return c.useEffect(() => {
    !i.current && t && !s && (r.current = !1), i.current = t;
  }, [t, s]), c.useEffect(() => {
    e?.gtmId && n && a(!0);
  }, [e?.gtmId, n]), c.useEffect(() => {
    const { gtmId: l, previewEnabled: d, preview: u, previewAuth: p } = e || {};
    if (l && !r.current && t && !n) {
      r.current = !0;
      const h = async () => {
        if (globalThis.removeEventListener("mousemove", h), globalThis.removeEventListener("touchstart", h), globalThis.removeEventListener("keydown", h), !!i.current)
          try {
            (await import("./webc-vendor-CvrN3tmw.js").then((T) => T.i)).default.initialize({
              gtmId: l,
              dataLayer: {},
              auth: d ? p : void 0,
              preview: d ? u : void 0
            }), a(!0);
          } catch (_) {
            console.error("Failed to initialize GTM: ", _);
          }
      };
      return Cs(() => {
        globalThis.addEventListener("mousemove", h, { once: !0, passive: !0 }), globalThis.addEventListener("touchstart", h, { once: !0, passive: !0 }), globalThis.addEventListener("keydown", h, { once: !0 });
      }, zi), () => {
        globalThis.removeEventListener("mousemove", h), globalThis.removeEventListener("touchstart", h), globalThis.removeEventListener("keydown", h);
      };
    }
  }, [e, t, n]), s;
}, Xi = c.createContext(null), Qi = ({ children: e }) => {
  const t = J(), s = js()?.marketing === !0, a = qi(t?.settings?.community?.gtm, s), r = c.useMemo(
    () => s && a ? {
      trackEvent: (i) => {
        zo.dataLayer({ dataLayer: i });
      }
    } : null,
    [s, a]
  );
  return /* @__PURE__ */ o.jsx(Xi.Provider, { value: r, children: e });
}, Ji = 5e3, Zi = (e) => !!e && e !== "{memberId}" && e !== "undefined" && e !== "null", el = () => ({
  queryKey: Ai.detail(),
  queryFn: () => M.get("/i/app/analytics").then((e) => e.data)
}), tl = () => V({
  ...el()
}), nl = (e) => {
  const { data: t, isSuccess: n } = tl(), s = F(Ae), a = Xt(), r = c.useRef(a);
  r.current = a;
  const i = c.useRef(!1), l = s?.analytics === !0, d = c.useRef(l);
  c.useEffect(() => {
    d.current && !l && (i.current = !1), d.current = l;
  }, [l]), c.useEffect(() => {
    const u = () => d.current;
    if (!n || !t?.segmentWriteKey || !u() || i.current)
      return;
    i.current = !0;
    const p = t.segmentWriteKey, h = async () => {
      if (globalThis.removeEventListener("mousemove", h), globalThis.removeEventListener("touchstart", h), globalThis.removeEventListener("keydown", h), !u())
        return;
      const { AnalyticsBrowser: _ } = await import("./webc-vendor-segment-B6H8lofQ.js");
      if (!u())
        return;
      const T = _.load({
        writeKey: p
      });
      T.ready(() => {
        u() && (e && T.group(e._id, { orgSlug: e.slug }), Zi(globalThis.memberId) && T.identify(globalThis.memberId), T.page(jr(r.current)), Ya(T));
      });
    };
    return Cs(() => {
      globalThis.addEventListener("mousemove", h, { once: !0, passive: !0 }), globalThis.addEventListener("touchstart", h, { once: !0, passive: !0 }), globalThis.addEventListener("keydown", h, { once: !0 });
    }, Ji), () => {
      globalThis.removeEventListener("mousemove", h), globalThis.removeEventListener("touchstart", h), globalThis.removeEventListener("keydown", h);
    };
  }, [n, t?.segmentWriteKey, e, l]), c.useEffect(() => {
    !l && at() && za();
  }, [l]);
}, sl = () => {
  const e = J();
  return nl(e), /* @__PURE__ */ o.jsx(Qi, { children: /* @__PURE__ */ o.jsx(ie, {}) });
}, ol = "linear-gradient(102.51deg, rgba(0, 0, 0, 0.7) 28.12%, rgba(82, 76, 69, 0.7) 77.14%)", al = 1920, rl = (e, t, n) => {
  const s = {
    position: e ? "absolute" : "fixed",
    height: e ? "100%" : "100dvh",
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: t ? "transparent" : void 0
  }, a = {
    backgroundImage: n,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return e ? {
    ...s,
    ...a,
    // Use background-attachment: fixed for the parallax/fixed effect in Shadow DOM
    backgroundAttachment: "fixed",
    // Ensure the element doesn't block interactions
    pointerEvents: "none"
  } : {
    ...s,
    // MuiCssBaseline already applies the default Material Design background color on the body element and
    // it is using theme.palette.background.default for standard devices and a white background for print devices.
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      ...a
    }
  };
}, Hn = ({
  image: e,
  renderOverlay: t = !0
}) => {
  const { getImageUrl: n } = c.useContext(Ht), s = F(Z), a = f.compact([
    e && t ? ol : void 0,
    e ? `url(${n(e, {
      width: al
    })})` : void 0
  ]).join(","), r = rl(s, e, a);
  return /* @__PURE__ */ o.jsx(O, { sx: r });
}, il = () => {
  const e = J(), {
    data: { landingPage: t }
  } = Me(e.slug);
  return F(Z) ? /* @__PURE__ */ o.jsxs(
    O,
    {
      position: "relative",
      minHeight: "100dvh",
      width: "100%",
      children: [
        /* @__PURE__ */ o.jsx(Hn, { image: t?.backgroundImage }),
        /* @__PURE__ */ o.jsx(O, { position: "relative", children: /* @__PURE__ */ o.jsx(ie, {}) })
      ]
    }
  ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(Hn, { image: t?.backgroundImage }),
    /* @__PURE__ */ o.jsx(
      O,
      {
        position: "relative",
        height: "100dvh",
        children: /* @__PURE__ */ o.jsx(ie, {})
      }
    )
  ] });
}, ll = "gh-consent-cookie", cl = "gh-webc-consent-cookie", eo = 365, ul = {
  functional: !1,
  analytics: !1,
  marketing: !1
}, dl = [
  {
    id: "necessary",
    name: "Necessary",
    description: "Required to keep the website secure and working properly.",
    required: !0,
    defaultValue: !0
  },
  {
    id: "functional",
    name: "Functional",
    description: "Your choices and preferences will be remembered.",
    required: !1,
    defaultValue: !1
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Tracking usage will help us understand how the website is used so we can improve performance and reliability.",
    required: !1,
    defaultValue: !1
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "We will show relevant content and will be able to measure the effectiveness of campaigns.",
    required: !1,
    defaultValue: !1
  }
], on = (e) => `${ll}-${encodeURIComponent(e)}`, to = (e) => `/${encodeURIComponent(e)}`, $n = (e, t) => {
  try {
    const n = {
      state: e,
      timestamp: j.now().toMillis()
    }, s = j.now().plus({ days: eo }), a = encodeURIComponent(JSON.stringify(n)), r = on(t), i = to(t);
    document.cookie = `${r}=${a}; expires=${s.toHTTP()}; path=${i}; SameSite=Lax`;
  } catch {
  }
}, pl = (e) => {
  const t = on(e), n = to(e);
  document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${n}`;
}, Wn = (e) => {
  try {
    const t = document.cookie.split(";"), n = on(e), s = f.find(t, (a) => {
      const [r] = a.trim().split("=");
      return r === n;
    });
    if (s) {
      const [, a] = s.trim().split("=");
      if (a)
        return JSON.parse(decodeURIComponent(a));
    }
  } catch {
  }
  return null;
}, Mt = (e) => {
  const t = e.necessary ?? !0, n = e.analytics ?? !1, s = e.functional ?? !1, a = e.marketing ?? !1;
  return {
    ad_storage: a ? "granted" : "denied",
    ad_user_data: a ? "granted" : "denied",
    ad_personalization: a ? "granted" : "denied",
    analytics_storage: n ? "granted" : "denied",
    functionality_storage: t || s ? "granted" : "denied",
    personalization_storage: a ? "granted" : "denied",
    security_storage: t ? "granted" : "denied"
  };
}, Ut = (e) => {
  typeof globalThis.gtag == "function" && globalThis.gtag("consent", "update", e);
}, no = () => {
  if (typeof globalThis.gtag == "function") {
    const e = {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "denied"
    };
    globalThis.gtag("consent", "default", e);
  }
}, hl = (e) => ({
  necessary: !0,
  functional: e.functional ?? !1,
  analytics: e.analytics ?? !1,
  marketing: e.marketing ?? !1
}), fl = (e, t) => e === t || e !== null && t !== null && (e.functional ?? !1) === (t.functional ?? !1) && (e.analytics ?? !1) === (t.analytics ?? !1) && (e.marketing ?? !1) === (t.marketing ?? !1), ml = (e) => {
  const { categories: t = dl, onConsentChange: n, orgSlug: s } = e, a = ke(Ae), r = () => {
    const b = {};
    return t.forEach((E) => {
      b[E.id] = E.required || E.defaultValue === !0;
    }), b;
  }, i = () => {
    const b = Wn(s);
    return b?.state ? { ...r(), ...b.state } : r();
  }, [l, d] = c.useState(i), [u, p] = c.useState(() => Wn(s) !== null), h = c.useRef(!1), m = c.useRef(!1);
  c.useEffect(() => {
    if (!h.current && (h.current = !0, no(), u)) {
      const b = Mt(l);
      Ut(b);
    }
  }, [u, l]), c.useEffect(() => {
    if (u) {
      const b = Mt(l);
      if (Ut(b), !m.current) {
        const E = {
          functional: l.functional ?? !1,
          analytics: l.analytics ?? !1,
          marketing: l.marketing ?? !1
        };
        a(E);
      }
      m.current = !1;
    } else
      a(null);
  }, [l, u, a]);
  const _ = F(Ae), T = c.useRef(null), y = c.useRef(s);
  c.useEffect(() => {
    if (!je())
      return;
    const b = s !== y.current;
    if (y.current = s, !_) {
      T.current && (m.current = !0, p(!1), pl(s)), T.current = null;
      return;
    }
    if (!b && fl(T.current, _))
      return;
    T.current = _, m.current = !0;
    const E = hl(_);
    d(E), p(!0), $n(E, s);
  }, [_, s]);
  const x = c.useCallback(
    (b) => {
      const E = {};
      t.forEach((D) => {
        D.required ? E[D.id] = !0 : E[D.id] = b[D.id] ?? !1;
      }), d(E), $n(E, s), p(!0), n && n(E);
    },
    [t, n, s]
  ), A = c.useCallback(() => {
    const b = {};
    t.forEach((E) => {
      b[E.id] = !0;
    }), x(b);
  }, [t, x]), R = c.useCallback(() => {
    const b = {};
    t.forEach((E) => {
      b[E.id] = E.required;
    }), x(b);
  }, [t, x]);
  return {
    consentState: l,
    hasConsented: u,
    categories: t,
    savePreferences: x,
    acceptAll: A,
    rejectOptional: R
  };
}, so = c.createContext(null), gl = ({ children: e, value: t }) => {
  const [n, s] = c.useState(!t.hasConsented), [a, r] = c.useState(!1), [i, l] = c.useState(!1), d = c.useCallback(() => s(!1), []), u = c.useCallback((m = !1) => {
    r(!0), l(m);
  }, []), p = c.useCallback(() => {
    r(!1), l(!1);
  }, []), h = c.useMemo(
    () => ({
      ...t,
      hideBanner: d,
      showModal: u,
      hideModal: p,
      isBannerVisible: n,
      isModalVisible: a,
      isConsentWall: i
    }),
    [t, d, u, p, n, a, i]
  );
  return /* @__PURE__ */ o.jsx(so.Provider, { value: h, children: e });
}, an = () => {
  const e = c.useContext(so);
  if (!e)
    throw new Error("useConsentContext must be used within ConsentProvider");
  return e;
}, Rt = "space-between", _l = (e) => ({
  paperSx: {
    position: "fixed",
    bottom: e.typography.pxToRem(32),
    left: e.typography.pxToRem(32),
    width: { xs: "auto", sm: e.typography.pxToRem(460) },
    minWidth: { xs: "auto", sm: e.typography.pxToRem(460) },
    maxWidth: {
      xs: `calc(100% - ${e.typography.pxToRem(64)})`,
      sm: e.typography.pxToRem(460)
    },
    color: e.palette.text.primary,
    borderRadius: e.shape.borderRadius,
    boxShadow: e.shadows[8],
    zIndex: 9999,
    fontFamily: e.typography.fontFamily
  },
  bannerTitleSx: {
    marginBottom: e.spacing(1),
    fontWeight: e.typography.fontWeightBold,
    color: e.palette.text.primary
  },
  bannerDescriptionSx: {
    marginBottom: e.spacing(3),
    color: e.palette.text.secondary
  },
  buttonsContainerSx: {
    display: "flex",
    flexDirection: { xs: "column-reverse", sm: "row" },
    gap: e.spacing(2),
    justifyContent: "flex-end",
    padding: e.spacing(0, 4, 4)
  },
  rejectButtonSx: { color: e.palette.text.secondary },
  customizeButtonSx: { color: "inherit" },
  acceptAllButtonSx: {
    backgroundColor: e.palette.primary.main,
    color: e.palette.getContrastText(e.palette.primary.main)
  }
}), yl = (e) => ({
  dialogSx: {
    fontFamily: e.typography.fontFamily,
    color: e.palette.text.primary,
    margin: { xs: e.spacing(4), sm: 0 },
    width: { xs: "100%", sm: "auto" }
  },
  dialogTitleSx: {
    display: "flex",
    justifyContent: Rt,
    alignItems: "center",
    padding: e.spacing(8, 8, 1),
    fontWeight: 600,
    color: e.palette.text.primary,
    fontSize: e.typography.h3.fontSize
  },
  dialogContentSx: { width: "100%", padding: 0 },
  dialogContentBoxSx: { paddingX: e.spacing(8) },
  dialogDescriptionSx: { color: e.palette.text.secondary },
  dialogContainerCategoriesSx: { display: "flex", flexDirection: "column", gap: e.spacing(4) },
  dividerSx: {
    marginY: e.spacing(3)
  },
  categoryItemSx: {
    display: "flex",
    justifyContent: Rt,
    alignItems: "center",
    padding: e.spacing(0, 4, 0, 8)
  },
  categoryItemNameSx: {
    fontWeight: 600,
    marginBottom: 0.5,
    color: e.palette.text.primary
  },
  categoryItemDescriptionSx: { color: e.palette.text.secondary },
  categoryItemSwitchSx: {
    "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
      backgroundColor: "neutral.main"
    }
  },
  dialogActionsSx: {
    padding: e.spacing(4),
    flexDirection: { xs: "column", sm: "row" },
    gap: e.spacing(2),
    justifyContent: Rt
  },
  dialogActionsContainerSx: {
    display: "flex",
    flexDirection: { xs: "column-reverse", sm: "row" },
    width: { xs: "100%", sm: "unset" },
    gap: e.spacing(2),
    justifyContent: "center",
    flex: 1
  },
  formControlLabelSx: {
    marginLeft: e.spacing(2)
  },
  rejectButtonSx: {
    width: { xs: "100%", sm: e.typography.pxToRem(190) },
    color: e.palette.text.secondary
  },
  saveButtonSx: {
    width: { xs: "100%", sm: e.typography.pxToRem(170) },
    color: "inherit"
  },
  acceptAllButtonSx: {
    width: { xs: "100%", sm: e.typography.pxToRem(170) },
    backgroundColor: e.palette.primary.main,
    color: e.palette.getContrastText(e.palette.primary.main)
  }
}), xl = (e) => ({
  position: "fixed",
  bottom: e.typography.pxToRem(16),
  left: e.typography.pxToRem(16),
  zIndex: 9998,
  fontSize: e.typography.pxToRem(24)
}), Tl = () => {
  const { t: e } = z(), t = W(), { isBannerVisible: n, acceptAll: s, showModal: a, hideBanner: r } = an();
  if (!n)
    return null;
  const {
    paperSx: i,
    bannerTitleSx: l,
    bannerDescriptionSx: d,
    buttonsContainerSx: u,
    customizeButtonSx: p,
    acceptAllButtonSx: h
  } = _l(t), m = () => {
    s(), r();
  }, _ = () => {
    r(), a(!0);
  };
  return /* @__PURE__ */ o.jsxs(
    He,
    {
      role: "dialog",
      "aria-labelledby": "cmp-banner-title",
      "aria-describedby": "cmp-banner-description",
      sx: i,
      children: [
        /* @__PURE__ */ o.jsxs(
          O,
          {
            sx: {
              padding: t.spacing(4)
            },
            children: [
              /* @__PURE__ */ o.jsx(
                L,
                {
                  id: "cmp-banner-title",
                  variant: "h4",
                  sx: l,
                  children: e("static-consent-banner-title", { defaultValue: "Cookie Preferences" })
                }
              ),
              /* @__PURE__ */ o.jsx(
                L,
                {
                  id: "cmp-banner-description",
                  variant: "caption",
                  sx: d,
                  children: e("static-consent-banner-description", {
                    defaultValue: "We use cookies to keep the site working, understand how it's used, and personalize your experience. You can manage your preferences at any time."
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(O, { sx: u, children: [
          /* @__PURE__ */ o.jsx(
            Q,
            {
              variant: "outlined",
              onClick: _,
              sx: p,
              children: e("static-consent-banner-customize-button", { defaultValue: "Customize" })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Q,
            {
              variant: "contained",
              onClick: m,
              sx: h,
              children: e("static-consent-banner-accept-all-button", { defaultValue: "Accept All" })
            }
          )
        ] })
      ]
    }
  );
}, tt = ({
  control: e,
  name: t,
  rules: n,
  switchProps: s
}) => {
  const { field: a } = qo({
    control: e,
    name: t,
    rules: n
  });
  return /* @__PURE__ */ o.jsx(
    ma,
    {
      ...f.omit(s, ["checked"]),
      ...f.omit(a, ["ref"]),
      checked: !!a.value,
      inputRef: a.ref
    }
  );
}, Sl = ({
  control: e,
  categoryItemSx: t,
  categoryItemNameSx: n,
  categoryItemDescriptionSx: s,
  categoryItemSwitchSx: a,
  formControlLabelSx: r
}) => {
  const { t: i } = z();
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(O, { sx: t, children: [
      /* @__PURE__ */ o.jsxs(O, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "h4",
            sx: n,
            children: i("static-consent-modal-category-necessary", {
              defaultValue: "Necessary"
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "caption",
            sx: s,
            children: i("static-consent-modal-category-necessary-description", {
              defaultValue: "Required to keep the website secure and working properly."
            })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: "",
          control: /* @__PURE__ */ o.jsx(
            tt,
            {
              control: e,
              name: "necessary",
              switchProps: {
                disabled: !0,
                sx: a
              }
            }
          ),
          labelPlacement: "end",
          sx: r
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(ne, {}),
    /* @__PURE__ */ o.jsxs(O, { sx: t, children: [
      /* @__PURE__ */ o.jsxs(O, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "h4",
            sx: n,
            children: i("static-consent-modal-category-functional", {
              defaultValue: "Functional"
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "caption",
            sx: s,
            children: i("static-consent-modal-category-functional-description", {
              defaultValue: "Your choices and preferences will be remembered."
            })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: "",
          control: /* @__PURE__ */ o.jsx(
            tt,
            {
              control: e,
              name: "functional",
              switchProps: {
                disabled: !1,
                sx: a
              }
            }
          ),
          labelPlacement: "end",
          sx: r
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(ne, {}),
    /* @__PURE__ */ o.jsxs(O, { sx: t, children: [
      /* @__PURE__ */ o.jsxs(O, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "h4",
            sx: n,
            children: i("static-consent-modal-category-analytics", {
              defaultValue: "Analytics"
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "caption",
            sx: s,
            children: i("static-consent-modal-category-analytics-description", {
              defaultValue: "Tracking usage will help us understand how the website is used so we can improve performance and reliability."
            })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: "",
          control: /* @__PURE__ */ o.jsx(
            tt,
            {
              control: e,
              name: "analytics",
              switchProps: {
                disabled: !1,
                sx: a
              }
            }
          ),
          labelPlacement: "end",
          sx: r
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(ne, {}),
    /* @__PURE__ */ o.jsxs(O, { sx: t, children: [
      /* @__PURE__ */ o.jsxs(O, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "h4",
            sx: n,
            children: i("static-consent-modal-category-marketing", {
              defaultValue: "Marketing"
            })
          }
        ),
        /* @__PURE__ */ o.jsx(
          L,
          {
            variant: "caption",
            sx: s,
            children: i("static-consent-modal-category-marketing-description", {
              defaultValue: "We will show relevant content and will be able to measure the effectiveness of campaigns."
            })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        Je,
        {
          label: "",
          control: /* @__PURE__ */ o.jsx(
            tt,
            {
              control: e,
              name: "marketing",
              switchProps: {
                disabled: !1,
                sx: a
              }
            }
          ),
          labelPlacement: "end",
          sx: r
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(ne, {})
  ] });
}, El = () => {
  const { t: e } = z(), t = W(), {
    isModalVisible: n,
    hideModal: s,
    consentState: a,
    savePreferences: r,
    acceptAll: i,
    rejectOptional: l,
    isConsentWall: d
  } = an(), {
    dialogSx: u,
    dialogTitleSx: p,
    dialogContentSx: h,
    dialogContentBoxSx: m,
    dialogDescriptionSx: _,
    dialogContainerCategoriesSx: T,
    dividerSx: y,
    categoryItemSx: x,
    categoryItemNameSx: A,
    categoryItemDescriptionSx: R,
    categoryItemSwitchSx: b,
    dialogActionsSx: E,
    dialogActionsContainerSx: D,
    formControlLabelSx: g,
    rejectButtonSx: S,
    saveButtonSx: P,
    acceptAllButtonSx: K
  } = yl(t), Y = Xo({
    defaultValues: a
  }), { handleSubmit: H, reset: w, control: U } = Y;
  c.useEffect(() => {
    n && w(a);
  }, [n, a, w]);
  const ue = () => {
    i(), s();
  }, ae = () => {
    l(), s();
  }, G = (de) => {
    r(de), s();
  }, q = () => {
    d || s();
  };
  return /* @__PURE__ */ o.jsx(
    ds,
    {
      open: n,
      onClose: q,
      maxWidth: "sm",
      fullWidth: !0,
      PaperProps: {
        sx: u
      },
      children: /* @__PURE__ */ o.jsx(Qo, { ...Y, children: /* @__PURE__ */ o.jsxs("form", { onSubmit: H(G), children: [
        /* @__PURE__ */ o.jsx(
          ps,
          {
            onClose: d ? void 0 : q,
            sx: p,
            iconButtonProps: {
              "aria-label": "Close",
              iconProps: {
                fontSize: "large",
                icon: "far fa-times"
              }
            },
            children: e("static-consent-modal-title", { defaultValue: "Customize Cookie Preferences" })
          }
        ),
        /* @__PURE__ */ o.jsxs(hs, { sx: h, children: [
          /* @__PURE__ */ o.jsx(O, { sx: m, children: /* @__PURE__ */ o.jsx(
            L,
            {
              variant: "caption",
              sx: _,
              children: e("static-consent-modal-description", {
                defaultValue: "Choose which types of cookies you want to use. Necessary cookies are always on because they are required for the site to work."
              })
            }
          ) }),
          /* @__PURE__ */ o.jsx(ne, { sx: y }),
          /* @__PURE__ */ o.jsx(O, { sx: T, children: /* @__PURE__ */ o.jsx(
            Sl,
            {
              control: U,
              categoryItemSx: x,
              categoryItemNameSx: A,
              categoryItemDescriptionSx: R,
              categoryItemSwitchSx: b,
              formControlLabelSx: g
            }
          ) })
        ] }),
        /* @__PURE__ */ o.jsx(ga, { sx: E, children: /* @__PURE__ */ o.jsxs(O, { sx: D, children: [
          /* @__PURE__ */ o.jsx(
            Q,
            {
              variant: "text",
              onClick: ae,
              type: "button",
              sx: S,
              children: e("static-consent-modal-reject-button", { defaultValue: "Reject Non-Necessary" })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Q,
            {
              variant: "outlined",
              type: "submit",
              sx: P,
              children: e("static-consent-modal-save-button", { defaultValue: "Save Preferences" })
            }
          ),
          /* @__PURE__ */ o.jsx(
            Q,
            {
              variant: "contained",
              onClick: ue,
              type: "button",
              sx: K,
              children: e("static-consent-modal-accept-all-button", { defaultValue: "Accept All" })
            }
          )
        ] }) })
      ] }) })
    }
  );
}, oo = is(!1), bl = 10, Al = ({
  onClick: e
}) => {
  const t = W(), n = me(t.breakpoints.down("sm")), { showModal: s, isModalVisible: a, isBannerVisible: r } = an(), i = !me(t.breakpoints.up("md")), l = F(oo), [d, u] = c.useState(!0), p = ta(), h = f.some(
    p,
    ({ handle: T }) => T?.hideConsentButtonOnMobile
  );
  c.useEffect(() => {
    if (!n)
      return;
    const T = () => {
      const y = window.scrollY ?? window.pageYOffset;
      u(y <= bl);
    };
    return T(), window.addEventListener("scroll", T, { passive: !0 }), () => window.removeEventListener("scroll", T);
  }, [n]);
  const m = Us((T) => {
    if (T.preventDefault(), e) {
      e();
      return;
    }
    s();
  });
  return n && !d || a || r || i && l || n && h ? null : /* @__PURE__ */ o.jsx(
    it,
    {
      onClick: m,
      variant: "contained",
      iconProps: { icon: "far fa-cookie" },
      sx: xl(t),
      "aria-label": "Manage cookie settings"
    }
  );
}, Rl = ({
  children: e,
  categories: t,
  onConsentChange: n,
  orgSlug: s
}) => {
  const a = je(), r = ml({ categories: t, onConsentChange: n, orgSlug: s });
  return a ? e : /* @__PURE__ */ o.jsxs(gl, { value: r, children: [
    e,
    /* @__PURE__ */ o.jsx(El, {}),
    /* @__PURE__ */ o.jsx(Tl, {}),
    /* @__PURE__ */ o.jsx(Al, {})
  ] });
}, Cl = () => {
  const { slug: e } = J();
  return F(Z) ? /* @__PURE__ */ o.jsx(ie, {}) : (
    // initialize only in standalone app scenario, otherwise you get two consent handlers
    /* @__PURE__ */ o.jsx(Rl, { orgSlug: e, children: /* @__PURE__ */ o.jsx(ie, {}) })
  );
}, Dl = () => {
  const e = c.useRef(null), t = c.useRef(null), n = c.useCallback(() => {
    if (!e.current) return;
    const s = e.current.scrollHeight;
    t.current !== s && (window.parent.postMessage({ type: "height", height: s }, "*"), t.current = s);
  }, []);
  return c.useEffect(() => {
    const s = new ResizeObserver(n), a = new MutationObserver(n);
    return e.current && (s.observe(e.current), a.observe(e.current, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), n()), window.addEventListener("load", n), window.addEventListener("resize", n), () => {
      a.disconnect(), s.disconnect(), window.removeEventListener("load", n), window.removeEventListener("resize", n);
    };
  }, [n]), e;
}, nt = {
  /** Same date with different times (e.g., "03/18/2024 1:00 PM - 1:15 PM") */
  SAME_DATE_TIME: "same-date-time",
  /** Different dates with times (e.g., "03/18/2024 1:00 PM - 03/19/2024 1:15 PM") */
  DIFFERENT_DATE_TIME: "different-date-time",
  /** Time range only (e.g., "1:00 PM - 1:15 PM") */
  TIME_ONLY: "time-only",
  /** Unformatted/unrecognized format */
  UNFORMATTED: "unformatted"
}, Il = /(\d{1,2}:\d{2})\s*(AM|PM)/i, Ol = /^(.+?)\s+(\d{1,2}:\d{2}(?:\s*(?:AM|PM))?)\s*-\s*(\d{1,2}:\d{2}(?:\s*(?:AM|PM))?)$/i, Nl = /^(.+?)\s+(\d{1,2}:\d{2}\s*(?:AM|PM))\s*-\s*(.+?)\s+(\d{1,2}:\d{2}\s*(?:AM|PM))$/i, Pl = /^(\d{1,2}:\d{2})\s*(AM|PM)?\s*-\s*(\d{1,2}:\d{2})\s*(AM|PM)?$/i, wl = /^[a-zA-Z]{2}$/, Vn = (e) => {
  const t = f.last(e.split("-"));
  return t && wl.test(t) ? t.toLowerCase() : void 0;
}, Oe = (e) => {
  const t = Il.exec(e);
  if (t) {
    const [, n, s] = t;
    return `${s} ${n}`;
  }
  return e;
}, Td = (e, t) => {
  const n = Ol.exec(e);
  if (n) {
    const [, r, i, l] = n, d = r.trim(), u = t ? Oe(i.trim()) : i.trim(), p = t ? Oe(l.trim()) : l.trim();
    return {
      dateStart: d,
      dateEnd: void 0,
      timeStart: u,
      timeEnd: p,
      format: nt.SAME_DATE_TIME
    };
  }
  const s = Nl.exec(e);
  if (s) {
    const [, r, i, l, d] = s, u = r.trim(), p = l.trim(), h = t ? Oe(i.trim()) : i.trim(), m = t ? Oe(d.trim()) : d.trim();
    return {
      dateStart: u,
      dateEnd: p,
      timeStart: h,
      timeEnd: m,
      format: nt.DIFFERENT_DATE_TIME
    };
  }
  const a = Pl.exec(e);
  if (a) {
    const [, r, i = "", l, d = ""] = a, u = t ? Oe(r.trim().concat(i)) : `${r.trim()} ${i}`.trim(), p = t ? Oe(l.trim().concat(d)) : `${l.trim()} ${d}`.trim();
    return {
      dateStart: void 0,
      dateEnd: void 0,
      timeStart: u,
      timeEnd: p,
      format: nt.TIME_ONLY
    };
  }
  return {
    dateStart: void 0,
    dateEnd: void 0,
    timeStart: e,
    timeEnd: void 0,
    format: nt.UNFORMATTED
  };
}, Sd = (e = "", t = !1) => {
  const n = "‎";
  return t ? `${n}${e}${n}` : e;
}, Ed = (e, t = "en") => e.toFormat("d MMM", { locale: t });
let dt = {}, pt = !1, ao = null;
const Ll = () => {
  const e = dt;
  dt = {}, pt = !1, Object.keys(e).length > 0 && ao?.(e);
}, rn = (e) => {
  Object.assign(dt, e), pt || (pt = !0, queueMicrotask(Ll));
}, Kn = (e) => {
  ao = e;
}, vl = () => {
  dt = {}, pt = !1;
}, ln = {
  parse: (e) => e,
  serialize: (e) => e
}, jl = {
  parse: (e) => e ? e.split(",") : [],
  serialize: (e) => e.length ? e.join(",") : null
}, Bl = {
  parse: (e) => e ? e.split(",") : null,
  serialize: (e) => e?.length ? e.join(",") : null
}, Ml = (e) => ({
  parse: (t) => {
    const n = parseInt(t ?? "", 10);
    return Number.isFinite(n) && n >= 1 ? n : e;
  },
  serialize: (t) => String(t)
}), Ul = {
  parse: (e) => {
    if (e === null || e === "")
      return null;
    const t = Number.parseInt(e, 10);
    return Number.isFinite(t) && t >= 1 ? t : null;
  },
  serialize: (e) => e !== null ? String(e) : null
}, kl = {
  parse: (e) => {
    if (e === null) return null;
    const t = parseInt(e, 10);
    return Number.isFinite(t) ? t : null;
  },
  serialize: (e) => e !== null ? String(e) : null
}, he = (e, t) => {
  const n = gt(), s = c.useMemo(() => {
    const r = n.get(e) ?? new URLSearchParams(rr()).get(e);
    return t.parse(r);
  }, [n, e, t]), a = c.useCallback(
    (r) => {
      rn({ [e]: t.serialize(r) });
    },
    [e, t]
  );
  return [s, a];
}, Fl = [], bd = (e, t) => {
  if (t < 1)
    return e.length === 0 ? e : Fl;
  let n = !1;
  const s = e.flatMap((a) => {
    if (a.count <= 0)
      return n = !0, [];
    const r = Math.min(a.count, t);
    return r !== a.count ? (n = !0, [{ addOnId: a.addOnId, count: r }]) : [a];
  });
  return n ? s : e;
}, Gl = {
  parse: (e) => e ? e.split(",").map((t) => {
    const [n, s] = t.split(":");
    if (!n || !s)
      return null;
    const a = parseInt(s, 10);
    return !Number.isFinite(a) || a < 1 ? null : { addOnId: n, count: a };
  }).filter((t) => t !== null) : [],
  // Returns null (so the param is omitted from the URL) when no positive-count
  // entries survive the filter — guards against writing `?addOns=` for inputs
  // like [{addOnId, count: 0}].
  serialize: (e) => {
    const t = e.filter(({ count: n }) => n > 0);
    return t.length ? t.map(({ addOnId: n, count: s }) => `${n}:${s}`).join(",") : null;
  }
}, Ad = (e) => Object.fromEntries(e.map(({ extraId: t, count: n }) => [t, n])), Hl = {
  parse: (e) => e ? e.split(",").map((t) => {
    const [n, s] = t.split(":");
    if (!n || !s)
      return null;
    const a = parseInt(s, 10);
    return !Number.isFinite(a) || a < 1 ? null : { extraId: n, count: a };
  }).filter((t) => t !== null) : [],
  serialize: (e) => {
    const t = e.filter(({ count: n }) => n > 0);
    return t.length ? t.map(({ extraId: n, count: s }) => `${n}:${s}`).join(",") : null;
  }
}, $l = 1, yt = () => he("office", Bl), ro = () => he("amenities", jl), Ve = () => he("type", ln), Ke = () => he("listingType", ln), Ye = () => he("language", ln), Rd = () => he("quantity", Ml($l)), io = () => he("capacity", kl), Cd = () => he("packQuantity", Ul), Dd = () => he("addOns", Gl), Id = () => he("extras", Hl), Wl = (e, t) => e.find((n) => n.locale === t), Vl = ({ languages: e }) => {
  const [t, n] = c.useState(!1), s = c.useCallback(
    () => /* @__PURE__ */ o.jsx(zt, { onClick: () => n(!t) }),
    [n, t]
  ), a = W(), [r, i] = Ye();
  return /* @__PURE__ */ o.jsx(
    $t,
    {
      slotProps: { input: { "aria-label": "Language" } },
      sx: {
        width: a.typography.pxToRem(73),
        height: a.typography.pxToRem(36)
      },
      onChange: (l) => i(l.target.value),
      "data-test": "languages-selector",
      value: r ?? "",
      renderValue: (l) => {
        const d = Wl(e, l), u = d?.locale ? Vn(d.locale) : void 0;
        return u ? /* @__PURE__ */ o.jsx(O, { paddingBlockStart: 1, children: /* @__PURE__ */ o.jsx(
          gn,
          {
            iso2: u,
            size: a.typography.pxToRem(32)
          }
        ) }) : null;
      },
      MenuProps: {
        ...qt,
        PaperProps: {
          style: {
            width: a.typography.pxToRem(240),
            marginTop: a.typography.pxToRem(5)
          }
        }
      },
      open: t,
      onOpen: () => n(!0),
      onClose: () => n(!1),
      IconComponent: s,
      children: f.map(e, (l) => {
        const d = Vn(l.locale);
        return /* @__PURE__ */ o.jsx(
          lt,
          {
            value: l.locale,
            children: /* @__PURE__ */ o.jsxs(
              C,
              {
                direction: "row",
                alignItems: "center",
                gap: 4,
                padding: 1,
                children: [
                  d ? /* @__PURE__ */ o.jsx(
                    gn,
                    {
                      iso2: d,
                      size: a.typography.pxToRem(20)
                    }
                  ) : null,
                  /* @__PURE__ */ o.jsx(L, { variant: "body", children: l.label || l.locale })
                ]
              }
            )
          },
          l.locale
        );
      })
    }
  );
}, Kl = 44, Yn = () => {
  const e = le(), t = J(), { t: n } = z(), s = je(), a = F(Z), [r] = Ye(), i = Xt(), l = !s && !a, d = Dl(), u = s ? d : void 0, { getImageUrl: p } = c.useContext(Ht), { data: h } = Qs(), m = c.useMemo(
    () => f.filter(h, (_) => _.published),
    [h]
  );
  return /* @__PURE__ */ o.jsxs(C, { ref: u, children: [
    l ? /* @__PURE__ */ o.jsxs(
      C,
      {
        component: He,
        direction: "row",
        alignItems: "center",
        paddingInline: 8,
        paddingBlock: 2,
        minHeight: (_) => _.typography.pxToRem(64),
        justifyContent: "space-between",
        gap: 1,
        sx: {
          "&.MuiPaper-root.MuiPaper-elevation": {
            borderRadius: 0
          }
        },
        children: [
          /* @__PURE__ */ o.jsx(
            _n,
            {
              "rnd-data-id": `${$.PUBLIC}-${B.HEADER_HOME_BUTTON}`,
              to: (() => {
                const _ = $e({
                  ...i,
                  ...r && { language: r }
                });
                return _ ? `/${e.orgSlug}?${_}` : `/${e.orgSlug}`;
              })(),
              lineHeight: 0,
              children: t.image ? /* @__PURE__ */ o.jsx(
                Fr,
                {
                  component: "img",
                  src: p(t.image),
                  alt: "Company logo",
                  sx: (_) => ({
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxHeight: _.typography.pxToRem(Kl)
                  })
                }
              ) : /* @__PURE__ */ o.jsx(
                ws,
                {
                  "data-test": "logo-placeholder",
                  placeholderText: t.name,
                  border: "none",
                  iconWithText: { icon: "fa fa-building", fontSize: "large", padding: 2 }
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsxs(
            C,
            {
              direction: "row",
              gap: 2,
              children: [
                f.size(m) > 1 ? /* @__PURE__ */ o.jsx(Vl, { languages: m }) : null,
                t.settings.community.enabled ? /* @__PURE__ */ o.jsx(
                  _n,
                  {
                    "data-test": "login-button",
                    to: `${t.regionInfo.basePortalUrl}login`,
                    target: "_blank",
                    minWidth: "fit-content",
                    children: /* @__PURE__ */ o.jsx(
                      Q,
                      {
                        variant: "contained",
                        sx: (_) => ({ minWidth: _.typography.pxToRem(80) }),
                        children: n("static-log-in-button-title", {
                          defaultValue: "Log In"
                        })
                      }
                    )
                  }
                ) : null
              ]
            }
          )
        ]
      }
    ) : null,
    /* @__PURE__ */ o.jsx(ie, {})
  ] });
}, lo = (e) => {
  if (e == null)
    return;
  const t = typeof e == "number" ? e : Number.parseFloat(e);
  if (!(f.isNaN(t) || t <= 0))
    return t;
}, Od = (e) => {
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, Yl = () => {
  try {
    return globalThis.parent?.document || document;
  } catch {
    return document;
  }
}, zl = () => {
  const e = Yl(), t = globalThis.getComputedStyle(e.documentElement), n = Number.parseFloat(t.fontSize);
  return f.isNaN(n) ? Oi : n;
}, zn = (e) => lo(e) ?? zl(), qn = (e) => Ss(e) ? qa(e) : e, ql = (e, t) => {
  const n = [];
  e && n.push({ url: qn(e), id: "growth-hub-portal-custom-font" });
  const s = t?.trim();
  return s && n.push({
    url: qn(s),
    id: "growth-hub-portal-headings-font"
  }), n;
}, Xl = ["h1", "h2", "h3", "h4"], Ql = 1.4, Jl = (e) => {
  const t = e?.trim();
  return {
    lineHeight: Ql,
    ...t && { fontFamily: t }
  };
}, Zl = (e, t) => {
  const n = Jl(t), { createCustomTypography: s } = e;
  return {
    ...e,
    createCustomTypography: (a) => {
      const r = s(a), i = Object.fromEntries(
        Xl.map((l) => [
          l,
          { ...r[l], ...n }
        ])
      );
      return { ...r, ...i };
    }
  };
}, ec = /* @__PURE__ */ new Set([
  "ar",
  // Arabic
  "he",
  // Hebrew
  "fa",
  // Persian
  "ur",
  // Urdu
  "ps",
  // Pashto
  "dv",
  // Divehi
  "ku",
  // Kurdish
  "yi",
  // Yiddish
  "syr",
  // Syriac
  "ug",
  // Uyghur
  "sd",
  // Sindhi
  "arc",
  // Aramaic
  "az-Arab"
  // Azerbaijani (Arabic script)
]), tc = (e, t) => {
  const n = e?.split("-")[0] || "en", s = ec.has(n) ? "rtl" : "ltr";
  return t || (document.documentElement.setAttribute("lang", n), document.documentElement.setAttribute("dir", s)), s;
}, Xn = {
  primaryColor: yn.primary,
  backgroundColor: yn.background
}, nc = (e) => {
  if (!e)
    return Xn;
  const { activeTheme: t, themes: n } = e, s = f.find(n, (a) => a.type === t);
  return s ? {
    primaryColor: s.accentColor,
    backgroundColor: s.backgroundColor ?? "#FFFFFF"
  } : Xn;
}, sc = (e, t) => {
  const [n] = Ye(), s = F(Z), a = F(Hs), [r, i] = c.useState(
    () => s ? zn(a) : kn
  );
  return c.useEffect(() => {
    if (!s) {
      i(kn);
      return;
    }
    i(zn(a));
  }, [s, a]), c.useMemo(() => {
    const l = nc(t), d = ql(e?.fontUrl, e?.headingsFontUrl), u = _a({
      colors: {
        primaryColor: e?.primaryColor ?? l.primaryColor,
        backgroundColor: e?.backgroundColor ?? l.backgroundColor
      },
      direction: tc(n, s),
      fontFamily: e?.fontFamily,
      customFontSize: r,
      excludedExternalCssUrlIds: [ya.TABLER_ICONS],
      // NOTE: In web component mode, raise the modal z-index above the host page's content.
      ...s && { zIndex: { modal: Ni } },
      ...d.length > 0 && { externalFontUrls: d }
    });
    return Zl(u, e?.headingsFontFamily);
  }, [
    t,
    e?.primaryColor,
    e?.backgroundColor,
    e?.fontFamily,
    e?.fontUrl,
    e?.headingsFontFamily,
    e?.headingsFontUrl,
    n,
    s,
    r
  ]);
}, oc = ({ children: e }) => {
  const t = J(), n = t?.settings?.community?.appearance, { data: s } = Me(t?.slug ?? ""), a = F(Z), r = sc(s?.branding, n), i = c.useMemo(
    () => r && xa(r),
    [r]
  );
  return a ? /* @__PURE__ */ o.jsx(
    Ta,
    {
      name: "growth-hub-portal",
      themeOptions: r,
      shadowHostStyle: {
        height: "100%",
        minHeight: "100vh",
        // all: initial prevents style leaking from the host page
        all: "initial",
        // display: initial resets to 'inline', breaking block-level content layout
        display: "block",
        // background: initial can interfere with shadow DOM content rendering
        background: s?.branding?.backgroundColor ?? "inherit",
        direction: i?.direction,
        boxSizing: "border-box"
      },
      children: e
    }
  ) : /* @__PURE__ */ o.jsx(us, { theme: i, children: e });
}, ac = () => /* @__PURE__ */ o.jsx(oc, { children: /* @__PURE__ */ o.jsx(
  Sa,
  {
    anchorOrigin: {
      horizontal: "center",
      vertical: "bottom"
    },
    children: /* @__PURE__ */ o.jsx(ie, {})
  }
) }), rc = () => {
  const [e, t] = cs(), n = Ce(), s = c.useRef(e);
  s.current = e;
  const a = c.useCallback(
    (r) => {
      const i = new URLSearchParams(s.current);
      f.forEach(r, (l, d) => {
        l == null ? i.delete(d) : i.set(d, l);
      }), t(i, { replace: !0, state: n.state });
    },
    [t, n.state]
  );
  c.useEffect(() => (Kn(a), () => Kn(null)), [a]);
}, ic = () => (rc(), /* @__PURE__ */ o.jsx(ie, {})), Nd = async (e, t) => M.post(`/i/${e}/checkout/plan-summary`, t).then((n) => n.data), co = (e, t) => ({
  queryKey: Fe.detail(e, t),
  queryFn: () => M.get(`/i/${e}/plans/${t}`).then((n) => n.data)
}), lc = (e) => async ({
  params: t
}) => {
  const n = co(t.orgSlug, t.planId);
  return e.ensureQueryData(n);
}, Pd = (e, t) => {
  const n = Gt();
  return V({
    ...co(e, t),
    initialData: n?.plan
  });
}, wd = (e, t, n) => V({
  queryKey: Fe.flexibleAreaOccupancy(e, t._id, n),
  queryFn: () => M.get(`/i/${e}/plans/${t._id}/flexible-area/occupancy?location=${n}`).then((s) => s.data),
  enabled: !!t?.isFlexibleArea && !!n
}), cc = se(
  () => import("./webc-SearchResults-DnFYFa0P.js").then((e) => ({ default: e.SearchResults }))
), uc = se(
  () => import("./webc-Resource-DTbBPNZ_.js").then((e) => ({ default: e.Resource }))
), dc = se(
  () => import("./webc-SelectExtras-DnSxVQ8-.js").then((e) => ({ default: e.SelectExtras }))
), pc = se(
  () => import("./webc-CheckoutResource-C9AIyBWr.js").then((e) => ({ default: e.CheckoutResource }))
), hc = se(
  () => import("./webc-index-CMc_x7X9.js").then((e) => ({ default: e.ResourceSuccessPage }))
), fc = se(
  () => import("./webc-Plan-DVjVKkUT.js").then((e) => ({ default: e.Plan }))
), mc = se(
  () => import("./webc-CheckoutPlan-CxmyxLJ1.js").then((e) => ({ default: e.CheckoutPlan }))
), gc = se(
  () => import("./webc-index-DC1U_iMv.js").then((e) => ({ default: e.PlanSuccessPage }))
), _c = se(
  () => import("./webc-ProcessResourceCheckout-ByKAo5F2.js").then((e) => ({
    default: e.ProcessResourceCheckout
  }))
), yc = se(
  () => import("./webc-ProcessResourceCheckoutFailed-_gGoK9fB.js").then((e) => ({
    default: e.ProcessResourceCheckoutFailed
  }))
), xc = se(
  () => import("./webc-ProcessPlanCheckout-BYfCYYfy.js").then((e) => ({
    default: e.ProcessPlanCheckout
  }))
), Tc = se(
  () => import("./webc-ProcessPlanCheckoutFailed-BdbY3fzn.js").then((e) => ({
    default: e.ProcessPlanCheckoutFailed
  }))
), Qn = (e, t) => !e || !t?.length ? void 0 : t.find(
  (n) => (
    // target exact match first, ignore casing
    e.toLowerCase() === n.locale.toLowerCase() || // allow partial match by language code, when only language code is defined in the target (e.g. lang='en' to match our existing 'en-us' locale)
    e.toLowerCase() === n.locale.split("-")[0].toLowerCase() || // allow partial match by language code only, ignoring the targeted country code when present (e.g. lang='en-gb' to match our existing 'en-us' locale)
    e.toLowerCase().split("-")[0] === n.locale.split("-")[0].toLowerCase()
  )
), Sc = (e) => {
  const [t, n] = c.useState(void 0);
  return c.useEffect(() => {
    const s = Qn(document.documentElement.lang, e);
    n(s?.locale);
  }, [e]), c.useEffect(() => {
    const s = new MutationObserver((a) => {
      a.forEach((r) => {
        if (r.attributeName === "lang") {
          const i = Qn(document.documentElement.lang, e);
          n(i?.locale);
        }
      });
    });
    return s.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["lang"]
    }), () => s.disconnect();
  }, [e, t]), { htmlAttrLanguage: t };
}, Jn = (e) => f.find(e, (t) => t.default), Ec = (e, t) => e.find((n) => n.locale === t), bc = () => {
  const { i18n: e } = z(), [t, n] = Ye(), { data: s, isFetching: a } = Qs(), { data: r, isFetching: i } = Ui(t), l = F(Z), { htmlAttrLanguage: d } = Sc(s);
  c.useEffect(() => {
    l && d && d !== t && n(d);
  }, [l, d, t, n]), c.useEffect(() => {
    if (a || i || !s)
      return;
    const u = Ec(s, t);
    u && r ? (async () => {
      if (u)
        try {
          const h = u.locale.split("-")[0];
          e.addResourceBundle(h, "translation", r, !0, !0), await e.changeLanguage(h);
        } catch (h) {
          console.error("Failed to load language:", h), n(Jn(s)?.locale ?? null);
        }
    })() : u || n(Jn(s)?.locale ?? null);
  }, [
    e,
    t,
    s,
    a,
    i,
    n,
    r
  ]);
}, Ac = () => (bc(), /* @__PURE__ */ o.jsx(ie, {})), Rc = () => {
  const e = F(Z), { slug: t } = J(), { data: n } = Me(t);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    !e && /* @__PURE__ */ o.jsx(
      "span",
      {
        "aria-hidden": "true",
        style: {
          // ensure the text is not moving the content layout
          position: "absolute",
          // ensure the text is not interactable in any way
          userSelect: "none",
          pointerEvents: "none",
          // ensure it stays below other content
          zIndex: -1,
          // tested for dashboard, search results and plan/resource details - 200px is larger than all elements on those pages
          fontSize: 200,
          // the text must have some color to be picked by the browser as an LCP element - we're making it the same as the background color to make it visually hidden
          // `transparent` is used only as a fallback if settings?.branding?.backgroundColor fails to load or is empty for whatever reason (both shouldn't happen)
          color: n?.branding?.backgroundColor ?? "transparent",
          // ensure the invisible text element is not streching the page height
          maxHeight: "100vh",
          overflow: "hidden",
          wordBreak: "break-all"
        },
        children: "officernd e-commerce portal"
      }
    ),
    /* @__PURE__ */ o.jsx(ie, {})
  ] });
}, Cc = (e, t, n, s, a) => !n || !s ? f.find(
  t,
  (l) => f.some(e, (d) => d.category === l._id)
)?._id || a : f.find(
  e,
  (i) => i.resourceType === n && i.listingType === s
)?.category || a, Dc = (e, t, n) => {
  const [s] = Ve(), [a] = Ke();
  return c.useMemo(
    () => Cc(
      e,
      t,
      s,
      a,
      n
    ),
    [e, s, a, t, n]
  );
}, Ic = () => /* @__PURE__ */ o.jsxs(
  C,
  {
    direaction: "row",
    gap: 6,
    paddingBlockStart: 8,
    sx: { width: "100%" },
    children: [
      /* @__PURE__ */ o.jsx(
        oe,
        {
          variant: "rounded",
          animation: "wave",
          sx: (e) => ({
            width: "40%",
            height: e.typography.pxToRem(34)
          })
        }
      ),
      /* @__PURE__ */ o.jsx(
        oe,
        {
          variant: "rounded",
          animation: "wave",
          sx: (e) => ({
            width: "30%",
            height: e.typography.pxToRem(34)
          })
        }
      )
    ]
  }
), Le = "other_system", st = (e, t) => t === Le ? f.filter(e, (n) => !n.category || n.category === Le) : f.filter(e, (n) => n.category === t), Oc = (e, t) => f.some(
  e,
  (n) => t._id === Le ? !n.category || n.category === Le : n.category === t._id
), uo = ({
  subCategories: e,
  categories: t,
  containerStyles: n,
  buttonStyles: s,
  isLoading: a
}) => {
  const { t: r } = z(), [i, l] = Ve(), [d, u] = Ke(), p = c.useMemo(
    () => [
      ...f.sortBy(t, "title"),
      {
        _id: Le,
        title: r("static-category-other-title", {
          defaultValue: "Other"
        })
      }
    ],
    [t, r]
  ), h = Dc(
    e ?? [],
    p,
    Le
  ), m = c.useMemo(
    () => p.filter((x) => Oc(e ?? [], x)).map((x) => ({
      label: /* @__PURE__ */ o.jsx(L, { variant: "groupTitle", children: r(`category-${x._id}-title`, {
        defaultValue: x.title
      }) }),
      value: x._id
    })),
    [p, e, r]
  ), _ = (x, A) => {
    const R = st(e ?? [], A);
    R.length > 0 && (l(R[0].resourceType), u(R[0].listingType));
  }, T = c.useMemo(
    () => st(e ?? [], h),
    [e, h]
  ), y = (x, A) => {
    A.preventDefault();
    const R = f.find(e, (b) => `${b.listingType}_${b._id}` === x);
    R && (l(R.resourceType), u(R.listingType));
  };
  return c.useEffect(() => {
    if (!i || !d) {
      const x = p.find(
        (A) => st(e ?? [], A._id).length > 0
      );
      if (x) {
        const A = st(
          e ?? [],
          x._id
        );
        l(A[0].resourceType), u(A[0].listingType);
      }
    }
  }, [
    i,
    d,
    p,
    e,
    l,
    u
  ]), a ? /* @__PURE__ */ o.jsx(Ic, {}) : /* @__PURE__ */ o.jsxs(
    C,
    {
      gap: 6,
      paddingBlockStart: 8,
      width: m.length > 1 ? "100%" : "unset",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      overflow: "hidden",
      children: [
        /* @__PURE__ */ o.jsx(
          qr,
          {
            sx: { width: { xs: "80vw", md: "100%" } },
            onChange: _,
            value: h,
            tabs: m,
            tabVariant: Ea.REGULAR,
            pageContainerId: "categories-tabs"
          }
        ),
        /* @__PURE__ */ o.jsx(O, { children: /* @__PURE__ */ o.jsx(
          ba,
          {
            "data-test": "resource-types-filter",
            forceSelection: !0,
            onSelectOption: y,
            sx: (x) => ({
              [`&.${En.root}`]: {
                gap: 2,
                ...n
              },
              [`& .${En.grouped}.${Ba.root}`]: {
                border: 1,
                borderRadius: x.typography.pxToRem(36),
                height: x.typography.pxToRem(36),
                ...s
              }
            }),
            options: f.map(T, (x) => ({
              key: `${x.listingType}_${x._id}`,
              "data-test": x.resourceType,
              "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_RESOURCE_TYPE_BUTTON}-${x.resourceType}`,
              value: r(`subcategory-${x._id}-title`, {
                defaultValue: x.title
              }),
              selected: x.resourceType === i && x.listingType === d
            }))
          },
          h
        ) }, h)
      ]
    }
  );
}, po = ({
  subCategories: e,
  categories: t,
  isLoading: n
}) => /* @__PURE__ */ o.jsx(
  uo,
  {
    categories: t,
    subCategories: e,
    isLoading: n,
    containerStyles: {
      flexWrap: "wrap",
      justifyContent: "flex-start"
    }
  }
), ho = ({
  subCategories: e,
  categories: t
}) => /* @__PURE__ */ o.jsx(
  uo,
  {
    categories: t,
    subCategories: e,
    containerStyles: {
      display: "flex",
      flexWrap: { xs: "wrap", md: "nowrap" },
      justifyContent: "flex-start",
      overflowX: "auto",
      maxWidth: "100%"
    },
    buttonStyles: {
      whiteSpace: "nowrap"
    }
  }
), Zn = 400, Ct = "fit-content", Nc = se(
  () => import("./webc-MapFilter-DDXOT-_S.js").then((e) => ({ default: e.MapFilter }))
), fo = ({
  locations: e,
  resultsMode: t = !0,
  children: n
}) => {
  const s = W(), a = me(s.breakpoints.down("sm"));
  return /* @__PURE__ */ o.jsx(
    O,
    {
      "data-test": "filter-panel-container",
      width: t ? { xs: s.typography.pxToRem(400), md: s.typography.pxToRem(460) } : { xs: "100%", lg: Ct },
      minHeight: "100%",
      display: "flex",
      justifyContent: "center",
      children: /* @__PURE__ */ o.jsxs(
        He,
        {
          width: "100%",
          sx: {
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            alignItems: "center",
            maxHeight: Ct
          },
          children: [
            /* @__PURE__ */ o.jsx(
              C,
              {
                sx: {
                  // NOTE: supports the map "overlap" effect.
                  zIndex: 1,
                  height: Ct,
                  width: t ? "100%" : { lg: s.typography.pxToRem(rt) },
                  minWidth: "100%",
                  // NOTE: Set some margin so the Paper [elevation] shadow is not clipped when the component is placed
                  // inside a container without sufficient space around it, or if the parent container has overflow: hidden.
                  margin: 0.25
                },
                children: /* @__PURE__ */ o.jsx(
                  C,
                  {
                    paddingInline: 6,
                    paddingBlockEnd: 6,
                    gap: 2,
                    alignItems: "center",
                    flexWrap: "wrap",
                    children: n
                  }
                )
              }
            ),
            t && !a ? /* @__PURE__ */ o.jsx(
              O,
              {
                sx: {
                  paddingBlockEnd: 6,
                  paddingInline: 6,
                  height: s.typography.pxToRem(Zn),
                  maxHeight: s.typography.pxToRem(Zn),
                  // GH-855 - lowering the minHeight to 176px to accommodate for a filter panel with 4 rows of pills
                  minHeight: s.typography.pxToRem(176),
                  flexGrow: 1,
                  position: "relative",
                  rndDataId: B.SEARCH_MAP_FILTER,
                  width: "100%"
                },
                "rnd-data-id": B.SEARCH_MAP_FILTER,
                children: /* @__PURE__ */ o.jsx(c.Suspense, { fallback: /* @__PURE__ */ o.jsx(X, { size: Ge.SELECT }), children: /* @__PURE__ */ o.jsx(Nc, { locations: e }) })
              }
            ) : null
          ]
        }
      )
    }
  );
}, mo = (e) => {
  const { slug: t } = J();
  return c.useMemo(
    () => f.filter(e, (n) => n.accountSlug === t),
    [e, t]
  );
}, Pc = (e) => {
  const t = mo(e);
  return c.useCallback(
    (n) => n ? t?.find((s) => s._id === n) ?? null : null,
    [t]
  );
}, cn = (e) => {
  const t = mo(e);
  return c.useCallback(
    (n) => n ? f.filter(t, (s) => n.includes(s._id)) : [],
    [t]
  );
}, wc = (e) => {
  const t = _e(e.from);
  let n = _e(e.to);
  n.hour === 23 && n.minute === 59 && n.second === 59 && (n = n.endOf("day"));
  const a = j.now(), r = e.occurrence === "yearly";
  if (n < a) {
    if (r) {
      const i = t.set({ year: a.year }), l = n.year - t.year || 0, d = n.set({ year: a.year + l });
      return { from: i, to: d };
    }
    return { from: null, to: null };
  }
  return { from: t, to: n };
}, un = ({
  businessHours: e,
  selectedOffice: t
}) => c.useMemo(() => {
  const { closedDays: n = [] } = e, s = Es(n, t);
  return f.compact(
    f.map(s, (a) => {
      const { from: r, to: i } = wc(a);
      return r && i ? ve.fromDateTimes(r, i) : null;
    })
  );
}, [e, t]), go = ({
  businessHours: e,
  timezone: t,
  closedDaysIntervals: n,
  bookingMode: s
}) => c.useMemo(
  () => (a) => {
    const { forBookings: r, forNonActiveMembers: i } = e, l = r && i, d = j.fromJSDate(a), { isPast: u, isFutureLimited: p, isWorkday: h, isClosedDay: m } = Yt({
      cellDate: d,
      businessHours: e,
      closedDaysIntervals: n,
      timezone: t,
      bookingMode: s
    });
    return !!(u || p || l && (m || !h));
  },
  [e, n, t, s]
), Lc = ({
  businessHours: e,
  timezone: t,
  occupiedDaysIntervals: n = [],
  bookingMode: s
}) => c.useMemo(
  () => (a) => {
    const r = j.fromJSDate(a), { isPast: i, isFutureLimited: l, isFullyOccupied: d } = Yt({
      cellDate: r,
      businessHours: e,
      occupiedDaysIntervals: n,
      timezone: t,
      bookingMode: s
    });
    return !!(!i && !l && d);
  },
  [e, n, t, s]
), vc = ({
  businessHours: e,
  timezone: t,
  bookingMode: n = ye.Time,
  selectedOffice: s,
  occupiedDaysIntervals: a = []
}) => {
  const r = un({
    businessHours: e,
    selectedOffice: s
  }), i = c.useMemo(
    () => As(r, e, t),
    [r, e, t]
  ), l = go({
    businessHours: e,
    timezone: t,
    closedDaysIntervals: [...i, ...a ?? []],
    bookingMode: n
  }), d = Lc({
    businessHours: e,
    timezone: t,
    occupiedDaysIntervals: a ?? void 0,
    bookingMode: n
  }), u = c.useCallback(
    (p) => {
      const { value: h, style: m } = p, { isToday: _ } = Yt({
        cellDate: j.fromJSDate(h),
        businessHours: e,
        closedDaysIntervals: i,
        timezone: t,
        bookingMode: n
      }), T = l(h), x = d(h) ? {
        ...m,
        textDecoration: "line-through",
        color: "inherit",
        opacity: 1
      } : m;
      return /* @__PURE__ */ o.jsx(
        Aa,
        {
          ...p,
          style: x,
          isDisabled: T,
          isToday: _
        }
      );
    },
    [e, i, l, d, t, n]
  );
  return c.useCallback(
    (p) => {
      const h = j.now().startOf("day");
      return /* @__PURE__ */ o.jsx(
        Ra,
        {
          ...p,
          onChange: p.onChange,
          cell: u,
          min: h.toJSDate(),
          max: h.plus({ months: _t }).toJSDate()
        }
      );
    },
    [u]
  );
}, es = (e, t) => f.find(e, (n) => n.value === t?.toMillis())?.value ?? e[0]?.value, jc = ({
  startRndDataId: e,
  endRndDataId: t,
  reducer: n,
  fromLabel: s,
  toLabel: a,
  arrowSeparator: r,
  minWidth: i,
  fullWidth: l,
  responsiveWidth: d = !1
}) => {
  const [u, p] = n, h = W(), m = c.useMemo(() => {
    let x = {
      xs: h.typography.pxToRem(156),
      md: h.typography.pxToRem(172)
    };
    return l || d ? x = "100%" : i && (x = h.typography.pxToRem(142)), {
      "&.RndKendoElement .k-dropdownlist": {
        minWidth: "unset",
        width: x,
        ...Be
      },
      // NOTE: Re-apply the padding and margin to the icon button for the web component where it's not applied by default.
      "&.RndKendoElement .k-dropdownlist .k-icon-button": {
        padding: `${h.typography.pxToRem(4)} ${h.typography.pxToRem(8)}`,
        margin: `-${h.typography.pxToRem(1)}`
      },
      ...l && {
        "&.RndKendoElement": {
          minWidth: "100%"
        }
      },
      ...d && !l && {
        "&.RndKendoElement": {
          minWidth: 0,
          width: "100%"
        }
      },
      ...We
    };
  }, [h, i, l, d]), _ = /* @__PURE__ */ o.jsx(
    xn,
    {
      "rnd-data-id": e,
      "data-test": "start-time",
      textField: "text",
      valueField: "value",
      valuePrimitive: !0,
      value: es(u.startSlots, u.start ?? void 0),
      data: u.startSlots,
      reserveMessageSpace: !1,
      onChange: (x) => {
        const A = j.fromMillis(x.target.value, { zone: "local" });
        p({
          type: "SET_PERIOD_START",
          payload: A
        });
      },
      label: s,
      labelPlacement: "top",
      fullWidth: !1,
      sx: m
    }
  ), T = /* @__PURE__ */ o.jsx(
    xn,
    {
      "rnd-data-id": t,
      "data-test": "end-time",
      textField: "text",
      valueField: "value",
      valuePrimitive: !0,
      value: es(u.endSlots, u.end ?? void 0),
      data: u.endSlots,
      reserveMessageSpace: !1,
      onChange: (x) => {
        const A = j.fromMillis(x.target.value, { zone: "local" });
        p({
          type: "SET_PERIOD_END",
          payload: A
        });
      },
      label: a,
      labelPlacement: "top",
      fullWidth: !1,
      sx: m
    }
  ), y = d ? { flex: 1, minWidth: 0 } : void 0;
  return /* @__PURE__ */ o.jsxs(
    C,
    {
      "data-test": "time-slot-picker-container",
      flexWrap: "wrap",
      direction: "row",
      gap: 2,
      alignItems: "center",
      width: l || d ? "100%" : void 0,
      children: [
        y ? /* @__PURE__ */ o.jsx(O, { sx: y, children: _ }) : _,
        r ? /* @__PURE__ */ o.jsx(
          O,
          {
            alignSelf: "flex-end",
            marginBlockEnd: 1,
            children: /* @__PURE__ */ o.jsx(
              De,
              {
                icon: "fal fa-arrow-alt-right",
                rtlIcon: "fal fa-arrow-alt-left",
                color: "info",
                fontSize: "large"
              }
            )
          }
        ) : null,
        y ? /* @__PURE__ */ o.jsx(O, { sx: y, children: T }) : T
      ]
    }
  );
}, Bc = ({
  businessHours: e,
  timezone: t,
  localeFormat: n,
  bookingMode: s = ye.Time,
  reducer: a,
  selectedOffice: r,
  datePickerFullWidth: i = !1,
  timeSlotPickersMinWidth: l,
  timeSlotPickerFullWidth: d,
  timeSlotPickerResponsiveWidth: u = !1,
  startDateSearchOnly: p = !1,
  wrapDatePickers: h = "wrap"
}) => {
  const { t: m } = z(), [_, T] = a, y = vc({
    businessHours: e,
    timezone: t,
    bookingMode: s,
    selectedOffice: r
  }), x = s === ye.Time, A = Hr(i), R = un({
    businessHours: e,
    selectedOffice: r
  }), b = c.useMemo(
    () => As(R, e, t),
    [R, e, t]
  ), E = go({
    businessHours: e,
    timezone: t,
    closedDaysIntervals: b,
    bookingMode: s
  }), D = j.now().startOf("day"), g = D.plus({ months: _t }), S = (w) => {
    if (w == null)
      return !1;
    const U = j.fromJSDate(w).startOf("day");
    return U >= D && U <= g;
  }, P = (w, U) => {
    if (!S(w.value) || E(w.value))
      return;
    const ue = j.fromJSDate(w.value);
    T({
      type: U,
      payload: ue
    });
  }, K = m("static-date-picker-when-label", {
    defaultValue: "When"
  }), Y = m("static-date-picker-date-label", {
    defaultValue: "Date"
  }), H = m("static-date-picker-start-date-label", {
    defaultValue: "Start Date"
  });
  return x ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      Tt,
      {
        fullWidth: i,
        "rnd-data-id": `${$.PUBLIC}-${B.SEARCH_DATE_PICKER}`,
        "data-test": "start-date",
        value: _.start?.toJSDate(),
        datePickerProps: {
          calendar: y,
          format: n.split(" ")[0],
          focusedDate: _.start?.toJSDate(),
          enableMouseWheel: !1
        },
        onChange: (w) => {
          P(w, "SET_PERIOD_DATE");
        },
        sx: A,
        reserveMessageSpace: !1,
        label: p ? K : Y,
        labelPlacement: "top"
      }
    ),
    p ? null : /* @__PURE__ */ o.jsx(
      jc,
      {
        startRndDataId: `${$.PUBLIC}-${B.SEARCH_START_TIME_DROPDOWN}`,
        endRndDataId: `${$.PUBLIC}-${B.SEARCH_END_TIME_DROPDOWN}`,
        reducer: a,
        fromLabel: m("static-time-picker-from-label", {
          defaultValue: "Start Time"
        }),
        toLabel: m("static-time-picker-to-label", {
          defaultValue: "End Time"
        }),
        minWidth: l,
        fullWidth: d,
        responsiveWidth: u
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs(
    C,
    {
      flexWrap: h,
      direction: "row",
      gap: 2,
      alignItems: "center",
      width: i || u ? "100%" : void 0,
      children: [
        /* @__PURE__ */ o.jsx(
          Tt,
          {
            fullWidth: i,
            "rnd-data-id": `${$.PUBLIC}-${B.SEARCH_START_DATE_PICKER}`,
            "data-test": "start-period",
            value: _.start?.toJSDate(),
            datePickerProps: {
              calendar: y,
              format: n.split(" ")[0],
              focusedDate: _.start?.toJSDate(),
              enableMouseWheel: !1
            },
            onChange: (w) => {
              P(w, "SET_DATE_START");
            },
            sx: A,
            reserveMessageSpace: !1,
            label: p ? K : H,
            labelPlacement: "top"
          }
        ),
        p ? null : /* @__PURE__ */ o.jsx(
          Tt,
          {
            fullWidth: i,
            "rnd-data-id": `${$.PUBLIC}-${B.SEARCH_END_DATE_PICKER}`,
            "data-test": "end-period",
            value: _.end?.toJSDate(),
            datePickerProps: {
              calendar: y,
              format: n.split(" ")[0],
              focusedDate: _.end?.toJSDate(),
              enableMouseWheel: !1
            },
            onChange: (w) => {
              P(w, "SET_DATE_END");
            },
            sx: A,
            reserveMessageSpace: !1,
            label: m("static-date-picker-end-date-label", {
              defaultValue: "End Date"
            }),
            labelPlacement: "top"
          }
        )
      ]
    }
  );
}, _o = () => {
  const e = J();
  return Zr(e);
}, yo = 500, xo = "78dvh", To = 280, Mc = 64, pe = 300, So = 168.75, Uc = 360, Ld = 202.5, vd = Uc - 2 * 24, jd = 172, Bd = 96.75, Md = 450, Ud = 253.125, kd = 1240, Fd = 420, Gd = 800, Hd = (e) => !!e.physicalAddress?.latitude && !!e.physicalAddress?.longitude, we = (e, t) => t(`location-${e.accountId}-${e._id}-name`, { defaultValue: e.name }), ht = (e, t) => {
  if (e.groupFields) {
    const n = f.compact(
      f.map(e.groupFields, (s) => {
        let a = e.physicalAddress?.[s] ?? e[s] ?? "";
        if (f.isEmpty(a))
          switch (s) {
            case "city":
              a = t("static-no-city-label", { defaultValue: "No City" });
              break;
            case "state":
              a = t("static-no-state-label", { defaultValue: "No State" });
              break;
            case "country":
              a = t("static-no-country-label", { defaultValue: "No Country" });
              break;
            default:
              a = "";
              break;
          }
        return t(`location-${s}-${f.kebabCase(a)}`, {
          defaultValue: a
        });
      })
    );
    return n.length > 1 ? n.join(", ") : f.first(n) || "";
  }
  return "";
}, $d = (e, t) => {
  const n = t("static-all-locations-label", { defaultValue: "All Locations" });
  return e?.length && (e.length === 1 ? we(e[0], t) : ht(e[0], t)) || n;
}, kt = 44, kc = 180, ts = {
  lineHeight: (e) => e.typography.pxToRem(kt)
}, ns = {
  paddingInlineStart: 8,
  paddingInlineEnd: 4,
  paddingBlock: 3,
  borderBottomWidth: "0 !important"
}, Eo = (e) => lr(
  (t) => ht(t, e),
  // Primary field: [city, country] or [city]
  (t) => we(t, e)
  // Secondary field: [name]
), ot = (e, t, n) => {
  const s = e.physicalAddress?.[t] ?? e[t] ?? "";
  return f.isEmpty(s) ? "" : t === "name" ? n(`location-${e.accountId}-${e._id}-address-name`, {
    defaultValue: s
  }) : t === "formattedAddress" ? n(`location-${e.accountId}-${e._id}-formatted-address`, {
    defaultValue: s
  }) : n(`location-${t}-${f.kebabCase(s)}`, {
    defaultValue: s
  });
}, Fc = (e) => [
  "physicalAddress.country",
  "physicalAddress.city",
  "physicalAddress.name",
  "physicalAddress.formattedAddress",
  "name",
  // Translated country
  (t) => ot(t, "country", e),
  // Translated city
  (t) => ot(t, "city", e),
  // Physical address name (translated)
  (t) => ot(t, "name", e),
  // Formatted address (translated)
  (t) => ot(t, "formattedAddress", e),
  // Location name (translated)
  (t) => we(t, e)
], Gc = (e) => (t, { inputValue: n }) => (ir(t, Fc(e), n) ?? []).toSorted(Eo(e)), ss = (e) => e.length > 1 ? "group" : e.length === 1 ? "individual" : "none", Hc = ({ isReadOnly: e, theme: t }) => e ? {
  backgroundColor: t.palette.secondary.light,
  cursor: "default",
  userSelect: "auto"
} : void 0, bo = ({
  items: e,
  isLoading: t,
  selectedValue: n,
  onChange: s,
  searchable: a = !0,
  fullWidth: r = !1,
  required: i = !1,
  requiredMessageText: l = "Please select an option",
  placeholderText: d = "",
  noOptionsText: u = "No options found",
  multiple: p = !0,
  readOnly: h = !1
}) => {
  const { t: m } = z(), { slug: _ } = J(), T = F(Z), [y, x] = c.useState(() => {
    const I = f.compact(f.map(n, "_id"));
    return p ? I : f.compact([f.first(I)]);
  }), [A, R] = c.useState(
    () => ss(y)
  ), b = Pc(e);
  c.useEffect(() => {
    let I = f.compact(f.map(n, "_id") ?? []);
    I = p ? I : f.compact([f.first(I)]), x(I), R(ss(I));
  }, [p, n]);
  const [E, D] = c.useState(""), g = c.useMemo(() => (e ?? []).toSorted(Eo(m)), [m, e]), { groupedOptions: S, getInputProps: P, getClearProps: K } = Ma({
    options: g ?? [],
    groupBy: (I) => ht(I, m),
    getOptionLabel: (I) => we(I, m),
    filterOptions: Gc(m),
    inputValue: E,
    onInputChange: (I, k) => D(k),
    open: !0,
    disableCloseOnSelect: !0,
    clearOnBlur: !1
  }), Y = c.useMemo(
    () => Object.fromEntries(
      S.map((I) => [
        I.group,
        I.options
      ])
    ),
    [S]
  ), H = (I) => y.includes(I._id) && I.accountSlug === _, w = (I) => {
    const k = I?.accountSlug;
    if (k && k !== _) {
      vt({
        orgSlug: k,
        office: I._id,
        isWebComponent: T
      });
      return;
    }
    (!H(I) || y.length > 1) && (x([I._id]), R(
      "individual"
      /* Individual */
    ), s?.([I]));
  }, U = (I) => {
    const k = Y[I];
    if (!f.every(
      k,
      (Te) => Te.accountSlug === k[0].accountSlug
    )) {
      const Te = k.filter(($o) => $o.accountSlug === _);
      if (Te.length === 0)
        return;
      const Ho = f.map(Te, "_id");
      !f.every(Te, H) && (x(Ho), R(
        Te.length > 1 ? "group" : "individual"
        /* Individual */
      ), s?.(Te));
      return;
    }
    const re = f.map(k, "_id"), Ie = k[0].accountSlug;
    if (Ie && Ie !== _) {
      vt({
        orgSlug: Ie,
        office: re,
        isWebComponent: T
      });
      return;
    }
    !f.every(k, H) && (x(re), R(
      k.length > 1 ? "group" : "individual"
      /* Individual */
    ), s?.(k));
  }, ue = () => {
    x([]), R(
      "none"
      /* None */
    ), s?.(null);
  }, ae = (I) => {
    const k = b(I[0]);
    return k ? A === "group" ? ht(k, m) : we(k, m) : /* @__PURE__ */ o.jsx(L, { variant: "bodyFaded", children: d });
  }, G = W(), q = Ca(G), [de, xe] = c.useState(!1), qe = i && y.length === 0, { elementWidth: te, getElementProps: Xe } = Ms(), Qe = c.useRef(null), xt = () => {
    Qe.current?.focus();
  }, Uo = c.useCallback(() => h ? null : t ? /* @__PURE__ */ o.jsx(
    X,
    {
      sx: { height: Ge.SELECT, paddingInlineEnd: 2 },
      size: Ge.SELECT
    }
  ) : /* @__PURE__ */ o.jsx(zt, { onClick: () => xe(!de) }), [h, de, t]), ko = c.useCallback(
    (I) => ({
      cursor: "pointer",
      "&:hover, &:hover ~ .group-item": {
        backgroundColor: G.palette.secondary.main,
        borderColor: G.palette.secondary.main
      },
      backgroundColor: I ? G.palette.secondary.light : G.palette.background.paper
    }),
    [G]
  ), Fo = h ? { "aria-readonly": !0 } : void 0, Go = !h && y.length;
  return /* @__PURE__ */ o.jsxs(
    Ts,
    {
      "data-test": "location-filter",
      required: i,
      error: qe,
      sx: {
        flex: "auto",
        width: "fit-content",
        minWidth: r ? "100%" : G.typography.pxToRem(kc)
      },
      children: [
        /* @__PURE__ */ o.jsx(
          Tn,
          {
            sx: { display: "none" },
            inputRef: P().ref
          }
        ),
        /* @__PURE__ */ o.jsxs(
          C,
          {
            direction: "row",
            justifyContent: "space-between",
            marginBlockEnd: 1,
            children: [
              /* @__PURE__ */ o.jsx(fs, { id: "location-select-label", children: m("static-location-select-label", {
                defaultValue: "Where"
              }) }),
              Go ? /* @__PURE__ */ o.jsx(
                Ls,
                {
                  title: m("static-reset-filter-label", {
                    defaultValue: "Reset Filter"
                  }),
                  onClick: ue
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          $t,
          {
            id: "location-select",
            disabled: t,
            "data-test": "location-select",
            sx: {
              // HACK: The following style adjusts the height of the outlined error border with the height of the outlined input.
              ...vs,
              // NOTE: Remove default padding so selected location name that could fit the default input width does not extend it.
              "&& .MuiSelect-select.MuiInputBase-input": {
                paddingInlineEnd: 0,
                alignContent: "center",
                ...Hc({
                  theme: G,
                  isReadOnly: h
                })
              }
            },
            ref: Xe().ref,
            open: de,
            onOpen: () => xe(!0),
            onClose: () => {
              D(""), xe(!1);
            },
            labelId: "location-select-label",
            multiple: !0,
            value: y,
            displayEmpty: !0,
            renderValue: ae,
            MenuProps: {
              ...qt,
              PaperProps: {
                style: {
                  // NOTE: Popup should be at least as wide as the select input but can grow wider.
                  width: `max(${G.typography.pxToRem(To)}, ${te}px)`,
                  maxHeight: `min(${G.typography.pxToRem(
                    yo
                  )}, ${xo})`
                }
              },
              TransitionProps: {
                onEntering: xt
              }
            },
            IconComponent: Uo,
            readOnly: h,
            SelectDisplayProps: Fo,
            children: [
              a ? /* @__PURE__ */ o.jsx(
                bn,
                {
                  sx: {
                    top: 0,
                    backgroundColor: G.palette.background.paper,
                    zIndex: 2,
                    padding: 0,
                    ...ts
                  },
                  children: /* @__PURE__ */ o.jsx(
                    Tn,
                    {
                      inputRef: Qe,
                      "data-test": "location-search",
                      slotProps: {
                        htmlInput: f.omit(P(), ["size", "color", "ref"]),
                        input: {
                          [q ? "startAdornment" : "endAdornment"]: /* @__PURE__ */ o.jsx(
                            it,
                            {
                              variant: "text",
                              disabled: !E,
                              iconProps: { icon: "fa fa-close" },
                              "aria-label": "Clear search",
                              ...f.omit(K(), ["color"])
                            }
                          ),
                          [q ? "endAdornment" : "startAdornment"]: /* @__PURE__ */ o.jsx(De, { icon: "fal fa-search" }),
                          sx: {
                            height: G.typography.pxToRem(kt),
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                          }
                        }
                      },
                      fullWidth: !0,
                      value: E,
                      onChange: (I) => {
                        D(I.target.value);
                      },
                      onKeyDown: (I) => {
                        I.stopPropagation();
                      },
                      reserveMessageSpace: !1,
                      sx: We
                    }
                  )
                }
              ) : null,
              Object.entries(Y).map(([I, k]) => {
                const hn = A === "group" && f.every(k, H);
                return /* @__PURE__ */ o.jsxs(O, { children: [
                  /* @__PURE__ */ o.jsx(
                    bn,
                    {
                      sx: {
                        // NOTE: Position below the search input.
                        top: a ? G.typography.pxToRem(kt) : 0,
                        borderBottom: `1px solid ${G.palette.secondary.light}`,
                        ...ts,
                        ...p ? ko(hn) : {}
                      },
                      onClick: p ? (re) => {
                        re.preventDefault(), re.stopPropagation(), U(I), xe(!1);
                      } : void 0,
                      children: /* @__PURE__ */ o.jsxs(
                        C,
                        {
                          direction: "row",
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          children: [
                            /* @__PURE__ */ o.jsx(L, { children: I }),
                            /* @__PURE__ */ o.jsx(
                              L,
                              {
                                variant: "body",
                                sx: { paddingInlineEnd: 1.5 },
                                children: k.length
                              }
                            )
                          ]
                        }
                      )
                    }
                  ),
                  k.map((re) => {
                    const Ie = we(re, m);
                    return /* @__PURE__ */ o.jsx(
                      lt,
                      {
                        value: re._id,
                        className: "group-item",
                        sx: ns,
                        selected: H(re),
                        onClick: () => {
                          w(re), D(""), xe(!1);
                        },
                        children: /* @__PURE__ */ o.jsx(
                          Lt,
                          {
                            primary: Ie,
                            primaryTypographyProps: {
                              variant: "body",
                              sx: jt,
                              title: Ie
                            }
                          }
                        )
                      },
                      re._id
                    );
                  })
                ] }, I);
              }),
              f.isEmpty(S) ? /* @__PURE__ */ o.jsx(
                lt,
                {
                  disabled: !0,
                  disableRipple: !0,
                  disableTouchRipple: !0,
                  sx: ns,
                  children: /* @__PURE__ */ o.jsx(
                    Lt,
                    {
                      primary: u,
                      primaryTypographyProps: { variant: "body" }
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        qe ? /* @__PURE__ */ o.jsx(Da, { error: !0, children: l }) : null
      ]
    }
  );
}, $c = ({
  amenities: e,
  fullWidth: t = !1,
  placeholder: n
}) => {
  const { t: s } = z(), a = W(), r = c.useMemo(() => new Map(f.map(e, (y) => [y._id, y])), [e]), [i, l] = ro(), { elementWidth: d, getElementProps: u } = Ms(), [p, h] = c.useState(!1), m = c.useCallback(
    () => /* @__PURE__ */ o.jsx(zt, { onClick: () => h(!p) }),
    [h, p]
  ), _ = (y) => s(`amenity-${y._id}-title`, {
    defaultValue: y.title
  }), T = c.useMemo(
    () => f.map(
      i,
      (y) => s(`amenity-${y}-title`, {
        defaultValue: r.get(y)?.title
      })
    ),
    [i, r, s]
  );
  return (
    // https://officernd.atlassian.net/browse/GH-349
    // LOGGED TODO: Consider extracting a listbox-style MultiSelect component in @coreui.
    /* @__PURE__ */ o.jsxs(
      Ts,
      {
        fullWidth: t,
        sx: {
          flex: "auto",
          minWidth: a.typography.pxToRem(154),
          maxWidth: t ? "100%" : { xs: a.typography.pxToRem(320), md: a.typography.pxToRem(380) },
          width: t ? "100%" : void 0
        },
        children: [
          /* @__PURE__ */ o.jsxs(
            C,
            {
              direction: "row",
              justifyContent: "space-between",
              marginBlockEnd: 1,
              children: [
                /* @__PURE__ */ o.jsx(fs, { id: "amenities-select-label", children: s("static-amenities-label", {
                  defaultValue: "Amenities"
                }) }),
                i.length ? /* @__PURE__ */ o.jsx(
                  Ls,
                  {
                    title: s("static-reset-filter-label", {
                      defaultValue: "Reset Filter"
                    }),
                    onClick: () => l([])
                  }
                ) : null
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            $t,
            {
              labelId: "amenities-select-label",
              id: "amenities-select",
              displayEmpty: !i.length,
              multiple: !0,
              sx: vs,
              ref: u().ref,
              onChange: (y) => l(y.target.value),
              "data-test": "amenities-filter",
              value: i,
              renderValue: (y) => /* @__PURE__ */ o.jsx(
                L,
                {
                  "data-test": "selected-amenities",
                  variant: "body",
                  sx: {
                    ...jt,
                    ...y.length === 0 ? { color: a.palette.text.disabled } : {}
                  },
                  children: y.length ? T.join(", ") : n
                }
              ),
              MenuProps: {
                ...qt,
                PaperProps: {
                  style: {
                    // NOTE: Popup should be at least as wide as the select input but can grow wider.
                    width: `max(${a.typography.pxToRem(To)}, ${d}px)`,
                    maxHeight: `min(${a.typography.pxToRem(
                      yo
                    )}, ${xo})`
                  }
                }
              },
              open: p,
              onOpen: () => h(!0),
              onClose: () => h(!1),
              IconComponent: m,
              children: f.map(e, (y) => /* @__PURE__ */ o.jsx(
                lt,
                {
                  value: y._id,
                  children: /* @__PURE__ */ o.jsxs(
                    C,
                    {
                      direction: "row",
                      alignItems: "center",
                      width: "100%",
                      children: [
                        /* @__PURE__ */ o.jsx(
                          Ia,
                          {
                            label: void 0,
                            checked: i.includes(y._id),
                            fullWidth: !1
                          }
                        ),
                        /* @__PURE__ */ o.jsx(
                          Lt,
                          {
                            primary: _(y),
                            primaryTypographyProps: {
                              title: _(y),
                              variant: "body",
                              maxWidth: a.typography.pxToRem(220),
                              sx: jt
                            }
                          }
                        ),
                        /* @__PURE__ */ o.jsx(
                          O,
                          {
                            sx: {
                              width: a.typography.pxToRem(16),
                              height: a.typography.pxToRem(16),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            },
                            children: /* @__PURE__ */ o.jsx(De, { icon: `fa ${y.icon ?? "fa-badge-check"}` })
                          }
                        )
                      ]
                    }
                  )
                },
                y._id
              ))
            }
          )
        ]
      }
    )
  );
};
var Ao = /* @__PURE__ */ ((e) => (e.DETERMINATE = "determinate", e.INDETERMINATE = "indeterminate", e.BUFFER = "buffer", e.QUERY = "query", e))(Ao || {});
const Ro = ({ variant: e, sx: t, ...n }) => /* @__PURE__ */ o.jsx(
  O,
  {
    "data-test": "loading-progress-bar",
    sx: t,
    children: /* @__PURE__ */ o.jsx(
      Oa,
      {
        variant: e ?? Ao.INDETERMINATE,
        ...n
      }
    )
  }
), Co = () => {
  const e = Ce(), { state: t, location: n } = na();
  return t === "loading" && e.pathname === n.pathname;
}, Do = (e) => {
  const [, t] = yt(), [, n] = io(), [, s] = ro();
  return { resetFilterValues: c.useCallback(() => {
    t(null), n(null), s([]);
    const [, , r] = e || [];
    r?.();
  }, [e, s, n, t]) };
}, Dt = ["resetFilters"], Io = () => {
  const e = ia(), { data: t = !1 } = V({
    queryKey: Dt,
    queryFn: () => !1,
    // default value
    staleTime: ce.Infinite,
    // Prevent automatic refetching
    gcTime: 1 / 0
    // Keep in cache indefinitely
  }), { mutate: n } = Pt({
    mutationFn: () => Promise.resolve(),
    onSuccess: () => {
      e.setQueryData(Dt, !0);
    }
  }), { mutate: s } = Pt({
    mutationFn: () => Promise.resolve(),
    onSuccess: () => {
      e.setQueryData(Dt, !1);
    }
  });
  return {
    resetFiltersSignal: t,
    triggerResetFilters: n,
    clearResetFilters: s
  };
}, Oo = ({
  subCategories: e,
  categories: t,
  renderResourceTypeFilter: n,
  renderLayout: s,
  periodRangeReducer: a,
  basicSearchLayout: r
}) => {
  const { t: i } = z(), l = W(), d = me(l.breakpoints.up("md")), u = le(), [p, h] = yt(), [m] = Ve(), [_] = Ke(), [T, y] = io(), x = Co(), { data: A } = Bi(u.orgSlug), { data: R, isPending: b } = nn({
    orgSlug: u.orgSlug,
    allAccounts: !0
  }), E = cn(R), D = c.useMemo(() => E(p), [p, E]);
  c.useEffect(() => {
    if (R?.length === 1) {
      const [te] = R;
      h([te._id]);
    }
  }, [R, h]);
  const {
    settings: { businessHours: g }
  } = J(), { localeFormat: S } = _o(), P = D?.length === 1 && D[0].businessHours ? D[0].businessHours : g, K = D?.length === 1 && D[0].timezone ? D[0].timezone : "local", Y = c.useMemo(
    () => f.find(
      e,
      (te) => te.resourceType === m && te.listingType === _
    )?.bookingMode,
    [e, m, _]
  ), [H] = a;
  c.useEffect(() => {
    const { start: te, end: Xe } = H, Qe = te ? Rn(te) : null, xt = Xe ? Rn(Xe) : null;
    rn({
      periodStart: Qe,
      periodEnd: xt
    });
  }, [H]);
  const { resetFiltersSignal: w, clearResetFilters: U } = Io(), { resetFilterValues: ue } = Do(a);
  c.useEffect(() => {
    w && (ue(), U());
  }, [U, ue, w]);
  const ae = R?.length === 1 && !f.isEmpty(D), G = /* @__PURE__ */ o.jsx(
    bo,
    {
      rndDataId: `${$.PUBLIC}-${B.DASHBOARD_LOCATION_DROPDOWN}`,
      items: R,
      isLoading: b,
      selectedValue: D,
      onChange: (te) => h(f.map(te, "_id")),
      noOptionsText: i("static-location-select-no-options", {
        defaultValue: "No locations found"
      }),
      placeholderText: i("static-all-locations-label", {
        defaultValue: "All Locations"
      }),
      fullWidth: !d,
      readOnly: ae
    }
  ), q = /* @__PURE__ */ o.jsx(
    Bc,
    {
      businessHours: P,
      timezone: K,
      localeFormat: S,
      bookingMode: Y,
      reducer: a,
      selectedOffice: p,
      datePickerFullWidth: !d || !r,
      timeSlotPickerFullWidth: !d || !r,
      timeSlotPickerResponsiveWidth: !r,
      startDateSearchOnly: r,
      wrapDatePickers: r ? "wrap" : "nowrap"
    }
  ), de = /* @__PURE__ */ o.jsx(
    Na,
    {
      "data-test": "capacity-filter",
      value: T,
      allowEmpty: !0,
      label: i("static-capacity-filter-label", {
        defaultValue: "Capacity"
      }),
      labelPlacement: "top",
      onChange: (te) => y(te),
      min: 1,
      slotProps: { htmlInput: { style: { textAlign: "center" } } },
      fullWidth: !1,
      reserveMessageSpace: !1,
      sx: {
        "& .MuiInputBase-root": Be,
        // NOTE: supports the placeholder text width.
        [`&.${Pa} .MuiInputBase-input`]: {
          width: { xs: "100%", md: l.typography.pxToRem(60) }
        },
        paddingTop: 0,
        textAlign: "center",
        justifyContent: "center",
        minWidth: { xs: "100%", md: "unset" },
        ...We,
        // https://officernd.atlassian.net/browse/GH-354
        // LOGGED TODO: fix @coreui NumberField label alignment to be consistent with the rest.
        "& .MuiFormLabel-root": { alignSelf: "flex-start" }
      }
    }
  ), xe = /* @__PURE__ */ o.jsx(
    $c,
    {
      amenities: A ?? [],
      fullWidth: !0
    }
  ), qe = /* @__PURE__ */ o.jsx(
    Ro,
    {
      sx: {
        width: "100%",
        flexGrow: 1,
        alignSelf: "center",
        "& .MuiLinearProgress-bar": {
          animationDuration: "1s"
        },
        position: "absolute",
        top: 0,
        left: 0
      }
    }
  );
  return s({
    resourceTypeFilter: n({ subCategories: e, categories: t }),
    locationSelect: G,
    dateTimePicker: q,
    amenitiesFilter: xe,
    capacityFilter: de,
    progressBar: qe,
    locations: R,
    isCurrentRouteLoaderPending: x
  });
}, ze = () => {
  const e = sa(), t = c.useRef({ navigate: e });
  return c.useEffect(() => {
    t.current.navigate = e;
  }, [e]), c.useCallback((n, s) => {
    vl(), typeof n == "number" ? t.current.navigate(n) : t.current.navigate(n, s);
  }, []);
}, No = ({
  hideSearchButtonSkeleton: e,
  multiline: t
}) => /* @__PURE__ */ o.jsxs(
  C,
  {
    gap: t ? 4 : 2,
    direction: "row",
    width: "100%",
    marginBottom: 2,
    alignItems: "flex-end",
    flexWrap: t ? "wrap" : "nowrap",
    children: [
      /* @__PURE__ */ o.jsxs(
        C,
        {
          direction: "column",
          gap: 2,
          sx: { width: "100%" },
          children: [
            /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "rounded",
                animation: "wave",
                sx: (n) => ({
                  width: n.typography.pxToRem(60),
                  height: n.typography.pxToRem(13)
                })
              }
            ),
            /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "rounded",
                animation: "wave",
                sx: (n) => ({
                  width: "100%",
                  height: n.typography.pxToRem(36)
                })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        C,
        {
          direction: "column",
          gap: 2,
          sx: { width: "100%" },
          children: [
            /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "rounded",
                animation: "wave",
                sx: (n) => ({
                  width: n.typography.pxToRem(60),
                  height: n.typography.pxToRem(13)
                })
              }
            ),
            /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "rounded",
                animation: "wave",
                sx: (n) => ({
                  width: "100%",
                  height: n.typography.pxToRem(36)
                })
              }
            )
          ]
        }
      ),
      e ? null : /* @__PURE__ */ o.jsx(
        oe,
        {
          variant: "rounded",
          animation: "wave",
          sx: (n) => ({
            width: n.typography.pxToRem(80),
            height: n.typography.pxToRem(36),
            flexShrink: 0,
            borderRadius: n.typography.pxToRem(36),
            marginInlineEnd: 4
          })
        }
      )
    ]
  }
), Wc = {
  width: "100%"
}, Vc = ({
  subCategories: e,
  categories: t,
  resultsMode: n = !0,
  isFetchingResources: s,
  isLoading: a,
  resources: r,
  periodRangeReducer: i
}) => {
  const { t: l } = z(), d = ze(), u = Ce();
  return /* @__PURE__ */ o.jsx(
    Oo,
    {
      periodRangeReducer: i,
      subCategories: e,
      categories: t,
      renderResourceTypeFilter: ({ subCategories: p, categories: h }) => /* @__PURE__ */ o.jsx(
        po,
        {
          categories: h,
          subCategories: p,
          isLoading: a
        }
      ),
      basicSearchLayout: !n,
      renderLayout: ({
        resourceTypeFilter: p,
        locationSelect: h,
        dateTimePicker: m,
        amenitiesFilter: _,
        capacityFilter: T,
        progressBar: y,
        locations: x,
        isCurrentRouteLoaderPending: A
      }) => /* @__PURE__ */ o.jsxs(
        fo,
        {
          locations: x,
          resultsMode: n,
          children: [
            p,
            /* @__PURE__ */ o.jsx(ne, { sx: { my: 6, ...Wc } }),
            a ? /* @__PURE__ */ o.jsx(No, { hideSearchButtonSkeleton: n }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsxs(
                C,
                {
                  direction: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "end",
                  columnGap: 2,
                  width: "100%",
                  sx: { marginBottom: n ? 0 : 2 },
                  rowGap: n ? 2 : 4,
                  children: [
                    h,
                    n ? T : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                      m,
                      T,
                      /* @__PURE__ */ o.jsx(
                        Q,
                        {
                          variant: "contained",
                          onClick: () => d(`../search-results${u.search}`),
                          disabled: A || s || r?.length === 0,
                          "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                          sx: Re,
                          children: l("static-filter-panel-search-button-title", {
                            defaultValue: "Search"
                          })
                        }
                      )
                    ] })
                  ]
                }
              ),
              n ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                /* @__PURE__ */ o.jsx(
                  C,
                  {
                    direction: "row",
                    gap: 2,
                    flexWrap: "wrap",
                    maxWidth: "100%",
                    children: m
                  }
                ),
                /* @__PURE__ */ o.jsx(C, { sx: { width: "100%", marginBottom: 2 }, children: _ })
              ] }) : null,
              A || s ? y : null
            ] })
          ]
        }
      )
    }
  );
}, os = {
  width: "100%"
}, Kc = ({
  subCategories: e,
  onClose: t,
  isFetchingResources: n,
  resources: s,
  categories: a,
  periodRangeReducer: r,
  resultsMode: i = !0
}) => {
  const { t: l } = z(), d = ze(), u = Ce();
  return /* @__PURE__ */ o.jsx(
    Oo,
    {
      periodRangeReducer: r,
      subCategories: e,
      categories: a,
      renderResourceTypeFilter: ({ subCategories: p, categories: h }) => /* @__PURE__ */ o.jsx(
        ho,
        {
          categories: h,
          subCategories: p
        }
      ),
      renderLayout: ({
        resourceTypeFilter: p,
        locationSelect: h,
        dateTimePicker: m,
        amenitiesFilter: _,
        capacityFilter: T,
        progressBar: y,
        isCurrentRouteLoaderPending: x
      }) => /* @__PURE__ */ o.jsxs(
        He,
        {
          sx: {
            overflow: "hidden",
            paddingX: 6,
            paddingBottom: 6,
            flex: 1,
            display: "flex",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ o.jsx(
              C,
              {
                sx: (A) => ({
                  maxWidth: { xs: "92vw", md: A.typography.pxToRem(500) },
                  minWidth: A.typography.pxToRem(260),
                  flexShrink: 0
                }),
                children: p
              }
            ),
            /* @__PURE__ */ o.jsx(ne, { sx: { my: 6, ...os } }),
            /* @__PURE__ */ o.jsxs(
              C,
              {
                justifyContent: "flex-start",
                alignItems: "start",
                columnGap: 2,
                rowGap: 2,
                spacing: 2,
                sx: {
                  overflowY: "auto",
                  overflowX: "hidden",
                  // The maxHeight offset accounts for clients embedding our site, where chat/support/utility buttons are often placed.
                  // These buttons can overlap or cover part of the filter content on smaller screens, so we reserve space at the bottom to avoid such issues.
                  maxHeight: (A) => `calc(100vh - ${A.typography.pxToRem(250)})`
                },
                children: [
                  /* @__PURE__ */ o.jsxs(
                    C,
                    {
                      direction: "row",
                      gap: 2,
                      width: "100%",
                      children: [
                        /* @__PURE__ */ o.jsx(C, { width: "100%", children: h }),
                        /* @__PURE__ */ o.jsx(C, { children: T })
                      ]
                    }
                  ),
                  m,
                  /* @__PURE__ */ o.jsx(
                    C,
                    {
                      justifyContent: "center",
                      alignItems: "flex-start",
                      width: "100%",
                      gap: 2,
                      direction: "row",
                      children: _
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ o.jsx(
              ne,
              {
                "data-filter-bottom-divider": !0,
                sx: { my: 3, mb: 4, ...os }
              }
            ),
            /* @__PURE__ */ o.jsx(
              O,
              {
                paddingInline: { xs: 4 },
                justifyContent: "center",
                width: "100%",
                marginBlockStart: "auto",
                children: i ? /* @__PURE__ */ o.jsx(
                  ms,
                  {
                    badgeContent: s?.length?.toString(),
                    invisible: x || n,
                    color: "info",
                    sx: { width: "100%" },
                    children: /* @__PURE__ */ o.jsx(
                      Q,
                      {
                        fullWidth: !0,
                        variant: "contained",
                        onClick: t,
                        disabled: x || n || s?.length === 0,
                        "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                        sx: { ...Re, width: "100%" },
                        loading: x || n,
                        children: s?.length ? l("static-filter-panel-view-results-label", {
                          defaultValue: "View Results"
                        }) : l("static-filter-panel-no-results-label", {
                          defaultValue: "No Matching Results"
                        })
                      }
                    )
                  }
                ) : /* @__PURE__ */ o.jsx(
                  Q,
                  {
                    fullWidth: !0,
                    variant: "contained",
                    onClick: () => {
                      t(), d(`../search-results${u.search}`);
                    },
                    disabled: x || n,
                    "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                    sx: { ...Re, width: "100%" },
                    loading: x || n,
                    children: l("static-filter-panel-search-button-title", {
                      defaultValue: "Search"
                    })
                  }
                )
              }
            ),
            x || n ? y : null
          ]
        }
      )
    }
  );
}, Yc = mt(() => new URLSearchParams(window.location.search).get("period") || ks.None), Po = ({
  renderResourceTypeFilter: e,
  renderLayout: t,
  subCategories: n,
  categories: s
}) => {
  const { t: a } = z(), r = W(), i = me(r.breakpoints.up("md")), l = le(), [d, u] = yt(), p = Co(), { data: h, isLoading: m } = nn({
    orgSlug: l.orgSlug,
    allAccounts: !0
  }), _ = cn(h), T = c.useMemo(() => _(d), [d, _]), y = F(Yc);
  c.useEffect(() => {
    if (h?.length === 1) {
      const [g] = h;
      u([g._id]);
    }
  }, [h, u]), c.useEffect(() => {
    rn({
      period: y || null
    });
  }, [y]);
  const x = h?.length === 1 && !f.isEmpty(T), A = /* @__PURE__ */ o.jsx(
    bo,
    {
      rndDataId: `${$.PUBLIC}-${B.DASHBOARD_LOCATION_DROPDOWN}`,
      items: h,
      isLoading: m,
      selectedValue: T,
      onChange: (g) => u(f.map(g, "_id")),
      noOptionsText: a("static-location-select-no-options", {
        defaultValue: "No locations found"
      }),
      placeholderText: a("static-all-locations-label", {
        defaultValue: "All Locations"
      }),
      fullWidth: !i,
      readOnly: x
    }
  ), R = /* @__PURE__ */ o.jsx(
    Ro,
    {
      sx: {
        width: "100%",
        flexGrow: 1,
        alignSelf: "center",
        "& .MuiLinearProgress-bar": {
          animationDuration: "1s"
        },
        position: "absolute",
        top: 0,
        left: 0
      }
    }
  ), { resetFiltersSignal: b, clearResetFilters: E } = Io(), { resetFilterValues: D } = Do();
  return c.useEffect(() => {
    b && (D(), E());
  }, [E, D, b]), t({
    resourceTypeFilter: e({ subCategories: n, categories: s }),
    locationSelect: A,
    progressBar: R,
    locations: h,
    isCurrentRouteLoaderPending: p
  });
}, zc = {
  width: "100%"
}, qc = ({
  subCategories: e,
  categories: t,
  resultsMode: n = !0,
  isFetchingPlans: s,
  isLoading: a,
  plans: r
}) => {
  const { t: i } = z(), l = ze(), d = Ce();
  return /* @__PURE__ */ o.jsx(
    Po,
    {
      subCategories: e,
      categories: t,
      renderResourceTypeFilter: ({ subCategories: u, categories: p }) => /* @__PURE__ */ o.jsx(
        po,
        {
          categories: p,
          subCategories: u,
          isLoading: a
        }
      ),
      renderLayout: ({
        resourceTypeFilter: u,
        locationSelect: p,
        progressBar: h,
        locations: m,
        isCurrentRouteLoaderPending: _
      }) => /* @__PURE__ */ o.jsxs(
        fo,
        {
          locations: m,
          resultsMode: n,
          children: [
            u,
            /* @__PURE__ */ o.jsx(ne, { sx: { my: 6, ...zc } }),
            a ? /* @__PURE__ */ o.jsx(No, { hideSearchButtonSkeleton: n }) : /* @__PURE__ */ o.jsxs(
              C,
              {
                direction: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "end",
                columnGap: 2,
                width: "100%",
                rowGap: n ? 2 : 4,
                paddingBlockEnd: 2,
                children: [
                  p,
                  n ? null : /* @__PURE__ */ o.jsx(
                    Q,
                    {
                      variant: "contained",
                      onClick: () => l(`../search-results${d.search}`),
                      disabled: _ || s || r?.length === 0,
                      "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                      sx: Re,
                      children: i("static-filter-panel-search-button-title", {
                        defaultValue: "Search"
                      })
                    }
                  ),
                  _ || s ? h : null
                ]
              }
            )
          ]
        }
      )
    }
  );
}, as = {
  width: "100%"
}, Xc = ({
  categories: e,
  subCategories: t,
  onClose: n,
  isFetchingPlans: s,
  plans: a,
  resultsMode: r = !0
}) => {
  const { t: i } = z(), l = ze(), d = Ce();
  return /* @__PURE__ */ o.jsx(
    Po,
    {
      categories: e,
      subCategories: t,
      renderResourceTypeFilter: ({ subCategories: u, categories: p }) => /* @__PURE__ */ o.jsx(
        ho,
        {
          categories: p,
          subCategories: u
        }
      ),
      renderLayout: ({
        resourceTypeFilter: u,
        locationSelect: p,
        progressBar: h,
        isCurrentRouteLoaderPending: m
      }) => /* @__PURE__ */ o.jsxs(
        He,
        {
          sx: {
            overflow: "hidden",
            paddingX: 6,
            paddingBottom: 6,
            flex: 1,
            display: "flex",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ o.jsx(
              C,
              {
                sx: (_) => ({
                  maxWidth: { xs: "92vw", md: _.typography.pxToRem(500) },
                  minWidth: _.typography.pxToRem(260),
                  flexShrink: 0
                }),
                children: u
              }
            ),
            /* @__PURE__ */ o.jsx(ne, { sx: { my: 6, ...as } }),
            /* @__PURE__ */ o.jsx(
              C,
              {
                justifyContent: "flex-start",
                alignItems: "start",
                columnGap: 2,
                maxHeight: "50vh",
                rowGap: 2,
                spacing: 2,
                sx: {
                  overflowY: "auto",
                  overflowX: "hidden"
                },
                children: p
              }
            ),
            /* @__PURE__ */ o.jsx(
              ne,
              {
                "data-filter-bottom-divider": !0,
                sx: { my: 3, mb: 4, ...as }
              }
            ),
            /* @__PURE__ */ o.jsx(
              O,
              {
                paddingInline: { xs: 4 },
                justifyContent: "center",
                width: "100%",
                marginBlockStart: "auto",
                children: r ? /* @__PURE__ */ o.jsx(
                  ms,
                  {
                    badgeContent: a?.length?.toString(),
                    invisible: m || s,
                    color: "info",
                    sx: { width: "100%" },
                    children: /* @__PURE__ */ o.jsx(
                      Q,
                      {
                        fullWidth: !0,
                        variant: "contained",
                        onClick: n,
                        disabled: m || s || a?.length === 0,
                        "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                        loading: m || s,
                        sx: { ...Re, width: "100%" },
                        children: a?.length ? i("static-filter-panel-view-results-label", {
                          defaultValue: "View Results"
                        }) : i("static-filter-panel-no-results-label", {
                          defaultValue: "No Matching Results"
                        })
                      }
                    )
                  }
                ) : /* @__PURE__ */ o.jsx(
                  Q,
                  {
                    fullWidth: !0,
                    variant: "contained",
                    onClick: () => {
                      n(), l(`../search-results${d.search}`);
                    },
                    disabled: m || s,
                    "rnd-data-id": `${$.PUBLIC}-${B.DASHBOARD_SEARCH_BUTTON}`,
                    loading: m || s,
                    sx: { ...Re, width: "100%" },
                    children: i("static-filter-panel-search-button-title", {
                      defaultValue: "Search"
                    })
                  }
                )
              }
            ),
            m || s ? h : null
          ]
        }
      )
    }
  );
}, Qc = () => {
  const [e, t] = c.useState(!1), n = W(), s = me(n.breakpoints.up("md")), a = ke(oo), r = c.useCallback(() => t(!0), []), i = c.useCallback(() => t(!1), []), l = c.useCallback(() => t((d) => !d), []);
  return c.useEffect(() => {
    s && t(!1);
  }, [s]), c.useEffect(() => {
    a(e);
  }, [e, a]), {
    isOpen: e,
    open: r,
    close: i,
    toggle: l
  };
}, wo = () => {
  try {
    return typeof document < "u" && typeof document.fullscreenEnabled == "boolean" && typeof document.documentElement?.requestFullscreen == "function";
  } catch {
    return !1;
  }
}, dn = () => {
  try {
    return !!document.fullscreenElement;
  } catch {
    return !1;
  }
}, Jc = async () => {
  try {
    return !wo() || !document.fullscreenEnabled ? !1 : (await document.documentElement.requestFullscreen(), dn());
  } catch {
    return !1;
  }
}, Zc = () => {
  try {
    dn() && typeof document.exitFullscreen == "function" && document.exitFullscreen();
  } catch {
  }
}, eu = ({
  enabled: e,
  open: t,
  onExitFullscreen: n
}) => {
  const [s, a] = c.useState(!1), r = je(), i = c.useRef(!0);
  c.useEffect(() => (i.current = !0, () => {
    i.current = !1;
  }), []);
  const l = Us(() => {
    try {
      !dn() && s && (a(!1), n && n());
    } catch {
    }
  });
  return c.useEffect(() => {
    !e || !t || !r || Jc().then((d) => {
      i.current && a(d);
    }).catch(() => {
    });
  }, [e, t, r]), c.useEffect(() => {
    !t && s && (Zc(), a(!1));
  }, [t, s]), c.useEffect(() => {
    if (!(!r || !e || !wo()))
      try {
        return document.addEventListener("fullscreenchange", l), () => {
          try {
            document.removeEventListener("fullscreenchange", l);
          } catch {
          }
        };
      } catch {
        return;
      }
  }, [r, e, l]), {
    isNativeFullscreenActive: s,
    isEmbedded: r,
    effectiveFullscreen: e && (!r || s)
  };
}, tu = ({
  content: e,
  open: t,
  onClose: n,
  dataTestId: s,
  maxWidth: a,
  fullScreen: r = !0
}) => {
  const { effectiveFullscreen: i } = eu({
    enabled: r,
    open: t,
    onExitFullscreen: n
  }), l = (u) => ({
    backdropFilter: "blur(5px)",
    "& .MuiDialogTitle-root": {
      paddingBottom: 0
    },
    ...!i && {
      "& .MuiDialog-container": {
        alignItems: "flex-start",
        marginX: "auto",
        marginTop: u.typography.pxToRem(20),
        width: "95%",
        maxWidth: a ?? u.typography.pxToRem(350)
      }
    },
    // Target only the Dialog's own Paper — MobileFilterPanel's nested Paper
    // is unaffected because .MuiDialog-paper is exclusive to the Dialog Paper element.
    "&& .MuiDialog-paper": {
      paddingTop: 0,
      margin: 0,
      ...i && {
        borderRadius: 0,
        padding: 0,
        // Full-height container; scroll handled by nested filter panel
        overflow: "hidden",
        maxHeight: "none",
        // Remove border-radius from all nested Paper components
        "& .MuiPaper-root": {
          borderRadius: 0
        }
      }
    }
  }), d = {
    // '&&' doubles specificity to override core-ui DialogContent default padding
    "&&": { padding: 0 },
    ...i && {
      // Flex column layout allows content Paper (flex: 1) to fill available height
      display: "flex",
      flexDirection: "column",
      // Prevent minor scroll from core-ui padding remnants — internal filter area handles its own scroll
      overflow: "hidden",
      // In fullscreen, the button uses marginBlockStart:auto for separation instead
      "& [data-filter-bottom-divider]": { display: "none" }
    }
  };
  return /* @__PURE__ */ o.jsxs(
    ds,
    {
      "data-test": s,
      open: t,
      onClose: n,
      maxWidth: a,
      fullScreen: i,
      sx: l,
      children: [
        i ? /* @__PURE__ */ o.jsx(
          ps,
          {
            onClose: n,
            iconButtonProps: {
              "aria-label": "Close filters",
              iconProps: {
                fontSize: "large",
                icon: "far fa-times"
              },
              sx: {
                position: "absolute",
                right: (u) => u.typography.pxToRem(16),
                top: "50%",
                transform: "translateY(-50%)"
              }
            },
            position: "relative",
            children: "Filters"
          }
        ) : null,
        /* @__PURE__ */ o.jsx(hs, { sx: d, children: e })
      ]
    }
  );
}, nu = () => {
  const e = W(), t = J(), {
    data: { landingPage: n }
  } = Me(t.slug);
  return !!n?.backgroundImage ? e.palette.common.white : "inherit";
}, su = 3, ou = ({
  data: { _id: e, title: t, description: n, cardImage: s, listingType: a, resourceType: r },
  sx: i,
  priority: l = !1
}) => {
  const { t: d } = z(), u = ze(), p = Xt(), [h] = Ye(), { getImageUrl: m } = c.useContext(Ht), [, _] = Ve(), [, T] = Ke(), y = c.useCallback(
    (b) => {
      b.stopPropagation(), T(a), _(r), u(
        `../search-results?${$e({
          type: r,
          listingType: a,
          language: h,
          ...p
        })}`
      );
    },
    [
      u,
      a,
      r,
      T,
      _,
      p,
      h
    ]
  ), x = W(), A = me(x.breakpoints.up("sm")), R = c.useRef(null);
  return /* @__PURE__ */ o.jsx(
    O,
    {
      title: d(`subcategory-${e}-title`, {
        defaultValue: t
      }),
      ref: R,
      sx: i,
      children: /* @__PURE__ */ o.jsx(
        gs,
        {
          sx: {
            width: x.typography.pxToRem(pe)
          },
          children: /* @__PURE__ */ o.jsxs(
            wa,
            {
              onClick: y,
              disableRipple: !A,
              component: "div",
              sx: {
                "& .MuiCardActionArea-focusHighlight": {
                  opacity: 0,
                  backgroundColor: "transparent",
                  "&:hover": {
                    opacity: 0
                  }
                }
              },
              children: [
                /* @__PURE__ */ o.jsx(O, { position: "relative", children: s ? /* @__PURE__ */ o.jsx(
                  _s,
                  {
                    component: "img",
                    image: m(s, {
                      width: pe,
                      // NOTE: User-defined image might not follow the 16:9 aspect ratio; set the height but do not specify cropping rules
                      // so ImageKit resizes the image to fit within the specified dimensions while preserving the original aspect ratio.
                      // This might leave empty space (letterboxing) if the image isn’t naturally 16:9; otherwise, it is possible that
                      // the generated image height is less than the container height leading to blurred image.
                      height: So
                    }),
                    alt: "Product subcategory",
                    loading: l ? "eager" : "lazy",
                    fetchPriority: l ? "high" : "auto",
                    sx: {
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      objectFit: "cover",
                      aspectRatio: "16 / 9",
                      width: x.typography.pxToRem(pe)
                    }
                  }
                ) : /* @__PURE__ */ o.jsx(
                  ws,
                  {
                    width: x.typography.pxToRem(pe),
                    sx: {
                      aspectRatio: "16 / 9",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0
                    },
                    iconWithText: {
                      icon: "fa fa-calendar-check"
                    }
                  }
                ) }),
                /* @__PURE__ */ o.jsx(
                  ys,
                  {
                    title: d(`subcategory-${e}-title`, {
                      defaultValue: t
                    }),
                    titleTypographyProps: {
                      variant: "h4",
                      dir: x.direction,
                      sx: {
                        ...Ln,
                        // NOTE: reserve space for a single line of text. Matches h4 line-height (1.4) from
                        // applyHeadingTypographyOverrides; the em unit refers to the computed font-size (16px).
                        height: "1.4em"
                      }
                    }
                  }
                ),
                /* @__PURE__ */ o.jsx(xs, { variant: "fullProfile", children: /* @__PURE__ */ o.jsxs(
                  C,
                  {
                    spacing: 4,
                    height: "100%",
                    justifyContent: "space-between",
                    children: [
                      /* @__PURE__ */ o.jsx(
                        L,
                        {
                          variant: "body",
                          dir: x.direction,
                          height: `calc(1.2em * ${su})`,
                          sx: { ...Ln, WebkitLineClamp: 3 },
                          children: d(`subcategory-${e}-description`, {
                            defaultValue: n ?? ""
                          })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        C,
                        {
                          direction: "row",
                          gap: 4,
                          justifyContent: "flex-end",
                          alignItems: "center",
                          dir: x.direction,
                          children: /* @__PURE__ */ o.jsx(
                            Q,
                            {
                              variant: "outlined",
                              color: "secondary",
                              sx: Gr,
                              onClick: y,
                              children: /* @__PURE__ */ o.jsx(
                                L,
                                {
                                  variant: "groupTitle",
                                  color: "inherit",
                                  children: d("static-product-card-see-all-button-title", {
                                    defaultValue: "See All"
                                  })
                                }
                              )
                            }
                          )
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          )
        }
      )
    }
  );
}, au = () => {
  const e = W();
  return /* @__PURE__ */ o.jsxs(
    gs,
    {
      sx: {
        width: e.typography.pxToRem(pe),
        flexShrink: 0,
        marginBottom: 2
      },
      children: [
        /* @__PURE__ */ o.jsxs(_s, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ o.jsx(
            De,
            {
              icon: "fal fa-image",
              sx: {
                position: "absolute",
                zIndex: 2,
                fontSize: e.typography.pxToRem(32),
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: e.palette.grey[600]
              }
            }
          ),
          /* @__PURE__ */ o.jsx(
            oe,
            {
              variant: "rounded",
              animation: "wave",
              sx: {
                width: e.typography.pxToRem(pe),
                height: e.typography.pxToRem(So),
                borderRadius: 0,
                backgroundColor: e.palette.background.image
              }
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(
          ys,
          {
            title: /* @__PURE__ */ o.jsx(
              oe,
              {
                variant: "rounded",
                animation: "wave",
                sx: {
                  width: "50%",
                  height: e.typography.pxToRem(22)
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsxs(
          xs,
          {
            variant: "fullProfile",
            sx: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ o.jsxs(C, { gap: 1, children: [
                /* @__PURE__ */ o.jsx(
                  oe,
                  {
                    variant: "rounded",
                    animation: "wave",
                    sx: {
                      width: "100%",
                      height: e.typography.pxToRem(16)
                    }
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  oe,
                  {
                    variant: "rounded",
                    animation: "wave",
                    sx: {
                      width: "66%",
                      height: e.typography.pxToRem(16)
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx(
                oe,
                {
                  variant: "rounded",
                  animation: "wave",
                  sx: {
                    borderRadius: e.typography.pxToRem(36),
                    alignSelf: "flex-end",
                    width: e.typography.pxToRem(81),
                    height: e.typography.pxToRem(36),
                    marginTop: e.typography.pxToRem(16)
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}, ru = 36, ge = 20, It = 4, iu = 1, lu = ({ items: e, isLoading: t }) => {
  const n = c.useRef(null), s = c.useRef(null), [a, r] = c.useState(!0), [i, l] = c.useState(!1), [d, u] = c.useState(It), p = W(), h = p.direction === "rtl", m = me(p.breakpoints.down("sm")), _ = c.useCallback(
    (S) => {
      S && !a ? r(!0) : !S && a && r(!1);
    },
    [a]
  ), T = c.useCallback(
    (S) => {
      S && !i ? l(!0) : !S && i && l(!1);
    },
    [i]
  );
  c.useEffect(() => {
    const S = s?.current;
    if (!S)
      return;
    const P = () => {
      const { scrollLeft: K, scrollWidth: Y, offsetWidth: H } = S;
      if (h) {
        const w = K >= 0, U = Math.abs(K) + H >= Y;
        _(w), T(U);
      } else {
        const w = K === 0, U = K + H >= Y;
        _(w), T(U);
      }
    };
    return S?.addEventListener("scroll", P), () => S?.removeEventListener("scroll", P);
  }, [s, h, _, T]);
  const y = c.useCallback(
    (S) => (
      // make double conversion px => rem => px
      // covers the case where the user-defined browser zoom is different than 100%
      // in which case the without scaling the initial px values will be incorrect if not scaled
      ur(p.typography.pxToRem(S))
    ),
    [p]
  );
  c.useLayoutEffect(() => {
    if (!n.current || !s.current)
      return;
    const S = () => {
      if (!n.current || !s.current)
        return;
      const K = 2 * y(ru) + 2 * y(ge), Y = n.current.offsetWidth - K, H = y(pe) + y(ge), w = Math.floor(Y / H), U = Math.min(
        It,
        Math.max(iu, w)
      );
      s.current.style.maxWidth = `${y(pe) * U + (U - 1) * y(ge)}px`, u(U);
    }, P = new ResizeObserver(S);
    return P.observe(n.current), S(), () => P.disconnect();
  }, [n, s, y]);
  const x = f.size(e) > d, A = c.useCallback(() => {
    const S = y(pe) + y(ge);
    s.current?.scrollBy({
      left: h ? S : -S,
      behavior: "smooth"
    });
  }, [s, h, y]), R = c.useCallback(() => {
    const S = y(pe) + y(ge);
    s.current?.scrollBy({
      left: h ? -S : S,
      behavior: "smooth"
    });
  }, [s, h, y]), b = J(), { data: E } = Me(b?.slug), D = c.useMemo(
    () => p.palette.getContrastText(
      E?.landingPage?.productSectionBackgroundColor ?? p.palette.background.default
    ),
    [p, E?.landingPage?.productSectionBackgroundColor]
  ), g = t ? f.times(It, (S) => /* @__PURE__ */ o.jsx(au, {}, `dashboard-carousel-card-skeleton-${S}`)) : f.map(e, (S, P) => /* @__PURE__ */ o.jsx(
    ou,
    {
      data: S,
      priority: P === 0,
      sx: {
        marginBottom: 0.25,
        scrollSnapAlign: "start"
      }
    },
    `${S.resourceType}-${S.listingType}`
  ));
  return m ? /* @__PURE__ */ o.jsx(
    C,
    {
      direction: "column",
      gap: p.typography.pxToRem(ge),
      alignItems: "center",
      children: g
    }
  ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(
      C,
      {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: p.typography.pxToRem(ge),
        ref: n,
        children: [
          x && /* @__PURE__ */ o.jsx(
            it,
            {
              variant: "contained",
              color: "secondary",
              iconProps: {
                icon: "fas fa-chevron-left",
                rtlIcon: "fas fa-chevron-right"
              },
              "aria-label": h ? "Next slide" : "Previous slide",
              onClick: A,
              disabled: a
            }
          ),
          /* @__PURE__ */ o.jsx(
            C,
            {
              ref: s,
              direction: "row",
              sx: {
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
                },
                gap: p.typography.pxToRem(ge),
                overflow: "auto",
                flexDirection: h ? "row-reverse" : "row",
                direction: h ? "rtl" : "ltr"
              },
              children: g
            }
          ),
          x && /* @__PURE__ */ o.jsx(
            it,
            {
              variant: "contained",
              color: "secondary",
              iconProps: {
                icon: "fas fa-chevron-right",
                rtlIcon: "fas fa-chevron-left"
              },
              "aria-label": h ? "Previous slide" : "Next slide",
              onClick: R,
              disabled: i
            }
          )
        ]
      }
    ),
    x && /* @__PURE__ */ o.jsx(
      zr,
      {
        containerRef: s,
        sx: { marginBlockStart: 7.5 },
        dotBackgroundColor: D
      }
    )
  ] });
}, cu = {
  landing: B.DASHBOARD_PUBLIC_FEEDBACK_BUTTON,
  results: B.SEARCH_RESULT_PUBLIC_FEEDBACK_BUTTON,
  detailed: B.DETAILS_PUBLIC_FEEDBACK_BUTTON,
  checkout: B.CHECKOUT_PUBLIC_FEEDBACK_BUTTON,
  success: B.SUCCESS_PUBLIC_FEEDBACK_BUTTON,
  failed: B.FAILED_PUBLIC_FEEDBACK_BUTTON
}, uu = ({
  page: e,
  sx: t
}) => /* @__PURE__ */ o.jsx(
  O,
  {
    "rnd-data-id": cu[e],
    sx: (n) => ({
      position: "absolute",
      top: "50%",
      right: n.typography.pxToRem(10),
      left: "auto",
      marginInlineStart: "auto",
      width: "fit-content",
      height: "fit-content",
      zIndex: 9999,
      ...t
    })
  }
), du = (e, t = 1e3) => {
  const n = gt(), s = c.useMemo(() => f.debounce(e, t), [e, t]);
  c.useEffect(() => {
    if (n.size > 0) {
      const a = Object.fromEntries(n.entries());
      s(a);
    }
    return () => {
      s.cancel();
    };
  }, [n, s]);
}, pu = () => {
  const e = F(Z);
  return je() || e ? 0 : Mc;
}, hu = () => {
  const { t: e } = z(), t = pu(), n = W(), s = F(Z), a = `calc(100dvh - ${n.typography.pxToRem(t)})`, { trackPublicEvent: r } = li(), { data: i, isLoading: l } = Hi(), { data: d, isLoading: u } = $i(), [p] = Ve(), [h] = Ke(), m = c.useMemo(() => f.find(
    i,
    (de) => de.resourceType === p && de.listingType === h
  )?.listingType === "resource" ? Pe.Resource : Pe.Subscription, [i, p, h]), _ = nu(), T = J(), {
    data: { landingPage: y }
  } = Me(T.slug), x = le(), { data: A } = nn({ orgSlug: x.orgSlug }), { localeFormat: R } = _o(), {
    settings: { businessHours: b }
  } = J(), E = cn(A), [D] = yt(), g = c.useMemo(() => E(D), [D, E]), S = g?.length === 1 && g[0].businessHours ? g[0].businessHours : b, P = c.useMemo(
    () => f.find(
      i,
      (q) => q.resourceType === p && q.listingType === h
    )?.bookingMode,
    [i, p, h]
  ), K = un({
    businessHours: S,
    selectedOffice: g?.map((q) => q._id) ?? null
  }), Y = gt(), H = Y.get("periodStart"), w = Y.get("periodEnd");
  du((q) => {
    r(Bs.DASHBOARD_SEARCH, q);
  });
  const U = ii({
    localeFormat: R,
    businessHours: S,
    bookingMode: P,
    searchStart: H,
    searchEnd: w,
    closedDaysIntervals: K
  }), ue = s ? { minHeight: a, height: "fit-content" } : { height: a }, ae = Qc(), G = me(n.breakpoints.down("md"));
  return /* @__PURE__ */ o.jsxs(C, { ...ue, children: [
    /* @__PURE__ */ o.jsx(uu, { page: "landing" }),
    /* @__PURE__ */ o.jsxs(
      C,
      {
        marginInline: { xs: 10, md: "auto" },
        paddingBlockStart: { xs: 12, md: 25 },
        children: [
          /* @__PURE__ */ o.jsxs(
            C,
            {
              width: {
                xs: "100%",
                md: n.typography.pxToRem(rt)
              },
              sx: { color: _ },
              marginInline: "auto",
              spacing: 6,
              children: [
                y?.title ? /* @__PURE__ */ o.jsx(
                  L,
                  {
                    color: "inherit",
                    variant: "h1",
                    fontSize: {
                      xs: n.typography.pxToRem(40),
                      sm: n.typography.pxToRem(50)
                    },
                    paddingInline: { xs: 2, sm: 0 },
                    maxWidth: { sm: "calc(5/7 * 100%)" },
                    children: e("landing-page-title", {
                      defaultValue: y?.title
                    })
                  }
                ) : null,
                y?.subtitle ? /* @__PURE__ */ o.jsx(
                  L,
                  {
                    color: "inherit",
                    variant: "h2",
                    fontSize: 20,
                    paddingInline: { xs: 2, sm: 0 },
                    children: e("landing-page-subtitle", {
                      defaultValue: y?.subtitle
                    })
                  }
                ) : null
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            tu,
            {
              open: ae.isOpen,
              onClose: ae.close,
              content: m === Pe.Resource ? /* @__PURE__ */ o.jsx(
                Kc,
                {
                  periodRangeReducer: U,
                  categories: d,
                  subCategories: i,
                  onClose: ae.close,
                  resultsMode: !1
                }
              ) : /* @__PURE__ */ o.jsx(
                Xc,
                {
                  categories: d,
                  subCategories: i,
                  onClose: ae.close,
                  resultsMode: !1
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsx(
            O,
            {
              width: {
                xs: "100%",
                md: n.typography.pxToRem(rt)
              },
              marginInline: "auto",
              marginBlockStart: 8,
              marginBlockEnd: 12,
              children: G ? /* @__PURE__ */ o.jsx(
                C,
                {
                  alignItems: "center",
                  paddingInline: { xs: 2, sm: 0 },
                  children: /* @__PURE__ */ o.jsx(
                    Q,
                    {
                      fullWidth: !0,
                      variant: "outlined",
                      color: "secondary",
                      onClick: ae.open,
                      sx: { ...Re, boxShadow: n.shadows[4] },
                      children: /* @__PURE__ */ o.jsx(
                        Ps,
                        {
                          icon: "far fa-search",
                          alignItems: "center",
                          color: "inherit",
                          children: /* @__PURE__ */ o.jsx(
                            L,
                            {
                              variant: "groupTitle",
                              component: "span",
                              color: "inherit",
                              children: e("dashboard-start-search-button", {
                                defaultValue: "Start your search"
                              })
                            }
                          )
                        }
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                m === Pe.Resource ? /* @__PURE__ */ o.jsx(
                  Vc,
                  {
                    periodRangeReducer: U,
                    categories: d,
                    subCategories: i,
                    resultsMode: !1,
                    isLoading: l || u
                  }
                ) : null,
                m === Pe.Subscription ? /* @__PURE__ */ o.jsx(
                  qc,
                  {
                    categories: d,
                    subCategories: i,
                    resultsMode: !1,
                    isLoading: l || u
                  }
                ) : null
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs(
      C,
      {
        flexGrow: 1,
        justifyContent: "center",
        paddingBlockStart: 10,
        paddingBlockEnd: 14,
        sx: {
          backgroundColor: y?.productSectionBackgroundColor ?? n.palette.background.default
        },
        children: [
          y?.productSectionTitle ? /* @__PURE__ */ o.jsx(
            L,
            {
              sx: {
                typography: { xs: "h3", sm: "h1" },
                // NOTE: '&&' doubles specificity to override color from typography shorthand above
                "&&": {
                  color: n.palette.getContrastText(
                    y?.productSectionBackgroundColor ?? n.palette.background.default
                  )
                },
                alignSelf: "center"
              },
              width: { md: n.typography.pxToRem(rt) },
              marginInline: 2,
              marginBlockEnd: 6,
              textAlign: "center",
              children: e("landing-page-product-section-title", {
                defaultValue: y?.productSectionTitle
              })
            }
          ) : null,
          /* @__PURE__ */ o.jsx(
            lu,
            {
              items: i,
              isLoading: l
            }
          )
        ]
      }
    )
  ] });
}, fu = ({
  currentParams: e,
  nextParams: t,
  defaultShouldRevalidate: n
}) => e.orgSlug === t.orgSlug ? !1 : n, rs = (e) => ({ currentParams: t, nextParams: n, defaultShouldRevalidate: s }) => t.orgSlug === n.orgSlug && t[e] === n[e] ? !1 : s, Ot = (e, t = {}) => ({ request: n }) => {
  const s = new URL(n.url), a = new URLSearchParams(s.search);
  return Object.entries(t).forEach(([r, i]) => {
    a.set(r, i);
  }), Jo(`${e}?${a.toString()}`);
}, mu = (e) => /* @__PURE__ */ o.jsx(
  N,
  {
    id: Vs,
    loader: Mi(e),
    shouldRevalidate: () => !1,
    children: /* @__PURE__ */ o.jsx(
      N,
      {
        id: tn,
        path: ":orgSlug",
        loader: ji(e),
        shouldRevalidate: fu,
        children: /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(Rc, {}), children: /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(ic, {}), children: /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(sl, {}), children: /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(Ac, {}), children: /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(ac, {}), children: /* @__PURE__ */ o.jsxs(N, { element: /* @__PURE__ */ o.jsx(Cl, {}), children: [
          /* @__PURE__ */ o.jsx(N, { element: /* @__PURE__ */ o.jsx(il, {}), children: /* @__PURE__ */ o.jsxs(N, { element: /* @__PURE__ */ o.jsx(Yn, {}), children: [
            /* @__PURE__ */ o.jsx(
              N,
              {
                index: !0,
                loader: Ot("dashboard")
              }
            ),
            /* @__PURE__ */ o.jsx(
              N,
              {
                path: "resources",
                loader: Ot("../search-results", {
                  listingType: "resource"
                })
              }
            ),
            /* @__PURE__ */ o.jsx(
              N,
              {
                path: "plans",
                loader: Ot("../search-results", {
                  listingType: "plan"
                })
              }
            ),
            /* @__PURE__ */ o.jsx(
              N,
              {
                path: "dashboard",
                element: /* @__PURE__ */ o.jsx(
                  c.Suspense,
                  {
                    fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                    children: /* @__PURE__ */ o.jsx(hu, {})
                  }
                )
              }
            ),
            /* @__PURE__ */ o.jsx(
              N,
              {
                path: "search-results",
                element: /* @__PURE__ */ o.jsx(
                  c.Suspense,
                  {
                    fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                    children: /* @__PURE__ */ o.jsx(cc, {})
                  }
                )
              }
            )
          ] }) }),
          /* @__PURE__ */ o.jsxs(N, { element: /* @__PURE__ */ o.jsx(Yn, {}), children: [
            /* @__PURE__ */ o.jsxs(
              N,
              {
                path: "resources/:resourceId",
                loader: Wi(e),
                shouldRevalidate: rs("resourceId"),
                handle: { hideConsentButtonOnMobile: !0 },
                children: [
                  /* @__PURE__ */ o.jsx(
                    N,
                    {
                      index: !0,
                      element: /* @__PURE__ */ o.jsx(
                        c.Suspense,
                        {
                          fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                          children: /* @__PURE__ */ o.jsx(uc, {})
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    N,
                    {
                      path: "extras",
                      element: /* @__PURE__ */ o.jsx(
                        c.Suspense,
                        {
                          fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                          children: /* @__PURE__ */ o.jsx(dc, {})
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ o.jsxs(N, { path: "checkout", children: [
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        index: !0,
                        loader: Gn(e),
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(pc, {})
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        path: "process",
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(_c, {})
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        path: "process/failed",
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(yc, {})
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o.jsx(
                    N,
                    {
                      path: "success",
                      element: /* @__PURE__ */ o.jsx(
                        c.Suspense,
                        {
                          fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                          children: /* @__PURE__ */ o.jsx(hc, {})
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              N,
              {
                path: "plans/:planId",
                loader: lc(e),
                shouldRevalidate: rs("planId"),
                handle: { hideConsentButtonOnMobile: !0 },
                children: [
                  /* @__PURE__ */ o.jsx(
                    N,
                    {
                      index: !0,
                      element: /* @__PURE__ */ o.jsx(
                        c.Suspense,
                        {
                          fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                          children: /* @__PURE__ */ o.jsx(fc, {})
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ o.jsxs(N, { path: "checkout", children: [
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        index: !0,
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(mc, {})
                          }
                        ),
                        loader: Gn(e)
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        path: "process",
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(xc, {})
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      N,
                      {
                        path: "process/failed",
                        element: /* @__PURE__ */ o.jsx(
                          c.Suspense,
                          {
                            fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                            children: /* @__PURE__ */ o.jsx(Tc, {})
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o.jsx(
                    N,
                    {
                      path: "success",
                      element: /* @__PURE__ */ o.jsx(
                        c.Suspense,
                        {
                          fallback: /* @__PURE__ */ o.jsx(X, { sx: { display: "flex", marginBlockStart: 2 } }),
                          children: /* @__PURE__ */ o.jsx(gc, {})
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ] }) }) }) }) }) })
      }
    )
  }
), gu = () => {
  const { pathname: e, search: t } = Ce();
  c.useEffect(() => {
    const n = `#${e}${t}`;
    globalThis.location.hash !== n && globalThis.history.replaceState(null, "", n);
  }, [e, t]);
}, _u = () => (gu(), null), Lo = (e) => `${cl}-${encodeURIComponent(e)}`, vo = (e) => ({
  necessary: !0,
  functional: e.functional ?? !1,
  analytics: e.analytics ?? !1,
  marketing: e.marketing ?? !1
}), jo = (e) => ({
  functional: e.functional ?? !1,
  analytics: e.analytics ?? !1,
  marketing: e.marketing ?? !1
}), pn = (e, t) => {
  try {
    const n = {
      state: vo(e),
      timestamp: j.now().toMillis()
    }, s = j.now().plus({ days: eo }), a = encodeURIComponent(JSON.stringify(n)), r = Lo(t);
    document.cookie = `${r}=${a}; expires=${s.toHTTP()}; path=/; SameSite=Lax`;
  } catch {
  }
}, Bo = (e) => {
  try {
    const t = document.cookie.split(";"), n = Lo(e), s = f.find(t, (a) => {
      const [r] = a.trim().split("=");
      return r === n;
    });
    if (s) {
      const [, a] = s.trim().split("=");
      if (a) {
        const r = JSON.parse(decodeURIComponent(a));
        if (r.state)
          return jo(r.state);
      }
    }
  } catch {
  }
  return null;
}, Nt = (e) => {
  const t = vo(e), n = Mt(t);
  Ut(n);
}, yu = (e, t) => {
  const n = Bo(e);
  if (n)
    return n;
  const s = t ? Gs(t) : null, a = jo(ul), r = s ? Jt(s, a) : a;
  return pn(r, e), r;
}, xu = (e, t) => {
  const n = Gs(e);
  if (!n)
    return null;
  const s = Bo(t), a = Jt(n, s);
  return Zt(a), pn(a, t), a;
}, Tu = (e, t) => e === null ? !1 : (e.functional ?? !1) === (t.functional ?? !1) && (e.analytics ?? !1) === (t.analytics ?? !1) && (e.marketing ?? !1) === (t.marketing ?? !1), Su = (e, t) => {
  const n = c.useRef(!0), s = c.useRef(t), a = F(Ae), r = c.useRef(null), i = F(sn);
  c.useEffect(() => {
    i || no();
  }, [i]), c.useEffect(() => {
    if (n.current) {
      n.current = !1;
      const u = yu(e, t);
      Zt(u), r.current = u, s.current = t, i || Nt(u);
      return;
    }
    if (!(t !== s.current) || !t) {
      s.current = t;
      return;
    }
    s.current = t;
    const d = xu(t, e);
    d && (r.current = d, i || Nt(d));
  }, [e, t, i]), c.useEffect(() => {
    n.current || !a || Tu(r.current, a) || (r.current = a, pn(a, e), i || Nt(a));
  }, [e, a, i]);
}, Eu = "dashboard", bu = (e, t) => {
  const { hash: n } = globalThis.location, s = n.startsWith("#") ? n.slice(1) : "";
  if (s && s !== "/")
    return;
  const a = t.startsWith("/") ? t.slice(1) : t, r = `#/${e}/${a}`;
  globalThis.history.replaceState(null, "", r);
}, Mo = ({
  slug: e,
  initialRoute: t = Eu,
  skipGtmInitialization: n = !1,
  htmlFontSize: s,
  consent: a
}) => {
  if (!e)
    throw new Error("<growth-hub> has no `slug` attribute — please provide a valid slug.");
  const r = ke(Z), i = ke(sn), l = ke(Hs);
  c.useLayoutEffect(() => {
    r(!0);
  }, [r]), c.useLayoutEffect(() => {
    i(n);
  }, [n, i]), c.useLayoutEffect(() => {
    const u = lo(s);
    return l(u), () => l(void 0);
  }, [s, l]), Su(e, a), bu(e, t);
  const d = c.useMemo(() => {
    const u = oa(
      /* @__PURE__ */ o.jsx(
        N,
        {
          path: "/",
          element: /* @__PURE__ */ o.jsxs(
            O,
            {
              component: "main",
              height: "100%",
              children: [
                /* @__PURE__ */ o.jsx(_u, {}),
                /* @__PURE__ */ o.jsx(ie, {})
              ]
            }
          ),
          errorElement: /* @__PURE__ */ o.jsx(
            O,
            {
              component: "main",
              height: "100%",
              children: /* @__PURE__ */ o.jsx(wn, {})
            }
          ),
          children: mu(Pn)
        }
      )
    );
    return aa(u);
  }, []);
  return /* @__PURE__ */ o.jsx(ja, { fallback: /* @__PURE__ */ o.jsx(wn, {}), children: /* @__PURE__ */ o.jsxs(la, { client: Pn, children: [
    /* @__PURE__ */ o.jsx(La, { children: /* @__PURE__ */ o.jsx(Ua, { dateAdapter: ka, children: /* @__PURE__ */ o.jsx(xi, { children: /* @__PURE__ */ o.jsx(ra, { router: d }) }) }) }),
    /* @__PURE__ */ o.jsx(ca, { buttonPosition: "bottom-right" })
  ] }) });
}, Au = (e) => {
  e("static-error-flexible-area-resource-not-supported-for-location", {
    defaultValue: "We don't offer this product in the selected location. Try a different one?"
  }), e("static-error-not-enough-capacity-for-requested-period", {
    defaultValue: "Not enough capacity for the selected period"
  }), e("static-error-resource-not-in-exploitation", {
    defaultValue: "The resource is not in exploitation in the requested time slot."
  }), e("static-error-payment-details-processing-error", {
    defaultValue: "We were unable to process the payment details provided. Please try again or contact support."
  }), e("static-error-discount-code-expired", {
    defaultValue: "Promo code is expired"
  }), e("static-error-discount-code-scheduled", {
    defaultValue: "Promo code is not active"
  }), e("static-error-discount-code-not-valid", {
    defaultValue: "Promo code is not valid"
  }), e("static-error-discount-code-email-usage-limit", {
    defaultValue: "This code is limited to {{total}} use(s) per email."
  }), e("static-error-not-enough-coins", {
    defaultValue: "You do not have enough coins/credits to book this resource."
  }), e("static-error-booking-max-duration", {
    defaultValue: "Bookings must be between {{minHours}} and {{maxHours}} hours."
  }), e("static-error-resource-not-available", {
    defaultValue: "Resource is not available in this time slot."
  }), e("static-error-cannot-book-in-past", { defaultValue: "You can't book in the past" }), e("static-error-quantity-max", {
    defaultValue: "Quantity must not be greater than {{maxCount}}"
  }), e("static-error-quantity-min", { defaultValue: "Quantity must not be less than {{minCount}}" }), e("static-error-quantity-integer", {
    defaultValue: "Quantity must be an integer number"
  }), e("static-error-quantity-empty", { defaultValue: "Quantity should not be empty" }), e("static-error-unexpected", { defaultValue: "Unexpected error" }), e("static-error-processing-error", { defaultValue: "A processing error occurred." }), e("static-error-internal-server", { defaultValue: "Internal Server Error" }), e("static-error-start-date-before-end-date", {
    defaultValue: "The start date must be before the end date"
  }), e("static-error-booking-exact-duration", {
    defaultValue: "Booking duration must be exactly {{minDuration}} hours."
  }), e("static-error-booking-min-duration", {
    defaultValue: "Bookings must be at least {{minDuration}} hours long."
  }), e("static-error-booking-future-months-limit", {
    defaultValue: "You can only book up to {{monthsCount}} months in advance."
  }), e("static-error-booking-future-month-limit", {
    defaultValue: "You can only book up to 1 month in advance."
  }), e("static-error-booking-min-duration-in-advance", {
    defaultValue: "You must book at least {{duration}} hours in advance."
  }), e("static-error-resource-out-of-hours", {
    defaultValue: "{{resourceName}} is currently unavailable for booking. Please select a time within our operational hours for your reservation."
  }), e("static-error-resource-unavailable-during-closed-days", {
    defaultValue: "{{resourceName}} is unavailable during {{closedDays}}. Please choose a time within our business hours."
  }), e("static-error-resource-unavailable-hourly-slots", {
    defaultValue: "You can't book hourly slots. Please contact your hosts for more information."
  }), e("static-error-guest-count-exceeds-layout-capacity", {
    defaultValue: "Guest count exceeds the capacity of the selected layout."
  }), e("static-error-start-date-before-or-equal-end-date", {
    defaultValue: "Start date must be before or equal to end date"
  }), e("static-error-booking-past-month-limit", {
    defaultValue: "You can't book more than 1 month in the past"
  }), e("static-error-booking-past-months-limit", {
    defaultValue: "You can't book more than {{months}} months in the past"
  }), e("static-error-booking-ahead-year-limit", {
    defaultValue: "You can't book more than 1 year ahead"
  }), e("static-error-booking-ahead-years-limit", {
    defaultValue: "You can't book more than {{years}} years ahead"
  }), e("static-error-booking-ahead-month-limit", {
    defaultValue: "You can't book more than 1 month ahead"
  }), e("static-error-booking-ahead-months-limit", {
    defaultValue: "You can't book more than {{months}} months ahead"
  }), e("static-error-booking-ahead-duration-limit", {
    defaultValue: "You can't book more than {{duration}} ahead"
  }), e("static-error-date-cannot-be-in-past", {
    defaultValue: "{{field}} can't be in the past"
  }), e("static-error-date-past-month-limit", {
    defaultValue: "{{field}} can't be more than 1 month in the past"
  }), e("static-error-date-past-months-limit", {
    defaultValue: "{{field}} can't be more than {{months}} months in the past"
  }), e("static-error-date-future-duration-limit", {
    defaultValue: "{{field}} can't be more than {{duration}} ahead"
  }), e("static-error-date-too-far-in-future", {
    defaultValue: "{{field}} can't be too far in the future"
  }), e("static-error-date-invalid", {
    defaultValue: "{{field}} is invalid"
  });
}, Wd = {
  "We don't offer this product in the selected location. Try a different one?": "static-error-flexible-area-resource-not-supported-for-location",
  "Not enough capacity for the selected period": "static-error-not-enough-capacity-for-requested-period",
  "The resource is not in exploitation in the requested time slot.": "static-error-resource-not-in-exploitation",
  "We were unable to process the payment details provided. Please try again or contact support.": "static-error-payment-details-processing-error",
  "Promo code is expired": "static-error-discount-code-expired",
  "Promo code is not active": "static-error-discount-code-scheduled",
  "Promo code is not valid": "static-error-discount-code-not-valid",
  "This code is limited to {{total}} use(s) per email.": "static-error-discount-code-email-usage-limit",
  "You do not have enough coins/credits to book this resource.": "static-error-not-enough-coins",
  "Bookings must be between {{minHours}} and {{maxHours}} hours.": "static-error-booking-max-duration",
  "Resource is not available in this time slot.": "static-error-resource-not-available",
  "You can't book in the past": "static-error-cannot-book-in-past",
  "quantity must not be greater than {{maxCount}}": "static-error-quantity-max",
  "quantity must not be less than {{minCount}}": "static-error-quantity-min",
  "quantity must be an integer number": "static-error-quantity-integer",
  "quantity should not be empty": "static-error-quantity-empty",
  "Unexpected error": "static-error-unexpected",
  "A processing error occurred.": "static-error-processing-error",
  "Internal Server Error": "static-error-internal-server",
  "The start date must be before the end date": "static-error-start-date-before-end-date",
  "Booking duration must be exactly {{minDuration}} hours.": "static-error-booking-exact-duration",
  "Bookings must be at least {{minDuration}} hours long.": "static-error-booking-min-duration",
  "You can only book up to {{monthsCount}} months in advance.": "static-error-booking-future-months-limit",
  "You can only book up to 1 month in advance.": "static-error-booking-future-month-limit",
  "You must book at least {{duration}} hours in advance.": "static-error-booking-min-duration-in-advance",
  "{{resourceName}} is currently unavailable for booking. Please select a time within our operational hours for your reservation.": "static-error-resource-out-of-hours",
  "{{resourceName}} is unavailable during {{closedDays}}. Please choose a time within our business hours.": "static-error-resource-unavailable-during-closed-days",
  "You can't book hourly slots. Please contact your hosts for more information.": "static-error-resource-unavailable-hourly-slots",
  "Guest count exceeds the capacity of the selected layout.": "static-error-guest-count-exceeds-layout-capacity",
  // Booking context
  "You can't book more than 1 month in the past": "static-error-booking-past-month-limit",
  "You can't book more than {{months}} months in the past": "static-error-booking-past-months-limit",
  "You can't book more than 1 year ahead": "static-error-booking-ahead-year-limit",
  "You can't book more than {{years}} years ahead": "static-error-booking-ahead-years-limit",
  "You can't book more than 1 month ahead": "static-error-booking-ahead-month-limit",
  "You can't book more than {{months}} months ahead": "static-error-booking-ahead-months-limit",
  "You can't book more than {{duration}} ahead": "static-error-booking-ahead-duration-limit",
  // Generic field messages
  "{{field}} can't be in the past": "static-error-date-cannot-be-in-past",
  "{{field}} can't be more than 1 month in the past": "static-error-date-past-month-limit",
  "{{field}} can't be more than {{months}} months in the past": "static-error-date-past-months-limit",
  "{{field}} can't be more than {{duration}} ahead": "static-error-date-future-duration-limit",
  "{{field}} can't be too far in the future": "static-error-date-too-far-in-future",
  "{{field}} is invalid": "static-error-date-invalid",
  "Start date must be before or equal to end date": "static-error-start-date-before-or-equal-end-date"
  // Add more mappings as needed
}, Ru = (e) => {
  e("static-resource-layout-boardroom", { defaultValue: "Boardroom" }), e("static-resource-layout-cabaret", { defaultValue: "Cabaret" }), e("static-resource-layout-cocktail", { defaultValue: "Cocktail" }), e("static-resource-layout-classroom", { defaultValue: "Classroom" }), e("static-resource-layout-hollow-square", { defaultValue: "Hollow Square" }), e("static-resource-layout-round-table", { defaultValue: "Round Table" }), e("static-resource-layout-theatre", { defaultValue: "Theatre" }), e("static-resource-layout-u-shape", { defaultValue: "U-Shape" }), e("static-resource-layout-alt", { defaultValue: "{{name}} layout" });
}, Cu = {
  [v.Boardroom]: "static-resource-layout-boardroom",
  [v.Cabaret]: "static-resource-layout-cabaret",
  [v.Cocktail]: "static-resource-layout-cocktail",
  [v.Classroom]: "static-resource-layout-classroom",
  [v.HollowSquare]: "static-resource-layout-hollow-square",
  [v.RoundTable]: "static-resource-layout-round-table",
  [v.Theatre]: "static-resource-layout-theatre",
  [v.UShape]: "static-resource-layout-u-shape"
}, Vd = (e, t) => e(Cu[t], { defaultValue: pi[t] }), Du = () => {
  St.use(Fa).init({
    // NOTE: This is a workaround to enable formatted dates to be displayed correctly
    // xss injection is not a concern here, as react already prevents it from happening - unless dangerouslySetInnerHTML is abused
    // Worth considering to format dates in interpolation instead of providing formatted dates
    interpolation: {
      escapeValue: !1
    }
  }), Au(St.t), Ru(St.t);
};
Du();
const ft = /* @__PURE__ */ new WeakMap(), Iu = (e, t) => {
  const n = Zo(e);
  ft.set(e, n), n.render(
    /* @__PURE__ */ o.jsx(
      Mo,
      {
        slug: t.slug,
        initialRoute: t.initialRoute,
        skipGtmInitialization: t.skipGtmInitialization,
        htmlFontSize: t.htmlFontSize,
        consent: t.consent
      }
    )
  );
}, Ou = (e) => {
  const t = ft.get(e);
  t && (t.unmount(), ft.delete(e));
}, Nu = (e, t) => {
  const n = ft.get(e);
  n && n.render(
    /* @__PURE__ */ o.jsx(
      Mo,
      {
        slug: t.slug,
        initialRoute: t.initialRoute,
        skipGtmInitialization: t.skipGtmInitialization,
        htmlFontSize: t.htmlFontSize,
        consent: t.consent
      }
    )
  );
};
globalThis.GrowthHub = {
  mount: Iu,
  unmount: Ou,
  update: Nu
};
export {
  Yt as $,
  Pe as A,
  ye as B,
  Uc as C,
  _e as D,
  $ as E,
  tu as F,
  Hi as G,
  $i as H,
  Ps as I,
  Ve as J,
  Ke as K,
  nn as L,
  cn as M,
  yt as N,
  Co as O,
  uu as P,
  un as Q,
  Ls as R,
  ii as S,
  Kc as T,
  Xc as U,
  du as V,
  Vu as W,
  X,
  Ge as Y,
  Vc as Z,
  qc as _,
  nu as a,
  Ss as a$,
  zu as a0,
  Mn as a1,
  ei as a2,
  Ja as a3,
  Hu as a4,
  Gd as a5,
  Us as a6,
  yd as a7,
  As as a8,
  Bd as a9,
  pd as aA,
  Dd as aB,
  Rd as aC,
  Cd as aD,
  Yu as aE,
  go as aF,
  ct as aG,
  Ms as aH,
  zt as aI,
  jt as aJ,
  Pc as aK,
  $u as aL,
  wd as aM,
  vc as aN,
  Wu as aO,
  _t as aP,
  Nd as aQ,
  bd as aR,
  Gl as aS,
  bo as aT,
  Hr as aU,
  Pd as aV,
  Ku as aW,
  td as aX,
  ro as aY,
  Od as aZ,
  qa as a_,
  jd as aa,
  Vd as ab,
  v as ac,
  _d as ad,
  xd as ae,
  je as af,
  Hd as ag,
  Rn as ah,
  rn as ai,
  kd as aj,
  ce as ak,
  M as al,
  Ee as am,
  Fe as an,
  Id as ao,
  Sd as ap,
  Fd as aq,
  Hl as ar,
  Ad as as,
  Ed as at,
  Bc as au,
  hd as av,
  gd as aw,
  Ju as ax,
  Me as ay,
  Md as az,
  Qc as b,
  zl as b0,
  kn as b1,
  ud as b2,
  sd as b3,
  Qu as b4,
  od as b5,
  Ud as b6,
  Be as b7,
  nd as b8,
  fd as b9,
  md as ba,
  dd as bb,
  Td as bc,
  nt as bd,
  Ro as be,
  Ao as bf,
  ld as bg,
  ad as bh,
  rd as bi,
  id as bj,
  Xi as bk,
  Kt as bl,
  $l as bm,
  Wd as bn,
  B as c,
  li as d,
  ze as e,
  Ye as f,
  $d as g,
  Xt as h,
  Z as i,
  Bs as j,
  Ld as k,
  ws as l,
  Zu as m,
  Ln as n,
  vd as o,
  Re as p,
  _o as q,
  qu as r,
  ed as s,
  $e as t,
  J as u,
  Xu as v,
  cd as w,
  ks as x,
  Io as y,
  gt as z
};
