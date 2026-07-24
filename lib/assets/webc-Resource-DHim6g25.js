import { j as e, r as E, aL as $e } from "./webc-vendor-BjE1NNvQ.js";
import { d as p, p as j, M as y, c as Ge, a3 as He, a4 as Ve, a5 as We, l as Ue, T as Ce, Y as Xe, $ as Ze, _ as Ye, a6 as G, a7 as ze, j as Ke, e as qe, a8 as Qe } from "./webc-vendor-core-n5KM3lsu.js";
import { u as H, aw as Je, ax as et, ay as tt, ao as z } from "./webc-vendor-mui-BXZK0LVO.js";
import { l as I } from "./webc-vendor-lodash-QZMGaMCX.js";
import { $ as at, I as rt, D as ae, B as K, E as re, a0 as N, a1 as fe, a2 as Ee, q as ie, a3 as Ie, a4 as it, a5 as me, a6 as ot, c as B, d as ge, j as ct, a7 as st, Q as Se, a8 as lt, e as nt, a9 as dt, aa as Re, l as ut, n as je, t as pt, z as De, ab as pe, ac as F, ad as mt, ae as gt, u as xt, af as ht, ag as yt, S as ft, ah as te, ai as Ae, P as Et, s as At, aj as Te } from "./webc-web-component-QV_kTZ_O.js";
import { e as Tt } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { R as _t, a as wt } from "./webc-ResourceCapacity-BYULhYq1.js";
import { S as vt } from "./webc-SvgImage-CLmnBoeC.js";
import { a as ke, D as $ } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { p as bt } from "./webc-FloatingPanel-DbhWVcys.js";
import { u as L } from "./webc-vendor-i18n-DYvJO9nR.js";
import { L as Ct } from "./webc-LocalizationDate-Bg1t26_G.js";
import { u as It } from "./webc-useGetTimezone--nBDhcAt.js";
import { a as St, u as Rt } from "./webc-useScrollToTop-CVMrlcQ2.js";
import { M as jt } from "./webc-MapComponent-D3BsT_kZ.js";
import { g as Dt } from "./webc-google-maps-logo-B8movxuB.js";
import { u as kt, R as Bt } from "./webc-index-BfZq6WVX.js";
import { d as Be } from "./webc-vendor-react-router-W8U6ip5z.js";
import { A as Lt, B as Ot, G as Pt } from "./webc-Gallery-CbRdvv18.js";
import { R as ne, G as Ft, a as Mt } from "./webc-ResourceFloatingPanel-DGMZDufu.js";
import { H as Nt } from "./webc-HtmlComponent-DFkNEig6.js";
import { g as $t, a as Gt, c as _e, U as Ht } from "./webc-util.extras-DU4UoYi0.js";
import { u as Vt } from "./webc-useECommerceTracking-C3BLjDP-.js";
import { g as Wt, e as Ut, a as Xt } from "./webc-util.resource-Dn4W5OJn.js";
import { T as Zt, M as Yt, Z as zt } from "./webc-vendor-leaflet-BOYCAE5Z.js";
const Kt = ({ sx: t, ...r }) => {
  const a = H();
  return /* @__PURE__ */ e.jsx(
    Je,
    {
      renderLoading: () => /* @__PURE__ */ e.jsx(et, {}),
      ...r,
      sx: {
        "&.MuiDateCalendar-root": {
          width: "100%",
          "& .Mui-selected, & .Mui-selected:focus, & .Mui-selected:hover": {
            color: `${a.palette.common.white} !important`,
            backgroundColor: `${a.palette.primary.main} !important`
          },
          "& .MuiDayCalendarSkeleton-root": {
            width: "100%"
          }
        },
        "& .MuiDateCalendar-viewTransitionContainer": {
          "& > div > div": {
            justifyContent: "space-between !important",
            paddingInlineStart: 1.25,
            paddingInlineEnd: 1.25
          },
          "& div[role=row], & .MuiDayCalendarSkeleton-week": {
            paddingInlineStart: 1.25,
            paddingInlineEnd: 1.25,
            justifyContent: "space-between !important",
            marginBlockEnd: 1
          }
        },
        ...t
      }
    }
  );
}, qt = {
  position: "relative",
  width: "100%",
  minWidth: (t) => t.typography.pxToRem(60),
  height: 80,
  marginX: 0.5,
  display: "inline-flex"
}, Qt = {
  width: "100%",
  minWidth: (t) => t.typography.pxToRem(60),
  height: "80%",
  border: "1px solid ",
  borderColor: "border.base",
  borderTopLeftRadius: (t) => t.typography.pxToRem(8),
  borderTopRightRadius: (t) => t.typography.pxToRem(8)
}, Jt = ({ booked: t, selected: r, past: a, closed: i }, s) => {
  const n = r ? "primary.main" : t ? "secondary.main" : "transparent", d = t && r || i || a ? "secondary.main" : null;
  return {
    position: "absolute",
    top: 0,
    left: `${s * 25}%`,
    width: "25%",
    height: "80%",
    display: "flex",
    backgroundColor: d ?? n,
    borderColor: "border.base",
    borderTop: "1px",
    borderBottom: "1px",
    ...s === 0 && {
      borderLeft: "1px",
      borderTopLeftRadius: (l) => l.typography.pxToRem(8)
    },
    ...s === 3 && {
      borderRight: "1px",
      borderTopRightRadius: (l) => l.typography.pxToRem(8)
    }
  };
}, ea = {
  width: { xs: "100%", sm: "40%", md: "45%" },
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  spacing: 2,
  gap: 2
}, ta = {
  height: "auto",
  minHeight: (t) => t.typography.pxToRem(60),
  width: "80%",
  minWidth: (t) => t.typography.pxToRem(105),
  borderRadius: (t) => t.typography.pxToRem(16)
}, aa = ({ isBooked: t, isClosedDay: r, isPast: a, isFutureLimited: i, isWorkday: s, isSelected: o }, n) => {
  if (!a && !i && !t && !o && (!n || !r && s))
    return { border: (l) => `1px solid ${l.palette.border.base}` };
  if (t)
    return { textDecoration: "line-through" };
  if (!a && r)
    return {
      backgroundColor: (l) => l.palette.secondary.main,
      color: (l) => `${l.palette.secondary.contrastText} !important`
    };
}, ra = (t) => {
  const {
    day: r,
    timezone: a,
    businessHours: i,
    closedDaysIntervals: s,
    occurrencesIntervals: o,
    selectedDaysInterval: n,
    bookingMode: d,
    ...l
  } = t, { forBookings: m, forNonActiveMembers: c } = i, u = !!(m && c), { isPast: g, isFutureLimited: x, isToday: S, isWorkday: v, isClosedDay: A, isBooked: b, isSelected: T } = at({
    cellDate: r,
    businessHours: i,
    closedDaysIntervals: s,
    occurrencesIntervals: o,
    selectedDaysInterval: n,
    timezone: a,
    bookingMode: d
  });
  return /* @__PURE__ */ e.jsx(
    tt,
    {
      ...l,
      day: r,
      today: S,
      selected: T,
      disabled: g || x || b || u && (A || !v),
      sx: aa(
        { isPast: g, isFutureLimited: x, isWorkday: v, isClosedDay: A, isBooked: b, isSelected: T },
        u
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      )
    }
  );
}, ia = ({ items: t, forceRowDirection: r = !1 }) => /* @__PURE__ */ e.jsx(
  p,
  {
    paddingInlineStart: 6,
    paddingInlineEnd: 3,
    direction: { xs: "row", xl: r ? "row" : "column" },
    columnGap: 4,
    position: { xs: "relative", md: void 0 },
    flexWrap: { xs: "wrap", md: void 0 },
    children: I.map(t, ({ icon: a, iconColor: i, text: s }, o) => /* @__PURE__ */ e.jsx(
      rt,
      {
        icon: a,
        iconProps: { sx: { color: i } },
        noWrap: !0,
        children: s
      },
      o
    ))
  }
), oa = ({
  selectionStart: t,
  selectionEnd: r
}) => E.useMemo(() => {
  if (!t || !r)
    return null;
  const a = ae(t), i = ae(r);
  return ke.fromDateTimes(a, i);
}, [t, r]), ca = ({
  occurrences: t,
  bookingMode: r
}) => E.useMemo(
  () => I.compact(
    I.map(t, (a) => {
      const i = $.fromISO(a.start.dateTime, {
        zone: a.timezone
      }), s = $.fromISO(a.end.dateTime, { zone: a.timezone }).minus({ day: r === K.Date ? 1 : 0 });
      return ke.fromDateTimes(i, s);
    })
  ),
  [t, r]
), we = (t) => t.hour + t.minute / 60, sa = (t, r, a) => I.some(r, ({ start: i, end: s }) => {
  const o = $.fromISO(i.dateTime).setZone(a).toFormat("HH:mm"), n = $.fromISO(s.dateTime).setZone(a).toFormat("HH:mm");
  return t >= o && t < n;
}) ?? !1, la = (t, r) => {
  const { forBookings: a, forNonActiveMembers: i, days: s } = r, o = a && i;
  return I.includes(s, t.weekday) || !o;
}, de = (t, r, a) => I.some(
  a,
  (i) => (i.booked || i.closed) && i.dateTime >= t && i.dateTime < r
), na = (t, r, a, i) => {
  const s = r.hour + r.minute / 60, o = a.hour + a.minute / 60, n = (o - s) / 2, d = t.setZone(i, { keepLocalTime: !0 }), l = N(d, s), m = fe(
    N(d, s + n),
    Ee.Future
  ), c = fe(
    N(d, o),
    Ee.Future
  ), u = l.setZone("local", { keepLocalTime: !0 }), g = m.setZone("local", { keepLocalTime: !0 });
  let x;
  return o === 0 || !c.hasSame(d, "day") ? x = t.plus({ days: 1 }).startOf("day") : x = c.setZone("local", { keepLocalTime: !0 }), {
    morning: { start: u, end: g },
    afternoon: { start: g, end: x },
    fullDay: { start: u, end: x }
  };
}, ue = (t, r, a, i, s, o) => (
  // DateTime objects are already in local timezone
  {
    title: t,
    rndDataId: `${re.PUBLIC}-${r}`,
    start: a,
    end: i,
    disabled: s,
    duration: o
  }
), da = (t, r, a, i, s) => {
  const { formatDateTime: o } = ie();
  return E.useMemo(() => {
    const n = [], d = $.now(), l = d.setZone(i), m = a.start ?? d, { startOfDay: c, endOfDay: u } = Ie(m, r), g = m.setZone(i, { keepLocalTime: !0 }), x = it(
      r.closedDays,
      t,
      g,
      i
    ), S = we(c), v = we(u), A = N(m, S), b = N(m, v);
    let T = N(m, Math.floor(S));
    const V = N(m, Math.ceil(v));
    for (; T < V; ) {
      const _ = T, W = _.toFormat("HH:mm"), O = _.setZone(i, { keepLocalTime: !0 });
      n.push({
        time: o(_, !0),
        dateTime: _,
        past: O < l,
        // Compare in resource timezone
        closed: x.some((P) => P.contains(O)) || _ < A || _ >= b,
        selected: a.start !== null && a.end !== null && _ >= a.start && _ < a.end,
        booked: sa(W, s, i)
      }), T = T.plus({ minutes: 15 });
    }
    return n;
  }, [
    a.start,
    a.end,
    i,
    r,
    t,
    s,
    o
  ]);
}, ua = ({ slots: t }) => {
  const r = H(), i = !z(
    r.breakpoints.up(me)
  ), s = $e(bt), o = ot(() => {
    i && s(!0);
  });
  return /* @__PURE__ */ e.jsx(
    j,
    {
      "rnd-data-id": `${re.PUBLIC}-${B.DETAILS_AVAILABILITY_TIMELINE_COMPONENT}`,
      onClick: o,
      role: i ? "button" : void 0,
      "aria-label": i ? "View availability details" : void 0,
      tabIndex: i ? 0 : void 0,
      onKeyDown: i ? (n) => {
        (n.key === "Enter" || n.key === " ") && (n.preventDefault(), o());
      } : void 0,
      sx: {
        overflow: "auto",
        width: "100%"
      },
      children: /* @__PURE__ */ e.jsx(
        p,
        {
          direction: "row",
          paddingY: 2,
          whiteSpace: "nowrap",
          children: t.map((n, d) => d % 4 !== 0 ? null : /* @__PURE__ */ e.jsxs(
            j,
            {
              sx: qt,
              children: [
                /* @__PURE__ */ e.jsx(j, { sx: Qt, children: I.times(4, (l) => {
                  const m = t[d + l];
                  return m ? /* @__PURE__ */ e.jsx(
                    j,
                    {
                      sx: Jt(m, l)
                    },
                    m.time
                  ) : null;
                }) }),
                /* @__PURE__ */ e.jsx(
                  y,
                  {
                    variant: "caption",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    children: n.time
                  }
                )
              ]
            },
            n.time
          ))
        }
      )
    }
  );
}, pa = (t, r, a, i) => {
  const { t: s } = L(), { formatDateTime: o } = ie();
  return E.useMemo(() => {
    if (!a.start)
      return [];
    const n = a.start, { startOfDay: d, endOfDay: l } = Ie(n, r), m = la(n, r), { morning: c, afternoon: u, fullDay: g } = na(
      n,
      d,
      l,
      i
    ), x = $.now().setZone(i), S = c.end.setZone(i, { keepLocalTime: !0 }), v = u.end.setZone(i, { keepLocalTime: !0 }), A = g.end.setZone(i, { keepLocalTime: !0 });
    return [
      ue(
        s("static-calendar-morning-booking-label", {
          defaultValue: "Morning Booking"
        }),
        B.DETAILS_MORNING_BOOKING_BUTTON,
        c.start,
        c.end,
        de(c.start, c.end, t) || !m || S <= x,
        `${o(c.start, !0)} - ${o(c.end, !0)}`
      ),
      ue(
        s("static-calendar-afternoon-booking-label", {
          defaultValue: "Afternoon Booking"
        }),
        B.DETAILS_AFTERNOON_BOOKING_BUTTON,
        u.start,
        u.end,
        de(u.start, u.end, t) || !m || v <= x,
        `${o(u.start, !0)} - ${o(u.end, !0)}`
      ),
      ue(
        s("static-calendar-full-day-booking-label", {
          defaultValue: "Full Day Booking"
        }),
        B.DETAILS_FULL_DAY_BOOKING_BUTTON,
        g.start,
        g.end,
        de(g.start, g.end, t) || !m || A <= x,
        `${o(g.start, !0)} - ${o(g.end, !0)}`
      )
    ];
  }, [a, r, o, t, s, i]);
}, ma = ({ reducer: t, periods: r, sx: a }) => {
  const [i, s] = t, { trackPublicEvent: o } = ge(), n = (l) => {
    const { start: m, end: c, title: u, duration: g } = l;
    s({
      type: "SET_PERIOD_START",
      payload: m
    }), s({
      type: "SET_PERIOD_END",
      payload: c
    }), o(ct.DETAILS_DAY_PERIOD_BUTTON, { period: u, duration: g });
  }, d = (l) => i.start?.toLocal().valueOf() === l.start.valueOf() && i.end?.toLocal().valueOf() === l.end.valueOf();
  return /* @__PURE__ */ e.jsx(
    p,
    {
      direction: { xs: "row", sm: "column" },
      sx: { ...ea, ...a },
      children: I.map(r, (l) => /* @__PURE__ */ e.jsx(
        Ge,
        {
          "rnd-data-id": l.rndDataId,
          onClick: () => n(l),
          variant: d(l) ? "contained" : "outlined",
          color: d(l) ? "primary" : "secondary",
          disabled: l.disabled,
          sx: ta,
          children: /* @__PURE__ */ e.jsxs(p, { children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                color: "inherit",
                variant: "groupTitle",
                children: l.title
              }
            ),
            /* @__PURE__ */ e.jsx(
              Ct,
              {
                dateTime: l.duration,
                textProps: {
                  color: "inherit",
                  variant: "caption",
                  sx: {
                    justifyContent: "center"
                  }
                }
              }
            )
          ] })
        },
        l.title
      ))
    }
  );
}, ve = 530, ga = (t, r, a, i, s) => a === K.Date && r && !t.hasSame(r, "day") ? `${i(t)} - ${i(r)}` : `${i(t)} (${t.toFormat("cccc", { locale: s })})`, xa = ({
  businessHours: t,
  timezone: r,
  bookingMode: a,
  showLegend: i = !0,
  selectionStart: s,
  selectionEnd: o,
  reducer: n,
  office: d
}) => {
  const {
    t: l,
    i18n: { language: m }
  } = L(), { formatDate: c } = ie(), [u, g] = n, [x, S] = E.useState(null), [v, A] = E.useState(null);
  E.useEffect(() => {
    if (!s || !o) {
      S(null), A(null);
      return;
    }
    S(
      ae(s).setZone(r, { keepLocalTime: !0 })
    ), A(
      ae(o).setZone(r, { keepLocalTime: !0 })
    );
  }, [s, o, r]);
  const b = (C) => {
    S(C.startOf("month").setZone("utc", { keepLocalTime: !0 })), A(C.endOf("month").setZone("utc", { keepLocalTime: !0 }));
  }, { data: T, isFetching: V } = st(
    x,
    v
  ), _ = E.useMemo(() => !u.start || a !== K.Time ? [] : T?.filter(({ start: C }) => {
    const Y = $.fromISO(C.dateTime, {
      zone: "utc"
    }).setZone(r);
    return u.start && Y.hasSame(u.start.setZone("local"), "month") && Y.hasSame(u.start.setZone("local"), "day");
  }) || [], [u.start, a, T, r]), W = ca({
    occurrences: T ?? [],
    bookingMode: a
  }), O = Se({
    businessHours: t,
    selectedOffice: [d]
  }), P = E.useMemo(
    () => lt(O, t, r),
    [O, t, r]
  ), oe = oa({
    selectionStart: s,
    selectionEnd: o
  }), f = H(), ce = z(f.breakpoints.down("sm")), D = z(
    f.breakpoints.between(me, "md")
  ), U = E.useMemo(
    () => [
      {
        icon: "fa fa-circle",
        iconColor: f.palette.primary.main,
        text: l("static-calendar-legend-your-selection-label", {
          defaultValue: "Your Selection"
        })
      },
      {
        icon: "far fa-circle",
        iconColor: f.palette.border.base,
        text: l("static-calendar-legend-available-label", {
          defaultValue: "Available"
        })
      },
      {
        icon: "fa fa-horizontal-rule",
        text: l("static-calendar-legend-booked-label", {
          defaultValue: "Booked"
        })
      },
      {
        icon: "fa fa-circle",
        iconColor: f.palette.secondary.main,
        text: l("static-calendar-legend-closed-label", {
          defaultValue: "Unavailable"
        })
      }
    ],
    [f, l]
  ), q = da(
    d,
    t,
    u,
    r,
    _
  ), X = pa(q, t, u, r), R = a === K.Time, k = i ? /* @__PURE__ */ e.jsx(
    ia,
    {
      items: U,
      forceRowDirection: R
    }
  ) : null, Q = D ? { width: "100%" } : void 0, M = R ? /* @__PURE__ */ e.jsx(
    ma,
    {
      reducer: n,
      periods: X,
      sx: Q
    }
  ) : null, J = R ? "100%" : void 0, Z = R ? /* @__PURE__ */ e.jsx(ua, { slots: q }) : null, ee = /* @__PURE__ */ e.jsx(
    Kt,
    {
      value: u.start,
      onChange: (C) => {
        C && g({
          type: "SET_PERIOD_DATE",
          payload: C
        });
      },
      sx: {
        maxWidth: f.typography.pxToRem(ve),
        minWidth: f.typography.pxToRem(280),
        marginInline: 0,
        // NOTE: The width of the calendar is responsive but not the height, setting the height is fine
        minHeight: f.typography.pxToRem(340),
        "& .MuiDayCalendar-slideTransition": {
          overflowY: "hidden"
        },
        font: "inherit",
        // NOTE: Fix for MUI DateCalendar not recalculating internal flex layout on sibling changes.
        // Without this, calendar elements bunch together when navigating to the page.
        "& .MuiDayCalendar-header, & .MuiDayCalendar-weekContainer, & .MuiDayCalendarSkeleton-week": {
          justifyContent: "space-between !important"
        }
      },
      timezone: "local",
      referenceDate: x ?? void 0,
      loading: V,
      onMonthChange: b,
      disablePast: !0,
      showDaysOutsideCurrentMonth: !0,
      slots: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        day: ra
      },
      slotProps: {
        day: {
          timezone: r,
          businessHours: t,
          closedDaysIntervals: P,
          occurrencesIntervals: W,
          selectedDaysInterval: oe,
          bookingMode: a
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
      }
    }
  );
  if (ce) {
    const C = u.start ? ga(
      u.start,
      u.end,
      a,
      c,
      m ?? "en"
    ) : l("static-select-date-label", { defaultValue: "Select date" });
    return /* @__PURE__ */ e.jsxs(
      p,
      {
        "data-test": "availability-calendar-container",
        alignItems: "flex-start",
        maxWidth: J,
        direction: "column",
        flexWrap: "wrap",
        rowGap: 4,
        children: [
          /* @__PURE__ */ e.jsxs(
            He,
            {
              defaultExpanded: !R,
              elevation: 0,
              sx: { "&:before": { display: "none" }, width: "100%" },
              children: [
                /* @__PURE__ */ e.jsx(
                  Ve,
                  {
                    title: C,
                    titleProps: { variant: "h4" }
                  }
                ),
                /* @__PURE__ */ e.jsxs(We, { sx: { padding: 0 }, children: [
                  ee,
                  k
                ] })
              ]
            }
          ),
          M,
          Z
        ]
      }
    );
  }
  return /* @__PURE__ */ e.jsxs(
    p,
    {
      "data-test": "availability-calendar-container",
      alignItems: { xs: "flex-start", xl: "center" },
      maxWidth: J,
      direction: { xs: "column", xl: R ? "column" : "row" },
      flexWrap: "wrap",
      rowGap: 1,
      children: [
        /* @__PURE__ */ e.jsxs(
          p,
          {
            direction: D ? "column" : "row",
            width: "100%",
            maxWidth: R ? void 0 : f.typography.pxToRem(ve),
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: "center",
            alignItems: "center",
            rowGap: 1,
            children: [
              ee,
              M
            ]
          }
        ),
        k,
        Z
      ]
    }
  );
}, ha = 5, ya = ({
  resourceId: t,
  office: r,
  timezone: a
}) => {
  const { data: i } = kt({ office: r, timezone: a }), s = I.take(
    I.filter(i, (o) => o._id !== t),
    ha
  );
  return I.sortBy(s, (o) => o.size);
}, fa = ({
  resource: { _id: t, name: r, rate: a, cardImage: i },
  searchStart: s,
  searchEnd: o,
  capacity: n,
  type: d,
  amenities: l
}) => {
  const { t: m } = L(), c = nt(), u = Be(), { getImageUrl: g } = E.useContext(Ue), { trackPublicEvent: x } = ge(), S = St(), v = () => {
    x(B.DETAILS_ALSO_AVAILABLE_CARD), c(
      `/${u.orgSlug}/resources/${t}?${pt({
        periodStart: s,
        periodEnd: o,
        capacity: n,
        amenities: l,
        type: d
      })}`,
      { state: { showBackButton: !0 } }
    ), S();
  };
  return /* @__PURE__ */ e.jsxs(
    Ce,
    {
      sx: {
        width: "100%",
        cursor: "pointer",
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: 6
        }
      },
      onClick: v,
      children: [
        /* @__PURE__ */ e.jsx(j, { position: "relative", children: i ? /* @__PURE__ */ e.jsx(
          Xe,
          {
            component: "img",
            image: g(i, {
              width: Re,
              // NOTE: User-defined image might not follow the 16:9 aspect ratio; set the height but do not specify cropping rules
              // so ImageKit resizes the image to fit within the specified dimensions while preserving the original aspect ratio.
              // This might leave empty space (letterboxing) if the image isn’t naturally 16:9; otherwise, it is possible that
              // the generated image height is less than the container height leading to blurred image.
              height: dt
            }),
            alt: "Also available resource",
            sx: {
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              objectFit: "cover",
              aspectRatio: "16 / 9"
            }
          }
        ) : /* @__PURE__ */ e.jsx(
          ut,
          {
            sx: { aspectRatio: "16 / 9", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
            iconWithText: {
              icon: "fa fa-calendar-check"
            }
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          Ze,
          {
            variant: "resource",
            sx: { paddingInline: 6, paddingBlockStart: 8, paddingBlockEnd: 6 },
            children: /* @__PURE__ */ e.jsx(
              Ye,
              {
                sx: { padding: 0 },
                title: /* @__PURE__ */ e.jsxs(
                  p,
                  {
                    alignItems: "flex-start",
                    gap: 2,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        y,
                        {
                          sx: je,
                          title: r,
                          variant: "groupTitle",
                          children: m(`resource-${t}-name`, {
                            defaultValue: r
                          })
                        }
                      ),
                      a ? /* @__PURE__ */ e.jsx(
                        Bt,
                        {
                          rate: a,
                          typographyProps: { variant: "body" }
                        }
                      ) : null
                    ]
                  }
                ),
                disableTypography: !0
              }
            )
          }
        )
      ]
    }
  );
}, Ea = ({
  resources: t,
  searchStart: r,
  searchEnd: a,
  capacity: i,
  type: s,
  amenities: o
}) => {
  const { t: n } = L();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      y,
      {
        variant: "h4",
        textAlign: "center",
        children: n("static-also-available-label", {
          defaultValue: "Also available:"
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      y,
      {
        variant: "body",
        textAlign: "center",
        sx: { marginBlockEnd: 2, display: "block" },
        children: n("static-also-available-hint", {
          defaultValue: "More options matching your criteria at the same location."
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      p,
      {
        direction: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 4, sm: 6 },
        children: I.map(t, (d) => /* @__PURE__ */ e.jsx(
          j,
          {
            display: "flex",
            flex: (l) => `0 0 min(calc(50% - 8px), ${l.typography.pxToRem(
              Re
            )})`,
            "data-test": "also-available-resource",
            children: /* @__PURE__ */ e.jsx(
              fa,
              {
                resource: d,
                searchStart: r,
                searchEnd: a,
                capacity: i,
                type: s,
                amenities: o
              }
            )
          },
          d._id
        ))
      }
    )
  ] });
}, Aa = 1, Ta = 3, _a = 100, wa = ({ category: t }) => {
  const { t: r } = L(), a = H(), i = a.palette.getContrastText(
    a.palette.background.main || a.palette.common.white
  ), s = $t({
    t: r,
    categoryId: t?._id,
    categoryName: t?.name
  }), o = Gt({
    t: r,
    categoryId: t?._id,
    categoryDescription: t?.description
  });
  return /* @__PURE__ */ e.jsxs(
    p,
    {
      sx: {
        gap: 4,
        paddingBlockStart: 8,
        paddingBlockEnd: 6,
        paddingInline: 6,
        borderRadius: a.borderRadiusVariants.M,
        backgroundColor: a.palette.background.main,
        minHeight: a.typography.pxToRem(_a)
      },
      children: [
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: G.H4,
            color: i,
            sx: _e(Aa),
            children: s
          }
        ),
        /* @__PURE__ */ e.jsx(
          y,
          {
            variant: G.BODY,
            color: i,
            sx: _e(Ta),
            children: o
          }
        )
      ]
    }
  );
}, va = ({ extras: t, amenities: r }) => {
  const { t: a } = L(), s = `extras?${De().toString()}`;
  return I.isEmpty(t) && I.isEmpty(r) ? null : /* @__PURE__ */ e.jsxs(p, { gap: 6, children: [
    !!t?.length && /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
      /* @__PURE__ */ e.jsx(y, { variant: G.H2, children: a("static-extras-and-amenities-title", {
        defaultValue: "Extras & Amenities"
      }) }),
      /* @__PURE__ */ e.jsx(y, { variant: G.BODY, children: a("static-extras-and-amenities-description", {
        defaultValue: "Browse extras and add them to your booking"
      }) })
    ] }),
    t?.length ? /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
      /* @__PURE__ */ e.jsxs(
        p,
        {
          direction: "row",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          children: [
            /* @__PURE__ */ e.jsx(
              y,
              {
                variant: G.H4,
                color: "text.secondary",
                children: a("static-extras-label", {
                  defaultValue: "Available Extras"
                })
              }
            ),
            /* @__PURE__ */ e.jsx(
              ze,
              {
                variant: "outlined",
                color: "secondary",
                to: s,
                "rnd-data-id": `${re.PUBLIC}-${B.DETAILS_BROWSE_EXTRAS_BUTTON}`,
                children: a("static-browse-and-add-extras-button", {
                  defaultValue: "Browse & Add Extras"
                })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        j,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)"
            },
            gap: 4
          },
          children: t.map((o) => /* @__PURE__ */ e.jsx(
            wa,
            {
              category: o.category
            },
            o.category?._id || Ht
          ))
        }
      )
    ] }) : null,
    r?.length ? /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
      /* @__PURE__ */ e.jsx(
        y,
        {
          variant: G.H4,
          color: "text.secondary",
          children: a("static-amenities-label", {
            defaultValue: "Amenities"
          })
        }
      ),
      /* @__PURE__ */ e.jsx(
        Lt,
        {
          dataTestId: "resource-amenities",
          amenities: r
        }
      )
    ] }) : null
  ] });
}, ba = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207096'%3e%3cg%20id='Frame%207077'%3e%3cellipse%20id='Ellipse%2021'%20cx='8'%20cy='24.5'%20rx='3'%20ry='3'%20transform='rotate(90%208%2024.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207095'%3e%3cg%20id='Frame%207093'%3e%3cg%20id='Frame%207075'%3e%3ccircle%20id='Ellipse%2020'%20cx='20'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_2'%20cx='30'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207074'%3e%3ccircle%20id='Ellipse%2020_2'%20cx='40'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_3'%20cx='50'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207100'%3e%3crect%20id='Rectangle%203463321'%20x='13'%20y='16'%20width='44'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3crect%20id='Rectangle%203463322'%20x='13'%20y='25'%20width='44'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207094'%3e%3cg%20id='Frame%207072'%3e%3ccircle%20id='Ellipse%2020_3'%20cx='20'%20cy='38'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_4'%20cx='30'%20cy='38'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207073'%3e%3ccircle%20id='Ellipse%2020_4'%20cx='40'%20cy='38'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_5'%20cx='50'%20cy='38'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207076'%3e%3cellipse%20id='Ellipse%2021_6'%20cx='62'%20cy='24.5'%20rx='3'%20ry='3'%20transform='rotate(90%2062%2024.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ca = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207102'%3e%3cg%20id='Group%201'%3e%3ccircle%20id='Ellipse%208'%20cx='24'%20cy='30'%20r='6'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2015'%20cx='29'%20cy='40'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2016'%20cx='19'%20cy='40'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2013'%20cx='35'%20cy='32'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2014'%20cx='13'%20cy='32'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Group%202'%3e%3ccircle%20id='Ellipse%208_2'%20cx='46'%20cy='12'%20r='6'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2015_2'%20cx='51'%20cy='22'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2016_2'%20cx='41'%20cy='22'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2013_2'%20cx='57'%20cy='14'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2014_2'%20cx='35'%20cy='14'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ia = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207073'%3e%3crect%20id='Rectangle%203463320'%20x='4'%20y='6'%20width='28'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072'%3e%3ccircle%20id='Ellipse%2020'%20cx='13'%20cy='19'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021'%20cx='23'%20cy='19'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207074'%3e%3crect%20id='Rectangle%203463320_2'%20x='38'%20y='6'%20width='28'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072_2'%3e%3ccircle%20id='Ellipse%2020_2'%20cx='47'%20cy='19'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_2'%20cx='57'%20cy='19'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207075'%3e%3crect%20id='Rectangle%203463320_3'%20x='4'%20y='28'%20width='28'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072_3'%3e%3ccircle%20id='Ellipse%2020_3'%20cx='13'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_3'%20cx='23'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207076'%3e%3crect%20id='Rectangle%203463320_4'%20x='38'%20y='28'%20width='28'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072_4'%3e%3ccircle%20id='Ellipse%2020_4'%20cx='47'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_4'%20cx='57'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Sa = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207085'%3e%3cg%20id='Frame%207117'%3e%3cg%20id='Frame%207114'%3e%3cg%20id='Frame%207097'%3e%3ccircle%20id='Ellipse%2019'%20cx='12'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2017'%20cx='30'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2020'%20cx='48'%20cy='11'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207117_2'%3e%3cg%20id='Frame%207097_2'%3e%3ccircle%20id='Ellipse%2019_2'%20cx='22'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2017_2'%20cx='40'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2020_2'%20cx='58'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207118'%3e%3cg%20id='Frame%207097_3'%3e%3ccircle%20id='Ellipse%2019_3'%20cx='12'%20cy='39'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2017_3'%20cx='30'%20cy='39'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2020_3'%20cx='48'%20cy='39'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ra = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207092'%3e%3cg%20id='Frame%207072'%3e%3cellipse%20id='Ellipse%2020'%20cx='15'%20cy='19.5'%20rx='3'%20ry='3'%20transform='rotate(90%2015%2019.5)'%20fill='%239EA1A6'/%3e%3cellipse%20id='Ellipse%2021'%20cx='15'%20cy='29.5'%20rx='3'%20ry='3'%20transform='rotate(90%2015%2029.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207091'%3e%3cg%20id='Frame%207072_2'%3e%3cellipse%20id='Ellipse%2020_2'%20cx='39.5'%20cy='5'%20rx='3'%20ry='3'%20transform='rotate(-180%2039.5%205)'%20fill='%239EA1A6'/%3e%3cellipse%20id='Ellipse%2021_2'%20cx='29.5'%20cy='5'%20rx='3'%20ry='3'%20transform='rotate(-180%2029.5%205)'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207090'%3e%3cg%20id='Frame%207088'%3e%3crect%20id='Rectangle%203463320'%20x='28'%20y='10'%20width='20'%20height='8'%20rx='2'%20transform='rotate(90%2028%2010)'%20fill='%239EA1A6'/%3e%3crect%20id='Rectangle%203463320_2'%20x='20'%20y='31'%20width='20'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207089'%3e%3crect%20id='Rectangle%203463320_3'%20x='41'%20y='39'%20width='20'%20height='8'%20rx='2'%20transform='rotate(-90%2041%2039)'%20fill='%239EA1A6'/%3e%3crect%20id='Rectangle%203463320_4'%20x='49'%20y='18'%20width='20'%20height='8'%20rx='2'%20transform='rotate(180%2049%2018)'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207072_3'%3e%3ccircle%20id='Ellipse%2020_3'%20cx='29.5'%20cy='44'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_3'%20cx='39.5'%20cy='44'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207072_4'%3e%3cellipse%20id='Ellipse%2020_4'%20cx='54'%20cy='29.5'%20rx='3'%20ry='3'%20transform='rotate(-90%2054%2029.5)'%20fill='%239EA1A6'/%3e%3cellipse%20id='Ellipse%2021_4'%20cx='54'%20cy='19.5'%20rx='3'%20ry='3'%20transform='rotate(-90%2054%2019.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ja = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201'%3e%3ccircle%20id='Ellipse%208'%20cx='35'%20cy='25'%20r='9'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%209'%20cx='44'%20cy='8'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2015'%20cx='44'%20cy='42'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2012'%20cx='26'%20cy='8'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2016'%20cx='26'%20cy='42'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2010'%20cx='53'%20cy='16'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2013'%20cx='53'%20cy='34'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2011'%20cx='17'%20cy='16'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2014'%20cx='17'%20cy='34'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/svg%3e", Da = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207085'%3e%3cg%20id='Frame%207112'%3e%3ccircle%20id='Ellipse%2019'%20cx='10'%20cy='9'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2020'%20cx='24'%20cy='9'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2023'%20cx='10'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2024'%20cx='24'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2027'%20cx='10'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2028'%20cx='24'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3cg%20id='Frame%207113'%3e%3ccircle%20id='Ellipse%2019_2'%20cx='46'%20cy='9'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2020_2'%20cx='60'%20cy='9'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2023_2'%20cx='46'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2024_2'%20cx='60'%20cy='25'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2027_2'%20cx='46'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2028_2'%20cx='60'%20cy='41'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ka = "data:image/svg+xml,%3csvg%20width='70'%20height='50'%20viewBox='0%200%2070%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%207103'%3e%3cg%20id='Frame%207073'%3e%3crect%20id='Rectangle%203463320'%20x='26'%20y='6'%20width='29'%20height='8'%20rx='2'%20transform='rotate(90%2026%206)'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072'%3e%3cellipse%20id='Ellipse%2020'%20cx='13'%20cy='15.5'%20rx='3'%20ry='3'%20transform='rotate(90%2013%2015.5)'%20fill='%239EA1A6'/%3e%3cellipse%20id='Ellipse%2021'%20cx='13'%20cy='25.5'%20rx='3'%20ry='3'%20transform='rotate(90%2013%2025.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207074'%3e%3crect%20id='Rectangle%203463320_2'%20x='45'%20y='35'%20width='29'%20height='8'%20rx='2'%20transform='rotate(-90%2045%2035)'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072_2'%3e%3cellipse%20id='Ellipse%2020_2'%20cx='58'%20cy='25.5'%20rx='3'%20ry='3'%20transform='rotate(-90%2058%2025.5)'%20fill='%239EA1A6'/%3e%3cellipse%20id='Ellipse%2021_2'%20cx='58'%20cy='15.5'%20rx='3'%20ry='3'%20transform='rotate(-90%2058%2015.5)'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3cg%20id='Frame%207075'%3e%3crect%20id='Rectangle%203463320_3'%20x='27'%20y='30'%20width='17'%20height='8'%20rx='2'%20fill='%239EA1A6'/%3e%3cg%20id='Frame%207072_3'%3e%3ccircle%20id='Ellipse%2020_3'%20cx='30.5'%20cy='43'%20r='3'%20fill='%239EA1A6'/%3e%3ccircle%20id='Ellipse%2021_3'%20cx='40.5'%20cy='43'%20r='3'%20fill='%239EA1A6'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ba = {
  [F.Boardroom]: ba,
  [F.Cabaret]: Ca,
  [F.Cocktail]: Sa,
  [F.Classroom]: Ia,
  [F.HollowSquare]: Ra,
  [F.RoundTable]: ja,
  [F.Theatre]: Da,
  [F.UShape]: ka
}, La = 70 / 50, Oa = ({ layout: t, height: r = 50 }) => {
  const { t: a } = L();
  return /* @__PURE__ */ e.jsx(
    "img",
    {
      src: Ba[t],
      alt: a("static-resource-layout-alt", {
        defaultValue: "{{name}} layout",
        name: pe(a, t)
      }),
      width: Math.round(r * La),
      height: r
    }
  );
}, Pa = 29, Fa = 200, Ma = 12, Na = 16, $a = 12, Ga = 72, be = 32, Ha = 16, Va = 2, Wa = (t, r) => r.capacity != null ? t("static-layout-card-title", {
  defaultValue: "{{name}} for {{capacity}} people",
  name: pe(t, r.name),
  capacity: r.capacity
}) : pe(t, r.name), Ua = ({
  resourceId: t,
  layouts: r,
  selectedLayout: a,
  onSelectLayout: i
}) => {
  const { t: s } = L(), o = H();
  return r.length === 0 ? null : /* @__PURE__ */ e.jsxs(
    p,
    {
      "data-test": "layout-selection",
      sx: { rowGap: o.typography.pxToRem(Pa) },
      children: [
        /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
          /* @__PURE__ */ e.jsx(y, { variant: "h2", children: s("static-layout-selection-header", { defaultValue: "Layouts" }) }),
          /* @__PURE__ */ e.jsx(y, { variant: "body", children: s("static-layout-selection-description", {
            defaultValue: "Choose how the space is arranged"
          }) })
        ] }),
        /* @__PURE__ */ e.jsx(
          j,
          {
            sx: {
              display: "grid",
              // 3 equal columns (md+), 1 on mobile. minmax(0,1fr) lets cards shrink so text can ellipsis.
              // An incomplete last row keeps the column width (no flex stretch): full rows are 1/3 each,
              // and a 2-card last row stays at 1/3, not 1/2.
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: 4
            },
            children: r.map((n) => {
              const d = n.name === a;
              return /* @__PURE__ */ e.jsxs(
                Ce,
                {
                  "data-test": `layout-card-${n.name}`,
                  role: "button",
                  tabIndex: 0,
                  "aria-pressed": d,
                  onClick: () => i(n.name),
                  onKeyDown: (l) => {
                    (l.key === "Enter" || l.key === " ") && (l.preventDefault(), i(n.name));
                  },
                  sx: {
                    cursor: "pointer",
                    position: "relative",
                    // Fixed card height so cards stay uniform regardless of description length.
                    height: o.typography.pxToRem(Fa),
                    // Card is the content column: icon-row + text-group, vertically centered, 8px gap.
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    backgroundColor: "background.paper",
                    borderRadius: o.typography.pxToRem($a),
                    paddingInline: 4,
                    paddingBlock: 3,
                    // 1px divider unselected, 2px primary when selected (box-sizing keeps the outer size fixed).
                    // `&&` doubles the root-class specificity so this wins over the core-ui Card's own border.
                    "&&": {
                      // Cards are flat (border only) — drop the core-ui Card's default elevation shadow.
                      boxShadow: "none",
                      borderStyle: "solid",
                      borderWidth: d ? 2 : 1,
                      borderColor: d ? "primary.main" : "divider"
                    }
                  },
                  children: [
                    d ? /* @__PURE__ */ e.jsx(
                      p,
                      {
                        "data-test": `layout-card-check-${n.name}`,
                        alignItems: "center",
                        justifyContent: "center",
                        sx: {
                          // Badge floats in the top-right of the card padding and takes no layout space,
                          // so the icon stays vertically centered.
                          position: "absolute",
                          insetBlockStart: o.typography.pxToRem(Ma),
                          insetInlineEnd: o.typography.pxToRem(Na),
                          width: o.typography.pxToRem(be),
                          height: o.typography.pxToRem(be),
                          padding: 1,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          border: 2,
                          borderColor: "background.paper",
                          color: "common.white"
                        },
                        children: /* @__PURE__ */ e.jsx(
                          Ke,
                          {
                            icon: "fas fa-check",
                            sx: { fontSize: o.typography.pxToRem(Ha) }
                          }
                        )
                      }
                    ) : null,
                    /* @__PURE__ */ e.jsx(j, { sx: { display: "flex", justifyContent: "center", width: "100%" }, children: /* @__PURE__ */ e.jsx(
                      Oa,
                      {
                        layout: n.name,
                        height: Ga
                      }
                    ) }),
                    /* @__PURE__ */ e.jsxs(
                      p,
                      {
                        gap: 2,
                        alignItems: "center",
                        width: "100%",
                        children: [
                          /* @__PURE__ */ e.jsx(
                            y,
                            {
                              variant: "groupTitle",
                              sx: {
                                color: "text.secondary",
                                textAlign: "center",
                                maxWidth: "100%",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                              },
                              children: Wa(s, n)
                            }
                          ),
                          n.description ? /* @__PURE__ */ e.jsx(
                            y,
                            {
                              variant: "body",
                              sx: {
                                color: "text.primary",
                                textAlign: "center",
                                width: "100%",
                                // Clamp to 2 lines with an ellipsis (shared textTruncateStyles) so a description
                                // spanning more than 2 lines truncates instead of breaking the fixed card height.
                                ...je,
                                WebkitLineClamp: Va
                              },
                              children: s(`resource-${t}-layout-${n.name}-description`, {
                                defaultValue: n.description
                              })
                            }
                          ) : null
                        ]
                      }
                    )
                  ]
                },
                n.name
              );
            })
          }
        )
      ]
    }
  );
}, yr = () => {
  const { t } = L(), r = Be(), a = De(), i = a.get("periodStart"), s = a.get("periodEnd"), o = a.get("capacity"), n = a.get("amenities"), d = a.get("type"), { trackPublicEvent: l } = ge(), { trackECommerceEvent: m } = Vt(), { data: c } = mt(r.orgSlug, r.resourceId), { data: u } = gt({
    orgSlug: r.orgSlug,
    resourceId: r.resourceId
  }), g = c?.office.physicalAddress?.mapUrl, {
    settings: {
      businessHours: x,
      calendar: { culture: S },
      billing: { invoicingVat: v }
    }
  } = xt(), { timezone: A } = It(c.office._id), b = H(), T = E.useMemo(() => c.layouts ?? [], [c.layouts]), V = a.get("layout"), [_, W] = E.useState(
    T.find((h) => h.name === V)?.name ?? null
  ), O = a.get("guestCount"), P = O != null ? Number(O) : NaN, oe = Number.isInteger(P) && P >= Ft && P <= Mt ? P : null, [f, ce] = E.useState(oe), D = T.length > 0, U = T.find((h) => h.name === _), q = U?.capacity != null && f != null && f > U.capacity, X = {
    selectedLayout: D ? _ : null,
    guestCount: D ? f : null,
    // The guest-count field shows whenever the resource has layouts — independent of whether one is
    // selected — so a buyer can enter a headcount without picking a layout.
    showGuestCount: D,
    isLayoutCapacityExceeded: q,
    selectedLayoutCapacity: U?.capacity ?? null,
    onGuestCountChange: ce
  }, R = z(
    b.breakpoints.up(me)
  ), k = z(b.breakpoints.down("sm")), Q = ht();
  let M;
  yt(c.office) && (M = [
    parseFloat(c.office.physicalAddress.latitude),
    parseFloat(c.office.physicalAddress.longitude)
  ]), Rt();
  const { localeFormat: J } = ie(), Z = c.office.businessHours ?? x, ee = Se({
    businessHours: Z,
    selectedOffice: [c.office._id]
    // Filter closed days for this resource's office
  }), C = ft({
    localeFormat: J,
    businessHours: Z,
    bookingMode: c.bookingMode,
    searchStart: i,
    searchEnd: s,
    closedDaysIntervals: ee
  }), [Y] = C, se = c.bookingMode === K.Time;
  E.useEffect(() => {
    const { start: h, end: w } = Y, Le = a.get("periodStart"), Oe = a.get("periodEnd"), Pe = h?.startOf("day") ? te(h.startOf("day")) : null, Fe = w?.endOf("day") ? te(w.endOf("day")) : null, Me = () => h ? se ? te(h) : Pe : null, Ne = () => w ? se ? te(w) : Fe : null, he = Me(), ye = Ne();
    Le === he && Oe === ye || Ae({
      periodStart: he,
      periodEnd: ye
    });
  }, [a, c.bookingMode, Y, se]), E.useEffect(() => {
    if (!D)
      return;
    const h = _ ?? null, w = f != null ? String(f) : null;
    a.get("layout") === h && a.get("guestCount") === w || Ae({ layout: h, guestCount: w });
  }, [a, D, _, f]);
  const xe = ya({
    resourceId: c._id,
    office: c.office._id,
    timezone: A
  }), le = E.useMemo(() => {
    const h = !I.isEmpty(c.rate?.extras);
    return {
      title: Wt({
        t,
        areExtrasAvailable: h,
        requiresApproval: c.rate?.bookingPolicy?.requiresApproval
      }),
      toPath: h ? "./extras" : "./checkout",
      rndDataId: `${re.PUBLIC}-${h ? B.DETAILS_NEXT_BUTTON : B.DETAILS_BOOK_NOW_BUTTON}`,
      onClick: (w) => {
        h || (m("add_to_cart", [
          Ut(w.resource, w.price)
        ]), l(
          Xt(w.resource.rate?.bookingPolicy?.requiresApproval),
          Tt(w.resource, w.searchStart, w.searchEnd)
        ));
      }
    };
  }, [t, c, m, l]);
  return /* @__PURE__ */ e.jsxs(
    p,
    {
      position: "relative",
      width: "100%",
      marginX: k ? 0 : "auto",
      paddingBlockStart: k ? 0 : 8,
      paddingInline: k ? 0 : 12,
      gap: 12,
      children: [
        /* @__PURE__ */ e.jsx(Et, { page: "detailed" }),
        /* @__PURE__ */ e.jsxs(
          qe,
          {
            sx: {
              paddingBlockStart: 4,
              paddingBlockEnd: k ? 0 : 12,
              width: "100%",
              maxWidth: b.typography.pxToRem(Te),
              marginX: "auto",
              borderRadius: k ? "0 !important" : void 0
            },
            elevation: 4,
            children: [
              /* @__PURE__ */ e.jsxs(
                j,
                {
                  sx: {
                    marginBlockStart: -4,
                    position: "relative",
                    "& ul": {
                      marginBlock: 0
                    }
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      Ot,
                      {
                        sx: {
                          position: "absolute",
                          top: 24,
                          left: 24
                        }
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      Pt,
                      {
                        title: t(`resource-${c._id}-name`, {
                          defaultValue: c.name
                        }),
                        images: c.images,
                        entity: "resource"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                p,
                {
                  width: "100%",
                  maxWidth: b.typography.pxToRem(Te),
                  marginInline: "auto",
                  paddingInline: { xs: 6, sm: 8, md: 12 },
                  paddingBlockStart: { xs: 6, sm: 8, md: 12 },
                  children: [
                    /* @__PURE__ */ e.jsx(p, { columnGap: 12, children: /* @__PURE__ */ e.jsxs(
                      p,
                      {
                        direction: "row",
                        flexWrap: R ? "nowrap" : "wrap",
                        gap: 6,
                        children: [
                          /* @__PURE__ */ e.jsxs(
                            p,
                            {
                              width: "100%",
                              maxWidth: R ? `calc(100% - ${b.typography.pxToRem(366)})` : void 0,
                              rowGap: 8,
                              marginBlockEnd: 8,
                              children: [
                                /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
                                  /* @__PURE__ */ e.jsx(
                                    y,
                                    {
                                      "data-test": "resource-name",
                                      variant: "h1",
                                      children: t(`resource-${c._id}-name`, {
                                        defaultValue: c.name
                                      })
                                    }
                                  ),
                                  /* @__PURE__ */ e.jsxs(
                                    p,
                                    {
                                      direction: "row",
                                      gap: 2,
                                      alignItems: "center",
                                      children: [
                                        c.size ? /* @__PURE__ */ e.jsx(_t, { size: c.size }) : null,
                                        c?.area ? /* @__PURE__ */ e.jsx(
                                          wt,
                                          {
                                            area: c.area,
                                            culture: S
                                          }
                                        ) : null
                                      ]
                                    }
                                  ),
                                  c.office.physicalAddress?.formattedAddress ? /* @__PURE__ */ e.jsxs(
                                    p,
                                    {
                                      direction: "row",
                                      gap: 2,
                                      alignItems: "center",
                                      children: [
                                        /* @__PURE__ */ e.jsx(
                                          y,
                                          {
                                            "data-test": "resource-address",
                                            variant: "body",
                                            children: t(
                                              `location-${c.office.accountId}-${c.office._id}-formatted-address`,
                                              {
                                                defaultValue: c.office.physicalAddress.formattedAddress
                                              }
                                            )
                                          }
                                        ),
                                        g ? /* @__PURE__ */ e.jsx(
                                          Qe,
                                          {
                                            "data-test": "google-maps-link",
                                            href: g,
                                            target: "_blank",
                                            children: /* @__PURE__ */ e.jsx(
                                              p,
                                              {
                                                alignItems: "center",
                                                justifyContent: "center",
                                                children: /* @__PURE__ */ e.jsx(
                                                  vt,
                                                  {
                                                    src: Dt,
                                                    style: At(b)
                                                  }
                                                )
                                              }
                                            )
                                          }
                                        ) : null
                                      ]
                                    }
                                  ) : null,
                                  c.description ? (
                                    // INFO: Wrapping in Typography in order for custom fonts to work
                                    /* @__PURE__ */ e.jsx(y, { variant: "body", children: /* @__PURE__ */ e.jsx(
                                      Nt,
                                      {
                                        "data-test": "resource-description",
                                        content: t(`resource-${c._id}-description`, {
                                          defaultValue: c.description
                                        }),
                                        color: "inherit",
                                        sx: {
                                          "*": {
                                            // force transparent background as text might be unreadable in dark theme
                                            background: "transparent !important",
                                            maxWidth: "100%",
                                            whiteSpace: "pre-wrap"
                                          }
                                        }
                                      }
                                    ) })
                                  ) : null
                                ] }),
                                /* @__PURE__ */ e.jsxs(p, { gap: 2, children: [
                                  /* @__PURE__ */ e.jsx(y, { variant: "h2", children: t("static-availability-section-header", { defaultValue: "Availability" }) }),
                                  /* @__PURE__ */ e.jsx(
                                    p,
                                    {
                                      direction: { xs: "column", sm: "row" },
                                      alignItems: "flex-start",
                                      children: /* @__PURE__ */ e.jsx(
                                        j,
                                        {
                                          width: "100%",
                                          flexGrow: 1,
                                          children: /* @__PURE__ */ e.jsx(
                                            xa,
                                            {
                                              businessHours: c.office.businessHours ?? x,
                                              timezone: A,
                                              bookingMode: c.bookingMode,
                                              selectionStart: i,
                                              selectionEnd: s,
                                              reducer: C,
                                              office: c.office._id
                                            }
                                          )
                                        }
                                      )
                                    }
                                  )
                                ] }),
                                D ? /* @__PURE__ */ e.jsx(
                                  p,
                                  {
                                    sx: {
                                      width: "100%"
                                    },
                                    children: /* @__PURE__ */ e.jsx(
                                      Ua,
                                      {
                                        resourceId: c._id,
                                        layouts: T,
                                        selectedLayout: _,
                                        onSelectLayout: (h) => W((w) => w === h ? null : h)
                                      }
                                    )
                                  }
                                ) : null,
                                /* @__PURE__ */ e.jsx(
                                  va,
                                  {
                                    extras: u,
                                    amenities: c.amenities
                                  }
                                ),
                                M && !k ? /* @__PURE__ */ e.jsx(p, { gap: 4, children: /* @__PURE__ */ e.jsx(
                                  j,
                                  {
                                    height: {
                                      xs: b.typography.pxToRem(360),
                                      xl: b.typography.pxToRem(540)
                                    },
                                    sx: {
                                      borderRadius: "12px",
                                      overflow: "hidden",
                                      marginBlockEnd: { xl: 6 }
                                    },
                                    "data-test": "leaflet-map-container",
                                    "rnd-data-id": B.DETAILS_MAP_COMPONENT,
                                    children: /* @__PURE__ */ e.jsxs(
                                      jt,
                                      {
                                        center: M,
                                        zoom: 19,
                                        zoomControl: !1,
                                        scrollWheelZoom: !1,
                                        style: { height: "100%", width: "100%" },
                                        children: [
                                          /* @__PURE__ */ e.jsx(
                                            Zt,
                                            {
                                              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            }
                                          ),
                                          /* @__PURE__ */ e.jsx(Yt, { position: M }),
                                          /* @__PURE__ */ e.jsx(zt, { position: "topright" })
                                        ]
                                      }
                                    )
                                  }
                                ) }) : null
                              ]
                            }
                          ),
                          R ? /* @__PURE__ */ e.jsx(
                            ne,
                            {
                              resource: c,
                              timezone: A,
                              invoicingVat: v,
                              orgBusinessHours: x,
                              periodRangeReducer: C,
                              proceedButton: le,
                              ...X
                            }
                          ) : null
                        ]
                      }
                    ) }),
                    !R && Q ? /* @__PURE__ */ e.jsx(
                      ne,
                      {
                        resource: c,
                        timezone: A,
                        invoicingVat: v,
                        orgBusinessHours: x,
                        periodRangeReducer: C,
                        proceedButton: le,
                        ...X
                      }
                    ) : null,
                    !R && !Q ? /* @__PURE__ */ e.jsx(
                      ne,
                      {
                        resource: c,
                        timezone: A,
                        invoicingVat: v,
                        orgBusinessHours: x,
                        periodRangeReducer: C,
                        proceedButton: le,
                        ...X
                      }
                    ) : null
                  ]
                }
              )
            ]
          }
        ),
        xe.length > 0 ? /* @__PURE__ */ e.jsx(p, { marginBlockEnd: 6, children: /* @__PURE__ */ e.jsx(
          Ea,
          {
            resources: xe,
            searchStart: i,
            searchEnd: s,
            capacity: o,
            type: d,
            amenities: n
          }
        ) }) : null
      ]
    }
  );
};
export {
  yr as Resource
};
