import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import publicationImage from '@/assets/images.png';

interface Publication {
  image: string;
  title: string;
  journal: string;
  year: string;
}

const publications: Publication[] = [
  {
    image: publicationImage,
    title: 'Artritis Reumatoide Asociada con Síntomas de Ansiedad y Depresión',
    journal: 'International Journal of Health Sciences',
    year: '2025',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {publications.map((pub, index) => (
            <a
              key={index}
              href="http://dx.doi.org/10.31692/2764-3433.v5i1.303"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-md card-hover max-w-xs"
            >
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
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
