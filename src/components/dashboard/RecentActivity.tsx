
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle2, FilePlus, UserPlus, MessageSquarePlus } from 'lucide-react';

const RecentActivity: React.FC = () => {
  // Sample activity data
  const activities = [
    {
      id: 1,
      user: {
        name: 'Sarah Miller',
        avatar: '',
        initials: 'SM',
      },
      action: 'completed a task',
      subject: 'Website Homepage Redesign',
      time: '15 minutes ago',
      icon: CheckCircle2,
      iconColor: 'text-develupers-success',
      iconBg: 'bg-develupers-success/10',
    },
    {
      id: 2,
      user: {
        name: 'Mike Peterson',
        avatar: '',
        initials: 'MP',
      },
      action: 'added a new document',
      subject: 'Q2 Marketing Plan.pdf',
      time: '2 hours ago',
      icon: FilePlus,
      iconColor: 'text-develupers-info',
      iconBg: 'bg-develupers-info/10',
    },
    {
      id: 3,
      user: {
        name: 'James Rodriguez',
        avatar: '',
        initials: 'JR',
      },
      action: 'added a new client',
      subject: 'TechGrowth Solutions',
      time: '5 hours ago',
      icon: UserPlus,
      iconColor: 'text-develupers-accent-indigo',
      iconBg: 'bg-develupers-accent-indigo/10',
    },
    {
      id: 4,
      user: {
        name: 'Emma Watson',
        avatar: '',
        initials: 'EW',
      },
      action: 'commented on',
      subject: 'Mobile App Development Project',
      time: 'Yesterday',
      icon: MessageSquarePlus,
      iconColor: 'text-develupers-accent-purple',
      iconBg: 'bg-develupers-accent-purple/10',
    },
  ];

  return (
    <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-full ${activity.iconBg}`}>
                <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback className="bg-develupers-accent-indigo text-[10px]">
                      {activity.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{activity.user.name}</p>
                </div>
                <p className="text-sm">
                  {activity.action}{' '}
                  <span className="font-medium">{activity.subject}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
