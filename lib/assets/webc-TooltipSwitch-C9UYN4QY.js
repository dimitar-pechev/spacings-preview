import { b4 as f, af as d } from "./webc-web-component-qMWWbTiu.js";
import { l as c } from "./webc-vendor-lodash-BJv5POtF.js";
import { r as h, j as i } from "./webc-vendor-CvrN3tmw.js";
import { ar as T, p as u, ab as m } from "./webc-vendor-core-BCd2u07H.js";
import { u as g, ao as w } from "./webc-vendor-mui-C8wQ-7jG.js";
const n = () => f() && d() ? "instant" : "smooth", j = (o) => {
  if (o) {
    const { top: t } = o.getBoundingClientRect();
    (t < 0 || t > window.innerHeight / 2) && o.scrollIntoView({ block: "start", behavior: n() });
    return;
  }
  window.scrollTo({
    top: 0,
    behavior: n()
  }), window.parent.postMessage({ action: "scrollToTop" }, "*");
}, k = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: n()
  }), window.parent.postMessage({ action: "scrollToBottom" }, "*");
}, C = (o) => {
  o?.scrollIntoView({ behavior: n() });
}, E = (o, t, e) => ({
  office: o.office.name,
  country: o.office.country,
  city: o.office.city,
  price: o.rate?.price,
  type: o.type,
  intervalLength: o.rate?.intervalLength,
  size: o.size,
  area: o.area,
  periodStart: t,
  periodEnd: e
}), P = (o, t) => ({
  price: o.price,
  intervalLength: o.intervalLength,
  type: o.type,
  startDate: t
}), B = (o) => o.toLowerCase().replace("&", "and").replaceAll(" ", "_"), b = ({ children: o, ...t }) => {
  const [e, s] = h.useState(!1), r = () => {
    s(!1);
  }, l = (a) => {
    a.stopPropagation(), s(!0);
  };
  return /* @__PURE__ */ i.jsx(T, { onClickAway: r, children: /* @__PURE__ */ i.jsx(u, { children: /* @__PURE__ */ i.jsx(
    m,
    {
      ...t,
      PopperProps: {
        disablePortal: !0
      },
      onClick: l,
      onClose: r,
      open: e,
      disableFocusListener: !0,
      disableHoverListener: !0,
      disableTouchListener: !0,
      children: o
    }
  ) }) });
}, H = ({
  compact: o = !1,
  children: t,
  slotProps: e,
  ...s
}) => {
  const r = g(), l = w(r.breakpoints.up("md")), a = e?.popper, p = {
    slotProps: {
      ...c.omit(e, "popper"),
      popper: {
        ...c.omit(a, "modifiers"),
        modifiers: c.compact([
          ...a?.modifiers ?? [],
          o ? {
            name: "offset",
            options: {
              offset: [0, -14]
            }
          } : void 0
        ])
      }
    }
  };
  return l ? /* @__PURE__ */ i.jsx(
    m,
    {
      ...p,
      ...s,
      children: t
    }
  ) : /* @__PURE__ */ i.jsx(
    b,
    {
      ...p,
      ...s,
      children: t
    }
  );
};
export {
  H as T,
  P as a,
  C as b,
  k as c,
  E as e,
  B as f,
  j as s
};
