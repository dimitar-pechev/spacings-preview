import { j as e } from "./webc-vendor-CvrN3tmw.js";
import { d as b, M as s, m as t, T as w, Y as B, $ as R, c as y } from "./webc-vendor-core-BCd2u07H.js";
import { u as k, ao as S } from "./webc-vendor-mui-C8wQ-7jG.js";
import { J as V, K as P, N as z, P as D, t as j } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-lodash-BJv5POtF.js";
import { S as E } from "./webc-SvgImage-DgUyAsUQ.js";
import { c as L, a as A, A as I } from "./webc-AlertError-BDc7uxc4.js";
import { s as N, l as M } from "./webc-styles-BMqjai7V.js";
import { u as Y } from "./webc-useResourceDetails-D1QN-ta6.js";
import { L as $ } from "./webc-LocalizationDate-B67__28r.js";
import { u as v } from "./webc-vendor-i18n-BICogURo.js";
import { u as O, a as Q } from "./webc-vendor-react-router-Tvle1imR.js";
const W = ({
  resource: i,
  search: u
}) => {
  const a = k(), { t: n } = v(), c = S(a.breakpoints.down("md")), {
    office: { name: m, physicalAddress: l, _id: o },
    bookingMode: d
  } = i, f = l?.formattedAddress, { duration: p, isBookingByTime: r, startDate: h } = Y({
    periodStart: u.periodStart,
    periodEnd: u.periodEnd,
    bookingMode: d,
    officeId: o
  });
  return /* @__PURE__ */ e.jsxs(
    b,
    {
      sx: {
        padding: 3,
        marginBlock: 6,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: a.typography.pxToRem(12)
      },
      children: [
        /* @__PURE__ */ e.jsx(
          s,
          {
            variant: "h4",
            color: a.palette.common.black,
            children: n("static-summary-booking-details-label", {
              defaultValue: "Booking Details"
            })
          }
        ),
        /* @__PURE__ */ e.jsxs(
          t,
          {
            container: !0,
            spacing: 2,
            marginBlockStart: 4,
            children: [
              /* @__PURE__ */ e.jsx(t, { size: 5, children: /* @__PURE__ */ e.jsxs(
                s,
                {
                  variant: "caption",
                  color: a.palette.grey[600],
                  children: [
                    n("static-summary-location-address-label", {
                      defaultValue: "Location Address"
                    }),
                    ":"
                  ]
                }
              ) }),
              /* @__PURE__ */ e.jsx(t, { size: c ? 12 : 7, children: /* @__PURE__ */ e.jsx(
                s,
                {
                  variant: "body",
                  color: a.palette.common.black,
                  "data-test": "resource-location",
                  sx: { wordBreak: "break-word" },
                  children: f ?? m
                }
              ) }),
              r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(t, { size: c ? 12 : 5, children: /* @__PURE__ */ e.jsxs(
                  s,
                  {
                    variant: "caption",
                    color: a.palette.grey[600],
                    children: [
                      n("static-summary-date-label", {
                        defaultValue: "Date"
                      }),
                      ":"
                    ]
                  }
                ) }),
                /* @__PURE__ */ e.jsx(t, { size: c ? 12 : 7, children: /* @__PURE__ */ e.jsx(
                  s,
                  {
                    variant: "body",
                    color: a.palette.common.black,
                    "data-test": "booking-date",
                    children: h
                  }
                ) })
              ] }) : null,
              /* @__PURE__ */ e.jsx(t, { size: c ? 12 : 5, children: /* @__PURE__ */ e.jsxs(
                s,
                {
                  variant: "caption",
                  color: a.palette.grey[600],
                  children: [
                    n("static-summary-duration-label", {
                      defaultValue: "Duration"
                    }),
                    ":"
                  ]
                }
              ) }),
              /* @__PURE__ */ e.jsx(t, { size: c ? 12 : 7, children: /* @__PURE__ */ e.jsx(
                s,
                {
                  variant: "body",
                  color: a.palette.common.black,
                  "data-test": "booking-duration",
                  children: /* @__PURE__ */ e.jsx($, { dateTime: p })
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, te = () => {
  const { t: i } = v(), { state: u } = O(), a = u, [, n] = V(), [, c] = P(), [, m] = z(), l = Q(), o = k(), d = S(o.breakpoints.down("md")), f = d ? L : A, { resource: p, search: r, errors: h } = a, x = h.length > 0, C = x ? i("static-process-resource-checkout-failed-interrupted-title", {
    defaultValue: "Booking Interrupted"
  }) : i("static-process-resource-checkout-failed-process-title", {
    defaultValue: "Payment Couldn’t Be Processed"
  }), g = () => {
    c(null), m(null), n(null), l("../../../dashboard");
  }, F = () => {
    if (!r?.type || !r?.office) {
      g();
      return;
    }
    n(r.type), c("resource"), m(r.office.split(",")), l(`../../../search-results?${j(r)}`);
  }, T = () => {
    if (!r) {
      g();
      return;
    }
    l(`..?${j(r)}`);
  };
  return /* @__PURE__ */ e.jsxs(
    t,
    {
      container: !0,
      justifyContent: "center",
      children: [
        /* @__PURE__ */ e.jsx(D, { page: "failed" }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            padding: { xs: 6, sm: 10 },
            spacing: 4,
            children: /* @__PURE__ */ e.jsx(w, { sx: { width: { xs: 344, sm: 424, md: 924 }, backgroundColor: "#F8F9FC" }, children: /* @__PURE__ */ e.jsxs(
              t,
              {
                container: !0,
                direction: { xs: "column", md: "row" },
                children: [
                  /* @__PURE__ */ e.jsx(
                    t,
                    {
                      size: { xs: 6, md: 5 },
                      sx: { background: "#FFF" },
                      children: /* @__PURE__ */ e.jsx(
                        B,
                        {
                          sx: {
                            height: "100%",
                            width: "100%"
                          },
                          children: /* @__PURE__ */ e.jsx(
                            E,
                            {
                              src: f,
                              style: d ? N : M
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e.jsxs(
                    t,
                    {
                      size: { xs: 12, sm: 7 },
                      sx: {
                        color: o.palette.common.black,
                        backgroundColor: o.palette.common.white,
                        paddingInline: d ? 0 : 8,
                        paddingBlock: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      },
                      children: [
                        /* @__PURE__ */ e.jsxs(
                          R,
                          {
                            variant: "fullProfile",
                            sx: {
                              "&.MuiCardContent-root": {
                                paddingBottom: 0
                              }
                            },
                            children: [
                              /* @__PURE__ */ e.jsx(
                                s,
                                {
                                  variant: "h1",
                                  "data-test": "success-message",
                                  color: o.palette.common.black,
                                  children: C
                                }
                              ),
                              x ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                                /* @__PURE__ */ e.jsx(I, { errors: h }),
                                /* @__PURE__ */ e.jsx(
                                  s,
                                  {
                                    variant: "body",
                                    paragraph: !0,
                                    marginY: o.typography.pxToRem(10),
                                    children: i("static-process-resource-checkout-failed-subtitle-find-available-rooms", {
                                      defaultValue: "Find available room for the desired period."
                                    })
                                  }
                                )
                              ] }) : /* @__PURE__ */ e.jsx(
                                s,
                                {
                                  variant: "body",
                                  paragraph: !0,
                                  marginY: o.typography.pxToRem(10),
                                  children: i("static-process-resource-checkout-failed-subtitle", {
                                    defaultValue: "We couldn’t complete your iDEAL payment.  No charge was made. To complete your purchase, try again."
                                  })
                                }
                              ),
                              p && r?.periodStart && r?.periodEnd && /* @__PURE__ */ e.jsx(
                                W,
                                {
                                  resource: p,
                                  search: {
                                    periodStart: r.periodStart,
                                    periodEnd: r.periodEnd
                                  }
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          b,
                          {
                            direction: "row",
                            gap: 2,
                            marginLeft: o.typography.pxToRem(16),
                            marginBottom: o.typography.pxToRem(16),
                            flexWrap: "wrap",
                            children: x ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                              /* @__PURE__ */ e.jsx(
                                y,
                                {
                                  variant: "contained",
                                  color: "primary",
                                  onClick: F,
                                  children: i("static-process-resource-checkout-failed-find-available-rooms", {
                                    defaultValue: "Find available rooms"
                                  })
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                y,
                                {
                                  variant: "outlined",
                                  color: "primary",
                                  onClick: g,
                                  children: i("static-process-resource-checkout-failed-browse-other-offerings", {
                                    defaultValue: "Browse other offerings"
                                  })
                                }
                              )
                            ] }) : /* @__PURE__ */ e.jsx(
                              y,
                              {
                                variant: "contained",
                                color: "primary",
                                onClick: T,
                                children: i("static-process-resource-checkout-failed-button-label", {
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
  te as ProcessResourceCheckoutFailed
};
