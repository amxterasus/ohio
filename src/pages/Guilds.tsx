import type { Guild } from 'discord.js';
import type { FC } from 'hono/jsx';
import { BoostIcon, ClockIcon, UserIcon } from './components/Icons';
import { Layout } from './Layout';

export const Guilds: FC<{ guilds: Guild[] }> = (props: { guilds: Guild[] }) => {
  return (
    <Layout>
      <div>
        {props.guilds.map((g) => (
          <div class="guild-card">
            <img
              src={
                g.iconURL({ forceStatic: true }) ||
                'https://es.pinterest.com/pin/582442164336292809/'
              }
              alt="guild icon"
              class="guild-icon"
            />
            <div class="guild-info">
              <h3>{g.name}</h3>
              <div class="guild-stats">
                <p>
                  {<UserIcon />}: {g.memberCount}
                </p>
                <p>
                  {g.premiumTier > 0 ? `${BoostIcon}: ${g.premiumTier}` : ''}
                </p>
                <p>
                  {<ClockIcon />}: {g.joinedAt.toLocaleString()}
                </p>
              </div>
              <p>{g.description}</p>
            </div>
            <a href="discord.gg/nigger">Invite</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
