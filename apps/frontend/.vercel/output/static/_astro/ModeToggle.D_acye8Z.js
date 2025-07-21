import { j as y, c as fn } from './utils.BYJ6mHyy.js';
import { r as a, R as dn, g as Ur, a as le } from './index.CqJmc5Mb.js';
import { c as Ve, u as K, a as pn, B as Kr } from './button.BF480X0V.js';
import { r as Gr } from './index.DN5WaTab.js';
import { c as mn } from './createLucideIcon.BKEndsVH.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hr = [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]],
  zr = mn('moon', Hr);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vr = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  Yr = mn('sun', Vr);
function O(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function _e(e, t = []) {
  let n = [];
  function r(i, s) {
    const c = a.createContext(s),
      d = n.length;
    n = [...n, s];
    const f = (u) => {
      const { scope: m, children: h, ...g } = u,
        p = m?.[e]?.[d] || c,
        v = a.useMemo(() => g, Object.values(g));
      return y.jsx(p.Provider, { value: v, children: h });
    };
    f.displayName = i + 'Provider';
    function l(u, m) {
      const h = m?.[e]?.[d] || c,
        g = a.useContext(h);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [f, l];
  }
  const o = () => {
    const i = n.map((s) => a.createContext(s));
    return function (c) {
      const d = c?.[e] || i;
      return a.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: d } }), [c, d]);
    };
  };
  return ((o.scopeName = e), [r, Xr(o, ...t)]);
}
function Xr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((c, { useScope: d, scopeName: f }) => {
        const u = d(i)[`__scope${f}`];
        return { ...c, ...u };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var ie = globalThis?.document ? a.useLayoutEffect : () => {},
  qr = dn[' useInsertionEffect '.trim().toString()] || ie;
function hn({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = Zr({ defaultProp: t, onChange: n }),
    c = e !== void 0,
    d = c ? e : o;
  {
    const l = a.useRef(e !== void 0);
    a.useEffect(() => {
      const u = l.current;
      (u !== c &&
        console.warn(
          `${r} is changing from ${u ? 'controlled' : 'uncontrolled'} to ${c ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (l.current = c));
    }, [c, r]);
  }
  const f = a.useCallback(
    (l) => {
      if (c) {
        const u = Qr(l) ? l(e) : l;
        u !== e && s.current?.(u);
      } else i(l);
    },
    [c, e, i, s]
  );
  return [d, f];
}
function Zr({ defaultProp: e, onChange: t }) {
  const [n, r] = a.useState(e),
    o = a.useRef(n),
    i = a.useRef(t);
  return (
    qr(() => {
      i.current = t;
    }, [t]),
    a.useEffect(() => {
      o.current !== n && (i.current?.(n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function Qr(e) {
  return typeof e == 'function';
}
var Mt = Gr();
const Jr = Ur(Mt);
var eo = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  W = eo.reduce((e, t) => {
    const n = Ve(`Primitive.${t}`),
      r = a.forwardRef((o, i) => {
        const { asChild: s, ...c } = o,
          d = s ? n : t;
        return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), y.jsx(d, { ...c, ref: i }));
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function vn(e, t) {
  e && Mt.flushSync(() => e.dispatchEvent(t));
}
function gn(e) {
  const t = e + 'CollectionProvider',
    [n, r] = _e(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (p) => {
      const { scope: v, children: w } = p,
        E = le.useRef(null),
        x = le.useRef(new Map()).current;
      return y.jsx(o, { scope: v, itemMap: x, collectionRef: E, children: w });
    };
  s.displayName = t;
  const c = e + 'CollectionSlot',
    d = Ve(c),
    f = le.forwardRef((p, v) => {
      const { scope: w, children: E } = p,
        x = i(c, w),
        b = K(v, x.collectionRef);
      return y.jsx(d, { ref: b, children: E });
    });
  f.displayName = c;
  const l = e + 'CollectionItemSlot',
    u = 'data-radix-collection-item',
    m = Ve(l),
    h = le.forwardRef((p, v) => {
      const { scope: w, children: E, ...x } = p,
        b = le.useRef(null),
        C = K(v, b),
        M = i(l, w);
      return (
        le.useEffect(() => (M.itemMap.set(b, { ref: b, ...x }), () => void M.itemMap.delete(b))),
        y.jsx(m, { [u]: '', ref: C, children: E })
      );
    });
  h.displayName = l;
  function g(p) {
    const v = i(e + 'CollectionConsumer', p);
    return le.useCallback(() => {
      const E = v.collectionRef.current;
      if (!E) return [];
      const x = Array.from(E.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort((M, S) => x.indexOf(M.ref.current) - x.indexOf(S.ref.current));
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: s, Slot: f, ItemSlot: h }, g, r];
}
var to = a.createContext(void 0);
function wn(e) {
  const t = a.useContext(to);
  return e || t || 'ltr';
}
function te(e) {
  const t = a.useRef(e);
  return (
    a.useEffect(() => {
      t.current = e;
    }),
    a.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      []
    )
  );
}
function no(e, t = globalThis?.document) {
  const n = te(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r, { capture: !0 }),
      () => t.removeEventListener('keydown', r, { capture: !0 })
    );
  }, [n, t]);
}
var ro = 'DismissableLayer',
  wt = 'dismissableLayer.update',
  oo = 'dismissableLayer.pointerDownOutside',
  io = 'dismissableLayer.focusOutside',
  Kt,
  yn = a.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  xn = a.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: c,
        ...d
      } = e,
      f = a.useContext(yn),
      [l, u] = a.useState(null),
      m = l?.ownerDocument ?? globalThis?.document,
      [, h] = a.useState({}),
      g = K(t, (S) => u(S)),
      p = Array.from(f.layers),
      [v] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      w = p.indexOf(v),
      E = l ? p.indexOf(l) : -1,
      x = f.layersWithOutsidePointerEventsDisabled.size > 0,
      b = E >= w,
      C = ao((S) => {
        const A = S.target,
          T = [...f.branches].some((_) => _.contains(A));
        !b || T || (o?.(S), s?.(S), S.defaultPrevented || c?.());
      }, m),
      M = uo((S) => {
        const A = S.target;
        [...f.branches].some((_) => _.contains(A)) || (i?.(S), s?.(S), S.defaultPrevented || c?.());
      }, m);
    return (
      no((S) => {
        E === f.layers.size - 1 && (r?.(S), !S.defaultPrevented && c && (S.preventDefault(), c()));
      }, m),
      a.useEffect(() => {
        if (l)
          return (
            n &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Kt = m.body.style.pointerEvents), (m.body.style.pointerEvents = 'none')),
              f.layersWithOutsidePointerEventsDisabled.add(l)),
            f.layers.add(l),
            Gt(),
            () => {
              n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Kt);
            }
          );
      }, [l, m, n, f]),
      a.useEffect(
        () => () => {
          l && (f.layers.delete(l), f.layersWithOutsidePointerEventsDisabled.delete(l), Gt());
        },
        [l, f]
      ),
      a.useEffect(() => {
        const S = () => h({});
        return (document.addEventListener(wt, S), () => document.removeEventListener(wt, S));
      }, []),
      y.jsx(W.div, {
        ...d,
        ref: g,
        style: { pointerEvents: x ? (b ? 'auto' : 'none') : void 0, ...e.style },
        onFocusCapture: O(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: O(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: O(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
xn.displayName = ro;
var so = 'DismissableLayerBranch',
  co = a.forwardRef((e, t) => {
    const n = a.useContext(yn),
      r = a.useRef(null),
      o = K(t, r);
    return (
      a.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      y.jsx(W.div, { ...e, ref: o })
    );
  });
co.displayName = so;
function ao(e, t = globalThis?.document) {
  const n = te(e),
    r = a.useRef(!1),
    o = a.useRef(() => {});
  return (
    a.useEffect(() => {
      const i = (c) => {
          if (c.target && !r.current) {
            let d = function () {
              bn(oo, n, f, { discrete: !0 });
            };
            const f = { originalEvent: c };
            c.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = d),
                t.addEventListener('click', o.current, { once: !0 }))
              : d();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', i);
        }, 0);
      return () => {
        (window.clearTimeout(s), t.removeEventListener('pointerdown', i), t.removeEventListener('click', o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function uo(e, t = globalThis?.document) {
  const n = te(e),
    r = a.useRef(!1);
  return (
    a.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && bn(io, n, { originalEvent: i }, { discrete: !1 });
      };
      return (t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o));
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function Gt() {
  const e = new CustomEvent(wt);
  document.dispatchEvent(e);
}
function bn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }), r ? vn(o, i) : o.dispatchEvent(i));
}
var ct = 0;
function lo() {
  a.useEffect(() => {
    const e = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', e[0] ?? Ht()),
      document.body.insertAdjacentElement('beforeend', e[1] ?? Ht()),
      ct++,
      () => {
        (ct === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((t) => t.remove()), ct--);
      }
    );
  }, []);
}
function Ht() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var at = 'focusScope.autoFocusOnMount',
  ut = 'focusScope.autoFocusOnUnmount',
  zt = { bubbles: !1, cancelable: !0 },
  fo = 'FocusScope',
  En = a.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s } = e,
      [c, d] = a.useState(null),
      f = te(o),
      l = te(i),
      u = a.useRef(null),
      m = K(t, (p) => d(p)),
      h = a.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (a.useEffect(() => {
      if (r) {
        let p = function (x) {
            if (h.paused || !c) return;
            const b = x.target;
            c.contains(b) ? (u.current = b) : oe(u.current, { select: !0 });
          },
          v = function (x) {
            if (h.paused || !c) return;
            const b = x.relatedTarget;
            b !== null && (c.contains(b) || oe(u.current, { select: !0 }));
          },
          w = function (x) {
            if (document.activeElement === document.body) for (const C of x) C.removedNodes.length > 0 && oe(c);
          };
        (document.addEventListener('focusin', p), document.addEventListener('focusout', v));
        const E = new MutationObserver(w);
        return (
          c && E.observe(c, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', p), document.removeEventListener('focusout', v), E.disconnect());
          }
        );
      }
    }, [r, c, h.paused]),
      a.useEffect(() => {
        if (c) {
          Yt.add(h);
          const p = document.activeElement;
          if (!c.contains(p)) {
            const w = new CustomEvent(at, zt);
            (c.addEventListener(at, f),
              c.dispatchEvent(w),
              w.defaultPrevented || (po(wo(Cn(c)), { select: !0 }), document.activeElement === p && oe(c)));
          }
          return () => {
            (c.removeEventListener(at, f),
              setTimeout(() => {
                const w = new CustomEvent(ut, zt);
                (c.addEventListener(ut, l),
                  c.dispatchEvent(w),
                  w.defaultPrevented || oe(p ?? document.body, { select: !0 }),
                  c.removeEventListener(ut, l),
                  Yt.remove(h));
              }, 0));
          };
        }
      }, [c, f, l, h]));
    const g = a.useCallback(
      (p) => {
        if ((!n && !r) || h.paused) return;
        const v = p.key === 'Tab' && !p.altKey && !p.ctrlKey && !p.metaKey,
          w = document.activeElement;
        if (v && w) {
          const E = p.currentTarget,
            [x, b] = mo(E);
          x && b
            ? !p.shiftKey && w === b
              ? (p.preventDefault(), n && oe(x, { select: !0 }))
              : p.shiftKey && w === x && (p.preventDefault(), n && oe(b, { select: !0 }))
            : w === E && p.preventDefault();
        }
      },
      [n, r, h.paused]
    );
    return y.jsx(W.div, { tabIndex: -1, ...s, ref: m, onKeyDown: g });
  });
En.displayName = fo;
function po(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((oe(r, { select: t }), document.activeElement !== n)) return;
}
function mo(e) {
  const t = Cn(e),
    n = Vt(t, e),
    r = Vt(t.reverse(), e);
  return [n, r];
}
function Cn(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vt(e, t) {
  for (const n of e) if (!ho(n, { upTo: t })) return n;
}
function ho(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function vo(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && vo(e) && t && e.select());
  }
}
var Yt = go();
function go() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && n?.pause(), (e = Xt(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Xt(e, t)), e[0]?.resume());
    },
  };
}
function Xt(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function wo(e) {
  return e.filter((t) => t.tagName !== 'A');
}
var yo = dn[' useId '.trim().toString()] || (() => {}),
  xo = 0;
function yt(e) {
  const [t, n] = a.useState(yo());
  return (
    ie(() => {
      n((r) => r ?? String(xo++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
const bo = ['top', 'right', 'bottom', 'left'],
  se = Math.min,
  G = Math.max,
  Ye = Math.round,
  je = Math.floor,
  Q = (e) => ({ x: e, y: e }),
  Eo = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Co = { start: 'end', end: 'start' };
function xt(e, t, n) {
  return G(e, se(t, n));
}
function ne(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function re(e) {
  return e.split('-')[0];
}
function xe(e) {
  return e.split('-')[1];
}
function At(e) {
  return e === 'x' ? 'y' : 'x';
}
function Pt(e) {
  return e === 'y' ? 'height' : 'width';
}
function Z(e) {
  return ['top', 'bottom'].includes(re(e)) ? 'y' : 'x';
}
function Ot(e) {
  return At(Z(e));
}
function So(e, t, n) {
  n === void 0 && (n = !1);
  const r = xe(e),
    o = Ot(e),
    i = Pt(o);
  let s = o === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
  return (t.reference[i] > t.floating[i] && (s = Xe(s)), [s, Xe(s)]);
}
function Ro(e) {
  const t = Xe(e);
  return [bt(e), t, bt(t)];
}
function bt(e) {
  return e.replace(/start|end/g, (t) => Co[t]);
}
function Mo(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    i = ['top', 'bottom'],
    s = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? i : s;
    default:
      return [];
  }
}
function Ao(e, t, n, r) {
  const o = xe(e);
  let i = Mo(re(e), n === 'start', r);
  return (o && ((i = i.map((s) => s + '-' + o)), t && (i = i.concat(i.map(bt)))), i);
}
function Xe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Eo[t]);
}
function Po(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Sn(e) {
  return typeof e != 'number' ? Po(e) : { top: e, right: e, bottom: e, left: e };
}
function qe(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function qt(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Z(t),
    s = Ot(t),
    c = Pt(s),
    d = re(t),
    f = i === 'y',
    l = r.x + r.width / 2 - o.width / 2,
    u = r.y + r.height / 2 - o.height / 2,
    m = r[c] / 2 - o[c] / 2;
  let h;
  switch (d) {
    case 'top':
      h = { x: l, y: r.y - o.height };
      break;
    case 'bottom':
      h = { x: l, y: r.y + r.height };
      break;
    case 'right':
      h = { x: r.x + r.width, y: u };
      break;
    case 'left':
      h = { x: r.x - o.width, y: u };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (xe(t)) {
    case 'start':
      h[s] -= m * (n && f ? -1 : 1);
      break;
    case 'end':
      h[s] += m * (n && f ? -1 : 1);
      break;
  }
  return h;
}
const Oo = async (e, t, n) => {
  const { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: s } = n,
    c = i.filter(Boolean),
    d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: l, y: u } = qt(f, r, d),
    m = r,
    h = {},
    g = 0;
  for (let p = 0; p < c.length; p++) {
    const { name: v, fn: w } = c[p],
      {
        x: E,
        y: x,
        data: b,
        reset: C,
      } = await w({
        x: l,
        y: u,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: h,
        rects: f,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((l = E ?? l),
      (u = x ?? u),
      (h = { ...h, [v]: { ...h[v], ...b } }),
      C &&
        g <= 50 &&
        (g++,
        typeof C == 'object' &&
          (C.placement && (m = C.placement),
          C.rects &&
            (f = C.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: o }) : C.rects),
          ({ x: l, y: u } = qt(f, m, d))),
        (p = -1)));
  }
  return { x: l, y: u, placement: m, strategy: o, middlewareData: h };
};
async function Me(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: c, strategy: d } = e,
    {
      boundary: f = 'clippingAncestors',
      rootBoundary: l = 'viewport',
      elementContext: u = 'floating',
      altBoundary: m = !1,
      padding: h = 0,
    } = ne(t, e),
    g = Sn(h),
    v = c[m ? (u === 'floating' ? 'reference' : 'floating') : u],
    w = qe(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n
            ? v
            : v.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating))),
        boundary: f,
        rootBoundary: l,
        strategy: d,
      })
    ),
    E = u === 'floating' ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
    x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = qe(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: E,
            offsetParent: x,
            strategy: d,
          })
        : E
    );
  return {
    top: (w.top - C.top + g.top) / b.y,
    bottom: (C.bottom - w.bottom + g.bottom) / b.y,
    left: (w.left - C.left + g.left) / b.x,
    right: (C.right - w.right + g.right) / b.x,
  };
}
const _o = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: s, elements: c, middlewareData: d } = t,
        { element: f, padding: l = 0 } = ne(e, t) || {};
      if (f == null) return {};
      const u = Sn(l),
        m = { x: n, y: r },
        h = Ot(o),
        g = Pt(h),
        p = await s.getDimensions(f),
        v = h === 'y',
        w = v ? 'top' : 'left',
        E = v ? 'bottom' : 'right',
        x = v ? 'clientHeight' : 'clientWidth',
        b = i.reference[g] + i.reference[h] - m[h] - i.floating[g],
        C = m[h] - i.reference[h],
        M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
      let S = M ? M[x] : 0;
      (!S || !(await (s.isElement == null ? void 0 : s.isElement(M)))) && (S = c.floating[x] || i.floating[g]);
      const A = b / 2 - C / 2,
        T = S / 2 - p[g] / 2 - 1,
        _ = se(u[w], T),
        k = se(u[E], T),
        L = _,
        N = S - p[g] - k,
        I = S / 2 - p[g] / 2 + A,
        $ = xt(L, I, N),
        D = !d.arrow && xe(o) != null && I !== $ && i.reference[g] / 2 - (I < L ? _ : k) - p[g] / 2 < 0,
        F = D ? (I < L ? I - L : I - N) : 0;
      return { [h]: m[h] + F, data: { [h]: $, centerOffset: I - $ - F, ...(D && { alignmentOffset: F }) }, reset: D };
    },
  }),
  Do = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, middlewareData: i, rects: s, initialPlacement: c, platform: d, elements: f } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: m,
              fallbackStrategy: h = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: p = !0,
              ...v
            } = ne(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const w = re(o),
            E = Z(c),
            x = re(c) === c,
            b = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)),
            C = m || (x || !p ? [Xe(c)] : Ro(c)),
            M = g !== 'none';
          !m && M && C.push(...Ao(c, p, g, b));
          const S = [c, ...C],
            A = await Me(t, v),
            T = [];
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((l && T.push(A[w]), u)) {
            const I = So(o, s, b);
            T.push(A[I[0]], A[I[1]]);
          }
          if (((_ = [..._, { placement: o, overflows: T }]), !T.every((I) => I <= 0))) {
            var k, L;
            const I = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1,
              $ = S[I];
            if (
              $ &&
              (!(u === 'alignment' ? E !== Z($) : !1) || _.every((P) => P.overflows[0] > 0 && Z(P.placement) === E))
            )
              return { data: { index: I, overflows: _ }, reset: { placement: $ } };
            let D =
              (L = _.filter((F) => F.overflows[0] <= 0).sort((F, P) => F.overflows[1] - P.overflows[1])[0]) == null
                ? void 0
                : L.placement;
            if (!D)
              switch (h) {
                case 'bestFit': {
                  var N;
                  const F =
                    (N = _.filter((P) => {
                      if (M) {
                        const R = Z(P.placement);
                        return R === E || R === 'y';
                      }
                      return !0;
                    })
                      .map((P) => [P.placement, P.overflows.filter((R) => R > 0).reduce((R, B) => R + B, 0)])
                      .sort((P, R) => P[1] - R[1])[0]) == null
                      ? void 0
                      : N[0];
                  F && (D = F);
                  break;
                }
                case 'initialPlacement':
                  D = c;
                  break;
              }
            if (o !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
function Zt(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Qt(e) {
  return bo.some((t) => e[t] >= 0);
}
const To = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = ne(e, t);
        switch (r) {
          case 'referenceHidden': {
            const i = await Me(t, { ...o, elementContext: 'reference' }),
              s = Zt(i, n.reference);
            return { data: { referenceHiddenOffsets: s, referenceHidden: Qt(s) } };
          }
          case 'escaped': {
            const i = await Me(t, { ...o, altBoundary: !0 }),
              s = Zt(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Qt(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Io(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = re(n),
    c = xe(n),
    d = Z(n) === 'y',
    f = ['left', 'top'].includes(s) ? -1 : 1,
    l = i && d ? -1 : 1,
    u = ne(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: g,
  } = typeof u == 'number'
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return (
    c && typeof g == 'number' && (h = c === 'end' ? g * -1 : g),
    d ? { x: h * l, y: m * f } : { x: m * f, y: h * l }
  );
}
const No = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: c } = t,
            d = await Io(t, e);
          return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset
            ? {}
            : { x: o + d.x, y: i + d.y, data: { ...d, placement: s } };
        },
      }
    );
  },
  ko = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (v) => {
                  let { x: w, y: E } = v;
                  return { x: w, y: E };
                },
              },
              ...d
            } = ne(e, t),
            f = { x: n, y: r },
            l = await Me(t, d),
            u = Z(re(o)),
            m = At(u);
          let h = f[m],
            g = f[u];
          if (i) {
            const v = m === 'y' ? 'top' : 'left',
              w = m === 'y' ? 'bottom' : 'right',
              E = h + l[v],
              x = h - l[w];
            h = xt(E, h, x);
          }
          if (s) {
            const v = u === 'y' ? 'top' : 'left',
              w = u === 'y' ? 'bottom' : 'right',
              E = g + l[v],
              x = g - l[w];
            g = xt(E, g, x);
          }
          const p = c.fn({ ...t, [m]: h, [u]: g });
          return { ...p, data: { x: p.x - n, y: p.y - r, enabled: { [m]: i, [u]: s } } };
        },
      }
    );
  },
  Lo = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: c = 0, mainAxis: d = !0, crossAxis: f = !0 } = ne(e, t),
            l = { x: n, y: r },
            u = Z(o),
            m = At(u);
          let h = l[m],
            g = l[u];
          const p = ne(c, t),
            v = typeof p == 'number' ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
          if (d) {
            const x = m === 'y' ? 'height' : 'width',
              b = i.reference[m] - i.floating[x] + v.mainAxis,
              C = i.reference[m] + i.reference[x] - v.mainAxis;
            h < b ? (h = b) : h > C && (h = C);
          }
          if (f) {
            var w, E;
            const x = m === 'y' ? 'width' : 'height',
              b = ['top', 'left'].includes(re(o)),
              C =
                i.reference[u] -
                i.floating[x] +
                ((b && ((w = s.offset) == null ? void 0 : w[u])) || 0) +
                (b ? 0 : v.crossAxis),
              M =
                i.reference[u] +
                i.reference[x] +
                (b ? 0 : ((E = s.offset) == null ? void 0 : E[u]) || 0) -
                (b ? v.crossAxis : 0);
            g < C ? (g = C) : g > M && (g = M);
          }
          return { [m]: h, [u]: g };
        },
      }
    );
  },
  Fo = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: c } = t,
            { apply: d = () => {}, ...f } = ne(e, t),
            l = await Me(t, f),
            u = re(o),
            m = xe(o),
            h = Z(o) === 'y',
            { width: g, height: p } = i.floating;
          let v, w;
          u === 'top' || u === 'bottom'
            ? ((v = u),
              (w =
                m === ((await (s.isRTL == null ? void 0 : s.isRTL(c.floating))) ? 'start' : 'end') ? 'left' : 'right'))
            : ((w = u), (v = m === 'end' ? 'top' : 'bottom'));
          const E = p - l.top - l.bottom,
            x = g - l.left - l.right,
            b = se(p - l[v], E),
            C = se(g - l[w], x),
            M = !t.middlewareData.shift;
          let S = b,
            A = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (S = E),
            M && !m)
          ) {
            const _ = G(l.left, 0),
              k = G(l.right, 0),
              L = G(l.top, 0),
              N = G(l.bottom, 0);
            h
              ? (A = g - 2 * (_ !== 0 || k !== 0 ? _ + k : G(l.left, l.right)))
              : (S = p - 2 * (L !== 0 || N !== 0 ? L + N : G(l.top, l.bottom)));
          }
          await d({ ...t, availableWidth: A, availableHeight: S });
          const T = await s.getDimensions(c.floating);
          return g !== T.width || p !== T.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function et() {
  return typeof window < 'u';
}
function be(e) {
  return Rn(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function H(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ee(e) {
  var t;
  return (t = (Rn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rn(e) {
  return et() ? e instanceof Node || e instanceof H(e).Node : !1;
}
function V(e) {
  return et() ? e instanceof Element || e instanceof H(e).Element : !1;
}
function J(e) {
  return et() ? e instanceof HTMLElement || e instanceof H(e).HTMLElement : !1;
}
function Jt(e) {
  return !et() || typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof H(e).ShadowRoot;
}
function De(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o);
}
function jo(e) {
  return ['table', 'td', 'th'].includes(be(e));
}
function tt(e) {
  return [':popover-open', ':modal'].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _t(e) {
  const t = Dt(),
    n = V(e) ? Y(e) : e;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((r) => (n[r] ? n[r] !== 'none' : !1)) ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((r) =>
      (n.willChange || '').includes(r)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r))
  );
}
function $o(e) {
  let t = ce(e);
  for (; J(t) && !ye(t); ) {
    if (_t(t)) return t;
    if (tt(t)) return null;
    t = ce(t);
  }
  return null;
}
function Dt() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function ye(e) {
  return ['html', 'body', '#document'].includes(be(e));
}
function Y(e) {
  return H(e).getComputedStyle(e);
}
function nt(e) {
  return V(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ce(e) {
  if (be(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (Jt(e) && e.host) || ee(e);
  return Jt(t) ? t.host : t;
}
function Mn(e) {
  const t = ce(e);
  return ye(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : J(t) && De(t) ? t : Mn(t);
}
function Ae(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = Mn(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = H(o);
  if (i) {
    const c = Et(s);
    return t.concat(s, s.visualViewport || [], De(o) ? o : [], c && n ? Ae(c) : []);
  }
  return t.concat(o, Ae(o, [], n));
}
function Et(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function An(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = J(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    c = Ye(n) !== i || Ye(r) !== s;
  return (c && ((n = i), (r = s)), { width: n, height: r, $: c });
}
function Tt(e) {
  return V(e) ? e : e.contextElement;
}
function ge(e) {
  const t = Tt(e);
  if (!J(t)) return Q(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = An(t);
  let s = (i ? Ye(n.width) : n.width) / r,
    c = (i ? Ye(n.height) : n.height) / o;
  return ((!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), { x: s, y: c });
}
const Bo = Q(0);
function Pn(e) {
  const t = H(e);
  return !Dt() || !t.visualViewport ? Bo : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Wo(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== H(e)) ? !1 : t);
}
function fe(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = Tt(e);
  let s = Q(1);
  t && (r ? V(r) && (s = ge(r)) : (s = ge(e)));
  const c = Wo(i, n, r) ? Pn(i) : Q(0);
  let d = (o.left + c.x) / s.x,
    f = (o.top + c.y) / s.y,
    l = o.width / s.x,
    u = o.height / s.y;
  if (i) {
    const m = H(i),
      h = r && V(r) ? H(r) : r;
    let g = m,
      p = Et(g);
    for (; p && r && h !== g; ) {
      const v = ge(p),
        w = p.getBoundingClientRect(),
        E = Y(p),
        x = w.left + (p.clientLeft + parseFloat(E.paddingLeft)) * v.x,
        b = w.top + (p.clientTop + parseFloat(E.paddingTop)) * v.y;
      ((d *= v.x), (f *= v.y), (l *= v.x), (u *= v.y), (d += x), (f += b), (g = H(p)), (p = Et(g)));
    }
  }
  return qe({ width: l, height: u, x: d, y: f });
}
function It(e, t) {
  const n = nt(e).scrollLeft;
  return t ? t.left + n : fe(ee(e)).left + n;
}
function On(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : It(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function Uo(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === 'fixed',
    s = ee(r),
    c = t ? tt(t.floating) : !1;
  if (r === s || (c && i)) return n;
  let d = { scrollLeft: 0, scrollTop: 0 },
    f = Q(1);
  const l = Q(0),
    u = J(r);
  if ((u || (!u && !i)) && ((be(r) !== 'body' || De(s)) && (d = nt(r)), J(r))) {
    const h = fe(r);
    ((f = ge(r)), (l.x = h.x + r.clientLeft), (l.y = h.y + r.clientTop));
  }
  const m = s && !u && !i ? On(s, d, !0) : Q(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - d.scrollLeft * f.x + l.x + m.x,
    y: n.y * f.y - d.scrollTop * f.y + l.y + m.y,
  };
}
function Ko(e) {
  return Array.from(e.getClientRects());
}
function Go(e) {
  const t = ee(e),
    n = nt(e),
    r = e.ownerDocument.body,
    o = G(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = G(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + It(e);
  const c = -n.scrollTop;
  return (Y(r).direction === 'rtl' && (s += G(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: c });
}
function Ho(e, t) {
  const n = H(e),
    r = ee(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    c = 0,
    d = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    const f = Dt();
    (!f || (f && t === 'fixed')) && ((c = o.offsetLeft), (d = o.offsetTop));
  }
  return { width: i, height: s, x: c, y: d };
}
function zo(e, t) {
  const n = fe(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = J(e) ? ge(e) : Q(1),
    s = e.clientWidth * i.x,
    c = e.clientHeight * i.y,
    d = o * i.x,
    f = r * i.y;
  return { width: s, height: c, x: d, y: f };
}
function en(e, t, n) {
  let r;
  if (t === 'viewport') r = Ho(e, n);
  else if (t === 'document') r = Go(ee(e));
  else if (V(t)) r = zo(t, n);
  else {
    const o = Pn(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return qe(r);
}
function _n(e, t) {
  const n = ce(e);
  return n === t || !V(n) || ye(n) ? !1 : Y(n).position === 'fixed' || _n(n, t);
}
function Vo(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ae(e, [], !1).filter((c) => V(c) && be(c) !== 'body'),
    o = null;
  const i = Y(e).position === 'fixed';
  let s = i ? ce(e) : e;
  for (; V(s) && !ye(s); ) {
    const c = Y(s),
      d = _t(s);
    (!d && c.position === 'fixed' && (o = null),
      (
        i
          ? !d && !o
          : (!d && c.position === 'static' && !!o && ['absolute', 'fixed'].includes(o.position)) ||
            (De(s) && !d && _n(e, s))
      )
        ? (r = r.filter((l) => l !== s))
        : (o = c),
      (s = ce(s)));
  }
  return (t.set(e, r), r);
}
function Yo(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [...(n === 'clippingAncestors' ? (tt(t) ? [] : Vo(t, this._c)) : [].concat(n)), r],
    c = s[0],
    d = s.reduce(
      (f, l) => {
        const u = en(t, l, o);
        return (
          (f.top = G(u.top, f.top)),
          (f.right = se(u.right, f.right)),
          (f.bottom = se(u.bottom, f.bottom)),
          (f.left = G(u.left, f.left)),
          f
        );
      },
      en(t, c, o)
    );
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}
function Xo(e) {
  const { width: t, height: n } = An(e);
  return { width: t, height: n };
}
function qo(e, t, n) {
  const r = J(t),
    o = ee(t),
    i = n === 'fixed',
    s = fe(e, !0, i, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const d = Q(0);
  function f() {
    d.x = It(o);
  }
  if (r || (!r && !i))
    if (((be(t) !== 'body' || De(o)) && (c = nt(t)), r)) {
      const h = fe(t, !0, i, t);
      ((d.x = h.x + t.clientLeft), (d.y = h.y + t.clientTop));
    } else o && f();
  i && !r && o && f();
  const l = o && !r && !i ? On(o, c) : Q(0),
    u = s.left + c.scrollLeft - d.x - l.x,
    m = s.top + c.scrollTop - d.y - l.y;
  return { x: u, y: m, width: s.width, height: s.height };
}
function lt(e) {
  return Y(e).position === 'static';
}
function tn(e, t) {
  if (!J(e) || Y(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ee(e) === n && (n = n.ownerDocument.body), n);
}
function Dn(e, t) {
  const n = H(e);
  if (tt(e)) return n;
  if (!J(e)) {
    let o = ce(e);
    for (; o && !ye(o); ) {
      if (V(o) && !lt(o)) return o;
      o = ce(o);
    }
    return n;
  }
  let r = tn(e, t);
  for (; r && jo(r) && lt(r); ) r = tn(r, t);
  return r && ye(r) && lt(r) && !_t(r) ? n : r || $o(e) || n;
}
const Zo = async function (e) {
  const t = this.getOffsetParent || Dn,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: qo(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Qo(e) {
  return Y(e).direction === 'rtl';
}
const Jo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uo,
  getDocumentElement: ee,
  getClippingRect: Yo,
  getOffsetParent: Dn,
  getElementRects: Zo,
  getClientRects: Ko,
  getDimensions: Xo,
  getScale: ge,
  isElement: V,
  isRTL: Qo,
};
function Tn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ei(e, t) {
  let n = null,
    r;
  const o = ee(e);
  function i() {
    var c;
    (clearTimeout(r), (c = n) == null || c.disconnect(), (n = null));
  }
  function s(c, d) {
    (c === void 0 && (c = !1), d === void 0 && (d = 1), i());
    const f = e.getBoundingClientRect(),
      { left: l, top: u, width: m, height: h } = f;
    if ((c || t(), !m || !h)) return;
    const g = je(u),
      p = je(o.clientWidth - (l + m)),
      v = je(o.clientHeight - (u + h)),
      w = je(l),
      x = { rootMargin: -g + 'px ' + -p + 'px ' + -v + 'px ' + -w + 'px', threshold: G(0, se(1, d)) || 1 };
    let b = !0;
    function C(M) {
      const S = M[0].intersectionRatio;
      if (S !== d) {
        if (!b) return s();
        S
          ? s(!1, S)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (S === 1 && !Tn(f, e.getBoundingClientRect()) && s(), (b = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function ti(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: d = !1,
    } = r,
    f = Tt(e),
    l = o || i ? [...(f ? Ae(f) : []), ...Ae(t)] : [];
  l.forEach((w) => {
    (o && w.addEventListener('scroll', n, { passive: !0 }), i && w.addEventListener('resize', n));
  });
  const u = f && c ? ei(f, n) : null;
  let m = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((w) => {
      let [E] = w;
      (E &&
        E.target === f &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var x;
          (x = h) == null || x.observe(t);
        }))),
        n());
    })),
    f && !d && h.observe(f),
    h.observe(t));
  let g,
    p = d ? fe(e) : null;
  d && v();
  function v() {
    const w = fe(e);
    (p && !Tn(p, w) && n(), (p = w), (g = requestAnimationFrame(v)));
  }
  return (
    n(),
    () => {
      var w;
      (l.forEach((E) => {
        (o && E.removeEventListener('scroll', n), i && E.removeEventListener('resize', n));
      }),
        u?.(),
        (w = h) == null || w.disconnect(),
        (h = null),
        d && cancelAnimationFrame(g));
    }
  );
}
const ni = No,
  ri = ko,
  oi = Do,
  ii = Fo,
  si = To,
  nn = _o,
  ci = Lo,
  ai = (e, t, n) => {
    const r = new Map(),
      o = { platform: Jo, ...n },
      i = { ...o.platform, _c: r };
    return Oo(e, t, { ...o, platform: i });
  };
var ui = typeof document < 'u',
  li = function () {},
  Ge = ui ? a.useLayoutEffect : li;
function Ze(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ze(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === '_owner' && e.$$typeof) && !Ze(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function In(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rn(e, t) {
  const n = In(e);
  return Math.round(t * n) / n;
}
function ft(e) {
  const t = a.useRef(e);
  return (
    Ge(() => {
      t.current = e;
    }),
    t
  );
}
function fi(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: c = !0,
      whileElementsMounted: d,
      open: f,
    } = e,
    [l, u] = a.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [m, h] = a.useState(r);
  Ze(m, r) || h(r);
  const [g, p] = a.useState(null),
    [v, w] = a.useState(null),
    E = a.useCallback((P) => {
      P !== M.current && ((M.current = P), p(P));
    }, []),
    x = a.useCallback((P) => {
      P !== S.current && ((S.current = P), w(P));
    }, []),
    b = i || g,
    C = s || v,
    M = a.useRef(null),
    S = a.useRef(null),
    A = a.useRef(l),
    T = d != null,
    _ = ft(d),
    k = ft(o),
    L = ft(f),
    N = a.useCallback(() => {
      if (!M.current || !S.current) return;
      const P = { placement: t, strategy: n, middleware: m };
      (k.current && (P.platform = k.current),
        ai(M.current, S.current, P).then((R) => {
          const B = { ...R, isPositioned: L.current !== !1 };
          I.current &&
            !Ze(A.current, B) &&
            ((A.current = B),
            Mt.flushSync(() => {
              u(B);
            }));
        }));
    }, [m, t, n, k, L]);
  Ge(() => {
    f === !1 && A.current.isPositioned && ((A.current.isPositioned = !1), u((P) => ({ ...P, isPositioned: !1 })));
  }, [f]);
  const I = a.useRef(!1);
  (Ge(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    Ge(() => {
      if ((b && (M.current = b), C && (S.current = C), b && C)) {
        if (_.current) return _.current(b, C, N);
        N();
      }
    }, [b, C, N, _, T]));
  const $ = a.useMemo(() => ({ reference: M, floating: S, setReference: E, setFloating: x }), [E, x]),
    D = a.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    F = a.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!D.floating) return P;
      const R = rn(D.floating, l.x),
        B = rn(D.floating, l.y);
      return c
        ? {
            ...P,
            transform: 'translate(' + R + 'px, ' + B + 'px)',
            ...(In(D.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: R, top: B };
    }, [n, c, D.floating, l.x, l.y]);
  return a.useMemo(() => ({ ...l, update: N, refs: $, elements: D, floatingStyles: F }), [l, N, $, D, F]);
}
const di = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? nn({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? nn({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  pi = (e, t) => ({ ...ni(e), options: [e, t] }),
  mi = (e, t) => ({ ...ri(e), options: [e, t] }),
  hi = (e, t) => ({ ...ci(e), options: [e, t] }),
  vi = (e, t) => ({ ...oi(e), options: [e, t] }),
  gi = (e, t) => ({ ...ii(e), options: [e, t] }),
  wi = (e, t) => ({ ...si(e), options: [e, t] }),
  yi = (e, t) => ({ ...di(e), options: [e, t] });
var xi = 'Arrow',
  Nn = a.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return y.jsx(W.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : y.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
Nn.displayName = xi;
var bi = Nn;
function Ei(e) {
  const [t, n] = a.useState(void 0);
  return (
    ie(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, c;
          if ('borderBoxSize' in i) {
            const d = i.borderBoxSize,
              f = Array.isArray(d) ? d[0] : d;
            ((s = f.inlineSize), (c = f.blockSize));
          } else ((s = e.offsetWidth), (c = e.offsetHeight));
          n({ width: s, height: c });
        });
        return (r.observe(e, { box: 'border-box' }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Nt = 'Popper',
  [kn, Ln] = _e(Nt),
  [Ci, Fn] = kn(Nt),
  jn = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = a.useState(null);
    return y.jsx(Ci, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
jn.displayName = Nt;
var $n = 'PopperAnchor',
  Bn = a.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Fn($n, n),
      s = a.useRef(null),
      c = K(t, s);
    return (
      a.useEffect(() => {
        i.onAnchorChange(r?.current || s.current);
      }),
      r ? null : y.jsx(W.div, { ...o, ref: c })
    );
  });
Bn.displayName = $n;
var kt = 'PopperContent',
  [Si, Ri] = kn(kt),
  Wn = a.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = 'bottom',
        sideOffset: o = 0,
        align: i = 'center',
        alignOffset: s = 0,
        arrowPadding: c = 0,
        avoidCollisions: d = !0,
        collisionBoundary: f = [],
        collisionPadding: l = 0,
        sticky: u = 'partial',
        hideWhenDetached: m = !1,
        updatePositionStrategy: h = 'optimized',
        onPlaced: g,
        ...p
      } = e,
      v = Fn(kt, n),
      [w, E] = a.useState(null),
      x = K(t, (j) => E(j)),
      [b, C] = a.useState(null),
      M = Ei(b),
      S = M?.width ?? 0,
      A = M?.height ?? 0,
      T = r + (i !== 'center' ? '-' + i : ''),
      _ = typeof l == 'number' ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l },
      k = Array.isArray(f) ? f : [f],
      L = k.length > 0,
      N = { padding: _, boundary: k.filter(Ai), altBoundary: L },
      {
        refs: I,
        floatingStyles: $,
        placement: D,
        isPositioned: F,
        middlewareData: P,
      } = fi({
        strategy: 'fixed',
        placement: T,
        whileElementsMounted: (...j) => ti(...j, { animationFrame: h === 'always' }),
        elements: { reference: v.anchor },
        middleware: [
          pi({ mainAxis: o + A, alignmentAxis: s }),
          d && mi({ mainAxis: !0, crossAxis: !1, limiter: u === 'partial' ? hi() : void 0, ...N }),
          d && vi({ ...N }),
          gi({
            ...N,
            apply: ({ elements: j, rects: Se, availableWidth: jr, availableHeight: $r }) => {
              const { width: Br, height: Wr } = Se.reference,
                Fe = j.floating.style;
              (Fe.setProperty('--radix-popper-available-width', `${jr}px`),
                Fe.setProperty('--radix-popper-available-height', `${$r}px`),
                Fe.setProperty('--radix-popper-anchor-width', `${Br}px`),
                Fe.setProperty('--radix-popper-anchor-height', `${Wr}px`));
            },
          }),
          b && yi({ element: b, padding: c }),
          Pi({ arrowWidth: S, arrowHeight: A }),
          m && wi({ strategy: 'referenceHidden', ...N }),
        ],
      }),
      [R, B] = Gn(D),
      X = te(g);
    ie(() => {
      F && X?.();
    }, [F, X]);
    const ae = P.arrow?.x,
      Ee = P.arrow?.y,
      Ce = P.arrow?.centerOffset !== 0,
      [Le, ue] = a.useState();
    return (
      ie(() => {
        w && ue(window.getComputedStyle(w).zIndex);
      }, [w]),
      y.jsx('div', {
        ref: I.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...$,
          transform: F ? $.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: Le,
          '--radix-popper-transform-origin': [P.transformOrigin?.x, P.transformOrigin?.y].join(' '),
          ...(P.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
        },
        dir: e.dir,
        children: y.jsx(Si, {
          scope: n,
          placedSide: R,
          onArrowChange: C,
          arrowX: ae,
          arrowY: Ee,
          shouldHideArrow: Ce,
          children: y.jsx(W.div, {
            'data-side': R,
            'data-align': B,
            ...p,
            ref: x,
            style: { ...p.style, animation: F ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
Wn.displayName = kt;
var Un = 'PopperArrow',
  Mi = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Kn = a.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Ri(Un, r),
      s = Mi[i.placedSide];
    return y.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: y.jsx(bi, { ...o, ref: n, style: { ...o.style, display: 'block' } }),
    });
  });
Kn.displayName = Un;
function Ai(e) {
  return e !== null;
}
var Pi = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t,
      s = o.arrow?.centerOffset !== 0,
      c = s ? 0 : e.arrowWidth,
      d = s ? 0 : e.arrowHeight,
      [f, l] = Gn(n),
      u = { start: '0%', center: '50%', end: '100%' }[l],
      m = (o.arrow?.x ?? 0) + c / 2,
      h = (o.arrow?.y ?? 0) + d / 2;
    let g = '',
      p = '';
    return (
      f === 'bottom'
        ? ((g = s ? u : `${m}px`), (p = `${-d}px`))
        : f === 'top'
          ? ((g = s ? u : `${m}px`), (p = `${r.floating.height + d}px`))
          : f === 'right'
            ? ((g = `${-d}px`), (p = s ? u : `${h}px`))
            : f === 'left' && ((g = `${r.floating.width + d}px`), (p = s ? u : `${h}px`)),
      { data: { x: g, y: p } }
    );
  },
});
function Gn(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
var Oi = jn,
  _i = Bn,
  Di = Wn,
  Ti = Kn,
  Ii = 'Portal',
  Hn = a.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, i] = a.useState(!1);
    ie(() => i(!0), []);
    const s = n || (o && globalThis?.document?.body);
    return s ? Jr.createPortal(y.jsx(W.div, { ...r, ref: t }), s) : null;
  });
Hn.displayName = Ii;
function Ni(e, t) {
  return a.useReducer((n, r) => t[n][r] ?? n, e);
}
var Te = (e) => {
  const { present: t, children: n } = e,
    r = ki(t),
    o = typeof n == 'function' ? n({ present: r.isPresent }) : a.Children.only(n),
    i = K(r.ref, Li(o));
  return typeof n == 'function' || r.isPresent ? a.cloneElement(o, { ref: i }) : null;
};
Te.displayName = 'Presence';
function ki(e) {
  const [t, n] = a.useState(),
    r = a.useRef(null),
    o = a.useRef(e),
    i = a.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [c, d] = Ni(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    a.useEffect(() => {
      const f = $e(r.current);
      i.current = c === 'mounted' ? f : 'none';
    }, [c]),
    ie(() => {
      const f = r.current,
        l = o.current;
      if (l !== e) {
        const m = i.current,
          h = $e(f);
        (e
          ? d('MOUNT')
          : h === 'none' || f?.display === 'none'
            ? d('UNMOUNT')
            : d(l && m !== h ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e));
      }
    }, [e, d]),
    ie(() => {
      if (t) {
        let f;
        const l = t.ownerDocument.defaultView ?? window,
          u = (h) => {
            const p = $e(r.current).includes(h.animationName);
            if (h.target === t && p && (d('ANIMATION_END'), !o.current)) {
              const v = t.style.animationFillMode;
              ((t.style.animationFillMode = 'forwards'),
                (f = l.setTimeout(() => {
                  t.style.animationFillMode === 'forwards' && (t.style.animationFillMode = v);
                })));
            }
          },
          m = (h) => {
            h.target === t && (i.current = $e(r.current));
          };
        return (
          t.addEventListener('animationstart', m),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            (l.clearTimeout(f),
              t.removeEventListener('animationstart', m),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u));
          }
        );
      } else d('ANIMATION_END');
    }, [t, d]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(c),
      ref: a.useCallback((f) => {
        ((r.current = f ? getComputedStyle(f) : null), n(f));
      }, []),
    }
  );
}
function $e(e) {
  return e?.animationName || 'none';
}
function Li(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var dt = 'rovingFocusGroup.onEntryFocus',
  Fi = { bubbles: !1, cancelable: !0 },
  Ie = 'RovingFocusGroup',
  [Ct, zn, ji] = gn(Ie),
  [$i, Vn] = _e(Ie, [ji]),
  [Bi, Wi] = $i(Ie),
  Yn = a.forwardRef((e, t) =>
    y.jsx(Ct.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: y.jsx(Ct.Slot, { scope: e.__scopeRovingFocusGroup, children: y.jsx(Ui, { ...e, ref: t }) }),
    })
  );
Yn.displayName = Ie;
var Ui = a.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: d,
        onEntryFocus: f,
        preventScrollOnEntryFocus: l = !1,
        ...u
      } = e,
      m = a.useRef(null),
      h = K(t, m),
      g = wn(i),
      [p, v] = hn({ prop: s, defaultProp: c ?? null, onChange: d, caller: Ie }),
      [w, E] = a.useState(!1),
      x = te(f),
      b = zn(n),
      C = a.useRef(!1),
      [M, S] = a.useState(0);
    return (
      a.useEffect(() => {
        const A = m.current;
        if (A) return (A.addEventListener(dt, x), () => A.removeEventListener(dt, x));
      }, [x]),
      y.jsx(Bi, {
        scope: n,
        orientation: r,
        dir: g,
        loop: o,
        currentTabStopId: p,
        onItemFocus: a.useCallback((A) => v(A), [v]),
        onItemShiftTab: a.useCallback(() => E(!0), []),
        onFocusableItemAdd: a.useCallback(() => S((A) => A + 1), []),
        onFocusableItemRemove: a.useCallback(() => S((A) => A - 1), []),
        children: y.jsx(W.div, {
          tabIndex: w || M === 0 ? -1 : 0,
          'data-orientation': r,
          ...u,
          ref: h,
          style: { outline: 'none', ...e.style },
          onMouseDown: O(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: O(e.onFocus, (A) => {
            const T = !C.current;
            if (A.target === A.currentTarget && T && !w) {
              const _ = new CustomEvent(dt, Fi);
              if ((A.currentTarget.dispatchEvent(_), !_.defaultPrevented)) {
                const k = b().filter((D) => D.focusable),
                  L = k.find((D) => D.active),
                  N = k.find((D) => D.id === p),
                  $ = [L, N, ...k].filter(Boolean).map((D) => D.ref.current);
                Zn($, l);
              }
            }
            C.current = !1;
          }),
          onBlur: O(e.onBlur, () => E(!1)),
        }),
      })
    );
  }),
  Xn = 'RovingFocusGroupItem',
  qn = a.forwardRef((e, t) => {
    const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: i, children: s, ...c } = e,
      d = yt(),
      f = i || d,
      l = Wi(Xn, n),
      u = l.currentTabStopId === f,
      m = zn(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: p } = l;
    return (
      a.useEffect(() => {
        if (r) return (h(), () => g());
      }, [r, h, g]),
      y.jsx(Ct.ItemSlot, {
        scope: n,
        id: f,
        focusable: r,
        active: o,
        children: y.jsx(W.span, {
          tabIndex: u ? 0 : -1,
          'data-orientation': l.orientation,
          ...c,
          ref: t,
          onMouseDown: O(e.onMouseDown, (v) => {
            r ? l.onItemFocus(f) : v.preventDefault();
          }),
          onFocus: O(e.onFocus, () => l.onItemFocus(f)),
          onKeyDown: O(e.onKeyDown, (v) => {
            if (v.key === 'Tab' && v.shiftKey) {
              l.onItemShiftTab();
              return;
            }
            if (v.target !== v.currentTarget) return;
            const w = Hi(v, l.orientation, l.dir);
            if (w !== void 0) {
              if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
              v.preventDefault();
              let x = m()
                .filter((b) => b.focusable)
                .map((b) => b.ref.current);
              if (w === 'last') x.reverse();
              else if (w === 'prev' || w === 'next') {
                w === 'prev' && x.reverse();
                const b = x.indexOf(v.currentTarget);
                x = l.loop ? zi(x, b + 1) : x.slice(b + 1);
              }
              setTimeout(() => Zn(x));
            }
          }),
          children: typeof s == 'function' ? s({ isCurrentTabStop: u, hasTabStop: p != null }) : s,
        }),
      })
    );
  });
qn.displayName = Xn;
var Ki = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function Gi(e, t) {
  return t !== 'rtl' ? e : e === 'ArrowLeft' ? 'ArrowRight' : e === 'ArrowRight' ? 'ArrowLeft' : e;
}
function Hi(e, t, n) {
  const r = Gi(e.key, n);
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return Ki[r];
}
function Zn(e, t = !1) {
  const n = document.activeElement;
  for (const r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function zi(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vi = Yn,
  Yi = qn,
  Xi = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  me = new WeakMap(),
  Be = new WeakMap(),
  We = {},
  pt = 0,
  Qn = function (e) {
    return e && (e.host || Qn(e.parentNode));
  },
  qi = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Qn(n);
        return r && e.contains(r)
          ? r
          : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Zi = function (e, t, n, r) {
    var o = qi(t, Array.isArray(e) ? e : [e]);
    We[n] || (We[n] = new WeakMap());
    var i = We[n],
      s = [],
      c = new Set(),
      d = new Set(o),
      f = function (u) {
        !u || c.has(u) || (c.add(u), f(u.parentNode));
      };
    o.forEach(f);
    var l = function (u) {
      !u ||
        d.has(u) ||
        Array.prototype.forEach.call(u.children, function (m) {
          if (c.has(m)) l(m);
          else
            try {
              var h = m.getAttribute(r),
                g = h !== null && h !== 'false',
                p = (me.get(m) || 0) + 1,
                v = (i.get(m) || 0) + 1;
              (me.set(m, p),
                i.set(m, v),
                s.push(m),
                p === 1 && g && Be.set(m, !0),
                v === 1 && m.setAttribute(n, 'true'),
                g || m.setAttribute(r, 'true'));
            } catch (w) {
              console.error('aria-hidden: cannot operate on ', m, w);
            }
        });
    };
    return (
      l(t),
      c.clear(),
      pt++,
      function () {
        (s.forEach(function (u) {
          var m = me.get(u) - 1,
            h = i.get(u) - 1;
          (me.set(u, m),
            i.set(u, h),
            m || (Be.has(u) || u.removeAttribute(r), Be.delete(u)),
            h || u.removeAttribute(n));
        }),
          pt--,
          pt || ((me = new WeakMap()), (me = new WeakMap()), (Be = new WeakMap()), (We = {})));
      }
    );
  },
  Qi = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Xi(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live], script'))), Zi(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  q = function () {
    return (
      (q =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      q.apply(this, arguments)
    );
  };
function Jn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ji(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var He = 'right-scroll-bar-position',
  ze = 'width-before-scroll-bar',
  es = 'with-scroll-bars-hidden',
  ts = '--removed-body-scroll-bar-size';
function mt(e, t) {
  return (typeof e == 'function' ? e(t) : e && (e.current = t), e);
}
function ns(e, t) {
  var n = a.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var rs = typeof window < 'u' ? a.useLayoutEffect : a.useEffect,
  on = new WeakMap();
function os(e, t) {
  var n = ns(null, function (r) {
    return e.forEach(function (o) {
      return mt(o, r);
    });
  });
  return (
    rs(
      function () {
        var r = on.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          (o.forEach(function (c) {
            i.has(c) || mt(c, null);
          }),
            i.forEach(function (c) {
              o.has(c) || mt(c, s);
            }));
        }
        on.set(n, e);
      },
      [e]
    ),
    n
  );
}
function is(e) {
  return e;
}
function ss(e, t) {
  t === void 0 && (t = is);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (c) {
              return c !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          ((n = []), s.forEach(i));
        }
        n = {
          push: function (c) {
            return i(c);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var c = n;
          ((n = []), c.forEach(i), (s = n));
        }
        var d = function () {
            var l = s;
            ((s = []), l.forEach(i));
          },
          f = function () {
            return Promise.resolve().then(d);
          };
        (f(),
          (n = {
            push: function (l) {
              (s.push(l), f());
            },
            filter: function (l) {
              return ((s = s.filter(l)), n);
            },
          }));
      },
    };
  return o;
}
function cs(e) {
  e === void 0 && (e = {});
  var t = ss(null);
  return ((t.options = q({ async: !0, ssr: !1 }, e)), t);
}
var er = function (e) {
  var t = e.sideCar,
    n = Jn(e, ['sideCar']);
  if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return a.createElement(r, q({}, n));
};
er.isSideCarExport = !0;
function as(e, t) {
  return (e.useMedium(t), er);
}
var tr = cs(),
  ht = function () {},
  rt = a.forwardRef(function (e, t) {
    var n = a.useRef(null),
      r = a.useState({ onScrollCapture: ht, onWheelCapture: ht, onTouchMoveCapture: ht }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      c = e.children,
      d = e.className,
      f = e.removeScrollBar,
      l = e.enabled,
      u = e.shards,
      m = e.sideCar,
      h = e.noRelative,
      g = e.noIsolation,
      p = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      E = w === void 0 ? 'div' : w,
      x = e.gapMode,
      b = Jn(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      C = m,
      M = os([n, t]),
      S = q(q({}, b), o);
    return a.createElement(
      a.Fragment,
      null,
      l &&
        a.createElement(C, {
          sideCar: tr,
          removeScrollBar: f,
          shards: u,
          noRelative: h,
          noIsolation: g,
          inert: p,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? a.cloneElement(a.Children.only(c), q(q({}, S), { ref: M }))
        : a.createElement(E, q({}, S, { className: d, ref: M }), c)
    );
  });
rt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
rt.classNames = { fullWidth: ze, zeroRight: He };
var us = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function ls() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = us();
  return (t && e.setAttribute('nonce', t), e);
}
function fs(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function ds(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var ps = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = ls()) && (fs(t, n), ds(t)), e++);
      },
      remove: function () {
        (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  ms = function () {
    var e = ps();
    return function (t, n) {
      a.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  nr = function () {
    var e = ms(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  hs = { left: 0, top: 0, right: 0, gap: 0 },
  vt = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  vs = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [vt(n), vt(r), vt(o)];
  },
  gs = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return hs;
    var t = vs(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  ws = nr(),
  we = 'data-scroll-locked',
  ys = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      c = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          es,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          we,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(c, 'px ')
                .concat(
                  r,
                  `;
    `
                ),
            n === 'padding' && 'padding-right: '.concat(c, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          He,
          ` {
    right: `
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ze,
          ` {
    margin-right: `
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(He, ' .')
        .concat(
          He,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ze, ' .')
        .concat(
          ze,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          we,
          `] {
    `
        )
        .concat(ts, ': ')
        .concat(
          c,
          `px;
  }
`
        )
    );
  },
  sn = function () {
    var e = parseInt(document.body.getAttribute(we) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  xs = function () {
    a.useEffect(function () {
      return (
        document.body.setAttribute(we, (sn() + 1).toString()),
        function () {
          var e = sn() - 1;
          e <= 0 ? document.body.removeAttribute(we) : document.body.setAttribute(we, e.toString());
        }
      );
    }, []);
  },
  bs = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    xs();
    var i = a.useMemo(
      function () {
        return gs(o);
      },
      [o]
    );
    return a.createElement(ws, { styles: ys(i, !t, o, n ? '' : '!important') });
  },
  St = !1;
if (typeof window < 'u')
  try {
    var Ue = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((St = !0), !0);
      },
    });
    (window.addEventListener('test', Ue, Ue), window.removeEventListener('test', Ue, Ue));
  } catch {
    St = !1;
  }
var he = St ? { passive: !1 } : !1,
  Es = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  rr = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !Es(e) && n[t] === 'visible');
  },
  Cs = function (e) {
    return rr(e, 'overflowY');
  },
  Ss = function (e) {
    return rr(e, 'overflowX');
  },
  cn = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = or(e, r);
      if (o) {
        var i = ir(e, r),
          s = i[1],
          c = i[2];
        if (s > c) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Rs = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ms = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  or = function (e, t) {
    return e === 'v' ? Cs(t) : Ss(t);
  },
  ir = function (e, t) {
    return e === 'v' ? Rs(t) : Ms(t);
  },
  As = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  Ps = function (e, t, n, r, o) {
    var i = As(e, window.getComputedStyle(t).direction),
      s = i * r,
      c = n.target,
      d = t.contains(c),
      f = !1,
      l = s > 0,
      u = 0,
      m = 0;
    do {
      if (!c) break;
      var h = ir(e, c),
        g = h[0],
        p = h[1],
        v = h[2],
        w = p - v - i * g;
      (g || w) && or(e, c) && ((u += w), (m += g));
      var E = c.parentNode;
      c = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
    } while ((!d && c !== document.body) || (d && (t.contains(c) || t === c)));
    return (((l && Math.abs(u) < 1) || (!l && Math.abs(m) < 1)) && (f = !0), f);
  },
  Ke = function (e) {
    return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  an = function (e) {
    return [e.deltaX, e.deltaY];
  },
  un = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  Os = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  _s = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Ds = 0,
  ve = [];
function Ts(e) {
  var t = a.useRef([]),
    n = a.useRef([0, 0]),
    r = a.useRef(),
    o = a.useState(Ds++)[0],
    i = a.useState(nr)[0],
    s = a.useRef(e);
  (a.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    a.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var p = Ji([e.lockRef.current], (e.shards || []).map(un), !0).filter(Boolean);
          return (
            p.forEach(function (v) {
              return v.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(o)),
                p.forEach(function (v) {
                  return v.classList.remove('allow-interactivity-'.concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    ));
  var c = a.useCallback(function (p, v) {
      if (('touches' in p && p.touches.length === 2) || (p.type === 'wheel' && p.ctrlKey))
        return !s.current.allowPinchZoom;
      var w = Ke(p),
        E = n.current,
        x = 'deltaX' in p ? p.deltaX : E[0] - w[0],
        b = 'deltaY' in p ? p.deltaY : E[1] - w[1],
        C,
        M = p.target,
        S = Math.abs(x) > Math.abs(b) ? 'h' : 'v';
      if ('touches' in p && S === 'h' && M.type === 'range') return !1;
      var A = cn(S, M);
      if (!A) return !0;
      if ((A ? (C = S) : ((C = S === 'v' ? 'h' : 'v'), (A = cn(S, M))), !A)) return !1;
      if ((!r.current && 'changedTouches' in p && (x || b) && (r.current = C), !C)) return !0;
      var T = r.current || C;
      return Ps(T, v, p, T === 'h' ? x : b);
    }, []),
    d = a.useCallback(function (p) {
      var v = p;
      if (!(!ve.length || ve[ve.length - 1] !== i)) {
        var w = 'deltaY' in v ? an(v) : Ke(v),
          E = t.current.filter(function (C) {
            return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && Os(C.delta, w);
          })[0];
        if (E && E.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!E) {
          var x = (s.current.shards || [])
              .map(un)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(v.target);
              }),
            b = x.length > 0 ? c(v, x[0]) : !s.current.noIsolation;
          b && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    f = a.useCallback(function (p, v, w, E) {
      var x = { name: p, delta: v, target: w, should: E, shadowParent: Is(w) };
      (t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== x;
          });
        }, 1));
    }, []),
    l = a.useCallback(function (p) {
      ((n.current = Ke(p)), (r.current = void 0));
    }, []),
    u = a.useCallback(function (p) {
      f(p.type, an(p), p.target, c(p, e.lockRef.current));
    }, []),
    m = a.useCallback(function (p) {
      f(p.type, Ke(p), p.target, c(p, e.lockRef.current));
    }, []);
  a.useEffect(function () {
    return (
      ve.push(i),
      e.setCallbacks({ onScrollCapture: u, onWheelCapture: u, onTouchMoveCapture: m }),
      document.addEventListener('wheel', d, he),
      document.addEventListener('touchmove', d, he),
      document.addEventListener('touchstart', l, he),
      function () {
        ((ve = ve.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener('wheel', d, he),
          document.removeEventListener('touchmove', d, he),
          document.removeEventListener('touchstart', l, he));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    g ? a.createElement(i, { styles: _s(o) }) : null,
    h ? a.createElement(bs, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Is(e) {
  for (var t = null; e !== null; ) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
const Ns = as(tr, Ts);
var sr = a.forwardRef(function (e, t) {
  return a.createElement(rt, q({}, e, { ref: t, sideCar: Ns }));
});
sr.classNames = rt.classNames;
var Rt = ['Enter', ' '],
  ks = ['ArrowDown', 'PageUp', 'Home'],
  cr = ['ArrowUp', 'PageDown', 'End'],
  Ls = [...ks, ...cr],
  Fs = { ltr: [...Rt, 'ArrowRight'], rtl: [...Rt, 'ArrowLeft'] },
  js = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  Ne = 'Menu',
  [Pe, $s, Bs] = gn(Ne),
  [de, ar] = _e(Ne, [Bs, Ln, Vn]),
  ot = Ln(),
  ur = Vn(),
  [Ws, pe] = de(Ne),
  [Us, ke] = de(Ne),
  lr = (e) => {
    const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e,
      c = ot(t),
      [d, f] = a.useState(null),
      l = a.useRef(!1),
      u = te(i),
      m = wn(o);
    return (
      a.useEffect(() => {
        const h = () => {
            ((l.current = !0),
              document.addEventListener('pointerdown', g, { capture: !0, once: !0 }),
              document.addEventListener('pointermove', g, { capture: !0, once: !0 }));
          },
          g = () => (l.current = !1);
        return (
          document.addEventListener('keydown', h, { capture: !0 }),
          () => {
            (document.removeEventListener('keydown', h, { capture: !0 }),
              document.removeEventListener('pointerdown', g, { capture: !0 }),
              document.removeEventListener('pointermove', g, { capture: !0 }));
          }
        );
      }, []),
      y.jsx(Oi, {
        ...c,
        children: y.jsx(Ws, {
          scope: t,
          open: n,
          onOpenChange: u,
          content: d,
          onContentChange: f,
          children: y.jsx(Us, {
            scope: t,
            onClose: a.useCallback(() => u(!1), [u]),
            isUsingKeyboardRef: l,
            dir: m,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  };
lr.displayName = Ne;
var Ks = 'MenuAnchor',
  Lt = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = ot(n);
    return y.jsx(_i, { ...o, ...r, ref: t });
  });
Lt.displayName = Ks;
var Ft = 'MenuPortal',
  [Gs, fr] = de(Ft, { forceMount: void 0 }),
  dr = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = pe(Ft, t);
    return y.jsx(Gs, {
      scope: t,
      forceMount: n,
      children: y.jsx(Te, { present: n || i.open, children: y.jsx(Hn, { asChild: !0, container: o, children: r }) }),
    });
  };
dr.displayName = Ft;
var z = 'MenuContent',
  [Hs, jt] = de(z),
  pr = a.forwardRef((e, t) => {
    const n = fr(z, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = pe(z, e.__scopeMenu),
      s = ke(z, e.__scopeMenu);
    return y.jsx(Pe.Provider, {
      scope: e.__scopeMenu,
      children: y.jsx(Te, {
        present: r || i.open,
        children: y.jsx(Pe.Slot, {
          scope: e.__scopeMenu,
          children: s.modal ? y.jsx(zs, { ...o, ref: t }) : y.jsx(Vs, { ...o, ref: t }),
        }),
      }),
    });
  }),
  zs = a.forwardRef((e, t) => {
    const n = pe(z, e.__scopeMenu),
      r = a.useRef(null),
      o = K(t, r);
    return (
      a.useEffect(() => {
        const i = r.current;
        if (i) return Qi(i);
      }, []),
      y.jsx($t, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: O(e.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: !1 }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Vs = a.forwardRef((e, t) => {
    const n = pe(z, e.__scopeMenu);
    return y.jsx($t, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Ys = Ve('MenuContent.ScrollLock'),
  $t = a.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: c,
        onEntryFocus: d,
        onEscapeKeyDown: f,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: m,
        onDismiss: h,
        disableOutsideScroll: g,
        ...p
      } = e,
      v = pe(z, n),
      w = ke(z, n),
      E = ot(n),
      x = ur(n),
      b = $s(n),
      [C, M] = a.useState(null),
      S = a.useRef(null),
      A = K(t, S, v.onContentChange),
      T = a.useRef(0),
      _ = a.useRef(''),
      k = a.useRef(0),
      L = a.useRef(null),
      N = a.useRef('right'),
      I = a.useRef(0),
      $ = g ? sr : a.Fragment,
      D = g ? { as: Ys, allowPinchZoom: !0 } : void 0,
      F = (R) => {
        const B = _.current + R,
          X = b().filter((j) => !j.disabled),
          ae = document.activeElement,
          Ee = X.find((j) => j.ref.current === ae)?.textValue,
          Ce = X.map((j) => j.textValue),
          Le = sc(Ce, B, Ee),
          ue = X.find((j) => j.textValue === Le)?.ref.current;
        ((function j(Se) {
          ((_.current = Se),
            window.clearTimeout(T.current),
            Se !== '' && (T.current = window.setTimeout(() => j(''), 1e3)));
        })(B),
          ue && setTimeout(() => ue.focus()));
      };
    (a.useEffect(() => () => window.clearTimeout(T.current), []), lo());
    const P = a.useCallback((R) => N.current === L.current?.side && ac(R, L.current?.area), []);
    return y.jsx(Hs, {
      scope: n,
      searchRef: _,
      onItemEnter: a.useCallback(
        (R) => {
          P(R) && R.preventDefault();
        },
        [P]
      ),
      onItemLeave: a.useCallback(
        (R) => {
          P(R) || (S.current?.focus(), M(null));
        },
        [P]
      ),
      onTriggerLeave: a.useCallback(
        (R) => {
          P(R) && R.preventDefault();
        },
        [P]
      ),
      pointerGraceTimerRef: k,
      onPointerGraceIntentChange: a.useCallback((R) => {
        L.current = R;
      }, []),
      children: y.jsx($, {
        ...D,
        children: y.jsx(En, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: O(i, (R) => {
            (R.preventDefault(), S.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: s,
          children: y.jsx(xn, {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onEscapeKeyDown: f,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onInteractOutside: m,
            onDismiss: h,
            children: y.jsx(Vi, {
              asChild: !0,
              ...x,
              dir: w.dir,
              orientation: 'vertical',
              loop: r,
              currentTabStopId: C,
              onCurrentTabStopIdChange: M,
              onEntryFocus: O(d, (R) => {
                w.isUsingKeyboardRef.current || R.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: y.jsx(Di, {
                role: 'menu',
                'aria-orientation': 'vertical',
                'data-state': Or(v.open),
                'data-radix-menu-content': '',
                dir: w.dir,
                ...E,
                ...p,
                ref: A,
                style: { outline: 'none', ...p.style },
                onKeyDown: O(p.onKeyDown, (R) => {
                  const X = R.target.closest('[data-radix-menu-content]') === R.currentTarget,
                    ae = R.ctrlKey || R.altKey || R.metaKey,
                    Ee = R.key.length === 1;
                  X && (R.key === 'Tab' && R.preventDefault(), !ae && Ee && F(R.key));
                  const Ce = S.current;
                  if (R.target !== Ce || !Ls.includes(R.key)) return;
                  R.preventDefault();
                  const ue = b()
                    .filter((j) => !j.disabled)
                    .map((j) => j.ref.current);
                  (cr.includes(R.key) && ue.reverse(), oc(ue));
                }),
                onBlur: O(e.onBlur, (R) => {
                  R.currentTarget.contains(R.target) || (window.clearTimeout(T.current), (_.current = ''));
                }),
                onPointerMove: O(
                  e.onPointerMove,
                  Oe((R) => {
                    const B = R.target,
                      X = I.current !== R.clientX;
                    if (R.currentTarget.contains(B) && X) {
                      const ae = R.clientX > I.current ? 'right' : 'left';
                      ((N.current = ae), (I.current = R.clientX));
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
pr.displayName = z;
var Xs = 'MenuGroup',
  Bt = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return y.jsx(W.div, { role: 'group', ...r, ref: t });
  });
Bt.displayName = Xs;
var qs = 'MenuLabel',
  mr = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return y.jsx(W.div, { ...r, ref: t });
  });
mr.displayName = qs;
var Qe = 'MenuItem',
  ln = 'menu.itemSelect',
  it = a.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = a.useRef(null),
      s = ke(Qe, e.__scopeMenu),
      c = jt(Qe, e.__scopeMenu),
      d = K(t, i),
      f = a.useRef(!1),
      l = () => {
        const u = i.current;
        if (!n && u) {
          const m = new CustomEvent(ln, { bubbles: !0, cancelable: !0 });
          (u.addEventListener(ln, (h) => r?.(h), { once: !0 }),
            vn(u, m),
            m.defaultPrevented ? (f.current = !1) : s.onClose());
        }
      };
    return y.jsx(hr, {
      ...o,
      ref: d,
      disabled: n,
      onClick: O(e.onClick, l),
      onPointerDown: (u) => {
        (e.onPointerDown?.(u), (f.current = !0));
      },
      onPointerUp: O(e.onPointerUp, (u) => {
        f.current || u.currentTarget?.click();
      }),
      onKeyDown: O(e.onKeyDown, (u) => {
        const m = c.searchRef.current !== '';
        n || (m && u.key === ' ') || (Rt.includes(u.key) && (u.currentTarget.click(), u.preventDefault()));
      }),
    });
  });
it.displayName = Qe;
var hr = a.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = jt(Qe, n),
      c = ur(n),
      d = a.useRef(null),
      f = K(t, d),
      [l, u] = a.useState(!1),
      [m, h] = a.useState('');
    return (
      a.useEffect(() => {
        const g = d.current;
        g && h((g.textContent ?? '').trim());
      }, [i.children]),
      y.jsx(Pe.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: y.jsx(Yi, {
          asChild: !0,
          ...c,
          focusable: !r,
          children: y.jsx(W.div, {
            role: 'menuitem',
            'data-highlighted': l ? '' : void 0,
            'aria-disabled': r || void 0,
            'data-disabled': r ? '' : void 0,
            ...i,
            ref: f,
            onPointerMove: O(
              e.onPointerMove,
              Oe((g) => {
                r
                  ? s.onItemLeave(g)
                  : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: O(
              e.onPointerLeave,
              Oe((g) => s.onItemLeave(g))
            ),
            onFocus: O(e.onFocus, () => u(!0)),
            onBlur: O(e.onBlur, () => u(!1)),
          }),
        }),
      })
    );
  }),
  Zs = 'MenuCheckboxItem',
  vr = a.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return y.jsx(br, {
      scope: e.__scopeMenu,
      checked: n,
      children: y.jsx(it, {
        role: 'menuitemcheckbox',
        'aria-checked': Je(n) ? 'mixed' : n,
        ...o,
        ref: t,
        'data-state': Ut(n),
        onSelect: O(o.onSelect, () => r?.(Je(n) ? !0 : !n), { checkForDefaultPrevented: !1 }),
      }),
    });
  });
vr.displayName = Zs;
var gr = 'MenuRadioGroup',
  [Qs, Js] = de(gr, { value: void 0, onValueChange: () => {} }),
  wr = a.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = te(r);
    return y.jsx(Qs, { scope: e.__scopeMenu, value: n, onValueChange: i, children: y.jsx(Bt, { ...o, ref: t }) });
  });
wr.displayName = gr;
var yr = 'MenuRadioItem',
  xr = a.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = Js(yr, e.__scopeMenu),
      i = n === o.value;
    return y.jsx(br, {
      scope: e.__scopeMenu,
      checked: i,
      children: y.jsx(it, {
        role: 'menuitemradio',
        'aria-checked': i,
        ...r,
        ref: t,
        'data-state': Ut(i),
        onSelect: O(r.onSelect, () => o.onValueChange?.(n), { checkForDefaultPrevented: !1 }),
      }),
    });
  });
xr.displayName = yr;
var Wt = 'MenuItemIndicator',
  [br, ec] = de(Wt, { checked: !1 }),
  Er = a.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = ec(Wt, n);
    return y.jsx(Te, {
      present: r || Je(i.checked) || i.checked === !0,
      children: y.jsx(W.span, { ...o, ref: t, 'data-state': Ut(i.checked) }),
    });
  });
Er.displayName = Wt;
var tc = 'MenuSeparator',
  Cr = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return y.jsx(W.div, { role: 'separator', 'aria-orientation': 'horizontal', ...r, ref: t });
  });
Cr.displayName = tc;
var nc = 'MenuArrow',
  Sr = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = ot(n);
    return y.jsx(Ti, { ...o, ...r, ref: t });
  });
Sr.displayName = nc;
var rc = 'MenuSub',
  [ca, Rr] = de(rc),
  Re = 'MenuSubTrigger',
  Mr = a.forwardRef((e, t) => {
    const n = pe(Re, e.__scopeMenu),
      r = ke(Re, e.__scopeMenu),
      o = Rr(Re, e.__scopeMenu),
      i = jt(Re, e.__scopeMenu),
      s = a.useRef(null),
      { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = i,
      f = { __scopeMenu: e.__scopeMenu },
      l = a.useCallback(() => {
        (s.current && window.clearTimeout(s.current), (s.current = null));
      }, []);
    return (
      a.useEffect(() => l, [l]),
      a.useEffect(() => {
        const u = c.current;
        return () => {
          (window.clearTimeout(u), d(null));
        };
      }, [c, d]),
      y.jsx(Lt, {
        asChild: !0,
        ...f,
        children: y.jsx(hr, {
          id: o.triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': n.open,
          'aria-controls': o.contentId,
          'data-state': Or(n.open),
          ...e,
          ref: pn(t, o.onTriggerChange),
          onClick: (u) => {
            (e.onClick?.(u),
              !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: O(
            e.onPointerMove,
            Oe((u) => {
              (i.onItemEnter(u),
                !u.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (i.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), l());
                  }, 100))));
            })
          ),
          onPointerLeave: O(
            e.onPointerLeave,
            Oe((u) => {
              l();
              const m = n.content?.getBoundingClientRect();
              if (m) {
                const h = n.content?.dataset.side,
                  g = h === 'right',
                  p = g ? -5 : 5,
                  v = m[g ? 'left' : 'right'],
                  w = m[g ? 'right' : 'left'];
                (i.onPointerGraceIntentChange({
                  area: [
                    { x: u.clientX + p, y: u.clientY },
                    { x: v, y: m.top },
                    { x: w, y: m.top },
                    { x: w, y: m.bottom },
                    { x: v, y: m.bottom },
                  ],
                  side: h,
                }),
                  window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)));
              } else {
                if ((i.onTriggerLeave(u), u.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: O(e.onKeyDown, (u) => {
            const m = i.searchRef.current !== '';
            e.disabled ||
              (m && u.key === ' ') ||
              (Fs[r.dir].includes(u.key) && (n.onOpenChange(!0), n.content?.focus(), u.preventDefault()));
          }),
        }),
      })
    );
  });
Mr.displayName = Re;
var Ar = 'MenuSubContent',
  Pr = a.forwardRef((e, t) => {
    const n = fr(z, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = pe(z, e.__scopeMenu),
      s = ke(z, e.__scopeMenu),
      c = Rr(Ar, e.__scopeMenu),
      d = a.useRef(null),
      f = K(t, d);
    return y.jsx(Pe.Provider, {
      scope: e.__scopeMenu,
      children: y.jsx(Te, {
        present: r || i.open,
        children: y.jsx(Pe.Slot, {
          scope: e.__scopeMenu,
          children: y.jsx($t, {
            id: c.contentId,
            'aria-labelledby': c.triggerId,
            ...o,
            ref: f,
            align: 'start',
            side: s.dir === 'rtl' ? 'left' : 'right',
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (l) => {
              (s.isUsingKeyboardRef.current && d.current?.focus(), l.preventDefault());
            },
            onCloseAutoFocus: (l) => l.preventDefault(),
            onFocusOutside: O(e.onFocusOutside, (l) => {
              l.target !== c.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: O(e.onEscapeKeyDown, (l) => {
              (s.onClose(), l.preventDefault());
            }),
            onKeyDown: O(e.onKeyDown, (l) => {
              const u = l.currentTarget.contains(l.target),
                m = js[s.dir].includes(l.key);
              u && m && (i.onOpenChange(!1), c.trigger?.focus(), l.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Pr.displayName = Ar;
function Or(e) {
  return e ? 'open' : 'closed';
}
function Je(e) {
  return e === 'indeterminate';
}
function Ut(e) {
  return Je(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
function oc(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ic(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function sc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = ic(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((f) => f !== n));
  const d = s.find((f) => f.toLowerCase().startsWith(o.toLowerCase()));
  return d !== n ? d : void 0;
}
function cc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const c = t[i],
      d = t[s],
      f = c.x,
      l = c.y,
      u = d.x,
      m = d.y;
    l > r != m > r && n < ((u - f) * (r - l)) / (m - l) + f && (o = !o);
  }
  return o;
}
function ac(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return cc(n, t);
}
function Oe(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0);
}
var uc = lr,
  lc = Lt,
  fc = dr,
  dc = pr,
  pc = Bt,
  mc = mr,
  hc = it,
  vc = vr,
  gc = wr,
  wc = xr,
  yc = Er,
  xc = Cr,
  bc = Sr,
  Ec = Mr,
  Cc = Pr,
  st = 'DropdownMenu',
  [Sc, aa] = _e(st, [ar]),
  U = ar(),
  [Rc, _r] = Sc(st),
  Dr = (e) => {
    const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: s, modal: c = !0 } = e,
      d = U(t),
      f = a.useRef(null),
      [l, u] = hn({ prop: o, defaultProp: i ?? !1, onChange: s, caller: st });
    return y.jsx(Rc, {
      scope: t,
      triggerId: yt(),
      triggerRef: f,
      contentId: yt(),
      open: l,
      onOpenChange: u,
      onOpenToggle: a.useCallback(() => u((m) => !m), [u]),
      modal: c,
      children: y.jsx(uc, { ...d, open: l, onOpenChange: u, dir: r, modal: c, children: n }),
    });
  };
Dr.displayName = st;
var Tr = 'DropdownMenuTrigger',
  Ir = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = _r(Tr, n),
      s = U(n);
    return y.jsx(lc, {
      asChild: !0,
      ...s,
      children: y.jsx(W.button, {
        type: 'button',
        id: i.triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': i.open,
        'aria-controls': i.open ? i.contentId : void 0,
        'data-state': i.open ? 'open' : 'closed',
        'data-disabled': r ? '' : void 0,
        disabled: r,
        ...o,
        ref: pn(t, i.triggerRef),
        onPointerDown: O(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (i.onOpenToggle(), i.open || c.preventDefault());
        }),
        onKeyDown: O(e.onKeyDown, (c) => {
          r ||
            (['Enter', ' '].includes(c.key) && i.onOpenToggle(),
            c.key === 'ArrowDown' && i.onOpenChange(!0),
            ['Enter', ' ', 'ArrowDown'].includes(c.key) && c.preventDefault());
        }),
      }),
    });
  });
Ir.displayName = Tr;
var Mc = 'DropdownMenuPortal',
  Nr = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = U(t);
    return y.jsx(fc, { ...r, ...n });
  };
Nr.displayName = Mc;
var kr = 'DropdownMenuContent',
  Lr = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = _r(kr, n),
      i = U(n),
      s = a.useRef(!1);
    return y.jsx(dc, {
      id: o.contentId,
      'aria-labelledby': o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: O(e.onCloseAutoFocus, (c) => {
        (s.current || o.triggerRef.current?.focus(), (s.current = !1), c.preventDefault());
      }),
      onInteractOutside: O(e.onInteractOutside, (c) => {
        const d = c.detail.originalEvent,
          f = d.button === 0 && d.ctrlKey === !0,
          l = d.button === 2 || f;
        (!o.modal || l) && (s.current = !0);
      }),
      style: {
        ...e.style,
        '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
Lr.displayName = kr;
var Ac = 'DropdownMenuGroup',
  Pc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(pc, { ...o, ...r, ref: t });
  });
Pc.displayName = Ac;
var Oc = 'DropdownMenuLabel',
  _c = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(mc, { ...o, ...r, ref: t });
  });
_c.displayName = Oc;
var Dc = 'DropdownMenuItem',
  Fr = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(hc, { ...o, ...r, ref: t });
  });
Fr.displayName = Dc;
var Tc = 'DropdownMenuCheckboxItem',
  Ic = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(vc, { ...o, ...r, ref: t });
  });
Ic.displayName = Tc;
var Nc = 'DropdownMenuRadioGroup',
  kc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(gc, { ...o, ...r, ref: t });
  });
kc.displayName = Nc;
var Lc = 'DropdownMenuRadioItem',
  Fc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(wc, { ...o, ...r, ref: t });
  });
Fc.displayName = Lc;
var jc = 'DropdownMenuItemIndicator',
  $c = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(yc, { ...o, ...r, ref: t });
  });
$c.displayName = jc;
var Bc = 'DropdownMenuSeparator',
  Wc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(xc, { ...o, ...r, ref: t });
  });
Wc.displayName = Bc;
var Uc = 'DropdownMenuArrow',
  Kc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(bc, { ...o, ...r, ref: t });
  });
Kc.displayName = Uc;
var Gc = 'DropdownMenuSubTrigger',
  Hc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(Ec, { ...o, ...r, ref: t });
  });
Hc.displayName = Gc;
var zc = 'DropdownMenuSubContent',
  Vc = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = U(n);
    return y.jsx(Cc, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
Vc.displayName = zc;
var Yc = Dr,
  Xc = Ir,
  qc = Nr,
  Zc = Lr,
  Qc = Fr;
function Jc({ ...e }) {
  return y.jsx(Yc, { 'data-slot': 'dropdown-menu', ...e });
}
function ea({ ...e }) {
  return y.jsx(Xc, { 'data-slot': 'dropdown-menu-trigger', ...e });
}
function ta({ className: e, sideOffset: t = 4, ...n }) {
  return y.jsx(qc, {
    children: y.jsx(Zc, {
      'data-slot': 'dropdown-menu-content',
      sideOffset: t,
      className: fn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
        e
      ),
      ...n,
    }),
  });
}
function gt({ className: e, inset: t, variant: n = 'default', ...r }) {
  return y.jsx(Qc, {
    'data-slot': 'dropdown-menu-item',
    'data-inset': t,
    'data-variant': n,
    className: fn(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e
    ),
    ...r,
  });
}
function ua() {
  const [e, t] = a.useState('theme-light');
  return (
    a.useEffect(() => {
      const n = document.documentElement.classList.contains('dark');
      t(n ? 'dark' : 'theme-light');
    }, []),
    a.useEffect(() => {
      const n = e === 'dark' || (e === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList[n ? 'add' : 'remove']('dark');
    }, [e]),
    y.jsxs(Jc, {
      children: [
        y.jsx(ea, {
          asChild: !0,
          children: y.jsxs(Kr, {
            variant: 'ghost',
            size: 'icon',
            children: [
              y.jsx(Yr, {
                className: 'h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90',
              }),
              y.jsx(zr, {
                className:
                  'absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0',
              }),
              y.jsx('span', { className: 'sr-only', children: 'Toggle theme' }),
            ],
          }),
        }),
        y.jsxs(ta, {
          align: 'end',
          children: [
            y.jsx(gt, { onClick: () => t('theme-light'), children: 'Light' }),
            y.jsx(gt, { onClick: () => t('dark'), children: 'Dark' }),
            y.jsx(gt, { onClick: () => t('system'), children: 'System' }),
          ],
        }),
      ],
    })
  );
}
export { ua as ModeToggle };
