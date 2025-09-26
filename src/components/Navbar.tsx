import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-medium text-primary tracking-tight">
              Cafe90Delice
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-[var(--transition-smooth)] ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Reservation Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 border border-primary/20">
              Reserve Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary transition-[var(--transition-quick)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-[var(--transition-smooth)] ${
                  isActive(item.href)
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg w-full border border-primary/20">
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;