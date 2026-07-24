import { r as k, j as P } from "./webc-vendor-CvrN3tmw.js";
import { e as x, f as C, t as S, aV as A, L as h, aK as v } from "./webc-web-component-qMWWbTiu.js";
import { l as $ } from "./webc-vendor-lodash-BJv5POtF.js";
import { a as E } from "./webc-vendor-query-ByFZOUhz.js";
import { c as T, e as I } from "./webc-utils-BJ_c_xG-.js";
import { u as L, P as q } from "./webc-useProcessCheckout-CXEkPXRw.js";
import { u as D } from "./webc-useECommerceTracking-CWRT-Ysg.js";
import { f as F } from "./webc-checkoutParamsFlattening-C20WeRWb.js";
import { g as N } from "./webc-util.packs-CGO_QIYC.js";
import { d as Q } from "./webc-vendor-react-router-Tvle1imR.js";
const G = () => {
  const e = Q(), c = x(), [i] = C(), r = i ? `?${S({ language: i })}` : "", { data: t } = A(e.orgSlug, e.planId), { data: m } = h({ orgSlug: e.orgSlug }), p = v(m), l = k.useCallback(
    (a) => ({
      plan: {
        plan: t,
        locationName: a.search.locationName ?? "",
        locationAddress: a.search.locationAddress ?? "",
        startDate: a.checkout.body.startDate ?? "",
        quantity: a.checkout.body.quantity,
        packQuantity: a.checkout.body.packQuantity ?? null
      },
      search: a.search,
      errors: []
    }),
    [t]
  ), g = D(), { mutate: y } = E({
    mutationFn: (a) => F(a.checkout.orgSlug, a.checkout.body),
    onError: (a, o) => {
      T(a, "processPlanCheckout");
      const s = l(o);
      s.errors = I(a), c(
        `/${e.orgSlug}/plans/${e.planId}/checkout/process/failed${r}`,
        {
          state: s
        }
      );
    },
    onSuccess: ({ data: a }, { checkout: o, tracking: s, search: n }) => {
      const f = p(n.officeId ?? null), b = $.concat(a?.fees, a?.memberships)[0]?._id, u = !!a.isFlexibleArea;
      g.trackECommerceEvent(
        t.approval ? "generate_lead" : "purchase",
        [
          {
            id: t._id || "",
            name: t.name || "",
            listingType: "plan",
            resourceType: t.type || "",
            price: s.price || 0,
            tax: s.tax || 0,
            location: f ?? void 0,
            quantity: o.body.quantity
          }
        ],
        {
          discountCode: o.body.discountCode,
          // NOTE: We do not use the local variable, as it might not have the right value if we are just adding the payment details.
          paymentType: void 0,
          transactionId: b,
          ensureTrackedOnce: void 0
        }
      );
      const d = N({ plan: t, packQuantity: o.body.packQuantity });
      c(`/${e.orgSlug}/plans/${e.planId}/success${r}`, {
        state: {
          plan: t,
          locationName: n.locationName ?? "",
          locationAddress: n.locationAddress ?? "",
          startDate: o.body.startDate,
          memberActionsToken: a.memberActionsToken,
          hasInvitedUser: a.hasInvitedUser,
          ...d && { selectedPack: d },
          quantity: o.body.quantity,
          isFlexibleArea: u,
          ...u && {
            flexibleAreaBooking: a.flexibleAreaBooking,
            endDate: o.body.endDate
          },
          accountCreation: a.accountCreation
        }
      });
    }
  });
  return L({
    action: y,
    mapToFailedLocationState: l,
    getFailedUrl: (a, o) => `/${a}/plans/${o}/checkout/process/failed${r}`
  }), /* @__PURE__ */ P.jsx(q, {});
};
export {
  G as ProcessPlanCheckout
};
