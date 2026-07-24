import { az as e } from "./webc-web-component-QV_kTZ_O.js";
const i = {
  flexDirection: { xs: "column-reverse", lg: "row" },
  columnGap: 8,
  rowGap: 6,
  paddingTop: { xs: 6, lg: 12 },
  paddingBottom: { xs: 6, lg: 12 },
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: { xs: "center", lg: "flex-start" },
  marginInline: 6
}, n = {
  paddingInline: 6,
  paddingBlockStart: 8,
  paddingBlockEnd: 6,
  width: "100%",
  maxWidth: (t) => ({ sm: t.typography.pxToRem(e) })
}, r = {
  // https://officernd.atlassian.net/browse/GH-359
  // LOGGED TODO: These hacks are all required because PhoneField is a special case—
  // its layout and direction behavior can't be handled via standard logic.
  // Ideally, these should be addressed in the CoreUI.
  // Once CoreUI fixes these upstream, these overrides can be safely removed.
  // 1. Override text alignment on input to avoid misalignment in RTL.
  "& .MuiInputBase-root > input": {
    textAlign: (t) => t.direction === "rtl" ? "end" : "start"
  },
  // 2. Force direction on Stack to override inherited RTL direction ('double reverse' hack),
  //    ensuring consistent layout in both LTR and RTL modes.
  "& .MuiStack-root": {
    direction: (t) => t.direction,
    // 3. Adjust Typography margins because direction-based margin logic
    //    (start/end vs left/right) is broken under RTL.
    "& .MuiTypography-root": {
      marginLeft: 0,
      marginInlineStart: (t) => t.typography.pxToRem(4)
    }
  }
}, a = {
  position: "relative",
  objectFit: "contain",
  overflow: "hidden",
  width: "100%",
  margin: "auto",
  height: 240,
  marginTop: 30
}, l = {
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover"
};
export {
  n as a,
  i as c,
  l,
  r as p,
  a as s
};
