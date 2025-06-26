import { Hono } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { generateState, OAuth2RequestError } from 'oslo/oauth2';
import { getAccessToken } from '../utils/auth/fetchUser';
import { createAuthorizationURL } from '../utils/auth/oauth';

export const discordRouter = new Hono();

discordRouter.get('/', async (c) => {
  const state = generateState();
  const url = await createAuthorizationURL(state, {
    scopes: ['identify', 'guilds.join'],
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
    const token = await getAccessToken(code);

    setCookie(c, 'session_token', token.access_token, {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      sameSite: 'Lax',
    });

    setCookie(c, 'discord_oauth_state', '', {
      path: '/',
      expires: new Date(0),
    });

    return c.redirect('/');
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
