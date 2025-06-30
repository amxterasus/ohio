import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export const GuildInfo = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/placeholder.svg?height=48&width=48" alt="Guild Icon" className="w-12 h-12 rounded-full" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">Gaming Paradise</CardTitle>
            <CardDescription className="text-sm">Una comunidad para gamers apasionados</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>1,247 miembros</span>
          </div>
          <div className="flex items-center gap-2 text-green-600"></div>
        </div>

        <hr />

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Join the server</Button>
        </div>
      </CardContent>
    </Card>
  );
};
