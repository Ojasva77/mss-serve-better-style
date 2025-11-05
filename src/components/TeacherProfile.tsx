import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, User, Heart, Clock } from "lucide-react";

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

interface TeacherProfileProps {
  teacher: Teacher | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TeacherProfile = ({ teacher, open, onOpenChange }: TeacherProfileProps) => {
  if (!teacher) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">Teacher Profile</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">
                {teacher.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">{teacher.name}</h3>
              <p className="text-sm text-muted-foreground">{teacher.subjects}</p>
            </div>
          </div>

          {/* Qualifications */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>Qualifications</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {teacher.qualifications.map((qual, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {qual}
                </Badge>
              ))}
            </div>
          </div>

          {/* Teaching Schedule */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Teaching Hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{teacher.startTime} - {teacher.endTime}</span>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-4 w-4 text-primary" />
                <span>Gender</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{teacher.gender}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Heart className="h-4 w-4 text-primary" />
                <span>Marital Status</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{teacher.maritalStatus}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherProfile;
