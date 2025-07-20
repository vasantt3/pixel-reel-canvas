import { useLocation, Link } from "wouter";
import { useEffect } from "react";

const NotFound = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Only log 404 for routes that aren't the main pages
    if (location !== "/" && location !== "/work" && location !== "/contact") {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location
      );
    }
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <Link href="/" className="text-primary hover:text-primary/80 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
