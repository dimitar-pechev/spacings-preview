import { r as v } from "./webc-vendor-BjE1NNvQ.js";
const f = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, l = globalThis, m = "9.38.0";
function b() {
  return w(l), l;
}
function w(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || m, t[m] = t[m] || {};
}
function k(e, t, n = l) {
  const s = n.__SENTRY__ = n.__SENTRY__ || {}, r = s[m] = s[m] || {};
  return r[e] || (r[e] = t());
}
const Z = "Sentry Logger ", x = {};
function j(e) {
  if (!("console" in l))
    return e();
  const t = l.console, n = {}, s = Object.keys(x);
  s.forEach((r) => {
    const i = x[r];
    n[r] = t[r], t[r] = i;
  });
  try {
    return e();
  } finally {
    s.forEach((r) => {
      t[r] = n[r];
    });
  }
}
function F() {
  R().enabled = !0;
}
function G() {
  R().enabled = !1;
}
function L() {
  return R().enabled;
}
function Y(...e) {
  _("log", ...e);
}
function tt(...e) {
  _("info", ...e);
}
function K(...e) {
  _("warn", ...e);
}
function H(...e) {
  _("error", ...e);
}
function et(...e) {
  _("debug", ...e);
}
function nt(...e) {
  _("assert", ...e);
}
function st(...e) {
  _("trace", ...e);
}
function _(e, ...t) {
  f && L() && j(() => {
    l.console[e](`${Z}[${e}]:`, ...t);
  });
}
function R() {
  return f ? k("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const C = {
  /** Enable logging. */
  enable: F,
  /** Disable logging. */
  disable: G,
  /** Check if logging is enabled. */
  isEnabled: L,
  /** Log a message. */
  log: Y,
  /** Log level info */
  info: tt,
  /** Log a warning. */
  warn: K,
  /** Log an error. */
  error: H,
  /** Log a debug message. */
  debug: et,
  /** Log an assertion. */
  assert: nt,
  /** Log a trace. */
  trace: st
}, h = {
  /** Enable logging. */
  enable: F,
  /** Disable logging. */
  disable: G,
  /** Check if logging is enabled. */
  isEnabled: L,
  /** Log a message. */
  log: Y,
  /** Log a warning. */
  warn: K,
  /** Log an error. */
  error: H
}, V = Object.prototype.toString;
function rt(e) {
  switch (V.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return ct(e, Error);
  }
}
function it(e, t) {
  return V.call(e) === `[object ${t}]`;
}
function ot(e) {
  return it(e, "Object");
}
function at(e) {
  return !!(e?.then && typeof e.then == "function");
}
function ct(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function ut(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function pt(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: n,
      writable: !0,
      configurable: !0
    });
  } catch {
    f && h.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function lt() {
  const e = l;
  return e.crypto || e.msCrypto;
}
function S(e = lt()) {
  let t = () => Math.random() * 16;
  try {
    if (e?.randomUUID)
      return e.randomUUID().replace(/-/g, "");
    e?.getRandomValues && (t = () => {
      const n = new Uint8Array(1);
      return e.getRandomValues(n), n[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(
    /[018]/g,
    (n) => (
      // eslint-disable-next-line no-bitwise
      (n ^ (t() & 15) >> n / 4).toString(16)
    )
  );
}
const W = 1e3;
function q() {
  return Date.now() / W;
}
function ht() {
  const { performance: e } = l;
  if (!e?.now || !e.timeOrigin)
    return q;
  const t = e.timeOrigin;
  return () => (t + e.now()) / W;
}
let T;
function dt() {
  return (T ?? (T = ht()))();
}
function ft(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || dt(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : S()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function X(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0)
    return t;
  if (e && Object.keys(t).length === 0)
    return e;
  const s = { ...e };
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (s[r] = X(s[r], t[r], n - 1));
  return s;
}
function P() {
  return S();
}
const D = "_sentrySpan";
function U(e, t) {
  t ? pt(e, D, t) : delete e[D];
}
function A(e) {
  return e[D];
}
const _t = 100;
class d {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called during event processing. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */
  /** Session */
  /** The client on this scope */
  /** Contains the last event id of a captured event.  */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
      traceId: P(),
      sampleRand: Math.random()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const t = new d();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, this._contexts.flags && (t._contexts.flags = {
      values: [...this._contexts.flags.values]
    }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, U(t, A(this)), t;
  }
  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
  setClient(t) {
    this._client = t;
  }
  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
  setLastEventId(t) {
    this._lastEventId = t;
  }
  /**
   * Get the client assigned to this scope.
   */
  getClient() {
    return this._client;
  }
  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  /**
   * Add an event processor that will be called before an event is sent.
   */
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
  setUser(t) {
    return this._user = t || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && ft(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  /**
   * Get the user from this scope.
   */
  getUser() {
    return this._user;
  }
  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
  setTags(t) {
    return this._tags = {
      ...this._tags,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * Set a single tag that will be sent as tags data with the event.
   */
  setTag(t, n) {
    return this._tags = { ...this._tags, [t]: n }, this._notifyScopeListeners(), this;
  }
  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
  setExtras(t) {
    return this._extra = {
      ...this._extra,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
  setExtra(t, n) {
    return this._extra = { ...this._extra, [t]: n }, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the level on the scope for future events.
   */
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
  setContext(t, n) {
    return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this;
  }
  /**
   * Set the session for the scope.
   */
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  /**
   * Get the session from the scope.
   */
  getSession() {
    return this._session;
  }
  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
  update(t) {
    if (!t)
      return this;
    const n = typeof t == "function" ? t(this) : t, s = n instanceof d ? n.getScopeData() : ot(n) ? t : void 0, { tags: r, extra: i, user: o, contexts: u, level: p, fingerprint: a = [], propagationContext: c } = s || {};
    return this._tags = { ...this._tags, ...r }, this._extra = { ...this._extra, ...i }, this._contexts = { ...this._contexts, ...u }, o && Object.keys(o).length && (this._user = o), p && (this._level = p), a.length && (this._fingerprint = a), c && (this._propagationContext = c), this;
  }
  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, U(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: P(), sampleRand: Math.random() }), this._notifyScopeListeners(), this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(t, n) {
    const s = typeof n == "number" ? n : _t;
    if (s <= 0)
      return this;
    const r = {
      timestamp: q(),
      ...t,
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: t.message ? ut(t.message, 2048) : t.message
    };
    return this._breadcrumbs.push(r), this._breadcrumbs.length > s && (this._breadcrumbs = this._breadcrumbs.slice(-s), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  /**
   * Get the last breadcrumb of the scope.
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * Clear all breadcrumbs from the scope.
   */
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  /**
   * Add an attachment to the scope.
   */
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  /**
   * Clear all attachments from the scope.
   */
  clearAttachments() {
    return this._attachments = [], this;
  }
  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: A(this)
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = X(this._sdkProcessingMetadata, t, 2), this;
  }
  /**
   * Add propagation context to the scope, used for distributed tracing
   */
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  /**
   * Get propagation context from the scope, used for distributed tracing
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
  captureException(t, n) {
    const s = n?.event_id || S();
    if (!this._client)
      return f && h.warn("No client configured on scope - will not capture exception!"), s;
    const r = new Error("Sentry syntheticException");
    return this._client.captureException(
      t,
      {
        originalException: t,
        syntheticException: r,
        ...n,
        event_id: s
      },
      this
    ), s;
  }
  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
  captureMessage(t, n, s) {
    const r = s?.event_id || S();
    if (!this._client)
      return f && h.warn("No client configured on scope - will not capture message!"), r;
    const i = new Error(t);
    return this._client.captureMessage(
      t,
      n,
      {
        originalException: t,
        syntheticException: i,
        ...s,
        event_id: r
      },
      this
    ), r;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(t, n) {
    const s = n?.event_id || S();
    return this._client ? (this._client.captureEvent(t, { ...n, event_id: s }, this), s) : (f && h.warn("No client configured on scope - will not capture event!"), s);
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
function gt() {
  return k("defaultCurrentScope", () => new d());
}
function mt() {
  return k("defaultIsolationScope", () => new d());
}
class St {
  constructor(t, n) {
    let s;
    t ? s = t : s = new d();
    let r;
    n ? r = n : r = new d(), this._stack = [{ scope: s }], this._isolationScope = r;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(t) {
    const n = this._pushScope();
    let s;
    try {
      s = t(n);
    } catch (r) {
      throw this._popScope(), r;
    }
    return at(s) ? s.then(
      (r) => (this._popScope(), r),
      (r) => {
        throw this._popScope(), r;
      }
    ) : (this._popScope(), s);
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: t
    }), t;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function g() {
  const e = b(), t = w(e);
  return t.stack = t.stack || new St(gt(), mt());
}
function yt(e) {
  return g().withScope(e);
}
function Et(e, t) {
  const n = g();
  return n.withScope(() => (n.getStackTop().scope = e, t(e)));
}
function B(e) {
  return g().withScope(() => e(g().getIsolationScope()));
}
function vt() {
  return {
    withIsolationScope: B,
    withScope: yt,
    withSetScope: Et,
    withSetIsolationScope: (e, t) => B(t),
    getCurrentScope: () => g().getScope(),
    getIsolationScope: () => g().getIsolationScope()
  };
}
function $(e) {
  const t = w(e);
  return t.acs ? t.acs : vt();
}
function N() {
  const e = b();
  return $(e).getCurrentScope();
}
function bt() {
  const e = b();
  return $(e).getIsolationScope();
}
function J(...e) {
  const t = b(), n = $(t);
  if (e.length === 2) {
    const [s, r] = e;
    return s ? n.withSetScope(s, r) : n.withScope(r);
  }
  return n.withScope(e[0]);
}
function z() {
  return N().getClient();
}
const It = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ct(e) {
  return e === "http" || e === "https";
}
function Dt(e, t = !1) {
  const { host: n, path: s, pass: r, port: i, projectId: o, protocol: u, publicKey: p } = e;
  return `${u}://${p}${t && r ? `:${r}` : ""}@${n}${i ? `:${i}` : ""}/${s && `${s}/`}${o}`;
}
function wt(e) {
  const t = It.exec(e);
  if (!t) {
    j(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, s, r = "", i = "", o = "", u = ""] = t.slice(1);
  let p = "", a = u;
  const c = a.split("/");
  if (c.length > 1 && (p = c.slice(0, -1).join("/"), a = c.pop()), a) {
    const y = a.match(/^\d+/);
    y && (a = y[0]);
  }
  return Q({ host: i, pass: r, path: p, projectId: a, port: o, protocol: n, publicKey: s });
}
function Q(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function kt(e) {
  if (!f)
    return !0;
  const { port: t, projectId: n, protocol: s } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((o) => e[o] ? !1 : (h.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Ct(s) ? t && isNaN(parseInt(t, 10)) ? (h.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (h.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), !1) : (h.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Lt(e) {
  const t = typeof e == "string" ? wt(e) : Q(e);
  if (!(!t || !kt(t)))
    return t;
}
function Rt(e) {
  if (e)
    return $t(e) ? { captureContext: e } : xt(e) ? {
      captureContext: e
    } : e;
}
function $t(e) {
  return e instanceof d || typeof e == "function";
}
const Nt = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext"
];
function xt(e) {
  return Object.keys(e).some((t) => Nt.includes(t));
}
function Tt(e, t) {
  return N().captureException(e, Rt(t));
}
function Pt() {
  return bt().lastEventId();
}
function Ut(e) {
  const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function At(e, t) {
  const n = Lt(e);
  if (!n)
    return "";
  const s = `${Ut(n)}embed/error-page/`;
  let r = `dsn=${Dt(n)}`;
  for (const i in t)
    if (i !== "dsn" && i !== "onClose")
      if (i === "user") {
        const o = t.user;
        if (!o)
          continue;
        o.name && (r += `&name=${encodeURIComponent(o.name)}`), o.email && (r += `&email=${encodeURIComponent(o.email)}`);
      } else
        r += `&${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`;
  return `${s}?${r}`;
}
const E = l, M = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function O(e = {}) {
  const t = E.document, n = t?.head || t?.body;
  if (!n) {
    M && C.error("[showReportDialog] Global document not defined");
    return;
  }
  const s = N(), i = z()?.getDsn();
  if (!i) {
    M && C.error("[showReportDialog] DSN not configured");
    return;
  }
  const o = {
    ...e,
    user: {
      ...s.getUser(),
      ...e.user
    },
    eventId: e.eventId || Pt()
  }, u = E.document.createElement("script");
  u.async = !0, u.crossOrigin = "anonymous", u.src = At(i, o);
  const { onLoad: p, onClose: a } = o;
  if (p && (u.onload = p), a) {
    const c = (y) => {
      if (y.data === "__sentry_reportdialog_closed__")
        try {
          a();
        } finally {
          E.removeEventListener("message", c);
        }
    };
    E.addEventListener("message", c);
  }
  n.appendChild(u);
}
function Bt(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function Mt(e, t) {
  const n = /* @__PURE__ */ new WeakSet();
  function s(r, i) {
    if (!n.has(r)) {
      if (r.cause)
        return n.add(r), s(r.cause, i);
      r.cause = i;
    }
  }
  s(e, t);
}
function Ot(e, { componentStack: t }, n) {
  if (Bt(v.version) && rt(e) && t) {
    const s = new Error(e.message);
    s.name = `React ErrorBoundary ${e.name}`, s.stack = t, Mt(e, s);
  }
  return J((s) => (s.setContext("react", { componentStack: t }), Tt(e, n)));
}
const jt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, I = {
  componentStack: null,
  error: null,
  eventId: null
};
class Gt extends v.Component {
  constructor(t) {
    super(t), this.state = I, this._openFallbackReportDialog = !0;
    const n = z();
    n && t.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = n.on("afterSendEvent", (s) => {
      !s.type && this._lastEventId && s.event_id === this._lastEventId && O({ ...t.dialogOptions, eventId: this._lastEventId });
    }));
  }
  componentDidCatch(t, n) {
    const { componentStack: s } = n, { beforeCapture: r, onError: i, showDialog: o, dialogOptions: u } = this.props;
    J((p) => {
      r && r(p, t, s);
      const a = this.props.handled != null ? this.props.handled : !!this.props.fallback, c = Ot(t, n, { mechanism: { handled: a } });
      i && i(t, s, c), o && (this._lastEventId = c, this._openFallbackReportDialog && O({ ...u, eventId: c })), this.setState({ error: t, componentStack: s, eventId: c });
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: n, eventId: s } = this.state, { onUnmount: r } = this.props;
    r && (this.state === I ? r(null, null, null) : r(t, n, s)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0);
  }
  resetErrorBoundary() {
    const { onReset: t } = this.props, { error: n, componentStack: s, eventId: r } = this.state;
    t && t(n, s, r), this.setState(I);
  }
  render() {
    const { fallback: t, children: n } = this.props, s = this.state;
    if (s.componentStack === null)
      return typeof n == "function" ? n() : n;
    const r = typeof t == "function" ? v.createElement(t, {
      error: s.error,
      componentStack: s.componentStack,
      resetError: () => this.resetErrorBoundary(),
      eventId: s.eventId
    }) : t;
    return v.isValidElement(r) ? r : (t && jt && C.warn("fallback did not produce a valid ReactElement"), null);
  }
}
export {
  Gt as E,
  Tt as c,
  J as w
};
