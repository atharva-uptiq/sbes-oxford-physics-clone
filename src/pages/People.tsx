import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const People = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Ahmed",
      position: "Professor of Theoretical Physics",
      specialization: "Quantum Mechanics, String Theory",
      email: "sarah.ahmed@sbes.edu"
    },
    {
      name: "Dr. Michael Chen",
      position: "Associate Professor",
      specialization: "Condensed Matter Physics",
      email: "michael.chen@sbes.edu"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Assistant Professor",
      specialization: "Astrophysics, Cosmology",
      email: "emily.rodriguez@sbes.edu"
    },
    {
      name: "Dr. James Wilson",
      position: "Professor Emeritus",
      specialization: "Nuclear Physics",
      email: "james.wilson@sbes.edu"
    },
    {
      name: "Dr. Priya Patel",
      position: "Lecturer",
      specialization: "Biophysics, Medical Physics",
      email: "priya.patel@sbes.edu"
    },
    {
      name: "Dr. David Thompson",
      position: "Research Professor",
      specialization: "Particle Physics, CERN Collaboration",
      email: "david.thompson@sbes.edu"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our People</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Meet our distinguished faculty, researchers, and staff who are advancing the frontiers of physics.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Faculty Members</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facultyMembers.map((member, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mb-2">
                        {member.position}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-sm text-primary">
                      {member.email}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Groups */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Research Groups</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quantum Physics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Exploring quantum mechanics and its applications in technology and computation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Astrophysics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Studying celestial objects, cosmic phenomena, and the evolution of the universe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Condensed Matter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Investigating the properties of solid and liquid matter at the atomic scale.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Particle Physics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Researching fundamental particles and their interactions in high-energy environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default People;