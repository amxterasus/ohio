import { j as r, c as d } from './utils.BYJ6mHyy.js';
import './index.CqJmc5Mb.js';
function e({ className: a, ...t }) {
  return r.jsx('div', {
    'data-slot': 'card',
    className: d('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', a),
    ...t,
  });
}
function n({ className: a, ...t }) {
  return r.jsx('div', {
    'data-slot': 'card-header',
    className: d(
      '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
      a
    ),
    ...t,
  });
}
function c({ className: a, ...t }) {
  return r.jsx('div', { 'data-slot': 'card-title', className: d('leading-none font-semibold', a), ...t });
}
function i({ className: a, ...t }) {
  return r.jsx('div', { 'data-slot': 'card-description', className: d('text-muted-foreground text-sm', a), ...t });
}
function l({ className: a, ...t }) {
  return r.jsx('div', { 'data-slot': 'card-content', className: d('px-6', a), ...t });
}
export { e as C, n as a, c as b, i as c, l as d };
