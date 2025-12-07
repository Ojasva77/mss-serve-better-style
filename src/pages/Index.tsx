import { Users, BookOpen, Award, TrendingUp, ChevronDown, UserCheck, UserX } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import StudentProfile from "@/components/StudentProfile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import schoolBanner from "@/assets/school-banner.jpg";

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

interface IndexProps {
  onLogout: () => void;
}

const Index = ({ onLogout }: IndexProps) => {
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  const [openForms, setOpenForms] = useState<Record<string, boolean>>({});
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setIsProfileOpen(true);
  };

  const toggleForm = (formName: string) => {
    setOpenForms(prev => ({ ...prev, [formName]: !prev[formName] }));
  };
  
  const studentsByForm: Record<string, Student[]> = {
    "Form 1": [
      { id: "1", name: "Emily Anderson", initials: "EA", grade: "Form 1", parentName: "Robert Anderson", parentEmail: "r.anderson@email.com", parentPhone: "+1 (758) 555-0101", studentEmail: "emily.anderson@student.mss.edu", gender: "Female" },
      { id: "2", name: "Marcus Thompson", initials: "MT", grade: "Form 1", parentName: "Jennifer Thompson", parentEmail: "j.thompson@email.com", parentPhone: "+1 (758) 555-0102", studentEmail: "marcus.thompson@student.mss.edu", gender: "Male" },
      { id: "3", name: "Sophia Rodriguez", initials: "SR", grade: "Form 1", parentName: "Carlos Rodriguez", parentEmail: "c.rodriguez@email.com", parentPhone: "+1 (758) 555-0103", studentEmail: "sophia.rodriguez@student.mss.edu", gender: "Female" },
    ],
    "Form 2": [
      { id: "4", name: "James Mitchell", initials: "JM", grade: "Form 2", parentName: "Patricia Mitchell", parentEmail: "p.mitchell@email.com", parentPhone: "+1 (758) 555-0104", studentEmail: "james.mitchell@student.mss.edu", gender: "Male" },
      { id: "5", name: "Olivia Johnson", initials: "OJ", grade: "Form 2", parentName: "Michael Johnson", parentEmail: "m.johnson@email.com", parentPhone: "+1 (758) 555-0105", studentEmail: "olivia.johnson@student.mss.edu", gender: "Female" },
    ],
    "Form 3": [
      { id: "6", name: "Daniel Williams", initials: "DW", grade: "Form 3", parentName: "Sarah Williams", parentEmail: "s.williams@email.com", parentPhone: "+1 (758) 555-0106", studentEmail: "daniel.williams@student.mss.edu", gender: "Male" },
      { id: "7", name: "Ava Martinez", initials: "AM", grade: "Form 3", parentName: "Diego Martinez", parentEmail: "d.martinez@email.com", parentPhone: "+1 (758) 555-0107", studentEmail: "ava.martinez@student.mss.edu", gender: "Female" },
    ],
    "Form 4": [
      { id: "8", name: "Ethan Brown", initials: "EB", grade: "Form 4", parentName: "Lisa Brown", parentEmail: "l.brown@email.com", parentPhone: "+1 (758) 555-0108", studentEmail: "ethan.brown@student.mss.edu", gender: "Male" },
      { id: "9", name: "Isabella Davis", initials: "ID", grade: "Form 4", parentName: "Mark Davis", parentEmail: "m.davis@email.com", parentPhone: "+1 (758) 555-0109", studentEmail: "isabella.davis@student.mss.edu", gender: "Female" },
    ],
    "Form 5": [
      { id: "10", name: "Liam Garcia", initials: "LG", grade: "Form 5", parentName: "Carmen Garcia", parentEmail: "c.garcia@email.com", parentPhone: "+1 (758) 555-0110", studentEmail: "liam.garcia@student.mss.edu", gender: "Male" },
      { id: "11", name: "Mia Wilson", initials: "MW", grade: "Form 5", parentName: "Thomas Wilson", parentEmail: "t.wilson@email.com", parentPhone: "+1 (758) 555-0111", studentEmail: "mia.wilson@student.mss.edu", gender: "Female" },
    ],
  };

  const formData = [
    { form: "Form 1", students: studentsByForm["Form 1"].length, color: "bg-blue-500" },
    { form: "Form 2", students: studentsByForm["Form 2"].length, color: "bg-green-500" },
    { form: "Form 3", students: studentsByForm["Form 3"].length, color: "bg-yellow-500" },
    { form: "Form 4", students: studentsByForm["Form 4"].length, color: "bg-orange-500" },
    { form: "Form 5", students: studentsByForm["Form 5"].length, color: "bg-red-500" },
  ];

  const totalStudents = Object.values(studentsByForm).reduce((sum, students) => sum + students.length, 0);

  // Attendance data by form and class
  const attendanceByForm: Record<string, { class: string; subject: string; present: string[]; absent: string[] }[]> = {
    "Form 1": [
      { class: "1A", subject: "Mathematics", present: ["Emily Anderson", "Marcus Thompson"], absent: ["Sophia Rodriguez"] },
      { class: "1A", subject: "English A", present: ["Emily Anderson", "Sophia Rodriguez"], absent: ["Marcus Thompson"] },
      { class: "1B", subject: "Integrated Science", present: ["Emily Anderson", "Marcus Thompson", "Sophia Rodriguez"], absent: [] },
    ],
    "Form 2": [
      { class: "2A", subject: "Mathematics", present: ["James Mitchell"], absent: ["Olivia Johnson"] },
      { class: "2A", subject: "Social Studies", present: ["James Mitchell", "Olivia Johnson"], absent: [] },
      { class: "2B", subject: "Spanish", present: ["Olivia Johnson"], absent: ["James Mitchell"] },
    ],
    "Form 3": [
      { class: "3A", subject: "Information Technology", present: ["Daniel Williams", "Ava Martinez"], absent: [] },
      { class: "3A", subject: "Principles of Business", present: ["Daniel Williams"], absent: ["Ava Martinez"] },
      { class: "3B", subject: "English B", present: ["Ava Martinez"], absent: ["Daniel Williams"] },
    ],
    "Form 4": [
      { class: "4A", subject: "Principles of Accounts", present: ["Ethan Brown", "Isabella Davis"], absent: [] },
      { class: "4A", subject: "Mathematics", present: ["Ethan Brown"], absent: ["Isabella Davis"] },
      { class: "4B", subject: "English A", present: ["Isabella Davis"], absent: ["Ethan Brown"] },
    ],
    "Form 5": [
      { class: "5A", subject: "Mathematics", present: ["Liam Garcia", "Mia Wilson"], absent: [] },
      { class: "5A", subject: "English A", present: ["Liam Garcia"], absent: ["Mia Wilson"] },
      { class: "5B", subject: "Information Technology", present: ["Mia Wilson"], absent: ["Liam Garcia"] },
    ],
  };

  const [openAttendance, setOpenAttendance] = useState(false);
  const [openAttendanceForms, setOpenAttendanceForms] = useState<Record<string, boolean>>({});

  const toggleAttendanceForm = (formName: string) => {
    setOpenAttendanceForms(prev => ({ ...prev, [formName]: !prev[formName] }));
  };

  const getTotalPresent = () => {
    return Object.values(attendanceByForm).reduce((sum, classes) => 
      sum + classes.reduce((classSum, c) => classSum + c.present.length, 0), 0
    );
  };

  const getTotalAbsent = () => {
    return Object.values(attendanceByForm).reduce((sum, classes) => 
      sum + classes.reduce((classSum, c) => classSum + c.absent.length, 0), 0
    );
  };

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
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <Header onLogout={onLogout} />
      
      {/* Hero Section with School Photo */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${schoolBanner})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-800/70 to-stone-900/80" />
        <div className="container px-4 md:px-6 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">
              Micoud Secondary School
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-stone-100">
              Learn well to serve better
            </p>
            <p className="text-base text-stone-200 max-w-2xl">
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
                      <h3 className="text-3xl font-bold text-foreground mb-1">{totalStudents}</h3>
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
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                    {formData.map((form) => (
                      <Collapsible 
                        key={form.form}
                        open={openForms[form.form]}
                        onOpenChange={() => toggleForm(form.form)}
                      >
                        <div className="rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors overflow-hidden">
                          <CollapsibleTrigger className="w-full p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${form.color}`} />
                              <span className="text-sm font-medium text-foreground">{form.form}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-foreground">{form.students}</span>
                              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${openForms[form.form] ? 'rotate-180' : ''}`} />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-3 pb-3 space-y-2">
                              {studentsByForm[form.form].map((student) => (
                                <Button
                                  key={student.id}
                                  variant="ghost"
                                  className="w-full h-auto p-3 justify-start hover:bg-background/50 transition-all"
                                  onClick={() => handleStudentClick(student)}
                                >
                                  <div className="flex items-center gap-3 w-full">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                        {student.initials}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start flex-1 min-w-0">
                                      <span className="font-medium text-sm text-foreground truncate w-full">{student.name}</span>
                                      <span className="text-xs text-muted-foreground truncate w-full">{student.studentEmail}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                      {student.gender}
                                    </Badge>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
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
          <Collapsible open={openAttendance} onOpenChange={setOpenAttendance} className="md:col-span-2 lg:col-span-1">
            <Card className="glass-card shadow-elegant hover-lift border-border/50">
              <CardContent className="p-6">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Attendance Rate</p>
                      <h3 className="text-3xl font-bold text-foreground mb-1">94.2%</h3>
                      <p className="text-xs text-muted-foreground">This month</p>
                      <p className="text-xs font-medium text-secondary mt-2">↑ 2.3% from last month</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent shadow-glow animate-float">
                        <TrendingUp className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${openAttendance ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="flex items-center gap-2 text-green-600">
                        <UserCheck className="h-4 w-4" /> Present: {getTotalPresent()}
                      </span>
                      <span className="flex items-center gap-2 text-red-500">
                        <UserX className="h-4 w-4" /> Absent: {getTotalAbsent()}
                      </span>
                    </div>
                    {Object.entries(attendanceByForm).map(([formName, classes]) => (
                      <Collapsible 
                        key={formName}
                        open={openAttendanceForms[formName]}
                        onOpenChange={() => toggleAttendanceForm(formName)}
                      >
                        <div className="rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors overflow-hidden">
                          <CollapsibleTrigger className="w-full p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${formData.find(f => f.form === formName)?.color || 'bg-gray-500'}`} />
                              <span className="text-sm font-medium text-foreground">{formName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/30">
                                {classes.reduce((sum, c) => sum + c.present.length, 0)} present
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-red-500/10 text-red-500 border-red-500/30">
                                {classes.reduce((sum, c) => sum + c.absent.length, 0)} absent
                              </Badge>
                              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${openAttendanceForms[formName] ? 'rotate-180' : ''}`} />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-3 pb-3 space-y-3">
                              {classes.map((classData, idx) => (
                                <div key={idx} className="rounded-md bg-background/50 p-3 space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-foreground">
                                      Class {classData.class} - {classData.subject}
                                    </span>
                                  </div>
                                  {classData.present.length > 0 && (
                                    <div className="space-y-1">
                                      <p className="text-xs font-medium text-green-600 flex items-center gap-1">
                                        <UserCheck className="h-3 w-3" /> Present ({classData.present.length})
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {classData.present.map((name, i) => (
                                          <Badge key={i} variant="secondary" className="text-xs bg-green-500/10 text-green-700 border-green-500/20">
                                            {name}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {classData.absent.length > 0 && (
                                    <div className="space-y-1">
                                      <p className="text-xs font-medium text-red-500 flex items-center gap-1">
                                        <UserX className="h-3 w-3" /> Absent ({classData.absent.length})
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {classData.absent.map((name, i) => (
                                          <Badge key={i} variant="secondary" className="text-xs bg-red-500/10 text-red-600 border-red-500/20">
                                            {name}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {classData.absent.length === 0 && (
                                    <p className="text-xs text-green-600 italic">All students present</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
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
    </>
  );
};

export default Index;
