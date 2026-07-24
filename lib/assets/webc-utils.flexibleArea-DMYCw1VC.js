import { j as n } from "./webc-vendor-CvrN3tmw.js";
import { l as o } from "./webc-vendor-lodash-BJv5POtF.js";
import { M as l } from "./webc-vendor-core-BCd2u07H.js";
import { S as c } from "./webc-HtmlComponent-KnqjQ7IO.js";
import { q as u } from "./webc-web-component-qMWWbTiu.js";
import { a as m } from "./webc-utils-BJ_c_xG-.js";
import { u as y } from "./webc-vendor-i18n-BICogURo.js";
import { D as p } from "./webc-vendor-luxon-BX-Cdsu9.js";
const v = ({ setupFees: t, summary: a }) => {
  const { t: e } = y(), { formatCurrency: r } = u();
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: o.map(t, (s) => /* @__PURE__ */ n.jsx(
    c,
    {
      dataTest: "setup-fees",
      left: /* @__PURE__ */ n.jsx(
        l,
        {
          variant: "body",
          fontWeight: "inherit",
          children: e(`plan-${s._id}-name`, {
            defaultValue: s.name
          })
        }
      ),
      right: /* @__PURE__ */ n.jsx(l, { variant: "body", children: r(m(s._id, a)?.total) })
    },
    s._id
  )) });
}, g = ({ planId: t, row: a }) => {
  const { t: e } = y(), { formatCurrency: r } = u(), s = e(`plan-${t}-addon-${a.addOnId}-name`, {
    defaultValue: a.name
  });
  return /* @__PURE__ */ n.jsx(
    c,
    {
      dataTest: `plan-addon-line-${a.addOnId}`,
      left: /* @__PURE__ */ n.jsxs(
        l,
        {
          variant: "body",
          fontWeight: "inherit",
          children: [
            s,
            " × ",
            a.count
          ]
        }
      ),
      right: /* @__PURE__ */ n.jsx(
        l,
        {
          variant: "body",
          "data-test": `plan-addon-line-${a.addOnId}-price`,
          children: r(a.aggregatePrice)
        }
      )
    }
  );
}, E = ({
  planId: t,
  summary: a
}) => {
  const e = a?.addOns;
  return e?.length ? /* @__PURE__ */ n.jsx(n.Fragment, { children: e.map((r) => /* @__PURE__ */ n.jsx(
    g,
    {
      planId: t,
      row: r
    },
    r.addOnId
  )) }) : null;
}, h = (t, a, e) => {
  if (!t)
    return "";
  const r = a ?? "en-us", s = p.fromISO(t, { zone: e ?? "utc" }).setLocale(
    r
  );
  return o.upperFirst(s.toFormat(r.startsWith("en") ? "MMM d" : "MMMM d"));
}, x = (t, a, e, r) => {
  if (o.size(t) === 0)
    return "";
  const s = o.map(
    t,
    (f) => h(f.date, e, r)
  );
  if (s.length === 1)
    return a("static-flex-area-day-fully-booked-singular", {
      defaultValue: "{{day}} is fully booked. Try picking different dates.",
      day: s[0]
    });
  const d = s.pop(), i = s.join(", ");
  return a("static-flex-area-days-fully-booked-plural", {
    defaultValue: "{{days}} and {{lastDay}} are fully booked. Try picking different dates.",
    days: i,
    lastDay: d
  });
}, O = (t, a, e, r) => {
  if (o.size(t) === 0)
    return "";
  if (o.some(
    t,
    (i) => i.availableCapacity === 0
  ))
    return x(t, a, e, r);
  const d = o.minBy(t, (i) => i.availableCapacity);
  return a("static-flex-area-capacity-limited", {
    defaultValue: "Maximum capacity for these dates is {{smallestCapacity}}. Try adjusting your group size or picking different dates.",
    smallestCapacity: d?.availableCapacity ?? 0
  });
}, T = (t, a) => {
  if (!t || !a)
    return 0;
  const e = t.startOf("day");
  return a.startOf("day").diff(e, "days").days + 1;
}, b = (t) => o.get(t, "errorCode") === "FLEXIBLE_AREA_INSUFFICIENT_CAPACITY" ? t.daysWithoutCapacity.map((e) => ({
  date: e.date,
  availableCapacity: e.availableCapacity
})) : [], S = (t) => {
  const a = b(t), e = a.length > 0;
  return {
    flexibleAreaErrorDays: a,
    hasFlexibleAreaCapacityError: e
  };
};
export {
  E as A,
  v as S,
  O as a,
  T as b,
  S as g
};
