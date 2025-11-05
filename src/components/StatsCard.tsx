import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: string;
}

const StatsCard = ({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) => {
  return (
    <Card className="shadow-card hover-lift border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
            {trend && (
              <p className="text-xs font-medium text-secondary mt-2">{trend}</p>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
