import Logo from './ui/logo';
import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Logo />
              <span className="font-display text-xl font-semibold">Morrison Construction</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building Boise Better – Residential & Commercial Excellence. Specializing in custom construction with craftsmanship that exceeds expectations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors duration-300" 
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors duration-300" 
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-colors duration-300" 
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Custom Home Construction',
                'Kitchen & Bath Remodels',
                'Home Additions',
                'Outdoor Living Spaces',
                'Interior Design'
              ].map((service, index) => (
                <li key={index} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#services');
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                {name: 'About Us', href: '#about'},
                {name: 'Projects', href: '#projects'},
                {name: 'Services', href: '#services'},
                {name: 'Testimonials', href: '#testimonials'},
                {name: 'Contact', href: '#contact'},
              ].map((link, index) => (
                <li key={index} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.substring(1);
                      const section = document.getElementById(targetId);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', link.href);
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-300">
                  13601 W McMillan Rd Suite#102-268<br />
                  Boise, ID 83713
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent shrink-0 mr-3" />
                <a href="tel:+12089990030" className="text-gray-300 hover:text-white transition-colors duration-200">
                  (208) 999-0030
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent shrink-0 mr-3" />
                <a href="mailto:info@morrisonconstruction.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@morrisonconstruction.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-accent shrink-0 mr-3" />
                <span className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Morrison Construction LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
