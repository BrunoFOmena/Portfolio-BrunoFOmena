import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Brain, GitBranch, BarChart3, Dna } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    icon: BarChart3,
    title: 'Transcriptomic Analysis Tool',
    description: 'Shiny app to facilitate the creation of figures and understanding of differentially expressed genes data. Uses outputs from Limma and DESeq2 for comprehensive transcriptomic analysis.',
    tags: ['R', 'Shiny', 'Bioinformatics'],
    link: 'https://github.com/BrunoFOmena/Ferramenta-de-An-lise-Transcript-mica',
  },
  {
    icon: GitBranch,
    title: 'Genomic Vigilance Pipeline',
    description: 'Automated Snakemake-based bioinformatics pipeline for identifying viral pathogens in clinical metagenomic samples. Processes NGS data through quality control, host DNA depletion, and de novo assembly to generate viral contigs.',
    tags: ['Snakemake', 'Python', 'Bioinformatics'],
    link: 'https://github.com/BrunoFOmena/Pipeline-Genomic-Vigilance---Snakemake',
  },
  {
    icon: Dna,
    title: 'Salmonella Transcriptomic Analysis',
    description: 'Automated Nextflow pipeline for transcriptomic analysis of Salmonella Typhimurium (wt vs. ∆yhdJ). Processes RNA-seq data to identify differentially expressed genes and understand bacterial gene regulation.',
    tags: ['Nextflow', 'RNA-seq', 'Bioinformatics'],
    link: 'https://github.com/BrunoFOmena/Salmonella-Typhimurium-wt-vs.-yhdJ---nextflow',
  },
  {
    icon: Brain,
    title: 'TCGA-GBM Gene Expression Analysis',
    description: 'Preprocessing pipeline for TCGA-GBM gene expression data. Downloads, normalizes, and filters RNA-seq data from glioblastoma samples, focusing on key genes (EGFR, TP53, IDH1, MGMT) for biomarker identification.',
    tags: ['R', 'TCGA', 'Bioinformatics'],
    link: 'https://github.com/BrunoFOmena/tcga-gbm-gene-expression-analysis',
  },
  {
    icon: Dna,
    title: 'ONCOGEN 2022 Course',
    description: 'Genomic analysis pipeline from ONCOGEN 2022 course on precision medicine bioinformatics. Includes sequence alignment, variant calling (SNPs and INDELs), and variant annotation using BWA, Samtools, bcftools, and SnpEff.',
    tags: ['BWA', 'Samtools', 'Bioinformatics'],
    link: 'https://github.com/BrunoFOmena/Curso_Oncogene',
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
            const cardContent = (
              <>
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
              </>
            );

            return project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-6 card-hover group cursor-pointer block"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover group cursor-pointer"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
