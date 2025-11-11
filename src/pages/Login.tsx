import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import mssLogo from "@/assets/mss-logo.jpg";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-stone-100 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-stone-200 animate-fade-in-up relative z-10">
        <CardHeader className="space-y-6 text-center pb-8">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl animate-float p-2">
            <img 
              src={mssLogo} 
              alt="Micoud Secondary School Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold text-stone-800">
              Micoud Secondary School
            </CardTitle>
            <CardDescription className="text-base text-stone-600">
              Learn well to serve better
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-stone-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 border-stone-300 bg-white focus:border-stone-500 focus:ring-stone-500"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-stone-700 hover:bg-stone-800 text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span className="font-semibold">Sign In</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
