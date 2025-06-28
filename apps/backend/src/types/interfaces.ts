export interface RaidOptions {
  name: string;
  link: string;
  ping?: boolean;
}

export interface User {
  id: string;
  username: string;
  global_name: string;
  avatar: string | null;
}
