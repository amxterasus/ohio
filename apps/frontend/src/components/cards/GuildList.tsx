import type { Guild } from 'discord.js';
import { use } from 'react';
import { TerminalCard } from './TerminalCard';

async function getGuilds(): Promise<Guild[]> {
  const response = await fetch('http://localhost:3000/guilds');
  return response.json();
}

export default function GuildList() {
  const guilds = use(getGuilds());
  const data = guilds.map((guild: Guild, index: number) => `${String(index).padStart(2, '0')}. ${guild.name}`);
  return <TerminalCard command="cat server_list.md" output={data.join('\n')} />;
}
