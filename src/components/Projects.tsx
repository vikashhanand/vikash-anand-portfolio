import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye, Code, Database, Globe } from 'lucide-react';

/**
 * Projects Section - Showcase of key projects and work
 * Features: Project cards, modal details, tech stack badges, links
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Online Book Store",
      description: "E-commerce platform for books with user management, shopping cart, and order processing capabilities.",
      longDescription: "A complete e-commerce solution for book sales featuring user registration, book catalog browsing, shopping cart functionality, and order management. Built with modern web technologies and responsive design principles.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS"],
      githubUrl: "https://github.com/vikashhanand/bookstore",
      liveUrl: "#",
      featured: true,
      icon: Globe,
      codeSnippet: `
// Shopping cart management with backend integration
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    async addItem(book, quantity = 1) {
        const existingItem = this.items.find(item => item.id === book.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...book, quantity });
        }
        await this.syncWithBackend();
        this.saveCart();
    }
    
    async syncWithBackend() {
        try {
            await fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.items)
            });
        } catch (error) {
            console.error('Failed to sync cart:', error);
        }
    }
}`
    },
    {
      id: 2,
      title: "Enhanced Professor's Dashboard",
      description: "Academic management dashboard with course tracking, student progress monitoring, and analytics.",
      longDescription: "An intuitive dashboard for academic staff to manage courses, track student progress, handle assignments, and generate reports. Features data visualization, scheduling tools, and communication interfaces.",
      technologies: ["React", "JavaScript", "Chart.js", "CSS Grid", "API Integration"],
      githubUrl: "https://github.com/vikashhanand/professor-dashboard",
      liveUrl: "#",
      featured: false,
      icon: Code,
      codeSnippet: `
// Student progress tracking component
const ProgressTracker = ({ students, assignments }) => {
    const calculateProgress = (student) => {
        const completed = assignments.filter(
            assignment => student.submissions.includes(assignment.id)
        );
        return (completed.length / assignments.length) * 100;
    };
    
    return (
        <div className="progress-grid">
            {students.map(student => (
                <ProgressCard 
                    key={student.id} 
                    student={student}
                    progress={calculateProgress(student)}
                />
            ))}
        </div>
    );
};`
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-gradient shadow-elegant hover-lift border-border/50 group ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Dialog open={selectedProject === project.id} onOpenChange={(open) => setSelectedProject(open ? project.id : null)}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center gap-3">
                          <project.icon className="h-6 w-6 text-primary" />
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Code Snippet */}
                        <div>
                          <h4 className="font-semibold mb-3">Code Snippet</h4>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm border">
                            <code>{project.codeSnippet}</code>
                          </pre>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          <Button asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              View on GitHub
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button size="lg" variant="outline" asChild className="hover-lift">
            <a
              href="https://github.com/vikashhanand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;