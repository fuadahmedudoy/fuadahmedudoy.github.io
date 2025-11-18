import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Code, Trophy, Gamepad2 } from "lucide-react";

const Home = () => {
  const whatIDoItems = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "I'm a final-year Computer Science student at BUET, with a strong foundation in algorithms, compiler design, database systems, computer architecture, and software engineering.",
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "Development Projects", 
      description: "I build full-stack, mobile, and systems-level projects. Highlights include Flutter apps, Firebase integrations, Node.js backends, and tools like my Puffin Patrol app and C Compiler frontend.",
      color: "text-green-500"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "I enjoy solving algorithmic problems and participate in contests. Competitive programming helps keep my logic and thinking sharp.",
      color: "text-yellow-500"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Outside academics and coding, I enjoy gaming — especially multiplayer and strategy games. It helps me relax, think creatively, and stay inspired.",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 max-w-7xl mx-auto">
          <aside className="lg:sticky lg:top-24 h-fit">
            <Card className="overflow-hidden card-glow border-primary/20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/30 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                    <AvatarImage src="" alt="Fuad Ahmed Udoy" />
                    <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">FU</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold mb-1">Fuad Ahmed Udoy</h2>
                  <p className="text-sm text-muted-foreground">Computer Science Student</p>
                </div>
                <div className="space-y-4 border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">EMAIL</p>
                      <a href="mailto:fuadahmedudoy@gmail.com" className="text-sm hover:text-primary transition-colors break-all">
                        fuadahmedudoy@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">GITHUB</p>
                      <a href="https://github.com/fuadahmedudoy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                        fuadahmedudoy
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">LINKEDIN</p>
                      <a href="https://linkedin.com/in/fuad-ahmed-udoy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                        fuad-ahmed-udoy
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">PHONE</p>
                      <a href="tel:+8801725938281" className="text-sm hover:text-primary transition-colors">
                        +8801725938281
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 icon-glow" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">LOCATION</p>
                      <p className="text-sm">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          <main className="space-y-12">
            <section id="about">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Fuad Ahmed Udoy</span>
                </h1>
                <p className="text-xl text-muted-foreground">Computer Science Student at BUET</p>
              </div>
              <Card className="card-glow border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I am a final-year undergraduate student in Computer Science and Engineering at the 
                    Bangladesh University of Engineering and Technology (BUET). I am passionate about 
                    solving real-world challenges through innovative software solutions. My work includes 
                    full-stack web apps, mobile applications, game development, compilers, and academic 
                    research in machine learning and networking.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            {/* What I Do Section */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">⭐ What I Do</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  My areas of focus and interests
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {whatIDoItems.map((item, index) => (
                  <Card key={index} className="card-glow hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-secondary/50 flex-shrink-0">
                          <item.icon className={`w-6 h-6 ${item.color} icon-glow`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
