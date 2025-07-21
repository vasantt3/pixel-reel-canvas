import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background font-['Roboto',sans-serif]">
      <div className="min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16 contact-header">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              <span className="text-foreground">Love motion, design, and</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">creative experiments?</span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-medium mt-2 block">
                Let's discuss something meaningful.
              </span>
            </h1>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 contact-options">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">General Inquiries</h3>
                  <p className="text-muted-foreground">ivasant3005@gmail.com</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-0 min-h-[700px] contact-form">
            {/* Left side - Form */}
            <div className="bg-gray-100 p-8 lg:p-16 flex flex-col justify-center">
              <div className="max-w-lg w-full font-['Roboto',sans-serif]">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Let's Chat!</h2>
                <p className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed">
                  We'd love to hear from you! Fill out the form below or connect with us through any of our contact options.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-3 font-['Roboto',sans-serif]">
                        First name
                      </label>
                      <Input
                        placeholder="First name"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 text-base px-4"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-3">
                        Last name
                      </label>
                      <Input
                        placeholder="Last name"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 text-base px-4"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-3">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 text-base px-4"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-3">
                      Message
                    </label>
                    <Textarea
                      placeholder="Leave a message..."
                      rows={6}
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 resize-none text-base p-4"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-medium"
                    >
                      Send Message →
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right side - Gradient */}
            <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 flex items-end justify-end p-8 lg:p-16">
              <div className="text-white text-right font-['Roboto',sans-serif]">
                <div className="text-sm lg:text-base opacity-80 mb-2">Eindhoven</div>
                <div className="text-3xl lg:text-4xl font-light">20:01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;