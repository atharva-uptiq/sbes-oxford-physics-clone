import { Button } from '@/components/ui/button';

export const FeaturedSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="physics-card overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1920&h=1080&auto=format&fit=crop"
                alt="Quantum Computing Laboratory"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse-glow"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              The future is quantum
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Find out how our research is building the quantum technologies of tomorrow, 
              how we are educating and inspiring future pioneers of quantum technology 
              and how our research is being applied to real life, right now...
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="btn-hero" size="lg">
                Quantum at S.B.E.S.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};