import type { MiddlewareHandler } from 'hono';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import type { JWTPayload } from 'hono/utils/jwt/types';

export const authMiddleware: MiddlewareHandler<{
  Variables: { user: JWTPayload };
}> = async (c, next) => {
  const token = getCookie(c, 'session_token');
  if (!token) return c.json({ success: false, error: 'Unauthorized' }, 401);

  try {
    const payload = await verify(token, process.env.JWT_SECRET ?? '');
    c.set('user', payload);
    await next();
  } catch (error) {
    console.error(error);
    return c.json({ success: false, error: 'Invalid token' }, 401);
  }
};
