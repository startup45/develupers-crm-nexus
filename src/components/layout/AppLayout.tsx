
import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import Navbar from './Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-develupers-dark-bg text-white">
        <AppSidebar open={sidebarOpen} />
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
