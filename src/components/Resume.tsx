import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap } from 'lucide-react';

interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineData: TimelineEntry[] = [
  {
    period: 'Sep 2025 - Present',
    title: 'PIBIC-CNPq Scholar | Transcriptomic Analysis, Depression and Suicide',
    organization: 'NUPIT - Federal University of Pernambuco',
    description: 'Analysis of transcriptomic profiles (RNA-seq) with R and Python, identifying differential expression patterns associated with MDD and suicidal behavior. Implementation of bioinformatics pipelines for data processing and quality control.',
    type: 'experience',
  },
  {
    period: 'Apr 2025 - Aug 2025',
    title: 'SaaS Solution Developer (Argos Project)',
    organization: 'Federal University of Pernambuco',
    description: 'Development of a SaaS solution "Argos" for electorate analysis, using AI to generate strategic insights. Implementation of hyperlocal web scraping and News API integration to process news and identify regional debate topics.',
    type: 'experience',
  },
  {
    period: 'Sep 2024 - Sep 2025',
    title: 'PIBIC-CNPq Scholar | Galectin-1 and Neuromodulation',
    organization: 'NUPIT - Federal University of Pernambuco',
    description: 'Investigation of neural modulation by Galectin-1 in in vitro models, processing oxidative stress data in neuroblastoma cells. Development of pipelines for proteomics data analysis and docking simulations, identifying potential protein-protein interactions.',
    type: 'experience',
  },
  {
    period: 'Sep 2022 - Sep 2023',
    title: 'PIBIT-CNPq Scholar | Lipid Nanoparticles',
    organization: 'iLIKA - Federal University of Pernambuco',
    description: 'Optimization of a protocol for characterization of liposomes (MLVs), validating the methodology with Zetasizer and UV-Vis spectrophotometry. Application of statistical analyses to interpret physicochemical data, ensuring robustness and reproducibility of results.',
    type: 'experience',
  },
  {
    period: '2022 - 2026',
    title: 'B.Sc. in Biomedicine',
    organization: 'Federal University of Pernambuco (UFPE)',
    description: 'Undergraduate student in Biomedicine with focus on bioinformatics and genomic data analysis.',
    type: 'education',
  },
];

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Resume</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineData.map((entry, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
                    {entry.period}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {entry.organization}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
