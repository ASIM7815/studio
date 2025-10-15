import { callHistory, contacts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import {
  PhoneIncoming,
  PhoneOutgoing,
  Video,
  PhoneMissed,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const CallIcon = ({ type, direction }: { type: string; direction: string }) => {
  const className = 'h-5 w-5';
  if (type === 'missed') {
    return <PhoneMissed className={`${className} text-destructive`} />;
  }
  if (type === 'video') {
    return <Video className={`${className} text-muted-foreground`} />;
  }
  if (direction === 'incoming') {
    return <PhoneIncoming className={`${className} text-green-500`} />;
  }
  return <PhoneOutgoing className={`${className} text-blue-500`} />;
};

export default function HistoryList() {
  return (
    <div className="space-y-3">
      {callHistory.map((call) => {
        const contact = contacts.find((c) => c.id === call.contactId);
        if (!contact) return null;
        return (
          <Card key={call.id}>
            <div className="flex items-center space-x-4 p-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contact.avatarUrl} alt={contact.name} data-ai-hint="person portrait" />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{contact.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CallIcon type={call.type} direction={call.direction} />
                  <span className="ml-2">
                    {formatDistanceToNow(new Date(call.date), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>
                  {new Date(call.date).toLocaleDateString()}
                </p>
                <p>{call.duration}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
