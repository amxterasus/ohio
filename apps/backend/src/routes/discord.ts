import { Hono } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { generateState, OAuth2RequestError } from 'oslo/oauth2';
import { getAccessToken } from '../utils/auth/fetchUser';
import { createAuthorizationURL } from '../utils/auth/oauth';

export const discordRouter = new Hono();

discordRouter.get('/', async (c) => {
  console.log(process.env.DISCORD_CALLBACK_URL);
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
    const res = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    if (!res.ok) return c.body('Failed to fetch user info', 500);

    const user = await res.json();
    console.log(user);

    return c.json({ user });
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
