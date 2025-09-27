import { useParams } from 'react-router-dom';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();
  
  const articles = [
    {
      id: 1,
      title: "Breakthrough in Quantum Computing Research",
      content: "S.B.E.S. physicists have developed a new approach to quantum error correction that could revolutionize quantum computing applications. This groundbreaking research represents a significant step forward in making quantum computers more reliable and practical for real-world applications. The team, led by Dr. Sarah Chen, has been working on this project for over three years, focusing on developing novel error correction codes that can maintain quantum coherence for extended periods. The implications of this research extend beyond quantum computing to include quantum sensing, quantum communication, and fundamental physics research.",
      fullDescription: "The research team has successfully demonstrated a new quantum error correction protocol that reduces error rates by 99.5% compared to previous methods. This achievement brings us significantly closer to fault-tolerant quantum computers capable of solving complex problems in cryptography, drug discovery, and materials science. The protocol uses innovative topological protection mechanisms combined with machine learning algorithms to predict and correct quantum errors before they propagate through the system.",
      date: "September 23, 2025",
      category: "Research",
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "Dr. Sarah Chen",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Developing AI agents for autonomous laboratories",
      content: "S.B.E.S. physicists have developed an AI framework that allows physics laboratories to run and adapt experiments autonomously. This revolutionary system can design, execute, and analyze experiments without human intervention, dramatically accelerating the pace of scientific discovery.",
      fullDescription: "The autonomous laboratory system combines advanced machine learning algorithms with robotic automation to create a fully self-directed research environment. The AI can formulate hypotheses, design experimental protocols, operate laboratory equipment, collect data, and even interpret results. Initial trials have shown that the system can complete experiments 10 times faster than traditional methods while maintaining scientific rigor and reproducibility.",
      date: "September 22, 2025",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "Dr. Michael Rodriguez",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "New Particle Physics Discovery",
      content: "Researchers at S.B.E.S. have identified new patterns in particle interactions that could reshape our understanding of fundamental physics.",
      fullDescription: "The discovery involves previously unknown correlations between subatomic particles at high-energy collisions. Using advanced detection methods and analysis techniques, the research team has uncovered evidence that suggests new physics beyond the Standard Model. This finding could have profound implications for our understanding of the universe's fundamental structure and may point toward new particles or forces that have yet to be discovered.",
      date: "September 20, 2025",
      category: "Discovery",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "Prof. Amanda Johnson",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Sustainable Energy Research Initiative",
      content: "A new study from the Department of Physics offers breakthrough insights into more efficient solar energy conversion technologies.",
      fullDescription: "The research focuses on developing next-generation perovskite solar cells that achieve unprecedented efficiency rates while maintaining long-term stability. The team has discovered novel material compositions that can convert sunlight to electricity at over 30% efficiency, significantly higher than current commercial solar panels. This breakthrough could make solar energy more cost-effective and accelerate the global transition to renewable energy sources.",
      date: "September 18, 2025",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1558618066-fcd25c85cd64?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "Dr. James Wilson",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Student Research Excellence Award",
      content: "Graduate students from S.B.E.S. Physics Department receive international recognition for their groundbreaking research in theoretical physics.",
      fullDescription: "The award recognizes exceptional contributions to theoretical physics research by graduate students Maria Santos and David Kim. Their work on quantum field theory applications to cosmology has been praised by the international physics community. The research provides new insights into dark matter interactions and could help explain some of the universe's most mysterious phenomena.",
      date: "September 15, 2025",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "S.B.E.S. News Team",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Advanced Materials Science Collaboration",
      content: "The department announces a new partnership with leading international institutions to advance materials science research.",
      fullDescription: "This collaborative initiative brings together researchers from S.B.E.S., MIT, Oxford University, and the Max Planck Institute to explore novel materials with extraordinary properties. The partnership will focus on developing metamaterials, superconductors, and quantum materials that could revolutionize technology in fields ranging from computing to energy storage. The collaboration includes a shared research facility and exchange programs for students and faculty.",
      date: "September 12, 2025",
      category: "Collaboration",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&h=600&auto=format&fit=crop",
      author: "Prof. Lisa Chen",
      readTime: "9 min read"
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || '1'));

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl font-bold">Article not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                {article.title}
              </h1>
              <div className="flex items-center space-x-6 text-foreground/70 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg mb-12">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-foreground/80 mb-8">
                {article.content}
              </p>
              
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>{article.fullDescription}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Research Impact</h2>
                <p>
                  This research represents a significant advancement in our understanding and capability within the field. 
                  The implications extend beyond the immediate application, potentially influencing related areas of study 
                  and opening new avenues for investigation.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Future Directions</h2>
                <p>
                  The research team plans to continue developing this work, with future studies focusing on practical 
                  applications and scaling the technology for broader implementation. Collaboration with industry partners 
                  is also being explored to accelerate the translation of these findings into real-world solutions.
                </p>
                
                <div className="bg-secondary/20 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold mb-2">About the Author</h3>
                  <p className="text-foreground/80">
                    {article.author} is a leading researcher at S.B.E.S. College of Science, 
                    specializing in advanced physics research and innovation.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsArticle;