import { j as e, r as j, aI as Me } from "./webc-vendor-BjE1NNvQ.js";
import { l as oe } from "./webc-vendor-lodash-QZMGaMCX.js";
import { a as le } from "./webc-vendor-query-PvhNqagV.js";
import { M as r, d as i, a2 as he, a6 as P, ab as Oe, a3 as We, a4 as Ve, a5 as $e, j as fe, l as Be, p as ye, s as K, a7 as ce } from "./webc-vendor-core-n5KM3lsu.js";
import { u as X, ao as $ } from "./webc-vendor-mui-BXZK0LVO.js";
import { q as A, v as de, X as be, Y as Se, w as ue, u as Ue, a5 as je, ap as me, l as Ge, n as He, z as Ne, f as ze, ao as qe, h as Ye, aq as Ke, ar as Y, D as pe, as as Qe, t as Xe, B as Ze, at as V, p as ge, au as Je, av as et, aw as tt } from "./webc-web-component-QV_kTZ_O.js";
import { D as at } from "./webc-DebouncedNumberField-DsGRRk2P.js";
import { p as it, F as nt } from "./webc-FloatingPanel-DbhWVcys.js";
import { g as rt } from "./webc-utils.rate-CFLOLeQ8.js";
import { u as w } from "./webc-vendor-i18n-DYvJO9nR.js";
import { S as Q, F as Te } from "./webc-HtmlComponent-DFkNEig6.js";
import { u as st, b as ot, d as lt, c as ct } from "./webc-util.extras-DU4UoYi0.js";
import { R as dt, a as ut } from "./webc-RoomLayoutSummary-oZ6AuALj.js";
import { T as mt } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { u as pt } from "./webc-useECommerceTracking-C3BLjDP-.js";
import { f as gt } from "./webc-util.resource-Dn4W5OJn.js";
import { d as xt } from "./webc-vendor-react-router-W8U6ip5z.js";
const xe = ({
  rate: t,
  adjustedPrice: a,
  isLoading: s,
  wrapMultiline: m
}) => {
  const { formatCurrency: l } = A(), { t: o } = w(), c = rt(t.intervalLength, o);
  if (t.price === 0)
    return /* @__PURE__ */ e.jsx(r, { variant: "h2", children: o("static-free-label", {
      defaultValue: "Free"
    }) });
  const d = a?.ratePrice ?? t.price, p = l(
    d,
    de(d, ue)
  ), f = a && a.ratePrice < a.originalRatePrice, T = f ? l(
    a.originalRatePrice,
    de(
      a.originalPrice,
      ue
    )
  ) : null;
  return s ? /* @__PURE__ */ e.jsx(be, { size: Se.BUTTON }) : /* @__PURE__ */ e.jsxs(
    i,
    {
      direction: m ? "column-reverse" : "row",
      gap: m ? 2 : 1,
      alignItems: m ? "flex-start" : "center",
      children: [
        /* @__PURE__ */ e.jsx(
          r,
          {
            variant: "h2",
            noWrap: !0,
            children: d ? `${p}/${c}` : o("static-free-label", {
              defaultValue: "Free"
            })
          }
        ),
        f ? /* @__PURE__ */ e.jsxs(
          i,
          {
            direction: "row",
            alignItems: "center",
            gap: 2,
            children: [
              /* @__PURE__ */ e.jsx(
                r,
                {
                  variant: "h3",
                  sx: (u) => ({
                    textDecoration: "line-through",
                    color: u.palette.text.faded,
                    paddingTop: 0.5
                  }),
                  children: T
                }
              ),
              /* @__PURE__ */ e.jsx(
                he,
                {
                  color: "success",
                  variant: "filled",
                  label: `${a.percent}%`,
                  sx: (u) => ({
                    "& .MuiChip-label": {
                      lineHeight: "140%",
                      fontWeight: u.typography.fontWeightBold
                    }
                  })
                }
              )
            ]
          }
        ) : null
      ]
    }
  );
}, ht = ({
  id: t,
  percent: a,
  name: s,
  amount: m
}) => {
  const { t: l } = w(), { formatCurrency: o, formatPercentage: c } = A();
  return /* @__PURE__ */ e.jsx(
    Q,
    {
      dataTest: "summary-tax-line",
      left: /* @__PURE__ */ e.jsxs(
        r,
        {
          variant: P.BODY,
          "data-test": "vat-title-percent-amount",
          children: [
            l(`tax-rate-${t}-name`, {
              defaultValue: s
            }),
            " ",
            c(a),
            ":"
          ]
        }
      ),
      right: /* @__PURE__ */ e.jsx(
        r,
        {
          variant: P.BODY,
          "data-test": "vat-percent-amount",
          children: o(m)
        }
      )
    },
    t
  );
}, ft = ({ summary: t, adjustedPrice: a }) => {
  const { invoiceLines: s } = t || {}, m = s?.find((g) => g.plan === t?.plan), l = st(t), o = j.useMemo(() => ot(s), [s]), {
    settings: {
      billing: { invoicingVat: c }
    }
  } = Ue(), { formatCurrency: d } = A(), { t: p } = w(), f = X(), T = $(
    f.breakpoints.up(je)
  ), u = f.direction === "rtl", I = c === Te.Excluded, [E, B] = j.useState(!0), R = a && a.originalPrice < a.price, U = d(
    R ? a.price : a?.originalPrice
  ), y = a ? U : d(m?.price), x = a && a.originalPrice > a.price, h = x ? d(-a.discountAmount) : null, _ = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Q,
      {
        left: /* @__PURE__ */ e.jsxs(
          r,
          {
            variant: "body",
            fontWeight: "inherit",
            noWrap: !0,
            children: [
              p("static-summary-base-price-label", {
                defaultValue: "Base price"
              }),
              ":"
            ]
          }
        ),
        right: /* @__PURE__ */ e.jsx(
          r,
          {
            variant: "body",
            noWrap: !0,
            children: me(y, u) ?? p("static-free-label", {
              defaultValue: "Free"
            })
          }
        )
      }
    ),
    x && h ? /* @__PURE__ */ e.jsx(
      Q,
      {
        left: /* @__PURE__ */ e.jsx(
          Oe,
          {
            title: /* @__PURE__ */ e.jsxs(i, { gap: 2, children: [
              /* @__PURE__ */ e.jsx(
                r,
                {
                  variant: "groupTitle",
                  color: "white",
                  children: p("static-summary-special-discount-label", {
                    defaultValue: "Special Discount"
                  })
                }
              ),
              /* @__PURE__ */ e.jsx(
                r,
                {
                  variant: "caption",
                  color: "white",
                  children: p("static-summary-special-discount-description", {
                    defaultValue: "This discount is based on the time and day you've selected."
                  })
                }
              )
            ] }),
            arrow: !0,
            placement: "left",
            children: /* @__PURE__ */ e.jsx(
              r,
              {
                variant: "body",
                fontWeight: "inherit",
                noWrap: !0,
                color: "success",
                sx: { textDecoration: "underline" },
                children: `${p("static-summary-special-discount-label", {
                  defaultValue: "Special Discount"
                })} ${-a.percent}%:`
              }
            )
          }
        ),
        right: /* @__PURE__ */ e.jsx(
          r,
          {
            variant: "body",
            color: "success",
            children: me(h, u)
          }
        )
      }
    ) : null,
    l?.length || I && o?.length ? /* @__PURE__ */ e.jsxs(i, { gap: 1, children: [
      l?.map((g) => /* @__PURE__ */ e.jsx(
        dt,
        {
          id: g.plan,
          name: g.description,
          quantity: g.quantity,
          price: g.price
        },
        g.plan
      )),
      I && o?.map(({ id: g, percent: G, name: b, amount: H }) => /* @__PURE__ */ e.jsx(
        ht,
        {
          id: g,
          percent: G,
          name: b,
          amount: H
        },
        g
      ))
    ] }) : null
  ] }), C = {
    gap: 2,
    display: "flex",
    flexDirection: "column"
  };
  return T ? /* @__PURE__ */ e.jsxs(
    We,
    {
      expanded: E,
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
          Ve,
          {
            "data-test": "price-details-summary",
            title: E ? p("static-hide-price-details-label", {
              defaultValue: "Hide price details"
            }) : p("static-show-price-details-label", {
              defaultValue: "Show price details"
            }),
            titleProps: {
              variant: "body",
              paddingInlineStart: 4
            },
            sx: {
              background: "transparent"
            },
            onClick: () => B(!E)
          }
        ),
        /* @__PURE__ */ e.jsx(
          $e,
          {
            "data-test": "price-details",
            sx: { ...C, padding: `0 ${f.typography.pxToRem(8)}` },
            children: _
          }
        )
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    i,
    {
      width: "100%",
      sx: { ...C, gap: 3 },
      children: [
        /* @__PURE__ */ e.jsx(
          r,
          {
            variant: "groupTitle",
            fontWeight: "bold",
            "data-test": "price-details-summary",
            children: p("static-price-details-label", {
              defaultValue: "Price details"
            })
          }
        ),
        /* @__PURE__ */ e.jsx(
          i,
          {
            "data-test": "price-details",
            sx: C,
            children: _
          }
        )
      ]
    }
  );
}, yt = ({
  total: t,
  isSummaryLoading: a,
  invoicingVat: s
}) => {
  const { formatCurrency: m } = A(), { t: l } = w(), o = l("static-summary-price-info-message", {
    defaultValue: "CC fees are calculated at checkout."
  });
  return /* @__PURE__ */ e.jsxs(
    i,
    {
      direction: "row",
      columnGap: 2,
      flexWrap: "nowrap",
      alignItems: "center",
      width: "100%",
      children: [
        a ? /* @__PURE__ */ e.jsx(be, { size: Se.BUTTON }) : null,
        a ? null : /* @__PURE__ */ e.jsxs(
          i,
          {
            width: "100%",
            direction: "row",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ e.jsxs(r, { variant: "h3", children: [
                l("static-summary-total-label", {
                  defaultValue: "Total"
                }),
                ":"
              ] }),
              /* @__PURE__ */ e.jsxs(
                i,
                {
                  gap: 1,
                  alignItems: "flex-end",
                  children: [
                    /* @__PURE__ */ e.jsxs(
                      i,
                      {
                        direction: "row",
                        gap: 1,
                        alignItems: "center",
                        children: [
                          /* @__PURE__ */ e.jsx(
                            r,
                            {
                              "data-test": "resource-total-price",
                              variant: "h3",
                              noWrap: !0,
                              children: t ? m(t, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              }) : l("static-free-label", {
                                defaultValue: "Free"
                              })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            mt,
                            {
                              arrow: !0,
                              placement: "top",
                              title: /* @__PURE__ */ e.jsx(
                                i,
                                {
                                  width: "fit-content",
                                  spacing: 2,
                                  children: /* @__PURE__ */ e.jsx(r, { children: o })
                                }
                              ),
                              children: /* @__PURE__ */ e.jsx(i, { justifyContent: "center", children: /* @__PURE__ */ e.jsx(fe, { icon: "far fa-info-circle" }) })
                            }
                          )
                        ]
                      }
                    ),
                    s === Te.Included ? /* @__PURE__ */ e.jsx(
                      r,
                      {
                        variant: "caption",
                        "data-test": "tax-included-label",
                        children: l("static-tax-included-label", {
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
}, bt = 90, St = 90, jt = 80, Tt = 50, It = ({ resource: t }) => {
  const { t: a } = w(), s = X(), { getImageUrl: m } = j.useContext(Be), l = lt(t), o = $(s.breakpoints.down("md")), c = o ? jt : bt, d = o ? Tt : St;
  return /* @__PURE__ */ e.jsxs(
    i,
    {
      gap: 4,
      width: "100%",
      children: [
        /* @__PURE__ */ e.jsxs(
          i,
          {
            direction: "row",
            gap: 2,
            children: [
              t.cardImage ? /* @__PURE__ */ e.jsx(
                ye,
                {
                  component: "img",
                  src: m(t.cardImage, {
                    width: c,
                    height: d
                  }),
                  alt: t.name,
                  sx: {
                    width: s.typography.pxToRem(c),
                    height: s.typography.pxToRem(d),
                    borderRadius: 3
                  }
                }
              ) : /* @__PURE__ */ e.jsx(
                Ge,
                {
                  sx: {
                    width: s.typography.pxToRem(c),
                    height: s.typography.pxToRem(d),
                    flexShrink: 0
                  },
                  iconWithText: {
                    icon: "far fa-calendar-check",
                    compact: !0,
                    iconProps: {
                      sx: { marginInlineStart: 1 }
                    }
                  }
                }
              ),
              /* @__PURE__ */ e.jsxs(i, { gap: 1, children: [
                /* @__PURE__ */ e.jsx(
                  r,
                  {
                    variant: P.H4,
                    color: "text.secondary",
                    sx: He,
                    children: a(`resource-${t._id}-name`, { defaultValue: t.name })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  r,
                  {
                    variant: P.BODY,
                    sx: ct(o ? 2 : 4),
                    children: t?.office?.physicalAddress?.formattedAddress ? a(
                      `location-${t.office.accountId}-${t.office._id}-formatted-address`,
                      {
                        defaultValue: t.office.physicalAddress.formattedAddress
                      }
                    ) : null
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsxs(i, { gap: 1, children: [
          /* @__PURE__ */ e.jsx(r, { variant: P.TAB_HEADER, children: a("static-date-and-time-label", { defaultValue: "Date & Time" }) }),
          /* @__PURE__ */ e.jsx(r, { variant: P.BODY, children: l })
        ] }),
        /* @__PURE__ */ e.jsx(K, {})
      ]
    }
  );
}, Et = 1, vt = 1e4, Ht = ({
  resource: t,
  orgBusinessHours: a,
  timezone: s,
  invoicingVat: m,
  periodRangeReducer: l,
  disableDatesEditing: o,
  selectedLayout: c,
  guestCount: d,
  showGuestCount: p,
  isLayoutCapacityExceeded: f,
  onGuestCountChange: T,
  proceedButton: u
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const {
    t: I,
    i18n: { language: E }
  } = w(), { formatCurrency: B, formatDateTime: R, localeFormat: U } = A(), y = Ne(), x = y.get("periodStart"), h = y.get("periodEnd"), _ = y.get("capacity"), C = y.get("amenities"), g = y.get("type"), G = y.get("office"), b = xt(), [H] = ze(), [Z] = qe(), Ie = Ye(), N = Me(it), L = X(), Ee = $(
    L.breakpoints.down(Ke)
  ), F = $(
    L.breakpoints.up(je)
  ), {
    mutate: J,
    isPending: ve,
    error: ke,
    isError: Pe
  } = le({
    mutationFn: (n) => tt(n.orgSlug, n.body)
  }), {
    mutate: ee,
    isPending: v,
    data: D,
    error: we,
    isError: M
  } = le({
    mutationFn: (n) => et(n.orgSlug, n.body)
  }), k = D, Re = k?.fees?.[0]?.fee?.plan, O = oe.find(
    k?.invoiceLines,
    (n) => n.plan === Re
  ), te = !!(!x || !h || ve || v || M || Pe || f), Ce = ke || we, z = c ? d : null, ae = Y.serialize(Z) ?? "", q = j.useMemo(() => Y.parse(ae || null), [ae]);
  j.useEffect(() => {
    if (!x || !h)
      return;
    const n = pe(x).setZone(s, {
      keepLocalTime: !0
    }), S = pe(h).setZone(s, {
      keepLocalTime: !0
    });
    J({
      orgSlug: b.orgSlug ?? "",
      body: {
        start: n.toUTC().toISO(),
        end: S.toUTC().toISO(),
        resourceId: b.resourceId,
        // Layout rides when selected; guest count rides only alongside a layout (a layout-less count
        // is ignored server-side). These ride the booking-summary body only — never the
        // pricing/checkout-summary body below.
        ...c ? { layout: c } : {},
        ...z != null ? { guestCount: z } : {}
      }
    }), ee({
      orgSlug: b.orgSlug ?? "",
      body: {
        start: n.toUTC().toISO(),
        end: S.toUTC().toISO(),
        resourceId: b.resourceId,
        count: 1,
        location: t.office._id,
        ...oe.isEmpty(q) ? {} : { extras: Qe(q) }
      }
    });
  }, [
    J,
    ee,
    x,
    h,
    s,
    t.office._id,
    b.orgSlug,
    b.resourceId,
    q,
    c,
    z
  ]);
  const ie = pt();
  j.useEffect(() => {
    t && O && ie.trackECommerceEvent(
      "view_item",
      [
        {
          id: t._id,
          name: t.name,
          location: t.office,
          listingType: "resource",
          resourceType: t.type || "",
          price: O?.price ?? 0,
          quantity: 1
        }
      ],
      { ensureTrackedOnce: !0 }
    );
  }, [ie, t, O]);
  const De = t.rate?.bookingPolicy?.requiresApproval, ne = Y.serialize(Z) ?? void 0, re = Xe({
    periodStart: x,
    periodEnd: h,
    capacity: _,
    amenities: C,
    type: g,
    office: G,
    listingType: "resource",
    language: H,
    ...ne ? { extras: ne } : {},
    // Carry the layout/guest-count selection to the checkout route — each is independently optional.
    ...c ? { layout: c } : {},
    ...d != null ? { guestCount: d } : {},
    ...Ie
  }), se = (n) => {
    n.stopPropagation(), u.onClick?.({
      resource: t,
      price: O?.price ?? 0,
      searchStart: x,
      searchEnd: h
    });
  }, Ae = j.useMemo(() => {
    const [{ start: n, end: S }] = l, Fe = t.bookingMode === Ze.Time, W = E || "en";
    return !n || !S ? "" : Fe ? `${V(n, W)} | ${R(n, !0)} - ${R(
      S,
      !0
    )}` : n.hasSame(S, "day") ? V(n, W) : `${V(n, W)} - ${V(S, W)}`;
  }, [l, t.bookingMode, E, R]), _e = /* @__PURE__ */ e.jsxs(
    i,
    {
      flexWrap: "wrap",
      direction: "row",
      gap: 2,
      alignItems: "center",
      justifyContent: "space-between",
      children: [
        t.rate ? /* @__PURE__ */ e.jsxs(
          i,
          {
            alignItems: "start",
            gap: 2,
            children: [
              /* @__PURE__ */ e.jsxs(
                i,
                {
                  direction: "row",
                  alignItems: "center",
                  gap: 3,
                  alignSelf: "start",
                  children: [
                    k?.totalAmount == null || M ? /* @__PURE__ */ e.jsx(
                      xe,
                      {
                        rate: t.rate,
                        isLoading: v,
                        adjustedPrice: D?.adjustedPrice
                      }
                    ) : /* @__PURE__ */ e.jsx(r, { variant: "h1", children: k?.totalAmount === 0 ? I("static-free-label", {
                      defaultValue: "Free"
                    }) : B(k?.totalAmount, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }) }),
                    /* @__PURE__ */ e.jsx(
                      fe,
                      {
                        icon: N ? "fa fa-chevron-down" : "fa fa-chevron-up",
                        sx: { fontSize: "inherit" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(r, { variant: "body", children: Ae })
            ]
          }
        ) : null,
        /* @__PURE__ */ e.jsx(
          ce,
          {
            "rnd-data-id": u.rndDataId,
            "data-test": "book-button",
            size: "large",
            variant: "contained",
            disabled: te,
            to: `${u.toPath}?${re}`,
            sx: {
              ...ge,
              alignSelf: "center",
              marginInlineStart: "auto"
            },
            onClick: se,
            children: u.title
          }
        )
      ]
    }
  ), Le = /* @__PURE__ */ e.jsxs(
    i,
    {
      flexWrap: "wrap",
      direction: "row",
      gap: 4,
      alignItems: "center",
      justifyContent: N ? void 0 : "space-between",
      children: [
        t.rate && (!F || !o) ? /* @__PURE__ */ e.jsxs(
          i,
          {
            alignItems: "flex-start",
            justifyContent: N ? void 0 : "space-between",
            children: [
              De ? /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsx(
                he,
                {
                  sx: {
                    marginBlockEnd: 2,
                    borderRadius: 3,
                    "& .MuiChip-label": {
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: L.typography.pxToRem(12)
                    }
                  },
                  label: I("static-requires-approval-label", {
                    defaultValue: "Requires Approval"
                  })
                }
              ) }) : null,
              /* @__PURE__ */ e.jsx(
                xe,
                {
                  rate: t.rate,
                  isLoading: v,
                  adjustedPrice: D?.adjustedPrice
                }
              )
            ]
          }
        ) : null,
        o ? /* @__PURE__ */ e.jsx(It, { resource: t }) : /* @__PURE__ */ e.jsx(
          i,
          {
            direction: "row",
            flexWrap: "wrap",
            gap: 4,
            width: "100%",
            marginInlineEnd: "auto",
            children: /* @__PURE__ */ e.jsx(
              Je,
              {
                businessHours: t.office.businessHours ?? a,
                timezone: s,
                localeFormat: U,
                bookingMode: t.bookingMode,
                reducer: l,
                selectedOffice: [t.office._id],
                datePickerFullWidth: !0,
                timeSlotPickersMinWidth: !0,
                timeSlotPickerFullWidth: Ee,
                timeSlotPickerResponsiveWidth: !F
              }
            )
          }
        ),
        o ? /* @__PURE__ */ e.jsx(
          ut,
          {
            layout: c ?? void 0,
            capacity: gt(t, c),
            guestCount: d ?? void 0,
            "data-test": "floating-panel-room-layout",
            sx: { width: "100%" }
          }
        ) : null,
        p && T != null ? /* @__PURE__ */ e.jsx(
          i,
          {
            gap: 1,
            width: "100%",
            children: /* @__PURE__ */ e.jsx(
              at,
              {
                "data-test": "guest-count-field",
                labelPlacement: "top",
                responsive: "false",
                fullWidth: !1,
                min: Et,
                max: vt,
                allowEmpty: !0,
                value: d ?? null,
                onChange: T,
                onKeyDown: (n) => {
                  [".", ",", "e", "E", "+", "-"].includes(n.key) && n.preventDefault();
                },
                label: I("static-guest-count-label", { defaultValue: "Attendees" }),
                sx: {
                  width: L.typography.pxToRem(138),
                  "&& .MuiInputBase-input": { textAlign: "center" }
                },
                slotProps: { htmlInput: { sx: { width: "100%" } } }
              }
            )
          }
        ) : null,
        F ? /* @__PURE__ */ e.jsx(
          ce,
          {
            fullWidth: !0,
            "rnd-data-id": u.rndDataId,
            "data-test": "book-button",
            size: "large",
            variant: "contained",
            disabled: te,
            to: `${u.toPath}?${re}`,
            sx: ge,
            onClick: se,
            children: u.title
          }
        ) : null,
        !M && !v ? /* @__PURE__ */ e.jsx(
          ft,
          {
            summary: D,
            adjustedPrice: D?.adjustedPrice
          }
        ) : null,
        v && o && !F ? null : /* @__PURE__ */ e.jsx(
          K,
          {
            sx: {
              width: "100%"
            }
          }
        ),
        !M && t.rate ? /* @__PURE__ */ e.jsx(
          yt,
          {
            total: k?.totalAmount,
            isSummaryLoading: v,
            invoicingVat: m
          }
        ) : null
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(
    nt,
    {
      errorMessage: Ce?.message,
      collapsedPanelContent: _e,
      children: Le
    }
  );
};
export {
  Et as G,
  Ht as R,
  vt as a
};
