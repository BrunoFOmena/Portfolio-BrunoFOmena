import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profilePhoto from '@/assets/IMG-20250218-WA0041.jpg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-secondary/30">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left side - Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/20">
              <img
                src={profilePhoto}
                alt="Professional profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Biography */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              I am an undergraduate student in Biomedicine at the Federal University of 
              Pernambuco (UFPE) and a bioinformatician focused on genomic and transcriptomic 
              data analysis (RNA-seq). I have consolidated experience in scientific and 
              technological research, having worked as a Scientific Initiation scholarship holder 
              (PIBIC) at NUPIT and as a Technological Innovation scholarship holder (PIBIT) at LIKA.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In projects, I work on developing bioinformatics pipelines in Python and R for 
              transcriptomic profile analysis and proteomics data, investigating neurobiological 
              processes. I also have experience in nanotechnology, optimizing protocols for 
              characterization of lipid nanoparticles. In the development area, I received an 
              award from the Center for Informatics (CIn) at UFPE for the Argos project, a 
              SaaS solution with Artificial Intelligence application.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have competencies in tools such as Nextflow and Snakemake, and hold the official 
              Oracle Cloud Infrastructure (OCI) Foundations Associate certification. I am 
              committed to open science and reproducible research, contributing to the advancement 
              of knowledge in bioinformatics and biotechnology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
