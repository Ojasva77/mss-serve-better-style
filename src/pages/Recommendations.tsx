import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { ArrowLeft, CheckCircle, XCircle, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RecommendationsProps {
  onLogout: () => void;
}

interface Recommendation {
  id: string;
  studentName: string;
  subject: string;
  teacher: string;
  recommended: boolean;
  comments: string;
  date: string;
}

const existingRecommendations: Recommendation[] = [
  {
    id: "1",
    studentName: "John Doe",
    subject: "Mathematics",
    teacher: "Dr. Sarah Smith",
    recommended: true,
    comments: "Excellent performance throughout the year. Shows strong aptitude for mathematical concepts.",
    date: "2024-01-15",
  },
  {
    id: "2",
    studentName: "Jane Smith",
    subject: "English Language",
    teacher: "Mr. Michael Johnson",
    recommended: true,
    comments: "Outstanding written and verbal communication skills. Ready for CXC examination.",
    date: "2024-01-14",
  },
  {
    id: "3",
    studentName: "Michael Brown",
    subject: "Biology",
    teacher: "Ms. Lisa Williams",
    recommended: false,
    comments: "Needs improvement in practical lab work. Recommend additional tutoring before registration.",
    date: "2024-01-12",
  },
];

const Recommendations = ({ onLogout }: RecommendationsProps) => {
  const { toast } = useToast();
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [recommended, setRecommended] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Recommendation Submitted",
      description: "Your recommendation has been recorded successfully.",
    });
    setSelectedStudent("");
    setSelectedSubject("");
    setRecommended("");
    setComments("");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Header onLogout={onLogout} />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-6 animate-fade-in-up">
          <Link to="/cxc">
            <Button variant="ghost" className="gap-2 mb-4 hover:shadow-md transition-smooth">
              <ArrowLeft className="h-4 w-4" />
              Back to CXC
            </Button>
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">CXC Recommendations</h1>
          <p className="text-muted-foreground">
            Submit teacher recommendations for student CXC examinations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Submit New Recommendation</CardTitle>
              <CardDescription>
                Indicate whether you recommend a student for a specific subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student">Student Name</Label>
                  <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                    <SelectTrigger id="student">
                      <SelectValue placeholder="Select a student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe - Grade 11</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith - Grade 11</SelectItem>
                      <SelectItem value="michael-brown">Michael Brown - Grade 12</SelectItem>
                      <SelectItem value="sarah-johnson">Sarah Johnson - Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="english">English Language</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recommendation">Recommendation</Label>
                  <Select value={recommended} onValueChange={setRecommended}>
                    <SelectTrigger id="recommendation">
                      <SelectValue placeholder="Select recommendation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Recommended</SelectItem>
                      <SelectItem value="no">Not Recommended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Provide detailed comments about the student's readiness..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent border-0 gap-2 shadow-md hover:shadow-glow transition-bounce"
                  disabled={!selectedStudent || !selectedSubject || !recommended || !comments}
                >
                  <Save className="h-4 w-4" />
                  <span className="text-accent-foreground font-semibold">Submit Recommendation</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Previous Recommendations</CardTitle>
              <CardDescription>
                View all submitted recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {existingRecommendations.map((rec) => (
                      <TableRow key={rec.id}>
                        <TableCell className="font-medium">{rec.studentName}</TableCell>
                        <TableCell>{rec.subject}</TableCell>
                        <TableCell>
                          {rec.recommended ? (
                            <Badge className="gap-1 bg-gradient-primary border-0">
                              <CheckCircle className="h-3 w-3" />
                              <span className="text-primary-foreground">Recommended</span>
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="gap-1">
                              <XCircle className="h-3 w-3" />
                              Not Recommended
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle>Detailed Recommendation History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {existingRecommendations.map((rec) => (
                <div key={rec.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{rec.studentName} - {rec.subject}</h4>
                      <p className="text-sm text-muted-foreground">By {rec.teacher} on {rec.date}</p>
                    </div>
                    {rec.recommended ? (
                      <Badge className="gap-1 bg-gradient-primary border-0">
                        <CheckCircle className="h-3 w-3" />
                        <span className="text-primary-foreground">Recommended</span>
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="gap-1">
                        <XCircle className="h-3 w-3" />
                        Not Recommended
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.comments}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Recommendations;
