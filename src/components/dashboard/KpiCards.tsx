
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  Building, 
  TrendingUp, 
  Briefcase,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const KpiCards: React.FC = () => {
  const kpiData = [
    {
      title: 'Total Interns',
      value: 28,
      icon: Users,
      change: '+12%',
      up: true,
      color: 'bg-develupers-accent-purple/10',
      iconColor: 'text-develupers-accent-purple'
    },
    {
      title: 'Clients',
      value: 16,
      icon: Building,
      change: '+5%',
      up: true,
      color: 'bg-develupers-info/10',
      iconColor: 'text-develupers-info'
    },
    {
      title: 'Revenue',
      value: '$124,500',
      icon: TrendingUp,
      change: '+18%',
      up: true,
      color: 'bg-develupers-success/10',
      iconColor: 'text-develupers-success'
    },
    {
      title: 'Active Projects',
      value: 12,
      icon: Briefcase,
      change: '-2',
      up: false,
      color: 'bg-develupers-warning/10',
      iconColor: 'text-develupers-warning'
    }
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="kpi-card overflow-hidden group">
          <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-gradient-to-br from-develupers-card-bg to-black/10 transition-all duration-300 group-hover:scale-110"></div>
          <div className={`p-2 rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${kpi.color}`}>
            <kpi.icon className={`h-6 w-6 ${kpi.iconColor}`} />
          </div>
          <h3 className="text-sm font-medium text-muted-foreground">{kpi.title}</h3>
          <div className="mt-1 flex items-baseline justify-between">
            <p className="text-2xl font-semibold">{kpi.value}</p>
            <div className={`flex items-center text-xs font-medium ${kpi.up ? 'text-develupers-success' : 'text-develupers-error'}`}>
              {kpi.up ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              <span>{kpi.change}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default KpiCards;
