import { UserPlus, BookOpenCheck, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuickActions = () => {
  const actions = [
    { icon: UserPlus, label: "Add Student", variant: "default" as const },
    { icon: BookOpenCheck, label: "Record Grades", variant: "secondary" as const },
    { icon: FileText, label: "Generate Report", variant: "outline" as const },
    { icon: Calendar, label: "Schedule Event", variant: "outline" as const },
  ];

  return (
    <Card className="glass-card shadow-elegant border-border/50">
      <CardHeader>
        <CardTitle className="text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="h-auto flex-col gap-2 py-4 transition-bounce hover:shadow-md"
          >
            <action.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{action.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
