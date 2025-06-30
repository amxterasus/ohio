'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { type GuildInfoProps, GuildInfo } from './GuildInfo';
import { API_BASE } from '@/consts';

async function getGuild(guildId: string): Promise<GuildInfoProps> {
  if (!guildId) throw Error('No guild ID');
  const response = await fetch(`${API_BASE}/guilds/${guildId}`);
  if (!response.ok) throw Error('Not found server!');
  return response.json();
}

export const GuildForm = () => {
  const [lookupId, setLookupId] = useState('');
  const [guild, setGuild] = useState<GuildInfoProps | null>(null);

  const onClick = async () => {
    if (!lookupId) return;
    try {
      const guildData = await getGuild(lookupId);
      setGuild(guildData);
    } catch (err) {
      console.error('Failed to fetch guild:', err);
      setGuild(null);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-4">
        <Input type="text" placeholder="server id" onChange={(e) => setLookupId(e.target.value)} />
        <Button onClick={onClick}>Lookup</Button>
      </div>
      <div className="mt-7">{guild && <GuildInfo {...guild} />}</div>
    </div>
  );
};
