
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Documents = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Documents</h1>
        <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
          <CardHeader>
            <CardTitle>Document Library</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Document management content will go here.</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Documents;
