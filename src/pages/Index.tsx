import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";

interface IndexProps {
  onLogout: () => void;
}

const Index = ({ onLogout }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
      <main className="container px-4 md:px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <StatsCard
            title="Total Students"
            value="1,247"
            subtitle="Active enrollments"
            icon={Users}
            trend="↑ 12% from last year"
          />
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
