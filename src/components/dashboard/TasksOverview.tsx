
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const TasksOverview: React.FC = () => {
  // Sample data for the chart
  const taskData = [
    { name: 'Mon', tasks: 4, completed: 3 },
    { name: 'Tue', tasks: 7, completed: 5 },
    { name: 'Wed', tasks: 10, completed: 8 },
    { name: 'Thu', tasks: 6, completed: 4 },
    { name: 'Fri', tasks: 8, completed: 7 },
    { name: 'Sat', tasks: 3, completed: 3 },
    { name: 'Sun', tasks: 2, completed: 0 },
  ];

  return (
    <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Task Overview</CardTitle>
        <Button variant="outline" size="sm" className="rounded-full">
          <Plus className="h-4 w-4 mr-1" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={taskData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="taskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                itemStyle={{ color: '#E5E7EB' }}
                labelStyle={{ color: '#E5E7EB', fontWeight: 'bold', marginBottom: '0.25rem' }}
              />
              <Area 
                type="monotone" 
                dataKey="tasks" 
                stroke="#6366F1" 
                fillOpacity={1} 
                fill="url(#taskGradient)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="completed" 
                stroke="#8B5CF6" 
                fillOpacity={1} 
                fill="url(#completedGradient)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksOverview;
