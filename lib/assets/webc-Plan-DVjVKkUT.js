import { j as e, r as x, aI as Et } from "./webc-vendor-CvrN3tmw.js";
import { l as j } from "./webc-vendor-lodash-BJv5POtF.js";
import { d as u, M as p, j as st, T as wt, $ as It, o as Dt, p as F, a3 as At, a4 as _t, a5 as Ot, a2 as Q, G as Vt, a6 as B, a7 as Ue, D as ke, s as Lt, e as nt, a8 as $t } from "./webc-vendor-core-BCd2u07H.js";
import { u as q, ao as xe, ap as Bt, M as Mt, T as se } from "./webc-vendor-mui-C8wQ-7jG.js";
import { q as ue, X as Ae, Y as _e, n as Rt, v as ge, w as le, aB as it, a5 as Oe, u as rt, x as ce, aC as pe, aD as X, aE as Ft, I as Nt, r as Ht, at as Qe, aF as ot, B as Ee, D as lt, aG as Ge, aH as Wt, aI as qt, aJ as we, d as Ut, z as Qt, f as Gt, h as zt, aK as ct, N as dt, Q as Zt, aL as Jt, aM as Kt, aN as Xt, aO as Yt, aP as ea, aQ as ta, ah as J, ai as ze, aR as aa, j as Ze, aS as sa, t as na, p as Je, E as ne, c as K, aT as ia, aU as Ce, aV as ra, L as oa, ag as la, P as ca, s as da, aj as Ke } from "./webc-web-component-qMWWbTiu.js";
import { B as ua, G as pa, A as ma } from "./webc-Gallery-ghEhZFuH.js";
import { T as re, a as fa } from "./webc-TooltipSwitch-C9UYN4QY.js";
import { S as ha } from "./webc-SvgImage-DgUyAsUQ.js";
import { M as xa } from "./webc-MapComponent-Y5APOXf9.js";
import { g as ga } from "./webc-google-maps-logo-B8movxuB.js";
import { u as ya } from "./webc-useScrollToTop-Cn0mrEq5.js";
import { a as ba } from "./webc-vendor-query-ByFZOUhz.js";
import { D as W } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { u as ja } from "./webc-useGetTimezone-DnnlJcRC.js";
import { p as Pa, F as va } from "./webc-FloatingPanel-DBaMPQZh.js";
import { F as ut, S as ie, H as Ta } from "./webc-HtmlComponent-KnqjQ7IO.js";
import { u as M } from "./webc-vendor-i18n-BICogURo.js";
import { T as Sa } from "./webc-TotalPriceInfo-CvrQs3Jy.js";
import { g as pt } from "./webc-utils-BJ_c_xG-.js";
import { A as ka, S as Ca, g as Ea, a as wa, b as Ia } from "./webc-utils.flexibleArea-DMYCw1VC.js";
import { g as Ve, u as ye, a as de, b as mt, c as Ie, d as ft } from "./webc-util.packs-CGO_QIYC.js";
import { D as De } from "./webc-DebouncedNumberField-Cz7H5PCC.js";
import { u as Da } from "./webc-useECommerceTracking-CWRT-Ysg.js";
import { d as ht } from "./webc-vendor-react-router-Tvle1imR.js";
import { T as Aa, M as _a, Z as Oa } from "./webc-vendor-leaflet-J_Ej7lqG.js";
var oe = /* @__PURE__ */ ((t) => (t.Hour = "hour", t.Coin = "value", t))(oe || {});
const Va = 25, La = ({
  summary: t,
  isSummaryLoading: s,
  invoicingVat: r
}) => {
  const { formatCurrency: o } = ue(), { t: a } = M(), l = t?.totalAmount, n = r === ut.Included && l;
  if (!t)
    return /* @__PURE__ */ e.jsxs(
      u,
      {
        width: "100%",
        direction: "row",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ e.jsxs(p, { variant: "h3", children: [
            a("static-summary-total-label", {
              defaultValue: "Total"
            }),
            ":"
          ] }),
          /* @__PURE__ */ e.jsx(
            p,
            {
              variant: "h3",
              noWrap: !0,
              "data-test": "select-location-label",
              children: s ? "" : a("static-select-location-label", {
                defaultValue: "Select Location"
              })
            }
          )
        ]
      }
    );
  const d = a("static-summary-price-info-message", {
    defaultValue: "CC fees are calculated at checkout."
  });
  return /* @__PURE__ */ e.jsxs(
    u,
    {
      direction: "row",
      columnGap: 2,
      flexWrap: "nowrap",
      alignItems: "center",
      width: "100%",
      margin: s ? "auto" : "none",
      sx: (i) => ({
        // Setting minHeight to prevent vertical layout shifts
        minHeight: i.typography.pxToRem(Va),
        // Center the spinner within the reserved space
        ...s && {
          justifyContent: "center"
        }
      }),
      children: [
        s ? /* @__PURE__ */ e.jsx(Ae, { size: _e.BUTTON }) : null,
        s ? null : /* @__PURE__ */ e.jsxs(
          u,
          {
            width: "100%",
            direction: "row",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ e.jsxs(p, { variant: "h3", children: [
                a("static-summary-total-label", {
                  defaultValue: "Total"
                }),
                ":"
              ] }),
              /* @__PURE__ */ e.jsxs(
                u,
                {
                  gap: 1,
                  alignItems: "flex-end",
                  children: [
                    /* @__PURE__ */ e.jsxs(
                      u,
                      {
                        direction: "row",
                        gap: 1,
                        alignItems: "center",
                        children: [
                          /* @__PURE__ */ e.jsx(
                            p,
                            {
                              "data-test": "plan-total-price",
                              variant: "h3",
                              noWrap: !0,
                              children: o(l, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            re,
                            {
                              arrow: !0,
                              placement: "top",
                              title: /* @__PURE__ */ e.jsx(
                                u,
                                {
                                  width: "fit-content",
                                  spacing: 2,
                                  children: /* @__PURE__ */ e.jsx(p, { children: d })
                                }
                              ),
                              children: /* @__PURE__ */ e.jsx(u, { justifyContent: "center", children: /* @__PURE__ */ e.jsx(st, { icon: "far fa-info-circle" }) })
                            }
                          )
                        ]
                      }
                    ),
                    n ? /* @__PURE__ */ e.jsx(
                      p,
                      {
                        variant: "caption",
                        "data-test": "tax-included-label",
                        children: a("static-tax-included-label", {
                          defaultValue: "Tax included"
                        })
                      }
                    ) : null
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, $a = ({
  planId: t,
  planQty: s,
  addOn: r,
  count: o,
  onCountChange: a
}) => {
  const { t: l } = M(), { formatCurrency: n } = ue(), d = q(), i = o > 0, m = Math.max(1, s), b = o < m, f = l(`plan-${t}-addon-${r._id}-name`, {
    defaultValue: r.name
  }), y = !!r.deposit && r.deposit > 0, h = `plan-addon-card-${r._id}`, g = l("static-rate-month-label", { defaultValue: "month" }), P = l(`plan-${t}-addon-${r._id}-add-aria-label`, {
    defaultValue: "Add {{name}}",
    name: f
  }), S = l(`plan-${t}-addon-${r._id}-quantity-aria-label`, {
    defaultValue: "{{name}} quantity",
    name: f
  }), E = () => {
    b && a(o + 1);
  };
  return /* @__PURE__ */ e.jsx(
    wt,
    {
      "data-test": h,
      "data-state": i ? "selected" : "unselected",
      elevation: 0,
      sx: {
        height: d.typography.pxToRem(139),
        width: "100%",
        display: "flex",
        flexDirection: "column",
        ...i ? {
          "&&": { border: `2px solid ${d.palette.primary.main}` }
        } : {
          "&&": { border: `1px solid ${d.palette.divider}` }
        }
      },
      children: /* @__PURE__ */ e.jsx(It, { sx: { "&&": { flex: 1, display: "flex", flexDirection: "column", padding: 4 } }, children: /* @__PURE__ */ e.jsxs(
        u,
        {
          gap: 2.5,
          sx: { flex: 1 },
          children: [
            /* @__PURE__ */ e.jsx(
              u,
              {
                direction: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 2,
                height: d.typography.pxToRem(32),
                children: /* @__PURE__ */ e.jsx(
                  p,
                  {
                    variant: "h4",
                    "data-test": `${h}-name`,
                    sx: { ...Rt, WebkitLineClamp: 2 },
                    children: f
                  }
                )
              }
            ),
            /* @__PURE__ */ e.jsxs(
              u,
              {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                sx: { marginBlockStart: "auto", height: d.typography.pxToRem(42) },
                children: [
                  /* @__PURE__ */ e.jsxs(u, { gap: 0.5, children: [
                    /* @__PURE__ */ e.jsxs(
                      p,
                      {
                        variant: "body",
                        "data-test": `${h}-price`,
                        children: [
                          /* @__PURE__ */ e.jsx(
                            p,
                            {
                              component: "span",
                              variant: "h3",
                              children: n(
                                r.price,
                                ge(r.price, le)
                              )
                            }
                          ),
                          `/${g}`
                        ]
                      }
                    ),
                    y ? /* @__PURE__ */ e.jsx(
                      p,
                      {
                        variant: "body",
                        "data-test": `${h}-deposit`,
                        sx: { textTransform: "lowercase" },
                        children: `(${l("static-summary-deposit-label", {
                          defaultValue: "Deposit"
                        })}: ${n(
                          r.deposit ?? 0,
                          ge(
                            r.deposit ?? 0,
                            le
                          )
                        )})`
                      }
                    ) : null
                  ] }),
                  i ? /* @__PURE__ */ e.jsx(F, { "data-test": `${h}-stepper`, children: /* @__PURE__ */ e.jsx(
                    De,
                    {
                      value: o,
                      min: 0,
                      max: m,
                      step: 1,
                      precision: 0,
                      onChange: (V) => a(V ?? 0),
                      reserveMessageSpace: !1,
                      sx: { "& .MuiFormHelperText-root": { display: "none" } },
                      slotProps: {
                        htmlInput: {
                          "data-test": `${h}-count`,
                          "aria-label": S
                        }
                      }
                    }
                  ) }) : /* @__PURE__ */ e.jsx(
                    Dt,
                    {
                      "data-test": `${h}-add`,
                      onClick: E,
                      disabled: !b,
                      iconProps: { icon: "far fa-plus" },
                      variant: "contained",
                      "aria-label": P
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}, Ba = ({
  plan: t,
  planQty: s,
  isInitialSummaryError: r
}) => {
  const { t: o } = M(), a = q(), [l, n] = it(), d = x.useMemo(
    () => new Set(t.addOns?.map((f) => f._id) ?? []),
    [t.addOns]
  ), i = x.useMemo(
    () => l.filter((f) => d.has(f.addOnId)),
    [l, d]
  );
  if (!t.addOns?.length || r)
    return null;
  const m = (f) => (y) => {
    const h = l.filter((g) => g.addOnId !== f);
    n(y > 0 ? [...h, { addOnId: f, count: y }] : h);
  }, b = (f) => i.find((y) => y.addOnId === f)?.count ?? 0;
  return /* @__PURE__ */ e.jsxs(
    u,
    {
      gap: 4,
      "data-test": "available-extras-panel",
      sx: { width: "100%" },
      children: [
        /* @__PURE__ */ e.jsx(p, { variant: "h4", children: o("static-plan-available-extras-label", {
          defaultValue: "Available extras"
        }) }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            gap: 3,
            sx: {
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: `repeat(auto-fill, ${a.typography.pxToRem(260)})`
              }
            },
            children: t.addOns.map((f) => /* @__PURE__ */ e.jsx(
              $a,
              {
                planId: t._id,
                planQty: s,
                addOn: f,
                count: b(f._id),
                onCountChange: m(f._id)
              },
              f._id
            ))
          }
        )
      ]
    }
  );
}, Xe = ({
  plan: t,
  planSummaryResult: s,
  daysInPeriod: r
}) => {
  const {
    settings: {
      billing: { invoicingVat: o }
    }
  } = rt(), { formatCurrency: a, formatPercentage: l } = ue(), { t: n, i18n: d } = M(), { originId: i, approval: m, setupFees: b, isFlexibleArea: f } = t, y = x.useMemo(
    () => j.sumBy(j.filter(s?.invoiceLines, { isDeposit: !0 }), "total"),
    [s]
  ), h = pt(i, s), g = t.intervalLength === ce.Month, P = o === ut.Excluded && h?.vatAmount && h.vatAmount > 0, S = s && !j.isEmpty(s?.periodStart) && !j.isEmpty(s?.periodEnd), E = y > 0 || !j.isEmpty(b), [V] = pe(), [k] = X(), $ = Ve({ plan: t, packQuantity: k }), { formatPackUnitPrice: C } = ye(t), N = C($), O = f ? n("static-flex-area-price-details-pack-price-label", {
    defaultValue: "{{packName}} ({{price}}/day)",
    packName: de(n, t, $),
    price: N
  }) : n("static-plan-price-details-pack-price-label", {
    defaultValue: "{{packName}} ({{price}}/item)",
    packName: de(n, t, $),
    price: N
  });
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      ie,
      {
        left: /* @__PURE__ */ e.jsxs(
          p,
          {
            variant: "body",
            fontWeight: "inherit",
            children: [
              g ? n("static-prorated-amount-label", {
                defaultValue: "Prorated Amount"
              }) : n("static-summary-base-price-label", {
                defaultValue: "Base price"
              }),
              ":"
            ]
          }
        ),
        right: /* @__PURE__ */ e.jsx(
          Sa,
          {
            dataTestId: "subtotal-price",
            amount: h?.price,
            showAmounts: !0
          }
        )
      }
    ),
    $ ? /* @__PURE__ */ e.jsx(
      ie,
      {
        left: /* @__PURE__ */ e.jsx(
          p,
          {
            "data-test": "plan-pack-price-breakdown",
            variant: "caption",
            children: O
          }
        )
      }
    ) : null,
    !$ && f && t?.price ? /* @__PURE__ */ e.jsx(
      ie,
      {
        left: /* @__PURE__ */ e.jsxs(
          p,
          {
            "data-test": "flexible-area-price-breakdown",
            variant: "caption",
            fontWeight: 400,
            children: [
              a(t.price),
              " x ",
              r,
              " ",
              n("static-format-days", { defaultValue: "days" }),
              " x ",
              V,
              " ",
              n("static-format-people", { defaultValue: "people" })
            ]
          }
        )
      }
    ) : null,
    S && g ? /* @__PURE__ */ e.jsx(
      F,
      {
        width: "100%",
        textAlign: "right",
        children: /* @__PURE__ */ e.jsxs(p, { variant: "caption", children: [
          n("static-summary-for-period-label", {
            defaultValue: "For"
          }),
          " ",
          Ft(s, d?.language)
        ] })
      }
    ) : null,
    /* @__PURE__ */ e.jsx(
      ka,
      {
        planId: t._id,
        summary: s
      }
    ),
    y ? /* @__PURE__ */ e.jsx(
      ie,
      {
        left: /* @__PURE__ */ e.jsxs(
          p,
          {
            variant: "body",
            fontWeight: "inherit",
            children: [
              n("static-summary-deposit-label", {
                defaultValue: "Deposit"
              }),
              ":"
            ]
          }
        ),
        right: /* @__PURE__ */ e.jsx(
          p,
          {
            variant: "body",
            "data-test": "summary-deposit-amount",
            children: a(y)
          }
        )
      }
    ) : null,
    /* @__PURE__ */ e.jsx(
      Ca,
      {
        setupFees: b,
        summary: s
      }
    ),
    P ? /* @__PURE__ */ e.jsx(
      ie,
      {
        left: /* @__PURE__ */ e.jsxs(
          p,
          {
            variant: "body",
            fontWeight: "inherit",
            "data-test": "vat-title-percent-amount",
            children: [
              n(`tax-rate-${h.taxRate}-name`, {
                defaultValue: h.taxName
              }),
              " ",
              l(h.vatPercent),
              ":"
            ]
          }
        ),
        right: /* @__PURE__ */ e.jsx(
          p,
          {
            variant: "body",
            "data-test": "vat-percent-amount",
            children: `${a(h?.vatAmount)}`
          }
        )
      }
    ) : null,
    E ? /* @__PURE__ */ e.jsx(
      Nt,
      {
        icon: "far fa-info-circle",
        alignItems: "center",
        children: /* @__PURE__ */ e.jsx(p, { variant: "body", children: m ? n("static-summary-plan-fees-approval-hint", {
          defaultValue: "All fees will be added one time and payment will be processed after your request has been approved"
        }) : n("static-summary-plan-fees-hint", {
          defaultValue: "The deposit and any one-time fees above are collected with your first payment."
        }) })
      }
    ) : null
  ] });
}, Ma = ({
  plan: t,
  planSummaryResult: s,
  isPlanSummaryLoading: r,
  daysInPeriod: o
}) => {
  const a = q(), l = xe(
    a.breakpoints.up(Oe)
  ), { t: n } = M(), [d, i] = x.useState(!0), m = {
    gap: 2,
    display: "flex",
    flexDirection: "column"
  };
  return r ? /* @__PURE__ */ e.jsx(
    F,
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: (b) => b.typography.pxToRem(120),
      children: /* @__PURE__ */ e.jsx(Ae, { size: _e.LARGE })
    }
  ) : l ? /* @__PURE__ */ e.jsxs(
    At,
    {
      expanded: d,
      disableGutters: !0,
      sx: {
        width: "100%",
        boxShadow: "none",
        "&::before": {
          backgroundColor: "transparent"
        },
        background: "transparent"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          _t,
          {
            "data-test": "price-details-summary",
            title: d ? n("static-hide-price-details-label", {
              defaultValue: "Hide price details"
            }) : n("static-show-price-details-label", {
              defaultValue: "Show price details"
            }),
            titleProps: {
              variant: "body",
              paddingInlineStart: 4
            },
            sx: {
              background: "transparent"
            },
            onClick: () => i(!d)
          }
        ),
        /* @__PURE__ */ e.jsx(
          Ot,
          {
            "data-test": "price-details",
            sx: { ...m, gap: 0, padding: `0 ${a.typography.pxToRem(8)}` },
            children: /* @__PURE__ */ e.jsx(
              Xe,
              {
                plan: t,
                planSummaryResult: s,
                daysInPeriod: o
              }
            )
          }
        )
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    u,
    {
      width: "100%",
      sx: { ...m, gap: 3 },
      children: [
        /* @__PURE__ */ e.jsx(
          p,
          {
            variant: "groupTitle",
            fontWeight: "bold",
            "data-test": "price-details-summary",
            children: n("static-price-details-label", {
              defaultValue: "Price details"
            })
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            "data-test": "price-details",
            sx: m,
            children: /* @__PURE__ */ e.jsx(
              Xe,
              {
                plan: t,
                planSummaryResult: s,
                daysInPeriod: o
              }
            )
          }
        )
      ]
    }
  );
}, Ye = {
  hasEverSucceeded: !1,
  isInitialSummaryError: !1
}, Ra = (t, s) => {
  const r = t.hasEverSucceeded || s.isSuccess;
  return {
    hasEverSucceeded: r,
    isInitialSummaryError: s.isError && !r
  };
}, Fa = 45, Na = 26, et = {
  maximumFractionDigits: le
}, tt = ({
  plan: t,
  planSummary: s,
  isSummaryLoading: r,
  startDate: o,
  endDate: a,
  showTag: l = !0,
  showSecondaryLabel: n = !0
}) => {
  const { t: d, i18n: i } = M(), { formatCurrency: m } = ue(), { intervalLength: b, intervalCount: f, prorate: y, approval: h } = t, g = b === ce.Month;
  let P = pt(t.originId, s)?.unitPrice;
  const [S] = X();
  s || (P = Ht(t));
  const E = d("static-requires-approval-label", {
    defaultValue: "Requires Approval"
  }), V = d("static-summary-billed-every-months-label", {
    defaultValue: "Billed every {{monthsCount}} months",
    monthsCount: f ?? 1
  }), k = d("static-summary-prorated-label", {
    defaultValue: "prorated"
  }), { formatPackPrice: $ } = ye(t), C = () => {
    const _ = Ve({ plan: t, packQuantity: S });
    if (_)
      return `${$(_, {
        ...et,
        ...ge(
          _.packPrice,
          le
        )
      })}/${d("static-plan-pack-label", {
        defaultValue: "pack"
      })}`;
    const D = m(P, {
      ...et,
      ...ge(P, le)
    });
    return g ? `${D}/${d("static-rate-month-label", {
      defaultValue: "month"
    })}` : D;
  }, N = y ? `, ${k}.` : ".";
  let O = `${V}${N}`;
  if (!g) {
    const _ = i.language || "en", D = o ? Qe(o, _) : "", H = a ? Qe(a, _) : "";
    O = D && H && D !== H ? `${D} - ${H}` : D;
  }
  const A = n ? O : "", G = h && l, T = A ? Fa : Na;
  return /* @__PURE__ */ e.jsx(
    F,
    {
      "data-component": "FloatingPanelPriceHeader",
      margin: r ? "auto" : void 0,
      sx: (_) => ({
        // Setting minHeight to prevent vertical layout shifts
        minHeight: _.typography.pxToRem(T),
        width: "100%",
        // When loading, center the spinner within the reserved space
        ...r && {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }),
      children: r ? /* @__PURE__ */ e.jsx(Ae, { size: _e.BUTTON }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        G ? /* @__PURE__ */ e.jsx(
          Q,
          {
            sx: {
              marginBlockEnd: 2,
              borderRadius: 3,
              "& .MuiChip-label": {
                textTransform: "uppercase",
                fontWeight: 600
              }
            },
            label: E
          }
        ) : null,
        /* @__PURE__ */ e.jsx(
          p,
          {
            "data-test": "floating-panel-price-header",
            variant: "h1",
            children: C()
          }
        ),
        A ? /* @__PURE__ */ e.jsx(p, { variant: "body", children: A }) : null
      ] })
    }
  );
}, he = ({
  referenceDate: t,
  workDays: s,
  closedDaysIntervals: r,
  isDateDisabled: o,
  timezone: a
}) => {
  const l = W.now().setZone(a).startOf("day"), n = t.setZone(a, { keepLocalTime: !0 }).startOf("day"), d = W.max(n, l), i = Ge({
    workDays: s,
    closedDaysIntervals: r,
    startingFrom: d
  }).startOf("day");
  if (!o(i.toJSDate()))
    return i;
  if (d > l) {
    const m = Ge({
      workDays: s,
      closedDaysIntervals: r,
      startingFrom: l
    }).startOf("day");
    if (!o(m.toJSDate()))
      return m;
  }
  return i;
}, Ha = ({
  startDateParam: t,
  previousDate: s,
  workDays: r,
  closedDaysIntervals: o,
  isDateDisabled: a,
  timezone: l
}) => {
  if (!s && t) {
    const n = lt(t);
    return a(n.toJSDate()) ? he({
      referenceDate: n,
      workDays: r,
      closedDaysIntervals: o,
      isDateDisabled: a,
      timezone: l
    }) : n.startOf("day");
  }
  return s ? a(s.toJSDate()) ? he({
    referenceDate: s,
    workDays: r,
    closedDaysIntervals: o,
    isDateDisabled: a,
    timezone: l
  }) : s : he({
    referenceDate: W.now().setZone(l).startOf("day"),
    workDays: r,
    closedDaysIntervals: o,
    isDateDisabled: a,
    timezone: l
  });
}, Wa = ({
  startDateParam: t,
  businessHours: s,
  closedDaysIntervals: r,
  timezone: o
}) => {
  const [a, l] = x.useState(null), n = x.useRef(void 0), d = x.useRef(null), i = ot({
    businessHours: s,
    timezone: o ?? "UTC",
    // Fallback for hook, but we defer calculation until timezone is defined
    closedDaysIntervals: r,
    bookingMode: Ee.Date
  }), m = n.current !== void 0 && n.current !== o, b = x.useMemo(() => {
    if (!s || !o)
      return null;
    const y = m ? null : a ?? d.current;
    return Ha({
      startDateParam: t,
      previousDate: y,
      workDays: s.days,
      closedDaysIntervals: r,
      isDateDisabled: i,
      timezone: o
    }).setZone("local", { keepLocalTime: !0 });
  }, [
    t,
    s,
    r,
    i,
    o,
    a,
    m
  ]);
  x.useEffect(() => {
    o !== void 0 && (n.current = o), b && (d.current = b);
  }, [o, b]);
  const f = x.useCallback(
    (y) => {
      if (y == null || !s || !o)
        return;
      const g = (i(y) ? he({
        referenceDate: W.fromJSDate(y),
        workDays: s.days,
        closedDaysIntervals: r,
        isDateDisabled: i,
        timezone: o
      }) : W.fromJSDate(y).startOf("day")).setZone("local", { keepLocalTime: !0 });
      l(g), d.current = g;
    },
    [s, i, r, o]
  );
  return [b, f];
}, qa = ({ plan: t }) => {
  const [s, r] = X(), [, o] = pe(), [a, l] = x.useState(!1), { t: n } = M(), d = q(), { elementWidth: i } = Wt(), m = x.useMemo(
    () => [mt(t), ...t.packsConfig?.packs || []],
    [t]
  ), b = (g) => {
    const P = m.find((S) => S.name === g);
    return /* @__PURE__ */ e.jsxs(
      u,
      {
        direction: "row",
        gap: 2,
        alignItems: "center",
        sx: { minHeight: d.spacing(d.spacingVariants.L) },
        children: [
          /* @__PURE__ */ e.jsx(
            se,
            {
              variant: B.BODY,
              sx: we,
              children: de(n, t, P)
            }
          ),
          P?.quantity ? /* @__PURE__ */ e.jsx(
            Q,
            {
              color: "success",
              label: n("static-plan-pack-save-badge", {
                defaultValue: "save {{percent}}%",
                percent: Ie(t.price, P?.unitPrice)
              })
            }
          ) : null
        ]
      }
    );
  }, f = m.find((g) => g.quantity === s)?.name, { formatPackPrice: y } = ye(t), h = x.useCallback(
    () => /* @__PURE__ */ e.jsx(qt, { onClick: () => l(!a) }),
    [a]
  );
  return /* @__PURE__ */ e.jsxs(
    u,
    {
      sx: { width: "100%" },
      spacing: 1,
      children: [
        /* @__PURE__ */ e.jsx(Vt, { id: "plan-pack-select-label", children: n("static-plan-pack-select-label", {
          defaultValue: "Select option"
        }) }),
        /* @__PURE__ */ e.jsx(
          Bt,
          {
            "data-test": "plan-pack-select",
            open: a,
            onOpen: () => l(!0),
            onClose: () => l(!1),
            value: f,
            labelId: "plan-pack-select-label",
            renderValue: b,
            IconComponent: h,
            sx: {
              "&& .MuiSelect-select.MuiInputBase-input": {
                // the core component padding-y is 8px which combined with a <Tag /> compnent inside (24px in height)
                // makes the total height of the select 40px (4 px larger than our other inputs), so decrease the padding as needed
                py: 1.5
              }
            },
            MenuProps: {
              PaperProps: {
                style: {
                  // longer pack names could be expected so restrict the popup width
                  maxWidth: d.typography.pxToRem(i)
                }
              }
            },
            children: m.map((g) => /* @__PURE__ */ e.jsx(
              Mt,
              {
                value: g.name,
                selected: s === g.quantity,
                onClick: () => {
                  r(g.quantity), o(1), l(!1);
                },
                children: /* @__PURE__ */ e.jsxs(
                  u,
                  {
                    alignItems: "start",
                    justifyContent: "space-between",
                    gap: 3,
                    direction: "row",
                    width: "100%",
                    children: [
                      /* @__PURE__ */ e.jsxs(
                        u,
                        {
                          direction: "column",
                          gap: 1,
                          flex: 1,
                          sx: { overflow: "hidden" },
                          children: [
                            /* @__PURE__ */ e.jsxs(
                              u,
                              {
                                direction: "row",
                                gap: 2,
                                alignItems: "center",
                                children: [
                                  /* @__PURE__ */ e.jsx(
                                    se,
                                    {
                                      variant: B.TAB_HEADER,
                                      sx: we,
                                      children: de(n, t, g)
                                    }
                                  ),
                                  g.quantity ? /* @__PURE__ */ e.jsx(
                                    Q,
                                    {
                                      color: "success",
                                      label: `${n("static-plan-pack-save-badge", {
                                        defaultValue: "save {{percent}}%",
                                        percent: Ie(t.price, g.unitPrice)
                                      })}`
                                    }
                                  ) : null
                                ]
                              }
                            ),
                            t.isFlexibleArea ? /* @__PURE__ */ e.jsx(se, { variant: B.BODY, children: ft(g.quantity || 1, n) }) : null
                          ]
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(se, { variant: B.TAB_HEADER, children: [
                        y(g),
                        g.quantity ? `/${n("static-plan-pack-label", {
                          defaultValue: "pack"
                        })}` : null
                      ] })
                    ]
                  }
                )
              },
              g.name
            ))
          }
        ),
        t?.isFlexibleArea && s ? /* @__PURE__ */ e.jsx(
          se,
          {
            color: "text.secondary",
            variant: B.CAPTION,
            children: n("static-plan-pack-select-visit-dates-after-purchase-caption", {
              defaultValue: "Select visit dates after purchase."
            })
          }
        ) : null
      ]
    }
  );
}, at = ({
  plan: t,
  orgLocations: s,
  isOrgLocationsQueryLoading: r,
  effectiveBusinessHours: o,
  invoicingVat: a,
  onStatusChange: l
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const { t: n } = M(), { trackPublicEvent: d } = Ut(), i = ht(), m = Qt(), [b] = Gt(), f = zt(), y = q(), h = "fit-content", g = xe(
    y.breakpoints.up(Oe)
  ), P = t.isFlexibleArea ?? !1, S = t.intervalLength === ce.OneOff, E = Et(Pa), V = ct(s), [k, $] = dt(), [C, N] = pe(), [O] = X(), [A, G] = it(), T = x.useMemo(() => V(j.first(k) ?? null), [V, k]), _ = m.get("office"), { timezone: D, isLoading: H } = ja(_), z = o ?? {
    days: [],
    openTime: 0,
    closeTime: 24,
    closedDays: []
  }, me = Zt({
    businessHours: z,
    selectedOffice: k
  }), fe = x.useMemo(
    () => Jt(me),
    [me]
  ), { data: w } = Kt(
    i.orgSlug,
    t,
    T?._id ?? ""
  ), U = Xt({
    businessHours: z,
    timezone: D,
    bookingMode: Ee.Date,
    selectedOffice: k,
    occupiedDaysIntervals: Yt(
      w?.occupancy,
      w?.resource.size ?? 0,
      C ?? 0,
      D
    )
  }), Y = ot({
    businessHours: z,
    timezone: D,
    closedDaysIntervals: fe,
    bookingMode: Ee.Date
  }), Le = W.now().startOf("day"), xt = Le.plus({ months: ea }), $e = (c) => {
    if (c == null)
      return !1;
    const L = W.fromJSDate(c).startOf("day");
    return L >= Le && L <= xt;
  }, gt = m.get("startDate"), [v, je] = Wa({
    startDateParam: gt,
    businessHours: z,
    closedDaysIntervals: fe,
    timezone: H ? void 0 : D
  }), Pe = m.get("endDate"), [I, ee] = x.useState(null);
  x.useEffect(() => {
    if (!P) {
      ee(null);
      return;
    }
    if (Pe) {
      const c = lt(Pe);
      if (c) {
        ee(c.endOf("day"));
        return;
      }
    }
    v && ee(v.endOf("day"));
  }, [P, Pe, v]), x.useEffect(() => {
    !P || !v || !I || v > I && ee(v);
  }, [P, v, I]);
  const { localeFormat: ve } = ue(), {
    data: R,
    mutate: Be,
    reset: Me,
    isPending: te,
    error: Te,
    isError: ae
  } = ba({
    mutationFn: (c) => ta(c.orgSlug, c.body)
  }), Re = !!(!v || P && !I || j.isEmpty(k) || te || ae), yt = !!t?.packsConfig?.packs?.length, bt = P && !O, jt = !O, Fe = (c) => {
    c && N(c);
  }, { flexibleAreaErrorDays: Pt, hasFlexibleAreaCapacityError: Z } = Ea(Te), vt = (c) => {
    if (!c || !$e(c) || Y(c))
      return;
    const L = W.fromJSDate(c).startOf("day");
    v && L < v && je(c), ee(L);
  };
  x.useEffect(() => {
    if (!v || !C || !t?._id || !T?._id || P && !I)
      return;
    const c = {
      startDate: J(v),
      location: T._id,
      quantity: C,
      ...O != null ? { packQuantity: O } : {}
    };
    P && I && (c.endDate = J(I));
    const L = S ? { ...c, feeId: t._id } : {
      ...c,
      planId: t._id,
      ...A.length ? { addOns: A } : {}
    }, Ct = { orgSlug: i.orgSlug ?? "", body: L };
    Be(Ct);
  }, [
    Be,
    T?._id,
    S,
    P,
    v,
    I,
    D,
    i.orgSlug,
    t,
    C,
    O,
    A
  ]), x.useEffect(() => {
    if (!v)
      return;
    const c = m.get("startDate"), L = J(v);
    c !== L && ze({ startDate: L });
  }, [m, v]), x.useEffect(() => {
    if (!P || !I)
      return;
    const c = m.get("endDate"), L = J(I);
    c !== L && ze({ endDate: L });
  }, [m, I, P]), x.useEffect(() => {
    j.isEmpty(k) && Me();
  }, [k, Me]), x.useEffect(() => {
    if (!C)
      return;
    const c = aa(A, C);
    c !== A && G(c);
  }, [C, A, G]), x.useEffect(() => {
    l(
      (c) => Ra(c, {
        isSuccess: !!R && !ae,
        isError: ae
      })
    );
  }, [R, ae, l]);
  const Se = Da();
  x.useEffect(() => {
    R && T && Se.trackECommerceEvent(
      "view_item",
      [
        {
          id: t._id,
          name: t.name,
          location: T,
          listingType: "plan",
          resourceType: t.type ?? "",
          price: R.subtotal ?? 0,
          quantity: C
        }
      ],
      { ensureTrackedOnce: !0 }
    );
  }, [Se, t, R, T]);
  const Tt = t.approval ? Ze.DETAILS_REQUEST_TO_BUY_BUTTON : Ze.DETAILS_BUY_NOW_BUTTON, Ne = sa.serialize(A) ?? void 0, He = na({
    startDate: v ? J(v) : void 0,
    ...P && I ? { endDate: J(I) } : {},
    office: k,
    amenities: m.get("amenities"),
    type: m.get("type"),
    quantity: C,
    ...O != null ? { packQuantity: O } : {},
    ...Ne ? { addOns: Ne } : {},
    language: b,
    ...f
  }), We = t.approval ? n("static-request-button-title", {
    defaultValue: "Request"
  }) : n("static-checkout-button-title", {
    defaultValue: "Checkout"
  }), qe = (c) => {
    c.stopPropagation(), Se.trackECommerceEvent("add_to_cart", [
      {
        id: t._id,
        name: t.name,
        location: T ?? void 0,
        listingType: "plan",
        resourceType: t.type ?? "",
        price: R?.subtotal ?? 0,
        quantity: C
      }
    ]), d(Tt, fa(t, v?.toISO()));
  }, St = /* @__PURE__ */ e.jsxs(
    u,
    {
      flexWrap: "wrap",
      direction: "row",
      gap: 2,
      alignItems: "center",
      justifyContent: "space-between",
      children: [
        /* @__PURE__ */ e.jsx(
          u,
          {
            alignItems: "start",
            gap: 2,
            children: /* @__PURE__ */ e.jsxs(
              u,
              {
                direction: "row",
                alignItems: "center",
                gap: 3,
                alignSelf: "start",
                children: [
                  /* @__PURE__ */ e.jsx(
                    tt,
                    {
                      plan: t,
                      planSummary: R,
                      isSummaryLoading: te,
                      startDate: v,
                      endDate: I,
                      showTag: !1
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    st,
                    {
                      icon: E ? "fa fa-chevron-down" : "fa fa-chevron-up",
                      sx: { fontSize: "inherit" }
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          Ue,
          {
            "rnd-data-id": `${ne.PUBLIC}-${K.DETAILS_BOOK_NOW_BUTTON}`,
            "data-test": "buy-button",
            size: "large",
            variant: "contained",
            disabled: Re,
            to: `checkout?${He}`,
            sx: {
              ...Je,
              alignSelf: "center",
              marginInlineStart: "auto"
            },
            onClick: qe,
            children: We
          }
        )
      ]
    }
  ), kt = /* @__PURE__ */ e.jsxs(
    u,
    {
      flexWrap: "wrap",
      direction: "row",
      gap: 4,
      alignItems: "center",
      justifyContent: E ? void 0 : "space-between",
      children: [
        /* @__PURE__ */ e.jsxs(
          u,
          {
            direction: "row",
            flexWrap: "wrap",
            gap: 4,
            width: "100%",
            marginInlineEnd: "auto",
            children: [
              ae ? /* @__PURE__ */ e.jsx(F, { height: y.typography.pxToRem(10) }) : (
                // NOTE: Omit startDate / endDate for the expanded panel since it is only shown in the collapsed panel header
                /* @__PURE__ */ e.jsx(
                  tt,
                  {
                    plan: t,
                    planSummary: R,
                    isSummaryLoading: te,
                    showSecondaryLabel: g
                  }
                )
              ),
              j.size(t.locations) > 1 || j.isEmpty(t.locations) ? /* @__PURE__ */ e.jsx(
                ia,
                {
                  items: j.isEmpty(t.locations) ? s : t.locations,
                  isLoading: r,
                  selectedValue: T ? [T] : null,
                  onChange: (c) => $(j.map(c, "_id")),
                  fullWidth: !0,
                  noOptionsText: n("static-location-select-no-options", {
                    defaultValue: "No locations found"
                  }),
                  placeholderText: n("static-location-select-placeholder-choose-location", {
                    defaultValue: "Choose location"
                  }),
                  multiple: !1
                }
              ) : null,
              yt ? /* @__PURE__ */ e.jsx(qa, { plan: t }) : null,
              bt ? (
                // Flexible Area Layout: Visit dates (start + end) on one row, number of people below
                /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(
                    F,
                    {
                      sx: {
                        flex: 1,
                        minWidth: 0,
                        maxWidth: {
                          xs: "50%",
                          sm: "none"
                        },
                        [y.breakpoints.up("sm")]: {
                          flex: "none",
                          width: h
                        }
                      },
                      children: /* @__PURE__ */ e.jsx(
                        De,
                        {
                          onChange: Fe,
                          min: 1,
                          max: 99,
                          labelPlacement: "top",
                          label: n("static-number-of-people-label", {
                            defaultValue: "Number of people"
                          }),
                          value: C,
                          disabled: !T,
                          slotProps: {
                            htmlInput: {
                              "data-test": "quantity-input"
                            },
                            formHelperText: {
                              sx: {
                                minHeight: "0 !important",
                                height: 0
                              }
                            }
                          },
                          sx: {
                            width: {
                              xs: "100%",
                              sm: h
                            },
                            "& .MuiInputBase-root": {
                              width: {
                                xs: "100%",
                                sm: h
                              }
                            },
                            "& .MuiInputBase-input": {
                              textAlign: "center !important",
                              width: {
                                xs: "100%",
                                sm: "auto"
                              },
                              minWidth: {
                                xs: 0,
                                sm: g ? y.typography.pxToRem(50) : y.typography.pxToRem(100)
                              }
                            },
                            "& .MuiFormHelperText-root": {
                              height: 0
                            }
                          },
                          error: Z
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(u, { width: "100%", children: [
                    /* @__PURE__ */ e.jsxs(
                      u,
                      {
                        gap: 2,
                        width: "100%",
                        display: "flex",
                        direction: "row",
                        alignItems: "flex-start",
                        children: [
                          /* @__PURE__ */ e.jsx(
                            ke,
                            {
                              "rnd-data-id": `${ne.PUBLIC}-${K.SEARCH_DATE_PICKER}`,
                              "data-test": "start-date",
                              value: v?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                              datePickerProps: {
                                calendar: U,
                                format: ve.split(" ")[0],
                                focusedDate: v?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                                enableMouseWheel: !1
                              },
                              disabled: !T,
                              sx: {
                                ...Ce(!0),
                                flex: 1
                              },
                              onChange: (c) => {
                                c.value == null || !T || !$e(c.value) || Y(c.value) || je(c.value);
                              },
                              error: Z,
                              reserveMessageSpace: !1,
                              label: n("static-visit-dates-label", {
                                defaultValue: "Visit dates"
                              }),
                              labelPlacement: "top"
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            p,
                            {
                              variant: "body",
                              color: T ? y.palette.text.primary : y.palette.text.faded,
                              sx: {
                                flexShrink: 0,
                                alignSelf: "flex-end",
                                marginBottom: 2
                              },
                              children: n("static-to-label", { defaultValue: "to" })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            ke,
                            {
                              error: Z,
                              "rnd-data-id": `${ne.PUBLIC}-${K.SEARCH_END_DATE_PICKER}`,
                              "data-test": "end-date",
                              value: I?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                              disabled: !T,
                              datePickerProps: {
                                calendar: U,
                                format: ve.split(" ")[0],
                                focusedDate: I?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                                enableMouseWheel: !1
                              },
                              sx: {
                                ...Ce(!0),
                                flex: 1,
                                "& .MuiInputLabel-root": {
                                  visibility: "hidden"
                                }
                              },
                              onChange: (c) => vt(c.value),
                              reserveMessageSpace: !1,
                              label: "Visit dates",
                              labelPlacement: "top"
                            }
                          )
                        ]
                      }
                    ),
                    Z ? /* @__PURE__ */ e.jsx(
                      p,
                      {
                        marginTop: 1,
                        variant: "caption",
                        color: "error",
                        children: wa(
                          Pt,
                          n,
                          b,
                          D
                        )
                      }
                    ) : null
                  ] })
                ] })
              ) : (
                // Standard Layout: Start date + Quantity on one row
                /* @__PURE__ */ e.jsxs(
                  u,
                  {
                    gap: 2,
                    width: "100%",
                    display: "flex",
                    direction: "row",
                    marginInlineEnd: "auto",
                    children: [
                      /* @__PURE__ */ e.jsx(
                        ke,
                        {
                          "rnd-data-id": `${ne.PUBLIC}-${K.SEARCH_DATE_PICKER}`,
                          "data-test": "start-date",
                          value: v?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                          datePickerProps: {
                            calendar: U,
                            format: ve.split(" ")[0],
                            focusedDate: v?.setZone("local", { keepLocalTime: !0 }).toJSDate(),
                            enableMouseWheel: !1
                          },
                          sx: {
                            ...Ce(!0),
                            flex: 1.6
                          },
                          onChange: (c) => {
                            c.value != null && je(c.value);
                          },
                          reserveMessageSpace: !1,
                          label: n("static-date-picker-start-date-label", {
                            defaultValue: "Start Date"
                          }),
                          labelPlacement: "top"
                        }
                      ),
                      jt ? /* @__PURE__ */ e.jsx(
                        De,
                        {
                          onChange: Fe,
                          min: 1,
                          max: 99,
                          labelPlacement: "top",
                          label: n("static-quantity-title", {
                            defaultValue: "Quantity"
                          }),
                          value: C,
                          slotProps: {
                            htmlInput: {
                              "data-test": "quantity-input"
                            },
                            formHelperText: {
                              sx: {
                                minHeight: "0 !important",
                                height: 0
                              }
                            }
                          },
                          sx: {
                            flex: 1,
                            width: "100%",
                            "& .MuiInputBase-input": {
                              textAlign: "center !important",
                              width: "100%"
                            },
                            "& .MuiFormHelperText-root": {
                              height: 0
                            }
                          }
                        }
                      ) : null
                    ]
                  }
                )
              )
            ]
          }
        ),
        g ? /* @__PURE__ */ e.jsx(
          Ue,
          {
            fullWidth: !0,
            "rnd-data-id": `${ne.PUBLIC}-${K.DETAILS_BOOK_NOW_BUTTON}`,
            "data-test": "checkout-button",
            size: "large",
            variant: "contained",
            disabled: Re,
            to: `checkout?${He}`,
            sx: Je,
            onClick: qe,
            children: We
          }
        ) : null,
        T?._id && !Te ? /* @__PURE__ */ e.jsx(
          Ma,
          {
            plan: t,
            planSummaryResult: R,
            isPlanSummaryLoading: te,
            daysInPeriod: Ia(v, I)
          }
        ) : null,
        Z ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            Lt,
            {
              sx: {
                width: "100%"
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            La,
            {
              summary: R,
              isSummaryLoading: te,
              invoicingVat: a
            }
          )
        ] })
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(
    va,
    {
      errorMessage: Z ? void 0 : Te?.message,
      collapsedPanelContent: St,
      children: kt
    }
  );
}, Ua = ({
  title: t,
  subtitle: s,
  priceLabel: r,
  resourceLabel: o,
  savePercent: a,
  isSelected: l,
  onSelect: n,
  "data-test": d
}) => {
  const i = q(), { t: m } = M(), b = (f) => {
    (f.key === "Enter" || f.key === " ") && (f.preventDefault(), n());
  };
  return /* @__PURE__ */ e.jsxs(
    nt,
    {
      "data-test": d,
      elevation: 0,
      role: "button",
      tabIndex: 0,
      "aria-pressed": l,
      onClick: n,
      onKeyDown: b,
      sx: {
        cursor: "pointer",
        flex: 1,
        bgcolor: l ? i.palette.background.main : i.palette.background.paper,
        overflow: "hidden",
        minWidth: i.typography.pxToRem(170),
        border: `1px solid ${i.palette.border.base}`
      },
      children: [
        /* @__PURE__ */ e.jsx(
          F,
          {
            sx: {
              bgcolor: a != null && a > 0 ? i.palette.success.main : null,
              minHeight: i.spacing(i.spacingVariants.L),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: `1px solid ${i.palette.border.base}`
            },
            children: a && a > 0 ? /* @__PURE__ */ e.jsx(
              p,
              {
                variant: B.TAB_HEADER,
                textAlign: "center",
                color: i.palette.getContrastText(i.palette.success.main),
                children: m("static-plan-pack-save-badge", {
                  defaultValue: "save {{percent}}%",
                  percent: a
                })
              }
            ) : /* @__PURE__ */ e.jsx(
              p,
              {
                variant: B.BODY,
                textAlign: "center",
                children: `${r}/${o}`
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsxs(
          u,
          {
            alignItems: "center",
            sx: { py: 2, px: 3 },
            children: [
              /* @__PURE__ */ e.jsx(
                p,
                {
                  variant: B.TAB_HEADER,
                  fontSize: i.typography.pxToRem(16),
                  textAlign: "center",
                  sx: {
                    ...we,
                    width: "100%"
                  },
                  children: t
                }
              ),
              /* @__PURE__ */ e.jsx(
                p,
                {
                  variant: B.CAPTION,
                  color: "text.primary",
                  textAlign: "center",
                  children: s
                }
              ),
              /* @__PURE__ */ e.jsx(
                p,
                {
                  variant: B.H4,
                  sx: { paddingTop: 3 },
                  children: r
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Qa = ({ plan: t }) => {
  const { t: s } = M(), { formatPackPrice: r } = ye(t), [, o] = pe(), [a, l] = X(), n = q(), d = x.useMemo(
    () => [mt(t), ...t.packsConfig?.packs || []],
    [t]
  );
  return /* @__PURE__ */ e.jsxs(
    u,
    {
      gap: 3,
      "data-test": "plan-available-pack-cards",
      children: [
        /* @__PURE__ */ e.jsx(p, { variant: B.H4, children: s("static-plan-available-packs-title", {
          defaultValue: "Available packs"
        }) }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            sx: {
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(${n.typography.pxToRem(170)}, 1fr))`,
              gap: 4
            },
            children: d.map((i) => {
              const m = i.quantity ? Ie(t.price, i.unitPrice) : null, b = i.quantity || 1;
              return /* @__PURE__ */ e.jsx(
                Ua,
                {
                  "data-test": `plan-pack-card-qty-${b}`,
                  title: de(s, t, i),
                  subtitle: t.isFlexibleArea ? ft(b, s) : null,
                  priceLabel: r(i),
                  savePercent: m,
                  resourceLabel: t.isFlexibleArea ? s("static-format-day", { defaultValue: "day" }) : s("static-format-item", { defaultValue: "item" }),
                  isSelected: a === i.quantity,
                  onSelect: () => {
                    l(i.quantity), o(1);
                  }
                },
                i.quantity
              );
            })
          }
        )
      ]
    }
  );
}, bs = () => {
  const { t } = M(), s = x.useRef(null), r = x.useRef(!1), o = ht(), { data: a } = ra(o.orgSlug, o.planId), l = a.intervalLength === ce.OneOff, {
    settings: {
      businessHours: n,
      billing: { invoicingVat: d }
    }
  } = rt(), { data: i, isLoading: m } = oa({
    orgSlug: o.orgSlug
  }), b = ct(i), [f, y] = dt();
  x.useEffect(() => {
    j.size(a.locations) === 1 ? (j.size(f) !== 1 || j.first(f) !== a.locations[0]._id) && y([a.locations[0]._id]) : j.size(f) > 1 && y(null);
  }, [f, y, a.locations]);
  const h = x.useMemo(() => b(j.first(f) ?? null), [b, f]), g = h?.physicalAddress?.mapUrl, P = h?.businessHours ?? n, S = x.useMemo(() => {
    let w = j.isEmpty(a.locations) ? i : a.locations;
    h && (w = [h]);
    const U = j.filter(w, la);
    return j.map(
      U,
      (Y) => [
        parseFloat(Y.physicalAddress.latitude),
        parseFloat(Y.physicalAddress.longitude)
      ]
    );
  }, [a.locations, h, i]), E = q(), V = xe(
    E.breakpoints.up(Oe)
  ), k = xe(E.breakpoints.down("sm")), [$] = X(), [C] = pe(), N = C ?? 1, [O, A] = x.useState(
    Ye
  );
  x.useEffect(() => {
    A(Ye);
  }, [a._id]);
  const G = a?.intervalLength === ce.OneOff && a?.packsConfig?.packs?.length, T = Ve({ plan: a, packQuantity: $ }), _ = (j.first(a?.passes)?.count ?? 0) * (T?.quantity ?? 1), D = j.some(a.credits, (w) => w.type === oe.Hour), H = j.some(a.credits, (w) => w.type === oe.Coin), be = j.chain(a.credits).filter((w) => w.type === oe.Hour).sumBy("count").multiply(T?.quantity ?? 1).value(), z = j.chain(a.credits).filter((w) => w.type === oe.Coin).sumBy("count").multiply(T?.quantity ?? 1).value();
  ya(), x.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
  const me = x.useMemo(() => S.length > 0 ? S[0] : [0, 0], [S]);
  x.useEffect(() => {
    const w = setTimeout(() => {
      if (!(!r.current || !s.current || !S || j.isEmpty(S)))
        try {
          s.current.fitBounds(S, { animate: !1 }), s.current.getZoom() > 5 && s.current.setZoom(s.current.getZoom() - 1, { animate: !1 });
        } catch {
        }
    }, 100);
    return () => clearTimeout(w);
  }, [S]);
  const fe = a.isFlexibleArea && !T;
  return /* @__PURE__ */ e.jsxs(
    u,
    {
      position: "relative",
      width: "100%",
      marginX: k ? 0 : "auto",
      paddingBlock: k ? 0 : 8,
      paddingInline: k ? 0 : 8,
      gap: 12,
      children: [
        /* @__PURE__ */ e.jsx(ca, { page: "detailed" }),
        /* @__PURE__ */ e.jsxs(
          nt,
          {
            sx: {
              paddingBlockStart: 4,
              paddingBlockEnd: k ? 0 : 12,
              width: "100%",
              maxWidth: E.typography.pxToRem(Ke),
              marginX: "auto"
            },
            elevation: 4,
            children: [
              /* @__PURE__ */ e.jsxs(
                F,
                {
                  sx: {
                    marginBlockStart: -4,
                    position: "relative",
                    "& ul": {
                      marginBlock: 0
                    }
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      ua,
                      {
                        sx: {
                          position: "absolute",
                          top: 24,
                          left: 24
                        }
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      pa,
                      {
                        title: t(`plan-${a._id}-name`, {
                          defaultValue: a.name
                        }),
                        images: a.images,
                        entity: "plan"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                u,
                {
                  width: "100%",
                  height: "100%",
                  maxWidth: E.typography.pxToRem(Ke),
                  marginInline: "auto",
                  paddingInline: { xs: 6, sm: 8, md: 12 },
                  paddingBlockStart: { xs: 6, sm: 8, md: 12 },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      u,
                      {
                        direction: "column",
                        columnGap: 12,
                        children: /* @__PURE__ */ e.jsxs(
                          u,
                          {
                            direction: "row",
                            flexWrap: V ? "nowrap" : "wrap",
                            gap: 6,
                            children: [
                              /* @__PURE__ */ e.jsxs(
                                u,
                                {
                                  width: "100%",
                                  maxWidth: V ? `calc(100% - ${E.typography.pxToRem(366)})` : void 0,
                                  marginBlockEnd: 8,
                                  rowGap: 8,
                                  children: [
                                    /* @__PURE__ */ e.jsxs(u, { gap: 2, children: [
                                      /* @__PURE__ */ e.jsx(
                                        p,
                                        {
                                          "data-test": "plan-name",
                                          variant: "h1",
                                          children: t(`plan-${a._id}-name`, {
                                            defaultValue: a.name
                                          })
                                        }
                                      ),
                                      h?.physicalAddress?.formattedAddress ? /* @__PURE__ */ e.jsxs(
                                        u,
                                        {
                                          direction: "row",
                                          gap: 2,
                                          alignItems: "center",
                                          children: [
                                            /* @__PURE__ */ e.jsx(
                                              p,
                                              {
                                                "data-test": "plan-details-address",
                                                variant: "body",
                                                children: t(
                                                  `location-${h.accountId}-${h._id}-formatted-address`,
                                                  {
                                                    defaultValue: h.physicalAddress.formattedAddress
                                                  }
                                                )
                                              }
                                            ),
                                            g ? /* @__PURE__ */ e.jsx(
                                              $t,
                                              {
                                                "data-test": "google-maps-link",
                                                href: g,
                                                target: "_blank",
                                                children: /* @__PURE__ */ e.jsx(
                                                  u,
                                                  {
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    children: /* @__PURE__ */ e.jsx(
                                                      ha,
                                                      {
                                                        src: ga,
                                                        style: da(E)
                                                      }
                                                    )
                                                  }
                                                )
                                              }
                                            ) : null
                                          ]
                                        }
                                      ) : null,
                                      G ? /* @__PURE__ */ e.jsx(Qa, { plan: a }) : null,
                                      a.description ? (
                                        // INFO: Wrapping in Typography in order for custom fonts to work
                                        /* @__PURE__ */ e.jsx(p, { variant: "body", children: /* @__PURE__ */ e.jsx(
                                          Ta,
                                          {
                                            "data-test": "plan-description",
                                            content: t(`plan-${a._id}-description`, {
                                              defaultValue: a.description
                                            }),
                                            color: "inherit",
                                            sx: {
                                              "*": {
                                                // force transparent background as text might be unreadable in dark theme
                                                background: "transparent !important",
                                                maxWidth: "100%",
                                                whiteSpace: "pre-wrap"
                                              }
                                            }
                                          }
                                        ) })
                                      ) : null
                                    ] }),
                                    /* @__PURE__ */ e.jsxs(u, { gap: 4, children: [
                                      !fe && l && _ > 0 && a.passesValidityPeriod?.intervalCount ? /* @__PURE__ */ e.jsxs(u, { children: [
                                        /* @__PURE__ */ e.jsx(p, { variant: "h4", children: t("static-plan-day-passes-validity-period-label", {
                                          defaultValue: "Day Passes Validity Period"
                                        }) }),
                                        /* @__PURE__ */ e.jsx(
                                          p,
                                          {
                                            "data-test": "plan-day-passes-validity-period",
                                            variant: "body",
                                            width: "max-content",
                                            children: t("static-plan-day-passes-validity-period-hint", {
                                              defaultValue: "{{monthsCount}} months after the selected Start Date",
                                              monthsCount: a.passesValidityPeriod?.intervalCount ?? 1
                                            })
                                          }
                                        )
                                      ] }) : null,
                                      /* @__PURE__ */ e.jsx(p, { variant: "h4", children: t("static-plan-whats-included-label", {
                                        defaultValue: "What's included"
                                      }) }),
                                      /* @__PURE__ */ e.jsxs(
                                        u,
                                        {
                                          direction: "row",
                                          gap: 4,
                                          flexWrap: "wrap",
                                          sx: {
                                            "& .MuiChip-label": {
                                              textTransform: "uppercase",
                                              fontWeight: 600
                                            }
                                          },
                                          children: [
                                            D ? /* @__PURE__ */ e.jsx(
                                              re,
                                              {
                                                "data-test": "plan-hour-credits",
                                                arrow: !0,
                                                placement: "top",
                                                title: /* @__PURE__ */ e.jsx(p, { children: t("static-hour-credits-hint", {
                                                  defaultValue: "Hourly allowance for bookings, valid across various services."
                                                }) }),
                                                children: /* @__PURE__ */ e.jsx(
                                                  Q,
                                                  {
                                                    label: `${t("static-hour-credits-label", {
                                                      defaultValue: "time credits"
                                                    })}: ${be || t("static-unlimited-label", {
                                                      defaultValue: "Unlimited"
                                                    })}`
                                                  }
                                                )
                                              }
                                            ) : null,
                                            H ? /* @__PURE__ */ e.jsx(
                                              re,
                                              {
                                                "data-test": "plan-coin-credits",
                                                arrow: !0,
                                                placement: "top",
                                                title: /* @__PURE__ */ e.jsx(p, { children: t("static-coin-credits-hint", {
                                                  defaultValue: "Credits that can be applied across multiple services and bookings."
                                                }) }),
                                                children: /* @__PURE__ */ e.jsx(
                                                  Q,
                                                  {
                                                    label: `${t("static-coin-credits-label", {
                                                      defaultValue: "value credits"
                                                    })}: ${z}`
                                                  }
                                                )
                                              }
                                            ) : null,
                                            _ > 0 ? /* @__PURE__ */ e.jsx(
                                              re,
                                              {
                                                "data-test": "plan-passes",
                                                arrow: !0,
                                                placement: "top",
                                                title: /* @__PURE__ */ e.jsx(p, { sx: { textTransform: "lowercase" }, children: `${_} ${t(
                                                  "static-day-passes-label",
                                                  {
                                                    defaultValue: "Day Passes"
                                                  }
                                                )}` }),
                                                children: /* @__PURE__ */ e.jsx(
                                                  Q,
                                                  {
                                                    label: `${t("static-day-passes-label", {
                                                      defaultValue: "Day Passes"
                                                    })}: ${_}`
                                                  }
                                                )
                                              }
                                            ) : null,
                                            j.isEmpty(a.discounts) ? null : /* @__PURE__ */ e.jsx(
                                              re,
                                              {
                                                "data-test": "plan-discounts",
                                                arrow: !0,
                                                placement: "top",
                                                title: /* @__PURE__ */ e.jsx(p, { children: a.discounts?.join(", ") }),
                                                children: /* @__PURE__ */ e.jsx(
                                                  Q,
                                                  {
                                                    label: t("static-discounted-rates-label", {
                                                      defaultValue: "Discounted rates"
                                                    })
                                                  }
                                                )
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      a.amenities?.length ? /* @__PURE__ */ e.jsx(
                                        ma,
                                        {
                                          dataTestId: "plan-amenities",
                                          amenities: a.amenities
                                        }
                                      ) : null
                                    ] }),
                                    /* @__PURE__ */ e.jsx(
                                      Ba,
                                      {
                                        plan: a,
                                        planQty: N,
                                        isInitialSummaryError: O.isInitialSummaryError
                                      }
                                    ),
                                    !j.isEmpty(S) && !k ? /* @__PURE__ */ e.jsx(
                                      F,
                                      {
                                        "data-test": "leaflet-map-container",
                                        height: {
                                          xs: E.typography.pxToRem(360),
                                          xl: E.typography.pxToRem(540)
                                        },
                                        sx: {
                                          borderRadius: "12px",
                                          overflow: "hidden",
                                          marginBlockEnd: { xl: 6 }
                                        },
                                        children: /* @__PURE__ */ e.jsxs(
                                          xa,
                                          {
                                            ref: s,
                                            center: me,
                                            zoom: S.length > 1 ? 13 : 19,
                                            zoomControl: !1,
                                            scrollWheelZoom: !1,
                                            style: { height: "100%", width: "100%" },
                                            "rnd-data-id": K.DETAILS_MAP_COMPONENT,
                                            children: [
                                              /* @__PURE__ */ e.jsx(
                                                Aa,
                                                {
                                                  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                                  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                }
                                              ),
                                              j.map(S, (w, U) => /* @__PURE__ */ e.jsx(
                                                _a,
                                                {
                                                  position: w
                                                },
                                                `marker-${U}`
                                              )),
                                              /* @__PURE__ */ e.jsx(Oa, { position: "topright" })
                                            ]
                                          }
                                        )
                                      }
                                    ) : null
                                  ]
                                }
                              ),
                              V ? /* @__PURE__ */ e.jsx(
                                at,
                                {
                                  plan: a,
                                  orgLocations: i,
                                  isOrgLocationsQueryLoading: m,
                                  effectiveBusinessHours: P,
                                  invoicingVat: d,
                                  onStatusChange: A
                                }
                              ) : null
                            ]
                          }
                        )
                      }
                    ),
                    k || !V ? /* @__PURE__ */ e.jsx(
                      at,
                      {
                        plan: a,
                        orgLocations: i,
                        isOrgLocationsQueryLoading: m,
                        effectiveBusinessHours: P,
                        invoicingVat: d,
                        onStatusChange: A
                      }
                    ) : null
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
export {
  bs as Plan
};
