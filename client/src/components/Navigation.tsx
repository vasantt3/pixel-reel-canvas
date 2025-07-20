import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-semibold tracking-tight">
            Portfolio
          </NavLink>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;