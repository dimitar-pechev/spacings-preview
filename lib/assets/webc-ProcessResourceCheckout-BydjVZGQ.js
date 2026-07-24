import { r as l, j as p } from "./webc-vendor-BjE1NNvQ.js";
import { a as g } from "./webc-vendor-query-PvhNqagV.js";
import { e as y, f as h, t as C, ad as $ } from "./webc-web-component-QV_kTZ_O.js";
import "./webc-vendor-lodash-QZMGaMCX.js";
import { c as b, e as k } from "./webc-utils-DpmTJmtV.js";
import { u as A, P as S } from "./webc-useProcessCheckout-ULVGIVsX.js";
import { u as E } from "./webc-useECommerceTracking-C3BLjDP-.js";
import { b as I } from "./webc-checkoutParamsFlattening-BjncwS0g.js";
import { d as x } from "./webc-vendor-react-router-W8U6ip5z.js";
import { u as P } from "./webc-vendor-i18n-DYvJO9nR.js";
const V = () => {
  const s = x(), i = y(), [u] = h(), a = u ? `?${C({ language: u })}` : "", { t: c } = P(), { data: e } = $(s.orgSlug, s.resourceId), n = l.useCallback(
    (o) => ({
      resource: {
        office: {
          name: c(`location-${e.office.accountId}-${e.office._id}-name`, {
            defaultValue: e.office.name
          }),
          physicalAddress: {
            formattedAddress: e.office.physicalAddress ? c(
              `location-${e.office.accountId}-${e.office._id}-formatted-address`,
              {
                defaultValue: e.office.physicalAddress.formattedAddress
              }
            ) : ""
          }
        },
        bookingMode: e.bookingMode
      },
      search: o.search,
      errors: []
    }),
    [
      e.office._id,
      e.office.name,
      e.office.accountId,
      c,
      e.office.physicalAddress,
      e.bookingMode
    ]
  ), m = E(), { mutate: f } = g({
    mutationFn: (o) => I(o.checkout.orgSlug, o.checkout.body),
    onError: (o, r) => {
      b(o, "processResourceCheckout");
      const t = n(r);
      t.errors = k(o), i(
        `/${s.orgSlug}/resources/${s.resourceId}/checkout/process/failed${a}`,
        {
          state: t
        }
      );
    },
    onSuccess: ({ data: o }, { checkout: r, tracking: t, search: d }) => {
      m.trackECommerceEvent(
        e.rate?.bookingPolicy.requiresApproval ? "generate_lead" : "purchase",
        [
          {
            id: e._id || "",
            name: e.name || "",
            listingType: "resource",
            resourceType: e.type || "",
            price: t.price || 0,
            tax: t.tax || 0,
            location: e.office,
            quantity: 1
          }
        ],
        {
          discountCode: r.body.discountCode || "",
          transactionId: o._id
        }
      ), i(`/${s.orgSlug}/resources/${s.resourceId}/success${a}`, {
        state: {
          resource: e,
          start: d.periodStart,
          end: d.periodEnd,
          layout: r.body.layout,
          guestCount: r.body.guestCount,
          memberActionsToken: o.memberActionsToken,
          hasInvitedUser: o.hasInvitedUser,
          accountCreation: o.accountCreation
        }
      });
    }
  });
  return A({
    action: f,
    mapToFailedLocationState: n,
    getFailedUrl: (o, r) => `/${o}/resources/${r}/checkout/process/failed${a}`
  }), /* @__PURE__ */ p.jsx(S, {});
};
export {
  V as ProcessResourceCheckout
};
