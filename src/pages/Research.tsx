import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchAreas = [
    {
      title: "Quantum Computing",
      description: "Advancing the frontiers of quantum information processing and quantum algorithms",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "Theoretical Physics",
      description: "Exploring fundamental questions about the nature of reality through mathematical models",
      image: "https://images.unsplash.com/photo-1446776887654-d8b5e9b6b1b1?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "Condensed Matter Physics",
      description: "Investigating the properties of materials and their potential applications",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "Particle Physics",
      description: "Studying the fundamental building blocks of matter and their interactions",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "Astrophysics",
      description: "Understanding the cosmos through observation and theoretical modeling",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "Applied Physics",
      description: "Developing practical applications for physics principles in technology and industry",
      image: "https://images.unsplash.com/photo-1558618066-fcd25c85cd64?q=80&w=600&h=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
                Research
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our research spans the full spectrum of physics, from fundamental theoretical questions 
                to cutting-edge applications that will shape the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
              Research Areas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className="physics-card group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6">
                    {area.description}
                  </p>
                  
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;