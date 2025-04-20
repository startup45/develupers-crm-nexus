
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/use-theme";
import Index from "./pages/Index";
import Tasks from "./pages/Tasks";
import Leads from "./pages/Leads";
import Documents from "./pages/Documents";
import Finance from "./pages/Finance";
import Internships from "./pages/Internships";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Gmail from "./pages/Gmail";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/gmail" element={<Gmail />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
