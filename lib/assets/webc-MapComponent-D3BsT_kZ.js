import { r as a, j as e } from "./webc-vendor-BjE1NNvQ.js";
import { p as l } from "./webc-vendor-core-n5KM3lsu.js";
import { L as n, i as p, a as u, l as d, b as f } from "./webc-vendor-leaflet-BOYCAE5Z.js";
const m = "_SelectedMarkerIcon_uenui_1", I = "_PulseWrapper_uenui_5", h = "_InnerCircle_uenui_10", S = "_OuterCircle_uenui_23", r = {
  SelectedMarkerIcon: m,
  PulseWrapper: I,
  InnerCircle: h,
  OuterCircle: S
}, M = n.divIcon({
  html: `
    <div class=${r.PulseWrapper}>
      <div class=${r.InnerCircle}></div>
      <div class=${r.OuterCircle}></div>
      <div class=${r.InnerPulse}></div>
    </div>
  </div>
  `,
  className: "svg-icon",
  iconSize: [24, 40],
  iconAnchor: [12, 40],
  popupAnchor: [-12, -52]
}), o = {
  iconUrl: u,
  // NOTE: iconSize and iconAnchor are required for the icon pin to be positioned correctly.
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: p
}, _ = n.icon({ ...o }), P = n.icon({
  ...o,
  className: r.SelectedMarkerIcon
});
n.Marker.prototype.options.icon = _;
const g = a.forwardRef(
  ({ children: c, ...s }, t) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: d }),
    /* @__PURE__ */ e.jsx(
      l,
      {
        sx: (i) => ({
          height: "100%",
          "& .leaflet-popup-content-wrapper, & .leaflet-popup-tip": {
            fontSize: i.typography.pxToRem(14),
            backgroundColor: "#f0f4fe !important"
          }
        }),
        children: /* @__PURE__ */ e.jsx(
          f,
          {
            ref: t,
            ...s,
            children: c
          }
        )
      }
    )
  ] })
);
export {
  _ as D,
  g as M,
  M as P,
  P as S
};
