import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StudentProfile from "@/components/StudentProfile";

interface Student {
  id: string;
  name: string;
  initials: string;
  grade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentEmail: string;
  gender: string;
  avatar?: string;
}

const studentsData: Student[] = [
  {
    id: "1",
    name: "Emily Anderson",
    initials: "EA",
    grade: "10",
    parentName: "Robert Anderson",
    parentEmail: "r.anderson@email.com",
    parentPhone: "+1 (758) 555-0101",
    studentEmail: "emily.anderson@student.mss.edu",
    gender: "Female",
  },
  {
    id: "2",
    name: "Marcus Thompson",
    initials: "MT",
    grade: "11",
    parentName: "Jennifer Thompson",
    parentEmail: "j.thompson@email.com",
    parentPhone: "+1 (758) 555-0102",
    studentEmail: "marcus.thompson@student.mss.edu",
    gender: "Male",
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    initials: "SR",
    grade: "9",
    parentName: "Carlos Rodriguez",
    parentEmail: "c.rodriguez@email.com",
    parentPhone: "+1 (758) 555-0103",
    studentEmail: "sophia.rodriguez@student.mss.edu",
    gender: "Female",
  },
  {
    id: "4",
    name: "James Mitchell",
    initials: "JM",
    grade: "12",
    parentName: "Patricia Mitchell",
    parentEmail: "p.mitchell@email.com",
    parentPhone: "+1 (758) 555-0104",
    studentEmail: "james.mitchell@student.mss.edu",
    gender: "Male",
  },
  {
    id: "5",
    name: "Olivia Johnson",
    initials: "OJ",
    grade: "10",
    parentName: "Michael Johnson",
    parentEmail: "m.johnson@email.com",
    parentPhone: "+1 (758) 555-0105",
    studentEmail: "olivia.johnson@student.mss.edu",
    gender: "Female",
  },
  {
    id: "6",
    name: "Daniel Williams",
    initials: "DW",
    grade: "11",
    parentName: "Sarah Williams",
    parentEmail: "s.williams@email.com",
    parentPhone: "+1 (758) 555-0106",
    studentEmail: "daniel.williams@student.mss.edu",
    gender: "Male",
  },
];

interface StudentsProps {
  onLogout: () => void;
}

const Students = ({ onLogout }: StudentsProps) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setIsProfileOpen(true);
  };

  // Group students by grade
  const studentsByGrade = studentsData.reduce((acc, student) => {
    if (!acc[student.grade]) {
      acc[student.grade] = [];
    }
    acc[student.grade].push(student);
    return acc;
  }, {} as Record<string, Student[]>);

  return (
    <>
      <StudentProfile 
        student={selectedStudent} 
        open={isProfileOpen} 
        onOpenChange={setIsProfileOpen}
      />
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-foreground mb-2">Students</h1>
            <p className="text-muted-foreground">View and manage student information</p>
          </div>

          <div className="space-y-6">
            {Object.entries(studentsByGrade)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([grade, students]) => (
                <Card key={grade} className="glass-card shadow-elegant hover-lift animate-fade-in-up" style={{ animationDelay: `${Number(grade) * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Grade {grade}</CardTitle>
                    <CardDescription>{students.length} students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {students.map((student) => (
                        <Button
                          key={student.id}
                          variant="outline"
                          className="h-auto p-4 justify-start hover:shadow-glow transition-bounce hover:scale-105"
                          onClick={() => handleStudentClick(student)}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {student.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start">
                              <span className="font-medium text-sm text-foreground">{student.name}</span>
                              <span className="text-xs text-muted-foreground">{student.studentEmail}</span>
                              <Badge variant="secondary" className="mt-1 text-xs">
                                {student.gender}
                              </Badge>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
