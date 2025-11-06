import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportCardsProps {
  onLogout: () => void;
}

const students = [
  { id: "1", name: "John Smith", grade: "Form 5", term: "Term 2, 2024" },
  { id: "2", name: "Sarah Johnson", grade: "Form 4", term: "Term 2, 2024" },
  { id: "3", name: "Michael Brown", grade: "Form 5", term: "Term 2, 2024" },
  { id: "4", name: "Emma Davis", grade: "Form 3", term: "Term 2, 2024" },
  { id: "5", name: "James Wilson", grade: "Form 4", term: "Term 2, 2024" },
  { id: "6", name: "Olivia Martinez", grade: "Form 5", term: "Term 2, 2024" },
  { id: "7", name: "William Taylor", grade: "Form 3", term: "Term 2, 2024" },
  { id: "8", name: "Sophia Anderson", grade: "Form 4", term: "Term 2, 2024" },
];

const ReportCards = ({ onLogout }: ReportCardsProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      <main className="container px-4 md:px-6 py-8 space-y-6">
        <div className="flex items-center gap-4 animate-fade-in-up">
          <Link to="/reports">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Reports
            </Button>
          </Link>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl font-bold mb-2">Student Report Cards</h1>
          <p className="text-muted-foreground">Click on a student to view their report card</p>
        </div>

        <Card className="shadow-card border-border/50 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Grade Level</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>{student.term}</TableCell>
                    <TableCell className="text-right">
                      <Link to={`/reports/report-cards/${student.id}`}>
                        <Button variant="outline" size="sm">
                          View Report
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ReportCards;
