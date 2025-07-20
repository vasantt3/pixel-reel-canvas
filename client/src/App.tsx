import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router } from "wouter";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Router>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
