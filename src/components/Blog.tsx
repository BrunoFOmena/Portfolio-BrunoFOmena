import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    category: 'Tutorial',
    title: 'Getting Started with Single-Cell Analysis in Python',
    excerpt: 'A comprehensive guide to analyzing single-cell RNA-seq data using Scanpy and AnnData, from raw counts to publication-ready figures.',
    date: 'Dec 15, 2024',
  },
  {
    category: 'Research',
    title: 'The Future of Spatial Transcriptomics',
    excerpt: 'Exploring emerging technologies and computational methods that are revolutionizing our understanding of tissue architecture.',
    date: 'Nov 28, 2024',
  },
  {
    category: 'Opinion',
    title: 'Why Open Science Matters in Computational Biology',
    excerpt: 'Reflections on the importance of reproducibility, code sharing, and collaborative research in modern science.',
    date: 'Nov 10, 2024',
  },
  {
    category: 'Conference',
    title: 'Highlights from ISMB 2024',
    excerpt: 'Key takeaways and exciting developments from the International Conference on Intelligent Systems for Molecular Biology.',
    date: 'Oct 22, 2024',
  },
];

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="bg-secondary/30">
      <div
        ref={ref}
        className={`section-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Blog & Thoughts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
