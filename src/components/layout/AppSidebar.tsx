
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Briefcase, 
  CheckSquare, 
  Users, 
  Calendar, 
  MessageSquare, 
  Mail, 
  Settings, 
  LifeBuoy,
  FileText,
  DollarSign,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/hooks/use-theme';

interface AppSidebarProps {
  open: boolean;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ open }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = theme === 'dark';

  const mainMenuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, url: '/' },
    { title: 'Internships', icon: GraduationCap, url: '/internships' },
    { title: 'Projects', icon: Briefcase, url: '/projects' },
    { title: 'Tasks', icon: CheckSquare, url: '/tasks' },
    { title: 'Leads', icon: Users, url: '/leads' },
    { title: 'Documents', icon: FileText, url: '/documents' },
    { title: 'Finance', icon: DollarSign, url: '/finance' },
    { title: 'Calendar', icon: Calendar, url: '/calendar' },
    { title: 'Chat', icon: MessageSquare, url: '/chat' },
    { title: 'Gmail', icon: Mail, url: '/gmail' },
  ];

  const secondaryMenuItems = [
    { title: 'Settings', icon: Settings, url: '/settings' },
    { title: 'Help & Support', icon: LifeBuoy, url: '/support' },
  ];

  const isActiveRoute = (url: string) => {
    return location.pathname === url;
  };

  return (
    <Sidebar>
      <div className="h-16 flex items-center justify-center p-4 border-b border-white/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-develupers-accent-indigo to-develupers-accent-purple flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Develupers</h1>
        </div>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <Toggle 
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors justify-start"
                  pressed={theme === 'dark'}
                  onPressedChange={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                  <span>Theme: {isDark ? 'Dark' : 'Light'}</span>
                </Toggle>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
