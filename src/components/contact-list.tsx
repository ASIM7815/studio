import { contacts } from '@/lib/data';
import type { Contact } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContactListProps {
  onSelectContact: (contact: Contact) => void;
}

export default function ContactList({ onSelectContact }: ContactListProps) {
  const userContacts = contacts.filter((c) => c.id !== 'user-1'); // Exclude current user

  return (
    <div className="space-y-3">
      {userContacts.map((contact) => (
        <Card
          key={contact.id}
          className="cursor-pointer transition-colors hover:bg-accent/50"
          onClick={() => onSelectContact(contact)}
        >
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contact.avatarUrl} alt={contact.name} data-ai-hint="person portrait" />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span
                className={cn(
                  'absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-card',
                  contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                )}
              />
            </div>
            <div className="flex-1">
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-muted-foreground">{contact.status}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
