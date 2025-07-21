import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { API_BASE } from '@/consts';

function parseFlags(input: string) {
  const regex = /--(\w+)=("[^"]+"|\S+)/g;
  const result: Record<string, string> = {};
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

export const echoCommand = defineAction({
  input: z.object({
    command: z.string(),
  }),
  handler: async ({ command }) => {
    const trimmed = command.trim().toLowerCase();

    const parts = command.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();

    if (cmd === 'about') {
      return 'Ohio!';
    }

    if (cmd === 'time') {
      const now = new Date();
      return `🕒 Hora actual del servidor: ${now}`;
    }

    if (cmd === 'raid') {
      const flags = parseFlags(command);

      const guildId = flags.guild;
      const name = flags.name;
      const link = flags.link;
      const ping = flags.ping === 'true';

      if (!guildId || !name || !link) {
        return `Faltan parámetros obligatorios.\nUso ejemplo:\nraid --guild=1234567890 --name="mi raid" --link=https://ejemplo.com --ping=true`;
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

      return `Raid ejecutado en guild ${guildId}:\n${JSON.stringify(data, null, 2)}`;
    }

    return `Comando desconocido: "${cmd}"\nEscribe 'help' para ver los comandos!`;
  },
});
