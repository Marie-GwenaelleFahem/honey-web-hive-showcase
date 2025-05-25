import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Apiculture from "./pages/Apiculture";
import Produits from "./pages/Produits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle GitHub Pages routing
const GitHubPagesRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're on GitHub Pages and if the URL contains a query parameter
    if (import.meta.env.PROD && location.search) {
      const path = location.search.slice(2); // Remove '?/'
      if (path) {
        navigate(path);
      }
    }
  }, [location, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? '/honey-web-hive-showcase' : '/'}>
        <GitHubPagesRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apiculture" element={<Apiculture />} />
          <Route path="/produits" element={<Produits />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
