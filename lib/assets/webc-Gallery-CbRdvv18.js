import { j as e, r as u, aI as k } from "./webc-vendor-BjE1NNvQ.js";
import { d as j, p as x, c as B, j as E, h as _, z as L, k as P, l as X, M } from "./webc-vendor-core-n5KM3lsu.js";
import { u as R, ao as I, aA as W, aB as $ } from "./webc-vendor-mui-BXZK0LVO.js";
import { l as b } from "./webc-vendor-lodash-QZMGaMCX.js";
import { I as G, e as D, i as N, aW as V, l as H, aX as z } from "./webc-web-component-QV_kTZ_O.js";
import { T as F } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { u as v } from "./webc-vendor-i18n-DYvJO9nR.js";
import { u as O } from "./webc-vendor-react-router-W8U6ip5z.js";
import { c as K, j as q } from "./webc-vendor-responsive-carousel-DMR1NOE6.js";
const Q = 800, wt = ({
  amenities: t,
  dataTestId: l
}) => {
  const r = R(), s = I(r.breakpoints.up(Q)), { t: a } = v(), o = (i) => a(`amenity-${i._id}-title`, {
    defaultValue: i.title
  });
  return /* @__PURE__ */ e.jsx(
    j,
    {
      "data-test": l,
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, auto)",
        sm: "repeat(2, auto)",
        lg: "repeat(3, auto)"
      },
      columnGap: { sm: s ? "2vw" : "3vw", md: "7vw", lg: 14 },
      alignContent: "flex-start",
      width: "fit-content",
      maxWidth: "md",
      children: b.map(t, (i) => /* @__PURE__ */ e.jsx(
        x,
        {
          width: "fit-content",
          children: /* @__PURE__ */ e.jsx(
            F,
            {
              title: o(i),
              compact: !0,
              children: /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(
                G,
                {
                  variant: "body",
                  alignItems: "center",
                  ellipsis: !0,
                  width: {
                    xs: "80vw",
                    // NOTE: The use of 'vw' units for width ensures that amenities have as much space
                    // as possible before their titles are truncated, improving readability. For columnGap,
                    // 'vw' units are used to minimize dead space between items.
                    // The 800px breakpoint (isLargeScreen) is introduced to adjust the layout earlier than
                    // the default 'sm' breakpoint, as the floating panel has a significant min-width
                    // that requires additional space management on smaller screens.
                    sm: s ? "20vw" : "40vw",
                    md: "20vw",
                    lg: "18vw"
                  },
                  maxWidth: { lg: r.typography.pxToRem(220) },
                  icon: `fa ${i.icon ?? "fa-badge-check"}`,
                  iconProps: {
                    sx: { width: r.typography.pxToRem(16), height: r.typography.pxToRem(16) }
                  },
                  children: o(i)
                }
              ) })
            }
          )
        },
        i._id
      ))
    }
  );
}, yt = ({ sx: t }) => {
  const l = D(), r = O(), { t: s } = v(), [a, o] = u.useState(!1);
  return u.useEffect(() => {
    r.state?.showBackButton && o(!0);
  }, [r.state]), r.key === "default" || !a ? null : /* @__PURE__ */ e.jsx(
    B,
    {
      variant: "outlined",
      fontSize: "medium",
      alignItems: "center",
      width: "fit-content",
      color: "inherit",
      onClick: () => l(-1),
      startIcon: /* @__PURE__ */ e.jsx(
        E,
        {
          icon: "fa fa-solid fa-chevron-left",
          rtlIcon: "fa fa-solid fa-chevron-right"
        }
      ),
      title: s("static-back-button-aria-label", {
        defaultValue: "Back to previous page"
      }),
      "aria-label": s("static-back-button-aria-label", {
        defaultValue: "Back to previous page"
      }),
      sx: {
        ...t,
        zIndex: 1
        // cursor: 'pointer',
      },
      children: s("static-back-button-title", {
        defaultValue: "Back"
      })
    }
  );
}, Y = ({
  content: t,
  title: l,
  open: r,
  onClose: s,
  dataTestId: a,
  maxWidth: o = "xs"
}) => /* @__PURE__ */ e.jsxs(
  _,
  {
    "data-test": a,
    open: r,
    onClose: s,
    maxWidth: o,
    children: [
      /* @__PURE__ */ e.jsx(
        L,
        {
          onClose: s,
          iconButtonProps: {
            "aria-label": "Close",
            iconProps: {
              fontSize: "large",
              icon: "far fa-times"
            },
            sx: {
              position: "absolute",
              right: (i) => i.typography.pxToRem(16),
              top: "50%",
              transform: "translateY(-50%)"
            }
          },
          position: "relative",
          children: l
        }
      ),
      /* @__PURE__ */ e.jsx(P, { sx: { padding: 0 }, children: t })
    ]
  }
), w = "scaleX(-1)", J = {
  "&:focus-visible": {
    outline: "none"
  },
  "& .carousel.carousel-slider": {
    position: "relative",
    borderRadius: 3,
    paddingX: 6,
    margin: "auto"
  },
  "& .slide": {
    display: "flex",
    alignContent: "center"
  },
  "& .carousel": {
    display: "flex",
    justifyContent: "center"
  },
  // NOTE: Counterintuitive hack - setting 'ltr' when theme is 'rtl' works because the carousel library
  // internally reverses the dot order, so we need to reverse it back to get correct visual behavior
  "& .carousel .control-dots": {
    direction: (t) => `${t.direction === "rtl" ? "ltr" : "unset"} !important`
  },
  // NOTE: Using scaleX(-1) to horizontally flip the slider-wrapper for RTL direction
  // This reverses the sliding animation direction to match RTL expectations
  "& .carousel .slider-wrapper": {
    transform: (t) => t.direction === "rtl" ? w : "none"
  },
  // NOTE: Counter-transform the individual slides to prevent image content from appearing mirrored
  // The parent slider-wrapper is flipped for RTL animation direction, but the actual
  // images should display normally (text readable, not mirrored)
  "& .carousel .slide": {
    transform: (t) => t.direction === "rtl" ? w : "none"
  },
  "& .thumbs-wrapper": {
    direction: (t) => t.direction === "rtl" ? "ltr" : "rtl",
    margin: 0,
    "& .thumbs": {
      paddingX: 0
    },
    "& .thumb": {
      backgroundColor: "grey",
      border: "none",
      borderRadius: "12px",
      overflow: "hidden",
      padding: 0,
      cursor: "pointer",
      boxShadow: 3,
      filter: "brightness(50%)",
      // NOTE: Match the hardcoded thumb width as apparently it cannot be easily changed without breaking thumbs layout.
      height: (t) => t.typography.pxToRem(60),
      "& img": { height: "100%", width: "100%" },
      "&.selected": {
        border: "2px solid",
        borderColor: "primary.main",
        filter: "unset"
      }
    }
  }
}, Z = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  slide: {
    width: "inherit !important"
  },
  img: {
    maxHeight: "70dvh",
    objectFit: "contain",
    objectPosition: "center",
    borderRadius: 3
  }
}, U = {
  "&:focus-visible": {
    outline: "none"
  },
  "& .carousel.carousel-slider": {
    position: "relative"
  },
  // NOTE: Same counterintuitive hack as above - carousel library's internal behavior requires this reversal
  "& .carousel .control-dots": {
    direction: (t) => `${t.direction === "rtl" ? "ltr" : "unset"} !important`
  },
  // NOTE: Horizontal flip for RTL sliding animation direction
  "& .carousel .slider-wrapper": {
    transform: (t) => t.direction === "rtl" ? w : "none"
  },
  // NOTE: Counter-transform slides to prevent image content from appearing mirrored
  "& .carousel .slide": {
    transform: (t) => t.direction === "rtl" ? w : "none"
  }
}, tt = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    aspectRatio: "16 / 9",
    objectFit: "cover",
    objectPosition: "center"
  }
}, et = (t) => t ? J : U, ot = (t, l, r) => {
  const s = r["& .thumbs-wrapper"] || {}, a = `${t.direction} !important`, o = t.direction === "rtl" ? "row-reverse" : "row";
  return l ? {
    // Desktop/dialog mode: Override thumbs direction and order
    "& .thumbs-wrapper": {
      ...s,
      direction: a
    },
    "& .thumbs-wrapper .thumbs": {
      display: "flex",
      flexDirection: o
    }
  } : {
    // Mobile/non-dialog mode only: Remove scaleX transforms (they break swipe/arrows)
    "& .carousel .slider-wrapper": {
      transform: "none !important"
    },
    "& .carousel .slide": {
      transform: "none !important"
    },
    // Reverse control-dots order in RTL mode
    "& .carousel .control-dots": {
      display: "flex",
      justifyContent: "center",
      flexDirection: o
    },
    // Desktop-specific thumbs overrides still needed when not in dialog
    "& .thumbs-wrapper": {
      ...s,
      direction: a
    },
    "& .thumbs-wrapper .thumbs": {
      display: "flex",
      flexDirection: o
    }
  };
}, C = {
  ltr: {
    next: "ArrowRight",
    prev: "ArrowLeft"
  },
  rtl: {
    next: "ArrowLeft",
    prev: "ArrowRight"
  }
}, T = ({
  dataTest: t,
  entity: l,
  imageUrls: r,
  selectedImageItemIndex: s = 0,
  setSelectedImageItemIndex: a,
  inDialog: o = !1,
  carouselContainerSx: i = {},
  carouselImageContainerSx: p = {}
}) => {
  const h = u.useRef(null), g = R(), n = k(N), y = (f) => {
    a && (f.key === C[g.direction].next ? a((d) => (d + 1) % r.length) : f.key === C[g.direction].prev && a((d) => (d - 1 + r.length) % r.length));
  };
  u.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const c = et(o), m = n ? ot(g, o, c) : {};
  return /* @__PURE__ */ e.jsxs(
    x,
    {
      "data-test": t,
      onKeyDown: y,
      tabIndex: 0,
      ref: h,
      sx: {
        ...c,
        ...i,
        ...m,
        direction: g.direction
      },
      children: [
        /* @__PURE__ */ e.jsx("style", { children: K }),
        /* @__PURE__ */ e.jsx(
          q.Carousel,
          {
            showArrows: !o,
            selectedItem: s,
            showStatus: !1,
            showIndicators: !o,
            showThumbs: o,
            infiniteLoop: !0,
            children: b.map(r, (f, d) => /* @__PURE__ */ e.jsx(
              x,
              {
                sx: {
                  ...o ? Z : tt,
                  ...p
                },
                children: /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: f,
                    alt: `Bookable ${l} ${d + 1}`,
                    loading: d === 0 ? "eager" : "lazy",
                    fetchPriority: d === 0 ? "high" : "auto"
                  }
                )
              },
              `${f}-${d}`
            ))
          }
        )
      ]
    }
  );
}, S = {
  3: [
    { rows: 18, cols: 32 },
    { rows: 9, cols: 16 },
    { rows: 9, cols: 16 }
  ],
  2: [
    { rows: 18, cols: 24 },
    { rows: 18, cols: 24 }
  ],
  1: [{ rows: 18, cols: 48 }]
}, rt = 3, st = (t, l) => {
  const r = t.slice(0, rt), s = r.length;
  return S[s] ? r.map((a, o) => {
    const { rows: i, cols: p } = S[s][o];
    return {
      img: a,
      title: `${l} image ${o + 1}`,
      rows: i,
      cols: p
    };
  }) : [];
}, at = (t) => t === 2 ? "32 / 9" : t >= 3 ? "24 / 9" : "16 / 9", it = 1240, nt = 800, A = 420, lt = 1920, ct = {
  maxHeight: (t) => t.typography.pxToRem(A),
  img: {
    maxHeight: (t) => t.typography.pxToRem(A)
  }
}, jt = ({
  entity: t,
  title: l,
  images: r
}) => {
  const s = R(), [a, o] = u.useState(-1), { getImageUrl: i } = u.useContext(X), { t: p } = v(), h = I(s.breakpoints.up(nt)), g = I(s.breakpoints.down("sm")), n = u.useMemo(
    () => b.map(
      r,
      (c) => i(c, {
        width: lt
      })
    ),
    [i, r]
  ), y = u.useMemo(
    () => st(n, b.upperFirst(t)),
    [n, t]
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      Y,
      {
        dataTestId: "image-dialog",
        open: a > -1,
        onClose: () => o(-1),
        maxWidth: "xl",
        title: l,
        content: /* @__PURE__ */ e.jsx(
          T,
          {
            entity: t,
            dataTest: "dialog-carousel-gallery",
            inDialog: !0,
            imageUrls: n,
            selectedImageItemIndex: a,
            setSelectedImageItemIndex: o
          }
        )
      }
    ),
    n.length > 0 && h ? /* @__PURE__ */ e.jsx(
      j,
      {
        "data-test": "images-list-gallery",
        width: "100%",
        maxWidth: s.typography.pxToRem(it),
        display: "flex",
        marginX: "auto",
        sx: n.length === 1 ? ct : void 0,
        children: /* @__PURE__ */ e.jsx(
          W,
          {
            sx: {
              borderRadius: 3,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              aspectRatio: at(n.length),
              overflow: "hidden"
            },
            variant: "quilted",
            cols: 48,
            gap: 8,
            children: y.map((c, m) => /* @__PURE__ */ e.jsxs(
              $,
              {
                cols: c.cols || 1,
                rows: c.rows || 1,
                onClick: () => o(m),
                role: "button",
                "aria-label": p("static-gallery-open-image-label", {
                  defaultValue: "View image {{index}} of {{total}}",
                  index: m + 1,
                  total: n.length
                }),
                sx: {
                  cursor: "pointer",
                  "&:hover": {
                    filter: "brightness(75%)"
                  }
                },
                children: [
                  m === 2 && n.length > 3 ? /* @__PURE__ */ e.jsx(
                    x,
                    {
                      sx: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0, 0.5)",
                        borderBottomRightRadius: s.borderRadiusVariants.M
                      },
                      children: /* @__PURE__ */ e.jsx(
                        M,
                        {
                          variant: "h4",
                          color: s.palette.common.white,
                          children: p("static-gallery-see-all-images-label", {
                            defaultValue: "See all {{imagesCount}} images",
                            imagesCount: n.length
                          })
                        }
                      )
                    }
                  ) : null,
                  /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      ...V(c.img, 121, c.rows, c.cols),
                      alt: c.title,
                      loading: m === 0 ? "eager" : "lazy",
                      fetchpriority: m === 0 ? "high" : "auto",
                      style: {
                        objectFit: "cover",
                        aspectRatio: "16 / 9"
                      }
                    }
                  )
                ]
              },
              c.img
            ))
          }
        )
      }
    ) : null,
    n.length > 0 && !h ? /* @__PURE__ */ e.jsx(
      T,
      {
        entity: t,
        dataTest: "images-carousel-gallery",
        imageUrls: n
      }
    ) : null,
    n.length === 0 ? /* @__PURE__ */ e.jsx(
      j,
      {
        "data-test": `${t}-image-placeholder`,
        sx: {
          marginInline: 0,
          marginBlockStart: -4
        },
        children: /* @__PURE__ */ e.jsx(
          H,
          {
            sx: {
              ...z,
              aspectRatio: "2 / 1",
              borderRadius: g ? 0 : 3,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0
            },
            iconWithText: {
              icon: "fa fa-calendar-check"
            }
          }
        )
      }
    ) : null
  ] });
};
export {
  wt as A,
  yt as B,
  jt as G
};
