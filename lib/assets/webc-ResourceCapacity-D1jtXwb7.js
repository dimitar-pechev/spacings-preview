import { j as t } from "./webc-vendor-CvrN3tmw.js";
import { M as u, j as i, a2 as l, p as m } from "./webc-vendor-core-BCd2u07H.js";
import { l as h } from "./webc-vendor-lodash-BJv5POtF.js";
import { m as x } from "./webc-web-component-qMWWbTiu.js";
import { T as d } from "./webc-TooltipSwitch-C9UYN4QY.js";
import { u as f } from "./webc-vendor-i18n-BICogURo.js";
const y = ({
  icon: e,
  iconProps: a,
  supContent: o,
  supProps: r,
  ...s
}) => /* @__PURE__ */ t.jsxs(
  u,
  {
    component: "span",
    noWrap: !0,
    ...s,
    children: [
      /* @__PURE__ */ t.jsx(
        i,
        {
          icon: e,
          ...a
        }
      ),
      /* @__PURE__ */ t.jsx(
        u,
        {
          component: "sup",
          ...r,
          sx: {
            marginInlineStart: (n) => n.typography.pxToRem(1)
          },
          children: o
        }
      )
    ]
  }
), j = 10.7639, g = (e, a) => {
  const o = Math.round(e / 1e6), r = Math.round(e / 1e6 * j);
  return a ? `${r} ft²` : `${o} m²`;
}, v = ({ area: e, culture: a, variant: o = "icon", ...r }) => {
  const { t: s } = f(), n = h.includes(["en-us", "en-gb"], a), p = g(e, n);
  return /* @__PURE__ */ t.jsx(
    d,
    {
      title: s("static-area-label", {
        defaultValue: "Area: {{area}}",
        area: p
      }),
      compact: !0,
      children: o === "tag" ? /* @__PURE__ */ t.jsx(
        l,
        {
          "data-test": "resource-area",
          icon: /* @__PURE__ */ t.jsx(i, { icon: "fa fa-ruler-combined" }),
          label: p,
          sx: x
        }
      ) : /* @__PURE__ */ t.jsx(m, { ...r, children: /* @__PURE__ */ t.jsx(
        y,
        {
          "data-test": "resource-area",
          icon: "fa fa-ruler-combined",
          variant: "body",
          fontSize: (c) => c.typography.pxToRem(16),
          supContent: p,
          supProps: { variant: "body", fontSize: (c) => c.typography.pxToRem(12) }
        }
      ) })
    }
  );
}, M = ({
  size: e,
  variant: a = "icon",
  ...o
}) => {
  const { t: r } = f();
  return /* @__PURE__ */ t.jsx(
    d,
    {
      title: r("static-people-capacity-label", {
        defaultValue: "Up to {{peopleCount}} people",
        peopleCount: e,
        size: e
      }),
      compact: !0,
      children: a === "tag" ? /* @__PURE__ */ t.jsx(
        l,
        {
          "data-test": "resource-capacity",
          icon: /* @__PURE__ */ t.jsx(i, { icon: "fa fa-users" }),
          label: e,
          sx: x
        }
      ) : /* @__PURE__ */ t.jsx(m, { ...o, children: /* @__PURE__ */ t.jsx(
        y,
        {
          "data-test": "resource-capacity",
          icon: "fa fa-users",
          variant: "body",
          fontSize: (s) => s.typography.pxToRem(16),
          supContent: e,
          supProps: { variant: "body", fontSize: (s) => s.typography.pxToRem(12) }
        }
      ) })
    }
  );
};
export {
  M as R,
  v as a
};
