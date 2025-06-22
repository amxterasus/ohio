import { Hono } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { generateState, OAuth2RequestError } from 'oslo/oauth2';
import { createAuthorizationURL } from '../utils/functions';

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

export async function getAccessToken(code: string) {
  const body = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID ?? '',
    client_secret: process.env.DISCORD_CLIENT_SECRET ?? '',
    grant_type: 'authorization_code',
    code: code?.toString() ?? '',
    redirect_uri: process.env.DISCORD_CALLBACK_URL ?? '',
  });

  const res = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!res.ok) {
    throw new Error('Failed to exchange code for token');
  }

  return res.json();
}
