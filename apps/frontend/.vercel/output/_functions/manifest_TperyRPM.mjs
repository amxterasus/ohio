import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_ZzAh1HeT.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_BuexQOyv.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_SViUe73y.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === 'string') {
        return [key, value.normalize().replace(/#/g, '%23').replace(/\?/g, '%3F')];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || '';
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, '%3F').replace(/#/g, '%23').replace(/%5B/g, '[').replace(/%5D/g, ']');
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join('');
  return segmentPath ? '/' + segmentPath : '';
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = '';
    if (addTrailingSlash === 'always' && segments.length) {
      trailing = '/';
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join('') + trailing;
    return path || '/';
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key,
  };
}

const manifest = deserializeManifest({
  hrefRoot: 'file:///home/amxte/projects/ohio/apps/frontend/',
  cacheDir: 'file:///home/amxte/projects/ohio/apps/frontend/node_modules/.astro/',
  outDir: 'file:///home/amxte/projects/ohio/apps/frontend/dist/',
  srcDir: 'file:///home/amxte/projects/ohio/apps/frontend/src/',
  publicDir: 'file:///home/amxte/projects/ohio/apps/frontend/public/',
  buildClientDir: 'file:///home/amxte/projects/ohio/apps/frontend/dist/client/',
  buildServerDir: 'file:///home/amxte/projects/ohio/apps/frontend/dist/server/',
  adapterName: '@astrojs/vercel',
  routes: [
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: 'page',
        component: '_server-islands.astro',
        params: ['name'],
        segments: [
          [{ content: '_server-islands', dynamic: false, spread: false }],
          [{ content: 'name', dynamic: true, spread: false }],
        ],
        pattern: '^\\/_server-islands\\/([^/]+?)\\/?$',
        prerender: false,
        isIndex: false,
        fallbackRoutes: [],
        route: '/_server-islands/[name]',
        origin: 'internal',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: 'endpoint',
        isIndex: false,
        route: '/_image',
        pattern: '^\\/_image\\/?$',
        segments: [[{ content: '_image', dynamic: false, spread: false }]],
        params: [],
        component: '../../node_modules/astro/dist/assets/endpoint/generic.js',
        pathname: '/_image',
        prerender: false,
        fallbackRoutes: [],
        origin: 'internal',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: 'endpoint',
        isIndex: false,
        route: '/_actions/[...path]',
        pattern: '^\\/_actions(?:\\/(.*?))?\\/?$',
        segments: [
          [{ content: '_actions', dynamic: false, spread: false }],
          [{ content: '...path', dynamic: true, spread: true }],
        ],
        params: ['...path'],
        component: '../../node_modules/astro/dist/actions/runtime/route.js',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'internal',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/commands',
        isIndex: false,
        type: 'page',
        pattern: '^\\/commands\\/?$',
        segments: [[{ content: 'commands', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/commands.astro',
        pathname: '/commands',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/guilds',
        isIndex: false,
        type: 'page',
        pattern: '^\\/guilds\\/?$',
        segments: [[{ content: 'guilds', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/guilds.astro',
        pathname: '/guilds',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/joins',
        isIndex: false,
        type: 'page',
        pattern: '^\\/joins\\/?$',
        segments: [[{ content: 'joins', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/joins.astro',
        pathname: '/joins',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/login',
        isIndex: false,
        type: 'page',
        pattern: '^\\/login\\/?$',
        segments: [[{ content: 'login', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/login.astro',
        pathname: '/login',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/logout',
        isIndex: false,
        type: 'page',
        pattern: '^\\/logout\\/?$',
        segments: [[{ content: 'logout', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/logout.astro',
        pathname: '/logout',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/profile',
        isIndex: false,
        type: 'page',
        pattern: '^\\/profile\\/?$',
        segments: [[{ content: 'profile', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/profile.astro',
        pathname: '/profile',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/raid/[id]',
        isIndex: false,
        type: 'page',
        pattern: '^\\/raid\\/([^/]+?)\\/?$',
        segments: [
          [{ content: 'raid', dynamic: false, spread: false }],
          [{ content: 'id', dynamic: true, spread: false }],
        ],
        params: ['id'],
        component: 'src/pages/raid/[id].astro',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [{ type: 'external', src: '/_astro/commands.DKaLn11J.css' }],
      routeData: {
        route: '/',
        isIndex: true,
        type: 'page',
        pattern: '^\\/$',
        segments: [],
        params: [],
        component: 'src/pages/index.astro',
        pathname: '/',
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: 'project',
        _meta: { trailingSlash: 'ignore' },
      },
    },
  ],
  base: '/',
  trailingSlash: 'ignore',
  compressHTML: true,
  componentMetadata: [
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/commands.astro', { propagation: 'none', containsHead: true }],
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/guilds.astro', { propagation: 'none', containsHead: true }],
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/index.astro', { propagation: 'none', containsHead: true }],
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/joins.astro', { propagation: 'none', containsHead: true }],
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/profile.astro', { propagation: 'none', containsHead: true }],
    ['/home/amxte/projects/ohio/apps/frontend/src/pages/raid/[id].astro', { propagation: 'none', containsHead: true }],
  ],
  renderers: [],
  clientDirectives: [
    [
      'idle',
      '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      'load',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      'media',
      '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      'only',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      'visible',
      '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    '\u0000@astrojs-ssr-adapter': '_@astrojs-ssr-adapter.mjs',
    '\u0000noop-middleware': '_noop-middleware.mjs',
    '\u0000@astro-page:../../node_modules/astro/dist/actions/runtime/route@_@js': 'pages/_actions/_---path_.astro.mjs',
    '\u0000@astro-page:src/pages/commands@_@astro': 'pages/commands.astro.mjs',
    '\u0000@astro-page:src/pages/login@_@astro': 'pages/login.astro.mjs',
    '\u0000@astro-page:src/pages/logout@_@astro': 'pages/logout.astro.mjs',
    '\u0000@astrojs-ssr-virtual-entry': 'entry.mjs',
    '\u0000astro-internal:actions': '_astro-internal_actions.mjs',
    '\u0000@astro-page:src/pages/joins@_@astro': 'pages/joins.astro.mjs',
    '\u0000@astro-page:src/pages/profile@_@astro': 'pages/profile.astro.mjs',
    '\u0000@astro-page:src/pages/raid/[id]@_@astro': 'pages/raid/_id_.astro.mjs',
    '\u0000@astro-page:src/pages/guilds@_@astro': 'pages/guilds.astro.mjs',
    '\u0000@astro-renderers': 'renderers.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'pages/index.astro.mjs',
    '\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/generic@_@js': 'pages/_image.astro.mjs',
    '/home/amxte/projects/ohio/node_modules/astro/dist/assets/services/sharp.js': 'chunks/sharp_BeNH4Yms.mjs',
    '\u0000@astrojs-manifest': 'manifest_TperyRPM.mjs',
    '@/components/cards/GuildForm': '_astro/GuildForm.nJ6XHWDa.js',
    '@/components/cards/ProfileCard': '_astro/ProfileCard.Bd4GJAy6.js',
    '@/components/cards/RaidCard': '_astro/RaidCard.OmMVXaGD.js',
    '@/components/ui/ModeToggle': '_astro/ModeToggle.D_acye8Z.js',
    '@astrojs/react/client.js': '_astro/client.DHXzozRT.js',
    '/home/amxte/projects/ohio/apps/frontend/src/pages/logout.astro?astro&type=script&index=0&lang.ts':
      '_astro/logout.astro_astro_type_script_index_0_lang.JdDeMPYg.js',
    'astro:scripts/before-hydration.js': '',
  },
  inlinedScripts: [],
  assets: [
    '/_astro/commands.DKaLn11J.css',
    '/favicon.svg',
    '/_astro/GuildForm.nJ6XHWDa.js',
    '/_astro/ModeToggle.D_acye8Z.js',
    '/_astro/ProfileCard.Bd4GJAy6.js',
    '/_astro/RaidCard.OmMVXaGD.js',
    '/_astro/button.BF480X0V.js',
    '/_astro/card.DsYk_Z8h.js',
    '/_astro/client.DHXzozRT.js',
    '/_astro/consts.-Mp9XY9I.js',
    '/_astro/createLucideIcon.BKEndsVH.js',
    '/_astro/index.CqJmc5Mb.js',
    '/_astro/index.DN5WaTab.js',
    '/_astro/input.BoGiS29c.js',
    '/_astro/logout.astro_astro_type_script_index_0_lang.JdDeMPYg.js',
    '/_astro/utils.BYJ6mHyy.js',
  ],
  buildFormat: 'directory',
  checkOrigin: true,
  serverIslandNameMap: [],
  key: 'rr2+5atODfRHH6Jv1XOExfQKtudCEdt97M/ekGj0KxA=',
});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
