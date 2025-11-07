import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import ReportCards from "./pages/ReportCards";
import ReportCardDetail from "./pages/ReportCardDetail";
import Transcripts from "./pages/Transcripts";
import Students from "./pages/Students";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const auth = sessionStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Index onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/students"
              element={
                isAuthenticated ? (
                  <Students onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/reports"
              element={
                isAuthenticated ? (
                  <Reports onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/reports/report-cards"
              element={
                isAuthenticated ? (
                  <ReportCards onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/reports/report-cards/:id"
              element={
                isAuthenticated ? (
                  <ReportCardDetail onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/reports/transcripts"
              element={
                isAuthenticated ? (
                  <Transcripts onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
