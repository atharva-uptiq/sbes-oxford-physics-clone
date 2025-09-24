import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const Study = () => {
  const programs = [
    {
      title: "Bachelor of Science in Physics",
      duration: "4 years",
      description: "A comprehensive undergraduate program covering all fundamental areas of physics with hands-on laboratory experience.",
      icon: BookOpen,
      features: ["Core physics curriculum", "Laboratory experience", "Research opportunities", "Industry partnerships"]
    },
    {
      title: "Master of Science in Physics",
      duration: "2 years",
      description: "Advanced graduate program allowing specialization in theoretical or experimental physics with thesis research.",
      icon: GraduationCap,
      features: ["Specialized coursework", "Thesis research", "Teaching experience", "Conference presentations"]
    },
    {
      title: "Doctor of Philosophy in Physics",
      duration: "4-6 years",
      description: "Our premier doctoral program training the next generation of physics researchers and educators.",
      icon: Award,
      features: ["Original research", "Dissertation defense", "Publication opportunities", "International collaborations"]
    }
  ];

  const stats = [
    { number: "95%", label: "Graduate Employment Rate" },
    { number: "150+", label: "Faculty Members" },
    { number: "20:1", label: "Student-Faculty Ratio" },
    { number: "$2M+", label: "Annual Research Funding" }
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
                Study
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Join our world-class physics programs and become part of a community 
                dedicated to understanding the fundamental nature of the universe.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
              Academic Programs
            </h2>
            
            <div className="space-y-8">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="physics-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid md:grid-cols-4 gap-8 items-center">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                        <program.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                        <p className="text-primary font-medium">{program.duration}</p>
                      </div>
                      <p className="text-foreground/80">{program.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {program.features.map((feature, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full md:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-foreground/80 font-medium">
                    {stat.label}
                  </div>
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

export default Study;