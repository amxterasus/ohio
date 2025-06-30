import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Guild } from 'discord.js';
import { use, useState } from 'react';

async function getGuild(guildId: string): Promise<Guild> {
  if (!guildId) throw new Error('No guild ID');
  const response = await fetch(`http://localhost:3000/guilds/${guildId}`);
  return response.json();
}

export const GuildForm = () => {
  const [guild, setGuildId] = useState('');
  const guilds = use(getGuild(guild));

  console.log(guilds)

  return (
    <div className="flex flex-row gap-4">
      <Input type="text" placeholder="id" onChange={(e) => setGuildId(e.target.value)} />
      <Button>Lookup</Button>
    </div>
  );
};
