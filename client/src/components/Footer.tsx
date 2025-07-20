import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show button when scrolled down more than half viewport height
      setShowScrollTop(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 z-50 shadow-lg hover:scale-110"
        >
          <ArrowUp className="w-5 h-5 text-background" />
        </button>
      )}
      
      <footer className="bg-background border-t border-border py-12 px-6 font-['Roboto',sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left side - Let's talk */}
            <div>
              <h3 className="text-lg font-medium mb-4">Let's talk</h3>
              <a 
                href="mailto:ivasant3005@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ivasant3005@gmail.com
              </a>
            </div>
            
            {/* Center - Follow me */}
            <div>
              <h3 className="text-lg font-medium mb-4">Follow me</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-background text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-background text-sm font-bold">@</span>
                </a>
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-background text-sm font-bold">ig</span>
                </a>
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-background text-sm font-bold">v</span>
                </a>
              </div>
            </div>
            
            {/* Right side - Copyright */}
            <div className="text-sm text-muted-foreground md:text-right space-y-1">
              <p>Copyright © 2025 vasant</p>
              <p>All Rights Reserved</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;