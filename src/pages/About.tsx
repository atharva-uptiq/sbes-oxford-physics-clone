import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, BookOpen, Microscope } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "25+",
      label: "Faculty Members",
      description: "Distinguished researchers and educators"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Students",
      description: "Undergraduate and graduate students"
    },
    {
      icon: Award,
      number: "50+",
      label: "Research Papers",
      description: "Published annually in top journals"
    },
    {
      icon: Microscope,
      number: "10+",
      label: "Research Labs",
      description: "State-of-the-art facilities"
    }
  ];

  const history = [
    {
      year: "1985",
      event: "Department Established",
      description: "The Department of Physics was founded as part of S.B.E.S. College of Science."
    },
    {
      year: "1992",
      event: "First PhD Program",
      description: "Launched our first doctoral program in theoretical physics."
    },
    {
      year: "2005",
      event: "Research Excellence",
      description: "Received recognition for outstanding research contributions in quantum mechanics."
    },
    {
      year: "2015",
      event: "International Collaborations",
      description: "Established partnerships with leading international physics institutions."
    },
    {
      year: "2020",
      event: "Modern Facilities",
      description: "Inaugurated new research laboratories and upgraded existing facilities."
    },
    {
      year: "2024",
      event: "Continued Growth",
      description: "Expanding research programs and strengthening academic excellence."
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Learn about our history, mission, and commitment to advancing physics education and research.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Department of Physics at S.B.E.S. College of Science is committed to advancing the frontiers of physics knowledge through innovative research, providing exceptional education to the next generation of physicists, and fostering scientific literacy in our community. We strive to create an inclusive environment where curiosity-driven research thrives and students develop the skills needed to tackle the world's most challenging scientific problems.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center hover-scale">
                    <CardHeader>
                      <div className="mx-auto p-3 rounded-lg bg-primary/10 w-fit">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-primary">
                        {stat.number}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold">
                        {stat.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Department History */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {history.map((milestone, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-xl">{milestone.event}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We pursue the highest standards in research, teaching, and service to the scientific community.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We embrace creative approaches to solving complex problems and advancing scientific knowledge.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We foster partnerships within our department, across disciplines, and with institutions worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
              <p className="text-lg leading-relaxed">
                To be a leading center of physics education and research, recognized globally for our contributions to scientific knowledge and our commitment to training the next generation of scientists who will shape the future of physics and technology.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;