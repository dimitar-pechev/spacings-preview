import { j as t } from "./webc-vendor-BjE1NNvQ.js";
import { m as h, M as l, d as C } from "./webc-vendor-core-n5KM3lsu.js";
import { D as c } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { l as S } from "./webc-vendor-lodash-QZMGaMCX.js";
import { q as z, x as D } from "./webc-web-component-QV_kTZ_O.js";
import { u as P } from "./webc-vendor-mui-BXZK0LVO.js";
import { a as T } from "./webc-util.packs-ByRt6Esw.js";
import { u as q } from "./webc-vendor-i18n-DYvJO9nR.js";
const r = ({ label: e, children: n }) => {
  const a = P();
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(h, { size: { xs: 5 }, children: /* @__PURE__ */ t.jsx(
      l,
      {
        variant: "caption",
        color: a.palette.grey[600],
        children: e
      }
    ) }),
    /* @__PURE__ */ t.jsx(h, { size: { xs: 7 }, children: n })
  ] });
}, I = (e, n) => !n || c.fromISO(e, { zone: "utc" }).startOf("day").equals(c.fromISO(n, { zone: "utc" }).startOf("day")), W = ({ plan: e, search: n }) => {
  const a = P(), { t: s } = q(), { formatDate: d } = z(), { locationName: x, locationAddress: f, startDate: p, endDate: m, quantity: i, selectedPack: o } = n, b = c.fromISO(p, { zone: "utc" }), j = m && c.fromISO(m, { zone: "utc" }), V = e.intervalLength === D.Month, u = d(b), O = j && d(j), y = (S.first(e?.passes)?.count ?? 0) * (o?.quantity ?? 1), v = e.intervalCount, k = b.plus({ months: v }), g = v ? d(k) : null, F = !(e.intervalLength === D.OneOff && !e.passesValidityPeriod?.intervalCount);
  return /* @__PURE__ */ t.jsxs(
    C,
    {
      sx: {
        padding: 6,
        border: `1px solid ${a.palette.border.base}`,
        borderRadius: a.typography.pxToRem(12)
      },
      children: [
        /* @__PURE__ */ t.jsx(
          l,
          {
            variant: "h4",
            color: a.palette.common.black,
            "data-test": "purchase-name",
            children: T(s, e, o)
          }
        ),
        /* @__PURE__ */ t.jsxs(
          h,
          {
            container: !0,
            spacing: 2,
            marginBlockStart: 4,
            children: [
              (x || f) && /* @__PURE__ */ t.jsx(
                r,
                {
                  label: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                    s("static-summary-location-address-label", {
                      defaultValue: "Location Address"
                    }),
                    ":"
                  ] }),
                  children: /* @__PURE__ */ t.jsx(
                    l,
                    {
                      variant: "body",
                      color: a.palette.common.black,
                      sx: { wordBreak: "break-word" },
                      children: f || x
                    }
                  )
                }
              ),
              e.isFlexibleArea && !o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      s("static-summary-visit-dates-label", {
                        defaultValue: "Visit date(s)"
                      }),
                      ":"
                    ] }),
                    children: /* @__PURE__ */ t.jsxs(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        "data-test": "plan-visit-dates",
                        children: [
                          u,
                          !I(p, m) && ` - ${O}`
                        ]
                      }
                    )
                  }
                ),
                i && !o && /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: s("static-visitors-title", {
                      defaultValue: "People"
                    }),
                    children: /* @__PURE__ */ t.jsx(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        "data-test": "plan-visitors",
                        children: i
                      }
                    )
                  }
                )
              ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      s("static-summary-start-date-label", {
                        defaultValue: "Start Date"
                      }),
                      ":"
                    ] }),
                    children: /* @__PURE__ */ t.jsx(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        "data-test": "plan-start-date",
                        children: u
                      }
                    )
                  }
                ),
                y > 0 && /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      s("static-day-passes-label", {
                        defaultValue: "Day Passes"
                      }),
                      ":"
                    ] }),
                    children: /* @__PURE__ */ t.jsxs(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        "data-test": "passes-info",
                        children: [
                          s("static-passes-label", {
                            defaultValue: "{{passesCount}} passes",
                            passesCount: y
                          }),
                          " ",
                          F ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                            /* @__PURE__ */ t.jsx("br", {}),
                            /* @__PURE__ */ t.jsxs(
                              l,
                              {
                                variant: "caption",
                                color: a.palette.grey[600],
                                children: [
                                  s("static-summary-valid-from-period-label", {
                                    defaultValue: "valid from {{formattedDateStart}}",
                                    formattedDateStart: u
                                  }),
                                  g && ` - ${g}`
                                ]
                              }
                            )
                          ] }) : null
                        ]
                      }
                    )
                  }
                ),
                V ? /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      s("static-summary-billing-label", {
                        defaultValue: "Billing"
                      }),
                      ":"
                    ] }),
                    children: /* @__PURE__ */ t.jsx(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        children: s("static-summary-billed-every-months-label", {
                          defaultValue: "Billed every {{monthsCount}} months",
                          monthsCount: e.intervalCount ?? 1
                        })
                      }
                    )
                  }
                ) : null,
                i && !o && /* @__PURE__ */ t.jsx(
                  r,
                  {
                    label: s("static-quantity-title", {
                      defaultValue: "Quantity"
                    }),
                    children: /* @__PURE__ */ t.jsx(
                      l,
                      {
                        variant: "body",
                        color: a.palette.common.black,
                        "data-test": "plan-quantity",
                        children: i
                      }
                    )
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
};
export {
  W as P
};
