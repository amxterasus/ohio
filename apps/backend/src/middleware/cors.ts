import { cors } from 'hono/cors';

export const corsMiddleware = cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:4321'],
  credentials: true,
  maxAge: 86400,
});
