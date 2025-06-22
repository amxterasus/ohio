import type { Guild } from 'discord.js';
import type { FC } from 'hono/jsx';
import { Layout } from './Layout';

export const Guilds: FC<{ guilds: Guild[] }> = (props: { guilds: Guild[] }) => {
  return (
    <Layout>
      {props.guilds.map((g) => (
        <p class="text-red-500">{g.name}</p>
      ))}
    </Layout>
  );
};
