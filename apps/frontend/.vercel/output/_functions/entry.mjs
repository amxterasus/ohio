import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C2uiVuk8.mjs';
import { manifest } from './manifest_TperyRPM.mjs';

const serverIslandMap = new Map();

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/commands.astro.mjs');
const _page3 = () => import('./pages/guilds.astro.mjs');
const _page4 = () => import('./pages/joins.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/logout.astro.mjs');
const _page7 = () => import('./pages/profile.astro.mjs');
const _page8 = () => import('./pages/raid/_id_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
  ['../../node_modules/astro/dist/assets/endpoint/generic.js', _page0],
  ['../../node_modules/astro/dist/actions/runtime/route.js', _page1],
  ['src/pages/commands.astro', _page2],
  ['src/pages/guilds.astro', _page3],
  ['src/pages/joins.astro', _page4],
  ['src/pages/login.astro', _page5],
  ['src/pages/logout.astro', _page6],
  ['src/pages/profile.astro', _page7],
  ['src/pages/raid/[id].astro', _page8],
  ['src/pages/index.astro', _page9],
]);

const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import('./_astro-internal_actions.mjs'),
  middleware: () => import('./_noop-middleware.mjs'),
});
const _args = {
  middlewareSecret: 'f18458da-6c47-4f4f-a8dd-8572cb4b0a53',
  skewProtection: false,
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
