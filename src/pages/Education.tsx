import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, GraduationCap, Trophy, FileText, Briefcase } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      title: "Technical Scholarship",
      description: "Merit-based scholarship for outstanding academic performance throughout bachelor's degree.",
      icon: Award
    },
    {
      title: "Dean's List Honors",
      description: "Recognized multiple times on Dean's List for exceptional academic achievements.",
      icon: Trophy
    }
  ];

  const research = [
    {
      title: "🧬 CRISPR/Cas9 Guide-RNA Design Research",
      status: "In Progress",
      description: "Developing a reference-free approach for CRISPR guide RNA design using k-mer analysis.",
      topics: ["Computational Biology", "Bioinformatics", "Machine Learning"]
    }
  ];

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
      ]
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
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            My academic journey, research, and professional experience
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary icon-glow" />
              Education
            </h2>
          </div>
          
          <Card className="card-glow border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary icon-glow" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">B.Sc. in Computer Science and Engineering</h2>
                  <p className="text-primary font-medium text-lg mb-3">
                    Bangladesh University of Engineering and Technology (BUET)
                  </p>
                  <div className="flex flex-wrap gap-2 items-center mb-4">
                    <Badge variant="secondary" className="text-sm">
                      Expected Graduation: March 2025
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing a comprehensive degree in Computer Science and Engineering with focus on 
                    software development, algorithms, machine learning, and networking. Gaining hands-on 
                    experience through various academic projects and research initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary icon-glow" />
              Academic Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-glow border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-accent icon-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary icon-glow" />
              Research Activities
            </h2>
            <p className="text-muted-foreground">
              Current research initiatives and academic exploration
            </p>
          </div>

          <div className="space-y-6">
            {research.map((item, index) => (
              <Card key={index} className="card-glow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary icon-glow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          {item.status}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <Badge key={topic} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary icon-glow" />
              Professional Experience
            </h2>
            <p className="text-muted-foreground">
              Professional projects and development work
            </p>
          </div>

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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
