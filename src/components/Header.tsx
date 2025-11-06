import { BookOpen, Users, GraduationCap, BarChart3, UserSquare, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

interface HeaderProps {
  onLogout: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link to="/reports">
            <Button variant="ghost" size="sm" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Courses</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  <span>Students</span>
                </Button>
                
                {/* Teachers Submenu */}
                <div className="space-y-2">
                  <p className="text-sm font-medium px-2 py-2 flex items-center gap-2">
                    <UserSquare className="h-4 w-4" />
                    Teachers
                  </p>
                  <div className="pl-6 space-y-1">
                    {teachersData.map((teacher) => (
                      <Button
                        key={teacher.id}
                        variant="ghost"
                        className="w-full justify-start gap-3 h-auto py-2"
                        onClick={() => {
                          handleTeacherClick(teacher);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {teacher.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium">{teacher.name}</span>
                          <span className="text-xs text-muted-foreground">{teacher.subjects}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                <Link to="/reports" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Reports</span>
                  </Button>
                </Link>

                <div className="pt-4 border-t border-border/50 mt-4">
                  <Button 
                    className="w-full bg-gradient-accent border-0"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onLogout();
                    }}
                  >
                    <span className="text-accent-foreground font-medium">Logout</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <Button 
          className="bg-gradient-accent border-0 hidden md:flex"
          onClick={onLogout}
        >
          <span className="text-accent-foreground font-medium">Logout</span>
        </Button>
      </div>
    </header>
    </>
  );
};

export default Header;
