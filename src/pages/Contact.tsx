import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-card border-border shadow-card">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-surface border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    type="text"
                    placeholder="Commercial, Music Video, Documentary, etc."
                    className="bg-surface border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project..."
                    className="bg-surface border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-6 bg-card border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>hello@portfolio.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </Card>
              
              {/* Social Links */}
              <Card className="p-6 bg-card border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
              
              {/* Availability */}
              <Card className="p-6 bg-card border-border shadow-card">
                <h3 className="text-xl font-semibold mb-2">Availability</h3>
                <p className="text-muted-foreground mb-4">
                  Currently accepting new projects for Q2 2024
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for new work</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;