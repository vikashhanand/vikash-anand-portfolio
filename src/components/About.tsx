import { GraduationCap, Code, Trophy, Heart } from 'lucide-react';

/**
 * About Section - Personal introduction and background
 * Features: Stats cards, timeline, interests showcase
 */
const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Pursuing B.Tech in Computer Science at Chandigarh University (2022-2026)",
    },
    {
      icon: Code,
      title: "Projects",
      description: "Built Online Book Store and Enhanced Professor's Dashboard with modern tech stack",
    },
    {
      icon: Trophy,
      title: "Certifications",
      description: "Blockchain certification from Metacrafters, IoT certification from SWAYAM",
    },
    {
      icon: Heart,
      title: "Interests",
      description: "Cricket enthusiast, tech explorer, and passionate problem solver",
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and fueled by code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate final year Computer Science student at Chandigarh University, 
              specializing in full stack development and data structures & algorithms. 
              My journey in tech has been marked by continuous learning and hands-on project development.
            </p>
            
            <p className="text-lg leading-relaxed">
              I've built comprehensive projects including an Online Book Store 
              and an Enhanced Professor's Dashboard, each teaching me valuable lessons about 
              software architecture, user experience, and problem-solving. Currently, I'm gaining 
              industry experience through my internship at Intel.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond coding, I've earned certifications in Blockchain technology from Metacrafters 
              and IoT from SWAYAM, expanding my understanding of emerging technologies. 
              When I'm not coding, you'll find me playing cricket or exploring the latest in tech.
            </p>

            <div className="pt-6">
              <p className="text-muted-foreground italic">
                "Building tomorrow's web, one line of code at a time."
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl shadow-elegant hover-lift border border-border/50 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;