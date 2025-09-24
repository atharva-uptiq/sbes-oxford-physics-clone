import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import sbesLogo from '@/assets/sbes-logo.png';
import physicsLogo from '@/assets/physics-dept-logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Study', href: '/study' },
    { name: 'Engage', href: '/engage' },
    { name: 'Our people', href: '/people' },
    { name: 'News & Comment', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Our facilities & services', href: '/facilities' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logos */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <img src={sbesLogo} alt="S.B.E.S. College of Science" className="h-12 w-12" />
            <img src={physicsLogo} alt="Department of Physics" className="h-10" />
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input 
                    placeholder="Search..." 
                    className="w-64"
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                  <span className="ml-2 hidden lg:inline">Search</span>
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-border md:border-t-0`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-4 md:py-0">
            {/* Main navigation items */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 lg:space-x-8">
              {navigationItems.slice(0, 4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link py-2 md:py-4 text-sm lg:text-base uppercase tracking-wide font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Menu button for desktop */}
            <div className="hidden md:flex md:ml-auto">
              <Button variant="outline" className="uppercase tracking-wide font-medium">
                Menu
                <Menu className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile navigation items */}
            <div className="flex flex-col space-y-2 mt-4 md:hidden">
              {navigationItems.slice(4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link py-2 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};