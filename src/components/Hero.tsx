import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

/**
 * Hero Section - Main landing section with introduction and CTAs
 * Features: Animated text, gradient overlays, social links, scroll indicator
 */
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/vikashhanand', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vikashhanand', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/vikashhanand', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vikashhanand@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+917903221054', label: 'Phone' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-width">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="fade-in text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-muted-foreground">
              Vikash Anand
            </span>
          </h1>

          {/* Tagline */}
          <p className="fade-in fade-in-delay-1 text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            3rd-year Computer Science student • Frontend & DSA enthusiast
          </p>

          {/* Description */}
          <p className="fade-in fade-in-delay-2 text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences and solving complex problems through code.
            Currently expanding my expertise in modern web technologies and data structures.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium shadow-elegant hover-lift"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium hover-lift"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in fade-in-delay-3 flex justify-center space-x-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/50 hover:bg-accent text-muted-foreground hover:text-foreground transition-smooth hover-lift"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="fade-in fade-in-delay-3 inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-smooth group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-smooth" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;