
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LifeBuoy, MessageSquare, FileText, Mail } from 'lucide-react';

const Support = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Help & Support</h1>
          <Button className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Contact Support
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Access comprehensive guides and tutorials to help you use the platform effectively.</p>
                <Button variant="outline" className="w-full">View Documentation</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Chat with our support team in real-time to get immediate assistance with your questions.</p>
                <Button variant="outline" className="w-full">Start Chat</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Send us a detailed message about your issue and we'll respond as soon as possible.</p>
                <Button variant="outline" className="w-full">Send Email</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-develupers-card-bg/80 border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LifeBuoy className="w-5 h-5" />
                FAQs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Find answers to commonly asked questions about our platform and services.</p>
                <Button variant="outline" className="w-full">View FAQs</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Support;
