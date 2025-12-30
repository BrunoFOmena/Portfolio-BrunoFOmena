import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Publications />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
};

export default Index;
