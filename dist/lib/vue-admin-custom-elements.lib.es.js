var ai = Object.defineProperty;
var ii = (e, t, o) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var ke = (e, t, o) => ii(e, typeof t != "symbol" ? t + "" : t, o);
import ni, { ref as ot, computed as dt, watch as ge, markRaw as ci, defineComponent as st, h as si, useAttrs as Ve, openBlock as M, createBlock as zt, resolveDynamicComponent as pe, mergeProps as lr, unref as Ht, withCtx as Yr, createCommentVNode as ut, createElementBlock as $, toDisplayString as ct, createVNode as Dt, createElementVNode as P, normalizeClass as Ir, toRef as li, watchEffect as di, Fragment as Qt, renderSlot as ue, normalizeStyle as vo, inject as ua, onMounted as Ge, provide as Ao, withModifiers as ae, renderList as Mr, createTextVNode as sr, onUnmounted as pi, toHandlers as ao, defineAsyncComponent as Uo, withDirectives as bi, vModelSelect as wi } from "vue";
function fa(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gi } = Object.prototype, { getPrototypeOf: Po } = Object, Ke = /* @__PURE__ */ ((e) => (t) => {
  const o = gi.call(t);
  return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ar = (e) => (e = e.toLowerCase(), (t) => Ke(t) === e), We = (e) => (t) => typeof t === e, { isArray: $r } = Array, be = We("undefined");
function ui(e) {
  return e !== null && !be(e) && e.constructor !== null && !be(e.constructor) && Zt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ha = ar("ArrayBuffer");
function fi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ha(e.buffer), t;
}
const hi = We("string"), Zt = We("function"), ma = We("number"), Ze = (e) => e !== null && typeof e == "object", mi = (e) => e === !0 || e === !1, Te = (e) => {
  if (Ke(e) !== "object")
    return !1;
  const t = Po(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, yi = ar("Date"), vi = ar("File"), xi = ar("Blob"), ki = ar("FileList"), Ci = (e) => Ze(e) && Zt(e.pipe), zi = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Zt(e.append) && ((t = Ke(e)) === "formdata" || // detect form-data instance
  t === "object" && Zt(e.toString) && e.toString() === "[object FormData]"));
}, Si = ar("URLSearchParams"), [Ei, Oi, ji, Ti] = ["ReadableStream", "Request", "Response", "Headers"].map(ar), Ii = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fe(e, t, { allOwnKeys: o = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, a;
  if (typeof e != "object" && (e = [e]), $r(e))
    for (i = 0, a = e.length; i < a; i++)
      t.call(null, e[i], i, e);
  else {
    const c = o ? Object.getOwnPropertyNames(e) : Object.keys(e), r = c.length;
    let n;
    for (i = 0; i < r; i++)
      n = c[i], t.call(null, e[n], n, e);
  }
}
function ya(e, t) {
  t = t.toLowerCase();
  const o = Object.keys(e);
  let i = o.length, a;
  for (; i-- > 0; )
    if (a = o[i], t === a.toLowerCase())
      return a;
  return null;
}
const Or = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, va = (e) => !be(e) && e !== Or;
function xo() {
  const { caseless: e } = va(this) && this || {}, t = {}, o = (i, a) => {
    const c = e && ya(t, a) || a;
    Te(t[c]) && Te(i) ? t[c] = xo(t[c], i) : Te(i) ? t[c] = xo({}, i) : $r(i) ? t[c] = i.slice() : t[c] = i;
  };
  for (let i = 0, a = arguments.length; i < a; i++)
    arguments[i] && fe(arguments[i], o);
  return t;
}
const Mi = (e, t, o, { allOwnKeys: i } = {}) => (fe(t, (a, c) => {
  o && Zt(a) ? e[c] = fa(a, o) : e[c] = a;
}, { allOwnKeys: i }), e), Ai = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Pi = (e, t, o, i) => {
  e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), o && Object.assign(e.prototype, o);
}, Di = (e, t, o, i) => {
  let a, c, r;
  const n = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), c = a.length; c-- > 0; )
      r = a[c], (!i || i(r, e, t)) && !n[r] && (t[r] = e[r], n[r] = !0);
    e = o !== !1 && Po(e);
  } while (e && (!o || o(e, t)) && e !== Object.prototype);
  return t;
}, Ri = (e, t, o) => {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= t.length;
  const i = e.indexOf(t, o);
  return i !== -1 && i === o;
}, Li = (e) => {
  if (!e) return null;
  if ($r(e)) return e;
  let t = e.length;
  if (!ma(t)) return null;
  const o = new Array(t);
  for (; t-- > 0; )
    o[t] = e[t];
  return o;
}, Ni = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Po(Uint8Array)), Fi = (e, t) => {
  const i = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = i.next()) && !a.done; ) {
    const c = a.value;
    t.call(e, c[0], c[1]);
  }
}, Bi = (e, t) => {
  let o;
  const i = [];
  for (; (o = e.exec(t)) !== null; )
    i.push(o);
  return i;
}, Yi = ar("HTMLFormElement"), Ui = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, i, a) {
    return i.toUpperCase() + a;
  }
), $o = (({ hasOwnProperty: e }) => (t, o) => e.call(t, o))(Object.prototype), $i = ar("RegExp"), xa = (e, t) => {
  const o = Object.getOwnPropertyDescriptors(e), i = {};
  fe(o, (a, c) => {
    let r;
    (r = t(a, c, e)) !== !1 && (i[c] = r || a);
  }), Object.defineProperties(e, i);
}, Hi = (e) => {
  xa(e, (t, o) => {
    if (Zt(e) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const i = e[o];
    if (Zt(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, Xi = (e, t) => {
  const o = {}, i = (a) => {
    a.forEach((c) => {
      o[c] = !0;
    });
  };
  return $r(e) ? i(e) : i(String(e).split(t)), o;
}, Vi = () => {
}, Gi = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, io = "abcdefghijklmnopqrstuvwxyz", Ho = "0123456789", ka = {
  DIGIT: Ho,
  ALPHA: io,
  ALPHA_DIGIT: io + io.toUpperCase() + Ho
}, Ki = (e = 16, t = ka.ALPHA_DIGIT) => {
  let o = "";
  const { length: i } = t;
  for (; e--; )
    o += t[Math.random() * i | 0];
  return o;
};
function Wi(e) {
  return !!(e && Zt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Zi = (e) => {
  const t = new Array(10), o = (i, a) => {
    if (Ze(i)) {
      if (t.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        t[a] = i;
        const c = $r(i) ? [] : {};
        return fe(i, (r, n) => {
          const s = o(r, a + 1);
          !be(s) && (c[n] = s);
        }), t[a] = void 0, c;
      }
    }
    return i;
  };
  return o(e, 0);
}, Ji = ar("AsyncFunction"), Qi = (e) => e && (Ze(e) || Zt(e)) && Zt(e.then) && Zt(e.catch), Ca = ((e, t) => e ? setImmediate : t ? ((o, i) => (Or.addEventListener("message", ({ source: a, data: c }) => {
  a === Or && c === o && i.length && i.shift()();
}, !1), (a) => {
  i.push(a), Or.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  Zt(Or.postMessage)
), qi = typeof queueMicrotask < "u" ? queueMicrotask.bind(Or) : typeof process < "u" && process.nextTick || Ca, k = {
  isArray: $r,
  isArrayBuffer: ha,
  isBuffer: ui,
  isFormData: zi,
  isArrayBufferView: fi,
  isString: hi,
  isNumber: ma,
  isBoolean: mi,
  isObject: Ze,
  isPlainObject: Te,
  isReadableStream: Ei,
  isRequest: Oi,
  isResponse: ji,
  isHeaders: Ti,
  isUndefined: be,
  isDate: yi,
  isFile: vi,
  isBlob: xi,
  isRegExp: $i,
  isFunction: Zt,
  isStream: Ci,
  isURLSearchParams: Si,
  isTypedArray: Ni,
  isFileList: ki,
  forEach: fe,
  merge: xo,
  extend: Mi,
  trim: Ii,
  stripBOM: Ai,
  inherits: Pi,
  toFlatObject: Di,
  kindOf: Ke,
  kindOfTest: ar,
  endsWith: Ri,
  toArray: Li,
  forEachEntry: Fi,
  matchAll: Bi,
  isHTMLForm: Yi,
  hasOwnProperty: $o,
  hasOwnProp: $o,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xa,
  freezeMethods: Hi,
  toObjectSet: Xi,
  toCamelCase: Ui,
  noop: Vi,
  toFiniteNumber: Gi,
  findKey: ya,
  global: Or,
  isContextDefined: va,
  ALPHABET: ka,
  generateString: Ki,
  isSpecCompliantForm: Wi,
  toJSONObject: Zi,
  isAsyncFn: Ji,
  isThenable: Qi,
  setImmediate: Ca,
  asap: qi
};
function q(e, t, o, i, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), o && (this.config = o), i && (this.request = i), a && (this.response = a, this.status = a.status ? a.status : null);
}
k.inherits(q, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const za = q.prototype, Sa = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Sa[e] = { value: e };
});
Object.defineProperties(q, Sa);
Object.defineProperty(za, "isAxiosError", { value: !0 });
q.from = (e, t, o, i, a, c) => {
  const r = Object.create(za);
  return k.toFlatObject(e, r, function(s) {
    return s !== Error.prototype;
  }, (n) => n !== "isAxiosError"), q.call(r, e.message, t, o, i, a), r.cause = e, r.name = e.name, c && Object.assign(r, c), r;
};
const _i = null;
function ko(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function Ea(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xo(e, t, o) {
  return e ? e.concat(t).map(function(a, c) {
    return a = Ea(a), !o && c ? "[" + a + "]" : a;
  }).join(o ? "." : "") : t;
}
function tn(e) {
  return k.isArray(e) && !e.some(ko);
}
const rn = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Je(e, t, o) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), o = k.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, u) {
    return !k.isUndefined(u[f]);
  });
  const i = o.metaTokens, a = o.visitor || d, c = o.dots, r = o.indexes, s = (o.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(a))
    throw new TypeError("visitor must be a function");
  function l(w) {
    if (w === null) return "";
    if (k.isDate(w))
      return w.toISOString();
    if (!s && k.isBlob(w))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(w) || k.isTypedArray(w) ? s && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function d(w, f, u) {
    let h = w;
    if (w && !u && typeof w == "object") {
      if (k.endsWith(f, "{}"))
        f = i ? f : f.slice(0, -2), w = JSON.stringify(w);
      else if (k.isArray(w) && tn(w) || (k.isFileList(w) || k.endsWith(f, "[]")) && (h = k.toArray(w)))
        return f = Ea(f), h.forEach(function(z, x) {
          !(k.isUndefined(z) || z === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            r === !0 ? Xo([f], x, c) : r === null ? f : f + "[]",
            l(z)
          );
        }), !1;
    }
    return ko(w) ? !0 : (t.append(Xo(u, f, c), l(w)), !1);
  }
  const p = [], b = Object.assign(rn, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: ko
  });
  function g(w, f) {
    if (!k.isUndefined(w)) {
      if (p.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      p.push(w), k.forEach(w, function(h, m) {
        (!(k.isUndefined(h) || h === null) && a.call(
          t,
          h,
          k.isString(m) ? m.trim() : m,
          f,
          b
        )) === !0 && g(h, f ? f.concat(m) : [m]);
      }), p.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Vo(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return t[i];
  });
}
function Do(e, t) {
  this._pairs = [], e && Je(e, this, t);
}
const Oa = Do.prototype;
Oa.append = function(t, o) {
  this._pairs.push([t, o]);
};
Oa.toString = function(t) {
  const o = t ? function(i) {
    return t.call(this, i, Vo);
  } : Vo;
  return this._pairs.map(function(a) {
    return o(a[0]) + "=" + o(a[1]);
  }, "").join("&");
};
function en(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ja(e, t, o) {
  if (!t)
    return e;
  const i = o && o.encode || en;
  k.isFunction(o) && (o = {
    serialize: o
  });
  const a = o && o.serialize;
  let c;
  if (a ? c = a(t, o) : c = k.isURLSearchParams(t) ? t.toString() : new Do(t, o).toString(i), c) {
    const r = e.indexOf("#");
    r !== -1 && (e = e.slice(0, r)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
}
class Go {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, o, i) {
    return this.handlers.push({
      fulfilled: t,
      rejected: o,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    k.forEach(this.handlers, function(i) {
      i !== null && t(i);
    });
  }
}
const Ta = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, on = typeof URLSearchParams < "u" ? URLSearchParams : Do, an = typeof FormData < "u" ? FormData : null, nn = typeof Blob < "u" ? Blob : null, cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: on,
    FormData: an,
    Blob: nn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ro = typeof window < "u" && typeof document < "u", Co = typeof navigator == "object" && navigator || void 0, sn = Ro && (!Co || ["ReactNative", "NativeScript", "NS"].indexOf(Co.product) < 0), ln = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dn = Ro && window.location.href || "http://localhost", pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ro,
  hasStandardBrowserEnv: sn,
  hasStandardBrowserWebWorkerEnv: ln,
  navigator: Co,
  origin: dn
}, Symbol.toStringTag, { value: "Module" })), Lt = {
  ...pn,
  ...cn
};
function bn(e, t) {
  return Je(e, new Lt.classes.URLSearchParams(), Object.assign({
    visitor: function(o, i, a, c) {
      return Lt.isNode && k.isBuffer(o) ? (this.append(i, o.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function wn(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gn(e) {
  const t = {}, o = Object.keys(e);
  let i;
  const a = o.length;
  let c;
  for (i = 0; i < a; i++)
    c = o[i], t[c] = e[c];
  return t;
}
function Ia(e) {
  function t(o, i, a, c) {
    let r = o[c++];
    if (r === "__proto__") return !0;
    const n = Number.isFinite(+r), s = c >= o.length;
    return r = !r && k.isArray(a) ? a.length : r, s ? (k.hasOwnProp(a, r) ? a[r] = [a[r], i] : a[r] = i, !n) : ((!a[r] || !k.isObject(a[r])) && (a[r] = []), t(o, i, a[r], c) && k.isArray(a[r]) && (a[r] = gn(a[r])), !n);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const o = {};
    return k.forEachEntry(e, (i, a) => {
      t(wn(i), a, o, 0);
    }), o;
  }
  return null;
}
function un(e, t, o) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (0, JSON.stringify)(e);
}
const he = {
  transitional: Ta,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, o) {
    const i = o.getContentType() || "", a = i.indexOf("application/json") > -1, c = k.isObject(t);
    if (c && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return a ? JSON.stringify(Ia(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let n;
    if (c) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return bn(t, this.formSerializer).toString();
      if ((n = k.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return Je(
          n ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return c || a ? (o.setContentType("application/json", !1), un(t)) : t;
  }],
  transformResponse: [function(t) {
    const o = this.transitional || he.transitional, i = o && o.forcedJSONParsing, a = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (i && !this.responseType || a)) {
      const r = !(o && o.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (n) {
        if (r)
          throw n.name === "SyntaxError" ? q.from(n, q.ERR_BAD_RESPONSE, this, null, this.response) : n;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Lt.classes.FormData,
    Blob: Lt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  he.headers[e] = {};
});
const fn = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), hn = (e) => {
  const t = {};
  let o, i, a;
  return e && e.split(`
`).forEach(function(r) {
    a = r.indexOf(":"), o = r.substring(0, a).trim().toLowerCase(), i = r.substring(a + 1).trim(), !(!o || t[o] && fn[o]) && (o === "set-cookie" ? t[o] ? t[o].push(i) : t[o] = [i] : t[o] = t[o] ? t[o] + ", " + i : i);
  }), t;
}, Ko = Symbol("internals");
function Jr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ie(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Ie) : String(e);
}
function mn(e) {
  const t = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = o.exec(e); )
    t[i[1]] = i[2];
  return t;
}
const yn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function no(e, t, o, i, a) {
  if (k.isFunction(i))
    return i.call(this, t, o);
  if (a && (t = o), !!k.isString(t)) {
    if (k.isString(i))
      return t.indexOf(i) !== -1;
    if (k.isRegExp(i))
      return i.test(t);
  }
}
function vn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, o, i) => o.toUpperCase() + i);
}
function xn(e, t) {
  const o = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + o, {
      value: function(a, c, r) {
        return this[i].call(this, t, a, c, r);
      },
      configurable: !0
    });
  });
}
class Xt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, o, i) {
    const a = this;
    function c(n, s, l) {
      const d = Jr(s);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const p = k.findKey(a, d);
      (!p || a[p] === void 0 || l === !0 || l === void 0 && a[p] !== !1) && (a[p || s] = Ie(n));
    }
    const r = (n, s) => k.forEach(n, (l, d) => c(l, d, s));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      r(t, o);
    else if (k.isString(t) && (t = t.trim()) && !yn(t))
      r(hn(t), o);
    else if (k.isHeaders(t))
      for (const [n, s] of t.entries())
        c(s, n, i);
    else
      t != null && c(o, t, i);
    return this;
  }
  get(t, o) {
    if (t = Jr(t), t) {
      const i = k.findKey(this, t);
      if (i) {
        const a = this[i];
        if (!o)
          return a;
        if (o === !0)
          return mn(a);
        if (k.isFunction(o))
          return o.call(this, a, i);
        if (k.isRegExp(o))
          return o.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, o) {
    if (t = Jr(t), t) {
      const i = k.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!o || no(this, this[i], i, o)));
    }
    return !1;
  }
  delete(t, o) {
    const i = this;
    let a = !1;
    function c(r) {
      if (r = Jr(r), r) {
        const n = k.findKey(i, r);
        n && (!o || no(i, i[n], n, o)) && (delete i[n], a = !0);
      }
    }
    return k.isArray(t) ? t.forEach(c) : c(t), a;
  }
  clear(t) {
    const o = Object.keys(this);
    let i = o.length, a = !1;
    for (; i--; ) {
      const c = o[i];
      (!t || no(this, this[c], c, t, !0)) && (delete this[c], a = !0);
    }
    return a;
  }
  normalize(t) {
    const o = this, i = {};
    return k.forEach(this, (a, c) => {
      const r = k.findKey(i, c);
      if (r) {
        o[r] = Ie(a), delete o[c];
        return;
      }
      const n = t ? vn(c) : String(c).trim();
      n !== c && delete o[c], o[n] = Ie(a), i[n] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const o = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (i, a) => {
      i != null && i !== !1 && (o[a] = t && k.isArray(i) ? i.join(", ") : i);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, o]) => t + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...o) {
    const i = new this(t);
    return o.forEach((a) => i.set(a)), i;
  }
  static accessor(t) {
    const i = (this[Ko] = this[Ko] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function c(r) {
      const n = Jr(r);
      i[n] || (xn(a, r), i[n] = !0);
    }
    return k.isArray(t) ? t.forEach(c) : c(t), this;
  }
}
Xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(Xt.prototype, ({ value: e }, t) => {
  let o = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[o] = i;
    }
  };
});
k.freezeMethods(Xt);
function co(e, t) {
  const o = this || he, i = t || o, a = Xt.from(i.headers);
  let c = i.data;
  return k.forEach(e, function(n) {
    c = n.call(o, c, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), c;
}
function Ma(e) {
  return !!(e && e.__CANCEL__);
}
function Hr(e, t, o) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, o), this.name = "CanceledError";
}
k.inherits(Hr, q, {
  __CANCEL__: !0
});
function Aa(e, t, o) {
  const i = o.config.validateStatus;
  !o.status || !i || i(o.status) ? e(o) : t(new q(
    "Request failed with status code " + o.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function kn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cn(e, t) {
  e = e || 10;
  const o = new Array(e), i = new Array(e);
  let a = 0, c = 0, r;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const l = Date.now(), d = i[c];
    r || (r = l), o[a] = s, i[a] = l;
    let p = c, b = 0;
    for (; p !== a; )
      b += o[p++], p = p % e;
    if (a = (a + 1) % e, a === c && (c = (c + 1) % e), l - r < t)
      return;
    const g = d && l - d;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function zn(e, t) {
  let o = 0, i = 1e3 / t, a, c;
  const r = (l, d = Date.now()) => {
    o = d, a = null, c && (clearTimeout(c), c = null), e.apply(null, l);
  };
  return [(...l) => {
    const d = Date.now(), p = d - o;
    p >= i ? r(l, d) : (a = l, c || (c = setTimeout(() => {
      c = null, r(a);
    }, i - p)));
  }, () => a && r(a)];
}
const Fe = (e, t, o = 3) => {
  let i = 0;
  const a = Cn(50, 250);
  return zn((c) => {
    const r = c.loaded, n = c.lengthComputable ? c.total : void 0, s = r - i, l = a(s), d = r <= n;
    i = r;
    const p = {
      loaded: r,
      total: n,
      progress: n ? r / n : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && n && d ? (n - r) / l : void 0,
      event: c,
      lengthComputable: n != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, o);
}, Wo = (e, t) => {
  const o = e != null;
  return [(i) => t[0]({
    lengthComputable: o,
    total: e,
    loaded: i
  }), t[1]];
}, Zo = (e) => (...t) => k.asap(() => e(...t)), Sn = Lt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (o) => (o = new URL(o, Lt.origin), e.protocol === o.protocol && e.host === o.host && (t || e.port === o.port)))(
  new URL(Lt.origin),
  Lt.navigator && /(msie|trident)/i.test(Lt.navigator.userAgent)
) : () => !0, En = Lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, o, i, a, c) {
      const r = [e + "=" + encodeURIComponent(t)];
      k.isNumber(o) && r.push("expires=" + new Date(o).toGMTString()), k.isString(i) && r.push("path=" + i), k.isString(a) && r.push("domain=" + a), c === !0 && r.push("secure"), document.cookie = r.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function On(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pa(e, t) {
  return e && !On(t) ? jn(e, t) : t;
}
const Jo = (e) => e instanceof Xt ? { ...e } : e;
function Ar(e, t) {
  t = t || {};
  const o = {};
  function i(l, d, p, b) {
    return k.isPlainObject(l) && k.isPlainObject(d) ? k.merge.call({ caseless: b }, l, d) : k.isPlainObject(d) ? k.merge({}, d) : k.isArray(d) ? d.slice() : d;
  }
  function a(l, d, p, b) {
    if (k.isUndefined(d)) {
      if (!k.isUndefined(l))
        return i(void 0, l, p, b);
    } else return i(l, d, p, b);
  }
  function c(l, d) {
    if (!k.isUndefined(d))
      return i(void 0, d);
  }
  function r(l, d) {
    if (k.isUndefined(d)) {
      if (!k.isUndefined(l))
        return i(void 0, l);
    } else return i(void 0, d);
  }
  function n(l, d, p) {
    if (p in t)
      return i(l, d);
    if (p in e)
      return i(void 0, l);
  }
  const s = {
    url: c,
    method: c,
    data: c,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    withXSRFToken: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: n,
    headers: (l, d, p) => a(Jo(l), Jo(d), p, !0)
  };
  return k.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const p = s[d] || a, b = p(e[d], t[d], d);
    k.isUndefined(b) && p !== n || (o[d] = b);
  }), o;
}
const Da = (e) => {
  const t = Ar({}, e);
  let { data: o, withXSRFToken: i, xsrfHeaderName: a, xsrfCookieName: c, headers: r, auth: n } = t;
  t.headers = r = Xt.from(r), t.url = ja(Pa(t.baseURL, t.url), e.params, e.paramsSerializer), n && r.set(
    "Authorization",
    "Basic " + btoa((n.username || "") + ":" + (n.password ? unescape(encodeURIComponent(n.password)) : ""))
  );
  let s;
  if (k.isFormData(o)) {
    if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
      r.setContentType(void 0);
    else if ((s = r.getContentType()) !== !1) {
      const [l, ...d] = s ? s.split(";").map((p) => p.trim()).filter(Boolean) : [];
      r.setContentType([l || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Lt.hasStandardBrowserEnv && (i && k.isFunction(i) && (i = i(t)), i || i !== !1 && Sn(t.url))) {
    const l = a && c && En.read(c);
    l && r.set(a, l);
  }
  return t;
}, Tn = typeof XMLHttpRequest < "u", In = Tn && function(e) {
  return new Promise(function(o, i) {
    const a = Da(e);
    let c = a.data;
    const r = Xt.from(a.headers).normalize();
    let { responseType: n, onUploadProgress: s, onDownloadProgress: l } = a, d, p, b, g, w;
    function f() {
      g && g(), w && w(), a.cancelToken && a.cancelToken.unsubscribe(d), a.signal && a.signal.removeEventListener("abort", d);
    }
    let u = new XMLHttpRequest();
    u.open(a.method.toUpperCase(), a.url, !0), u.timeout = a.timeout;
    function h() {
      if (!u)
        return;
      const z = Xt.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), E = {
        data: !n || n === "text" || n === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: z,
        config: e,
        request: u
      };
      Aa(function(L) {
        o(L), f();
      }, function(L) {
        i(L), f();
      }, E), u = null;
    }
    "onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (i(new q("Request aborted", q.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      i(new q("Network Error", q.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let x = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || Ta;
      a.timeoutErrorMessage && (x = a.timeoutErrorMessage), i(new q(
        x,
        E.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        u
      )), u = null;
    }, c === void 0 && r.setContentType(null), "setRequestHeader" in u && k.forEach(r.toJSON(), function(x, E) {
      u.setRequestHeader(E, x);
    }), k.isUndefined(a.withCredentials) || (u.withCredentials = !!a.withCredentials), n && n !== "json" && (u.responseType = a.responseType), l && ([b, w] = Fe(l, !0), u.addEventListener("progress", b)), s && u.upload && ([p, g] = Fe(s), u.upload.addEventListener("progress", p), u.upload.addEventListener("loadend", g)), (a.cancelToken || a.signal) && (d = (z) => {
      u && (i(!z || z.type ? new Hr(null, e, u) : z), u.abort(), u = null);
    }, a.cancelToken && a.cancelToken.subscribe(d), a.signal && (a.signal.aborted ? d() : a.signal.addEventListener("abort", d)));
    const m = kn(a.url);
    if (m && Lt.protocols.indexOf(m) === -1) {
      i(new q("Unsupported protocol " + m + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(c || null);
  });
}, Mn = (e, t) => {
  const { length: o } = e = e ? e.filter(Boolean) : [];
  if (t || o) {
    let i = new AbortController(), a;
    const c = function(l) {
      if (!a) {
        a = !0, n();
        const d = l instanceof Error ? l : this.reason;
        i.abort(d instanceof q ? d : new Hr(d instanceof Error ? d.message : d));
      }
    };
    let r = t && setTimeout(() => {
      r = null, c(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
    }, t);
    const n = () => {
      e && (r && clearTimeout(r), r = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(c) : l.removeEventListener("abort", c);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", c));
    const { signal: s } = i;
    return s.unsubscribe = () => k.asap(n), s;
  }
}, An = function* (e, t) {
  let o = e.byteLength;
  if (o < t) {
    yield e;
    return;
  }
  let i = 0, a;
  for (; i < o; )
    a = i + t, yield e.slice(i, a), i = a;
}, Pn = async function* (e, t) {
  for await (const o of Dn(e))
    yield* An(o, t);
}, Dn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: o, value: i } = await t.read();
      if (o)
        break;
      yield i;
    }
  } finally {
    await t.cancel();
  }
}, Qo = (e, t, o, i) => {
  const a = Pn(e, t);
  let c = 0, r, n = (s) => {
    r || (r = !0, i && i(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: l, value: d } = await a.next();
        if (l) {
          n(), s.close();
          return;
        }
        let p = d.byteLength;
        if (o) {
          let b = c += p;
          o(b);
        }
        s.enqueue(new Uint8Array(d));
      } catch (l) {
        throw n(l), l;
      }
    },
    cancel(s) {
      return n(s), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, Qe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ra = Qe && typeof ReadableStream == "function", Rn = Qe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), La = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ln = Ra && La(() => {
  let e = !1;
  const t = new Request(Lt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), qo = 64 * 1024, zo = Ra && La(() => k.isReadableStream(new Response("").body)), Be = {
  stream: zo && ((e) => e.body)
};
Qe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Be[t] && (Be[t] = k.isFunction(e[t]) ? (o) => o[t]() : (o, i) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, i);
    });
  });
})(new Response());
const Nn = async (e) => {
  if (e == null)
    return 0;
  if (k.isBlob(e))
    return e.size;
  if (k.isSpecCompliantForm(e))
    return (await new Request(Lt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(e) || k.isArrayBuffer(e))
    return e.byteLength;
  if (k.isURLSearchParams(e) && (e = e + ""), k.isString(e))
    return (await Rn(e)).byteLength;
}, Fn = async (e, t) => {
  const o = k.toFiniteNumber(e.getContentLength());
  return o ?? Nn(t);
}, Bn = Qe && (async (e) => {
  let {
    url: t,
    method: o,
    data: i,
    signal: a,
    cancelToken: c,
    timeout: r,
    onDownloadProgress: n,
    onUploadProgress: s,
    responseType: l,
    headers: d,
    withCredentials: p = "same-origin",
    fetchOptions: b
  } = Da(e);
  l = l ? (l + "").toLowerCase() : "text";
  let g = Mn([a, c && c.toAbortSignal()], r), w;
  const f = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let u;
  try {
    if (s && Ln && o !== "get" && o !== "head" && (u = await Fn(d, i)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: i,
        duplex: "half"
      }), S;
      if (k.isFormData(i) && (S = E.headers.get("content-type")) && d.setContentType(S), E.body) {
        const [L, N] = Wo(
          u,
          Fe(Zo(s))
        );
        i = Qo(E.body, qo, L, N);
      }
    }
    k.isString(p) || (p = p ? "include" : "omit");
    const h = "credentials" in Request.prototype;
    w = new Request(t, {
      ...b,
      signal: g,
      method: o.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: i,
      duplex: "half",
      credentials: h ? p : void 0
    });
    let m = await fetch(w);
    const z = zo && (l === "stream" || l === "response");
    if (zo && (n || z && f)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((O) => {
        E[O] = m[O];
      });
      const S = k.toFiniteNumber(m.headers.get("content-length")), [L, N] = n && Wo(
        S,
        Fe(Zo(n), !0)
      ) || [];
      m = new Response(
        Qo(m.body, qo, L, () => {
          N && N(), f && f();
        }),
        E
      );
    }
    l = l || "text";
    let x = await Be[k.findKey(Be, l) || "text"](m, e);
    return !z && f && f(), await new Promise((E, S) => {
      Aa(E, S, {
        data: x,
        headers: Xt.from(m.headers),
        status: m.status,
        statusText: m.statusText,
        config: e,
        request: w
      });
    });
  } catch (h) {
    throw f && f(), h && h.name === "TypeError" && /fetch/i.test(h.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, w),
      {
        cause: h.cause || h
      }
    ) : q.from(h, h && h.code, e, w);
  }
}), So = {
  http: _i,
  xhr: In,
  fetch: Bn
};
k.forEach(So, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _o = (e) => `- ${e}`, Yn = (e) => k.isFunction(e) || e === null || e === !1, Na = {
  getAdapter: (e) => {
    e = k.isArray(e) ? e : [e];
    const { length: t } = e;
    let o, i;
    const a = {};
    for (let c = 0; c < t; c++) {
      o = e[c];
      let r;
      if (i = o, !Yn(o) && (i = So[(r = String(o)).toLowerCase()], i === void 0))
        throw new q(`Unknown adapter '${r}'`);
      if (i)
        break;
      a[r || "#" + c] = i;
    }
    if (!i) {
      const c = Object.entries(a).map(
        ([n, s]) => `adapter ${n} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let r = t ? c.length > 1 ? `since :
` + c.map(_o).join(`
`) : " " + _o(c[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + r,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: So
};
function so(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Hr(null, e);
}
function ta(e) {
  return so(e), e.headers = Xt.from(e.headers), e.data = co.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Na.getAdapter(e.adapter || he.adapter)(e).then(function(i) {
    return so(e), i.data = co.call(
      e,
      e.transformResponse,
      i
    ), i.headers = Xt.from(i.headers), i;
  }, function(i) {
    return Ma(i) || (so(e), i && i.response && (i.response.data = co.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = Xt.from(i.response.headers))), Promise.reject(i);
  });
}
const Fa = "1.7.9", qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qe[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ra = {};
qe.transitional = function(t, o, i) {
  function a(c, r) {
    return "[Axios v" + Fa + "] Transitional option '" + c + "'" + r + (i ? ". " + i : "");
  }
  return (c, r, n) => {
    if (t === !1)
      throw new q(
        a(r, " has been removed" + (o ? " in " + o : "")),
        q.ERR_DEPRECATED
      );
    return o && !ra[r] && (ra[r] = !0, console.warn(
      a(
        r,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), t ? t(c, r, n) : !0;
  };
};
qe.spelling = function(t) {
  return (o, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function Un(e, t, o) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let a = i.length;
  for (; a-- > 0; ) {
    const c = i[a], r = t[c];
    if (r) {
      const n = e[c], s = n === void 0 || r(n, c, e);
      if (s !== !0)
        throw new q("option " + c + " must be " + s, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new q("Unknown option " + c, q.ERR_BAD_OPTION);
  }
}
const Me = {
  assertOptions: Un,
  validators: qe
}, cr = Me.validators;
class jr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Go(),
      response: new Go()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, o) {
    try {
      return await this._request(t, o);
    } catch (i) {
      if (i instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const c = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack ? c && !String(i.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + c) : i.stack = c;
        } catch {
        }
      }
      throw i;
    }
  }
  _request(t, o) {
    typeof t == "string" ? (o = o || {}, o.url = t) : o = t || {}, o = Ar(this.defaults, o);
    const { transitional: i, paramsSerializer: a, headers: c } = o;
    i !== void 0 && Me.assertOptions(i, {
      silentJSONParsing: cr.transitional(cr.boolean),
      forcedJSONParsing: cr.transitional(cr.boolean),
      clarifyTimeoutError: cr.transitional(cr.boolean)
    }, !1), a != null && (k.isFunction(a) ? o.paramsSerializer = {
      serialize: a
    } : Me.assertOptions(a, {
      encode: cr.function,
      serialize: cr.function
    }, !0)), Me.assertOptions(o, {
      baseUrl: cr.spelling("baseURL"),
      withXsrfToken: cr.spelling("withXSRFToken")
    }, !0), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let r = c && k.merge(
      c.common,
      c[o.method]
    );
    c && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete c[w];
      }
    ), o.headers = Xt.concat(r, c);
    const n = [];
    let s = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(o) === !1 || (s = s && f.synchronous, n.unshift(f.fulfilled, f.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(f) {
      l.push(f.fulfilled, f.rejected);
    });
    let d, p = 0, b;
    if (!s) {
      const w = [ta.bind(this), void 0];
      for (w.unshift.apply(w, n), w.push.apply(w, l), b = w.length, d = Promise.resolve(o); p < b; )
        d = d.then(w[p++], w[p++]);
      return d;
    }
    b = n.length;
    let g = o;
    for (p = 0; p < b; ) {
      const w = n[p++], f = n[p++];
      try {
        g = w(g);
      } catch (u) {
        f.call(this, u);
        break;
      }
    }
    try {
      d = ta.call(this, g);
    } catch (w) {
      return Promise.reject(w);
    }
    for (p = 0, b = l.length; p < b; )
      d = d.then(l[p++], l[p++]);
    return d;
  }
  getUri(t) {
    t = Ar(this.defaults, t);
    const o = Pa(t.baseURL, t.url);
    return ja(o, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function(t) {
  jr.prototype[t] = function(o, i) {
    return this.request(Ar(i || {}, {
      method: t,
      url: o,
      data: (i || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function o(i) {
    return function(c, r, n) {
      return this.request(Ar(n || {}, {
        method: t,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: r
      }));
    };
  }
  jr.prototype[t] = o(), jr.prototype[t + "Form"] = o(!0);
});
class Lo {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(c) {
      o = c;
    });
    const i = this;
    this.promise.then((a) => {
      if (!i._listeners) return;
      let c = i._listeners.length;
      for (; c-- > 0; )
        i._listeners[c](a);
      i._listeners = null;
    }), this.promise.then = (a) => {
      let c;
      const r = new Promise((n) => {
        i.subscribe(n), c = n;
      }).then(a);
      return r.cancel = function() {
        i.unsubscribe(c);
      }, r;
    }, t(function(c, r, n) {
      i.reason || (i.reason = new Hr(c, r, n), o(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const o = this._listeners.indexOf(t);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), o = (i) => {
      t.abort(i);
    };
    return this.subscribe(o), t.signal.unsubscribe = () => this.unsubscribe(o), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Lo(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function $n(e) {
  return function(o) {
    return e.apply(null, o);
  };
}
function Hn(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Eo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Eo).forEach(([e, t]) => {
  Eo[t] = e;
});
function Ba(e) {
  const t = new jr(e), o = fa(jr.prototype.request, t);
  return k.extend(o, jr.prototype, t, { allOwnKeys: !0 }), k.extend(o, t, null, { allOwnKeys: !0 }), o.create = function(a) {
    return Ba(Ar(e, a));
  }, o;
}
const ft = Ba(he);
ft.Axios = jr;
ft.CanceledError = Hr;
ft.CancelToken = Lo;
ft.isCancel = Ma;
ft.VERSION = Fa;
ft.toFormData = Je;
ft.AxiosError = q;
ft.Cancel = ft.CanceledError;
ft.all = function(t) {
  return Promise.all(t);
};
ft.spread = $n;
ft.isAxiosError = Hn;
ft.mergeConfig = Ar;
ft.AxiosHeaders = Xt;
ft.formToJSON = (e) => Ia(k.isHTMLForm(e) ? new FormData(e) : e);
ft.getAdapter = Na.getAdapter;
ft.HttpStatusCode = Eo;
ft.default = ft;
class Cr {
  static async get(t, o) {
    try {
      return await ft.get(t, o);
    } catch (i) {
      throw console.error(`GET request to ${t} failed:`, i), i;
    }
  }
  static async post(t, o, i) {
    try {
      return await ft.post(t, o, i);
    } catch (a) {
      throw console.error(`POST request to ${t} failed:`, a), a;
    }
  }
  static async put(t, o, i) {
    try {
      return await ft.put(t, o, i);
    } catch (a) {
      throw console.error(`PUT request to ${t} failed:`, a), a;
    }
  }
  static async delete(t, o) {
    try {
      return await ft.delete(t, o);
    } catch (i) {
      throw console.error(`DELETE request to ${t} failed:`, i), i;
    }
  }
}
const hr = ot([]);
let Xn = 0;
function _e() {
  function e(a, c = {}, r = {}) {
    const n = ++Xn;
    return hr.value.push({
      id: n,
      component: ci(a),
      props: c.props || {},
      listeners: c.listeners || {},
      type: c.type || "overlay",
      overlayProps: r
      // ✅ Assign overlayProps properly
    }), n;
  }
  function t(a) {
    a ? hr.value = hr.value.filter((c) => c.id !== a) : hr.value.pop();
  }
  const o = dt(() => hr.value[hr.value.length - 1]), i = dt(() => hr.value.length > 0);
  return ge(
    i,
    (a) => {
      document.body.style.overflow = a ? "hidden" : "";
    },
    { immediate: !0 }
  ), {
    isOpen: i,
    overlayStack: hr,
    topOverlay: o,
    open: e,
    close: t
  };
}
const Vn = {
  // close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path opacity="0.5"
  //         d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
  //         stroke="currentColor" stroke-width="1.5"/>
  //   <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5"
  //         stroke-linecap="round"/>
  // </svg>`,
  close: `<svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M17.885 3.0109C17.6296 3.04551 17.3814 3.16128 17.1857 3.35821L11.9988 8.54394L6.81435 3.35881C6.59236 3.13741 6.30831 3.01866 6.01711 3.00255C5.68293 2.98405 5.3416 3.1028 5.0862 3.35881L3.35804 5.08699C2.88065 5.56439 2.88065 6.33777 3.35804 6.81517L8.5425 12.0003L3.35804 17.1854C2.88065 17.6622 2.88065 18.4362 3.35804 18.9136L5.0862 20.6418C5.56359 21.1192 6.33934 21.1192 6.81435 20.6418L11.9988 15.4567L17.1857 20.6424C17.663 21.1192 18.4364 21.1192 18.9138 20.6424L20.642 18.9136C21.1193 18.4368 21.1193 17.6628 20.642 17.1854L15.4575 12.0003L20.642 6.81517C21.1193 6.33777 21.1193 5.56379 20.642 5.08639L18.9138 3.35821C18.6321 3.07774 18.2502 2.96197 17.885 3.0109Z"
        fill="currentColor"/>
  </svg>`,
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5"
          d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
  </svg>`,
  downloadAll: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M18 17H12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5"
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke="currentColor" stroke-width="1.5"/>
  </svg>`,
  cloudUpload: ` <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 21V11M12 11L9 14M12 11L15 14M7 16.8184C4.69636 16.2074 3 14.1246 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.8148 19.25 16.7236 17 16.9725"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`,
  fileUpload: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none">
    <path
        d="M19.002 21V15M21.0303 17L19.0303 15L17.0303 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
  </svg>`,
  chevronRight: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
  <path d="M10.5 9L13.5 12L10.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"/>
  </svg>`,
  chevronLeft: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
    <path d="M13.5 9L10.5 12L13.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
  </svg>`,
  chevronDown: `<svg height="24" width="24" viewBox="0 0 24 24"  fill="none">
    <path d="M17 9.5L12 14.5L7 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  chevronUp: `<svg height="24" width="24" viewBox="0 0 24 24"  fill="none">
    <path d="M7 14.5L12 9.5L17 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  edit: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.9426 1.25L13.5 1.25C13.9142 1.25 14.25 1.58579 14.25 2C14.25 2.41421 13.9142 2.75 13.5 2.75H12C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12V10.5C21.25 10.0858 21.5858 9.75 22 9.75C22.4142 9.75 22.75 10.0858 22.75 10.5V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM16.7705 2.27592C18.1384 0.908029 20.3562 0.908029 21.7241 2.27592C23.092 3.6438 23.092 5.86158 21.7241 7.22947L15.076 13.8776C14.7047 14.2489 14.4721 14.4815 14.2126 14.684C13.9069 14.9224 13.5761 15.1268 13.2261 15.2936C12.929 15.4352 12.6169 15.5392 12.1188 15.7052L9.21426 16.6734C8.67801 16.8521 8.0868 16.7126 7.68711 16.3129C7.28742 15.9132 7.14785 15.322 7.3266 14.7857L8.29477 11.8812C8.46079 11.3831 8.56479 11.071 8.7064 10.7739C8.87319 10.4239 9.07761 10.0931 9.31605 9.78742C9.51849 9.52787 9.7511 9.29529 10.1224 8.924L16.7705 2.27592ZM20.6634 3.33658C19.8813 2.55448 18.6133 2.55448 17.8312 3.33658L17.4546 3.7132C17.4773 3.80906 17.509 3.92327 17.5532 4.05066C17.6965 4.46372 17.9677 5.00771 18.48 5.51999C18.9923 6.03227 19.5363 6.30346 19.9493 6.44677C20.0767 6.49097 20.1909 6.52273 20.2868 6.54543L20.6634 6.16881C21.4455 5.38671 21.4455 4.11867 20.6634 3.33658ZM19.1051 7.72709C18.5892 7.50519 17.9882 7.14946 17.4193 6.58065C16.8505 6.01185 16.4948 5.41082 16.2729 4.89486L11.2175 9.95026C10.801 10.3668 10.6376 10.532 10.4988 10.7099C10.3274 10.9297 10.1804 11.1676 10.0605 11.4192C9.96337 11.623 9.88868 11.8429 9.7024 12.4017L9.27051 13.6974L10.3026 14.7295L11.5983 14.2976C12.1571 14.1113 12.377 14.0366 12.5808 13.9395C12.8324 13.8196 13.0703 13.6726 13.2901 13.5012C13.468 13.3624 13.6332 13.199 14.0497 12.7825L19.1051 7.72709Z"
          fill="currentColor"/>
  </svg>`,
  burgerMenu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
          fill="currentColor"/>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
          fill="currentColor"/>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
          fill="currentColor"/>
  </svg>`,
  attachment: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8.10692 17.4174L15.4868 10.3512C15.9348 9.92215 16.1589 9.70764 16.2759 9.47485C16.4856 9.0579 16.4856 8.5722 16.2759 8.15525C16.1589 7.92246 15.9348 7.70794 15.4868 7.27892C15.0387 6.8499 14.8147 6.63538 14.5715 6.52328C14.1361 6.32249 13.6288 6.32248 13.1934 6.52328C12.9502 6.63538 12.7262 6.8499 12.2781 7.27892L4.95178 14.2939C3.85303 15.3459 3.30366 15.872 3.11183 16.4836C2.96272 16.9591 2.96272 17.466 3.11183 17.9414C3.30366 18.5531 3.85303 19.0791 4.95178 20.1312C6.05053 21.1832 6.5999 21.7092 7.2387 21.8929C7.73526 22.0357 8.26468 22.0357 8.76124 21.8929C9.40004 21.7092 9.94941 21.1832 11.0482 20.1312L18.4815 13.0138C19.5258 12.0138 20.048 11.5138 20.3617 10.9937C21.2128 9.58216 21.2128 7.84311 20.3617 6.43161C20.048 5.91147 19.5258 5.41147 18.4815 4.41148C17.4371 3.4115 16.9149 2.9115 16.3717 2.6112C14.8975 1.79627 13.0813 1.79627 11.6071 2.6112C11.0639 2.9115 10.5417 3.4115 9.49733 4.41148L3.5079 10.1464"
        stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  //files
  image: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke="currentColor" stroke-width="1.5"/>
    <circle opacity="0.5" cx="16" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5"
          d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  video: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5" d="M21.5 8H2.5M7 8L10.5 2.5M13.5 8L17 2.5" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round"/>
    <path opacity="0.5"
          d="M15 14.5C15 13.8666 14.338 13.4395 13.014 12.5852C11.6719 11.7193 11.0008 11.2863 10.5004 11.6042C10 11.9221 10 12.7814 10 14.5C10 16.2186 10 17.0779 10.5004 17.3958C11.0008 17.7137 11.6719 17.2807 13.014 16.4148C14.338 15.5605 15 15.1334 15 14.5Z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  audio: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke="currentColor" stroke-width="1.5"/>
    <path
        d="M8.5 10.75C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25V10.75ZM16 12.25C16.4142 12.25 16.75 11.9142 16.75 11.5C16.75 11.0858 16.4142 10.75 16 10.75V12.25ZM8.5 15.25C8.08579 15.25 7.75 15.5858 7.75 16C7.75 16.4142 8.08579 16.75 8.5 16.75V15.25ZM16 16.75C16.4142 16.75 16.75 16.4142 16.75 16C16.75 15.5858 16.4142 15.25 16 15.25V16.75ZM17.25 13.75C17.25 14.5784 16.5784 15.25 15.75 15.25V16.75C17.4069 16.75 18.75 15.4069 18.75 13.75H17.25ZM15.75 12.25C16.5784 12.25 17.25 12.9216 17.25 13.75H18.75C18.75 12.0931 17.4069 10.75 15.75 10.75V12.25ZM8.25 15.25C7.42157 15.25 6.75 14.5784 6.75 13.75H5.25C5.25 15.4069 6.59315 16.75 8.25 16.75V15.25ZM8.25 10.75C6.59315 10.75 5.25 12.0931 5.25 13.75H6.75C6.75 12.9216 7.42157 12.25 8.25 12.25V10.75ZM8.5 12.25H16V10.75H8.5V12.25ZM8.5 16.75H16V15.25H8.5V16.75Z"
        fill="currentColor"/>
    <path opacity="0.5"
          d="M15.75 15.25C14.9216 15.25 14.25 14.5784 14.25 13.75H12.75C12.75 15.4069 14.0931 16.75 15.75 16.75V15.25ZM15.75 10.75C14.0931 10.75 12.75 12.0931 12.75 13.75H14.25C14.25 12.9216 14.9216 12.25 15.75 12.25V10.75ZM9.75 13.75C9.75 14.5784 9.07843 15.25 8.25 15.25V16.75C9.90685 16.75 11.25 15.4069 11.25 13.75H9.75ZM8.25 12.25C9.07843 12.25 9.75 12.9216 9.75 13.75H11.25C11.25 12.0931 9.90685 10.75 8.25 10.75V12.25Z"
          fill="currentColor"/>
    <path opacity="0.5"
          d="M17.5 4.5L16.9733 5.90449C16.5025 7.15997 16.2671 7.7877 15.7532 8.14385C15.2393 8.5 14.5688 8.5 13.228 8.5H10.772C9.43116 8.5 8.76073 8.5 8.24681 8.14385C7.73289 7.7877 7.49749 7.15997 7.02669 5.90449L6.5 4.5"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  document: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z"
        stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5"
          d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239"
          stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5"
          d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239"
          stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.7" d="M9 13H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M9 9H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M9 17H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  presentation: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2 9C2 6.17157 2 4.75736 2.87868 3.87868C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.87868C22 4.75736 22 6.17157 22 9V10C22 12.8284 22 14.2426 21.1213 15.1213C20.2426 16 18.8284 16 16 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10V9Z"
        stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5" d="M12 19V16.5M12 19L18 21M12 19L6 21" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round"/>
  </svg>`,
  spreadsheet: `<svg height="24" width="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.188 318.188"
     xml:space="preserve">
    <polygon
        opacity="0.5"
        stroke-linecap="round"
        stroke-width="1.5"
        points="112.09,123.663 112.09,123.662 118.286,113.621 124.548,123.662 134.588,123.662 123.647,107.909 133.82,91.54 123.911,91.54 118.33,101.472 112.53,91.54 102.906,91.54 112.925,107.228 102.269,123.663 "/>
    <rect x="182.882" y="155.008" width="33.713" height="15"/>
    <rect x="101.592" y="132.689" width="33.713" height="15"/>
    <rect x="182.882" y="132.689" width="33.713" height="15"/>
    <rect x="182.882" y="88.053" width="33.713" height="15"/>
    <rect x="182.882" y="110.371" width="33.713" height="15"/>
    <rect x="101.592" y="155.008" width="33.713" height="15"/>
    <rect x="142.457" y="155.008" width="33.713" height="15"/>
    <rect x="142.457" y="110.371" width="33.713" height="15"/>
    <rect x="142.457" y="88.053" width="33.713" height="15"/>
    <rect x="142.457" y="132.689" width="33.713" height="15"/>
    <!--  border -->
    <path
        opacity="0.5" stroke-linecap="round" stroke-width="1.5"
        d="M283.149,52.723L232.624,2.197C231.218,0.79,229.311,0,227.321,0H40.342c-4.142,0-7.5,3.358-7.5,7.5v303.188 c0,4.142,3.358,7.5,7.5,7.5h237.504c4.142,0,7.5-3.358,7.5-7.5V58.025C285.346,56.036,284.556,54.129,283.149,52.723z M234.821,25.606l24.918,24.919h-24.918V25.606z M47.842,15h171.979v10.263H47.842V15z M47.842,303.188V40.263h171.979v17.763 c0,4.143,3.358,7.5,7.5,7.5h43.024v237.662H47.842z"/>
  
    <!--  CSV-->
    <path
        opacity="0.5" stroke-linecap="round" stroke-width="1.5"
        d="M122.372,235.484c1.969,0,3.809,0.275,5.523,0.826c1.713,0.55,3.428,1.227,5.141,2.031l3.841-9.871 c-4.57-2.18-9.362-3.27-14.378-3.27c-4.591,0-8.585,0.98-11.98,2.937c-3.396,1.957-5.999,4.755-7.808,8.395 c-1.81,3.64-2.714,7.86-2.714,12.663c0,7.682,1.867,13.553,5.602,17.615c3.734,4.063,9.104,6.094,16.107,6.094 c4.888,0,9.268-0.857,13.14-2.57v-10.602c-1.947,0.805-3.883,1.492-5.808,2.063c-1.926,0.571-3.915,0.857-5.967,0.857 c-6.793,0-10.188-4.464-10.188-13.393c0-4.295,0.836-7.665,2.507-10.109C117.062,236.707,119.39,235.484,122.372,235.484z"></path>
    <path
        opacity="0.5" stroke-linecap="round" stroke-width="1.5"
        d="M163.57,244.594c-4.169-1.904-6.724-3.216-7.665-3.936c-0.942-0.719-1.412-1.533-1.412-2.443 c-0.002-0.847,0.368-1.556,1.11-2.127c0.74-0.571,1.925-0.857,3.555-0.857c3.152,0,6.897,0.995,11.234,2.984l3.841-9.681 c-4.994-2.222-9.892-3.333-14.694-3.333c-5.439,0-9.713,1.196-12.822,3.587c-3.111,2.392-4.666,5.724-4.666,9.997 c0,2.285,0.365,4.264,1.095,5.936s1.851,3.152,3.364,4.443s3.782,2.624,6.809,3.999c3.343,1.503,5.4,2.497,6.173,2.983 c0.771,0.486,1.333,0.968,1.682,1.444c0.35,0.476,0.524,1.031,0.524,1.666c0,1.016-0.435,1.847-1.302,2.491 c-0.868,0.647-2.233,0.969-4.095,0.969c-2.158,0-4.527-0.344-7.109-1.032c-2.581-0.687-5.067-1.645-7.458-2.872v11.172 c2.264,1.079,4.443,1.836,6.538,2.27c2.095,0.434,4.687,0.65,7.775,0.65c3.703,0,6.93-0.619,9.681-1.856 c2.75-1.238,4.856-2.973,6.315-5.205c1.461-2.232,2.191-4.787,2.191-7.665c0-3.131-0.777-5.729-2.333-7.792 C170.346,248.323,167.569,246.393,163.57,244.594z"></path>
    <path
        opacity="0.5" stroke-linecap="round" stroke-width="1.5"
        d="M201.02,249.514c-0.339,1.27-0.73,3.015-1.174,5.236c-0.445,2.222-0.741,4.073-0.889,5.555 c-0.127-2.053-0.847-5.691-2.158-10.918l-6.316-23.519h-14.092l15.139,46.401h14.759l15.202-46.401h-14.027L201.02,249.514z"/>
  
  </svg>`,
  archive: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M10.4656 1.25001C10.4771 1.25001 10.4886 1.25002 10.5 1.25002H10.8307C10.8682 1.25002 10.9058 1.25002 10.9436 1.25002L11 1.25002C11.0114 1.25002 11.0229 1.25001 11.0344 1.25001C11.0577 1.25 11.0811 1.24999 11.1047 1.25002L13.0564 1.25002C14.8942 1.25 16.3498 1.24999 17.489 1.40315C18.6614 1.56078 19.6104 1.8929 20.3588 2.64126C21.1071 3.38962 21.4392 4.33857 21.5969 5.51099C21.75 6.65021 21.75 8.10585 21.75 9.94361V14.0564C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6615 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4393 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0564 22.75H10.9436C9.10583 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4393 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6615 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V9.9436C2.24998 8.10584 2.24997 6.65021 2.40314 5.51099C2.56076 4.33857 2.89288 3.38962 3.64124 2.64126C4.38961 1.8929 5.33856 1.56078 6.51098 1.40315C7.51914 1.26761 8.77511 1.25203 10.3244 1.25025C10.3719 1.24997 10.4192 1.24999 10.4656 1.25001ZM8.75077 2.76309C7.94576 2.77882 7.27843 2.81347 6.71085 2.88978C5.70476 3.02504 5.12511 3.27871 4.7019 3.70192C4.27869 4.12513 4.02502 4.70478 3.88976 5.71087C3.75159 6.73853 3.75 8.0932 3.75 10V14C3.75 15.9068 3.75159 17.2615 3.88976 18.2892C4.02502 19.2953 4.27869 19.8749 4.7019 20.2981C5.12511 20.7213 5.70476 20.975 6.71085 21.1103C7.73851 21.2484 9.09318 21.25 11 21.25H13C14.9068 21.25 16.2615 21.2484 17.2892 21.1103C18.2952 20.975 18.8749 20.7213 19.2981 20.2981C19.7213 19.8749 19.975 19.2953 20.1102 18.2892C20.2484 17.2615 20.25 15.9068 20.25 14V10C20.25 8.0932 20.2484 6.73853 20.1102 5.71087C19.975 4.70478 19.7213 4.12513 19.2981 3.70192C18.8749 3.27871 18.2952 3.02504 17.2892 2.88978C16.2615 2.75161 14.9068 2.75002 13 2.75002H12.7491C12.7501 2.82245 12.75 2.895 12.75 2.96558C12.75 2.97711 12.75 2.9886 12.75 3.00002V3.50002C12.75 3.51144 12.75 3.52292 12.75 3.53446C12.75 3.60534 12.7501 3.67822 12.7491 3.75097C12.8218 3.74995 12.8947 3.74998 12.9656 3.75001C12.9771 3.75001 12.9886 3.75002 13 3.75002H13.5C13.5114 3.75002 13.5229 3.75001 13.5344 3.75001C13.7396 3.74993 13.9614 3.74984 14.1486 3.77501C14.3679 3.8045 14.6481 3.88033 14.8839 4.11613C15.1197 4.35194 15.1955 4.63212 15.225 4.85145C15.2502 5.03867 15.2501 5.26046 15.25 5.46558C15.25 5.47711 15.25 5.4886 15.25 5.50002V6.00002C15.25 6.01144 15.25 6.02292 15.25 6.03446C15.2501 6.23958 15.2502 6.46137 15.225 6.64859C15.1955 6.86791 15.1197 7.1481 14.8839 7.3839C14.6481 7.6197 14.3679 7.69554 14.1486 7.72502C13.9614 7.7502 13.7396 7.75011 13.5344 7.75003C13.5229 7.75002 13.5114 7.75002 13.5 7.75002H13C12.9886 7.75002 12.9771 7.75002 12.9656 7.75003C12.8947 7.75005 12.8218 7.75008 12.7491 7.74907C12.7501 7.82182 12.75 7.89469 12.75 7.96558C12.75 7.97711 12.75 7.9886 12.75 8.00002V8.50002C12.75 8.51144 12.75 8.52292 12.75 8.53446C12.75 8.60534 12.7501 8.67822 12.7491 8.75097C12.8218 8.74995 12.8947 8.74998 12.9656 8.75001C12.9771 8.75001 12.9886 8.75002 13 8.75002H13.5C13.5114 8.75002 13.5229 8.75001 13.5344 8.75001C13.7396 8.74993 13.9614 8.74984 14.1486 8.77501C14.3679 8.8045 14.6481 8.88033 14.8839 9.11613C15.1197 9.35193 15.1955 9.63212 15.225 9.85145C15.2502 10.0387 15.2501 10.2605 15.25 10.4656C15.25 10.4771 15.25 10.4886 15.25 10.5V11C15.25 11.0114 15.25 11.0229 15.25 11.0345C15.2501 11.2396 15.2502 11.4614 15.225 11.6486C15.1955 11.8679 15.1197 12.1481 14.8839 12.3839C14.6481 12.6197 14.3679 12.6955 14.1486 12.725C13.9614 12.7502 13.7396 12.7501 13.5344 12.75C13.5229 12.75 13.5114 12.75 13.5 12.75H13C12.9886 12.75 12.9771 12.75 12.9656 12.75C12.7604 12.7501 12.5386 12.7502 12.3514 12.725C12.1321 12.6955 11.8519 12.6197 11.6161 12.3839C11.3803 12.1481 11.3045 11.8679 11.275 11.6486C11.2498 11.4614 11.2499 11.2396 11.25 11.0345C11.25 11.0229 11.25 11.0114 11.25 11V10.5C11.25 10.4886 11.25 10.4771 11.25 10.4656C11.25 10.3947 11.2499 10.3218 11.2509 10.2491C11.1782 10.2501 11.1053 10.2501 11.0344 10.25C11.0229 10.25 11.0114 10.25 11 10.25H10.5C10.4886 10.25 10.4771 10.25 10.4656 10.25C10.2604 10.2501 10.0386 10.2502 9.85143 10.225C9.63211 10.1955 9.35192 10.1197 9.11612 9.8839C8.88032 9.6481 8.80448 9.36791 8.77499 9.14859C8.74982 8.96137 8.74991 8.73958 8.74999 8.53446C8.75 8.52292 8.75 8.51144 8.75 8.50002V8.00002C8.75 7.9886 8.75 7.97711 8.74999 7.96558C8.74991 7.76046 8.74982 7.53866 8.77499 7.35145C8.80448 7.13212 8.88032 6.85193 9.11612 6.61613C9.35192 6.38033 9.63211 6.3045 9.85143 6.27501C10.0386 6.24984 10.2604 6.24993 10.4656 6.25001C10.4771 6.25001 10.4886 6.25002 10.5 6.25002H11C11.0114 6.25002 11.0229 6.25001 11.0344 6.25001C11.1053 6.24998 11.1782 6.24995 11.2509 6.25097C11.2499 6.17822 11.25 6.10534 11.25 6.03446C11.25 6.02292 11.25 6.01144 11.25 6.00002V5.50002C11.25 5.4886 11.25 5.47711 11.25 5.46558C11.25 5.39469 11.2499 5.32182 11.2509 5.24907C11.1782 5.25008 11.1053 5.25006 11.0344 5.25003C11.0229 5.25002 11.0114 5.25002 11 5.25002H10.5C10.4886 5.25002 10.4771 5.25002 10.4656 5.25003C10.2604 5.25011 10.0386 5.2502 9.85143 5.22502C9.63211 5.19554 9.35192 5.1197 9.11612 4.8839C8.88032 4.6481 8.80448 4.36791 8.77499 4.14859C8.74982 3.96137 8.74991 3.73958 8.74999 3.53446C8.75 3.52292 8.75 3.51144 8.75 3.50002V3.00002C8.75 2.9886 8.75 2.97711 8.74999 2.96558C8.74997 2.89925 8.74994 2.83117 8.75077 2.76309ZM10.3322 2.75033C10.547 2.75004 10.7695 2.75002 11 2.75002C11.0991 2.75002 11.1794 2.75005 11.2488 2.75117C11.25 2.82063 11.25 2.90094 11.25 3.00002V3.50002C11.25 3.5991 11.25 3.67941 11.2488 3.74886C11.1794 3.74998 11.0991 3.75002 11 3.75002H10.5C10.4009 3.75002 10.3206 3.74998 10.2512 3.74886C10.25 3.67941 10.25 3.5991 10.25 3.50002V3.00002C10.25 2.90094 10.25 2.82063 10.2512 2.75117C10.2766 2.75076 10.3035 2.7505 10.3322 2.75033ZM12.7512 5.25117C12.75 5.32063 12.75 5.40094 12.75 5.50002V6.00002C12.75 6.0991 12.75 6.17941 12.7512 6.24886C12.8206 6.24998 12.9009 6.25002 13 6.25002H13.5C13.5991 6.25002 13.6794 6.24998 13.7488 6.24886C13.75 6.17941 13.75 6.0991 13.75 6.00002V5.50002C13.75 5.40094 13.75 5.32063 13.7488 5.25117C13.6794 5.25005 13.5991 5.25002 13.5 5.25002H13C12.9009 5.25002 12.8206 5.25005 12.7512 5.25117ZM10.2512 7.75117C10.25 7.82063 10.25 7.90094 10.25 8.00002V8.50002C10.25 8.5991 10.25 8.67941 10.2512 8.74886C10.3206 8.74998 10.4009 8.75002 10.5 8.75002H11C11.0991 8.75002 11.1794 8.74998 11.2488 8.74886C11.25 8.67941 11.25 8.5991 11.25 8.50002V8.00002C11.25 7.90094 11.25 7.82063 11.2488 7.75117C11.1794 7.75005 11.0991 7.75002 11 7.75002H10.5C10.4009 7.75002 10.3206 7.75005 10.2512 7.75117ZM12.7512 10.2512C12.75 10.3206 12.75 10.4009 12.75 10.5V11C12.75 11.0991 12.75 11.1794 12.7512 11.2489C12.8206 11.25 12.9009 11.25 13 11.25H13.5C13.5991 11.25 13.6794 11.25 13.7488 11.2489C13.75 11.1794 13.75 11.0991 13.75 11V10.5C13.75 10.4009 13.75 10.3206 13.7488 10.2512C13.6794 10.2501 13.5991 10.25 13.5 10.25H13C12.9009 10.25 12.8206 10.2501 12.7512 10.2512ZM10.375 15.25C10.306 15.25 10.25 15.306 10.25 15.375V15.5C10.25 16.4665 11.0335 17.25 12 17.25C12.9665 17.25 13.75 16.4665 13.75 15.5V15.375C13.75 15.306 13.694 15.25 13.625 15.25H10.375ZM8.75 15.375C8.75 14.4776 9.47754 13.75 10.375 13.75H13.625C14.5225 13.75 15.25 14.4776 15.25 15.375V15.5C15.25 17.2949 13.7949 18.75 12 18.75C10.2051 18.75 8.75 17.2949 8.75 15.5V15.375Z"
          fill="currentColor"/>
  </svg>`,
  data: `<svg height="24" width="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <path fill="currentColor" fill-opacity=".7"
          d="M8.416 13.8965C8.416 13.7395 8.437 13.3185 8.437 13.1395 8.437 12.3195 8.127 11.9835 7.269 11.9835L7 11.9835 7 11.0155 7.269 11.0155C8.127 11.0155 8.437 10.6685 8.437 9.8485 8.437 9.6695 8.416 9.2505 8.416 9.0915 8.416 8.0195 8.882 7.3465 10.765 7.0005L10.981 7.8405C9.74 8.1885 9.575 8.5135 9.575 9.2815 9.575 9.4925 9.596 9.8385 9.596 10.0595 9.596 10.8795 9.203 11.2785 8.52 11.5005 9.213 11.7305 9.596 12.1205 9.596 12.9405 9.596 13.1615 9.575 13.5075 9.575 13.7185 9.575 14.4855 9.74 14.8115 10.981 15.1585L10.765 16.0005C8.882 15.6525 8.416 14.9795 8.416 13.8965M12.0186 15.1582C13.2596 14.8112 13.4246 14.4852 13.4246 13.7192 13.4246 13.5082 13.4046 13.1612 13.4046 12.9402 13.4046 12.1202 13.7966 11.7202 14.4796 11.5002 13.7876 11.2682 13.4046 10.8802 13.4046 10.0592 13.4046 9.8392 13.4246 9.4922 13.4246 9.2812 13.4246 8.5132 13.2596 8.1882 12.0186 7.8412L12.2356 7.0002C14.1186 7.3462 14.5836 8.0192 14.5836 9.0922 14.5836 9.2502 14.5626 9.6702 14.5626 9.8482 14.5626 10.6692 14.8726 11.0152 15.7316 11.0152L15.9996 11.0152 15.9996 11.9832 15.7316 11.9832C14.8726 11.9832 14.5626 12.3192 14.5626 13.1392 14.5626 13.3182 14.5836 13.7392 14.5836 13.8962 14.5836 14.9792 14.1186 15.6522 12.2356 16.0002L12.0186 15.1582z"/>
    <polygon fill="currentColor" fill-opacity=".8" points="7 1 3 5 7 5"/>
    <path fill="currentColor" fill-opacity=".8"
          d="M10.5957,12.9404 C10.5957,13.0624 10.5847,13.9504 10.5907,13.9754 C10.5907,13.9744 10.5927,13.9734 10.5927,13.9734 C10.6227,13.9734 11.4997,14.2654 11.4997,14.2654 C11.4997,14.2654 12.3717,13.9764 12.4247,13.9404 C12.4177,13.9274 12.4047,13.0624 12.4047,12.9404 C12.4047,12.4914 12.4937,11.9654 12.8087,11.5034 C12.5397,11.1134 12.4047,10.6304 12.4047,10.0594 C12.4047,9.9374 12.4147,9.0494 12.4087,9.0244 C12.4087,9.0254 12.4077,9.0254 12.4077,9.0254 C12.3767,9.0254 11.4997,8.7344 11.4997,8.7344 C11.4997,8.7344 10.6277,9.0234 10.5747,9.0584 C10.5817,9.0724 10.5957,9.9374 10.5957,10.0594 C10.5957,10.5084 10.5057,11.0334 10.1917,11.4964 C10.4597,11.8854 10.5957,12.3684 10.5957,12.9404"/>
    <path fill="currentColor" fill-opacity=".8"
          d="M7.416,13.8965 C7.416,13.8125 7.435,13.0285 7.432,12.9905 C7.392,12.9865 6,12.9835 6,12.9835 L6,10.0155 C6,10.0155 7.391,10.0125 7.431,10.0075 C7.435,9.9685 7.416,9.1765 7.416,9.0915 C7.416,6.8825 9.108,6.2885 10.584,6.0165 L11.5,5.8475 L12.416,6.0165 C12.608,6.0515 12.805,6.0935 13,6.1425 L13,1.0005 L8,1.0005 L8,6.0005 L3,6.0005 L3,15.0005 L7.609,15.0005 C7.496,14.6815 7.416,14.3285 7.416,13.8965"/>
  </svg>`,
  code: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
          fill="currentColor"/>
      <path opacity="0.5" d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22"
            stroke="currentColor" stroke-width="1.5"/>
      <path opacity="0.5" d="M7 14L6 15L7 16M11.5 16L12.5 17L11.5 18M10 14L8.5 18" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  script: `<svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5"
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke="currentColor" stroke-width="1.5"/>
    <path d="M17 15H14.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path
        d="M7 10L7.2344 10.1953C8.51608 11.2634 9.15693 11.7974 9.15693 12.5C9.15693 13.2026 8.51608 13.7366 7.2344 14.8047L7 15"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  unknown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12.25 2.83422C11.7896 2.75598 11.162 2.75005 10.0298 2.75005C8.11311 2.75005 6.75075 2.75163 5.71785 2.88987C4.70596 3.0253 4.12453 3.27933 3.7019 3.70195C3.27869 4.12516 3.02502 4.70481 2.88976 5.7109C2.75159 6.73856 2.75 8.09323 2.75 10.0001V14.0001C2.75 15.9069 2.75159 17.2615 2.88976 18.2892C3.02502 19.2953 3.27869 19.8749 3.7019 20.2981C4.12511 20.7214 4.70476 20.975 5.71085 21.1103C6.73851 21.2485 8.09318 21.2501 10 21.2501H14C15.9068 21.2501 17.2615 21.2485 18.2892 21.1103C19.2952 20.975 19.8749 20.7214 20.2981 20.2981C20.7213 19.8749 20.975 19.2953 21.1102 18.2892C21.2484 17.2615 21.25 15.9069 21.25 14.0001V13.5629C21.25 12.0269 21.2392 11.2988 21.0762 10.7501H17.9463C16.8135 10.7501 15.8877 10.7501 15.1569 10.6518C14.3929 10.5491 13.7306 10.3268 13.2019 9.79815C12.6732 9.26945 12.4509 8.60712 12.3482 7.84317C12.25 7.1123 12.25 6.18657 12.25 5.05374V2.83422ZM13.75 3.6095V5.00005C13.75 6.19976 13.7516 7.0241 13.8348 7.64329C13.9152 8.24091 14.059 8.53395 14.2626 8.73749C14.4661 8.94103 14.7591 9.08486 15.3568 9.16521C15.976 9.24846 16.8003 9.25005 18 9.25005H20.0195C19.723 8.9625 19.3432 8.61797 18.85 8.17407L14.8912 4.61117C14.4058 4.17433 14.0446 3.85187 13.75 3.6095ZM10.1755 1.25002C11.5601 1.24965 12.4546 1.24942 13.2779 1.56535C14.1012 1.88129 14.7632 2.47735 15.7873 3.39955C15.8226 3.43139 15.8584 3.46361 15.8947 3.49623L19.8534 7.05912C19.8956 7.09705 19.9372 7.1345 19.9783 7.17149C21.162 8.23614 21.9274 8.92458 22.3391 9.84902C22.7508 10.7734 22.7505 11.8029 22.75 13.3949C22.75 13.4502 22.75 13.5062 22.75 13.5629V14.0565C22.75 15.8942 22.75 17.3499 22.5969 18.4891C22.4392 19.6615 22.1071 20.6104 21.3588 21.3588C20.6104 22.1072 19.6614 22.4393 18.489 22.5969C17.3498 22.7501 15.8942 22.7501 14.0564 22.7501H9.94359C8.10583 22.7501 6.65019 22.7501 5.51098 22.5969C4.33856 22.4393 3.38961 22.1072 2.64124 21.3588C1.89288 20.6104 1.56076 19.6615 1.40314 18.4891C1.24997 17.3499 1.24998 15.8942 1.25 14.0565V9.94363C1.24998 8.10587 1.24997 6.65024 1.40314 5.51103C1.56076 4.33861 1.89288 3.38966 2.64124 2.64129C3.39019 1.89235 4.34232 1.56059 5.51887 1.40313C6.66283 1.25002 8.1257 1.25003 9.97352 1.25005L10.0298 1.25005C10.0789 1.25005 10.1275 1.25004 10.1755 1.25002Z"
          fill="currentColor"/>
  </svg>`,
  // confirmation
  info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 7V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>`,
  danger: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5"
          d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
          stroke="currentColor" stroke-width="1.5"/>
    <path d="M12 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </svg>`,
  success: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5"
          d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
          stroke="currentColor" stroke-width="1.5"/>
    <path d="M9.5 12.4L10.9286 14L14.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
  </svg>`
}, Pr = st({
  name: "SVGIcon",
  props: {
    icon: { type: String, required: !0 }
  },
  setup(e, { attrs: t }) {
    const o = dt(() => {
      const c = Vn[e.icon];
      return c ? new DOMParser().parseFromString(c, "image/svg+xml").documentElement : null;
    }), i = dt(() => {
      if (!o.value) return {};
      const c = {};
      return Array.from(o.value.attributes).forEach((r) => {
        c[r.name] = r.value;
      }), c;
    }), a = dt(() => {
      var c;
      return (c = o.value) == null ? void 0 : c.innerHTML;
    });
    return () => a.value ? si("svg", {
      innerHTML: a.value,
      class: t.class,
      ...i.value
    }) : null;
  }
}), Gn = ["textContent"], or = /* @__PURE__ */ st({
  __name: "Btn",
  props: {
    as: { type: String, default: "button", validator: (e) => ["button", "a"].includes(e) },
    label: { type: String, default: "" },
    href: { type: String, default: "" },
    icon: { type: String, default: "" },
    text: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    iconPosition: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) },
    severity: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "warning", "danger", "info", "success", "white"].includes(e)
    },
    size: {
      type: String,
      default: "base",
      validator: (e) => ["xs", "sm", "base", "lg", "xl"].includes(e)
    }
  },
  setup(e) {
    const t = e, o = Ve(), i = dt(() => [
      "btn",
      "cursor-pointer",
      `btn-${t.severity}`,
      `btn-${t.size}`,
      t.icon ? "btn-icon" : "",
      t.text ? "btn-text" : "",
      t.outlined ? "btn-outlined" : "",
      t.rounded ? "btn-rounded" : "",
      t.disabled ? "btn-disabled" : ""
    ]);
    return (a, c) => (M(), zt(pe(e.as), lr(Ht(o), {
      href: e.as === "a" && !e.disabled ? e.href : void 0,
      disabled: e.disabled,
      class: i.value
    }), {
      default: Yr(() => [
        e.icon && e.iconPosition === "left" ? (M(), zt(Pr, {
          key: 0,
          icon: e.icon,
          class: "icon"
        }, null, 8, ["icon"])) : ut("", !0),
        e.label ? (M(), $("span", {
          key: 1,
          textContent: ct(e.label)
        }, null, 8, Gn)) : ut("", !0),
        e.icon && e.iconPosition === "right" ? (M(), zt(Pr, {
          key: 2,
          icon: e.icon,
          class: "icon"
        }, null, 8, ["icon"])) : ut("", !0)
      ]),
      _: 1
    }, 16, ["href", "disabled", "class"]));
  }
}), Kn = { class: "relative bg-white rounded-lg shadow-sm dark:bg-gray-700 shadow-md shadow-gray-200" }, Wn = { class: "p-4 md:p-5 text-center" }, Zn = ["textContent"], Jn = { class: "flex gap-2 justify-center" }, Qn = /* @__PURE__ */ st({
  __name: "DialogConfirmation",
  props: {
    severity: {
      type: String,
      default: "primary",
      validator: (e) => ["warning", "danger", "info", "success"].includes(e)
    },
    message: { type: String, required: !0 }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, i = t, a = dt(() => ({
      warning: "info",
      danger: "danger",
      info: "info",
      success: "success"
    })[o.severity]), c = dt(() => ({
      warning: "text-yellow-500",
      danger: "text-red-500",
      info: "text-blue-500",
      success: "text-green-500"
    })[o.severity]);
    return (r, n) => (M(), $("div", Kn, [
      Dt(or, {
        class: "absolute top-3 end-2.5",
        text: "",
        severity: "secondary",
        icon: "close",
        rounded: "",
        onClick: n[0] || (n[0] = (s) => i("cancel"))
      }),
      P("div", Wn, [
        a.value ? (M(), zt(Pr, {
          key: 0,
          icon: a.value,
          class: Ir(["mx-auto mb-4 w-12 h-12", [c.value]])
        }, null, 8, ["icon", "class"])) : ut("", !0),
        P("h3", {
          class: "mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",
          textContent: ct(e.message)
        }, null, 8, Zn),
        P("div", Jn, [
          Dt(or, {
            text: "",
            severity: "danger",
            onClick: n[1] || (n[1] = (s) => i("cancel")),
            label: "No, cancel"
          }),
          Dt(or, {
            severity: "primary",
            onClick: n[2] || (n[2] = (s) => i("confirm")),
            label: "Yes, Do it"
          })
        ])
      ])
    ]));
  }
});
function qn() {
  const { open: e, close: t, overlayStack: o, topOverlay: i, isOpen: a } = _e();
  function c(r = {}) {
    return new Promise((n) => {
      const s = e(
        Qn,
        {
          props: r,
          listeners: {
            confirm: () => {
              n(!0), t(s);
            },
            cancel: () => {
              n(!1), t(s);
            }
          },
          type: "confirmation"
        }
      );
    });
  }
  return {
    isOpen: a,
    overlayStack: o,
    topOverlay: i,
    confirm: c,
    close: t
  };
}
class ie {
  constructor(t) {
    ke(this, "options");
    ke(this, "abortController", null);
    ke(this, "mediaId", null);
    this.options = {
      ...t,
      chunkSize: t.chunkSize ?? 5 * 1024 * 1024
      // Default to 5MB if undefined
    };
  }
  async startUpload(t) {
    return await Cr.post(`${this.options.baseUrl}/s3/upload/start/`, {
      file_name: t.name,
      mime_type: t.type,
      size: t.size,
      chunk_count: Math.ceil(t.size / (this.options.chunkSize ?? 5 * 1024 * 1024)),
      ...this.options.target,
      location: this.options.bucket,
      chunk_size: this.options.chunkSize,
      is_private: this.options.isPrivate,
      collection_name: this.options.collectionName
    }, { headers: this.options.auth.headers });
  }
  chunkFile(t) {
    const o = [];
    for (let i = 0; i < t.size; i += this.options.chunkSize ?? 5 * 1024 * 1024)
      o.push(t.slice(i, i + (this.options.chunkSize ?? 5 * 1024 * 1024)));
    return o;
  }
  async computeSHA256(t) {
    const o = await t.arrayBuffer(), i = await crypto.subtle.digest("SHA-256", o);
    return Array.from(new Uint8Array(i)).map((a) => a.toString(16).padStart(2, "0")).join("");
  }
  async uploadChunk(t, o, i) {
    const a = await this.computeSHA256(o);
    return (await Cr.put(
      `${this.options.baseUrl}/s3/upload/${this.mediaId}/part/${t}/`,
      o,
      {
        signal: i,
        headers: {
          ...this.options.auth.headers,
          "Content-Type": "application/octet-stream",
          "X-Chunk-Checksum": a
        }
      }
    )).data.checksum !== a ? (console.error(`Checksum mismatch! Chunk ${t} corrupted.`), !1) : !0;
  }
  async uploadFileInChunks(t, o) {
    if (this.abortController)
      throw new Error("Upload already in progress");
    this.abortController = new AbortController();
    const { signal: i } = this.abortController, a = this.chunkFile(t);
    for (let c = 0; c < a.length; c++) {
      const r = a[c];
      let n = 3, s = !1;
      try {
        for (; n > 0 && !s; )
          s = await this.uploadChunk(c + 1, r, i), s || (console.warn(`Retrying chunk ${c + 1} (${3 - n + 1}/3)`), n--);
        o((c + 1) / a.length * 100);
      } catch (l) {
        throw ft.isCancel(l) ? console.log("Upload canceled") : console.error("Error uploading chunk:", l), l;
      }
    }
    this.abortController = null;
  }
  async completeUpload(t, o) {
    return await Cr.post(
      `${this.options.baseUrl}/s3/upload/complete/${t}/`,
      o,
      { headers: this.options.auth.headers }
    );
  }
  async cancelUpload(t) {
    if (this.abortController && (this.abortController.abort(), this.abortController = null), this.mediaId)
      try {
        await Cr.post(
          `${this.options.baseUrl}/s3/upload/cancel/${this.mediaId}/`,
          {},
          { headers: this.options.auth.headers }
        );
      } catch (o) {
        console.error("Error notifying server of cancellation:", o);
      }
    t(this.mediaId);
  }
  async uploadFile(t, o, i, a) {
    let c;
    try {
      c = await this.startUpload(t);
    } catch (n) {
      throw console.error("Error starting upload:", n), a(n), n;
    }
    const { media_id: r } = c.data;
    this.mediaId = r;
    try {
      return await this.uploadFileInChunks(t, o), await this.completeUpload(r, { parts: [] }), i(r), { media_id: r };
    } catch (n) {
      throw console.error("Upload failed:", n), a(n), this.mediaId = null, n;
    }
  }
  static async getTargetMedia(t) {
    var o, i, a;
    return await Cr.get(`${t.baseUrl}/s3/manage/${(o = t.target) == null ? void 0 : o.app_label}/${(i = t.target) == null ? void 0 : i.model_name}/${(a = t.target) == null ? void 0 : a.object_id}/`, {
      headers: t.auth.headers
    });
  }
  static async reorderCollection(t, o) {
    return await Cr.post(`${t.baseUrl}/s3/manage/reorder/`, {
      items: o
    }, {
      headers: t.auth.headers
    });
  }
  static async deleteCollectionItem(t, o) {
    if (await qn().confirm({
      message: "Are you sure you want to delete this media item?",
      severity: "warning"
    }))
      return await Cr.delete(`${t.baseUrl}/s3/manage/${o}/delete/`, {
        headers: t.auth.headers
      });
    console.log("User canceled.");
  }
}
const Ya = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/webp", "image/svg+xml"],
  audio: ["audio/mpeg", "audio/wav", "audio/aac", "audio/flac", "audio/ogg", "audio/mp4"],
  video: ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/webm", "video/x-flv"],
  document: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "text/plain"],
  presentation: ["application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  spreadsheet: ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv"],
  archive: ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed", "application/x-tar", "application/gzip"],
  data: ["application/json", "application/xml"],
  code: [
    "text/html",
    "text/css",
    "application/javascript",
    "text/javascript",
    "application/typescript",
    "text/x-python",
    "text/x-java-source",
    "text/x-c++",
    "text/x-c",
    "text/x-ruby",
    "text/x-php",
    "text/x-go"
  ],
  script: ["application/x-sh"]
}, _n = ["src"], tc = /* @__PURE__ */ st({
  __name: "ImageViewer",
  props: {
    item: { type: Object, required: !0 }
  },
  setup(e) {
    return (t, o) => (M(), $("img", {
      src: e.item.url,
      class: "max-w-full max-h-full object-contain",
      alt: "Image Preview"
    }, null, 8, _n));
  }
}), Vt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of t)
    o[i] = a;
  return o;
}, rc = {};
function ec(e, t) {
  return null;
}
const oc = /* @__PURE__ */ Vt(rc, [["render", ec]]), ac = { class: "text-center text-white" }, ic = ["href"], nc = /* @__PURE__ */ st({
  __name: "FallbackViewer",
  props: {
    item: { type: Object, required: !0 }
  },
  setup(e) {
    return (t, o) => (M(), $("div", ac, [
      o[0] || (o[0] = P("p", null, "Preview not available.", -1)),
      P("a", {
        href: e.item.downloadUrl,
        target: "_blank",
        class: "text-blue-400 hover:underline"
      }, "Download file", 8, ic)
    ]));
  }
}), cc = ["src", "type"], sc = /* @__PURE__ */ st({
  __name: "PDFViewer",
  props: {
    item: { type: Object, required: !0 }
  },
  setup(e) {
    return (t, o) => (M(), $("embed", {
      src: e.item.url,
      type: e.item.type,
      class: "h-[70vh] w-[60vw]"
    }, null, 8, cc));
  }
}), lc = {};
function dc(e, t) {
  return null;
}
const pc = /* @__PURE__ */ Vt(lc, [["render", dc]]), Ua = /* @__PURE__ */ st({
  __name: "MediaViewer.ce",
  props: {
    item: { type: Object, required: !0 }
  },
  setup(e) {
    const t = e, o = {
      image: tc,
      video: oc,
      audio: pc,
      document: sc,
      fallback: nc
    }, i = dt(() => {
      for (const [c, r] of Object.entries(Ya))
        if (r.includes(t.item.type)) return c;
      return "fallback";
    }), a = dt(() => o[i.value] || o.fallback);
    return (c, r) => (M(), zt(pe(a.value), { item: e.item }, null, 8, ["item"]));
  }
}), bc = {
  key: 0,
  class: "absolute top-4 left-4 text-white text-md"
}, wc = ["textContent"], gc = {
  key: 1,
  class: "font-normal"
}, uc = { class: "absolute top-4 right-4 flex space-x-2 bg-gray-100 bg-opacity-5 p-2 rounded-full" }, fc = { class: "flex flex-col justify-center items-center w-full h-full" }, hc = ["textContent"], mc = /* @__PURE__ */ st({
  __name: "LightboxOverlay",
  props: {
    groupItems: { type: Array, required: !0 },
    currentIndex: { type: Number, required: !0 },
    downloadable: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, i = t, a = li(o.currentIndex), c = () => {
      a.value = (a.value - 1 + o.groupItems.length) % o.groupItems.length;
    }, r = () => {
      a.value = (a.value + 1) % o.groupItems.length;
    };
    return di(() => a.value = o.currentIndex), (n, s) => (M(), $(Qt, null, [
      e.groupItems.length > 1 ? (M(), $("div", bc, [
        e.groupItems[a.value].filename ? (M(), $("p", {
          key: 0,
          class: "font-semibold",
          textContent: ct(e.groupItems[a.value].filename)
        }, null, 8, wc)) : ut("", !0),
        e.groupItems.length > 1 ? (M(), $("p", gc, ct(a.value + 1) + " / " + ct(e.groupItems.length), 1)) : ut("", !0)
      ])) : ut("", !0),
      P("div", uc, [
        e.downloadable ? (M(), zt(or, {
          key: 0,
          as: "a",
          rounded: "",
          text: "",
          severity: "white",
          href: e.groupItems[a.value].downloadUrl,
          icon: "download",
          title: "Download",
          target: "_blank"
        }, null, 8, ["href"])) : ut("", !0),
        Dt(or, {
          rounded: "",
          text: "",
          severity: "white",
          onClick: s[0] || (s[0] = (l) => i("close")),
          icon: "close",
          title: "Close"
        })
      ]),
      P("div", fc, [
        Dt(Ua, {
          item: e.groupItems[a.value]
        }, null, 8, ["item"])
      ]),
      e.groupItems[a.value].caption ? (M(), $("p", {
        key: 1,
        class: "absolute bottom-6 text-center text-gray-300 px-4 text-md",
        textContent: ct(e.groupItems[a.value].caption)
      }, null, 8, hc)) : ut("", !0),
      e.groupItems.length > 1 ? (M(), zt(or, {
        key: 2,
        onClick: c,
        rounded: "",
        size: "lg",
        severity: "secondary",
        icon: "chevronLeft",
        class: "absolute left-6 top-1/2 -translate-y-1/2 bg-opacity-0"
      })) : ut("", !0),
      e.groupItems.length > 1 ? (M(), zt(or, {
        key: 3,
        onClick: r,
        rounded: "",
        size: "lg",
        severity: "secondary",
        icon: "chevronRight",
        class: "absolute right-6 top-1/2 -translate-y-1/2 bg-opacity-0"
      })) : ut("", !0)
    ], 64));
  }
}), yc = ["src", "alt"], $a = /* @__PURE__ */ st({
  __name: "MediaPreview.ce",
  props: {
    item: { type: Object, required: !0 },
    srcAttribute: { type: String, default: "thumbnail" }
  },
  setup(e) {
    const t = e, o = Ve(), i = dt(() => {
      var r;
      for (const [n, s] of Object.entries(Ya))
        if (s.includes((r = t.item) == null ? void 0 : r.type)) return n;
      return "unknown";
    }), a = dt(() => {
      var r;
      return ((r = t.item) == null ? void 0 : r.thumbnail) === "";
    }), c = dt(() => t.item[t.srcAttribute] || "");
    return (r, n) => a.value ? (M(), zt(Pr, {
      key: 1,
      icon: i.value
    }, null, 8, ["icon"])) : (M(), $("img", lr({
      key: 0,
      src: c.value
    }, Ht(o), {
      alt: e.item.filename || "Media Preview",
      class: "h-full w-full object-cover"
    }), null, 16, yc));
  }
}), vc = /* @__PURE__ */ st({
  __name: "Lightbox.ce",
  props: {
    item: { type: [Object, String], required: !0 },
    downloadable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = _e(), i = dt(() => {
      if (typeof t.item == "string")
        try {
          const l = JSON.parse(t.item);
          return {
            url: l.url || "",
            downloadUrl: l.downloadUrl || "",
            filename: l.filename || "Untitled",
            type: l.type || "image",
            caption: l.caption || "",
            thumbnail: l.thumbnail || "",
            group: l.group || ""
          };
        } catch (l) {
          return console.error("Invalid JSON format for Lightbox item:", l), {};
        }
      return t.item;
    }), a = ot([]), c = ot(0), r = Ve();
    window.lightboxGroups || (window.lightboxGroups = {});
    const n = () => {
      const l = i.value.group;
      l && (window.lightboxGroups[l] || (window.lightboxGroups[l] = []), window.lightboxGroups[l].includes(i.value) || window.lightboxGroups[l].push(i.value));
    }, s = () => {
      const l = i.value.group;
      l && window.lightboxGroups[l] && (a.value = window.lightboxGroups[l], c.value = a.value.indexOf(i.value)), o.open(mc, {
        props: {
          groupItems: a.value,
          currentIndex: c.value,
          downloadable: t.downloadable
        },
        listeners: {
          close: () => {
            o.close();
          }
        }
      });
    };
    return ge(i, n, { immediate: !0 }), (l, d) => (M(), $("div", lr({ onClick: s }, Ht(r), { class: "h-full w-full cursor-pointer rounded-lg hover:opacity-80 transition flex justify-center items-center" }), [
      ue(l.$slots, "default", {}, () => [
        Dt($a, lr({ item: i.value }, Ht(r)), null, 16, ["item"])
      ])
    ], 16));
  }
}), xc = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, we = /* @__PURE__ */ Vt(vc, [["styles", [xc]]]), kc = { class: "relative w-full h-1 bg-gray-300 rounded-full overflow-hidden" }, Ha = /* @__PURE__ */ st({
  __name: "ProgressBar",
  props: {
    progress: { type: Number, required: !0 }
    // Progress percentage
  },
  setup(e) {
    return (t, o) => (M(), $("div", kc, [
      P("div", {
        class: "absolute h-full bg-orange-500 transition-all duration-300 ease-in-out",
        style: vo({ width: `${e.progress}%` })
      }, null, 4)
    ]));
  }
}), Cc = { class: "group flex flex-col p-2 w-36" }, zc = { class: "relative grow mb-2" }, Sc = {
  key: 0,
  class: "absolute inset-0 bg-black bg-opacity-75 rounded-lg"
}, Ec = {
  key: 1,
  class: "absolute top-2/3 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center"
}, Oc = { class: "text-xs text-white font-semibold mt-1" }, jc = { class: "flex justify-between items-center max-w-full" }, Tc = { class: "max-w-[83px]" }, Ic = ["textContent"], Mc = ["textContent"], Ac = /* @__PURE__ */ st({
  __name: "DropzoneItem",
  props: {
    item: { type: Object, required: !0 }
  },
  emits: ["upload:canceled", "upload:complete"],
  setup(e, { emit: t }) {
    const o = e, i = t, a = ua("options"), c = new ie(a), r = ot(!1), n = ot(0), s = dt(() => {
      var p;
      return (p = o.item.file) == null ? void 0 : p.name;
    }), l = dt(() => {
      var p;
      return (p = o.item.file) == null ? void 0 : p.type.split("/")[1];
    }), d = () => c.cancelUpload((p) => i("upload:canceled", p));
    return Ge(() => {
      c.uploadFile(
        o.item.file,
        (p) => n.value = p,
        (p) => {
          setTimeout(() => r.value = !0, 2e3), i("upload:complete", p);
        },
        () => i("upload:canceled", o.item.file)
      );
    }), (p, b) => (M(), $("div", Cc, [
      P("div", zc, [
        Dt(we, {
          item: e.item,
          downloadable: !1,
          editable: r.value,
          class: "rounded-lg shadow bg-gray-50 aspect-square"
        }, null, 8, ["item", "editable"]),
        r.value ? ut("", !0) : (M(), $("div", Sc)),
        r.value ? ut("", !0) : (M(), $("div", Ec, [
          Dt(Ha, { progress: n.value }, null, 8, ["progress"]),
          P("div", Oc, ct(n.value.toFixed(0)) + "% ", 1)
        ]))
      ]),
      P("div", jc, [
        P("div", Tc, [
          P("p", {
            class: "truncate overflow-hidden whitespace-nowrap text-xs font-medium",
            textContent: ct(s.value)
          }, null, 8, Ic),
          P("p", {
            class: "truncate overflow-hidden whitespace-nowrap text-gray-500 text-xs font-medium uppercase",
            textContent: ct(l.value)
          }, null, 8, Mc)
        ]),
        Dt(or, {
          onClick: d,
          rounded: "",
          severity: "danger",
          icon: "close",
          text: "",
          "icon-size": "lg"
        })
      ])
    ]));
  }
});
function Pc(e, t) {
  return new Promise((o, i) => {
    const a = new FileReader();
    a.onload = () => {
      const c = a.result, r = URL.createObjectURL(e);
      o({
        file: e,
        url: r,
        downloadUrl: r,
        filename: e.name,
        type: e.type,
        caption: e.name,
        // Optional caption
        thumbnail: c,
        group: t
      });
    }, a.onerror = (c) => i(c), e.type.startsWith("image/") ? a.readAsDataURL(e) : o({
      file: e,
      url: URL.createObjectURL(e),
      downloadUrl: URL.createObjectURL(e),
      filename: e.name,
      type: e.type,
      caption: e.name,
      thumbnail: "",
      // Default placeholder for non-image files
      group: t
    });
  });
}
function Dc(e = "gallery") {
  const t = ot([]);
  async function o(i) {
    const a = i.target;
    if (!a.files) return;
    const c = Array.from(a.files), r = await Promise.all(c.map((n) => Pc(n, e)));
    t.value.push(...r);
  }
  return {
    lightboxItems: t,
    handleFileChange: o
  };
}
function Rc(e) {
  if (!e || typeof e != "object")
    throw new Error("Invalid auth payload: Must be an object.");
  if (!["csrf", "jwt", "hmac"].includes(e.type))
    throw new Error(`Invalid auth type: ${e.type}. Must be one of: "csrf", "jwt", "hmac".`);
  try {
    const t = JSON.parse(JSON.stringify(e.headers));
    switch (e.type) {
      case "hmac":
        if (!(t["X-User-HMAC"] && t["X-User-Email"] || t["X-User-HMAC"] && t["X-User-Session"]))
          throw new Error("Invalid HMAC headers: Must include 'X-User-HMAC' and either 'X-User-Email' or 'X-User-Session'.");
        break;
      case "jwt":
        if (!t.Authorization)
          throw new Error("Invalid JWT headers: Must include 'Authorization'.");
        break;
      case "csrf":
        if (!t["X-CSRFToken"])
          throw new Error("Invalid CSRF headers: Must include 'X-CSRFToken'.");
        break;
    }
    return !0;
  } catch (t) {
    throw new Error(`Invalid headers format: ${t}`);
  }
}
function to(e) {
  const t = dt(() => {
    if (typeof e.value == "string")
      try {
        return JSON.parse(e.value);
      } catch (o) {
        throw new Error("Invalid JSON format for options: " + o);
      }
    return e.value;
  });
  if (!t.value.baseUrl)
    throw new Error("Missing 'baseUrl' in media options. This field is required.");
  if (!t.value.auth)
    throw new Error("Missing auth configuration in media options.");
  return Rc(t.value.auth), {
    parsedOptions: t
  };
}
const Lc = {
  key: 0,
  class: "flex flex-col items-center justify-center w-full h-40 cursor-pointer hover:bg-gray-100 rounded-lg"
}, Nc = {
  key: 1,
  class: "w-full flex flex-wrap justify-center items-center gap-2 hover:bg-gray-100 rounded-lg"
}, Fc = ["multiple", "accept"], Bc = /* @__PURE__ */ st({
  __name: "DropZone.ce",
  props: {
    options: { type: [Object, String], required: !0 },
    clearOnComplete: { type: Boolean, default: !1 }
  },
  emits: ["change", "fileUploaded"],
  setup(e, { emit: t }) {
    const o = e, { parsedOptions: i } = to(ot(o.options));
    Ao("options", i.value);
    const a = t, { lightboxItems: c, handleFileChange: r } = Dc(i.value.collectionName), n = ot(null), s = ot(!1), l = ot([]), d = ot([]), p = () => {
      var u;
      return (u = n.value) == null ? void 0 : u.click();
    }, b = (u) => r(u), g = (u) => {
      var h;
      u.preventDefault(), s.value = !1, (h = u.dataTransfer) != null && h.files && r({ target: { files: u.dataTransfer.files } });
    }, w = (u, h) => {
      o.clearOnComplete ? f(u, h) : d.value.includes(h) || (d.value.push(h), a("change", d.value)), a("fileUploaded", h);
    }, f = (u, h) => {
      l.value.splice(u, 1), c.value.splice(u, 1), d.value.includes(h) && d.value.splice(d.value.indexOf(h), 1), a("change", d.value);
    };
    return (u, h) => (M(), $("div", {
      class: Ir(["flex flex-col items-center justify-center w-full p-6 mx-auto bg-white border-2 border-dashed rounded-lg shadow-md transition-all duration-300", s.value ? "border-blue-500 bg-blue-50" : "border-gray-300"]),
      onDragover: h[1] || (h[1] = ae((m) => s.value = !0, ["prevent"])),
      onDragleave: h[2] || (h[2] = (m) => s.value = !1),
      onDrop: ae(g, ["prevent"]),
      onClick: p,
      role: "button",
      tabindex: "0",
      "aria-label": "Upload files by clicking or dragging them here"
    }, [
      h[5] || (h[5] = P("h2", { class: "text-lg font-medium text-gray-700 mb-4" }, "Upload your files", -1)),
      Ht(c).length === 0 && !s.value ? (M(), $("div", Lc, [
        Dt(Pr, {
          icon: "cloudUpload",
          class: "w-12 h-12 mb-2 text-gray-400"
        }),
        h[3] || (h[3] = P("p", { class: "text-sm text-gray-500" }, "Drag and drop your files here", -1)),
        h[4] || (h[4] = P("p", { class: "text-xs text-gray-400" }, "(or click to select files)", -1))
      ])) : (M(), $("div", Nc, [
        (M(!0), $(Qt, null, Mr(Ht(c), (m, z) => (M(), zt(Ac, {
          key: m.filename,
          item: m,
          onClick: h[0] || (h[0] = ae(() => {
          }, ["stop"])),
          "onUpload:canceled": (x) => f(z, x),
          "onUpload:complete": (x) => w(z, x)
        }, null, 8, ["item", "onUpload:canceled", "onUpload:complete"]))), 128))
      ])),
      P("input", {
        ref_key: "fileInput",
        ref: n,
        type: "file",
        class: "hidden",
        multiple: !Ht(i).singleFile,
        accept: Ht(i).allowedExtensions,
        onChange: b
      }, null, 40, Fc)
    ], 34));
  }
}), Yc = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, Xa = /* @__PURE__ */ Vt(Bc, [["styles", [Yc]]]), Uc = { class: "grid gap-2 grid-cols-2 my-2.5 w-fit h-fit" }, $c = ["src", "alt"], Hc = { class: "relative" }, Xc = { class: "absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center" }, Vc = { class: "text-xl font-medium text-white" }, Gc = ["src", "alt"], Kc = /* @__PURE__ */ st({
  __name: "LightboxGallery.ce",
  props: {
    items: { type: [Array, String], required: !0 }
  },
  setup(e) {
    const t = e, o = dt(() => {
      if (typeof t.items == "string")
        try {
          return JSON.parse(t.items);
        } catch (a) {
          return console.error("Invalid JSON format for items:", a), [];
        }
      return t.items;
    }), i = dt(() => {
      var a;
      return ((a = o.value[0]) == null ? void 0 : a.group) || Math.random().toString(36).slice(2);
    });
    return (a, c) => (M(), $("div", Uc, [
      (M(!0), $(Qt, null, Mr(o.value.slice(0, 3), (r) => (M(), zt(we, lr({ ref_for: !0 }, r, {
        group: i.value,
        item: r
      }), {
        default: Yr(() => [
          P("img", {
            src: r.thumbnail || r.url,
            alt: r.filename || "Image",
            class: "rounded-lg cursor-pointer aspect-square w-20"
          }, null, 8, $c)
        ]),
        _: 2
      }, 1040, ["group", "item"]))), 256)),
      o.value.length > 4 ? (M(), zt(we, lr({ key: 0 }, o.value[3], {
        group: i.value,
        item: o.value[3]
      }), {
        default: Yr(() => [
          P("div", Hc, [
            P("button", Xc, [
              P("span", Vc, "+" + ct(o.value.length - 3), 1)
            ]),
            P("img", {
              src: o.value[3].thumbnail || o.value[3].url,
              alt: o.value[3].filename || "Image",
              class: "rounded-lg cursor-pointer aspect-square w-20"
            }, null, 8, Gc)
          ])
        ]),
        _: 1
      }, 16, ["group", "item"])) : ut("", !0)
    ]));
  }
}), Wc = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, Zc = /* @__PURE__ */ Vt(Kc, [["styles", [Wc]]]), Jc = { class: "w-14 h-14 me-3" }, Qc = { class: "flex items-center space-x-3 grow" }, qc = ["textContent"], _c = { class: "text-xs text-gray-500 uppercase" }, ts = { class: "text-xs" }, rs = {
  key: 0,
  class: "mx-2 text-gray-400"
}, es = {
  key: 0,
  class: "mx-2 text-gray-400"
}, os = ["href"], ea = /* @__PURE__ */ st({
  __name: "MediaCollectionItem",
  props: {
    item: { type: Object, required: !0 },
    editable: { type: Boolean, default: !1 },
    deletable: { type: Boolean, default: !1 },
    downloadable: { type: Boolean, default: !1 },
    allowOrdering: { type: Boolean, default: !1 },
    isLastItem: { type: Boolean, default: !1 }
  },
  emits: ["item:delete", "item:edit"],
  setup(e, { emit: t }) {
    const o = e, i = t, a = dt(() => {
      var n, s, l, d, p, b;
      return {
        url: ((n = o.item.urls) == null ? void 0 : n.preview) || "",
        downloadUrl: ((s = o.item.urls) == null ? void 0 : s.download) || "",
        filename: o.item.file_name || "Untitled",
        type: o.item.mime_type || "unknown",
        caption: ((l = o.item) == null ? void 0 : l.caption) || "",
        thumbnail: ((p = (d = o.item) == null ? void 0 : d.urls) == null ? void 0 : p.thumbnail) || "",
        group: ((b = o.item) == null ? void 0 : b.collection_name) || ""
      };
    }), c = dt(() => {
      var l;
      const s = (((l = o.item) == null ? void 0 : l.size) ?? 0) / 1024;
      return s < 1024 ? `${s.toFixed(1)} KB` : `${(s / 1024).toFixed(1)} MB`;
    }), r = dt(() => {
      var s;
      let n = "";
      return typeof o.item.file == "string" ? n = (s = o.item) == null ? void 0 : s.mime_type : typeof o.item.file == "object" && (n = o.item.file.type), n.split("/")[0];
    });
    return (n, s) => {
      var l, d;
      return M(), $("div", {
        class: Ir(["flex items-center justify-start p-2 border-b border-gray-200", { "border-none": e.isLastItem }])
      }, [
        e.allowOrdering ? (M(), zt(Pr, {
          key: 0,
          icon: "burgerMenu",
          class: "cursor-move text-gray-400 hover:text-gray-600 handle me-3 w-7 h-7"
        })) : ut("", !0),
        P("div", Jc, [
          Dt(we, {
            item: a.value,
            class: "shrink-0 object-cover rounded-lg bg-gray-100",
            downloadable: e.downloadable
          }, null, 8, ["item", "downloadable"])
        ]),
        P("div", Qc, [
          P("div", null, [
            P("div", {
              class: "text-sm font-medium text-gray-800",
              textContent: ct(e.item.file_name)
            }, null, 8, qc),
            P("div", _c, [
              sr(ct(r.value), 1),
              s[2] || (s[2] = P("span", { class: "mx-2 text-gray-400" }, "•", -1)),
              sr(ct(c.value), 1)
            ]),
            P("div", ts, [
              e.deletable ? (M(), $(Qt, { key: 0 }, [
                P("button", {
                  onClick: s[0] || (s[0] = ae((p) => i("item:delete", e.item.uuid), ["prevent"])),
                  class: "text-blue-500 hover:underline",
                  "aria-label": "Delete file"
                }, " Delete "),
                e.editable || e.downloadable ? (M(), $("span", rs, "•")) : ut("", !0)
              ], 64)) : ut("", !0),
              e.editable ? (M(), $(Qt, { key: 1 }, [
                P("button", {
                  onClick: s[1] || (s[1] = ae((p) => i("item:edit", e.item.uuid), ["prevent"])),
                  class: "text-blue-500 hover:underline",
                  "aria-label": "Edit file"
                }, " Edit "),
                e.downloadable ? (M(), $("span", es, "•")) : ut("", !0)
              ], 64)) : ut("", !0),
              e.downloadable ? (M(), $(Qt, { key: 2 }, [
                (l = e.item.urls) != null && l.download ? (M(), $("a", {
                  key: 0,
                  href: (d = e.item.urls) == null ? void 0 : d.download,
                  target: "_blank",
                  class: "text-blue-500 hover:underline",
                  "aria-label": "Download file"
                }, " Download ", 8, os)) : ut("", !0)
              ], 64)) : ut("", !0)
            ])
          ])
        ])
      ], 2);
    };
  }
});
function as(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function is(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var a = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(o, i, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), o;
}
var Ae = { exports: {} };
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function oa(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), o.push.apply(o, i);
  }
  return o;
}
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oa(Object(o), !0).forEach(function(i) {
      ns(e, i, o[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : oa(Object(o)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i));
    });
  }
  return e;
}
function Pe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pe = function(t) {
    return typeof t;
  } : Pe = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pe(e);
}
function ns(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e;
}
function qt() {
  return qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function cs(e, t) {
  if (e == null) return {};
  var o = {}, i = Object.keys(e), a, c;
  for (c = 0; c < i.length; c++)
    a = i[c], !(t.indexOf(a) >= 0) && (o[a] = e[a]);
  return o;
}
function ss(e, t) {
  if (e == null) return {};
  var o = cs(e, t), i, a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (a = 0; a < c.length; a++)
      i = c[a], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
  }
  return o;
}
function ls(e) {
  return ds(e) || ps(e) || bs(e) || ws();
}
function ds(e) {
  if (Array.isArray(e)) return Oo(e);
}
function ps(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bs(e, t) {
  if (e) {
    if (typeof e == "string") return Oo(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set") return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Oo(e, t);
  }
}
function Oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, i = new Array(t); o < t; o++) i[o] = e[o];
  return i;
}
function ws() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var gs = "1.14.0";
function br(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var wr = br(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), me = br(/Edge/i), aa = br(/firefox/i), ne = br(/safari/i) && !br(/chrome/i) && !br(/android/i), Va = br(/iP(ad|od|hone)/i), us = br(/chrome/i) && br(/android/i), Ga = {
  capture: !1,
  passive: !1
};
function rt(e, t, o) {
  e.addEventListener(t, o, !wr && Ga);
}
function tt(e, t, o) {
  e.removeEventListener(t, o, !wr && Ga);
}
function Ye(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function fs(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function er(e, t, o, i) {
  if (e) {
    o = o || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === o && Ye(e, t) : Ye(e, t)) || i && e === o)
        return e;
      if (e === o) break;
    } while (e = fs(e));
  }
  return null;
}
var ia = /\s+/g;
function mt(e, t, o) {
  if (e && t)
    if (e.classList)
      e.classList[o ? "add" : "remove"](t);
    else {
      var i = (" " + e.className + " ").replace(ia, " ").replace(" " + t + " ", " ");
      e.className = (i + (o ? " " + t : "")).replace(ia, " ");
    }
}
function Y(e, t, o) {
  var i = e && e.style;
  if (i) {
    if (o === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? o = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (o = e.currentStyle), t === void 0 ? o : o[t];
    !(t in i) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), i[t] = o + (typeof o == "string" ? "" : "px");
  }
}
function Tr(e, t) {
  var o = "";
  if (typeof e == "string")
    o = e;
  else
    do {
      var i = Y(e, "transform");
      i && i !== "none" && (o = i + " " + o);
    } while (!t && (e = e.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(o);
}
function Ka(e, t, o) {
  if (e) {
    var i = e.getElementsByTagName(t), a = 0, c = i.length;
    if (o)
      for (; a < c; a++)
        o(i[a], a);
    return i;
  }
  return [];
}
function dr() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function gt(e, t, o, i, a) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var c, r, n, s, l, d, p;
    if (e !== window && e.parentNode && e !== dr() ? (c = e.getBoundingClientRect(), r = c.top, n = c.left, s = c.bottom, l = c.right, d = c.height, p = c.width) : (r = 0, n = 0, s = window.innerHeight, l = window.innerWidth, d = window.innerHeight, p = window.innerWidth), (t || o) && e !== window && (a = a || e.parentNode, !wr))
      do
        if (a && a.getBoundingClientRect && (Y(a, "transform") !== "none" || o && Y(a, "position") !== "static")) {
          var b = a.getBoundingClientRect();
          r -= b.top + parseInt(Y(a, "border-top-width")), n -= b.left + parseInt(Y(a, "border-left-width")), s = r + c.height, l = n + c.width;
          break;
        }
      while (a = a.parentNode);
    if (i && e !== window) {
      var g = Tr(a || e), w = g && g.a, f = g && g.d;
      g && (r /= f, n /= w, p /= w, d /= f, s = r + d, l = n + p);
    }
    return {
      top: r,
      left: n,
      bottom: s,
      right: l,
      width: p,
      height: d
    };
  }
}
function na(e, t, o) {
  for (var i = vr(e, !0), a = gt(e)[t]; i; ) {
    var c = gt(i)[o], r = void 0;
    if (r = a >= c, !r) return i;
    if (i === dr()) break;
    i = vr(i, !1);
  }
  return !1;
}
function Ur(e, t, o, i) {
  for (var a = 0, c = 0, r = e.children; c < r.length; ) {
    if (r[c].style.display !== "none" && r[c] !== V.ghost && (i || r[c] !== V.dragged) && er(r[c], o.draggable, e, !1)) {
      if (a === t)
        return r[c];
      a++;
    }
    c++;
  }
  return null;
}
function No(e, t) {
  for (var o = e.lastElementChild; o && (o === V.ghost || Y(o, "display") === "none" || t && !Ye(o, t)); )
    o = o.previousElementSibling;
  return o || null;
}
function Ct(e, t) {
  var o = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== V.clone && (!t || Ye(e, t)) && o++;
  return o;
}
function ca(e) {
  var t = 0, o = 0, i = dr();
  if (e)
    do {
      var a = Tr(e), c = a.a, r = a.d;
      t += e.scrollLeft * c, o += e.scrollTop * r;
    } while (e !== i && (e = e.parentNode));
  return [t, o];
}
function hs(e, t) {
  for (var o in e)
    if (e.hasOwnProperty(o)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && t[i] === e[o][i]) return Number(o);
    }
  return -1;
}
function vr(e, t) {
  if (!e || !e.getBoundingClientRect) return dr();
  var o = e, i = !1;
  do
    if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
      var a = Y(o);
      if (o.clientWidth < o.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || o.clientHeight < o.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!o.getBoundingClientRect || o === document.body) return dr();
        if (i || t) return o;
        i = !0;
      }
    }
  while (o = o.parentNode);
  return dr();
}
function ms(e, t) {
  if (e && t)
    for (var o in t)
      t.hasOwnProperty(o) && (e[o] = t[o]);
  return e;
}
function lo(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var ce;
function Wa(e, t) {
  return function() {
    if (!ce) {
      var o = arguments, i = this;
      o.length === 1 ? e.call(i, o[0]) : e.apply(i, o), ce = setTimeout(function() {
        ce = void 0;
      }, t);
    }
  };
}
function ys() {
  clearTimeout(ce), ce = void 0;
}
function Za(e, t, o) {
  e.scrollLeft += t, e.scrollTop += o;
}
function Fo(e) {
  var t = window.Polymer, o = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : o ? o(e).clone(!0)[0] : e.cloneNode(!0);
}
function sa(e, t) {
  Y(e, "position", "absolute"), Y(e, "top", t.top), Y(e, "left", t.left), Y(e, "width", t.width), Y(e, "height", t.height);
}
function po(e) {
  Y(e, "position", ""), Y(e, "top", ""), Y(e, "left", ""), Y(e, "width", ""), Y(e, "height", "");
}
var Nt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function vs() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(a) {
          if (!(Y(a, "display") === "none" || a === V.ghost)) {
            e.push({
              target: a,
              rect: gt(a)
            });
            var c = pr({}, e[e.length - 1].rect);
            if (a.thisAnimationDuration) {
              var r = Tr(a, !0);
              r && (c.top -= r.f, c.left -= r.e);
            }
            a.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(i) {
      e.push(i);
    },
    removeAnimationState: function(i) {
      e.splice(hs(e, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof i == "function" && i();
        return;
      }
      var c = !1, r = 0;
      e.forEach(function(n) {
        var s = 0, l = n.target, d = l.fromRect, p = gt(l), b = l.prevFromRect, g = l.prevToRect, w = n.rect, f = Tr(l, !0);
        f && (p.top -= f.f, p.left -= f.e), l.toRect = p, l.thisAnimationDuration && lo(b, p) && !lo(d, p) && // Make sure animatingRect is on line between toRect & fromRect
        (w.top - p.top) / (w.left - p.left) === (d.top - p.top) / (d.left - p.left) && (s = ks(w, b, g, a.options)), lo(p, d) || (l.prevFromRect = d, l.prevToRect = p, s || (s = a.options.animation), a.animate(l, w, p, s)), s && (c = !0, r = Math.max(r, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(t), c ? t = setTimeout(function() {
        typeof i == "function" && i();
      }, r) : typeof i == "function" && i(), e = [];
    },
    animate: function(i, a, c, r) {
      if (r) {
        Y(i, "transition", ""), Y(i, "transform", "");
        var n = Tr(this.el), s = n && n.a, l = n && n.d, d = (a.left - c.left) / (s || 1), p = (a.top - c.top) / (l || 1);
        i.animatingX = !!d, i.animatingY = !!p, Y(i, "transform", "translate3d(" + d + "px," + p + "px,0)"), this.forRepaintDummy = xs(i), Y(i, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), Y(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          Y(i, "transition", ""), Y(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, r);
      }
    }
  };
}
function xs(e) {
  return e.offsetWidth;
}
function ks(e, t, o, i) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2)) * i.animation;
}
var Rr = [], bo = {
  initializeByDefault: !0
}, ye = {
  mount: function(t) {
    for (var o in bo)
      bo.hasOwnProperty(o) && !(o in t) && (t[o] = bo[o]);
    Rr.forEach(function(i) {
      if (i.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Rr.push(t);
  },
  pluginEvent: function(t, o, i) {
    var a = this;
    this.eventCanceled = !1, i.cancel = function() {
      a.eventCanceled = !0;
    };
    var c = t + "Global";
    Rr.forEach(function(r) {
      o[r.pluginName] && (o[r.pluginName][c] && o[r.pluginName][c](pr({
        sortable: o
      }, i)), o.options[r.pluginName] && o[r.pluginName][t] && o[r.pluginName][t](pr({
        sortable: o
      }, i)));
    });
  },
  initializePlugins: function(t, o, i, a) {
    Rr.forEach(function(n) {
      var s = n.pluginName;
      if (!(!t.options[s] && !n.initializeByDefault)) {
        var l = new n(t, o, t.options);
        l.sortable = t, l.options = t.options, t[s] = l, qt(i, l.defaults);
      }
    });
    for (var c in t.options)
      if (t.options.hasOwnProperty(c)) {
        var r = this.modifyOption(t, c, t.options[c]);
        typeof r < "u" && (t.options[c] = r);
      }
  },
  getEventProperties: function(t, o) {
    var i = {};
    return Rr.forEach(function(a) {
      typeof a.eventProperties == "function" && qt(i, a.eventProperties.call(o[a.pluginName], t));
    }), i;
  },
  modifyOption: function(t, o, i) {
    var a;
    return Rr.forEach(function(c) {
      t[c.pluginName] && c.optionListeners && typeof c.optionListeners[o] == "function" && (a = c.optionListeners[o].call(t[c.pluginName], i));
    }), a;
  }
};
function te(e) {
  var t = e.sortable, o = e.rootEl, i = e.name, a = e.targetEl, c = e.cloneEl, r = e.toEl, n = e.fromEl, s = e.oldIndex, l = e.newIndex, d = e.oldDraggableIndex, p = e.newDraggableIndex, b = e.originalEvent, g = e.putSortable, w = e.extraEventProperties;
  if (t = t || o && o[Nt], !!t) {
    var f, u = t.options, h = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !wr && !me ? f = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (f = document.createEvent("Event"), f.initEvent(i, !0, !0)), f.to = r || o, f.from = n || o, f.item = a || o, f.clone = c, f.oldIndex = s, f.newIndex = l, f.oldDraggableIndex = d, f.newDraggableIndex = p, f.originalEvent = b, f.pullMode = g ? g.lastPutMode : void 0;
    var m = pr(pr({}, w), ye.getEventProperties(i, t));
    for (var z in m)
      f[z] = m[z];
    o && o.dispatchEvent(f), u[h] && u[h].call(t, f);
  }
}
var Cs = ["evt"], Ut = function(t, o) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = i.evt, c = ss(i, Cs);
  ye.pluginEvent.bind(V)(t, o, pr({
    dragEl: I,
    parentEl: xt,
    ghostEl: Q,
    rootEl: wt,
    nextEl: Er,
    lastDownEl: De,
    cloneEl: kt,
    cloneHidden: yr,
    dragStarted: re,
    putSortable: Pt,
    activeSortable: V.active,
    originalEvent: a,
    oldIndex: Br,
    oldDraggableIndex: se,
    newIndex: Wt,
    newDraggableIndex: mr,
    hideGhostForTarget: _a,
    unhideGhostForTarget: ti,
    cloneNowHidden: function() {
      yr = !0;
    },
    cloneNowShown: function() {
      yr = !1;
    },
    dispatchSortableEvent: function(n) {
      Bt({
        sortable: o,
        name: n,
        originalEvent: a
      });
    }
  }, c));
};
function Bt(e) {
  te(pr({
    putSortable: Pt,
    cloneEl: kt,
    targetEl: I,
    rootEl: wt,
    oldIndex: Br,
    oldDraggableIndex: se,
    newIndex: Wt,
    newDraggableIndex: mr
  }, e));
}
var I, xt, Q, wt, Er, De, kt, yr, Br, Wt, se, mr, Ce, Pt, Fr = !1, Ue = !1, $e = [], zr, tr, wo, go, la, da, re, Lr, le, de = !1, ze = !1, Re, Rt, uo = [], jo = !1, He = [], ro = typeof document < "u", Se = Va, pa = me || wr ? "cssFloat" : "float", zs = ro && !us && !Va && "draggable" in document.createElement("div"), Ja = function() {
  if (ro) {
    if (wr)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Qa = function(t, o) {
  var i = Y(t), a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), c = Ur(t, 0, o), r = Ur(t, 1, o), n = c && Y(c), s = r && Y(r), l = n && parseInt(n.marginLeft) + parseInt(n.marginRight) + gt(c).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + gt(r).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && n.float && n.float !== "none") {
    var p = n.float === "left" ? "left" : "right";
    return r && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return c && (n.display === "block" || n.display === "flex" || n.display === "table" || n.display === "grid" || l >= a && i[pa] === "none" || r && i[pa] === "none" && l + d > a) ? "vertical" : "horizontal";
}, Ss = function(t, o, i) {
  var a = i ? t.left : t.top, c = i ? t.right : t.bottom, r = i ? t.width : t.height, n = i ? o.left : o.top, s = i ? o.right : o.bottom, l = i ? o.width : o.height;
  return a === n || c === s || a + r / 2 === n + l / 2;
}, Es = function(t, o) {
  var i;
  return $e.some(function(a) {
    var c = a[Nt].options.emptyInsertThreshold;
    if (!(!c || No(a))) {
      var r = gt(a), n = t >= r.left - c && t <= r.right + c, s = o >= r.top - c && o <= r.bottom + c;
      if (n && s)
        return i = a;
    }
  }), i;
}, qa = function(t) {
  function o(c, r) {
    return function(n, s, l, d) {
      var p = n.options.group.name && s.options.group.name && n.options.group.name === s.options.group.name;
      if (c == null && (r || p))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (r && c === "clone")
        return c;
      if (typeof c == "function")
        return o(c(n, s, l, d), r)(n, s, l, d);
      var b = (r ? n : s).options.group.name;
      return c === !0 || typeof c == "string" && c === b || c.join && c.indexOf(b) > -1;
    };
  }
  var i = {}, a = t.group;
  (!a || Pe(a) != "object") && (a = {
    name: a
  }), i.name = a.name, i.checkPull = o(a.pull, !0), i.checkPut = o(a.put), i.revertClone = a.revertClone, t.group = i;
}, _a = function() {
  !Ja && Q && Y(Q, "display", "none");
}, ti = function() {
  !Ja && Q && Y(Q, "display", "");
};
ro && document.addEventListener("click", function(e) {
  if (Ue)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ue = !1, !1;
}, !0);
var Sr = function(t) {
  if (I) {
    t = t.touches ? t.touches[0] : t;
    var o = Es(t.clientX, t.clientY);
    if (o) {
      var i = {};
      for (var a in t)
        t.hasOwnProperty(a) && (i[a] = t[a]);
      i.target = i.rootEl = o, i.preventDefault = void 0, i.stopPropagation = void 0, o[Nt]._onDragOver(i);
    }
  }
}, Os = function(t) {
  I && I.parentNode[Nt]._isOutsideThisEl(t.target);
};
function V(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = qt({}, t), e[Nt] = this;
  var o = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Qa(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(r, n) {
      r.setData("Text", n.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: V.supportPointer !== !1 && "PointerEvent" in window && !ne,
    emptyInsertThreshold: 5
  };
  ye.initializePlugins(this, e, o);
  for (var i in o)
    !(i in t) && (t[i] = o[i]);
  qa(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : zs, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? rt(e, "pointerdown", this._onTapStart) : (rt(e, "mousedown", this._onTapStart), rt(e, "touchstart", this._onTapStart)), this.nativeDraggable && (rt(e, "dragover", this), rt(e, "dragenter", this)), $e.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), qt(this, vs());
}
V.prototype = /** @lends Sortable.prototype */
{
  constructor: V,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Lr = null);
  },
  _getDirection: function(t, o) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, o, I) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var o = this, i = this.el, a = this.options, c = a.preventOnFilter, r = t.type, n = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (n || t).target, l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = a.filter;
      if (Rs(i), !I && !(/mousedown|pointerdown/.test(r) && t.button !== 0 || a.disabled) && !l.isContentEditable && !(!this.nativeDraggable && ne && s && s.tagName.toUpperCase() === "SELECT") && (s = er(s, a.draggable, i, !1), !(s && s.animated) && De !== s)) {
        if (Br = Ct(s), se = Ct(s, a.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            Bt({
              sortable: o,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: i,
              fromEl: i
            }), Ut("filter", o, {
              evt: t
            }), c && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(p) {
          if (p = er(l, p.trim(), i, !1), p)
            return Bt({
              sortable: o,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: i,
              toEl: i
            }), Ut("filter", o, {
              evt: t
            }), !0;
        }), d)) {
          c && t.cancelable && t.preventDefault();
          return;
        }
        a.handle && !er(l, a.handle, i, !1) || this._prepareDragStart(t, n, s);
      }
    }
  },
  _prepareDragStart: function(t, o, i) {
    var a = this, c = a.el, r = a.options, n = c.ownerDocument, s;
    if (i && !I && i.parentNode === c) {
      var l = gt(i);
      if (wt = c, I = i, xt = I.parentNode, Er = I.nextSibling, De = i, Ce = r.group, V.dragged = I, zr = {
        target: I,
        clientX: (o || t).clientX,
        clientY: (o || t).clientY
      }, la = zr.clientX - l.left, da = zr.clientY - l.top, this._lastX = (o || t).clientX, this._lastY = (o || t).clientY, I.style["will-change"] = "all", s = function() {
        if (Ut("delayEnded", a, {
          evt: t
        }), V.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !aa && a.nativeDraggable && (I.draggable = !0), a._triggerDragStart(t, o), Bt({
          sortable: a,
          name: "choose",
          originalEvent: t
        }), mt(I, r.chosenClass, !0);
      }, r.ignore.split(",").forEach(function(d) {
        Ka(I, d.trim(), fo);
      }), rt(n, "dragover", Sr), rt(n, "mousemove", Sr), rt(n, "touchmove", Sr), rt(n, "mouseup", a._onDrop), rt(n, "touchend", a._onDrop), rt(n, "touchcancel", a._onDrop), aa && this.nativeDraggable && (this.options.touchStartThreshold = 4, I.draggable = !0), Ut("delayStart", this, {
        evt: t
      }), r.delay && (!r.delayOnTouchOnly || o) && (!this.nativeDraggable || !(me || wr))) {
        if (V.eventCanceled) {
          this._onDrop();
          return;
        }
        rt(n, "mouseup", a._disableDelayedDrag), rt(n, "touchend", a._disableDelayedDrag), rt(n, "touchcancel", a._disableDelayedDrag), rt(n, "mousemove", a._delayedDragTouchMoveHandler), rt(n, "touchmove", a._delayedDragTouchMoveHandler), r.supportPointer && rt(n, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(s, r.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var o = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    I && fo(I), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    tt(t, "mouseup", this._disableDelayedDrag), tt(t, "touchend", this._disableDelayedDrag), tt(t, "touchcancel", this._disableDelayedDrag), tt(t, "mousemove", this._delayedDragTouchMoveHandler), tt(t, "touchmove", this._delayedDragTouchMoveHandler), tt(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, o) {
    o = o || t.pointerType == "touch" && t, !this.nativeDraggable || o ? this.options.supportPointer ? rt(document, "pointermove", this._onTouchMove) : o ? rt(document, "touchmove", this._onTouchMove) : rt(document, "mousemove", this._onTouchMove) : (rt(I, "dragend", this), rt(wt, "dragstart", this._onDragStart));
    try {
      document.selection ? Le(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, o) {
    if (Fr = !1, wt && I) {
      Ut("dragStarted", this, {
        evt: o
      }), this.nativeDraggable && rt(document, "dragover", Os);
      var i = this.options;
      !t && mt(I, i.dragClass, !1), mt(I, i.ghostClass, !0), V.active = this, t && this._appendGhost(), Bt({
        sortable: this,
        name: "start",
        originalEvent: o
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (tr) {
      this._lastX = tr.clientX, this._lastY = tr.clientY, _a();
      for (var t = document.elementFromPoint(tr.clientX, tr.clientY), o = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(tr.clientX, tr.clientY), t !== o); )
        o = t;
      if (I.parentNode[Nt]._isOutsideThisEl(t), o)
        do {
          if (o[Nt]) {
            var i = void 0;
            if (i = o[Nt]._onDragOver({
              clientX: tr.clientX,
              clientY: tr.clientY,
              target: t,
              rootEl: o
            }), i && !this.options.dragoverBubble)
              break;
          }
          t = o;
        } while (o = o.parentNode);
      ti();
    }
  },
  _onTouchMove: function(t) {
    if (zr) {
      var o = this.options, i = o.fallbackTolerance, a = o.fallbackOffset, c = t.touches ? t.touches[0] : t, r = Q && Tr(Q, !0), n = Q && r && r.a, s = Q && r && r.d, l = Se && Rt && ca(Rt), d = (c.clientX - zr.clientX + a.x) / (n || 1) + (l ? l[0] - uo[0] : 0) / (n || 1), p = (c.clientY - zr.clientY + a.y) / (s || 1) + (l ? l[1] - uo[1] : 0) / (s || 1);
      if (!V.active && !Fr) {
        if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i)
          return;
        this._onDragStart(t, !0);
      }
      if (Q) {
        r ? (r.e += d - (wo || 0), r.f += p - (go || 0)) : r = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: p
        };
        var b = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
        Y(Q, "webkitTransform", b), Y(Q, "mozTransform", b), Y(Q, "msTransform", b), Y(Q, "transform", b), wo = d, go = p, tr = c;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Q) {
      var t = this.options.fallbackOnBody ? document.body : wt, o = gt(I, !0, Se, !0, t), i = this.options;
      if (Se) {
        for (Rt = t; Y(Rt, "position") === "static" && Y(Rt, "transform") === "none" && Rt !== document; )
          Rt = Rt.parentNode;
        Rt !== document.body && Rt !== document.documentElement ? (Rt === document && (Rt = dr()), o.top += Rt.scrollTop, o.left += Rt.scrollLeft) : Rt = dr(), uo = ca(Rt);
      }
      Q = I.cloneNode(!0), mt(Q, i.ghostClass, !1), mt(Q, i.fallbackClass, !0), mt(Q, i.dragClass, !0), Y(Q, "transition", ""), Y(Q, "transform", ""), Y(Q, "box-sizing", "border-box"), Y(Q, "margin", 0), Y(Q, "top", o.top), Y(Q, "left", o.left), Y(Q, "width", o.width), Y(Q, "height", o.height), Y(Q, "opacity", "0.8"), Y(Q, "position", Se ? "absolute" : "fixed"), Y(Q, "zIndex", "100000"), Y(Q, "pointerEvents", "none"), V.ghost = Q, t.appendChild(Q), Y(Q, "transform-origin", la / parseInt(Q.style.width) * 100 + "% " + da / parseInt(Q.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, o) {
    var i = this, a = t.dataTransfer, c = i.options;
    if (Ut("dragStart", this, {
      evt: t
    }), V.eventCanceled) {
      this._onDrop();
      return;
    }
    Ut("setupClone", this), V.eventCanceled || (kt = Fo(I), kt.draggable = !1, kt.style["will-change"] = "", this._hideClone(), mt(kt, this.options.chosenClass, !1), V.clone = kt), i.cloneId = Le(function() {
      Ut("clone", i), !V.eventCanceled && (i.options.removeCloneOnHide || wt.insertBefore(kt, I), i._hideClone(), Bt({
        sortable: i,
        name: "clone"
      }));
    }), !o && mt(I, c.dragClass, !0), o ? (Ue = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (tt(document, "mouseup", i._onDrop), tt(document, "touchend", i._onDrop), tt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", c.setData && c.setData.call(i, a, I)), rt(document, "drop", i), Y(I, "transform", "translateZ(0)")), Fr = !0, i._dragStartId = Le(i._dragStarted.bind(i, o, t)), rt(document, "selectstart", i), re = !0, ne && Y(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var o = this.el, i = t.target, a, c, r, n = this.options, s = n.group, l = V.active, d = Ce === s, p = n.sort, b = Pt || l, g, w = this, f = !1;
    if (jo) return;
    function u(it, pt) {
      Ut(it, w, pr({
        evt: t,
        isOwner: d,
        axis: g ? "vertical" : "horizontal",
        revert: r,
        dragRect: a,
        targetRect: c,
        canSort: p,
        fromSortable: b,
        target: i,
        completed: m,
        onMove: function(yt, vt) {
          return Ee(wt, o, I, a, yt, gt(yt), t, vt);
        },
        changed: z
      }, pt));
    }
    function h() {
      u("dragOverAnimationCapture"), w.captureAnimationState(), w !== b && b.captureAnimationState();
    }
    function m(it) {
      return u("dragOverCompleted", {
        insertion: it
      }), it && (d ? l._hideClone() : l._showClone(w), w !== b && (mt(I, Pt ? Pt.options.ghostClass : l.options.ghostClass, !1), mt(I, n.ghostClass, !0)), Pt !== w && w !== V.active ? Pt = w : w === V.active && Pt && (Pt = null), b === w && (w._ignoreWhileAnimating = i), w.animateAll(function() {
        u("dragOverAnimationComplete"), w._ignoreWhileAnimating = null;
      }), w !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (i === I && !I.animated || i === o && !i.animated) && (Lr = null), !n.dragoverBubble && !t.rootEl && i !== document && (I.parentNode[Nt]._isOutsideThisEl(t.target), !it && Sr(t)), !n.dragoverBubble && t.stopPropagation && t.stopPropagation(), f = !0;
    }
    function z() {
      Wt = Ct(I), mr = Ct(I, n.draggable), Bt({
        sortable: w,
        name: "change",
        toEl: o,
        newIndex: Wt,
        newDraggableIndex: mr,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), i = er(i, n.draggable, o, !0), u("dragOver"), V.eventCanceled) return f;
    if (I.contains(t.target) || i.animated && i.animatingX && i.animatingY || w._ignoreWhileAnimating === i)
      return m(!1);
    if (Ue = !1, l && !n.disabled && (d ? p || (r = xt !== wt) : Pt === this || (this.lastPutMode = Ce.checkPull(this, l, I, t)) && s.checkPut(this, l, I, t))) {
      if (g = this._getDirection(t, i) === "vertical", a = gt(I), u("dragOverValid"), V.eventCanceled) return f;
      if (r)
        return xt = wt, h(), this._hideClone(), u("revert"), V.eventCanceled || (Er ? wt.insertBefore(I, Er) : wt.appendChild(I)), m(!0);
      var x = No(o, n.draggable);
      if (!x || Ms(t, g, this) && !x.animated) {
        if (x === I)
          return m(!1);
        if (x && o === t.target && (i = x), i && (c = gt(i)), Ee(wt, o, I, a, i, c, t, !!i) !== !1)
          return h(), o.appendChild(I), xt = o, z(), m(!0);
      } else if (x && Is(t, g, this)) {
        var E = Ur(o, 0, n, !0);
        if (E === I)
          return m(!1);
        if (i = E, c = gt(i), Ee(wt, o, I, a, i, c, t, !1) !== !1)
          return h(), o.insertBefore(I, E), xt = o, z(), m(!0);
      } else if (i.parentNode === o) {
        c = gt(i);
        var S = 0, L, N = I.parentNode !== o, O = !Ss(I.animated && I.toRect || a, i.animated && i.toRect || c, g), D = g ? "top" : "left", F = na(i, "top", "top") || na(I, "top", "top"), Z = F ? F.scrollTop : void 0;
        Lr !== i && (L = c[D], de = !1, ze = !O && n.invertSwap || N), S = As(t, i, c, g, O ? 1 : n.swapThreshold, n.invertedSwapThreshold == null ? n.swapThreshold : n.invertedSwapThreshold, ze, Lr === i);
        var T;
        if (S !== 0) {
          var A = Ct(I);
          do
            A -= S, T = xt.children[A];
          while (T && (Y(T, "display") === "none" || T === Q));
        }
        if (S === 0 || T === i)
          return m(!1);
        Lr = i, le = S;
        var W = i.nextElementSibling, R = !1;
        R = S === 1;
        var H = Ee(wt, o, I, a, i, c, t, R);
        if (H !== !1)
          return (H === 1 || H === -1) && (R = H === 1), jo = !0, setTimeout(Ts, 30), h(), R && !W ? o.appendChild(I) : i.parentNode.insertBefore(I, R ? W : i), F && Za(F, 0, Z - F.scrollTop), xt = I.parentNode, L !== void 0 && !ze && (Re = Math.abs(L - gt(i)[D])), z(), m(!0);
      }
      if (o.contains(I))
        return m(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    tt(document, "mousemove", this._onTouchMove), tt(document, "touchmove", this._onTouchMove), tt(document, "pointermove", this._onTouchMove), tt(document, "dragover", Sr), tt(document, "mousemove", Sr), tt(document, "touchmove", Sr);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    tt(t, "mouseup", this._onDrop), tt(t, "touchend", this._onDrop), tt(t, "pointerup", this._onDrop), tt(t, "touchcancel", this._onDrop), tt(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var o = this.el, i = this.options;
    if (Wt = Ct(I), mr = Ct(I, i.draggable), Ut("drop", this, {
      evt: t
    }), xt = I && I.parentNode, Wt = Ct(I), mr = Ct(I, i.draggable), V.eventCanceled) {
      this._nulling();
      return;
    }
    Fr = !1, ze = !1, de = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), To(this.cloneId), To(this._dragStartId), this.nativeDraggable && (tt(document, "drop", this), tt(o, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ne && Y(document.body, "user-select", ""), Y(I, "transform", ""), t && (re && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), Q && Q.parentNode && Q.parentNode.removeChild(Q), (wt === xt || Pt && Pt.lastPutMode !== "clone") && kt && kt.parentNode && kt.parentNode.removeChild(kt), I && (this.nativeDraggable && tt(I, "dragend", this), fo(I), I.style["will-change"] = "", re && !Fr && mt(I, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), mt(I, this.options.chosenClass, !1), Bt({
      sortable: this,
      name: "unchoose",
      toEl: xt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), wt !== xt ? (Wt >= 0 && (Bt({
      rootEl: xt,
      name: "add",
      toEl: xt,
      fromEl: wt,
      originalEvent: t
    }), Bt({
      sortable: this,
      name: "remove",
      toEl: xt,
      originalEvent: t
    }), Bt({
      rootEl: xt,
      name: "sort",
      toEl: xt,
      fromEl: wt,
      originalEvent: t
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: xt,
      originalEvent: t
    })), Pt && Pt.save()) : Wt !== Br && Wt >= 0 && (Bt({
      sortable: this,
      name: "update",
      toEl: xt,
      originalEvent: t
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: xt,
      originalEvent: t
    })), V.active && ((Wt == null || Wt === -1) && (Wt = Br, mr = se), Bt({
      sortable: this,
      name: "end",
      toEl: xt,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ut("nulling", this), wt = I = xt = Q = Er = kt = De = yr = zr = tr = re = Wt = mr = Br = se = Lr = le = Pt = Ce = V.dragged = V.ghost = V.clone = V.active = null, He.forEach(function(t) {
      t.checked = !0;
    }), He.length = wo = go = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        I && (this._onDragOver(t), js(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], o, i = this.el.children, a = 0, c = i.length, r = this.options; a < c; a++)
      o = i[a], er(o, r.draggable, this.el, !1) && t.push(o.getAttribute(r.dataIdAttr) || Ds(o));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, o) {
    var i = {}, a = this.el;
    this.toArray().forEach(function(c, r) {
      var n = a.children[r];
      er(n, this.options.draggable, a, !1) && (i[c] = n);
    }, this), o && this.captureAnimationState(), t.forEach(function(c) {
      i[c] && (a.removeChild(i[c]), a.appendChild(i[c]));
    }), o && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, o) {
    return er(t, o || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, o) {
    var i = this.options;
    if (o === void 0)
      return i[t];
    var a = ye.modifyOption(this, t, o);
    typeof a < "u" ? i[t] = a : i[t] = o, t === "group" && qa(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ut("destroy", this);
    var t = this.el;
    t[Nt] = null, tt(t, "mousedown", this._onTapStart), tt(t, "touchstart", this._onTapStart), tt(t, "pointerdown", this._onTapStart), this.nativeDraggable && (tt(t, "dragover", this), tt(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(o) {
      o.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), $e.splice($e.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!yr) {
      if (Ut("hideClone", this), V.eventCanceled) return;
      Y(kt, "display", "none"), this.options.removeCloneOnHide && kt.parentNode && kt.parentNode.removeChild(kt), yr = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (yr) {
      if (Ut("showClone", this), V.eventCanceled) return;
      I.parentNode == wt && !this.options.group.revertClone ? wt.insertBefore(kt, I) : Er ? wt.insertBefore(kt, Er) : wt.appendChild(kt), this.options.group.revertClone && this.animate(I, kt), Y(kt, "display", ""), yr = !1;
    }
  }
};
function js(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ee(e, t, o, i, a, c, r, n) {
  var s, l = e[Nt], d = l.options.onMove, p;
  return window.CustomEvent && !wr && !me ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = o, s.draggedRect = i, s.related = a || t, s.relatedRect = c || gt(t), s.willInsertAfter = n, s.originalEvent = r, e.dispatchEvent(s), d && (p = d.call(l, s, r)), p;
}
function fo(e) {
  e.draggable = !1;
}
function Ts() {
  jo = !1;
}
function Is(e, t, o) {
  var i = gt(Ur(o.el, 0, o.options, !0)), a = 10;
  return t ? e.clientX < i.left - a || e.clientY < i.top && e.clientX < i.right : e.clientY < i.top - a || e.clientY < i.bottom && e.clientX < i.left;
}
function Ms(e, t, o) {
  var i = gt(No(o.el, o.options.draggable)), a = 10;
  return t ? e.clientX > i.right + a || e.clientX <= i.right && e.clientY > i.bottom && e.clientX >= i.left : e.clientX > i.right && e.clientY > i.top || e.clientX <= i.right && e.clientY > i.bottom + a;
}
function As(e, t, o, i, a, c, r, n) {
  var s = i ? e.clientY : e.clientX, l = i ? o.height : o.width, d = i ? o.top : o.left, p = i ? o.bottom : o.right, b = !1;
  if (!r) {
    if (n && Re < l * a) {
      if (!de && (le === 1 ? s > d + l * c / 2 : s < p - l * c / 2) && (de = !0), de)
        b = !0;
      else if (le === 1 ? s < d + Re : s > p - Re)
        return -le;
    } else if (s > d + l * (1 - a) / 2 && s < p - l * (1 - a) / 2)
      return Ps(t);
  }
  return b = b || r, b && (s < d + l * c / 2 || s > p - l * c / 2) ? s > d + l / 2 ? 1 : -1 : 0;
}
function Ps(e) {
  return Ct(I) < Ct(e) ? 1 : -1;
}
function Ds(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, o = t.length, i = 0; o--; )
    i += t.charCodeAt(o);
  return i.toString(36);
}
function Rs(e) {
  He.length = 0;
  for (var t = e.getElementsByTagName("input"), o = t.length; o--; ) {
    var i = t[o];
    i.checked && He.push(i);
  }
}
function Le(e) {
  return setTimeout(e, 0);
}
function To(e) {
  return clearTimeout(e);
}
ro && rt(document, "touchmove", function(e) {
  (V.active || Fr) && e.cancelable && e.preventDefault();
});
V.utils = {
  on: rt,
  off: tt,
  css: Y,
  find: Ka,
  is: function(t, o) {
    return !!er(t, o, t, !1);
  },
  extend: ms,
  throttle: Wa,
  closest: er,
  toggleClass: mt,
  clone: Fo,
  index: Ct,
  nextTick: Le,
  cancelNextTick: To,
  detectDirection: Qa,
  getChild: Ur
};
V.get = function(e) {
  return e[Nt];
};
V.mount = function() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (V.utils = pr(pr({}, V.utils), i.utils)), ye.mount(i);
  });
};
V.create = function(e, t) {
  return new V(e, t);
};
V.version = gs;
var Ot = [], ee, Io, Mo = !1, ho, mo, Xe, oe;
function Ls() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(o) {
      var i = o.originalEvent;
      this.sortable.nativeDraggable ? rt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? rt(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? rt(document, "touchmove", this._handleFallbackAutoScroll) : rt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(o) {
      var i = o.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? tt(document, "dragover", this._handleAutoScroll) : (tt(document, "pointermove", this._handleFallbackAutoScroll), tt(document, "touchmove", this._handleFallbackAutoScroll), tt(document, "mousemove", this._handleFallbackAutoScroll)), ba(), Ne(), ys();
    },
    nulling: function() {
      Xe = Io = ee = Mo = oe = ho = mo = null, Ot.length = 0;
    },
    _handleFallbackAutoScroll: function(o) {
      this._handleAutoScroll(o, !0);
    },
    _handleAutoScroll: function(o, i) {
      var a = this, c = (o.touches ? o.touches[0] : o).clientX, r = (o.touches ? o.touches[0] : o).clientY, n = document.elementFromPoint(c, r);
      if (Xe = o, i || this.options.forceAutoScrollFallback || me || wr || ne) {
        yo(o, this.options, n, i);
        var s = vr(n, !0);
        Mo && (!oe || c !== ho || r !== mo) && (oe && ba(), oe = setInterval(function() {
          var l = vr(document.elementFromPoint(c, r), !0);
          l !== s && (s = l, Ne()), yo(o, a.options, l, i);
        }, 10), ho = c, mo = r);
      } else {
        if (!this.options.bubbleScroll || vr(n, !0) === dr()) {
          Ne();
          return;
        }
        yo(o, this.options, vr(n, !1), !1);
      }
    }
  }, qt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ne() {
  Ot.forEach(function(e) {
    clearInterval(e.pid);
  }), Ot = [];
}
function ba() {
  clearInterval(oe);
}
var yo = Wa(function(e, t, o, i) {
  if (t.scroll) {
    var a = (e.touches ? e.touches[0] : e).clientX, c = (e.touches ? e.touches[0] : e).clientY, r = t.scrollSensitivity, n = t.scrollSpeed, s = dr(), l = !1, d;
    Io !== o && (Io = o, Ne(), ee = t.scroll, d = t.scrollFn, ee === !0 && (ee = vr(o, !0)));
    var p = 0, b = ee;
    do {
      var g = b, w = gt(g), f = w.top, u = w.bottom, h = w.left, m = w.right, z = w.width, x = w.height, E = void 0, S = void 0, L = g.scrollWidth, N = g.scrollHeight, O = Y(g), D = g.scrollLeft, F = g.scrollTop;
      g === s ? (E = z < L && (O.overflowX === "auto" || O.overflowX === "scroll" || O.overflowX === "visible"), S = x < N && (O.overflowY === "auto" || O.overflowY === "scroll" || O.overflowY === "visible")) : (E = z < L && (O.overflowX === "auto" || O.overflowX === "scroll"), S = x < N && (O.overflowY === "auto" || O.overflowY === "scroll"));
      var Z = E && (Math.abs(m - a) <= r && D + z < L) - (Math.abs(h - a) <= r && !!D), T = S && (Math.abs(u - c) <= r && F + x < N) - (Math.abs(f - c) <= r && !!F);
      if (!Ot[p])
        for (var A = 0; A <= p; A++)
          Ot[A] || (Ot[A] = {});
      (Ot[p].vx != Z || Ot[p].vy != T || Ot[p].el !== g) && (Ot[p].el = g, Ot[p].vx = Z, Ot[p].vy = T, clearInterval(Ot[p].pid), (Z != 0 || T != 0) && (l = !0, Ot[p].pid = setInterval((function() {
        i && this.layer === 0 && V.active._onTouchMove(Xe);
        var W = Ot[this.layer].vy ? Ot[this.layer].vy * n : 0, R = Ot[this.layer].vx ? Ot[this.layer].vx * n : 0;
        typeof d == "function" && d.call(V.dragged.parentNode[Nt], R, W, e, Xe, Ot[this.layer].el) !== "continue" || Za(Ot[this.layer].el, R, W);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && b !== s && (b = vr(b, !1)));
    Mo = l;
  }
}, 30), ri = function(t) {
  var o = t.originalEvent, i = t.putSortable, a = t.dragEl, c = t.activeSortable, r = t.dispatchSortableEvent, n = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (o) {
    var l = i || c;
    n();
    var d = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : o, p = document.elementFromPoint(d.clientX, d.clientY);
    s(), l && !l.el.contains(p) && (r("spill"), this.onSpill({
      dragEl: a,
      putSortable: i
    }));
  }
};
function Bo() {
}
Bo.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var o = t.oldDraggableIndex;
    this.startIndex = o;
  },
  onSpill: function(t) {
    var o = t.dragEl, i = t.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var a = Ur(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(o, a) : this.sortable.el.appendChild(o), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: ri
};
qt(Bo, {
  pluginName: "revertOnSpill"
});
function Yo() {
}
Yo.prototype = {
  onSpill: function(t) {
    var o = t.dragEl, i = t.putSortable, a = i || this.sortable;
    a.captureAnimationState(), o.parentNode && o.parentNode.removeChild(o), a.animateAll();
  },
  drop: ri
};
qt(Yo, {
  pluginName: "removeOnSpill"
});
var Jt;
function Ns() {
  function e() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return e.prototype = {
    dragStart: function(o) {
      var i = o.dragEl;
      Jt = i;
    },
    dragOverValid: function(o) {
      var i = o.completed, a = o.target, c = o.onMove, r = o.activeSortable, n = o.changed, s = o.cancel;
      if (r.options.swap) {
        var l = this.sortable.el, d = this.options;
        if (a && a !== l) {
          var p = Jt;
          c(a) !== !1 ? (mt(a, d.swapClass, !0), Jt = a) : Jt = null, p && p !== Jt && mt(p, d.swapClass, !1);
        }
        n(), i(!0), s();
      }
    },
    drop: function(o) {
      var i = o.activeSortable, a = o.putSortable, c = o.dragEl, r = a || this.sortable, n = this.options;
      Jt && mt(Jt, n.swapClass, !1), Jt && (n.swap || a && a.options.swap) && c !== Jt && (r.captureAnimationState(), r !== i && i.captureAnimationState(), Fs(c, Jt), r.animateAll(), r !== i && i.animateAll());
    },
    nulling: function() {
      Jt = null;
    }
  }, qt(e, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Jt
      };
    }
  });
}
function Fs(e, t) {
  var o = e.parentNode, i = t.parentNode, a, c;
  !o || !i || o.isEqualNode(t) || i.isEqualNode(e) || (a = Ct(e), c = Ct(t), o.isEqualNode(i) && a < c && c++, o.insertBefore(t, o.children[a]), i.insertBefore(e, i.children[c]));
}
var J = [], Kt = [], Qr, rr, qr = !1, $t = !1, Nr = !1, lt, _r, Oe;
function Bs() {
  function e(t) {
    for (var o in this)
      o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    t.options.supportPointer ? rt(document, "pointerup", this._deselectMultiDrag) : (rt(document, "mouseup", this._deselectMultiDrag), rt(document, "touchend", this._deselectMultiDrag)), rt(document, "keydown", this._checkKeyDown), rt(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(a, c) {
        var r = "";
        J.length && rr === t ? J.forEach(function(n, s) {
          r += (s ? ", " : "") + n.textContent;
        }) : r = c.textContent, a.setData("Text", r);
      }
    };
  }
  return e.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(o) {
      var i = o.dragEl;
      lt = i;
    },
    delayEnded: function() {
      this.isMultiDrag = ~J.indexOf(lt);
    },
    setupClone: function(o) {
      var i = o.sortable, a = o.cancel;
      if (this.isMultiDrag) {
        for (var c = 0; c < J.length; c++)
          Kt.push(Fo(J[c])), Kt[c].sortableIndex = J[c].sortableIndex, Kt[c].draggable = !1, Kt[c].style["will-change"] = "", mt(Kt[c], this.options.selectedClass, !1), J[c] === lt && mt(Kt[c], this.options.chosenClass, !1);
        i._hideClone(), a();
      }
    },
    clone: function(o) {
      var i = o.sortable, a = o.rootEl, c = o.dispatchSortableEvent, r = o.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || J.length && rr === i && (wa(!0, a), c("clone"), r()));
    },
    showClone: function(o) {
      var i = o.cloneNowShown, a = o.rootEl, c = o.cancel;
      this.isMultiDrag && (wa(!1, a), Kt.forEach(function(r) {
        Y(r, "display", "");
      }), i(), Oe = !1, c());
    },
    hideClone: function(o) {
      var i = this;
      o.sortable;
      var a = o.cloneNowHidden, c = o.cancel;
      this.isMultiDrag && (Kt.forEach(function(r) {
        Y(r, "display", "none"), i.options.removeCloneOnHide && r.parentNode && r.parentNode.removeChild(r);
      }), a(), Oe = !0, c());
    },
    dragStartGlobal: function(o) {
      o.sortable, !this.isMultiDrag && rr && rr.multiDrag._deselectMultiDrag(), J.forEach(function(i) {
        i.sortableIndex = Ct(i);
      }), J = J.sort(function(i, a) {
        return i.sortableIndex - a.sortableIndex;
      }), Nr = !0;
    },
    dragStarted: function(o) {
      var i = this, a = o.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (a.captureAnimationState(), this.options.animation)) {
          J.forEach(function(r) {
            r !== lt && Y(r, "position", "absolute");
          });
          var c = gt(lt, !1, !0, !0);
          J.forEach(function(r) {
            r !== lt && sa(r, c);
          }), $t = !0, qr = !0;
        }
        a.animateAll(function() {
          $t = !1, qr = !1, i.options.animation && J.forEach(function(r) {
            po(r);
          }), i.options.sort && je();
        });
      }
    },
    dragOver: function(o) {
      var i = o.target, a = o.completed, c = o.cancel;
      $t && ~J.indexOf(i) && (a(!1), c());
    },
    revert: function(o) {
      var i = o.fromSortable, a = o.rootEl, c = o.sortable, r = o.dragRect;
      J.length > 1 && (J.forEach(function(n) {
        c.addAnimationState({
          target: n,
          rect: $t ? gt(n) : r
        }), po(n), n.fromRect = r, i.removeAnimationState(n);
      }), $t = !1, Ys(!this.options.removeCloneOnHide, a));
    },
    dragOverCompleted: function(o) {
      var i = o.sortable, a = o.isOwner, c = o.insertion, r = o.activeSortable, n = o.parentEl, s = o.putSortable, l = this.options;
      if (c) {
        if (a && r._hideClone(), qr = !1, l.animation && J.length > 1 && ($t || !a && !r.options.sort && !s)) {
          var d = gt(lt, !1, !0, !0);
          J.forEach(function(b) {
            b !== lt && (sa(b, d), n.appendChild(b));
          }), $t = !0;
        }
        if (!a)
          if ($t || je(), J.length > 1) {
            var p = Oe;
            r._showClone(i), r.options.animation && !Oe && p && Kt.forEach(function(b) {
              r.addAnimationState({
                target: b,
                rect: _r
              }), b.fromRect = _r, b.thisAnimationDuration = null;
            });
          } else
            r._showClone(i);
      }
    },
    dragOverAnimationCapture: function(o) {
      var i = o.dragRect, a = o.isOwner, c = o.activeSortable;
      if (J.forEach(function(n) {
        n.thisAnimationDuration = null;
      }), c.options.animation && !a && c.multiDrag.isMultiDrag) {
        _r = qt({}, i);
        var r = Tr(lt, !0);
        _r.top -= r.f, _r.left -= r.e;
      }
    },
    dragOverAnimationComplete: function() {
      $t && ($t = !1, je());
    },
    drop: function(o) {
      var i = o.originalEvent, a = o.rootEl, c = o.parentEl, r = o.sortable, n = o.dispatchSortableEvent, s = o.oldIndex, l = o.putSortable, d = l || this.sortable;
      if (i) {
        var p = this.options, b = c.children;
        if (!Nr)
          if (p.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), mt(lt, p.selectedClass, !~J.indexOf(lt)), ~J.indexOf(lt))
            J.splice(J.indexOf(lt), 1), Qr = null, te({
              sortable: r,
              rootEl: a,
              name: "deselect",
              targetEl: lt,
              originalEvt: i
            });
          else {
            if (J.push(lt), te({
              sortable: r,
              rootEl: a,
              name: "select",
              targetEl: lt,
              originalEvt: i
            }), i.shiftKey && Qr && r.el.contains(Qr)) {
              var g = Ct(Qr), w = Ct(lt);
              if (~g && ~w && g !== w) {
                var f, u;
                for (w > g ? (u = g, f = w) : (u = w, f = g + 1); u < f; u++)
                  ~J.indexOf(b[u]) || (mt(b[u], p.selectedClass, !0), J.push(b[u]), te({
                    sortable: r,
                    rootEl: a,
                    name: "select",
                    targetEl: b[u],
                    originalEvt: i
                  }));
              }
            } else
              Qr = lt;
            rr = d;
          }
        if (Nr && this.isMultiDrag) {
          if ($t = !1, (c[Nt].options.sort || c !== a) && J.length > 1) {
            var h = gt(lt), m = Ct(lt, ":not(." + this.options.selectedClass + ")");
            if (!qr && p.animation && (lt.thisAnimationDuration = null), d.captureAnimationState(), !qr && (p.animation && (lt.fromRect = h, J.forEach(function(x) {
              if (x.thisAnimationDuration = null, x !== lt) {
                var E = $t ? gt(x) : h;
                x.fromRect = E, d.addAnimationState({
                  target: x,
                  rect: E
                });
              }
            })), je(), J.forEach(function(x) {
              b[m] ? c.insertBefore(x, b[m]) : c.appendChild(x), m++;
            }), s === Ct(lt))) {
              var z = !1;
              J.forEach(function(x) {
                if (x.sortableIndex !== Ct(x)) {
                  z = !0;
                  return;
                }
              }), z && n("update");
            }
            J.forEach(function(x) {
              po(x);
            }), d.animateAll();
          }
          rr = d;
        }
        (a === c || l && l.lastPutMode !== "clone") && Kt.forEach(function(x) {
          x.parentNode && x.parentNode.removeChild(x);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = Nr = !1, Kt.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), tt(document, "pointerup", this._deselectMultiDrag), tt(document, "mouseup", this._deselectMultiDrag), tt(document, "touchend", this._deselectMultiDrag), tt(document, "keydown", this._checkKeyDown), tt(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(o) {
      if (!(typeof Nr < "u" && Nr) && rr === this.sortable && !(o && er(o.target, this.options.draggable, this.sortable.el, !1)) && !(o && o.button !== 0))
        for (; J.length; ) {
          var i = J[0];
          mt(i, this.options.selectedClass, !1), J.shift(), te({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: i,
            originalEvt: o
          });
        }
    },
    _checkKeyDown: function(o) {
      o.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(o) {
      o.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, qt(e, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(o) {
        var i = o.parentNode[Nt];
        !i || !i.options.multiDrag || ~J.indexOf(o) || (rr && rr !== i && (rr.multiDrag._deselectMultiDrag(), rr = i), mt(o, i.options.selectedClass, !0), J.push(o));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(o) {
        var i = o.parentNode[Nt], a = J.indexOf(o);
        !i || !i.options.multiDrag || !~a || (mt(o, i.options.selectedClass, !1), J.splice(a, 1));
      }
    },
    eventProperties: function() {
      var o = this, i = [], a = [];
      return J.forEach(function(c) {
        i.push({
          multiDragElement: c,
          index: c.sortableIndex
        });
        var r;
        $t && c !== lt ? r = -1 : $t ? r = Ct(c, ":not(." + o.options.selectedClass + ")") : r = Ct(c), a.push({
          multiDragElement: c,
          index: r
        });
      }), {
        items: ls(J),
        clones: [].concat(Kt),
        oldIndicies: i,
        newIndicies: a
      };
    },
    optionListeners: {
      multiDragKey: function(o) {
        return o = o.toLowerCase(), o === "ctrl" ? o = "Control" : o.length > 1 && (o = o.charAt(0).toUpperCase() + o.substr(1)), o;
      }
    }
  });
}
function Ys(e, t) {
  J.forEach(function(o, i) {
    var a = t.children[o.sortableIndex + (e ? Number(i) : 0)];
    a ? t.insertBefore(o, a) : t.appendChild(o);
  });
}
function wa(e, t) {
  Kt.forEach(function(o, i) {
    var a = t.children[o.sortableIndex + (e ? Number(i) : 0)];
    a ? t.insertBefore(o, a) : t.appendChild(o);
  });
}
function je() {
  J.forEach(function(e) {
    e !== lt && e.parentNode && e.parentNode.removeChild(e);
  });
}
V.mount(new Ls());
V.mount(Yo, Bo);
const Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: Bs,
  Sortable: V,
  Swap: Ns,
  default: V
}, Symbol.toStringTag, { value: "Module" })), $s = /* @__PURE__ */ is(Us);
var Hs = Ae.exports, ga;
function Xs() {
  return ga || (ga = 1, function(e, t) {
    (function(i, a) {
      e.exports = a(ni, $s);
    })(typeof self < "u" ? self : Hs, function(o, i) {
      return (
        /******/
        function(a) {
          var c = {};
          function r(n) {
            if (c[n])
              return c[n].exports;
            var s = c[n] = {
              /******/
              i: n,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return a[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
          }
          return r.m = a, r.c = c, r.d = function(n, s, l) {
            r.o(n, s) || Object.defineProperty(n, s, { enumerable: !0, get: l });
          }, r.r = function(n) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
          }, r.t = function(n, s) {
            if (s & 1 && (n = r(n)), s & 8 || s & 4 && typeof n == "object" && n && n.__esModule) return n;
            var l = /* @__PURE__ */ Object.create(null);
            if (r.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: n }), s & 2 && typeof n != "string") for (var d in n) r.d(l, d, (function(p) {
              return n[p];
            }).bind(null, d));
            return l;
          }, r.n = function(n) {
            var s = n && n.__esModule ? (
              /******/
              function() {
                return n.default;
              }
            ) : (
              /******/
              function() {
                return n;
              }
            );
            return r.d(s, "a", s), s;
          }, r.o = function(n, s) {
            return Object.prototype.hasOwnProperty.call(n, s);
          }, r.p = "", r(r.s = "fb15");
        }({
          /***/
          "00ee": (
            /***/
            function(a, c, r) {
              var n = r("b622"), s = n("toStringTag"), l = {};
              l[s] = "z", a.exports = String(l) === "[object z]";
            }
          ),
          /***/
          "0366": (
            /***/
            function(a, c, r) {
              var n = r("1c0b");
              a.exports = function(s, l, d) {
                if (n(s), l === void 0) return s;
                switch (d) {
                  case 0:
                    return function() {
                      return s.call(l);
                    };
                  case 1:
                    return function(p) {
                      return s.call(l, p);
                    };
                  case 2:
                    return function(p, b) {
                      return s.call(l, p, b);
                    };
                  case 3:
                    return function(p, b, g) {
                      return s.call(l, p, b, g);
                    };
                }
                return function() {
                  return s.apply(l, arguments);
                };
              };
            }
          ),
          /***/
          "057f": (
            /***/
            function(a, c, r) {
              var n = r("fc6a"), s = r("241c").f, l = {}.toString, d = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], p = function(b) {
                try {
                  return s(b);
                } catch {
                  return d.slice();
                }
              };
              a.exports.f = function(g) {
                return d && l.call(g) == "[object Window]" ? p(g) : s(n(g));
              };
            }
          ),
          /***/
          "06cf": (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("d1e7"), l = r("5c6c"), d = r("fc6a"), p = r("c04e"), b = r("5135"), g = r("0cfb"), w = Object.getOwnPropertyDescriptor;
              c.f = n ? w : function(u, h) {
                if (u = d(u), h = p(h, !0), g) try {
                  return w(u, h);
                } catch {
                }
                if (b(u, h)) return l(!s.f.call(u, h), u[h]);
              };
            }
          ),
          /***/
          "0cfb": (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("d039"), l = r("cc12");
              a.exports = !n && !s(function() {
                return Object.defineProperty(l("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "13d5": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("d58f").left, l = r("a640"), d = r("ae40"), p = l("reduce"), b = d("reduce", { 1: 0 });
              n({ target: "Array", proto: !0, forced: !p || !b }, {
                reduce: function(w) {
                  return s(this, w, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "14c3": (
            /***/
            function(a, c, r) {
              var n = r("c6b6"), s = r("9263");
              a.exports = function(l, d) {
                var p = l.exec;
                if (typeof p == "function") {
                  var b = p.call(l, d);
                  if (typeof b != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return b;
                }
                if (n(l) !== "RegExp")
                  throw TypeError("RegExp#exec called on incompatible receiver");
                return s.call(l, d);
              };
            }
          ),
          /***/
          "159b": (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("fdbc"), l = r("17c2"), d = r("9112");
              for (var p in s) {
                var b = n[p], g = b && b.prototype;
                if (g && g.forEach !== l) try {
                  d(g, "forEach", l);
                } catch {
                  g.forEach = l;
                }
              }
            }
          ),
          /***/
          "17c2": (
            /***/
            function(a, c, r) {
              var n = r("b727").forEach, s = r("a640"), l = r("ae40"), d = s("forEach"), p = l("forEach");
              a.exports = !d || !p ? function(g) {
                return n(this, g, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            }
          ),
          /***/
          "1be4": (
            /***/
            function(a, c, r) {
              var n = r("d066");
              a.exports = n("document", "documentElement");
            }
          ),
          /***/
          "1c0b": (
            /***/
            function(a, c) {
              a.exports = function(r) {
                if (typeof r != "function")
                  throw TypeError(String(r) + " is not a function");
                return r;
              };
            }
          ),
          /***/
          "1c7e": (
            /***/
            function(a, c, r) {
              var n = r("b622"), s = n("iterator"), l = !1;
              try {
                var d = 0, p = {
                  next: function() {
                    return { done: !!d++ };
                  },
                  return: function() {
                    l = !0;
                  }
                };
                p[s] = function() {
                  return this;
                }, Array.from(p, function() {
                  throw 2;
                });
              } catch {
              }
              a.exports = function(b, g) {
                if (!g && !l) return !1;
                var w = !1;
                try {
                  var f = {};
                  f[s] = function() {
                    return {
                      next: function() {
                        return { done: w = !0 };
                      }
                    };
                  }, b(f);
                } catch {
                }
                return w;
              };
            }
          ),
          /***/
          "1d80": (
            /***/
            function(a, c) {
              a.exports = function(r) {
                if (r == null) throw TypeError("Can't call method on " + r);
                return r;
              };
            }
          ),
          /***/
          "1dde": (
            /***/
            function(a, c, r) {
              var n = r("d039"), s = r("b622"), l = r("2d00"), d = s("species");
              a.exports = function(p) {
                return l >= 51 || !n(function() {
                  var b = [], g = b.constructor = {};
                  return g[d] = function() {
                    return { foo: 1 };
                  }, b[p](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "23cb": (
            /***/
            function(a, c, r) {
              var n = r("a691"), s = Math.max, l = Math.min;
              a.exports = function(d, p) {
                var b = n(d);
                return b < 0 ? s(b + p, 0) : l(b, p);
              };
            }
          ),
          /***/
          "23e7": (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("06cf").f, l = r("9112"), d = r("6eeb"), p = r("ce4e"), b = r("e893"), g = r("94ca");
              a.exports = function(w, f) {
                var u = w.target, h = w.global, m = w.stat, z, x, E, S, L, N;
                if (h ? x = n : m ? x = n[u] || p(u, {}) : x = (n[u] || {}).prototype, x) for (E in f) {
                  if (L = f[E], w.noTargetGet ? (N = s(x, E), S = N && N.value) : S = x[E], z = g(h ? E : u + (m ? "." : "#") + E, w.forced), !z && S !== void 0) {
                    if (typeof L == typeof S) continue;
                    b(L, S);
                  }
                  (w.sham || S && S.sham) && l(L, "sham", !0), d(x, E, L, w);
                }
              };
            }
          ),
          /***/
          "241c": (
            /***/
            function(a, c, r) {
              var n = r("ca84"), s = r("7839"), l = s.concat("length", "prototype");
              c.f = Object.getOwnPropertyNames || function(p) {
                return n(p, l);
              };
            }
          ),
          /***/
          "25f0": (
            /***/
            function(a, c, r) {
              var n = r("6eeb"), s = r("825a"), l = r("d039"), d = r("ad6d"), p = "toString", b = RegExp.prototype, g = b[p], w = l(function() {
                return g.call({ source: "a", flags: "b" }) != "/a/b";
              }), f = g.name != p;
              (w || f) && n(RegExp.prototype, p, function() {
                var h = s(this), m = String(h.source), z = h.flags, x = String(z === void 0 && h instanceof RegExp && !("flags" in b) ? d.call(h) : z);
                return "/" + m + "/" + x;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "2ca0": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("06cf").f, l = r("50c4"), d = r("5a34"), p = r("1d80"), b = r("ab13"), g = r("c430"), w = "".startsWith, f = Math.min, u = b("startsWith"), h = !g && !u && !!function() {
                var m = s(String.prototype, "startsWith");
                return m && !m.writable;
              }();
              n({ target: "String", proto: !0, forced: !h && !u }, {
                startsWith: function(z) {
                  var x = String(p(this));
                  d(z);
                  var E = l(f(arguments.length > 1 ? arguments[1] : void 0, x.length)), S = String(z);
                  return w ? w.call(x, S, E) : x.slice(E, E + S.length) === S;
                }
              });
            }
          ),
          /***/
          "2d00": (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("342f"), l = n.process, d = l && l.versions, p = d && d.v8, b, g;
              p ? (b = p.split("."), g = b[0] + b[1]) : s && (b = s.match(/Edge\/(\d+)/), (!b || b[1] >= 74) && (b = s.match(/Chrome\/(\d+)/), b && (g = b[1]))), a.exports = g && +g;
            }
          ),
          /***/
          "342f": (
            /***/
            function(a, c, r) {
              var n = r("d066");
              a.exports = n("navigator", "userAgent") || "";
            }
          ),
          /***/
          "35a1": (
            /***/
            function(a, c, r) {
              var n = r("f5df"), s = r("3f8c"), l = r("b622"), d = l("iterator");
              a.exports = function(p) {
                if (p != null) return p[d] || p["@@iterator"] || s[n(p)];
              };
            }
          ),
          /***/
          "37e8": (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("9bf2"), l = r("825a"), d = r("df75");
              a.exports = n ? Object.defineProperties : function(b, g) {
                l(b);
                for (var w = d(g), f = w.length, u = 0, h; f > u; ) s.f(b, h = w[u++], g[h]);
                return b;
              };
            }
          ),
          /***/
          "3bbe": (
            /***/
            function(a, c, r) {
              var n = r("861d");
              a.exports = function(s) {
                if (!n(s) && s !== null)
                  throw TypeError("Can't set " + String(s) + " as a prototype");
                return s;
              };
            }
          ),
          /***/
          "3ca3": (
            /***/
            function(a, c, r) {
              var n = r("6547").charAt, s = r("69f3"), l = r("7dd0"), d = "String Iterator", p = s.set, b = s.getterFor(d);
              l(String, "String", function(g) {
                p(this, {
                  type: d,
                  string: String(g),
                  index: 0
                });
              }, function() {
                var w = b(this), f = w.string, u = w.index, h;
                return u >= f.length ? { value: void 0, done: !0 } : (h = n(f, u), w.index += h.length, { value: h, done: !1 });
              });
            }
          ),
          /***/
          "3f8c": (
            /***/
            function(a, c) {
              a.exports = {};
            }
          ),
          /***/
          4160: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("17c2");
              n({ target: "Array", proto: !0, forced: [].forEach != s }, {
                forEach: s
              });
            }
          ),
          /***/
          "428f": (
            /***/
            function(a, c, r) {
              var n = r("da84");
              a.exports = n;
            }
          ),
          /***/
          "44ad": (
            /***/
            function(a, c, r) {
              var n = r("d039"), s = r("c6b6"), l = "".split;
              a.exports = n(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(d) {
                return s(d) == "String" ? l.call(d, "") : Object(d);
              } : Object;
            }
          ),
          /***/
          "44d2": (
            /***/
            function(a, c, r) {
              var n = r("b622"), s = r("7c73"), l = r("9bf2"), d = n("unscopables"), p = Array.prototype;
              p[d] == null && l.f(p, d, {
                configurable: !0,
                value: s(null)
              }), a.exports = function(b) {
                p[d][b] = !0;
              };
            }
          ),
          /***/
          "44e7": (
            /***/
            function(a, c, r) {
              var n = r("861d"), s = r("c6b6"), l = r("b622"), d = l("match");
              a.exports = function(p) {
                var b;
                return n(p) && ((b = p[d]) !== void 0 ? !!b : s(p) == "RegExp");
              };
            }
          ),
          /***/
          4930: (
            /***/
            function(a, c, r) {
              var n = r("d039");
              a.exports = !!Object.getOwnPropertySymbols && !n(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "4d64": (
            /***/
            function(a, c, r) {
              var n = r("fc6a"), s = r("50c4"), l = r("23cb"), d = function(p) {
                return function(b, g, w) {
                  var f = n(b), u = s(f.length), h = l(w, u), m;
                  if (p && g != g) {
                    for (; u > h; )
                      if (m = f[h++], m != m) return !0;
                  } else for (; u > h; h++)
                    if ((p || h in f) && f[h] === g) return p || h || 0;
                  return !p && -1;
                };
              };
              a.exports = {
                // `Array.prototype.includes` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                includes: d(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                indexOf: d(!1)
              };
            }
          ),
          /***/
          "4de4": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("b727").filter, l = r("1dde"), d = r("ae40"), p = l("filter"), b = d("filter");
              n({ target: "Array", proto: !0, forced: !p || !b }, {
                filter: function(w) {
                  return s(this, w, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "4df4": (
            /***/
            function(a, c, r) {
              var n = r("0366"), s = r("7b0b"), l = r("9bdd"), d = r("e95a"), p = r("50c4"), b = r("8418"), g = r("35a1");
              a.exports = function(f) {
                var u = s(f), h = typeof this == "function" ? this : Array, m = arguments.length, z = m > 1 ? arguments[1] : void 0, x = z !== void 0, E = g(u), S = 0, L, N, O, D, F, Z;
                if (x && (z = n(z, m > 2 ? arguments[2] : void 0, 2)), E != null && !(h == Array && d(E)))
                  for (D = E.call(u), F = D.next, N = new h(); !(O = F.call(D)).done; S++)
                    Z = x ? l(D, z, [O.value, S], !0) : O.value, b(N, S, Z);
                else
                  for (L = p(u.length), N = new h(L); L > S; S++)
                    Z = x ? z(u[S], S) : u[S], b(N, S, Z);
                return N.length = S, N;
              };
            }
          ),
          /***/
          "4fad": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("6f53").entries;
              n({ target: "Object", stat: !0 }, {
                entries: function(d) {
                  return s(d);
                }
              });
            }
          ),
          /***/
          "50c4": (
            /***/
            function(a, c, r) {
              var n = r("a691"), s = Math.min;
              a.exports = function(l) {
                return l > 0 ? s(n(l), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          5135: (
            /***/
            function(a, c) {
              var r = {}.hasOwnProperty;
              a.exports = function(n, s) {
                return r.call(n, s);
              };
            }
          ),
          /***/
          5319: (
            /***/
            function(a, c, r) {
              var n = r("d784"), s = r("825a"), l = r("7b0b"), d = r("50c4"), p = r("a691"), b = r("1d80"), g = r("8aa5"), w = r("14c3"), f = Math.max, u = Math.min, h = Math.floor, m = /\$([$&'`]|\d\d?|<[^>]*>)/g, z = /\$([$&'`]|\d\d?)/g, x = function(E) {
                return E === void 0 ? E : String(E);
              };
              n("replace", 2, function(E, S, L, N) {
                var O = N.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, D = N.REPLACE_KEEPS_$0, F = O ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(A, W) {
                    var R = b(this), H = A == null ? void 0 : A[E];
                    return H !== void 0 ? H.call(A, R, W) : S.call(String(R), A, W);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(T, A) {
                    if (!O && D || typeof A == "string" && A.indexOf(F) === -1) {
                      var W = L(S, T, this, A);
                      if (W.done) return W.value;
                    }
                    var R = s(T), H = String(this), it = typeof A == "function";
                    it || (A = String(A));
                    var pt = R.global;
                    if (pt) {
                      var It = R.unicode;
                      R.lastIndex = 0;
                    }
                    for (var yt = []; ; ) {
                      var vt = w(R, H);
                      if (vt === null || (yt.push(vt), !pt)) break;
                      var jt = String(vt[0]);
                      jt === "" && (R.lastIndex = g(H, d(R.lastIndex), It));
                    }
                    for (var Tt = "", Et = 0, bt = 0; bt < yt.length; bt++) {
                      vt = yt[bt];
                      for (var ht = String(vt[0]), Gt = f(u(p(vt.index), H.length), 0), Ft = [], gr = 1; gr < vt.length; gr++) Ft.push(x(vt[gr]));
                      var xr = vt.groups;
                      if (it) {
                        var ur = [ht].concat(Ft, Gt, H);
                        xr !== void 0 && ur.push(xr);
                        var Mt = String(A.apply(void 0, ur));
                      } else
                        Mt = Z(ht, H, Gt, Ft, xr, A);
                      Gt >= Et && (Tt += H.slice(Et, Gt) + Mt, Et = Gt + ht.length);
                    }
                    return Tt + H.slice(Et);
                  }
                ];
                function Z(T, A, W, R, H, it) {
                  var pt = W + T.length, It = R.length, yt = z;
                  return H !== void 0 && (H = l(H), yt = m), S.call(it, yt, function(vt, jt) {
                    var Tt;
                    switch (jt.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return T;
                      case "`":
                        return A.slice(0, W);
                      case "'":
                        return A.slice(pt);
                      case "<":
                        Tt = H[jt.slice(1, -1)];
                        break;
                      default:
                        var Et = +jt;
                        if (Et === 0) return vt;
                        if (Et > It) {
                          var bt = h(Et / 10);
                          return bt === 0 ? vt : bt <= It ? R[bt - 1] === void 0 ? jt.charAt(1) : R[bt - 1] + jt.charAt(1) : vt;
                        }
                        Tt = R[Et - 1];
                    }
                    return Tt === void 0 ? "" : Tt;
                  });
                }
              });
            }
          ),
          /***/
          5692: (
            /***/
            function(a, c, r) {
              var n = r("c430"), s = r("c6cd");
              (a.exports = function(l, d) {
                return s[l] || (s[l] = d !== void 0 ? d : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: n ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "56ef": (
            /***/
            function(a, c, r) {
              var n = r("d066"), s = r("241c"), l = r("7418"), d = r("825a");
              a.exports = n("Reflect", "ownKeys") || function(b) {
                var g = s.f(d(b)), w = l.f;
                return w ? g.concat(w(b)) : g;
              };
            }
          ),
          /***/
          "5a34": (
            /***/
            function(a, c, r) {
              var n = r("44e7");
              a.exports = function(s) {
                if (n(s))
                  throw TypeError("The method doesn't accept regular expressions");
                return s;
              };
            }
          ),
          /***/
          "5c6c": (
            /***/
            function(a, c) {
              a.exports = function(r, n) {
                return {
                  enumerable: !(r & 1),
                  configurable: !(r & 2),
                  writable: !(r & 4),
                  value: n
                };
              };
            }
          ),
          /***/
          "5db7": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("a2bf"), l = r("7b0b"), d = r("50c4"), p = r("1c0b"), b = r("65f0");
              n({ target: "Array", proto: !0 }, {
                flatMap: function(w) {
                  var f = l(this), u = d(f.length), h;
                  return p(w), h = b(f, 0), h.length = s(h, f, f, u, 0, 1, w, arguments.length > 1 ? arguments[1] : void 0), h;
                }
              });
            }
          ),
          /***/
          6547: (
            /***/
            function(a, c, r) {
              var n = r("a691"), s = r("1d80"), l = function(d) {
                return function(p, b) {
                  var g = String(s(p)), w = n(b), f = g.length, u, h;
                  return w < 0 || w >= f ? d ? "" : void 0 : (u = g.charCodeAt(w), u < 55296 || u > 56319 || w + 1 === f || (h = g.charCodeAt(w + 1)) < 56320 || h > 57343 ? d ? g.charAt(w) : u : d ? g.slice(w, w + 2) : (u - 55296 << 10) + (h - 56320) + 65536);
                };
              };
              a.exports = {
                // `String.prototype.codePointAt` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
                codeAt: l(!1),
                // `String.prototype.at` method
                // https://github.com/mathiasbynens/String.prototype.at
                charAt: l(!0)
              };
            }
          ),
          /***/
          "65f0": (
            /***/
            function(a, c, r) {
              var n = r("861d"), s = r("e8b5"), l = r("b622"), d = l("species");
              a.exports = function(p, b) {
                var g;
                return s(p) && (g = p.constructor, typeof g == "function" && (g === Array || s(g.prototype)) ? g = void 0 : n(g) && (g = g[d], g === null && (g = void 0))), new (g === void 0 ? Array : g)(b === 0 ? 0 : b);
              };
            }
          ),
          /***/
          "69f3": (
            /***/
            function(a, c, r) {
              var n = r("7f9a"), s = r("da84"), l = r("861d"), d = r("9112"), p = r("5135"), b = r("f772"), g = r("d012"), w = s.WeakMap, f, u, h, m = function(O) {
                return h(O) ? u(O) : f(O, {});
              }, z = function(O) {
                return function(D) {
                  var F;
                  if (!l(D) || (F = u(D)).type !== O)
                    throw TypeError("Incompatible receiver, " + O + " required");
                  return F;
                };
              };
              if (n) {
                var x = new w(), E = x.get, S = x.has, L = x.set;
                f = function(O, D) {
                  return L.call(x, O, D), D;
                }, u = function(O) {
                  return E.call(x, O) || {};
                }, h = function(O) {
                  return S.call(x, O);
                };
              } else {
                var N = b("state");
                g[N] = !0, f = function(O, D) {
                  return d(O, N, D), D;
                }, u = function(O) {
                  return p(O, N) ? O[N] : {};
                }, h = function(O) {
                  return p(O, N);
                };
              }
              a.exports = {
                set: f,
                get: u,
                has: h,
                enforce: m,
                getterFor: z
              };
            }
          ),
          /***/
          "6eeb": (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("9112"), l = r("5135"), d = r("ce4e"), p = r("8925"), b = r("69f3"), g = b.get, w = b.enforce, f = String(String).split("String");
              (a.exports = function(u, h, m, z) {
                var x = z ? !!z.unsafe : !1, E = z ? !!z.enumerable : !1, S = z ? !!z.noTargetGet : !1;
                if (typeof m == "function" && (typeof h == "string" && !l(m, "name") && s(m, "name", h), w(m).source = f.join(typeof h == "string" ? h : "")), u === n) {
                  E ? u[h] = m : d(h, m);
                  return;
                } else x ? !S && u[h] && (E = !0) : delete u[h];
                E ? u[h] = m : s(u, h, m);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && g(this).source || p(this);
              });
            }
          ),
          /***/
          "6f53": (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("df75"), l = r("fc6a"), d = r("d1e7").f, p = function(b) {
                return function(g) {
                  for (var w = l(g), f = s(w), u = f.length, h = 0, m = [], z; u > h; )
                    z = f[h++], (!n || d.call(w, z)) && m.push(b ? [z, w[z]] : w[z]);
                  return m;
                };
              };
              a.exports = {
                // `Object.entries` method
                // https://tc39.github.io/ecma262/#sec-object.entries
                entries: p(!0),
                // `Object.values` method
                // https://tc39.github.io/ecma262/#sec-object.values
                values: p(!1)
              };
            }
          ),
          /***/
          "73d9": (
            /***/
            function(a, c, r) {
              var n = r("44d2");
              n("flatMap");
            }
          ),
          /***/
          7418: (
            /***/
            function(a, c) {
              c.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "746f": (
            /***/
            function(a, c, r) {
              var n = r("428f"), s = r("5135"), l = r("e538"), d = r("9bf2").f;
              a.exports = function(p) {
                var b = n.Symbol || (n.Symbol = {});
                s(b, p) || d(b, p, {
                  value: l.f(p)
                });
              };
            }
          ),
          /***/
          7839: (
            /***/
            function(a, c) {
              a.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "7b0b": (
            /***/
            function(a, c, r) {
              var n = r("1d80");
              a.exports = function(s) {
                return Object(n(s));
              };
            }
          ),
          /***/
          "7c73": (
            /***/
            function(a, c, r) {
              var n = r("825a"), s = r("37e8"), l = r("7839"), d = r("d012"), p = r("1be4"), b = r("cc12"), g = r("f772"), w = ">", f = "<", u = "prototype", h = "script", m = g("IE_PROTO"), z = function() {
              }, x = function(O) {
                return f + h + w + O + f + "/" + h + w;
              }, E = function(O) {
                O.write(x("")), O.close();
                var D = O.parentWindow.Object;
                return O = null, D;
              }, S = function() {
                var O = b("iframe"), D = "java" + h + ":", F;
                return O.style.display = "none", p.appendChild(O), O.src = String(D), F = O.contentWindow.document, F.open(), F.write(x("document.F=Object")), F.close(), F.F;
              }, L, N = function() {
                try {
                  L = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                N = L ? E(L) : S();
                for (var O = l.length; O--; ) delete N[u][l[O]];
                return N();
              };
              d[m] = !0, a.exports = Object.create || function(D, F) {
                var Z;
                return D !== null ? (z[u] = n(D), Z = new z(), z[u] = null, Z[m] = D) : Z = N(), F === void 0 ? Z : s(Z, F);
              };
            }
          ),
          /***/
          "7dd0": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("9ed3"), l = r("e163"), d = r("d2bb"), p = r("d44e"), b = r("9112"), g = r("6eeb"), w = r("b622"), f = r("c430"), u = r("3f8c"), h = r("ae93"), m = h.IteratorPrototype, z = h.BUGGY_SAFARI_ITERATORS, x = w("iterator"), E = "keys", S = "values", L = "entries", N = function() {
                return this;
              };
              a.exports = function(O, D, F, Z, T, A, W) {
                s(F, D, Z);
                var R = function(bt) {
                  if (bt === T && yt) return yt;
                  if (!z && bt in pt) return pt[bt];
                  switch (bt) {
                    case E:
                      return function() {
                        return new F(this, bt);
                      };
                    case S:
                      return function() {
                        return new F(this, bt);
                      };
                    case L:
                      return function() {
                        return new F(this, bt);
                      };
                  }
                  return function() {
                    return new F(this);
                  };
                }, H = D + " Iterator", it = !1, pt = O.prototype, It = pt[x] || pt["@@iterator"] || T && pt[T], yt = !z && It || R(T), vt = D == "Array" && pt.entries || It, jt, Tt, Et;
                if (vt && (jt = l(vt.call(new O())), m !== Object.prototype && jt.next && (!f && l(jt) !== m && (d ? d(jt, m) : typeof jt[x] != "function" && b(jt, x, N)), p(jt, H, !0, !0), f && (u[H] = N))), T == S && It && It.name !== S && (it = !0, yt = function() {
                  return It.call(this);
                }), (!f || W) && pt[x] !== yt && b(pt, x, yt), u[D] = yt, T)
                  if (Tt = {
                    values: R(S),
                    keys: A ? yt : R(E),
                    entries: R(L)
                  }, W) for (Et in Tt)
                    (z || it || !(Et in pt)) && g(pt, Et, Tt[Et]);
                  else n({ target: D, proto: !0, forced: z || it }, Tt);
                return Tt;
              };
            }
          ),
          /***/
          "7f9a": (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("8925"), l = n.WeakMap;
              a.exports = typeof l == "function" && /native code/.test(s(l));
            }
          ),
          /***/
          "825a": (
            /***/
            function(a, c, r) {
              var n = r("861d");
              a.exports = function(s) {
                if (!n(s))
                  throw TypeError(String(s) + " is not an object");
                return s;
              };
            }
          ),
          /***/
          "83ab": (
            /***/
            function(a, c, r) {
              var n = r("d039");
              a.exports = !n(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            }
          ),
          /***/
          8418: (
            /***/
            function(a, c, r) {
              var n = r("c04e"), s = r("9bf2"), l = r("5c6c");
              a.exports = function(d, p, b) {
                var g = n(p);
                g in d ? s.f(d, g, l(0, b)) : d[g] = b;
              };
            }
          ),
          /***/
          "861d": (
            /***/
            function(a, c) {
              a.exports = function(r) {
                return typeof r == "object" ? r !== null : typeof r == "function";
              };
            }
          ),
          /***/
          8875: (
            /***/
            function(a, c, r) {
              var n, s, l;
              (function(d, p) {
                s = [], n = p, l = typeof n == "function" ? n.apply(c, s) : n, l !== void 0 && (a.exports = l);
              })(typeof self < "u" ? self : this, function() {
                function d() {
                  var p = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!p && "currentScript" in document && document.currentScript || p && p.get !== d && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (L) {
                    var b = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, g = /@([^@]*):(\d+):(\d+)\s*$/ig, w = b.exec(L.stack) || g.exec(L.stack), f = w && w[1] || !1, u = w && w[2] || !1, h = document.location.href.replace(document.location.hash, ""), m, z, x, E = document.getElementsByTagName("script");
                    f === h && (m = document.documentElement.outerHTML, z = new RegExp("(?:[^\\n]+?\\n){0," + (u - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), x = m.replace(z, "$1").trim());
                    for (var S = 0; S < E.length; S++)
                      if (E[S].readyState === "interactive" || E[S].src === f || f === h && E[S].innerHTML && E[S].innerHTML.trim() === x)
                        return E[S];
                    return null;
                  }
                }
                return d;
              });
            }
          ),
          /***/
          8925: (
            /***/
            function(a, c, r) {
              var n = r("c6cd"), s = Function.toString;
              typeof n.inspectSource != "function" && (n.inspectSource = function(l) {
                return s.call(l);
              }), a.exports = n.inspectSource;
            }
          ),
          /***/
          "8aa5": (
            /***/
            function(a, c, r) {
              var n = r("6547").charAt;
              a.exports = function(s, l, d) {
                return l + (d ? n(s, l).length : 1);
              };
            }
          ),
          /***/
          "8bbf": (
            /***/
            function(a, c) {
              a.exports = o;
            }
          ),
          /***/
          "90e3": (
            /***/
            function(a, c) {
              var r = 0, n = Math.random();
              a.exports = function(s) {
                return "Symbol(" + String(s === void 0 ? "" : s) + ")_" + (++r + n).toString(36);
              };
            }
          ),
          /***/
          9112: (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("9bf2"), l = r("5c6c");
              a.exports = n ? function(d, p, b) {
                return s.f(d, p, l(1, b));
              } : function(d, p, b) {
                return d[p] = b, d;
              };
            }
          ),
          /***/
          9263: (
            /***/
            function(a, c, r) {
              var n = r("ad6d"), s = r("9f7f"), l = RegExp.prototype.exec, d = String.prototype.replace, p = l, b = function() {
                var u = /a/, h = /b*/g;
                return l.call(u, "a"), l.call(h, "a"), u.lastIndex !== 0 || h.lastIndex !== 0;
              }(), g = s.UNSUPPORTED_Y || s.BROKEN_CARET, w = /()??/.exec("")[1] !== void 0, f = b || w || g;
              f && (p = function(h) {
                var m = this, z, x, E, S, L = g && m.sticky, N = n.call(m), O = m.source, D = 0, F = h;
                return L && (N = N.replace("y", ""), N.indexOf("g") === -1 && (N += "g"), F = String(h).slice(m.lastIndex), m.lastIndex > 0 && (!m.multiline || m.multiline && h[m.lastIndex - 1] !== `
`) && (O = "(?: " + O + ")", F = " " + F, D++), x = new RegExp("^(?:" + O + ")", N)), w && (x = new RegExp("^" + O + "$(?!\\s)", N)), b && (z = m.lastIndex), E = l.call(L ? x : m, F), L ? E ? (E.input = E.input.slice(D), E[0] = E[0].slice(D), E.index = m.lastIndex, m.lastIndex += E[0].length) : m.lastIndex = 0 : b && E && (m.lastIndex = m.global ? E.index + E[0].length : z), w && E && E.length > 1 && d.call(E[0], x, function() {
                  for (S = 1; S < arguments.length - 2; S++)
                    arguments[S] === void 0 && (E[S] = void 0);
                }), E;
              }), a.exports = p;
            }
          ),
          /***/
          "94ca": (
            /***/
            function(a, c, r) {
              var n = r("d039"), s = /#|\.prototype\./, l = function(w, f) {
                var u = p[d(w)];
                return u == g ? !0 : u == b ? !1 : typeof f == "function" ? n(f) : !!f;
              }, d = l.normalize = function(w) {
                return String(w).replace(s, ".").toLowerCase();
              }, p = l.data = {}, b = l.NATIVE = "N", g = l.POLYFILL = "P";
              a.exports = l;
            }
          ),
          /***/
          "99af": (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("d039"), l = r("e8b5"), d = r("861d"), p = r("7b0b"), b = r("50c4"), g = r("8418"), w = r("65f0"), f = r("1dde"), u = r("b622"), h = r("2d00"), m = u("isConcatSpreadable"), z = 9007199254740991, x = "Maximum allowed index exceeded", E = h >= 51 || !s(function() {
                var O = [];
                return O[m] = !1, O.concat()[0] !== O;
              }), S = f("concat"), L = function(O) {
                if (!d(O)) return !1;
                var D = O[m];
                return D !== void 0 ? !!D : l(O);
              }, N = !E || !S;
              n({ target: "Array", proto: !0, forced: N }, {
                concat: function(D) {
                  var F = p(this), Z = w(F, 0), T = 0, A, W, R, H, it;
                  for (A = -1, R = arguments.length; A < R; A++)
                    if (it = A === -1 ? F : arguments[A], L(it)) {
                      if (H = b(it.length), T + H > z) throw TypeError(x);
                      for (W = 0; W < H; W++, T++) W in it && g(Z, T, it[W]);
                    } else {
                      if (T >= z) throw TypeError(x);
                      g(Z, T++, it);
                    }
                  return Z.length = T, Z;
                }
              });
            }
          ),
          /***/
          "9bdd": (
            /***/
            function(a, c, r) {
              var n = r("825a");
              a.exports = function(s, l, d, p) {
                try {
                  return p ? l(n(d)[0], d[1]) : l(d);
                } catch (g) {
                  var b = s.return;
                  throw b !== void 0 && n(b.call(s)), g;
                }
              };
            }
          ),
          /***/
          "9bf2": (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("0cfb"), l = r("825a"), d = r("c04e"), p = Object.defineProperty;
              c.f = n ? p : function(g, w, f) {
                if (l(g), w = d(w, !0), l(f), s) try {
                  return p(g, w, f);
                } catch {
                }
                if ("get" in f || "set" in f) throw TypeError("Accessors not supported");
                return "value" in f && (g[w] = f.value), g;
              };
            }
          ),
          /***/
          "9ed3": (
            /***/
            function(a, c, r) {
              var n = r("ae93").IteratorPrototype, s = r("7c73"), l = r("5c6c"), d = r("d44e"), p = r("3f8c"), b = function() {
                return this;
              };
              a.exports = function(g, w, f) {
                var u = w + " Iterator";
                return g.prototype = s(n, { next: l(1, f) }), d(g, u, !1, !0), p[u] = b, g;
              };
            }
          ),
          /***/
          "9f7f": (
            /***/
            function(a, c, r) {
              var n = r("d039");
              function s(l, d) {
                return RegExp(l, d);
              }
              c.UNSUPPORTED_Y = n(function() {
                var l = s("a", "y");
                return l.lastIndex = 2, l.exec("abcd") != null;
              }), c.BROKEN_CARET = n(function() {
                var l = s("^r", "gy");
                return l.lastIndex = 2, l.exec("str") != null;
              });
            }
          ),
          /***/
          a2bf: (
            /***/
            function(a, c, r) {
              var n = r("e8b5"), s = r("50c4"), l = r("0366"), d = function(p, b, g, w, f, u, h, m) {
                for (var z = f, x = 0, E = h ? l(h, m, 3) : !1, S; x < w; ) {
                  if (x in g) {
                    if (S = E ? E(g[x], x, b) : g[x], u > 0 && n(S))
                      z = d(p, b, S, s(S.length), z, u - 1) - 1;
                    else {
                      if (z >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                      p[z] = S;
                    }
                    z++;
                  }
                  x++;
                }
                return z;
              };
              a.exports = d;
            }
          ),
          /***/
          a352: (
            /***/
            function(a, c) {
              a.exports = i;
            }
          ),
          /***/
          a434: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("23cb"), l = r("a691"), d = r("50c4"), p = r("7b0b"), b = r("65f0"), g = r("8418"), w = r("1dde"), f = r("ae40"), u = w("splice"), h = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), m = Math.max, z = Math.min, x = 9007199254740991, E = "Maximum allowed length exceeded";
              n({ target: "Array", proto: !0, forced: !u || !h }, {
                splice: function(L, N) {
                  var O = p(this), D = d(O.length), F = s(L, D), Z = arguments.length, T, A, W, R, H, it;
                  if (Z === 0 ? T = A = 0 : Z === 1 ? (T = 0, A = D - F) : (T = Z - 2, A = z(m(l(N), 0), D - F)), D + T - A > x)
                    throw TypeError(E);
                  for (W = b(O, A), R = 0; R < A; R++)
                    H = F + R, H in O && g(W, R, O[H]);
                  if (W.length = A, T < A) {
                    for (R = F; R < D - A; R++)
                      H = R + A, it = R + T, H in O ? O[it] = O[H] : delete O[it];
                    for (R = D; R > D - A + T; R--) delete O[R - 1];
                  } else if (T > A)
                    for (R = D - A; R > F; R--)
                      H = R + A - 1, it = R + T - 1, H in O ? O[it] = O[H] : delete O[it];
                  for (R = 0; R < T; R++)
                    O[R + F] = arguments[R + 2];
                  return O.length = D - A + T, W;
                }
              });
            }
          ),
          /***/
          a4d3: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("da84"), l = r("d066"), d = r("c430"), p = r("83ab"), b = r("4930"), g = r("fdbf"), w = r("d039"), f = r("5135"), u = r("e8b5"), h = r("861d"), m = r("825a"), z = r("7b0b"), x = r("fc6a"), E = r("c04e"), S = r("5c6c"), L = r("7c73"), N = r("df75"), O = r("241c"), D = r("057f"), F = r("7418"), Z = r("06cf"), T = r("9bf2"), A = r("d1e7"), W = r("9112"), R = r("6eeb"), H = r("5692"), it = r("f772"), pt = r("d012"), It = r("90e3"), yt = r("b622"), vt = r("e538"), jt = r("746f"), Tt = r("d44e"), Et = r("69f3"), bt = r("b727").forEach, ht = it("hidden"), Gt = "Symbol", Ft = "prototype", gr = yt("toPrimitive"), xr = Et.set, ur = Et.getterFor(Gt), Mt = Object[Ft], At = s.Symbol, kr = l("JSON", "stringify"), ir = Z.f, nr = T.f, ve = D.f, eo = A.f, _t = H("symbols"), fr = H("op-symbols"), Dr = H("string-to-symbol-registry"), Xr = H("symbol-to-string-registry"), Vr = H("wks"), Gr = s.QObject, Kr = !Gr || !Gr[Ft] || !Gr[Ft].findChild, Wr = p && w(function() {
                return L(nr({}, "a", {
                  get: function() {
                    return nr(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(K, U, X) {
                var et = ir(Mt, U);
                et && delete Mt[U], nr(K, U, X), et && K !== Mt && nr(Mt, U, et);
              } : nr, Zr = function(K, U) {
                var X = _t[K] = L(At[Ft]);
                return xr(X, {
                  type: Gt,
                  tag: K,
                  description: U
                }), p || (X.description = U), X;
              }, v = g ? function(K) {
                return typeof K == "symbol";
              } : function(K) {
                return Object(K) instanceof At;
              }, y = function(U, X, et) {
                U === Mt && y(fr, X, et), m(U);
                var at = E(X, !0);
                return m(et), f(_t, at) ? (et.enumerable ? (f(U, ht) && U[ht][at] && (U[ht][at] = !1), et = L(et, { enumerable: S(0, !1) })) : (f(U, ht) || nr(U, ht, S(1, {})), U[ht][at] = !0), Wr(U, at, et)) : nr(U, at, et);
              }, C = function(U, X) {
                m(U);
                var et = x(X), at = N(et).concat(nt(et));
                return bt(at, function(Yt) {
                  (!p || B.call(et, Yt)) && y(U, Yt, et[Yt]);
                }), U;
              }, j = function(U, X) {
                return X === void 0 ? L(U) : C(L(U), X);
              }, B = function(U) {
                var X = E(U, !0), et = eo.call(this, X);
                return this === Mt && f(_t, X) && !f(fr, X) ? !1 : et || !f(this, X) || !f(_t, X) || f(this, ht) && this[ht][X] ? et : !0;
              }, G = function(U, X) {
                var et = x(U), at = E(X, !0);
                if (!(et === Mt && f(_t, at) && !f(fr, at))) {
                  var Yt = ir(et, at);
                  return Yt && f(_t, at) && !(f(et, ht) && et[ht][at]) && (Yt.enumerable = !0), Yt;
                }
              }, _ = function(U) {
                var X = ve(x(U)), et = [];
                return bt(X, function(at) {
                  !f(_t, at) && !f(pt, at) && et.push(at);
                }), et;
              }, nt = function(U) {
                var X = U === Mt, et = ve(X ? fr : x(U)), at = [];
                return bt(et, function(Yt) {
                  f(_t, Yt) && (!X || f(Mt, Yt)) && at.push(_t[Yt]);
                }), at;
              };
              if (b || (At = function() {
                if (this instanceof At) throw TypeError("Symbol is not a constructor");
                var U = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), X = It(U), et = function(at) {
                  this === Mt && et.call(fr, at), f(this, ht) && f(this[ht], X) && (this[ht][X] = !1), Wr(this, X, S(1, at));
                };
                return p && Kr && Wr(Mt, X, { configurable: !0, set: et }), Zr(X, U);
              }, R(At[Ft], "toString", function() {
                return ur(this).tag;
              }), R(At, "withoutSetter", function(K) {
                return Zr(It(K), K);
              }), A.f = B, T.f = y, Z.f = G, O.f = D.f = _, F.f = nt, vt.f = function(K) {
                return Zr(yt(K), K);
              }, p && (nr(At[Ft], "description", {
                configurable: !0,
                get: function() {
                  return ur(this).description;
                }
              }), d || R(Mt, "propertyIsEnumerable", B, { unsafe: !0 }))), n({ global: !0, wrap: !0, forced: !b, sham: !b }, {
                Symbol: At
              }), bt(N(Vr), function(K) {
                jt(K);
              }), n({ target: Gt, stat: !0, forced: !b }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(K) {
                  var U = String(K);
                  if (f(Dr, U)) return Dr[U];
                  var X = At(U);
                  return Dr[U] = X, Xr[X] = U, X;
                },
                // `Symbol.keyFor` method
                // https://tc39.github.io/ecma262/#sec-symbol.keyfor
                keyFor: function(U) {
                  if (!v(U)) throw TypeError(U + " is not a symbol");
                  if (f(Xr, U)) return Xr[U];
                },
                useSetter: function() {
                  Kr = !0;
                },
                useSimple: function() {
                  Kr = !1;
                }
              }), n({ target: "Object", stat: !0, forced: !b, sham: !p }, {
                // `Object.create` method
                // https://tc39.github.io/ecma262/#sec-object.create
                create: j,
                // `Object.defineProperty` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperty
                defineProperty: y,
                // `Object.defineProperties` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperties
                defineProperties: C,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: G
              }), n({ target: "Object", stat: !0, forced: !b }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: _,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: nt
              }), n({ target: "Object", stat: !0, forced: w(function() {
                F.f(1);
              }) }, {
                getOwnPropertySymbols: function(U) {
                  return F.f(z(U));
                }
              }), kr) {
                var St = !b || w(function() {
                  var K = At();
                  return kr([K]) != "[null]" || kr({ a: K }) != "{}" || kr(Object(K)) != "{}";
                });
                n({ target: "JSON", stat: !0, forced: St }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(U, X, et) {
                    for (var at = [U], Yt = 1, oo; arguments.length > Yt; ) at.push(arguments[Yt++]);
                    if (oo = X, !(!h(X) && U === void 0 || v(U)))
                      return u(X) || (X = function(oi, xe) {
                        if (typeof oo == "function" && (xe = oo.call(this, oi, xe)), !v(xe)) return xe;
                      }), at[1] = X, kr.apply(null, at);
                  }
                });
              }
              At[Ft][gr] || W(At[Ft], gr, At[Ft].valueOf), Tt(At, Gt), pt[ht] = !0;
            }
          ),
          /***/
          a630: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("4df4"), l = r("1c7e"), d = !l(function(p) {
                Array.from(p);
              });
              n({ target: "Array", stat: !0, forced: d }, {
                from: s
              });
            }
          ),
          /***/
          a640: (
            /***/
            function(a, c, r) {
              var n = r("d039");
              a.exports = function(s, l) {
                var d = [][s];
                return !!d && n(function() {
                  d.call(null, l || function() {
                    throw 1;
                  }, 1);
                });
              };
            }
          ),
          /***/
          a691: (
            /***/
            function(a, c) {
              var r = Math.ceil, n = Math.floor;
              a.exports = function(s) {
                return isNaN(s = +s) ? 0 : (s > 0 ? n : r)(s);
              };
            }
          ),
          /***/
          ab13: (
            /***/
            function(a, c, r) {
              var n = r("b622"), s = n("match");
              a.exports = function(l) {
                var d = /./;
                try {
                  "/./"[l](d);
                } catch {
                  try {
                    return d[s] = !1, "/./"[l](d);
                  } catch {
                  }
                }
                return !1;
              };
            }
          ),
          /***/
          ac1f: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("9263");
              n({ target: "RegExp", proto: !0, forced: /./.exec !== s }, {
                exec: s
              });
            }
          ),
          /***/
          ad6d: (
            /***/
            function(a, c, r) {
              var n = r("825a");
              a.exports = function() {
                var s = n(this), l = "";
                return s.global && (l += "g"), s.ignoreCase && (l += "i"), s.multiline && (l += "m"), s.dotAll && (l += "s"), s.unicode && (l += "u"), s.sticky && (l += "y"), l;
              };
            }
          ),
          /***/
          ae40: (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("d039"), l = r("5135"), d = Object.defineProperty, p = {}, b = function(g) {
                throw g;
              };
              a.exports = function(g, w) {
                if (l(p, g)) return p[g];
                w || (w = {});
                var f = [][g], u = l(w, "ACCESSORS") ? w.ACCESSORS : !1, h = l(w, 0) ? w[0] : b, m = l(w, 1) ? w[1] : void 0;
                return p[g] = !!f && !s(function() {
                  if (u && !n) return !0;
                  var z = { length: -1 };
                  u ? d(z, 1, { enumerable: !0, get: b }) : z[1] = 1, f.call(z, h, m);
                });
              };
            }
          ),
          /***/
          ae93: (
            /***/
            function(a, c, r) {
              var n = r("e163"), s = r("9112"), l = r("5135"), d = r("b622"), p = r("c430"), b = d("iterator"), g = !1, w = function() {
                return this;
              }, f, u, h;
              [].keys && (h = [].keys(), "next" in h ? (u = n(n(h)), u !== Object.prototype && (f = u)) : g = !0), f == null && (f = {}), !p && !l(f, b) && s(f, b, w), a.exports = {
                IteratorPrototype: f,
                BUGGY_SAFARI_ITERATORS: g
              };
            }
          ),
          /***/
          b041: (
            /***/
            function(a, c, r) {
              var n = r("00ee"), s = r("f5df");
              a.exports = n ? {}.toString : function() {
                return "[object " + s(this) + "]";
              };
            }
          ),
          /***/
          b0c0: (
            /***/
            function(a, c, r) {
              var n = r("83ab"), s = r("9bf2").f, l = Function.prototype, d = l.toString, p = /^\s*function ([^ (]*)/, b = "name";
              n && !(b in l) && s(l, b, {
                configurable: !0,
                get: function() {
                  try {
                    return d.call(this).match(p)[1];
                  } catch {
                    return "";
                  }
                }
              });
            }
          ),
          /***/
          b622: (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("5692"), l = r("5135"), d = r("90e3"), p = r("4930"), b = r("fdbf"), g = s("wks"), w = n.Symbol, f = b ? w : w && w.withoutSetter || d;
              a.exports = function(u) {
                return l(g, u) || (p && l(w, u) ? g[u] = w[u] : g[u] = f("Symbol." + u)), g[u];
              };
            }
          ),
          /***/
          b64b: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("7b0b"), l = r("df75"), d = r("d039"), p = d(function() {
                l(1);
              });
              n({ target: "Object", stat: !0, forced: p }, {
                keys: function(g) {
                  return l(s(g));
                }
              });
            }
          ),
          /***/
          b727: (
            /***/
            function(a, c, r) {
              var n = r("0366"), s = r("44ad"), l = r("7b0b"), d = r("50c4"), p = r("65f0"), b = [].push, g = function(w) {
                var f = w == 1, u = w == 2, h = w == 3, m = w == 4, z = w == 6, x = w == 5 || z;
                return function(E, S, L, N) {
                  for (var O = l(E), D = s(O), F = n(S, L, 3), Z = d(D.length), T = 0, A = N || p, W = f ? A(E, Z) : u ? A(E, 0) : void 0, R, H; Z > T; T++) if ((x || T in D) && (R = D[T], H = F(R, T, O), w)) {
                    if (f) W[T] = H;
                    else if (H) switch (w) {
                      case 3:
                        return !0;
                      // some
                      case 5:
                        return R;
                      // find
                      case 6:
                        return T;
                      // findIndex
                      case 2:
                        b.call(W, R);
                    }
                    else if (m) return !1;
                  }
                  return z ? -1 : h || m ? m : W;
                };
              };
              a.exports = {
                // `Array.prototype.forEach` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
                forEach: g(0),
                // `Array.prototype.map` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.map
                map: g(1),
                // `Array.prototype.filter` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.filter
                filter: g(2),
                // `Array.prototype.some` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.some
                some: g(3),
                // `Array.prototype.every` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.every
                every: g(4),
                // `Array.prototype.find` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.find
                find: g(5),
                // `Array.prototype.findIndex` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
                findIndex: g(6)
              };
            }
          ),
          /***/
          c04e: (
            /***/
            function(a, c, r) {
              var n = r("861d");
              a.exports = function(s, l) {
                if (!n(s)) return s;
                var d, p;
                if (l && typeof (d = s.toString) == "function" && !n(p = d.call(s)) || typeof (d = s.valueOf) == "function" && !n(p = d.call(s)) || !l && typeof (d = s.toString) == "function" && !n(p = d.call(s))) return p;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          c430: (
            /***/
            function(a, c) {
              a.exports = !1;
            }
          ),
          /***/
          c6b6: (
            /***/
            function(a, c) {
              var r = {}.toString;
              a.exports = function(n) {
                return r.call(n).slice(8, -1);
              };
            }
          ),
          /***/
          c6cd: (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("ce4e"), l = "__core-js_shared__", d = n[l] || s(l, {});
              a.exports = d;
            }
          ),
          /***/
          c740: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("b727").findIndex, l = r("44d2"), d = r("ae40"), p = "findIndex", b = !0, g = d(p);
              p in [] && Array(1)[p](function() {
                b = !1;
              }), n({ target: "Array", proto: !0, forced: b || !g }, {
                findIndex: function(f) {
                  return s(this, f, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), l(p);
            }
          ),
          /***/
          c8ba: (
            /***/
            function(a, c) {
              var r;
              r = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                r = r || new Function("return this")();
              } catch {
                typeof window == "object" && (r = window);
              }
              a.exports = r;
            }
          ),
          /***/
          c975: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("4d64").indexOf, l = r("a640"), d = r("ae40"), p = [].indexOf, b = !!p && 1 / [1].indexOf(1, -0) < 0, g = l("indexOf"), w = d("indexOf", { ACCESSORS: !0, 1: 0 });
              n({ target: "Array", proto: !0, forced: b || !g || !w }, {
                indexOf: function(u) {
                  return b ? p.apply(this, arguments) || 0 : s(this, u, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          ca84: (
            /***/
            function(a, c, r) {
              var n = r("5135"), s = r("fc6a"), l = r("4d64").indexOf, d = r("d012");
              a.exports = function(p, b) {
                var g = s(p), w = 0, f = [], u;
                for (u in g) !n(d, u) && n(g, u) && f.push(u);
                for (; b.length > w; ) n(g, u = b[w++]) && (~l(f, u) || f.push(u));
                return f;
              };
            }
          ),
          /***/
          caad: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("4d64").includes, l = r("44d2"), d = r("ae40"), p = d("indexOf", { ACCESSORS: !0, 1: 0 });
              n({ target: "Array", proto: !0, forced: !p }, {
                includes: function(g) {
                  return s(this, g, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), l("includes");
            }
          ),
          /***/
          cc12: (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("861d"), l = n.document, d = s(l) && s(l.createElement);
              a.exports = function(p) {
                return d ? l.createElement(p) : {};
              };
            }
          ),
          /***/
          ce4e: (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("9112");
              a.exports = function(l, d) {
                try {
                  s(n, l, d);
                } catch {
                  n[l] = d;
                }
                return d;
              };
            }
          ),
          /***/
          d012: (
            /***/
            function(a, c) {
              a.exports = {};
            }
          ),
          /***/
          d039: (
            /***/
            function(a, c) {
              a.exports = function(r) {
                try {
                  return !!r();
                } catch {
                  return !0;
                }
              };
            }
          ),
          /***/
          d066: (
            /***/
            function(a, c, r) {
              var n = r("428f"), s = r("da84"), l = function(d) {
                return typeof d == "function" ? d : void 0;
              };
              a.exports = function(d, p) {
                return arguments.length < 2 ? l(n[d]) || l(s[d]) : n[d] && n[d][p] || s[d] && s[d][p];
              };
            }
          ),
          /***/
          d1e7: (
            /***/
            function(a, c, r) {
              var n = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, l = s && !n.call({ 1: 2 }, 1);
              c.f = l ? function(p) {
                var b = s(this, p);
                return !!b && b.enumerable;
              } : n;
            }
          ),
          /***/
          d28b: (
            /***/
            function(a, c, r) {
              var n = r("746f");
              n("iterator");
            }
          ),
          /***/
          d2bb: (
            /***/
            function(a, c, r) {
              var n = r("825a"), s = r("3bbe");
              a.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var l = !1, d = {}, p;
                try {
                  p = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, p.call(d, []), l = d instanceof Array;
                } catch {
                }
                return function(g, w) {
                  return n(g), s(w), l ? p.call(g, w) : g.__proto__ = w, g;
                };
              }() : void 0);
            }
          ),
          /***/
          d3b7: (
            /***/
            function(a, c, r) {
              var n = r("00ee"), s = r("6eeb"), l = r("b041");
              n || s(Object.prototype, "toString", l, { unsafe: !0 });
            }
          ),
          /***/
          d44e: (
            /***/
            function(a, c, r) {
              var n = r("9bf2").f, s = r("5135"), l = r("b622"), d = l("toStringTag");
              a.exports = function(p, b, g) {
                p && !s(p = g ? p : p.prototype, d) && n(p, d, { configurable: !0, value: b });
              };
            }
          ),
          /***/
          d58f: (
            /***/
            function(a, c, r) {
              var n = r("1c0b"), s = r("7b0b"), l = r("44ad"), d = r("50c4"), p = function(b) {
                return function(g, w, f, u) {
                  n(w);
                  var h = s(g), m = l(h), z = d(h.length), x = b ? z - 1 : 0, E = b ? -1 : 1;
                  if (f < 2) for (; ; ) {
                    if (x in m) {
                      u = m[x], x += E;
                      break;
                    }
                    if (x += E, b ? x < 0 : z <= x)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; b ? x >= 0 : z > x; x += E) x in m && (u = w(u, m[x], x, h));
                  return u;
                };
              };
              a.exports = {
                // `Array.prototype.reduce` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
                left: p(!1),
                // `Array.prototype.reduceRight` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
                right: p(!0)
              };
            }
          ),
          /***/
          d784: (
            /***/
            function(a, c, r) {
              r("ac1f");
              var n = r("6eeb"), s = r("d039"), l = r("b622"), d = r("9263"), p = r("9112"), b = l("species"), g = !s(function() {
                var m = /./;
                return m.exec = function() {
                  var z = [];
                  return z.groups = { a: "7" }, z;
                }, "".replace(m, "$<a>") !== "7";
              }), w = function() {
                return "a".replace(/./, "$0") === "$0";
              }(), f = l("replace"), u = function() {
                return /./[f] ? /./[f]("a", "$0") === "" : !1;
              }(), h = !s(function() {
                var m = /(?:)/, z = m.exec;
                m.exec = function() {
                  return z.apply(this, arguments);
                };
                var x = "ab".split(m);
                return x.length !== 2 || x[0] !== "a" || x[1] !== "b";
              });
              a.exports = function(m, z, x, E) {
                var S = l(m), L = !s(function() {
                  var T = {};
                  return T[S] = function() {
                    return 7;
                  }, ""[m](T) != 7;
                }), N = L && !s(function() {
                  var T = !1, A = /a/;
                  return m === "split" && (A = {}, A.constructor = {}, A.constructor[b] = function() {
                    return A;
                  }, A.flags = "", A[S] = /./[S]), A.exec = function() {
                    return T = !0, null;
                  }, A[S](""), !T;
                });
                if (!L || !N || m === "replace" && !(g && w && !u) || m === "split" && !h) {
                  var O = /./[S], D = x(S, ""[m], function(T, A, W, R, H) {
                    return A.exec === d ? L && !H ? { done: !0, value: O.call(A, W, R) } : { done: !0, value: T.call(W, A, R) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: w,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: u
                  }), F = D[0], Z = D[1];
                  n(String.prototype, m, F), n(
                    RegExp.prototype,
                    S,
                    z == 2 ? function(T, A) {
                      return Z.call(T, this, A);
                    } : function(T) {
                      return Z.call(T, this);
                    }
                  );
                }
                E && p(RegExp.prototype[S], "sham", !0);
              };
            }
          ),
          /***/
          d81d: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("b727").map, l = r("1dde"), d = r("ae40"), p = l("map"), b = d("map");
              n({ target: "Array", proto: !0, forced: !p || !b }, {
                map: function(w) {
                  return s(this, w, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          da84: (
            /***/
            function(a, c, r) {
              (function(n) {
                var s = function(l) {
                  return l && l.Math == Math && l;
                };
                a.exports = // eslint-disable-next-line no-undef
                s(typeof globalThis == "object" && globalThis) || s(typeof window == "object" && window) || s(typeof self == "object" && self) || s(typeof n == "object" && n) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, r("c8ba"));
            }
          ),
          /***/
          dbb4: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("83ab"), l = r("56ef"), d = r("fc6a"), p = r("06cf"), b = r("8418");
              n({ target: "Object", stat: !0, sham: !s }, {
                getOwnPropertyDescriptors: function(w) {
                  for (var f = d(w), u = p.f, h = l(f), m = {}, z = 0, x, E; h.length > z; )
                    E = u(f, x = h[z++]), E !== void 0 && b(m, x, E);
                  return m;
                }
              });
            }
          ),
          /***/
          dbf1: (
            /***/
            function(a, c, r) {
              (function(n) {
                r.d(c, "a", function() {
                  return l;
                });
                function s() {
                  return typeof window < "u" ? window.console : n.console;
                }
                var l = s();
              }).call(this, r("c8ba"));
            }
          ),
          /***/
          ddb0: (
            /***/
            function(a, c, r) {
              var n = r("da84"), s = r("fdbc"), l = r("e260"), d = r("9112"), p = r("b622"), b = p("iterator"), g = p("toStringTag"), w = l.values;
              for (var f in s) {
                var u = n[f], h = u && u.prototype;
                if (h) {
                  if (h[b] !== w) try {
                    d(h, b, w);
                  } catch {
                    h[b] = w;
                  }
                  if (h[g] || d(h, g, f), s[f]) {
                    for (var m in l)
                      if (h[m] !== l[m]) try {
                        d(h, m, l[m]);
                      } catch {
                        h[m] = l[m];
                      }
                  }
                }
              }
            }
          ),
          /***/
          df75: (
            /***/
            function(a, c, r) {
              var n = r("ca84"), s = r("7839");
              a.exports = Object.keys || function(d) {
                return n(d, s);
              };
            }
          ),
          /***/
          e01a: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("83ab"), l = r("da84"), d = r("5135"), p = r("861d"), b = r("9bf2").f, g = r("e893"), w = l.Symbol;
              if (s && typeof w == "function" && (!("description" in w.prototype) || // Safari 12 bug
              w().description !== void 0)) {
                var f = {}, u = function() {
                  var S = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), L = this instanceof u ? new w(S) : S === void 0 ? w() : w(S);
                  return S === "" && (f[L] = !0), L;
                };
                g(u, w);
                var h = u.prototype = w.prototype;
                h.constructor = u;
                var m = h.toString, z = String(w("test")) == "Symbol(test)", x = /^Symbol\((.*)\)[^)]+$/;
                b(h, "description", {
                  configurable: !0,
                  get: function() {
                    var S = p(this) ? this.valueOf() : this, L = m.call(S);
                    if (d(f, S)) return "";
                    var N = z ? L.slice(7, -1) : L.replace(x, "$1");
                    return N === "" ? void 0 : N;
                  }
                }), n({ global: !0, forced: !0 }, {
                  Symbol: u
                });
              }
            }
          ),
          /***/
          e163: (
            /***/
            function(a, c, r) {
              var n = r("5135"), s = r("7b0b"), l = r("f772"), d = r("e177"), p = l("IE_PROTO"), b = Object.prototype;
              a.exports = d ? Object.getPrototypeOf : function(g) {
                return g = s(g), n(g, p) ? g[p] : typeof g.constructor == "function" && g instanceof g.constructor ? g.constructor.prototype : g instanceof Object ? b : null;
              };
            }
          ),
          /***/
          e177: (
            /***/
            function(a, c, r) {
              var n = r("d039");
              a.exports = !n(function() {
                function s() {
                }
                return s.prototype.constructor = null, Object.getPrototypeOf(new s()) !== s.prototype;
              });
            }
          ),
          /***/
          e260: (
            /***/
            function(a, c, r) {
              var n = r("fc6a"), s = r("44d2"), l = r("3f8c"), d = r("69f3"), p = r("7dd0"), b = "Array Iterator", g = d.set, w = d.getterFor(b);
              a.exports = p(Array, "Array", function(f, u) {
                g(this, {
                  type: b,
                  target: n(f),
                  // target
                  index: 0,
                  // next index
                  kind: u
                  // kind
                });
              }, function() {
                var f = w(this), u = f.target, h = f.kind, m = f.index++;
                return !u || m >= u.length ? (f.target = void 0, { value: void 0, done: !0 }) : h == "keys" ? { value: m, done: !1 } : h == "values" ? { value: u[m], done: !1 } : { value: [m, u[m]], done: !1 };
              }, "values"), l.Arguments = l.Array, s("keys"), s("values"), s("entries");
            }
          ),
          /***/
          e439: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("d039"), l = r("fc6a"), d = r("06cf").f, p = r("83ab"), b = s(function() {
                d(1);
              }), g = !p || b;
              n({ target: "Object", stat: !0, forced: g, sham: !p }, {
                getOwnPropertyDescriptor: function(f, u) {
                  return d(l(f), u);
                }
              });
            }
          ),
          /***/
          e538: (
            /***/
            function(a, c, r) {
              var n = r("b622");
              c.f = n;
            }
          ),
          /***/
          e893: (
            /***/
            function(a, c, r) {
              var n = r("5135"), s = r("56ef"), l = r("06cf"), d = r("9bf2");
              a.exports = function(p, b) {
                for (var g = s(b), w = d.f, f = l.f, u = 0; u < g.length; u++) {
                  var h = g[u];
                  n(p, h) || w(p, h, f(b, h));
                }
              };
            }
          ),
          /***/
          e8b5: (
            /***/
            function(a, c, r) {
              var n = r("c6b6");
              a.exports = Array.isArray || function(l) {
                return n(l) == "Array";
              };
            }
          ),
          /***/
          e95a: (
            /***/
            function(a, c, r) {
              var n = r("b622"), s = r("3f8c"), l = n("iterator"), d = Array.prototype;
              a.exports = function(p) {
                return p !== void 0 && (s.Array === p || d[l] === p);
              };
            }
          ),
          /***/
          f5df: (
            /***/
            function(a, c, r) {
              var n = r("00ee"), s = r("c6b6"), l = r("b622"), d = l("toStringTag"), p = s(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", b = function(g, w) {
                try {
                  return g[w];
                } catch {
                }
              };
              a.exports = n ? s : function(g) {
                var w, f, u;
                return g === void 0 ? "Undefined" : g === null ? "Null" : typeof (f = b(w = Object(g), d)) == "string" ? f : p ? s(w) : (u = s(w)) == "Object" && typeof w.callee == "function" ? "Arguments" : u;
              };
            }
          ),
          /***/
          f772: (
            /***/
            function(a, c, r) {
              var n = r("5692"), s = r("90e3"), l = n("keys");
              a.exports = function(d) {
                return l[d] || (l[d] = s(d));
              };
            }
          ),
          /***/
          fb15: (
            /***/
            function(a, c, r) {
              if (r.r(c), typeof window < "u") {
                var n = window.document.currentScript;
                {
                  var s = r("8875");
                  n = s(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: s });
                }
                var l = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                l && (r.p = l[1]);
              }
              r("99af"), r("4de4"), r("4160"), r("c975"), r("d81d"), r("a434"), r("159b"), r("a4d3"), r("e439"), r("dbb4"), r("b64b");
              function d(v, y, C) {
                return y in v ? Object.defineProperty(v, y, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : v[y] = C, v;
              }
              function p(v, y) {
                var C = Object.keys(v);
                if (Object.getOwnPropertySymbols) {
                  var j = Object.getOwnPropertySymbols(v);
                  y && (j = j.filter(function(B) {
                    return Object.getOwnPropertyDescriptor(v, B).enumerable;
                  })), C.push.apply(C, j);
                }
                return C;
              }
              function b(v) {
                for (var y = 1; y < arguments.length; y++) {
                  var C = arguments[y] != null ? arguments[y] : {};
                  y % 2 ? p(Object(C), !0).forEach(function(j) {
                    d(v, j, C[j]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(C)) : p(Object(C)).forEach(function(j) {
                    Object.defineProperty(v, j, Object.getOwnPropertyDescriptor(C, j));
                  });
                }
                return v;
              }
              function g(v) {
                if (Array.isArray(v)) return v;
              }
              r("e01a"), r("d28b"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");
              function w(v, y) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(v)))) {
                  var C = [], j = !0, B = !1, G = void 0;
                  try {
                    for (var _ = v[Symbol.iterator](), nt; !(j = (nt = _.next()).done) && (C.push(nt.value), !(y && C.length === y)); j = !0)
                      ;
                  } catch (St) {
                    B = !0, G = St;
                  } finally {
                    try {
                      !j && _.return != null && _.return();
                    } finally {
                      if (B) throw G;
                    }
                  }
                  return C;
                }
              }
              r("a630"), r("fb6a"), r("b0c0"), r("25f0");
              function f(v, y) {
                (y == null || y > v.length) && (y = v.length);
                for (var C = 0, j = new Array(y); C < y; C++)
                  j[C] = v[C];
                return j;
              }
              function u(v, y) {
                if (v) {
                  if (typeof v == "string") return f(v, y);
                  var C = Object.prototype.toString.call(v).slice(8, -1);
                  if (C === "Object" && v.constructor && (C = v.constructor.name), C === "Map" || C === "Set") return Array.from(v);
                  if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return f(v, y);
                }
              }
              function h() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function m(v, y) {
                return g(v) || w(v, y) || u(v, y) || h();
              }
              function z(v) {
                if (Array.isArray(v)) return f(v);
              }
              function x(v) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(v)) return Array.from(v);
              }
              function E() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function S(v) {
                return z(v) || x(v) || u(v) || E();
              }
              var L = r("a352"), N = /* @__PURE__ */ r.n(L);
              function O(v) {
                v.parentElement !== null && v.parentElement.removeChild(v);
              }
              function D(v, y, C) {
                var j = C === 0 ? v.children[0] : v.children[C - 1].nextSibling;
                v.insertBefore(y, j);
              }
              var F = r("dbf1");
              r("13d5"), r("4fad"), r("ac1f"), r("5319");
              function Z(v) {
                var y = /* @__PURE__ */ Object.create(null);
                return function(j) {
                  var B = y[j];
                  return B || (y[j] = v(j));
                };
              }
              var T = /-(\w)/g, A = Z(function(v) {
                return v.replace(T, function(y, C) {
                  return C.toUpperCase();
                });
              });
              r("5db7"), r("73d9");
              var W = ["Start", "Add", "Remove", "Update", "End"], R = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], H = ["Move"], it = [H, W, R].flatMap(function(v) {
                return v;
              }).map(function(v) {
                return "on".concat(v);
              }), pt = {
                manage: H,
                manageAndEmit: W,
                emit: R
              };
              function It(v) {
                return it.indexOf(v) !== -1;
              }
              r("caad"), r("2ca0");
              var yt = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
              function vt(v) {
                return yt.includes(v);
              }
              function jt(v) {
                return ["transition-group", "TransitionGroup"].includes(v);
              }
              function Tt(v) {
                return ["id", "class", "role", "style"].includes(v) || v.startsWith("data-") || v.startsWith("aria-") || v.startsWith("on");
              }
              function Et(v) {
                return v.reduce(function(y, C) {
                  var j = m(C, 2), B = j[0], G = j[1];
                  return y[B] = G, y;
                }, {});
              }
              function bt(v) {
                var y = v.$attrs, C = v.componentData, j = C === void 0 ? {} : C, B = Et(Object.entries(y).filter(function(G) {
                  var _ = m(G, 2), nt = _[0];
                  return _[1], Tt(nt);
                }));
                return b(b({}, B), j);
              }
              function ht(v) {
                var y = v.$attrs, C = v.callBackBuilder, j = Et(Gt(y));
                Object.entries(C).forEach(function(G) {
                  var _ = m(G, 2), nt = _[0], St = _[1];
                  pt[nt].forEach(function(K) {
                    j["on".concat(K)] = St(K);
                  });
                });
                var B = "[data-draggable]".concat(j.draggable || "");
                return b(b({}, j), {}, {
                  draggable: B
                });
              }
              function Gt(v) {
                return Object.entries(v).filter(function(y) {
                  var C = m(y, 2), j = C[0];
                  return C[1], !Tt(j);
                }).map(function(y) {
                  var C = m(y, 2), j = C[0], B = C[1];
                  return [A(j), B];
                }).filter(function(y) {
                  var C = m(y, 2), j = C[0];
                  return C[1], !It(j);
                });
              }
              r("c740");
              function Ft(v, y) {
                if (!(v instanceof y))
                  throw new TypeError("Cannot call a class as a function");
              }
              function gr(v, y) {
                for (var C = 0; C < y.length; C++) {
                  var j = y[C];
                  j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(v, j.key, j);
                }
              }
              function xr(v, y, C) {
                return gr(v.prototype, y), v;
              }
              var ur = function(y) {
                var C = y.el;
                return C;
              }, Mt = function(y, C) {
                return y.__draggable_context = C;
              }, At = function(y) {
                return y.__draggable_context;
              }, kr = /* @__PURE__ */ function() {
                function v(y) {
                  var C = y.nodes, j = C.header, B = C.default, G = C.footer, _ = y.root, nt = y.realList;
                  Ft(this, v), this.defaultNodes = B, this.children = [].concat(S(j), S(B), S(G)), this.externalComponent = _.externalComponent, this.rootTransition = _.transition, this.tag = _.tag, this.realList = nt;
                }
                return xr(v, [{
                  key: "render",
                  value: function(C, j) {
                    var B = this.tag, G = this.children, _ = this._isRootComponent, nt = _ ? {
                      default: function() {
                        return G;
                      }
                    } : G;
                    return C(B, j, nt);
                  }
                }, {
                  key: "updated",
                  value: function() {
                    var C = this.defaultNodes, j = this.realList;
                    C.forEach(function(B, G) {
                      Mt(ur(B), {
                        element: j[G],
                        index: G
                      });
                    });
                  }
                }, {
                  key: "getUnderlyingVm",
                  value: function(C) {
                    return At(C);
                  }
                }, {
                  key: "getVmIndexFromDomIndex",
                  value: function(C, j) {
                    var B = this.defaultNodes, G = B.length, _ = j.children, nt = _.item(C);
                    if (nt === null)
                      return G;
                    var St = At(nt);
                    if (St)
                      return St.index;
                    if (G === 0)
                      return 0;
                    var K = ur(B[0]), U = S(_).findIndex(function(X) {
                      return X === K;
                    });
                    return C < U ? 0 : G;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), v;
              }(), ir = r("8bbf");
              function nr(v, y) {
                var C = v[y];
                return C ? C() : [];
              }
              function ve(v) {
                var y = v.$slots, C = v.realList, j = v.getKey, B = C || [], G = ["header", "footer"].map(function(X) {
                  return nr(y, X);
                }), _ = m(G, 2), nt = _[0], St = _[1], K = y.item;
                if (!K)
                  throw new Error("draggable element must have an item slot");
                var U = B.flatMap(function(X, et) {
                  return K({
                    element: X,
                    index: et
                  }).map(function(at) {
                    return at.key = j(X), at.props = b(b({}, at.props || {}), {}, {
                      "data-draggable": !0
                    }), at;
                  });
                });
                if (U.length !== B.length)
                  throw new Error("Item slot must have only one child");
                return {
                  header: nt,
                  footer: St,
                  default: U
                };
              }
              function eo(v) {
                var y = jt(v), C = !vt(v) && !y;
                return {
                  transition: y,
                  externalComponent: C,
                  tag: C ? Object(ir.resolveComponent)(v) : y ? ir.TransitionGroup : v
                };
              }
              function _t(v) {
                var y = v.$slots, C = v.tag, j = v.realList, B = v.getKey, G = ve({
                  $slots: y,
                  realList: j,
                  getKey: B
                }), _ = eo(C);
                return new kr({
                  nodes: G,
                  root: _,
                  realList: j
                });
              }
              function fr(v, y) {
                var C = this;
                Object(ir.nextTick)(function() {
                  return C.$emit(v.toLowerCase(), y);
                });
              }
              function Dr(v) {
                var y = this;
                return function(C, j) {
                  if (y.realList !== null)
                    return y["onDrag".concat(v)](C, j);
                };
              }
              function Xr(v) {
                var y = this, C = Dr.call(this, v);
                return function(j, B) {
                  C.call(y, j, B), fr.call(y, v, j);
                };
              }
              var Vr = null, Gr = {
                list: {
                  type: Array,
                  required: !1,
                  default: null
                },
                modelValue: {
                  type: Array,
                  required: !1,
                  default: null
                },
                itemKey: {
                  type: [String, Function],
                  required: !0
                },
                clone: {
                  type: Function,
                  default: function(y) {
                    return y;
                  }
                },
                tag: {
                  type: String,
                  default: "div"
                },
                move: {
                  type: Function,
                  default: null
                },
                componentData: {
                  type: Object,
                  required: !1,
                  default: null
                }
              }, Kr = ["update:modelValue", "change"].concat(S([].concat(S(pt.manageAndEmit), S(pt.emit)).map(function(v) {
                return v.toLowerCase();
              }))), Wr = Object(ir.defineComponent)({
                name: "draggable",
                inheritAttrs: !1,
                props: Gr,
                emits: Kr,
                data: function() {
                  return {
                    error: !1
                  };
                },
                render: function() {
                  try {
                    this.error = !1;
                    var y = this.$slots, C = this.$attrs, j = this.tag, B = this.componentData, G = this.realList, _ = this.getKey, nt = _t({
                      $slots: y,
                      tag: j,
                      realList: G,
                      getKey: _
                    });
                    this.componentStructure = nt;
                    var St = bt({
                      $attrs: C,
                      componentData: B
                    });
                    return nt.render(ir.h, St);
                  } catch (K) {
                    return this.error = !0, Object(ir.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, K.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && F.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
                },
                mounted: function() {
                  var y = this;
                  if (!this.error) {
                    var C = this.$attrs, j = this.$el, B = this.componentStructure;
                    B.updated();
                    var G = ht({
                      $attrs: C,
                      callBackBuilder: {
                        manageAndEmit: function(St) {
                          return Xr.call(y, St);
                        },
                        emit: function(St) {
                          return fr.bind(y, St);
                        },
                        manage: function(St) {
                          return Dr.call(y, St);
                        }
                      }
                    }), _ = j.nodeType === 1 ? j : j.parentElement;
                    this._sortable = new N.a(_, G), this.targetDomElement = _, _.__draggable_component__ = this;
                  }
                },
                updated: function() {
                  this.componentStructure.updated();
                },
                beforeUnmount: function() {
                  this._sortable !== void 0 && this._sortable.destroy();
                },
                computed: {
                  realList: function() {
                    var y = this.list;
                    return y || this.modelValue;
                  },
                  getKey: function() {
                    var y = this.itemKey;
                    return typeof y == "function" ? y : function(C) {
                      return C[y];
                    };
                  }
                },
                watch: {
                  $attrs: {
                    handler: function(y) {
                      var C = this._sortable;
                      C && Gt(y).forEach(function(j) {
                        var B = m(j, 2), G = B[0], _ = B[1];
                        C.option(G, _);
                      });
                    },
                    deep: !0
                  }
                },
                methods: {
                  getUnderlyingVm: function(y) {
                    return this.componentStructure.getUnderlyingVm(y) || null;
                  },
                  getUnderlyingPotencialDraggableComponent: function(y) {
                    return y.__draggable_component__;
                  },
                  emitChanges: function(y) {
                    var C = this;
                    Object(ir.nextTick)(function() {
                      return C.$emit("change", y);
                    });
                  },
                  alterList: function(y) {
                    if (this.list) {
                      y(this.list);
                      return;
                    }
                    var C = S(this.modelValue);
                    y(C), this.$emit("update:modelValue", C);
                  },
                  spliceList: function() {
                    var y = arguments, C = function(B) {
                      return B.splice.apply(B, S(y));
                    };
                    this.alterList(C);
                  },
                  updatePosition: function(y, C) {
                    var j = function(G) {
                      return G.splice(C, 0, G.splice(y, 1)[0]);
                    };
                    this.alterList(j);
                  },
                  getRelatedContextFromMoveEvent: function(y) {
                    var C = y.to, j = y.related, B = this.getUnderlyingPotencialDraggableComponent(C);
                    if (!B)
                      return {
                        component: B
                      };
                    var G = B.realList, _ = {
                      list: G,
                      component: B
                    };
                    if (C !== j && G) {
                      var nt = B.getUnderlyingVm(j) || {};
                      return b(b({}, nt), _);
                    }
                    return _;
                  },
                  getVmIndexFromDomIndex: function(y) {
                    return this.componentStructure.getVmIndexFromDomIndex(y, this.targetDomElement);
                  },
                  onDragStart: function(y) {
                    this.context = this.getUnderlyingVm(y.item), y.item._underlying_vm_ = this.clone(this.context.element), Vr = y.item;
                  },
                  onDragAdd: function(y) {
                    var C = y.item._underlying_vm_;
                    if (C !== void 0) {
                      O(y.item);
                      var j = this.getVmIndexFromDomIndex(y.newIndex);
                      this.spliceList(j, 0, C);
                      var B = {
                        element: C,
                        newIndex: j
                      };
                      this.emitChanges({
                        added: B
                      });
                    }
                  },
                  onDragRemove: function(y) {
                    if (D(this.$el, y.item, y.oldIndex), y.pullMode === "clone") {
                      O(y.clone);
                      return;
                    }
                    var C = this.context, j = C.index, B = C.element;
                    this.spliceList(j, 1);
                    var G = {
                      element: B,
                      oldIndex: j
                    };
                    this.emitChanges({
                      removed: G
                    });
                  },
                  onDragUpdate: function(y) {
                    O(y.item), D(y.from, y.item, y.oldIndex);
                    var C = this.context.index, j = this.getVmIndexFromDomIndex(y.newIndex);
                    this.updatePosition(C, j);
                    var B = {
                      element: this.context.element,
                      oldIndex: C,
                      newIndex: j
                    };
                    this.emitChanges({
                      moved: B
                    });
                  },
                  computeFutureIndex: function(y, C) {
                    if (!y.element)
                      return 0;
                    var j = S(C.to.children).filter(function(nt) {
                      return nt.style.display !== "none";
                    }), B = j.indexOf(C.related), G = y.component.getVmIndexFromDomIndex(B), _ = j.indexOf(Vr) !== -1;
                    return _ || !C.willInsertAfter ? G : G + 1;
                  },
                  onDragMove: function(y, C) {
                    var j = this.move, B = this.realList;
                    if (!j || !B)
                      return !0;
                    var G = this.getRelatedContextFromMoveEvent(y), _ = this.computeFutureIndex(G, y), nt = b(b({}, this.context), {}, {
                      futureIndex: _
                    }), St = b(b({}, y), {}, {
                      relatedContext: G,
                      draggedContext: nt
                    });
                    return j(St, C);
                  },
                  onDragEnd: function() {
                    Vr = null;
                  }
                }
              }), Zr = Wr;
              c.default = Zr;
            }
          ),
          /***/
          fb6a: (
            /***/
            function(a, c, r) {
              var n = r("23e7"), s = r("861d"), l = r("e8b5"), d = r("23cb"), p = r("50c4"), b = r("fc6a"), g = r("8418"), w = r("b622"), f = r("1dde"), u = r("ae40"), h = f("slice"), m = u("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), z = w("species"), x = [].slice, E = Math.max;
              n({ target: "Array", proto: !0, forced: !h || !m }, {
                slice: function(L, N) {
                  var O = b(this), D = p(O.length), F = d(L, D), Z = d(N === void 0 ? D : N, D), T, A, W;
                  if (l(O) && (T = O.constructor, typeof T == "function" && (T === Array || l(T.prototype)) ? T = void 0 : s(T) && (T = T[z], T === null && (T = void 0)), T === Array || T === void 0))
                    return x.call(O, F, Z);
                  for (A = new (T === void 0 ? Array : T)(E(Z - F, 0)), W = 0; F < Z; F++, W++) F in O && g(A, W, O[F]);
                  return A.length = W, A;
                }
              });
            }
          ),
          /***/
          fc6a: (
            /***/
            function(a, c, r) {
              var n = r("44ad"), s = r("1d80");
              a.exports = function(l) {
                return n(s(l));
              };
            }
          ),
          /***/
          fdbc: (
            /***/
            function(a, c) {
              a.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
              };
            }
          ),
          /***/
          fdbf: (
            /***/
            function(a, c, r) {
              var n = r("4930");
              a.exports = n && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          )
          /******/
        }).default
      );
    });
  }(Ae)), Ae.exports;
}
var Vs = Xs();
const Gs = /* @__PURE__ */ as(Vs), Ks = {
  key: 0,
  class: "text-gray-500 text-center py-4"
}, Ws = {
  key: 1,
  class: "text-gray-500 text-center py-4"
}, Zs = {
  key: 1,
  class: "flex-1 overflow-y-auto p-2 max-h-[400px] scrollbar"
}, Js = /* @__PURE__ */ st({
  __name: "MediaCollection.ce",
  props: {
    options: { type: [Object, String], required: !0 },
    editable: { type: [Boolean, String], default: !1 },
    deletable: { type: [Boolean, String], default: !1 },
    allowOrdering: { type: [Boolean, String], default: !1 },
    downloadable: { type: [Boolean, String], default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, i = ot(o.editable === !0 || o.editable === "true"), a = ot(o.deletable === !0 || o.deletable === "true"), c = ot(o.allowOrdering === !0 || o.allowOrdering === "true"), r = ot(o.downloadable === !0 || o.downloadable === "true"), { parsedOptions: n } = to(ot(o.options)), s = ot([]), l = ot(!1), d = ot(!1), p = ot(null);
    ge(() => o.options, async () => {
      await b();
    });
    const b = async () => {
      try {
        d.value = !0;
        const f = await ie.getTargetMedia(n.value);
        s.value = f.data.data || [];
      } catch (f) {
        console.error("Error fetching media items:", f);
      } finally {
        d.value = !1;
      }
    }, g = async () => {
      try {
        const f = s.value.filter((u) => u.uuid !== void 0).map((u, h) => ({
          uuid: u.uuid,
          // Now TypeScript knows it's a string
          order: h
        }));
        await ie.reorderCollection(n.value, f);
      } catch (f) {
        console.error("Error reordering media items:", f);
      }
    }, w = async (f) => {
      try {
        p.value = f, await ie.deleteCollectionItem(n.value, f), s.value = s.value.filter((u) => u.uuid !== f);
      } catch (u) {
        console.error("Error deleting media item:", u);
      } finally {
        p.value = null;
      }
    };
    return Ge(() => {
      b();
    }), t({ fetchMediaItems: b }), (f, u) => d.value ? (M(), $("div", Ks, " Loading media items... ")) : s.value.length === 0 ? (M(), $("div", Ws, " No media items available. ")) : (M(), $(Qt, { key: 2 }, [
      c.value ? (M(), zt(Ht(Gs), {
        key: 0,
        class: "flex-1 overflow-y-auto p-2 max-h-[400px] scrollbar",
        list: s.value,
        "item-key": (h) => h.uuid,
        "ghost-class": "ghost",
        handle: ".handle",
        onStart: u[0] || (u[0] = (h) => l.value = !0),
        onEnd: u[1] || (u[1] = () => {
          l.value = !1, g();
        })
      }, {
        item: Yr(({ element: h, index: m }) => [
          Dt(ea, {
            item: h,
            editable: i.value,
            deletable: a.value,
            "allow-ordering": c.value,
            downloadable: r.value,
            class: Ir({ deleting: p.value === h.uuid }),
            "is-last-item": m === s.value.length - 1,
            "onItem:delete": w
          }, null, 8, ["item", "editable", "deletable", "allow-ordering", "downloadable", "class", "is-last-item"])
        ]),
        _: 1
      }, 8, ["list", "item-key"])) : (M(), $("div", Zs, [
        (M(!0), $(Qt, null, Mr(s.value, (h, m) => (M(), zt(ea, {
          key: h.uuid,
          item: h,
          editable: i.value,
          downloadable: r.value,
          deletable: a.value,
          "allow-ordering": c.value,
          class: Ir({ deleting: p.value === h.uuid }),
          "is-last-item": m === s.value.length - 1,
          "onItem:delete": w
        }, null, 8, ["item", "editable", "downloadable", "deletable", "allow-ordering", "class", "is-last-item"]))), 128))
      ]))
    ], 64));
  }
}), Qs = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.ghost{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:1rem;border-width:2px;border-style:dashed;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));opacity:.9}.deleting{pointer-events:none;opacity:.5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, ei = /* @__PURE__ */ Vt(Js, [["styles", [Qs]]]), qs = { class: "relative p-4 w-full max-w-2xl max-h-full" }, _s = { class: "relative bg-white rounded-lg shadow-sm dark:bg-gray-700" }, tl = { class: "flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200" }, rl = { class: "text-xl font-semibold text-gray-900 dark:text-white" }, el = /* @__PURE__ */ st({
  __name: "Dialog",
  props: {
    title: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t;
    return (i, a) => (M(), $("div", qs, [
      P("div", _s, [
        P("div", tl, [
          P("h3", rl, ct(i.title), 1),
          Dt(or, {
            icon: "close",
            rounded: "",
            severity: "secondary",
            text: "",
            onClick: a[0] || (a[0] = (c) => o("close"))
          })
        ]),
        ue(i.$slots, "default")
      ])
    ]));
  }
}), ol = /* @__PURE__ */ st({
  __name: "Overlay.ce",
  setup(e) {
    const { isOpen: t, overlayStack: o, close: i } = _e(), a = dt(() => Math.min(0.5 + o.value.length * 0.1, 0.9)), c = (r) => {
      r.key === "Escape" && i();
    };
    return Ge(() => window.addEventListener("keydown", c)), pi(() => window.removeEventListener("keydown", c)), (r, n) => Ht(t) ? (M(), $("div", {
      key: 0,
      class: "fixed inset-0 z-[1000000] flex items-center justify-center p-4",
      style: vo({ backgroundColor: `rgba(0, 0, 0, ${a.value})` })
    }, [
      n[0] || (n[0] = sr(" > ")),
      (M(!0), $(Qt, null, Mr(Ht(o), (s, l) => (M(), $("div", {
        key: s.id,
        class: "fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm",
        style: vo({ zIndex: 1e6 + l })
      }, [
        s.type === "dialog" ? (M(), zt(el, lr({
          key: 0,
          ref_for: !0
        }, s.overlayProps || {}, ao({ ...s.listeners, close: () => Ht(i)(s.id) })), {
          default: Yr(() => [
            (M(), zt(pe(s.component), lr({ ref_for: !0 }, s.props, ao(s.listeners)), null, 16))
          ]),
          _: 2
        }, 1040)) : (M(), zt(pe(s.component), lr({
          key: 1,
          ref_for: !0
        }, s.props, ao({ ...s.listeners, close: () => Ht(i)(s.id) })), null, 16))
      ], 4))), 128))
    ], 4)) : ut("", !0);
  }
}), al = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, il = /* @__PURE__ */ Vt(ol, [["styles", [al]]]);
function nl() {
  const { open: e, close: t, overlayStack: o, topOverlay: i, isOpen: a } = _e();
  function c(r, n = {}, s = {}, l = {}) {
    e(
      r,
      {
        props: n,
        listeners: {
          ...l,
          close: t
        },
        type: "dialog"
      },
      s
    );
  }
  return {
    isOpen: a,
    overlayStack: o,
    topOverlay: i,
    open: c,
    close: t
  };
}
const cl = {}, sl = { class: "p-4 md:p-5 space-y-4" };
function ll(e, t) {
  return M(), $("div", sl, [
    ue(e.$slots, "default")
  ]);
}
const dl = /* @__PURE__ */ Vt(cl, [["render", ll]]), pl = /* @__PURE__ */ st({
  __name: "MediaDialog",
  props: {
    options: { type: Object, required: !0 },
    editable: { type: Boolean, default: !1 },
    withUpload: { type: Boolean, default: !1 },
    deletable: { type: Boolean, default: !1 },
    allowOrdering: { type: Boolean, default: !1 },
    downloadable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = ot(null), o = () => {
      t.value && t.value.fetchMediaItems();
    };
    return (i, a) => (M(), zt(dl, null, {
      default: Yr(() => [
        e.withUpload ? (M(), zt(Xa, {
          key: 0,
          options: e.options,
          "clear-on-complete": !0,
          onFileUploaded: o
        }, null, 8, ["options"])) : ut("", !0),
        Dt(ei, {
          ref_key: "mediaCollectionRef",
          ref: t,
          deletable: e.deletable,
          "allow-ordering": e.allowOrdering,
          options: e.options,
          downloadable: e.downloadable,
          editable: e.editable
        }, null, 8, ["deletable", "allow-ordering", "options", "downloadable", "editable"])
      ]),
      _: 1
    }));
  }
}), bl = /* @__PURE__ */ st({
  __name: "MediaDialogToggle.ce",
  props: {
    options: { type: [Object, String], required: !0 },
    title: { type: String, default: "Media Dialog" },
    editable: { type: [Boolean, String], default: !1 },
    deletable: { type: [Boolean, String], default: !1 },
    allowOrdering: { type: [Boolean, String], default: !1 },
    withUpload: { type: [Boolean, String], default: !1 },
    downloadable: { type: [Boolean, String], default: !1 }
  },
  setup(e) {
    const t = e, o = ot(t.withUpload === !0 || t.withUpload === "true"), i = ot(t.editable === !0 || t.editable === "true"), a = ot(t.deletable === !0 || t.deletable === "true"), c = ot(t.allowOrdering === !0 || t.allowOrdering === "true"), r = ot(t.downloadable === !0 || t.downloadable === "true"), { parsedOptions: n } = to(ot(t.options)), s = nl();
    Ao("options", n.value);
    const l = () => {
      s.open(
        pl,
        {
          options: n.value,
          editable: i,
          deletable: a,
          allowOrdering: c,
          withUpload: o,
          downloadable: r
        },
        {
          title: t.title
        }
      );
    };
    return (d, p) => ue(d.$slots, "default", { onClick: l });
  }
}), wl = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, gl = /* @__PURE__ */ Vt(bl, [["styles", [wl]]]), ul = { class: "w-full mx-auto bg-white shadow-md rounded-lg p-6" }, fl = ["textContent"], hl = ["innerHTML"], ml = { class: "mt-4" }, yl = /* @__PURE__ */ st({
  __name: "DetailsCard.ce",
  props: {
    title: { type: String },
    description: { type: String }
  },
  setup(e) {
    return (t, o) => (M(), $("div", ul, [
      P("h2", {
        class: "text-xl font-semibold text-gray-800",
        textContent: ct(t.title)
      }, null, 8, fl),
      P("p", {
        class: "text-gray-600 text-base",
        innerHTML: t.description
      }, null, 8, hl),
      P("div", ml, [
        ue(t.$slots, "default")
      ])
    ]));
  }
}), vl = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, xl = /* @__PURE__ */ Vt(yl, [["styles", [vl]]]), kl = { class: "flex justify-between py-2 border-b last:border-b-0" }, Cl = { class: "font-medium text-gray-700" }, zl = /* @__PURE__ */ st({
  __name: "DetailsCardItem.ce",
  props: {
    label: { type: String, required: !0 },
    value: { type: [String, Boolean], required: !0 },
    type: { type: String, default: "text" }
    // Supports text, boolean, and more in the future
  },
  setup(e) {
    const t = e, o = {
      text: Uo(() => Promise.resolve().then(() => od)),
      boolean: Uo(() => Promise.resolve().then(() => sd))
      // Add more types dynamically
    }, i = dt(() => o[t.type] || o.text), a = Ve();
    return (c, r) => (M(), $("div", kl, [
      P("span", Cl, ct(e.label), 1),
      (M(), zt(pe(i.value), lr(Ht(a), { value: e.value }), null, 16, ["value"]))
    ]));
  }
}), Sl = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, El = /* @__PURE__ */ Vt(zl, [["styles", [Sl]]]), Ol = { class: "max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6" }, jl = { class: "flex justify-between items-center mb-4" }, Tl = { class: "px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded" }, Il = { class: "grid grid-cols-2 gap-4 text-sm text-gray-700" }, Ml = { class: "mt-6" }, Al = { class: "flex items-center w-full space-x-4" }, Pl = { key: 0 }, Dl = { key: 1 }, Rl = { class: "mt-6 flex justify-between items-center" }, Ll = ["value"], Nl = /* @__PURE__ */ st({
  __name: "OrderItem.ce",
  setup(e) {
    const t = ot({
      productName: "Wireless Headphones",
      category: "Electronics",
      accountManager: "John Doe",
      dueDate: "2025-02-15",
      quantity: 2,
      price: 150,
      totalPrice: 300,
      status: "Shipped"
    }), o = ot([
      { id: 1, label: "Order Placed", completed: !0 },
      { id: 2, label: "Processing", completed: !0 },
      { id: 3, label: "Shipped", completed: !0 },
      { id: 4, label: "Out for Delivery", completed: !1 },
      { id: 5, label: "Delivered", completed: !1 }
    ]), i = ["Processing", "Shipped", "Out for Delivery", "Delivered"], a = dt(() => i.indexOf(t.value.status) + 2), c = (r) => {
      t.value.status = r, o.value.forEach((n, s) => {
        n.completed = s < a.value - 1;
      });
    };
    return (r, n) => (M(), $("div", Ol, [
      P("div", jl, [
        n[2] || (n[2] = P("h2", { class: "text-lg font-semibold text-gray-900" }, "Order Tracking", -1)),
        P("span", Tl, ct(t.value.status), 1)
      ]),
      P("div", Il, [
        P("div", null, [
          n[3] || (n[3] = P("strong", null, "Product:", -1)),
          sr(" " + ct(t.value.productName), 1)
        ]),
        P("div", null, [
          n[4] || (n[4] = P("strong", null, "Category:", -1)),
          sr(" " + ct(t.value.category), 1)
        ]),
        P("div", null, [
          n[5] || (n[5] = P("strong", null, "Account Manager:", -1)),
          sr(" " + ct(t.value.accountManager), 1)
        ]),
        P("div", null, [
          n[6] || (n[6] = P("strong", null, "Due Date:", -1)),
          sr(" " + ct(t.value.dueDate), 1)
        ]),
        P("div", null, [
          n[7] || (n[7] = P("strong", null, "Quantity:", -1)),
          sr(" " + ct(t.value.quantity), 1)
        ]),
        P("div", null, [
          n[8] || (n[8] = P("strong", null, "Price:", -1)),
          sr(" $" + ct(t.value.price), 1)
        ]),
        P("div", null, [
          n[9] || (n[9] = P("strong", null, "Total Price:", -1)),
          sr(" $" + ct(t.value.totalPrice), 1)
        ])
      ]),
      P("div", Ml, [
        P("ol", Al, [
          (M(!0), $(Qt, null, Mr(o.value, (s, l) => (M(), $("li", {
            key: s.id,
            class: "flex-1 flex items-center"
          }, [
            P("div", {
              class: Ir(["flex items-center justify-center w-10 h-10 border-2 rounded-full", {
                "bg-blue-600 border-blue-600 text-white": s.completed || l < a.value,
                "border-gray-300 text-gray-500": !s.completed && l >= a.value
              }])
            }, [
              s.completed || l < a.value ? (M(), $("span", Pl, "✔")) : (M(), $("span", Dl, ct(l + 1), 1))
            ], 2),
            l < o.value.length - 1 ? (M(), $("div", {
              key: 0,
              class: Ir(["w-full h-1", {
                "bg-blue-600": l < a.value - 1,
                "bg-gray-300": l >= a.value - 1
              }])
            }, null, 2)) : ut("", !0)
          ]))), 128))
        ])
      ]),
      P("div", Rl, [
        n[10] || (n[10] = P("div", { class: "flex space-x-3" }, [
          P("a", {
            href: "#",
            class: "text-blue-600 hover:underline"
          }, "View Form"),
          P("a", {
            href: "#",
            class: "text-blue-600 hover:underline"
          }, "Open Chat"),
          P("a", {
            href: "#",
            class: "text-blue-600 hover:underline"
          }, "Preview Attachments")
        ], -1)),
        P("div", null, [
          bi(P("select", {
            class: "px-3 py-2 border rounded text-gray-700",
            "onUpdate:modelValue": n[0] || (n[0] = (s) => t.value.status = s),
            onChange: n[1] || (n[1] = (s) => c(t.value.status))
          }, [
            (M(), $(Qt, null, Mr(i, (s) => P("option", {
              key: s,
              value: s
            }, ct(s), 9, Ll)), 64))
          ], 544), [
            [wi, t.value.status]
          ])
        ])
      ])
    ]));
  }
}), Fl = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, Bl = /* @__PURE__ */ Vt(Nl, [["styles", [Fl]]]), Yl = { class: "relative w-fit h-fit inline-block" }, Ul = /* @__PURE__ */ st({
  __name: "BtnUpload.ce",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const i = e, a = o, c = ot(null), r = ot(i.modelValue || []), n = () => {
      var b;
      (b = c.value) == null || b.click();
    }, s = (b) => {
      const g = b.target;
      if (!g.files) return;
      const w = Array.from(g.files);
      r.value.push(...w), a("update:modelValue", r.value);
    }, l = (b) => {
      r.value.push(...b), a("update:modelValue", r.value);
    }, d = (b) => {
      r.value.splice(b, 1), a("update:modelValue", r.value);
    }, p = () => {
      r.value = [], a("update:modelValue", r.value);
    };
    return ge(
      () => i.modelValue,
      (b) => {
        r.value = b;
      }
    ), t({ addFilesExternally: l, resetFiles: p, removeFile: d }), (b, g) => (M(), $("div", Yl, [
      Dt(or, {
        icon: "attachment",
        rounded: "",
        text: "",
        severity: "secondary",
        onClick: n
      }),
      P("input", {
        ref_key: "fileInput",
        ref: c,
        type: "file",
        multiple: "",
        onChange: s,
        style: { display: "none" }
      }, null, 544)
    ]));
  }
}), $l = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, Hl = /* @__PURE__ */ Vt(Ul, [["styles", [$l]]]), Xl = { class: "flex items-center justify-between order-b border-gray-200 w-100" }, Vl = ["textContent"], Gl = { class: "flex justify-center items-center ms-auto" }, Kl = { class: "w-[100px] pe-1" }, Wl = /* @__PURE__ */ st({
  __name: "UploadedFileListItem",
  props: {
    file: { type: Object, required: !0 }
  },
  emits: ["upload:canceled", "upload:complete"],
  setup(e, { emit: t }) {
    const o = e, i = ua("options"), a = new ie(i), c = ot(!1), r = ot(0), n = t, s = () => a.cancelUpload((l) => n("upload:canceled", l));
    return Ge(() => {
      a.uploadFile(
        o.file,
        (l) => r.value = l,
        (l) => {
          setTimeout(() => c.value = !0, 2e3), n("upload:complete", l);
        },
        () => n("upload:canceled", o.file)
      );
    }), (l, d) => (M(), $("div", Xl, [
      P("div", {
        class: "text-xs font-normal text-gray-800",
        textContent: ct(e.file.name)
      }, null, 8, Vl),
      P("div", Gl, [
        P("div", Kl, [
          Dt(Ha, { progress: r.value }, null, 8, ["progress"])
        ]),
        Dt(or, {
          icon: "close",
          rounded: "",
          size: "xs",
          severity: "secondary",
          text: "",
          onClick: s
        })
      ])
    ]));
  }
}), Zl = { class: "w-full" }, Jl = /* @__PURE__ */ st({
  __name: "UploadedList.ce",
  props: {
    options: { type: [Object, String], required: !0 },
    modelValue: { type: Array, required: !0 },
    mediaIds: { type: Array, required: !0 }
  },
  emits: ["update:modelValue", "update:mediaIds", "file:uploaded", "change"],
  setup(e, { emit: t }) {
    const o = e, i = t, { parsedOptions: a } = to(ot(o.options));
    Ao("options", a.value);
    const c = ot([...o.mediaIds]);
    ge(() => o.modelValue, (s) => {
      s.length === 0 && (c.value = [], i("update:mediaIds", []));
    }, { deep: !0 });
    const r = (s, l) => {
      const d = [...o.modelValue];
      d.splice(s, 1), i("update:modelValue", d), i("change", d);
      const p = c.value.indexOf(l);
      p !== -1 && (c.value.splice(p, 1), i("update:mediaIds", [...c.value]));
    }, n = (s) => {
      c.value.includes(s) || (c.value.push(s), i("update:mediaIds", [...c.value])), i("file:uploaded", s);
    };
    return (s, l) => (M(), $("div", Zl, [
      (M(!0), $(Qt, null, Mr(e.modelValue, (d, p) => (M(), zt(Wl, {
        key: d.name,
        file: d,
        "onUpload:canceled": (b) => r(p, b),
        "onUpload:complete": l[0] || (l[0] = (b) => n(b))
      }, null, 8, ["file", "onUpload:canceled"]))), 128))
    ]));
  }
}), Ql = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(63 131 248 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.tooltip-arrow,.tooltip-arrow:before{position:absolute;width:8px;height:8px;background:inherit}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";visibility:visible;transform:rotate(45deg)}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-style:solid;border-color:#e5e7eb}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-top-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-top-width:1px;border-right-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{position:absolute;width:8px;height:8px;background:inherit}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:before{content:"";visibility:visible;transform:rotate(45deg)}[data-popper-arrow]:after{content:"";visibility:visible;transform:rotate(45deg);position:absolute;width:9px;height:9px;background:inherit}[role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:before{border-style:solid;border-color:#4b5563}[role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#e5e7eb}.dark [role=tooltip]>[data-popper-arrow]:after{border-style:solid;border-color:#4b5563}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after{border-top-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after{border-top-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[role=tooltip].invisible>[data-popper-arrow]:after{visibility:hidden}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#1c64f2}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-right:.75rem;padding-left:0}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1c64f2;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #1C64F2;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked,.dark [type=checkbox]:checked,.dark [type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:.55em .55em;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}.dark [type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");background-size:1em 1em}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M0.5 6h14'/%3e %3c/svg%3e");background-color:currentColor;border-color:transparent;background-position:center;background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{color:#fff;background:#1f2937;border:0;font-weight:500;font-size:.875rem;cursor:pointer;padding:.625rem 1rem .625rem 2rem;margin-inline-start:-1rem;margin-inline-end:1rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-right:2rem;padding-left:1rem}.dark input[type=file]::file-selector-button{color:#fff;background:#4b5563}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1px;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{height:1.25rem;width:1.25rem;background:#1c64f2;border-radius:9999px;border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;cursor:pointer}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{content:"";position:absolute;top:.125rem;left:.125rem;background:#fff;border-color:#d1d5db;border-width:1px;border-radius:9999px;height:1.25rem;width:1.25rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)}input:checked+.toggle-bg:after{transform:translate(100%);border-color:#fff}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.bottom-\\[60px\\]{bottom:60px}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-4{left:1rem}.left-6{left:1.5rem}.right-0{right:0}.right-4{right:1rem}.right-6{right:1.5rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2\\/3{top:66.666667%}.top-3{top:.75rem}.top-4{top:1rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1000000\\]{z-index:1000000}.m-5{margin:1.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2\\.5{margin-top:.625rem;margin-bottom:.625rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-4{height:1rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-9{height:2.25rem}.h-\\[70vh\\]{height:70vh}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.max-h-\\[400px\\]{max-height:400px}.max-h-full{max-height:100%}.min-h-\\[100px\\]{min-height:100px}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-20{width:5rem}.w-3\\/4{width:75%}.w-36{width:9rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-\\[100px\\]{width:100px}.w-\\[60vw\\]{width:60vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-\\[83px\\]{max-width:83px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-full{--tw-translate-y: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-105{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-e-lg{border-start-end-radius:.5rem;border-end-end-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.rounded-s-lg{border-start-start-radius:.5rem;border-end-start-radius:.5rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.border-blue-600{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1))}.border-blue-700{--tw-border-opacity: 1;border-color:rgb(26 86 219 / var(--tw-border-opacity, 1))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.\\!bg-gray-50{--tw-bg-opacity: 1 !important;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))!important}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(235 245 255 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.bg-blue-700{--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-gray-900\\/50{background-color:#11182780}.bg-gray-900\\/90{background-color:#111827e6}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(222 247 236 / var(--tw-bg-opacity, 1))}.bg-orange-500{--tw-bg-opacity: 1;background-color:rgb(255 90 31 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(253 232 232 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/50{background-color:#ffffff80}.bg-opacity-0{--tw-bg-opacity: 0}.bg-opacity-5{--tw-bg-opacity: .05}.bg-opacity-75{--tw-bg-opacity: .75}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pe-1{padding-inline-end:.25rem}.pl-10{padding-left:2.5rem}.pr-3{padding-right:.75rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-400{--tw-text-opacity: 1;color:rgb(118 169 250 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-green-500{--tw-text-opacity: 1;color:rgb(14 159 110 / var(--tw-text-opacity, 1))}.text-green-800{--tw-text-opacity: 1;color:rgb(3 84 63 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(240 82 82 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(155 28 28 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-500{--tw-text-opacity: 1;color:rgb(194 120 3 / var(--tw-text-opacity, 1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-gray-200{--tw-shadow-color: #E5E7EB;--tw-shadow: var(--tw-shadow-colored)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.scrollbar{overflow-y:auto}.scrollbar::-webkit-scrollbar{width:8px}.scrollbar::-webkit-scrollbar-track{background:#f3f4f6;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb{background:#9ca3af;border-radius:10px}.scrollbar::-webkit-scrollbar-thumb:hover{background:#6b7280}.btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;font-weight:500;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.btn{gap:.5rem;border-radius:.5rem}.btn.btn-primary{--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.btn.btn-primary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.btn.btn-primary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity, 1))}.btn.btn-secondary{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-secondary:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-secondary:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-secondary:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-warning{--tw-bg-opacity: 1;background-color:rgb(159 88 10 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-warning:hover{--tw-bg-opacity: 1;background-color:rgb(114 59 19 / var(--tw-bg-opacity, 1))}.btn.btn-warning:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity, 1))}.btn.btn-warning:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity, 1))}.btn.btn-danger{--tw-bg-opacity: 1;background-color:rgb(224 36 36 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-danger:hover{--tw-bg-opacity: 1;background-color:rgb(155 28 28 / var(--tw-bg-opacity, 1))}.btn.btn-danger:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity, 1))}.btn.btn-danger:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity, 1))}.btn.btn-info{--tw-bg-opacity: 1;background-color:rgb(88 80 236 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-info:hover{--tw-bg-opacity: 1;background-color:rgb(66 56 157 / var(--tw-bg-opacity, 1))}.btn.btn-info:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity, 1))}.btn.btn-info:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity, 1))}.btn.btn-success{--tw-bg-opacity: 1;background-color:rgb(5 122 85 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-success:hover{--tw-bg-opacity: 1;background-color:rgb(3 84 63 / var(--tw-bg-opacity, 1))}.btn.btn-success:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity, 1))}.btn.btn-success:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity, 1))}.btn.btn-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-white:hover{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.btn.btn-white:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.btn.btn-white:focus:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity, 1))}.btn.btn-outlined{border-width:1px;background-color:transparent}.btn.btn-outlined:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary{--tw-border-opacity: 1;border-color:rgb(28 100 242 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning{--tw-border-opacity: 1;border-color:rgb(159 88 10 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger{--tw-border-opacity: 1;border-color:rgb(224 36 36 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info{--tw-border-opacity: 1;border-color:rgb(88 80 236 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success{--tw-border-opacity: 1;border-color:rgb(5 122 85 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-success:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-outlined.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text{background-color:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.btn.btn-text.btn-primary{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-primary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-secondary:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning{--tw-text-opacity: 1;color:rgb(159 88 10 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-warning:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger{--tw-text-opacity: 1;color:rgb(224 36 36 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-danger:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info{--tw-text-opacity: 1;color:rgb(88 80 236 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-info:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success{--tw-text-opacity: 1;color:rgb(5 122 85 / var(--tw-text-opacity, 1))}.btn.btn-text.btn-success:hover,.btn.btn-text.btn-white,.btn.btn-text.btn-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.btn.btn-rounded{border-radius:9999px}.btn.btn-disabled{cursor:not-allowed;opacity:.5}.btn-xs{padding:.5rem .75rem;font-size:.75rem;line-height:1rem}.btn-sm{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem}.btn-base{padding:.625rem 1.25rem;font-size:.875rem;line-height:1.25rem}.btn-lg{padding:.75rem 1.25rem;font-size:1rem;line-height:1.5rem}.btn-xl{padding:.875rem 1.5rem;font-size:1rem;line-height:1.5rem}.btn-xs.btn-icon{padding:.5rem;font-size:.75rem;line-height:1rem}.btn-sm.btn-icon{padding:.5rem;font-size:.875rem;line-height:1.25rem}.btn-base.btn-icon{padding:.625rem;font-size:.875rem;line-height:1.25rem}.btn-lg.btn-icon{padding:.75rem;font-size:1rem;line-height:1.5rem}.btn-xl.btn-icon{padding:.875rem;font-size:1rem;line-height:1.5rem}.btn.btn-icon-left{margin-right:.5rem}.btn.btn-icon-right{margin-left:.5rem}.btn.btn-xs .icon,.btn.btn-sm .icon{height:1rem;width:1rem}.btn.btn-base .icon{height:1.25rem;width:1.25rem}.btn.btn-lg .icon,.btn.btn-xl .icon{height:1.5rem;width:1.5rem}.last\\:border-b-0:last-child{border-bottom-width:0px}.hover\\:border-gray-300:hover{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.hover\\:bg-blue-800:hover{--tw-bg-opacity: 1;background-color:rgb(30 66 159 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-900\\/50:hover{background-color:#11182780}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.hover\\:text-blue-600:hover{--tw-text-opacity: 1;color:rgb(28 100 242 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.focus\\:border-blue-500:focus{--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity, 1))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity, 1))}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity: 1;border-color:rgb(63 131 248 / var(--tw-border-opacity, 1))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:\\!bg-gray-700:is(.dark *){--tw-bg-opacity: 1 !important;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))!important}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(28 100 242 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:#1f293780}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:#111827cc}.dark\\:bg-green-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(1 71 55 / var(--tw-bg-opacity, 1))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(119 29 29 / var(--tw-bg-opacity, 1))}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.dark\\:text-green-300:is(.dark *){--tw-text-opacity: 1;color:rgb(132 225 188 / var(--tw-text-opacity, 1))}.dark\\:text-red-300:is(.dark *){--tw-text-opacity: 1;color:rgb(248 180 180 / var(--tw-text-opacity, 1))}.dark\\:text-white:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(26 86 219 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(63 131 248 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media (min-width: 768px){.md\\:p-5{padding:1.25rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 1}`, ql = /* @__PURE__ */ Vt(Jl, [["styles", [Ql]]]), _l = [
  Xa,
  we,
  Zc,
  ei,
  Ua,
  $a,
  il,
  gl,
  xl,
  El,
  Bl,
  Hl,
  Pr,
  ql
], td = (e) => {
  _l.forEach((t) => {
    e.component(t.name, t);
  });
}, pd = { install: td }, rd = { class: "text-gray-600" }, ed = /* @__PURE__ */ st({
  __name: "ValueText",
  props: { value: String },
  setup(e) {
    return (t, o) => (M(), $("span", rd, ct(e.value), 1));
  }
}), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ed
}, Symbol.toStringTag, { value: "Module" })), ad = { class: "text-gray-600" }, id = {
  key: 0,
  class: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"
}, nd = {
  key: 1,
  class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300"
}, cd = /* @__PURE__ */ st({
  __name: "ValueBoolean",
  props: {
    value: { type: Boolean, required: !0 },
    trueText: { type: String, default: "Yes" },
    falseText: { type: String, default: "No" }
  },
  setup(e) {
    return (t, o) => (M(), $("span", ad, [
      e.value ? (M(), $("span", id, ct(e.trueText), 1)) : (M(), $("span", nd, ct(e.falseText), 1))
    ]));
  }
}), sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cd
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hl as BtnUpload,
  xl as DetailsCard,
  El as DetailsCardItem,
  Xa as DropZone,
  we as Lightbox,
  Zc as LightboxGallery,
  ei as MediaCollection,
  gl as MediaDialogToggle,
  $a as MediaPreview,
  Ua as MediaViewer,
  Bl as OrderItem,
  il as Overlay,
  Pr as SVGIcon,
  ql as UploadedList,
  pd as default
};
