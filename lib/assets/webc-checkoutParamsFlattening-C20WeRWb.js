import { u as n } from "./webc-vendor-query-ByFZOUhz.js";
import { al as c, bg as y, t as i, bh as r, bi as d, bj as h } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-CvrN3tmw.js";
import "./webc-vendor-lodash-BJv5POtF.js";
import { d as a } from "./webc-vendor-react-router-Tvle1imR.js";
const b = ({
  orgSlug: e,
  office: o,
  teamId: t
}) => {
  const u = i({
    office: o,
    ...t && { teamId: t }
  });
  return {
    queryKey: d.detail(e, u),
    queryFn: () => c.get(`/i/${e}/checkout/billing-flow?${u}`).then((s) => s.data)
  };
}, $ = async (e, o) => c.post(`/i/${e}/checkout/intent`, o), q = async (e, o) => c.delete(`/i/${e}/checkout/intent/${o.intentId}`), x = async (e, o) => c.post(`/i/${e}/checkout/recovery-sessions`, o).then((t) => t.data), N = async (e, o, t) => c.put(`/i/${e}/checkout/recovery-sessions/${o}/consent`, { email: t }), F = async (e, o) => c.post(`/i/${e}/checkout`, o), P = async (e, o) => c.post(`/i/${e}/checkout/plan`, o), R = async (e, o) => c.post(`/i/${e}/checkout/payment/authorize`, o).then((t) => t.data), D = (e, o) => {
  const t = a();
  return n({
    ...b({ orgSlug: t.orgSlug, office: e, teamId: o }),
    enabled: !!e
  });
}, k = (e, o) => {
  const t = i({ ids: o });
  return {
    queryKey: r.detail(e, t),
    queryFn: () => c.get(`/i/${e}/documents?${t}`).then((u) => u.data),
    enabled: !!t.length
  };
}, Q = ({
  orgSlug: e,
  documentIds: o,
  enabled: t = !0
}) => {
  const u = k(e, o);
  return n({
    ...u,
    // allows for external control over the query's enabled state while still keeping the factory's own ids present gate
    enabled: t && u.enabled
  });
}, A = (e, o, t) => n({
  queryKey: h.byEmail(e, o),
  queryFn: () => c.get(`/i/${e}/members`, { params: { email: o } }).then((u) => u.data),
  enabled: t
}), K = async (e, o, t) => c.post(`/i/${e}/members/activate`, { email: o, token: t }), p = (e, o) => ({
  queryKey: y.detail(e, o),
  queryFn: () => c.get(`/i/${e}/checkout-rules`, { params: o }).then((t) => t.data),
  enabled: !!o.planId || !!o.resourceId
}), v = (e, o) => n({
  ...p(e, o)
}), m = (e) => !!(e.utm_source || e.utm_medium || e.utm_campaign || e.utm_term || e.utm_content), g = (e) => ({
  // Checkout body properties
  discountCode: e.checkout.body.discountCode,
  paymentIntent: e.checkout.body.paymentIntent,
  setupIntent: e.checkout.body.setupIntent,
  paymentMethod: e.checkout.body.paymentMethod,
  cardType: e.checkout.body.cardType,
  name: e.checkout.body.name,
  company: e.checkout.body.company,
  phone: e.checkout.body.phone,
  email: e.checkout.body.email,
  planId: e.checkout.body.planId,
  feeId: e.checkout.body.feeId,
  startDate: e.checkout.body.startDate,
  endDate: e.checkout.body.endDate,
  location: e.checkout.body.location,
  quantity: e.checkout.body.quantity,
  packQuantity: e.checkout.body.packQuantity,
  addOns: e.checkout.body.addOns,
  signupTermsNonMember: e.checkout.body.signupTermsNonMember,
  team: e.checkout.body.team,
  memberId: e.checkout.body.memberId,
  utm_source: e.checkout.body.utms?.utmSource,
  utm_medium: e.checkout.body.utms?.utmMedium,
  utm_campaign: e.checkout.body.utms?.utmCampaign,
  utm_term: e.checkout.body.utms?.utmTerm,
  utm_content: e.checkout.body.utms?.utmContent,
  // Organization
  orgSlug: e.checkout.orgSlug,
  // Tracking
  price: e.tracking.price,
  tax: e.tracking.tax,
  // Search parameters
  amenities: e.search.amenities,
  type: e.search.type,
  officeId: e.search.officeId,
  locationName: e.search.locationName,
  locationAddress: e.search.locationAddress,
  periodStart: e.search.periodStart
}), I = (e) => ({
  // Checkout body properties
  resourceId: e.checkout.body.resourceId,
  discountCode: e.checkout.body.discountCode,
  paymentIntent: e.checkout.body.paymentIntent,
  setupIntent: e.checkout.body.setupIntent,
  paymentMethod: e.checkout.body.paymentMethod,
  cardType: e.checkout.body.cardType,
  name: e.checkout.body.name,
  company: e.checkout.body.company,
  phone: e.checkout.body.phone,
  email: e.checkout.body.email,
  start: e.checkout.body.start,
  end: e.checkout.body.end,
  extras: e.checkout.body.extras,
  team: e.checkout.body.team,
  memberId: e.checkout.body.memberId,
  utm_source: e.checkout.body.utms?.utmSource,
  utm_medium: e.checkout.body.utms?.utmMedium,
  utm_campaign: e.checkout.body.utms?.utmCampaign,
  utm_term: e.checkout.body.utms?.utmTerm,
  utm_content: e.checkout.body.utms?.utmContent,
  signupTermsNonMember: e.checkout.body.signupTermsNonMember,
  // Organization
  orgSlug: e.checkout.orgSlug,
  // Tracking
  price: e.tracking.price,
  tax: e.tracking.tax,
  // Search parameters
  amenities: e.search.amenities,
  type: e.search.type,
  office: e.search.office,
  periodStart: e.search.periodStart,
  periodEnd: e.search.periodEnd,
  capacity: e.search.capacity,
  language: e.search.language
}), O = (e) => {
  const o = g(e);
  return encodeURIComponent(JSON.stringify(o));
}, E = (e) => {
  const o = I(e);
  return encodeURIComponent(JSON.stringify(o));
}, w = (e) => ({
  checkout: {
    body: {
      cardType: e.cardType,
      company: e.company,
      discountCode: e.discountCode,
      email: e.email,
      feeId: e.feeId,
      endDate: e.endDate,
      location: e.location,
      name: e.name,
      paymentIntent: e.paymentIntent,
      paymentMethod: e.paymentMethod,
      phone: e.phone,
      planId: e.planId,
      quantity: e.quantity,
      packQuantity: e.packQuantity,
      addOns: e.addOns,
      setupIntent: e.setupIntent,
      signupTermsNonMember: e.signupTermsNonMember,
      startDate: e.startDate,
      team: e.team,
      memberId: e.memberId,
      ...m(e) && {
        utms: {
          utmSource: e.utm_source,
          utmMedium: e.utm_medium,
          utmCampaign: e.utm_campaign,
          utmTerm: e.utm_term,
          utmContent: e.utm_content
        }
      }
    },
    orgSlug: e.orgSlug
  },
  tracking: {
    price: e.price,
    tax: e.tax
  },
  search: {
    amenities: e.amenities,
    locationAddress: e.locationAddress,
    locationName: e.locationName,
    officeId: e.officeId,
    periodStart: e.periodStart,
    type: e.type
  }
}), U = (e) => ({
  checkout: {
    body: {
      cardType: e.cardType,
      company: e.company,
      discountCode: e.discountCode,
      email: e.email,
      end: e.end,
      name: e.name,
      paymentIntent: e.paymentIntent,
      paymentMethod: e.paymentMethod,
      phone: e.phone,
      resourceId: e.resourceId,
      setupIntent: e.setupIntent,
      signupTermsNonMember: e.signupTermsNonMember,
      start: e.start,
      extras: e.extras,
      team: e.team,
      memberId: e.memberId,
      ...m(e) && {
        utms: {
          utmSource: e.utm_source,
          utmMedium: e.utm_medium,
          utmCampaign: e.utm_campaign,
          utmTerm: e.utm_term,
          utmContent: e.utm_content
        }
      }
    },
    orgSlug: e.orgSlug
  },
  tracking: {
    price: e.price,
    tax: e.tax
  },
  search: {
    amenities: e.amenities,
    capacity: e.capacity,
    language: e.language,
    office: e.office,
    periodEnd: e.periodEnd,
    periodStart: e.periodStart,
    type: e.type
  }
});
export {
  Q as a,
  F as b,
  $ as c,
  O as d,
  E as e,
  P as f,
  x as g,
  N as h,
  R as i,
  D as j,
  A as k,
  K as l,
  q as m,
  U as n,
  w as o,
  v as u
};
