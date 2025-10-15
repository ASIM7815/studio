'use client';

import { useState, useRef, useEffect } from 'react';
import type { Message, Contact } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface ChatViewProps {
  messages: Message[];
  user: Contact;
  onSendMessage: (text: string) => void;
}

export default function ChatView({
  messages,
  user,
  onSendMessage,
}: ChatViewProps) {
  const [text, setText] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="flex h-full flex-1 flex-col bg-background">
      <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => {
            const isSent = message.senderId === user.id;
            return (
              <div
                key={message.id}
                className={cn('flex items-end gap-2', {
                  'justify-end': isSent,
                })}
              >
                <div
                  className={cn(
                    'max-w-xs rounded-2xl px-4 py-3 md:max-w-md',
                    {
                      'rounded-br-none bg-primary text-primary-foreground': isSent,
                      'rounded-bl-none bg-card': !isSent,
                    }
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="mt-1 text-right text-xs opacity-70">
                    {format(new Date(message.timestamp), 'p')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
      <div className="border-t bg-card p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={!text.trim()}>
            <Send />
          </Button>
        </form>
      </div>
    </div>
  );
}
