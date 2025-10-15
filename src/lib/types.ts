export interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline';
}

export interface CallHistory {
  id: string;
  contactId: string;
  type: 'video' | 'audio' | 'missed';
  direction: 'incoming' | 'outgoing';
  date: string;
  duration?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
