import { r as y } from "./webc-vendor-CvrN3tmw.js";
import { l as r } from "./webc-vendor-lodash-BJv5POtF.js";
import { bk as C, u as f, G as E, H as T } from "./webc-web-component-qMWWbTiu.js";
const k = () => y.useContext(C), _ = (c, n) => ({
  value: r.sumBy(n, (t) => t.price),
  tax: c === "purchase" ? r.sumBy(n, (t) => t.tax || 0) : void 0,
  items: r.map(n, (t) => ({
    item_id: t.id,
    item_name: t.name,
    item_category: t.productCategory?.category || "",
    item_category2: t.productCategory?.title,
    item_category3: t.location?.name || "",
    price: t.price
  }))
}), D = () => {
  const c = k(), n = f(), { currency: t } = n?.settings?.billing || {}, m = y.useRef({}), d = y.useCallback(
    (e, s, a = {}) => {
      if (c) {
        const o = {
          event: e,
          ecommerce: r.omitBy(
            {
              currency: t,
              coupon: a.discountCode,
              transaction_id: a.transactionId,
              payment_type: e === "add_payment_info" ? a.paymentType : void 0,
              ...r.omitBy(_(e, s), r.isUndefined)
            },
            r.isUndefined
          )
        };
        c.trackEvent(o);
      }
    },
    [c, t]
  ), { data: i } = E(), { data: p } = T(), g = y.useCallback(
    (e, s) => {
      const a = i?.find(
        (o) => o.resourceType === e && o.listingType === s
      ) || i?.[0];
      return {
        ...a,
        category: p?.find((o) => o._id === a?.category)?.title || "Other"
      };
    },
    [i, p]
  );
  return { trackECommerceEvent: y.useCallback(
    (e, s, { ensureTrackedOnce: a, ...o } = {}) => {
      const l = s.map((u) => u.id).join(",");
      c && i && (a && m.current[e] !== l || !a) && (d(
        e,
        s.map((u) => ({
          ...r.omit(u, ["resourceType", "listingType"]),
          productCategory: g(
            u.resourceType,
            u.listingType
          )
        })),
        o
      ), m.current[e] = l);
    },
    [c, d, g, i]
  ) };
};
export {
  D as u
};
