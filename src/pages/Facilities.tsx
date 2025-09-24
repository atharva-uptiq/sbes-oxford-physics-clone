import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Microscope, Zap, Atom, Telescope } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      name: "Advanced Materials Laboratory",
      description: "State-of-the-art facility for synthesis and characterization of novel materials including superconductors, semiconductors, and nanomaterials.",
      equipment: ["Scanning Electron Microscope", "X-Ray Diffractometer", "FTIR Spectrometer", "AFM/STM"],
      icon: Microscope,
      category: "Research Lab"
    },
    {
      name: "Quantum Optics Laboratory",
      description: "Specialized facility for quantum mechanics experiments, laser physics, and optical research with precision measurement capabilities.",
      equipment: ["Femtosecond Laser Systems", "Single Photon Detectors", "Interferometers", "Cryogenic Systems"],
      icon: Zap,
      category: "Research Lab"
    },
    {
      name: "Particle Physics Detector Lab",
      description: "Advanced facility for developing and testing particle detection systems and analyzing data from international collaborations.",
      equipment: ["Silicon Strip Detectors", "Calorimeters", "Muon Chambers", "Data Acquisition Systems"],
      icon: Atom,
      category: "Research Lab"
    },
    {
      name: "Astronomical Observatory",
      description: "On-campus observatory with modern telescopes for astronomical observations and astrophysics research.",
      equipment: ["14-inch Reflector Telescope", "CCD Cameras", "Spectroscopy Equipment", "Computerized Mount"],
      icon: Telescope,
      category: "Observatory"
    }
  ];

  const services = [
    {
      title: "Equipment Training",
      description: "Comprehensive training programs for students and researchers on specialized equipment operation and safety protocols."
    },
    {
      title: "Technical Support",
      description: "Expert technical assistance for equipment maintenance, troubleshooting, and experimental design."
    },
    {
      title: "Sample Preparation",
      description: "Professional sample preparation services for various analytical techniques and research applications."
    },
    {
      title: "Data Analysis",
      description: "Advanced computational resources and software for data processing, modeling, and simulation."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research Lab': return 'bg-blue-100 text-blue-800';
      case 'Observatory': return 'bg-purple-100 text-purple-800';
      case 'Computing': return 'bg-green-100 text-green-800';
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Facilities & Services</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                World-class specialist equipment, facilities and services available to students and researchers.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Research Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our department houses cutting-edge research facilities that support groundbreaking research in various fields of physics.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <Card key={index} className="hover-scale">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{facility.name}</CardTitle>
                            <Badge className={getCategoryColor(facility.category)}>
                              {facility.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {facility.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Key Equipment:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {facility.equipment.map((item, equipIndex) => (
                          <li key={equipIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="mt-4">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Support Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive support services to facilitate your research and academic goals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Booking Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Equipment Access & Booking</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access our world-class facilities through our streamlined booking system. Training and safety certification required for all equipment.
              </p>
              
              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Research?</h3>
                <p className="mb-6">
                  Contact our facilities manager to schedule training sessions and book equipment time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Book Equipment
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                    Request Training
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Information */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Safety First</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All our facilities maintain the highest safety standards. Comprehensive safety training and proper certification are required before accessing any equipment.
            </p>
            <Button>View Safety Guidelines</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;