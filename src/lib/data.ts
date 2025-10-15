import type { Contact, CallHistory, Message } from '@/lib/types';

export const contacts: Contact[] = [
  {
    id: 'user-1',
    name: 'You',
    avatarUrl: 'https://picsum.photos/seed/user1/100/100',
    status: 'online',
  },
  {
    id: 'user-2',
    name: 'Alice Johnson',
    avatarUrl: 'https://picsum.photos/seed/user2/100/100',
    status: 'online',
  },
  {
    id: 'user-3',
    name: 'Bob Williams',
    avatarUrl: 'https://picsum.photos/seed/user3/100/100',
    status: 'offline',
  },
  {
    id: 'user-4',
    name: 'Charlie Brown',
    avatarUrl: 'https://picsum.photos/seed/user4/100/100',
    status: 'online',
  },
  {
    id: 'user-5',
    name: 'Diana Prince',
    avatarUrl: 'https://picsum.photos/seed/user5/100/100',
    status: 'offline',
  },
  {
    id: 'user-6',
    name: 'Ethan Hunt',
    avatarUrl: 'https://picsum.photos/seed/user6/100/100',
    status: 'online',
  },
];

export const callHistory: CallHistory[] = [
  {
    id: 'call-1',
    contactId: 'user-2',
    type: 'video',
    direction: 'outgoing',
    date: '2024-07-29T10:30:00Z',
    duration: '5m 32s',
  },
  {
    id: 'call-2',
    contactId: 'user-3',
    type: 'audio',
    direction: 'incoming',
    date: '2024-07-29T09:15:00Z',
    duration: '12m 10s',
  },
  {
    id: 'call-3',
    contactId: 'user-4',
    type: 'missed',
    direction: 'incoming',
    date: '2024-07-28T18:45:00Z',
  },
  {
    id: 'call-4',
    contactId: 'user-5',
    type: 'audio',
    direction: 'outgoing',
    date: '2024-07-28T15:20:00Z',
    duration: '2m 5s',
  },
  {
    id: 'call-5',
    contactId: 'user-2',
    type: 'video',
    direction: 'incoming',
    date: '2024-07-27T11:00:00Z',
    duration: '30m 45s',
  },
];

export const messages: { [key: string]: Message[] } = {
  'user-2': [
    {
      id: 'msg-1',
      senderId: 'user-2',
      text: 'Hey! How are you doing?',
      timestamp: '2024-07-29T10:20:00Z',
    },
    {
      id: 'msg-2',
      senderId: 'user-1',
      text: "I'm good, thanks! Just working on the new project. How about you?",
      timestamp: '2024-07-29T10:21:00Z',
    },
    {
      id: 'msg-3',
      senderId: 'user-2',
      text: 'Same here. Ready for our call in a bit?',
      timestamp: '2024-07-29T10:22:00Z',
    },
  ],
  'user-3': [
    {
      id: 'msg-4',
      senderId: 'user-1',
      text: 'Hi Bob, do you have a minute to chat?',
      timestamp: '2024-07-29T09:14:00Z',
    },
    {
      id: 'msg-5',
      senderId: 'user-3',
      text: 'Sure, call me.',
      timestamp: '2024-07-29T09:14:30Z',
    },
  ],
  'user-4': [
    {
      id: 'msg-6',
      senderId: 'user-4',
      text: 'Sorry I missed your call yesterday. What was it about?',
      timestamp: '2024-07-29T08:00:00Z',
    },
  ],
  'user-5': [],
  'user-6': [],
};
