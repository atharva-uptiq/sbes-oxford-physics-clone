import { Header } from '@/components/Layout/Header';
import { Hero } from '@/components/Layout/Hero';
import { FeaturedSection } from '@/components/Sections/FeaturedSection';
import { NewsSection } from '@/components/Sections/NewsSection';
import { EventsSection } from '@/components/Sections/EventsSection';
import { Footer } from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
        <NewsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
