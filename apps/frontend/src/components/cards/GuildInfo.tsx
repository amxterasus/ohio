import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Guild, GuildMember } from 'discord.js';
import { Users } from 'lucide-react';

export interface GuildInfoProps {
  guild: Guild;
  owner: GuildMember;
  invite: string;
}

export const GuildInfo = ({ guild, owner, invite }: GuildInfoProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-background">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            {guild.icon ? (
              <img
                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`}
                alt={guild.name}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <span className="w-12 h-12 p-4 rounded-full bg-accent-foreground text-background">
                {guild.nameAcronym}
              </span>
            )}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{guild.name}</CardTitle>
            <CardDescription className="text-sm">{guild.description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{guild.memberCount} miembros</span>
          </div>
          <div className="flex items-center gap-2 text-green-600"></div>
        </div>

        <hr />

        <div className="flex gap-2 pt-2">
          <a href={invite} target="_blank" className="w-full">
            <Button className="flex-1 cursor-pointer">Join the server</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
