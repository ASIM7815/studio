'use client';

import { useState } from 'react';
import type { Contact } from '@/lib/types';
import AppHeader from '@/components/app-header';
import Dashboard from '@/components/dashboard';
import CommunicationView from '@/components/communication-view';
import { contacts } from '@/lib/data';

export default function Home() {
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const user = contacts[0]; // Assume the first contact is the current user

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <AppHeader user={user} />
      <main className="flex-1 overflow-hidden">
        {activeContact ? (
          <CommunicationView
            contact={activeContact}
            user={user}
            onBack={() => setActiveContact(null)}
          />
        ) : (
          <Dashboard onSelectContact={setActiveContact} />
        )}
      </main>
    </div>
  );
}
