import { l as r } from "./webc-vendor-lodash-BJv5POtF.js";
import { bl as m, B as g, t as d } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-CvrN3tmw.js";
const y = (t, s) => {
  m(t, {
    tags: { "checkout.flow": s }
  });
}, p = "message", P = (t, s, a, o) => {
  if (o === g.Date) {
    const l = Math.round(s.diff(t, "days").toObject().days), f = l > 1 ? a("static-format-days", {
      defaultValue: "days"
    }) : a("static-format-day", {
      defaultValue: "day"
    });
    return `${l} ${f}`;
  }
  const { minutes: n } = s.diff(t, "minutes"), e = Math.floor(n / 60), i = n % 60, h = e > 1 ? a("static-format-hours", {
    defaultValue: "hours"
  }) : a("static-format-hour", {
    defaultValue: "hour"
  }), c = e ? `${e} ${h}` : "", u = i ? `${i} ${a("static-format-minutes", {
    defaultValue: "minutes"
  })}` : "";
  return r.trim(`${c} ${u}`);
}, T = (t) => {
  const s = r.get(t, p);
  return r.isArray(s) ? s : s ? [s] : [];
}, v = (t, s) => r.find(s?.invoiceLines, (a) => a.plan === t), E = (t, s) => {
  if (!t)
    return;
  const a = r.filter(
    s?.invoiceLines,
    (o) => o.plan === t && !o.addOn
  );
  if (!r.isEmpty(a))
    return {
      ...a[0],
      price: r.sumBy(a, "price"),
      vatAmount: r.sumBy(a, "vatAmount")
    };
}, R = (t) => !!(t && r.some(t)), w = (t, s, a) => {
  const o = r.join(
    r.compact([
      s ? `metadata=${s}` : "",
      a ? d({ language: a }) : ""
    ]),
    "&"
  ), n = o ? `?${o}` : "";
  if (t) {
    const c = `${(globalThis.location.hash || "#/").split("?")[0]}/process`;
    return `${globalThis.location.origin}${globalThis.location.pathname}${c}${n}`;
  }
  return `${`${globalThis.location.origin}${globalThis.location.pathname}/process`}${n}`;
}, L = (t) => {
  if (!globalThis.location.search)
    return t;
  const s = new URLSearchParams(globalThis.location.search);
  if (s.toString() === "")
    return t;
  const a = new URLSearchParams(t);
  s.forEach((h, c) => {
    a.set(c, h);
  });
  const o = a.toString(), n = globalThis.location.hash || "#/", [e] = n.split("?"), i = o ? `${e}?${o}` : e;
  return globalThis.history.replaceState(null, "", `${globalThis.location.pathname}${i}`), o;
};
export {
  v as a,
  w as b,
  y as c,
  L as d,
  T as e,
  P as f,
  E as g,
  R as h
};
