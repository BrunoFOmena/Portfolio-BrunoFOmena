import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl">
            "Nothing in life should be feared, only understood. Now is the time to understand more so that we fear less."
            <span className="block text-sm mt-2 not-italic text-primary">— Marie Curie</span>
          </blockquote>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BrunoFOmena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-feliciano-48441a289/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="http://lattes.cnpq.br/0056633694483546"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Lattes"
            >
              <BookOpen className="w-5 h-5" />
            </a>
            <a
              href="mailto:brunofelicianodeomena@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bruno Feliciano de Omena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
