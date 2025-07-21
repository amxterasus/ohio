import { j as e } from './utils.BYJ6mHyy.js';
import { C as o, d as c, b as l, c as a } from './card.DsYk_Z8h.js';
import { r as t } from './index.CqJmc5Mb.js';
import { A as n } from './consts.-Mp9XY9I.js';
const d = async () => {
    const s = await fetch(`${n}/login/discord/profile`, { credentials: 'include' });
    s.ok || (window.location.href = '/');
    const r = await s.json();
    return (console.log(r), r.user);
  },
  h = () => {
    const [s, r] = t.useState(void 0);
    return (
      t.useEffect(() => {
        (async () => {
          const i = await d();
          r(i);
        })();
      }, []),
      e.jsx(o, {
        className: 'w-full max-w-md mx-auto bg-background',
        children: e.jsx(c, {
          children: e.jsxs('div', {
            className: 'flex items-center gap-3',
            children: [
              e.jsx('div', {
                className: 'relative',
                children: e.jsx('img', {
                  src: `https://japi.rest/discord/v1/user/${s?.id}/avatar`,
                  className: 'w-22 rounded-full',
                }),
              }),
              e.jsxs('div', {
                className: 'flex-1',
                children: [
                  e.jsx(l, { className: 'text-2xl', children: s?.global_name }),
                  e.jsx(a, { className: 'text-sm', children: s?.username }),
                  e.jsx(a, { children: `id: ${s?.id}` }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
export { h as ProfileCard };
