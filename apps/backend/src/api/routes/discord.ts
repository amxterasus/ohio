import { Hono } from 'hono';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { sign } from 'hono/jwt';
import { generateState, OAuth2RequestError } from 'oslo/oauth2';
import { authMiddleware } from '../../middleware/auth.middleware';
import { getAccessToken, getUser } from '../../utils/auth/fetchUser';
import { createAuthorizationURL } from '../../utils/auth/oauth';

export const discordRouter = new Hono();

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:4321';

discordRouter.get('/', async (c) => {
  const state = generateState();
  const url = await createAuthorizationURL(state, {
    scopes: ['identify', 'guilds'],
  });
  setCookie(c, 'discord_oauth_state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'Lax',
  });
  return c.redirect(url.toString());
});

discordRouter.get('/callback', async (c) => {
  const code = c.req.query('code')?.toString() ?? null;
  const state = c.req.query('state')?.toString() ?? null;
  const storedState = getCookie(c).discord_oauth_state ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return c.body(null, 400);
  }
  try {
    const { access_token } = await getAccessToken(code);
    const { id, global_name, username, avatar } = await getUser(access_token);
    const payload = {
      id,
      global_name,
      username,
      avatar,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    };
    const token = await sign(payload, process.env.JWT_SECRET ?? '');

    setCookie(c, 'session_token', token, {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'Lax',
    });
    deleteCookie(c, 'discord_oauth_state');

    return c.redirect(`${frontendUrl}/profile`);
  } catch (error) {
    if (
      error instanceof OAuth2RequestError &&
      error.message === 'bad_verification_code'
    ) {
      return c.body(null, 400);
    }
    return c.body(null, 500);
  }
});

discordRouter.get('/profile', authMiddleware, async (c) => {
  const user = c.get('user');
  return c.json({
    success: true,
    user,
  });
});

discordRouter.post('/logout', authMiddleware, async (c) => {
  try {
    deleteCookie(c, 'session_token');
    return c.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error(error);
    return c.json(
      {
        success: false,
        error: 'Logout failed',
      },
      500,
    );
  }
});
