import type { Contact } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

interface AppHeaderProps {
  user: Contact;
}

export default function AppHeader({ user }: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-3">
        <MessageSquare className="h-7 w-7 text-primary" />
        <h1 className="font-headline text-2xl font-bold text-foreground">
          ConnectNow
        </h1>
      </div>
      <Avatar className="h-9 w-9">
        <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
    </header>
  );
}
