'use client';

import { useState } from 'react';
import type { Contact, Message } from '@/lib/types';
import { messages } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Video } from 'lucide-react';
import ChatView from './chat-view';
import CallView from './call-view';

interface CommunicationViewProps {
  contact: Contact;
  user: Contact;
  onBack: () => void;
}

export default function CommunicationView({
  contact,
  user,
  onBack,
}: CommunicationViewProps) {
  const [callType, setCallType] = useState<'video' | 'audio' | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>(
    messages[contact.id] || []
  );

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: user.id,
      text,
      timestamp: new Date().toISOString(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center space-x-4 border-b bg-card p-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft />
        </Button>
        <Avatar className="h-10 w-10">
          <AvatarImage src={contact.avatarUrl} alt={contact.name} data-ai-hint="person portrait" />
          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{contact.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCallType('video')}
          >
            <Video className="text-primary" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCallType('audio')}
          >
            <Phone className="text-primary" />
          </Button>
        </div>
      </header>
      <ChatView
        messages={chatMessages}
        user={user}
        onSendMessage={handleSendMessage}
      />
      {callType && (
        <CallView
          type={callType}
          contact={contact}
          user={user}
          onEndCall={() => setCallType(null)}
        />
      )}
    </div>
  );
}
