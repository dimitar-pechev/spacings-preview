import { ab as n, j as l } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-CvrN3tmw.js";
import "./webc-vendor-lodash-BJv5POtF.js";
const c = (t, e, a, u) => {
  const o = [];
  return e && o.push({
    kind: "layout",
    label: t("static-summary-room-layout-label", { defaultValue: "Layout" }),
    value: n(t, e),
    mutedSuffix: a != null ? t("static-summary-room-layout-capacity", {
      defaultValue: "({{capacity}} people)",
      capacity: a
    }) : void 0
  }), u != null && o.push({
    kind: "guestCount",
    label: t("static-guest-count-label", { defaultValue: "Attendees" }),
    value: String(u)
  }), o;
}, m = (t, e) => e == null ? null : t.layouts?.find((a) => a.name === e)?.capacity ?? null, f = ({
  t,
  areExtrasAvailable: e,
  requiresApproval: a
}) => e ? t("static-next-button-title", {
  defaultValue: "Next"
}) : a ? t("static-request-to-book-button-title", {
  defaultValue: "Request to Book"
}) : t("static-book-now-button-title", {
  defaultValue: "Book Now"
}), y = (t) => t ? l.DETAILS_REQUEST_TO_BOOK_BUTTON : l.DETAILS_BOOK_NOW_BUTTON, d = (t, e) => ({
  id: t?._id,
  name: t?.name,
  location: t?.office,
  listingType: "resource",
  resourceType: t?.type ?? "",
  price: e ?? 0,
  quantity: 1
});
export {
  y as a,
  c as b,
  d as e,
  m as f,
  f as g
};
