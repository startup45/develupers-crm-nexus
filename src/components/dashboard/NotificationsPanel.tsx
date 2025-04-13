
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  MessageSquare, 
  Calendar, 
  ClipboardCheck, 
  Users, 
  AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationsPanel: React.FC = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Alex',
      description: 'Hey, can we discuss the project timeline?',
      time: '5 minutes ago',
      read: false,
      icon: MessageSquare,
      iconColor: 'text-develupers-accent-indigo',
      iconBg: 'bg-develupers-accent-indigo/10',
      user: {
        name: 'Alex Johnson',
        avatar: '',
        initials: 'AJ',
      },
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Meeting Reminder',
      description: 'Client onboarding call in 30 minutes',
      time: '30 minutes ago',
      read: false,
      icon: Calendar,
      iconColor: 'text-develupers-warning',
      iconBg: 'bg-develupers-warning/10',
    },
    {
      id: 3,
      type: 'task',
      title: 'Task Completed',
      description: 'Sarah completed "UI Design for Homepage"',
      time: '2 hours ago',
      read: false,
      icon: ClipboardCheck,
      iconColor: 'text-develupers-success',
      iconBg: 'bg-develupers-success/10',
      user: {
        name: 'Sarah Miller',
        avatar: '',
        initials: 'SM',
      },
    },
    {
      id: 4,
      type: 'alert',
      title: 'New Intern Application',
      description: 'Michael has applied for the Frontend Developer Internship',
      time: '5 hours ago',
      read: true,
      icon: Users,
      iconColor: 'text-develupers-accent-purple',
      iconBg: 'bg-develupers-accent-purple/10',
    },
    {
      id: 5,
      type: 'system',
      title: 'System Update',
      description: 'CRM will be undergoing maintenance tonight at 2 AM',
      time: 'Yesterday',
      read: true,
      icon: AlertCircle,
      iconColor: 'text-develupers-info',
      iconBg: 'bg-develupers-info/10',
    },
  ];

  return (
    <Card className="h-full w-full bg-develupers-card-bg/95 backdrop-blur-sm border-white/5 shadow-lg">
      <CardHeader className="sticky top-0 z-10 bg-develupers-card-bg/95 backdrop-blur-sm border-b border-white/5 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-xs">
            Mark all as read
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 overflow-y-auto h-[calc(100%-72px)]">
        <div className="space-y-1">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 ${notification.read ? '' : 'bg-white/5'} hover:bg-white/10 transition-colors border-b border-white/5 last:border-0`}
            >
              <div className="flex items-start gap-4">
                {notification.user ? (
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                    <AvatarFallback className="bg-develupers-accent-indigo">
                      {notification.user.initials}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className={`p-2 rounded-full ${notification.iconBg}`}>
                    <notification.icon className={`h-5 w-5 ${notification.iconColor}`} />
                  </div>
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsPanel;
