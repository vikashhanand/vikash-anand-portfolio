import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Experience & Education Section - Academic background, internships and certifications
 * Features: Timeline layout, certification badges, achievement highlights
 */
const Experience = () => {
  const experiences = [
    {
      company: "Intel",
      role: "Software Development Intern",
      period: "May 2025 - June 2025",
      location: "India",
      description: "Gaining hands-on experience in software development, working on cutting-edge technologies and contributing to real-world projects in a global tech environment.",
      highlights: ["Software Development", "Team Collaboration", "Industry Best Practices", "Technical Innovation"],
      status: "Upcoming",
      type: "internship"
    }
  ];

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Technology - Computer Science Engineering (Final Year)",
      period: "2022 - 2026",
      location: "Punjab, India",
      description: "Pursuing comprehensive computer science education with focus on full stack development, data structures, algorithms, and emerging technologies. Currently in final year with strong academic performance.",
      highlights: ["Full Stack Development", "Data Structures & Algorithms", "Software Engineering", "Database Management"],
      status: "Current"
    }
  ];

  const certifications = [
    {
      title: "Blockchain Fundamentals",
      issuer: "Metacrafters",
      date: "2024",
      description: "Comprehensive blockchain technology certification covering smart contracts, DeFi, and Web3 development.",
      skills: ["Blockchain", "Smart Contracts", "Solidity", "Web3"],
      credentialUrl: "#"
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "SWAYAM",
      date: "2024",
      description: "IoT certification covering device connectivity, sensor networks, and embedded systems programming.",
      skills: ["IoT", "Embedded Systems", "Sensor Networks", "Arduino"],
      credentialUrl: "#"
    }
  ];

  const achievements = [
    "Secured internship opportunity at Intel for software development role",
    "Completed multiple full-stack projects demonstrating end-to-end development skills",
    "Earned industry-recognized certifications in emerging technologies",
    "Developing expertise in both frontend and backend technologies with algorithmic problem solving",
    "Active participation in coding communities and continuous learning initiatives"
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through academic excellence and industry experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="card-gradient shadow-elegant border-border/50 hover-lift mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant={exp.status === 'Upcoming' ? 'default' : 'secondary'}>
                      {exp.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Education Section */}
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 mt-12">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient shadow-elegant border-border/50 hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-gradient shadow-elegant border-border/50 hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                        <CardDescription className="font-medium text-foreground">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
          <div className="card-gradient p-8 rounded-xl shadow-elegant border border-border/50 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;