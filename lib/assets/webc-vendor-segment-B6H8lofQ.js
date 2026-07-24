import { b as q, c as b, ap as nt, aq as $t, ar as ft, as as N, at as S, au as k, av as ee, l as D, aw as De, ax as dt, ay as Tr, az as he, k as Fr } from "./webc-vendor-CvrN3tmw.js";
function Nr(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in t)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(t, a, i.get ? i : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var Dr = function(t, e) {
  return Object.keys(t).filter(function(r) {
    return e(r, t[r]);
  }).reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {});
}, fe = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var a = t.call(this, "".concat(r, " ").concat(n)) || this;
      return a.field = r, a;
    }
    return e;
  }(Error)
);
function ie(t) {
  return typeof t == "string";
}
function it(t) {
  return typeof t == "number";
}
function be(t) {
  return typeof t == "function";
}
function Lr(t) {
  return t != null;
}
function U(t) {
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === "object";
}
var ht = "is not a string", pt = "is not an object", Rr = "is nil";
function zr(t) {
  if (!Lr(t))
    throw new fe("Event", Rr);
  if (typeof t != "object")
    throw new fe("Event", pt);
}
function Ur(t) {
  if (!ie(t.type))
    throw new fe(".type", ht);
}
function Br(t) {
  if (!ie(t.event))
    throw new fe(".event", ht);
}
function qr(t) {
  if (!U(t.properties))
    throw new fe(".properties", pt);
}
function Vr(t) {
  if (!U(t.traits))
    throw new fe(".traits", pt);
}
function Kr(t) {
  if (!ie(t.messageId))
    throw new fe(".messageId", ht);
}
function $r(t) {
  zr(t), Ur(t), Kr(t), t.type === "track" && (Br(t), qr(t)), ["group", "identify"].includes(t.type) && Vr(t);
}
var Hr = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      var r, n;
      this.settings = e, this.createMessageId = e.createMessageId, this.onEventMethodCall = (r = e.onEventMethodCall) !== null && r !== void 0 ? r : function() {
      }, this.onFinishedEvent = (n = e.onFinishedEvent) !== null && n !== void 0 ? n : function() {
      };
    }
    return t;
  }()
), Gr = (
  /** @class */
  function() {
    function t(e) {
      this.settings = new Hr(e);
    }
    return t.prototype.track = function(e, r, n, a) {
      return this.settings.onEventMethodCall({ type: "track", options: n }), this.normalize(b(b({}, this.baseEvent()), { event: e, type: "track", properties: r ?? {}, options: b({}, n), integrations: b({}, a) }));
    }, t.prototype.page = function(e, r, n, a, i) {
      var s;
      this.settings.onEventMethodCall({ type: "page", options: a });
      var o = {
        type: "page",
        properties: b({}, n),
        options: b({}, a),
        integrations: b({}, i)
      };
      return e !== null && (o.category = e, o.properties = (s = o.properties) !== null && s !== void 0 ? s : {}, o.properties.category = e), r !== null && (o.name = r), this.normalize(b(b({}, this.baseEvent()), o));
    }, t.prototype.screen = function(e, r, n, a, i) {
      this.settings.onEventMethodCall({ type: "screen", options: a });
      var s = {
        type: "screen",
        properties: b({}, n),
        options: b({}, a),
        integrations: b({}, i)
      };
      return e !== null && (s.category = e), r !== null && (s.name = r), this.normalize(b(b({}, this.baseEvent()), s));
    }, t.prototype.identify = function(e, r, n, a) {
      return this.settings.onEventMethodCall({ type: "identify", options: n }), this.normalize(b(b({}, this.baseEvent()), { type: "identify", userId: e, traits: r ?? {}, options: b({}, n), integrations: a }));
    }, t.prototype.group = function(e, r, n, a) {
      return this.settings.onEventMethodCall({ type: "group", options: n }), this.normalize(b(b({}, this.baseEvent()), {
        type: "group",
        traits: r ?? {},
        options: b({}, n),
        integrations: b({}, a),
        //
        groupId: e
      }));
    }, t.prototype.alias = function(e, r, n, a) {
      this.settings.onEventMethodCall({ type: "alias", options: n });
      var i = {
        userId: e,
        type: "alias",
        options: b({}, n),
        integrations: b({}, a)
      };
      return r !== null && (i.previousId = r), e === void 0 ? this.normalize(b(b({}, i), this.baseEvent())) : this.normalize(b(b({}, this.baseEvent()), i));
    }, t.prototype.baseEvent = function() {
      return {
        integrations: {},
        options: {}
      };
    }, t.prototype.context = function(e) {
      var r, n = [
        "userId",
        "anonymousId",
        "timestamp",
        "messageId"
      ];
      delete e.integrations;
      var a = Object.keys(e), i = (r = e.context) !== null && r !== void 0 ? r : {}, s = {};
      return a.forEach(function(o) {
        o !== "context" && (n.includes(o) ? nt(s, o, e[o]) : nt(i, o, e[o]));
      }), [i, s];
    }, t.prototype.normalize = function(e) {
      var r, n, a = Object.keys((r = e.integrations) !== null && r !== void 0 ? r : {}).reduce(function(f, h) {
        var p, m;
        return b(b({}, f), (p = {}, p[h] = !!(!((m = e.integrations) === null || m === void 0) && m[h]), p));
      }, {});
      e.options = Dr(e.options || {}, function(f, h) {
        return h !== void 0;
      });
      var i = b(b({}, a), (n = e.options) === null || n === void 0 ? void 0 : n.integrations), s = e.options ? this.context(e.options) : [], o = s[0], u = s[1], l = e.options, c = $t(e, ["options"]), d = b(b(b(b({ timestamp: /* @__PURE__ */ new Date() }, c), { context: o, integrations: i }), u), { messageId: l.messageId || this.settings.createMessageId() });
      return this.settings.onFinishedEvent(d), $r(d), d;
    }, t;
  }()
);
function vt(t, e) {
  return new Promise(function(r, n) {
    var a = setTimeout(function() {
      n(Error("Promise timed out"));
    }, e);
    t.then(function(i) {
      return clearTimeout(a), r(i);
    }).catch(n);
  });
}
function Jr(t) {
  return new Promise(function(e) {
    return setTimeout(e, t);
  });
}
function Wr(t, e, r) {
  var n = function() {
    try {
      return Promise.resolve(e(t));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  return Jr(r).then(function() {
    return vt(n(), 1e3);
  }).catch(function(a) {
    t?.log("warn", "Callback Error", { error: a }), t?.stats.increment("callback_error");
  }).then(function() {
    return t;
  });
}
var yt = function() {
  var t, e, r = !1, n = new Promise(function(a, i) {
    t = function() {
      for (var s = [], o = 0; o < arguments.length; o++)
        s[o] = arguments[o];
      r = !0, a.apply(void 0, s);
    }, e = function() {
      for (var s = [], o = 0; o < arguments.length; o++)
        s[o] = arguments[o];
      r = !0, i.apply(void 0, s);
    };
  });
  return {
    resolve: t,
    reject: e,
    promise: n,
    isSettled: function() {
      return r;
    }
  };
}, mt = (
  /** @class */
  function() {
    function t(e) {
      var r;
      this.callbacks = {}, this.warned = !1, this.maxListeners = (r = e?.maxListeners) !== null && r !== void 0 ? r : 10;
    }
    return t.prototype.warnIfPossibleMemoryLeak = function(e) {
      this.warned || this.maxListeners && this.callbacks[e].length > this.maxListeners && (console.warn("Event Emitter: Possible memory leak detected; ".concat(String(e), " has exceeded ").concat(this.maxListeners, " listeners.")), this.warned = !0);
    }, t.prototype.on = function(e, r) {
      return this.callbacks[e] ? (this.callbacks[e].push(r), this.warnIfPossibleMemoryLeak(e)) : this.callbacks[e] = [r], this;
    }, t.prototype.once = function(e, r) {
      var n = this, a = function() {
        for (var i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        n.off(e, a), r.apply(n, i);
      };
      return this.on(e, a), this;
    }, t.prototype.off = function(e, r) {
      var n, a = (n = this.callbacks[e]) !== null && n !== void 0 ? n : [], i = a.filter(function(s) {
        return s !== r;
      });
      return this.callbacks[e] = i, this;
    }, t.prototype.emit = function(e) {
      for (var r = this, n, a = [], i = 1; i < arguments.length; i++)
        a[i - 1] = arguments[i];
      var s = (n = this.callbacks[e]) !== null && n !== void 0 ? n : [];
      return s.forEach(function(o) {
        o.apply(r, a);
      }), this;
    }, t;
  }()
);
function Qr(t) {
  var e = Math.random() + 1, r = t.minTimeout, n = r === void 0 ? 500 : r, a = t.factor, i = a === void 0 ? 2 : a, s = t.attempt, o = t.maxTimeout, u = o === void 0 ? 1 / 0 : o;
  return Math.min(e * n * Math.pow(i, s), u);
}
var Ht = "onRemoveFromFuture", Le = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n, a) {
      var i = t.call(this) || this;
      return i.future = [], i.maxAttempts = r, i.queue = n, i.seen = a ?? {}, i;
    }
    return e.prototype.push = function() {
      for (var r = this, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      var i = n.map(function(s) {
        var o = r.updateAttempts(s);
        return o > r.maxAttempts || r.includes(s) ? !1 : (r.queue.push(s), !0);
      });
      return this.queue = this.queue.sort(function(s, o) {
        return r.getAttempts(s) - r.getAttempts(o);
      }), i;
    }, e.prototype.pushWithBackoff = function(r, n) {
      var a = this;
      if (n === void 0 && (n = 0), n == 0 && this.getAttempts(r) === 0)
        return this.push(r)[0];
      var i = this.updateAttempts(r);
      if (i > this.maxAttempts || this.includes(r))
        return !1;
      var s = Qr({ attempt: i - 1 });
      return n > 0 && s < n && (s = n), setTimeout(function() {
        a.queue.push(r), a.future = a.future.filter(function(o) {
          return o.id !== r.id;
        }), a.emit(Ht);
      }, s), this.future.push(r), !0;
    }, e.prototype.getAttempts = function(r) {
      var n;
      return (n = this.seen[r.id]) !== null && n !== void 0 ? n : 0;
    }, e.prototype.updateAttempts = function(r) {
      return this.seen[r.id] = this.getAttempts(r) + 1, this.getAttempts(r);
    }, e.prototype.includes = function(r) {
      return this.queue.includes(r) || this.future.includes(r) || !!this.queue.find(function(n) {
        return n.id === r.id;
      }) || !!this.future.find(function(n) {
        return n.id === r.id;
      });
    }, e.prototype.pop = function() {
      return this.queue.shift();
    }, Object.defineProperty(e.prototype, "length", {
      get: function() {
        return this.queue.length;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "todo", {
      get: function() {
        return this.queue.length + this.future.length;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(mt)
), Yr = (
  /** @class */
  function() {
    function t() {
      this._logs = [];
    }
    return t.prototype.log = function(e, r, n) {
      var a = /* @__PURE__ */ new Date();
      this._logs.push({
        level: e,
        message: r,
        time: a,
        extras: n
      });
    }, Object.defineProperty(t.prototype, "logs", {
      get: function() {
        return this._logs;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.flush = function() {
      if (this.logs.length > 1) {
        var e = this._logs.reduce(function(r, n) {
          var a, i, s, o = b(b({}, n), { json: JSON.stringify(n.extras, null, " "), extras: n.extras });
          delete o.time;
          var u = (s = (i = n.time) === null || i === void 0 ? void 0 : i.toISOString()) !== null && s !== void 0 ? s : "";
          return r[u] && (u = "".concat(u, "-").concat(Math.random())), b(b({}, r), (a = {}, a[u] = o, a));
        }, {});
        console.table ? console.table(e) : console.log(e);
      } else
        this.logs.forEach(function(r) {
          var n = r.level, a = r.message, i = r.extras;
          n === "info" || n === "debug" ? console.log(a, i ?? "") : console[n](a, i ?? "");
        });
      this._logs = [];
    }, t;
  }()
), Xr = function(t) {
  var e = {
    gauge: "g",
    counter: "c"
  };
  return e[t];
}, Gt = (
  /** @class */
  function() {
    function t() {
      this.metrics = [];
    }
    return t.prototype.increment = function(e, r, n) {
      r === void 0 && (r = 1), this.metrics.push({
        metric: e,
        value: r,
        tags: n ?? [],
        type: "counter",
        timestamp: Date.now()
      });
    }, t.prototype.gauge = function(e, r, n) {
      this.metrics.push({
        metric: e,
        value: r,
        tags: n ?? [],
        type: "gauge",
        timestamp: Date.now()
      });
    }, t.prototype.flush = function() {
      var e = this.metrics.map(function(r) {
        return b(b({}, r), { tags: r.tags.join(",") });
      });
      console.table ? console.table(e) : console.log(e), this.metrics = [];
    }, t.prototype.serialize = function() {
      return this.metrics.map(function(e) {
        return {
          m: e.metric,
          v: e.value,
          t: e.tags,
          k: Xr(e.type),
          e: e.timestamp
        };
      });
    }, t;
  }()
), Zr = (
  /** @class */
  function(t) {
    q(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.gauge = function() {
    }, e.prototype.increment = function() {
    }, e.prototype.flush = function() {
    }, e.prototype.serialize = function() {
      return [];
    }, e;
  }(Gt)
), ae = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      var r, n, a;
      this.retry = (r = e.retry) !== null && r !== void 0 ? r : !0, this.type = (n = e.type) !== null && n !== void 0 ? n : "plugin Error", this.reason = (a = e.reason) !== null && a !== void 0 ? a : "";
    }
    return t;
  }()
), Fe = (
  /** @class */
  function() {
    function t(e, r, n, a) {
      r === void 0 && (r = ft()), n === void 0 && (n = new Zr()), a === void 0 && (a = new Yr()), this.attempts = 0, this.event = e, this._id = r, this.logger = a, this.stats = n;
    }
    return t.system = function() {
    }, t.prototype.isSame = function(e) {
      return e.id === this.id;
    }, t.prototype.cancel = function(e) {
      throw e || new ae({ reason: "Context Cancel" });
    }, t.prototype.log = function(e, r, n) {
      this.logger.log(e, r, n);
    }, Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.updateEvent = function(e, r) {
      var n;
      if (e.split(".")[0] === "integrations") {
        var a = e.split(".")[1];
        if (((n = this.event.integrations) === null || n === void 0 ? void 0 : n[a]) === !1)
          return this.event;
      }
      return nt(this.event, e, r), this.event;
    }, t.prototype.failedDelivery = function() {
      return this._failedDelivery;
    }, t.prototype.setFailedDelivery = function(e) {
      this._failedDelivery = e;
    }, t.prototype.logs = function() {
      return this.logger.logs;
    }, t.prototype.flush = function() {
      this.logger.flush(), this.stats.flush();
    }, t.prototype.toJSON = function() {
      return {
        id: this._id,
        event: this.event,
        logs: this.logger.logs,
        metrics: this.stats.metrics
      };
    }, t;
  }()
);
function en(t, e) {
  var r = {};
  return t.forEach(function(n) {
    var a, i = void 0;
    {
      var s = n[e];
      i = typeof s != "string" ? JSON.stringify(s) : s;
    }
    i !== void 0 && (r[i] = N(N([], (a = r[i]) !== null && a !== void 0 ? a : [], !0), [n], !1));
  }), r;
}
var tn = function(t) {
  return typeof t == "object" && t !== null && "then" in t && typeof t.then == "function";
}, rn = function() {
  var t, e, r = 0;
  return {
    done: function() {
      return t;
    },
    run: function(n) {
      var a = n();
      return tn(a) && (++r === 1 && (t = new Promise(function(i) {
        return e = i;
      })), a.finally(function() {
        return --r === 0 && e();
      })), a;
    }
  };
};
function nn(t) {
  return S(this, void 0, void 0, function() {
    var e;
    return k(this, function(r) {
      switch (r.label) {
        case 0:
          return r.trys.push([0, 2, , 3]), [4, t()];
        case 1:
          return [2, r.sent()];
        case 2:
          return e = r.sent(), [2, Promise.reject(e)];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function we(t, e) {
  t.log("debug", "plugin", { plugin: e.name });
  var r = (/* @__PURE__ */ new Date()).getTime(), n = e[t.event.type];
  if (n === void 0)
    return Promise.resolve(t);
  var a = nn(function() {
    return n.apply(e, [t]);
  }).then(function(i) {
    var s = (/* @__PURE__ */ new Date()).getTime() - r;
    return i.stats.gauge("plugin_time", s, ["plugin:".concat(e.name)]), i;
  }).catch(function(i) {
    if (i instanceof ae && i.type === "middleware_cancellation")
      throw i;
    return i instanceof ae ? (t.log("warn", i.type, {
      plugin: e.name,
      error: i
    }), i) : (t.log("error", "plugin Error", {
      plugin: e.name,
      error: i
    }), t.stats.increment("plugin_error", 1, ["plugin:".concat(e.name)]), i);
  });
  return a;
}
function an(t, e) {
  return we(t, e).then(function(r) {
    if (r instanceof Fe)
      return r;
    t.log("debug", "Context canceled"), t.stats.increment("context_canceled"), t.cancel(r);
  });
}
var on = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.criticalTasks = rn(), n.plugins = [], n.failedInitializations = [], n.flushing = !1, n.queue = r, n.queue.on(Ht, function() {
        n.scheduleFlush(0);
      }), n;
    }
    return e.prototype.register = function(r, n, a) {
      return S(this, void 0, void 0, function() {
        var i, s, o = this;
        return k(this, function(u) {
          switch (u.label) {
            case 0:
              return this.plugins.push(n), i = function(l) {
                o.failedInitializations.push(n.name), o.emit("initialization_failure", n), console.warn(n.name, l), r.log("warn", "Failed to load destination", {
                  plugin: n.name,
                  error: l
                }), o.plugins = o.plugins.filter(function(c) {
                  return c !== n;
                });
              }, n.type === "destination" && n.name !== "Segment.io" ? (n.load(r, a).catch(i), [3, 4]) : [3, 1];
            case 1:
              return u.trys.push([1, 3, , 4]), [4, n.load(r, a)];
            case 2:
              return u.sent(), [3, 4];
            case 3:
              return s = u.sent(), i(s), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.deregister = function(r, n, a) {
      return S(this, void 0, void 0, function() {
        var i;
        return k(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 3, , 4]), n.unload ? [4, Promise.resolve(n.unload(r, a))] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              return this.plugins = this.plugins.filter(function(o) {
                return o.name !== n.name;
              }), [3, 4];
            case 3:
              return i = s.sent(), r.log("warn", "Failed to unload destination", {
                plugin: n.name,
                error: i
              }), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.dispatch = function(r) {
      return S(this, void 0, void 0, function() {
        var n;
        return k(this, function(a) {
          return r.log("debug", "Dispatching"), r.stats.increment("message_dispatched"), this.queue.push(r), n = this.subscribeToDelivery(r), this.scheduleFlush(0), [2, n];
        });
      });
    }, e.prototype.subscribeToDelivery = function(r) {
      return S(this, void 0, void 0, function() {
        var n = this;
        return k(this, function(a) {
          return [2, new Promise(function(i) {
            var s = function(o, u) {
              o.isSame(r) && (n.off("flush", s), i(o));
            };
            n.on("flush", s);
          })];
        });
      });
    }, e.prototype.dispatchSingle = function(r) {
      return S(this, void 0, void 0, function() {
        var n = this;
        return k(this, function(a) {
          return r.log("debug", "Dispatching"), r.stats.increment("message_dispatched"), this.queue.updateAttempts(r), r.attempts = 1, [2, this.deliver(r).catch(function(i) {
            var s = n.enqueuRetry(i, r);
            return s ? n.subscribeToDelivery(r) : (r.setFailedDelivery({ reason: i }), r);
          })];
        });
      });
    }, e.prototype.isEmpty = function() {
      return this.queue.length === 0;
    }, e.prototype.scheduleFlush = function(r) {
      var n = this;
      r === void 0 && (r = 500), !this.flushing && (this.flushing = !0, setTimeout(function() {
        n.flush().then(function() {
          setTimeout(function() {
            n.flushing = !1, n.queue.length && n.scheduleFlush(0);
          }, 0);
        });
      }, r));
    }, e.prototype.deliver = function(r) {
      return S(this, void 0, void 0, function() {
        var n, a, i, s;
        return k(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.criticalTasks.done()];
            case 1:
              o.sent(), n = Date.now(), o.label = 2;
            case 2:
              return o.trys.push([2, 4, , 5]), [4, this.flushOne(r)];
            case 3:
              return r = o.sent(), a = Date.now() - n, this.emit("delivery_success", r), r.stats.gauge("delivered", a), r.log("debug", "Delivered", r.event), [2, r];
            case 4:
              throw i = o.sent(), s = i, r.log("error", "Failed to deliver", s), this.emit("delivery_failure", r, s), r.stats.increment("delivery_failed"), i;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.enqueuRetry = function(r, n) {
      var a = !(r instanceof ae) || r.retry;
      return a ? this.queue.pushWithBackoff(n) : !1;
    }, e.prototype.flush = function() {
      return S(this, void 0, void 0, function() {
        var r, n, a;
        return k(this, function(i) {
          switch (i.label) {
            case 0:
              if (this.queue.length === 0)
                return [2, []];
              if (r = this.queue.pop(), !r)
                return [2, []];
              r.attempts = this.queue.getAttempts(r), i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.deliver(r)];
            case 2:
              return r = i.sent(), this.emit("flush", r, !0), [3, 4];
            case 3:
              return n = i.sent(), a = this.enqueuRetry(n, r), a || (r.setFailedDelivery({ reason: n }), this.emit("flush", r, !1)), [2, []];
            case 4:
              return [2, [r]];
          }
        });
      });
    }, e.prototype.isReady = function() {
      return !0;
    }, e.prototype.availableExtensions = function(r) {
      var n = this.plugins.filter(function(h) {
        var p, m, v;
        if (h.type !== "destination" && h.name !== "Segment.io")
          return !0;
        var y = void 0;
        return (p = h.alternativeNames) === null || p === void 0 || p.forEach(function(g) {
          r[g] !== void 0 && (y = r[g]);
        }), (v = (m = r[h.name]) !== null && m !== void 0 ? m : y) !== null && v !== void 0 ? v : (h.name === "Segment.io" ? !0 : r.All) !== !1;
      }), a = en(n, "type"), i = a.before, s = i === void 0 ? [] : i, o = a.enrichment, u = o === void 0 ? [] : o, l = a.destination, c = l === void 0 ? [] : l, d = a.after, f = d === void 0 ? [] : d;
      return {
        before: s,
        enrichment: u,
        destinations: c,
        after: f
      };
    }, e.prototype.flushOne = function(r) {
      var n, a;
      return S(this, void 0, void 0, function() {
        var i, s, o, u, l, c, p, d, f, h, p, m, v, y, g;
        return k(this, function(_) {
          switch (_.label) {
            case 0:
              if (!this.isReady())
                throw new Error("Not ready");
              r.attempts > 1 && this.emit("delivery_retry", r), i = this.availableExtensions((n = r.event.integrations) !== null && n !== void 0 ? n : {}), s = i.before, o = i.enrichment, u = 0, l = s, _.label = 1;
            case 1:
              return u < l.length ? (c = l[u], [4, an(r, c)]) : [3, 4];
            case 2:
              p = _.sent(), p instanceof Fe && (r = p), this.emit("message_enriched", r, c), _.label = 3;
            case 3:
              return u++, [3, 1];
            case 4:
              d = 0, f = o, _.label = 5;
            case 5:
              return d < f.length ? (h = f[d], [4, we(r, h)]) : [3, 8];
            case 6:
              p = _.sent(), p instanceof Fe && (r = p), this.emit("message_enriched", r, h), _.label = 7;
            case 7:
              return d++, [3, 5];
            case 8:
              return m = this.availableExtensions((a = r.event.integrations) !== null && a !== void 0 ? a : {}), v = m.destinations, y = m.after, [4, new Promise(function(w, P) {
                setTimeout(function() {
                  var I = v.map(function(x) {
                    return we(r, x);
                  });
                  Promise.all(I).then(w).catch(P);
                }, 0);
              })];
            case 9:
              return _.sent(), r.stats.increment("message_delivered"), this.emit("message_delivered", r), g = y.map(function(w) {
                return we(r, w);
              }), [4, Promise.all(g)];
            case 10:
              return _.sent(), [2, r];
          }
        });
      });
    }, e;
  }(mt)
), sn = function(t, e) {
  var r = Date.now() - t;
  return Math.max((e ?? 300) - r, 0);
};
function un(t, e, r, n) {
  return S(this, void 0, void 0, function() {
    var a, i;
    return k(this, function(s) {
      switch (s.label) {
        case 0:
          return r.emit("dispatch_start", t), a = Date.now(), e.isEmpty() ? [4, e.dispatchSingle(t)] : [3, 2];
        case 1:
          return i = s.sent(), [3, 4];
        case 2:
          return [4, e.dispatch(t)];
        case 3:
          i = s.sent(), s.label = 4;
        case 4:
          return n?.callback ? [4, Wr(i, n.callback, sn(a, n.timeout))] : [3, 6];
        case 5:
          i = s.sent(), s.label = 6;
        case 6:
          return n?.debug && i.flush(), [2, i];
      }
    });
  });
}
function ln(t, e, r, n) {
  var a, i = [t, e, r, n], s = U(t) ? t.event : t;
  if (!s || !ie(s))
    throw new Error("Event missing");
  var o = U(t) ? (a = t.properties) !== null && a !== void 0 ? a : {} : U(e) ? e : {}, u = {};
  be(r) || (u = r ?? {}), U(t) && !be(e) && (u = e ?? {});
  var l = i.find(be);
  return [s, o, u, l];
}
function Dt(t, e, r, n, a) {
  var i, s, o = null, u = null, l = [t, e, r, n, a], c = l.filter(ie);
  c.length === 1 ? ie(l[1]) ? (u = l[1], o = null) : (u = c[0], o = null) : c.length === 2 && (typeof l[0] == "string" && (o = l[0]), typeof l[1] == "string" && (u = l[1]));
  var d = l.find(be), f = l.filter(U);
  return f.length === 1 ? U(l[2]) ? (s = {}, i = l[2]) : U(l[3]) ? (i = {}, s = l[3]) : (i = f[0], s = {}) : f.length === 2 && (i = f[0], s = f[1]), [
    o,
    u,
    i ?? (i = {}),
    s ?? (s = {}),
    d
  ];
}
var Lt = function(t) {
  return function() {
    for (var e, r, n, a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    for (var s = {}, o = [
      "callback",
      "options",
      "traits",
      "id"
    ], u = 0, l = a; u < l.length; u++) {
      var c = l[u], d = o.pop();
      if (d === "id") {
        if (ie(c) || it(c)) {
          s.id = c.toString();
          continue;
        }
        if (c == null)
          continue;
        d = o.pop();
      }
      if ((d === "traits" || d === "options") && (c == null || U(c)) && (s[d] = c), be(c)) {
        s.callback = c;
        break;
      }
    }
    return [
      (e = s.id) !== null && e !== void 0 ? e : t.id(),
      (r = s.traits) !== null && r !== void 0 ? r : {},
      (n = s.options) !== null && n !== void 0 ? n : {},
      s.callback
    ];
  };
};
function cn(t, e, r, n) {
  it(t) && (t = t.toString()), it(e) && (e = e.toString());
  var a = [t, e, r, n], i = a.filter(ie), s = i[0], o = s === void 0 ? t : s, u = i[1], l = u === void 0 ? null : u, c = a.filter(U)[0], d = c === void 0 ? {} : c, f = a.find(be);
  return [o, l, d, f];
}
function gt() {
  return typeof window < "u";
}
function Jt() {
  return !gt();
}
function Wt() {
  return gt() ? window.navigator.onLine : !0;
}
function oe() {
  return !Wt();
}
function fn(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var a = new XMLHttpRequest(), i = [], s = [], o = {}, u = function() {
      return { ok: (a.status / 100 | 0) == 2, statusText: a.statusText, status: a.status, url: a.responseURL, text: function() {
        return Promise.resolve(a.responseText);
      }, json: function() {
        return Promise.resolve(a.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([a.response]));
      }, clone: u, headers: { keys: function() {
        return i;
      }, entries: function() {
        return s;
      }, get: function(c) {
        return o[c.toLowerCase()];
      }, has: function(c) {
        return c.toLowerCase() in o;
      } } };
    };
    for (var l in a.open(e.method || "get", t, !0), a.onload = function() {
      a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(c, d, f) {
        i.push(d = d.toLowerCase()), s.push([d, f]), o[d] = o[d] ? o[d] + "," + f : f;
      }), r(u());
    }, a.onerror = n, a.withCredentials = e.credentials == "include", e.headers) a.setRequestHeader(l, e.headers[l]);
    a.send(e.body || null);
  });
}
var bt = function() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : null;
}, Re = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = bt();
  return (r && r.fetch || fn).apply(void 0, t);
}, ze = "1.81.1", Qt = "api.segment.io/v1", dn = function(t, e, r) {
  var n = e.reduce(function(a, i) {
    var s = i.split(":"), o = s[0], u = s[1];
    return a[o] = u, a;
  }, {});
  return {
    type: "Counter",
    metric: t,
    value: 1,
    tags: b(b({}, n), { library: "analytics.js", library_version: "npm:next-".concat(ze) })
  };
};
function Ye(t) {
  console.error("Error sending segment performance metrics", t);
}
var hn = (
  /** @class */
  function() {
    function t(e) {
      var r = this, n, a, i, s, o;
      if (this.host = (n = e?.host) !== null && n !== void 0 ? n : Qt, this.sampleRate = (a = e?.sampleRate) !== null && a !== void 0 ? a : 1, this.flushTimer = (i = e?.flushTimer) !== null && i !== void 0 ? i : 30 * 1e3, this.maxQueueSize = (s = e?.maxQueueSize) !== null && s !== void 0 ? s : 20, this.protocol = (o = e?.protocol) !== null && o !== void 0 ? o : "https", this.queue = [], this.sampleRate > 0) {
        var u = !1, l = function() {
          u || (u = !0, r.flush().catch(Ye), u = !1, setTimeout(l, r.flushTimer));
        };
        l();
      }
    }
    return t.prototype.increment = function(e, r) {
      if (e.includes("analytics_js.") && r.length !== 0 && !(Math.random() > this.sampleRate) && !(this.queue.length >= this.maxQueueSize)) {
        var n = dn(e, r);
        this.queue.push(n), e.includes("error") && this.flush().catch(Ye);
      }
    }, t.prototype.flush = function() {
      return S(this, void 0, void 0, function() {
        var e = this;
        return k(this, function(r) {
          switch (r.label) {
            case 0:
              return this.queue.length <= 0 ? [
                2
                /*return*/
              ] : [4, this.send().catch(function(n) {
                Ye(n), e.sampleRate = 0;
              })];
            case 1:
              return r.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.send = function() {
      return S(this, void 0, void 0, function() {
        var e, r, n;
        return k(this, function(a) {
          return e = { series: this.queue }, this.queue = [], r = { "Content-Type": "text/plain" }, n = "".concat(this.protocol, "://").concat(this.host, "/m"), [2, Re(n, {
            headers: r,
            body: JSON.stringify(e),
            method: "POST"
          })];
        });
      });
    }, t;
  }()
), Me, Yt = (
  /** @class */
  function(t) {
    q(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.initRemoteMetrics = function(r) {
      Me = new hn(r);
    }, e.prototype.increment = function(r, n, a) {
      t.prototype.increment.call(this, r, n, a), Me?.increment(r, a ?? []);
    }, e;
  }(Gt)
), Q = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      return t.call(this, r, n, new Yt()) || this;
    }
    return e.system = function() {
      return new this({ type: "track", event: "system" });
    }, e;
  }(Fe)
);
function pn(t) {
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === "object";
}
var Xt = "bpc", Zt = function(t, e, r, n, a, i) {
  return {
    __t: Xt,
    c: e,
    p: n,
    u: t,
    s: r,
    t: a,
    r: i
  };
}, vn = Object.keys(Zt("", "", "", "", "", ""));
function yn(t) {
  if (!pn(t) || t.__t !== Xt) return !1;
  for (var e in t)
    if (!vn.includes(e))
      return !1;
  return !0;
}
var mn = function(t, e) {
  return t.indexOf("?") > -1 ? t : t + e;
}, gn = function(t) {
  var e = t.indexOf("#");
  return e === -1 ? t : t.slice(0, e);
}, bn = function(t) {
  try {
    return new URL(t).pathname;
  } catch {
    return t[0] === "/" ? t : "/" + t;
  }
}, er = function(t) {
  var e = t.c, r = t.p, n = t.s, a = t.u, i = t.r, s = t.t, o = e ? bn(e) : r, u = e ? mn(e, n) : gn(a);
  return {
    path: o,
    referrer: i,
    search: n,
    title: s,
    url: u
  };
}, tr = function() {
  var t = document.querySelector("link[rel='canonical']");
  return Zt(location.href, t && t.getAttribute("href") || void 0, location.search, location.pathname, document.title, document.referrer);
}, wn = function() {
  return er(tr());
};
function _n(t, e) {
  return Object.assign.apply(Object, N([{}], e.map(function(r) {
    var n;
    if (t && Object.prototype.hasOwnProperty.call(t, r))
      return n = {}, n[r] = t[r], n;
  }), !1));
}
var ve = function(t, e) {
  e === void 0 && (e = wn());
  var r = t.context, n;
  t.type === "page" && (n = t.properties && _n(t.properties, Object.keys(e)), t.properties = b(b(b({}, e), t.properties), t.name ? { name: t.name } : {})), r.page = b(b(b({}, e), n), r.page);
}, Sn = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r) {
      var n = t.call(this, {
        createMessageId: function() {
          return "ajs-next-".concat(Date.now(), "-").concat(ft());
        },
        onEventMethodCall: function(a) {
          var i = a.options;
          n.maybeUpdateAnonId(i);
        },
        onFinishedEvent: function(a) {
          return n.addIdentity(a), a;
        }
      }) || this;
      return n.user = r, n;
    }
    return e.prototype.maybeUpdateAnonId = function(r) {
      r?.anonymousId && this.user.anonymousId(r.anonymousId);
    }, e.prototype.addIdentity = function(r) {
      this.user.id() && (r.userId = this.user.id()), this.user.anonymousId() && (r.anonymousId = this.user.anonymousId());
    }, e.prototype.track = function(r, n, a, i, s) {
      var o = t.prototype.track.call(this, r, n, a, i);
      return ve(o, s), o;
    }, e.prototype.page = function(r, n, a, i, s, o) {
      var u = t.prototype.page.call(this, r, n, a, i, s);
      return ve(u, o), u;
    }, e.prototype.screen = function(r, n, a, i, s, o) {
      var u = t.prototype.screen.call(this, r, n, a, i, s);
      return ve(u, o), u;
    }, e.prototype.identify = function(r, n, a, i, s) {
      var o = t.prototype.identify.call(this, r, n, a, i);
      return ve(o, s), o;
    }, e.prototype.group = function(r, n, a, i, s) {
      var o = t.prototype.group.call(this, r, n, a, i);
      return ve(o, s), o;
    }, e.prototype.alias = function(r, n, a, i, s) {
      var o = t.prototype.alias.call(this, r, n, a, i);
      return ve(o, s), o;
    }, e;
  }(Gr)
), kn = function(t) {
  return "addMiddleware" in t && t.type === "destination";
}, Y = {
  getItem: function() {
  },
  setItem: function() {
  },
  removeItem: function() {
  }
};
try {
  Y = gt() && window.localStorage ? window.localStorage : Y;
} catch (t) {
  console.warn("Unable to access localStorage", t);
}
function rr(t) {
  var e = Y.getItem(t);
  return (e ? JSON.parse(e) : []).map(function(r) {
    return new Q(r.event, r.id);
  });
}
function Pn(t, e) {
  var r = rr(t), n = N(N([], e, !0), r, !0), a = n.reduce(function(i, s) {
    var o;
    return b(b({}, i), (o = {}, o[s.id] = s, o));
  }, {});
  Y.setItem(t, JSON.stringify(Object.values(a)));
}
function nr(t) {
  var e = Y.getItem(t);
  return e ? JSON.parse(e) : {};
}
function xn(t, e) {
  var r = nr(t);
  Y.setItem(t, JSON.stringify(b(b({}, r), e)));
}
function Rt(t) {
  Y.removeItem(t);
}
var In = function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function at(t, e, r) {
  r === void 0 && (r = 0);
  var n = 50, a = "persisted-queue:v1:".concat(t, ":lock"), i = function(l) {
    return (/* @__PURE__ */ new Date()).getTime() > l;
  }, s = Y.getItem(a), o = s ? JSON.parse(s) : null, u = o === null || i(o);
  if (u) {
    Y.setItem(a, JSON.stringify(In() + n)), e(), Y.removeItem(a);
    return;
  }
  !u && r < 3 ? setTimeout(function() {
    at(t, e, r + 1);
  }, n) : console.error("Unable to retrieve lock");
}
var Ue = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var a = t.call(this, r, []) || this, i = "persisted-queue:v1:".concat(n, ":items"), s = "persisted-queue:v1:".concat(n, ":seen"), o = [], u = {};
      return at(n, function() {
        try {
          o = rr(i), u = nr(s), Rt(i), Rt(s), a.queue = N(N([], o, !0), a.queue, !0), a.seen = b(b({}, u), a.seen);
        } catch (l) {
          console.error(l);
        }
      }), window.addEventListener("pagehide", function() {
        if (a.todo > 0) {
          var l = N(N([], a.queue, !0), a.future, !0);
          try {
            at(n, function() {
              Pn(i, l), xn(s, a.seen);
            });
          } catch (c) {
            console.error(c);
          }
        }
      }), a;
    }
    return e;
  }(Le)
), En = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r) {
      return t.call(this, typeof r == "string" ? new Ue(4, r) : r) || this;
    }
    return e.prototype.flush = function() {
      return S(this, void 0, void 0, function() {
        return k(this, function(r) {
          return oe() ? [2, []] : [2, t.prototype.flush.call(this)];
        });
      });
    }, e;
  }(on)
);
function wt(t) {
  for (var e = t.constructor.prototype, r = 0, n = Object.getOwnPropertyNames(e); r < n.length; r++) {
    var a = n[r];
    if (a !== "constructor") {
      var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, a);
      i && typeof i.value == "function" && (t[a] = t[a].bind(t));
    }
  }
  return t;
}
function On(t) {
  var e = t.hostname, r = e.split("."), n = r[r.length - 1], a = [];
  if (r.length === 4 && parseInt(n, 10) > 0 || r.length <= 1)
    return a;
  for (var i = r.length - 2; i >= 0; --i)
    a.push(r.slice(i).join("."));
  return a;
}
function An(t) {
  try {
    return new URL(t);
  } catch {
    return;
  }
}
function ir(t) {
  var e = An(t);
  if (e)
    for (var r = On(e), n = 0; n < r.length; ++n) {
      var a = "__tld__", i = r[n], s = { domain: "." + i };
      try {
        if (ee.set(a, "1", s), ee.get(a))
          return ee.remove(a, s), i;
      } catch {
        return;
      }
    }
}
var jn = 365, ar = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = t.defaults), this.options = b(b({}, t.defaults), e);
    }
    return Object.defineProperty(t, "defaults", {
      get: function() {
        return {
          maxage: jn,
          domain: ir(window.location.href),
          path: "/",
          sameSite: "Lax"
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.opts = function() {
      return {
        sameSite: this.options.sameSite,
        expires: this.options.maxage,
        domain: this.options.domain,
        path: this.options.path,
        secure: this.options.secure
      };
    }, t.prototype.get = function(e) {
      var r;
      try {
        var n = ee.get(e);
        if (n == null)
          return null;
        try {
          return (r = JSON.parse(n)) !== null && r !== void 0 ? r : null;
        } catch {
          return n ?? null;
        }
      } catch {
        return null;
      }
    }, t.prototype.set = function(e, r) {
      typeof r == "string" ? ee.set(e, r, this.opts()) : r === null ? ee.remove(e, this.opts()) : ee.set(e, JSON.stringify(r), this.opts());
    }, t.prototype.remove = function(e) {
      return ee.remove(e, this.opts());
    }, t;
  }()
), Mn = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.localStorageWarning = function(e, r) {
      console.warn("Unable to access ".concat(e, ", localStorage may be ").concat(r));
    }, t.prototype.get = function(e) {
      var r;
      try {
        var n = localStorage.getItem(e);
        if (n === null)
          return null;
        try {
          return (r = JSON.parse(n)) !== null && r !== void 0 ? r : null;
        } catch {
          return n ?? null;
        }
      } catch {
        return this.localStorageWarning(e, "unavailable"), null;
      }
    }, t.prototype.set = function(e, r) {
      try {
        localStorage.setItem(e, JSON.stringify(r));
      } catch {
        this.localStorageWarning(e, "full");
      }
    }, t.prototype.remove = function(e) {
      try {
        return localStorage.removeItem(e);
      } catch {
        this.localStorageWarning(e, "unavailable");
      }
    }, t;
  }()
), _t = (
  /** @class */
  function() {
    function t() {
      this.cache = {};
    }
    return t.prototype.get = function(e) {
      var r;
      return (r = this.cache[e]) !== null && r !== void 0 ? r : null;
    }, t.prototype.set = function(e, r) {
      this.cache[e] = r;
    }, t.prototype.remove = function(e) {
      delete this.cache[e];
    }, t;
  }()
), z = {
  Cookie: "cookie",
  LocalStorage: "localStorage",
  Memory: "memory"
};
function or(t) {
  return t && t.stores && Array.isArray(t.stores) && t.stores.every(function(e) {
    return Object.values(z).includes(e);
  });
}
function Cn(t) {
  return typeof t == "object" && t.name !== void 0;
}
var Xe = function(t, e, r, n) {
  console.warn("".concat(t.constructor.name, ": Can't ").concat(e, ' key "').concat(r, '" | Err: ').concat(n));
}, le = (
  /** @class */
  function() {
    function t(e) {
      this.stores = e;
    }
    return t.prototype.get = function(e) {
      for (var r = null, n = 0, a = this.stores; n < a.length; n++) {
        var i = a[n];
        try {
          if (r = i.get(e), r != null)
            return r;
        } catch (s) {
          Xe(i, "get", e, s);
        }
      }
      return null;
    }, t.prototype.set = function(e, r) {
      this.stores.forEach(function(n) {
        try {
          n.set(e, r);
        } catch (a) {
          Xe(n, "set", e, a);
        }
      });
    }, t.prototype.clear = function(e) {
      this.stores.forEach(function(r) {
        try {
          r.remove(e);
        } catch (n) {
          Xe(r, "remove", e, n);
        }
      });
    }, t.prototype.getAndSync = function(e) {
      var r = this.get(e), n = typeof r == "number" ? r.toString() : r;
      return this.set(e, n), n;
    }, t;
  }()
);
function ot(t) {
  var e = t.map(function(r) {
    var n, a;
    switch (Cn(r) ? (n = r.name, a = r.settings) : n = r, n) {
      case z.Cookie:
        return new ar(a);
      case z.LocalStorage:
        return new Mn();
      case z.Memory:
        return new _t();
      default:
        throw new Error("Unknown Store Type: ".concat(r));
    }
  });
  return e;
}
function sr(t, e) {
  return t.map(function(r) {
    return e && r === z.Cookie ? {
      name: r,
      settings: e
    } : r;
  });
}
var ue = {
  persist: !0,
  cookie: {
    key: "ajs_user_id",
    oldKey: "ajs_user"
  },
  localStorage: {
    key: "ajs_user_traits"
  }
}, ur = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = ue);
      var n = this, a, i, s, o;
      this.options = {}, this.id = function(l) {
        if (n.options.disable)
          return null;
        var c = n.identityStore.getAndSync(n.idKey);
        if (l !== void 0) {
          n.identityStore.set(n.idKey, l);
          var d = l !== c && c !== null && l !== null;
          d && n.anonymousId(null);
        }
        var f = n.identityStore.getAndSync(n.idKey);
        if (f)
          return f;
        var h = n.legacyUserStore.get(ue.cookie.oldKey);
        return h ? typeof h == "object" ? h.id : h : null;
      }, this.anonymousId = function(l) {
        var c, d;
        if (n.options.disable)
          return null;
        if (l === void 0) {
          var f = (c = n.identityStore.getAndSync(n.anonKey)) !== null && c !== void 0 ? c : (d = n.legacySIO()) === null || d === void 0 ? void 0 : d[0];
          if (f)
            return f;
        }
        return l === null ? (n.identityStore.set(n.anonKey, null), n.identityStore.getAndSync(n.anonKey)) : (n.identityStore.set(n.anonKey, l ?? ft()), n.identityStore.getAndSync(n.anonKey));
      }, this.traits = function(l) {
        var c;
        if (!n.options.disable)
          return l === null && (l = {}), l && n.traitsStore.set(n.traitsKey, l ?? {}), (c = n.traitsStore.get(n.traitsKey)) !== null && c !== void 0 ? c : {};
      }, this.options = b(b({}, ue), e), this.cookieOptions = r, this.idKey = (i = (a = e.cookie) === null || a === void 0 ? void 0 : a.key) !== null && i !== void 0 ? i : ue.cookie.key, this.traitsKey = (o = (s = e.localStorage) === null || s === void 0 ? void 0 : s.key) !== null && o !== void 0 ? o : ue.localStorage.key, this.anonKey = "ajs_anonymous_id", this.identityStore = this.createStorage(this.options, r), this.legacyUserStore = this.createStorage(this.options, r, function(l) {
        return l === z.Cookie;
      }), this.traitsStore = this.createStorage(this.options, r, function(l) {
        return l !== z.Cookie;
      });
      var u = this.legacyUserStore.get(ue.cookie.oldKey);
      u && typeof u == "object" && (u.id && this.id(u.id), u.traits && this.traits(u.traits)), wt(this);
    }
    return t.prototype.legacySIO = function() {
      var e = this.legacyUserStore.get("_sio");
      if (!e)
        return null;
      var r = e.split("----"), n = r[0], a = r[1];
      return [n, a];
    }, t.prototype.identify = function(e, r) {
      if (!this.options.disable) {
        r = r ?? {};
        var n = this.id();
        (n === null || n === e) && (r = b(b({}, this.traits()), r)), e && this.id(e), this.traits(r);
      }
    }, t.prototype.logout = function() {
      this.anonymousId(null), this.id(null), this.traits({});
    }, t.prototype.reset = function() {
      this.logout(), this.identityStore.clear(this.idKey), this.identityStore.clear(this.anonKey), this.traitsStore.clear(this.traitsKey);
    }, t.prototype.load = function() {
      return new t(this.options, this.cookieOptions);
    }, t.prototype.save = function() {
      return !0;
    }, t.prototype.createStorage = function(e, r, n) {
      var a = [
        z.LocalStorage,
        z.Cookie,
        z.Memory
      ];
      return e.disable ? new le([]) : e.persist ? (e.storage !== void 0 && e.storage !== null && or(e.storage) && (a = e.storage.stores), e.localStorageFallbackDisabled && (a = a.filter(function(i) {
        return i !== z.LocalStorage;
      })), n && (a = a.filter(n)), new le(ot(sr(a, r)))) : new le([new _t()]);
    }, t.defaults = ue, t;
  }()
), zt = {
  persist: !0,
  cookie: {
    key: "ajs_group_id"
  },
  localStorage: {
    key: "ajs_group_properties"
  }
}, Tn = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      r === void 0 && (r = zt);
      var a = t.call(this, b(b({}, zt), r), n) || this;
      return a.anonymousId = function(i) {
      }, wt(a), a;
    }
    return e;
  }(ur)
), St = "analytics";
function lr() {
  return window[St];
}
function Fn(t) {
  St = t;
}
function Nn(t) {
  window[St] = t;
}
var Dn = function(t) {
  return typeof t == "object" && t !== null && "then" in t && typeof t.then == "function";
}, cr = function(t, e, r) {
  r.getAndRemove(t).forEach(function(n) {
    Be(e, n).catch(console.error);
  });
}, Ln = function(t, e) {
  return S(void 0, void 0, void 0, function() {
    var r, n, a;
    return k(this, function(i) {
      switch (i.label) {
        case 0:
          r = 0, n = e.getAndRemove("addSourceMiddleware"), i.label = 1;
        case 1:
          return r < n.length ? (a = n[r], [4, Be(t, a).catch(console.error)]) : [3, 4];
        case 2:
          i.sent(), i.label = 3;
        case 3:
          return r++, [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}, Rn = function(t, e) {
  return S(void 0, void 0, void 0, function() {
    var r, n, a;
    return k(this, function(i) {
      switch (i.label) {
        case 0:
          r = 0, n = e.getAndRemove("register"), i.label = 1;
        case 1:
          return r < n.length ? (a = n[r], [4, Be(t, a).catch(console.error)]) : [3, 4];
        case 2:
          i.sent(), i.label = 3;
        case 3:
          return r++, [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}, zn = cr.bind(void 0, "on"), Un = cr.bind(void 0, "setAnonymousId"), Bn = function(t, e) {
  Object.keys(e.calls).forEach(function(r) {
    e.getAndRemove(r).forEach(function(n) {
      setTimeout(function() {
        Be(t, n).catch(console.error);
      }, 0);
    });
  });
}, ye = function(t) {
  if (fr(t)) {
    var e = t.pop();
    return er(e);
  }
}, fr = function(t) {
  var e = t[t.length - 1];
  return yn(e);
}, st = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, a) {
      n === void 0 && (n = function() {
      }), a === void 0 && (a = console.error), this.method = e, this.resolve = n, this.reject = a, this.called = !1, this.args = r;
    }
    return t;
  }()
), qn = (
  /** @class */
  function() {
    function t() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      this._callMap = {}, this.add.apply(this, e);
    }
    return Object.defineProperty(t.prototype, "calls", {
      /**
       * Pull any buffered method calls from the window object, and use them to hydrate the instance buffer.
       */
      get: function() {
        return this._pushSnippetWindowBuffer(), this._callMap;
      },
      set: function(e) {
        this._callMap = e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.get = function(e) {
      var r;
      return (r = this.calls[e]) !== null && r !== void 0 ? r : [];
    }, t.prototype.getAndRemove = function(e) {
      var r = this.get(e);
      return this.calls[e] = [], r;
    }, t.prototype.add = function() {
      for (var e = this, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      r.forEach(function(a) {
        var i = [
          "track",
          "screen",
          "alias",
          "group",
          "page",
          "identify"
        ];
        i.includes(a.method) && !fr(a.args) && (a.args = N(N([], a.args, !0), [tr()], !1)), e.calls[a.method] ? e.calls[a.method].push(a) : e.calls[a.method] = [a];
      });
    }, t.prototype.clear = function() {
      this._pushSnippetWindowBuffer(), this.calls = {};
    }, t.prototype.toArray = function() {
      var e;
      return (e = []).concat.apply(e, Object.values(this.calls));
    }, t.prototype._pushSnippetWindowBuffer = function() {
    }, t;
  }()
);
function Be(t, e) {
  return S(this, void 0, void 0, function() {
    var r, n;
    return k(this, function(a) {
      switch (a.label) {
        case 0:
          return a.trys.push([0, 3, , 4]), e.called ? [2, void 0] : (e.called = !0, r = t[e.method].apply(t, e.args), Dn(r) ? [4, r] : [3, 2]);
        case 1:
          a.sent(), a.label = 2;
        case 2:
          return e.resolve(r), [3, 4];
        case 3:
          return n = a.sent(), e.reject(n), [3, 4];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
var Vn = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.trackSubmit = this._createMethod("trackSubmit"), this.trackClick = this._createMethod("trackClick"), this.trackLink = this._createMethod("trackLink"), this.pageView = this._createMethod("pageview"), this.identify = this._createMethod("identify"), this.reset = this._createMethod("reset"), this.group = this._createMethod("group"), this.track = this._createMethod("track"), this.ready = this._createMethod("ready"), this.alias = this._createMethod("alias"), this.debug = this._createChainableMethod("debug"), this.page = this._createMethod("page"), this.once = this._createChainableMethod("once"), this.off = this._createChainableMethod("off"), this.on = this._createChainableMethod("on"), this.addSourceMiddleware = this._createMethod("addSourceMiddleware"), this.setAnonymousId = this._createMethod("setAnonymousId"), this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware"), this.screen = this._createMethod("screen"), this.register = this._createMethod("register"), this.deregister = this._createMethod("deregister"), this.user = this._createMethod("user"), this.VERSION = ze, this._preInitBuffer = new qn(), this._promise = e(this._preInitBuffer), this._promise.then(function(n) {
        var a = n[0], i = n[1];
        r.instance = a, r.ctx = i;
      }).catch(function() {
      });
    }
    return t.prototype.then = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return (e = this._promise).then.apply(e, r);
    }, t.prototype.catch = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return (e = this._promise).catch.apply(e, r);
    }, t.prototype.finally = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return (e = this._promise).finally.apply(e, r);
    }, t.prototype._createMethod = function(e) {
      var r = this;
      return function() {
        for (var n, a = [], i = 0; i < arguments.length; i++)
          a[i] = arguments[i];
        if (r.instance) {
          var s = (n = r.instance)[e].apply(n, a);
          return Promise.resolve(s);
        }
        return new Promise(function(o, u) {
          r._preInitBuffer.add(new st(e, a, o, u));
        });
      };
    }, t.prototype._createChainableMethod = function(e) {
      var r = this;
      return function() {
        for (var n, a = [], i = 0; i < arguments.length; i++)
          a[i] = arguments[i];
        return r.instance ? ((n = r.instance)[e].apply(n, a), r) : (r._preInitBuffer.add(new st(e, a)), r);
      };
    }, t;
  }()
), V = {}, X = {}, kt = {}, Kn = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(kt, "__esModule", { value: !0 });
var te = Kn(De);
function me(t, e) {
  return function() {
    var r = this.traits(), n = this.properties ? this.properties() : {};
    return te.default(r, "address." + t) || te.default(r, t) || (e ? te.default(r, "address." + e) : null) || (e ? te.default(r, e) : null) || te.default(n, "address." + t) || te.default(n, t) || (e ? te.default(n, "address." + e) : null) || (e ? te.default(n, e) : null);
  };
}
function $n(t) {
  t.zip = me("postalCode", "zip"), t.country = me("country"), t.street = me("street"), t.state = me("state"), t.city = me("city"), t.region = me("region");
}
kt.default = $n;
var qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.clone = void 0;
function ut(t) {
  if (typeof t != "object")
    return t;
  if (Object.prototype.toString.call(t) === "[object Object]") {
    var e = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = ut(t[r]));
    return e;
  } else return Array.isArray(t) ? t.map(ut) : t;
}
qe.clone = ut;
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
var Hn = {
  Salesforce: !0
};
function Gn(t) {
  return !Hn[t];
}
Pt.default = Gn;
var Oe = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(X, "__esModule", { value: !0 });
X.Facade = void 0;
var Jn = Oe(kt), ke = qe, Wn = Oe(Pt), Qn = Oe(dt), lt = Oe(De), Yn = Oe(Tr);
function K(t, e) {
  e = e || {}, this.raw = ke.clone(t), "clone" in e || (e.clone = !0), e.clone && (t = ke.clone(t)), "traverse" in e || (e.traverse = !0), "timestamp" in t ? t.timestamp = Qn.default(t.timestamp) : t.timestamp = /* @__PURE__ */ new Date(), e.traverse && Yn.default(t), this.opts = e, this.obj = t;
}
X.Facade = K;
var T = K.prototype;
T.proxy = function(t) {
  var e = t.split(".");
  t = e.shift();
  var r = this[t] || this.obj[t];
  return r && (typeof r == "function" && (r = r.call(this) || {}), e.length === 0 ? this.opts.clone ? ct(r) : r : (r = lt.default(r, e.join(".")), this.opts.clone ? ct(r) : r));
};
T.field = function(t) {
  var e = this.obj[t];
  return this.opts.clone ? ct(e) : e;
};
K.proxy = function(t) {
  return function() {
    return this.proxy(t);
  };
};
K.field = function(t) {
  return function() {
    return this.field(t);
  };
};
K.multi = function(t) {
  return function() {
    var e = this.proxy(t + "s");
    if (Array.isArray(e))
      return e;
    var r = this.proxy(t);
    return r && (r = [this.opts.clone ? ke.clone(r) : r]), r || [];
  };
};
K.one = function(t) {
  return function() {
    var e = this.proxy(t);
    if (e)
      return e;
    var r = this.proxy(t + "s");
    if (Array.isArray(r))
      return r[0];
  };
};
T.json = function() {
  var t = this.opts.clone ? ke.clone(this.obj) : this.obj;
  return this.type && (t.type = this.type()), t;
};
T.rawEvent = function() {
  return this.raw;
};
T.options = function(t) {
  var e = this.obj.options || this.obj.context || {}, r = this.opts.clone ? ke.clone(e) : e;
  if (!t)
    return r;
  if (this.enabled(t)) {
    var n = this.integrations(), a = n[t] || lt.default(n, t);
    return typeof a != "object" && (a = lt.default(this.options(), t)), typeof a == "object" ? a : {};
  }
};
T.context = T.options;
T.enabled = function(t) {
  var e = this.proxy("options.providers.all");
  typeof e != "boolean" && (e = this.proxy("options.all")), typeof e != "boolean" && (e = this.proxy("integrations.all")), typeof e != "boolean" && (e = !0);
  var r = e && Wn.default(t), n = this.integrations();
  if (n.providers && n.providers.hasOwnProperty(t) && (r = n.providers[t]), n.hasOwnProperty(t)) {
    var a = n[t];
    typeof a == "boolean" ? r = a : r = !0;
  }
  return !!r;
};
T.integrations = function() {
  return this.obj.integrations || this.proxy("options.providers") || this.options();
};
T.active = function() {
  var t = this.proxy("options.active");
  return t == null && (t = !0), t;
};
T.anonymousId = function() {
  return this.field("anonymousId") || this.field("sessionId");
};
T.sessionId = T.anonymousId;
T.groupId = K.proxy("options.groupId");
T.traits = function(t) {
  var e = this.proxy("options.traits") || {}, r = this.userId();
  t = t || {}, r && (e.id = r);
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      var a = this[n] == null ? this.proxy("options.traits." + n) : this[n]();
      if (a == null)
        continue;
      e[t[n]] = a, delete e[n];
    }
  return e;
};
T.library = function() {
  var t = this.proxy("options.library");
  return t ? typeof t == "string" ? { name: t, version: null } : t : { name: "unknown", version: null };
};
T.device = function() {
  var t = this.proxy("context.device");
  (typeof t != "object" || t === null) && (t = {});
  var e = this.library().name;
  return t.type || (e.indexOf("ios") > -1 && (t.type = "ios"), e.indexOf("android") > -1 && (t.type = "android")), t;
};
T.userAgent = K.proxy("context.userAgent");
T.timezone = K.proxy("context.timezone");
T.timestamp = K.field("timestamp");
T.channel = K.field("channel");
T.ip = K.proxy("context.ip");
T.userId = K.field("userId");
Jn.default(T);
function ct(t) {
  return ke.clone(t);
}
var Ve = {}, Xn = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.Alias = void 0;
var Zn = Xn(he), dr = X;
function H(t, e) {
  dr.Facade.call(this, t, e);
}
Ve.Alias = H;
Zn.default(H, dr.Facade);
H.prototype.action = function() {
  return "alias";
};
H.prototype.type = H.prototype.action;
H.prototype.previousId = function() {
  return this.field("previousId") || this.field("from");
};
H.prototype.from = H.prototype.previousId;
H.prototype.userId = function() {
  return this.field("userId") || this.field("to");
};
H.prototype.to = H.prototype.userId;
var Ke = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
var ei = /.+\@.+\..+/;
function ti(t) {
  return ei.test(t);
}
Pe.default = ti;
var xt = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.Group = void 0;
var ri = xt(he), ni = xt(Pe), ii = xt(dt), xe = X;
function It(t, e) {
  xe.Facade.call(this, t, e);
}
Ke.Group = It;
ri.default(It, xe.Facade);
var G = It.prototype;
G.action = function() {
  return "group";
};
G.type = G.action;
G.groupId = xe.Facade.field("groupId");
G.created = function() {
  var t = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
  if (t)
    return ii.default(t);
};
G.email = function() {
  var t = this.proxy("traits.email");
  if (t)
    return t;
  var e = this.groupId();
  if (ni.default(e))
    return e;
};
G.traits = function(t) {
  var e = this.properties(), r = this.groupId();
  t = t || {}, r && (e.id = r);
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      var a = this[n] == null ? this.proxy("traits." + n) : this[n]();
      if (a == null)
        continue;
      e[t[n]] = a, delete e[n];
    }
  return e;
};
G.name = xe.Facade.proxy("traits.name");
G.industry = xe.Facade.proxy("traits.industry");
G.employees = xe.Facade.proxy("traits.employees");
G.properties = function() {
  return this.field("traits") || this.field("properties") || {};
};
var Ae = {}, $e = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.Identify = void 0;
var Z = X, _e = $e(De), ai = $e(he), oi = $e(Pe), hr = $e(dt), ce = function(t) {
  return t.trim();
};
function Et(t, e) {
  Z.Facade.call(this, t, e);
}
Ae.Identify = Et;
ai.default(Et, Z.Facade);
var F = Et.prototype;
F.action = function() {
  return "identify";
};
F.type = F.action;
F.traits = function(t) {
  var e = this.field("traits") || {}, r = this.userId();
  t = t || {}, r && (e.id = r);
  for (var n in t) {
    var a = this[n] == null ? this.proxy("traits." + n) : this[n]();
    a != null && (e[t[n]] = a, n !== t[n] && delete e[n]);
  }
  return e;
};
F.email = function() {
  var t = this.proxy("traits.email");
  if (t)
    return t;
  var e = this.userId();
  if (oi.default(e))
    return e;
};
F.created = function() {
  var t = this.proxy("traits.created") || this.proxy("traits.createdAt");
  if (t)
    return hr.default(t);
};
F.companyCreated = function() {
  var t = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
  if (t)
    return hr.default(t);
};
F.companyName = function() {
  return this.proxy("traits.company.name");
};
F.name = function() {
  var t = this.proxy("traits.name");
  if (typeof t == "string")
    return ce(t);
  var e = this.firstName(), r = this.lastName();
  if (e && r)
    return ce(e + " " + r);
};
F.firstName = function() {
  var t = this.proxy("traits.firstName");
  if (typeof t == "string")
    return ce(t);
  var e = this.proxy("traits.name");
  if (typeof e == "string")
    return ce(e).split(" ")[0];
};
F.lastName = function() {
  var t = this.proxy("traits.lastName");
  if (typeof t == "string")
    return ce(t);
  var e = this.proxy("traits.name");
  if (typeof e == "string") {
    var r = ce(e).indexOf(" ");
    if (r !== -1)
      return ce(e.substr(r + 1));
  }
};
F.uid = function() {
  return this.userId() || this.username() || this.email();
};
F.description = function() {
  return this.proxy("traits.description") || this.proxy("traits.background");
};
F.age = function() {
  var t = this.birthday(), e = _e.default(this.traits(), "age");
  if (e != null)
    return e;
  if (t instanceof Date) {
    var r = /* @__PURE__ */ new Date();
    return r.getFullYear() - t.getFullYear();
  }
};
F.avatar = function() {
  var t = this.traits();
  return _e.default(t, "avatar") || _e.default(t, "photoUrl") || _e.default(t, "avatarUrl");
};
F.position = function() {
  var t = this.traits();
  return _e.default(t, "position") || _e.default(t, "jobTitle");
};
F.username = Z.Facade.proxy("traits.username");
F.website = Z.Facade.one("traits.website");
F.websites = Z.Facade.multi("traits.website");
F.phone = Z.Facade.one("traits.phone");
F.phones = Z.Facade.multi("traits.phone");
F.address = Z.Facade.proxy("traits.address");
F.gender = Z.Facade.proxy("traits.gender");
F.birthday = Z.Facade.proxy("traits.birthday");
var Ie = {}, Ot = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.Track = void 0;
var si = Ot(he), R = X, ui = Ae, li = Ot(Pe), pr = Ot(De);
function At(t, e) {
  R.Facade.call(this, t, e);
}
Ie.Track = At;
si.default(At, R.Facade);
var j = At.prototype;
j.action = function() {
  return "track";
};
j.type = j.action;
j.event = R.Facade.field("event");
j.value = R.Facade.proxy("properties.value");
j.category = R.Facade.proxy("properties.category");
j.id = R.Facade.proxy("properties.id");
j.productId = function() {
  return this.proxy("properties.product_id") || this.proxy("properties.productId");
};
j.promotionId = function() {
  return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId");
};
j.cartId = function() {
  return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
};
j.checkoutId = function() {
  return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId");
};
j.paymentId = function() {
  return this.proxy("properties.payment_id") || this.proxy("properties.paymentId");
};
j.couponId = function() {
  return this.proxy("properties.coupon_id") || this.proxy("properties.couponId");
};
j.wishlistId = function() {
  return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId");
};
j.reviewId = function() {
  return this.proxy("properties.review_id") || this.proxy("properties.reviewId");
};
j.orderId = function() {
  return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId");
};
j.sku = R.Facade.proxy("properties.sku");
j.tax = R.Facade.proxy("properties.tax");
j.name = R.Facade.proxy("properties.name");
j.price = R.Facade.proxy("properties.price");
j.total = R.Facade.proxy("properties.total");
j.repeat = R.Facade.proxy("properties.repeat");
j.coupon = R.Facade.proxy("properties.coupon");
j.shipping = R.Facade.proxy("properties.shipping");
j.discount = R.Facade.proxy("properties.discount");
j.shippingMethod = function() {
  return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod");
};
j.paymentMethod = function() {
  return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod");
};
j.description = R.Facade.proxy("properties.description");
j.plan = R.Facade.proxy("properties.plan");
j.subtotal = function() {
  var t = pr.default(this.properties(), "subtotal"), e = this.total() || this.revenue();
  if (t)
    return t;
  if (!e)
    return 0;
  if (this.total()) {
    var r = this.tax();
    r && (e -= r), r = this.shipping(), r && (e -= r), r = this.discount(), r && (e += r);
  }
  return e;
};
j.products = function() {
  var t = this.properties(), e = pr.default(t, "products");
  return Array.isArray(e) ? e.filter(function(r) {
    return r !== null;
  }) : [];
};
j.quantity = function() {
  var t = this.obj.properties || {};
  return t.quantity || 1;
};
j.currency = function() {
  var t = this.obj.properties || {};
  return t.currency || "USD";
};
j.referrer = function() {
  return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
};
j.query = R.Facade.proxy("options.query");
j.properties = function(t) {
  var e = this.field("properties") || {};
  t = t || {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      var n = this[r] == null ? this.proxy("properties." + r) : this[r]();
      if (n == null)
        continue;
      e[t[r]] = n, delete e[r];
    }
  return e;
};
j.username = function() {
  return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId();
};
j.email = function() {
  var t = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
  if (t)
    return t;
  var e = this.userId();
  if (li.default(e))
    return e;
};
j.revenue = function() {
  var t = this.proxy("properties.revenue"), e = this.event(), r = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
  return !t && e && e.match(r) && (t = this.proxy("properties.total")), ci(t);
};
j.cents = function() {
  var t = this.revenue();
  return typeof t != "number" ? this.value() || 0 : t * 100;
};
j.identify = function() {
  var t = this.json();
  return t.traits = this.traits(), new ui.Identify(t, this.opts);
};
function ci(t) {
  if (t) {
    if (typeof t == "number")
      return t;
    if (typeof t == "string" && (t = t.replace(/\$/g, ""), t = parseFloat(t), !isNaN(t)))
      return t;
  }
}
var je = {}, vr = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(je, "__esModule", { value: !0 });
je.Page = void 0;
var fi = vr(he), pe = X, di = Ie, hi = vr(Pe);
function jt(t, e) {
  pe.Facade.call(this, t, e);
}
je.Page = jt;
fi.default(jt, pe.Facade);
var B = jt.prototype;
B.action = function() {
  return "page";
};
B.type = B.action;
B.category = pe.Facade.field("category");
B.name = pe.Facade.field("name");
B.title = pe.Facade.proxy("properties.title");
B.path = pe.Facade.proxy("properties.path");
B.url = pe.Facade.proxy("properties.url");
B.referrer = function() {
  return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
};
B.properties = function(t) {
  var e = this.field("properties") || {}, r = this.category(), n = this.name();
  t = t || {}, r && (e.category = r), n && (e.name = n);
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      var i = this[a] == null ? this.proxy("properties." + a) : this[a]();
      if (i == null)
        continue;
      e[t[a]] = i, a !== t[a] && delete e[a];
    }
  return e;
};
B.email = function() {
  var t = this.proxy("context.traits.email") || this.proxy("properties.email");
  if (t)
    return t;
  var e = this.userId();
  if (hi.default(e))
    return e;
};
B.fullName = function() {
  var t = this.category(), e = this.name();
  return e && t ? t + " " + e : e;
};
B.event = function(t) {
  return t ? "Viewed " + t + " Page" : "Loaded a Page";
};
B.track = function(t) {
  var e = this.json();
  return e.event = this.event(t), e.timestamp = this.timestamp(), e.properties = this.properties(), new di.Track(e, this.opts);
};
var He = {}, pi = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(He, "__esModule", { value: !0 });
He.Screen = void 0;
var vi = pi(he), yr = je, yi = Ie;
function de(t, e) {
  yr.Page.call(this, t, e);
}
He.Screen = de;
vi.default(de, yr.Page);
de.prototype.action = function() {
  return "screen";
};
de.prototype.type = de.prototype.action;
de.prototype.event = function(t) {
  return t ? "Viewed " + t + " Screen" : "Loaded a Screen";
};
de.prototype.track = function(t) {
  var e = this.json();
  return e.event = this.event(t), e.timestamp = this.timestamp(), e.properties = this.properties(), new yi.Track(e, this.opts);
};
var Ge = {}, mi = D && D.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.Delete = void 0;
var gi = mi(he), mr = X;
function Mt(t, e) {
  mr.Facade.call(this, t, e);
}
Ge.Delete = Mt;
gi.default(Mt, mr.Facade);
Mt.prototype.type = function() {
  return "delete";
};
(function(t) {
  var e = D && D.__assign || function() {
    return e = Object.assign || function(c) {
      for (var d, f = 1, h = arguments.length; f < h; f++) {
        d = arguments[f];
        for (var p in d) Object.prototype.hasOwnProperty.call(d, p) && (c[p] = d[p]);
      }
      return c;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Delete = t.Screen = t.Page = t.Track = t.Identify = t.Group = t.Alias = t.Facade = void 0;
  var r = X;
  Object.defineProperty(t, "Facade", { enumerable: !0, get: function() {
    return r.Facade;
  } });
  var n = Ve;
  Object.defineProperty(t, "Alias", { enumerable: !0, get: function() {
    return n.Alias;
  } });
  var a = Ke;
  Object.defineProperty(t, "Group", { enumerable: !0, get: function() {
    return a.Group;
  } });
  var i = Ae;
  Object.defineProperty(t, "Identify", { enumerable: !0, get: function() {
    return i.Identify;
  } });
  var s = Ie;
  Object.defineProperty(t, "Track", { enumerable: !0, get: function() {
    return s.Track;
  } });
  var o = je;
  Object.defineProperty(t, "Page", { enumerable: !0, get: function() {
    return o.Page;
  } });
  var u = He;
  Object.defineProperty(t, "Screen", { enumerable: !0, get: function() {
    return u.Screen;
  } });
  var l = Ge;
  Object.defineProperty(t, "Delete", { enumerable: !0, get: function() {
    return l.Delete;
  } }), t.default = e(e({}, r.Facade), {
    Alias: n.Alias,
    Group: a.Group,
    Identify: i.Identify,
    Track: s.Track,
    Page: o.Page,
    Screen: u.Screen,
    Delete: l.Delete
  });
})(V);
function Ne(t, e) {
  var r = new V.Facade(t, e);
  return t.type === "track" && (r = new V.Track(t, e)), t.type === "identify" && (r = new V.Identify(t, e)), t.type === "page" && (r = new V.Page(t, e)), t.type === "alias" && (r = new V.Alias(t, e)), t.type === "group" && (r = new V.Group(t, e)), t.type === "screen" && (r = new V.Screen(t, e)), Object.defineProperty(r, "obj", {
    value: t,
    writable: !0
  }), r;
}
var bi = function(t) {
  var e = !1;
  window.addEventListener("pagehide", function() {
    e || (e = !0, t(e));
  }), document.addEventListener("visibilitychange", function() {
    if (document.visibilityState == "hidden") {
      if (e)
        return;
      e = !0;
    } else
      e = !1;
    t(e);
  });
}, gr = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var a = t.call(this, r) || this;
      return a.retryTimeout = n, a.name = "RateLimitError", a;
    }
    return e;
  }(Error)
), br = function(t) {
  return b({ "Content-Type": "text/plain" }, typeof t == "function" ? t() : t);
}, wi = 500, _i = 64;
function Ct(t) {
  var e = encodeURI(JSON.stringify(t)).split(/%..|./).length - 1;
  return e / 1024;
}
function Si(t) {
  return Ct(t) >= wi - 50;
}
function ki(t) {
  return Ct(t) >= _i - 10;
}
function Pi(t) {
  var e = [], r = 0;
  return t.forEach(function(n) {
    var a = Ct(e[r]);
    a >= 64 && r++, e[r] ? e[r].push(n) : e[r] = [n];
  }), e;
}
function xi(t, e) {
  var r, n, a = [], i = !1, s = (r = e?.size) !== null && r !== void 0 ? r : 10, o = (n = e?.timeout) !== null && n !== void 0 ? n : 5e3, u = 0;
  function l(p) {
    var m;
    if (p.length !== 0) {
      var v = (m = p[0]) === null || m === void 0 ? void 0 : m.writeKey, y = p.map(function(g) {
        var _ = g;
        _.sentAt;
        var w = $t(_, ["sentAt"]);
        return w;
      });
      return Re("https://".concat(t, "/b"), {
        credentials: e?.credentials,
        keepalive: e?.keepalive || i,
        headers: br(e?.headers),
        method: "post",
        body: JSON.stringify({
          writeKey: v,
          batch: y,
          sentAt: (/* @__PURE__ */ new Date()).toISOString()
        }),
        // @ts-ignore - not in the ts lib yet
        priority: e?.priority
      }).then(function(g) {
        var _;
        if (g.status >= 500)
          throw new Error("Bad response from server: ".concat(g.status));
        if (g.status === 429) {
          var w = (_ = g.headers) === null || _ === void 0 ? void 0 : _.get("x-ratelimit-reset"), P = typeof w == "string" ? parseInt(w) * 1e3 : o;
          throw new gr("Rate limit exceeded: ".concat(g.status), P);
        }
      });
    }
  }
  function c(p) {
    var m;
    return p === void 0 && (p = 1), S(this, void 0, void 0, function() {
      var v;
      return k(this, function(y) {
        return a.length ? (v = a, a = [], [2, (m = l(v)) === null || m === void 0 ? void 0 : m.catch(function(g) {
          var _, w = Q.system();
          w.log("error", "Error sending batch", g), p <= ((_ = e?.maxRetries) !== null && _ !== void 0 ? _ : 10) && (g.name === "RateLimitError" && (u = g.retryTimeout), a.push.apply(a, v), a.map(function(P) {
            if ("_metadata" in P) {
              var I = P;
              I._metadata = b(b({}, I._metadata), { retryCount: p });
            }
          }), f(p + 1));
        })]) : [
          2
          /*return*/
        ];
      });
    });
  }
  var d;
  function f(p) {
    p === void 0 && (p = 1), !d && (d = setTimeout(function() {
      d = void 0, c(p).catch(console.error);
    }, u || o), u = 0);
  }
  bi(function(p) {
    if (i = p, i && a.length) {
      var m = Pi(a).map(l);
      Promise.all(m).catch(console.error);
    }
  });
  function h(p, m) {
    return S(this, void 0, void 0, function() {
      var v;
      return k(this, function(y) {
        return a.push(m), v = a.length >= s || Si(a) || e?.keepalive && ki(a), [2, v || i ? c() : f()];
      });
    });
  }
  return {
    dispatch: h
  };
}
function Ii(t) {
  function e(r, n) {
    return Re(r, {
      credentials: t?.credentials,
      keepalive: t?.keepalive,
      headers: br(t?.headers),
      method: "post",
      body: JSON.stringify(n),
      // @ts-ignore - not in the ts lib yet
      priority: t?.priority
    }).then(function(a) {
      var i;
      if (a.status >= 500)
        throw new Error("Bad response from server: ".concat(a.status));
      if (a.status === 429) {
        var s = (i = a.headers) === null || i === void 0 ? void 0 : i.get("x-ratelimit-reset"), o = s ? parseInt(s) * 1e3 : 5e3;
        throw new gr("Rate limit exceeded: ".concat(a.status), o);
      }
    });
  }
  return {
    dispatch: e
  };
}
function Ei(t, e, r, n, a) {
  var i, s = t.user();
  delete e.options, e.writeKey = r?.apiKey, e.userId = e.userId || s.id(), e.anonymousId = e.anonymousId || s.anonymousId(), e.sentAt = /* @__PURE__ */ new Date();
  var o = t.queue.failedInitializations || [];
  o.length > 0 && (e._metadata = { failedInitializations: o }), a != null && (a.attempts > 1 && (e._metadata = b(b({}, e._metadata), { retryCount: a.attempts })), a.attempts++);
  var u = [], l = [];
  for (var c in n) {
    var d = n[c];
    c === "Segment.io" && u.push(c), d.bundlingStatus === "bundled" && u.push(c), d.bundlingStatus === "unbundled" && l.push(c);
  }
  for (var f = 0, h = r?.unbundledIntegrations || []; f < h.length; f++) {
    var p = h[f];
    l.includes(p) || l.push(p);
  }
  var m = (i = r?.maybeBundledConfigIds) !== null && i !== void 0 ? i : {}, v = [];
  return u.sort().forEach(function(y) {
    var g;
    ((g = m[y]) !== null && g !== void 0 ? g : []).forEach(function(_) {
      v.push(_);
    });
  }), r?.addBundledMetadata !== !1 && (e._metadata = b(b({}, e._metadata), { bundled: u.sort(), unbundled: l.sort(), bundledIds: v })), e;
}
var wr = function(t, e) {
  return S(void 0, void 0, void 0, function() {
    var r;
    return k(this, function(n) {
      return r = function(a) {
        return S(void 0, void 0, void 0, function() {
          var i;
          return k(this, function(s) {
            switch (s.label) {
              case 0:
                return t(a) ? (i = r, [4, e()]) : [3, 2];
              case 1:
                return [2, i.apply(void 0, [s.sent()])];
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, [2, r(void 0)];
    });
  });
};
function Oi(t, e) {
  return S(this, void 0, void 0, function() {
    var r, n = this;
    return k(this, function(a) {
      switch (a.label) {
        case 0:
          return r = [], oe() ? [2, e] : [
            4,
            wr(function() {
              return e.length > 0 && !oe();
            }, function() {
              return S(n, void 0, void 0, function() {
                var i, s, o;
                return k(this, function(u) {
                  switch (u.label) {
                    case 0:
                      return i = e.pop(), i ? [4, we(i, t)] : [
                        2
                        /*return*/
                      ];
                    case 1:
                      return s = u.sent(), o = s instanceof Q, o || r.push(i), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            })
            // re-add failed tasks
          ];
        case 1:
          return a.sent(), r.map(function(i) {
            return e.pushWithBackoff(i);
          }), [2, e];
      }
    });
  });
}
function ge(t, e, r, n) {
  var a = this;
  t || setTimeout(function() {
    return S(a, void 0, void 0, function() {
      var i, s;
      return k(this, function(o) {
        switch (o.label) {
          case 0:
            return i = !0, [4, Oi(r, e)];
          case 1:
            return s = o.sent(), i = !1, e.todo > 0 && n(i, s, r, n), [
              2
              /*return*/
            ];
        }
      });
    });
  }, Math.random() * 5e3);
}
function Ai(t, e) {
  var r, n, a, i, s = t.user();
  return e.previousId = (a = (n = (r = e.previousId) !== null && r !== void 0 ? r : e.from) !== null && n !== void 0 ? n : s.id()) !== null && a !== void 0 ? a : s.anonymousId(), e.userId = (i = e.userId) !== null && i !== void 0 ? i : e.to, delete e.from, delete e.to, e;
}
var ji = function(t) {
  return t.name === "Segment.io";
};
function Mi(t, e, r) {
  var n, a, i;
  window.addEventListener("pagehide", function() {
    o.push.apply(o, Array.from(u)), u.clear();
  });
  var s = (n = e?.apiKey) !== null && n !== void 0 ? n : "", o = t.options.disableClientPersistence ? new Le(t.queue.queue.maxAttempts, []) : new Ue(t.queue.queue.maxAttempts, "".concat(s, ":dest-Segment.io")), u = /* @__PURE__ */ new Set(), l = !1, c = (a = e?.apiHost) !== null && a !== void 0 ? a : Qt, d = (i = e?.protocol) !== null && i !== void 0 ? i : "https", f = "".concat(d, "://").concat(c), h = e?.deliveryStrategy, p = h && "strategy" in h && h.strategy === "batching" ? xi(c, h.config) : Ii(h?.config);
  function m(y) {
    return S(this, void 0, void 0, function() {
      var g, _;
      return k(this, function(w) {
        return oe() ? (o.push(y), ge(l, o, v, ge), [2, y]) : (u.add(y), g = y.event.type.charAt(0), _ = Ne(y.event).json(), y.event.type === "track" && delete _.traits, y.event.type === "alias" && (_ = Ai(t, _)), o.getAttempts(y) >= o.maxAttempts ? (u.delete(y), [2, y]) : [2, p.dispatch("".concat(f, "/").concat(g), Ei(t, _, e, r, y)).then(function() {
          return y;
        }).catch(function(P) {
          if (y.log("error", "Error sending event", P), P.name === "RateLimitError") {
            var I = P.retryTimeout;
            o.pushWithBackoff(y, I);
          } else
            o.pushWithBackoff(y);
          return ge(l, o, v, ge), y;
        }).finally(function() {
          u.delete(y);
        })]);
      });
    });
  }
  var v = {
    metadata: {
      writeKey: s,
      apiHost: c,
      protocol: d
    },
    name: "Segment.io",
    type: "destination",
    version: "0.1.0",
    isLoaded: function() {
      return !0;
    },
    load: function() {
      return Promise.resolve();
    },
    track: m,
    identify: m,
    page: m,
    alias: m,
    group: m,
    screen: m
  };
  return o.todo && ge(l, o, v, ge), v;
}
var re = "This is being deprecated and will be not be available in future releases of Analytics JS", Ze = bt(), et = Ze?.analytics;
function Ci(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = e ? 10 : 1, a = r ? new Le(n, []) : new Ue(n, t);
  return new En(a);
}
var Ti = (
  /** @class */
  function() {
    function t(e, r) {
      var n;
      this.timeout = 300, this._getSegmentPluginMetadata = function() {
        var i;
        return (i = r.plugins.find(ji)) === null || i === void 0 ? void 0 : i.metadata;
      }, this.writeKey = e.writeKey;
      var a = {
        integrations: {
          "Segment.io": {
            apiKey: ""
          }
        }
      };
      this.cdnSettings = (n = e.cdnSettings) !== null && n !== void 0 ? n : a, this.cdnURL = e.cdnURL;
    }
    return Object.defineProperty(t.prototype, "apiHost", {
      get: function() {
        var e, r;
        return (r = (e = this._getSegmentPluginMetadata) === null || e === void 0 ? void 0 : e.call(this)) === null || r === void 0 ? void 0 : r.apiHost;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
function W() {
  console.warn(re);
}
var _r = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n, a, i, s) {
      var o = this, u, l;
      o = t.call(this) || this, o._debug = !1, o.initialized = !1, o.user = function() {
        return o._user;
      }, o.init = o.initialize.bind(o), o.log = W, o.addIntegrationMiddleware = W, o.listeners = W, o.addEventListener = W, o.removeAllListeners = W, o.removeListener = W, o.removeEventListener = W, o.hasListeners = W, o.add = W, o.addIntegration = W;
      var c = n?.cookie, d = (u = n?.disableClientPersistence) !== null && u !== void 0 ? u : !1;
      o.queue = a ?? Ci("".concat(r.writeKey, ":event-queue"), n?.retryQueue, d), o.settings = new Ti(r, o.queue);
      var f = n?.storage;
      return o._universalStorage = o.createStore(d, f, c), o._user = i ?? new ur(b({ persist: !d, storage: n?.storage }, n?.user), c).load(), o._group = s ?? new Tn(b({ persist: !d, storage: n?.storage }, n?.group), c).load(), o.eventFactory = new Sn(o._user), o.integrations = (l = n?.integrations) !== null && l !== void 0 ? l : {}, o.options = n ?? {}, wt(o), o;
    }
    return e.prototype.createStore = function(r, n, a) {
      return r ? new le([new _t()]) : n && or(n) ? new le(ot(sr(n.stores, a))) : new le(ot([
        z.LocalStorage,
        {
          name: z.Cookie,
          settings: a
        },
        z.Memory
      ]));
    }, Object.defineProperty(e.prototype, "storage", {
      get: function() {
        return this._universalStorage;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.track = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s, o, u, l, c, d = this;
        return k(this, function(f) {
          return a = ye(r), i = ln.apply(void 0, r), s = i[0], o = i[1], u = i[2], l = i[3], c = this.eventFactory.track(s, o, u, this.integrations, a), [2, this._dispatch(c, l).then(function(h) {
            return d.emit("track", s, h.event.properties, h.event.options), h;
          })];
        });
      });
    }, e.prototype.page = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s, o, u, l, c, d, f = this;
        return k(this, function(h) {
          return a = ye(r), i = Dt.apply(void 0, r), s = i[0], o = i[1], u = i[2], l = i[3], c = i[4], d = this.eventFactory.page(s, o, u, l, this.integrations, a), [2, this._dispatch(d, c).then(function(p) {
            return f.emit("page", s, o, p.event.properties, p.event.options), p;
          })];
        });
      });
    }, e.prototype.identify = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s, o, u, l, c, d = this;
        return k(this, function(f) {
          return a = ye(r), i = Lt(this._user).apply(void 0, r), s = i[0], o = i[1], u = i[2], l = i[3], this._user.identify(s, o), c = this.eventFactory.identify(this._user.id(), this._user.traits(), u, this.integrations, a), [2, this._dispatch(c, l).then(function(h) {
            return d.emit("identify", h.event.userId, h.event.traits, h.event.options), h;
          })];
        });
      });
    }, e.prototype.group = function() {
      for (var r = this, n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      var i = ye(n);
      if (n.length === 0)
        return this._group;
      var s = Lt(this._group).apply(void 0, n), o = s[0], u = s[1], l = s[2], c = s[3];
      this._group.identify(o, u);
      var d = this._group.id(), f = this._group.traits(), h = this.eventFactory.group(d, f, l, this.integrations, i);
      return this._dispatch(h, c).then(function(p) {
        return r.emit("group", p.event.groupId, p.event.traits, p.event.options), p;
      });
    }, e.prototype.alias = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s, o, u, l, c, d = this;
        return k(this, function(f) {
          return a = ye(r), i = cn.apply(void 0, r), s = i[0], o = i[1], u = i[2], l = i[3], c = this.eventFactory.alias(s, o, u, this.integrations, a), [2, this._dispatch(c, l).then(function(h) {
            return d.emit("alias", s, o, h.event.options), h;
          })];
        });
      });
    }, e.prototype.screen = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s, o, u, l, c, d, f = this;
        return k(this, function(h) {
          return a = ye(r), i = Dt.apply(void 0, r), s = i[0], o = i[1], u = i[2], l = i[3], c = i[4], d = this.eventFactory.screen(s, o, u, l, this.integrations, a), [2, this._dispatch(d, c).then(function(p) {
            return f.emit("screen", s, o, p.event.properties, p.event.options), p;
          })];
        });
      });
    }, e.prototype.trackClick = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i;
        return k(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, Promise.resolve().then(() => Ce)];
            case 1:
              return a = s.sent(), [2, (i = a.link).call.apply(i, N([this], r, !1))];
          }
        });
      });
    }, e.prototype.trackLink = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i;
        return k(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, Promise.resolve().then(() => Ce)];
            case 1:
              return a = s.sent(), [2, (i = a.link).call.apply(i, N([this], r, !1))];
          }
        });
      });
    }, e.prototype.trackSubmit = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i;
        return k(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, Promise.resolve().then(() => Ce)];
            case 1:
              return a = s.sent(), [2, (i = a.form).call.apply(i, N([this], r, !1))];
          }
        });
      });
    }, e.prototype.trackForm = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i;
        return k(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, Promise.resolve().then(() => Ce)];
            case 1:
              return a = s.sent(), [2, (i = a.form).call.apply(i, N([this], r, !1))];
          }
        });
      });
    }, e.prototype.register = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s = this;
        return k(this, function(o) {
          switch (o.label) {
            case 0:
              return a = Q.system(), i = r.map(function(u) {
                return s.queue.register(a, u, s);
              }), [4, Promise.all(i)];
            case 1:
              return o.sent(), [2, a];
          }
        });
      });
    }, e.prototype.deregister = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return S(this, void 0, void 0, function() {
        var a, i, s = this;
        return k(this, function(o) {
          switch (o.label) {
            case 0:
              return a = Q.system(), i = r.map(function(u) {
                var l = s.queue.plugins.find(function(c) {
                  return c.name === u;
                });
                if (l)
                  return s.queue.deregister(a, l, s);
                a.log("warn", "plugin ".concat(u, " not found"));
              }), [4, Promise.all(i)];
            case 1:
              return o.sent(), [2, a];
          }
        });
      });
    }, e.prototype.debug = function(r) {
      return r === !1 && localStorage.getItem("debug") && localStorage.removeItem("debug"), this._debug = r, this;
    }, e.prototype.reset = function() {
      this._user.reset(), this._group.reset(), this.emit("reset");
    }, e.prototype.timeout = function(r) {
      this.settings.timeout = r;
    }, e.prototype._dispatch = function(r, n) {
      return S(this, void 0, void 0, function() {
        var a;
        return k(this, function(i) {
          return a = new Q(r), a.stats.increment("analytics_js.invoke", 1, [r.type]), oe() && !this.options.retryQueue ? [2, a] : [2, un(a, this.queue, this, {
            callback: n,
            debug: this._debug,
            timeout: this.settings.timeout
          })];
        });
      });
    }, e.prototype.addSourceMiddleware = function(r) {
      return S(this, void 0, void 0, function() {
        var n = this;
        return k(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.queue.criticalTasks.run(function() {
                return S(n, void 0, void 0, function() {
                  var i, s, o;
                  return k(this, function(u) {
                    switch (u.label) {
                      case 0:
                        return [4, Promise.resolve().then(() => Wi)];
                      case 1:
                        return i = u.sent().sourceMiddlewarePlugin, s = {}, this.queue.plugins.forEach(function(l) {
                          if (l.type === "destination")
                            return s[l.name] = !0;
                        }), o = i(r, s), [4, this.register(o)];
                      case 2:
                        return u.sent(), [
                          2
                          /*return*/
                        ];
                    }
                  });
                });
              })];
            case 1:
              return a.sent(), [2, this];
          }
        });
      });
    }, e.prototype.addDestinationMiddleware = function(r) {
      for (var n = [], a = 1; a < arguments.length; a++)
        n[a - 1] = arguments[a];
      return this.queue.plugins.filter(kn).forEach(function(i) {
        (r === "*" || i.name.toLowerCase() === r.toLowerCase()) && i.addMiddleware.apply(i, n);
      }), Promise.resolve(this);
    }, e.prototype.setAnonymousId = function(r) {
      return this._user.anonymousId(r);
    }, e.prototype.queryString = function(r) {
      return S(this, void 0, void 0, function() {
        var n;
        return k(this, function(a) {
          switch (a.label) {
            case 0:
              return this.options.useQueryString === !1 ? [2, []] : [4, Promise.resolve().then(() => ma)];
            case 1:
              return n = a.sent().queryString, [2, n(this, r)];
          }
        });
      });
    }, e.prototype.use = function(r) {
      return r(this), this;
    }, e.prototype.ready = function(r) {
      return r === void 0 && (r = function(n) {
        return n;
      }), S(this, void 0, void 0, function() {
        return k(this, function(n) {
          return [2, Promise.all(this.queue.plugins.map(function(a) {
            return a.ready ? a.ready() : Promise.resolve();
          })).then(function(a) {
            return r(a), a;
          })];
        });
      });
    }, e.prototype.noConflict = function() {
      return console.warn(re), Nn(et ?? this), this;
    }, e.prototype.normalize = function(r) {
      return console.warn(re), this.eventFactory.normalize(r);
    }, Object.defineProperty(e.prototype, "failedInitializations", {
      get: function() {
        return console.warn(re), this.queue.failedInitializations;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "VERSION", {
      get: function() {
        return ze;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.initialize = function(r, n) {
      return S(this, void 0, void 0, function() {
        return k(this, function(a) {
          return console.warn(re), [2, Promise.resolve(this)];
        });
      });
    }, e.prototype.pageview = function(r) {
      return S(this, void 0, void 0, function() {
        return k(this, function(n) {
          switch (n.label) {
            case 0:
              return console.warn(re), [4, this.page({ path: r })];
            case 1:
              return n.sent(), [2, this];
          }
        });
      });
    }, Object.defineProperty(e.prototype, "plugins", {
      get: function() {
        var r;
        return console.warn(re), (r = this._plugins) !== null && r !== void 0 ? r : {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "Integrations", {
      get: function() {
        console.warn(re);
        var r = this.queue.plugins.filter(function(n) {
          return n.type === "destination";
        }).reduce(function(n, a) {
          var i = "".concat(a.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration"), s = window[i];
          if (!s)
            return n;
          var o = s.Integration;
          return o ? (n[a.name] = o, n) : (n[a.name] = s, n);
        }, {});
        return r;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.push = function(r) {
      var n = this, a = r.shift();
      a && !n[a] || n[a].apply(this, r);
    }, e;
  }(mt)
), Ut = (
  /** @class */
  function(t) {
    q(e, t);
    function e() {
      var r = t.call(this, { writeKey: "" }, { disableClientPersistence: !0 }) || this;
      return r.initialized = !0, r;
    }
    return e;
  }(_r)
), Bt = {};
function Sr() {
  return typeof process > "u" || !Bt ? {} : Bt;
}
var Fi = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/, Ni = function() {
  var t, e = Array.prototype.slice.call(document.querySelectorAll("script"));
  return e.forEach(function(r) {
    var n, a = (n = r.getAttribute("src")) !== null && n !== void 0 ? n : "", i = Fi.exec(a);
    i && i[1] && (t = i[1]);
  }), t;
}, Te, Di = function() {
  var t, e = Te ?? ((t = lr()) === null || t === void 0 ? void 0 : t._cdn);
  return e;
}, Li = function(t) {
  var e = lr();
  e && (e._cdn = t), Te = t;
}, Tt = function() {
  var t = Di();
  if (t)
    return t;
  var e = Ni();
  return e || "https://cdn.segment.com";
}, Ft = function() {
  var t = Tt();
  return "".concat(t, "/next-integrations");
};
function kr(t, e) {
  var r, n = Object.entries((r = e.integrations) !== null && r !== void 0 ? r : {}).reduce(function(a, i) {
    var s, o, u = i[0], l = i[1];
    return typeof l == "object" ? b(b({}, a), (s = {}, s[u] = l, s)) : b(b({}, a), (o = {}, o[u] = {}, o));
  }, {});
  return Object.entries(t.integrations).reduce(function(a, i) {
    var s, o = i[0], u = i[1];
    return b(b({}, a), (s = {}, s[o] = b(b({}, u), n[o]), s));
  }, {});
}
function Pr(t) {
  try {
    return decodeURIComponent(t.replace(/\+/g, " "));
  } catch {
    return t;
  }
}
function Ri(t) {
  return S(this, void 0, void 0, function() {
    var e;
    return k(this, function(r) {
      return e = navigator.userAgentData, e ? t ? [2, e.getHighEntropyValues(t).catch(function() {
        return e.toJSON();
      })] : [2, e.toJSON()] : [2, void 0];
    });
  });
}
var Ee;
function zi() {
  if (Ee)
    return Ee;
  var t = ir(window.location.href);
  return Ee = {
    expires: 31536e6,
    secure: !1,
    path: "/"
  }, t && (Ee.domain = t), Ee;
}
function Ui(t) {
  var e = {
    btid: "dataxu",
    urid: "millennial-media"
  };
  t.startsWith("?") && (t = t.substring(1)), t = t.replace(/\?/g, "&");
  for (var r = t.split("&"), n = 0, a = r; n < a.length; n++) {
    var i = a[n], s = i.split("="), o = s[0], u = s[1];
    if (e[o])
      return {
        id: u,
        type: e[o]
      };
  }
}
function Bi(t) {
  return t.startsWith("?") && (t = t.substring(1)), t = t.replace(/\?/g, "&"), t.split("&").reduce(function(e, r) {
    var n = r.split("="), a = n[0], i = n[1], s = i === void 0 ? "" : i;
    if (a.includes("utm_") && a.length > 4) {
      var o = a.slice(4);
      o === "campaign" && (o = "name"), e[o] = Pr(s);
    }
    return e;
  }, {});
}
function qi() {
  var t = ee.get("_ga");
  if (t && t.startsWith("amp"))
    return t;
}
function Vi(t, e, r) {
  var n, a = new le(r ? [] : [new ar(zi())]), i = a.get("s:context.referrer"), s = (n = Ui(t)) !== null && n !== void 0 ? n : i;
  s && (e && (e.referrer = b(b({}, e.referrer), s)), a.set("s:context.referrer", s));
}
var Ki = function(t) {
  try {
    var e = new URLSearchParams();
    return Object.entries(t).forEach(function(r) {
      var n = r[0], a = r[1];
      Array.isArray(a) ? a.forEach(function(i) {
        return e.append(n, i);
      }) : e.append(n, a);
    }), e.toString();
  } catch {
    return "";
  }
}, $i = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      var e = this;
      this.name = "Page Enrichment", this.type = "before", this.version = "0.1.0", this.isLoaded = function() {
        return !0;
      }, this.load = function(r, n) {
        return S(e, void 0, void 0, function() {
          var a;
          return k(this, function(i) {
            switch (i.label) {
              case 0:
                this.instance = n, i.label = 1;
              case 1:
                return i.trys.push([1, 3, , 4]), a = this, [4, Ri(this.instance.options.highEntropyValuesClientHints)];
              case 2:
                return a.userAgentData = i.sent(), [3, 4];
              case 3:
                return i.sent(), [3, 4];
              case 4:
                return [2, Promise.resolve()];
            }
          });
        });
      }, this.enrich = function(r) {
        var n, a, i = r.event.context, s = i.page.search || "", o = typeof s == "object" ? Ki(s) : s;
        i.userAgent = navigator.userAgent, i.userAgentData = e.userAgentData;
        var u = navigator.userLanguage || navigator.language;
        typeof i.locale > "u" && typeof u < "u" && (i.locale = u), (n = i.library) !== null && n !== void 0 || (i.library = {
          name: "analytics.js",
          version: "".concat("npm:next", "-").concat(ze)
        }), o && !i.campaign && (i.campaign = Bi(o));
        var l = qi();
        l && (i.amp = { id: l }), Vi(o, i, (a = e.instance.options.disableClientPersistence) !== null && a !== void 0 ? a : !1);
        try {
          i.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch {
        }
        return r;
      }, this.track = this.enrich, this.identify = this.enrich, this.page = this.enrich, this.group = this.enrich, this.alias = this.enrich, this.screen = this.enrich;
    }
    return t;
  }()
), Hi = new $i();
function xr(t) {
  var e = Array.prototype.slice.call(window.document.querySelectorAll("script"));
  return e.find(function(r) {
    return r.src === t;
  });
}
function Se(t, e) {
  var r = xr(t);
  if (r !== void 0) {
    var n = r?.getAttribute("status");
    if (n === "loaded")
      return Promise.resolve(r);
    if (n === "loading")
      return new Promise(function(a, i) {
        r.addEventListener("load", function() {
          return a(r);
        }), r.addEventListener("error", function(s) {
          return i(s);
        });
      });
  }
  return new Promise(function(a, i) {
    var s, o = window.document.createElement("script");
    o.type = "text/javascript", o.src = t, o.async = !0, o.setAttribute("status", "loading");
    for (var u = 0, l = Object.entries({}); u < l.length; u++) {
      var c = l[u], d = c[0], f = c[1];
      o.setAttribute(d, f);
    }
    o.onload = function() {
      o.onerror = o.onload = null, o.setAttribute("status", "loaded"), a(o);
    }, o.onerror = function() {
      o.onerror = o.onload = null, o.setAttribute("status", "error"), i(new Error("Failed to load ".concat(t)));
    };
    var h = window.document.querySelector("script");
    h ? (s = h.parentElement) === null || s === void 0 || s.insertBefore(o, h) : window.document.head.appendChild(o);
  });
}
function Gi(t) {
  var e = xr(t);
  return e !== void 0 && e.remove(), Promise.resolve();
}
function Nt(t, e, r) {
  return S(this, void 0, void 0, function() {
    function n(l, c) {
      return S(this, void 0, void 0, function() {
        var d, f, h;
        return k(this, function(p) {
          switch (p.label) {
            case 0:
              return d = !1, f = null, [4, c({
                payload: Ne(l, {
                  clone: !0,
                  traverse: !1
                }),
                integration: t,
                next: function(m) {
                  d = !0, m === null && (f = null), m && (f = m.obj);
                }
              })];
            case 1:
              return p.sent(), !d && f !== null && (f = f, f.integrations = b(b({}, l.integrations), (h = {}, h[t] = !1, h))), [2, f];
          }
        });
      });
    }
    var a, i, s, o, u;
    return k(this, function(l) {
      switch (l.label) {
        case 0:
          a = Ne(e, {
            clone: !0,
            traverse: !1
          }).rawEvent(), i = 0, s = r, l.label = 1;
        case 1:
          return i < s.length ? (o = s[i], [4, n(a, o)]) : [3, 4];
        case 2:
          if (u = l.sent(), u === null)
            return [2, null];
          a = u, l.label = 3;
        case 3:
          return i++, [3, 1];
        case 4:
          return [2, a];
      }
    });
  });
}
function Ji(t, e) {
  function r(n) {
    return S(this, void 0, void 0, function() {
      var a;
      return k(this, function(i) {
        switch (i.label) {
          case 0:
            return a = !1, [4, t({
              payload: Ne(n.event, {
                clone: !0,
                traverse: !1
              }),
              integrations: e ?? {},
              next: function(s) {
                a = !0, s && (n.event = s.obj);
              }
            })];
          case 1:
            if (i.sent(), !a)
              throw new ae({
                retry: !1,
                type: "middleware_cancellation",
                reason: "Middleware `next` function skipped"
              });
            return [2, n];
        }
      });
    });
  }
  return {
    name: "Source Middleware ".concat(t.name),
    type: "before",
    version: "0.1.0",
    isLoaded: function() {
      return !0;
    },
    load: function(n) {
      return Promise.resolve(n);
    },
    track: r,
    page: r,
    screen: r,
    identify: r,
    alias: r,
    group: r
  };
}
const Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyDestinationMiddleware: Nt,
  sourceMiddlewarePlugin: Ji
}, Symbol.toStringTag, { value: "Module" }));
function ne(t, e) {
  var r = e.methodName, n = e.integrationName, a = e.type, i = e.didError, s = i === void 0 ? !1 : i;
  t.stats.increment("analytics_js.integration.invoke".concat(s ? ".error" : ""), 1, [
    "method:".concat(r),
    "integration_name:".concat(n),
    "type:".concat(a)
  ]);
}
var Qi = (
  /** @class */
  function() {
    function t(e, r) {
      this.version = "1.0.0", this.alternativeNames = [], this.loadPromise = yt(), this.middleware = [], this.alias = this._createMethod("alias"), this.group = this._createMethod("group"), this.identify = this._createMethod("identify"), this.page = this._createMethod("page"), this.screen = this._createMethod("screen"), this.track = this._createMethod("track"), this.action = r, this.name = e, this.type = r.type, this.alternativeNames.push(r.name);
    }
    return t.prototype.addMiddleware = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.type === "destination" && (e = this.middleware).push.apply(e, r);
    }, t.prototype.transform = function(e) {
      return S(this, void 0, void 0, function() {
        var r;
        return k(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, Nt(this.name, e.event, this.middleware)];
            case 1:
              return r = n.sent(), r === null && e.cancel(new ae({
                retry: !1,
                reason: "dropped by destination middleware"
              })), [2, new Q(r)];
          }
        });
      });
    }, t.prototype._createMethod = function(e) {
      var r = this;
      return function(n) {
        return S(r, void 0, void 0, function() {
          var a, i;
          return k(this, function(s) {
            switch (s.label) {
              case 0:
                return this.action[e] ? (a = n, this.type !== "destination" ? [3, 2] : [4, this.transform(n)]) : [2, n];
              case 1:
                a = s.sent(), s.label = 2;
              case 2:
                return s.trys.push([2, 5, , 6]), [4, this.ready()];
              case 3:
                if (!s.sent())
                  throw new Error("Something prevented the destination from getting ready");
                return ne(n, {
                  integrationName: this.action.name,
                  methodName: e,
                  type: "action"
                }), [4, this.action[e](a)];
              case 4:
                return s.sent(), [3, 6];
              case 5:
                throw i = s.sent(), ne(n, {
                  integrationName: this.action.name,
                  methodName: e,
                  type: "action",
                  didError: !0
                }), i;
              case 6:
                return [2, n];
            }
          });
        });
      };
    }, t.prototype.isLoaded = function() {
      return this.action.isLoaded();
    }, t.prototype.ready = function() {
      return S(this, void 0, void 0, function() {
        return k(this, function(e) {
          switch (e.label) {
            case 0:
              return e.trys.push([0, 2, , 3]), [4, this.loadPromise.promise];
            case 1:
              return e.sent(), [2, !0];
            case 2:
              return e.sent(), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.load = function(e, r) {
      return S(this, void 0, void 0, function() {
        var n, a, i, s;
        return k(this, function(o) {
          switch (o.label) {
            case 0:
              if (this.loadPromise.isSettled())
                return [2, this.loadPromise.promise];
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), ne(e, {
                integrationName: this.action.name,
                methodName: "load",
                type: "action"
              }), n = this.action.load(e, r), i = (a = this.loadPromise).resolve, [4, n];
            case 2:
              return i.apply(a, [o.sent()]), [2, n];
            case 3:
              throw s = o.sent(), ne(e, {
                integrationName: this.action.name,
                methodName: "load",
                type: "action",
                didError: !0
              }), this.loadPromise.reject(s), s;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.unload = function(e, r) {
      var n, a;
      return (a = (n = this.action).unload) === null || a === void 0 ? void 0 : a.call(n, e, r);
    }, t;
  }()
);
function Yi(t) {
  if (!Array.isArray(t))
    throw new Error("Not a valid list of plugins");
  var e = ["load", "isLoaded", "name", "version", "type"];
  return t.forEach(function(r) {
    e.forEach(function(n) {
      var a;
      if (r[n] === void 0)
        throw new Error("Plugin: ".concat((a = r.name) !== null && a !== void 0 ? a : "unknown", " missing required function ").concat(n));
    });
  }), !0;
}
function Xi(t, e) {
  var r = t[e.creationName], n = t[e.name];
  return t.All === !1 && !r && !n || r === !1 || n === !1;
}
function Zi(t, e) {
  return S(this, void 0, void 0, function() {
    var r, n, a, i, s, o;
    return k(this, function(u) {
      switch (u.label) {
        case 0:
          if (u.trys.push([0, 9, , 10]), r = new RegExp("https://cdn.segment.(com|build)"), n = Tt(), !e) return [3, 6];
          a = t.url.split("/"), i = a[a.length - 2], s = t.url.replace(i, btoa(i).replace(/=/g, "")), u.label = 1;
        case 1:
          return u.trys.push([1, 3, , 5]), [4, Se(s.replace(r, n))];
        case 2:
          return u.sent(), [3, 5];
        case 3:
          return u.sent(), [4, Se(t.url.replace(r, n))];
        case 4:
          return u.sent(), [3, 5];
        case 5:
          return [3, 8];
        case 6:
          return [4, Se(t.url.replace(r, n))];
        case 7:
          u.sent(), u.label = 8;
        case 8:
          return typeof window[t.libraryName] == "function" ? [2, window[t.libraryName]] : [3, 10];
        case 9:
          throw o = u.sent(), console.error("Failed to create PluginFactory", t), o;
        case 10:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function ea(t, e, r, n, a, i) {
  var s, o, u;
  return S(this, void 0, void 0, function() {
    var l, c, d, f = this;
    return k(this, function(h) {
      switch (h.label) {
        case 0:
          return l = [], c = (o = (s = t.middlewareSettings) === null || s === void 0 ? void 0 : s.routingRules) !== null && o !== void 0 ? o : [], d = ((u = t.remotePlugins) !== null && u !== void 0 ? u : []).map(function(p) {
            return S(f, void 0, void 0, function() {
              var m, v, y, g, _, w, P;
              return k(this, function(I) {
                switch (I.label) {
                  case 0:
                    if (Xi(e, p))
                      return [
                        2
                        /*return*/
                      ];
                    I.label = 1;
                  case 1:
                    return I.trys.push([1, 6, , 7]), v = i?.find(function(x) {
                      var A = x.pluginName;
                      return A === p.name;
                    }), v ? [3, 3] : [4, Zi(p, n?.obfuscate)];
                  case 2:
                    v = I.sent(), I.label = 3;
                  case 3:
                    return m = v, m ? (y = r[p.name], [4, m(b(b({}, p.settings), y))]) : [3, 5];
                  case 4:
                    g = I.sent(), _ = Array.isArray(g) ? g : [g], Yi(_), w = c.filter(function(x) {
                      return x.destinationName === p.creationName;
                    }), _.forEach(function(x) {
                      var A = new Qi(p.creationName, x);
                      w.length && a && A.addMiddleware(a), l.push(A);
                    }), I.label = 5;
                  case 5:
                    return [3, 7];
                  case 6:
                    return P = I.sent(), console.warn("Failed to load Remote Plugin", P), [3, 7];
                  case 7:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }), [4, Promise.all(d)];
        case 1:
          return h.sent(), [2, l.filter(Boolean)];
      }
    });
  });
}
var tt, qt, ta = bt(), Vt = (tt = (qt = ta).__SEGMENT_INSPECTOR__) !== null && tt !== void 0 ? tt : qt.__SEGMENT_INSPECTOR__ = {}, ra = function(t) {
  var e;
  return (e = Vt.attach) === null || e === void 0 ? void 0 : e.call(Vt, t);
};
function na(t, e) {
  return Re("".concat(e, "/v1/projects/").concat(t, "/settings")).then(function(r) {
    return r.ok ? r.json() : r.text().then(function(n) {
      throw new Error(n);
    });
  }).catch(function(r) {
    throw console.error(r.message), r;
  });
}
function ia(t) {
  return Sr().NODE_ENV !== "test" && // just one integration means segmentio
  Object.keys(t.integrations).length > 1;
}
function aa(t) {
  var e, r, n;
  return Sr().NODE_ENV !== "test" && ((n = (r = (e = t.middlewareSettings) === null || e === void 0 ? void 0 : e.routingRules) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : 0) > 0;
}
function oa(t, e) {
  Un(t, e), zn(t, e);
}
function sa(t, e, r) {
  return S(this, void 0, void 0, function() {
    return k(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, la(t, e)];
        case 1:
          return n.sent(), Bn(t, r), [
            2
            /*return*/
          ];
      }
    });
  });
}
var ua = function() {
  var t, e, r = (t = window.location.hash) !== null && t !== void 0 ? t : "", n = (e = window.location.search) !== null && e !== void 0 ? e : "", a = n.length ? n : r.replace(/(?=#).*(?=\?)/, "");
  return a;
}, la = function(t, e) {
  return S(void 0, void 0, void 0, function() {
    return k(this, function(r) {
      switch (r.label) {
        case 0:
          return e.includes("ajs_") ? [4, t.queryString(e).catch(console.error)] : [3, 2];
        case 1:
          r.sent(), r.label = 2;
        case 2:
          return [
            2
            /*return*/
          ];
      }
    });
  });
};
function ca(t, e, r, n, a, i, s) {
  var o, u, l;
  return a === void 0 && (a = []), S(this, void 0, void 0, function() {
    var c, d, f, h, p, m, v, y, g, _, w, P, I, x, A, O = this;
    return k(this, function(E) {
      switch (E.label) {
        case 0:
          return oa(r, s), c = a?.filter(function(M) {
            return typeof M == "object";
          }), d = a?.filter(function(M) {
            return typeof M == "function" && typeof M.pluginName == "string";
          }), aa(e) ? [4, Promise.resolve().then(() => ba).then(function(M) {
            return M.tsubMiddleware(e.middlewareSettings.routingRules);
          })] : [3, 2];
        case 1:
          return h = E.sent(), [3, 3];
        case 2:
          h = void 0, E.label = 3;
        case 3:
          return f = h, ia(e) || i.length > 0 ? [4, Promise.resolve().then(() => ja).then(function(M) {
            return M.ajsDestinations(t, e, r.integrations, n, f, i);
          })] : [3, 5];
        case 4:
          return m = E.sent(), [3, 6];
        case 5:
          m = [], E.label = 6;
        case 6:
          return p = m, e.legacyVideoPluginsEnabled ? [4, Promise.resolve().then(() => Ca).then(function(M) {
            return M.loadLegacyVideoPlugins(r);
          })] : [3, 8];
        case 7:
          E.sent(), E.label = 8;
        case 8:
          return !((o = n.plan) === null || o === void 0) && o.track ? [4, Promise.resolve().then(() => Na).then(function(M) {
            var C;
            return M.schemaFilter((C = n.plan) === null || C === void 0 ? void 0 : C.track, e);
          })] : [3, 10];
        case 9:
          return y = E.sent(), [3, 11];
        case 10:
          y = void 0, E.label = 11;
        case 11:
          return v = y, g = kr(e, n), [4, ea(e, r.integrations, g, n, f, d).catch(function() {
            return [];
          })];
        case 12:
          return _ = E.sent(), w = N(N([Hi], p, !0), _, !0), v && w.push(v), P = ((u = n.integrations) === null || u === void 0 ? void 0 : u.All) === !1 && !n.integrations["Segment.io"] || n.integrations && n.integrations["Segment.io"] === !1, P ? [3, 14] : (x = (I = w).push, [4, Mi(r, g["Segment.io"], e.integrations)]);
        case 13:
          x.apply(I, [E.sent()]), E.label = 14;
        case 14:
          return [4, r.register.apply(r, N(N([], w, !1), c, !1))];
        case 15:
          return A = E.sent(), [4, Rn(r, s)];
        case 16:
          return E.sent(), Object.entries((l = e.enabledMiddleware) !== null && l !== void 0 ? l : {}).some(function(M) {
            var C = M[1];
            return C;
          }) ? [4, Promise.resolve().then(() => La).then(function(M) {
            var C = M.remoteMiddlewares;
            return S(O, void 0, void 0, function() {
              var L, $;
              return k(this, function(J) {
                switch (J.label) {
                  case 0:
                    return [4, C(A, e, n.obfuscate)];
                  case 1:
                    return L = J.sent(), $ = L.map(function(se) {
                      return r.addSourceMiddleware(se);
                    }), [2, Promise.all($)];
                }
              });
            });
          })] : [3, 18];
        case 17:
          E.sent(), E.label = 18;
        case 18:
          return [4, Ln(r, s)];
        case 19:
          return E.sent(), [2, A];
      }
    });
  });
}
function fa(t, e, r) {
  var n, a, i, s, o, u, l, c, d;
  return e === void 0 && (e = {}), S(this, void 0, void 0, function() {
    var f, h, p, m, v, y, g, _, w, P, I;
    return k(this, function(x) {
      switch (x.label) {
        case 0:
          return e.disable === !0 ? [2, [new Ut(), Q.system()]] : (e.globalAnalyticsKey && Fn(e.globalAnalyticsKey), t.cdnURL && Li(t.cdnURL), e.initialPageview && r.add(new st("page", [])), f = ua(), h = (n = t.cdnURL) !== null && n !== void 0 ? n : Tt(), (a = t.cdnSettings) !== null && a !== void 0 ? (m = a, [3, 3]) : [3, 1]);
        case 1:
          return [4, na(t.writeKey, h)];
        case 2:
          m = x.sent(), x.label = 3;
        case 3:
          return p = m, e.updateCDNSettings && (p = e.updateCDNSettings(p)), typeof e.disable != "function" ? [3, 5] : [4, e.disable(p)];
        case 4:
          if (v = x.sent(), v)
            return [2, [new Ut(), Q.system()]];
          x.label = 5;
        case 5:
          return y = (s = (i = p.integrations["Segment.io"]) === null || i === void 0 ? void 0 : i.retryQueue) !== null && s !== void 0 ? s : !0, e = b({ retryQueue: y }, e), g = new _r(b(b({}, t), { cdnSettings: p, cdnURL: h }), e), ra(g), _ = (o = t.plugins) !== null && o !== void 0 ? o : [], w = (u = t.classicIntegrations) !== null && u !== void 0 ? u : [], P = (l = e.integrations) === null || l === void 0 ? void 0 : l["Segment.io"], Yt.initRemoteMetrics(b(b({}, p.metrics), { host: (c = P?.apiHost) !== null && c !== void 0 ? c : (d = p.metrics) === null || d === void 0 ? void 0 : d.host, protocol: P?.protocol })), [4, ca(t.writeKey, p, g, e, _, w, r)];
        case 6:
          return I = x.sent(), g.initialized = !0, g.emit("initialize", t, e), [4, sa(g, f, r)];
        case 7:
          return x.sent(), [2, [g, I]];
      }
    });
  });
}
var Ba = (
  /** @class */
  function(t) {
    q(e, t);
    function e() {
      var r = this, n = yt(), a = n.promise, i = n.resolve;
      return r = t.call(this, function(s) {
        return a.then(function(o) {
          var u = o[0], l = o[1];
          return fa(u, l, s);
        });
      }) || this, r._resolveLoadStart = function(s, o) {
        return i([s, o]);
      }, r;
    }
    return e.prototype.load = function(r, n) {
      return n === void 0 && (n = {}), this._resolveLoadStart(r, n), this;
    }, e.load = function(r, n) {
      return n === void 0 && (n = {}), new e().load(r, n);
    }, e.standalone = function(r, n) {
      return e.load({ writeKey: r }, n).then(function(a) {
        return a[0];
      });
    }, e;
  }(Vn)
);
function da(t) {
  var e = t;
  return !!(e.ctrlKey || e.shiftKey || e.metaKey || e.button && e.button == 1);
}
function ha(t, e) {
  return !!(t.target === "_blank" && e);
}
function pa(t, e, r, n) {
  var a = this, i = [];
  return t ? (t instanceof Element ? i = [t] : "toArray" in t ? i = t.toArray() : i = t, i.forEach(function(s) {
    s.addEventListener("click", function(o) {
      var u, l, c = e instanceof Function ? e(s) : e, d = r instanceof Function ? r(s) : r, f = s.getAttribute("href") || s.getAttributeNS("http://www.w3.org/1999/xlink", "href") || s.getAttribute("xlink:href") || ((u = s.getElementsByTagName("a")[0]) === null || u === void 0 ? void 0 : u.getAttribute("href")), h = vt(a.track(c, d, n ?? {}), (l = a.settings.timeout) !== null && l !== void 0 ? l : 500);
      !ha(s, f) && !da(o) && f && (o.preventDefault ? o.preventDefault() : o.returnValue = !1, h.catch(console.error).then(function() {
        window.location.href = f;
      }).catch(console.error));
    }, !1);
  }), this) : this;
}
function va(t, e, r, n) {
  var a = this;
  if (!t)
    return this;
  t instanceof HTMLFormElement && (t = [t]);
  var i = t;
  return i.forEach(function(s) {
    if (!(s instanceof Element))
      throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
    var o = function(l) {
      var c;
      l.preventDefault ? l.preventDefault() : l.returnValue = !1;
      var d = e instanceof Function ? e(s) : e, f = r instanceof Function ? r(s) : r, h = vt(a.track(d, f, n ?? {}), (c = a.settings.timeout) !== null && c !== void 0 ? c : 500);
      h.catch(console.error).then(function() {
        s.submit();
      }).catch(console.error);
    }, u = window.jQuery || window.Zepto;
    u ? u(s).submit(o) : s.addEventListener("submit", o, !1);
  }), this;
}
const Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  form: va,
  link: pa
}, Symbol.toStringTag, { value: "Module" }));
function Kt(t, e) {
  return Object.keys(e).reduce(function(r, n) {
    if (n.startsWith(t)) {
      var a = n.substr(t.length);
      r[a] = e[n];
    }
    return r;
  }, {});
}
function ya(t, e) {
  var r = document.createElement("a");
  r.href = e;
  var n = r.search.slice(1), a = n.split("&").reduce(function(_, w) {
    var P = w.split("="), I = P[0], x = P[1];
    return _[I] = Pr(x), _;
  }, {}), i = [], s = a.ajs_uid, o = a.ajs_event, u = a.ajs_aid, l = U(t.options.useQueryString) ? t.options.useQueryString : {}, c = l.aid, d = c === void 0 ? /.+/ : c, f = l.uid, h = f === void 0 ? /.+/ : f;
  if (u) {
    var p = Array.isArray(a.ajs_aid) ? a.ajs_aid[0] : a.ajs_aid;
    d.test(p) && t.setAnonymousId(p);
  }
  if (s) {
    var m = Array.isArray(a.ajs_uid) ? a.ajs_uid[0] : a.ajs_uid;
    if (h.test(m)) {
      var v = Kt("ajs_trait_", a);
      i.push(t.identify(m, v));
    }
  }
  if (o) {
    var y = Array.isArray(a.ajs_event) ? a.ajs_event[0] : a.ajs_event, g = Kt("ajs_prop_", a);
    i.push(t.track(y, g));
  }
  return Promise.all(i);
}
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  queryString: ya
}, Symbol.toStringTag, { value: "Module" }));
var Ir = { exports: {} };
(function(t, e) {
  /*! For license information please see tsub.js.LICENSE.txt */
  (function(r, n) {
    t.exports = n();
  })(self, function() {
    return function() {
      var r = { 2870: function(i, s, o) {
        var u = this && this.__importDefault || function(f) {
          return f && f.__esModule ? f : { default: f };
        };
        Object.defineProperty(s, "__esModule", { value: !0 }), s.Store = s.matches = s.transform = void 0;
        var l = o(4303);
        Object.defineProperty(s, "transform", { enumerable: !0, get: function() {
          return u(l).default;
        } });
        var c = o(2370);
        Object.defineProperty(s, "matches", { enumerable: !0, get: function() {
          return u(c).default;
        } });
        var d = o(1444);
        Object.defineProperty(s, "Store", { enumerable: !0, get: function() {
          return u(d).default;
        } });
      }, 2370: function(i, s, o) {
        var u = this && this.__importDefault || function(v) {
          return v && v.__esModule ? v : { default: v };
        };
        Object.defineProperty(s, "__esModule", { value: !0 });
        var l = u(o(7843));
        function c(v, y) {
          if (!Array.isArray(v))
            return d(v, y) === !0;
          var g, _, w, P, I = v[0];
          switch (I) {
            case "!":
              return !c(v[1], y);
            case "or":
              for (var x = 1; x < v.length; x++)
                if (c(v[x], y))
                  return !0;
              return !1;
            case "and":
              for (x = 1; x < v.length; x++)
                if (!c(v[x], y))
                  return !1;
              return !0;
            case "=":
            case "!=":
              return function(O, E, M, C) {
                switch (f(O) && (O = c(O, C)), f(E) && (E = c(E, C)), typeof O == "object" && typeof E == "object" && (O = JSON.stringify(O), E = JSON.stringify(E)), M) {
                  case "=":
                    return O === E;
                  case "!=":
                    return O !== E;
                  default:
                    throw new Error("Invalid operator in compareItems: ".concat(M));
                }
              }(d(v[1], y), d(v[2], y), I, y);
            case "<=":
            case "<":
            case ">":
            case ">=":
              return function(O, E, M, C) {
                if (f(O) && (O = c(O, C)), f(E) && (E = c(E, C)), typeof O != "number" || typeof E != "number")
                  return !1;
                switch (M) {
                  case "<=":
                    return O <= E;
                  case ">=":
                    return O >= E;
                  case "<":
                    return O < E;
                  case ">":
                    return O > E;
                  default:
                    throw new Error("Invalid operator in compareNumbers: ".concat(M));
                }
              }(d(v[1], y), d(v[2], y), I, y);
            case "in":
              return function(O, E, M) {
                return E.find(function(C) {
                  return d(C, M) === O;
                }) !== void 0;
              }(d(v[1], y), d(v[2], y), y);
            case "contains":
              return w = d(v[1], y), P = d(v[2], y), typeof w == "string" && typeof P == "string" && w.indexOf(P) !== -1;
            case "match":
              return g = d(v[1], y), _ = d(v[2], y), typeof g == "string" && typeof _ == "string" && function(O, E) {
                var M, C;
                e: for (; O.length > 0; ) {
                  var L, $;
                  if (L = (M = h(O)).star, $ = M.chunk, O = M.pattern, L && $ === "")
                    return !0;
                  var J = p($, E), se = J.t, Je = J.ok, We = J.err;
                  if (We)
                    return !1;
                  if (!Je || !(se.length === 0 || O.length > 0)) {
                    if (L)
                      for (var Qe = 0; Qe < E.length; Qe++) {
                        if (se = (C = p($, E.slice(Qe + 1))).t, Je = C.ok, We = C.err, Je) {
                          if (O.length === 0 && se.length > 0)
                            continue;
                          E = se;
                          continue e;
                        }
                        if (We)
                          return !1;
                      }
                    return !1;
                  }
                  E = se;
                }
                return E.length === 0;
              }(_, g);
            case "lowercase":
              var A = d(v[1], y);
              return typeof A != "string" ? null : A.toLowerCase();
            case "typeof":
              return typeof d(v[1], y);
            case "length":
              return function(O) {
                return O === null ? 0 : Array.isArray(O) || typeof O == "string" ? O.length : NaN;
              }(d(v[1], y));
            default:
              throw new Error("FQL IR could not evaluate for token: ".concat(I));
          }
        }
        function d(v, y) {
          return Array.isArray(v) ? v : typeof v == "object" ? v.value : (0, l.default)(y, v);
        }
        function f(v) {
          return !!Array.isArray(v) && ((v[0] === "lowercase" || v[0] === "length" || v[0] === "typeof") && v.length === 2 || (v[0] === "contains" || v[0] === "match") && v.length === 3);
        }
        function h(v) {
          for (var y = { star: !1, chunk: "", pattern: "" }; v.length > 0 && v[0] === "*"; )
            v = v.slice(1), y.star = !0;
          var g, _ = !1;
          e: for (g = 0; g < v.length; g++)
            switch (v[g]) {
              case "\\":
                g + 1 < v.length && g++;
                break;
              case "[":
                _ = !0;
                break;
              case "]":
                _ = !1;
                break;
              case "*":
                if (!_)
                  break e;
            }
          return y.chunk = v.slice(0, g), y.pattern = v.slice(g), y;
        }
        function p(v, y) {
          for (var g, _, w = { t: "", ok: !1, err: !1 }; v.length > 0; ) {
            if (y.length === 0)
              return w;
            switch (v[0]) {
              case "[":
                var P = y[0];
                y = y.slice(1);
                var I = !0;
                (v = v.slice(1)).length > 0 && v[0] === "^" && (I = !1, v = v.slice(1));
                for (var x = !1, A = 0; ; ) {
                  if (v.length > 0 && v[0] === "]" && A > 0) {
                    v = v.slice(1);
                    break;
                  }
                  var O, E = "";
                  if (O = (g = m(v)).char, v = g.newChunk, g.err || (E = O, v[0] === "-" && (E = (_ = m(v.slice(1))).char, v = _.newChunk, _.err)))
                    return w;
                  O <= P && P <= E && (x = !0), A++;
                }
                if (x !== I)
                  return w;
                break;
              case "?":
                y = y.slice(1), v = v.slice(1);
                break;
              case "\\":
                if ((v = v.slice(1)).length === 0)
                  return w.err = !0, w;
              default:
                if (v[0] !== y[0])
                  return w;
                y = y.slice(1), v = v.slice(1);
            }
          }
          return w.t = y, w.ok = !0, w.err = !1, w;
        }
        function m(v) {
          var y = { char: "", newChunk: "", err: !1 };
          return v.length === 0 || v[0] === "-" || v[0] === "]" || v[0] === "\\" && (v = v.slice(1)).length === 0 ? (y.err = !0, y) : (y.char = v[0], y.newChunk = v.slice(1), y.newChunk.length === 0 && (y.err = !0), y);
        }
        s.default = function(v, y) {
          if (!y)
            throw new Error("No matcher supplied!");
          switch (y.type) {
            case "all":
              return !0;
            case "fql":
              return function(g, _) {
                if (!g)
                  return !1;
                try {
                  g = JSON.parse(g);
                } catch (P) {
                  throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(g, '": ').concat(P));
                }
                var w = c(g, _);
                return typeof w == "boolean" && w;
              }(y.ir, v);
            default:
              throw new Error("Matcher of type ".concat(y.type, " unsupported."));
          }
        };
      }, 1444: function(i, s) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        var o = function() {
          function u(l) {
            this.rules = [], this.rules = l || [];
          }
          return u.prototype.getRulesByDestinationName = function(l) {
            for (var c = [], d = 0, f = this.rules; d < f.length; d++) {
              var h = f[d];
              h.destinationName !== l && h.destinationName !== void 0 || c.push(h);
            }
            return c;
          }, u;
        }();
        s.default = o;
      }, 4303: function(i, s, o) {
        var u = this && this.__importDefault || function(w) {
          return w && w.__esModule ? w : { default: w };
        };
        Object.defineProperty(s, "__esModule", { value: !0 });
        var l = u(o(374)), c = u(o(7843)), d = u(o(5500)), f = o(9014), h = o(4966);
        function p(w, P) {
          v(w, P.drop, function(I, x) {
            x.forEach(function(A) {
              return delete I[A];
            });
          });
        }
        function m(w, P) {
          v(w, P.allow, function(I, x) {
            Object.keys(I).forEach(function(A) {
              x.includes(A) || delete I[A];
            });
          });
        }
        function v(w, P, I) {
          Object.entries(P).forEach(function(x) {
            var A = x[0], O = x[1], E = function(C) {
              typeof C == "object" && C !== null && I(C, O);
            }, M = A === "" ? w : (0, c.default)(w, A);
            Array.isArray(M) ? M.forEach(E) : E(M);
          });
        }
        function y(w, P) {
          var I = JSON.parse(JSON.stringify(w));
          for (var x in P.map)
            if (P.map.hasOwnProperty(x)) {
              var A = P.map[x], O = x.split("."), E = void 0;
              if (O.length > 1 ? (O.pop(), E = (0, c.default)(I, O.join("."))) : E = w, typeof E == "object") {
                if (A.copy) {
                  var M = (0, c.default)(I, A.copy);
                  M !== void 0 && (0, f.dset)(w, x, M);
                } else if (A.move) {
                  var C = (0, c.default)(I, A.move);
                  C !== void 0 && (0, f.dset)(w, x, C), (0, h.unset)(w, A.move);
                } else
                  A.hasOwnProperty("set") && (0, f.dset)(w, x, A.set);
                if (A.to_string) {
                  var L = (0, c.default)(w, x);
                  if (typeof L == "string" || typeof L == "object" && L !== null)
                    continue;
                  L !== void 0 ? (0, f.dset)(w, x, JSON.stringify(L)) : (0, f.dset)(w, x, "undefined");
                }
              }
            }
        }
        function g(w, P) {
          return !(P.sample.percent <= 0) && (P.sample.percent >= 1 || (P.sample.path ? function(x, A) {
            var O = (0, c.default)(x, A.sample.path), E = (0, l.default)(JSON.stringify(O)), M = -64, C = [];
            _(E.slice(0, 8), C);
            for (var L = 0, $ = 0; $ < 64 && C[$] !== 1; $++)
              L++;
            if (L !== 0) {
              var J = [];
              _(E.slice(9, 16), J), M -= L, C.splice(0, L), J.splice(64 - L), C = C.concat(J);
            }
            return C[63] = C[63] === 0 ? 1 : 0, (0, d.default)(parseInt(C.join(""), 2), M) < A.sample.percent;
          }(w, P) : (I = P.sample.percent, Math.random() <= I)));
          var I;
        }
        function _(w, P) {
          for (var I = 0; I < 8; I++)
            for (var x = w[I], A = 128; A >= 1; A /= 2)
              x - A >= 0 ? (x -= A, P.push(1)) : P.push(0);
        }
        s.default = function(w, P) {
          for (var I = w, x = 0, A = P; x < A.length; x++) {
            var O = A[x];
            switch (O.type) {
              case "drop":
                return null;
              case "drop_properties":
                p(I, O.config);
                break;
              case "allow_properties":
                m(I, O.config);
                break;
              case "sample_event":
                if (g(I, O.config))
                  break;
                return null;
              case "map_properties":
                y(I, O.config);
                break;
              case "hash_properties":
                break;
              default:
                throw new Error('Transformer of type "'.concat(O.type, '" is unsupported.'));
            }
          }
          return I;
        };
      }, 4966: function(i, s, o) {
        var u = this && this.__importDefault || function(c) {
          return c && c.__esModule ? c : { default: c };
        };
        Object.defineProperty(s, "__esModule", { value: !0 }), s.unset = void 0;
        var l = u(o(7843));
        s.unset = function(c, d) {
          if ((0, l.default)(c, d)) {
            for (var f = d.split("."), h = f.pop(); f.length && f[f.length - 1].slice(-1) === "\\"; )
              h = f.pop().slice(0, -1) + "." + h;
            for (; f.length; )
              c = c[d = f.shift()];
            return delete c[h];
          }
          return !0;
        };
      }, 9014: function(i, s) {
        s.dset = function(o, u, l) {
          u.split && (u = u.split("."));
          for (var c, d, f = 0, h = u.length, p = o; f < h && (d = u[f++]) !== "__proto__" && d !== "constructor" && d !== "prototype"; )
            p = p[d] = f === h ? l : typeof (c = p[d]) == typeof u ? c : 0 * u[f] != 0 || ~("" + u[f]).indexOf(".") ? {} : [];
        };
      }, 3304: function(i) {
        var s = typeof Float64Array == "function" ? Float64Array : void 0;
        i.exports = s;
      }, 7382: function(i, s, o) {
        var u, l = o(5569), c = o(3304), d = o(8482);
        u = l() ? c : d, i.exports = u;
      }, 8482: function(i) {
        i.exports = function() {
          throw new Error("not implemented");
        };
      }, 6322: function(i, s, o) {
        var u, l = o(2508), c = o(5679), d = o(882);
        u = l() ? c : d, i.exports = u;
      }, 882: function(i) {
        i.exports = function() {
          throw new Error("not implemented");
        };
      }, 5679: function(i) {
        var s = typeof Uint16Array == "function" ? Uint16Array : void 0;
        i.exports = s;
      }, 4773: function(i, s, o) {
        var u, l = o(9773), c = o(3004), d = o(3078);
        u = l() ? c : d, i.exports = u;
      }, 3078: function(i) {
        i.exports = function() {
          throw new Error("not implemented");
        };
      }, 3004: function(i) {
        var s = typeof Uint32Array == "function" ? Uint32Array : void 0;
        i.exports = s;
      }, 7980: function(i, s, o) {
        var u, l = o(8114), c = o(6737), d = o(3357);
        u = l() ? c : d, i.exports = u;
      }, 3357: function(i) {
        i.exports = function() {
          throw new Error("not implemented");
        };
      }, 6737: function(i) {
        var s = typeof Uint8Array == "function" ? Uint8Array : void 0;
        i.exports = s;
      }, 2684: function(i) {
        var s = typeof Float64Array == "function" ? Float64Array : null;
        i.exports = s;
      }, 5569: function(i, s, o) {
        var u = o(3876);
        i.exports = u;
      }, 3876: function(i, s, o) {
        var u = o(1448), l = o(2684);
        i.exports = function() {
          var c, d;
          if (typeof l != "function")
            return !1;
          try {
            d = new l([1, 3.14, -3.14, NaN]), c = u(d) && d[0] === 1 && d[1] === 3.14 && d[2] === -3.14 && d[3] != d[3];
          } catch {
            c = !1;
          }
          return c;
        };
      }, 9048: function(i, s, o) {
        var u = o(3763);
        i.exports = u;
      }, 3763: function(i) {
        var s = Object.prototype.hasOwnProperty;
        i.exports = function(o, u) {
          return o != null && s.call(o, u);
        };
      }, 7009: function(i, s, o) {
        var u = o(6784);
        i.exports = u;
      }, 6784: function(i) {
        i.exports = function() {
          return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
        };
      }, 3123: function(i, s, o) {
        var u = o(8481);
        i.exports = u;
      }, 8481: function(i, s, o) {
        var u = o(7009)();
        i.exports = function() {
          return u && typeof Symbol.toStringTag == "symbol";
        };
      }, 2508: function(i, s, o) {
        var u = o(3403);
        i.exports = u;
      }, 3403: function(i, s, o) {
        var u = o(768), l = o(9668), c = o(187);
        i.exports = function() {
          var d, f;
          if (typeof c != "function")
            return !1;
          try {
            f = new c(f = [1, 3.14, -3.14, l + 1, l + 2]), d = u(f) && f[0] === 1 && f[1] === 3 && f[2] === l - 2 && f[3] === 0 && f[4] === 1;
          } catch {
            d = !1;
          }
          return d;
        };
      }, 187: function(i) {
        var s = typeof Uint16Array == "function" ? Uint16Array : null;
        i.exports = s;
      }, 9773: function(i, s, o) {
        var u = o(2822);
        i.exports = u;
      }, 2822: function(i, s, o) {
        var u = o(2744), l = o(3899), c = o(746);
        i.exports = function() {
          var d, f;
          if (typeof c != "function")
            return !1;
          try {
            f = new c(f = [1, 3.14, -3.14, l + 1, l + 2]), d = u(f) && f[0] === 1 && f[1] === 3 && f[2] === l - 2 && f[3] === 0 && f[4] === 1;
          } catch {
            d = !1;
          }
          return d;
        };
      }, 746: function(i) {
        var s = typeof Uint32Array == "function" ? Uint32Array : null;
        i.exports = s;
      }, 8114: function(i, s, o) {
        var u = o(8066);
        i.exports = u;
      }, 8066: function(i, s, o) {
        var u = o(8279), l = o(3443), c = o(2731);
        i.exports = function() {
          var d, f;
          if (typeof c != "function")
            return !1;
          try {
            f = new c(f = [1, 3.14, -3.14, l + 1, l + 2]), d = u(f) && f[0] === 1 && f[1] === 3 && f[2] === l - 2 && f[3] === 0 && f[4] === 1;
          } catch {
            d = !1;
          }
          return d;
        };
      }, 2731: function(i) {
        var s = typeof Uint8Array == "function" ? Uint8Array : null;
        i.exports = s;
      }, 1448: function(i, s, o) {
        var u = o(1453);
        i.exports = u;
      }, 1453: function(i, s, o) {
        var u = o(6208), l = typeof Float64Array == "function";
        i.exports = function(c) {
          return l && c instanceof Float64Array || u(c) === "[object Float64Array]";
        };
      }, 9331: function(i, s, o) {
        var u = o(7980), l = { uint16: o(6322), uint8: u };
        i.exports = l;
      }, 5902: function(i, s, o) {
        var u = o(4106);
        i.exports = u;
      }, 4106: function(i, s, o) {
        var u, l, c = o(9331);
        (l = new c.uint16(1))[0] = 4660, u = new c.uint8(l.buffer)[0] === 52, i.exports = u;
      }, 768: function(i, s, o) {
        var u = o(3823);
        i.exports = u;
      }, 3823: function(i, s, o) {
        var u = o(6208), l = typeof Uint16Array == "function";
        i.exports = function(c) {
          return l && c instanceof Uint16Array || u(c) === "[object Uint16Array]";
        };
      }, 2744: function(i, s, o) {
        var u = o(2326);
        i.exports = u;
      }, 2326: function(i, s, o) {
        var u = o(6208), l = typeof Uint32Array == "function";
        i.exports = function(c) {
          return l && c instanceof Uint32Array || u(c) === "[object Uint32Array]";
        };
      }, 8279: function(i, s, o) {
        var u = o(208);
        i.exports = u;
      }, 208: function(i, s, o) {
        var u = o(6208), l = typeof Uint8Array == "function";
        i.exports = function(c) {
          return l && c instanceof Uint8Array || u(c) === "[object Uint8Array]";
        };
      }, 6315: function(i) {
        i.exports = 1023;
      }, 1686: function(i) {
        i.exports = 2147483647;
      }, 3105: function(i) {
        i.exports = 2146435072;
      }, 3449: function(i) {
        i.exports = 2147483648;
      }, 6988: function(i) {
        i.exports = -1023;
      }, 9777: function(i) {
        i.exports = 1023;
      }, 3690: function(i) {
        i.exports = -1074;
      }, 2918: function(i, s, o) {
        var u = o(4772).NEGATIVE_INFINITY;
        i.exports = u;
      }, 4165: function(i) {
        var s = Number.POSITIVE_INFINITY;
        i.exports = s;
      }, 6488: function(i) {
        i.exports = 22250738585072014e-324;
      }, 9668: function(i) {
        i.exports = 65535;
      }, 3899: function(i) {
        i.exports = 4294967295;
      }, 3443: function(i) {
        i.exports = 255;
      }, 7011: function(i, s, o) {
        var u = o(812);
        i.exports = u;
      }, 812: function(i, s, o) {
        var u = o(4165), l = o(2918);
        i.exports = function(c) {
          return c === u || c === l;
        };
      }, 1883: function(i, s, o) {
        var u = o(1797);
        i.exports = u;
      }, 1797: function(i) {
        i.exports = function(s) {
          return s != s;
        };
      }, 513: function(i, s, o) {
        var u = o(5760);
        i.exports = u;
      }, 5760: function(i) {
        i.exports = function(s) {
          return Math.abs(s);
        };
      }, 5848: function(i, s, o) {
        var u = o(677);
        i.exports = u;
      }, 677: function(i, s, o) {
        var u = o(3449), l = o(1686), c = o(7838), d = o(1921), f = o(2490), h = [0, 0];
        i.exports = function(p, m) {
          var v, y;
          return c.assign(p, h, 1, 0), v = h[0], v &= l, y = d(m), f(v |= y &= u, h[1]);
        };
      }, 5500: function(i, s, o) {
        var u = o(8397);
        i.exports = u;
      }, 8397: function(i, s, o) {
        var u = o(4165), l = o(2918), c = o(6315), d = o(9777), f = o(6988), h = o(3690), p = o(1883), m = o(7011), v = o(5848), y = o(4948), g = o(8478), _ = o(7838), w = o(2490), P = [0, 0], I = [0, 0];
        i.exports = function(x, A) {
          var O, E;
          return x === 0 || p(x) || m(x) ? x : (y(P, x), A += P[1], (A += g(x = P[0])) < h ? v(0, x) : A > d ? x < 0 ? l : u : (A <= f ? (A += 52, E = 2220446049250313e-31) : E = 1, _(I, x), O = I[0], O &= 2148532223, E * w(O |= A + c << 20, I[1])));
        };
      }, 4772: function(i, s, o) {
        var u = o(7548);
        i.exports = u;
      }, 7548: function(i) {
        i.exports = Number;
      }, 8478: function(i, s, o) {
        var u = o(4500);
        i.exports = u;
      }, 4500: function(i, s, o) {
        var u = o(1921), l = o(3105), c = o(6315);
        i.exports = function(d) {
          var f = u(d);
          return (f = (f & l) >>> 20) - c | 0;
        };
      }, 2490: function(i, s, o) {
        var u = o(9639);
        i.exports = u;
      }, 4445: function(i, s, o) {
        var u, l, c;
        o(5902) === !0 ? (l = 1, c = 0) : (l = 0, c = 1), u = { HIGH: l, LOW: c }, i.exports = u;
      }, 9639: function(i, s, o) {
        var u = o(4773), l = o(7382), c = o(4445), d = new l(1), f = new u(d.buffer), h = c.HIGH, p = c.LOW;
        i.exports = function(m, v) {
          return f[h] = m, f[p] = v, d[0];
        };
      }, 5646: function(i, s, o) {
        var u;
        u = o(5902) === !0 ? 1 : 0, i.exports = u;
      }, 1921: function(i, s, o) {
        var u = o(6285);
        i.exports = u;
      }, 6285: function(i, s, o) {
        var u = o(4773), l = o(7382), c = o(5646), d = new l(1), f = new u(d.buffer);
        i.exports = function(h) {
          return d[0] = h, f[c];
        };
      }, 9024: function(i, s, o) {
        var u = o(6488), l = o(7011), c = o(1883), d = o(513);
        i.exports = function(f, h, p, m) {
          return c(f) || l(f) ? (h[m] = f, h[m + p] = 0, h) : f !== 0 && d(f) < u ? (h[m] = 4503599627370496 * f, h[m + p] = -52, h) : (h[m] = f, h[m + p] = 0, h);
        };
      }, 4948: function(i, s, o) {
        var u = o(7576), l = o(9422);
        u(l, "assign", o(9024)), i.exports = l;
      }, 9422: function(i, s, o) {
        var u = o(9024);
        i.exports = function(l) {
          return u(l, [0, 0], 1, 0);
        };
      }, 5239: function(i, s, o) {
        var u = o(4773), l = o(7382), c = o(5782), d = new l(1), f = new u(d.buffer), h = c.HIGH, p = c.LOW;
        i.exports = function(m, v, y, g) {
          return d[0] = m, v[g] = f[h], v[g + y] = f[p], v;
        };
      }, 7838: function(i, s, o) {
        var u = o(7576), l = o(4010);
        u(l, "assign", o(5239)), i.exports = l;
      }, 5782: function(i, s, o) {
        var u, l, c;
        o(5902) === !0 ? (l = 1, c = 0) : (l = 0, c = 1), u = { HIGH: l, LOW: c }, i.exports = u;
      }, 4010: function(i, s, o) {
        var u = o(5239);
        i.exports = function(l) {
          return u(l, [0, 0], 1, 0);
        };
      }, 7576: function(i, s, o) {
        var u = o(7063);
        i.exports = u;
      }, 7063: function(i, s, o) {
        var u = o(6691);
        i.exports = function(l, c, d) {
          u(l, c, { configurable: !1, enumerable: !1, writable: !1, value: d });
        };
      }, 2073: function(i) {
        var s = Object.defineProperty;
        i.exports = s;
      }, 1680: function(i) {
        var s = typeof Object.defineProperty == "function" ? Object.defineProperty : null;
        i.exports = s;
      }, 1471: function(i, s, o) {
        var u = o(1680);
        i.exports = function() {
          try {
            return u({}, "x", {}), !0;
          } catch {
            return !1;
          }
        };
      }, 6691: function(i, s, o) {
        var u, l = o(1471), c = o(2073), d = o(1309);
        u = l() ? c : d, i.exports = u;
      }, 1309: function(i) {
        var s = Object.prototype, o = s.toString, u = s.__defineGetter__, l = s.__defineSetter__, c = s.__lookupGetter__, d = s.__lookupSetter__;
        i.exports = function(f, h, p) {
          var m, v, y, g;
          if (typeof f != "object" || f === null || o.call(f) === "[object Array]")
            throw new TypeError("invalid argument. First argument must be an object. Value: `" + f + "`.");
          if (typeof p != "object" || p === null || o.call(p) === "[object Array]")
            throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + p + "`.");
          if ((v = "value" in p) && (c.call(f, h) || d.call(f, h) ? (m = f.__proto__, f.__proto__ = s, delete f[h], f[h] = p.value, f.__proto__ = m) : f[h] = p.value), y = "get" in p, g = "set" in p, v && (y || g))
            throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
          return y && u && u.call(f, h, p.get), g && l && l.call(f, h, p.set), f;
        };
      }, 6208: function(i, s, o) {
        var u, l = o(3123), c = o(7407), d = o(4210);
        u = l() ? d : c, i.exports = u;
      }, 7407: function(i, s, o) {
        var u = o(173);
        i.exports = function(l) {
          return u.call(l);
        };
      }, 4210: function(i, s, o) {
        var u = o(9048), l = o(1403), c = o(173);
        i.exports = function(d) {
          var f, h, p;
          if (d == null)
            return c.call(d);
          h = d[l], f = u(d, l);
          try {
            d[l] = void 0;
          } catch {
            return c.call(d);
          }
          return p = c.call(d), f ? d[l] = h : delete d[l], p;
        };
      }, 173: function(i) {
        var s = Object.prototype.toString;
        i.exports = s;
      }, 1403: function(i) {
        var s = typeof Symbol == "function" ? Symbol.toStringTag : "";
        i.exports = s;
      }, 7843: function(i) {
        i.exports = function(s, o, u, l, c) {
          for (o = o.split ? o.split(".") : o, l = 0; l < o.length; l++)
            s = s ? s[o[l]] : c;
          return s === c ? u : s;
        };
      }, 374: function(i, s, o) {
        o.r(s), o.d(s, { default: function() {
          return c;
        } });
        for (var u = [], l = 0; l < 64; )
          u[l] = 0 | 4294967296 * Math.sin(++l % Math.PI);
        function c(d) {
          var f, h, p, m = [f = 1732584193, h = 4023233417, ~f, ~h], v = [], y = unescape(encodeURI(d)) + "", g = y.length;
          for (d = --g / 4 + 2 | 15, v[--d] = 8 * g; ~g; )
            v[g >> 2] |= y.charCodeAt(g) << 8 * g--;
          for (l = y = 0; l < d; l += 16) {
            for (g = m; y < 64; g = [p = g[3], f + ((p = g[0] + [f & h | ~f & p, p & f | ~p & h, f ^ h ^ p, h ^ (f | ~p)][g = y >> 4] + u[y] + ~~v[l | 15 & [y, 5 * y + 1, 3 * y + 5, 7 * y][g]]) << (g = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * g + y++ % 4]) | p >>> -g), f, h])
              f = 0 | g[1], h = g[2];
            for (y = 4; y; )
              m[--y] += g[y];
          }
          for (d = ""; y < 32; )
            d += (m[y >> 3] >> 4 * (1 ^ y++) & 15).toString(16);
          return d;
        }
      } }, n = {};
      function a(i) {
        var s = n[i];
        if (s !== void 0)
          return s.exports;
        var o = n[i] = { exports: {} };
        return r[i].call(o.exports, o, o.exports, a), o.exports;
      }
      return a.d = function(i, s) {
        for (var o in s)
          a.o(s, o) && !a.o(i, o) && Object.defineProperty(i, o, { enumerable: !0, get: s[o] });
      }, a.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, a.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, a(2870);
    }();
  });
})(Ir);
var rt = Ir.exports, ga = function(t) {
  return function(e) {
    var r = e.payload, n = e.integration, a = e.next, i = new rt.Store(t), s = i.getRulesByDestinationName(n);
    s.forEach(function(o) {
      for (var u = o.matchers, l = o.transformers, c = 0; c < u.length; c++)
        if (rt.matches(r.obj, u[c]) && (r.obj = rt.transform(r.obj, l[c]), r.obj === null))
          return a(null);
    }), a(r);
  };
};
const ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  tsubMiddleware: ga
}, Symbol.toStringTag, { value: "Module" }));
function Er(t, e) {
  var r, n;
  return typeof e?.enabled == "boolean" ? e.enabled : (n = (r = t?.__default) === null || r === void 0 ? void 0 : r.enabled) !== null && n !== void 0 ? n : !0;
}
function Or(t) {
  return t.toLowerCase().replace(".", "").replace(/\s+/g, "-");
}
function Ar(t, e) {
  return e === void 0 && (e = !1), e ? btoa(t).replace(/=/g, "") : void 0;
}
function wa(t) {
  return ("Integration" in t ? t.Integration : t).prototype.name;
}
function _a(t, e, r) {
  var n, a;
  try {
    var i = ((a = (n = window?.performance) === null || n === void 0 ? void 0 : n.getEntriesByName(t, "resource")) !== null && a !== void 0 ? a : [])[0];
    i && e.stats.gauge("legacy_destination_time", Math.round(i.duration), N([
      r
    ], i.duration < 100 ? ["cached"] : [], !0));
  } catch {
  }
}
function Sa(t, e, r) {
  var n;
  if ("Integration" in t) {
    var a = {
      user: function() {
        return r.user();
      },
      addIntegration: function() {
      }
    };
    t(a), n = t.Integration;
  } else
    n = t;
  var i = new n(e);
  return i.analytics = r, i;
}
function ka(t, e, r, n) {
  return S(this, void 0, void 0, function() {
    var a, i, s, o, u, l;
    return k(this, function(c) {
      switch (c.label) {
        case 0:
          a = Or(e), i = Ar(a, n), s = Ft(), o = "".concat(s, "/integrations/").concat(i ?? a, "/").concat(r, "/").concat(i ?? a, ".dynamic.js.gz"), c.label = 1;
        case 1:
          return c.trys.push([1, 3, , 4]), [4, Se(o)];
        case 2:
          return c.sent(), _a(o, t, e), [3, 4];
        case 3:
          throw u = c.sent(), t.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(e), "failed"]), u;
        case 4:
          return l = window["".concat(a, "Deps")], [
            4,
            Promise.all(l.map(function(d) {
              return Se(s + d + ".gz");
            }))
            // @ts-ignore
          ];
        case 5:
          return c.sent(), window["".concat(a, "Loader")](), [2, window[
            // @ts-ignore
            "".concat(a, "Integration")
          ]];
      }
    });
  });
}
function Pa(t, e, r) {
  return S(this, void 0, void 0, function() {
    var n, a, i, s;
    return k(this, function(o) {
      return n = Ft(), a = Or(t), i = Ar(t, r), s = "".concat(n, "/integrations/").concat(i ?? a, "/").concat(e, "/").concat(i ?? a, ".dynamic.js.gz"), [2, Gi(s)];
    });
  });
}
function xa(t) {
  var e, r, n, a;
  return (a = (r = (e = t?.versionSettings) === null || e === void 0 ? void 0 : e.override) !== null && r !== void 0 ? r : (n = t?.versionSettings) === null || n === void 0 ? void 0 : n.version) !== null && a !== void 0 ? a : "latest";
}
var Ia = function(t, e) {
  var r, n = e.type, a = e.bundlingStatus, i = e.versionSettings, s = a !== "unbundled" && (n === "browser" || ((r = i?.componentTypes) === null || r === void 0 ? void 0 : r.includes("browser")));
  return !t.startsWith("Segment") && t !== "Iterable" && s;
}, Ea = function(t, e) {
  var r = e.All === !1 && e[t] === void 0;
  return e[t] === !1 || r;
};
function Oa(t, e) {
  return S(this, void 0, void 0, function() {
    var r, n = this;
    return k(this, function(a) {
      switch (a.label) {
        case 0:
          return r = [], oe() ? [2, e] : [
            4,
            wr(function() {
              return e.length > 0 && Wt();
            }, function() {
              return S(n, void 0, void 0, function() {
                var i, s, o;
                return k(this, function(u) {
                  switch (u.label) {
                    case 0:
                      return i = e.pop(), i ? [4, we(i, t)] : [
                        2
                        /*return*/
                      ];
                    case 1:
                      return s = u.sent(), o = s instanceof Q, o || r.push(i), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            })
            // re-add failed tasks
          ];
        case 1:
          return a.sent(), r.map(function(i) {
            return e.pushWithBackoff(i);
          }), [2, e];
      }
    });
  });
}
var jr = (
  /** @class */
  function() {
    function t(e, r, n, a, i, s) {
      a === void 0 && (a = {});
      var o = this;
      this.options = {}, this.type = "destination", this.middleware = [], this.initializePromise = yt(), this.flushing = !1, this.name = e, this.version = r, this.settings = b({}, a), this.disableAutoISOConversion = i.disableAutoISOConversion || !1, this.integrationSource = s, this.settings.type && this.settings.type === "browser" && delete this.settings.type, this.initializePromise.promise.then(function(u) {
        return o._initialized = u;
      }, function() {
      }), this.options = i, this.buffer = i.disableClientPersistence ? new Le(4, []) : new Ue(4, "".concat(n, ":dest-").concat(e)), this.scheduleFlush();
    }
    return t.prototype.isLoaded = function() {
      return !!this._ready;
    }, t.prototype.ready = function() {
      var e = this;
      return this.initializePromise.promise.then(function() {
        var r;
        return (r = e.onReady) !== null && r !== void 0 ? r : Promise.resolve();
      });
    }, t.prototype.load = function(e, r) {
      var n;
      return S(this, void 0, void 0, function() {
        var a, i, s = this;
        return k(this, function(o) {
          switch (o.label) {
            case 0:
              return this._ready || this.onReady !== void 0 ? [
                2
                /*return*/
              ] : (n = this.integrationSource) !== null && n !== void 0 ? (i = n, [3, 3]) : [3, 1];
            case 1:
              return [4, ka(e, this.name, this.version, this.options.obfuscate)];
            case 2:
              i = o.sent(), o.label = 3;
            case 3:
              a = i, this.integration = Sa(a, this.settings, r), this.onReady = new Promise(function(u) {
                var l = function() {
                  s._ready = !0, u(!0);
                };
                s.integration.once("ready", l);
              }), this.integration.on("initialize", function() {
                s.initializePromise.resolve(!0);
              });
              try {
                ne(e, {
                  integrationName: this.name,
                  methodName: "initialize",
                  type: "classic"
                }), this.integration.initialize();
              } catch (u) {
                throw ne(e, {
                  integrationName: this.name,
                  methodName: "initialize",
                  type: "classic",
                  didError: !0
                }), this.initializePromise.resolve(!1), u;
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.unload = function(e, r) {
      return Pa(this.name, this.version, this.options.obfuscate);
    }, t.prototype.addMiddleware = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      this.middleware = (e = this.middleware).concat.apply(e, r);
    }, t.prototype.shouldBuffer = function(e) {
      return (
        // page events can't be buffered because of destinations that automatically add page views
        e.event.type !== "page" && (oe() || this._ready !== !0 || this._initialized !== !0)
      );
    }, t.prototype.send = function(e, r, n) {
      var a, i;
      return S(this, void 0, void 0, function() {
        var s, o, u, l, c, d;
        return k(this, function(f) {
          switch (f.label) {
            case 0:
              return this.shouldBuffer(e) ? (this.buffer.push(e), this.scheduleFlush(), [2, e]) : (s = (i = (a = this.options) === null || a === void 0 ? void 0 : a.plan) === null || i === void 0 ? void 0 : i.track, o = e.event.event, s && o && this.name !== "Segment.io" && (u = s[o], Er(s, u) ? e.updateEvent("integrations", b(b({}, e.event.integrations), u?.integrations)) : (e.updateEvent("integrations", b(b({}, e.event.integrations), { All: !1, "Segment.io": !0 })), e.cancel(new ae({
                retry: !1,
                reason: "Event ".concat(o, " disabled for integration ").concat(this.name, " in tracking plan"),
                type: "Dropped by plan"
              }))), u?.enabled && u?.integrations[this.name] === !1 && e.cancel(new ae({
                retry: !1,
                reason: "Event ".concat(o, " disabled for integration ").concat(this.name, " in tracking plan"),
                type: "Dropped by plan"
              }))), [4, Nt(this.name, e.event, this.middleware)]);
            case 1:
              if (l = f.sent(), l === null)
                return [2, e];
              c = new r(l, {
                traverse: !this.disableAutoISOConversion
              }), ne(e, {
                integrationName: this.name,
                methodName: n,
                type: "classic"
              }), f.label = 2;
            case 2:
              return f.trys.push([2, 5, , 6]), this.integration ? [4, this.integration.invoke.call(this.integration, n, c)] : [3, 4];
            case 3:
              f.sent(), f.label = 4;
            case 4:
              return [3, 6];
            case 5:
              throw d = f.sent(), ne(e, {
                integrationName: this.name,
                methodName: n,
                type: "classic",
                didError: !0
              }), d;
            case 6:
              return [2, e];
          }
        });
      });
    }, t.prototype.track = function(e) {
      return S(this, void 0, void 0, function() {
        return k(this, function(r) {
          return [2, this.send(e, V.Track, "track")];
        });
      });
    }, t.prototype.page = function(e) {
      var r;
      return S(this, void 0, void 0, function() {
        return k(this, function(n) {
          switch (n.label) {
            case 0:
              return !((r = this.integration) === null || r === void 0) && r._assumesPageview && !this._initialized && this.integration.initialize(), [4, this.initializePromise.promise];
            case 1:
              return n.sent(), [2, this.send(e, V.Page, "page")];
          }
        });
      });
    }, t.prototype.identify = function(e) {
      return S(this, void 0, void 0, function() {
        return k(this, function(r) {
          return [2, this.send(e, V.Identify, "identify")];
        });
      });
    }, t.prototype.alias = function(e) {
      return S(this, void 0, void 0, function() {
        return k(this, function(r) {
          return [2, this.send(e, V.Alias, "alias")];
        });
      });
    }, t.prototype.group = function(e) {
      return S(this, void 0, void 0, function() {
        return k(this, function(r) {
          return [2, this.send(e, V.Group, "group")];
        });
      });
    }, t.prototype.scheduleFlush = function() {
      var e = this;
      this.flushing || setTimeout(function() {
        return S(e, void 0, void 0, function() {
          var r;
          return k(this, function(n) {
            switch (n.label) {
              case 0:
                return oe() || this._ready !== !0 || this._initialized !== !0 ? (this.scheduleFlush(), [
                  2
                  /*return*/
                ]) : (this.flushing = !0, r = this, [4, Oa(this, this.buffer)]);
              case 1:
                return r.buffer = n.sent(), this.flushing = !1, this.buffer.todo > 0 && this.scheduleFlush(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, Math.random() * 5e3);
    }, t;
  }()
);
function Aa(t, e, r, n, a, i) {
  var s, o;
  if (r === void 0 && (r = {}), n === void 0 && (n = {}), Jt())
    return [];
  e.plan && (n = n ?? {}, n.plan = e.plan);
  var u = (o = (s = e.middlewareSettings) === null || s === void 0 ? void 0 : s.routingRules) !== null && o !== void 0 ? o : [], l = e.integrations, c = n.integrations, d = kr(e, n ?? {}), f = i?.reduce(function(p, m) {
    var v;
    return b(b({}, p), (v = {}, v[wa(m)] = m, v));
  }, {}), h = new Set(N(N([], Object.keys(l).filter(function(p) {
    return Ia(p, l[p]);
  }), !0), Object.keys(f || {}).filter(function(p) {
    return U(l[p]) || U(c?.[p]);
  }), !0));
  return Array.from(h).filter(function(p) {
    return !Ea(p, r);
  }).map(function(p) {
    var m = l[p], v = xa(m), y = new jr(p, v, t, d[p], n, f?.[p]), g = u.filter(function(_) {
      return _.destinationName === p;
    });
    return g.length > 0 && a && y.addMiddleware(a), y;
  });
}
const ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LegacyDestination: jr,
  ajsDestinations: Aa
}, Symbol.toStringTag, { value: "Module" }));
function Ma(t) {
  return S(this, void 0, void 0, function() {
    var e;
    return k(this, function(r) {
      switch (r.label) {
        case 0:
          return [
            4,
            Promise.resolve().then(() => za)
            // This is super gross, but we need to support the `window.analytics.plugins` namespace
            // that is linked in the segment docs in order to be backwards compatible with ajs-classic
            // @ts-expect-error
          ];
        case 1:
          return e = r.sent(), t._plugins = e, [
            2
            /*return*/
          ];
      }
    });
  });
}
const Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loadLegacyVideoPlugins: Ma
}, Symbol.toStringTag, { value: "Module" }));
function Ta(t, e) {
  var r, n;
  if (!t || !Object.keys(t))
    return {};
  var a = t.integrations ? Object.keys(t.integrations).filter(function(s) {
    return t.integrations[s] === !1;
  }) : [], i = [];
  return ((r = e.remotePlugins) !== null && r !== void 0 ? r : []).forEach(function(s) {
    a.forEach(function(o) {
      s.creationName == o && i.push(s.name);
    });
  }), ((n = e.remotePlugins) !== null && n !== void 0 ? n : []).reduce(function(s, o) {
    return o.settings.subscriptions && i.includes(o.name) && o.settings.subscriptions.forEach(
      // @ts-expect-error parameter 'sub' implicitly has an 'any' type
      function(u) {
        return s["".concat(o.name, " ").concat(u.partnerAction)] = !1;
      }
    ), s;
  }, {});
}
function Fa(t, e) {
  function r(n) {
    var a = t, i = n.event.event;
    if (a && i) {
      var s = a[i];
      if (Er(a, s)) {
        var o = Ta(s, e);
        n.updateEvent("integrations", b(b(b({}, n.event.integrations), s?.integrations), o));
      } else
        return n.updateEvent("integrations", b(b({}, n.event.integrations), { All: !1, "Segment.io": !0 })), n;
    }
    return n;
  }
  return {
    name: "Schema Filter",
    version: "0.1.0",
    isLoaded: function() {
      return !0;
    },
    load: function() {
      return Promise.resolve();
    },
    type: "before",
    page: r,
    alias: r,
    track: r,
    identify: r,
    group: r
  };
}
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  schemaFilter: Fa
}, Symbol.toStringTag, { value: "Module" }));
function Da(t, e, r) {
  var n;
  return S(this, void 0, void 0, function() {
    var a, i, s, o, u, l = this;
    return k(this, function(c) {
      switch (c.label) {
        case 0:
          return Jt() ? [2, []] : (a = Ft(), i = (n = e.enabledMiddleware) !== null && n !== void 0 ? n : {}, s = Object.entries(i).filter(function(d) {
            d[0];
            var f = d[1];
            return f;
          }).map(function(d) {
            var f = d[0];
            return f;
          }), o = s.map(function(d) {
            return S(l, void 0, void 0, function() {
              var f, h, p, m;
              return k(this, function(v) {
                switch (v.label) {
                  case 0:
                    f = d.replace("@segment/", ""), h = f, r && (h = btoa(f).replace(/=/g, "")), p = "".concat(a, "/middleware/").concat(h, "/latest/").concat(h, ".js.gz"), v.label = 1;
                  case 1:
                    return v.trys.push([1, 3, , 4]), [
                      4,
                      Se(p)
                      // @ts-ignore
                    ];
                  case 2:
                    return v.sent(), [2, window["".concat(f, "Middleware")]];
                  case 3:
                    return m = v.sent(), t.log("error", m), t.stats.increment("failed_remote_middleware"), [3, 4];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }), [4, Promise.all(o)]);
        case 1:
          return u = c.sent(), u = u.filter(Boolean), [2, u];
      }
    });
  });
}
const La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  remoteMiddlewares: Da
}, Symbol.toStringTag, { value: "Module" }));
var Mr = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(window, function() {
    return function(r) {
      var n = {};
      function a(i) {
        if (n[i]) return n[i].exports;
        var s = n[i] = { i, l: !1, exports: {} };
        return r[i].call(s.exports, s, s.exports, a), s.l = !0, s.exports;
      }
      return a.m = r, a.c = n, a.d = function(i, s, o) {
        a.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: o });
      }, a.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, a.t = function(i, s) {
        if (1 & s && (i = a(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule) return i;
        var o = /* @__PURE__ */ Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string") for (var u in i) a.d(o, u, function(l) {
          return i[l];
        }.bind(null, u));
        return o;
      }, a.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return a.d(s, "a", s), s;
      }, a.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, a.p = "", a(a.s = 2);
    }([function(r, n, a) {
      a.r(n);
      var i = typeof fetch == "function" ? fetch.bind() : function(s, o) {
        return o = o || {}, new Promise(function(u, l) {
          var c = new XMLHttpRequest();
          for (var d in c.open(o.method || "get", s, !0), o.headers) c.setRequestHeader(d, o.headers[d]);
          function f() {
            var h, p = [], m = [], v = {};
            return c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(y, g, _) {
              p.push(g = g.toLowerCase()), m.push([g, _]), h = v[g], v[g] = h ? h + "," + _ : _;
            }), { ok: (c.status / 100 | 0) == 2, status: c.status, statusText: c.statusText, url: c.responseURL, clone: f, text: function() {
              return Promise.resolve(c.responseText);
            }, json: function() {
              return Promise.resolve(c.responseText).then(JSON.parse);
            }, blob: function() {
              return Promise.resolve(new Blob([c.response]));
            }, headers: { keys: function() {
              return p;
            }, entries: function() {
              return m;
            }, get: function(y) {
              return v[y.toLowerCase()];
            }, has: function(y) {
              return y.toLowerCase() in v;
            } } };
          }
          c.withCredentials = o.credentials == "include", c.onload = function() {
            u(f());
          }, c.onerror = l, c.send(o.body);
        });
      };
      n.default = i;
    }, function(r, n, a) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = /* @__PURE__ */ function() {
        function o(u, l) {
          for (var c = 0; c < l.length; c++) {
            var d = l[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, d.key, d);
          }
        }
        return function(u, l, c) {
          return l && o(u.prototype, l), c && o(u, c), u;
        };
      }(), s = function() {
        function o(u, l) {
          (function(c, d) {
            if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
          })(this, o), this.pluginName = u;
        }
        return i(o, [{ key: "track", value: function(u, l) {
          window.analytics.track(u, l, { integration: { name: this.pluginName } });
        } }]), o;
      }();
      n.default = s;
    }, function(r, n, a) {
      Object.defineProperty(n, "__esModule", { value: !0 }), n.YouTubeAnalytics = n.VimeoAnalytics = void 0;
      var i = o(a(3)), s = o(a(4));
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      n.VimeoAnalytics = i.default, n.YouTubeAnalytics = s.default;
    }, function(r, n, a) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = /* @__PURE__ */ function() {
        function l(c, d) {
          for (var f = 0; f < d.length; f++) {
            var h = d[f];
            h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(c, h.key, h);
          }
        }
        return function(c, d, f) {
          return d && l(c.prototype, d), f && l(c, f), c;
        };
      }(), s = o(a(0));
      function o(l) {
        return l && l.__esModule ? l : { default: l };
      }
      var u = function(l) {
        function c(d, f) {
          (function(p, m) {
            if (!(p instanceof m)) throw new TypeError("Cannot call a class as a function");
          })(this, c);
          var h = function(p, m) {
            if (!p) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !m || typeof m != "object" && typeof m != "function" ? p : m;
          }(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, "VimeoAnalytics"));
          return h.authToken = f, h.player = d, h.metadata = { content: {}, playback: { videoPlayer: "Vimeo" } }, h.mostRecentHeartbeat = 0, h.isPaused = !1, h;
        }
        return function(d, f) {
          if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof f);
          d.prototype = Object.create(f && f.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(d, f) : d.__proto__ = f);
        }(c, l), i(c, [{ key: "initialize", value: function() {
          var d = this, f = { loaded: this.retrieveMetadata, play: this.trackPlay, pause: this.trackPause, ended: this.trackEnded, timeupdate: this.trackHeartbeat };
          for (var h in f) this.registerHandler(h, f[h]);
          this.player.getVideoId().then(function(p) {
            d.retrieveMetadata({ id: p });
          }).catch(console.error);
        } }, { key: "registerHandler", value: function(d, f) {
          var h = this;
          this.player.on(d, function(p) {
            h.updateMetadata(p), f.call(h, p);
          });
        } }, { key: "trackPlay", value: function() {
          this.isPaused ? (this.track("Video Playback Resumed", this.metadata.playback), this.isPaused = !1) : (this.track("Video Playback Started", this.metadata.playback), this.track("Video Content Started", this.metadata.content));
        } }, { key: "trackEnded", value: function() {
          this.track("Video Playback Completed", this.metadata.playback), this.track("Video Content Completed", this.metadata.content);
        } }, { key: "trackHeartbeat", value: function() {
          var d = this.mostRecentHeartbeat, f = this.metadata.playback.position;
          f !== d && f - d >= 10 && (this.track("Video Content Playing", this.metadata.content), this.mostRecentHeartbeat = Math.floor(f));
        } }, { key: "trackPause", value: function() {
          this.isPaused = !0, this.track("Video Playback Paused", this.metadata.playback);
        } }, { key: "retrieveMetadata", value: function(d) {
          var f = this;
          return new Promise(function(h, p) {
            var m = d.id;
            (0, s.default)("https://api.vimeo.com/videos/" + m, { headers: { Authorization: "Bearer " + f.authToken } }).then(function(v) {
              return v.ok ? v.json() : p(v);
            }).then(function(v) {
              f.metadata.content.title = v.name, f.metadata.content.description = v.description, f.metadata.content.publisher = v.user.name, f.metadata.playback.position = 0, f.metadata.playback.totalLength = v.duration;
            }).catch(function(v) {
              return console.error("Request to Vimeo API Failed with: ", v), p(v);
            });
          });
        } }, { key: "updateMetadata", value: function(d) {
          var f = this;
          return new Promise(function(h, p) {
            f.player.getVolume().then(function(m) {
              m && (f.metadata.playback.sound = 100 * m), f.metadata.playback.position = d.seconds, h();
            }).catch(p);
          });
        } }]), c;
      }(o(a(1)).default);
      n.default = u;
    }, function(r, n, a) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var i = /* @__PURE__ */ function() {
        function d(f, h) {
          for (var p = 0; p < h.length; p++) {
            var m = h[p];
            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(f, m.key, m);
          }
        }
        return function(f, h, p) {
          return h && d(f.prototype, h), p && d(f, p), f;
        };
      }(), s = u(a(0)), o = u(a(1));
      function u(d) {
        return d && d.__esModule ? d : { default: d };
      }
      var l = function(d) {
        function f(h, p) {
          (function(v, y) {
            if (!(v instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, f);
          var m = function(v, y) {
            if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !y || typeof y != "object" && typeof y != "function" ? v : y;
          }(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, "YoutubeAnalytics"));
          return m.player = h, m.apiKey = p, m.playerLoaded = !1, m.playbackStarted = !1, m.contentStarted = !1, m.isPaused = !1, m.isBuffering = !1, m.isSeeking = !1, m.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 0 }, m.metadata = [{ playback: { video_player: "youtube" }, content: {} }], m.playlistIndex = 0, m;
        }
        return function(h, p) {
          if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
          h.prototype = Object.create(p && p.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(h, p) : h.__proto__ = p);
        }(f, d), i(f, [{ key: "initialize", value: function() {
          window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this), window.segmentYoutubeOnReady = this.onPlayerReady.bind(this), this.player.addEventListener("onReady", "segmentYoutubeOnReady"), this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
        } }, { key: "onPlayerReady", value: function(h) {
          this.retrieveMetadata();
        } }, { key: "onPlayerStateChange", value: function(h) {
          var p = this.player.getCurrentTime();
          switch (this.metadata[this.playlistIndex] && (this.metadata[this.playlistIndex].playback.position = this.metadata[this.playlistIndex].content.position = p, this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality(), this.metadata[this.playlistIndex].playback.sound = this.player.isMuted() ? 0 : this.player.getVolume()), h.data) {
            case -1:
              if (this.playerLoaded) break;
              this.retrieveMetadata(), this.playerLoaded = !0;
              break;
            case YT.PlayerState.BUFFERING:
              this.handleBuffer();
              break;
            case YT.PlayerState.PLAYING:
              this.handlePlay();
              break;
            case YT.PlayerState.PAUSED:
              this.handlePause();
              break;
            case YT.PlayerState.ENDED:
              this.handleEnd();
          }
          this.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 1e3 * this.player.getCurrentTime() };
        } }, { key: "retrieveMetadata", value: function() {
          var h = this;
          return new Promise(function(p, m) {
            var v = h.player.getVideoData(), y = h.player.getPlaylist() || [v.video_id], g = y.join();
            (0, s.default)("https://www.googleapis.com/youtube/v3/videos?id=" + g + "&part=snippet,contentDetails&key=" + h.apiKey).then(function(_) {
              if (!_.ok) {
                var w = new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");
                throw w.response = _, w;
              }
              return _.json();
            }).then(function(_) {
              h.metadata = [];
              for (var w = 0, P = 0; P < y.length; P++) {
                var I = _.items[P];
                h.metadata.push({ content: { title: I.snippet.title, description: I.snippet.description, keywords: I.snippet.tags, channel: I.snippet.channelTitle, airdate: I.snippet.publishedAt } }), w += c(I.contentDetails.duration);
              }
              for (P = 0; P < y.length; P++) h.metadata[P].playback = { total_length: w, video_player: "youtube" };
              p();
            }).catch(function(_) {
              h.metadata = y.map(function(w) {
                return { playback: { video_player: "youtube" }, content: {} };
              }), m(_);
            });
          });
        } }, { key: "handleBuffer", value: function() {
          var h = this.determineSeek();
          this.playbackStarted || (this.playbackStarted = !0, this.track("Video Playback Started", this.metadata[this.playlistIndex].playback)), h && !this.isSeeking && (this.isSeeking = !0, this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback)), this.isSeeking && (this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback), this.isSeeking = !1);
          var p = this.player.getPlaylist();
          p && this.player.getCurrentTime() === 0 && this.player.getPlaylistIndex() !== this.playlistIndex && (this.contentStarted = !1, this.playlistIndex === p.length - 1 && this.player.getPlaylistIndex() === 0 && (this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback), this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback))), this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback), this.isBuffering = !0;
        } }, { key: "handlePlay", value: function() {
          this.contentStarted || (this.playlistIndex = this.player.getPlaylistIndex(), this.playlistIndex === -1 && (this.playlistIndex = 0), this.track("Video Content Started", this.metadata[this.playlistIndex].content), this.contentStarted = !0), this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = !1), this.isPaused && (this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback), this.isPaused = !1);
        } }, { key: "handlePause", value: function() {
          var h = this.determineSeek();
          this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = !1), this.isPaused || (h ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback), this.isSeeking = !0) : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback), this.isPaused = !0));
        } }, { key: "handleEnd", value: function() {
          this.track("Video Content Completed", this.metadata[this.playlistIndex].content), this.contentStarted = !1;
          var h = this.player.getPlaylistIndex(), p = this.player.getPlaylist();
          (p && h === p.length - 1 || h === -1) && (this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback), this.playbackStarted = !1);
        } }, { key: "determineSeek", value: function() {
          var h = this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported, p = 1e3 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
          return Math.abs(h - p) > 2e3;
        } }]), f;
      }(o.default);
      function c(d) {
        var f = d.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        return f = f.slice(1).map(function(h) {
          if (h != null) return h.replace(/\D/, "");
        }), 3600 * (parseInt(f[0]) || 0) + 60 * (parseInt(f[1]) || 0) + (parseInt(f[2]) || 0);
      }
      n.default = l;
    }]);
  });
})(Mr);
var Cr = Mr.exports;
const Ra = /* @__PURE__ */ Fr(Cr), za = /* @__PURE__ */ Nr({
  __proto__: null,
  default: Ra
}, [Cr]);
export {
  _r as Analytics,
  Ba as AnalyticsBrowser,
  Q as Context,
  ae as ContextCancelation,
  Sn as EventFactory,
  Tn as Group,
  le as UniversalStorage,
  ur as User,
  lr as getGlobalAnalytics,
  kn as isDestinationPluginWithAddMiddleware,
  cn as resolveAliasArguments,
  ln as resolveArguments,
  Dt as resolvePageArguments,
  Lt as resolveUserArguments,
  Mi as segmentio
};
