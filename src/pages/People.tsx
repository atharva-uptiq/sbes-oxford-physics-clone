import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';

const People = () => {
  const sections = [
    {
      name: "Junior College",
      facultyMembers: [
        {
          name: "Shweta Prakash Jagtap",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed., SET, GATE",
          email: "shwetajagtap1122@gmail.com",
          phone: "8767423171"
        },
        {
          name: "Digvijayshree R. Ambewadikar",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed.",
          email: "digvijayshree83@gmail.com",
          phone: "9158455222"
        },
        {
          name: "Avinash Vijay Tandale",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), M.Ed.",
          email: "avinash.tandale@gmail.com",
          phone: "9823438318"
        },
        {
          name: "Mohan Dnyandeo Ingle",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed., M.Phil.",
          email: "mohaningle1873@gmail.com",
          phone: "8669071172"
        },
        {
          name: "Kishor S. Patil",
          position: "Junior College Teacher",
          specialization: "M.Sc. (Physics), B.Ed.",
          email: "kishorpatilsep@gmail.com",
          phone: "9923641975"
        },
        {
          name: "Shubham Krushna Gawande",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed., B.Lib., PGDMC",
          email: "shubham.140694@gmail.com",
          phone: "9767622748"
        },
        {
          name: "Prasenjit Tanaji Tayade",
          position: "Jr. College Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed., B.Ped., M.Ped.",
          email: "pttayade@gmail.com",
          phone: "9890939687"
        },
        {
          name: "Harish Ramsing Barode",
          position: "Assistant Teacher",
          specialization: "M.Sc. (Physics), B.Ed.",
          email: "harishbarode81@gmail.com",
          phone: "9923844956"
        }
      ]
    },
    {
      name: "UG",
      facultyMembers: [
        {
          name: "Avinash Rajendra Kachere",
          position: "Assistant Professor",
          specialization: "M.Sc. (Physics), NET",
          email: "avinash.kachere@gmail.com",
          phone: "8554954978"
        },
        {
          name: "Dr. Sushama Vikas Vaidya",
          position: "Associate Professor",
          specialization: "M.Sc. (Physics), B.Ed., Ph.D.",
          email: "vaidyasushama3@gmail.com",
          phone: "9834578274"
        },
        {
          name: "Dr. Swapnil G. Dhole",
          position: "Assistant Professor",
          specialization: "M.Sc. (Physics), Ph.D.",
          email: "swapnildhole@gmail.com",
          phone: null
        },
        {
          name: "Avinash R. Kachere",
          position: "Assistant Professor",
          specialization: "M.Sc. (Physics), NET",
          email: null,
          phone: null
        },
        {
          name: "Harish A. Kulkarni",
          position: "Assistant Professor",
          specialization: "M.Sc. (Physics), SET",
          email: null,
          phone: null
        }
      ]
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

        {/* Faculty Sections */}
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">{section.name}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.facultyMembers.map((member, memberIndex) => (
                  <Card key={memberIndex} className="physics-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="mb-2">
                          {member.position}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.specialization}
                      </p>
                      
                      {/* Contact Information */}
                      <div className="space-y-2">
                        {member.email && (
                          <div className="flex items-center gap-2 text-sm text-primary">
                            <Mail className="h-4 w-4" />
                            <span>{member.email}</span>
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>{member.phone}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

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