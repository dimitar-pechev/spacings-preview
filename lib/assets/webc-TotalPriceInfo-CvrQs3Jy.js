import { j as r } from "./webc-vendor-CvrN3tmw.js";
import { M as m, a2 as f } from "./webc-vendor-core-BCd2u07H.js";
import { q as u } from "./webc-web-component-qMWWbTiu.js";
import { u as d } from "./webc-vendor-i18n-BICogURo.js";
const b = ({
  children: e,
  dataTestId: n,
  amount: t,
  showAmounts: l,
  largeTitle: s,
  title: o
}) => {
  const { t: i } = d(), { formatCurrency: c } = u(), a = !!t && t > 0;
  return /* @__PURE__ */ r.jsxs(
    m,
    {
      "data-test": n,
      variant: s ? "h3" : "body",
      fontWeight: s ? 700 : 400,
      color: "text.secondary",
      children: [
        l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          o ? `${o}: ` : "",
          a ? null : /* @__PURE__ */ r.jsx(
            f,
            {
              label: i("static-free-label", {
                defaultValue: "Free"
              })
            }
          ),
          a ? c(t) : null
        ] }) : null,
        e
      ]
    }
  );
};
export {
  b as T
};
