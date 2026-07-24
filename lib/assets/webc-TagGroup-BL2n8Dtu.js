import { j as a } from "./webc-vendor-CvrN3tmw.js";
import { d as s } from "./webc-vendor-core-BCd2u07H.js";
const e = {
  position: "absolute",
  right: (o) => o?.spacing(4),
  bottom: (o) => o?.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  "& .MuiChip-root": {
    zIndex: 1,
    backgroundColor: "background.default"
  },
  "& .MuiChip-label": {
    textTransform: "uppercase",
    fontWeight: 600
  }
}, n = ({ children: o, sx: t = {} }) => /* @__PURE__ */ a.jsx(
  s,
  {
    spacing: 1,
    "data-test": "tag-group",
    sx: { ...e, ...t },
    children: o
  }
);
export {
  n as T
};
