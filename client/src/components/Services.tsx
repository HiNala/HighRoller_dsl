import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Home, Building, Puzzle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="h-6 w-6 text-accent" />,
      title: "Custom Home Construction",
      description: "From design collaboration to final walkthrough, we build your dream home with meticulous attention to detail.",
      features: [
        "Architectural design collaboration",
        "Premium material selection",
        "Energy-efficient construction"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-accent" />,
      title: "Commercial Construction",
      description: "Creating functional, impressive commercial spaces that enhance productivity and represent your brand.",
      features: [
        "Office buildings & retail spaces",
        "Restaurants & hospitality",
        "Medical & specialized facilities"
      ]
    },
    {
      icon: <Puzzle className="h-6 w-6 text-accent" />,
      title: "Renovations & Remodeling",
      description: "Transforming existing structures with modern updates while preserving character and enhancing functionality.",
      features: [
        "Kitchen & bathroom remodels",
        "Whole-home renovations",
        "Historic property restoration"
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From custom homes to commercial developments, we offer comprehensive construction services tailored to your needs.</p>
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
