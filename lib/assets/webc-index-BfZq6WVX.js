import { j as u } from "./webc-vendor-BjE1NNvQ.js";
import { M as g, d as f } from "./webc-vendor-core-n5KM3lsu.js";
import { q as b, v as P, w as m, z as S, D as T, ak as j, t as E, al as h, am as L, an as D } from "./webc-web-component-QV_kTZ_O.js";
import { l as F } from "./webc-vendor-lodash-QZMGaMCX.js";
import { g as C } from "./webc-utils.rate-CFLOLeQ8.js";
import { u as O } from "./webc-vendor-i18n-DYvJO9nR.js";
import { u as R } from "./webc-vendor-query-PvhNqagV.js";
import { d as q } from "./webc-vendor-react-router-W8U6ip5z.js";
const x = {
  maximumFractionDigits: m
}, G = ({ rate: e, typographyProps: a }) => {
  const { variant: o = "h3", ...i } = a ?? {}, { formatCurrency: s } = b(), { t: r } = O(), t = C(e.intervalLength, r);
  if (e.price === 0)
    return /* @__PURE__ */ u.jsx(
      g,
      {
        variant: o,
        ...i,
        children: r("static-free-label", {
          defaultValue: "Free"
        })
      }
    );
  const n = e.adjustedPrice?.ratePrice ?? e.price, c = s(n, {
    ...x,
    ...P(n, m)
  }), l = e.adjustedPrice && e.adjustedPrice.ratePrice < e.adjustedPrice.originalRatePrice, d = l ? s(e.adjustedPrice.originalRatePrice, {
    ...x,
    ...P(
      e.adjustedPrice.originalRatePrice,
      m
    )
  }) : void 0;
  return /* @__PURE__ */ u.jsx(f, { alignItems: "flex-end", children: /* @__PURE__ */ u.jsxs(
    f,
    {
      direction: "row",
      gap: 1,
      children: [
        l ? /* @__PURE__ */ u.jsx(
          g,
          {
            variant: o,
            ...i,
            sx: (p) => ({
              textDecoration: "line-through",
              color: p.palette.text.faded
            }),
            children: d
          }
        ) : null,
        /* @__PURE__ */ u.jsx(
          g,
          {
            variant: o,
            noWrap: !0,
            ...i,
            children: n ? `${c}/${t}` : r("static-free-label", {
              defaultValue: "Free"
            })
          }
        )
      ]
    }
  ) });
}, Q = (e) => ({
  type: e.get("type"),
  periodStart: e.get("periodStart"),
  periodEnd: e.get("periodEnd"),
  office: e.get("office"),
  amenities: e.get("amenities"),
  capacity: e.get("capacity"),
  listingType: e.get("listingType")
}), $ = (e) => ({
  type: e.get("type"),
  office: e.get("office"),
  amenities: e.get("amenities"),
  period: e.get("period"),
  listingType: e.get("listingType")
}), k = ({
  orgSlug: e,
  type: a,
  office: o,
  amenities: i,
  period: s,
  listingType: r
}) => {
  const t = {
    type: a,
    office: o,
    amenities: i,
    intervalLength: s
  }, n = E(t), c = ({ signal: p }) => h.get(`/i/${e}/plans?${n}`, { signal: p }).then((y) => y.data), l = () => Promise.resolve([]), d = r === "plan" && !!e;
  return {
    queryKey: D.list(e, t),
    // NOTE: use a fallback query function in case there are no query params
    // as the 'enabled' flag is not always respected, see https://github.com/TanStack/query/issues/1196.
    queryFn: d ? c : l,
    enabled: d
  };
}, A = ({
  orgSlug: e,
  type: a,
  periodStart: o,
  periodEnd: i,
  office: s,
  amenities: r,
  capacity: t,
  listingType: n
}) => {
  const c = {
    type: a,
    periodStart: o,
    periodEnd: i,
    office: s,
    amenities: r,
    capacity: t
  }, l = E(c), d = ({ signal: v }) => h.get(`/i/${e}/resources?${l}`, { signal: v }).then((I) => I.data), p = () => Promise.resolve([]), y = (n === "resource" || !n && !!s) && !!e;
  return {
    queryKey: L.list(e, c),
    // INFO: Also Available scenario sends office to the query, then we want to fetch resources for that office
    // listingType would be always available on search-results page
    // NOTE: use a fallback query function in case there are no query params
    // as the 'enabled' flag is not always respected, see https://github.com/TanStack/query/issues/1196.
    queryFn: y ? d : p,
    enabled: y
  };
}, W = ({
  office: e = null,
  type: a = null,
  listingType: o = null
} = {}) => {
  const i = q(), s = S(), r = $(s);
  return R({
    ...k({
      orgSlug: i.orgSlug,
      ...F.omit(r, "office", "listingType", "type"),
      office: e || r.office,
      type: a || r.type,
      listingType: o || r.listingType
    }),
    staleTime: j.VolatileData
  });
}, z = ({
  office: e = null,
  type: a = null,
  listingType: o = null,
  timezone: i
}) => {
  const s = q(), r = S(), t = Q(r);
  let n = t.periodStart, c = t.periodEnd;
  return t.periodStart && t.periodEnd && (n = T(t.periodStart).setZone(i, { keepLocalTime: !0 }).toUTC().toISO(), c = T(t.periodEnd).setZone(i, { keepLocalTime: !0 }).toUTC().toISO()), R({
    ...A({
      orgSlug: s.orgSlug,
      ...F.omit(t, "office", "listingType", "type", "periodStart", "periodEnd"),
      periodStart: n,
      periodEnd: c,
      office: e || t.office,
      type: a || t.type,
      listingType: o || t.listingType
    }),
    staleTime: j.VolatileData
  });
};
export {
  G as R,
  W as a,
  z as u
};
