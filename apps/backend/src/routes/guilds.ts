import { Hono } from 'hono';
import { client } from '../client';

export const guildRouter = new Hono();

guildRouter.get('/', async (c) => {
  const guilds = client.guilds.cache.map((guild) => guild);

  return c.json(guilds);
});
