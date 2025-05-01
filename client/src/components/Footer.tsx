import Logo from './ui/logo';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="font-display text-xl font-semibold">Morrison Construction</span>
            </div>
            <p className="text-gray-400 mb-4">Building Boise Better – Residential & Commercial Excellence Since 2010.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Dribbble">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Custom Home Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Renovations & Remodeling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Design-Build Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Construction Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-accent transition-colors">Projects</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Construction Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">FAQ</a></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Morrison Construction LLC. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
