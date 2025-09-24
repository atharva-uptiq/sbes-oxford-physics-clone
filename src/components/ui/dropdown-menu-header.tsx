import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DropdownMenuHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DropdownMenuHeader = ({ isOpen, onToggle }: DropdownMenuHeaderProps) => {
  const menuItems = [
    { name: 'Our people', href: '/people' },
    { name: 'News & Comment', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Our facilities & services', href: '/facilities' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        className="uppercase tracking-wide font-medium flex items-center"
        onClick={onToggle}
      >
        Menu
        {isOpen ? <X className="ml-2 h-4 w-4" /> : <Menu className="ml-2 h-4 w-4" />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40" 
            onClick={onToggle}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-background border rounded-lg shadow-lg z-50 overflow-hidden">
            <div className="p-4 border-b bg-secondary/10">
              <h3 className="font-semibold text-lg">Department Menu</h3>
            </div>
            <nav className="py-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-sm hover:bg-secondary/10 transition-colors group"
                  onClick={onToggle}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};