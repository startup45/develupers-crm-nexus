
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText } from 'lucide-react';

const Documents = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Documents</h1>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Upload Document
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>No documents found. Upload your first document to get started.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Document Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="list-disc list-inside">
                  <li>Contracts & Agreements</li>
                  <li>Proposals</li>
                  <li>Client Documentation</li>
                  <li>Project Files</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Documents;
