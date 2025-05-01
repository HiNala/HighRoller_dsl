import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./ui/logo";
import useScrollEffect from "@/lib/useScrollEffect";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);

  // Close mobile menu when user clicks outside or presses escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items with their respective section IDs
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    // Special case for Home - scroll to top
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Update URL without the hash
      window.history.pushState(null, '', '/');
      return;
    }
    
    // Process hash links
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without causing a page refresh
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
      isScrolled ? 'shadow-md' : 'border-b border-neutral/20'
    } py-4`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <Logo />
            <span className="font-display text-xl font-semibold text-primary transition-colors duration-200 group-hover:text-accent">
              Morrison Construction
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-primary hover:text-accent relative text-sm font-medium tracking-wide transition-colors duration-200 py-2"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
              </Link>
            ))}
            
            <a 
              href="tel:+12089990030"
              className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors shadow-sm"
              aria-label="Call us at (208) 999-0030"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(208) 999-0030</span>
            </a>
          </nav>
          
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-primary hover:text-accent transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border border-neutral/10"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-1 px-4">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-primary hover:text-accent hover:bg-neutral/30 transition-colors duration-200 font-medium py-3 px-3 rounded-md flex items-center"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <a 
                  href="tel:+12089990030"
                  className="flex items-center justify-center space-x-2 bg-accent text-white mt-3 px-4 py-3 rounded-md hover:bg-accent/90 transition-colors shadow-sm"
                  aria-label="Call us at (208) 999-0030"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(208) 999-0030</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
