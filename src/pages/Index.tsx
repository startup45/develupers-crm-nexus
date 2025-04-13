
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import KpiCards from '@/components/dashboard/KpiCards';
import TasksOverview from '@/components/dashboard/TasksOverview';
import CalendarView from '@/components/dashboard/CalendarView';
import RecentChats from '@/components/dashboard/RecentChats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <DashboardHeader />
        <KpiCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TasksOverview />
          <CalendarView />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div className="lg:col-span-1">
            <RecentChats />
          </div>
        </div>
      </div>
      
      <QuickActions />
    </AppLayout>
  );
};

export default Index;
