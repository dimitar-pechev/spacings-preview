import { r as i, j as e } from "./webc-vendor-CvrN3tmw.js";
import { q as V, ao as Q, d as F, l as K, j as W, a5 as J, z as Z, ae as ee, ad as te, u as se, Q as ae, S as oe, E as O, c as H, aj as L } from "./webc-web-component-qMWWbTiu.js";
import { l as re, e as ie, d as a, p as Y, M as f, a6 as h, c as ne, N as ce, C as le, o as de, a9 as ue, aa as me } from "./webc-vendor-core-BCd2u07H.js";
import { u as z, ao as U } from "./webc-vendor-mui-C8wQ-7jG.js";
import { l as pe } from "./webc-vendor-lodash-BJv5POtF.js";
import { e as ge } from "./webc-TooltipSwitch-C9UYN4QY.js";
import { R as M } from "./webc-ResourceFloatingPanel-IIcnF_DG.js";
import { u as he } from "./webc-useGetTimezone-DnnlJcRC.js";
import { u as xe } from "./webc-useScrollToTop-Cn0mrEq5.js";
import { H as fe } from "./webc-HtmlComponent-KnqjQ7IO.js";
import { c as Ee, U as k, g as Te } from "./webc-util.extras-CXnmHQSG.js";
import { u as q } from "./webc-vendor-i18n-BICogURo.js";
import { g as ye, e as _e, a as Re } from "./webc-util.resource-BFbWBC4g.js";
import { u as je } from "./webc-useECommerceTracking-CWRT-Ysg.js";
import { a as Ce, u as Se, d as be } from "./webc-vendor-react-router-Tvle1imR.js";
const X = 0, $ = 9999, Ie = ({ extra: t }) => {
  const { getImageUrl: n } = i.useContext(re), d = z(), { t: c } = q(), { formatCurrency: E } = V(), l = i.useRef(null), [u, m] = i.useState(!1), [j, w] = i.useState(!1), [T, C] = Q(), y = T.find((r) => r.extraId === t._id)?.count ?? 0, { trackPublicEvent: _ } = F(), o = (r) => {
    const R = Math.min(
      Math.max(X, r ?? 0),
      $
    ), p = Math.ceil(R), b = T.filter((g) => g.extraId !== t._id), I = p === 0 || Number.isNaN(p);
    C(I ? b : [...b, { extraId: t._id, count: p }]), _(W.EXTRAS_SELECTED_QUANTITY_CHANGE, {
      extraId: t._id,
      quantity: p
    });
  };
  i.useEffect(() => {
    if (t.description && l.current) {
      const R = l.current.scrollHeight - l.current.clientHeight > 1;
      m(R);
    }
  }, [t.description, l]);
  const S = () => {
    w((r) => !r);
  }, x = t.price ? t.price * y : null;
  return /* @__PURE__ */ e.jsxs(
    ie,
    {
      "data-test": `select-extra-card-${t._id}`,
      sx: {
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: 4,
        borderRadius: 3
      },
      children: [
        /* @__PURE__ */ e.jsx(a, { children: t.image ? /* @__PURE__ */ e.jsx(
          Y,
          {
            component: "img",
            src: n(t.image, {
              width: 110,
              height: 110
            }),
            alt: t.name,
            sx: {
              borderRadius: 3,
              objectFit: "cover",
              width: d.typography.pxToRem(110)
            }
          }
        ) : /* @__PURE__ */ e.jsx(
          K,
          {
            width: d.typography.pxToRem(110),
            sx: {
              width: d.typography.pxToRem(110),
              height: d.typography.pxToRem(110)
            },
            iconWithText: {
              icon: "far fa-shopping-basket",
              compact: !0,
              iconProps: {
                sx: { marginInlineStart: 1 }
              }
            }
          }
        ) }),
        /* @__PURE__ */ e.jsxs(
          a,
          {
            width: "100%",
            justifyContent: "space-between",
            gap: 2,
            children: [
              /* @__PURE__ */ e.jsxs(a, { gap: 2, children: [
                /* @__PURE__ */ e.jsxs(
                  a,
                  {
                    direction: "row",
                    gap: 2,
                    justifyContent: "space-between",
                    children: [
                      /* @__PURE__ */ e.jsx(
                        f,
                        {
                          variant: h.H4,
                          color: "text.secondary",
                          children: c(`plan-${t._id}-name`, { defaultValue: t.name })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        f,
                        {
                          variant: h.H3,
                          color: "text.secondary",
                          children: t.price ? E(t.price) : c("static-free-label", { defaultValue: "Free" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  f,
                  {
                    variant: h.BODY,
                    ref: l,
                    sx: {
                      // the description is html with <p> all around causing non-design margins on each new paragraph
                      // remove the top marging and leave 8px on the bottom to keep new <p> tags visually separated
                      "&& p": { marginTop: 0, marginBottom: 2 },
                      "&& p:last-child": { margin: 0 },
                      ...!j && Ee(2)
                    },
                    children: /* @__PURE__ */ e.jsx(
                      fe,
                      {
                        content: c(`plan-${t._id}-description`, {
                          defaultValue: t.description ?? ""
                        })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs(
                a,
                {
                  direction: "row",
                  justifyContent: u ? "space-between" : "flex-end",
                  alignItems: "center",
                  children: [
                    u ? /* @__PURE__ */ e.jsx(
                      ne,
                      {
                        variant: "text",
                        onClick: S,
                        children: j ? c("static-show-less-label", { defaultValue: "Show Less" }) : c("static-show-more-label", { defaultValue: "Show More" })
                      }
                    ) : null,
                    /* @__PURE__ */ e.jsxs(
                      a,
                      {
                        gap: { xs: 1, md: 2 },
                        alignItems: { xs: "flex-end", md: "center" },
                        direction: { xs: "column-reverse", md: "row" },
                        justifyContent: { xs: "flex-end", md: "flex-start" },
                        children: [
                          x ? /* @__PURE__ */ e.jsxs(
                            a,
                            {
                              direction: "row",
                              gap: 1,
                              children: [
                                /* @__PURE__ */ e.jsxs(f, { variant: h.BODY, children: [
                                  c("static-summary-total-label", { defaultValue: "Total" }),
                                  ":"
                                ] }),
                                /* @__PURE__ */ e.jsx(f, { variant: h.BODY, children: E(x) })
                              ]
                            }
                          ) : null,
                          /* @__PURE__ */ e.jsx(
                            ce,
                            {
                              sx: {
                                width: "fit-content",
                                "&& .MuiInputBase-input": { textAlign: "center" }
                              },
                              slotProps: { formHelperText: { hidden: !0 } },
                              onChange: o,
                              value: y,
                              min: X,
                              max: $,
                              precision: 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Ve = () => {
  const t = z(), { t: n } = q(), d = Ce(), c = Se(), E = U(t.breakpoints.down("sm")), l = U(
    t.breakpoints.up(J)
  );
  xe();
  const u = be(), m = Z(), j = m.get("periodStart"), w = m.get("periodEnd"), T = m.get("layout") ?? void 0, C = m.get("guestCount"), y = C ? Number(C) : void 0, { data: _ } = ee({
    orgSlug: u.orgSlug,
    resourceId: u.resourceId
  }), { data: o } = te(u.orgSlug, u.resourceId), { timezone: S } = he(o.office._id), {
    settings: {
      businessHours: x,
      billing: { invoicingVat: r }
    }
  } = se(), { localeFormat: R } = V(), p = o.office.businessHours ?? x, b = ae({
    businessHours: p,
    selectedOffice: [o.office._id]
  }), I = oe({
    localeFormat: R,
    businessHours: p,
    bookingMode: o.bookingMode,
    searchStart: j,
    searchEnd: w,
    closedDaysIntervals: b
  }), g = i.useMemo(
    () => _?.map((s) => ({
      label: Te({
        t: n,
        categoryId: s.category?._id,
        categoryName: s.category?.name
      }),
      value: s.category?._id || k,
      tabVariant: le.VIRTUAL
    })) ?? [],
    [_, n]
  ), [P, A] = i.useState();
  i.useEffect(() => {
    A(pe.first(g)?.value);
  }, [g, A]);
  const G = (s, v) => {
    A(v);
  }, { trackECommerceEvent: B } = je(), { trackPublicEvent: D } = F(), N = i.useMemo(
    () => ({
      title: ye({
        t: n,
        areExtrasAvailable: !1,
        requiresApproval: o.rate?.bookingPolicy?.requiresApproval
      }),
      toPath: "../checkout",
      rndDataId: `${O.PUBLIC}-${H.EXTRAS_CONFIRM_CHECKOUT_BUTTON}`,
      onClick: (s) => {
        B("add_to_cart", [
          _e(s.resource, s.price)
        ]), D(
          Re(s.resource.rate?.bookingPolicy?.requiresApproval),
          ge(s.resource, s.searchStart, s.searchEnd)
        );
      }
    }),
    [n, o, B, D]
  );
  return /* @__PURE__ */ e.jsx(
    a,
    {
      position: "relative",
      width: "100%",
      children: /* @__PURE__ */ e.jsxs(
        a,
        {
          sx: {
            paddingInline: 6,
            paddingBlockStart: 8,
            width: "100%",
            maxWidth: t.typography.pxToRem(L),
            marginX: "auto",
            marginBottom: E ? 0 : 4,
            borderRadius: E ? "0 !important" : void 0
          },
          gap: 4,
          children: [
            /* @__PURE__ */ e.jsxs(
              a,
              {
                direction: "row",
                alignItems: "center",
                width: "100%",
                gap: 4,
                marginBottom: g.length > 1 ? 0 : 2,
                children: [
                  /* @__PURE__ */ e.jsx(
                    de,
                    {
                      iconProps: { icon: "far fa-arrow-left" },
                      onClick: () => {
                        c.key === "default" ? d(`..?${m.toString()}`) : d(-1);
                      },
                      variant: "outlined",
                      "rnd-data-id": `${O.PUBLIC}-${H.EXTRAS_BACK_BUTTON}`,
                      "aria-label": n("static-back-button-aria-label", {
                        defaultValue: "Back to previous page"
                      })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    f,
                    {
                      variant: h.H1,
                      fontSize: { xs: t.typography.pxToRem(18), sm: t.typography.pxToRem(24) },
                      children: n("static-select-extras-title", {
                        defaultValue: "Enhance Your Booking With Extras"
                      })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              a,
              {
                width: "100%",
                maxWidth: t.typography.pxToRem(L),
                marginInline: "auto",
                children: [
                  /* @__PURE__ */ e.jsx(
                    a,
                    {
                      minHeight: "100vh",
                      justifyContent: "space-between",
                      children: /* @__PURE__ */ e.jsxs(
                        a,
                        {
                          gap: 4,
                          width: "100%",
                          children: [
                            g.length > 0 && P ? /* @__PURE__ */ e.jsx(
                              ue,
                              {
                                tabs: g,
                                value: P,
                                onChange: G,
                                typographyVariant: h.TAB_HEADER
                              }
                            ) : null,
                            /* @__PURE__ */ e.jsxs(
                              a,
                              {
                                direction: "row",
                                gap: 8,
                                width: "100%",
                                children: [
                                  /* @__PURE__ */ e.jsx(Y, { width: "100%", children: _?.map((s) => /* @__PURE__ */ e.jsx(
                                    me,
                                    {
                                      selected: P,
                                      value: s.category?._id || k,
                                      children: /* @__PURE__ */ e.jsx(a, { gap: 4, children: s.extras.map((v) => /* @__PURE__ */ e.jsx(
                                        Ie,
                                        {
                                          extra: v
                                        },
                                        v._id
                                      )) })
                                    },
                                    s.category?._id || k
                                  )) }),
                                  l ? /* @__PURE__ */ e.jsx(
                                    M,
                                    {
                                      disableDatesEditing: !0,
                                      resource: o,
                                      timezone: S,
                                      invoicingVat: r,
                                      orgBusinessHours: x,
                                      periodRangeReducer: I,
                                      proceedButton: N,
                                      selectedLayout: T,
                                      guestCount: y
                                    }
                                  ) : null
                                ]
                              }
                            )
                          ]
                        }
                      )
                    }
                  ),
                  l ? null : /* @__PURE__ */ e.jsx(
                    M,
                    {
                      disableDatesEditing: !0,
                      resource: o,
                      timezone: S,
                      invoicingVat: r,
                      orgBusinessHours: x,
                      periodRangeReducer: I,
                      proceedButton: N,
                      selectedLayout: T,
                      guestCount: y
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
};
export {
  Ve as SelectExtras
};
