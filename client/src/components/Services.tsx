import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Bath, Home, Palmtree, Warehouse, Hammer } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
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
          
          {/* Card body with description */}
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Custom Home Builds",
      description: "Bring your vision to life with a home that's 100% you—inside and out."
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Whole-Home Remodels",
      description: "Reimagine your space: contemporary, efficient, and perfectly yours."
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" />,
      title: "Kitchen Transformations",
      description: "Cook, entertain, and connect in a kitchen designed for your lifestyle."
    },
    {
      icon: <Bath className="h-6 w-6" />,
      title: "Bathroom Retreats",
      description: "Relax and recharge with spa-inspired designs and luxury fixtures."
    },
    {
      icon: <Warehouse className="h-6 w-6" />,
      title: "Basement Finishes",
      description: "Unlock bonus living space—home theater, gym, or guest suite."
    },
    {
      icon: <Palmtree className="h-6 w-6" />,
      title: "Outdoor Kitchens & Living",
      description: "Extend your living space into the fresh Idaho air and make every season memorable."
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral overflow-hidden bg-subtle-angles">
      {/* Background patterns and effects */}
      <div className="absolute inset-0 -z-10">
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
              Our Signature <span className="text-accent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600">
              Whether you're starting fresh with a custom build or reimagining your current space, our team is here 
              to guide you every step of the way—bringing your vision to life on time, on budget, and beyond expectations.
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
            <span className="relative z-10">Transform Your Home Today</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
