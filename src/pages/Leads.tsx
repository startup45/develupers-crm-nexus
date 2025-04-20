
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';

const Leads = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Leads Management</h1>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Lead
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>No leads found. Create your first lead to get started.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Lead Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Track your lead conversion rates and performance metrics here.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Leads;
