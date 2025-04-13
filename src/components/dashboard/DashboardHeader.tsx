
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your Develupers CRM.</p>
      </div>
      <div className="flex items-center gap-2">
        <Button className="bg-gradient-to-r from-develupers-accent-indigo to-develupers-accent-purple hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          <span>New Project</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
