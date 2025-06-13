
import { cookies } from 'next/headers';

export const SESSION_COOKIE_NAME = 'user_session';


export async function logoutUser() {
  cookies().delete(SESSION_COOKIE_NAME);
}

export async function getSession() {
  return cookies().get(SESSION_COOKIE_NAME)?.value;
}

export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

