// lib/auth.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const SESSION_COOKIE_NAME = 'user_session'; // <--- เพิ่ม export ตรงนี้

export async function loginUser(email, password) {
  await new Promise(resolve => setTimeout(resolve, 500));

  if (email === 'user@example.com' && password === 'password123') {
    const sessionToken = 'your_super_secret_session_token_123';
    cookies().set(SESSION_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return { success: true, message: 'Login successful!' };
  } else {
    return { success: false, message: 'Invalid credentials.' };
  }
}

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

export async function authenticate(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { message: 'All fields are required.', success: false };
  }

  const result = await loginUser(email, password);
  if (result.success) {
    redirect('/time');
  }
  return result;
}