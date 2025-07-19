import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const echoCommand = defineAction({
  input: z.object({
    command: z.string(),
  }),
  handler: async ({ command }) => {
    const trimmed = command.trim().toLowerCase();

    if (trimmed === "about") {
      return "🚀 Astro Terminal v1.0 — Hecho con Astro Actions";
    }

    if (trimmed === "time") {
      const now = new Date();
      return `🕒 Hora actual del servidor: ${now.toLocaleTimeString()}`;
    }

    return `❓ Comando desconocido: "${command}"\nEscribe 'about' o 'time'`;
  },
});


export const server = {
  echoCommand
}