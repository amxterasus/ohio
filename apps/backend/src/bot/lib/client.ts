import * as path from 'node:path';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits, Partials } from 'discord.js';

class Client extends SapphireClient {
  public constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
      partials: [Partials.Channel, Partials.Message, Partials.Reaction],
      loadMessageCommandListeners: true,
      defaultPrefix: process.env.PREFIX,
      baseUserDirectory: path.join(process.cwd(), 'src/bot'),
    });
  }

  public async start() {
    await this.login(process.env.TOKEN).catch((error) => {
      console.error('Failed to login:', error);
    });
  }
}

export const client = new Client();
