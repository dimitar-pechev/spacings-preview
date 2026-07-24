import { R as c, P as s } from "./webc-vendor-CvrN3tmw.js";
function G(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function K(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? G(Object(t), !0).forEach(function(n) {
      te(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function U(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(e) {
    return typeof e;
  } : U = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, U(r);
}
function te(r, e, t) {
  return e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function be(r, e) {
  if (r == null) return {};
  var t = {}, n = Object.keys(r), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(e.indexOf(o) >= 0) && (t[o] = r[o]);
  return t;
}
function Ce(r, e) {
  if (r == null) return {};
  var t = be(r, e), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (o = 0; o < a.length; o++)
      n = a[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function re(r, e) {
  return Pe(r) || we(r, e) || Oe(r, e) || je();
}
function Pe(r) {
  if (Array.isArray(r)) return r;
}
function we(r, e) {
  var t = r && (typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"]);
  if (t != null) {
    var n = [], o = !0, a = !1, u, p;
    try {
      for (t = t.call(r); !(o = (u = t.next()).done) && (n.push(u.value), !(e && n.length === e)); o = !0)
        ;
    } catch (i) {
      a = !0, p = i;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw p;
      }
    }
    return n;
  }
}
function Oe(r, e) {
  if (r) {
    if (typeof r == "string") return z(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return z(r, e);
  }
}
function z(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function je() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var v = function(e, t, n) {
  var o = !!n, a = c.useRef(n);
  c.useEffect(function() {
    a.current = n;
  }, [n]), c.useEffect(function() {
    if (!o || !e)
      return function() {
      };
    var u = function() {
      a.current && a.current.apply(a, arguments);
    };
    return e.on(t, u), function() {
      e.off(t, u);
    };
  }, [o, t, e, a]);
}, F = function(e) {
  var t = c.useRef(e);
  return c.useEffect(function() {
    t.current = e;
  }, [e]), t.current;
}, j = function(e) {
  return e !== null && U(e) === "object";
}, xe = function(e) {
  return j(e) && typeof e.then == "function";
}, Re = function(e) {
  return j(e) && typeof e.elements == "function" && typeof e.createToken == "function" && typeof e.createPaymentMethod == "function" && typeof e.confirmCardPayment == "function";
}, X = "[object Object]", ke = function r(e, t) {
  if (!j(e) || !j(t))
    return e === t;
  var n = Array.isArray(e), o = Array.isArray(t);
  if (n !== o) return !1;
  var a = Object.prototype.toString.call(e) === X, u = Object.prototype.toString.call(t) === X;
  if (a !== u) return !1;
  if (!a && !n) return e === t;
  var p = Object.keys(e), i = Object.keys(t);
  if (p.length !== i.length) return !1;
  for (var g = {}, h = 0; h < p.length; h += 1)
    g[p[h]] = !0;
  for (var S = 0; S < i.length; S += 1)
    g[i[S]] = !0;
  var l = Object.keys(g);
  if (l.length !== p.length)
    return !1;
  var O = e, P = t, C = function(k) {
    return r(O[k], P[k]);
  };
  return l.every(C);
}, ne = function(e, t, n) {
  return j(e) ? Object.keys(e).reduce(function(o, a) {
    var u = !j(t) || !ke(e[a], t[a]);
    return n.includes(a) ? (u && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), o) : u ? K(K({}, o || {}), {}, te({}, a, e[a])) : o;
  }, null) : null;
}, oe = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.", H = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oe;
  if (e === null || Re(e))
    return e;
  throw new Error(t);
}, Ae = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oe;
  if (xe(e))
    return {
      tag: "async",
      stripePromise: Promise.resolve(e).then(function(o) {
        return H(o, t);
      })
    };
  var n = H(e, t);
  return n === null ? {
    tag: "empty"
  } : {
    tag: "sync",
    stripe: n
  };
}, Le = function(e) {
  !e || !e._registerWrapper || !e.registerAppInfo || (e._registerWrapper({
    name: "react-stripe-js",
    version: "5.2.0"
  }), e.registerAppInfo({
    name: "react-stripe-js",
    version: "5.2.0",
    url: "https://stripe.com/docs/stripe-js/react"
  }));
}, W = /* @__PURE__ */ c.createContext(null);
W.displayName = "ElementsContext";
var ae = function(e, t) {
  if (!e)
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
  return e;
}, Ie = function(e) {
  var t = e.stripe, n = e.options, o = e.children, a = c.useMemo(function() {
    return Ae(t);
  }, [t]), u = c.useState(function() {
    return {
      stripe: a.tag === "sync" ? a.stripe : null,
      elements: a.tag === "sync" ? a.stripe.elements(n) : null
    };
  }), p = re(u, 2), i = p[0], g = p[1];
  c.useEffect(function() {
    var l = !0, O = function(C) {
      g(function(x) {
        return x.stripe ? x : {
          stripe: C,
          elements: C.elements(n)
        };
      });
    };
    return a.tag === "async" && !i.stripe ? a.stripePromise.then(function(P) {
      P && l && O(P);
    }) : a.tag === "sync" && !i.stripe && O(a.stripe), function() {
      l = !1;
    };
  }, [a, i, n]);
  var h = F(t);
  c.useEffect(function() {
    h !== null && h !== t && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
  }, [h, t]);
  var S = F(n);
  return c.useEffect(function() {
    if (i.elements) {
      var l = ne(n, S, ["clientSecret", "fonts"]);
      l && i.elements.update(l);
    }
  }, [n, S, i.elements]), c.useEffect(function() {
    Le(i.stripe);
  }, [i.stripe]), /* @__PURE__ */ c.createElement(W.Provider, {
    value: i
  }, o);
};
Ie.propTypes = {
  stripe: s.any,
  options: s.object
};
var Te = function(e) {
  var t = c.useContext(W);
  return ae(t, e);
}, Xe = function() {
  var e = Te("calls useElements()"), t = e.elements;
  return t;
};
s.func.isRequired;
var ie = /* @__PURE__ */ c.createContext(null);
ie.displayName = "CheckoutContext";
s.any, s.shape({
  clientSecret: s.oneOfType([s.string, s.instanceOf(Promise)]).isRequired,
  elementsOptions: s.object
}).isRequired;
var B = function(e) {
  var t = c.useContext(ie), n = c.useContext(W);
  if (t) {
    if (n)
      throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
    return t;
  } else
    return ae(n, e);
}, Ue = ["mode"], Ne = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, m = function(e, t) {
  var n = "".concat(Ne(e), "Element"), o = function(i) {
    var g = i.id, h = i.className, S = i.options, l = S === void 0 ? {} : S, O = i.onBlur, P = i.onFocus, C = i.onReady, x = i.onChange, k = i.onEscape, ce = i.onClick, le = i.onLoadError, pe = i.onLoaderStart, fe = i.onNetworksChange, de = i.onConfirm, ve = i.onCancel, me = i.onShippingAddressChange, ye = i.onShippingRateChange, he = i.onSavedPaymentMethodRemove, ge = i.onSavedPaymentMethodUpdate, A = B("mounts <".concat(n, ">")), L = "elements" in A ? A.elements : null, w = "checkoutState" in A ? A.checkoutState : null, E = w?.type === "success" || w?.type === "loading" ? w.sdk : null, Se = c.useState(null), $ = re(Se, 2), f = $[0], Ee = $[1], b = c.useRef(null), M = c.useRef(null);
    v(f, "blur", O), v(f, "focus", P), v(f, "escape", k), v(f, "click", ce), v(f, "loaderror", le), v(f, "loaderstart", pe), v(f, "networkschange", fe), v(f, "confirm", de), v(f, "cancel", ve), v(f, "shippingaddresschange", me), v(f, "shippingratechange", ye), v(f, "savedpaymentmethodremove", he), v(f, "savedpaymentmethodupdate", ge), v(f, "change", x);
    var q;
    C && (e === "expressCheckout" ? q = C : q = function() {
      C(f);
    }), v(f, "ready", q), c.useLayoutEffect(function() {
      if (b.current === null && M.current !== null && (L || E)) {
        var d = null;
        if (E)
          switch (e) {
            case "payment":
              d = E.createPaymentElement(l);
              break;
            case "address":
              if ("mode" in l) {
                var V = l.mode, Y = Ce(l, Ue);
                if (V === "shipping")
                  d = E.createShippingAddressElement(Y);
                else if (V === "billing")
                  d = E.createBillingAddressElement(Y);
                else
                  throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
              } else
                throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
              break;
            case "expressCheckout":
              d = E.createExpressCheckoutElement(l);
              break;
            case "currencySelector":
              d = E.createCurrencySelectorElement();
              break;
            case "taxId":
              d = E.createTaxIdElement(l);
              break;
            default:
              throw new Error("Invalid Element type ".concat(n, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
          }
        else L && (d = L.create(e, l));
        b.current = d, Ee(d), d && d.mount(M.current);
      }
    }, [L, E, l]);
    var D = F(l);
    return c.useEffect(function() {
      if (b.current) {
        var d = ne(l, D, ["paymentRequest"]);
        d && "update" in b.current && b.current.update(d);
      }
    }, [l, D]), c.useLayoutEffect(function() {
      return function() {
        if (b.current && typeof b.current.destroy == "function")
          try {
            b.current.destroy(), b.current = null;
          } catch {
          }
      };
    }, []), /* @__PURE__ */ c.createElement("div", {
      id: g,
      className: h,
      ref: M
    });
  }, a = function(i) {
    B("mounts <".concat(n, ">"));
    var g = i.id, h = i.className;
    return /* @__PURE__ */ c.createElement("div", {
      id: g,
      className: h
    });
  }, u = t ? a : o;
  return u.propTypes = {
    id: s.string,
    className: s.string,
    onChange: s.func,
    onBlur: s.func,
    onFocus: s.func,
    onReady: s.func,
    onEscape: s.func,
    onClick: s.func,
    onLoadError: s.func,
    onLoaderStart: s.func,
    onNetworksChange: s.func,
    onConfirm: s.func,
    onCancel: s.func,
    onShippingAddressChange: s.func,
    onShippingRateChange: s.func,
    onSavedPaymentMethodRemove: s.func,
    onSavedPaymentMethodUpdate: s.func,
    options: s.object
  }, u.displayName = n, u.__elementType = e, u;
}, y = typeof window > "u", _e = /* @__PURE__ */ c.createContext(null);
_e.displayName = "EmbeddedCheckoutProviderContext";
var He = function() {
  var e = B("calls useStripe()"), t = e.stripe;
  return t;
};
m("auBankAccount", y);
m("card", y);
m("cardNumber", y);
m("cardExpiry", y);
m("cardCvc", y);
m("iban", y);
var Qe = m("payment", y);
m("expressCheckout", y);
m("paymentRequestButton", y);
m("linkAuthentication", y);
m("address", y);
m("shippingAddress", y);
m("paymentMethodMessaging", y);
m("taxId", y);
function N(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? N = function(e) {
    return typeof e;
  } : N = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, N(r);
}
var se = "clover", We = function(e) {
  return e === 3 ? "v3" : e;
}, ue = "https://js.stripe.com", Me = "".concat(ue, "/").concat(se, "/stripe.js"), qe = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, Fe = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/, Q = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used", Be = function(e) {
  return qe.test(e) || Fe.test(e);
}, Je = function() {
  for (var e = document.querySelectorAll('script[src^="'.concat(ue, '"]')), t = 0; t < e.length; t++) {
    var n = e[t];
    if (Be(n.src))
      return n;
  }
  return null;
}, Z = function(e) {
  var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "", n = document.createElement("script");
  n.src = "".concat(Me).concat(t);
  var o = document.head || document.body;
  if (!o)
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  return o.appendChild(n), n;
}, $e = function(e, t) {
  !e || !e._registerWrapper || e._registerWrapper({
    name: "stripe-js",
    version: "8.0.0",
    startTime: t
  });
}, R = null, I = null, T = null, De = function(e) {
  return function(t) {
    e(new Error("Failed to load Stripe.js", {
      cause: t
    }));
  };
}, Ve = function(e, t) {
  return function() {
    window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"));
  };
}, Ye = function(e) {
  return R !== null ? R : (R = new Promise(function(t, n) {
    if (typeof window > "u" || typeof document > "u") {
      t(null);
      return;
    }
    if (window.Stripe && e && console.warn(Q), window.Stripe) {
      t(window.Stripe);
      return;
    }
    try {
      var o = Je();
      if (o && e)
        console.warn(Q);
      else if (!o)
        o = Z(e);
      else if (o && T !== null && I !== null) {
        var a;
        o.removeEventListener("load", T), o.removeEventListener("error", I), (a = o.parentNode) === null || a === void 0 || a.removeChild(o), o = Z(e);
      }
      T = Ve(t, n), I = De(n), o.addEventListener("load", T), o.addEventListener("error", I);
    } catch (u) {
      n(u);
      return;
    }
  }), R.catch(function(t) {
    return R = null, Promise.reject(t);
  }));
}, Ge = function(e, t, n) {
  if (e === null)
    return null;
  var o = t[0], a = o.match(/^pk_test/), u = We(e.version), p = se;
  a && u !== p && console.warn("Stripe.js@".concat(u, " was loaded on the page, but @stripe/stripe-js@").concat("8.0.0", " expected Stripe.js@").concat(p, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  var i = e.apply(void 0, t);
  return $e(i, n), i;
}, ee = function(e) {
  var t = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e), `
`);
  if (e === null || N(e) !== "object")
    throw new Error(t);
  if (Object.keys(e).length === 1 && typeof e.advancedFraudSignals == "boolean")
    return e;
  throw new Error(t);
}, _, J = !1, Ke = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  J = !0;
  var o = Date.now();
  return Ye(_).then(function(a) {
    return Ge(a, t, o);
  });
};
Ke.setLoadParameters = function(r) {
  if (J && _) {
    var e = ee(r), t = Object.keys(e), n = t.reduce(function(o, a) {
      var u;
      return o && r[a] === ((u = _) === null || u === void 0 ? void 0 : u[a]);
    }, !0);
    if (n)
      return;
  }
  if (J)
    throw new Error("You cannot change load parameters after calling loadStripe");
  _ = ee(r);
};
export {
  Ie as E,
  Qe as P,
  He as a,
  Ke as l,
  Xe as u
};
