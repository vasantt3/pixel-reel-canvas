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
      
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left side - Let's talk */}
            <div>
              <h3 className="text-lg font-medium mb-2">Let's talk</h3>
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
            
            {/* Right side - Copyright and scroll to top */}
            <div className="flex flex-col md:items-end">
              <div className="text-sm text-muted-foreground mb-4">
                <p>Copyright © 2025 vasant</p>
                <p>All Rights Reserved</p>
                <p>Privacy Policy</p>
                <p>Termini e condizioni</p>
              </div>
              
              {/* Static scroll to top button in footer */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center hover:bg-primary transition-colors self-end"
              >
                <ArrowUp className="w-4 h-4 text-background" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;