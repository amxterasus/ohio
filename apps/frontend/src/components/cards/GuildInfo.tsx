import { use } from 'react';

export default async function GuildInfo({ guildId }: { guildId: string }) {
  const response = await fetch(`http://localhost:3000/guilds/${guildId}`);
  const contentType = response.headers.get("content-type");

if (!response.ok) {
  const errorText = await response.text();
  throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
}

if (!contentType?.includes("application/json")) {
  const text = await response.text(); // leerlo como texto plano
  throw new Error(`Respuesta inesperada: ${text}`);
}
  const guilds = await response.json()
  const data = guilds;
  return <p>{data.name}</p>;
}
