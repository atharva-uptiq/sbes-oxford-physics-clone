import { useParams } from 'react-router-dom';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Mail } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  
  const events = [
    {
      id: 1,
      title: "Quantum Physics Symposium 2025",
      description: "Join leading physicists from around the world for discussions on the latest advances in quantum mechanics and quantum computing.",
      fullDescription: "This two-day symposium brings together renowned physicists, researchers, and industry experts to explore the cutting-edge developments in quantum physics. The event will feature keynote presentations, panel discussions, poster sessions, and networking opportunities. Topics will cover quantum computing, quantum cryptography, quantum sensing, and fundamental quantum mechanics research.",
      date: "October 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "S.B.E.S. Main Auditorium",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&h=600&auto=format&fit=crop",
      category: "Symposium",
      speakers: ["Prof. John Wheeler", "Dr. Sarah Chen", "Prof. Maria Rodriguez"],
      capacity: "300 attendees",
      registrationDeadline: "October 1, 2025",
      contact: "events@sbes.edu"
    },
    {
      id: 2,
      title: "Physics Colloquium: Black Holes and Spacetime",
      description: "Distinguished lecture on recent discoveries in black hole physics and their implications for our understanding of spacetime.",
      fullDescription: "This special colloquium features Dr. Elena Petrov, a leading expert in general relativity and black hole physics. The lecture will cover recent observational discoveries, including gravitational wave detections and black hole imaging, and their theoretical implications for our understanding of spacetime structure and quantum gravity.",
      date: "October 8, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Physics Lecture Hall A",
      image: "https://images.unsplash.com/photo-1446776887654-d8b5e9b6b1b1?q=80&w=1200&h=600&auto=format&fit=crop",
      category: "Colloquium",
      speakers: ["Dr. Elena Petrov"],
      capacity: "150 attendees",
      registrationDeadline: "October 5, 2025",
      contact: "colloquium@sbes.edu"
    },
    {
      id: 3,
      title: "Student Research Showcase",
      description: "Annual showcase of undergraduate and graduate student research projects across all areas of physics.",
      fullDescription: "The annual Student Research Showcase provides a platform for undergraduate and graduate students to present their research findings to the academic community. The event includes oral presentations, poster sessions, and awards for outstanding research. This year's showcase features projects in experimental physics, theoretical physics, and interdisciplinary research.",
      date: "October 12, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Student Center Atrium",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&h=600&auto=format&fit=crop",
      category: "Student Event",
      speakers: ["Student Researchers", "Faculty Judges"],
      capacity: "200 attendees",
      registrationDeadline: "October 8, 2025",
      contact: "studentresearch@sbes.edu"
    }
  ];

  const event = events.find(e => e.id === parseInt(id || '1'));

  if (!event) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl font-bold">Event not found</h1>
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
              <Badge className="mb-4">{event.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                {event.title}
              </h1>
            </div>
            
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg mb-12">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Event Info */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    {event.description}
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    {event.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Speakers</h3>
                  <ul className="space-y-2">
                    {event.speakers.map((speaker, index) => (
                      <li key={index} className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        <span>{speaker}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Event Details Sidebar */}
              <div className="space-y-6">
                <div className="physics-card">
                  <h3 className="text-lg font-bold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{event.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{event.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Capacity</div>
                        <div className="text-sm text-foreground/70">{event.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Contact</div>
                        <div className="text-sm text-foreground/70">{event.contact}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="physics-card">
                  <h3 className="text-lg font-bold mb-4">Registration</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    Registration deadline: {event.registrationDeadline}
                  </p>
                  <Button className="w-full btn-hero">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="physics-card">
              <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Expert presentations and discussions</li>
                    <li>• Networking opportunities</li>
                    <li>• Q&A sessions with speakers</li>
                    <li>• Light refreshments provided</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Who Should Attend</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Students and researchers</li>
                    <li>• Faculty members</li>
                    <li>• Industry professionals</li>
                    <li>• Anyone interested in physics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;