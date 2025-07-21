import { j as g, a as V, c as E } from './utils.BYJ6mHyy.js';
import { r as a } from './index.CqJmc5Mb.js';
function y(e, t) {
  if (typeof e == 'function') return e(t);
  e != null && (e.current = t);
}
function x(...e) {
  return (t) => {
    let n = !1;
    const i = e.map((r) => {
      const o = y(r, t);
      return (!n && typeof o == 'function' && (n = !0), o);
    });
    if (n)
      return () => {
        for (let r = 0; r < i.length; r++) {
          const o = i[r];
          typeof o == 'function' ? o() : y(e[r], null);
        }
      };
  };
}
function I(...e) {
  return a.useCallback(x(...e), e);
}
function S(e) {
  const t = N(e),
    n = a.forwardRef((i, r) => {
      const { children: o, ...u } = i,
        l = a.Children.toArray(o),
        f = l.find(w);
      if (f) {
        const s = f.props.children,
          c = l.map((d) =>
            d === f
              ? a.Children.count(s) > 1
                ? a.Children.only(null)
                : a.isValidElement(s)
                  ? s.props.children
                  : null
              : d
          );
        return g.jsx(t, { ...u, ref: r, children: a.isValidElement(s) ? a.cloneElement(s, void 0, c) : null });
      }
      return g.jsx(t, { ...u, ref: r, children: o });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var j = S('Slot');
function N(e) {
  const t = a.forwardRef((n, i) => {
    const { children: r, ...o } = n;
    if (a.isValidElement(r)) {
      const u = O(r),
        l = _(o, r.props);
      return (r.type !== a.Fragment && (l.ref = i ? x(i, u) : u), a.cloneElement(r, l));
    }
    return a.Children.count(r) > 1 ? a.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var R = Symbol('radix.slottable');
function w(e) {
  return a.isValidElement(e) && typeof e.type == 'function' && '__radixId' in e.type && e.type.__radixId === R;
}
function _(e, t) {
  const n = { ...t };
  for (const i in t) {
    const r = e[i],
      o = t[i];
    /^on[A-Z]/.test(i)
      ? r && o
        ? (n[i] = (...l) => {
            const f = o(...l);
            return (r(...l), f);
          })
        : r && (n[i] = r)
      : i === 'style'
        ? (n[i] = { ...r, ...o })
        : i === 'className' && (n[i] = [r, o].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
function O(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const b = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  h = V,
  P = (e, t) => (n) => {
    var i;
    if (t?.variants == null) return h(e, n?.class, n?.className);
    const { variants: r, defaultVariants: o } = t,
      u = Object.keys(r).map((s) => {
        const c = n?.[s],
          d = o?.[s];
        if (c === null) return null;
        const v = b(c) || b(d);
        return r[s][v];
      }),
      l =
        n &&
        Object.entries(n).reduce((s, c) => {
          let [d, v] = c;
          return (v === void 0 || (s[d] = v), s);
        }, {}),
      f =
        t == null || (i = t.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((s, c) => {
              let { class: d, className: v, ...C } = c;
              return Object.entries(C).every((k) => {
                let [m, p] = k;
                return Array.isArray(p) ? p.includes({ ...o, ...l }[m]) : { ...o, ...l }[m] === p;
              })
                ? [...s, d, v]
                : s;
            }, []);
    return h(e, u, f, n?.class, n?.className);
  },
  A = P(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
          destructive:
            'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
          outline:
            'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
          secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2 has-[>svg]:px-3',
          sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
          lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
          icon: 'size-9',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  );
function B({ className: e, variant: t, size: n, asChild: i = !1, ...r }) {
  const o = i ? j : 'button';
  return g.jsx(o, { 'data-slot': 'button', className: E(A({ variant: t, size: n, className: e })), ...r });
}
export { B, x as a, S as c, I as u };
