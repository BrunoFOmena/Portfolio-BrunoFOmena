import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'alzheimer-cnn-neuroimaging',
    category: 'Conference',
    title: 'Integration of Convolutional Neural Networks and Neuroimaging in Early Diagnosis of Alzheimer\'s Disease',
    excerpt: 'Systematic review on the use of CNNs in neuroimaging analysis (MRI and PET) for early diagnosis of Alzheimer\'s Disease, following PRISMA guidelines.',
    date: '2024',
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
        <h2 className="section-title">Thoughts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/thoughts/${post.id}`}
              className="bg-card border border-border rounded-xl p-6 card-hover group block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
