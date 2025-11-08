import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "enrollment",
      student: "John Smith",
      action: "enrolled in Mathematics",
      time: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      type: "grade",
      student: "Sarah Johnson",
      action: "received grade for Physics",
      time: "3 hours ago",
      status: "info",
    },
    {
      id: 3,
      type: "attendance",
      student: "Michael Brown",
      action: "marked present",
      time: "5 hours ago",
      status: "success",
    },
    {
      id: 4,
      type: "report",
      student: "Emma Davis",
      action: "report card generated",
      time: "1 day ago",
      status: "info",
    },
  ];

  return (
    <Card className="glass-card shadow-elegant border-border/50">
      <CardHeader>
        <CardTitle className="text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-0 border-border/30 transition-smooth hover:bg-muted/30 -mx-2 px-2 rounded-md"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {activity.student}
              </p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
            <Badge
              variant={activity.status === "success" ? "default" : "secondary"}
              className="capitalize shrink-0"
            >
              {activity.type}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
