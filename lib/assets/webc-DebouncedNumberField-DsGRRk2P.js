import { r as e, j as d } from "./webc-vendor-BjE1NNvQ.js";
import { l as p } from "./webc-vendor-lodash-QZMGaMCX.js";
import { N as x } from "./webc-vendor-core-n5KM3lsu.js";
const R = ({
  debounce: o = 500,
  onChange: t,
  value: c,
  ...l
}) => {
  const [i, u] = e.useState(c);
  e.useEffect(() => {
    u(c);
  }, [c]);
  const a = e.useRef(t);
  e.useEffect(() => {
    a.current = t;
  }, [t]);
  const s = e.useMemo(
    () => o > 0 ? p.debounce(
      (...r) => a.current?.(...r),
      o
    ) : void 0,
    [o]
  );
  e.useEffect(
    () => () => {
      s?.cancel();
    },
    [s]
  );
  const m = e.useCallback(
    (r, f, n) => {
      u(r), s ? s(r, f, n) : t?.(r, f, n);
    },
    [s, t]
  );
  return /* @__PURE__ */ d.jsx(
    x,
    {
      ...l,
      value: i,
      onChange: m
    }
  );
};
export {
  R as D
};
