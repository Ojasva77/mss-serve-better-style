import { BookOpen, Users, GraduationCap, BarChart3, UserSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
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
              <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Dr. Smith" />
                  <AvatarFallback className="bg-primary/10 text-primary">DS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Dr. Sarah Smith</span>
                  <span className="text-xs text-muted-foreground">Mathematics & Physics</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Mr. Johnson" />
                  <AvatarFallback className="bg-primary/10 text-primary">MJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Mr. Michael Johnson</span>
                  <span className="text-xs text-muted-foreground">English & Literature</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Ms. Williams" />
                  <AvatarFallback className="bg-primary/10 text-primary">LW</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Ms. Lisa Williams</span>
                  <span className="text-xs text-muted-foreground">Biology & Chemistry</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Mr. Brown" />
                  <AvatarFallback className="bg-primary/10 text-primary">JB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Mr. James Brown</span>
                  <span className="text-xs text-muted-foreground">History & Geography</span>
                </div>
              </DropdownMenuItem>
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
  );
};

export default Header;
