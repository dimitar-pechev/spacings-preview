import { j as e, r as a } from "./webc-vendor-BjE1NNvQ.js";
import { s as d, d as o, p as i } from "./webc-vendor-core-n5KM3lsu.js";
import { p as l } from "./webc-vendor-dompurify-BuxjWxA2.js";
var u = /* @__PURE__ */ ((t) => (t.NoTax = "noTax", t.Excluded = "excluded", t.Included = "included", t))(u || {});
const f = ({
  dataTest: t,
  left: n,
  right: s,
  showDivider: r
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  r ? /* @__PURE__ */ e.jsx(d, { sx: { marginY: 2 } }) : null,
  /* @__PURE__ */ e.jsxs(
    o,
    {
      "data-test": t,
      direction: "row",
      display: "flex",
      alignItems: "center",
      justifyContent: !n && s ? "end" : "space-between",
      spacing: 1,
      children: [
        n ? /* @__PURE__ */ e.jsx(
          i,
          {
            justifyContent: "flex-start",
            fontWeight: 700,
            children: n
          }
        ) : null,
        s ? /* @__PURE__ */ e.jsx(
          i,
          {
            justifyItems: "flex-end",
            justifyContent: "flex-end",
            textAlign: "end",
            children: s
          }
        ) : null
      ]
    }
  )
] }), j = ({ content: t, className: n, ...s }) => {
  const r = a.useMemo(() => t ? l.sanitize(t, { ADD_ATTR: ["target"] }) : "", [t]);
  return /* @__PURE__ */ e.jsx(
    i,
    {
      "data-test": "html",
      dangerouslySetInnerHTML: { __html: r },
      ...s,
      className: n
    }
  );
};
export {
  u as F,
  j as H,
  f as S
};
