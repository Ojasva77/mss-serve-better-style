import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CXCRegistrationProps {
  onLogout: () => void;
}

const subjects = [
  "Mathematics",
  "English Language",
  "English Literature",
  "Biology",
  "Chemistry",
  "Physics",
  "History",
  "Geography",
  "Spanish",
  "French",
  "Physical Education",
  "Information Technology",
  "Principles of Accounts",
  "Social Studies",
];

const CXCRegistration = ({ onLogout }: CXCRegistrationProps) => {
  const { toast } = useToast();
  const [selectedStudent, setSelectedStudent] = useState("");
  const [examLevel, setExamLevel] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: `${selectedStudent} has been registered for ${selectedSubjects.length} subject(s).`,
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-stone-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
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
          <h1 className="text-3xl font-bold text-foreground mb-2">CXC Registration</h1>
          <p className="text-muted-foreground">
            Register students for CXC examinations
          </p>
        </div>

        <Card className="glass-card shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle>Student Registration Form</CardTitle>
            <CardDescription>
              Select the student, exam level, and subjects they will be registered for
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                  <Label htmlFor="examLevel">Exam Level</Label>
                  <Select value={examLevel} onValueChange={setExamLevel}>
                    <SelectTrigger id="examLevel">
                      <SelectValue placeholder="Select exam level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csec">CSEC (Caribbean Secondary Education Certificate)</SelectItem>
                      <SelectItem value="cape">CAPE (Caribbean Advanced Proficiency Examination)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Select Subjects</Label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={selectedSubjects.includes(subject)}
                        onCheckedChange={() => handleSubjectToggle(subject)}
                      />
                      <label
                        htmlFor={subject}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-gradient-primary border-0 gap-2 shadow-md hover:shadow-glow transition-bounce"
                  disabled={!selectedStudent || !examLevel || selectedSubjects.length === 0}
                >
                  <Save className="h-4 w-4" />
                  <span className="text-primary-foreground font-semibold">Submit Registration</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CXCRegistration;
