import { r as t, j as l } from "./webc-vendor-CvrN3tmw.js";
import { l as f } from "./webc-vendor-lodash-BJv5POtF.js";
import { N as Z, M as j, ag as g } from "./webc-web-component-qMWWbTiu.js";
import { M as v, S as O, D as P, P as C } from "./webc-MapComponent-Y5APOXf9.js";
import { T as E, M as y, P as I, Z as S } from "./webc-vendor-leaflet-J_Ej7lqG.js";
const w = ({
  enableHighAccuracy: o,
  maximumAge: r,
  timeout: s
} = {}) => {
  const n = t.useMemo(
    () => ({
      enableHighAccuracy: o,
      maximumAge: r,
      timeout: s
    }),
    [o, r, s]
  ), [a, d] = t.useState(!0), [i, p] = t.useState(null), [e, u] = t.useState(0), [m, c] = t.useState(0);
  return t.useEffect(() => {
    if (!navigator.geolocation) {
      d(!1);
      return;
    }
    const x = (h) => {
      d(!1), u(h.coords.latitude), c(h.coords.longitude), p(null);
    }, M = (h) => {
      d(!1), p(h);
    };
    navigator.geolocation.getCurrentPosition(x, M, n);
    const F = navigator.geolocation.watchPosition(x, M, n);
    return () => navigator.geolocation.clearWatch(F);
  }, [n]), { data: t.useMemo(
    () => a || i ? void 0 : [e, m],
    [e, m, a, i]
  ), isLoading: a, error: i };
}, k = ({ locations: o }) => {
  const { data: r } = w(), s = t.useRef(null), n = t.useRef(!1), [a, d] = Z(), i = j(o), p = t.useMemo(() => {
    const e = o?.find(g);
    return e ? [
      parseFloat(e.physicalAddress.latitude),
      parseFloat(e.physicalAddress.longitude)
    ] : r ?? [0, 0];
  }, [o, r]);
  return t.useEffect(() => {
    n.current = !0;
    const e = s.current;
    return () => {
      n.current = !1, e && (e._animatingZoom = !1);
    };
  }, []), t.useEffect(() => {
    const e = f.some(a) ? i(a) : o, u = f.compact([
      ...f.map(
        e,
        (c) => g(c) ? [
          parseFloat(c.physicalAddress.latitude),
          parseFloat(c.physicalAddress.longitude)
        ] : void 0
      ),
      r
    ]), m = setTimeout(() => {
      if (!(!n.current || !s.current || !f.some(u)))
        try {
          s.current.fitBounds(u, { animate: !1 }), a && s.current.getZoom() > 5 && s.current.setZoom(s.current.getZoom() - 1, { animate: !1 });
        } catch {
        }
    }, 100);
    return () => clearTimeout(m);
  }, [o, r, i, a]), /* @__PURE__ */ l.jsxs(
    v,
    {
      ref: s,
      center: p,
      zoom: 13,
      style: { height: "100%", width: "100%" },
      zoomControl: !1,
      scrollWheelZoom: !1,
      children: [
        /* @__PURE__ */ l.jsx(
          E,
          {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        ),
        f.map(o, (e, u) => g(e) ? /* @__PURE__ */ l.jsx(
          y,
          {
            icon: a?.includes(e._id) ? O : P,
            zIndexOffset: 100,
            position: [
              parseFloat(e.physicalAddress.latitude),
              parseFloat(e.physicalAddress.longitude)
            ],
            eventHandlers: {
              click: () => d([e._id])
            }
          },
          u
        ) : null),
        r ? /* @__PURE__ */ l.jsx(
          y,
          {
            icon: C,
            position: r,
            children: /* @__PURE__ */ l.jsx(I, { autoClose: !0, children: "You are here" })
          }
        ) : null,
        /* @__PURE__ */ l.jsx(S, { position: "topright" })
      ]
    }
  );
};
export {
  k as MapFilter
};
