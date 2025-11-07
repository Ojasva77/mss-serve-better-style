import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Users, Phone } from "lucide-react";

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

interface StudentProfileProps {
  student: Student | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StudentProfile = ({ student, open, onOpenChange }: StudentProfileProps) => {
  if (!student) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">Student Profile</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">
                {student.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
              <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
            </div>
          </div>

          {/* Student Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-4 w-4 text-primary" />
                <span>Gender</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{student.gender}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Student Email</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{student.studentEmail}</p>
            </div>
          </div>

          {/* Parent Information */}
          <div className="space-y-4 pt-4 border-t border-border">
            <h4 className="font-semibold flex items-center gap-2 text-foreground">
              <Users className="h-4 w-4 text-primary" />
              Parent/Guardian Information
            </h4>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-4 w-4 text-primary" />
                <span>Name</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{student.parentName}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Email</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{student.parentEmail}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Phone</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{student.parentPhone}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentProfile;
