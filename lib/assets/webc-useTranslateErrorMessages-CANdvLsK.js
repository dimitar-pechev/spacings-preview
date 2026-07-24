import { bn as o } from "./webc-web-component-qMWWbTiu.js";
import { u } from "./webc-vendor-i18n-BICogURo.js";
const l = (t, e) => {
  const r = e.match(/{{([^}]+)}}/g) || [], n = r.reduce(
    (s, a) => s.replace(a, "(.*?)"),
    e
  ), c = RegExp(new RegExp(`^${n}$`)).exec(t);
  return c ? Object.fromEntries(
    r.map((s, a) => [s.slice(2, -2), c[a + 1]])
  ) : {};
}, E = (t) => {
  const e = Object.keys(o).find(
    (r) => new RegExp(`^${r.replace(/{{[^}]+}}/g, ".*")}$`).test(t)
  );
  return {
    key: e ? o[e] : "static-error-unknown",
    values: e ? l(t, e) : {}
  };
}, g = (t) => {
  const { t: e } = u(), { key: r, values: n } = E(t);
  return e(r, { defaultValue: t, ...n });
};
export {
  g as u
};
