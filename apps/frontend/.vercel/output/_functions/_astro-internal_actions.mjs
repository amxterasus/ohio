import 'kleur/colors';
import {
  g as getActionQueryString,
  a as astroCalledServerError,
  A as ActionError,
  d as deserializeActionResult,
  b as ACTION_QUERY_PARAMS,
  c as appendForwardSlash,
} from './chunks/astro-designed-error-pages_BuexQOyv.mjs';
import 'es-module-lexer';
import './chunks/astro/server_ZzAh1HeT.mjs';
import 'clsx';
import 'cookie';
import * as z from 'zod';
import { A as API_BASE } from './chunks/consts_DwCeqLk2.mjs';
import { d as defineAction } from './chunks/server_dmvpSWTn.mjs';

const apiContextRoutesSymbol = Symbol.for('context.routes');
const ENCODED_DOT = '%2E';
function toActionProxy(actionCallback = {}, aggregatedPath = '') {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === 'symbol') {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll('.', ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function () {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: 'POST',
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: '_astroAction',
            action: '?' + searchParams.toString(),
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        },
      });
      return toActionProxy(action, path + '.');
    },
  });
}
function getActionPath(action) {
  let path = `${'/'.replace(/\/$/, '')}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: 'BAD_REQUEST',
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`,
      });
    }
    if (body) {
      headers.set('Content-Type', 'application/json');
    } else {
      headers.set('Content-Length', '0');
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      },
    }),
    {
      method: 'POST',
      body,
      headers,
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: 'empty', status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? 'data' : 'error',
    body: await rawResult.text(),
  });
}
toActionProxy();

function parseFlags(input) {
  const regex = /--(\w+)=("[^"]+"|\S+)/g;
  const result = {};
  let match;
  while ((match = regex.exec(input)) !== null) {
    let val = match[2];
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1);
    }
    result[match[1]] = val;
  }
  return result;
}
const echoCommand = defineAction({
  input: z.object({
    command: z.string(),
  }),
  handler: async ({ command }) => {
    command.trim().toLowerCase();
    const parts = command.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    if (cmd === 'about') {
      return 'Ohio!';
    }
    if (cmd === 'time') {
      const now = /* @__PURE__ */ new Date();
      return `🕒 Hora actual del servidor: ${now}`;
    }
    if (cmd === 'raid') {
      const flags = parseFlags(command);
      const guildId = flags.guild;
      const name = flags.name;
      const link = flags.link;
      const ping = flags.ping === 'true';
      if (!guildId || !name || !link) {
        return `Faltan parámetros obligatorios.
Uso ejemplo:
raid --guild=1234567890 --name="mi raid" --link=https://ejemplo.com --ping=true`;
      }
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
        return `Error en la petición: ${res.status} ${res.statusText}`;
      }
      const data = await res.json();
      return `Raid ejecutado en guild ${guildId}:
${JSON.stringify(data, null, 2)}`;
    }
    return `Comando desconocido: "${cmd}"
Escribe 'help' para ver los comandos!`;
  },
});

const server = {
  echoCommand,
};

export { server };
