import { aL as me, r as l, j as t, aQ as st, aI as de } from "./webc-vendor-CvrN3tmw.js";
import { M as p, p as q, o as ot, d as H, e as De, a2 as rt, j as it, s as Pe } from "./webc-vendor-core-BCd2u07H.js";
import { a as Re } from "./webc-vendor-query-ByFZOUhz.js";
import { l as f } from "./webc-vendor-lodash-BJv5POtF.js";
import { aQ as ct, x as K, aE as lt, I as G, aD as Le, q as ut, aC as _e, m as dt, n as mt, e as pt, aV as gt, z as ft, u as yt, ay as ht, ax as xt, h as bt, f as Pt, N as St, aY as vt, J as kt, aB as It, L as Ct, a6 as Y, az as jt, P as At, t as Tt } from "./webc-web-component-qMWWbTiu.js";
import { T as Ft, f as Et } from "./webc-TooltipSwitch-C9UYN4QY.js";
import { u as Vt, a as Dt, c as Rt, d as Lt, f as _t } from "./webc-checkoutParamsFlattening-C20WeRWb.js";
import { c as we, v as wt, u as Me, S as Mt, a as Bt, P as Ot, D as Ut, b as $t, p as Nt, m as qt, d as Qt, e as Wt, f as zt, g as Yt, l as Gt, n as Ht, h as Kt, i as Xt, j as Jt, k as Zt, o as ea, C as ta, q as aa, r as na, s as sa, t as oa } from "./webc-CheckoutContactBillingSection-Bn4OEmal.js";
import { c as ae, e as ne, g as Be } from "./webc-utils-BJ_c_xG-.js";
import { d as Oe } from "./webc-vendor-react-router-Tvle1imR.js";
import { D as Fe } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { T as ra } from "./webc-TagGroup-BL2n8Dtu.js";
import { S as B } from "./webc-HtmlComponent-KnqjQ7IO.js";
import { b as ia, A as ca, S as la } from "./webc-utils.flexibleArea-DMYCw1VC.js";
import { T as ua } from "./webc-TotalPriceInfo-CvrQs3Jy.js";
import { u as pe } from "./webc-vendor-i18n-BICogURo.js";
import { D as da } from "./webc-DebouncedNumberField-Cz7H5PCC.js";
import { g as ma, u as pa, a as Ee } from "./webc-util.packs-CGO_QIYC.js";
import { u as ga } from "./webc-vendor-mui-C8wQ-7jG.js";
import { u as fa } from "./webc-useECommerceTracking-CWRT-Ysg.js";
import { c as ya, a as ha } from "./webc-styles-BMqjai7V.js";
var Se = /* @__PURE__ */ ((o) => (o.Universal = "universal", o.Subscription = "subscription", o))(Se || {});
const xa = ({
  startDate: o,
  location: a,
  endDate: n
}) => {
  const e = me(we), c = Oe(), m = l.useRef(e), u = l.useCallback((d) => {
    ae(d, "planSummary"), m.current(ne(d));
  }, []), {
    mutate: h,
    isSuccess: Q,
    isPending: s,
    data: A,
    reset: P
  } = Re({
    mutationFn: (d) => ct(d.orgSlug, d.body),
    onError: u
  });
  return l.useEffect(() => {
    m.current = e;
  }, [e]), {
    checkoutSummary: l.useCallback(
      (d, W, T, F, O = 1, C = null, E, V, S) => {
        const U = d?.intervalLength === K.Month, $ = {
          discountCode: F ?? "",
          startDate: o,
          ...d?.isFlexibleArea && { endDate: n },
          planId: U ? d._id : void 0,
          feeId: d?.intervalLength === K.OneOff ? d._id : void 0,
          paymentMethod: W,
          cardType: T,
          location: a,
          quantity: O,
          ...C != null ? { packQuantity: C } : {},
          ...E && { memberId: E },
          ...V && { email: V },
          ...U && S?.length ? { addOns: S } : {}
        };
        h({
          orgSlug: c.orgSlug ?? "",
          body: $
        });
      },
      [o, n, a, h, c.orgSlug]
    ),
    isSummarySuccess: Q,
    isLoadingSummary: s,
    summaryResult: A,
    resetSummary: P
  };
}, ba = ({
  planId: o,
  summary: a,
  isLoading: n
}) => {
  const { t: e, i18n: c } = pe(), m = a && !f.isEmpty(a?.periodStart) && !f.isEmpty(a?.periodEnd), u = Be(o, a), h = wt(u, a);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      B,
      {
        left: /* @__PURE__ */ t.jsxs(
          p,
          {
            variant: "body",
            fontWeight: "inherit",
            children: [
              e("static-summary-prorated-amount-label", {
                defaultValue: "Prorated Amount"
              }),
              ":"
            ]
          }
        ),
        right: /* @__PURE__ */ t.jsx(
          ua,
          {
            dataTestId: "subtotal-price",
            amount: h,
            showAmounts: !n
          }
        )
      }
    ),
    m ? /* @__PURE__ */ t.jsx(
      q,
      {
        width: "100%",
        textAlign: "right",
        children: /* @__PURE__ */ t.jsxs(p, { variant: "caption", children: [
          e("static-summary-for-period-label", {
            defaultValue: "For"
          }),
          " ",
          lt(a, c?.language)
        ] })
      }
    ) : null
  ] });
}, Pa = 99, Sa = 1, va = ({
  isFlexibleArea: o,
  quantity: a,
  quantityEnabled: n,
  quantityExtended: e,
  handleQuantityChange: c,
  onEditClick: m
}) => {
  const { t: u } = pe();
  return /* @__PURE__ */ t.jsx(
    B,
    {
      left: /* @__PURE__ */ t.jsx(
        p,
        {
          variant: "body",
          title: "Quantity",
          justifyContent: "flex-end",
          children: o ? u("static-visitors-title", {
            defaultValue: "People"
          }) : u("static-quantity-title", {
            defaultValue: "Quantity"
          })
        }
      ),
      right: /* @__PURE__ */ t.jsx(q, { display: "flex", children: n && e ? /* @__PURE__ */ t.jsx(
        da,
        {
          onChange: c,
          min: Sa,
          max: Pa,
          value: a,
          slotProps: {
            htmlInput: {
              "data-test": "quantity-input"
            }
          },
          sx: {
            width: {
              xs: "min-content",
              md: "min-content",
              lg: "100%"
            },
            "& .MuiInputBase-input": {
              textAlign: "center !important"
            },
            // Helper text is taking up space even when not used - we are hiding it here
            "& .MuiFormHelperText-root": {
              height: 0,
              margin: 0
            }
          }
        }
      ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          G,
          {
            gap: 3,
            variant: "body",
            fontWeight: "bold",
            alignItems: "center",
            icon: o ? "fal fa-user" : "far fa-ticket-alt",
            "data-test": "quantity-display",
            sx: {
              display: "flex",
              alignItems: "center"
            },
            children: a
          }
        ),
        !e && n ? /* @__PURE__ */ t.jsx(
          ot,
          {
            variant: "text",
            color: "secondary",
            sx: { marginInline: 1 },
            iconProps: { icon: "fas fa-pen" },
            "aria-label": "Edit quantity",
            "data-test": "quantity-edit-button",
            onClick: m
          }
        ) : null
      ] }) })
    }
  );
}, ka = 2, Ia = (o, a) => {
  const { discountPercentage: n, promotionPeriodMonths: e } = o, c = n === 100, m = e === 12;
  return c && m ? a("static-summary-promo-period-value-free-yearly", {
    defaultValue: "Free yearly plan"
  }) : c ? a("static-summary-promo-period-value-100-off", {
    defaultValue: "Free for {{months}} month(s)",
    months: e
  }) : m ? a("static-summary-promo-period-value-12-months", {
    defaultValue: "{{discountPercentage}}% off yearly plan",
    discountPercentage: n
  }) : a("static-summary-promo-period-value", {
    defaultValue: "{{discountPercentage}}% off for {{months}} month(s)",
    months: e,
    discountPercentage: n
  });
}, Ve = (o, a, n) => {
  if (!n)
    return {
      dateFormat: null,
      paymentDate: null,
      dateUTC: null
    };
  const e = a?.discountPercentage === 100, c = a?.type === Se.Subscription, m = Fe.fromISO(n, { zone: "utc" });
  let u = Fe.fromISO(n, { zone: "utc" });
  return c && e && (u = u.plus({
    months: a?.promotionPeriodMonths ?? 0
  })), {
    dateUTC: m,
    dateFormat: o(m),
    paymentDate: o(u)
  };
}, Ca = ({
  isLoadingSummary: o,
  isPaymentMethodSelected: a,
  summary: n,
  plan: e,
  office: c,
  startDate: m,
  endDate: u,
  quantityEnabled: h,
  checkoutRule: Q
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const { t: s } = pe(), A = ga(), P = n?.discountCode, X = P?.type === Se.Subscription, [d] = Le(), { formatCurrency: W, formatDate: T } = ut(), [F, O] = _e(), [C, E] = l.useState(!1), {
    dateFormat: V,
    paymentDate: S,
    dateUTC: U
  } = Ve(T, P, m), { dateFormat: $, dateUTC: ge } = Ve(
    T,
    P,
    u
  ), g = ma({ plan: e, packQuantity: d }), D = V === $, fe = e?.isFlexibleArea && !D, R = e?.isFlexibleArea && !g ? [V, !D && $].filter(Boolean).join(" - ") : V, J = e?.amenities, ye = s(`location-${c?.accountId}-${c?._id}-name`, {
    defaultValue: c?.name
  }), j = c?.physicalAddress ? s(`location-${c?.accountId}-${c?._id}-formatted-address`, {
    defaultValue: c?.physicalAddress.formattedAddress
  }) : null, y = n?.processingFeeLine, L = (y?.vatPercent ?? 0) / 100 * (y?.unitPrice ?? 0), { shouldShowPaymentIntegration: _, shouldInvoiceImmediately: z } = Me({
    office: c?._id ?? null,
    price: n?.totalAmount,
    requiresApproval: e?.approval,
    checkoutRule: Q
  }), Z = Be(e?.originId, n), x = e?.intervalLength === K.Month, w = l.useMemo(
    () => f.sumBy(f.filter(n?.invoiceLines, { isDeposit: !0 }), "total"),
    [n?.invoiceLines]
  );
  l.useEffect(() => {
    h || E(!1);
  }, [h]);
  const { formatPackUnitPrice: se } = pa(e), ee = se(g);
  return /* @__PURE__ */ t.jsxs(H, { spacing: 6, children: [
    /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsxs(
      q,
      {
        boxShadow: 2,
        borderRadius: 3,
        overflow: "hidden",
        children: [
          /* @__PURE__ */ t.jsxs(q, { position: "relative", children: [
            /* @__PURE__ */ t.jsx(
              Mt,
              {
                image: e?.cardImage,
                alt: "Plan"
              }
            ),
            /* @__PURE__ */ t.jsx(ra, { children: e?.approval ? /* @__PURE__ */ t.jsx(
              rt,
              {
                sx: dt,
                label: s("static-requires-approval-label", {
                  defaultValue: "Requires Approval"
                })
              }
            ) : null })
          ] }),
          /* @__PURE__ */ t.jsxs(
            q,
            {
              paddingInline: 6,
              paddingBlockStart: 8,
              paddingBlockEnd: 6,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              children: [
                /* @__PURE__ */ t.jsx(
                  p,
                  {
                    variant: "h3",
                    color: "text.secondary",
                    "data-test": "plan-name",
                    sx: { marginBottom: 1 },
                    children: s(`plan-${e?._id}-name`, {
                      defaultValue: e?.name
                    })
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  p,
                  {
                    variant: "body",
                    "data-test": "office-address",
                    color: "text.primary",
                    marginBottom: 4,
                    title: j,
                    sx: {
                      ...mt,
                      WebkitLineClamp: ka
                    },
                    children: j ?? ye
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  H,
                  {
                    direction: "row",
                    spacing: 4,
                    children: J?.length ? /* @__PURE__ */ t.jsx(
                      H,
                      {
                        direction: "row",
                        flexWrap: "wrap",
                        gap: 3,
                        children: J.map((i) => /* @__PURE__ */ t.jsx(
                          Ft,
                          {
                            arrow: !0,
                            placement: "top",
                            title: s(`amenity-${i._id}-title`, {
                              defaultValue: i.title
                            }),
                            children: /* @__PURE__ */ t.jsx(q, { children: /* @__PURE__ */ t.jsx(
                              it,
                              {
                                icon: `fa ${i.icon ?? "fa-badge-check"}`,
                                sx: { fontSize: A.typography.pxToRem(16) }
                              }
                            ) })
                          },
                          i._id
                        ))
                      }
                    ) : null
                  }
                ),
                x ? /* @__PURE__ */ t.jsx(
                  p,
                  {
                    variant: "body",
                    title: "Price breakdown",
                    justifyContent: "flex-end",
                    display: "flex",
                    "data-test": "plan-rate",
                    marginBlockStart: 2,
                    children: `${W(e?.price)}/${s("static-rate-month-label", {
                      defaultValue: "month"
                    })}`
                  }
                ) : null,
                /* @__PURE__ */ t.jsx(Pe, { sx: { marginY: 2 } }),
                /* @__PURE__ */ t.jsx(
                  B,
                  {
                    left: e?.isFlexibleArea && !g ? /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        title: "Visit date(s)",
                        justifyContent: "flex-end",
                        children: s("static-summary-visit-dates-label", {
                          defaultValue: "Visit date(s)"
                        })
                      }
                    ) : /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        title: "Start date",
                        justifyContent: "flex-end",
                        children: s("static-summary-start-date-label", {
                          defaultValue: "Start Date"
                        })
                      }
                    ),
                    right: /* @__PURE__ */ t.jsx(
                      G,
                      {
                        gap: 3,
                        variant: "body",
                        fontWeight: "bold",
                        alignItems: "center",
                        icon: "far fa-calendar-check",
                        "data-test": "formatted-start-date",
                        sx: {
                          whiteSpace: "nowrap",
                          ...fe && { fontSize: A.typography.pxToRem(12) }
                        },
                        children: R
                      }
                    )
                  }
                ),
                x ? /* @__PURE__ */ t.jsx(
                  B,
                  {
                    left: /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        title: "First payment",
                        justifyContent: "flex-end",
                        children: s("static-summary-first-payment-date-label", {
                          defaultValue: "First Payment Date"
                        })
                      }
                    ),
                    right: /* @__PURE__ */ t.jsx(
                      G,
                      {
                        gap: 3,
                        variant: "body",
                        fontWeight: "bold",
                        alignItems: "center",
                        icon: "far fa-calendar-check",
                        "data-test": "first-payment-date",
                        children: S
                      }
                    )
                  }
                ) : null,
                x ? /* @__PURE__ */ t.jsx(
                  B,
                  {
                    left: /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        title: "Billing period",
                        justifyContent: "flex-end",
                        children: s("static-summary-billing-period-label", {
                          defaultValue: "Billing Period"
                        })
                      }
                    ),
                    right: /* @__PURE__ */ t.jsx(
                      G,
                      {
                        gap: 3,
                        variant: "body",
                        fontWeight: "bold",
                        icon: "far fa-calendar-check",
                        "data-test": "billing-period",
                        compact: !0,
                        children: s("static-summary-billed-every-months-label", {
                          defaultValue: "Billed every {{monthsCount}} months",
                          monthsCount: e?.intervalCount ?? 1
                        })
                      }
                    )
                  }
                ) : null,
                P?.isApplied && X ? /* @__PURE__ */ t.jsx(
                  B,
                  {
                    left: /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        title: "Promo period",
                        justifyContent: "flex-end",
                        children: s("static-summary-promo-period-label", {
                          defaultValue: "Promo Period"
                        })
                      }
                    ),
                    right: /* @__PURE__ */ t.jsx(
                      p,
                      {
                        variant: "body",
                        fontWeight: "bold",
                        "data-test": "promo-period-value",
                        children: Ia(P, s)
                      }
                    )
                  }
                ) : null,
                g ? null : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                  /* @__PURE__ */ t.jsx(Pe, { sx: { marginY: 2 } }),
                  /* @__PURE__ */ t.jsx(
                    va,
                    {
                      isFlexibleArea: !!e?.isFlexibleArea,
                      quantity: F,
                      quantityEnabled: h,
                      quantityExtended: C,
                      handleQuantityChange: (i) => i && O(i),
                      onEditClick: () => E(!0)
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsx(Pe, { sx: { marginY: 2 } }),
                /* @__PURE__ */ t.jsx(
                  Bt,
                  {
                    processingFeeComponent: /* @__PURE__ */ t.jsx(
                      Ot,
                      {
                        processingFeeVATAmount: L,
                        processingFeeVATPercent: y?.vatPercent,
                        processingFeeLinePrice: y?.unitPrice,
                        processingFeeLinePercent: y?.percent,
                        shouldUsePaymentIntegration: _
                      }
                    ),
                    setupFeesComponent: /* @__PURE__ */ t.jsx(
                      la,
                      {
                        setupFees: e?.setupFees,
                        summary: n
                      }
                    ),
                    basePriceComponent: x ? /* @__PURE__ */ t.jsx(
                      ba,
                      {
                        planId: e.originId,
                        summary: n,
                        isLoading: o
                      }
                    ) : null,
                    planPackPriceComponent: g ? /* @__PURE__ */ t.jsx(
                      B,
                      {
                        left: /* @__PURE__ */ t.jsx(
                          p,
                          {
                            "data-test": "plan-pack-price-breakdown",
                            variant: "caption",
                            fontWeight: 400,
                            children: e?.isFlexibleArea ? s("static-flex-area-price-details-pack-price-label", {
                              defaultValue: "{{packName}} ({{price}}/day)",
                              packName: Ee(s, e, g),
                              price: ee
                            }) : s("static-plan-price-details-pack-price-label", {
                              defaultValue: "{{packName}} ({{price}}/item)",
                              packName: Ee(s, e, g),
                              price: ee
                            })
                          }
                        )
                      }
                    ) : null,
                    addOnsComponent: e?._id ? /* @__PURE__ */ t.jsx(
                      ca,
                      {
                        planId: e._id,
                        summary: n
                      }
                    ) : null,
                    flexibleAreaPriceComponent: !d && e?.isFlexibleArea && e?.price ? /* @__PURE__ */ t.jsx(
                      B,
                      {
                        left: /* @__PURE__ */ t.jsxs(
                          p,
                          {
                            "data-test": "flexible-area-price-breakdown",
                            variant: "caption",
                            fontWeight: 400,
                            children: [
                              W(e.price),
                              " x ",
                              ia(U, ge),
                              " ",
                              s("static-format-days", { defaultValue: "days" }),
                              " x ",
                              F,
                              " ",
                              s("static-format-people", { defaultValue: "people" })
                            ]
                          }
                        )
                      }
                    ) : null,
                    price: e?.price,
                    deposit: w,
                    isItemLoaded: !!e,
                    summary: n,
                    isLoadingSummary: o,
                    isPaymentMethodSelected: a,
                    shouldUsePaymentIntegration: _,
                    invoiceLine: Z
                  }
                ),
                e?.approval ? /* @__PURE__ */ t.jsx(
                  G,
                  {
                    paddingBlockStart: 2,
                    icon: "far fa-info-circle",
                    alignItems: "center",
                    children: /* @__PURE__ */ t.jsx(p, { variant: "caption", children: s("static-summary-payment-processed-hint", {
                      defaultValue: "Payment will be processed only after your request has been approved"
                    }) })
                  }
                ) : null,
                z ? null : /* @__PURE__ */ t.jsx(
                  G,
                  {
                    paddingBlockStart: 2,
                    icon: "far fa-info-circle",
                    alignItems: "center",
                    children: /* @__PURE__ */ t.jsx(p, { variant: "caption", children: s("static-summary-invoiced-late-hint", {
                      defaultValue: "You will be invoiced later"
                    }) })
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    !a && !e?.approval ? /* @__PURE__ */ t.jsx(
      Ut,
      {
        summary: n,
        isLoadingSummary: o
      }
    ) : null
  ] });
}, ja = (o, a) => `checkout_page_${Et(o ? "Send Request" : a ? "Pay & Get Started" : "Get Started")}`, Aa = (o, a, n) => {
  const e = a ? n("static-pay-and-get-started-button-title", {
    defaultValue: "Pay & Get Started"
  }) : n("static-get-started-button-title", {
    defaultValue: "Get Started"
  });
  return o ? n("static-send-request-button-title", {
    defaultValue: "Send Request"
  }) : e;
}, Ta = (o, a, n) => {
  const e = a ? n("static-get-started-button-title", {
    defaultValue: "Get Started"
  }) : n("static-buy-button-title", {
    defaultValue: "Buy"
  });
  return o ? n("static-send-request-button-title", {
    defaultValue: "Send Request"
  }) : e;
}, Ka = () => {
  const { t: o } = pe(), a = Oe(), n = pt(), { data: e } = gt(a.orgSlug, a.planId), c = l.useRef(null), m = l.useRef(null), u = l.useRef(null), [h, Q] = l.useState(), [s, A] = l.useState(null), P = s !== null, X = ft(), d = yt(), { data: W } = ht(a.orgSlug), T = W?.recoveryEmailConfig?.enabled ?? !1, F = xt(bt()), [O] = Pt(), { isRecoveryMode: C, recoverySessionId: E, recoveryEmail: V } = $t(), { data: S, isLoading: U } = Vt(
    a.orgSlug,
    { planId: a.planId }
  ), $ = l.useMemo(() => {
    const r = S ? S.documents : d.settings.community.signupTermsNonMember;
    return f.union(r, e?.legalDocuments);
  }, [S, d.settings.community.signupTermsNonMember, e?.legalDocuments]), { data: ge } = Dt({
    orgSlug: a.orgSlug,
    documentIds: $,
    enabled: !U
  }), g = X.get("startDate"), D = X.get("endDate"), [fe] = St(), R = fe?.[0] ?? null, [J] = vt(), [ye] = kt(), j = me(we), y = me(Nt), [L] = _e(), [_] = Le(), [z] = It(), [Z, x] = st(sa), w = de(qt), se = de(Qt), { data: ee } = Ct({ orgSlug: a.orgSlug }), i = l.useMemo(
    () => f.find(ee, (r) => r._id === R),
    [ee, R]
  ), { checkoutSummary: ve, isLoadingSummary: he, summaryResult: v, resetSummary: Ue } = xa(
    {
      startDate: g,
      location: R,
      endDate: D
    }
  ), oe = de(Wt), { handleEmailChange: $e } = zt({
    productId: a.planId,
    productType: "plan",
    amount: v?.totalAmount,
    checkoutSnapshot: {
      startDate: g ?? void 0,
      endDate: D ?? void 0,
      // flexible area plan checkout
      location: R ?? void 0,
      quantity: L,
      locale: O ?? void 0
    },
    utms: F
  }), Ne = fa(), re = Y(
    (r, {
      trackOnce: k,
      transactionId: I,
      shouldAddPaymentType: b
    } = {}) => Ne.trackECommerceEvent(
      r,
      [
        {
          id: e?._id || "",
          name: e?.name || "",
          listingType: "plan",
          resourceType: e?.type || "",
          price: v?.subtotal || 0,
          tax: f.sumBy(v?.vatAmounts, (te) => te.total || 0),
          location: i,
          quantity: L
        }
      ],
      {
        discountCode: oe,
        // NOTE: We do not use the local variable, as it might not have the right value if we are just adding the payment details.
        paymentType: b ? "Credit Card" : void 0,
        transactionId: I,
        ensureTrackedOnce: k
      }
    )
  ), { mutate: qe } = Re({
    mutationFn: (r) => _t(r.orgSlug, r.body),
    onError: (r) => {
      ae(r, "checkoutPlan"), j(ne(r)), x(!1);
    },
    onSuccess: ({ data: r }) => {
      const k = f.concat(r?.fees, r?.memberships)[0]?._id, I = !!r.isFlexibleArea, b = O ? `?${Tt({ language: O })}` : "", te = e.intervalLength === K.OneOff && e.packsConfig?.packs?.find((nt) => nt.quantity === _);
      re(e?.approval ? "generate_lead" : "purchase", { transactionId: k }), n(`/${a.orgSlug}/plans/${a.planId}/success${b}`, {
        state: {
          plan: e,
          locationName: o(`location-${i?.accountId}-${i?._id}-name`, {
            defaultValue: i?.name
          }),
          locationAddress: i?.physicalAddress ? o(`location-${i?.accountId}-${i?._id}-formatted-address`, {
            defaultValue: i?.physicalAddress.formattedAddress
          }) : null,
          startDate: g,
          memberActionsToken: r.memberActionsToken,
          hasInvitedUser: r.hasInvitedUser,
          ...te && { selectedPack: te },
          quantity: L,
          isFlexibleArea: I,
          ...I && {
            flexibleAreaBooking: r.flexibleAreaBooking,
            endDate: D
          },
          accountCreation: r.accountCreation
        }
      }), x(!1);
    }
  }), ke = Me({
    office: R,
    price: v?.totalAmount,
    requiresApproval: e?.approval,
    checkoutRule: S
  }), {
    shouldShowPaymentIntegration: ie,
    shouldCapturePayment: xe,
    shouldSavePaymentDetails: Qe,
    hasPaymentIntegration: We,
    isLoadingBillingFlow: ce,
    billingFlowError: N
  } = ke, { authorizePaymentResult: M, isAuthorizePaymentPending: ze } = Yt({
    summary: v,
    office: i?._id,
    paymentMethod: s?.type,
    shouldCapturePayment: xe,
    shouldSavePaymentDetails: Qe,
    onError: (r) => {
      ae(r, "authorizePayment"), y(ne(r));
    }
  }), Ye = !ce && !N && (ie ? !!M : !0), Ge = ce || he || Z || ze || U;
  l.useEffect(() => {
    N && (ae(N, "billingFlow"), j(ne(N)));
  }, [N, j]);
  const [He, be] = l.useState(!0), Ke = Y((r) => {
    A(r), j([]), re("add_payment_info", { shouldAddPaymentType: r !== null }), Ue(), be(!1);
  }), Xe = Y(() => {
    A(null), y([]), be(!0);
  }), Je = l.useCallback(
    async (r, k) => {
      try {
        return await Rt(a.orgSlug, {
          intentId: r,
          intentType: k
        }), !0;
      } catch (I) {
        return ae(I, "createCheckoutIntent"), y(ne(I)), x(!1), !1;
      }
    },
    [a.orgSlug, y, x]
  ), Ie = Y(async () => {
    if (Z || ce || N)
      return;
    x(!0);
    const k = {
      checkout: {
        body: {
          ...f.omit(u.current?.getFormValues(), "marketingConsent"),
          location: R ?? void 0,
          planId: e?.intervalLength === K.Month ? e?._id : void 0,
          feeId: e?.intervalLength === K.OneOff ? e?._id : void 0,
          startDate: g,
          ...e?.isFlexibleArea && { endDate: D },
          quantity: L,
          ..._ && { packQuantity: _ },
          ...z.length ? { addOns: z } : {},
          signupTermsNonMember: $,
          paymentMethod: s?.type,
          cardType: s?.card?.brand,
          discountCode: oe,
          ...C && E && { recoverySessionId: E },
          ...se && { anonymousSessionId: se },
          ...w.type === "existing" && {
            memberId: w.memberId
          },
          ...F && { utms: F }
        },
        orgSlug: a.orgSlug ?? ""
      },
      tracking: {
        price: e?.price || 0,
        tax: f.sumBy(v?.vatAmounts, (b) => b.total || 0)
      },
      search: {
        amenities: J.length ? J.join(",") : null,
        type: ye,
        officeId: i?._id ?? null,
        locationName: o(`location-${i?.accountId}-${i?._id}-name`, {
          defaultValue: i?.name
        }),
        locationAddress: i?.physicalAddress ? o(`location-${i?.accountId}-${i?._id}-formatted-address`, {
          defaultValue: i?.physicalAddress.formattedAddress
        }) : null,
        periodStart: g
      }
    };
    let I;
    if (s?.type === oa.IDEAL && M) {
      const b = M.paymentIntent ? "paymentIntent" : "setupIntent";
      if (!await Je(
        M[b],
        b
      ))
        return;
      I = Lt(k);
    }
    if (M && P && f.isFunction(h)) {
      const b = await h(
        M.clientSecret,
        s?.id,
        I
      );
      if (b?.error) {
        y([b.error]), x(!1);
        return;
      }
    }
    f.set(k, "checkout.body.paymentIntent", M?.paymentIntent), f.set(k, "checkout.body.setupIntent", M?.setupIntent), qe(k.checkout);
  }), Ze = de(Gt), et = Y(() => Ze);
  Ht();
  const tt = Y(() => {
    A(null), Q(void 0), y([]), be(!0);
  }), le = Kt(a.orgSlug, u, tt), { step: Ce, billing: at } = le, je = Xt(le.matchState), Ae = me(Jt), ue = !f.isEmpty(at.billingSnapshot);
  l.useEffect(() => {
    Ae(ue);
  }, [ue, Ae]), l.useEffect(() => (ve(
    e,
    Zt(s?.type),
    s?.card ? s.card?.brand.toUpperCase() : "",
    ue ? oe : "",
    L,
    _,
    w.type === "existing" ? w.memberId : void 0,
    w.email,
    z
  ), () => j([])), [
    e,
    ve,
    j,
    s,
    oe,
    L,
    _,
    w,
    ue,
    z
  ]), l.useEffect(() => {
    v && re("begin_checkout", { trackOnce: !0 });
  }, [re, v]);
  const Te = Ta(!!e?.approval, We, o);
  return ea({
    contactSnapshot: le.contactSnapshot,
    checkoutFormRef: u,
    orgSlug: a.orgSlug,
    enabled: T && !C
  }), /* @__PURE__ */ t.jsxs(
    H,
    {
      sx: ya,
      ref: c,
      children: [
        /* @__PURE__ */ t.jsx(De, { sx: ha, children: /* @__PURE__ */ t.jsxs(
          H,
          {
            overflow: "hidden",
            rowGap: 4,
            children: [
              /* @__PURE__ */ t.jsx(
                ta,
                {
                  checkoutFormRef: u,
                  stepper: le,
                  legalDocuments: ge,
                  completeTitle: Te,
                  shouldShowPaymentIntegration: ie,
                  onFinalCheckout: Ie,
                  onEmailChange: C || !T ? void 0 : $e,
                  initialEmail: V,
                  checkoutInProgress: Z,
                  showMarketingConsent: T && !C,
                  isLoadingSummary: he,
                  isLoadingBillingFlow: ce,
                  isBillingFlowError: !!N
                }
              ),
              ie && !je && /* @__PURE__ */ t.jsx(
                aa,
                {
                  stepNumber: 3,
                  title: o("static-payment-form-title", { defaultValue: "Payment Details" }),
                  state: Ce === "payment" ? "active" : "future"
                }
              ),
              ie && !je && Ce === "payment" && /* @__PURE__ */ t.jsx(
                H,
                {
                  spacing: 4,
                  ref: m,
                  children: /* @__PURE__ */ t.jsx(
                    na,
                    {
                      completePaymentTitle: Aa(
                        !!e?.approval,
                        xe,
                        o
                      ),
                      topLayoutRef: c,
                      completeTitle: Te,
                      billingFlowOptions: ke,
                      canSubmit: Ye,
                      onContinue: Ke,
                      onCancel: Xe,
                      onCheckout: Ie,
                      setConfirmIntentHandler: Q,
                      isLoading: Ge,
                      paymentMethod: s,
                      summary: v,
                      trackEventKey: ja(!!e?.approval, xe),
                      getBillingFormType: et
                    }
                  )
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ t.jsx(
          q,
          {
            width: "100%",
            maxWidth: (r) => ({
              sm: r.typography.pxToRem(jt),
              lg: r.typography.pxToRem(320)
            }),
            position: { xs: "initial", lg: "sticky" },
            top: 12,
            children: e ? /* @__PURE__ */ t.jsx(
              Ca,
              {
                isLoadingSummary: he,
                isPaymentMethodSelected: P,
                summary: v,
                plan: e,
                office: i,
                startDate: g,
                endDate: D,
                quantityEnabled: He,
                checkoutRule: S
              }
            ) : null
          }
        ),
        /* @__PURE__ */ t.jsx(At, { page: "checkout" })
      ]
    }
  );
};
export {
  Ka as CheckoutPlan
};
