import { Hono } from 'hono';
import { client } from '../client';
import { Guilds } from '../pages/Guilds';

export const guildRouter = new Hono();

guildRouter.get('/', async (c) => {
  const guilds = client.guilds.cache.map((guild) => guild);

  return c.html(<Guilds guilds={guilds} />);
});
