import type { Guild } from 'discord.js';

export const deleteRoles = async (guild: Guild) => {
  guild.roles.cache.forEach((r) => {
    r.delete().catch((e) => {
      console.log("fifix es una opayasa:", e)
    })
  });
};
