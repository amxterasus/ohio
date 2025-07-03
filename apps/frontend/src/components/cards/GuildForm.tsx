'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { type GuildInfoProps, GuildInfo } from './GuildInfo';
import { API_BASE } from '@/consts';

async function getGuild(guildId: string): Promise<GuildInfoProps> {
  if (!guildId) throw Error('No guild ID');
  const response = await fetch(`${API_BASE}/guilds/${guildId}`);
  if (!response.ok) throw Error('not found server!');
  return response.json();
}

export const GuildForm = () => {
  const [lookupId, setLookupId] = useState('');
  const [error, setError] = useState('');
  const [guild, setGuild] = useState<GuildInfoProps | null>(null);

  const onClick = async () => {
    if (!lookupId) return setError('please provide a guild id');
    try {
      const guildData = await getGuild(lookupId);
      setGuild(guildData);
      setError('');
    } catch (err: any) {
      console.error('Failed to fetch guild:', err);
      setError(err?.message);
      setGuild(null);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-4">
        <Input type="text" placeholder="server id" onChange={(e) => setLookupId(e.target.value)} required />
        <Button className="cursor-pointer" onClick={onClick} disabled={!lookupId}>
          Lookup
        </Button>
      </div>
      {error && <p className="mt-2 text-destructive">{error}</p>}
      <div className="mt-7">{guild && <GuildInfo {...guild} />}</div>
    </div>
  );
};
