import { D as f } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { D as p, q as g, B as l } from "./webc-web-component-QV_kTZ_O.js";
import "./webc-vendor-BjE1NNvQ.js";
import "./webc-vendor-lodash-QZMGaMCX.js";
import { u as q } from "./webc-useGetTimezone--nBDhcAt.js";
import { f as x } from "./webc-utils-DpmTJmtV.js";
import { u as E } from "./webc-vendor-i18n-DYvJO9nR.js";
const v = ({
  periodStart: m,
  periodEnd: r,
  bookingMode: o,
  officeId: d
}) => {
  const { t: $ } = E(), { timezone: t } = q(d), a = m ? p(m).setZone(t, { keepLocalTime: !0 }) : f.utc().setZone(t), s = r ? p(r).setZone(t, { keepLocalTime: !0 }) : f.utc().setZone(t), { formatDateTime: n, formatDate: i } = g(), c = o === l.Date, u = o === l.Time, B = c ? i(a) : n(a), [e, Z] = B.split(" "), k = c ? i(s) : n(s), [D, L] = k.split(" "), T = x(a, s, $, o), y = e !== D ? `${e} - ${D}` : e, z = u ? `${Z} - ${L} (${T})` : `${y} (${T})`;
  return { startDate: e, duration: z, isBookingByTime: u };
};
export {
  v as u
};
