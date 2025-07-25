var re = { exports: {} },
  B = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ge;
function Te() {
  if (ge) return B;
  ge = 1;
  var e = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.fragment');
  function o(r, a, c) {
    var l = null;
    if ((c !== void 0 && (l = '' + c), a.key !== void 0 && (l = '' + a.key), 'key' in a)) {
      c = {};
      for (var u in a) u !== 'key' && (c[u] = a[u]);
    } else c = a;
    return ((a = c.ref), { $$typeof: e, type: r, key: l, ref: a !== void 0 ? a : null, props: c });
  }
  return ((B.Fragment = n), (B.jsx = o), (B.jsxs = o), B);
}
var he;
function je() {
  return (he || ((he = 1), (re.exports = Te())), re.exports);
}
var gr = je();
function ve(e) {
  var n,
    o,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++) e[n] && (o = ve(e[n])) && (r && (r += ' '), (r += o));
    } else for (o in e) e[o] && (r && (r += ' '), (r += o));
  return r;
}
function Le() {
  for (var e, n, o = 0, r = '', a = arguments.length; o < a; o++)
    (e = arguments[o]) && (n = ve(e)) && (r && (r += ' '), (r += n));
  return r;
}
const ie = '-',
  Ne = (e) => {
    const n = Ve(e),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (l) => {
        const u = l.split(ie);
        return (u[0] === '' && u.length !== 1 && u.shift(), ze(u, n) || _e(l));
      },
      getConflictingClassGroupIds: (l, u) => {
        const p = o[l] || [];
        return u && r[l] ? [...p, ...r[l]] : p;
      },
    };
  },
  ze = (e, n) => {
    if (e.length === 0) return n.classGroupId;
    const o = e[0],
      r = n.nextPart.get(o),
      a = r ? ze(e.slice(1), r) : void 0;
    if (a) return a;
    if (n.validators.length === 0) return;
    const c = e.join(ie);
    return n.validators.find(({ validator: l }) => l(c))?.classGroupId;
  },
  xe = /^\[(.+)\]$/,
  _e = (e) => {
    if (xe.test(e)) {
      const n = xe.exec(e)[1],
        o = n?.substring(0, n.indexOf(':'));
      if (o) return 'arbitrary..' + o;
    }
  },
  Ve = (e) => {
    const { theme: n, classGroups: o } = e,
      r = { nextPart: new Map(), validators: [] };
    for (const a in o) se(o[a], r, a, n);
    return r;
  },
  se = (e, n, o, r) => {
    e.forEach((a) => {
      if (typeof a == 'string') {
        const c = a === '' ? n : ke(n, a);
        c.classGroupId = o;
        return;
      }
      if (typeof a == 'function') {
        if (Fe(a)) {
          se(a(r), n, o, r);
          return;
        }
        n.validators.push({ validator: a, classGroupId: o });
        return;
      }
      Object.entries(a).forEach(([c, l]) => {
        se(l, ke(n, c), o, r);
      });
    });
  },
  ke = (e, n) => {
    let o = e;
    return (
      n.split(ie).forEach((r) => {
        (o.nextPart.has(r) || o.nextPart.set(r, { nextPart: new Map(), validators: [] }), (o = o.nextPart.get(r)));
      }),
      o
    );
  },
  Fe = (e) => e.isThemeGetter,
  Oe = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      o = new Map(),
      r = new Map();
    const a = (c, l) => {
      (o.set(c, l), n++, n > e && ((n = 0), (r = o), (o = new Map())));
    };
    return {
      get(c) {
        let l = o.get(c);
        if (l !== void 0) return l;
        if ((l = r.get(c)) !== void 0) return (a(c, l), l);
      },
      set(c, l) {
        o.has(c) ? o.set(c, l) : a(c, l);
      },
    };
  },
  ne = '!',
  ae = ':',
  $e = ae.length,
  Be = (e) => {
    const { prefix: n, experimentalParseClassName: o } = e;
    let r = (a) => {
      const c = [];
      let l = 0,
        u = 0,
        p = 0,
        g;
      for (let w = 0; w < a.length; w++) {
        let y = a[w];
        if (l === 0 && u === 0) {
          if (y === ae) {
            (c.push(a.slice(p, w)), (p = w + $e));
            continue;
          }
          if (y === '/') {
            g = w;
            continue;
          }
        }
        y === '[' ? l++ : y === ']' ? l-- : y === '(' ? u++ : y === ')' && u--;
      }
      const h = c.length === 0 ? a : a.substring(p),
        R = We(h),
        V = R !== h,
        F = g && g > p ? g - p : void 0;
      return { modifiers: c, hasImportantModifier: V, baseClassName: R, maybePostfixModifierPosition: F };
    };
    if (n) {
      const a = n + ae,
        c = r;
      r = (l) =>
        l.startsWith(a)
          ? c(l.substring(a.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: l,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (o) {
      const a = r;
      r = (c) => o({ className: c, parseClassName: a });
    }
    return r;
  },
  We = (e) => (e.endsWith(ne) ? e.substring(0, e.length - 1) : e.startsWith(ne) ? e.substring(1) : e),
  qe = (e) => {
    const n = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const a = [];
      let c = [];
      return (
        r.forEach((l) => {
          l[0] === '[' || n[l] ? (a.push(...c.sort(), l), (c = [])) : c.push(l);
        }),
        a.push(...c.sort()),
        a
      );
    };
  },
  Je = (e) => ({ cache: Oe(e.cacheSize), parseClassName: Be(e), sortModifiers: qe(e), ...Ne(e) }),
  Ue = /\s+/,
  Ye = (e, n) => {
    const { parseClassName: o, getClassGroupId: r, getConflictingClassGroupIds: a, sortModifiers: c } = n,
      l = [],
      u = e.trim().split(Ue);
    let p = '';
    for (let g = u.length - 1; g >= 0; g -= 1) {
      const h = u[g],
        {
          isExternal: R,
          modifiers: V,
          hasImportantModifier: F,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        } = o(h);
      if (R) {
        p = h + (p.length > 0 ? ' ' + p : p);
        continue;
      }
      let G = !!y,
        A = r(G ? w.substring(0, y) : w);
      if (!A) {
        if (!G) {
          p = h + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        if (((A = r(w)), !A)) {
          p = h + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        G = !1;
      }
      const q = c(V).join(':'),
        O = F ? q + ne : q,
        E = O + A;
      if (l.includes(E)) continue;
      l.push(E);
      const T = a(A, G);
      for (let S = 0; S < T.length; ++S) {
        const $ = T[S];
        l.push(O + $);
      }
      p = h + (p.length > 0 ? ' ' + p : p);
    }
    return p;
  };
function He() {
  let e = 0,
    n,
    o,
    r = '';
  for (; e < arguments.length; ) (n = arguments[e++]) && (o = Ce(n)) && (r && (r += ' '), (r += o));
  return r;
}
const Ce = (e) => {
  if (typeof e == 'string') return e;
  let n,
    o = '';
  for (let r = 0; r < e.length; r++) e[r] && (n = Ce(e[r])) && (o && (o += ' '), (o += n));
  return o;
};
function Xe(e, ...n) {
  let o,
    r,
    a,
    c = l;
  function l(p) {
    const g = n.reduce((h, R) => R(h), e());
    return ((o = Je(g)), (r = o.cache.get), (a = o.cache.set), (c = u), u(p));
  }
  function u(p) {
    const g = r(p);
    if (g) return g;
    const h = Ye(p, o);
    return (a(p, h), h);
  }
  return function () {
    return c(He.apply(null, arguments));
  };
}
const f = (e) => {
    const n = (o) => o[e] || [];
    return ((n.isThemeGetter = !0), n);
  },
  Re = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Me = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  De = /^\d+\/\d+$/,
  Qe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ze =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ke = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  rr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  L = (e) => De.test(e),
  m = (e) => !!e && !Number.isNaN(Number(e)),
  M = (e) => !!e && Number.isInteger(Number(e)),
  oe = (e) => e.endsWith('%') && m(e.slice(0, -1)),
  C = (e) => Qe.test(e),
  or = () => !0,
  tr = (e) => Ze.test(e) && !Ke.test(e),
  Ae = () => !1,
  sr = (e) => er.test(e),
  nr = (e) => rr.test(e),
  ar = (e) => !t(e) && !s(e),
  ir = (e) => N(e, Ie, Ae),
  t = (e) => Re.test(e),
  I = (e) => N(e, Ge, tr),
  te = (e) => N(e, pr, m),
  we = (e) => N(e, Se, Ae),
  lr = (e) => N(e, Pe, nr),
  D = (e) => N(e, Ee, sr),
  s = (e) => Me.test(e),
  W = (e) => _(e, Ge),
  cr = (e) => _(e, ur),
  ye = (e) => _(e, Se),
  dr = (e) => _(e, Ie),
  mr = (e) => _(e, Pe),
  Q = (e) => _(e, Ee, !0),
  N = (e, n, o) => {
    const r = Re.exec(e);
    return r ? (r[1] ? n(r[1]) : o(r[2])) : !1;
  },
  _ = (e, n, o = !1) => {
    const r = Me.exec(e);
    return r ? (r[1] ? n(r[1]) : o) : !1;
  },
  Se = (e) => e === 'position' || e === 'percentage',
  Pe = (e) => e === 'image' || e === 'url',
  Ie = (e) => e === 'length' || e === 'size' || e === 'bg-size',
  Ge = (e) => e === 'length',
  pr = (e) => e === 'number',
  ur = (e) => e === 'family-name',
  Ee = (e) => e === 'shadow',
  fr = () => {
    const e = f('color'),
      n = f('font'),
      o = f('text'),
      r = f('font-weight'),
      a = f('tracking'),
      c = f('leading'),
      l = f('breakpoint'),
      u = f('container'),
      p = f('spacing'),
      g = f('radius'),
      h = f('shadow'),
      R = f('inset-shadow'),
      V = f('text-shadow'),
      F = f('drop-shadow'),
      w = f('blur'),
      y = f('perspective'),
      G = f('aspect'),
      A = f('ease'),
      q = f('animate'),
      O = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      E = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      T = () => [...E(), s, t],
      S = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      $ = () => ['auto', 'contain', 'none'],
      d = () => [s, t, p],
      v = () => [L, 'full', 'auto', ...d()],
      le = () => [M, 'none', 'subgrid', s, t],
      ce = () => ['auto', { span: ['full', M, s, t] }, M, s, t],
      J = () => [M, 'auto', s, t],
      de = () => ['auto', 'min', 'max', 'fr', s, t],
      Z = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      j = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      z = () => ['auto', ...d()],
      P = () => [L, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...d()],
      i = () => [e, s, t],
      me = () => [...E(), ye, we, { position: [s, t] }],
      pe = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      ue = () => ['auto', 'cover', 'contain', dr, ir, { size: [s, t] }],
      K = () => [oe, W, I],
      x = () => ['', 'none', 'full', g, s, t],
      k = () => ['', m, W, I],
      U = () => ['solid', 'dashed', 'dotted', 'double'],
      fe = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      b = () => [m, oe, ye, we],
      be = () => ['', 'none', w, s, t],
      Y = () => ['none', m, s, t],
      H = () => ['none', m, s, t],
      ee = () => [m, s, t],
      X = () => [L, 'full', ...d()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [C],
        breakpoint: [C],
        color: [or],
        container: [C],
        'drop-shadow': [C],
        ease: ['in', 'out', 'in-out'],
        font: [ar],
        'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
        'inset-shadow': [C],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [C],
        shadow: [C],
        spacing: ['px', m],
        text: [C],
        'text-shadow': [C],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', L, t, s, G] }],
        container: ['container'],
        columns: [{ columns: [m, t, s, u] }],
        'break-after': [{ 'break-after': O() }],
        'break-before': [{ 'break-before': O() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: T() }],
        overflow: [{ overflow: S() }],
        'overflow-x': [{ 'overflow-x': S() }],
        'overflow-y': [{ 'overflow-y': S() }],
        overscroll: [{ overscroll: $() }],
        'overscroll-x': [{ 'overscroll-x': $() }],
        'overscroll-y': [{ 'overscroll-y': $() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: v() }],
        'inset-x': [{ 'inset-x': v() }],
        'inset-y': [{ 'inset-y': v() }],
        start: [{ start: v() }],
        end: [{ end: v() }],
        top: [{ top: v() }],
        right: [{ right: v() }],
        bottom: [{ bottom: v() }],
        left: [{ left: v() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [M, 'auto', s, t] }],
        basis: [{ basis: [L, 'full', 'auto', u, ...d()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [m, L, 'auto', 'initial', 'none', t] }],
        grow: [{ grow: ['', m, s, t] }],
        shrink: [{ shrink: ['', m, s, t] }],
        order: [{ order: [M, 'first', 'last', 'none', s, t] }],
        'grid-cols': [{ 'grid-cols': le() }],
        'col-start-end': [{ col: ce() }],
        'col-start': [{ 'col-start': J() }],
        'col-end': [{ 'col-end': J() }],
        'grid-rows': [{ 'grid-rows': le() }],
        'row-start-end': [{ row: ce() }],
        'row-start': [{ 'row-start': J() }],
        'row-end': [{ 'row-end': J() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': de() }],
        'auto-rows': [{ 'auto-rows': de() }],
        gap: [{ gap: d() }],
        'gap-x': [{ 'gap-x': d() }],
        'gap-y': [{ 'gap-y': d() }],
        'justify-content': [{ justify: [...Z(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...j(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...j()] }],
        'align-content': [{ content: ['normal', ...Z()] }],
        'align-items': [{ items: [...j(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...j(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': Z() }],
        'place-items': [{ 'place-items': [...j(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...j()] }],
        p: [{ p: d() }],
        px: [{ px: d() }],
        py: [{ py: d() }],
        ps: [{ ps: d() }],
        pe: [{ pe: d() }],
        pt: [{ pt: d() }],
        pr: [{ pr: d() }],
        pb: [{ pb: d() }],
        pl: [{ pl: d() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        'space-x': [{ 'space-x': d() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': d() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: P() }],
        w: [{ w: [u, 'screen', ...P()] }],
        'min-w': [{ 'min-w': [u, 'screen', 'none', ...P()] }],
        'max-w': [{ 'max-w': [u, 'screen', 'none', 'prose', { screen: [l] }, ...P()] }],
        h: [{ h: ['screen', 'lh', ...P()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...P()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...P()] }],
        'font-size': [{ text: ['base', o, W, I] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [r, s, te] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              oe,
              t,
            ],
          },
        ],
        'font-family': [{ font: [cr, t, n] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [a, s, t] }],
        'line-clamp': [{ 'line-clamp': [m, 'none', s, te] }],
        leading: [{ leading: [c, ...d()] }],
        'list-image': [{ 'list-image': ['none', s, t] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', s, t] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: i() }],
        'text-color': [{ text: i() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...U(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [m, 'from-font', 'auto', s, I] }],
        'text-decoration-color': [{ decoration: i() }],
        'underline-offset': [{ 'underline-offset': [m, 'auto', s, t] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: d() }],
        'vertical-align': [
          { align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', s, t] },
        ],
        whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', s, t] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: me() }],
        'bg-repeat': [{ bg: pe() }],
        'bg-size': [{ bg: ue() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, M, s, t],
                radial: ['', s, t],
                conic: [M, s, t],
              },
              mr,
              lr,
            ],
          },
        ],
        'bg-color': [{ bg: i() }],
        'gradient-from-pos': [{ from: K() }],
        'gradient-via-pos': [{ via: K() }],
        'gradient-to-pos': [{ to: K() }],
        'gradient-from': [{ from: i() }],
        'gradient-via': [{ via: i() }],
        'gradient-to': [{ to: i() }],
        rounded: [{ rounded: x() }],
        'rounded-s': [{ 'rounded-s': x() }],
        'rounded-e': [{ 'rounded-e': x() }],
        'rounded-t': [{ 'rounded-t': x() }],
        'rounded-r': [{ 'rounded-r': x() }],
        'rounded-b': [{ 'rounded-b': x() }],
        'rounded-l': [{ 'rounded-l': x() }],
        'rounded-ss': [{ 'rounded-ss': x() }],
        'rounded-se': [{ 'rounded-se': x() }],
        'rounded-ee': [{ 'rounded-ee': x() }],
        'rounded-es': [{ 'rounded-es': x() }],
        'rounded-tl': [{ 'rounded-tl': x() }],
        'rounded-tr': [{ 'rounded-tr': x() }],
        'rounded-br': [{ 'rounded-br': x() }],
        'rounded-bl': [{ 'rounded-bl': x() }],
        'border-w': [{ border: k() }],
        'border-w-x': [{ 'border-x': k() }],
        'border-w-y': [{ 'border-y': k() }],
        'border-w-s': [{ 'border-s': k() }],
        'border-w-e': [{ 'border-e': k() }],
        'border-w-t': [{ 'border-t': k() }],
        'border-w-r': [{ 'border-r': k() }],
        'border-w-b': [{ 'border-b': k() }],
        'border-w-l': [{ 'border-l': k() }],
        'divide-x': [{ 'divide-x': k() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': k() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...U(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...U(), 'hidden', 'none'] }],
        'border-color': [{ border: i() }],
        'border-color-x': [{ 'border-x': i() }],
        'border-color-y': [{ 'border-y': i() }],
        'border-color-s': [{ 'border-s': i() }],
        'border-color-e': [{ 'border-e': i() }],
        'border-color-t': [{ 'border-t': i() }],
        'border-color-r': [{ 'border-r': i() }],
        'border-color-b': [{ 'border-b': i() }],
        'border-color-l': [{ 'border-l': i() }],
        'divide-color': [{ divide: i() }],
        'outline-style': [{ outline: [...U(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [m, s, t] }],
        'outline-w': [{ outline: ['', m, W, I] }],
        'outline-color': [{ outline: i() }],
        shadow: [{ shadow: ['', 'none', h, Q, D] }],
        'shadow-color': [{ shadow: i() }],
        'inset-shadow': [{ 'inset-shadow': ['none', R, Q, D] }],
        'inset-shadow-color': [{ 'inset-shadow': i() }],
        'ring-w': [{ ring: k() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: i() }],
        'ring-offset-w': [{ 'ring-offset': [m, I] }],
        'ring-offset-color': [{ 'ring-offset': i() }],
        'inset-ring-w': [{ 'inset-ring': k() }],
        'inset-ring-color': [{ 'inset-ring': i() }],
        'text-shadow': [{ 'text-shadow': ['none', V, Q, D] }],
        'text-shadow-color': [{ 'text-shadow': i() }],
        opacity: [{ opacity: [m, s, t] }],
        'mix-blend': [{ 'mix-blend': [...fe(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': fe() }],
        'mask-clip': [{ 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }, 'mask-no-clip'],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [m] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': b() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': b() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': i() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': i() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': b() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': b() }],
        'mask-image-t-from-color': [{ 'mask-t-from': i() }],
        'mask-image-t-to-color': [{ 'mask-t-to': i() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': b() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': b() }],
        'mask-image-r-from-color': [{ 'mask-r-from': i() }],
        'mask-image-r-to-color': [{ 'mask-r-to': i() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': b() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': b() }],
        'mask-image-b-from-color': [{ 'mask-b-from': i() }],
        'mask-image-b-to-color': [{ 'mask-b-to': i() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': b() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': b() }],
        'mask-image-l-from-color': [{ 'mask-l-from': i() }],
        'mask-image-l-to-color': [{ 'mask-l-to': i() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': b() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': b() }],
        'mask-image-x-from-color': [{ 'mask-x-from': i() }],
        'mask-image-x-to-color': [{ 'mask-x-to': i() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': b() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': b() }],
        'mask-image-y-from-color': [{ 'mask-y-from': i() }],
        'mask-image-y-to-color': [{ 'mask-y-to': i() }],
        'mask-image-radial': [{ 'mask-radial': [s, t] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': b() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': b() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': i() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': i() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [{ 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] }],
        'mask-image-radial-pos': [{ 'mask-radial-at': E() }],
        'mask-image-conic-pos': [{ 'mask-conic': [m] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': b() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': b() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': i() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': i() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [{ 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }],
        'mask-position': [{ mask: me() }],
        'mask-repeat': [{ mask: pe() }],
        'mask-size': [{ mask: ue() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', s, t] }],
        filter: [{ filter: ['', 'none', s, t] }],
        blur: [{ blur: be() }],
        brightness: [{ brightness: [m, s, t] }],
        contrast: [{ contrast: [m, s, t] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', F, Q, D] }],
        'drop-shadow-color': [{ 'drop-shadow': i() }],
        grayscale: [{ grayscale: ['', m, s, t] }],
        'hue-rotate': [{ 'hue-rotate': [m, s, t] }],
        invert: [{ invert: ['', m, s, t] }],
        saturate: [{ saturate: [m, s, t] }],
        sepia: [{ sepia: ['', m, s, t] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', s, t] }],
        'backdrop-blur': [{ 'backdrop-blur': be() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [m, s, t] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [m, s, t] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', m, s, t] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [m, s, t] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', m, s, t] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [m, s, t] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [m, s, t] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', m, s, t] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': d() }],
        'border-spacing-x': [{ 'border-spacing-x': d() }],
        'border-spacing-y': [{ 'border-spacing-y': d() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', s, t] }],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [m, 'initial', s, t] }],
        ease: [{ ease: ['linear', 'initial', A, s, t] }],
        delay: [{ delay: [m, s, t] }],
        animate: [{ animate: ['none', q, s, t] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [y, s, t] }],
        'perspective-origin': [{ 'perspective-origin': T() }],
        rotate: [{ rotate: Y() }],
        'rotate-x': [{ 'rotate-x': Y() }],
        'rotate-y': [{ 'rotate-y': Y() }],
        'rotate-z': [{ 'rotate-z': Y() }],
        scale: [{ scale: H() }],
        'scale-x': [{ 'scale-x': H() }],
        'scale-y': [{ 'scale-y': H() }],
        'scale-z': [{ 'scale-z': H() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: ee() }],
        'skew-x': [{ 'skew-x': ee() }],
        'skew-y': [{ 'skew-y': ee() }],
        transform: [{ transform: [s, t, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: T() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: X() }],
        'translate-x': [{ 'translate-x': X() }],
        'translate-y': [{ 'translate-y': X() }],
        'translate-z': [{ 'translate-z': X() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: i() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: i() }],
        'color-scheme': [{ scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              s,
              t,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': d() }],
        'scroll-mx': [{ 'scroll-mx': d() }],
        'scroll-my': [{ 'scroll-my': d() }],
        'scroll-ms': [{ 'scroll-ms': d() }],
        'scroll-me': [{ 'scroll-me': d() }],
        'scroll-mt': [{ 'scroll-mt': d() }],
        'scroll-mr': [{ 'scroll-mr': d() }],
        'scroll-mb': [{ 'scroll-mb': d() }],
        'scroll-ml': [{ 'scroll-ml': d() }],
        'scroll-p': [{ 'scroll-p': d() }],
        'scroll-px': [{ 'scroll-px': d() }],
        'scroll-py': [{ 'scroll-py': d() }],
        'scroll-ps': [{ 'scroll-ps': d() }],
        'scroll-pe': [{ 'scroll-pe': d() }],
        'scroll-pt': [{ 'scroll-pt': d() }],
        'scroll-pr': [{ 'scroll-pr': d() }],
        'scroll-pb': [{ 'scroll-pb': d() }],
        'scroll-pl': [{ 'scroll-pl': d() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', s, t] }],
        fill: [{ fill: ['none', ...i()] }],
        'stroke-w': [{ stroke: [m, W, I, te] }],
        stroke: [{ stroke: ['none', ...i()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  br = Xe(fr);
function hr(...e) {
  return br(Le(e));
}
export { Le as a, hr as c, gr as j };
