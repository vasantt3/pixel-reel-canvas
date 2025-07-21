import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Work = () => {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: "Brand Campaign 2024",
      description: "A cinematic journey exploring modern luxury",
      category: "Commercial",
      duration: "2:30",
      year: "2024"
    },
    {
      id: 2,
      title: "Documentary Series",
      description: "Intimate portraits of urban creativity",
      category: "Documentary",
      duration: "15:45",
      year: "2024"
    },
    {
      id: 3,
      title: "Music Video",
      description: "Experimental visuals for emerging artist",
      category: "Music Video",
      duration: "3:45",
      year: "2023"
    },
    {
      id: 4,
      title: "Short Film",
      description: "Award-winning narrative piece",
      category: "Narrative",
      duration: "12:20",
      year: "2023"
    },
    {
      id: 5,
      title: "Product Launch",
      description: "High-end product visualization",
      category: "Commercial",
      duration: "1:20",
      year: "2023"
    },
    {
      id: 6,
      title: "Fashion Film",
      description: "Ethereal fashion narrative",
      category: "Fashion",
      duration: "4:15",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 font-['Roboto',sans-serif]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of projects spanning commercial, narrative, and experimental work.
          </p>
        </div>
        
        {/* Projects Grid - Federico Piccirillo Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[200px]">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer animate-scale-in ${
                // Mobile: all items take full width
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 ' +
                // Large screens: Federico Piccirillo style layout
                (index === 0 ? 'lg:col-span-2 lg:row-span-2' :
                index === 1 ? 'lg:col-span-4 lg:row-span-2' :
                index === 2 ? 'lg:col-span-2 lg:row-span-1' :
                index === 3 ? 'lg:col-span-2 lg:row-span-2' :
                index === 4 ? 'lg:col-span-2 lg:row-span-1' :
                'lg:col-span-2 lg:row-span-2')
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Main Image/Video Area */}
              <div className="relative w-full h-full overflow-hidden" style={{ aspectRatio: 'auto' }}>
                <div className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 ${
                  index === 0 ? 'bg-gradient-to-br from-orange-400 to-pink-500' :
                  index === 1 ? 'bg-gradient-to-br from-blue-400 to-cyan-500' :
                  index === 2 ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                  index === 3 ? 'bg-gradient-to-br from-green-400 to-blue-500' :
                  index === 4 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-pink-400 to-red-500'
                }`} style={{ minHeight: '100%', objectFit: 'cover' }}>
                </div>
                
                {/* Hover Overlay - Federico Style */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/80">
                      <span className="text-sm uppercase tracking-wider font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Work;