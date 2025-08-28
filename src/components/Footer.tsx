import { Heart, Linkedin, Github, Twitter, Mail } from 'lucide-react';

/**
 * Footer Component - Site footer with social links and copyright
 * Features: Social media links, copyright notice, subtle animations
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/vikashhanand', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vikashhanand', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/vikashhanand', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vikashhanand@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-foreground hover:text-primary transition-smooth"
              >
                Vikash Anand
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Frontend Developer & Computer Science Student passionate about creating 
                innovative solutions and beautiful user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/50 hover:bg-accent text-muted-foreground hover:text-foreground transition-smooth hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2">
                <a
                  href="mailto:vikashhanand@gmail.com"
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  vikashhanand@gmail.com
                </a>
                <a
                  href="tel:+917903221054"
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  +91 7903221054
                </a>
                <p className="text-muted-foreground">Punjab, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Vikash Anand. All rights reserved.
            </p>
            
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;