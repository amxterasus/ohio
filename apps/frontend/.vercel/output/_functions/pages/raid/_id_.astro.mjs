import {
  c as createComponent,
  b as createAstro,
  r as renderComponent,
  a as renderTemplate,
  m as maybeRenderHead,
} from '../../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { B as Button, $ as $$Layout } from '../../chunks/Layout_COa48ijw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { I as Input } from '../../chunks/input_CZvIitVv.mjs';
import { useState } from 'react';
import { A as API_BASE } from '../../chunks/consts_DwCeqLk2.mjs';
export { renderers } from '../../renderers.mjs';

const RaidCard = ({ guildId }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [ping, setPing] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const onClick = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    const res = await fetch(`${API_BASE}/raid?guildid=${guildId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
        ping,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      setError(text || `Error: ${res.status} ${res.statusText}`);
      return;
    }
    const data = await res.json();
    setSuccessMessage(`Raid executed in guild ${guildId}:
${JSON.stringify(data, null, 2)}`);
  };
  return /* @__PURE__ */ jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex flex-row gap-4',
        children: [
          /* @__PURE__ */ jsx(Input, {
            type: 'text',
            placeholder: 'Name',
            onChange: (e) => setName(e.target.value),
            required: true,
          }),
          /* @__PURE__ */ jsx(Input, {
            type: 'text',
            placeholder: 'Link',
            onChange: (e) => setLink(e.target.value),
            required: true,
          }),
          /* @__PURE__ */ jsx(Input, {
            type: 'text',
            placeholder: 'Ping (true/false)',
            onChange: (e) => setPing(e.target.value),
            required: true,
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Button, {
        size: 'sm',
        className: 'cursor-pointer',
        onClick: (e) => onClick(e),
        disabled: !name && !link && !ping,
        children: 'Raid',
      }),
      error && /* @__PURE__ */ jsx('p', { className: 'text-destructive whitespace-pre-wrap mt-2', children: error }),
      successMessage && /* @__PURE__ */ jsx('pre', { className: 'whitespace-pre-wrap mt-2', children: successMessage }),
    ],
  });
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$id;
    const { id } = Astro2.params;
    if (!id) throw new Error('Missing guild ID');
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, { title: `Raid` }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-h-[40rem] relative w-full flex md:items-center md:justify-center overflow-hidden px-8 md:min-h-[40rem] bg-gradient-to-tl from-background to-accent/30"> <div class="overflow-hidden md:px-10 -mb-32 mt-[-4.75rem] pb-32 pt-[4.75rem]"> <div class="md:text-center lg:text-left"> <div class="flex gap-x-4 mb-4 items-center"> <span class="bg-foreground text-background px-0.5 text-sm">03.</span> <h1 class="text-lg">Raid</h1> </div> <div class="flex flex-row gap-4"> ${renderComponent($$result2, 'RaidCard', RaidCard, { guildId: id, 'client:load': true, 'client:component-hydration': 'load', 'client:component-path': '@/components/cards/RaidCard', 'client:component-export': 'RaidCard' })} </div> </div> </div> </main>` })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/raid/[id].astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/raid/[id].astro';
const $$url = '/raid/[id]';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$id,
      file: $$file,
      prerender,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
