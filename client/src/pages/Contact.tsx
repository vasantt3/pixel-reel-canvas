import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                CONTACT
              </Button>
              <Button variant="ghost" size="sm">
                MENU
              </Button>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">General Inquiries</h3>
                  <p className="text-muted-foreground">contact@portfolio.co</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Social</h3>
                  <div className="flex space-x-2 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary">Instagram</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">LinkedIn</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">Behance</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">Twitter</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">BlueSky</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">TikTok</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary">Reddit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Left side - Form */}
            <div className="bg-gray-100 p-12 flex flex-col justify-center">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Chat!</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you! Fill out the form below or connect with us through any of our contact options.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <Input
                        placeholder="First name"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <Input
                        placeholder="Last name"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      placeholder="Leave a message..."
                      rows={6}
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded"
                  >
                    Send Message →
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Right side - Gradient */}
            <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 flex items-end justify-end p-12">
              <div className="text-white text-right">
                <div className="text-sm opacity-80 mb-2">Eindhoven</div>
                <div className="text-4xl font-light">20:01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;