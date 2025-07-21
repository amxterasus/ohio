import { j as t } from './utils.BYJ6mHyy.js';
import { I as r } from './input.BoGiS29c.js';
import { B as S } from './button.BF480X0V.js';
import { r as a } from './index.CqJmc5Mb.js';
import { A as N } from './consts.-Mp9XY9I.js';
const $ = ({ guildId: n }) => {
  const [i, x] = a.useState(''),
    [o, m] = a.useState(''),
    [l, g] = a.useState(''),
    [c, u] = a.useState(null),
    [p, d] = a.useState(null),
    h = async (e) => {
      (e.preventDefault(), u(null), d(null));
      const s = await fetch(`${N}/raid?guildid=${n}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: i, link: o, ping: l }),
      });
      if (!s.ok) {
        const j = await s.text();
        u(j || `Error: ${s.status} ${s.statusText}`);
        return;
      }
      const f = await s.json();
      d(`Raid executed in guild ${n}:
${JSON.stringify(f, null, 2)}`);
    };
  return t.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      t.jsxs('div', {
        className: 'flex flex-row gap-4',
        children: [
          t.jsx(r, { type: 'text', placeholder: 'Name', onChange: (e) => x(e.target.value), required: !0 }),
          t.jsx(r, { type: 'text', placeholder: 'Link', onChange: (e) => m(e.target.value), required: !0 }),
          t.jsx(r, {
            type: 'text',
            placeholder: 'Ping (true/false)',
            onChange: (e) => g(e.target.value),
            required: !0,
          }),
        ],
      }),
      t.jsx(S, {
        size: 'sm',
        className: 'cursor-pointer',
        onClick: (e) => h(e),
        disabled: !i && !o && !l,
        children: 'Raid',
      }),
      c && t.jsx('p', { className: 'text-destructive whitespace-pre-wrap mt-2', children: c }),
      p && t.jsx('pre', { className: 'whitespace-pre-wrap mt-2', children: p }),
    ],
  });
};
export { $ as RaidCard };
