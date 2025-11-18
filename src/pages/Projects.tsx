import ProjectCard from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";
import { Code, Cpu } from "lucide-react";

const Projects = () => {
  const softwareProjects = [
    {
      title: "Food-Delivery-App",
      description: "Full-stack food ordering and delivery system built using Node.js, Express, Oracle Database, and HTML/CSS/JS.",
      tags: ["Node.js", "Express", "Oracle", "Full-Stack"],
      githubUrl: "https://github.com/fuadahmedudoy/Food-Delivery-App",
      liveUrl: ""
    },
    {
      title: "C Compiler Frontend",
      description: "Lexical and syntax analyzer for a C subset using Flex, Bison, and Assembly for compilation.",
      tags: ["C", "Flex", "Bison", "Assembly", "Compiler"],
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Spring-AI-with-Groq",
      description: "AI integration experiment using Spring Boot and Groq API with TypeScript backend.",
      tags: ["Spring Boot", "TypeScript", "AI", "Groq API"],
      githubUrl: "https://github.com/fuadahmedudoy/Spring-Ai-with-Groq",
      liveUrl: ""
    },
    {
      title: "Movie Management System",
      description: "JavaFX-based movie manager with multithreading and real-time communication features.",
      tags: ["Java", "JavaFX", "Multithreading"],
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Multiplayer Mortar Shooting Game",
      description: "2D shooting game built with C and IGraphics for dynamic gameplay and user interaction.",
      tags: ["C", "IGraphics", "Game Development"],
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Immortal-Drift (Fork)",
      description: "Explored Godot/GDScript game mechanics; added obstacle-collision and performance tweaks.",
      tags: ["Godot", "GDScript", "Open Source"],
      githubUrl: "https://github.com/fuadahmedudoy/Immortal-Drift",
      liveUrl: ""
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground">A collection of my software and hardware projects</p>
        </div>
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Code className="w-8 h-8 text-primary icon-glow" />
              Software Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-accent icon-glow" />
              Hardware Projects
            </h2>
          </div>
          <Card className="card-glow border-dashed border-2 border-muted-foreground/20">
            <div className="p-12 text-center">
              <Cpu className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Hardware projects coming soon...</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;
