import {
  c as createComponent,
  b as createAstro,
  m as maybeRenderHead,
  h as addAttribute,
  a as renderTemplate,
  r as renderComponent,
} from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { $ as $$Layout, B as Button } from '../chunks/Layout_COa48ijw.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { use } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$DevCard = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$DevCard;
    const { id, name, user } = Astro2.props;
    return renderTemplate`${maybeRenderHead()}<div class="justify-center items-center border-l-[1.2px] md:min-h-[130px] border-t-[1.2px] md:border-t-0 transform-gpu flex flex-col p-10"> <img class="w-24 h-24"${addAttribute(`https://japi.rest/discord/v1/user/${id}/avatar`, 'src')}> <h1 class="text-lg">${name}</h1> <p class="text-xs">@${user}</p> </div>`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/components/cards/DevCard.astro',
  void 0
);

const TerminalCard = ({ command, output }) =>
  /* @__PURE__ */ jsx('div', {
    className: 'relative w-full flex-col md:w-auto md:self-start flex aspect-video flex-grow self-start md:max-w-lg',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'border-foreground border-2 bg-background relative w-full',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'bg-foreground flex flex-row justify-between px-2 py-1 text-xs text-background',
          children: [
            /* @__PURE__ */ jsx('span', { className: 'font-bold', children: 'Terminal' }),
            /* @__PURE__ */ jsx('span', { className: 'mb-1 h-0.5 w-2 self-end bg-background' }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'flex flex-col overflow-auto p-4 font-mono text-sm',
          children: /* @__PURE__ */ jsxs('pre', {
            className: 'flex flex-col gap-y-2 pb-4',
            children: [
              /* @__PURE__ */ jsxs('code', { children: ['$ ', command] }),
              /* @__PURE__ */ jsx('code', { className: 'text-muted-foreground', children: output }),
            ],
          }),
        }),
      ],
    }),
  });

async function getGuilds() {
  const response = await fetch('http://localhost:3000/guilds');
  return response.json();
}
function GuildList() {
  const guilds = use(getGuilds());
  const data = guilds.map((guild, index) => `${String(index).padStart(2, '0')}. ${guild.name}`);
  return /* @__PURE__ */ jsx(TerminalCard, { command: 'cat server_list.md', output: data.join('\n') });
}

const $$Index = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, {}, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-h-[40rem] relative w-full flex md:items-center md:justify-center overflow-hidden px-8 md:min-h-[40rem] md:border-b border-dashed bg-gradient-to-tl from-background to-accent/30"> <div class="overflow-hidden md:px-10 -mb-32 mt-[-4.75rem] pb-32 pt-[4.75rem]"> <div class="lg:max-w-7xl mx-auto grid max-w-full grid-cols-1 items-center gap-x-6 gap-y-14 px-4 py-2 lg:grid-cols-2 lg:px-8 lg:py-4 xl:gap-x-16 xl:px-12"> <div class="relative z-10 md:text-center lg:text-left"> <div class="flex gap-x-4 items-center"> <span class="bg-foreground text-background px-0.5 text-sm">00.</span> <h1 class="text-lg">Ohio</h1> </div> <p>Ohio the best discord bot raider</p> <div class="mt-4 flex w-fit gap-4 font-sans flex-row md:justify-center lg:justify-start items-center"> <a href="/login"> ${renderComponent($$result2, 'Button', Button, { className: 'rounded-none cursor-pointer' }, { default: ($$result3) => renderTemplate`Log In` })} </a> <a href="https://discord.com/oauth2/authorize?client_id=1386123405098483743&permissions=8&integration_type=0&scope=bot" target="_blank"> ${renderComponent($$result2, 'Button', Button, { variant: 'outline', className: 'rounded-none cursor-pointer' }, { default: ($$result3) => renderTemplate`Add Bot` })} </a> </div> </div> ${renderComponent($$result2, 'GuildList', GuildList, {})} </div> </div> </main> <section class="max-w-3xl mt-10 mx-auto font-mono relative md:border-l-0 md:border-b-0 md:border-[1.2px] rounded-none -pr-2"> <div class="w-full md:mx-0"> <div class="px-3 py-2 -ml-2 absolute"> <div class="flex gap-x-4 items-center"> <span class="bg-foreground text-background px-0.5 text-sm">01.</span><h1 class="text-lg">Devs</h1> </div> </div> <div class="grid grid-cols-1 relative md:grid-rows-1 md:grid-cols-3 border-b-[1.2px]"> ${renderComponent($$result2, 'DevCard', $$DevCard, { id: '1085280364601294870', name: 'Fifix', user: 'fifix.' })} ${renderComponent($$result2, 'DevCard', $$DevCard, { id: '659838596139974657', name: 'd monsi', user: 'asiancry' })} ${renderComponent($$result2, 'DevCard', $$DevCard, { id: '776176694209413170', name: 'inferno', user: 'amxterasus' })} </div> </div> </section> ` })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/index.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/index.astro';
const $$url = '';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
