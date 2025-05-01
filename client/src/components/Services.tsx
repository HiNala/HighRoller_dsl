import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Home, Building, Puzzle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="h-6 w-6 text-accent" />,
      title: "Kitchen Remodels",
      description: "Transform your kitchen into a beautiful and functional space with our expert design and construction services.",
      features: [
        "Custom cabinetry and countertops",
        "Modern appliance integration",
        "Open concept designs"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-accent" />,
      title: "Bathroom Remodels",
      description: "Create a spa-like retreat with our bathroom renovation services that blend luxury and practicality.",
      features: [
        "Custom showers and tubs",
        "Vanity and storage solutions", 
        "Tile work and fixtures"
      ]
    },
    {
      icon: <Puzzle className="h-6 w-6 text-accent" />,
      title: "Additions & Outdoor Living",
      description: "Expand your living space with beautiful additions and outdoor areas that enhance your lifestyle and home value.",
      features: [
        "Room additions and expansions",
        "Custom decks and patios",
        "Outdoor kitchens and living spaces"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specializing in residential remodeling projects, we transform kitchens, bathrooms, and outdoor living spaces to make your dream home a reality.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
