import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Single shared password - you can change this to whatever you want
    if (password === "micoud2024") {
      sessionStorage.setItem("isAuthenticated", "true");
      onLogin();
      toast({
        title: "Login successful",
        description: "Welcome to Micoud Secondary School",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Card className="w-full max-w-md glass-card shadow-elegant animate-fade-in-up relative z-10">
        <CardHeader className="space-y-6 text-center pb-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow animate-float">
            <GraduationCap className="h-12 w-12 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Micoud Secondary School
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Learn well to serve better
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 transition-smooth focus:shadow-glow"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-accent border-0 shadow-md hover:shadow-glow transition-bounce"
            >
              <span className="text-accent-foreground font-semibold">Sign In</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
