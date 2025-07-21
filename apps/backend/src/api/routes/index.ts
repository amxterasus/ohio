import { Hono } from 'hono';
import { discordRouter } from './discord';
import { guildRouter } from './guilds';
import { raidRouter } from './raid';

export const routes = new Hono();

routes.route('/login/discord', discordRouter);
routes.route('/guilds', guildRouter);
routes.route('/raid', raidRouter);
