
import { Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with cart functionality, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, user assignments, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather forecasting application with location search, live updates, and interactive data visualizations.",
      technologies: ["React", "Redux", "Chart.js", "OpenWeather API"],
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile-responsive fitness tracking application that allows users to log workouts, set goals, and visualize progress.",
      technologies: ["React Native", "Firebase", "Expo", "Victory Charts"],
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-section-pattern">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <Folder className="text-portfolio-purple" size={28} />
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="project-card overflow-hidden border-0 rounded-xl bg-transparent h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-portfolio-darkblue/70 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6 glass-card rounded-b-xl">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100/80 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:shadow-md"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
