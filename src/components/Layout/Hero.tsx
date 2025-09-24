import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-physics-lab.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="particle-background"></div>
      
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="S.B.E.S. Physics Laboratory" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            Department of Physics
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-foreground/90">
              S.B.E.S. College of Science
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-foreground/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We apply the transformative power of physics to the foremost scientific problems; 
            educate the next generation of leading physicists; and promote the public understanding of physics.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero text-lg" size="lg">
              RESEARCH
            </Button>
            <Button className="btn-hero text-lg" size="lg">
              STUDY
            </Button>
            <Button className="btn-hero text-lg" size="lg">
              ENGAGE
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};