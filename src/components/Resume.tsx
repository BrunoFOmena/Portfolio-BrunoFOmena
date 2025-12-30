import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineData: TimelineEntry[] = [
  {
    period: '2020 - Present',
    title: 'Senior Bioinformatics Scientist',
    organization: 'Genomics Research Institute',
    description: 'Leading computational genomics projects and developing machine learning pipelines for multi-omics data analysis.',
    type: 'experience',
  },
  {
    period: '2018 - 2020',
    title: 'Postdoctoral Researcher',
    organization: 'University of Science',
    description: 'Developed novel single-cell analysis methods and published findings in high-impact journals.',
    type: 'experience',
  },
  {
    period: '2014 - 2018',
    title: 'Ph.D. in Computational Biology',
    organization: 'Institute of Technology',
    description: 'Thesis: "Deep Learning Approaches for Genomic Sequence Analysis". Graduated with distinction.',
    type: 'education',
  },
  {
    period: '2010 - 2014',
    title: 'B.Sc. in Bioinformatics',
    organization: 'University of Applied Sciences',
    description: 'Graduated summa cum laude with focus on molecular biology and computer science.',
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
                  {entry.type === 'education' ? (
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  )}
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
