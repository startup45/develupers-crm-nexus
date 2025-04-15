
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Tasks = () => {
  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: 'Review client proposal',
      priority: 'high',
      status: 'pending',
      due: '2025-04-17',
      assignee: {
        name: 'Alex Johnson',
        avatar: '',
        initials: 'AJ',
      },
      project: 'Acme Corp Website'
    },
    {
      id: 2,
      title: 'Update social media strategy',
      priority: 'medium',
      status: 'in-progress',
      due: '2025-04-20',
      assignee: {
        name: 'Sarah Miller',
        avatar: '',
        initials: 'SM',
      },
      project: 'Marketing Campaign'
    },
    {
      id: 3,
      title: 'Fix navigation bug',
      priority: 'high',
      status: 'in-progress',
      due: '2025-04-16',
      assignee: {
        name: 'Michael Lee',
        avatar: '',
        initials: 'ML',
      },
      project: 'Acme Corp Website'
    },
    {
      id: 4,
      title: 'Prepare monthly report',
      priority: 'medium',
      status: 'completed',
      due: '2025-04-15',
      assignee: {
        name: 'You',
        avatar: '',
        initials: 'TD',
      },
      project: 'Internal'
    },
    {
      id: 5,
      title: 'Client feedback meeting',
      priority: 'high',
      status: 'pending',
      due: '2025-04-18',
      assignee: {
        name: 'You',
        avatar: '',
        initials: 'TD',
      },
      project: 'Globex Rebrand'
    },
  ];

  // Function to render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge variant="outline" className="bg-develupers-success/10 text-develupers-success border-develupers-success/20 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>Completed</span>
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge variant="outline" className="bg-develupers-info/10 text-develupers-info border-develupers-info/20 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>In Progress</span>
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="outline" className="bg-develupers-warning/10 text-develupers-warning border-develupers-warning/20 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            <span>Pending</span>
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Function to render priority badge
  const renderPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-develupers-error/80">High</Badge>;
      case 'medium':
        return <Badge className="bg-develupers-warning/80">Medium</Badge>;
      case 'low':
        return <Badge className="bg-develupers-success/80">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-white/5">All Tasks</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-white/5">My Tasks</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Upcoming</Badge>
          </div>
        </div>

        <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
          <CardHeader className="border-b border-white/5 pb-3">
            <CardTitle className="text-lg font-semibold">Task List</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-white/5">
                  <TableHead className="text-white">Task</TableHead>
                  <TableHead className="text-white">Priority</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Due</TableHead>
                  <TableHead className="text-white">Assignee</TableHead>
                  <TableHead className="text-white">Project</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id} className="border-white/5 hover:bg-white/5">
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>{renderPriorityBadge(task.priority)}</TableCell>
                    <TableCell>{renderStatusBadge(task.status)}</TableCell>
                    <TableCell>{formatDate(task.due)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                          <AvatarFallback className="bg-develupers-accent-indigo text-xs">
                            {task.assignee.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span>{task.assignee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-white/5">{task.project}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Tasks;
