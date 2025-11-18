import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiC,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiSpringboot,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiLatex
} from "react-icons/si";
import { Coffee } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
        { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
        { name: "Java", icon: Coffee, color: "text-[#007396]" },
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
        { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "Oracle", icon: SiOracle, color: "text-[#F80000]" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-foreground" },
        { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
        { name: "LaTeX", icon: SiLatex, color: "text-[#008080]" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map(({ category, skills }) => (
            <Card key={category} className="card-glow">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-primary icon-glow" />
                    <span className="text-primary">{category}</span>
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 group border border-border/50 hover:border-primary/30">
                        <Icon className={`w-12 h-12 ${skill.color} group-hover:icon-glow transition-all`} />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;