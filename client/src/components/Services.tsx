import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Bath, Home, Palmtree, PencilRuler, Paintbrush } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ icon, title, description, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-all duration-300 group relative z-10"
      >
        {/* Inner glow when hovered */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0"></div>
        
        <div className="flex flex-col h-full relative z-10">
          {/* Card header with icon and title */}
          <div className="bg-primary/5 p-6 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                {icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>
          
          {/* Card body with description and features */}
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            
            <div className="mt-auto">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-3 mt-0.5">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Kitchen Remodels",
      description: "Transform your kitchen into a beautiful and functional space with our expert design and construction services.",
      features: [
        "Custom cabinetry and countertops",
        "Modern appliance integration",
        "Open concept designs",
        "Lighting and electrical upgrades"
      ]
    },
    {
      icon: <Bath className="h-6 w-6" />,
      title: "Bathroom Remodels",
      description: "Create a spa-like retreat with our bathroom renovation services that blend luxury and practicality.",
      features: [
        "Custom showers and tubs",
        "Vanity and storage solutions", 
        "Tile work and fixtures",
        "Waterproofing and ventilation"
      ]
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Home Additions",
      description: "Expand your living space with custom additions that seamlessly integrate with your existing home architecture.",
      features: [
        "Room additions and expansions",
        "Second story additions",
        "In-law suites and guest rooms",
        "Structural engineering"
      ]
    },
    {
      icon: <Palmtree className="h-6 w-6" />,
      title: "Outdoor Living",
      description: "Extend your living space into the outdoors with beautiful and functional exterior spaces for relaxation and entertainment.",
      features: [
        "Custom decks and patios",
        "Outdoor kitchens and fireplaces",
        "Pergolas and covered areas",
        "Landscape integration"
      ]
    },
    {
      icon: <PencilRuler className="h-6 w-6" />,
      title: "Design Services",
      description: "Our professional design team will help bring your vision to life with detailed plans tailored to your lifestyle and preferences.",
      features: [
        "3D modeling and visualization",
        "Material and finish selection",
        "Space planning and optimization",
        "Permit-ready documentation"
      ]
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Interior Renovations",
      description: "Revitalize your interior spaces with our comprehensive renovation services that enhance both aesthetics and functionality.",
      features: [
        "Wall removal and reconfiguration",
        "Flooring and trim installation",
        "Custom built-ins and cabinetry",
        "Painting and finishing"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral overflow-hidden">
      {/* Background patterns and effects */}
      <div className="absolute inset-0 -z-10">
        {/* Dotted background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#D88F2C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        {/* Blurred circles for visual interest */}
        <div className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary mb-4">
              Comprehensive <span className="text-accent">Construction</span> Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600">
              Specializing in residential remodeling projects, we transform kitchens, bathrooms, and living spaces to make your dream home a reality, with attention to detail and exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', '#contact');
              }
            }}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md shadow-md inline-flex items-center font-medium transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Request a Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
