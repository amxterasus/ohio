import { Hono } from 'hono';
import { createBunWebSocket } from 'hono/bun';
import { corsMiddleware } from '../middleware/cors';
import { routes } from './routes';

const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket();

app.use('*', corsMiddleware);

app.route('/', routes);

export const handler = app.fetch;
