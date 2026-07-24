import { j as s } from "./webc-vendor-CvrN3tmw.js";
import { M as E } from "./webc-vendor-core-BCd2u07H.js";
import { bc as T, bd as o } from "./webc-web-component-qMWWbTiu.js";
import { u as D } from "./webc-vendor-mui-C8wQ-7jG.js";
const _ = ({
  dateTime: i,
  textProps: n
}) => {
  const { sx: l, ...m } = n || {}, c = D().direction === "rtl", { dateStart: r, dateEnd: p, timeStart: e, timeEnd: a, format: f } = T(i, c);
  let t;
  switch (f) {
    case o.SAME_DATE_TIME:
      t = [r, e, "-", a].filter(Boolean);
      break;
    case o.DIFFERENT_DATE_TIME:
      t = [r, e, "-", p, a].filter(Boolean);
      break;
    case o.TIME_ONLY:
      t = [e, "-", a].filter(Boolean);
      break;
    default:
      t = [e].filter(Boolean);
  }
  return /* @__PURE__ */ s.jsx(
    E,
    {
      component: "span",
      "data-test": "localization-date",
      sx: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 0.6,
        flexWrap: "wrap",
        ...l
      },
      ...m,
      children: t.map((d, x) => (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ s.jsx("span", { children: d }, x)
      ))
    }
  );
};
export {
  _ as L
};
