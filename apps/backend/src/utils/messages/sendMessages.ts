import type { TextChannel } from 'discord.js';
import type { RaidOptions } from '../../types/interfaces';

export const sendMessages = async (
  channel: TextChannel,
  raidData: RaidOptions,
) => {
  const message = raidData.ping ? `@everyone ${raidData.link}` : raidData.link;

  for (let i = 0; i < 5; i++) {
    await channel.send(message);
  }
};
