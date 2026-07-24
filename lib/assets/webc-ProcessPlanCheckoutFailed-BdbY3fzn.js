import { j as e } from "./webc-vendor-CvrN3tmw.js";
import { m as n, d as k, T as V, Y as L, $ as B, M as m, c as p } from "./webc-vendor-core-BCd2u07H.js";
import { u as N, ao as Q } from "./webc-vendor-mui-C8wQ-7jG.js";
import { J as R, K as D, N as E, aC as Y, P as M, t as b, bm as _ } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-lodash-BJv5POtF.js";
import { S as $ } from "./webc-SvgImage-DgUyAsUQ.js";
import { c as z, a as O, A as U } from "./webc-AlertError-BDc7uxc4.js";
import { s as W, l as q } from "./webc-styles-BMqjai7V.js";
import { P as J } from "./webc-PlanDetails-CZ_H7RZu.js";
import { g as K } from "./webc-util.packs-CGO_QIYC.js";
import { u as G } from "./webc-vendor-i18n-BICogURo.js";
import { u as H, a as X } from "./webc-vendor-react-router-Tvle1imR.js";
const ue = () => {
  const { t: r } = G(), { state: j } = H(), v = j, [, f] = R(), [, h] = D(), [, g] = E(), [, y] = Y(), c = X(), s = N(), l = Q(s.breakpoints.down("md")), C = l ? z : O, {
    plan: { plan: t, locationName: P, locationAddress: F, quantity: o, startDate: i, packQuantity: S } = {},
    search: a,
    errors: x
  } = v, T = K({ plan: t, packQuantity: S }), d = x.length > 0, w = d ? r("static-process-resource-checkout-failed-interrupted-title", {
    defaultValue: "Booking Interrupted"
  }) : r("static-process-resource-checkout-failed-process-title", {
    defaultValue: "Payment Couldn’t Be Processed"
  }), u = () => {
    y(_), h(null), g(null), f(null), c("../../../dashboard");
  }, I = () => {
    if (!a?.type || !a?.officeId) {
      u();
      return;
    }
    a.type && f(a.type), h("plan"), a.officeId && g([a.officeId]), c(`../../../search-results?${b(a)}`);
  }, A = () => {
    if (!o || !a?.officeId || !a?.type || !i) {
      u();
      return;
    }
    y(o), c(
      `..?${b({
        office: a.officeId,
        type: a.type,
        listingType: "plan",
        amenities: a.amenities,
        startDate: i,
        quantity: o
      })}`
    );
  };
  return /* @__PURE__ */ e.jsxs(
    n,
    {
      container: !0,
      justifyContent: "center",
      children: [
        /* @__PURE__ */ e.jsx(M, { page: "failed" }),
        /* @__PURE__ */ e.jsx(
          k,
          {
            padding: { xs: 6, sm: 10 },
            spacing: 4,
            children: /* @__PURE__ */ e.jsx(V, { sx: { width: { xs: 344, sm: 424, md: 924 }, backgroundColor: "#F8F9FC" }, children: /* @__PURE__ */ e.jsxs(
              n,
              {
                container: !0,
                direction: { xs: "column", md: "row" },
                children: [
                  /* @__PURE__ */ e.jsx(
                    n,
                    {
                      size: { xs: 6, md: 5 },
                      sx: { background: "#FFF" },
                      children: /* @__PURE__ */ e.jsx(
                        L,
                        {
                          sx: {
                            height: "100%",
                            width: "100%"
                          },
                          children: /* @__PURE__ */ e.jsx(
                            $,
                            {
                              src: C,
                              style: l ? W : q
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    n,
                    {
                      size: { xs: 12, sm: 7 },
                      sx: {
                        color: s.palette.common.black,
                        backgroundColor: s.palette.common.white,
                        paddingInline: l ? 0 : 8,
                        paddingBlock: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      },
                      children: [
                        /* @__PURE__ */ e.jsxs(
                          B,
                          {
                            variant: "fullProfile",
                            sx: {
                              "&.MuiCardContent-root": {
                                paddingBottom: 0
                              }
                            },
                            children: [
                              /* @__PURE__ */ e.jsx(
                                m,
                                {
                                  variant: "h1",
                                  "data-test": "success-message",
                                  color: s.palette.common.black,
                                  children: w
                                }
                              ),
                              d ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                                /* @__PURE__ */ e.jsx(U, { errors: x }),
                                /* @__PURE__ */ e.jsx(
                                  m,
                                  {
                                    variant: "body",
                                    paragraph: !0,
                                    marginY: s.typography.pxToRem(10),
                                    children: r("static-process-resource-checkout-failed-subtitle-find-available-rooms", {
                                      defaultValue: "Find available room for the desired period."
                                    })
                                  }
                                )
                              ] }) : /* @__PURE__ */ e.jsx(
                                m,
                                {
                                  variant: "body",
                                  paragraph: !0,
                                  marginY: s.typography.pxToRem(10),
                                  children: r("static-process-resource-checkout-failed-subtitle", {
                                    defaultValue: "We couldn’t complete your iDEAL payment.  No charge was made. To complete your purchase, try again."
                                  })
                                }
                              ),
                              t && a && i && /* @__PURE__ */ e.jsx(
                                J,
                                {
                                  plan: {
                                    _id: t._id,
                                    name: t.name,
                                    passes: t.passes,
                                    intervalLength: t.intervalLength,
                                    intervalCount: t.intervalCount,
                                    isFlexibleArea: t.isFlexibleArea ?? !1,
                                    passesValidityPeriod: t.passesValidityPeriod
                                  },
                                  search: {
                                    locationAddress: F,
                                    locationName: P,
                                    startDate: i,
                                    quantity: o,
                                    selectedPack: T
                                  }
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          k,
                          {
                            direction: "row",
                            gap: 2,
                            marginLeft: s.typography.pxToRem(16),
                            marginBottom: s.typography.pxToRem(16),
                            flexWrap: "wrap",
                            children: d ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                              /* @__PURE__ */ e.jsx(
                                p,
                                {
                                  variant: "contained",
                                  color: "primary",
                                  onClick: I,
                                  children: r("static-process-resource-checkout-failed-find-available-rooms", {
                                    defaultValue: "Find available rooms"
                                  })
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                p,
                                {
                                  variant: "outlined",
                                  color: "primary",
                                  onClick: u,
                                  children: r("static-process-resource-checkout-failed-browse-other-offerings", {
                                    defaultValue: "Browse other offerings"
                                  })
                                }
                              )
                            ] }) : /* @__PURE__ */ e.jsx(
                              p,
                              {
                                variant: "contained",
                                color: "primary",
                                onClick: A,
                                children: r("static-process-resource-checkout-failed-button-label", {
                                  defaultValue: "Try Again"
                                })
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ) })
          }
        )
      ]
    }
  );
};
export {
  ue as ProcessPlanCheckoutFailed
};
