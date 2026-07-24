import { aI as ze, j as e, r as D } from "./webc-vendor-BjE1NNvQ.js";
import { p as v, d as s, M as y, a1 as Ue, c as K, l as Re, T as Z, U as X, Y as J, a2 as re, _ as ee, $ as te, j as N, A as S } from "./webc-vendor-core-n5KM3lsu.js";
import { l as f } from "./webc-vendor-lodash-QZMGaMCX.js";
import { u as de, a as be, i as We, b as He, F as Me, g as ve, s as Ve, E as pe, c as ue, I as Se, P as Ne, d as ge, e as Ce, f as we, h as ke, j as W, t as Ie, C, k as ae, l as _e, m as le, n as Q, o as se, p as Ee, q as he, r as qe, v as Ge, w as Pe, x as Ke, y as Qe, R as Ye, z as Be, A as $, B as Ze, D as Y, G as Xe, H as Je, J as et, K as tt, L as at, M as st, N as ot, O as nt, Q as it, S as rt, T as lt, U as ct, V as dt, W as ye, X as pt, Y as ut, Z as gt, _ as ht } from "./webc-web-component-QV_kTZ_O.js";
import { S as mt } from "./webc-SvgImage-CLmnBoeC.js";
import { g as xt } from "./webc-google-maps-logo-B8movxuB.js";
import { u as U } from "./webc-vendor-i18n-DYvJO9nR.js";
import { u as q, ao as Le } from "./webc-vendor-mui-BXZK0LVO.js";
import { T as $e, e as ie, a as fe } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { R as yt, a as ft } from "./webc-ResourceCapacity-BYULhYq1.js";
import { T as ce } from "./webc-TagGroup-BEzzZsLT.js";
import { R as jt, u as Tt, a as Rt } from "./webc-index-BfZq6WVX.js";
import { u as bt } from "./webc-useScrollToTop-CVMrlcQ2.js";
import { d as vt } from "./webc-vendor-react-router-W8U6ip5z.js";
const St = (t) => !t || f.isEmpty(t) ? null : t.length === 1 ? t[0].physicalAddress?.mapUrl : "", Ct = (t, n) => !t || f.isEmpty(t) || t.length > 1 ? null : t[0].physicalAddress ? n(`location-${t[0].accountId}-${t[0]._id}-formatted-address`, {
  defaultValue: t[0].physicalAddress.formattedAddress
}) : null, wt = ({
  children: t,
  emptyState: n,
  resultsHeaderContent: a,
  filterContent: l,
  mobileFilterContent: u,
  selectedOffice: p,
  resultsCount: h,
  isFetchingResults: i,
  mobileFilterButtonContent: g
}) => {
  const { t: o } = U(), m = de(), r = q(), I = be(), w = ze(We), c = He(), j = h === 0 && !i, T = St(p);
  return /* @__PURE__ */ e.jsxs(
    v,
    {
      height: "fit-content",
      display: "grid",
      gridTemplateColumns: { xs: "min-content min-content", md: "auto 1fr" },
      gridTemplateRows: "auto 1fr",
      justifyContent: { xs: "center", md: "start" },
      justifyItems: { xs: "center", md: "start" },
      rowGap: 4,
      columnGap: { xs: 0, md: 12 },
      marginInline: 6,
      marginBlockStart: 8,
      marginBlockEnd: { sm: 6 },
      children: [
        /* @__PURE__ */ e.jsx(
          Me,
          {
            open: c.isOpen,
            onClose: c.close,
            content: u({ onClose: c.close })
          }
        ),
        /* @__PURE__ */ e.jsx(
          s,
          {
            sx: { gridRow: 1, gridColumn: 1 },
            direction: "row",
            display: { xs: "none", md: "flex" },
            alignItems: "flex-end",
            position: w ? "sticky" : "static",
            top: w ? r.typography.pxToRem(10) : void 0,
            children: /* @__PURE__ */ e.jsxs(
              s,
              {
                color: I,
                spacing: 0.5,
                width: { xs: r.typography.pxToRem(400), md: r.typography.pxToRem(460) },
                children: [
                  /* @__PURE__ */ e.jsx(
                    y,
                    {
                      variant: "h1",
                      color: "inherit",
                      children: ve(p, o)
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    s,
                    {
                      direction: "row",
                      gap: 2,
                      children: [
                        /* @__PURE__ */ e.jsx(
                          y,
                          {
                            variant: "groupTitle",
                            color: "inherit",
                            ellipsis: !0,
                            children: Ct(p, o) ?? m?.name
                          }
                        ),
                        T ? /* @__PURE__ */ e.jsx(
                          Ue,
                          {
                            "data-test": "google-maps-link",
                            href: T,
                            target: "_blank",
                            children: /* @__PURE__ */ e.jsx(
                              s,
                              {
                                alignItems: "center",
                                justifyContent: "center",
                                children: /* @__PURE__ */ e.jsx(
                                  mt,
                                  {
                                    src: xt,
                                    style: Ve(r)
                                  }
                                )
                              }
                            )
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
        /* @__PURE__ */ e.jsx(
          v,
          {
            display: { xs: "none", md: "flex" },
            minHeight: r.typography.pxToRem(800),
            height: "80dvh",
            position: "sticky",
            top: w ? r.typography.pxToRem(100) : `calc(${r.typography.pxToRem(49.8)} + ${r.spacing(0.5)} + 10px)`,
            width: "100%",
            sx: {
              gridRow: p ? 2 : "2 / span 2",
              gridColumn: 1,
              // NOTE: supports the map "overlap" effect.
              zIndex: 1,
              flexGrow: 1
            },
            children: l
          }
        ),
        /* @__PURE__ */ e.jsx(
          s,
          {
            sx: {
              position: "sticky",
              top: r.spacing(4),
              marginTop: -2,
              marginBottom: 2,
              width: "100%",
              minWidth: "30%",
              zIndex: 2,
              gridRow: 1,
              gridColumn: 2
            },
            children: /* @__PURE__ */ e.jsx(
              K,
              {
                fullWidth: !0,
                "rnd-data-id": `${pe.PUBLIC}-${ue.DASHBOARD_SHOW_FILTER_BUTTON}`,
                sx: {
                  // NOTE: Ensures the filter button is always visible above tags (i.e. "Requires Approval")
                  zIndex: 1,
                  justifySelf: "flex",
                  boxShadow: r.shadows[4],
                  display: { xs: "flex", md: "none" },
                  ...g && { height: "fit-content" }
                },
                color: "secondary",
                size: "medium",
                variant: "outlined",
                onClick: c.toggle,
                children: g ?? /* @__PURE__ */ e.jsx(
                  Se,
                  {
                    alignItems: "baseline",
                    icon: "fa fa-filter",
                    color: "inherit",
                    fontWeight: "bold",
                    fontSize: r.typography.pxToRem(14),
                    children: "Filters"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          s,
          {
            sx: { gridRow: { sm: 2, md: 1 }, gridColumn: 2 },
            display: "flex",
            alignItems: "flex-end",
            children: /* @__PURE__ */ e.jsx(
              s,
              {
                color: I,
                spacing: 0.5,
                width: { xs: r.typography.pxToRem(360), md: r.typography.pxToRem(460) },
                "data-test": "results-title",
                children: a
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsxs(
          s,
          {
            "data-test": "results-container",
            sx: { gridRow: { sm: 3, md: 2 }, gridColumn: 2, paddingBottom: 4 },
            alignContent: { xs: "center", md: "flex-start" },
            direction: { xs: "column", md: "row" },
            width: { xs: r.typography.pxToRem(360), md: j ? "100%" : "fit-content" },
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "flex-start",
            minHeight: { xs: r.typography.pxToRem(800), md: "auto" },
            children: [
              j ? n : t,
              /* @__PURE__ */ e.jsx(Ne, { page: "results" })
            ]
          }
        )
      ]
    }
  );
}, je = 2, kt = ({
  resource: t,
  searchStart: n,
  searchEnd: a,
  searchCapacity: l,
  searchAmenities: u,
  searchType: p,
  searchOffice: h,
  showActionButton: i = !0,
  isLoading: g = !1,
  priority: o = !1
}) => {
  const { t: m } = U(), { trackPublicEvent: r } = ge(), { _id: I, name: w, office: c, rate: j, size: T, cardImage: _, area: E, amenities: P, available: B } = t, {
    settings: {
      calendar: { culture: R }
    }
  } = de(), k = Ce(), { getImageUrl: F } = D.useContext(Re), [O] = we(), z = ke(), x = m("static-request-to-book-button-title", {
    defaultValue: "Request to Book"
  }), G = m("static-book-now-button-title", {
    defaultValue: "Book Now"
  }), H = j?.bookingPolicy?.requiresApproval ? W.SEARCH_RESULT_REQUEST_TO_BOOK_BUTTON : W.SEARCH_RESULT_BOOK_NOW_BUTTON, M = W.SEARCH_RESULT_SEE_AVAILABILITY_BUTTON, A = `../resources/${I}?${Ie({
    periodStart: n,
    periodEnd: a,
    capacity: l,
    amenities: u,
    type: p,
    office: h,
    language: O,
    ...z
  })}`, L = q(), oe = Le(L.breakpoints.up("sm")), V = L.typography.pxToRem(16);
  return (
    // NOTE: Set some margin so the Card shadow is not clipped when the component is placed inside a container
    // without sufficient space around it, or if the parent container has overflow: hidden.
    /* @__PURE__ */ e.jsx(Z, { sx: { width: L.typography.pxToRem(C), margin: 0.25 }, children: /* @__PURE__ */ e.jsxs(
      X,
      {
        onClick: (b) => {
          r(
            B ? H : M,
            ie(t, n, a)
          ), b.stopPropagation(), k(A, { state: { showBackButton: !0 } });
        },
        disabled: g,
        disableRipple: !oe,
        component: "div",
        children: [
          /* @__PURE__ */ e.jsxs(v, { position: "relative", children: [
            _ ? /* @__PURE__ */ e.jsx(
              J,
              {
                component: "img",
                image: F(_, {
                  width: C,
                  // NOTE: User-defined image might not follow the 16:9 aspect ratio; set the height but do not specify cropping rules
                  // so ImageKit resizes the image to fit within the specified dimensions while preserving the original aspect ratio.
                  // This might leave empty space (letterboxing) if the image isn't naturally 16:9; otherwise, it is possible that
                  // the generated image height is less than the container height leading to blurred image.
                  height: ae
                }),
                alt: "Bookable resource",
                loading: o ? "eager" : "lazy",
                fetchPriority: o ? "high" : "auto",
                sx: {
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  objectFit: "cover",
                  aspectRatio: "16 / 9",
                  width: L.typography.pxToRem(C)
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              _e,
              {
                width: L.typography.pxToRem(C),
                sx: { aspectRatio: "16 / 9", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                iconWithText: {
                  icon: "fa fa-calendar-check"
                }
              }
            ),
            B ? null : /* @__PURE__ */ e.jsx(
              v,
              {
                sx: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1
                },
                children: /* @__PURE__ */ e.jsx(
                  ce,
                  {
                    sx: {
                      right: "auto",
                      bottom: "auto",
                      "& .MuiChip-root": {
                        zIndex: 1,
                        backgroundColor: L.palette.background.paper
                      }
                    },
                    children: /* @__PURE__ */ e.jsx(
                      re,
                      {
                        sx: { ...le },
                        label: m("static-unavailable-for-this-time-slot-label", {
                          defaultValue: "Unavailable for the selected period"
                        })
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ e.jsx(ce, { children: j?.bookingPolicy?.requiresApproval ? /* @__PURE__ */ e.jsx(
              re,
              {
                sx: le,
                label: m("static-requires-approval-label", {
                  defaultValue: "Requires Approval"
                })
              }
            ) : null })
          ] }),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              title: /* @__PURE__ */ e.jsxs(
                s,
                {
                  width: L.typography.pxToRem(se),
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 4,
                  children: [
                    /* @__PURE__ */ e.jsxs(
                      s,
                      {
                        minWidth: 0,
                        flex: 1,
                        gap: 1,
                        children: [
                          /* @__PURE__ */ e.jsx(
                            y,
                            {
                              variant: "h4",
                              height: "1.4em",
                              sx: Q,
                              children: m(`resource-${I}-name`, {
                                defaultValue: w
                              })
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            y,
                            {
                              variant: "body",
                              height: `calc(1.2em * ${je})`,
                              sx: { ...Q, WebkitLineClamp: je },
                              children: c.physicalAddress ? m(`location-${c.accountId}-${c._id}-formatted-address`, {
                                defaultValue: c.physicalAddress.formattedAddress
                              }) : null
                            }
                          )
                        ]
                      }
                    ),
                    T || E ? /* @__PURE__ */ e.jsxs(
                      s,
                      {
                        alignItems: "flex-end",
                        flexShrink: 0,
                        gap: 1,
                        children: [
                          T ? /* @__PURE__ */ e.jsx(
                            yt,
                            {
                              size: T,
                              variant: "tag"
                            }
                          ) : null,
                          E ? /* @__PURE__ */ e.jsx(
                            ft,
                            {
                              area: E,
                              culture: R,
                              variant: "tag"
                            }
                          ) : null
                        ]
                      }
                    ) : null
                  ]
                }
              ),
              disableTypography: !0,
              sx: { paddingBlockStart: 8, paddingBlockEnd: 0, paddingInline: 6 }
            }
          ),
          /* @__PURE__ */ e.jsx(
            te,
            {
              variant: "fullProfile",
              sx: { paddingInline: 6, paddingBlockEnd: 6 },
              children: /* @__PURE__ */ e.jsxs(
                s,
                {
                  spacing: 6,
                  height: "100%",
                  justifyContent: "space-between",
                  sx: { paddingBlockStart: 6 },
                  children: [
                    P?.length ? /* @__PURE__ */ e.jsx(
                      s,
                      {
                        height: "1.4em",
                        fontSize: V,
                        direction: "row",
                        flexWrap: "nowrap",
                        gap: 3,
                        overflow: "hidden",
                        children: f.map(P, (b) => /* @__PURE__ */ e.jsx(
                          $e,
                          {
                            arrow: !0,
                            placement: "top",
                            title: m(`amenity-${b._id}-title`, {
                              defaultValue: b.title
                            }),
                            children: /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsx(
                              N,
                              {
                                icon: `fa ${b.icon ?? "fa-badge-check"}`,
                                sx: { fontSize: V }
                              }
                            ) })
                          },
                          b._id
                        ))
                      }
                    ) : /* @__PURE__ */ e.jsx(
                      v,
                      {
                        height: "1.4em",
                        fontSize: V,
                        children: " "
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      s,
                      {
                        direction: "row",
                        gap: 4,
                        justifyContent: i ? "space-between" : "flex-end",
                        alignItems: "center",
                        children: [
                          i && B ? /* @__PURE__ */ e.jsx(
                            K,
                            {
                              "rnd-data-id": `${pe.PUBLIC}-${ue.SEARCH_RESULT_BOOK_NOW_BUTTON}`,
                              "data-test": "book-button",
                              variant: "contained",
                              sx: Ee,
                              disabled: g,
                              onClick: (b) => {
                                b.stopPropagation(), k(A, { state: { showBackButton: !0 } }), r(
                                  H,
                                  ie(t, n, a)
                                );
                              },
                              children: /* @__PURE__ */ e.jsx(
                                y,
                                {
                                  variant: "groupTitle",
                                  color: "inherit",
                                  children: j?.bookingPolicy?.requiresApproval ? x : G
                                }
                              )
                            }
                          ) : null,
                          i && !B ? /* @__PURE__ */ e.jsx(
                            K,
                            {
                              size: "large",
                              variant: "text",
                              endIcon: /* @__PURE__ */ e.jsx(N, { icon: "fa fa-solid fa-chevron-right" }),
                              onClick: (b) => {
                                b.stopPropagation(), k(A, { state: { showBackButton: !0 } }), r(
                                  M,
                                  ie(t, n, a)
                                );
                              },
                              children: m("static-see-availability-button-title", {
                                defaultValue: "See availability"
                              })
                            }
                          ) : null,
                          j && B ? /* @__PURE__ */ e.jsx(jt, { rate: j }) : null
                        ]
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
      }
    ) })
  );
}, It = {
  maximumFractionDigits: Pe
}, _t = ({ plan: t }) => {
  const { formatCurrency: n } = he(), { t: a } = U();
  if (t.price === 0)
    return /* @__PURE__ */ e.jsx(y, { variant: "h3", children: a("static-free-label", {
      defaultValue: "Free"
    }) });
  const l = qe(t), u = n(l, {
    ...It,
    ...Ge(l, Pe)
  });
  return /* @__PURE__ */ e.jsx(
    y,
    {
      variant: "h3",
      noWrap: !0,
      children: t.intervalLength === Ke.OneOff ? `${u}` : `${u}/${a("static-rate-month-label", {
        defaultValue: "month"
      })}`
    }
  );
}, Te = 2, Et = ({
  plan: t,
  searchAmenities: n,
  searchType: a,
  searchStart: l,
  searchOffice: u,
  showActionButton: p = !0,
  isLoading: h = !1,
  priority: i = !1
}) => {
  const g = Ce(), { t: o } = U(), { trackPublicEvent: m } = ge(), { _id: r, name: I, cardImage: w, locations: c, approval: j, amenities: T } = t, { getImageUrl: _ } = D.useContext(Re), [E] = we(), P = ke(), B = `../plans/${r}?${Ie({
    amenities: n,
    type: a,
    startDate: l,
    office: u,
    language: E,
    ...P
  })}`, R = q(), k = Le(R.breakpoints.up("sm")), F = j ? o("static-request-button-title", {
    defaultValue: "Request"
  }) : o("static-buy-now-button-title", {
    defaultValue: "Buy Now"
  }), O = j ? W.SEARCH_RESULT_REQUEST_TO_BUY_BUTTON : W.SEARCH_RESULT_BUY_NOW_BUTTON, z = R.typography.pxToRem(16);
  return (
    // NOTE: Set some margin so the Card shadow is not clipped when the component is placed inside a container
    // without sufficient space around it, or if the parent container has overflow: hidden.
    /* @__PURE__ */ e.jsx(Z, { sx: { width: R.typography.pxToRem(C), margin: 0.25 }, children: /* @__PURE__ */ e.jsxs(
      X,
      {
        onClick: (x) => {
          m(O, fe(t)), x.stopPropagation(), g(B, { state: { showBackButton: !0, resetQuantity: !0 } });
        },
        disabled: h,
        disableRipple: !k,
        component: "div",
        children: [
          /* @__PURE__ */ e.jsxs(v, { position: "relative", children: [
            w ? /* @__PURE__ */ e.jsx(
              J,
              {
                component: "img",
                image: _(w, {
                  width: C,
                  // NOTE: User-defined image might not follow the 16:9 aspect ratio; set the height but do not specify cropping rules
                  // so ImageKit resizes the image to fit within the specified dimensions while preserving the original aspect ratio.
                  // This might leave empty space (letterboxing) if the image isn’t naturally 16:9; otherwise, it is possible that
                  // the generated image height is less than the container height leading to blurred image.
                  height: ae
                }),
                alt: "Plan",
                loading: i ? "eager" : "lazy",
                fetchPriority: i ? "high" : "auto",
                sx: {
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  objectFit: "cover",
                  aspectRatio: "16 / 9",
                  width: R.typography.pxToRem(C)
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              _e,
              {
                width: R.typography.pxToRem(C),
                sx: { aspectRatio: "16 / 9", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                iconWithText: {
                  icon: "fa fa-ticket-alt"
                }
              }
            ),
            /* @__PURE__ */ e.jsx(ce, { children: j ? /* @__PURE__ */ e.jsx(
              re,
              {
                sx: le,
                label: o("static-requires-approval-label", {
                  defaultValue: "Requires Approval"
                })
              }
            ) : null })
          ] }),
          /* @__PURE__ */ e.jsx(
            ee,
            {
              title: /* @__PURE__ */ e.jsxs(
                s,
                {
                  width: R.typography.pxToRem(se),
                  gap: 1,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      y,
                      {
                        variant: "h4",
                        height: "1.4em",
                        sx: Q,
                        children: o(`plan-${r}-name`, {
                          defaultValue: I
                        })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      y,
                      {
                        variant: "body",
                        height: `calc(1.2em * ${Te})`,
                        sx: { ...Q, WebkitLineClamp: Te },
                        children: f.isEmpty(c) ? o("static-all-locations-label", {
                          defaultValue: "All Locations"
                        }) : f.map(
                          c,
                          (x) => o(`location-${x.accountId}-${x._id}-name`, {
                            defaultValue: x.name
                          })
                        ).join(", ")
                      }
                    )
                  ]
                }
              ),
              disableTypography: !0,
              sx: { paddingBlockStart: 8, paddingBlockEnd: 0, paddingInline: 6 }
            }
          ),
          /* @__PURE__ */ e.jsx(
            te,
            {
              variant: "fullProfile",
              sx: { paddingInline: 6, paddingBlockEnd: 6 },
              children: /* @__PURE__ */ e.jsxs(
                s,
                {
                  spacing: 6,
                  height: "100%",
                  justifyContent: "space-between",
                  sx: { paddingBlockStart: 6 },
                  children: [
                    T?.length ? /* @__PURE__ */ e.jsx(
                      s,
                      {
                        height: "1.4em",
                        fontSize: z,
                        direction: "row",
                        flexWrap: "nowrap",
                        gap: 3,
                        overflow: "hidden",
                        children: f.map(T, (x) => /* @__PURE__ */ e.jsx(
                          $e,
                          {
                            arrow: !0,
                            placement: "top",
                            title: o(`amenity-${x._id}-title`, {
                              defaultValue: x.title
                            }),
                            children: /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsx(
                              N,
                              {
                                icon: `fa ${x.icon ?? "fa-badge-check"}`,
                                sx: { fontSize: z }
                              }
                            ) })
                          },
                          x._id
                        ))
                      }
                    ) : /* @__PURE__ */ e.jsx(
                      v,
                      {
                        height: "1.4em",
                        fontSize: z,
                        children: " "
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      s,
                      {
                        direction: "row",
                        gap: 4,
                        justifyContent: p ? "space-between" : "flex-end",
                        alignItems: "center",
                        children: [
                          p ? /* @__PURE__ */ e.jsx(
                            K,
                            {
                              "rnd-data-id": `${pe.PUBLIC}-${ue.SEARCH_RESULT_BOOK_NOW_BUTTON}`,
                              "data-test": "book-button",
                              variant: "contained",
                              sx: Ee,
                              disabled: h,
                              onClick: (x) => {
                                x.stopPropagation(), g(B, {
                                  state: { showBackButton: !0, resetQuantity: !0 }
                                }), m(O, fe(t));
                              },
                              children: /* @__PURE__ */ e.jsx(
                                y,
                                {
                                  variant: "groupTitle",
                                  color: "inherit",
                                  children: F
                                }
                              )
                            }
                          ) : null,
                          /* @__PURE__ */ e.jsx(_t, { plan: t })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
      }
    ) })
  );
}, Pt = () => {
  const { t } = U(), { triggerResetFilters: n } = Qe(), a = be();
  return /* @__PURE__ */ e.jsxs(
    s,
    {
      width: "100%",
      height: (l) => l.typography.pxToRem(300),
      justifyContent: "center",
      alignItems: "center",
      children: [
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: "h1",
            color: a,
            textAlign: "center",
            children: t("static-search-results-no-listings-found-label", {
              defaultValue: "No Results For This Filters"
            })
          }
        ),
        /* @__PURE__ */ e.jsxs(
          s,
          {
            direction: "row",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            children: [
              /* @__PURE__ */ e.jsxs(
                y,
                {
                  variant: "h4",
                  color: a,
                  children: [
                    t("static-search-results-fewer-filters-label", {
                      defaultValue: "Use fewer filters or"
                    }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ye,
                {
                  onClick: () => n(),
                  title: t("static-reset-filter-empty-label", {
                    defaultValue: "Reset all"
                  }),
                  size: "large",
                  sx: {
                    textDecoration: "underline",
                    color: a,
                    lineHeight: 1.1,
                    "&:active": {
                      textDecoration: "none",
                      color: a
                    }
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Bt = 2, Lt = () => {
  const t = q();
  return /* @__PURE__ */ e.jsx(Z, { sx: { width: t.typography.pxToRem(C), margin: 0.25 }, children: /* @__PURE__ */ e.jsxs(X, { component: "div", children: [
    /* @__PURE__ */ e.jsxs(
      J,
      {
        sx: {
          position: "relative"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            N,
            {
              icon: "fal fa-image",
              sx: {
                position: "absolute",
                zIndex: 2,
                fontSize: t.typography.pxToRem(32),
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: t.palette.grey[600]
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            S,
            {
              variant: "rounded",
              animation: "wave",
              sx: {
                width: t.typography.pxToRem(C),
                height: t.typography.pxToRem(ae),
                borderRadius: 0,
                backgroundColor: t.palette.background.image
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      ee,
      {
        sx: {
          padding: 6,
          paddingTop: 8
        },
        title: /* @__PURE__ */ e.jsxs(
          s,
          {
            width: t.typography.pxToRem(se),
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            children: [
              /* @__PURE__ */ e.jsxs(
                s,
                {
                  minWidth: 0,
                  flex: 1,
                  gap: 1,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      S,
                      {
                        variant: "rounded",
                        animation: "wave",
                        sx: {
                          width: "70%",
                          height: t.typography.pxToRem(22)
                        }
                      }
                    ),
                    /* @__PURE__ */ e.jsx(v, { height: `calc(1.2em * ${Bt})`, children: /* @__PURE__ */ e.jsxs(s, { gap: 1, children: [
                      /* @__PURE__ */ e.jsx(
                        S,
                        {
                          variant: "rounded",
                          animation: "wave",
                          sx: {
                            width: "100%",
                            height: t.typography.pxToRem(16)
                          }
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        S,
                        {
                          variant: "rounded",
                          animation: "wave",
                          sx: {
                            width: "66%",
                            height: t.typography.pxToRem(16)
                          }
                        }
                      )
                    ] }) })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                s,
                {
                  alignItems: "flex-end",
                  flexShrink: 0,
                  gap: 1,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      S,
                      {
                        variant: "rounded",
                        animation: "wave",
                        sx: {
                          width: t.typography.pxToRem(40),
                          height: t.typography.pxToRem(20)
                        }
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      S,
                      {
                        variant: "rounded",
                        animation: "wave",
                        sx: {
                          width: t.typography.pxToRem(56),
                          height: t.typography.pxToRem(20)
                        }
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        disableTypography: !0
      }
    ),
    /* @__PURE__ */ e.jsx(
      te,
      {
        variant: "fullProfile",
        sx: { padding: 6 },
        children: /* @__PURE__ */ e.jsxs(
          s,
          {
            spacing: 6,
            height: "100%",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ e.jsx(v, { height: "1.4em", children: " " }),
              /* @__PURE__ */ e.jsx(
                s,
                {
                  direction: "row",
                  gap: 4,
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: /* @__PURE__ */ e.jsx(
                    S,
                    {
                      variant: "rounded",
                      animation: "wave",
                      sx: {
                        borderRadius: t.typography.pxToRem(36),
                        alignSelf: "flex-end",
                        width: t.typography.pxToRem(99),
                        height: t.typography.pxToRem(36)
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    )
  ] }) });
}, $t = 2, At = () => {
  const t = q();
  return /* @__PURE__ */ e.jsx(Z, { sx: { width: t.typography.pxToRem(C), margin: 0.25 }, children: /* @__PURE__ */ e.jsxs(X, { component: "div", children: [
    /* @__PURE__ */ e.jsxs(
      J,
      {
        sx: {
          position: "relative"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            N,
            {
              icon: "fal fa-image",
              sx: {
                position: "absolute",
                zIndex: 2,
                fontSize: t.typography.pxToRem(32),
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: t.palette.grey[600]
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            S,
            {
              variant: "rounded",
              animation: "wave",
              sx: {
                width: t.typography.pxToRem(C),
                height: t.typography.pxToRem(ae),
                borderRadius: 0,
                backgroundColor: t.palette.background.image
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      ee,
      {
        title: /* @__PURE__ */ e.jsxs(
          s,
          {
            width: t.typography.pxToRem(se),
            gap: 1,
            children: [
              /* @__PURE__ */ e.jsx(
                S,
                {
                  variant: "rounded",
                  animation: "wave",
                  sx: {
                    width: "70%",
                    height: t.typography.pxToRem(22)
                  }
                }
              ),
              /* @__PURE__ */ e.jsx(v, { height: `calc(1.2em * ${$t})`, children: /* @__PURE__ */ e.jsxs(s, { gap: 1, children: [
                /* @__PURE__ */ e.jsx(
                  S,
                  {
                    variant: "rounded",
                    animation: "wave",
                    sx: {
                      width: "100%",
                      height: t.typography.pxToRem(16)
                    }
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  S,
                  {
                    variant: "rounded",
                    animation: "wave",
                    sx: {
                      width: "66%",
                      height: t.typography.pxToRem(16)
                    }
                  }
                )
              ] }) })
            ]
          }
        ),
        disableTypography: !0,
        sx: { paddingBlockStart: 8, paddingBlockEnd: 0, paddingInline: 6 }
      }
    ),
    /* @__PURE__ */ e.jsx(
      te,
      {
        variant: "fullProfile",
        sx: { paddingInline: 6, paddingBlockEnd: 6 },
        children: /* @__PURE__ */ e.jsxs(
          s,
          {
            spacing: 6,
            height: "100%",
            justifyContent: "space-between",
            sx: { paddingBlockStart: 6 },
            children: [
              /* @__PURE__ */ e.jsx(
                v,
                {
                  height: "1.4em",
                  fontSize: t.typography.pxToRem(16),
                  children: " "
                }
              ),
              /* @__PURE__ */ e.jsx(
                s,
                {
                  direction: "row",
                  gap: 4,
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: /* @__PURE__ */ e.jsx(
                    S,
                    {
                      variant: "rounded",
                      animation: "wave",
                      sx: {
                        borderRadius: t.typography.pxToRem(36),
                        alignSelf: "flex-end",
                        width: t.typography.pxToRem(99),
                        height: t.typography.pxToRem(36)
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    )
  ] }) });
}, Dt = (t, n, a) => {
  const l = { locale: a }, u = { month: "short", day: "numeric" }, p = Y(t), h = p.toLocaleString(u, l), i = Y(n);
  if (!!p.hasSame(i, "day"))
    return h;
  const o = i.toLocaleString(u, l);
  return `${h} - ${o}`;
}, Ft = (t, n, a, l) => {
  const u = { locale: a }, p = Y(t), h = p.toLocaleString(
    { month: "short", day: "numeric" },
    u
  ), i = l(p, !0), g = Y(n), o = l(g, !0);
  return `${h} | ${i} - ${o}`;
}, Ot = ({
  selectedOffice: t,
  entity: n,
  bookingMode: a
}) => {
  const {
    t: l,
    i18n: { language: u }
  } = U(), { formatDateTime: p } = he(), h = Be(), i = h.get("periodStart"), g = h.get("periodEnd");
  return D.useMemo(() => {
    const o = ve(t, l);
    if (n === $.Resource && i && g) {
      const m = u ?? "en", r = a === Ze.Date ? Dt(i, g, m) : Ft(i, g, m, p);
      return /* @__PURE__ */ e.jsxs(s, { alignItems: "center", children: [
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: "button",
            fontWeight: "bold",
            noWrap: !0,
            children: o
          }
        ),
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: "button",
            noWrap: !0,
            children: r
          }
        )
      ] });
    }
    return /* @__PURE__ */ e.jsx(
      y,
      {
        variant: "button",
        fontWeight: "bold",
        noWrap: !0,
        children: o
      }
    );
  }, [
    t,
    n,
    i,
    g,
    l,
    p,
    u,
    a
  ]);
}, zt = (t, n) => f.isObject(t) && f.has(t, "_id") && n === $.Resource, Ut = (t, n) => f.isObject(t) && f.has(t, "_id") && n === $.Subscription, ta = () => {
  const { t } = U(), { trackPublicEvent: n } = ge(), { data: a, isLoading: l } = Xe(), { data: u, isLoading: p } = Je(), [h] = et(), [i] = tt(), g = D.useMemo(
    () => f.find(
      a,
      (d) => d.resourceType === h && d.listingType === i
    ),
    [a, h, i]
  ), o = g?.listingType === "resource" ? $.Resource : $.Subscription, m = vt(), { data: r } = at({ orgSlug: m.orgSlug }), I = st(r), [w] = ot(), c = D.useMemo(() => I(w), [w, I]), j = c?.length === 1 && c[0].timezone ? c[0].timezone : "local", { data: T, isFetching: _ } = Tt({
    type: h,
    listingType: i,
    timezone: j
  }), { data: E, isFetching: P } = Rt({
    type: h,
    listingType: i
  }), B = nt(), R = _ || P || B || l || p, k = Be(), F = k.get("periodStart"), O = k.get("periodEnd"), z = k.get("capacity"), x = k.get("amenities"), G = k.get("type"), H = g?.icon ?? null, M = D.useMemo(
    () => t(`subcategory-${g?._id}-title`, {
      defaultValue: g?.title ?? "All Listings"
    }),
    [g, t]
  ), A = o === $.Resource ? T : E, L = o === $.Resource ? _ : P, { localeFormat: oe } = he(), {
    settings: { businessHours: V }
  } = de(), b = c?.length === 1 && c[0].businessHours ? c[0].businessHours : V, me = D.useMemo(
    () => f.find(
      a,
      (d) => d.resourceType === h && d.listingType === i
    )?.bookingMode,
    [a, h, i]
  ), Ae = it({
    businessHours: b,
    selectedOffice: c?.map((d) => d._id) ?? null
  }), ne = rt({
    localeFormat: oe,
    businessHours: b,
    bookingMode: me,
    searchStart: F,
    searchEnd: O,
    closedDaysIntervals: Ae
  });
  bt();
  const De = D.useCallback(
    (d) => o === $.Resource ? /* @__PURE__ */ e.jsx(
      lt,
      {
        periodRangeReducer: ne,
        categories: u,
        resources: T,
        isFetchingResources: _,
        subCategories: a,
        onClose: d.onClose
      }
    ) : /* @__PURE__ */ e.jsx(
      ct,
      {
        categories: u,
        plans: E,
        isFetchingPlans: P,
        subCategories: a,
        onClose: d.onClose
      }
    ),
    [
      o,
      ne,
      u,
      T,
      _,
      a,
      E,
      P
    ]
  ), Fe = Ot({ selectedOffice: c, entity: o, bookingMode: me });
  return dt((d) => {
    n(W.SEARCH_RESULT_FILTER_CHANGE, d);
  }), /* @__PURE__ */ e.jsxs(
    wt,
    {
      emptyState: p || l ? null : /* @__PURE__ */ e.jsx(Pt, {}),
      selectedOffice: c,
      filterContent: o === $.Resource ? /* @__PURE__ */ e.jsx(
        gt,
        {
          periodRangeReducer: ne,
          categories: u,
          resources: T,
          isFetchingResources: _,
          isLoading: l || p,
          subCategories: a,
          resultsMode: !0
        }
      ) : /* @__PURE__ */ e.jsx(
        ht,
        {
          categories: u,
          plans: E,
          isFetchingPlans: P,
          isLoading: l || p,
          subCategories: a,
          resultsMode: !0
        }
      ),
      mobileFilterContent: De,
      mobileFilterButtonContent: Fe,
      resultsCount: A?.length ?? 0,
      isFetchingResults: L,
      resultsHeaderContent: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: "h1",
            color: "inherit",
            sx: { "& .MuiTypography-root": { marginBlockEnd: 0 } },
            children: H ? /* @__PURE__ */ e.jsx(
              Se,
              {
                alignItems: "center",
                icon: `fa ${H}`,
                color: "inherit",
                variant: "inherit",
                fontSize: "inherit",
                children: ye(M)
              }
            ) : ye(M)
          }
        ),
        R ? /* @__PURE__ */ e.jsx(
          pt,
          {
            size: ut.SELECT,
            sx: (d) => ({
              maxHeight: d.typography.pxToRem(15.4),
              "& .MuiCircularProgress-root": { color: "inherit" }
            })
          }
        ) : /* @__PURE__ */ e.jsx(
          y,
          {
            "data-test": "results-count",
            variant: "groupTitle",
            color: "inherit",
            children: `${t("static-search-results-label", {
              defaultValue: "Results"
            })}: ${A?.length ?? 0}`
          }
        )
      ] }),
      children: [
        !R && A?.length ? (
          // eslint-disable-next-line consistent-return
          f.map(A, (d, Oe) => {
            const xe = Number(Oe) < 4;
            if (zt(d, o))
              return /* @__PURE__ */ e.jsx(
                kt,
                {
                  resource: d,
                  searchStart: F,
                  searchEnd: O,
                  searchCapacity: z,
                  searchAmenities: x,
                  searchType: G,
                  searchOffice: f.map(c, "_id"),
                  isLoading: R,
                  priority: xe
                },
                d._id
              );
            if (Ut(d, o))
              return /* @__PURE__ */ e.jsx(
                Et,
                {
                  plan: d,
                  isLoading: R,
                  searchStart: F,
                  searchAmenities: x,
                  searchType: G,
                  searchOffice: f.map(c, "_id"),
                  priority: xe
                },
                d._id
              );
          })
        ) : null,
        R && /* @__PURE__ */ e.jsx(e.Fragment, { children: f.times(
          6,
          (d) => i === "resource" ? /* @__PURE__ */ e.jsx(Lt, {}, `search-page-resource-card-skeleton-${d}`) : /* @__PURE__ */ e.jsx(At, {}, `search-page-plan-card-skeleton-${d}`)
        ) })
      ]
    }
  );
};
export {
  ta as SearchResults
};
