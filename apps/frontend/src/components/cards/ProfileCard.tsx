import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { API_BASE } from '@/consts';

export interface User {
  id: string;
  username: string;
  global_name: string;
}

const getProfile = async () => {
  const response = await fetch(`${API_BASE}/login/discord/profile`, {
    credentials: 'include',
  });
  if (!response.ok) window.location.href = '/';
  const data = await response.json();

  console.log(data);
  return data.user;
};

export const ProfileCard = () => {
  const [profile, setProfile] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile();
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto bg-background">
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={`https://japi.rest/discord/v1/user/${profile?.id}/avatar`} className="w-22 rounded-full" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl">{profile?.global_name}</CardTitle>
            <CardDescription className="text-sm">{profile?.username}</CardDescription>
            <CardDescription>{`id: ${profile?.id}`}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
