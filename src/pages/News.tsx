import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      title: "Breakthrough in Quantum Computing Research",
      excerpt: "Our researchers have achieved a significant milestone in quantum error correction, bringing us closer to practical quantum computers.",
      date: "September 20, 2024",
      category: "Research",
      image: "/api/placeholder/400/250"
    },
    {
      title: "New Faculty Member Joins Astrophysics Division",
      excerpt: "Dr. Emily Rodriguez brings expertise in dark matter research and cosmic ray detection to our growing astrophysics team.",
      date: "September 15, 2024",
      category: "Faculty",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Student Team Wins National Physics Competition",
      excerpt: "Our undergraduate team secured first place in the National Physics Olympiad with their innovative approach to laser interferometry.",
      date: "September 10, 2024",
      category: "Students",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Department Receives Major Research Grant",
      excerpt: "A ₹2.5 crore grant will fund groundbreaking research into renewable energy applications using advanced materials.",
      date: "September 5, 2024",
      category: "Funding",
      image: "/api/placeholder/400/250"
    },
    {
      title: "International Collaboration on Particle Physics",
      excerpt: "Our department has joined the global effort to understand fundamental particles through the Large Hadron Collider experiments.",
      date: "August 30, 2024",
      category: "Research",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Public Lecture Series Begins",
      excerpt: "Join us for monthly public lectures exploring the wonders of physics, from black holes to quantum mechanics.",
      date: "August 25, 2024",
      category: "Events",
      image: "/api/placeholder/400/250"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research': return 'bg-blue-100 text-blue-800';
      case 'Faculty': return 'bg-green-100 text-green-800';
      case 'Students': return 'bg-purple-100 text-purple-800';
      case 'Funding': return 'bg-yellow-100 text-yellow-800';
      case 'Events': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Commentary</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Stay updated with the latest developments, research breakthroughs, and achievements from our department.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Featured news" 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className={getCategoryColor('Research')}>Featured</Badge>
                    <h2 className="text-3xl font-bold mt-4 mb-4">
                      Breakthrough in Quantum Computing Research
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Our researchers have achieved a significant milestone in quantum error correction, 
                      bringing us closer to practical quantum computers that could revolutionize computing, 
                      cryptography, and scientific simulation.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      September 20, 2024
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* News Grid */}
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.slice(1).map((article, index) => (
                <Card key={index} className="hover-scale overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest news and updates from the Department of Physics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;