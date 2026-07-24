import { aL as ue, r as u, j as e, aQ as ot, aI as ce } from "./webc-vendor-BjE1NNvQ.js";
import { d as _, ac as at, ad as st, ae as nt, af as rt, ag as it, ah as ct, p as w, M as B, a3 as ut, a4 as lt, a5 as mt, e as Be, a2 as dt, j as pt, s as be } from "./webc-vendor-core-n5KM3lsu.js";
import { D as Se } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { a as Le } from "./webc-vendor-query-PvhNqagV.js";
import { l as i } from "./webc-vendor-lodash-QZMGaMCX.js";
import { av as gt, u as De, q as ft, B as xe, m as yt, n as ht, I as Ae, e as kt, z as bt, ax as xt, h as St, ay as Ct, f as It, ao as vt, as as jt, ad as Pt, D as Fe, a6 as H, az as Tt, P as Et, t as Rt } from "./webc-web-component-QV_kTZ_O.js";
import { T as At, f as Ft } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { u as wt, a as Bt, c as Lt, e as Dt, b as Mt } from "./webc-checkoutParamsFlattening-BjncwS0g.js";
import { c as Me, u as $e, S as $t, a as Vt, P as qt, D as _t, b as zt, p as Ot, m as Ut, d as Nt, e as Wt, f as Gt, g as Ht, h as Kt, i as Yt, j as Qt, k as we, l as Zt, n as Xt, o as Jt, C as eo, q as to, r as oo, s as ao, t as so } from "./webc-CheckoutContactBillingSection-CIKLWiRr.js";
import { u as no } from "./webc-useGetTimezone--nBDhcAt.js";
import { c as K, e as Y, f as ro } from "./webc-utils-DpmTJmtV.js";
import { d as Ve } from "./webc-vendor-react-router-W8U6ip5z.js";
import { R as io, a as co } from "./webc-ResourceCapacity-BYULhYq1.js";
import { T as uo } from "./webc-TagGroup-BEzzZsLT.js";
import { S as lo } from "./webc-HtmlComponent-DFkNEig6.js";
import { L as mo } from "./webc-LocalizationDate-Bg1t26_G.js";
import { u as le } from "./webc-vendor-i18n-DYvJO9nR.js";
import { az as po } from "./webc-vendor-mui-BXZK0LVO.js";
import { R as go, a as fo } from "./webc-RoomLayoutSummary-oZ6AuALj.js";
import { f as yo } from "./webc-util.resource-Dn4W5OJn.js";
import { u as ho } from "./webc-util.extras-DU4UoYi0.js";
import { u as ko } from "./webc-useECommerceTracking-C3BLjDP-.js";
import { c as bo, a as xo } from "./webc-styles-BjJZ-HfY.js";
const So = ({
  start: r,
  end: t,
  location: n,
  extras: o
}) => {
  const m = ue(Me), a = Ve(), c = u.useRef(m), p = u.useCallback((f) => {
    K(f, "resourceSummary"), c.current(Y(f));
  }, []), {
    mutate: S,
    isSuccess: L,
    isPending: l,
    data: E
  } = Le({
    mutationFn: (f) => gt(f.orgSlug, f.body),
    onError: p
  }), h = u.useRef(l);
  return u.useEffect(() => {
    c.current = m, h.current = l;
  }, [m, l]), {
    checkoutSummary: u.useCallback(
      (f, z, O, D, v) => {
        h.current || S({
          orgSlug: a.orgSlug ?? "",
          body: {
            discountCode: f ?? "",
            start: r,
            end: t,
            resourceId: a.resourceId,
            count: 1,
            paymentMethod: z,
            cardType: O,
            location: n,
            ...D && { memberId: D },
            ...v && { email: v },
            ...o && Object.keys(o).length ? { extras: o } : {}
          }
        });
      },
      [S, r, t, n, o, a.resourceId, a.orgSlug]
    ),
    isSummarySuccess: L,
    isLoadingSummary: l,
    summaryResult: E
  };
}, Co = (r, t) => {
  const n = Se.fromJSDate(r).toUTC(), o = Se.utc(), m = i.sortBy(t, (c) => i.get(c, "hours", -1)).reverse(), a = i.head(m) || null;
  if (o < n.minus({ hours: a?.hours ?? 0 }))
    return a;
  for (let c of i.slice(m, 1)) {
    const p = i.get(c, "hours", 0);
    if (o < n.minus({ hours: p }))
      return c;
  }
  return i.last(m) || null;
}, Io = {
  nonce: void 0,
  onResize: void 0,
  onResizeCapture: void 0
}, vo = ({
  conditions: r,
  periodStart: t,
  ...n
}) => {
  const { t: o } = le(), m = Co(t.toJSDate(), r ?? []), a = i.sortBy(r, (c) => i.get(c, "hours", -1)).reverse();
  return /* @__PURE__ */ e.jsx(
    _,
    {
      "data-test": "cancellation-info",
      className: "rnd-cancellation-info",
      ...n,
      children: /* @__PURE__ */ e.jsx(
        at,
        {
          ...Io,
          sx: {
            padding: 0,
            [`& .${po.root}:before`]: {
              flex: 0,
              padding: 0
            }
          },
          children: i.map(a, (c, p) => {
            const S = i.size(r) - 1, L = p === 0, l = p > 0 && p < S, E = p === S, h = i.isEqual(c, m);
            return /* @__PURE__ */ e.jsxs(st, { children: [
              /* @__PURE__ */ e.jsxs(nt, { children: [
                /* @__PURE__ */ e.jsx(
                  rt,
                  {
                    variant: h ? "filled" : "outlined",
                    color: h ? "primary" : void 0,
                    sx: {
                      marginY: 2,
                      marginX: 0
                    }
                  }
                ),
                /* @__PURE__ */ e.jsx(it, {})
              ] }),
              /* @__PURE__ */ e.jsxs(
                ct,
                {
                  variant: "body",
                  display: "flex",
                  justifyContent: "space-between",
                  sx: {
                    paddingLeft: 4,
                    paddingRight: 0,
                    paddingY: 1,
                    fontWeight: h ? "medium" : void 0
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs(
                      w,
                      {
                        marginInlineEnd: 2,
                        display: "inline-block",
                        children: [
                          L ? /* @__PURE__ */ e.jsx(B, { variant: "body", children: o("static-cancellation-policy-hours-before-booking-starts", {
                            defaultValue: "{{hoursCount}} hours or more before booking starts",
                            hoursCount: c.hours
                          }) }) : null,
                          l ? /* @__PURE__ */ e.jsx(B, { variant: "body", children: o("static-cancellation-policy-hours-range-before-booking-starts", {
                            defaultValue: "{{hoursCount1}} - {{hoursCount2}} hours before booking starts",
                            hoursCount1: r[p - 1].hours,
                            hoursCount2: c.hours
                          }) }) : null,
                          E ? /* @__PURE__ */ e.jsx(B, { variant: "body", children: o("static-cancellation-policy-hours-less-before-booking-starts", {
                            defaultValue: "{{hoursCount}} hours or less before booking starts",
                            hoursCount: r[p - 1].hours
                          }) }) : null
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      w,
                      {
                        "data-test": "cancellation-fee",
                        display: "inline-block",
                        sx: {
                          flexShrink: 0,
                          textAlign: "end"
                        },
                        children: /* @__PURE__ */ e.jsxs(B, { variant: "body", children: [
                          c.cancellationFeePercent,
                          "%",
                          " ",
                          o("static-fee-label", {
                            defaultValue: "fee"
                          })
                        ] })
                      }
                    )
                  ]
                }
              )
            ] }, `${c.hours}-${c.cancellationFeePercent}-${p}`);
          })
        }
      )
    }
  );
}, jo = ({
  periodStart: r,
  conditions: t
}) => {
  const { t: n } = le();
  return i.some(t) && t ? /* @__PURE__ */ e.jsxs(
    ut,
    {
      elevation: 0,
      disableGutters: !0,
      "data-test": "cancelation-policy-accordion",
      sx: {
        "&::before": { display: "none" }
      },
      children: [
        /* @__PURE__ */ e.jsx(
          lt,
          {
            "data-test": "cancelation-policy-summary",
            title: n("static-cancellation-policy-section-title", {
              defaultValue: "Cancellation Policy"
            }),
            titleProps: { variant: "groupTitle", fontWeight: "bold", paddingInlineStart: 2 },
            sx: {
              "& .MuiAccordionSummary-content": {
                marginBlock: 4.5
              }
            }
          }
        ),
        /* @__PURE__ */ e.jsx(mt, { "data-test": "cancelation-policy-details", children: /* @__PURE__ */ e.jsx(
          vo,
          {
            periodStart: r,
            conditions: t
          }
        ) })
      ]
    }
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ e.jsx(e.Fragment, {})
  );
}, Po = 2, To = ({
  isLoadingSummary: r,
  isPaymentMethodSelected: t,
  summary: n,
  periodStart: o,
  periodEnd: m,
  resource: a,
  cancellationConditions: c,
  layout: p,
  guestCount: S,
  checkoutRule: L
}) => {
  const { t: l } = le(), E = De(), { formatDate: h, formatDateTime: g } = ft(), { shouldShowPaymentIntegration: f, shouldInvoiceImmediately: z } = $e({
    office: a.office._id,
    price: n?.totalAmount,
    requiresApproval: a.rate?.bookingPolicy.requiresApproval,
    checkoutRule: L
  }), { name: O, area: D, size: v, amenities: R, bookingMode: M, _id: Q } = a, Z = M === xe.Date, C = M === xe.Date ? h(o) : g(o), j = M === xe.Date ? h(m) : g(m, !0), me = ro(o, m, l, M), de = Z && Math.round(m.diff(o, "days").toObject().days) === 1 ? C : `${C} - ${j}`, pe = `${C} - ${j}`, U = Z ? de : pe, X = l(`location-${a.office.accountId}-${a.office._id}-name`, {
    defaultValue: a.office.name
  }), $ = a.office.physicalAddress ? l(`location-${a.office.accountId}-${a.office._id}-formatted-address`, {
    defaultValue: a.office.physicalAddress.formattedAddress
  }) : null, I = !!a.rate?.bookingPolicy.requiresApproval, P = n?.processingFeeLine, A = i.first(n?.fees)?.fee?.plan, y = i.find(
    n?.invoiceLines,
    (d) => d.plan === P?.plan
  ), ee = i.find(n?.invoiceLines, (d) => d.plan === A), V = ho(n), te = u.useMemo(
    () => V.map((d) => /* @__PURE__ */ e.jsx(
      go,
      {
        id: d.plan,
        name: d.description,
        quantity: d.quantity,
        price: d.price,
        typographySx: { fontWeight: "bold" }
      },
      d.plan
    )),
    [V]
  );
  return /* @__PURE__ */ e.jsxs(_, { spacing: 6, children: [
    /* @__PURE__ */ e.jsx(Be, { children: /* @__PURE__ */ e.jsxs(
      w,
      {
        boxShadow: 2,
        borderRadius: 3,
        overflow: "hidden",
        children: [
          /* @__PURE__ */ e.jsxs(w, { position: "relative", children: [
            /* @__PURE__ */ e.jsx(
              $t,
              {
                image: a.cardImage,
                alt: "Bookable Resource"
              }
            ),
            /* @__PURE__ */ e.jsx(uo, { children: I ? /* @__PURE__ */ e.jsx(
              dt,
              {
                sx: yt,
                label: l("static-requires-approval-label", {
                  defaultValue: "Requires Approval"
                })
              }
            ) : null })
          ] }),
          /* @__PURE__ */ e.jsxs(
            w,
            {
              paddingInline: 6,
              paddingBlockStart: 8,
              paddingBlockEnd: 6,
              children: [
                /* @__PURE__ */ e.jsx(
                  B,
                  {
                    variant: "h3",
                    color: "text.secondary",
                    "data-test": "resource-name",
                    sx: { marginBottom: 1 },
                    children: l(`resource-${Q}-name`, {
                      defaultValue: O
                    })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  B,
                  {
                    variant: "body",
                    "data-test": "office-address",
                    color: "text.primary",
                    marginBottom: 4,
                    title: $,
                    sx: {
                      ...ht,
                      WebkitLineClamp: Po
                    },
                    children: $ ?? X
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  _,
                  {
                    direction: "row",
                    spacing: 4,
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    children: [
                      v ? /* @__PURE__ */ e.jsx(io, { size: v }) : null,
                      D ? /* @__PURE__ */ e.jsx(
                        co,
                        {
                          area: D,
                          culture: E.settings.calendar.culture
                        }
                      ) : null,
                      R?.length ? /* @__PURE__ */ e.jsx(
                        _,
                        {
                          direction: "row",
                          flexWrap: "wrap",
                          gap: 3,
                          children: R.map((d) => /* @__PURE__ */ e.jsx(
                            At,
                            {
                              arrow: !0,
                              placement: "top",
                              title: l(`amenity-${d._id}-title`, {
                                defaultValue: d.title
                              }),
                              children: /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(
                                pt,
                                {
                                  icon: `fa ${d.icon ?? "fa-badge-check"}`,
                                  sx: (k) => ({ fontSize: k.typography.pxToRem(16) })
                                }
                              ) })
                            },
                            d._id
                          ))
                        }
                      ) : null
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  fo,
                  {
                    layout: p,
                    capacity: yo(a, p),
                    guestCount: S,
                    "data-test": "checkout-summary-room-layout",
                    sx: { marginBlockStart: 2 }
                  }
                ),
                /* @__PURE__ */ e.jsx(be, { sx: { marginBlockStart: 2 } }),
                /* @__PURE__ */ e.jsx(
                  jo,
                  {
                    conditions: c,
                    periodStart: o
                  }
                ),
                /* @__PURE__ */ e.jsx(be, { sx: { marginBlockEnd: 2 } }),
                /* @__PURE__ */ e.jsx(
                  lo,
                  {
                    left: /* @__PURE__ */ e.jsx(
                      Ae,
                      {
                        variant: "body",
                        fontWeight: "bold",
                        icon: "far fa-calendar-check",
                        alignItems: "flex-start",
                        children: /* @__PURE__ */ e.jsx(mo, { dateTime: U })
                      }
                    ),
                    right: /* @__PURE__ */ e.jsx(
                      B,
                      {
                        variant: "body",
                        title: "Booking duration",
                        justifyContent: "flex-end",
                        "data-test": "formatted-duration",
                        children: me
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e.jsx(be, { sx: { marginY: 2 } }),
                /* @__PURE__ */ e.jsx(
                  Vt,
                  {
                    processingFeeComponent: /* @__PURE__ */ e.jsx(
                      qt,
                      {
                        processingFeeVATAmount: y?.vatAmount,
                        processingFeeVATPercent: y?.vatPercent,
                        processingFeeLinePrice: y?.price,
                        processingFeeLinePercent: P?.percent,
                        shouldUsePaymentIntegration: f
                      }
                    ),
                    price: a?.rate?.price,
                    isItemLoaded: !!a,
                    summary: n,
                    isLoadingSummary: r,
                    isPaymentMethodSelected: t,
                    shouldUsePaymentIntegration: f,
                    invoiceLine: ee,
                    extrasPriceComponent: te
                  }
                ),
                z ? null : /* @__PURE__ */ e.jsx(
                  Ae,
                  {
                    paddingBlockStart: 2,
                    icon: "far fa-info-circle",
                    alignItems: "center",
                    children: /* @__PURE__ */ e.jsx(B, { variant: "caption", children: l("static-summary-invoiced-late-hint", {
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
    !t && !I ? /* @__PURE__ */ e.jsx(
      _t,
      {
        summary: n,
        isLoadingSummary: r
      }
    ) : null
  ] });
}, Eo = (r, t) => `checkout_page_${Ft(r ? "Request to Book" : t ? "Pay Now & Book" : "Book Now")}`, Ro = (r, t, n) => {
  const o = t ? n("static-pay-now-and-book-button-title", {
    defaultValue: "Pay Now & Book"
  }) : n("static-book-now-button-title", {
    defaultValue: "Book Now"
  });
  return r ? n("static-request-to-book-button-title", {
    defaultValue: "Request to Book"
  }) : o;
}, ea = () => {
  const { t: r } = le(), t = Ve(), n = kt(), o = bt(), m = xt(St()), { isRecoveryMode: a, recoverySessionId: c, recoveryEmail: p } = zt(), S = u.useRef(null), L = u.useRef(null), l = u.useRef(null), [E, h] = u.useState(), [g, f] = u.useState(null), z = g !== null, O = De(), { data: D } = Ct(t.orgSlug), v = D?.recoveryEmailConfig?.enabled ?? !1, { data: R, isLoading: M } = wt(
    t.orgSlug,
    { resourceId: t.resourceId }
  ), Q = u.useMemo(
    () => (R ? R.documents : O?.settings?.community?.signupTermsNonMember) ?? [],
    [R, O?.settings?.community?.signupTermsNonMember]
  ), { data: Z } = Bt({
    orgSlug: t.orgSlug,
    documentIds: Q,
    enabled: !M
  }), C = o.get("periodStart"), j = o.get("periodEnd"), me = o.get("capacity"), Ce = o.get("amenities"), de = o.get("type"), pe = o.get("office"), U = o.get("layout") ?? void 0, X = o.get("guestCount"), $ = X ? Number(X) : void 0, I = ue(Me), P = ue(Ot), [J, A] = ot(ao), y = ce(Ut), ee = ce(Nt), [V] = It(), [te] = vt(), d = u.useMemo(() => jt(te), [te]), { data: k } = Pt(t.orgSlug, t.resourceId), oe = k?.office?._id, ae = k?.rate?.bookingPolicy.requiresApproval, { timezone: se } = no(oe), [ge, fe] = u.useMemo(() => {
    if (!C || !j) {
      const s = Se.now().setZone(se);
      return [s, s];
    }
    return [
      Fe(C).setZone(se, { keepLocalTime: !0 }),
      Fe(j).setZone(se, { keepLocalTime: !0 })
    ];
  }, [C, j, se]), { checkoutSummary: ne, isLoadingSummary: ye, summaryResult: b } = So({
    start: ge.toUTC().toISO(),
    end: fe.toUTC().toISO(),
    location: oe,
    extras: d
  }), N = ce(Wt), { handleEmailChange: qe } = Gt({
    productId: t.resourceId,
    productType: "resource",
    amount: b?.totalAmount,
    checkoutSnapshot: {
      startDate: C ?? void 0,
      endDate: j ?? void 0,
      locale: V ?? void 0
    },
    utms: m
  }), Ie = $e({
    office: oe,
    price: b?.totalAmount,
    requiresApproval: ae,
    checkoutRule: R
  }), {
    shouldShowPaymentIntegration: he,
    shouldCapturePayment: ke,
    shouldSavePaymentDetails: _e,
    isLoadingBillingFlow: re,
    billingFlowError: q
  } = Ie, ze = ko(), G = H(
    (s, x = {}) => {
      ze.trackECommerceEvent(
        s,
        [
          {
            id: k?._id || "",
            name: k?.name || "",
            listingType: "resource",
            resourceType: k?.type || "",
            price: b?.subtotal || 0,
            tax: i.sumBy(b?.invoiceLines, (T) => T.vatAmount || 0),
            location: k?.office,
            quantity: 1
          }
        ],
        {
          discountCode: N,
          // NOTE: We do not use the local variable, as it might not have the right value if we are just adding the payment details.
          paymentType: x.shouldAddPaymentType ? "Credit Card" : void 0,
          transactionId: x.transactionId,
          ensureTrackedOnce: x.trackOnce
        }
      );
    }
  ), { mutate: Oe } = Le({
    mutationFn: (s) => Mt(s.orgSlug, s.body),
    onError: (s) => {
      K(s, "checkoutResource"), I(Y(s)), A(!1);
    },
    onSuccess: ({ data: s }) => {
      const x = V ? `?${Rt({ language: V })}` : "";
      G(
        k?.rate?.bookingPolicy.requiresApproval ? "generate_lead" : "purchase",
        { transactionId: s._id }
      ), n(`/${t.orgSlug}/resources/${t.resourceId}/success${x}`, {
        state: {
          resource: k,
          start: C,
          end: j,
          layout: U,
          guestCount: $,
          memberActionsToken: s.memberActionsToken,
          hasInvitedUser: s.hasInvitedUser,
          accountCreation: s.accountCreation
        }
      }), A(!1);
    }
  }), { authorizePaymentResult: F, isAuthorizePaymentPending: Ue } = Ht({
    summary: b,
    office: oe,
    paymentMethod: g?.type,
    shouldCapturePayment: ke,
    shouldSavePaymentDetails: _e,
    onError: (s) => {
      K(s, "authorizePayment"), P(Y(s));
    }
  }), Ne = !re && !q && (he ? !!F : !0), We = re || ye || J || Ue || M;
  u.useEffect(() => {
    q && (K(q, "billingFlow"), I(Y(q)));
  }, [q, I]);
  const Ge = H(() => {
    f(null), h(void 0), P([]);
  }), ie = Kt(t.orgSlug, l, Ge), { step: ve, billing: He } = ie, Ke = Yt(ie.matchState), je = ue(Qt), W = !i.isEmpty(He.billingSnapshot);
  u.useEffect(() => {
    je(W);
  }, [W, je]);
  const Ye = u.useCallback(
    (s) => {
      f(s), I([]), G("add_payment_info", { shouldAddPaymentType: s !== null }), ne(
        W ? N : "",
        we(s?.type),
        s?.card ? s.card?.brand.toUpperCase() : "",
        y.type === "existing" ? y.memberId : void 0,
        y.email
      );
    },
    [
      G,
      N,
      f,
      ne,
      I,
      y,
      W
    ]
  ), Qe = H(() => {
    f(null), P([]);
  }), Ze = u.useCallback(
    async (s, x) => {
      try {
        return await Lt(t.orgSlug, {
          intentId: s,
          intentType: x
        }), !0;
      } catch (T) {
        return K(T, "createCheckoutIntent"), P(Y(T)), A(!1), !1;
      }
    },
    [t.orgSlug, P, A]
  ), Pe = H(async () => {
    if (J || re || q)
      return;
    A(!0);
    const x = {
      checkout: {
        body: {
          ...i.omit(l.current?.getFormValues(), "marketingConsent"),
          discountCode: N,
          paymentMethod: g?.type,
          cardType: g?.card?.brand,
          start: ge.toUTC().toISO(),
          end: fe.toUTC().toISO(),
          resourceId: t.resourceId,
          ...Object.keys(d).length ? { extras: d } : {},
          // `layout` and `guestCount` are each independently optional — each rides when set.
          ...U ? { layout: U } : {},
          ...$ != null ? { guestCount: $ } : {},
          ...a && c && { recoverySessionId: c },
          ...ee && { anonymousSessionId: ee },
          ...y.type === "existing" && {
            memberId: y.memberId
          },
          ...m && { utms: m },
          signupTermsNonMember: Q
        },
        orgSlug: t.orgSlug ?? ""
      },
      tracking: {
        price: b?.subtotal || 0,
        tax: i.sumBy(b?.invoiceLines, (T) => T.vatAmount || 0)
      },
      search: {
        periodStart: C,
        periodEnd: j,
        capacity: me,
        amenities: Ce,
        type: de,
        office: pe,
        language: V
      }
    };
    if (F && z && i.isFunction(E)) {
      let T;
      if (g?.type === so.IDEAL && F) {
        const Re = F.paymentIntent ? "paymentIntent" : "setupIntent";
        if (!await Ze(
          F[Re],
          Re
        ))
          return;
        T = Dt(x);
      }
      const Ee = await E(
        F.clientSecret,
        g?.id,
        T
      );
      if (Ee?.error) {
        P([Ee.error]), A(!1);
        return;
      }
    }
    i.set(x, "checkout.body.paymentIntent", F?.paymentIntent), i.set(x, "checkout.body.setupIntent", F?.setupIntent), Oe(x.checkout);
  }), Xe = ce(Zt), Je = H(() => Xe);
  Xt(), u.useEffect(() => (ne(
    W ? N : "",
    we(g?.type),
    g?.card ? g.card?.brand.toUpperCase() : "",
    y.type === "existing" ? y.memberId : void 0,
    y.email
  ), () => I([])), [
    ne,
    I,
    g,
    N,
    y,
    W
  ]), u.useEffect(() => {
    b && G("begin_checkout", { trackOnce: !0 });
  }, [G, b]);
  const et = Ro(!!ae, ke, r), Te = ae ? r("static-request-to-book-button-title", {
    defaultValue: "Request to Book"
  }) : r("static-book-button-title", {
    defaultValue: "Book"
  }), tt = Eo(!!ae, ke);
  return Jt({
    contactSnapshot: ie.contactSnapshot,
    checkoutFormRef: l,
    orgSlug: t.orgSlug,
    enabled: v && !a
  }), /* @__PURE__ */ e.jsxs(
    _,
    {
      sx: bo,
      ref: S,
      children: [
        /* @__PURE__ */ e.jsx(Be, { sx: xo, children: /* @__PURE__ */ e.jsxs(
          _,
          {
            overflow: "hidden",
            rowGap: 6,
            children: [
              /* @__PURE__ */ e.jsx(
                eo,
                {
                  checkoutFormRef: l,
                  stepper: ie,
                  legalDocuments: Z,
                  completeTitle: Te,
                  shouldShowPaymentIntegration: he,
                  onFinalCheckout: Pe,
                  onEmailChange: a || !v ? void 0 : qe,
                  initialEmail: p,
                  checkoutInProgress: J,
                  showMarketingConsent: v && !a,
                  isLoadingSummary: ye,
                  isLoadingBillingFlow: re,
                  isBillingFlowError: !!q
                }
              ),
              he && !Ke && /* @__PURE__ */ e.jsxs(_, { rowGap: 3, children: [
                /* @__PURE__ */ e.jsx(
                  to,
                  {
                    stepNumber: 3,
                    title: r("static-payment-form-title", { defaultValue: "Payment Details" }),
                    state: ve === "payment" ? "active" : "future",
                    editable: !0
                  }
                ),
                ve === "payment" && /* @__PURE__ */ e.jsx(w, { ref: L, children: /* @__PURE__ */ e.jsx(
                  oo,
                  {
                    topLayoutRef: S,
                    completePaymentTitle: et,
                    completeTitle: Te,
                    billingFlowOptions: Ie,
                    canSubmit: Ne,
                    onContinue: Ye,
                    onCancel: Qe,
                    onCheckout: Pe,
                    setConfirmIntentHandler: h,
                    isLoading: We,
                    paymentMethod: g,
                    summary: b,
                    trackEventKey: tt,
                    getBillingFormType: Je
                  }
                ) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          w,
          {
            width: "100%",
            maxWidth: (s) => ({
              sm: s.typography.pxToRem(Tt),
              lg: s.typography.pxToRem(320)
            }),
            position: { xs: "initial", lg: "sticky" },
            top: 12,
            children: k ? /* @__PURE__ */ e.jsx(
              To,
              {
                isLoadingSummary: ye,
                isPaymentMethodSelected: z,
                summary: b,
                periodStart: ge,
                periodEnd: fe,
                resource: k,
                cancellationConditions: b?.cancellation?.conditions,
                layout: U,
                guestCount: $,
                checkoutRule: R
              }
            ) : null
          }
        ),
        /* @__PURE__ */ e.jsx(Et, { page: "checkout" })
      ]
    }
  );
};
export {
  ea as CheckoutResource
};
