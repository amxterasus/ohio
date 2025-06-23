import type { Guild } from 'discord.js';

export const deleteChannels = async (guild: Guild) => {
  guild.channels.cache.forEach((c) => {
    c.delete();
  });
};
