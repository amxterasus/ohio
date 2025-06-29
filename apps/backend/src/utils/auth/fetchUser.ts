import type { Methods } from '../../types/types';

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

export async function getAccessToken(code: string) {
  const body = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID ?? '',
    client_secret: process.env.DISCORD_CLIENT_SECRET ?? '',
    grant_type: 'authorization_code',
    code: code?.toString() ?? '',
    redirect_uri: process.env.DISCORD_CALLBACK_URL ?? '',
  });

  const res = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!res.ok) {
    throw new Error('Failed to exchange code for token');
  }

  return res.json();
}

export async function getUser(accessToken: string): Promise<{
  id: string;
  global_name: string;
  username: string;
  avatar: string | null;
  guilds: string[];
}> {
  const response = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Discord user fetch failed: ${response.statusText}`);
  }

  return response.json();
}

export async function getUserGuilds(accessToken: string): Promise<{
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}> {
  const response = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Discord user fetch failed: ${response.statusText}`);
  }

  return response.json();
}
