import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Engage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Engage</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Discover how physics shapes our world through public events, school visits, and community outreach programs.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Public Lectures</CardTitle>
                  <CardDescription>
                    Join our renowned faculty for public lectures on cutting-edge physics research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>School Visits</CardTitle>
                  <CardDescription>
                    Interactive physics demonstrations and workshops for schools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Community Outreach</CardTitle>
                  <CardDescription>
                    Physics in the community through partnerships and public engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Public Events</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Physics Open Day</CardTitle>
                  <CardDescription>November 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Join us for an interactive exploration of our research facilities and meet our faculty and students.
                  </p>
                  <Button>Register Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Science Fair Competition</CardTitle>
                  <CardDescription>December 3, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Annual science fair showcasing student projects and innovations in physics and related fields.
                  </p>
                  <Button>Learn More</Button>
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

export default Engage;