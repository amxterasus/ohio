import { Hono } from 'hono';
import { createBunWebSocket } from 'hono/bun';
import { client } from './client';
import { discordRouter } from './routes/discord.js';
import { guildRouter } from './routes/guilds.js';
import { raidRouter } from './routes/raid.js';

const { upgradeWebSocket, websocket } = createBunWebSocket();

const app = new Hono();

app.get(
  '/ws',
  upgradeWebSocket(() => {
    return {
      onOpen(_event, ws) {
        client.on('guildCreate', (guild) => {
          console.log(guild);
          ws.send(`I have joined ${guild.name} guild.`);
        });
      },
      onClose() {},
    };
  }),
);

app.route('/raid', raidRouter);

app.route('/guilds', guildRouter);

app.route('/login/discord', discordRouter);

export default {
  fetch: app.fetch,
  websocket,
};
