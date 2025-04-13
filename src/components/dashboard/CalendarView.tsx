
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

const CalendarView: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Sample event data
  const events = [
    { date: new Date(2025, 3, 15), type: 'meeting' },
    { date: new Date(2025, 3, 18), type: 'deadline' },
    { date: new Date(2025, 3, 22), type: 'meeting' },
    { date: new Date(2025, 3, 25), type: 'deadline' },
  ];

  const upcomingEvents = [
    { 
      title: 'Client Meeting', 
      date: 'Today, 2:00 PM', 
      participants: ['John D.', 'Maria S.'],
      type: 'meeting'
    },
    { 
      title: 'Project Deadline', 
      date: 'Apr 18, 11:59 PM', 
      project: 'Website Redesign',
      type: 'deadline'
    },
    { 
      title: 'Team Sync', 
      date: 'Apr 22, 10:00 AM', 
      participants: ['Entire Team'],
      type: 'meeting'
    }
  ];

  return (
    <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Calendar</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-3 p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-0"
              modifiers={{
                meeting: events.filter(event => event.type === 'meeting').map(event => event.date),
                deadline: events.filter(event => event.type === 'deadline').map(event => event.date),
              }}
              modifiersStyles={{
                meeting: { 
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  color: '#6366F1',
                },
                deadline: { 
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  color: '#EF4444',
                },
              }}
            />
          </div>
          <div className="col-span-2 border-l border-white/5 p-4">
            <h3 className="font-medium mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${event.type === 'meeting' ? 'bg-develupers-accent-indigo' : 'bg-develupers-error'}`}></div>
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    {event.participants && (
                      <div className="mt-2 flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">With:</span>
                        {event.participants.map((person, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-white/5">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {event.project && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs bg-white/5">
                          {event.project}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarView;
