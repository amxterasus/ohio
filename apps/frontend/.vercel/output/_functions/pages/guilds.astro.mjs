import {
  c as createComponent,
  r as renderComponent,
  a as renderTemplate,
  m as maybeRenderHead,
} from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { B as Button, $ as $$Layout } from '../chunks/Layout_COa48ijw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { I as Input } from '../chunks/input_CZvIitVv.mjs';
import { useState } from 'react';
import {
  C as Card,
  d as CardHeader,
  b as CardTitle,
  c as CardDescription,
  a as CardContent,
} from '../chunks/card_Davb4WV8.mjs';
import { Users } from 'lucide-react';
import { A as API_BASE } from '../chunks/consts_DwCeqLk2.mjs';
export { renderers } from '../renderers.mjs';

const GuildInfo = ({ guild, owner, invite }) => {
  return /* @__PURE__ */ jsxs(Card, {
    className: 'w-full max-w-md mx-auto bg-background',
    children: [
      /* @__PURE__ */ jsx(CardHeader, {
        className: 'pb-4',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center gap-3',
          children: [
            /* @__PURE__ */ jsxs('div', {
              className: 'relative',
              children: [
                guild.icon
                  ? /* @__PURE__ */ jsx('img', {
                      src: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`,
                      alt: guild.name,
                      className: 'w-12 h-12 rounded-full',
                    })
                  : /* @__PURE__ */ jsx('span', {
                      className: 'w-12 h-12 p-4 rounded-full bg-accent-foreground text-background',
                      children: guild.nameAcronym,
                    }),
                /* @__PURE__ */ jsx('div', {
                  className: 'absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white',
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'flex-1',
              children: [
                /* @__PURE__ */ jsx(CardTitle, { className: 'text-lg', children: guild.name }),
                /* @__PURE__ */ jsx(CardDescription, { className: 'text-sm', children: guild.description }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(CardContent, {
        className: 'space-y-4',
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: 'flex items-center justify-between text-sm',
            children: [
              /* @__PURE__ */ jsxs('div', {
                className: 'flex items-center gap-2 text-muted-foreground',
                children: [
                  /* @__PURE__ */ jsx(Users, { className: 'w-4 h-4' }),
                  /* @__PURE__ */ jsxs('span', { children: [guild.memberCount, ' miembros'] }),
                ],
              }),
              /* @__PURE__ */ jsx('div', { className: 'flex items-center gap-2 text-green-600' }),
            ],
          }),
          /* @__PURE__ */ jsx('hr', {}),
          /* @__PURE__ */ jsxs('div', {
            className: 'flex gap-2 pt-2',
            children: [
              /* @__PURE__ */ jsx('a', {
                href: invite,
                target: '_blank',
                className: 'w-full',
                children: /* @__PURE__ */ jsx(Button, {
                  className: 'flex-1 cursor-pointer',
                  children: 'Join the server',
                }),
              }),
              /* @__PURE__ */ jsx('a', {
                href: `/raid/${guild.id}`,
                className: 'w-full',
                children: /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  className: 'flex-1 cursor-pointer',
                  children: 'Start Raid',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

async function getGuild(guildId) {
  if (!guildId) throw Error('No guild ID');
  const response = await fetch(`${API_BASE}/guilds/${guildId}`);
  if (!response.ok) throw Error('not found server!');
  return response.json();
}
const GuildForm = () => {
  const [lookupId, setLookupId] = useState('');
  const [error, setError] = useState('');
  const [guild, setGuild] = useState(null);
  const onClick = async () => {
    if (!lookupId) return setError('please provide a guild id');
    try {
      const guildData = await getGuild(lookupId);
      setGuild(guildData);
      setError('');
    } catch (err) {
      console.error('Failed to fetch guild:', err);
      setError(err?.message);
      setGuild(null);
    }
  };
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex flex-row gap-4',
        children: [
          /* @__PURE__ */ jsx(Input, {
            type: 'text',
            placeholder: 'Guild ID',
            onChange: (e) => setLookupId(e.target.value),
            required: true,
          }),
          /* @__PURE__ */ jsx(Button, {
            className: 'cursor-pointer',
            onClick,
            disabled: !lookupId,
            children: 'Lookup',
          }),
        ],
      }),
      error && /* @__PURE__ */ jsx('p', { className: 'mt-2 text-destructive', children: error }),
      /* @__PURE__ */ jsx('div', {
        className: 'mt-7',
        children: guild && /* @__PURE__ */ jsx(GuildInfo, { ...guild }),
      }),
    ],
  });
};

const $$Guilds = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, { title: 'guilds' }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-h-[40rem] relative w-full flex md:items-center md:justify-center overflow-hidden px-8 md:min-h-[40rem] bg-gradient-to-tl from-background to-accent/30"> <div class="overflow-hidden md:px-10 -mb-32 mt-[-4.75rem] pb-32 pt-[4.75rem]"> <div class="md:text-center lg:text-left"> <div class="flex gap-x-4 mb-4 items-center"> <span class="bg-foreground text-background px-0.5 text-sm">02.</span> <h1 class="text-lg">Guild</h1> </div> <div class="flex flex-row gap-4"> ${renderComponent($$result2, 'GuildForm', GuildForm, { 'client:load': true, 'client:component-hydration': 'load', 'client:component-path': '@/components/cards/GuildForm', 'client:component-export': 'GuildForm' })} </div> </div> </div> </main> ` })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/guilds.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/guilds.astro';
const $$url = '/guilds';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Guilds,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
