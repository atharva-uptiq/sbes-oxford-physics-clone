import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Breakthrough in Quantum Computing Research",
    excerpt: "S.B.E.S. physicists have developed a new approach to quantum error correction that could revolutionize quantum computing applications.",
    date: "September 23, 2025",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Research"
  },
  {
    id: 2,
    title: "Developing AI agents for autonomous laboratories",
    excerpt: "S.B.E.S. physicists have developed an AI framework that allows physics laboratories to run and adapt experiments autonomously.",
    date: "September 22, 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Innovation"
  },
  {
    id: 3,
    title: "New Particle Physics Discovery",
    excerpt: "Researchers at S.B.E.S. have identified new patterns in particle interactions that could reshape our understanding of fundamental physics.",
    date: "September 20, 2025",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Discovery"
  },
  {
    id: 4,
    title: "Sustainable Energy Research Initiative",
    excerpt: "A new study from the Department of Physics offers breakthrough insights into more efficient solar energy conversion technologies.",
    date: "September 18, 2025",
    image: "https://images.unsplash.com/photo-1558618066-fcd25c85cd64?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "Student Research Excellence Award",
    excerpt: "Graduate students from S.B.E.S. Physics Department receive international recognition for their groundbreaking research in theoretical physics.",
    date: "September 15, 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Awards"
  },
  {
    id: 6,
    title: "Advanced Materials Science Collaboration",
    excerpt: "The department announces a new partnership with leading international institutions to advance materials science research.",
    date: "September 12, 2025",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=870&h=490&auto=format&fit=crop",
    category: "Collaboration"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">
          Latest news and comment
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className="physics-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center text-sm text-foreground/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            See all news and commentary
          </Button>
        </div>
      </div>
    </section>
  );
};