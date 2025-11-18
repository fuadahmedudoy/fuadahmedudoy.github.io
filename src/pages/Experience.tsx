import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      title: "Puffin Patrol – Volunteer Mobile App",
      role: "Full-Stack Mobile Developer",
      period: "2024",
      tech: ["Flutter", "Firebase", "Google Maps", "Hive", "Dart"],
      description: "A comprehensive Flutter application designed for wildlife conservation volunteers to manage patrols, report incidents, and collaborate in real-time.",
      highlights: [
        "Offline-first architecture with Hive + Firebase for seamless data sync",
        "Incident reporting with GPS, photos, and species identification",
        "Google Maps integration with GeoJSON patrol zones",
        "Real-time team coordination and push notifications",
        "Advanced analytics with charts, reports, and statistics",
        "HQ web dashboard for administration and monitoring"
      ],
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "WordPress Website Development",
      role: "Web Developer",
      period: "2024",
      tech: ["WordPress", "Web Design", "Custom Features", "UI/UX"],
      description: "Professional website developed for Cecil with responsive design, custom features, and modern UI/UX implementation.",
      highlights: [
        "Custom WordPress theme development",
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Client-focused feature integration",
        "Performance optimization"
      ],
      githubUrl: "",
      liveUrl: ""
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            My professional projects and development work
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glow hover:scale-[1.01] transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-primary icon-glow" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <p className="text-primary font-medium">{exp.role}</p>
                        <span className="text-muted-foreground">•</span>
                        <Badge variant="outline" className="border-primary/50">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Key Highlights:</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 flex-shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    {(exp.githubUrl || exp.liveUrl) && (
                      <div className="flex gap-3 pt-2">
                        {exp.githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {exp.liveUrl && (
                          <Button asChild size="sm" className="gradient-bg">
                            <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
