import { c as createComponent, d as renderScript, a as renderTemplate } from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Logout = createComponent(
  async ($$result, $$props, $$slots) => {
    return renderTemplate`${renderScript($$result, '/home/amxte/projects/ohio/apps/frontend/src/pages/logout.astro?astro&type=script&index=0&lang.ts')}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/logout.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/logout.astro';
const $$url = '/logout';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Logout,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
