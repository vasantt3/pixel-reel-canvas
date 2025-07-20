import { Card } from "@/components/ui/card";

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
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of projects spanning commercial, narrative, and experimental work.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden bg-white border-0 hover:shadow-xl transition-smooth cursor-pointer animate-scale-in rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' :
                index === 1 ? 'col-span-4 row-span-2' :
                index === 2 ? 'col-span-2 row-span-1' :
                index === 3 ? 'col-span-2 row-span-2' :
                index === 4 ? 'col-span-2 row-span-1' :
                'col-span-2 row-span-2'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Placeholder */}
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <div className={`w-full h-full group-hover:scale-105 transition-video ${
                  index === 0 ? 'bg-gradient-to-br from-orange-400 to-pink-500' :
                  index === 1 ? 'bg-gradient-to-br from-blue-400 to-cyan-500' :
                  index === 2 ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                  index === 3 ? 'bg-gradient-to-br from-green-400 to-blue-500' :
                  index === 4 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-pink-400 to-red-500'
                }`}>
                </div>
                
                {/* Content Overlay - Shows on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Info */}
                  <div className="flex justify-end space-x-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.duration}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.year}
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Bottom Project Info */}
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                      index === 0 ? 'text-orange-300' :
                      index === 1 ? 'text-blue-300' :
                      index === 2 ? 'text-purple-300' :
                      index === 3 ? 'text-green-300' :
                      index === 4 ? 'text-yellow-300' :
                      'text-pink-300'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;