import { Users, BookOpen, Award, TrendingUp, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface IndexProps {
  onLogout: () => void;
}

const Index = ({ onLogout }: IndexProps) => {
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  
  const formData = [
    { form: "Form 1", students: 267, color: "bg-blue-500" },
    { form: "Form 2", students: 254, color: "bg-green-500" },
    { form: "Form 3", students: 241, color: "bg-yellow-500" },
    { form: "Form 4", students: 238, color: "bg-orange-500" },
    { form: "Form 5", students: 247, color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <Header onLogout={onLogout} />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container px-4 md:px-6 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Micoud Secondary School
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-primary-foreground/90">
              Learn well to serve better
            </p>
            <p className="text-base text-primary-foreground/80 max-w-2xl">
              Comprehensive school management system for tracking students, courses, grades, and academic performance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 md:px-6 py-8 space-y-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Collapsible open={isStudentsOpen} onOpenChange={setIsStudentsOpen} className="md:col-span-2 lg:col-span-1">
            <Card className="glass-card shadow-elegant hover-lift border-border/50">
              <CardContent className="p-6">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Total Students</p>
                      <h3 className="text-3xl font-bold text-foreground mb-1">1,247</h3>
                      <p className="text-xs text-muted-foreground">Active enrollments</p>
                      <p className="text-xs font-medium text-secondary mt-2">↑ 12% from last year</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent shadow-glow animate-float">
                        <Users className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isStudentsOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                    {formData.map((form) => (
                      <div key={form.form} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${form.color}`} />
                          <span className="text-sm font-medium text-foreground">{form.form}</span>
                        </div>
                        <span className="text-sm font-bold text-foreground">{form.students}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
          <StatsCard
            title="Active Courses"
            value="48"
            subtitle="This semester"
            icon={BookOpen}
            trend="6 new courses added"
          />
          <StatsCard
            title="Average Grade"
            value="B+"
            subtitle="School-wide performance"
            icon={Award}
            trend="↑ 5% improvement"
          />
          <StatsCard
            title="Attendance Rate"
            value="94.2%"
            subtitle="This month"
            icon={TrendingUp}
            trend="↑ 2.3% from last month"
          />
        </div>

        {/* Quick Actions and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
