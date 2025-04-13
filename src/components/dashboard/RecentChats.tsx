
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontal } from 'lucide-react';

const RecentChats: React.FC = () => {
  // Sample chat data
  const chatMessages = [
    {
      id: 1,
      sender: {
        name: 'Alex Johnson',
        avatar: '',
        initials: 'AJ',
      },
      message: 'Hey, did you check the latest project requirements?',
      time: '11:30 AM',
      isOwn: false,
    },
    {
      id: 2,
      sender: {
        name: 'You',
        avatar: '',
        initials: 'ME',
      },
      message: "Yes, I'm reviewing them now. I have a few questions though.",  // Note the use of double quotes
      time: '11:32 AM',
      isOwn: true,
    },
    {
      id: 3,
      sender: {
        name: 'Alex Johnson',
        avatar: '',
        initials: 'AJ',
      },
      message: 'Sure, what questions do you have?',
      time: '11:34 AM',
      isOwn: false,
    },
  ];

  return (
    <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Messages</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.sender.avatar} alt={msg.sender.name} />
                <AvatarFallback className={`${msg.isOwn ? 'bg-develupers-accent-purple' : 'bg-develupers-accent-indigo'}`}>
                  {msg.sender.initials}
                </AvatarFallback>
              </Avatar>
              <div className={`max-w-[80%] ${msg.isOwn ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`px-3 py-2 rounded-lg ${
                    msg.isOwn 
                      ? 'bg-develupers-accent-purple text-white rounded-tr-none' 
                      : 'bg-white/10 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <Input 
            placeholder="Type a message..." 
            className="pr-10 bg-white/5 border-white/10"
          />
          <Button 
            size="icon" 
            className="absolute right-1 top-1 h-8 w-8 rounded-full bg-develupers-accent-indigo hover:bg-develupers-accent-indigo/90"
          >
            <SendHorizontal className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentChats;
