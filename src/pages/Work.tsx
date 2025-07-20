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
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-smooth cursor-pointer shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-surface relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-surface to-surface-elevated flex items-center justify-center group-hover:scale-105 transition-video">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-smooth">
                      <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-primary border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-muted-foreground text-sm">Video Preview</p>
                  </div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
                    {project.duration}
                  </span>
                  <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
                    {project.year}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;