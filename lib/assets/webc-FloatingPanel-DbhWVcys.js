import { aU as k, aQ as R, aV as I, r as T, j as a } from "./webc-vendor-BjE1NNvQ.js";
import { l as f } from "./webc-vendor-lodash-QZMGaMCX.js";
import { d, e as g, ai as S, p as h, o as w, s as A, M as v } from "./webc-vendor-core-n5KM3lsu.js";
import { u as P, ao as E } from "./webc-vendor-mui-BXZK0LVO.js";
import { a5 as M, I as W } from "./webc-web-component-QV_kTZ_O.js";
import { u as B } from "./webc-useTranslateErrorMessages-DomlZE1o.js";
const y = k(!1), C = ({
  theme: e,
  isMediumScreen: s,
  isSmallScreen: n,
  floatRight: o,
  sx: r
}) => ({
  position: "sticky",
  // HACK: leaflet (z-index: 1000) potentially overlapping the floating panel
  zIndex: 1001,
  top: o ? 10 : "auto",
  bottom: o ? "auto" : n ? 0 : 10,
  alignSelf: o ? "flex-start" : "auto",
  maxWidth: e.typography.pxToRem(340),
  minWidth: {
    xs: e.typography.pxToRem(220),
    sm: s ? e.typography.pxToRem(440) : e.typography.pxToRem(340)
  },
  marginX: "auto",
  ...n && {
    minWidth: "100vw",
    maxWidth: "100%",
    marginX: e.typography.pxToRem(-24)
  },
  ...r
}), j = ({ message: e, ...s }) => {
  const n = B(e);
  return /* @__PURE__ */ a.jsx(
    W,
    {
      icon: "far fa-exclamation-circle",
      variant: "alert",
      color: "red",
      alignItems: "baseline",
      ...s,
      children: /* @__PURE__ */ a.jsx(
        v,
        {
          variant: "alert",
          color: "red",
          children: n
        }
      )
    }
  );
}, F = (e) => e ? Array.isArray(e) ? e : [e] : [], H = ({
  collapsedPanelContent: e,
  errorMessage: s,
  children: n,
  sx: o
}) => {
  const [r, i] = R(y), u = I(y), p = F(s), c = P(), x = E(c.breakpoints.down("sm")), m = E(
    c.breakpoints.up(M)
  ), b = C({
    theme: c,
    isMediumScreen: !x && !m,
    isSmallScreen: x,
    floatRight: m,
    sx: o
  }), l = m;
  return T.useEffect(
    () => () => {
      u();
    },
    [u]
  ), /* @__PURE__ */ a.jsxs(d, { sx: b, children: [
    !r && !l ? /* @__PURE__ */ a.jsx(
      g,
      {
        "data-test": "collapsed-floating-panel",
        sx: {
          paddingInline: 6,
          paddingBlockStart: 8,
          paddingBlockEnd: 6,
          borderRadius: x ? "0 !important" : void 0
        },
        elevation: 24,
        children: /* @__PURE__ */ a.jsxs(
          d,
          {
            role: "button",
            "aria-label": "Expand panel",
            gap: 2,
            width: "100%",
            onClick: () => i(!0),
            children: [
              e,
              f.some(p) ? /* @__PURE__ */ a.jsx(d, { children: p?.map((t) => /* @__PURE__ */ a.jsx(
                j,
                {
                  "data-test": "panel-error-message",
                  message: t
                },
                t
              )) }) : null
            ]
          }
        )
      }
    ) : null,
    /* @__PURE__ */ a.jsx(
      S,
      {
        orientation: "vertical",
        in: r || l,
        sx: {
          width: "100%",
          // Pin content to bottom so the panel expands upward when opening
          ...!l && {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }
        },
        children: /* @__PURE__ */ a.jsxs(
          g,
          {
            "data-test": "expanded-floating-panel",
            sx: {
              paddingInline: 6,
              paddingBlockStart: 8,
              paddingBlockEnd: 6,
              width: "100%"
            },
            elevation: 8,
            children: [
              !l && r ? /* @__PURE__ */ a.jsx(
                h,
                {
                  position: "absolute",
                  right: 1,
                  top: 1,
                  children: /* @__PURE__ */ a.jsx(
                    w,
                    {
                      sx: {
                        fontSize: c.typography.pxToRem(28),
                        marginInlineEnd: 4,
                        marginTop: 6
                      },
                      iconProps: {
                        icon: "far fa-times",
                        rtlIcon: "far fa-times"
                      },
                      title: "Hide panel",
                      "aria-label": "Hide panel",
                      onClick: () => i(!1)
                    }
                  )
                }
              ) : null,
              /* @__PURE__ */ a.jsxs(
                d,
                {
                  gap: 2,
                  width: "100%",
                  children: [
                    n,
                    f.some(p) ? /* @__PURE__ */ a.jsx(d, { children: p?.map((t) => /* @__PURE__ */ a.jsx(
                      j,
                      {
                        "data-test": "panel-error-message",
                        message: t
                      },
                      t
                    )) }) : null
                  ]
                }
              ),
              l ? null : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx(
                  A,
                  {
                    sx: {
                      width: "100%",
                      marginY: 4
                    }
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  h,
                  {
                    role: "button",
                    "aria-label": "Collapse panel",
                    tabIndex: 0,
                    onClick: () => i(!1),
                    onKeyDown: (t) => {
                      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), i(!1));
                    },
                    sx: { cursor: "pointer", width: "100%" },
                    children: e
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
};
export {
  H as F,
  y as p
};
