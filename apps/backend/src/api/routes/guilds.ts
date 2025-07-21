import { ChannelType } from 'discord.js';
import { Hono } from 'hono';
import { client } from '../../client';

export const guildRouter = new Hono();

guildRouter.get('/', async (c) => {
  const guilds = client.guilds.cache.map((guild) => guild);

  return c.json(guilds);
});

guildRouter.get('/:id', async (c) => {
  const guildId = c.req.param('id');
  const guild = client.guilds.cache.get(guildId);

  const owner = await guild?.fetchOwner({ force: true });
  const channel = guild?.channels.cache.find(
    (c) => c.type === ChannelType.GuildText,
  );
  const invite = channel
    ? (await channel.createInvite()).url
    : `https://discord.gg/${guild?.vanityURLCode}`;

  if (!guild || !owner)
    return c.json(
      { status: false, message: 'not found server or owner!' },
      500,
    );
  return c.json({ guild, owner, invite });
});
