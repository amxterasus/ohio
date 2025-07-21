import {
  c as createComponent,
  r as renderComponent,
  a as renderTemplate,
  m as maybeRenderHead,
} from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COa48ijw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { C as Card, a as CardContent, b as CardTitle, c as CardDescription } from '../chunks/card_Davb4WV8.mjs';
import { useState, useEffect } from 'react';
import { A as API_BASE } from '../chunks/consts_DwCeqLk2.mjs';
export { renderers } from '../renderers.mjs';

const getProfile = async () => {
  const response = await fetch(`${API_BASE}/login/discord/profile`, {
    credentials: 'include',
  });
  if (!response.ok) window.location.href = '/';
  const data = await response.json();
  console.log(data);
  return data.user;
};
const ProfileCard = () => {
  const [profile, setProfile] = useState(void 0);
  useEffect(() => {
    const fetchProfile = async () => {
      const profile2 = await getProfile();
      setProfile(profile2);
    };
    fetchProfile();
  }, []);
  return /* @__PURE__ */ jsx(Card, {
    className: 'w-full max-w-md mx-auto bg-background',
    children: /* @__PURE__ */ jsx(CardContent, {
      children: /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center gap-3',
        children: [
          /* @__PURE__ */ jsx('div', {
            className: 'relative',
            children: /* @__PURE__ */ jsx('img', {
              src: `https://japi.rest/discord/v1/user/${profile?.id}/avatar`,
              className: 'w-22 rounded-full',
            }),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: 'flex-1',
            children: [
              /* @__PURE__ */ jsx(CardTitle, { className: 'text-2xl', children: profile?.global_name }),
              /* @__PURE__ */ jsx(CardDescription, { className: 'text-sm', children: profile?.username }),
              /* @__PURE__ */ jsx(CardDescription, { children: `id: ${profile?.id}` }),
            ],
          }),
        ],
      }),
    }),
  });
};

const $$Profile = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, { title: 'profile' }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-h-[40rem] relative w-full flex md:items-center md:justify-center overflow-hidden px-8 md:min-h-[40rem] bg-gradient-to-tl from-background to-accent/30"> <div class="overflow-hidden md:px-10 -mb-32 mt-[-4.75rem] pb-32 pt-[4.75rem]"> <div class="md:text-center lg:text-left"> <div class="flex gap-x-4 mb-4 items-center"> <span class="bg-foreground text-background px-0.5 text-sm">04.</span> <h1 class="text-lg">Profile</h1> </div> <div class="flex flex-row gap-4"> ${renderComponent($$result2, 'ProfileCard', ProfileCard, { 'client:load': true, 'client:component-hydration': 'load', 'client:component-path': '@/components/cards/ProfileCard', 'client:component-export': 'ProfileCard' })} </div> </div> </div> </main> ` })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/profile.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/profile.astro';
const $$url = '/profile';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Profile,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
