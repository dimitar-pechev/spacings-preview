import { j as m } from "./webc-vendor-CvrN3tmw.js";
const d = ({
  src: t,
  alt: o = "svg image",
  width: a = "auto",
  maxWidth: e = "auto",
  height: s = "auto",
  maxHeight: u = "auto",
  top: i = "auto",
  bottom: n = "auto",
  left: l = "auto",
  right: x = "auto",
  style: f,
  ...g
}) => /* @__PURE__ */ m.jsx(
  "img",
  {
    src: t,
    alt: o,
    width: a,
    height: s,
    ...g,
    style: {
      position: "absolute",
      top: i,
      bottom: n,
      left: l,
      right: x,
      display: "flex",
      alignSelf: "flex-end",
      justifyContent: "flex-end",
      zIndex: 0,
      maxWidth: e,
      maxHeight: u,
      ...f
    }
  }
);
export {
  d as S
};
