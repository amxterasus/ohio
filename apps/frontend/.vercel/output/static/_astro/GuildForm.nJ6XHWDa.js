import { j as e } from './utils.BYJ6mHyy.js';
import { I as m } from './input.BoGiS29c.js';
import { B as o } from './button.BF480X0V.js';
import { r as n } from './index.CqJmc5Mb.js';
import { C as x, a as u, b as h, c as p, d as f } from './card.DsYk_Z8h.js';
import { c as j } from './createLucideIcon.BKEndsVH.js';
import { A as N } from './consts.-Mp9XY9I.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ],
  v = j('users', g),
  b = ({ guild: s, owner: a, invite: t }) =>
    e.jsxs(x, {
      className: 'w-full max-w-md mx-auto bg-background',
      children: [
        e.jsx(u, {
          className: 'pb-4',
          children: e.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
              e.jsxs('div', {
                className: 'relative',
                children: [
                  s.icon
                    ? e.jsx('img', {
                        src: `https://cdn.discordapp.com/icons/${s.id}/${s.icon}.png?size=2048`,
                        alt: s.name,
                        className: 'w-12 h-12 rounded-full',
                      })
                    : e.jsx('span', {
                        className: 'w-12 h-12 p-4 rounded-full bg-accent-foreground text-background',
                        children: s.nameAcronym,
                      }),
                  e.jsx('div', {
                    className: 'absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white',
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'flex-1',
                children: [
                  e.jsx(h, { className: 'text-lg', children: s.name }),
                  e.jsx(p, { className: 'text-sm', children: s.description }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs(f, {
          className: 'space-y-4',
          children: [
            e.jsxs('div', {
              className: 'flex items-center justify-between text-sm',
              children: [
                e.jsxs('div', {
                  className: 'flex items-center gap-2 text-muted-foreground',
                  children: [
                    e.jsx(v, { className: 'w-4 h-4' }),
                    e.jsxs('span', { children: [s.memberCount, ' miembros'] }),
                  ],
                }),
                e.jsx('div', { className: 'flex items-center gap-2 text-green-600' }),
              ],
            }),
            e.jsx('hr', {}),
            e.jsxs('div', {
              className: 'flex gap-2 pt-2',
              children: [
                e.jsx('a', {
                  href: t,
                  target: '_blank',
                  className: 'w-full',
                  children: e.jsx(o, { className: 'flex-1 cursor-pointer', children: 'Join the server' }),
                }),
                e.jsx('a', {
                  href: `/raid/${s.id}`,
                  className: 'w-full',
                  children: e.jsx(o, {
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
async function w(s) {
  if (!s) throw Error('No guild ID');
  const a = await fetch(`${N}/guilds/${s}`);
  if (!a.ok) throw Error('not found server!');
  return a.json();
}
const $ = () => {
  const [s, a] = n.useState(''),
    [t, c] = n.useState(''),
    [l, i] = n.useState(null),
    d = async () => {
      if (!s) return c('please provide a guild id');
      try {
        const r = await w(s);
        (i(r), c(''));
      } catch (r) {
        (console.error('Failed to fetch guild:', r), c(r?.message), i(null));
      }
    };
  return e.jsxs('div', {
    children: [
      e.jsxs('div', {
        className: 'flex flex-row gap-4',
        children: [
          e.jsx(m, { type: 'text', placeholder: 'Guild ID', onChange: (r) => a(r.target.value), required: !0 }),
          e.jsx(o, { className: 'cursor-pointer', onClick: d, disabled: !s, children: 'Lookup' }),
        ],
      }),
      t && e.jsx('p', { className: 'mt-2 text-destructive', children: t }),
      e.jsx('div', { className: 'mt-7', children: l && e.jsx(b, { ...l }) }),
    ],
  });
};
export { $ as GuildForm };
