import { FileText, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReportsProps {
  onLogout: () => void;
}

const Reports = ({ onLogout }: ReportsProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      <main className="container px-4 md:px-6 py-8 space-y-8">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2">Reports</h1>
          <p className="text-muted-foreground">Access student report cards and transcripts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Card className="shadow-card border-border/50 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Report Cards</CardTitle>
              </div>
              <CardDescription>
                View and download student report cards with grades and performance summaries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/reports/report-cards">
                <Button className="w-full" variant="default">
                  View Report Cards
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <ScrollText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Transcripts</CardTitle>
              </div>
              <CardDescription>
                Access complete academic transcripts with full course history and grades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/reports/transcripts">
                <Button className="w-full" variant="secondary">
                  View Transcripts
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reports;
