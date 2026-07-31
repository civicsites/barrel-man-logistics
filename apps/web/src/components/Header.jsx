import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/services', label: 'Services' },
    { path: '/sizes', label: 'Dumpster Sizes' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/faq', label: 'FAQ' },
    { path: '/rules', label: 'Rules' },
    { path: '/service-area', label: 'Service Area' },
    { path: '/contact', label: 'Contact' }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/logo.jpg" 
              alt="Barrel Man Logistics logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a 
              href="tel:7576180273" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now: (757) 618-0273
            </a>
          </div>
          
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button 
                  className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/5'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a 
                    href="tel:7576180273" 
                    className="btn-primary inline-flex items-center justify-center gap-2 mt-4"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: (757) 618-0273
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;