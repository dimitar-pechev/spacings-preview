import { j as t } from "./webc-vendor-CvrN3tmw.js";
import { M as r, a6 as c, d } from "./webc-vendor-core-BCd2u07H.js";
import { q as x } from "./webc-web-component-qMWWbTiu.js";
import { S as p } from "./webc-HtmlComponent-KnqjQ7IO.js";
import { u as l } from "./webc-vendor-i18n-BICogURo.js";
import { b as f } from "./webc-util.resource-BFbWBC4g.js";
const b = ({
  id: o,
  name: s,
  quantity: m,
  price: n,
  typographySx: u
}) => {
  const { t: i } = l(), { formatCurrency: e } = x();
  return /* @__PURE__ */ t.jsx(
    p,
    {
      left: /* @__PURE__ */ t.jsxs(
        r,
        {
          variant: c.BODY,
          sx: u,
          children: [
            i(`plan-${o}-name`, {
              defaultValue: s ?? ""
            }),
            " ",
            "x ",
            m
          ]
        }
      ),
      right: /* @__PURE__ */ t.jsx(
        r,
        {
          variant: c.BODY,
          "data-test": `selected-extra-price-${s}`,
          children: e(n)
        }
      )
    },
    o
  );
}, g = ({
  layout: o,
  capacity: s,
  guestCount: m,
  sx: n,
  "data-test": u
}) => {
  const { t: i } = l(), e = f(i, o, s, m);
  return e.length === 0 ? null : /* @__PURE__ */ t.jsx(
    d,
    {
      gap: 1,
      "data-test": u,
      sx: n,
      children: e.map((a) => /* @__PURE__ */ t.jsxs(
        r,
        {
          variant: "body",
          color: "text.primary",
          children: [
            /* @__PURE__ */ t.jsxs(
              r,
              {
                component: "span",
                variant: c.TAB_HEADER,
                children: [
                  a.label,
                  ":"
                ]
              }
            ),
            " ",
            a.value,
            a.mutedSuffix ? /* @__PURE__ */ t.jsxs(
              r,
              {
                component: "span",
                variant: "body",
                color: "text.disabled",
                children: [
                  " ",
                  a.mutedSuffix
                ]
              }
            ) : null
          ]
        },
        a.kind
      ))
    }
  );
};
export {
  b as R,
  g as a
};
