import { ArrowLeft, Download, Printer } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

interface TranscriptsProps {
  onLogout: () => void;
}

const transcriptData = {
  student: {
    name: "Sarah Johnson",
    id: "MSS-2021-045",
    dateOfBirth: "March 15, 2008",
    dateOfAdmission: "September 1, 2021",
    dateOfGraduation: "June 30, 2025 (Expected)",
  },
  academicHistory: [
    {
      year: "2021-2022",
      form: "Form 1",
      subjects: [
        { name: "Mathematics", term1: "A-", term2: "A", term3: "A", final: "A" },
        { name: "English Language", term1: "B+", term2: "A-", term3: "A-", final: "A-" },
        { name: "Spanish", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Integrated Science", term1: "A-", term2: "A", term3: "A", final: "A" },
        { name: "Social Studies", term1: "B+", term2: "A-", term3: "A-", final: "A-" },
        { name: "Physical Education", term1: "A", term2: "A", term3: "A", final: "A" },
      ],
      gpa: 3.85,
    },
    {
      year: "2022-2023",
      form: "Form 2",
      subjects: [
        { name: "Mathematics", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "English Language", term1: "A-", term2: "A", term3: "A", final: "A" },
        { name: "Spanish", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Biology", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Chemistry", term1: "A-", term2: "A-", term3: "A", final: "A-" },
        { name: "History", term1: "B+", term2: "A-", term3: "A-", final: "A-" },
      ],
      gpa: 3.92,
    },
    {
      year: "2023-2024",
      form: "Form 3",
      subjects: [
        { name: "Mathematics", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "English Language", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Spanish", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Biology", term1: "A", term2: "A", term3: "A", final: "A" },
        { name: "Chemistry", term1: "A-", term2: "A", term3: "A", final: "A" },
        { name: "Physics", term1: "A-", term2: "A-", term3: "A-", final: "A-" },
      ],
      gpa: 3.95,
    },
  ],
  cumulativeGPA: 3.91,
  classRank: "2 of 187",
  awards: [
    "Honor Roll - All Terms (2021-2024)",
    "Mathematics Excellence Award (2023)",
    "Science Fair 1st Place (2023)",
    "Perfect Attendance Award (2022-2023)",
  ],
};

const Transcripts = ({ onLogout }: TranscriptsProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      <main className="container px-4 md:px-6 py-8 space-y-6">
        <div className="flex items-center justify-between animate-fade-in-up">
          <Link to="/reports">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Reports
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
                <CardTitle className="text-xl">OFFICIAL ACADEMIC TRANSCRIPT</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Complete Academic Record</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            {/* Student Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Student Name</p>
                <p className="font-semibold">{transcriptData.student.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Student ID</p>
                <p className="font-semibold">{transcriptData.student.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-semibold">{transcriptData.student.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Admission</p>
                <p className="font-semibold">{transcriptData.student.dateOfAdmission}</p>
              </div>
            </div>

            {/* Academic History by Year */}
            {transcriptData.academicHistory.map((year, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{year.year} - {year.form}</h3>
                  <Badge variant="secondary">GPA: {year.gpa}</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead className="text-center">Term 1</TableHead>
                      <TableHead className="text-center">Term 2</TableHead>
                      <TableHead className="text-center">Term 3</TableHead>
                      <TableHead className="text-center">Final Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {year.subjects.map((subject) => (
                      <TableRow key={subject.name}>
                        <TableCell className="font-medium">{subject.name}</TableCell>
                        <TableCell className="text-center">{subject.term1}</TableCell>
                        <TableCell className="text-center">{subject.term2}</TableCell>
                        <TableCell className="text-center">{subject.term3}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline">{subject.final}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}

            {/* Cumulative Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-muted/30 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Cumulative GPA</p>
                <p className="text-3xl font-bold text-primary">{transcriptData.cumulativeGPA}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Class Rank</p>
                <p className="text-3xl font-bold text-primary">{transcriptData.classRank}</p>
              </div>
            </div>

            {/* Awards and Honors */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Awards and Honors</h3>
              <div className="p-4 bg-muted/30 rounded-lg">
                <ul className="space-y-2">
                  {transcriptData.awards.map((award, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grading Scale */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h3 className="text-lg font-semibold">Grading Scale</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                <div className="p-2 bg-muted/30 rounded text-center">
                  <p className="font-semibold">A</p>
                  <p className="text-xs text-muted-foreground">90-100%</p>
                </div>
                <div className="p-2 bg-muted/30 rounded text-center">
                  <p className="font-semibold">B</p>
                  <p className="text-xs text-muted-foreground">80-89%</p>
                </div>
                <div className="p-2 bg-muted/30 rounded text-center">
                  <p className="font-semibold">C</p>
                  <p className="text-xs text-muted-foreground">70-79%</p>
                </div>
                <div className="p-2 bg-muted/30 rounded text-center">
                  <p className="font-semibold">D</p>
                  <p className="text-xs text-muted-foreground">60-69%</p>
                </div>
                <div className="p-2 bg-muted/30 rounded text-center">
                  <p className="font-semibold">F</p>
                  <p className="text-xs text-muted-foreground">Below 60%</p>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="pt-6 space-y-6 border-t border-border/50">
              <p className="text-sm text-center text-muted-foreground">
                This is to certify that the above is a true and accurate record of the academic performance of the student named herein.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="border-t border-foreground/20 pt-2 mt-12">
                    <p className="text-sm text-center">Registrar Signature</p>
                    <p className="text-xs text-center text-muted-foreground mt-1">Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <div className="border-t border-foreground/20 pt-2 mt-12">
                    <p className="text-sm text-center">Principal Signature</p>
                    <p className="text-xs text-center text-muted-foreground mt-1">Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Transcripts;
