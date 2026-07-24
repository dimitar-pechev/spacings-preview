import { r as s, aI as e } from "./webc-vendor-BjE1NNvQ.js";
import { i as r } from "./webc-web-component-QV_kTZ_O.js";
import "./webc-vendor-lodash-QZMGaMCX.js";
import { s as n } from "./webc-TooltipSwitch-mJ4zm-ZB.js";
import { l as a } from "./webc-vendor-react-router-W8U6ip5z.js";
import { u as i } from "./webc-vendor-mui-BXZK0LVO.js";
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
