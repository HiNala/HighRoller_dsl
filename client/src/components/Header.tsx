import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/logo";
import useScrollEffect from "@/lib/useScrollEffect";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/70'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-display text-xl font-semibold text-primary">Morrison Construction</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Home</Link>
            <Link href="#projects" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Projects</Link>
            <Link href="#services" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Services</Link>
            <Link href="#about" className="text-primary hover:text-accent transition-colors duration-200 font-medium">About</Link>
            <Link href="#contact" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Contact</Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-primary hover:text-accent"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-primary hover:text-accent transition-colors duration-200 font-medium py-2">Home</Link>
              <Link href="#projects" className="text-primary hover:text-accent transition-colors duration-200 font-medium py-2">Projects</Link>
              <Link href="#services" className="text-primary hover:text-accent transition-colors duration-200 font-medium py-2">Services</Link>
              <Link href="#about" className="text-primary hover:text-accent transition-colors duration-200 font-medium py-2">About</Link>
              <Link href="#contact" className="text-primary hover:text-accent transition-colors duration-200 font-medium py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
