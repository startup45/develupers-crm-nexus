
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  MessageCircle, 
  Calendar, 
  ListChecks,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const QuickActions: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            size="icon" 
            className={`h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-develupers-accent-indigo to-develupers-accent-purple hover:opacity-90 transition-all ${open ? 'rotate-45' : ''}`}
          >
            {open ? <X className="h-6 w-6" /> : <PlusCircle className="h-6 w-6" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mb-2 w-auto bg-develupers-card-bg/95 backdrop-blur-sm border-white/10">
          <DropdownMenuItem className="p-0">
            <Button variant="ghost" className="flex w-full justify-start px-3 py-2 gap-2 hover:bg-white/5">
              <MessageCircle className="h-5 w-5" />
              <span>New Chat</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Button variant="ghost" className="flex w-full justify-start px-3 py-2 gap-2 hover:bg-white/5">
              <Calendar className="h-5 w-5" />
              <span>New Event</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Button variant="ghost" className="flex w-full justify-start px-3 py-2 gap-2 hover:bg-white/5">
              <ListChecks className="h-5 w-5" />
              <span>New Task</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default QuickActions;
