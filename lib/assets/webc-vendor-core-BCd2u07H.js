import { j as $, _ as Tu, r as s, s as oe, a as _o, t as Rf, R as kn, P as c, C as Of, T as Nf, q as ll, b as Ff, c as qa, u as Ru, e as Lf, S as Pf, d as Af, f as zf, g as Hf, h as Bf } from "./webc-vendor-CvrN3tmw.js";
import { A as Vf, a as jf, u as Bn, T as Wf, b as Uf, B as Ou, I as _f, c as qo, d as qf, C as hr, P as Yf, e as Kf, f as Xf, g as Gf, h as Zf, i as Qf, j as Jf, k as em, l as tm, F as rm, m as im, n as nm, o as Ta, p as am, q as om, r as sm, M as lm, S as cl, s as No, t as sc, v as cm, L as Nu, D as dm, w as um, x as pm, y as hm, z as fm, R as mm, E as gm, G as vm, H as xm, J as bm, K as ym, N as wm, O as $m, Q as km, U as Cm, V as Sm, W as Em, X as Dm, Y as Mm, Z as Im, _ as Tm, $ as Rm, a0 as Om, a1 as Nm, a2 as Ii, a3 as ze, a4 as mt, a5 as Ya, a6 as Qc, a7 as wa, a8 as Cn, a9 as Fm, aa as Jc, ab as Lm, ac as Fu, ad as Lu, ae as Pu, af as Yo, ag as si, ah as ed, ai as td, aj as Pm, ak as ln, al as xr, am as dl, an as rd } from "./webc-vendor-mui-C8wQ-7jG.js";
import { l as I } from "./webc-vendor-lodash-BJv5POtF.js";
import { N as Am, u as zm, a as Hm } from "./webc-vendor-react-router-Tvle1imR.js";
import "./webc-vendor-dompurify-BuxjWxA2.js";
const VC = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  Vf,
  {
    "data-test": "accordion",
    ...t,
    children: e
  }
), jC = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  jf,
  {
    "data-test": "accordion-details",
    ...t,
    children: e
  }
), ys = Tu.map((e) => ({
  name: e[0],
  iso2: e[1],
  dialCode: e[2]
})), lc = 10;
var fi = /* @__PURE__ */ ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.TAB_HEADER = "tabHeader", e.TAG_LABEL = "tagLabel", e.WIDGET_TITLE = "widgetTitle", e.GROUP_TITLE = "groupTitle", e.BODY = "body", e.BODY_FADED = "bodyFaded", e.CAPTION = "caption", e.BUTTON = "button", e.INHERIT = "inherit", e.ALERT = "alert", e))(fi || {}), vt = /* @__PURE__ */ ((e) => (e.CAPITALIZE = "capitalize", e.UPPERCASE = "uppercase", e.LOWERCASE = "lowercase", e.INITIAL = "initial", e.INHERIT = "inherit", e))(vt || {});
const Yt = {
  fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
  htmlFontSize: lc,
  fontSize: 14,
  lineHeight: 1.4
}, rt = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
}, Bm = [
  "typography.h5",
  "typography.h6",
  "typography.subtitle1",
  "typography.subtitle2",
  "typography.body1",
  "typography.body2",
  "typography.overline"
], Vm = '"Font Awesome 5 Pro"', Au = (e, t) => e ? t || "25%" : t || "max-content", jm = (e, t) => {
  if (I.isUndefined(e))
    return e;
  const [r, i = "main"] = e.split(".");
  return I.get(t, `palette.${r}.${i}`, e);
}, ws = (e, t, r, i = "") => I.reduce(
  e,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (n, a) => {
    const o = `${r}${i}${i ? I.capitalize(a) : a}`;
    return n[o] = {
      ...t(a)
    }, n;
  },
  {}
), WC = (e) => e.direction === "rtl", Wm = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}, Yi = s.forwardRef(
  ({ className: e, variant: t = fi.INHERIT, ellipsis: r = !1, color: i, children: n, ...a }, o) => {
    const l = Bn();
    return /* @__PURE__ */ $.jsx(
      Wf,
      {
        variant: t,
        "data-test": `typography-${t}`,
        sx: [r && Wm],
        ref: o,
        ...a,
        color: jm(i, l),
        className: oe(`rnd-typography-${t}`, e),
        children: n
      }
    );
  }
), UC = ({
  children: e,
  title: t,
  titleProps: r,
  disabled: i,
  ...n
}) => /* @__PURE__ */ $.jsxs(
  Uf,
  {
    "data-test": "accordion-summary",
    disabled: i,
    ...n,
    children: [
      /* @__PURE__ */ $.jsx(
        Yi,
        {
          "data-test": "accordion-summary-title",
          variant: fi.BODY_FADED,
          ...r,
          children: t
        }
      ),
      e
    ]
  }
), $r = "RndKendoElement", Um = "RndKendoEditorReadOnly", zu = "RndToggleControl", Hu = "RndToggleGroupControl", Bu = "RndDropdownField", _m = "RndTextField", cc = "RndPhoneFieldCountrySelector", qm = "RndPhoneField", Vu = "RndPhoneFieldInput", Ym = "RndCombobox", ju = "RndDatePicker", Km = "RndDateTimePicker", Xm = "RndDateRangePicker", Xt = {
  start: "RndLabelPlacement-start",
  top: "RndLabelPlacement-top"
}, $a = "RndHover", dc = "RndFocus", $s = {
  global: "RndDataGrid",
  columnActive: "RndDataGrid-column-active",
  selectCell: "RndDataGrid-select-cell"
}, Ra = {
  primary: "RndColor-primary",
  secondary: "RndColor-secondary",
  success: "RndColor-success",
  warning: "RndColor-warning",
  error: "RndColor-error",
  info: "RndColor-info",
  neutral: "RndColor-neutral",
  navigation: "RndColor-navigation",
  custom: "RndColor-custom"
}, Jr = "RndIconButton", mo = "RndNumberField", Wu = "RndNumberFieldInput", Gm = "RndFormLabel", uc = "RndInputLabel", Ko = "RndError", Zm = "RndEditor", Uu = {
  global: "RndMultiSelect",
  empty: "RndMultiSelect-empty"
}, xt = {
  global: "RndAlert",
  container: "RndAlert-container",
  noIcon: "RndAlert-noIcon",
  closeButton: "RndAlert-close-button",
  static: {
    container: "RndAlert-static-container",
    main: "RndAlert-static"
  },
  snackbar: {
    container: "RndAlert-snackbar-container",
    main: "RndAlert-snackbar"
  },
  inline: {
    main: "RndAlert-inline"
  },
  collapsible: {
    main: "RndAlert-collapsible",
    expanded: "RndAlert-collapsible-expanded",
    expandButton: "RndAlert-collapsible-expand-button",
    collapse: "RndAlert-collapsible-collapse",
    content: "RndAlert-collapsible-content"
  }
}, _u = {
  container: "RndSnackbar-container"
}, Hi = {
  xxs: "RndAvatar-xxs",
  xs: "RndAvatar-xs",
  sm: "RndAvatar-sm",
  md: "RndAvatar-md",
  lg: "RndAvatar-lg",
  xl: "RndAvatar-xl",
  xxl: "RndAvatar-xxl"
}, Bi = {
  rounded: "rounded"
}, Qm = "RndActive", Dr = {
  header: "RndCard-header",
  content: "RndCard-content",
  contentVariant: {
    default: "RndCard-content-default",
    sideBar: "RndCard-content-sideBar",
    fullProfile: "RndCard-content-fullProfile",
    profile: "RndCard-content-profile",
    shortProfile: "RndCard-content-shortProfile",
    longProfile: "RndCard-content-longProfile",
    paymentDetails: "RndCard-content-paymentDetails",
    resource: "RndCard-content-resource"
  }
}, id = {
  global: "RndMapMarkerLabel",
  shadow: "RndMapMarkerLabel-shadow"
}, Jm = "RndScrollBar", ks = {
  global: "RndPageLayout",
  header: "RndPageLayout-header",
  content: "RndPageLayout-content"
}, nd = {
  scrollContent: "RndPageLayoutVariant-scrollContent"
}, Fo = s.forwardRef(({ children: e, ...t }, r) => /* @__PURE__ */ $.jsx(
  Ou,
  {
    "data-test": "box",
    ref: r,
    ...t,
    children: e
  }
)), Sn = s.forwardRef(
  ({ icon: e, rtlIcon: t, svg: r, className: i, ...n }, a) => {
    const o = Bn().direction === "rtl";
    return /* @__PURE__ */ $.jsx(
      _f,
      {
        "data-test": "icon",
        ...n,
        component: "i",
        className: oe("rnd-icon", o && t ? t : e, i),
        ref: a,
        children: r
      }
    );
  }
), Lo = s.forwardRef(
  ({ iconProps: e, className: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    qo,
    {
      ref: i,
      "data-test": "icon-button",
      ...r,
      className: oe("rnd-icon-button", Jr, t),
      children: /* @__PURE__ */ $.jsx(
        Sn,
        {
          fontSize: "inherit",
          ...e
        }
      )
    }
  )
), qu = (e, t) => !I.isEmpty(e) || !I.isEmpty(t) && I.isUndefined(e) ? "" : xt.noIcon, Yu = (e = "medium") => ({
  success: /* @__PURE__ */ $.jsx(
    Sn,
    {
      "data-test": "alert-icon-success",
      icon: "fas fa-check-circle",
      fontSize: e
    }
  ),
  info: /* @__PURE__ */ $.jsx(
    Sn,
    {
      "data-test": "alert-icon-info",
      icon: "fas fa-info-circle",
      fontSize: e
    }
  ),
  warning: /* @__PURE__ */ $.jsx(
    Sn,
    {
      "data-test": "alert-icon-warning",
      icon: "fas fa-exclamation-triangle",
      fontSize: e
    }
  ),
  error: /* @__PURE__ */ $.jsx(
    Sn,
    {
      "data-test": "alert-icon-error",
      icon: "fas fa-exclamation-circle",
      fontSize: e
    }
  )
}), Ku = s.forwardRef(
  ({
    containerProps: e,
    severity: t,
    icon: r,
    color: i,
    className: n,
    action: a,
    onClose: o,
    closeButtonProps: l,
    ...d
  }, u) => /* @__PURE__ */ $.jsx(
    Fo,
    {
      "data-test": "alert-container",
      ...e,
      className: oe(xt.container, "rnd-alert-container", e?.className),
      ref: u,
      children: /* @__PURE__ */ $.jsx(
        qf,
        {
          "data-test": "alert",
          icon: r || t ? r : !1,
          color: !i && !t ? "primary" : i,
          severity: t,
          action: /* @__PURE__ */ $.jsxs($.Fragment, { children: [
            a,
            I.isFunction(o) && /* @__PURE__ */ $.jsx(
              Lo,
              {
                "data-test": "alert-close-button",
                "aria-label": "close",
                iconProps: {
                  icon: "fas fa-times",
                  ...l?.iconProps
                },
                ...I.omit(l, "iconProps", "className"),
                className: oe(
                  xt.closeButton,
                  "rnd-alert-close-button",
                  l?.className
                ),
                variant: d?.variant === "filled" ? "contained" : "text",
                color: "inherit",
                onClick: o
              }
            )
          ] }),
          ...d,
          className: oe(
            xt.global,
            "rnd-alert",
            n,
            qu(r, t)
          )
        }
      )
    }
  )
), _C = (e) => /* @__PURE__ */ $.jsx(
  hr,
  {
    "data-test": "collapse",
    ...e
  }
), qC = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Yf,
  {
    "data-test": "paper",
    ref: t,
    ...e
  }
)), eg = Yu("inherit"), tg = (e, t) => I.isEmpty(e) ? t && I.isUndefined(e) ? eg[t] : null : e, YC = s.forwardRef(
  ({
    className: e,
    icon: t,
    severity: r,
    color: i,
    variant: n = fi.ALERT,
    children: a,
    ...o
  }, l) => /* @__PURE__ */ $.jsxs(
    Yi,
    {
      "data-test": "alert-inline",
      ...o,
      color: i || r,
      variant: n,
      ref: l,
      className: oe(
        xt.inline.main,
        "rnd-alert-inline",
        e,
        qu(t, r)
      ),
      children: [
        tg(t, r),
        a
      ]
    }
  )
), KC = s.forwardRef(
  ({ containerProps: e, className: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    Ku,
    {
      "data-test": "alert-static",
      containerProps: {
        "data-test": "alert-static-container",
        ...e,
        className: oe(
          xt.static.container,
          "rnd-alert-static-container",
          e?.className
        ),
        sx: {
          display: "inline-block",
          ...e?.sx
        },
        ref: i
      },
      ...r,
      onClose: void 0,
      className: oe(xt.static.main, "rnd-alert-static", t)
    }
  )
), XC = (e) => {
  if (e) {
    const t = e.getBoundingClientRect(), r = window.scrollY || document.documentElement.scrollLeft, i = window.scrollY || document.documentElement.scrollTop;
    return {
      top: t.top + i,
      left: t.left + r,
      width: e.clientWidth,
      height: e.clientHeight
    };
  }
  return {};
}, rg = (e, t, r) => {
  const { pathname: i, search: n } = e, a = `${n}`;
  return I.includes(i, `${t}${a}`) ? { pathname: i, search: n } : { pathname: t, search: a };
}, ka = s.forwardRef(
  (e, t) => {
    const { activeClassName: r, className: i, ...n } = e;
    return /* @__PURE__ */ $.jsx(
      Am,
      {
        "data-test": "base-link",
        className: ({ isActive: a }) => oe(i, a && r),
        ...n,
        ref: t
      }
    );
  }
);
var aa = /* @__PURE__ */ ((e) => (e.REGULAR = "regular", e.HASH = "hash", e.VIRTUAL = "virtual", e))(aa || {});
const Xu = (e) => {
  const { tabVariant: t, value: r, url: i, hash: n, location: a } = e, o = s.useMemo(() => {
    switch (t) {
      case "regular":
        return {
          ...e,
          to: rg(a, i),
          component: ka,
          value: r || i
        };
      case "hash":
        return {
          ...e,
          to: {
            pathname: a.pathname,
            hash: n,
            search: a.search,
            state: !0
          },
          component: ka,
          value: n
        };
      case "virtual":
        return e;
      default:
        return {};
    }
  }, [n, a, t, i, r, e]);
  return /* @__PURE__ */ $.jsx(
    Kf,
    {
      "data-test": "tab",
      ...I.omit(o, ["tabVariant"])
    }
  );
}, Gu = (e) => /* @__PURE__ */ $.jsx(
  Xf,
  {
    "data-test": "tabs-container",
    "aria-label": "tabs",
    variant: "scrollable",
    scrollButtons: "auto",
    ...e
  }
), ig = (e) => setTimeout(() => {
  const t = document.getElementById(e);
  t?.scrollIntoView({ behavior: "smooth", block: "start" });
}, 200), GC = ({
  value: e = "",
  onChange: t,
  className: r,
  tabs: i,
  tabIndicatorProps: n,
  tabVariant: a = aa.REGULAR,
  pageContainerId: o,
  slotProps: l,
  ...d
}) => {
  const u = zm(), p = Hm(), h = s.useRef({ navigate: p }), [m, f] = s.useState(e), b = (x, w) => {
    a !== aa.HASH && a !== aa.VIRTUAL && f(w), I.isFunction(t) && t(x, w);
  };
  return s.useEffect(() => {
    e && f(e), a === aa.HASH && h.current.navigate(`${u.search}${e}`, { replace: !0 });
  }, [e, u.search]), s.useEffect(() => {
    u.hash && (f(u.hash), ig(u.hash.replace("#", "")));
  }, [u.hash]), I.size(i) < 2 ? /* @__PURE__ */ $.jsx($.Fragment, {}) : /* @__PURE__ */ $.jsx(
    Gu,
    {
      "data-test": "anchor-switch",
      value: m,
      onChange: b,
      className: r,
      ...d,
      slotProps: {
        ...l,
        ...n !== void 0 && { indicator: n }
      },
      children: I.map(i, (x, w) => /* @__PURE__ */ s.createElement(
        Xu,
        {
          ...x,
          tabVariant: a,
          key: x.value,
          location: u,
          index: w
        }
      ))
    }
  );
}, ZC = s.forwardRef(({ children: e, ...t }, r) => /* @__PURE__ */ $.jsx(
  Gf,
  {
    "data-test": "badge",
    ref: r,
    ...t,
    children: e
  }
)), Cs = s.forwardRef(
  ({ children: e, className: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    qo,
    {
      "data-test": "button",
      ...r,
      className: oe("rnd-button", t),
      ref: i,
      children: e
    }
  )
), QC = s.forwardRef(
  ({ href: e, className: t, children: r, ...i }, n) => /* @__PURE__ */ $.jsx(
    qo,
    {
      "data-test": "button-hyperlink",
      ...i,
      href: e,
      component: "a",
      className: oe("rnd-button-hyperlink", t),
      ref: n,
      children: I.isEmpty(r) ? e : r
    }
  )
), JC = s.forwardRef(
  ({ className: e, children: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    qo,
    {
      "data-test": "button-router-link",
      ref: i,
      ...r,
      component: ka,
      className: oe("rnd-button-router-link", e),
      children: t
    }
  )
), eS = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  Zf,
  {
    "data-test": "card",
    ...t,
    children: e
  }
), tS = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  Qf,
  {
    "data-test": "card-action-area",
    ...t,
    children: e
  }
), rS = s.forwardRef(
  ({ variant: e = "default", className: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    Jf,
    {
      "data-test": "card-content",
      className: oe(
        t,
        Dr.content,
        Dr.contentVariant[e],
        "rnd-card-content"
      ),
      ...r,
      ref: i
    }
  )
), iS = ({
  children: e,
  className: t,
  slotProps: r,
  ...i
}) => /* @__PURE__ */ $.jsx(
  em,
  {
    "data-test": "card-header",
    className: oe(t, Dr.header),
    slotProps: {
      ...r,
      title: {
        variant: fi.H4,
        ...r?.title
      }
    },
    ...i,
    children: e
  }
), nS = (e) => /* @__PURE__ */ $.jsx(
  tm,
  {
    "data-test": "card-media",
    ...e
  }
), Xo = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(rm, { ...t, children: e }), Zu = ({ className: e, ...t }) => /* @__PURE__ */ $.jsx(
  im,
  {
    "data-test": "label",
    className: oe("rnd-form-control-label", e),
    ...t
  }
), aS = ({
  label: e,
  labelPlacement: t = "start",
  color: r,
  className: i,
  helperText: n,
  errorMessage: a,
  inputRef: o,
  onChange: l,
  checked: d,
  checkboxProps: u,
  formControlLabelProps: p,
  formHelperTextProps: h,
  ...m
}) => /* @__PURE__ */ $.jsxs(
  Xo,
  {
    "data-test": "checkbox-form-control",
    ...m,
    className: oe(
      "rnd-checkbox-control",
      zu,
      i,
      !I.isEmpty(e) && Xt[t]
    ),
    children: [
      /* @__PURE__ */ $.jsx(
        Zu,
        {
          "data-test": "checkbox-label",
          ...p,
          label: e,
          labelPlacement: t,
          className: oe("rnd-checkbox-label", p?.className),
          onChange: l,
          checked: d,
          control: /* @__PURE__ */ $.jsx(
            nm,
            {
              "data-test": "checkbox",
              ...u,
              color: r,
              className: oe("rnd-checkbox", u?.className),
              inputRef: o
            }
          )
        }
      ),
      (!I.isEmpty(n) || !I.isEmpty(a)) && /* @__PURE__ */ $.jsxs(
        Ta,
        {
          "data-test": "checkbox-helper-text",
          component: "div",
          ...h,
          error: m.error && !I.isEmpty(a),
          children: [
            /* @__PURE__ */ $.jsx(hr, { in: m.error && !I.isEmpty(a), children: a }),
            /* @__PURE__ */ $.jsxs(hr, { in: !m.error || I.isEmpty(a), children: [
              n,
              " "
            ] })
          ]
        }
      )
    ]
  }
);
function Qu(e, t) {
  typeof e != "string" && (typeof e == "function" ? e(t) : e && typeof e == "object" && "current" in e && (e.current = t));
}
const oS = ({
  children: e,
  containerProps: t,
  childrenContainerProps: r,
  ...i
}) => /* @__PURE__ */ $.jsxs(
  Fo,
  {
    "data-test": "circular-progress-container",
    position: "relative",
    display: "inline-flex",
    ...t,
    children: [
      /* @__PURE__ */ $.jsx(
        am,
        {
          "data-test": "circular-progress",
          ...i
        }
      ),
      /* @__PURE__ */ $.jsx(
        Fo,
        {
          "data-test": "circular-progress-children",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...r,
          children: e
        }
      )
    ]
  }
), sS = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(om, { ...t, children: e });
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ri = s.createContext(0), pc = () => s.useContext(ri);
ri.displayName = "KendoReactZIndexContext";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ju = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-numerictextbox button):not(.k-split-button .k-split-button-arrow)", ng = ":not(.k-dropdownlist select)", ag = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled]):not(.k-dropdownlist select)",
  "textarea:not([disabled])",
  `button:not([disabled])${Ju}`,
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], Oa = [...ag, `[tabindex]${Ju}${ng}`], og = 500, sg = 768;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const lg = { small: og, medium: sg }, ep = s.createContext(lg), Go = () => s.useContext(ep);
ep.displayName = "KendoReactAdaptiveModeContext";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cg = () => typeof document < "u" ? document : {};
let dg = class {
  constructor() {
    this.scrollbar = 0;
  }
  get scrollbarWidth() {
    const t = cg();
    if (!this.scrollbar && t && t.createElement) {
      const r = t.createElement("div");
      r.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", r.innerHTML = "&nbsp;", t.body.appendChild(r), this.scrollbar = r.offsetWidth - r.scrollWidth, t.body.removeChild(r);
    }
    return this.scrollbar;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const sr = !!// from fbjs
(typeof window < "u" && window.document && window.document.createElement);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const M = (...e) => {
  const t = {}, r = (n) => typeof n == "object" ? Object.keys(n).forEach((a) => {
    t[a] = n[a];
  }) : t[n] = !0, i = (n) => n.filter((a) => a !== !0 && !!a).map((a) => Array.isArray(a) ? i(a) : r(a));
  return i(e), Object.keys(t).map((n) => t[n] && n || null).filter((n) => n !== null).join(" ");
}, Mt = (...e) => M(e).replace(/[^[\]a-zA-Z0-9-_!: ]/g, "");
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const z = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const tp = (e, t = Oa) => e.querySelectorAll(t.join(",")), rp = (e, t = Oa) => {
  if (e) {
    const r = tp(e, t);
    if (r.length && r[0].focus)
      return r[0];
  }
}, ug = (e, t = Oa) => {
  if (e) {
    const r = tp(e, t);
    if (r.length && r[r.length - 1].focus)
      return r[r.length - 1];
  }
}, pg = (e, t) => {
  if (e) {
    const r = rp(e, t);
    r && r.focus();
  }
}, ip = (e, t, r) => {
  if (!(!t || e.keyCode !== z.tab) && t) {
    const i = rp(t, r), n = ug(t, r);
    i && n && !e.shiftKey && e.target === n && (e.preventDefault(), i.focus()), i && n && e.shiftKey && e.target === i && (e.preventDefault(), n.focus()), i || e.preventDefault();
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const hg = (e, t, r) => {
  const i = typeof e == "string" ? parseInt(e) : e;
  if (!Number.isNaN(i))
    return i !== void 0 ? i : t ? r ? void 0 : -1 : 0;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ss = () => {
  let e = "", t, r;
  for (t = 0; t < 32; t++)
    r = Math.random() * 16 | 0, (t === 8 || t === 12 || t === 16 || t === 20) && (e += "-"), e += (t === 12 ? 4 : t === 16 ? r & 3 | 8 : r).toString(16);
  return e;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vt = function() {
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ad = (e) => {
  if (!sr || !document.body)
    return !1;
  const t = new dg().scrollbarWidth;
  document.body.style.setProperty("--kendo-scrollbar-width", `${t}px`);
};
function Ti(e, t) {
  const r = Po();
  return Ti = function(i, n) {
    i = i - 307;
    let a = r[i];
    if (Ti.gUKDvc === void 0) {
      var o = function(p) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let m = "", f = "";
        for (let b = 0, x, w, y = 0; w = p.charAt(y++); ~w && (x = b % 4 ? x * 64 + w : w, b++ % 4) ? m += String.fromCharCode(255 & x >> (-2 * b & 6)) : 0)
          w = h.indexOf(w);
        for (let b = 0, x = m.length; b < x; b++)
          f += "%" + ("00" + m.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(f);
      };
      Ti.LtQmWo = o, e = arguments, Ti.gUKDvc = !0;
    }
    const l = r[0], d = i + l, u = e[d];
    return u ? a = u : (a = Ti.LtQmWo(a), e[d] = a), a;
  }, Ti(e, t);
}
const lt = Ti;
(function(e, t) {
  const r = Ti, i = e();
  for (; ; )
    try {
      if (-parseInt(r(367)) / 1 + parseInt(r(321)) / 2 + parseInt(r(364)) / 3 + -parseInt(r(433)) / 4 * (-parseInt(r(322)) / 5) + -parseInt(r(473)) / 6 * (parseInt(r(435)) / 7) + parseInt(r(312)) / 8 + -parseInt(r(442)) / 9 === t) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Po, 333496);
const np = 10, fg = lt(437), mg = lt(467), gg = lt(324), vg = (e, t) => "[" + e + "]" + ("[" + mg + "]");
function hc(e) {
  const t = lt;
  return Math[t(449)](e[t(475)]() / 1e3);
}
function ap(e, t) {
  const r = lt, i = new Date(e * 1e3);
  return i[r(347)](i[r(401)]() + t), hc(i);
}
function fa() {
  return hc(/* @__PURE__ */ new Date());
}
function xg(e) {
  const t = lt, r = fa() - hc(e);
  return Math[t(449)](r / (24 * 60 * 60));
}
function bg(e) {
  const t = lt;
  if (typeof atob === t(410)) {
    if (t(372) === t(372)) return atob(e);
    {
      const n = _0x45eb19 ^ _0x3e027d;
      return _0x3a5992 = _0x3730b8, n;
    }
  }
  if (typeof Buffer === t(410)) {
    if (t(465) !== t(426)) return Buffer[t(331)](e, t(438))[t(317)](t(461));
    var r, i;
    return _0x5982dc[t(316)] === _0x234d23[t(427)] || ((r = _0x6250bd[t(310)]) === null || r === void 0 ? void 0 : r[t(382)](_0x48ef7f[t(427)])) || ((i = _0x5264b6[t(344)]) === null || i === void 0 ? void 0 : i[t(382)](_0x318dc8[t(427)]));
  }
  throw new Error(t(451));
}
function op(e) {
  const t = lt, r = bg(e), i = new Uint8Array(r[t(434)]);
  for (let n = 0; n < r[t(434)]; n++)
    if (t(395) === t(386)) {
      const a = _0x2a8377(_0x4e61ea), o = new _0x4dd5c5(a[t(434)]);
      for (let l = 0; l < a[t(434)]; l++)
        o[l] = a[t(369)](l);
      return o;
    } else i[n] = r[t(369)](n);
  return i;
}
function ul(e) {
  const t = lt, r = e[t(385)](/-/g, "+")[t(385)](/_/g, "/");
  return op(r);
}
function yg(e) {
  const t = lt, r = e[t(390)](".")[1], i = String[t(329)](...ul(r));
  return JSON[t(425)](i);
}
function oa(e) {
  return new Date(e * 1e3);
}
function En(e, t) {
  const r = lt, i = oa(t), n = new Date(i[r(388)](), i[r(459)](), i[r(401)]() + 1), a = n[r(475)]() / 1e3;
  return e > a;
}
function wg(e, t) {
  const r = lt, i = t[r(340)]((h) => h[r(436)] !== r(466))[r(340)]((h) => {
    const m = r;
    if (m(353) !== m(408)) {
      var f, b;
      return e[m(316)] === h[m(427)] || ((f = e[m(310)]) === null || f === void 0 ? void 0 : f[m(382)](h[m(427)])) || ((b = e[m(344)]) === null || b === void 0 ? void 0 : b[m(382)](h[m(427)]));
    } else {
      this[m(366)] = _0x12519a, this[m(404)] = m(373), this[m(427)] = m(357);
      const x = _0x318be5 ? m(336) + _0xe92a75 : "";
      this[m(387)] = m(319) + _0x313547[m(330)]() + m(418) + ("" + _0x293c36 + x + m(342) + _0x52e88f[m(330)]() + `.
`) + m(441);
    }
  })[r(411)]((h, m) => m[r(314)] - h[r(314)]), n = () => i[r(398)]((h) => h[r(436)] === r(424) && !En(fa(), h[r(314)])), a = () => i[r(398)]((h) => h[r(436)] === r(381) && !En(e[r(318)], h[r(314)])), o = () => i[r(398)]((h) => h[r(436)] === r(424) && !En(ap(fa(), np), h[r(314)])), l = () => i[r(398)]((h) => h[r(436)] === r(455) && !En(fa(), h[r(314)])), d = () => i[r(398)]((h) => h[r(436)] === r(381)), u = () => i[r(398)]((h) => h[r(436)] === r(424)), p = () => i[r(398)]((h) => h[r(436)] === r(455));
  return n() || a() || o() || l() || u() || d() || p();
}
function $g(e, t) {
  const r = lt;
  var i, n;
  let a = [];
  if (((i = e[r(348)]) === null || i === void 0 ? void 0 : i[r(434)]) > 0) r(339) === r(360) ? _0x5502ca = !0 : a = e[r(348)][r(471)]((o) => yg(o));
  else if (((n = e[r(469)]) === null || n === void 0 ? void 0 : n[r(434)]) > 0)
    if (r(412) === r(412)) a = e[r(469)][r(471)]((o) => ({ type: o[r(455)] ? r(455) : r(381), code: o[r(427)], expiration: o[r(474)], licenseId: null, userId: e[r(460)] }));
    else {
      const o = _0x3990e2[r(425)](_0x19e0bf[r(351)]);
      _0x4ca1a4[r(469)] = [...o[r(469)], ..._0x43a9f3[r(469)]], _0x5d6ebe[r(348)] = [...o[r(348)], ..._0x1643dc[r(348)]];
    }
  return wg(t, a);
}
const kg = (e) => e[lt(316)] || e[lt(344)][0];
class Cg {
  constructor(t) {
    const r = lt;
    this[r(366)] = t, this[r(404)] = r(373), this[r(427)] = r(309), this[r(387)] = r(379) + r(429);
  }
}
class Sg {
  constructor(t, r) {
    const i = lt;
    this[i(366)] = t, this[i(404)] = i(373), this[i(427)] = i(332), this[i(387)] = t + i(452) + (i(397) + t + i(400) + r);
  }
}
class Eg {
  constructor(t, r) {
    const i = lt;
    this[i(366)] = t, this[i(404)] = i(373), this[i(427)] = i(419), this[i(387)] = i(420) + r + i(431) + (i(407) + t + i(450)) + i(359);
  }
}
class Dg {
  constructor(t, r, i, n) {
    const a = lt;
    this[a(366)] = t, this[a(404)] = a(373), this[a(427)] = a(357);
    const o = i ? a(336) + i : "";
    this[a(387)] = a(319) + r[a(330)]() + a(418) + ("" + t + o + a(342) + n[a(330)]() + `.
`) + a(441);
  }
}
class Mg {
  constructor(t, r) {
    const i = lt;
    this[i(366)] = t, this[i(404)] = i(352), this[i(387)] = i(362) + -r + i(389) + i(445);
  }
}
function Ig(e) {
  const t = lt, r = t(335), i = t(380), n = e[t(385)](r, "")[t(385)](i, "")[t(385)](/\n/gm, ""), a = op(n);
  return crypto[t(394)][t(422)](t(405), a, { name: t(440), hash: t(457) }, !0, [t(458)]);
}
async function Tg(e, t) {
  const r = lt;
  if (typeof crypto !== r(454) || typeof crypto[r(394)] !== r(454) || typeof TextEncoder !== r(410) || typeof TextDecoder !== r(410)) {
    if (r(439) !== r(396)) return;
    {
      const x = _0x34a581(_0x1582e2(_0x7bf33b[r(314)]));
      _0x34c51f(_0x5506c5(), _0x25c113[r(314)]) ? _0x28a253 = new _0x14430e(_0x3f997d[r(366)], x) : (_0x36c8f5 = new _0x837e95(_0x56f6a2[r(366)], x), _0x12c799 = !0);
    }
  }
  const i = crypto[r(394)], [n, a, o] = e[r(390)]("."), l = ul(o), d = new TextEncoder(), u = new TextDecoder(), p = d[r(327)](n + "." + a), h = u[r(421)](ul(n));
  if (!(JSON[r(425)](h)[r(376)] === fg)) {
    if (r(392) !== r(323)) throw new Error(r(472));
    {
      if (_0x1099c9[r(456)](_0x46bd71[r(453)])) return _0x4bcdc1[r(354)](_0x3030b0[r(453)]);
      const { isLicenseValid: x, message: w } = _0x3e7f38(_0x5b5d09), y = _0x34b005(_0x12e66f);
      return w && !_0x5d7ae8[r(456)](y) && (_0x57b5ff(w, _0x5ee0c0), _0xc5232[r(463)](y)), _0x5b533c[r(399)](_0x36008[r(453)], x), x;
    }
  }
  const f = await Ig(t);
  if (!await i[r(458)](f[r(326)], f, l, p)) {
    if (r(446) === r(446)) throw new Error(r(308));
    _0x51af4d[r(358)](_0x142c10);
  }
}
const Rg = { data: '  {"products":[],"licenses":["eyJhbGciOiJSUzI1NiIsInR5cCI6IlRlbGVyaWsgTGljZW5zZSBFdmlkZW5jZSJ9.eyJjb2RlIjoiS0VORE9VSVJFQUNUIiwidHlwZSI6InBlcnBldHVhbCIsImV4cGlyYXRpb24iOjE3ODQyNzI4OTEsInVzZXJJZCI6ImUzODQ0MDE0LTNkYTQtNDU3ZC05MzdmLTVlYzNkOWVkYjhlOSIsImxpY2Vuc2VJZCI6Ijg3MjdjYmRmLWVlNDAtNDZjZi1iNDQwLTVhMjY2ZDI0MTFkNiJ9.VdrTlx_exA2AE_KnNMQ-YYkRXGSAK7wEjU7dQil2f4X5sVLfZ5mgP1OBNLDcTCtBUG4w1gCDwKH8NXCIHIcz8WKLD5rqMOiH2NeFBBzmizgA4wqI-d910fJPTGZ-pgPCb9JA4ip1tM9IH8B8k9tw6_Pctu7iYPSlOIACYoQVTrP25-r5g2nmXY4Iy0IBA0XYsFMIp78Q072aUQEi3egEdFlt-IlBieBD4Tel9DrHFbOK5dwUyxuDCkOAFdIHK3xM9dL-WnqDRvLhe9_LVak2dAcm9YsqQeCn3B9jcMeqr49cWHBYKJe4QvCh0RpheTgJNDI6G_jEpVWYtdN5FSYKAQ"],"userId":"e3844014-3da4-457d-937f-5ec3d9edb8e9","integrity":"bYGbxMld6BPN4dG01rgXwQMVsIT0OU/yBTrJUAtPTQw=","scriptKey":false,"timestamp":1750151550}  ' };
let Og = gg;
const go = /* @__PURE__ */ new Map(), od = /* @__PURE__ */ new Set();
function Po() {
  const e = ["yLD1B3O", "vvrMAgy", "igfUzcbPCYbUB3qGDMfSAwqGzM9Yia", "veTmmJaZ", "ww91CIb0CMLHBcbOyxmGzxHWAxjLzca", "zgvJB2rL", "Aw1WB3j0s2v5", "yNn4yva", "C3vIC2nYAxb0Aw9U", "CgfYC2u", "z3HvvK4", "y29Kzq", "vunJAum", "icbuBYbKB3DUBg9HzcbHigXPy2vUC2uGA2v5igzPBguSihzPC2L0igH0DhbZoI8VChjNCMvZCY5JBY8ZuhDrtuTA", "CwruBuC", "igrHEsHZksbHz28UcG", "z3jVDxa", "ndm2me5RzLP1Cq", "BgvUz3rO", "mJyXntjsuvP3z3y", "DhLWzq", "vgvSzxjPAYbmAwnLBNnLiev2AwrLBMnL", "yMfZzty0", "EMnSvNO", "uLnbu1nblvblq1mXlxyXxZu", "icbszw5LDYb5B3vYigXPy2vUC2uGyxqGAhr0Chm6lY9WCMDYzxnZlMnVlZnqEdLTnuy", "mtC2nZeZmKjqDgnnqW", "DgLTzxn0yw1W", "DMvYC2LVBG", "icbuBYbHy3f1AxjLigeGy29TBwvYy2LHBcbSAwnLBNnLlcb2AxnPDcbODhrWCZOVl3bYz3jLC3mUy28Vm1b5seLVsa", "zKLjz2m", "ywXS", "ANntr0K", "zMXVB3i", "lcb3zsbOB3bLihLVDsbLBMPVEwvKihLVDxiGDhjPywWGCgvYAw9KlGO", "yxrVyIbPCYb1BMrLzMLUzwq", "igLZig5VDcbSAxn0zwqGAw4GEw91CIbJDxjYzw50igXPy2vUC2uGzMLSzs4k", "BMfTzq", "B2jQzwn0", "DhjPywW", "AgfZ", "u0Hblti1nG", "DMvYAwz5", "z2v0tw9UDgG", "DxnLCKLK", "DxrMoa", "DK9jzgS", "ywrK", "DgHLBG", "rhn4Dei", "DxnHz2u", "vgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZAw5N", "BgLJzw5ZAw5Nrg9JC1vYBa", "ChjVzhvJDhm", "y2f0y2G", "BwfW", "vw5RBM93BIbSAwnLBNnLigv2AwrLBMnLihr5Cgu", "nZy4AgTZu1Lz", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "z2v0vgLTzq", "z3jVDxbfBMq", "sw52ywXPzcbSAwnLBNnLigv2AwrLBMnL", "veTmmJaX", "CMvKAxn0CMLIDxrLzej5", "q2jNAw0", "nda5mda5nKfotKXIsq", "rM1rwMq", "zxHWAxjHDgLVBG", "BvHUwgu", "ChjVzhvJDenVzgu", "Dg9tDhjPBMC", "ChvIBgLZAerHDgu", "ww91CIbJDxjYzw50igXPy2vUC2uGAgfZigv4CgLYzwqGB24G", "C3bSAwnL", "ndmXmdq2EfzhsxPw", "mJe1twHgtfPP", "vw13Egm", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuLjqKLQqu5cz2TXAgTPrZL3mejbuuvgqufpq0froefnsuLcq2Dlq0frrueYBw5vvK1TA3rOmNGRtI9prhn6rWPprKLzqKW2tK9pmvHxuMOXD2TTzwnlDuX6AuPeAez6mfDrBxLpALKZnfLTzZLWthvcqtLru1DYCLP1DLb3ndbocM0Wwc9hqM10DezTue52y2eZv21kmM9lttDqCeXPvvu5zJDpDJvxzuLyBNGRk3rZl0Xdl09cn0z0wITmAvjNsJCkmg1ABLbLvg9NzezYqvnMmhPtuuP2ngPTwdG0meXqytzUB21xzvvNsvzhueXmvKKXneDPyJHeBcTUt2nRCunoyWPRqvvvAZrjqKy2n0r1zLj0oxPrEvj4zZK5ExnHA3ziwdjtrgjKr3zjqMr4v3H2AgHTCKjVzwL4mhvtvNrhmMDTcMPKDLnXBfbkvMr2twjRmvHLmITtvwXKsLbYEeGXvNjuwwvsvxq0ExfxEhKXnM5gsLveAJLLEfOYmdjynfriA1uksLfjrefrquikls0Tls1ftKqGufvcteLdieTfws0Tls0T", "zg5zEhC", "ywXNB3jPDgHT", "zw5JB2rL", "DMP0B1i", "zNjVBunOyxjdB2rL", "Dg9mB2nHBgveyxrLu3rYAw5N", "zNjVBq", "veTmmJaY", "EfDuzMm", "AM9PBG", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0", "ihzLCNnPB24G", "AKziDK0", "zMjfs3O", "Bxbuzfi", "zMLSDgvY", "DvPPt1C", "lIbuAguGChjVzhvJDcb3yxmGChvIBgLZAgvKig9Uia", "CgfYC2vjBNq", "ChjVzhvJDenVzgvZ", "Dw5KzwzPBMvK", "qvHeswW", "C2v0rgf0zq", "BgLJzw5Zzxm", "D3HsBNO", "C3rYAw5NAwz5", "zgf0yq", "su5gtW", "rhbnz00", "z2v0", "DhjPBq", "AvnVCxe", "veTmmJa0", "D2fYBG", "icbuBYbJB250Aw51zsb1C2LUzYbVDxiGChjVzhvJDcWGy29UC2LKzxiGDxbNCMfKAw5NihrVigeGy29TBwvYy2LHBcbSAwnLBNnLoIbODhrWCZOVl3bYz3jLC3mUy28Vm0m5BxiXtq", "D1jAsgu", "q2rwuhe", "ww91CIbuCMLHBcbSAwnLBNnLihDPBgWGzxHWAxjLigLUia", "ALPoyKG", "mti5nZmZnuXku1DAvW", "D3LevfG", "ChjVzhvJDe5HBwu", "mtK4mdq4B0jiEuX4", "s3jLC3G", "y2HHCKnVzgvbDa", "DejjvLu", "sKzkuvK", "y0j1C3G", "v0fstG", "AxnbCNjHEq", "teLcC1C", "DhLW", "tuXVBxq", "y2XLyxi", "tM8GvgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZzsbMB3vUzc4k", "ls0Tls1ftKqGufvcteLdieTfws0Tls0T", "CgvYCgv0DwfS", "Aw5JBhvKzxm", "ChvZAa", "yMvTALi", "CMvWBgfJzq", "BvDPyMS", "BwvZC2fNzq", "z2v0rNvSBfLLyxi", "igrHEsHZks4k", "C3bSAxq", "Du5ezeO", "qK9PzKK", "AfvhwNy", "C3vIDgXL", "rfLjseq", "shLIEfC", "icbmzwfYBIbTB3jLigfIB3v0ia", "zMLUza", "C2v0", "igXPy2vUC2LUzYbHDca", "z2v0rgf0zq", "C2XPy2u", "q2LXqNG", "C2v2zxjPDhK", "C3bRAq", "C2nYAxb0s2v5", "icbuAgfUAYb5B3uGzM9YihrYEwLUzYbVDxqG", "r053tvC", "rgLMAMG", "zNvUy3rPB24", "C29YDa", "C2PbDNm", "v0rkz0m", "De93vhK", "D0j1wK0"];
  return Po = function() {
    return e;
  }, Po();
}
let Es = !0;
const Ng = (e) => {
  const t = lt;
  var r, i;
  return ((r = e[t(348)]) === null || r === void 0 ? void 0 : r[t(434)]) > 0 && (t(328) !== t(361) ? Promise[t(447)]((i = e[t(348)]) === null || i === void 0 ? void 0 : i[t(471)]((n) => Tg(n, Og)))[t(464)](() => {
    const n = t;
    n(371) !== n(371) ? ((void 0)[n(366)] = _0xa0e9fa, (void 0)[n(404)] = n(352), (void 0)[n(387)] = n(362) + -_0x3c322c + n(389) + n(445)) : Es = !0;
  })[t(470)](() => {
    const n = t;
    n(325) === n(384) ? (_0x279ee5(_0x40a78e, _0x376352), _0x1de0d9[n(463)](_0x9e336f)) : (Es = !1, go[n(378)]());
  }) : _0x4919fc = _0x176fb4[t(348)][t(471)]((n) => _0x23b881(n))), Es;
};
function Fg(e) {
  const t = lt, r = JSON[t(425)](Rg[t(351)]), i = !r[t(406)] && !r[t(443)], n = r[t(406)] && typeof KendoLicensing === t(345);
  let a, o = !1, l;
  if (i || n || !Ng(r)) t(346) !== t(346) ? _0x172134 = new _0xd45048(_0x20f331[t(366)], _0x5b103b[t(468)]) : a = new Cg(e[t(366)]);
  else if (t(338) === t(338)) {
    if (l = $g(r, e), !l) t(333) !== t(391) ? a = new Sg(e[t(366)], e[t(468)]) : _0xa096c8 = new _0x98da4d(_0x16eef4[t(366)], _0x1785ac);
    else if (l[t(436)] === t(455))
      if (t(363) === t(363)) {
        const p = xg(oa(l[t(314)]));
        if (En(fa(), l[t(314)])) t(341) === t(341) ? a = new Eg(e[t(366)], p) : _0x35f50f = _0x1bc909[t(469)][t(471)]((h) => ({ type: h[t(455)] ? t(455) : t(381), code: h[t(427)], expiration: h[t(474)], licenseId: null, userId: _0x50a162[t(460)] }));
        else if (t(413) !== t(375)) a = new Mg(e[t(366)], p), o = !0;
        else {
          const h = _0x43aa00(_0x26c514), m = new _0x160981(h[t(388)](), h[t(459)](), h[t(401)]() + 1), f = m[t(475)]() / 1e3;
          return _0x30d191 > f;
        }
      } else throw new _0x448cfd(t(472));
    else if (l[t(436)] === t(381) || l[t(436)] === t(424))
      if (t(393) !== t(403)) {
        let p = l[t(314)];
        if (l[t(436)] === t(424))
          if (t(365) !== t(349)) p = ap(p, np);
          else return _0x305a7e[t(331)](_0x1d74f2, t(438))[t(317)](t(461));
        if (En(e[t(318)], p))
          if (t(313) !== t(313)) {
            const h = [], m = _0x24185b[t(355)]();
            for (let x = 0; x < m[t(434)]; x += 2) {
              const w = m[t(402)](x, x + 2);
              h[t(383)](_0x11ba44[t(343)](w, 21));
            }
            let f = 66;
            return h[t(471)]((x) => {
              const w = x ^ f;
              return f = x, w;
            })[t(471)]((x) => _0x4ea915[t(329)](x))[t(334)]("");
          } else a = new Dg(e[t(366)], oa(l[t(314)]), e[t(444)], oa(e[t(318)]));
        else if (t(370) === t(428)) {
          const h = _0x3ac30b[t(385)](/-/g, "+")[t(385)](/_/g, "/");
          return _0x248bcc(h);
        } else o = !0;
      } else {
        const p = new _0x180312(_0x1c0fba * 1e3);
        return p[t(347)](p[t(401)]() + _0x5d9b8e), _0x3c33b4(p);
      }
  } else _0x37cadf[t(432)](_0x30e463);
  const d = l, u = d?.[t(314)] ? oa(d[t(314)]) : void 0;
  return { isLicenseValid: o, licenseType: l?.[t(436)], licenseProductCode: d?.[t(427)], expiration: u, message: a };
}
function Lg(e) {
  const t = lt;
  if (go[t(456)](e[t(453)]))
    return t(462) !== t(462) ? void 0 : go[t(354)](e[t(453)]);
  const { isLicenseValid: r, message: i } = Fg(e), n = kg(e);
  if (i && !od[t(456)](n))
    if (t(377) !== t(368)) Pg(i, e), od[t(463)](n);
    else {
      const a = _0x36910c[t(390)](".")[1], o = _0x2f9af6[t(329)](..._0x41151f(a));
      return _0x15476e[t(425)](o);
    }
  return go[t(399)](e[t(453)], r), r;
}
function Pg(e, t) {
  const r = lt;
  if (typeof console === r(454))
    if (r(356) === r(356)) {
      const i = vg(e[r(404)]) + (" " + t[r(366)]), n = typeof console[r(432)] === r(410);
      if (n) r(337) !== r(337) ? (this[r(366)] = _0x37433e, this[r(404)] = r(373), this[r(427)] = r(332), this[r(387)] = _0x274a5f + r(452) + (r(397) + _0x5d4d36 + r(400) + _0x2f4cfe)) : console[r(432)](i);
      else if (r(448) === r(416)) {
        const a = _0x273768() - _0xe80df2(_0x275bda);
        return _0x4f2d04[r(449)](a / (24 * 60 * 60));
      } else console[r(358)](i);
      if (console[r(358)](e[r(387)]), n)
        if (r(414) !== r(414)) {
          const a = _0x53c0d4[r(340)]((f) => f[r(436)] !== r(466))[r(340)]((f) => {
            const b = r;
            var x, w;
            return _0x9d0913[b(316)] === f[b(427)] || ((x = _0x3c168c[b(310)]) === null || x === void 0 ? void 0 : x[b(382)](f[b(427)])) || ((w = _0x37b044[b(344)]) === null || w === void 0 ? void 0 : w[b(382)](f[b(427)]));
          })[r(411)]((f, b) => b[r(314)] - f[r(314)]), o = () => a[r(398)]((f) => f[r(436)] === r(424) && !_0x3f97ba(_0xcf232a(), f[r(314)])), l = () => a[r(398)]((f) => f[r(436)] === r(381) && !_0xd396bd(_0x190c4f[r(318)], f[r(314)])), d = () => a[r(398)]((f) => f[r(436)] === r(424) && !_0x3285c4(_0x23f671(_0x2184e9(), _0x557385), f[r(314)])), u = () => a[r(398)]((f) => f[r(436)] === r(455) && !_0x1a54ab(_0x1357a4(), f[r(314)])), p = () => a[r(398)]((f) => f[r(436)] === r(381)), h = () => a[r(398)]((f) => f[r(436)] === r(424)), m = () => a[r(398)]((f) => f[r(436)] === r(455));
          return o() || l() || d() || u() || h() || p() || m();
        } else console[r(307)]();
    } else _0xcdaef8[r(320)](3, 0, "");
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ag = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"], zg = "https://www.telerik.com/kendo-react-ui/components/free?utm_medium=product&utm_source=console&utm_campaign=dt_kendoreact_freemium", Ui = /* @__PURE__ */ new Map(), Hg = () => {
  const e = Array.from(Ui, ([t, r]) => `- ${t}: ${Array.from(r).join(", ") || "all"}`).join(`
`);
  console.group("[WARN][Telerik and Kendo UI Licensing] KendoReact"), console.warn(
    `License check was triggered by these premium KendoReact components/features
${e}
See the full list of free and premium components here: ${zg}`
  ), console.groupEnd(), Ui.clear();
}, fc = (e, t) => {
  const r = Lg(e), i = Ag.some(
    (n) => {
      var a;
      return (a = globalThis.document) == null ? void 0 : a.location.hostname.endsWith(n);
    }
  );
  if (!r && sr && t)
    if (Ui.size === 0 && setTimeout(Hg, 1e3), Ui.has(t.component)) {
      const n = Ui.get(t.component) || [];
      Ui.set(t.component, /* @__PURE__ */ new Set([...t.features || [], ...n]));
    } else
      Ui.set(t.component, t.features || []);
  return r || i;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Bg = "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-banner";
let sd = !1;
const mc = () => {
  const [e, t] = s.useState(!0), [r, i] = s.useState(!1);
  s.useEffect(() => {
    sd || (i(!0), sd = !0);
  }, []);
  const n = () => {
    t(!1);
  }, a = /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "16px",
        right: "16px",
        padding: "12px",
        borderRadius: "4px",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        backgroundColor: "#FFC000",
        color: "#1E1E1E",
        zIndex: 2e3
      }
    },
    /* @__PURE__ */ s.createElement("span", { style: { display: "flex", alignSelf: "center", marginRight: "8px" } }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ s.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z",
        fill: "#1E1E1E"
      }
    ))),
    /* @__PURE__ */ s.createElement("span", null, "We couldn't verify your ", /* @__PURE__ */ s.createElement("a", { href: Bg }, "license key"), " for KendoReact. Please see the browser console for details and resolution steps."),
    /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", marginLeft: "24px" } }, /* @__PURE__ */ s.createElement(
      "button",
      {
        title: "Close",
        style: {
          display: "inline-flex",
          position: "relative",
          border: "none",
          borderRadius: "4px",
          padding: "5px",
          backgroundColor: "transparent",
          transition: "color 0.2s ease-in-out",
          outline: "none",
          cursor: "pointer"
        },
        onClick: n
      },
      /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ s.createElement(
        "path",
        {
          d: "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z",
          fill: "#1E1E1E"
        }
      ))
    ))
  );
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    "div",
    {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.12,
        zIndex: 101,
        pointerEvents: "none",
        backgroundImage: (
          // eslint-disable-next-line @typescript-eslint/quotes
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==')"
        )
      }
    }
  ), r && e && _o.createPortal(a, document.body));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Bt(e, t, r, i) {
  if (e) {
    const n = {
      syntheticEvent: t,
      nativeEvent: t.nativeEvent,
      target: r
    };
    e.call(void 0, Object.assign(n, i));
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function sp({
  onFocus: e,
  onBlur: t,
  onSyncFocus: r,
  onSyncBlur: i
}) {
  const n = s.useRef(!1), a = s.useRef(0), o = s.useCallback(
    (u) => {
      clearTimeout(a.current), a.current = window.setTimeout(() => u());
    },
    [a]
  ), l = s.useCallback(
    (...u) => {
      clearTimeout(a.current), r && r.call(void 0, u[0]), !n.current && (n.current = !0, e && e.call(void 0, ...u));
    },
    [n, e, r]
  ), d = s.useCallback(
    (...u) => {
      i && i.call(void 0, u[0]), o(() => {
        n.current && t && (n.current = !1, t.call(void 0, ...u));
      });
    },
    [n, o, t, i]
  );
  return s.useEffect(() => () => {
    clearTimeout(a.current);
  }, []), {
    onFocus: l,
    onBlur: d
  };
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vg = ({
  children: e,
  onFocus: t,
  onBlur: r,
  onSyncFocus: i,
  onSyncBlur: n
}) => {
  const a = sp({ onFocus: t, onBlur: r, onSyncFocus: i, onSyncBlur: n });
  return /* @__PURE__ */ s.createElement(s.Fragment, null, e.call(void 0, { ...a }));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Pn = (e, t) => s.useContext(e)(t);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ji = () => s.createContext((e) => e), gc = (e, t) => s.forwardRef((r, i) => {
  const n = Pn(e, r);
  return /* @__PURE__ */ s.createElement(t, { ...n, ref: i });
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const lp = typeof window < "u" ? s.useLayoutEffect : s.useEffect;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Zo(e) {
  const [t, r] = s.useState(!1);
  s.useEffect(() => {
    r(!0);
  }, []);
  const [i, n] = s.useState(() => {
    if (e)
      return e;
    if (t)
      return Ss();
  });
  lp(() => {
    i === void 0 && n(Ss());
  }, []);
  const a = Rf[`useId${Ss()}`.slice(0, 5)];
  if (a !== void 0) {
    const o = a();
    return e ?? o;
  }
  return i;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const en = (e) => s.forwardRef((t, r) => {
  const i = Zo(t.id);
  return /* @__PURE__ */ s.createElement(e, { ...t, id: i, ref: r });
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const jg = kn.createContext(void 0), Ut = () => kn.useContext(jg);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cp = (e) => s.forwardRef((t, r) => {
  const i = Ut();
  return /* @__PURE__ */ s.createElement(e, { ...t, ref: r, unstyled: i });
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Wg = (e) => s.forwardRef((t, r) => {
  const i = pc();
  return /* @__PURE__ */ s.createElement(e, { ...t, ref: r, _zIndex: i });
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ug = (e, t, r = {}) => {
  const i = s.useCallback(
    (m) => {
      r.onMouseDown && r.onMouseDown.call(void 0, m), e.onMouseDown && e.onMouseDown.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseDown, e.onMouseDown, t]
  ), n = s.useCallback(
    (m) => {
      r.onMouseUp && r.onMouseUp.call(void 0, m), e.onMouseUp && e.onMouseUp.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseUp, e.onMouseUp, t]
  ), a = s.useCallback(
    (m) => {
      r.onClick && r.onClick.call(void 0, m), e.onClick && e.onClick.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onClick, e.onClick, t]
  ), o = s.useCallback(
    (m) => {
      r.onDoubleClick && r.onDoubleClick.call(void 0, m), e.onDoubleClick && e.onDoubleClick.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onDoubleClick, e.onDoubleClick, t]
  ), l = s.useCallback(
    (m) => {
      r.onMouseEnter && r.onMouseEnter.call(void 0, m), e.onMouseEnter && e.onMouseEnter.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseEnter, e.onMouseEnter, t]
  ), d = s.useCallback(
    (m) => {
      r.onMouseLeave && r.onMouseLeave.call(void 0, m), e.onMouseLeave && e.onMouseLeave.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseLeave, e.onMouseLeave, t]
  ), u = s.useCallback(
    (m) => {
      r.onMouseMove && r.onMouseMove.call(void 0, m), e.onMouseMove && e.onMouseMove.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseMove, e.onMouseMove, t]
  ), p = s.useCallback(
    (m) => {
      r.onMouseOut && r.onMouseOut.call(void 0, m), e.onMouseOut && e.onMouseOut.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseOut, e.onMouseOut, t]
  ), h = s.useCallback(
    (m) => {
      r.onMouseOver && r.onMouseOver.call(void 0, m), e.onMouseOver && e.onMouseOver.call(void 0, {
        target: t.current,
        syntheticEvent: m
      });
    },
    [r.onMouseOver, e.onMouseOver, t]
  );
  return {
    onClick: a,
    onMouseUp: n,
    onMouseDown: i,
    onDoubleClick: o,
    onMouseEnter: l,
    onMouseLeave: d,
    onMouseMove: u,
    onMouseOut: p,
    onMouseOver: h
  };
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const _g = () => null, qg = ({ children: e }) => e, ld = (e) => {
  if (e) {
    if (e === s.Fragment)
      return [qg, {}];
    if (s.isValidElement(e))
      return [e.type, e.props];
  } else return [_g, {}];
  return [e, {}];
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yg = {
  default: "",
  xsmall: "k-icon-xs",
  small: "k-icon-sm",
  medium: "k-icon-md",
  large: "k-icon-lg",
  xlarge: "k-icon-xl",
  xxlarge: "k-icon-xxl",
  xxxlarge: "k-icon-xxxl"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Kg = (e) => "k-i-" + e, Qo = c.shape({
  name: c.string.isRequired,
  content: c.string.isRequired,
  viewBox: c.string.isRequired
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const vc = s.forwardRef((e, t) => {
  const { className: r, name: i, themeColor: n, size: a, flip: o, style: l, id: d, tabIndex: u, ...p } = e, h = s.useRef(null), m = s.useRef(null);
  s.useImperativeHandle(h, () => ({
    element: m.current
  })), s.useImperativeHandle(t, () => h.current);
  const f = s.useMemo(() => a || cd.size, [a]), b = s.useMemo(() => o || cd.flip, [o]), x = s.useMemo(
    () => M(
      "k-icon",
      "k-font-icon",
      i && Kg(i),
      {
        [`k-color-${n}`]: n,
        "k-flip-h": b === "horizontal" || b === "both",
        "k-flip-v": b === "vertical" || b === "both"
      },
      Yg[f],
      r
    ),
    [i, n, f, b, r]
  ), w = Ug(e, h);
  return /* @__PURE__ */ s.createElement(
    "span",
    {
      ref: m,
      ...p,
      ...w,
      className: x,
      id: d,
      tabIndex: u,
      style: l,
      role: "presentation"
    }
  );
});
vc.propTypes = {
  style: c.object,
  classNames: c.string,
  name: c.string,
  themeColor: c.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: c.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: c.oneOf(["default", "horizontal", "vertical", "both"])
};
const cd = {
  size: "default",
  flip: "default"
};
vc.displayName = "KendoIcon";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const v = {
  prefix: "k",
  rtl: "rtl",
  rounded: "rounded",
  value: "value",
  state: "state",
  filter: "filter",
  virtual: "virtual",
  infinite: "infinite",
  clear: "clear",
  reset: "reset",
  nodata: "nodata"
}, dd = {
  vstack: "vstack",
  hstack: "hstack"
}, Vn = {
  calendar: "calendar",
  dateinput: "dateinput",
  dropdownlist: "dropdownlist",
  menu: "menu",
  searchbox: "searchbox"
}, Je = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg",
  xlarge: "xl",
  xxlarge: "xxl",
  xxxlarge: "xxxl"
}, Z = {
  solid: "solid",
  outline: "outline",
  flat: "flat",
  link: "link",
  clear: "clear"
}, ee = {
  base: "base",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  dark: "dark",
  light: "light",
  inherit: "inherit",
  inverse: "inverse"
}, Hr = {
  small: "sm",
  medium: "md",
  large: "lg"
}, Dn = {
  vertical: "vertical",
  horizontal: "horizontal"
}, Xg = {
  height: "height"
}, Ft = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  start: "start",
  mid: "mid",
  end: "end"
}, re = {
  container: "container",
  content: "content",
  group: "group",
  row: "row",
  nav: "nav",
  list: "list",
  placeholder: "placeholder",
  popup: "popup",
  item: "item",
  picker: "picker",
  spacer: "spacer",
  optionLabel: "optionlabel",
  view: "view"
}, Le = {
  table: "table",
  text: "text",
  button: "button",
  tbody: "tbody",
  thead: "thead",
  tr: "tr",
  th: "th",
  td: "td",
  header: "header",
  footer: "footer",
  icon: "icon",
  title: "title",
  link: "link",
  label: "label",
  ul: "ul",
  caption: "caption"
}, Ao = {
  increase: "increase",
  decrease: "decrease",
  split: "split"
}, ue = {
  active: "active",
  first: "first",
  focus: "focus",
  pending: "pending",
  selected: "selected",
  disabled: "disabled",
  highlight: "highlight",
  invalid: "invalid",
  loading: "loading",
  required: "required",
  empty: "empty",
  scrollable: "scrollable",
  sticky: "sticky",
  alt: "alt",
  shown: "shown"
}, g = {
  prefix: "animation",
  child: "child",
  relative: "relative",
  slide: "slide",
  appear: "appear",
  active: "active",
  enter: "enter",
  exit: "exit",
  pushRight: "push-right",
  pushLeft: "push-left",
  pushDown: "push-down",
  pushUp: "push-up",
  expandVertical: "expand-vertical",
  expandHorizontal: "expand-horizontal",
  fade: "fade",
  zoomIn: "zoom-in",
  zoomOut: "zoom-out",
  slideIn: "slide-in",
  slideDown: "slide-down",
  slideUp: "slide-up",
  slideRight: "slide-right",
  slideLeft: "slide-left",
  revealVertical: "reveal-vertical",
  revealHorizontal: "reveal-horizontal",
  "animation-container": "animation-container",
  "animation-container-shown": "animation-container-shown",
  "animation-container-relative": "animation-container-relative",
  "animation-container-fixed": "animation-container-fixed",
  "child-animation-container": "child-animation-container"
}, ar = {
  input: "input",
  inner: "inner",
  spin: "spin",
  spinner: "spinner",
  textbox: "textbox",
  prefix: "prefix",
  suffix: "suffix"
}, Nt = {
  week: "week",
  weekdays: "weekdays",
  weekend: "weekend",
  month: "month",
  year: "year",
  decade: "decade",
  century: "century",
  // eslint-disable-next-line id-blacklist
  number: "number",
  navigation: "navigation",
  marker: "marker",
  range: "range",
  today: "today",
  other: "other"
}, at = {
  prefix: "icon",
  svg: "svg",
  i: "i",
  color: "color",
  flipH: "flip-h",
  flipV: "flip-v"
}, sa = {
  text: "text",
  floatingLabel: "floating-label",
  container: "container"
}, Gg = {
  prefix: "popup"
}, pr = `${v.prefix}-${ar.input}`, gt = `${v.prefix}-${Vn.calendar}`, Q = `${v.prefix}-${Le.button}`, di = `${v.prefix}-${Vn.menu}`, Qr = `${v.prefix}-${re.picker}`, Zg = `${v.prefix}-${Vn.dropdownlist}`;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ud = {
  wrapper: {
    main: `${v.prefix}-${at.prefix}`,
    svgPrefix: `${v.prefix}-${at.svg}-${at.prefix}`,
    namePrefix: `${v.prefix}-${at.svg}-${at.i}-`,
    flipH: `${v.prefix}-${at.flipH}`,
    flipV: `${v.prefix}-${at.flipV}`,
    themeColor: {
      inherit: `${v.prefix}-${at.color}-${ee.inherit}`,
      primary: `${v.prefix}-${at.color}-${ee.primary}`,
      secondary: `${v.prefix}-${at.color}-${ee.secondary}`,
      tertiary: `${v.prefix}-${at.color}-${ee.tertiary}`,
      info: `${v.prefix}-${at.color}-${ee.info}`,
      success: `${v.prefix}-${at.color}-${ee.success}`,
      warning: `${v.prefix}-${at.color}-${ee.warning}`,
      error: `${v.prefix}-${at.color}-${ee.error}`,
      dark: `${v.prefix}-${at.color}-${ee.dark}`,
      light: `${v.prefix}-${at.color}-${ee.light}`
    },
    size: {
      default: "",
      xsmall: `${v.prefix}-${at.prefix}-${Je.xsmall}`,
      small: `${v.prefix}-${at.prefix}-${Je.small}`,
      medium: `${v.prefix}-${at.prefix}-${Je.medium}`,
      large: `${v.prefix}-${at.prefix}-${Je.large}`,
      xlarge: `${v.prefix}-${at.prefix}-${Je.xlarge}`,
      xxlarge: `${v.prefix}-${at.prefix}-${Je.xxlarge}`,
      xxxlarge: `${v.prefix}-${at.prefix}-${Je.xxxlarge}`
    }
  },
  svg: {
    main: "",
    flipH: "",
    flipV: ""
  }
}, pd = {
  wrapper: (e) => {
    const { iconNameProp: t, themeColor: r, flipH: i, flipV: n, size: a, c: o = ud } = e, l = o.wrapper || {};
    return {
      [l.main || ""]: !0,
      [l.svgPrefix || ""]: !0,
      [`${l.namePrefix || ""}${t}`]: t,
      [l.themeColor[r] || ""]: r,
      [l.flipH || ""]: i,
      [l.flipV || ""]: n,
      [l.size[a] || ""]: l.size[a]
    };
  },
  svg: (e) => {
    const { flipH: t, flipV: r, c: i = ud } = e, n = i.svg;
    return {
      [n.main || ""]: !0,
      [n.flipH || ""]: t,
      [n.flipV || ""]: r
    };
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xc = s.forwardRef((e, t) => {
  const {
    children: r,
    className: i,
    svgClassName: n,
    icon: a,
    flip: o,
    id: l,
    tabIndex: d,
    size: u,
    style: p,
    svgStyle: h,
    themeColor: m,
    viewBox: f,
    name: b,
    onClick: x,
    ...w
  } = e, y = s.useRef(null), E = Ut(), C = E && E.uSvgIcon;
  s.useImperativeHandle(
    t,
    () => ({
      element: y.current
    })
  );
  const R = s.useMemo(() => a ? a.name : Ka.icon, [a]), N = s.useMemo(() => a ? a.content : void 0, [a]), O = s.useMemo(() => u || Ka.size, [u]), T = s.useMemo(() => o || Ka.flip, [o]), k = s.useMemo(() => f || Ka.viewBox, [f]), W = s.useMemo(
    () => M(
      pd.wrapper({
        c: C,
        iconNameProp: R,
        themeColor: m,
        flipH: T === "horizontal" || T === "both",
        flipV: T === "vertical" || T === "both",
        size: O
      }),
      i
    ),
    [C, R, m, T, O, i]
  ), H = s.useMemo(() => e.width && e.height ? { width: e.width, height: e.height, ...p } : e.width ? { width: e.width, height: e.width, ...p } : e.height ? { width: e.height, height: e.height, ...p } : { ...p }, [e.width, e.height, p]), Y = s.useMemo(
    () => N ? { __html: N } : void 0,
    [N]
  );
  return /* @__PURE__ */ s.createElement(
    "span",
    {
      className: M(
        pd.svg({
          c: C,
          themeColor: m,
          flipH: T === "horizontal" || T === "both",
          flipV: T === "vertical" || T === "both"
        }),
        W
      ),
      style: H,
      ref: y,
      onClick: x,
      "aria-hidden": !0
    },
    /* @__PURE__ */ s.createElement(
      "svg",
      {
        id: l,
        className: n,
        style: h,
        "aria-hidden": !0,
        tabIndex: d,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: a ? a.viewBox : k,
        dangerouslySetInnerHTML: Y,
        ...w
      },
      a ? void 0 : r
    )
  );
});
xc.propTypes = {
  style: c.object,
  classNames: c.string,
  children: c.any,
  icon: c.object,
  themeColor: c.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: c.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: c.oneOf(["default", "horizontal", "vertical", "both"])
};
const Ka = {
  size: "default",
  flip: "default",
  icon: "",
  viewBox: "0 0 24 24"
};
xc.displayName = "KendoSvgIcon";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const dp = s.createContext({ type: "svg" });
dp.displayName = "KendoReactIconsContext";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Li = s.forwardRef(
  (e, t) => {
    var r, i;
    const { type: n, icons: a } = s.useContext(dp), { icon: o, ...l } = e;
    let d = n === "svg" ? ((r = e.icon) == null ? void 0 : r.name) || e.name : e.name || ((i = e.icon) == null ? void 0 : i.name);
    d = d && a && a[d] && typeof a[d] == "string" ? a[d] : d;
    const u = d && a && a[d] && typeof a[d] != "string" ? a[d] : o;
    return n === "svg" && u ? /* @__PURE__ */ s.createElement(xc, { ...e, icon: u, ref: t }) : /* @__PURE__ */ s.createElement(vc, { ...l, name: d, ref: t });
  }
);
Li.displayName = "KendoIconWrap";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Qg = s.createContext({
  drag: void 0,
  setDrag: Vt,
  drop: void 0,
  setDrop: Vt,
  drags: [],
  registerDrag: Vt,
  deregisterDrag: Vt,
  drops: [],
  registerDrop: Vt,
  deregisterDrop: Vt
});
var Jg = function(e, t) {
  var r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), n = Math.max(i.top, r.top), a = Math.max(i.left, r.left), o = Math.min(i.left + i.width, r.left + r.width), l = Math.min(i.top + i.height, r.top + r.height), d = o - a, u = l - n;
  if (a < o && n < l) {
    var p = i.width * i.height, h = r.width * r.height, m = d * u, f = m / (p + h - m);
    return Number(f.toFixed(4));
  }
  return 0;
}, ev = function(e, t) {
  var r = 0, i = null;
  return t.forEach(function(n) {
    if (n && e) {
      var a = Jg(e, n);
      a > r && (r = a, i = n);
    }
  }), i;
}, tv = function() {
  var e = window && window.navigator.userAgent;
  if (!e)
    return !1;
  var t = !1, r = [], i = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome|crios)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
  };
  for (var n in i)
    if (i.hasOwnProperty(n) && (r = e.match(i[n]), r)) {
      t = {}, t[n] = !0, t[r[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, t.version = parseInt(document.DOCUMENT_NODE || r[2], 10);
      break;
    }
  return t;
}, bc = function(e) {
  return e && e.ownerDocument || window.document;
}, rv = function(e) {
  var t = bc(e);
  return t && t.defaultView || window;
}, yc = function(e) {
  var t = { browser: tv() }, r = bc(e);
  return t.browser.edge || t.browser.safari ? r.body : r.documentElement;
}, iv = function(e) {
  if (e && e.className && typeof e.className == "string" && e.className.indexOf("k-auto-scrollable") > -1)
    return !0;
  var t = window.getComputedStyle(e, "overflow").overflow;
  return t.indexOf("auto") > -1 || t.indexOf("scroll") > -1;
}, Mn = function(e) {
  var t = yc(e);
  if (!e || e === document.body || e === document.documentElement)
    return t;
  for (var r = e; r && r !== document.body && r.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && r.nodeType !== Node.DOCUMENT_NODE && !iv(r); )
    r = r.parentNode;
  return r && (r === document.body || r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) ? t : r;
}, nv = function(e, t, r) {
  var i = { x: 0, y: 0 }, n = 50;
  return e - r.left < n ? i.x = -(n - (e - r.left)) : r.right - e < n && (i.x = n - (r.right - e)), t - r.top < n ? i.y = -(n - (t - r.top)) : r.bottom - t < n && (i.y = n - (r.bottom - t)), i;
}, av = function(e, t) {
  var r = yc(e);
  if (e === r)
    return {
      top: r.scrollTop,
      left: r.scrollLeft,
      bottom: r.scrollTop + t.innerHeight,
      right: r.scrollLeft + t.innerWidth
    };
  var i = e.getBoundingClientRect();
  return {
    bottom: i.top + i.height,
    right: i.left + i.width,
    left: i.left,
    top: i.top
  };
}, ov = function(e, t, r) {
  var i = r.getBoundingClientRect();
  return i.top <= t && i.left <= e && t <= i.bottom && e <= i.right;
}, tt;
(function(e) {
  e.POINTER_DOWN = "pointerdown", e.POINTER_MOVE = "pointermove", e.POINTER_UP = "pointerup", e.POINTER_CANCEL = "pointercancel", e.MOUSE_DOWN = "mousedown", e.MOUSE_MOVE = "mousemove", e.MOUSE_UP = "mouseup", e.CONTEXT_MENU = "contextmenu", e.TOUCH_START = "touchstart", e.TOUCH_MOVE = "touchmove", e.TOUCH_END = "touchend", e.TOUCH_CANCEL = "touchcancel", e.SCROLL = "scroll", e.START = "KENDO_DRAG_AND_DROP_START", e.MOVE = "KENDO_DRAG_AND_DROP_MOVE", e.END = "KENDO_DRAG_AND_DROP_END", e.CANCEL = "KENDO_DRAG_AND_DROP_CANCEL";
})(tt || (tt = {}));
var sv = function(e) {
  return /^touch/.test(e.type);
}, lv = function(e) {
  return /^(scroll)/.test(e.type);
}, cv = function(e, t) {
  return sv(e) ? {
    pageX: e.changedTouches[0].pageX,
    pageY: e.changedTouches[0].pageY,
    clientX: e.changedTouches[0].clientX,
    clientY: e.changedTouches[0].clientY,
    scrollX: t.scrollOffset.x,
    scrollY: t.scrollOffset.y,
    offsetX: t.offset.x,
    offsetY: t.offset.y,
    type: e.type,
    originalEvent: e,
    isTouch: !0,
    altKey: !1,
    ctrlKey: !1,
    shiftKey: !1,
    metaKey: !1
  } : lv(e) ? {
    pageX: t.pageOffset.x,
    pageY: t.pageOffset.y,
    clientX: t.clientOffset.x,
    clientY: t.clientOffset.y,
    scrollX: t.scrollOffset.x,
    scrollY: t.scrollOffset.y,
    offsetX: t.offset.x,
    offsetY: t.offset.y,
    type: e.type,
    originalEvent: e,
    altKey: !1,
    ctrlKey: !1,
    shiftKey: !1,
    metaKey: !1
  } : {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    scrollX: t.scrollOffset.x,
    scrollY: t.scrollOffset.y,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    originalEvent: e
  };
}, bi = function() {
}, dv = function(e, t, r) {
  r === void 0 && (r = {});
  var i = r.onIsPressedChange, n = i === void 0 ? bi : i, a = r.onIsScrollingChange, o = a === void 0 ? bi : a, l = r.onVelocityChange, d = l === void 0 ? bi : l, u = r.onOffsetChange, p = u === void 0 ? bi : u, h = r.onPageOffsetChange, m = h === void 0 ? bi : h, f = r.onClientOffsetChange, b = f === void 0 ? bi : f, x = r.onScrollOffsetChange, w = x === void 0 ? bi : x, y = r.onInitialScrollOffsetChange, E = y === void 0 ? bi : y, C = t.payload, R = C.element, N = C.hint, O = e.autoScrollDirection, T = e.scrollableParent, k = cv(t.event, e);
  switch (k.type) {
    case tt.POINTER_DOWN:
      if (k.type === tt.POINTER_DOWN && (!k.originalEvent.isPrimary || k.originalEvent.button !== 0))
        break;
    case tt.MOUSE_DOWN:
      if (k.type === tt.MOUSE_DOWN && k.originalEvent.which && k.originalEvent.which > 1 || e.ignoreMouse)
        break;
    case tt.TOUCH_START:
      if (k.type === tt.TOUCH_START && k.originalEvent.touches.length !== 1)
        break;
    case tt.START: {
      var W = T || Mn(t.payload.element);
      E(W instanceof Window ? { x: W.scrollX, y: W.scrollY } : { x: W.scrollLeft, y: W.scrollTop }), b({
        x: k.clientX,
        y: k.clientY
      }), m({
        x: k.pageX,
        y: k.pageY
      }), p({
        x: k.offsetX,
        y: k.offsetY
      }), n(!0), C.onPress && C.onPress(k);
      break;
    }
    case tt.SCROLL:
      if (k.type === tt.SCROLL && !e.pressed)
        break;
      var H = T || Mn(R), Y = H instanceof Window ? { x: H.scrollX, y: H.scrollY } : { x: H.scrollLeft, y: H.scrollTop };
      k.scrollX = Y.x - e.initialScrollOffset.x, k.scrollY = Y.y - e.initialScrollOffset.y, w({
        x: k.scrollX,
        y: k.scrollY
      });
    case tt.POINTER_MOVE:
      if (k.type === tt.POINTER_MOVE && !k.originalEvent.isPrimary)
        break;
    case tt.MOUSE_MOVE:
    case tt.TOUCH_MOVE:
      if (k.type === tt.TOUCH_MOVE && k.originalEvent.touches.length !== 1)
        break;
    case tt.MOVE: {
      if (e.pressed) {
        if (e.autoScroll && k.originalEvent.type !== "scroll" && R) {
          var K = bc(R), _ = T || Mn(K.elementFromPoint(k.clientX, k.clientY)), X = nv(k.clientX, k.clientY, av(_, rv(R)));
          d({
            x: O && O.horizontal === !1 ? 0 : X.x,
            y: O && O.vertical === !1 ? 0 : X.y
          }), o(X.y !== 0 || X.x !== 0);
        }
        !e.drag && C.onDragStart && C.onDragStart(k), C.onDrag && C.onDrag(k);
        var A = ev(N || R, e.drops.map(function(J) {
          return J && J.element;
        }).filter(function(J) {
          return J !== (N || R);
        })), L = e.drops.find(function(J) {
          return J.element === A;
        });
        L && A && ov(k.clientX, k.clientY, T || Mn(A)) && A !== R ? (e.drop && e.drop.element) !== A ? (e.drop && e.drop.onDragLeave && e.drop.onDragLeave(k), L.onDragEnter && L.onDragEnter(k)) : L.onDragOver && L.onDragOver(k) : e.drop && e.drop.onDragLeave && e.drop.onDragLeave(k);
      }
      b({
        x: k.clientX,
        y: k.clientY
      }), m({
        x: k.pageX,
        y: k.pageY
      });
      break;
    }
    case tt.POINTER_UP:
      if (k.type === tt.POINTER_UP && !k.originalEvent.isPrimary)
        break;
    case tt.MOUSE_UP:
    case tt.TOUCH_END:
      if (k.type === tt.TOUCH_END && k.originalEvent.touches.length !== 1)
        break;
    case tt.END: {
      n(!1), o(!1), w({ x: 0, y: 0 }), C.onRelease && C.onRelease(k), e.drop && e.drop.onDrop && e.drop.onDrop(k), e.drag && C.onDragEnd && C.onDragEnd(k);
      break;
    }
    case tt.POINTER_CANCEL:
    case tt.CONTEXT_MENU:
    case tt.TOUCH_CANCEL:
    case tt.CANCEL: {
      n(!1), o(!1), w({ x: 0, y: 0 }), C.onDragEnd && C.onDragEnd(k), e.drop && e.drop.onDragLeave && e.drop.onDragLeave(k);
      break;
    }
  }
}, uv = function(e, t) {
  if (e) {
    var r, i, n = e === yc(e);
    n ? (r = document.body.scrollHeight > window.innerHeight, i = document.body.scrollWidth > window.innerWidth) : (r = e.offsetHeight <= e.scrollHeight, i = e.offsetWidth <= e.scrollWidth);
    var a = e.scrollTop + t.y, o = r && a > 0 && a < e.scrollHeight, l = e.scrollLeft + t.x, d = i && l > 0 && l < e.scrollWidth;
    o ? e.scrollTop += t.y : r && a < 0 && (e.scrollTop = 0), d ? e.scrollLeft += t.x : i && l < 0 && (e.scrollLeft = 0);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const hd = (e, t) => {
  const [r, i] = e, [n, a] = s.useState(t);
  return [r !== void 0 ? r : n, (...o) => {
    r !== void 0 ? i(...o) : a(o[0]);
  }];
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const pv = 2e3;
function hv(e, t, r = {}) {
  const { onPress: i = Vt, onRelease: n = Vt, onDragStart: a = Vt, onDrag: o = Vt, onDragEnd: l = Vt } = t, {
    hint: d = null,
    mouseOnly: u = !1,
    autoScroll: p = !0,
    scrollContainer: h = null,
    context: m = Qg
  } = r, [f, b] = s.useState(!1), [x, w] = s.useState(!1), {
    drop: y,
    setDrop: E,
    drag: C,
    setDrag: R,
    drops: N,
    drags: O,
    registerDrag: T,
    deregisterDrag: k
  } = s.useContext(m), [W] = hd([y, E]), [H, Y] = hd([C, R]), K = s.useRef({ x: 0, y: 0 }), _ = s.useRef(void 0), X = s.useRef(!1), A = s.useRef(void 0), L = s.useRef(null), J = s.useRef(!1), D = s.useRef({ x: 0, y: 0 }), F = s.useRef({ x: 0, y: 0 }), te = s.useRef({ x: 0, y: 0 }), ce = s.useRef({ x: 0, y: 0 }), se = s.useRef({ x: 0, y: 0 }), ie = s.useRef({ x: 0, y: 0 }), He = !!(typeof window < "u" && window.PointerEvent), V = !u && He, fe = s.useCallback(
    () => e.current && e.current.element ? e.current.element : e.current,
    [e]
  ), Ve = s.useCallback(
    () => d && d.current && d.current.element ? d.current.element : d ? d.current : null,
    [d]
  ), _e = s.useCallback(
    () => h && h.current && h.current.element ? h.current.element : h ? h.current : null,
    [h]
  ), Oe = s.useCallback(
    () => typeof p == "object" && p.boundaryElementRef && p.boundaryElementRef.current && p.boundaryElementRef.current.element ? p.boundaryElementRef.current.element : typeof p == "object" && p.boundaryElementRef && p.boundaryElementRef.current ? p.boundaryElementRef.current : null,
    [p]
  ), $e = s.useRef(null);
  s.useImperativeHandle($e, () => ({
    get element() {
      return fe();
    },
    get hint() {
      return Ve();
    },
    onPress: We,
    onDragStart: bt,
    onDrag: Lt,
    onDragEnd: Pt,
    onRelease: ct,
    data: e.current
  }));
  const Et = s.useCallback(() => {
    const U = fe();
    return U && U.ownerDocument || document;
  }, [fe]), Ce = s.useCallback(() => {
    const U = Et();
    return U && U.defaultView || window;
  }, [Et]), Rt = s.useCallback(
    () => ({
      get drag() {
        return H ? H.current : null;
      },
      get drop() {
        return W ? W.current : null;
      },
      get drags() {
        return (O ?? []).map((U) => U.current);
      },
      get drops() {
        return (N ?? []).map((U) => U.current);
      },
      pressed: !!f,
      ignoreMouse: X.current,
      scrollOffset: se.current,
      offset: D.current,
      pageOffset: F.current,
      initialScrollOffset: ie.current,
      clientOffset: te.current,
      initialClientOffset: ce.current,
      velocity: K.current,
      autoScroll: !!(typeof p == "object" ? p.enabled !== !1 : p),
      scrollableParent: Oe(),
      autoScrollDirection: typeof p == "object" ? p.direction : { horizontal: !0, vertical: !0 },
      isScrolling: x
    }),
    [
      H,
      W,
      O,
      N,
      f,
      X,
      se,
      D,
      F,
      ie,
      te,
      ce,
      K,
      p,
      x,
      Oe
    ]
  ), de = s.useCallback((U) => {
    b(U);
  }, []), Zt = s.useCallback((U) => {
    w(U);
  }, []), me = s.useCallback((U) => {
    K.current = U;
  }, []), ut = s.useCallback((U) => {
    D.current = U;
  }, []), q = s.useCallback((U) => {
    te.current = U;
  }, []), Se = s.useCallback((U) => {
    F.current = U;
  }, []), qe = s.useCallback((U) => {
    ce.current = U;
  }, []), je = s.useCallback((U) => {
    se.current = U;
  }, []), Ee = s.useCallback((U) => {
    ie.current = U;
  }, []), We = s.useCallback(
    (U) => {
      i(U);
    },
    [i]
  ), ct = s.useCallback(
    (U) => {
      n(U);
    },
    [n]
  ), bt = s.useCallback(
    (U) => {
      Y($e, { target: e.current, event: U }), a(U);
    },
    [Y, e, a]
  ), Lt = s.useCallback(
    (U) => {
      o(U);
    },
    [o]
  ), Pt = s.useCallback(
    (U) => {
      J.current || (Y(null, { target: e.current, event: U }), l(U));
    },
    [l, Y, e]
  ), ge = s.useCallback(
    (U) => {
      dv(
        Rt(),
        { event: U, payload: $e.current },
        {
          onVelocityChange: me,
          onOffsetChange: ut,
          onClientOffsetChange: q,
          onPageOffsetChange: Se,
          onScrollOffsetChange: je,
          onInitialScrollOffsetChange: Ee,
          onIsPressedChange: de,
          onIsScrollingChange: Zt
        }
      );
    },
    [
      Rt,
      me,
      ut,
      Se,
      q,
      qe,
      Ee,
      de,
      je,
      Zt
    ]
  ), P = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), Pe = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), pt = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), B = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), ke = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), Dt = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), er = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), cr = s.useCallback(
    (U) => {
      U.preventDefault(), ge(U);
    },
    [ge]
  ), dr = s.useCallback(
    (U) => {
      U.preventDefault(), ge(U);
    },
    [ge]
  ), At = s.useCallback(
    (U) => {
      U.preventDefault(), ge(U);
    },
    [ge]
  ), zt = s.useCallback(
    (U) => {
      if (U.touches.length === 0 && U.changedTouches.length === 1) {
        const he = Ce();
        X.current = !0, A.current = he.setTimeout(() => {
          X.current = !1;
        }, pv);
      }
      ge(U);
    },
    [ge, Ce]
  ), ht = s.useCallback(
    (U) => {
      ge(U);
    },
    [ge]
  ), Ye = s.useCallback(() => {
    const U = fe();
    if (U) {
      const he = U.style.touchAction;
      return U.style.touchAction = "none", () => {
        U.style.touchAction = he;
      };
    }
  }, [fe]), _t = s.useCallback(() => (T?.($e), () => {
    k?.($e);
  }), [k, T]), mr = () => {
    const U = Ce(), he = fe(), ft = Et();
    return V ? (he && (L.current = Mn(he), L.current && L.current.addEventListener("scroll", ht, { passive: !0 }), he.addEventListener("pointerdown", P, { passive: !0 })), f && (ft.addEventListener("pointermove", Pe), ft.addEventListener("pointerup", B, !0), ft.addEventListener("contextmenu", cr), ft.addEventListener("pointercancel", pt, { passive: !0 }))) : (U.addEventListener("touchmove", Vt, { capture: !1, passive: !1 }), he && (he.addEventListener("mousedown", ke, { passive: !0 }), u || (he.addEventListener("touchstart", dr, { passive: !0 }), f && (he.addEventListener("touchmove", At, { passive: !0 }), he.addEventListener("touchend", zt, { passive: !0 })))), f && (ft.addEventListener("mousemove", Dt, { passive: !0 }), ft.addEventListener("mouseup", er, { passive: !0 }))), () => {
      L.current && L.current.removeEventListener("scroll", ht), he && (he.removeEventListener("pointerdown", P), he.removeEventListener("mousedown", ke), he.removeEventListener("touchstart", dr), he.removeEventListener("touchmove", At), he.removeEventListener("touchend", zt)), ft.removeEventListener("pointermove", Pe), ft.removeEventListener("pointerup", B, !0), ft.removeEventListener("contextmenu", cr), ft.removeEventListener("pointercancel", pt), ft.removeEventListener("mousemove", Dt), ft.removeEventListener("mouseup", er), U.removeEventListener("touchmove", Vt), U.clearTimeout(A.current);
    };
  };
  s.useEffect(() => {
    const U = Ce();
    if (x) {
      const he = _e() || Mn(
        document.elementFromPoint(te.current.x, te.current.y)
      );
      U.clearInterval(_.current), _.current = U.setInterval(() => {
        uv(he, { x: K.current.x, y: K.current.y });
      }, 50);
    }
    return () => {
      U.clearInterval(_.current);
    };
  }, [fe, _e, Ce, x]), s.useEffect(Ye, [Ye]), s.useEffect(mr, [
    f,
    Ce,
    fe,
    Et,
    u,
    V,
    cr,
    ke,
    Dt,
    er,
    pt,
    P,
    Pe,
    B,
    zt,
    At,
    dr,
    ht
  ]), s.useEffect(() => (J.current = !1, () => {
    J.current = !0;
  }), []), lp(_t, [_t]);
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const wc = s.forwardRef((e, t) => {
  const r = s.useRef(null), i = s.useRef(null), n = s.useCallback(
    () => r.current && r.current.element ? r.current.element : r.current,
    [r]
  );
  s.useImperativeHandle(i, () => ({ element: n() || null })), s.useImperativeHandle(t, () => i.current), s.useImperativeHandle(e.childRef, () => r.current);
  const a = s.useCallback(
    (p) => {
      e.onPress && e.onPress({
        element: n(),
        target: i.current,
        event: p
      });
    },
    [n, e.onPress]
  ), o = s.useCallback(
    (p) => {
      e.onRelease && e.onRelease({
        element: n(),
        target: i.current,
        event: p
      });
    },
    [n, e.onRelease]
  ), l = s.useCallback(
    (p) => {
      e.onDragStart && e.onDragStart({
        element: n(),
        target: i.current,
        event: p
      });
    },
    [e, n]
  ), d = s.useCallback(
    (p) => {
      e.onDrag && e.onDrag({
        element: n(),
        target: i.current,
        event: p
      });
    },
    [n, e.onDrag]
  ), u = s.useCallback(
    (p) => {
      e.onDragEnd && e.onDragEnd({
        element: n(),
        target: i.current,
        event: p
      });
    },
    [n, e.onDragEnd]
  );
  return hv(
    r,
    {
      onPress: a,
      onRelease: o,
      onDragStart: l,
      onDrag: d,
      onDragEnd: u
    },
    {
      mouseOnly: e.mouseOnly,
      autoScroll: e.autoScroll,
      hint: e.hint,
      scrollContainer: e.scrollContainer,
      context: e.context
    }
  ), e.children ? s.cloneElement(s.Children.only(e.children), { ref: r }) : null;
});
wc.displayName = "KendoReactDraggable";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ca = {
  sizeMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  roundedMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function fv(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function mv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (!fv(e[r], t[r]))
      return !1;
  return !0;
}
function gv(e, t = mv) {
  let r = null;
  function i(...n) {
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    const a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return i.clear = function() {
    r = null;
  }, i;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let up = class {
  constructor(t) {
    this.rovingTabIndex = !0, this.update = () => {
    }, this.setFocusClass = (r) => {
      r.target.classList.add(this.focusClass);
    }, this.disableTabindexForRest = (r) => {
      this.elements.forEach((i) => {
        i !== r && i.setAttribute("tabindex", "-1");
      });
    }, this.focusNextIndex = (r, i, n) => {
      const a = i === 1 ? this.next(r, n) : this.previous(r, n);
      return this.focusElement(a, r), a;
    }, this.tabIndex = t.tabIndex || 0, this.root = t.root, this.selectors = t.selectors, this.focusOptions = t.focusOptions || { preventScroll: !0 }, this.rovingTabIndex = t.rovingTabIndex !== void 0 ? t.rovingTabIndex : !0, this.mouseEvents = t.mouseEvents || {}, this.keyboardEvents = t.keyboardEvents || {}, this.focusClass = t.focusClass, this.lastFocused = null;
  }
  /**
   * Returns the collection of DOM elements which the module will navigate in.
   */
  get elements() {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
  }
  /**
   * Returns the first navigation DOM element.
   */
  get first() {
    return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
  }
  /**
   * Returns the last navigation DOM element.
   */
  get last() {
    const t = this.elements;
    return t[t.length - 1] || null;
  }
  /**
   * Returns the focused DOM element from the navigation collection of DOM elements.
   */
  get current() {
    return this.elements.find((t) => t.matches(":focus")) || null;
  }
  /**
   * Returns the next DOM element from the navigation collection of DOM elements.
   */
  next(t, r) {
    const i = r ? this.customElements(r) : this.elements;
    let n = i.indexOf(t) + 1;
    return n = n < 0 ? i.length - 1 : n, i[n % i.length];
  }
  /**
   * Returns the previous DOM element from the navigation collection of DOM elements.
   */
  previous(t, r) {
    const i = r ? this.customElements(r) : this.elements;
    let n = i.indexOf(t) - 1;
    return n = n < 0 ? i.length - 1 : n, i[n % i.length];
  }
  /**
   * Focuses the next element from the navigation collection of DOM elements.
   */
  focusNext(t, r) {
    return this.focusNextIndex(t, 1, r);
  }
  /**
   * Focuses the previous element from the navigation collection of DOM elements.
   */
  focusPrevious(t, r) {
    return this.focusNextIndex(t, -1, r);
  }
  /**
   * The keyboard events handler.
   */
  triggerKeyboardEvent(t, r) {
    const i = this.target(t.target), n = i && i.closest(this.selectors.join(",")), a = t.key === " " ? "Space" : t.key, o = t.nativeEvent.type;
    n && this.keyboardEvents[o][a] && this.keyboardEvents[o][a].call(void 0, n, this, t, r);
  }
  /**
   * The mouse events handler.
   */
  triggerMouseEvent(t) {
    const r = this.target(t.target), i = r && r.closest(this.selectors.join(",")), n = t.nativeEvent.type;
    i && this.mouseEvents[n].call(void 0, i, this, t);
  }
  /**
   * Focuses the passed element from the navigation collection of DOM elements.
   */
  focusElement(t, r) {
    t && (r && (this.rovingTabIndex && r.setAttribute("tabindex", "-1"), this.focusClass && (this.removeFocusClass(r), r.removeEventListener("focus", this.setFocusClass))), this.rovingTabIndex && t.setAttribute("tabindex", String(this.tabIndex)), this.focusClass && (t.classList.add(this.focusClass), t.addEventListener("focus", this.setFocusClass)), t.focus(this.focusOptions), this.lastFocused = t);
  }
  /**
   * Set the first element tabIndex to `1` and `-1` for the rest.
   */
  initializeRovingTab(t) {
    const r = t ? this.elements[t] : this.first;
    r && (this.focusClass && r.addEventListener("focus", this.setFocusClass), r.setAttribute("tabindex", String(this.tabIndex)), this.disableTabindexForRest(r));
  }
  /**
   * Remove a focus listener.
   */
  removeFocusListener() {
    this.lastFocused && this.lastFocused.removeEventListener("focus", this.setFocusClass);
  }
  /**
   * Remove a focus class.
   */
  removeFocusClass(t) {
    this.focusClass && t.classList.remove(this.focusClass);
  }
  customElements(t) {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(t.join(","))) : [];
  }
  target(t) {
    var r;
    const i = t, n = i && i.ownerDocument || null, a = n && ((r = n?.defaultView) == null ? void 0 : r.Element) || Element;
    return t instanceof a ? t : null;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const pl = (e) => {
  const t = e.shadowRoot, r = e.contentDocument;
  return t && t.activeElement ? pl(t.activeElement) : r && r.activeElement ? pl(r.activeElement) : e;
}, ti = (e) => {
  if (!(!e || !e.activeElement))
    return pl(e.activeElement);
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let pp = class {
  constructor(t = 0, r) {
    this.total = t, this.offsets = [], this.heights = [];
    let i = 0;
    for (let n = 0; n < t; n++)
      this.offsets.push(i), i += r, this.heights.push(r);
  }
  height(t) {
    return this.heights[t];
  }
  index(t) {
    for (let r = 0; r < this.offsets.length; r++) {
      if (t === this.offsets[r])
        return r;
      if (t < this.offsets[r])
        return r - 1;
    }
    return this.total - 1;
  }
  offset(t) {
    return this.offsets[t];
  }
  totalHeight() {
    const t = this.offsets[this.offsets.length - 1], r = this.heights[this.heights.length - 1];
    return t + r;
  }
  update(t, r) {
    let i = this.offsets[t];
    for (let n = t; n < this.heights.length; n++) {
      this.offsets[n] = i;
      const a = r[n - t] || this.heights[n];
      i += a, this.heights[n] = a;
    }
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const yi = {
  child: {
    container: `${v.prefix}-${g[`${g.prefix}-${re.container}`]}`,
    relative: `${v.prefix}-${g[`${g.prefix}-${re.container}-${g.relative}`]}`
  },
  childContainer: {
    container: `${v.prefix}-${g[`${g.child}-${g.prefix}-${re.container}`]}`
  },
  appear: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.appear}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.appear}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.appear}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.appear}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.appear}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.appear}`,
    fade: `${v.prefix}-${g.fade}-${g.appear}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.appear}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.appear}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.appear}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.appear}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.appear}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.appear}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.appear}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.appear}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.appear}`
  },
  appearActive: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.appear}-${g.active}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.appear}-${g.active}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.appear}-${g.active}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.appear}-${g.active}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.appear}-${g.active}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.appear}-${g.active}`,
    fade: `${v.prefix}-${g.fade}-${g.appear}-${g.active}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.appear}-${g.active}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.appear}-${g.active}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.appear}-${g.active}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.appear}-${g.active}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.appear}-${g.active}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.appear}-${g.active}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.appear}-${g.active}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.appear}-${g.active}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.appear}-${g.active}`
  },
  enter: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.enter}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.enter}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.enter}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.enter}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.enter}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.enter}`,
    fade: `${v.prefix}-${g.fade}-${g.enter}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.enter}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.enter}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.enter}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.enter}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.enter}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.enter}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.enter}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.enter}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.enter}`
  },
  enterActive: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.enter}-${g.active}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.enter}-${g.active}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.enter}-${g.active}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.enter}-${g.active}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.enter}-${g.active}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.enter}-${g.active}`,
    fade: `${v.prefix}-${g.fade}-${g.enter}-${g.active}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.enter}-${g.active}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.enter}-${g.active}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.enter}-${g.active}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.enter}-${g.active}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.enter}-${g.active}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.enter}-${g.active}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.enter}-${g.active}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.enter}-${g.active}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.enter}-${g.active}`
  },
  exit: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.exit}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.exit}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.exit}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.exit}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.exit}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.exit}`,
    fade: `${v.prefix}-${g.fade}-${g.exit}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.exit}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.exit}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.exit}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.exit}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.exit}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.exit}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.exit}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.exit}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.exit}`
  },
  exitActive: {
    "push-right": `${v.prefix}-${g.pushRight}-${g.exit}-${g.active}`,
    "push-left": `${v.prefix}-${g.pushLeft}-${g.exit}-${g.active}`,
    "push-down": `${v.prefix}-${g.pushDown}-${g.exit}-${g.active}`,
    "push-up": `${v.prefix}-${g.pushUp}-${g.exit}-${g.active}`,
    "expand-vertical": `${v.prefix}-${g.expandVertical}-${g.exit}-${g.active}`,
    "expand-horizontal": `${v.prefix}-${g.expandHorizontal}-${g.exit}-${g.active}`,
    fade: `${v.prefix}-${g.fade}-${g.exit}-${g.active}`,
    "zoom-in": `${v.prefix}-${g.zoomIn}-${g.exit}-${g.active}`,
    "zoom-out": `${v.prefix}-${g.zoomOut}-${g.exit}-${g.active}`,
    "slide-in": `${v.prefix}-${g.slideIn}-${g.exit}-${g.active}`,
    "slide-down": `${v.prefix}-${g.slideDown}-${g.exit}-${g.active}`,
    "slide-up": `${v.prefix}-${g.slideUp}-${g.exit}-${g.active}`,
    "slide-right": `${v.prefix}-${g.slideRight}-${g.exit}-${g.active}`,
    "slide-left": `${v.prefix}-${g.slideLeft}-${g.exit}-${g.active}`,
    "reveal-vertical": `${v.prefix}-${g.revealVertical}-${g.exit}-${g.active}`,
    "reveal-horizontal": `${v.prefix}-${g.revealHorizontal}-${g.exit}-${g.active}`
  }
}, Si = {
  child: (e) => {
    const { c: t = yi } = e;
    return {
      [t.child.container]: !0,
      [t.child.relative]: !0
    };
  },
  childContainer: (e) => {
    const { c: t = yi } = e;
    return {
      [t.childContainer.container]: !0
    };
  },
  appear: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.appear[r]}`]: t.appear[r],
      [`${r}-${g.appear}`]: !t.appear[r]
    };
  },
  appearActive: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.appearActive[r]}`]: t.appearActive[r],
      [`${r}-${g.appear}-${g.active}`]: !t.appearActive[r]
    };
  },
  enter: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.enter[r]}`]: t.enter[r],
      [`${r}-${g.enter}`]: !t.enter[r]
    };
  },
  enterActive: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.enterActive[r]}`]: t.enterActive[r],
      [`${r}-${g.enter}-${g.active}`]: !t.enterActive[r]
    };
  },
  exit: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.exit[r]}`]: t.exit[r],
      [`${r}-${g.exit}`]: !t.exit[r]
    };
  },
  exitActive: (e) => {
    const { c: t = yi, transitionName: r } = e;
    return {
      [`${t.exitActive[r]}`]: t.exitActive[r],
      [`${r}-${g.exit}-${g.active}`]: !t.exitActive[r]
    };
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xe = (e, t) => (r) => {
  const { c: i = e } = r;
  return {
    [i[t] || ""]: !0
  };
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ds = {
  wrapper: {
    main: Q,
    size: {
      small: `${Q}-${Je.small}`,
      medium: `${Q}-${Je.medium}`,
      large: `${Q}-${Je.large}`
    },
    fillMode: {
      solid: `${Q}-${Z.solid}`,
      outline: `${Q}-${Z.outline}`,
      flat: `${Q}-${Z.flat}`,
      link: `${Q}-${Z.link}`,
      clear: `${Q}-${Z.clear}`
    },
    themeColor: {
      base: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.base}`,
          outline: `${Q}-${Z.outline}-${ee.base}`,
          flat: `${Q}-${Z.flat}-${ee.base}`,
          link: `${Q}-${Z.link}-${ee.base}`,
          clear: `${Q}-${Z.clear}-${ee.base}`
        }
      },
      primary: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.primary}`,
          outline: `${Q}-${Z.outline}-${ee.primary}`,
          flat: `${Q}-${Z.flat}-${ee.primary}`,
          link: `${Q}-${Z.link}-${ee.primary}`,
          clear: `${Q}-${Z.clear}-${ee.primary}`
        }
      },
      secondary: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.secondary}`,
          outline: `${Q}-${Z.outline}-${ee.secondary}`,
          flat: `${Q}-${Z.flat}-${ee.secondary}`,
          link: `${Q}-${Z.link}-${ee.secondary}`,
          clear: `${Q}-${Z.clear}-${ee.secondary}`
        }
      },
      tertiary: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.tertiary}`,
          outline: `${Q}-${Z.outline}-${ee.tertiary}`,
          flat: `${Q}-${Z.flat}-${ee.tertiary}`,
          link: `${Q}-${Z.link}-${ee.tertiary}`,
          clear: `${Q}-${Z.clear}-${ee.tertiary}`
        }
      },
      info: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.info}`,
          outline: `${Q}-${Z.outline}-${ee.info}`,
          flat: `${Q}-${Z.flat}-${ee.info}`,
          link: `${Q}-${Z.link}-${ee.info}`,
          clear: `${Q}-${Z.clear}-${ee.info}`
        }
      },
      success: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.success}`,
          outline: `${Q}-${Z.outline}-${ee.success}`,
          flat: `${Q}-${Z.flat}-${ee.success}`,
          link: `${Q}-${Z.link}-${ee.success}`,
          clear: `${Q}-${Z.clear}-${ee.success}`
        }
      },
      warning: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.warning}`,
          outline: `${Q}-${Z.outline}-${ee.warning}`,
          flat: `${Q}-${Z.flat}-${ee.warning}`,
          link: `${Q}-${Z.link}-${ee.warning}`,
          clear: `${Q}-${Z.clear}-${ee.warning}`
        }
      },
      error: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.error}`,
          outline: `${Q}-${Z.outline}-${ee.error}`,
          flat: `${Q}-${Z.flat}-${ee.error}`,
          link: `${Q}-${Z.link}-${ee.error}`,
          clear: `${Q}-${Z.clear}-${ee.error}`
        }
      },
      dark: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.dark}`,
          outline: `${Q}-${Z.outline}-${ee.dark}`,
          flat: `${Q}-${Z.flat}-${ee.dark}`,
          link: `${Q}-${Z.link}-${ee.dark}`,
          clear: `${Q}-${Z.clear}-${ee.dark}`
        }
      },
      light: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.light}`,
          outline: `${Q}-${Z.outline}-${ee.light}`,
          flat: `${Q}-${Z.flat}-${ee.light}`,
          link: `${Q}-${Z.link}-${ee.light}`,
          clear: `${Q}-${Z.clear}-${ee.light}`
        }
      },
      inverse: {
        fillMode: {
          solid: `${Q}-${Z.solid}-${ee.inverse}`,
          outline: `${Q}-${Z.outline}-${ee.inverse}`,
          flat: `${Q}-${Z.flat}-${ee.inverse}`,
          link: `${Q}-${Z.link}-${ee.inverse}`,
          clear: `${Q}-${Z.clear}-${ee.inverse}`
        }
      }
    },
    rounded: {
      small: `${v.prefix}-${v.rounded}-${Hr.small}`,
      medium: `${v.prefix}-${v.rounded}-${Hr.medium}`,
      large: `${v.prefix}-${v.rounded}-${Hr.large}`
    },
    iconButton: `${v.prefix}-${Le.icon}-${Le.button}`,
    disabled: `${v.prefix}-${ue.disabled}`,
    selected: `${v.prefix}-${ue.selected}`,
    isRtl: `${v.prefix}-${v.rtl}`
  },
  text: `${Q}-${Le.text}`,
  icon: `${Q}-${Le.icon}`
}, Oi = {
  wrapper: (e) => {
    const { isRtl: t, selected: r, disabled: i, size: n, fillMode: a, rounded: o, themeColor: l, iconButton: d, c: u = Ds } = e, p = u.wrapper, h = p.themeColor[l], m = h.fillMode[a];
    return {
      [p.main]: !0,
      [p.size[n]]: p.size[n],
      [`${Q}-${n}`]: n && !p.size[n],
      [p.fillMode[a]]: p.fillMode[a],
      [m]: m,
      [p.rounded[o]]: p.rounded[o],
      [`${v.prefix}-${v.rounded}-${o}`]: o && !p.rounded[o],
      [p.iconButton]: d,
      [h.disabled]: i && h && h.disabled,
      [h.selected]: r && h && h.selected,
      [p.disabled]: i,
      [p.selected]: r,
      [p.isRtl]: t
    };
  },
  text: (e) => {
    const { c: t = Ds } = e;
    return {
      [t.text]: !0
    };
  },
  icon: (e) => {
    const { c: t = Ds } = e;
    return {
      [t.icon]: !0
    };
  }
}, cn = {
  wrapper: {
    main: `${di}-${Le.button}`,
    focus: `${v.prefix}-${ue.focus}`,
    disabled: `${v.prefix}-${ue.disabled}`
  },
  ul: {
    group: `${di}-${re.group}`,
    size: {
      small: `${di}-${re.group}-${Je.small}`,
      medium: `${di}-${re.group}-${Je.medium}`,
      large: `${di}-${re.group}-${Je.large}`
    }
  },
  li: {
    item: `${v.prefix}-${re.item}`,
    focus: `${v.prefix}-${ue.focus}`
  },
  item: `${di}-${re.item}`,
  link: {
    main: `${v.prefix}-${Le.link}`,
    link: `${di}-${Le.link}`,
    selected: `${v.prefix}-${ue.selected}`,
    disabled: `${v.prefix}-${ue.disabled}`
  },
  popup: `${di}-${re.popup}`
}, In = {
  wrapper: (e) => {
    const { focused: t, disabled: r, c: i = cn } = e, n = i.wrapper;
    return {
      [n.main]: !0,
      [n.focus]: t,
      [n.disabled]: r
    };
  },
  ul: (e) => {
    const { size: t, c: r = cn } = e, i = r.ul;
    return {
      [i.group]: !0,
      [i.size[t]]: i.size[t],
      [`${di}-${re.group}-${t}`]: t && !i.size[t]
    };
  },
  li: (e) => {
    const { focused: t, c: r = cn } = e, i = r.li;
    return {
      [i.item]: !0,
      [i.focus]: t
    };
  },
  item: xe(cn, "item"),
  link: (e) => {
    const { selected: t, disabled: r, c: i = cn } = e, n = i.link;
    return {
      [n.main]: !0,
      [n.link]: !0,
      [n.selected]: t,
      [n.disabled]: r
    };
  },
  popup: xe(cn, "popup")
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const rr = {
  clearButton: `${v.prefix}-${v.clear}-${v.value}`,
  groupStickyHeader: `${v.prefix}-${re.list}-${re.group}-${ue.sticky}-${Le.header}`,
  listHeaderText: `${v.prefix}-${re.list}-${Le.header}-${Le.text}`,
  ul: `${v.prefix}-${re.list}-${Le.ul}`,
  li: {
    main: `${v.prefix}-${re.list}-${re.item}`,
    selected: `${v.prefix}-${ue.selected}`,
    focused: `${v.prefix}-${ue.focus}`,
    first: `${v.prefix}-${ue.first}`,
    disabled: `${v.prefix}-${ue.disabled}`
  },
  groupLi: {
    list: `${v.prefix}-${re.list}-${re.group}-${re.item}`,
    table: `${v.prefix}-${Le.table}-${re.group}-${re.row}`
  },
  itemText: `${v.prefix}-${re.list}-${re.item}-${Le.text}`,
  groupItemText: {
    list: `${v.prefix}-${re.list}-${re.item}-${Le.text}`,
    table: `${v.prefix}-${Le.table}-${Le.th}`
  },
  itemGroupLabel: `${v.prefix}-${re.list}-${re.item}-${re.group}-${Le.label}`,
  noData: `${v.prefix}-${v.nodata}`,
  heightContainer: `${v.prefix}-${Xg.height}-${re.container}`,
  optionLabel: {
    main: `${v.prefix}-${re.list}-${re.optionLabel}`,
    selected: `${v.prefix}-${ue.selected}`
  },
  inputInner: `${pr}-${ar.inner}`,
  inputIcon: `${v.prefix}-${ar.input}-${at.prefix}`,
  searchbox: `${v.prefix}-${Vn.searchbox}`,
  listFilter: `${v.prefix}-${re.list}-${v.filter}`
}, kr = {
  clearButton: xe(rr, "clearButton"),
  groupStickyHeader: xe(rr, "groupStickyHeader"),
  listHeaderText: xe(rr, "listHeaderText"),
  ul: xe(rr, "ul"),
  li: (e) => {
    const { c: t = rr, selected: r, focused: i, first: n, disabled: a } = e, o = t.li;
    return {
      [o.main]: !0,
      [o.selected]: r,
      [o.focused]: i,
      [o.first]: n,
      [o.disabled]: a
    };
  },
  groupLi: (e) => {
    const { c: t = rr, isMultiColumn: r } = e, i = t.groupLi;
    return {
      [i.table]: r,
      [i.list]: !r
    };
  },
  itemText: xe(rr, "itemText"),
  groupItemText: (e) => {
    const { c: t = rr, isMultiColumn: r } = e, i = t.groupItemText;
    return {
      [i.table]: r,
      [i.list]: !r
    };
  },
  itemGroupLabel: xe(rr, "itemGroupLabel"),
  noData: xe(rr, "noData"),
  heightContainer: xe(rr, "heightContainer"),
  optionLabel: (e) => {
    const { c: t = rr, selected: r } = e, i = t.optionLabel;
    return {
      [i.main]: !0,
      [i.selected]: r
    };
  },
  inputInner: xe(rr, "inputInner"),
  inputIcon: xe(rr, "inputIcon"),
  searchbox: xe(rr, "searchbox"),
  listFilter: xe(rr, "listFilter")
}, Gr = {
  wrapper: {
    main: Zg,
    picker: Qr,
    size: {
      small: `${Qr}-${Je.small}`,
      medium: `${Qr}-${Je.medium}`,
      large: `${Qr}-${Je.large}`
    },
    fillMode: {
      solid: `${Qr}-${Z.solid}`,
      outline: `${Qr}-${Z.outline}`,
      flat: `${Qr}-${Z.flat}`,
      link: `${Qr}-${Z.link}`,
      clear: `${Qr}-${Z.clear}`
    },
    rounded: {
      small: `${v.prefix}-${v.rounded}-${Hr.small}`,
      medium: `${v.prefix}-${v.rounded}-${Hr.medium}`,
      large: `${v.prefix}-${v.rounded}-${Hr.large}`
    },
    disabled: `${v.prefix}-${ue.disabled}`,
    focused: `${v.prefix}-${ue.focus}`,
    invalid: `${v.prefix}-${ue.invalid}`,
    loading: `${v.prefix}-${ue.loading}`,
    required: `${v.prefix}-${ue.required}`
  },
  loadingIcon: `${pr}-${ue.loading}-${at.prefix}`,
  inputButton: `${pr}-${Le.button}`,
  listContainer: {
    main: `${v.prefix}-${re.list}-${re.container}`,
    popup: `${v.prefix}-${Vn.dropdownlist}-${re.popup}`
  },
  inputInner: `${pr}-${ar.inner}`,
  inputText: `${pr}-${v.value}-${Le.text}`,
  listHeader: `${v.prefix}-${re.list}-${Le.header}`,
  list: {
    main: `${v.prefix}-${re.list}`,
    size: {
      small: `${v.prefix}-${re.list}-${Je.small}`,
      medium: `${v.prefix}-${re.list}-${Je.medium}`,
      large: `${v.prefix}-${re.list}-${Je.large}`
    },
    virtual: `${v.prefix}-${v.virtual}-${re.list}`
  },
  listContent: `${v.prefix}-${re.list}-${re.content}`,
  listFooter: `${v.prefix}-${re.list}-${Le.footer}`
}, Nr = {
  wrapper: (e) => {
    const {
      c: t = Gr,
      size: r,
      rounded: i,
      fillMode: n,
      focused: a,
      disabled: o,
      invalid: l,
      loading: d,
      required: u
    } = e, p = t.wrapper;
    return {
      [p.main]: !0,
      [p.picker]: !0,
      [p.size[r]]: p.size[r],
      [`${Qr}-${r}`]: r && !p.size[r],
      [p.fillMode[n]]: p.fillMode[n],
      [p.rounded[i]]: p.rounded[i],
      [`${v.prefix}-${v.rounded}-${i}`]: i && !p.rounded[i],
      [p.focused]: a,
      [p.disabled]: o,
      [p.loading]: d,
      [p.invalid]: l,
      [p.required]: u
    };
  },
  loadingIcon: xe(Gr, "loadingIcon"),
  inputButton: xe(Gr, "inputButton"),
  listContainer: (e) => {
    const { c: t = Gr, popup: r } = e, i = t.listContainer;
    return {
      [i.main]: !0,
      [i.popup]: r
    };
  },
  inputInner: xe(Gr, "inputInner"),
  inputText: xe(Gr, "inputText"),
  listHeader: xe(Gr, "listHeader"),
  list: (e) => {
    const { c: t = Gr, size: r, virtual: i } = e, n = t.list;
    return {
      [n.main]: !0,
      [n.size[r]]: n.size[r],
      [`${v.prefix}-${re.list}-${r}`]: r && !n.size[r],
      [n.virtual]: i
    };
  },
  listContent: xe(Gr, "listContent"),
  listFooter: xe(Gr, "listFooter")
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const $t = {
  wrapper: {
    main: `${gt}`,
    infinite: `${gt}-${v.infinite}`,
    disabled: `${v.prefix}-${ue.disabled}`,
    weekNumber: `${v.prefix}-${Nt.week}-${Nt.number}`,
    size: {
      medium: `${gt}-${Je.medium}`,
      large: `${gt}-${Je.large}`
    }
  },
  view: {
    main: `${gt}-${re.view}`,
    vertical: `${v.prefix}-${dd.vstack}`,
    month: `${gt}-${Nt.month}${re.view}`,
    year: `${gt}-${Nt.year}${re.view}`,
    decade: `${gt}-${Nt.decade}${re.view}`,
    century: `${gt}-${Nt.century}${re.view}`
  },
  navigation: `${gt}-${Nt.navigation}`,
  navigationHighlight: `${gt}-${Nt.navigation}-${ue.highlight}`,
  table: {
    main: `${gt}-${Le.table}`,
    weekdays: `${gt}-${Nt.weekdays}`
  },
  thead: `${gt}-${Le.thead}`,
  tr: `${gt}-${Le.tr}`,
  th: `${gt}-${Le.th}`,
  caption: `${gt}-${Le.caption}`,
  tbody: `${gt}-${Le.tbody}`,
  ul: `${v.prefix}-${v.reset}`,
  li: "",
  td: {
    main: `${gt}-${Le.td}`,
    rangeStart: `${v.prefix}-${Nt.range}-${Ft.start}`,
    rangeEnd: `${v.prefix}-${Nt.range}-${Ft.end}`,
    rangeMid: `${v.prefix}-${Nt.range}-${Ft.mid}`,
    rangeSplitEnd: `${v.prefix}-${Nt.range}-${Ao.split}-${Ft.end}`,
    rangeSplitStart: `${v.prefix}-${Nt.range}-${Ao.split}-${Ft.start}`,
    active: `${v.prefix}-${ue.active}`,
    focused: `${v.prefix}-${v.state}-${ue.pending}-${ue.focus}`,
    selected: `${v.prefix}-${ue.selected}`,
    today: `${v.prefix}-${Nt.today}`,
    weekend: `${v.prefix}-${Nt.weekend}`,
    disabled: `${v.prefix}-${ue.disabled}`,
    isOtherMonth: `${v.prefix}-${Nt.other}-${Nt.month}`,
    isEmpty: `${v.prefix}-${ue.empty}`,
    isWeek: `${v.prefix}-${ue.alt}`
  },
  title: `${gt}-${Le.title}`,
  header: {
    main: `${gt}-${Le.header}`,
    vertical: `${v.prefix}-${dd.hstack}`
  },
  spacer: `${v.prefix}-${re.spacer}`,
  nav: `${gt}-${re.nav}`,
  today: {
    main: `${gt}-${re.nav}-${Nt.today}`,
    disabled: `${v.prefix}-${ue.disabled}`
  },
  scrollable: {
    main: `${v.prefix}-${ue.scrollable}`,
    content: `${v.prefix}-${re.content}`,
    horizontal: `${v.prefix}-${ue.scrollable}-${Dn.horizontal}`
  },
  scrollableSelector: `${v.prefix}-${ue.scrollable}`,
  scrollablePlaceholder: {
    main: `${v.prefix}-${ue.scrollable}-${re.placeholder}`,
    horizontal: `${v.prefix}-${ue.scrollable}-${Dn.horizontal}-${re.placeholder}`
  },
  link: `${v.prefix}-${Le.link}`,
  navigationMarker: `${gt}-${Nt.navigation}-${Nt.marker}`
}, le = {
  wrapper: (e) => {
    const { c: t = $t, disabled: r, weekNumber: i, mobileMode: n } = e, a = t.wrapper;
    return {
      [a.main]: !0,
      [a.infinite]: !0,
      [a.disabled]: r,
      [a.weekNumber]: i,
      [a.size.large]: n,
      [a.size.medium]: !n
    };
  },
  view: (e) => {
    const { c: t = $t, month: r, year: i, decade: n, century: a } = e, o = t.view;
    return {
      [o.main]: !0,
      [o.vertical]: !0,
      [o.month]: r,
      [o.year]: i,
      [o.decade]: n,
      [o.century]: a
    };
  },
  navigation: xe($t, "navigation"),
  navigationHighlight: xe($t, "navigationHighlight"),
  table: (e) => {
    const { c: t = $t, weekdays: r } = e, i = t.table;
    return {
      [i.main]: !0,
      [i.weekdays]: r
    };
  },
  thead: xe($t, "thead"),
  tr: xe($t, "tr"),
  th: xe($t, "th"),
  tbody: xe($t, "tbody"),
  title: xe($t, "title"),
  header: (e) => {
    const { c: t = $t, vertical: r } = e, i = t.header;
    return {
      [i.main]: !0,
      [i.vertical]: r
    };
  },
  today: (e) => {
    const { c: t = $t, disabled: r } = e, i = t.today;
    return {
      [i.main]: !0,
      [i.disabled]: r
    };
  },
  spacer: xe($t, "spacer"),
  nav: xe($t, "nav"),
  caption: xe($t, "caption"),
  ul: xe($t, "ul"),
  li: xe($t, "li"),
  td: (e) => {
    const {
      c: t = $t,
      rangeStart: r,
      rangeEnd: i,
      rangeMid: n,
      rangeSplitEnd: a,
      rangeSplitStart: o,
      active: l,
      focused: d,
      selected: u,
      today: p,
      weekend: h,
      disabled: m,
      isOtherMonth: f,
      isEmpty: b,
      isWeek: x
    } = e, w = t.td;
    return x ? {
      [w.main]: !0,
      [w.isWeek]: x
    } : b ? {
      [w.main]: !0,
      [w.isEmpty]: b
    } : {
      [w.main]: !0,
      [w.rangeStart]: r,
      [w.rangeEnd]: i,
      [w.rangeMid]: n,
      [w.rangeSplitEnd]: a,
      [w.rangeSplitStart]: o,
      [w.active]: l,
      [w.focused]: d,
      [w.selected]: u,
      [w.today]: p,
      [w.weekend]: h,
      [w.disabled]: m,
      [w.isOtherMonth]: f
    };
  },
  scrollable: (e) => {
    const { c: t = $t, horizontal: r } = e, i = t.scrollable;
    return {
      [i.main]: !0,
      [i.content]: !0,
      [i.horizontal]: r
    };
  },
  scrollableSelector: xe($t, "scrollableSelector"),
  scrollablePlaceholder: (e) => {
    const { c: t = $t, horizontal: r } = e, i = t.scrollablePlaceholder;
    return {
      [i.main]: !0,
      [i.horizontal]: r
    };
  },
  link: xe($t, "link"),
  navigationMarker: (e) => {
    const { c: t = $t, isRangeStart: r } = e;
    return {
      [t.navigationMarker]: r
    };
  }
}, dn = {
  wrapper: {
    main: `${v.prefix}-${Vn.dateinput}`,
    input: `${pr}`,
    size: {
      small: `${pr}-${Je.small}`,
      medium: `${pr}-${Je.medium}`,
      large: `${pr}-${Je.large}`
    },
    fillMode: {
      solid: `${pr}-${Z.solid}`,
      outline: `${pr}-${Z.outline}`,
      flat: `${pr}-${Z.flat}`
    },
    rounded: {
      small: `${v.prefix}-${v.rounded}-${Hr.small}`,
      medium: `${v.prefix}-${v.rounded}-${Hr.medium}`,
      large: `${v.prefix}-${v.rounded}-${Hr.large}`
    },
    disabled: `${v.prefix}-${ue.disabled}`,
    required: `${v.prefix}-${ue.required}`,
    invalid: `${v.prefix}-${ue.invalid}`
  },
  inputInner: `${pr}-${ar.inner}`,
  inputSpinner: {
    main: `${pr}-${ar.spinner}`,
    button: `${v.prefix}-${ar.spin}-${Le.button}`
  },
  spinnerIncrease: `${v.prefix}-${ar.spinner}-${Ao.increase}`,
  spinnerDecrease: `${v.prefix}-${ar.spinner}-${Ao.decrease}`,
  clearButton: `${v.prefix}-${v.clear}-${v.value}`
}, yn = {
  wrapper: (e) => {
    const { c: t = dn, size: r, fillMode: i, rounded: n, disabled: a, required: o, invalid: l } = e, d = t.wrapper;
    return {
      [d.main]: !0,
      [d.input]: !0,
      [d.size[r]]: d.size[r],
      [`${pr}-${r}`]: r && !d.size[r],
      [d.fillMode[i]]: d.fillMode[i],
      [d.rounded[n]]: d.rounded[n],
      [`${v.prefix}-${v.rounded}-${n}`]: n && !d.rounded[n],
      [d.disabled]: a,
      [d.invalid]: l,
      [d.required]: o
    };
  },
  inputInner: xe(dn, "inputInner"),
  inputSpinner: (e) => {
    const { c: t = dn } = e, r = t.inputSpinner;
    return {
      [r.main]: !0,
      [r.button]: !0
    };
  },
  spinnerIncrease: xe(dn, "spinnerIncrease"),
  spinnerDecrease: xe(dn, "spinnerDecrease"),
  clearButton: xe(dn, "clearButton")
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ui = `${v.prefix}-${ar.input}`, vv = `${v.prefix}-${ar.textbox}`, Ms = `${v.prefix}-${ar.input}-${ar.prefix}`, Is = `${v.prefix}-${ar.input}-${ar.suffix}`, Xa = {
  wrapper: {
    main: vv,
    input: ui,
    size: {
      small: `${ui}-${Je.small}`,
      medium: `${ui}-${Je.medium}`,
      large: `${ui}-${Je.large}`
    },
    fillMode: {
      solid: `${ui}-${Z.solid}`,
      outline: `${ui}-${Z.outline}`,
      flat: `${ui}-${Z.flat}`
    },
    rounded: {
      small: `${v.prefix}-${v.rounded}-${Hr.small}`,
      medium: `${v.prefix}-${v.rounded}-${Hr.medium}`,
      large: `${v.prefix}-${v.rounded}-${Hr.large}`
    },
    disabled: `${v.prefix}-${ue.disabled}`,
    focused: `${v.prefix}-${ue.focus}`,
    required: `${v.prefix}-${ue.required}`,
    invalid: `${v.prefix}-${ue.invalid}`,
    isRtl: `${v.prefix}-${v.rtl}`
  },
  inputInner: `${ui}-${ar.inner}`,
  prefix: {
    main: Ms,
    orientation: {
      horizontal: `${Ms}-${Dn.horizontal}`,
      vertical: `${Ms}-${Dn.vertical}`
    }
  },
  suffix: {
    main: Is,
    orientation: {
      horizontal: `${Is}-${Dn.horizontal}`,
      vertical: `${Is}-${Dn.vertical}`
    }
  }
}, hl = {
  wrapper: (e) => {
    const { disabled: t, invalid: r, focused: i, required: n, size: a, fillMode: o, rounded: l, isRtl: d, c: u = Xa } = e, p = u.wrapper;
    return {
      [p?.main]: !0,
      [p?.input]: !0,
      [p?.size[a]]: p?.size[a],
      [`${ui}-${a}`]: a && !(p != null && p.size[a]),
      [p?.fillMode[o]]: p?.fillMode[o],
      [p?.rounded[l]]: p?.rounded[l],
      [`${v.prefix}-${v.rounded}-${l}`]: l && !(p != null && p.rounded[l]),
      [p?.disabled]: t,
      [p?.focused]: i,
      [p?.required]: n,
      [p?.invalid]: r,
      [p?.isRtl]: d
    };
  },
  inputInner: xe(Xa, "inputInner"),
  prefix: (e) => {
    const { orientation: t, c: r = Xa } = e, i = r.prefix;
    return {
      [i.main]: !0,
      [i.orientation[t]]: i.orientation[t]
    };
  },
  suffix: (e) => {
    const { orientation: t, c: r = Xa } = e, i = r.suffix;
    return {
      [i?.main]: !0,
      [i?.orientation[t]]: i?.orientation[t]
    };
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const fd = `${v.prefix}-${sa.floatingLabel}`, md = {
  wrapper: {
    main: `${fd}-${sa.container}`,
    focused: `${v.prefix}-${ue.focus}`,
    empty: `${v.prefix}-${ue.empty}`,
    notEmpty: "",
    disabled: `${v.prefix}-${sa.text}-${ue.disabled}`,
    isRtl: `${v.prefix}-${v.rtl}`
  },
  label: {
    main: fd,
    focused: "",
    empty: "",
    notEmpty: "",
    invalid: `${v.prefix}-${sa.text}-${ee.error}`,
    disabled: `${v.prefix}-${sa.text}-${ue.disabled}`
  }
}, gd = {
  wrapper: (e) => {
    const { focused: t, empty: r, notEmpty: i, disabled: n, isRtl: a, c: o = md } = e, l = o.wrapper;
    return {
      [l?.main]: !0,
      [l?.focused]: t,
      [l?.empty]: r,
      [l?.notEmpty]: i,
      [l?.disabled]: n,
      [l?.isRtl]: a
    };
  },
  label: (e) => {
    const { focused: t, empty: r, notEmpty: i, invalid: n, disabled: a, c: o = md } = e, l = o.label;
    return {
      [l?.main]: !0,
      [l?.focused]: t,
      [l?.empty]: r,
      [l?.notEmpty]: i,
      [l?.invalid]: n,
      [l?.disabled]: a
    };
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const un = {
  animationContainer: `${v.prefix}-${g.prefix}-${re.container}`,
  animationContainerShown: `${v.prefix}-${g.prefix}-${re.container}-${ue.shown}`,
  animationChild: `${v.prefix}-${g.child}-${g.prefix}-${re.container}`,
  popup: `${v.prefix}-${Gg.prefix}`,
  slide: {
    up: {
      enter: `${v.prefix}-${g.slide}-${Ft.up}-${g.enter}`,
      exit: `${v.prefix}-${g.slide}-${Ft.up}-${g.exit}`
    },
    down: {
      enter: `${v.prefix}-${g.slide}-${Ft.down}-${g.enter}`,
      exit: `${v.prefix}-${g.slide}-${Ft.down}-${g.exit}`
    },
    left: {
      enter: `${v.prefix}-${g.slide}-${Ft.left}-${g.enter}`,
      exit: `${v.prefix}-${g.slide}-${Ft.left}-${g.exit}`
    },
    right: {
      enter: `${v.prefix}-${g.slide}-${Ft.right}-${g.enter}`,
      exit: `${v.prefix}-${g.slide}-${Ft.right}-${g.exit}`
    }
  },
  slideActive: {
    up: {
      enter: `${v.prefix}-${g.slide}-${Ft.up}-${g.enter}-${g.active}`,
      exit: `${v.prefix}-${g.slide}-${Ft.up}-${g.exit}-${g.active}`
    },
    down: {
      enter: `${v.prefix}-${g.slide}-${Ft.down}-${g.enter}-${g.active}`,
      exit: `${v.prefix}-${g.slide}-${Ft.down}-${g.exit}-${g.active}`
    },
    left: {
      enter: `${v.prefix}-${g.slide}-${Ft.left}-${g.enter}-${g.active}`,
      exit: `${v.prefix}-${g.slide}-${Ft.left}-${g.exit}-${g.active}`
    },
    right: {
      enter: `${v.prefix}-${g.slide}-${Ft.right}-${g.enter}-${g.active}`,
      exit: `${v.prefix}-${g.slide}-${Ft.right}-${g.exit}-${g.active}`
    }
  }
}, _i = {
  animationContainer: (e) => {
    const { c: t = un } = e;
    return {
      [t.animationContainer]: !0
    };
  },
  animationContainerShown: (e) => {
    const { c: t = un } = e;
    return {
      [t.animationContainerShown]: !0
    };
  },
  animationChild: (e) => {
    const { c: t = un } = e;
    return {
      [t.animationChild]: !0
    };
  },
  popup: (e) => {
    const { c: t = un } = e;
    return {
      [t.popup]: !0
    };
  },
  slide: (e) => {
    const { direction: t, type: r, c: i = un } = e;
    return {
      [i.slide[t][r]]: i.slide[t] && i.slide[t][r]
    };
  },
  slideActive: (e) => {
    const { direction: t, type: r, c: i = un } = e;
    return {
      [i.slideActive[t][r]]: i.slideActive[t] && i.slideActive[t][r]
    };
  }
};
var ii = function(e) {
  return e != null;
}, xv = function(e) {
  return e == null;
}, bv = function(e) {
  return Array.isArray(e);
}, vd = function(e) {
  return typeof e == "function";
}, $c = function(e) {
  return typeof e == "string";
}, yv = function(e) {
  return !isNaN(e - parseFloat(e));
}, fl = function(e) {
  return e && e.getTime;
}, Sa = function(e) {
  return ii(e.filters);
}, wv = function(e) {
  return {
    "!=": "neq",
    "<": "lt",
    "<=": "lte",
    "==": "eq",
    ">": "gt",
    ">=": "gte",
    equal: "eq",
    equals: "eq",
    equalto: "eq",
    ge: "gte",
    greater: "gt",
    greaterthan: "gt",
    greaterthanequal: "gte",
    isempty: "isempty",
    isequalto: "eq",
    isgreaterthan: "gt",
    isgreaterthanorequalto: "gte",
    islessthan: "lt",
    islessthanorequalto: "lte",
    isnotempty: "isnotempty",
    isnotequalto: "neq",
    isnull: "isnull",
    le: "lte",
    less: "lt",
    lessthan: "lt",
    lessthanequal: "lte",
    ne: "neq",
    notequal: "neq",
    notequals: "neq",
    notequalto: "neq",
    notsubstringof: "doesnotcontain"
  }[e.toLowerCase()] || e;
}, hp = function(e) {
  e.filters && (e.filters = e.filters.map(function(t) {
    var r = Object.assign({}, t);
    return !Sa(t) && $c(t.operator) && (r.operator = wv(t.operator)), Sa(t) && hp(r), r;
  }));
}, $v = function(e) {
  return Sa(e) ? Object.assign({}, e) : {
    filters: bv(e) ? e : [e],
    logic: "and"
  };
}, kv = function(e) {
  return ii(e) && (e = $v(e), hp(e)), e;
}, la = {}, Cv = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
la.undefined = function(e) {
  return e;
};
var Sv = function(e, t) {
  var r = e + t;
  if (la[r])
    return la[r];
  var i = [];
  return e.replace(Cv, function(n, a, o, l) {
    i.push(ii(a) ? a : o || l);
  }), la[r] = function(n) {
    for (var a = n, o = 0; o < i.length; o++)
      if (a = a[i[o]], !ii(a) && t)
        return a;
    return a;
  }, la[r];
}, Ev = {
  or: {
    concat: function(e, t) {
      return function(r) {
        return e(r) || t(r);
      };
    },
    identity: function() {
      return !1;
    }
  },
  and: {
    concat: function(e, t) {
      return function(r) {
        return e(r) && t(r);
      };
    },
    identity: function() {
      return !0;
    }
  }
}, Dv = {
  contains: function(e, t) {
    return (e || "").indexOf(t) >= 0;
  },
  doesnotcontain: function(e, t) {
    return (e || "").indexOf(t) === -1;
  },
  doesnotendwith: function(e, t) {
    return (e || "").indexOf(t, (e || "").length - (t || "").length) < 0;
  },
  doesnotstartwith: function(e, t) {
    return (e || "").lastIndexOf(t, 0) === -1;
  },
  endswith: function(e, t) {
    return (e || "").indexOf(t, (e || "").length - (t || "").length) >= 0;
  },
  eq: function(e, t) {
    return e === t;
  },
  gt: function(e, t) {
    return e > t;
  },
  gte: function(e, t) {
    return e >= t;
  },
  isempty: function(e) {
    return e === "";
  },
  isnotempty: function(e) {
    return e !== "";
  },
  isnotnull: function(e) {
    return ii(e);
  },
  isnull: function(e) {
    return xv(e);
  },
  lt: function(e, t) {
    return e < t;
  },
  lte: function(e, t) {
    return e <= t;
  },
  neq: function(e, t) {
    return e != t;
  },
  startswith: function(e, t) {
    return (e || "").lastIndexOf(t, 0) === 0;
  }
}, fp = /^\/Date\((.*?)\)\/$/, Mv = function(e, t) {
  if (e != null && $c(e)) {
    var r = fp.exec(e);
    if (r)
      return (/* @__PURE__ */ new Date(+r[1])).getTime();
    if (t)
      return e.toLowerCase();
  } else if (e != null && fl(e))
    return e.getTime();
  return e;
}, Iv = function(e, t, r) {
  if (!ii(t))
    return e;
  var i = e;
  if ($c(t)) {
    var n = fp.exec(t);
    n ? t = /* @__PURE__ */ new Date(+n[1]) : i = function(a) {
      var o = e(a);
      return typeof o == "string" && r ? o.toLowerCase() : yv(o) ? o + "" : o;
    };
  }
  return fl(t) ? function(a) {
    var o = i(a);
    return fl(o) ? o.getTime() : o;
  } : i;
}, Tv = function(e) {
  var t = e.field, r = e.ignoreCase, i = e.value, n = e.operator;
  t = ii(t) ? t : function(l) {
    return l;
  }, r = ii(r) ? r : !0;
  var a = Iv(vd(t) ? t : Sv(t, !0), i, r);
  i = Mv(i, r);
  var o = vd(n) ? n : Dv[n];
  return function(l) {
    return o(a(l), i, r);
  };
}, mp = function(e) {
  var t = Ev[e.logic];
  return e.filters.filter(ii).map(function(r) {
    return Sa(r) ? mp(r) : Tv(r);
  }).reduce(t.concat, t.identity);
}, Rv = function(e) {
  return !e || e.filters.length === 0 ? function() {
    return !0;
  } : mp(e);
}, gp = function(e, t) {
  return !ii(t) || Sa(t) && t.filters.length === 0 ? e : e.filter(Rv(kv(t)));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ml = "labels.optional", Ov = {
  [ml]: "(Optional)"
};
var Nv = {
  en: {
    name: "en",
    identity: {
      version: {
        _unicodeVersion: "14.0.0",
        _cldrVersion: "41"
      },
      language: "en"
    },
    territory: "US",
    numbers: {
      symbols: {
        decimal: ".",
        group: ",",
        list: ";",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        exponential: "E",
        superscriptingExponent: "×",
        perMille: "‰",
        infinity: "∞",
        nan: "NaN",
        timeSeparator: ":",
        approximatelySign: "~"
      },
      decimal: {
        patterns: [
          "n"
        ],
        groupSize: [
          3
        ]
      },
      scientific: {
        patterns: [
          "nEn"
        ],
        groupSize: []
      },
      percent: {
        patterns: [
          "n%"
        ],
        groupSize: [
          3
        ]
      },
      currency: {
        patterns: [
          "$n"
        ],
        groupSize: [
          3
        ],
        "unitPattern-count-one": "n $",
        "unitPattern-count-other": "n $"
      },
      currencies: {
        BGN: {
          displayName: "Bulgarian Lev",
          "displayName-count-one": "Bulgarian lev",
          "displayName-count-other": "Bulgarian leva",
          symbol: "BGN"
        },
        EUR: {
          displayName: "Euro",
          "displayName-count-one": "euro",
          "displayName-count-other": "euros",
          symbol: "€",
          "symbol-alt-narrow": "€"
        },
        USD: {
          displayName: "US Dollar",
          "displayName-count-one": "US dollar",
          "displayName-count-other": "US dollars",
          symbol: "$",
          "symbol-alt-narrow": "$"
        }
      },
      localeCurrency: "USD",
      accounting: {
        patterns: [
          "$n",
          "($n)"
        ],
        groupSize: [
          3
        ]
      }
    },
    calendar: {
      gmtFormat: "GMT{0}",
      gmtZeroFormat: "GMT",
      patterns: {
        d: "M/d/y",
        D: "EEEE, MMMM d, y",
        m: "MMM d",
        M: "MMMM d",
        y: "MMM y",
        Y: "MMMM y",
        F: "EEEE, MMMM d, y h:mm:ss a",
        g: "M/d/y h:mm a",
        G: "M/d/y h:mm:ss a",
        t: "h:mm a",
        T: "h:mm:ss a",
        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
      },
      dateTimeFormats: {
        full: "{1} 'at' {0}",
        long: "{1} 'at' {0}",
        medium: "{1}, {0}",
        short: "{1}, {0}",
        availableFormats: {
          Bh: "h B",
          Bhm: "h:mm B",
          Bhms: "h:mm:ss B",
          d: "d",
          E: "ccc",
          EBhm: "E h:mm B",
          EBhms: "E h:mm:ss B",
          Ed: "d E",
          Ehm: "E h:mm a",
          EHm: "E HH:mm",
          Ehms: "E h:mm:ss a",
          EHms: "E HH:mm:ss",
          Gy: "y G",
          GyMd: "M/d/y GGGGG",
          GyMMM: "MMM y G",
          GyMMMd: "MMM d, y G",
          GyMMMEd: "E, MMM d, y G",
          h: "h a",
          H: "HH",
          hm: "h:mm a",
          Hm: "HH:mm",
          hms: "h:mm:ss a",
          Hms: "HH:mm:ss",
          hmsv: "h:mm:ss a v",
          Hmsv: "HH:mm:ss v",
          hmv: "h:mm a v",
          Hmv: "HH:mm v",
          M: "L",
          Md: "M/d",
          MEd: "E, M/d",
          MMM: "LLL",
          MMMd: "MMM d",
          MMMEd: "E, MMM d",
          MMMMd: "MMMM d",
          "MMMMW-count-one": "'week' W 'of' MMMM",
          "MMMMW-count-other": "'week' W 'of' MMMM",
          ms: "mm:ss",
          y: "y",
          yM: "M/y",
          yMd: "M/d/y",
          yMEd: "E, M/d/y",
          yMMM: "MMM y",
          yMMMd: "MMM d, y",
          yMMMEd: "E, MMM d, y",
          yMMMM: "MMMM y",
          yQQQ: "QQQ y",
          yQQQQ: "QQQQ y",
          "yw-count-one": "'week' w 'of' Y",
          "yw-count-other": "'week' w 'of' Y"
        }
      },
      timeFormats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      dateFormats: {
        full: "EEEE, MMMM d, y",
        long: "MMMM d, y",
        medium: "MMM d, y",
        short: "M/d/yy"
      },
      days: {
        format: {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      months: {
        format: {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        }
      },
      quarters: {
        format: {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        }
      },
      dayPeriods: {
        format: {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          narrow: {
            midnight: "mi",
            am: "a",
            "am-alt-variant": "am",
            noon: "n",
            pm: "p",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          }
        },
        "stand-alone": {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          narrow: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          }
        }
      },
      eras: {
        format: {
          wide: {
            0: "Before Christ",
            1: "Anno Domini",
            "0-alt-variant": "Before Common Era",
            "1-alt-variant": "Common Era"
          },
          abbreviated: {
            0: "BC",
            1: "AD",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          },
          narrow: {
            0: "B",
            1: "A",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          }
        }
      },
      dateFields: {
        era: {
          wide: "era",
          short: "era",
          narrow: "era"
        },
        year: {
          wide: "year",
          short: "yr.",
          narrow: "yr."
        },
        quarter: {
          wide: "quarter",
          short: "qtr.",
          narrow: "qtr."
        },
        month: {
          wide: "month",
          short: "mo.",
          narrow: "mo."
        },
        week: {
          wide: "week",
          short: "wk.",
          narrow: "wk."
        },
        weekOfMonth: {
          wide: "week of month",
          short: "wk. of mo.",
          narrow: "wk. of mo."
        },
        day: {
          wide: "day",
          short: "day",
          narrow: "day"
        },
        dayOfYear: {
          wide: "day of year",
          short: "day of yr.",
          narrow: "day of yr."
        },
        weekday: {
          wide: "day of the week",
          short: "day of wk.",
          narrow: "day of wk."
        },
        weekdayOfMonth: {
          wide: "weekday of the month",
          short: "wkday. of mo.",
          narrow: "wkday. of mo."
        },
        dayperiod: {
          short: "AM/PM",
          wide: "AM/PM",
          narrow: "AM/PM"
        },
        hour: {
          wide: "hour",
          short: "hr.",
          narrow: "hr."
        },
        minute: {
          wide: "minute",
          short: "min.",
          narrow: "min."
        },
        second: {
          wide: "second",
          short: "sec.",
          narrow: "sec."
        },
        zone: {
          wide: "time zone",
          short: "zone",
          narrow: "zone"
        },
        millisecond: {
          narrow: "ms",
          short: "ms",
          wide: "millisecond"
        }
      }
    }
  },
  supplemental: {
    likelySubtags: {
      en: "en-Latn-US"
    },
    currencyData: {
      region: {
        US: [
          {
            USD: {
              _from: "1792-01-01"
            }
          }
        ]
      }
    },
    weekData: {
      firstDay: {
        US: "sun"
      },
      weekendStart: {
        "001": "sat"
      },
      weekendEnd: {
        "001": "sun"
      }
    }
  }
};
function Jo(e) {
  return typeof e == "string";
}
const Fv = {
  NoLocale: "Missing locale info for '{0}'",
  NoCurrency: "Cannot determine currency information. Please load the locale currencies data.",
  NoSupplementalCurrency: "Cannot determine currency. Please load the supplemental currencyData.",
  NoCurrencyRegion: "No currency data for region '{0}'",
  NoCurrencyDisplay: "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
  NoGMTInfo: "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
  NoWeekData: "Cannot determine locale first day of week. Please load the supplemental weekData.",
  NoFirstDay: "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
  NoValidCurrency: "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
  NoDateFieldNames: "Cannot determine the locale date field names. Please load the locale dateFields data."
};
var Lv = /\{(\d+)}?\}/g, kc = function(t) {
  var r = t.name, i = t.message;
  if (!r || !i)
    throw new Error("{ name: string, message: string } object is required!");
  this.name = r, this.message = i;
};
kc.prototype.formatMessage = function() {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  var i = Pv(t), n = this.message.replace(Lv, function(a, o) {
    return i[parseInt(o, 10)];
  });
  return this.name + ": " + n;
};
kc.prototype.error = function() {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  return new Error(this.formatMessage(t));
};
var Pv = function(e) {
  return e.reduce(function(t, r) {
    return t.concat(r);
  }, []);
}, Av = function(e) {
  var t = function(r, i) {
    return r[i] = new kc({ name: i, message: e[i] }), r;
  };
  return Object.keys(e).reduce(t, {});
}, ni = Av(Fv);
function zv(e, t) {
  var r = e.split("-"), i = r[0], n = r[1], a = r[2];
  return zr[e] || t.indexOf(a) !== -1 && zr[i + "-" + a] || t.indexOf(n) !== -1 && zr[i + "-" + n] || zr[i];
}
function Hv(e, t) {
  for (var r = zr.supplemental.likelySubtags, i = 0; i < t.length; i++) {
    var n = r[e + "-" + t[i]];
    if (n)
      return n;
  }
  if (r[e])
    return r[e];
}
var zr = Nv;
function Na(e) {
  var t;
  return Jo(e) ? t = mi(e) : t = e, t;
}
function mi(e) {
  if (zr[e])
    return zr[e];
  var t = zr.supplemental.likelySubtags;
  if (t) {
    var r = e.split("-"), i = r[0], n = r.slice(1), a = Hv(i, n), o = a ? zv(a, n) : null;
    if (o)
      return o;
  }
  throw ni.NoLocale.error(e);
}
var vp = "decimal", es = "currency", xp = "accounting", jn = "percent", bp = "scientific", ts = "$", Cc = "%", An = "n", Bv = ";", Vv = ",", Ni = ".", Re = "", Wn = "en";
function jv(e, t) {
  var r = zr.supplemental.likelySubtags, i = e.split("-");
  if (r) {
    var n = r[e] || r[i[0]];
    n && (i = n.split("-"));
  }
  if (t)
    for (var a = i.length - 1; a >= 1; a--) {
      var o = i[a];
      (o === t.variant || o === t.script) && i.splice(a, 1);
    }
  var l = i.length;
  if (l > 1) {
    var d = i[l - 1];
    return d.toUpperCase();
  }
}
function yp(e) {
  if (e.territory)
    return e.territory;
  var t = e.name, r = e.identity, i;
  return r && r.territory ? i = r.territory : i = jv(t, r), e.territory = i, i;
}
function Wv(e, t) {
  t === void 0 && (t = Wn);
  var r = mi(t), i = r.calendar.dateFields;
  if (!i)
    throw ni.NoDateFieldNames.error();
  var n = i[e.type] || {};
  return n[e.nameType] || n.wide;
}
function Uv(e) {
  for (var t = [], r = 0; r < e.length; r++)
    t.push(e[r].toLowerCase());
  return t;
}
function _v(e) {
  var t = {};
  for (var r in e)
    t[r] = e[r].toLowerCase();
  return t;
}
function qv(e) {
  var t = Array.isArray(e) ? Uv(e) : _v(e);
  return t;
}
function wp(e, t) {
  var r = t.type, i = t.nameType, n = t.standAlone, a = t.lower, o = Na(e), l = n ? "stand-alone" : "format", d = (a ? "lower-" : Re) + i, u = o.calendar[r][l], p = u[d];
  return !p && a && (p = u[d] = qv(u[i])), p;
}
function Ts(e) {
  var t = e.split("-"), r = parseInt(t[0], 10), i = parseInt(t[1], 10) - 1, n = parseInt(t[2], 10);
  return new Date(r, i, n);
}
var Yv = ni.NoCurrency, Kv = ni.NoCurrencyDisplay, Xv = ni.NoSupplementalCurrency, Gv = ni.NoCurrencyRegion, Zv = ni.NoValidCurrency, xd = 2, Rs = "symbol", Qv = "XXX", bd = {
  "001": "USD",
  // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
  150: "EUR"
  // 150 territory for Europe
};
function $p(e, t, r) {
  var i = Na(e), n = i.numbers.currencies;
  if (!n) {
    if (r)
      throw Yv.error();
    return;
  }
  var a = n[t];
  if (!a) {
    if (r)
      throw Kv.error();
    return;
  }
  return a;
}
function Jv(e, t) {
  return t.length - e.length;
}
function e0(e) {
  for (var t, r, i, n, a = 0; a < e.length; a++) {
    var o = e[a], l = Object.keys(o)[0], d = o[l];
    if (l !== Qv && d._tender !== "false" && d._from)
      if (d._to) {
        if (!i) {
          var p = Ts(d._from), h = Ts(d._to);
          (!r || r.to < h || r.from < p) && (t = l, r = {
            from: p,
            to: h
          });
        }
      } else {
        var u = Ts(d._from);
        (!n || n < u) && (i = l, n = u);
      }
  }
  return i || t;
}
function t0(e, t, r) {
  r === void 0 && (r = !0);
  var i = $p(e, t, r);
  if (i) {
    if (!i.displays) {
      var n = [t];
      for (var a in i)
        n.push(i[a]);
      n.sort(Jv), i.displays = n;
    }
    return i.displays;
  }
}
function r0(e, t) {
  var r = t.value, i = t.currency, n = t.currencyDisplay;
  if (n === void 0 && (n = Rs), n === "code")
    return i;
  var a = $p(e, i, !0), o;
  return n === Rs ? o = a["symbol-alt-narrow"] || a[Rs] || i : typeof r > "u" || r !== 1 ? o = a["displayName-count-other"] : o = a["displayName-count-one"], o;
}
function i0(e) {
  var t = xd, r = xd, i = ((zr.supplemental.currencyData || {}).fractions || {})[e];
  return i && i._digits && (r = t = parseInt(i._digits, 10)), {
    minimumFractionDigits: t,
    maximumFractionDigits: r
  };
}
function n0(e, t) {
  if (t === void 0 && (t = !0), bd[e])
    return bd[e];
  var r = zr.supplemental.currencyData;
  if (!r) {
    if (t)
      throw Xv.error();
    return;
  }
  var i = r.region[e];
  if (!i) {
    if (t)
      throw Gv.error(e);
    return;
  }
  var n = e0(i);
  return n;
}
function Sc(e, t) {
  var r = Na(e), i = r.numbers;
  if (!i.localeCurrency) {
    var n = n0(yp(r), t);
    if (!n && t)
      throw Zv.error(r.name);
    i.localeCurrency = n;
  }
  return i.localeCurrency;
}
var a0 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], o0 = "001", s0 = ni.NoWeekData, l0 = ni.NoFirstDay;
function kp(e) {
  var t = Na(e);
  if (!isNaN(t.firstDay))
    return t.firstDay;
  var r = zr.supplemental.weekData;
  if (!r)
    throw s0.error();
  var i = r.firstDay[yp(t)] || r.firstDay[o0];
  if (!i)
    throw l0.error();
  return t.firstDay = a0.indexOf(i), t.firstDay;
}
function c0(e) {
  var t = Na(e);
  return t.numbers.symbols;
}
function Cp(e) {
  return 1 / e === -1 / 0;
}
function Sp(e, t) {
  t === void 0 && (t = {}), t.currency || (t.currency = Sc(e, !0));
  var r = r0(e, t);
  return r;
}
function Ep(e, t, r, i, n) {
  var a = n.numbers.symbols, o = e.indexOf(a.decimal), l = i.groupSize.slice(), d = l.shift(), u = o !== -1 ? o : r + 1, p = e.substring(t, u), h = e, m = p.length;
  if (m >= d) {
    for (var f = m, b = []; f > -1; ) {
      var x = p.substring(f - d, f);
      x && b.push(x), f -= d;
      var w = l.shift();
      if (d = w !== void 0 ? w : d, d === 0) {
        x = p.substring(0, f), x && b.push(x);
        break;
      }
    }
    p = b.reverse().join(a.group), h = e.substring(0, t) + p + e.substring(u);
  }
  return h;
}
function Ec(e) {
  return e === es || e === xp;
}
function fr(e, t, r) {
  t === void 0 && (t = 2), r === void 0 && (r = !1);
  var i = t - String(e).length, n = e;
  if (i > 0) {
    var a = new Array(i + 1).join("0");
    n = r ? e + a : a + e;
  }
  return n;
}
var d0 = 20;
function ma(e, t) {
  var r = e, i = t || 0;
  return r = r.toString().split("e"), r = Math.round(+(r[0] + "e" + (r[1] ? Number(r[1]) + i : i))), r = r.toString().split("e"), r = +(r[0] + "e" + (r[1] ? Number(r[1]) - i : -i)), r.toFixed(Math.min(i, d0));
}
var u0 = 3, p0 = 0, h0 = /0+$/;
function f0(e) {
  var t = e.minimumFractionDigits, r = e.maximumFractionDigits, i = e.style, n = Ec(i), a;
  return n && (a = i0(e.currency)), t === void 0 && (t = n ? a.minimumFractionDigits : 0), r === void 0 && (i === jn ? r = Math.max(t, p0) : n ? r = Math.max(t, a.maximumFractionDigits) : r = Math.max(t, u0)), {
    minimumFractionDigits: t,
    maximumFractionDigits: r
  };
}
function m0(e, t, r) {
  for (var i = Re, n = 0, a = t.length; n < a; n++) {
    var o = t.charAt(n);
    o === An ? i += e : o === ts || o === Cc ? i += r : i += o;
  }
  return i;
}
function g0(e, t) {
  var r = e.numbers.currency, i = t !== 1 ? r["unitPattern-count-other"] : r["unitPattern-count-one"];
  return t < 0 && (i = i.replace(An, "-" + An)), i;
}
function v0(e, t, r) {
  var i = r.numbers.symbols, n = t.style, a = Ec(n);
  if (n === bp) {
    var o = t.minimumFractionDigits !== void 0 ? e.toExponential(t.minimumFractionDigits) : e.toExponential();
    return o.replace(Ni, i.decimal);
  }
  var l = e, d;
  a && (t.value = l, d = Sp(r, t)), n === jn && (l *= 100, d = i.percentSign);
  var u = f0(t), p = u.minimumFractionDigits, h = u.maximumFractionDigits;
  l = ma(l, h);
  var m = l < 0, f = Cp(e), b = l.split(Ni), x = b[0], w = fr(b[1] ? b[1].replace(h0, Re) : Re, p, !0);
  m && (x = x.substring(1)), t.minimumIntegerDigits && (x = fr(x, t.minimumIntegerDigits));
  var y = t.useGrouping !== !1 ? Ep(x, 0, x.length, t, r) : x;
  w && (y += i.decimal + w);
  var E;
  if (a && t.currencyDisplay === "name")
    E = g0(r, e);
  else {
    var C = t.patterns;
    E = m || f ? C[1] || "-" + C[0] : C[0];
  }
  if (E === An && !m)
    return y;
  var R = m0(y, E, d);
  return R;
}
var x0 = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, Dp = "__??__";
function Mp(e, t) {
  var r = e.format;
  r.indexOf(Cc) !== -1 && (e.style = jn, e.symbol = t.numbers.symbols.percentSign, e.number *= 100), r.indexOf(ts) !== -1 && (e.style = es, e.symbol = Sp(t));
}
function Ip(e) {
  var t = e.format;
  if (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) {
    var r = e.literals = [];
    e.format = t.replace(x0, function(i) {
      var n = i.charAt(0).replace("\\", Re), a = i.slice(1).replace(n, Re);
      return r.push(a), Dp;
    });
  }
}
function b0(e, t) {
  var r = e;
  if (t)
    for (var i = t.length, n = 0; n < i; n++)
      r = r.replace(Dp, t[n]);
  return r;
}
var Ea = "#", Da = "0", y0 = /(\.(?:[0-9]*[1-9])?)0+$/g, w0 = /\.$/, $0 = /,/g;
function k0(e, t) {
  var r;
  return t === 0 ? r = y0 : r = new RegExp("(\\.[0-9]{" + t + "}[1-9]*)0+$", "g"), e.replace(r, "$1").replace(w0, Re);
}
function C0(e) {
  var t = e.number, r = e.format, i = r.indexOf(Ni);
  if (i !== -1) {
    var n = r.lastIndexOf(Da) - i, a = r.lastIndexOf(Ea) - i, o = n > -1, l = a > -1, d = t.toString().split("e");
    d[1] ? d = ma(t, Math.abs(d[1])) : d = d[0], d = d.split(Ni)[1] || Re;
    var u = d.length, p = -1;
    !o && !l ? (e.format = r.substring(0, i) + r.substring(i + 1), i = -1, u = 0) : o && n > a ? u = n : a > n && (l && u > a ? u = a : o && u < n && (u = n), p = o ? n : 0), u > -1 && (t = ma(t, u), p > -1 && (t = k0(t, p)));
  } else
    t = ma(t);
  e.negative && t * -1 >= 0 && !e.negativeZero && (e.negative = !1), e.number = t, e.decimalIndex = i;
}
function S0(e) {
  return e.indexOf(Ea) === -1 && e.indexOf(Da) === -1;
}
function E0(e) {
  var t = e.number, r = e.format;
  if (r = r.split(Bv), (e.negative || e.negativeZero) && r[1])
    r = r[1], e.hasNegativeFormat = !0;
  else if (t === 0) {
    var i = r[2];
    r = i || r[0], i && S0(i) && (e.constant = i);
  } else
    r = r[0];
  e.format = r;
}
function D0(e) {
  e.hasGroup = e.format.indexOf(Vv) > -1, e.hasGroup && (e.format = e.format.replace($0, Re));
}
function yd(e, t, r) {
  var i;
  return e === -1 && t !== -1 ? i = t : e !== -1 && t === -1 ? i = e : i = r ? Math.min(e, t) : Math.max(e, t), i;
}
function M0(e) {
  var t = e.format, r = t.indexOf(Ea), i = t.indexOf(Da), n = yd(r, i, !0);
  r = t.lastIndexOf(Ea), i = t.lastIndexOf(Da);
  var a = yd(r, i);
  n === t.length && (a = n), e.start = n, e.end = a, e.lastZeroIndex = i;
}
function I0(e, t, r) {
  var i = e;
  if (t === es || t === jn) {
    i = Re;
    for (var n = 0, a = e.length; n < a; n++) {
      var o = e.charAt(n);
      i += o === ts || o === Cc ? r : o;
    }
  }
  return i;
}
function T0(e, t) {
  var r = e.start, i = e.end, n = e.negative, a = e.negativeZero, o = e.format, l = e.decimalIndex, d = e.lastZeroIndex, u = e.hasNegativeFormat, p = e.hasGroup, h = e.number, m = h.toString().split(Ni), f = o.length, b = m[0], x = m[1] || Re, w = b.length, y = Re;
  h = o.substring(0, r), (n || a) && !u && (h += "-");
  for (var E = r; E < f; E++) {
    var C = o.charAt(E);
    if (l === -1) {
      if (i - E < w) {
        h += b;
        break;
      }
    } else if (d !== -1 && d < E && (y = Re), l - E <= w && l - E > -1 && (h += b, E = l), l === E) {
      h += (x ? t.numbers.symbols.decimal : Re) + x, E += i - l + 1;
      continue;
    }
    C === Da ? (h += C, y = C) : C === Ea && (h += y);
  }
  return p && (h = Ep(h, r + (n && !u ? 1 : 0), Math.max(i, w + r), t.numbers.decimal, t)), i >= r && (h += o.substring(i + 1)), h;
}
function R0(e, t) {
  var r = e.number;
  return e.start !== -1 && (r = T0(e, t), r = I0(r, e.style, e.symbol), r = b0(r, e.literals)), r;
}
function O0(e, t, r) {
  var i = {
    negative: e < 0,
    number: Math.abs(e),
    negativeZero: Cp(e),
    format: t
  };
  return E0(i), i.constant ? i.constant : (Ip(i), Mp(i, r), D0(i), C0(i), M0(i), R0(i, r));
}
var N0 = /^(n|c|p|e|a)(\d*)$/i;
function F0(e) {
  var t = N0.exec(e);
  if (t) {
    var r = {
      style: vp
    }, i = t[1].toLowerCase();
    return i === "c" ? r.style = es : i === "a" ? r.style = xp : i === "p" ? r.style = jn : i === "e" && (r.style = bp), t[2] && (r.minimumFractionDigits = r.maximumFractionDigits = parseInt(t[2], 10)), r;
  }
}
function Tp(e) {
  var t;
  return Jo(e) ? t = F0(e) : t = e, t;
}
function Rp(e, t, r) {
  if (t === void 0 && (t = An), r === void 0 && (r = Wn), e == null)
    return Re;
  if (!isFinite(e))
    return String(e);
  var i = mi(r), n = Tp(t), a;
  if (n) {
    var o = n.style || vp;
    a = v0(e, Object.assign({}, i.numbers[o], n), i);
  } else
    a = O0(e, t, i);
  return a;
}
function Dc(e) {
  return typeof e == "number";
}
var L0 = /[eE][-+]?[0-9]+/, wd = /\u00A0/g;
function $d(e, t) {
  if (t.length > 1) {
    var r = (t[1] || Re).replace(ts, Re).split(An);
    if (e.indexOf(r[0]) > -1 && e.indexOf(r[1]) > -1)
      return e.replace(r[0], Re).replace(r[1], Re);
  }
}
function P0(e, t, r) {
  var i = Tp(r) || {}, n = Ec(i.style), a = e, o, l = i.currency || Sc(t, n);
  if (l) {
    var d = t0(t, l, n);
    if (d)
      for (var u = 0; u < d.length; u++) {
        var p = d[u];
        if (a.includes(p)) {
          a = a.replace(p, Re), n = !0;
          break;
        }
      }
    if (n) {
      var h = $d(a, t.numbers.currency.patterns) || $d(a, t.numbers.accounting.patterns);
      h && (o = !0, a = h);
    }
  }
  return {
    number: a,
    negative: o
  };
}
function A0(e, t) {
  var r = t.literals, i = e;
  if (r)
    for (var n = 0; n < r.length; n++)
      i = i.replace(r[n], Re);
  return i;
}
function z0(e) {
  var t = String(e), r = t.indexOf(Ni), i = 2, n = e / Math.pow(10, i);
  if (r === -1 || String(n).length <= t.length + i)
    return n;
  var a = t.length - r + 1 + i;
  return parseFloat(n.toFixed(a));
}
function H0(e, t, r) {
  if (t === void 0 && (t = Wn), r === void 0 && (r = {}), !e && e !== 0)
    return null;
  if (Dc(e))
    return e;
  var i = mi(t), n = i.numbers.symbols, a = e.toString(), o = r || {}, l;
  if (Jo(r) && (o = { format: r }, Ip(o), a = A0(a, o), Mp(o, i)), (o.style === jn || a.indexOf(n.percentSign) > -1) && (a = a.replace(n.percentSign, Re), l = !0), L0.test(a))
    return a = parseFloat(a.replace(n.decimal, Ni)), isNaN(a) ? null : a;
  var d = P0(a, i, o), u = d.negative, p = d.number;
  a = String(p).trim();
  var h = a.indexOf("-");
  if (h > 0)
    return null;
  var m = h > -1;
  return m = u !== void 0 ? u : m, a = a.replace("-", Re).replace(wd, " ").split(n.group.replace(wd, " ")).join(Re).replace(n.decimal, Ni), a = parseFloat(a), isNaN(a) ? a = null : m && (a *= -1), a && l && (a = z0(a)), a;
}
var B0 = /\{(\d+)}/g;
function Mc(e) {
  var t = arguments;
  return e.replace(B0, function(r, i) {
    var n = t[parseInt(i, 10) + 1];
    return n;
  });
}
var V0 = 120, j0 = 20, kd = [2, 1, 5, 3, 4], W0 = -2, U0 = -1, _0 = 1, q0 = 2, Fa = {};
Fa[W0.toString()] = 8;
Fa[U0.toString()] = 6;
Fa[q0.toString()] = 6;
Fa[_0.toString()] = 3;
var Y0 = {
  numeric: 1,
  "2-digit": 2,
  short: 3,
  long: 4,
  narrow: 5
}, K0 = /[hHmsSzZoOvVxX]/;
function X0(e) {
  return e.hour12 ? "h" : "H";
}
var Cd = [{
  key: "era",
  specifier: "G"
}, {
  key: "year",
  specifier: "y"
}, {
  key: "month",
  specifier: "M"
}, {
  key: "day",
  specifier: "d"
}, {
  key: "weekday",
  specifier: "E"
}, {
  key: "hour",
  getSpecifier: X0
}, {
  key: "minute",
  specifier: "m"
}, {
  key: "second",
  specifier: "s"
}, {
  key: "timeZoneName",
  specifier: "z"
}], Sd = {
  e: "c",
  E: "c",
  M: "L",
  Q: "q"
}, Os = {}, Nn = {};
function Ns(e) {
  return Os[e] || (Os[e] = new RegExp(e + "+")), Os[e];
}
function vo(e) {
  for (var t = [], r = e.charAt(0), i = r, n = 1; n < e.length; n++) {
    var a = e.charAt(n);
    a === i ? r += a : (t.push(r), r = i = a);
  }
  return t.push(r), t;
}
function Fs(e, t) {
  var r = e.length, i = -Number.MAX_VALUE, n, a;
  for (var o in t) {
    for (var l = [], d = o.replace("v", "z"), u = 0, p = 0; p < r; p++) {
      var h = e[p], m = Ns(h[0]), f = (m.exec(d) || [])[0];
      if (!f)
        u -= V0;
      else if (d = d.replace(f, Re), f.length !== h.length) {
        var b = Math.max(Math.min(kd[f.length] - kd[h.length], 2), -2);
        u -= Fa[b];
      }
      if (l.push(f), u < i)
        break;
    }
    d.length && (u -= vo(d).length * j0), u > i && (i = u, n = l, a = t[o]);
  }
  a = a.replace("v", "z");
  for (var x = 0; x < r; x++) {
    var w = n[x];
    if (w && w !== e[x]) {
      var y = n[x][0];
      a = a.replace(Ns(y), e[x]), Sd[y] && (a = a.replace(Ns(Sd[y]), e[x]));
    }
  }
  return a;
}
function G0(e, t, r) {
  Nn[r] || (Nn[r] = {}), Nn[r][e] = t;
}
function Z0(e, t) {
  var r = t.calendar.dateTimeFormats.availableFormats;
  if (r[e])
    return r[e];
  if (Nn[t.name] && Nn[t.name][e])
    return Nn[t.name][e];
  var i = e.search(K0), n;
  if (i > 0) {
    var a = e.substr(0, i), o = e.substr(i);
    n = Mc(
      t.calendar.dateTimeFormats.short,
      //should be deterimed based on specifiers
      r[o] || Fs(vo(o), r),
      r[a] || Fs(vo(a), r)
    );
  } else
    n = Fs(vo(e), r);
  return G0(e, n, t.name), n;
}
function Q0(e) {
  for (var t = [], r = 0; r < Cd.length; r++) {
    var i = Cd[r], n = i.key, a = e[n];
    if (a) {
      var o = i.specifier || i.getSpecifier(e);
      t.push(o.repeat(Y0[a]));
    }
  }
  return t.join(Re);
}
function Ic(e, t) {
  var r = t.calendar, i;
  if (Jo(e))
    r.patterns[e] ? i = r.patterns[e] : i = e;
  else if (e) {
    if (e.pattern)
      return e.pattern;
    var n = e.skeleton;
    n || (e.datetime ? i = Mc(r.dateTimeFormats[e.datetime], r.timeFormats[e.datetime], r.dateFormats[e.datetime]) : e.date ? i = r.dateFormats[e.date] : e.time ? i = r.timeFormats[e.time] : n = Q0(e)), n && (i = Z0(n, t));
  }
  return i || (i = r.patterns.d), i;
}
function Op(e) {
  var t;
  return e <= 3 ? t = "abbreviated" : e === 4 ? t = "wide" : e === 5 ? t = "narrow" : e === 6 && (t = "short"), t;
}
function Xr(e, t, r, i, n) {
  return wp(e, {
    type: t,
    nameType: Op(r),
    standAlone: i,
    lower: n
  });
}
function Ed(e) {
  return typeof e == "function";
}
function Tc(e) {
  return !!e && Ed(e.getTime) && Ed(e.getMonth);
}
var Dd = "month", Ga = "hour", Za = "zone", Ls = "weekday", Md = "quarter", J0 = {
  G: "era",
  y: "year",
  q: Md,
  Q: Md,
  M: Dd,
  L: Dd,
  d: "day",
  E: Ls,
  c: Ls,
  e: Ls,
  h: Ga,
  H: Ga,
  k: Ga,
  K: Ga,
  m: "minute",
  s: "second",
  S: "millisecond",
  a: "dayperiod",
  x: Za,
  X: Za,
  z: Za,
  Z: Za
}, ca = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
function ex(e, t, r) {
  var i = kp(r), n;
  return e < i ? n = 7 - i + e : n = e - i, n + 1;
}
function Np(e, t, r, i) {
  return t <= 2 ? fr(e + 1, t) : Xr(r, "months", t, i)[e];
}
function Fp(e, t, r, i) {
  var n = Math.floor(e.getMonth() / 3);
  return t < 3 ? n + 1 : Xr(r, "quarters", t, i)[n];
}
function rs(e, t, r) {
  var i = r.shortHours, n = r.optionalMinutes, a = r.separator, o = r.localizedName, l = r.zZeroOffset, d = e.getTimezoneOffset() / 60;
  if (d === 0 && l)
    return "Z";
  var u = d <= 0 ? "+" : "-", p = Math.abs(d).toString().split("."), h = p[1] || 0, m = u + (i ? p[0] : fr(p[0], 2));
  if ((h || !n) && (m += (a ? ":" : Re) + fr(h, 2)), o) {
    var f = d === 0 ? t.calendar.gmtZeroFormat : t.calendar.gmtFormat;
    m = Mc(f, m);
  }
  return m;
}
function Lp(e, t, r, i) {
  var n;
  return t < 3 ? n = ex(e.getDay(), t, r) : n = Xr(r, "days", t, i)[e.getDay()], n;
}
var St = {};
St.d = function(e, t) {
  return fr(e.getDate(), t);
};
St.E = function(e, t, r) {
  return Xr(r, "days", t)[e.getDay()];
};
St.M = function(e, t, r) {
  return Np(e.getMonth(), t, r, !1);
};
St.L = function(e, t, r) {
  return Np(e.getMonth(), t, r, !0);
};
St.y = function(e, t) {
  var r = e.getFullYear();
  return t === 2 && (r = r % 100), fr(r, t);
};
St.h = function(e, t) {
  var r = e.getHours() % 12 || 12;
  return fr(r, t);
};
St.H = function(e, t) {
  return fr(e.getHours(), t);
};
St.k = function(e, t) {
  return fr(e.getHours() || 24, t);
};
St.K = function(e, t) {
  return fr(e.getHours() % 12, t);
};
St.m = function(e, t) {
  return fr(e.getMinutes(), t);
};
St.s = function(e, t) {
  return fr(e.getSeconds(), t);
};
St.S = function(e, t) {
  var r = e.getMilliseconds(), i;
  return r !== 0 ? i = fr(String(r / 1e3).split(".")[1].substr(0, t), t, !0) : i = fr(Re, t), i;
};
St.a = function(e, t, r) {
  return Xr(r, "dayPeriods", t)[e.getHours() < 12 ? "am" : "pm"];
};
St.z = function(e, t, r) {
  return rs(e, r, {
    shortHours: t < 4,
    optionalMinutes: t < 4,
    separator: !0,
    localizedName: !0
  });
};
St.Z = function(e, t, r) {
  return rs(e, r, {
    separator: t > 3,
    localizedName: t === 4,
    zZeroOffset: t === 5
  });
};
St.x = function(e, t, r) {
  return rs(e, r, {
    optionalMinutes: t === 1,
    separator: t === 3 || t === 5
  });
};
St.X = function(e, t, r) {
  return rs(e, r, {
    optionalMinutes: t === 1,
    separator: t === 3 || t === 5,
    zZeroOffset: !0
  });
};
St.G = function(e, t, r) {
  var i = e.getFullYear() >= 0 ? 1 : 0;
  return Xr(r, "eras", t)[i];
};
St.e = Lp;
St.c = function(e, t, r) {
  return Lp(e, t, r, !0);
};
St.q = function(e, t, r) {
  return Fp(e, t, r, !0);
};
St.Q = Fp;
function Pp(e, t, r) {
  if (r === void 0 && (r = Wn), !Tc(e))
    return e ?? Re;
  var i = mi(r), n = Ic(t, i);
  return n.replace(ca, function(a) {
    var o = a.length, l;
    return a.includes("'") || a.includes('"') ? l = a.slice(1, o - 1) : l = St[a[0]](e, o, i), l;
  });
}
function Id(e, t, r) {
  var i = e.getTimezoneOffset(), n = new Date(e.getTime() + (t - r) * 6e4), a = n.getTimezoneOffset();
  return new Date(n.getTime() + (a - i) * 6e4);
}
function tx(e, t) {
  !t && e.getHours() === 23 && e.setHours(e.getHours() + 2);
}
var rx = /([+|-]\d{1,2})(:?)(\d{2})?/, ix = /^\/Date\((.*?)\)\/$/, nx = /[+-]\d*/, ax = {
  2: /^\d{1,2}/,
  3: /^\d{1,3}/,
  4: /^\d{4}/
}, ox = /\d+/, Td = "{0}", sx = /^ */, lx = / *$/, cx = [
  "yyyy/MM/dd HH:mm:ss",
  "yyyy/MM/dd HH:mm",
  "yyyy/MM/dd",
  "E MMM dd yyyy HH:mm:ss",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSXXX",
  "yyyy-MM-ddTHH:mm:ssXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
  "yyyy-MM-ddTHH:mm:ss.SSS",
  "yyyy-MM-ddTHH:mmXXX",
  "yyyy-MM-ddTHH:mmX",
  "yyyy-MM-ddTHH:mm:ss",
  "yyyy-MM-ddTHH:mm",
  "yyyy-MM-dd HH:mm:ss",
  "yyyy-MM-dd HH:mm",
  "yyyy-MM-dd",
  "HH:mm:ss",
  "HH:mm"
], Rd = ["G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t"], dx = 2029;
function Vr(e, t, r) {
  return !(e >= t && e <= r);
}
function Gt(e, t) {
  for (var r = t.format, i = t.idx, n = 0; r[i] === e; )
    n++, i++;
  return n > 0 && (i -= 1), t.idx = i, n;
}
function ai(e, t) {
  var r = e ? ax[e] || new RegExp("^\\d{1," + e + "}") : ox, i = t.value.substr(t.valueIdx, e).match(r);
  return i ? (i = i[0], t.valueIdx += i.length, parseInt(i, 10)) : null;
}
function Xi(e, t, r) {
  for (var i = 0, n = e.length, a, o, l = 0, d = 0, u; i < n; i++)
    a = e[i], o = a.length, u = t.value.substr(t.valueIdx, o), u = u.toLowerCase(), u === a && o > l && (l = o, d = i);
  return l ? (t.valueIdx += l, d + 1) : null;
}
function Ps(e) {
  var t = !1;
  return e.value.charAt(e.valueIdx) === e.format[e.idx] && (e.valueIdx++, t = !0), t;
}
function ux(e) {
  var t = e.gmtFormat, r = e.gmtZeroFormat;
  if (!t)
    throw ni.NoGMTInfo.error();
  return [t.replace(Td, Re).toLowerCase(), r.replace(Td, Re).toLowerCase()];
}
function is(e, t, r) {
  var i = r.shortHours, n = r.noSeparator, a = r.optionalMinutes, o = r.localizedName, l = r.zLiteral;
  if (e.UTC = !0, l && e.value.charAt(e.valueIdx) === "Z")
    return e.valueIdx++, !1;
  if (o && !Xi(ux(t.calendar), e))
    return !0;
  var d = rx.exec(e.value.substr(e.valueIdx, 6));
  if (!d)
    return !o;
  var u = d[1], p = d[3], h = parseInt(u, 10), m = d[2], f = parseInt(p, 10);
  if (isNaN(h) || !i && u.length !== 3 || !a && isNaN(f) || n && m || (isNaN(f) && (f = null), Vr(h, -12, 13) || f && Vr(f, 0, 59)))
    return !0;
  e.valueIdx += d[0].length, e.hoursOffset = h, e.minutesOffset = f;
}
function Ap(e, t, r) {
  var i = Gt(e, t), n = Xr(r, "months", i, e === "L", !0), a = i < 3 ? ai(2, t) : Xi(n, t);
  if (a === null || Vr(a, 1, 12))
    return !0;
  t.month = a - 1;
}
function zp(e, t, r) {
  var i = Gt(e, t), n = Xr(r, "days", i, e === "c", !0), a = i < 3 ? ai(1, t) : Xi(n, t);
  if (!a && a !== 0 || Vr(a, 1, 7))
    return !0;
}
var Tt = {};
Tt.d = function(e) {
  Gt("d", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 1, 31))
    return !0;
  e.day === null && (e.day = t);
};
Tt.E = function(e, t) {
  var r = Gt("E", e), i = Xi(Xr(t, "days", r, !1, !0), e);
  if (i === null)
    return !0;
};
Tt.M = function(e, t) {
  return Ap("M", e, t);
};
Tt.L = function(e, t) {
  return Ap("L", e, t);
};
Tt.y = function(e) {
  var t = Gt("y", e), r = ai(t === 1 ? void 0 : t, e);
  if (r === null)
    return !0;
  if (t === 2) {
    var i = (/* @__PURE__ */ new Date()).getFullYear();
    r = i - i % 100 + r, r > dx && (r -= 100);
  }
  e.year = r;
};
Tt.h = function(e) {
  Gt("h", e);
  var t = ai(2, e);
  if (t === 12 && (t = 0), t === null || Vr(t, 0, 11))
    return !0;
  e.hours = t;
};
Tt.K = function(e) {
  Gt("K", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 0, 11))
    return !0;
  e.hours = t;
};
Tt.a = function(e, t) {
  var r = Gt("a", e), i = Xr(t, "dayPeriods", r, !1, !0), n = Xi([i.pm], e);
  if (!n && !Xi([i.am], e))
    return !0;
  e.pmHour = n;
};
Tt.H = function(e) {
  Gt("H", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 0, 23))
    return !0;
  e.hours = t;
};
Tt.k = function(e) {
  Gt("k", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 1, 24))
    return !0;
  e.hours = t === 24 ? 0 : t;
};
Tt.m = function(e) {
  Gt("m", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 0, 59))
    return !0;
  e.minutes = t;
};
Tt.s = function(e) {
  Gt("s", e);
  var t = ai(2, e);
  if (t === null || Vr(t, 0, 59))
    return !0;
  e.seconds = t;
};
Tt.S = function(e) {
  var t = Gt("S", e), r = e.value.substr(e.valueIdx, t), i = null;
  if (isNaN(parseInt(r, 10)) || (i = parseFloat("0." + r, 10), i = ma(i, 3), i *= 1e3, e.valueIdx += t), i === null || Vr(i, 0, 999))
    return !0;
  e.milliseconds = i;
};
Tt.z = function(e, t) {
  var r = Gt("z", e), i = r < 4, n = is(e, t, {
    shortHours: i,
    optionalMinutes: i,
    localizedName: !0
  });
  if (n)
    return n;
};
Tt.Z = function(e, t) {
  var r = Gt("Z", e), i = is(e, t, {
    noSeparator: r < 4,
    zLiteral: r === 5,
    localizedName: r === 4
  });
  if (i)
    return i;
};
Tt.x = function(e, t) {
  var r = Gt("x", e), i = is(e, t, {
    noSeparator: r !== 3 && r !== 5,
    optionalMinutes: r === 1
  });
  if (i)
    return i;
};
Tt.X = function(e, t) {
  var r = Gt("X", e), i = is(e, t, {
    noSeparator: r !== 3 && r !== 5,
    optionalMinutes: r === 1,
    zLiteral: !0
  });
  if (i)
    return i;
};
Tt.G = function(e, t) {
  var r = Gt("G", e), i = Xr(t, "eras", r, !1, !0), n = Xi([i[0], i[1]], e);
  if (n === null)
    return !0;
};
Tt.e = function(e, t) {
  return zp("e", e, t);
};
Tt.c = function(e, t) {
  return zp("c", e, t);
};
function px(e) {
  var t = e.year, r = e.month, i = e.day, n = e.hours, a = e.minutes, o = e.seconds, l = e.milliseconds, d = e.pmHour, u = e.UTC, p = e.hoursOffset, h = e.minutesOffset, m = n !== null || a !== null || o || null, f = /* @__PURE__ */ new Date(), b;
  return t === null && r === null && i === null && m ? (t = f.getFullYear(), r = f.getMonth(), i = f.getDate()) : (t === null && (t = f.getFullYear()), i === null && (i = 1)), d && n < 12 && (n += 12), u ? (p && (n += -p), h && (a += -h * (p < 0 ? -1 : 1)), b = new Date(Date.UTC(t, r, i, n, a, o, l))) : (b = new Date(t, r, i, n, a, o, l), tx(b, n)), t < 100 && b.setFullYear(t), b.getDate() !== i && u === void 0 ? null : b;
}
function hx(e, t) {
  var r = sx.exec(t)[0], i = lx.exec(t)[0];
  return "" + r + e + i;
}
function fx(e, t, r) {
  for (var i = Ic(t, r).split(Re), n = {
    format: i,
    idx: 0,
    value: hx(e, t),
    valueIdx: 0,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  }, a = i.length, o = !1; n.idx < a; n.idx++) {
    var l = i[n.idx];
    if (o)
      l === "'" && (o = !1), Ps(n);
    else if (Tt[l]) {
      var d = Tt[l](n, r);
      if (d)
        return null;
    } else if (l === "'")
      o = !0, Ps(n);
    else if (!Ps(n))
      return null;
  }
  return n.valueIdx < e.length ? null : px(n) || null;
}
function mx(e) {
  var t = e.substr(0, 1) === "-" ? -1 : 1, r = e.substring(1);
  return r = parseInt(r.substr(0, 2), 10) * 60 + parseInt(r.substring(2), 10), t * r;
}
function gx(e) {
  if (e && e.indexOf("/D") === 0) {
    var t = ix.exec(e);
    if (t) {
      t = t[1];
      var r = nx.exec(t.substring(1));
      return t = new Date(parseInt(t, 10)), r && (r = mx(r[0]), t = Id(t, t.getTimezoneOffset(), 0), t = Id(t, 0, -1 * r)), t;
    }
  }
}
function vx(e) {
  for (var t = [], r = e.patterns, i = Rd.length, n = 0; n < i; n++)
    t.push(r[Rd[n]]);
  return t.concat(cx);
}
function xx(e, t, r) {
  if (r === void 0 && (r = Wn), !e)
    return null;
  if (Tc(e))
    return e;
  var i = String(e).trim(), n = gx(i);
  if (n)
    return n;
  var a = mi(r), o = t || vx(a.calendar);
  o = Array.isArray(o) ? o : [o];
  for (var l = o.length, d = 0; d < l; d++)
    if (n = fx(i, o[d], a), n)
      return n;
  return n;
}
var bx = {
  month: {
    type: "months",
    minLength: 3,
    standAlone: "L"
  },
  quarter: {
    type: "quarters",
    minLength: 3,
    standAlone: "q"
  },
  weekday: {
    type: "days",
    minLength: {
      E: 0,
      c: 3,
      e: 3
    },
    standAlone: "c"
  },
  dayperiod: {
    type: "dayPeriods",
    minLength: 0
  },
  era: {
    type: "eras",
    minLength: 0
  }
}, Od = "literal";
function As(e, t) {
  var r = e[e.length - 1];
  r && r.type === Od ? r.pattern += t : e.push({
    type: Od,
    pattern: t
  });
}
function yx(e) {
  return e === "h" || e === "K";
}
function wx(e, t) {
  t === void 0 && (t = Wn);
  for (var r = mi(t), i = Ic(e, r), n = [], a = ca.lastIndex = 0, o = ca.exec(i); o; ) {
    var l = o[0];
    if (a < o.index && As(n, i.substring(a, o.index)), l.startsWith('"') || l.startsWith("'"))
      As(n, l);
    else {
      var d = l[0], u = J0[d], p = {
        type: u,
        pattern: l
      };
      u === "hour" && (p.hour12 = yx(l));
      var h = bx[u];
      if (h) {
        var m = Dc(h.minLength) ? h.minLength : h.minLength[d], f = l.length;
        f >= m && (p.names = {
          type: h.type,
          nameType: Op(f),
          standAlone: h.standAlone === d
        });
      }
      n.push(p);
    }
    a = ca.lastIndex, o = ca.exec(i);
  }
  return a < i.length && As(n, i.substring(a)), n;
}
var $x = /\{(\d+)(:[^}]+)?\}/g;
function Hp(e, t, r) {
  if (t) {
    if (Tc(e))
      return Pp(e, t, r);
    if (Dc(e))
      return Rp(e, t, r);
  }
  return e ?? Re;
}
function Nd(e, t, r) {
  return e.replace($x, function(i, n, a) {
    var o = t[parseInt(n, 10)];
    return Hp(o, a ? a.substring(1) : Re, r);
  });
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let Bp = class {
  /**
   * Creates a new instance of the internationalization service.
   *
   * @param locale - The locale that will be used by the internationalization methods.
   */
  constructor(t) {
    this.locale = t;
  }
  /**
   * Formats a string with placeholders such as `Total amount {0:c}`.
   *
   * @param format - The format string.
   * @param values - One or more values to output in the format string placeholders.
   * @return - The formatted string.
   */
  format(t, ...r) {
    return r.length === 1 && Array.isArray(r[0]) ? Nd(t, r[0], this.locale) : Nd(t, r, this.locale);
  }
  /**
   * Converts a `Date` object to a string based on the specified format. If no format is provided, the default short date format is used.
   *
   * @param value - The date which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted date.
   */
  formatDate(t, r) {
    return Pp(t, r, this.locale);
  }
  /**
   * Converts an object to a string based on the specified format.
   *
   * @param value - The value which will be formatted.
   * @param format - The format to use.
   * @return - The formatted object.
   */
  toString(t, r) {
    return Hp(t, r, this.locale);
  }
  /**
   * Converts a string to a `Number`.
   *
   * @param value - The string which will be parsed.
   * @param format - The format string or options.
   * @return - The parsed number.
   */
  parseNumber(t, r) {
    return H0(t, this.locale, r);
  }
  /**
   * Converts a string to a `Date` object based on the specified format.
   *
   * @param value - The string which will be converted.
   * @param format - The format strings or options.
   * @return - The parsed date.
   */
  parseDate(t, r) {
    return xx(t, r, this.locale);
  }
  /**
   * Converts a `Number` to a string based on the specified format.
   *
   * @param value - The number which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted number.
   */
  formatNumber(t, r) {
    return Rp(t, r, this.locale);
  }
  /**
   * Returns a localized date field name based on specific `dateFieldName` options.
   *
   * @param options - The detailed configuration for the desired date field name.
   * @returns - The localized date field name from the current locale based on the option.
   */
  dateFieldName(t) {
    return Wv(t, this.locale);
  }
  /**
   * Returns the day names from the current locale based on the option.
   *
   * @param options - The detailed configuration for the desired date format.
   * @return - The day names from the current locale based on the option.
   */
  dateFormatNames(t) {
    return wp(this.locale, t);
  }
  /**
   * Splits the date format into objects which contain information about each part of the pattern.
   *
   * @param format - The format string or options.
   * @returns - The date format parts.
   */
  splitDateFormat(t) {
    return wx(t, this.locale);
  }
  /**
   * Returns the number symbols from the current locale.
   *
   * @return - The number symbols from the current locale.
   */
  numberSymbols() {
    return c0(this.locale);
  }
  /**
   * Returns the first day index, starting from Sunday.
   *
   * @return - The index of the first day of the week (0 == Sunday).
   */
  firstDay() {
    return kp(this.locale);
  }
  /**
   * @hidden
   */
  localeInfo() {
    return mi(this.locale);
  }
  /**
   * @hidden
   */
  localeCurrency() {
    return Sc(this.locale);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const zs = /* @__PURE__ */ Object.create({});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let Vp = class {
  constructor(t) {
    this.language = t;
  }
  /* eslint-disable max-len */
  /**
   * Provides a string based on a key for the current language. When no string for the current language is available under this key, the `defaultValue` is returned.
   *
   * @param key - The key which identifies the string for the current language.
   * @param defaultValue - The default value which will be returned when no string
   * for the current language is available under the key.
   * @return - The string for the current language.
   */
  // tslint:enable:max-line-length
  toLanguageString(t, r) {
    return this.language && zs[this.language] && zs[this.language].hasOwnProperty(t) ? zs[this.language][t] : r;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ns = s.createContext({
  intl: new Bp("en"),
  localization: new Vp()
});
function Rc(e) {
  const t = e.context;
  return t && t.intl ? t.intl : new Bp("en");
}
function jp(e) {
  const t = e.context;
  return t && t.localization ? t.localization : new Vp();
}
function Oc(e) {
  e.contextType = ns;
}
function Wp(e) {
  e.contextType = ns;
}
const kx = () => s.useContext(ns).intl, tn = () => s.useContext(ns).localization;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const as = (e) => {
  const [t, r] = s.useState({
    focused: !1
  }), i = (W) => {
    r({ focused: !0 });
  }, n = (W) => {
    r({ focused: !1 });
  }, {
    label: a,
    editorId: o,
    className: l,
    labelClassName: d,
    editorValue: u,
    editorPlaceholder: p,
    editorValid: h,
    editorDisabled: m,
    style: f,
    id: b,
    optional: x,
    unstyled: w,
    ...y
  } = e, E = tn(), C = x ? E.toLanguageString(ml, Ov[ml]) : "", R = C && /* @__PURE__ */ s.createElement("span", { className: "k-label-optional" }, C), N = w && w.uFloatingLabel, O = !p && !u && u !== 0, T = M(
    gd.wrapper({
      c: N,
      focused: t.focused,
      empty: O,
      notEmpty: !O,
      disabled: m,
      isRtl: e.dir === "rtl"
    }),
    l
  ), k = M(
    gd.label({
      c: N,
      focused: t.focused,
      empty: O,
      notEmpty: !O,
      invalid: h === !1,
      disabled: m
    }),
    d
  );
  return /* @__PURE__ */ s.createElement(
    "span",
    {
      ...y,
      id: e.id,
      className: T,
      onFocus: i,
      onBlur: n,
      style: f,
      dir: e.dir
    },
    e.children,
    a ? o ? /* @__PURE__ */ s.createElement("label", { id: b, htmlFor: o, className: k }, a, R) : /* @__PURE__ */ s.createElement("span", { id: b, className: k }, a, R) : null
  );
};
as.propTypes = {
  label: c.node,
  editorId: c.string,
  editorValue: c.oneOfType([c.string, c.bool, c.number]),
  editorPlaceholder: c.string,
  editorValid: c.bool,
  editorDisabled: c.bool,
  id: c.string,
  style: c.object,
  className: c.string,
  labelClassName: c.string,
  optional: c.bool
};
const Up = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
}, gl = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
}, La = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
}, vl = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
}, Cx = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
}, _p = {
  name: "check",
  content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5z" />',
  viewBox: "0 0 512 512"
}, Nc = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
}, Sx = {
  name: "window",
  content: '<path d="M96 96v320h320V96zm288 288H128V192h256z" />',
  viewBox: "0 0 512 512"
}, Ex = {
  name: "window-restore",
  content: '<path d="M448 32v288h-32V128H160V32zM64 192h288v288H64zm32 256h224V288H96z" />',
  viewBox: "0 0 512 512"
}, Dx = {
  name: "window-minimize",
  content: '<path d="M416 288v64H96v-64z" />',
  viewBox: "0 0 512 512"
}, Mx = {
  name: "search",
  content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192" />',
  viewBox: "0 0 512 512"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Fd = (e, t, r) => {
  e.style.transitionDuration = "", t && e.classList.remove(...t.split(" ")), r && e.classList.remove(...r.split(" "));
}, Ix = typeof window < "u" && /Firefox/.test(window.navigator.userAgent), Tx = (e, t, r, i, n, a) => {
  if (r === 0)
    return n();
  const o = M(_i.slide({ direction: t, type: i, c: a })), l = M(_i.slideActive({ direction: t, type: i, c: a })), d = (m) => {
    m.target === e && (e.removeEventListener("transitionend", d), Fd(e, o, l), i === "exit" ? e.style.display = "none" : e.style.display = "", n());
  };
  e.addEventListener("transitionend", d);
  const u = e.ownerDocument;
  if (!u)
    return;
  const p = u.defaultView;
  if (!p)
    return;
  const h = () => {
    Fd(e, o, l), i === "enter" && (e.style.display = ""), o && e.classList.add(...o.split(" ").filter((m) => m)), p.requestAnimationFrame(() => {
      e.style.transitionDuration = r + "ms", e.classList.add(...l.split(" ").filter((m) => m));
    });
  };
  Ix ? p.requestAnimationFrame(h) : h();
}, Te = {
  bottom: "bottom",
  center: "center",
  middle: "middle",
  left: "left",
  right: "right",
  top: "top"
};
var Rx = function(e) {
  var t = e.anchorRect, r = e.anchorAlign, i = e.elementRect, n = e.elementAlign, a = e.margin;
  a === void 0 && (a = {});
  var o = r.horizontal, l = r.vertical, d = n.horizontal, u = n.vertical, p = a.horizontal || 0, h = a.vertical || 0, m = t.top, f = t.left;
  return l === Te.bottom && (m += t.height), (l === Te.center || l === Te.middle) && (m += Math.round(t.height / 2)), u === Te.bottom && (m -= i.height, h *= -1), (u === Te.center || u === Te.middle) && (m -= Math.round(i.height / 2), h *= -1), o === Te.right && (f += t.width), (o === Te.center || o === Te.middle) && (f += Math.round(t.width / 2)), d === Te.right && (f -= i.width, p *= -1), (d === Te.center || d === Te.middle) && (f -= Math.round(i.width / 2), p *= -1), {
    top: m + h,
    left: f + p
  };
};
function Ox(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    height: e.height,
    width: e.width
  };
}
function qp(e) {
  return e.ownerDocument || e.document || e;
}
var Fc = function(e) {
  return qp(e).defaultView;
}, Lc = function(e) {
  return qp(e).documentElement;
}, Hs = 0;
function Nx() {
  if (!Hs && typeof document < "u") {
    var e = document.createElement("div");
    e.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", e.innerHTML = "&nbsp;", document.body.appendChild(e), Hs = e.offsetWidth - e.scrollWidth, document.body.removeChild(e);
  }
  return Hs;
}
function Yp(e) {
  var t = Fc(e), r = Lc(e), i = {
    height: t.innerHeight,
    width: t.innerWidth
  };
  return r.scrollHeight - r.clientHeight > 0 && (i.width -= Nx()), i;
}
var Fx = function(e) {
  if (!e.getBoundingClientRect) {
    var t = Yp(e);
    return {
      bottom: t.height,
      left: 0,
      right: t.width,
      top: 0
    };
  }
  var r = e.getBoundingClientRect(), i = r.bottom, n = r.left, a = r.right, o = r.top;
  return {
    bottom: i,
    left: n,
    right: a,
    top: o
  };
}, Pc = function(e) {
  for (var t = e.offsetParent; t && t.style.position === "static"; )
    t = t.offsetParent;
  return t || Lc(e);
}, Lx = function(e) {
  var t = e.style, r = t.display, i = t.left, n = t.position;
  e.style.display = "", e.style.left = "-10000px", e.style.position = "absolute";
  var a = e.getBoundingClientRect();
  return e.style.display = r, e.style.left = i, e.style.position = n, a;
}, Ma = function(e) {
  var t = e.getBoundingClientRect(), r = t.left, i = t.top;
  return !t.height && !t.width && (t = Lx(e)), {
    top: i,
    left: r,
    height: t.height,
    width: t.width
  };
};
function Kp(e, t) {
  for (var r = [], i = e.parentNode; i && (r.push(i), i !== t); )
    i = i.parentNode;
  return r;
}
function Xp(e) {
  var t = Lc(e), r = Fc(e);
  return {
    x: r.pageXOffset || t.scrollLeft || 0,
    y: r.pageYOffset || t.scrollTop || 0
  };
}
function Gp(e) {
  return e === (e.ownerDocument || {}).body ? Xp(e) : {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}
function Px(e) {
  var t = Pc(e);
  return t ? Gp(t) : { x: 0, y: 0 };
}
var Ax = function(e, t) {
  var r = Fc(e), i = r.getComputedStyle(e), n = Ma(e), a = t || Pc(e), o = e.ownerDocument, l = a !== o.body && a !== o.documentElement, d = { top: 0, left: 0 };
  if (i.position !== "fixed" && l) {
    var u = r.getComputedStyle(a);
    d = Ma(a), d.top += parseInt(u.borderTopWidth, 10), d.left += parseInt(u.borderLeftWidth, 10);
  }
  return {
    top: n.top - d.top,
    left: n.left - d.left,
    height: n.height,
    width: n.width
  };
};
function zx(e, t) {
  return (
    // eslint-disable-line no-arrow-condition
    e ? Gp(e) : Px(t)
  );
}
function Hx(e, t, r) {
  r === void 0 && (r = 1);
  var i = t ? Pc(t) : null, n = Ax(e, i), a = n.top, o = n.left, l = n.height, d = n.width, u = zx(i, e), p = u.x, h = u.y, m = e.ownerDocument, f = i === m.body || i === m.documentElement ? 1 : r;
  return {
    top: a + h * f,
    left: o + p * f,
    height: l,
    width: d
  };
}
function Bx(e, t) {
  return {
    top: e.top - t.y,
    left: e.left - t.x,
    height: e.height,
    width: e.width
  };
}
const Pr = {
  fit: "fit",
  flip: "flip",
  none: "none"
};
var Ld = function(e, t, r) {
  var i = 0;
  return e + t > r && (i = r - (e + t)), e < 0 && (i = -e), i;
}, Pd = function(e) {
  var t = e.offset, r = e.size, i = e.anchorSize, n = e.viewPortSize, a = e.anchorAlignPoint, o = e.elementAlignPoint, l = e.margin, d = 0, u = o === Te.center || o === Te.middle, p = a === Te.center || a === Te.middle, h = 2 * l;
  if (o !== a && !u && !p) {
    var m = a === Te.top || a === Te.left;
    t < 0 && m ? (d = r + i + h, t + d + r > n && (d = 0)) : t >= 0 && !m && (t + r > n && (d += -(i + r + h)), t + d < 0 && (d = 0));
  }
  return d;
}, Vx = function(e) {
  var t = e.anchorRect, r = e.anchorAlign, i = e.elementRect, n = e.elementAlign, a = e.collisions, o = e.viewPort, l = e.margin;
  l === void 0 && (l = {});
  var d = i.top, u = i.left, p = i.height, h = i.width, m = o.height, f = o.width, b = l.horizontal || 0, x = l.vertical || 0, w = 0, y = 0, E = a.vertical === Pr.fit, C = a.horizontal === Pr.fit, R = a.vertical === Pr.flip, N = a.horizontal === Pr.flip;
  E && (y += Ld(d, p, m)), C && (w += Ld(u, h, f)), R && (y += Pd({
    margin: x,
    offset: d,
    size: p,
    anchorSize: t.height,
    viewPortSize: m,
    anchorAlignPoint: r.vertical,
    elementAlignPoint: n.vertical
  })), N && (w += Pd({
    margin: b,
    offset: u,
    size: h,
    anchorSize: t.width,
    viewPortSize: f,
    anchorAlignPoint: r.horizontal,
    elementAlignPoint: n.horizontal
  }));
  var O = R && y !== 0, T = N && w !== 0, k = E && y !== 0, W = C && w !== 0;
  return {
    flipped: T || O,
    fitted: k || W,
    flip: {
      horizontal: T,
      vertical: O
    },
    fit: {
      horizontal: W,
      vertical: k
    },
    offset: {
      left: w,
      top: y
    }
  };
};
function jx(e) {
  for (var t = [], r = e.parentNode.firstElementChild; r; )
    r !== e && t.push(r), r = r.nextElementSibling;
  return t;
}
function Wx(e, t) {
  for (var r = Kp(e), i = t, n, a; i && (n = jx(i), a = r.reduce(
    function(o, l) {
      return o.concat(n.filter(function(d) {
        return d === l;
      }));
    },
    []
  )[0], !a); )
    i = i.parentElement;
  return a;
}
var Ux = function(e, t) {
  return e || { height: 0, left: t.left, top: t.top, width: 0 };
}, _x = function(e, t) {
  return !e || t === 1 ? e : {
    height: e.height / t,
    left: e.left / t,
    top: e.top / t,
    width: e.width / t
  };
}, qx = function(e, t) {
  if (!t)
    return e;
  var r = {
    height: e.height,
    left: e.left - t.left,
    top: e.top - t.top,
    width: e.width
  };
  return r;
};
function Yx(e) {
  var t, r = !1;
  return function() {
    for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n];
    return r || (t = e.apply(void 0, i), r = !0), t;
  };
}
var Kx = Yx(function(e) {
  if (!Zp())
    return !1;
  var t = e ? e.ownerDocument : document;
  if (!t || !t.body)
    return !1;
  var r = 10, i = t.createElement("div");
  i.style.transform = "matrix(10, 0, 0, 10, 0, 0)", i.innerHTML = '<div style="position: fixed; top: ' + r + 'px;">child</div>', t.body.appendChild(i);
  var n = i.children[0].getBoundingClientRect().top !== r;
  return t.body.removeChild(i), n;
}), Zp = function() {
  return !!// from fbjs
  (typeof window < "u" && window.document && window.document.createElement);
}, Cr = {
  eitherRect: Ux,
  scaleRect: _x,
  removeStackingOffset: qx,
  hasRelativeStackingContext: Kx,
  canUseDOM: Zp
}, Xx = [
  "font-size",
  "font-family",
  "font-stretch",
  "font-style",
  "font-weight",
  "line-height"
], Gx = function(e, t) {
  return {
    left: e.left + t.left,
    top: e.top + t.top
  };
}, Qp = function() {
  return Cr.canUseDOM() ? window : null;
}, Zx = function(e) {
  var t = Qp();
  if (!t || !e)
    return [];
  var r = t.getComputedStyle(e);
  return Xx.map(function(i) {
    return { key: i, value: r[i] };
  });
}, Qx = function(e) {
  return e ? !!e.offsetParent : !1;
}, Jx = function(e) {
  return e ? Ma(e) : null;
}, eb = function(e, t) {
  if (!e)
    return null;
  var r = e.style, i = r.left, n = r.top, a = r.transition;
  e.style.transition = "none", e.style.left = t.left + "px", e.style.top = t.top + "px";
  var o = Ma(e);
  return e.style.left = i, e.style.top = n, e.offsetHeight, e.style.transition = a, o;
}, tb = function(e, t, r) {
  if (!e || !t)
    return null;
  var i = r || 1;
  return Hx(e, t, i);
}, rb = /auto|scroll/, ib = function(e) {
  return "" + e.style.overflow + e.style.overflowX + e.style.overflowY;
}, nb = function(e) {
  var t = window.getComputedStyle(e);
  return "" + t.overflow + t.overflowX + t.overflowY;
}, ab = function(e) {
  return ib(e) || nb(e);
}, ob = function(e) {
  var t = [];
  if (!Cr.canUseDOM())
    return t;
  for (var r = e.parentElement; r; )
    (rb.test(ab(r)) || r.hasAttribute("data-scrollable")) && t.push(r), r = r.parentElement;
  return t.push(window), t;
}, Pa = function(e) {
  if (!e || !Cr.hasRelativeStackingContext())
    return null;
  for (var t = e.parentElement; t; ) {
    if (window.getComputedStyle(t).transform !== "none")
      return t;
    t = t.parentElement;
  }
  return null;
}, sb = function(e) {
  var t = Pa(e);
  return t ? Ma(t) : null;
}, lb = function(e) {
  var t = Pa(e);
  return t ? {
    x: t.scrollLeft,
    y: t.scrollTop
  } : { x: 0, y: 0 };
}, cb = function(e) {
  var t = Pa(e);
  return t ? {
    height: t.scrollHeight,
    width: t.scrollWidth
  } : null;
}, db = function(e) {
  return !!Pa(e);
}, Jp = function() {
  return Cr.canUseDOM() && parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
}, ub = function() {
  return Jp() > 1;
}, pb = function(e, t) {
  if (!e || !Cr.canUseDOM())
    return null;
  var r = Wx(e, t);
  if (!r)
    return null;
  var i = [e].concat(Kp(e, r)).reduce(
    function(n, a) {
      var o = a.style.zIndex || window.getComputedStyle(a).zIndex, l = parseInt(o, 10);
      return l > n ? l : n;
    },
    0
  );
  return i ? i + 1 : null;
}, or = {
  addOffset: Gx,
  addScroll: Ox,
  align: Rx,
  boundingOffset: Fx,
  getFontStyles: Zx,
  getWindow: Qp,
  hasOffsetParent: Qx,
  offset: Jx,
  offsetAtPoint: eb,
  position: tb,
  removeScroll: Bx,
  restrictToView: Vx,
  scrollPosition: Xp,
  scrollableParents: ob,
  getRelativeContextElement: Pa,
  stackingElementOffset: sb,
  stackingElementScroll: lb,
  stackingElementViewPort: cb,
  useRelativePosition: db,
  windowViewPort: Yp,
  zoomLevel: Jp,
  isZoomed: ub,
  zIndex: pb
}, hb = function(e, t, r, i) {
  var n = mb(e, t), a = Cr.eitherRect(or.offset(e), r), o = 2 * i, l = or.stackingElementScroll(t);
  i !== 1 && l && (l.x /= o, l.y /= o);
  var d = or.stackingElementOffset(t);
  return i !== 1 && d && (d.left /= o, d.top /= o), or.removeScroll(
    or.addScroll(
      Cr.removeStackingOffset(
        Cr.scaleRect(a, i),
        d
      ),
      l
    ),
    n
  );
}, fb = function(e, t, r, i) {
  var n = Cr.eitherRect(or.position(e, t, i), r);
  return Cr.scaleRect(n, i);
}, mb = function(e, t) {
  return e ? { x: 0, y: 0 } : or.scrollPosition(t);
}, gb = function(e) {
  var t = e.anchor, r = e.element, i = e.anchorAlign, n = e.elementAlign, a = e.margin, o = e.offset, l = e.positionMode, d = e.scale, u = d || 1, p = l === "fixed" || !or.hasOffsetParent(r), h = p ? hb(t, r, o, u) : fb(t, r, o, u), m = Cr.scaleRect(or.offset(r), u), f = or.align({
    anchorAlign: i,
    anchorRect: h,
    elementAlign: n,
    elementRect: m,
    margin: a
  });
  return f;
}, vb = function(e) {
  var t = e.anchor, r = e.currentLocation, i = e.element, n = e.anchorAlign, a = e.elementAlign, o = e.collisions, l = e.margin, d = e.scale, u = d || 1, p = or.offsetAtPoint(i, r), h = Cr.scaleRect(p, u), m = Cr.scaleRect(or.offset(t), u), f = Cr.eitherRect(m, r), b = e.viewPort || or.windowViewPort(i);
  b.width = b.width / u, b.height = b.height / u;
  var x = or.restrictToView({
    anchorAlign: n,
    anchorRect: f,
    collisions: o,
    elementAlign: a,
    elementRect: h,
    margin: l,
    viewPort: b
  }), w = or.addOffset(r, x.offset);
  return {
    flip: x.flip,
    flipped: x.flipped,
    fit: x.fit,
    fitted: x.fitted,
    offset: w
  };
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xb = 16.666666666666668, bb = function(e, t, r = {}) {
  let i, n, a, o, l = 0;
  r = r || {};
  const d = function() {
    l = r.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), i = void 0, o = e.apply(n, a), i || (n = a = null);
  };
  return function() {
    const u = (/* @__PURE__ */ new Date()).getTime();
    !l && r.leading === !1 && (l = u);
    const p = t - (u - l);
    return n = void 0, a = arguments, p <= 0 || p > t ? (i && (clearTimeout(i), i = void 0), l = u, o = e.apply(n, a), i || (n = a = null)) : !i && r.trailing !== !1 && (i = window.setTimeout(d, p)), o;
  };
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const eh = s.createContext((e) => e), yb = 100, wb = 1;
function pn(e, t) {
  if (e === t)
    return !0;
  if (!!e != !!t)
    return !1;
  const r = Object.getOwnPropertyNames(e), i = Object.getOwnPropertyNames(t);
  if (r.length !== i.length)
    return !1;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (e[a] !== t[a])
      return !1;
  }
  return !0;
}
const $b = {
  left: -1e3,
  top: 0
}, Pi = s.forwardRef((e, t) => {
  const r = s.useContext(eh).call(void 0, e), {
    collision: i = wi.collision,
    anchorAlign: n = wi.anchorAlign,
    popupAlign: a = wi.popupAlign,
    offset: o = wi.offset,
    animate: l = wi.animate,
    show: d = wi.show,
    margin: u = wi.margin,
    positionMode: p = wi.positionMode,
    appendTo: h,
    contentKey: m,
    anchor: f,
    scale: b,
    role: x,
    onKeyDown: w,
    onPosition: y,
    onOpen: E,
    onMouseDownOutside: C,
    onClose: R,
    className: N,
    popupClass: O,
    id: T,
    style: k,
    children: W
  } = r, H = Ut(), Y = r.unstyled || H, K = Y && Y.uPopup, [_, X] = s.useState({
    current: "hidden",
    previous: "hidden",
    props: {}
  }), A = (q) => {
    window?.addEventListener("mousedown", F), L(q), D(q.firstChild, "enter", J), X({ ...de, current: "shown", previous: de.current });
  }, L = (q) => {
    const { width: Se, height: qe } = q.style;
    if (q.offsetWidth === 0 && q.offsetHeight === 0)
      return;
    q.style.width = q.offsetWidth + "px", q.style.height = q.offsetHeight + "px";
    const je = gb({
      anchor: f,
      anchorAlign: n,
      element: q,
      elementAlign: a,
      offset: o,
      margin: u,
      positionMode: p,
      scale: b
    }), Ee = vb({
      anchor: f,
      anchorAlign: n,
      element: q,
      elementAlign: a,
      collisions: i,
      currentLocation: je,
      margin: u
    });
    if (q.style.top = Ee.offset.top + "px", q.style.left = Ee.offset.left + "px", q.style.width = Se, q.style.height = qe, _e.current = {
      fit: Ee.fit,
      fitted: Ee.fitted,
      flip: Ee.flip,
      flipped: Ee.flipped
    }, y) {
      const We = {
        target: Et.current,
        flipped: Ee.flipped,
        fitted: Ee.fitted
      };
      y.call(void 0, We);
    }
  }, J = () => {
    const q = $e.current;
    q && (d && q.classList.add(
      ...M(_i.animationContainerShown({ c: K })).split(" ").filter((Se) => Se)
    ), ie(q), E && E.call(void 0, { target: Et.current }));
  }, D = (q, Se, qe) => {
    if (!a)
      return;
    let je;
    const { horizontal: Ee, vertical: We } = a;
    typeof e.animate == "object" && e.animate.direction ? je = e.animate.direction : Ee === "left" && We === "center" ? je = "right" : Ee === "right" && We === "center" ? je = "left" : We === "top" ? je = "down" : je = "up";
    const ct = {
      down: "up",
      up: "down",
      left: "right",
      right: "left"
    };
    _e.current && _e.current.flipped && (je = ct[je]), Tx(q, je, se()[Se], Se, qe, K);
  }, F = (q) => {
    var Se;
    const qe = ((Se = q?.target) == null ? void 0 : Se.closest(".k-animation-container")) === null, je = f?.contains(q?.target) || !1;
    if (qe) {
      if (C) {
        const Ee = {
          target: Et.current,
          event: q,
          state: _,
          isAnchorClicked: je
        };
        C.call(void 0, Ee);
      }
      window?.removeEventListener("mousedown", F);
    }
  }, te = (q) => {
    if (!d) {
      const Se = Y && Y.uPopup;
      q.classList.remove(
        ...M(_i.animationContainerShown({ c: Se })).split(" ").filter((qe) => qe)
      );
    }
    He();
  }, ce = () => {
    de.current === "hiding" && (de.previous === "shown" || de.previous === "reposition") && X({ ...de, current: "hidden", previous: de.current }), R && R.call(void 0, { target: Et.current });
  }, se = () => {
    const q = l;
    let Se = 0, qe = 0;
    return q && (q === !0 ? Se = qe = 300 : (Se = q.openDuration || 0, qe = q.closeDuration || 0)), { enter: Se, exit: qe };
  }, ie = (q) => {
    He(), Oe.current = or.scrollableParents(f || q), Oe.current && Oe.current.map((Se) => Se.addEventListener("scroll", V)), window.addEventListener("resize", V);
  }, He = () => {
    Oe.current && (Oe.current.map((q) => q.removeEventListener("scroll", V)), Oe.current = void 0), window.removeEventListener("resize", V);
  }, V = bb(() => {
    $e.current && de.current !== "hidden" && de.current !== "hiding" && X({ ..._, current: "reposition", previous: de.current });
  }, xb), fe = () => Ve ? Ve + wb : yb, Ve = pc() || 0, _e = s.useRef(void 0), Oe = s.useRef(void 0), $e = s.useRef(null), Et = s.useRef(null), Ce = s.useRef({}), Rt = s.useRef(!1);
  s.useImperativeHandle(Et, () => ({
    element: $e.current,
    setPosition: L,
    props: e
  })), s.useImperativeHandle(t, () => Et.current);
  const de = s.useMemo(() => {
    const q = {
      ..._,
      props: {
        show: d,
        anchor: f,
        anchorAlign: n,
        appendTo: h,
        collision: i,
        popupAlign: a,
        className: N,
        popupClass: O,
        style: k,
        offset: o,
        contentKey: m
      }
    };
    return d ? _.current === "hidden" || _.current === "hiding" ? { ...q, current: "showing", previous: _.current } : _.current === "showing" ? { ...q, current: "shown", previous: _.current } : _.current === "shown" && (!pn(o, _.props.offset) || !pn(n, _.props.anchorAlign) || !pn(h, _.props.appendTo) || !pn(i, _.props.collision) || !pn(a, _.props.popupAlign) || !pn(k, _.props.style) || f !== _.props.anchor || O !== _.props.popupClass || N !== _.props.className) ? { ...q, current: "reposition", previous: _.current } : q : _.current === "hiding" || _.current === "hidden" ? { ...q, current: "hidden", previous: _.current } : { ...q, current: "hiding", previous: _.current };
  }, [
    d,
    f,
    n,
    h,
    i,
    a,
    N,
    O,
    k,
    o,
    m,
    _
  ]);
  s.useEffect(() => {
    de.current === "hiding" && !Rt.current && $e.current ? (Rt.current = !0, te($e.current), D($e.current.firstChild, "exit", ce)) : (Rt.current = !1, de.current === "showing" && $e.current && !$e.current.classList.contains("k-animation-container-shown") ? A($e.current) : de.current === "hiding" && $e.current ? ce() : de.current === "reposition" && de.previous === "shown" ? setTimeout(() => {
      X({ ...de, current: "shown", previous: de.current });
    }, 0) : de.current === "shown" && Ce.current.contentKey !== m && $e.current && L($e.current)), de.current === "reposition" && (de.previous === "shown" || de.previous === "showing") && $e.current && L($e.current), Ce.current = { contentKey: m };
  }, [de]), s.useEffect(() => (de.current === "showing" && $e.current && A($e.current), () => {
    He();
  }), []);
  const Zt = h || (sr ? f && f.ownerDocument ? f.ownerDocument.body : document.body : void 0), me = Object.assign(
    {},
    { position: p, top: 0, left: -1e4 },
    k || {}
  ), ut = de.current === "hiding";
  if ((d || ut) && Zt) {
    const q = fe(), Se = /* @__PURE__ */ s.createElement(ri.Provider, { value: q }, /* @__PURE__ */ s.createElement(
      "div",
      {
        onKeyDown: w,
        className: M(_i.animationContainer({ c: K }), N),
        id: T,
        ref: $e,
        style: {
          zIndex: q,
          ...me
        }
      },
      /* @__PURE__ */ s.createElement(
        "div",
        {
          className: M(_i.animationChild({ c: K })),
          style: { transitionDelay: "0ms" }
        },
        /* @__PURE__ */ s.createElement("div", { role: x, className: M(_i.popup({ c: K }), O) }, W)
      )
    ));
    return h !== null ? _o.createPortal(Se, Zt) : Se;
  }
  return null;
}), wi = {
  collision: {
    horizontal: Pr.fit,
    vertical: Pr.flip
  },
  anchorAlign: {
    horizontal: Te.left,
    vertical: Te.bottom
  },
  popupAlign: {
    horizontal: Te.left,
    vertical: Te.top
  },
  offset: $b,
  animate: !0,
  show: !1,
  margin: {
    horizontal: 0,
    vertical: 0
  },
  positionMode: "absolute"
};
Pi.displayName = "Popup";
Pi.propTypes = {
  anchor: function(e) {
    const t = e.anchor;
    return t && typeof t.nodeType != "number" ? new Error("Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.") : null;
  },
  appendTo: function(e) {
    const t = e.appendTo;
    return t && typeof t.nodeType != "number" ? new Error("Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed.") : null;
  },
  className: c.oneOfType([c.string, c.arrayOf(c.string.isRequired)]),
  id: c.string,
  popupClass: c.oneOfType([c.string, c.arrayOf(c.string), c.object]),
  collision: c.shape({
    horizontal: c.oneOf([Pr.fit, Pr.flip, Pr.none]),
    vertical: c.oneOf([Pr.fit, Pr.flip, Pr.none])
  }),
  anchorAlign: c.shape({
    horizontal: c.oneOf([Te.left, Te.center, Te.right]),
    vertical: c.oneOf([Te.top, Te.center, Te.bottom])
  }),
  popupAlign: c.shape({
    horizontal: c.oneOf([Te.left, Te.center, Te.right]),
    vertical: c.oneOf([Te.top, Te.center, Te.bottom])
  }),
  offset: c.shape({
    left: c.number,
    top: c.number
  }),
  children: c.oneOfType([c.element, c.node]),
  show: c.bool,
  animate: c.oneOfType([
    c.bool,
    c.shape({
      openDuration: c.number,
      closeDuration: c.number
    })
  ]),
  margin: c.shape({
    horizontal: c.number,
    vertical: c.number
  }),
  positionMode: c.oneOf(["fixed", "absolute"]),
  scale: c.number,
  style: c.object,
  onClose: c.func,
  onPosition: c.func,
  onOpen: c.func,
  onKeyDown: c.func,
  onMouseDownOutside: c.func
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const kb = 12e3, Cb = 2e3, Sb = (e) => {
  const { children: t, width: r, dir: i, itemsCount: n, popupSettings: a } = e, o = s.useContext(ri), l = o ? o + Cb : kb;
  return /* @__PURE__ */ s.createElement(ri.Provider, { value: l }, /* @__PURE__ */ s.createElement(
    Pi,
    {
      style: { width: r, direction: i },
      contentKey: n && n.join(),
      ...a
    },
    t
  ));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Eb({ imageUrl: e, name: t, iconClass: r, svgIcon: i, imageAlt: n, buttonClasses: a }) {
  return e ? /* @__PURE__ */ s.createElement(
    "img",
    {
      role: "presentation",
      className: M(Oi.icon({ c: a })),
      alt: n,
      src: e
    }
  ) : t || i ? /* @__PURE__ */ s.createElement(Li, { className: M(Oi.icon({ c: a })), name: t, icon: i }) : r ? /* @__PURE__ */ s.createElement("span", { role: "presentation", className: M(Oi.icon({ c: a }), r) }) : null;
}
const Ct = s.forwardRef((e, t) => {
  const {
    children: r,
    togglable: i,
    dir: n,
    disabled: a,
    selected: o,
    icon: l,
    iconClass: d,
    svgIcon: u,
    imageUrl: p,
    imageAlt: h,
    className: m,
    startIcon: f,
    endIcon: b,
    onClick: x,
    size: w = Qa.size,
    rounded: y = Qa.rounded,
    fillMode: E = Qa.fillMode,
    themeColor: C = Qa.themeColor,
    ...R
  } = e, N = () => {
    i && o === void 0 && (T.current = !W, H(!W));
  }, O = (D) => {
    N(), x && x.call(void 0, D);
  }, T = s.useRef(void 0), k = s.useRef(null), [W, H] = s.useState(i === !0 && o === !0), Y = u !== void 0 || l !== void 0 || d !== void 0 || p !== void 0, K = r !== void 0, _ = Ut(), X = e.unstyled || _, A = X && X.uButton;
  s.useImperativeHandle(t, () => ({
    element: k.current,
    selected: T.current !== void 0 ? T.current : W
  })), s.useMemo(() => {
    i && o !== void 0 && o !== W && H(o);
  }, [i, o]), s.useEffect(() => {
    T.current = void 0;
  }, [W]);
  const L = Eb({
    name: l,
    svgIcon: u,
    iconClass: d,
    imageUrl: p,
    imageAlt: h,
    buttonClasses: A
  }), J = (D) => s.cloneElement(D, { className: M(Oi.icon({ c: A }), D.props.className) });
  return /* @__PURE__ */ s.createElement(
    "button",
    {
      ref: k,
      "aria-pressed": i ? W : void 0,
      ...R,
      dir: n,
      disabled: a,
      onClick: O,
      className: M(
        Oi.wrapper({
          c: A,
          isRtl: n === "rtl",
          selected: W,
          disabled: a,
          size: w,
          fillMode: E,
          rounded: y,
          themeColor: C,
          iconButton: !K && Y
        }),
        m
      )
    },
    f && J(f),
    L,
    r && /* @__PURE__ */ s.createElement("span", { className: M(Oi.text({ c: A })) }, r),
    b && J(b)
  );
}), Qa = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
Ct.displayName = "KendoReactButton";
Ct.propTypes = {
  children: c.node,
  selected: c.bool,
  togglable: c.bool,
  icon: c.string,
  svgIcon: Qo,
  iconClass: c.string,
  imageUrl: c.string,
  imageAlt: c.string,
  size: c.oneOf([null, "small", "medium", "large"]),
  rounded: c.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: c.oneOf([null, "flat", "link", "outline", "solid", "clear"]),
  // eslint-disable-next-line max-len
  themeColor: c.oneOf([
    null,
    "base",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "inverse"
  ])
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ac = (e) => {
  const t = Ut(), r = e.unstyled || t, i = r && r.uDropDownButton, n = s.useCallback(
    (d) => {
      e.onClick(d, e.index);
    },
    [e]
  ), a = e.dataItem.render || e.item || (e.item === void 0 ? e.render : null), o = e.dataItem.text !== void 0 ? e.dataItem.text : e.textField ? e.dataItem[e.textField] : e.dataItem, l = /* @__PURE__ */ s.createElement(
    "li",
    {
      id: e.id,
      className: M(
        In.li({
          c: i,
          focused: e.focused
        }),
        e.className
      ),
      tabIndex: -1,
      onClick: n,
      onMouseDown: e.onDown,
      onPointerDown: e.onDown,
      role: "menuitem",
      "aria-disabled": e.dataItem.disabled || void 0
    },
    /* @__PURE__ */ s.createElement(
      "span",
      {
        tabIndex: -1,
        className: M(
          In.link({
            c: i,
            selected: e.dataItem.selected,
            disabled: e.dataItem.disabled
          })
        ),
        key: "icon"
      },
      a ? /* @__PURE__ */ s.createElement(a, { item: e.dataItem, itemIndex: e.index }) : /* @__PURE__ */ s.createElement(s.Fragment, null, (e.dataItem.icon || e.dataItem.iconClass || e.dataItem.svgIcon) && /* @__PURE__ */ s.createElement(
        Li,
        {
          className: e.dataItem.iconClass,
          name: e.dataItem.icon,
          icon: e.dataItem.svgIcon
        }
      ), e.dataItem.imageUrl && /* @__PURE__ */ s.createElement("img", { role: "presentation", alt: "", src: e.dataItem.imageUrl, className: "k-icon" }), o && /* @__PURE__ */ s.createElement("span", { className: "k-menu-link-text" }, o))
    )
  );
  return e.item !== void 0 && e.render !== void 0 ? e.render.call(void 0, l, e) : l;
};
Ac.displayName = "KendoReactButtonItem";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const th = class extends s.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
th.propTypes = {
  text: c.string,
  icon: c.string,
  iconClass: c.string,
  imageUrl: c.string,
  disabled: c.bool,
  render: c.any
};
let Db = th;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const rh = (e, t, r, i) => {
  if (r)
    return e;
  const n = Math.min(i - 1, Math.max(0, e));
  switch (t) {
    case z.enter:
    case z.space:
    case z.esc:
      return -1;
    case z.up:
    case z.left:
      return n - 1 < 0 ? i - 1 : n - 1;
    case z.down:
    case z.right:
      return n + 1 >= i ? 0 : n + 1;
    case z.home:
      return 0;
    case z.end:
      return i - 1;
    default:
      return e;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function ih(e) {
  const t = { horizontal: "left", vertical: "bottom" };
  return e && (t.horizontal = "right"), t;
}
function nh(e) {
  const t = { horizontal: "left", vertical: "top" };
  return e && (t.horizontal = "right"), t;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ah = {
  name: "@progress/kendo-react-buttons",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1748961799,
  version: "11.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xl = class extends s.Component {
  constructor(t) {
    super(t), this.state = {
      focused: !1,
      focusedIndex: -1,
      opened: !1
    }, this.wrapper = null, this.mainButton = null, this.list = null, this.skipFocus = !1, this.buttonsData = [], this.showLicenseWatermark = !1, this.onKeyDown = (r) => {
      const { focusedIndex: i } = this.state;
      if (r.altKey) {
        !this.opened && r.keyCode === z.down ? (r.preventDefault(), this.setState({ focusedIndex: 0 }), this.setOpen(!0, r)) : this.opened && r.keyCode === z.up && (r.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, r));
        return;
      }
      let n;
      if (r.keyCode === z.enter || r.keyCode === z.space) {
        if (r.preventDefault(), this.dispatchClickEvent(r, i), i >= 0) {
          n = {
            focusedIndex: this.opened ? -1 : 0
          };
          const a = !this.opened;
          this.setOpen(a, r);
        }
      } else if (this.opened && r.keyCode === z.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, r);
        return;
      }
      if (this.opened) {
        const a = rh(i, r.keyCode, r.altKey, this.buttonsData.length);
        a !== i && (n = n || {}, n.focusedIndex = a);
        const o = r.keyCode === z.up || r.keyCode === z.down || r.keyCode === z.left || r.keyCode === z.right;
        !r.altKey && (o || r.keyCode === z.home || r.keyCode === z.end) && r.preventDefault();
      }
      n && this.setState(n);
    }, this.switchFocus = (r) => {
      this.skipFocus = !0, r(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.onFocus = (r) => {
      this.skipFocus || (Bt(this.props.onFocus, r, this, void 0), this.setState({ focused: !0 }));
    }, this.setOpen = (r, i) => {
      this.opened !== r && (this.openedDuringOnChange = r, this.setState({ opened: r }), i ? this.dispatchPopupEvent(i, r) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (r, i) => {
      this.opened && this.setState({ focusedIndex: 0 }), this.dispatchClickEvent(r, i), this.setOpen(!1, r);
    }, this.onBlur = (r) => {
      this.skipFocus || (this.setState({
        focused: !1,
        focusedIndex: -1
      }), Bt(this.props.onBlur, r, this, void 0), setTimeout(() => {
        this.setOpen(!1, r);
      }, 0));
    }, this.onPopupClose = (r) => {
      var i;
      const n = ti(document);
      this.element && this.element.removeAttribute("tabindex"), (n === this.list || (i = this.list) != null && i.contains(n)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, r);
    }, this.listRef = (r) => {
      this.list = r, r && this.state.focused && this.switchFocus(() => {
        r.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onSplitPartClick = (r) => {
      if (this.buttonsData.length) {
        const i = !this.opened;
        this.setState({
          focusedIndex: i ? 0 : -1,
          focused: !0
        }), this.setOpen(i, r);
      }
    }, this.onDownSplitPart = (r) => {
      r.preventDefault();
      const i = ti(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onItemDown = (r) => {
      ti(document) === this.list && r.preventDefault();
    }, this.dispatchPopupEvent = (r, i) => {
      Bt(i ? this.props.onOpen : this.props.onClose, r, this, void 0), this.openedDuringOnChange = void 0;
    }, this.showLicenseWatermark = !fc(ah, { component: "SplitButton" });
  }
  get guid() {
    return this.props.id ? this.props.id + "-accessibility-id" : this.props.id;
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    this.buttonsData = this.props.items || s.Children.toArray(this.props.children).filter((l) => l && l.type === Db).map((l) => l.props);
    const t = this.isRtl(), r = t ? "rtl" : void 0, { id: i, style: n, tabIndex: a, disabled: o } = this.props;
    return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      "div",
      {
        id: i,
        style: n,
        className: M(
          "k-split-button",
          "k-button-group",
          {
            "k-focus": this.state.focused
          },
          `k-rounded-${Ca.roundedMap[this.props.rounded || "medium"]}`,
          this.props.className
        ),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        dir: r,
        ref: (l) => {
          this.wrapper = l;
        }
      },
      /* @__PURE__ */ s.createElement(
        Ct,
        {
          ref: (l) => {
            this.mainButton = l && l.element;
          },
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          onClick: (l) => this.onItemClick(l, -1),
          disabled: o || void 0,
          tabIndex: a,
          accessKey: this.props.accessKey,
          className: this.props.buttonClass,
          icon: this.props.icon,
          svgIcon: this.props.svgIcon,
          iconClass: this.props.iconClass,
          startIcon: this.props.startIcon,
          endIcon: this.props.endIcon,
          imageUrl: this.props.imageUrl,
          dir: r,
          "aria-disabled": o,
          "aria-haspopup": !0,
          "aria-expanded": this.opened || void 0,
          "aria-label": this.props.ariaLabel,
          "aria-controls": this.opened ? this.guid : void 0,
          id: "button-" + this.guid,
          title: this.props.title
        },
        this.props.text
      ),
      /* @__PURE__ */ s.createElement(
        Ct,
        {
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          icon: "caret-alt-down",
          svgIcon: La,
          className: "k-split-button-arrow",
          disabled: o || void 0,
          tabIndex: -1,
          onClick: this.onSplitPartClick,
          onMouseDown: this.onDownSplitPart,
          onPointerDown: this.onDownSplitPart,
          dir: r,
          "aria-label": "menu toggling button"
        }
      ),
      this.renderPopup(t)
    ), this.showLicenseWatermark && /* @__PURE__ */ s.createElement(mc, null));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(t, r) {
    this.isItemDisabled(r) || (r === -1 ? Bt(this.props.onButtonClick, t, this, void 0) : Bt(this.props.onItemClick, t, this, {
      item: this.buttonsData[r],
      itemIndex: r
    }));
  }
  renderPopup(t) {
    const { popupSettings: r = {} } = this.props, { focusedIndex: i } = this.state;
    return /* @__PURE__ */ s.createElement(
      Pi,
      {
        anchor: this.wrapper,
        show: this.opened,
        animate: r.animate,
        popupClass: M("k-menu-popup", r.popupClass),
        anchorAlign: r.anchorAlign || ih(t),
        popupAlign: r.popupAlign || nh(t),
        style: t ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ s.createElement(
        "ul",
        {
          role: "menu",
          id: this.guid,
          "aria-labelledby": "button-" + this.guid,
          tabIndex: -1,
          ref: this.listRef,
          "aria-activedescendant": i >= 0 ? `${this.guid}-${i}` : void 0,
          className: M("k-menu-group", {
            [`k-menu-group-${Ca.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          })
        },
        this.renderChildItems()
      )
    );
  }
  renderChildItems() {
    const { item: t, itemRender: r, textField: i } = this.props;
    return this.buttonsData.length > 0 ? this.buttonsData.map((n, a) => /* @__PURE__ */ s.createElement(
      Ac,
      {
        className: M(
          "k-menu-item",
          { "k-first": a === 0 },
          { "k-last": a === this.buttonsData.length - 1 }
        ),
        dataItem: n,
        textField: i,
        focused: this.state.focusedIndex === a,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: r,
        item: t,
        key: a,
        index: a,
        id: `${this.guid}-${a}`
      }
    )) : null;
  }
  isItemDisabled(t) {
    return this.buttonsData[t] ? this.buttonsData[t].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.wrapper && getComputedStyle(this.wrapper).direction === "rtl";
  }
};
xl.propTypes = {
  accessKey: c.string,
  ariaLabel: c.string,
  title: c.string,
  onButtonClick: c.func,
  onFocus: c.func,
  onBlur: c.func,
  onItemClick: c.func,
  onOpen: c.func,
  onClose: c.func,
  text: c.string,
  items: c.arrayOf(c.any),
  textField: c.string,
  tabIndex: c.number,
  disabled: c.bool,
  icon: c.string,
  svgIcon: Qo,
  iconClass: c.string,
  imageUrl: c.string,
  popupSettings: c.object,
  itemRender: c.any,
  item: c.func,
  className: c.string,
  buttonClass: c.string,
  dir: c.string
}, xl.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
let Mb = xl;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const oh = class extends s.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
oh.propTypes = {
  text: c.string,
  icon: c.string,
  iconClass: c.string,
  imageUrl: c.string,
  selected: c.bool,
  disabled: c.bool,
  render: c.any
};
let Ib = oh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Tb = 12e3, Rb = 2e3, bl = class extends s.Component {
  constructor(t) {
    super(t), this.state = {
      opened: !1,
      focused: !1,
      focusedIndex: -1
    }, this.mainButton = null, this.list = null, this.skipFocus = !1, this.showLicenseWatermark = !1, this.buttonsData = [], this.onKeyDown = (r) => {
      const { focusedIndex: i } = this.state;
      if (r.altKey) {
        !this.opened && r.keyCode === z.down ? (r.preventDefault(), this.setOpen(!0, r), this.setState({ focusedIndex: 0 })) : this.opened && r.keyCode === z.up && (r.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, r));
        return;
      }
      const n = { ...this.state };
      if (r.keyCode === z.enter || r.keyCode === z.space) {
        r.preventDefault(), i >= 0 && this.dispatchClickEvent(r, i);
        const a = !this.opened;
        this.setState({
          focused: !0,
          focusedIndex: a ? 0 : -1
        }), this.setOpen(a, r);
        return;
      }
      if (this.opened && r.keyCode === z.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, r);
        return;
      }
      if (this.opened) {
        const a = rh(i, r.keyCode, r.altKey, this.buttonsData.length);
        n.focusedIndex = a;
        const o = r.keyCode === z.up || r.keyCode === z.down || r.keyCode === z.left || r.keyCode === z.right;
        !r.altKey && (o || r.keyCode === z.home || r.keyCode === z.end) && r.preventDefault();
      }
      this.setState(n);
    }, this.switchFocus = (r) => {
      this.skipFocus = !0, r(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.handleFocus = (r) => {
      this.skipFocus || (this.setState({ focused: !0, focusedIndex: this.opened ? 0 : -1 }), Bt(this.props.onFocus, r, this, void 0));
    }, this.handleButtonBlur = (r) => {
      this.opened || (this.setState({ focused: !1 }), Bt(this.props.onBlur, r, this, void 0));
    }, this.handleMenuBlur = (r) => {
      this.skipFocus || (this.setState({ focused: !1, focusedIndex: -1 }), Bt(this.props.onBlur, r, this, void 0), setTimeout(() => {
        this.setOpen(!1, r);
      }, 0));
    }, this.setOpen = (r, i) => {
      this.opened !== r && (this.openedDuringOnChange = r, this.setState({ opened: r }), i ? this.dispatchPopupEvent(i, r) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (r, i) => {
      this.setState({ focusedIndex: -1 }), this.dispatchClickEvent(r, i), this.setOpen(!1, r);
    }, this.onItemDown = (r) => {
      ti(document) === this.list && r.preventDefault();
    }, this.mouseDown = (r) => {
      r.preventDefault();
      const i = ti(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onPopupClose = (r) => {
      var i;
      const n = ti(document);
      this.element && this.element.removeAttribute("tabindex"), (n === this.list || (i = this.list) != null && i.contains(n)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, r);
    }, this.listRef = (r) => {
      this.list = r, r && this.state.focused && this.switchFocus(() => {
        r.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onClickMainButton = (r) => {
      if (!this.buttonsData.length)
        return;
      const i = !this.opened;
      this.setState({
        focused: !0,
        focusedIndex: i ? 0 : -1
      }), this.setOpen(i, r);
    }, this.dispatchPopupEvent = (r, i) => {
      Bt(i ? this.props.onOpen : this.props.onClose, r, this, void 0), this.openedDuringOnChange = void 0;
    }, this.showLicenseWatermark = !fc(ah, { component: "DropDownButton" });
  }
  get guid() {
    return this.props.id + "-accessibility-id";
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    const t = this.isRtl(), r = this.props.unstyled && this.props.unstyled.uDropDownButton, i = t ? "rtl" : void 0, {
      id: n,
      style: a,
      tabIndex: o,
      disabled: l,
      size: d,
      rounded: u,
      fillMode: p,
      themeColor: h,
      ariaLabel: m,
      title: f,
      accessKey: b,
      icon: x,
      svgIcon: w,
      iconClass: y,
      buttonClass: E,
      className: C,
      imageUrl: R,
      startIcon: N,
      endIcon: O
    } = this.props;
    return this.buttonsData = this.props.items || s.Children.toArray(this.props.children).filter((T) => T && T.type === Ib).map((T) => T.props), /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      Ct,
      {
        id: n,
        size: d,
        style: a,
        rounded: u,
        fillMode: p,
        themeColor: h,
        onClick: this.onClickMainButton,
        onMouseDown: this.mouseDown,
        onKeyDown: this.onKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleButtonBlur,
        "aria-disabled": l ? "true" : void 0,
        tabIndex: o,
        accessKey: b,
        icon: x,
        svgIcon: w,
        iconClass: y,
        className: M(
          E,
          C,
          In.wrapper({
            c: r,
            focused: this.state.focused,
            disabled: l
          })
        ),
        imageUrl: R,
        dir: i,
        ref: (T) => {
          this.mainButton = T && T.element;
        },
        type: "button",
        "aria-expanded": this.opened ? "true" : "false",
        "aria-label": m,
        "aria-controls": this.opened ? this.guid : void 0,
        title: f,
        startIcon: N,
        endIcon: O
      },
      this.props.text
    ), this.showLicenseWatermark && /* @__PURE__ */ s.createElement(mc, null), this.renderPopup(t));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(t, r) {
    this.isItemDisabled(r) || Bt(this.props.onItemClick, t, this, {
      item: this.buttonsData[r],
      itemIndex: r
    });
  }
  renderPopup(t) {
    const { popupSettings: r = {}, _zIndex: i, unstyled: n } = this.props, a = i ? i + Rb : Tb, o = n && n.uDropDownButton, { focusedIndex: l } = this.state;
    return /* @__PURE__ */ s.createElement(ri.Provider, { value: a }, /* @__PURE__ */ s.createElement(
      Pi,
      {
        anchor: this.mainButton,
        show: this.opened,
        animate: r.animate,
        popupClass: M(In.popup({ c: o }), r.popupClass),
        anchorAlign: r.anchorAlign || ih(t),
        popupAlign: r.popupAlign || nh(t),
        style: t ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ s.createElement(
        "ul",
        {
          role: "list",
          id: this.guid,
          tabIndex: -1,
          "aria-activedescendant": l >= 0 ? `${this.guid}-${l}` : void 0,
          ref: this.listRef,
          onKeyDown: this.onKeyDown,
          onBlur: this.handleMenuBlur,
          className: M(
            In.ul({
              c: o,
              size: this.props.size
            })
          )
        },
        this.renderChildItems()
      )
    ));
  }
  renderChildItems() {
    const { item: t, itemRender: r, textField: i, unstyled: n } = this.props, a = n && n.uDropDownButton;
    return this.buttonsData.length > 0 ? this.buttonsData.map((o, l) => /* @__PURE__ */ s.createElement(
      Ac,
      {
        className: M(
          In.item({
            c: a
          }),
          o.className,
          { "k-first": l === 0 },
          { "k-last": l === this.buttonsData.length - 1 }
        ),
        dataItem: o,
        textField: i,
        focused: this.state.focusedIndex === l,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: r,
        item: t,
        index: l,
        key: l,
        id: `${this.guid}-${l}`
      }
    )) : null;
  }
  isItemDisabled(t) {
    return this.buttonsData[t] ? this.buttonsData[t].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.mainButton && getComputedStyle(this.mainButton).direction === "rtl";
  }
};
bl.propTypes = {
  accessKey: c.string,
  ariaLabel: c.string,
  title: c.string,
  onFocus: c.func,
  onBlur: c.func,
  onItemClick: c.func,
  onOpen: c.func,
  onClose: c.func,
  items: c.arrayOf(c.any),
  textField: c.string,
  tabIndex: c.number,
  disabled: c.bool,
  icon: c.string,
  svgIcon: Qo,
  iconClass: c.string,
  imageUrl: c.string,
  popupSettings: c.object,
  itemRender: c.func,
  item: c.func,
  className: c.string,
  buttonClass: c.string,
  dir: c.string
}, bl.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
let Ob = bl;
const Nb = Ji(), sh = en(
  gc(
    Nb,
    cp(Wg(Ob))
  )
);
sh.displayName = "KendoReactDropDownButton";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Fb = en(
  sh
);
Fb.displayName = "KendoReactDropDownButton";
const Lb = en(
  Mb
);
Lb.displayName = "KendoReactSplitButton";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const zc = s.forwardRef((e, t) => {
  const r = s.useRef(null), i = s.useRef(null), n = s.useRef(void 0), a = Ut(), o = a && a.uTextBox, l = s.useCallback(() => {
    var F;
    return n.current !== void 0 ? n.current : (F = r.current) == null ? void 0 : F.value;
  }, []);
  s.useImperativeHandle(i, () => ({
    get element() {
      return r.current;
    },
    get name() {
      return r.current && r.current.name;
    },
    get value() {
      return l();
    }
  })), s.useImperativeHandle(t, () => i.current);
  const {
    size: d = hn.size,
    fillMode: u = hn.fillMode,
    rounded: p = hn.rounded,
    autoFocus: h = hn.autoFocus,
    inputAttributes: m,
    className: f,
    dir: b,
    style: x,
    prefix: w = hn.prefix,
    suffix: y = hn.suffix,
    valid: E,
    onFocus: C,
    onBlur: R,
    // Destruct to avoid warning when used inside a form field
    modified: N,
    touched: O,
    visited: T,
    ...k
  } = e, [W] = ld(w), [H] = ld(y), [Y, K] = s.useState(!1), _ = (F) => {
    K(!0);
  }, X = (F) => {
    K(!1);
  }, A = s.useCallback(
    (F) => {
      n.current = F.target.value, e.onChange && e.onChange.call(void 0, {
        syntheticEvent: F,
        nativeEvent: F.nativeEvent,
        value: F.target.value,
        target: i.current
      }), n.current = void 0;
    },
    [e.onChange]
  ), { onFocus: L, onBlur: J } = sp({
    onFocus: _,
    onBlur: X,
    onSyncFocus: C,
    onSyncBlur: R
  }), D = s.useMemo(
    () => M(
      hl.wrapper({
        c: o,
        rounded: p,
        fillMode: u,
        size: d,
        focused: Y,
        required: e.required,
        disabled: e.disabled,
        invalid: e.valid === !1
      }),
      f
    ),
    [f, u, Y, e.disabled, e.required, e.valid, p, d, o]
  );
  return /* @__PURE__ */ s.createElement("span", { style: x, dir: b, className: D, onFocus: L, onBlur: J }, /* @__PURE__ */ s.createElement(W, null), /* @__PURE__ */ s.createElement(
    "input",
    {
      ref: r,
      className: M(hl.inputInner({ c: o })),
      autoFocus: h,
      ...Object.assign({}, k, m),
      "aria-required": e.required,
      onChange: A
    }
  ), /* @__PURE__ */ s.createElement(H, null));
}), hn = {
  prefix: (e) => null,
  suffix: (e) => null,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: !1
};
zc.propTypes = {
  size: c.oneOf([null, "small", "medium", "large"]),
  rounded: c.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: c.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: c.bool,
  inputAttributes: c.object
};
zc.displayName = "KendoReactTextBoxComponent";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Mr = "", os = "0", gi = "_";
function Tn(e, t) {
  if (Lr(e))
    return t[Number(e)];
  const r = t[Number(Rn(e))];
  return r.items ? Tn(Pb(e), r.items) : void 0;
}
function Rn(e) {
  return On(e) ? e : e.split(gi)[0];
}
function Pb(e) {
  if (On(e))
    return e;
  const t = e.indexOf(gi);
  return e.substring(t + 1);
}
function Ad(e) {
  return ss("0", e);
}
function Ab(e, t) {
  return t.indexOf(e) === 0 ? t.length === e.length || t.charAt(e.length) === gi : !1;
}
function ss(e, t) {
  return t ? t + gi + e : e;
}
function wn(e) {
  const t = e.lastIndexOf(gi);
  return t < 0 ? Mr : e.substring(0, t);
}
function On(e) {
  return e === Mr || e.indexOf(gi) < 0;
}
function Lr(e) {
  return e !== Mr && e.indexOf(gi) < 0;
}
function zb(e) {
  return Bb(e) === 1;
}
function Hb(e) {
  return yl(e) === os;
}
function yl(e) {
  const t = e.lastIndexOf(gi);
  return t < 0 ? e : e.substring(t + 1);
}
function zd(e, t, r) {
  return Lr(t) ? e ? Number(t) < r - 1 ? (Number(t) + 1).toString() : "0" : Number(t) > 0 ? (Number(t) - 1).toString() : (r - 1).toString() : t;
}
function Bb(e) {
  return e.split(gi).length - 1;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const lh = class extends s.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
lh.propTypes = {
  text: c.string,
  url: c.string,
  icon: c.string,
  disabled: c.bool,
  cssClass: c.string,
  cssStyle: c.object,
  render: c.any,
  linkRender: c.any,
  contentRender: c.any,
  data: c.any,
  separator: c.bool
};
let Vb = lh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function jb(e, t) {
  if (e && e.length > 0)
    return {
      items: $l(e),
      inputItems: e
    };
  if (wl(t).length > 0) {
    const r = dh(wl(t));
    return { items: $l(r), inputItems: r };
  }
  return { items: [], inputItems: [] };
}
function ch(e, t) {
  const r = {}, {
    text: i,
    url: n,
    icon: a,
    svgIcon: o,
    disabled: l,
    cssClass: d,
    cssStyle: u,
    render: p,
    linkRender: h,
    contentRender: m,
    data: f,
    separator: b
  } = e || t.props;
  return i !== void 0 && (r.text = i), n !== void 0 && (r.url = n), a !== void 0 && (r.icon = a), o !== void 0 && (r.svgIcon = o), l !== void 0 && (r.disabled = l), d !== void 0 && (r.cssClass = d), u !== void 0 && (r.cssStyle = u), p !== void 0 && (r.render = p), h !== void 0 && (r.linkRender = h), m !== void 0 && (r.contentRender = m), f !== void 0 && (r.data = f), b !== void 0 && (r.separator = b), r;
}
function wl(e) {
  return s.Children.toArray(e).filter((t) => t && t.type === Vb);
}
function dh(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r], n = ch(void 0, i), a = dh(wl(i.props.children));
    a.length > 0 && (n.items = a), t.push(n);
  }
  return t;
}
function $l(e, t) {
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const n = e[i], a = ch(n);
    a.id = ss(i.toString(), t), a.isLastFromSiblings = i === e.length - 1, a.separator = n.separator === !0, a.items = Wb(n, a), r.push(a);
  }
  return r;
}
function Wb(e, t) {
  return e.contentRender ? [
    {
      contentParentItemId: t.id,
      id: ss(os, t.id),
      isLastFromSiblings: !0,
      separator: !1,
      contentRender: e.contentRender,
      items: []
    }
  ] : e.items ? $l(e.items, t.id) : [];
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ub = /\S/;
function Hd(e, t, r, i, n, a) {
  const o = T();
  switch (r) {
    case z.left:
      return l();
    case z.right:
      return d();
    case z.up:
      return p();
    case z.down:
      return u();
    case z.enter:
    case z.space:
      return h();
    case z.home:
      return m();
    case z.end:
      return f();
    case z.esc:
      return b();
    default:
      return O() ? x() : t;
  }
  function l() {
    return n ? a ? C() : y() : a ? E() : w();
  }
  function d() {
    return n ? a ? y() : C() : a ? w() : E();
  }
  function u() {
    return n ? H() : Lr(t) ? R() : H();
  }
  function p() {
    return n ? W() : Lr(t) ? N() : W();
  }
  function h() {
    return o.disabled ? t : k() ? Ad(t) : Rn(t);
  }
  function m() {
    return K()[0].id;
  }
  function f() {
    const A = K();
    return A[A.length - 1].id;
  }
  function b() {
    return Lr(t) ? t : wn(t);
  }
  function x() {
    const A = i.toLowerCase(), L = K(), J = Number(yl(t)), D = L.slice(J + 1).concat(L.slice(0, J + 1)).find((F) => (F.text || "").toLowerCase().startsWith(A));
    return D ? D.id : t;
  }
  function w() {
    return Lr(t) ? W() : zb(t) ? R(W(Rn(t))) : wn(t);
  }
  function y() {
    return Lr(t) ? N() : wn(t);
  }
  function E() {
    return Lr(t) ? H() : R(
      k() ? t : H(Rn(t))
    );
  }
  function C() {
    return R(
      Lr(t) || k() ? t : H(Rn(t))
    );
  }
  function R(A) {
    return _(!0, A);
  }
  function N(A) {
    return _(!1, A);
  }
  function O() {
    return i.length === 1 && Ub.test(i);
  }
  function T(A, L) {
    return A === void 0 && (A = t), L === void 0 && (L = e), Tn(A, L);
  }
  function k(A) {
    return T(A).items.length > 0;
  }
  function W(A) {
    return X(!1, A);
  }
  function H(A) {
    return X(!0, A);
  }
  function Y(A) {
    const L = T(A).items;
    return L[L.length - 1].id;
  }
  function K() {
    return Lr(t) ? e : T(wn(t), e).items;
  }
  function _(A, L) {
    L === void 0 && (L = t);
    const J = T(L);
    return k(L) && !J.disabled ? A ? Ad(L) : Y(L) : L;
  }
  function X(A, L) {
    if (L === void 0 && (L = t), Lr(L))
      return zd(A, L, e.length);
    const J = wn(L), D = yl(L), F = T(J).items.length;
    return ss(zd(A, D, F), J);
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function _b(e) {
  return e.hoverOpenDelay !== void 0 ? e.hoverOpenDelay : e.openOnClick ? 0 : 100;
}
function qb(e) {
  return e.hoverCloseDelay !== void 0 ? e.hoverCloseDelay : 100;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yb = {
  vertical: "top",
  horizontal: "left"
}, Kb = {
  vertical: "top",
  horizontal: "left"
}, Xb = {
  vertical: "top",
  horizontal: "right"
}, Gb = {
  vertical: "top",
  horizontal: "right"
}, uh = {
  vertical: "flip",
  horizontal: "fit"
}, ph = {
  vertical: "fit",
  horizontal: "flip"
}, Bd = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "right"
    },
    popupAlign: Xb,
    collision: uh,
    animationDirection: "down"
  },
  leftward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "left"
    },
    popupAlign: Gb,
    collision: ph,
    animationDirection: "left"
  }
}, Vd = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "left"
    },
    popupAlign: Yb,
    collision: uh,
    animationDirection: "down"
  },
  rightward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "right"
    },
    popupAlign: Kb,
    collision: ph,
    animationDirection: "right"
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Zb(e, t, r) {
  const i = hh(e, t, r);
  return r ? i === "downward" ? Bd.downward : Bd.leftward : i === "downward" ? Vd.downward : Vd.rightward;
}
function hh(e, t, r) {
  return Lr(e) ? t ? r ? "leftward" : "rightward" : "downward" : r ? "leftward" : "rightward";
}
function jd(e) {
  return e ? "rtl" : "ltr";
}
function fh(e, t) {
  return `${e}_${t}`;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const mh = class extends s.Component {
  /**
   * @hidden
   */
  render() {
    return this.props.url ? /* @__PURE__ */ s.createElement("a", { className: this.getMenuItemClassName(), role: "presentation", href: this.props.url, tabIndex: -1 }, this.props.children) : /* @__PURE__ */ s.createElement(
      "span",
      {
        id: this.props.id,
        className: M(this.getMenuItemClassName(), this.props.className),
        style: this.props.style,
        role: "presentation"
      },
      this.props.children
    );
  }
  getMenuItemClassName() {
    return M("k-link", "k-menu-link", {
      "k-active": this.props.opened
    });
  }
};
mh.propTypes = {
  opened: c.bool,
  url: c.string
};
let Qb = mh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Jb = "caret-alt-down", ey = "caret-alt-right", ty = "caret-alt-left", gh = class extends s.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ s.createElement(Li, { "aria-hidden": !0, ...this.getIcon() });
  }
  getIcon() {
    switch (hh(
      this.props.itemId,
      this.props.verticalMenu === !0,
      this.props.dir === "rtl"
    )) {
      case "downward":
        return { name: Jb, icon: La };
      case "rightward":
        return { name: ey, icon: gl };
      case "leftward":
        return { name: ty, icon: vl };
      default:
        return {};
    }
  }
};
gh.propTypes = {
  itemId: c.string,
  dir: c.string,
  verticalMenu: c.bool
};
let ry = gh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let vh = class extends s.Component {
  constructor() {
    super(...arguments), this.onMouseOver = (t) => {
      this.props.onMouseOver(this.props.parentItemId), t.stopPropagation();
    }, this.onMouseLeave = (t) => {
      this.props.onMouseLeave(this.props.parentItemId), t.stopPropagation();
    };
  }
  render() {
    const t = this.props.parentItemId;
    return /* @__PURE__ */ s.createElement(
      "ul",
      {
        className: this.props.className,
        role: this.props.role ? this.props.role : t !== void 0 ? "menu" : "menubar",
        id: t !== void 0 ? fh(this.props.menuGuid, t) : void 0,
        onMouseOver: t !== void 0 ? this.onMouseOver : void 0,
        onMouseLeave: t !== void 0 ? this.onMouseLeave : void 0,
        "aria-orientation": this.props["aria-orientation"]
      },
      this.renderChildItems()
    );
  }
  renderChildItems() {
    return this.props.items.length > 0 ? this.props.items.map((t, r) => /* @__PURE__ */ s.createElement(
      iy,
      {
        item: t,
        animate: this.props.animate,
        isMenuVertical: this.props.isMenuVertical,
        isDirectionRightToLeft: this.props.isDirectionRightToLeft,
        focusedItemId: this.props.focusedItemId,
        lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
        tabbableItemId: this.props.tabbableItemId,
        itemRender: this.props.itemRender,
        linkRender: this.props.linkRender,
        menuGuid: this.props.menuGuid,
        onMouseOver: this.props.onMouseOver,
        onMouseLeave: this.props.onMouseLeave,
        onMouseDown: this.props.onMouseDown,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        onClick: this.props.onClick,
        onOriginalItemNeeded: this.props.onOriginalItemNeeded,
        key: r
      }
    )) : null;
  }
}, iy = class extends s.Component {
  constructor(t) {
    super(t), this.isFirstRender = !0, this.onMouseOver = (r) => {
      this.props.onMouseOver(this.props.item.id), r.stopPropagation();
    }, this.onMouseLeave = (r) => {
      this.props.onMouseLeave(this.props.item.id), r.stopPropagation();
    }, this.state = { opened: !1 };
  }
  componentDidMount() {
    const t = this.props.focusedItemId, r = this.props.item.id;
    t && t === r && this.itemElement.focus({ preventScroll: !0 }), this.isFirstRender = !1;
  }
  componentDidUpdate(t) {
    const r = this.props.focusedItemId, i = this.props.item.id;
    if (r) {
      const n = ti(document);
      t.focusedItemId !== r && r === i && // https://github.com/telerik/kendo-react/issues/216 :
      // No need to focus the wrapping menu item DOM element
      // when a child DOM element was clicked.
      !this.itemElement.contains(n) && this.itemElement.focus({ preventScroll: !0 });
    }
  }
  render() {
    const t = this.props.item, r = t.id, i = fh(this.props.menuGuid, r), n = t.separator;
    return /* @__PURE__ */ s.createElement(s.Fragment, null, n ? /* @__PURE__ */ s.createElement(
      "li",
      {
        className: "k-separator k-item",
        "aria-hidden": !0,
        key: i,
        id: i,
        ref: (a) => {
          this.itemElement = a;
        }
      }
    ) : /* @__PURE__ */ s.createElement(
      "li",
      {
        id: i,
        className: this.getMenuItemClassName(t),
        style: t.cssStyle,
        tabIndex: r === this.props.tabbableItemId ? 0 : -1,
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: (a) => this.props.onMouseDown(a),
        onBlur: (a) => this.props.onBlur(r, a),
        onFocus: () => this.props.onFocus(r),
        onClick: (a) => this.props.onClick(a, r),
        role: "menuitem",
        "aria-disabled": t.disabled ? !0 : void 0,
        "aria-haspopup": t.items.length > 0 ? !0 : void 0,
        "aria-expanded": t.items.length > 0 ? this.Opened : void 0,
        "aria-label": t.text,
        "aria-owns": this.Opened ? i : void 0,
        ref: (a) => {
          this.itemElement = a;
        },
        key: i
      },
      this.contentRender ? this.renderContent() : this.renderMenuItemLink()
    ), this.renderPopupIfOpened());
  }
  renderContent() {
    const t = this.props.item.contentParentItemId;
    return /* @__PURE__ */ s.createElement("div", { className: "k-content", role: "presentation" }, /* @__PURE__ */ s.createElement(this.contentRender, { item: this.props.onOriginalItemNeeded(t), itemId: t }));
  }
  renderMenuItemLink() {
    const t = this.props.item;
    if (this.linkRender)
      return /* @__PURE__ */ s.createElement(
        this.linkRender,
        {
          item: this.props.onOriginalItemNeeded(t.id),
          itemId: t.id,
          opened: this.Opened,
          dir: jd(this.props.isDirectionRightToLeft)
        }
      );
    const r = this.itemRender ? /* @__PURE__ */ s.createElement(this.itemRender, { item: this.props.onOriginalItemNeeded(t.id), itemId: t.id, key: "1" }) : /* @__PURE__ */ s.createElement("span", { className: "k-menu-link-text" }, t.text);
    return /* @__PURE__ */ s.createElement(Qb, { url: t.url, opened: this.Opened }, this.renderMenuIconIfApplicable(), r, this.renderArrowIfApplicable());
  }
  renderPopupIfOpened() {
    const t = this.props.item.id, r = this.props.animate, { anchorAlign: i, popupAlign: n, collision: a, animationDirection: o } = Zb(
      t,
      this.props.isMenuVertical,
      this.props.isDirectionRightToLeft
    ), l = r === !0 ? { openDuration: 300, closeDuration: 300, direction: o } : r === !1 ? !1 : {
      openDuration: r?.openDuration || 300,
      closeDuration: r?.closeDuration || 300,
      direction: r?.direction || o
    };
    return /* @__PURE__ */ s.createElement(
      Pi,
      {
        anchor: this.itemElement,
        show: this.Opened,
        popupClass: this.getPopupClassName(),
        anchorAlign: i,
        popupAlign: n,
        collision: a,
        animate: l,
        key: "1"
      },
      /* @__PURE__ */ s.createElement(
        vh,
        {
          parentItemId: t,
          animate: this.props.animate,
          items: this.props.item.items,
          menuGuid: this.props.menuGuid,
          focusedItemId: this.props.focusedItemId,
          lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
          tabbableItemId: this.props.tabbableItemId,
          itemRender: this.props.itemRender,
          linkRender: this.props.linkRender,
          isMenuVertical: this.props.isMenuVertical,
          isDirectionRightToLeft: this.props.isDirectionRightToLeft,
          className: "k-group k-menu-group k-reset k-menu-group-md",
          onMouseOver: this.props.onMouseOver,
          onMouseLeave: this.props.onMouseLeave,
          onMouseDown: this.props.onMouseDown,
          onBlur: this.props.onBlur,
          onFocus: this.props.onFocus,
          onClick: this.props.onClick,
          onOriginalItemNeeded: this.props.onOriginalItemNeeded
        }
      )
    );
  }
  renderMenuIconIfApplicable() {
    const { icon: t, svgIcon: r } = this.props.item;
    return t || r ? /* @__PURE__ */ s.createElement(Li, { name: t, icon: r, key: "0" }) : null;
  }
  renderArrowIfApplicable() {
    return this.props.item.items.length > 0 ? /* @__PURE__ */ s.createElement("span", { className: "k-menu-expand-arrow", "aria-hidden": !0 }, /* @__PURE__ */ s.createElement(
      ry,
      {
        itemId: this.props.item.id,
        verticalMenu: this.props.isMenuVertical,
        dir: jd(this.props.isDirectionRightToLeft),
        key: "2"
      }
    )) : null;
  }
  get itemRender() {
    return this.props.item.render || this.props.itemRender;
  }
  get linkRender() {
    return this.props.item.linkRender || this.props.linkRender;
  }
  get contentRender() {
    return this.props.item.contentParentItemId ? this.props.item.contentRender : null;
  }
  get Opened() {
    const t = this.props;
    return t.item.items.length > 0 && Ab(t.item.id, t.lastItemIdToBeOpened) && // HACK: Wait for the second render because otherwise the scenario of
    // popup inside popup throws an error (for example, hover of item with id '0_0').
    !this.isFirstRender;
  }
  getPopupClassName() {
    return M("k-menu-popup", { "k-rtl": this.props.isDirectionRightToLeft });
  }
  getMenuItemClassName(t) {
    return M(
      "k-item",
      "k-menu-item",
      {
        "k-first": Hb(t.id),
        "k-last": t.isLastFromSiblings,
        "k-disabled": t.disabled
      },
      t.cssClass
    );
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let ny = class {
  constructor() {
    this.phase = "Initialized";
  }
  getIsDirectionRightToLeft() {
    return this.isDirectionRightToLeft;
  }
  setIsDirectionRightToLeft(t) {
    this.phase = this.phase === "NotInitialized" ? "Initialized" : "NewValueReceived", this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft, this.isDirectionRightToLeft = t;
  }
  hasDirectionChanged() {
    return this.phase === "NewValueReceived" ? this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : !1;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let ay = class {
  constructor(t, r, i) {
    this.openOnClick = t, this.resetMenu = r, this.openItem = i, this.mouseDown = !1, this.openOnClick = t, this.isMouseOverEnabled = !t;
  }
  set OpenOnClick(t) {
    !!t != !!this.openOnClick && (this.mouseDown = !1, this.isMouseOverEnabled = !t), this.openOnClick = t;
  }
  handleItemSelectedViaKeyboard() {
    this.openOnClick && (this.isMouseOverEnabled = !1, this.resetMenu());
  }
  get IsMouseOverEnabled() {
    return this.isMouseOverEnabled;
  }
  handleItemMouseDown() {
    this.mouseDown = !0;
  }
  handleItemFocus() {
    this.openOnClick && !this.mouseDown && (this.isMouseOverEnabled = !0), this.mouseDown = !1;
  }
  handleItemClick(t, r) {
    this.openOnClick && (this.isMouseOverEnabled ? r && (this.isMouseOverEnabled = !1, this.resetMenu()) : (this.isMouseOverEnabled = !0, this.openItem(t)));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Wd = {
  focusedItemId: Mr,
  hoveredItemId: Mr,
  tabbableItemId: os
}, kl = class xh extends s.Component {
  constructor(t) {
    super(t), this.menuWrapperEl = null, this.directionHolder = new ny(), this.inputItems = [], this.items = [], this.reset = () => {
      this.clearItemHoverAndLeaveRequestsIfApplicable(), this.setState(Wd);
    }, this.onKeyDown = (r) => {
      if (this.state.focusedItemId !== Mr) {
        const i = Tn(this.state.focusedItemId, this.items);
        let n = Hd(
          this.items,
          i.id,
          r.keyCode,
          r.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        );
        const a = Tn(n, this.items);
        a && a.separator && (n = Hd(
          this.items,
          n,
          r.keyCode,
          r.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        )), i.id !== n && (r.preventDefault(), this.setFocusedItemId(n)), (r.keyCode === z.enter || r.keyCode === z.space) && !i.disabled && (this.mouseOverHandler.handleItemSelectedViaKeyboard(), this.dispatchSelectEventIfWired(r, i.id), !r.isDefaultPrevented() && i.items.length === 0 && i.url && window.location.assign(i.url));
      }
      r.keyCode === z.esc && this.props.onClose && this.props.onClose.call(void 0, r);
    }, this.onItemMouseOver = (r) => {
      this.mouseOverHandler.IsMouseOverEnabled && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemHoverRequest = window.setTimeout(() => {
        this.setHoveredItemId(r), this.itemHoverRequest = null;
      }, _b(this.props)));
    }, this.onItemMouseLeave = (r) => {
      this.mouseOverHandler.IsMouseOverEnabled && this.isItemWithDefaultClose(r) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemLeaveRequest = window.setTimeout(() => {
        this.setHoveredItemId(Mr), this.itemLeaveRequest = null;
      }, qb(this.props)));
    }, this.onItemMouseDown = () => {
      this.mouseOverHandler.handleItemMouseDown();
    }, this.onItemFocus = (r) => {
      this.setFocusedItemId(r), this.mouseOverHandler.handleItemFocus();
    }, this.onItemClick = (r, i) => {
      const n = Tn(i, this.items);
      n.disabled || (this.setFocusedItemId(i), this.mouseOverHandler.handleItemClick(i, this.isItemWithDefaultClose(i)), this.dispatchSelectEventIfWired(r, i), !r.isDefaultPrevented() && n.url && window.location.assign(n.url));
    }, this.onItemBlur = (r, i) => {
      if (this.isItemWithDefaultClose(r) && this.setFocusedItemId(Mr), i.relatedTarget && i.relatedTarget.nodeName === "LI") {
        const n = i.relatedTarget.getAttribute("id");
        if (n && n.includes(this.menuItemId))
          return;
      }
      this.props.onClose && this.props.onClose.call(void 0, i);
    }, this.getInputItem = (r) => Tn(r, this.inputItems), this.mouseOverHandler = new ay(this.props.openOnClick, this.reset, this.onItemMouseOver), this.state = Object.assign({}, Wd, { isFirstRender: !0 });
  }
  get menuItemId() {
    return this.props.id;
  }
  get element() {
    return this.menuWrapperEl;
  }
  get animate() {
    return this.props.animate !== void 0 ? this.props.animate : xh.defaultProps.animate;
  }
  /**
   * @hidden
   */
  render() {
    this.prepareItems(), this.state.isFirstRender || this.directionHolder.setIsDirectionRightToLeft(this.checkIsDirectionRightToLeft());
    const t = this.state.hoveredItemId ? this.state.hoveredItemId : this.state.focusedItemId ? wn(this.state.focusedItemId) : Mr;
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        id: this.props.id,
        onKeyDown: this.onKeyDown,
        style: this.props.style,
        className: this.directionHolder.getIsDirectionRightToLeft() ? "k-rtl" : void 0,
        ref: (r) => {
          this.menuWrapperEl = r;
        }
      },
      /* @__PURE__ */ s.createElement(
        vh,
        {
          className: this.getMenuClassName(),
          "aria-orientation": this.props.vertical ? "vertical" : void 0,
          items: this.items,
          animate: this.animate,
          isMenuVertical: this.props.vertical,
          isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(),
          focusedItemId: this.state.focusedItemId,
          lastItemIdToBeOpened: t,
          tabbableItemId: this.state.tabbableItemId,
          itemRender: this.props.itemRender,
          linkRender: this.props.linkRender,
          menuGuid: this.menuItemId,
          onMouseLeave: this.onItemMouseLeave,
          onMouseOver: this.onItemMouseOver,
          onMouseDown: this.onItemMouseDown,
          onFocus: this.onItemFocus,
          onClick: this.onItemClick,
          onBlur: this.onItemBlur,
          onOriginalItemNeeded: this.getInputItem,
          role: this.props.role
        }
      )
    );
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setState({ isFirstRender: !1 });
  }
  /**
   * @hidden
   */
  componentDidUpdate(t) {
    (!!t.vertical != !!this.props.vertical || this.directionHolder.hasDirectionChanged()) && this.reset(), this.mouseOverHandler.OpenOnClick = this.props.openOnClick;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.clearItemHoverAndLeaveRequestsIfApplicable();
  }
  setFocusedItemId(t) {
    this.setState((r) => {
      const i = t === Mr ? r.tabbableItemId : Rn(t);
      return { hoveredItemId: t === Mr || On(r.hoveredItemId) && On(t) ? r.hoveredItemId : Mr, focusedItemId: t, tabbableItemId: i };
    });
  }
  setHoveredItemId(t) {
    this.setState((r) => On(t) && On(r.focusedItemId) ? {
      hoveredItemId: t,
      focusedItemId: r.focusedItemId,
      tabbableItemId: r.tabbableItemId
    } : { hoveredItemId: t, focusedItemId: Mr, tabbableItemId: os });
  }
  getMenuClassName() {
    return M(
      "k-reset",
      "k-header",
      "k-menu",
      { "k-menu-horizontal": !this.props.vertical },
      { "k-menu-vertical": this.props.vertical },
      this.props.className
    );
  }
  clearItemHoverAndLeaveRequestsIfApplicable() {
    this.itemHoverRequest && (clearTimeout(this.itemHoverRequest), this.itemHoverRequest = null), this.itemLeaveRequest && (clearTimeout(this.itemLeaveRequest), this.itemLeaveRequest = null);
  }
  isItemWithDefaultClose(t) {
    return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(t) === -1;
  }
  checkIsDirectionRightToLeft() {
    return !!(this.props.dir !== void 0 ? this.props.dir === "rtl" : this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === "rtl");
  }
  prepareItems() {
    const { items: t, inputItems: r } = jb(this.props.items, this.props.children);
    this.items = t, this.inputItems = r;
  }
  dispatchSelectEventIfWired(t, r) {
    Bt(this.props.onSelect, t, this, { item: this.getInputItem(r), itemId: r });
  }
};
kl.propTypes = {
  vertical: c.bool,
  items: c.arrayOf(c.object),
  style: c.object,
  animate: c.oneOfType([
    c.bool,
    c.shape({
      openDuration: c.number,
      closeDuration: c.number
    })
  ]),
  dir: c.string,
  hoverOpenDelay: c.number,
  hoverCloseDelay: c.number,
  openOnClick: c.bool,
  itemRender: c.any,
  linkRender: c.any,
  customCloseItemIds: c.arrayOf(c.string),
  onSelect: c.func,
  role: c.string
}, kl.defaultProps = { vertical: !1, animate: !0 };
let oy = kl;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const bh = class extends s.Component {
  constructor() {
    super(...arguments), this.itemRef = null, this.focus = () => {
      this.itemRef && this.itemRef.focus();
    }, this.blur = () => {
      this.itemRef && this.itemRef.blur();
    }, this.onClick = () => {
      this.props.onSelect && this.props.onSelect(this.props.index), this.itemRef && (this.itemRef.tabIndex = 0, this.itemRef.focus());
    };
  }
  /**
   * @hidden
   */
  render() {
    const { id: t, active: r, disabled: i, title: n = "Untitled", index: a, renderAllContent: o, first: l, last: d } = this.props, u = o ? `${this.props.contentPanelId}-${a.toString()}` : this.props.contentPanelId, p = {
      id: `${t}-${a.toString()}`,
      "aria-selected": r,
      "aria-controls": r ? u : void 0,
      "aria-disabled": i,
      role: "tab",
      onClick: i ? void 0 : this.onClick
    }, h = M("k-item", "k-tabstrip-item", {
      "k-disabled": i,
      "k-active": r,
      "k-first": l,
      "k-last": d
    });
    return /* @__PURE__ */ s.createElement(
      "li",
      {
        ...p,
        className: h,
        ref: (m) => {
          this.itemRef = m;
        },
        onBlur: this.blur,
        "aria-controls": u
      },
      /* @__PURE__ */ s.createElement("span", { className: "k-link" }, n)
    );
  }
};
bh.propTypes = {
  active: c.bool,
  disabled: c.bool,
  index: c.number,
  onSelect: c.func,
  title: c.oneOfType([c.string, c.element]),
  first: c.bool,
  last: c.bool
};
let sy = bh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Cl = "prevArrow.title", Sl = "nextArrow.title", Ud = {
  [Cl]: "Previous tab arrow",
  [Sl]: "Next tab arrow"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ly = (e) => Array.apply(null, Array(e)), ea = "smooth", $i = "prev", fn = "next", yh = class extends s.Component {
  constructor() {
    super(...arguments), this.itemsNavRef = this.props.itemsNavRef || s.createRef(), this.onScroll = () => {
      var t, r;
      (r = (t = this.props).onScroll) == null || r.call(t);
    }, this.isRtl = () => this.props.dir === "rtl", this.arrowClickPrev = (t) => {
      this.handleArrowClick($i, t);
    }, this.arrowClickNext = (t) => {
      this.handleArrowClick(fn, t);
    }, this.handleArrowClick = (t, r) => {
      this.setNewScrollPosition(t, r);
    }, this.setNewScrollPosition = (t, r) => {
      const i = this.itemsNavRef.current;
      if (!i)
        return;
      const n = this.horizontalScroll(), a = n ? i.scrollWidth - i.offsetWidth : i.scrollHeight - i.offsetHeight, o = (r.type === "click" ? this.props.buttonScrollSpeed : this.props.mouseScrollSpeed) || 0;
      let l = n ? i.scrollLeft : i.scrollTop;
      this.isRtl() && this.horizontalScroll() ? (t === $i && l < 0 && (l += o), t === fn && l < a && (l -= o), l = Math.min(0, Math.min(a, l))) : (t === $i && l > 0 && (l -= o), t === fn && l < a && (l += o), l = Math.max(0, Math.min(a, l)));
      const d = r.type === "click" ? ea : void 0;
      n ? i.scrollTo({ left: l, behavior: d }) : i.scrollTo({ top: l, behavior: d });
    }, this.renderArrow = (t) => {
      const r = this.horizontalScroll(), i = jp(this), n = {
        prev: {
          arrowTab: "k-tabstrip-prev",
          fontIcon: r ? this.isRtl() ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up",
          svgIcon: r ? this.isRtl() ? gl : vl : Up,
          title: i.toLanguageString(Cl, Ud[Cl])
        },
        next: {
          arrowTab: "k-tabstrip-next",
          fontIcon: r ? this.isRtl() ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down",
          svgIcon: r ? this.isRtl() ? vl : gl : La,
          title: i.toLanguageString(Sl, Ud[Sl])
        }
      }, a = (t === $i ? this.props.prevButton : this.props.nextButton) || Ct, o = t === $i ? this.arrowClickPrev : this.arrowClickNext, l = this.props.containerScrollPosition === null || t === $i && (this.props.containerScrollPosition === "start" || this.props.containerScrollPosition === "top") || t === fn && (this.props.containerScrollPosition === "end" || this.props.containerScrollPosition === "bottom");
      return /* @__PURE__ */ s.createElement(
        a,
        {
          disabled: l,
          className: M(`${n[t].arrowTab}`),
          onClick: o,
          icon: n[t].fontIcon,
          svgIcon: n[t].svgIcon,
          size: this.props.size,
          tabIndex: -1,
          fillMode: "flat",
          title: n[t].title
        }
      );
    };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.props.scrollable && this.scrollToSelected();
  }
  /**
   * @hidden
   */
  componentDidUpdate(t) {
    const { scrollable: r, selected: i } = this.props;
    r && t.selected !== i && this.scrollToSelected();
  }
  /**
   * @hidden
   */
  render() {
    const {
      selected: t,
      tabPosition: r,
      tabAlignment: i,
      children: n,
      onSelect: a,
      onKeyDown: o,
      navItemId: l,
      contentPanelId: d,
      renderAllContent: u,
      scrollable: p,
      scrollButtons: h,
      scrollButtonsPosition: m
    } = this.props, f = s.Children.count(n), b = s.Children.toArray(n);
    let x;
    n && (x = ly(f).map((E, C, R) => {
      const N = {
        active: t === C,
        disabled: b[C].props.disabled,
        index: C,
        title: b[C].props.title,
        first: C === 0,
        last: C === R.length - 1,
        contentPanelId: d,
        renderAllContent: u,
        id: l,
        onSelect: a,
        onScroll: this.onScroll
      };
      return /* @__PURE__ */ s.createElement(sy, { key: C, ...N });
    }));
    const w = M("k-tabstrip-items-wrapper k-tabstrip-items-wrapper-scroll", {
      "k-hstack": r === "top" || r === "bottom",
      "k-vstack": r === "left" || r === "right"
    }), y = M(
      "k-tabstrip-items k-tabstrip-items-scroll k-reset",
      `k-tabstrip-items-${i}`
    );
    return /* @__PURE__ */ s.createElement("div", { className: w }, p ? /* @__PURE__ */ s.createElement(s.Fragment, null, h !== "hidden" && m && ["split", "start", "around", "before"].includes(m) && this.renderArrow($i), h !== "hidden" && (m === "start" || m === "before") && this.renderArrow(fn), /* @__PURE__ */ s.createElement(
      "ul",
      {
        ref: this.itemsNavRef,
        className: y,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: o,
        onScroll: this.onScroll,
        "aria-orientation": r === "left" || r === "right" ? "vertical" : void 0
      },
      x
    ), h !== "hidden" && (m === "end" || m === "after") && this.renderArrow($i), h !== "hidden" && m && ["split", "end", "around", "after"].includes(m) && this.renderArrow(fn)) : /* @__PURE__ */ s.createElement("ul", { className: y, role: "tablist", tabIndex: this.props.tabIndex, onKeyDown: o }, x));
  }
  scrollToSelected() {
    const t = this.itemsNavRef.current, r = t && t.children[this.props.selected || 0];
    if (r instanceof HTMLElement && t instanceof HTMLElement) {
      const i = this.horizontalScroll(), n = i ? t.offsetWidth : t.offsetHeight, a = i ? r.offsetWidth : r.offsetHeight, o = i ? "left" : "top";
      let l = i ? t.scrollLeft : t.scrollTop, d = 0;
      if (this.isRtl()) {
        const u = r.offsetLeft;
        l = l * -1, u < 0 ? (d = u - a + t.offsetLeft, t.scrollTo({ [o]: d, behavior: ea })) : u + a > n - l && (d = l + u - a, t.scrollTo({ [o]: d, behavior: ea }));
      } else {
        const u = i ? r.offsetLeft - t.offsetLeft : r.offsetTop - t.offsetTop;
        l + n < u + a ? (d = u + a - n, t.scrollTo({ [o]: d, behavior: ea })) : l > u && (d = u, t.scrollTo({ [o]: d, behavior: ea }));
      }
    }
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
};
yh.propTypes = {
  children: c.oneOfType([c.element, c.arrayOf(c.element)]),
  onSelect: c.func,
  onKeyDown: c.func,
  onScroll: c.func,
  selected: c.number,
  tabIndex: c.number,
  scrollable: c.bool,
  size: c.oneOf(["small", "medium", "large"]),
  scrollButtons: c.oneOf(["auto", "visible", "hidden"]),
  scrollButtonsPosition: c.oneOf(["split", "start", "end", "around", "before", "after"]),
  containerScrollPosition: c.oneOf(["start", "end", "top", "bottom", "middle", null])
};
let _d = yh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Hc = s.forwardRef(
  (e, t) => {
    const r = s.useRef(null), {
      mountOnEnter: i = Er.mountOnEnter,
      unmountOnExit: n = Er.unmountOnExit,
      onEnter: a = Er.onEnter,
      onEntering: o = Er.onEntering,
      onEntered: l = Er.onEntered,
      onExit: d = Er.onExit,
      onExiting: u = Er.onExiting,
      onExited: p = Er.onExited,
      onAfterExited: h = Er.onAfterExited,
      animationEnteringStyle: m = Er.animationEnteringStyle,
      animationEnteredStyle: f = Er.animationEnteredStyle,
      animationExitingStyle: b = Er.animationExitingStyle,
      animationExitedStyle: x = Er.animationExitedStyle,
      children: w,
      style: y,
      appear: E,
      enter: C,
      exit: R,
      transitionName: N,
      transitionEnterDuration: O,
      transitionExitDuration: T,
      className: k,
      unstyled: W,
      ...H
    } = e, Y = {
      transitionDelay: "0ms",
      ...y
    }, K = W && W.uAnimation, _ = M(k, Si.childContainer({ c: K })), X = s.useRef({
      element: r.current,
      props: e
    }), A = s.useRef(null);
    s.useImperativeHandle(A, () => ({
      element: r.current,
      props: e
    })), s.useImperativeHandle(
      t,
      () => A.current,
      []
    );
    const L = {
      entering: { transitionDuration: `${O}ms`, ...m },
      entered: { ...f },
      exiting: { transitionDuration: `${T}ms`, ...b },
      exited: { ...x }
    }, J = {
      in: e.in,
      appear: E,
      enter: C,
      exit: R,
      mountOnEnter: i,
      unmountOnExit: n,
      timeout: {
        enter: O,
        exit: T
      },
      onEnter: () => {
        a && a.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      onEntering: () => {
        o && o.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      onEntered: () => {
        l && l.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      onExit: () => {
        d && d.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      onExiting: () => {
        u && u.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      onExited: () => {
        h && h.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        }), p && p.call(void 0, {
          animatedElement: r.current,
          target: A.current || X.current
        });
      },
      classNames: {
        appear: M(Si.appear({ c: K, transitionName: N })),
        appearActive: M(Si.appearActive({ c: K, transitionName: N })),
        enter: M(Si.enter({ c: K, transitionName: N })),
        enterActive: M(Si.enterActive({ c: K, transitionName: N })),
        exit: M(Si.exit({ c: K, transitionName: N })),
        exitActive: M(Si.exitActive({ c: K, transitionName: N }))
      }
    };
    return /* @__PURE__ */ s.createElement(Of, { ...J, ...H, nodeRef: r }, (D) => /* @__PURE__ */ s.createElement(
      "div",
      {
        style: {
          ...Y,
          ...L[D]
        },
        className: _,
        ref: (F) => {
          r.current = F, X.current.element = F;
        }
      },
      w
    ));
  }
), Er = {
  mountOnEnter: !0,
  unmountOnExit: !1,
  onEnter: Vt,
  onEntering: Vt,
  onEntered: Vt,
  onExit: Vt,
  onExiting: Vt,
  onExited: Vt,
  onAfterExited: Vt,
  animationEnteringStyle: {},
  animationEnteredStyle: {},
  animationExitingStyle: {},
  animationExitedStyle: {}
};
Hc.displayName = "KendoReactAnimationChild";
Hc.propTypes = {
  in: c.bool,
  children: c.oneOfType([c.arrayOf(c.node), c.node]),
  transitionName: c.string.isRequired,
  className: c.string,
  appear: c.bool,
  enter: c.bool,
  exit: c.bool,
  transitionEnterDuration: c.number.isRequired,
  transitionExitDuration: c.number.isRequired,
  mountOnEnter: c.bool,
  unmountOnExit: c.bool,
  animationEnteringStyle: c.object,
  animationEnteredStyle: c.object,
  animationExitingStyle: c.object,
  animationExitedStyle: c.object
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Bc = (e) => {
  const {
    id: t,
    style: r,
    children: i,
    component: n = "div",
    className: a,
    childFactory: o,
    stackChildren: l,
    componentChildStyle: d,
    componentChildClassName: u,
    ...p
  } = e, h = Ut(), m = e.unstyled || h, f = m && m.uAnimation, b = {
    id: t,
    style: r,
    component: n,
    childFactory: o,
    className: M(Si.child({ c: f }), a)
  }, x = s.Children.map(i || null, (w) => /* @__PURE__ */ s.createElement(Hc, { ...p, unstyled: m, style: d, className: u }, w));
  return /* @__PURE__ */ s.createElement(Nf, { ...b }, x);
};
Bc.propTypes = {
  children: c.oneOfType([c.arrayOf(c.node), c.node]),
  childFactory: c.any,
  className: c.string,
  component: c.node,
  id: c.string,
  style: c.any,
  transitionName: c.string.isRequired,
  appear: c.bool.isRequired,
  enter: c.bool.isRequired,
  exit: c.bool.isRequired,
  transitionEnterDuration: c.number.isRequired,
  transitionExitDuration: c.number.isRequired
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const El = (e) => {
  const {
    appear: t = ta.appear,
    enter: r = ta.enter,
    exit: i = ta.exit,
    transitionEnterDuration: n = ta.transitionEnterDuration,
    transitionExitDuration: a = ta.transitionExitDuration,
    children: o,
    ...l
  } = e, d = {
    transitionName: "fade"
  };
  return /* @__PURE__ */ s.createElement(
    Bc,
    {
      ...d,
      appear: t,
      enter: r,
      exit: i,
      transitionEnterDuration: n,
      transitionExitDuration: a,
      ...l
    },
    o
  );
}, ta = {
  appear: !1,
  enter: !0,
  exit: !1,
  transitionEnterDuration: 500,
  transitionExitDuration: 500
};
El.propTypes = {
  children: c.oneOfType([c.arrayOf(c.node), c.node]),
  childFactory: c.any,
  className: c.string,
  component: c.node,
  id: c.string,
  style: c.any
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const wh = class extends s.Component {
  constructor() {
    super(...arguments), this.contentId = this.props.contentPanelId, this.childFactory = (t) => s.cloneElement(t, {
      ...t.props,
      in: t.props.children.props.id === String(this.contentId + this.props.selected)
    });
  }
  /**
   * @hidden
   */
  render() {
    const { children: t, selected: r, contentPanelId: i, keepTabsMounted: n, navItemId: a, renderAllContent: o } = this.props, l = t && typeof r == "number" && s.Children.toArray(t)[r], d = M(
      "k-tabstrip-content",
      "k-active",
      l && l.props.contentClassName
    );
    return o ? this.renderAllContent(t) : /* @__PURE__ */ s.createElement(
      "div",
      {
        className: d,
        style: this.props.style,
        id: i,
        role: "tabpanel",
        "aria-hidden": n,
        "aria-labelledby": `${a}-${r?.toString() || ""}`,
        tabIndex: 0
      },
      this.renderContent(t)
    );
  }
  renderContent(t) {
    return this.props.keepTabsMounted ? s.Children.map(this.props.children, (r, i) => this.renderChild(r, i)) : this.renderChild(
      s.Children.toArray(t)[this.props.selected],
      this.props.selected
    );
  }
  renderAllContent(t) {
    return s.Children.map(t, (r, i) => {
      const n = r, a = i === this.props.selected, o = M(
        "k-tabstrip-content",
        { "k-active": a },
        n.props.contentClassName
      );
      return /* @__PURE__ */ s.createElement(
        "div",
        {
          className: o,
          style: this.props.style,
          id: `${this.props.contentPanelId}-${i}`,
          role: "tabpanel",
          "aria-hidden": !a,
          hidden: !a,
          "aria-labelledby": `${this.props.navItemId}-${i}`
        },
        this.props.animation ? /* @__PURE__ */ s.createElement(El, { key: `${i}-${a}`, appear: !0, enter: !0, exit: !1 }, n.props.children) : n.props.children
      );
    });
  }
  renderChild(t, r) {
    const i = r === this.props.selected, n = {
      style: {
        display: i ? void 0 : "none"
      }
    }, a = {
      position: "initial",
      display: i ? void 0 : "none"
    };
    return t.props.disabled ? null : this.props.animation ? /* @__PURE__ */ s.createElement(
      El,
      {
        appear: !0,
        exit: this.props.keepTabsMounted,
        style: a,
        childFactory: this.props.keepTabsMounted ? this.childFactory : void 0
      },
      /* @__PURE__ */ s.createElement("div", { ...n, id: String(this.contentId + r), key: r }, t.props.children)
    ) : /* @__PURE__ */ s.createElement("div", { ...n, key: r }, t.props.children);
  }
};
wh.propTypes = {
  animation: c.bool,
  children: c.oneOfType([c.element, c.arrayOf(c.element)]),
  selected: c.number,
  style: c.object
};
let cy = wh;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Dl = class extends s.Component {
  constructor(t) {
    super(t), this.tabStripRef = s.createRef(), this.itemsNavRef = s.createRef(), this.onScroll = () => {
      const r = this.horizontalScroll(), i = this.itemsNavRef.current;
      if (!i)
        return;
      const n = i.scrollLeft, a = i.clientWidth, o = i.scrollWidth, l = i.scrollTop, d = i.scrollHeight, u = i.clientHeight;
      let p = null;
      const h = r ? o > a : d > u, m = this.props.dir === "rtl";
      h ? r ? n + a === o || (m && a - n) === o ? p = "end" : n === 0 || m && -n === 0 ? p = "start" : n > 0 && n + a < o || -n > 0 && a - n < o ? p = "middle" : p = null : d - (l + u) === 0 ? p = "bottom" : l === 0 ? p = "top" : l > 0 && d - (l + u) > 0 ? p = "middle" : p = null : p = null, this.setState({ containerScrollPosition: p });
    }, this.onSelect = (r) => {
      this.props.selected !== r && this.props.onSelect && this.props.onSelect({
        selected: r
      });
    }, this.onKeyDown = (r) => {
      this.navigation && this.navigation.triggerKeyboardEvent(r);
    }, this.onKeyboardSelect = (r) => {
      const i = this.children();
      i && i[r].props.disabled || this.onSelect(r);
    }, this.renderContent = (r) => {
      const { selected: i, children: n, tabContentStyle: a } = r, o = s.Children.count(n);
      return i < o && i > -1 ? /* @__PURE__ */ s.createElement(cy, { index: i, ...r, style: a }) : null;
    }, this.state = {
      containerScrollPosition: null
    }, this.itemsNavRef = s.createRef();
  }
  get contentPanelId() {
    return this.props.id + "-content-panel-id";
  }
  get navItemId() {
    return this.props.id + "-nav-item-id";
  }
  /** @hidden */
  componentDidMount() {
    var t;
    const r = this.tabStripRef.current, i = r && getComputedStyle(r).direction === "rtl" || !1;
    r && (this.navigation = new up({
      tabIndex: 0,
      root: this.tabStripRef,
      rovingTabIndex: !0,
      focusClass: "k-focus",
      selectors: [".k-tabstrip .k-tabstrip-item"],
      keyboardEvents: {
        keydown: {
          ArrowLeft: (n, a, o) => {
            o.preventDefault();
            const l = a.elements.indexOf(n), d = l !== 0 ? l - 1 : a.elements.length - 1, u = l !== a.elements.length - 1 ? l + 1 : 0;
            i ? (a.focusNext(n), this.onKeyboardSelect(u)) : (a.focusPrevious(n), this.onKeyboardSelect(d));
          },
          ArrowRight: (n, a, o) => {
            o.preventDefault();
            const l = a.elements.indexOf(n), d = l !== 0 ? l - 1 : a.elements.length - 1, u = l !== a.elements.length - 1 ? l + 1 : 0;
            i ? (a.focusPrevious(n), this.onKeyboardSelect(d)) : (a.focusNext(n), this.onKeyboardSelect(u));
          },
          ArrowDown: (n, a, o) => {
            o.preventDefault();
            const l = a.elements.indexOf(n), d = l !== a.elements.length - 1 ? l + 1 : 0;
            a.focusNext(n), this.onKeyboardSelect(d);
          },
          ArrowUp: (n, a, o) => {
            o.preventDefault();
            const l = a.elements.indexOf(n), d = l !== 0 ? l - 1 : a.elements.length - 1;
            a.focusPrevious(n), this.onKeyboardSelect(d);
          },
          Home: (n, a, o) => {
            o.preventDefault(), a.focusElement(a.first, n), this.onKeyboardSelect(0);
          },
          End: (n, a, o) => {
            o.preventDefault(), a.focusElement(a.last, n), this.onKeyboardSelect(a.elements.length - 1);
          }
        }
      }
    }), (t = this.navigation) == null || t.initializeRovingTab(this.props.selected), this.onScroll(), this.resizeObserver = window.ResizeObserver && new ResizeObserver(() => this.onScroll()), this.tabStripRef.current && this.resizeObserver && this.resizeObserver.observe(this.tabStripRef.current));
  }
  /** @hidden */
  componentWillUnmount() {
    var t;
    (t = this.navigation) == null || t.removeFocusListener(), this.resizeObserver && this.resizeObserver.disconnect();
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
  /**
   * @hidden
   */
  render() {
    const t = {
      itemsNavRef: this.itemsNavRef,
      ...this.props,
      children: this.children(),
      contentPanelId: this.contentPanelId,
      renderAllContent: this.props.renderAllContent,
      navItemId: this.navItemId,
      onKeyDown: this.onKeyDown,
      onSelect: this.onSelect,
      onScroll: this.onScroll,
      containerScrollPosition: this.state.containerScrollPosition,
      scrollButtons: this.props.scrollButtons === "hidden" || this.state.containerScrollPosition === null && this.props.scrollButtons === "auto" ? "hidden" : "visible"
    }, { scrollable: r, scrollButtons: i, size: n, tabPosition: a, tabIndex: o } = t, l = a === "bottom", d = M(
      "k-tabstrip k-pos-relative",
      {
        [`k-tabstrip-${Ca.sizeMap[n] || n}`]: n,
        "k-tabstrip-left": a === "left",
        "k-tabstrip-right": a === "right",
        "k-tabstrip-bottom": a === "bottom",
        "k-tabstrip-top": a === "top",
        "k-tabstrip-scrollable": r,
        "k-tabstrip-scrollable-start k-tabstrip-scrollable-end": r && i === "visible",
        "k-tabstrip-scrollable-start": r && (i === "auto" || !i) && (this.state.containerScrollPosition === "end" || this.state.containerScrollPosition === "middle"),
        "k-tabstrip-scrollable-end": r && i === "auto" && (this.state.containerScrollPosition === "start" || this.state.containerScrollPosition === "middle")
      },
      this.props.className
    );
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        id: this.props.id,
        ref: this.tabStripRef,
        dir: this.props.dir,
        className: d,
        style: this.props.style,
        onScroll: this.onScroll
      },
      !l && /* @__PURE__ */ s.createElement(_d, { ...t, tabIndex: o }),
      this.renderContent(t),
      l && /* @__PURE__ */ s.createElement(_d, { ...t, tabIndex: o })
    );
  }
  children() {
    return s.Children.toArray(this.props.children).filter((t) => t);
  }
};
Dl.propTypes = {
  id: c.string,
  animation: c.bool,
  children: c.node,
  onSelect: c.func,
  selected: c.number,
  style: c.object,
  tabContentStyle: c.object,
  tabPosition: c.string,
  tabAlignment: c.string,
  tabIndex: c.number,
  className: c.string,
  dir: c.string,
  renderAllContent: c.bool,
  size: c.oneOf(["small", "medium", "large", null]),
  scrollButtons: c.oneOf(["auto", "visible", "hidden"]),
  scrollButtonsPosition: c.oneOf(["split", "start", "end", "around", "before", "after"])
}, Dl.defaultProps = {
  animation: !0,
  tabPosition: "top",
  tabAlignment: "start",
  keepTabsMounted: !1,
  buttonScrollSpeed: 100,
  mouseScrollSpeed: 10,
  scrollButtons: "auto",
  scrollButtonsPosition: "split",
  size: "medium",
  renderAllContent: !1
};
let dy = Dl;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ml = (e) => {
  const t = s.useRef(null), r = s.useCallback(
    (i) => {
      e.onClick && e.onClick.call(void 0, {
        syntheticEvent: i,
        item: e.item,
        title: e.title
      });
    },
    [e.item, e.title, e.onClick]
  );
  return s.useEffect(() => {
    t.current && e.focused && t.current.focus();
  }, [e.focused]), /* @__PURE__ */ s.createElement(
    "span",
    {
      style: e.style,
      tabIndex: e.tabIndex,
      className: M(
        "k-actionsheet-item",
        "k-cursor-pointer",
        e.disabled && "k-disabled",
        e.className
      ),
      ref: t,
      role: "button",
      "aria-disabled": e.disabled,
      onClick: r
    },
    /* @__PURE__ */ s.createElement("span", { className: "k-actionsheet-action" }, e.icon && /* @__PURE__ */ s.createElement("span", { className: "k-icon-wrap" }, e.icon), (e.title || e.description) && /* @__PURE__ */ s.createElement("span", { className: "k-actionsheet-item-text" }, e.title && /* @__PURE__ */ s.createElement("span", { className: "k-actionsheet-item-title" }, e.title), e.description && /* @__PURE__ */ s.createElement("span", { className: "k-actionsheet-item-description" }, e.description)))
  );
};
Ml.propTypes = {
  className: c.string,
  style: c.object,
  description: c.string,
  disabled: c.bool,
  group: c.oneOf(["top", "bottom"]),
  icon: c.element,
  title: c.string
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const qd = "ActionSheetHeader";
c.string;
c.any;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const $h = "ActionSheetFooter", ls = (e) => {
  const {
    actionButtonsAlignment: t = "stretched",
    actionButtonsOrientation: r = "horizontal",
    className: i,
    children: n
  } = e;
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      className: M(
        "k-actionsheet-footer",
        {
          "k-actions": t || r,
          "k-actions-horizontal": r === "horizontal",
          "k-actions-vertical": r === "vertical",
          "k-actions-start": t === "start" && r === "horizontal",
          "k-actions-center": t === "center" && r === "horizontal",
          "k-actions-end": t === "end" && r === "horizontal",
          "k-actions-stretched": t === "stretched",
          "k-actions-justify": t === "justify" && r === "horizontal"
        },
        i
      )
    },
    n
  );
};
ls.propTypes = {
  className: c.string,
  children: c.any,
  actionButtonsOrientation: c.oneOf(["horizontal", "vertical"]),
  actionButtonsAlignment: c.oneOf(["start", "center", "end", "stretched", "justify"])
};
ls.displayName = $h;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const kh = "ActionSheetContent", Aa = (e) => /* @__PURE__ */ s.createElement("div", { className: M("k-actionsheet-content", e.className) }, e.children);
Aa.propTypes = {
  className: c.string
};
Aa.displayName = kh;
Aa.propTypes = {
  children: c.any
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const uy = "ActionSheetView", Ch = kn.forwardRef((e, t) => {
  const r = kn.useRef(null);
  return kn.useImperativeHandle(t, () => r, []), /* @__PURE__ */ kn.createElement("div", { ref: r, style: e.style, className: M("k-actionsheet-view", e.className) }, e.children);
});
Ch.displayName = "ActionSheetView";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cs = s.forwardRef((e, t) => {
  var r, i;
  const {
    navigatableElements: n = Bs.navigatableElements,
    navigatable: a = Bs.navigatable,
    position: o = Bs.position,
    animationDuration: l = 300,
    prefixActions: d,
    suffixActions: u,
    filter: p
  } = e, h = (D, F, te) => {
    te.preventDefault(), te.shiftKey ? F.focusPrevious(D) : F.focusNext(D);
  }, m = (D, F, te) => {
    if (D.ariaDisabled)
      return;
    const ce = D.className && D.className.indexOf ? D.className.indexOf("k-actionsheet-item") !== -1 : !1, se = F.elements.filter((ie) => ie.className.indexOf("k-actionsheet-item") !== -1);
    if (ce && e.onItemClick) {
      te.preventDefault();
      const ie = e.items[se.indexOf(D)];
      e.onItemClick.call(void 0, {
        syntheticEvent: te,
        item: ie,
        title: ie && ie.title
      });
    }
    if (ce && e.onItemSelect) {
      te.preventDefault();
      const ie = e.items[se.indexOf(D)];
      e.onItemSelect.call(void 0, {
        syntheticEvent: te,
        item: ie,
        title: ie && ie.title
      });
    }
    e.animation || b();
  }, f = (D, F, te) => {
    e.onOverlayClick && (te.preventDefault(), e.onOverlayClick.call(void 0, te)), e.onClose && (te.preventDefault(), e.onClose.call(void 0, te)), e.animation || b();
  }, b = () => {
    H({ show: !1 });
  }, x = (D) => {
    a && N.current.triggerKeyboardEvent(D);
  }, w = (D) => {
    e.onOverlayClick && e.onOverlayClick.call(void 0, D), e.onClose && e.onClose.call(void 0, D), e.animation || b();
  }, y = (D) => {
    e.onItemClick && e.onItemClick.call(void 0, D), e.onItemSelect && e.onItemSelect.call(void 0, D), e.animation || b();
  }, E = (D) => {
    const F = {}, te = [];
    return s.Children.forEach(D, (ce) => {
      ce && (ce.type.displayName === uy ? te.push(ce) : F[ce.type.displayName] = ce);
    }), te.length > 0 ? te : F;
  }, C = s.useRef(null), R = s.useRef(null);
  s.useImperativeHandle(
    C,
    () => ({ props: e, element: R.current })
  ), s.useImperativeHandle(
    t,
    () => C.current
  );
  const N = s.useRef(void 0), O = s.useRef({ bottom: "0", width: "100%" }), T = s.useRef(void 0), [k, W] = s.useState({ show: !1, slide: !1 }), H = (D) => {
    W((F) => ({ ...F, ...D }));
  };
  s.useEffect(() => {
    e.expand && !k.show && H({ show: !0 });
  }, []), s.useEffect(() => {
    const D = R.current;
    if (e.expand && !k.show && H({ show: !0 }), e.expand && k.show && !k.slide && H({ slide: !0 }), !e.expand && k.show && k.slide && H({ slide: !1 }), T !== k && k.slide && D && !e.className && (D.style.setProperty("--kendo-actionsheet-height", "auto"), D.style.setProperty("--kendo-actionsheet-max-height", "none")), D && a) {
      const F = [".k-actionsheet-item", ...[
        ".k-actionsheet-footer",
        ".k-actionsheet-content",
        ".k-actionsheet-view",
        ".k-actionsheet-titlebar"
      ].map((te) => Oa.concat(n).map(
        (ce) => `${te} ${ce}`
      )).flat()];
      N.current = new up({
        tabIndex: e.tabIndex || 0,
        root: R,
        rovingTabIndex: !1,
        selectors: F,
        keyboardEvents: {
          keydown: {
            Tab: h,
            Enter: m,
            Escape: f
          }
        }
      }), N.current.focusElement(N.current.first, null);
    }
    T.current = { ...k };
  });
  const Y = "k-actionsheet-title", K = Y, _ = (r = e.items) == null ? void 0 : r.filter(
    (D) => !D.group || D.group === "top"
  ), X = (i = e.items) == null ? void 0 : i.filter(
    (D) => D.group === "bottom"
  ), A = _ && _.length > 0 && X && X.length > 0, L = E(e.children), J = k.slide && /* @__PURE__ */ s.createElement(
    "div",
    {
      className: M(`k-actionsheet k-actionsheet-${o}`, e.className),
      role: "dialog",
      "aria-modal": "true",
      style: e.style,
      "aria-hidden": !1,
      "aria-labelledby": K,
      ref: R,
      onKeyDown: x
    },
    Array.isArray(L) ? /* @__PURE__ */ s.createElement(s.Fragment, null, L.map((D) => D)) : /* @__PURE__ */ s.createElement(Ch, null, L[qd] && !e.title && !e.subTitle && L[qd], (e.title || e.subTitle || d || u || p) && /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-titlebar" }, /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-titlebar-group" }, d && /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-actions" }, d), /* @__PURE__ */ s.createElement("div", { className: Y, id: K }, /* @__PURE__ */ s.createElement("div", { className: "k-text-center" }, e.title), e.subTitle && /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-subtitle k-text-center" }, e.subTitle)), u && /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-actions" }, u)), p && /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, p)), L[kh] || /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-content" }, /* @__PURE__ */ s.createElement("div", { className: "k-list-ul", role: "group" }, _ && _.map((D, F) => /* @__PURE__ */ s.createElement(
      Ml,
      {
        ...D,
        id: F,
        key: F,
        item: D,
        tabIndex: e.tabIndex || 0,
        onClick: y
      }
    )), A && /* @__PURE__ */ s.createElement("hr", { className: "k-hr" }), X && X.map((D, F) => /* @__PURE__ */ s.createElement(
      Ml,
      {
        ...D,
        id: F + (_?.length || 0),
        key: F,
        item: D,
        tabIndex: e.tabIndex || 0,
        onClick: y
      }
    )))), L[$h])
  );
  return /* @__PURE__ */ s.createElement(s.Fragment, null, e.expand || k.show ? /* @__PURE__ */ s.createElement("div", { className: "k-actionsheet-container" }, /* @__PURE__ */ s.createElement("div", { className: "k-overlay", onClick: w }), e.animation ? /* @__PURE__ */ s.createElement(
    Bc,
    {
      transitionName: k.slide ? "slide-up" : "slide-down",
      onExited: b,
      transitionEnterDuration: typeof l == "object" && Object.keys(l).length > 0 && l.openDuration ? Number(l.openDuration) : Number(l),
      transitionExitDuration: typeof l == "object" && Object.keys(l).length > 0 && l.closeDuration ? Number(l.closeDuration) : Number(l),
      animationEnteringStyle: e.animationStyles || O.current,
      animationEnteredStyle: e.animationStyles || O.current,
      animationExitingStyle: e.animationStyles || O.current,
      exit: !0,
      enter: !0,
      appear: !1
    },
    J
  ) : J) : null);
}), Bs = {
  navigatable: !0,
  navigatableElements: [],
  position: "bottom"
};
cs.propTypes = {
  items: c.array,
  subTitle: c.node,
  title: c.node,
  navigatable: c.bool,
  navigatableElements: c.array,
  position: c.oneOf(["top", "bottom", "left", "right", "fullscreen"])
};
cs.displayName = "KendoReactActionSheet";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Sh = en(oy);
Sh.displayName = "KendoReactMenu";
en(dy);
Sh.displayName = "KendoReactMenu";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const py = ({
  children: e,
  onCloseButtonClick: t,
  id: r,
  closeIcon: i
}) => /* @__PURE__ */ s.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: r }, /* @__PURE__ */ s.createElement("span", { className: "k-window-title k-dialog-title" }, e), i && /* @__PURE__ */ s.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, /* @__PURE__ */ s.createElement(
  Ct,
  {
    role: "button",
    "aria-label": "Close",
    onClick: t,
    icon: "x",
    svgIcon: Nc,
    fillMode: "flat",
    className: "k-window-titlebar-action k-dialog-titlebar-action"
  }
)));
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Il = (e) => {
  const t = {
    layout: "stretched",
    ...e
  }, { layout: r, children: i } = t, n = M("k-actions", "k-actions-horizontal", "k-window-actions k-dialog-actions", {
    [`k-actions-${r}`]: r
  });
  return /* @__PURE__ */ s.createElement("div", { className: n }, i);
};
Il.propTypes = {
  children: c.any,
  layout: c.oneOf(["start", "center", "end", "stretched"])
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vc = "data-windowid", Tl = 10002, zo = 2, hy = ".k-window:not(.k-dialog), .k-dialog-wrapper";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Eh = Ji(), Dh = s.forwardRef((e, t) => {
  const r = pc(), i = r ? r + zo : Tl, n = s.useRef(null), a = s.useRef(null), o = s.useRef(ti(document)), l = Pn(Eh, e), d = s.useMemo(
    () => ({
      ...Ja,
      ...l
    }),
    [l]
  ), {
    title: u,
    width: p,
    height: h,
    children: m,
    minWidth: f,
    dir: b,
    style: x,
    themeColor: w,
    contentStyle: y,
    autoFocusedElement: E,
    appendTo: C,
    className: R,
    overlayStyle: N,
    modal: O = Ja.modal,
    closeIcon: T = Ja.closeIcon,
    autoFocus: k = Ja.autoFocus
  } = d, W = s.useCallback(
    () => ({
      props: d,
      element: a.current
    }),
    [d]
  );
  s.useImperativeHandle(n, W), s.useImperativeHandle(t, () => n.current);
  const H = s.useMemo(() => s.Children.toArray(m).filter(
    (F) => s.isValidElement(F) && F.type !== Il
  ), [m]), Y = s.useMemo(() => s.Children.toArray(m).filter(
    (F) => s.isValidElement(F) && F.type === Il
  ), [m]), { _id: K, contentId: _, id: X } = s.useMemo(() => {
    const F = d.id, te = `${F ?? "accessibility"}-id`, ce = `dialog-title-${te}`, se = `dialog-content-${te}`;
    return { _id: te, contentId: se, id: F || ce };
  }, [d.id]), A = s.useCallback(() => {
    if (a.current)
      if (k && !E)
        a.current.focus();
      else if (!k && E && a.current) {
        const F = a.current.querySelector(E);
        F?.focus();
      } else {
        const F = [...Oa].map(
          (te) => te + ":not(.k-dialog-titlebar *)"
        );
        pg(a.current, F);
      }
  }, [k, E]);
  s.useEffect(() => (A(), () => {
    setTimeout(() => {
      var F;
      !a.current && o.current && sr && (document.contains(o.current) ? o.current.focus() : o.current.id && ((F = document.getElementById(o.current.id)) == null || F.focus()));
    });
  }), [A]);
  const L = s.useCallback(
    (F) => {
      F.preventDefault(), Bt(d.onClose, F, W(), void 0);
    },
    [d.onClose]
  ), J = s.useCallback(
    (F) => {
      F.keyCode === z.esc && d.onClose && (F.preventDefault(), L(F)), ip(F, a.current);
    },
    [d.onClose, L]
  ), D = s.useMemo(() => /* @__PURE__ */ s.createElement(ri.Provider, { value: i }, /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: a,
      [Vc]: K,
      className: "k-dialog-wrapper" + (R ? " " + R : ""),
      onKeyDown: J,
      tabIndex: 0,
      dir: b,
      style: {
        zIndex: i,
        ...x
      }
    },
    O && /* @__PURE__ */ s.createElement("div", { className: "k-overlay", style: N }),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        className: M("k-window k-dialog", {
          [`k-window-${w}`]: w
        }),
        role: "dialog",
        "aria-labelledby": X,
        "aria-modal": !0,
        "aria-describedby": _,
        style: { width: p, height: h, minWidth: f }
      },
      u && /* @__PURE__ */ s.createElement(py, { closeIcon: T, onCloseButtonClick: L, id: X }, u),
      /* @__PURE__ */ s.createElement("div", { className: "k-window-content k-dialog-content", style: y, id: _ }, H),
      Y
    )
  )), [
    i,
    K,
    R,
    J,
    x,
    b,
    N,
    w,
    X,
    _,
    p,
    h,
    f,
    T,
    L,
    y,
    u,
    H,
    Y,
    O
  ]);
  return sr ? C !== null ? _o.createPortal(D, C || document.body) : D : null;
}), Ja = {
  autoFocus: !1,
  modal: !0,
  closeIcon: !0
}, fy = {
  autoFocus: c.bool,
  autoFocusedElement: c.string,
  title: c.any,
  className: c.string,
  closeIcon: c.bool,
  modal: c.bool,
  overlayStyle: c.object,
  width: c.oneOfType([c.number, c.string]),
  height: c.oneOfType([c.number, c.string]),
  minWidth: c.oneOfType([c.number, c.string]),
  onClose: c.func,
  children: c.node,
  id: c.string,
  dir: c.string,
  style: c.object,
  contentStyle: c.object,
  appendTo: c.any,
  themeColor: c.oneOf(["primary", "dark", "light"])
};
Dh.displayName = "KendoReactDialog";
Dh.propTypes = fy;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var Me = /* @__PURE__ */ ((e) => (e.DEFAULT = "DEFAULT", e.FULLSCREEN = "FULLSCREEN", e.MINIMIZED = "MINIMIZED", e))(Me || {});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Rl = "dialogs.windowMaximizeButton", Ol = "dialogs.windowMinimizeButton", Nl = "dialogs.windowRestoreButton", Fl = "dialogs.windowCloseButton", eo = {
  [Rl]: "maximize",
  [Ol]: "minimize",
  [Nl]: "restore",
  [Fl]: "close"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const my = (e) => {
  const {
    children: t,
    onCloseButtonClick: r,
    onMinimizeButtonClick: i,
    onFullScreenButtonClick: n,
    onRestoreButtonClick: a,
    onDoubleClick: o,
    stage: l,
    forwardedRef: d,
    id: u
  } = e, p = tn(), h = e.minimizeButton ? /* @__PURE__ */ s.createElement(e.minimizeButton, { onClick: i, stage: l }) : /* @__PURE__ */ s.createElement(
    Ct,
    {
      fillMode: "flat",
      icon: "window-minimize",
      svgIcon: Dx,
      className: "k-window-titlebar-action",
      onClick: i,
      "aria-label": p.toLanguageString(
        Ol,
        eo[Ol]
      )
    }
  ), m = e.maximizeButton ? /* @__PURE__ */ s.createElement(e.maximizeButton, { onClick: n, stage: l }) : /* @__PURE__ */ s.createElement(
    Ct,
    {
      fillMode: "flat",
      icon: "window-maximize",
      svgIcon: Sx,
      className: "k-window-titlebar-action",
      onClick: n,
      "aria-label": p.toLanguageString(
        Rl,
        eo[Rl]
      )
    }
  ), f = e.restoreButton ? /* @__PURE__ */ s.createElement(e.restoreButton, { onClick: a, stage: l }) : /* @__PURE__ */ s.createElement(
    Ct,
    {
      fillMode: "flat",
      icon: "window-restore",
      svgIcon: Ex,
      className: "k-window-titlebar-action",
      onClick: a,
      "aria-label": p.toLanguageString(Nl, eo[Nl])
    }
  ), b = e.closeButton ? /* @__PURE__ */ s.createElement(e.closeButton, { onClick: r, stage: l }) : /* @__PURE__ */ s.createElement(
    Ct,
    {
      fillMode: "flat",
      icon: "x",
      svgIcon: Nc,
      className: "k-window-titlebar-action",
      onClick: r,
      "aria-label": p.toLanguageString(Fl, eo[Fl])
    }
  );
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      className: "k-window-titlebar",
      style: { touchAction: "none" },
      ref: d,
      onDoubleClick: o
    },
    /* @__PURE__ */ s.createElement("span", { className: "k-window-title", id: u }, t || ""),
    /* @__PURE__ */ s.createElement("div", { className: "k-window-titlebar-actions" }, l === Me.DEFAULT && h, l === Me.DEFAULT && m, l !== Me.DEFAULT && f, b)
  );
}, gy = s.forwardRef((e, t) => /* @__PURE__ */ s.createElement(my, { ...e, forwardedRef: t }));
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const vy = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
let xy = class extends s.Component {
  render() {
    return /* @__PURE__ */ s.createElement("div", { className: "k-resize-handles-wrapper" }, " ", vy.map((t, r) => /* @__PURE__ */ s.createElement(
      wc,
      {
        key: r,
        onDrag: (i) => {
          const { event: n } = i;
          n.originalEvent.preventDefault(), this.props.onResize(n, { end: !1, direction: t });
        },
        onRelease: (i) => {
          const { event: n } = i;
          n.originalEvent.preventDefault(), this.props.onResize(n, { end: !0, direction: t });
        }
      },
      /* @__PURE__ */ s.createElement(
        "div",
        {
          className: "k-resize-handle k-resize-" + t,
          style: { display: "block", touchAction: "none", userSelect: "none" }
        }
      )
    )));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let by = class extends s.Component {
  shouldComponentUpdate(t) {
    return t.shouldUpdateOnDrag || !t.isDragging;
  }
  render() {
    return this.props.children;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ll = (e) => {
  const t = {
    layout: "end",
    ...e
  }, { layout: r, children: i } = t, n = M("k-actions", "k-window-actions", "k-actions-horizontal", "k-hstack", {
    "k-justify-content-start": r === "start",
    "k-justify-content-center": r === "center",
    "k-justify-content-end": r === "end",
    "k-justify-content-stretch": r === "stretched"
  });
  return /* @__PURE__ */ s.createElement("div", { className: n }, i);
};
Ll.propTypes = {
  children: c.any,
  layout: c.oneOf(["start", "center", "end", "stretched"])
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yd = (e, t, r) => {
  let i = e;
  if (t && t.defaultView) {
    const n = t.querySelectorAll(hy);
    let a = !1;
    return n.forEach((o) => {
      const l = t.defaultView.getComputedStyle(o, null);
      if (o.getAttribute(Vc) !== r && l.zIndex !== null) {
        const d = parseInt(l.zIndex, 10);
        d >= i && (i = d, a = !0);
      }
    }), a ? i + zo : i;
  }
  return i;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vs = 300, js = 300, Pl = 120, Al = 100, Zr = 5, da = class extends s.Component {
  constructor(t) {
    super(t), this.context = 0, this.draggable = null, this.offSetCoordinates = { x: 0, y: 0 }, this.titleId = this.generateTitleId(), this.mounted = !1, this.activeElement = null, this.onKeyDown = (r) => {
      if (this.props.modal && ip(r, this.element), r.target !== r.currentTarget)
        return;
      const i = this.props.minWidth || Pl, n = this.props.minHeight || Al;
      if ((r.metaKey || r.ctrlKey) && this.props.resizable) {
        switch (r.keyCode) {
          case z.up:
            r.preventDefault(), n <= this.height - Zr && this.setState({ height: this.height - Zr });
            break;
          case z.down:
            r.preventDefault(), this.setState({ height: this.height + Zr });
            break;
          case z.left:
            i <= this.width - Zr && this.setState({ width: this.width - Zr });
            break;
          case z.right:
            this.setState({ width: this.width + Zr });
            break;
          default:
            return;
        }
        this.dispatchMoveEvent(this.props.onResize, r, !1, void 0);
        return;
      }
      if (r.altKey) {
        switch (r.keyCode) {
          case z.up:
            this.windowStage === Me.MINIMIZED ? (this.handleRestore(r), Bt(this.props.onStageChange, r, this, { state: Me.DEFAULT })) : this.windowStage === Me.DEFAULT && (this.handleFullscreen(r), Bt(this.props.onStageChange, r, this, { state: Me.FULLSCREEN }));
            break;
          case z.down:
            this.windowStage === Me.FULLSCREEN ? (this.handleRestore(r), Bt(this.props.onStageChange, r, this, { state: Me.DEFAULT })) : this.windowStage === Me.DEFAULT && (this.handleMinimize(r), Bt(this.props.onStageChange, r, this, { state: Me.MINIMIZED }));
            break;
        }
        return;
      }
      if (!r.ctrlKey)
        switch (r.keyCode) {
          case z.esc:
            this.props.onClose && this.handleCloseWindow(r);
            return;
          case z.up:
            this.setState((a) => ({ top: a.top - Zr }));
            break;
          case z.down:
            this.setState((a) => ({ top: a.top + Zr }));
            break;
          case z.left:
            this.setState((a) => ({ left: a.left - Zr }));
            break;
          case z.right:
            this.setState((a) => ({ left: a.left + Zr }));
            break;
          default:
            return;
        }
      this.dispatchMoveEvent(this.props.onMove, r, !1, void 0);
    }, this.onPress = (r) => {
      const i = r.event;
      this.windowCoordinatesState.differenceLeft = i.pageX - this.left, this.windowCoordinatesState.differenceTop = i.pageY - this.top;
    }, this.onDrag = (r) => {
      const i = r.event;
      i.originalEvent.preventDefault(), this.windowStage !== Me.FULLSCREEN && this.props.draggable && (this.setState({
        top: Math.max(i.pageY - this.windowCoordinatesState.differenceTop, 0),
        left: i.pageX - this.windowCoordinatesState.differenceLeft,
        isDragging: !0
      }), this.props.onMove && this.dispatchMoveEvent(this.props.onMove, i, !0, !1));
    }, this.onRelease = (r) => {
      const i = r.event;
      this.windowStage !== Me.FULLSCREEN && this.props.draggable && this.props.onMove && this.dispatchMoveEvent(this.props.onMove, i, !0, !0), this.setState({
        isDragging: !1
      });
    }, this.onFocus = () => {
      this._blurTimeout ? (clearTimeout(this._blurTimeout), this._blurTimeout = void 0) : this.setState({
        focused: !0,
        zIndex: Yd(this.getCurrentZIndex(), this.getDocument(), this._id)
      });
    }, this.onBlur = () => {
      clearTimeout(this._blurTimeout);
      const r = this.getWindow();
      r && (this._blurTimeout = r.setTimeout(() => {
        this.mounted && this.setState({ focused: !1 }), this._blurTimeout = void 0;
      }));
    }, this.getInitialTop = () => {
      if (this.props.top !== void 0)
        return this.props.top;
      if (this.props.initialTop !== void 0)
        return this.props.initialTop;
      let r = js;
      if (this.props.height !== void 0 ? r = this.props.height : this.props.initialHeight !== void 0 && (r = this.props.initialHeight), this.props.appendTo)
        return this.props.appendTo.offsetHeight / 2 - r / 2;
      const i = this.getWindow();
      return i ? i.innerHeight / 2 - r / 2 : 0;
    }, this.getInitialLeft = () => {
      if (this.props.left !== void 0)
        return this.props.left;
      if (this.props.initialLeft !== void 0)
        return this.props.initialLeft;
      let r = Vs;
      if (this.props.width !== void 0 ? r = this.props.width : this.props.initialWidth !== void 0 && (r = this.props.initialWidth), this.props.appendTo)
        return this.props.appendTo.offsetWidth / 2 - r / 2;
      const i = this.getWindow();
      return i ? i.innerWidth / 2 - r / 2 : 0;
    }, this.getInitialWidth = () => {
      let r = Vs;
      return this.props.width !== void 0 ? r = this.props.width : this.props.initialWidth !== void 0 && (r = this.props.initialWidth), r;
    }, this.getInitialHeight = () => {
      let r = js;
      return this.props.height !== void 0 ? r = this.props.height : this.props.initialHeight !== void 0 && (r = this.props.initialHeight), r;
    }, this.handleMinimize = (r) => {
      r.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height, this.setState({
        stage: Me.MINIMIZED,
        height: 0
      }), Bt(this.props.onStageChange, r, this, { state: Me.MINIMIZED });
    }, this.handleFullscreen = (r) => {
      r.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height;
      const i = this.getWindow(), n = i ? i.innerWidth : 0, a = i ? i.innerHeight : 0;
      this.setState({
        left: 0,
        top: 0,
        width: this.props.appendTo ? this.props.appendTo.offsetWidth : n,
        height: this.props.appendTo ? this.props.appendTo.offsetHeight : a,
        stage: Me.FULLSCREEN
      }), Bt(this.props.onStageChange, r, this, { state: Me.FULLSCREEN });
    }, this.handleRestore = (r) => {
      r.preventDefault(), this.windowStage === Me.FULLSCREEN ? this.setState({
        stage: Me.DEFAULT,
        left: this.windowCoordinatesState.leftBeforeAction,
        top: this.windowCoordinatesState.topBeforeAction,
        width: this.windowCoordinatesState.widthBeforeAction,
        height: this.windowCoordinatesState.heightBeforeAction
      }) : this.windowStage === Me.MINIMIZED && this.setState({
        stage: Me.DEFAULT,
        height: this.windowCoordinatesState.heightBeforeAction
      }), Bt(this.props.onStageChange, r, this, { state: Me.DEFAULT });
    }, this.handleCloseWindow = (r) => {
      r.preventDefault(), Bt(this.props.onClose, r, this, { state: void 0 });
    }, this.handleDoubleClick = (r) => {
      this.windowStage === Me.FULLSCREEN || this.windowStage === Me.MINIMIZED ? this.handleRestore(r) : this.handleFullscreen(r);
    }, this.handleResize = (r, i) => {
      const n = this.props.appendTo ? r.pageX - this.offSetCoordinates.x : r.pageX, a = this.props.appendTo ? r.pageY - this.offSetCoordinates.y : r.pageY, o = this.width, l = this.height, d = this.props.minWidth || Pl, u = this.props.minHeight || Al, p = this.top - a, h = this.left - n, m = n - this.left, f = a - this.top, b = Object.assign({}, this.state, { isDragging: !i.end });
      i.direction.indexOf("n") >= 0 && u - (l + p) < 0 && (this.top > 0 && (b.height = l + p), b.top = a), i.direction.indexOf("s") >= 0 && u - f < 0 && (b.height = f), i.direction.indexOf("w") >= 0 && d - (o + h) < 0 && (this.left > 0 && (b.width = o + h), b.left = n), i.direction.indexOf("e") >= 0 && d - m < 0 && (b.width = m), this.setState(b), this.dispatchMoveEvent(this.props.onResize, r, !0, i.end);
    }, this.dispatchMoveEvent = (r, i, n, a) => {
      r && r.call(void 0, {
        nativeEvent: i.nativeEvent ? i.nativeEvent : i.originalEvent,
        drag: n,
        end: a,
        target: this,
        left: this.state.left,
        top: this.state.top,
        width: this.state.width,
        hight: this.state.height,
        height: this.state.height
      });
    }, this.handleBrowserWindowResize = () => {
      if (this.windowStage === Me.FULLSCREEN) {
        const r = this.getWindow(), i = r ? r.innerWidth : 0, n = r ? r.innerHeight : 0;
        this.setState({
          width: this.props.appendTo ? this.props.appendTo.offsetWidth : i,
          height: this.props.appendTo ? this.props.appendTo.offsetHeight : n
        });
      }
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : Tl : this.state.zIndex > (this.context ? this.context + zo : 0) ? this.state.zIndex : this.context + zo, this.getDocument = () => {
      const r = sr ? document : null;
      return this.props.appendTo ? this.props.appendTo.ownerDocument : r;
    }, this.getWindow = () => {
      const r = this.getDocument();
      return r && r.defaultView;
    }, this.state = {
      stage: this.props.stage || Me.DEFAULT,
      isDragging: !1,
      top: 0,
      left: 0,
      width: Vs,
      height: js,
      focused: !0,
      zIndex: Tl
    }, sr && (this.activeElement = document.activeElement);
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.element && this.props.autoFocus && this.element.focus({ preventScroll: !0 });
    const t = this.getWindow();
    t && t.addEventListener("resize", this.handleBrowserWindowResize), this.setState({
      stage: this.props.stage || Me.DEFAULT,
      isDragging: !1,
      top: this.getInitialTop(),
      left: this.getInitialLeft(),
      width: this.getInitialWidth(),
      height: this.getInitialHeight(),
      focused: !0,
      zIndex: Yd(this.getCurrentZIndex(), this.getDocument(), this._id)
    }), this.windowCoordinatesState = {
      leftBeforeAction: this.getInitialLeft(),
      topBeforeAction: this.getInitialTop(),
      widthBeforeAction: this.getInitialWidth(),
      heightBeforeAction: this.getInitialHeight()
    };
    const r = this.getDocument();
    if (this.props.appendTo && r) {
      const i = this.props.appendTo.getBoundingClientRect(), n = r.body.getBoundingClientRect();
      this.offSetCoordinates.x = i.left - n.left, this.offSetCoordinates.y = i.top - n.top;
    }
    this.mounted = !0;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    const t = this.getWindow();
    t && t.removeEventListener("resize", this.handleBrowserWindowResize), this.mounted = !1, setTimeout(() => {
      var r;
      !this.element && this.activeElement && sr && (document.contains(this.activeElement) ? this.activeElement.focus({ preventScroll: !0 }) : this.activeElement.id && ((r = document.getElementById(this.activeElement.id)) == null || r.focus({ preventScroll: !0 })));
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(t) {
    this.props.left && t.left !== this.props.left && this.setState({ left: this.props.left }), this.props.top && t.top !== this.props.top && this.setState({ top: this.props.top });
    const r = this.getDocument();
    if (this.props.appendTo && r) {
      const i = this.props.appendTo.getBoundingClientRect(), n = r.body.getBoundingClientRect();
      this.offSetCoordinates.x = i.left - n.left, this.offSetCoordinates.y = i.top - n.top;
    }
    this.mounted = !0;
  }
  /**
   * @hidden
   */
  render() {
    const t = s.Children.toArray(this.props.children), r = this.getContent(t), i = this.getActionBar(t), n = this.getCurrentZIndex(), a = M("k-window", this.props.className, {
      [`k-window-${this.props.themeColor}`]: this.props.themeColor,
      "k-window-minimized": this.state.stage === "MINIMIZED",
      "k-focus": this.state.focused
    }), o = /* @__PURE__ */ s.createElement(ri.Provider, { value: n }, /* @__PURE__ */ s.createElement(s.Fragment, null, this.props.modal && /* @__PURE__ */ s.createElement(
      "div",
      {
        className: "k-overlay",
        style: {
          zIndex: n,
          ...this.props.overlayStyle
        }
      }
    ), /* @__PURE__ */ s.createElement(
      "div",
      {
        id: this.props.id,
        [Vc]: this._id,
        tabIndex: 0,
        role: "dialog",
        "aria-labelledby": this.titleId,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: (l) => {
          this.windowElement = l, this.element = l;
        },
        className: a,
        style: {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height || "",
          zIndex: n,
          ...this.props.style
        }
      },
      /* @__PURE__ */ s.createElement(
        by,
        {
          shouldUpdateOnDrag: this.props.shouldUpdateOnDrag || !1,
          isDragging: this.state.isDragging
        },
        /* @__PURE__ */ s.createElement(
          wc,
          {
            onPress: this.onPress,
            onDrag: this.onDrag,
            onRelease: this.onRelease,
            autoScroll: !1,
            ref: (l) => {
              this.draggable = l;
            }
          },
          /* @__PURE__ */ s.createElement(
            gy,
            {
              stage: this.windowStage,
              onDoubleClick: this.props.doubleClickStageChange ? this.handleDoubleClick : void 0,
              onMinimizeButtonClick: this.handleMinimize,
              onFullScreenButtonClick: this.handleFullscreen,
              onRestoreButtonClick: this.handleRestore,
              onCloseButtonClick: this.handleCloseWindow,
              closeButton: this.props.closeButton,
              minimizeButton: this.props.minimizeButton,
              maximizeButton: this.props.maximizeButton,
              restoreButton: this.props.restoreButton,
              id: this.titleId
            },
            this.props.title
          )
        ),
        this.windowStage !== Me.MINIMIZED ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { className: "k-window-content" }, r), i) : null,
        this.windowStage === Me.DEFAULT && this.props.resizable ? /* @__PURE__ */ s.createElement(xy, { onResize: this.handleResize }) : null
      )
    )));
    return sr ? this.props.appendTo !== null ? _o.createPortal(o, this.props.appendTo || document.body) : o : null;
  }
  // Getters
  get top() {
    return this.windowStage !== Me.FULLSCREEN ? Math.max(this.props.top || this.state.top, 0) : 0;
  }
  get left() {
    return this.windowStage !== Me.FULLSCREEN ? Math.max(this.props.left || this.state.left, 0) : 0;
  }
  get width() {
    let t = this.props.width || this.state.width;
    if (this.windowStage === Me.FULLSCREEN) {
      if (this.props.appendTo)
        return t = this.props.appendTo.offsetWidth, t;
      const r = this.getWindow();
      t = r ? r.innerWidth : 0;
    }
    return t;
  }
  get height() {
    let t = this.props.height || this.state.height;
    if (this.windowStage === Me.FULLSCREEN) {
      if (this.props.appendTo)
        return t = this.props.appendTo.offsetHeight, t;
      const r = this.getWindow();
      t = r ? r.innerHeight : 0;
    } else this.windowStage === Me.MINIMIZED && (t = 0);
    return t;
  }
  get windowStage() {
    return this.props.stage || this.state.stage;
  }
  getActionBar(t) {
    return t.filter((r) => r && r.type === Ll);
  }
  getContent(t) {
    return t.filter((r) => r && r.type !== Ll);
  }
  generateTitleId() {
    return "window-title-" + this._id;
  }
};
da.displayName = "Window", da.propTypes = {
  width: c.number,
  height: c.number,
  left: c.number,
  top: c.number,
  initialWidth: c.number,
  initialHeight: c.number,
  initialLeft: c.number,
  initialTop: c.number,
  minWidth: c.number,
  minHeight: c.number,
  resizable: c.bool,
  draggable: c.bool,
  title: c.any,
  shouldUpdateOnDrag: c.bool,
  stage: c.oneOf(["DEFAULT", "MINIMIZED", "FULLSCREEN"]),
  className: c.string,
  id: c.string,
  style: c.object,
  overlayStyle: c.object,
  autoFocus: c.bool
}, da.defaultProps = {
  minWidth: Pl,
  minHeight: Al,
  resizable: !0,
  draggable: !0,
  modal: !1,
  doubleClickStageChange: !0,
  autoFocus: !0
}, da.contextType = ri;
let yy = da;
const Mh = Ji(), wy = en(
  gc(
    Mh,
    yy
  )
);
wy.displayName = "KendoReactWindow";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ih = s.forwardRef(
  ({ orientation: e = "horizontal", ...t }, r) => {
    const i = s.useRef(null), n = s.useRef(null), a = Ut(), o = a && a.uTextBox;
    s.useImperativeHandle(i, () => ({ element: n.current })), s.useImperativeHandle(r, () => i.current);
    const l = s.useMemo(
      () => M(
        hl.prefix({
          c: o,
          orientation: e
        }),
        t.className
      ),
      [t.className, o, e]
    );
    return /* @__PURE__ */ s.createElement("span", { ...t, className: l });
  }
);
Ih.displayName = "KendoReactInputPrefix";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Th = s.forwardRef(
  ({ orientation: e = "vertical", ...t }, r) => {
    const i = s.useRef(null), n = s.useRef(null);
    return s.useImperativeHandle(i, () => ({ element: n.current })), s.useImperativeHandle(r, () => i.current), /* @__PURE__ */ s.createElement(
      "span",
      {
        ...t,
        className: M("k-input-separator", t.className, `k-input-separator-${e}`)
      }
    );
  }
);
Th.displayName = "KendoReactInputSeparator";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const jc = s.forwardRef((e, t) => {
  const r = s.useRef(null), { renderListFilterWrapper: i = !1, renderPrefixSeparator: n = !1, placeholder: a, ...o } = e, l = Ut(), d = l && l.uDropDownsBase;
  s.useImperativeHandle(t, () => r.current);
  const u = () => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ih, null, /* @__PURE__ */ s.createElement(
    Li,
    {
      name: "search",
      icon: Mx,
      className: M(kr.inputIcon({ c: d }))
    }
  )), n && /* @__PURE__ */ s.createElement(Th, null)), p = /* @__PURE__ */ s.createElement(
    zc,
    {
      ...o,
      ref: r,
      className: M(kr.searchbox({ c: d })),
      value: e.value || "",
      onChange: e.onChange,
      onKeyDown: e.onKeyDown,
      tabIndex: e.tabIndex,
      onClick: (h) => h.stopPropagation(),
      size: e.size,
      fillMode: e.fillMode,
      rounded: e.rounded,
      prefix: u,
      placeholder: a
    }
  );
  return i ? /* @__PURE__ */ s.createElement("div", { className: M(kr.listFilter({ c: d })) }, " ", p, " ") : p;
});
jc.propTypes = {
  value: c.oneOfType([c.string, c.number, c.array]),
  tabIndex: c.number,
  onChange: c.func,
  onKeyDown: c.func,
  size: c.oneOf([null, "small", "medium", "large"]),
  rounded: c.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: c.oneOf([null, "solid", "flat", "outline"]),
  renderListFilterWrapper: c.bool,
  placeholder: c.string,
  renderPrefixSeparator: c.bool
};
jc.displayName = "KendoReactListFilter";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Kd = (e) => {
  const { group: t, groupMode: r, render: i } = e, n = Ut(), a = n && n.uDropDownsBase, o = /* @__PURE__ */ s.createElement("div", { className: M(kr.groupStickyHeader({ c: a })) }, r === "classic" ? t : /* @__PURE__ */ s.createElement("div", { className: M(kr.listHeaderText({ c: a })) }, t));
  return i !== void 0 ? i.call(void 0, o, e) : o;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Gi = (e) => e != null, $y = (e, t) => {
  for (let r = 0; r < e.length; r++)
    if (e.charAt(r) !== t)
      return !1;
  return !0;
}, ky = (e, t, r) => {
  let i = e;
  return r && (i = [r].concat(i)), i.slice(t).concat(i.slice(0, t));
}, Xd = (e, t, r) => {
  if (!Gi(e))
    return !1;
  let i = String(e);
  return r && (i = i.toLowerCase()), i.indexOf(t) === 0;
}, Cy = (e, t, r, i, n) => {
  const a = e.offsetHeight, o = t.children.item(r), l = o.offsetTop + (n ? i - e.scrollTop : 0), d = o.offsetHeight;
  if (n) {
    let u = 0;
    l + d > a ? u = l + d - a : l < 0 && (u = l), u !== 0 ? e.scrollTop += u : e.scrollTop === 0 && i !== 0 && (e.scrollTop = i);
  } else
    l + d > a + e.scrollTop ? e.scrollTop = l + d - a : l < e.scrollTop && (e.scrollTop -= e.scrollTop - l);
}, Sy = (e, t, r) => {
  let i = -1;
  if (t) {
    t = t.toLowerCase();
    for (let n = 0; n < e.length; n++) {
      const a = (Ar(e[n], r) || "") + "";
      if (a && a.toLowerCase().startsWith(t)) {
        i = n;
        break;
      }
    }
  }
  return i;
}, Ar = (e, t) => {
  if (t && Gi(e)) {
    const r = t.split(".");
    let i = e;
    return r.forEach((n) => {
      i = i ? i[n] : void 0;
    }), i;
  }
  return e;
}, nr = (e, t, r) => e === t || Gi(e) === Gi(t) && Ar(e, r) === Ar(t, r), br = (e) => {
  const { data: t = [], groupField: r } = e;
  return r ? t.filter((i) => r && i[r] !== void 0) : t;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ey = (e) => e.preventDefault(), Dy = (e) => {
  const { selected: t, defaultItem: r, textField: i } = e, n = Ut(), a = n && n.uDropDownsBase;
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      onClick: e.onClick,
      onMouseDown: Ey,
      style: { position: "unset" },
      className: M(kr.optionLabel({ c: a, selected: t }))
    },
    Ar(r, i) || ""
  );
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const My = (e) => {
  const { selected: t, group: r, dataItem: i, virtual: n, groupMode: a, disabled: o, id: l, focused: d, render: u } = e, p = Ut(), h = p && p.uDropDownsBase, m = (b) => e.onClick(e.index, b), f = /* @__PURE__ */ s.createElement(
    "li",
    {
      id: l,
      role: "option",
      "aria-selected": t,
      "aria-disabled": o ? !0 : void 0,
      className: M(
        kr.li({
          c: h,
          selected: t,
          focused: d,
          first: !!r && a === "classic",
          disabled: o
        })
      ),
      onClick: m,
      style: { position: n ? "relative" : "unset" }
    },
    /* @__PURE__ */ s.createElement("span", { className: M(kr.itemText({ c: h })) }, Ar(i, e.textField).toString()),
    r !== void 0 && a === "classic" ? /* @__PURE__ */ s.createElement("div", { className: M(kr.itemGroupLabel({ c: h })) }, r) : null
  );
  return u !== void 0 ? u.call(void 0, f, e) : f;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Iy = (e) => {
  const { group: t, virtual: r, render: i, isMultiColumn: n = !1, id: a } = e, o = Ut(), l = o && o.uDropDownsBase, d = /* @__PURE__ */ s.createElement(
    "li",
    {
      id: a,
      role: "group",
      className: M(kr.groupLi({ c: l, isMultiColumn: n })),
      style: n ? { boxSizing: "inherit", position: r ? "relative" : "unset" } : { position: r ? "relative" : "unset" }
    },
    /* @__PURE__ */ s.createElement(
      "span",
      {
        className: i ? void 0 : M(kr.groupItemText({ c: l, isMultiColumn: n }))
      },
      t
    )
  );
  return i !== void 0 ? i.call(void 0, d, e) : d;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const zl = "dropdowns.nodata", Ty = "dropdowns.clear", Ry = "dropdowns.comboArrowBtnAriaLabelExpand", Oy = "dropdowns.comboArrowBtnAriaLabelCollapse", Hl = "dropdowns.dropDownListArrowBtnAriaLabel", Bl = "dropdowns.dropDownListAdaptiveFilterPlaceholder", Ny = "dropdowns.apply", Fy = "dropdowns.cancel", Vl = {
  [Ty]: "clear",
  [zl]: "NO DATA FOUND.",
  [Ry]: "expand combobox",
  [Oy]: "collapse combobox",
  [Hl]: "select",
  [Bl]: "Filter",
  [Ny]: "Apply",
  [Fy]: "Cancel"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ly = (e) => {
  const t = tn(), r = Ut(), i = r && r.uDropDownsBase, { id: n, show: a, wrapperCssClass: o, wrapperStyle: l, listStyle: d, listRef: u, wrapperRef: p, listClassName: h, ariaSetSize: m } = e, f = (() => {
    const {
      textField: x,
      valueField: w,
      groupField: y,
      groupMode: E,
      isMultiColumn: C,
      optionsGuid: R,
      skip: N = 0,
      virtual: O,
      focusedIndex: T,
      hasDuplicates: k,
      highlightSelected: W = !0,
      value: H,
      data: Y,
      itemRender: K,
      groupHeaderItemRender: _
    } = e, X = Array.isArray(H);
    let A = 0;
    return Y.map((L, J) => {
      const D = N + J, F = N + J + A, te = k ? H ? T === J : !1 : L.disabled ? !1 : W && (!X && nr(L, H, w) || X && H.findIndex((V) => nr(V, L, w)) !== -1);
      let ce, se, ie;
      J > 0 && y !== void 0 && (se = Ar(L, y), ie = Ar(Y[J - 1], y), se && ie && se !== ie && (ce = se));
      const He = ce !== void 0 && E === "modern";
      return He ? A += 1 : A = 0, [
        He && /* @__PURE__ */ s.createElement(
          Iy,
          {
            id: `option-${R}-${F}`,
            virtual: O,
            key: D + "-group-item",
            group: ce,
            isMultiColumn: C,
            render: _
          }
        ),
        /* @__PURE__ */ s.createElement(
          My,
          {
            id: `option-${R}-${He ? F + 1 : F}`,
            virtual: O,
            dataItem: L,
            groupMode: E,
            selected: te,
            focused: T === J,
            index: D,
            key: D,
            onClick: e.onClick,
            textField: x,
            group: ce,
            render: K,
            disabled: L.disabled
          }
        )
      ];
    });
  })(), b = () => {
    const x = e.noDataRender, w = /* @__PURE__ */ s.createElement("div", { className: M(kr.noData({ c: i })) }, /* @__PURE__ */ s.createElement("div", null, t.toLanguageString(zl, Vl[zl])));
    return x ? x.call(void 0, w) : w;
  };
  return f.length ? /* @__PURE__ */ s.createElement(
    "div",
    {
      className: o,
      style: l,
      ref: p,
      onMouseDown: e.onMouseDown,
      onBlur: e.onBlur,
      onScroll: e.onScroll,
      unselectable: "on"
    },
    /* @__PURE__ */ s.createElement(
      "ul",
      {
        id: n,
        role: "listbox",
        "aria-hidden": a ? void 0 : !0,
        "aria-setsize": m,
        className: h || M(kr.ul({ c: i })),
        ref: u,
        style: d
      },
      f
    ),
    e.scroller && /* @__PURE__ */ s.createElement("div", { className: M(kr.heightContainer({ c: i })) }, e.scroller)
  ) : b();
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Py = 17895697, Gd = typeof window < "u" && /Firefox/.test(window.navigator.userAgent);
let Ay = class {
  constructor() {
    this.table = null, this.total = 0, this.enabled = !1, this.skip = 0, this.pageSize = 0, this.PageChange = null, this.scrollElement = null, this.listTransform = "", this.itemHeight = 0, this.containerHeight = 0, this.reactVersion = Number.parseFloat(s.version), this.scrollSyncing = !1, this.lastLoaded = 0, this.firstLoaded = 0, this.lastScrollTop = 0, this.listTranslate = 0, this.list = null, this.container = null, this.calcScrollElementHeight = () => {
      var t;
      this.scrollSyncing = !0;
      let r = !1;
      this.itemHeight = this.list ? this.list.children[0].offsetHeight : this.itemHeight;
      const i = this.itemHeight * this.total - (((t = this.list) == null ? void 0 : t.offsetHeight) || 0);
      this.containerHeight = Gd ? Math.min(Py, i) : i;
      const n = this.containerHeight;
      return this.scrollElement && (r = this.scrollElement.style.height !== n + "px", r && (this.scrollElement.style.height = n + "px")), this.scrollSyncing = !1, r;
    }, this.scrollerRef = (t) => {
      this.container = t, t && (t.setAttribute("unselectable", "on"), window.setTimeout(this.calcScrollElementHeight.bind(this), 0));
    }, this.getRowHeightService = gv((t, r) => new pp(r, t)), this.firstLoaded = this.pageSize, this.lastLoaded = this.skip + this.pageSize, this.scrollHandler = this.scrollHandler.bind(this);
  }
  get translate() {
    return this.listTranslate;
  }
  translateTo(t, r) {
    this.listTranslate = t, this.enabled && this.list && (Gd || this.reactVersion <= 17 || r ? this.list.style.transform = "translateY(" + t + "px)" : this.listTransform = "translateY(" + t + "px)");
  }
  changePage(t, r) {
    const i = Math.min(Math.max(0, t), this.total - this.pageSize);
    i !== this.skip && this.PageChange && this.PageChange({ skip: i, take: this.pageSize }, r);
  }
  reset() {
    this.container && (this.calcScrollElementHeight(), this.container.scrollTop = 0, this.translateTo(0, !0));
  }
  scrollToEnd() {
    if (this.container && this.list) {
      this.calcScrollElementHeight();
      const { scrollHeight: t, offsetHeight: r } = this.container;
      this.container.scrollTop = t, this.translateTo(t - r, !0);
    }
  }
  scrollHandler(t) {
    if (!this.enabled || !this.container || !this.list)
      return;
    if (this.scrollSyncing) {
      this.scrollSyncing = !1;
      return;
    }
    this.rowHeightService = this.getRowHeightService(this.itemHeight, this.total);
    const r = this.container.scrollTop, i = this.lastScrollTop >= r, n = !i, a = Math.abs(r - this.lastScrollTop);
    this.lastScrollTop = r;
    let o = this.rowHeightService.index(r), l = this.rowHeightService.offset(o);
    const { offsetHeight: d } = this.container, u = this.rowHeightService.index(r + d);
    if (n && u >= this.lastLoaded && this.lastLoaded < this.total) {
      const p = o + this.pageSize - this.total;
      p > 0 && (o = o - p, l = this.rowHeightService.offset(o)), this.firstLoaded = o, this.translateTo(l);
      const h = this.firstLoaded + this.pageSize;
      this.lastLoaded = Math.min(h, this.total), this.changePage(this.firstLoaded, t);
    } else if (i && o - 1 <= this.firstLoaded) {
      const p = a === this.itemHeight;
      if (this.skip === 0 && p)
        this.lastScrollTop = 0, this.firstLoaded = 0, this.lastLoaded = this.pageSize, this.container.scrollTop = 0, this.translateTo(0, !0);
      else {
        const h = Math.floor(this.pageSize * 0.3);
        this.firstLoaded = Math.max(o - h, 0), this.translateTo(this.rowHeightService.offset(this.firstLoaded)), this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total), this.changePage(this.firstLoaded, t);
      }
    }
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let zy = class {
  navigate(t) {
    const r = t.keyCode;
    if (r === z.up || r === z.left)
      return this.next({
        current: t.current,
        min: t.min,
        max: t.max,
        step: t.skipItems ? t.skipItems : -1
      });
    if (r === z.down || r === z.right)
      return this.next({
        current: t.current,
        min: t.min,
        max: t.max,
        step: t.skipItems ? t.skipItems : 1
      });
    if (r === z.home)
      return 0;
    if (r === z.end)
      return t.max;
  }
  next(t) {
    return Gi(t.current) ? Math.min(t.max, Math.max(t.current + t.step, t.min)) : t.min;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ua = class Rh {
  constructor(t) {
    this.wrapper = null, this.list = null, this.vs = new Ay(), this.navigation = new zy(), this.handleItemClick = (r, i) => {
      const n = this.initState();
      n.syntheticEvent = i, i.stopPropagation(), this.component.handleItemSelect(r, n), this.togglePopup(n), this.applyState(n);
    }, this.handleFocus = (r) => {
      if (!this.component.state.focused) {
        const i = this.initState();
        i.data.focused = !0, i.events.push({ type: "onFocus" }), i.syntheticEvent = r, this.applyState(i);
      }
    }, this.filterChanged = (r, i) => {
      const { textField: n, filterable: a } = this.component.props;
      a && i.events.push({
        type: "onFilterChange",
        filter: {
          field: n,
          operator: "contains",
          ignoreCase: !0,
          value: r
        }
      });
    }, this.togglePopup = (r) => {
      const i = this.component.props, n = i.opened !== void 0 ? i.opened : this.component.state.opened;
      i.opened === void 0 && (r.data.opened = !n), n ? r.events.push({ type: "onClose" }) : (r.events.push({ type: "onOpen" }), this.calculatePopupWidth());
    }, this.pageChange = (r, i) => {
      const n = this.initState();
      n.syntheticEvent = i, this.triggerOnPageChange(n, r.skip, r.take), this.applyState(n);
    }, this.scrollToVirtualItem = (r, i) => {
      const n = this.vs;
      if (r.skip === 0)
        n.reset();
      else {
        let a = n.translate;
        a === 0 && (n.calcScrollElementHeight(), a = n.itemHeight * r.skip, n.translateTo(a, !0)), i < 0 && a > 0 && (a += n.itemHeight * (r.pageSize / 4)), n.container && (n.container.scrollTop = a), this.scrollToItem(i, !0);
      }
    }, this.scrollPopupByPageSize = (r) => {
      var i, n, a, o, l, d;
      const u = this.vs, p = (n = (i = this.list) == null ? void 0 : i.parentElement) == null ? void 0 : n.scrollTop, h = u.enabled && u.itemHeight ? u.itemHeight : this.list ? this.list.children[0].offsetHeight : 0, m = (o = (a = this.list) == null ? void 0 : a.parentElement) == null ? void 0 : o.offsetHeight;
      p !== void 0 && m !== void 0 && ((d = (l = this.list) == null ? void 0 : l.parentElement) == null || d.scroll({
        top: p + r * Math.floor(m / h) * h
      }));
    }, this.renderScrollElement = () => {
      const r = this.vs;
      return r.enabled && /* @__PURE__ */ s.createElement("div", { ref: (i) => {
        r.scrollElement = i;
      }, key: "scrollElementKey" });
    }, this.resetGroupStickyHeader = (r, i) => {
      r !== i.state.group && i.setState({ group: r });
    }, this.listBoxId = t.props.id + "list", this.guid = t.props.id, this.component = t, this.vs.PageChange = this.pageChange;
  }
  didUpdate() {
    this.vs.listTransform && this.vs.list && (this.vs.list.style.transform = this.vs.listTransform, this.vs.listTransform = "");
  }
  didMount() {
    const t = this.component.props, r = t.popupSettings || {}, i = t.style || {}, n = r.width;
    let a = t.opened === !0;
    n === void 0 && this.calculatePopupWidth(), t.dir === void 0 && i.direction === void 0 && (this.calculateDir(), a = !0), a && this.component.forceUpdate();
  }
  calculateDir() {
    const t = this.component.element;
    t && t.ownerDocument && t.ownerDocument.defaultView && (this.dirCalculated = t.ownerDocument.defaultView.getComputedStyle(t).direction || void 0);
  }
  calculatePopupWidth() {
    this.wrapper && (this.popupWidth = this.wrapper.offsetWidth + "px");
  }
  scrollToItem(t, r, i) {
    const n = this.list || this.vs.list;
    if (!n && !i && setTimeout(() => {
      this.scrollToItem(t, r, !0);
    }, 10), t === 0 && r && this.vs.skip === 0) {
      this.vs.reset();
      return;
    }
    if (n && t >= 0) {
      const a = this.vs, o = a.container || n.parentNode, l = r !== void 0 ? r : a.enabled;
      Cy(o, n, t, a.translate, l);
    }
  }
  updateComponentArgs(t) {
    for (let r in t)
      Object.hasOwnProperty.call(t, r) && (this.component[r] = t[r]);
  }
  initState() {
    return {
      data: {},
      events: [],
      syntheticEvent: void 0
    };
  }
  applyState(t) {
    Object.keys(t.data).length > 0 && this.component.setState(t.data);
    const r = {
      syntheticEvent: t.syntheticEvent,
      nativeEvent: t.syntheticEvent ? t.syntheticEvent.nativeEvent : void 0,
      target: this.component,
      value: this.component.value
    };
    t.events.forEach((i) => {
      const n = i.type;
      delete i.type;
      const a = n && this.component.props[n];
      a && a.call(void 0, {
        ...r,
        ...i
      });
    });
  }
  triggerOnPageChange(t, r, i) {
    const n = this.component.props.virtual;
    if (n) {
      const a = Math.min(Math.max(0, r), Math.max(0, n.total - i));
      a !== n.skip && t.events.push({
        type: "onPageChange",
        page: { skip: a, take: i }
      });
    }
  }
  triggerPageChangeCornerItems(t, r) {
    const i = this.component.props, { data: n = [], dataItemKey: a, virtual: o } = i, l = i.opened !== void 0 ? i.opened : this.component.state.opened;
    t && o && this.vs.enabled && (o.skip > 0 && nr(t, n[0], a) ? this.triggerOnPageChange(r, o.skip - 1, o.pageSize) : !l && o.skip + o.pageSize < o.total && nr(t, n[n.length - 1], a) && this.triggerOnPageChange(r, o.skip + 1, o.pageSize));
  }
  getPopupSettings() {
    return Object.assign({}, Rh.defaultProps.popupSettings, this.component.props.popupSettings);
  }
  getAdaptiveAnimation() {
    const t = this.getPopupSettings();
    return t.animate !== void 0 ? t.animate : !0;
  }
  getGroupedDataModernMode(t, r) {
    const i = [];
    return t.forEach((n, a) => {
      t[a - 1] && n[r] !== t[a - 1][r] && i.push({ [r]: n[r] }), i.push(t[a]);
    }), i;
  }
};
ua.basicPropTypes = {
  opened: c.bool,
  disabled: c.bool,
  dir: c.string,
  tabIndex: c.number,
  accessKey: c.string,
  data: c.array,
  textField: c.string,
  className: c.string,
  label: c.string,
  loading: c.bool,
  popupSettings: c.shape({
    animate: c.oneOfType([
      c.bool,
      c.shape({
        openDuration: c.number,
        closeDuration: c.number
      })
    ]),
    popupClass: c.string,
    className: c.string,
    appendTo: c.any,
    width: c.oneOfType([c.string, c.number]),
    height: c.oneOfType([c.string, c.number])
  }),
  onOpen: c.func,
  onClose: c.func,
  onFocus: c.func,
  onBlur: c.func,
  onChange: c.func,
  itemRender: c.func,
  listNoDataRender: c.func,
  focusedItemIndex: c.func,
  header: c.node,
  footer: c.node
}, ua.propTypes = {
  ...ua.basicPropTypes,
  value: c.any,
  defaultValue: c.any,
  filterable: c.bool,
  filter: c.string,
  virtual: c.shape({
    pageSize: c.number.isRequired,
    skip: c.number.isRequired,
    total: c.number.isRequired
  }),
  onFilterChange: c.func,
  onPageChange: c.func
}, ua.defaultProps = {
  popupSettings: {
    height: "200px"
  },
  required: !1,
  validityStyles: !0
};
let Oh = ua;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Hy = {
  name: "@progress/kendo-react-dropdowns",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1748961941,
  version: "11.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const By = (e) => {
  const {
    footer: t,
    windowWidth: r = 0,
    mobileFilter: i,
    children: n,
    navigatable: a,
    navigatableElements: o,
    expand: l,
    animation: d,
    title: u,
    subTitle: p,
    onClose: h
  } = e, m = Go(), f = {
    navigatable: a || !1,
    navigatableElements: o || [],
    expand: l,
    animation: d !== !1,
    suffixActions: /* @__PURE__ */ s.createElement(
      Ct,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        size: "large",
        themeColor: "primary",
        svgIcon: _p,
        onClick: h
      }
    ),
    filter: i,
    onClose: h,
    animationStyles: m && r <= m.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: u,
    subTitle: p,
    className: "k-adaptive-actionsheet",
    position: m && r <= m.small ? "fullscreen" : void 0
  };
  return /* @__PURE__ */ s.createElement(cs, { ...f }, n, t && /* @__PURE__ */ s.createElement(ls, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ s.createElement(
    Ct,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": t.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onCancel
    },
    t.cancelText
  ), /* @__PURE__ */ s.createElement(
    Ct,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": t.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onApply
    },
    t.applyText
  )));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vy = "Please select a value from the list!", za = s.forwardRef((e, t) => {
  let r = !1;
  const i = Pn(jy, e), {
    delay: n = li.delay,
    tabIndex: a = li.tabIndex,
    ignoreCase: o = li.ignoreCase,
    size: l = li.size,
    rounded: d = li.rounded,
    fillMode: u = li.fillMode,
    groupMode: p = li.groupMode
  } = i;
  if (i.filterable || i.virtual) {
    const S = [];
    i.filterable && S.push("filterable"), i.virtual && S.push("virtualization"), r = !fc(Hy, {
      component: "DropDownList",
      features: S
    });
  }
  const h = Ut(), m = Zo(i.id), f = () => {
    var S;
    if (sr)
      return ((S = q.current) == null ? void 0 : S.ownerDocument) || window.document;
  }, b = () => {
    var S, j;
    (S = P?.current) != null && S.wrapper && ((j = P?.current) == null || j.wrapper.focus({ preventScroll: !0 }));
  }, x = () => {
    let S;
    return ct.current !== void 0 && ct.current !== null ? S = ct.current : i.value !== void 0 ? S = i.value : B.value !== void 0 && B.value !== null ? S = B.value : i.defaultValue !== void 0 && i.defaultValue !== null && (S = i.defaultValue), !Gi(S) && i.defaultItem !== void 0 && i.defaultItem !== null && (S = i.defaultItem), S;
  }, w = () => {
    const { dataItemKey: S } = i, j = br(i), ae = x();
    return j.findIndex((be) => nr(be, ae, S));
  }, y = () => i.required !== void 0 ? i.required : li.required, E = () => {
    const S = i.validationMessage !== void 0, j = x(), ae = !y() || j !== null && j !== "" && j !== void 0, be = i.valid !== void 0 ? i.valid : ae;
    return {
      customError: S,
      valid: be,
      valueMissing: j === null
    };
  }, C = () => i.validityStyles !== void 0 ? i.validityStyles : li.validityStyles, R = (S) => {
    We.current = !0, S.focus(), window.setTimeout(() => We.current = !1, 30);
  }, N = () => {
    qe.current && R(qe.current), i.adaptive && setTimeout(() => {
      qe.current && R(qe.current);
    }, 300);
  }, O = s.useCallback((S) => {
    for (const j of S)
      er(j.target.clientWidth);
  }, []), T = () => {
    var S;
    (S = Se.current) != null && S.setCustomValidity && Se.current.setCustomValidity(
      E().valid ? "" : i.validationMessage || Vy
    );
  }, k = (S, j) => {
    const ae = x();
    nr(ae, S, i.dataItemKey) || (i.value === void 0 && (j.data.value = S), P.current.updateComponentArgs({ value: S }), ct.current = S, j.events.push({ type: "onChange" }));
  }, W = (S) => {
    var j;
    (j = P?.current) == null || j.applyState(S), ct.current = void 0;
  }, H = (S, j) => {
    var ae;
    const { virtual: be, dataItemKey: De, defaultItem: Ze } = i, Ke = br(i), Ne = be ? be.skip : 0, Fe = x(), Xe = S === -1 && Ze !== void 0 ? Ze : Ke[S - Ne], Qt = !nr(Xe, Fe, De);
    k(Xe, j), Qt && ((ae = P?.current) == null || ae.triggerPageChangeCornerItems(Xe, j));
  }, Y = (S, j, ae) => {
    var be, De;
    const { defaultItem: Ze, dataItemKey: Ke, virtual: Ne = { skip: 0, total: 0, pageSize: 0 } } = i, Fe = x(), Xe = br(i), Qt = (be = P?.current) == null ? void 0 : be.vs, Jt = Xe.findIndex((tr) => nr(tr, Fe, Ke)), Ot = (De = P?.current) == null ? void 0 : De.navigation.navigate({
      current: Ne.skip + Jt,
      max: (Qt != null && Qt.enabled ? Ne.total : Xe.length) - 1,
      min: Ze !== void 0 ? -1 : 0,
      keyCode: j,
      skipItems: ae || void 0
    });
    Ot !== void 0 && H(Ot, S), W(S);
  }, K = (S) => {
    q.current = S, P.current.wrapper = S;
  }, _ = (S) => /* @__PURE__ */ s.createElement(
    "select",
    {
      name: i.name,
      ref: (j) => {
        Se.current = j;
      },
      tabIndex: -1,
      "aria-hidden": !0,
      title: i.label,
      style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
    },
    /* @__PURE__ */ s.createElement("option", { value: i.valueMap ? i.valueMap.call(void 0, S) : S })
  ), X = () => {
    const {
      textField: S,
      dataItemKey: j,
      virtual: ae = { skip: 0 },
      focusedItemIndex: be = Sy,
      filterable: De,
      skipDisabledItems: Ze = !0
    } = i, Ke = x(), Ne = br(i), Fe = i.filter ? i.filter : B.text;
    return Ze && S && !Fe && !Ke ? Ne.findIndex((Xe) => !Xe.disabled && Xe[S]) : Gi(Ke) && Fe === void 0 || De && Fe === "" ? Ne.findIndex((Xe) => nr(Xe, Ke, j)) : Fe ? Lt.current ? be(Ne, Fe, S) : Ne.findIndex((Xe) => nr(Xe, Ke, j)) : ae.skip === 0 ? 0 : -1;
  }, A = (S, j) => j !== void 0 && j !== -1 && S && S.length > 0 && S[j].disabled, L = () => {
    const S = br(i), j = P.current.initState(), ae = X();
    A(S, ae) && (k(null, j), W(j));
  }, J = (S) => {
    if (S.isPropagationStopped())
      return;
    const j = P.current.initState();
    j.syntheticEvent = S, B.focused || (j.data.focused = !0), L(), P.current.togglePopup(j), W(j);
  }, D = (S) => {
    var j, ae, be, De, Ze, Ke, Ne;
    S && S.target instanceof Element && S.target.nodeName === "INPUT" && S.stopPropagation && S.stopPropagation();
    const {
      filterable: Fe,
      disabled: Xe,
      defaultItem: Qt,
      leftRightKeysNavigation: Jt = !0,
      virtual: Ot = { skip: 0, total: 0, pageSize: 0 },
      dataItemKey: tr,
      groupField: yt = "",
      textField: nt,
      skipDisabledItems: gr = !0
    } = i, Ge = br(i), Qn = x(), vr = Ge.findIndex((Ht) => nr(Ht, Qn, tr)), Wr = i.opened !== void 0 ? i.opened : B.opened, Ie = S.keyCode, oi = Ie === z.home || Ie === z.end, xs = Ie === z.up || Ie === z.down, sn = !Wr && (S.altKey && Ie === z.down || Ie === z.enter || Ie === z.space), _a = Wr && (S.altKey && Ie === z.up || Ie === z.esc), Jn = Jt && (Ie === z.left || Ie === z.right), Tf = xs || Jn && !Fe || oi, qt = P.current.initState();
    if (qt.syntheticEvent = S, !Xe) {
      if (oi && (j = P?.current) != null && j.vs.enabled)
        Ie === z.home ? Ot.skip !== 0 ? ((ae = P?.current) == null || ae.triggerOnPageChange(qt, 0, Ot.pageSize), bt.current = !0) : k(Ge[0], qt) : Ot.skip < Ot.total - Ot.pageSize ? ((be = P?.current) == null || be.triggerOnPageChange(
          qt,
          Ot.total - Ot.pageSize,
          Ot.pageSize
        ), bt.current = !0) : k(Ge[Ge.length - 1], qt);
      else if (Wr && Ie === z.pageUp)
        S.preventDefault(), (De = P?.current) == null || De.scrollPopupByPageSize(-1);
      else if (Wr && Ie === z.pageDown)
        S.preventDefault(), (Ze = P?.current) == null || Ze.scrollPopupByPageSize(1);
      else if (Wr && Ie === z.enter) {
        const Ht = X();
        A(Ge, Ht) ? (k(null, qt), W(qt)) : H(Ht, qt), (Ke = P?.current) == null || Ke.togglePopup(qt), S.preventDefault();
      } else if (sn || _a)
        _a && L(), (Ne = P?.current) == null || Ne.togglePopup(qt), S.preventDefault();
      else if (Tf) {
        if (Lt.current = !1, yt !== "" && nt)
          if (!gr && Wr)
            Y(qt, Ie);
          else {
            let Ht;
            if (Ie === z.down || Ie === z.right) {
              const wt = Ge.slice(vr + 1).find((et) => !et.disabled && et[nt]);
              Ht = wt && Ge.findIndex((et) => et[nt] === wt[nt]);
            } else if (Ie === z.up || Ie === z.left) {
              let wt;
              if (vr === 0 && Qt)
                Ht = -1;
              else if (vr === -1)
                wt = Ge, Ht = Ge.findIndex((et) => !et.disabled && et[nt]);
              else {
                wt = Ge.slice(0, vr);
                let et = wt.pop();
                for (; et && et.disabled; )
                  et = wt.pop();
                Ht = et && Ge.findIndex((bs) => bs[nt] === et[nt]);
              }
            }
            if (Ht !== void 0) {
              const wt = Ht - vr;
              Y(qt, Ie, wt);
            } else Ht === void 0 && Ge.findIndex((wt) => wt[nt] === Qn[nt]) === Ge.length - 1 && Y(qt, Ie);
          }
        else if (!gr && Wr || oi)
          Y(qt, Ie);
        else if (nt) {
          let Ht;
          if (Ie === z.down || Ie === z.right) {
            const wt = Ge.slice(vr + 1).find((et) => !et.disabled && et[nt]);
            Ht = wt && Ge.findIndex((et) => et[nt] === wt[nt]);
          } else if (Ie === z.up || Ie === z.left) {
            let wt;
            if (vr === 0 && Qt)
              Ht = -1;
            else if (vr === -1)
              wt = Ge, Ht = Ge.find((et) => !et.disabled && et[nt]);
            else {
              wt = Ge.slice(0, vr);
              let et = wt.pop();
              for (; et && et.disabled; )
                et = wt.pop();
              Ht = et && Ge.findIndex((bs) => bs[nt] === et[nt]);
            }
          }
          if (Ht !== void 0) {
            const wt = Ht - vr;
            Y(qt, Ie, wt);
          } else Ht === void 0 && Ge.findIndex((wt) => wt[nt] === Qn[nt]) === Ge.length - 1 && Y(qt, Ie);
        } else
          Y(qt, Ie);
        S.preventDefault();
      }
      W(qt);
    }
  }, F = (S) => {
    const j = P.current.initState();
    j.syntheticEvent = S.syntheticEvent, i.filter === void 0 && (j.data.text = S.target.value), P.current.filterChanged(S.target.value, j), Lt.current = !0, W(j), At({ group: void 0, text: String(S.target.value) });
  }, te = (S) => {
    const j = i.filter !== void 0 ? i.filter : B.text;
    return i.filterable && /* @__PURE__ */ s.createElement(
      jc,
      {
        value: j,
        ref: (ae) => {
          qe.current = ae && ae.element;
        },
        onChange: F,
        onKeyDown: D,
        size: S ? "large" : l,
        rounded: d,
        fillMode: u,
        renderListFilterWrapper: !0,
        placeholder: dr.toLanguageString(
          Bl,
          Vl[Bl]
        )
      }
    );
  }, ce = (S) => {
    var j;
    const ae = P.current.initState();
    ae.syntheticEvent = S, (j = P?.current) == null || j.togglePopup(ae), k(i.defaultItem, ae), W(ae);
  }, se = () => {
    const { textField: S, defaultItem: j, dataItemKey: ae } = i, be = x();
    return j !== void 0 && /* @__PURE__ */ s.createElement(
      Dy,
      {
        defaultItem: j,
        textField: S,
        selected: nr(be, j, ae),
        key: "defaultitemkey",
        onClick: ce
      }
    );
  }, ie = (S, j) => {
    var ae;
    (ae = P?.current) == null || ae.handleItemClick(S, j), ct.current = void 0;
  }, He = (S) => {
    const { vs: j, list: ae } = P.current;
    j.scrollHandler(S);
    const { groupField: be } = i;
    let De = br(i);
    if (!(!be || !De.length) && be) {
      const Ze = Pe.current = Pe.current || (j.enabled ? j.itemHeight : ae ? ae.children[0].offsetHeight : 0), Ke = S.target.scrollTop - j.skip * Ze;
      De = P.current.getGroupedDataModernMode(De, be);
      let Ne = De[0][be];
      for (let Fe = 1; Fe < De.length && !(Ze * Fe > Ke); Fe++)
        De[Fe] && De[Fe][be] && (Ne = De[Fe][be]);
      Ne !== B.group && At({ group: Ne });
    }
  }, V = () => {
    var S;
    const {
      textField: j,
      dataItemKey: ae,
      virtual: be = { skip: 0, total: void 0 },
      groupHeaderItemRender: De,
      listNoDataRender: Ze,
      itemRender: Ke
    } = i, Ne = br(i), Fe = h && h.uDropDownList, Xe = P.current.vs, Qt = be.skip, Jt = i.opened !== void 0 ? i.opened : B.opened, Ot = P.current.getPopupSettings(), tr = `translateY(${Xe.translate}px)`, yt = x();
    return /* @__PURE__ */ s.createElement(
      Ly,
      {
        id: ht,
        show: Jt,
        data: Ne.slice(),
        focusedIndex: X(),
        value: yt,
        textField: j,
        valueField: ae,
        optionsGuid: Ye,
        groupField: i.groupField,
        groupMode: "modern",
        listRef: (nt) => {
          Xe.list = P.current.list = nt;
        },
        wrapperStyle: { maxHeight: Ae ? void 0 : Ot.height },
        wrapperCssClass: M(Nr.listContent({ c: Fe })),
        listStyle: Xe.enabled ? { transform: tr } : void 0,
        key: "listkey",
        skip: Qt,
        onClick: ie,
        itemRender: Ke,
        groupHeaderItemRender: De,
        noDataRender: Ze,
        onScroll: He,
        wrapperRef: Xe.scrollerRef,
        scroller: (S = P?.current) == null ? void 0 : S.renderScrollElement(),
        ariaSetSize: be.total
      }
    );
  }, fe = () => {
    const { groupField: S } = i, j = br(i), ae = i.opened !== void 0 ? i.opened : B.opened, be = h && h.uDropDownList, De = {
      title: i.adaptiveTitle || i.label,
      subTitle: i.adaptiveSubtitle,
      expand: ae,
      onClose: (Ke) => J(Ke),
      windowWidth: Dt,
      mobileFilter: te(!0)
    };
    let { group: Ze } = B;
    return Ze === void 0 && S !== void 0 && (Ze = Ar(j[0], S)), /* @__PURE__ */ s.createElement(By, { ...De }, /* @__PURE__ */ s.createElement(Aa, null, /* @__PURE__ */ s.createElement("div", { className: M(Nr.listContainer({ c: be, popup: !1 })) }, $e())));
  }, Ve = () => {
    B.focused && window.setTimeout(() => {
      B.focused && P.current.wrapper && R(P.current.wrapper);
    });
  }, _e = (S) => {
    "onMouseDownOutside" in (i.popupSettings || {}) && i.popupSettings.onMouseDownOutside.call(void 0, S);
  }, Oe = () => {
    const { header: S, footer: j, dir: ae, groupField: be, groupStickyHeaderItemRender: De, list: Ze } = i, Ke = br(i), Ne = P.current, Fe = Ne.getPopupSettings(), Xe = i.opened !== void 0 ? i.opened : B.opened, Qt = Fe.width !== void 0 ? Fe.width : Ne.popupWidth, Jt = h && h.uDropDownList, Ot = {
      dir: ae !== void 0 ? ae : Ne.dirCalculated,
      width: Qt,
      popupSettings: {
        ...Fe,
        popupClass: M(
          Fe.popupClass,
          Nr.listContainer({
            c: Jt,
            popup: !0
          })
        ),
        anchor: Fe.anchor || q.current,
        show: Xe,
        onOpen: N,
        onClose: Ve,
        onMouseDownOutside: _e
      },
      itemsCount: [Ke.length]
    };
    let { group: tr } = B;
    return tr === void 0 && be !== void 0 && (tr = Ar(Ke[0], be)), /* @__PURE__ */ s.createElement(Sb, { ...Ot }, te(!1), S && /* @__PURE__ */ s.createElement("div", { className: M(Nr.listHeader({ c: Jt })) }, S), /* @__PURE__ */ s.createElement(
      "div",
      {
        className: M(
          Nr.list({
            c: Jt,
            size: l,
            virtual: P.current.vs.enabled
          })
        )
      },
      se(),
      !Ze && tr && Ke.length !== 0 && /* @__PURE__ */ s.createElement(Kd, { group: tr, groupMode: "modern", render: De }),
      V()
    ), j && /* @__PURE__ */ s.createElement("div", { className: M(Nr.listFooter({ c: Jt })) }, j), r && /* @__PURE__ */ s.createElement(mc, null));
  }, $e = () => {
    const { header: S, footer: j, groupStickyHeaderItemRender: ae, groupField: be, list: De } = i, Ze = br(i), Ke = h && h.uDropDownList;
    let { group: Ne } = B;
    return Ne === void 0 && be !== void 0 && (Ne = Ar(Ze[0], be)), /* @__PURE__ */ s.createElement(s.Fragment, null, S && /* @__PURE__ */ s.createElement("div", { className: M(Nr.listHeader({ c: Ke })) }, S), /* @__PURE__ */ s.createElement(
      "div",
      {
        className: M("k-list", {
          [`k-list-${Ae ? "lg" : Je[l] || l}`]: l
        })
      },
      !De && Ne && Ze.length !== 0 && /* @__PURE__ */ s.createElement(Kd, { group: Ne, groupMode: "modern", render: ae }),
      V()
    ), j && /* @__PURE__ */ s.createElement("div", { className: "k-list-footer" }, j));
  }, Et = (S) => {
    const { dataItemKey: j } = i, ae = br(i), be = x();
    let De = ae.map((gr, Ge) => ({ item: gr, itemIndex: Ge }));
    const Ze = Ee.current.word, Ke = Ee.current.last, Ne = $y(Ze, Ke);
    let Fe = De.length, Xe = Math.max(
      0,
      ae.findIndex((gr) => nr(gr, be, j))
    ), Qt;
    i.defaultItem && (Qt = { item: i.defaultItem, itemIndex: -1 }, Fe += 1, Xe += 1), Xe += Ne ? 1 : 0, De = ky(De, Xe, Qt);
    let Jt, Ot, tr, yt = 0;
    const { textField: nt } = i;
    for (; yt < Fe; ) {
      if (Jt = Ar(De[yt].item, nt), Ot = Ne && Xd(Jt, Ke, o), tr = Xd(Jt, Ze, o), Ot || tr) {
        yt = De[yt].itemIndex;
        break;
      }
      yt++;
    }
    if (yt !== Fe) {
      const gr = P.current.initState();
      gr.syntheticEvent = S, H(yt, gr), W(gr), ct.current = void 0;
    }
  }, Ce = (S) => {
    clearTimeout(je.current), i.filterable || (je.current = window.setTimeout(() => Ee.current.word = "", n), Et(S));
  }, Rt = (S) => {
    We.current || P.current.handleFocus(S);
  }, de = (S) => {
    if (We.current || !B.focused)
      return;
    const j = i.opened !== void 0 ? i.opened : B.opened, ae = P.current.initState();
    ae.syntheticEvent = S, ae.data.focused = !1, ae.events.push({ type: "onBlur" }), j && L(), j && !Ae && P.current.togglePopup(ae), W(ae);
  }, Zt = (S) => {
    if (i.filterable || S.which === 0 || S.keyCode === z.enter)
      return;
    let j = String.fromCharCode(S.charCode || S.keyCode);
    o && (j = j.toLowerCase()), j === " " && S.preventDefault(), Ee.current = {
      word: Ee.current.word + j,
      last: Ee.current.last + j
    }, Ce(S);
  }, me = () => {
    const S = P.current.initState();
    S.data.opened = B.opened, P.current.togglePopup(S), W(S);
  }, ut = s.useRef(null), q = s.useRef(null), Se = s.useRef(null), qe = s.useRef(null);
  s.useImperativeHandle(
    ut,
    () => ({
      get element() {
        return q.current;
      },
      get index() {
        return w();
      },
      get name() {
        return i.name;
      },
      get validity() {
        return E();
      },
      get value() {
        return x();
      },
      get focused() {
        return B.focused;
      },
      get opened() {
        return B.opened;
      },
      focus: b,
      props: i,
      togglePopup: me
    })
  ), s.useImperativeHandle(
    t,
    () => ut.current
  );
  const je = s.useRef(null), Ee = s.useRef({ word: "", last: "" }), We = s.useRef(!1), ct = s.useRef(null), bt = s.useRef(!1), Lt = s.useRef(!1), Pt = s.useRef({}), ge = s.useRef({}), P = s.useRef(
    new Oh({
      props: i,
      setState: () => {
      },
      state: {},
      forceUpdate: () => {
      },
      element: null,
      value: null,
      handleItemSelect: () => {
      }
    })
  ), Pe = s.useRef(0), pt = s.useRef(null), [B, ke] = s.useState({}), [Dt, er] = s.useState(), [, cr] = s.useReducer((S) => S, !0), dr = tn(), At = (S) => {
    ke({ ...B, ...S });
  };
  s.useEffect(() => {
    P.current.updateComponentArgs({
      props: i,
      setState: At,
      state: B,
      forceUpdate: cr,
      element: q.current,
      handleItemSelect: H,
      value: x()
    });
  }, [At, B, cr, H, x]), s.useEffect(() => {
    var S, j, ae, be, De, Ze, Ke, Ne, Fe, Xe, Qt, Jt, Ot;
    const { dataItemKey: tr, virtual: yt, groupField: nt = "", textField: gr } = i, Ge = br(i), Qn = Pt.current.virtual ? Pt.current.virtual.total : 0, vr = i.opened !== void 0 ? i.opened : B.opened, Wr = Pt.current.opened !== void 0 ? Pt.current.opened : ge.current.opened, Ie = !Wr && vr;
    if ((S = P?.current) == null || S.didUpdate(), (j = P?.current) != null && j.getPopupSettings().animate || Ie && N(), yt && yt.total !== Qn)
      (ae = P?.current) == null || ae.vs.calcScrollElementHeight(), (be = P?.current) == null || be.vs.reset();
    else {
      const oi = x(), xs = Pt.current.value !== void 0 ? Pt.current.value : ge.current.value;
      let sn = Ge.findIndex((Jn) => nr(Jn, oi, tr));
      nt !== "" && oi && gr && (sn = (Ze = (De = P?.current) == null ? void 0 : De.getGroupedDataModernMode(Ge, nt)) == null ? void 0 : Ze.map((Jn) => Jn[gr]).indexOf(oi[gr]));
      const _a = !nr(xs, oi, tr);
      Ie && yt ? (Ke = P?.current) == null || Ke.scrollToVirtualItem(yt, sn) : Ie && !yt ? (N(), Ge && Ge.length !== 0 && ((Ne = P?.current) == null || Ne.resetGroupStickyHeader(Ge[0][nt], {
        setState: At,
        group: B.group,
        state: B
      })), (Fe = P?.current) == null || Fe.scrollToItem(sn)) : vr && Wr && oi && _a && !bt.current ? (Qt = P?.current) == null || Qt.scrollToItem(sn, (Xe = P?.current) == null ? void 0 : Xe.vs.enabled) : vr && Wr && bt.current && (bt.current && yt && yt.skip === 0 ? (Jt = P?.current) == null || Jt.vs.reset() : bt.current && yt && yt.skip === yt.total - yt.pageSize && ((Ot = P?.current) == null || Ot.vs.scrollToEnd()));
    }
    bt.current = !1, ge.current = B, Pt.current = i, T();
  }), s.useEffect(() => {
    var S, j;
    return pt.current = sr && window.ResizeObserver && new window.ResizeObserver(O.bind(void 0)), (S = P?.current) == null || S.didMount(), T(), (j = f()) != null && j.body && pt.current && pt.current.observe(f().body), () => {
      var ae;
      (ae = f()) != null && ae.body && pt.current && pt.current.disconnect();
    };
  }, []);
  const zt = m + "-accessibility-id", ht = m + "-listbox-id", Ye = m + "-guid", _t = dr.toLanguageString(
    Hl,
    Vl[Hl]
  ), {
    style: mr,
    className: U,
    label: he,
    dir: ft,
    virtual: Sr,
    adaptive: Ai,
    dataItemKey: ms,
    disabled: rn,
    loading: vi,
    iconClassName: _n,
    svgIcon: gs,
    valueRender: Ua
  } = i, qn = i.opened !== void 0 ? i.opened : B.opened, nn = x(), Yn = Ar(nn, i.textField), Kn = !C() || E().valid, zi = P.current, vs = zi.vs, xi = h && h.uDropDownList;
  vs.enabled = Sr !== void 0;
  const ne = Go(), Ae = !!(Dt && ne && Dt <= ne.medium && i.adaptive);
  Sr !== void 0 && (zi.vs.skip = Sr.skip, zi.vs.total = Sr.total, zi.vs.pageSize = Sr.pageSize);
  const Or = br(i), { focused: an } = B, Xn = Or.findIndex((S) => nr(S, nn, ms)), on = /* @__PURE__ */ s.createElement("span", { id: zt, className: M(Nr.inputInner({ c: xi })) }, Yn && /* @__PURE__ */ s.createElement("span", { className: M(Nr.inputText({ c: xi })) }, Yn)), Gn = Ua !== void 0 ? Ua.call(void 0, on, nn) : on, Zn = /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    "span",
    {
      ref: K,
      className: M(
        Nr.wrapper({
          c: xi,
          size: l,
          rounded: d,
          fillMode: u,
          focused: an,
          disabled: rn,
          invalid: !Kn,
          loading: vi,
          required: y()
        }),
        U
      ),
      style: he ? { ...mr, width: void 0 } : mr,
      dir: ft,
      onMouseDown: qn ? (S) => {
        S.target.nodeName !== "INPUT" && (R(P.current.wrapper), S.preventDefault());
      } : void 0,
      onFocus: Ae ? (S) => J(S) : Rt,
      onBlur: de,
      tabIndex: hg(a, rn),
      accessKey: i.accessKey,
      onKeyDown: D,
      onKeyPress: Zt,
      onClick: rn ? void 0 : J,
      role: "combobox",
      "aria-required": y(),
      "aria-disabled": rn || void 0,
      "aria-haspopup": "listbox",
      "aria-expanded": qn || !1,
      "aria-owns": ht,
      "aria-activedescendant": qn ? "option-" + Ye + "-" + (Xn + (Sr ? Sr.skip : 0)) : void 0,
      "aria-label": i.ariaLabel || i.label,
      "aria-labelledby": i.ariaLabelledBy,
      "aria-describedby": i.ariaDescribedBy || zt,
      "aria-controls": ht,
      id: i.id,
      title: i.title
    },
    Gn,
    vi && /* @__PURE__ */ s.createElement(Li, { className: M(Nr.loadingIcon({ c: xi })), name: "loading" }),
    /* @__PURE__ */ s.createElement(
      Ct,
      {
        tabIndex: -1,
        type: "button",
        "aria-label": _t,
        size: l,
        fillMode: u,
        className: M(Nr.inputButton({ c: xi })),
        rounded: null,
        themeColor: "base",
        iconClass: _n,
        svgIcon: _n ? void 0 : gs || La,
        onMouseDown: (S) => B.focused && S.preventDefault()
      }
    ),
    _(nn),
    !Ae && Oe()
  ), Ae && fe());
  return he ? /* @__PURE__ */ s.createElement(
    as,
    {
      label: he,
      editorValue: Yn,
      editorValid: Kn,
      editorDisabled: i.disabled,
      style: { width: mr ? mr.width : void 0 },
      children: Zn
    }
  ) : Zn;
});
za.propTypes = {
  delay: c.number,
  ignoreCase: c.bool,
  iconClassName: c.string,
  svgIcon: Qo,
  defaultItem: c.any,
  valueRender: c.func,
  valueMap: c.func,
  validationMessage: c.string,
  required: c.bool,
  id: c.string,
  ariaLabelledBy: c.string,
  ariaDescribedBy: c.string,
  ariaLabel: c.string,
  leftRightKeysNavigation: c.bool,
  title: c.string,
  groupField: c.string,
  list: c.any,
  skipDisabledItems: c.bool
};
const li = {
  delay: 500,
  tabIndex: 0,
  ignoreCase: !0,
  ...Oh.defaultProps,
  required: !1,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  groupMode: "modern"
};
za.displayName = "KendoReactDropDownList";
const jy = Ji();
za.displayName = "KendoReactDropDownList";
const ga = (e, t, r) => {
  const i = I.get(e, t);
  I.isFunction(i) && i(r);
}, Nh = ({ className: e, ...t }) => /* @__PURE__ */ $.jsx(
  sm,
  {
    "data-test": "input-label",
    className: oe("rnd-input-label", uc, e),
    ...t
  }
), NS = (e) => /* @__PURE__ */ $.jsx(
  ll,
  {
    "data-test": "country-flag",
    ...e
  }
);
var G = function(e) {
  return e ? new Date(e.getTime()) : null;
}, Ha = function(e, t) {
  var r = G(e);
  return t === 0 && r.getHours() === 23 && r.setHours(r.getHours() + 2), r;
}, Yr = function(e, t) {
  var r = G(e);
  return r.setDate(r.getDate() + t), Ha(r, e.getHours());
}, Tr = function(e, t, r, i, n, a, o) {
  i === void 0 && (i = 0), n === void 0 && (n = 0), a === void 0 && (a = 0), o === void 0 && (o = 0);
  var l = new Date(e, t, r, i, n, a, o);
  return e > -1 && e < 100 && l.setFullYear(l.getFullYear() - 1900), Ha(l, i);
}, Fi = function(e) {
  var t = Tr(e.getFullYear(), e.getMonth() + 1, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return Yr(t, -1);
}, Ws = 12, Wy = function(e, t) {
  return e.getMonth() !== t ? Fi(Wt(e, -1)) : e;
}, Wt = function(e, t) {
  var r = G(e), i = (r.getMonth() + t) % Ws, n = (Ws + i) % Ws;
  return r.setMonth(r.getMonth() + t), Wy(Ha(r, e.getHours()), n);
}, Fh = function(e, t) {
  var r = e.getMonth(), i = Tr(t, r, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return i.getMonth() === r ? i : Fi(Wt(i, -1));
}, Rr = function(e, t) {
  return Ha(Fh(e, e.getFullYear() + t), e.getHours());
}, va = function(e, t) {
  return Rr(e, 100 * t);
}, _r = function(e, t) {
  return Rr(e, 10 * t);
}, Zd = function(e, t) {
  return Yr(e, t * 7);
}, Uy = 864e5, Ho;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ho || (Ho = {}));
var Lh = function(e, t, r) {
  r === void 0 && (r = Ho.Forward);
  var i = G(e), n = (t - i.getDay() + 7 * r) % 7;
  return i.setDate(i.getDate() + n), Ha(i, e.getHours());
}, Bo;
(function(e) {
  e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday";
})(Bo || (Bo = {}));
var ds = function(e, t) {
  return Fh(e, t(e.getFullYear()));
}, Fn = function(e) {
  return ds(e, function(t) {
    return t - t % 100;
  });
}, to = function(e, t) {
  return (Fn(t).getFullYear() - Fn(e).getFullYear()) / 100;
}, Ir = function(e) {
  return ds(e, function(t) {
    return t - t % 10;
  });
}, ro = function(e, t) {
  return (Ir(t).getFullYear() - Ir(e).getFullYear()) / 10;
}, io = function(e, t) {
  return (t.getFullYear() - e.getFullYear()) * 12 + (t.getMonth() - e.getMonth());
}, no = function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, jl = function(e) {
  return Tr(e.getFullYear(), e.getMonth(), 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}, Ph = function(e, t) {
  var r = e.getDate(), i = Tr(e.getFullYear(), t, r, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return i.getDate() === r ? i : Fi(Wt(i, -1));
}, Ah = function(e) {
  return Ph(e, 0);
}, it = function(e) {
  return Tr(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
}, Zi = function(e, t) {
  return !e && !t ? !0 : e && t && e.getTime() === t.getTime();
}, xo = function(e, t) {
  return !e && !t ? !0 : e && t && Zi(it(e), it(t));
}, Wl = function(e) {
  return ds(e, function(t) {
    return t - t % 100 + 90;
  });
}, zh = function(e) {
  return Ph(e, 11);
}, Ul = function(e) {
  return ds(e, function(t) {
    return t - t % 10 + 9;
  });
}, _y = function(e, t) {
  return Lh(e, t, Ho.Backward);
}, qy = function(e, t) {
  return t !== Bo.Monday ? Yr(_y(e, t), 4) : Yr(e, 4 - (e.getDay() || 7));
}, Us = function(e, t) {
  var r = Tr(e.getFullYear(), 0, 1, -6), i = qy(e, t), n = i.getTime() - r.getTime(), a = Math.floor(n / Uy);
  return 1 + Math.floor(a / 7);
}, Yy = function(e, t) {
  t === void 0 && (t = Bo.Monday), e = it(e);
  var r = Yr(e, -7), i = Yr(e, 7), n = Us(e, t);
  return n === 0 ? Us(r, t) + 1 : n === 53 && Us(i, t) > 1 ? 1 : n;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ao = (e) => Math.max(e, 0);
let _s = class {
  constructor(t) {
    this.offset = t;
  }
}, qs = class {
  constructor(t) {
    this.skip = t;
  }
}, Ky = class {
  constructor(t, r) {
    this.onScrollAction = t, this.onPageAction = r, this.direction = "vertical", this.firstLoaded = 0, this.lastLoaded = 0, this.lastScrollTop = 0, this.take = 0, this.total = 0, this.rowHeightService = null, this.bottomOffset = 0, this.topOffset = 0;
  }
  create(t, r, i, n, a = 0, o = 0, l = "vertical") {
    this.rowHeightService = t, this.firstLoaded = r, this.lastLoaded = r + i, this.take = i, this.total = n, this.lastScrollTop = 0, this.topOffset = a, this.bottomOffset = o, this.direction = l;
    const d = this.rowsForHeight(a), u = ao(r - d);
    this.onScrollAction(new _s(this.rowOffset(u))), this.onPageAction(new qs(u));
  }
  onScroll({ scrollLeft: t, scrollTop: r, offsetHeight: i, offsetWidth: n }) {
    const a = this.direction === "vertical" ? r : t, o = this.direction === "vertical" ? i : n;
    if (this.lastScrollTop === a || !this.rowHeightService)
      return;
    const l = this.lastScrollTop >= a;
    this.lastScrollTop = a;
    const d = this.rowHeightService.index(ao(a - this.topOffset)), u = this.rowHeightService.index(ao(a + o - this.bottomOffset));
    if (!l && u >= this.lastLoaded && this.lastLoaded < this.total && (this.firstLoaded = d, this.onScrollAction(new _s(this.rowOffset(d))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new qs(this.firstLoaded))), l && d <= this.firstLoaded) {
      const p = Math.floor(this.take * 0.3);
      this.firstLoaded = ao(d - p), this.onScrollAction(new _s(this.rowOffset(this.firstLoaded))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new qs(this.firstLoaded));
    }
  }
  rowOffset(t) {
    return this.rowHeightService ? this.rowHeightService.offset(t) + this.topOffset : 0;
  }
  rowsForHeight(t) {
    return this.rowHeightService ? Math.ceil(t / this.rowHeightService.height(0)) : 0;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Xy = (e, t, r) => Math.min(Math.abs(t - e), r), Gy = 17, Zy = 10, Qy = {
  1: (e) => (t) => t + e,
  0: (e) => (t) => t - e
}, Jy = {
  1: (e) => (t) => Math.min(t, e),
  0: (e) => (t) => Math.max(t, e)
}, ew = {
  1: (e) => (t) => t < e,
  0: (e) => (t) => t > e
}, _l = class bo extends s.Component {
  constructor(t) {
    super(t), this.rowHeightService = null, this.scrollContainer = null, this.lastDirection = null, this.lastTotal = 0, this.lastTake = 0, this.animationInProgress = !1, this.restrictScroll = !1, this.scrollTo = (r) => {
      const i = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
      if (!this.scrollContainer)
        return;
      const n = this.scrollContainer[i];
      this.restrictScroll && i === "scrollTop" && (!Number.isInteger(n) || !Number.isInteger(r)) && Math.abs(n - r) < Zy || (this.scrollContainer[i] = r);
    }, this.scrollToIndex = (r) => {
      this.animationInProgress = !1, this.rowHeightService && this.scrollTo(this.rowHeightService.offset(r));
    }, this.animateToIndex = (r) => {
      if (!this.rowHeightService || !window)
        return;
      window.cancelAnimationFrame(this.cancelAnimation);
      const i = this.rowHeightService.offset(r), n = this.getContainerScrollDirection(i), { start: a, end: o } = this.scrollRange(i, n);
      if (a === o)
        return;
      const l = this.scrollStep(a, o), d = Qy[n](l), u = Jy[n](o), p = ew[n](d(o)), h = (m) => {
        this.animationInProgress = !0;
        const f = d(m);
        this.scrollTo(u(f)), p(f) ? this.cancelAnimation = window.requestAnimationFrame(() => {
          h(f);
        }) : this.animationInProgress = !1;
      };
      this.cancelAnimation = window.requestAnimationFrame(() => {
        h(a);
      });
    }, this.scrollToBottom = () => {
      this.rowHeightService && this.scrollTo(this.rowHeightService.totalHeight() + this.props.bottomOffset);
    }, this.scrollStep = (r, i) => {
      const n = this.props.scrollDuration || bo.defaultProps.scrollDuration;
      return Math.abs(i - r) / (n / Gy);
    }, this.scrollRange = (r, i) => {
      const n = this.containerScrollPosition;
      if (parseInt(`${r}`, 10) === parseInt(`${n}`, 10))
        return { start: r, end: r };
      const a = this.containerMaxScroll(), o = i === 0 ? 1 : -1, l = Xy(n, r, this.props.maxScrollDifference || 0), d = Math.min(r, a);
      return { start: Math.min(Math.max(d + o * l, 0), a), end: d };
    }, this.containerMaxScroll = () => this.containerScrollSize - this.containerOffsetSize, this.getContainerScrollDirection = (r) => r < this.containerScrollPosition ? 0 : 1, this.initServices = (r = this.props) => {
      const i = this.direction === "vertical" ? r.itemHeight : r.itemWidth;
      i !== void 0 && (this.rowHeightService = new pp(r.total, i), this.scrollerService.create(
        this.rowHeightService,
        r.skip,
        r.take,
        r.total,
        r.topOffset,
        this.scrollOffsetSize,
        this.direction
      ));
    }, this.getContainerProperty = (r) => this.scrollContainer ? this.scrollContainer[r] : 0, this.handleScroll = (r) => {
      if (!this.scrollContainer || !this.rowHeightService)
        return;
      const i = r.target;
      this.scrollerService.onScroll({
        scrollLeft: i.scrollLeft,
        scrollTop: i.scrollTop,
        offsetHeight: i.offsetHeight,
        offsetWidth: i.offsetWidth
      });
      const n = this.rowHeightService.index(this.containerScrollPosition - this.props.topOffset), { onScrollAction: a } = this.props, o = {
        index: n,
        target: i,
        scrollAction: this.scrollAction,
        pageAction: this.pageAction,
        animationInProgress: this.animationInProgress
      };
      this.props.onScroll && this.props.onScroll.call(void 0, r), a && a.call(void 0, o), this.scrollAction = void 0, this.pageAction = void 0;
    }, this.handleScrollAction = (r) => {
      this.scrollAction = r;
    }, this.handlePageAction = (r) => {
      this.pageAction = r;
    }, this.scrollerService = new Ky(this.handleScrollAction, this.handlePageAction), this.restrictScroll = Number.parseFloat(s.version) > 17;
  }
  get element() {
    return this.scrollContainer;
  }
  get containerOffsetSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
  }
  get containerScrollSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
  }
  get containerScrollPosition() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
  }
  get direction() {
    return this.props.direction !== void 0 ? this.props.direction : bo.defaultProps.direction;
  }
  get scrollOffsetSize() {
    return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : bo.defaultProps.scrollOffsetSize;
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(t) {
    return this.rowHeightService ? this.rowHeightService.index(t) : 0;
  }
  itemOffset(t) {
    return this.rowHeightService ? this.rowHeightService.offset(t) : 0;
  }
  isIndexVisible(t) {
    if (!this.rowHeightService)
      return !1;
    const r = this.containerScrollPosition, i = r + this.containerOffsetSize, n = this.rowHeightService.offset(t), a = n + this.rowHeightService.height(t);
    return n >= r && a <= i;
  }
  isListScrolled(t) {
    return this.rowHeightService ? this.containerScrollPosition !== this.rowHeightService.offset(t) : !1;
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t.call(void 0, this);
  }
  render() {
    const { total: t, take: r, bottomOffset: i, className: n, tabIndex: a, role: o, children: l, unstyled: d } = this.props, u = d && d.uCalendar;
    (this.lastTotal !== t || this.lastDirection !== this.direction || this.lastTake !== r) && (this.initServices(), this.lastTotal = t, this.lastDirection = this.direction, this.lastTake = r);
    const p = `${(this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + i}`, h = this.direction === "vertical" ? { height: `${p}px` } : { width: `${p}px` }, m = M(
      le.scrollableSelector({
        c: u
      }),
      le.scrollable({
        c: u,
        horizontal: this.direction === "horizontal"
      }),
      n
    ), f = M(
      le.scrollablePlaceholder({
        c: u,
        horizontal: this.direction === "horizontal"
      })
    );
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        ref: (b) => {
          this.scrollContainer = b;
        },
        onScroll: this.handleScroll,
        className: m,
        tabIndex: a,
        role: o
      },
      l,
      /* @__PURE__ */ s.createElement("div", { style: h, className: f })
    );
  }
};
_l.propTypes = {
  bottomOffset: c.number.isRequired,
  className: c.string,
  direction: c.oneOf(["horizontal", "vertical"]),
  forceScroll: c.bool,
  itemHeight: c.number,
  itemWidth: c.number,
  maxScrollDifference: c.number,
  onScroll: c.func,
  onScrollAction: c.func,
  scrollDuration: c.number,
  scrollOffsetSize: c.number,
  skip: c.number.isRequired,
  tabIndex: c.number,
  take: c.number.isRequired,
  topOffset: c.number.isRequired,
  total: c.number.isRequired,
  role: c.string
}, _l.defaultProps = {
  direction: "vertical",
  forceScroll: !1,
  scrollOffsetSize: 0,
  maxScrollDifference: 100,
  scrollDuration: 100
};
let Hh = _l;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const tw = (e, t) => {
  const r = Object.getOwnPropertyNames(e), i = Object.getOwnPropertyNames(t);
  if (r.length !== i.length)
    return !1;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (e[a] !== t[a])
      return !1;
  }
  return !0;
};
let rw = class extends s.Component {
  constructor() {
    super(...arguments), this.handleClick = (t) => {
      const { onClick: r, value: i } = this.props;
      r && r.call(void 0, i, t);
    }, this.handleMouseEnter = () => {
      const { onMouseEnter: t, value: r } = this.props;
      t && t.call(void 0, r);
    }, this.handleMouseLeave = () => {
      const { onMouseLeave: t, value: r } = this.props;
      t && t.call(void 0, r);
    };
  }
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the React.PureComponent.
  /**
   * @hidden
   */
  shouldComponentUpdate(t) {
    const { value: r, ...i } = this.props, { value: n, ...a } = t;
    return !((!(r && n) || r.getTime() === n.getTime()) && tw(i, a));
  }
  /* eslint-disable max-len */
  render() {
    const {
      className: t,
      formattedValue: r,
      isWeekend: i,
      isFocused: n,
      isInRange: a,
      isSelected: o,
      isRangeStart: l,
      isRangeMid: d,
      isRangeEnd: u,
      isRangeSplitStart: p,
      isRangeSplitEnd: h,
      isToday: m,
      isDisabled: f,
      view: b,
      value: x,
      isOtherMonth: w,
      showOtherMonthDays: y,
      allowReverse: E,
      unstyled: C,
      ...R
    } = this.props, N = this.props.activeRangeEnd === "end" && u, O = this.props.activeRangeEnd === "start" && l, T = C && C.uCalendar, k = M(
      le.td({
        c: T,
        rangeStart: !w && !E && l,
        rangeEnd: !w && !E && u,
        rangeMid: !w && d,
        rangeSplitEnd: !w && h,
        rangeSplitStart: !w && p,
        active: O || N,
        focused: n,
        selected: !w && (o || l || u),
        today: !w && m,
        weekend: i,
        disabled: f,
        isOtherMonth: w,
        isEmpty: !y && w
      }),
      t
    );
    return !y && w ? /* @__PURE__ */ s.createElement("td", { role: "gridcell", className: k }) : /* @__PURE__ */ s.createElement(
      "td",
      {
        ...R,
        className: k,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      /* @__PURE__ */ s.createElement("span", { className: M(le.link({ c: T })) }, this.props.children)
    );
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const iw = (e) => {
  const { className: t, firstDate: r, weekDays: i, ...n } = e, a = (d) => {
    const { onClick: u } = e;
    u && d && u.call(void 0, r, i || [], d);
  }, o = Ut(), l = o && o.uCalendar;
  return /* @__PURE__ */ s.createElement(
    "td",
    {
      className: M(le.td({ c: l, isWeek: !0 }), t),
      ...n,
      onClick: a
    },
    e.children
  );
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var Be = /* @__PURE__ */ ((e) => (e[e.month = 0] = "month", e[e.year = 1] = "year", e[e.decade = 2] = "decade", e[e.century = 3] = "century", e))(Be || {});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ba = { start: null, end: null };
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function we(e) {
  const t = (i, n, a, ...o) => n[a] === null ? null : (i ? e.isRequired : e)(n, a, ...o), r = t.bind(null, !1);
  return r.isRequired = t.bind(null, !0), r;
}
const Qd = (e, t, r) => t === void 0 || r === void 0 || t <= e && e <= r ? e : e < t ? t : r, Ys = new Date(1980, 0, 1), Va = new Date(1900, 0, 1), ja = new Date(2099, 11, 31), nw = new Date(1980, 0, 1), aw = new Date(1980, 0, 1, 23, 59, 59), xa = (e, t) => {
  const r = G(e);
  return r.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), r;
}, Kr = () => it(/* @__PURE__ */ new Date()), lr = (e, t, r) => !e || !(t && t > e || r && r < e), ow = (e, t, r) => e === null || !(t && it(t) > it(e) || r && it(r) < it(e)), us = (e, t) => {
  const { start: r, end: i } = t || Ba;
  return !r || !i ? !1 : r < e && e < i;
}, Br = (e, t, r = 1) => {
  const i = [];
  for (let n = e; n < t; n = n + r)
    i.push(n);
  return i;
}, Bh = (e, t, r) => t.getTime() <= e.getTime() && e.getTime() <= r.getTime(), sw = (e, t) => e.slice(t).concat(e.slice(0, t)), hi = (e, t, r) => e && (t && e < t ? G(t) : r && e > r ? G(r) : e), ci = (e) => (t, r = "", i = {}) => {
  const n = document.createElement(e);
  return n.className = r, Object.keys(i).forEach((a) => {
    n.style[a] = i[a];
  }), typeof t == "string" ? n.innerHTML = t || "" : (t || []).forEach((a) => a && n.appendChild(a)), n;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let Vh = class {
  constructor(t) {
    this.intl = t;
  }
  getWeekNames(t = !1, r) {
    const i = sw(
      this.intl.dateFormatNames({ nameType: r ?? "short", type: "days" }),
      this.intl.firstDay()
    );
    return t ? [""].concat(i) : i;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Jd = (e, t) => {
  const r = t;
  return /* @__PURE__ */ s.createElement("td", { key: e, role: "gridcell", className: M(le.td({ c: r, isEmpty: !0 })) }, " ");
}, ql = class jh extends s.Component {
  constructor() {
    super(...arguments), this.intl = null, this.weekService = null, this.buildWeekNumber = (t, r) => {
      if (!this.firstDate(t))
        return Jd(`week-cell-${r}`);
      const i = this.firstDate(t), n = this.getWeekNumber(i), a = `kendo-react-calendar-week-cell-${n}`, o = {
        value: n,
        firstDate: i,
        weekDays: t,
        unstyled: this.props.unstyled,
        onClick: this.handleWeekCellClick
      };
      return this.props.weekCell ? /* @__PURE__ */ s.createElement(this.props.weekCell, { ...o, key: a }, n) : /* @__PURE__ */ s.createElement(iw, { ...o, key: a }, n);
    }, this.buildRow = (t) => t.map((r, i) => {
      if (!r)
        return Jd(i);
      const n = { "aria-selected": r.isSelected }, a = `kendo-react-calendar-cell-${r.value.getTime()}`, o = {
        ...n,
        ...r,
        isDisabled: !r.isInRange,
        view: this.props.activeView,
        showOtherMonthDays: this.props.showOtherMonthDays,
        allowReverse: this.props.allowReverse,
        unstyled: this.props.unstyled,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      return this.props.cell ? /* @__PURE__ */ s.createElement(this.props.cell, { ...o, key: a }, r.formattedValue) : /* @__PURE__ */ s.createElement(rw, { ...o, key: a }, r.formattedValue);
    }), this.firstDate = (t) => {
      const r = this.firstWeekDateContext(t);
      return r ? r.value : null;
    }, this.firstWeekDateContext = (t) => {
      if (!this.weekNumber)
        return null;
      let r = 0, i = t[r];
      for (; !i && r < t.length; )
        i = t[++r];
      return i;
    }, this.handleClick = (t, r) => {
      const { onChange: i } = this.props;
      if (i && r) {
        const n = {
          value: G(t),
          target: this,
          nativeEvent: r && r.nativeEvent,
          syntheticEvent: r
        };
        i.call(void 0, n);
      }
    }, this.handleWeekCellClick = (t, r, i) => {
      const { onWeekSelect: n } = this.props, a = r.findIndex((o) => o && o.value === t);
      n && i && n.call(void 0, t, a, i);
    }, this.handleMouseEnter = (t) => {
      const { onCellEnter: r } = this.props;
      r && r.call(void 0, G(t));
    }, this.handleMouseLeave = (t) => {
      const { onCellLeave: r } = this.props;
      r && r.call(void 0, G(t));
    };
  }
  get min() {
    return this.props.min;
  }
  get max() {
    return this.props.max;
  }
  get isHorizontal() {
    return this.props.direction === "horizontal";
  }
  get isMonthView() {
    return this.props.activeView === Be.month;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === Be.month);
  }
  get selectedDate() {
    return this.props.selectedDate !== void 0 ? this.props.selectedDate : jh.defaultProps.selectedDate;
  }
  render() {
    const { service: t, weekDaysFormat: r, cellUID: i, focusedDate: n, bus: a, activeView: o, selectionRange: l, unstyled: d } = this.props, u = d && d.uCalendar;
    this.intl = Rc(this), this.weekService = new Vh(this.intl);
    const p = this.weekService.getWeekNames(this.weekNumber, r), h = t.rowLength(this.weekNumber), m = t.title(this.props.viewDate), f = Kr(), b = xa(this.props.viewDate, f), x = t.data({
      cellUID: i,
      min: this.min,
      max: this.max,
      focusedDate: n,
      isActiveView: !a.canMoveDown(o),
      selectedDate: this.selectedDate,
      selectionRange: l,
      viewDate: b
    });
    return /* @__PURE__ */ s.createElement(s.Fragment, null, this.isMonthView && this.isHorizontal && /* @__PURE__ */ s.createElement("thead", { role: "rowgroup", className: M(le.thead({ c: u })) }, /* @__PURE__ */ s.createElement("tr", { role: "row", className: M(le.tr({ c: u })) }, p.map((w, y) => /* @__PURE__ */ s.createElement("th", { key: y, className: M(le.th({ c: u })) }, w)))), /* @__PURE__ */ s.createElement("tbody", { role: "rowgroup", className: M(le.tbody({ c: u })) }, !this.isHorizontal && /* @__PURE__ */ s.createElement("tr", { role: "presentation", className: M(le.tr({ c: u })) }, /* @__PURE__ */ s.createElement(
      "th",
      {
        scope: "col",
        colSpan: h,
        className: M(le.caption({ c: u }))
      },
      m
    )), x.map((w, y) => /* @__PURE__ */ s.createElement("tr", { role: "row", className: M(le.tr({ c: u })), key: y }, this.weekNumber && this.buildWeekNumber(w, y), this.buildRow(w)))));
  }
  getWeekNumber(t) {
    return !this.weekNumber || !this.intl ? null : Yy(t, this.intl.firstDay());
  }
};
ql.propTypes = {
  activeRangeEnd: c.oneOf(["start", "end", null]),
  activeView: c.number.isRequired,
  cellUID: c.string.isRequired,
  direction: c.oneOf(["horizontal", "vertical"]),
  focusedDate: c.instanceOf(Date).isRequired,
  max: c.instanceOf(Date).isRequired,
  min: c.instanceOf(Date).isRequired,
  onChange: c.func,
  selectedDate: c.oneOfType([c.instanceOf(Date), c.arrayOf(c.instanceOf(Date))]),
  showWeekNumbers: c.bool,
  showOtherMonthDays: c.bool,
  viewDate: c.instanceOf(Date).isRequired
}, ql.defaultProps = {
  direction: "vertical",
  selectedDate: Kr(),
  showWeekNumbers: !1
};
let Wh = ql;
Oc(Wh);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const lw = (e) => {
  const { view: t, ...r } = e;
  return /* @__PURE__ */ s.createElement(Ct, { type: "button", fillMode: "flat", themeColor: "primary", ...r }, e.children);
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yl = class yo extends s.Component {
  constructor() {
    super(...arguments), this.getTitle = () => {
      if (!this.props.currentDate)
        return "";
      const t = this.rangeLength - 1, r = this.props.service.title(this.props.currentDate), i = this.props.service.addToDate(this.props.currentDate, t);
      return t < 1 || !this.props.service.isInRange(i, this.min, this.max) ? r : `${r} - ${this.props.service.title(i)}`;
    }, this.handleTitleClick = (t) => {
      this.canMoveUp && this.props.bus.moveUp(this.props.activeView, t);
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : yo.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : yo.defaultProps.max;
  }
  get rangeLength() {
    return this.props.rangeLength !== void 0 ? this.props.rangeLength : yo.defaultProps.rangeLength;
  }
  get canMoveUp() {
    return this.props.bus.canMoveUp(this.props.activeView);
  }
  render() {
    const { activeView: t, commands: r, unstyled: i } = this.props, n = i && i.uCalendar, a = this.getTitle(), o = M(le.title({ c: n })), l = {
      children: a,
      value: a,
      view: t,
      className: o,
      onClick: this.handleTitleClick,
      disabled: !this.canMoveUp
    }, d = {
      headerTitleProps: l,
      commands: r
    }, u = this.props.headerTitle ? /* @__PURE__ */ s.createElement(this.props.headerTitle, { ...l }, a) : /* @__PURE__ */ s.createElement(lw, { ...l }, a), p = this.props.header ? /* @__PURE__ */ s.createElement(this.props.header, { ...d }) : /* @__PURE__ */ s.createElement(s.Fragment, null, u, /* @__PURE__ */ s.createElement("span", { className: M(le.spacer({ c: n })) }), /* @__PURE__ */ s.createElement("span", { className: M(le.nav({ c: n })) }, this.props.commands));
    return /* @__PURE__ */ s.createElement("div", { className: M(le.header({ c: n, vertical: this.props.verticalView })) }, p);
  }
};
Yl.propTypes = {
  activeView: c.number.isRequired,
  currentDate: c.instanceOf(Date).isRequired,
  max: c.instanceOf(Date).isRequired,
  min: c.instanceOf(Date).isRequired,
  rangeLength: c.number
}, Yl.defaultProps = {
  rangeLength: 1,
  min: Va,
  max: ja
};
let Uh = Yl;
Wp(Uh);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cw = "multiviewcalendar.prevView", dw = "multiviewcalendar.nextView", pa = "dateinput.increment", ha = "dateinput.decrement", Kl = "dateinput.clear", Xl = "calendar.today", Gl = "datepicker.toggleCalendar", uw = "daterangepicker.swapStartEnd", pw = "daterangepicker.start", hw = "daterangepicker.end", fw = "daterangepicker.separator", mw = "datetimepicker.toggleDateTimeSelector", gw = "timepicker.now", vw = "timepicker.selectNow", xw = "timepicker.cancel", bw = "timepicker.set", yw = "timepicker.toggleTimeSelector", ww = "timepicker.toggleClock", $w = "datetimepicker.date", kw = "datetimepicker.time", Cw = "datetimepicker.cancel", Sw = "datetimepicker.set", Ew = "daterangepicker.cancel", Dw = "daterangepicker.set", qi = {
  [Xl]: "Today",
  [gw]: "NOW",
  [bw]: "Set",
  [xw]: "Cancel",
  [$w]: "Date",
  [kw]: "Time",
  [Cw]: "Cancel",
  [Sw]: "Set",
  [Ew]: "Cancel",
  [Dw]: "Set",
  [pw]: "Start",
  [hw]: "End",
  [fw]: " ",
  [vw]: "Select Now",
  [yw]: "Toggle TimeSelector",
  [ww]: "Toggle Clock",
  [pa]: "Increase value",
  [ha]: "Decrease value",
  [Kl]: "clear",
  [Gl]: "Toggle calendar",
  [cw]: "Navigate to previous view",
  [dw]: "Navigate to next view",
  [uw]: "Swap start and end values",
  [mw]: "Toggle date-time selector"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Zl = class Ql extends s.Component {
  constructor() {
    super(...arguments), this.localization = null, this.handleClick = (t) => {
      if (this.todayIsInRange && this.props.onClick) {
        const r = {
          syntheticEvent: t,
          nativeEvent: t.nativeEvent,
          value: hi(Kr(), this.min, this.max),
          target: this,
          isTodayClick: !0
        };
        this.props.onClick.call(void 0, r);
      }
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : Ql.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : Ql.defaultProps.max;
  }
  get todayIsInRange() {
    return lr(Kr(), it(this.min), it(this.max));
  }
  render() {
    const { disabled: t, tabIndex: r, unstyled: i } = this.props, n = i && i.uCalendar;
    this.localization = jp(this);
    const a = this.localization.toLanguageString(Xl, qi[Xl]), o = M(le.today({ c: n, disabled: t }));
    return /* @__PURE__ */ s.createElement(
      Ct,
      {
        className: o,
        onClick: this.handleClick,
        tabIndex: r,
        fillMode: "flat",
        themeColor: "base",
        role: "link"
      },
      a
    );
  }
};
Zl.propTypes = {
  max: c.instanceOf(Date).isRequired,
  min: c.instanceOf(Date).isRequired,
  onClick: c.func,
  disabled: c.bool
}, Zl.defaultProps = {
  min: Va,
  max: ja
};
let _h = Zl;
Wp(_h);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Mw = 5, Jl = class qh extends s.Component {
  constructor(t) {
    super(t), this.virtualization = null, this.calendarView = null, this.table = null, this.intl = null, this.bottomOffset = 0, this.viewOffset = 0, this.viewHeight = 0, this._element = null, this.isActive = !1, this.animateToIndex = !0, this.shouldScroll = !1, this.weekService = null, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const r = this._element.querySelector("td.k-focus"), i = this._element.querySelector(".k-state-pending-focus");
      r && r[0] && r[0].classList.remove("k-focus"), i && i.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const r = this._element.querySelector("td.k-focus");
      r && r.classList.remove("k-focus"), this.isActive = !1;
    }, this.handleVirtualizationMount = (r) => {
      if (this.virtualization = r, this.virtualization && this.table) {
        this.table.style.transform = `translateY(${this.viewOffset}px)`;
        const i = hi(this.props.focusedDate, this.props.min, this.props.max), n = this.props.service.skip(i, this.props.min);
        this.virtualization.scrollToIndex(n);
      }
    }, this.buildMonthView = (r, i) => {
      const { unstyled: n } = this.props, a = n && n.uCalendar;
      return /* @__PURE__ */ s.createElement(
        "table",
        {
          key: "calendar-view-list-weekdays",
          className: M(le.table({ c: a, weekdays: !0 })),
          role: "grid",
          tabIndex: this.props.tabIndex
        },
        /* @__PURE__ */ s.createElement("colgroup", null, r.map((o, l) => /* @__PURE__ */ s.createElement("col", { key: l }))),
        /* @__PURE__ */ s.createElement("thead", { className: M(le.thead({ c: a })) }, /* @__PURE__ */ s.createElement("tr", { className: M(le.tr({ c: a })) }, i.map((o, l) => /* @__PURE__ */ s.createElement("th", { key: l, className: M(le.th({ c: a })) }, o))))
      );
    }, this.buildDates = (r, i) => {
      const n = this.props.cellUID, { unstyled: a } = this.props, o = a && a.uCalendar;
      return /* @__PURE__ */ s.createElement(
        "table",
        {
          className: M(le.table({ c: o })),
          ref: (l) => {
            this.table = l;
          },
          role: "grid",
          tabIndex: this.props.tabIndex,
          "aria-activedescendant": n + this.props.focusedDate.getTime()
        },
        /* @__PURE__ */ s.createElement("colgroup", null, r.map((l, d) => /* @__PURE__ */ s.createElement("col", { key: d }))),
        i.map((l) => /* @__PURE__ */ s.createElement(
          Wh,
          {
            ref: (d) => {
              this.calendarView || (this.calendarView = d);
            },
            key: l.getTime(),
            activeView: this.props.activeView,
            viewDate: l,
            min: this.props.min,
            max: this.props.max,
            cellUID: n,
            focusedDate: this.props.focusedDate,
            cell: this.props.cell,
            selectedDate: this.props.value,
            showWeekNumbers: this.weekNumber,
            onChange: this.handleDateChange,
            bus: this.props.bus,
            service: this.props.service,
            weekCell: this.props.weekCell,
            showOtherMonthDays: this.props.showOtherMonthDays,
            unstyled: a
          }
        ))
      );
    }, this.calculateHeights = () => {
      if (!this.props.dom)
        return;
      const r = this.props.activeView === Be.month ? this.props.dom.scrollableContentHeight : this.props.dom.scrollableYearContentHeight;
      this.bottomOffset = r - this.props.dom.viewHeight(this.props.activeView), this.viewOffset = -1 * this.props.dom.headerHeight, this.viewHeight = this.props.dom.viewHeight(this.props.activeView) || 1;
    }, this.getTake = (r, i) => Math.min(i - r, this.take), this.handleScrollAction = ({ index: r, scrollAction: i, pageAction: n }) => {
      const a = n ? n.skip : this.state.skip;
      if ((this.state.index !== r || this.state.skip !== a) && this.setState({ index: r, skip: a }), this.table && i) {
        const o = `translateY(${i.offset}px)`;
        this.table.style.transform = o;
      }
    }, this.handleTodayClick = (r) => {
      this.shouldScroll = !0, this.handleDateChange.call(void 0, r, !0);
    }, this.handleDateChange = (r, i = !1) => {
      const { onChange: n } = this.props;
      if (n) {
        const a = {
          syntheticEvent: r.syntheticEvent,
          nativeEvent: r.nativeEvent,
          value: G(r.value),
          target: this,
          isTodayClick: i
        };
        n.call(void 0, a);
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.state = {
      skip: this.props.service.skip(this.props.focusedDate, this.props.min),
      index: this.props.service.skip(this.props.focusedDate, this.props.min)
    };
  }
  get element() {
    return this._element;
  }
  get weekNames() {
    return this.intl = Rc(this), this.weekService = new Vh(this.intl), this.weekService.getWeekNames(this.weekNumber, this.props.weekDaysFormat);
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === Be.month);
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : qh.defaultProps.take;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get todayIsInRange() {
    return lr(Kr(), it(this.props.min), it(this.props.max));
  }
  componentDidUpdate(t, r) {
    this.shouldScroll = !1, this.indexToScroll !== void 0 && this.virtualization && this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll), this.isActive && this.focusActiveDate(), this.lastView = this.props.activeView, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: t, min: r, max: i, service: n, unstyled: a } = this.props, o = a && a.uCalendar;
    this.calculateHeights();
    const l = this.lastView !== t, d = hi(this.props.focusedDate, r, i), u = l ? n.skip(d, r) : this.state.skip, p = n.total(r, i), h = this.getTake(u, p), m = n.addToDate(r, u), f = n.addToDate(r, this.state.index), b = new Array(n.rowLength(this.weekNumber)).fill(""), x = t !== this.lastView;
    this.animateToIndex = !x, (x || !xo(this.lastFocus, d) || this.shouldScroll || !this.props.shouldScroll || this.props.shouldScroll()) && (this.indexToScroll = this.props.service.skip(d, this.props.min)), this.lastFocus = d;
    const w = M(
      le.view({
        c: o,
        month: t === Be.month,
        year: t === Be.year,
        decade: t === Be.decade,
        century: t === Be.century
      })
    ), y = this.buildDates(b, n.datesList(m, h)), E = /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      Uh,
      {
        key: "calendar-view-list-header",
        currentDate: f,
        min: this.props.min,
        max: this.props.max,
        activeView: this.props.activeView,
        bus: this.props.bus,
        service: this.props.service,
        headerTitle: this.props.headerTitle,
        header: this.props.header,
        unstyled: a,
        commands: /* @__PURE__ */ s.createElement(
          _h,
          {
            min: this.props.min,
            max: this.props.max,
            onClick: this.handleTodayClick,
            disabled: !this.todayIsInRange,
            tabIndex: this.props.tabIndex,
            unstyled: a
          }
        )
      }
    ), this.props.activeView === Be.month && this.buildMonthView(b, this.weekNames), /* @__PURE__ */ s.createElement(
      Hh,
      {
        key: "calendar-view-list-content",
        skip: u,
        take: this.take,
        total: p,
        itemHeight: this.viewHeight,
        topOffset: this.viewOffset,
        bottomOffset: this.bottomOffset,
        scrollOffsetSize: this.viewOffset,
        maxScrollDifference: this.viewHeight,
        onScroll: this.props.onScroll,
        onScrollAction: this.handleScrollAction,
        onMount: (C) => !this.virtualization && this.handleVirtualizationMount(C),
        children: y,
        tabIndex: this.props.tabIndex,
        unstyled: a
      }
    ));
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        ref: (C) => {
          this._element = C;
        },
        className: w
      },
      this.props.dom.didCalculate ? E : null
    );
  }
};
Jl.propTypes = {
  activeView: c.number.isRequired,
  bottomOffset: c.number,
  cellUID: c.string.isRequired,
  focusedDate: c.instanceOf(Date).isRequired,
  max: c.instanceOf(Date).isRequired,
  min: c.instanceOf(Date).isRequired,
  onChange: c.func,
  showWeekNumbers: c.bool,
  smoothScroll: c.bool,
  take: c.number,
  value: c.instanceOf(Date),
  viewHeight: c.number,
  viewOffset: c.number,
  weekDaysFormat: c.oneOf(["short", "abbreviated", "narrow"]),
  tabIndex: c.number
}, Jl.defaultProps = {
  take: Mw,
  showWeekNumbers: !1,
  weekDaysFormat: "short",
  smoothScroll: !0
};
let Yh = Jl;
Oc(Yh);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Iw = (e) => {
  const { className: t, isRangeStart: r, value: i, text: n, view: a, ...o } = e, l = Ut(), d = l && l.uCalendar, u = (p) => {
    var h;
    (h = e.onClick) == null || h.call(e, i, p);
  };
  return /* @__PURE__ */ s.createElement(
    "li",
    {
      ...o,
      onClick: u,
      className: M(le.li({ c: d }), t)
    },
    /* @__PURE__ */ s.createElement(
      "span",
      {
        className: M(
          le.navigationMarker({
            c: d,
            isRangeStart: r
          })
        )
      },
      e.children
    )
  );
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Tw = 30, ec = class Kh extends s.Component {
  constructor(t) {
    super(t), this.virtualization = null, this.list = null, this.itemHeight = 0, this.topOffset = 0, this.maxViewHeight = 0, this.bottomOffset = 0, this.handleVirtualizationMount = (n) => {
      if (this.virtualization = n, this.virtualization && this.list) {
        this.list.style.transform = `translateY(${this.topOffset}px)`;
        const a = hi(this.props.focusedDate, this.props.min, this.props.max), o = this.props.service.skip(a, this.props.min);
        this.virtualization.scrollToIndex(o);
      }
    }, this.buildNavigationItem = (n) => {
      const a = this.props.service.navigationTitle(n), o = this.props.service.isRangeStart(n), l = `kendo-react-calendar-nav-item-${n.getTime()}`, d = {
        text: a,
        value: n,
        isRangeStart: o,
        view: this.props.activeView,
        onClick: this.handleDateChange
      };
      return this.props.navigationItem ? /* @__PURE__ */ s.createElement(this.props.navigationItem, { ...d, key: l }, a) : /* @__PURE__ */ s.createElement(Iw, { ...d, key: l }, a);
    }, this.calculateHeights = () => {
      const n = this.props.dom.calendarHeight;
      this.itemHeight = this.props.dom.navigationItemHeight || 1, this.maxViewHeight = this.props.dom.monthViewHeight, this.topOffset = (n - this.itemHeight) / 2, this.bottomOffset = n - this.itemHeight;
    }, this.handleDateChange = (n, a) => {
      const { onChange: o } = this.props;
      if (o && a) {
        const l = {
          value: G(n),
          target: this,
          nativeEvent: a && a.nativeEvent,
          syntheticEvent: a
        };
        o.call(void 0, l);
      }
    }, this.handleScrollAction = ({ scrollAction: n, pageAction: a }) => {
      const o = a ? a.skip : this.state.skip;
      if (this.state.skip !== o && this.setState({ skip: o }), this.list && n) {
        const l = `translateY(${n.offset}px)`;
        this.list.style.transform = l;
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate;
    const r = this.props.service.skip(this.props.focusedDate, this.props.min), i = this.props.service.total(this.props.min, this.props.max);
    this.state = {
      skip: r - this.getTake(r, i) > 0 ? r : 0
    };
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : Kh.defaultProps.take;
  }
  /**
   * @hidden
   */
  componentDidUpdate(t, r) {
    this.indexToScroll !== void 0 && this.virtualization && this.virtualization.scrollToIndex(this.indexToScroll), this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: t, min: r, max: i, service: n, unstyled: a } = this.props;
    this.calculateHeights();
    const o = a && a.uCalendar, l = this.lastView !== t, d = hi(this.props.focusedDate, r, i), u = l ? n.skip(d, r) : this.state.skip, p = n.total(r, i), h = this.getTake(u, p), m = n.addToDate(r, u), f = n.datesList(m, h);
    (t !== this.lastView || !Zi(d, this.lastFocus)) && (this.indexToScroll = n.skip(d, r));
    const b = /* @__PURE__ */ s.createElement(
      Hh,
      {
        skip: u,
        take: this.take,
        total: p,
        itemHeight: this.itemHeight,
        topOffset: this.topOffset,
        bottomOffset: this.bottomOffset,
        onScroll: this.props.onScroll,
        maxScrollDifference: this.maxViewHeight,
        onScrollAction: this.handleScrollAction,
        onMount: (x) => !this.virtualization && this.handleVirtualizationMount(x),
        tabIndex: this.props.tabIndex,
        unstyled: a
      },
      /* @__PURE__ */ s.createElement(
        "ul",
        {
          ref: (x) => {
            this.list = x;
          },
          className: M(le.ul({ c: o }))
        },
        f.map((x) => this.buildNavigationItem(x))
      )
    );
    return /* @__PURE__ */ s.createElement("div", { className: M(le.navigation({ c: o })) }, /* @__PURE__ */ s.createElement("span", { className: M(le.navigationHighlight({ c: o })) }), this.props.dom.didCalculate ? b : null);
  }
  getTake(t, r) {
    return Math.min(r - t, this.take);
  }
};
ec.propTypes = {
  activeView: c.number.isRequired,
  focusedDate: c.instanceOf(Date).isRequired,
  max: c.instanceOf(Date).isRequired,
  min: c.instanceOf(Date).isRequired,
  onChange: c.func,
  take: c.number,
  tabIndex: c.number
}, ec.defaultProps = {
  take: Tw
};
let Rw = ec;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var pe = /* @__PURE__ */ ((e) => (e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.Up = 2] = "Up", e[e.Down = 3] = "Down", e[e.PrevView = 4] = "PrevView", e[e.NextView = 5] = "NextView", e[e.FirstInView = 6] = "FirstInView", e[e.LastInView = 7] = "LastInView", e[e.LowerView = 8] = "LowerView", e[e.UpperView = 9] = "UpperView", e))(pe || {});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ow = [[]], Ks = 4, Nw = 3, Fw = {
  [pe.Left]: (e) => _r(e, -1),
  [pe.Up]: (e) => _r(e, -5),
  [pe.Right]: (e) => _r(e, 1),
  [pe.Down]: (e) => _r(e, 5),
  [pe.PrevView]: (e) => va(e, -1),
  [pe.NextView]: (e) => va(e, 1),
  [pe.FirstInView]: (e) => Fn(e),
  [pe.LastInView]: (e) => Wl(e)
};
let Lw = class {
  addToDate(t, r) {
    return va(t, r);
  }
  datesList(t, r) {
    return Br(0, r).map((i) => va(t, i));
  }
  data(t) {
    const {
      cellUID: r,
      focusedDate: i,
      isActiveView: n,
      max: a,
      min: o,
      selectedDate: l,
      selectionRange: d = Ba,
      viewDate: u
    } = t;
    if (!u)
      return Ow;
    const p = Br(0, Ks), h = Fn(u), m = Wl(u), f = Kr();
    return Br(0, Nw).map((b) => {
      const x = _r(h, b * Ks);
      return p.map((w) => {
        const y = this.normalize(_r(x, w), o, a), E = this.isEqual(y, d.start), C = this.isEqual(y, d.end), R = !E && !C && us(y, d), N = n && (Array.isArray(l) ? this.isSelectedFromArray(y, l, o, a) : lr(l, o, a) && this.isEqual(y, l));
        return Bh(y, h, m) ? {
          formattedValue: this.value(y),
          id: `${r}${y.getTime()}`,
          isFocused: this.isEqual(y, i),
          isSelected: N,
          isWeekend: !1,
          isInRange: lr(y, o, a),
          isRangeStart: E,
          isRangeMid: R,
          isRangeEnd: C,
          isRangeSplitEnd: R && this.isEqual(y, m),
          isRangeSplitStart: R && this.isEqual(y, h),
          isToday: this.isEqual(y, f),
          title: this.cellTitle(y),
          value: y
        } : null;
      });
    });
  }
  isSelectedFromArray(t, r, i, n) {
    let a = !1;
    return r.forEach((o) => {
      lr(t, i, n) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, r) {
    return !t || !r ? !1 : Ir(t).getFullYear() === Ir(r).getFullYear();
  }
  isInArray(t, r) {
    if (!r.length)
      return !1;
    const i = t.getFullYear();
    return r[0].getFullYear() <= i && i <= r[r.length - 1].getFullYear() + 99;
  }
  isInRange(t, r, i) {
    const n = Ir(t).getFullYear(), a = !r || Ir(r).getFullYear() <= n, o = !i || n <= Ir(i).getFullYear();
    return a && o;
  }
  isInSameView(t, r) {
    return to(t, r) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 1e3 === 0;
  }
  move(t, r) {
    const i = Fw[r];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return Ir(t).getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? Fn(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${Fn(t).getFullYear()} - ${Wl(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Ks;
  }
  skip(t, r) {
    return to(r, t);
  }
  total(t, r) {
    return to(t, r) + 1;
  }
  value(t) {
    return t ? Ir(t).getFullYear().toString() : "";
  }
  viewDate(t, r, i = 1) {
    return to(t, r) < i ? va(t, -1) : t;
  }
  normalize(t, r, i) {
    return t < r && this.isEqual(t, r) ? G(r) : t > i && this.isEqual(t, i) ? G(i) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Pw = [[]], Xs = 4, Aw = 3, zw = {
  [pe.Left]: (e) => Rr(e, -1),
  [pe.Up]: (e) => Rr(e, -5),
  [pe.Right]: (e) => Rr(e, 1),
  [pe.Down]: (e) => Rr(e, 5),
  [pe.PrevView]: (e) => _r(e, -1),
  [pe.NextView]: (e) => _r(e, 1),
  [pe.FirstInView]: (e) => Ir(e),
  [pe.LastInView]: (e) => Ul(e)
};
let Hw = class {
  addToDate(t, r) {
    return _r(t, r);
  }
  datesList(t, r) {
    return Br(0, r).map((i) => _r(t, i));
  }
  data(t) {
    const {
      cellUID: r,
      focusedDate: i,
      isActiveView: n,
      max: a,
      min: o,
      selectedDate: l,
      selectionRange: d = Ba,
      viewDate: u
    } = t;
    if (!u)
      return Pw;
    const p = Br(0, Xs), h = Ir(u), m = Ul(u), f = Kr();
    return Br(0, Aw).map((b) => {
      const x = Rr(h, b * Xs);
      return p.map((w) => {
        const y = this.normalize(Rr(x, w), o, a), E = this.isEqual(y, d.start), C = this.isEqual(y, d.end), R = !E && !C && us(y, d), N = n && (Array.isArray(l) ? this.isSelectedFromArray(y, l, o, a) : lr(l, o, a) && this.isEqual(y, l));
        return Bh(y, h, m) ? {
          formattedValue: this.value(y),
          id: `${r}${y.getTime()}`,
          isFocused: this.isEqual(y, i),
          isSelected: N,
          isWeekend: !1,
          isInRange: lr(y, o, a),
          isRangeStart: E,
          isRangeMid: R,
          isRangeEnd: C,
          isRangeSplitEnd: R && this.isEqual(y, m),
          isRangeSplitStart: R && this.isEqual(y, h),
          isToday: this.isEqual(y, f),
          title: this.cellTitle(y),
          value: y
        } : null;
      });
    });
  }
  isSelectedFromArray(t, r, i, n) {
    let a = !1;
    return r.forEach((o) => {
      lr(t, i, n) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, r) {
    return !t || !r ? !1 : t.getFullYear() === r.getFullYear();
  }
  isInArray(t, r) {
    if (!r.length)
      return !1;
    const i = t.getFullYear();
    return r[0].getFullYear() <= i && i <= r[r.length - 1].getFullYear() + 9;
  }
  isInRange(t, r, i) {
    const n = t.getFullYear(), a = !r || r.getFullYear() <= n, o = !i || n <= i.getFullYear();
    return a && o;
  }
  isRangeStart(t) {
    return t.getFullYear() % 100 === 0;
  }
  isInSameView(t, r) {
    return ro(t, r) === 0;
  }
  move(t, r) {
    const i = zw[r];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return t.getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? Ir(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${Ir(t).getFullYear()} - ${Ul(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Xs;
  }
  skip(t, r) {
    return ro(r, t);
  }
  total(t, r) {
    return ro(t, r) + 1;
  }
  value(t) {
    return t ? t.getFullYear().toString() : "";
  }
  viewDate(t, r, i = 1) {
    return ro(t, r) < i ? _r(t, -1) : t;
  }
  normalize(t, r, i) {
    return t < r && this.isEqual(t, r) ? G(r) : t > i && this.isEqual(t, i) ? G(i) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Bw = [[]], Gs = 7, Vw = 6, jw = 6, Ww = 0, Uw = {
  [pe.Left]: (e) => Yr(e, -1),
  [pe.Up]: (e) => Zd(e, -1),
  [pe.Right]: (e) => Yr(e, 1),
  [pe.Down]: (e) => Zd(e, 1),
  [pe.PrevView]: (e) => Wt(e, -1),
  [pe.NextView]: (e) => Wt(e, 1),
  [pe.FirstInView]: (e) => jl(e),
  [pe.LastInView]: (e) => Fi(e)
};
let _w = class {
  constructor(t) {
    this.intl = t;
  }
  addToDate(t, r) {
    return Wt(t, r);
  }
  datesList(t, r) {
    return Br(0, r).map((i) => Wt(t, i));
  }
  data(t) {
    const {
      cellUID: r,
      focusedDate: i,
      isActiveView: n,
      max: a,
      min: o,
      selectedDate: l,
      selectionRange: d = Ba,
      viewDate: u
    } = t;
    if (!u)
      return Bw;
    const p = jl(u), h = Fi(u), m = Lh(p, this.intl.firstDay(), -1), f = Br(0, Gs), b = Kr();
    return Br(0, Vw).map((x) => {
      const w = Yr(m, x * Gs);
      return f.map((y) => {
        const E = this.normalize(Yr(w, y), o, a), C = E < p || E > h, R = this.isEqual(E, d.start), N = this.isEqual(E, d.end), O = !R && !N && us(E, d), T = n && (Array.isArray(l) ? this.isSelectedFromArray(E, l, o, a) : lr(l, o, a) && this.isEqual(E, l));
        return {
          formattedValue: this.value(E),
          id: `${r}${E.getTime()}`,
          isFocused: this.isEqual(E, i),
          isSelected: T,
          isInRange: lr(E, o, a),
          isWeekend: this.isWeekend(E),
          isRangeStart: R,
          isRangeMid: O,
          isRangeEnd: N,
          isRangeSplitStart: O && this.isEqual(E, p),
          isRangeSplitEnd: O && this.isEqual(E, h),
          isToday: this.isEqual(E, b),
          title: this.cellTitle(E),
          value: E,
          isOtherMonth: C
        };
      });
    });
  }
  isEqual(t, r) {
    return !t || !r ? !1 : it(t).getTime() === it(r).getTime();
  }
  isSelectedFromArray(t, r, i, n) {
    let a = !1;
    return r.forEach((o) => {
      lr(t, i, n) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isInArray(t, r) {
    return !!r.length && jl(r[0]) <= t && t <= Fi(r[r.length - 1]);
  }
  isInRange(t, r, i) {
    const n = it(t), a = !r || it(r) <= n, o = !i || n <= it(i);
    return a && o;
  }
  isInSameView(t, r) {
    return io(t, r) === 0;
  }
  isRangeStart(t) {
    return !t.getMonth();
  }
  move(t, r) {
    const i = Uw[r];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return this.intl.formatDate(t, "D");
  }
  navigationTitle(t) {
    return t ? this.isRangeStart(t) ? t.getFullYear().toString() : this.abbrMonthNames()[t.getMonth()] : "";
  }
  title(t) {
    return `${this.wideMonthNames()[t.getMonth()]} ${t.getFullYear()}`;
  }
  rowLength(t) {
    return Gs + (t ? 1 : 0);
  }
  skip(t, r) {
    return io(r, t);
  }
  total(t, r) {
    return io(t, r) + 1;
  }
  value(t) {
    return t ? t.getDate().toString() : "";
  }
  viewDate(t, r, i = 1) {
    return io(t, r) < i ? Wt(t, -1) : t;
  }
  isWeekend(t) {
    const r = t.getDay();
    return r === jw || r === Ww;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, r, i) {
    return t < r && this.isEqual(t, r) ? it(r) : t > i && this.isEqual(t, i) ? it(i) : t;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: !0 });
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const qw = [[]], Zs = 4, Yw = 3, Kw = (e) => e > 4 ? -5 : e < 2 ? -2 : -7, Xw = (e) => e < 7 ? 5 : e < 10 ? 7 : 2, Gw = {
  [pe.Left]: (e) => Wt(e, -1),
  [pe.Up]: (e) => Wt(e, Kw(e.getMonth())),
  [pe.Right]: (e) => Wt(e, 1),
  [pe.Down]: (e) => Wt(e, Xw(e.getMonth())),
  [pe.PrevView]: (e) => Rr(e, -1),
  [pe.NextView]: (e) => Rr(e, 1),
  [pe.FirstInView]: (e) => Ah(e),
  [pe.LastInView]: (e) => zh(e)
};
let Zw = class {
  constructor(t) {
    this._intl = t;
  }
  addToDate(t, r) {
    return Rr(t, r);
  }
  datesList(t, r) {
    return Br(0, r).map((i) => Rr(t, i));
  }
  data(t) {
    const {
      cellUID: r,
      focusedDate: i,
      isActiveView: n,
      max: a,
      min: o,
      selectedDate: l,
      selectionRange: d = Ba,
      viewDate: u
    } = t;
    if (!u)
      return qw;
    const p = this.abbrMonthNames(), h = Ah(u), m = zh(u), f = h.getFullYear(), b = Br(0, Zs), x = Kr();
    return Br(0, Yw).map((w) => {
      const y = Wt(h, w * Zs);
      return b.map((E) => {
        const C = this.normalize(Wt(y, E), o, a);
        if (f < C.getFullYear())
          return null;
        const R = this.isEqual(C, d.start), N = this.isEqual(C, d.end), O = !R && !N && us(C, d), T = n && (Array.isArray(l) ? this.isSelectedFromArray(C, l, o, a) : lr(l, o, a) && this.isEqual(C, l));
        return {
          formattedValue: p[C.getMonth()],
          id: `${r}${C.getTime()}`,
          isFocused: this.isEqual(C, i),
          isSelected: T,
          isInRange: lr(C, o, a),
          isWeekend: !1,
          isRangeStart: R,
          isRangeMid: O,
          isRangeEnd: N,
          isRangeSplitEnd: O && this.isEqual(C, m),
          isRangeSplitStart: O && this.isEqual(C, h),
          isToday: this.isEqual(C, x),
          title: this.cellTitle(C),
          value: C
        };
      });
    });
  }
  isSelectedFromArray(t, r, i, n) {
    let a = !1;
    return r.forEach((o) => {
      lr(t, i, n) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, r) {
    return !t || !r ? !1 : t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth();
  }
  isInArray(t, r) {
    if (!r.length)
      return !1;
    const i = t.getFullYear();
    return r[0].getFullYear() <= i && i <= r[r.length - 1].getFullYear();
  }
  isInRange(t, r, i) {
    const n = Tr(t.getFullYear(), t.getMonth(), 1), a = !r || Tr(r.getFullYear(), r.getMonth(), 1) <= n, o = !i || n <= Tr(i.getFullYear(), i.getMonth(), 1);
    return a && o;
  }
  isInSameView(t, r) {
    return no(t, r) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 10 === 0;
  }
  move(t, r) {
    const i = Gw[r];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return `${t.getFullYear()} ${this.value(t)}`;
  }
  navigationTitle(t) {
    return this.title(t);
  }
  title(t) {
    return t ? t.getFullYear().toString() : "";
  }
  rowLength(t) {
    return Zs;
  }
  skip(t, r) {
    return no(r, t);
  }
  total(t, r) {
    return no(t, r) + 1;
  }
  value(t) {
    return t ? this.abbrMonthNames()[t.getMonth()] : "";
  }
  viewDate(t, r, i = 1) {
    return no(t, r) < i ? Rr(t, -1) : t;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, r, i) {
    return t < r && this.isEqual(t, r) ? G(r) : t > i && this.isEqual(t, i) ? G(i) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Qw = {
  [Be.month]: _w,
  [Be.year]: Zw,
  [Be.decade]: Hw,
  [Be.century]: Lw
}, Jw = (e, t) => {
  const r = Be[Be[e + t]];
  return r !== void 0 ? r : e;
};
let e$ = class {
  constructor(t) {
    this.bottom = Be.month, this.top = Be.century, this.onViewChanged = t;
  }
  configure(t, r) {
    this.bottom = t, this.top = r;
  }
  service(t, r) {
    return new Qw[`${t}`](r);
  }
  moveDown(t, r) {
    this.move(t, -1, r);
  }
  moveUp(t, r) {
    this.move(t, 1, r);
  }
  moveToBottom(t) {
    t !== this.bottom && this.onViewChanged({ view: this.bottom });
  }
  canMoveDown(t) {
    return this.bottom < t;
  }
  canMoveUp(t) {
    return t < this.top;
  }
  clamp(t) {
    return t < this.bottom ? this.bottom : t > this.top ? this.top : t;
  }
  move(t, r, i) {
    const n = this.clamp(Jw(t, r));
    n !== t && this.onViewChanged({ view: n }, i);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let t$ = class {
  constructor() {
    this.calendarHeight = 0, this.headerHeight = 0, this.monthViewHeight = 0, this.yearViewHeight = 0, this.decadeViewHeight = 0, this.centuryViewHeight = 0, this.navigationItemHeight = 0, this.scrollableContentHeight = 0, this.scrollableYearContentHeight = 0, this.calendarWidth = 0, this.monthViewWidth = 0, this.yearViewWidth = 0, this.decadeViewWidth = 0, this.centuryViewWidth = 0, this.scrollableContentWidth = 0, this.didCalculate = !1, this.hostContainer = null;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(t, r) {
    if (!sr)
      return;
    const i = ci("div"), n = ci("ul"), a = ci("li"), o = ci("td"), l = ci("th"), d = ci("tr"), u = ci("tbody"), p = ci("thead"), h = ci("table"), m = r && r.uCalendar, f = r && r.uButton, b = Mt(
      Oi.wrapper({
        c: f,
        fillMode: "flat",
        size: "medium",
        rounded: "medium",
        themeColor: "primary"
      }),
      le.title({ c: m })
    ), x = () => i(
      `
                <span class="${b}">
                    <span class="${Mt(Oi.text({ c: f }))}">March 2017</span>
                </span>
                <span class="${Mt(le.spacer({ c: m }))}"></span>
                <span class="${Mt(le.nav({ c: m }))}"><button class="${Mt(
        le.today({ c: m })
      )}">TODAY</button></span>
            `,
      Mt(le.header({ c: m, vertical: !0 }))
    ), w = () => h(
      [
        p(
          [
            d(
              [l("MO", Mt(le.th({ c: m })))],
              Mt(le.tr({ c: m }))
            )
          ],
          Mt(le.thead({ c: m }))
        )
      ],
      Mt(le.table({ c: m, weekdays: !0 }))
    ), y = (D, F) => new Array(D).fill("1").map(F), E = (D, F = 1) => h(
      [
        u(
          [d([o("1", Mt(le.td({ c: m, isWeek: !0 })))])].concat(
            y(
              D,
              () => d(
                y(
                  F,
                  (te) => o(
                    `<span class="${Mt(
                      le.link({ c: m })
                    )}">${te}</span>`,
                    Mt(le.td({ c: m }))
                  )
                ),
                Mt(le.tr({ c: m }))
              )
            )
          ),
          Mt(le.tbody({ c: m }))
        )
      ],
      Mt(le.table({ c: m }))
    ), C = (D) => i(
      D,
      Mt(
        le.scrollableSelector({
          c: m
        }),
        le.scrollable({
          c: m,
          horizontal: !0
        })
      )
    ), R = (D, F, te) => i(
      te ? [x(), w(), C([D, D])] : [x(), C([D, D])],
      F,
      { left: "-10000px", position: "absolute" }
    ), N = /* @__PURE__ */ (() => {
      let D;
      return () => sr ? (D || (D = i(
        [C([n([a("<span>FEB</span>")])])],
        Mt(le.navigation({ c: m })),
        { left: "0px", position: "absolute" }
      )), D) : null;
    })(), O = ({ cells: D, rows: F }, te, ce) => {
      let se;
      return () => sr ? (se || (se = R(E(F, D), te, ce)), se) : null;
    }, T = (D) => D.querySelector(
      `.${Mt(le.scrollableSelector({ c: m }))}`
    ), k = (D) => {
      const F = T(D);
      return F.className = `${F.className} scrollable-horizontal`, D;
    }, W = O(
      { cells: 7, rows: 6 },
      Mt(le.view({ c: m, month: !0 })),
      !0
    ), H = O(
      { cells: 5, rows: 3 },
      Mt(le.view({ c: m, year: !0 })),
      !1
    ), Y = O(
      { cells: 5, rows: 2 },
      Mt(le.view({ c: m, decade: !0 })),
      !1
    ), K = () => k(W()), _ = () => k(H()), X = () => k(Y()), A = (D) => parseFloat(window.getComputedStyle(D).height) || D.offsetHeight, L = (D) => {
      const F = window.getComputedStyle(D);
      return parseFloat(F.width) + parseFloat(F.paddingLeft) + parseFloat(F.paddingRight) || D.offsetWidth;
    }, J = (D) => D.querySelector("tbody");
    this.didCalculate = !0, t && (this.hostContainer = t), this.batch(W(), (D) => {
      const F = J(D);
      this.calendarHeight = A(D), this.monthViewHeight = A(F), this.headerHeight = A(F.children[0]), this.scrollableContentHeight = A(T(D));
    }), this.batch(K(), (D) => {
      const F = J(D);
      this.calendarWidth = L(D), this.monthViewWidth = L(F), this.scrollableContentWidth = L(T(D));
    }), this.batch(H(), (D) => {
      this.yearViewHeight = A(J(D)), this.scrollableYearContentHeight = A(T(D));
    }), this.batch(_(), (D) => {
      this.yearViewWidth = L(J(D));
    }), this.batch(Y(), (D) => {
      this.decadeViewHeight = A(J(D)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(X(), (D) => {
      this.decadeViewWidth = L(J(D)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch(N(), (D) => {
      this.navigationItemHeight = A(D.querySelector("li"));
    });
  }
  viewHeight(t) {
    return this.viewDimension(t, "height");
  }
  viewWidth(t) {
    return this.viewDimension(t, "width");
  }
  viewDimension(t, r) {
    const i = r === "height" ? "ViewHeight" : "ViewWidth";
    switch (t) {
      case Be.month:
        return this[`month${i}`];
      case Be.year:
        return this[`year${i}`];
      case Be.decade:
        return this[`decade${i}`];
      case Be.century:
        return this[`century${i}`];
      default:
        return 1;
    }
  }
  batch(t, r) {
    const i = this.hostContainer || document.body, n = i.appendChild(t);
    r(n), i.removeChild(n);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const r$ = {
  33: pe.PrevView,
  34: pe.NextView,
  35: pe.LastInView,
  36: pe.FirstInView,
  37: pe.Left,
  38: pe.Up,
  39: pe.Right,
  40: pe.Down,
  "meta+38": pe.UpperView,
  "meta+40": pe.LowerView
};
let i$ = class {
  constructor(t) {
    this.bus = t;
  }
  action(t) {
    const r = `${t.ctrlKey || t.metaKey ? "meta+" : ""}${t.keyCode}`;
    return r$[r];
  }
  move(t, r, i, n, a) {
    return n ? r === pe.UpperView && this.bus.canMoveUp(i) ? (this.bus.moveUp(i, a), t) : r === pe.LowerView && this.bus.canMoveDown(i) ? (this.bus.moveDown(i, a), t) : n.move(t, r) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const n$ = (e) => (t) => Math.floor(t / e), a$ = (e) => (t) => t * e;
let o$ = class {
  constructor(t) {
    this.dom = t, this.divideByMagnitude = null, this.powerByMagnitude = null, this.navigator = null, this.view = null, this.monthScrolled = !1, this.navScrolled = !1;
  }
  configure(t) {
    const r = Math.max(this.dom.viewHeight(t) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = n$(r), this.powerByMagnitude = a$(r);
  }
  sync(t, r, i) {
    if (!(!t || !r)) {
      if (this.navigator = t, this.view = r, i.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = !1;
          return;
        }
        this.navScrolled = !0, this.scrollSiblingOf(this.navigator.element);
      }
      if (i.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = !1;
          return;
        }
        this.monthScrolled = !0, this.scrollSiblingOf(this.view.element);
      }
    }
  }
  scrollSiblingOf(t) {
    const r = this.siblingComponent(t), i = this.calculateScroll(r, t.scrollTop);
    r.scrollTo(i);
  }
  siblingComponent(t) {
    return this.navigator.element === t ? this.view : this.navigator;
  }
  calculateScroll(t, r) {
    const i = t === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return i ? i(r) : 0;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Qs = (e) => e ? e.virtualization : null, eu = (e = Vo.defaultProps.min, t = Vo.defaultProps.max, r, i) => i !== void 0 ? i !== null && lr(it(i), e, t) ? i : null : r !== null && lr(it(r), e, t) ? r : null, wo = class Ei extends s.Component {
  constructor(t) {
    super(t), this.scrollSyncService = null, this.focusedDate = null, this.Navigation = null, this.calendarViewList = null, this._element = null, this.intl = null, this.service = null, this.isActive = !1, this.didNavigationChange = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.shouldScroll = () => this.didNavigationChange, this.handleScroll = (i) => {
      this.scrollSyncService && this.scrollSyncService.sync(
        Qs(this.Navigation),
        Qs(this.calendarViewList),
        i
      );
    }, this.handleNavigationChange = (i) => {
      if (this.props.disabled)
        return;
      this.didNavigationChange = !0;
      const n = G(i.value);
      this.setState({ focusedDate: n });
    }, this.handleViewChange = ({ view: i }) => {
      this.scrollSyncService && this.scrollSyncService.configure(i), this.setState({ activeView: i });
    }, this.handleDateChange = (i) => {
      const n = G(i.value), a = G(i.value), o = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (o)
        if (i.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, i.syntheticEvent), this.setState({ focusedDate: a });
          return;
        }
      this.setState({ value: n, focusedDate: a }), this.valueDuringOnChange = n;
      const { onChange: l } = this.props;
      if (l) {
        const d = {
          syntheticEvent: i.syntheticEvent,
          nativeEvent: i.nativeEvent,
          value: n,
          target: this
        };
        l.call(void 0, d);
      }
      this.valueDuringOnChange = void 0;
    }, this.handleFocus = (i) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: n } = this.props;
      n && n.call(void 0, i);
    }, this.handleBlur = (i) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: n } = this.props;
      n && n.call(void 0, i);
    }, this.handleKeyDown = (i) => {
      const { keyCode: n, ctrlKey: a, metaKey: o } = i;
      if (!(!this.focusedDate || !this.service)) {
        if (n === 84 && this.setState({ focusedDate: Kr() }), (a || o) && (n === z.left || n === z.right)) {
          if (this.props.disabled)
            return;
          this.didNavigationChange = !0, this.focusedDate.getDate() === 31 && this.focusedDate.setDate(30);
          const l = n === z.left ? this.focusedDate.getMonth() - 1 : this.focusedDate.getMonth() + 1, d = new Date(this.focusedDate.setMonth(l)), u = G(d);
          this.setState({ focusedDate: u });
        }
        if (n === z.enter) {
          if (this.value !== null && xo(this.focusedDate, this.value)) {
            const d = hi(this.focusedDate, this.min, this.max);
            Qs(this.calendarViewList).scrollToIndex(this.service.skip(d, this.min));
          }
          const l = {
            syntheticEvent: i,
            nativeEvent: i.nativeEvent,
            value: this.focusedDate,
            target: this
          };
          this.handleDateChange(l);
        } else {
          const l = hi(
            this.navigation.move(
              this.focusedDate,
              this.navigation.action(i),
              this.state.activeView,
              this.service,
              i
            ),
            this.min,
            this.max
          );
          if (xo(this.focusedDate, l))
            return;
          this.setState({ focusedDate: l });
        }
        i.preventDefault();
      }
    }, this.handleMouseDown = (i) => {
      i.preventDefault();
    }, this.handleClick = (i) => {
      this._element && this._element.focus({ preventScroll: !0 });
    };
    const r = eu(
      this.min,
      this.max,
      this.props.defaultValue || Ei.defaultProps.defaultValue,
      this.props.value
    );
    this.state = {
      value: r,
      activeView: Qd(
        Be[t.defaultActiveView],
        this.bottomView,
        this.topView
      ),
      focusedDate: hi(t.focusedDate || r || Kr(), this.min, this.max)
    }, this.dom = new t$(), this.bus = new e$(this.handleViewChange), this.navigation = new i$(this.bus), this.oldValue = r;
  }
  get cellUID() {
    return this.props.id + "-cell-uid";
  }
  get id() {
    return this.props.id + "-id";
  }
  /**
   * Gets the wrapping element of the Calendar.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the Calendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  get min() {
    return it(this.props.min !== void 0 ? this.props.min : Ei.defaultProps.min);
  }
  get max() {
    return it(this.props.max !== void 0 ? this.props.max : Ei.defaultProps.max);
  }
  get bottomView() {
    return Be[this.props.bottomView !== void 0 ? this.props.bottomView : Ei.defaultProps.bottomView];
  }
  get topView() {
    return Be[this.props.topView !== void 0 ? this.props.topView : Ei.defaultProps.topView];
  }
  /**
   * @hidden
   */
  componentDidMount() {
    const { unstyled: t } = this.props;
    Promise.resolve().then(() => {
      ad(), this._element && (this.dom.calculateHeights(this._element, t), this.scrollSyncService = new o$(this.dom), this.scrollSyncService.configure(this.state.activeView), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(t, r) {
    ad(), r.activeView !== this.state.activeView && this.scrollSyncService && this.scrollSyncService.configure(this.state.activeView), this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)(), this.didNavigationChange = !1, this.isActive && (this.oldValue = this.value);
  }
  /**
   * @hidden
   */
  render() {
    const { _ref: t, unstyled: r, bottomView: i, topView: n, disabled: a, weekNumber: o, mobileMode: l, className: d } = this.props;
    t && t(this);
    const u = r && r.uCalendar, p = this.value !== null && this.oldValue !== null ? !xo(this.value, this.oldValue) : this.value !== this.oldValue, h = Qd(
      this.state.activeView,
      Be[i !== void 0 ? i : Ei.defaultProps.bottomView],
      Be[n !== void 0 ? n : Ei.defaultProps.topView]
    ), m = eu(this.min, this.max, this.value, this.value), f = m ? it(m) : null;
    this.focusedDate = it(
      hi(p && m !== null ? m : this.state.focusedDate, this.min, this.max)
    ), this.intl = Rc(this), this.bus.configure(this.bottomView, this.topView), this.service = this.bus.service(h, this.intl);
    const { smoothScroll: b = Number.parseFloat(s.version) < 18 } = this.props, x = M(
      le.wrapper({
        c: u,
        disabled: a,
        weekNumber: o,
        mobileMode: l
      }),
      d
    ), w = [
      this.props.navigation && /* @__PURE__ */ s.createElement(
        Rw,
        {
          key: 0,
          ref: (y) => {
            this.Navigation = y;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          onScroll: this.handleScroll,
          onChange: this.handleNavigationChange,
          service: this.service,
          dom: this.dom,
          navigationItem: this.props.navigationItem,
          tabIndex: this.props.tabIndex,
          unstyled: r
        }
      ),
      /* @__PURE__ */ s.createElement(
        Yh,
        {
          key: 1,
          ref: (y) => {
            this.calendarViewList = y;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          bus: this.bus,
          shouldScroll: this.shouldScroll,
          onScroll: this.handleScroll,
          service: this.service,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          dom: this.dom,
          smoothScroll: b,
          showWeekNumbers: this.props.weekNumber,
          onChange: this.handleDateChange,
          value: f,
          cellUID: this.cellUID,
          headerTitle: this.props.headerTitle,
          header: this.props.header,
          tabIndex: this.props.tabIndex,
          weekDaysFormat: this.props.weekDaysFormat,
          showOtherMonthDays: this.props.showOtherMonthDays,
          unstyled: r
        }
      )
    ];
    return /* @__PURE__ */ s.createElement(
      "div",
      {
        ref: (y) => {
          this._element = y;
        },
        className: x,
        id: this.props.id || this.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-disabled": this.props.disabled,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex || 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick
      },
      w
    );
  }
};
wo.displayName = "Calendar", wo.propTypes = {
  className: c.string,
  defaultActiveView: c.oneOf(["month", "year", "decade", "century"]),
  defaultValue: c.instanceOf(Date),
  disabled: c.bool,
  focusedDate: c.instanceOf(Date),
  id: c.string,
  ariaLabelledBy: c.string,
  ariaDescribedBy: c.string,
  weekDaysFormat: c.oneOf(["short", "abbreviated", "narrow"]),
  max: c.instanceOf(Date),
  min: c.instanceOf(Date),
  navigation: c.bool,
  smoothScroll: c.bool,
  onBlur: c.func,
  onChange: c.func,
  onFocus: c.func,
  tabIndex: c.number,
  value: c.instanceOf(Date),
  weekNumber: c.bool,
  topView: (e, t, r) => {
    const i = e[t], n = e.bottomView;
    return i && n && Be[i] < Be[n] ? new Error(
      `Invalid prop + ${t} suplied to ${r}.
                    ${t} can not be smaller than bottomView.
                    `
    ) : null;
  },
  bottomView: (e, t, r) => {
    const i = e[t], n = e.topView;
    return i && n && Be[i] > Be[n] ? new Error(
      `Invalid prop + ${t} suplied to ${r}.
                    ${t} can not be bigger than topView.
                    `
    ) : null;
  }
}, wo.defaultProps = {
  disabled: !1,
  min: Va,
  max: ja,
  weekDaysFormat: "short",
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  bottomView: "month",
  showOtherMonthDays: !1
};
let Vo = wo;
const s$ = Ji(), Wc = en(
  gc(
    s$,
    cp(Vo)
  )
);
Wc.displayName = "KendoReactCalendar";
Oc(Vo);
var l$ = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      this.symbols = "", this.partMap = [];
    }
    return e;
  }()
), ot = {
  formatSeparator: "_",
  twoDigitYearMax: 68,
  defaultDateFormat: "d",
  defaultLocaleId: "en"
}, ba = {
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  SPACE: " "
}, mn = function(e) {
  return new Array(Math.max(e, 0)).fill("0").join("");
}, tu = function(e) {
  return e.replace(/^0*/, "");
}, c$ = function(e) {
  var t = e.oldText, r = e.newText, i = e.formatPattern, n = e.selectionStart, a = e.isInCaretMode, o = e.keyEvent, l = n + t.length - r.length, d = t[l], u = t.substring(0, l), p = r.substring(0, n), h = [];
  if (u === p && n > 0)
    return h.push([i[n - 1], p[n - 1]]), h;
  if (u.indexOf(p) === 0 && a && (o.key === ba.DELETE || o.key === ba.BACKSPACE) || u.indexOf(p) === 0 && !a && (p.length === 0 || i[p.length - 1] !== i[p.length])) {
    var m = "";
    !a && p.length === 1 && h.push([i[0], p[0]]);
    for (var f = p.length; f < u.length; f++)
      i[f] !== m && i[f] !== ot.formatSeparator && (m = i[f], h.push([m, ""]));
    return h;
  }
  if (a && (p.indexOf(u) === 0 || i[n - 1] === ot.formatSeparator) || !a && (p.indexOf(u) === 0 || i[n - 1] === ot.formatSeparator)) {
    for (var b = i[0], f = Math.max(0, u.length - 1); f < i.length; f++)
      if (i[f] !== ot.formatSeparator) {
        b = i[f];
        break;
      }
    return [[b, p[n - 1]]];
  }
  if (p[p.length - 1] === " " || p[p.length - 1] === d && i[l] === "_")
    return [[i[n - 1], ot.formatSeparator]];
  var x = [[i[n - 1], p[n - 1]]];
  return x;
}, d$ = function(e, t) {
  return e[t.pattern[0]] = t.type, e;
}, u$ = function(e) {
  return function(t, r) {
    var i = G(t);
    return i[e](r), i;
  };
}, Qe = function(e) {
  return e != null;
}, ru = function() {
  return !!document;
}, jo = function(e) {
  return Qe(e) && typeof e == "number" && !Number.isNaN(e);
}, Di = function(e) {
  return parseInt(e, 10);
}, iu = function(e) {
  return jo(Di(e)) && /^[0-9]+$/.test(e);
}, Vi = function(e, t, r) {
  return Math.min(r, Math.max(t, e));
}, st = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Object.assign.apply(Object, e);
}, p$ = function(e) {
  return typeof e == "function";
}, h$ = function(e) {
  return !Qe(e) || isNaN(e.getTime()) ? 0 : Number(e.getFullYear().toString().slice(-2));
}, f$ = u$("setFullYear"), m$ = function(e) {
  var t = e && e.match(/S+(\1)/);
  return t ? t[0].length : 0;
}, g$ = function(e) {
  return Math.pow(10, 3 - e);
}, Js = function(e, t, r, i, n, a, o, l) {
  return !!(e && e.getFullYear() === t && e.getMonth() === r && e.getDate() === i && e.getHours() === n && e.getMinutes() === a && e.getSeconds() === o && e.getMilliseconds() === l);
}, Ri = function(e) {
  return Qe(e) && e.getTime && jo(e.getTime());
}, v$ = function() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Macintosh/i.test(navigator.userAgent);
}, x$ = 1, nu = 2e3, b$ = 1900, y$ = 2e3, w$ = /d|M|H|h|m|s/, el = 2, $$ = "M", gn = 1, k$ = (
  /** @class */
  function() {
    function e(t) {
      var r = t.intlService, i = t.formatPlaceholder, n = t.format, a = t.cycleTime, o = a === void 0 ? !1 : a, l = t.twoDigitYearMax, d = l === void 0 ? ot.twoDigitYearMax : l, u = t.value, p = u === void 0 ? null : u, h = t.autoCorrectParts, m = h === void 0 ? !0 : h, f = t.toggleDayPeriod, b = f === void 0 ? !1 : f, x = t.autoSwitchParts, w = x === void 0 ? !0 : x;
      if (this.year = !0, this.month = !0, this.date = !0, this.hours = !0, this.minutes = !0, this.seconds = !0, this.milliseconds = !0, this.dayperiod = !0, this.leadingZero = null, this.typedMonthPart = "", this.knownParts = "adHhmMsEyS", this.symbols = {
        E: "E",
        H: "H",
        M: "M",
        a: "a",
        d: "d",
        h: "h",
        m: "m",
        s: "s",
        y: "y",
        S: "S"
      }, this._value = this.getDefaultDate(), this.cycleTime = !1, this._partiallyInvalidDate = {
        startDate: null,
        invalidDateParts: {
          E: { value: null, date: null, startDateOffset: 0 },
          H: { value: null, date: null, startDateOffset: 0 },
          M: { value: null, date: null, startDateOffset: 0 },
          a: { value: null, date: null, startDateOffset: 0 },
          d: { value: null, date: null, startDateOffset: 0 },
          h: { value: null, date: null, startDateOffset: 0 },
          m: { value: null, date: null, startDateOffset: 0 },
          s: { value: null, date: null, startDateOffset: 0 },
          y: { value: null, date: null, startDateOffset: 0 },
          S: { value: null, date: null, startDateOffset: 0 }
        }
      }, this.setOptions({
        intlService: r,
        formatPlaceholder: i,
        format: n,
        cycleTime: o,
        twoDigitYearMax: d,
        value: p,
        autoCorrectParts: m,
        toggleDayPeriod: b,
        autoSwitchParts: w
      }), p)
        this._value = G(p);
      else {
        this._value = this.getDefaultDate();
        for (var y = this.dateFormatString(this.value, this.format).symbols, E = 0; E < y.length; E++)
          this.setExisting(y[E], !1);
      }
    }
    return Object.defineProperty(e.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(t) {
        t && !(t instanceof Date) || (this._value = t, this.resetInvalidDate());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "localeId", {
      get: function() {
        for (var t = ot.defaultLocaleId, r = Object.keys(this.intl.cldr), i = 0; i < r.length; i++) {
          var n = r[i], a = this.intl.cldr[n];
          if (a.name && a.calendar && a.numbers && a.name !== ot.defaultLocaleId) {
            t = a.name;
            break;
          }
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setOptions = function(t) {
      this.intl = t.intlService, this.formatPlaceholder = t.formatPlaceholder || "wide", this.format = t.format, this.cycleTime = t.cycleTime, this.monthNames = this.allFormattedMonths(this.localeId), this.dayPeriods = this.allDayPeriods(this.localeId), this.twoDigitYearMax = t.twoDigitYearMax, this.autoCorrectParts = t.autoCorrectParts, this.toggleDayPeriod = t.toggleDayPeriod, this.autoSwitchParts = t.autoSwitchParts;
    }, e.prototype.setValue = function(t) {
      t ? Zi(t, this._value) ? Zi(t, this._value) && this.dayPeriods && this.setExisting("a", !0) : (this._value = G(t), this.modifyExisting(!0)) : (this._value = this.getDefaultDate(), this.modifyExisting(!1)), this.resetInvalidDate();
    }, e.prototype.hasValue = function() {
      var t = this, r = function(i, n) {
        return i || n.type !== "literal" && n.type !== "dayperiod" && t.getExisting(n.pattern[0]);
      };
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(r, !1);
    }, e.prototype.getValue = function() {
      for (var t = 0; t < this.knownParts.length; t++)
        if (!this.getExisting(this.knownParts[t]))
          return null;
      return G(this.value);
    }, e.prototype.createDefaultDate = function() {
      return Tr(nu, 0, 31);
    }, e.prototype.getDefaultDate = function() {
      return it(this.createDefaultDate());
    }, e.prototype.getFormattedDate = function(t) {
      return this.intl.formatDate(this.getValue(), t, this.localeId);
    }, e.prototype.getTextAndFormat = function(t) {
      t === void 0 && (t = "");
      var r = t || this.format, i = this.intl.formatDate(this.value, r, this.localeId), n = this.dateFormatString(this.value, r);
      if (!this.autoCorrectParts && this._partiallyInvalidDate.startDate) {
        for (var a = "", o = this.intl.formatDate(this.value, r, this.localeId), l = this.getFormattedInvalidDates(r), d = 0; d < o.length; d++) {
          var u = n.symbols[d];
          if (n.partMap[d].type === "literal")
            a += i[d];
          else if (this.getInvalidDatePartValue(u)) {
            var p = this.getPartsForSegment(n, d);
            if (u === "M") {
              var h = (Di(this.getInvalidDatePartValue(u)) + gn).toString();
              if (p.length > el)
                a += l[u][d];
              else if (this.getInvalidDatePartValue(u)) {
                var m = mn(p.length - h.length) + h;
                a += m, d += p.length - 1;
              } else
                a += l[u][d];
            } else if (this.getInvalidDatePartValue(u)) {
              var h = this.getInvalidDatePartValue(u).toString(), m = mn(p.length - h.length) + h;
              a += m, d += p.length - 1;
            } else
              a += l[u][d];
          } else
            a += i[d];
        }
        i = a;
      }
      var f = this.merge(i, n);
      return f;
    }, e.prototype.getFormattedInvalidDates = function(t) {
      var r = this;
      t === void 0 && (t = "");
      var i = t || this.format, n = {
        E: "",
        H: "",
        M: "",
        a: "",
        d: "",
        h: "",
        m: "",
        s: "",
        y: "",
        S: ""
      };
      return Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(a) {
        var o = r.getInvalidDatePart(a).date;
        if (o) {
          var l = r.intl.formatDate(o, i, r.localeId);
          n[a] = l;
        }
      }), n;
    }, e.prototype.modifyExisting = function(t) {
      for (var r = this.dateFormatString(this.value, this.format).symbols, i = 0; i < r.length; i++)
        this.setExisting(r[i], t);
    }, e.prototype.getExisting = function(t) {
      switch (t) {
        case "y":
          return this.year;
        case "M":
        case "L":
          return this.month;
        case "d":
          return this.date;
        case "E":
          return this.date && this.month && this.year;
        case "h":
        case "H":
          return this.hours;
        case "t":
        case "a":
          return this.dayperiod;
        case "m":
          return this.minutes;
        case "s":
          return this.seconds;
        case "S":
          return this.milliseconds;
        default:
          return !0;
      }
    }, e.prototype.setExisting = function(t, r) {
      switch (t) {
        case "y":
          this.year = r, r === !1 && this._value.setFullYear(nu);
          break;
        case "M":
          this.month = r, r === !1 && this.autoCorrectParts && this._value.setMonth(0);
          break;
        case "d":
          this.date = r;
          break;
        case "h":
        case "H":
          this.hours = r;
          break;
        case "t":
        case "a":
          this.dayperiod = r;
          break;
        case "m":
          this.minutes = r;
          break;
        case "s":
          this.seconds = r;
          break;
        case "S":
          this.milliseconds = r;
          break;
      }
      this.getValue() && this.resetInvalidDate();
    }, e.prototype.modifyPart = function(t, r) {
      if (!(!Qe(t) || !Qe(r) || r === 0)) {
        var i = G(this.value), n = !1, a, o = t === "M", l = t === "d" || t === "E", d = this.getExisting(t);
        if (!this.autoCorrectParts && (l || o)) {
          var u = this._partiallyInvalidDate.invalidDateParts || {}, p = this.getInvalidDatePartValue(t), h = u.y.value || i.getFullYear(), m = u.M.value || i.getMonth(), f = u.d.value || u.E.value || i.getDate(), b = u.h.value || u.H.value || i.getHours(), x = u.m.value || i.getMinutes(), w = u.s.value || i.getSeconds(), y = u.S.value || i.getMilliseconds();
          switch (t) {
            case "y":
              h += r;
              break;
            case "M":
              m += r;
              break;
            case "d":
            case "E":
              f += r;
              break;
          }
          if (t === "M") {
            if ((m < 0 || m > 11) && d) {
              this.setExisting(t, !1), this.resetInvalidDateSymbol(t);
              return;
            }
            if (!d) {
              if (m < 0)
                m = Vi(11 + (m % 11 + 1), 0, 11);
              else {
                var E = Qe(p) ? m : (r - gn) % 12;
                m = Vi(E, 0, 11);
              }
              m = Vi(m, 0, 11);
            }
            m = Vi(m, 0, 11);
          } else if (t === "d") {
            if (d) {
              if (f <= 0 || f > 31) {
                this.setExisting(t, !1), this.resetInvalidDateSymbol(t);
                return;
              }
            } else if (!d) {
              if (Qe(p) && (f <= 0 || f > 31)) {
                this.setExisting(t, !1), this.resetInvalidDateSymbol(t);
                return;
              }
              if (r < 0) {
                var C = Qe(p) ? f : 1 + (31 - Math.abs(r % 31));
                f = Vi(C, 1, 31);
              } else {
                var C = Qe(p) ? f : r % 31;
                f = Vi(C, 1, 31);
              }
              f = Vi(f, 1, 31);
            }
          }
          var R = Tr(h, m, f, b, x, w, y), N = o || l ? this.modifyDateSymbolWithValue(i, t, o ? m : f) : null, O = Js(R, h, m, f, b, x, w, y);
          this.getValue() && Js(R, h, m, f, b, x, w, y) ? (i = G(R), this.markDatePartsAsExisting()) : o && N ? N.getMonth() === m ? this.getExisting("d") ? O ? (i = G(R), this.resetInvalidDateSymbol(t)) : (a = !0, this.setInvalidDatePart(t, {
            value: m,
            date: G(N),
            startDateOffset: r,
            startDate: G(this.value)
          }), this.setExisting(t, !1)) : O ? (this.resetInvalidDateSymbol(t), i = G(R), this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d"))) : (this.resetInvalidDateSymbol(t), i = G(N)) : (a = !0, this.setInvalidDatePart(t, {
            value: m,
            date: G(N),
            startDateOffset: r,
            startDate: G(this.value)
          }), this.setExisting(t, !1)) : l && N && (N.getDate() === f ? this.getExisting("M") ? O ? (i = G(R), this.resetInvalidDateSymbol(t)) : (a = !0, this.setInvalidDatePart(t, {
            value: f,
            date: G(N),
            startDateOffset: r,
            startDate: G(this.value)
          }), this.setExisting(t, !1)) : O ? (i = G(R), this.resetInvalidDateSymbol(t), this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M"))) : (this.resetInvalidDateSymbol(t), i = G(N)) : (a = !0, this.setInvalidDatePart(t, {
            value: f,
            date: G(this.value),
            startDateOffset: r,
            startDate: G(this.value)
          }), this.setExisting(t, !1)));
        } else {
          var T = i.getHours();
          switch (t) {
            case "y":
              i.setFullYear(i.getFullYear() + r);
              break;
            case "M":
              i = Wt(this.value, r);
              break;
            case "d":
            case "E":
              i.setDate(i.getDate() + r);
              break;
            case "h":
            case "H":
              i.setHours(i.getHours() + r), n = !0;
              break;
            case "m":
              i.setMinutes(i.getMinutes() + r), n = !0;
              break;
            case "s":
              i.setSeconds(i.getSeconds() + r), n = !0;
              break;
            case "S":
              i.setMilliseconds(i.getMilliseconds() + r);
              break;
            case "a":
              this.toggleDayPeriod ? i.setHours(T >= 12 ? T - 12 : T + 12) : i.setHours(i.getHours() + 12 * r), n = !0;
              break;
          }
        }
        this.shouldNormalizeCentury() && (i = this.normalizeCentury(i)), n && !this.cycleTime && (i.getDate(), this._value.getDate()), a || (this.setExisting(t, !0), this._value = i, this.getValue() && this.resetInvalidDate());
      }
    }, e.prototype.parsePart = function(t) {
      for (var r = t.symbol, i = t.currentChar, n = t.resetSegmentValue, a = t.cycleSegmentValue, o = t.rawTextValue, l = t.isDeleting, d = t.originalFormat, u = !a, p = this.dateFormatString(this.value, this.format), h = p.partMap.filter(function(he) {
        return he.type === "literal";
      }).map(function(he, ft) {
        return {
          datePartIndex: ft,
          type: he.type,
          pattern: he.pattern,
          literal: ""
        };
      }), m = p.partMap.map(function(he) {
        return {
          type: he.type,
          pattern: he.pattern,
          text: ""
        };
      }), f = 0; f < h.length; f++) {
        for (var b = h[f], x = 0; x < b.pattern.length; x++)
          h[f + x] && (h[f + x].literal = b.pattern[x]);
        f += b.pattern.length - 1;
      }
      for (var f = 0; f < m.length; f++) {
        for (var b = m[f], x = 0; x < b.pattern.length; x++)
          m[f + x] && (m[f + x].text = b.pattern[x]);
        f += b.pattern.length - 1;
      }
      var w = u && r === "M" && p.partMap.filter(function(he) {
        return he.type === "month";
      }).some(function(he) {
        return he.pattern.length > el;
      }), y = {
        value: null,
        switchToNext: !1,
        resetPart: w,
        hasInvalidDatePart: !1
      };
      if (!i)
        if (u)
          for (var f = 0; f < h.length; f++) {
            var E = h[f].literal, C = o.startsWith(E), R = o.endsWith(E), N = o.indexOf(E + E) >= 0;
            if (C || R || N)
              return this.resetLeadingZero(), this.setExisting(r, !1), this.resetInvalidDateSymbol(r), st(y, { value: null, switchToNext: !1 });
          }
        else
          return this.resetLeadingZero(), this.setExisting(r, !1), this.resetInvalidDateSymbol(r), st(y, { value: null, switchToNext: !1 });
      for (var O = this.intl.formatDate(this.value, this.format, this.localeId), T = p.symbols, k = !1, W = "", H = "", Y = "", K = "", _ = "", X = "", A = "", f = 0; f < m.length; f++)
        A += m[f].text;
      var L = this.format === T || this.format === A || this.format === d || this.format.length === d.length, J = (L ? A : d).indexOf(r), D = (L ? A : d).lastIndexOf(r), F = D - J + 1, te = d.length - o.length;
      if (u || !u && !this.autoCorrectParts) {
        for (var ce = 0, f = 0; f < O.length; f++)
          if (T[f] === r) {
            var se = this.getExisting(r);
            if (r === "y")
              if (!this.hasInvalidDatePart() && this.getExisting("y"))
                H += O[f];
              else {
                var ie = this.getInvalidDatePartValue(r);
                Qe(ie) ? (H += (ie || "").toString()[ce] || "", ce++) : H += se ? O[f] : "0";
              }
            else
              H += se ? O[f] : "0";
            te > 0 ? Y.length + te < F && (Y += o[f] || "") : Y += o[f] || "", k = !0;
          } else k ? (X += O[f], _ += O[f]) : (W += O[f], K += O[f]);
        if (L && (A.length < o.length ? Y += i : !l && d.length > o.length, Y.length > F))
          return st(y, { value: null, switchToNext: !1 });
        if (!L || L && !this.autoCorrectParts) {
          H = "", Y = "", W = "", X = "", k = !1;
          for (var He = 0, f = 0; f < d.length; f++)
            if (d[f] === r) {
              var se = this.getExisting(r);
              if (r === "y")
                if (!this.hasInvalidDatePart() && this.getExisting("y"))
                  H += O[f];
                else {
                  var ie = this.getInvalidDatePartValue(r);
                  Qe(ie) ? (H += (ie || "").toString()[He] || "", He++) : H += se ? O[f] : "0";
                }
              else
                H += se ? O[f] || "" : "0";
              te > 0 ? Y.length + te < F && (Y += o[f] || "") : Y += o[f] || "", k = !0;
            } else k ? X += o[f - te] || "" : W += o[f] || "";
          d.length < o.length && (Y += i);
        }
      }
      if (!u)
        if (this.autoCorrectParts) {
          H = "", Y = "", W = "", X = "", k = !1;
          for (var f = 0; f < O.length; f++)
            if (T[f] === r) {
              var se = this.getExisting(r);
              H += se ? O[f] : "0", k = !0;
            } else k ? X += O[f] : W += O[f];
        } else
          H = n ? Y : H;
      var V = null, fe = this.matchMonth(i), Ve = this.matchDayPeriod(i, r), _e = i === "0", Oe = this.leadingZero || {};
      if (_e) {
        Y === "0" && (Y = H);
        var $e = Di(n ? i : (u ? Y : H) + i);
        $e === 0 && !this.isAbbrMonth(p.partMap, r) && r !== "a" && this.incrementLeadingZero(r);
      } else
        this.resetLeadingZero();
      var Et = this.partPattern(p.partMap, r), Ce = Et ? Et.pattern : null, Rt = this.patternLength(Ce) || Ce.length;
      if (u && l && !Y)
        return this.setExisting(r, !1), st(y, { value: null, switchToNext: !1 });
      for (var de = H.length - 3, Zt = !0, me = u ? Y : H, f = Math.max(0, de); f <= H.length && Zt; f++) {
        me = n ? i : u ? Y : H.substring(f) + i, this.autoSwitchParts && r === "h" && H.substring(f) === "12" && (me = me.replace("12", "0")), (u || !this.autoCorrectParts) && (Zt = !1, me = tu(me), me = mn(Rt - me.length) + me);
        var ut = parseInt(me, 10), q = W + me + X;
        V = this.intl.parseDate(q, this.format, this.localeId), V && this.value && p.partMap.every(function(ft) {
          return ft.type !== "year" && ft.type !== "month" && ft.type != "day";
        }) && (V.setFullYear(this.value.getFullYear()), V.setMonth(this.value.getMonth()), V.setDate(this.value.getDate()));
        var Se = !1;
        u && !Ri(V) && this.autoCorrectParts && (V = this.intl.parseDate(K + me + _, this.format, this.localeId), Se = !0);
        var qe = !isNaN(parseInt(i, 10)) || u && l && i === "";
        if (!V && !isNaN(ut) && qe && this.autoCorrectParts) {
          if (r === $$ && !fe) {
            var je = ut - gn;
            je > -1 && je < 12 && (V = G(this.value), V.setMonth(je), V.getMonth() !== je && (V = Fi(Wt(V, -1))));
          }
          r === "y" && (V = Tr(parseInt(me, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0), (u && Ri(V) || !u && V) && this.date && V.getDate() !== this.value.getDate() && (V = Fi(Wt(V, -1))));
        }
        if (u && Ri(V) || !u && V) {
          var Ee = this.isPeekDateOverflowingDatePart({
            useBasePrefixAndSuffix: Se,
            middle: me,
            patternValue: Ce,
            basePrefix: K,
            baseSuffix: _,
            prefix: W,
            suffix: X,
            symbol: r,
            patternLength: Rt,
            leadingZero: Oe
          }), We = Ee.switchToNext;
          return this.shouldNormalizeCentury() && (V = this.normalizeCentury(V)), r === "H" && V.getHours() >= 12 && this.setExisting("a", !0), this._value = V, this.setExisting(r, !0), this.resetInvalidDateSymbol(r), this.autoCorrectParts || (r === "M" ? this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d")) : r === "d" ? this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M")) : r === "y" && this.markDatePartsAsExisting(), this.hasInvalidDatePart() || (this.markDatePartsAsExisting(), !Ee.peekedDate && Ee.switchToNext && !this.autoCorrectParts && (r === "M" || r === "d" && Ee.parsedPeekedValue === 30 && this.value.getMonth() === x$ && (We = !1)))), st(y, { value: this.value, switchToNext: We });
        }
      }
      if (fe && (V = this.intl.parseDate(W + fe + X, this.format, this.localeId), V))
        return this._value = V, this.setExisting(r, !0), st(y, { value: this.value, switchToNext: !1 });
      if (Ve && (V = this.intl.parseDate(W + Ve + X, this.format) || this.intl.parseDate(K + Ve + _, this.format), V))
        return this._value = V, this.setExisting(r, !0), st(y, { value: this.value, switchToNext: !0 });
      if (_e && r !== "a" && this.setExisting(r, !1), !this.autoCorrectParts) {
        var ct = void 0, bt = u ? Y : me, Lt = Di(bt);
        if (jo(Lt) && iu(bt)) {
          if (r === "d" && (Lt <= 0 || Lt > 31) || r === "M" && (Lt <= 0 || Lt > 11)) {
            if (u)
              return st(y, {
                value: null,
                switchToNext: !1
              });
            bt = i, Lt = Di(bt);
          }
          if (!jo(Lt) || !iu(bt))
            return st(y, { value: null, switchToNext: !1 });
          ct = r === "M" ? Lt - gn : Lt;
          var Pt = r === "y", ge = r === "M", P = r === "d", Pe = G(this._value), pt = this._partiallyInvalidDate.invalidDateParts || {}, B = Pt ? ct : pt.y.value || Pe.getFullYear(), ke = ge ? ct : pt.M.value || Pe.getMonth(), Dt = P ? ct : pt.d.value || pt.E.value || Pe.getDate(), er = pt.h.value || pt.H.value || Pe.getHours(), cr = pt.m.value || Pe.getMinutes(), dr = pt.s.value || Pe.getSeconds(), At = pt.S.value || Pe.getMilliseconds(), zt = Tr(B, ke, Dt, er, cr, dr, At), ht = Js(zt, B, ke, Dt, er, cr, dr, At), Ye = Pt || ge || P ? this.modifyDateSymbolWithValue(Pe, r, Pt ? B : ge ? ke : Dt) : null, _t = !1;
          if (ge && Ye ? Ye.getMonth() === ke ? this.getExisting("d") ? ht ? (Pe = G(zt), this.resetInvalidDateSymbol(r)) : (_t = !0, this.setInvalidDatePart(r, {
            value: ke,
            date: G(Ye),
            startDate: G(this.value)
          }), this.setExisting(r, !1)) : ht ? (this.resetInvalidDateSymbol(r), Pe = G(zt), this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d"))) : (this.resetInvalidDateSymbol(r), Pe = G(Ye)) : (_t = !0, this.setInvalidDatePart(r, {
            value: ke,
            date: G(Ye),
            startDate: G(this.value)
          }), this.setExisting(r, !1)) : P && Ye ? Ye.getDate() === Dt ? this.getExisting("M") ? ht ? (Pe = G(zt), this.resetInvalidDateSymbol(r)) : (_t = !0, this.setInvalidDatePart(r, {
            value: Dt,
            date: G(Ye),
            startDate: G(this.value)
          }), this.setExisting(r, !1)) : ht ? (Pe = G(zt), this.resetInvalidDateSymbol(r), this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M"))) : (this.resetInvalidDateSymbol(r), Pe = G(Ye)) : (_t = !0, this.setInvalidDatePart(r, {
            value: Dt,
            date: G(this.value),
            startDate: G(this.value)
          }), this.setExisting(r, !1)) : Pt && Ye && (Ye.getFullYear() === B ? this.getExisting("d") && this.getExisting("M") ? ht ? (Pe = G(zt), this.resetInvalidDateSymbol(r)) : (_t = !0, this.setInvalidDatePart(r, {
            value: B,
            date: G(Ye),
            startDate: G(this.value)
          }), this.setExisting(r, !1)) : ht ? (this.resetInvalidDateSymbol(r), Pe = G(zt), this.getExisting("M") && this.getExisting("d") && (this.setExisting("y", !0), this.resetInvalidDateSymbol("y"))) : (this.resetInvalidDateSymbol(r), Pe = G(Ye)) : (_t = !0, this.setInvalidDatePart(r, {
            value: B,
            date: G(Ye),
            startDate: G(this.value)
          }), this.setExisting(r, !1))), !_t) {
            if (this.setExisting(r, !0), u && !Ri(V)) {
              var mr = this.intl.parseDate(K + me + _, this.format, this.localeId);
              Ri(mr) && (this._value = mr);
            } else
              this._value = Pe;
            this.getValue() && this.resetInvalidDate();
          }
          var We = !1;
          if (r === "M")
            Lt >= 2 || bt.length >= 2 ? We = !0 : We = !1;
          else if (L) {
            var U = this.isPeekDateOverflowingDatePart({
              useBasePrefixAndSuffix: !this.autoCorrectParts,
              middle: me,
              patternValue: Ce,
              basePrefix: K,
              baseSuffix: _,
              prefix: W,
              suffix: X,
              symbol: r,
              patternLength: Rt,
              leadingZero: Oe
            }).switchToNext;
            We = U;
          } else
            We = bt.length > F;
          return st(y, {
            value: null,
            switchToNext: We,
            hasInvalidDatePart: _t
          });
        }
      }
      return st(y, { value: null, switchToNext: !1 });
    }, e.prototype.symbolMap = function(t) {
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(d$, {})[t];
    }, e.prototype.resetLeadingZero = function() {
      var t = this.leadingZero !== null;
      return this.setLeadingZero(null), t;
    }, e.prototype.setLeadingZero = function(t) {
      this.leadingZero = t;
    }, e.prototype.getLeadingZero = function() {
      return this.leadingZero || {};
    }, e.prototype.normalizeCentury = function(t) {
      if (!Qe(t))
        return t;
      var r = h$(t), i = this.getNormalizedCenturyBase(r), n = f$(t, i + r);
      return n;
    }, e.prototype.incrementLeadingZero = function(t) {
      var r = this.leadingZero || {};
      r[t] = (r[t] || 0) + 1, this.leadingZero = r;
    }, e.prototype.isAbbrMonth = function(t, r) {
      var i = this.partPattern(t, r);
      return i.type === "month" && i.names;
    }, e.prototype.partPattern = function(t, r) {
      return t.filter(function(i) {
        return i.pattern.indexOf(r) !== -1;
      })[0];
    }, e.prototype.peek = function(t, r) {
      var i = t.replace(/^0*/, "") + "0";
      return mn(r.length - i.length) + i;
    }, e.prototype.matchMonth = function(t) {
      if (this.typedMonthPart += t.toLowerCase(), this.monthNames.length === 0)
        return "";
      for (; this.typedMonthPart.length > 0; ) {
        for (var r = 0; r < this.monthNames.length; r++)
          if (this.monthNames[r].toLowerCase().indexOf(this.typedMonthPart) === 0)
            return this.monthNames[r];
        var i = parseInt(this.typedMonthPart, 10);
        if (i >= 1 && i <= 12 && i.toString() === this.typedMonthPart)
          return this.monthNames[i - 1];
        this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
      }
      return "";
    }, e.prototype.matchDayPeriod = function(t, r) {
      var i = t.toLowerCase();
      if (r === "a" && this.dayPeriods) {
        if (this.dayPeriods.am.toLowerCase().startsWith(i))
          return this.dayPeriods.am;
        if (this.dayPeriods.pm.toLowerCase().startsWith(i))
          return this.dayPeriods.pm;
      }
      return "";
    }, e.prototype.allFormattedMonths = function(t) {
      t === void 0 && (t = "en");
      for (var r = this.intl.splitDateFormat(this.format, this.localeId), i = 0; i < r.length; i++)
        if (r[i].type === "month" && r[i].names)
          return this.intl.dateFormatNames(t, r[i].names);
      return [];
    }, e.prototype.allDayPeriods = function(t) {
      t === void 0 && (t = "en");
      for (var r = this.intl.splitDateFormat(this.format), i = 0; i < r.length; i++)
        if (r[i].type === "dayperiod" && r[i].names)
          return this.intl.dateFormatNames(t, r[i].names);
      return null;
    }, e.prototype.patternLength = function(t) {
      return t[0] === "y" ? 4 : w$.test(t) ? 2 : 0;
    }, e.prototype.dateFormatString = function(t, r) {
      for (var i = this.intl.splitDateFormat(r, this.localeId), n = [], a = [], o = 0; o < i.length; o++)
        for (var l = this.intl.formatDate(t, { pattern: i[o].pattern }, this.localeId).length; l > 0; )
          n.push(this.symbols[i[o].pattern[0]] || ot.formatSeparator), a.push(i[o]), l--;
      var d = new l$();
      return d.symbols = n.join(""), d.partMap = a, d;
    }, e.prototype.merge = function(t, r) {
      for (var i = "", n = "", a = r.symbols, o = !1, l = 0, d = this.getFormattedInvalidDates(a), u = a.length - 1; u >= 0; u--) {
        var p = this.getPartsForSegment(r, u);
        if (this.knownParts.indexOf(a[u]) === -1 || this.getExisting(a[u]))
          this.autoCorrectParts ? i = t[u] + i : t.length !== a.length ? o ? i = t[u] + i : l > 0 ? (i = t[u] + i, l--, l <= 0 && (o = !0)) : i = (t[u + t.length - a.length] || "") + i : i = t[u] + i, n = a[u] + n;
        else {
          var h = a[u], m = 0;
          if (this.autoCorrectParts || !this.autoCorrectParts && !this.getInvalidDatePartValue(h)) {
            for (; u >= 0 && h === a[u]; )
              u--;
            u++;
          }
          if (this.leadingZero && this.leadingZero[h])
            i = "0" + i;
          else if (!this.autoCorrectParts && this.getInvalidDatePartValue(h)) {
            var f = this.getInvalidDatePartValue(h).toString();
            if (h === "M")
              if (f = (Di(this.getInvalidDatePartValue(h)) + gn).toString(), p.length > el)
                i = d[h][u] + i;
              else {
                f = (Di(this.getInvalidDatePartValue(h)) + gn).toString();
                var b = mn(p.length - f.length) + f;
                i = b + i, m = p.length - 1, l = f.length - p.length;
              }
            else {
              var b = mn(p.length - f.length) + f;
              i = b + i, m = p.length - 1, l = f.length - p.length;
            }
          } else
            i = this.dateFieldName(r.partMap[u]) + i;
          for (; n.length < i.length; )
            n = a[u] + n;
          m !== 0 && (u = u - m + (t.length - a.length));
        }
      }
      return { text: i, format: n };
    }, e.prototype.dateFieldName = function(t) {
      var r = this.formatPlaceholder || "wide";
      return r[t.type] ? r[t.type] : r === "formatPattern" ? t.pattern : this.intl.dateFieldName(Object.assign(t, { nameType: r }));
    }, e.prototype.getNormalizedCenturyBase = function(t) {
      return t > this.twoDigitYearMax ? b$ : y$;
    }, e.prototype.shouldNormalizeCentury = function() {
      return this.intl.splitDateFormat(this.format).some(function(t) {
        return t.pattern === "yy";
      });
    }, e.prototype.resetInvalidDate = function() {
      var t = this;
      this._partiallyInvalidDate.startDate = null, Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(r) {
        t.resetInvalidDatePart(r);
      });
    }, e.prototype.resetInvalidDateSymbol = function(t) {
      var r = this;
      this.resetInvalidDatePart(t);
      var i = !0;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(n) {
        r._partiallyInvalidDate.invalidDateParts[n] && Qe(r._partiallyInvalidDate.invalidDateParts[n].value) && (i = !1);
      }), i && this.resetInvalidDate();
    }, e.prototype.resetInvalidDatePart = function(t) {
      this._partiallyInvalidDate.invalidDateParts[t] && (this._partiallyInvalidDate.invalidDateParts[t] = {
        value: null,
        date: null,
        startDateOffset: 0
      });
    }, e.prototype.getInvalidDatePart = function(t) {
      var r = this._partiallyInvalidDate.invalidDateParts[t];
      return r || {};
    }, e.prototype.getInvalidDatePartValue = function(t) {
      var r = this._partiallyInvalidDate.invalidDateParts[t];
      return (r || {}).value;
    }, e.prototype.setInvalidDatePart = function(t, r) {
      var i = r.value, n = i === void 0 ? null : i, a = r.date, o = a === void 0 ? null : a, l = r.startDateOffset, d = l === void 0 ? 0 : l, u = r.startDate, p = u === void 0 ? null : u;
      this._partiallyInvalidDate.invalidDateParts[t] && (this._partiallyInvalidDate.invalidDateParts[t].value = n, this._partiallyInvalidDate.invalidDateParts[t].date = o, this._partiallyInvalidDate.invalidDateParts[t].startDateOffset = d, this._partiallyInvalidDate.startDate = p);
    }, e.prototype.hasInvalidDatePart = function() {
      var t = this, r = !1;
      return Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(i) {
        t._partiallyInvalidDate.invalidDateParts[i] && Qe(t._partiallyInvalidDate.invalidDateParts[i].value) && (r = !0);
      }), r;
    }, e.prototype.modifyDateSymbolWithOffset = function(t, r, i) {
      var n = G(t), a = !1;
      switch (r) {
        case "y":
          n.setFullYear(n.getFullYear() + i);
          break;
        case "M":
          n = Wt(this.value, i);
          break;
        case "d":
        case "E":
          n.setDate(n.getDate() + i);
          break;
        case "h":
        case "H":
          n.setHours(n.getHours() + i), a = !0;
          break;
        case "m":
          n.setMinutes(n.getMinutes() + i), a = !0;
          break;
        case "s":
          n.setSeconds(n.getSeconds() + i), a = !0;
          break;
        case "S":
          n.setMilliseconds(n.getMilliseconds() + i);
          break;
        case "a":
          n.setHours(n.getHours() + 12 * i), a = !0;
          break;
      }
      return {
        date: n,
        timeModified: a
      };
    }, e.prototype.modifyDateSymbolWithValue = function(t, r, i) {
      var n = G(t);
      switch (r) {
        case "y":
          n.setFullYear(i);
          break;
        case "M":
          n = Wt(t, i - t.getMonth());
          break;
        case "d":
        case "E":
          n.setDate(i);
          break;
        case "h":
        case "H":
          n.setHours(i);
          break;
        case "m":
          n.setMinutes(i);
          break;
        case "s":
          n.setSeconds(i);
          break;
        case "S":
          n.setMilliseconds(i);
          break;
        case "a":
          n.setHours(i);
          break;
      }
      return n;
    }, e.prototype.markDatePartsAsExisting = function() {
      this.modifyExisting(!0);
    }, e.prototype.getPartsForSegment = function(t, r) {
      for (var i = t.partMap[r], n = [], a = r; a < t.partMap.length; a++) {
        var o = t.partMap[a];
        if (i.type === o.type && i.pattern === o.pattern)
          n.push(o);
        else
          break;
      }
      for (var a = r - 1; a >= 0; a--) {
        var o = t.partMap[a];
        if (i.type === o.type && i.pattern === o.pattern)
          n.unshift(o);
        else
          break;
      }
      return n;
    }, e.prototype.isPeekDateOverflowingDatePart = function(t) {
      var r = t.useBasePrefixAndSuffix, i = t.middle, n = t.patternValue, a = t.basePrefix, o = t.baseSuffix, l = t.prefix, d = t.suffix, u = t.symbol, p = t.patternLength, h = t.leadingZero, m = this.peek(i, n), f = r ? "".concat(a).concat(m).concat(o) : "".concat(l).concat(m).concat(d), b = this.intl.parseDate(f, this.format, this.localeId), x = (this.leadingZero || {})[u] || 0, w = x + tu(i).length >= p, y = Di(m), E = b === null || (h[u] ? n.length <= i.length : w);
      return {
        peekedDate: b,
        peekedDateString: f,
        peekedValue: m,
        parsedPeekedValue: y,
        switchToNext: E
      };
    }, e;
  }()
), Ur = {
  BACKSPACE: 8,
  DELETE: 46,
  TAB: 9,
  ENTER: 13,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  END: 35,
  HOME: 36
}, C$ = {
  events: {}
}, S$ = (
  /** @class */
  function() {
    function e(t) {
      this.options = st({}, C$, t);
    }
    return e.prototype.destroy = function() {
      this.options = {};
    }, e.prototype.trigger = function(t, r) {
      r === void 0 && (r = {});
      var i = {
        defaultPrevented: !1,
        preventDefault: function() {
          i.defaultPrevented = !0;
        }
      };
      return p$(this.options.events[t]) ? (this.options.events[t](st(i, r, {
        sender: this
      })), i.defaultPrevented) : !1;
    }, e;
  }()
), ir;
(function(e) {
  e.None = "none", e.Caret = "caret", e.Selection = "selection";
})(ir || (ir = {}));
var Fr, ei = 1, au = "dragStart", ou = "drop", su = "touchstart", lu = "mousedown", cu = "mouseup", du = "click", $o = "input", ko = "keydown", Co = "focus", So = "blur", uu = "paste", pu = "DOMMouseScroll", Eo = "mousewheel", Xh = "valueChange", Gh = "inputEnd", Zh = "blurEnd", Qh = "focusEnd", Do = "change", tl = {
  format: "d",
  hasPlaceholder: !1,
  placeholder: null,
  cycleTime: !0,
  locale: null,
  steps: {
    millisecond: ei,
    second: ei,
    minute: ei,
    hour: ei,
    day: ei,
    month: ei,
    year: ei
  },
  formatPlaceholder: null,
  events: (Fr = {}, Fr[Xh] = null, Fr[$o] = null, Fr[Gh] = null, Fr[Co] = null, Fr[Qh] = null, Fr[So] = null, Fr[Zh] = null, Fr[ko] = null, Fr[Eo] = null, Fr[Do] = null, Fr),
  selectNearestSegmentOnFocus: !1,
  selectPreviousSegmentOnBackspace: !1,
  enableMouseWheel: !1,
  allowCaretMode: !1,
  autoSwitchParts: !0,
  autoSwitchKeys: [],
  twoDigitYearMax: ot.twoDigitYearMax,
  autoCorrectParts: !0,
  autoFill: !1,
  toggleDayPeriod: !1
}, Wo = (
  /** @class */
  function(e) {
    Ff(t, e);
    function t(r, i) {
      var n = e.call(this, i) || this;
      return n.dateObject = null, n.currentText = "", n.currentFormat = "", n.interactionMode = ir.None, n.previousElementSelection = { start: 0, end: 0 }, n.init(r, i), n;
    }
    return Object.defineProperty(t.prototype, "value", {
      get: function() {
        return this.dateObject && this.dateObject.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function(r, i) {
      var n = Ri(this.options.value) ? G(this.options.value) : new Date(i.formattedValue);
      Ri(n) || (n = null), this.element = r, this.options = st({}, tl, i, { steps: qa(qa({}, tl.steps), i.steps) }), this.intl = this.options.intlService, this.dateObject = this.createDateObject(), this.dateObject.setValue(n), this.setTextAndFormat(), this.bindEvents(), this.resetSegmentValue = !0, this.interactionMode = ir.None, this.forceUpdate();
    }, t.prototype.destroy = function() {
      this.unbindEvents(), this.dateObject = null, e.prototype.destroy.call(this);
    }, t.prototype.bindEvents = function() {
      this.onElementDragStart = this.onElementDragStart.bind(this), this.element.addEventListener(au, this.onElementDragStart), this.onElementDrop = this.onElementDrop.bind(this), this.element.addEventListener(ou, this.onElementDrop), this.onElementClick = this.onElementClick.bind(this), this.element.addEventListener(du, this.onElementClick), this.onElementMouseDown = this.onElementMouseDown.bind(this), this.element.addEventListener(lu, this.onElementMouseDown), this.element.addEventListener(su, this.onElementMouseDown), this.onElementMouseUp = this.onElementMouseUp.bind(this), this.element.addEventListener(cu, this.onElementMouseUp), this.onElementInput = this.onElementInput.bind(this), this.element.addEventListener($o, this.onElementInput), this.onElementKeyDown = this.onElementKeyDown.bind(this), this.element.addEventListener(ko, this.onElementKeyDown), this.onElementFocus = this.onElementFocus.bind(this), this.element.addEventListener(Co, this.onElementFocus), this.onElementBlur = this.onElementBlur.bind(this), this.element.addEventListener(So, this.onElementBlur), this.onElementChange = this.onElementChange.bind(this), this.element.addEventListener(Do, this.onElementChange), this.onElementPaste = this.onElementPaste.bind(this), this.element.addEventListener(uu, this.onElementPaste), this.onElementMouseWheel = this.onElementMouseWheel.bind(this), this.element.addEventListener(pu, this.onElementMouseWheel), this.element.addEventListener(Eo, this.onElementMouseWheel);
    }, t.prototype.unbindEvents = function() {
      this.element.removeEventListener(au, this.onElementDragStart), this.element.removeEventListener(ou, this.onElementDrop), this.element.removeEventListener(su, this.onElementMouseDown), this.element.removeEventListener(lu, this.onElementMouseDown), this.element.removeEventListener(cu, this.onElementMouseUp), this.element.removeEventListener(du, this.onElementClick), this.element.removeEventListener($o, this.onElementInput), this.element.removeEventListener(ko, this.onElementKeyDown), this.element.removeEventListener(Co, this.onElementFocus), this.element.removeEventListener(So, this.onElementBlur), this.element.removeEventListener(Do, this.onElementChange), this.element.removeEventListener(uu, this.onElementPaste), this.element.removeEventListener(pu, this.onElementMouseWheel), this.element.removeEventListener(Eo, this.onElementMouseWheel);
    }, t.prototype.setOptions = function(r, i) {
      i === void 0 && (i = !1), this.options = st({}, this.options, r, { steps: qa(qa({}, tl.steps), r.steps) }), this.setDateObjectOptions(), i && (this.unbindEvents(), this.init(this.element, this.options));
    }, t.prototype.setDateObjectOptions = function() {
      if (this.dateObject) {
        var r = this.getDateObjectOptions();
        this.dateObject.setOptions(r);
      }
    }, t.prototype.resetLocale = function() {
      this.unbindEvents(), this.init(this.element, this.options);
    }, t.prototype.isInCaretMode = function() {
      return this.interactionMode === ir.Caret;
    }, t.prototype.focus = function() {
      this.element.focus(), this.options.selectNearestSegmentOnFocus && this.selectNearestSegment(0);
    }, t.prototype.onElementDragStart = function(r) {
      r.preventDefault();
    }, t.prototype.onElementDrop = function(r) {
      r.preventDefault();
    }, t.prototype.onElementMouseDown = function() {
      this.mouseDownStarted = !0, this.focusedPriorToMouseDown = this.isActive;
    }, t.prototype.onElementMouseUp = function(r) {
      this.mouseDownStarted = !1, r.preventDefault();
    }, t.prototype.onElementClick = function(r) {
      this.mouseDownStarted = !1, this.switchedPartOnPreviousKeyAction = !1;
      var i = this.selection;
      if (this.isInCaretMode() && this.forceUpdate(), r.detail !== 3) if (this.isActive && this.options.selectNearestSegmentOnFocus) {
        var n = this.element.selectionStart !== this.element.selectionEnd, a = Qe(this.options.placeholder) && !this.dateObject.hasValue() && !this.focusedPriorToMouseDown, o = !n && a, l = o ? 0 : this.caret()[0];
        this.selectNearestSegment(l);
      } else
        this.setSelection(this.selectionByIndex(i.start));
    }, t.prototype.onElementInput = function(r) {
      this.triggerInput({ event: r });
      var i = this.elementValue;
      if (!(!this.element || !this.dateObject)) {
        var n = this.switchedPartOnPreviousKeyAction;
        if (this.isPasteInProgress) {
          this.options.allowCaretMode && (this.resetSegmentValue = !1), this.updateOnPaste(r), this.isPasteInProgress = !1;
          return;
        }
        var a = this.keyDownEvent || {}, o = a.keyCode === Ur.BACKSPACE || a.key === ba.BACKSPACE, l = a.keyCode === Ur.DELETE || a.key === ba.DELETE, d = this.interactionMode;
        this.options.allowCaretMode && d !== ir.Caret && !l && !o && (this.resetSegmentValue = !0), this.options.allowCaretMode ? this.interactionMode = ir.Caret : this.interactionMode = ir.Selection;
        var u = this.isInCaretMode();
        if (u && this.keyDownEvent.key === ba.SPACE) {
          this.restorePreviousInputEventState();
          return;
        }
        var p = this.dateObject && this.dateObject.getValue(), h = this.dateObject ? this.dateObject.value : null, m = this.dateObject.getTextAndFormat(), f = m.text, b = m.format;
        this.currentFormat = b;
        var x = "";
        u ? o || l ? x = this.previousElementValue : d === ir.Caret ? x = this.previousElementValue : x = f : x = f;
        var w = this.elementValue, y = c$({
          oldText: x,
          newText: w,
          formatPattern: this.currentFormat,
          selectionStart: this.selection.start,
          isInCaretMode: u,
          keyEvent: this.keyDownEvent
        });
        if (y && y.length && y[0] && y[0][1] !== ot.formatSeparator && (this.switchedPartOnPreviousKeyAction = !1), u && (!y || y.length === 0)) {
          this.restorePreviousInputEventState();
          return;
        } else if (u && y.length === 1) {
          if (!y[0] || !y[0][0]) {
            this.restorePreviousInputEventState();
            return;
          } else if (u && y[0] && (y[0][0] === ot.formatSeparator || y[0][1] === ot.formatSeparator)) {
            this.restorePreviousInputEventState();
            return;
          }
        }
        var E = y.length === 1 && y[0][1] === ot.formatSeparator, C = [], R = !1, N = null;
        if (!E)
          for (var O = 0; O < y.length; O++) {
            var T = this.dateObject.parsePart({
              symbol: y[O][0],
              currentChar: y[O][1],
              resetSegmentValue: this.resetSegmentValue,
              cycleSegmentValue: !this.isInCaretMode(),
              rawTextValue: this.element.value,
              isDeleting: o || l,
              originalFormat: this.currentFormat
            });
            C.push(T), T.value || (N = { type: "parse" }), R = T.switchToNext;
          }
        this.options.autoSwitchParts || (R = !1), this.resetSegmentValue = !1;
        var k = this.options.format === this.currentFormat || // all not fixed formats are 1 symbol, e.g. "d"
        Qe(this.options.format) && this.options.format.length > 1, W = C[C.length - 1], H = W && !Qe(W.value), Y = u && (o || l) && H, K = W ? W.resetPart : !1, _ = this.dateObject.getValue(), X = !Zi(p, _), A = this.dateObject.value, L, J = this.selection;
        if (u) {
          var D = y && y.length > 0 ? y[0][0] : null, F = this.dateObject.getLeadingZero()[D];
          y.length && y[0][0] !== ot.formatSeparator ? R ? (this.forceUpdateWithSelection(), this.switchDateSegment(1)) : K ? (L = this.currentFormat[J.start], L ? (this.forceUpdate(), this.setSelection(this.selectionBySymbol(L))) : this.restorePreviousInputEventState()) : Y ? (this.forceUpdate(), y.length && y[0][0] !== ot.formatSeparator && this.setSelection(this.selectionBySymbol(y[0][0]))) : H ? r.data === "0" && F || (Qe(p) && !Qe(_) ? this.restorePreviousInputEventState() : !Qe(p) && Qe(_) ? this.forceUpdateWithSelection() : Qe(p) && Qe(_) ? X ? this.forceUpdateWithSelection() : this.restorePreviousInputEventState() : !Qe(p) && !Qe(_) ? this.forceUpdateWithSelection() : h !== A || this.restorePreviousInputEventState()) : H || k || this.forceUpdateWithSelection() : !this.options.autoSwitchParts && y[0][1] === ot.formatSeparator || this.setSelection(this.selectionBySymbol(y[0][0]));
        } else u || (this.forceUpdate(), y.length && y[0][0] !== ot.formatSeparator && this.setSelection(this.selectionBySymbol(y[0][0])), this.options.autoSwitchParts ? E ? (this.resetSegmentValue = !0, n || this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0) : R && (this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0) : W && W.switchToNext ? this.resetSegmentValue = !0 : E && (this.resetSegmentValue = !0, n || this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0), o && this.options.selectPreviousSegmentOnBackspace && this.switchDateSegment(-1));
        this.tryTriggerValueChange({
          oldValue: p,
          event: r
        }), this.triggerInputEnd({ event: r, error: N, oldElementValue: i, newElementValue: this.elementValue }), u && this.setTextAndFormat();
      }
    }, t.prototype.onElementFocus = function(r) {
      this.triggerFocus({ event: r }) || (this.isActive = !0, this.interactionMode = ir.None, this.switchedPartOnPreviousKeyAction = !1, this.refreshElementValue(), this.mouseDownStarted || this.caret(0, this.elementValue.length), this.mouseDownStarted = !1, this.triggerFocusEnd({ event: r }));
    }, t.prototype.onElementBlur = function(r) {
      this.resetSegmentValue = !0, this.isActive = !1, !this.triggerBlur({ event: r }) && (this.options.autoFill && this.autoFill(), this.interactionMode = ir.None, this.switchedPartOnPreviousKeyAction = !1, this.refreshElementValue(), this.triggerBlurEnd({ event: r }));
    }, t.prototype.onElementChange = function(r) {
      this.triggerChange({ event: r });
    }, t.prototype.onElementKeyDown = function(r) {
      if (!this.triggerKeyDown({ event: r })) {
        var i = this.selection, n = i.start, a = i.end, o = r;
        if (this.keyDownEvent = r, this.previousElementValue = this.element.value, this.previousElementSelection = { start: n, end: a }, this.keyEventMatchesAutoSwitchKeys(r)) {
          var l = r.keyCode === Ur.TAB;
          if (l) {
            var d = this.selection, u = d.start, p = d.end;
            if (r.shiftKey && l ? this.switchDateSegment(-1) : this.switchDateSegment(1), u !== this.selection.start || p !== this.selection.end) {
              r.preventDefault();
              return;
            }
          } else {
            r.preventDefault(), this.switchDateSegment(1);
            return;
          }
        }
        var h = this.currentFormat[this.selection.start], m = this.getStepFromSymbol(h), f = !1, b = this.elementValue;
        if (!(r.altKey || r.ctrlKey || r.metaKey || r.keyCode === Ur.TAB)) {
          switch (r.keyCode) {
            case Ur.ARROW_LEFT:
              this.switchDateSegment(-1), f = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case Ur.ARROW_UP:
              this.modifyDateSegmentValue(m, h, o), b !== this.elementValue && this.triggerInputEnd({ event: r, error: null, newElementValue: this.elementValue, oldElementValue: b }), f = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case Ur.ARROW_RIGHT:
              this.switchDateSegment(1), f = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case Ur.ARROW_DOWN:
              this.modifyDateSegmentValue(-m, h, o), b !== this.elementValue && this.triggerInputEnd({ event: r, error: null, newElementValue: this.elementValue, oldElementValue: b }), f = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case Ur.ENTER:
              break;
            case Ur.HOME:
              this.selectNearestSegment(0), f = !0, this.switchedPartOnPreviousKeyAction = !1, this.resetSegmentValue = !0;
              break;
            case Ur.END:
              this.selectNearestSegment(this.elementValue.length), f = !0, this.switchedPartOnPreviousKeyAction = !1, this.resetSegmentValue = !0;
              break;
            default:
              return;
          }
          f && r.preventDefault();
        }
      }
    }, t.prototype.onElementPaste = function() {
      this.isPasteInProgress = !0;
    }, t.prototype.onElementMouseWheel = function(r) {
      var i = this.elementValue;
      if (!(!this.options.enableMouseWheel || this.triggerMouseWheel({ event: r })) && this.isActive) {
        var n = r;
        n.shiftKey ? this.switchDateSegment((n.wheelDelta || -n.detail) > 0 ? -1 : 1) : this.modifyDateSegmentValue((n.wheelDelta || -n.detail) > 0 ? 1 : -1), n.returnValue = !1, n.preventDefault && n.preventDefault(), i !== this.elementValue && this.triggerInputEnd({ event: r, error: null, newElementValue: this.elementValue, oldElementValue: i });
      }
    }, t.prototype.updateOnPaste = function(r) {
      var i = this.intl.parseDate(this.elementValue, this.inputFormat) || this.value;
      Qe(i) && this.dateObject.shouldNormalizeCentury() && (i = this.dateObject.normalizeCentury(i));
      var n = this.dateObject && this.dateObject.getValue();
      this.writeValue(i), this.tryTriggerValueChange({
        oldValue: n,
        event: r
      });
    }, Object.defineProperty(t.prototype, "elementValue", {
      get: function() {
        return (this.element || {}).value || "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "inputFormat", {
      get: function() {
        return this.options.format ? typeof this.options.format == "string" ? this.options.format : this.options.format.inputFormat : ot.defaultDateFormat;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "displayFormat", {
      get: function() {
        return this.options.format ? typeof this.options.format == "string" ? this.options.format : this.options.format.displayFormat : ot.defaultDateFormat;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "selection", {
      get: function() {
        var r = { start: 0, end: 0 };
        return this.element !== null && this.element.selectionStart !== void 0 && (r = {
          start: this.element.selectionStart,
          end: this.element.selectionEnd
        }), r;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.setSelection = function(r) {
      this.element && document.activeElement === this.element && (this.element.setSelectionRange(r.start, r.end), ru() && v$() && this.element.scrollIntoView({ block: "nearest", inline: "nearest" }), r.start !== r.end && (this.interactionMode = ir.Selection));
    }, t.prototype.selectionBySymbol = function(r) {
      for (var i = -1, n = 0, a = 0; a < this.currentFormat.length; a++)
        this.currentFormat[a] === r && (n = a + 1, i === -1 && (i = a));
      return i < 0 && (i = 0), !this.options.autoCorrectParts && this.currentFormat.length !== this.currentText.length && (this.currentFormat.length < this.currentText.length ? n += this.currentText.length - this.currentFormat.length : n = Math.max(0, n - (this.currentFormat.length - this.currentText.length))), { start: i, end: n };
    }, t.prototype.selectionByIndex = function(r) {
      for (var i = { start: r, end: r }, n = r, a = r - 1; n < this.currentFormat.length || a >= 0; n++, a--) {
        if (n < this.currentFormat.length && this.currentFormat[n] !== ot.formatSeparator) {
          i = this.selectionBySymbol(this.currentFormat[n]);
          break;
        }
        if (a >= 0 && this.currentFormat[a] !== ot.formatSeparator) {
          i = this.selectionBySymbol(this.currentFormat[a]);
          break;
        }
      }
      return i;
    }, t.prototype.switchDateSegment = function(r) {
      var i = this.selection;
      if (this.isInCaretMode()) {
        var n = i.start, a = this.currentFormat[n - 1], o = "", l = "";
        if (r < 0) {
          for (var d = n + r; d >= 0; d--)
            if (l = this.currentFormat[d], l !== ot.formatSeparator && l !== a) {
              n = d, o = l;
              break;
            }
        } else
          for (var d = n + r; d < this.currentFormat.length; d++)
            if (l = this.currentFormat[d], l !== ot.formatSeparator && l !== a) {
              n = d, o = l;
              break;
            }
        if (o) {
          this.forceUpdate(), this.setSelection(this.selectionBySymbol(o)), this.interactionMode = ir.Selection;
          return;
        }
      }
      this.interactionMode = ir.None;
      var u = this.selection, p = u.start, h = u.end;
      if (p < h && this.currentFormat[p] !== this.currentFormat[h - 1]) {
        this.setSelection(this.selectionByIndex(r > 0 ? p : h - 1)), this.resetSegmentValue = !0, this.interactionMode = ir.None;
        return;
      }
      for (var m = this.currentFormat[p], f = p + r; f > 0 && f < this.currentFormat.length && !(this.currentFormat[f] !== m && this.currentFormat[f] !== ot.formatSeparator); )
        f += r;
      if (this.currentFormat[f] !== ot.formatSeparator) {
        for (var b = f; b >= 0 && b < this.currentFormat.length && this.currentFormat[b] === this.currentFormat[f]; )
          b += r;
        f > b && (b + 1 !== p || f + 1 !== h) ? (this.setSelection({ start: b + 1, end: f + 1 }), this.resetSegmentValue = !0) : f < b && (f !== p || b !== h) && (this.setSelection({ start: f, end: b }), this.resetSegmentValue = !0), this.interactionMode = ir.None;
      }
    }, t.prototype.modifyDateSegmentValue = function(r, i, n) {
      if (i === void 0 && (i = ""), n === void 0 && (n = {}), !(!this.dateObject || this.options.readonly)) {
        var a = this.value, o = ei, l = this.caret();
        if (i = i || this.currentFormat[l[0]], i === "S" && (!this.options.steps.millisecond || this.options.steps.millisecond === ei)) {
          var d = m$(this.inputFormat);
          o = g$(d);
        }
        this.dateObject.modifyPart(i, o * r), this.tryTriggerValueChange({
          oldValue: a,
          event: n
        }), this.forceUpdate(), this.setSelection(this.selectionBySymbol(i));
      }
    }, t.prototype.tryTriggerValueChange = function(r) {
      if (r === void 0 && (r = { oldValue: null, event: {} }), !Zi(this.value, r.oldValue))
        return this.triggerValueChange(r);
    }, t.prototype.triggerValueChange = function(r) {
      return r === void 0 && (r = { oldValue: null, event: {} }), this.trigger(Xh, st(r, {
        value: this.value
      }));
    }, t.prototype.triggerInput = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger($o, st(r, {
        value: this.value
      }));
    }, t.prototype.triggerInputEnd = function(r) {
      return r === void 0 && (r = { event: {}, error: null, oldElementValue: "", newElementValue: "" }), this.trigger(Gh, st(r, {
        value: this.value
      }));
    }, t.prototype.triggerFocus = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(Co, st({}, r));
    }, t.prototype.triggerFocusEnd = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(Qh, st({}, r));
    }, t.prototype.triggerBlur = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(So, st({}, r));
    }, t.prototype.triggerBlurEnd = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(Zh, st({}, r));
    }, t.prototype.triggerChange = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(Do, st(r, {
        value: this.value
      }));
    }, t.prototype.triggerKeyDown = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(ko, st({}, r));
    }, t.prototype.triggerMouseWheel = function(r) {
      return r === void 0 && (r = { event: {} }), this.trigger(Eo, st({}, r));
    }, t.prototype.forceUpdate = function() {
      this.setTextAndFormat(), this.refreshElementValue();
    }, t.prototype.forceUpdateWithSelection = function() {
      var r = this.selection, i = r.start, n = r.end, a = this.elementValue.length;
      this.forceUpdate();
      var o = this.elementValue.length - a;
      this.setSelection({
        start: i + o,
        end: n + o
      });
    }, t.prototype.setTextAndFormat = function() {
      var r = this.dateObject.getTextAndFormat(), i = r.text, n = r.format;
      this.currentFormat = n, this.currentText = i;
    }, t.prototype.setElementValue = function(r) {
      this.element.value = r;
    }, t.prototype.getStepFromSymbol = function(r) {
      switch (r) {
        case "S":
          return Number(this.options.steps.millisecond);
        case "s":
          return Number(this.options.steps.second);
        case "m":
          return Number(this.options.steps.minute);
        case "h":
        case "H":
          return Number(this.options.steps.hour);
        case "M":
          return Number(this.options.steps.month);
        case "d":
        case "E":
          return Number(this.options.steps.day);
        case "y":
          return Number(this.options.steps.year);
        default:
          return ei;
      }
    }, t.prototype.restorePreviousInputEventState = function() {
      this.restorePreviousElementValue(), this.restorePreviousElementSelection();
    }, t.prototype.restorePreviousElementValue = function() {
      this.setElementValue(this.previousElementValue || "");
    }, t.prototype.restorePreviousElementSelection = function() {
      var r = this.previousElementSelection, i = r.start, n = r.end;
      this.setSelection({ start: i || 0, end: n || 0 });
    }, t.prototype.writeValue = function(r) {
      this.verifyValue(r), this.dateObject = this.getDateObject(r), this.refreshElementValue();
    }, t.prototype.verifyValue = function(r) {
      if (r && !Ri(r))
        throw new Error("The 'value' should be a valid JavaScript Date instance.");
    }, t.prototype.refreshElementValue = function() {
      var r = this.element, i = this.isActive ? this.inputFormat : this.displayFormat, n = this.dateObject.getTextAndFormat(i), a = n.text, o = n.format;
      this.currentFormat = o, this.currentText = a;
      var l = this.options.hasPlaceholder || Qe(this.options.placeholder), d = !this.isActive && l && !this.dateObject.hasValue();
      l && Qe(this.options.placeholder) && (r.placeholder = this.options.placeholder);
      var u = d ? "" : a;
      this.previousElementValue = this.elementValue, this.setElementValue(u);
    }, t.prototype.caret = function(r, i) {
      i === void 0 && (i = r);
      var n = r !== void 0, a = [r, r], o = this.element;
      if (!(n && (this.options.disabled || this.options.readonly))) {
        try {
          o.selectionStart !== void 0 && (n && (ru() && document.activeElement !== o && o.focus(), o.setSelectionRange(r, i)), a = [o.selectionStart, o.selectionEnd]);
        } catch {
          a = [];
        }
        return a;
      }
    }, t.prototype.selectNearestSegment = function(r) {
      for (var i = r, n = r - 1; i < this.currentFormat.length || n >= 0; i++, n--) {
        if (i < this.currentFormat.length && this.currentFormat[i] !== "_") {
          this.selectDateSegment(this.currentFormat[i]);
          return;
        }
        if (n >= 0 && this.currentFormat[n] !== "_") {
          this.selectDateSegment(this.currentFormat[n]);
          return;
        }
      }
    }, t.prototype.selectDateSegment = function(r) {
      for (var i = -1, n = 0, a = 0; a < this.currentFormat.length; a++)
        this.currentFormat[a] === r && (n = a + 1, i === -1 && (i = a));
      i < 0 && (i = 0), this.caret(0, 0), this.caret(i, n);
    }, t.prototype.getDateObject = function(r) {
      var i = (this.dateObject || {}).leadingZero;
      this.options.value = r;
      var n = this.createDateObject();
      return n.setLeadingZero(this.isActive ? i : null), n;
    }, t.prototype.createDateObject = function() {
      var r = this.getDateObjectOptions(), i = new k$(st({}, r));
      return i;
    }, t.prototype.getDateObjectOptions = function() {
      var r = {
        intlService: this.options.intlService,
        formatPlaceholder: this.options.formatPlaceholder ? this.options.formatPlaceholder : "formatPattern",
        format: this.inputFormat,
        cycleTime: this.options.cycleTime,
        twoDigitYearMax: this.options.twoDigitYearMax,
        autoCorrectParts: this.options.autoCorrectParts,
        value: this.options.value,
        toggleDayPeriod: this.options.toggleDayPeriod,
        autoSwitchParts: this.options.autoSwitchParts
      };
      return r;
    }, t.prototype.keyEventMatchesAutoSwitchKeys = function(r) {
      var i = (this.options.autoSwitchKeys || []).map(function(n) {
        return n.toString().toLowerCase().trim();
      });
      return i.indexOf(r.keyCode.toString()) >= 0 || i.indexOf(r.keyCode) >= 0 || i.indexOf(r.key.toLowerCase().trim()) >= 0;
    }, t.prototype.autoFill = function() {
      var r = this.dateObject, i = /* @__PURE__ */ new Date(), n, a, o, l, d, u;
      (r.date || r.month || r.year || r.hours || r.minutes || r.seconds) && (o = r.year ? r.value.getFullYear() : i.getFullYear(), a = r.month ? r.value.getMonth() : i.getMonth(), n = r.date ? r.value.getDate() : i.getDate(), l = r.hours ? r.value.getHours() : i.getHours(), d = r.minutes ? r.value.getMinutes() : i.getMinutes(), u = r.seconds ? r.value.getSeconds() : i.getSeconds(), r.setValue(new Date(o, a, n, l, d, u)), this.refreshElementValue(), this.triggerValueChange());
    }, t;
  }(S$)
);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const E$ = "d", D$ = "wide", M$ = (e, t, r) => e === null || !(t && t > e || r && r < e);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const I$ = (e, t, r) => ({
  candidateValue: xa(Ys, e),
  maxValue: Yr(xa(Ys, r), t.getHours() < r.getHours() ? 0 : 1),
  minValue: xa(Ys, t)
}), T$ = (e, t, r) => {
  if (!e || !t || !r)
    return !0;
  const { candidateValue: i, minValue: n, maxValue: a } = I$(e, t, r);
  return n <= i && i <= a;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const R$ = (e) => {
  const t = tn(), r = Ut(), i = r && r.uDateInput, n = t.toLanguageString(Kl, qi[Kl]), a = (o) => {
    o.stopPropagation();
    const { onClick: l } = e;
    l && l.call(void 0, o);
  };
  return /* @__PURE__ */ s.createElement(
    "span",
    {
      className: M(yn.clearButton({ c: i })),
      role: "button",
      onClick: a,
      tabIndex: e.tabindex || -1,
      title: n,
      key: "clearbutton"
    },
    /* @__PURE__ */ s.createElement(Li, { name: "x", icon: Nc })
  );
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let O$ = class {
  constructor(t) {
    this.service = t, this.cldr = {}, this.locale = t.locale, this.format = t.format, this.toString = t.toString, this.formatDate = t.formatDate, this.parseDate = t.parseDate, this.parseNumber = t.parseNumber, this.formatNumber = t.formatNumber, this.splitDateFormat = t.splitDateFormat, this.numberSymbols = t.numberSymbols, this.firstDay = t.firstDay, this.dateFieldName = t.dateFieldName, this.dateFormatNames = (i, n) => this.service.dateFormatNames(n), this.weekendRange = (i) => {
    };
    const r = mi(this.locale);
    this.cldr[r.name] = r;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const N$ = "Please enter a valid value!", Uc = s.forwardRef((e, t) => {
  var r;
  const i = Zo(e.id), n = kx(), a = tn(), o = Ut(), l = Pn(hu, e).unstyled || o, {
    format: d = It.format,
    size: u = It.size,
    rounded: p = It.rounded,
    fillMode: h = It.fillMode,
    formatPlaceholder: m = It.formatPlaceholder,
    spinners: f = It.spinners,
    disabled: b = It.disabled,
    min: x = It.min,
    max: w = It.max,
    minTime: y = It.minTime,
    maxTime: E = It.maxTime,
    validityStyles: C = It.validityStyles,
    validationMessage: R = It.validationMessage,
    placeholder: N = It.placeholder,
    enableMouseWheel: O = It.enableMouseWheel,
    autoCorrectParts: T = It.autoCorrectParts,
    autoSwitchParts: k = It.autoSwitchParts,
    allowCaretMode: W = It.allowCaretMode,
    twoDigitYearMax: H = It.twoDigitYearMax,
    ariaHasPopup: Y = It.ariaHasPopup,
    autoFocus: K = It.autoFocus
  } = Pn(hu, e), _ = () => je.current !== void 0 ? je.current : q.current && q.current.value, X = () => {
    const B = q.current && q.current.currentText || "", ke = _();
    return N != null && !ct.focused && !ke ? N : B;
  }, A = () => e.required !== void 0 ? e.required : !1, L = () => {
    const B = _() || e.value, ke = x, Dt = w, er = M$(B, ke, Dt) && T$(B, y, E), cr = R !== void 0, dr = (!A() || B != null) && er, At = e.valid !== void 0 ? e.valid : dr;
    return {
      customError: cr,
      rangeOverflow: B && Dt.getTime() < B.getTime() || !1,
      rangeUnderflow: B && B.getTime() < ke.getTime() || !1,
      valid: At,
      valueMissing: B === null
    };
  }, J = () => {
    me.current && me.current.focus();
  }, D = () => new O$(n), F = () => {
    const B = _();
    return {
      format: d,
      steps: e.steps,
      formatPlaceholder: m,
      placeholder: N,
      selectPreviousSegmentOnBackspace: !0,
      value: e.value || B,
      intlService: D(),
      autoFill: e.autoFill !== void 0 ? e.autoFill : !1,
      enableMouseWheel: O,
      autoCorrectParts: T,
      autoSwitchParts: k,
      autoSwitchKeys: e.autoSwitchKeys || [],
      twoDigitYearMax: H,
      allowCaretMode: W
    };
  }, te = (B) => {
    ut.current && ut.current.classList.add("k-focus"), bt({ focused: !0 }), K && Oe(!0);
  }, ce = (B) => {
    ut.current && ut.current.classList.remove("k-focus"), bt({ focused: !1 });
  }, se = (B, ke) => typeof B != typeof ke ? !0 : typeof B == "string" && typeof ke == "string" ? B !== ke : typeof B == "object" && typeof ke == "object" ? JSON.stringify(B) !== JSON.stringify(ke) : !1, ie = (B) => typeof B == "string" ? B : {
    inputFormat: B,
    displayFormat: B
  }, He = (B) => {
    je.current = _(), Lt(), Ee.current = B, je.current = void 0;
  }, V = (B) => {
    e.onChange && e.onChange(B);
  }, fe = (B) => {
    ti(document) === me.current && B.preventDefault();
  }, Ve = () => new Wo(me.current, {
    ...F(),
    format: ie(F().format),
    events: {
      focus: te,
      blur: ce,
      valueChange: He,
      click: V
    }
  }), _e = () => {
    me.current && me.current.setCustomValidity && me.current.setCustomValidity(
      L().valid ? "" : R || It.validationMessage
    );
  }, Oe = s.useCallback(
    (B) => {
      var ke;
      if (me.current && K && B) {
        const Dt = (q?.current).currentText, er = (q?.current).currentText.search(/[^a-zA-Z]/), cr = Dt[er], dr = Dt.split(cr)[0].length;
        ut.current && ut.current.classList.add("k-focus"), (ke = q?.current) == null || ke.selectNearestSegment(dr);
      }
    },
    [K]
  ), $e = (B) => {
    !me.current || !q.current || He(B);
  }, Et = (B) => {
    B.preventDefault();
    const ke = ti(document);
    me.current && ke !== me.current && me.current.focus({ preventScroll: !0 });
  }, Ce = (B) => {
    const ke = _();
    Ee.current && e.onChange && !Zi(Ee.current.oldValue, ke) && e.onChange.call(void 0, {
      syntheticEvent: B,
      nativeEvent: Ee.current.event,
      value: Ee.current.value,
      target: Zt.current
    }), Ee.current = null;
  }, Rt = (B) => {
    var ke;
    (ke = q.current) == null || ke.modifyDateSegmentValue(1), Ce(B);
  }, de = (B) => {
    var ke;
    (ke = q.current) == null || ke.modifyDateSegmentValue(-1), Ce(B);
  }, Zt = s.useRef(null), me = s.useRef(null), ut = s.useRef(null);
  s.useImperativeHandle(
    Zt,
    () => ({
      props: e,
      get options() {
        return F();
      },
      get text() {
        return X();
      },
      get element() {
        return me.current;
      },
      get name() {
        return e.name;
      },
      get value() {
        return _();
      },
      get validity() {
        return L();
      },
      // hidden methods
      focus: J,
      updateOnPaste: $e
    })
  ), s.useImperativeHandle(t, () => Zt.current);
  const q = s.useRef(null), Se = s.useRef(null), qe = s.useRef(!1), je = s.useRef(null), Ee = s.useRef(null), We = s.useRef(e), [ct, bt] = s.useState({ focused: !1 }), [, Lt] = s.useReducer((B) => B + 1, 0);
  s.useLayoutEffect(() => {
    qe.current || (q.current = Ve(), Se.current = q.current.dateObject, qe.current = !0);
  }, []), s.useEffect(() => (_e(), qe.current || ut.current && ut.current.addEventListener("wheel", fe, { passive: !1 }), K && (bt({ focused: !0 }), Oe(!0)), () => {
    ut.current && ut.current.removeEventListener("wheel", fe);
  }), []), s.useEffect(() => {
    _e(), q.current && ((se(We.current.format, d) || We.current.readonly !== e.readonly || JSON.stringify(We.current.steps) !== JSON.stringify(e.steps) || D().locale !== q.current.options.intlService.locale) && q.current.setOptions(F(), !0), We.current.value !== e.value && (Se.current.getValue() !== null || e.value !== null) && Se.current.setValue(e.value), e.ariaExpanded !== void 0 && e.ariaExpanded && (q.current.options.placeholder = null), e.ariaExpanded !== void 0 && !e.ariaExpanded && (q.current.options.placeholder = N), q.current.refreshElementValue(), We.current = {
      format: d,
      readonly: e.readonly,
      ariaExpanded: e.ariaExpanded,
      steps: e.steps,
      value: e.value
    });
  });
  const Pt = e.id || i + "-accessibility-id", ge = l && l.uDateInput, P = X(), Pe = !C || L().valid;
  s.useImperativeHandle(e._ref, () => Zt.current);
  const pt = /* @__PURE__ */ s.createElement(
    "span",
    {
      ref: (B) => {
        ut.current = B;
      },
      style: e.label ? void 0 : { width: e.width },
      dir: e.dir,
      className: M(
        yn.wrapper({
          c: ge,
          size: u,
          fillMode: h,
          rounded: p,
          disabled: b,
          required: A(),
          invalid: !Pe
        }),
        e.className
      )
    },
    /* @__PURE__ */ s.createElement(
      "input",
      {
        ref: (B) => {
          me.current = B;
        },
        role: e.ariaRole || "textbox",
        readOnly: e.readonly,
        tabIndex: e.tabIndex || 0,
        disabled: b,
        title: e.title !== void 0 ? e.title : P,
        type: "text",
        spellCheck: !1,
        autoComplete: "off",
        autoCorrect: "off",
        autoFocus: K,
        className: M(yn.inputInner({ c: ge })),
        id: Pt,
        value: P,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        "aria-describedby": e.ariaDescribedBy,
        "aria-haspopup": Y,
        "aria-disabled": b,
        "aria-expanded": e.ariaExpanded,
        "aria-controls": e.ariaControls,
        "aria-required": e.required,
        "aria-invalid": !Pe,
        onKeyDown: Ce,
        onChange: Ce,
        onWheel: Ce,
        onInput: Ce,
        onClick: Ce,
        name: e.name,
        ...e.inputAttributes
      }
    ),
    e.children,
    e.clearButton && e.value && /* @__PURE__ */ s.createElement(R$, { onClick: V, key: "clearbutton" }),
    f && /* @__PURE__ */ s.createElement("span", { className: M(yn.inputSpinner({ c: ge })), onMouseDown: Et }, /* @__PURE__ */ s.createElement(
      Ct,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: M(yn.spinnerIncrease({ c: ge })),
        icon: "caret-alt-up",
        svgIcon: Up,
        "aria-label": a.toLanguageString(pa, qi[pa]),
        title: a.toLanguageString(pa, qi[pa]),
        onClick: Rt
      }
    ), /* @__PURE__ */ s.createElement(
      Ct,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: M(yn.spinnerDecrease({ c: ge })),
        icon: "caret-alt-down",
        svgIcon: La,
        "aria-label": a.toLanguageString(ha, qi[ha]),
        title: a.toLanguageString(ha, qi[ha]),
        onClick: de
      }
    ))
  );
  return e.label ? /* @__PURE__ */ s.createElement(
    as,
    {
      label: e.label,
      editorId: Pt,
      editorValue: (r = me.current) == null ? void 0 : r.value,
      editorValid: Pe,
      editorDisabled: b,
      children: pt,
      style: { width: e.width }
    }
  ) : pt;
});
Uc.propTypes = {
  value: c.instanceOf(Date),
  format: c.oneOfType([
    we(c.string),
    c.shape({
      skeleton: c.string,
      pattern: c.string,
      date: c.oneOf(["short", "medium", "long", "full"]),
      time: c.oneOf(["short", "medium", "long", "full"]),
      datetime: c.oneOf(["short", "medium", "long", "full"]),
      era: c.oneOf(["narrow", "short", "long"]),
      year: c.oneOf(["numeric", "2-digit"]),
      month: c.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: c.oneOf(["numeric", "2-digit"]),
      weekday: c.oneOf(["narrow", "short", "long"]),
      hour: c.oneOf(["numeric", "2-digit"]),
      hour12: c.bool,
      minute: c.oneOf(["numeric", "2-digit"]),
      second: c.oneOf(["numeric", "2-digit"]),
      timeZoneName: c.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: c.oneOfType([
    we(
      c.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    c.shape({
      year: we(c.string),
      month: we(c.string),
      day: we(c.string),
      hour: we(c.string),
      minute: we(c.string),
      second: we(c.string)
    })
  ]),
  width: c.oneOfType([c.string, c.number]),
  tabIndex: c.number,
  title: c.string,
  steps: c.shape({
    year: we(c.number),
    month: we(c.number),
    day: we(c.number),
    hour: we(c.number),
    minute: we(c.number),
    second: we(c.number)
  }),
  min: c.instanceOf(Date),
  max: c.instanceOf(Date),
  disabled: c.bool,
  spinners: c.bool,
  name: c.string,
  dir: c.string,
  label: c.node,
  id: c.string,
  ariaLabelledBy: c.string,
  ariaDescribedBy: c.string,
  ariaLabel: c.string,
  ariaRole: c.string,
  ariaHasPopup: c.oneOfType([
    c.bool,
    c.oneOf(["grid", "dialog"])
  ]),
  ariaExpanded: c.oneOfType([c.bool]),
  onChange: c.func,
  validationMessage: c.string,
  required: c.bool,
  valid: c.bool,
  size: c.oneOf([null, "small", "medium", "large"]),
  rounded: c.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: c.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: c.bool,
  inputAttributes: c.object
};
const It = {
  format: E$,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  formatPlaceholder: D$,
  spinners: !1,
  disabled: !1,
  max: G(ja),
  min: G(Va),
  minTime: G(nw),
  maxTime: G(aw),
  validityStyles: !0,
  validationMessage: N$,
  placeholder: null,
  enableMouseWheel: !0,
  autoCorrectParts: !0,
  autoSwitchParts: !0,
  allowCaretMode: !1,
  twoDigitYearMax: 68,
  ariaHasPopup: "grid",
  autoFocus: !1
}, hu = Ji();
Uc.displayName = "KendoReactDateInput";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const F$ = Ct;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const L$ = s.forwardRef((e, t) => {
  const { _ref: r } = e, i = s.useRef(null);
  s.useImperativeHandle(t, () => i.current), s.useImperativeHandle(r, () => i.current);
  const n = s.useMemo(() => M(e.className, "k-picker-wrap"), [e.className]);
  return /* @__PURE__ */ s.createElement("span", { ref: i, id: e.id, style: e.style, className: n, tabIndex: e.tabIndex }, e.children);
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const P$ = (e) => {
  const [t, r] = s.useState(!1), i = () => {
    var n;
    e.current && r(!!((n = e.current.element) != null && n.value || e.current.text));
  };
  return s.useEffect(i), {
    editorValue: t
  };
}, A$ = (e) => {
  const { dateInput: t, ...r } = e, i = P$(t);
  return /* @__PURE__ */ s.createElement(as, { ...r, ...i });
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const z$ = (e) => {
  const {
    footer: t,
    windowWidth: r = 0,
    mobileFilter: i,
    children: n,
    navigatable: a,
    navigatableElements: o,
    expand: l,
    animation: d,
    title: u,
    subTitle: p,
    onClose: h
  } = e, m = () => /* @__PURE__ */ s.createElement(
    Ct,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      size: "large",
      themeColor: "primary",
      svgIcon: _p,
      onClick: h
    }
  ), f = Go(), b = {
    navigatable: a || !1,
    navigatableElements: o || [],
    expand: l,
    animation: d !== !1,
    suffixActions: m(),
    filter: i,
    onClose: h,
    animationStyles: f && r <= f.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: u,
    subTitle: p,
    className: "k-adaptive-actionsheet",
    position: f && r <= f.small ? "fullscreen" : void 0
  };
  return /* @__PURE__ */ s.createElement(cs, { ...b }, n, t && /* @__PURE__ */ s.createElement(ls, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ s.createElement(
    Ct,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": t.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onCancel
    },
    t.cancelText
  ), /* @__PURE__ */ s.createElement(
    Ct,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": t.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onApply
    },
    t.applyText
  )));
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const _c = s.forwardRef((e, t) => {
  const r = Zo(e.id), i = tn(), n = Go(), {
    defaultShow: a = kt.defaultShow,
    defaultValue: o = kt.defaultValue,
    dateInput: l = kt.dateInput,
    calendar: d = kt.calendar,
    toggleButton: u = kt.toggleButton,
    popup: p = kt.popup,
    pickerWrap: h = kt.pickerWrap,
    disabled: m = kt.disabled,
    format: f = kt.format,
    max: b = kt.max,
    min: x = kt.min,
    popupSettings: w = kt.popupSettings,
    tabIndex: y = kt.tabIndex,
    weekNumber: E = kt.weekNumber,
    validityStyles: C = kt.validityStyles,
    size: R = kt.size,
    rounded: N = kt.rounded,
    fillMode: O = kt.fillMode,
    autoFocus: T = kt.autoFocus,
    show: k,
    autoSwitchParts: W,
    autoSwitchKeys: H,
    twoDigitYearMax: Y,
    ariaLabel: K,
    adaptive: _,
    adaptiveTitle: X = e.label || void 0,
    adaptiveSubtitle: A,
    formatPlaceholder: L,
    inputAttributes: J,
    validationMessage: D,
    visited: F,
    value: te,
    touched: ce,
    modified: se,
    _adaptiveMode: ie = n,
    valid: He,
    focusedDate: V,
    id: fe,
    ariaLabelledBy: Ve,
    ariaDescribedBy: _e,
    placeholder: Oe,
    ...$e
  } = Pn(H$, e), Et = () => {
    if (sr)
      return zt.current && zt.current.ownerDocument || window.document;
  }, Ce = () => !!(Ai.windowWidth && n && Ai.windowWidth <= n?.medium && e.adaptive), Rt = () => {
    const ne = _t.current !== void 0 ? _t.current : te !== void 0 ? te : Ai.value;
    return ne !== null ? G(ne) : null;
  }, de = () => mr.current !== void 0 ? mr.current : k !== void 0 ? k : Ai.show, Zt = () => l || kt.dateInput, me = () => u || kt.toggleButton, ut = () => d || kt.calendar, q = () => p || kt.popup, Se = () => e.required !== void 0 ? e.required : !1, qe = () => {
    const ne = Rt() || te || null, Ae = x, Or = b, an = ow(ne, Ae, Or), Xn = D !== void 0, on = (!Se() || ne != null) && an, Gn = He !== void 0 ? He : on;
    return {
      customError: Xn,
      rangeOverflow: ne && Or.getTime() < ne.getTime() || !1,
      rangeUnderflow: ne && ne.getTime() < Ae.getTime() || !1,
      valid: Gn,
      valueMissing: ne === null
    };
  }, je = (ne) => {
    for (const Ae of ne)
      vi({ windowWidth: Ae.target.clientWidth });
  }, Ee = () => {
    ht.current && ht.current.focus();
  }, We = (ne) => {
    Ye.current = ne;
  }, ct = (ne) => {
    de() !== ne && (vi({ show: ne }), ne && e.onOpen && e.onOpen.call(void 0, { target: At.current }), !ne && e.onClose && e.onClose.call(void 0, { target: At.current }));
  }, bt = (ne) => {
    const Ae = Rt();
    return Ae && ne ? xa(ne, Ae) : ne;
  }, Lt = (ne) => {
    w != null && w.onMouseDownOutside && w.onMouseDownOutside.call(void 0, ne);
  }, Pt = (ne, Ae) => {
    vi({ value: G(ne || void 0) }), _t.current = ne, mr.current = !1, Ce() || (he.current = !0), e.onChange && e.onChange.call(void 0, {
      syntheticEvent: Ae.syntheticEvent,
      nativeEvent: Ae.nativeEvent,
      value: Rt(),
      show: de(),
      target: At.current
    }), _t.current = void 0, mr.current = void 0, ct(!1);
  }, ge = (ne) => {
    const Ae = bt(ne.value);
    Pt(Ae, ne);
  }, P = () => {
    const { popupClass: ne, ...Ae } = w, Or = de(), an = Rt(), Xn = an && it(an), on = M(ne), Gn = {
      popupClass: "k-datepicker-popup",
      show: Or,
      anchor: zt.current,
      className: on,
      id: _n,
      anchorAlign: {
        horizontal: "left",
        vertical: "bottom"
      },
      popupAlign: {
        horizontal: "left",
        vertical: "top"
      },
      ...Ae,
      onMouseDownOutside: Lt
    }, Zn = {
      disabled: m,
      value: Xn,
      min: x,
      max: b,
      weekNumber: E,
      focusedDate: V,
      className: Ce() ? "k-calendar-lg" : "",
      navigation: !Ce(),
      onChange: ge
    }, S = ut(), j = q();
    return Ce() ? /* @__PURE__ */ s.createElement(S, { _ref: We, ...Zn }) : /* @__PURE__ */ s.createElement(j, { ...Gn }, /* @__PURE__ */ s.createElement(S, { _ref: We, ...Zn }));
  }, Pe = () => {
    vi({ focused: !1 }), ct(!1);
  }, pt = () => {
    const { windowWidth: ne = 0 } = Ai, Ae = {
      expand: de(),
      onClose: Pe,
      title: X,
      subTitle: A,
      windowWidth: ne
    };
    return /* @__PURE__ */ s.createElement(z$, { ...Ae }, /* @__PURE__ */ s.createElement(Aa, null, P()));
  }, B = (ne) => {
    Pt(ne.value, ne);
  }, ke = () => {
    vi({ focused: !0 });
  }, Dt = () => {
    ct(!de());
  }, er = () => {
    m || (he.current = !0, ct(!de()));
  }, cr = (ne) => {
    ne.preventDefault();
  }, dr = (ne) => {
    const { altKey: Ae, keyCode: Or } = ne;
    if (Or === z.esc && de()) {
      he.current = !0, ct(!1);
      return;
    }
    Ae && (Or === z.up || Or === z.down) && (ne.preventDefault(), ne.stopPropagation(), he.current = Or === z.up, ct(Or === z.down));
  }, At = s.useRef(null), zt = s.useRef(null), ht = s.useRef(null), Ye = s.useRef(null);
  s.useImperativeHandle(
    At,
    () => ({
      props: e,
      get element() {
        return zt.current;
      },
      get calendar() {
        return Ye.current;
      },
      get dateInput() {
        return ht.current;
      },
      get name() {
        return e.name;
      },
      get show() {
        return de();
      },
      get validity() {
        return qe();
      },
      get value() {
        return Rt();
      },
      get mobileMode() {
        return Ce();
      },
      togglePopup: Dt,
      // Hidden Methods but still accessible
      focus: Ee
    })
  ), s.useImperativeHandle(t, () => At.current);
  const _t = s.useRef(void 0), mr = s.useRef(void 0), U = s.useRef(null), he = s.useRef(!1), ft = s.useRef(!1), Sr = s.useRef(null), [Ai, ms] = s.useState({
    value: o,
    show: a,
    focused: !1
  }), [, rn] = s.useReducer((ne) => ne, !0), vi = (ne) => {
    ms((Ae) => ({ ...Ae, ...ne }));
  };
  s.useEffect(() => {
    Ye.current && Ye.current.element && de() && !ft.current && Ye.current.element.focus({ preventScroll: !0 }), Ce() && de() && !ft.current && setTimeout(() => {
      Ye.current && Ye.current.element && Ye.current.element.focus({ preventScroll: !0 });
    }, 300), ht.current && ht.current.element && !de() && he.current && ht.current.element.focus({ preventScroll: !0 }), ft.current = de(), he.current = !1;
  }), s.useEffect(() => {
    var ne;
    return Sr.current = sr && window.ResizeObserver && new window.ResizeObserver((Ae) => je(Ae)), de() && rn(), (ne = Et()) != null && ne.body && Sr.current && Sr.current.observe(Et().body), () => {
      var Ae;
      clearTimeout(U.current), (Ae = Et()) != null && Ae.body && Sr.current && Sr.current.disconnect();
    };
  }, []);
  const _n = r + "-popup-id", gs = P(), Ua = Zt(), qn = Rt(), nn = me(), Yn = pt(), Kn = !C || qe().valid, zi = i.toLanguageString(Gl, qi[Gl]), vs = {
    disabled: m,
    format: f,
    formatPlaceholder: L,
    id: fe,
    ariaLabelledBy: Ve,
    ariaDescribedBy: _e,
    ariaLabel: K,
    max: b,
    min: x,
    name: e.name,
    onChange: B,
    required: e.required,
    _ref: ht,
    tabIndex: de() ? -1 : y,
    title: e.title,
    valid: qe().valid,
    validationMessage: D,
    validityStyles: C,
    value: qn,
    label: void 0,
    placeholder: Ai.focused ? null : Oe,
    ariaExpanded: de(),
    size: null,
    fillMode: null,
    rounded: null,
    autoFill: e.autoFill,
    twoDigitYearMax: Y,
    enableMouseWheel: e.enableMouseWheel,
    autoCorrectParts: e.autoCorrectParts,
    autoSwitchParts: W,
    autoSwitchKeys: H,
    allowCaretMode: e.allowCaretMode,
    inputAttributes: J
  }, xi = /* @__PURE__ */ s.createElement(
    Vg,
    {
      onFocus: ke,
      onBlur: Ce() ? void 0 : Pe,
      onSyncBlur: e.onBlur,
      onSyncFocus: e.onFocus
    },
    (ne) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      "span",
      {
        ...e.label ? {} : $e,
        ref: zt,
        className: M(
          "k-input",
          "k-datepicker",
          {
            [`k-input-${Ca.sizeMap[R] || R}`]: R,
            [`k-rounded-${Ca.roundedMap[N] || N}`]: N,
            [`k-input-${O}`]: O,
            "k-invalid": !Kn,
            "k-required": Se(),
            "k-disabled": m
          },
          e.className
        ),
        onKeyDown: dr,
        style: { width: e.width },
        onFocus: Ce() ? er : ne.onFocus,
        onBlur: ne.onBlur,
        onClick: Ce() ? er : void 0
      },
      /* @__PURE__ */ s.createElement(
        Ua,
        {
          _ref: ht,
          ariaRole: "combobox",
          ariaExpanded: de(),
          ariaControls: _n,
          autoFocus: T,
          ...vs
        }
      ),
      /* @__PURE__ */ s.createElement(
        nn,
        {
          type: "button",
          icon: "calendar",
          svgIcon: Cx,
          title: zi,
          className: "k-input-button",
          rounded: null,
          onClick: Ce() ? void 0 : er,
          "aria-label": zi,
          fillMode: O,
          onMouseDown: cr
        }
      ),
      !Ce() && gs
    ), Ce() && Yn)
  );
  return e.label ? /* @__PURE__ */ s.createElement(
    A$,
    {
      dateInput: ht,
      label: e.label,
      editorId: r,
      editorValid: Kn,
      editorDisabled: m,
      children: xi,
      style: { width: e.width },
      ...$e
    }
  ) : xi;
});
_c.propTypes = {
  className: c.string,
  defaultShow: c.bool,
  defaultValue: c.instanceOf(Date),
  disabled: c.bool,
  focusedDate: c.instanceOf(Date),
  format: c.oneOfType([
    c.string,
    c.shape({
      skeleton: we(c.string),
      pattern: we(c.string),
      date: we(c.oneOf(["short", "medium", "long", "full"])),
      time: we(c.oneOf(["short", "medium", "long", "full"])),
      datetime: we(c.oneOf(["short", "medium", "long", "full"])),
      era: we(c.oneOf(["narrow", "short", "long"])),
      year: we(c.oneOf(["numeric", "2-digit"])),
      month: we(c.oneOf(["numeric", "2-digit", "narrow", "short", "long"])),
      day: we(c.oneOf(["numeric", "2-digit"])),
      weekday: we(c.oneOf(["narrow", "short", "long"])),
      hour: we(c.oneOf(["numeric", "2-digit"])),
      hour12: we(c.bool),
      minute: we(c.oneOf(["numeric", "2-digit"])),
      second: we(c.oneOf(["numeric", "2-digit"])),
      timeZoneName: we(c.oneOf(["short", "long"]))
    })
  ]),
  formatPlaceholder: c.oneOfType([
    we(
      c.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    c.shape({
      year: we(c.string),
      month: we(c.string),
      day: we(c.string),
      hour: we(c.string),
      minute: we(c.string),
      second: we(c.string)
    })
  ]),
  id: c.string,
  ariaLabelledBy: c.string,
  ariaDescribedBy: c.string,
  ariaLabel: c.string,
  min: c.instanceOf(Date),
  max: c.instanceOf(Date),
  name: c.string,
  popupSettings: c.shape({
    animate: we(c.bool),
    appendTo: we(c.any),
    popupClass: we(c.string)
  }),
  show: c.bool,
  tabIndex: c.number,
  title: c.string,
  value: c.instanceOf(Date),
  weekNumber: c.bool,
  width: c.oneOfType([c.number, c.string]),
  validationMessage: c.string,
  required: c.bool,
  valid: c.bool,
  size: c.oneOf([null, "small", "medium", "large"]),
  rounded: c.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: c.oneOf([null, "solid", "flat", "outline"]),
  adaptive: c.bool,
  adaptiveTitle: c.string,
  adaptiveSubtitle: c.string,
  autoFocus: c.bool,
  inputAttributes: c.object
};
const kt = {
  defaultShow: !1,
  defaultValue: null,
  dateInput: Uc,
  calendar: Wc,
  toggleButton: F$,
  popup: Pi,
  pickerWrap: L$,
  disabled: !1,
  format: "d",
  max: ja,
  min: Va,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  validityStyles: !0,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: !1
}, H$ = Ji();
_c.displayName = "KendoReactDatePicker";
const KS = s.forwardRef(({ children: e, ...t }, r) => /* @__PURE__ */ $.jsx(
  lm,
  {
    "data-test": "menu-item",
    ...t,
    ref: r,
    children: e
  }
)), XS = s.forwardRef(
  ({ children: e, className: t, ...r }, i) => /* @__PURE__ */ $.jsx(
    cl,
    {
      className: oe("rnd-stack", t),
      "data-test": "stack",
      ref: i,
      ...r,
      children: e
    }
  )
), B$ = () => {
  var e;
  return ((e = new Intl.NumberFormat().formatToParts(1.1).find((t) => t.type === "decimal")) == null ? void 0 : e.value) ?? ".";
}, Qi = B$(), Jh = Qi.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), V$ = new RegExp(`^\\d*${Jh}?\\d*$`), j$ = new RegExp(`^-?\\d*${Jh}?\\d*$`), ef = 0.57, ki = (e) => {
  const t = e === null ? "0" : String(e);
  return Math.max(t.length, 1) * ef;
}, vn = (e, t, r, i, n) => {
  let a;
  const o = e == null;
  return o && n ? a = null : !o && I.isFinite(e) ? (a = parseFloat(e.toFixed(t)), e < r ? a = r : i != null && e > i && (a = i)) : I.isFinite(r) ? a = r : a = Math.min(0, i ?? 0), a;
}, W$ = (e) => e === "" || e === "-" || e === Qi || e === `-${Qi}`, rl = (e) => Qi === "." ? e : e.replace(Qi, "."), xn = (e) => {
  if (e === null)
    return "";
  const t = String(e);
  return Qi === "." ? t : t.replace(".", Qi);
}, GS = ({
  labelPlacement: e = "start",
  className: t,
  min: r = 0,
  max: i,
  step: n = 1,
  precision: a = 2,
  value: o,
  slotProps: l,
  onChange: d,
  onBlur: u,
  onFocus: p,
  onKeyDown: h,
  onWheel: m,
  helperText: f,
  errorMessage: b,
  readOnly: x,
  reserveMessageSpace: w = !0,
  allowEmpty: y,
  name: E,
  ...C
}) => {
  const R = vn(o, a, r, i, y), [N, O] = s.useState(xn(R)), [T, k] = s.useState(ki(R)), W = s.useRef(!1), H = s.useRef(R), Y = s.useRef(null), K = s.useMemo(() => {
    const V = Number(rl(N));
    return Number.isFinite(V) ? V : null;
  }, [N]);
  s.useEffect(() => {
    if (W.current)
      return;
    const V = vn(o, a, r, i, y), fe = xn(V);
    O(fe), k(ki(fe)), H.current = V;
  }, [o, a, r, i, y]);
  const _ = s.useCallback(
    (V) => r >= 0 ? V$.test(V) : j$.test(V),
    [r]
  ), X = (V) => {
    const fe = V.target.value;
    if (!_(fe))
      return;
    const Ve = rl(fe);
    if (W$(Ve)) {
      O(fe), k(ki(fe)), y && fe === "" && I.isFunction(d) && (H.current = null, d(null, E, V));
      return;
    }
    const _e = Number(Ve);
    if (!Number.isFinite(_e))
      return;
    const Oe = vn(_e, a, r, i, y);
    if (Oe !== null && Oe !== Number(_e.toFixed(a))) {
      const $e = xn(Oe);
      O($e), k(ki($e));
    } else
      O(fe), k(ki(fe));
    I.isFunction(d) && (H.current = Oe, d(Oe, E, V));
  }, A = s.useCallback(
    (V, fe) => {
      const Ve = vn(V, a, r, i, y), _e = xn(Ve);
      O(_e), k(ki(_e)), I.isFunction(d) && (H.current = Ve, d(Ve, E, fe));
    },
    [a, r, i, y, d, E]
  ), L = s.useCallback(
    (V) => {
      A((K ?? 0) - n, V);
    },
    [A, K, n]
  ), J = s.useCallback(
    (V) => {
      A((K ?? 0) + n, V);
    },
    [A, K, n]
  ), D = s.useCallback(
    (V) => {
      W.current = !0, I.isFunction(p) && p(V);
    },
    [p]
  ), F = s.useCallback(
    (V) => {
      W.current = !1;
      const fe = rl(N).trim(), Ve = fe === "" ? NaN : Number(fe), _e = Number.isFinite(Ve) ? Ve : null, Oe = vn(_e, a, r, i, y), $e = xn(Oe);
      O($e), k(ki($e)), I.isFunction(d) && Oe !== H.current && (H.current = Oe, d(Oe, E, V)), I.isFunction(u) && u(V);
    },
    [N, a, r, i, y, d, E, u]
  ), te = s.useCallback(
    (V, fe) => {
      const Ve = (K ?? 0) + V, _e = vn(Ve, a, r, i, y), Oe = xn(_e);
      O(Oe), k(ki(Oe)), I.isFunction(d) && (H.current = _e, d(_e, E, fe));
    },
    [K, a, r, i, y, d, E]
  );
  s.useEffect(() => {
    const V = Y.current;
    if (!V)
      return;
    const fe = (Ve) => {
      I.isFunction(m) && m(Ve), !(x || !W.current) && (Ve.preventDefault(), te(Ve.deltaY < 0 ? n : -n));
    };
    return V.addEventListener("wheel", fe, { passive: !1 }), () => V.removeEventListener("wheel", fe);
  }, [te, n, x, m]);
  const ce = s.useCallback(
    (V) => {
      I.isFunction(h) && h(V), !x && (V.key === "ArrowUp" ? (V.preventDefault(), te(n, V)) : V.key === "ArrowDown" && (V.preventDefault(), te(-n, V)));
    },
    [te, n, x, h]
  ), se = l != null && l.input && typeof l.input == "object" ? l.input : void 0, ie = l != null && l.htmlInput && typeof l.htmlInput == "object" ? l.htmlInput : void 0, He = s.useMemo(
    () => ({
      input: {
        ...I.omit(se, "startAdornment", "endAdornment", "className", "ref"),
        className: oe(se?.className, Wu),
        readOnly: x,
        startAdornment: /* @__PURE__ */ $.jsxs(No, { position: "start", children: [
          se?.startAdornment,
          /* @__PURE__ */ $.jsx(
            Lo,
            {
              "data-test": "number-field-decrement-button",
              variant: "text",
              color: C.color,
              iconProps: { icon: "far fa-minus" },
              onClick: L,
              disabled: C.disabled || x || I.lte(K, r)
            }
          )
        ] }),
        endAdornment: /* @__PURE__ */ $.jsx($.Fragment, { children: /* @__PURE__ */ $.jsxs(No, { position: "end", children: [
          /* @__PURE__ */ $.jsx(
            Lo,
            {
              "data-test": "number-field-increment-button",
              variant: "text",
              color: C.color,
              iconProps: { icon: "far fa-plus" },
              onClick: J,
              disabled: C.disabled || x || I.gte(K, i)
            }
          ),
          se?.endAdornment
        ] }) })
      },
      htmlInput: {
        "data-test": "number-field-input",
        ...ie,
        // Note: iOS Safari's decimal keypad has no minus key. If mobile negative
        // input becomes a problem, consider using 'text' when min < 0.
        inputMode: "decimal",
        role: "spinbutton",
        "aria-valuemin": r,
        "aria-valuemax": i,
        "aria-valuenow": K ?? void 0,
        sx: {
          width: `${T}em`,
          minWidth: `${ef * 3}em`,
          ...ie?.sx
        }
      },
      formHelperText: {
        component: "div",
        ...typeof l?.formHelperText == "object" && l?.formHelperText
      }
    }),
    [
      se,
      ie,
      x,
      C.color,
      C.disabled,
      K,
      r,
      i,
      L,
      J,
      T,
      l?.formHelperText
    ]
  );
  return /* @__PURE__ */ $.jsx(
    sc,
    {
      "data-test": "number-field",
      ...C,
      className: oe(
        "rnd-number-field",
        t,
        !I.isEmpty(C.label) && Xt[e],
        mo
      ),
      name: E,
      value: N,
      onChange: X,
      ref: Y,
      onFocus: D,
      onKeyDown: ce,
      onBlur: F,
      type: "text",
      helperText: /* @__PURE__ */ $.jsxs($.Fragment, { children: [
        /* @__PURE__ */ $.jsx(hr, { in: C.error && !I.isEmpty(b), children: b }),
        /* @__PURE__ */ $.jsxs(hr, { in: !C.error || I.isEmpty(b), children: [
          f,
          w && /* @__PURE__ */ $.jsx($.Fragment, { children: " " })
        ] })
      ] }),
      slotProps: He
    }
  );
}, ZS = s.forwardRef(
  ({ className: e, label: t, showTooltip: r, customColor: i, color: n, ...a }, o) => /* @__PURE__ */ $.jsx(
    cm,
    {
      "data-test": "tag",
      ref: o,
      label: r ? /* @__PURE__ */ $.jsx("span", { title: t, children: t }) : t,
      color: i ? "custom" : n,
      "data-custom-color": i,
      className: oe("rnd-tag", e),
      ...a
    }
  )
), QS = s.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ $.jsx(
    Nu,
    {
      "data-test": "router-link",
      ref: r,
      ...t,
      component: ka,
      className: oe("rnd-router-link", e)
    }
  )
), JS = ({
  className: e,
  color: t,
  inputRef: r,
  ...i
}) => /* @__PURE__ */ $.jsx(
  Wc,
  {
    ...i,
    ref: r,
    className: oe(
      $r,
      Ra[t || "primary"],
      "rnd-date-calendar",
      e
    ),
    bottomView: "month",
    topView: "month"
  }
), U$ = ".k-daterangepicker, .rnd-date-range-picker, .k-datepicker, .rnd-date-picker, .k-datetimepicker, .rnd-date-time-picker", tc = (e) => {
  if (!e)
    return null;
  const { shadowRoot: t } = e;
  if (t != null && t.activeElement)
    return tc(t.activeElement);
  const { contentDocument: r } = e;
  return r != null && r.activeElement ? tc(r.activeElement) : e;
}, _$ = (e) => e.closest(U$) !== null, q$ = (e) => {
  const t = document.activeElement;
  return t ? t === e ? !0 : tc(t) === e : !1;
}, Y$ = "selection";
let oo = 0, Ln;
const K$ = () => {
  Ln || (Ln = Wo.prototype.setSelection, Wo.prototype.setSelection = function(e) {
    const { element: t } = this;
    if (!t || !_$(t)) {
      Ln.call(this, e);
      return;
    }
    q$(t) && (t.setSelectionRange(e.start, e.end), e.start !== e.end && (this.interactionMode = Y$));
  });
}, X$ = () => {
  Ln && (Wo.prototype.setSelection = Ln, Ln = void 0);
}, G$ = () => typeof document > "u" ? () => {
} : (oo += 1, oo === 1 && K$(), () => {
  oo -= 1, oo === 0 && X$();
}), eE = ({
  id: e,
  label: t,
  labelPlacement: r = "start",
  helperText: i,
  errorMessage: n,
  className: a,
  inputRef: o,
  labelProps: l,
  formHelperTextProps: d,
  datePickerProps: u,
  onChange: p,
  value: h,
  reserveMessageSpace: m = !0,
  popupCollision: f,
  ...b
}) => {
  const x = s.useId(), [w, y] = s.useState(b.focused);
  s.useEffect(() => G$(), []);
  const E = (N) => {
    y(!0), ga(u, "onFocus", N);
  }, C = (N) => {
    y(!1), ga(u, "onBlur", N);
  }, R = s.useCallback(
    (N) => /* @__PURE__ */ $.jsx(
      Pi,
      {
        ...N,
        collision: f
      }
    ),
    [f]
  );
  return /* @__PURE__ */ $.jsxs(
    Xo,
    {
      "data-test": "date-picker-control",
      className: oe(
        "rnd-date-picker-control",
        ju,
        $r,
        a,
        !I.isEmpty(t) && Xt[r]
      ),
      ...b,
      focused: w,
      children: [
        t && /* @__PURE__ */ $.jsx(
          Nh,
          {
            "data-test": "date-picker-label",
            htmlFor: e || `${x}-date-picker`,
            ...l,
            children: t
          }
        ),
        /* @__PURE__ */ $.jsx(
          _c,
          {
            id: e || `${x}-date-picker`,
            ...I.omit(u, ["min", "max"]),
            className: oe($r, "rnd-date-picker", u?.className),
            onFocus: E,
            onBlur: C,
            onChange: p,
            value: h ? new Date(h) : void 0,
            min: u?.min ?? void 0,
            max: u?.max ?? void 0,
            ref: o,
            fillMode: "outline",
            valid: !b.error,
            required: b.required,
            disabled: b.disabled,
            popupSettings: {
              ...u?.popupSettings,
              popupClass: oe(
                $r,
                Ra[b.color || "primary"],
                b.error && Ko
              )
            },
            popup: R
          }
        ),
        /* @__PURE__ */ $.jsxs(
          Ta,
          {
            "data-test": "date-picker-helper-text",
            component: "div",
            ...d,
            error: b.error && !I.isEmpty(n),
            children: [
              /* @__PURE__ */ $.jsx(hr, { in: b.error && !I.isEmpty(n), children: n }),
              /* @__PURE__ */ $.jsxs(hr, { in: !b.error || I.isEmpty(n), children: [
                i,
                m && /* @__PURE__ */ $.jsx($.Fragment, { children: " " })
              ] })
            ]
          }
        )
      ]
    }
  );
}, Z$ = ({
  labelPlacement: e = "start",
  type: t = "text",
  className: r,
  helperText: i,
  errorMessage: n,
  reserveMessageSpace: a = !0,
  readOnly: o,
  prefix: l,
  slotProps: d,
  ...u
}) => {
  const p = Bn(), h = s.useMemo(() => {
    if (!l)
      return null;
    const { palette: f, shape: b, spacing: x } = p, { secondary: w, text: y } = f;
    return /* @__PURE__ */ $.jsx(
      No,
      {
        position: "start",
        sx: {
          backgroundColor: w.main,
          borderTopLeftRadius: b.borderRadius,
          borderBottomLeftRadius: b.borderRadius,
          paddingX: x(2.5),
          marginLeft: x(-3.2),
          marginRight: x(-0.1)
        },
        children: /* @__PURE__ */ $.jsx(
          Yi,
          {
            variant: fi.BUTTON,
            sx: {
              color: y.primary,
              whiteSpace: "nowrap"
            },
            children: l
          }
        )
      }
    );
  }, [l, p]), m = s.useMemo(() => {
    const f = d?.input, b = typeof f == "object" && f !== null && "startAdornment" in f ? f.startAdornment : void 0;
    return {
      formHelperText: {
        ...typeof d?.formHelperText == "object" ? d.formHelperText : {},
        component: "div"
      },
      input: {
        ...typeof f == "object" && f !== null ? f : {},
        ...o !== void 0 && { readOnly: o },
        startAdornment: h ?? b
      },
      inputLabel: d?.inputLabel,
      htmlInput: d?.htmlInput
    };
  }, [o, h, d]);
  return /* @__PURE__ */ $.jsx(
    sc,
    {
      "data-test": "text-field",
      ...u,
      className: oe(
        "rnd-text-field",
        _m,
        r,
        !I.isEmpty(u.label) && Xt[e]
      ),
      type: t,
      helperText: /* @__PURE__ */ $.jsxs($.Fragment, { children: [
        /* @__PURE__ */ $.jsx(hr, { in: u.error && !I.isEmpty(n), children: n }),
        /* @__PURE__ */ $.jsxs(hr, { in: !u.error || I.isEmpty(n), children: [
          i,
          a && /* @__PURE__ */ $.jsx($.Fragment, { children: " " })
        ] })
      ] }),
      slotProps: m
    }
  );
}, Q$ = ({
  id: e,
  className: t,
  label: r,
  labelPlacement: i = "start",
  helperText: n,
  data: a,
  filterable: o,
  dropdownListProps: l,
  labelProps: d,
  errorMessage: u,
  onFilterChange: p,
  onChange: h,
  inputRef: m,
  formHelperTextProps: f,
  textField: b,
  valueField: x,
  valuePrimitive: w,
  loading: y,
  reserveMessageSpace: E = !0,
  valueRender: C,
  itemRender: R,
  style: N,
  defaultItem: O,
  onClose: T,
  ...k
}) => {
  var W;
  const H = Bn(), Y = s.useId(), [K, _] = s.useState(a), [X, A] = s.useState(k.focused), L = (ie) => gp(a || [], ie), J = (ie) => {
    _(L(ie.filter)), I.isFunction(p) && p(ie);
  }, D = (ie) => {
    T?.(ie), ga(l, "onClose", ie);
  }, F = (ie) => {
    A(!0), ga(l, "onFocus", ie);
  }, te = (ie) => {
    A(!1), ga(l, "onBlur", ie);
  }, ce = (ie) => {
    const He = w && x ? I.get(ie.target.value, x) : ie.target.value, V = {
      ...ie,
      target: {
        ...ie.target,
        value: He
      },
      value: He
    };
    I.isFunction(h) && h(V);
  }, se = (ie) => {
    let He = w ? I.find(a, (V) => V[x || ""] === ie) : k.value;
    return !He && O && (He = O), He;
  };
  return s.useEffect(() => {
    o && _(a);
  }, [a, o]), /* @__PURE__ */ $.jsxs(
    Xo,
    {
      "data-test": "dropdown-list-control",
      ...k,
      className: oe(
        "rnd-dropdown-list-control",
        Bu,
        $r,
        t,
        !I.isEmpty(r) && Xt[i]
      ),
      focused: X,
      children: [
        r && /* @__PURE__ */ $.jsx(
          Nh,
          {
            "data-test": "dropdown-list-label",
            htmlFor: e || `${Y}-dropdown-list`,
            ...d,
            children: r
          }
        ),
        /* @__PURE__ */ $.jsx(
          za,
          {
            id: e || `${Y}-dropdown-list`,
            iconClassName: "fas fa-chevron-down",
            data: o ? K : a,
            filterable: o,
            onFilterChange: o ? J : void 0,
            ...l,
            valueRender: C,
            itemRender: R,
            style: N,
            defaultItem: O,
            dataItemKey: x,
            className: oe($r, "rnd-dropdown-list", l?.className),
            ref: m,
            value: x ? se(k.value) : k.value,
            textField: b,
            loading: y,
            dir: H.direction,
            fillMode: "outline",
            onFocus: F,
            onBlur: te,
            onClose: D,
            onChange: ce,
            popupSettings: {
              ...l?.popupSettings,
              height: void 0,
              className: oe(
                $r,
                Ra[k.color || "primary"],
                k.error && Ko,
                (W = l?.popupSettings) == null ? void 0 : W.className
              )
            },
            valid: !k.error,
            required: k.required,
            disabled: k.disabled
          }
        ),
        /* @__PURE__ */ $.jsxs(
          Ta,
          {
            "data-test": "dropdown-list-helper-text",
            component: "div",
            ...f,
            error: k.error && !I.isEmpty(u),
            children: [
              /* @__PURE__ */ $.jsx(hr, { in: k.error && !I.isEmpty(u), children: u }),
              /* @__PURE__ */ $.jsxs(hr, { in: !k.error || I.isEmpty(u), children: [
                n,
                E && /* @__PURE__ */ $.jsx($.Fragment, { children: " " })
              ] })
            ]
          }
        )
      ]
    }
  );
}, tE = ({ className: e, ...t }) => /* @__PURE__ */ $.jsx(
  dm,
  {
    "data-test": "divider",
    ...t,
    className: oe("rnd-divider", e)
  }
), rE = ({ children: e, open: t, onClose: r, ...i }) => {
  const n = Bn();
  return /* @__PURE__ */ $.jsx(
    um,
    {
      open: t,
      onClose: r,
      "data-test": "dialog",
      ...i,
      children: /* @__PURE__ */ $.jsx(ri.Provider, { value: n.zIndex.modal + 1, children: e })
    }
  );
}, iE = ({
  children: e,
  confirmButtonProps: t,
  confirmButtonLabel: r,
  customButtonLabel: i,
  confirmDisabled: n,
  closeButtonProps: a,
  customButtonProps: o,
  closeButtonLabel: l,
  closeDisabled: d,
  customButtonDisabled: u,
  className: p,
  onClose: h,
  onConfirm: m,
  onCustomButton: f,
  ...b
}) => /* @__PURE__ */ $.jsxs(
  pm,
  {
    "data-test": "dialog-actions",
    className: oe("rnd-dialog-actions", p),
    ...b,
    children: [
      h && !e && /* @__PURE__ */ $.jsx(
        Cs,
        {
          title: l,
          variant: "outlined",
          color: "secondary",
          onClick: h,
          disabled: d,
          ...a,
          children: l
        }
      ),
      m && !e && /* @__PURE__ */ $.jsx(
        Cs,
        {
          title: r,
          color: "primary",
          variant: "contained",
          onClick: m,
          disabled: n,
          ...t,
          children: r
        }
      ),
      f && !e && /* @__PURE__ */ $.jsx(
        Cs,
        {
          title: i,
          color: "primary",
          variant: "contained",
          onClick: f,
          disabled: u,
          ...o,
          children: i
        }
      ),
      e
    ]
  }
), nE = ({ children: e, className: t, ...r }) => /* @__PURE__ */ $.jsx(
  hm,
  {
    className: oe("rnd-dialog-content", t),
    "data-test": "dialog-content",
    ...r,
    children: e
  }
), aE = ({
  children: e,
  className: t,
  iconButtonProps: r,
  onClose: i,
  ...n
}) => /* @__PURE__ */ $.jsxs(
  fm,
  {
    className: oe("rnd-dialog-title", t),
    "data-test": "dialog-title",
    color: "text.secondary",
    variant: fi.H2,
    noWrap: !0,
    ...n,
    children: [
      e,
      i && /* @__PURE__ */ $.jsx(
        Lo,
        {
          "aria-label": "close",
          onClick: i,
          color: "inherit",
          ...I.omit(r, ["iconProps"]),
          iconProps: {
            icon: "fas fa-times",
            fontSize: "large",
            ...r?.iconProps
          }
        }
      )
    ]
  }
), oE = ({
  control: e,
  name: t,
  rules: r,
  dropdown: i,
  onChange: n
}) => {
  const {
    field: a,
    fieldState: { error: o }
  } = Ru({
    control: e,
    name: t,
    rules: r,
    disabled: i?.disabled
  }), l = (d) => {
    a.onChange(d), I.isFunction(n) && n(d);
  };
  return /* @__PURE__ */ $.jsx(
    Q$,
    {
      error: !!o,
      errorMessage: o?.message,
      required: r?.required,
      ...I.omit(i, "inputRef"),
      ...I.omit(a, ["ref", "onChange"]),
      onChange: l,
      inputRef: (d) => {
        a.ref(d), i != null && i.inputRef && Qu(i.inputRef, d);
      }
    }
  );
}, sE = ({ children: e, className: t, ...r }) => /* @__PURE__ */ $.jsx(
  Ta,
  {
    className: oe("rnd-form-helper-text", t),
    "data-test": "form-helper-text",
    ...r,
    children: e
  }
), J$ = ({ color: e, className: t, radioProps: r, ...i }) => /* @__PURE__ */ $.jsx(
  Zu,
  {
    "data-test": "radio-label",
    ...i,
    className: oe("rnd-radio-label", t),
    control: /* @__PURE__ */ $.jsx(
      mm,
      {
        "data-test": "radio",
        ...r,
        color: e,
        className: oe("rnd-radio", r?.className)
      }
    )
  }
), lE = ({
  label: e,
  labelPlacement: t = "start",
  options: r,
  children: i,
  className: n,
  name: a,
  defaultValue: o,
  onChange: l,
  inputRef: d,
  helperText: u,
  errorMessage: p,
  radioGroupProps: h,
  formLabelProps: m,
  formHelperTextProps: f,
  ...b
}) => /* @__PURE__ */ $.jsxs(
  Xo,
  {
    "data-test": "radio-group-form-control",
    ...b,
    className: oe(
      "rnd-radio-group-control",
      Hu,
      n,
      !I.isEmpty(e) && Xt[t]
    ),
    children: [
      /* @__PURE__ */ $.jsx(
        gm,
        {
          className: oe("rnd-radio-group-label", Gm, m?.className),
          ...m,
          children: e
        }
      ),
      /* @__PURE__ */ $.jsxs(
        vm,
        {
          "data-test": "radio-group",
          className: oe("rnd-radio-group", n),
          onChange: l,
          name: a,
          defaultValue: o,
          ref: d,
          ...h,
          children: [
            i,
            I.map(r, ({ key: x, value: w, ...y }) => /* @__PURE__ */ s.createElement(
              J$,
              {
                ...y,
                key: x,
                value: x,
                label: w
              }
            ))
          ]
        }
      ),
      (!I.isEmpty(u) || !I.isEmpty(p)) && /* @__PURE__ */ $.jsxs(
        Ta,
        {
          "data-test": "radio-group-helper-text",
          component: "div",
          ...f,
          error: b.error && !I.isEmpty(p),
          children: [
            /* @__PURE__ */ $.jsx(hr, { in: b.error && !I.isEmpty(p), children: p }),
            /* @__PURE__ */ $.jsxs(hr, { in: !b.error || I.isEmpty(p), children: [
              u,
              " "
            ] })
          ]
        }
      )
    ]
  }
), cE = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  xm,
  {
    "data-test": "grid",
    ...t,
    children: e
  }
), dE = ({ children: e, className: t, ...r }) => /* @__PURE__ */ $.jsx(
  bm,
  {
    className: oe("rnd-tooltip", t),
    "data-test": "tooltip",
    ...r,
    children: e
  }
), uE = s.forwardRef(
  ({ href: e, className: t, children: r, ...i }, n) => /* @__PURE__ */ $.jsx(
    Nu,
    {
      "data-test": "hyperlink",
      ref: n,
      ...i,
      href: e,
      className: oe("rnd-hyperlink", t),
      children: r || e
    }
  )
), pE = (e) => /* @__PURE__ */ $.jsx(
  ym,
  {
    "data-test": "linearProgress",
    ...e
  }
), hE = ({ children: e, ...t }) => /* @__PURE__ */ $.jsx(
  wm,
  {
    "data-test": "list-item-text",
    disableTypography: !I.isEmpty(e),
    ...t,
    children: e
  }
), fE = ({
  value: e,
  onChange: t,
  className: r,
  tabs: i,
  typographyVariant: n = fi.H3,
  tabIndicatorProps: a,
  typographyProps: o,
  ...l
}) => {
  if (I.size(i) < 2) return /* @__PURE__ */ $.jsx($.Fragment, {});
  const d = I.omit(l, "pageContainerId"), { slotProps: u, ...p } = d;
  return /* @__PURE__ */ $.jsx(
    Gu,
    {
      "data-test": "tab-switch",
      value: e,
      onChange: t,
      className: r,
      ...p,
      slotProps: {
        ...u,
        ...a !== void 0 && { indicator: a }
      },
      children: I.map(i, ({ label: h, ...m }, f) => /* @__PURE__ */ $.jsx(
        Xu,
        {
          "data-test": `tab-${f}`,
          label: /* @__PURE__ */ $.jsx(
            Yi,
            {
              variant: n,
              color: "inherit",
              ellipsis: !0,
              display: "block",
              ...o,
              children: h
            }
          ),
          component: ka,
          ...m
        },
        m.value
      ))
    }
  );
}, ek = 0.5, tk = 0.42, rk = 0.7, ik = "1.4rem", Wa = "https://d35ll89fr5oblf.cloudfront.net", nk = `${Wa}/static/common/fonts/fortawesome/fontawesome-pro-5/css/all.min.css`, ak = `${Wa}/static/common/fonts/fortawesome/fontawesome-pro-5/css/font-face.css`, ok = `${Wa}/static/common/fonts/fortawesome/fontawesome-pro-5/css/v4-shims.min.css`, sk = "https://unpkg.com/@progress/kendo-theme-bootstrap@11.0.2/dist/all.css", tf = `${Wa}/static/common/fonts/centrale-sans/fonts.css`, lk = `${Wa}/static/common/fonts/source-sans-pro/fonts.css`, ck = "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css";
var rf = /* @__PURE__ */ ((e) => (e.CENTRALE_SANS_FONT = "centrale-sans", e.SOURCE_SANS_PRO_FONT = "source-sans-pro", e.FONT_AWESOME_5 = "font-awesome-5", e.FONT_AWESOME_5_FONT_FACE = "font-awesome-5-font-face", e.FONT_AWESOME_4_SHIMS = "font-awesome-4-shims", e.KENDO_THEME = "kendo-5", e.TABLER_ICONS = "tabler-icons-3", e))(rf || {});
const dk = [
  {
    url: tf,
    id: "centrale-sans"
    /* CENTRALE_SANS_FONT */
  },
  {
    url: nk,
    id: "font-awesome-5"
    /* FONT_AWESOME_5 */
  },
  {
    url: ok,
    id: "font-awesome-4-shims"
    /* FONT_AWESOME_4_SHIMS */
  },
  {
    url: sk,
    id: "kendo-5"
    /* KENDO_THEME */
  },
  {
    url: ck,
    id: "tabler-icons-3"
    /* TABLER_ICONS */
  }
], fu = "6.6rem", so = "#000", uk = "phone-field", lo = "iso2", mu = "name", gu = "dialCode", vu = 24, pk = /* @__PURE__ */ new Set(["it", "sm", "va"]), hk = /^0+/, fk = (e, { iso2: t, dialCode: r }) => {
  if (!t || !r || pk.has(t.toLowerCase()))
    return e;
  const i = `+${r}`;
  if (!e.startsWith(i))
    return e;
  let n = e.slice(i.length);
  return n = n.replace(hk, ""), `${i}${n}`;
}, xu = (e) => ({
  width: e.typography.pxToRem(vu),
  height: e.typography.pxToRem(vu)
}), mE = ({
  value: e,
  onChange: t,
  className: r,
  labelPlacement: i = "start",
  helperText: n,
  errorMessage: a,
  reserveMessageSpace: o = !0,
  readOnly: l,
  disabled: d,
  defaultCountry: u = "us",
  showDialCodePreview: p = !0,
  filterable: h = !0,
  stripLeadingZeros: m = !0,
  slotProps: f,
  ...b
}) => {
  const x = Bn(), [w, y] = s.useState(b.focused), [E, C] = s.useState(!1), [R, N] = s.useState(ys), O = (ce) => {
    N(gp(ys, ce.filter));
  }, T = s.useCallback(
    (ce) => {
      if (t) {
        let se = ce.phone;
        m && (se = fk(ce.phone, ce.country)), t({ value: { ...ce, phone: se } });
      }
    },
    [t, m]
  ), {
    inputValue: k,
    handlePhoneValueChange: W,
    inputRef: H,
    country: Y,
    setCountry: K
  } = Lf({
    value: e?.phone,
    countries: Tu,
    defaultCountry: u,
    onChange: T,
    disableDialCodeAndPrefix: p
  }), _ = s.useCallback(
    (ce) => {
      var se;
      K(I.get(ce.value, lo)), (se = H.current) == null || se.focus();
    },
    [H, K]
  ), X = s.useRef(), A = s.useCallback(() => {
    d || (clearTimeout(X.current), y(!0));
  }, [d]), L = s.useCallback(() => {
    d || (X.current = setTimeout(() => {
      y(!1), C(!1);
    }));
  }, [d]), J = s.useCallback(() => {
    C(!0);
  }, []), D = s.useCallback(() => {
    C(!1);
  }, []), F = s.useCallback(
    (ce, se) => /* @__PURE__ */ $.jsxs(
      cl,
      {
        id: ce.props.id,
        direction: "row",
        spacing: 1,
        sx: {
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 0,
          paddingLeft: x.spacingVariants.XXS,
          paddingY: x.spacingVariants.XXS
        },
        children: [
          /* @__PURE__ */ $.jsx(
            ll,
            {
              iso2: I.get(se, lo),
              style: xu(x)
            }
          ),
          p && /* @__PURE__ */ $.jsxs(Yi, { component: "span", children: [
            "+",
            I.get(se, gu)
          ] })
        ]
      }
    ),
    [x, p]
  ), te = s.useCallback(
    (ce, se) => {
      const { dataItem: ie } = se, He = /* @__PURE__ */ $.jsxs(
        cl,
        {
          direction: "row",
          spacing: x.spacingVariants.XS,
          sx: {
            alignItems: "center",
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ $.jsx(
              ll,
              {
                iso2: I.get(ie, lo),
                style: xu(x)
              }
            ),
            /* @__PURE__ */ $.jsx(Yi, { component: "span", children: I.get(ie, mu) }),
            /* @__PURE__ */ $.jsxs(
              Yi,
              {
                component: "span",
                color: "gray",
                children: [
                  "+",
                  I.get(ie, gu)
                ]
              }
            )
          ]
        }
      );
      return s.cloneElement(ce, ce.props, He);
    },
    [x]
  );
  return /* @__PURE__ */ $.jsx(
    Ou,
    {
      onFocus: A,
      onBlur: L,
      children: /* @__PURE__ */ $.jsx(
        sc,
        {
          "data-test": uk,
          ...b,
          type: "tel",
          inputRef: H,
          disabled: d,
          className: oe(
            "rnd-phone-field",
            qm,
            r,
            !I.isEmpty(b.label) && Xt[i]
          ),
          value: k,
          onChange: W,
          helperText: /* @__PURE__ */ $.jsxs($.Fragment, { children: [
            /* @__PURE__ */ $.jsx(hr, { in: b.error && !I.isEmpty(a), children: a }),
            /* @__PURE__ */ $.jsxs(hr, { in: !b.error || I.isEmpty(a), children: [
              n,
              o && /* @__PURE__ */ $.jsx($.Fragment, { children: " " })
            ] })
          ] }),
          focused: w,
          slotProps: {
            input: {
              onMouseEnter: J,
              onMouseLeave: D,
              className: oe({
                [$a]: E,
                [Vu]: !0
              }),
              startAdornment: /* @__PURE__ */ $.jsx(
                No,
                {
                  position: "start",
                  className: $r,
                  sx: {
                    marginRight: x.spacingVariants.XXXS,
                    marginLeft: -3.2
                  },
                  children: /* @__PURE__ */ $.jsx(
                    za,
                    {
                      ariaLabel: "Country selector",
                      iconClassName: "fas fa-chevron-down",
                      className: oe(
                        {
                          [$a]: E,
                          [dc]: w
                        },
                        $r,
                        cc,
                        "rnd-dropdown-list"
                      ),
                      popupSettings: {
                        width: "auto",
                        className: oe(
                          $r,
                          Ra[b.color || "primary"],
                          b.error && Ko
                        )
                      },
                      dir: x.direction,
                      fillMode: "outline",
                      value: Y,
                      onChange: _,
                      valueRender: F,
                      itemRender: te,
                      textField: mu,
                      dataItemKey: lo,
                      data: h ? R : ys,
                      filterable: h,
                      onFilterChange: h ? O : void 0,
                      disabled: d
                    }
                  )
                }
              ),
              readOnly: l,
              ...f?.input
            },
            inputLabel: f?.inputLabel,
            formHelperText: {
              component: "div",
              ...f?.formHelperText
            },
            htmlInput: f?.htmlInput
          }
        }
      )
    }
  );
}, mk = (e, t, r) => {
  if (e && r === "contained")
    return {
      "&.Mui-selected": {
        backgroundColor: `${t.color || "primary"}.main`,
        color: `${t.color || "primary"}.contrastText`,
        "&:hover": {
          backgroundColor: `${t.color || "primary"}.dark`
        }
      }
    };
}, gE = ({
  options: e,
  forceSelection: t = !0,
  initialValue: r,
  // TODO: Rename to value
  onSelectOption: i,
  variant: n,
  className: a,
  ...o
}) => {
  const [l, d] = s.useState(r), u = (p, h) => {
    (!t || t && !I.isNull(h)) && (d(h), I.isUndefined(i) || i(h, p));
  };
  return /* @__PURE__ */ $.jsx(
    $m,
    {
      "data-test": "segmented-button",
      ...o,
      className: oe("rnd-segmented-button", a),
      value: l,
      exclusive: !0,
      onChange: u,
      children: I.map(e, ({ key: p, value: h, sx: m, ...f }) => /* @__PURE__ */ $.jsx(
        km,
        {
          "data-test": `segmented-button-option${l === p ? "-selected" : ""}`,
          value: p,
          ...f,
          sx: {
            ...mk(l === p, o, n),
            ...m
          },
          className: oe("rnd-segmented-button-option", a),
          children: h
        },
        p
      ))
    }
  );
}, vE = (e) => /* @__PURE__ */ $.jsx(
  Cm,
  {
    "data-test": "skeleton",
    ...e
  }
), ra = s.forwardRef(
  ({ id: e, message: t, severity: r, color: i, icon: n, onSnackClose: a, alertProps: o }, l) => {
    var d;
    const u = (p) => {
      I.isFunction(a) && a(e, p);
    };
    return /* @__PURE__ */ $.jsx(
      Pf,
      {
        ref: l,
        children: /* @__PURE__ */ $.jsx(
          Ku,
          {
            "data-test": "alert-snackbar",
            elevation: 4,
            containerProps: {
              "data-test": "alert-snackbar-container",
              className: oe(
                xt.snackbar.container,
                "rnd-alert-snackbar-container",
                (d = o?.containerProps) == null ? void 0 : d.className
              ),
              ...o?.containerProps
            },
            severity: r,
            icon: n,
            color: i,
            onClose: I.isFunction(a) ? u : void 0,
            ...o,
            className: oe(
              xt.snackbar.main,
              "rnd-alert-snackbar",
              o?.className
            ),
            children: t
          }
        )
      },
      e
    );
  }
), xE = ({ className: e, ...t }) => /* @__PURE__ */ $.jsx(
  Sm,
  {
    "data-test": "switch",
    className: oe("rnd-switch", e),
    ...t
  }
), bE = s.forwardRef(
  ({ children: e, value: t, selected: r, ...i }, n) => /* @__PURE__ */ $.jsx(
    Fo,
    {
      role: "tabpanel",
      hidden: r !== t,
      id: `tabpanel-${t}`,
      "aria-labelledby": `tab-${t}`,
      "data-test": `tabpanel-${t}`,
      ref: n,
      ...i,
      children: r === t && /* @__PURE__ */ $.jsx($.Fragment, { children: e })
    }
  )
), yE = ({
  control: e,
  name: t,
  rules: r,
  textField: i
}) => {
  const {
    field: n,
    fieldState: { error: a }
  } = Ru({
    control: e,
    name: t,
    rules: r,
    disabled: i?.disabled
  });
  return /* @__PURE__ */ $.jsx(
    Z$,
    {
      error: !!a,
      errorMessage: a?.message,
      required: r?.required,
      ...I.omit(i, "inputRef"),
      ...I.omit(n, ["ref", "value"]),
      value: n.value || "",
      inputRef: (o) => {
        n.ref(o), i != null && i.inputRef && Qu(i.inputRef, o);
      }
    }
  );
}, wE = s.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ $.jsx(
    Em,
    {
      "data-test": "timeline",
      ...t,
      ref: r,
      className: oe("rnd-timeline", e)
    }
  )
), $E = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Dm,
  {
    "data-test": "timeline-connector",
    ...e,
    ref: t
  }
)), kE = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Mm,
  {
    "data-test": "timeline-content",
    ...e,
    ref: t
  }
)), CE = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Im,
  {
    "data-test": "timeline-dot",
    ...e,
    ref: t
  }
)), SE = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Tm,
  {
    "data-test": "timeline-item",
    ...e,
    ref: t
  }
)), EE = s.forwardRef((e, t) => /* @__PURE__ */ $.jsx(
  Rm,
  {
    "data-test": "timeline-separator",
    ...e,
    ref: t
  }
)), gk = {
  horizontal: "center",
  vertical: "bottom"
}, vk = 5e3, xk = 2, DE = (e) => {
  Af(e);
}, ME = (e) => /* @__PURE__ */ $.jsx(
  zf,
  {
    anchorOrigin: gk,
    autoHideDuration: vk,
    maxSnack: xk,
    classes: { containerRoot: _u.container },
    ...e,
    Components: {
      default: ra,
      success: ra,
      error: ra,
      warning: ra,
      info: ra
    }
  }
);
var dt = "-ms-", ya = "-moz-", Ue = "-webkit-", rc = "comm", Ia = "rule", qc = "decl", bk = "@media", yk = "@import", wk = "@supports", nf = "@keyframes", $k = Math.abs, Yc = String.fromCharCode, kk = Object.assign;
function Ck(e, t) {
  return Kt(e, 0) ^ 45 ? (((t << 2 ^ Kt(e, 0)) << 2 ^ Kt(e, 1)) << 2 ^ Kt(e, 2)) << 2 ^ Kt(e, 3) : 0;
}
function af(e) {
  return e.trim();
}
function Mi(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, r) {
  return e.replace(t, r);
}
function Mo(e, t) {
  return e.indexOf(t);
}
function Kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function zn(e, t, r) {
  return e.slice(t, r);
}
function pi(e) {
  return e.length;
}
function of(e) {
  return e.length;
}
function co(e, t) {
  return t.push(e), e;
}
function Sk(e, t) {
  return e.map(t).join("");
}
var ps = 1, Hn = 1, sf = 0, jr = 0, jt = 0, Un = "";
function hs(e, t, r, i, n, a, o) {
  return { value: e, root: t, parent: r, type: i, props: n, children: a, line: ps, column: Hn, length: o, return: "" };
}
function ia(e, t) {
  return kk(hs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ek() {
  return jt;
}
function Dk() {
  return jt = jr > 0 ? Kt(Un, --jr) : 0, Hn--, jt === 10 && (Hn = 1, ps--), jt;
}
function qr() {
  return jt = jr < sf ? Kt(Un, jr++) : 0, Hn++, jt === 10 && (Hn = 1, ps++), jt;
}
function Ki() {
  return Kt(Un, jr);
}
function Io() {
  return jr;
}
function fs(e, t) {
  return zn(Un, e, t);
}
function ic(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mk(e) {
  return ps = Hn = 1, sf = pi(Un = e), jr = 0, [];
}
function Ik(e) {
  return Un = "", e;
}
function il(e) {
  return af(fs(jr - 1, nc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tk(e) {
  for (; (jt = Ki()) && jt < 33; )
    qr();
  return ic(e) > 2 || ic(jt) > 3 ? "" : " ";
}
function Rk(e, t) {
  for (; --t && qr() && !(jt < 48 || jt > 102 || jt > 57 && jt < 65 || jt > 70 && jt < 97); )
    ;
  return fs(e, Io() + (t < 6 && Ki() == 32 && qr() == 32));
}
function nc(e) {
  for (; qr(); )
    switch (jt) {
      case e:
        return jr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nc(jt);
        break;
      case 40:
        e === 41 && nc(e);
        break;
      case 92:
        qr();
        break;
    }
  return jr;
}
function Ok(e, t) {
  for (; qr() && e + jt !== 57; )
    if (e + jt === 84 && Ki() === 47)
      break;
  return "/*" + fs(t, jr - 1) + "*" + Yc(e === 47 ? e : qr());
}
function Nk(e) {
  for (; !ic(Ki()); )
    qr();
  return fs(e, jr);
}
function Fk(e) {
  return Ik(To("", null, null, null, [""], e = Mk(e), 0, [0], e));
}
function To(e, t, r, i, n, a, o, l, d) {
  for (var u = 0, p = 0, h = o, m = 0, f = 0, b = 0, x = 1, w = 1, y = 1, E = 0, C = "", R = n, N = a, O = i, T = C; w; )
    switch (b = E, E = qr()) {
      case 40:
        if (b != 108 && Kt(T, h - 1) == 58) {
          Mo(T += ye(il(E), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += il(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Tk(b);
        break;
      case 92:
        T += Rk(Io() - 1, 7);
        continue;
      case 47:
        switch (Ki()) {
          case 42:
          case 47:
            co(Lk(Ok(qr(), Io()), t, r), d);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * x:
        l[u++] = pi(T) * y;
      case 125 * x:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            w = 0;
          case 59 + p:
            f > 0 && pi(T) - h && co(f > 32 ? yu(T + ";", i, r, h - 1) : yu(ye(T, " ", "") + ";", i, r, h - 2), d);
            break;
          case 59:
            T += ";";
          default:
            if (co(O = bu(T, t, r, u, p, n, l, C, R = [], N = [], h), a), E === 123)
              if (p === 0)
                To(T, t, O, O, R, a, h, l, N);
              else
                switch (m === 99 && Kt(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 109:
                  case 115:
                    To(e, O, O, i && co(bu(e, O, O, 0, 0, n, l, C, n, R = [], h), N), n, N, h, l, i ? R : N);
                    break;
                  default:
                    To(T, O, O, O, [""], N, 0, l, N);
                }
        }
        u = p = f = 0, x = y = 1, C = T = "", h = o;
        break;
      case 58:
        h = 1 + pi(T), f = b;
      default:
        if (x < 1) {
          if (E == 123)
            --x;
          else if (E == 125 && x++ == 0 && Dk() == 125)
            continue;
        }
        switch (T += Yc(E), E * x) {
          case 38:
            y = p > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (pi(T) - 1) * y, y = 1;
            break;
          case 64:
            Ki() === 45 && (T += il(qr())), m = Ki(), p = h = pi(C = T += Nk(Io())), E++;
            break;
          case 45:
            b === 45 && pi(T) == 2 && (x = 0);
        }
    }
  return a;
}
function bu(e, t, r, i, n, a, o, l, d, u, p) {
  for (var h = n - 1, m = n === 0 ? a : [""], f = of(m), b = 0, x = 0, w = 0; b < i; ++b)
    for (var y = 0, E = zn(e, h + 1, h = $k(x = o[b])), C = e; y < f; ++y)
      (C = af(x > 0 ? m[y] + " " + E : ye(E, /&\f/g, m[y]))) && (d[w++] = C);
  return hs(e, t, r, n === 0 ? Ia : l, d, u, p);
}
function Lk(e, t, r) {
  return hs(e, t, r, rc, Yc(Ek()), zn(e, 2, -2), 0);
}
function yu(e, t, r, i) {
  return hs(e, t, r, qc, zn(e, 0, i), zn(e, i + 1, -1), i);
}
function lf(e, t, r) {
  switch (Ck(e, t)) {
    case 5103:
      return Ue + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ue + e + e;
    case 4789:
      return ya + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ue + e + ya + e + dt + e + e;
    case 5936:
      switch (Kt(e, t + 11)) {
        case 114:
          return Ue + e + dt + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ue + e + dt + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ue + e + dt + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return Ue + e + dt + e + e;
    case 6165:
      return Ue + e + dt + "flex-" + e + e;
    case 5187:
      return Ue + e + ye(e, /(\w+).+(:[^]+)/, Ue + "box-$1$2" + dt + "flex-$1$2") + e;
    case 5443:
      return Ue + e + dt + "flex-item-" + ye(e, /flex-|-self/g, "") + (Mi(e, /flex-|baseline/) ? "" : dt + "grid-row-" + ye(e, /flex-|-self/g, "")) + e;
    case 4675:
      return Ue + e + dt + "flex-line-pack" + ye(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return Ue + e + dt + ye(e, "shrink", "negative") + e;
    case 5292:
      return Ue + e + dt + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return Ue + "box-" + ye(e, "-grow", "") + Ue + e + dt + ye(e, "grow", "positive") + e;
    case 4554:
      return Ue + ye(e, /([^-])(transform)/g, "$1" + Ue + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, Ue + "$1"), /(image-set)/, Ue + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, Ue + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, Ue + "box-pack:$3" + dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ue + e + e;
    case 4200:
      if (!Mi(e, /flex-|baseline/)) return dt + "grid-column-align" + zn(e, t) + e;
      break;
    case 2592:
    case 3360:
      return dt + ye(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(i, n) {
        return t = n, Mi(i.props, /grid-\w+-end/);
      }) ? ~Mo(e + (r = r[t].value), "span") ? e : dt + ye(e, "-start", "") + e + dt + "grid-row-span:" + (~Mo(r, "span") ? Mi(r, /\d+/) : +Mi(r, /\d+/) - +Mi(e, /\d+/)) + ";" : dt + ye(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(i) {
        return Mi(i.props, /grid-\w+-start/);
      }) ? e : dt + ye(ye(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, Ue + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pi(e) - 1 - t > 6)
        switch (Kt(e, t + 1)) {
          case 109:
            if (Kt(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + Ue + "$2-$3$1" + ya + (Kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Mo(e, "stretch") ? lf(ye(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return ye(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, n, a, o, l, d, u) {
        return dt + n + ":" + a + u + (o ? dt + n + "-span:" + (l ? d : +d - +a) + u : "") + e;
      });
    case 4949:
      if (Kt(e, t + 6) === 121)
        return ye(e, ":", ":" + Ue) + e;
      break;
    case 6444:
      switch (Kt(e, Kt(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return ye(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ue + (Kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ue + "$2$3$1" + dt + "$2box$3") + e;
        case 100:
          return ye(e, ":", ":" + dt) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ye(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ro(e, t) {
  for (var r = "", i = of(e), n = 0; n < i; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function cf(e, t, r, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case qc:
        e.return = lf(e.value, e.length, r);
        return;
      case nf:
        return Ro([ia(e, { value: ye(e.value, "@", "@" + Ue) })], i);
      case Ia:
        if (e.length)
          return Sk(e.props, function(n) {
            switch (Mi(n, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ro([ia(e, { props: [ye(n, /:(read-\w+)/, ":" + ya + "$1")] })], i);
              case "::placeholder":
                return Ro([
                  ia(e, { props: [ye(n, /:(plac\w+)/, ":" + Ue + "input-$1")] }),
                  ia(e, { props: [ye(n, /:(plac\w+)/, ":" + ya + "$1")] }),
                  ia(e, { props: [ye(n, /:(plac\w+)/, dt + "input-$1")] })
                ], i);
            }
            return "";
          });
    }
}
function df(e, t, r) {
  switch (e.type) {
    case yk:
    case qc:
    case rc:
      return e.return = e.return || e.value;
    case Ia:
      e.value = Array.isArray(e.props) ? e.props.join(",") : e.props, Array.isArray(e.children) && e.children.forEach(function(n) {
        n.type === rc && (n.children = n.value);
      });
  }
  var i = Ro(Array.prototype.concat(e.children), df);
  return pi(i) ? e.return = e.value + "{" + i + "}" : "";
}
function Kc(e, t, r, i) {
  if (e.type === nf || e.type === wk || e.type === Ia && (!e.parent || e.parent.type === bk || e.parent.type === Ia)) {
    var n = Hf.transform(df(e));
    e.children = n ? Fk(n)[0].children : [], e.return = "";
  }
}
Object.defineProperty(Kc, "name", { value: "stylisRTLPlugin" });
const Pk = ({ url: e, id: t }) => {
  if (!document.getElementById(t)) {
    const r = document.createElement("link");
    r.id = t, r.rel = "stylesheet", r.href = e, document.head.prepend(r);
  }
}, Ak = (e) => {
  e.forEach(({ url: t, id: r }) => Pk({ url: t, id: r }));
}, wu = "rnd-kendo-global-styles";
let $u = "";
const uf = (e) => {
  try {
    const t = `
    .k-drag-clue {
      background-color: ${e.palette.primary.main} !important;
      color: ${e.palette.primary.contrastText} !important;
      padding: ${e.spacing(1)} ${e.spacing(2)} !important;
      border-radius: ${e.shape.borderRadius}px !important;
      font-size: ${e.typography.fontSize}px !important;
    }
    .k-drag-clue .k-icon {
      display: none !important;
    }
    .k-grouping-dropclue {
      margin-top: 0;
    }
    .k-grouping-dropclue::before {
      border-width: 5px;
      left: 1.5px;
    }
    .k-grouping-dropclue::after {
      display: none;
    }
  `;
    if (t === $u)
      return;
    $u = t;
    let r = document.getElementById(wu);
    r ? r.textContent = t : (r = document.createElement("style"), r.id = wu, r.textContent = t, document.head.appendChild(r));
  } catch (t) {
    console.error("Failed to inject global Kendo styles:", t);
  }
}, zk = "k-grid-columnmenu-popup", Hk = [
  ".k-animation-container",
  ".k-grid-columnmenu-popup",
  ".k-column-menu",
  ".k-popup"
], Bk = (e, t) => e ? Array.isArray(e) ? e.some((r) => r.includes(t)) : e.includes(t) : !1, Vk = (e) => {
  var t;
  return (((t = e.composedPath) == null ? void 0 : t.call(e)) ?? (e.target ? [e.target] : [])).some((r) => r instanceof Element ? Hk.some((i) => r.closest(i) !== null) : !1);
}, jk = (e, t) => {
  if (!e)
    return;
  const r = Bk(t?.popupClass, zk);
  return (i) => {
    r && Vk(i.event) || e(i);
  };
}, Wk = {
  XS: "0.2rem",
  S: "0.3rem",
  M: "0.4rem",
  L: "0.6rem",
  XL: "0.8rem",
  ROUND: "50%"
}, Uk = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  dialogXs: 400,
  dialogSm: 600,
  dialogMd: 720,
  dialogLg: 900
}, _k = (e = {}) => Om({
  values: { ...Uk, ...e.values }
}), qk = {
  drawer: {
    open: "24rem",
    closed: "4.2rem"
  }
}, Xc = (e) => e !== void 0 && e !== lc, pf = (e) => lc / e, hf = (e) => typeof e == "number" ? `${0.4 * e}rem` : e, Yk = (e = []) => I.isEmpty(e) ? hf : e, Kk = {
  /** 2px */
  XXXS: 0.5,
  /** 4px */
  XXS: 1,
  /** 8px */
  XS: 2,
  /** 12px */
  S: 3,
  /** 16px */
  M: 4,
  /** 24px */
  L: 6,
  /** 32px */
  XL: 8,
  /** 48 */
  XXL: 12
}, Xk = (e) => {
  const t = pf(e);
  return (r) => typeof r == "number" ? `${0.4 * t * r}rem` : r;
}, Gk = (e, t) => {
  if (!Xc(t))
    return hf;
  let r;
  return typeof e == "function" ? r = Nm(Xk(t)) : r = e, r;
}, Zk = (e, t) => I.replace(e, /(-?\d+\.?\d*)rem/g, (r, i) => {
  const n = Number.parseFloat(i) * t;
  return `${Math.round(n * 1e4) / 1e4}rem`;
}), Qk = (e, t) => {
  if (!Xc(t))
    return e;
  const r = pf(t);
  return I.cloneDeepWith(e, (i) => {
    if (I.isString(i) && I.includes(i, "rem"))
      return Zk(i, r);
  });
}, Jk = (e, t, r) => {
  if (!Xc(r))
    return e;
  const i = Qk(e, r), n = Gk(t, r);
  return Ii({
    ...i,
    spacing: n
  });
}, e1 = {
  center: {
    xy: {
      transform: "translateX(-50%) translateY(-50%)",
      top: "50%",
      right: "auto",
      bottom: "auto",
      left: "50%"
    },
    x: {
      transform: "translateX(-50%)",
      right: "auto",
      left: "50%"
    },
    y: {
      transform: "translateY(-50%)",
      top: "50%",
      bottom: "auto"
    }
  },
  toolbar: {
    minHeight: fu,
    maxHeight: fu
  },
  linearGradient: {
    right: (e = so) => ({
      background: `linear-gradient(to right, ${ze(e, 0)} 50%, ${ze(e, 0.75)} 100%)`
    }),
    left: (e = so) => ({
      background: `linear-gradient(to left, ${ze(e, 0)} 50%, ${ze(e, 0.75)} 100%)`
    }),
    bottom: (e = so) => ({
      background: `linear-gradient(to bottom, ${ze(e, 0)} 50%, ${ze(e, 0.75)} 100%)`
    }),
    top: (e = so) => ({
      background: `linear-gradient(to top, ${ze(e, 0)} 50%, ${ze(e, 0.75)} 100%)`
    })
  }
}, t1 = () => ({
  styleOverrides: {
    root: {
      "&.MuiPaper-outlined:before": {
        backgroundColor: "initial"
      },
      "&.MuiPaper-contained:before": {
        backgroundColor: "initial"
      }
    }
  }
}), r1 = (e) => ({
  styleOverrides: {
    root: {
      padding: e?.spacing(4)
    }
  }
}), i1 = (e) => ({
  defaultProps: {
    expandIcon: /* @__PURE__ */ $.jsx(
      Sn,
      {
        icon: `fas ${e?.direction === "rtl" ? "fa-chevron-left" : "fa-chevron-right"}`,
        fontSize: "inherit"
      }
    )
  },
  styleOverrides: {
    root: {
      flexDirection: "row-reverse",
      padding: e?.spacing(0, 4)
    },
    expandIconWrapper: {
      marginInlineEnd: e?.spacing(2),
      "&.Mui-expanded": {
        transform: e?.direction === "rtl" ? "rotate(-90deg)" : "rotate(90deg)"
      }
    },
    content: {
      justifyContent: "space-between",
      alignItems: "center"
    }
  }
}), n1 = (e) => {
  var t, r;
  return {
    defaultProps: {
      variant: "standard",
      iconMapping: Yu()
    },
    styleOverrides: {
      root: {
        [`&.${mt.standard}.${mt.colorSuccess}`]: {
          color: e?.palette.common.black || "#000",
          backgroundColor: e?.palette.success.light || "#fff"
        },
        [`&.${mt.standard}.${mt.colorInfo}`]: {
          color: e?.palette.common.black || "#000",
          backgroundColor: e?.palette.info.light || "#fff"
        },
        [`&.${mt.standard}.${mt.colorWarning}`]: {
          color: e?.palette.common.black || "#000",
          backgroundColor: e?.palette.warning.light || "#fff"
        },
        [`&.${mt.standard}.${mt.colorError}`]: {
          color: e?.palette.common.black || "#000",
          backgroundColor: e?.palette.error.light || "#fff"
        },
        [`&.${mt.outlined}.${mt.colorSuccess}`]: {
          color: e?.palette.success.main || "#000"
        },
        [`&.${mt.outlined}.${mt.colorInfo}`]: {
          color: e?.palette.info.main || "#000"
        },
        [`&.${mt.outlined}.${mt.colorWarning}`]: {
          color: e?.palette.warning.main || "#000"
        },
        [`&.${mt.outlined}.${mt.colorError}`]: {
          color: e?.palette.error.main || "#000"
        },
        [`&.${mt.filled}.${mt.colorSuccess}`]: {
          backgroundColor: e?.palette.success.main || "#fff"
        },
        [`&.${mt.filled}.${mt.colorInfo}`]: {
          backgroundColor: e?.palette.info.main || "#fff"
        },
        [`&.${mt.filled}.${mt.colorWarning}`]: {
          backgroundColor: e?.palette.warning.main || "#fff"
        },
        [`&.${mt.filled}.${mt.colorError}`]: {
          backgroundColor: e?.palette.error.main || "#fff"
        },
        "&.MuiAlert-standard.MuiAlert-colorPrimary": {
          color: e?.palette.primary.main || "#000",
          backgroundColor: ze(e?.palette.primary.main || "#fff", 0.2)
        },
        "&.MuiAlert-standard.MuiAlert-colorSecondary": {
          color: e?.palette.secondary.main || "#000",
          backgroundColor: ze(e?.palette.secondary.main || "#fff", 0.2)
        },
        "&.MuiAlert-standard.MuiAlert-colorNeutral": {
          color: ((t = e?.palette.neutral) == null ? void 0 : t.main) || "#000",
          backgroundColor: ze(((r = e?.palette.neutral) == null ? void 0 : r.main) || "#fff", 0.2)
        },
        justifyContent: "flex-start",
        alignItems: "baseline",
        padding: e?.spacing(2, 4),
        ".MuiButton-contained, .MuiButton-contained:hover": {
          boxShadow: "none"
        },
        [`& .${xt.closeButton}`]: {
          backgroundColor: "transparent",
          border: "1px solid transparent",
          marginInlineStart: 8,
          color: "inherit",
          "&:hover": {
            borderColor: "inherit",
            backgroundColor: "transparent",
            ".MuiIcon-root": {
              backgroundColor: "transparent"
            }
          }
        },
        ".MuiAlert-icon": {
          color: "inherit"
        },
        [`.MuiButton-root:not(.${xt.closeButton}):not(.${xt.collapsible.expandButton})`]: {
          color: "#383D47",
          border: "1px solid",
          borderColor: ze(e?.palette.border.base || "#000", 0.1),
          backgroundColor: e?.palette.common.white || "#fff",
          "&:hover": {
            borderColor: ze(e?.palette.border.base || "#000", 0.2),
            backgroundColor: "#eaebf2"
          }
        },
        [`&.${xt.collapsible.main}`]: {
          ".MuiAlert-action": {
            position: "absolute",
            right: e?.spacing(2),
            padding: 0,
            marginRight: 0
          },
          [`.${xt.collapsible.collapse}`]: {
            marginInlineStart: e?.spacing(-7)
          },
          [`&.${xt.noIcon} .${xt.collapsible.collapse}`]: {
            marginInlineStart: 0
          },
          [`.${xt.collapsible.content}`]: {
            padding: e?.spacing(2),
            marginTop: e?.spacing(4)
          },
          [`.${xt.collapsible.expandButton}`]: {
            marginInlineStart: 8,
            border: "1px solid transparent",
            backgroundColor: "transparent",
            color: "inherit",
            "&:hover": {
              borderColor: "inherit"
            },
            ".MuiIcon-root": {
              transition: "transform 0.15s",
              transform: "rotate(0deg)"
            }
          }
        },
        [`&.${xt.collapsible.expanded}`]: {
          [`.${xt.collapsible.expandButton}`]: {
            ".MuiIcon-root": {
              transition: "transform 0.15s",
              transform: "rotate(180deg)"
            }
          }
        },
        [`&.${xt.static.main}`]: {
          padding: e?.spacing(2, 3),
          ".MuiAlert-message": {
            padding: 0
          },
          ".MuiAlert-icon": {
            marginTop: 0,
            padding: 0
          },
          ".MuiButton-root": {
            padding: e?.spacing(0.5, 2)
          }
        }
      },
      icon: {
        marginTop: e?.spacing(1)
      },
      action: {
        size: "small",
        paddingTop: 0
      },
      message: {
        width: "100%",
        overflow: "unset",
        fontSize: e?.typography.body.fontSize,
        fontWeight: e?.typography.fontWeightMedium
      }
    }
  };
}, a1 = (e) => ({
  styleOverrides: {
    root: {
      backgroundColor: e?.palette.background.avatar,
      "& .MuiTypography-root, & .MuiIcon-root": {
        color: e?.palette.text.faded
      },
      [`&.${Qm}`]: {
        border: `0.2rem solid ${e?.palette.primary.main}`
      },
      [`&.${Hi.xxs}`]: {
        width: e?.size.avatar.XXS,
        height: e?.size.avatar.XXS,
        fontSize: "1.2rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.4rem"
        }
      },
      [`&.${Hi.xs}`]: {
        width: e?.size.avatar.XS,
        height: e?.size.avatar.XS,
        fontSize: "1.2rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.4rem"
        }
      },
      [`&.${Hi.sm}`]: {
        width: e?.size.avatar.SM,
        height: e?.size.avatar.SM,
        fontSize: "1.6rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.4rem"
        }
      },
      [`&.${Hi.md}`]: {
        width: e?.size.avatar.MD,
        height: e?.size.avatar.MD,
        fontSize: "1.6rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.4rem"
        }
      },
      [`&.${Hi.lg}`]: {
        width: e?.size.avatar.LG,
        height: e?.size.avatar.LG,
        fontSize: "2rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.6rem"
        }
      },
      [`&.${Hi.xl}`]: {
        width: e?.size.avatar.XL,
        height: e?.size.avatar.XL,
        fontSize: "2rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "0.8rem"
        }
      },
      [`&.${Hi.xxl}`]: {
        width: e?.size.avatar.XXL,
        height: e?.size.avatar.XXL,
        fontSize: "3.2rem",
        [`&.${Bi.rounded}`]: {
          borderRadius: "1.2rem"
        }
      }
    }
  }
}), o1 = (e) => ({
  styleOverrides: {
    root: {
      [`&.${Jr}`]: {
        minWidth: "unset"
      }
    },
    sizeSmall: {
      padding: e?.spacing(1, 2),
      fontSize: "1.2rem",
      lineHeight: "14px",
      "&.MuiButton-outlined": {
        padding: e?.spacing(0.75, 1.75)
      },
      [`&.${Jr}`]: {
        padding: e?.spacing(1.25)
      },
      [`&.${Jr}.MuiButton-outlined`]: {
        padding: e?.spacing(1)
      }
    },
    sizeMedium: {
      padding: e?.spacing(2, 3),
      "&.MuiButton-outlined": {
        padding: e?.spacing(1.75, 2.75)
      },
      [`&.${Jr}`]: {
        padding: e?.spacing(2.5)
      },
      [`&.${Jr}.MuiButton-outlined`]: {
        padding: e?.spacing(2.25)
      }
    },
    sizeLarge: {
      padding: e?.spacing(3, 4),
      fontSize: "1.6rem",
      "&.MuiButton-outlined": {
        padding: e?.spacing(2.75, 3.75)
      },
      [`&.${Jr}`]: {
        padding: e?.spacing(3.25)
      },
      [`&.${Jr}.MuiButton-outlined`]: {
        padding: e?.spacing(3)
      }
    },
    outlined: {
      backgroundColor: e?.palette.background.paper
    },
    startIcon: {
      margin: 0,
      marginInlineEnd: e?.spacing(2),
      marginInlineStart: e?.spacing(-1),
      "&>*:nth-of-type(1)": {
        fontSize: "inherit"
      }
    },
    endIcon: {
      margin: 0,
      marginInlineStart: e?.spacing(2),
      marginInlineEnd: e?.spacing(-1),
      "&>*:nth-of-type(1)": {
        fontSize: "inherit"
      }
    }
  }
}), s1 = () => ({
  styleOverrides: {
    grouped: {
      minWidth: "3.8rem",
      "&:not(:last-child):hover": {
        zIndex: 1,
        borderRightColor: "currentColor"
      },
      "&:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightColor: "transparent"
      },
      "&:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: "-1px"
      }
    }
  }
}), l1 = () => ({
  styleOverrides: {
    root: {
      [`& .${Dr.header} + .${Dr.content}`]: {
        paddingTop: 0
      }
    }
  }
}), ur = "data-custom-color", uo = (e, t) => typeof e == "number" ? e : t === "dark" ? e.dark : e.light, c1 = (e) => ({
  styleOverrides: {
    root: {
      borderRadius: e?.shape.borderRadius,
      height: "unset",
      "& .MuiChip-label > *": {
        display: "inline-flex",
        alignItems: "center"
      }
    },
    label: {
      ...e?.typography.tagLabel
    },
    filledCustom: ({ ownerState: t }) => ({
      ...e && t[ur] && {
        backgroundColor: t[ur],
        color: e?.palette.getContrastText(t[ur].toString()),
        [`& .${Qc.root}`]: {
          color: ze(
            e?.palette.getContrastText(t[ur].toString()),
            rk
          ),
          "&:hover": {
            color: e?.palette.getContrastText(t[ur].toString())
          }
        },
        "&:hover": {
          "&.MuiChip-clickable.MuiChip-clickableColorCustom": {
            backgroundColor: Ya(
              t[ur].toString(),
              uo(e.palette.tonalOffset, "light")
            ),
            ...e.applyStyles("dark", {
              backgroundColor: Ya(
                t[ur].toString(),
                uo(e.palette.tonalOffset, "dark")
              )
            })
          }
        }
      }
    }),
    outlinedCustom: ({ ownerState: t }) => ({
      ...e && t[ur] && {
        borderColor: ze(t[ur].toString(), ek),
        color: t[ur].toString(),
        [`& .${Qc.root}`]: {
          color: t[ur].toString(),
          "&:hover": {
            color: Ya(
              t[ur].toString(),
              uo(e.palette.tonalOffset, "light")
            ),
            ...e.applyStyles("dark", {
              color: Ya(
                t[ur].toString(),
                uo(e.palette.tonalOffset, "dark")
              )
            })
          }
        },
        "&:hover": {
          "&.MuiChip-clickable.MuiChip-clickableColorCustom": {
            transition: e.transitions.create("backgroundColorTransition", {
              duration: e.transitions.duration.shortest
            }),
            backgroundColor: ze(
              t[ur].toString(),
              e.palette.action.selectedOpacity
            ),
            borderColor: t[ur]
          }
        }
      }
    }),
    icon: {
      paddingInlineStart: e?.spacing(2),
      fontSize: "inherit",
      width: "auto"
    },
    sizeSmall: {
      fontSize: e?.typography.caption.fontSize
    },
    sizeMedium: {
      fontSize: e?.typography.body.fontSize
    }
  }
}), d1 = (e) => ({
  styleOverrides: {
    root: ({ ownerState: { withtoolbar: t } }) => {
      var r, i;
      return {
        paddingTop: t === "true" ? (i = (r = e?.mixins) == null ? void 0 : r.toolbar) == null ? void 0 : i.maxHeight : void 0
      };
    }
  }
}), ff = ["neutral", "navigation", "custom"], u1 = ["error", "warning", "info", "success"], Gc = ["primary", "secondary", ...ff], Oo = [...Gc, ...u1], ku = 0.15, p1 = {
  primary: "#333333",
  secondary: "#000000",
  faded: "#777777",
  placeholder: "#bdbcbc",
  readonly: "#333333"
}, h1 = {
  primary: "#E5E5E5",
  secondary: "#FFFFFF",
  faded: "#E0E0E0",
  placeholder: "#bdbcbc",
  readonly: "#E5E5E5"
}, f1 = (e) => ({
  background: {
    grouping: "#F7F7F7",
    image: "#ededed",
    avatar: "#f4f5f8",
    dark: "#eee"
  },
  neutral: {
    main: "#BEC4CD"
  },
  success: {
    main: "#207E4D",
    light: "#CFF2E0"
  },
  info: {
    main: "#707070",
    light: "#DBDBDB"
  },
  warning: {
    main: "#E97102",
    light: "#FEEBC8"
  },
  error: {
    main: "#CC2D33",
    light: "#FFCCCC"
  },
  navigation: {
    main: "#E3E6EE"
  },
  custom: {
    main: "#fff"
  },
  tonalOffset: 0.2,
  border: { base: "rgba(0, 0, 0, 0.23)" },
  text: e === "dark" ? h1 : p1,
  contrastThreshold: 4.5
}), m1 = (e, t) => I.reduce(ff, (r, i) => (r[i] = e({ color: I.get(t, i) }), r), {}), g1 = (e, t) => {
  const r = wa(f1(t?.mode), t), i = m1(e, r);
  return wa(r, i);
}, mf = (e) => I.reduce(
  Oo,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, r) => (t[`&.${Ra[r]}`] = {
    ...e(r)
  }, t),
  {}
), nl = "0 !important", v1 = (e) => ({
  [`.${$r}.k-animation-container`]: {
    zIndex: `${e?.zIndex.modal} !important`
  },
  [`.${$r}, .k-animation-container, .k-window`]: {
    ".k-input-icon.k-svg-icon, .k-input-icon.k-svg-icon > svg, .k-svg-icon.k-icon-sm, .k-color-preview .k-svg-icon": {
      width: "1.4rem",
      height: "1.4rem"
    },
    ".k-popup, .k-menu-popup": {
      backgroundColor: e?.palette.background.paper,
      boxShadow: e?.shadows[8],
      borderRadius: e?.shape.borderRadius,
      border: "none",
      ".k-list, .k-menu-group": {
        borderRadius: "inherit",
        padding: e?.spacing(2, 0)
      }
    },
    ".k-combobox-popup, .k-dropdownlist-popup, .k-multiselect-popup": {
      maxHeight: "clamp(10rem, 50vh, 30rem)",
      overflow: "auto"
    },
    "&.k-editor-window .k-window-actions": {
      margin: 0
    },
    ".k-dropdownlist": {
      minWidth: "17.2rem",
      [`&.${cc}.${$r}`]: {
        minWidth: 0,
        boxShadow: "none",
        borderRadius: 3,
        borderWidth: 0,
        padding: 1,
        backgroundColor: e?.palette.secondary.main,
        [`&.${$a}`]: {
          backgroundColor: e?.palette.secondary.dark
        },
        [`&.${dc}`]: {
          backgroundColor: e?.palette.secondary.dark
        },
        "& .k-button-md": {
          padding: e?.spacing(1.75, 2)
        }
      },
      ".k-input-inner": {
        minHeight: "3.2rem"
      }
    },
    ".k-daterangepicker": {
      "& .k-invalid": {
        borderColor: e?.palette.error.main
      },
      "& .k-input-inner": {
        padding: e?.spacing(1.55, 2.75),
        margin: "-1px",
        width: "auto",
        height: "auto"
      }
    },
    ".k-picker, .k-datepicker, .k-datetimepicker": {
      fontSize: e?.typography.body.fontSize,
      backgroundColor: e?.palette.background.paper,
      lineHeight: e?.typography.body.lineHeight,
      color: e?.palette.text.primary,
      borderColor: e?.palette.border.base,
      padding: "1px",
      "&.k-focus, :focus": {
        padding: 0,
        borderWidth: "2px"
      },
      "&.k-invalid": {
        borderColor: e?.palette.error.main
      },
      ".k-input-inner": {
        padding: e?.spacing(1.55, 2.75),
        margin: "-1px",
        width: "auto",
        height: "auto",
        ".k-icon-color-preview ": {
          gap: "unset"
        }
      },
      ".k-button-md": {
        borderTopLeftRadius: "unset",
        borderBottomLeftRadius: "unset"
      }
    },
    ".k-button-md": {
      ...e?.typography.button,
      padding: e?.spacing(1.75, 2.75),
      "& > .k-button-icon": {
        minHeight: "unset",
        width: "1.4rem",
        height: "1.4rem"
      }
    },
    ".k-button-solid-primary": {
      borderColor: e?.palette.primary.main,
      color: e?.palette.primary.contrastText,
      backgroundColor: e?.palette.primary.main,
      "&:hover, .k-hover": {
        borderColor: e?.palette.primary.dark,
        backgroundColor: e?.palette.primary.dark,
        boxShadow: e?.shadows[4]
      }
    },
    ".k-button-solid-base": {
      borderColor: e?.palette.secondary.main,
      color: e?.palette.secondary.contrastText,
      backgroundColor: e?.palette.secondary.main,
      "&:hover, .k-hover": {
        borderColor: e?.palette.secondary.dark,
        backgroundColor: e?.palette.secondary.dark,
        boxShadow: e?.shadows[4]
      }
    },
    ".k-input .k-button-md": {
      borderColor: e?.palette.secondary.main,
      color: e?.palette.secondary.contrastText,
      backgroundColor: e?.palette.secondary.main,
      "&:hover, .k-hover": {
        borderColor: e?.palette.secondary.dark,
        backgroundColor: e?.palette.secondary.dark,
        boxShadow: e?.shadows[4]
      }
    },
    ".k-button-flat-primary": {
      color: e?.palette.primary.main,
      "&:hover::before": {
        opacity: e?.palette.action.hoverOpacity
      }
    },
    ".k-button-group": {
      ".k-button-solid-base": {
        "&:hover, .k-hover": {
          boxShadow: e?.shadows[4]
        },
        "&.k-selected": {
          borderColor: e?.palette.primary.main,
          color: e?.palette.primary.contrastText,
          backgroundColor: e?.palette.primary.main,
          "&:hover": {
            backgroundColor: e?.palette.primary.dark,
            borderColor: e?.palette.primary.dark
          }
        }
      }
    },
    ".k-input-outline": {
      borderColor: e?.palette.border.base,
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      // The ! important declaration is needed to override Kendo theme's own !important declaration
      backgroundColor: `${e?.palette.background.paper} !important`,
      padding: "1px",
      "&:focus-within": {
        boxShadow: "none",
        padding: 0,
        borderWidth: "2px"
      }
    },
    ".k-rounded-md": {
      borderRadius: e?.shape.borderRadius
    },
    ".k-list": {
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      ".k-list-ul": {
        padding: e?.spacing(1.5, 0)
      },
      ".k-list-item, .k-list-optionlabel": {
        padding: e?.spacing(1.5, 4)
      }
    },
    ".k-menu-group": {
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      padding: e?.spacing(1.5, 0),
      ".k-menu-item": {
        fontSize: e?.typography.body.fontSize,
        lineHeight: e?.typography.body.lineHeight,
        ".k-menu-link": {
          padding: e?.spacing(1.5, 4)
        }
      },
      ".k-item.k-focus > .k-link": {
        boxShadow: "none"
      }
    },
    ".k-list-item:focus, .k-list-optionlabel:focus, .k-list-item.k-focus, .k-focus.k-list-optionlabel": {
      boxShadow: "none"
    },
    "&.k-calendar, .k-calendar": {
      fontFamily: e?.typography.fontFamily,
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      borderRadius: e?.shape.borderRadius,
      color: e?.palette.text.primary,
      ".k-calendar-th": {
        fontSize: "inherit",
        textTransform: "unset"
      }
    },
    ".k-datetime-time-wrap": {
      fontFamily: e?.typography.fontFamily,
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      ".k-time-list-item, .k-time-list .k-item": {
        padding: "0.25rem 1rem"
      },
      ".k-time-list-wrapper": {
        background: "rgba(0, 0, 0, 0.02)"
      },
      ".k-focus": {
        background: "rgba(0, 0, 0, 0.04)"
      },
      ".k-time-highlight": {
        top: "calc(50% + 0.85rem)",
        height: "2rem"
      },
      ".k-time-separator": {
        top: "0.86rem"
      },
      ".k-title": {
        fontSize: "inherit"
      },
      ".k-time-header .k-time-now:hover": {
        color: e?.palette.primary.main
      },
      ".k-time-list .k-item:hover": {
        color: e?.palette.primary.main
      }
    },
    [`&.${Um}.k-editor`]: {
      ".k-toolbar": {
        display: "none"
      }
    },
    "&.k-editor, .k-editor": {
      fontFamily: e?.typography.fontFamily,
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      borderRadius: e?.shape.borderRadius,
      borderColor: e?.palette.border.base,
      color: e?.palette.text.primary,
      backgroundColor: e?.palette.background.paper,
      ".k-toolbar": {
        borderRadius: "inherit",
        borderColor: "inherit",
        color: "inherit",
        backgroundColor: e?.palette.background.grouping
      },
      ".k-editor-content": {
        color: e?.palette.common.black,
        // table styles taken from kendo docs https://www.telerik.com/kendo-react-ui/components/editor/rendering-mode/
        p: {
          margin: "0.6em 0 0.6em 0"
        },
        "td p, th p, li p": {
          margin: 0
        },
        table: {
          margin: 0,
          borderCollapse: "collapse",
          tableLayout: "fixed",
          width: "100%",
          overflow: "hidden"
        },
        "td, th": {
          minWidth: "1em",
          border: "1px solid #ddd",
          padding: "3px 5px",
          verticalAlign: "top",
          boxSizing: "border-box",
          position: "relative"
        },
        th: {
          fontWeight: "bold",
          textAlign: "left"
        },
        ".selectedCell:after": {
          zIndex: 2,
          position: "absolute",
          content: '""',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background: "rgba(200, 200, 255, 0.4)",
          pointerEvents: "none"
        }
      }
    },
    "&.k-widget, .k-dialog": {
      fontFamily: e?.typography.fontFamily,
      fontSize: e?.typography.body.fontSize,
      lineHeight: e?.typography.body.lineHeight,
      borderRadius: e?.shape.borderRadius,
      borderColor: e?.palette.border.base,
      color: e?.palette.text.primary,
      backgroundColor: e?.palette.background.paper,
      ".k-window-titlebar, .k-dialog-titlebar, .k-window-content": {
        padding: e?.spacing(4),
        ".k-window-actions": {
          marginRight: e?.spacing(-4)
        }
      },
      ".k-window-title, .k-dialog-title": {
        ...e?.typography.h3
      },
      ".k-dialog-buttongroup": {
        padding: e?.spacing(2, 4)
      },
      ".k-input": {
        ...e?.typography.body,
        borderColor: e?.palette.border.base,
        borderRadius: e?.shape.borderRadius,
        padding: e?.spacing(1.75, 2.75)
      },
      ".k-checkbox": {
        fontSize: e?.typography.body,
        width: "1em",
        height: "1em",
        margin: e?.spacing(1),
        borderRadius: "2px",
        borderColor: e?.palette.border.base,
        "&:focus, .k-focus": {
          borderColor: e?.palette.border.base,
          boxShadow: "none"
        },
        "&:checked": {
          borderColor: e?.palette.primary.main,
          backgroundColor: e?.palette.primary.main
        }
      },
      ".k-tabstrip": {
        fontFamily: e?.typography.fontFamily,
        ...e?.typography.body,
        "&> .k-content": {
          borderColor: e?.palette.border.base,
          color: "inherit"
        },
        ".k-tabstrip-items-wrapper": {
          color: "inherit",
          borderColor: e?.palette.border.base,
          ".k-item": {
            color: e?.palette.primary.main,
            "&.k-active": {
              color: "inherit"
            }
          }
        }
      },
      ".k-editor-find-replace .k-matches-container": {
        bottom: e?.spacing(2)
      }
    },
    ...mf((t) => ({
      ".k-list-item.k-selected, .k-selected.k-list-optionlabel": {
        color: e?.palette.text.primary,
        backgroundColor: ze(
          e?.palette[t].main || "#fff",
          e?.palette.action.selectedOpacity || 0.08
        )
      },
      ".k-list-filter>.k-input-outline:focus-within": {
        borderColor: e?.palette[t].main
      },
      "&.k-calendar, .k-calendar": {
        ".k-nav-today": {
          color: e?.palette[t].main
        },
        ".k-range-mid": {
          backgroundColor: ze(
            e?.palette[t].main || "#fff",
            e?.palette.action.selectedOpacity || 0.08
          )
        },
        " .k-range-split-start::after": {
          backgroundImage: `linear-gradient(to left, ${ze(
            e?.palette[t].main || "#fff",
            e?.palette.action.selectedOpacity || 0.08
          )}, transparent 100%)`
        },
        " .k-range-split-end::after": {
          backgroundImage: `linear-gradient(to right, ${ze(
            e?.palette[t].main || "#fff",
            e?.palette.action.selectedOpacity || 0.08
          )}, transparent 100%)`
        },
        ".k-calendar-view .k-today .k-calendar-cell-inner,\n          .k-calendar-view .k-today .k-link": {
          boxShadow: `inset 0 0 0 1px ${e?.palette[t].main}`
        },
        ".k-calendar-td.k-selected .k-calendar-cell-inner,\n          .k-calendar-td.k-selected .k-link,\n          .k-calendar-td.k-state-selected .k-calendar-cell-inner,\n          .k-calendar-td.k-state-selected .k-link": {
          borderColor: e?.palette[t].main,
          backgroundColor: e?.palette[t].main,
          color: e?.palette[t].contrastText
        },
        ".k-calendar-td:focus .k-calendar-cell-inner,\n          .k-calendar-td:focus .k-link,\n          .k-calendar-td.k-focus .k-calendar-cell-inner,\n          .k-calendar-td.k-focus .k-link,\n          .k-calendar-td.k-state-focus .k-calendar-cell-inner,\n          .k-calendar-td.k-state-focus .k-link,\n          .k-calendar-td.k-state-focused .k-calendar-cell-inner,\n          .k-calendar-td.k-state-focused .k-link": {
          boxShadow: "none"
        }
      },
      "&.k-editor, .k-editor": {
        ".k-button.k-selected": {
          borderColor: e?.palette[t].main,
          backgroundColor: e?.palette[t].main,
          color: e?.palette[t].contrastText,
          "&:hover, .k-hover": {
            borderColor: e?.palette[t].dark,
            backgroundColor: e?.palette[t].dark,
            boxShadow: e?.shadows[4]
          }
        }
      }
    })),
    [`&.${Ko}`]: {
      ".k-list-filter>.k-input-outline:focus-within": {
        borderColor: e?.palette.error.main
      }
    },
    ".k-chip": {
      fontFamily: e?.typography.fontFamily
    },
    [`&.${Uu.empty}`]: {
      ".k-chip-list": { display: "none" }
    },
    ".k-multiselect": {
      "&.k-input": {
        ".k-input-values": {
          display: "flex",
          flexWrap: "wrap",
          ".k-chip-list": {
            display: "contents"
          },
          ".k-input-inner": {
            padding: e?.spacing(1.3, 2.75),
            minWidth: "4.8rem"
          },
          ".k-input-inner::placeholder": {
            color: e?.palette.text.primary,
            fontFamily: e?.typography.fontFamily,
            opacity: tk
          }
        }
      }
    },
    [`&.${$s.global}`]: {
      ".k-grid": {
        border: "none",
        borderBottomLeftRadius: e?.spacing(3),
        borderBottomRightRadius: e?.spacing(3),
        // Sorted column header and cells
        ".k-table-th.k-sorted, .col.k-sorted, .k-table-td.k-sorted": {
          backgroundColor: ze(e?.palette.secondary.main || "#000", 0.1)
        },
        // Selected rows (override sorted background for selected rows)
        ".k-table-row.k-selected > td, .k-table-row.k-selected > .k-table-td": {
          backgroundColor: e?.palette.background.grouping
        }
      },
      ".k-grid-table, .k-grid-header-table": {
        width: "100% !important"
      },
      // NOTE: This is needed to allow horizontal scrolling on touch devices
      // When enabling selection for the Grid using the selectable prop, scrolling does not work using mobile. This is because screen scrolling will trigger the selection. We are using checkbox selection, so this should not be an issue.
      // Using !important to override Kendo style that is applied to the element as inline style.
      ".k-grid-table": {
        touchAction: "auto !important"
      },
      ".k-grid-header": {
        backgroundColor: "unset",
        borderTopWidth: "1px",
        borderColor: e?.palette.border.base,
        table: {
          minHeight: "5.2rem",
          thead: {
            th: {
              padding: e?.spacing(2, 6, 2, 4),
              verticalAlign: "middle",
              // position: 'relative',
              // Drag handle icon - base styles
              ".drag-handle-icon": {
                position: "absolute",
                left: e?.spacing(1),
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
                pointerEvents: "auto",
                cursor: "pointer",
                fontSize: e?.typography.tabHeader.font,
                color: e?.palette.text.secondary,
                zIndex: 1
              },
              // Drag handle icon - show on hover for reorderable columns
              "&:hover .drag-handle-icon": {
                opacity: 1
              },
              // Change icon color to primary when hovering directly on the icon
              ".drag-handle-icon:hover": {
                color: `${e?.palette.primary.main} !important`
              },
              // Hide drag handle for sticky columns
              "&.k-grid-header-sticky .drag-handle-icon": {
                display: "none"
              },
              ".k-grid-column-menu": {
                position: "static",
                width: "auto",
                padding: 0,
                fontSize: "1.6rem"
              },
              // INFO: Changes the three-dot icon in DataGrid to a filter icon
              ".k-i-more-vertical": {
                fontFamily: Vm,
                fontSize: e?.typography.fontSize,
                fontWeight: e?.typography.fontWeightRegular
              },
              [`.${$s.columnActive} .k-i-more-vertical`]: {
                fontWeight: e?.typography.fontWeightBold,
                color: e?.palette.primary.main
              },
              ".k-i-more-vertical::before": {
                content: '"\\f0b0"'
              },
              // Column resizer hover effect (only for non-sticky columns)
              "&:not(.k-grid-header-sticky)": {
                ".k-column-resizer": {
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out, background-color 0.2s ease-in-out",
                  width: "3px",
                  "&:hover": {
                    opacity: 1,
                    backgroundColor: e?.palette.primary.dark
                  }
                }
              }
            }
          }
        },
        // When any resizer is being dragged, disable hover on all non-sticky header cells
        "&:has(.k-column-resizer:active) th:not(.k-grid-header-sticky):hover .k-column-resizer:not(:active)": {
          opacity: nl
        }
      },
      // Keep resizer visible with primary.dark color when actively being resized
      ".k-column-resizer:active": {
        opacity: "1 !important",
        backgroundColor: `${e?.palette.primary.dark} !important`,
        zIndex: 1e3
      },
      // When column dragging is active (not resizing), hide resizer and drag handle on ALL headers
      // Exclude resizing case by checking that no resizer is active
      ".k-grid-header:has(th:active):not(:has(.k-column-resizer:active)) th .k-column-resizer, .k-grid-header:has(th:active):not(:has(.k-column-resizer:active)) th .drag-handle-icon": {
        opacity: nl
      },
      // Prevent hover effects on other columns during drag (not during resize)
      ".k-grid-header:has(th:active):not(:has(.k-column-resizer:active)) th:hover .drag-handle-icon, .k-grid-header:has(th:active):not(:has(.k-column-resizer:active)) th:hover .k-column-resizer": {
        opacity: nl
      },
      // Keep drag handle icon visible with primary.dark color ONLY on the actively dragged column (not during resize)
      ".k-grid-header:has(th:active):not(:has(.k-column-resizer:active)) th:active .drag-handle-icon": {
        opacity: "1 !important",
        color: e?.palette.primary.dark
      },
      ".k-grid-container": {
        ".k-grid-content": {
          border: "none",
          tr: {
            td: {
              border: "none",
              borderBottom: "1px solid",
              borderColor: e?.palette.border.base,
              padding: e?.spacing(2, 4)
            }
          }
        }
      },
      // Add shadow to actions column (last sticky column) when there's horizontal scroll
      // The shadow is only shown when there's scroll AND we're not at the scroll end
      // Using gradient pseudo-element on each sticky cell to create left-only shadow effect
      '&[data-has-horizontal-scroll="true"]:not([data-is-at-scroll-end="true"])': {
        ".k-grid": {
          // Target the actions column (last sticky column on the right)
          // Shadow appears on the left edge to indicate scrollable content to the left
          ".k-grid-header-sticky:last-child, .k-grid-content-sticky:last-child": {
            // position: 'relative',
            overflow: "visible",
            "&::before": {
              content: '""',
              position: "absolute",
              left: "-6px",
              // Position outside the cell
              top: 0,
              bottom: 0,
              pointerEvents: "none",
              zIndex: 10,
              width: "6px",
              background: `linear-gradient(to right, transparent, ${ze(e?.palette.common.black || "#000", 0.15)})`
            }
          },
          ".k-grid-header-sticky:last-child": {
            borderInlineStartColor: "transparent",
            overflow: "visible",
            "&::before": {
              left: "-7px",
              // 1px diff because of the border
              width: "6px"
            }
          }
        }
      },
      ".k-grid-norecords": {
        ".k-grid-norecords-template": {
          width: "100%",
          border: 0,
          borderBottom: "1px solid",
          borderColor: e?.palette.border.base,
          padding: e?.spacing(0, 4),
          height: "5rem"
        }
      },
      ".k-master-row:hover .k-grid-content-sticky, .k-master-row.k-table-alt-row .k-grid-content-sticky": {
        backgroundColor: e?.palette.background.grouping
      },
      ".k-table-alt-row": {
        backgroundColor: e?.palette.background.grouping
      },
      ".k-grid tbody>tr:not(.k-detail-row):hover, .k-grid .k-table-tbody>.k-table-row:not(.k-detail-row).k-hover": {
        backgroundColor: Cn(e?.palette.background.grouping || "#F7F7F7", 0.04)
      },
      ".k-grid tbody>tr:not(.k-detail-row):hover .k-grid-content-sticky, .k-grid .k-table-tbody>.k-table-row:not(.k-detail-row).k-hover .k-grid-content-sticky": {
        backgroundColor: Cn(e?.palette.background.grouping || "#F7F7F7", 0.04)
      },
      ".k-master-row.k-selected.k-table-alt-row td.k-grid-content-sticky::before, .k-master-row.k-table-row.k-selected td.k-grid-content-sticky::before": {
        backgroundColor: e?.palette.background.grouping
      },
      [`.${$s.selectCell}`]: {
        textOverflow: "initial",
        "&.k-grid-header-sticky, .k-grid-content-sticky": {
          borderLeftColor: e?.palette.border.base,
          borderRightColor: e?.palette.border.base
        },
        ".k-checkbox": {
          width: "1.4rem",
          height: "1.4rem",
          borderRadius: 2
        },
        ".k-checkbox:checked": {
          backgroundColor: e?.palette.background.paper,
          border: "none"
        },
        ".k-checkbox:checked::before": {
          color: e?.palette.primary.main,
          maskSize: "cover",
          maskPosition: "center",
          maskImage: `url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm-204.7-98.1l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L184 302.7l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.3 16.4 6.3 22.6 0z"/></svg>')`
        }
      }
    }
  },
  ".k-clear-value .k-icon, .k-button-md.k-icon-button .k-button-icon.k-svg-icon > svg, .k-button-md.k-icon-button .k-button-icon.k-icon-md > svg": {
    width: "1.4rem",
    height: "1.4rem"
  },
  ".k-popup.k-grid-columnmenu-popup": {
    maxWidth: "21rem",
    ".k-columnmenu-item": {
      display: "none"
    },
    ".k-columnmenu-item-content": {
      padding: e?.spacing(1, 2),
      label: {
        fontSize: "1.2rem",
        fontWeight: e?.typography.fontWeightBold,
        color: e?.palette.text.primary,
        "&.Mui-focused": {
          color: e?.palette.primary.main
        }
      },
      ".MuiInputBase-input": {
        fontSize: e?.typography.fontSize
      },
      ".k-actions": {
        flexDirection: "row-reverse",
        ".k-button-solid-base": {
          backgroundColor: e?.palette.background.paper,
          borderColor: e?.palette.border.base,
          "&:hover": {
            borderColor: e?.palette.secondary.main,
            backgroundColor: ze(e?.palette.secondary.main || "#fff", 0.04)
          }
        },
        ".k-button-solid-primary": {
          borderColor: e?.palette.primary.main,
          backgroundColor: e?.palette.primary.main,
          "&:hover": {
            backgroundColor: e?.palette.primary.dark
          }
        }
      }
    }
  }
}), x1 = (e) => {
  var t;
  return {
    styleOverrides: {
      html: {
        height: "100%",
        fontSize: "62.5%"
      },
      "html, :host": {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      },
      ":host": {
        // styles applied to the body element from mui under the hood
        // apply them on the shadow-dom host element if in shadow-dom
        boxSizing: "border-box",
        backgroundColor: e?.palette.background.default,
        color: e?.palette.text.primary,
        // Since Kendo does not support Shadow DOM we need to override
        // some variables on-demand to avoid issues in Shadow DOM.
        "--kendo-spacing-4": "1rem"
      },
      "#root": {
        height: "100%"
      },
      "body, :host": {
        height: "100%",
        margin: 0,
        fontSize: "1.4rem",
        fontFamily: Yt.fontFamily,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: 0,
        textTransform: "transform-initial"
      },
      [`.${xt.container}`]: {
        backgroundColor: e?.palette.common.white,
        borderRadius: Number(e?.shape.borderRadius ?? 4) * 2,
        ".MuiAlert-root": {
          // Should match the border radius of the container
          borderRadius: Number(e?.shape.borderRadius ?? 4) * 2
        },
        [`&.${xt.static.container}`]: {
          borderRadius: Number(e?.shape.borderRadius ?? 4) * 1.5,
          ".MuiAlert-root": {
            // Should match the border radius of the container
            borderRadius: Number(e?.shape.borderRadius ?? 4) * 1.5
          }
        }
      },
      [`.${Jm}`]: {
        "&::-webkit-scrollbar": {
          width: "0.4rem",
          height: "0.4rem"
        },
        "&::-webkit-scrollbar-track": {
          background: "inherit"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "currentColor",
          borderRadius: "0.6rem",
          border: "1px solid currentColor"
        },
        // Firefox
        scrollbarWidth: "thin",
        scrollbarColor: "currentColor transparent"
      },
      [`.${_u.container}`]: {
        zIndex: (t = e?.zIndex) == null ? void 0 : t.snackbar
      },
      ...v1(e)
    }
  };
}, b1 = (e) => {
  if (!e)
    return {};
  const t = {
    [e.breakpoints.up("xs")]: {
      // 0 - 599
      minWidth: "30rem",
      maxWidth: "40rem"
    }
  }, r = {
    [e.breakpoints.up("sm")]: {
      // 600 - 959
      maxWidth: "60rem"
    }
  }, i = {
    [e.breakpoints.up("md")]: {
      // 960 - 1279
      maxWidth: "72rem"
    }
  }, n = {
    [e.breakpoints.up("lg")]: {
      // 1280 - X
      maxWidth: "90rem"
    }
  };
  return {
    styleOverrides: {
      paperWidthDialogXs: {
        ...t
      },
      paperWidthDialogSm: {
        ...t,
        ...r
      },
      paperWidthDialogMd: {
        ...t,
        ...r,
        ...i
      },
      paperWidthDialogLg: {
        ...t,
        ...r,
        ...i,
        ...n
      }
    }
  };
}, po = (e, t) => ({
  transition: e?.transitions.create("width", {
    easing: e?.transitions.easing.easeIn,
    duration: e?.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  width: t
}), ho = (e, t, r) => ({
  transition: e?.transitions.create("height", {
    easing: e?.transitions.easing.easeOut,
    duration: e?.transitions.duration.leavingScreen
  }),
  overflowY: "hidden",
  height: r ? `calc(${t} + ${e?.mixins.toolbar.maxHeight})` : t
}), y1 = (e, t) => {
  var r, i;
  return e === "bottom" ? 0 : (i = (r = t?.mixins) == null ? void 0 : r.toolbar) == null ? void 0 : i.maxHeight;
}, w1 = (e) => ({
  styleOverrides: {
    root: ({
      ownerState: { anchor: t, closedwidth: r, openwidth: i, open: n, variant: a, withtoolbar: o }
    }) => {
      var l, d, u, p;
      const h = a === "persistent" ? 0 : r || ((d = (l = e?.defaultWidth) == null ? void 0 : l.drawer) == null ? void 0 : d.closed), m = i || ((p = (u = e?.defaultWidth) == null ? void 0 : u.drawer) == null ? void 0 : p.open), f = t === "left" || t === "right";
      return {
        ...n && f && {
          ...po(e, m),
          "& .MuiDrawer-paper": po(e, m)
        },
        ...!n && f && {
          ...po(e, h),
          "& .MuiDrawer-paper": po(e, h)
        },
        ...n && !f && {
          ...ho(e, m),
          "& .MuiDrawer-paper": ho(
            e,
            m,
            t === "top" && o === "true"
          )
        },
        ...!n && !f && {
          ...ho(e, h),
          "& .MuiDrawer-paper": ho(
            e,
            h,
            t === "top" && o === "true"
          )
        }
      };
    },
    paper: ({ ownerState: { anchor: t, withtoolbar: r } }) => ({
      paddingTop: r === "true" ? y1(t, e) : void 0
    })
  }
}), $1 = (e) => {
  const t = {
    columnGap: e?.spacing(2),
    "&>.MuiFormHelperText-root": {
      gridColumnStart: 2
    }
  }, r = {
    display: "grid",
    alignItems: "baseline",
    justifyItems: "baseline"
  };
  return {
    defaultProps: {
      fullWidth: !1,
      responsive: "false"
    },
    styleOverrides: {
      root: ({ ownerState: i }) => {
        const { offset: n, color: a = "primary", error: o, responsive: l } = i, d = l === "true", u = Au(d, n), p = o ? "error" : a;
        return {
          [`&.${zu}`]: d ? {
            // Responsive Toggle styles
            ...e && {
              [e.breakpoints.up("xs")]: {
                ...t,
                "&>.MuiInputLabel-root": {
                  maxWidth: "unset"
                }
              },
              [e.breakpoints.up("sm")]: {
                ...r,
                "&>.MuiInputLabel-root": {
                  textAlign: "end"
                },
                gridTemplateColumns: `${u} auto`
              },
              [e.breakpoints.up("md")]: {
                gridTemplateColumns: `${u} calc(80% - ${u})`
              }
            },
            "&>.MuiFormLabel-root": {
              gridColumnStart: 2
            },
            "&>.MuiFormGroup-root": {
              gridColumnStart: 2
            },
            "&>.MuiFormControlLabel-root": {
              gridColumnStart: 2,
              flexDirection: "unset"
            }
          } : {
            // Non responsive toggle styles
            ...I.isEmpty(n) ? {
              alignItems: "flex-start",
              "&>.MuiFormControlLabel-root": {
                flexDirection: "unset"
              }
            } : {
              width: "auto",
              display: "grid",
              justifyItems: "baseline",
              gridTemplateColumns: `${n} max-content`,
              columnGap: e?.spacing(2),
              "&.MuiFormControl-fullWidth": {
                gridTemplateColumns: `${n} auto`
              },
              "&>.MuiFormLabel-root": {
                gridColumnStart: 2
              },
              "&>.MuiFormGroup-root": {
                gridColumnStart: 2
              },
              "&>.MuiFormControlLabel-root": {
                gridColumnStart: 2,
                flexDirection: "unset"
              },
              "&>.MuiFormHelperText-root": {
                gridColumnStart: 2
              }
            }
          },
          [`&.${Xt.top}`]: {
            [`& .${Fm.root}`]: {
              marginBottom: 4
            }
          },
          [`&.${Bu}, &.${Ym}, &.${ju}, &.${Km}, &.${Xm}, &.${Hu}, &.${Zm}, &.${Uu.global}`]: {
            ".k-dropdownlist, .k-picker, .k-datepicker, .k-datetimepicker, .k-multiselect, .k-combobox": {
              "&.k-focus, :focus, :focus-within": {
                boxShadow: "none",
                borderColor: e?.palette[p].main
              },
              ".k-icon-button": {
                padding: e?.spacing(1, 2),
                margin: "-1px"
              }
            },
            ".k-combobox": {
              ".k-icon-button": {
                borderColor: "transparent"
              }
            },
            ...d ? {
              // Responsive styles
              ...e && {
                [e.breakpoints.up("xs")]: {
                  [`&.${Xt.start}`]: {
                    ...t,
                    "&>.MuiFormLabel-root": {
                      maxWidth: "unset",
                      width: "inherit",
                      textAlign: "start"
                    }
                  }
                },
                [e.breakpoints.up("sm")]: {
                  [`&.${Xt.start}`]: {
                    ...r,
                    "&>.MuiFormLabel-root": {
                      textAlign: "end"
                    },
                    gridTemplateColumns: `${u} auto`
                  }
                },
                [e.breakpoints.up("md")]: {
                  [`&.${Xt.start}`]: {
                    gridTemplateColumns: `${u} calc(80% - ${u})`
                  }
                }
              }
            } : {
              // Non Responsive styles
              width: "fit-content",
              maxWidth: "100%",
              "&.MuiFormControl-fullWidth": {
                width: "auto"
              },
              [`&.${Xt.start}`]: {
                display: "grid",
                width: "auto",
                gridTemplateColumns: `${u} minmax(auto, max-content)`,
                alignItems: "baseline",
                columnGap: e?.spacing(2),
                "&>.MuiFormLabel-root": {
                  textAlign: "end",
                  maxWidth: "unset",
                  width: "inherit"
                },
                "&>.MuiFormHelperText-root": {
                  gridColumnStart: 2
                },
                "&.MuiFormControl-fullWidth": {
                  gridTemplateColumns: `${u} auto`
                }
              },
              [`&.${Xt.top}`]: {
                "&.MuiFormControl-fullWidth": {
                  width: "100%"
                }
              }
            }
          }
        };
      }
    }
  };
}, k1 = (e, t, r = Yt.htmlFontSize) => {
  const i = {
    htmlFontSize: r,
    fontFamily: Yt.fontFamily,
    fontSize: Yt.fontSize,
    fontWeightLight: rt.light,
    fontWeightRegular: rt.normal,
    fontWeightMedium: rt.semiBold,
    fontWeightBold: rt.bold,
    h1: {
      fontWeight: rt.semiBold,
      fontSize: "2.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.02rem",
      color: e.palette.text.secondary,
      textTransform: vt.CAPITALIZE,
      [e.breakpoints.down("xs")]: {
        fontSize: "2.2rem"
      }
    },
    h2: {
      fontWeight: rt.medium,
      fontSize: "2.2rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      color: e.palette.text.primary,
      textTransform: vt.INITIAL
    },
    h3: {
      fontWeight: rt.medium,
      fontSize: "1.8rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      color: e.palette.text.primary,
      textTransform: vt.INITIAL
    },
    h4: {
      fontWeight: rt.semiBold,
      fontSize: "1.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.01rem",
      color: e.palette.text.secondary,
      textTransform: vt.INITIAL
    },
    tabHeader: {
      fontWeight: rt.bold,
      fontSize: "1.6rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.01rem",
      color: e.palette.text.primary,
      textTransform: vt.INITIAL
    },
    widgetTitle: {
      fontWeight: rt.medium,
      fontSize: "1.2rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.01rem",
      color: e.palette.text.faded,
      textTransform: vt.UPPERCASE
    },
    groupTitle: {
      fontWeight: rt.semiBold,
      fontSize: "1.6rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.01rem",
      color: e.palette.text.secondary,
      textTransform: vt.CAPITALIZE
    },
    body: {
      fontWeight: rt.normal,
      fontSize: "1.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      color: e.palette.text.primary,
      textTransform: vt.INITIAL
    },
    bodyFaded: {
      fontWeight: rt.normal,
      fontSize: "1.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      color: e.palette.text.faded,
      textTransform: vt.INITIAL
    },
    button: {
      fontWeight: rt.semiBold,
      fontSize: "1.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      textTransform: vt.CAPITALIZE
    },
    caption: {
      fontWeight: rt.medium,
      fontSize: "1.2rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: "0.01rem",
      color: e.palette.text.faded,
      textTransform: vt.INITIAL
    },
    alert: {
      fontWeight: rt.semiBold,
      fontSize: "1.4rem",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      color: e.palette.primary.main,
      textTransform: vt.INITIAL
    },
    tagLabel: {
      fontWeight: rt.semiBold,
      fontSize: "inherit",
      lineHeight: Yt.lineHeight,
      letterSpacing: 0,
      textTransform: vt.INITIAL
    }
  };
  return wa(i, t);
}, C1 = (e, t) => {
  const r = I.get(
    e,
    `typography.${fi.BODY}.fontSize`,
    Yt.fontSize
  );
  return I.get(e, `typography.${t}.fontSize`, r);
}, S1 = (e) => ({
  styleOverrides: {
    // eslint-disable-next-line
    root: (t) => {
      const r = I.get(t, "ownerState.slotProps.typography.fontSize"), i = I.get(t, "ownerState.slotProps.typography.variant"), n = r || C1(e, i);
      return {
        margin: 0,
        "& .MuiRadio-root": {
          fontSize: n
        },
        "& .MuiCheckbox-root": {
          fontSize: n
        }
      };
    }
  }
}), E1 = () => ({
  styleOverrides: {
    root: {
      marginLeft: 0
    }
  }
}), D1 = (e) => ({
  styleOverrides: {
    root: {
      width: "auto",
      height: "auto"
    },
    colorNeutral: {
      color: e?.palette.neutral.main
    },
    fontSizeSmall: {
      fontSize: "1.2rem"
    },
    fontSizeMedium: {
      fontSize: "1.4rem"
    },
    fontSizeLarge: {
      fontSize: "2rem"
    }
  }
}), M1 = (e) => ({
  styleOverrides: {
    root: {
      // TODO: expose in a theme variable if needed
      height: "3.4rem",
      maxHeight: "3.4rem",
      "&>*": {
        maxHeight: "inherit"
      }
    },
    positionStart: {
      "&>*:nth-child(2)": {
        borderTopLeftRadius: e?.shape.borderRadius,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e?.shape.borderRadius,
        borderBottomRightRadius: 0
      }
    },
    positionEnd: {
      "&>*:last-child": {
        borderTopLeftRadius: 0,
        borderTopRightRadius: e?.shape.borderRadius,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: e?.shape.borderRadius
      }
    }
  }
}), I1 = () => ({
  styleOverrides: {
    input: {
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &[type=number]": {
        WebkitAppearance: "none",
        margin: 0,
        MozAppearance: "textfield"
      }
    }
  }
}), T1 = () => ({
  defaultProps: {
    shrink: !0,
    disableAnimation: !0
  },
  styleOverrides: {
    root: ({ ownerState: { offset: e = "max-content" } }) => ({
      position: "relative",
      transform: "unset",
      [`&.${uc}`]: {
        textAlign: "end",
        width: e,
        maxWidth: e
      }
    })
  }
}), R1 = (e) => ({
  defaultProps: { container: e?.popupContainer || void 0 }
}), O1 = (e) => ({
  styleOverrides: {
    root: {
      backgroundColor: e?.palette.background.paper
    },
    input: {
      padding: e?.spacing(1.75, 2.75)
    },
    notchedOutline: {
      top: 0
    }
  }
}), N1 = (e) => ({
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: e?.palette.background.grouping,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: e?.palette.border.base
          }
        }
      ]
    }
  }
}), F1 = (e) => ({
  defaultProps: { container: e?.popupContainer || void 0 }
}), L1 = (e) => ({
  defaultProps: { container: e?.popupContainer || void 0 }
}), P1 = (e) => ({
  styleOverrides: {
    root: {
      [`&.${ks.global}`]: {
        width: "100%",
        minHeight: "100%",
        [`&.${nd.scrollContent}`]: {
          height: "100%"
        },
        // Responsive offset
        ...e && {
          [e.breakpoints.up("xs")]: {
            padding: e?.spacing(
              0,
              e.spacingVariants.M,
              e.spacingVariants.M,
              e.spacingVariants.M - e.spacingVariants.XS
            )
          },
          [e.breakpoints.up("md")]: {
            padding: e?.spacing(
              0,
              e.spacingVariants.L,
              e.spacingVariants.M,
              e.spacingVariants.L - e.spacingVariants.XS
            )
          },
          [e.breakpoints.up("lg")]: {
            padding: e?.spacing(
              0,
              e.spacingVariants.XL,
              e.spacingVariants.M,
              e.spacingVariants.XL - e.spacingVariants.XS
            )
          }
        }
      },
      [`&.${ks.header}`]: {
        ...e && {
          padding: e.spacing(e.spacingVariants.L, 0, e.spacingVariants.M)
        }
      },
      [`& .${ks.content}`]: {
        flexGrow: 1,
        [`&.${nd.scrollContent}`]: {
          overflowY: "auto",
          overflowX: "hidden",
          padding: 4,
          margin: -4
        }
      }
    }
  }
}), A1 = "2rem", z1 = (e) => ({
  defaultProps: {
    color: "primary",
    size: "medium"
  },
  styleOverrides: {
    root: {
      width: "5.5rem",
      height: "4.2rem",
      padding: e?.spacing(2.75)
    },
    thumb: {
      boxShadow: "none",
      width: "1.5rem",
      height: "1.5rem"
    },
    switchBase: {
      padding: e?.spacing(3.35),
      "&.Mui-checked, &.Mui-disabled, &.Mui-checked.Mui-disabled": {
        color: e?.palette.background.paper
      },
      "&.Mui-disabled, &.Mui-checked.Mui-disabled": {
        "& + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-checked": {
        transform: "translateX(1.3rem)"
      }
    },
    track: {
      borderRadius: `calc(${A1} / 2)`,
      backgroundColor: e?.palette.secondary.dark,
      ".Mui-checked.Mui-checked + &": {
        backgroundColor: e?.palette.primary.light
      },
      "&, .Mui-checked.Mui-checked:not(.Mui-disabled) + &": {
        opacity: 1
      }
    }
  }
}), H1 = (e) => {
  const t = {
    columnGap: e?.spacing(2),
    "&>.MuiFormHelperText-root": {
      gridColumnStart: 2
    }
  }, r = {
    display: "grid",
    alignItems: "baseline"
  };
  return {
    defaultProps: {
      fullWidth: !1,
      responsive: "false"
    },
    styleOverrides: {
      root: ({
        ownerState: { offset: i, responsive: n, slotProps: a }
      }) => {
        const o = n === "true", l = Au(o, i), d = a != null && a.input && typeof a.input == "object" ? a.input : void 0, u = d?.multiline;
        return {
          [`&.${mo}`]: {
            "& .MuiInputBase-root": {
              padding: 0
            },
            "& .MuiInputBase-input": {
              textAlign: "end"
            },
            "& .MuiInputAdornment-root": {
              margin: 0
            }
          },
          "& legend": {
            display: "none"
          },
          "&>.MuiFormHelperText-root": {
            minHeight: ik,
            overflow: "hidden"
          },
          ...u && {
            "& .MuiInputBase-root": {
              padding: 0
            }
          },
          ...o ? {
            // Responsive styles
            ...e && {
              [e.breakpoints.up("xs")]: {
                [`&.${Xt.start}`]: {
                  ...t,
                  "&>.MuiInputLabel-root": {
                    maxWidth: "unset",
                    textAlign: "start"
                  },
                  [`&.${mo} input`]: {
                    width: "100%"
                  }
                }
              },
              [e.breakpoints.up("sm")]: {
                [`&.${Xt.start}`]: {
                  ...r,
                  "&>.MuiInputLabel-root": {
                    textAlign: "end"
                  },
                  gridTemplateColumns: `${l} auto`
                }
              },
              [e.breakpoints.up("md")]: {
                [`&.${Xt.start}`]: {
                  gridTemplateColumns: `${l} calc(80% - ${l})`
                }
              }
            }
          } : {
            // Non Responsive styles
            [`&.${Xt.start}`]: {
              display: "grid",
              width: "auto",
              gridTemplateColumns: `${l} max-content`,
              alignItems: "baseline",
              columnGap: e?.spacing(2),
              "&>.MuiInputLabel-root": {
                textAlign: "end",
                maxWidth: "unset"
              },
              "&>.MuiFormHelperText-root": {
                gridColumnStart: 2
              },
              "&.MuiFormControl-fullWidth": {
                gridTemplateColumns: `${l} auto`,
                [`&.${mo}`]: {
                  gridTemplateColumns: `${l} max-content`
                }
              }
            },
            [`&.${Xt.top}`]: {
              "&.MuiFormControl-fullWidth": {
                width: "100%"
              }
            }
          }
        };
      }
    }
  };
}, B1 = (e) => ({
  defaultProps: {
    color: "primary"
  },
  styleOverrides: {
    root: {
      "&:not(.Mui-selected):not(:hover)": {
        backgroundColor: e?.palette.background.paper
      }
    },
    sizeSmall: {
      padding: e?.spacing(0.75, 1.75)
    },
    sizeMedium: {
      padding: e?.spacing(1.75, 2.75)
    },
    sizeLarge: {
      padding: e?.spacing(2.75, 3.75)
    }
  }
}), V1 = () => ({
  defaultProps: {
    color: "primary"
  },
  styleOverrides: {
    grouped: {
      ":not(:first-of-type)": {
        marginLeft: "unset"
      }
    }
  }
}), j1 = (e) => ({
  defaultProps: {
    variantMapping: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      tabHeader: "h4",
      groupTitle: "h5",
      widgetTitle: "h6",
      body: "span",
      bodyFaded: "span",
      caption: "span",
      alert: "span"
    }
  },
  styleOverrides: {
    root: {
      [`&.${xt.inline.main}`]: {
        ".MuiIcon-root": {
          lineHeight: "inherit",
          verticalAlign: "bottom",
          marginInlineEnd: e?.spacing(2)
        }
      },
      [`&.${id.global}`]: {
        position: "absolute",
        bottom: e?.spacing(-7),
        left: "50%",
        transform: "translateX(-50%)",
        padding: e?.spacing(1.2, 3),
        borderRadius: e?.borderRadiusVariants.XL,
        whiteSpace: "nowrap",
        color: e?.palette.info.contrastText,
        backgroundColor: e?.palette.info.dark,
        pointerEvents: "none",
        [`&.${id.shadow}`]: {
          boxShadow: e?.shadows[8]
        }
      }
    }
  }
}), W1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MuiAccordion: t1,
  MuiAccordionDetails: r1,
  MuiAccordionSummary: i1,
  MuiAlert: n1,
  MuiAvatar: a1,
  MuiButton: o1,
  MuiButtonGroup: s1,
  MuiCard: l1,
  MuiChip: c1,
  MuiContainer: d1,
  MuiCssBaseline: x1,
  MuiDialog: b1,
  MuiDrawer: w1,
  MuiFormControl: $1,
  MuiFormControlLabel: S1,
  MuiFormHelperText: E1,
  MuiIcon: D1,
  MuiInputAdornment: M1,
  MuiInputBase: I1,
  MuiInputLabel: T1,
  MuiModal: R1,
  MuiOutlinedInput: O1,
  MuiPaper: N1,
  MuiPopover: F1,
  MuiPopper: L1,
  MuiStack: P1,
  MuiSwitch: z1,
  MuiTextField: H1,
  MuiToggleButton: B1,
  MuiToggleButtonGroup: V1,
  MuiTypography: j1
}, Symbol.toStringTag, { value: "Module" })), Cu = (e, t) => I.chain(t).mapValues((r) => {
  if (typeof r == "function")
    return r(e);
}).omitBy(I.isEmpty).value(), U1 = (e, t = {}) => {
  const r = Cu(e, W1), i = Cu(e, t);
  return wa(r, i);
};
var _1 = Object.defineProperty, q1 = (e, t, r) => t in e ? _1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Su = (e, t, r) => q1(e, typeof t != "symbol" ? t + "" : t, r);
const Y1 = {
  background: "#F0F4FE",
  navigation: "#5D72A7",
  primary: "#053FD1"
}, ac = class ve {
  static validateHex(t) {
    let r = String(t).replace(/[^0-9a-f]/gi, "");
    return r.length < 6 && (r = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), r;
  }
  static isColorDark(t) {
    return Jc(t) < 0.5;
  }
  static getThemeMode(t) {
    return Jc(t) < 0.5 ? "dark" : "light";
  }
  static getContrastRatio(t, r) {
    return Lm(t, r);
  }
  /**
   * @deprecated
   * use getLuminance instead
   */
  static getBrightness(t) {
    const r = ve.hexToRgb(ve.validateHex(t));
    return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
  }
  static colorLuminance(t, r = 0) {
    const i = ve.hexToRgb(ve.validateHex(t));
    let n = "#";
    return I.each(i, (a) => {
      const o = Math.round(Math.min(Math.max(5, a + a * r), 255)).toString(
        16
      );
      n += `00${o}`.substring(o.length);
    }), n;
  }
  static hexToRgb(t = "#ffffff") {
    let r = t.replace("#", "");
    return r.length === 3 && (r += r), I.chain(["r", "g", "b"]).map((i, n) => [
      i,
      parseInt(r.substring(n * 2, n * 2 + 2), 16)
    ]).fromPairs().value();
  }
  /**
   * @deprecated use isColorDark instead
   */
  static isDark(t) {
    return ve.getBrightness(t) < 186;
  }
  static hexToHsl(t) {
    let r = 0, i = 0, n = 0;
    t.length === 4 ? (r = +`0x${t[1]}${t[1]}`, i = +`0x${t[2]}${t[2]}`, n = +`0x${t[3]}${t[3]}`) : t.length === 7 && (r = +`0x${t[1]}${t[2]}`, i = +`0x${t[3]}${t[4]}`, n = +`0x${t[5]}${t[6]}`), r /= 255, i /= 255, n /= 255;
    const a = Math.min(r, i, n), o = Math.max(r, i, n), l = o - a;
    let d, u, p;
    return l === 0 ? d = 0 : o === r ? d = (i - n) / l % 6 : o === i ? d = (n - r) / l + 2 : d = (r - i) / l + 4, d = Math.round(d * 60), d < 0 && (d += 360), p = (o + a) / 2, u = l === 0 ? 0 : l / (1 - Math.abs(2 * p - 1)), u = +(u * 100).toFixed(1), p = +(p * 100).toFixed(1), {
      hsl: `hsl(${d}, ${u}%, ${p}%)`,
      h: d,
      s: u,
      l: p
    };
  }
  static hslToHex(t, r, i) {
    const n = t, a = r / 100, o = i / 100, l = (1 - Math.abs(2 * o - 1)) * a, d = l * (1 - Math.abs(n / 60 % 2 - 1)), u = o - l / 2;
    let p = 0, h = 0, m = 0;
    n >= 0 && n < 60 ? (p = l, h = d, m = 0) : n >= 60 && n < 120 ? (p = d, h = l, m = 0) : n >= 120 && n < 180 ? (p = 0, h = l, m = d) : n >= 180 && n < 240 ? (p = 0, h = d, m = l) : n >= 240 && n < 300 ? (p = d, h = 0, m = l) : n >= 300 && n < 360 && (p = l, h = 0, m = d);
    let f = Math.round((p + u) * 255).toString(16), b = Math.round((h + u) * 255).toString(16), x = Math.round((m + u) * 255).toString(16);
    return f.length === 1 && (f = `0${p}`), b.length === 1 && (b = `0${h}`), x.length === 1 && (x = `0${m}`), `#${f}${b}${x}`;
  }
  static generateMaterialPalette(t, r) {
    const i = ve.colorLuminance(t, -0.2), n = ve.colorLuminance(t, 0.4), a = I.map(this.colorKeys, (d, u) => d !== "500" ? [d, ve.colorLuminance(t, 0.5 - u * 0.1)] : [d, t]), o = I.fromPairs(a);
    o.A100 = o[50], o.A200 = r ? t : o[100], o.A400 = o[600], o.A700 = o[700], o[300] = ve.isDark(t) ? i : n;
    const l = I.filter(I.keys(o), (d) => !ve.isDark(o[d]));
    return o.contrastDefaultColor = "light", o.contrastDarkColors = l, o.main = o[500], o.light = o[300], o.dark = o[700], o;
  }
  static generateCustomPalette(t, r) {
    const {
      paletteNeutralMediumS: i,
      paletteNeutralMediumL: n,
      paletteNeutralDarkS: a,
      paletteNeutralDarkL: o,
      paletteSecondaryLightS: l,
      paletteSecondaryLightL: d,
      paletteSecondaryMediumS: u,
      paletteSecondaryMediumL: p,
      paletteSecondaryDarkS: h,
      paletteSecondaryDarkL: m,
      paletteShadedLightS: f,
      paletteShadedLightL: b,
      paletteShadedMediumS: x,
      paletteShadedMediumL: w,
      paletteShadedDarkS: y,
      paletteShadedDarkL: E,
      colorBaseLight: C
    } = r, { h: R } = ve.hexToHsl(t), N = ve.hslToHex(
      R,
      parseFloat(i),
      parseFloat(n)
    ), O = ve.hslToHex(
      R,
      parseFloat(a),
      parseFloat(o)
    ), T = ve.hslToHex(
      R,
      parseFloat(l),
      parseFloat(d)
    ), k = ve.hslToHex(
      R,
      parseFloat(u),
      parseFloat(p)
    ), W = ve.hslToHex(
      R,
      parseFloat(h),
      parseFloat(m)
    ), H = ve.hslToHex(
      R,
      parseFloat(f),
      parseFloat(b)
    ), Y = ve.hslToHex(
      R,
      parseFloat(x),
      parseFloat(w)
    ), K = ve.hslToHex(
      R,
      parseFloat(y),
      parseFloat(E)
    );
    return {
      neutralLight: C,
      neutralMedium: N,
      neutralDark: O,
      secondaryLight: T,
      secondaryMedium: k,
      secondaryDark: W,
      shadedLight: H,
      shadedMedium: Y,
      shadedDark: K
    };
  }
  static generateTypographyPalette(t, r) {
    const { h: i } = ve.hexToHsl(t), {
      paletteTypographyExtraDarkS: n,
      paletteTypographyExtraDarkL: a,
      paletteTypographyDarkS: o,
      paletteTypographyDarkL: l,
      paletteTypographySaturatedS: d,
      paletteTypographySaturatedLightness: u,
      paletteTypographyMediumA: p,
      paletteTypographyLightA: h,
      paletteTypographyExtraLightA: m
    } = r, f = ve.hslToHex(
      i,
      parseFloat(n),
      parseFloat(a)
    ), b = ve.hslToHex(
      i,
      parseFloat(o),
      parseFloat(l)
    ), x = ve.hslToHex(
      i,
      parseFloat(d),
      parseFloat(u)
    );
    return {
      extraDark: f,
      dark: b,
      medium: ze(b, p),
      light: ze(b, h),
      extraLight: ze(b, m),
      saturated: x
    };
  }
  static generateContrastPalette(t, r) {
    const { h: i } = ve.hexToHsl(t), {
      paletteContrastPrimaryS: n,
      paletteContrastPrimaryL: a,
      paletteContrastPrimaryLightS: o,
      paletteContrastPrimaryLightL: l,
      paletteContrastSecondaryA: d
    } = r, u = ve.hslToHex(
      i,
      parseFloat(n),
      parseFloat(a)
    ), p = ve.hslToHex(
      i,
      parseFloat(o),
      parseFloat(l)
    );
    return {
      primary: u,
      secondary: ze(u, d),
      primaryLight: p,
      secondaryLight: ze(p, d)
    };
  }
  static generateShadows(t, r, i) {
    let n = ve.hexToRgb(ve.validateHex(t));
    if (I.isNumber(r) && I.isNumber(i)) {
      const { h: a } = ve.hexToHsl(t), o = ve.hslToHex(a, r, i);
      n = ve.hexToRgb(ve.validateHex(o));
    }
    return I.map(
      ve.shadows,
      (a) => I.replace(a, /0,0,0/g, I.values(n).join(","))
    );
  }
  static getTextColor(t) {
    return t && ve.isDark(t) ? "#ffffff" : "#000000";
  }
  static createCustomSecondaryPalette(t, r) {
    const i = this.hexToHsl(t);
    return i.s <= 50 ? {
      light: ve.hslToHex(i.h, i.s, r === "light" ? 95 : 12),
      main: ve.hslToHex(i.h, i.s, r === "light" ? 90 : 17),
      dark: ve.hslToHex(i.h, i.s, r === "light" ? 88 : 24)
    } : {
      light: ve.hslToHex(i.h, 50, r === "light" ? 95 : 12),
      main: ve.hslToHex(i.h, 40, r === "light" ? 90 : 17),
      dark: ve.hslToHex(i.h, 40, r === "light" ? 88 : 24)
    };
  }
};
Su(ac, "colorKeys", [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
]), Su(ac, "shadows", [
  "none",
  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
]);
let oc = ac;
const K1 = (e) => oc.generateShadows(e.color, e?.saturation, e?.lightness), X1 = {
  avatar: {
    XXS: "2rem",
    XS: "2.4rem",
    SM: "3.2rem",
    MD: "3.6rem",
    LG: "4.4rem",
    XL: "6rem",
    XXL: "8rem"
  }
}, gf = (e) => {
  const { createCustomTypography: t, customFontSize: r, ...i } = e || {}, n = Ii(I.omitBy(i, I.isUndefined)), a = g1(n.palette.augmentColor, i?.palette), o = [
    ...dk,
    ...i?.externalCssUrls || [],
    ...i?.externalFontUrls || []
  ], l = new Set(i?.excludedExternalCssUrlIds || []), d = I.filter(o, (w) => !l.has(w.id)), u = Yk(i?.spacing), p = Ii({
    ...n,
    breakpoints: _k(i?.breakpoints),
    shadows: i != null && i.shadows ? K1(i?.shadows) : n.shadows,
    spacing: u,
    spacingVariants: i?.spacingVariants || Kk,
    borderRadiusVariants: i?.borderRadiusVariants || Wk,
    size: i?.size || X1,
    defaultWidth: i?.defaultWidth || qk,
    palette: a,
    externalCssUrls: d
  }), h = Ii({
    ...p,
    typography: k1(p, i?.typography, r)
  }), m = t ? Ii({
    ...h,
    typography: t(h)
  }) : h, f = Ii({
    ...m,
    mixins: {
      ...e1
    }
  }), b = Ii({
    ...f,
    components: U1(f, i?.overrides)
  }), x = Jk(
    b,
    u,
    r
  );
  return I.omit(x, Bm);
}, G1 = (e) => {
  const t = Yo({
    key: "rnd-rtl",
    container: e,
    stylisPlugins: [cf, Kc]
  });
  return t.compat = !0, t;
}, Z1 = (e) => {
  const t = Yo({
    key: "rnd-ltr",
    container: e
  });
  return t.compat = !0, t;
}, Q1 = (e, t) => gf({
  ...t,
  popupContainer: e
}), IE = ({
  children: e,
  name: t,
  themeOptions: r,
  shadowHostStyle: i
}) => {
  const [n, a] = s.useState(), [o, l] = s.useState(), d = (x) => a(x), u = (x) => l(x), p = s.useCallback(
    (x) => ({
      ...x,
      appendTo: o,
      onMouseDownOutside: jk(
        x.onMouseDownOutside,
        { popupClass: x.popupClass }
      )
    }),
    [o]
  ), h = s.useMemo(
    () => o && Q1(o, r),
    [o, r]
  ), m = s.useMemo(
    () => [
      // include font-awesome font-face declarations only css file
      { url: ak, id: rf.FONT_AWESOME_5_FONT_FACE },
      // include rnd theme fonts if loaded by the current theme
      ...I.filter(
        h?.externalCssUrls,
        (x) => x.url === tf || x.url === lk
      ),
      // include any custom fonts if provided
      ...r?.externalFontUrls ?? []
    ],
    [r?.externalFontUrls, h?.externalCssUrls]
  ), f = s.useMemo(
    () => I.difference(h?.externalCssUrls, m),
    [h?.externalCssUrls, m]
  ), b = s.useMemo(() => !h || !n ? null : h.direction === "rtl" ? G1(n) : Z1(n), [h, n]);
  return s.useEffect(() => {
    h && uf(h);
  }, [h]), /* @__PURE__ */ $.jsxs("div", { id: `${t}-shadow-host-container`, children: [
    m?.map((x) => /* @__PURE__ */ $.jsx(
      "link",
      {
        rel: "stylesheet",
        href: x.url,
        id: x.id
      },
      x.id
    )),
    /* @__PURE__ */ $.jsxs(
      Bf.div,
      {
        "data-test": `${t}-shadow-host`,
        id: `${t}-shadow-host`,
        style: i,
        children: [
          f.map((x) => /* @__PURE__ */ $.jsx(
            "link",
            {
              rel: "stylesheet",
              href: x.url,
              id: x.id
            },
            x.id
          )),
          /* @__PURE__ */ $.jsx(
            "div",
            {
              ref: d,
              id: `${t}-style-container`
            }
          ),
          /* @__PURE__ */ $.jsx(
            "div",
            {
              ref: u,
              id: `${t}-popups-container`,
              style: {
                zIndex: h?.zIndex.modal,
                position: "relative"
              }
            }
          ),
          n && o && h && /* @__PURE__ */ $.jsx(Mh.Provider, { value: p, children: /* @__PURE__ */ $.jsx(Eh.Provider, { value: p, children: /* @__PURE__ */ $.jsx(eh.Provider, { value: p, children: /* @__PURE__ */ $.jsx(Fu, { value: b, children: /* @__PURE__ */ $.jsxs(Lu, { theme: h, children: [
            /* @__PURE__ */ $.jsx(Pu, {}),
            e
          ] }) }) }) }) })
        ]
      }
    )
  ] });
}, vf = Yo({
  key: "rnd-rtl",
  stylisPlugins: [cf, Kc]
});
vf.compat = !0;
const xf = Yo({
  key: "rnd-ltr"
});
xf.compat = !0;
const TE = ({ theme: e, children: t }) => (s.useEffect(() => Ak(e.externalCssUrls), [e.externalCssUrls]), s.useEffect(() => {
  uf(e);
}, [e]), /* @__PURE__ */ $.jsx(Fu, { value: e.direction === "rtl" ? vf : xf, children: /* @__PURE__ */ $.jsxs(Lu, { theme: e, children: [
  /* @__PURE__ */ $.jsx(Pu, {}),
  t
] }) })), yr = {
  fontFamily: ["CentraleSans", "Helvetica", "Arial", "sans-serif"].join(",")
};
var Wi = /* @__PURE__ */ ((e) => (e.XS = "0.6rem", e.S = "1rem", e.M = "1.2rem", e.L = "1.6rem", e.XL = "3.6rem", e.ROUND = "50%", e))(Wi || {});
const J1 = 0.3, bf = 0.5, eC = 0.7, tC = 0.6, fo = "#364059", rC = "#14295D", iC = "#14295D", al = {
  600: "#053FD1",
  700: "#0034C5",
  900: "#000FA8"
}, $n = {
  primary: fo,
  secondary: "#0A0E19",
  disabled: ze(fo, bf),
  faded: ze(fo, eC),
  placeholder: ze(fo, J1),
  // Neutral contrast text, h1
  contrastSecondary: ze(rC, tC)
  // Caption typo
}, nC = {
  light: al[600],
  main: al[700],
  dark: al[900],
  contrastText: "#FFFFFF"
}, ol = {
  light: "#ECEFF9",
  main: "#DBE1F0",
  dark: "#D4DBED",
  contrastText: $n.primary
}, aC = {
  light: "#5D72A7",
  main: "#445D9C",
  dark: "#364A7C",
  contrastText: "#FFFFFF"
}, yf = {
  disabledOpacity: bf,
  hover: `rgba(0, 0, 0, ${ku})`,
  hoverOpacity: ku
}, sl = "#F0F4FE", bn = {
  paper: "#FFFFFF",
  default: sl,
  // former neutral.dark
  light: "#F9FAFB",
  // former neutral.light
  main: "#F4F6FB",
  // former neutral.main
  avatar: sl,
  image: sl
}, wf = {
  light: "#DAF5D6",
  main: "#116E0F",
  dark: "#0B4D0A",
  contrastText: "#FFFFFF"
}, $f = {
  light: "#FDD4CD",
  main: "#C42208",
  dark: "#891705",
  contrastText: "#FFFFFF"
}, kf = {
  light: "#DFE3EC",
  main: "#55648B",
  dark: "#3B4661",
  contrastText: "#FFFFFF"
}, Cf = {
  light: "#FEEBC8",
  main: "#ED7402",
  dark: "#A34F01",
  contrastText: "#FFFFFF"
}, oC = {
  main: "#fff"
}, ji = 0.2, sC = {
  color: iC
}, Eu = {
  picker: {
    inputInner: {
      x: 2.75,
      y: 1.75
    }
  }
}, Zc = "ltr", Ci = (e) => I.includes(Gc, e) ? "light" : "main", na = (e) => I.includes(Gc, e) ? "main" : "dark", lC = (e) => ({
  defaultProps: {
    disableRipple: !0
  },
  styleOverrides: {
    root: {
      [`& .${si.startIcon}`]: {
        margin: e?.spacing(0, e.spacingVariants.XS, 0, 0)
      },
      [`& .${si.endIcon}`]: {
        margin: e?.spacing(0, 0, 0, e.spacingVariants.XS)
      },
      [`&.${Jr}`]: {
        borderRadius: e?.borderRadiusVariants.ROUND,
        width: "3.6rem",
        height: "3.6rem",
        minWidth: "3.6rem"
      },
      height: "3.6rem",
      position: "relative",
      boxShadow: "none",
      textTransform: "initial",
      borderRadius: e?.borderRadiusVariants.XL,
      "&:active": {
        boxShadow: e?.shadows[0]
      },
      "&:hover": {
        boxShadow: e?.shadows[0]
      }
    },
    sizeMedium: {
      padding: e?.spacing(e.spacingVariants.XS, e.spacingVariants.M),
      [`&.${si.outlined}`]: {
        padding: e?.spacing(e.spacingVariants.XS, e.spacingVariants.M)
      }
    },
    ...ws(
      [...Oo],
      (t) => {
        const r = t === "secondary" ? e?.palette.text.primary : e?.palette[t][Ci(t)], i = t === "secondary" ? e?.palette.text.secondary : e?.palette[t][na(t)];
        return {
          borderColor: t === "secondary" ? e?.palette.secondary.dark : e?.palette[t][Ci(t)],
          backgroundColor: e?.palette.background.paper,
          color: r,
          [`& .${si.loadingIndicator}`]: {
            color: r
          },
          [`&.${si.disabled}`]: {
            backgroundColor: e?.palette.background.paper,
            color: r,
            borderColor: e?.palette[t][Ci(t)],
            opacity: e?.palette.action.disabledOpacity
          },
          "&:hover": {
            backgroundColor: e?.palette.secondary.light,
            color: i,
            borderColor: e?.palette[t][na(t)]
          }
          // TODO: waiting for final design from Kate
          // '&:active': {
          // color: theme?.palette[color as RndColorType].dark,
          // borderColor: theme?.palette[color as RndColorType].dark,
          // },
        };
      },
      "",
      "outlined"
    ),
    ...ws(
      [...Oo],
      (t) => ({
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: e?.palette[t][Ci(t)],
        backgroundColor: e?.palette[t][Ci(t)],
        color: e?.palette[t].contrastText,
        [`& .${si.loadingIndicator}`]: {
          color: e?.palette[t].contrastText
        },
        [`&.${si.disabled}`]: {
          borderColor: e?.palette[t][Ci(t)],
          backgroundColor: e?.palette[t][Ci(t)],
          color: e?.palette[t].contrastText,
          opacity: e?.palette.action.disabledOpacity
        },
        "&:hover": {
          borderColor: e?.palette[t][na(t)],
          backgroundColor: e?.palette[t][na(t)],
          color: e?.palette[t].contrastText
        }
        // TODO: waiting for final design from Kate
        // '&:active': {
        //   backgroundColor: theme?.palette[color as RndColorType].dark,
        //   color: theme?.palette[color as RndColorType].contrastText,
        // },
      }),
      "",
      "contained"
    ),
    ...ws(
      [...Oo],
      (t) => {
        const r = t === "secondary" ? e?.palette.text.primary : e?.palette[t][Ci(t)], i = t === "secondary" ? e?.palette.text.secondary : e?.palette[t][na(t)];
        return {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "transparent",
          color: r,
          [`& .${si.loadingIndicator}`]: {
            color: r
          },
          [`&.${si.disabled}`]: {
            color: r,
            opacity: e?.palette.action.disabledOpacity
          },
          "&:hover": {
            borderColor: e?.palette.secondary.light,
            backgroundColor: e?.palette.secondary.light,
            color: i
          }
          // TODO: waiting for final design from Kate
          // '&:active': {
          //   backgroundColor: theme?.palette.background.default,
          //   color: theme?.palette[color as RndColorType].dark,
          // },
        };
      },
      "",
      "text"
    ),
    textSizeSmall: {
      padding: 0
    }
  }
}), cC = (e) => ({
  styleOverrides: {
    root: {
      padding: e?.spacing(4)
    }
  }
}), dC = () => ({
  styleOverrides: {
    root: {
      [`&.${Dr.contentVariant.default}`]: {
        height: "13rem"
      },
      [`&.${Dr.contentVariant.sideBar}`]: {
        padding: 0,
        "&:last-child": {
          padding: 0
        }
      },
      [`&.${Dr.contentVariant.profile}`]: {
        height: "17.5rem"
      },
      [`&.${Dr.contentVariant.fullProfile}`]: {
        height: "auto"
      },
      [`&.${Dr.contentVariant.shortProfile}`]: {
        height: "14.5rem"
      },
      [`&.${Dr.contentVariant.longProfile}`]: {
        height: "20.8rem"
      },
      [`&.${Dr.contentVariant.paymentDetails}`]: {
        height: "15.2rem"
      },
      [`&.${Dr.contentVariant.resource}`]: {
        height: "10.6rem"
      }
    }
  }
}), uC = () => ({
  styleOverrides: {
    action: {
      margin: 0
    }
  }
}), pC = (e) => ({
  styleOverrides: {
    root: {
      borderRadius: e?.borderRadiusVariants.XL
    },
    sizeMedium: {
      height: "2.4rem",
      "& .MuiChip-label": {
        padding: e?.spacing(0, e.spacingVariants.XS)
      }
    }
  }
}), hC = (e) => ({
  [`.${$r}, .k-animation-container, .k-window`]: {
    ".k-popup, .k-menu-popup": {
      boxShadow: e?.shadows[7],
      borderRadius: e?.borderRadiusVariants.XS,
      backgroundColor: e?.palette.background.paper,
      ".k-list": {
        backgroundColor: e?.palette.background.paper
      }
    },
    ".k-combobox-popup, .k-dropdownlist-popup, .k-multiselect-popup": {
      maxHeight: "clamp(10rem, 50vh, 30rem)",
      overflow: "auto"
    },
    "&.k-calendar, .k-calendar": {
      borderRadius: e?.borderRadiusVariants.XS
    },
    ".k-daterangepicker": {
      "&.k-invalid": {
        borderColor: e?.palette.error.main
      },
      "& .k-input-inner": {
        ...e?.typography.body,
        fontFamily: e?.typography.fontFamily
      },
      "& .k-input-inner::placeholder": {
        ...e?.typography.body,
        color: e?.palette.text.placeholder,
        fontFamily: e?.typography.fontFamily
      }
    },
    ".k-picker, .k-datepicker, .k-datetimepicker": {
      ".k-input-inner": {
        ...e?.typography.body,
        fontFamily: e?.typography.fontFamily,
        padding: e?.spacing(Eu.picker.inputInner.y, Eu.picker.inputInner.x)
      },
      ".k-input-inner::placeholder": {
        ...e?.typography.body,
        color: e?.palette.text.placeholder,
        fontFamily: e?.typography.fontFamily
      },
      "&.k-invalid": {
        borderColor: e?.palette.error.main
      }
    },
    ".k-picker.k-dropdownlist": {
      minWidth: "17.2rem",
      borderColor: e?.palette.secondary.light,
      backgroundColor: e?.palette.secondary.light,
      "&.k-invalid": {
        borderColor: e?.palette.error.main
      },
      "&:hover": {
        backgroundColor: e?.palette.secondary.main
      },
      "&:hover:not(.k-invalid)": {
        borderColor: e?.palette.secondary.main
      },
      [`&.${cc}`]: {
        minWidth: 0,
        boxShadow: "none",
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: e?.palette.secondary.main,
        [`&.${$a}`]: {
          backgroundColor: e?.palette.secondary.dark
        },
        [`&.${dc}`]: {
          backgroundColor: e?.palette.secondary.dark
        },
        "& .k-button-md": {
          padding: e?.spacing(1.75, 2)
        }
      },
      ...e?.typography.body
    },
    ".k-state-disabled, .k-disabled": {
      opacity: e?.palette.action.disabledOpacity
    },
    ".k-input-outline": {
      borderColor: e?.palette.secondary.light,
      // The ! important declaration is needed to override Kendo theme's own !important declaration
      backgroundColor: `${e?.palette.secondary.light} !important`,
      "&.k-invalid": {
        borderColor: e?.palette.error.main
      },
      "&:hover": {
        // The ! important declaration is needed to override Kendo theme's own !important declaration
        backgroundColor: `${e?.palette.secondary.main} !important`
      },
      "&:hover:not(.k-invalid)": {
        borderColor: e?.palette.secondary.main
        // The ! important declaration is needed to override Kendo theme's own !important declaration
      },
      // Focus state is inside FormControl overrides
      ...e?.typography.body
    },
    ".k-rounded-md": {
      borderRadius: e?.borderRadiusVariants.XS
    },
    ".k-list": {
      ".k-list-item, .k-list-optionlabel": {
        "&:not(:last-child)": {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: e?.palette.secondary.light
        },
        "&:hover": {
          backgroundColor: e?.palette.secondary.main
        },
        padding: e?.spacing(1.5, 4),
        ...e?.typography.body
      }
    },
    ...mf(() => ({
      ".k-list-item.k-selected, .k-selected.k-list-optionlabel": {
        backgroundColor: e?.palette.secondary.light,
        "&:hover": {
          backgroundColor: e?.palette.secondary.main
        }
      }
    })),
    ".k-button-solid-primary": {
      borderColor: e?.palette.primary.main,
      color: e?.palette.primary.contrastText,
      backgroundColor: e?.palette.primary.main,
      "&:hover, .k-hover": {
        borderColor: e?.palette.primary.dark,
        backgroundColor: e?.palette.primary.dark,
        boxShadow: "none"
      }
    },
    ".k-button-solid-base": {
      borderColor: e?.palette.secondary.main,
      color: e?.palette.secondary.contrastText,
      backgroundColor: e?.palette.secondary.main,
      "&:hover, .k-hover": {
        borderColor: e?.palette.secondary.dark,
        backgroundColor: e?.palette.secondary.dark,
        boxShadow: "none"
      }
    },
    ".k-button-group": {
      ".k-button-solid-base": {
        "&.k-selected": {
          borderColor: e?.palette.primary.main,
          color: e?.palette.primary.contrastText,
          backgroundColor: e?.palette.primary.main,
          "&:hover": {
            backgroundColor: e?.palette.primary.dark,
            borderColor: e?.palette.primary.dark
          }
        }
      }
    }
  }
}), fC = (e) => ({
  styleOverrides: {
    "body, :host": {
      fontFamily: e?.typography.fontFamily
    },
    ...hC(e)
  }
}), mC = (e) => ({
  styleOverrides: {
    root: {
      position: "relative",
      padding: e?.spacing(
        e.spacingVariants.M,
        e.spacingVariants.XXL,
        e.spacingVariants.M,
        e.spacingVariants.L
      ),
      [`& .${Jr}`]: {
        position: "absolute",
        right: e?.spacing(e.spacingVariants.M),
        top: "50%",
        transform: "translateY(-50%)"
      }
    }
  }
}), gC = () => ({
  defaultProps: {
    fullWidth: !0,
    responsive: "false"
  }
}), vC = (e) => ({
  styleOverrides: {
    root: {
      backgroundColor: e?.palette.background.paper,
      [`&.${ed.underline}`]: {
        "&:before": {
          borderColor: e?.palette.border.input,
          transition: "none"
        },
        "&:after": {
          borderBottom: `1px solid ${e?.palette.primary.main || "#fff"}`
        },
        "&:hover": {
          [`&:not(.${ed.disabled})`]: {
            "&:before": {
              borderBottom: `1px solid ${e?.palette.border.input}`
            }
          }
        }
      }
    },
    input: {
      padding: e?.spacing(e.spacingVariants.XS, e.spacingVariants.XS),
      fontSize: "1.4rem",
      borderColor: e?.palette.border.input,
      "&:hover": {
        borderColor: e?.palette.border.input
      },
      '&[type="number"]': {
        paddingRight: e?.direction === "rtl" ? "0.7rem" : "1.4rem",
        paddingLeft: e?.direction === "rtl" ? "1.4rem" : "0.7rem"
      }
    }
  }
}), xC = (e) => ({
  styleOverrides: {
    input: {
      borderRadius: e?.borderRadiusVariants.XS
    }
  }
}), bC = (e) => ({
  defaultProps: {
    shrink: !0,
    disableAnimation: !0
  },
  styleOverrides: {
    root: {
      position: "relative",
      transform: "unset",
      ...e?.typography.bodyFaded,
      [`&.${td.focused}`]: {
        ...e?.typography.bodyFaded
      },
      [`&.${td.error}`]: {
        ...e?.typography.bodyFaded
      },
      [`&.${uc}`]: {
        textAlign: "end",
        width: "max-content",
        maxWidth: "max-content"
      }
    }
  }
}), yC = (e) => ({
  styleOverrides: {
    root: {
      "&:not(:last-child)": {
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: e?.palette.secondary.light
      },
      ":hover": {
        backgroundColor: e?.palette.secondary.main
      },
      [`&.${Pm.selected}`]: {
        ":hover": {
          backgroundColor: e?.palette.secondary.main
        },
        backgroundColor: e?.palette.secondary.light
      }
    }
  }
}), wC = (e) => ({
  styleOverrides: {
    root: {
      // Readonly
      [`&.${ln.readOnly}`]: {
        backgroundColor: "transparent",
        [`& .${xr.notchedOutline}`]: { borderColor: "transparent" }
      },
      // Disabled
      [`&.${xr.disabled}`]: {
        opacity: e?.palette.action.disabledOpacity,
        [`& .${xr.notchedOutline}`]: {
          borderColor: e?.palette.secondary.light
        }
      },
      borderRadius: e?.borderRadiusVariants.XS,
      backgroundColor: e?.palette.secondary.light,
      [`&:hover:not(.${xr.disabled}, .${ln.readOnly}), .${$a}`]: {
        backgroundColor: e?.palette.secondary.main
      },
      [`&.Mui-focused:not(.${xr.disabled}, .${ln.readOnly})`]: {
        backgroundColor: e?.palette.secondary.dark
      },
      // Fieldset
      [`& .${xr.notchedOutline}`]: {
        borderColor: e?.palette.secondary.light
      },
      // error
      [`& .${xr.error} .${xr.notchedOutline}`]: {
        borderColor: e?.palette.error.main
      },
      // hover
      [`&:hover:not(.${xr.disabled}, .${ln.readOnly}, .${xr.error}) .${xr.notchedOutline}`]: {
        borderColor: e?.palette.secondary.main
      },
      //  focused
      [`&.Mui-focused:not(.${xr.disabled}, .${ln.readOnly}, .${xr.error}) .${xr.notchedOutline}`]: {
        borderColor: e?.palette.secondary.dark
      },
      [`&.${ln.adornedStart}:not(.${Vu}, .${Wu})`]: {
        padding: e?.spacing(0, e?.spacingVariants.XS)
      }
    },
    input: {
      padding: e?.spacing(e.spacingVariants.XS, e.spacingVariants.XS),
      "&::placeholder": {
        color: e?.palette.text.placeholder,
        opacity: 1
      },
      ...e?.typography.body
    }
  }
}), $C = (e) => ({
  defaultProps: {
    variant: "elevation"
  },
  styleOverrides: {
    root: {
      [`&.${dl.outlined}`]: {
        borderColor: e?.palette.border.base,
        borderRadius: e?.borderRadiusVariants.XS
      },
      [`&.${dl.elevation}`]: {
        borderColor: e?.palette.border.base,
        borderRadius: e?.borderRadiusVariants.M
      }
    }
  }
}), kC = (e) => ({
  styleOverrides: {
    paper: {
      [`&.${dl.elevation}`]: {
        borderRadius: e?.borderRadiusVariants.XS,
        boxShadow: e?.shadows[7]
      }
    }
  }
}), CC = () => ({
  defaultProps: {
    fullWidth: !0,
    responsive: "false"
  }
}), Sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MuiButton: lC,
  MuiCardActions: cC,
  MuiCardContent: dC,
  MuiCardHeader: uC,
  MuiChip: pC,
  MuiCssBaseline: fC,
  MuiDialogTitle: mC,
  MuiFormControl: gC,
  MuiInput: vC,
  MuiInputBase: xC,
  MuiInputLabel: bC,
  MuiMenuItem: yC,
  MuiOutlinedInput: wC,
  MuiPaper: $C,
  MuiPopover: kC,
  MuiTextField: CC
}, Symbol.toStringTag, { value: "Module" })), Du = {
  primary: nC,
  secondary: ol,
  success: wf,
  error: $f,
  info: kf,
  warning: Cf,
  background: {
    light: bn.light,
    main: bn.main,
    default: bn.default,
    paper: bn.paper,
    image: bn.image,
    avatar: bn.avatar
  },
  text: {
    primary: $n.primary,
    secondary: $n.secondary,
    faded: $n.faded,
    disabled: $n.disabled,
    placeholder: $n.placeholder
  },
  navigation: aC,
  border: {
    base: ol.dark,
    input: ol.light
  },
  action: yf
};
var wr = /* @__PURE__ */ ((e) => (e[e.XS = 1.1] = "XS", e[e.S = 1.18571] = "S", e[e.M = 1.2] = "M", e[e.L = 1.28571] = "L", e[e.XL = 1.4] = "XL", e))(wr || {});
const Ef = ({
  palette: e,
  fontFamily: t
}) => {
  var r, i, n, a, o, l, d, u, p;
  return {
    fontFamily: t || yr.fontFamily,
    fontWeightRegular: rt.medium,
    h1: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.bold,
      fontSize: "2.4rem",
      letterSpacing: 0,
      lineHeight: wr.XS,
      textTransform: vt.INITIAL,
      color: (r = e.text) == null ? void 0 : r.primary
    },
    h2: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.bold,
      fontSize: "2.2rem",
      letterSpacing: 0,
      lineHeight: wr.XS,
      textTransform: vt.INITIAL,
      color: (i = e.text) == null ? void 0 : i.secondary
    },
    h3: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.bold,
      fontSize: "1.8rem",
      letterSpacing: 0,
      lineHeight: wr.XS,
      textTransform: vt.INITIAL,
      color: (n = e.text) == null ? void 0 : n.primary
    },
    h4: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.bold,
      fontSize: "1.6rem",
      letterSpacing: 0,
      lineHeight: wr.XS,
      textTransform: vt.INITIAL,
      color: (a = e.text) == null ? void 0 : a.primary
    },
    tabHeader: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.bold,
      fontSize: "1.4rem",
      letterSpacing: 0,
      lineHeight: wr.XL,
      textTransform: vt.INITIAL,
      color: (o = e.text) == null ? void 0 : o.primary
    },
    widgetTitle: {
      fontFamily: t || yr.fontFamily,
      textTransform: vt.UPPERCASE,
      lineHeight: wr.L
    },
    groupTitle: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.semiBold,
      fontSize: "1.4rem",
      letterSpacing: 0,
      lineHeight: wr.XS,
      textTransform: vt.INITIAL,
      color: (l = e.text) == null ? void 0 : l.primary
    },
    body: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.medium,
      fontSize: "1.4rem",
      letterSpacing: 0,
      lineHeight: wr.M,
      textTransform: vt.INITIAL,
      color: (d = e.text) == null ? void 0 : d.primary
    },
    bodyFaded: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.medium,
      fontSize: "1.4rem",
      lineHeight: wr.M,
      letterSpacing: 0,
      textTransform: vt.INITIAL,
      color: (u = e.text) == null ? void 0 : u.faded
    },
    button: {
      fontFamily: t || yr.fontFamily,
      lineHeight: wr.L
    },
    caption: {
      fontFamily: t || yr.fontFamily,
      fontWeight: rt.normal,
      fontSize: "1.2rem",
      letterSpacing: 0,
      lineHeight: wr.M,
      textTransform: vt.INITIAL,
      color: (p = e.text) == null ? void 0 : p.faded
    },
    alert: {
      fontFamily: t || yr.fontFamily,
      lineHeight: wr.L
    },
    tagLabel: {
      fontFamily: t || yr.fontFamily,
      fontSize: "1.2rem",
      lineHeight: wr.S
    }
  };
}, Df = (e, t) => {
  const r = Ef({ palette: e.palette, fontFamily: t });
  return wa(e.typography, r);
}, Mf = {
  XS: Wi.XS,
  S: Wi.S,
  M: Wi.M,
  L: Wi.L,
  XL: Wi.XL,
  ROUND: Wi.ROUND
}, SC = {
  direction: Zc,
  palette: Du,
  overrides: Sf,
  shadows: sC,
  borderRadiusVariants: Mf,
  typography: Ef({ palette: Du })
}, RE = (e = Zc, t) => {
  const r = gf({
    ...SC,
    direction: e,
    typography: void 0
  });
  return Ii({
    ...r,
    typography: Df(r)
  });
}, OE = ({
  colors: e,
  fontFamily: t,
  direction: r,
  borderRadiusVariants: i,
  ...n
}) => {
  const a = oc.getThemeMode(e.backgroundColor), o = oc.createCustomSecondaryPalette(
    e.primaryColor,
    a
  ), l = {
    light: rd(e.backgroundColor, ji * 2),
    main: rd(e.backgroundColor, ji),
    dark: e.backgroundColor
  }, d = e.navigationColor || Y1.navigation;
  return {
    palette: {
      mode: a,
      primary: {
        light: e.primaryColor,
        main: Cn(e.primaryColor, ji),
        dark: Cn(e.primaryColor, ji * 2)
      },
      secondary: o,
      navigation: {
        light: d,
        main: Cn(d, ji),
        dark: Cn(d, ji * 2)
      },
      success: wf,
      error: $f,
      info: kf,
      warning: Cf,
      custom: oC,
      background: {
        default: l.dark,
        light: l.light,
        main: l.main,
        image: l.light,
        avatar: l.light
      },
      tonalOffset: ji,
      action: yf
    },
    overrides: Sf,
    direction: r || Zc,
    borderRadiusVariants: i || Mf,
    createCustomTypography: (u) => Df(u, t),
    ...n
  };
};
var EC = Object.defineProperty, DC = (e, t, r) => t in e ? EC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, MC = (e, t, r) => DC(e, t + "", r);
const Mu = {
  width: "w",
  height: "h",
  radius: "r",
  focus: "fo",
  crop: "c",
  cropMode: "cm",
  quality: "q"
}, Uo = "https://ik.imagekit.io/officernd", IC = "ik-sanitizeSvg=true", TC = {
  "//dzrjcxtasfoip.cloudfront.net/": `${Uo}/`,
  "//d35ll89fr5oblf.cloudfront.net/": `${Uo}/assets/`
}, RC = (e, t) => e === "cropMode" && (t === "at_max" || t === "at_min") ? Mu.crop : Mu[e] || e, Iu = (e, t, r) => {
  const i = Object.entries(r).map(([d, u]) => [RC(d, u), u].join("-")).join(","), n = t.startsWith(Uo), a = !I.isEmpty(i), o = [];
  a && o.push(`tr=${i}`), n && o.push(IC);
  const l = o.length > 0 ? `?${o.join("&")}` : "";
  return `${t}${e}${l}`;
}, OC = (e) => {
  const t = {
    ...e
  };
  return Object.entries(e).forEach(([r, i]) => {
    r.startsWith("//") && (t[`https:${r}`] = i);
  }), t;
};
class If {
  constructor(t = TC) {
    MC(this, "urlMappings"), this.urlMappings = OC(t);
  }
  url(t, r = {}) {
    const i = I.find(I.keys(this.urlMappings), (n) => t.startsWith(n));
    return i ? Iu(t.substring(i.length), this.urlMappings[i], r) : t.startsWith("/") ? Iu(t, Uo, r) : t;
  }
}
const NC = new If(), FC = {
  getImageUrl: (e, t) => NC.url(e, t)
}, LC = s.createContext(FC), NE = ({
  children: e,
  urlMappings: t
}) => {
  const r = s.useMemo(() => {
    const i = new If(t);
    return {
      getImageUrl: (n, a) => i.url(n, a)
    };
  }, [t]);
  return /* @__PURE__ */ $.jsx(LC.Provider, { value: r, children: e });
};
export {
  rS as $,
  vE as A,
  GC as B,
  aa as C,
  eE as D,
  rf as E,
  WC as F,
  Nh as G,
  hE as H,
  sE as I,
  pE as J,
  Q$ as K,
  rw as L,
  Yi as M,
  GS as N,
  gE as O,
  ME as P,
  aS as Q,
  mo as R,
  ZC as S,
  eS as T,
  tS as U,
  JS as V,
  RE as W,
  Y1 as X,
  nS as Y,
  Z$ as Z,
  iS as _,
  oS as a,
  NE as a0,
  uE as a1,
  ZS as a2,
  VC as a3,
  UC as a4,
  jC as a5,
  fi as a6,
  JC as a7,
  QC as a8,
  fE as a9,
  bE as aa,
  dE as ab,
  wE as ac,
  SE as ad,
  EE as ae,
  CE as af,
  $E as ag,
  kE as ah,
  _C as ai,
  KC as aj,
  YC as ak,
  mE as al,
  Qu as am,
  lE as an,
  J$ as ao,
  oE as ap,
  yE as aq,
  sS as ar,
  Ku as as,
  XC as b,
  Cs as c,
  XS as d,
  qC as e,
  xE as f,
  TE as g,
  rE as h,
  ju as i,
  Sn as j,
  nE as k,
  LC as l,
  cE as m,
  Zu as n,
  Lo as o,
  Fo as p,
  KS as q,
  NS as r,
  tE as s,
  QS as t,
  OE as u,
  DE as v,
  iE as w,
  gf as x,
  IE as y,
  aE as z
};
