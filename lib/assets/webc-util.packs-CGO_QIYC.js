import { r } from "./webc-vendor-CvrN3tmw.js";
import { l as o } from "./webc-vendor-lodash-BJv5POtF.js";
import { x as u, q as m, r as s } from "./webc-web-component-qMWWbTiu.js";
const P = (t, a) => Math.round((1 - a / t) * 100), f = (t) => ({
  name: t.name,
  quantity: null,
  packPrice: t.price,
  unitPrice: t.price
}), g = (t, a) => t === 1 ? a("static-plan-pack-single-pass-label", {
  defaultValue: "{{count}} day pass",
  count: t
}) : a("static-plan-pack-multiple-passes-label", {
  defaultValue: "{{count}} day passes",
  count: t
}), d = ({
  plan: t,
  packQuantity: a
}) => t?.intervalLength === u.OneOff && t?.packsConfig?.packs?.find((i) => i.quantity === a) || null, b = (t) => {
  const { formatCurrency: a } = m(), e = r.useCallback(
    (c, n) => c ? a(
      s({ price: c.packPrice, markUp: t?.markUp }),
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...n
      }
    ) : null,
    [t, a]
  ), i = r.useCallback(
    (c, n) => c ? a(
      s({ price: c.unitPrice, markUp: t?.markUp }),
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...n
      }
    ) : null,
    [t, a]
  );
  return { formatPackPrice: e, formatPackUnitPrice: i };
}, y = (t, a, e) => {
  const i = e?.quantity ? `plan-${a?._id}-pack-${o.kebabCase(e.name)}` : `plan-${a?._id}-name`, c = e?.quantity ? e.name : a?.name;
  return t(i, { defaultValue: c });
};
export {
  y as a,
  f as b,
  P as c,
  g as d,
  d as g,
  b as u
};
