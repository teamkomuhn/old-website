var Ps = Object.defineProperty, zs = Object.defineProperties;
var Ms = Object.getOwnPropertyDescriptors;
var Tr = Object.getOwnPropertySymbols;
var Is = Object.prototype.hasOwnProperty, Rs = Object.prototype.propertyIsEnumerable;
var Or = (e, t, n) => t in e ? Ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $ = (e, t) => {
  for (var n in t || (t = {}))
    Is.call(t, n) && Or(e, n, t[n]);
  if (Tr)
    for (var n of Tr(t))
      Rs.call(t, n) && Or(e, n, t[n]);
  return e;
}, ne = (e, t) => zs(e, Ms(t));
var B = (e, t, n) => new Promise((r, i) => {
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
const Fn = Math.min, ot = Math.max, Gt = Math.round, Pt = Math.floor, Ie = (e) => ({
  x: e,
  y: e
});
function Ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function js(e) {
  return $({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Ds(e) {
  return typeof e != "number" ? js(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function Fs(e, t) {
  return B(this, null, function* () {
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
      elementContext: h = "floating",
      altBoundary: d = !1,
      padding: g = 0
    } = Ns(t, e), S = Ds(g), C = u[d ? h === "floating" ? "reference" : "floating" : h], b = Kt(yield o.getClippingRect({
      element: (n = yield o.isElement == null ? void 0 : o.isElement(C)) == null || n ? C : C.contextElement || (yield o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)),
      boundary: s,
      rootBoundary: c,
      strategy: l
    })), v = h === "floating" ? {
      x: r,
      y: i,
      width: a.floating.width,
      height: a.floating.height
    } : a.reference, T = yield o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating), y = (yield o.isElement == null ? void 0 : o.isElement(T)) ? (yield o.getScale == null ? void 0 : o.getScale(T)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, A = Kt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? yield o.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: u,
      rect: v,
      offsetParent: T,
      strategy: l
    }) : v);
    return {
      top: (b.top - A.top + S.top) / y.y,
      bottom: (A.bottom - b.bottom + S.bottom) / y.y,
      left: (b.left - A.left + S.left) / y.x,
      right: (A.right - b.right + S.right) / y.x
    };
  });
}
function pt(e) {
  return Ni(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _e(e) {
  var t;
  return (t = (Ni(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ni(e) {
  return e instanceof Node || e instanceof ce(e).Node;
}
function Se(e) {
  return e instanceof Element || e instanceof ce(e).Element;
}
function Ce(e) {
  return e instanceof HTMLElement || e instanceof ce(e).HTMLElement;
}
function Er(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof ce(e).ShadowRoot;
}
function Lt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Bs(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function on(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch (n) {
      return !1;
    }
  });
}
function rr(e) {
  const t = ir(), n = ye(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Us(e) {
  let t = Re(e);
  for (; Ce(t) && !ct(t); ) {
    if (on(t))
      return null;
    if (rr(t))
      return t;
    t = Re(t);
  }
  return null;
}
function ir() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ct(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function ye(e) {
  return ce(e).getComputedStyle(e);
}
function sn(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Re(e) {
  if (pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Er(e) && e.host || // Fallback.
    _e(e)
  );
  return Er(t) ? t.host : t;
}
function ji(e) {
  const t = Re(e);
  return ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ce(t) && Lt(t) ? t : ji(t);
}
function Ct(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = ji(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ce(i);
  return o ? t.concat(a, a.visualViewport || [], Lt(i) ? i : [], a.frameElement && n ? Ct(a.frameElement) : []) : t.concat(i, Ct(i, [], n));
}
function Di(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Ce(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, u = Gt(n) !== o || Gt(r) !== a;
  return u && (n = o, r = a), {
    width: n,
    height: r,
    $: u
  };
}
function or(e) {
  return Se(e) ? e : e.contextElement;
}
function st(e) {
  const t = or(e);
  if (!Ce(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Di(t);
  let a = (o ? Gt(n.width) : n.width) / r, u = (o ? Gt(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
const Hs = /* @__PURE__ */ Ie(0);
function Fi(e) {
  const t = ce(e);
  return !ir() || !t.visualViewport ? Hs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ws(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ce(e) ? !1 : t;
}
function Ge(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = or(e);
  let a = Ie(1);
  t && (r ? Se(r) && (a = st(r)) : a = st(e));
  const u = Ws(o, n, r) ? Fi(o) : Ie(0);
  let l = (i.left + u.x) / a.x, s = (i.top + u.y) / a.y, c = i.width / a.x, h = i.height / a.y;
  if (o) {
    const d = ce(o), g = r && Se(r) ? ce(r) : r;
    let S = d, k = S.frameElement;
    for (; k && r && g !== S; ) {
      const C = st(k), b = k.getBoundingClientRect(), v = ye(k), T = b.left + (k.clientLeft + parseFloat(v.paddingLeft)) * C.x, y = b.top + (k.clientTop + parseFloat(v.paddingTop)) * C.y;
      l *= C.x, s *= C.y, c *= C.x, h *= C.y, l += T, s += y, S = ce(k), k = S.frameElement;
    }
  }
  return Kt({
    width: c,
    height: h,
    x: l,
    y: s
  });
}
function qs(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = _e(r), u = t ? on(t.floating) : !1;
  if (r === a || u && o)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = Ie(1);
  const c = Ie(0), h = Ce(r);
  if ((h || !h && !o) && ((pt(r) !== "body" || Lt(a)) && (l = sn(r)), Ce(r))) {
    const d = Ge(r);
    s = st(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return {
    width: n.width * s.x,
    height: n.height * s.y,
    x: n.x * s.x - l.scrollLeft * s.x + c.x,
    y: n.y * s.y - l.scrollTop * s.y + c.y
  };
}
function Vs(e) {
  return Array.from(e.getClientRects());
}
function Bi(e) {
  return Ge(_e(e)).left + sn(e).scrollLeft;
}
function Gs(e) {
  const t = _e(e), n = sn(e), r = e.ownerDocument.body, i = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Bi(e);
  const u = -n.scrollTop;
  return ye(r).direction === "rtl" && (a += ot(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: u
  };
}
function Ks(e, t) {
  const n = ce(e), r = _e(e), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, u = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    const s = ir();
    (!s || s && t === "fixed") && (u = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: u,
    y: l
  };
}
function Qs(e, t) {
  const n = Ge(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = Ce(e) ? st(e) : Ie(1), a = e.clientWidth * o.x, u = e.clientHeight * o.y, l = i * o.x, s = r * o.y;
  return {
    width: a,
    height: u,
    x: l,
    y: s
  };
}
function $r(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ks(e, n);
  else if (t === "document")
    r = Gs(_e(e));
  else if (Se(t))
    r = Qs(t, n);
  else {
    const i = Fi(e);
    r = ne($({}, t), {
      x: t.x - i.x,
      y: t.y - i.y
    });
  }
  return Kt(r);
}
function Ui(e, t) {
  const n = Re(e);
  return n === t || !Se(n) || ct(n) ? !1 : ye(n).position === "fixed" || Ui(n, t);
}
function Ys(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ct(e, [], !1).filter((u) => Se(u) && pt(u) !== "body"), i = null;
  const o = ye(e).position === "fixed";
  let a = o ? Re(e) : e;
  for (; Se(a) && !ct(a); ) {
    const u = ye(a), l = rr(a);
    !l && u.position === "fixed" && (i = null), (o ? !l && !i : !l && u.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Lt(a) && !l && Ui(e, a)) ? r = r.filter((c) => c !== a) : i = u, a = Re(a);
  }
  return t.set(e, r), r;
}
function Xs(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? on(t) ? [] : Ys(t, this._c) : [].concat(n), r], u = a[0], l = a.reduce((s, c) => {
    const h = $r(t, c, i);
    return s.top = ot(h.top, s.top), s.right = Fn(h.right, s.right), s.bottom = Fn(h.bottom, s.bottom), s.left = ot(h.left, s.left), s;
  }, $r(t, u, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Zs(e) {
  const {
    width: t,
    height: n
  } = Di(e);
  return {
    width: t,
    height: n
  };
}
function Js(e, t, n) {
  const r = Ce(t), i = _e(t), o = n === "fixed", a = Ge(e, !0, o, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  if (r || !r && !o)
    if ((pt(t) !== "body" || Lt(i)) && (u = sn(t)), r) {
      const h = Ge(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else i && (l.x = Bi(i));
  const s = a.left + u.scrollLeft - l.x, c = a.top + u.scrollTop - l.y;
  return {
    x: s,
    y: c,
    width: a.width,
    height: a.height
  };
}
function gn(e) {
  return ye(e).position === "static";
}
function Lr(e, t) {
  return !Ce(e) || ye(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Hi(e, t) {
  const n = ce(e);
  if (on(e))
    return n;
  if (!Ce(e)) {
    let i = Re(e);
    for (; i && !ct(i); ) {
      if (Se(i) && !gn(i))
        return i;
      i = Re(i);
    }
    return n;
  }
  let r = Lr(e, t);
  for (; r && Bs(r) && gn(r); )
    r = Lr(r, t);
  return r && ct(r) && gn(r) && !rr(r) ? n : r || Us(e) || n;
}
const ea = function(e) {
  return B(this, null, function* () {
    const t = this.getOffsetParent || Hi, n = this.getDimensions, r = yield n(e.floating);
    return {
      reference: Js(e.reference, yield t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: r.width,
        height: r.height
      }
    };
  });
};
function ta(e) {
  return ye(e).direction === "rtl";
}
const X = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qs,
  getDocumentElement: _e,
  getClippingRect: Xs,
  getOffsetParent: Hi,
  getElementRects: ea,
  getClientRects: Vs,
  getDimensions: Zs,
  getScale: st,
  isElement: Se,
  isRTL: ta
};
function na(e, t) {
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
      width: h,
      height: d
    } = e.getBoundingClientRect();
    if (u || t(), !h || !d)
      return;
    const g = Pt(c), S = Pt(i.clientWidth - (s + h)), k = Pt(i.clientHeight - (c + d)), C = Pt(s), v = {
      rootMargin: -g + "px " + -S + "px " + -k + "px " + -C + "px",
      threshold: ot(0, Fn(1, l)) || 1
    };
    let T = !0;
    function y(A) {
      const L = A[0].intersectionRatio;
      if (L !== l) {
        if (!T)
          return a();
        L ? a(!1, L) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      T = !1;
    }
    try {
      n = new IntersectionObserver(y, ne($({}, v), {
        // Handle <iframe>s
        root: i.ownerDocument
      }));
    } catch (A) {
      n = new IntersectionObserver(y, v);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function Wi(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, s = or(e), c = i || o ? [...s ? Ct(s) : [], ...Ct(t)] : [];
  c.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), o && b.addEventListener("resize", n);
  });
  const h = s && u ? na(s, n) : null;
  let d = -1, g = null;
  a && (g = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === s && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var T;
      (T = g) == null || T.observe(t);
    })), n();
  }), s && !l && g.observe(s), g.observe(t));
  let S, k = l ? Ge(e) : null;
  l && C();
  function C() {
    const b = Ge(e);
    k && (b.x !== k.x || b.y !== k.y || b.width !== k.width || b.height !== k.height) && n(), k = b, S = requestAnimationFrame(C);
  }
  return n(), () => {
    var b;
    c.forEach((v) => {
      i && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n);
    }), h == null || h(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(S);
  };
}
const ra = Fs, bn = 0, x = 1, z = 2, q = 3, j = 4, Ae = 5, an = 6, Z = 7, ie = 8, P = 9, O = 10, F = 11, _ = 12, U = 13, _t = 14, oe = 15, J = 16, se = 17, Te = 18, ue = 19, ke = 20, G = 21, R = 22, ee = 23, pe = 24, re = 25, ia = 0;
function Q(e) {
  return e >= 48 && e <= 57;
}
function Ne(e) {
  return Q(e) || // 0 .. 9
  e >= 65 && e <= 70 || // A .. F
  e >= 97 && e <= 102;
}
function sr(e) {
  return e >= 65 && e <= 90;
}
function oa(e) {
  return e >= 97 && e <= 122;
}
function sa(e) {
  return sr(e) || oa(e);
}
function aa(e) {
  return e >= 128;
}
function Qt(e) {
  return sa(e) || aa(e) || e === 95;
}
function qi(e) {
  return Qt(e) || Q(e) || e === 45;
}
function la(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}
function Yt(e) {
  return e === 10 || e === 13 || e === 12;
}
function Ke(e) {
  return Yt(e) || e === 32 || e === 9;
}
function ve(e, t) {
  return !(e !== 92 || Yt(t) || t === ia);
}
function Bt(e, t, n) {
  return e === 45 ? Qt(t) || t === 45 || ve(t, n) : Qt(e) ? !0 : e === 92 ? ve(e, t) : !1;
}
function yn(e, t, n) {
  return e === 43 || e === 45 ? Q(t) ? 2 : t === 46 && Q(n) ? 3 : 0 : e === 46 ? Q(t) ? 2 : 0 : Q(e) ? 1 : 0;
}
function Vi(e) {
  return e === 65279 || e === 65534 ? 1 : 0;
}
const Bn = new Array(128), ca = 128, Ut = 130, Gi = 131, ar = 132, Ki = 133;
for (let e = 0; e < Bn.length; e++)
  Bn[e] = Ke(e) && Ut || Q(e) && Gi || Qt(e) && ar || la(e) && Ki || e || ca;
function kn(e) {
  return e < 128 ? Bn[e] : ar;
}
function at(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function Un(e, t, n) {
  return n === 13 && at(e, t + 1) === 10 ? 2 : 1;
}
function lt(e, t, n) {
  let r = e.charCodeAt(t);
  return sr(r) && (r = r | 32), r === n;
}
function At(e, t, n, r) {
  if (n - t !== r.length || t < 0 || n > e.length)
    return !1;
  for (let i = t; i < n; i++) {
    const o = r.charCodeAt(i - t);
    let a = e.charCodeAt(i);
    if (sr(a) && (a = a | 32), a !== o)
      return !1;
  }
  return !0;
}
function ua(e, t) {
  for (; t >= 0 && Ke(e.charCodeAt(t)); t--)
    ;
  return t + 1;
}
function zt(e, t) {
  for (; t < e.length && Ke(e.charCodeAt(t)); t++)
    ;
  return t;
}
function wn(e, t) {
  for (; t < e.length && Q(e.charCodeAt(t)); t++)
    ;
  return t;
}
function ut(e, t) {
  if (t += 2, Ne(at(e, t - 1))) {
    for (const r = Math.min(e.length, t + 5); t < r && Ne(at(e, t)); t++)
      ;
    const n = at(e, t);
    Ke(n) && (t += Un(e, t, n));
  }
  return t;
}
function Mt(e, t) {
  for (; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (!qi(n)) {
      if (ve(n, at(e, t + 1))) {
        t = ut(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
}
function ln(e, t) {
  let n = e.charCodeAt(t);
  if ((n === 43 || n === 45) && (n = e.charCodeAt(t += 1)), Q(n) && (t = wn(e, t + 1), n = e.charCodeAt(t)), n === 46 && Q(e.charCodeAt(t + 1)) && (t += 2, t = wn(e, t)), lt(
    e,
    t,
    101
    /* e */
  )) {
    let r = 0;
    n = e.charCodeAt(t + 1), (n === 45 || n === 43) && (r = 1, n = e.charCodeAt(t + 2)), Q(n) && (t = wn(e, t + 1 + r + 1));
  }
  return t;
}
function xn(e, t) {
  for (; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 41) {
      t++;
      break;
    }
    ve(n, at(e, t + 1)) && (t = ut(e, t));
  }
  return t;
}
function Qi(e) {
  if (e.length === 1 && !Ne(e.charCodeAt(0)))
    return e[0];
  let t = parseInt(e, 16);
  return (t === 0 || // If this number is zero,
  t >= 55296 && t <= 57343 || // or is for a surrogate,
  t > 1114111) && (t = 65533), String.fromCodePoint(t);
}
const Yi = [
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
], ha = 16 * 1024;
function Xt(e = null, t) {
  return e === null || e.length < t ? new Uint32Array(Math.max(t + 1024, ha)) : e;
}
const _r = 10, fa = 12, Pr = 13;
function zr(e) {
  const t = e.source, n = t.length, r = t.length > 0 ? Vi(t.charCodeAt(0)) : 0, i = Xt(e.lines, n), o = Xt(e.columns, n);
  let a = e.startLine, u = e.startColumn;
  for (let l = r; l < n; l++) {
    const s = t.charCodeAt(l);
    i[l] = a, o[l] = u++, (s === _r || s === Pr || s === fa) && (s === Pr && l + 1 < n && t.charCodeAt(l + 1) === _r && (l++, i[l] = a, o[l] = u), a++, u = 1);
  }
  i[n] = a, o[n] = u, e.lines = i, e.columns = o, e.computed = !0;
}
class pa {
  constructor() {
    this.lines = null, this.columns = null, this.computed = !1;
  }
  setSource(t, n = 0, r = 1, i = 1) {
    this.source = t, this.startOffset = n, this.startLine = r, this.startColumn = i, this.computed = !1;
  }
  getLocation(t, n) {
    return this.computed || zr(this), {
      source: n,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t]
    };
  }
  getLocationRange(t, n, r) {
    return this.computed || zr(this), {
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
const he = 16777215, Pe = 24, da = /* @__PURE__ */ new Map([
  [z, R],
  [G, R],
  [ue, ke],
  [ee, pe]
]);
class ma {
  constructor(t, n) {
    this.setSource(t, n);
  }
  reset() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  }
  setSource(t = "", n = () => {
  }) {
    t = String(t || "");
    const r = t.length, i = Xt(this.offsetAndType, t.length + 1), o = Xt(this.balance, t.length + 1);
    let a = 0, u = 0, l = 0, s = -1;
    for (this.offsetAndType = null, this.balance = null, n(t, (c, h, d) => {
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
        case ue:
        case ee:
          o[a] = l, u = da.get(c), l = u << Pe | a;
          break;
      }
      i[a++] = c << Pe | d, s === -1 && (s = h);
    }), i[a] = bn << Pe | r, o[a] = r, o[r] = r; l !== 0; ) {
      const c = l & he;
      l = o[c], o[c] = r;
    }
    this.source = t, this.firstCharOffset = s === -1 ? 0 : s, this.tokenCount = a, this.offsetAndType = i, this.balance = o, this.reset(), this.next();
  }
  lookupType(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> Pe : bn;
  }
  lookupOffset(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & he : this.source.length;
  }
  lookupValue(t, n) {
    return t += this.tokenIndex, t < this.tokenCount ? At(
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
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> Pe, this.tokenEnd = t & he) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = bn, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === U || this.tokenType === re; )
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
        type: Yi[n],
        chunk: this.source.substring(r, i),
        balance: this.balance[o]
      };
    }), t;
  }
}
function cn(e, t) {
  function n(h) {
    return h < u ? e.charCodeAt(h) : 0;
  }
  function r() {
    if (s = ln(e, s), Bt(n(s), n(s + 1), n(s + 2))) {
      c = _, s = Mt(e, s);
      return;
    }
    if (n(s) === 37) {
      c = F, s++;
      return;
    }
    c = O;
  }
  function i() {
    const h = s;
    if (s = Mt(e, s), At(e, h, s, "url") && n(s) === 40) {
      if (s = zt(e, s + 1), n(s) === 34 || n(s) === 39) {
        c = z, s = h + 4;
        return;
      }
      a();
      return;
    }
    if (n(s) === 40) {
      c = z, s++;
      return;
    }
    c = x;
  }
  function o(h) {
    for (h || (h = n(s++)), c = Ae; s < e.length; s++) {
      const d = e.charCodeAt(s);
      switch (kn(d)) {
        case h:
          s++;
          return;
        case Ut:
          if (Yt(d)) {
            s += Un(e, s, d), c = an;
            return;
          }
          break;
        case 92:
          if (s === e.length - 1)
            break;
          const g = n(s + 1);
          Yt(g) ? s += Un(e, s + 1, g) : ve(d, g) && (s = ut(e, s) - 1);
          break;
      }
    }
  }
  function a() {
    for (c = Z, s = zt(e, s); s < e.length; s++) {
      const h = e.charCodeAt(s);
      switch (kn(h)) {
        case 41:
          s++;
          return;
        case Ut:
          if (s = zt(e, s), n(s) === 41 || s >= e.length) {
            s < e.length && s++;
            return;
          }
          s = xn(e, s), c = ie;
          return;
        case 34:
        case 39:
        case 40:
        case Ki:
          s = xn(e, s), c = ie;
          return;
        case 92:
          if (ve(h, n(s + 1))) {
            s = ut(e, s) - 1;
            break;
          }
          s = xn(e, s), c = ie;
          return;
      }
    }
  }
  e = String(e || "");
  const u = e.length;
  let l = Vi(n(0)), s = l, c;
  for (; s < u; ) {
    const h = e.charCodeAt(s);
    switch (kn(h)) {
      case Ut:
        c = U, s = zt(e, s + 1);
        break;
      case 34:
        o();
        break;
      case 35:
        qi(n(s + 1)) || ve(n(s + 1), n(s + 2)) ? (c = j, s = Mt(e, s + 1)) : (c = P, s++);
        break;
      case 39:
        o();
        break;
      case 40:
        c = G, s++;
        break;
      case 41:
        c = R, s++;
        break;
      case 43:
        yn(h, n(s + 1), n(s + 2)) ? r() : (c = P, s++);
        break;
      case 44:
        c = Te, s++;
        break;
      case 45:
        yn(h, n(s + 1), n(s + 2)) ? r() : n(s + 1) === 45 && n(s + 2) === 62 ? (c = oe, s = s + 3) : Bt(h, n(s + 1), n(s + 2)) ? i() : (c = P, s++);
        break;
      case 46:
        yn(h, n(s + 1), n(s + 2)) ? r() : (c = P, s++);
        break;
      case 47:
        n(s + 1) === 42 ? (c = re, s = e.indexOf("*/", s + 2), s = s === -1 ? e.length : s + 2) : (c = P, s++);
        break;
      case 58:
        c = J, s++;
        break;
      case 59:
        c = se, s++;
        break;
      case 60:
        n(s + 1) === 33 && n(s + 2) === 45 && n(s + 3) === 45 ? (c = _t, s = s + 4) : (c = P, s++);
        break;
      case 64:
        Bt(n(s + 1), n(s + 2), n(s + 3)) ? (c = q, s = Mt(e, s + 1)) : (c = P, s++);
        break;
      case 91:
        c = ue, s++;
        break;
      case 92:
        ve(h, n(s + 1)) ? i() : (c = P, s++);
        break;
      case 93:
        c = ke, s++;
        break;
      case 123:
        c = ee, s++;
        break;
      case 125:
        c = pe, s++;
        break;
      case Gi:
        r();
        break;
      case ar:
        i();
        break;
      default:
        c = P, s++;
    }
    t(c, l, l = s);
  }
}
let Je = null;
class W {
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
    return W.createItem(t);
  }
  // cursor helpers
  allocateCursor(t, n) {
    let r;
    return Je !== null ? (r = Je, Je = Je.cursor, r.prev = t, r.next = n, r.cursor = this.cursor) : r = {
      prev: t,
      next: n,
      cursor: this.cursor
    }, this.cursor = r, r;
  }
  releaseCursor() {
    const { cursor: t } = this;
    this.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = Je, Je = t;
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
      const i = W.createItem(r);
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
    const r = new W();
    for (let i = this.head; i !== null; i = i.next)
      r.appendData(t.call(n, i.data, i, this));
    return r;
  }
  filter(t, n = this) {
    const r = new W();
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
    const t = new W();
    for (let n of this)
      t.appendData(n);
    return t;
  }
  prepend(t) {
    return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
  }
  prependData(t) {
    return this.prepend(W.createItem(t));
  }
  append(t) {
    return this.insert(t);
  }
  appendData(t) {
    return this.insert(W.createItem(t));
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
    return this.insert(W.createItem(t), n);
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
    this.insert(W.createItem(t));
  }
  pop() {
    return this.tail !== null ? this.remove(this.tail) : null;
  }
  unshift(t) {
    this.prepend(W.createItem(t));
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
function un(e, t) {
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
const vn = 100, Mr = 60, Ir = "    ";
function Rr({ source: e, line: t, column: n }, r) {
  function i(c, h) {
    return o.slice(c, h).map(
      (d, g) => String(c + g + 1).padStart(l) + " |" + d
    ).join(`
`);
  }
  const o = e.split(/\r\n?|\n|\f/), a = Math.max(1, t - r) - 1, u = Math.min(t + r, o.length + 1), l = Math.max(4, String(u).length) + 1;
  let s = 0;
  n += (Ir.length - 1) * (o[t - 1].substr(0, n - 1).match(/\t/g) || []).length, n > vn && (s = n - Mr + 3, n = Mr - 2);
  for (let c = a; c <= u; c++)
    c >= 0 && c < o.length && (o[c] = o[c].replace(/\t/g, Ir), o[c] = (s > 0 && o[c].length > s ? "…" : "") + o[c].substr(s, vn - 2) + (o[c].length > s + vn - 1 ? "…" : ""));
  return [
    i(a, t),
    new Array(n + l + 2).join("-") + "^",
    i(t, u)
  ].filter(Boolean).join(`
`);
}
function Nr(e, t, n, r, i) {
  return Object.assign(un("SyntaxError", e), {
    source: t,
    offset: n,
    line: r,
    column: i,
    sourceFragment(a) {
      return Rr({ source: t, line: r, column: i }, isNaN(a) ? 0 : a);
    },
    get formattedMessage() {
      return `Parse error: ${e}
` + Rr({ source: t, line: r, column: i }, 2);
    }
  });
}
function ga(e) {
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
      case U:
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
const jr = () => {
}, ba = 33, ya = 35, Sn = 59, Dr = 123, Fr = 0;
function ka(e) {
  return function() {
    return this[e]();
  };
}
function Cn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n in e) {
    const r = e[n], i = r.parse || r;
    i && (t[n] = i);
  }
  return t;
}
function wa(e) {
  const t = {
    context: /* @__PURE__ */ Object.create(null),
    scope: Object.assign(/* @__PURE__ */ Object.create(null), e.scope),
    atrule: Cn(e.atrule),
    pseudo: Cn(e.pseudo),
    node: Cn(e.node)
  };
  for (const n in e.parseContext)
    switch (typeof e.parseContext[n]) {
      case "function":
        t.context[n] = e.parseContext[n];
        break;
      case "string":
        t.context[n] = ka(e.parseContext[n]);
        break;
    }
  return $($({
    config: t
  }, t), t.node);
}
function xa(e) {
  let t = "", n = "<unknown>", r = !1, i = jr, o = !1;
  const a = new pa(), u = Object.assign(new ma(), wa(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: ga,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket(s) {
      return s === Dr ? 1 : 0;
    },
    consumeUntilLeftCurlyBracketOrSemicolon(s) {
      return s === Dr || s === Sn ? 1 : 0;
    },
    consumeUntilExclamationMarkOrSemicolon(s) {
      return s === ba || s === Sn ? 1 : 0;
    },
    consumeUntilSemicolonIncluded(s) {
      return s === Sn ? 2 : 0;
    },
    createList() {
      return new W();
    },
    createSingleNodeList(s) {
      return new W().appendData(s);
    },
    getFirstListNode(s) {
      return s && s.first;
    },
    getLastListNode(s) {
      return s && s.last;
    },
    parseWithFallback(s, c) {
      const h = this.tokenIndex;
      try {
        return s.call(this);
      } catch (d) {
        if (o)
          throw d;
        const g = c.call(this, h);
        return o = !0, i(d, g), o = !1, g;
      }
    },
    lookupNonWSType(s) {
      let c;
      do
        if (c = this.lookupType(s++), c !== U)
          return c;
      while (c !== Fr);
      return Fr;
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
      return lt(t, s, c);
    },
    cmpStr(s, c, h) {
      return At(t, s, c, h);
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
      const c = t.substring(this.tokenStart, ln(t, this.tokenStart));
      return this.eat(s), c;
    },
    eat(s) {
      if (this.tokenType !== s) {
        const c = Yi[s].slice(0, -6).replace(/-/g, " ").replace(/^./, (g) => g.toUpperCase());
        let h = `${/[[\](){}]/.test(c) ? `"${c}"` : c} is expected`, d = this.tokenStart;
        switch (s) {
          case x:
            this.tokenType === z || this.tokenType === Z ? (d = this.tokenEnd - 1, h = "Identifier is expected but function found") : h = "Identifier is expected";
            break;
          case j:
            this.isDelim(ya) && (this.next(), d++, h = "Name is expected");
            break;
          case F:
            this.tokenType === O && (d = this.tokenEnd, h = "Percent sign is expected");
            break;
        }
        this.error(h, d);
      }
      this.next();
    },
    eatIdent(s) {
      (this.tokenType !== x || this.lookupValue(0, s) === !1) && this.error(`Identifier "${s}" is expected`), this.next();
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
        const c = this.getFirstListNode(s), h = this.getLastListNode(s);
        return a.getLocationRange(
          c !== null ? c.loc.start.offset - a.startOffset : this.tokenStart,
          h !== null ? h.loc.end.offset - a.startOffset : this.tokenStart,
          n
        );
      }
      return null;
    },
    error(s, c) {
      const h = typeof c != "undefined" && c < t.length ? a.getLocation(c) : this.eof ? a.getLocation(ua(t, t.length - 1)) : a.getLocation(this.tokenStart);
      throw new Nr(
        s || "Unexpected input",
        t,
        h.offset,
        h.line,
        h.column
      );
    }
  });
  return Object.assign(function(s, c) {
    t = s, c = c || {}, u.setSource(t, cn), a.setSource(
      t,
      c.offset,
      c.line,
      c.column
    ), n = c.filename || "<unknown>", r = !!c.positions, i = typeof c.onParseError == "function" ? c.onParseError : jr, o = !1, u.parseAtrulePrelude = "parseAtrulePrelude" in c ? !!c.parseAtrulePrelude : !0, u.parseRulePrelude = "parseRulePrelude" in c ? !!c.parseRulePrelude : !0, u.parseValue = "parseValue" in c ? !!c.parseValue : !0, u.parseCustomProperty = "parseCustomProperty" in c ? !!c.parseCustomProperty : !1;
    const { context: h = "default", onComment: d } = c;
    if (!(h in u.context))
      throw new Error("Unknown context `" + h + "`");
    typeof d == "function" && u.forEachToken((S, k, C) => {
      if (S === re) {
        const b = u.getLocation(k, C), v = At(t, C - 2, C, "*/") ? t.slice(k + 2, C - 2) : t.slice(k + 2, C);
        d(v, b);
      }
    });
    const g = u.context[h].call(u, c);
    return u.eof || u.error(), g;
  }, {
    SyntaxError: Nr,
    config: u.config
  });
}
var lr = {}, cr = {}, Br = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
cr.encode = function(e) {
  if (0 <= e && e < Br.length)
    return Br[e];
  throw new TypeError("Must be between 0 and 63: " + e);
};
cr.decode = function(e) {
  var t = 65, n = 90, r = 97, i = 122, o = 48, a = 57, u = 43, l = 47, s = 26, c = 52;
  return t <= e && e <= n ? e - t : r <= e && e <= i ? e - r + s : o <= e && e <= a ? e - o + c : e == u ? 62 : e == l ? 63 : -1;
};
var Xi = cr, ur = 5, Zi = 1 << ur, Ji = Zi - 1, eo = Zi;
function va(e) {
  return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
}
function Sa(e) {
  var t = (e & 1) === 1, n = e >> 1;
  return t ? -n : n;
}
lr.encode = function(t) {
  var n = "", r, i = va(t);
  do
    r = i & Ji, i >>>= ur, i > 0 && (r |= eo), n += Xi.encode(r);
  while (i > 0);
  return n;
};
lr.decode = function(t, n, r) {
  var i = t.length, o = 0, a = 0, u, l;
  do {
    if (n >= i)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = Xi.decode(t.charCodeAt(n++)), l === -1)
      throw new Error("Invalid base64 digit: " + t.charAt(n - 1));
    u = !!(l & eo), l &= Ji, o = o + (l << a), a += ur;
  } while (u);
  r.value = Sa(o), r.rest = n;
};
var hn = {};
(function(e) {
  function t(f, p, w) {
    if (p in f)
      return f[p];
    if (arguments.length === 3)
      return w;
    throw new Error('"' + p + '" is a required argument.');
  }
  e.getArg = t;
  var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r = /^data:.+\,.+$/;
  function i(f) {
    var p = f.match(n);
    return p ? {
      scheme: p[1],
      auth: p[2],
      host: p[3],
      port: p[4],
      path: p[5]
    } : null;
  }
  e.urlParse = i;
  function o(f) {
    var p = "";
    return f.scheme && (p += f.scheme + ":"), p += "//", f.auth && (p += f.auth + "@"), f.host && (p += f.host), f.port && (p += ":" + f.port), f.path && (p += f.path), p;
  }
  e.urlGenerate = o;
  var a = 32;
  function u(f) {
    var p = [];
    return function(w) {
      for (var m = 0; m < p.length; m++)
        if (p[m].input === w) {
          var D = p[0];
          return p[0] = p[m], p[m] = D, p[0].result;
        }
      var V = f(w);
      return p.unshift({
        input: w,
        result: V
      }), p.length > a && p.pop(), V;
    };
  }
  var l = u(function(p) {
    var w = p, m = i(p);
    if (m) {
      if (!m.path)
        return p;
      w = m.path;
    }
    for (var D = e.isAbsolute(w), V = [], me = 0, K = 0; ; )
      if (me = K, K = w.indexOf("/", me), K === -1) {
        V.push(w.slice(me));
        break;
      } else
        for (V.push(w.slice(me, K)); K < w.length && w[K] === "/"; )
          K++;
    for (var Oe, De = 0, K = V.length - 1; K >= 0; K--)
      Oe = V[K], Oe === "." ? V.splice(K, 1) : Oe === ".." ? De++ : De > 0 && (Oe === "" ? (V.splice(K + 1, De), De = 0) : (V.splice(K, 2), De--));
    return w = V.join("/"), w === "" && (w = D ? "/" : "."), m ? (m.path = w, o(m)) : w;
  });
  e.normalize = l;
  function s(f, p) {
    f === "" && (f = "."), p === "" && (p = ".");
    var w = i(p), m = i(f);
    if (m && (f = m.path || "/"), w && !w.scheme)
      return m && (w.scheme = m.scheme), o(w);
    if (w || p.match(r))
      return p;
    if (m && !m.host && !m.path)
      return m.host = p, o(m);
    var D = p.charAt(0) === "/" ? p : l(f.replace(/\/+$/, "") + "/" + p);
    return m ? (m.path = D, o(m)) : D;
  }
  e.join = s, e.isAbsolute = function(f) {
    return f.charAt(0) === "/" || n.test(f);
  };
  function c(f, p) {
    f === "" && (f = "."), f = f.replace(/\/$/, "");
    for (var w = 0; p.indexOf(f + "/") !== 0; ) {
      var m = f.lastIndexOf("/");
      if (m < 0 || (f = f.slice(0, m), f.match(/^([^\/]+:\/)?\/*$/)))
        return p;
      ++w;
    }
    return Array(w + 1).join("../") + p.substr(f.length + 1);
  }
  e.relative = c;
  var h = function() {
    var f = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in f);
  }();
  function d(f) {
    return f;
  }
  function g(f) {
    return k(f) ? "$" + f : f;
  }
  e.toSetString = h ? d : g;
  function S(f) {
    return k(f) ? f.slice(1) : f;
  }
  e.fromSetString = h ? d : S;
  function k(f) {
    if (!f)
      return !1;
    var p = f.length;
    if (p < 9 || f.charCodeAt(p - 1) !== 95 || f.charCodeAt(p - 2) !== 95 || f.charCodeAt(p - 3) !== 111 || f.charCodeAt(p - 4) !== 116 || f.charCodeAt(p - 5) !== 111 || f.charCodeAt(p - 6) !== 114 || f.charCodeAt(p - 7) !== 112 || f.charCodeAt(p - 8) !== 95 || f.charCodeAt(p - 9) !== 95)
      return !1;
    for (var w = p - 10; w >= 0; w--)
      if (f.charCodeAt(w) !== 36)
        return !1;
    return !0;
  }
  function C(f, p, w) {
    var m = y(f.source, p.source);
    return m !== 0 || (m = f.originalLine - p.originalLine, m !== 0) || (m = f.originalColumn - p.originalColumn, m !== 0 || w) || (m = f.generatedColumn - p.generatedColumn, m !== 0) || (m = f.generatedLine - p.generatedLine, m !== 0) ? m : y(f.name, p.name);
  }
  e.compareByOriginalPositions = C;
  function b(f, p, w) {
    var m;
    return m = f.originalLine - p.originalLine, m !== 0 || (m = f.originalColumn - p.originalColumn, m !== 0 || w) || (m = f.generatedColumn - p.generatedColumn, m !== 0) || (m = f.generatedLine - p.generatedLine, m !== 0) ? m : y(f.name, p.name);
  }
  e.compareByOriginalPositionsNoSource = b;
  function v(f, p, w) {
    var m = f.generatedLine - p.generatedLine;
    return m !== 0 || (m = f.generatedColumn - p.generatedColumn, m !== 0 || w) || (m = y(f.source, p.source), m !== 0) || (m = f.originalLine - p.originalLine, m !== 0) || (m = f.originalColumn - p.originalColumn, m !== 0) ? m : y(f.name, p.name);
  }
  e.compareByGeneratedPositionsDeflated = v;
  function T(f, p, w) {
    var m = f.generatedColumn - p.generatedColumn;
    return m !== 0 || w || (m = y(f.source, p.source), m !== 0) || (m = f.originalLine - p.originalLine, m !== 0) || (m = f.originalColumn - p.originalColumn, m !== 0) ? m : y(f.name, p.name);
  }
  e.compareByGeneratedPositionsDeflatedNoLine = T;
  function y(f, p) {
    return f === p ? 0 : f === null ? 1 : p === null ? -1 : f > p ? 1 : -1;
  }
  function A(f, p) {
    var w = f.generatedLine - p.generatedLine;
    return w !== 0 || (w = f.generatedColumn - p.generatedColumn, w !== 0) || (w = y(f.source, p.source), w !== 0) || (w = f.originalLine - p.originalLine, w !== 0) || (w = f.originalColumn - p.originalColumn, w !== 0) ? w : y(f.name, p.name);
  }
  e.compareByGeneratedPositionsInflated = A;
  function L(f) {
    return JSON.parse(f.replace(/^\)]}'[^\n]*\n/, ""));
  }
  e.parseSourceMapInput = L;
  function E(f, p, w) {
    if (p = p || "", f && (f[f.length - 1] !== "/" && p[0] !== "/" && (f += "/"), p = f + p), w) {
      var m = i(w);
      if (!m)
        throw new Error("sourceMapURL could not be parsed");
      if (m.path) {
        var D = m.path.lastIndexOf("/");
        D >= 0 && (m.path = m.path.substring(0, D + 1));
      }
      p = s(o(m), p);
    }
    return l(p);
  }
  e.computeSourceURL = E;
})(hn);
var to = {}, hr = hn, fr = Object.prototype.hasOwnProperty, Ve = typeof Map != "undefined";
function Le() {
  this._array = [], this._set = Ve ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
Le.fromArray = function(t, n) {
  for (var r = new Le(), i = 0, o = t.length; i < o; i++)
    r.add(t[i], n);
  return r;
};
Le.prototype.size = function() {
  return Ve ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
Le.prototype.add = function(t, n) {
  var r = Ve ? t : hr.toSetString(t), i = Ve ? this.has(t) : fr.call(this._set, r), o = this._array.length;
  (!i || n) && this._array.push(t), i || (Ve ? this._set.set(t, o) : this._set[r] = o);
};
Le.prototype.has = function(t) {
  if (Ve)
    return this._set.has(t);
  var n = hr.toSetString(t);
  return fr.call(this._set, n);
};
Le.prototype.indexOf = function(t) {
  if (Ve) {
    var n = this._set.get(t);
    if (n >= 0)
      return n;
  } else {
    var r = hr.toSetString(t);
    if (fr.call(this._set, r))
      return this._set[r];
  }
  throw new Error('"' + t + '" is not in the set.');
};
Le.prototype.at = function(t) {
  if (t >= 0 && t < this._array.length)
    return this._array[t];
  throw new Error("No element indexed by " + t);
};
Le.prototype.toArray = function() {
  return this._array.slice();
};
to.ArraySet = Le;
var no = {}, ro = hn;
function Ca(e, t) {
  var n = e.generatedLine, r = t.generatedLine, i = e.generatedColumn, o = t.generatedColumn;
  return r > n || r == n && o >= i || ro.compareByGeneratedPositionsInflated(e, t) <= 0;
}
function fn() {
  this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
}
fn.prototype.unsortedForEach = function(t, n) {
  this._array.forEach(t, n);
};
fn.prototype.add = function(t) {
  Ca(this._last, t) ? (this._last = t, this._array.push(t)) : (this._sorted = !1, this._array.push(t));
};
fn.prototype.toArray = function() {
  return this._sorted || (this._array.sort(ro.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
};
no.MappingList = fn;
var dt = lr, H = hn, Zt = to.ArraySet, Aa = no.MappingList;
function de(e) {
  e || (e = {}), this._file = H.getArg(e, "file", null), this._sourceRoot = H.getArg(e, "sourceRoot", null), this._skipValidation = H.getArg(e, "skipValidation", !1), this._ignoreInvalidMapping = H.getArg(e, "ignoreInvalidMapping", !1), this._sources = new Zt(), this._names = new Zt(), this._mappings = new Aa(), this._sourcesContents = null;
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
    o.source != null && (a.source = o.source, r != null && (a.source = H.relative(r, a.source)), a.original = {
      line: o.originalLine,
      column: o.originalColumn
    }, o.name != null && (a.name = o.name)), i.addMapping(a);
  }), t.sources.forEach(function(o) {
    var a = o;
    r !== null && (a = H.relative(r, o)), i._sources.has(a) || i._sources.add(a);
    var u = t.sourceContentFor(o);
    u != null && i.setSourceContent(o, u);
  }), i;
};
de.prototype.addMapping = function(t) {
  var n = H.getArg(t, "generated"), r = H.getArg(t, "original", null), i = H.getArg(t, "source", null), o = H.getArg(t, "name", null);
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
  this._sourceRoot != null && (r = H.relative(this._sourceRoot, r)), n != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[H.toSetString(r)] = n) : this._sourcesContents && (delete this._sourcesContents[H.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
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
  o != null && (i = H.relative(o, i));
  var a = new Zt(), u = new Zt();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === i && l.originalLine != null) {
      var s = t.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      s.source != null && (l.source = s.source, r != null && (l.source = H.join(r, l.source)), o != null && (l.source = H.relative(o, l.source)), l.originalLine = s.line, l.originalColumn = s.column, s.name != null && (l.name = s.name));
    }
    var c = l.source;
    c != null && !a.has(c) && a.add(c);
    var h = l.name;
    h != null && !u.has(h) && u.add(h);
  }, this), this._sources = a, this._names = u, t.sources.forEach(function(l) {
    var s = t.sourceContentFor(l);
    s != null && (r != null && (l = H.join(r, l)), o != null && (l = H.relative(o, l)), this.setSourceContent(l, s));
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
  for (var t = 0, n = 1, r = 0, i = 0, o = 0, a = 0, u = "", l, s, c, h, d = this._mappings.toArray(), g = 0, S = d.length; g < S; g++) {
    if (s = d[g], l = "", s.generatedLine !== n)
      for (t = 0; s.generatedLine !== n; )
        l += ";", n++;
    else if (g > 0) {
      if (!H.compareByGeneratedPositionsInflated(s, d[g - 1]))
        continue;
      l += ",";
    }
    l += dt.encode(s.generatedColumn - t), t = s.generatedColumn, s.source != null && (h = this._sources.indexOf(s.source), l += dt.encode(h - a), a = h, l += dt.encode(s.originalLine - 1 - i), i = s.originalLine - 1, l += dt.encode(s.originalColumn - r), r = s.originalColumn, s.name != null && (c = this._names.indexOf(s.name), l += dt.encode(c - o), o = c)), u += l;
  }
  return u;
};
de.prototype._generateSourcesContent = function(t, n) {
  return t.map(function(r) {
    if (!this._sourcesContents)
      return null;
    n != null && (r = H.relative(n, r));
    var i = H.toSetString(r);
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
var Ta = de;
const Ur = /* @__PURE__ */ new Set(["Atrule", "Selector", "Declaration"]);
function Oa(e) {
  const t = new Ta(), n = {
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
    if (d.loc && d.loc.start && Ur.has(d.type)) {
      const g = d.loc.start.line, S = d.loc.start.column - 1;
      (r.line !== g || r.column !== S) && (r.line = g, r.column = S, n.line = a, n.column = u, l && (l = !1, (n.line !== i.line || n.column !== i.column) && t.addMapping(o)), l = !0, t.addMapping({
        source: d.loc.source,
        original: r,
        generated: n
      }));
    }
    s.call(this, d), l && Ur.has(d.type) && (i.line = a, i.column = u);
  };
  const c = e.emit;
  e.emit = function(d, g, S) {
    for (let k = 0; k < d.length; k++)
      d.charCodeAt(k) === 10 ? (a++, u = 0) : u++;
    c(d, g, S);
  };
  const h = e.result;
  return e.result = function() {
    return l && t.addMapping(o), {
      css: h(),
      map: t
    };
  }, e;
}
const Ea = 43, $a = 45, An = (e, t) => {
  if (e === P && (e = t), typeof e == "string") {
    const n = e.charCodeAt(0);
    return n > 127 ? 32768 : n << 8;
  }
  return e;
}, io = [
  [x, x],
  [x, z],
  [x, Z],
  [x, ie],
  [x, "-"],
  [x, O],
  [x, F],
  [x, _],
  [x, oe],
  [x, G],
  [q, x],
  [q, z],
  [q, Z],
  [q, ie],
  [q, "-"],
  [q, O],
  [q, F],
  [q, _],
  [q, oe],
  [j, x],
  [j, z],
  [j, Z],
  [j, ie],
  [j, "-"],
  [j, O],
  [j, F],
  [j, _],
  [j, oe],
  [_, x],
  [_, z],
  [_, Z],
  [_, ie],
  [_, "-"],
  [_, O],
  [_, F],
  [_, _],
  [_, oe],
  ["#", x],
  ["#", z],
  ["#", Z],
  ["#", ie],
  ["#", "-"],
  ["#", O],
  ["#", F],
  ["#", _],
  ["#", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["-", x],
  ["-", z],
  ["-", Z],
  ["-", ie],
  ["-", "-"],
  ["-", O],
  ["-", F],
  ["-", _],
  ["-", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [O, x],
  [O, z],
  [O, Z],
  [O, ie],
  [O, O],
  [O, F],
  [O, _],
  [O, "%"],
  [O, oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["@", x],
  ["@", z],
  ["@", Z],
  ["@", ie],
  ["@", "-"],
  ["@", oe],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [".", O],
  [".", F],
  [".", _],
  ["+", O],
  ["+", F],
  ["+", _],
  ["/", "*"]
], La = io.concat([
  [x, j],
  [_, j],
  [j, j],
  [q, G],
  [q, Ae],
  [q, J],
  [F, F],
  [F, _],
  [F, z],
  [F, "-"],
  [R, x],
  [R, z],
  [R, F],
  [R, _],
  [R, j],
  [R, "-"]
]);
function oo(e) {
  const t = new Set(
    e.map(([n, r]) => An(n) << 16 | An(r))
  );
  return function(n, r, i) {
    const o = An(r, i), a = i.charCodeAt(0);
    return (a === $a && r !== x && r !== z && r !== oe || a === Ea ? t.has(n << 16 | a << 8) : t.has(n << 16 | o)) && this.emit(" ", U, !0), o;
  };
}
const _a = oo(io), so = oo(La), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  safe: so,
  spec: _a
}, Symbol.toStringTag, { value: "Module" })), Pa = 92;
function za(e, t) {
  if (typeof t == "function") {
    let n = null;
    e.children.forEach((r) => {
      n !== null && t.call(this, n), this.node(r), n = r;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function Ma(e) {
  cn(e, (t, n, r) => {
    this.token(t, e.slice(n, r));
  });
}
function Ia(e) {
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
      tokenBefore: so,
      token(l, s) {
        o = this.tokenBefore(o, l, s), this.emit(s, l, !1), l === P && s.charCodeAt(0) === Pa && this.emit(`
`, U, !0);
      },
      emit(l) {
        i += l;
      },
      result() {
        return i;
      }
    };
    r && (typeof r.decorator == "function" && (a = r.decorator(a)), r.sourceMap && (a = Oa(a)), r.mode in Hr && (a.tokenBefore = Hr[r.mode]));
    const u = {
      node: (l) => a.node(l),
      children: za,
      token: (l, s) => a.token(l, s),
      tokenize: Ma
    };
    return a.node(n), a.result();
  };
}
function Ra(e) {
  return {
    fromPlainObject(t) {
      return e(t, {
        enter(n) {
          n.children && !(n.children instanceof W) && (n.children = new W().fromArray(n.children));
        }
      }), t;
    },
    toPlainObject(t) {
      return e(t, {
        leave(n) {
          n.children && n.children instanceof W && (n.children = n.children.toArray());
        }
      }), t;
    }
  };
}
const { hasOwnProperty: pr } = Object.prototype, gt = function() {
};
function Wr(e) {
  return typeof e == "function" ? e : gt;
}
function qr(e, t) {
  return function(n, r, i) {
    n.type === t && e.call(this, n, r, i);
  };
}
function Na(e, t) {
  const n = t.structure, r = [];
  for (const i in n) {
    if (pr.call(n, i) === !1)
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
function ja(e) {
  const t = {};
  for (const n in e.node)
    if (pr.call(e.node, n)) {
      const r = e.node[n];
      if (!r.structure)
        throw new Error("Missed `structure` field in `" + n + "` node type definition");
      t[n] = Na(n, r);
    }
  return t;
}
function Vr(e, t) {
  const n = e.fields.slice(), r = e.context, i = typeof r == "string";
  return t && n.reverse(), function(o, a, u, l) {
    let s;
    i && (s = a[r], a[r] = o);
    for (const c of n) {
      const h = o[c.name];
      if (!c.nullable || h) {
        if (c.type === "list") {
          if (t ? h.reduceRight(l, !1) : h.reduce(l, !1))
            return !0;
        } else if (u(h))
          return !0;
      }
    }
    i && (a[r] = s);
  };
}
function Gr({
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
function Da(e) {
  const t = ja(e), n = {}, r = {}, i = Symbol("break-walk"), o = Symbol("skip-node");
  for (const s in t)
    pr.call(t, s) && t[s] !== null && (n[s] = Vr(t[s], !1), r[s] = Vr(t[s], !0));
  const a = Gr(n), u = Gr(r), l = function(s, c) {
    function h(b, v, T) {
      const y = d.call(C, b, v, T);
      return y === i ? !0 : y === o ? !1 : !!(S.hasOwnProperty(b.type) && S[b.type](b, C, h, k) || g.call(C, b, v, T) === i);
    }
    let d = gt, g = gt, S = n, k = (b, v, T, y) => b || h(v, T, y);
    const C = {
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
    else if (c && (d = Wr(c.enter), g = Wr(c.leave), c.reverse && (S = r), c.visit)) {
      if (a.hasOwnProperty(c.visit))
        S = c.reverse ? u[c.visit] : a[c.visit];
      else if (!t.hasOwnProperty(c.visit))
        throw new Error("Bad value `" + c.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      d = qr(d, c.visit), g = qr(g, c.visit);
    }
    if (d === gt && g === gt)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    h(s);
  };
  return l.break = i, l.skip = o, l.find = function(s, c) {
    let h = null;
    return l(s, function(d, g, S) {
      if (c.call(this, d, g, S))
        return h = d, i;
    }), h;
  }, l.findLast = function(s, c) {
    let h = null;
    return l(s, {
      reverse: !0,
      enter(d, g, S) {
        if (c.call(this, d, g, S))
          return h = d, i;
      }
    }), h;
  }, l.findAll = function(s, c) {
    const h = [];
    return l(s, function(d, g, S) {
      c.call(this, d, g, S) && h.push(d);
    }), h;
  }, l;
}
function Fa(e) {
  return e;
}
function Ba(e) {
  const { min: t, max: n, comma: r } = e;
  return t === 0 && n === 0 ? r ? "#?" : "*" : t === 0 && n === 1 ? "?" : t === 1 && n === 0 ? r ? "#" : "+" : t === 1 && n === 1 ? "" : (r ? "#" : "") + (t === n ? "{" + t + "}" : "{" + t + "," + (n !== 0 ? n : "") + "}");
}
function Ua(e) {
  switch (e.type) {
    case "Range":
      return " [" + (e.min === null ? "-∞" : e.min) + "," + (e.max === null ? "∞" : e.max) + "]";
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
}
function Ha(e, t, n, r) {
  const i = e.combinator === " " || r ? e.combinator : " " + e.combinator + " ", o = e.terms.map((a) => dr(a, t, n, r)).join(i);
  return e.explicit || n ? (r || o[0] === "," ? "[" : "[ ") + o + (r ? "]" : " ]") : o;
}
function dr(e, t, n, r) {
  let i;
  switch (e.type) {
    case "Group":
      i = Ha(e, t, n, r) + (e.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return dr(e.term, t, n, r) + t(Ba(e), e);
    case "Type":
      i = "<" + e.name + (e.opts ? t(Ua(e.opts), e.opts) : "") + ">";
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
function mr(e, t) {
  let n = Fa, r = !1, i = !1;
  return typeof t == "function" ? n = t : t && (r = !!t.forceBraces, i = !!t.compact, typeof t.decorate == "function" && (n = t.decorate)), dr(e, n, r, i);
}
const Kr = { offset: 0, line: 1, column: 1 };
function Wa(e, t) {
  const n = e.tokens, r = e.longestMatch, i = r < n.length && n[r].node || null, o = i !== t ? i : null;
  let a = 0, u = 0, l = 0, s = "", c, h;
  for (let d = 0; d < n.length; d++) {
    const g = n[d].value;
    d === r && (u = g.length, a = s.length), o !== null && n[d].node === o && (d <= r ? l++ : l = 0), s += g;
  }
  return r === n.length || l > 1 ? (c = It(o || t, "end") || bt(Kr, s), h = bt(c)) : (c = It(o, "start") || bt(It(t, "start") || Kr, s.slice(0, a)), h = It(o, "end") || bt(c, s.substr(a, u))), {
    css: s,
    mismatchOffset: a,
    mismatchLength: u,
    start: c,
    end: h
  };
}
function It(e, t) {
  const n = e && e.loc && e.loc[t];
  return n ? "line" in n ? bt(n) : n : null;
}
function bt({ offset: e, line: t, column: n }, r) {
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
const mt = function(e, t) {
  const n = un(
    "SyntaxReferenceError",
    e + (t ? " `" + t + "`" : "")
  );
  return n.reference = t, n;
}, qa = function(e, t, n, r) {
  const i = un("SyntaxMatchError", e), {
    css: o,
    mismatchOffset: a,
    mismatchLength: u,
    start: l,
    end: s
  } = Wa(r, n);
  return i.rawMessage = e, i.syntax = t ? mr(t) : "<generic>", i.css = o, i.mismatchOffset = a, i.mismatchLength = u, i.message = e + `
  syntax: ` + i.syntax + `
   value: ` + (o || "<empty string>") + `
  --------` + new Array(i.mismatchOffset + 1).join("-") + "^", Object.assign(i, l), i.loc = {
    source: n && n.loc && n.loc.source || "<unknown>",
    start: l,
    end: s
  }, i;
}, Rt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Jt = 45, Tn = Va, Qr = Ga;
function gr(e, t) {
  return t = t || 0, e.length - t >= 2 && e.charCodeAt(t) === Jt && e.charCodeAt(t + 1) === Jt;
}
function ao(e, t) {
  if (t = t || 0, e.length - t >= 3 && e.charCodeAt(t) === Jt && e.charCodeAt(t + 1) !== Jt) {
    const n = e.indexOf("-", t + 2);
    if (n !== -1)
      return e.substring(t, n + 1);
  }
  return "";
}
function Va(e) {
  if (Rt.has(e))
    return Rt.get(e);
  const t = e.toLowerCase();
  let n = Rt.get(t);
  if (n === void 0) {
    const r = gr(t, 0), i = r ? "" : ao(t, 0);
    n = Object.freeze({
      basename: t.substr(i.length),
      name: t,
      prefix: i,
      vendor: i,
      custom: r
    });
  }
  return Rt.set(e, n), n;
}
function Ga(e) {
  if (et.has(e))
    return et.get(e);
  let t = e, n = e[0];
  n === "/" ? n = e[1] === "/" ? "//" : "/" : n !== "_" && n !== "*" && n !== "$" && n !== "#" && n !== "+" && n !== "&" && (n = "");
  const r = gr(t, n.length);
  if (!r && (t = t.toLowerCase(), et.has(t))) {
    const u = et.get(t);
    return et.set(e, u), u;
  }
  const i = r ? "" : ao(t, n.length), o = t.substr(0, n.length + i.length), a = Object.freeze({
    basename: t.substr(o.length),
    name: t.substr(n.length),
    hack: n,
    vendor: i,
    prefix: o,
    custom: r
  });
  return et.set(e, a), a;
}
const lo = [
  "initial",
  "inherit",
  "unset",
  "revert",
  "revert-layer"
], Tt = 43, we = 45, On = 110, tt = !0, Ka = !1;
function Hn(e, t) {
  return e !== null && e.type === P && e.value.charCodeAt(0) === t;
}
function xt(e, t, n) {
  for (; e !== null && (e.type === U || e.type === re); )
    e = n(++t);
  return t;
}
function Me(e, t, n, r) {
  if (!e)
    return 0;
  const i = e.value.charCodeAt(t);
  if (i === Tt || i === we) {
    if (n)
      return 0;
    t++;
  }
  for (; t < e.value.length; t++)
    if (!Q(e.value.charCodeAt(t)))
      return 0;
  return r + 1;
}
function En(e, t, n) {
  let r = !1, i = xt(e, t, n);
  if (e = n(i), e === null)
    return t;
  if (e.type !== O)
    if (Hn(e, Tt) || Hn(e, we)) {
      if (r = !0, i = xt(n(++i), i, n), e = n(i), e === null || e.type !== O)
        return 0;
    } else
      return t;
  if (!r) {
    const o = e.value.charCodeAt(0);
    if (o !== Tt && o !== we)
      return 0;
  }
  return Me(e, r ? 0 : 1, r, i);
}
function Qa(e, t) {
  let n = 0;
  if (!e)
    return 0;
  if (e.type === O)
    return Me(e, 0, Ka, n);
  if (e.type === x && e.value.charCodeAt(0) === we) {
    if (!lt(e.value, 1, On))
      return 0;
    switch (e.value.length) {
      case 2:
        return En(t(++n), n, t);
      case 3:
        return e.value.charCodeAt(2) !== we ? 0 : (n = xt(t(++n), n, t), e = t(n), Me(e, 0, tt, n));
      default:
        return e.value.charCodeAt(2) !== we ? 0 : Me(e, 3, tt, n);
    }
  } else if (e.type === x || Hn(e, Tt) && t(n + 1).type === x) {
    if (e.type !== x && (e = t(++n)), e === null || !lt(e.value, 0, On))
      return 0;
    switch (e.value.length) {
      case 1:
        return En(t(++n), n, t);
      case 2:
        return e.value.charCodeAt(1) !== we ? 0 : (n = xt(t(++n), n, t), e = t(n), Me(e, 0, tt, n));
      default:
        return e.value.charCodeAt(1) !== we ? 0 : Me(e, 2, tt, n);
    }
  } else if (e.type === _) {
    let r = e.value.charCodeAt(0), i = r === Tt || r === we ? 1 : 0, o = i;
    for (; o < e.value.length && Q(e.value.charCodeAt(o)); o++)
      ;
    return o === i || !lt(e.value, o, On) ? 0 : o + 1 === e.value.length ? En(t(++n), n, t) : e.value.charCodeAt(o + 1) !== we ? 0 : o + 2 === e.value.length ? (n = xt(t(++n), n, t), e = t(n), Me(e, 0, tt, n)) : Me(e, o + 2, tt, n);
  }
  return 0;
}
const Ya = 43, co = 45, uo = 63, Xa = 117;
function Wn(e, t) {
  return e !== null && e.type === P && e.value.charCodeAt(0) === t;
}
function Za(e, t) {
  return e.value.charCodeAt(0) === t;
}
function yt(e, t, n) {
  let r = 0;
  for (let i = t; i < e.value.length; i++) {
    const o = e.value.charCodeAt(i);
    if (o === co && n && r !== 0)
      return yt(e, t + r + 1, !1), 6;
    if (!Ne(o) || ++r > 6)
      return 0;
  }
  return r;
}
function Nt(e, t, n) {
  if (!e)
    return 0;
  for (; Wn(n(t), uo); ) {
    if (++e > 6)
      return 0;
    t++;
  }
  return t;
}
function Ja(e, t) {
  let n = 0;
  if (e === null || e.type !== x || !lt(e.value, 0, Xa) || (e = t(++n), e === null))
    return 0;
  if (Wn(e, Ya))
    return e = t(++n), e === null ? 0 : e.type === x ? Nt(yt(e, 0, !0), ++n, t) : Wn(e, uo) ? Nt(1, ++n, t) : 0;
  if (e.type === O) {
    const r = yt(e, 1, !0);
    return r === 0 ? 0 : (e = t(++n), e === null ? n : e.type === _ || e.type === O ? !Za(e, co) || !yt(e, 1, !1) ? 0 : n + 1 : Nt(r, n, t));
  }
  return e.type === _ ? Nt(yt(e, 1, !0), ++n, t) : 0;
}
const el = ["calc(", "-moz-calc(", "-webkit-calc("], br = /* @__PURE__ */ new Map([
  [z, R],
  [G, R],
  [ue, ke],
  [ee, pe]
]);
function be(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function ho(e, t) {
  return At(e, 0, e.length, t);
}
function fo(e, t) {
  for (let n = 0; n < t.length; n++)
    if (ho(e, t[n]))
      return !0;
  return !1;
}
function po(e, t) {
  return t !== e.length - 2 ? !1 : be(e, t) === 92 && // U+005C REVERSE SOLIDUS (\)
  Q(be(e, t + 1));
}
function pn(e, t, n) {
  if (e && e.type === "Range") {
    const r = Number(
      n !== void 0 && n !== t.length ? t.substr(0, n) : t
    );
    if (isNaN(r) || e.min !== null && r < e.min && typeof e.min != "string" || e.max !== null && r > e.max && typeof e.max != "string")
      return !0;
  }
  return !1;
}
function tl(e, t) {
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case pe:
        case R:
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
        case ue:
        case ee:
          r.push(n), n = br.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function fe(e) {
  return function(t, n, r) {
    return t === null ? 0 : t.type === z && fo(t.value, el) ? tl(t, n) : e(t, n, r);
  };
}
function N(e) {
  return function(t) {
    return t === null || t.type !== e ? 0 : 1;
  };
}
function nl(e) {
  if (e === null || e.type !== x)
    return 0;
  const t = e.value.toLowerCase();
  return fo(t, lo) || ho(t, "default") ? 0 : 1;
}
function rl(e) {
  return e === null || e.type !== x || be(e.value, 0) !== 45 || be(e.value, 1) !== 45 ? 0 : 1;
}
function il(e) {
  if (e === null || e.type !== j)
    return 0;
  const t = e.value.length;
  if (t !== 4 && t !== 5 && t !== 7 && t !== 9)
    return 0;
  for (let n = 1; n < t; n++)
    if (!Ne(be(e.value, n)))
      return 0;
  return 1;
}
function ol(e) {
  return e === null || e.type !== j || !Bt(be(e.value, 1), be(e.value, 2), be(e.value, 3)) ? 0 : 1;
}
function sl(e, t) {
  if (!e)
    return 0;
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case an:
        case ie:
          break e;
        case pe:
        case R:
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
        case ue:
        case ee:
          r.push(n), n = br.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function al(e, t) {
  if (!e)
    return 0;
  let n = 0, r = [], i = 0;
  e:
    do {
      switch (e.type) {
        case an:
        case ie:
          break e;
        case pe:
        case R:
        case ke:
          if (e.type !== n)
            break e;
          n = r.pop();
          break;
        case z:
        case G:
        case ue:
        case ee:
          r.push(n), n = br.get(e.type);
          break;
      }
      i++;
    } while (e = t(i));
  return i;
}
function Ee(e) {
  return e && (e = new Set(e)), function(t, n, r) {
    if (t === null || t.type !== _)
      return 0;
    const i = ln(t.value, 0);
    if (e !== null) {
      const o = t.value.indexOf("\\", i), a = o === -1 || !po(t.value, o) ? t.value.substr(i) : t.value.substring(i, o);
      if (e.has(a.toLowerCase()) === !1)
        return 0;
    }
    return pn(r, t.value, i) ? 0 : 1;
  };
}
function ll(e, t, n) {
  return e === null || e.type !== F || pn(n, e.value, e.value.length - 1) ? 0 : 1;
}
function mo(e) {
  return typeof e != "function" && (e = function() {
    return 0;
  }), function(t, n, r) {
    return t !== null && t.type === O && Number(t.value) === 0 ? 1 : e(t, n, r);
  };
}
function cl(e, t, n) {
  if (e === null)
    return 0;
  const r = ln(e.value, 0);
  return !(r === e.value.length) && !po(e.value, r) || pn(n, e.value, r) ? 0 : 1;
}
function ul(e, t, n) {
  if (e === null || e.type !== O)
    return 0;
  let r = be(e.value, 0) === 43 || // U+002B PLUS SIGN (+)
  be(e.value, 0) === 45 ? 1 : 0;
  for (; r < e.value.length; r++)
    if (!Q(be(e.value, r)))
      return 0;
  return pn(n, e.value, r) ? 0 : 1;
}
const hl = {
  "ident-token": N(x),
  "function-token": N(z),
  "at-keyword-token": N(q),
  "hash-token": N(j),
  "string-token": N(Ae),
  "bad-string-token": N(an),
  "url-token": N(Z),
  "bad-url-token": N(ie),
  "delim-token": N(P),
  "number-token": N(O),
  "percentage-token": N(F),
  "dimension-token": N(_),
  "whitespace-token": N(U),
  "CDO-token": N(_t),
  "CDC-token": N(oe),
  "colon-token": N(J),
  "semicolon-token": N(se),
  "comma-token": N(Te),
  "[-token": N(ue),
  "]-token": N(ke),
  "(-token": N(G),
  ")-token": N(R),
  "{-token": N(ee),
  "}-token": N(pe)
}, fl = {
  // token type aliases
  string: N(Ae),
  ident: N(x),
  // percentage
  percentage: fe(ll),
  // numeric
  zero: mo(),
  number: fe(cl),
  integer: fe(ul),
  // complex types
  "custom-ident": nl,
  "custom-property-name": rl,
  "hex-color": il,
  "id-selector": ol,
  // element( <id-selector> )
  "an-plus-b": Qa,
  urange: Ja,
  "declaration-value": sl,
  "any-value": al
};
function pl(e) {
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
    dimension: fe(Ee(null)),
    angle: fe(Ee(t)),
    decibel: fe(Ee(n)),
    frequency: fe(Ee(r)),
    flex: fe(Ee(i)),
    length: fe(mo(Ee(o))),
    resolution: fe(Ee(a)),
    semitones: fe(Ee(u)),
    time: fe(Ee(l))
  };
}
function dl(e) {
  return $($($({}, hl), fl), pl(e));
}
const ml = [
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
], gl = ["deg", "grad", "rad", "turn"], bl = ["s", "ms"], yl = ["hz", "khz"], kl = ["dpi", "dpcm", "dppx", "x"], wl = ["fr"], xl = ["db"], vl = ["st"], Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  angle: gl,
  decibel: xl,
  flex: wl,
  frequency: yl,
  length: ml,
  resolution: kl,
  semitones: vl,
  time: bl
}, Symbol.toStringTag, { value: "Module" }));
function Sl(e, t, n) {
  return Object.assign(un("SyntaxError", e), {
    input: t,
    offset: n,
    rawMessage: e,
    message: e + `
  ` + t + `
--` + new Array((n || t.length) + 1).join("-") + "^"
  });
}
const Cl = 9, Al = 10, Tl = 12, Ol = 13, El = 32;
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
      if (n !== Ol && n !== Al && n !== Tl && n !== El && n !== Cl)
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
    throw new Sl(t, this.str, this.pos);
  }
}
const Ll = 9, _l = 10, Pl = 12, zl = 13, Ml = 32, go = 33, yr = 35, Xr = 38, en = 39, bo = 40, Il = 41, yo = 42, kr = 43, wr = 44, Zr = 45, xr = 60, ko = 62, qn = 63, Rl = 64, dn = 91, vr = 93, tn = 123, Jr = 124, ei = 125, ti = 8734, Ot = new Uint8Array(128).map(
  (e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0
), ni = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function nn(e) {
  return e.substringToPos(
    e.findWsEnd(e.pos)
  );
}
function ht(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const n = e.str.charCodeAt(t);
    if (n >= 128 || Ot[n] === 0)
      break;
  }
  return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
}
function rn(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const n = e.str.charCodeAt(t);
    if (n < 48 || n > 57)
      break;
  }
  return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
}
function Nl(e) {
  const t = e.str.indexOf("'", e.pos + 1);
  return t === -1 && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1);
}
function ri(e) {
  let t = null, n = null;
  return e.eat(tn), t = rn(e), e.charCode() === wr ? (e.pos++, e.charCode() !== ei && (n = rn(e))) : n = t, e.eat(ei), {
    min: Number(t),
    max: n ? Number(n) : 0
  };
}
function jl(e) {
  let t = null, n = !1;
  switch (e.charCode()) {
    case yo:
      e.pos++, t = {
        min: 0,
        max: 0
      };
      break;
    case kr:
      e.pos++, t = {
        min: 1,
        max: 0
      };
      break;
    case qn:
      e.pos++, t = {
        min: 0,
        max: 1
      };
      break;
    case yr:
      e.pos++, n = !0, e.charCode() === tn ? t = ri(e) : e.charCode() === qn ? (e.pos++, t = {
        min: 0,
        max: 0
      }) : t = {
        min: 1,
        max: 0
      };
      break;
    case tn:
      t = ri(e);
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
function ft(e, t) {
  const n = jl(e);
  return n !== null ? (n.term = t, e.charCode() === yr && e.charCodeAt(e.pos - 1) === kr ? ft(e, n) : n) : t;
}
function $n(e) {
  const t = e.peek();
  return t === "" ? null : {
    type: "Token",
    value: t
  };
}
function Dl(e) {
  let t;
  return e.eat(xr), e.eat(en), t = ht(e), e.eat(en), e.eat(ko), ft(e, {
    type: "Property",
    name: t
  });
}
function Fl(e) {
  let t = null, n = null, r = 1;
  return e.eat(dn), e.charCode() === Zr && (e.peek(), r = -1), r == -1 && e.charCode() === ti ? e.peek() : (t = r * Number(rn(e)), Ot[e.charCode()] !== 0 && (t += ht(e))), nn(e), e.eat(wr), nn(e), e.charCode() === ti ? e.peek() : (r = 1, e.charCode() === Zr && (e.peek(), r = -1), n = r * Number(rn(e)), Ot[e.charCode()] !== 0 && (n += ht(e))), e.eat(vr), {
    type: "Range",
    min: t,
    max: n
  };
}
function Bl(e) {
  let t, n = null;
  return e.eat(xr), t = ht(e), e.charCode() === bo && e.nextCharCode() === Il && (e.pos += 2, t += "()"), e.charCodeAt(e.findWsEnd(e.pos)) === dn && (nn(e), n = Fl(e)), e.eat(ko), ft(e, {
    type: "Type",
    name: t,
    opts: n
  });
}
function Ul(e) {
  const t = ht(e);
  return e.charCode() === bo ? (e.pos++, {
    type: "Function",
    name: t
  }) : ft(e, {
    type: "Keyword",
    name: t
  });
}
function Hl(e, t) {
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
  for (t = Object.keys(t).sort((i, o) => ni[i] - ni[o]); t.length > 0; ) {
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
function wo(e) {
  const t = [], n = {};
  let r, i = null, o = e.pos;
  for (; r = ql(e); )
    r.type !== "Spaces" && (r.type === "Combinator" ? ((i === null || i.type === "Combinator") && (e.pos = o, e.error("Unexpected combinator")), n[r.value] = !0) : i !== null && i.type !== "Combinator" && (n[" "] = !0, t.push({
      type: "Combinator",
      value: " "
    })), t.push(r), i = r, o = e.pos);
  return i !== null && i.type === "Combinator" && (e.pos -= o, e.error("Unexpected combinator")), {
    type: "Group",
    terms: t,
    combinator: Hl(t, n) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function Wl(e) {
  let t;
  return e.eat(dn), t = wo(e), e.eat(vr), t.explicit = !0, e.charCode() === go && (e.pos++, t.disallowEmpty = !0), t;
}
function ql(e) {
  let t = e.charCode();
  if (t < 128 && Ot[t] === 1)
    return Ul(e);
  switch (t) {
    case vr:
      break;
    case dn:
      return ft(e, Wl(e));
    case xr:
      return e.nextCharCode() === en ? Dl(e) : Bl(e);
    case Jr:
      return {
        type: "Combinator",
        value: e.substringToPos(
          e.pos + (e.nextCharCode() === Jr ? 2 : 1)
        )
      };
    case Xr:
      return e.pos++, e.eat(Xr), {
        type: "Combinator",
        value: "&&"
      };
    case wr:
      return e.pos++, {
        type: "Comma"
      };
    case en:
      return ft(e, {
        type: "String",
        value: Nl(e)
      });
    case Ml:
    case Ll:
    case _l:
    case zl:
    case Pl:
      return {
        type: "Spaces",
        value: nn(e)
      };
    case Rl:
      return t = e.nextCharCode(), t < 128 && Ot[t] === 1 ? (e.pos++, {
        type: "AtKeyword",
        name: ht(e)
      }) : $n(e);
    case yo:
    case kr:
    case qn:
    case yr:
    case go:
      break;
    case tn:
      if (t = e.nextCharCode(), t < 48 || t > 57)
        return $n(e);
      break;
    default:
      return $n(e);
  }
}
function xo(e) {
  const t = new $l(e), n = wo(t);
  return t.pos !== e.length && t.error("Unexpected input"), n.terms.length === 1 && n.terms[0].type === "Group" ? n.terms[0] : n;
}
const kt = function() {
};
function ii(e) {
  return typeof e == "function" ? e : kt;
}
function Vl(e, t, n) {
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
  let i = kt, o = kt;
  if (typeof t == "function" ? i = t : t && (i = ii(t.enter), o = ii(t.leave)), i === kt && o === kt)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  r(e);
}
const Gl = {
  decorator(e) {
    const t = [];
    let n = null;
    return ne($({}, e), {
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
function Kl(e) {
  const t = [];
  return cn(
    e,
    (n, r, i) => t.push({
      type: n,
      value: e.slice(r, i),
      node: null
    })
  ), t;
}
function Ql(e, t) {
  return typeof e == "string" ? Kl(e) : t.generate(e, Gl);
}
const M = { type: "Match" }, I = { type: "Mismatch" }, Sr = { type: "DisallowEmpty" }, Yl = 40, Xl = 41;
function Y(e, t, n) {
  return t === M && n === I || e === M && t === M && n === M ? e : (e.type === "If" && e.else === I && t === M && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: n
  });
}
function vo(e) {
  return e.length > 2 && e.charCodeAt(e.length - 2) === Yl && e.charCodeAt(e.length - 1) === Xl;
}
function oi(e) {
  return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || e.type === "Type" && vo(e.name);
}
function Vn(e, t, n) {
  switch (e) {
    case " ": {
      let r = M;
      for (let i = t.length - 1; i >= 0; i--) {
        const o = t[i];
        r = Y(
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
        if (oi(a) && (i === null && o > 0 && oi(t[o - 1]) && (i = /* @__PURE__ */ Object.create(null), r = Y(
          {
            type: "Enum",
            map: i
          },
          M,
          r
        )), i !== null)) {
          const u = (vo(a.name) ? a.name.slice(0, -1) : a.name).toLowerCase();
          if (!(u in i)) {
            i[u] = a;
            continue;
          }
        }
        i = null, r = Y(
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
        t.length > 1 ? a = Vn(
          e,
          t.filter(function(u) {
            return u !== o;
          }),
          !1
        ) : a = M, r = Y(
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
        t.length > 1 ? a = Vn(
          e,
          t.filter(function(u) {
            return u !== o;
          }),
          !0
        ) : a = M, r = Y(
          o,
          a,
          r
        );
      }
      return r;
    }
  }
}
function Zl(e) {
  let t = M, n = Cr(e.term);
  if (e.max === 0)
    n = Y(
      n,
      Sr,
      I
    ), t = Y(
      n,
      null,
      // will be a loop
      I
    ), t.then = Y(
      M,
      M,
      t
      // make a loop
    ), e.comma && (t.then.else = Y(
      { type: "Comma", syntax: e },
      t,
      I
    ));
  else
    for (let r = e.min || 1; r <= e.max; r++)
      e.comma && t !== M && (t = Y(
        { type: "Comma", syntax: e },
        t,
        I
      )), t = Y(
        n,
        Y(
          M,
          M,
          t
        ),
        I
      );
  if (e.min === 0)
    t = Y(
      M,
      M,
      t
    );
  else
    for (let r = 0; r < e.min - 1; r++)
      e.comma && t !== M && (t = Y(
        { type: "Comma", syntax: e },
        t,
        I
      )), t = Y(
        n,
        t,
        I
      );
  return t;
}
function Cr(e) {
  if (typeof e == "function")
    return {
      type: "Generic",
      fn: e
    };
  switch (e.type) {
    case "Group": {
      let t = Vn(
        e.combinator,
        e.terms.map(Cr),
        !1
      );
      return e.disallowEmpty && (t = Y(
        t,
        Sr,
        I
      )), t;
    }
    case "Multiplier":
      return Zl(e);
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
function Gn(e, t) {
  return typeof e == "string" && (e = xo(e)), {
    type: "MatchGraph",
    match: Cr(e),
    syntax: t || null,
    source: e
  };
}
const { hasOwnProperty: si } = Object.prototype, Jl = 0, ec = 1, Kn = 2, So = 3, ai = "Match", tc = "Mismatch", nc = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", li = 15e3;
function rc(e) {
  let t = null, n = null, r = e;
  for (; r !== null; )
    n = r.prev, r.prev = t, t = r, r = n;
  return t;
}
function Ln(e, t) {
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
function ic(e) {
  return e.type !== P ? !1 : e.value !== "?";
}
function ci(e) {
  return e === null ? !0 : e.type === Te || e.type === z || e.type === G || e.type === ue || e.type === ee || ic(e);
}
function ui(e) {
  return e === null ? !0 : e.type === R || e.type === ke || e.type === pe || e.type === P && e.value === "/";
}
function oc(e, t, n) {
  function r() {
    do
      v++, b = v < e.length ? e[v] : null;
    while (b !== null && (b.type === U || b.type === re));
  }
  function i(A) {
    const L = v + A;
    return L < e.length ? e[L] : null;
  }
  function o(A, L) {
    return {
      nextState: A,
      matchStack: y,
      syntaxStack: h,
      thenStack: d,
      tokenIndex: v,
      prev: L
    };
  }
  function a(A) {
    d = {
      nextState: A,
      matchStack: y,
      syntaxStack: h,
      prev: d
    };
  }
  function u(A) {
    g = o(A, g);
  }
  function l() {
    y = {
      type: ec,
      syntax: t.syntax,
      token: b,
      prev: y
    }, r(), S = null, v > T && (T = v);
  }
  function s() {
    h = {
      syntax: t.syntax,
      opts: t.syntax.opts || h !== null && h.opts || null,
      prev: h
    }, y = {
      type: Kn,
      syntax: t.syntax,
      token: y.token,
      prev: y
    };
  }
  function c() {
    y.type === Kn ? y = y.prev : y = {
      type: So,
      syntax: h.syntax,
      token: y.token,
      prev: y
    }, h = h.prev;
  }
  let h = null, d = null, g = null, S = null, k = 0, C = null, b = null, v = -1, T = 0, y = {
    type: Jl,
    syntax: null,
    token: null,
    prev: null
  };
  for (r(); C === null && ++k < li; )
    switch (t.type) {
      case "Match":
        if (d === null) {
          if (b !== null && (v !== e.length - 1 || b.value !== "\\0" && b.value !== "\\9")) {
            t = I;
            break;
          }
          C = ai;
          break;
        }
        if (t = d.nextState, t === Sr)
          if (d.matchStack === y) {
            t = I;
            break;
          } else
            t = M;
        for (; d.syntaxStack !== h; )
          c();
        d = d.prev;
        break;
      case "Mismatch":
        if (S !== null && S !== !1)
          (g === null || v > g.tokenIndex) && (g = S, S = !1);
        else if (g === null) {
          C = tc;
          break;
        }
        t = g.nextState, d = g.thenStack, h = g.syntaxStack, y = g.matchStack, v = g.tokenIndex, b = v < e.length ? e[v] : null, g = g.prev;
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
          const f = 1 << t.index;
          if (!(t.mask & f)) {
            u(t), a({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | f
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
          if (E.indexOf("\\") !== -1 && (E = E.replace(/\\[09].*$/, "")), si.call(t.map, E)) {
            t = t.map[E];
            break;
          }
        }
        t = I;
        break;
      case "Generic": {
        const E = h !== null ? h.opts : null, f = v + Math.floor(t.fn(b, i, E));
        if (!isNaN(f) && f > v) {
          for (; v < f; )
            l();
          t = M;
        } else
          t = I;
        break;
      }
      case "Type":
      case "Property": {
        const E = t.type === "Type" ? "types" : "properties", f = si.call(n, E) ? n[E][t.name] : null;
        if (!f || !f.match)
          throw new Error(
            "Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>")
          );
        if (S !== !1 && b !== null && t.type === "Type" && // https://drafts.csswg.org/css-values-4/#custom-idents
        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
        // can only claim the keyword if no other unfulfilled production can claim it.
        (t.name === "custom-ident" && b.type === x || // https://drafts.csswg.org/css-values-4/#lengths
        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
        // it must parse as a <number>
        t.name === "length" && b.value === "0")) {
          S === null && (S = o(t, g)), t = I;
          break;
        }
        s(), t = f.match;
        break;
      }
      case "Keyword": {
        const E = t.name;
        if (b !== null) {
          let f = b.value;
          if (f.indexOf("\\") !== -1 && (f = f.replace(/\\[09].*$/, "")), Ln(f, E)) {
            l(), t = M;
            break;
          }
        }
        t = I;
        break;
      }
      case "AtKeyword":
      case "Function":
        if (b !== null && Ln(b.value, t.name)) {
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
        b !== null && b.type === Te ? ci(y.token) ? t = I : (l(), t = ui(b) ? I : M) : t = ci(y.token) || ui(b) ? M : I;
        break;
      case "String":
        let A = "", L = v;
        for (; L < e.length && A.length < t.value.length; L++)
          A += e[L].value;
        if (Ln(A, t.value)) {
          for (; v < L; )
            l();
          t = M;
        } else
          t = I;
        break;
      default:
        throw new Error("Unknown node type: " + t.type);
    }
  switch (C) {
    case null:
      console.warn("[csstree-match] BREAK after " + li + " iterations"), C = nc, y = null;
      break;
    case ai:
      for (; h !== null; )
        c();
      break;
    default:
      y = null;
  }
  return {
    tokens: e,
    reason: C,
    iterations: k,
    match: y,
    longestMatch: T
  };
}
function hi(e, t, n) {
  const r = oc(e, t, n || {});
  if (r.match === null)
    return r;
  let i = r.match, o = r.match = {
    syntax: t.syntax || null,
    match: []
  };
  const a = [o];
  for (i = rc(i).prev; i !== null; ) {
    switch (i.type) {
      case Kn:
        o.match.push(o = {
          syntax: i.syntax,
          match: []
        }), a.push(o);
        break;
      case So:
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
function Co(e) {
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
function sc(e, t) {
  return Ar(this, e, (n) => n.type === "Type" && n.name === t);
}
function ac(e, t) {
  return Ar(this, e, (n) => n.type === "Property" && n.name === t);
}
function lc(e) {
  return Ar(this, e, (t) => t.type === "Keyword");
}
function Ar(e, t, n) {
  const r = Co.call(e, t);
  return r === null ? !1 : r.some(n);
}
const cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getTrace: Co,
  isKeyword: lc,
  isProperty: ac,
  isType: sc
}, Symbol.toStringTag, { value: "Module" }));
function Ao(e) {
  return "node" in e ? e.node : Ao(e.match[0]);
}
function To(e) {
  return "node" in e ? e.node : To(e.match[e.match.length - 1]);
}
function fi(e, t, n, r, i) {
  function o(u) {
    if (u.syntax !== null && u.syntax.type === r && u.syntax.name === i) {
      const l = Ao(u), s = To(u);
      e.syntax.walk(t, function(c, h, d) {
        if (c === l) {
          const g = new W();
          do {
            if (g.appendData(h.data), h.data === s)
              break;
            h = h.next;
          } while (h !== null);
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
const { hasOwnProperty: vt } = Object.prototype;
function _n(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function pi(e) {
  return !!e && _n(e.offset) && _n(e.line) && _n(e.column);
}
function uc(e, t) {
  return function(r, i) {
    if (!r || r.constructor !== Object)
      return i(r, "Type of node should be an Object");
    for (let o in r) {
      let a = !0;
      if (vt.call(r, o) !== !1) {
        if (o === "type")
          r.type !== e && i(r, "Wrong node type `" + r.type + "`, expected `" + e + "`");
        else if (o === "loc") {
          if (r.loc === null)
            continue;
          if (r.loc && r.loc.constructor === Object)
            if (typeof r.loc.source != "string")
              o += ".source";
            else if (!pi(r.loc.start))
              o += ".start";
            else if (!pi(r.loc.end))
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
                typeof l == "string" ? a = r[o] && r[o].type === l : Array.isArray(l) && (a = r[o] instanceof W);
            }
          }
        } else
          i(r, "Unknown field `" + o + "` for " + e + " node type");
        a || i(r, "Bad value for `" + e + "." + o + "`");
      }
    }
    for (const o in t)
      vt.call(t, o) && vt.call(r, o) === !1 && i(r, "Field `" + e + "." + o + "` is missed");
  };
}
function hc(e, t) {
  const n = t.structure, r = {
    type: String,
    loc: !0
  }, i = {
    type: '"' + e + '"'
  };
  for (const o in n) {
    if (vt.call(n, o) === !1)
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
    check: uc(e, r)
  };
}
function fc(e) {
  const t = {};
  if (e.node) {
    for (const n in e.node)
      if (vt.call(e.node, n)) {
        const r = e.node[n];
        if (r.structure)
          t[n] = hc(n, r);
        else
          throw new Error("Missed `structure` field in `" + n + "` node type definition");
      }
  }
  return t;
}
const pc = Gn(lo.join(" | "));
function Qn(e, t, n) {
  const r = {};
  for (const i in e)
    e[i].syntax && (r[i] = n ? e[i].syntax : mr(e[i].syntax, { compact: t }));
  return r;
}
function dc(e, t, n) {
  const r = {};
  for (const [i, o] of Object.entries(e))
    r[i] = {
      prelude: o.prelude && (n ? o.prelude.syntax : mr(o.prelude.syntax, { compact: t })),
      descriptors: o.descriptors && Qn(o.descriptors, t, n)
    };
  return r;
}
function mc(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function ge(e, t, n) {
  return $({
    matched: e,
    iterations: n,
    error: t
  }, cc);
}
function nt(e, t, n, r) {
  const i = Ql(n, e.syntax);
  let o;
  return mc(i) ? ge(null, new Error("Matching for a tree with var() is not supported")) : (r && (o = hi(i, e.cssWideKeywordsSyntax, e)), (!r || !o.match) && (o = hi(i, t.match, e), !o.match) ? ge(
    null,
    new qa(o.reason, t.syntax, n, o),
    o.iterations
  ) : ge(o.match, null, o.iterations));
}
class di {
  constructor(t, n, r) {
    if (this.cssWideKeywordsSyntax = pc, this.syntax = n, this.generic = !1, this.units = $({}, Yr), this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = r || fc(t), t) {
      if (t.units)
        for (const i of Object.keys(Yr))
          Array.isArray(t.units[i]) && (this.units[i] = t.units[i]);
      if (t.types)
        for (const i in t.types)
          this.addType_(i, t.types[i]);
      if (t.generic) {
        this.generic = !0;
        for (const [i, o] of Object.entries(dl(this.units)))
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
    return typeof t == "function" ? a.match = Gn(t, o) : (typeof t == "string" ? Object.defineProperty(a, "syntax", {
      get() {
        return Object.defineProperty(a, "syntax", {
          value: xo(t)
        }), a.syntax;
      }
    }) : a.syntax = t, Object.defineProperty(a, "match", {
      get() {
        return Object.defineProperty(a, "match", {
          value: Gn(a.syntax, o)
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
      return new mt("Unknown at-rule", "@" + t);
  }
  checkAtrulePrelude(t, n) {
    const r = this.checkAtruleName(t);
    if (r)
      return r;
    const i = this.getAtrule(t);
    if (!i.prelude && n)
      return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (i.prelude && !n && !nt(this, i.prelude, "", !1).matched)
      return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  }
  checkAtruleDescriptorName(t, n) {
    const r = this.checkAtruleName(t);
    if (r)
      return r;
    const i = this.getAtrule(t), o = Tn(n);
    if (!i.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!i.descriptors[o.name] && !i.descriptors[o.basename])
      return new mt("Unknown at-rule descriptor", n);
  }
  checkPropertyName(t) {
    if (!this.getProperty(t))
      return new mt("Unknown property", t);
  }
  matchAtrulePrelude(t, n) {
    const r = this.checkAtrulePrelude(t, n);
    if (r)
      return ge(null, r);
    const i = this.getAtrule(t);
    return i.prelude ? nt(this, i.prelude, n || "", !1) : ge(null, null);
  }
  matchAtruleDescriptor(t, n, r) {
    const i = this.checkAtruleDescriptorName(t, n);
    if (i)
      return ge(null, i);
    const o = this.getAtrule(t), a = Tn(n);
    return nt(this, o.descriptors[a.name] || o.descriptors[a.basename], r, !1);
  }
  matchDeclaration(t) {
    return t.type !== "Declaration" ? ge(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  }
  matchProperty(t, n) {
    if (Qr(t).custom)
      return ge(null, new Error("Lexer matching doesn't applicable for custom properties"));
    const r = this.checkPropertyName(t);
    return r ? ge(null, r) : nt(this, this.getProperty(t), n, !0);
  }
  matchType(t, n) {
    const r = this.getType(t);
    return r ? nt(this, r, n, !1) : ge(null, new mt("Unknown type", t));
  }
  match(t, n) {
    return typeof t != "string" && (!t || !t.type) ? ge(null, new mt("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), nt(this, t, n, !1));
  }
  findValueFragments(t, n, r, i) {
    return fi(this, n, this.matchProperty(t, n), r, i);
  }
  findDeclarationValueFragments(t, n, r) {
    return fi(this, t.value, this.matchDeclaration(t), n, r);
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
    const r = Tn(t);
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
    const r = Qr(t);
    return (r.vendor && n ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name]) || null;
  }
  getType(t) {
    return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
  }
  validate() {
    function t(i, o, a, u) {
      if (a.has(o))
        return a.get(o);
      a.set(o, !1), u.syntax !== null && Vl(u.syntax, function(l) {
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
      types: Qn(this.types, !n, t),
      properties: Qn(this.properties, !n, t),
      atrules: dc(this.atrules, !n, t)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
}
function Pn(e, t) {
  return typeof t == "string" && /^\s*\|/.test(t) ? typeof e == "string" ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function mi(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const [r, i] of Object.entries(e))
    if (i) {
      n[r] = {};
      for (const o of Object.keys(i))
        t.includes(o) && (n[r][o] = i[o]);
    }
  return n;
}
function Yn(e, t) {
  const n = $({}, e);
  for (const [r, i] of Object.entries(t))
    switch (r) {
      case "generic":
        n[r] = !!i;
        break;
      case "units":
        n[r] = $({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = Array.isArray(a) ? a : [];
        break;
      case "atrules":
        n[r] = $({}, e[r]);
        for (const [o, a] of Object.entries(i)) {
          const u = n[r][o] || {}, l = n[r][o] = {
            prelude: u.prelude || null,
            descriptors: $({}, u.descriptors)
          };
          if (a) {
            l.prelude = a.prelude ? Pn(l.prelude, a.prelude) : l.prelude || null;
            for (const [s, c] of Object.entries(a.descriptors || {}))
              l.descriptors[s] = c ? Pn(l.descriptors[s], c) : null;
            Object.keys(l.descriptors).length || (l.descriptors = null);
          }
        }
        break;
      case "types":
      case "properties":
        n[r] = $({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = Pn(n[r][o], a);
        break;
      case "scope":
        n[r] = $({}, e[r]);
        for (const [o, a] of Object.entries(i))
          n[r][o] = $($({}, n[r][o]), a);
        break;
      case "parseContext":
        n[r] = $($({}, e[r]), i);
        break;
      case "atrule":
      case "pseudo":
        n[r] = $($({}, e[r]), mi(i, ["parse"]));
        break;
      case "node":
        n[r] = $($({}, e[r]), mi(i, ["name", "structure", "parse", "generate", "walkContext"]));
        break;
    }
  return n;
}
function Oo(e) {
  const t = xa(e), n = Da(e), r = Ia(e), { fromPlainObject: i, toPlainObject: o } = Ra(n), a = {
    lexer: null,
    createLexer: (u) => new di(u, a, a.lexer.structure),
    tokenize: cn,
    parse: t,
    generate: r,
    walk: n,
    find: n.find,
    findLast: n.findLast,
    findAll: n.findAll,
    fromPlainObject: i,
    toPlainObject: o,
    fork(u) {
      const l = Yn({}, e);
      return Oo(
        typeof u == "function" ? u(l, Object.assign) : Yn(l, u)
      );
    }
  };
  return a.lexer = new di({
    generic: !0,
    units: e.units,
    types: e.types,
    atrules: e.atrules,
    properties: e.properties,
    node: e.node
  }, a), a;
}
const gc = (e) => Oo(Yn({}, e)), bc = {
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
}, xe = 43, ae = 45, Ht = 110, Be = !0, yc = !1;
function Wt(e, t) {
  let n = this.tokenStart + e;
  const r = this.charCodeAt(n);
  for ((r === xe || r === ae) && (t && this.error("Number sign is not allowed"), n++); n < this.tokenEnd; n++)
    Q(this.charCodeAt(n)) || this.error("Integer is expected", n);
}
function rt(e) {
  return Wt.call(this, 0, e);
}
function ze(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let n = "";
    switch (t) {
      case Ht:
        n = "N is expected";
        break;
      case ae:
        n = "HyphenMinus is expected";
        break;
    }
    this.error(n, this.tokenStart + e);
  }
}
function zn() {
  let e = 0, t = 0, n = this.tokenType;
  for (; n === U || n === re; )
    n = this.lookupType(++e);
  if (n !== O)
    if (this.isDelim(xe, e) || this.isDelim(ae, e)) {
      t = this.isDelim(xe, e) ? xe : ae;
      do
        n = this.lookupType(++e);
      while (n === U || n === re);
      n !== O && (this.skip(e), rt.call(this, Be));
    } else
      return null;
  return e > 0 && this.skip(e), t === 0 && (n = this.charCodeAt(this.tokenStart), n !== xe && n !== ae && this.error("Number sign is expected")), rt.call(this, t !== 0), t === ae ? "-" + this.consume(O) : this.consume(O);
}
const kc = "AnPlusB", wc = {
  a: [String, null],
  b: [String, null]
};
function Eo() {
  const e = this.tokenStart;
  let t = null, n = null;
  if (this.tokenType === O)
    rt.call(this, yc), n = this.consume(O);
  else if (this.tokenType === x && this.cmpChar(this.tokenStart, ae))
    switch (t = "-1", ze.call(this, 1, Ht), this.tokenEnd - this.tokenStart) {
      case 2:
        this.next(), n = zn.call(this);
        break;
      case 3:
        ze.call(this, 2, ae), this.next(), this.skipSC(), rt.call(this, Be), n = "-" + this.consume(O);
        break;
      default:
        ze.call(this, 2, ae), Wt.call(this, 3, Be), this.next(), n = this.substrToCursor(e + 2);
    }
  else if (this.tokenType === x || this.isDelim(xe) && this.lookupType(1) === x) {
    let r = 0;
    switch (t = "1", this.isDelim(xe) && (r = 1, this.next()), ze.call(this, 0, Ht), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next(), n = zn.call(this);
        break;
      case 2:
        ze.call(this, 1, ae), this.next(), this.skipSC(), rt.call(this, Be), n = "-" + this.consume(O);
        break;
      default:
        ze.call(this, 1, ae), Wt.call(this, 2, Be), this.next(), n = this.substrToCursor(e + r + 1);
    }
  } else if (this.tokenType === _) {
    const r = this.charCodeAt(this.tokenStart), i = r === xe || r === ae;
    let o = this.tokenStart + i;
    for (; o < this.tokenEnd && Q(this.charCodeAt(o)); o++)
      ;
    o === this.tokenStart + i && this.error("Integer is expected", this.tokenStart + i), ze.call(this, o - this.tokenStart, Ht), t = this.substring(e, o), o + 1 === this.tokenEnd ? (this.next(), n = zn.call(this)) : (ze.call(this, o - this.tokenStart + 1, ae), o + 2 === this.tokenEnd ? (this.next(), this.skipSC(), rt.call(this, Be), n = "-" + this.consume(O)) : (Wt.call(this, o - this.tokenStart + 2, Be), this.next(), n = this.substrToCursor(o + 1)));
  } else
    this.error();
  return t !== null && t.charCodeAt(0) === xe && (t = t.substr(1)), n !== null && n.charCodeAt(0) === xe && (n = n.substr(1)), {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: n
  };
}
function xc(e) {
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
const vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: xc,
  name: kc,
  parse: Eo,
  structure: wc
}, Symbol.toStringTag, { value: "Module" }));
function gi(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function Sc() {
  for (let e = 1, t; t = this.lookupType(e); e++) {
    if (t === pe)
      return !0;
    if (t === ee || t === q)
      return !1;
  }
  return !1;
}
const Cc = "Atrule", Ac = "atrule", Tc = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
function $o(e = !1) {
  const t = this.tokenStart;
  let n, r, i = null, o = null;
  switch (this.eat(q), n = this.substrToCursor(t + 1), r = n.toLowerCase(), this.skipSC(), this.eof === !1 && this.tokenType !== ee && this.tokenType !== se && (this.parseAtrulePrelude ? i = this.parseWithFallback(this.AtrulePrelude.bind(this, n, e), gi) : i = gi.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case se:
      this.next();
      break;
    case ee:
      hasOwnProperty.call(this.atrule, r) && typeof this.atrule[r].block == "function" ? o = this.atrule[r].block.call(this, e) : o = this.Block(Sc.call(this));
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
function Oc(e) {
  this.token(q, "@" + e.name), e.prelude !== null && this.node(e.prelude), e.block ? this.node(e.block) : this.token(se, ";");
}
const Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Oc,
  name: Cc,
  parse: $o,
  structure: Tc,
  walkContext: Ac
}, Symbol.toStringTag, { value: "Module" })), $c = "AtrulePrelude", Lc = "atrulePrelude", _c = {
  children: [[]]
};
function Lo(e) {
  let t = null;
  return e !== null && (e = e.toLowerCase()), this.skipSC(), hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function" ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== !0 && this.tokenType !== ee && this.tokenType !== se && this.error("Semicolon or block is expected"), {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
}
function Pc(e) {
  this.children(e);
}
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Pc,
  name: $c,
  parse: Lo,
  structure: _c,
  walkContext: Lc
}, Symbol.toStringTag, { value: "Module" })), Mc = 36, _o = 42, qt = 61, Ic = 94, Xn = 124, Rc = 126;
function Nc() {
  this.eof && this.error("Unexpected end of input");
  const e = this.tokenStart;
  let t = !1;
  return this.isDelim(_o) ? (t = !0, this.next()) : this.isDelim(Xn) || this.eat(x), this.isDelim(Xn) ? this.charCodeAt(this.tokenStart + 1) !== qt ? (this.next(), this.eat(x)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function jc() {
  const e = this.tokenStart, t = this.charCodeAt(e);
  return t !== qt && // =
  t !== Rc && // ~=
  t !== Ic && // ^=
  t !== Mc && // $=
  t !== _o && // *=
  t !== Xn && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), t !== qt && (this.isDelim(qt) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e);
}
const Dc = "AttributeSelector", Fc = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
function Po() {
  const e = this.tokenStart;
  let t, n = null, r = null, i = null;
  return this.eat(ue), this.skipSC(), t = Nc.call(this), this.skipSC(), this.tokenType !== ke && (this.tokenType !== x && (n = jc.call(this), this.skipSC(), r = this.tokenType === Ae ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === x && (i = this.consume(x), this.skipSC())), this.eat(ke), {
    type: "AttributeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    matcher: n,
    value: r,
    flags: i
  };
}
function Bc(e) {
  this.token(P, "["), this.node(e.name), e.matcher !== null && (this.tokenize(e.matcher), this.node(e.value)), e.flags !== null && this.token(x, e.flags), this.token(P, "]");
}
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Bc,
  name: Dc,
  parse: Po,
  structure: Fc
}, Symbol.toStringTag, { value: "Module" })), Hc = 38;
function zo(e) {
  return this.Raw(e, null, !0);
}
function bi() {
  return this.parseWithFallback(this.Rule, zo);
}
function yi(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function Wc() {
  if (this.tokenType === se)
    return yi.call(this, this.tokenIndex);
  const e = this.parseWithFallback(this.Declaration, yi);
  return this.tokenType === se && this.next(), e;
}
const qc = "Block", Vc = "block", Gc = {
  children: [[
    "Atrule",
    "Rule",
    "Declaration"
  ]]
};
function Mo(e) {
  const t = e ? Wc : bi, n = this.tokenStart;
  let r = this.createList();
  this.eat(ee);
  e:
    for (; !this.eof; )
      switch (this.tokenType) {
        case pe:
          break e;
        case U:
        case re:
          this.next();
          break;
        case q:
          r.push(this.parseWithFallback(this.Atrule.bind(this, e), zo));
          break;
        default:
          e && this.isDelim(Hc) ? r.push(bi.call(this)) : r.push(t.call(this));
      }
  return this.eof || this.eat(pe), {
    type: "Block",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function Kc(e) {
  this.token(ee, "{"), this.children(e, (t) => {
    t.type === "Declaration" && this.token(se, ";");
  }), this.token(pe, "}");
}
const Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Kc,
  name: qc,
  parse: Mo,
  structure: Gc,
  walkContext: Vc
}, Symbol.toStringTag, { value: "Module" })), Yc = "Brackets", Xc = {
  children: [[]]
};
function Io(e, t) {
  const n = this.tokenStart;
  let r = null;
  return this.eat(ue), r = e.call(this, t), this.eof || this.eat(ke), {
    type: "Brackets",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function Zc(e) {
  this.token(P, "["), this.children(e), this.token(P, "]");
}
const Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Zc,
  name: Yc,
  parse: Io,
  structure: Xc
}, Symbol.toStringTag, { value: "Module" })), eu = "CDC", tu = [];
function Ro() {
  const e = this.tokenStart;
  return this.eat(oe), {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function nu() {
  this.token(oe, "-->");
}
const ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: nu,
  name: eu,
  parse: Ro,
  structure: tu
}, Symbol.toStringTag, { value: "Module" })), iu = "CDO", ou = [];
function No() {
  const e = this.tokenStart;
  return this.eat(_t), {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function su() {
  this.token(_t, "<!--");
}
const au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: su,
  name: iu,
  parse: No,
  structure: ou
}, Symbol.toStringTag, { value: "Module" })), lu = 46, cu = "ClassSelector", uu = {
  name: String
};
function jo() {
  return this.eatDelim(lu), {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(x)
  };
}
function hu(e) {
  this.token(P, "."), this.token(x, e.name);
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: hu,
  name: cu,
  parse: jo,
  structure: uu
}, Symbol.toStringTag, { value: "Module" })), pu = 43, ki = 47, du = 62, mu = 126, gu = "Combinator", bu = {
  name: String
};
function Do() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case U:
      t = " ";
      break;
    case P:
      switch (this.charCodeAt(this.tokenStart)) {
        case du:
        case pu:
        case mu:
          this.next();
          break;
        case ki:
          this.next(), this.eatIdent("deep"), this.eatDelim(ki);
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
function yu(e) {
  this.tokenize(e.name);
}
const ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: yu,
  name: gu,
  parse: Do,
  structure: bu
}, Symbol.toStringTag, { value: "Module" })), wu = 42, xu = 47, vu = "Comment", Su = {
  value: String
};
function Fo() {
  const e = this.tokenStart;
  let t = this.tokenEnd;
  return this.eat(re), t - e + 2 >= 2 && this.charCodeAt(t - 2) === wu && this.charCodeAt(t - 1) === xu && (t -= 2), {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
}
function Cu(e) {
  this.token(re, "/*" + e.value + "*/");
}
const Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Cu,
  name: vu,
  parse: Fo,
  structure: Su
}, Symbol.toStringTag, { value: "Module" })), Bo = 33, Tu = 35, Ou = 36, Eu = 38, $u = 42, Lu = 43, wi = 47;
function _u(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function Pu(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function zu() {
  const e = this.tokenIndex, t = this.Value();
  return t.type !== "Raw" && this.eof === !1 && this.tokenType !== se && this.isDelim(Bo) === !1 && this.isBalanceEdge(e) === !1 && this.error(), t;
}
const Mu = "Declaration", Iu = "declaration", Ru = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
function Uo() {
  const e = this.tokenStart, t = this.tokenIndex, n = ju.call(this), r = gr(n), i = r ? this.parseCustomProperty : this.parseValue, o = r ? Pu : _u;
  let a = !1, u;
  this.skipSC(), this.eat(J);
  const l = this.tokenIndex;
  if (r || this.skipSC(), i ? u = this.parseWithFallback(zu, o) : u = o.call(this, this.tokenIndex), r && u.type === "Value" && u.children.isEmpty) {
    for (let s = l - this.tokenIndex; s <= 0; s++)
      if (this.lookupType(s) === U) {
        u.children.appendData({
          type: "WhiteSpace",
          loc: null,
          value: " "
        });
        break;
      }
  }
  return this.isDelim(Bo) && (a = Du.call(this), this.skipSC()), this.eof === !1 && this.tokenType !== se && this.isBalanceEdge(t) === !1 && this.error(), {
    type: "Declaration",
    loc: this.getLocation(e, this.tokenStart),
    important: a,
    property: n,
    value: u
  };
}
function Nu(e) {
  this.token(x, e.property), this.token(J, ":"), this.node(e.value), e.important && (this.token(P, "!"), this.token(x, e.important === !0 ? "important" : e.important));
}
function ju() {
  const e = this.tokenStart;
  if (this.tokenType === P)
    switch (this.charCodeAt(this.tokenStart)) {
      case $u:
      case Ou:
      case Lu:
      case Tu:
      case Eu:
        this.next();
        break;
      case wi:
        this.next(), this.isDelim(wi) && this.next();
        break;
    }
  return this.tokenType === j ? this.eat(j) : this.eat(x), this.substrToCursor(e);
}
function Du() {
  this.eat(P), this.skipSC();
  const e = this.consume(x);
  return e === "important" ? !0 : e;
}
const Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Nu,
  name: Mu,
  parse: Uo,
  structure: Ru,
  walkContext: Iu
}, Symbol.toStringTag, { value: "Module" })), Bu = 38;
function Mn(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
const Uu = "DeclarationList", Hu = {
  children: [[
    "Declaration",
    "Atrule",
    "Rule"
  ]]
};
function Ho() {
  const e = this.createList();
  for (; !this.eof; )
    switch (this.tokenType) {
      case U:
      case re:
      case se:
        this.next();
        break;
      case q:
        e.push(this.parseWithFallback(this.Atrule.bind(this, !0), Mn));
        break;
      default:
        this.isDelim(Bu) ? e.push(this.parseWithFallback(this.Rule, Mn)) : e.push(this.parseWithFallback(this.Declaration, Mn));
    }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function Wu(e) {
  this.children(e, (t) => {
    t.type === "Declaration" && this.token(se, ";");
  });
}
const qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Wu,
  name: Uu,
  parse: Ho,
  structure: Hu
}, Symbol.toStringTag, { value: "Module" })), Vu = "Dimension", Gu = {
  value: String,
  unit: String
};
function Wo() {
  const e = this.tokenStart, t = this.consumeNumber(_);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
}
function Ku(e) {
  this.token(_, e.value + e.unit);
}
const Qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ku,
  name: Vu,
  parse: Wo,
  structure: Gu
}, Symbol.toStringTag, { value: "Module" })), Yu = "Function", Xu = "function", Zu = {
  name: String,
  children: [[]]
};
function qo(e, t) {
  const n = this.tokenStart, r = this.consumeFunctionName(), i = r.toLowerCase();
  let o;
  return o = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t), this.eof || this.eat(R), {
    type: "Function",
    loc: this.getLocation(n, this.tokenStart),
    name: r,
    children: o
  };
}
function Ju(e) {
  this.token(z, e.name + "("), this.children(e), this.token(R, ")");
}
const eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ju,
  name: Yu,
  parse: qo,
  structure: Zu,
  walkContext: Xu
}, Symbol.toStringTag, { value: "Module" })), th = "XXX", nh = "Hash", rh = {
  value: String
};
function Vo() {
  const e = this.tokenStart;
  return this.eat(j), {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
}
function ih(e) {
  this.token(j, "#" + e.value);
}
const oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ih,
  name: nh,
  parse: Vo,
  structure: rh,
  xxx: th
}, Symbol.toStringTag, { value: "Module" })), sh = "Identifier", ah = {
  name: String
};
function Go() {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(x)
  };
}
function lh(e) {
  this.token(x, e.name);
}
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: lh,
  name: sh,
  parse: Go,
  structure: ah
}, Symbol.toStringTag, { value: "Module" })), uh = "IdSelector", hh = {
  name: String
};
function Ko() {
  const e = this.tokenStart;
  return this.eat(j), {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
}
function fh(e) {
  this.token(P, "#" + e.name);
}
const ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: fh,
  name: uh,
  parse: Ko,
  structure: hh
}, Symbol.toStringTag, { value: "Module" })), dh = "MediaFeature", mh = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
function Qo() {
  const e = this.tokenStart;
  let t, n = null;
  if (this.eat(G), this.skipSC(), t = this.consume(x), this.skipSC(), this.tokenType !== R) {
    switch (this.eat(J), this.skipSC(), this.tokenType) {
      case O:
        this.lookupNonWSType(1) === P ? n = this.Ratio() : n = this.Number();
        break;
      case _:
        n = this.Dimension();
        break;
      case x:
        n = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  return this.eat(R), {
    type: "MediaFeature",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    value: n
  };
}
function gh(e) {
  this.token(G, "("), this.token(x, e.name), e.value !== null && (this.token(J, ":"), this.node(e.value)), this.token(R, ")");
}
const bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: gh,
  name: dh,
  parse: Qo,
  structure: mh
}, Symbol.toStringTag, { value: "Module" })), yh = "MediaQuery", kh = {
  children: [[
    "Identifier",
    "MediaFeature",
    "WhiteSpace"
  ]]
};
function Yo() {
  const e = this.createList();
  let t = null;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case re:
        case U:
          this.next();
          continue;
        case x:
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
function wh(e) {
  this.children(e);
}
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: wh,
  name: yh,
  parse: Yo,
  structure: kh
}, Symbol.toStringTag, { value: "Module" })), vh = "MediaQueryList", Sh = {
  children: [[
    "MediaQuery"
  ]]
};
function Xo() {
  const e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === Te); )
    this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function Ch(e) {
  this.children(e, () => this.token(Te, ","));
}
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Ch,
  name: vh,
  parse: Xo,
  structure: Sh
}, Symbol.toStringTag, { value: "Module" })), Th = 38, Oh = "NestingSelector", Eh = {};
function Zo() {
  const e = this.tokenStart;
  return this.eatDelim(Th), {
    type: "NestingSelector",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function $h() {
  this.token(P, "&");
}
const Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: $h,
  name: Oh,
  parse: Zo,
  structure: Eh
}, Symbol.toStringTag, { value: "Module" })), _h = "Nth", Ph = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
function Jo() {
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
function zh(e) {
  this.node(e.nth), e.selector !== null && (this.token(x, "of"), this.node(e.selector));
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: zh,
  name: _h,
  parse: Jo,
  structure: Ph
}, Symbol.toStringTag, { value: "Module" })), Ih = "Number", Rh = {
  value: String
};
function es() {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(O)
  };
}
function Nh(e) {
  this.token(O, e.value);
}
const jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Nh,
  name: Ih,
  parse: es,
  structure: Rh
}, Symbol.toStringTag, { value: "Module" })), Dh = "Operator", Fh = {
  value: String
};
function ts() {
  const e = this.tokenStart;
  return this.next(), {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function Bh(e) {
  this.tokenize(e.value);
}
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Bh,
  name: Dh,
  parse: ts,
  structure: Fh
}, Symbol.toStringTag, { value: "Module" })), Hh = "Parentheses", Wh = {
  children: [[]]
};
function ns(e, t) {
  const n = this.tokenStart;
  let r = null;
  return this.eat(G), r = e.call(this, t), this.eof || this.eat(R), {
    type: "Parentheses",
    loc: this.getLocation(n, this.tokenStart),
    children: r
  };
}
function qh(e) {
  this.token(G, "("), this.children(e), this.token(R, ")");
}
const Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: qh,
  name: Hh,
  parse: ns,
  structure: Wh
}, Symbol.toStringTag, { value: "Module" })), Gh = "Percentage", Kh = {
  value: String
};
function rs() {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(F)
  };
}
function Qh(e) {
  this.token(F, e.value + "%");
}
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Qh,
  name: Gh,
  parse: rs,
  structure: Kh
}, Symbol.toStringTag, { value: "Module" })), Xh = "PseudoClassSelector", Zh = "function", Jh = {
  name: String,
  children: [["Raw"], null]
};
function is() {
  const e = this.tokenStart;
  let t = null, n, r;
  return this.eat(J), this.tokenType === z ? (n = this.consumeFunctionName(), r = n.toLowerCase(), hasOwnProperty.call(this.pseudo, r) ? (this.skipSC(), t = this.pseudo[r].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(R)) : n = this.consume(x), {
    type: "PseudoClassSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: n,
    children: t
  };
}
function ef(e) {
  this.token(J, ":"), e.children === null ? this.token(x, e.name) : (this.token(z, e.name + "("), this.children(e), this.token(R, ")"));
}
const tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ef,
  name: Xh,
  parse: is,
  structure: Jh,
  walkContext: Zh
}, Symbol.toStringTag, { value: "Module" })), nf = "PseudoElementSelector", rf = "function", of = {
  name: String,
  children: [["Raw"], null]
};
function os() {
  const e = this.tokenStart;
  let t = null, n, r;
  return this.eat(J), this.eat(J), this.tokenType === z ? (n = this.consumeFunctionName(), r = n.toLowerCase(), hasOwnProperty.call(this.pseudo, r) ? (this.skipSC(), t = this.pseudo[r].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(R)) : n = this.consume(x), {
    type: "PseudoElementSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: n,
    children: t
  };
}
function sf(e) {
  this.token(J, ":"), this.token(J, ":"), e.children === null ? this.token(x, e.name) : (this.token(z, e.name + "("), this.children(e), this.token(R, ")"));
}
const af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: sf,
  name: nf,
  parse: os,
  structure: of,
  walkContext: rf
}, Symbol.toStringTag, { value: "Module" })), lf = 47, cf = 46;
function xi() {
  this.skipSC();
  const e = this.consume(O);
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    !Q(n) && n !== cf && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  return Number(e) === 0 && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
}
const uf = "Ratio", hf = {
  left: String,
  right: String
};
function ss() {
  const e = this.tokenStart, t = xi.call(this);
  let n;
  return this.skipSC(), this.eatDelim(lf), n = xi.call(this), {
    type: "Ratio",
    loc: this.getLocation(e, this.tokenStart),
    left: t,
    right: n
  };
}
function ff(e) {
  this.token(O, e.left), this.token(P, "/"), this.token(O, e.right);
}
const pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: ff,
  name: uf,
  parse: ss,
  structure: hf
}, Symbol.toStringTag, { value: "Module" }));
function df() {
  return this.tokenIndex > 0 && this.lookupType(-1) === U ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
const mf = "Raw", gf = {
  value: String
};
function as(e, t, n) {
  const r = this.getTokenStart(e);
  let i;
  return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), n && this.tokenStart > r ? i = df.call(this) : i = this.tokenStart, {
    type: "Raw",
    loc: this.getLocation(r, i),
    value: this.substring(r, i)
  };
}
function bf(e) {
  this.tokenize(e.value);
}
const yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: bf,
  name: mf,
  parse: as,
  structure: gf
}, Symbol.toStringTag, { value: "Module" }));
function vi(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function kf() {
  const e = this.SelectorList();
  return e.type !== "Raw" && this.eof === !1 && this.tokenType !== ee && this.error(), e;
}
const wf = "Rule", xf = "rule", vf = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
function ls() {
  const e = this.tokenIndex, t = this.tokenStart;
  let n, r;
  return this.parseRulePrelude ? n = this.parseWithFallback(kf, vi) : n = vi.call(this, e), r = this.Block(!0), {
    type: "Rule",
    loc: this.getLocation(t, this.tokenStart),
    prelude: n,
    block: r
  };
}
function Sf(e) {
  this.node(e.prelude), this.node(e.block);
}
const Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Sf,
  name: wf,
  parse: ls,
  structure: vf,
  walkContext: xf
}, Symbol.toStringTag, { value: "Module" })), Af = "Selector", Tf = {
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
function cs() {
  const e = this.readSequence(this.scope.Selector);
  return this.getFirstListNode(e) === null && this.error("Selector is expected"), {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function Of(e) {
  this.children(e);
}
const Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Of,
  name: Af,
  parse: cs,
  structure: Tf
}, Symbol.toStringTag, { value: "Module" })), $f = "SelectorList", Lf = "selector", _f = {
  children: [[
    "Selector",
    "Raw"
  ]]
};
function us() {
  const e = this.createList();
  for (; !this.eof; ) {
    if (e.push(this.Selector()), this.tokenType === Te) {
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
function Pf(e) {
  this.children(e, () => this.token(Te, ","));
}
const zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Pf,
  name: $f,
  parse: us,
  structure: _f,
  walkContext: Lf
}, Symbol.toStringTag, { value: "Module" })), Zn = 92, hs = 34, Mf = 39;
function fs(e) {
  const t = e.length, n = e.charCodeAt(0), r = n === hs || n === Mf ? 1 : 0, i = r === 1 && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1;
  let o = "";
  for (let a = r; a <= i; a++) {
    let u = e.charCodeAt(a);
    if (u === Zn) {
      if (a === i) {
        a !== t - 1 && (o = e.substr(a + 1));
        break;
      }
      if (u = e.charCodeAt(++a), ve(Zn, u)) {
        const l = a - 1, s = ut(e, l);
        a = s - 1, o += Qi(e.substring(l + 1, s));
      } else
        u === 13 && e.charCodeAt(a + 1) === 10 && a++;
    } else
      o += e[a];
  }
  return o;
}
function If(e, t) {
  const n = '"', r = hs;
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
    u === r || u === Zn ? (i += "\\" + e.charAt(a), o = !1) : (o && (Ne(u) || Ke(u)) && (i += " "), i += e.charAt(a), o = !1);
  }
  return n + i + n;
}
const Rf = "String", Nf = {
  value: String
};
function ps() {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: fs(this.consume(Ae))
  };
}
function jf(e) {
  this.token(Ae, If(e.value));
}
const Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: jf,
  name: Rf,
  parse: ps,
  structure: Nf
}, Symbol.toStringTag, { value: "Module" })), Ff = 33;
function Si(e) {
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
function ds() {
  const e = this.tokenStart, t = this.createList();
  let n;
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case U:
        this.next();
        continue;
      case re:
        if (this.charCodeAt(this.tokenStart + 2) !== Ff) {
          this.next();
          continue;
        }
        n = this.Comment();
        break;
      case _t:
        n = this.CDO();
        break;
      case oe:
        n = this.CDC();
        break;
      case q:
        n = this.parseWithFallback(this.Atrule, Si);
        break;
      default:
        n = this.parseWithFallback(this.Rule, Si);
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
  parse: ds,
  structure: Hf,
  walkContext: Uf
}, Symbol.toStringTag, { value: "Module" })), Vf = 42, Ci = 124;
function In() {
  this.tokenType !== x && this.isDelim(Vf) === !1 && this.error("Identifier or asterisk is expected"), this.next();
}
const Gf = "TypeSelector", Kf = {
  name: String
};
function ms() {
  const e = this.tokenStart;
  return this.isDelim(Ci) ? (this.next(), In.call(this)) : (In.call(this), this.isDelim(Ci) && (this.next(), In.call(this))), {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function Qf(e) {
  this.tokenize(e.name);
}
const Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: Qf,
  name: Gf,
  parse: ms,
  structure: Kf
}, Symbol.toStringTag, { value: "Module" })), gs = 43, bs = 45, Jn = 63;
function wt(e, t) {
  let n = 0;
  for (let r = this.tokenStart + e; r < this.tokenEnd; r++) {
    const i = this.charCodeAt(r);
    if (i === bs && t && n !== 0)
      return wt.call(this, e + n + 1, !1), -1;
    Ne(i) || this.error(
      t && n !== 0 ? "Hyphen minus" + (n < 6 ? " or hex digit" : "") + " is expected" : n < 6 ? "Hex digit is expected" : "Unexpected input",
      r
    ), ++n > 6 && this.error("Too many hex digits", r);
  }
  return this.next(), n;
}
function jt(e) {
  let t = 0;
  for (; this.isDelim(Jn); )
    ++t > e && this.error("Too many question marks"), this.next();
}
function Xf(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((e === gs ? "Plus sign" : "Hyphen minus") + " is expected");
}
function Zf() {
  let e = 0;
  switch (this.tokenType) {
    case O:
      if (e = wt.call(this, 1, !0), this.isDelim(Jn)) {
        jt.call(this, 6 - e);
        break;
      }
      if (this.tokenType === _ || this.tokenType === O) {
        Xf.call(this, bs), wt.call(this, 1, !1);
        break;
      }
      break;
    case _:
      e = wt.call(this, 1, !0), e > 0 && jt.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(gs), this.tokenType === x) {
        e = wt.call(this, 0, !0), e > 0 && jt.call(this, 6 - e);
        break;
      }
      if (this.isDelim(Jn)) {
        this.next(), jt.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
const Jf = "UnicodeRange", ep = {
  value: String
};
function ys() {
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
  parse: ys,
  structure: ep
}, Symbol.toStringTag, { value: "Module" })), rp = 32, er = 92, ip = 34, op = 39, sp = 40, ks = 41;
function ap(e) {
  const t = e.length;
  let n = 4, r = e.charCodeAt(t - 1) === ks ? t - 2 : t - 1, i = "";
  for (; n < r && Ke(e.charCodeAt(n)); )
    n++;
  for (; n < r && Ke(e.charCodeAt(r)); )
    r--;
  for (let o = n; o <= r; o++) {
    let a = e.charCodeAt(o);
    if (a === er) {
      if (o === r) {
        o !== t - 1 && (i = e.substr(o + 1));
        break;
      }
      if (a = e.charCodeAt(++o), ve(er, a)) {
        const u = o - 1, l = ut(e, u);
        o = l - 1, i += Qi(e.substring(u + 1, l));
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
    i === rp || i === er || i === ip || i === op || i === sp || i === ks ? (t += "\\" + e.charAt(r), n = !1) : (n && Ne(i) && (t += " "), t += e.charAt(r), n = !1);
  }
  return "url(" + t + ")";
}
const cp = "Url", up = {
  value: String
};
function ws() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case Z:
      t = ap(this.consume(Z));
      break;
    case z:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(z), this.skipSC(), t = fs(this.consume(Ae)), this.skipSC(), this.eof || this.eat(R);
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
  this.token(Z, lp(e.value));
}
const fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: hp,
  name: cp,
  parse: ws,
  structure: up
}, Symbol.toStringTag, { value: "Module" })), pp = "Value", dp = {
  children: [[]]
};
function xs() {
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
  parse: xs,
  structure: dp
}, Symbol.toStringTag, { value: "Module" })), bp = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), yp = "WhiteSpace", kp = {
  value: String
};
function vs() {
  return this.eat(U), bp;
}
function wp(e) {
  this.token(U, e.value);
}
const xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: wp,
  name: yp,
  parse: vs,
  structure: kp
}, Symbol.toStringTag, { value: "Module" })), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnPlusB: vc,
  Atrule: Ec,
  AtrulePrelude: zc,
  AttributeSelector: Uc,
  Block: Qc,
  Brackets: Jc,
  CDC: ru,
  CDO: au,
  ClassSelector: fu,
  Combinator: ku,
  Comment: Au,
  Declaration: Fu,
  DeclarationList: qu,
  Dimension: Qu,
  Function: eh,
  Hash: oh,
  IdSelector: ph,
  Identifier: ch,
  MediaFeature: bh,
  MediaQuery: xh,
  MediaQueryList: Ah,
  NestingSelector: Lh,
  Nth: Mh,
  Number: jh,
  Operator: Uh,
  Parentheses: Vh,
  Percentage: Yh,
  PseudoClassSelector: tf,
  PseudoElementSelector: af,
  Ratio: pf,
  Raw: yf,
  Rule: Cf,
  Selector: Ef,
  SelectorList: zf,
  String: Df,
  StyleSheet: qf,
  TypeSelector: Yf,
  UnicodeRange: np,
  Url: fp,
  Value: gp,
  WhiteSpace: xp
}, Symbol.toStringTag, { value: "Module" })), vp = ne($({
  generic: !0
}, bc), {
  node: Ss
}), Sp = 35, Cp = 42, Ai = 43, Ap = 45, Tp = 47, Op = 117;
function Cs(e) {
  switch (this.tokenType) {
    case j:
      return this.Hash();
    case Te:
      return this.Operator();
    case G:
      return this.Parentheses(this.readSequence, e.recognizer);
    case ue:
      return this.Brackets(this.readSequence, e.recognizer);
    case Ae:
      return this.String();
    case _:
      return this.Dimension();
    case F:
      return this.Percentage();
    case O:
      return this.Number();
    case z:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case Z:
      return this.Url();
    case x:
      return this.cmpChar(this.tokenStart, Op) && this.cmpChar(this.tokenStart + 1, Ai) ? this.UnicodeRange() : this.Identifier();
    case P: {
      const t = this.charCodeAt(this.tokenStart);
      if (t === Tp || t === Cp || t === Ai || t === Ap)
        return this.Operator();
      t === Sp && this.error("Hex or identifier is expected", this.tokenStart + 1);
      break;
    }
  }
}
const Ep = {
  getNode: Cs
}, $p = 35, Lp = 38, _p = 42, Pp = 43, zp = 47, Ti = 46, Mp = 62, Ip = 124, Rp = 126;
function Np(e, t) {
  t.last !== null && t.last.type !== "Combinator" && e !== null && e.type !== "Combinator" && t.push({
    // FIXME: this.Combinator() should be used instead
    type: "Combinator",
    loc: null,
    name: " "
  });
}
function jp() {
  switch (this.tokenType) {
    case ue:
      return this.AttributeSelector();
    case j:
      return this.IdSelector();
    case J:
      return this.lookupType(1) === J ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case x:
      return this.TypeSelector();
    case O:
    case F:
      return this.Percentage();
    case _:
      this.charCodeAt(this.tokenStart) === Ti && this.error("Identifier is expected", this.tokenStart + 1);
      break;
    case P: {
      switch (this.charCodeAt(this.tokenStart)) {
        case Pp:
        case Mp:
        case Rp:
        case zp:
          return this.Combinator();
        case Ti:
          return this.ClassSelector();
        case _p:
        case Ip:
          return this.TypeSelector();
        case $p:
          return this.IdSelector();
        case Lp:
          return this.NestingSelector();
      }
      break;
    }
  }
}
const Dp = {
  onWhiteSpace: Np,
  getNode: jp
};
function Fp() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
function Bp() {
  const e = this.createList();
  if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === Te) {
    e.push(this.Operator());
    const t = this.tokenIndex, n = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
    if (n.type === "Value" && n.children.isEmpty) {
      for (let r = t - this.tokenIndex; r <= 0; r++)
        if (this.lookupType(r) === U) {
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
function Oi(e) {
  return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
}
const Up = {
  getNode: Cs,
  onWhiteSpace(e, t) {
    Oi(e) && (e.value = " " + e.value), Oi(t.last) && (t.last.value += " ");
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
        case Ae:
          e.push(this.String());
          break;
        case Z:
        case z:
          e.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === x || this.lookupNonWSType(0) === G) && e.push(this.MediaQueryList()), e;
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
function Yp() {
  return this.skipSC(), this.tokenType === x && this.lookupNonWSType(1) === J ? this.createSingleNodeList(
    this.Declaration()
  ) : As.call(this);
}
function As() {
  const e = this.createList();
  let t;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case re:
        case U:
          this.next();
          continue;
        case z:
          t = this.Function(Qp, this.scope.AtrulePrelude);
          break;
        case x:
          t = this.Identifier();
          break;
        case G:
          t = this.Parentheses(Yp, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return e;
}
const Xp = {
  parse: {
    prelude() {
      const e = As.call(this);
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
  supports: Xp
}, Fe = {
  parse() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, Rn = {
  parse() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, Ei = {
  parse() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, Dt = {
  parse() {
    return this.createSingleNodeList(
      this.Nth()
    );
  }
}, Jp = {
  dir: Ei,
  has: Fe,
  lang: Ei,
  matches: Fe,
  is: Fe,
  "-moz-any": Fe,
  "-webkit-any": Fe,
  where: Fe,
  not: Fe,
  "nth-child": Dt,
  "nth-last-child": Dt,
  "nth-last-of-type": Dt,
  "nth-of-type": Dt,
  slotted: Rn,
  host: Rn,
  "host-context": Rn
}, ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnPlusB: Eo,
  Atrule: $o,
  AtrulePrelude: Lo,
  AttributeSelector: Po,
  Block: Mo,
  Brackets: Io,
  CDC: Ro,
  CDO: No,
  ClassSelector: jo,
  Combinator: Do,
  Comment: Fo,
  Declaration: Uo,
  DeclarationList: Ho,
  Dimension: Wo,
  Function: qo,
  Hash: Vo,
  IdSelector: Ko,
  Identifier: Go,
  MediaFeature: Qo,
  MediaQuery: Yo,
  MediaQueryList: Xo,
  NestingSelector: Zo,
  Nth: Jo,
  Number: es,
  Operator: ts,
  Parentheses: ns,
  Percentage: rs,
  PseudoClassSelector: is,
  PseudoElementSelector: os,
  Ratio: ss,
  Raw: as,
  Rule: ls,
  Selector: cs,
  SelectorList: us,
  String: ps,
  StyleSheet: ds,
  TypeSelector: ms,
  UnicodeRange: ys,
  Url: ws,
  Value: xs,
  WhiteSpace: vs
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
  node: Ss
}, rd = gc($($($({}, vp), td), nd));
function tr(e) {
  const t = {};
  for (const n in e) {
    let r = e[n];
    r && (Array.isArray(r) || r instanceof W ? r = r.map(tr) : r.constructor === Object && (r = tr(r))), t[n] = r;
  }
  return t;
}
const {
  tokenize: Yd,
  parse: id,
  generate: od,
  lexer: Xd,
  createLexer: Zd,
  walk: Ue,
  find: Jd,
  findLast: em,
  findAll: tm,
  toPlainObject: nm,
  fromPlainObject: rm,
  fork: im
} = rd;
let sd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", $e = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += sd[Math.random() * 64 | 0];
  return t;
};
function He(e) {
  return id(e, {
    parseAtrulePrelude: !1,
    parseCustomProperty: !0
  });
}
function le(e) {
  return od(e, {
    // Default `safe` adds extra (potentially breaking) spaces for compatibility
    // with old browsers.
    mode: "spec"
  });
}
function Ts(e) {
  return e.value.children.first.name;
}
const Os = `--position-anchor-${$e(12)}`;
function ad(e) {
  const t = [];
  for (const { selector: n, elementPart: r, pseudoElementPart: i } of e) {
    const o = i === "::before", a = i === "::after";
    if (i && !(o || a)) continue;
    const u = Array.from(
      document.querySelectorAll(r)
    );
    if (!i) {
      t.push(...u);
      continue;
    }
    for (const l of u) {
      const s = getComputedStyle(l, i), c = document.createElement("div"), h = document.createElement("style");
      c.id = `fake-pseudo-element-${$e()}`;
      for (const k of Array.from(s)) {
        const C = s.getPropertyValue(k);
        c.style.setProperty(k, C);
      }
      h.textContent += `#${c.id}${i} { content: ${s.content}; }`, h.textContent += `${n} { display: none !important; }`, document.head.append(h), o && l.insertAdjacentElement("afterbegin", c), a && l.insertAdjacentElement("beforeend", c);
      const d = window.scrollY, g = window.scrollX, S = c.getBoundingClientRect();
      t.push({
        // Passed to `isAcceptableAnchorElement`.
        fakePseudoElement: c,
        // For testing.
        computedStyle: s,
        // For `validatedForPositioning` to "undo" the "fake pseudo-element" after it's been used.
        removeFakePseudoElement() {
          c.remove(), h.remove();
        },
        // https://floating-ui.com/docs/virtual-elements.
        getBoundingClientRect() {
          return DOMRect.fromRect({
            x: S.x - (window.scrollX - g),
            y: S.y - (window.scrollY - d),
            width: S.width,
            height: S.height
          });
        }
      });
    }
  }
  return t;
}
function Et(e, t, n) {
  return je(e, t) === n;
}
function ld(e, t) {
  return !e || e === t ? !1 : Es(e) ? e.document.contains(t) : e.contains(t);
}
function Es(e) {
  return !!(e && e === e.window);
}
function cd(e) {
  return Et(e, "position", "fixed");
}
function nr(e) {
  return !!(e && (cd(e) || Et(e, "position", "absolute")));
}
function $i(e, t) {
  return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING;
}
function ud(e) {
  return B(this, null, function* () {
    return yield X.getOffsetParent(e);
  });
}
function Nn(e) {
  return B(this, null, function* () {
    if (!["absolute", "fixed"].includes(je(e, "position")))
      return yield ud(e);
    let t = e.parentElement;
    for (; t; ) {
      if (!Et(t, "position", "static") && Et(t, "display", "block"))
        return t;
      t = t.parentElement;
    }
    return window;
  });
}
function hd(e, t) {
  return B(this, null, function* () {
    const n = yield Nn(e), r = yield Nn(t);
    if (!(ld(r, e) || Es(r)) || n === r && !(!nr(e) || $i(e, t)))
      return !1;
    if (n !== r) {
      let i;
      const o = [];
      for (i = n; i && i !== r && i !== window; )
        o.push(i), i = yield Nn(i);
      const a = o[o.length - 1];
      if (a instanceof HTMLElement && !(!nr(a) || $i(a, t)))
        return !1;
    }
    {
      let i = e.parentElement;
      for (; i; ) {
        if (Et(i, "content-visibility", "hidden"))
          return !1;
        i = i.parentElement;
      }
    }
    return !0;
  });
}
function Li(e, t) {
  return B(this, null, function* () {
    if (!(e instanceof HTMLElement && t.length && nr(e)))
      return null;
    const n = ad(t);
    for (let r = n.length - 1; r >= 0; r--) {
      const i = n[r], o = "fakePseudoElement" in i;
      if (yield hd(
        o ? i.fakePseudoElement : i,
        e
      ))
        return o && i.removeFakePseudoElement(), i;
    }
    return null;
  });
}
const fd = [
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
], pd = [
  "width",
  "height",
  "min-width",
  "min-height",
  "max-width",
  "max-height"
], dd = [
  "justify-content",
  "align-content",
  "justify-self",
  "align-self",
  "justify-items",
  "align-items"
], md = [
  "top",
  "left",
  "right",
  "bottom",
  "start",
  "end",
  "self-start",
  "self-end",
  "center"
], gd = [
  "width",
  "height",
  "block",
  "inline",
  "self-block",
  "self-inline"
];
function bd(e) {
  return e.type === "Declaration";
}
function yd(e) {
  return e.type === "Declaration" && e.property === "anchor-name";
}
function $s(e) {
  return !!(e && e.type === "Function" && e.name === "anchor");
}
function Ls(e) {
  return !!(e && e.type === "Function" && e.name === "anchor-size");
}
function Vt(e) {
  return !!(e && e.type === "Function" && e.name === "var");
}
function kd(e) {
  return e.type === "Declaration" && e.property === "position-fallback";
}
function wd(e) {
  return e.type === "Atrule" && e.name === "position-fallback";
}
function xd(e) {
  return e.type === "Atrule" && e.name === "try";
}
function jn(e) {
  return !!(e.type === "Identifier" && e.name);
}
function vd(e) {
  return !!(e.type === "Percentage" && e.value);
}
function $t(e) {
  return fd.includes(e);
}
function Sd(e) {
  return md.includes(e);
}
function mn(e) {
  return pd.includes(e);
}
function Cd(e) {
  return gd.includes(e);
}
function Ad(e) {
  return dd.includes(e);
}
function Td(e) {
  return e.type === "Declaration" && e.property === "position-anchor";
}
function _i(e, t) {
  let n, r, i, o = "", a = !1, u;
  const l = [];
  e.children.toArray().forEach((d) => {
    if (a) {
      o = `${o}${le(d)}`;
      return;
    }
    if (d.type === "Operator" && d.value === ",") {
      a = !0;
      return;
    }
    l.push(d);
  });
  let [s, c] = l;
  if (c || (c = s, s = void 0), s && (jn(s) ? s.name === "implicit" ? s = void 0 : s.name.startsWith("--") && (n = s.name) : Vt(s) && s.children.first && (u = s.children.first.name)), c)
    if ($s(e)) {
      if (jn(c) && Sd(c.name))
        r = c.name;
      else if (vd(c)) {
        const d = Number(c.value);
        r = Number.isNaN(d) ? void 0 : d;
      }
    } else Ls(e) && jn(c) && Cd(c.name) && (i = c.name);
  const h = `--anchor-${$e(12)}`;
  return Object.assign(e, {
    type: "Raw",
    value: `var(${h})`,
    children: null
  }), Reflect.deleteProperty(e, "name"), {
    anchorName: n,
    anchorSide: r,
    anchorSize: i,
    fallbackValue: o || "0px",
    customPropName: u,
    uuid: h
  };
}
function Od(e) {
  return e.value.children.map(
    ({ name: t }) => t
  );
}
function Dn(e) {
  return e ? e.children.map((t) => {
    var i;
    let n;
    ((i = t.children.last) == null ? void 0 : i.type) === "PseudoElementSelector" && (t = tr(t), n = le(t.children.last), t.children.pop());
    const r = le(t);
    return {
      selector: r + (n != null ? n : ""),
      elementPart: r,
      pseudoElementPart: n
    };
  }).toArray() : [];
}
let it = {}, qe = {}, St = {}, We = {};
function Ed() {
  it = {}, qe = {}, St = {}, We = {};
}
function $d(e, t) {
  var n;
  if (($s(e) || Ls(e)) && t) {
    if (t.property.startsWith("--")) {
      const r = le(t.value), i = _i(e);
      return St[i.uuid] = r, qe[t.property] = [
        ...(n = qe[t.property]) != null ? n : [],
        i
      ], { changed: !0 };
    }
    if ($t(t.property) || mn(t.property)) {
      const r = _i(e);
      return { prop: t.property, data: r, changed: !0 };
    }
  }
  return {};
}
function Ld(e) {
  return kd(e) && e.value.children.first ? Ts(e) : null;
}
function _d(e) {
  var t, n;
  if (wd(e) && ((t = e.prelude) != null && t.value) && ((n = e.block) != null && n.children)) {
    const r = e.prelude.value, i = [];
    return e.block.children.filter(xd).forEach((a) => {
      var u;
      if ((u = a.block) != null && u.children) {
        const l = a.block.children.filter(
          (c) => bd(c) && ($t(c.property) || mn(c.property) || Ad(c.property))
        ), s = {
          uuid: `${r}-try-${$e(12)}`,
          declarations: Object.fromEntries(
            l.map((c) => [c.property, le(c.value)])
          )
        };
        i.push(s);
      }
    }), { name: r, blocks: i };
  }
  return {};
}
function je(e, t) {
  return getComputedStyle(e).getPropertyValue(t).trim();
}
function Pd(e, t) {
  return B(this, null, function* () {
    var o;
    let n = t.anchorName;
    const r = t.customPropName;
    if (e && !n) {
      const a = e.getAttribute("anchor"), u = je(
        e,
        Os
      );
      if (u)
        n = u;
      else if (r)
        n = je(e, r);
      else if (a) {
        const l = `#${CSS.escape(a)}`;
        return yield Li(e, [
          { selector: l, elementPart: l }
        ]);
      }
    }
    const i = n ? (o = it[n]) != null ? o : [] : [];
    return yield Li(e, i);
  });
}
function zd(e) {
  return B(this, null, function* () {
    var s, c, h, d, g, S;
    const t = {}, n = {}, r = {}, i = {};
    Ed();
    for (const k of e) {
      const C = He(k.css);
      Ue(C, {
        visit: "Atrule",
        enter(b) {
          const { name: v, blocks: T } = _d(b);
          v && (T != null && T.length) && (r[v] = {
            targets: [],
            blocks: T
          });
        }
      });
    }
    for (const k of e) {
      let C = !1;
      const b = He(k.css);
      Ue(b, {
        visit: "Declaration",
        enter(v) {
          var L, E;
          const T = (L = this.rule) == null ? void 0 : L.prelude, y = Dn(T), A = Ld(v);
          if (A && y.length && r[A]) {
            for (const { selector: f } of y)
              i[f] = { fallbacks: r[A].blocks }, r[A].targets.includes(f) || r[A].targets.push(f);
            for (const f of r[A].blocks) {
              const p = `[data-anchor-polyfill="${f.uuid}"]`;
              (E = this.stylesheet) == null || E.children.prependData({
                type: "Rule",
                prelude: {
                  type: "Raw",
                  value: p
                },
                block: {
                  type: "Block",
                  children: new W().fromArray(
                    Object.entries(f.declarations).map(([w, m]) => ({
                      type: "Declaration",
                      important: !0,
                      property: w,
                      value: {
                        type: "Raw",
                        value: m
                      }
                    }))
                  )
                }
              }), n[p] = y.map(({ selector: w }) => w).join(", ");
            }
            C = !0;
          }
        }
      }), C && (k.css = le(b), k.changed = !0);
    }
    for (const k of e) {
      let C = !1;
      const b = He(k.css);
      Ue(b, function(v) {
        var f, p, w, m;
        const T = (f = this.rule) == null ? void 0 : f.prelude, y = Dn(T);
        if (yd(v) && y.length)
          for (const D of Od(v))
            (p = it[D]) != null || (it[D] = []), it[D].push(...y);
        const {
          prop: A,
          data: L,
          changed: E
        } = $d(v, this.declaration);
        if (A && L && y.length)
          for (const { selector: D } of y)
            t[D] = ne($({}, t[D]), {
              [A]: [...(m = (w = t[D]) == null ? void 0 : w[A]) != null ? m : [], L]
            });
        E && (C = !0);
      }), C && (k.css = le(b), k.changed = !0);
    }
    const o = new Set(Object.keys(qe)), a = {}, u = (k) => {
      var v, T, y, A, L;
      const C = [], b = new Set((T = (v = a[k]) == null ? void 0 : v.names) != null ? T : []);
      for (; b.size > 0; )
        for (const E of b)
          C.push(...(y = qe[E]) != null ? y : []), b.delete(E), (L = (A = a[E]) == null ? void 0 : A.names) != null && L.length && a[E].names.forEach((f) => b.add(f));
      return C;
    };
    for (; o.size > 0; ) {
      const k = [];
      for (const C of e) {
        let b = !1;
        const v = He(C.css);
        Ue(v, {
          visit: "Function",
          enter(T) {
            var E, f;
            const y = (E = this.rule) == null ? void 0 : E.prelude, A = this.declaration, L = A == null ? void 0 : A.property;
            if ((y == null ? void 0 : y.children.isEmpty) === !1 && Vt(T) && A && L && T.children.first && o.has(
              T.children.first.name
            ) && // For now, we only want assignments to other CSS custom properties
            L.startsWith("--")) {
              const p = T.children.first, w = (f = qe[p.name]) != null ? f : [], m = u(p.name);
              if (!(w.length || m.length))
                return;
              const D = `${p.name}-anchor-${$e(12)}`, V = le(A.value);
              St[D] = V, a[L] || (a[L] = { names: [], uuids: [] });
              const me = a[L];
              me.names.includes(p.name) || me.names.push(p.name), me.uuids.push(D), k.push(L), p.name = D, b = !0;
            }
          }
        }), b && (C.css = le(v), C.changed = !0);
      }
      o.clear(), k.forEach((C) => o.add(C));
    }
    for (const k of e) {
      let C = !1;
      const b = He(k.css);
      Ue(b, {
        visit: "Function",
        enter(v) {
          var L, E, f, p, w, m, D;
          const T = (L = this.rule) == null ? void 0 : L.prelude, y = this.declaration, A = y == null ? void 0 : y.property;
          if ((T == null ? void 0 : T.children.isEmpty) === !1 && Vt(v) && y && A && v.children.first && // Now we only want assignments to inset/sizing properties
          ($t(A) || mn(A))) {
            const V = v.children.first, me = (E = qe[V.name]) != null ? E : [], K = u(V.name);
            if (!(me.length || K.length))
              return;
            const Oe = `${A}-${$e(12)}`;
            if (K.length) {
              const Qe = /* @__PURE__ */ new Set([V.name]);
              for (; Qe.size > 0; )
                for (const Ye of Qe) {
                  const te = a[Ye];
                  if ((f = te == null ? void 0 : te.names) != null && f.length && ((p = te == null ? void 0 : te.uuids) != null && p.length))
                    for (const Xe of te.names)
                      for (const Ze of te.uuids)
                        We[Ze] = ne($({}, We[Ze]), {
                          // - `key` (`propUuid`) is the property-specific
                          //   uuid to append to the new custom property name
                          // - `value` is the new property-specific custom
                          //   property value to use
                          [Oe]: `${Xe}-${Oe}`
                        });
                  Qe.delete(Ye), (w = te == null ? void 0 : te.names) != null && w.length && te.names.forEach((Xe) => Qe.add(Xe));
                }
            }
            const De = Dn(T);
            for (const Qe of [...me, ...K]) {
              const Ye = $({}, Qe), te = `--anchor-${$e(12)}-${A}`, Xe = Ye.uuid;
              Ye.uuid = te;
              for (const { selector: Ze } of De)
                t[Ze] = ne($({}, t[Ze]), {
                  [A]: [...(D = (m = t[Ze]) == null ? void 0 : m[A]) != null ? D : [], Ye]
                });
              We[Xe] = ne($({}, We[Xe]), {
                // - `key` (`propUuid`) is the property-specific
                //   uuid to append to the new custom property name
                // - `value` is the new property-specific custom
                //   property value to use
                [Oe]: te
              });
            }
            V.name = `${V.name}-${Oe}`, C = !0;
          }
        }
      }), C && (k.css = le(b), k.changed = !0);
    }
    if (Object.keys(We).length > 0)
      for (const k of e) {
        let C = !1;
        const b = He(k.css);
        Ue(b, {
          visit: "Function",
          enter(v) {
            var T, y, A, L;
            if (Vt(v) && ((y = (T = v.children.first) == null ? void 0 : T.name) != null && y.startsWith(
              "--"
            )) && ((L = (A = this.declaration) == null ? void 0 : A.property) != null && L.startsWith("--")) && this.block) {
              const E = v.children.first, f = We[E.name];
              if (f)
                for (const [p, w] of Object.entries(f))
                  this.block.children.appendData({
                    type: "Declaration",
                    important: !1,
                    property: `${this.declaration.property}-${p}`,
                    value: {
                      type: "Raw",
                      value: le(this.declaration.value).replace(
                        `var(${E.name})`,
                        `var(${w})`
                      )
                    }
                  }), C = !0;
              St[E.name] && (this.declaration.value = {
                type: "Raw",
                value: St[E.name]
              }, C = !0);
            }
          }
        }), C && (k.css = le(b), k.changed = !0);
      }
    const l = /* @__PURE__ */ new Map();
    for (const [k, C] of Object.entries(t)) {
      let b;
      k.startsWith("[data-anchor-polyfill=") && n[k] ? b = document.querySelectorAll(n[k]) : b = document.querySelectorAll(k);
      for (const [v, T] of Object.entries(C))
        for (const y of T)
          for (const A of b) {
            const L = yield Pd(A, y), E = `--anchor-${$e(12)}`;
            l.set(A, ne($({}, (s = l.get(A)) != null ? s : {}), {
              [y.uuid]: E
            })), A.setAttribute(
              "style",
              `${y.uuid}: var(${E}); ${(c = A.getAttribute("style")) != null ? c : ""}`
            ), i[k] = ne($({}, i[k]), {
              declarations: ne($({}, (h = i[k]) == null ? void 0 : h.declarations), {
                [v]: [
                  ...(S = (g = (d = i[k]) == null ? void 0 : d.declarations) == null ? void 0 : g[v]) != null ? S : [],
                  ne($({}, y), { anchorEl: L, targetEl: A, uuid: E })
                ]
              })
            });
          }
    }
    return { rules: i, inlineStyles: l };
  });
}
function Md(e, t) {
  return Td(e) && t ? (t.children.appendData({
    type: "Declaration",
    important: !1,
    property: Os,
    value: {
      type: "Raw",
      value: Ts(e)
    }
  }), { updated: !0 }) : {};
}
function Id(e) {
  return B(this, null, function* () {
    for (const t of e) {
      let n = !1;
      const r = He(t.css);
      Ue(r, {
        visit: "Declaration",
        enter(i) {
          var u;
          const o = (u = this.rule) == null ? void 0 : u.block, { updated: a } = Md(i, o);
          a && (n = !0);
        }
      }), n && (t.css = le(r), t.changed = !0);
    }
    return e.some((t) => t.changed === !0);
  });
}
function Rd(e) {
  return !!((e.type === "text/css" || e.rel === "stylesheet") && e.href);
}
function Nd(e) {
  const t = new URL(e.href, document.baseURI);
  if (Rd(e) && t.origin === location.origin)
    return t;
}
function jd(e) {
  return B(this, null, function* () {
    return Promise.all(
      e.map((t) => B(this, null, function* () {
        if (!t.url)
          return t;
        const r = yield (yield fetch(t.url.toString())).text();
        return ne($({}, t), { css: r });
      }))
    );
  });
}
function Dd() {
  const e = document.querySelectorAll('[style*="anchor"]'), t = [];
  return e.forEach((n) => {
    const r = $e(12), i = "data-has-inline-styles";
    n.setAttribute(i, r);
    const o = n.getAttribute("style"), a = `[${i}="${r}"] { ${o} }`;
    t.push({ el: n, css: a });
  }), t;
}
function Fd() {
  return B(this, null, function* () {
    const e = document.querySelectorAll("link, style"), t = [];
    e.forEach((r) => {
      if (r.tagName.toLowerCase() === "link") {
        const i = Nd(r);
        i && t.push({ el: r, url: i });
      }
      r.tagName.toLowerCase() === "style" && t.push({ el: r, css: r.innerHTML });
    });
    const n = Dd();
    return yield jd([...t, ...n]);
  });
}
function Pi(e, t, n = !1) {
  return B(this, null, function* () {
    const r = [];
    for (const { el: i, css: o, changed: a } of e) {
      const u = { el: i, css: o, changed: !1 };
      if (a) {
        if (i.tagName.toLowerCase() === "style")
          i.innerHTML = o;
        else if (i.tagName.toLowerCase() === "link") {
          const l = new Blob([o], { type: "text/css" }), s = URL.createObjectURL(l), c = document.createElement("link");
          c.rel = "stylesheet", c.href = s;
          const h = new Promise((d) => {
            c.onload = d;
          });
          i.replaceWith(c), yield h, URL.revokeObjectURL(s), u.el = c;
        } else if (i.hasAttribute("data-has-inline-styles")) {
          const l = i.getAttribute("data-has-inline-styles");
          if (l) {
            const s = `[data-has-inline-styles="${l}"]{`;
            let h = o.slice(s.length, 0 - "}".length);
            const d = t == null ? void 0 : t.get(i);
            if (d)
              for (const [g, S] of Object.entries(d))
                h = `${g}: var(${S}); ${h}`;
            i.setAttribute("style", h);
          }
        }
      }
      n && i.hasAttribute("data-has-inline-styles") && i.removeAttribute("data-has-inline-styles"), r.push(u);
    }
    return r;
  });
}
const Bd = ne($({}, X), { _c: /* @__PURE__ */ new Map() }), _s = (e) => B(void 0, null, function* () {
  var n, r, i;
  let t = yield (n = X.getOffsetParent) == null ? void 0 : n.call(X, e);
  return (yield (r = X.isElement) == null ? void 0 : r.call(X, t)) || (t = (yield (i = X.getDocumentElement) == null ? void 0 : i.call(X, e)) || window.document.documentElement), t;
}), Ud = (e, t) => {
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
}, Hd = (e, t) => {
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
}, zi = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return "y";
    case "left":
    case "right":
      return "x";
  }
  return null;
}, Wd = (e) => {
  switch (e) {
    case "x":
      return "width";
    case "y":
      return "height";
  }
  return null;
}, Mi = (e) => je(e, "display") === "inline", Ii = (e, t) => (t === "x" ? ["border-left-width", "border-right-width"] : ["border-top-width", "border-bottom-width"]).reduce(
  (r, i) => r + parseInt(je(e, i), 10),
  0
) || 0, Ft = (e, t) => parseInt(je(e, `margin-${t}`), 10) || 0, qd = (e) => ({
  top: Ft(e, "top"),
  right: Ft(e, "right"),
  bottom: Ft(e, "bottom"),
  left: Ft(e, "left")
}), Ri = (a) => B(void 0, [a], function* ({
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
    if (!mn(t))
      return o;
    let l;
    switch (i) {
      case "width":
      case "height":
        l = i;
        break;
      default: {
        let s = !1;
        const c = je(e, "writing-mode");
        s = c.startsWith("vertical-") || c.startsWith("sideways-"), l = Hd(i, s);
      }
    }
    return l ? `${n[l]}px` : o;
  }
  if (r !== void 0) {
    let l, s;
    const c = zi(t);
    if (!($t(t) && c && (!$t(r) || c === zi(r))))
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
          const g = (yield (u = X.isRTL) == null ? void 0 : u.call(X, e)) || !1;
          l = Ud(r, g);
        }
    }
    const h = typeof l == "number" && !Number.isNaN(l), d = Wd(c);
    if (h && d) {
      (t === "bottom" || t === "right") && (s = yield _s(e));
      let g = n[c] + n[d] * (l / 100);
      switch (t) {
        case "bottom": {
          if (!s)
            break;
          let S = s.clientHeight;
          if (S === 0 && Mi(s)) {
            const k = Ii(s, c);
            S = s.offsetHeight - k;
          }
          g = S - g;
          break;
        }
        case "right": {
          if (!s)
            break;
          let S = s.clientWidth;
          if (S === 0 && Mi(s)) {
            const k = Ii(s, c);
            S = s.offsetWidth - k;
          }
          g = S - g;
          break;
        }
      }
      return `${g}px`;
    }
  }
  return o;
});
function Vd(e, t = !1) {
  return B(this, null, function* () {
    const n = document.documentElement;
    for (const [r, i] of Object.entries(e))
      for (const o of i) {
        const a = o.anchorEl, u = o.targetEl;
        if (a && u)
          Wi(
            a,
            u,
            () => B(this, null, function* () {
              const l = yield X.getElementRects({
                reference: a,
                floating: u,
                strategy: "absolute"
              }), s = yield Ri({
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
          const l = yield Ri({
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
function Gd(e, t, n = !1) {
  return B(this, null, function* () {
    if (!t.length)
      return;
    const r = document.querySelectorAll(e);
    for (const i of r) {
      let o = !1;
      const a = yield _s(i);
      Wi(
        i,
        i,
        () => B(this, null, function* () {
          if (!o) {
            o = !0;
            for (const [u, { uuid: l }] of t.entries()) {
              if (i.setAttribute("data-anchor-polyfill", l), u === t.length - 1) {
                o = !1;
                break;
              }
              const s = yield X.getElementRects({
                reference: i,
                floating: i,
                strategy: "absolute"
              }), c = yield ra(
                {
                  x: i.offsetLeft,
                  y: i.offsetTop,
                  platform: Bd,
                  rects: s,
                  elements: { floating: i },
                  strategy: "absolute"
                },
                {
                  boundary: a,
                  rootBoundary: "document",
                  padding: qd(i)
                }
              );
              if (Object.values(c).every((h) => h <= 0)) {
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
function Kd(e, t = !1) {
  return B(this, null, function* () {
    var n, r;
    for (const i of Object.values(e))
      yield Vd((n = i.declarations) != null ? n : {}, t);
    for (const [i, o] of Object.entries(e))
      yield Gd(
        i,
        (r = o.fallbacks) != null ? r : [],
        t
      );
  });
}
function om(e) {
  return B(this, null, function* () {
    const t = e === void 0 ? !!window.UPDATE_ANCHOR_ON_ANIMATION_FRAME : e;
    let n = yield Fd();
    (yield Id(n)) && (n = yield Pi(n));
    const { rules: i, inlineStyles: o } = yield zd(n);
    return Object.values(i).length && (yield Pi(n, o, !0), yield Kd(i, t)), i;
  });
}
export {
  om as default
};
//# sourceMappingURL=css-anchor-positioning-fn.js.map
