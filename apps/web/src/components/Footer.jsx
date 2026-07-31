import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

function Footer() {
  const serviceAreas = [
    'Virginia Beach',
    'Norfolk',
    'Chesapeake',
    'Portsmouth',
    'Suffolk',
    'Hampton',
    'Newport News',
    'Surrounding Hampton Roads Communities'
  ];
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <p className="text-xl font-bold mb-4">Barrel Man Logistics LLC</p>
            <div className="flex items-start gap-3 mb-4">
              <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-accent">Veteran-Owned SDVOSB</p>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  Service-Disabled Veteran-Owned Small Business
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <p className="text-primary-foreground/80">Virginia Beach, Virginia</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <div className="space-y-3">
              <a 
                href="tel:7576180273" 
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(757) 618-0273</span>
              </a>
              <a 
                href="mailto:barrelmanlogistics@outlook.com" 
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors duration-200 break-all"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>barrelmanlogistics@outlook.com</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Quick Links</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link to="/contact" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
                  Get a Quote
                </Link>
                <Link to="/faq" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
                  FAQ
                </Link>
                <Link to="/rules" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
                  Dumpster Rules
                </Link>
              </div>
            </div>
          </div>
          
          {/* Service Area */}
          <div>
            <p className="text-lg font-semibold mb-4">Service Area</p>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-sm text-primary-foreground/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Barrel Man Logistics LLC. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;