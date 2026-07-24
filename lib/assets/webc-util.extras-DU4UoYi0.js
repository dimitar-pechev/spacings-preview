import { ae as d, z as x, D as m, q as f, B as g } from "./webc-web-component-QV_kTZ_O.js";
import { r as p } from "./webc-vendor-BjE1NNvQ.js";
import { l } from "./webc-vendor-lodash-QZMGaMCX.js";
import { D as E } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { u as T } from "./webc-useGetTimezone--nBDhcAt.js";
import { d as b } from "./webc-vendor-react-router-W8U6ip5z.js";
const S = "ungrouped_extras_list", B = (e) => ({
  display: "-webkit-box",
  WebkitLineClamp: e,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), M = (e) => {
  const { timezone: t } = T(e?.office?._id), a = x(), o = a.get("periodStart"), r = a.get("periodEnd"), [s, n] = p.useMemo(() => {
    if (!o || !r) {
      const c = E.now().setZone(t);
      return [c, c];
    }
    return [
      m(o).setZone(t, { keepLocalTime: !0 }),
      m(r).setZone(t, { keepLocalTime: !0 })
    ];
  }, [o, r, t]), { formatDate: i, formatDateTime: u } = f();
  return e.bookingMode === g.Time ? `${i(s)} | ${u(
    s,
    !0
  )} - ${u(n, !0)}` : s.hasSame(n, "day") ? i(s) : `${i(s)} - ${i(n)}`;
}, _ = (e) => {
  const t = e?.reduce((a, o) => (o.vatAmount && a.set(o.taxRate, {
    id: o.taxRate,
    percent: o.vatPercent,
    name: o.taxName,
    amount: (a.get(o.taxRate)?.amount ?? 0) + o.vatAmount
  }), a), /* @__PURE__ */ new Map());
  return Array.from(t?.values() ?? []);
}, $ = ({
  t: e,
  categoryId: t,
  categoryName: a
}) => t ? e(`plan-category-${t}-name`, {
  defaultValue: a
}) : e("static-other-extras-group-name", {
  defaultValue: "Other"
}), w = ({
  t: e,
  categoryId: t,
  categoryDescription: a
}) => t ? e(`plan-category-${t}-description`, {
  defaultValue: a ?? ""
}) : "", k = (e) => Object.keys(e?.extras ?? {}).some(
  (t) => !e?.invoiceLines?.some((a) => a.plan === t)
), v = (e, t) => {
  const a = l.compact([
    ...Object.keys(e?.extras || {}).map(
      (s) => e?.invoiceLines?.find((n) => n.plan === s)
    )
  ]), o = l.keyBy(t, "_id"), r = Object.keys(e?.extras || {}).filter((s) => !e?.invoiceLines?.find((n) => n.plan === s)).map((s) => ({
    plan: s,
    quantity: e?.extras?.[s],
    description: o?.[s]?.name,
    price: 0
  }));
  return [...a, ...r];
}, P = (e) => {
  const t = b(), a = k(e), { data: o } = d(
    { orgSlug: t.orgSlug, resourceId: t.resourceId },
    { enabled: a }
  );
  return p.useMemo(
    () => v(e, o?.flatMap((r) => r.extras)),
    [e, o]
  );
};
export {
  S as U,
  w as a,
  _ as b,
  B as c,
  M as d,
  $ as g,
  P as u
};
