import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ClipboardCheck, UserCheck } from "lucide-react";

interface CXCProps {
  onLogout: () => void;
}

const CXC = ({ onLogout }: CXCProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Header onLogout={onLogout} />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">CXC Management</h1>
          <p className="text-muted-foreground">
            Manage CXC exam registrations and teacher recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card shadow-elegant hover-lift transition-bounce animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-glow animate-float">
                  <ClipboardCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>CXC Registration</CardTitle>
                  <CardDescription>Register students for CXC exams</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Admin portal to register students for Caribbean Examinations Council (CXC) exams. 
                Select subjects, exam levels, and manage registration details.
              </p>
              <Link to="/cxc/registration">
                <Button className="w-full bg-gradient-primary border-0 shadow-md hover:shadow-glow transition-bounce">
                  <span className="text-primary-foreground font-semibold">Go to Registration</span>
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-elegant hover-lift transition-bounce animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent shadow-glow animate-float" style={{ animationDelay: '0.5s' }}>
                  <UserCheck className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Teacher recommendations for students</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Teachers can write and submit recommendations indicating whether a student 
                is recommended to write a particular subject for CXC exams.
              </p>
              <Link to="/cxc/recommendations">
                <Button className="w-full bg-gradient-accent border-0 shadow-md hover:shadow-glow transition-bounce">
                  <span className="text-accent-foreground font-semibold">View Recommendations</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CXC;
