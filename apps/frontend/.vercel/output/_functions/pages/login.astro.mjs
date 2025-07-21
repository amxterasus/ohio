import { c as createComponent, b as createAstro } from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import 'clsx';
import { A as API_BASE } from '../chunks/consts_DwCeqLk2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Login;
    return Astro2.redirect(`${API_BASE}/login/discord`);
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/login.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/login.astro';
const $$url = '/login';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Login,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
