import { API_BASE } from '@/consts';

export interface User {
  id: string;
  username: string;
  global_name: string;
  avatar: string | null;
}

export async function getUser(): Promise<User> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/login/discord/profile`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
