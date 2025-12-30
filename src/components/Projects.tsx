import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Brain, GitBranch, BarChart3, Dna } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    icon: Dna,
    title: 'GenomicsKit',
    description: 'A comprehensive Python library for genomic data analysis with support for multiple file formats and parallel processing.',
    tags: ['Python', 'Bioinformatics'],
  },
  {
    icon: Brain,
    title: 'DeepCell Classifier',
    description: 'Deep learning model for automated cell type classification from single-cell RNA-seq data using transformer architecture.',
    tags: ['PyTorch', 'Machine Learning'],
  },
  {
    icon: Database,
    title: 'BioDataHub',
    description: 'Full-stack web application for managing and sharing biological datasets with real-time collaboration features.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: BarChart3,
    title: 'VisOmics',
    description: 'Interactive visualization dashboard for multi-omics data exploration with customizable plots and statistical analysis.',
    tags: ['D3.js', 'R Shiny'],
  },
  {
    icon: GitBranch,
    title: 'Pipeline Builder',
    description: 'Workflow management system for creating reproducible bioinformatics pipelines with containerization support.',
    tags: ['Nextflow', 'Docker'],
  },
  {
    icon: Code2,
    title: 'ProteinFold API',
    description: 'RESTful API service for protein structure prediction and molecular dynamics simulations in the cloud.',
    tags: ['FastAPI', 'AWS'],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Coding & Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
