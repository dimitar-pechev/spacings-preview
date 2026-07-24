import { r as s, aI as e } from "./webc-vendor-CvrN3tmw.js";
import { i as r } from "./webc-web-component-qMWWbTiu.js";
import "./webc-vendor-lodash-BJv5POtF.js";
import { s as n } from "./webc-TooltipSwitch-C9UYN4QY.js";
import { l as a } from "./webc-vendor-react-router-Tvle1imR.js";
import { u as i } from "./webc-vendor-mui-C8wQ-7jG.js";
const p = "growth-hub", c = (t) => {
  const o = t?.getRootNode();
  if (o instanceof ShadowRoot)
    return o.host.closest(p) ?? o.host;
}, m = () => {
  const t = e(r), { popupContainer: o } = i();
  return s.useCallback(() => {
    n(t ? c(o) : void 0);
  }, [t, o]);
}, h = () => {
  const t = m(), o = a();
  s.useEffect(() => {
    o === "PUSH" && t();
  }, [o, t]);
};
export {
  m as a,
  h as u
};
