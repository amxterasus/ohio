import { Hono } from 'hono';
import { corsMiddleware } from '../middleware/cors';
import { routes } from './routes';

const app = new Hono();

app.use('*', corsMiddleware);

app.route('/', routes);

export const handler = app.fetch;
