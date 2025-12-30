import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import pub1 from '@/assets/pub-1.png';
import pub2 from '@/assets/pub-2.png';
import pub3 from '@/assets/pub-3.png';
import pub4 from '@/assets/pub-4.png';

interface Publication {
  image: string;
  title: string;
  journal: string;
  year: string;
}

const publications: Publication[] = [
  {
    image: pub1,
    title: 'Deep Learning for Single-Cell RNA Sequencing Analysis',
    journal: 'Nature Methods',
    year: '2023',
  },
  {
    image: pub2,
    title: 'Spatial Transcriptomics Reveals Tumor Microenvironment',
    journal: 'Cell',
    year: '2022',
  },
  {
    image: pub3,
    title: 'Protein Structure Prediction Using Transformer Models',
    journal: 'Science',
    year: '2022',
  },
  {
    image: pub4,
    title: 'Machine Learning in Genomics: A Comprehensive Review',
    journal: 'Nature Reviews Genetics',
    year: '2021',
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="publications" className="bg-secondary/30">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Publications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-md card-hover"
            >
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-primary-foreground/80 mb-1">
                  {pub.journal} · {pub.year}
                </span>
                <h3 className="text-sm font-semibold text-primary-foreground leading-tight">
                  {pub.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
