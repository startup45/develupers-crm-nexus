
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, CreditCard } from 'lucide-react';

const Finance = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Finance</h1>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Invoice
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Track your revenue, expenses, and financial metrics here.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>No transactions found. Create your first invoice to get started.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Finance;
