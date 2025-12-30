import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profilePhoto from '@/assets/profile-photo.png';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-secondary/30">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left side - Biography */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              I am a computational biologist and software developer with a passion for 
              leveraging data science to solve complex biological problems. With expertise 
              in genomics, machine learning, and full-stack development, I bridge the gap 
              between wet lab research and computational analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My research focuses on developing novel algorithms for analyzing high-throughput 
              sequencing data, particularly in the areas of single-cell RNA sequencing and 
              spatial transcriptomics. I am committed to open science and reproducible research, 
              contributing to several open-source bioinformatics tools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or analyzing data, you'll find me mentoring aspiring 
              scientists, writing about computational biology, or exploring the latest 
              developments in AI and biotechnology.
            </p>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/20">
              <img
                src={profilePhoto}
                alt="Professional profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
