import { Code, Database, Globe, Smartphone, GitBranch, Blocks } from 'lucide-react';

/**
 * Skills Section - Technical skills and expertise areas
 * Features: Categorized skill chips, proficiency indicators, icons
 */
const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript"],
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Data Structures & Algorithms",
      skills: ["DSA", "Problem Solving", "Competitive Programming"],
      color: "text-purple-500"
    },
    {
      icon: GitBranch,
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "VS Code", "Postman"],
      color: "text-orange-500"
    },
    {
      icon: Blocks,
      title: "Emerging Technologies",
      skills: ["Blockchain", "IoT", "Smart Contracts"],
      color: "text-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Critical Thinking"],
      color: "text-pink-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern development challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-xl shadow-elegant hover-lift border border-border/50 group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-accent group-hover:scale-110 transition-smooth`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full border border-border/30 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="card-gradient p-8 rounded-xl shadow-elegant border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Technical Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code that solves real-world problems. 
              My approach combines strong fundamentals in computer science with modern web development practices, 
              ensuring both technical excellence and user-centered design. Continuous learning and staying 
              updated with emerging technologies drive my growth as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;