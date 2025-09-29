import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import physicsLogo from '@/assets/physics-dept-logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* College Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={physicsLogo} alt="Department of Physics" className="h-10 w-10" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">S.B.E.S. College of Science</h3>
              <p className="text-foreground/70 leading-relaxed">
                Department of Physics
              </p>
              <p className="text-foreground/70 leading-relaxed mt-2">
                Advancing scientific knowledge and educating the next generation of physicists through cutting-edge research and innovative teaching.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/research" className="nav-link">Research</a></li>
              <li><a href="/study" className="nav-link">Study Programs</a></li>
              <li><a href="/people" className="nav-link">Our People</a></li>
              <li><a href="/facilities" className="nav-link">Facilities</a></li>
              <li><a href="/news" className="nav-link">News</a></li>
              <li><a href="/events" className="nav-link">Events</a></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Students</h3>
            <ul className="space-y-3">
              <li><a href="/admissions" className="nav-link">Admissions</a></li>
              <li><a href="/undergraduate" className="nav-link">Undergraduate</a></li>
              <li><a href="/graduate" className="nav-link">Graduate</a></li>
              <li><a href="/student-resources" className="nav-link">Student Resources</a></li>
              <li><a href="/careers" className="nav-link">Career Services</a></li>
              <li><a href="/library" className="nav-link">Library</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/80">
                    SBES College Of Arts&Commerce<br />
                    Saraswatinagar, Saraswati Colony<br />
                    Aurangpura, Chhatrapati Sambhajinagar<br />
                    Maharashtra 431001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">physics@sbes.edu</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              <p>&copy; {currentYear} S.B.E.S. College of Science - Department of Physics. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">Terms of Use</a>
              <a href="/accessibility" className="text-foreground/60 hover:text-foreground transition-colors">Accessibility</a>
              <a href="/sitemap" className="text-foreground/60 hover:text-foreground transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};