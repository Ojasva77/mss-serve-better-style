import { BookOpen, Users, GraduationCap, BarChart3, UserSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import TeacherProfile from "./TeacherProfile";

interface Teacher {
  id: string;
  name: string;
  initials: string;
  subjects: string;
  qualifications: string[];
  startTime: string;
  endTime: string;
  gender: string;
  maritalStatus: string;
  avatar?: string;
}

const teachersData: Teacher[] = [
  {
    id: "1",
    name: "Dr. Sarah Smith",
    initials: "DS",
    subjects: "Mathematics & Physics",
    qualifications: ["Ph.D. in Mathematics", "M.Sc. Physics", "B.Ed."],
    startTime: "8:00 AM",
    endTime: "3:30 PM",
    gender: "Female",
    maritalStatus: "Married",
  },
  {
    id: "2",
    name: "Mr. Michael Johnson",
    initials: "MJ",
    subjects: "English & Literature",
    qualifications: ["M.A. in English Literature", "B.A. English", "TESOL Certificate"],
    startTime: "8:00 AM",
    endTime: "3:30 PM",
    gender: "Male",
    maritalStatus: "Single",
  },
  {
    id: "3",
    name: "Ms. Lisa Williams",
    initials: "LW",
    subjects: "Biology & Chemistry",
    qualifications: ["M.Sc. Biology", "B.Sc. Chemistry", "Teaching Diploma"],
    startTime: "8:00 AM",
    endTime: "3:30 PM",
    gender: "Female",
    maritalStatus: "Single",
  },
  {
    id: "4",
    name: "Mr. James Brown",
    initials: "JB",
    subjects: "History & Geography",
    qualifications: ["M.A. in History", "B.A. Geography", "Social Studies Certificate"],
    startTime: "8:00 AM",
    endTime: "3:30 PM",
    gender: "Male",
    maritalStatus: "Married",
  },
];

const Header = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleTeacherClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsProfileOpen(true);
  };

  return (
    <>
      <TeacherProfile 
        teacher={selectedTeacher} 
        open={isProfileOpen} 
        onOpenChange={setIsProfileOpen}
      />
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-foreground">Micoud Secondary School</h1>
            <p className="text-xs text-muted-foreground">Learn well to serve better</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Courses</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Users className="h-4 w-4" />
            <span>Students</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <UserSquare className="h-4 w-4" />
                <span>Teachers</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card z-50">
              {teachersData.map((teacher) => (
                <DropdownMenuItem 
                  key={teacher.id}
                  className="flex items-center gap-3 p-3 cursor-pointer"
                  onClick={() => handleTeacherClick(teacher)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {teacher.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{teacher.name}</span>
                    <span className="text-xs text-muted-foreground">{teacher.subjects}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Reports</span>
          </Button>
        </nav>
        
        <Button className="bg-gradient-accent border-0">
          <span className="text-accent-foreground font-medium">Dashboard</span>
        </Button>
      </div>
    </header>
    </>
  );
};

export default Header;
