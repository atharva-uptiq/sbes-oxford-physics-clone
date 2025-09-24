import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Quantum Physics Symposium 2025",
    description: "Join leading physicists from around the world for discussions on the latest advances in quantum mechanics and quantum computing.",
    date: "October 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "S.B.E.S. Main Auditorium",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=780&h=440&auto=format&fit=crop",
    category: "Symposium"
  },
  {
    id: 2,
    title: "Physics Colloquium: Black Holes and Spacetime",
    description: "Distinguished lecture on recent discoveries in black hole physics and their implications for our understanding of spacetime.",
    date: "October 8, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Physics Lecture Hall A",
    image: "https://images.unsplash.com/photo-1446776887654-d8b5e9b6b1b1?q=80&w=780&h=440&auto=format&fit=crop",
    category: "Colloquium"
  },
  {
    id: 3,
    title: "Student Research Showcase",
    description: "Annual showcase of undergraduate and graduate student research projects across all areas of physics.",
    date: "October 12, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Student Center Atrium",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=780&h=440&auto=format&fit=crop",
    category: "Student Event"
  }
];

export const EventsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in-up">
          Upcoming events
        </h2>

        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className="physics-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {event.title}
                  </h3>
                  
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="btn-hero">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="animate-fade-in-up">
            View all events
          </Button>
        </div>
      </div>
    </section>
  );
};