import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COa48ijw.mjs';
export { renderers } from '../renderers.mjs';

const $$Commands = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, { title: 'commands' })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/commands.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/commands.astro';
const $$url = '/commands';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Commands,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
