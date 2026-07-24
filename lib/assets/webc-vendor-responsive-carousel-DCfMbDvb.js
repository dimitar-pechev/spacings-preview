import { r as U, ao as ie } from "./webc-vendor-CvrN3tmw.js";
var ce = {}, q = {}, L = {}, ne = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function i() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (o = e(o, n(s)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return i.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var s in o)
        r.call(o, s) && o[s] && (a = e(a, s));
      return a;
    }
    function e(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(ne);
var fe = ne.exports;
Object.defineProperty(L, "__esModule", {
  value: !0
});
L.default = void 0;
var R = de(fe);
function de(t) {
  return t && t.__esModule ? t : { default: t };
}
function pe(t, r, i) {
  return r in t ? Object.defineProperty(t, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = i, t;
}
var me = {
  ROOT: function(r) {
    return (0, R.default)(pe({
      "carousel-root": !0
    }, r || "", !!r));
  },
  CAROUSEL: function(r) {
    return (0, R.default)({
      carousel: !0,
      "carousel-slider": r
    });
  },
  WRAPPER: function(r, i) {
    return (0, R.default)({
      "thumbs-wrapper": !r,
      "slider-wrapper": r,
      "axis-horizontal": i === "horizontal",
      "axis-vertical": i !== "horizontal"
    });
  },
  SLIDER: function(r, i) {
    return (0, R.default)({
      thumbs: !r,
      slider: r,
      animated: !i
    });
  },
  ITEM: function(r, i, n) {
    return (0, R.default)({
      thumb: !r,
      slide: r,
      selected: i,
      previous: n
    });
  },
  ARROW_PREV: function(r) {
    return (0, R.default)({
      "control-arrow control-prev": !0,
      "control-disabled": r
    });
  },
  ARROW_NEXT: function(r) {
    return (0, R.default)({
      "control-arrow control-next": !0,
      "control-disabled": r
    });
  },
  DOT: function(r) {
    return (0, R.default)({
      dot: !0,
      selected: r
    });
  }
};
L.default = me;
var A = {}, j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
});
j.outerWidth = void 0;
var he = function(r) {
  var i = r.offsetWidth, n = getComputedStyle(r);
  return i += parseInt(n.marginLeft) + parseInt(n.marginRight), i;
};
j.outerWidth = he;
var C = {};
Object.defineProperty(C, "__esModule", {
  value: !0
});
C.default = void 0;
var ve = function(r, i, n) {
  var e = r === 0 ? r : r + i, o = n === "horizontal" ? [e, 0, 0] : [0, e, 0], a = "translate3d", s = "(" + o.join(",") + ")";
  return a + s;
};
C.default = ve;
var M = {};
Object.defineProperty(M, "__esModule", {
  value: !0
});
M.default = void 0;
var ye = function() {
  return window;
};
M.default = ye;
Object.defineProperty(A, "__esModule", {
  value: !0
});
A.default = void 0;
var S = Se(U), T = B(L), be = j, ee = B(C), we = B(ie), D = B(M);
function B(t) {
  return t && t.__esModule ? t : { default: t };
}
function oe() {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap();
  return oe = function() {
    return t;
  }, t;
}
function Se(t) {
  if (t && t.__esModule)
    return t;
  if (t === null || k(t) !== "object" && typeof t != "function")
    return { default: t };
  var r = oe();
  if (r && r.has(t))
    return r.get(t);
  var i = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      var o = n ? Object.getOwnPropertyDescriptor(t, e) : null;
      o && (o.get || o.set) ? Object.defineProperty(i, e, o) : i[e] = t[e];
    }
  return i.default = t, r && r.set(t, i), i;
}
function k(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? k = function(i) {
    return typeof i;
  } : k = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, k(t);
}
function X() {
  return X = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, X.apply(this, arguments);
}
function ge(t, r) {
  if (!(t instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Pe(t, r) {
  for (var i = 0; i < r.length; i++) {
    var n = r[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Oe(t, r, i) {
  return r && Pe(t.prototype, r), t;
}
function _e(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), r && G(t, r);
}
function G(t, r) {
  return G = Object.setPrototypeOf || function(n, e) {
    return n.__proto__ = e, n;
  }, G(t, r);
}
function Ie(t) {
  var r = Te();
  return function() {
    var n = $(t), e;
    if (r) {
      var o = $(this).constructor;
      e = Reflect.construct(n, arguments, o);
    } else
      e = n.apply(this, arguments);
    return Re(this, e);
  };
}
function Re(t, r) {
  return r && (k(r) === "object" || typeof r == "function") ? r : b(t);
}
function b(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Te() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $(t) {
  return $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, $(t);
}
function y(t, r, i) {
  return r in t ? Object.defineProperty(t, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = i, t;
}
var Ee = function(r) {
  return r.hasOwnProperty("key");
}, Q = /* @__PURE__ */ function(t) {
  _e(i, t);
  var r = Ie(i);
  function i(n) {
    var e;
    return ge(this, i), e = r.call(this, n), y(b(e), "itemsWrapperRef", void 0), y(b(e), "itemsListRef", void 0), y(b(e), "thumbsRef", void 0), y(b(e), "setItemsWrapperRef", function(o) {
      e.itemsWrapperRef = o;
    }), y(b(e), "setItemsListRef", function(o) {
      e.itemsListRef = o;
    }), y(b(e), "setThumbsRef", function(o, a) {
      e.thumbsRef || (e.thumbsRef = []), e.thumbsRef[a] = o;
    }), y(b(e), "updateSizes", function() {
      if (!(!e.props.children || !e.itemsWrapperRef || !e.thumbsRef)) {
        var o = S.Children.count(e.props.children), a = e.itemsWrapperRef.clientWidth, s = e.props.thumbWidth ? e.props.thumbWidth : (0, be.outerWidth)(e.thumbsRef[0]), l = Math.floor(a / s), f = l < o, d = f ? o - l : 0;
        e.setState(function(m, v) {
          return {
            itemSize: s,
            visibleItems: l,
            firstItem: f ? e.getFirstItem(v.selectedItem) : 0,
            lastPosition: d,
            showArrows: f
          };
        });
      }
    }), y(b(e), "handleClickItem", function(o, a, s) {
      if (!Ee(s) || s.key === "Enter") {
        var l = e.props.onSelectItem;
        typeof l == "function" && l(o, a);
      }
    }), y(b(e), "onSwipeStart", function() {
      e.setState({
        swiping: !0
      });
    }), y(b(e), "onSwipeEnd", function() {
      e.setState({
        swiping: !1
      });
    }), y(b(e), "onSwipeMove", function(o) {
      var a = o.x;
      if (!e.state.itemSize || !e.itemsWrapperRef || !e.state.visibleItems)
        return !1;
      var s = 0, l = S.Children.count(e.props.children), f = -(e.state.firstItem * 100) / e.state.visibleItems, d = Math.max(l - e.state.visibleItems, 0), m = -d * 100 / e.state.visibleItems;
      f === s && a > 0 && (a = 0), f === m && a < 0 && (a = 0);
      var v = e.itemsWrapperRef.clientWidth, h = f + 100 / (v / a);
      return e.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(_) {
        e.itemsListRef.style[_] = (0, ee.default)(h, "%", e.props.axis);
      }), !0;
    }), y(b(e), "slideRight", function(o) {
      e.moveTo(e.state.firstItem - (typeof o == "number" ? o : 1));
    }), y(b(e), "slideLeft", function(o) {
      e.moveTo(e.state.firstItem + (typeof o == "number" ? o : 1));
    }), y(b(e), "moveTo", function(o) {
      o = o < 0 ? 0 : o, o = o >= e.state.lastPosition ? e.state.lastPosition : o, e.setState({
        firstItem: o
      });
    }), e.state = {
      selectedItem: n.selectedItem,
      swiping: !1,
      showArrows: !1,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    }, e;
  }
  return Oe(i, [{
    key: "componentDidMount",
    value: function() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function(e) {
      this.props.selectedItem !== this.state.selectedItem && this.setState({
        selectedItem: this.props.selectedItem,
        firstItem: this.getFirstItem(this.props.selectedItem)
      }), this.props.children !== e.children && this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function() {
      (0, D.default)().addEventListener("resize", this.updateSizes), (0, D.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function() {
      (0, D.default)().removeEventListener("resize", this.updateSizes), (0, D.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function(e) {
      var o = e;
      return e >= this.state.lastPosition && (o = this.state.lastPosition), e < this.state.firstItem + this.state.visibleItems && (o = this.state.firstItem), e < this.state.firstItem && (o = e), o;
    }
  }, {
    key: "renderItems",
    value: function() {
      var e = this;
      return this.props.children.map(function(o, a) {
        var s = T.default.ITEM(!1, a === e.state.selectedItem), l = {
          key: a,
          ref: function(d) {
            return e.setThumbsRef(d, a);
          },
          className: s,
          onClick: e.handleClickItem.bind(e, a, e.props.children[a]),
          onKeyDown: e.handleClickItem.bind(e, a, e.props.children[a]),
          "aria-label": "".concat(e.props.labels.item, " ").concat(a + 1),
          style: {
            width: e.props.thumbWidth
          }
        };
        return /* @__PURE__ */ S.default.createElement("li", X({}, l, {
          role: "button",
          tabIndex: 0
        }), o);
      });
    }
  }, {
    key: "render",
    value: function() {
      var e = this;
      if (!this.props.children)
        return null;
      var o = S.Children.count(this.props.children) > 1, a = this.state.showArrows && this.state.firstItem > 0, s = this.state.showArrows && this.state.firstItem < this.state.lastPosition, l = {}, f = -this.state.firstItem * (this.state.itemSize || 0), d = (0, ee.default)(f, "px", this.props.axis), m = this.props.transitionTime + "ms";
      return l = {
        WebkitTransform: d,
        MozTransform: d,
        MsTransform: d,
        OTransform: d,
        transform: d,
        msTransform: d,
        WebkitTransitionDuration: m,
        MozTransitionDuration: m,
        MsTransitionDuration: m,
        OTransitionDuration: m,
        transitionDuration: m,
        msTransitionDuration: m
      }, /* @__PURE__ */ S.default.createElement("div", {
        className: T.default.CAROUSEL(!1)
      }, /* @__PURE__ */ S.default.createElement("div", {
        className: T.default.WRAPPER(!1),
        ref: this.setItemsWrapperRef
      }, /* @__PURE__ */ S.default.createElement("button", {
        type: "button",
        className: T.default.ARROW_PREV(!a),
        onClick: function() {
          return e.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), o ? /* @__PURE__ */ S.default.createElement(we.default, {
        tagName: "ul",
        className: T.default.SLIDER(!1, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: l,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /* @__PURE__ */ S.default.createElement("ul", {
        className: T.default.SLIDER(!1, this.state.swiping),
        ref: function(h) {
          return e.setItemsListRef(h);
        },
        style: l
      }, this.renderItems()), /* @__PURE__ */ S.default.createElement("button", {
        type: "button",
        className: T.default.ARROW_NEXT(!s),
        onClick: function() {
          return e.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]), i;
}(S.Component);
A.default = Q;
y(Q, "displayName", "Thumbs");
y(Q, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});
var V = {};
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.default = void 0;
var Ce = function() {
  return document;
};
V.default = Ce;
var w = {};
Object.defineProperty(w, "__esModule", {
  value: !0
});
w.setPosition = w.getPosition = w.isKeyboardEvent = w.defaultStatusFormatter = w.noop = void 0;
var xe = U, ke = ze(C);
function ze(t) {
  return t && t.__esModule ? t : { default: t };
}
var Le = function() {
};
w.noop = Le;
var Ae = function(r, i) {
  return "".concat(r, " of ").concat(i);
};
w.defaultStatusFormatter = Ae;
var Me = function(r) {
  return r ? r.hasOwnProperty("key") : !1;
};
w.isKeyboardEvent = Me;
var We = function(r, i) {
  if (i.infiniteLoop && ++r, r === 0)
    return 0;
  var n = xe.Children.count(i.children);
  if (i.centerMode && i.axis === "horizontal") {
    var e = -r * i.centerSlidePercentage, o = n - 1;
    return r && (r !== o || i.infiniteLoop) ? e += (100 - i.centerSlidePercentage) / 2 : r === o && (e += 100 - i.centerSlidePercentage), e;
  }
  return -r * 100;
};
w.getPosition = We;
var De = function(r, i) {
  var n = {};
  return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(e) {
    n[e] = (0, ke.default)(r, "%", i);
  }), n;
};
w.setPosition = De;
var P = {};
Object.defineProperty(P, "__esModule", {
  value: !0
});
P.fadeAnimationHandler = P.slideStopSwipingHandler = P.slideSwipeAnimationHandler = P.slideAnimationHandler = void 0;
var ae = U, He = Ne(C), O = w;
function Ne(t) {
  return t && t.__esModule ? t : { default: t };
}
function te(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    r && (n = n.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function E(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? te(Object(i), !0).forEach(function(n) {
      $e(t, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : te(Object(i)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return t;
}
function $e(t, r, i) {
  return r in t ? Object.defineProperty(t, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = i, t;
}
var Fe = function(r, i) {
  var n = {}, e = i.selectedItem, o = e, a = ae.Children.count(r.children) - 1, s = r.infiniteLoop && (e < 0 || e > a);
  if (s)
    return o < 0 ? r.centerMode && r.centerSlidePercentage && r.axis === "horizontal" ? n.itemListStyle = (0, O.setPosition)(-(a + 2) * r.centerSlidePercentage - (100 - r.centerSlidePercentage) / 2, r.axis) : n.itemListStyle = (0, O.setPosition)(-(a + 2) * 100, r.axis) : o > a && (n.itemListStyle = (0, O.setPosition)(0, r.axis)), n;
  var l = (0, O.getPosition)(e, r), f = (0, He.default)(l, "%", r.axis), d = r.transitionTime + "ms";
  return n.itemListStyle = {
    WebkitTransform: f,
    msTransform: f,
    OTransform: f,
    transform: f
  }, i.swiping || (n.itemListStyle = E(E({}, n.itemListStyle), {}, {
    WebkitTransitionDuration: d,
    MozTransitionDuration: d,
    OTransitionDuration: d,
    transitionDuration: d,
    msTransitionDuration: d
  })), n;
};
P.slideAnimationHandler = Fe;
var Ke = function(r, i, n, e) {
  var o = {}, a = i.axis === "horizontal", s = ae.Children.count(i.children), l = 0, f = (0, O.getPosition)(n.selectedItem, i), d = i.infiniteLoop ? (0, O.getPosition)(s - 1, i) - 100 : (0, O.getPosition)(s - 1, i), m = a ? r.x : r.y, v = m;
  f === l && m > 0 && (v = 0), f === d && m < 0 && (v = 0);
  var h = f + 100 / (n.itemSize / v), _ = Math.abs(m) > i.swipeScrollTolerance;
  return i.infiniteLoop && _ && (n.selectedItem === 0 && h > -100 ? h -= s * 100 : n.selectedItem === s - 1 && h < -s * 100 && (h += s * 100)), (!i.preventMovementUntilSwipeScrollTolerance || _ || n.swipeMovementStarted) && (n.swipeMovementStarted || e({
    swipeMovementStarted: !0
  }), o.itemListStyle = (0, O.setPosition)(h, i.axis)), _ && !n.cancelClick && e({
    cancelClick: !0
  }), o;
};
P.slideSwipeAnimationHandler = Ke;
var Ue = function(r, i) {
  var n = (0, O.getPosition)(i.selectedItem, r), e = (0, O.setPosition)(n, r.axis);
  return {
    itemListStyle: e
  };
};
P.slideStopSwipingHandler = Ue;
var qe = function(r, i) {
  var n = r.transitionTime + "ms", e = "ease-in-out", o = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: e,
    msTransitionTimingFunction: e,
    MozTransitionTimingFunction: e,
    WebkitTransitionTimingFunction: e,
    OTransitionTimingFunction: e
  };
  return i.swiping || (o = E(E({}, o), {}, {
    WebkitTransitionDuration: n,
    MozTransitionDuration: n,
    OTransitionDuration: n,
    transitionDuration: n,
    msTransitionDuration: n
  })), {
    slideStyle: o,
    selectedStyle: E(E({}, o), {}, {
      opacity: 1,
      position: "relative"
    }),
    prevStyle: E({}, o)
  };
};
P.fadeAnimationHandler = qe;
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.default = void 0;
var p = Ve(U), je = W(ie), I = W(L), Be = W(A), H = W(V), N = W(M), x = w, F = P;
function W(t) {
  return t && t.__esModule ? t : { default: t };
}
function se() {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap();
  return se = function() {
    return t;
  }, t;
}
function Ve(t) {
  if (t && t.__esModule)
    return t;
  if (t === null || z(t) !== "object" && typeof t != "function")
    return { default: t };
  var r = se();
  if (r && r.has(t))
    return r.get(t);
  var i = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      var o = n ? Object.getOwnPropertyDescriptor(t, e) : null;
      o && (o.get || o.set) ? Object.defineProperty(i, e, o) : i[e] = t[e];
    }
  return i.default = t, r && r.set(t, i), i;
}
function z(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? z = function(i) {
    return typeof i;
  } : z = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, z(t);
}
function Z() {
  return Z = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, Z.apply(this, arguments);
}
function re(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    r && (n = n.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function g(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? re(Object(i), !0).forEach(function(n) {
      u(t, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : re(Object(i)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return t;
}
function Xe(t, r) {
  if (!(t instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Ge(t, r) {
  for (var i = 0; i < r.length; i++) {
    var n = r[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ze(t, r, i) {
  return r && Ge(t.prototype, r), t;
}
function Je(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), r && J(t, r);
}
function J(t, r) {
  return J = Object.setPrototypeOf || function(n, e) {
    return n.__proto__ = e, n;
  }, J(t, r);
}
function Qe(t) {
  var r = et();
  return function() {
    var n = K(t), e;
    if (r) {
      var o = K(this).constructor;
      e = Reflect.construct(n, arguments, o);
    } else
      e = n.apply(this, arguments);
    return Ye(this, e);
  };
}
function Ye(t, r) {
  return r && (z(r) === "object" || typeof r == "function") ? r : c(t);
}
function c(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function et() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function K(t) {
  return K = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, K(t);
}
function u(t, r, i) {
  return r in t ? Object.defineProperty(t, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = i, t;
}
var Y = /* @__PURE__ */ function(t) {
  Je(i, t);
  var r = Qe(i);
  function i(n) {
    var e;
    Xe(this, i), e = r.call(this, n), u(c(e), "thumbsRef", void 0), u(c(e), "carouselWrapperRef", void 0), u(c(e), "listRef", void 0), u(c(e), "itemsRef", void 0), u(c(e), "timer", void 0), u(c(e), "animationHandler", void 0), u(c(e), "setThumbsRef", function(a) {
      e.thumbsRef = a;
    }), u(c(e), "setCarouselWrapperRef", function(a) {
      e.carouselWrapperRef = a;
    }), u(c(e), "setListRef", function(a) {
      e.listRef = a;
    }), u(c(e), "setItemsRef", function(a, s) {
      e.itemsRef || (e.itemsRef = []), e.itemsRef[s] = a;
    }), u(c(e), "autoPlay", function() {
      p.Children.count(e.props.children) <= 1 || (e.clearAutoPlay(), e.props.autoPlay && (e.timer = setTimeout(function() {
        e.increment();
      }, e.props.interval)));
    }), u(c(e), "clearAutoPlay", function() {
      e.timer && clearTimeout(e.timer);
    }), u(c(e), "resetAutoPlay", function() {
      e.clearAutoPlay(), e.autoPlay();
    }), u(c(e), "stopOnHover", function() {
      e.setState({
        isMouseEntered: !0
      }, e.clearAutoPlay);
    }), u(c(e), "startOnLeave", function() {
      e.setState({
        isMouseEntered: !1
      }, e.autoPlay);
    }), u(c(e), "isFocusWithinTheCarousel", function() {
      return e.carouselWrapperRef ? !!((0, H.default)().activeElement === e.carouselWrapperRef || e.carouselWrapperRef.contains((0, H.default)().activeElement)) : !1;
    }), u(c(e), "navigateWithKeyboard", function(a) {
      if (e.isFocusWithinTheCarousel()) {
        var s = e.props.axis, l = s === "horizontal", f = {
          ArrowUp: 38,
          ArrowRight: 39,
          ArrowDown: 40,
          ArrowLeft: 37
        }, d = l ? f.ArrowRight : f.ArrowDown, m = l ? f.ArrowLeft : f.ArrowUp;
        d === a.keyCode ? e.increment() : m === a.keyCode && e.decrement();
      }
    }), u(c(e), "updateSizes", function() {
      if (!(!e.state.initialized || !e.itemsRef || e.itemsRef.length === 0)) {
        var a = e.props.axis === "horizontal", s = e.itemsRef[0];
        if (s) {
          var l = a ? s.clientWidth : s.clientHeight;
          e.setState({
            itemSize: l
          }), e.thumbsRef && e.thumbsRef.updateSizes();
        }
      }
    }), u(c(e), "setMountState", function() {
      e.setState({
        hasMount: !0
      }), e.updateSizes();
    }), u(c(e), "handleClickItem", function(a, s) {
      if (p.Children.count(e.props.children) !== 0) {
        if (e.state.cancelClick) {
          e.setState({
            cancelClick: !1
          });
          return;
        }
        e.props.onClickItem(a, s), a !== e.state.selectedItem && e.setState({
          selectedItem: a
        });
      }
    }), u(c(e), "handleOnChange", function(a, s) {
      p.Children.count(e.props.children) <= 1 || e.props.onChange(a, s);
    }), u(c(e), "handleClickThumb", function(a, s) {
      e.props.onClickThumb(a, s), e.moveTo(a);
    }), u(c(e), "onSwipeStart", function(a) {
      e.setState({
        swiping: !0
      }), e.props.onSwipeStart(a);
    }), u(c(e), "onSwipeEnd", function(a) {
      e.setState({
        swiping: !1,
        cancelClick: !1,
        swipeMovementStarted: !1
      }), e.props.onSwipeEnd(a), e.clearAutoPlay(), e.state.autoPlay && e.autoPlay();
    }), u(c(e), "onSwipeMove", function(a, s) {
      e.props.onSwipeMove(s);
      var l = e.props.swipeAnimationHandler(a, e.props, e.state, e.setState.bind(c(e)));
      return e.setState(g({}, l)), !!Object.keys(l).length;
    }), u(c(e), "decrement", function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      e.moveTo(e.state.selectedItem - (typeof a == "number" ? a : 1));
    }), u(c(e), "increment", function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      e.moveTo(e.state.selectedItem + (typeof a == "number" ? a : 1));
    }), u(c(e), "moveTo", function(a) {
      if (typeof a == "number") {
        var s = p.Children.count(e.props.children) - 1;
        a < 0 && (a = e.props.infiniteLoop ? s : 0), a > s && (a = e.props.infiniteLoop ? 0 : s), e.selectItem({
          // if it's not a slider, we don't need to set position here
          selectedItem: a
        }), e.state.autoPlay && e.state.isMouseEntered === !1 && e.resetAutoPlay();
      }
    }), u(c(e), "onClickNext", function() {
      e.increment(1);
    }), u(c(e), "onClickPrev", function() {
      e.decrement(1);
    }), u(c(e), "onSwipeForward", function() {
      e.increment(1), e.props.emulateTouch && e.setState({
        cancelClick: !0
      });
    }), u(c(e), "onSwipeBackwards", function() {
      e.decrement(1), e.props.emulateTouch && e.setState({
        cancelClick: !0
      });
    }), u(c(e), "changeItem", function(a) {
      return function(s) {
        (!(0, x.isKeyboardEvent)(s) || s.key === "Enter") && e.moveTo(a);
      };
    }), u(c(e), "selectItem", function(a) {
      e.setState(g({
        previousItem: e.state.selectedItem
      }, a), function() {
        e.setState(e.animationHandler(e.props, e.state));
      }), e.handleOnChange(a.selectedItem, p.Children.toArray(e.props.children)[a.selectedItem]);
    }), u(c(e), "getInitialImage", function() {
      var a = e.props.selectedItem, s = e.itemsRef && e.itemsRef[a], l = s && s.getElementsByTagName("img") || [];
      return l[0];
    }), u(c(e), "getVariableItemHeight", function(a) {
      var s = e.itemsRef && e.itemsRef[a];
      if (e.state.hasMount && s && s.children.length) {
        var l = s.children[0].getElementsByTagName("img") || [];
        if (l.length > 0) {
          var f = l[0];
          if (!f.complete) {
            var d = function h() {
              e.forceUpdate(), f.removeEventListener("load", h);
            };
            f.addEventListener("load", d);
          }
        }
        var m = l[0] || s.children[0], v = m.clientHeight;
        return v > 0 ? v : null;
      }
      return null;
    });
    var o = {
      initialized: !1,
      previousItem: n.selectedItem,
      selectedItem: n.selectedItem,
      hasMount: !1,
      isMouseEntered: !1,
      autoPlay: n.autoPlay,
      swiping: !1,
      swipeMovementStarted: !1,
      cancelClick: !1,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    return e.animationHandler = typeof n.animationHandler == "function" && n.animationHandler || n.animationHandler === "fade" && F.fadeAnimationHandler || F.slideAnimationHandler, e.state = g(g({}, o), e.animationHandler(n, o)), e;
  }
  return Ze(i, [{
    key: "componentDidMount",
    value: function() {
      this.props.children && this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function(e, o) {
      !e.children && this.props.children && !this.state.initialized && this.setupCarousel(), !e.autoFocus && this.props.autoFocus && this.forceFocus(), o.swiping && !this.state.swiping && this.setState(g({}, this.props.stopSwipingHandler(this.props, this.state))), (e.selectedItem !== this.props.selectedItem || e.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), e.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
        autoPlay: this.props.autoPlay
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function() {
      var e = this;
      this.bindEvents(), this.state.autoPlay && p.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
        initialized: !0
      }, function() {
        var o = e.getInitialImage();
        o && !o.complete ? o.addEventListener("load", e.setMountState) : e.setMountState();
      });
    }
  }, {
    key: "destroyCarousel",
    value: function() {
      this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
    }
  }, {
    key: "setupAutoPlay",
    value: function() {
      this.autoPlay();
      var e = this.carouselWrapperRef;
      this.props.stopOnHover && e && (e.addEventListener("mouseenter", this.stopOnHover), e.addEventListener("mouseleave", this.startOnLeave));
    }
  }, {
    key: "destroyAutoPlay",
    value: function() {
      this.clearAutoPlay();
      var e = this.carouselWrapperRef;
      this.props.stopOnHover && e && (e.removeEventListener("mouseenter", this.stopOnHover), e.removeEventListener("mouseleave", this.startOnLeave));
    }
  }, {
    key: "bindEvents",
    value: function() {
      (0, N.default)().addEventListener("resize", this.updateSizes), (0, N.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, H.default)().addEventListener("keydown", this.navigateWithKeyboard);
    }
  }, {
    key: "unbindEvents",
    value: function() {
      (0, N.default)().removeEventListener("resize", this.updateSizes), (0, N.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      var e = this.getInitialImage();
      e && e.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, H.default)().removeEventListener("keydown", this.navigateWithKeyboard);
    }
  }, {
    key: "forceFocus",
    value: function() {
      var e;
      (e = this.carouselWrapperRef) === null || e === void 0 || e.focus();
    }
  }, {
    key: "renderItems",
    value: function(e) {
      var o = this;
      return this.props.children ? p.Children.map(this.props.children, function(a, s) {
        var l = s === o.state.selectedItem, f = s === o.state.previousItem, d = l && o.state.selectedStyle || f && o.state.prevStyle || o.state.slideStyle || {};
        o.props.centerMode && o.props.axis === "horizontal" && (d = g(g({}, d), {}, {
          minWidth: o.props.centerSlidePercentage + "%"
        })), o.state.swiping && o.state.swipeMovementStarted && (d = g(g({}, d), {}, {
          pointerEvents: "none"
        }));
        var m = {
          ref: function(h) {
            return o.setItemsRef(h, s);
          },
          key: "itemKey" + s + (e ? "clone" : ""),
          className: I.default.ITEM(!0, s === o.state.selectedItem, s === o.state.previousItem),
          onClick: o.handleClickItem.bind(o, s, a),
          style: d
        };
        return /* @__PURE__ */ p.default.createElement("li", m, o.props.renderItem(a, {
          isSelected: s === o.state.selectedItem,
          isPrevious: s === o.state.previousItem
        }));
      }) : [];
    }
  }, {
    key: "renderControls",
    value: function() {
      var e = this, o = this.props, a = o.showIndicators, s = o.labels, l = o.renderIndicator, f = o.children;
      return a ? /* @__PURE__ */ p.default.createElement("ul", {
        className: "control-dots"
      }, p.Children.map(f, function(d, m) {
        return l && l(e.changeItem(m), m === e.state.selectedItem, m, s.item);
      })) : null;
    }
  }, {
    key: "renderStatus",
    value: function() {
      return this.props.showStatus ? /* @__PURE__ */ p.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, p.Children.count(this.props.children))) : null;
    }
  }, {
    key: "renderThumbs",
    value: function() {
      return !this.props.showThumbs || !this.props.children || p.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ p.default.createElement(Be.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function() {
      var e = this;
      if (!this.props.children || p.Children.count(this.props.children) === 0)
        return null;
      var o = this.props.swipeable && p.Children.count(this.props.children) > 1, a = this.props.axis === "horizontal", s = this.props.showArrows && p.Children.count(this.props.children) > 1, l = s && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1, f = s && (this.state.selectedItem < p.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1, d = this.renderItems(!0), m = d.shift(), v = d.pop(), h = {
        className: I.default.SLIDER(!0, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      }, _ = {};
      if (a) {
        if (h.onSwipeLeft = this.onSwipeForward, h.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
          var le = this.getVariableItemHeight(this.state.selectedItem);
          _.height = le || "auto";
        }
      } else
        h.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, h.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, h.style = g(g({}, h.style), {}, {
          height: this.state.itemSize
        }), _.height = this.state.itemSize;
      return /* @__PURE__ */ p.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: I.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : void 0
      }, /* @__PURE__ */ p.default.createElement("div", {
        className: I.default.CAROUSEL(!0),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, l, this.props.labels.leftArrow), /* @__PURE__ */ p.default.createElement("div", {
        className: I.default.WRAPPER(!0, this.props.axis),
        style: _
      }, o ? /* @__PURE__ */ p.default.createElement(je.default, Z({
        tagName: "ul",
        innerRef: this.setListRef
      }, h, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && v, this.renderItems(), this.props.infiniteLoop && m) : /* @__PURE__ */ p.default.createElement("ul", {
        className: I.default.SLIDER(!0, this.state.swiping),
        ref: function(ue) {
          return e.setListRef(ue);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && v, this.renderItems(), this.props.infiniteLoop && m)), this.props.renderArrowNext(this.onClickNext, f, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]), i;
}(p.default.Component);
q.default = Y;
u(Y, "displayName", "Carousel");
u(Y, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  onClickItem: x.noop,
  onClickThumb: x.noop,
  onChange: x.noop,
  onSwipeStart: function() {
  },
  onSwipeEnd: function() {
  },
  onSwipeMove: function() {
    return !1;
  },
  preventMovementUntilSwipeScrollTolerance: !1,
  renderArrowPrev: function(r, i, n) {
    return /* @__PURE__ */ p.default.createElement("button", {
      type: "button",
      "aria-label": n,
      className: I.default.ARROW_PREV(!i),
      onClick: r
    });
  },
  renderArrowNext: function(r, i, n) {
    return /* @__PURE__ */ p.default.createElement("button", {
      type: "button",
      "aria-label": n,
      className: I.default.ARROW_NEXT(!i),
      onClick: r
    });
  },
  renderIndicator: function(r, i, n, e) {
    return /* @__PURE__ */ p.default.createElement("li", {
      className: I.default.DOT(i),
      onClick: r,
      onKeyDown: r,
      value: n,
      key: n,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(e, " ").concat(n + 1)
    });
  },
  renderItem: function(r) {
    return r;
  },
  renderThumbs: function(r) {
    var i = p.Children.map(r, function(n) {
      var e = n;
      if (n.type !== "img" && (e = p.Children.toArray(n.props.children).find(function(o) {
        return o.type === "img";
      })), !!e)
        return e;
    });
    return i.filter(function(n) {
      return n;
    }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : i;
  },
  statusFormatter: x.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: !0,
  showIndicators: !0,
  showStatus: !0,
  showThumbs: !0,
  stopOnHover: !0,
  swipeScrollTolerance: 5,
  swipeable: !0,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: F.slideSwipeAnimationHandler,
  stopSwipingHandler: F.slideStopSwipingHandler
});
var tt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "Carousel", {
    enumerable: !0,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(t, "CarouselProps", {
    enumerable: !0,
    get: function() {
      return i.CarouselProps;
    }
  }), Object.defineProperty(t, "Thumbs", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  });
  var r = e(q), i = tt, n = e(A);
  function e(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(ce);
const nt = '.carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:""}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translateZ(0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:#0003}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px #000000e6;background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}';
export {
  nt as c,
  ce as j
};
