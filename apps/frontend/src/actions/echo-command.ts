import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const echoCommand = defineAction({
  input: z.object({
    command: z.string(),
  }),
  handler: async ({ command }) => {
    const trimmed = command.trim().toLowerCase();

    if (trimmed === 'about') {
      return 'Ohio!';
    }

    if (trimmed === 'time') {
      const now = new Date();
      return `🕒 Hora actual del servidor: ${now}`;
    }

    return `❓ Comando desconocido: "${command}"\nEscribe 'help' para ver los comandos!`;
  },
});
