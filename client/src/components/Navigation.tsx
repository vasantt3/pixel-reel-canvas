import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const Navigation = () => {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Portfolio
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location === "/work" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-smooth hover:text-primary",
                location === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;