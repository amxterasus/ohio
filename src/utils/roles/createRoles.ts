import type { Guild } from "discord.js";
import type { RaidOptions } from "../../types/interfaces";

export const createRoles = async (guild: Guild, raidData: RaidOptions) => {
  for (let x = 0; x <= 249; x++) {
    await guild.roles.create({
      name: raidData.name,
    });
  }
};
