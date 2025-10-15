'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Contact } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';
import NoiseCancellationControl from './noise-cancellation-control';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface CallViewProps {
  type: 'video' | 'audio';
  contact: Contact;
  user: Contact;
  onEndCall: () => void;
}

export default function CallView({
  type,
  contact,
  user,
  onEndCall,
}: CallViewProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(type === 'audio');
  const [callTime, setCallTime] = useState(0);

  const remoteFeed = PlaceHolderImages.find((img) => img.id === 'remote-feed');
  const localFeed = PlaceHolderImages.find((img) => img.id === 'local-feed');

  useEffect(() => {
    const timer = setInterval(() => {
      setCallTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm">
      <div className="relative flex-1">
        {type === 'video' && !isVideoOff ? (
          <>
            {remoteFeed && (
              <Image
                src={remoteFeed.imageUrl}
                alt={contact.name}
                fill
                className="object-cover"
                data-ai-hint={remoteFeed.imageHint}
              />
            )}
            {localFeed && (
              <div className="absolute bottom-4 right-4 h-36 w-48 overflow-hidden rounded-lg border-2 border-white shadow-lg">
                <Image
                  src={localFeed.imageUrl}
                  alt={user.name}
                  fill
                  className="object-cover"
                  data-ai-hint={localFeed.imageHint}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <Avatar className="h-32 w-32 border-4 border-primary">
              <AvatarImage src={contact.avatarUrl} alt={contact.name} data-ai-hint="person portrait" />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-3xl font-bold">{contact.name}</h2>
          </div>
        )}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-black/30 px-4 py-1 text-white">
          {formatTime(callTime)}
        </div>
      </div>

      <div className="flex justify-center gap-4 bg-background/80 p-6">
        <NoiseCancellationControl />
        <Button
          variant="secondary"
          size="lg"
          className={cn(
            'h-16 w-16 rounded-full',
            isMuted && 'bg-primary text-primary-foreground'
          )}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff /> : <Mic />}
        </Button>
        {type === 'video' && (
          <Button
            variant="secondary"
            size="lg"
            className={cn(
              'h-16 w-16 rounded-full',
              isVideoOff && 'bg-primary text-primary-foreground'
            )}
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff /> : <Video />}
          </Button>
        )}
        <Button
          variant="destructive"
          size="lg"
          className="h-16 w-16 rounded-full"
          onClick={onEndCall}
        >
          <PhoneOff />
        </Button>
      </div>
    </div>
  );
}
