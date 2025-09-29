import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenuHeader } from '@/components/ui/dropdown-menu-header';
import { Link } from 'react-router-dom';
import physicsLogo from '@/assets/physics-dept-logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <header className="w-full bg-oxford-blue backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Oxford-style single-line header */}
        <div className="flex items-center justify-between py-4">
          {/* Left: Logo + Department Name */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
              <img src={physicsLogo} alt="Department of Physics" className="h-12 w-12" />
              <div className="text-white">
                <div className="text-xs font-medium tracking-wider uppercase">DEPARTMENT OF</div>
                <div className="text-2xl font-bold tracking-wider">PHYSICS</div>
              </div>
            </Link>
          </div>

          {/* Center: Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-white/80 text-sm uppercase tracking-wide font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Right: Search + Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search (Desktop) */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input 
                    placeholder="Search..." 
                    className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Menu Button */}
            <div className="hidden lg:flex">
              <DropdownMenuHeader 
                isOpen={isDropdownOpen} 
                onToggle={() => setIsDropdownOpen(!isDropdownOpen)} 
              />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-white/20`}>
          <div className="flex flex-col py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-white/80 py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};