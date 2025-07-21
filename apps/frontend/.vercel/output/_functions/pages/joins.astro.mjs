import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COa48ijw.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function WebSocketJoin() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws');
    ws.onmessage = (event) => {
      setMessages((msgs) => [...msgs, event.data]);
    };
    return () => {
      ws.close();
    };
  }, []);
  return /* @__PURE__ */ jsx('div', {
    children: /* @__PURE__ */ jsx('ul', {
      children: messages.map((msg, i) => /* @__PURE__ */ jsx('li', { children: msg }, i)),
    }),
  });
}

const $$Joins = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'Layout', $$Layout, { title: 'joins' }, { default: ($$result2) => renderTemplate` ${renderComponent($$result2, 'WebSocketJoin', WebSocketJoin, {})} ` })}`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/pages/joins.astro',
  void 0
);

const $$file = '/home/amxte/projects/ohio/apps/frontend/src/pages/joins.astro';
const $$url = '/joins';

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Joins,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);

const page = () => _page;

export { page };
