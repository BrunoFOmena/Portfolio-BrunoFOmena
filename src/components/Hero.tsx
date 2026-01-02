import { Github, Linkedin, BookOpen } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import heroIllustration from '@/assets/hero-illustration.png';

const phrases = [
  "I'm an Aspiring Bioinformatician",
  "I'm a Student",
  "I'm a Researcher",
  "I'm a Dreamer"
];

const Hero = () => {
  const typedText = useTypewriter(phrases, 80, 40, 2000);

  return (
    <section className="flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left side - Text content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Bruno Feliciano de Omena
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
            <span className="typewriter-cursor">{typedText}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BrunoFOmena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-feliciano-48441a289/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="http://lattes.cnpq.br/0056633694483546"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Lattes"
            >
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={heroIllustration}
            alt="Scientist working at computer with data visualizations"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
