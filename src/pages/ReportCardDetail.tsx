import { ArrowLeft, Download, Printer } from "lucide-react";
import { Link, useParams } from "react-router-dom";
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
import { Badge } from "@/components/ui/badge";

interface ReportCardDetailProps {
  onLogout: () => void;
}

const studentData: Record<string, any> = {
  "1": {
    name: "John Smith",
    id: "MSS-2024-001",
    grade: "Form 5",
    term: "Term 2, 2024",
    teacher: "Ms. Rodriguez",
    subjects: [
      { name: "Mathematics", grade: "A", percentage: 92, comment: "Excellent problem-solving skills" },
      { name: "English Language", grade: "B+", percentage: 87, comment: "Strong written communication" },
      { name: "Physics", grade: "A-", percentage: 89, comment: "Shows great understanding of concepts" },
      { name: "Chemistry", grade: "B+", percentage: 85, comment: "Good laboratory techniques" },
      { name: "Biology", grade: "A", percentage: 91, comment: "Outstanding performance" },
      { name: "History", grade: "B", percentage: 82, comment: "Good analytical skills" },
    ],
    attendance: "96%",
    overallGrade: "A-",
    overallPercentage: 87.7,
    classRank: "3 of 42",
    teacherComment: "John has demonstrated exceptional academic performance this term. He shows strong leadership qualities and actively participates in class discussions.",
  },
};

const ReportCardDetail = ({ onLogout }: ReportCardDetailProps) => {
  const { id } = useParams();
  const student = studentData[id || "1"] || studentData["1"];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-500/10 text-green-700 dark:text-green-400";
    if (grade.startsWith("B")) return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
    if (grade.startsWith("C")) return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
    return "bg-red-500/10 text-red-700 dark:text-red-400";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      <main className="container px-4 md:px-6 py-8 space-y-6">
        <div className="flex items-center justify-between animate-fade-in-up">
          <Link to="/reports/report-cards">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Report Cards
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        <Card className="shadow-card border-border/50 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="border-b border-border/50 bg-muted/20">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Micoud Secondary School</h1>
              <p className="text-sm text-muted-foreground">Learn well to serve better</p>
              <div className="pt-4">
                <CardTitle className="text-xl">STUDENT REPORT CARD</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{student.term}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Student Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Student Name</p>
                <p className="font-semibold">{student.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Student ID</p>
                <p className="font-semibold">{student.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Grade Level</p>
                <p className="font-semibold">{student.grade}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Form Teacher</p>
                <p className="font-semibold">{student.teacher}</p>
              </div>
            </div>

            {/* Grades Table */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Academic Performance</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Percentage</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                    <TableHead>Teacher Comments</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {student.subjects.map((subject: any) => (
                    <TableRow key={subject.name}>
                      <TableCell className="font-medium">{subject.name}</TableCell>
                      <TableCell className="text-center">{subject.percentage}%</TableCell>
                      <TableCell className="text-center">
                        <Badge className={getGradeColor(subject.grade)}>
                          {subject.grade}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {subject.comment}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Overall Average</p>
                <p className="text-2xl font-bold text-primary">{student.overallPercentage}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Overall Grade</p>
                <p className="text-2xl font-bold text-primary">{student.overallGrade}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-2xl font-bold text-primary">{student.classRank}</p>
              </div>
            </div>

            {/* Attendance */}
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Attendance Rate</p>
              <p className="text-xl font-semibold">{student.attendance}</p>
            </div>

            {/* Teacher Comments */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Form Teacher's Comments</h3>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm leading-relaxed">{student.teacherComment}</p>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="border-t border-foreground/20 pt-2 mt-12">
                  <p className="text-sm text-center">Form Teacher Signature</p>
                </div>
              </div>
              <div>
                <div className="border-t border-foreground/20 pt-2 mt-12">
                  <p className="text-sm text-center">Principal Signature</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ReportCardDetail;
