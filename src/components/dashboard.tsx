import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, History } from 'lucide-react';
import type { Contact } from '@/lib/types';
import ContactList from './contact-list';
import HistoryList from './history-list';

interface DashboardProps {
  onSelectContact: (contact: Contact) => void;
}

export default function Dashboard({ onSelectContact }: DashboardProps) {
  return (
    <div className="h-full p-4 md:p-6">
      <Tabs defaultValue="contacts" className="h-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contacts">
            <Users className="mr-2 h-4 w-4" />
            Contacts
          </TabsTrigger>
          <TabsTrigger value="history">
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="contacts" className="h-[calc(100%-48px)] overflow-y-auto pt-4">
          <ContactList onSelectContact={onSelectContact} />
        </TabsContent>
        <TabsContent value="history" className="h-[calc(100%-48px)] overflow-y-auto pt-4">
          <HistoryList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
