import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Oxford Symposium on Quantum Materials 2024",
      description: "An annual interdisciplinary forum to bring together physicists, chemists, materials scientists and theoreticians to advance the science and promote direct collaboration in novel quantum materials.",
      date: "November 23-24, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Physics Auditorium",
      category: "Conference",
      featured: true
    },
    {
      title: "30th Hintze Lecture: Black Holes in the Cosmos",
      description: "Professor Janna Levin & Professor Sir Roger Penrose will deliver the 30th Hintze Lecture on black holes and their role in the cosmos.",
      date: "October 14, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Main Auditorium",
      category: "Public Lecture",
      featured: true
    },
    {
      title: "Cloud Mesoscale Organisation and Climate",
      description: "Join us for the 2024 Halley Public lecture on new insights from models and observations.",
      date: "October 16, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Lecture Hall A",
      category: "Public Lecture",
      featured: false
    },
    {
      title: "Saturday Morning of Theoretical Physics",
      description: "The Quantum Strong Force - A comprehensive exploration of fundamental forces in nature.",
      date: "October 25, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Beecroft Building",
      category: "Alumni Event",
      featured: false
    },
    {
      title: "Graduate Student Research Symposium",
      description: "Annual showcase of cutting-edge research by our graduate students across all physics disciplines.",
      date: "November 8, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Department Conference Room",
      category: "Academic",
      featured: false
    },
    {
      title: "Physics Department Open House",
      description: "Explore our laboratories, meet faculty and students, and learn about research opportunities.",
      date: "November 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Physics Building",
      category: "Open House",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Conference': return 'bg-blue-100 text-blue-800';
      case 'Public Lecture': return 'bg-green-100 text-green-800';
      case 'Alumni Event': return 'bg-purple-100 text-purple-800';
      case 'Academic': return 'bg-yellow-100 text-yellow-800';
      case 'Open House': return 'bg-pink-100 text-pink-800';
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Join us for lectures, conferences, workshops, and special events that showcase the latest in physics research and education.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {upcomingEvents.filter(event => event.featured).map((event, index) => (
                <Card key={index} className="hover-scale overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center text-primary">
                      <Calendar className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">{event.date}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    </div>
                    <Button className="mt-4">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">All Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      {event.featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Calendar CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our event calendar to stay updated on all department activities and special lectures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Subscribe to Calendar</Button>
              <Button variant="outline" size="lg">Download Event Guide</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;