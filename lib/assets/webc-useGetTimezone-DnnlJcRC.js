import { r } from "./webc-vendor-CvrN3tmw.js";
import { D as c } from "./webc-vendor-luxon-BX-Cdsu9.js";
import { u, L as g, aK as z } from "./webc-web-component-qMWWbTiu.js";
import { d as f } from "./webc-vendor-react-router-Tvle1imR.js";
const l = () => {
  const n = u().settings.calendar.timezone, o = r.useCallback(
    (t) => t?.timezone ?? n,
    [n]
  ), a = r.useCallback(
    (t) => {
      const s = o(t);
      return c.now().setZone(s).toFormat("Z");
    },
    [o]
  );
  return { getTimezone: o, getTimezoneOffset: a };
}, b = (e) => {
  const n = f(), { getTimezone: o } = l(), { data: a, isLoading: t } = g({
    orgSlug: n.orgSlug
  }), s = z(a);
  return r.useMemo(() => {
    const i = s(e), m = !!(e && (t || !i));
    return {
      timezone: o(i),
      isLoading: m
    };
  }, [e, o, s, t]);
};
export {
  b as u
};
