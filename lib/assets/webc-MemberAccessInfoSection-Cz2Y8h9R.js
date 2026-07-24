import { j as e } from "./webc-vendor-BjE1NNvQ.js";
import { d, M as a, a7 as v, c as b, ak as g } from "./webc-vendor-core-n5KM3lsu.js";
import { u as k, bb as C, p as m, b5 as p, I as n } from "./webc-web-component-QV_kTZ_O.js";
import "./webc-vendor-lodash-QZMGaMCX.js";
import { u } from "./webc-vendor-mui-BXZK0LVO.js";
import { u as f } from "./webc-vendor-i18n-DYvJO9nR.js";
class B extends Error {
  constructor(t) {
    super(t), this.name = "DirectAccessError";
  }
}
const I = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3crect%20width='22'%20height='22'%20x='13'%20y='13'%20fill='%23fff'/%3e%3cpolygon%20fill='%231e88e5'%20points='25.68,20.92%2026.688,22.36%2028.272,21.208%2028.272,29.56%2030,29.56%2030,18.616%2028.56,18.616'/%3e%3cpath%20fill='%231e88e5'%20d='M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168%20c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44%20c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64%20c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368%20C24.24,25.281,23.736,24.363,22.943,23.745z'/%3e%3cpolygon%20fill='%23fbc02d'%20points='34,42%2014,42%2013,38%2014,34%2034,34%2035,38'/%3e%3cpolygon%20fill='%234caf50'%20points='38,35%2042,34%2042,14%2038,13%2034,14%2034,34'/%3e%3cpath%20fill='%231e88e5'%20d='M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z'/%3e%3cpolygon%20fill='%23e53935'%20points='34,34%2034,42%2042,34'/%3e%3cpath%20fill='%231565c0'%20d='M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z'/%3e%3cpath%20fill='%231565c0'%20d='M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z'/%3e%3c/svg%3e", E = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%231976d2'%20d='M28,13h14.533C43.343,13,44,13.657,44,14.467v19.066C44,34.343,43.343,35,42.533,35H28V13z'/%3e%3crect%20width='14'%20height='15.542'%20x='28'%20y='17.958'%20fill='%23fff'/%3e%3cpolygon%20fill='%231976d2'%20points='27,44%204,39.5%204,8.5%2027,4'/%3e%3cpath%20fill='%23fff'%20d='M15.25,16.5c-3.176,0-5.75,3.358-5.75,7.5s2.574,7.5,5.75,7.5S21,28.142,21,24%20S18.426,16.5,15.25,16.5z%20M15,28.5c-1.657,0-3-2.015-3-4.5s1.343-4.5,3-4.5s3,2.015,3,4.5S16.657,28.5,15,28.5z'/%3e%3crect%20width='2.7'%20height='2.9'%20x='28.047'%20y='29.737'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='31.448'%20y='29.737'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='34.849'%20y='29.737'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='28.047'%20y='26.159'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='31.448'%20y='26.159'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='34.849'%20y='26.159'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='38.25'%20y='26.159'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='28.047'%20y='22.706'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='31.448'%20y='22.706'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='34.849'%20y='22.706'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='38.25'%20y='22.706'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='31.448'%20y='19.112'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='34.849'%20y='19.112'%20fill='%231976d2'/%3e%3crect%20width='2.7'%20height='2.9'%20x='38.25'%20y='19.112'%20fill='%231976d2'/%3e%3c/svg%3e", L = "data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M%2016.125%201%20C%2014.972%201.067%2013.648328%201.7093438%2012.861328%202.5273438%20C%2012.150328%203.2713438%2011.589359%204.3763125%2011.818359%205.4453125%20C%2013.071359%205.4783125%2014.329031%204.8193281%2015.082031%203.9863281%20C%2015.785031%203.2073281%2016.318%202.12%2016.125%201%20z%20M%2016.193359%205.4433594%20C%2014.384359%205.4433594%2013.628%206.5546875%2012.375%206.5546875%20C%2011.086%206.5546875%209.9076562%205.5136719%208.3476562%205.5136719%20C%206.2256562%205.5146719%203%207.4803281%203%2012.111328%20C%203%2016.324328%206.8176563%2021%208.9726562%2021%20C%2010.281656%2021.013%2010.599%2020.176969%2012.375%2020.167969%20C%2014.153%2020.154969%2014.536656%2021.011%2015.847656%2021%20C%2017.323656%2020.989%2018.476359%2019.367031%2019.318359%2018.082031%20C%2019.922359%2017.162031%2020.170672%2016.692344%2020.638672%2015.652344%20C%2017.165672%2014.772344%2016.474672%209.1716719%2020.638672%208.0136719%20C%2019.852672%206.6726719%2017.558359%205.4433594%2016.193359%205.4433594%20z'/%3e%3c/svg%3e", P = ({
  member: i,
  memberActionsToken: t,
  hasInvitedUser: o,
  promotionSection: x
}) => {
  const c = u(), r = k(), { t: s } = f(), {
    mutate: y,
    isPending: w,
    isSuccess: l,
    error: h
  } = C(r.slug, t);
  return /* @__PURE__ */ e.jsxs(
    d,
    {
      "data-test": "login-handler",
      gap: 3,
      sx: {
        padding: 6,
        borderRadius: c.typography.pxToRem(12),
        backgroundColor: c.palette.background.light,
        minHeight: i.hasUser ? c.typography.pxToRem(100) : c.typography.pxToRem(250)
      },
      children: [
        i?.hasUser && !o ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            a,
            {
              variant: "h4",
              color: c.palette.common.black,
              children: s("static-success-page-great-to-see-you-label", {
                defaultValue: "Great to see you!"
              })
            }
          ),
          /* @__PURE__ */ e.jsx(
            a,
            {
              marginBlockEnd: 2,
              variant: "body",
              color: c.palette.common.black,
              children: s("static-success-page-manage-memberships-hint", {
                defaultValue: "Log in to manage your memberships, quickly access your bookings and connect with your community."
              })
            }
          ),
          /* @__PURE__ */ e.jsx(
            v,
            {
              "data-test": "login-button",
              variant: "contained",
              target: "_blank",
              to: `${r.regionInfo.basePortalUrl}login`,
              sx: { ...m, width: "fit-content" },
              children: s("static-log-in-button-title", {
                defaultValue: "Log In"
              })
            }
          )
        ] }) : null,
        !i?.hasUser || o ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          x,
          !l && !o ? /* @__PURE__ */ e.jsxs(d, { gap: 1, children: [
            /* @__PURE__ */ e.jsx(
              b,
              {
                "data-test": "send-access-link-button",
                variant: "contained",
                loading: w,
                onClick: () => y(),
                sx: { ...m, width: "fit-content", marginBlockStart: 3 },
                children: s("static-success-page-send-access-link-button-title", {
                  defaultValue: "Send me Access Link"
                })
              }
            ),
            /* @__PURE__ */ e.jsx(a, { variant: "caption", children: s("static-success-page-receive-instructions-hint", {
              defaultValue: "By clicking, you'll receive an email with instructions to finish setting up your account."
            }) })
          ] }) : null
        ] }) : null,
        l && !i?.hasUser || o ? /* @__PURE__ */ e.jsx(
          g,
          {
            paddingBlockStart: 4,
            "data-test": "error-label",
            severity: "success",
            sx: p("success"),
            children: s("static-success-page-email-sent-hint", {
              defaultValue: "An email has been sent to the provided email address with instructions on how to create an account."
            })
          }
        ) : null,
        !l && h ? /* @__PURE__ */ e.jsx(
          g,
          {
            paddingBlockStart: 4,
            "data-test": "error-label",
            severity: "error",
            sx: p("error"),
            children: h.message
          }
        ) : null
      ]
    }
  );
}, T = () => {
  const i = u(), { t } = f();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      a,
      {
        variant: "h4",
        color: i.palette.common.black,
        children: t("static-success-page-member-portal-access-label", {
          defaultValue: "Member Portal Access"
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      a,
      {
        variant: "body",
        color: i.palette.common.black,
        children: t("static-success-page-experience-hint", {
          defaultValue: "Get the most out of your experience with our member portal!"
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      n,
      {
        gap: 3,
        variant: "caption",
        alignItems: "center",
        sx: { margin: 0 },
        iconProps: { color: "primary", fontSize: "medium" },
        icon: "fa fa-check",
        children: t("static-success-page-book-meeting-rooms-hint", {
          defaultValue: "Easily book meeting rooms"
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      n,
      {
        gap: 3,
        variant: "caption",
        alignItems: "center",
        sx: { margin: 0 },
        iconProps: { color: "primary", fontSize: "medium" },
        icon: "fa fa-check",
        children: t("static-success-page-connect-with-members-hint", {
          defaultValue: "Connect with other members"
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      n,
      {
        gap: 3,
        variant: "caption",
        alignItems: "center",
        sx: { margin: 0 },
        iconProps: { color: "primary", fontSize: "medium" },
        icon: "fa fa-check",
        children: t("static-success-page-manage-memberships-label", {
          defaultValue: "Manage your memberships"
        })
      }
    )
  ] });
};
export {
  B as D,
  P as L,
  T as M,
  L as a,
  I as g,
  E as o
};
