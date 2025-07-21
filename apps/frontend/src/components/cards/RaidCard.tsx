'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { API_BASE } from '@/consts';

type Props = { guildId: string };

export const RaidCard = ({ guildId }: Props) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [ping, setPing] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onClick = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const res = await fetch(`${API_BASE}/raid?guildid=${guildId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
        ping,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      setError(text || `Error: ${res.status} ${res.statusText}`);
      return;
    }

    const data = await res.json();
    setSuccessMessage(`Raid executed in guild ${guildId}:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
        <Input type="text" placeholder="Link" onChange={(e) => setLink(e.target.value)} required />
        <Input type="text" placeholder="Ping (true/false)" onChange={(e) => setPing(e.target.value)} required />
      </div>
      <Button size="sm" className="cursor-pointer" onClick={(e) => onClick(e)} disabled={!name && !link && !ping}>
        Raid
      </Button>
      {error && <p className="text-destructive whitespace-pre-wrap mt-2">{error}</p>}
      {successMessage && <pre className="whitespace-pre-wrap mt-2">{successMessage}</pre>}
    </div>
  );
};
