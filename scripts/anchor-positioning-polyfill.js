var Ts = Object.defineProperty, Os = Object.defineProperties;
var Es = Object.getOwnPropertyDescriptors;
var vr = Object.getOwnPropertySymbols;
var Ls = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable;
var wr = (e, t, n) => t in e ? Ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, L = (e, t) => {
  for (var n in t || (t = {}))
    Ls.call(t, n) && wr(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      $s.call(t, n) && wr(e, n, t[n]);
  return e;
}, X = (e, t) => Os(e, Es(t));
var q = (e, t, n) => new Promise((r, i) => {
  var o = (l) => {
    try {
      u(n.next(l));
    } catch (s) {
      i(s);
    }
  }, a = (l) => {
    try {
      u(n.throw(l));
    } catch (s) {
      i(s);
    }
  }, u = (l) => l.done ? r(l.value) : Promise.resolve(l.value).then(o, a);
  u((n = n.apply(e, t)).next());
});
const Mn = Math.min, tt = Math.max, Wt = Math.round, Lt = Math.floor, Ie = (e) => ({
  x: e,
  y: e
});
function _s(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ps(e) {
  return L({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function zs(e) {
  return typeof e != "number" ? Ps(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qt(e) {
  return X(L({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ms(e, t) {
  return q(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: r,
      y: i,
      platform: o,
      rects: a,
      elements: u,
      strategy: l
    } = e, {
      boundary: s = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: g = 0
    } = _s(t, e), T = zs(g), S = u[d ? f === "floating" ? "reference" : "floating" : f], b = qt(yield o.getClippingRect({
      element: (n = yield o.isElement == null ? void 0 : o.isElement(S)) == null || n ? S : S.contextElement || (yield o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)),
      boundary: s,
      rootBoundary: c,
      strategy: l
    })), w = f === "floating" ? X(L({}, a.floating), {
      x: r,
      y: i
    }) : a.reference, A = yield o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating), y = (yield o.isElement == null ? void 0 : o.isElement(A)) ? (yield o.getScale == null ? void 0 : o.getScale(A)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, C = qt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? yield o.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: u,
      rect: w,
      offsetParent: A,
      strategy: l
    }) : w);
    return {
      top: (b.top - C.top + T.top) / y.y,
      bottom: (C.bottom - b.bottom + T.bottom) / y.y,
      left: (b.left - C.left + T.left) / y.x,
      right: (C.right - b.right + T.right) / y.x
    };
  });
}
function ct(e) {
  return _i(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _e(e) {
  var t;
  return (t = (_i(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _i(e) {
  return e instanceof Node || e instanceof le(e).Node;
}
function Ce(e) {
  return e instanceof Element || e instanceof le(e).Element;
}
function Ae(e) {
  return e instanceof HTMLElement || e instanceof le(e).HTMLElement;
}
function Sr(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot;
}
function Ot(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Is(e) {
  return ["table", "td", "th"].includes(ct(e));
}
function Xn(e) {
  const t = Yn(), n = ye(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ns(e) {
  let t = Ne(e);
  for (; Ae(t) && !ot(t); ) {
    if (Xn(t))
      return t;
    t = Ne(t);
  }
  return null;
}
function Yn() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ot(e) {
  return ["html", "body", "#document"].includes(ct(e));
}
function ye(e) {
  return le(e).getComputedStyle(e);
}
function tn(e) {
  return Ce(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ne(e) {
  if (ct(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Sr(e) && e.host || // Fallback.
    _e(e)
  );
  return Sr(t) ? t.host : t;
}
function Pi(e) {
  const t = Ne(e);
  return ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ae(t) && Ot(t) ? t : Pi(t);
}
function wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Pi(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = le(i);
  return o ? t.concat(a, a.visualViewport || [], Ot(i) ? i : [], a.frameElement && n ? wt(a.frameElement) : []) : t.concat(i, wt(i, [], n));
}
function zi(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Ae(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, u = Wt(n) !== o || Wt(r) !== a;
  return u && (n = o, r = a), {
    width: n,
    height: r,
    $: u
  };
}
function Zn(e) {
  return Ce(e) ? e : e.contextElement;
}
function nt(e) {
  const t = Zn(e);
  if (!Ae(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = zi(t);
  let a = (o ? Wt(n.width) : n.width) / r, u = (o ? Wt(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
const Rs = /* @__PURE__ */ Ie(0);
function Mi(e) {
  const t = le(e);
  return !Yn() || !t.visualViewport ? Rs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function js(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== le(e) ? !1 : t;
}
function We(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = Zn(e);
  let a = Ie(1);
  t && (r ? Ce(r) && (a = nt(r)) : a = nt(e));
  const u = js(o, n, r) ? Mi(o) : Ie(0);
  let l = (i.left + u.x) / a.x, s = (i.top + u.y) / a.y, c = i.width / a.x, f = i.height / a.y;
  if (o) {
    const d = le(o), g = r && Ce(r) ? le(r) : r;
    let T = d, k = T.frameElement;
    for (; k && r && g !== T; ) {
      const S = nt(k), b = k.getBoundingClientRect(), w = ye(k), A = b.left + (k.clientLeft + parseFloat(w.paddingLeft)) * S.x, y = b.top + (k.clientTop + parseFloat(w.paddingTop)) * S.y;
      l *= S.x, s *= S.y, c *= S.x, f *= S.y, l += A, s += y, T = le(k), k = T.frameElement;
    }
  }
  return qt({
    width: c,
    height: f,
    x: l,
    y: s
  });
}
const Ds = [":popover-open", ":modal"];
function Jn(e) {
  return Ds.some((t) => {
    try {
      return e.matches(t);
    } catch (n) {
      return !1;
    }
  });
}
function Fs(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = _e(r), u = t ? Jn(t.floating) : !1;
  if (r === a || u && o)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = Ie(1);
  const c = Ie(0), f = Ae(r);
  if ((f || !f && !o) && ((ct(r) !== "body" || Ot(a)) && (l = tn(r)), Ae(r))) {
    const d = We(r);
    s = nt(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return {
    width: n.width * s.x,
    height: n.height * s.y,
    x: n.x * s.x - l.scrollLeft * s.x + c.x,
    y: n.y * s.y - l.scrollTop * s.y + c.y
  };
}
function Bs(e) {
  return Array.from(e.getClientRects());
}
function Ii(e) {
  return We(_e(e)).left + tn(e).scrollLeft;
}
function Us(e) {
  const t = _e(e), n = tn(e), r = e.ownerDocument.body, i = tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ii(e);
  const u = -n.scrollTop;
  return ye(r).direction === "rtl" && (a += tt(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: u
  };
}
function Hs(e, t) {
  const n = le(e), r = _e(e), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, u = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    const s = Yn();
    (!s || s && t === "fixed") && (u = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: u,
    y: l
  };
}
function Ws(e, t) {
  const n = We(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = Ae(e) ? nt(e) : Ie(1), a = e.clientWidth * o.x, u = e.clientHeight * o.y, l = i * o.x, s = r * o.y;
  return {
    width: a,
    height: u,
    x: l,
    y: s
  };
}
function Cr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Hs(e, n);
  else if (t === "document")
    r = Us(_e(e));
  else if (Ce(t))
    r = Ws(t, n);
  else {
    const i = Mi(e);
    r = X(L({}, t), {
      x: t.x - i.x,
      y: t.y - i.y
    });
  }
  return qt(r);
}
function Ni(e, t) {
  const n = Ne(e);
  return n === t || !Ce(n) || ot(n) ? !1 : ye(n).position === "fixed" || Ni(n, t);
}
function qs(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wt(e, [], !1).filter((u) => Ce(u) && ct(u) !== "body"), i = null;
  const o = ye(e).position === "fixed";
  let a = o ? Ne(e) : e;
  for (; Ce(a) && !ot(a); ) {
    const u = ye(a), l = Xn(a);
    !l && u.position === "fixed" && (i = null), (o ? !l && !i : !l && u.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ot(a) && !l && Ni(e, a)) ? r = r.filter((c) => c !== a) : i = u, a = Ne(a);
  }
  return t.set(e, r), r;
}
function Vs(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? Jn(t) ? [] : qs(t, this._c) : [].concat(n), r], u = a[0], l = a.reduce((s, c) => {
    const f = Cr(t, c, i);
    return s.top = tt(f.top, s.top), s.right = Mn(f.right, s.right), s.bottom = Mn(f.bottom, s.bottom), s.left = tt(f.left, s.left), s;
  }, Cr(t, u, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gs(e) {
  const {
    width: t,
    height: n
  } = zi(e);
  return {
    width: t,
    height: n
  };
}
function Ks(e, t, n) {
  const r = Ae(t), i = _e(t), o = n === "fixed", a = We(e, !0, o, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  if (r || !r && !o)
    if ((ct(t) !== "body" || Ot(i)) && (u = tn(t)), r) {
      const f = We(t, !0, o, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else
      i && (l.x = Ii(i));
  const s = a.left + u.scrollLeft - l.x, c = a.top + u.scrollTop - l.y;
  return {
    x: s,
    y: c,
    width: a.width,
    height: a.height
  };
}
function fn(e) {
  return ye(e).position === "static";
}
function Ar(e, t) {
  return !Ae(e) || ye(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ri(e, t) {
  const n = le(e);
  if (Jn(e))
    return n;
  if (!Ae(e)) {
    let i = Ne(e);
    for (; i && !ot(i); ) {
      if (Ce(i) && !fn(i))
        return i;
      i = Ne(i);
    }
    return n;
  }
  let r = Ar(e, t);
  for (; r && Is(r) && fn(r); )
    r = Ar(r, t);
  return r && ot(r) && fn(r) && !Xn(r) ? n : r || Ns(e) || n;
}
const Qs = function(e) {
  return q(this, null, function* () {
    const t = this.getOffsetParent || Ri, n = this.getDimensions, r = yield n(e.floating);
    return {
      reference: Ks(e.reference, yield t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: r.width,
        height: r.height
      }
    };
  });
};
function Xs(e) {
  return ye(e).direction === "rtl";
}
const U = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fs,
  getDocumentElement: _e,
  getClippingRect: Vs,
  getOffsetParent: Ri,
  getElementRects: Qs,
  getClientRects: Bs,
  getDimensions: Gs,
  getScale: nt,
  isElement: Ce,
  isRTL: Xs
};
function Ys(e, t) {
  let n = null, r;
  const i = _e(e);
  function o() {
    var u;
    clearTimeout(r), (u = n) == null || u.disconnect(), n = null;
  }
  function a(u, l) {
    u === void 0 && (u = !1), l === void 0 && (l = 1), o();
    const {
      left: s,
      top: c,
      width: f,
      height: d
    } = e.getBoundingClientRect();
    if (u || t(), !f || !d)
      return;
    const g = Lt(c), T = Lt(i.clientWidth - (s + f)), k = Lt(i.clientHeight - (c + d)), S = Lt(s), w = {
      rootMargin: -g + "px " + -T + "px " + -k + "px " + -S + "px",
      threshold: tt(0, Mn(1, l)) || 1
    };
    let A = !0;
    function y(C) {
      const $ = C[0].intersectionRatio;
      if ($ !== l) {
        if (!A)
          return a();
        $ ? a(!1, $) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A = !1;
    }
    try {
      n = new IntersectionObserver(y, X(L({}, w), {
        // Handle <iframe>s
        root: i.ownerDocument
      }));
    } catch (C) {
      n = new IntersectionObserver(y, w);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function ji(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, s = Zn(e), c = i || o ? [...s ? wt(s) : [], ...wt(t)] : [];
  c.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), o && b.addEventListener("resize", n);
  });
  const f = s && u ? Ys(s, n) : null;
  let d = -1, g = null;
  a && (g = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === s && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var A;
      (A = g) == null || A.observe(t);
    })), n();
  }), s && !l && g.observe(s), g.observe(t));
  let T, k = l ? We(e) : null;
  l && S();
  function S() {
    const b = We(e);
    k && (b.x !== k.x || b.y !== k.y || b.width !== k.width || b.height !== k.height) && n(), k = b, T = requestAnimationFrame(S);
  }
  return n(), () => {
    var b;
    c.forEach((w) => {
      i && w.removeEventListener("scroll", n), o && w.removeEventListener("resize", n);
    }), f == null || f(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(T);
  };
}
const Zs = Ms;
let Js = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Be = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Js[Math.random() * 64 | 0];
  return t;
};
function ea(e) {
  return !!((e.type === "text/css" || e.rel === "stylesheet") && e.href);
}
function ta(e) {
  const t = new URL(e.href, document.baseURI);
  if (ea(e) && t.origin === location.origin)
    return t;
}
function na(e) {
  return q(this, null, function* () {
    return Promise.all(
      e.map((t) => q(this, null, function* () {
        if (!t.url)
          return t;
        const r = yield (yield fetch(t.url.toString())).text();
        return X(L({}, t), { css: r });
      }))
    );
  });
}
function ra() {
  const e = document.querySelectorAll('[style*="anchor"]'), t = [];
  return e.forEach((n) => {
    const r = Be(12), i = "data-has-inline-styles";
    n.setAttribute(i, r);
    const o = n.getAttribute("style"), a = `[${i}="${r}"] { ${o} }`;
    t.push({ el: n, css: a });
  }), t;
}
function ia() {
  return q(this, null, function* () {
    const e = document.querySelectorAll("link, style"), t = [];
    e.forEach((r) => {
      if (r.tagName.toLowerCase() === "link") {
        const i = ta(r);
        i && t.push({ el: r, url: i });
      }
      r.tagName.toLowerCase() === "style" && t.push({ el: r, css: r.innerHTML });
    });
    const n = ra();
    return yield na([...t, ...n]);
  });
}
const pn = 0, v = 1, z = 2, H = 3, j = 4, Te = 5, nn = 6, J = 7, ie = 8, P = 9, O = 10, D = 11, _ = 12, F = 13, Et = 14, oe = 15, ee = 16, se = 17, Oe = 18, ce = 19, ke = 20, G = 21, N = 22, te = 23, pe = 24, re = 25, oa = 0;
function Q(e) {
  return e >= 48 && e <= 57;
}
function Re(e) {
  return Q(e) || // 0 .. 9
  e >= 65 && e <= 70 || // A .. F
  e >= 97 && e <= 102;
}
function er(e) {
  return e >= 65 && e <= 90;
}
function sa(e) {
  return e >= 97 && e <= 122;
}
function aa(e) {
  return er(e) || sa(e);
}
function la(e) {
  return e >= 128;
}
function Vt(e) {
  return aa(e) || la(e) || e === 95;
}
function Di(e) {
  return Vt(e) || Q(e) || e === 45;
}
function ca(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}
function Gt(e) {
  return e === 10 || e === 13 || e === 12;
}
function qe(e) {
  return Gt(e) || e === 32 || e === 9;
}
function Se(e, t) {
  return !(e !== 92 || Gt(t) || t === oa);
}
function jt(e, t, n) {
  return e === 45 ? Vt(t) || t === 45 || Se(t, n) : Vt(e) ? !0 : e === 92 ? Se(e, t) : !1;
}
function dn(e, t, n) {
  return e === 43 || e === 45 ? Q(t) ? 2 : t === 46 && Q(n) ? 3 : 0 : e === 46 ? Q(t) ? 2 : 0 : Q(e) ? 1 : 0;
}
function Fi(e) {
  return e === 65279 || e === 65534 ? 1 : 0;
}
const In = new Array(128), ua = 128, Dt = 130, Bi = 131, tr = 132, Ui = 133;
for (let e = 0; e < In.length; e++)
  In[e] = qe(e) && Dt || Q(e) && Bi || Vt(e) && tr || ca(e) && Ui || e || ua;
function mn(e) {
  return e < 128 ? In[e] : tr;
}
function rt(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function Nn(e, t, n) {
  return n === 13 && rt(e, t + 1) === 10 ? 2 : 1;
}
function it(e, t, n) {
  let r = e.charCodeAt(t);
  return er(r) && (r = r | 32), r === n;
}
function St(e, t, n, r) {
  if (n - t !== r.length || t < 0 || n > e.length)
    return !1;
  for (let i = t; i < n; i++) {
    const o = r.charCodeAt(i - t);
    let a = e.charCodeAt(i);
    if (er(a) && (a = a | 32), a !== o)
      return !1;
  }
  return !0;
}
function ha(e, t) {
  for (; t >= 0 && qe(e.charCodeAt(t)); t--)
    ;
  return t + 1;
}
function $t(e, t) {
  for (; t < e.length && qe(e.charCodeAt(t)); t++)
    ;
  return t;
}
function gn(e, t) {
  for (; t < e.length && Q(e.charCodeAt(t)); t++)
    ;
  return t;
}
function st(e, t) {
  if (t += 2, Re(rt(e, t - 1))) {
    for (const r = Math.min(e.length, t + 5); t < r && Re(rt(e, t)); t++)
      ;
    const n = rt(e, t);
    qe(n) && (t += Nn(e, t, n));
  }
  return t;
}
function _t(e, t) {
  for (; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (!Di(n)) {
      if (Se(n, rt(e, t + 1))) {
        t = st(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
}
function rn(e, t) {
  let n = e.charCodeAt(t);
  if ((n === 43 || n === 45) && (n = e.charCodeAt(t += 1)), Q(n) && (t = gn(e, t + 1), n = e.charCodeAt(t)), n === 46 && Q(e.charCodeAt(t + 1)) && (t += 2, t = gn(e, t)), it(
    e,
    t,
    101
    /* e */
  )) {
    let r = 0;
    n = e.charCodeAt(t + 1), (n === 45 || n === 43) && (r = 1, n = e.charCodeAt(t + 2)), Q(n) && (t = gn(e, t + 1 + r + 1));
  }
  return t;
}
function bn(e, t) {
  for (; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 41) {
      t++;
      break;
    }
    Se(n, rt(e, t + 1)) && (t = st(e, t));
  }
  return t;
}
function Hi(e) {
  if (e.length === 1 && !Re(e.charCodeAt(0)))
    return e[0];
  let t = parseInt(e, 16);
  return (t === 0 || // If this number is zero,
  t >= 55296 && t <= 57343 || // or is for a surrogate,
  t > 1114111) && (t = 65533), String.fromCodePoint(t);
}
const Wi = [
  "EOF-token",
  "ident-token",
  "function-token",
  "at-keyword-token",
  "hash-token",
  "string-token",
  "bad-string-token",
  "url-token",
  "bad-url-token",
  "delim-token",
  "number-token",
  "percentage-token",
  "dimension-token",
  "whitespace-token",
  "CDO-token",
  "CDC-token",
  "colon-token",
  "semicolon-token",
  "comma-token",
  "[-token",
  "]-token",
  "(-token",
  ")-token",
  "{-token",
  "}-token"
], fa = 16 * 1024;
function Kt(e = null, t) {
  return e === null || e.length < t ? new Uint32Array(Math.max(t + 1024, fa)) : e;
}
const Tr = 10, pa = 12, Or = 13;
function Er(e) {
  const t = e.source, n = t.length, r = t.length > 0 ? Fi(t.charCodeAt(0)) : 0, i = Kt(e.lines, n), o = Kt(e.columns, n);
  let a = e.startLine, u = e.startColumn;
  for (let l = r; l < n; l++) {
    const s = t.charCodeAt(l);
    i[l] = a, o[l] = u++, (s === Tr || s === Or || s === pa) && (s === Or && l + 1 < n && t.charCodeAt(l + 1) === Tr && (l++, i[l] = a, o[l] = u), a++, u = 1);
  }
  i[n] = a, o[n] = u, e.lines = i, e.columns = o, e.computed = !0;
}
class da {
  constructor() {
    this.lines = null, this.columns = null, this.computed = !1;
  }
  setSource(t, n = 0, r = 1, i = 1) {
    this.source = t, this.startOffset = n, this.startLine = r, this.startColumn = i, this.computed = !1;
  }
  getLocation(t, n) {
    return this.computed || Er(this), {
      source: n,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t]
    };
  }
  getLocationRange(t, n, r) {
    return this.computed || Er(this), {
      source: r,
      start: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      },
      end: {
        offset: this.startOffset + n,
        line: this.lines[n],
        column: this.columns[n]
      }
    };
  }
}
const he = 16777215, Pe = 24, ma = /* @__PURE__ */ new Map([
  [z, N],
  [G, N],
  [ce, ke],
  [te, pe]
]);
class ga {
  constructor(t, n) {
    this.setSource(t, n);
  }
  reset() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  }
  setSource(t = "", n = () => {
  }) {
    t = String(t || "");
    const r = t.length, i = Kt(this.offsetAndType, t.length + 1), o = Kt(this.balance, t.length + 1);
    let a = 0, u = 0, l = 0, s = -1;
    for (this.offsetAndType = null, this.balance = null, n(t, (c, f, d) => {
      switch (c) {
        default:
          o[a] = r;
          break;
        case u: {
          let g = l & he;
          for (l = o[g], u = l >> Pe, o[a] = g, o[g++] = a; g < a; g++)
            o[g] === r && (o[g] = a);
          break;
        }
        case G:
        case z:
        case ce:
        case te:
          o[a] = l, u = ma.get(c), l = u << Pe | a;
          break;
      }
      i[a++] = c << Pe | d, s === -1 && (s = f);
    }), i[a] = pn << Pe | r, o[a] = r, o[r] = r; l !== 0; ) {
      const c = l & he;
      l = o[c], o[c] = r;
    }
    this.source = t, this.firstCharOffset = s === -1 ? 0 : s, this.tokenCount = a, this.offsetAndType = i, this.balance = o, this.reset(), this.next();
  }
  lookupType(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> Pe : pn;
  }
  lookupOffset(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & he : this.source.length;
  }
  lookupValue(t, n) {
    return t += this.tokenIndex, t < this.tokenCount ? St(
      this.source,
      this.offsetAndType[t - 1] & he,
      this.offsetAndType[t] & he,
      n
    ) : !1;
  }
  getTokenStart(t) {
    return t === this.tokenIndex ? this.tokenStart : t > 0 ? t < this.tokenCount ? this.offsetAndType[t - 1] & he : this.offsetAndType[this.tokenCount] & he : this.firstCharOffset;
  }
  substrToCursor(t) {
    return this.source.substring(t, this.tokenStart);
  }
  isBalanceEdge(t) {
    return this.balance[this.tokenIndex] < t;
  }
  isDelim(t, n) {
    return n ? this.lookupType(n) === P && this.source.charCodeAt(this.lookupOffset(n)) === t : this.tokenType === P && this.source.charCodeAt(this.tokenStart) === t;
  }
  skip(t) {
    let n = this.tokenIndex + t;
    n < this.tokenCount ? (this.tokenIndex = n, this.tokenStart = this.offsetAndType[n - 1] & he, n = this.offsetAndType[n], this.tokenType = n >> Pe, this.tokenEnd = n & he) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let t = this.tokenIndex + 1;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> Pe, this.tokenEnd = t & he) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = pn, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === F || this.tokenType === re; )
      this.next();
  }
  skipUntilBalanced(t, n) {
    let r = t, i, o;
    e:
      for (; r < this.tokenCount; r++) {
        if (i = this.balance[r], i < t)
          break e;
        switch (o = r > 0 ? this.offsetAndType[r - 1] & he : this.firstCharOffset, n(this.source.charCodeAt(o))) {
          case 1:
            break e;
          case 2:
            r++;
            break e;
          default:
            this.balance[i] === r && (r = i);
        }
      }
    this.skip(r - this.tokenIndex);
  }
  forEachToken(t) {
    for (let n = 0, r = this.firstCharOffset; n < this.tokenCount; n++) {
      const i = r, o = this.offsetAndType[n], a = o & he, u = o >> Pe;
      r = a, t(u, i, a, n);
    }
  }
  dump() {
    const t = new Array(this.tokenCount);
    return this.forEachToken((n, r, i, o) => {
      t[o] = {
        idx: o,
        type: Wi[n],
        chunk: this.source.substring(r, i),
        balance: this.balance[o]
      };
    }), t;
  }
}
function on(e, t) {
  function n(f) {
    return f < u ? e.charCodeAt(f) : 0;
  }
  function r() {
    if (s = rn(e, s), jt(n(s), n(s + 1), n(s + 2))) {
      c = _, s = _t(e, s);
      return;
    }
    if (n(s) === 37) {
      c = D, s++;
      return;
    }
    c = O;
  }
  function i() {
    const f = s;
    if (s = _t(e, s), St(e, f, s, "url") && n(s) === 40) {
      if (s = $t(e, s + 1), n(s) === 34 || n(s) === 39) {
        c = z, s = f + 4;
        return;
      }
      a();
      return;
    }
    if (n(s) === 40) {
      c = z, s++;
      return;
    }
    c = v;
  }
  function o(f) {
    for (f || (f = n(s++)), c = Te; s < e.length; s++) {
      const d = e.charCodeAt(s);
      switch (mn(d)) {
        case f:
          s++;
          return;
        case Dt:
          if (Gt(d)) {
            s += Nn(e, s, d), c = nn;
            return;
          }
          break;
        case 92:
          if (s === e.length - 1)
            break;
          const g = n(s + 1);
          Gt(g) ? s += Nn(e, s + 1, g) : Se(d, g) && (s = st(e, s) - 1);
          break;
      }
    }
  }
  function a() {
    for (c = J, s = $t(e, s); s < e.length; s++) {
      const f = e.charCodeAt(s);
      switch (mn(f)) {
        case 41:
          s++;
          return;
        case Dt:
          if (s = $t(e, s), n(s) === 41 || s >= e.length) {
            s < e.length && s++;
            return;
          }
          s = bn(e, s), c = ie;
          return;
        case 34:
        case 39:
        case 40:
        case Ui:
          s = bn(e, s), c = ie;
          return;
        case 92:
          if (Se(f, n(s + 1))) {
            s = st(e, s) - 1;
            break;
          }
          s = bn(e, s), c = ie;
          return;
      }
    }
  }
  e = String(e || "");
  const u = e.length;
  let l = Fi(n(0)), s = l, c;
  for (; s < u; ) {
    const f = e.charCodeAt(s);
    switch (mn(f)) {
      case Dt:
        c = F, s = $t(e, s + 1);
        break;
      case 34:
        o();
        break;
      case 35:
        Di(n(s + 1)) || Se(n(s + 1), n(s + 2)) ? (c = j, s = _t(e, s + 1)) : (c = P, s++);
        break;
      case 39:
        o();
        break;
      case 40:
        c = G, s++;
        break;
      case 41:
        c = N, s++;
        break;
      case 43:
        dn(f, n(s + 1), n(s + 2)) ? r() : (c = P, s++);
        break;
      case 44:
        c = Oe, s++;
        break;
      case 45:
        dn(f, n(s + 1), n(s + 2)) ? r() : n(s + 1) === 45 && n(s + 2) === 62 ? (c = oe, s = s + 3) : jt(f, n(s + 1), n(s + 2)) ? i() : (c = P, s++);
        break;
      case 46:
        dn(f, n(s + 1), n(s + 2)) ? r() : (c = P, s++);
        break;
      case 47:
        n(s + 1) === 42 ? (c = re, s = e.indexOf("*/", s + 2), s = s === -1 ? e.length : s + 2) : (c = P, s++);
        break;
      case 58:
        c = ee, s++;
        break;
      case 59:
        c = se, s++;
        break;
      case 60:
        n(s + 1) === 33 && n(s + 2) === 45 && n(s + 3) === 45 ? (c = Et, s = s + 4) : (c = P, s++);
        break;
      case 64:
        jt(n(s + 1), n(s + 2), n(s + 3)) ? (c = H, s = _t(e, s + 1)) : (c = P, s++);
        break;
      case 91:
        c = ce, s++;
        break;
      case 92:
        Se(f, n(s + 1)) ? i() : (c = P, s++);
        break;
      case 93:
        c = ke, s++;
        break;
      case 123:
        c = te, s++;
        break;
      case 125:
        c = pe, s++;
        break;
      case Bi:
        r();
        break;
      case tr:
        i();
        break;
      default:
        c = P, s++;
    }
    t(c, l, l = s);
  }
}
let Ke = null;
class V {
  static createItem(t) {
    return {
      prev: null,
      next: null,
      data: t
    };
  }
  constructor() {
    this.head = null, this.tail = null, this.cursor = null;
  }
  createItem(t) {
    return V.createItem(t);
  }
  // cursor helpers
  allocateCursor(t, n) {
    let r;
    return Ke !== null ? (r = Ke, Ke = Ke.cursor, r.prev = t, r.next = n, r.cursor = this.cursor) : r = {
      prev: t,
      next: n,
      cursor: this.cursor
    }, this.cursor = r, r;
  }
  releaseCursor() {
    const { cursor: t } = this;
    this.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = Ke, Ke = t;
  }
  updateCursors(t, n, r, i) {
    let { cursor: o } = this;
    for (; o !== null; )
      o.prev === t && (o.prev = n), o.next === r && (o.next = i), o = o.cursor;
  }
  *[Symbol.iterator]() {
    for (let t = this.head; t !== null; t = t.next)
      yield t.data;
  }
  // getters
  get size() {
    let t = 0;
    for (let n = this.head; n !== null; n = n.next)
      t++;
    return t;
  }
  get isEmpty() {
    return this.head === null;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  // convertors
  fromArray(t) {
    let n = null;
    this.head = null;
    for (let r of t) {
      const i = V.createItem(r);
      n !== null ? n.next = i : this.head = i, i.prev = n, n = i;
    }
    return this.tail = n, this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  // array-like methods
  forEach(t, n = this) {
    const r = this.allocateCursor(null, this.head);
    for (; r.next !== null; ) {
      const i = r.next;
      r.next = i.next, t.call(n, i.data, i, this);
    }
    this.releaseCursor();
  }
  forEachRight(t, n = this) {
    const r = this.allocateCursor(this.tail, null);
    for (; r.prev !== null; ) {
      const i = r.prev;
      r.prev = i.prev, t.call(n, i.data, i, this);
    }
    this.releaseCursor();
  }
  reduce(t, n, r = this) {
    let i = this.allocateCursor(null, this.head), o = n, a;
    for (; i.next !== null; )
      a = i.next, i.next = a.next, o = t.call(r, o, a.data, a, this);
    return this.releaseCursor(), o;
  }
  reduceRight(t, n, r = this) {
    let i = this.allocateCursor(this.tail, null), o = n, a;
    for (; i.prev !== null; )
      a = i.prev, i.prev = a.prev, o = t.call(r, o, a.data, a, this);
    return this.releaseCursor(), o;
  }
  some(t, n = this) {
    for (let r = this.head; r !== null; r = r.next)
      if (t.call(n, r.data, r, this))
        return !0;
    return !1;
  }
  map(t, n = this) {
    const r = new V();
    for (let i = this.head; i !== null; i = i.next)
      r.appendData(t.call(n, i.data, i, this));
    return r;
  }
  filter(t, n = this) {
    const r = new V();
    for (let i = this.head; i !== null; i = i.next)
      t.call(n, i.data, i, this) && r.appendData(i.data);
    return r;
  }
  nextUntil(t, n, r = this) {
    if (t === null)
      return;
    const i = this.allocateCursor(null, t);
    for (; i.next !== null; ) {
      const o = i.next;
      if (i.next = o.next, n.call(r, o.data, o, this))
        break;
    }
    this.releaseCursor();
  }
  prevUntil(t, n, r = this) {
    if (t === null)
      return;
    const i = this.allocateCursor(t, null);
    for (; i.prev !== null; ) {
      const o = i.prev;
      if (i.prev = o.prev, n.call(r, o.data, o, this))
        break;
    }
    this.releaseCursor();
  }
  // mutation
  clear() {
    this.head = null, this.tail = null;
  }
  copy() {
    const t = new V();
    for (let n of this)
      t.appendData(n);
    return t;
  }
  prepend(t) {
    return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
  }
  prependData(t) {
    return this.prepend(V.createItem(t));
  }
  append(t) {
    return this.insert(t);
  }
  appendData(t) {
    return this.insert(V.createItem(t));
  }
  insert(t, n = null) {
    if (n !== null)
      if (this.updateCursors(n.prev, t, n, t), n.prev === null) {
        if (this.head !== n)
          throw new Error("before doesn't belong to list");
        this.head = t, n.prev = t, t.next = n, this.updateCursors(null, t);
      } else
        n.prev.next = t, t.prev = n.prev, n.prev = t, t.next = n;
    else
      this.updateCursors(this.tail, t, null, t), this.tail !== null ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t;
    return this;
  }
  insertData(t, n) {
    return this.insert(V.createItem(t), n);
  }
  remove(t) {
    if (this.updateCursors(t, t.prev, t, t.next), t.prev !== null)
      t.prev.next = t.next;
    else {
      if (this.head !== t)
        throw new Error("item doesn't belong to list");
      this.head = t.next;
    }
    if (t.next !== null)
      t.next.prev = t.prev;
    else {
      if (this.tail !== t)
        throw new Error("item doesn't belong to list");
      this.tail = t.prev;
    }
    return t.prev = null, t.next = null, t;
  }
  push(t) {
    this.insert(V.createItem(t));
  }
  pop() {
    return this.tail !== null ? this.remove(this.tail) : null;
  }
  unshift(t) {
    this.prepend(V.createItem(t));
  }
  shift() {
    return this.head !== null ? this.remove(this.head) : null;
  }
  prependList(t) {
    return this.insertList(t, this.head);
  }
  appendList(t) {
    return this.insertList(t);
  }
  insertList(t, n) {
    return t.head === null ? this : (n != null ? (this.updateCursors(n.prev, t.tail, n, t.head), n.prev !== null ? (n.prev.next = t.head, t.head.prev = n.prev) : this.head = t.head, n.prev = t.tail, t.tail.next = n) : (this.updateCursors(this.tail, t.tail, null, t.head), this.tail !== null ? (this.tail.next = t.head, t.head.prev = this.tail) : this.head = t.head, this.tail = t.tail), t.head = null, t.tail = null, this);
  }
  replace(t, n) {
    "head" in n ? this.insertList(n, t) : this.insert(n, t), this.remove(t);
  }
}
function sn(e, t) {
  const n = Object.create(SyntaxError.prototype), r = new Error();
  return Object.assign(n, {
    name: e,
    message: t,
    get stack() {
      return (r.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
    }
  });
}
const yn = 100, Lr = 60, $r = "    ";
function _r({ source: e, line: t, column: n }, r) {
  function i(c, f) {
    return o.slice(c, f).map(
      (d, g) => String(c + g + 1).padStart(l) + " |" + d
    ).join(`
`);
  }
  const o = e.split(/\r\n?|\n|\f/), a = Math.max(1, t - r) - 1, u = Math.min(t + r, o.length + 1), l = Math.max(4, String(u).length) + 1;
  let s = 0;
  n += ($r.length - 1) * (o[t - 1].substr(0, n - 1).match(/\t/g) || []).length, n > yn && (s = n - Lr + 3, n = Lr - 2);
  for (let c = a; c <= u; c++)
    c >= 0 && c < o.length && (o[c] = o[c].replace(/\t/g, $r), o[c] = (s > 0 && o[c].length > s ? "…" : "") + o[c].substr(s, yn - 2) + (o[c].length > s + yn - 1 ? "…" : ""));
  return [
    i(a, t),
    new Array(n + l + 2).join("-") + "^",
    i(t, u)
  ].filter(Boolean).join(`
`);
}
function Pr(e, t, n, r, i) {
  return Object.assign(sn("SyntaxError", e), {
    source: t,
    offset: n,
    line: r,
    column: i,
    sourceFragment(a) {
      return _r({ source: t, line: r, column: i }, isNaN(a) ? 0 : a);
    },
    get formattedMessage() {
      return `Parse error: ${e}
` + _r({ source: t, line: r, column: i }, 2);
    }
  });
}
function ba(e) {
  const t = this.createList();
  let n = !1;
  const r = {
    recognizer: e
  };
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case re:
        this.next();
        continue;
      case F:
        n = !0, this.next();
        continue;
    }
    let i = e.getNode.call(this, r);
    if (i === void 0)
      break;
    n && (e.onWhiteSpace && e.onWhiteSpace.call(this, i, t, r), n = !1), t.push(i);
  }
  return n && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, r), t;
}
const zr = () => {
}, ya = 33, ka = 35, kn = 59, Mr = 123, Ir = 0;
function xa(e) {
  return function() {
    return this[e]();
  };
}
function xn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n in e) {
    const r = e[n], i = r.parse || r;
    i && (t[n] = i);
  }
  return t;
}
function va(e) {
  const t = {
    context: /* @__PURE__ */ Object.create(null),
    scope: Object.assign(/* @__PURE__ */ Object.create(null), e.scope),
    atrule: xn(e.atrule),
    pseudo: xn(e.pseudo),
    node: xn(e.node)
  };
  for (const n in e.parseContext)
    switch (typeof e.parseContext[n]) {
      case "function":
        t.context[n] = e.parseContext[n];
        break;
      case "string":
        t.context[n] = xa(e.parseContext[n]);
        break;
    }
  return L(L({
    config: t
  }, t), t.node);
}
function wa(e) {
  let t = "", n = "<unknown>", r = !1, i = zr, o = !1;
  const a = new da(), u = Object.assign(new ga(), va(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: ba,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket(s) {
      return s === Mr ? 1 : 0;
    },
    consumeUntilLeftCurlyBracketOrSemicolon(s) {
      return s === Mr || s === kn ? 1 : 0;
    },
    consumeUntilExclamationMarkOrSemicolon(s) {
      return s === ya || s === kn ? 1 : 0;
    },
    consumeUntilSemicolonIncluded(s) {
      return s === kn ? 2 : 0;
    },
    createList() {
      return new V();
    },
    createSingleNodeList(s) {
      return new V().appendData(s);
    },
    getFirstListNode(s) {
      return s && s.first;
    },
    getLastListNode(s) {
      return s && s.last;
    },
    parseWithFallback(s, c) {
      const f = this.tokenIndex;
      try {
        return s.call(this);
      } catch (d) {
        if (o)
          throw d;
        const g = c.call(this, f);
        return o = !0, i(d, g), o = !1, g;
      }
    },
    lookupNonWSType(s) {
      let c;
      do
        if (c = this.lookupType(s++), c !== F)
          return c;
      while (c !== Ir);
      return Ir;
    },
    charCodeAt(s) {
      return s >= 0 && s < t.length ? t.charCodeAt(s) : 0;
    },
    substring(s, c) {
      return t.substring(s, c);
    },
    substrToCursor(s) {
      return this.source.substring(s, this.tokenStart);
    },
    cmpChar(s, c) {
      return it(t, s, c);
    },
    cmpStr(s, c, f) {
      return St(t, s, c, f);
    },
    consume(s) {
      const c = this.tokenStart;
      return this.eat(s), this.substrToCursor(c);
    },
    consumeFunctionName() {
      const s = t.substring(this.tokenStart, this.tokenEnd - 1);
      return this.eat(z), s;
    },
    consumeNumber(s) {
      const c = t.substring(this.tokenStart, rn(t, this.tokenStart));
      return this.eat(s), c;
    },
    eat(s) {
      if (this.tokenType !== s) {
        const c = Wi[s].slice(0, -6).replace(/-/g, " ").replace(/^./, (g) => g.toUpperCase());
        let f = `${/[[\](){}]/.test(c) ? `"${c}"` : c} is expected`, d = this.tokenStart;
        switch (s) {
          case v:
            this.tokenType === z || this.tokenType === J ? (d = this.tokenEnd - 1, f = "Identifier is expected but function found") : f = "Identifier is expected";
            break;
          case j:
            this.isDelim(ka) && (this.next(), d++, f = "Name is expected");
            break;
          case D:
            this.tokenType === O && (d = this.tokenEnd, f = "Percent sign is expected");
            break;
        }
        this.error(f, d);
      }
      this.next();
    },
    eatIdent(s) {
      (this.tokenType !== v || this.lookupValue(0, s) === !1) && this.error(`Identifier "${s}" is expected`), this.next();
    },
    eatDelim(s) {
      this.isDelim(s) || this.error(`Delim "${String.fromCharCode(s)}" is expected`), this.next();
    },
    getLocation(s, c) {
      return r ? a.getLocationRange(
        s,
        c,
        n
      ) : null;
    },
    getLocationFromList(s) {
      if (r) {
        const c = this.getFirstListNode(s), f = this.getLastListNode(s);
        return a.getLocationRange(
          c !== null ? c.loc.start.offset - a.startOffset : this.tokenStart,
          f !== null ? f.loc.end.offset - a.startOffset : this.tokenStart,
          n
        );
      }
      return null;
    },
    error(s, c) {
      const f = typeof c != "undefined" && c < t.length ? a.getLocation(c) : this.eof ? a.getLocation(ha(t, t.length - 1)) : a.getLocation(this.tokenStart);
      throw new Pr(
        s || "Unexpected input",
        t,
        f.offset,
        f.line,
        f.column
      );
    }
  });
  return Object.assign(function(s, c) {
    t = s, c = c || {}, u.setSource(t, on), a.setSource(
      t,
      c.offset,
      c.line,
      c.column
    ), n = c.filename || "<unknown>", r = !!c.positions, i = typeof c.onParseError == "function" ? c.onParseError : zr, o = !1, u.parseAtrulePrelude = "parseAtrulePrelude" in c ? !!c.parseAtrulePrelude : !0, u.parseRulePrelude = "parseRulePrelude" in c ? !!c.parseRulePrelude : !0, u.parseValue = "parseValue" in c ? !!c.parseValue : !0, u.parseCustomProperty = "parseCustomProperty" in c ? !!c.parseCustomProperty : !1;
    const { context: f = "default", onComment: d } = c;
    if (!(f in u.context))
      throw new Error("Unknown context `" + f + "`");
    typeof d == "function" && u.forEachToken((T, k, S) => {
      if (T === re) {
        const b = u.getLocation(k, S), w = St(t, S - 2, S, "*/") ? t.slice(k + 2, S - 2) : t.slice(k + 2, S);
        d(w, b);
      }
    });
    const g = u.context[f].call(u, c);
    return u.eof || u.error(), g;
  }, {
    SyntaxError: Pr,
    config: u.config
  });
}
var nr = {}, rr = {}, Nr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
rr.encode = function(e) {
  if (0 <= e && e < Nr.length)
    return Nr[e];
  throw new TypeError("Must be between 0 and 63: " + e);
};
rr.decode = function(e) {
  var t = 65, n = 90, r = 97, i = 122, o = 48, a = 57, u = 43, l = 47, s = 26, c = 52;
  return t <= e && e <= n ? e - t : r <= e && e <= i ? e - r + s : o <= e && e <= a ? e - o + c : e == u ? 62 : e == l ? 63 : -1;
};
var qi = rr, ir = 5, Vi = 1 << ir, Gi = Vi - 1, Ki = Vi;
function Sa(e) {
  return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
}
function Ca(e) {
  var t = (e & 1) === 1, n = e >> 1;
  return t ? -n : n;
}
nr.encode = function(t) {
  var n = "", r, i = Sa(t);
  do
    r = i & Gi, i >>>= ir, i > 0 && (r |= Ki), n += qi.encode(r);
  while (i > 0);
  return n;
};
nr.decode = function(t, n, r) {
  var i = t.length, o = 0, a = 0, u, l;
  do {
    if (n >= i)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = qi.decode(t.charCodeAt(n++)), l === -1)
      throw new Error("Invalid base64 digit: " + t.charAt(n - 1));
    u = !!(l & Ki), l &= Gi, o = o + (l << a), a += ir;
  } while (u);
  r.value = Ca(o), r.rest = n;
};
var an = {};
(function(e) {
  function t(h, p, x) {
    if (p in h)
      return h[p];
    if (arguments.length === 3)
      return x;
    throw new Error('"' + p + '" is a required argument.');
  }
  e.getArg = t;
  var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r = /^data:.+\,.+$/;
  function i(h) {
    var p = h.match(n);
    return p ? {
      scheme: p[1],
      auth: p[2],
      host: p[3],
      port: p[4],
      path: p[5]
    } : null;
  }
  e.urlParse = i;
  function o(h) {
    var p = "";
    return h.scheme && (p += h.scheme + ":"), p += "//", h.auth && (p += h.auth + "@"), h.host && (p += h.host), h.port && (p += ":" + h.port), h.path && (p += h.path), p;
  }
  e.urlGenerate = o;
  var a = 32;
  function u(h) {
    var p = [];
    return function(x) {
      for (var m = 0; m < p.length; m++)
        if (p[m].input === x) {
          var Y = p[0];
          return p[0] = p[m], p[m] = Y, p[0].result;
        }
      var W = h(x);
      return p.unshift({
        input: x,
        result: W
      }), p.length > a && p.pop(), W;
    };
  }
  var l = u(function(p) {
    var x = p, m = i(p);
    if (m) {
      if (!m.path)
        return p;
      x = m.path;
    }
    for (var Y = e.isAbsolute(x), W = [], me = 0, K = 0; ; )
      if (me = K, K = x.indexOf("/", me), K === -1) {
        W.push(x.slice(me));
        break;
      } else
        for (W.push(x.slice(me, K)); K < x.length && x[K] === "/"; )
          K++;
    for (var Ee, ue = 0, K = W.length - 1; K >= 0; K--)
      Ee = W[K], Ee === "." ? W.splice(K, 1) : Ee === ".." ? ue++ : ue > 0 && (Ee === "" ? (W.splice(K + 1, ue), ue = 0) : (W.splice(K, 2), ue--));
    return x = W.join("/"), x === "" && (x = Y ? "/" : "."), m ? (m.path = x, o(m)) : x;
  });
  e.normalize = l;
  function s(h, p) {
    h === "" && (h = "."), p === "" && (p = ".");
    var x = i(p), m = i(h);
    if (m && (h = m.path || "/"), x && !x.scheme)
      return m && (x.scheme = m.scheme), o(x);
    if (x || p.match(r))
      return p;
    if (m && !m.host && !m.path)
      return m.host = p, o(m);
    var Y = p.charAt(0) === "/" ? p : l(h.replace(/\/+$/, "") + "/" + p);
    return m ? (m.path = Y, o(m)) : Y;
  }
  e.join = s, e.isAbsolute = function(h) {
    return h.charAt(0) === "/" || n.test(h);
  };
  function c(h, p) {
    h === "" && (h = "."), h = h.replace(/\/$/, "");
    for (var x = 0; p.indexOf(h + "/") !== 0; ) {
      var m = h.lastIndexOf("/");
      if (m < 0 || (h = h.slice(0, m), h.match(/^([^\/]+:\/)?\/*$/)))
        return p;
      ++x;
    }
    return Array(x + 1).join("../") + p.substr(h.length + 1);
  }
  e.relative = c;
  var f = function() {
    var h = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in h);
  }();
  function d(h) {
    return h;
  }
  function g(h) {
    return k(h) ? "$" + h : h;
  }
  e.toSetString = f ? d : g;
  function T(h) {
    return k(h) ? h.slice(1) : h;
  }
  e.fromSetString = f ? d : T;
  function k(h) {
    if (!h)
      return !1;
    var p = h.length;
    if (p < 9 || h.charCodeAt(p - 1) !== 95 || h.charCodeAt(p - 2) !== 95 || h.charCodeAt(p - 3) !== 111 || h.charCodeAt(p - 4) !== 116 || h.charCodeAt(p - 5) !== 111 || h.charCodeAt(p - 6) !== 114 || h.charCodeAt(p - 7) !== 112 || h.charCodeAt(p - 8) !== 95 || h.charCodeAt(p - 9) !== 95)
      return !1;
    for (var x = p - 10; x >= 0; x--)
      if (h.charCodeAt(x) !== 36)
        return !1;
    return !0;
  }
  function S(h, p, x) {
    var m = y(h.source, p.source);
    return m !== 0 || (m = h.originalLine - p.originalLine, m !== 0) || (m = h.originalColumn - p.originalColumn, m !== 0 || x) || (m = h.generatedColumn - p.generatedColumn, m !== 0) || (m = h.generatedLine - p.generatedLine, m !== 0) ? m : y(h.name, p.name);
  }
  e.compareByOriginalPositions = S;
  function b(h, p, x) {
    var m;
    return m = h.originalLine - p.originalLine, m !== 0 || (m = h.originalColumn - p.originalColumn, m !== 0 || x) || (m = h.generatedColumn - p.generatedColumn, m !== 0) || (m = h.generatedLine - p.generatedLine, m !== 0) ? m : y(h.name, p.name);
  }
  e.compareByOriginalPositionsNoSource = b;
  function w(h, p, x) {
    var m = h.generatedLine - p.generatedLine;
    return m !== 0 || (m = h.generatedColumn - p.generatedColumn, m !== 0 || x) || (m = y(h.source, p.source), m !== 0) || (m = h.originalLine - p.originalLine, m !== 0) || (m = h.originalColumn - p.originalColumn, m !== 0) ? m : y(h.name, p.name);
  }
  e.compareByGeneratedPositionsDeflated = w;
  function A(h, p, x) {
    var m = h.generatedColumn - p.generatedColumn;
    return m !== 0 || x || (m = y(h.source, p.source), m !== 0) || (m = h.originalLine - p.originalLine, m !== 0) || (m = h.originalColumn - p.originalColumn, m !== 0) ? m : y(h.name, p.name);
  }
  e.compareByGeneratedPositionsDeflatedNoLine = A;
  function y(h, p) {
    return h === p ? 0 : h === null ? 1 : p === null ? -1 : h > p ? 1 : -1;
  }
  function C(h, p) {
    var x = h.generatedLine - p.generatedLine;
    return x !== 0 || (x = h.generatedColumn - p.generatedColumn, x !== 0) || (x = y(h.source, p.source), x !== 0) || (x = h.originalLine - p.originalLine, x !== 0) || (x = h.originalColumn - p.originalColumn, x !== 0) ? x : y(h.name, p.name);
  }
  e.compareByGeneratedPositionsInflated = C;
  function $(h) {
    return JSON.parse(h.replace(/^\)]}'[^\n]*\n/, ""));
  }
  e.parseSourceMapInput = $;
  function E(h, p, x) {
    if (p = p || "", h && (h[h.length - 1] !== "/" && p[0] !== "/" && (h += "/"), p = h + p), x) {
      var m = i(x);
      if (!m)
        throw new Error("sourceMapURL could not be parsed");
      if (m.path) {
        var Y = m.path.lastIndexOf("/");
        Y >= 0 && (m.path = m.path.substring(0, Y + 1));
      }
      p = s(o(m), p);
    }
    return l(p);
  }
  e.computeSourceURL = E;
})(an);
var Qi = {}, or = an, sr = Object.prototype.hasOwnProperty, He = typeof Map != "undefined";
function $e() {
  this._array = [], this._set = He ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
$e.fromArray = function(t, n) {
  for (var r = new $e(), i = 0, o = t.length; i < o; i++)
    r.add(t[i], n);
  return r;
};
$e.prototype.size = function() {
  return He ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
$e.prototype.add = function(t, n) {
  var r = He ? t : or.toSetString(t), i = He ? this.has(t) : sr.call(this._set, r), o = this._array.length;
  (!i || n) && this._array.push(t), i || (He ? this._set.set(t, o) : this._set[r] = o);
};
$e.prototype.has = function(t) {
  if (He)
    return this._set.has(t);
  var n = or.toSetString(t);
  return sr.call(this._set, n);
};
$e.prototype.indexOf = function(t) {
  if (He) {
    var n = this._set.get(t);
    if (n >= 0)
      return n;
  } else {
    var r = or.toSetString(t);
    if (sr.call(this._set, r))
      return this._set[r];
  }
  throw new Error('"' + t + '" is not in the set.');
};
$e.prototype.at = function(t) {
  if (t >= 0 && t < this._array.length)
    return this._array[t];
  throw new Error("No element indexed by " + t);
};
$e.prototype.toArray = function() {
  return this._array.slice();
};
Qi.ArraySet = $e;
var Xi = {}, Yi = an;
function Aa(e, t) {
  var n = e.generatedLine, r = t.generatedLine, i = e.generatedColumn, o = t.generatedColumn;
  return r > n || r == n && o >= i || Yi.compareByGeneratedPositionsInflated(e, t) <= 0;
}
function ln() {
  this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
}
ln.prototype.unsortedForEach = function(t, n) {
  this._array.forEach(t, n);
};
ln.prototype.add = function(t) {
  Aa(this._last, t) ? (this._last = t, this._array.push(t)) : (this._sorted = !1, this._array.push(t));
};
ln.prototype.toArray = function() {
  return this._sorted || (this._array.sort(Yi.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
};
Xi.MappingList = ln;
var ht = nr, B = an, Qt = Qi.ArraySet, Ta = Xi.MappingList;
function de(e) {
  e || (e = {}), this._file = B.getArg(e, "file", null), this._sourceRoot = B.getArg(e, "sourceRoot", null), this._skipValidation = B.getArg(e, "skipValidation", !1), this._ignoreInvalidMapping = B.getArg(e, "ignoreInvalidMapping", !1), this._sources = new Qt(), this._names = new Qt(), this._mappings = new Ta(), this._sourcesContents = null;
}
de.prototype._version = 3;
de.fromSourceMap = function(t, n) {
  var r = t.sourceRoot, i = new de(Object.assign(n || {}, {
    file: t.file,
    sourceRoot: r
  }));
  return t.eachMapping(function(o) {
    var a = {
      generated: {
        line: o.generatedLine,
        column: o.generatedColumn
      }
    };
    o.source != null && (a.source = o.source, r != null && (a.source = B.relative(r, a.source)), a.original = {
      line: o.originalLine,
      column: o.originalColumn
    }, o.name != null && (a.name = o.name)), i.addMapping(a);
  }), t.sources.forEach(function(o) {
    var a = o;
    r !== null && (a = B.relative(r, o)), i._sources.has(a) || i._sources.add(a);
    var u = t.sourceContentFor(o);
    u != null && i.setSourceContent(o, u);
  }), i;
};
de.prototype.addMapping = function(t) {
  var n = B.getArg(t, "generated"), r = B.getArg(t, "original", null), i = B.getArg(t, "source", null), o = B.getArg(t, "name", null);
  !this._skipValidation && this._validateMapping(n, r, i, o) === !1 || (i != null && (i = String(i), this._sources.has(i) || this._sources.add(i)), o != null && (o = String(o), this._names.has(o) || this._names.add(o)), this._mappings.add({
    generatedLine: n.line,
    generatedColumn: n.column,
    originalLine: r != null && r.line,
    originalColumn: r != null && r.column,
    source: i,
    name: o
  }));
};
de.prototype.setSourceContent = function(t, n) {
  var r = t;
  this._sourceRoot != null && (r = B.relative(this._sourceRoot, r)), n != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[B.toSetString(r)] = n) : this._sourcesContents && (delete this._sourcesContents[B.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
de.prototype.applySourceMap = function(t, n, r) {
  var i = n;
  if (n == null) {
    if (t.file == null)
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    i = t.file;
  }
  var o = this._sourceRoot;
  o != null && (i = B.relative(o, i));
  var a = new Qt(), u = new Qt();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === i && l.originalLine != null) {
      var s = t.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      s.source != null && (l.source = s.source, r != null && (l.source = B.join(r, l.source)), o != null && (l.source = B.relative(o, l.source)), l.originalLine = s.line, l.originalColumn = s.column, s.name != null && (l.name = s.name));
    }
    var c = l.source;
    c != null && !a.has(c) && a.add(c);
    var f = l.name;
    f != null && !u.has(f) && u.add(f);
  }, this), this._sources = a, this._names = u, t.sources.forEach(function(l) {
    var s = t.sourceContentFor(l);
    s != null && (r != null && (l = B.join(r, l)), o != null && (l = B.relative(o, l)), this.setSourceContent(l, s));
  }, this);
};
de.prototype._validateMapping = function(t, n, r, i) {
  if (n && typeof n.line != "number" && typeof n.column != "number") {
    var o = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
    if (this._ignoreInvalidMapping)
      return typeof console != "undefined" && console.warn && console.warn(o), !1;
    throw new Error(o);
  }
  if (!(t && "line" in t && "column" in t && t.line > 0 && t.column >= 0 && !n && !r && !i)) {
    if (t && "line" in t && "column" in t && n && "line" in n && "column" in n && t.line > 0 && t.column >= 0 && n.line > 0 && n.column >= 0 && r)
      return;
    var o = "Invalid mapping: " + JSON.stringify({
      generated: t,
      source: r,
      original: n,
      name: i
    });
    if (this._ignoreInvalidMapping)
      return typeof console != "undefined" && console.warn && console.warn(o), !1;
    throw new Error(o);
  }
};
de.prototype._serializeMappings = function() {
  for (var t = 0, n = 1, r = 0, i = 0, o = 0, a = 0, u = "", l, s, c, f, d = this._mappings.toArray(), g = 0, T = d.length; g < T; g++) {
    if (s = d[g], l = "", s.generatedLine !== n)
      for (t = 0; s.generatedLine !== n; )
        l += ";", n++;
    else if (g > 0) {
      if (!B.compareByGeneratedPositionsInflated(s, d[g - 1]))
        continue;
      l += ",";
    }
    l += ht.encode(s.generatedColumn - t), t = s.generatedColumn, s.source != null && (f = this._sources.indexOf(s.source), l += ht.encode(f - a), a = f, l += ht.encode(s.originalLine - 1 - i), i = s.originalLine - 1, l += ht.encode(s.originalColumn - r), r = s.originalColumn, s.name != null && (c = this._names.indexOf(s.name), l += ht.encode(c - o), o = c)), u += l;
  }
  return u;
};
de.prototype._generateSourcesContent = function(t, n) {
  return t.map(function(r) {
    if (!this._sourcesContents)
      return null;
    n != null && (r = B.relative(n, r));
    var i = B.toSetString(r);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, i) ? this._sourcesContents[i] : null;
  }, this);
};
de.prototype.toJSON = function() {
  var t = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (t.file = this._file), this._sourceRoot != null && (t.sourceRoot = this._sourceRoot), this._sourcesContents && (t.sourcesContent = this._generateSourcesContent(t.sources, t.sourceRoot)), t;
};
de.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
var Oa = de;
const Rr = /* @__PURE__ */ new Set(["Atrule", "Selector", "Declaration"]);
function Ea(e) {
  const t = new Oa(), n = {
    line: 1,
    column: 0
  }, r = {
    line: 0,
    // should be zero to add first mapping
    column: 0
  }, i = {
    line: 1,
    column: 0
  }, o = {
    generated: i
  };
  let a = 1, u = 0, l = !1;
  const s = e.node;
  e.node = function(d) {
    if (d.loc && d.loc.start && Rr.has(d.type)) {
      const g = d.loc.start.line, T = d.loc.start.column - 1;
      (r.line !== g || r.column !== T) && (r.line = g, r.column = T, n.line = a, n.column = u, l && (l = !1, (n.line !== i.line || n.column !== i.column) && t.addMapping(o)), l = !0, t.addMapping({
        source: d.loc.source,
        original: r,
        generated: n
      }));
    }
    s.call(this, d), l && Rr.has(d.type) && (i.line = a, i.column = u);
  };
  const c = e.emit;
  e.emit = function(d, g, T) {
    for (let k = 0; k < d.length; k++)
      d.charCodeAt(k) === 10 ? (a++, u = 0) : u++;
    c(d, g, T);
  };
  const f = e.result;
  return e.result = function() {
    return l && t.addMapping(o), {
      css: f(),
      map: t
    };
  }, e;
}
const La = 43, $a = 45, vn = (e, t) => {
  if (e === P && (e = t), typeof e == "string") {
    const n = e.charCodeAt(0);
    return n > 127 ? 32768 : n << 8;
  }
  return e;
}, Zi = [
  [v, v],
  [v, z],
  [v, J],
  [v, ie],
  [v, "-"],
  [v, O],
  [v, D],
  [v, _],
  [v, oe],
  [v, G],
  [H, v],
  [H, z],
  [H, J],
  [H, ie],
  [H, "-"],
  [H, O],
  [H, D],
  [H, _],
  [H, oe],
  [j, v],
  [j, z],
  [j, J],
  [j, ie],
  [j, "-"],
  [j, O],
  [j, D],
  [j, _],
  [j, oe],
  [_, v],
  [_, z],
  [_, J],
  [_, ie],
  [_, "-"],
  [_, O],
  [_, D],
  [_, _],
  [_, oe],
  ["#", v],
  ["#", z],
  ["#", J],
  ["#", ie],
  ["#", "-"],
  ["#", O],
  ["#", D],
  ["#", _],
  ["#", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["-", v],
  ["-", z],
  ["-", J],
  ["-", ie],
  ["-", "-"],
  ["-", O],
  ["-", D],
  ["-", _],
  ["-", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [O, v],
  [O, z],
  [O, J],
  [O, ie],
  [O, O],
  [O, D],
  [O, _],
  [O, "%"],
  [O, oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["@", v],
  ["@", z],
  ["@", J],
  ["@", ie],
  ["@", "-"],
  ["@", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [".", O],
  [".", D],
  [".", _],
  ["+", O],
  ["+", D],
  ["+", _],
  ["/", "*"]
], _a = Zi.concat([
  [v, j],
  [_, j],
  [j, j],
  [H, G],
  [H, Te],
  [H, ee],
  [D, D],
  [D, _],
  [D, z],
  [D, "-"],
  [N, v],
  [N, z],
  [N, D],
  [N, _],
  [N, j],
  [N, "-"]
]);
function Ji(e) {
  const t = new Set(
    e.map(([n, r]) => vn(n) << 16 | vn(r))
  );
  return function(n, r, i) {
    const o = vn(r, i), a = i.charCodeAt(0);
    return (a === $a && r !== v && r !== z && r !== oe || a === La ? t.has(n << 16 | a << 8) : t.has(n << 16 | o)) && this.emit(" ", F, !0), o;
  };
}
const Pa = Ji(Zi), eo = Ji(_a), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  safe: eo,
  spec: Pa
}, Symbol.toStringTag, { value: "Module" })), za = 92;
function Ma(e, t) {
  if (typeof t == "function") {
    let n = null;
    e.children.forEach((r) => {
      n !== null && t.call(this, n), this.node(r), n = r;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function Ia(e) {
  on(e, (t, n, r) => {
    this.token(t, e.slice(n, r));
  });
}
function Na(e) {
  const t = /* @__PURE__ */ new Map();
  for (let n in e.node) {
    const r = e.node[n];
    typeof (r.generate || r) == "function" && t.set(n, r.generate || r);
  }
  return function(n, r) {
    let i = "", o = 0, a = {
      node(l) {
        if (t.has(l.type))
          t.get(l.type).call(u, l);
        else
          throw new Error("Unknown node type: " + l.type);
      },
      tokenBefore: eo,
      token(l, s) {
        o = this.tokenBefore(o, l, s), this.emit(s, l, !1), l === P && s.charCodeAt(0) === za && this.emit(`
`, F, !0);
      },
      emit(l) {
        i += l;
      },
      result() {
        return i;
      }
    };
    r && (typeof r.decorator == "function" && (a = r.decorator(a)), r.sourceMap && (a = Ea(a)), r.mode in jr && (a.tokenBefore = jr[r.mode]));
    const u = {
      node: (l) => a.node(l),
      children: Ma,
      token: (l, s) => a.token(l, s),
      tokenize: Ia
    };
    return a.node(n), a.result();
  };
}
function Ra(e) {
  return {
    fromPlainObject(t) {
      return e(t, {
        enter(n) {
          n.children && !(n.children instanceof V) && (n.children = new V().fromArray(n.children));
        }
      }), t;
    },
    toPlainObject(t) {
      return e(t, {
        leave(n) {
          n.children && n.children instanceof V && (n.children = n.children.toArray());
        }
      }), t;
    }
  };
}
const { hasOwnProperty: ar } = Object.prototype, pt = function() {
};
function Dr(e) {
  return typeof e == "function" ? e : pt;
}
function Fr(e, t) {
  return function(n, r, i) {
    n.type === t && e.call(this, n, r, i);
  };
}
function ja(e, t) {
  const n = t.structure, r = [];
  for (const i in n) {
    if (ar.call(n, i) === !1)
      continue;
    let o = n[i];
    const a = {
      name: i,
      type: !1,
      nullable: !1
    };
    Array.isArray(o) || (o = [o]);
    for (const u of o)
      u === null ? a.nullable = !0 : typeof u == "string" ? a.type = "node" : Array.isArray(u) && (a.type = "list");
    a.type && r.push(a);
  }
  return r.length ? {
    context: t.walkContext,
    fields: r
  } : null;
}
function Da(e) {
  const t = {};
  for (const n in e.node)
    if (ar.call(e.node, n)) {
      const r = e.node[n];
      if (!r.structure)
        throw new Error("Missed `structure` field in `" + n + "` node type definition");
      t[n] = ja(n, r);
    }
  return t;
}
function Br(e, t) {
  const n = e.fields.slice(), r = e.context, i = typeof r == "string";
  return t && n.reverse(), function(o, a, u, l) {
    let s;
    i && (s = a[r], a[r] = o);
    for (const c of n) {
      const f = o[c.name];
      if (!c.nullable || f) {
        if (c.type === "list") {
          if (t ? f.reduceRight(l, !1) : f.reduce(l, !1))
            return !0;
        } else if (u(f))
          return !0;
      }
    }
    i && (a[r] = s);
  };
}
function Ur({
  StyleSheet: e,
  Atrule: t,
  Rule: n,
  Block: r,
  DeclarationList: i
}) {
  return {
    Atrule: {
      StyleSheet: e,
      Atrule: t,
      Rule: n,
      Block: r
    },
    Rule: {
      StyleSheet: e,
      Atrule: t,
      Rule: n,
      Block: r
    },
    Declaration: {
      StyleSheet: e,
      Atrule: t,
      Rule: n,
      Block: r,
      DeclarationList: i
    }
  };
}
function Fa(e) {
  const t = Da(e), n = {}, r = {}, i = Symbol("break-walk"), o = Symbol("skip-node");
  for (const s in t)
    ar.call(t, s) && t[s] !== null && (n[s] = Br(t[s], !1), r[s] = Br(t[s], !0));
  const a = Ur(n), u = Ur(r), l = function(s, c) {
    function f(b, w, A) {
      const y = d.call(S, b, w, A);
      return y === i ? !0 : y === o ? !1 : !!(T.hasOwnProperty(b.type) && T[b.type](b, S, f, k) || g.call(S, b, w, A) === i);
    }
    let d = pt, g = pt, T = n, k = (b, w, A, y) => b || f(w, A, y);
    const S = {
      break: i,
      skip: o,
      root: s,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if (typeof c == "function")
      d = c;
    else if (c && (d = Dr(c.enter), g = Dr(c.leave), c.reverse && (T = r), c.visit)) {
      if (a.hasOwnProperty(c.visit))
        T = c.reverse ? u[c.visit] : a[c.visit];
      else if (!t.hasOwnProperty(c.visit))
        throw new Error("Bad value `" + c.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      d = Fr(d, c.visit), g = Fr(g, c.visit);
    }
    if (d === pt && g === pt)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    f(s);
  };
  return l.break = i, l.skip = o, l.find = function(s, c) {
    let f = null;
    return l(s, function(d, g, T) {
      if (c.call(this, d, g, T))
        return f = d, i;
    }), f;
  }, l.findLast = function(s, c) {
    let f = null;
    return l(s, {
      reverse: !0,
      enter(d, g, T) {
        if (c.call(this, d, g, T))
          return f = d, i;
      }
    }), f;
  }, l.findAll = function(s, c) {
    const f = [];
    return l(s, function(d, g, T) {
      c.call(this, d, g, T) && f.push(d);
    }), f;
  }, l;
}
function Ba(e) {
  return e;
}
function Ua(e) {
  const { min: t, max: n, comma: r } = e;
  return t === 0 && n === 0 ? r ? "#?" : "*" : t === 0 && n === 1 ? "?" : t === 1 && n === 0 ? r ? "#" : "+" : t === 1 && n === 1 ? "" : (r ? "#" : "") + (t === n ? "{" + t + "}" : "{" + t + "," + (n !== 0 ? n : "") + "}");
}
function Ha(e) {
  switch (e.type) {
    case "Range":
      return " [" + (e.min === null ? "-∞" : e.min) + "," + (e.max === null ? "∞" : e.max) + "]";
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
}
function Wa(e, t, n, r) {
  const i = e.combinator === " " || r ? e.combinator : " " + e.combinator + " ", o = e.terms.map((a) => lr(a, t, n, r)).join(i);
  return e.explicit || n ? (r || o[0] === "," ? "[" : "[ ") + o + (r ? "]" : " ]") : o;
}
function lr(e, t, n, r) {
  let i;
  switch (e.type) {
    case "Group":
      i = Wa(e, t, n, r) + (e.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return lr(e.term, t, n, r) + t(Ua(e), e);
    case "Type":
      i = "<" + e.name + (e.opts ? t(Ha(e.opts), e.opts) : "") + ">";
      break;
    case "Property":
      i = "<'" + e.name + "'>";
      break;
    case "Keyword":
      i = e.name;
      break;
    case "AtKeyword":
      i = "@" + e.name;
      break;
    case "Function":
      i = e.name + "(";
      break;
    case "String":
    case "Token":
      i = e.value;
      break;
    case "Comma":
      i = ",";
      break;
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
  return t(i, e);
}
function cr(e, t) {
  let n = Ba, r = !1, i = !1;
  return typeof t == "function" ? n = t : t && (r = !!t.forceBraces, i = !!t.compact, typeof t.decorate == "function" && (n = t.decorate)), lr(e, n, r, i);
}
const Hr = { offset: 0, line: 1, column: 1 };
function qa(e, t) {
  const n = e.tokens, r = e.longestMatch, i = r < n.length && n[r].node || null, o = i !== t ? i : null;
  let a = 0, u = 0, l = 0, s = "", c, f;
  for (let d = 0; d < n.length; d++) {
    const g = n[d].value;
    d === r && (u = g.length, a = s.length), o !== null && n[d].node === o && (d <= r ? l++ : l = 0), s += g;
  }
  return r === n.length || l > 1 ? (c = Pt(o || t, "end") || dt(Hr, s), f = dt(c)) : (c = Pt(o, "start") || dt(Pt(t, "start") || Hr, s.slice(0, a)), f = Pt(o, "end") || dt(c, s.substr(a, u))), {
    css: s,
    mismatchOffset: a,
    mismatchLength: u,
    start: c,
    end: f
  };
}
function Pt(e, t) {
  const n = e && e.loc && e.loc[t];
  return n ? "line" in n ? dt(n) : n : null;
}
function dt({ offset: e, line: t, column: n }, r) {
  const i = {
    offset: e,
    line: t,
    column: n
  };
  if (r) {
    const o = r.split(/\n|\r\n?|\f/);
    i.offset += r.length, i.line += o.length - 1, i.column = o.length === 1 ? i.column + r.length : o.pop().length + 1;
  }
  return i;
}
const ft = function(e, t) {
  const n = sn(
    "SyntaxReferenceError",
    e + (t ? " `" + t + "`" : "")
  );
  return n.reference = t, n;
}, Va = function(e, t, n, r) {
  const i = sn("SyntaxMatchError", e), {
    css: o,
    mismatchOffset: a,
    mismatchLength: u,
    start: l,
    end: s
  } = qa(r, n);
  return i.rawMessage = e, i.syntax = t ? cr(t) : "<generic>", i.css = o, i.mismatchOffset = a, i.mismatchLength = u, i.message = e + `
  syntax: ` + i.syntax + `
   value: ` + (o || "<empty string>") + `
  --------` + new Array(i.mismatchOffset + 1).join("-") + "^", Object.assign(i, l), i.loc = {
    source: n && n.loc && n.loc.source || "<unknown>",
    start: l,
    end: s
  }, i;
}, zt = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), Xt = 45, wn = Ga, Wr = Ka;
function ur(e, t) {
  return t = t || 0, e.length - t >= 2 && e.charCodeAt(t) === Xt && e.charCodeAt(t + 1) === Xt;
}
function to(e, t) {
  if (t = t || 0, e.length - t >= 3 && e.charCodeAt(t) === Xt && e.charCodeAt(t + 1) !== Xt) {
    const n = e.indexOf("-", t + 2);
    if (n !== -1)
      return e.substring(t, n + 1);
  }
  return "";
}
function Ga(e) {
  if (zt.has(e))
    return zt.get(e);
  const t = e.toLowerCase();
  let n = zt.get(t);
  if (n === void 0) {
    const r = ur(t, 0), i = r ? "" : to(t, 0);
    n = Object.freeze({
      basename: t.substr(i.length),
      name: t,
      prefix: i,
      vendor: i,
      custom: r
    });
  }
  return zt.set(e, n), n;
}
function Ka(e) {
  if (Qe.has(e))
    return Qe.get(e);
  let t = e, n = e[0];
  n === "/" ? n = e[1] === "/" ? "//" : "/" : n !== "_" && n !== "*" && n !== "$" && n !== "#" && n !== "+" && n !== "&" && (n = "");
  const r = ur(t, n.length);
  if (!r && (t = t.toLowerCase(), Qe.has(t))) {
    const u = Qe.get(t);
    return Qe.set(e, u), u;
  }
  const i = r ? "" : to(t, n.length), o = t.substr(0, n.length + i.length), a = Object.freeze({
    basename: t.substr(o.length),
    name: t.substr(n.length),
    hack: n,
    vendor: i,
    prefix: o,
    custom: r
  });
  return Qe.set(e, a), a;
}
const no = [
  "initial",
  "inherit",
  "unset",
  "revert",
  "revert-layer"
], Ct = 43, xe = 45, Sn = 110, Xe = !0, Qa = !1;
function Rn(e, t) {
  return e !== null && e.type === P && e.value.charCodeAt(0) === t;
}
function yt(e, t, n) {
  for (; e !== null && (e.type === F || e.type === re); )
    e = n(++t);
  return t;
}
function Me(e, t, n, r) {
  if (!e)
    return 0;
  const i = e.value.charCodeAt(t);
  if (i === Ct || i === xe) {
    if (n)
      return 0;
    t++;
  }
  for (; t < e.value.length; t++)
    if (!Q(e.value.charCodeAt(t)))
      return 0;
  return r + 1;
}
function Cn(e, t, n) {
  let r = !1, i = yt(e, t, n);
  if (e = n(i), e === null)
    return t;
  if (e.type !== O)
    if (Rn(e, Ct) || Rn(e, xe)) {
      if (r = !0, i = yt(n(++i), i, n), e = n(i), e === null || e.type !== O)
        return 0;
    } else
      return t;
  if (!r) {
    const o = e.value.charCodeAt(0);
    if (o !== Ct && o !== xe)
      return 0;
  }
  return Me(e, r ? 0 : 1, r, i);
}
function Xa(e, t) {
  let n = 0;
  if (!e)
    return 0;
  if (e.type === O)
    return Me(e, 0, Qa, n);
  if (e.type === v && e.value.charCodeAt(0) === xe) {
    if (!it(e.value, 1, Sn))
      return 0;
    switch (e.value.length) {
      case 2:
        return Cn(t(++n), n, t);
      case 3:
        return e.value.charCodeAt(2) !== xe ? 0 : (n = yt(t(++n), n, t), e = t(n), Me(e, 0, Xe, n));
      default:
        return e.value.charCodeAt(2) !== xe ? 0 : Me(e, 3, Xe, n);
    }
  } else if (e.type === v || Rn(e, Ct) && t(n + 1).type === v) {
    if (e.type !== v && (e = t(++n)), e === null || !it(e.value, 0, Sn))
      return 0;
    switch (e.value.length) {
      case 1:
        return Cn(t(++n), n, t);
      case 2:
        return e.value.charCodeAt(1) !== xe ? 0 : (n = yt(t(++n), n, t), e = t(n), Me(e, 0, Xe, n));
      default:
        return e.value.charCodeAt(1) !== xe ? 0 : Me(e, 2, Xe, n);
    }
  } else if (e.type === _) {
    let r = e.value.charCodeAt(0), i = r === Ct || r === xe ? 1 : 0, o = i;
    for (; o < e.value.length && Q(e.value.charCodeAt(o)); o++)
      ;
    return o === i || !it(e.value, o, Sn) ? 0 : o + 1 === e.value.length ? Cn(t(++n), n, t) : e.value.charCodeAt(o + 1) !== xe ? 0 : o + 2 === e.value.length ? (n = yt(t(++n), n, t), e = t(n), Me(e, 0, Xe, n)) : Me(e, o + 2, Xe, n);
  }
  return 0;
}
const Ya = 43, ro = 45, io = 63, Za = 117;
function jn(e, t) {
  return e !== null && e.type === P && e.value.charCodeAt(0) === t;
}
function Ja(e, t) {
  return e.value.charCodeAt(0) === t;
}
function mt(e, t, n) {
  let r = 0;
  for (let i = t; i < e.value.length; i++) {
    const o = e.value.charCodeAt(i);
    if (o === ro && n && r !== 0)
      return mt(e, t + r + 1, !1), 6;
    if (!Re(o) || ++r > 6)
      return 0;
  }
  return r;
}
function Mt(e, t, n) {
  if (!e)
    return 0;
  for (; jn(n(t), io); ) {
    if (++e > 6)
      return 0;
    t++;
  }
  return t;
}
function el(e, t) {
  let n = 0;
  if (e === null || e.type !== v || !it(e.value, 0, Za) || (e = t(++n), e === null))
    return 0;
  if (jn(e, Ya))
    return e = t(++n), e === null ? 0 : e.type === v ? Mt(mt(e, 0, !0), ++n, t) : jn(e, io) ? Mt(1, ++n, t) : 0;
  if (e.type === O) {
    const r = mt(e, 1, !0);
    return r === 0 ? 0 : (e = t(++n), e === null ? n : e.type === _ || e.type === O ? !Ja(e, ro) || !mt(e, 1, !1) ? 0 : n + 1 : Mt(r, n, t));
  }
  return e.type === _ ? Mt(mt(e, 1, !0), ++n, t) : 0;
}
const tl = ["calc(", "-moz-calc(", "-webkit-calc("], hr = /* @__PURE__ */ new Map([
  [z, N],
  [G, N],
  [ce, ke],
  [te, pe]
]);
function be(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function oo(e, t) {
  return St(e, 0, e.length, t);
}
function so(e, t) {
  for (let n = 0; n < t.length; n++)
    if (oo(e, t[n]))
      return !0;
  return !1;
}
function ao(e, t) {
  return t !== e.length - 2 ? !1 : be(e, t) === 92 && // U+005C REVERSE SOLIDUS (\)
  Q(be(e, t + 1));
}
function cn(e, t, n) {
  if (e && e.type === "Range") {
    const r = Number(
      n !== void 0 && n !== t.length ? t.substr(0, n) : t
    );
    if (isNaN(r) || e.min !== null && r < e.min && typeof e.min != "string" || e.max !== null && r > e.max && typeof e.max != "string")
      return !0;
  }
  return !1;
}
function nl(e, t) {
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case pe:
        case N:
        case ke:
          if (e.type !== n)
            break e;
          if (n = r.pop(), r.length === 0) {
            i++;
            break e;
          }
          break;
        case z:
        case G:
        case ce:
        case te:
          r.push(n), n = hr.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function fe(e) {
  return function(t, n, r) {
    return t === null ? 0 : t.type === z && so(t.value, tl) ? nl(t, n) : e(t, n, r);
  };
}
function R(e) {
  return function(t) {
    return t === null || t.type !== e ? 0 : 1;
  };
}
function rl(e) {
  if (e === null || e.type !== v)
    return 0;
  const t = e.value.toLowerCase();
  return so(t, no) || oo(t, "default") ? 0 : 1;
}
function il(e) {
  return e === null || e.type !== v || be(e.value, 0) !== 45 || be(e.value, 1) !== 45 ? 0 : 1;
}
function ol(e) {
  if (e === null || e.type !== j)
    return 0;
  const t = e.value.length;
  if (t !== 4 && t !== 5 && t !== 7 && t !== 9)
    return 0;
  for (let n = 1; n < t; n++)
    if (!Re(be(e.value, n)))
      return 0;
  return 1;
}
function sl(e) {
  return e === null || e.type !== j || !jt(be(e.value, 1), be(e.value, 2), be(e.value, 3)) ? 0 : 1;
}
function al(e, t) {
  if (!e)
    return 0;
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case nn:
        case ie:
          break e;
        case pe:
        case N:
        case ke:
          if (e.type !== n)
            break e;
          n = r.pop();
          break;
        case se:
          if (n === 0)
            break e;
          break;
        case P:
          if (n === 0 && e.value === "!")
            break e;
          break;
        case z:
        case G:
        case ce:
        case te:
          r.push(n), n = hr.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function ll(e, t) {
  if (!e)
    return 0;
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case nn:
        case ie:
          break e;
        case pe:
        case N:
        case ke:
          if (e.type !== n)
            break e;
          n = r.pop();
          break;
        case z:
        case G:
        case ce:
        case te:
          r.push(n), n = hr.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function Le(e) {
  return e && (e = new Set(e)), function(t, n, r) {
    if (t === null || t.type !== _)
      return 0;
    const i = rn(t.value, 0);
    if (e !== null) {
      const o = t.value.indexOf("\\", i), a = o === -1 || !ao(t.value, o) ? t.value.substr(i) : t.value.substring(i, o);
      if (e.has(a.toLowerCase()) === !1)
        return 0;
    }
    return cn(r, t.value, i) ? 0 : 1;
  };
}
function cl(e, t, n) {
  return e === null || e.type !== D || cn(n, e.value, e.value.length - 1) ? 0 : 1;
}
function lo(e) {
  return typeof e != "function" && (e = function() {
    return 0;
  }), function(t, n, r) {
    return t !== null && t.type === O && Number(t.value) === 0 ? 1 : e(t, n, r);
  };
}
function ul(e, t, n) {
  if (e === null)
    return 0;
  const r = rn(e.value, 0);
  return !(r === e.value.length) && !ao(e.value, r) || cn(n, e.value, r) ? 0 : 1;
}
function hl(e, t, n) {
  if (e === null || e.type !== O)
    return 0;
  let r = be(e.value, 0) === 43 || // U+002B PLUS SIGN (+)
  be(e.value, 0) === 45 ? 1 : 0;
  for (; r < e.value.length; r++)
    if (!Q(be(e.value, r)))
      return 0;
  return cn(n, e.value, r) ? 0 : 1;
}
const fl = {
  "ident-token": R(v),
  "function-token": R(z),
  "at-keyword-token": R(H),
  "hash-token": R(j),
  "string-token": R(Te),
  "bad-string-token": R(nn),
  "url-token": R(J),
  "bad-url-token": R(ie),
  "delim-token": R(P),
  "number-token": R(O),
  "percentage-token": R(D),
  "dimension-token": R(_),
  "whitespace-token": R(F),
  "CDO-token": R(Et),
  "CDC-token": R(oe),
  "colon-token": R(ee),
  "semicolon-token": R(se),
  "comma-token": R(Oe),
  "[-token": R(ce),
  "]-token": R(ke),
  "(-token": R(G),
  ")-token": R(N),
  "{-token": R(te),
  "}-token": R(pe)
}, pl = {
  // token type aliases
  string: R(Te),
  ident: R(v),
  // percentage
  percentage: fe(cl),
  // numeric
  zero: lo(),
  number: fe(ul),
  integer: fe(hl),
  // complex types
  "custom-ident": rl,
  "custom-property-name": il,
  "hex-color": ol,
  "id-selector": sl,
  // element( <id-selector> )
  "an-plus-b": Xa,
  urange: el,
  "declaration-value": al,
  "any-value": ll
};
function dl(e) {
  const {
    angle: t,
    decibel: n,
    frequency: r,
    flex: i,
    length: o,
    resolution: a,
    semitones: u,
    time: l
  } = e || {};
  return {
    dimension: fe(Le(null)),
    angle: fe(Le(t)),
    decibel: fe(Le(n)),
    frequency: fe(Le(r)),
    flex: fe(Le(i)),
    length: fe(lo(Le(o))),
    resolution: fe(Le(a)),
    semitones: fe(Le(u)),
    time: fe(Le(l))
  };
}
function ml(e) {
  return L(L(L({}, fl), pl), dl(e));
}
const gl = [
  // absolute length units https://www.w3.org/TR/css-values-3/#lengths
  "cm",
  "mm",
  "q",
  "in",
  "pt",
  "pc",
  "px",
  // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
  "em",
  "rem",
  "ex",
  "rex",
  "cap",
  "rcap",
  "ch",
  "rch",
  "ic",
  "ric",
  "lh",
  "rlh",
  // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
  "vw",
  "svw",
  "lvw",
  "dvw",
  "vh",
  "svh",
  "lvh",
  "dvh",
  "vi",
  "svi",
  "lvi",
  "dvi",
  "vb",
  "svb",
  "lvb",
  "dvb",
  "vmin",
  "svmin",
  "lvmin",
  "dvmin",
  "vmax",
  "svmax",
  "lvmax",
  "dvmax",
  // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
  "cqw",
  "cqh",
  "cqi",
  "cqb",
  "cqmin",
  "cqmax"
], bl = ["deg", "grad", "rad", "turn"], yl = ["s", "ms"], kl = ["hz", "khz"], xl = ["dpi", "dpcm", "dppx", "x"], vl = ["fr"], wl = ["db"], Sl = ["st"], qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  angle: bl,
  decibel: wl,
  flex: vl,
  frequency: kl,
  length: gl,
  resolution: xl,
  semitones: Sl,
  time: yl
}, Symbol.toStringTag, { value: "Module" }));
function Cl(e, t, n) {
  return Object.assign(sn("SyntaxError", e), {
    input: t,
    offset: n,
    rawMessage: e,
    message: e + `
  ` + t + `
--` + new Array((n || t.length) + 1).join("-") + "^"
  });
}
const Al = 9, Tl = 10, Ol = 12, El = 13, Ll = 32;
class $l {
  constructor(t) {
    this.str = t, this.pos = 0;
  }
  charCodeAt(t) {
    return t < this.str.length ? this.str.charCodeAt(t) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(t) {
    return this.charCodeAt(this.findWsEnd(t));
  }
  findWsEnd(t) {
    for (; t < this.str.length; t++) {
      const n = this.str.charCodeAt(t);
      if (n !== El && n !== Tl && n !== Ol && n !== Ll && n !== Al)
        break;
    }
    return t;
  }
  substringToPos(t) {
    return this.str.substring(this.pos, this.pos = t);
  }
  eat(t) {
    this.charCode() !== t && this.error("Expect `" + String.fromCharCode(t) + "`"), this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  }
  error(t) {
    throw new Cl(t, this.str, this.pos);
  }
}
const _l = 9, Pl = 10, zl = 12, Ml = 13, Il = 32, co = 33, fr = 35, Vr = 38, Yt = 39, uo = 40, Nl = 41, ho = 42, pr = 43, dr = 44, Gr = 45, mr = 60, fo = 62, Dn = 63, Rl = 64, un = 91, gr = 93, Zt = 123, Kr = 124, Qr = 125, Xr = 8734, At = new Uint8Array(128).map(
  (e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0
), Yr = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function Jt(e) {
  return e.substringToPos(
    e.findWsEnd(e.pos)
  );
}
function at(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const n = e.str.charCodeAt(t);
    if (n >= 128 || At[n] === 0)
      break;
  }
  return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
}
function en(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const n = e.str.charCodeAt(t);
    if (n < 48 || n > 57)
      break;
  }
  return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
}
function jl(e) {
  const t = e.str.indexOf("'", e.pos + 1);
  return t === -1 && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1);
}
function Zr(e) {
  let t = null, n = null;
  return e.eat(Zt), t = en(e), e.charCode() === dr ? (e.pos++, e.charCode() !== Qr && (n = en(e))) : n = t, e.eat(Qr), {
    min: Number(t),
    max: n ? Number(n) : 0
  };
}
function Dl(e) {
  let t = null, n = !1;
  switch (e.charCode()) {
    case ho:
      e.pos++, t = {
        min: 0,
        max: 0
      };
      break;
    case pr:
      e.pos++, t = {
        min: 1,
        max: 0
      };
      break;
    case Dn:
      e.pos++, t = {
        min: 0,
        max: 1
      };
      break;
    case fr:
      e.pos++, n = !0, e.charCode() === Zt ? t = Zr(e) : e.charCode() === Dn ? (e.pos++, t = {
        min: 0,
        max: 0
      }) : t = {
        min: 1,
        max: 0
      };
      break;
    case Zt:
      t = Zr(e);
      break;
    default:
      return null;
  }
  return {
    type: "Multiplier",
    comma: n,
    min: t.min,
    max: t.max,
    term: null
  };
}
function lt(e, t) {
  const n = Dl(e);
  return n !== null ? (n.term = t, e.charCode() === fr && e.charCodeAt(e.pos - 1) === pr ? lt(e, n) : n) : t;
}
function An(e) {
  const t = e.peek();
  return t === "" ? null : {
    type: "Token",
    value: t
  };
}
function Fl(e) {
  let t;
  return e.eat(mr), e.eat(Yt), t = at(e), e.eat(Yt), e.eat(fo), lt(e, {
    type: "Property",
    name: t
  });
}
function Bl(e) {
  let t = null, n = null, r = 1;
  return e.eat(un), e.charCode() === Gr && (e.peek(), r = -1), r == -1 && e.charCode() === Xr ? e.peek() : (t = r * Number(en(e)), At[e.charCode()] !== 0 && (t += at(e))), Jt(e), e.eat(dr), Jt(e), e.charCode() === Xr ? e.peek() : (r = 1, e.charCode() === Gr && (e.peek(), r = -1), n = r * Number(en(e)), At[e.charCode()] !== 0 && (n += at(e))), e.eat(gr), {
    type: "Range",
    min: t,
    max: n
  };
}
function Ul(e) {
  let t, n = null;
  return e.eat(mr), t = at(e), e.charCode() === uo && e.nextCharCode() === Nl && (e.pos += 2, t += "()"), e.charCodeAt(e.findWsEnd(e.pos)) === un && (Jt(e), n = Bl(e)), e.eat(fo), lt(e, {
    type: "Type",
    name: t,
    opts: n
  });
}
function Hl(e) {
  const t = at(e);
  return e.charCode() === uo ? (e.pos++, {
    type: "Function",
    name: t
  }) : lt(e, {
    type: "Keyword",
    name: t
  });
}
function Wl(e, t) {
  function n(i, o) {
    return {
      type: "Group",
      terms: i,
      combinator: o,
      disallowEmpty: !1,
      explicit: !1
    };
  }
  let r;
  for (t = Object.keys(t).sort((i, o) => Yr[i] - Yr[o]); t.length > 0; ) {
    r = t.shift();
    let i = 0, o = 0;
    for (; i < e.length; i++) {
      const a = e[i];
      a.type === "Combinator" && (a.value === r ? (o === -1 && (o = i - 1), e.splice(i, 1), i--) : (o !== -1 && i - o > 1 && (e.splice(
        o,
        i - o,
        n(e.slice(o, i), r)
      ), i = o + 1), o = -1));
    }
    o !== -1 && t.length && e.splice(
      o,
      i - o,
      n(e.slice(o, i), r)
    );
  }
  return r;
}
function po(e) {
  const t = [], n = {};
  let r, i = null, o = e.pos;
  for (; r = Vl(e); )
    r.type !== "Spaces" && (r.type === "Combinator" ? ((i === null || i.type === "Combinator") && (e.pos = o, e.error("Unexpected combinator")), n[r.value] = !0) : i !== null && i.type !== "Combinator" && (n[" "] = !0, t.push({
      type: "Combinator",
      value: " "
    })), t.push(r), i = r, o = e.pos);
  return i !== null && i.type === "Combinator" && (e.pos -= o, e.error("Unexpected combinator")), {
    type: "Group",
    terms: t,
    combinator: Wl(t, n) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function ql(e) {
  let t;
  return e.eat(un), t = po(e), e.eat(gr), t.explicit = !0, e.charCode() === co && (e.pos++, t.disallowEmpty = !0), t;
}
function Vl(e) {
  let t = e.charCode();
  if (t < 128 && At[t] === 1)
    return Hl(e);
  switch (t) {
    case gr:
      break;
    case un:
      return lt(e, ql(e));
    case mr:
      return e.nextCharCode() === Yt ? Fl(e) : Ul(e);
    case Kr:
      return {
        type: "Combinator",
        value: e.substringToPos(
          e.pos + (e.nextCharCode() === Kr ? 2 : 1)
        )
      };
    case Vr:
      return e.pos++, e.eat(Vr), {
        type: "Combinator",
        value: "&&"
      };
    case dr:
      return e.pos++, {
        type: "Comma"
      };
    case Yt:
      return lt(e, {
        type: "String",
        value: jl(e)
      });
    case Il:
    case _l:
    case Pl:
    case Ml:
    case zl:
      return {
        type: "Spaces",
        value: Jt(e)
      };
    case Rl:
      return t = e.nextCharCode(), t < 128 && At[t] === 1 ? (e.pos++, {
        type: "AtKeyword",
        name: at(e)
      }) : An(e);
    case ho:
    case pr:
    case Dn:
    case fr:
    case co:
      break;
    case Zt:
      if (t = e.nextCharCode(), t < 48 || t > 57)
        return An(e);
      break;
    default:
      return An(e);
  }
}
function mo(e) {
  const t = new $l(e), n = po(t);
  return t.pos !== e.length && t.error("Unexpected input"), n.terms.length === 1 && n.terms[0].type === "Group" ? n.terms[0] : n;
}
const gt = function() {
};
function Jr(e) {
  return typeof e == "function" ? e : gt;
}
function Gl(e, t, n) {
  function r(a) {
    switch (i.call(n, a), a.type) {
      case "Group":
        a.terms.forEach(r);
        break;
      case "Multiplier":
        r(a.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw new Error("Unknown type: " + a.type);
    }
    o.call(n, a);
  }
  let i = gt, o = gt;
  if (typeof t == "function" ? i = t : t && (i = Jr(t.enter), o = Jr(t.leave)), i === gt && o === gt)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  r(e);
}
const Kl = {
  decorator(e) {
    const t = [];
    let n = null;
    return X(L({}, e), {
      node(r) {
        const i = n;
        n = r, e.node.call(this, r), n = i;
      },
      emit(r, i, o) {
        t.push({
          type: i,
          value: r,
          node: o ? null : n
        });
      },
      result() {
        return t;
      }
    });
  }
};
function Ql(e) {
  const t = [];
  return on(
    e,
    (n, r, i) => t.push({
      type: n,
      value: e.slice(r, i),
      node: null
    })
  ), t;
}
function Xl(e, t) {
  return typeof e == "string" ? Ql(e) : t.generate(e, Kl);
}
const M = { type: "Match" }, I = { type: "Mismatch" }, br = { type: "DisallowEmpty" }, Yl = 40, Zl = 41;
function Z(e, t, n) {
  return t === M && n === I || e === M && t === M && n === M ? e : (e.type === "If" && e.else === I && t === M && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: n
  });
}
function go(e) {
  return e.length > 2 && e.charCodeAt(e.length - 2) === Yl && e.charCodeAt(e.length - 1) === Zl;
}
function ei(e) {
  return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || e.type === "Type" && go(e.name);
}
function Fn(e, t, n) {
  switch (e) {
    case " ": {
      let r = M;
      for (let i = t.length - 1; i >= 0; i--) {
        const o = t[i];
        r = Z(
          o,
          r,
          I
        );
      }
      return r;
    }
    case "|": {
      let r = I, i = null;
      for (let o = t.length - 1; o >= 0; o--) {
        let a = t[o];
        if (ei(a) && (i === null && o > 0 && ei(t[o - 1]) && (i = /* @__PURE__ */ Object.create(null), r = Z(
          {
            type: "Enum",
            map: i
          },
          M,
          r
        )), i !== null)) {
          const u = (go(a.name) ? a.name.slice(0, -1) : a.name).toLowerCase();
          if (!(u in i)) {
            i[u] = a;
            continue;
          }
        }
        i = null, r = Z(
          a,
          M,
          r
        );
      }
      return r;
    }
    case "&&": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !0
        };
      let r = I;
      for (let i = t.length - 1; i >= 0; i--) {
        const o = t[i];
        let a;
        t.length > 1 ? a = Fn(
          e,
          t.filter(function(u) {
            return u !== o;
          }),
          !1
        ) : a = M, r = Z(
          o,
          a,
          r
        );
      }
      return r;
    }
    case "||": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !1
        };
      let r = n ? M : I;
      for (let i = t.length - 1; i >= 0; i--) {
        const o = t[i];
        let a;
        t.length > 1 ? a = Fn(
          e,
          t.filter(function(u) {
            return u !== o;
          }),
          !0
        ) : a = M, r = Z(
          o,
          a,
          r
        );
      }
      return r;
    }
  }
}
function Jl(e) {
  let t = M, n = yr(e.term);
  if (e.max === 0)
    n = Z(
      n,
      br,
      I
    ), t = Z(
      n,
      null,
      // will be a loop
      I
    ), t.then = Z(
      M,
      M,
      t
      // make a loop
    ), e.comma && (t.then.else = Z(
      { type: "Comma", syntax: e },
      t,
      I
    ));
  else
    for (let r = e.min || 1; r <= e.max; r++)
      e.comma && t !== M && (t = Z(
        { type: "Comma", syntax: e },
        t,
        I
      )), t = Z(
        n,
        Z(
          M,
          M,
          t
        ),
        I
      );
  if (e.min === 0)
    t = Z(
      M,
      M,
      t
    );
  else
    for (let r = 0; r < e.min - 1; r++)
      e.comma && t !== M && (t = Z(
        { type: "Comma", syntax: e },
        t,
        I
      )), t = Z(
        n,
        t,
        I
      );
  return t;
}
function yr(e) {
  if (typeof e == "function")
    return {
      type: "Generic",
      fn: e
    };
  switch (e.type) {
    case "Group": {
      let t = Fn(
        e.combinator,
        e.terms.map(yr),
        !1
      );
      return e.disallowEmpty && (t = Z(
        t,
        br,
        I
      )), t;
    }
    case "Multiplier":
      return Jl(e);
    case "Type":
    case "Property":
      return {
        type: e.type,
        name: e.name,
        syntax: e
      };
    case "Keyword":
      return {
        type: e.type,
        name: e.name.toLowerCase(),
        syntax: e
      };
    case "AtKeyword":
      return {
        type: e.type,
        name: "@" + e.name.toLowerCase(),
        syntax: e
      };
    case "Function":
      return {
        type: e.type,
        name: e.name.toLowerCase() + "(",
        syntax: e
      };
    case "String":
      return e.value.length === 3 ? {
        type: "Token",
        value: e.value.charAt(1),
        syntax: e
      } : {
        type: e.type,
        value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"),
        syntax: e
      };
    case "Token":
      return {
        type: e.type,
        value: e.value,
        syntax: e
      };
    case "Comma":
      return {
        type: e.type,
        syntax: e
      };
    default:
      throw new Error("Unknown node type:", e.type);
  }
}
function Bn(e, t) {
  return typeof e == "string" && (e = mo(e)), {
    type: "MatchGraph",
    match: yr(e),
    syntax: t || null,
    source: e
  };
}
const { hasOwnProperty: ti } = Object.prototype, ec = 0, tc = 1, Un = 2, bo = 3, ni = "Match", nc = "Mismatch", rc = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", ri = 15e3;
function ic(e) {
  let t = null, n = null, r = e;
  for (; r !== null; )
    n = r.prev, r.prev = t, t = r, r = n;
  return t;
}
function Tn(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++) {
    const r = t.charCodeAt(n);
    let i = e.charCodeAt(n);
    if (i >= 65 && i <= 90 && (i = i | 32), i !== r)
      return !1;
  }
  return !0;
}
function oc(e) {
  return e.type !== P ? !1 : e.value !== "?";
}
function ii(e) {
  return e === null ? !0 : e.type === Oe || e.type === z || e.type === G || e.type === ce || e.type === te || oc(e);
}
function oi(e) {
  return e === null ? !0 : e.type === N || e.type === ke || e.type === pe || e.type === P && e.value === "/";
}
function sc(e, t, n) {
  function r() {
    do
      w++, b = w < e.length ? e[w] : null;
    while (b !== null && (b.type === F || b.type === re));
  }
  function i(C) {
    const $ = w + C;
    return $ < e.length ? e[$] : null;
  }
  function o(C, $) {
    return {
      nextState: C,
      matchStack: y,
      syntaxStack: f,
      thenStack: d,
      tokenIndex: w,
      prev: $
    };
  }
  function a(C) {
    d = {
      nextState: C,
      matchStack: y,
      syntaxStack: f,
      prev: d
    };
  }
  function u(C) {
    g = o(C, g);
  }
  function l() {
    y = {
      type: tc,
      syntax: t.syntax,
      token: b,
      prev: y
    }, r(), T = null, w > A && (A = w);
  }
  function s() {
    f = {
      syntax: t.syntax,
      opts: t.syntax.opts || f !== null && f.opts || null,
      prev: f
    }, y = {
      type: Un,
      syntax: t.syntax,
      token: y.token,
      prev: y
    };
  }
  function c() {
    y.type === Un ? y = y.prev : y = {
      type: bo,
      syntax: f.syntax,
      token: y.token,
      prev: y
    }, f = f.prev;
  }
  let f = null, d = null, g = null, T = null, k = 0, S = null, b = null, w = -1, A = 0, y = {
    type: ec,
    syntax: null,
    token: null,
    prev: null
  };
  for (r(); S === null && ++k < ri; )
    switch (t.type) {
      case "Match":
        if (d === null) {
          if (b !== null && (w !== e.length - 1 || b.value !== "\\0" && b.value !== "\\9")) {
            t = I;
            break;
          }
          S = ni;
          break;
        }
        if (t = d.nextState, t === br)
          if (d.matchStack === y) {
            t = I;
            break;
          } else
            t = M;
        for (; d.syntaxStack !== f; )
          c();
        d = d.prev;
        break;
      case "Mismatch":
        if (T !== null && T !== !1)
          (g === null || w > g.tokenIndex) && (g = T, T = !1);
        else if (g === null) {
          S = nc;
          break;
        }
        t = g.nextState, d = g.thenStack, f = g.syntaxStack, y = g.matchStack, w = g.tokenIndex, b = w < e.length ? e[w] : null, g = g.prev;
        break;
      case "MatchGraph":
        t = t.match;
        break;
      case "If":
        t.else !== I && u(t.else), t.then !== M && a(t.then), t = t.match;
        break;
      case "MatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t,
          index: 0,
          mask: 0
        };
        break;
      case "MatchOnceBuffer": {
        const E = t.syntax.terms;
        if (t.index === E.length) {
          if (t.mask === 0 || t.syntax.all) {
            t = I;
            break;
          }
          t = M;
          break;
        }
        if (t.mask === (1 << E.length) - 1) {
          t = M;
          break;
        }
        for (; t.index < E.length; t.index++) {
          const h = 1 << t.index;
          if (!(t.mask & h)) {
            u(t), a({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | h
            }), t = E[t.index++];
            break;
          }
        }
        break;
      }
      case "AddMatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t.syntax,
          index: 0,
          mask: t.mask
        };
        break;
      case "Enum":
        if (b !== null) {
          let E = b.value.toLowerCase();
          if (E.indexOf("\\") !== -1 && (E = E.replace(/\\[09].*$/, "")), ti.call(t.map, E)) {
            t = t.map[E];
            break;
          }
        }
        t = I;
        break;
      case "Generic": {
        const E = f !== null ? f.opts : null, h = w + Math.floor(t.fn(b, i, E));
        if (!isNaN(h) && h > w) {
          for (; w < h; )
            l();
          t = M;
        } else
          t = I;
        break;
      }
      case "Type":
      case "Property": {
        const E = t.type === "Type" ? "types" : "properties", h = ti.call(n, E) ? n[E][t.name] : null;
        if (!h || !h.match)
          throw new Error(
            "Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>")
          );
        if (T !== !1 && b !== null && t.type === "Type" && // https://drafts.csswg.org/css-values-4/#custom-idents
        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
        // can only claim the keyword if no other unfulfilled production can claim it.
        (t.name === "custom-ident" && b.type === v || // https://drafts.csswg.org/css-values-4/#lengths
        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
        // it must parse as a <number>
        t.name === "length" && b.value === "0")) {
          T === null && (T = o(t, g)), t = I;
          break;
        }
        s(), t = h.match;
        break;
      }
      case "Keyword": {
        const E = t.name;
        if (b !== null) {
          let h = b.value;
          if (h.indexOf("\\") !== -1 && (h = h.replace(/\\[09].*$/, "")), Tn(h, E)) {
            l(), t = M;
            break;
          }
        }
        t = I;
        break;
      }
      case "AtKeyword":
      case "Function":
        if (b !== null && Tn(b.value, t.name)) {
          l(), t = M;
          break;
        }
        t = I;
        break;
      case "Token":
        if (b !== null && b.value === t.value) {
          l(), t = M;
          break;
        }
        t = I;
        break;
      case "Comma":
        b !== null && b.type === Oe ? ii(y.token) ? t = I : (l(), t = oi(b) ? I : M) : t = ii(y.token) || oi(b) ? M : I;
        break;
      case "String":
        let C = "", $ = w;
        for (; $ < e.length && C.length < t.value.length; $++)
          C += e[$].value;
        if (Tn(C, t.value)) {
          for (; w < $; )
            l();
          t = M;
        } else
          t = I;
        break;
      default:
        throw new Error("Unknown node type: " + t.type);
    }
  switch (S) {
    case null:
      console.warn("[csstree-match] BREAK after " + ri + " iterations"), S = rc, y = null;
      break;
    case ni:
      for (; f !== null; )
        c();
      break;
    default:
      y = null;
  }
  return {
    tokens: e,
    reason: S,
    iterations: k,
    match: y,
    longestMatch: A
  };
}
function si(e, t, n) {
  const r = sc(e, t, n || {});
  if (r.match === null)
    return r;
  let i = r.match, o = r.match = {
    syntax: t.syntax || null,
    match: []
  };
  const a = [o];
  for (i = ic(i).prev; i !== null; ) {
    switch (i.type) {
      case Un:
        o.match.push(o = {
          syntax: i.syntax,
          match: []
        }), a.push(o);
        break;
      case bo:
        a.pop(), o = a[a.length - 1];
        break;
      default:
        o.match.push({
          syntax: i.syntax || null,
          token: i.token.value,
          node: i.token.node
        });
    }
    i = i.prev;
  }
  return r;
}
function yo(e) {
  function t(i) {
    return i === null ? !1 : i.type === "Type" || i.type === "Property" || i.type === "Keyword";
  }
  function n(i) {
    if (Array.isArray(i.match)) {
      for (let o = 0; o < i.match.length; o++)
        if (n(i.match[o]))
          return t(i.syntax) && r.unshift(i.syntax), !0;
    } else if (i.node === e)
      return r = t(i.syntax) ? [i.syntax] : [], !0;
    return !1;
  }
  let r = null;
  return this.matched !== null && n(this.matched), r;
}
function ac(e, t) {
  return kr(this, e, (n) => n.type === "Type" && n.name === t);
}
function lc(e, t) {
  return kr(this, e, (n) => n.type === "Property" && n.name === t);
}
function cc(e) {
  return kr(this, e, (t) => t.type === "Keyword");
}
function kr(e, t, n) {
  const r = yo.call(e, t);
  return r === null ? !1 : r.some(n);
}
const uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getTrace: yo,
  isKeyword: cc,
  isProperty: lc,
  isType: ac
}, Symbol.toStringTag, { value: "Module" }));
function ko(e) {
  return "node" in e ? e.node : ko(e.match[0]);
}
function xo(e) {
  return "node" in e ? e.node : xo(e.match[e.match.length - 1]);
}
function ai(e, t, n, r, i) {
  function o(u) {
    if (u.syntax !== null && u.syntax.type === r && u.syntax.name === i) {
      const l = ko(u), s = xo(u);
      e.syntax.walk(t, function(c, f, d) {
        if (c === l) {
          const g = new V();
          do {
            if (g.appendData(f.data), f.data === s)
              break;
            f = f.next;
          } while (f !== null);
          a.push({
            parent: d,
            nodes: g
          });
        }
      });
    }
    Array.isArray(u.match) && u.match.forEach(o);
  }
  const a = [];
  return n.matched !== null && o(n.matched), a;
}
const { hasOwnProperty: kt } = Object.prototype;
function On(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function li(e) {
  return !!e && On(e.offset) && On(e.line) && On(e.column);
}
function hc(e, t) {
  return function(r, i) {
    if (!r || r.constructor !== Object)
      return i(r, "Type of node should be an Object");
    for (let o in r) {
      let a = !0;
      if (kt.call(r, o) !== !1) {
        if (o === "type")
          r.type !== e && i(r, "Wrong node type `" + r.type + "`, expected `" + e + "`");
        else if (o === "loc") {
          if (r.loc === null)
            continue;
          if (r.loc && r.loc.constructor === Object)
            if (typeof r.loc.source != "string")
              o += ".source";
            else if (!li(r.loc.start))
              o += ".start";
            else if (!li(r.loc.end))
              o += ".end";
            else
              continue;
          a = !1;
        } else if (t.hasOwnProperty(o)) {
          a = !1;
          for (let u = 0; !a && u < t[o].length; u++) {
            const l = t[o][u];
            switch (l) {
              case String:
                a = typeof r[o] == "string";
                break;
              case Boolean:
                a = typeof r[o] == "boolean";
                break;
              case null:
                a = r[o] === null;
                break;
              default:
                typeof l == "string" ? a = r[o] && r[o].type === l : Array.isArray(l) && (a = r[o] instanceof V);
            }
          }
        } else
          i(r, "Unknown field `" + o + "` for " + e + " node type");
        a || i(r, "Bad value for `" + e + "." + o + "`");
      }
    }
    for (const o in t)
      kt.call(t, o) && kt.call(r, o) === !1 && i(r, "Field `" + e + "." + o + "` is missed");
  };
}
function fc(e, t) {
  const n = t.structure, r = {
    type: String,
    loc: !0
  }, i = {
    type: '"' + e + '"'
  };
  for (const o in n) {
    if (kt.call(n, o) === !1)
      continue;
    const a = [], u = r[o] = Array.isArray(n[o]) ? n[o].slice() : [n[o]];
    for (let l = 0; l < u.length; l++) {
      const s = u[l];
      if (s === String || s === Boolean)
        a.push(s.name);
      else if (s === null)
        a.push("null");
      else if (typeof s == "string")
        a.push("<" + s + ">");
      else if (Array.isArray(s))
        a.push("List");
      else
        throw new Error("Wrong value `" + s + "` in `" + e + "." + o + "` structure definition");
    }
    i[o] = a.join(" | ");
  }
  return {
    docs: i,
    check: hc(e, r)
  };
}
function pc(e) {
  const t = {};
  if (e.node) {
    for (const n in e.node)
      if (kt.call(e.node, n)) {
        const r = e.node[n];
        if (r.structure)
          t[n] = fc(n, r);
        else
          throw new Error("Missed `structure` field in `" + n + "` node type definition");
      }
  }
  return t;
}
const dc = Bn(no.join(" | "));
function Hn(e, t, n) {
  const r = {};
  for (const i in e)
    e[i].syntax && (r[i] = n ? e[i].syntax : cr(e[i].syntax, { compact: t }));
  return r;
}
function mc(e, t, n) {
  const r = {};
  for (const [i, o] of Object.entries(e))
    r[i] = {
      prelude: o.prelude && (n ? o.prelude.syntax : cr(o.prelude.syntax, { compact: t })),
      descriptors: o.descriptors && Hn(o.descriptors, t, n)
    };
  return r;
}
function gc(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function ge(e, t, n) {
  return L({
    matched: e,
    iterations: n,
    error: t
  }, uc);
}
function Ye(e, t, n, r) {
  const i = Xl(n, e.syntax);
  let o;
  return gc(i) ? ge(null, new Error("Matching for a tree with var() is not supported")) : (r && (o = si(i, e.cssWideKeywordsSyntax, e)), (!r || !o.match) && (o = si(i, t.match, e), !o.match) ? ge(
    null,
    new Va(o.reason, t.syntax, n, o),
    o.iterations
  ) : ge(o.match, null, o.iterations));
}
class ci {
  constructor(t, n, r) {
    if (this.cssWideKeywordsSyntax = dc, this.syntax = n, this.generic = !1, this.units = L({}, qr), this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = r || pc(t), t) {
      if (t.units)
        for (const i of Object.keys(qr))
          Array.isArray(t.units[i]) && (this.units[i] = t.units[i]);
      if (t.types)
        for (const i in t.types)
          this.addType_(i, t.types[i]);
      if (t.generic) {
        this.generic = !0;
        for (const [i, o] of Object.entries(ml(this.units)))
          this.addType_(i, o);
      }
      if (t.atrules)
        for (const i in t.atrules)
          this.addAtrule_(i, t.atrules[i]);
      if (t.properties)
        for (const i in t.properties)
          this.addProperty_(i, t.properties[i]);
    }
  }
  checkStructure(t) {
    function n(o, a) {
      i.push({ node: o, message: a });
    }
    const r = this.structure, i = [];
    return this.syntax.walk(t, function(o) {
      r.hasOwnProperty(o.type) ? r[o.type].check(o, n) : n(o, "Unknown node type `" + o.type + "`");
    }), i.length ? i : !1;
  }
  createDescriptor(t, n, r, i = null) {
    const o = {
      type: n,
      name: r
    }, a = {
      type: n,
      name: r,
      parent: i,
      serializable: typeof t == "string" || t && typeof t.type == "string",
      syntax: null,
      match: null
    };
    return typeof t == "function" ? a.match = Bn(t, o) : (typeof t == "string" ? Object.defineProperty(a, "syntax", {
      get() {
        return Object.defineProperty(a, "syntax", {
          value: mo(t)
        }), a.syntax;
      }
    }) : a.syntax = t, Object.defineProperty(a, "match", {
      get() {
        return Object.defineProperty(a, "match", {
          value: Bn(a.syntax, o)
        }), a.match;
      }
    })), a;
  }
  addAtrule_(t, n) {
    n && (this.atrules[t] = {
      type: "Atrule",
      name: t,
      prelude: n.prelude ? this.createDescriptor(n.prelude, "AtrulePrelude", t) : null,
      descriptors: n.descriptors ? Object.keys(n.descriptors).reduce(
        (r, i) => (r[i] = this.createDescriptor(n.descriptors[i], "AtruleDescriptor", i, t), r),
        /* @__PURE__ */ Object.create(null)
      ) : null
    });
  }
  addProperty_(t, n) {
    n && (this.properties[t] = this.createDescriptor(n, "Property", t));
  }
  addType_(t, n) {
    n && (this.types[t] = this.createDescriptor(n, "Type", t));
  }
  checkAtruleName(t) {
    if (!this.getAtrule(t))
      return new ft("Unknown at-rule", "@" + t);
  }
  checkAtrulePrelude(t, n) {
    const r = this.checkAtruleName(t);
    if (r)
      return r;
    const i = this.getAtrule(t);
    if (!i.prelude && n)
      return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (i.prelude && !n && !Ye(this, i.prelude, "", !1).matched)
      return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  }
  checkAtruleDescriptorName(t, n) {
    const r = this.checkAtruleName(t);
    if (r)
      return r;
    const i = this.getAtrule(t), o = wn(n);
    if (!i.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!i.descriptors[o.name] && !i.descriptors[o.basename])
      return new ft("Unknown at-rule descriptor", n);
  }
  checkPropertyName(t) {
    if (!this.getProperty(t))
      return new ft("Unknown property", t);
  }
  matchAtrulePrelude(t, n) {
    const r = this.checkAtrulePrelude(t, n);
    if (r)
      return ge(null, r);
    const i = this.getAtrule(t);
    return i.prelude ? Ye(this, i.prelude, n || "", !1) : ge(null, null);
  }
  matchAtruleDescriptor(t, n, r) {
    const i = this.checkAtruleDescriptorName(t, n);
    if (i)
      return ge(null, i);
    const o = this.getAtrule(t), a = wn(n);
    return Ye(this, o.descriptors[a.name] || o.descriptors[a.basename], r, !1);
  }
  matchDeclaration(t) {
    return t.type !== "Declaration" ? ge(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  }
  matchProperty(t, n) {
    if (Wr(t).custom)
      return ge(null, new Error("Lexer matching doesn't applicable for custom properties"));
    const r = this.checkPropertyName(t);
    return r ? ge(null, r) : Ye(this, this.getProperty(t), n, !0);
  }
  matchType(t, n) {
    const r = this.getType(t);
    return r ? Ye(this, r, n, !1) : ge(null, new ft("Unknown type", t));
  }
  match(t, n) {
    return typeof t != "string" && (!t || !t.type) ? ge(null, new ft("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), Ye(this, t, n, !1));
  }
  findValueFragments(t, n, r, i) {
    return ai(this, n, this.matchProperty(t, n), r, i);
  }
  findDeclarationValueFragments(t, n, r) {
    return ai(this, t.value, this.matchDeclaration(t), n, r);
  }
  findAllFragments(t, n, r) {
    const i = [];
    return this.syntax.walk(t, {
      visit: "Declaration",
      enter: (o) => {
        i.push.apply(i, this.findDeclarationValueFragments(o, n, r));
      }
    }), i;
  }
  getAtrule(t, n = !0) {
    const r = wn(t);
    return (r.vendor && n ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name]) || null;
  }
  getAtrulePrelude(t, n = !0) {
    const r = this.getAtrule(t, n);
    return r && r.prelude || null;
  }
  getAtruleDescriptor(t, n) {
    return this.atrules.hasOwnProperty(t) && this.atrules.declarators && this.atrules[t].declarators[n] || null;
  }
  getProperty(t, n = !0) {
    const r = Wr(t);
    return (r.vendor && n ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name]) || null;
  }
  getType(t) {
    return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
  }
  validate() {
    function t(i, o, a, u) {
      if (a.has(o))
        return a.get(o);
      a.set(o, !1), u.syntax !== null && Gl(u.syntax, function(l) {
        if (l.type !== "Type" && l.type !== "Property")
          return;
        const s = l.type === "Type" ? i.types : i.properties, c = l.type === "Type" ? n : r;
        (!hasOwnProperty.call(s, l.name) || t(i, l.name, c, s[l.name])) && a.set(o, !0);
      }, this);
    }
    let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i in this.types)
      t(this, i, n, this.types[i]);
    for (const i in this.properties)
      t(this, i, r, this.properties[i]);
    return n = [...n.keys()].filter((i) => n.get(i)), r = [...r.keys()].filter((i) => r.get(i)), n.length || r.length ? {
      types: n,
      properties: r
    } : null;
  }
  dump(t, n) {
    return {
      generic: this.generic,
      units: this.units,
      types: Hn(this.types, !n, t),
      properties: Hn(this.properties, !n, t),
      atrules: mc(this.atrules, !n, t)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
}
function En(e, t) {
  return typeof t == "string" && /^\s*\|/.test(t) ? typeof e == "string" ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function ui(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const [r, i] of Object.entries(e))
    if (i) {
      n[r] = {};
      for (const o of Object.keys(i))
        t.includes(o) && (n[r][o] = i[o]);
    }
  return n;
}
function Wn(e, t) {
  const n = L({}, e);
  for (const [r, i] of Object.entries(t))
    switch (r) {
      case "generic":
        n[r] = !!i;
        break;
      case "units":
        n[r] = L({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = Array.isArray(a) ? a : [];
        break;
      case "atrules":
        n[r] = L({}, e[r]);
        for (const [o, a] of Object.entries(i)) {
          const u = n[r][o] || {}, l = n[r][o] = {
            prelude: u.prelude || null,
            descriptors: L({}, u.descriptors)
          };
          if (a) {
            l.prelude = a.prelude ? En(l.prelude, a.prelude) : l.prelude || null;
            for (const [s, c] of Object.entries(a.descriptors || {}))
              l.descriptors[s] = c ? En(l.descriptors[s], c) : null;
            Object.keys(l.descriptors).length || (l.descriptors = null);
          }
        }
        break;
      case "types":
      case "properties":
        n[r] = L({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = En(n[r][o], a);
        break;
      case "scope":
        n[r] = L({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = L(L({}, n[r][o]), a);
        break;
      case "parseContext":
        n[r] = L(L({}, e[r]), i);
        break;
      case "atrule":
      case "pseudo":
        n[r] = L(L({}, e[r]), ui(i, ["parse"]));
        break;
      case "node":
        n[r] = L(L({}, e[r]), ui(i, ["name", "structure", "parse", "generate", "walkContext"]));
        break;
    }
  return n;
}
function vo(e) {
  const t = wa(e), n = Fa(e), r = Na(e), { fromPlainObject: i, toPlainObject: o } = Ra(n), a = {
    lexer: null,
    createLexer: (u) => new ci(u, a, a.lexer.structure),
    tokenize: on,
    parse: t,
    generate: r,
    walk: n,
    find: n.find,
    findLast: n.findLast,
    findAll: n.findAll,
    fromPlainObject: i,
    toPlainObject: o,
    fork(u) {
      const l = Wn({}, e);
      return vo(
        typeof u == "function" ? u(l, Object.assign) : Wn(l, u)
      );
    }
  };
  return a.lexer = new ci({
    generic: !0,
    units: e.units,
    types: e.types,
    atrules: e.atrules,
    properties: e.properties,
    node: e.node
  }, a), a;
}
const bc = (e) => vo(Wn({}, e)), yc = {
  generic: !0,
  units: {
    angle: [
      "deg",
      "grad",
      "rad",
      "turn"
    ],
    decibel: [
      "db"
    ],
    flex: [
      "fr"
    ],
    frequency: [
      "hz",
      "khz"
    ],
    length: [
      "cm",
      "mm",
      "q",
      "in",
      "pt",
      "pc",
      "px",
      "em",
      "rem",
      "ex",
      "rex",
      "cap",
      "rcap",
      "ch",
      "rch",
      "ic",
      "ric",
      "lh",
      "rlh",
      "vw",
      "svw",
      "lvw",
      "dvw",
      "vh",
      "svh",
      "lvh",
      "dvh",
      "vi",
      "svi",
      "lvi",
      "dvi",
      "vb",
      "svb",
      "lvb",
      "dvb",
      "vmin",
      "svmin",
      "lvmin",
      "dvmin",
      "vmax",
      "svmax",
      "lvmax",
      "dvmax",
      "cqw",
      "cqh",
      "cqi",
      "cqb",
      "cqmin",
      "cqmax"
    ],
    resolution: [
      "dpi",
      "dpcm",
      "dppx",
      "x"
    ],
    semitones: [
      "st"
    ],
    time: [
      "s",
      "ms"
    ]
  },
  types: {
    "abs()": "abs( <calc-sum> )",
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "acos()": "acos( <calc-sum> )",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    "asin()": "asin( <calc-sum> )",
    "atan()": "atan( <calc-sum> )",
    "atan2()": "atan2( <calc-sum> , <calc-sum> )",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    axis: "block|inline|vertical|horizontal",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
    "calc-constant": "e|pi|infinity|-infinity|NaN",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    "cos()": "cos( <calc-sum> )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "exp()": "exp( <calc-sum> )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    "hypot()": "hypot( <calc-sum># )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "log()": "log( <calc-sum> , <calc-sum>? )",
    "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()": "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
    "mod()": "mod( <calc-sum> , <calc-sum> )",
    "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
    "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( [<length [0,∞]>|none] )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pow()": "pow( <calc-sum> , <calc-sum> )",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "rem()": "rem( <calc-sum> , <calc-sum> )",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "reversed-counter-name": "reversed( <counter-name> )",
    "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
    "rounding-strategy": "nearest|up|down|to-zero",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( [<number>|<percentage>]#{1,2} )",
    "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
    "scaleX()": "scaleX( [<number>|<percentage>] )",
    "scaleY()": "scaleY( [<number>|<percentage>] )",
    "scaleZ()": "scaleZ( [<number>|<percentage>] )",
    scroller: "root|nearest",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "sign()": "sign( <calc-sum> )",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "sin()": "sin( <calc-sum> )",
    "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>|scroll( <axis>? <scroller>? )",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "sqrt()": "sqrt( <calc-sum> )",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    "tan()": "tan( <calc-sum> )",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
    "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    right: "<length>|auto",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "single-animation-composition": "replace|add|accumulate",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,∞]>",
    "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-composition": "<single-animation-composition>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    caret: "<'caret-color'>||<'caret-shape'>",
    "caret-color": "auto|<color>",
    "caret-shape": "auto|bar|block|underscore",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
    "contain-intrinsic-size": "[none|<length>|auto <length>]{1,2}",
    "contain-intrinsic-block-size": "none|<length>|auto <length>",
    "contain-intrinsic-height": "none|<length>|auto <length>",
    "contain-intrinsic-inline-size": "none|<length>|auto <length>",
    "contain-intrinsic-width": "none|<length>|auto <length>",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-depth": "auto-add|add( <integer> )|<integer>",
    "math-shift": "normal|compact",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "scroll-timeline": "<scroll-timeline-name>||<scroll-timeline-axis>",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: {
      prelude: "<string>",
      descriptors: null
    },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": {
      prelude: "<family-name>#",
      descriptors: null
    },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: {
      prelude: "<keyframes-name>",
      descriptors: null
    },
    layer: {
      prelude: "[<layer-name>#|<layer-name>?]",
      descriptors: null
    },
    media: {
      prelude: "<media-query-list>",
      descriptors: null
    },
    namespace: {
      prelude: "<namespace-prefix>? [<string>|<url>]",
      descriptors: null
    },
    page: {
      prelude: "<page-selector-list>",
      descriptors: {
        bleed: "auto|<length>",
        marks: "none|[crop||cross]",
        size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
      }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: {
        syntax: "<string>",
        inherits: "true|false",
        "initial-value": "<string>"
      }
    },
    "scroll-timeline": {
      prelude: "<timeline-name>",
      descriptors: null
    },
    supports: {
      prelude: "<supports-condition>",
      descriptors: null
    },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    },
    nest: {
      prelude: "<complex-selector-list>",
      descriptors: null
    }
  }
}, we = 43, ae = 45, Ft = 110, De = !0, kc = !1;
function Bt(e, t) {
  let n = this.tokenStart + e;
  const r = this.charCodeAt(n);
  for ((r === we || r === ae) && (t && this.error("Number sign is not allowed"), n++); n < this.tokenEnd; n++)
    Q(this.charCodeAt(n)) || this.error("Integer is expected", n);
}
function et(e) {
  return Bt.call(this, 0, e);
}
function ze(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let n = "";
    switch (t) {
      case Ft:
        n = "N is expected";
        break;
      case ae:
        n = "HyphenMinus is expected";
        break;
    }
    this.error(n, this.tokenStart + e);
  }
}
function Ln() {
  let e = 0, t = 0, n = this.tokenType;
  for (; n === F || n === re; )
    n = this.lookupType(++e);
  if (n !== O)
    if (this.isDelim(we, e) || this.isDelim(ae, e)) {
      t = this.isDelim(we, e) ? we : ae;
      do
        n = this.lookupType(++e);
      while (n === F || n === re);
      n !== O && (this.skip(e), et.call(this, De));
    } else
      return null;
  return e > 0 && this.skip(e), t === 0 && (n = this.charCodeAt(this.tokenStart), n !== we && n !== ae && this.error("Number sign is expected")), et.call(this, t !== 0), t === ae ? "-" + this.consume(O) : this.consume(O);
}
const xc = "AnPlusB", vc = {
  a: [String, null],
  b: [String, null]
};
function wo() {
  const e = this.tokenStart;
  let t = null, n = null;
  if (this.tokenType === O)
    et.call(this, kc), n = this.consume(O);
  else if (this.tokenType === v && this.cmpChar(this.tokenStart, ae))
    switch (t = "-1", ze.call(this, 1, Ft), this.tokenEnd - this.tokenStart) {
      case 2:
        this.next(), n = Ln.call(this);
        break;
      case 3:
        ze.call(this, 2, ae), this.next(), this.skipSC(), et.call(this, De), n = "-" + this.consume(O);
        break;
      default:
        ze.call(this, 2, ae), Bt.call(this, 3, De), this.next(), n = this.substrToCursor(e + 2);
    }
  else if (this.tokenType === v || this.isDelim(we) && this.lookupType(1) === v) {
    let r = 0;
    switch (t = "1", this.isDelim(we) && (r = 1, this.next()), ze.call(this, 0, Ft), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next(), n = Ln.call(this);
        break;
      case 2:
        ze.call(this, 1, ae), this.next(), this.skipSC(), et.call(this, De), n = "-" + this.consume(O);
        break;
      default:
        ze.call(this, 1, ae), Bt.call(this, 2, De), this.next(), n = this.substrToCursor(e + r + 1);
    }
  } else if (this.tokenType === _) {
    const r = this.charCodeAt(this.tokenStart), i = r === we || r === ae;
    let o = this.tokenStart + i;
    for (; o < this.tokenEnd && Q(this.charCodeAt(o)); o++)
      ;
    o === this.tokenStart + i && this.error("Integer is expected", this.tokenStart + i), ze.call(this, o - this.tokenStart, Ft), t = this.substring(e, o), o + 1 === this.tokenEnd ? (this.next(), n = Ln.call(this)) : (ze.call(this, o - this.tokenStart + 1, ae), o + 2 === this.tokenEnd ? (this.next(), this.skipSC(), et.call(this, De), n = "-" + this.consume(O)) : (Bt.call(this, o - this.tokenStart + 2, De), this.next(), n = this.substrToCursor(o + 1)));
  } else
    this.error();
  return t !== null && t.charCodeAt(0) === we && (t = t.substr(1)), n !== null && n.charCodeAt(0) === we && (n = n.substr(1)), {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: n
  };
}
function wc(e) {
  if (e.a) {
    const t = e.a === "+1" && "n" || e.a === "1" && "n" || e.a === "-1" && "-n" || e.a + "n";
    if (e.b) {
      const n = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
      this.tokenize(t + n);
    } else
      this.tokenize(t);
  } else
    this.tokenize(e.b);
}
const Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: wc,
  name: xc,
  parse: wo,
  structure: vc
}, Symbol.toStringTag, { value: "Module" }));
function hi(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function Cc() {
  for (let e = 1, t; t = this.lookupType(e); e++) {
    if (t === pe)
      return !0;
    if (t === te || t === H)
      return !1;
  }
  return !1;
}
const Ac = "Atrule", Tc = "atrule", Oc = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
function So(e = !1) {
  const t = this.tokenStart;
  let n, r, i = null, o = null;
  switch (this.eat(H), n = this.substrToCursor(t + 1), r = n.toLowerCase(), this.skipSC(), this.eof === !1 && this.tokenType !== te && this.tokenType !== se && (this.parseAtrulePrelude ? i = this.parseWithFallback(this.AtrulePrelude.bind(this, n, e), hi) : i = hi.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case se:
      this.next();
      break;
    case te:
      hasOwnProperty.call(this.atrule, r) && typeof this.atrule[r].block == "function" ? o = this.atrule[r].block.call(this, e) : o = this.Block(Cc.call(this));
      break;
  }
  return {
    type: "Atrule",
    loc: this.getLocation(t, this.tokenStart),
    name: n,
    prelude: i,
    block: o
  };
}
function Ec(e) {
  this.token(H, "@" + e.name), e.prelude !== null && this.node(e.prelude), e.block ? this.node(e.block) : this.token(se, ";");
}
const Lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ec,
  name: Ac,
  parse: So,
  structure: Oc,
  walkContext: Tc
}, Symbol.toStringTag, { value: "Module" })), $c = "AtrulePrelude", _c = "atrulePrelude", Pc = {
  children: [[]]
};
function Co(e) {
  let t = null;
  return e !== null && (e = e.toLowerCase()), this.skipSC(), hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function" ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== !0 && this.tokenType !== te && this.tokenType !== se && this.error("Semicolon or block is expected"), {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
}
function zc(e) {
  this.children(e);
}
const Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: zc,
  name: $c,
  parse: Co,
  structure: Pc,
  walkContext: _c
}, Symbol.toStringTag, { value: "Module" })), Ic = 36, Ao = 42, Ut = 61, Nc = 94, qn = 124, Rc = 126;
function jc() {
  this.eof && this.error("Unexpected end of input");
  const e = this.tokenStart;
  let t = !1;
  return this.isDelim(Ao) ? (t = !0, this.next()) : this.isDelim(qn) || this.eat(v), this.isDelim(qn) ? this.charCodeAt(this.tokenStart + 1) !== Ut ? (this.next(), this.eat(v)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function Dc() {
  const e = this.tokenStart, t = this.charCodeAt(e);
  return t !== Ut && // =
  t !== Rc && // ~=
  t !== Nc && // ^=
  t !== Ic && // $=
  t !== Ao && // *=
  t !== qn && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), t !== Ut && (this.isDelim(Ut) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e);
}
const Fc = "AttributeSelector", Bc = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
function To() {
  const e = this.tokenStart;
  let t, n = null, r = null, i = null;
  return this.eat(ce), this.skipSC(), t = jc.call(this), this.skipSC(), this.tokenType !== ke && (this.tokenType !== v && (n = Dc.call(this), this.skipSC(), r = this.tokenType === Te ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === v && (i = this.consume(v), this.skipSC())), this.eat(ke), {
    type: "AttributeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    matcher: n,
    value: r,
    flags: i
  };
}
function Uc(e) {
  this.token(P, "["), this.node(e.name), e.matcher !== null && (this.tokenize(e.matcher), this.node(e.value)), e.flags !== null && this.token(v, e.flags), this.token(P, "]");
}
const Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Uc,
  name: Fc,
  parse: To,
  structure: Bc
}, Symbol.toStringTag, { value: "Module" })), Wc = 38;
function Oo(e) {
  return this.Raw(e, null, !0);
}
function fi() {
  return this.parseWithFallback(this.Rule, Oo);
}
function pi(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function qc() {
  if (this.tokenType === se)
    return pi.call(this, this.tokenIndex);
  const e = this.parseWithFallback(this.Declaration, pi);
  return this.tokenType === se && this.next(), e;
}
const Vc = "Block", Gc = "block", Kc = {
  children: [[
    "Atrule",
    "Rule",
    "Declaration"
  ]]
};
function Eo(e) {
  const t = e ? qc : fi, n = this.tokenStart;
  let r = this.createList();
  this.eat(te);
  e:
    for (; !this.eof; )
      switch (this.tokenType) {
        case pe:
          break e;
        case F:
        case re:
          this.next();
          break;
        case H:
          r.push(this.parseWithFallback(this.Atrule.bind(this, e), Oo));
          break;
        default:
          e && this.isDelim(Wc) ? r.push(fi.call(this)) : r.push(t.call(this));
      }
  return this.eof || this.eat(pe), {
    type: "Block",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function Qc(e) {
  this.token(te, "{"), this.children(e, (t) => {
    t.type === "Declaration" && this.token(se, ";");
  }), this.token(pe, "}");
}
const Xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Qc,
  name: Vc,
  parse: Eo,
  structure: Kc,
  walkContext: Gc
}, Symbol.toStringTag, { value: "Module" })), Yc = "Brackets", Zc = {
  children: [[]]
};
function Lo(e, t) {
  const n = this.tokenStart;
  let r = null;
  return this.eat(ce), r = e.call(this, t), this.eof || this.eat(ke), {
    type: "Brackets",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function Jc(e) {
  this.token(P, "["), this.children(e), this.token(P, "]");
}
const eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Jc,
  name: Yc,
  parse: Lo,
  structure: Zc
}, Symbol.toStringTag, { value: "Module" })), tu = "CDC", nu = [];
function $o() {
  const e = this.tokenStart;
  return this.eat(oe), {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function ru() {
  this.token(oe, "-->");
}
const iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ru,
  name: tu,
  parse: $o,
  structure: nu
}, Symbol.toStringTag, { value: "Module" })), ou = "CDO", su = [];
function _o() {
  const e = this.tokenStart;
  return this.eat(Et), {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function au() {
  this.token(Et, "<!--");
}
const lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: au,
  name: ou,
  parse: _o,
  structure: su
}, Symbol.toStringTag, { value: "Module" })), cu = 46, uu = "ClassSelector", hu = {
  name: String
};
function Po() {
  return this.eatDelim(cu), {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(v)
  };
}
function fu(e) {
  this.token(P, "."), this.token(v, e.name);
}
const pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: fu,
  name: uu,
  parse: Po,
  structure: hu
}, Symbol.toStringTag, { value: "Module" })), du = 43, di = 47, mu = 62, gu = 126, bu = "Combinator", yu = {
  name: String
};
function zo() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case F:
      t = " ";
      break;
    case P:
      switch (this.charCodeAt(this.tokenStart)) {
        case mu:
        case du:
        case gu:
          this.next();
          break;
        case di:
          this.next(), this.eatIdent("deep"), this.eatDelim(di);
          break;
        default:
          this.error("Combinator is expected");
      }
      t = this.substrToCursor(e);
      break;
  }
  return {
    type: "Combinator",
    loc: this.getLocation(e, this.tokenStart),
    name: t
  };
}
function ku(e) {
  this.tokenize(e.name);
}
const xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ku,
  name: bu,
  parse: zo,
  structure: yu
}, Symbol.toStringTag, { value: "Module" })), vu = 42, wu = 47, Su = "Comment", Cu = {
  value: String
};
function Mo() {
  const e = this.tokenStart;
  let t = this.tokenEnd;
  return this.eat(re), t - e + 2 >= 2 && this.charCodeAt(t - 2) === vu && this.charCodeAt(t - 1) === wu && (t -= 2), {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
}
function Au(e) {
  this.token(re, "/*" + e.value + "*/");
}
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Au,
  name: Su,
  parse: Mo,
  structure: Cu
}, Symbol.toStringTag, { value: "Module" })), Io = 33, Ou = 35, Eu = 36, Lu = 38, $u = 42, _u = 43, mi = 47;
function Pu(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function zu(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function Mu() {
  const e = this.tokenIndex, t = this.Value();
  return t.type !== "Raw" && this.eof === !1 && this.tokenType !== se && this.isDelim(Io) === !1 && this.isBalanceEdge(e) === !1 && this.error(), t;
}
const Iu = "Declaration", Nu = "declaration", Ru = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
function No() {
  const e = this.tokenStart, t = this.tokenIndex, n = Du.call(this), r = ur(n), i = r ? this.parseCustomProperty : this.parseValue, o = r ? zu : Pu;
  let a = !1, u;
  this.skipSC(), this.eat(ee);
  const l = this.tokenIndex;
  if (r || this.skipSC(), i ? u = this.parseWithFallback(Mu, o) : u = o.call(this, this.tokenIndex), r && u.type === "Value" && u.children.isEmpty) {
    for (let s = l - this.tokenIndex; s <= 0; s++)
      if (this.lookupType(s) === F) {
        u.children.appendData({
          type: "WhiteSpace",
          loc: null,
          value: " "
        });
        break;
      }
  }
  return this.isDelim(Io) && (a = Fu.call(this), this.skipSC()), this.eof === !1 && this.tokenType !== se && this.isBalanceEdge(t) === !1 && this.error(), {
    type: "Declaration",
    loc: this.getLocation(e, this.tokenStart),
    important: a,
    property: n,
    value: u
  };
}
function ju(e) {
  this.token(v, e.property), this.token(ee, ":"), this.node(e.value), e.important && (this.token(P, "!"), this.token(v, e.important === !0 ? "important" : e.important));
}
function Du() {
  const e = this.tokenStart;
  if (this.tokenType === P)
    switch (this.charCodeAt(this.tokenStart)) {
      case $u:
      case Eu:
      case _u:
      case Ou:
      case Lu:
        this.next();
        break;
      case mi:
        this.next(), this.isDelim(mi) && this.next();
        break;
    }
  return this.tokenType === j ? this.eat(j) : this.eat(v), this.substrToCursor(e);
}
function Fu() {
  this.eat(P), this.skipSC();
  const e = this.consume(v);
  return e === "important" ? !0 : e;
}
const Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ju,
  name: Iu,
  parse: No,
  structure: Ru,
  walkContext: Nu
}, Symbol.toStringTag, { value: "Module" })), Uu = 38;
function $n(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
const Hu = "DeclarationList", Wu = {
  children: [[
    "Declaration",
    "Atrule",
    "Rule"
  ]]
};
function Ro() {
  const e = this.createList();
  for (; !this.eof; )
    switch (this.tokenType) {
      case F:
      case re:
      case se:
        this.next();
        break;
      case H:
        e.push(this.parseWithFallback(this.Atrule.bind(this, !0), $n));
        break;
      default:
        this.isDelim(Uu) ? e.push(this.parseWithFallback(this.Rule, $n)) : e.push(this.parseWithFallback(this.Declaration, $n));
    }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function qu(e) {
  this.children(e, (t) => {
    t.type === "Declaration" && this.token(se, ";");
  });
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: qu,
  name: Hu,
  parse: Ro,
  structure: Wu
}, Symbol.toStringTag, { value: "Module" })), Gu = "Dimension", Ku = {
  value: String,
  unit: String
};
function jo() {
  const e = this.tokenStart, t = this.consumeNumber(_);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
}
function Qu(e) {
  this.token(_, e.value + e.unit);
}
const Xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Qu,
  name: Gu,
  parse: jo,
  structure: Ku
}, Symbol.toStringTag, { value: "Module" })), Yu = "Function", Zu = "function", Ju = {
  name: String,
  children: [[]]
};
function Do(e, t) {
  const n = this.tokenStart, r = this.consumeFunctionName(), i = r.toLowerCase();
  let o;
  return o = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t), this.eof || this.eat(N), {
    type: "Function",
    loc: this.getLocation(n, this.tokenStart),
    name: r,
    children: o
  };
}
function eh(e) {
  this.token(z, e.name + "("), this.children(e), this.token(N, ")");
}
const th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: eh,
  name: Yu,
  parse: Do,
  structure: Ju,
  walkContext: Zu
}, Symbol.toStringTag, { value: "Module" })), nh = "XXX", rh = "Hash", ih = {
  value: String
};
function Fo() {
  const e = this.tokenStart;
  return this.eat(j), {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
}
function oh(e) {
  this.token(j, "#" + e.value);
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: oh,
  name: rh,
  parse: Fo,
  structure: ih,
  xxx: nh
}, Symbol.toStringTag, { value: "Module" })), ah = "Identifier", lh = {
  name: String
};
function Bo() {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(v)
  };
}
function ch(e) {
  this.token(v, e.name);
}
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ch,
  name: ah,
  parse: Bo,
  structure: lh
}, Symbol.toStringTag, { value: "Module" })), hh = "IdSelector", fh = {
  name: String
};
function Uo() {
  const e = this.tokenStart;
  return this.eat(j), {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
}
function ph(e) {
  this.token(P, "#" + e.name);
}
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ph,
  name: hh,
  parse: Uo,
  structure: fh
}, Symbol.toStringTag, { value: "Module" })), mh = "MediaFeature", gh = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
function Ho() {
  const e = this.tokenStart;
  let t, n = null;
  if (this.eat(G), this.skipSC(), t = this.consume(v), this.skipSC(), this.tokenType !== N) {
    switch (this.eat(ee), this.skipSC(), this.tokenType) {
      case O:
        this.lookupNonWSType(1) === P ? n = this.Ratio() : n = this.Number();
        break;
      case _:
        n = this.Dimension();
        break;
      case v:
        n = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  return this.eat(N), {
    type: "MediaFeature",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    value: n
  };
}
function bh(e) {
  this.token(G, "("), this.token(v, e.name), e.value !== null && (this.token(ee, ":"), this.node(e.value)), this.token(N, ")");
}
const yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: bh,
  name: mh,
  parse: Ho,
  structure: gh
}, Symbol.toStringTag, { value: "Module" })), kh = "MediaQuery", xh = {
  children: [[
    "Identifier",
    "MediaFeature",
    "WhiteSpace"
  ]]
};
function Wo() {
  const e = this.createList();
  let t = null;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case re:
        case F:
          this.next();
          continue;
        case v:
          t = this.Identifier();
          break;
        case G:
          t = this.MediaFeature();
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return t === null && this.error("Identifier or parenthesis is expected"), {
    type: "MediaQuery",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function vh(e) {
  this.children(e);
}
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: vh,
  name: kh,
  parse: Wo,
  structure: xh
}, Symbol.toStringTag, { value: "Module" })), Sh = "MediaQueryList", Ch = {
  children: [[
    "MediaQuery"
  ]]
};
function qo() {
  const e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === Oe); )
    this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function Ah(e) {
  this.children(e, () => this.token(Oe, ","));
}
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ah,
  name: Sh,
  parse: qo,
  structure: Ch
}, Symbol.toStringTag, { value: "Module" })), Oh = 38, Eh = "NestingSelector", Lh = {};
function Vo() {
  const e = this.tokenStart;
  return this.eatDelim(Oh), {
    type: "NestingSelector",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function $h() {
  this.token(P, "&");
}
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: $h,
  name: Eh,
  parse: Vo,
  structure: Lh
}, Symbol.toStringTag, { value: "Module" })), Ph = "Nth", zh = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
function Go() {
  this.skipSC();
  const e = this.tokenStart;
  let t = e, n = null, r;
  return this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? r = this.Identifier() : r = this.AnPlusB(), t = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), n = this.SelectorList(), t = this.tokenStart), {
    type: "Nth",
    loc: this.getLocation(e, t),
    nth: r,
    selector: n
  };
}
function Mh(e) {
  this.node(e.nth), e.selector !== null && (this.token(v, "of"), this.node(e.selector));
}
const Ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Mh,
  name: Ph,
  parse: Go,
  structure: zh
}, Symbol.toStringTag, { value: "Module" })), Nh = "Number", Rh = {
  value: String
};
function Ko() {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(O)
  };
}
function jh(e) {
  this.token(O, e.value);
}
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: jh,
  name: Nh,
  parse: Ko,
  structure: Rh
}, Symbol.toStringTag, { value: "Module" })), Fh = "Operator", Bh = {
  value: String
};
function Qo() {
  const e = this.tokenStart;
  return this.next(), {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function Uh(e) {
  this.tokenize(e.value);
}
const Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Uh,
  name: Fh,
  parse: Qo,
  structure: Bh
}, Symbol.toStringTag, { value: "Module" })), Wh = "Parentheses", qh = {
  children: [[]]
};
function Xo(e, t) {
  const n = this.tokenStart;
  let r = null;
  return this.eat(G), r = e.call(this, t), this.eof || this.eat(N), {
    type: "Parentheses",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function Vh(e) {
  this.token(G, "("), this.children(e), this.token(N, ")");
}
const Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Vh,
  name: Wh,
  parse: Xo,
  structure: qh
}, Symbol.toStringTag, { value: "Module" })), Kh = "Percentage", Qh = {
  value: String
};
function Yo() {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(D)
  };
}
function Xh(e) {
  this.token(D, e.value + "%");
}
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Xh,
  name: Kh,
  parse: Yo,
  structure: Qh
}, Symbol.toStringTag, { value: "Module" })), Zh = "PseudoClassSelector", Jh = "function", ef = {
  name: String,
  children: [["Raw"], null]
};
function Zo() {
  const e = this.tokenStart;
  let t = null, n, r;
  return this.eat(ee), this.tokenType === z ? (n = this.consumeFunctionName(), r = n.toLowerCase(), hasOwnProperty.call(this.pseudo, r) ? (this.skipSC(), t = this.pseudo[r].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(N)) : n = this.consume(v), {
    type: "PseudoClassSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: n,
    children: t
  };
}
function tf(e) {
  this.token(ee, ":"), e.children === null ? this.token(v, e.name) : (this.token(z, e.name + "("), this.children(e), this.token(N, ")"));
}
const nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: tf,
  name: Zh,
  parse: Zo,
  structure: ef,
  walkContext: Jh
}, Symbol.toStringTag, { value: "Module" })), rf = "PseudoElementSelector", of = "function", sf = {
  name: String,
  children: [["Raw"], null]
};
function Jo() {
  const e = this.tokenStart;
  let t = null, n, r;
  return this.eat(ee), this.eat(ee), this.tokenType === z ? (n = this.consumeFunctionName(), r = n.toLowerCase(), hasOwnProperty.call(this.pseudo, r) ? (this.skipSC(), t = this.pseudo[r].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(N)) : n = this.consume(v), {
    type: "PseudoElementSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: n,
    children: t
  };
}
function af(e) {
  this.token(ee, ":"), this.token(ee, ":"), e.children === null ? this.token(v, e.name) : (this.token(z, e.name + "("), this.children(e), this.token(N, ")"));
}
const lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: af,
  name: rf,
  parse: Jo,
  structure: sf,
  walkContext: of
}, Symbol.toStringTag, { value: "Module" })), cf = 47, uf = 46;
function gi() {
  this.skipSC();
  const e = this.consume(O);
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    !Q(n) && n !== uf && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  return Number(e) === 0 && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
}
const hf = "Ratio", ff = {
  left: String,
  right: String
};
function es() {
  const e = this.tokenStart, t = gi.call(this);
  let n;
  return this.skipSC(), this.eatDelim(cf), n = gi.call(this), {
    type: "Ratio",
    loc: this.getLocation(e, this.tokenStart),
    left: t,
    right: n
  };
}
function pf(e) {
  this.token(O, e.left), this.token(P, "/"), this.token(O, e.right);
}
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: pf,
  name: hf,
  parse: es,
  structure: ff
}, Symbol.toStringTag, { value: "Module" }));
function mf() {
  return this.tokenIndex > 0 && this.lookupType(-1) === F ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
const gf = "Raw", bf = {
  value: String
};
function ts(e, t, n) {
  const r = this.getTokenStart(e);
  let i;
  return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), n && this.tokenStart > r ? i = mf.call(this) : i = this.tokenStart, {
    type: "Raw",
    loc: this.getLocation(r, i),
    value: this.substring(r, i)
  };
}
function yf(e) {
  this.tokenize(e.value);
}
const kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: yf,
  name: gf,
  parse: ts,
  structure: bf
}, Symbol.toStringTag, { value: "Module" }));
function bi(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function xf() {
  const e = this.SelectorList();
  return e.type !== "Raw" && this.eof === !1 && this.tokenType !== te && this.error(), e;
}
const vf = "Rule", wf = "rule", Sf = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
function ns() {
  const e = this.tokenIndex, t = this.tokenStart;
  let n, r;
  return this.parseRulePrelude ? n = this.parseWithFallback(xf, bi) : n = bi.call(this, e), r = this.Block(!0), {
    type: "Rule",
    loc: this.getLocation(t, this.tokenStart),
    prelude: n,
    block: r
  };
}
function Cf(e) {
  this.node(e.prelude), this.node(e.block);
}
const Af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Cf,
  name: vf,
  parse: ns,
  structure: Sf,
  walkContext: wf
}, Symbol.toStringTag, { value: "Module" })), Tf = "Selector", Of = {
  children: [[
    "TypeSelector",
    "IdSelector",
    "ClassSelector",
    "AttributeSelector",
    "PseudoClassSelector",
    "PseudoElementSelector",
    "Combinator",
    "WhiteSpace"
  ]]
};
function rs() {
  const e = this.readSequence(this.scope.Selector);
  return this.getFirstListNode(e) === null && this.error("Selector is expected"), {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function Ef(e) {
  this.children(e);
}
const Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ef,
  name: Tf,
  parse: rs,
  structure: Of
}, Symbol.toStringTag, { value: "Module" })), $f = "SelectorList", _f = "selector", Pf = {
  children: [[
    "Selector",
    "Raw"
  ]]
};
function is() {
  const e = this.createList();
  for (; !this.eof; ) {
    if (e.push(this.Selector()), this.tokenType === Oe) {
      this.next();
      continue;
    }
    break;
  }
  return {
    type: "SelectorList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function zf(e) {
  this.children(e, () => this.token(Oe, ","));
}
const Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: zf,
  name: $f,
  parse: is,
  structure: Pf,
  walkContext: _f
}, Symbol.toStringTag, { value: "Module" })), Vn = 92, os = 34, ss = 39;
function as(e) {
  const t = e.length, n = e.charCodeAt(0), r = n === os || n === ss ? 1 : 0, i = r === 1 && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1;
  let o = "";
  for (let a = r; a <= i; a++) {
    let u = e.charCodeAt(a);
    if (u === Vn) {
      if (a === i) {
        a !== t - 1 && (o = e.substr(a + 1));
        break;
      }
      if (u = e.charCodeAt(++a), Se(Vn, u)) {
        const l = a - 1, s = st(e, l);
        a = s - 1, o += Hi(e.substring(l + 1, s));
      } else
        u === 13 && e.charCodeAt(a + 1) === 10 && a++;
    } else
      o += e[a];
  }
  return o;
}
function If(e, t) {
  const n = t ? "'" : '"', r = t ? ss : os;
  let i = "", o = !1;
  for (let a = 0; a < e.length; a++) {
    const u = e.charCodeAt(a);
    if (u === 0) {
      i += "�";
      continue;
    }
    if (u <= 31 || u === 127) {
      i += "\\" + u.toString(16), o = !0;
      continue;
    }
    u === r || u === Vn ? (i += "\\" + e.charAt(a), o = !1) : (o && (Re(u) || qe(u)) && (i += " "), i += e.charAt(a), o = !1);
  }
  return n + i + n;
}
const Nf = "String", Rf = {
  value: String
};
function ls() {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: as(this.consume(Te))
  };
}
function jf(e) {
  this.token(Te, If(e.value));
}
const Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: jf,
  name: Nf,
  parse: ls,
  structure: Rf
}, Symbol.toStringTag, { value: "Module" })), Ff = 33;
function yi(e) {
  return this.Raw(e, null, !1);
}
const Bf = "StyleSheet", Uf = "stylesheet", Hf = {
  children: [[
    "Comment",
    "CDO",
    "CDC",
    "Atrule",
    "Rule",
    "Raw"
  ]]
};
function cs() {
  const e = this.tokenStart, t = this.createList();
  let n;
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case F:
        this.next();
        continue;
      case re:
        if (this.charCodeAt(this.tokenStart + 2) !== Ff) {
          this.next();
          continue;
        }
        n = this.Comment();
        break;
      case Et:
        n = this.CDO();
        break;
      case oe:
        n = this.CDC();
        break;
      case H:
        n = this.parseWithFallback(this.Atrule, yi);
        break;
      default:
        n = this.parseWithFallback(this.Rule, yi);
    }
    t.push(n);
  }
  return {
    type: "StyleSheet",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function Wf(e) {
  this.children(e);
}
const qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Wf,
  name: Bf,
  parse: cs,
  structure: Hf,
  walkContext: Uf
}, Symbol.toStringTag, { value: "Module" })), Vf = 42, ki = 124;
function _n() {
  this.tokenType !== v && this.isDelim(Vf) === !1 && this.error("Identifier or asterisk is expected"), this.next();
}
const Gf = "TypeSelector", Kf = {
  name: String
};
function us() {
  const e = this.tokenStart;
  return this.isDelim(ki) ? (this.next(), _n.call(this)) : (_n.call(this), this.isDelim(ki) && (this.next(), _n.call(this))), {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function Qf(e) {
  this.tokenize(e.name);
}
const Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Qf,
  name: Gf,
  parse: us,
  structure: Kf
}, Symbol.toStringTag, { value: "Module" })), hs = 43, fs = 45, Gn = 63;
function bt(e, t) {
  let n = 0;
  for (let r = this.tokenStart + e; r < this.tokenEnd; r++) {
    const i = this.charCodeAt(r);
    if (i === fs && t && n !== 0)
      return bt.call(this, e + n + 1, !1), -1;
    Re(i) || this.error(
      t && n !== 0 ? "Hyphen minus" + (n < 6 ? " or hex digit" : "") + " is expected" : n < 6 ? "Hex digit is expected" : "Unexpected input",
      r
    ), ++n > 6 && this.error("Too many hex digits", r);
  }
  return this.next(), n;
}
function It(e) {
  let t = 0;
  for (; this.isDelim(Gn); )
    ++t > e && this.error("Too many question marks"), this.next();
}
function Yf(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((e === hs ? "Plus sign" : "Hyphen minus") + " is expected");
}
function Zf() {
  let e = 0;
  switch (this.tokenType) {
    case O:
      if (e = bt.call(this, 1, !0), this.isDelim(Gn)) {
        It.call(this, 6 - e);
        break;
      }
      if (this.tokenType === _ || this.tokenType === O) {
        Yf.call(this, fs), bt.call(this, 1, !1);
        break;
      }
      break;
    case _:
      e = bt.call(this, 1, !0), e > 0 && It.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(hs), this.tokenType === v) {
        e = bt.call(this, 0, !0), e > 0 && It.call(this, 6 - e);
        break;
      }
      if (this.isDelim(Gn)) {
        this.next(), It.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
const Jf = "UnicodeRange", ep = {
  value: String
};
function ps() {
  const e = this.tokenStart;
  return this.eatIdent("u"), Zf.call(this), {
    type: "UnicodeRange",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function tp(e) {
  this.tokenize(e.value);
}
const np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: tp,
  name: Jf,
  parse: ps,
  structure: ep
}, Symbol.toStringTag, { value: "Module" })), rp = 32, Kn = 92, ip = 34, op = 39, sp = 40, ds = 41;
function ap(e) {
  const t = e.length;
  let n = 4, r = e.charCodeAt(t - 1) === ds ? t - 2 : t - 1, i = "";
  for (; n < r && qe(e.charCodeAt(n)); )
    n++;
  for (; n < r && qe(e.charCodeAt(r)); )
    r--;
  for (let o = n; o <= r; o++) {
    let a = e.charCodeAt(o);
    if (a === Kn) {
      if (o === r) {
        o !== t - 1 && (i = e.substr(o + 1));
        break;
      }
      if (a = e.charCodeAt(++o), Se(Kn, a)) {
        const u = o - 1, l = st(e, u);
        o = l - 1, i += Hi(e.substring(u + 1, l));
      } else
        a === 13 && e.charCodeAt(o + 1) === 10 && o++;
    } else
      i += e[o];
  }
  return i;
}
function lp(e) {
  let t = "", n = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 0) {
      t += "�";
      continue;
    }
    if (i <= 31 || i === 127) {
      t += "\\" + i.toString(16), n = !0;
      continue;
    }
    i === rp || i === Kn || i === ip || i === op || i === sp || i === ds ? (t += "\\" + e.charAt(r), n = !1) : (n && Re(i) && (t += " "), t += e.charAt(r), n = !1);
  }
  return "url(" + t + ")";
}
const cp = "Url", up = {
  value: String
};
function ms() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case J:
      t = ap(this.consume(J));
      break;
    case z:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(z), this.skipSC(), t = as(this.consume(Te)), this.skipSC(), this.eof || this.eat(N);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return {
    type: "Url",
    loc: this.getLocation(e, this.tokenStart),
    value: t
  };
}
function hp(e) {
  this.token(J, lp(e.value));
}
const fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: hp,
  name: cp,
  parse: ms,
  structure: up
}, Symbol.toStringTag, { value: "Module" })), pp = "Value", dp = {
  children: [[]]
};
function gs() {
  const e = this.tokenStart, t = this.readSequence(this.scope.Value);
  return {
    type: "Value",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function mp(e) {
  this.children(e);
}
const gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: mp,
  name: pp,
  parse: gs,
  structure: dp
}, Symbol.toStringTag, { value: "Module" })), bp = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), yp = "WhiteSpace", kp = {
  value: String
};
function bs() {
  return this.eat(F), bp;
}
function xp(e) {
  this.token(F, e.value);
}
const vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: xp,
  name: yp,
  parse: bs,
  structure: kp
}, Symbol.toStringTag, { value: "Module" })), ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnPlusB: Sc,
  Atrule: Lc,
  AtrulePrelude: Mc,
  AttributeSelector: Hc,
  Block: Xc,
  Brackets: eu,
  CDC: iu,
  CDO: lu,
  ClassSelector: pu,
  Combinator: xu,
  Comment: Tu,
  Declaration: Bu,
  DeclarationList: Vu,
  Dimension: Xu,
  Function: th,
  Hash: sh,
  IdSelector: dh,
  Identifier: uh,
  MediaFeature: yh,
  MediaQuery: wh,
  MediaQueryList: Th,
  NestingSelector: _h,
  Nth: Ih,
  Number: Dh,
  Operator: Hh,
  Parentheses: Gh,
  Percentage: Yh,
  PseudoClassSelector: nf,
  PseudoElementSelector: lf,
  Ratio: df,
  Raw: kf,
  Rule: Af,
  Selector: Lf,
  SelectorList: Mf,
  String: Df,
  StyleSheet: qf,
  TypeSelector: Xf,
  UnicodeRange: np,
  Url: fp,
  Value: gp,
  WhiteSpace: vp
}, Symbol.toStringTag, { value: "Module" })), wp = X(L({
  generic: !0
}, yc), {
  node: ys
}), Sp = 35, Cp = 42, xi = 43, Ap = 45, Tp = 47, Op = 117;
function ks(e) {
  switch (this.tokenType) {
    case j:
      return this.Hash();
    case Oe:
      return this.Operator();
    case G:
      return this.Parentheses(this.readSequence, e.recognizer);
    case ce:
      return this.Brackets(this.readSequence, e.recognizer);
    case Te:
      return this.String();
    case _:
      return this.Dimension();
    case D:
      return this.Percentage();
    case O:
      return this.Number();
    case z:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case J:
      return this.Url();
    case v:
      return this.cmpChar(this.tokenStart, Op) && this.cmpChar(this.tokenStart + 1, xi) ? this.UnicodeRange() : this.Identifier();
    case P: {
      const t = this.charCodeAt(this.tokenStart);
      if (t === Tp || t === Cp || t === xi || t === Ap)
        return this.Operator();
      t === Sp && this.error("Hex or identifier is expected", this.tokenStart + 1);
      break;
    }
  }
}
const Ep = {
  getNode: ks
}, Lp = 35, $p = 38, _p = 42, Pp = 43, zp = 47, vi = 46, Mp = 62, Ip = 124, Np = 126;
function Rp(e, t) {
  t.last !== null && t.last.type !== "Combinator" && e !== null && e.type !== "Combinator" && t.push({
    // FIXME: this.Combinator() should be used instead
    type: "Combinator",
    loc: null,
    name: " "
  });
}
function jp() {
  switch (this.tokenType) {
    case ce:
      return this.AttributeSelector();
    case j:
      return this.IdSelector();
    case ee:
      return this.lookupType(1) === ee ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case v:
      return this.TypeSelector();
    case O:
    case D:
      return this.Percentage();
    case _:
      this.charCodeAt(this.tokenStart) === vi && this.error("Identifier is expected", this.tokenStart + 1);
      break;
    case P: {
      switch (this.charCodeAt(this.tokenStart)) {
        case Pp:
        case Mp:
        case Np:
        case zp:
          return this.Combinator();
        case vi:
          return this.ClassSelector();
        case _p:
        case Ip:
          return this.TypeSelector();
        case Lp:
          return this.IdSelector();
        case $p:
          return this.NestingSelector();
      }
      break;
    }
  }
}
const Dp = {
  onWhiteSpace: Rp,
  getNode: jp
};
function Fp() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
function Bp() {
  const e = this.createList();
  if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === Oe) {
    e.push(this.Operator());
    const t = this.tokenIndex, n = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
    if (n.type === "Value" && n.children.isEmpty) {
      for (let r = t - this.tokenIndex; r <= 0; r++)
        if (this.lookupType(r) === F) {
          n.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    e.push(n);
  }
  return e;
}
function wi(e) {
  return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
}
const Up = {
  getNode: ks,
  onWhiteSpace(e, t) {
    wi(e) && (e.value = " " + e.value), wi(t.last) && (t.last.value += " ");
  },
  expression: Fp,
  var: Bp
}, Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AtrulePrelude: Ep,
  Selector: Dp,
  Value: Up
}, Symbol.toStringTag, { value: "Module" })), Wp = {
  parse: {
    prelude: null,
    block() {
      return this.Block(!0);
    }
  }
}, qp = {
  parse: {
    prelude() {
      const e = this.createList();
      switch (this.skipSC(), this.tokenType) {
        case Te:
          e.push(this.String());
          break;
        case J:
        case z:
          e.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === v || this.lookupNonWSType(0) === G) && e.push(this.MediaQueryList()), e;
    },
    block: null
  }
}, Vp = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.MediaQueryList()
      );
    },
    block(e = !1) {
      return this.Block(e);
    }
  }
}, Gp = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block() {
      return this.Block(!0);
    }
  }
}, Kp = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block() {
      return this.Block(!0);
    }
  }
};
function Qp() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
function Xp() {
  return this.skipSC(), this.tokenType === v && this.lookupNonWSType(1) === ee ? this.createSingleNodeList(
    this.Declaration()
  ) : xs.call(this);
}
function xs() {
  const e = this.createList();
  let t;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case re:
        case F:
          this.next();
          continue;
        case z:
          t = this.Function(Qp, this.scope.AtrulePrelude);
          break;
        case v:
          t = this.Identifier();
          break;
        case G:
          t = this.Parentheses(Xp, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return e;
}
const Yp = {
  parse: {
    prelude() {
      const e = xs.call(this);
      return this.getFirstListNode(e) === null && this.error("Condition is expected"), e;
    },
    block(e = !1) {
      return this.Block(e);
    }
  }
}, Zp = {
  "font-face": Wp,
  import: qp,
  media: Vp,
  nest: Gp,
  page: Kp,
  supports: Yp
}, je = {
  parse() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, Pn = {
  parse() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, Si = {
  parse() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, Nt = {
  parse() {
    return this.createSingleNodeList(
      this.Nth()
    );
  }
}, Jp = {
  dir: Si,
  has: je,
  lang: Si,
  matches: je,
  is: je,
  "-moz-any": je,
  "-webkit-any": je,
  where: je,
  not: je,
  "nth-child": Nt,
  "nth-last-child": Nt,
  "nth-last-of-type": Nt,
  "nth-of-type": Nt,
  slotted: Pn,
  host: Pn,
  "host-context": Pn
}, ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnPlusB: wo,
  Atrule: So,
  AtrulePrelude: Co,
  AttributeSelector: To,
  Block: Eo,
  Brackets: Lo,
  CDC: $o,
  CDO: _o,
  ClassSelector: Po,
  Combinator: zo,
  Comment: Mo,
  Declaration: No,
  DeclarationList: Ro,
  Dimension: jo,
  Function: Do,
  Hash: Fo,
  IdSelector: Uo,
  Identifier: Bo,
  MediaFeature: Ho,
  MediaQuery: Wo,
  MediaQueryList: qo,
  NestingSelector: Vo,
  Nth: Go,
  Number: Ko,
  Operator: Qo,
  Parentheses: Xo,
  Percentage: Yo,
  PseudoClassSelector: Zo,
  PseudoElementSelector: Jo,
  Ratio: es,
  Raw: ts,
  Rule: ns,
  Selector: rs,
  SelectorList: is,
  String: ls,
  StyleSheet: cs,
  TypeSelector: us,
  UnicodeRange: ps,
  Url: ms,
  Value: gs,
  WhiteSpace: bs
}, Symbol.toStringTag, { value: "Module" })), td = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: Hp,
  atrule: Zp,
  pseudo: Jp,
  node: ed
}, nd = {
  node: ys
}, rd = bc(L(L(L({}, wp), td), nd)), {
  tokenize: Fd,
  parse: id,
  generate: ve,
  lexer: Bd,
  createLexer: Ud,
  walk: Ze,
  find: Hd,
  findLast: Wd,
  findAll: qd,
  toPlainObject: Vd,
  fromPlainObject: Gd,
  fork: Kd
} = rd;
function vs(e, t, n) {
  return ut(e, t) === n;
}
function od(e, t) {
  return !e || e === t ? !1 : ws(e) ? e.document.contains(t) : e.contains(t);
}
function ws(e) {
  return !!(e && e === e.window);
}
function sd(e) {
  return vs(e, "position", "fixed");
}
function Qn(e) {
  return !!(e && (sd(e) || vs(e, "position", "absolute")));
}
function ad(e) {
  const t = document.querySelectorAll("dialog, [popover]");
  return !!Array.from(t).includes(e);
}
function Ci(e, t) {
  return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING || ad(t);
}
function ld(e, t) {
  return q(this, null, function* () {
    var i;
    const n = yield U.getOffsetParent(e), r = yield U.getOffsetParent(t);
    if (!(od(r, e) || ws(r)) || n === r && !(!Qn(e) || Ci(e, t)))
      return !1;
    if (n !== r) {
      let o;
      const a = [];
      for (o = n; o && o !== r && o !== window; )
        a.push(o), o = yield (i = U.getOffsetParent) == null ? void 0 : i.call(U, o);
      const u = a[a.length - 1];
      if (u instanceof HTMLElement && !(!Qn(u) || Ci(u, t)))
        return !1;
    }
    {
      let o = e.parentElement;
      for (; o; ) {
        if (getComputedStyle(o).contentVisibility === "hidden")
          return !1;
        o = o.parentElement;
      }
    }
    return !0;
  });
}
function Ai(e, t) {
  return q(this, null, function* () {
    if (!(e instanceof HTMLElement && t.length && Qn(e)))
      return null;
    const n = document.querySelectorAll(
      t.join(", ")
    );
    let r;
    for (const i of n)
      (yield ld(i, e)) && (r = i);
    return r;
  });
}
const cd = [
  "left",
  "right",
  "top",
  "bottom",
  "inset-block-start",
  "inset-block-end",
  "inset-inline-start",
  "inset-inline-end",
  "inset-block",
  "inset-inline",
  "inset"
], ud = [
  "width",
  "height",
  "min-width",
  "min-height",
  "max-width",
  "max-height"
], hd = [
  "justify-content",
  "align-content",
  "justify-self",
  "align-self",
  "justify-items",
  "align-items"
], fd = [
  "top",
  "left",
  "right",
  "bottom",
  "start",
  "end",
  "self-start",
  "self-end",
  "center"
], pd = [
  "width",
  "height",
  "block",
  "inline",
  "self-block",
  "self-inline"
];
function dd(e) {
  return e.type === "Declaration";
}
function md(e) {
  return e.type === "Declaration" && e.property === "anchor-name";
}
function Ss(e) {
  return !!(e && e.type === "Function" && e.name === "anchor");
}
function Cs(e) {
  return !!(e && e.type === "Function" && e.name === "anchor-size");
}
function Ht(e) {
  return !!(e && e.type === "Function" && e.name === "var");
}
function gd(e) {
  return e.type === "Declaration" && e.property === "position-fallback";
}
function bd(e) {
  return e.type === "Atrule" && e.name === "position-fallback";
}
function yd(e) {
  return e.type === "Atrule" && e.name === "try";
}
function zn(e) {
  return !!(e.type === "Identifier" && e.name);
}
function kd(e) {
  return !!(e.type === "Percentage" && e.value);
}
function Tt(e) {
  return cd.includes(e);
}
function xd(e) {
  return fd.includes(e);
}
function hn(e) {
  return ud.includes(e);
}
function vd(e) {
  return pd.includes(e);
}
function wd(e) {
  return hd.includes(e);
}
function Ti(e, t) {
  let n, r, i, o = "", a = !1, u;
  const l = [];
  e.children.toArray().forEach((d) => {
    if (a) {
      o = `${o}${ve(d)}`;
      return;
    }
    if (d.type === "Operator" && d.value === ",") {
      a = !0;
      return;
    }
    l.push(d);
  });
  let [s, c] = l;
  if (c || (c = s, s = void 0), s && (zn(s) ? s.name === "implicit" ? s = void 0 : s.name.startsWith("--") && (n = s.name) : Ht(s) && s.children.first && (u = s.children.first.name)), c)
    if (Ss(e)) {
      if (zn(c) && xd(c.name))
        r = c.name;
      else if (kd(c)) {
        const d = Number(c.value);
        r = Number.isNaN(d) ? void 0 : d;
      }
    } else
      Cs(e) && zn(c) && vd(c.name) && (i = c.name);
  const f = `--anchor-${Be(12)}`;
  return t && (Object.assign(e, {
    type: "Raw",
    value: `var(${f})`,
    children: null
  }), Reflect.deleteProperty(e, "name")), {
    anchorName: n,
    anchorSide: r,
    anchorSize: i,
    fallbackValue: o || "0px",
    customPropName: u,
    uuid: f
  };
}
function Sd(e, t) {
  return md(e) && e.value.children.first && (t != null && t.value) ? { name: e.value.children.first.name, selector: t.value } : {};
}
let xt = {}, Ue = {}, vt = {}, Fe = {};
function Cd() {
  xt = {}, Ue = {}, vt = {}, Fe = {};
}
function Ad(e, t) {
  var n;
  if ((Ss(e) || Cs(e)) && t) {
    if (t.property.startsWith("--")) {
      const r = ve(t.value), i = Ti(e, !0);
      return vt[i.uuid] = r, Ue[t.property] = [
        ...(n = Ue[t.property]) != null ? n : [],
        i
      ], { changed: !0 };
    }
    if (Tt(t.property) || hn(t.property)) {
      const r = Ti(e, !0);
      return { prop: t.property, data: r, changed: !0 };
    }
  }
  return {};
}
function Td(e, t) {
  return gd(e) && e.value.children.first && (t != null && t.value) ? { name: e.value.children.first.name, selector: t.value } : {};
}
function Od(e) {
  var t, n;
  if (bd(e) && ((t = e.prelude) != null && t.value) && ((n = e.block) != null && n.children)) {
    const r = e.prelude.value, i = [];
    return e.block.children.filter(yd).forEach((a) => {
      var u;
      if ((u = a.block) != null && u.children) {
        const l = a.block.children.filter(
          (c) => dd(c) && (Tt(c.property) || hn(c.property) || wd(c.property))
        ), s = {
          uuid: `${r}-try-${Be(12)}`,
          declarations: Object.fromEntries(
            l.map((c) => [c.property, ve(c.value)])
          )
        };
        i.push(s);
      }
    }), { name: r, blocks: i };
  }
  return {};
}
function ut(e, t) {
  return getComputedStyle(e).getPropertyValue(t).trim();
}
function Ed(e, t) {
  return q(this, null, function* () {
    var o;
    let n = t.anchorName;
    const r = t.customPropName;
    if (e && !n) {
      const a = e.getAttribute("anchor");
      if (r)
        n = ut(e, r);
      else if (a)
        return yield Ai(e, [
          `#${CSS.escape(a)}`
        ]);
    }
    const i = n ? (o = xt[n]) != null ? o : [] : [];
    return yield Ai(e, i);
  });
}
function Je(e) {
  return id(e, {
    parseAtrulePrelude: !1,
    parseRulePrelude: !1,
    parseCustomProperty: !0
  });
}
function Ld(e) {
  return q(this, null, function* () {
    var s, c, f, d, g, T;
    const t = {}, n = {}, r = {}, i = {};
    Cd();
    for (const k of e) {
      const S = Je(k.css);
      Ze(S, {
        visit: "Atrule",
        enter(b) {
          const { name: w, blocks: A } = Od(b);
          w && (A != null && A.length) && (r[w] = {
            targets: [],
            blocks: A
          });
        }
      });
    }
    for (const k of e) {
      let S = !1;
      const b = Je(k.css);
      Ze(b, {
        visit: "Declaration",
        enter(w) {
          var $, E;
          const A = ($ = this.rule) == null ? void 0 : $.prelude, { name: y, selector: C } = Td(w, A);
          if (y && C && r[y]) {
            i[C] = { fallbacks: r[y].blocks }, r[y].targets.includes(C) || r[y].targets.push(C);
            for (const h of r[y].blocks) {
              const p = `[data-anchor-polyfill="${h.uuid}"]`;
              (E = this.stylesheet) == null || E.children.prependData({
                type: "Rule",
                prelude: {
                  type: "Raw",
                  value: p
                },
                block: {
                  type: "Block",
                  children: new V().fromArray(
                    Object.entries(h.declarations).map(([x, m]) => ({
                      type: "Declaration",
                      important: !0,
                      property: x,
                      value: {
                        type: "Raw",
                        value: m
                      }
                    }))
                  )
                }
              }), n[p] = C;
            }
            S = !0;
          }
        }
      }), S && (k.css = ve(b), k.changed = !0);
    }
    for (const k of e) {
      let S = !1;
      const b = Je(k.css);
      Ze(b, function(w) {
        var p, x, m;
        const A = (p = this.rule) == null ? void 0 : p.prelude, { name: y, selector: C } = Sd(
          w,
          A
        );
        y && C && (xt[y] ? xt[y].push(C) : xt[y] = [C]);
        const {
          prop: $,
          data: E,
          changed: h
        } = Ad(w, this.declaration);
        $ && E && (A != null && A.value) && (t[A.value] = X(L({}, t[A.value]), {
          [$]: [...(m = (x = t[A.value]) == null ? void 0 : x[$]) != null ? m : [], E]
        })), h && (S = !0);
      }), S && (k.css = ve(b), k.changed = !0);
    }
    const o = new Set(Object.keys(Ue)), a = {}, u = (k) => {
      var w, A, y, C, $;
      const S = [], b = new Set((A = (w = a[k]) == null ? void 0 : w.names) != null ? A : []);
      for (; b.size > 0; )
        for (const E of b)
          S.push(...(y = Ue[E]) != null ? y : []), b.delete(E), ($ = (C = a[E]) == null ? void 0 : C.names) != null && $.length && a[E].names.forEach((h) => b.add(h));
      return S;
    };
    for (; o.size > 0; ) {
      const k = [];
      for (const S of e) {
        let b = !1;
        const w = Je(S.css);
        Ze(w, {
          visit: "Function",
          enter(A) {
            var E, h;
            const y = (E = this.rule) == null ? void 0 : E.prelude, C = this.declaration, $ = C == null ? void 0 : C.property;
            if (y != null && y.value && Ht(A) && C && $ && A.children.first && o.has(
              A.children.first.name
            ) && // For now, we only want assignments to other CSS custom properties
            $.startsWith("--")) {
              const p = A.children.first, x = (h = Ue[p.name]) != null ? h : [], m = u(p.name);
              if (!(x.length || m.length))
                return;
              const Y = `${p.name}-anchor-${Be(12)}`, W = ve(C.value);
              vt[Y] = W, a[$] || (a[$] = { names: [], uuids: [] });
              const me = a[$];
              me.names.includes(p.name) || me.names.push(p.name), me.uuids.push(Y), k.push($), p.name = Y, b = !0;
            }
          }
        }), b && (S.css = ve(w), S.changed = !0);
      }
      o.clear(), k.forEach((S) => o.add(S));
    }
    for (const k of e) {
      let S = !1;
      const b = Je(k.css);
      Ze(b, {
        visit: "Function",
        enter(w) {
          var $, E, h, p, x, m, Y;
          const A = ($ = this.rule) == null ? void 0 : $.prelude, y = this.declaration, C = y == null ? void 0 : y.property;
          if (A != null && A.value && Ht(w) && y && C && w.children.first && // Now we only want assignments to inset/sizing properties
          (Tt(C) || hn(C))) {
            const W = w.children.first, me = (E = Ue[W.name]) != null ? E : [], K = u(W.name);
            if (!(me.length || K.length))
              return;
            const Ee = `${C}-${Be(12)}`;
            if (K.length) {
              const ue = /* @__PURE__ */ new Set([W.name]);
              for (; ue.size > 0; )
                for (const Ve of ue) {
                  const ne = a[Ve];
                  if ((h = ne == null ? void 0 : ne.names) != null && h.length && ((p = ne == null ? void 0 : ne.uuids) != null && p.length))
                    for (const Ge of ne.names)
                      for (const xr of ne.uuids)
                        Fe[xr] = X(L({}, Fe[xr]), {
                          // - `key` (`propUuid`) is the property-specific
                          //   uuid to append to the new custom property name
                          // - `value` is the new property-specific custom
                          //   property value to use
                          [Ee]: `${Ge}-${Ee}`
                        });
                  ue.delete(Ve), (x = ne == null ? void 0 : ne.names) != null && x.length && ne.names.forEach((Ge) => ue.add(Ge));
                }
            }
            for (const ue of [...me, ...K]) {
              const Ve = L({}, ue), ne = `--anchor-${Be(12)}-${C}`, Ge = Ve.uuid;
              Ve.uuid = ne, t[A.value] = X(L({}, t[A.value]), {
                [C]: [...(Y = (m = t[A.value]) == null ? void 0 : m[C]) != null ? Y : [], Ve]
              }), Fe[Ge] = X(L({}, Fe[Ge]), {
                // - `key` (`propUuid`) is the property-specific
                //   uuid to append to the new custom property name
                // - `value` is the new property-specific custom
                //   property value to use
                [Ee]: ne
              });
            }
            W.name = `${W.name}-${Ee}`, S = !0;
          }
        }
      }), S && (k.css = ve(b), k.changed = !0);
    }
    if (Object.keys(Fe).length > 0)
      for (const k of e) {
        let S = !1;
        const b = Je(k.css);
        Ze(b, {
          visit: "Function",
          enter(w) {
            var A, y, C, $;
            if (Ht(w) && ((y = (A = w.children.first) == null ? void 0 : A.name) != null && y.startsWith(
              "--"
            )) && (($ = (C = this.declaration) == null ? void 0 : C.property) != null && $.startsWith("--")) && this.block) {
              const E = w.children.first, h = Fe[E.name];
              if (h)
                for (const [p, x] of Object.entries(h))
                  this.block.children.appendData({
                    type: "Declaration",
                    important: !1,
                    property: `${this.declaration.property}-${p}`,
                    value: {
                      type: "Raw",
                      value: ve(this.declaration.value).replace(`var(${E.name})`, `var(${x})`)
                    }
                  }), S = !0;
              vt[E.name] && (this.declaration.value = {
                type: "Raw",
                value: vt[E.name]
              }, S = !0);
            }
          }
        }), S && (k.css = ve(b), k.changed = !0);
      }
    const l = /* @__PURE__ */ new Map();
    for (const [k, S] of Object.entries(t)) {
      let b;
      k.startsWith("[data-anchor-polyfill=") && n[k] ? b = document.querySelectorAll(n[k]) : b = document.querySelectorAll(k);
      for (const [w, A] of Object.entries(S))
        for (const y of A)
          for (const C of b) {
            const $ = yield Ed(C, y), E = `--anchor-${Be(12)}`;
            l.set(C, X(L({}, (s = l.get(C)) != null ? s : {}), {
              [y.uuid]: E
            })), C.setAttribute(
              "style",
              `${y.uuid}: var(${E}); ${(c = C.getAttribute("style")) != null ? c : ""}`
            ), i[k] = X(L({}, i[k]), {
              declarations: X(L({}, (f = i[k]) == null ? void 0 : f.declarations), {
                [w]: [
                  ...(T = (g = (d = i[k]) == null ? void 0 : d.declarations) == null ? void 0 : g[w]) != null ? T : [],
                  X(L({}, y), { anchorEl: $, targetEl: C, uuid: E })
                ]
              })
            });
          }
    }
    return { rules: i, inlineStyles: l };
  });
}
function $d(e, t) {
  return q(this, null, function* () {
    for (const { el: n, css: r, changed: i } of e) {
      if (i) {
        if (n.tagName.toLowerCase() === "style")
          n.innerHTML = r;
        else if (n.tagName.toLowerCase() === "link") {
          const o = new Blob([r], { type: "text/css" }), a = URL.createObjectURL(o), u = document.createElement("link");
          u.rel = "stylesheet", u.href = a;
          const l = new Promise((s) => {
            u.onload = s;
          });
          n.replaceWith(u), yield l, URL.revokeObjectURL(a);
        } else if (n.hasAttribute("data-has-inline-styles")) {
          const o = n.getAttribute("data-has-inline-styles");
          if (o) {
            const a = `[data-has-inline-styles="${o}"]{`;
            let l = r.slice(a.length, 0 - "}".length);
            const s = t == null ? void 0 : t.get(n);
            if (s)
              for (const [c, f] of Object.entries(s))
                l = `${c}: var(${f}); ${l}`;
            n.setAttribute("style", l);
          }
        }
      }
      n.hasAttribute("data-has-inline-styles") && n.removeAttribute("data-has-inline-styles");
    }
  });
}
const _d = X(L({}, U), { _c: /* @__PURE__ */ new Map() }), As = (e) => q(void 0, null, function* () {
  var n, r, i;
  let t = yield (n = U.getOffsetParent) == null ? void 0 : n.call(U, e);
  return (yield (r = U.isElement) == null ? void 0 : r.call(U, t)) || (t = (yield (i = U.getDocumentElement) == null ? void 0 : i.call(U, e)) || window.document.documentElement), t;
}), Pd = (e, t) => {
  let n;
  switch (e) {
    case "start":
    case "self-start":
      n = 0;
      break;
    case "end":
    case "self-end":
      n = 100;
      break;
    default:
      typeof e == "number" && !Number.isNaN(e) && (n = e);
  }
  if (n !== void 0)
    return t ? 100 - n : n;
}, zd = (e, t) => {
  let n;
  switch (e) {
    case "block":
    case "self-block":
      n = t ? "width" : "height";
      break;
    case "inline":
    case "self-inline":
      n = t ? "height" : "width";
      break;
  }
  return n;
}, Oi = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return "y";
    case "left":
    case "right":
      return "x";
  }
  return null;
}, Md = (e) => {
  switch (e) {
    case "x":
      return "width";
    case "y":
      return "height";
  }
  return null;
}, Ei = (e) => ut(e, "display") === "inline", Li = (e, t) => (t === "x" ? ["border-left-width", "border-right-width"] : ["border-top-width", "border-bottom-width"]).reduce(
  (r, i) => r + parseInt(ut(e, i), 10),
  0
) || 0, Rt = (e, t) => parseInt(ut(e, `margin-${t}`), 10) || 0, Id = (e) => ({
  top: Rt(e, "top"),
  right: Rt(e, "right"),
  bottom: Rt(e, "bottom"),
  left: Rt(e, "left")
}), $i = (a) => q(void 0, [a], function* ({
  targetEl: e,
  targetProperty: t,
  anchorRect: n,
  anchorSide: r,
  anchorSize: i,
  fallback: o
}) {
  var u;
  if (!((i || r !== void 0) && e && n))
    return o;
  if (i) {
    if (!hn(t))
      return o;
    let l;
    switch (i) {
      case "width":
      case "height":
        l = i;
        break;
      default: {
        let s = !1;
        const c = ut(e, "writing-mode");
        s = c.startsWith("vertical-") || c.startsWith("sideways-"), l = zd(i, s);
      }
    }
    return l ? `${n[l]}px` : o;
  }
  if (r !== void 0) {
    let l, s;
    const c = Oi(t);
    if (!(Tt(t) && c && (!Tt(r) || c === Oi(r))))
      return o;
    switch (r) {
      case "left":
        l = 0;
        break;
      case "right":
        l = 100;
        break;
      case "top":
        l = 0;
        break;
      case "bottom":
        l = 100;
        break;
      case "center":
        l = 50;
        break;
      default:
        if (e) {
          const g = (yield (u = U.isRTL) == null ? void 0 : u.call(U, e)) || !1;
          l = Pd(r, g);
        }
    }
    const f = typeof l == "number" && !Number.isNaN(l), d = Md(c);
    if (f && d) {
      (t === "bottom" || t === "right") && (s = yield As(e));
      let g = n[c] + n[d] * (l / 100);
      switch (t) {
        case "bottom": {
          if (!s)
            break;
          let T = s.clientHeight;
          if (T === 0 && Ei(s)) {
            const k = Li(s, c);
            T = s.offsetHeight - k;
          }
          g = T - g;
          break;
        }
        case "right": {
          if (!s)
            break;
          let T = s.clientWidth;
          if (T === 0 && Ei(s)) {
            const k = Li(s, c);
            T = s.offsetWidth - k;
          }
          g = T - g;
          break;
        }
      }
      return `${g}px`;
    }
  }
  return o;
});
function Nd(e, t = !1) {
  return q(this, null, function* () {
    const n = document.documentElement;
    for (const [r, i] of Object.entries(e))
      for (const o of i) {
        const a = o.anchorEl, u = o.targetEl;
        if (a && u)
          ji(
            a,
            u,
            () => q(this, null, function* () {
              const l = yield U.getElementRects({
                reference: a,
                floating: u,
                strategy: "absolute"
              }), s = yield $i({
                targetEl: u,
                targetProperty: r,
                anchorRect: l.reference,
                anchorSide: o.anchorSide,
                anchorSize: o.anchorSize,
                fallback: o.fallbackValue
              });
              n.style.setProperty(o.uuid, s);
            }),
            { animationFrame: t }
          );
        else {
          const l = yield $i({
            targetProperty: r,
            anchorSide: o.anchorSide,
            anchorSize: o.anchorSize,
            fallback: o.fallbackValue
          });
          n.style.setProperty(o.uuid, l);
        }
      }
  });
}
function Rd(e, t, n = !1) {
  return q(this, null, function* () {
    if (!t.length)
      return;
    const r = document.querySelectorAll(e);
    for (const i of r) {
      let o = !1;
      const a = yield As(i);
      ji(
        i,
        i,
        () => q(this, null, function* () {
          if (!o) {
            o = !0;
            for (const [u, { uuid: l }] of t.entries()) {
              if (i.setAttribute("data-anchor-polyfill", l), u === t.length - 1) {
                o = !1;
                break;
              }
              const s = yield U.getElementRects({
                reference: i,
                floating: i,
                strategy: "absolute"
              }), c = yield Zs(
                {
                  x: i.offsetLeft,
                  y: i.offsetTop,
                  platform: _d,
                  rects: s,
                  elements: { floating: i },
                  strategy: "absolute"
                },
                {
                  boundary: a,
                  rootBoundary: "document",
                  padding: Id(i)
                }
              );
              if (Object.values(c).every((f) => f <= 0)) {
                o = !1;
                break;
              }
            }
          }
        }),
        { animationFrame: n }
      );
    }
  });
}
function jd(e, t = !1) {
  return q(this, null, function* () {
    var n, r;
    for (const i of Object.values(e))
      yield Nd((n = i.declarations) != null ? n : {}, t);
    for (const [i, o] of Object.entries(e))
      yield Rd(
        i,
        (r = o.fallbacks) != null ? r : [],
        t
      );
  });
}
function Qd(e) {
  return q(this, null, function* () {
    const t = e === void 0 ? !!window.UPDATE_ANCHOR_ON_ANIMATION_FRAME : e, n = yield ia(), { rules: r, inlineStyles: i } = yield Ld(n);
    return Object.values(r).length && (yield $d(n, i), yield jd(r, t)), r;
  });
}
export {
  Qd as default
};
//# sourceMappingURL=css-anchor-positioning-fn.js.map
