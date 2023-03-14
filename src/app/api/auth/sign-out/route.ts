import { headers } from 'next/headers';

export async function GET() {
  const h = headers();
  const cookie = h.get('cookie');

  if (cookie) {
    return new Response(null, {
      status: 201,
      statusText: 'Logged out user',
      headers: {
        'Set-Cookie': 'access_token=; Path=/; HttpOnly'
      },
    });
  }

  return new Response(null, {
    status: 400,
    statusText: 'No logged in user exists to logout',
  });
}